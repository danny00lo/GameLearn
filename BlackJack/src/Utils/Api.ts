module API {
    // 禁止ts文件检测外部引用的JS文件
    declare let CryptoJS: any;
    // 解除使用jq的控制
    declare let $: any
    // 解除使用axios的控制
    declare let axios: any

    /**定义axios请求路径参数 */
    const config = {
        url: '/user',
        method: 'post',
        baseURL: BlackJack.requestHTTP().ajaxUrl + 'cloud2.activity.api',

        transformRequest: [function (data) {
            // Do whatever you want to transform the data
            let ret = ''
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
        }],
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        timeout: 50000,
        responseType: 'json'
    };

    const config2 = {
        url: '/user',
        method: 'get',
        baseURL: BlackJack.requestHTTP().ajaxUrl + 'cloud2.activity.api',

        transformRequest: [function (data) {
            // Do whatever you want to transform the data
            let ret = ''
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
        }],
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        timeout: 50000,
        responseType: 'json'
    }
    /**定义axios请求路径参数 */

    /**定义网络类型 */
    const ENUM = {
        ERROR_CODE: {
            OK: 200 // 正常
            // "UNKNOWN_ERROR": 10000, // 内部错误
            // "TOKEN_INVALID": 10001, // Token 无效
            // "TOKEN_EXPIRED": 10002, // Token 过期
            // "SIGN_INVALID": 10003, // Sign 无效
            // "SIGN_EXPIRED": 10004, // Sign 过期
        }
    };

    /**请求用户信息 */
    export const getUserInfo = params => {
        return axios.post(BlackJack.requestHTTP().ajaxUrl + 'cloud2.activity.api/gamePlatform/queryUserInfo.do', params, config)
            .then((res) => {
                return ENUM.ERROR_CODE.OK == res.status ? res.data : res.data;
            });
    }

    /**请求排行榜个人排名 */
    export const getUserRanking = params => {
        return axios.post(BlackJack.requestHTTP().ajaxUrl + 'cloud2.activity.api/h5game/h5Heap/getHeapGameRankList.do', params, config)
            .then((res) => {
                return ENUM.ERROR_CODE.OK == res.status ? res.data : res.data;
            });
    }
    /**请求活动说明 */
    export const getGameInfo = params => {
        return axios.post(BlackJack.requestHTTP().ajaxUrl + 'cloud2.activity.api/v7/market/drwaLottery/getGameActitityInfo.do', params, config)
            .then((res) => {
                return ENUM.ERROR_CODE.OK == res.status ? res.data : res.data;
            });
    }
}