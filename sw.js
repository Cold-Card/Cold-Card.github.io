/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","2068c5d9a99e717e31b5823e7902a721"],["/404/404.css","08001da80cf3c965178410cc1bb9c58b"],["/404/404.jpg","f8adbcdb0b13ffd80ee097e232e412f4"],["/about/index.html","006728344738a6445aa76f91955ef5d0"],["/archives/2018/08/index.html","302fdc72f94fd5739407af1334dc2dee"],["/archives/2018/10/index.html","bb4abf211dbc175057eef022e5ff0f66"],["/archives/2018/index.html","e69bea50fbffeeb2867f5c92c0b496fe"],["/archives/2019/03/index.html","54e49986dc6ff74a49e5cfae08a667d1"],["/archives/2019/04/index.html","e365289924fc39031f29ba7a13a2896f"],["/archives/2019/07/index.html","4f5e4a19da267bce38c82508bbc8be55"],["/archives/2019/index.html","473e389bb8c98a795c1255c1fc1115d2"],["/archives/2020/04/index.html","a9d07dc69c55fb0b53183524120850aa"],["/archives/2020/index.html","ff0a3ebd8797db730a79cc3670af13d0"],["/archives/index.html","ed5d9533ec42f3a46914eea148377952"],["/archives/page/2/index.html","bd251fe24be86723c040a4adfeaa2b17"],["/archives/page/3/index.html","354330cf06cd4f886680099ea8c617e3"],["/categories/Hexo/index.html","8bf64f68db26c001927386261329cdae"],["/categories/Steam/index.html","253633265321b9d23a422a972ffd98c7"],["/categories/index.html","d80b48ebaadc0c0e9d3e891504e7ac82"],["/categories/动漫/index.html","13320625ad3ac9d60cc6c3f1bceb3144"],["/categories/动漫/オーバーロード（OVERLORD）/index.html","4747799f7228c7a711ec668e3dc4edc4"],["/categories/游戏/Minecraft/Hypixel/index.html","384dec2721ec7844edba18a8b6047851"],["/categories/游戏/Minecraft/Imbox/index.html","f07a32ae934e1cf36226d49992b9329e"],["/categories/游戏/Minecraft/index.html","b04df544c07e852d8158333227790d26"],["/categories/游戏/index.html","77fadeec4025884b108d6f3db886846a"],["/categories/游戏/战地Ⅴ/index.html","82fec189b07e1ec1ce863b3b11d89215"],["/categories/软件/Maya/index.html","fa171c8826590f0b771cb3931b2edfdc"],["/categories/软件/index.html","5087576ddd1c16ac92c7b62441f3b4bb"],["/css/main.css","f02dcb0388fc721b2ad6c80c59cc697b"],["/fonts/chinese-zodiac.eot","732f7594f7de8a566ae31ff704dd3e16"],["/fonts/chinese-zodiac.woff","de6297d6703fdc83798000ee1bff183d"],["/fonts/chinese-zodiac.woff2","454bc56fd19872218bd1e02cb0a2ee3c"],["/guestbook/index.html","ecc5bafc33d90166aec47a1b3b1ebc4b"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/alipay.png","829278a659169b9dbff45e1b71a8690d"],["/images/apple-touch-icon-next.png","c308494b5ccc0f96887c6a5e9c95d3c8"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","082f47f6a60f432e7ed4dc59aac518ce"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","f0fca3451f4b72f410bfd362581c17c5"],["/images/favicon-32x32-next.png","a501af46d1ff08f45f55612bda1fb9b6"],["/images/logo.png","082f47f6a60f432e7ed4dc59aac518ce"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","0b1836f275d9cc3b980c7077f4854f8f"],["/index.html","b05ab397a94e97bd64b6e903c6b42c3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/cursor/fireworks.js","a313af9166d96fbcc82333d6b4e76a70"],["/js/fold_action.js","6d9697819721c5118f0bb1580f69d128"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/tw_cn.js","8e59aeafb481906e86bb91c7a269710d"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/other/index.html","5095aadf29eed8144c7ced2d4a9c6fd0"],["/other/picture/index.html","5c346de9dc98ecff26e655eb04b7e21a"],["/other/schedule/index.html","4c3445aaf402f536a52491c18e10c53c"],["/page/2/index.html","433ff0efc73675a120da945b200a7ec4"],["/page/3/index.html","19888c3a00249e8d2417fc422f30a2e9"],["/posts/Anime/index.html","e9940e032208ff5cdb26cc2054df3884"],["/posts/Arnold/index.html","0bb575109bd10b94f2fe8e5afd1b18bb"],["/posts/Battlefield_1/index.html","7288193d5da147936ab40e6812b383c5"],["/posts/Battlefield_2/index.html","3391db51fdda5373bcb984e7268aa709"],["/posts/Code/index.html","493c485e473e7a6c5b1fc4070c054b59"],["/posts/Hypixel_BedWars/index.html","5b2d76a1192e5b0d49d12a10babb3814"],["/posts/Imbox/index.html","7499962252a7cc6361fd89a91de03390"],["/posts/OVERLORD_1/index.html","a34536be2a6390b388a6227f166f0383"],["/posts/OVERLORD_2/index.html","4a489a22c3bcec08e0d1fa7c99f30b1a"],["/posts/OVERLORD_All/index.html","f7e62505c14698fe17d1105d6ccf379f"],["/posts/SteamDB/index.html","84092199a835808e20aa7448fbba5907"],["/posts/Steam_Buy/index.html","5f0ec875135bcae131a48ee110259a51"],["/posts/Steam_Warning/index.html","d9bcce34265dceb3bcafeb300e990c5b"],["/sw-register.js","716d9f3459858020b2768b7d5925f8ab"],["/tags/Arnold/index.html","f1ddceff9c57dd91c67cf4143ff923cc"],["/tags/Hexo/index.html","e71cfa88bf70e93212361bc96ed6cf59"],["/tags/Hypixel/index.html","ffb2066fbdbcda449b73d59999815bd1"],["/tags/Imbox/index.html","31fa09ac4d0b0fdc790bbecb70587e86"],["/tags/Maya/index.html","4c1187c2c6af7744f86b6ec6ee6f1954"],["/tags/Minecraft/index.html","96a44d7d61d011a1f053e1f494ef4497"],["/tags/OVERLORD/index.html","7f29e044b9c8f545b111fc16bff33092"],["/tags/Steam/index.html","3dad593987bac40b6baac68c73a7120d"],["/tags/SteamDB/index.html","45e0ccd8c9e09cf6895003665cec1fe0"],["/tags/index.html","31967881bfa37973abad34b6147e2a55"],["/tags/动漫/index.html","ca03d78747bd18a1bcc0a89c57c9b68a"],["/tags/战地/index.html","8634a8428f13d4b50d77efa0e5017fb7"],["/tags/战火试炼/index.html","455aba6d706741ea5c2fbd66f6291046"],["/tags/插件/index.html","2d1df27cb9dd94f7bef63d2098558c11"],["/tags/游戏/index.html","3e4ad6093d11ccc1dc25371b04dcdfca"],["/tags/破解/index.html","97eb89065e7411f4495f05c82ec03fc5"],["/tags/软件/index.html","ab7759667d1c6fc61221e172dd43d3f0"],["/tags/闪电突袭/index.html","6493b510d49d8ef41694c0635588b6ec"],["/tags/阿诺德/index.html","252f53f746e53ce3ff336be0a05a602d"]];
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
