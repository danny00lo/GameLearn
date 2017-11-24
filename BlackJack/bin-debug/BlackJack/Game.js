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
    * 游戏中过程
    */
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            var _this = _super.call(this) || this;
            _this.pokerMaster = [];
            _this.pokerSalver = [];
            return _this;
        }
        /**创建真正的游戏页 */
        Game.prototype.createGame = function (that) {
            var _this = this;
            // 清除教程
            var numChild = that.numChildren;
            for (var t = 0; t < numChild; t++) {
                that.removeChildAt(0);
            }
            var self = this;
            var clientWidth = that.stage.stageWidth / 750;
            var clientHeight = that.stage.stageHeight / 1206;
            this.gameBackground = BlackJack.createBitmapByName("game_background_png");
            this.gameBackground.width = that.stage.stageWidth;
            this.gameBackground.height = that.stage.stageHeight;
            that.addChild(this.gameBackground);
            this.gameClear = BlackJack.createBitmapByName("clear_click_png");
            this.gameClear.x = 630 * clientWidth;
            this.gameClear.y = 932 * clientHeight;
            that.addChild(this.gameClear);
            this.gameMusic = BlackJack.createBitmapByName("game_music_png");
            this.gameMusic.x = 554 * clientWidth;
            this.gameMusic.y = 20 * clientHeight;
            that.addChild(this.gameMusic);
            this.gameHelp = BlackJack.createBitmapByName("game_help_png");
            this.gameHelp.x = 656 * clientWidth;
            this.gameHelp.y = 20 * clientHeight;
            that.addChild(this.gameHelp);
            this.gameScore1 = BlackJack.createBitmapByName("1_png");
            this.gameScore1.x = 30 * clientWidth;
            this.gameScore1.y = 934 * clientHeight;
            that.addChild(this.gameScore1);
            this.gameScore2 = BlackJack.createBitmapByName("10_png");
            this.gameScore2.x = 145 * clientWidth;
            this.gameScore2.y = 934 * clientHeight;
            that.addChild(this.gameScore2);
            this.gameScore3 = BlackJack.createBitmapByName("20_png");
            this.gameScore3.x = 260 * clientWidth;
            this.gameScore3.y = 934 * clientHeight;
            that.addChild(this.gameScore3);
            this.gameScore4 = BlackJack.createBitmapByName("50_png");
            this.gameScore4.x = 375 * clientWidth;
            this.gameScore4.y = 934 * clientHeight;
            that.addChild(this.gameScore4);
            this.gameScore5 = BlackJack.createBitmapByName("100_png");
            this.gameScore5.x = 490 * clientWidth;
            this.gameScore5.y = 934 * clientHeight;
            that.addChild(this.gameScore5);
            this.gameClick1 = BlackJack.createBitmapByName("fapai_normal_png");
            this.gameClick1.x = 30 * clientWidth;
            this.gameClick1.y = 1090 * clientHeight;
            that.addChild(this.gameClick1);
            this.gameClick2 = BlackJack.createBitmapByName("yaopai_normal_png");
            this.gameClick2.x = 176 * clientWidth;
            this.gameClick2.y = 1090 * clientHeight;
            that.addChild(this.gameClick2);
            this.gameClick3 = BlackJack.createBitmapByName("tingpai_norma_png");
            this.gameClick3.x = 321 * clientWidth;
            this.gameClick3.y = 1090 * clientHeight;
            that.addChild(this.gameClick3);
            this.gameClick4 = BlackJack.createBitmapByName("fenpai_normal_png");
            this.gameClick4.x = 467 * clientWidth;
            this.gameClick4.y = 1090 * clientHeight;
            that.addChild(this.gameClick4);
            this.gameClick5 = BlackJack.createBitmapByName("baoxian_normal_png");
            this.gameClick5.x = 612 * clientWidth;
            this.gameClick5.y = 1090 * clientHeight;
            that.addChild(this.gameClick5);
            this.gameTextScore = BlackJack.createBitmapByName("game_scoreBackground_png");
            this.gameTextScore.x = 52 * clientWidth;
            this.gameTextScore.y = 22 * clientHeight;
            that.addChild(this.gameTextScore);
            this.gameHeadIcon = BlackJack.createBitmapByName("head_icon_png");
            this.gameHeadIcon.x = 14 * clientWidth;
            this.gameHeadIcon.y = 14 * clientHeight;
            that.addChild(this.gameHeadIcon);
            this.chips = BlackJack.createBitmapByName("chips_png");
            this.chips.x = (that.stage.stageWidth - this.chips.width) / 2;
            this.chips.y = 542 * clientHeight;
            that.addChild(this.chips);
            this.gameConsBackground = BlackJack.createBitmapByName("consBackground_png");
            this.gameConsBackground.x = (that.stage.stageWidth - this.gameConsBackground.width) / 2;
            this.gameConsBackground.y = 609 * clientHeight;
            that.addChild(this.gameConsBackground);
            this.gameCons = new egret.BitmapText();
            this.gameCons.font = RES.getRes("gameCons_fnt");
            this.gameCons.width = this.gameConsBackground.width;
            this.gameCons.height = this.gameConsBackground.height;
            this.gameCons.x = (that.stage.stageWidth - this.gameConsBackground.width) / 2;
            this.gameCons.y = 609 * clientHeight;
            this.gameCons.textAlign = egret.HorizontalAlign.CENTER;
            this.gameCons.verticalAlign = egret.VerticalAlign.MIDDLE;
            this.gameCons.text = "0";
            that.addChild(this.gameCons);
            // 创建动态头像
            this.creategameIconListen = function (event) {
                _this.creategameIcon(event, that);
            };
            var texture = RES.getResByUrl(sessionStorage.getItem('userImg'), this.creategameIconListen, this, RES.ResourceItem.TYPE_IMAGE);
            // 文字
            this.gameHeadText = new egret.BitmapText();
            this.gameHeadText.font = RES.getRes("startDiamond_fnt");
            this.gameHeadText.width = 173 * clientWidth;
            this.gameHeadText.height = this.gameTextScore.height;
            this.gameHeadText.x = 136 * clientWidth;
            this.gameHeadText.y = 22 * clientHeight;
            this.gameHeadText.textAlign = egret.HorizontalAlign.LEFT;
            this.gameHeadText.verticalAlign = egret.VerticalAlign.MIDDLE;
            that.addChild(this.gameHeadText);
            // 请求接口获得用户当前分数
            var params = {
                userToken: BlackJack.requestHTTP().userToken
            };
            API.getUserInfo(params).then(function (res) {
                console.log(res);
                self.gameHeadText.text = res.data.pointValue;
            });
            // 加入监听系统
            this.gameHelp.touchEnabled = true;
            this.gameHelpListen = function () {
                self.helpShow(that);
            };
            this.gameHelp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.gameHelpListen, this, true);
            // 发牌动作
            this.sendPoker(that);
        };
        /**创建动态人头像 */
        Game.prototype.creategameIcon = function (event, that) {
            var clientWidth = that.stage.stageWidth / 750;
            var clientHeight = that.stage.stageHeight / 1206;
            var img = event;
            this.gameHeadIconReal = new egret.Bitmap(img);
            this.gameHeadIconReal.x = 17 * clientWidth;
            this.gameHeadIconReal.y = 17 * clientHeight;
            this.gameHeadIconReal.width = 103;
            this.gameHeadIconReal.height = 103;
            that.addChild(this.gameHeadIconReal);
            // 创造遮罩
            var shp2 = BlackJack.createBitmapByName("head_icon_png");
            shp2.x = 17 * clientWidth;
            shp2.y = 17 * clientHeight;
            shp2.width = 103;
            shp2.height = 103;
            that.addChild(shp2);
            this.gameHeadIconReal.mask = shp2;
        };
        /**进行发牌 */
        Game.prototype.sendPoker = function (that) {
            var self = this;
            var clientWidth = that.stage.stageWidth / 750;
            var clientHeight = that.stage.stageHeight / 1206;
            // 庄家牌
            this.pokerMaster[0] = BlackJack.createBitmapByName("pokerBack_png");
            this.pokerMaster[0].x = (that.stage.stageWidth - this.pokerMaster[0].width) / 2;
            this.pokerMaster[0].y = -this.pokerMaster[0].height * clientHeight;
            that.addChild(this.pokerMaster[0]);
            this.pokerMaster[1] = BlackJack.createBitmapByName("pokerBack_png");
            this.pokerMaster[1].x = (that.stage.stageWidth - this.pokerMaster[1].width) / 2;
            this.pokerMaster[1].y = -this.pokerMaster[1].height * clientHeight;
            that.addChild(this.pokerMaster[1]);
            // 闲家牌
            this.pokerSalver[0] = BlackJack.createBitmapByName("pokerBack_png");
            this.pokerSalver[0].x = (that.stage.stageWidth - this.pokerSalver[0].width) / 2;
            this.pokerSalver[0].y = -this.pokerSalver[0].height * clientHeight;
            that.addChild(this.pokerSalver[0]);
            this.pokerSalver[1] = BlackJack.createBitmapByName("pokerBack_png");
            this.pokerSalver[1].x = (that.stage.stageWidth - this.pokerSalver[1].width) / 2;
            this.pokerSalver[1].y = -this.pokerSalver[1].height * clientHeight;
            that.addChild(this.pokerSalver[1]);
            // 派牌动画 - 闲庄闲庄
            egret.Tween.get(this.pokerSalver[0])
                .to({ x: 324 * clientWidth, y: 702 * clientHeight }, 1000).call(function () {
                var flower = Math.abs(Math.random() * 10) < 2 ? "a" : Math.abs(Math.random() * 10) < 5 ? "b" : Math.abs(Math.random() * 10) < 8 ? "c" : "d";
                var random = Math.abs(Math.random() * 10) < 2 ? 1 : 10;
                self.pokerSalver[0].texture = RES.getRes(flower + random + "_png");
                egret.Tween.get(self.pokerMaster[0])
                    .to({ x: 324 * clientWidth, y: 164 * clientHeight }, 1000).call(function () {
                    egret.Tween.get(self.pokerSalver[1])
                        .to({ x: 349 * clientWidth, y: 702 * clientHeight }, 1000).call(function () {
                        var flower = Math.abs(Math.random() * 10) < 2 ? "a" : Math.abs(Math.random() * 10) < 5 ? "b" : Math.abs(Math.random() * 10) < 8 ? "c" : "d";
                        var random = Math.abs(Math.random() * 10) < 2 ? 1 : 10;
                        self.pokerSalver[1].texture = RES.getRes(flower + random + "_png");
                        egret.Tween.get(self.pokerMaster[1])
                            .to({ x: 349 * clientWidth, y: 164 * clientHeight }, 1000).call(function () {
                            var flower = Math.abs(Math.random() * 10) < 2 ? "a" : Math.abs(Math.random() * 10) < 5 ? "b" : Math.abs(Math.random() * 10) < 8 ? "c" : "d";
                            var random = Math.abs(Math.random() * 10) < 2 ? 1 : 10;
                            self.pokerMaster[1].texture = RES.getRes(flower + random + "_png");
                        });
                    });
                });
            });
        };
        /**帮助板块展开 */
        Game.prototype.helpShow = function (that) {
            // 关闭监听系统
            this.gameHelp.touchEnabled = false;
            this.gameHelp.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.gameHelpListen, this, true);
            var self = this;
            var clientWidth = that.stage.stageWidth / 750;
            var clientHeight = that.stage.stageHeight / 1206;
            this.gameHelpBackground = BlackJack.createBitmapByName("helpBackground_png");
            this.gameHelpBackground.x = (that.stage.stageWidth - this.gameHelpBackground.width) / 2;
            this.gameHelpBackground.y = 178 * clientHeight;
            that.addChild(this.gameHelpBackground);
            this.gameHelpColse = BlackJack.createBitmapByName("close_png");
            this.gameHelpColse.x = 604 * clientWidth;
            this.gameHelpColse.y = 202 * clientHeight;
            that.addChild(this.gameHelpColse);
            this.gameHelpText = BlackJack.createBitmapByName("gameHelpText_png");
            this.gameHelpText.x = 120 * clientWidth;
            this.gameHelpText.y = 178 * clientHeight;
            that.addChild(this.gameHelpText);
            this.infoUI = new InformationUI();
            this.infoUI.x = (that.stage.stageWidth - this.gameHelpBackground.width) / 2;
            this.infoUI.y = 178 * clientHeight;
            that.addChild(this.infoUI);
            // 加入监听系统
            this.gameHelpColse.touchEnabled = true;
            this.gameHelpColseListen = function () {
                self.closeHelp(that);
            };
            this.gameHelpColse.addEventListener(egret.TouchEvent.TOUCH_TAP, this.gameHelpColseListen, this, true);
        };
        /**关闭帮助板块展开 */
        Game.prototype.closeHelp = function (that) {
            var self = this;
            // 关闭监听系统
            this.gameHelpColse.touchEnabled = false;
            this.gameHelpColse.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.gameHelpColseListen, this, true);
            that.removeChild(this.gameHelpBackground);
            that.removeChild(this.gameHelpColse);
            that.removeChild(this.gameHelpText);
            that.removeChild(this.infoUI);
            // 加入监听系统
            this.gameHelp.touchEnabled = true;
            this.gameHelpListen = function () {
                self.helpShow(that);
            };
            this.gameHelp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.gameHelpListen, this, true);
        };
        return Game;
    }(egret.DisplayObjectContainer));
    BlackJack.Game = Game;
    __reflect(Game.prototype, "BlackJack.Game");
})(BlackJack || (BlackJack = {}));
