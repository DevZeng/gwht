webpackJsonp([2],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.tuisongPost = exports.posterGet = exports.posterPost = exports.wxconfigDel = exports.wxconfigGet = exports.wxconfigPost = exports.defaultrole = exports.roleDel = exports.rolePost = exports.roleGet = exports.permissionGet = exports.adminDel = exports.adminPost = exports.adminGet = exports.comGetAll = exports.ratioGet = exports.ratioPost = exports.proxyGet = exports.agentGet = exports.bindchecks = exports.unbindcheck = exports.bindcheck = exports.tixianPost = exports.bindshop = exports.storeDel = exports.storeCheck = exports.shoponeGet = exports.shopGet = exports.shopPost = exports.shopaddDel = exports.shopaddPost = exports.shopaddGet = exports.countdataGet = exports.deliveryDel = exports.deliveryPost = exports.deliveryGet = exports.dataTypeDel = exports.dataTypeGet = exports.setDataTypeSort = exports.dataTypePost = exports.dataDel = exports.dataPost = exports.dataGet = exports.AdvertDel = exports.AdvertPost = exports.AdvertsGet = exports.momentDel = exports.momentPost = exports.momentsGet = exports.documentDel = exports.documentPost = exports.documentsGet = exports.keywordDel = exports.keywordPost = exports.keywordGet = exports.baseget = exports.baseset = exports.applyCheck = exports.applyGet = exports.tablePost = exports.shipgoods = exports.allorderTui = exports.allorderGet = exports.groupSet = exports.groupDel = exports.groupGet = exports.groupPost = exports.userPost = exports.userGet = exports.proGet = exports.proDel = exports.setProjectSort = exports.proAdd = exports.prolistGet = exports.setProductSort = exports.upload = exports.listDel = exports.oneGet = exports.listGet = exports.setTypeSort = exports.typeDel = exports.typePost = exports.typeAllGet = exports.typeGet = exports.BannerDel = exports.BannerPost = exports.BannersGet = exports.requestLogout = exports.requestLogin = exports.headersA = undefined;

var _axios = __webpack_require__(114);

var _axios2 = _interopRequireDefault(_axios);

var _qs = __webpack_require__(244);

var _qs2 = _interopRequireDefault(_qs);

var _elementUi = __webpack_require__(3);

var _index = __webpack_require__(54);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_axios2.default.defaults.timeout = 1500000;
_axios2.default.defaults.withCredentials = true;
_axios2.default.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';

var headersA = exports.headersA = { "content-type": 'multipart/form-data' };

//请求拦截器
_axios2.default.interceptors.request.use(function (config) {
    if (config.method === 'post') {
        config.data = _qs2.default.stringify(config.data);
    }
    return config;
}, function (error) {

    console.log('错误的传参！');
});

_axios2.default.interceptors.request.use(function (config) {
    if (config.method === 'put') {
        config.data = _qs2.default.stringify(config.data);
    }
    return config;
}, function (error) {

    console.log('错误的传参！');
});

//响应拦截器
_axios2.default.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error.response.status == 401) {
        var that = undefined;
        _elementUi.MessageBox.alert('请重新登录', '登录超时', {
            confirmButtonText: '确定',
            closeOnPressEscape: false,
            showClose: false,
            callback: function callback(action) {
                if (action == 'confirm') {
                    _index2.default.push('/login');
                }
            }
        });
    } else {
        (0, _elementUi.Message)({
            message: error.response.data.msg,
            type: 'error'
        });
    }
    return Promise.reject(error);
});

var hosturl = 'http://ns.ns-space.cn';

var base = hosturl;

exports.default = hosturl;

//登录

var requestLogin = exports.requestLogin = function requestLogin(params) {
    return _axios2.default.post(base + '/login', params).then(function (res) {
        return res.data;
    });
};

var requestLogout = exports.requestLogout = function requestLogout(params) {
    return _axios2.default.get(base + '/logout' + ('' + params)).then(function (res) {
        return res.data;
    });
};

//轮播
var BannersGet = exports.BannersGet = function BannersGet(params) {
    return _axios2.default.get(base + '/banners' + ('' + params)).then(function (res) {
        return res.data;
    });
};
var BannerPost = exports.BannerPost = function BannerPost(params) {
    return _axios2.default.post(base + '/banner', params).then(function (res) {
        return res.data;
    });
};
var BannerDel = exports.BannerDel = function BannerDel(params) {
    return _axios2.default.get(base + '/del/banner' + ('' + params)).then(function (res) {
        return res.data;
    });
};

//产品分类
var typeGet = exports.typeGet = function typeGet(params) {
    return _axios2.default.get(base + '/types' + ('' + params)).then(function (res) {
        return res.data;
    });
};

var typeAllGet = exports.typeAllGet = function typeAllGet(params) {
    return _axios2.default.get(base + '/all/types' + ('' + params)).then(function (res) {
        return res.data;
    });
};

var typePost = exports.typePost = function typePost(params) {
    return _axios2.default.post(base + '/type', params).then(function (res) {
        return res.data;
    });
};

var typeDel = exports.typeDel = function typeDel(params) {
    return _axios2.default.get(base + '/del/type' + ('' + params)).then(function (res) {
        return res.data;
    });
};

var setTypeSort = exports.setTypeSort = function setTypeSort(params) {
    return _axios2.default.post(base + '/type/sort', params).then(function (res) {
        return res.data;
    });
};

// 获取全部产品(products)
var listGet = exports.listGet = function listGet(params) {
    return _axios2.default.get(base + '/products' + ('' + params)).then(function (res) {
        return res.data;
    });
};

// 获取单个产品
var oneGet = exports.oneGet = function oneGet(params) {
    return _axios2.default.get(base + '/product' + ('' + params)).then(function (res) {
        return res.data;
    });
};
// 删除产品
var listDel = exports.listDel = function listDel(params) {
    return _axios2.default.get(base + '/del/product' + ('' + params)).then(function (res) {
        return res.data;
    });
};

// 增加产品 
var upload = exports.upload = function upload(params) {
    return _axios2.default.post(base + '/product', params).then(function (res) {
        return res.data;
    });
};

var setProductSort = exports.setProductSort = function setProductSort(params) {
    return _axios2.default.post(base + '/product/sort', params).then(function (res) {
        return res.data;
    });
};

// 获取全部项目
var prolistGet = exports.prolistGet = function prolistGet(params) {
    return _axios2.default.get(base + '/projects' + ('' + params)).then(function (res) {
        return res.data;
    });
};

// 添加项目
var proAdd = exports.proAdd = function proAdd(params) {
    return _axios2.default.post(base + '/project', params).then(function (res) {
        return res.data;
    });
};
var setProjectSort = exports.setProjectSort = function setProjectSort(params) {
    return _axios2.default.post(base + '/project/sort', params).then(function (res) {
        return res.data;
    });
};
// 删除项目
var proDel = exports.proDel = function proDel(params) {
    return _axios2.default.get(base + '/del/project' + ('' + params)).then(function (res) {
        return res.data;
    });
};

// 获取单个项目
var proGet = exports.proGet = function proGet(params) {
    return _axios2.default.get(base + '/project' + ('' + params)).then(function (res) {
        return res.data;
    });
};

//用户
var userGet = exports.userGet = function userGet(params) {
    return _axios2.default.get(base + '/wechat/users' + ('' + params)).then(function (res) {
        return res.data;
    });
};

var userPost = exports.userPost = function userPost(params) {
    return _axios2.default.post(base + '/wechat/user', params).then(function (res) {
        return res.data;
    });
};

//拼团
var groupPost = exports.groupPost = function groupPost(params) {
    return _axios2.default.post(base + '/group/buy', params).then(function (res) {
        return res.data;
    });
};

var groupGet = exports.groupGet = function groupGet(params) {
    return _axios2.default.get(base + '/group/buy' + ('' + params)).then(function (res) {
        return res.data;
    });
};

var groupDel = exports.groupDel = function groupDel(params) {
    return _axios2.default.get(base + '/del/group/buy' + ('' + params)).then(function (res) {
        return res.data;
    });
};

var groupSet = exports.groupSet = function groupSet(params) {
    return _axios2.default.get(base + '/check/group/buy' + ('' + params)).then(function (res) {
        return res.data;
    });
};

//订单
var allorderGet = exports.allorderGet = function allorderGet(params) {
    return _axios2.default.get(base + '/orders' + ('' + params)).then(function (res) {
        return res.data;
    });
};

var allorderTui = exports.allorderTui = function allorderTui(params) {
    return _axios2.default.get(base + '/refund/order' + ('' + params)).then(function (res) {
        return res.data;
    });
};

var shipgoods = exports.shipgoods = function shipgoods(params) {
    return _axios2.default.post(base + '/delivery/order', params).then(function (res) {
        return res.data;
    });
};

var tablePost = exports.tablePost = function tablePost(params) {
    return _axios2.default.post(base + '/import/orders', params, { headers: headersA }).then(function (res) {
        return res.data;
    });
};

//代理申请
var applyGet = exports.applyGet = function applyGet(params) {
    return _axios2.default.get(base + '/proxy/applies' + ('' + params)).then(function (res) {
        return res.data;
    });
};

var applyCheck = exports.applyCheck = function applyCheck(params) {
    return _axios2.default.post(base + '/proxy/apply', params).then(function (res) {
        return res.data;
    });
};

// 设置
var baseset = exports.baseset = function baseset(params) {
    return _axios2.default.post(base + '/config', params).then(function (res) {
        return res.data;
    });
};

var baseget = exports.baseget = function baseget(params) {
    return _axios2.default.get(base + '/config' + ('' + params)).then(function (res) {
        return res.data;
    });
};

var keywordGet = exports.keywordGet = function keywordGet(params) {
    return _axios2.default.get(base + '/keywords' + ('' + params)).then(function (res) {
        return res.data;
    });
};

var keywordPost = exports.keywordPost = function keywordPost(params) {
    return _axios2.default.post(base + '/keyword', params).then(function (res) {
        return res.data;
    });
};

var keywordDel = exports.keywordDel = function keywordDel(params) {
    return _axios2.default.get(base + '/del/keyword' + ('' + params)).then(function (res) {
        return res.data;
    });
};

//帮助文档
var documentsGet = exports.documentsGet = function documentsGet(params) {
    return _axios2.default.get(base + '/documents' + ('' + params)).then(function (res) {
        return res.data;
    });
};

// export const documentGet = params => { return axios.get(`${base}/document`+`${params}`).then(res => res.data)}

var documentPost = exports.documentPost = function documentPost(params) {
    return _axios2.default.post(base + '/document', params).then(function (res) {
        return res.data;
    });
};

var documentDel = exports.documentDel = function documentDel(params) {
    return _axios2.default.get(base + '/del/document' + ('' + params)).then(function (res) {
        return res.data;
    });
};

//动态管理
var momentsGet = exports.momentsGet = function momentsGet(params) {
    return _axios2.default.get(base + '/moments' + ('' + params)).then(function (res) {
        return res.data;
    });
};

var momentPost = exports.momentPost = function momentPost(params) {
    return _axios2.default.post(base + '/moment', params).then(function (res) {
        return res.data;
    });
};
var momentDel = exports.momentDel = function momentDel(params) {
    return _axios2.default.get(base + '/del/moment' + ('' + params)).then(function (res) {
        return res.data;
    });
};

// 广告管理
var AdvertsGet = exports.AdvertsGet = function AdvertsGet(params) {
    return _axios2.default.get(base + '/adverts' + ('' + params)).then(function (res) {
        return res.data;
    });
};

var AdvertPost = exports.AdvertPost = function AdvertPost(params) {
    return _axios2.default.post(base + '/advert', params).then(function (res) {
        return res.data;
    });
};

var AdvertDel = exports.AdvertDel = function AdvertDel(params) {
    return _axios2.default.get(base + '/del/advert' + ('' + params)).then(function (res) {
        return res.data;
    });
};

// 资源管理
var dataGet = exports.dataGet = function dataGet(params) {
    return _axios2.default.get(base + '/data/documents' + ('' + params)).then(function (res) {
        return res.data;
    });
};

// 添加资源
var dataPost = exports.dataPost = function dataPost(params) {
    return _axios2.default.post(base + '/data/document', params).then(function (res) {
        return res.data;
    });
};

// 删除资源
var dataDel = exports.dataDel = function dataDel(params) {
    return _axios2.default.get(base + '/del/data/document' + ('' + params)).then(function (res) {
        return res.data;
    });
};

var dataTypePost = exports.dataTypePost = function dataTypePost(params) {
    return _axios2.default.post(base + '/data/type', params).then(function (res) {
        return res.data;
    });
};
var setDataTypeSort = exports.setDataTypeSort = function setDataTypeSort(params) {
    return _axios2.default.post(base + '/data/type/sort', params).then(function (res) {
        return res.data;
    });
};
var dataTypeGet = exports.dataTypeGet = function dataTypeGet(params) {
    return _axios2.default.get(base + '/data/types' + ('' + params)).then(function (res) {
        return res.data;
    });
};
var dataTypeDel = exports.dataTypeDel = function dataTypeDel(params) {
    return _axios2.default.get(base + '/del/data/type' + ('' + params)).then(function (res) {
        return res.data;
    });
};

//快递
var deliveryGet = exports.deliveryGet = function deliveryGet(params) {
    return _axios2.default.get(base + '/expresses' + ('' + params)).then(function (res) {
        return res.data;
    });
};

var deliveryPost = exports.deliveryPost = function deliveryPost(params) {
    return _axios2.default.post(base + '/express', params).then(function (res) {
        return res.data;
    });
};

var deliveryDel = exports.deliveryDel = function deliveryDel(params) {
    return _axios2.default.delete(base + '/express' + ('' + params)).then(function (res) {
        return res.data;
    });
};

// //快递配置
// export const kdconfigGet = params => { return axios.get(`${base}/express/config`+`${params}`).then(res => res.data)}

// export const kdconfigPost = params => { return axios.post(`${base}/express/config`, params).then(res => res.data)}


//统计数据
var countdataGet = exports.countdataGet = function countdataGet(params) {
    return _axios2.default.get(base + '/count' + ('' + params)).then(function (res) {
        return res.data;
    });
};

//店铺地区
var shopaddGet = exports.shopaddGet = function shopaddGet(params) {
    return _axios2.default.get(base + '/cities' + ('' + params)).then(function (res) {
        return res.data;
    });
};

var shopaddPost = exports.shopaddPost = function shopaddPost(params) {
    return _axios2.default.post(base + '/city', params).then(function (res) {
        return res.data;
    });
};

var shopaddDel = exports.shopaddDel = function shopaddDel(params) {
    return _axios2.default.delete(base + '/city' + ('' + params)).then(function (res) {
        return res.data;
    });
};

//店铺
var shopPost = exports.shopPost = function shopPost(params) {
    return _axios2.default.post(base + '/store', params).then(function (res) {
        return res.data;
    });
};

var shopGet = exports.shopGet = function shopGet(params) {
    return _axios2.default.get(base + '/stores' + ('' + params)).then(function (res) {
        return res.data;
    });
};

var shoponeGet = exports.shoponeGet = function shoponeGet(params) {
    return _axios2.default.get(base + '/store' + ('' + params)).then(function (res) {
        return res.data;
    });
};

var storeCheck = exports.storeCheck = function storeCheck(params) {
    return _axios2.default.get(base + '/check/store' + ('' + params)).then(function (res) {
        return res.data;
    });
};

var storeDel = exports.storeDel = function storeDel(params) {
    return _axios2.default.delete(base + '/store' + ('' + params)).then(function (res) {
        return res.data;
    });
};

var bindshop = exports.bindshop = function bindshop(params) {
    return _axios2.default.get(base + '/bind/store' + ('' + params)).then(function (res) {
        return res.data;
    });
};

var tixianPost = exports.tixianPost = function tixianPost(params) {
    return _axios2.default.post(base + '/withdraw', params).then(function (res) {
        return res.data;
    });
};

var bindcheck = exports.bindcheck = function bindcheck(params) {
    return _axios2.default.get(base + '/bind/user' + ('' + params)).then(function (res) {
        return res.data;
    });
};
var unbindcheck = exports.unbindcheck = function unbindcheck(params) {
    return _axios2.default.get(base + '/unbind/user' + ('' + params)).then(function (res) {
        return res.data;
    });
};
var bindchecks = exports.bindchecks = function bindchecks(params) {
    return _axios2.default.get(base + '/store/binds' + ('' + params)).then(function (res) {
        return res.data;
    });
};

//分销
var agentGet = exports.agentGet = function agentGet(params) {
    return _axios2.default.get(base + '/proxies' + ('' + params)).then(function (res) {
        return res.data;
    });
};

var proxyGet = exports.proxyGet = function proxyGet(params) {
    return _axios2.default.get(base + '/amount/details' + ('' + params)).then(function (res) {
        return res.data;
    });
};

var ratioPost = exports.ratioPost = function ratioPost(params) {
    return _axios2.default.post(base + '/ratio', params).then(function (res) {
        return res.data;
    });
};

var ratioGet = exports.ratioGet = function ratioGet(params) {
    return _axios2.default.get(base + '/ratio' + ('' + params)).then(function (res) {
        return res.data;
    });
};

var comGetAll = exports.comGetAll = function comGetAll(params) {
    return _axios2.default.get(base + '/brokerages' + ('' + params)).then(function (res) {
        return res.data;
    });
};

//管理员
var adminGet = exports.adminGet = function adminGet(params) {
    return _axios2.default.get(base + '/admins' + ('' + params)).then(function (res) {
        return res.data;
    });
};

var adminPost = exports.adminPost = function adminPost(params) {
    return _axios2.default.post(base + '/admin', params).then(function (res) {
        return res.data;
    });
};

var adminDel = exports.adminDel = function adminDel(params) {
    return _axios2.default.delete(base + '/user' + ('' + params)).then(function (res) {
        return res.data;
    });
};

//角色
var permissionGet = exports.permissionGet = function permissionGet(params) {
    return _axios2.default.get(base + '/permissions' + ('' + params)).then(function (res) {
        return res.data;
    });
};

var roleGet = exports.roleGet = function roleGet(params) {
    return _axios2.default.get(base + '/roles' + ('' + params)).then(function (res) {
        return res.data;
    });
};

var rolePost = exports.rolePost = function rolePost(params) {
    return _axios2.default.post(base + '/role', params).then(function (res) {
        return res.data;
    });
};

var roleDel = exports.roleDel = function roleDel(params) {
    return _axios2.default.delete(base + '/role' + ('' + params)).then(function (res) {
        return res.data;
    });
};

var defaultrole = exports.defaultrole = function defaultrole(params) {
    return _axios2.default.get(base + '/default/role' + ('' + params)).then(function (res) {
        return res.data;
    });
};

//微信设置
// export const wxconfigPost = params => { return axios.post(`${base}/tx/config`, params).then(res => res.data)}

// export const wxconfigGet = params => { return axios.get(`${base}/tx/config`+`${params}`).then(res => res.data)}

var wxconfigPost = exports.wxconfigPost = function wxconfigPost(params) {
    return _axios2.default.post(base + '/notify/config', params).then(function (res) {
        return res.data;
    });
};

var wxconfigGet = exports.wxconfigGet = function wxconfigGet(params) {
    return _axios2.default.get(base + '/notify/configs' + ('' + params)).then(function (res) {
        return res.data;
    });
};

var wxconfigDel = exports.wxconfigDel = function wxconfigDel(params) {
    return _axios2.default.get(base + '/del/notify/configs' + ('' + params)).then(function (res) {
        return res.data;
    });
};

//海报
var posterPost = exports.posterPost = function posterPost(params) {
    return _axios2.default.post(base + '/poster/configs', params).then(function (res) {
        return res.data;
    });
};

var posterGet = exports.posterGet = function posterGet(params) {
    return _axios2.default.get(base + '/poster/configs' + ('' + params)).then(function (res) {
        return res.data;
    });
};

var tuisongPost = exports.tuisongPost = function tuisongPost(params) {
    return _axios2.default.post(base + '/notify/queue', params).then(function (res) {
        return res.data;
    });
};

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var qiniu = {

    token: 'v8HMJl-CM2EBkkZVsRsVKsYKI5vv-NHP4O9h4MTX:AQxfYNcb46udJNuCqsIgWz4Xec8=:eyJzY29wZSI6InB5d29tYW4iLCJkZWFkbGluZSI6MTg2MjY0NzE5OH0=',

    // upurl:'https://upload-z2.qiniup.com',
    upurl: 'http://111.230.135.20/upload',
    hosturl: 'http://111.230.135.20/'

    // showurl:'https://qu.qdbnm.com/'
    // showurl:'http://pam213sin.bkt.clouddn.com/'
};

exports.default = qiniu;

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(5);

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = __webpack_require__(304);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _Home = __webpack_require__(267);

var _Home2 = _interopRequireDefault(_Home);

var _elementUi = __webpack_require__(3);

var _Console = __webpack_require__(279);

var _Console2 = _interopRequireDefault(_Console);

var _Goodlist = __webpack_require__(264);

var _Goodlist2 = _interopRequireDefault(_Goodlist);

var _Goodtype = __webpack_require__(266);

var _Goodtype2 = _interopRequireDefault(_Goodtype);

var _Goodnew = __webpack_require__(265);

var _Goodnew2 = _interopRequireDefault(_Goodnew);

var _Projectlist = __webpack_require__(271);

var _Projectlist2 = _interopRequireDefault(_Projectlist);

var _Projectnew = __webpack_require__(272);

var _Projectnew2 = _interopRequireDefault(_Projectnew);

var _Joinlist = __webpack_require__(259);

var _Joinlist2 = _interopRequireDefault(_Joinlist);

var _Orderlist = __webpack_require__(270);

var _Orderlist2 = _interopRequireDefault(_Orderlist);

var _Userlist = __webpack_require__(278);

var _Userlist2 = _interopRequireDefault(_Userlist);

var _Proxylist = __webpack_require__(260);

var _Proxylist2 = _interopRequireDefault(_Proxylist);

var _Sendmsg = __webpack_require__(268);

var _Sendmsg2 = _interopRequireDefault(_Sendmsg);

var _Baseset = __webpack_require__(273);

var _Baseset2 = _interopRequireDefault(_Baseset);

var _Wordset = __webpack_require__(277);

var _Wordset2 = _interopRequireDefault(_Wordset);

var _Wechatset = __webpack_require__(276);

var _Wechatset2 = _interopRequireDefault(_Wechatset);

var _Document = __webpack_require__(275);

var _Document2 = _interopRequireDefault(_Document);

var _Delivelist = __webpack_require__(274);

var _Delivelist2 = _interopRequireDefault(_Delivelist);

var _Banner = __webpack_require__(261);

var _Banner2 = _interopRequireDefault(_Banner);

var _MomentList = __webpack_require__(269);

var _MomentList2 = _interopRequireDefault(_MomentList);

var _DataList = __webpack_require__(262);

var _DataList2 = _interopRequireDefault(_DataList);

var _DataType = __webpack_require__(263);

var _DataType2 = _interopRequireDefault(_DataType);

var _Adertlist = __webpack_require__(257);

var _Adertlist2 = _interopRequireDefault(_Adertlist);

var _Aderttype = __webpack_require__(258);

var _Aderttype2 = _interopRequireDefault(_Aderttype);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Commission from '@/components/Agent/Commission'

// import Adminlist from '@/components/Role/Adminlist'

// import Shoplist from '@/components/Shop/Shoplist'
// import Shopadd from '@/components/Shop/Shopadd'
// import Newshop from '@/components/Shop/Newshop'
var Login = function Login(resolve) {
    return __webpack_require__.e/* require */(0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(309)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
};

_vue2.default.use(_vueRouter2.default);

var router = new _vueRouter2.default({
    mode: 'history',
    routes: [{
        path: '/Login',
        name: '登录',
        component: Login
    }, {
        leaf: true,
        path: '/',
        name: '产品管理',
        component: _Home2.default,
        redirect: '/Good/Goodlist',
        menuShow: true,
        iconCls: 'iconfont menu-good',
        children: [{ path: '/Good/Goodlist', component: _Goodlist2.default, name: '产品列表', menuShow: true, meta: { permission: '' } }, { path: '/Good/Goodnew', component: _Goodnew2.default, name: '产品增加', menuShow: false, meta: { permission: '' } }]
    }, {
        leaf: true,
        path: '/',
        name: '产品分类',
        component: _Home2.default,
        redirect: '/Good/Goodtype',
        menuShow: true,
        iconCls: 'iconfont menu-good',
        children: [{ path: '/Good/Goodtype', component: _Goodtype2.default, name: '产品分类', menuShow: true, meta: { permission: '' } }]
    }, {
        leaf: true,
        path: '/',
        name: '项目管理',
        component: _Home2.default,
        redirect: '/Project/Projectlist',
        menuShow: true,
        iconCls: 'iconfont menu-good',
        children: [{ path: '/Project/Projectlist', component: _Projectlist2.default, name: '项目列表', menuShow: true, meta: { permission: '' } }, { path: '/Project/Projectnew', component: _Projectnew2.default, name: '新增产品', menuShow: true, meta: { permission: '' } }]
    }, {
        leaf: true,
        path: '/',
        name: '动态管理',
        component: _Home2.default,
        redirect: '/Moment/MomentList',
        menuShow: true,
        iconCls: 'iconfont menu-good',
        children: [{ path: '/Moment/MomentList', component: _MomentList2.default, name: '动态管理', menuShow: true, meta: { permission: '' } }]
    }, {
        // leaf: true,
        path: '/',
        name: '资源管理',
        component: _Home2.default,
        redirect: '/Data/DataType',
        menuShow: true,
        iconCls: 'iconfont menu-good',
        children: [{ path: '/Data/DataType', component: _DataType2.default, name: '资源类型', menuShow: true, meta: { permission: '' } }, { path: '/Data/DataList', component: _DataList2.default, name: '资源管理', menuShow: true, meta: { permission: '' } }]
    }, {
        leaf: true,
        path: '/',
        name: '轮播',
        component: _Home2.default,
        redirect: '/Banner/Banner',
        menuShow: true,
        iconCls: 'iconfont menu-guanggao',
        children: [{ path: '/Banner/Banner', component: _Banner2.default, name: '轮播', menuShow: true, meta: { permission: '' } }]
    }, {
        leaf: true,
        path: '/',
        name: '首页广告',
        component: _Home2.default,
        redirect: '/Adert/Adertlist',
        menuShow: true,
        iconCls: 'iconfont menu-guanggao',
        children: [
        // { path: '/Adert/Aderttype', component: AdertType, name: '广告类型', menuShow: true, meta: { permission: '' }},
        { path: '/Adert/Adertlist', component: _Adertlist2.default, name: '首页广告', menuShow: true, meta: { permission: '' } }]
    }, {
        // leaf: true,
        path: '/',
        name: '系统',
        component: _Home2.default,
        redirect: '/Setting/Baseset',
        menuShow: true,
        iconCls: 'iconfont menu-xitong',
        children: [{ path: '/Setting/Baseset', component: _Baseset2.default, name: '系统设置', menuShow: true, meta: { permission: '' } },
        // {path: '/Setting/Wordset',component: Wordset,name: '搜索设置',menuShow: true,meta:{permission: ''}},
        // {path: '/Setting/Wechatset',component: Wechatset,name: '微信设置',menuShow: true,meta:{permission: ''}},
        { path: '/Setting/Document', component: _Document2.default, name: '帮助文档', menuShow: true, meta: { permission: '' } }]
    }]
});

router.beforeEach(function (to, from, next) {
    // next()
    if (to.path.startsWith('/Login')) {
        next();
    } else {
        var token = window.sessionStorage.getItem('token');
        // console.log(!token)
        if (!token) {
            next({ path: '/Login' });
        } else {
            next();
        }
        //        if (to.meta.permission && permissions) {
        //            if (permissions.indexOf(to.meta.permission)>-1) {
        //              next()
        //          } else {
        //           MessageBox.alert('没有访问权限', '提示', {
        //            confirmButtonText: '确定',
        //            closeOnPressEscape:false,
        //            showClose:false,
        //            callback: action => {

        //            }
        //        });
        //       }
        //   }else{
        //     next() 
        // }
    }
});

exports.default = router;

/***/ }),
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 89 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 90 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(230)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(132),
  /* template */
  __webpack_require__(298),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app'
});

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__api_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_qiniu__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_qiniu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__api_qiniu__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//











