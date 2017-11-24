/**
 * Created by egret on 2016/1/25.
 */

class InformationUI extends eui.Component {

    constructor() {
        super();
        this.addEventListener(eui.UIEvent.COMPLETE, this.uiCompHandler, this);
        this.skinName = "resource/skins/infoUISkin.exml";
    }

    private getInfo(): void {
        let self = this;
        let params = {
            gameId: BlackJack.requestHTTP().gameId
        }
        API.getGameInfo(params).then((res) => {
            console.log(res);
            let abc: Array<Object> = [];
            for (let i = 0; i < 1; i++) {
                let rankingObj = {
                    info: res.data.comment
                }
                abc.push(rankingObj);
            }
            self.infoMation.dataProvider = new eui.ArrayCollection(abc);
            self.infoMation.itemRenderer = InformationList;
        })
    }


    private uiCompHandler(): void {
        this.getInfo();
    }

    protected createChildren(): void {
        super.createChildren();

    }

    private infoMation: eui.List;
}


class InformationList extends eui.ItemRenderer {

    private cb: eui.CheckBox;

    constructor() {
        super();
        this.skinName = "infomationListSkin";
    }

    protected createChildren(): void {
        super.createChildren();
    }

    protected dataChanged(): void {
    }

}