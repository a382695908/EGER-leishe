/**
 * Created by xiangtao on 2014.11.30.
 */
module TaotaoUtils{
    export function removeAllChildren(_displayObj:egret.DisplayObjectContainer):void{
        var t_len = _displayObj.numChildren;
        for(var i=0; i<t_len; i++){
            _displayObj.removeChildAt(0);
        }
    }

    /*����һ�� ����*/
    export function createRectangular(_x: number= 0, _y: number= 0, _w: number= 480, _h: number= 640, _alpha: number= 1, _color: number= 0x000000): egret.Sprite {
        var sprite1: egret.Sprite = new egret.Sprite();  //��Flashһ����alphaĬ��ֵΪ1
        sprite1.graphics.beginFill(_color, _alpha); sprite1.graphics.drawRect(_x, _y, _w, _h);
        sprite1.graphics.endFill();
        sprite1.width = _w; sprite1.height = _h;
        return sprite1;
    }

    /*
   ����һ���ı�����ɫ�����뷽ʽ��left,center,right)���ݣ����ִ�С���ı���ȣ�����ж��������л��У�
   �����ɫ��0������)��߳ߴ�(0������)x y ��ת�Ƕ� б��
   */
    export function createTextLabel(label1: egret.TextField, _color: number= 0x000000, _algin: string= "left", _text: string= "none", _size: number= 14, _width: number= 0,
        _strokeColor: number= 0, _stroke: number= 0, _x: number= 0, _y: number= 0, _rotaion: number= 0, _skewX: number= 0): egret.TextField {
        label1 = new egret.TextField();//����TextFieldʵ��
        label1.textColor = _color; label1.textAlign = _algin;
        label1.text = _text; label1.size = _size;
        if (_width != 0) { label1.width = _width; };
        if (_strokeColor != 0 && _stroke != 0) { label1.strokeColor = _strokeColor; label1.stroke = _stroke; };//��ߺ������ɫ����ͬʱ���ڲŽ������
        label1.rotation = _rotaion; if (_skewX != 0) { label1.skewX = _skewX; };
        label1.x = _x; label1.y = _y;
        return label1;
    }

    export function openFPS() {
        egret.Profiler.getInstance().run();
    }

    export function isMobile() :boolean{
        if (egret.MainContext.deviceType == egret.MainContext.DEVICE_MOBILE) {
            return true;
        }
        return false
    }

    

}