/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      uptoken: {
        token: __WEBPACK_IMPORTED_MODULE_1__api_qiniu___default.a.token
      },
      upurl: __WEBPACK_IMPORTED_MODULE_1__api_qiniu___default.a.upurl,

      currentPage: 1,
      list: [],
      count: 0,
      limit: 10,
      link: "https://",

      dialogNewVisible: false,
      dialogDelVisible: false,

      putorup: "up",
      imgSrc: "../../../static/images/default.png",
      language: [{ key: 1, value: "中文" }, { key: 2, value: "英文" }],
      select: 1,

      newadv: {},
      adv_list: [{ key: 1, value: "产品" }, { key: 2, value: "项目" }, { key: 3, value: "动态" }, { key: 4, value: "资料" }, { key: 5, value: "外部链接" }],
      adv_type: "",

      pro_list: [],
      pro_id: "",

      diatitle: "新增广告",
      postarr: [],
      editId: "",
      delId: "",

      goodData: [],

      checkper1: false,
      checkper2: false,

      grouplist: [],
      gcurrentPage: 1,
      gcount: 0,
      glimit: 10
    };
  },

  methods: {
    getlist() {
      var allParams = "?page=" + this.currentPage + "&limit=" + this.limit + "&language=1";
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["AdvertsGet"])(allParams).then(res => {
        console.log(res.data.data);
        this.list = res.data.data;
        this.count = res.data.count;
      });
    },

    getLag(index) {
      this.select = index;
      this.getlist();
    },

    getPro() {
      this.pro_id = "";
      let allParams = "?page=" + this.currentPage + "&limit=" + this.limit + "&language=1";
      if (this.adv_type == 1) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["listGet"])(allParams).then(res => {
          this.pro_list = res.data.data;
        });
      } else if (this.adv_type == 2) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["prolistGet"])(allParams).then(res => {
          this.pro_list = res.data.data;
        });
      } else if (this.adv_type == 3) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["dataGet"])(allParams).then(res => {
          this.pro_list = res.data.data;
        });
      } else if (this.adv_type == 4) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["momentsGet"])(allParams).then(res => {
          this.pro_list = res.data.data;
        });
      }
    },
    handleSelect(index, row) {
      this.group_id = row.id;
      var grouplist = [];
      grouplist.push(row);
      this.grouplist = grouplist;
    },

    newone() {
      this.putorup = "up";
      this.postarr = [];
      this.link = "";
      this.adv_type = "";
      this.imgSrc = "../../../static/images/default1.png";
      this.diatitle = "新增广告", this.dialogNewVisible = true;
    },

    handleSuccess(res, file) {
      this.imgSrc = __WEBPACK_IMPORTED_MODULE_1__api_qiniu___default.a.hosturl + res.data.base_url;
    },

    handleExceed(files, fileList) {
      this.$message.warning(`一次只能上传1张图片`);
    },

    save() {
      if (this.imgSrc == "") {
        this.$message({
          message: "请选择图片",
          type: "error"
        });
      } else {
        if (this.putorup == "put") {
          var allParams = {
            href: this.imgSrc,
            id: this.editId,
            type: this.adv_type,
            language: this.select,
            param: this.pro_id,
            link: this.link
          };
        } else {
          var allParams = {
            type: this.adv_type,
            href: this.imgSrc,
            language: this.select,
            param: this.pro,
            link: this.link
          };
        }

        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["AdvertPost"])(allParams).then(res => {
          if (res.msg === "ok") {
            this.$message({
              message: "提交成功",
              type: "success"
            });
            this.imgSrc = "";
            this.getlist();
            this.dialogNewVisible = false;
          } else {
            this.$message({
              message: res.msg,
              type: "error"
            });
          }
        });
      }
    },

    handleEdit(index, row) {
      this.diatitle = "编辑广告";
      this.dialogNewVisible = true;
      this.putorup = "put";
      this.editId = row.id;
      this.imgSrc = row.href;
      this.pro_id = row.pro_id;
      this.link = row.link;
      this.adv_type = row.type;
      this.param = row.param;

      this.getPro();
      console.log(row);
    },

    handleDelete(index, row) {
      this.dialogDelVisible = true;
      this.delId = row.id;
    },

    submitdel() {
      this.dialogDelVisible = false;
      var allParams = "?id=" + this.delId;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["AdvertDel"])(allParams).then(res => {
        if (res.msg === "ok") {
          this.$message({
            message: "删除成功",
            type: "success"
          });
          this.getlist();
          this.dialogDelVisible = false;
        } else {
          this.$message({
            message: res.msg,
            type: "error"
          });
        }
      });
    },

    handleCurrentChange(val) {
      this.currentPage = val;
      this.getlist();
    },

    handleSizeChange(val) {
      this.limit = val;
      this.getlist();
    },

    gCurrentChange(val) {
      this.gcurrentPage = val;
      this.getgroup();
    },

    gSizeChange(val) {
      this.glimit = val;
      this.getgroup();
    }
  },

  mounted: function () {
    this.getlist();
  }
});

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__api_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_qiniu__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_qiniu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__api_qiniu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_element_ui__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_element_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_quill_dist_quill_core_css__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_quill_dist_quill_core_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_quill_dist_quill_core_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_quill_dist_quill_snow_css__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_quill_dist_quill_snow_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_quill_dist_quill_snow_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_quill_dist_quill_bubble_css__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_quill_dist_quill_bubble_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_quill_dist_quill_bubble_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_quill_editor__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_quill_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_vue_quill_editor__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//












 //调用编辑器

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      loading: false,
      uptoken: {
        token: __WEBPACK_IMPORTED_MODULE_1__api_qiniu___default.a.token
      },
      language: [{ key: 1, value: "中文" }, { key: 2, value: "英文" }],
      select: "",
      upurl: __WEBPACK_IMPORTED_MODULE_1__api_qiniu___default.a.upurl,

      currentPage: 1,
      list: [],
      count: 0,
      limit: 10,
      dialogNewVisible: false,
      dialogDelVisible: false,
      parent_type: true,
      addPar_type: false,
      putorup: "up",
      imgSrc: "../static/images/default.png",
      newadv: {
        title: "",
        icon: "",
        desc: ""
      },

      typeArr: [],
      type_id: "",

      diatitle: "新增分类",

      editId: "",
      delId: "",

      editorOption: {
        placeholder: "请输入详细内容（添加图片请点击上方第一个按钮）",
        theme: "snow",
        modules: {
          toolbar: {
            container: [["image"], ["bold", "italic", "underline", "strike", "blockquote", "code-block"], [{ direction: "rtl" }], [{ size: ["small", false, "large", "huge"] }], [{ header: [1, 2, 3, 4, 5, 6, false] }], [{ color: [] }, { background: [] }], [{ font: [] }], [{ align: [] }]
            // ['clean']
            ],
            handlers: {
              image: function (value) {
                if (value) {
                  document.querySelector(".quill-img input").click();
                } else {
                  this.quill.format("image", false);
                }
              }
            }
          }
        }
      }
    };
  },
  components: {
    quillEditor: __WEBPACK_IMPORTED_MODULE_6_vue_quill_editor__["quillEditor"]
  },

  methods: {
    changeSort(id, val) {
      console.log(id);
      console.log(val);

      var allParams = {
        id: id,
        sort: val
      };
      console.log(allParams);

      // 发送到数据库里面去
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["setTypeSort"])(allParams).then(res => {
        if (res.msg == "ok") {
          this.$message({
            message: "提交成功",
            type: "success"
          });
          // this.getlist();
          // this.$router.push({ path: "/Good/Goodlist" });
        } else {
          this.$message({
            message: res.msg,
            type: "error"
          });
        }
      });
    },
    quillImgSuccess(res, file) {
      console.log(res);
      let quill = this.$refs.myQuillEditor.quill;
      if (res.key) {
        let length = quill.getSelection().index;
        quill.insertEmbed(length, "image", __WEBPACK_IMPORTED_MODULE_1__api_qiniu___default.a.showurl + res.key);
        quill.setSelection(length + 1);
      } else {
        this.$message.error("图片插入失败");
      }
    },
    // 显示添加上级分类
    Showtext() {
      this.parent_type = false;
      this.addPar_type = true;
    },

    getLag(index) {
      this.select = index;
    },
    getlist() {
      var allParams = "?page=" + this.currentPage + "&limit=" + this.limit;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["typeGet"])(allParams).then(res => {
        this.typeArr = res.data.data;
      });
    },
    getalllist() {
      var allParams = "?page=" + this.currentPage + "&limit=" + this.limit;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["typeAllGet"])(allParams).then(res => {
        this.list = res.data.data;
        this.count = res.data.count;
      });
    },

    newone() {
      this.putorup = "up";
      this.imgSrc = "../static/images/default1.png";
      this.diatitle = "新增分类", this.dialogNewVisible = true, this.newadv = {
        title: "",
        icon: ""
      };
    },

    beforeUpload(file) {
      const isLt1M = file.size / 1024 / 1024 < 1;
      if (!isLt1M) {
        this.$message.error("图片大小不能超过 1MB!");
      }
      return isLt1M;
    },

    handleSuccess(res, file) {
      this.newadv.icon = __WEBPACK_IMPORTED_MODULE_1__api_qiniu___default.a.hosturl + res.data.base_url;
      this.imgSrc = __WEBPACK_IMPORTED_MODULE_1__api_qiniu___default.a.hosturl + res.data.base_url;
    },

    save() {
      if (this.newadv.logo == "" && this.nothree == true) {
        this.$message({
          message: "请上传分类logo",
          type: "error"
        });
      } else if (this.newadv.title == "") {
        this.$message({
          message: "请输入分类名称",
          type: "error"
        });
      } else {
        if (this.putorup == "put") {
          var allParams = {
            title: this.newadv.title,
            id: this.editId,
            icon: this.imgSrc,
            description: this.newadv.desc,
            parent_id: this.type_id
          };
        } else {
          var allParams = {
            title: this.newadv.title,
            icon: this.imgSrc,
            description: this.newadv.desc,
            parent_id: this.type_id,
            language: this.select
          };
        }
        console.log(allParams);

        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["typePost"])(allParams).then(res => {
          if (res.msg === "ok") {
            this.$message({
              message: "提交成功",
              type: "success"
            });

            this.getalllist();
            this.getlist();
            this.parent_type = true;
            this.addPar_type = false;
            this.dialogNewVisible = false;
          } else {
            this.$message({
              message: res.msg,
              type: "error"
            });
          }
        });
      }
    },

    handleEdit(index, row) {
      console.log(row);
      this.diatitle = "编辑分类";
      this.dialogNewVisible = true;
      this.putorup = "put";
      this.editId = row.id;
      this.imgSrc = row.image;
      this.newadv.icon = row.icon;
      this.newadv.title = row.title;
      this.newadv.desc = row.description;
      this.type_id = row.parent_id;
    },

    handleDelete(index, row) {
      this.dialogDelVisible = true;
      this.delId = row.id;
    },

    submitdel() {
      this.dialogDelVisible = false;
      var allParams = "?id=" + this.delId;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["typeDel"])(allParams).then(res => {
        if (res.msg === "ok") {
          this.$message({
            message: "删除成功",
            type: "success"
          });
          this.getalllist();
          this.getlist();
          this.parent_type = true;
          this.addPar_type = false;
          this.dialogDelVisible = false;
        } else {
          this.$message({
            message: res.msg,
            type: "error"
          });
        }
      });
    },

    handleCurrentChange(val) {
      this.currentPage = val;
      this.getalllist();
    },

    handleSizeChange(val) {
      this.limit = val;
      this.getalllist();
    }
  },

  mounted: function () {
    this.getlist();
    this.getalllist();
  }
});

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__api_api__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      list: [],
      currentPage: 1,
      count: 0,
      limit: 10,
      auto_pass: '0'
    };
  },

  methods: {
    switchchange(e) {
      console.log(e);
      var allParams = {
        auto_pass: this.auto_pass
      };
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["baseset"])(allParams).then(res => {
        if (res.msg === "ok") {
          this.getconfig();
          this.$message({
            message: '提交成功',
            type: 'success'
          });
        } else {
          this.$message({
            message: res.msg,
            type: 'error'
          });
        }
      });
    },

    getlist() {
      var allParams = '?page=' + this.currentPage + '&limit=' + this.limit;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["applyGet"])(allParams).then(res => {
        this.list = res.data.data;
        this.count = res.data.count;
      });
    },

    check(row) {
      var allParams = {
        id: row.id,
        state: 1
      };
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["applyCheck"])(allParams).then(res => {
        this.getlist();
      });
    },

    handleCurrentChange(val) {
      this.currentPage = val;
      this.getlist();
    },

    handleSizeChange(val) {
      this.limit = val;
      this.getlist();
    },

    getconfig() {
      var allParams = '';
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["baseget"])(allParams).then(res => {
        if (res.msg === "ok") {
          this.auto_pass = res.data.auto_pass;
          this.getlist();
        } else {
          this.$message({
            message: res.msg,
            type: 'error'
          });
        }
      });
    }
  },

  mounted: function () {
    this.getconfig();
  }
});

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__api_api__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
  data() {

    var checkvalue = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('此项不能为空'));
      }
      setTimeout(() => {
        if (Math.sign(value) == 1) {
          if (value % 1 === 0) {
            callback();
          } else {
            callback();
          }
        } else if (Math.sign(value) == 0) {
          callback();
        } else if (Math.sign(value) == -1) {
          callback(new Error('请输入正数'));
        } else {
          callback(new Error('请输入数字'));
        }
      }, 100);
    };

    return {
      activeName: 'list',
      dialogSeeVisible: false,
      dialogEditVisible: false,
      ratiolist: {
        system: '',
        level1: '',
        level2: '',
        level3: ''
      },
      ratio: [{
        sys: '请设置',
        store: '请设置',
        proxy: '请设置'
      }],

      list: [],

      rules: {
        sys: [{ required: true, trigger: 'blur', validator: checkvalue }],
        store: [{ required: true, trigger: 'blur', validator: checkvalue }],
        proxy: [{ required: true, trigger: 'blur', validator: checkvalue }]
      },

      currentPage: 1,
      count: 0,
      limit: 10,
      filters: {
        name: ''
      },

      currow: []
    };
  },
  methods: {

    getlist() {
      var allParams = '?page=' + this.currentPage + '&limit=' + this.limit;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["agentGet"])(allParams).then(res => {
        // console.log(res.data)
        this.list = res.data.data;
        this.count = res.data.count;
      });
    },

    clear() {
      this.filters.name = '';
      this.getlist();
    },

    handleSee(row) {
      var allParams = '?user_id=' + row.id + '&page=1&limit=99999';
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["proxyGet"])(allParams).then(res => {
        // console.log(res.data.data)
        this.currow = res.data.data;
        this.dialogSeeVisible = true;
      });
    },

    getratio() {
      var allParams = '';
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["ratioGet"])(allParams).then(res => {
        // console.log(res.data)
        if (res.data !== null) {
          // this.ratio[0].sys=res.data.sys;
          // this.ratio[0].store=res.data.store;
          this.ratio[0].proxy = res.data.proxy;
        }
      });
    },

    save() {
      this.$refs.ratiolist.validate(valid => {
        if (valid) {
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["ratioPost"])(this.ratiolist).then(res => {
            if (res.msg === "ok") {
              this.$message({
                message: '提交成功',
                type: 'success'
              });
              this.dialogEditVisible = false;
              this.getratio();
            } else {
              this.$message({
                message: res.msg,
                type: 'error'
              });
            }
          });
        } else {
          return false;
        }
      });
    },

    handleCurrentChange(val) {
      this.currentPage = val;
      this.getlist();
    },

    handleSizeChange(val) {
      this.limit = val;
      this.getlist();
    }

  },
  mounted() {
    this.getlist();
    // this.getratio();
  }
});

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__api_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_qiniu__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_qiniu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__api_qiniu__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      uptoken: {
        token: __WEBPACK_IMPORTED_MODULE_1__api_qiniu___default.a.token
      },
      upurl: __WEBPACK_IMPORTED_MODULE_1__api_qiniu___default.a.upurl,

      currentPage: 1,
      list: [],
      count: 0,
      limit: 10,

      dialogNewVisible: false,
      dialogDelVisible: false,

      putorup: "up",
      imgSrc: "",

      newadv: {},
      diatitle: "新增轮播",
      postarr: [],
      editId: "",
      delId: "",
      link: "",

      goodData: [],

      checkper1: false,
      checkper2: false,

      grouplist: [],
      gcurrentPage: 1,
      gcount: 0,
      glimit: 10
    };
  },

  methods: {
    getlist() {
      var allParams = "?page=" + this.currentPage + "&limit=" + this.limit;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["BannersGet"])(allParams).then(res => {
        this.list = res.data.data;
        this.count = res.data.count;
      });
    },

    handleSelect(index, row) {
      this.group_id = row.id;
      var grouplist = [];
      grouplist.push(row);
      this.grouplist = grouplist;
    },

    newone() {
      this.putorup = "up";
      this.postarr = [];
      this.diatitle = "新增广告", this.dialogNewVisible = true;
    },

    handleSuccess(res, file) {
      this.imgSrc = __WEBPACK_IMPORTED_MODULE_1__api_qiniu___default.a.hosturl + res.data.base_url;
    },

    handleExceed(files, fileList) {
      this.$message.warning(`一次只能上传1张图片`);
    },

    save() {
      if (this.imgSrc == "") {
        this.$message({
          message: "请选择图片",
          type: "error"
        });
      } else {
        if (this.putorup == "put") {
          var allParams = {
            href: this.imgSrc,
            link: this.link,
            id: this.editId,
            group_id: this.group_id
          };
        } else {
          var allParams = {
            href: this.imgSrc,
            group_id: this.group_id,
            link: this.link
          };
        }

        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["BannerPost"])(allParams).then(res => {
          if (res.msg === "ok") {
            this.$message({
              message: "提交成功",
              type: "success"
            });
            this.imgSrc = "";
            this.getlist();
            this.dialogNewVisible = false;
          } else {
            this.$message({
              message: res.msg,
              type: "error"
            });
          }
        });
      }
    },

    handleEdit(index, row) {
      this.diatitle = "编辑广告";
      this.dialogNewVisible = true;
      this.putorup = "put";
      this.editId = row.id;
      this.group_id = row.group_id;
      this.postarr = [];
      this.imgSrc = row.href;
      this.link = row.link;
      this.postarr.push(Object.assign({}, { url: row.href }));
    },

    handleDelete(index, row) {
      this.dialogDelVisible = true;
      this.delId = row.id;
    },

    submitdel() {
      this.dialogDelVisible = false;
      var allParams = "?id=" + this.delId;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["BannerDel"])(allParams).then(res => {
        console.log(res);
        if (res.msg === "ok") {
          this.$message({
            message: "删除成功",
            type: "success"
          });
          this.getlist();
          this.dialogDelVisible = false;
        } else {
          this.$message({
            message: res.msg,
            type: "error"
          });
        }
      });
    },

    handleCurrentChange(val) {
      this.currentPage = val;
      this.getlist();
    },

    handleSizeChange(val) {
      this.limit = val;
      this.getlist();
    },

    gCurrentChange(val) {
      this.gcurrentPage = val;
      this.getgroup();
    },

    gSizeChange(val) {
      this.glimit = val;
      this.getgroup();
    }
  },

  mounted: function () {
    this.getlist();
  }
});

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_qiniu__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_qiniu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__api_qiniu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__api_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_quill_dist_quill_core_css__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_quill_dist_quill_core_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_quill_dist_quill_core_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_quill_dist_quill_snow_css__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_quill_dist_quill_snow_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_quill_dist_quill_snow_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_quill_dist_quill_bubble_css__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_quill_dist_quill_bubble_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_quill_dist_quill_bubble_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_quill_editor__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_quill_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vue_quill_editor__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




// import {documentGet} from '../../api/api';







 //调用编辑器

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      uptoken: {
        key: "image"
      },
      upurl: __WEBPACK_IMPORTED_MODULE_0__api_qiniu___default.a.upurl,

      host: "http://111.230.135.20/",

      checkper1: false,
      checkper2: false,

      currentPage: 1,
      list: [],
      count: 0,
      limit: 10,
      type_id: "",
      typeArr: [],
      dialogNewVisible: false,
      dialogDelVisible: false,
      dialogSeeVisible: false,
      editId: "",
      delId: "",
      diatitle: "新增文档",
      nedoc: {
        title: "",
        detail: "",
        cover: "http://111.230.135.20/static/images/default1.png",
        parameter: []
      },
      language: [{ key: 1, value: "中文" }, { key: 2, value: "英文" }],

      select: 1,
      rules: {
        title: [{ required: true, trigger: "blur", message: "请输入文档标题" }],
        detail: [{ required: true, trigger: "blur", message: "请输入详细内容" }]
      },
      currow: "",

      editorOption: {
        placeholder: "请输入详细内容（添加图片请点击上方第一个按钮）",
        theme: "snow",
        modules: {
          toolbar: {
            container: [["image"], ["bold", "italic", "underline", "strike", "blockquote", "code-block"], [{ direction: "rtl" }], [{ size: ["small", false, "large", "huge"] }], [{ header: [1, 2, 3, 4, 5, 6, false] }], [{ color: [] }, { background: [] }], [{ font: [] }], [{ align: [] }]
            // ['clean']
            ],
            handlers: {
              image: function (value) {
                if (value) {
                  document.querySelector(".quill-img input").click();
                } else {
                  this.quill.format("image", false);
                }
              }
            }
          }
        }
      }
    };
  },

  components: {
    quillEditor: __WEBPACK_IMPORTED_MODULE_5_vue_quill_editor__["quillEditor"]
  },

  methods: {
    handleSuccess(res, file) {
      this.nedoc.cover = "";
      this.nedoc.cover = this.host + res.data.base_url;
      // this.cover = this.host + res.data.base_url;
      console.log(this.nedoc.cover);
    },
    ExcelSuccess(res, file, fileList) {
      this.nedoc.parameter = [];
      this.nedoc.parameter.push({
        uid: fileList[0].uid,
        url: this.host + res.data.base_url,
        name: res.data.file_name
      });
      // console.log(this.newone.parameter);
    },

    getLag(index) {
      this.select = index;
      this.getlist();
    },

    quillImgSuccess(res, file) {
      console.log(res);
      let quill = this.$refs.myQuillEditor.quill;
      if (res.data.base_url) {
        let length = quill.getSelection().index;
        quill.insertEmbed(length, "image", __WEBPACK_IMPORTED_MODULE_0__api_qiniu___default.a.hosturl + res.data.base_url);
        quill.setSelection(length + 1);
      } else {
        this.$message.error("图片插入失败");
      }
    },
    getTypelist() {
      // import { dataTypeGet } from "../../api/api";
      var allParams = "?page=" + 1 + "&limit=" + 1000;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_api__["dataTypeGet"])(allParams).then(res => {
        this.typeArr = res.data.data;
      });
    },

    getlist() {
      var allParams = "?page=" + this.currentPage + "&limit=" + this.limit + "&language=" + this.select;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_api__["dataGet"])(allParams).then(res => {
        console.log(res);
        this.list = res.data.data;
        this.count = res.data.count;
      });
    },

    // checkPer() {
    //   var per = sessionStorage.getItem("permissions");

    //   if (per.indexOf("documentAdd") > -1) {
    //     this.checkper1 = true;
    //   }

    //   var per = sessionStorage.getItem("permissions");

    //   if (per.indexOf("documentDel") > -1) {
    //     this.checkper2 = true;
    //   }
    // },

    newone() {
      this.putorup = "up";
      this.diatitle = "新增文档", this.dialogNewVisible = true, this.nedoc = {
        title: "",
        detail: ""
      };
    },

    handleEdit(index, row) {
      this.diatitle = "编辑文档";
      this.dialogNewVisible = true;
      this.putorup = "put";
      this.editId = row.id;
      this.type_id = row.type_id;
      var excal = [];
      excal.push({
        name: row.file_link,
        url: row.file_link
      });
      this.nedoc = {
        title: row.title,
        detail: row.detail,
        language: row.select,
        cover: row.cover,
        parameter: excal
      };
    },

    save() {
      if (this.nedoc.title == "") {
        this.$message({
          message: "请输入标题",
          type: "error"
        });
      } else {
        var parameter = this.nedoc.parameter[0].url;
        if (this.putorup == "put") {
          var allParams = {
            id: this.editId,
            title: this.nedoc.title,
            detail: this.nedoc.detail,
            cover: this.nedoc.cover,
            language: this.select,
            type_id: this.type_id,
            file_link: parameter
          };
        } else {
          var allParams = {
            id: "",
            title: this.nedoc.title,
            detail: this.nedoc.detail,
            cover: this.nedoc.cover,
            language: this.select,
            type_id: this.type_id,
            file_link: parameter
          };
        }
        console.log(allParams);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_api__["dataPost"])(allParams).then(res => {
          if (res.msg === "ok") {
            this.$message({
              message: "提交成功",
              type: "success"
            });
            this.getlist();
            this.dialogNewVisible = false;
          } else {
            this.$message({
              message: res.msg,
              type: "error"
            });
          }
        });
        //   }else{
        //     return false;
        //   }
        // })
      }
    },

    handleDelete(index, row) {
      this.dialogDelVisible = true;
      this.delId = row.id;
    },

    submitdel() {
      this.dialogDelVisible = false;
      var allParams = "?id=" + this.delId;

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_api__["dataDel"])(allParams).then(res => {
        // console.log(res)
        if (res.msg === "ok") {
          this.$message({
            message: "删除成功",
            type: "success"
          });
          this.getlist();
          this.dialogDelVisible = false;
        } else {
          this.$message({
            message: res.msg,
            type: "error"
          });
        }
      });
    },

    handleCurrentChange(val) {
      this.currentPage = val;
      this.getlist();
    },

    handleSizeChange(val) {
      this.limit = val;
      this.getlist();
    }
  },

  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
  },

  mounted: function () {
    this.getlist();
    this.getTypelist();
    // this.checkPer();
  }
});

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__api_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_qiniu__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_qiniu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__api_qiniu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_element_ui__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_element_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_quill_dist_quill_core_css__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_quill_dist_quill_core_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_quill_dist_quill_core_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_quill_dist_quill_snow_css__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_quill_dist_quill_snow_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_quill_dist_quill_snow_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_quill_dist_quill_bubble_css__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_quill_dist_quill_bubble_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_quill_dist_quill_bubble_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_quill_editor__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_quill_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_vue_quill_editor__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//












 //调用编辑器

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      loading: false,
      uptoken: {
        token: __WEBPACK_IMPORTED_MODULE_1__api_qiniu___default.a.token
      },
      language: [{ key: 1, value: "中文" }, { key: 2, value: "英文" }],
      select: "",
      upurl: __WEBPACK_IMPORTED_MODULE_1__api_qiniu___default.a.upurl,

      currentPage: 1,
      list: [],
      count: 0,
      limit: 10,
      dialogNewVisible: false,
      dialogDelVisible: false,
      parent_type: true,
      addPar_type: false,
      putorup: "up",
      imgSrc: "../static/images/default.png",
      newadv: {
        title: "",
        icon: "",
        desc: ""
      },

      typeArr: [],
      type_id: "",

      diatitle: "新增分类",

      editId: "",
      delId: "",

      editorOption: {
        placeholder: "请输入详细内容（添加图片请点击上方第一个按钮）",
        theme: "snow",
        modules: {
          toolbar: {
            container: [["image"], ["bold", "italic", "underline", "strike", "blockquote", "code-block"], [{ direction: "rtl" }], [{ size: ["small", false, "large", "huge"] }], [{ header: [1, 2, 3, 4, 5, 6, false] }], [{ color: [] }, { background: [] }], [{ font: [] }], [{ align: [] }]
            // ['clean']
            ],
            handlers: {
              image: function (value) {
                if (value) {
                  document.querySelector(".quill-img input").click();
                } else {
                  this.quill.format("image", false);
                }
              }
            }
          }
        }
      }
    };
  },
  components: {
    quillEditor: __WEBPACK_IMPORTED_MODULE_6_vue_quill_editor__["quillEditor"]
  },

  methods: {
    changeSort(id, val) {
      console.log(id);
      console.log(val);

      var allParams = {
        id: id,
        sort: val
      };
      console.log(allParams);

      // 发送到数据库里面去
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["setDataTypeSort"])(allParams).then(res => {
        if (res.msg == "ok") {
          this.$message({
            message: "提交成功",
            type: "success"
          });
          // this.getlist();
          // this.$router.push({ path: "/Good/Goodlist" });
        } else {
          this.$message({
            message: res.msg,
            type: "error"
          });
        }
      });
    },
    quillImgSuccess(res, file) {
      console.log(res);
      let quill = this.$refs.myQuillEditor.quill;
      if (res.key) {
        let length = quill.getSelection().index;
        quill.insertEmbed(length, "image", __WEBPACK_IMPORTED_MODULE_1__api_qiniu___default.a.showurl + res.key);
        quill.setSelection(length + 1);
      } else {
        this.$message.error("图片插入失败");
      }
    },
    // 显示添加上级分类
    Showtext() {
      this.parent_type = false;
      this.addPar_type = true;
    },

    getLag(index) {
      this.select = index;
    },
    getlist() {
      var allParams = "?page=" + this.currentPage + "&limit=" + this.limit;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["typeGet"])(allParams).then(res => {
        this.typeArr = res.data.data;
      });
    },
    getalllist() {
      var allParams = "?page=" + this.currentPage + "&limit=" + this.limit;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["dataTypeGet"])(allParams).then(res => {
        this.list = res.data.data;
        this.count = res.data.count;
      });
    },

    newone() {
      this.putorup = "up";
      this.imgSrc = "../static/images/default1.png";
      this.diatitle = "新增分类", this.dialogNewVisible = true, this.newadv = {
        title: "",
        icon: ""
      };
    },

    beforeUpload(file) {
      const isLt1M = file.size / 1024 / 1024 < 1;
      if (!isLt1M) {
        this.$message.error("图片大小不能超过 1MB!");
      }
      return isLt1M;
    },

    handleSuccess(res, file) {
      this.newadv.icon = __WEBPACK_IMPORTED_MODULE_1__api_qiniu___default.a.hosturl + res.data.base_url;
      this.imgSrc = __WEBPACK_IMPORTED_MODULE_1__api_qiniu___default.a.hosturl + res.data.base_url;
    },

    save() {
      if (this.newadv.logo == "" && this.nothree == true) {
        this.$message({
          message: "请上传分类logo",
          type: "error"
        });
      } else if (this.newadv.title == "") {
        this.$message({
          message: "请输入分类名称",
          type: "error"
        });
      } else {
        if (this.putorup == "put") {
          var allParams = {
            title: this.newadv.title,
            id: this.editId,
            href: this.imgSrc,
            description: this.newadv.desc
          };
        } else {
          var allParams = {
            title: this.newadv.title,
            href: this.imgSrc,
            description: this.newadv.desc,
            language: this.select
          };
        }
        console.log(allParams);

        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["dataTypePost"])(allParams).then(res => {
          if (res.msg === "ok") {
            this.$message({
              message: "提交成功",
              type: "success"
            });

            this.getalllist();
            // this.getlist();
            this.parent_type = true;
            this.addPar_type = false;
            this.dialogNewVisible = false;
          } else {
            this.$message({
              message: res.msg,
              type: "error"
            });
          }
        });
      }
    },

    handleEdit(index, row) {
      console.log(row);
      this.diatitle = "编辑分类";
      this.dialogNewVisible = true;
      this.putorup = "put";
      this.editId = row.id;
      this.imgSrc = row.image;
      this.newadv.icon = row.icon;
      this.newadv.title = row.title;
      this.newadv.desc = row.description;
      this.type_id = row.parent_id;
    },

    handleDelete(index, row) {
      this.dialogDelVisible = true;
      this.delId = row.id;
    },

    submitdel() {
      this.dialogDelVisible = false;
      var allParams = "?id=" + this.delId;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["typeDel"])(allParams).then(res => {
        if (res.msg === "ok") {
          this.$message({
            message: "删除成功",
            type: "success"
          });
          this.getalllist();
          this.getlist();
          this.parent_type = true;
          this.addPar_type = false;
          this.dialogDelVisible = false;
        } else {
          this.$message({
            message: res.msg,
            type: "error"
          });
        }
      });
    },

    handleCurrentChange(val) {
      this.currentPage = val;
      this.getalllist();
    },

    handleSizeChange(val) {
      this.limit = val;
      this.getalllist();
    }
  },

  mounted: function () {
    this.getlist();
    this.getalllist();
  }
});

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__api_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_element_ui__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_element_ui__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      currentPage: 1,
      list: [],
      count: 0,
      limit: 10,

      dialogDelVisible: false,
      language: [{ key: 1, value: "中文" }, { key: 2, value: "英文" }],
      select: 1,
      editId: "",
      delId: ""
    };
  },

  methods: {
    newone() {
      sessionStorage.removeItem("groupeditid");
      this.$router.push({ path: "/Good/Goodnew" });
    },
    ExcelSuccess(res, file, fileList) {
      this.newone.parameter = [];
      this.newone.parameter.push({
        uid: fileList[0].uid,
        url: this.host + res.data.base_url,
        name: res.data.file_name
      });
      // console.log(this.newone.parameter);
    },
    changeSort(id, val) {
      console.log(id);
      console.log(val);

      var allParams = {
        id: id,
        sort: val
      };

      // 发送到数据库里面去
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["setProductSort"])(allParams).then(res => {
        if (res.msg == "ok") {
          this.$message({
            message: "提交成功",
            type: "success"
          });
          // this.getlist();
          // this.$router.push({ path: "/Good/Goodlist" });
        } else {
          this.$message({
            message: res.msg,
            type: "error"
          });
        }
      });
    },

    getlist() {
      var allParams = "?page=" + this.currentPage + "&limit=" + this.limit + "&language=" + this.select;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["listGet"])(allParams).then(res => {
        console.log(res);
        this.list = res.data.data;
        this.count = res.data.count;
      });
    },

    getLag(index) {
      this.select = index;
      this.getlist();
    },
    // 排序确定功能
    // changesort(row) {
    //   if (row.sort == "") {
    //     this.$message({
    //       message: "请先输入排序值",
    //       type: "success"
    //     });
    //     return;
    //   }
    //   var allParams = "?id=" + row.id + "&sort=" + row.sort;
    //   groupSet(allParams).then(res => {
    //     if (res.msg == "ok") {
    //       this.$message({
    //         message: "修改成功",
    //         type: "success"
    //       });
    //       this.getlist();
    //     } else {
    //       this.$message({
    //         message: res.msg,
    //         type: "error"
    //       });
    //     }
    //   });
    // },

    // 是否热门推荐功能
    // handleHot(index, row) {
    //   if (row.hot == 0) {
    //     var allParams = "?id=" + row.id + "&hot=1";
    //   } else {
    //     var allParams = "?id=" + row.id + "&hot=0";
    //   }
    //   groupSet(allParams).then(res => {
    //     if (res.msg == "ok") {
    //       this.$message({
    //         message: "修改成功",
    //         type: "success"
    //       });
    //       this.getlist();
    //     } else {
    //       this.$message({
    //         message: res.msg,
    //         type: "error"
    //       });
    //     }
    //   });
    // },

    // 状态管理功能
    // handleState(index, row) {
    //   if (row.state == 0) {
    //     var allParams = "?id=" + row.id + "&state=1";
    //   } else {
    //     var allParams = "?id=" + row.id + "&state=0";
    //   }
    //   groupSet(allParams).then(res => {
    //     if (res.msg == "ok") {
    //       this.$message({
    //         message: "修改成功",
    //         type: "success"
    //       });
    //       this.getlist();
    //     } else {
    //       this.$message({
    //         message: res.msg,
    //         type: "error"
    //       });
    //     }
    //   });
    // },

    // 修改功能 保存id 跳转页面
    handleEdit(index, row) {
      sessionStorage.setItem("groupeditid", row.id);
      this.$router.push({ path: "/Good/Goodnew" });
    },

    // 删除功能 弹出删除框 获取ID
    handleDelete(index, row) {
      this.dialogDelVisible = true;
      this.delId = row.id;
      // console.log(this.delId);
    },

    // 删除确定按钮 删除记录
    submitdel() {
      this.dialogDelVisible = false;
      var allParams = "?id=" + this.delId;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["listDel"])(allParams).then(res => {
        if (res.msg === "ok") {
          this.$message({
            message: "删除成功",
            type: "success"
          });
          this.getlist();
          this.dialogDelVisible = false;
        } else {
          this.$message({
            message: res.msg,
            type: "error"
          });
        }
      });
    },

    handleCurrentChange(val) {
      this.currentPage = val;
      this.getlist();
    },

    handleSizeChange(val) {
      this.limit = val;
      this.getlist();
    }
  },

  mounted: function () {
    this.getlist();
  }
});

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__api_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_qiniu__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_qiniu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__api_qiniu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_element_ui__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_element_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_quill_dist_quill_core_css__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_quill_dist_quill_core_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_quill_dist_quill_core_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_quill_dist_quill_snow_css__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_quill_dist_quill_snow_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_quill_dist_quill_snow_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_quill_dist_quill_bubble_css__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_quill_dist_quill_bubble_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_quill_dist_quill_bubble_css__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



















