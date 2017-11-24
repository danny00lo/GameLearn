var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BlackJack;
(function (BlackJack) {
    /**
    * 游戏说明及排行榜
    */
    var Information = (function (_super) {
        __extends(Information, _super);
        function Information() {
            var _this = _super.call(this) || this;
            _this.changing = false;
            return _this;
        }
        /**创建排行榜及说明页 */
        Information.prototype.createInformationeRankingPage = function (that) {
            var self = this;
            var clientWidth = that.stage.stageWidth / 750;
            var clientHeight = that.stage.stageHeight / 1206;
            this.background = BlackJack.createBitmapByName("infomationBackground_png");
            this.background.x = (that.stage.stageWidth - this.background.width) / 2;
            this.background.y = 178 * clientHeight;
            that.addChild(this.background);
            this.infoTab = BlackJack.createBitmapByName("infoTab_png");
            this.infoTab.x = 76 * clientWidth;
            this.infoTab.y = 178 * clientHeight;
            that.addChild(this.infoTab);
            this.rankingTab = BlackJack.createBitmapByName("rankingTab_nor_png");
            this.rankingTab.x = 329 * clientWidth;
            this.rankingTab.y = 178 * clientHeight;
            that.addChild(this.rankingTab);
            that.infomationClose = BlackJack.createBitmapByName("close_png");
            that.infomationClose.x = 604 * clientWidth;
            that.infomationClose.y = 202 * clientHeight;
            that.addChild(that.infomationClose);
            this.rankingTab.touchEnabled = true;
            this.rankingTabListen = function () {
                self.changing = true;
                self.rankingCreatePage(that);
            };
            this.rankingTab.addEventListener(egret.TouchEvent.TOUCH_TAP, this.rankingTabListen, this, true);
            this.infoUI = new InformationUI();
            this.infoUI.x = (that.stage.stageWidth - this.background.width) / 2;
            this.infoUI.y = 178 * clientHeight;
            that.addChild(this.infoUI);
        };
        /**关闭排行榜及说明页 */
        Information.prototype.removeInformationRankingPage = function (that) {
            console.log("关闭");
            that.removeChild(this.background);
            that.removeChild(this.infoTab);
            that.removeChild(this.rankingTab);
            that.removeChild(that.infomationClose);
            if (this.changing == false) {
                that.removeChild(this.infoUI);
            }
            else {
                that.removeChild(this.rankingUI);
            }
        };
        /**创建排行榜详细页 */
        Information.prototype.rankingCreatePage = function (that) {
            var self = this;
            var clientWidth = that.stage.stageWidth / 750;
            var clientHeight = that.stage.stageHeight / 1206;
            // 关闭说明页及显示排行榜页
            that.removeChild(this.infoUI);
            this.rankingTab.touchEnabled = false;
            this.rankingTab.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.rankingTabListen, this, true);
            this.infoTab.texture = RES.getRes("infoTab_nor_png");
            this.rankingTab.texture = RES.getRes("rankingTab_png");
            this.infoTab.touchEnabled = true;
            this.infoTabListen = function () {
                self.changing = false;
                self.infoCreatePage(that);
            };
            this.infoTab.addEventListener(egret.TouchEvent.TOUCH_TAP, this.infoTabListen, this, true);
            // this.rankingUI = new Ranking();
            // this.rankingUI.x = (that.stage.stageWidth - this.background.width) / 2;
            // this.rankingUI.y = 178 * clientHeight;
            // that.addChild(this.rankingUI);
        };
        /**创建说明页详细 */
        Information.prototype.infoCreatePage = function (that) {
            console.log("???");
            var self = this;
            var clientWidth = that.stage.stageWidth / 750;
            var clientHeight = that.stage.stageHeight / 1206;
            // 关闭排行榜页及显示说明页
            // that.removeChild(this.rankingUI);
            this.infoTab.touchEnabled = false;
            this.infoTab.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.infoTabListen, this, true);
            this.infoTab.texture = RES.getRes("infoTab_png");
            this.rankingTab.texture = RES.getRes("rankingTab_nor_png");
            this.rankingTab.touchEnabled = true;
            this.rankingTabListen = function () {
                self.changing = true;
                self.rankingCreatePage(that);
            };
            this.rankingTab.addEventListener(egret.TouchEvent.TOUCH_TAP, this.rankingTabListen, this, true);
            this.infoUI = new InformationUI();
            this.infoUI.x = (that.stage.stageWidth - this.background.width) / 2;
            this.infoUI.y = 178 * clientHeight;
            that.addChild(this.infoUI);
        };
        return Information;
    }(egret.DisplayObjectContainer));
    BlackJack.Information = Information;
    __reflect(Information.prototype, "BlackJack.Information");
})(BlackJack || (BlackJack = {}));
