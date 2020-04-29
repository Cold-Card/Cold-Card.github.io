/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","e9f746cd430488a78d6e192589ebac00"],["/404/404.css","08001da80cf3c965178410cc1bb9c58b"],["/404/404.jpg","f8adbcdb0b13ffd80ee097e232e412f4"],["/about/index.html","86f9a099a902b163950b141d42fdd198"],["/archives/2018/08/index.html","c65d024df4e358bed951002d149705d4"],["/archives/2018/10/index.html","81a65b30349ea926840dbf24ec9f1fe6"],["/archives/2018/index.html","851b87f964c94fe73fcd9cc844c5868c"],["/archives/2019/03/index.html","a3bd0d837bb270549d0543892b966464"],["/archives/2019/04/index.html","292e5e1f37f47fd20068e50168935ff7"],["/archives/2019/07/index.html","18c9df7f65457ecf1a37153ae5300a22"],["/archives/2019/index.html","6bbf84873b073a7a49912ee8d5d926fc"],["/archives/2020/04/index.html","e8dda2d28d69c210d882eae948eb1dd6"],["/archives/2020/index.html","fb8a050f7a82d6134d3b10607932e7bc"],["/archives/index.html","4057c5255fc7169298f09f439c524bc2"],["/archives/page/2/index.html","96fa86f91d3555c9ed771a9c3962e773"],["/archives/page/3/index.html","5ee6bc5fc5bdedbacaf6db584f1af7af"],["/categories/Hexo/index.html","e6b5ca20f21d1e594f72a0bfe057cb1b"],["/categories/Steam/index.html","eebb6e5518245f3ab858ed4d0a1d26ee"],["/categories/index.html","c3add1f21878ec1153856d907f566fb3"],["/categories/动漫/index.html","fb339d849370f6f86c5273a9ff792d0e"],["/categories/动漫/オーバーロード（OVERLORD）/index.html","5d87341129bcb07c417bf0d2931b9116"],["/categories/游戏/Minecraft/Hypixel/index.html","7036345734dc0387d18a734bed4be251"],["/categories/游戏/Minecraft/Imbox/index.html","14c56ec26420f52046ee2b099e3c4352"],["/categories/游戏/Minecraft/index.html","7bbad98ecbb5b84dd996258488865c11"],["/categories/游戏/index.html","c4552eb8a0629cc2f60255626b6b1713"],["/categories/游戏/战地Ⅴ/index.html","a3f6b732caaca92bcefa16b7974507f4"],["/categories/软件/Maya/index.html","c91f2715c03cadc72ee938bf02d8a423"],["/categories/软件/index.html","142ebbf8beb04a089f42c41a6a9584c9"],["/css/main.css","305d9893a13935a1e218bfc33fd42f28"],["/fonts/chinese-zodiac.eot","732f7594f7de8a566ae31ff704dd3e16"],["/fonts/chinese-zodiac.woff","de6297d6703fdc83798000ee1bff183d"],["/fonts/chinese-zodiac.woff2","454bc56fd19872218bd1e02cb0a2ee3c"],["/guestbook/index.html","039ebf23e4728a1dc0e0df998b6f3f02"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/alipay.png","829278a659169b9dbff45e1b71a8690d"],["/images/apple-touch-icon-next.png","c308494b5ccc0f96887c6a5e9c95d3c8"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","082f47f6a60f432e7ed4dc59aac518ce"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","f0fca3451f4b72f410bfd362581c17c5"],["/images/favicon-32x32-next.png","a501af46d1ff08f45f55612bda1fb9b6"],["/images/logo.png","082f47f6a60f432e7ed4dc59aac518ce"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","0b1836f275d9cc3b980c7077f4854f8f"],["/index.html","f150c102427fd84b187433a5bedc569b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/cursor/fireworks.js","a313af9166d96fbcc82333d6b4e76a70"],["/js/fold_action.js","6d9697819721c5118f0bb1580f69d128"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/tw_cn.js","8e59aeafb481906e86bb91c7a269710d"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/other/index.html","f77c059750ef5def6d5f95c4123cc1a6"],["/other/picture/index.html","8ec98c07f77cb72b9c2f0c3a50c03497"],["/other/schedule/index.html","baade4fd76c456c75e0e0581c165dde3"],["/page/2/index.html","ad48a0c63c384b01fc59e03ed0a079b2"],["/page/3/index.html","09388899debe623adb0e4d293eeddd23"],["/posts/Anime/index.html","285ec343d17eb02a9007f3ea4d80a7f9"],["/posts/Arnold/index.html","0c43de58860f955cedb7541f9c81394c"],["/posts/Battlefield_1/index.html","b0155c97c8fc9609fca904fce0f3e3d2"],["/posts/Battlefield_2/index.html","cfba3e8eb11e5bb276ad2801665bdb07"],["/posts/Code/index.html","5b5825ce856ce0725f4a85d20813834d"],["/posts/Hypixel_BedWars/index.html","4dd348272ffcf15bee1e09fbce3713d1"],["/posts/Imbox/index.html","5ca42abf209ac8eb1ecef50624c34338"],["/posts/OVERLORD_1/index.html","47611151096426dcf92c362284f0ddac"],["/posts/OVERLORD_2/index.html","f324c0ce8c360e4de253dc23bea45e96"],["/posts/OVERLORD_All/index.html","2ffe5799c41450023060af529baf80a1"],["/posts/SteamDB/index.html","2023c6e0a825a626a3c15708a42bf4de"],["/posts/Steam_Buy/index.html","869d48a80c47831ee6323893bd17bbad"],["/posts/Steam_Warning/index.html","3546ddfd8edb2c83f8c43275322bfedf"],["/sw-register.js","fca04a5afdf17f4c4e3f35e48a71a7f0"],["/tags/Arnold/index.html","4208fea3a45a331fc82cdef8b0f3e159"],["/tags/Hexo/index.html","665cef234cdac2552bdd752d3fd34928"],["/tags/Hypixel/index.html","30dc5a76863261456118d22ae6db1758"],["/tags/Imbox/index.html","de51d7bf71d13f3a4e4eca86ddeab728"],["/tags/Maya/index.html","2a482cdb32d1355cdfb17df681faa0e0"],["/tags/Minecraft/index.html","da4e9b5d2974351f662e6e1297d2ce76"],["/tags/OVERLORD/index.html","76925f0b1c263c0088d7c120ddca3061"],["/tags/Steam/index.html","29429fab506fa2bf434a79003b62c234"],["/tags/SteamDB/index.html","d636c99df6ceec223029a8d167f4db58"],["/tags/index.html","9717b0cadbcd49fd765d2d58b7faa734"],["/tags/动漫/index.html","42fae4d6a439722bb1e7859c873b79e1"],["/tags/战地/index.html","8eb949b1b7338c67f4a47c16bf1120b5"],["/tags/战火试炼/index.html","4268297c50d3e3d88d2d8c5dad3134a0"],["/tags/插件/index.html","766298196fe823f340f4985c0135ebf9"],["/tags/游戏/index.html","2219b8597deff9066b9c8ac398e7ada5"],["/tags/破解/index.html","77e3b9106fd936164031569c63625bb9"],["/tags/软件/index.html","e7e1d10896e1ddf44743544e0ba1dd84"],["/tags/闪电突袭/index.html","608674ec830b1a13909042de423ed895"],["/tags/阿诺德/index.html","fe51bebebfb4f7c2b3edc50a058711ad"]];
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