/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      uptoken: {
        key: "image"
      },
      uptext: {
        key: "text"
      },
      upurl: __WEBPACK_IMPORTED_MODULE_1__api_qiniu___default.a.upurl,
      host: "http://111.230.135.20/",
      typeArr: [],
      parentArr: [],
      parent_id: "",
      language: [{ key: 1, value: "中文" }, { key: 2, value: "英文" }],
      newone: {
        title: "",
        sub_title: "",
        material: "",
        cover: "../static/images/default1.png",
        type_id: "",
        pictures: [],
        language: "",
        parameter: [],
        products: [],

        pro_id: []
      },
      areas: [],
      select: 1,
      category_cover: "../static/images/default1.png",
      images: "",
      categories: [],
      groupid: "",

      rules: {
        title: [{ required: true, message: "请输入产品标题", trigger: "blur" }],
        material: [{ required: true, message: "请输入产品的主要材料" }]
      },

      allParams: null
    };
  },

  methods: {
    // 获取语言分类
    getLag(index, value) {
      this.select = index;
    },
    // 获取分类的数据
    gettype() {
      var allParams = "?page=1&limit=999";
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["typeGet"])(allParams).then(res => {
        this.typeArr = res.data.data;
      });
    },

    // 获取二级分类
    getPid(index, value) {
      // console.log(index);
      // console.log(this.typeArr);
      var parent_id = this.parent_id;
      // console.log(this.parent_id);
      var allParams = "?page=1&&limit=999&&parent_id=" + parent_id;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["typeGet"])(allParams).then(res => {
        this.parentArr = res.data.data;
      });
    },
    getProduct() {
      var allParams = "?page=1&limit=10&language=" + this.select;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["listGet"])(allParams).then(res => {
        if (res.msg === "ok") {
          this.newone.products = [];
          for (let i = 0; i < res.data.data.length; i++) {
            this.newone.products.push({
              key: res.data.data[i].id,
              title: res.data.data[i].title
            });
          }
        }
      });
    },

    //  移除规格
    removeguige(item) {
      var index = this.categories.indexOf(item);
      if (index !== -1) {
        this.categories.splice(index, 1);
      }
    },
    // 新增规格详细
    adddetail(e) {
      this.categories[e].details.push({
        title: ""
      });
    },
    // 新增规格表
    addguige() {
      this.categories.push({
        title: "",
        details: [{
          title: ""
        }]
      });
    },
    addarea() {
      this.areas.push({
        title: "",
        icon: "../static/images/default1.png",
        type: 1,
        detail: ""
      });
    },
    // 图片上传

    ExcelSuccess(res, file, fileList) {
      this.newone.parameter = [];
      this.newone.parameter.push({
        uid: fileList[0].uid,
        url: this.host + res.data.base_url,
        name: res.data.file_name
      });
      // console.log(this.newone.parameter);
    },
    HomeSuccess(res, file, fileList, index) {
      this.areas[index].icon = "";
      this.areas[index].icon = this.host + res.data.base_url;
    },
    guigeSuccess(res, file) {
      this.category_cover = "";

      this.category_cover = this.host + res.data.base_url;
    },
    handleSuccess(res, file) {
      this.newone.cover = "";
      this.newone.cover = this.host + res.data.base_url;
    },

    handleRemove(file, fileList) {
      console.log(file);
      console.log(fileList);
      // fileList.remor
      this.newone.pictures = [];
      for (var i = 0; i < fileList.length; i++) {
        this.newone.pictures.push(fileList[i]);
        //   // if(fileList[i].response.key !== 1){
        //   //   this.newone.pictures.push(qiniu.hosturl+ fileList[i].response.key)
        //   // }else {

        //   // }
      }
    },
    handlelistSuccess(res, file, fileList) {
      // this.newone.pictures.push({url:response.message})
      this.newone.pictures.push({
        uid: fileList.uid,
        url: this.host + res.data.base_url
      });
      // console.log(this.newone.pictures);
    },

    // 上传信息

    save() {
      var image = [];
      // 处理image
      for (var i = 0; i < this.newone.pictures.length; i++) {
        console.log(this.newone.pictures[i].url);
        image.push(this.newone.pictures[i].url);
      }
      var parameter = this.newone.parameter[0] ? this.newone.parameter[0].url : "";

      var allParams = {
        id: this.groupid,
        language: this.select,
        title: this.newone.title,
        sub_title: this.newone.sub_title,
        type_id: this.newone.type_id,
        cover: this.newone.cover,
        material: this.newone.material,
        categories: this.categories,
        category_cover: this.category_cover,
        areas: this.areas,
        parameter: parameter,
        pictures: image,
        similar: this.newone.pro_id
      };
      // console.log(allParams)

      // 发送到数据库里面去
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["upload"])(allParams).then(res => {
        if (res.msg == "ok") {
          this.$message({
            message: "提交成功",
            type: "success"
          });
          this.$router.push({ path: "/Good/Goodlist" });
        } else {
          this.$message({
            message: res.msg,
            type: "error"
          });
        }
      });
    },

    // 检查商品ID
    checkid() {
      var groupid = sessionStorage.getItem("groupeditid");
      this.groupid = groupid;

      if (groupid) {
        var allParams = "?id=" + groupid;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["oneGet"])(allParams).then(res => {
          // console.log(res.data.categories)
          this.newone.title = res.data.title;
          this.newone.sub_title = res.data.sub_title;
          this.newone.cover = res.data.cover;
          this.select = res.data.language;
          this.newone.type_id = res.data.type_id;
          this.newone.material = res.data.material;
          this.newone.parameter = res.data.parameter;
          this.category_cover = res.data.category_cover;
          this.categories = res.data.categories;
          this.parent_id = res.data.parent_id;
          this.newone.pro_id = res.data.similar_id;
          // console.log(res.data.areas);
          // 处理区域
          var area = [];
          for (var i = 0; i < res.data.areas.length; i++) {
            area.push({
              title: res.data.areas[i].title,
              icon: res.data.areas[i].icon,
              type: res.data.areas[i].type,
              detail: ""
            });
            console.log(res.data.areas[i]);
          }
          this.areas = area;
          console.log(this.newone.areas);

          // 处理图片
          var image = [];
          for (var i = 0; i < res.data.pictures.length; i++) {
            image.push({
              uid: res.data.pictures[i].id,
              url: res.data.pictures[i].href
            });
          }
          for (var i = 0; i < image.length; i++) {
            this.newone.pictures.push({
              uid: 1,
              url: image[i].url
            });
          }
          // EX处理
          var excal = [];
          excal.push({
            name: res.data.parameter,
            url: res.data.parameter
          });
          this.newone.parameter = excal;
          this.getPid();
        });
      }
    },

    golist() {
      this.$router.push({ path: "/Good/Goodlist" });
    }
  },
  mounted: function () {
    this.gettype();
    this.checkid();
    this.getProduct();
  }
});

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__api_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_qiniu__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_qiniu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__api_qiniu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_element_ui__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_element_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_quill_dist_quill_core_css__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_quill_dist_quill_core_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_quill_dist_quill_core_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_quill_dist_quill_snow_css__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_quill_dist_quill_snow_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_quill_dist_quill_snow_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_quill_dist_quill_bubble_css__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_quill_dist_quill_bubble_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_quill_dist_quill_bubble_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_quill_editor__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_quill_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_vue_quill_editor__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//












 //调用编辑器

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      loading: false,
      uptoken: {
        token: __WEBPACK_IMPORTED_MODULE_1__api_qiniu___default.a.token
      },
      language: [{ key: 1, value: "中文" }, { key: 2, value: "英文" }],
      select: "",
      upurl: __WEBPACK_IMPORTED_MODULE_1__api_qiniu___default.a.upurl,

      currentPage: 1,
      list: [],
      count: 0,
      limit: 10,
      dialogNewVisible: false,
      dialogDelVisible: false,
      parent_type: true,
      addPar_type: false,
      putorup: "up",
      imgSrc: "../static/images/default.png",
      newadv: {
        title: "",
        icon: "",
        desc: ""
      },

      typeArr: [],
      type_id: "",

      diatitle: "新增分类",

      editId: "",
      delId: "",

      editorOption: {
        placeholder: "请输入详细内容（添加图片请点击上方第一个按钮）",
        theme: "snow",
        modules: {
          toolbar: {
            container: [["image"], ["bold", "italic", "underline", "strike", "blockquote", "code-block"], [{ direction: "rtl" }], [{ size: ["small", false, "large", "huge"] }], [{ header: [1, 2, 3, 4, 5, 6, false] }], [{ color: [] }, { background: [] }], [{ font: [] }], [{ align: [] }]
            // ['clean']
            ],
            handlers: {
              image: function (value) {
                if (value) {
                  document.querySelector(".quill-img input").click();
                } else {
                  this.quill.format("image", false);
                }
              }
            }
          }
        }
      }
    };
  },
  components: {
    quillEditor: __WEBPACK_IMPORTED_MODULE_6_vue_quill_editor__["quillEditor"]
  },

  methods: {
    changeSort(id, val) {
      console.log(id);
      console.log(val);

      var allParams = {
        id: id,
        sort: val
      };
      console.log(allParams);

      // 发送到数据库里面去
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["setTypeSort"])(allParams).then(res => {
        if (res.msg == "ok") {
          this.$message({
            message: "提交成功",
            type: "success"
          });
          // this.getlist();
          // this.$router.push({ path: "/Good/Goodlist" });
        } else {
          this.$message({
            message: res.msg,
            type: "error"
          });
        }
      });
    },
    quillImgSuccess(res, file) {
      console.log(res);
      let quill = this.$refs.myQuillEditor.quill;
      if (res.key) {
        let length = quill.getSelection().index;
        quill.insertEmbed(length, "image", __WEBPACK_IMPORTED_MODULE_1__api_qiniu___default.a.showurl + res.key);
        quill.setSelection(length + 1);
      } else {
        this.$message.error("图片插入失败");
      }
    },
    // 显示添加上级分类
    Showtext() {
      this.parent_type = false;
      this.addPar_type = true;
    },

    getLag(index) {
      this.select = index;
    },
    getlist() {
      var allParams = "?page=" + this.currentPage + "&limit=" + this.limit;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["typeGet"])(allParams).then(res => {
        this.typeArr = res.data.data;
      });
    },
    getalllist() {
      var allParams = "?page=" + this.currentPage + "&limit=" + this.limit;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["typeAllGet"])(allParams).then(res => {
        this.list = res.data.data;
        this.count = res.data.count;
      });
    },

    newone() {
      this.putorup = "up";
      this.imgSrc = "../static/images/default1.png";
      this.diatitle = "新增分类", this.dialogNewVisible = true, this.newadv = {
        title: "",
        icon: ""
      };
    },

    beforeUpload(file) {
      const isLt1M = file.size / 1024 / 1024 < 1;
      if (!isLt1M) {
        this.$message.error("图片大小不能超过 1MB!");
      }
      return isLt1M;
    },

    handleSuccess(res, file) {
      this.newadv.icon = __WEBPACK_IMPORTED_MODULE_1__api_qiniu___default.a.hosturl + res.data.base_url;
      this.imgSrc = __WEBPACK_IMPORTED_MODULE_1__api_qiniu___default.a.hosturl + res.data.base_url;
    },

    save() {
      if (this.newadv.logo == "" && this.nothree == true) {
        this.$message({
          message: "请上传分类logo",
          type: "error"
        });
      } else if (this.newadv.title == "") {
        this.$message({
          message: "请输入分类名称",
          type: "error"
        });
      } else {
        if (this.putorup == "put") {
          var allParams = {
            title: this.newadv.title,
            id: this.editId,
            icon: this.imgSrc,
            description: this.newadv.desc,
            parent_id: this.type_id
          };
        } else {
          var allParams = {
            title: this.newadv.title,
            icon: this.imgSrc,
            description: this.newadv.desc,
            parent_id: this.type_id,
            language: this.select
          };
        }
        console.log(allParams);

        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["typePost"])(allParams).then(res => {
          if (res.msg === "ok") {
            this.$message({
              message: "提交成功",
              type: "success"
            });

            this.getalllist();
            this.getlist();
            this.parent_type = true;
            this.addPar_type = false;
            this.dialogNewVisible = false;
          } else {
            this.$message({
              message: res.msg,
              type: "error"
            });
          }
        });
      }
    },

    handleEdit(index, row) {
      console.log(row);
      this.diatitle = "编辑分类";
      this.dialogNewVisible = true;
      this.putorup = "put";
      this.editId = row.id;
      this.imgSrc = row.image;
      this.newadv.icon = row.icon;
      this.newadv.title = row.title;
      this.newadv.desc = row.description;
      this.type_id = row.parent_id;
    },

    handleDelete(index, row) {
      this.dialogDelVisible = true;
      this.delId = row.id;
    },

    submitdel() {
      this.dialogDelVisible = false;
      var allParams = "?id=" + this.delId;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["typeDel"])(allParams).then(res => {
        if (res.msg === "ok") {
          this.$message({
            message: "删除成功",
            type: "success"
          });
          this.getalllist();
          this.getlist();
          this.parent_type = true;
          this.addPar_type = false;
          this.dialogDelVisible = false;
        } else {
          this.$message({
            message: res.msg,
            type: "error"
          });
        }
      });
    },

    handleCurrentChange(val) {
      this.currentPage = val;
      this.getalllist();
    },

    handleSizeChange(val) {
      this.limit = val;
      this.getalllist();
    }
  },

  mounted: function () {
    this.getlist();
    this.getalllist();
  }
});

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__api_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(5);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





__WEBPACK_IMPORTED_MODULE_1_vue__["default"].directive("per", function (el, binding) {
  // let permissions = window.sessionStorage.getItem('permissions')
  // if(permissions.indexOf(binding.value)<0){
  //   el.style="display:none"
  // }
});

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "home",
  data() {
    return {
      collapsed: false,
      fullscreen: false,
      fstext: "全屏",
      username: ""
    };
  },

  methods: {
    quanping() {
      let element = document.documentElement;
      if (this.fullscreen) {
        this.fstext = "全屏";
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        this.fstext = "退出全屏";
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          element.msRequestFullscreen();
        }
      }
      this.fullscreen = !this.fullscreen;
    },

    collapse: function () {
      this.collapsed = !this.collapsed;
    },

    showMenu(i, status) {
      this.$refs.menuCollapsed.getElementsByClassName("submenu-hook-" + i)[0].style.display = status ? "block" : "none";
    },

    logout() {
      var _this = this;
      this.$confirm("确认退出吗?", "提示", {
        type: "warning",
        center: true,
        // showCancelButton:false,
        cancelButtonClass: "cancelButton"
      }).then(() => {
        var allParams = "";
        // requestLogout(allParams).then((res) => {
        //   sessionStorage.removeItem('permissions');
        //   sessionStorage.removeItem('username');
        // });
        _this.$router.push("/login");
      }).catch(() => {});
    }
  },
  mounted() {
    var name = sessionStorage.getItem("username");
    var arr = name.split('"');
    this.username = arr[1];
  }
});

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__api_api__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {

      newadmin: {
        title: '',
        remark: '',
        price: ''
      },

      rules: {
        title: [{ required: true, trigger: 'blur', message: '请输入预约项目' }],
        remark: [{ required: true, trigger: 'blur', message: '请输入预约内容' }],
        price: [{ required: true, trigger: 'blur', message: '请输入预付金额' }]
      }

    };
  },

  methods: {

    newone() {
      this.newadmin = {
        title: '',
        remark: '',
        price: ''
      };
    },

    save() {
      this.$refs.newadmin.validate(valid => {
        if (valid) {
          console.log(this.newadmin);
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["tuisongPost"])(this.newadmin).then(res => {
            if (res.msg === "ok") {
              this.$message({
                message: '发送成功',
                type: 'success'
              });

              this.newadmin = {
                title: '',
                remark: '',
                price: ''
              };
            } else {
              this.$message({
                message: res.msg,
                type: 'error'
              });
            }
          });
        } else {
          return false;
        }
      });
    }

  },

  mounted: function () {}
});

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_qiniu__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_qiniu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__api_qiniu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__api_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_quill_dist_quill_core_css__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_quill_dist_quill_core_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_quill_dist_quill_core_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_quill_dist_quill_snow_css__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_quill_dist_quill_snow_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_quill_dist_quill_snow_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_quill_dist_quill_bubble_css__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_quill_dist_quill_bubble_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_quill_dist_quill_bubble_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_quill_editor__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_quill_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vue_quill_editor__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




// import {documentGet} from '../../api/api';







 //调用编辑器

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      uptoken: {
        token: __WEBPACK_IMPORTED_MODULE_0__api_qiniu___default.a.token
      },
      upurl: __WEBPACK_IMPORTED_MODULE_0__api_qiniu___default.a.upurl,

      host: "http://111.230.135.20/",

      checkper1: false,
      checkper2: false,

      currentPage: 1,
      list: [],
      count: 0,
      limit: 10,
      dialogNewVisible: false,
      dialogDelVisible: false,
      dialogSeeVisible: false,
      editId: "",
      delId: "",
      diatitle: "新增文档",
      nedoc: {
        title: "",
        detail: ""
      },
      cover: "../../../static/images/default.png",
      language: [{ key: 1, value: "中文" }, { key: 2, value: "英文" }],
      select: 1,
      rules: {
        title: [{ required: true, trigger: "blur", message: "请输入文档标题" }],
        detail: [{ required: true, trigger: "blur", message: "请输入详细内容" }]
      },
      currow: "",

      editorOption: {
        placeholder: "请输入详细内容（添加图片请点击上方第一个按钮）",
        theme: "snow",
        modules: {
          toolbar: {
            container: [["image"], ["bold", "italic", "underline", "strike", "blockquote", "code-block"], [{ direction: "rtl" }], [{ size: ["small", false, "large", "huge"] }], [{ header: [1, 2, 3, 4, 5, 6, false] }], [{ color: [] }, { background: [] }], [{ font: [] }], [{ align: [] }]
            // ['clean']
            ],
            handlers: {
              image: function (value) {
                if (value) {
                  document.querySelector(".quill-img input").click();
                } else {
                  this.quill.format("image", false);
                }
              }
            }
          }
        }
      }
    };
  },

  components: {
    quillEditor: __WEBPACK_IMPORTED_MODULE_5_vue_quill_editor__["quillEditor"]
  },

  methods: {
    handleSuccess(res, file) {
      this.cover = "";
      this.cover = this.host + res.data.base_url;
    },

    listLay(value) {
      this.select = value;
      this.getlist();
    },
    getLag(value) {
      this.select = value;
    },
    quillImgSuccess(res, file) {
      console.log(res);
      let quill = this.$refs.myQuillEditor.quill;
      if (res.data.base_url) {
        let length = quill.getSelection().index;
        quill.insertEmbed(length, "image", __WEBPACK_IMPORTED_MODULE_0__api_qiniu___default.a.hosturl + res.data.base_url);
        quill.setSelection(length + 1);
      } else {
        this.$message.error("图片插入失败");
      }
    },
    getlist() {
      var allParams = "?page=" + this.currentPage + "&limit=" + this.limit + "&language=" + this.select;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_api__["momentsGet"])(allParams).then(res => {
        this.list = res.data.data;
        this.count = res.data.count;
      });
    },

    checkPer() {
      var per = sessionStorage.getItem("permissions");

      if (per.indexOf("documentAdd") > -1) {
        this.checkper1 = true;
      }

      var per = sessionStorage.getItem("permissions");

      if (per.indexOf("documentDel") > -1) {
        this.checkper2 = true;
      }
    },

    newone() {
      this.nedoc.cover = "../../../static/images/default.png";
      this.putorup = "up";
      this.diatitle = "新增文档", this.dialogNewVisible = true, this.nedoc = {
        title: "",
        detail: ""
      };
    },

    opendialog() {
      setTimeout(() => {
        this.setdetail();
      }, 100);
    },

    setdetail() {
      var seeBox = document.getElementById("detail");
      seeBox.innerHTML = this.currow.detail;
    },

    handleEdit(index, row) {
      this.diatitle = "编辑文档";
      this.dialogNewVisible = true;
      this.putorup = "put";
      this.editId = row.id;
      this.nedoc = {
        title: row.title,
        detail: row.detail,
        language: row.language
      };
      this.cover = row.cover;
    },

    save() {
      if (this.nedoc.title == "") {
        this.$message({
          message: "请输入标题",
          type: "error"
        });
      } else if (this.nedoc.detail == "") {
        this.$message({
          message: "请输入详细内容",
          type: "error"
        });
      } else {
        // this.$refs.nedoc.validate((valid) => {
        //   if (valid) {
        if (this.putorup == "put") {
          var allParams = {
            title: this.nedoc.title,
            id: this.editId,
            detail: this.nedoc.detail,
            cover: this.cover,
            language: this.select
          };
        } else {
          var allParams = {
            title: this.nedoc.title,
            detail: this.nedoc.detail,
            cover: this.cover,
            language: this.select
          };
        }
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_api__["momentPost"])(allParams).then(res => {
          if (res.msg === "ok") {
            this.$message({
              message: "提交成功",
              type: "success"
            });
            this.getlist();
            this.dialogNewVisible = false;
          } else {
            this.$message({
              message: res.msg,
              type: "error"
            });
          }
        });
        //   }else{
        //     return false;
        //   }
        // })
      }
    },

    handleDelete(index, row) {
      this.dialogDelVisible = true;
      this.delId = row.id;
    },

    submitdel() {
      this.dialogDelVisible = false;
      var allParams = "?id=" + this.delId;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_api__["momentDel"])(allParams).then(res => {
        // console.log(res)
        if (res.msg === "ok") {
          this.$message({
            message: "删除成功",
            type: "success"
          });
          this.getlist();
          this.dialogDelVisible = false;
        } else {
          this.$message({
            message: res.msg,
            type: "error"
          });
        }
      });
    },

    handleCurrentChange(val) {
      this.currentPage = val;
      this.getlist();
    },

    handleSizeChange(val) {
      this.limit = val;
      this.getlist();
    }
  },

  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
  },

  mounted: function () {
    this.getlist();
    // this.checkPer();
  }
});

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__api_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_element_ui__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_element_ui__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//












/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      base: __WEBPACK_IMPORTED_MODULE_0__api_api___default.a + '/import/orders',
      header: {
        'Content-Type': 'multipart/form-data'
      },
      importfile: [],

      orderexcel: '',

      list: [],
      currentPage: 1,
      count: 0,
      limit: 20,

      filter: {
        start: '',
        end: '',
        state: ''
      },

      filter1: {
        date: ''
      },

      orderdetail: [{
        address: {}
      }],
      dialogSeeVisible: false,
      dialogunTuiVisible: false,

      dialogSendVisible: false,

      expressarr: [],

      kuaidi: {
        express_id: '',
        express_number: ''
      },

      sendrule: {
        express_number: [{ required: true, message: '请输入快递单号', trigger: 'blur' }]
      }

    };
  },

  methods: {
    uploadFileMethod(param) {
      console.log(param);
      console.log(param.file);
      var allParams = {
        file: param.file
      };
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["tablePost"])(allParams).then(res => {
        console.log(res);
        // this.$message({
        //   message: '提交成功',
        //   type: 'success'
        // });
      });
    },

    submitUpload() {
      this.$refs.upload.submit();
    },

    beforeupload(file) {
      console.log(file);
    },

    handleSuccess(res, file) {
      console.log(res, file);
    },

    handleRemove(file, fileList) {
      this.importfile = [];
      for (var i = 0; i < fileList.length; i++) {
        this.importfile.push(res.data.url);
      }
    },

    handleExceed(files, fileList) {
      console.log(fileList);
      this.$message.warning(`只能上传 1 个文件`);
    },

    handleError(err, file, fileLis) {
      console.log(err, file, fileLis);
      // Message({
      //   message: "请上传Excel表格",
      //   type: 'error'
      // });
    },

    confirm() {
      //  if(this.importfile.length==0){
      //   Message({
      //     message: "请选择文件",
      //     type: 'error'
      //   });
      // }else{
      //   var allParams={
      //     app_id:this.wechatset.app_id,
      //   }
      //   console.log(allParams)
      //   tablePost(allParams).then((res) => {
      //     console.log(res)
      //     if (res.msg === "ok") {
      //      this.$message({
      //       message: '提交成功',
      //       type: 'success'
      //     });
      //      this.importfile=[]
      //      this.getlist()
      //    } else {
      //      this.$message({
      //       message: res.msg,
      //       type: 'error'
      //     });
      //    }
      //  });
      // }
    },

    getexpress() {
      var allParams = '?page=1&limit=99999';
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["deliveryGet"])(allParams).then(res => {
        this.expressarr = res.data.data;
      });
    },

    xzkauidi(val) {
      this.kuaidi.express = val;
    },

    handleSend(row) {
      this.kuaidi = {
        id: row.id,
        express_id: '',
        express_number: ''
      };
      this.dialogSendVisible = true;
    },

    submitsend() {
      var that = this;
      that.$refs.kuaidi.validate(valid => {
        if (valid) {
          var allParams = that.kuaidi;
          // console.log(allParams)
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["shipgoods"])(allParams).then(res => {
            // console.log(res)
            this.getlist();
            this.$message({
              message: '提交成功',
              type: 'success'
            });
            this.dialogSendVisible = false;
          });
        } else {
          return false;
        }
      });
    },

    handleSee(row) {
      this.orderdetail = [row];
      console.log(this.orderdetail);
      this.dialogSeeVisible = true;
    },

    getlist() {
      var allParams = '?page=' + this.currentPage + '&limit=' + this.limit + '&state=' + this.filter.state;
      // +'&start=' + this.filter.start+'&end=' + this.filter.end
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["allorderGet"])(allParams).then(res => {
        this.list = res.data.data;
        this.count = res.data.count;

        this.orderexcel = __WEBPACK_IMPORTED_MODULE_0__api_api___default.a + '/export/orders' + '?page=' + this.currentPage + '&limit=' + this.limit + '&state=' + this.filter.state;
      });
    },

    getSTime(val) {
      this.filter.start = val[0];
      this.filter.end = val[1];
    },

    clear() {
      this.city_id = '';
      this.cityone = '';
      this.filter = {
        start: '',
        end: ''
      };
      this.filter1 = {
        date: ''
      };
      this.getlist();
    },

    handleCurrentChange(val) {
      this.currentPage = val;
      this.getlist();
    },

    handleSizeChange(val) {
      this.limit = val;
      this.getlist();
    },

    handleTui(row) {
      this.tuiid = row.id;
      this.dialogunTuiVisible = true;
    },

    confirmTuid() {
      var allParams = '?order_id=' + this.tuiid;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["allorderTui"])(allParams).then(res => {
        if (res.msg === "ok") {
          this.$message({
            message: '退款成功',
            type: 'success'
          });
          this.dialogunTuiVisible = false;
        } else {
          this.$message({
            message: res.msg,
            type: 'error'
          });
        }
      });
    }

  },

  mounted: function () {
    this.getlist();
    this.getexpress();
  }
});

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__api_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_element_ui__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_element_ui__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      currentPage: 1,
      list: [],
      count: 0,
      limit: 10,

      dialogDelVisible: false,
      language: [{ key: 1, value: "中文" }, { key: 2, value: "英文" }],
      select: 1,
      editId: "",
      delId: ""
    };
  },

  methods: {
    newone() {
      sessionStorage.removeItem("groupeditid");
      this.$router.push({ path: "/Project/Projectnew" });
    },
    changeSort(id, val) {
      console.log(id);
      console.log(val);

      var allParams = {
        id: id,
        sort: val
      };

      // 发送到数据库里面去
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["setProjectSort"])(allParams).then(res => {
        if (res.msg == "ok") {
          this.$message({
            message: "提交成功",
            type: "success"
          });
          // this.getlist();
          // this.$router.push({ path: "/Good/Goodlist" });
        } else {
          this.$message({
            message: res.msg,
            type: "error"
          });
        }
      });
    },
    getlist() {
      var allParams = "?page=" + this.currentPage + "&limit=" + this.limit + "&language=" + this.select;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["prolistGet"])(allParams).then(res => {
        console.log(res);
        this.list = res.data.data;
        this.count = res.data.count;
      });
    },

    getLag(index) {
      this.select = index;
      this.getlist();
    },

    // 修改功能 保存id 跳转页面
    handleEdit(index, row) {
      sessionStorage.setItem("groupeditid", row.id);
      this.$router.push({ path: "/Project/Projectnew" });
    },

    // 删除功能 弹出删除框 获取ID
    handleDelete(index, row) {
      this.dialogDelVisible = true;
      this.delId = row.id;
      // console.log(this.delId);
    },

    // 删除确定按钮 删除记录
    submitdel() {
      this.dialogDelVisible = false;
      var allParams = "?id=" + this.delId;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["proDel"])(allParams).then(res => {
        if (res.msg === "ok") {
          this.$message({
            message: "删除成功",
            type: "success"
          });
          this.getlist();
          this.dialogDelVisible = false;
        } else {
          this.$message({
            message: res.msg,
            type: "error"
          });
        }
      });
    },

    handleCurrentChange(val) {
      this.currentPage = val;
      this.getlist();
    },

    handleSizeChange(val) {
      this.limit = val;
      this.getlist();
    }
  },

  mounted: function () {
    this.getlist();
  }
});

// 排序确定功能
// changesort(row) {
//   if (row.sort == "") {
//     this.$message({
//       message: "请先输入排序值",
//       type: "success"
//     });
//     return;
//   }
//   var allParams = "?id=" + row.id + "&sort=" + row.sort;
//   groupSet(allParams).then(res => {
//     if (res.msg == "ok") {
//       this.$message({
//         message: "修改成功",
//         type: "success"
//       });
//       this.getlist();
//     } else {
//       this.$message({
//         message: res.msg,
//         type: "error"
//       });
//     }
//   });
// },

// 是否热门推荐功能
// handleHot(index, row) {
//   if (row.hot == 0) {
//     var allParams = "?id=" + row.id + "&hot=1";
//   } else {
//     var allParams = "?id=" + row.id + "&hot=0";
//   }
//   groupSet(allParams).then(res => {
//     if (res.msg == "ok") {
//       this.$message({
//         message: "修改成功",
//         type: "success"
//       });
//       this.getlist();
//     } else {
//       this.$message({
//         message: res.msg,
//         type: "error"
//       });
//     }
//   });
// },

// 状态管理功能
// handleState(index, row) {
//   if (row.state == 0) {
//     var allParams = "?id=" + row.id + "&state=1";
//   } else {
//     var allParams = "?id=" + row.id + "&state=0";
//   }
//   groupSet(allParams).then(res => {
//     if (res.msg == "ok") {
//       this.$message({
//         message: "修改成功",
//         type: "success"
//       });
//       this.getlist();
//     } else {
//       this.$message({
//         message: res.msg,
//         type: "error"
//       });
//     }
//   });
// },

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_qiniu__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_qiniu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__api_qiniu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_element_ui__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_element_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__api_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_quill_editor__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_quill_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue_quill_editor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_quill_dist_quill_core_css__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_quill_dist_quill_core_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_quill_dist_quill_core_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_quill_dist_quill_snow_css__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_quill_dist_quill_snow_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_quill_dist_quill_snow_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_quill_dist_quill_bubble_css__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_quill_dist_quill_bubble_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_quill_dist_quill_bubble_css__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





// 添加接口


// 获取产品接口


// 获取单项目接口

 //调用编辑器





