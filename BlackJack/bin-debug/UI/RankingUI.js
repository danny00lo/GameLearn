/**
 * Created by DannyLo on 2017/11/21.
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Ranking = (function (_super) {
    __extends(Ranking, _super);
    function Ranking() {
        var _this = _super.call(this) || this;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.uiCompHandler, _this);
        _this.skinName = "resource/skins/ranking.exml";
        return _this;
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
    Ranking.prototype.rankingList = function () {
        var self = this;
        var params = {
            userToken: BlackJack.requestHTTP().userToken,
            gameId: BlackJack.requestHTTP().gameId
        };
        API.getUserRanking(params).then(function (res) {
            console.log(res);
            var dsListHeros = [];
            var rankingObj;
            for (var i = 0; i < res.data.allRank.length; i++) {
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
                    };
                    dsListHeros.push(rankingObj);
                }
            }
            self.listGoods.dataProvider = new eui.ArrayCollection(dsListHeros);
            self.listGoods.itemRenderer = GoodsListIRSkin;
        });
    };
    Ranking.prototype.uiCompHandler = function () {
        // this.sendPostRequest();
        this.rankingList();
    };
    Ranking.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
    };
    return Ranking;
}(eui.Component));
__reflect(Ranking.prototype, "Ranking");
var GoodsListIRSkin = (function (_super) {
    __extends(GoodsListIRSkin, _super);
    function GoodsListIRSkin() {
        var _this = _super.call(this) || this;
        _this.skinName = "rankingList";
        return _this;
    }
    GoodsListIRSkin.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
    };
    GoodsListIRSkin.prototype.dataChanged = function () {
    };
    return GoodsListIRSkin;
}(eui.ItemRenderer));
__reflect(GoodsListIRSkin.prototype, "GoodsListIRSkin");
var Kidding = (function (_super) {
    __extends(Kidding, _super);
    function Kidding() {
        var _this = _super.call(this) || this;
        _this.skinName = "ScoreBest";
        return _this;
    }
    Kidding.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
    };
    Kidding.prototype.dataChanged = function () {
    };
    return Kidding;
}(eui.ItemRenderer));
__reflect(Kidding.prototype, "Kidding");
