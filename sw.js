/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","72ff9b152c7e573f2b5599f0faf82797"],["/404/404.css","08001da80cf3c965178410cc1bb9c58b"],["/404/404.jpg","f8adbcdb0b13ffd80ee097e232e412f4"],["/about/index.html","4915a39bf981b3c95f3b428c98a010e1"],["/archives/2018/08/index.html","7f24bb7535891620ce112d24f33e80d2"],["/archives/2018/10/index.html","e966e7e56b51deacbfe8b056d6c28496"],["/archives/2018/index.html","4b7faf167366f9fa23efb098156625ce"],["/archives/2019/03/index.html","00fd68e26da483816dcbf091fa44710a"],["/archives/2019/04/index.html","18251b7ee9a42f3f5e010bb9bd21926f"],["/archives/2019/07/index.html","a1fd130d2c1c4c3dbab351285868b06e"],["/archives/2019/index.html","4ba641879e7745f0c2e03005126656e4"],["/archives/2020/04/index.html","786e98924052502a90ab2300e2cf1563"],["/archives/2020/index.html","154c648681c3e62694c39fad82dacdbb"],["/archives/index.html","5c81f02943f6c26f2c7f33aae3424415"],["/archives/page/2/index.html","96f4a11ee7dd7639be6678c7a9f1fe6d"],["/archives/page/3/index.html","115778b943e8df9b86c68540af8086bf"],["/categories/Hexo/index.html","1e594f24ef5971529525eb3c5dc92411"],["/categories/Steam/index.html","f290bb991693a135e6e4ecb077b84fc7"],["/categories/index.html","df1c4bbd6ace406d28ef4e87c45d5c96"],["/categories/动漫/index.html","e7716343d819fe8454c37fcc01d5e642"],["/categories/动漫/オーバーロード（OVERLORD）/index.html","6225f4109285079f9a28ff7947268097"],["/categories/游戏/Minecraft/Hypixel/index.html","b13f7e5db28a3c06deb5724108335fd0"],["/categories/游戏/Minecraft/Imbox/index.html","e7c43a52f3da8886b88192a0d076ff29"],["/categories/游戏/Minecraft/index.html","c8e4d390b4f9461bd29ff81590d9a3a9"],["/categories/游戏/index.html","fc8fad64e5a2e1493793f28cad2e96a6"],["/categories/游戏/战地Ⅴ/index.html","35bf094bc6ef4e6eb5b8f0ff73a6e41f"],["/categories/软件/Maya/index.html","0cefcc9ef14e228c6032655d5e87d7eb"],["/categories/软件/index.html","ebbe8cdf845994152d4269dfedfcd437"],["/css/main.css","869f15ef2c21d0e60a2cff57bda0658e"],["/fonts/chinese-zodiac.eot","732f7594f7de8a566ae31ff704dd3e16"],["/fonts/chinese-zodiac.woff","de6297d6703fdc83798000ee1bff183d"],["/fonts/chinese-zodiac.woff2","454bc56fd19872218bd1e02cb0a2ee3c"],["/guestbook/index.html","e1c1abdf8733fe84447c5607cf47b0d7"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/alipay.png","829278a659169b9dbff45e1b71a8690d"],["/images/apple-touch-icon-next.png","c308494b5ccc0f96887c6a5e9c95d3c8"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","082f47f6a60f432e7ed4dc59aac518ce"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","f0fca3451f4b72f410bfd362581c17c5"],["/images/favicon-32x32-next.png","a501af46d1ff08f45f55612bda1fb9b6"],["/images/logo.png","082f47f6a60f432e7ed4dc59aac518ce"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","0b1836f275d9cc3b980c7077f4854f8f"],["/index.html","879a115eb4d3a80f4b7458444885aa89"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/cursor/fireworks.js","a313af9166d96fbcc82333d6b4e76a70"],["/js/fold_action.js","6d9697819721c5118f0bb1580f69d128"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/tw_cn.js","8e59aeafb481906e86bb91c7a269710d"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/other/index.html","c0b9f4636cc8e79a368115d862e37015"],["/other/picture/index.html","635922d4128c24a11e4b429cce40774c"],["/other/schedule/index.html","1e559c226c1e311fbaa1a5824eedef31"],["/page/2/index.html","efbb8e4fbcd3baea2153186b797fb256"],["/page/3/index.html","24d0d6eada71e2ecac1ac1bff8116dac"],["/posts/Anime/index.html","4dbe101e643a316ef252e25a36a4932c"],["/posts/Arnold/index.html","3d4f387d81e3d7e1015a6a49325fc655"],["/posts/Battlefield_1/index.html","ae461aca03ca60f07698d8a463a82e8a"],["/posts/Battlefield_2/index.html","c3b4097a0e4b34405641526582bcbb00"],["/posts/Code/index.html","5f1e36dbb21076ce3e8cc32d8c3a2731"],["/posts/Hypixel_BedWars/index.html","76610946a53498303757e7ac8984b2fd"],["/posts/Imbox/index.html","71ae1940e43baf4c2ea1565d3f46728d"],["/posts/OVERLORD_1/index.html","0074f4a3c40bcc365cf9242c01a4bd15"],["/posts/OVERLORD_2/index.html","b983202bd815498b902e946e8bc47478"],["/posts/OVERLORD_All/index.html","4d25eba149194e02a10439a303083695"],["/posts/SteamDB/index.html","9736a632f2100705b830e97e6d7475e7"],["/posts/Steam_Buy/index.html","effe7ea40b91a769389af30525fead09"],["/posts/Steam_Warning/index.html","caa60337bb7acbc27e55d4e2cdd49de7"],["/sw-register.js","2cb617aa60f3391bace71fc22c07fa60"],["/tags/Arnold/index.html","603fa1513a70a584b8d280bcbac857ff"],["/tags/Hexo/index.html","8a236ed2ee60cb5c1e5ea0816566d938"],["/tags/Hypixel/index.html","f56889d9fdecc6660e71db425316e095"],["/tags/Imbox/index.html","4b47e3e6687d6a6228b462a2991e9461"],["/tags/Maya/index.html","bdda9aa511cd73737d86a5914a160b6d"],["/tags/Minecraft/index.html","a94534b177a35c9be8f46d3d0f8d76f1"],["/tags/OVERLORD/index.html","1fd8cec77ca5a69d3a587e0ab3884fee"],["/tags/Steam/index.html","c1ae0464224a2dd41ac8def8df2a63a0"],["/tags/SteamDB/index.html","98aadb71edc59214d0cfb39f89a9e8f8"],["/tags/index.html","b9b4fb450c139a3793c89867684cdcd8"],["/tags/动漫/index.html","6c7fd0bd27ca558851ca3220d1e5ad89"],["/tags/战地/index.html","295a5e73863974986766bb53aa91f3b2"],["/tags/战火试炼/index.html","fdd2d0bbb5d380205c311d7478dfea55"],["/tags/插件/index.html","d9198d1c2daa4362e23d1eb28fe3160b"],["/tags/游戏/index.html","7f36997e0902564d7a8c9fad60062df0"],["/tags/破解/index.html","7b32507563b5d2fa3c4ed7641c25e66e"],["/tags/软件/index.html","ce911c8edb2220b1d9e6212a497f3674"],["/tags/闪电突袭/index.html","ddb1d41a790f9cb79a6aeb798ff35092"],["/tags/阿诺德/index.html","d8c79accc780b1ec62aa988e063c7771"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