/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      uptoken: {
        key: "image"
      },
      uptext: {
        key: "text"
      },
      upurl: __WEBPACK_IMPORTED_MODULE_0__api_qiniu___default.a.upurl,
      host: "http://111.230.135.20/",

      language: [{ key: 1, value: "中文" }, { key: 2, value: "英文" }],
      newone: {
        title: "",
        cover: "../static/images/default1.png",
        language: "",
        detail: "",
        products: [],
        pro_id: []
      },

      areas: [{
        title: "",
        icon: "../static/images/default1.png",

        type: 1,
        detail: ""
      }, {
        title: "",
        icon: "../static/images/default1.png",
        type: 2,
        detail: ""
      }],
      select: 1,
      groupid: "",
      rules: {
        title: [{ required: true, message: "请输入产品标题", trigger: "blur" }],
        material: [{ required: true, message: "请输入产品的主要材料" }]
      },

      editorOption: {
        placeholder: "请输入详细内容（添加图片请点击上方第一个按钮）",
        theme: "snow",
        modules: {
          toolbar: {
            container: [["image"], ["bold", "italic", "underline", "strike", "blockquote", "code-block"], [{ direction: "rtl" }], [{ size: ["small", false, "large", "huge"] }], [{ header: [1, 2, 3, 4, 5, 6, false] }], [{ color: [] }, { background: [] }], [{ font: [] }], [{ align: [] }]
            // ['clean']
            ],
            handlers: {
              image: function (value) {
                if (value) {
                  document.querySelector(".quill-img input").click();
                } else {
                  this.quill.format("image", false);
                }
              }
            }
          }
        }
      },

      allParams: null
    };
  },

  methods: {
    change() {
      console.log(this.newone.pro_id);
    },
    // 获取语言分类
    getLag(index, value) {
      this.select = index;
    },

    // 获取产品信息
    getProduct() {
      var allParams = "?page=1&limit=10&language=" + this.select;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api_api__["listGet"])(allParams).then(res => {
        if (res.msg === "ok") {
          this.newone.products = [];
          for (let i = 0; i < res.data.data.length; i++) {
            this.newone.products.push({
              key: res.data.data[i].id,
              title: res.data.data[i].title
            });
          }
        }
      });
    },
    quillImgSuccess(res, file) {
      console.log(res);
      let quill = this.$refs.myQuillEditor.quill;
      if (res.data.base_url) {
        let length = quill.getSelection().index;
        quill.insertEmbed(length, "image", __WEBPACK_IMPORTED_MODULE_0__api_qiniu___default.a.hosturl + res.data.base_url);
        quill.setSelection(length + 1);
      } else {
        this.$message.error("图片插入失败");
      }
    },

    // 复选框选中时获取id

    // 图片上传

    handleSuccess(res, file) {
      this.newone.cover = this.host + res.data.base_url;
    },

    // 上传信息

    save() {
      var allParams = {
        title: this.newone.title,
        detail: this.newone.detail,
        id: this.groupid,
        language: this.select,
        cover: this.newone.cover,
        products: this.newone.pro_id
      };
      console.log(allParams);
      // 发送到数据库里面去
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api_api__["proAdd"])(allParams).then(res => {
        if (res.msg == "ok") {
          this.$message({
            message: "提交成功",
            type: "success"
          });
          this.$router.push({ path: "/Project/Projectlist" });
        } else {
          this.$message({
            message: res.msg,
            type: "error"
          });
        }
      });
    },

    // 检查商品ID
    checkid() {
      var groupid = sessionStorage.getItem("groupeditid");
      this.groupid = groupid;

      if (groupid) {
        var allParams = "?id=" + groupid;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api_api__["proGet"])(allParams).then(res => {
          console.log(res);
          this.select = res.data.language;
          this.newone.title = res.data.title;
          this.newone.detail = res.data.detail;
          this.newone.cover = res.data.cover;
          for (var i = 0; i < res.data.products.length; i++) {
            this.newone.pro_id.push(res.data.products[i].product_id);
          }
        });
      }
    },

    golist() {
      this.$router.push({ path: "/Product/Productlsit" });
    }
  },
  mounted() {
    this.getProduct();
    this.checkid();
  },
  components: {
    quillEditor: __WEBPACK_IMPORTED_MODULE_3_vue_quill_editor__["quillEditor"]
  }
});

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_qiniu__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_qiniu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__api_qiniu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__api_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_element_ui__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_element_ui__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    var checkvalue = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("此项不能为空"));
      }
      setTimeout(() => {
        if (Math.sign(value) == 1) {
          if (value % 1 === 0) {
            callback();
          } else {
            callback();
          }
        } else if (Math.sign(value) == 0) {
          callback(new Error("不能为0"));
        } else if (Math.sign(value) == -1) {
          callback(new Error("请输入正数"));
        } else {
          callback(new Error("请输入数字"));
        }
      }, 100);
    };

    return {
      activeName: "hongbao",

      uptoken: {
        token: __WEBPACK_IMPORTED_MODULE_0__api_qiniu___default.a.token
      },
      upurl: __WEBPACK_IMPORTED_MODULE_0__api_qiniu___default.a.upurl,

      loginbg: "../static/images/default2.png",
      brokerage_type: "1",

      sharebg: "../static/images/default2.png",

      sharepic: "../static/images/default.png",
      sharetitle: "",
      email: "",
      phone: "",
      buy: "",
      eng_buy: "",
      bussiness: "",
      media: "",
      wechat_title: "",
      wechat_bg: "",
      ins_title: "",
      ins_bg: "",
      weibo_title: "",
      weibo_bg: "",
      all_bg: "",
      test_bg: "",
      new_bg: "",
      all_content: "",
      all_title: "",
      switch: 0
    };
  },

  methods: {
    schange(val) {
      console.log(val);
      var allParams = {
        brokerage_type: this.brokerage_type
      };
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_api__["baseset"])(allParams).then(res => {
        if (res.msg === "ok") {
          this.getconfig();
          this.$message({
            message: "修改成功",
            type: "success"
          });
        } else {
          this.$message({
            message: res.msg,
            type: "error"
          });
        }
      });
    },

    bgSuccess(res, file) {
      this.loginbg = __WEBPACK_IMPORTED_MODULE_0__api_qiniu___default.a.showurl + res.key;
    },

    savebg() {
      var allParams = {
        wechat_title: this.wechat_title,
        wechat_bg: this.wechat_bg
      };
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_api__["baseset"])(allParams).then(res => {
        if (res.msg === "ok") {
          this.getconfig();
          this.$message({
            message: "提交成功",
            type: "success"
          });
        } else {
          this.$message({
            message: res.msg,
            type: "error"
          });
        }
      });
    },

    shareSuccess(res, file) {
      this.sharebg = __WEBPACK_IMPORTED_MODULE_0__api_qiniu___default.a.showurl + res.key;
    },

    saveshare() {
      var allParams = {
        ins_bg: this.ins_bg,
        ins_title: this.ins_title
      };
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_api__["baseset"])(allParams).then(res => {
        if (res.msg === "ok") {
          this.getconfig();
          this.$message({
            message: "提交成功",
            type: "success"
          });
        } else {
          this.$message({
            message: res.msg,
            type: "error"
          });
        }
      });
    },

    linkSuccess(res, file) {
      this.sharepic = __WEBPACK_IMPORTED_MODULE_0__api_qiniu___default.a.hosturl + res.data.base_url;
    },
    linkSuccess1(res, file) {
      this.wechat_bg = __WEBPACK_IMPORTED_MODULE_0__api_qiniu___default.a.hosturl + res.data.base_url;
    },
    linkSuccess2(res, file) {
      this.ins_bg = __WEBPACK_IMPORTED_MODULE_0__api_qiniu___default.a.hosturl + res.data.base_url;
    },
    linkSuccess4(res, file) {
      this.all_bg = __WEBPACK_IMPORTED_MODULE_0__api_qiniu___default.a.hosturl + res.data.base_url;
    },
    linkSuccess5(res, file) {
      this.test_bg = __WEBPACK_IMPORTED_MODULE_0__api_qiniu___default.a.hosturl + res.data.base_url;
    },
    linkSuccess6(res, file) {
      this.new_bg = __WEBPACK_IMPORTED_MODULE_0__api_qiniu___default.a.hosturl + res.data.base_url;
    },
    linkSuccess3(res, file) {
      this.weibo_bg = __WEBPACK_IMPORTED_MODULE_0__api_qiniu___default.a.hosturl + res.data.base_url;
    },

    savelink() {
      var allParams = {
        weibo_bg: this.weibo_bg,
        weibo_title: this.weibo_title
      };
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_api__["baseset"])(allParams).then(res => {
        if (res.msg === "ok") {
          this.getconfig();
          this.$message({
            message: "提交成功",
            type: "success"
          });
        } else {
          this.$message({
            message: res.msg,
            type: "error"
          });
        }
      });
    },

    savehb() {
      var allParams = {
        email: this.email,
        phone: this.phone,
        buy: this.buy,
        eng_buy: this.eng_buy,
        bussiness: this.bussiness,
        media: this.media
      };
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_api__["baseset"])(allParams).then(res => {
        if (res.msg === "ok") {
          this.$message({
            message: "提交成功",
            type: "success"
          });
          this.getconfig();
        } else {
          this.$message({
            message: res.msg,
            type: "error"
          });
        }
      });
    },
    savebg() {
      var allParams = {
        all_bg: this.all_bg,
        test_bg: this.test_bg,
        new_bg: this.new_bg,
        all_title: this.all_title,
        all_content: this.all_content
      };
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_api__["baseset"])(allParams).then(res => {
        if (res.msg === "ok") {
          this.getconfig();
          this.$message({
            message: "提交成功",
            type: "success"
          });
        } else {
          this.$message({
            message: res.msg,
            type: "error"
          });
        }
      });
    },

    getconfig() {
      var allParams = "";
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_api__["baseget"])(allParams).then(res => {
        if (res.msg === "ok") {
          this.phone = res.data.phone ? res.data.phone : "";
          this.email = res.data.email ? res.data.email : "";
          this.buy = res.data.buy ? res.data.buy : "";
          this.eng_buy = res.data.eng_buy ? res.data.eng_buy : "";
          this.bussiness = res.data.bussiness ? res.data.bussiness : "";
          this.media = res.data.media ? res.data.media : "";
          this.wechat_title = res.data.wechat_title ? res.data.wechat_title : "";
          this.ins_title = res.data.ins_title ? res.data.ins_title : "";
          this.weibo_title = res.data.weibo_title ? res.data.weibo_title : "";
          this.wechat_bg = res.data.wechat_bg ? res.data.wechat_bg : "../static/images/default.png";
          this.ins_bg = res.data.ins_bg ? res.data.ins_bg : "../static/images/default.png";
          this.weibo_bg = res.data.weibo_bg ? res.data.weibo_bg : "../static/images/default.png";
          this.all_bg = res.data.all_bg ? res.data.all_bg : "../static/images/default.png";
          this.new_bg = res.data.new_bg ? res.data.new_bg : "../static/images/default.png";
          this.test_bg = res.data.test_bg ? res.data.test_bg : "../static/images/default.png";
          this.all_title = res.data.all_title ? res.data.all_title : "";
          this.all_content = res.data.all_content ? res.data.all_content : "";
        } else {
          this.$message({
            message: res.msg,
            type: "error"
          });
        }
      });
    }
  },

  mounted: function () {
    this.getconfig();
  }
});

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__api_api__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






// import { kdconfigGet } from '../../api/api';
// import { kdconfigPost } from '../../api/api';

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      activeName: 'list',

      currentPage: 1,
      list: [],
      loading: false,
      count: 0,
      limit: 10,
      dialogNewVisible: false,
      dialogDelVisible: false,
      newdelive: {
        title: '',
        code: ''
      },
      rules: {
        title: [{ required: true, trigger: 'blur', message: '请输入快递名称' }],
        code: [{ required: true, trigger: 'blur', message: '请输入快递简码' }]
      },
      configrule: {
        businessId: [{ required: true, trigger: 'blur', message: '请输入商户ID' }],
        apiKey: [{ required: true, trigger: 'blur', message: '请输入API key' }]
      },
      editId: '',
      delId: '',

      diatitle: '新增快递',

      // kaiguan:1,
      noconfig: false,
      config: {
        businessId: null,
        apiKey: null
      },

      configinfo: {
        api_key: null,
        business_id: null
      },
      checkper1: false,
      checkper2: false,
      checkper3: false

    };
  },

  methods: {
    checkPer() {
      var per = sessionStorage.getItem('permissions');

      if (per.indexOf('expressAdd') > -1) {
        this.checkper1 = true;
      }

      if (per.indexOf('expressDel') > -1) {
        this.checkper2 = true;
      }

      if (per.indexOf('expressConfig') > -1) {
        this.checkper3 = true;
      }
    },

    getlist() {
      var allParams = '?page=' + this.currentPage + '&limit=' + this.limit;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["deliveryGet"])(allParams).then(res => {
        this.list = res.data.data;
      });
    },

    newone() {
      this.dialogNewVisible = true;
    },

    save() {

      this.$refs.newdelive.validate(valid => {
        if (valid) {
          // console.log(this.newdelive)
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["deliveryPost"])(this.newdelive).then(res => {
            if (res.msg === "ok") {
              this.$message({
                message: '提交成功',
                type: 'success'
              });
              this.dialogNewVisible = false;
              this.getlist();
            } else {
              this.$message({
                message: res.msg,
                type: 'error'
              });
            }
          });
        } else {
          return false;
        }
      });
    },

    handleEdit(index, row) {
      this.diatitle = '编辑快递';
      this.putorup = 'put';
      this.editId = row.id;
      this.dialogNewVisible = true;
      this.newdelive = {
        id: row.id,
        title: row.title,
        code: row.code
      };
    },

    handleDelete(index, row) {
      this.dialogDelVisible = true;
      this.delId = row.id;
    },

    submitdel() {
      this.dialogDelVisible = false;
      var allParams = '?id=' + this.delId;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["deliveryDel"])(allParams).then(res => {
        // console.log(res)
        if (res.msg === "ok") {
          this.$message({
            message: '删除成功',
            type: 'success'
          });
          this.getlist();
          this.dialogDelVisible = false;
        } else {
          this.$message({
            message: res.msg,
            type: 'error'
          });
        }
      });
    },

    handleCurrentChange(val) {
      this.currentPage = val;
      this.getlist();
    },

    handleSizeChange(val) {
      this.limit = val;
      this.getlist();
    },

    putconfig() {
      this.noconfig = true;
    },

    save1() {
      console.log(this.config);

      this.$refs.config.validate(valid => {
        if (valid) {

          var allParams = this.config;
          kdconfigPost(allParams).then(res => {
            if (res.msg === "ok") {
              this.$message({
                message: '提交成功',
                type: 'success'
              });
              this.getconfig();
              this.noconfig = false;
            } else {
              this.$message({
                message: res.msg,
                type: 'error'
              });
            }
          });
        } else {
          return false;
        }
      });
    },

    getconfig() {
      var that = this;
      var allParams = '';
      kdconfigGet(allParams).then(res => {
        // console.log(res.data)
        if (res.data == '') {
          that.noconfig = true;
        } else {
          that.configinfo = res.data;
          that.noconfig = false;
        }
      });
    }

  },

  mounted: function () {
    this.getlist();
    // this.getconfig();
  }
});

/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_qiniu__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_qiniu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__api_qiniu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__api_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_quill_dist_quill_core_css__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_quill_dist_quill_core_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_quill_dist_quill_core_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_quill_dist_quill_snow_css__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_quill_dist_quill_snow_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_quill_dist_quill_snow_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_quill_dist_quill_bubble_css__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_quill_dist_quill_bubble_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_quill_dist_quill_bubble_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_quill_editor__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_quill_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vue_quill_editor__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




// import {documentGet} from '../../api/api';







 //调用编辑器

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      uptoken: {
        key: "image"
      },
      upurl: __WEBPACK_IMPORTED_MODULE_0__api_qiniu___default.a.upurl,

      host: "http://111.230.135.20/",

      checkper1: false,
      checkper2: false,

      currentPage: 1,
      list: [],
      count: 0,
      limit: 10,
      dialogNewVisible: false,
      dialogDelVisible: false,
      dialogSeeVisible: false,
      editId: "",
      delId: "",
      diatitle: "新增文档",
      nedoc: {
        title: "",
        detail: ""
      },
      rules: {
        title: [{ required: true, trigger: "blur", message: "请输入文档标题" }],
        detail: [{ required: true, trigger: "blur", message: "请输入详细内容" }]
      },
      currow: "",

      editorOption: {
        placeholder: "请输入详细内容（添加图片请点击上方第一个按钮）",
        theme: "snow",
        modules: {
          toolbar: {
            container: [["image"], ["bold", "italic", "underline", "strike", "blockquote", "code-block"], [{ direction: "rtl" }], [{ size: ["small", false, "large", "huge"] }], [{ header: [1, 2, 3, 4, 5, 6, false] }], [{ color: [] }, { background: [] }], [{ font: [] }], [{ align: [] }]
            // ['clean']
            ],
            handlers: {
              image: function (value) {
                if (value) {
                  document.querySelector(".quill-img input").click();
                } else {
                  this.quill.format("image", false);
                }
              }
            }
          }
        }
      }
    };
  },

  components: {
    quillEditor: __WEBPACK_IMPORTED_MODULE_5_vue_quill_editor__["quillEditor"]
  },

  methods: {
    quillImgSuccess(res, file) {
      console.log(res);
      let quill = this.$refs.myQuillEditor.quill;
      if (res.data.base_url) {
        let length = quill.getSelection().index;
        quill.insertEmbed(length, "image", __WEBPACK_IMPORTED_MODULE_0__api_qiniu___default.a.hosturl + res.data.base_url);
        quill.setSelection(length + 1);
      } else {
        this.$message.error("图片插入失败");
      }
    },

    getlist() {
      var allParams = "?page=" + this.currentPage + "&limit=" + this.limit;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_api__["documentsGet"])(allParams).then(res => {
        this.list = res.data.data;
        this.count = res.data.count;
      });
    },

    // checkPer() {
    //   var per = sessionStorage.getItem("permissions");

    //   if (per.indexOf("documentAdd") > -1) {
    //     this.checkper1 = true;
    //   }

    //   var per = sessionStorage.getItem("permissions");

    //   if (per.indexOf("documentDel") > -1) {
    //     this.checkper2 = true;
    //   }
    // },

    newone() {
      this.putorup = "up";
      this.diatitle = "新增文档", this.dialogNewVisible = true, this.nedoc = {
        title: "",
        detail: ""
      };
    },

    handleSee(index, row) {
      this.currow = row;
      this.dialogSeeVisible = true;
    },

    opendialog() {
      setTimeout(() => {
        this.setdetail();
      }, 100);
    },

    setdetail() {
      var seeBox = document.getElementById("detail");
      seeBox.innerHTML = this.currow.detail;
    },

    handleEdit(index, row) {
      this.diatitle = "编辑文档";
      this.dialogNewVisible = true;
      this.putorup = "put";
      this.editId = row.id;
      this.nedoc = {
        title: row.title,
        detail: row.detail,
        code: row.code
      };
    },

    save() {
      if (this.nedoc.title == "") {
        this.$message({
          message: "请输入标题",
          type: "error"
        });
      } else if (this.nedoc.detail == "") {
        this.$message({
          message: "请输入详细内容",
          type: "error"
        });
      } else {
        // this.$refs.nedoc.validate((valid) => {
        //   if (valid) {
        if (this.putorup == "put") {
          var allParams = {
            id: this.editId,
            title: this.nedoc.title,
            detail: this.nedoc.detail,
            code: this.nedoc.code
          };
        } else {
          var allParams = {
            id: "",
            title: this.nedoc.title,
            detail: this.nedoc.detail,
            code: this.nedoc.code
          };
        }
        console.log(allParams);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_api__["documentPost"])(allParams).then(res => {
          if (res.msg === "ok") {
            this.$message({
              message: "提交成功",
              type: "success"
            });
            this.getlist();
            this.dialogNewVisible = false;
          } else {
            this.$message({
              message: res.msg,
              type: "error"
            });
          }
        });
        //   }else{
        //     return false;
        //   }
        // })
      }
    },

    handleDelete(index, row) {
      this.dialogDelVisible = true;
      this.delId = row.id;
    },

    // submitdel() {
    //   this.dialogDelVisible = false;
    //   var allParams = "?id=" + this.delId;

    //   documentDel(allParams).then(res => {
    //     // console.log(res)
    //     if (res.msg === "ok") {
    //       this.$message({
    //         message: "删除成功",
    //         type: "success"
    //       });
    //       this.getlist();
    //       this.dialogDelVisible = false;
    //     } else {
    //       this.$message({
    //         message: res.msg,
    //         type: "error"
    //       });
    //     }
    //   });
    // },

    handleCurrentChange(val) {
      this.currentPage = val;
      this.getlist();
    },

    handleSizeChange(val) {
      this.limit = val;
      this.getlist();
    }
  },

  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
  },

  mounted: function () {
    this.getlist();
    // this.checkPer();
  }
});

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__api_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_element_ui__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_element_ui__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      diatitle: '新增',
      activeName: 'config',

      modelshow: false,
      modelset: true,
      newmodel: {
        title: '',
        content: ''
      },
      editId: '',
      modeldata: [],
      dialogNewVisible: false,
      putorup: 'put',
      rules: {
        title: [{ required: true, trigger: 'blur', message: '请输入名称' }],
        content: [{ required: true, trigger: 'blur', message: '请输入模板id' }]
      }

    };
  },

  methods: {

    getmodel() {
      var allParams = '';
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["wxconfigGet"])(allParams).then(res => {
        this.modeldata = res.data;
      });
    },

    // changemodel(){
    //   this.modelshow=true
    //   this.modelset=false
    // },

    handleEdit(index, row) {
      // this.editId = row.id;  
      this.diatitle = '编辑';
      this.dialogNewVisible = true;
      this.putorup = 'put';
      this.newmodel = {
        title: row.title,
        content: row.content
      };
    },

    newone() {
      this.putorup = 'up';
      this.diatitle = '新增';
      this.dialogNewVisible = true;
      this.newmodel = {
        title: '',
        content: ''
      };
    },

    postmodel() {
      this.$refs.newmodel.validate(valid => {
        if (valid) {
          var allParams = this.newmodel;
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["wxconfigPost"])(allParams).then(res => {
            if (res.msg === "ok") {
              this.$message({
                message: '提交成功',
                type: 'success'
              });
              // this.modelshow=false
              // this.modelset=true
              this.dialogNewVisible = false;
              this.getmodel();
            } else {
              this.$message({
                message: res.msg,
                type: 'error'
              });
            }
          });
        } else {
          return false;
        }
      });
    },

    cancelmodel() {
      this.modelshow = false;
      this.modelset = true;
    }
  },

  mounted: function () {
    this.getmodel();
  }
});

/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__api_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_element_ui__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_element_ui__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ __webpack_exports__["default"] = ({
  data() {

    return {

      list: [],

      keyword: {
        title: ''
      },

      diatitle: '新增',
      rules: {
        title: [{ required: true, message: '请输入内容', trigger: 'blur' }]

      },
      dialogDelVisible: false,
      dialogNewVisible: false

    };
  },

  methods: {

    newone() {
      this.dialogNewVisible = true;
    },

    handleEdit(index, row) {
      this.dialogNewVisible = true;
      this.keyword = row;
    },

    handleDelete(index, row) {
      this.delId = row.id;
      this.dialogDelVisible = true;
    },

    submitdel() {
      this.dialogDelVisible = false;
      var allParams = '?id=' + this.delId;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["keywordDel"])(allParams).then(res => {
        console.log(res);
        if (res.msg === "ok") {
          this.$message({
            message: '删除成功',
            type: 'success'
          });
          this.getlist();
          this.dialogDelVisible = false;
        } else {
          this.$message({
            message: res.msg,
            type: 'error'
          });
        }
      });
    },

    save() {
      console.log(this.keyword.title);
      var allParams = this.keyword;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["keywordPost"])(allParams).then(res => {
        if (res.msg === "ok") {
          this.getlist();
          this.dialogNewVisible = false;
          this.$message({
            message: '提交成功',
            type: 'success'
          });
        } else {
          this.$message({
            message: res.msg,
            type: 'error'
          });
        }
      });
    },

    getlist() {
      var allParams = '';
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["keywordGet"])(allParams).then(res => {
        if (res.msg === "ok") {

          this.list = res.data.data;
        } else {
          this.$message({
            message: res.msg,
            type: 'error'
          });
        }
      });
    }
  },

  mounted: function () {
    this.getlist();
  }
});

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__api_api__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      currentPage: 1,
      list: [{}],
      count: 0,
      limit: 10

    };
  },

  methods: {

    bindcheck(index, row) {
      var allParams = {
        id: row.id
      };
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["userPost"])(allParams).then(res => {
        this.$message({
          message: '提交成功',
          type: 'success'
        });
        this.getlist();
      });
    },

    getlist() {
      var allParams = '?page=' + this.currentPage + '&limit=' + this.limit;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["userGet"])(allParams).then(res => {
        this.list = res.data.data;
        this.count = res.data.count;
      });
    },

    handleCurrentChange(val) {
      this.currentPage = val;
      this.getlist();
    },

    handleSizeChange(val) {
      this.limit = val;
      this.getlist();
    }
  },

  mounted: function () {
    this.getlist();
  }

});

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__api_api__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      countdata: {
        productCount: 0,
        reviewProductCount: 0,
        todayOrderCount: 0,
        todaySalesCount: 0,
        todayUserCount: 0,
        withdrawAmount: 0,
        amount: 0,
        storeAmount: 0,
        loginCount: 0
      }
    };
  },
  methods: {
    getdata() {
      var allParams = '';
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["countdataGet"])(allParams).then(res => {
        this.countdata = res.data;
      });
    },

    gogood() {
      this.$router.push('/Good/Goodlist');
    },

    goorder() {
      this.$router.push('/Order/Orderlist');
    },

    gouser() {
      this.$router.push('/User/Userlist');
    },

    gotxls() {
      // this.$router.push('/Shop/Withdrawls');
    }
  },

  mounted: function () {
    this.getdata();
  }
});

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(5);

var _vue2 = _interopRequireDefault(_vue);

var _App = __webpack_require__(91);

var _App2 = _interopRequireDefault(_App);

var _router = __webpack_require__(54);

var _router2 = _interopRequireDefault(_router);

var _elementUi = __webpack_require__(3);

var _elementUi2 = _interopRequireDefault(_elementUi);

var _connectHistoryApiFallback = __webpack_require__(87);

var _connectHistoryApiFallback2 = _interopRequireDefault(_connectHistoryApiFallback);

__webpack_require__(88);

__webpack_require__(89);

__webpack_require__(90);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Mock from './mock'
// Mock.init()

// import 'element-ui/lib/theme-025B40/index.css'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
_vue2.default.config.productionTip = false;
_vue2.default.use(_elementUi2.default);

/* eslint-disable no-new */
new _vue2.default({
    el: '#app',
    router: _router2.default,
    History: _connectHistoryApiFallback2.default,
    template: '<App/>',
    components: { App: _App2.default }
});

/***/ }),
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 211 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 212 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 213 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 214 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 215 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 216 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 217 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 218 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 219 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 220 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 221 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 222 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 223 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 224 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 225 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 226 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 227 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 228 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 229 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 230 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 231 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 232 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 233 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 234 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 235 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAAFoCAIAAAD1h/aCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAOoSURBVHja7NmxDYMwEEDRM2I7KoZgKg/hyvNduhQ4iqCgAN6rcOlDfFmmZGYAnDEZASAcgHAAwgEIByAcAMIBCAcgHIBwAMIBIByAcADCAQgHIBwAwgEIByAcgHAAwgEIB4BwAMIBCAcgHIBwAAgHIByAcADCAQgHgHAAwgEIByAcgHAACAcgHIBwAMIBCAcgHADCAQgHIByAcADCASAcgHAAwgEIByAcAMIBCAcgHIBwAMIBIByAcADCAQgHIByAcAAIByAcgHAAwgEIB4BwAMIBCAcgHIBwAAgHIByAcADCAQgHgHAAwgEIByAcgHAAwgEgHIBwAMIBCAcgHADCAQgHIByAcADCASAcgHAAwgEIByAcgHAACAcgHIBwAMIBCAeAcADCAQgHIByAcAAIByAcgHAAwgEIB4BwAMIBCAcgHIBwAMIBIByAcADCAQgHIBwAwgEIByAcgHAAwgEgHIBwAMIBCAcgHADCAQgHIByAcADCAQgHwFGzETBa1u373Fs1EJw4OFGNcQnCAQgHIByAcADCAQgHgHAAwgEIByAcgHAACAcgHIBwAMIBCAeAcADCAQgHIByAcAAIByAcgHAAwgEIByAcAMIBCAcgHIBwAG9RMtMU7mJZt6durbfq/TpxoBp2JxwAwgEIByAc/PLs60OXo/firwp74z2lrxonDkA4AOEAhAMQDgDhAIQDEA5AOADhAIQDQDgA4QCEAxAOQDgAhAMQDkA4AOEAhANAOADhAIQDEA5AOADhMAJAOADhAIQDEA5AOCCit/pnCRFRMtMUACcOQDgA4QCEAxAOAOEAhAMQDkA4AOEAEA5AOADhAIQDEA4A4QCEAxAOQDgA4QCEA0A4AOEAhAMQDkA4AIQDEA5AOADhAIQDQDgA4QCEAxAOQDgAhAMQDkA4AOEAhAMQDgDhAIQDEA5AOADhABAOQDgA4QCEAxAOAOEAhAMQDkA4AOEAEA5AOADhAIQDEA5AOACEAxAOQDgA4QCEA0A4AOEAhAMQDkA4AIQDEA5AOADhAIQDEA4A4QCEAxAOQDgA4QAQDkA4AOEAhAMQDgDhAIQDEA5AOADhABAOQDgA4QCEAxAOQDgAhAMQDkA4AOEAhANAOADhAIQDEA5AOACEAxAOQDgA4QCEA0A4AOEAhAMQDkA4AOEAEA5AOADhAIQDEA4A4QCEAxAOQDgA4QAQDkA4AOEAhAMQDgDhAIQDEA5AOADhAIQDQDiAa3wAAAD//wMAPisjw4bMwucAAAAASUVORK5CYII="

/***/ }),
/* 255 */,
/* 256 */,
/* 257 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(234)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(133),
  /* template */
  __webpack_require__(302),
  /* scopeId */
  "data-v-cf8d6984",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(217)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(134),
  /* template */
  __webpack_require__(285),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(216)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(135),
  /* template */
  __webpack_require__(284),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(220)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(136),
  /* template */
  __webpack_require__(288),
  /* scopeId */
  "data-v-3509b429",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(232)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(137),
  /* template */
  __webpack_require__(300),
  /* scopeId */
  "data-v-be8500d4",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(223)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(138),
  /* template */
  __webpack_require__(291),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(227)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(139),
  /* template */
  __webpack_require__(295),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(233)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(140),
  /* template */
  __webpack_require__(301),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(235)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(141),
  /* template */
  __webpack_require__(303),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(218)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(142),
  /* template */
  __webpack_require__(286),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(213)
