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
    * 首页模块
    */
    var Index = (function (_super) {
        __extends(Index, _super);
        function Index() {
            return _super.call(this) || this;
        }
        /**创建黑杰克游戏首页 */
        Index.prototype.createStart = function (that) {
            // 注册大小
            var clientWidth = that.stage.stageWidth / 750;
            var clientHeight = that.stage.stageHeight / 1206;
            var self = this;
            this.indexBackground = BlackJack.createBitmapByName("background_png");
            this.indexBackground.width = that.stage.stageWidth;
            this.indexBackground.height = that.stage.stageHeight;
            that.addChild(this.indexBackground);
            that.indexStartGame = BlackJack.createBitmapByName("index_startGame_png");
            that.indexStartGame.x = (that.stage.stageWidth - that.indexStartGame.width) / 2;
            that.indexStartGame.y = 890 * clientHeight;
            that.addChild(that.indexStartGame);
            that.indexRanking = BlackJack.createBitmapByName("index_information_png");
            that.indexRanking.x = (that.stage.stageWidth - that.indexRanking.width) / 2;
            that.indexRanking.y = 771 * clientHeight;
            that.addChild(that.indexRanking);
            that.indexMoreGame = BlackJack.createBitmapByName("index_moreGame_png");
            that.indexMoreGame.x = (that.stage.stageWidth - that.indexMoreGame.width) / 2;
            that.indexMoreGame.y = 1040 * clientHeight;
            that.addChild(that.indexMoreGame);
            this.indexTitle = BlackJack.createBitmapByName("index_title_png");
            this.indexTitle.x = (that.stage.stageWidth - this.indexTitle.width) / 2;
            this.indexTitle.y = 324 * clientHeight;
            that.addChild(this.indexTitle);
            this.indexDiamondIcon = BlackJack.createBitmapByName("diamond_png");
            this.indexDiamondIcon.x = 40 * clientWidth;
            this.indexDiamondIcon.y = 34 * clientHeight;
            that.addChild(this.indexDiamondIcon);
            this.indexDiamondText = new egret.BitmapText();
            this.indexDiamondText.font = RES.getRes("startDiamond_fnt");
            this.indexDiamondText.height = this.indexDiamondIcon.height;
            this.indexDiamondText.x = 138 * clientWidth;
            this.indexDiamondText.y = 34 * clientHeight;
            this.indexDiamondText.textAlign = egret.HorizontalAlign.LEFT;
            this.indexDiamondText.verticalAlign = egret.VerticalAlign.MIDDLE;
            that.addChild(this.indexDiamondText);
            // 请求接口获得用户当前分数
            var params = {
                userToken: BlackJack.requestHTTP().userToken
            };
            API.getUserInfo(params).then(function (res) {
                console.log(res);
                self.indexDiamondText.text = res.data.pointValue;
            });
        };
        /**弹出窗口 - 使用钻石 */
        Index.prototype.popWindow = function (that) {
            // 注册大小
            var clientWidth = that.stage.stageWidth / 750;
            var clientHeight = that.stage.stageHeight / 1206;
            this.plusDiamondsPOP = BlackJack.createBitmapByName("hintBackground_png");
            this.plusDiamondsPOP.x = (that.stage.stageWidth - this.plusDiamondsPOP.width) / 2;
            this.plusDiamondsPOP.y = 337 * clientHeight;
            that.addChild(this.plusDiamondsPOP);
            this.plusDiamondsText = new egret.TextField();
            this.plusDiamondsText.textColor = 0x4A4A4A;
            this.plusDiamondsText.width = 502;
            this.plusDiamondsText.height = 250;
            this.plusDiamondsText.x = (that.stage.stageWidth - this.plusDiamondsText.width) / 2;
            this.plusDiamondsText.y = 337 * clientHeight;
            this.plusDiamondsText.size = 30;
            this.plusDiamondsText.textAlign = egret.HorizontalAlign.CENTER;
            this.plusDiamondsText.verticalAlign = egret.VerticalAlign.MIDDLE;
            this.plusDiamondsText.text = "是否消耗5颗钻石开始绘星";
            that.addChild(this.plusDiamondsText);
            this.plusDiamondsCancel = new egret.TextField();
            this.plusDiamondsCancel.textColor = 0x4A4A4A;
            this.plusDiamondsCancel.width = 251;
            this.plusDiamondsCancel.height = 90;
            this.plusDiamondsCancel.x = 125 * clientWidth;
            this.plusDiamondsCancel.y = 587 * clientHeight;
            this.plusDiamondsCancel.size = 30;
            this.plusDiamondsCancel.textAlign = egret.HorizontalAlign.CENTER;
            this.plusDiamondsCancel.verticalAlign = egret.VerticalAlign.MIDDLE;
            this.plusDiamondsCancel.text = "取消";
            this.plusDiamondsCancel.touchEnabled = true;
            that.addChild(this.plusDiamondsCancel);
            this.plusDiamondsConfirm = new egret.TextField();
            this.plusDiamondsConfirm.textColor = 0x0cbb22;
            this.plusDiamondsConfirm.width = 251;
            this.plusDiamondsConfirm.height = 90;
            this.plusDiamondsConfirm.x = 376 * clientWidth;
            this.plusDiamondsConfirm.y = 587 * clientHeight;
            this.plusDiamondsConfirm.size = 30;
            this.plusDiamondsConfirm.textAlign = egret.HorizontalAlign.CENTER;
            this.plusDiamondsConfirm.verticalAlign = egret.VerticalAlign.MIDDLE;
            this.plusDiamondsConfirm.text = "确定";
            this.plusDiamondsConfirm.touchEnabled = true;
            that.addChild(this.plusDiamondsConfirm);
            // 增加监听
            this.plusDiamondsCancelListen = function () {
                this.popWindonwCancel(that);
            };
            this.plusDiamondsConirmListen = function () {
                this.popWindowConfirm(that);
            };
            this.plusDiamondsCancel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.plusDiamondsCancelListen, this, true);
            this.plusDiamondsConfirm.addEventListener(egret.TouchEvent.TOUCH_TAP, this.plusDiamondsConirmListen, this, true);
        };
        /**弹出窗口取消 */
        Index.prototype.popWindonwCancel = function (that) {
            this.plusDiamondsConfirm.touchEnabled = false;
            this.plusDiamondsCancel.touchEnabled = false;
            this.plusDiamondsCancel.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.plusDiamondsCancelListen, this, true);
            this.plusDiamondsConfirm.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.plusDiamondsConirmListen, this, true);
            that.removeChild(this.plusDiamondsPOP);
            that.removeChild(this.plusDiamondsText);
            that.removeChild(this.plusDiamondsCancel);
            that.removeChild(this.plusDiamondsConfirm);
        };
        /**弹出窗口确定 */
        Index.prototype.popWindowConfirm = function (that) {
            // this.plusDiamondsConfirm.touchEnabled = false;
            // this.plusDiamondsCancel.touchEnabled = false;
            // this.plusDiamondsCancel.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.plusDiamondsCancelListen, this, true);
            // this.plusDiamondsConfirm.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.plusDiamondsConirmListen, this, true);
            // let numChild: number = that.numChildren;
            // for (let t: number = 0; t < numChild; t++) {
            //     that.removeChildAt(0);
            // }
            // console.log("先进去第一关")
            this.plusDiamondsConfirm.touchEnabled = false;
            this.plusDiamondsCancel.touchEnabled = false;
            this.plusDiamondsCancel.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.plusDiamondsCancelListen, this, true);
            this.plusDiamondsConfirm.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.plusDiamondsConirmListen, this, true);
            that.removeChild(this.plusDiamondsPOP);
            that.removeChild(this.plusDiamondsText);
            that.removeChild(this.plusDiamondsCancel);
            that.removeChild(this.plusDiamondsConfirm);
        };
        /**移除黑杰克首页配套 */
        Index.prototype.removeStartPage = function (that) {
            that.removeChild(this.indexBackground);
            that.removeChild(that.indexStartGame);
            that.removeChild(that.indexRanking);
            that.removeChild(this.indexDiamondIcon);
            that.removeChild(this.indexDiamondText);
        };
        /**创建黑杰克 教程页 */
        Index.prototype.createTeachPage = function (that) {
            var _this = this;
            var clientWidth = that.stage.stageWidth / 750;
            var clientHeight = that.stage.stageHeight / 1206;
            this.teachBackground = BlackJack.createBitmapByName("game_background_png");
            this.teachBackground.width = that.stage.stageWidth;
            this.teachBackground.height = that.stage.stageHeight;
            that.addChild(this.teachBackground);
            this.teachMusic = BlackJack.createBitmapByName("game_music_png");
            this.teachMusic.x = 554 * clientWidth;
            this.teachMusic.y = 20 * clientHeight;
            that.addChild(this.teachMusic);
            this.teachHelp = BlackJack.createBitmapByName("game_help_png");
            this.teachHelp.x = 656 * clientWidth;
            this.teachHelp.y = 20 * clientHeight;
            that.addChild(this.teachHelp);
            this.teachClear = BlackJack.createBitmapByName("clear_click_png");
            this.teachClear.x = 630 * clientWidth;
            this.teachClear.y = 932 * clientHeight;
            that.addChild(this.teachClear);
            this.teachFill = new egret.Shape();
            this.teachFill.graphics.beginFill(0x000000, 0.5);
            this.teachFill.graphics.drawRect(0, 0, 750 * clientWidth, 1206 * clientHeight);
            this.teachFill.graphics.endFill();
            that.addChild(this.teachFill);
            this.teachScore1 = BlackJack.createBitmapByName("1_png");
            this.teachScore1.x = 30 * clientWidth;
            this.teachScore1.y = 934 * clientHeight;
            that.addChild(this.teachScore1);
            this.teachScore2 = BlackJack.createBitmapByName("10_png");
            this.teachScore2.x = 145 * clientWidth;
            this.teachScore2.y = 934 * clientHeight;
            that.addChild(this.teachScore2);
            this.teachScore3 = BlackJack.createBitmapByName("20_png");
            this.teachScore3.x = 260 * clientWidth;
            this.teachScore3.y = 934 * clientHeight;
            that.addChild(this.teachScore3);
            this.teachScore4 = BlackJack.createBitmapByName("50_png");
            this.teachScore4.x = 375 * clientWidth;
            this.teachScore4.y = 934 * clientHeight;
            that.addChild(this.teachScore4);
            this.teachScore5 = BlackJack.createBitmapByName("100_png");
            this.teachScore5.x = 490 * clientWidth;
            this.teachScore5.y = 934 * clientHeight;
            that.addChild(this.teachScore5);
            this.teachClick1 = BlackJack.createBitmapByName("fapai_normal_png");
            this.teachClick1.x = 30 * clientWidth;
            this.teachClick1.y = 1090 * clientHeight;
            that.addChild(this.teachClick1);
            this.teachClick2 = BlackJack.createBitmapByName("yaopai_click_png");
            this.teachClick2.x = 176 * clientWidth;
            this.teachClick2.y = 1090 * clientHeight;
            that.addChild(this.teachClick2);
            this.teachClick3 = BlackJack.createBitmapByName("tingpai_norma_png");
            this.teachClick3.x = 321 * clientWidth;
            this.teachClick3.y = 1090 * clientHeight;
            that.addChild(this.teachClick3);
            this.teachClick4 = BlackJack.createBitmapByName("fenpai_normal_png");
            this.teachClick4.x = 467 * clientWidth;
            this.teachClick4.y = 1090 * clientHeight;
            that.addChild(this.teachClick4);
            this.teachClick5 = BlackJack.createBitmapByName("baoxian_normal_png");
            this.teachClick5.x = 612 * clientWidth;
            this.teachClick5.y = 1090 * clientHeight;
            that.addChild(this.teachClick5);
            this.teachText1 = BlackJack.createBitmapByName("teach_text1_png");
            this.teachText1.x = 206 * clientWidth;
            this.teachText1.y = 155 * clientHeight;
            that.addChild(this.teachText1);
            this.teachText2 = BlackJack.createBitmapByName("teach_text2_png");
            this.teachText2.x = 230 * clientWidth;
            this.teachText2.y = 498 * clientHeight;
            that.addChild(this.teachText2);
            this.teachText3 = BlackJack.createBitmapByName("teach_text3_png");
            this.teachText3.x = 176 * clientWidth;
            this.teachText3.y = 834 * clientHeight;
            that.addChild(this.teachText3);
            this.teachText4 = BlackJack.createBitmapByName("teach_text4_png");
            this.teachText4.x = 223 * clientWidth;
            this.teachText4.y = 1047 * clientHeight;
            that.addChild(this.teachText4);
            this.teachTextIcon1 = BlackJack.createBitmapByName("jaintou_1_png");
            this.teachTextIcon1.x = 156 * clientWidth;
            this.teachTextIcon1.y = 125 * clientHeight;
            that.addChild(this.teachTextIcon1);
            this.teachTextIcon2 = BlackJack.createBitmapByName("jaintou_2_png");
            this.teachTextIcon2.x = 270 * clientWidth;
            this.teachTextIcon2.y = 539 * clientHeight;
            that.addChild(this.teachTextIcon2);
            this.teachTextIcon3 = BlackJack.createBitmapByName("jaintou_2_png");
            this.teachTextIcon3.x = 120 * clientWidth;
            this.teachTextIcon3.y = 872 * clientHeight;
            that.addChild(this.teachTextIcon3);
            this.teachTextIcon4 = BlackJack.createBitmapByName("jaintou_2_png");
            this.teachTextIcon4.x = 180 * clientWidth;
            this.teachTextIcon4.y = 1040 * clientHeight;
            that.addChild(this.teachTextIcon4);
            this.teachConsBackground = BlackJack.createBitmapByName("teach_cons_png");
            this.teachConsBackground.x = (that.stage.stageWidth - this.teachConsBackground.width) / 2;
            this.teachConsBackground.y = 614 * clientHeight;
            that.addChild(this.teachConsBackground);
            this.teachConsText = new egret.TextField();
            this.teachConsText.textColor = 0x000000;
            this.teachConsText.x = (that.stage.stageWidth - this.teachConsBackground.width) / 2;
            this.teachConsText.y = 614 * clientHeight;
            this.teachConsText.width = this.teachConsBackground.width;
            this.teachConsText.height = this.teachConsBackground.height;
            this.teachConsText.size = 30;
            this.teachConsText.textAlign = egret.HorizontalAlign.CENTER;
            this.teachConsText.verticalAlign = egret.VerticalAlign.MIDDLE;
            this.teachConsText.text = "0";
            that.addChild(this.teachConsText);
            this.teachTextScore = BlackJack.createBitmapByName("teach_show_png");
            this.teachTextScore.x = 52 * clientWidth;
            this.teachTextScore.y = 22 * clientHeight;
            that.addChild(this.teachTextScore);
            this.textHeadIcon = BlackJack.createBitmapByName("head_icon_png");
            this.textHeadIcon.x = 14 * clientWidth;
            this.textHeadIcon.y = 14 * clientHeight;
            that.addChild(this.textHeadIcon);
            // 创建动态头像
            this.createTeachIconListen = function (event) {
                _this.createTeachIcon(event, that);
            };
            var texture = RES.getResByUrl(sessionStorage.getItem('userImg'), this.createTeachIconListen, this, RES.ResourceItem.TYPE_IMAGE);
        };
        /**创建动态人头像 */
        Index.prototype.createTeachIcon = function (event, that) {
            var clientWidth = that.stage.stageWidth / 750;
            var clientHeight = that.stage.stageHeight / 1206;
            var img = event;
            this.textHeadIconReal = new egret.Bitmap(img);
            this.textHeadIconReal.x = 17 * clientWidth;
            this.textHeadIconReal.y = 17 * clientHeight;
            this.textHeadIconReal.width = 103;
            this.textHeadIconReal.height = 103;
            that.addChild(this.textHeadIconReal);
            // 创造遮罩
            var shp2 = BlackJack.createBitmapByName("head_icon_png");
            shp2.x = 17 * clientWidth;
            shp2.y = 17 * clientHeight;
            shp2.width = 103;
            shp2.height = 103;
            that.addChild(shp2);
            this.textHeadIconReal.mask = shp2;
        };
        return Index;
    }(egret.DisplayObjectContainer));
    BlackJack.Index = Index;
    __reflect(Index.prototype, "BlackJack.Index");
})(BlackJack || (BlackJack = {}));
