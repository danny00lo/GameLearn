module BlackJack {
    // 公共组件库
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     */
    export function createBitmapByName(name: string): egret.Bitmap {
        let result: egret.Bitmap = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };

    // 定义请求网址路径
    export function requestHTTP() {
        return {
            "ajaxUrl": "http://randomtest.haiguime.com/",
            // "ajaxUrl": "http://192.168.1.37:8087/",
            // "ajaxUrl": "http://random.haiguime.com/",
            "gameId": sessionStorage.getItem("gameId"),
            "platformType": "YLK",
            "userToken": sessionStorage.getItem("loginUser")
        }
    };

    // 切断名字
    export function cutName(name) {
        let cutName = name
        if (cutName.length > 4) {
            var cutterName = cutName.slice(0, 4) + "..."
            return cutterName;
        } else {
            return cutName
        }
    };
}