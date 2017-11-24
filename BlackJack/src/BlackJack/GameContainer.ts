module BlackJack {
    /**
    * 主游戏容器
    */
    export class GameContainer extends egret.DisplayObjectContainer {
        public constructor() {
            super();
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        }

        /**定义常量 */
        private Index: BlackJack.Index;
        private Information: BlackJack.Information;
        private Game: BlackJack.Game;

        private indexRanking: egret.Bitmap;
        private indexStartGame: egret.Bitmap;
        private indexMoreGame: egret.Bitmap;
        private infomationClose: egret.Bitmap;

        /**初始化*/
        private onAddToStage(event: egret.Event): void {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
            this.Index = new BlackJack.Index();
            this.Game = new BlackJack.Game();
            this.Information = new BlackJack.Information();
            // 创建场景
            this.createGameScene();
        }

        /**创建游戏场景*/
        private createGameScene(): void {
            this.Index.createStart(this);

            // 开启监听系统
            this.indexStartGame.touchEnabled = true;
            this.indexRanking.touchEnabled = true;
            this.indexMoreGame.touchEnabled = true;
            this.indexStartGame.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startGame, this, true);
            this.indexRanking.addEventListener(egret.TouchEvent.TOUCH_TAP, this.rankingList, this, true);
            this.indexMoreGame.addEventListener(egret.TouchEvent.TOUCH_TAP, this.moreGameList, this, true);
        }

        /**调用教程，初始化游戏 */
        private startGame(): void {
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
        }

        /**真实开始游戏 */
        private runGame(): void {
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.runGame, this, true);
            this.Game.createGame(this);
        }

        /**调用排行榜及说明页 */
        private rankingList(): void {
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
        }

        /**关闭排行榜及说明页 */
        private closeRankingList(): void {
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
        }

        /**调用更多游戏 */
        private moreGameList(): void {
            // 把所有监听去掉
            this.indexStartGame.touchEnabled = false;
            this.indexRanking.touchEnabled = false;
            this.indexMoreGame.touchEnabled = false;
            this.indexStartGame.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.startGame, this, true);
            this.indexRanking.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.rankingList, this, true);
            this.indexMoreGame.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.moreGameList, this, true);
            window.location.href = BlackJack.requestHTTP().ajaxUrl + "xyx/platform/index.html";
        }
    }
}