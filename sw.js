/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","f3b2bd0693be912f6246f630ca70a923"],["/404/404.css","08001da80cf3c965178410cc1bb9c58b"],["/404/404.jpg","f8adbcdb0b13ffd80ee097e232e412f4"],["/about/index.html","62b2b4e59e156611801d03c66292242a"],["/archives/2018/08/index.html","d843fa66966b22f187b2c37eb22ad3dd"],["/archives/2018/10/index.html","8eb807a2dd24f640fa686b567117908d"],["/archives/2018/index.html","091aff8f51f0949f2d700fb174ee580b"],["/archives/2019/03/index.html","0247e8fef60a8775c9cff041cc3a9940"],["/archives/2019/04/index.html","58d653748dd994805283507a0a92ed95"],["/archives/2019/07/index.html","b7594e2ba528f6edf6c8ac1e999350ec"],["/archives/2019/index.html","4b7b193575cd4446fc7151c3baf03e90"],["/archives/2020/04/index.html","f8bfd3f9846b66a0c8a8a3855d79f080"],["/archives/2020/index.html","6cae45ec7623e7dd456f5f70f27e2078"],["/archives/index.html","14fb4da6c09935199dfb05eb83cae84b"],["/archives/page/2/index.html","0baa104ddb156ed1bf712134ceb4987b"],["/archives/page/3/index.html","cf5365d17f194594b77b145b93193286"],["/categories/Hexo/index.html","cb91e704b154b52a0eb27b8cec362ff4"],["/categories/Steam/index.html","4a83c6f1c8785cd5c54a9a9f6c2f39db"],["/categories/index.html","8e7cc7bb2fba0033334f13b7108e5be3"],["/categories/动漫/index.html","1e56a4c694713eb21720d0115587cd3f"],["/categories/动漫/オーバーロード（OVERLORD）/index.html","ce98f3271ed83d7013ac27ac9a6ec9c2"],["/categories/游戏/Minecraft/Hypixel/index.html","834cb049ae20f03d80cb8644d2203f48"],["/categories/游戏/Minecraft/Imbox/index.html","bf2080e2cf56a8e10968e886d1e68124"],["/categories/游戏/Minecraft/index.html","0cf7a866022c529b72dcd68ebb384397"],["/categories/游戏/index.html","84ba807b0bc78030964c12c1275c007a"],["/categories/游戏/战地Ⅴ/index.html","1ba24b6b2b1e507eea97fe9b271325c6"],["/categories/软件/Maya/index.html","88cc8ddd6f8ead44b5a3d292ba1e0999"],["/categories/软件/index.html","2e7344520fe25355142e112afb2f086c"],["/css/main.css","6f1f391ba222e37b2c2a3b8980d0f162"],["/fonts/chinese-zodiac.eot","732f7594f7de8a566ae31ff704dd3e16"],["/fonts/chinese-zodiac.woff","de6297d6703fdc83798000ee1bff183d"],["/fonts/chinese-zodiac.woff2","454bc56fd19872218bd1e02cb0a2ee3c"],["/guestbook/index.html","d420b7547709fdd18ac222f8e798a986"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/alipay.png","829278a659169b9dbff45e1b71a8690d"],["/images/apple-touch-icon-next.png","c308494b5ccc0f96887c6a5e9c95d3c8"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","082f47f6a60f432e7ed4dc59aac518ce"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","f0fca3451f4b72f410bfd362581c17c5"],["/images/favicon-32x32-next.png","a501af46d1ff08f45f55612bda1fb9b6"],["/images/logo.png","082f47f6a60f432e7ed4dc59aac518ce"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","0b1836f275d9cc3b980c7077f4854f8f"],["/index.html","94f1d52094d2015d8c71fc919df53e4a"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/cursor/fireworks.js","a313af9166d96fbcc82333d6b4e76a70"],["/js/fold_action.js","6d9697819721c5118f0bb1580f69d128"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/tw_cn.js","8e59aeafb481906e86bb91c7a269710d"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/other/index.html","d2e37698fe87bb99974b3a1608e2ea83"],["/other/picture/index.html","e32e05047e425538530fda5a07075fd8"],["/other/schedule/index.html","ae4f95604f391aaf2e8fc955c5b73fd2"],["/page/2/index.html","05625fc44b109c72fafac2cc1c1aacdb"],["/page/3/index.html","f728889d89492e7d538171d12183c156"],["/posts/Anime/index.html","f9eea6df70313dc03a321974ef3b0c76"],["/posts/Arnold/index.html","222fe5abdefe900c49939ddf1d8ba1ed"],["/posts/Battlefield_1/index.html","edea6cd5703a5262b1b140a93a3938eb"],["/posts/Battlefield_2/index.html","7a83eca6be4d05f9346ca0f725eee4bd"],["/posts/Code/index.html","eef6bf90c708440dfa003ed8d04526a5"],["/posts/Hypixel_BedWars/index.html","8dcdb2ff43a5d551f887ea73c2390eb7"],["/posts/Imbox/index.html","537aa490070f9106904e5402e48fc301"],["/posts/OVERLORD_1/index.html","55bc1bec80154dd65f44490212e1af16"],["/posts/OVERLORD_2/index.html","d2c2b7378628d2425c1acd275e7dd776"],["/posts/OVERLORD_All/index.html","5866da6ee47b81e4e828493e50795e3e"],["/posts/SteamDB/index.html","23b596e603c6d856abef83c401f66cfc"],["/posts/Steam_Buy/index.html","8b101babf95f75713c3e342ad736ae2a"],["/posts/Steam_Warning/index.html","896ea99ccb22ccdcd9bba832d49223c2"],["/sw-register.js","a67cdbcae38712d60a782667a77a574e"],["/tags/Arnold/index.html","a41e326dba79071ab48d43cabb12a177"],["/tags/Hexo/index.html","f18a3ed3a025364d4fd18633f6ed9c01"],["/tags/Hypixel/index.html","a77c60a35145f67d370fcdb4aef83a26"],["/tags/Imbox/index.html","a23e7401e6798137d0eff9f84cf0f3ec"],["/tags/Maya/index.html","90e1c2563f9753c76cf6f7f7bd25dd5d"],["/tags/Minecraft/index.html","8b451568a5be339bc9ce7ea547081161"],["/tags/OVERLORD/index.html","615614a104357294a422952f0dd17dc0"],["/tags/Steam/index.html","572b03512cd339c1cf84a8e011c5e653"],["/tags/SteamDB/index.html","cfe2d973a124d9191c7e988a54065a7f"],["/tags/index.html","540a0033237c802732165a3a86a5ac56"],["/tags/动漫/index.html","2fdd04ab91871165467911322cc0a633"],["/tags/战地/index.html","7649e0a40585d85fe2953327b045ec7c"],["/tags/战火试炼/index.html","aaf43847a0a25da150c2a226ab381d06"],["/tags/插件/index.html","2225d2e2c3b82e2a538a69db2f763d0b"],["/tags/游戏/index.html","4ab823a59e9c5cbca0ab9271243516cf"],["/tags/破解/index.html","1ff8235b3b0aaf1b3c813d6c92056316"],["/tags/软件/index.html","9bafd40be43b885e140237e7e9a8aa0c"],["/tags/闪电突袭/index.html","ed5601aaec6c09b2194aa2f863754f74"],["/tags/阿诺德/index.html","bf2ae5ea7de714b022c7a31b406fc3ce"]];
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
