module BlackJack {
    /**
    * 游戏说明及排行榜
    */
    export class Information extends egret.DisplayObjectContainer {
        public constructor() {
            super();
        }

        /**注册说明及排行榜常量 */
        private background: egret.Bitmap;
        private infoTab: egret.Bitmap;
        private rankingTab: egret.Bitmap;

        private infoTabListen: any;
        private rankingTabListen: any;
        private changing: boolean = false;

        private rankingUI: Ranking;
        private infoUI: InformationUI;

        /**创建排行榜及说明页 */
        public createInformationeRankingPage(that): void {
            let self = this;
            let clientWidth = that.stage.stageWidth / 750;
            let clientHeight = that.stage.stageHeight / 1206;

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
            this.rankingTabListen = () => {
                self.changing = true;
                self.rankingCreatePage(that);
            }
            this.rankingTab.addEventListener(egret.TouchEvent.TOUCH_TAP, this.rankingTabListen, this, true);

            this.infoUI = new InformationUI();
            this.infoUI.x = (that.stage.stageWidth - this.background.width) / 2;
            this.infoUI.y = 178 * clientHeight;
            that.addChild(this.infoUI);
        }

        /**关闭排行榜及说明页 */
        public removeInformationRankingPage(that): void {
            console.log("关闭");

            that.removeChild(this.background);
            that.removeChild(this.infoTab);
            that.removeChild(this.rankingTab);
            that.removeChild(that.infomationClose);

            if (this.changing == false) {
                that.removeChild(this.infoUI);
            } else {
                that.removeChild(this.rankingUI);
            }
        }

        /**创建排行榜详细页 */
        private rankingCreatePage(that): void {
            let self = this;
            let clientWidth = that.stage.stageWidth / 750;
            let clientHeight = that.stage.stageHeight / 1206;
            // 关闭说明页及显示排行榜页
            that.removeChild(this.infoUI);
            this.rankingTab.touchEnabled = false;
            this.rankingTab.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.rankingTabListen, this, true);
            this.infoTab.texture = RES.getRes("infoTab_nor_png");
            this.rankingTab.texture = RES.getRes("rankingTab_png");

            this.infoTab.touchEnabled = true;
            this.infoTabListen = () => {
                self.changing = false;
                self.infoCreatePage(that);
            }
            this.infoTab.addEventListener(egret.TouchEvent.TOUCH_TAP, this.infoTabListen, this, true);

            // this.rankingUI = new Ranking();
            // this.rankingUI.x = (that.stage.stageWidth - this.background.width) / 2;
            // this.rankingUI.y = 178 * clientHeight;
            // that.addChild(this.rankingUI);

        }

        /**创建说明页详细 */
        private infoCreatePage(that): void {
            console.log("???")
            let self = this;
            let clientWidth = that.stage.stageWidth / 750;
            let clientHeight = that.stage.stageHeight / 1206;
            // 关闭排行榜页及显示说明页
            // that.removeChild(this.rankingUI);
            this.infoTab.touchEnabled = false;
            this.infoTab.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.infoTabListen, this, true);
            this.infoTab.texture = RES.getRes("infoTab_png");
            this.rankingTab.texture = RES.getRes("rankingTab_nor_png");


            this.rankingTab.touchEnabled = true;
            this.rankingTabListen = () => {
                self.changing = true;
                self.rankingCreatePage(that);
            }
            this.rankingTab.addEventListener(egret.TouchEvent.TOUCH_TAP, this.rankingTabListen, this, true);

            this.infoUI = new InformationUI();
            this.infoUI.x = (that.stage.stageWidth - this.background.width) / 2;
            this.infoUI.y = 178 * clientHeight;
            that.addChild(this.infoUI);
        }
    }
}