var BlackJack;
(function (BlackJack) {
    // 公共组件库
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     */
    function createBitmapByName(name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
    BlackJack.createBitmapByName = createBitmapByName;
    ;
    // 定义请求网址路径
    function requestHTTP() {
        return {
            "ajaxUrl": "http://randomtest.haiguime.com/",
            // "ajaxUrl": "http://192.168.1.37:8087/",
            // "ajaxUrl": "http://random.haiguime.com/",
            "gameId": sessionStorage.getItem("gameId"),
            "platformType": "YLK",
            "userToken": sessionStorage.getItem("loginUser")
        };
    }
    BlackJack.requestHTTP = requestHTTP;
    ;
    // 切断名字
    function cutName(name) {
        var cutName = name;
        if (cutName.length > 4) {
            var cutterName = cutName.slice(0, 4) + "...";
            return cutterName;
        }
        else {
            return cutName;
        }
    }
    BlackJack.cutName = cutName;
    ;
})(BlackJack || (BlackJack = {}));
