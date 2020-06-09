var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var GameBegin = (function (_super) {
    __extends(GameBegin, _super);
    function GameBegin() {
        return _super.call(this) || this;
    }
    GameBegin.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GameBegin.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.begin_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handler, this);
    };
    GameBegin.prototype.handler = function () {
        SceneManager.Shared().chage('begin');
    };
    return GameBegin;
}(eui.Component));
__reflect(GameBegin.prototype, "GameBegin", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=GameBegin.js.map