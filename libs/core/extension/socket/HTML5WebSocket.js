/**
 * Copyright (c) 2014,Egret-Labs.org
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the Egret-Labs.org nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
var egret;
(function (egret) {
    var HTML5WebSocket = (function () {
        function HTML5WebSocket() {
            if (!window["WebSocket"]) {
                egret.Logger.fatal("当前浏览器不支持WebSocket");
            }
        }
        HTML5WebSocket.prototype.addCallBacks = function (onConnect, onClose, onSocketData, onError, thisObject) {
            this.onConnect = onConnect;
            this.onClose = onClose;
            this.onSocketData = onSocketData;
            this.onError = onError;
            this.thisObject = thisObject;
        };
        HTML5WebSocket.prototype.connect = function (host, port) {
            this.host = host;
            this.port = port;
            var socketServerUrl = "ws://" + this.host + ":" + this.port;
            this.socket = new window["WebSocket"](socketServerUrl);
            this._bindEvent();
        };
        HTML5WebSocket.prototype._bindEvent = function () {
            var that = this;
            var socket = this.socket;
            socket.onopen = function () {
                if (that.onConnect) {
                    that.onConnect.call(that.thisObject);
                }
            };
            socket.onclose = function (e) {
                if (that.onClose) {
                    that.onClose.call(that.thisObject);
                }
            };
            socket.onerror = function (e) {
                if (that.onError) {
                    that.onError.call(that.thisObject);
                }
            };
            socket.onmessage = function (e) {
                if (that.onSocketData) {
                    that.onSocketData.call(that.thisObject, e.data);
                }
            };
        };
        HTML5WebSocket.prototype.send = function (message) {
            this.socket.send(message);
        };
        HTML5WebSocket.prototype.close = function () {
            this.socket.close();
        };
        return HTML5WebSocket;
    })();
    egret.HTML5WebSocket = HTML5WebSocket;
    HTML5WebSocket.prototype.__class__ = "egret.HTML5WebSocket";
})(egret || (egret = {}));
