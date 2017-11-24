var API;
(function (API) {
    /**定义axios请求路径参数 */
    var config = {
        url: '/user',
        method: 'post',
        baseURL: BlackJack.requestHTTP().ajaxUrl + 'cloud2.activity.api',
        transformRequest: [function (data) {
                // Do whatever you want to transform the data
                var ret = '';
                for (var it in data) {
                    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
                }
                return ret;
            }],
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        timeout: 50000,
        responseType: 'json'
    };
    var config2 = {
        url: '/user',
        method: 'get',
        baseURL: BlackJack.requestHTTP().ajaxUrl + 'cloud2.activity.api',
        transformRequest: [function (data) {
                // Do whatever you want to transform the data
                var ret = '';
                for (var it in data) {
                    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
                }
                return ret;
            }],
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        timeout: 50000,
        responseType: 'json'
    };
    /**定义axios请求路径参数 */
    /**定义网络类型 */
    var ENUM = {
        ERROR_CODE: {
            OK: 200 // 正常
        }
    };
    /**请求用户信息 */
    API.getUserInfo = function (params) {
        return axios.post(BlackJack.requestHTTP().ajaxUrl + 'cloud2.activity.api/gamePlatform/queryUserInfo.do', params, config)
            .then(function (res) {
            return ENUM.ERROR_CODE.OK == res.status ? res.data : res.data;
        });
    };
    /**请求排行榜个人排名 */
    API.getUserRanking = function (params) {
        return axios.post(BlackJack.requestHTTP().ajaxUrl + 'cloud2.activity.api/h5game/h5Heap/getHeapGameRankList.do', params, config)
            .then(function (res) {
            return ENUM.ERROR_CODE.OK == res.status ? res.data : res.data;
        });
    };
    /**请求活动说明 */
    API.getGameInfo = function (params) {
        return axios.post(BlackJack.requestHTTP().ajaxUrl + 'cloud2.activity.api/v7/market/drwaLottery/getGameActitityInfo.do', params, config)
            .then(function (res) {
            return ENUM.ERROR_CODE.OK == res.status ? res.data : res.data;
        });
    };
})(API || (API = {}));
