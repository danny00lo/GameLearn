/**
 * Created by egret on 2016/1/25.
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var InformationUI = (function (_super) {
    __extends(InformationUI, _super);
    function InformationUI() {
        var _this = _super.call(this) || this;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.uiCompHandler, _this);
        _this.skinName = "resource/skins/infoUISkin.exml";
        return _this;
    }
    InformationUI.prototype.getInfo = function () {
        var self = this;
        var params = {
            gameId: BlackJack.requestHTTP().gameId
        };
        API.getGameInfo(params).then(function (res) {
            console.log(res);
            var abc = [];
            for (var i = 0; i < 1; i++) {
                var rankingObj = {
                    info: res.data.comment
                };
                abc.push(rankingObj);
            }
            self.infoMation.dataProvider = new eui.ArrayCollection(abc);
            self.infoMation.itemRenderer = InformationList;
        });
    };
    InformationUI.prototype.uiCompHandler = function () {
        this.getInfo();
    };
    InformationUI.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
    };
    return InformationUI;
}(eui.Component));
__reflect(InformationUI.prototype, "InformationUI");
var InformationList = (function (_super) {
    __extends(InformationList, _super);
    function InformationList() {
        var _this = _super.call(this) || this;
        _this.skinName = "infomationListSkin";
        return _this;
    }
    InformationList.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
    };
    InformationList.prototype.dataChanged = function () {
    };
    return InformationList;
}(eui.ItemRenderer));
__reflect(InformationList.prototype, "InformationList");