__webpack_require__(215)
__webpack_require__(214)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(143),
  /* template */
  __webpack_require__(283),
  /* scopeId */
  "data-v-1b2bfe28",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(221)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(144),
  /* template */
  __webpack_require__(289),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(225)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(145),
  /* template */
  __webpack_require__(293),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(229)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(146),
  /* template */
  __webpack_require__(297),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(212)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(147),
  /* template */
  __webpack_require__(282),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(211)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(148),
  /* template */
  __webpack_require__(281),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(224)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(149),
  /* template */
  __webpack_require__(292),
  /* scopeId */
  "data-v-5b8d244e",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(228)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(150),
  /* template */
  __webpack_require__(296),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(219)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(151),
  /* template */
  __webpack_require__(287),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(222)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(152),
  /* template */
  __webpack_require__(290),
  /* scopeId */
  "data-v-39c69be4",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(226)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(153),
  /* template */
  __webpack_require__(294),
  /* scopeId */
  "data-v-68daab80",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(231)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(154),
  /* template */
  __webpack_require__(299),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(210)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(155),
  /* template */
  __webpack_require__(280),
  /* scopeId */
  "data-v-04aa40be",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 280 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('el-row', {
    staticClass: "warp",
    staticStyle: {
      "padding": "20px 0 0 20px",
      "width": "90%"
    }
  }, [_c('el-col', [_c('el-row', {
    staticClass: "dspf",
    attrs: {
      "gutter": 20
    }
  }, [_c('el-card', {
    staticClass: "mb20",
    attrs: {
      "shadow": "hover",
      "body-style": {
        padding: '0px'
      }
    }
  }, [_c('div', {
    staticClass: "grid-content grid-con-1",
    on: {
      "click": _vm.gogood
    }
  }, [_c('i', {
    staticClass: "el-icon-goods grid-con-icon"
  }), _vm._v(" "), _c('div', {
    staticClass: "grid-cont-right"
  }, [_c('div', {
    staticClass: "grid-num"
  }, [_vm._v(_vm._s(_vm.countdata.productCount))]), _vm._v(" "), _c('div', {
    staticClass: "counttext"
  }, [_vm._v("商品数量")])])])]), _vm._v(" "), _c('el-card', {
    staticClass: "mb20",
    attrs: {
      "shadow": "hover",
      "body-style": {
        padding: '0px'
      }
    }
  }, [_c('div', {
    staticClass: "grid-content grid-con-5",
    on: {
      "click": _vm.gogood
    }
  }, [_c('i', {
    staticClass: "el-icon-loading grid-con-icon"
  }), _vm._v(" "), _c('div', {
    staticClass: "grid-cont-right"
  }, [_c('div', {
    staticClass: "grid-num"
  }, [_vm._v(_vm._s(_vm.countdata.reviewProductCount))]), _vm._v(" "), _c('div', {
    staticClass: "counttext"
  }, [_vm._v("待审核商品")])])])]), _vm._v(" "), _c('el-card', {
    staticClass: "mb20",
    attrs: {
      "shadow": "hover",
      "body-style": {
        padding: '0px'
      }
    }
  }, [_c('div', {
    staticClass: "grid-content grid-con-2",
    on: {
      "click": _vm.goorder
    }
  }, [_c('i', {
    staticClass: "el-icon-tickets grid-con-icon"
  }), _vm._v(" "), _c('div', {
    staticClass: "grid-cont-right"
  }, [_c('div', {
    staticClass: "grid-num"
  }, [_vm._v(_vm._s(_vm.countdata.todayOrderCount))]), _vm._v(" "), _c('div', {
    staticClass: "counttext"
  }, [_vm._v("今日订单")])])])]), _vm._v(" "), _c('el-card', {
    staticClass: "mb20",
    attrs: {
      "shadow": "hover",
      "body-style": {
        padding: '0px'
      }
    }
  }, [_c('div', {
    staticClass: "grid-content grid-con-3",
    on: {
      "click": _vm.goorder
    }
  }, [_c('i', {
    staticClass: "el-icon-sold-out grid-con-icon"
  }), _vm._v(" "), _c('div', {
    staticClass: "grid-cont-right"
  }, [_c('div', {
    staticClass: "grid-num"
  }, [_vm._v(_vm._s(_vm.countdata.todaySalesCount))]), _vm._v(" "), _c('div', {
    staticClass: "counttext"
  }, [_vm._v("今日销量")])])])]), _vm._v(" "), _c('el-card', {
    staticClass: "mb20",
    attrs: {
      "shadow": "hover",
      "body-style": {
        padding: '0px'
      }
    }
  }, [_c('div', {
    staticClass: "grid-content grid-con-4",
    on: {
      "click": _vm.gouser
    }
  }, [_c('i', {
    staticClass: "el-icon-upload2 grid-con-icon"
  }), _vm._v(" "), _c('div', {
    staticClass: "grid-cont-right"
  }, [_c('div', {
    staticClass: "grid-num"
  }, [_vm._v(_vm._s(_vm.countdata.todayUserCount))]), _vm._v(" "), _c('div', {
    staticClass: "counttext"
  }, [_vm._v("今日新增用户")])])])]), _vm._v(" "), _c('el-card', {
    staticClass: "mb20",
    attrs: {
      "shadow": "hover",
      "body-style": {
        padding: '0px'
      }
    }
  }, [_c('div', {
    staticClass: "grid-content grid-con-6",
    on: {
      "click": _vm.gouser
    }
  }, [_c('i', {
    staticClass: "el-icon-view grid-con-icon"
  }), _vm._v(" "), _c('div', {
    staticClass: "grid-cont-right"
  }, [_c('div', {
    staticClass: "grid-num"
  }, [_vm._v(_vm._s(_vm.countdata.loginCount))]), _vm._v(" "), _c('div', {
    staticClass: "counttext"
  }, [_vm._v("今日浏览用户")])])])])], 1), _vm._v(" "), _c('el-row', {
    staticClass: "dspf",
    attrs: {
      "gutter": 20
    }
  }, [_c('el-card', {
    staticClass: "mb20",
    attrs: {
      "shadow": "hover",
      "body-style": {
        padding: '0px'
      }
    }
  }, [_c('div', {
    staticClass: "grid-content grid-con-7",
    on: {
      "click": _vm.gotxls
    }
  }, [_c('i', {
    staticClass: "el-icon-date grid-con-icon"
  }), _vm._v(" "), _c('div', {
    staticClass: "grid-cont-right"
  }, [_c('div', {
    staticClass: "grid-num"
  }, [_vm._v(_vm._s(_vm.countdata.storeAmount))]), _vm._v(" "), _c('div', {
    staticClass: "counttext"
  }, [_vm._v("总营业额")])])])]), _vm._v(" "), _c('el-card', {
    staticClass: "mb20",
    attrs: {
      "shadow": "hover",
      "body-style": {
        padding: '0px'
      }
    }
  }, [_c('div', {
    staticClass: "grid-content grid-con-7",
    on: {
      "click": _vm.gotxls
    }
  }, [_c('i', {
    staticClass: "el-icon-star-on grid-con-icon"
  }), _vm._v(" "), _c('div', {
    staticClass: "grid-cont-right"
  }, [_c('div', {
    staticClass: "grid-num"
  }, [_vm._v(_vm._s(_vm.countdata.amount))]), _vm._v(" "), _c('div', {
    staticClass: "counttext"
  }, [_vm._v("余额")])])])]), _vm._v(" "), _c('el-card', {
    staticClass: "mb20",
    attrs: {
      "shadow": "hover",
      "body-style": {
        padding: '0px'
      }
    }
  }, [_c('div', {
    staticClass: "grid-content grid-con-7",
    on: {
      "click": _vm.gotxls
    }
  }, [_c('i', {
    staticClass: "el-icon-success grid-con-icon"
  }), _vm._v(" "), _c('div', {
    staticClass: "grid-cont-right"
  }, [_c('div', {
    staticClass: "grid-num"
  }, [_vm._v(_vm._s(_vm.countdata.withdrawAmount))]), _vm._v(" "), _c('div', {
    staticClass: "counttext"
  }, [_vm._v("已提现")])])])])], 1)], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 281 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-row', {
    staticClass: "warp",
    staticStyle: {
      "padding": "20px 0 0 20px"
    }
  }, [_c('el-col', {
    staticClass: "warp-breadcrum",
    attrs: {
      "span": 24
    }
  }, [_c('el-breadcrumb', {
    attrs: {
      "separator": "/"
    }
  }, [_c('el-breadcrumb-item', {
    attrs: {
      "to": {
        path: '/'
      }
    }
  }, [_c('b', [_vm._v("首页")])]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("项目列表")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("新增项目")])], 1)], 1), _vm._v(" "), _c('el-col', {
    staticClass: "warp-main",
    attrs: {
      "span": 24
    }
  }, [_c('el-form', {
    staticStyle: {
      "width": "1000px"
    },
    attrs: {
      "label-width": "130px",
      "width": "900px",
      "center": "",
      "rules": _vm.rules,
      "model": _vm.newone
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "语言选择：",
      "prop": "language"
    }
  }, [_c('el-select', {
    attrs: {
      "placheolder": "请选择语言"
    },
    on: {
      "change": _vm.getLag
    },
    model: {
      value: (_vm.select),
      callback: function($$v) {
        _vm.select = $$v
      },
      expression: "select"
    }
  }, _vm._l((_vm.language), function(item) {
    return _c('el-option', {
      key: item.key,
      attrs: {
        "label": item.value,
        "value": item.key
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "标题：",
      "prop": "title"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "500px"
    },
    attrs: {
      "placeholder": "请输入产品标题（20字以内）",
      "maxlength": "20"
    },
    model: {
      value: (_vm.newone.title),
      callback: function($$v) {
        _vm.$set(_vm.newone, "title", $$v)
      },
      expression: "newone.title"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin-bottom": "40px"
    },
    attrs: {
      "label": "详细内容:",
      "prop": "detail"
    }
  }, [_c('div', {
    staticClass: "edit_container"
  }, [_c('quill-editor', {
    ref: "myQuillEditor",
    staticClass: "editer",
    staticStyle: {
      "height": "450px"
    },
    attrs: {
      "options": _vm.editorOption,
      "placeholder": "请输入详细内容"
    },
    model: {
      value: (_vm.newone.detail),
      callback: function($$v) {
        _vm.$set(_vm.newone, "detail", $$v)
      },
      expression: "newone.detail"
    }
  }), _vm._v(" "), _c('el-upload', {
    staticClass: "avatar-uploader quill-img",
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "action": _vm.upurl,
      "data": _vm.uptoken,
      "on-success": _vm.quillImgSuccess
    }
  }, [_c('el-button', {
    attrs: {
      "size": "small",
      "type": "primary",
      "id": "imgInput",
      "element-loading-text": "插入中,请稍候"
    }
  }, [_vm._v("点击上传")])], 1)], 1)]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "项目图片：",
      "prop": "cover"
    }
  }, [_c('el-upload', {
    staticClass: "upload-demo",
    attrs: {
      "action": _vm.upurl,
      "data": _vm.uptoken,
      "on-success": _vm.handleSuccess,
      "show-file-list": false,
      "accept": "image/*"
    }
  }, [_c('img', {
    staticClass: "pre-img",
    staticStyle: {
      "width": "146px",
      "height": "146px",
      "border": "1px dashed #ccc",
      "border-radius": "6px",
      "display": "block",
      "margin-top": "1px"
    },
    attrs: {
      "src": _vm.newone.cover
    }
  })])], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "关联产品："
    }
  }, [_c('el-checkbox-group', {
    model: {
      value: (_vm.newone.pro_id),
      callback: function($$v) {
        _vm.$set(_vm.newone, "pro_id", $$v)
      },
      expression: "newone.pro_id"
    }
  }, _vm._l((_vm.newone.products), function(item) {
    return _c('el-checkbox-button', {
      key: item.key,
      attrs: {
        "label": item.key,
        "border": ""
      }
    }, [_vm._v(_vm._s(item.title))])
  }))], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin-top": "20px"
    }
  }, [_c('el-button', {
    attrs: {
      "type": "primary",
      "size": "mini"
    },
    on: {
      "click": function($event) {
        _vm.save()
      }
    }
  }, [_vm._v("提交")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "size": "mini"
    },
    on: {
      "click": function($event) {
        _vm.golist()
      }
    }
  }, [_vm._v("取 消")])], 1)], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 282 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-row', {
    staticClass: "warp",
    staticStyle: {
      "padding": "20px 0 0 20px"
    }
  }, [_c('el-col', {
    staticClass: "warp-breadcrum",
    attrs: {
      "span": 24
    }
  }, [_c('el-breadcrumb', {
    attrs: {
      "separator": "/"
    }
  }, [_c('el-breadcrumb-item', {
    attrs: {
      "to": {
        path: '/'
      }
    }
  }, [_c('b', [_vm._v("首页")])]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("项目管理")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("项目列表")])], 1)], 1), _vm._v(" "), _c('el-col', {
    staticClass: "warp-main",
    attrs: {
      "span": 24
    }
  }, [_c('el-form', {
    attrs: {
      "inline": true
    }
  }, [_c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary",
      "size": "mini"
    },
    on: {
      "click": _vm.newone
    }
  }, [_vm._v("发布项目")])], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin-left": "20px"
    },
    attrs: {
      "label": "语言选择：",
      "prop": "language"
    }
  }, [_c('el-select', {
    attrs: {
      "placheolder": "请选择语言"
    },
    on: {
      "change": _vm.getLag
    },
    model: {
      value: (_vm.select),
      callback: function($$v) {
        _vm.select = $$v
      },
      expression: "select"
    }
  }, _vm._l((_vm.language), function(item) {
    return _c('el-option', {
      key: item.key,
      attrs: {
        "label": item.value,
        "value": item.key
      }
    })
  }))], 1)], 1), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "1650px"
    },
    attrs: {
      "data": _vm.list,
      "border": "",
      "stripe": "",
      "size": "small"
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "id",
      "label": "ID",
      "min-width": "50",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "title",
      "label": "项目标题",
      "min-width": "140",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "detail",
      "label": "项目详情内容",
      "min-width": "140",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "cover",
      "label": "项目图片",
      "min-width": "80",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('img', {
          staticStyle: {
            "max-width": "50px",
            "max-height": "50px"
          },
          attrs: {
            "src": scope.row.cover
          }
        })]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "排序",
      "width": "100",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-input', {
          attrs: {
            "size": "mini",
            "type": "number",
            "min": "0"
          },
          on: {
            "change": function($event) {
              _vm.changeSort(scope.row.id, scope.row.sort)
            }
          },
          model: {
            value: (scope.row.sort),
            callback: function($$v) {
              _vm.$set(scope.row, "sort", $$v)
            },
            expression: "scope.row.sort"
          }
        })]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作",
      "min-width": "140",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "type": "primary",
            "size": "mini"
          },
          on: {
            "click": function($event) {
              _vm.handleEdit(scope.$index, scope.row)
            }
          }
        }, [_vm._v("修改")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "type": "danger",
            "size": "mini"
          },
          on: {
            "click": function($event) {
              _vm.handleDelete(scope.$index, scope.row)
            }
          }
        }, [_vm._v("删除")])]
      }
    }])
  })], 1), _vm._v(" "), _c('el-pagination', {
    staticStyle: {
      "float": "left",
      "margin-top": "20px"
    },
    attrs: {
      "current-page": _vm.currentPage,
      "page-sizes": [10, 20, 30, 40],
      "page-size": _vm.limit,
      "layout": "total,sizes, prev, pager, next, jumper",
      "total": _vm.count,
      "prev-text": "上一页",
      "next-text": "下一页"
    },
    on: {
      "current-change": _vm.handleCurrentChange,
      "size-change": _vm.handleSizeChange
    }
  })], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "删除不可恢复，是否确定删除？",
      "visible": _vm.dialogDelVisible,
      "width": "30%"
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogDelVisible = $event
      }
    }
  }, [_c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.submitdel()
      }
    }
  }, [_vm._v("确 定")]), _vm._v(" "), _c('el-button', {
    on: {
      "click": function($event) {
        _vm.dialogDelVisible = false
      }
    }
  }, [_vm._v("取 消")])], 1)])], 1)
},staticRenderFns: []}

