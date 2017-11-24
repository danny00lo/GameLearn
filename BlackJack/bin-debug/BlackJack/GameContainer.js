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
    * 主游戏容器
    */
    var GameContainer = (function (_super) {
        __extends(GameContainer, _super);
        function GameContainer() {
            var _this = _super.call(this) || this;
            _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
            return _this;
        }
        /**初始化*/
        GameContainer.prototype.onAddToStage = function (event) {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
            this.Index = new BlackJack.Index();
            this.Game = new BlackJack.Game();
            this.Information = new BlackJack.Information();
            // 创建场景
            this.createGameScene();
        };
        /**创建游戏场景*/
        GameContainer.prototype.createGameScene = function () {
            this.Index.createStart(this);
            // 开启监听系统
            this.indexStartGame.touchEnabled = true;
            this.indexRanking.touchEnabled = true;
            this.indexMoreGame.touchEnabled = true;
            this.indexStartGame.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startGame, this, true);
            this.indexRanking.addEventListener(egret.TouchEvent.TOUCH_TAP, this.rankingList, this, true);
            this.indexMoreGame.addEventListener(egret.TouchEvent.TOUCH_TAP, this.moreGameList, this, true);
        };
        /**调用教程，初始化游戏 */
        GameContainer.prototype.startGame = function () {
            // 把所有监听去掉
            this.indexStartGame.touchEnabled = false;
            this.indexRanking.touchEnabled = false;
            this.indexMoreGame.touchEnabled = false;
            this.indexStartGame.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.startGame, this, true);
            this.indexRanking.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.rankingList, this, true);
            this.indexMoreGame.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.moreGameList, this, true);
            // 移除首页设置
            this.Index.removeStartPage(this);
            // 创造教程页面
            this.Index.createTeachPage(this);
            this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.runGame, this, true);
        };
        /**真实开始游戏 */
        GameContainer.prototype.runGame = function () {
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.runGame, this, true);
            this.Game.createGame(this);
        };
        /**调用排行榜及说明页 */
        GameContainer.prototype.rankingList = function () {
            // 把所有监听去掉
            this.indexStartGame.touchEnabled = false;
            this.indexRanking.touchEnabled = false;
            this.indexMoreGame.touchEnabled = false;
            this.indexStartGame.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.startGame, this, true);
            this.indexRanking.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.rankingList, this, true);
            this.indexMoreGame.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.moreGameList, this, true);
            this.Information.createInformationeRankingPage(this);
            this.infomationClose.touchEnabled = true;
            this.infomationClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeRankingList, this, true);
        };
        /**关闭排行榜及说明页 */
        GameContainer.prototype.closeRankingList = function () {
            // 开启监听系统
            this.indexStartGame.touchEnabled = true;
            this.indexRanking.touchEnabled = true;
            this.indexMoreGame.touchEnabled = true;
            this.indexStartGame.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startGame, this, true);
            this.indexRanking.addEventListener(egret.TouchEvent.TOUCH_TAP, this.rankingList, this, true);
            this.indexMoreGame.addEventListener(egret.TouchEvent.TOUCH_TAP, this.moreGameList, this, true);
            // 监听去掉
            this.infomationClose.touchEnabled = false;
            this.infomationClose.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.closeRankingList, this, true);
            // 去掉页面
            this.Information.removeInformationRankingPage(this);
        };
        /**调用更多游戏 */
        GameContainer.prototype.moreGameList = function () {
            // 把所有监听去掉
            this.indexStartGame.touchEnabled = false;
            this.indexRanking.touchEnabled = false;
            this.indexMoreGame.touchEnabled = false;
            this.indexStartGame.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.startGame, this, true);
            this.indexRanking.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.rankingList, this, true);
            this.indexMoreGame.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.moreGameList, this, true);
            window.location.href = BlackJack.requestHTTP().ajaxUrl + "xyx/platform/index.html";
        };
        return GameContainer;
    }(egret.DisplayObjectContainer));
    BlackJack.GameContainer = GameContainer;
    __reflect(GameContainer.prototype, "BlackJack.GameContainer");
})(BlackJack || (BlackJack = {}));
