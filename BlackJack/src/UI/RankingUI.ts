/**
 * Created by DannyLo on 2017/11/21.
 */

class Ranking extends eui.Component {

    constructor() {
        super();
        this.addEventListener(eui.UIEvent.COMPLETE, this.uiCompHandler, this);
        this.skinName = "resource/skins/ranking.exml";
    }


    // private sendPostRequest() {
    //     let ajaxURL = heap.requestHTTP();
    //     let loginUser = sessionStorage.getItem("loginUser");
    //     let params = "userToken=" + loginUser + "&gameId=" + ajaxURL.gameId;
    //     let request = new egret.HttpRequest();
    //     request.responseType = egret.HttpResponseType.TEXT;
    //     // 拿定义路径
    //     request.open(ajaxURL.ajaxUrl + "cloud2.activity.api/h5game/h5Heap/getHeapGameRankList.do", egret.HttpMethod.POST);
    //     request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    //     request.send(params);
    //     request.addEventListener(egret.Event.COMPLETE, this.onPostComplete, this);
    //     request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onPostIOError, this);
    //     request.addEventListener(egret.ProgressEvent.PROGRESS, this.onPostProgress, this);
    // }
    // private onPostComplete(event: egret.Event) {
    //     let request = <egret.HttpRequest>event.currentTarget;
    //     let data = JSON.parse(request.response);
    //     console.log(data)
    //     let dsListHeros: Array<Object> = [];
    //     let rankingObj;
    //     for (let i = 0; i < data.data.allRank.length; i++) {
    //         if (data.data.allRank[i].grade != 0) {
    //             // if (data.data.allRank[i].ranking_effect == 0) {
    //             //     rankingObj = {
    //             //         icon: data.data.allRank[i].head_img_url,
    //             //         goodsName: heap.cutName(decodeURI(data.data.allRank[i].nickname)),
    //             //         comment: data.data.allRank[i].grade,
    //             //         rank: "NO." + (i + 1),
    //             //         realColor: "0x4A4A4A"
    //             //     }
    //             // } else {
    //             //     rankingObj = {
    //             //         icon: data.data.allRank[i].head_img_url,
    //             //         goodsName: heap.cutName(decodeURI(data.data.allRank[i].nickname)),
    //             //         comment: data.data.allRank[i].grade,
    //             //         rank: "NO." + (i + 1),
    //             //         realColor: "0xfcff07",
    //             //         color: "0xf6ff00",
    //             //         size: "1",
    //             //         hope: "rankingEffect_png"
    //             //     }
    //             // }
    //             rankingObj = {
    //                 icon: data.data.allRank[i].head_img_url,
    //                 goodsName: heap.cutName(decodeURI(data.data.allRank[i].nickname)),
    //                 comment: data.data.allRank[i].grade,
    //                 rank: "NO." + (i + 1),
    //                 realColor: "0x4A4A4A"
    //             }
    //             dsListHeros.push(rankingObj);
    //         }
    //     }


    //     this.listGoods.dataProvider = new eui.ArrayCollection(dsListHeros);

    //     this.listGoods.itemRenderer = GoodsListIRSkin;

    //     let abc: Array<Object> = [];

    //     if (data.data.personalRank.grade == "undefined" || data.data.personalRank.grade == undefined || data.data.personalRank.grade == 0 || data.data.personalRank.grade == "0") {
    //         for (let i = 0; i < 1; i++) {
    //             let rankingObj = {
    //                 score: "最高成绩:无",
    //                 ownRank: "获得积分:无"
    //             }
    //             abc.push(rankingObj);
    //         }
    //     } else {
    //         for (let i = 0; i < 1; i++) {
    //             let rankingObj = {
    //                 score: "最高成绩:" + data.data.personalRank.count,
    //                 ownRank: "获得积分:" + data.data.personalRank.grade
    //             }
    //             abc.push(rankingObj);
    //         }
    //     }


    //     this.score.dataProvider = new eui.ArrayCollection(abc);

    //     this.score.itemRenderer = Kidding;


    // }
    // private onPostIOError(event: egret.IOErrorEvent): void {
    //     console.log("post error : " + event);
    // }
    // private onPostProgress(event: egret.ProgressEvent): void {
    //     console.log("post progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
    // }

    private rankingList(): void {
        let self = this;
        let params = {
            userToken: BlackJack.requestHTTP().userToken,
            gameId: BlackJack.requestHTTP().gameId
        }
        API.getUserRanking(params).then((res) => {
            console.log(res)
            let dsListHeros: Array<Object> = [];
            let rankingObj;
            for (let i = 0; i < res.data.allRank.length; i++) {
                if (res.data.allRank[i].grade != 0) {
                    // if (data.data.allRank[i].ranking_effect == 0) {
                    //     rankingObj = {
                    //         icon: data.data.allRank[i].head_img_url,
                    //         goodsName: heap.cutName(decodeURI(data.data.allRank[i].nickname)),
                    //         comment: data.data.allRank[i].grade,
                    //         rank: "NO." + (i + 1),
                    //         realColor: "0x4A4A4A"
                    //     }
                    // } else {
                    //     rankingObj = {
                    //         icon: data.data.allRank[i].head_img_url,
                    //         goodsName: heap.cutName(decodeURI(data.data.allRank[i].nickname)),
                    //         comment: data.data.allRank[i].grade,
                    //         rank: "NO." + (i + 1),
                    //         realColor: "0xfcff07",
                    //         color: "0xf6ff00",
                    //         size: "1",
                    //         hope: "rankingEffect_png"
                    //     }
                    // }
                    rankingObj = {
                        icon: res.data.allRank[i].head_img_url,
                        goodsName: BlackJack.cutName(decodeURI(res.data.allRank[i].nickname)),
                        comment: res.data.allRank[i].grade,
                        rank: "NO." + (i + 1),
                        realColor: "0x4A4A4A"
                    }
                    dsListHeros.push(rankingObj);
                }
            }
            self.listGoods.dataProvider = new eui.ArrayCollection(dsListHeros);

            self.listGoods.itemRenderer = GoodsListIRSkin;
        });
    }


    private uiCompHandler(): void {
        // this.sendPostRequest();
        this.rankingList();
    }

    protected createChildren(): void {
        super.createChildren();

    }

    private listGoods: eui.List;
    private score: eui.List;
    private skinHope: GoodsListIRSkin;
}


class GoodsListIRSkin extends eui.ItemRenderer {

    private cb: eui.CheckBox;

    constructor() {
        super();
        this.skinName = "rankingList";
    }

    protected createChildren(): void {
        super.createChildren();
    }

    protected dataChanged(): void {
    }

}


class Kidding extends eui.ItemRenderer {

    private cb: eui.CheckBox;

    constructor() {
        super();
        this.skinName = "ScoreBest";
    }

    protected createChildren(): void {
        super.createChildren();
    }

    protected dataChanged(): void {
    }

}