/***/ }),
/* 283 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-row', {
    staticClass: "container"
  }, [_c('el-col', {
    staticClass: "topbar-wrap",
    attrs: {
      "span": 24
    }
  }, [_c('div', {
    staticClass: "topbar-title"
  }, [_c('span', {
    staticStyle: {
      "font-size": "18px",
      "color": "#fff"
    }
  }, [_vm._v("凝生官网后台管理")])]), _vm._v(" "), _c('el-button', {
    staticClass: "clear",
    attrs: {
      "size": "mini",
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.quanping()
      }
    }
  }, [_vm._v(_vm._s(_vm.fstext))]), _vm._v(" "), _c('div', {
    staticClass: "topbar-account topbar-btn"
  }, [_c('el-dropdown', {
    attrs: {
      "trigger": "click"
    }
  }, [_c('span', {
    staticClass: "el-dropdown-link userinfo-inner"
  }, [_c('i', {
    staticClass: "iconfont menu-yonghu",
    staticStyle: {
      "margin-right": "10px"
    }
  }), _vm._v("\n          " + _vm._s(_vm.username) + "\n          "), _c('i', {
    staticClass: "iconfont icon-down",
    staticStyle: {
      "margin-left": "10px"
    }
  })]), _vm._v(" "), _c('el-dropdown-menu', {
    staticStyle: {
      "top": "38px!important"
    },
    attrs: {
      "slot": "dropdown"
    },
    slot: "dropdown"
  }, [_c('el-dropdown-item', {
    nativeOn: {
      "click": function($event) {
        return _vm.logout($event)
      }
    }
  }, [_c('span', {
    staticStyle: {
      "color": "#555",
      "font-size": "14px"
    }
  }, [_vm._v("退出登录")])])], 1)], 1)], 1)], 1), _vm._v(" "), _c('el-col', {
    staticClass: "main",
    attrs: {
      "span": 24
    }
  }, [_c('aside', {
    class: {
      showSidebar: !_vm.collapsed
    }
  }, [_c('div', {
    staticClass: "menu-toggle",
    on: {
      "click": function($event) {
        $event.preventDefault();
        return _vm.collapse($event)
      }
    }
  }, [_c('i', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.collapsed),
      expression: "!collapsed"
    }],
    staticClass: "iconfont menu-angleleft"
  }), _vm._v(" "), _c('i', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.collapsed),
      expression: "collapsed"
    }],
    staticClass: "iconfont menu-angleright"
  })]), _vm._v(" "), _c('el-menu', {
    attrs: {
      "default-active": "0",
      "router": "",
      "collapse": _vm.collapsed,
      "unique-opened": ""
    }
  }, [_vm._l((_vm.$router.options.routes), function(item, index) {
    return (item.menuShow) ? [(!item.leaf) ? _c('el-submenu', {
      attrs: {
        "index": index + ''
      }
    }, [_c('template', {
      slot: "title"
    }, [_c('i', {
      class: item.iconCls
    }), _vm._v(" "), _c('span', {
      attrs: {
        "slot": "title"
      },
      slot: "title"
    }, [_vm._v(_vm._s(item.name))])]), _vm._v(" "), _vm._l((item.children), function(term) {
      return (term.menuShow) ? _c('el-menu-item', {
        directives: [{
          name: "per",
          rawName: "v-per",
          value: (term.meta.permission),
          expression: "term.meta.permission"
        }],
        key: term.path,
        class: _vm.$route.path == term.path ? 'is-active' : '',
        attrs: {
          "index": term.path
        }
      }, [_c('i', {
        class: term.iconCls
      }), _vm._v(" "), _c('span', {
        attrs: {
          "slot": "title"
        },
        slot: "title"
      }, [_vm._v(_vm._s(term.name))])]) : _vm._e()
    })], 2) : (item.leaf && item.children && item.children.length) ? _c('el-menu-item', {
      directives: [{
        name: "per",
        rawName: "v-per",
        value: (item.children[0].meta.permission),
        expression: "item.children[0].meta.permission"
      }],
      class: _vm.$route.path == item.children[0].path ? 'is-active' : '',
      attrs: {
        "index": item.children[0].path
      }
    }, [_c('i', {
      class: item.iconCls
    }), _vm._v(" "), _c('span', {
      attrs: {
        "slot": "title"
      },
      slot: "title"
    }, [_vm._v(_vm._s(item.children[0].name))])]) : _vm._e()] : _vm._e()
  })], 2)], 1), _vm._v(" "), _c('section', {
    staticClass: "content-container"
  }, [_c('div', {
    staticClass: "grid-content bg-purple-light"
  }, [_c('el-col', {
    staticClass: "content-wrapper",
    attrs: {
      "span": 24
    }
  }, [_c('transition', {
    attrs: {
      "name": "fade",
      "mode": "out-in"
    }
  }, [_c('router-view')], 1)], 1)], 1)])])], 1)
},staticRenderFns: []}

/***/ }),
/* 284 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-row', {
    staticClass: "warp",
    staticStyle: {
      "padding": "20px 0 0 20px"
    }
  }, [_c('el-col', {
    staticClass: "warp-breadcrum",
    attrs: {
      "span": 24
    }
  }, [_c('el-breadcrumb', {
    attrs: {
      "separator": "/"
    }
  }, [_c('el-breadcrumb-item', {
    attrs: {
      "to": {
        path: '/'
      }
    }
  }, [_c('b', [_vm._v("首页")])]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("分销申请")])], 1)], 1), _vm._v(" "), _c('el-col', {
    staticClass: "warp-main",
    attrs: {
      "span": 24
    }
  }, [_c('el-form', {
    attrs: {
      "inline": true
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "审核方式"
    }
  }, [_c('el-switch', {
    attrs: {
      "active-value": "1",
      "inactive-value": "0",
      "active-text": "自动",
      "inactive-text": "手动"
    },
    on: {
      "change": _vm.switchchange
    },
    model: {
      value: (_vm.auto_pass),
      callback: function($$v) {
        _vm.auto_pass = $$v
      },
      expression: "auto_pass"
    }
  })], 1)], 1), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "80%"
    },
    attrs: {
      "data": _vm.list,
      "border": "",
      "stripe": "",
      "size": "small"
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "id",
      "label": "编号",
      "width": "100",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "姓名",
      "min-width": "200",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "phone",
      "label": "电话",
      "min-width": "200",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "created_at",
      "label": "申请时间",
      "width": "200",
      "align": "center"
    }
  }), _vm._v(" "), (_vm.auto_pass == '1') ? _c('el-table-column', {
    attrs: {
      "prop": "created_at",
      "label": "状态",
      "min-width": "150",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [(scope.row.state == 0) ? _c('el-tag', {
          attrs: {
            "size": "small",
            "type": "info"
          }
        }, [_vm._v("未处理")]) : _vm._e(), _vm._v(" "), (scope.row.state == 1) ? _c('el-tag', {
          attrs: {
            "size": "small",
            "type": "success"
          }
        }, [_vm._v("已处理")]) : _vm._e()]
      }
    }])
  }) : _vm._e(), _vm._v(" "), (_vm.auto_pass == '0') ? _c('el-table-column', {
    attrs: {
      "prop": "state",
      "label": "状态",
      "min-width": "150",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [(scope.row.state == 0) ? _c('el-button', {
          attrs: {
            "size": "mini",
            "type": "info"
          },
          on: {
            "click": function($event) {
              _vm.check(scope.row)
            }
          }
        }, [_vm._v("未处理")]) : _vm._e(), _vm._v(" "), (scope.row.state == 1) ? _c('el-button', {
          attrs: {
            "size": "mini",
            "type": "success"
          }
        }, [_vm._v("已处理")]) : _vm._e()]
      }
    }])
  }) : _vm._e()], 1), _vm._v(" "), _c('el-pagination', {
    staticStyle: {
      "float": "left",
      "margin-top": "20px"
    },
    attrs: {
      "current-page": _vm.currentPage,
      "page-sizes": [10, 20, 30, 40],
      "page-size": _vm.limit,
      "layout": "total,sizes, prev, pager, next, jumper",
      "total": _vm.count,
      "prev-text": "上一页",
      "next-text": "下一页"
    },
    on: {
      "current-change": _vm.handleCurrentChange,
      "size-change": _vm.handleSizeChange
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 285 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-row', {
    staticClass: "warp",
    staticStyle: {
      "padding": "20px 0 0 20px"
    }
  }, [_c('el-col', {
    staticClass: "warp-breadcrum",
    attrs: {
      "span": 24
    }
  }, [_c('el-breadcrumb', {
    attrs: {
      "separator": "/"
    }
  }, [_c('el-breadcrumb-item', {
    attrs: {
      "to": {
        path: '/'
      }
    }
  }, [_c('b', [_vm._v("首页")])]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("广告管理")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("广告分类")])], 1)], 1), _vm._v(" "), _c('el-col', {
    staticClass: "warp-main",
    attrs: {
      "span": 24
    }
  }, [_c('el-form', {
    attrs: {
      "inline": true
    }
  }, [_c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary",
      "size": "mini"
    },
    on: {
      "click": _vm.newone
    }
  }, [_vm._v("新增分类")])], 1)], 1), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "1101px"
    },
    attrs: {
      "data": _vm.list,
      "border": "",
      "stripe": "",
      "size": "small"
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "id",
      "label": "编号",
      "width": "200",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "icon",
      "label": "分类logo",
      "width": "200",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('img', {
          staticStyle: {
            "max-width": "50px",
            "max-height": "50px"
          },
          attrs: {
            "src": scope.row.image
          }
        })]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "title",
      "label": "名称",
      "width": "200",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "parent",
      "label": "上级",
      "width": "200",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "排序",
      "width": "100",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-input', {
          staticStyle: {
            "width": "100%"
          },
          attrs: {
            "size": "mini",
            "type": "number",
            "min": "0"
          },
          on: {
            "change": function($event) {
              _vm.changeSort(scope.row.id, scope.row.sort)
            }
          },
          model: {
            value: (scope.row.sort),
            callback: function($$v) {
              _vm.$set(scope.row, "sort", $$v)
            },
            expression: "scope.row.sort"
          }
        })]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作",
      "width": "200px",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "type": "primary",
            "size": "mini"
          },
          on: {
            "click": function($event) {
              _vm.handleEdit(scope.$index, scope.row)
            }
          }
        }, [_vm._v("编辑")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "type": "danger",
            "size": "mini"
          },
          on: {
            "click": function($event) {
              _vm.handleDelete(scope.$index, scope.row)
            }
          }
        }, [_vm._v("删除")])]
      }
    }])
  })], 1), _vm._v(" "), _c('el-pagination', {
    staticStyle: {
      "float": "left",
      "margin-top": "20px"
    },
    attrs: {
      "current-page": _vm.currentPage,
      "page-sizes": [10, 20, 30, 40],
      "page-size": _vm.limit,
      "layout": "total,sizes, prev, pager, next, jumper",
      "total": _vm.count,
      "prev-text": "上一页",
      "next-text": "下一页"
    },
    on: {
      "current-change": _vm.handleCurrentChange,
      "size-change": _vm.handleSizeChange
    }
  })], 1), _vm._v(" "), _c('el-col', [_c('el-dialog', {
    staticStyle: {
      "min-width": "500px"
    },
    attrs: {
      "title": _vm.diatitle,
      "visible": _vm.dialogNewVisible,
      "width": "500",
      "center": ""
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogNewVisible = $event
      }
    }
  }, [_c('el-form', {
    ref: "newadv",
    attrs: {
      "model": _vm.newadv,
      "label-width": "120px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "分类标题："
    }
  }, [_c('el-input', {
    staticStyle: {
      "max-width": "300px"
    },
    attrs: {
      "placeholder": "请输入分类名称"
    },
    model: {
      value: (_vm.newadv.title),
      callback: function($$v) {
        _vm.$set(_vm.newadv, "title", $$v)
      },
      expression: "newadv.title"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "上级分类：",
      "prop": "type_id"
    }
  }, [_c('el-select', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.parent_type),
      expression: "parent_type"
    }],
    attrs: {
      "placeholder": "请选择分类"
    },
    model: {
      value: (_vm.type_id),
      callback: function($$v) {
        _vm.type_id = $$v
      },
      expression: "type_id"
    }
  }, _vm._l((_vm.typeArr), function(item) {
    return _c('el-option', {
      key: item.id,
      attrs: {
        "label": item.title,
        "value": item.id
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "语言选择",
      "prop": "language"
    }
  }, [_c('el-select', {
    attrs: {
      "placheolder": "请选择语言"
    },
    on: {
      "change": _vm.getLag
    },
    model: {
      value: (_vm.select),
      callback: function($$v) {
        _vm.select = $$v
      },
      expression: "select"
    }
  }, _vm._l((_vm.language), function(item) {
    return _c('el-option', {
      key: item.key,
      attrs: {
        "label": item.value,
        "value": item.key
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "分类logo："
    }
  }, [_c('el-upload', {
    staticClass: "upload-demo",
    attrs: {
      "action": _vm.upurl,
      "data": _vm.uptoken,
      "before-upload": _vm.beforeUpload,
      "on-success": _vm.handleSuccess,
      "show-file-list": false,
      "accept": "image/*"
    }
  }, [_c('img', {
    staticClass: "pre-img",
    staticStyle: {
      "max-width": "100px",
      "max-height": "100px",
      "border": "2px dashed #ccc",
      "border-radius": "0px",
      "display": "block"
    },
    attrs: {
      "src": _vm.imgSrc
    }
  }), _vm._v(" "), _c('el-button', {
    staticStyle: {
      "display": "block",
      "margin-top": "20px"
    },
    attrs: {
      "size": "small",
      "type": "primary"
    }
  }, [_vm._v("选取文件")]), _vm._v(" "), _c('div', {
    staticClass: "el-upload__tip",
    attrs: {
      "slot": "tip"
    },
    slot: "tip"
  }, [_vm._v("可上传JPG/PNG文件，且大小不超过1M，建议图片长宽比为1:1")])], 1)], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin-bottom": "40px"
    },
    attrs: {
      "label": "详细内容:",
      "prop": "desc"
    }
  }, [_c('div', {
    staticClass: "edit_container"
  }, [_c('quill-editor', {
    ref: "myQuillEditor",
    staticClass: "editer",
    staticStyle: {
      "height": "450px"
    },
    attrs: {
      "options": _vm.editorOption,
      "placeholder": "请输入详细内容"
    },
    model: {
      value: (_vm.newadv.desc),
      callback: function($$v) {
        _vm.$set(_vm.newadv, "desc", $$v)
      },
      expression: "newadv.desc"
    }
  }), _vm._v(" "), _c('el-upload', {
    staticClass: "avatar-uploader quill-img",
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "action": _vm.upurl,
      "data": _vm.uptoken,
      "on-success": _vm.quillImgSuccess
    }
  }, [_c('el-button', {
    attrs: {
      "size": "small",
      "type": "primary",
      "id": "imgInput",
      "element-loading-text": "插入中,请稍候"
    }
  }, [_vm._v("点击上传")])], 1)], 1)]), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin-left": "calc(50% - 200px)"
    }
  }, [_c('el-button', {
    attrs: {
      "size": "small",
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.save()
      }
    }
  }, [_vm._v("保 存")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "size": "small"
    },
    on: {
      "click": function($event) {
        _vm.dialogNewVisible = false
      }
    }
  }, [_vm._v("取 消")])], 1)], 1)], 1)], 1), _vm._v(" "), _c('el-col', [_c('el-dialog', {
    attrs: {
      "title": "删除不可恢复，是否确定删除？",
      "visible": _vm.dialogDelVisible,
      "width": "30%"
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogDelVisible = $event
      }
    }
  }, [_c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.submitdel()
      }
    }
  }, [_vm._v("确 定")]), _vm._v(" "), _c('el-button', {
    on: {
      "click": function($event) {
        _vm.dialogDelVisible = false
      }
    }
  }, [_vm._v("取 消")])], 1)])], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 286 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-row', {
    staticClass: "warp",
    staticStyle: {
      "padding": "20px 0 0 20px"
    }
  }, [_c('el-col', {
    staticClass: "warp-breadcrum",
    attrs: {
      "span": 24
    }
  }, [_c('el-breadcrumb', {
    attrs: {
      "separator": "/"
    }
  }, [_c('el-breadcrumb-item', {
    attrs: {
      "to": {
        path: '/'
      }
    }
  }, [_c('b', [_vm._v("首页")])]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("商品管理")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("商品分类")])], 1)], 1), _vm._v(" "), _c('el-col', {
    staticClass: "warp-main",
    attrs: {
      "span": 24
    }
  }, [_c('el-form', {
    attrs: {
      "inline": true
    }
  }, [_c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary",
      "size": "mini"
    },
    on: {
      "click": _vm.newone
    }
  }, [_vm._v("新增分类")])], 1)], 1), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "1101px"
    },
    attrs: {
      "data": _vm.list,
      "border": "",
      "stripe": "",
      "size": "small"
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "id",
      "label": "编号",
      "width": "200",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "icon",
      "label": "分类logo",
      "width": "200",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('img', {
          staticStyle: {
            "max-width": "50px",
            "max-height": "50px"
          },
          attrs: {
            "src": scope.row.image
          }
        })]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "title",
      "label": "名称",
      "width": "200",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "parent",
      "label": "上级",
      "width": "200",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "排序",
      "width": "100",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-input', {
          attrs: {
            "size": "mini",
            "type": "number",
            "min": "0"
          },
          on: {
            "change": function($event) {
              _vm.changeSort(scope.row.id, scope.row.sort)
            }
          },
          model: {
            value: (scope.row.sort),
            callback: function($$v) {
              _vm.$set(scope.row, "sort", $$v)
            },
            expression: "scope.row.sort"
          }
        })]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作",
      "width": "200",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "type": "primary",
            "size": "mini"
          },
          on: {
            "click": function($event) {
              _vm.handleEdit(scope.$index, scope.row)
            }
          }
        }, [_vm._v("编辑")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "type": "danger",
            "size": "mini"
          },
          on: {
            "click": function($event) {
              _vm.handleDelete(scope.$index, scope.row)
            }
          }
        }, [_vm._v("删除")])]
      }
    }])
  })], 1), _vm._v(" "), _c('el-pagination', {
    staticStyle: {
      "float": "left",
      "margin-top": "20px"
    },
    attrs: {
      "current-page": _vm.currentPage,
      "page-sizes": [10, 20, 30, 40],
      "page-size": _vm.limit,
      "layout": "total,sizes, prev, pager, next, jumper",
      "total": _vm.count,
      "prev-text": "上一页",
      "next-text": "下一页"
    },
    on: {
      "current-change": _vm.handleCurrentChange,
      "size-change": _vm.handleSizeChange
    }
  })], 1), _vm._v(" "), _c('el-col', [_c('el-dialog', {
    staticStyle: {
      "min-width": "500px"
    },
    attrs: {
      "title": _vm.diatitle,
      "visible": _vm.dialogNewVisible,
      "width": "500",
      "center": ""
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogNewVisible = $event
      }
    }
  }, [_c('el-form', {
    ref: "newadv",
    attrs: {
      "model": _vm.newadv,
      "label-width": "120px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "分类标题："
    }
  }, [_c('el-input', {
    staticStyle: {
      "max-width": "300px"
    },
    attrs: {
      "placeholder": "请输入分类名称"
    },
    model: {
      value: (_vm.newadv.title),
      callback: function($$v) {
        _vm.$set(_vm.newadv, "title", $$v)
      },
      expression: "newadv.title"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "上级分类：",
      "prop": "type_id"
    }
  }, [_c('el-select', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.parent_type),
      expression: "parent_type"
    }],
    attrs: {
      "placeholder": "请选择分类"
    },
    model: {
      value: (_vm.type_id),
      callback: function($$v) {
        _vm.type_id = $$v
      },
      expression: "type_id"
    }
  }, _vm._l((_vm.typeArr), function(item) {
    return _c('el-option', {
      key: item.id,
      attrs: {
        "label": item.title,
        "value": item.id
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "语言选择",
      "prop": "language"
    }
  }, [_c('el-select', {
    attrs: {
      "placheolder": "请选择语言"
    },
    on: {
      "change": _vm.getLag
    },
    model: {
      value: (_vm.select),
      callback: function($$v) {
        _vm.select = $$v
      },
      expression: "select"
    }
  }, _vm._l((_vm.language), function(item) {
    return _c('el-option', {
      key: item.key,
      attrs: {
        "label": item.value,
        "value": item.key
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "分类logo："
    }
  }, [_c('el-upload', {
    staticClass: "upload-demo",
    attrs: {
      "action": _vm.upurl,
      "data": _vm.uptoken,
      "before-upload": _vm.beforeUpload,
      "on-success": _vm.handleSuccess,
      "show-file-list": false,
      "accept": "image/*"
    }
  }, [_c('img', {
    staticClass: "pre-img",
    staticStyle: {
      "max-width": "100px",
      "max-height": "100px",
      "border": "2px dashed #ccc",
      "border-radius": "0px",
      "display": "block"
    },
    attrs: {
      "src": _vm.imgSrc
    }
  }), _vm._v(" "), _c('el-button', {
    staticStyle: {
      "display": "block",
      "margin-top": "20px"
    },
    attrs: {
      "size": "small",
      "type": "primary"
    }
  }, [_vm._v("选取文件")]), _vm._v(" "), _c('div', {
    staticClass: "el-upload__tip",
    attrs: {
      "slot": "tip"
    },
    slot: "tip"
  }, [_vm._v("可上传JPG/PNG文件，且大小不超过1M，建议图片长宽比为1:1")])], 1)], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin-bottom": "40px"
    },
    attrs: {
      "label": "详细内容:",
      "prop": "desc"
    }
  }, [_c('div', {
    staticClass: "edit_container"
  }, [_c('quill-editor', {
    ref: "myQuillEditor",
    staticClass: "editer",
    staticStyle: {
      "height": "450px"
    },
    attrs: {
      "options": _vm.editorOption,
      "placeholder": "请输入详细内容"
    },
    model: {
      value: (_vm.newadv.desc),
      callback: function($$v) {
        _vm.$set(_vm.newadv, "desc", $$v)
      },
      expression: "newadv.desc"
    }
  }), _vm._v(" "), _c('el-upload', {
    staticClass: "avatar-uploader quill-img",
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "action": _vm.upurl,
      "data": _vm.uptoken,
      "on-success": _vm.quillImgSuccess
    }
  }, [_c('el-button', {
    attrs: {
      "size": "small",
      "type": "primary",
      "id": "imgInput",
      "element-loading-text": "插入中,请稍候"
    }
  }, [_vm._v("点击上传")])], 1)], 1)]), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin-left": "calc(50% - 200px)"
    }
  }, [_c('el-button', {
    attrs: {
      "size": "small",
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.save()
      }
    }
  }, [_vm._v("保 存")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "size": "small"
    },
    on: {
      "click": function($event) {
        _vm.dialogNewVisible = false
      }
    }
  }, [_vm._v("取 消")])], 1)], 1)], 1)], 1), _vm._v(" "), _c('el-col', [_c('el-dialog', {
    attrs: {
      "title": "删除不可恢复，是否确定删除？",
      "visible": _vm.dialogDelVisible,
      "width": "30%"
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogDelVisible = $event
      }
    }
  }, [_c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.submitdel()
      }
    }
  }, [_vm._v("确 定")]), _vm._v(" "), _c('el-button', {
    on: {
      "click": function($event) {
        _vm.dialogDelVisible = false
      }
    }
  }, [_vm._v("取 消")])], 1)])], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 287 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-row', {
    staticClass: "warp",
    staticStyle: {
      "padding": "20px 0 0 20px"
    }
  }, [_c('el-col', {
    staticClass: "warp-breadcrum",
    attrs: {
      "span": 24
    }
  }, [_c('el-breadcrumb', {
    attrs: {
      "separator": "/"
    }
  }, [_c('el-breadcrumb-item', {
    attrs: {
      "to": {
        path: '/'
      }
    }
  }, [_c('b', [_vm._v("首页")])]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("系统设置")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("关于我们")])], 1)], 1), _vm._v(" "), _c('el-col', {
    staticClass: "warp-main",
    attrs: {
      "span": 24
    }
  }, [_c('el-form', {
    attrs: {
      "inline": true
    }
  }), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "1650px"
    },
    attrs: {
      "data": _vm.list,
      "border": "",
      "stripe": "",
      "size": "small"
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "id",
      "label": "编号",
      "width": "125",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "title",
      "label": "标题",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作",
      "width": "450",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "type": "primary",
            "size": "mini"
          },
          on: {
            "click": function($event) {
              _vm.handleSee(scope.$index, scope.row)
            }
          }
        }, [_vm._v("预览")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "type": "primary",
            "size": "mini"
          },
          on: {
            "click": function($event) {
              _vm.handleEdit(scope.$index, scope.row)
            }
          }
        }, [_vm._v("编辑")])]
      }
    }])
  })], 1), _vm._v(" "), _c('el-pagination', {
    staticStyle: {
      "float": "left",
      "margin-top": "20px"
    },
    attrs: {
      "current-page": _vm.currentPage,
      "page-sizes": [10, 20, 30, 40],
      "page-size": _vm.limit,
      "layout": "total,sizes, prev, pager, next, jumper",
      "total": _vm.count,
      "prev-text": "上一页",
      "next-text": "下一页"
    },
    on: {
      "current-change": _vm.handleCurrentChange,
      "size-change": _vm.handleSizeChange
    }
  })], 1), _vm._v(" "), _c('el-col', [_c('el-dialog', {
    staticStyle: {
      "min-width": "800px"
    },
    attrs: {
      "title": _vm.diatitle,
      "visible": _vm.dialogNewVisible,
      "width": "800",
      "center": ""
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogNewVisible = $event
      }
    }
  }, [_c('el-form', {
    ref: "nedoc",
    attrs: {
      "model": _vm.nedoc,
      "label-width": "120px",
      "rules": _vm.rules,
      "status-icon": ""
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "标题：",
      "prop": "title"
    }
  }, [_c('el-input', {
    staticStyle: {
      "max-width": "300px"
    },
    attrs: {
      "placeholder": "请输入标题"
    },
    model: {
      value: (_vm.nedoc.title),
      callback: function($$v) {
        _vm.$set(_vm.nedoc, "title", $$v)
      },
      expression: "nedoc.title"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin-bottom": "40px"
    },
    attrs: {
      "label": "详细内容:",
      "prop": "detail"
    }
  }, [_c('div', {
    staticClass: "edit_container"
  }, [_c('quill-editor', {
    ref: "myQuillEditor",
    staticClass: "editer",
    staticStyle: {
      "height": "450px"
    },
    attrs: {
      "options": _vm.editorOption,
      "placeholder": "请输入详细内容"
    },
    model: {
      value: (_vm.nedoc.detail),
      callback: function($$v) {
        _vm.$set(_vm.nedoc, "detail", $$v)
      },
      expression: "nedoc.detail"
    }
  }), _vm._v(" "), _c('el-upload', {
    staticClass: "avatar-uploader quill-img",
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "action": _vm.upurl,
      "data": _vm.uptoken,
      "on-success": _vm.quillImgSuccess
    }
  }, [_c('el-button', {
    attrs: {
      "size": "small",
      "type": "primary",
      "id": "imgInput",
      "element-loading-text": "插入中,请稍候"
    }
  }, [_vm._v("点击上传")])], 1)], 1)]), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin-left": "calc(50% - 180px)"
    }
  }, [_c('el-button', {
    attrs: {
      "size": "small",
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.save()
      }
    }
  }, [_vm._v("提 交")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "size": "small"
    },
    on: {
      "click": function($event) {
        _vm.dialogNewVisible = false
      }
    }
  }, [_vm._v("取 消")])], 1)], 1)], 1)], 1), _vm._v(" "), _c('el-col', [_c('el-dialog', {
    attrs: {
      "title": "删除不可恢复，是否确定删除？",
      "visible": _vm.dialogDelVisible,
      "width": "30%"
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogDelVisible = $event
      }
    }
  }, [_c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.submitdel()
      }
    }
  }, [_vm._v("确 定")]), _vm._v(" "), _c('el-button', {
    on: {
      "click": function($event) {
        _vm.dialogDelVisible = false
      }
    }
  }, [_vm._v("取 消")])], 1)])], 1), _vm._v(" "), _c('el-col', [_c('el-dialog', {
    attrs: {
      "title": "文档预览",
      "visible": _vm.dialogSeeVisible,
      "label-position": "top",
      "fullscreen": true
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogSeeVisible = $event
      },
      "open": _vm.opendialog
    }
  }, [_c('el-form', {
    attrs: {
      "label-position": "top",
      "label-width": "80px",
      "model": _vm.currow
    }
  }, [_c('el-form-item', {
    staticClass: "fw6",
    attrs: {
      "label": "文档标题"
    }
  }, [_c('span', {
    staticClass: "fw4"
  }, [_vm._v(_vm._s(_vm.currow.title))])]), _vm._v(" "), _c('el-form-item', {
    staticClass: "fw6",
    attrs: {
      "label": "详细内容"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('div', {
          staticClass: "fw4",
          attrs: {
            "id": "detail"
          }
        }, [_vm._v(_vm._s(_vm.currow.detail))])]
      }
    }])
  })], 1)], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 288 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-row', {
    staticClass: "warp",
    staticStyle: {
      "padding": "20px 0 0 20px"
    }
  }, [_c('el-col', {
    staticClass: "warp-breadcrum",
    attrs: {
      "span": 24
    }
  }, [_c('el-breadcrumb', {
    attrs: {
      "separator": "/"
    }
  }, [_c('el-breadcrumb-item', {
    attrs: {
      "to": {
        path: '/'
      }
    }
  }, [_c('b', [_vm._v("首页")])]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("代理管理")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("代理列表")])], 1)], 1), _vm._v(" "), _c('el-col', {
    staticClass: "warp-main",
    attrs: {
      "span": 24
    }
  }, [_c('el-table', {
    staticStyle: {
      "width": "95%"
    },
    attrs: {
      "data": _vm.list,
      "highlight-current-row": "",
      "size": "small",
      "border": ""
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "id",
      "label": "ID",
      "min-width": "60",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "nickname",
      "label": "昵称",
      "min-width": "140",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "avatarUrl",
      "label": "头像",
      "min-width": "100",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [(scope.row.avatarUrl) ? _c('img', {
          staticStyle: {
            "width": "40px",
            "height": "40px",
            "border-radius": "50%",
            "margin": "5px 0 -5px 0"
          },
          attrs: {
            "src": scope.row.avatarUrl
          }
        }) : _vm._e()]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "amount",
      "label": "佣金总计",
      "min-width": "140",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('p', [_vm._v(_vm._s(scope.row.amount / 100))])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "created_at",
      "label": "注册时间",
      "min-width": "200",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作",
      "min-width": "180",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "type": "primary",
            "size": "mini"
          },
          on: {
            "click": function($event) {
              _vm.handleSee(scope.row)
            }
          }
        }, [_vm._v("佣金详情")])]
      }
    }])
  })], 1), _vm._v(" "), _c('el-pagination', {
    staticStyle: {
      "float": "left",
      "margin": "20px 0px 0px 0px"
    },
    attrs: {
      "current-page": _vm.currentPage,
      "page-sizes": [10, 20, 30, 40],
      "page-size": _vm.limit,
      "layout": "total,sizes, prev, pager, next, jumper",
      "total": _vm.count,
      "prev-text": "上一页",
      "next-text": "下一页"
    },
    on: {
      "current-change": _vm.handleCurrentChange,
      "size-change": _vm.handleSizeChange
    }
  })], 1), _vm._v(" "), _c('el-col', [_c('el-dialog', {
    attrs: {
      "title": "分佣设置",
      "visible": _vm.dialogEditVisible,
      "center": ""
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogEditVisible = $event
      }
    }
  }, [_c('el-form', {
    ref: "ratiolist",
    staticStyle: {
      "width": "80%"
    },
    attrs: {
      "model": _vm.ratiolist,
      "label-width": "120px",
      "rules": _vm.rules
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "代理：",
      "prop": "proxy"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "number",
      "placeholder": "请输入百分比"
    },
    model: {
      value: (_vm.ratiolist.proxy),
      callback: function($$v) {
        _vm.$set(_vm.ratiolist, "proxy", $$v)
      },
      expression: "ratiolist.proxy"
    }
  }, [_c('template', {
    slot: "append"
  }, [_vm._v("%")])], 2)], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin-left": "calc(50% - 120px)"
    }
  }, [_c('el-button', {
    attrs: {
      "type": "primary",
      "size": "small"
    },
    on: {
      "click": function($event) {
        _vm.save()
      }
    }
  }, [_vm._v("保存")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "size": "small"
    },
    on: {
      "click": function($event) {
        _vm.dialogEditVisible = false
      }
    }
  }, [_vm._v("取 消")])], 1)], 1)], 1)], 1), _vm._v(" "), _c('el-col', [_c('el-dialog', {
    attrs: {
      "title": "佣金详情",
      "visible": _vm.dialogSeeVisible,
      "width": "1200px",
      "center": ""
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogSeeVisible = $event
      }
    }
  }, [_c('el-table', {
    attrs: {
      "data": _vm.currow,
      "border": "",
      "stripe": "",
      "size": "mini",
      "id": "out-table"
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "origin.avatarUrl",
      "label": "logo",
      "min-width": "100",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [(scope.row.origin.avatarUrl) ? _c('img', {
          staticStyle: {
            "width": "40px",
            "height": "40px",
            "border-radius": "50%",
            "margin": "5px 0 -5px 0"
          },
          attrs: {
            "src": scope.row.origin.avatarUrl
          }
        }) : _vm._e()]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "origin.nickname",
      "label": "用户",
      "min-width": "100",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "price",
      "label": "金额",
      "min-width": "100",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('p', [_vm._v(_vm._s(scope.row.price / 100))])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "updated_at",
      "label": "时间",
      "min-width": "100",
      "align": "center"
    }
  })], 1)], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 289 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-row', {
    staticClass: "warp",
    staticStyle: {
      "padding": "20px 0 0 20px"
    }
  }, [_c('el-col', {
    staticClass: "warp-breadcrum",
    attrs: {
      "span": 24
    }
  }, [_c('el-breadcrumb', {
    attrs: {
      "separator": "/"
    }
  }, [_c('el-breadcrumb-item', {
    attrs: {
      "to": {
        path: '/'
      }
    }
  }, [_c('b', [_vm._v("首页")])]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("推送")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("模板消息")])], 1)], 1), _vm._v(" "), _c('el-col', {
    staticClass: "warp-main",
    attrs: {
      "span": 24
    }
  }, [_c('el-form', {
    ref: "newadmin",
    staticStyle: {
      "width": "800px"
    },
    attrs: {
      "model": _vm.newadmin,
      "label-width": "120px",
      "rules": _vm.rules
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "预约项目:",
      "prop": "title"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入预约项目"
    },
    model: {
      value: (_vm.newadmin.title),
      callback: function($$v) {
        _vm.$set(_vm.newadmin, "title", $$v)
      },
      expression: "newadmin.title"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "预约内容:",
      "prop": "remark"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入预约内容"
    },
    model: {
      value: (_vm.newadmin.remark),
      callback: function($$v) {
        _vm.$set(_vm.newadmin, "remark", $$v)
      },
      expression: "newadmin.remark"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "预付金额:",
      "prop": "price"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入预付金额"
    },
    model: {
      value: (_vm.newadmin.price),
      callback: function($$v) {
        _vm.$set(_vm.newadmin, "price", $$v)
      },
      expression: "newadmin.price"
    }
  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary",
      "size": "small"
    },
    on: {
      "click": function($event) {
        _vm.save()
      }
    }
  }, [_vm._v("发送")])], 1)], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 290 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-row', {
    staticClass: "warp",
    staticStyle: {
      "padding": "20px 0 0 20px"
    }
  }, [_c('el-col', {
    staticClass: "warp-breadcrum",
    attrs: {
      "span": 24
    }
  }, [_c('el-breadcrumb', {
    attrs: {
      "separator": "/"
    }
  }, [_c('el-breadcrumb-item', {
    attrs: {
      "to": {
        path: '/'
      }
    }
  }, [_c('b', [_vm._v("首页")])]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("系统设置")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("微信设置")])], 1)], 1), _vm._v(" "), _c('el-col', {
    staticClass: "warp-main",
    attrs: {
      "span": 24
    }
  }, [_c('el-row', [_c('el-button', {
    staticStyle: {
      "margin-bottom": "10px"
    },
    attrs: {
      "type": "primary",
      "size": "mini"
    },
    on: {
      "click": _vm.newone
    }
  }, [_vm._v("新增模板")]), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "75%"
    },
    attrs: {
      "data": _vm.modeldata,
      "border": "",
      "stripe": "",
      "size": "small"
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "title",
      "label": "名称",
      "min-width": "200",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "content",
      "label": "模板id",
      "min-width": "200",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作",
      "min-width": "200",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "type": "primary",
            "size": "small"
          },
          on: {
            "click": function($event) {
              _vm.handleEdit(scope.$index, scope.row)
            }
          }
        }, [_vm._v("修改")])]
      }
    }])
  })], 1)], 1)], 1), _vm._v(" "), _c('el-col', [_c('el-dialog', {
    staticStyle: {
      "min-width": "500px"
    },
    attrs: {
      "title": _vm.diatitle,
      "visible": _vm.dialogNewVisible,
      "width": "500",
      "center": ""
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogNewVisible = $event
      }
    }
  }, [_c('el-form', {
    ref: "newmodel",
    attrs: {
      "model": _vm.newmodel,
      "label-width": "120px",
      "rules": _vm.rules
    }
  }, [(_vm.putorup == 'up') ? _c('el-form-item', {
    attrs: {
      "label": "名称:",
      "prop": "title"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入名称"
    },
    model: {
      value: (_vm.newmodel.title),
      callback: function($$v) {
        _vm.$set(_vm.newmodel, "title", $$v)
      },
      expression: "newmodel.title"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "模板id:",
      "prop": "content"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入模板id"
    },
    model: {
      value: (_vm.newmodel.content),
      callback: function($$v) {
        _vm.$set(_vm.newmodel, "content", $$v)
      },
      expression: "newmodel.content"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin-left": "calc(50% - 200px)"
    }
  }, [_c('el-button', {
    attrs: {
      "size": "mini",
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.postmodel()
      }
    }
  }, [_vm._v("保 存")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "size": "mini"
    },
    on: {
      "click": function($event) {
        _vm.dialogNewVisible = false
      }
    }
  }, [_vm._v("取 消")])], 1)], 1)], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 291 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-row', {
    staticClass: "warp",
    staticStyle: {
      "padding": "20px 0 0 20px"
    }
  }, [_c('el-col', {
    staticClass: "warp-breadcrum",
    attrs: {
      "span": 24
    }
  }, [_c('el-breadcrumb', {
    attrs: {
      "separator": "/"
    }
  }, [_c('el-breadcrumb-item', {
    attrs: {
      "to": {
        path: '/'
      }
    }
  }, [_c('b', [_vm._v("首页")])]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("系统设置")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("资源管理")])], 1)], 1), _vm._v(" "), _c('el-col', {
    staticClass: "warp-main",
    attrs: {
      "span": 24
    }
  }, [_c('el-form', {
    attrs: {
      "inline": true
    }
  }, [_c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary",
      "size": "mini"
    },
    on: {
      "click": _vm.newone
    }
  }, [_vm._v("新增资源")])], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "语言选择：",
      "prop": "language"
    }
  }, [_c('el-select', {
    attrs: {
      "placheolder": "请选择语言"
    },
    on: {
      "change": _vm.getLag
    },
    model: {
      value: (_vm.select),
      callback: function($$v) {
        _vm.select = $$v
      },
      expression: "select"
    }
  }, _vm._l((_vm.language), function(item) {
    return _c('el-option', {
      key: item.key,
      attrs: {
        "label": item.value,
        "value": item.key
      }
    })
  }))], 1)], 1), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "1650px"
    },
    attrs: {
      "data": _vm.list,
      "border": "",
      "stripe": "",
      "size": "small"
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "id",
      "label": "编号",
      "width": "125",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "title",
      "label": "标题",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "cover",
      "label": "图片",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('img', {
          staticStyle: {
            "max-width": "50px",
            "max-height": "50px"
          },
          attrs: {
            "src": scope.row.cover
          }
        })]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作",
      "width": "450",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "type": "primary",
            "size": "mini"
          },
          on: {
            "click": function($event) {
              _vm.handleEdit(scope.$index, scope.row)
            }
          }
        }, [_vm._v("编辑")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "type": "danger",
            "size": "mini"
          },
          on: {
            "click": function($event) {
              _vm.handleDelete(scope.$index, scope.row)
            }
          }
        }, [_vm._v("删除")])]
      }
    }])
  })], 1), _vm._v(" "), _c('el-pagination', {
    staticStyle: {
      "float": "left",
      "margin-top": "20px"
    },
    attrs: {
      "current-page": _vm.currentPage,
      "page-sizes": [10, 20, 30, 40],
      "page-size": _vm.limit,
      "layout": "total,sizes, prev, pager, next, jumper",
      "total": _vm.count,
      "prev-text": "上一页",
      "next-text": "下一页"
    },
    on: {
      "current-change": _vm.handleCurrentChange,
      "size-change": _vm.handleSizeChange
    }
  })], 1), _vm._v(" "), _c('el-col', [_c('el-dialog', {
    staticStyle: {
      "min-width": "800px"
    },
    attrs: {
      "title": _vm.diatitle,
      "visible": _vm.dialogNewVisible,
      "width": "800",
      "center": ""
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogNewVisible = $event
      }
    }
  }, [_c('el-form', {
    ref: "nedoc",
    attrs: {
      "model": _vm.nedoc,
      "label-width": "120px",
      "rules": _vm.rules,
      "status-icon": ""
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "语言选择：",
      "prop": "language"
    }
  }, [_c('el-select', {
    attrs: {
      "placheolder": "请选择语言"
    },
    on: {
      "change": _vm.getLag
    },
    model: {
      value: (_vm.select),
      callback: function($$v) {
        _vm.select = $$v
      },
      expression: "select"
    }
  }, _vm._l((_vm.language), function(item) {
    return _c('el-option', {
      key: item.key,
      attrs: {
        "label": item.value,
        "value": item.key
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "分类：",
      "prop": "type_id"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择分类"
    },
    model: {
      value: (_vm.type_id),
      callback: function($$v) {
        _vm.type_id = $$v
      },
      expression: "type_id"
    }
  }, _vm._l((_vm.typeArr), function(item) {
    return _c('el-option', {
      key: item.id,
      attrs: {
        "label": item.title,
        "value": item.id
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "标题：",
      "prop": "title"
    }
  }, [_c('el-input', {
    staticStyle: {
      "max-width": "300px"
    },
    attrs: {
      "placeholder": "请输入标题"
    },
    model: {
      value: (_vm.nedoc.title),
      callback: function($$v) {
        _vm.$set(_vm.nedoc, "title", $$v)
      },
      expression: "nedoc.title"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "图片：",
      "prop": "cover"
    }
  }, [_c('el-upload', {
    staticClass: "upload-demo",
    attrs: {
      "action": _vm.upurl,
      "data": _vm.uptoken,
      "on-success": _vm.handleSuccess,
      "show-file-list": false,
      "accept": "image/*"
    }
  }, [_c('img', {
    staticStyle: {
      "width": "146px",
      "height": "146px",
      "border": "1px dashed #ccc",
      "border-radius": "6px",
      "margin-top": "1px"
    },
    attrs: {
      "src": _vm.nedoc.cover
    }
  })])], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "附件："
    }
  }, [_c('el-upload', {
    attrs: {
      "action": _vm.upurl,
      "data": _vm.uptoken,
      "limit": 1,
      "accept": ".xlsx",
      "on-success": _vm.ExcelSuccess,
      "file-list": _vm.nedoc.parameter
    },
    model: {
      value: (_vm.nedoc.parameter),
      callback: function($$v) {
        _vm.$set(_vm.nedoc, "parameter", $$v)
      },
      expression: "nedoc.parameter"
    }
  }, [_c('el-button', {
    attrs: {
      "size": "small",
      "type": "primary"
    }
  }, [_vm._v("点击上传")])], 1)], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin-left": "calc(50% - 180px)"
    }
  }, [_c('el-button', {
    attrs: {
      "size": "small",
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.save()
      }
    }
  }, [_vm._v("提 交")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "size": "small"
    },
    on: {
      "click": function($event) {
        _vm.dialogNewVisible = false
      }
    }
  }, [_vm._v("取 消")])], 1)], 1)], 1)], 1), _vm._v(" "), _c('el-col', [_c('el-dialog', {
    attrs: {
      "title": "删除不可恢复，是否确定删除？",
      "visible": _vm.dialogDelVisible,
      "width": "30%"
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogDelVisible = $event
      }
    }
  }, [_c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.submitdel()
      }
    }
  }, [_vm._v("确 定")]), _vm._v(" "), _c('el-button', {
    on: {
      "click": function($event) {
        _vm.dialogDelVisible = false
      }
    }
  }, [_vm._v("取 消")])], 1)])], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 292 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-row', {
    staticClass: "warp",
    staticStyle: {
      "padding": "20px 0 0 20px"
    }
  }, [_c('el-col', {
    staticClass: "warp-breadcrum",
    attrs: {
      "span": 24
    }
  }, [_c('el-breadcrumb', {
    attrs: {
      "separator": "/"
    }
  }, [_c('el-breadcrumb-item', {
    attrs: {
      "to": {
        path: '/'
      }
    }
  }, [_c('b', [_vm._v("首页")])]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("系统设置")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("基本设置")])], 1)], 1), _vm._v(" "), _c('el-col', {
    staticClass: "warp-main",
    attrs: {
      "span": 24
    }
  }, [_c('el-row', [_c('el-tabs', {
    attrs: {
      "type": "card"
    },
    model: {
      value: (_vm.activeName),
      callback: function($$v) {
        _vm.activeName = $$v
      },
      expression: "activeName"
    }
  }, [_c('el-tab-pane', {
    attrs: {
      "label": "基础信息",
      "name": "hongbao"
    }
  }, [_c('el-form', {
    attrs: {
      "label-width": "120px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "邮箱：",
      "prop": "email"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "400px"
    },
    attrs: {
      "type": "text",
      "placeholder": "请输入邮箱"
    },
    model: {
      value: (_vm.email),
      callback: function($$v) {
        _vm.email = $$v
      },
      expression: "email"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "电话：",
      "prop": "phone"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "400px"
    },
    attrs: {
      "type": "text",
      "placeholder": "请输入电话"
    },
    model: {
      value: (_vm.phone),
      callback: function($$v) {
        _vm.phone = $$v
      },
      expression: "phone"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "零售购买：",
      "prop": "buy"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "400px"
    },
    attrs: {
      "type": "text",
      "placeholder": "请输入零售购买"
    },
    model: {
      value: (_vm.buy),
      callback: function($$v) {
        _vm.buy = $$v
      },
      expression: "buy"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "工程购买：",
      "prop": "eng_buy"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "400px"
    },
    attrs: {
      "type": "text",
      "placeholder": "请输入工程购买"
    },
    model: {
      value: (_vm.eng_buy),
      callback: function($$v) {
        _vm.eng_buy = $$v
      },
      expression: "eng_buy"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "商务合作：",
      "prop": "bussiness"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "400px"
    },
    attrs: {
      "type": "text",
      "placeholder": "请输入商务合作"
    },
    model: {
      value: (_vm.bussiness),
      callback: function($$v) {
        _vm.bussiness = $$v
      },
      expression: "bussiness"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "媒体合作：",
      "prop": "media"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "400px"
    },
    attrs: {
      "type": "text",
      "placeholder": "请输入媒体合作"
    },
    model: {
      value: (_vm.media),
      callback: function($$v) {
        _vm.media = $$v
      },
      expression: "media"
    }
  })], 1)], 1), _vm._v(" "), _c('el-button', {
    staticClass: "postbtn",
    attrs: {
      "type": "primary",
      "size": "small"
    },
    on: {
      "click": function($event) {
        _vm.savehb()
      }
    }
  }, [_vm._v("提交")])], 1), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "label": "微信公众号",
      "name": "bgpic"
    }
  }, [_c('el-upload', {
    staticClass: "upload-demo",
    attrs: {
      "action": _vm.upurl,
      "data": _vm.uptoken,
      "on-success": _vm.linkSuccess1,
      "show-file-list": false,
      "accept": "image/*"
    }
  }, [_c('img', {
    staticClass: "pre-img",
    staticStyle: {
      "width": "200px",
      "height": "200px",
      "border": "1px dashed #ccc",
      "border-radius": "6px",
      "display": "block",
      "margin-top": "1px"
    },
    attrs: {
      "src": _vm.wechat_bg
    }
  })]), _vm._v(" "), _c('el-input', {
    staticStyle: {
      "margin-top": "10px",
      "width": "300px",
      "display": "block"
    },
    attrs: {
      "placeholder": "请输入标题"
    },
    model: {
      value: (_vm.wechat_title),
      callback: function($$v) {
        _vm.wechat_title = $$v
      },
      expression: "wechat_title"
    }
  }), _vm._v(" "), _c('el-button', {
    staticClass: "postbtn",
    attrs: {
      "type": "primary",
      "size": "small"
    },
    on: {
      "click": function($event) {
        _vm.savebg()
      }
    }
  }, [_vm._v("提交")])], 1), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "label": "Instagram",
      "name": "sharebg"
    }
  }, [_c('el-upload', {
    staticClass: "upload-demo",
    attrs: {
      "action": _vm.upurl,
      "data": _vm.uptoken,
      "on-success": _vm.linkSuccess2,
      "show-file-list": false,
      "accept": "image/*"
    }
  }, [_c('img', {
    staticClass: "pre-img",
    staticStyle: {
      "width": "200px",
      "height": "200px",
      "border": "1px dashed #ccc",
      "border-radius": "6px",
      "display": "block",
      "margin-top": "1px"
    },
    attrs: {
      "src": _vm.ins_bg
    }
  })]), _vm._v(" "), _c('el-input', {
    staticStyle: {
      "margin-top": "10px",
      "width": "300px",
      "display": "block"
    },
    attrs: {
      "placeholder": "请输入标题"
    },
    model: {
      value: (_vm.ins_title),
      callback: function($$v) {
        _vm.ins_title = $$v
      },
      expression: "ins_title"
    }
  }), _vm._v(" "), _c('el-button', {
    staticClass: "postbtn",
    attrs: {
      "type": "primary",
      "size": "small"
    },
    on: {
      "click": function($event) {
        _vm.saveshare()
      }
    }
  }, [_vm._v("提交")])], 1), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "label": "微博",
      "name": "sharepic"
    }
  }, [_c('el-upload', {
    staticClass: "upload-demo",
    attrs: {
      "action": _vm.upurl,
      "data": _vm.uptoken,
      "on-success": _vm.linkSuccess3,
      "show-file-list": false,
      "accept": "image/*"
    }
  }, [_c('img', {
    staticClass: "pre-img",
    staticStyle: {
      "width": "200px",
      "height": "200px",
      "border": "1px dashed #ccc",
      "border-radius": "6px",
      "display": "block",
      "margin-top": "1px"
    },
    attrs: {
      "src": _vm.weibo_bg
    }
  })]), _vm._v(" "), _c('el-input', {
    staticStyle: {
      "margin-top": "10px",
      "width": "300px",
      "display": "block"
    },
    attrs: {
      "placeholder": "请输入标题"
    },
    model: {
      value: (_vm.weibo_title),
      callback: function($$v) {
        _vm.weibo_title = $$v
      },
      expression: "weibo_title"
    }
  }), _vm._v(" "), _c('el-button', {
    staticClass: "postbtn",
    attrs: {
      "type": "primary",
      "size": "small"
    },
    on: {
      "click": function($event) {
        _vm.savelink()
      }
    }
  }, [_vm._v("提交")])], 1), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "label": "首页封面",
      "name": "homePic"
    }
  }, [_c('el-form', {
    attrs: {
      "label-width": "120px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "全系列："
    }
  }, [_c('el-upload', {
    staticClass: "upload-demo",
    attrs: {
      "action": _vm.upurl,
      "data": _vm.uptoken,
      "on-success": _vm.linkSuccess4,
      "show-file-list": false,
      "accept": "image/*"
    }
  }, [_c('img', {
    staticClass: "pre-img",
    staticStyle: {
      "width": "200px",
      "height": "200px",
      "border": "1px dashed #ccc",
      "border-radius": "6px",
      "display": "block",
      "margin-top": "1px"
    },
    attrs: {
      "src": _vm.all_bg
    }
  })]), _vm._v(" "), _c('el-input', {
    staticStyle: {
      "margin-top": "10px",
      "width": "300px",
      "display": "block"
    },
    attrs: {
      "placeholder": "请输入标题"
    },
    model: {
      value: (_vm.all_title),
      callback: function($$v) {
        _vm.all_title = $$v
      },
      expression: "all_title"
    }
  }), _vm._v(" "), _c('el-input', {
    attrs: {
      "type": "textarea",
      "rows": 3,
      "placeholder": "请输入内容"
    },
    model: {
      value: (_vm.all_content),
      callback: function($$v) {
        _vm.all_content = $$v
      },
      expression: "all_content"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "实验品："
    }
  }, [_c('el-upload', {
    staticClass: "upload-demo",
    attrs: {
      "action": _vm.upurl,
      "data": _vm.uptoken,
      "on-success": _vm.linkSuccess5,
      "show-file-list": false,
      "accept": "image/*"
    }
  }, [_c('img', {
    staticClass: "pre-img",
    staticStyle: {
      "width": "200px",
      "height": "200px",
      "border": "1px dashed #ccc",
      "border-radius": "6px",
      "display": "block",
      "margin-top": "1px"
    },
    attrs: {
      "src": _vm.test_bg
    }
  })])], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "新品："
    }
  }, [_c('el-upload', {
    staticClass: "upload-demo",
    attrs: {
      "action": _vm.upurl,
      "data": _vm.uptoken,
      "on-success": _vm.linkSuccess6,
      "show-file-list": false,
      "accept": "image/*"
    }
  }, [_c('img', {
    staticClass: "pre-img",
    staticStyle: {
      "width": "200px",
      "height": "200px",
      "border": "1px dashed #ccc",
      "border-radius": "6px",
      "display": "block",
      "margin-top": "1px"
    },
    attrs: {
      "src": _vm.new_bg
    }
  })])], 1)], 1), _vm._v(" "), _c('el-button', {
    staticClass: "postbtn",
    attrs: {
      "type": "primary",
      "size": "small"
    },
    on: {
      "click": function($event) {
        _vm.savebg()
      }
    }
  }, [_vm._v("提交")])], 1)], 1)], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 293 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-row', {
    staticClass: "warp",
    staticStyle: {
      "padding": "20px 0 0 20px"
    }
  }, [_c('el-col', {
    staticClass: "warp-breadcrum",
    attrs: {
      "span": 24
    }
  }, [_c('el-breadcrumb', {
    attrs: {
      "separator": "/"
    }
  }, [_c('el-breadcrumb-item', {
    attrs: {
      "to": {
        path: '/'
      }
    }
  }, [_c('b', [_vm._v("首页")])]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("动态管理")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("动态列表")])], 1)], 1), _vm._v(" "), _c('el-col', {
    staticClass: "warp-main",
    attrs: {
      "span": 24
    }
  }, [_c('el-form', {
    attrs: {
      "inline": true
    }
  }, [_c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary",
      "size": "mini"
    },
    on: {
      "click": function($event) {
        _vm.newone()
      }
    }
  }, [_vm._v("新增动态")])], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "动态语言："
    }
  }, [_c('el-select', {
    attrs: {
      "placheolder": "全部"
    },
    on: {
      "change": _vm.listLay
    },
    model: {
      value: (_vm.select),
      callback: function($$v) {
        _vm.select = $$v
      },
      expression: "select"
    }
  }, _vm._l((_vm.language), function(item) {
    return _c('el-option', {
      key: item.key,
      attrs: {
        "label": item.value,
        "value": item.key
      }
    })
  }))], 1)], 1), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "1621px"
    },
    attrs: {
      "data": _vm.list,
      "border": "",
      "stripe": "",
      "size": "small"
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "id",
      "label": "编号",
      "width": "120",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "title",
      "label": "标题",
      "width": "500",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "cover",
      "label": "图片",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('img', {
          staticStyle: {
            "max-width": "50px",
            "max-height": "50px"
          },
          attrs: {
            "src": scope.row.cover
          }
        })]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作",
      "width": "500",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "type": "primary",
            "size": "mini"
          },
          on: {
            "click": function($event) {
              _vm.handleEdit(scope.$index, scope.row)
            }
          }
        }, [_vm._v("编辑")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "type": "danger",
            "size": "mini"
          },
          on: {
            "click": function($event) {
              _vm.handleDelete(scope.$index, scope.row)
            }
          }
        }, [_vm._v("删除")])]
      }
    }])
  })], 1), _vm._v(" "), _c('el-pagination', {
    staticStyle: {
      "float": "left",
      "margin-top": "20px"
    },
    attrs: {
      "current-page": _vm.currentPage,
      "page-sizes": [10, 20, 30, 40],
      "page-size": _vm.limit,
      "layout": "total,sizes, prev, pager, next, jumper",
      "total": _vm.count,
      "prev-text": "上一页",
      "next-text": "下一页"
    },
    on: {
      "current-change": _vm.handleCurrentChange,
      "size-change": _vm.handleSizeChange
    }
  })], 1), _vm._v(" "), _c('el-col', [_c('el-dialog', {
    staticStyle: {
      "min-width": "800px"
    },
    attrs: {
      "title": _vm.diatitle,
      "visible": _vm.dialogNewVisible,
      "width": "800",
      "center": ""
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogNewVisible = $event
      }
    }
  }, [_c('el-form', {
    ref: "nedoc",
    attrs: {
      "model": _vm.nedoc,
      "label-width": "120px",
      "rules": _vm.rules
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "语言选择",
      "prop": "language"
    }
  }, [_c('el-select', {
    attrs: {
      "placheolder": "请选择语言"
    },
    on: {
      "change": _vm.getLag
    },
    model: {
      value: (_vm.select),
      callback: function($$v) {
        _vm.select = $$v
      },
      expression: "select"
    }
  }, _vm._l((_vm.language), function(item) {
    return _c('el-option', {
      key: item.key,
      attrs: {
        "label": item.value,
        "value": item.key
      }
    }, [_vm._v(_vm._s(item.value))])
  }))], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "标题:",
      "prop": "title"
    }
  }, [_c('el-input', {
    staticStyle: {
      "max-width": "300px"
    },
    attrs: {
      "placeholder": "请输入标题"
    },
    model: {
      value: (_vm.nedoc.title),
      callback: function($$v) {
        _vm.$set(_vm.nedoc, "title", $$v)
      },
      expression: "nedoc.title"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "图片：",
      "prop": "cover"
    }
  }, [_c('el-upload', {
    staticClass: "upload-demo",
    attrs: {
      "action": _vm.upurl,
      "data": _vm.uptoken,
      "on-success": _vm.handleSuccess,
      "show-file-list": false,
      "accept": "image/*"
    }
  }, [_c('div', {
    staticStyle: {
      "width": "146px",
      "border": "1px dashed #ccc",
      "border-radius": "6px"
    }
  }, [_c('img', {
    staticStyle: {
      "width": "100%",
      "display": "block"
    },
    attrs: {
      "src": _vm.cover,
      "alt": ""
    }
  })])])], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin-bottom": "40px"
    },
    attrs: {
      "label": "详细内容:",
      "prop": "detail"
    }
  }, [_c('div', {
    staticClass: "edit_container"
  }, [_c('quill-editor', {
    ref: "myQuillEditor",
    staticClass: "editer",
    staticStyle: {
      "height": "450px"
    },
    attrs: {
      "options": _vm.editorOption,
      "placeholder": "请输入详细内容"
    },
    model: {
      value: (_vm.nedoc.detail),
      callback: function($$v) {
        _vm.$set(_vm.nedoc, "detail", $$v)
      },
      expression: "nedoc.detail"
    }
  }), _vm._v(" "), _c('el-upload', {
    staticClass: "avatar-uploader quill-img",
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "action": _vm.upurl,
      "data": _vm.uptoken,
      "on-success": _vm.quillImgSuccess
    }
  }, [_c('el-button', {
    attrs: {
      "size": "small",
      "type": "primary",
      "id": "imgInput",
      "element-loading-text": "插入中,请稍候"
    }
  }, [_vm._v("点击上传")])], 1)], 1)]), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin-left": "calc(50% - 180px)"
    }
  }, [_c('el-button', {
    attrs: {
      "size": "small",
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.save()
      }
    }
  }, [_vm._v("提 交")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "size": "small"
    },
    on: {
      "click": function($event) {
        _vm.dialogNewVisible = false
      }
    }
  }, [_vm._v("取 消")])], 1)], 1)], 1)], 1), _vm._v(" "), _c('el-col', [_c('el-dialog', {
    attrs: {
      "title": "删除不可恢复，是否确定删除？",
      "visible": _vm.dialogDelVisible,
      "width": "30%"
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogDelVisible = $event
      }
    }
  }, [_c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.submitdel()
      }
    }
  }, [_vm._v("确 定")]), _vm._v(" "), _c('el-button', {
    on: {
      "click": function($event) {
        _vm.dialogDelVisible = false
      }
    }
  }, [_vm._v("取 消")])], 1)])], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 294 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-row', {
    staticClass: "warp",
    staticStyle: {
      "padding": "20px 0 0 20px"
    }
  }, [_c('el-col', {
    staticClass: "warp-breadcrum",
    attrs: {
      "span": 24
    }
  }, [_c('el-breadcrumb', {
    attrs: {
      "separator": "/"
    }
  }, [_c('el-breadcrumb-item', {
    attrs: {
      "to": {
        path: '/'
      }
    }
  }, [_c('b', [_vm._v("首页")])]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("系统设置")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("基本设置")])], 1)], 1), _vm._v(" "), _c('el-col', {
    staticClass: "warp-main",
    attrs: {
      "span": 24
    }
  }, [_c('el-row', [_c('el-form', {
    attrs: {
      "inline": true
    }
  }, [_c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary",
      "size": "mini"
    },
    on: {
      "click": _vm.newone
    }
  }, [_vm._v("新增")])], 1)], 1), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "701px"
    },
    attrs: {
      "data": _vm.list,
      "border": "",
      "stripe": "",
      "size": "small"
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "id",
      "label": "编号",
      "width": "200",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "title",
      "label": "内容",
      "width": "200",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作",
      "width": "300",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "type": "primary",
            "size": "small"
          },
          on: {
            "click": function($event) {
              _vm.handleEdit(scope.$index, scope.row)
            }
          }
        }, [_vm._v("编辑")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "type": "danger",
            "size": "small"
          },
          on: {
            "click": function($event) {
              _vm.handleDelete(scope.$index, scope.row)
            }
          }
        }, [_vm._v("删除")])]
      }
    }])
  })], 1)], 1)], 1), _vm._v(" "), _c('el-col', [_c('el-dialog', {
    staticStyle: {
      "min-width": "500px"
    },
    attrs: {
      "title": _vm.diatitle,
      "visible": _vm.dialogNewVisible,
      "width": "500",
      "center": ""
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogNewVisible = $event
      }
    }
  }, [_c('el-form', {
    ref: "keyword",
    attrs: {
      "model": _vm.keyword,
      "label-width": "0px",
      "rules": _vm.rules
    }
  }, [_c('el-form-item', {
    attrs: {
      "prop": "title"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "700px"
    },
    attrs: {
      "placeholder": "改成请填写关键字"
    },
    model: {
      value: (_vm.keyword.title),
      callback: function($$v) {
        _vm.$set(_vm.keyword, "title", $$v)
      },
      expression: "keyword.title"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin-left": "calc(50% - 200px)"
    }
  }, [_c('el-button', {
    attrs: {
      "size": "small",
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.save()
      }
    }
  }, [_vm._v("保 存")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "size": "small"
    },
    on: {
      "click": function($event) {
        _vm.dialogNewVisible = false
      }
    }
  }, [_vm._v("取 消")])], 1)], 1)], 1)], 1), _vm._v(" "), _c('el-col', [_c('el-dialog', {
    attrs: {
      "title": "删除不可恢复，是否确定删除？",
      "visible": _vm.dialogDelVisible,
      "width": "30%"
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogDelVisible = $event
      }
    }
  }, [_c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    attrs: {
      "size": "small",
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.submitdel()
      }
    }
  }, [_vm._v("确 定")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "size": "small"
    },
    on: {
      "click": function($event) {
        _vm.dialogDelVisible = false
      }
    }
  }, [_vm._v("取 消")])], 1)])], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 295 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-row', {
    staticClass: "warp",
    staticStyle: {
      "padding": "20px 0 0 20px"
    }
  }, [_c('el-col', {
    staticClass: "warp-breadcrum",
    attrs: {
      "span": 24
    }
  }, [_c('el-breadcrumb', {
    attrs: {
      "separator": "/"
    }
  }, [_c('el-breadcrumb-item', {
    attrs: {
      "to": {
        path: '/'
      }
    }
  }, [_c('b', [_vm._v("首页")])]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("资源管理")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("资源分类")])], 1)], 1), _vm._v(" "), _c('el-col', {
    staticClass: "warp-main",
    attrs: {
      "span": 24
    }
  }, [_c('el-form', {
    attrs: {
      "inline": true
    }
  }, [_c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary",
      "size": "mini"
    },
    on: {
      "click": _vm.newone
    }
  }, [_vm._v("新增分类")])], 1)], 1), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "901px"
    },
    attrs: {
      "data": _vm.list,
      "border": "",
      "stripe": "",
      "size": "small"
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "id",
      "label": "编号",
      "width": "200",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "href",
      "label": "分类logo",
      "width": "200",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('img', {
          staticStyle: {
            "max-width": "50px",
            "max-height": "50px"
          },
          attrs: {
            "src": scope.row.href
          }
        })]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "title",
      "label": "名称",
      "width": "200",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "排序",
      "width": "100",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-input', {
          attrs: {
            "size": "mini",
            "type": "number",
            "min": "0"
          },
          on: {
            "change": function($event) {
              _vm.changeSort(scope.row.id, scope.row.sort)
            }
          },
          model: {
            value: (scope.row.sort),
            callback: function($$v) {
              _vm.$set(scope.row, "sort", $$v)
            },
            expression: "scope.row.sort"
          }
        })]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作",
      "width": "200",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "type": "primary",
            "size": "mini"
          },
          on: {
            "click": function($event) {
              _vm.handleEdit(scope.$index, scope.row)
            }
          }
        }, [_vm._v("编辑")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "type": "danger",
            "size": "mini"
          },
          on: {
            "click": function($event) {
              _vm.handleDelete(scope.$index, scope.row)
            }
          }
        }, [_vm._v("删除")])]
      }
    }])
  })], 1), _vm._v(" "), _c('el-pagination', {
    staticStyle: {
      "float": "left",
      "margin-top": "20px"
    },
    attrs: {
      "current-page": _vm.currentPage,
      "page-sizes": [10, 20, 30, 40],
      "page-size": _vm.limit,
      "layout": "total,sizes, prev, pager, next, jumper",
      "total": _vm.count,
      "prev-text": "上一页",
      "next-text": "下一页"
    },
    on: {
      "current-change": _vm.handleCurrentChange,
      "size-change": _vm.handleSizeChange
    }
  })], 1), _vm._v(" "), _c('el-col', [_c('el-dialog', {
    staticStyle: {
      "min-width": "500px"
    },
    attrs: {
      "title": _vm.diatitle,
      "visible": _vm.dialogNewVisible,
      "width": "500",
      "center": ""
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogNewVisible = $event
      }
    }
  }, [_c('el-form', {
    ref: "newadv",
    attrs: {
      "model": _vm.newadv,
      "label-width": "120px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "分类标题："
    }
  }, [_c('el-input', {
    staticStyle: {
      "max-width": "300px"
    },
    attrs: {
      "placeholder": "请输入分类名称"
    },
    model: {
      value: (_vm.newadv.title),
      callback: function($$v) {
        _vm.$set(_vm.newadv, "title", $$v)
      },
      expression: "newadv.title"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "语言选择",
      "prop": "language"
    }
  }, [_c('el-select', {
    attrs: {
      "placheolder": "请选择语言"
    },
    on: {
      "change": _vm.getLag
    },
    model: {
      value: (_vm.select),
      callback: function($$v) {
        _vm.select = $$v
      },
      expression: "select"
    }
  }, _vm._l((_vm.language), function(item) {
    return _c('el-option', {
      key: item.key,
      attrs: {
        "label": item.value,
        "value": item.key
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "分类logo："
    }
  }, [_c('el-upload', {
    staticClass: "upload-demo",
    attrs: {
      "action": _vm.upurl,
      "data": _vm.uptoken,
      "before-upload": _vm.beforeUpload,
      "on-success": _vm.handleSuccess,
      "show-file-list": false,
      "accept": "image/*"
    }
  }, [_c('img', {
    staticClass: "pre-img",
    staticStyle: {
      "max-width": "100px",
      "max-height": "100px",
      "border": "2px dashed #ccc",
      "border-radius": "0px",
      "display": "block"
    },
    attrs: {
      "src": _vm.imgSrc
    }
  }), _vm._v(" "), _c('el-button', {
    staticStyle: {
      "display": "block",
      "margin-top": "20px"
    },
    attrs: {
      "size": "small",
      "type": "primary"
    }
  }, [_vm._v("选取文件")]), _vm._v(" "), _c('div', {
    staticClass: "el-upload__tip",
    attrs: {
      "slot": "tip"
    },
    slot: "tip"
  }, [_vm._v("可上传JPG/PNG文件，且大小不超过1M，建议图片长宽比为1:1")])], 1)], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin-left": "calc(50% - 200px)"
    }
  }, [_c('el-button', {
    attrs: {
      "size": "small",
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.save()
      }
    }
  }, [_vm._v("保 存")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "size": "small"
    },
    on: {
      "click": function($event) {
        _vm.dialogNewVisible = false
      }
    }
  }, [_vm._v("取 消")])], 1)], 1)], 1)], 1), _vm._v(" "), _c('el-col', [_c('el-dialog', {
    attrs: {
      "title": "删除不可恢复，是否确定删除？",
      "visible": _vm.dialogDelVisible,
      "width": "30%"
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogDelVisible = $event
      }
    }
  }, [_c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.submitdel()
      }
    }
  }, [_vm._v("确 定")]), _vm._v(" "), _c('el-button', {
    on: {
      "click": function($event) {
        _vm.dialogDelVisible = false
      }
    }
  }, [_vm._v("取 消")])], 1)])], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 296 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-row', {
    staticClass: "warp",
    staticStyle: {
      "padding": "20px 0 0 20px"
    }
  }, [_c('el-col', {
    staticClass: "warp-breadcrum",
    attrs: {
      "span": 24
    }
  }, [_c('el-breadcrumb', {
    attrs: {
      "separator": "/"
    }
  }, [_c('el-breadcrumb-item', {
    attrs: {
      "to": {
        path: '/'
      }
    }
  }, [_c('b', [_vm._v("首页")])]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("快递配置")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("快递列表")])], 1)], 1), _vm._v(" "), _c('el-col', {
    staticClass: "warp-main",
    attrs: {
      "span": 24
    }
  }, [_c('el-button', {
    attrs: {
      "type": "primary",
      "size": "small"
    },
    on: {
      "click": _vm.newone
    }
  }, [_vm._v("新增快递")]), _vm._v(" "), _c('el-table', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.loading),
      expression: "loading"
    }],
    staticStyle: {
      "margin-top": "10px",
      "width": "1200px"
    },
    attrs: {
      "data": _vm.list,
      "border": "",
      "stripe": "",
      "size": "small"
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "id",
      "label": "快递编号",
      "min-width": "200",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "title",
      "label": "快递名称",
      "min-width": "200",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "code",
      "label": "快递简码",
      "min-width": "200",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作",
      "width": "400",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "type": "primary",
            "size": "small"
          },
          on: {
            "click": function($event) {
              _vm.handleEdit(scope.$index, scope.row)
            }
          }
        }, [_vm._v("编辑")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "type": "danger",
            "size": "small"
          },
          on: {
            "click": function($event) {
              _vm.handleDelete(scope.$index, scope.row)
            }
          }
        }, [_vm._v("删除")])]
      }
    }])
  })], 1), _vm._v(" "), _c('el-pagination', {
    staticStyle: {
      "float": "left",
      "margin-top": "20px"
    },
    attrs: {
      "current-page": _vm.currentPage,
      "page-sizes": [10, 20, 30, 40],
      "page-size": _vm.limit,
      "layout": "total,sizes, prev, pager, next, jumper",
      "total": _vm.count,
      "prev-text": "上一页",
      "next-text": "下一页"
    },
    on: {
      "current-change": _vm.handleCurrentChange,
      "size-change": _vm.handleSizeChange
    }
  })], 1), _vm._v(" "), _c('el-col', [_c('el-dialog', {
    staticStyle: {
      "min-width": "500px"
    },
    attrs: {
      "title": _vm.diatitle,
      "visible": _vm.dialogNewVisible,
      "width": "500",
      "center": ""
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogNewVisible = $event
      }
    }
  }, [_c('el-form', {
    ref: "newdelive",
    attrs: {
      "model": _vm.newdelive,
      "label-width": "120px",
      "rules": _vm.rules,
      "status-icon": ""
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "快递名称:",
      "prop": "title"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入快递名称"
    },
    model: {
      value: (_vm.newdelive.title),
      callback: function($$v) {
        _vm.$set(_vm.newdelive, "title", $$v)
      },
      expression: "newdelive.title"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "快递简码:",
      "prop": "code"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入快递简码"
    },
    model: {
      value: (_vm.newdelive.code),
      callback: function($$v) {
        _vm.$set(_vm.newdelive, "code", $$v)
      },
      expression: "newdelive.code"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin-left": "calc(50% - 200px)"
    }
  }, [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.save()
      }
    }
  }, [_vm._v("保 存")]), _vm._v(" "), _c('el-button', {
    on: {
      "click": function($event) {
        _vm.dialogNewVisible = false
      }
    }
  }, [_vm._v("取 消")])], 1)], 1)], 1)], 1), _vm._v(" "), _c('el-col', [_c('el-dialog', {
    attrs: {
      "title": "删除不可恢复，是否确定删除？",
      "visible": _vm.dialogDelVisible,
      "width": "30%"
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogDelVisible = $event
      }
    }
  }, [_c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.submitdel()
      }
    }
  }, [_vm._v("确 定")]), _vm._v(" "), _c('el-button', {
    on: {
      "click": function($event) {
        _vm.dialogDelVisible = false
      }
    }
  }, [_vm._v("取 消")])], 1)])], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 297 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-row', {
    staticClass: "warp",
    staticStyle: {
      "padding": "20px 0 0 20px"
    }
  }, [_c('el-col', {
    staticClass: "warp-breadcrum",
    attrs: {
      "span": 24
    }
  }, [_c('el-breadcrumb', {
    attrs: {
      "separator": "/"
    }
  }, [_c('el-breadcrumb-item', {
    attrs: {
      "to": {
        path: '/'
      }
    }
  }, [_c('b', [_vm._v("首页")])]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("订单管理")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("购物订单")])], 1)], 1), _vm._v(" "), _c('el-col', {
    staticClass: "warp-main",
    attrs: {
      "span": 24
    }
  }, [_c('el-form', {
    attrs: {
      "inline": true
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "订单状态："
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "订单状态",
      "size": "mini"
    },
    on: {
      "change": _vm.getlist
    },
    model: {
      value: (_vm.filter.state),
      callback: function($$v) {
        _vm.$set(_vm.filter, "state", $$v)
      },
      expression: "filter.state"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "待支付",
      "value": "1"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "已支付",
      "value": "2"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "待核销/待发货",
      "value": "3"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "已完成",
      "value": "4"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    staticStyle: {
      "margin-left": "50px"
    },
    attrs: {
      "type": "warning",
      "size": "small"
    }
  }, [_c('a', {
    staticStyle: {
      "color": "#fff"
    },
    attrs: {
      "href": _vm.orderexcel,
      "download": "",
      "mce_href": "#"
    }
  }, [_vm._v("导出Excel表")])])], 1)], 1), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "95%"
    },
    attrs: {
      "data": _vm.list,
      "border": "",
      "stripe": "",
      "size": "small",
      "id": "out-table"
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "id",
      "label": "ID",
      "width": "100",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "number",
      "label": "订单号",
      "min-width": "110",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "user",
      "label": "头像",
      "min-width": "100",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [(scope.row.user) ? _c('img', {
          staticStyle: {
            "width": "40px",
            "height": "40px",
            "border-radius": "50%",
            "margin": "5px 0 -5px 0"
          },
          attrs: {
            "src": scope.row.user.avatarUrl
          }
        }) : _vm._e()]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "user.nickname",
      "label": "用户",
      "min-width": "100",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "price",
      "label": "金额",
      "min-width": "150",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('p', [_vm._v(_vm._s(scope.row.price / 100))])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "state",
      "label": "订单状态",
      "min-width": "200",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [(scope.row.state == 1) ? _c('el-tag', {
          attrs: {
            "type": "info"
          }
        }, [_vm._v("待支付")]) : _vm._e(), _vm._v(" "), (scope.row.state == 2) ? _c('el-tag', {
          attrs: {
            "type": "success"
          }
        }, [_vm._v("已支付")]) : _vm._e(), _vm._v(" "), (scope.row.state == 3 && !scope.row.address) ? _c('el-tag', {
          attrs: {
            "type": "primary"
          }
        }, [_vm._v("待核销")]) : _vm._e(), _vm._v(" "), (scope.row.state == 3 && scope.row.address && scope.row.delivery != 1) ? _c('el-tag', {
          attrs: {
            "type": "primary"
          }
        }, [_vm._v("待发货")]) : _vm._e(), _vm._v(" "), (scope.row.state == 3 && scope.row.delivery == 1) ? _c('el-tag', {
          attrs: {
            "type": "success"
          }
        }, [_vm._v("已发货")]) : _vm._e(), _vm._v(" "), (scope.row.state == 4) ? _c('el-tag', {
          attrs: {
            "type": "warning"
          }
        }, [_vm._v("已完成")]) : _vm._e(), _vm._v(" "), (scope.row.state == 5) ? _c('el-tag', {
          attrs: {
            "type": "danger"
          }
        }, [_vm._v("拼团失败")]) : _vm._e(), _vm._v(" "), (scope.row.state == 6) ? _c('el-tag', {
          attrs: {
            "type": "danger"
          }
        }, [_vm._v("拼团失败")]) : _vm._e()]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "free",
      "label": "中奖状态",
      "min-width": "80",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [(scope.row.free == 1) ? _c('el-tag', {
          attrs: {
            "type": "success"
          }
        }, [_vm._v("免单中奖")]) : _vm._e()]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "created_at",
      "label": "下单时间",
      "min-width": "110",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "seller",
      "label": "核销人",
      "min-width": "100",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [(scope.row.state == '4' && scope.row.seller && scope.row.delivery == 0) ? _c('p', [_vm._v(_vm._s(scope.row.seller.nickname))]) : _vm._e()]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作",
      "min-width": "200",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "type": "primary",
            "size": "mini"
          },
          on: {
            "click": function($event) {
              _vm.handleSee(scope.row)
            }
          }
        }, [_vm._v("订单详情")]), _vm._v(" "), (scope.row.state == 3 && scope.row.address && scope.row.delivery != 1) ? _c('el-button', {
          attrs: {
            "type": "success",
            "size": "mini"
          },
          on: {
            "click": function($event) {
              _vm.handleSend(scope.row)
            }
          }
        }, [_vm._v("发货")]) : _vm._e(), _vm._v(" "), (scope.row.state != 1) ? _c('el-button', {
          attrs: {
            "type": "danger",
            "size": "mini"
          },
          on: {
            "click": function($event) {
              _vm.handleTui(scope.row)
            }
          }
        }, [_vm._v("退款")]) : _vm._e()]
      }
    }])
  })], 1), _vm._v(" "), _c('el-pagination', {
    staticStyle: {
      "float": "left",
      "margin": "20px 0 200px 0px"
    },
    attrs: {
      "current-page": _vm.currentPage,
      "page-sizes": [20, 30, 40, 50, 100, 200],
      "page-size": _vm.limit,
      "layout": "total,sizes, prev, pager, next, jumper",
      "total": _vm.count,
      "prev-text": "上一页",
      "next-text": "下一页"
    },
    on: {
      "current-change": _vm.handleCurrentChange,
      "size-change": _vm.handleSizeChange
    }
  })], 1), _vm._v(" "), _c('el-col', [_c('el-dialog', {
    attrs: {
      "title": "快递信息",
      "visible": _vm.dialogSendVisible,
      "width": "800px",
      "center": ""
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogSendVisible = $event
      }
    }
  }, [_c('el-form', {
    ref: "kuaidi",
    attrs: {
      "model": _vm.kuaidi,
      "label-width": "120px",
      "rules": _vm.sendrule
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "快递名称：",
      "label-width": "120px",
      "prop": "express_id"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "全部"
    },
    on: {
      "change": _vm.xzkauidi
    },
    model: {
      value: (_vm.kuaidi.express_id),
      callback: function($$v) {
        _vm.$set(_vm.kuaidi, "express_id", $$v)
      },
      expression: "kuaidi.express_id"
    }
  }, _vm._l((_vm.expressarr), function(item) {
    return _c('el-option', {
      key: item.id,
      attrs: {
        "label": item.title,
        "value": item.id
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "快递单号：",
      "label-width": "120px",
      "prop": "express_number"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入快递单号"
    },
    model: {
      value: (_vm.kuaidi.express_number),
      callback: function($$v) {
        _vm.$set(_vm.kuaidi, "express_number", $$v)
      },
      expression: "kuaidi.express_number"
    }
  })], 1), _vm._v(" "), _c('el-button', {
    staticStyle: {
      "margin-left": "calc(50% - 28px)"
    },
    attrs: {
      "type": "primary",
      "size": "small"
    },
    on: {
      "click": _vm.submitsend
    }
  }, [_vm._v("提交")])], 1)], 1)], 1), _vm._v(" "), _c('el-col', [_c('el-dialog', {
    attrs: {
      "title": "是否确定退款？",
      "visible": _vm.dialogunTuiVisible,
      "width": "30%"
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogunTuiVisible = $event
      }
    }
  }, [_c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.confirmTuid()
      }
    }
  }, [_vm._v("确 定")]), _vm._v(" "), _c('el-button', {
    on: {
      "click": function($event) {
        _vm.dialogunTuiVisible = false
      }
    }
  }, [_vm._v("取 消")])], 1)])], 1), _vm._v(" "), _c('el-col', [_c('el-dialog', {
    attrs: {
      "title": "商品详情",
      "visible": _vm.dialogSeeVisible,
      "width": "1200px",
      "center": ""
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogSeeVisible = $event
      }
    }
  }, [_c('el-form', {
    attrs: {
      "label-position": "right",
      "label-width": "100px",
      "size": "mini"
    }
  }, [(_vm.orderdetail[0].address) ? _c('el-form-item', {
    staticClass: "fw6",
    attrs: {
      "label": "收货信息："
    }
  }, [_c('div', {
    staticClass: "fw4"
  }, [_vm._v("姓名： " + _vm._s(_vm.orderdetail[0].address.name))]), _vm._v(" "), _c('div', {
    staticClass: "fw4"
  }, [_vm._v("地址： " + _vm._s(_vm.orderdetail[0].address.address))]), _vm._v(" "), _c('div', {
    staticClass: "fw4"
  }, [_vm._v("电话： " + _vm._s(_vm.orderdetail[0].address.phone))])]) : _vm._e(), _vm._v(" "), (_vm.orderdetail[0].express_id != '0') ? _c('el-form-item', {
    staticClass: "fw6",
    attrs: {
      "label": "快递信息："
    }
  }, [_c('div', {
    staticClass: "fw4"
  }, [_vm._v("快递公司编号： " + _vm._s(_vm.orderdetail[0].express_id))]), _vm._v(" "), _c('div', {
    staticClass: "fw4"
  }, [_vm._v("物流单号： " + _vm._s(_vm.orderdetail[0].express_number))])]) : _vm._e(), _vm._v(" "), _c('el-form-item', {
    staticClass: "fw6",
    attrs: {
      "label": "商品信息："
    }
  }, [_c('el-table', {
    attrs: {
      "data": _vm.orderdetail,
      "border": "",
      "stripe": "",
      "size": "mini",
      "id": "out-table"
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "groupBuy.group_id",
      "label": "id",
      "min-width": "100",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "groupBuy.cover",
      "label": "商品缩略图",
      "min-width": "100",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('img', {
          staticStyle: {
            "max-width": "80px",
            "max-height": "64px"
          },
          attrs: {
            "src": scope.row.groupBuy.cover
          }
        })]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "groupBuy.title",
      "label": "商品名称",
      "min-width": "100",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "categroy.category",
      "label": "商品规格",
      "min-width": "100",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [(scope.row.categroy) ? _c('p', [_vm._v(_vm._s(scope.row.categroy.category))]) : _vm._e()]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "groupBuy.group_price",
      "label": "拼团价",
      "min-width": "100",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('p', {
          staticClass: "fw4"
        }, [_vm._v("￥" + _vm._s(scope.row.groupBuy.group_price))])]
      }
    }])
  })], 1)], 1)], 1)], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 298 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('router-view')], 1)
},staticRenderFns: []}

/***/ }),
/* 299 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-row', {
    staticClass: "warp",
    staticStyle: {
      "padding": "20px 0 0 20px"
    }
  }, [_c('el-col', {
    staticClass: "warp-breadcrum",
    attrs: {
      "span": 24
    }
  }, [_c('el-breadcrumb', {
    attrs: {
      "separator": "/"
    }
  }, [_c('el-breadcrumb-item', {
    attrs: {
      "to": {
        path: '/'
      }
    }
  }, [_c('b', [_vm._v("首页")])]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("用户管理")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("用户列表")])], 1)], 1), _vm._v(" "), _c('el-col', {
    staticClass: "warp-main",
    attrs: {
      "span": 24
    }
  }, [_c('el-table', {
    staticStyle: {
      "width": "60%"
    },
    attrs: {
      "data": _vm.list,
      "border": "",
      "stripe": "",
      "size": "small"
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "id",
      "label": "用户编号",
      "width": "100",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "nickname",
      "label": "昵称",
      "min-width": "140",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "avatarUrl",
      "label": "头像",
      "min-width": "100",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('img', {
          staticStyle: {
            "width": "40px",
            "height": "40px",
            "border-radius": "50%",
            "margin": "5px 0 -5px 0"
          },
          attrs: {
            "src": scope.row.avatarUrl
          }
        })]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "created_at",
      "label": "注册日期",
      "width": "200",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作",
      "min-width": "200",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [(scope.row.seller == 0) ? _c('el-button', {
          attrs: {
            "type": "primary",
            "size": "mini"
          },
          on: {
            "click": function($event) {
              _vm.bindcheck(scope.$index, scope.row)
            }
          }
        }, [_vm._v("成为核销")]) : _vm._e(), _vm._v(" "), (scope.row.seller == 1) ? _c('el-button', {
          attrs: {
            "type": "danger",
            "size": "mini"
          },
          on: {
            "click": function($event) {
              _vm.bindcheck(scope.$index, scope.row)
            }
          }
        }, [_vm._v("取消核销")]) : _vm._e()]
      }
    }])
  })], 1), _vm._v(" "), _c('el-pagination', {
    staticStyle: {
      "float": "left",
      "margin-top": "20px"
    },
    attrs: {
      "current-page": _vm.currentPage,
      "page-sizes": [10, 20, 30, 40],
      "page-size": _vm.limit,
      "layout": "total,sizes, prev, pager, next, jumper",
      "total": _vm.count,
      "prev-text": "上一页",
      "next-text": "下一页"
    },
    on: {
      "current-change": _vm.handleCurrentChange,
      "size-change": _vm.handleSizeChange
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 300 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-row', {
    staticClass: "warp",
    staticStyle: {
      "padding": "20px 0 0 20px"
    }
  }, [_c('el-col', {
    staticClass: "warp-breadcrum",
    attrs: {
      "span": 24
    }
  }, [_c('el-breadcrumb', {
    attrs: {
      "separator": "/"
    }
  }, [_c('el-breadcrumb-item', {
    attrs: {
      "to": {
        path: '/'
      }
    }
  }, [_c('b', [_vm._v("首页")])]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("轮播管理")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("轮播列表")])], 1)], 1), _vm._v(" "), _c('el-col', {
    staticClass: "warp-main",
    attrs: {
      "span": 24
    }
  }, [_c('el-row', [_c('el-form', {
    attrs: {
      "inline": true
    }
  }, [_c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary",
      "size": "mini"
    },
    on: {
      "click": _vm.newone
    }
  }, [_vm._v("新增轮播")])], 1)], 1), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "801px"
    },
    attrs: {
      "data": _vm.list,
      "border": "",
      "stripe": "",
      "size": "small"
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "id",
      "label": "轮播编号",
      "width": "200",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "href",
      "label": "轮播图片",
      "width": "300",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('img', {
          staticStyle: {
            "max-width": "90px",
            "max-height": "90px"
          },
          attrs: {
            "src": scope.row.href
          }
        })]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作",
      "width": "300",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "type": "primary",
            "size": "small"
          },
          on: {
            "click": function($event) {
              _vm.handleEdit(scope.$index, scope.row)
            }
          }
        }, [_vm._v("编辑")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "type": "danger",
            "size": "small"
          },
          on: {
            "click": function($event) {
              _vm.handleDelete(scope.$index, scope.row)
            }
          }
        }, [_vm._v("删除")])]
      }
    }])
  })], 1), _vm._v(" "), _c('el-pagination', {
    staticStyle: {
      "float": "left",
      "margin-top": "20px"
    },
    attrs: {
      "current-page": _vm.currentPage,
      "page-sizes": [10, 20, 30, 40],
      "page-size": _vm.limit,
      "layout": "total,sizes, prev, pager, next, jumper",
      "total": _vm.count,
      "prev-text": "上一页",
      "next-text": "下一页"
    },
    on: {
      "current-change": _vm.handleCurrentChange,
      "size-change": _vm.handleSizeChange
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', [_c('el-dialog', {
    staticStyle: {
      "min-width": "500px"
    },
    attrs: {
      "title": _vm.diatitle,
      "visible": _vm.dialogNewVisible,
      "width": "500",
      "center": ""
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogNewVisible = $event
      }
    }
  }, [_c('el-form', {
    ref: "newadv",
    attrs: {
      "model": _vm.newadv,
      "label-width": "120px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "跳转链接：",
      "prop": "link"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "500px"
    },
    attrs: {
      "placeholder": "请输入跳转链接"
    },
    model: {
      value: (_vm.link),
      callback: function($$v) {
        _vm.link = $$v
      },
      expression: "link"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "上传图片："
    }
  }, [_c('el-upload', {
    staticClass: "upload-demo",
    attrs: {
      "list-type": "picture-card",
      "action": _vm.upurl,
      "data": _vm.uptoken,
      "on-success": _vm.handleSuccess,
      "on-exceed": _vm.handleExceed,
      "file-list": _vm.postarr,
      "limit": 1,
      "show-file-list": true,
      "accept": "image/*"
    }
  }, [_c('i', {
    staticClass: "el-icon-plus"
  }), _vm._v(" "), _c('div', {
    staticClass: "el-upload__tip",
    attrs: {
      "slot": "tip"
    },
    slot: "tip"
  }, [_vm._v("可上传JPG/PNG文件，建议图片比例为16:9")])])], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin-left": "calc(50% - 200px)"
    }
  }, [_c('el-button', {
    attrs: {
      "size": "small",
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.save()
      }
    }
  }, [_vm._v("保 存")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "size": "small"
    },
    on: {
      "click": function($event) {
        _vm.dialogNewVisible = false
      }
    }
  }, [_vm._v("取 消")])], 1)], 1)], 1)], 1), _vm._v(" "), _c('el-col', [_c('el-dialog', {
    attrs: {
      "title": "删除不可恢复，是否确定删除？",
      "visible": _vm.dialogDelVisible,
      "width": "30%"
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogDelVisible = $event
      }
    }
  }, [_c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    attrs: {
      "size": "small",
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.submitdel()
      }
    }
  }, [_vm._v("确 定")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "size": "small"
    },
    on: {
      "click": function($event) {
        _vm.dialogDelVisible = false
      }
    }
  }, [_vm._v("取 消")])], 1)])], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 301 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-row', {
    staticClass: "warp",
    staticStyle: {
      "padding": "20px 0 0 20px"
    }
  }, [_c('el-col', {
    staticClass: "warp-breadcrum",
    attrs: {
      "span": 24
    }
  }, [_c('el-breadcrumb', {
    attrs: {
      "separator": "/"
    }
  }, [_c('el-breadcrumb-item', {
    attrs: {
      "to": {
        path: '/'
      }
    }
  }, [_c('b', [_vm._v("首页")])]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("产品管理")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("产品列表")])], 1)], 1), _vm._v(" "), _c('el-col', {
    staticClass: "warp-main",
    attrs: {
      "span": 24
    }
  }, [_c('el-form', {
    attrs: {
      "inline": true
    }
  }, [_c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary",
      "size": "mini"
    },
    on: {
      "click": _vm.newone
    }
  }, [_vm._v("发布产品")])], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin-left": "20px"
    },
    attrs: {
      "label": "语言选择：",
      "prop": "language"
    }
  }, [_c('el-select', {
    attrs: {
      "placheolder": "请选择语言"
    },
    on: {
      "change": _vm.getLag
    },
    model: {
      value: (_vm.select),
      callback: function($$v) {
        _vm.select = $$v
      },
      expression: "select"
    }
  }, _vm._l((_vm.language), function(item) {
    return _c('el-option', {
      key: item.key,
      attrs: {
        "label": item.value,
        "value": item.key
      }
    })
  }))], 1)], 1), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "1650px"
    },
    attrs: {
      "data": _vm.list,
      "border": "",
      "stripe": "",
      "size": "small"
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "id",
      "label": "ID",
      "min-width": "50",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "title",
      "label": "标题",
      "min-width": "140",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "cover",
      "label": "产品图片",
      "min-width": "80",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('img', {
          staticStyle: {
            "max-width": "50px",
            "max-height": "50px"
          },
          attrs: {
            "src": scope.row.cover
          }
        })]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "material",
      "label": "主要材料",
      "min-width": "80",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "category_cover",
      "label": "规模图",
      "min-width": "80",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('img', {
          staticStyle: {
            "max-width": "50px",
            "max-height": "50px"
          },
          attrs: {
            "src": scope.row.category_cover
          }
        })]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "排序",
      "width": "100",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-input', {
          attrs: {
            "size": "mini",
            "type": "number",
            "min": "0"
          },
          on: {
            "change": function($event) {
              _vm.changeSort(scope.row.id, scope.row.sort)
            }
          },
          model: {
            value: (scope.row.sort),
            callback: function($$v) {
              _vm.$set(scope.row, "sort", $$v)
            },
            expression: "scope.row.sort"
          }
        })]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作",
      "min-width": "140",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "type": "primary",
            "size": "mini"
          },
          on: {
            "click": function($event) {
              _vm.handleEdit(scope.$index, scope.row)
            }
          }
        }, [_vm._v("修改")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "type": "danger",
            "size": "mini"
          },
          on: {
            "click": function($event) {
              _vm.handleDelete(scope.$index, scope.row)
            }
          }
        }, [_vm._v("删除")])]
      }
    }])
  })], 1), _vm._v(" "), _c('el-pagination', {
    staticStyle: {
      "float": "left",
      "margin-top": "20px"
    },
    attrs: {
      "current-page": _vm.currentPage,
      "page-sizes": [10, 20, 30, 40],
      "page-size": _vm.limit,
      "layout": "total,sizes, prev, pager, next, jumper",
      "total": _vm.count,
      "prev-text": "上一页",
      "next-text": "下一页"
    },
    on: {
      "current-change": _vm.handleCurrentChange,
      "size-change": _vm.handleSizeChange
    }
  })], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "删除不可恢复，是否确定删除？",
      "visible": _vm.dialogDelVisible,
      "width": "30%"
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogDelVisible = $event
      }
    }
  }, [_c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.submitdel()
      }
    }
  }, [_vm._v("确 定")]), _vm._v(" "), _c('el-button', {
    on: {
      "click": function($event) {
        _vm.dialogDelVisible = false
      }
    }
  }, [_vm._v("取 消")])], 1)])], 1)
},staticRenderFns: []}

/***/ }),
/* 302 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-row', {
    staticClass: "warp",
    staticStyle: {
      "padding": "20px 0 0 20px"
    }
  }, [_c('el-col', {
    staticClass: "warp-breadcrum",
    attrs: {
      "span": 24
    }
  }, [_c('el-breadcrumb', {
    attrs: {
      "separator": "/"
    }
  }, [_c('el-breadcrumb-item', {
    attrs: {
      "to": {
        path: '/'
      }
    }
  }, [_c('b', [_vm._v("首页")])]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("首页广告管理")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("广告列表")])], 1)], 1), _vm._v(" "), _c('el-col', {
    staticClass: "warp-main",
    attrs: {
      "span": 24
    }
  }, [_c('el-row', [_c('el-form', {
    attrs: {
      "inline": true
    }
  }, [_c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary",
      "size": "mini"
    },
    on: {
      "click": _vm.newone
    }
  }, [_vm._v("新增广告")])], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "语言选择：",
      "prop": "language"
    }
  }, [_c('el-select', {
    attrs: {
      "placheolder": "请选择语言"
    },
    on: {
      "change": _vm.getLag
    },
    model: {
      value: (_vm.select),
      callback: function($$v) {
        _vm.select = $$v
      },
      expression: "select"
    }
  }, _vm._l((_vm.language), function(item) {
    return _c('el-option', {
      key: item.key,
      attrs: {
        "label": item.value,
        "value": item.key
      }
    })
  }))], 1)], 1), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "801px"
    },
    attrs: {
      "data": _vm.list,
      "border": "",
      "stripe": "",
      "size": "small"
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "id",
      "label": "广告编号",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "href",
      "label": "广告图片",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('img', {
          staticStyle: {
            "max-width": "90px",
            "max-height": "90px"
          },
          attrs: {
            "src": scope.row.href
          }
        })]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "type": "primary",
            "size": "small"
          },
          on: {
            "click": function($event) {
              _vm.handleEdit(scope.$index, scope.row)
            }
          }
        }, [_vm._v("编辑")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "type": "danger",
            "size": "small"
          },
          on: {
            "click": function($event) {
              _vm.handleDelete(scope.$index, scope.row)
            }
          }
        }, [_vm._v("删除")])]
      }
    }])
  })], 1), _vm._v(" "), _c('el-pagination', {
    staticStyle: {
      "float": "left",
      "margin-top": "20px"
    },
    attrs: {
      "current-page": _vm.currentPage,
      "page-sizes": [10, 20, 30, 40],
      "page-size": _vm.limit,
      "layout": "total,sizes, prev, pager, next, jumper",
      "total": _vm.count,
      "prev-text": "上一页",
      "next-text": "下一页"
    },
    on: {
      "current-change": _vm.handleCurrentChange,
      "size-change": _vm.handleSizeChange
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', [_c('el-dialog', {
    staticStyle: {
      "min-width": "500px"
    },
    attrs: {
      "title": _vm.diatitle,
      "visible": _vm.dialogNewVisible,
      "width": "500",
      "center": ""
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogNewVisible = $event
      }
    }
  }, [_c('el-form', {
    ref: "newadv",
    attrs: {
      "model": _vm.newadv,
      "label-width": "120px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "语言选择：",
      "prop": "language"
    }
  }, [_c('el-select', {
    attrs: {
      "placheolder": "请选择语言"
    },
    on: {
      "change": _vm.getLag
    },
    model: {
      value: (_vm.select),
      callback: function($$v) {
        _vm.select = $$v
      },
      expression: "select"
    }
  }, _vm._l((_vm.language), function(item) {
    return _c('el-option', {
      key: item.key,
      attrs: {
        "label": item.value,
        "value": item.key
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "广告类型："
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择"
    },
    on: {
      "change": function($event) {
        _vm.getPro()
      }
    },
    model: {
      value: (_vm.adv_type),
      callback: function($$v) {
        _vm.adv_type = $$v
      },
      expression: "adv_type"
    }
  }, _vm._l((_vm.adv_list), function(item) {
    return _c('el-option', {
      key: item.key,
      attrs: {
        "label": item.value,
        "value": item.key
      }
    })
  }))], 1), _vm._v(" "), (_vm.adv_type != 5) ? _c('el-form-item', {
    attrs: {
      "label": "广告产品："
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择"
    },
    model: {
      value: (_vm.pro_id),
      callback: function($$v) {
        _vm.pro_id = $$v
      },
      expression: "pro_id"
    }
  }, _vm._l((_vm.pro_list), function(item) {
    return _c('el-option', {
      key: item.id,
      attrs: {
        "label": item.title,
        "value": item.id
      }
    })
  }))], 1) : _vm._e(), _vm._v(" "), (_vm.adv_type == 5) ? _c('el-form-item', {
    attrs: {
      "label": "跳转链接：",
      "prop": "link"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "400px"
    },
    attrs: {
      "placeholder": "请输入跳转链接",
      "maxlength": "200"
    },
    model: {
      value: (_vm.link),
      callback: function($$v) {
        _vm.link = $$v
      },
      expression: "link"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "上传图片："
    }
  }, [_c('el-upload', {
    staticClass: "upload-demo",
    attrs: {
      "action": _vm.upurl,
      "data": _vm.uptoken,
      "on-success": _vm.handleSuccess,
      "on-exceed": _vm.handleExceed,
      "limit": 1,
      "show-file-list": true,
      "accept": "image/*"
    }
  }, [_c('div', {
    staticStyle: {
      "width": "150px",
      "border": "1px solid #ccc"
    }
  }, [_c('img', {
    staticStyle: {
      "width": "100%",
      "display": "block"
    },
    attrs: {
      "src": _vm.imgSrc,
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "el-upload__tip",
    attrs: {
      "slot": "tip"
    },
    slot: "tip"
  }, [_vm._v("可上传JPG/PNG文件，建议图片比例为16:9")])])], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin-left": "calc(50% - 200px)"
    }
  }, [_c('el-button', {
    attrs: {
      "size": "small",
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.save()
      }
    }
  }, [_vm._v("保 存")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "size": "small"
    },
    on: {
      "click": function($event) {
        _vm.dialogNewVisible = false
      }
    }
  }, [_vm._v("取 消")])], 1)], 1)], 1)], 1), _vm._v(" "), _c('el-col', [_c('el-dialog', {
    attrs: {
      "title": "删除不可恢复，是否确定删除？",
      "visible": _vm.dialogDelVisible,
      "width": "30%"
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogDelVisible = $event
      }
    }
  }, [_c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    attrs: {
      "size": "small",
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.submitdel()
      }
    }
  }, [_vm._v("确 定")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "size": "small"
    },
    on: {
      "click": function($event) {
        _vm.dialogDelVisible = false
      }
    }
  }, [_vm._v("取 消")])], 1)])], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-row', {
    staticClass: "warp",
    staticStyle: {
      "padding": "20px 0 0 20px"
    }
  }, [_c('el-col', {
    staticClass: "warp-breadcrum",
    attrs: {
      "span": 24
    }
  }, [_c('el-breadcrumb', {
    attrs: {
      "separator": "/"
    }
  }, [_c('el-breadcrumb-item', {
    attrs: {
      "to": {
        path: '/'
      }
    }
  }, [_c('b', [_vm._v("首页")])]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("产品列表")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("新增产品")])], 1)], 1), _vm._v(" "), _c('el-col', {
    staticClass: "warp-main",
    attrs: {
      "span": 24
    }
  }, [_c('el-form', {
    ref: "newone",
    staticStyle: {
      "width": "1000px"
    },
    attrs: {
      "label-width": "130px",
      "width": "900px",
      "center": "",
      "rules": _vm.rules,
      "model": _vm.newone
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "语言选择：",
      "prop": "language"
    }
  }, [_c('el-select', {
    attrs: {
      "placheolder": "请选择语言"
    },
    on: {
      "change": _vm.getLag
    },
    model: {
      value: (_vm.select),
      callback: function($$v) {
        _vm.select = $$v
      },
      expression: "select"
    }
  }, _vm._l((_vm.language), function(item) {
    return _c('el-option', {
      key: item.key,
      attrs: {
        "label": item.value,
        "value": item.key
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "上级分类：",
      "prop": "parent_id"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择分类"
    },
    on: {
      "change": _vm.getPid
    },
    model: {
      value: (_vm.parent_id),
      callback: function($$v) {
        _vm.parent_id = $$v
      },
      expression: "parent_id"
    }
  }, _vm._l((_vm.typeArr), function(item) {
    return _c('el-option', {
      key: item.id,
      attrs: {
        "label": item.title,
        "value": item.id
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "商品分类：",
      "prop": "type"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择分类"
    },
    model: {
      value: (_vm.newone.type_id),
      callback: function($$v) {
        _vm.$set(_vm.newone, "type_id", $$v)
      },
      expression: "newone.type_id"
    }
  }, _vm._l((_vm.parentArr), function(item) {
    return _c('el-option', {
      key: item.parent_id,
      attrs: {
        "label": item.title,
        "value": item.id
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "标题：",
      "prop": "title"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "500px"
    },
    attrs: {
      "placeholder": "请输入产品标题（20字以内）",
      "maxlength": "20"
    },
    model: {
      value: (_vm.newone.title),
      callback: function($$v) {
        _vm.$set(_vm.newone, "title", $$v)
      },
      expression: "newone.title"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "小标题：",
      "prop": "sub_title"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "500px"
    },
    attrs: {
      "placeholder": "请输入产品小标题（20字以内）",
      "maxlength": "20"
    },
    model: {
      value: (_vm.newone.sub_title),
      callback: function($$v) {
        _vm.$set(_vm.newone, "sub_title", $$v)
      },
      expression: "newone.sub_title"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "产品图片：",
      "prop": "cover"
    }
  }, [_c('el-upload', {
    staticClass: "upload-demo",
    attrs: {
      "action": _vm.upurl,
      "data": _vm.uptoken,
      "on-success": _vm.handleSuccess,
      "show-file-list": false,
      "accept": "image/*"
    }
  }, [_c('img', {
    staticClass: "pre-img",
    staticStyle: {
      "width": "146px",
      "height": "146px",
      "border": "1px dashed #ccc",
      "border-radius": "6px",
      "display": "block",
      "margin-top": "1px"
    },
    attrs: {
      "src": _vm.newone.cover
    }
  })])], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "主要材料",
      "prop": "material"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "500px"
    },
    attrs: {
      "placeholder": "请输入材料名称（20字以内）",
      "maxlength": "20"
    },
    model: {
      value: (_vm.newone.material),
      callback: function($$v) {
        _vm.$set(_vm.newone, "material", $$v)
      },
      expression: "newone.material"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "规格："
    }
  }, [_vm._l((_vm.categories), function(guige, index) {
    return _c('div', [_c('el-input', {
      staticStyle: {
        "display": "block",
        "width": "200px",
        "margin": "5px 5px 5px 0"
      },
      attrs: {
        "size": "mini",
        "placeholder": "规格名"
      },
      model: {
        value: (guige.title),
        callback: function($$v) {
          _vm.$set(guige, "title", $$v)
        },
        expression: "guige.title"
      }
    }), _vm._v(" "), _vm._l((guige.details), function(item, index) {
      return _c('div', {
        staticStyle: {
          "display": "inline-block"
        }
      }, [_c('el-input', {
        staticStyle: {
          "width": "130px",
          "margin": "5px 5px 5px 0"
        },
        attrs: {
          "size": "mini",
          "placeholder": "详细内容"
        },
        model: {
          value: (item.title),
          callback: function($$v) {
            _vm.$set(item, "title", $$v)
          },
          expression: "item.title"
        }
      })], 1)
    }), _vm._v(" "), _c('div', {
      staticStyle: {
        "display": "block"
      }
    }, [_c('el-button', {
      staticStyle: {
        "margin": "5px 5px 5px 0"
      },
      attrs: {
        "type": "warning",
        "size": "mini"
      },
      on: {
        "click": function($event) {
          $event.preventDefault();
          _vm.adddetail(index)
        }
      }
    }, [_vm._v("新增详细")]), _vm._v(" "), _c('el-button', {
      staticStyle: {
        "margin": "5px 5px 5px 0"
      },
      attrs: {
        "type": "danger",
        "size": "mini"
      },
      on: {
        "click": function($event) {
          $event.preventDefault();
          _vm.removeguige(guige)
        }
      }
    }, [_vm._v("删除规格")])], 1)], 2)
  }), _vm._v(" "), _c('el-button', {
    staticStyle: {
      "margin-top": "10px"
    },
    attrs: {
      "type": "primary",
      "size": "mini"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.addguige()
      }
    }
  }, [_vm._v("新增规格")])], 2), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "规格图片",
      "prop": "pictures"
    }
  }, [_c('el-upload', {
    staticClass: "upload-demo",
    attrs: {
      "action": _vm.upurl,
      "data": _vm.uptoken,
      "on-success": _vm.guigeSuccess,
      "show-file-list": false,
      "accept": "image/*"
    },
    model: {
      value: (_vm.category_cover),
      callback: function($$v) {
        _vm.category_cover = $$v
      },
      expression: "category_cover"
    }
  }, [_c('img', {
    staticClass: "pre-img",
    staticStyle: {
      "width": "146px",
      "height": "146px",
      "border": "1px dashed #ccc",
      "border-radius": "6px",
      "display": "block",
      "margin-top": "1px"
    },
    attrs: {
      "src": this.category_cover
    }
  })])], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "区域："
    }
  }, [_vm._l((_vm.areas), function(item, index) {
    return _c('div', {
      key: index
    }, [_c('div', {
      staticStyle: {
        "display": "inline-block"
      }
    }, [_c('el-form-item', {
      attrs: {
        "label": "区域名称："
      }
    }, [_c('el-input', {
      staticStyle: {
        "width": "300px"
      },
      attrs: {
        "maxlength": "20",
        "placeholder": "请输入区域名称"
      },
      model: {
        value: (item.title),
        callback: function($$v) {
          _vm.$set(item, "title", $$v)
        },
        expression: "item.title"
      }
    })], 1), _vm._v(" "), _c('el-form-item', {
      attrs: {
        "label": "区域图片："
      }
    }, [_c('el-upload', {
      attrs: {
        "accept": "image/*",
        "action": _vm.upurl,
        "data": _vm.uptoken,
        "onBind": index,
        "on-success": _vm.HomeSuccess,
        "show-file-list": false
      },
      model: {
        value: (_vm.areas[index].icon),
        callback: function($$v) {
          _vm.$set(_vm.areas[index], "icon", $$v)
        },
        expression: "areas[index].icon"
      }
    }, [_c('img', {
      staticClass: "pre-img",
      staticStyle: {
        "width": "146px",
        "border": "1px dashed #ccc",
        "border-radius": "6px",
        "display": "block",
        "margin-top": "1px"
      },
      attrs: {
        "src": _vm.areas[index].icon
      }
    })])], 1)], 1)])
  }), _vm._v(" "), _c('el-button', {
    staticStyle: {
      "margin-top": "10px"
    },
    attrs: {
      "type": "primary",
      "size": "mini"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.addarea()
      }
    }
  }, [_vm._v("新增区域")])], 2), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "图片展示："
    }
  }, [_c('el-upload', {
    staticClass: "upload-img",
    attrs: {
      "action": _vm.upurl,
      "data": _vm.uptoken,
      "list-type": "picture-card",
      "file-list": _vm.newone.pictures,
      "on-remove": _vm.handleRemove,
      "on-success": _vm.handlelistSuccess,
      "accept": "image/*"
    },
    model: {
      value: (_vm.newone.pictures),
      callback: function($$v) {
        _vm.$set(_vm.newone, "pictures", $$v)
      },
      expression: "newone.pictures"
    }
  }, [_c('img', {
    staticClass: "pre-img",
    staticStyle: {
      "width": "146px",
      "height": "150px",
      "margin-top": "1px",
      "display": "block"
    },
    attrs: {
      "src": __webpack_require__(254)
    }
  })])], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "上传参数表"
    }
  }, [_c('el-upload', {
    attrs: {
      "action": _vm.upurl,
      "data": _vm.uptoken,
      "limit": 1,
      "accept": ".xlsx",
      "on-success": _vm.ExcelSuccess,
      "file-list": _vm.newone.parameter
    },
    model: {
      value: (_vm.newone.parameter),
      callback: function($$v) {
        _vm.$set(_vm.newone, "parameter", $$v)
      },
      expression: "newone.parameter"
    }
  }, [_c('el-button', {
    attrs: {
      "size": "small",
      "type": "primary"
    }
  }, [_vm._v("点击上传")])], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "类似产品："
    }
  }, [_c('el-checkbox-group', {
    model: {
      value: (_vm.newone.pro_id),
      callback: function($$v) {
        _vm.$set(_vm.newone, "pro_id", $$v)
      },
      expression: "newone.pro_id"
    }
  }, _vm._l((_vm.newone.products), function(item) {
    return _c('el-checkbox-button', {
      key: item.key,
      attrs: {
        "label": item.key,
        "border": ""
      }
    }, [_vm._v(_vm._s(item.title))])
  }))], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin-top": "20px"
    }
  }, [_c('el-button', {
    attrs: {
      "type": "primary",
      "size": "mini"
    },
    on: {
      "click": function($event) {
        _vm.save()
      }
    }
  }, [_vm._v("提交")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "size": "mini"
    },
    on: {
      "click": function($event) {
        _vm.golist()
      }
    }
  }, [_vm._v("取 消")])], 1)], 1)], 1)], 1)
},staticRenderFns: []}

/***/ })
],[156]);