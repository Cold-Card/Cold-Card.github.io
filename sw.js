/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","76c2269969529da7e3dad651a182b3c4"],["/404/404.css","08001da80cf3c965178410cc1bb9c58b"],["/404/404.jpg","f8adbcdb0b13ffd80ee097e232e412f4"],["/about/index.html","82d078ffc3b9273b9fa39a1fa99750c5"],["/archives/2018/08/index.html","8ac2a887b6d78faf4e67a1500b598630"],["/archives/2018/10/index.html","f1677cbe6d4e0fffa4181e793db339c4"],["/archives/2018/index.html","3ce5efa3cfe734fc5740d131d60ff342"],["/archives/2019/03/index.html","411e6125e57dcd9ea388238d13e6f414"],["/archives/2019/04/index.html","5badb9e47969aa79689349233db86a30"],["/archives/2019/07/index.html","dd38bda836932663a17800967b62f890"],["/archives/2019/index.html","4c44754d1555ac18a99f723e9149a39f"],["/archives/2020/04/index.html","c588cd93776ab6740b0477b48f6fb7b6"],["/archives/2020/index.html","f8ea82318a5e034be0c2a756be53377f"],["/archives/index.html","e631dc2a43a6b45bd6a50585c1846eb8"],["/archives/page/2/index.html","77afe0ebad27c494ba1b6032bfdaf798"],["/archives/page/3/index.html","3b590bf3c84d5450489174d4c9f57501"],["/categories/Hexo/index.html","4181930b8ddb3680c0b90b45ff182fcf"],["/categories/Steam/index.html","1f359e5914733fdf70ef3ad2cf0a2202"],["/categories/index.html","4284c6419d179d5255238f2c32117713"],["/categories/动漫/index.html","814541b1c0865264310a21675aa821fd"],["/categories/动漫/オーバーロード（OVERLORD）/index.html","7c8becde79dc6611e18516f98f43b900"],["/categories/游戏/Minecraft/Hypixel/index.html","13a8a14abbfeb85692d85654ca08ca5c"],["/categories/游戏/Minecraft/Imbox/index.html","5998c14c1e6bbc4303f93752c2684537"],["/categories/游戏/Minecraft/index.html","0bca4e38c754892b0912ef2e697b1d18"],["/categories/游戏/index.html","8ebb9df38aa762cebd96586e92a4d144"],["/categories/游戏/战地Ⅴ/index.html","a9ec6919d326ca02415041993deaf677"],["/categories/软件/Maya/index.html","010ed140320d9c62eb14e7ae5db82b5c"],["/categories/软件/index.html","d8c2c48460f8017b3450a78de2d5a38f"],["/css/main.css","86d7f0306158a4c0633f05618d504f61"],["/fonts/chinese-zodiac.eot","732f7594f7de8a566ae31ff704dd3e16"],["/fonts/chinese-zodiac.woff","de6297d6703fdc83798000ee1bff183d"],["/fonts/chinese-zodiac.woff2","454bc56fd19872218bd1e02cb0a2ee3c"],["/guestbook/index.html","b22eeb689b3a5cc3bc88dd319e7d143c"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/alipay.png","829278a659169b9dbff45e1b71a8690d"],["/images/apple-touch-icon-next.png","c308494b5ccc0f96887c6a5e9c95d3c8"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","082f47f6a60f432e7ed4dc59aac518ce"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","f0fca3451f4b72f410bfd362581c17c5"],["/images/favicon-32x32-next.png","a501af46d1ff08f45f55612bda1fb9b6"],["/images/logo.png","082f47f6a60f432e7ed4dc59aac518ce"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","0b1836f275d9cc3b980c7077f4854f8f"],["/index.html","63e4afc1abfb739e4a12bfe5d93eb7fb"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/cursor/fireworks.js","a313af9166d96fbcc82333d6b4e76a70"],["/js/fold_action.js","6d9697819721c5118f0bb1580f69d128"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/tw_cn.js","8e59aeafb481906e86bb91c7a269710d"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/other/index.html","8ffaadba65d53989ccc674934e248058"],["/other/picture/index.html","357d46bdebc8eb6655edb65f22ff1c38"],["/other/schedule/index.html","6559135cd7b7c52b08fc30af158a68fd"],["/page/2/index.html","dec3eea0c93625fff2e37fdcecd561f2"],["/page/3/index.html","39df26be49f57a0c8214eb4b7513c49c"],["/posts/Anime/index.html","6df43030b29f411cbf3bf98f372e2da2"],["/posts/Arnold/index.html","71be3365ea13350e51da1766a08343c8"],["/posts/Battlefield_1/index.html","f505dbad2db0eece399bae28a8ec5953"],["/posts/Battlefield_2/index.html","7341d9a9e027b7e215afb4c8cfc3db03"],["/posts/Code/index.html","9f0589e828b71f0a62ccf4fbce766377"],["/posts/Hypixel_BedWars/index.html","2bcb856c991557629d21cf631f17cf16"],["/posts/Imbox/index.html","08031f8025ed12498455b96ac3cb42dc"],["/posts/OVERLORD_1/index.html","89f9d6af0fe647a99ab0ee60d2ce022f"],["/posts/OVERLORD_2/index.html","0bb1a9571abf849ba528b8bf56f683e0"],["/posts/OVERLORD_All/index.html","d410ac59ce7d6ac8263798312070d80d"],["/posts/SteamDB/index.html","a0a9d60e5ea3fe6d442fe47592708a77"],["/posts/Steam_Buy/index.html","83decd620d505a9021e1623c7287fc52"],["/posts/Steam_Warning/index.html","d267e8f499369b7b5183b05ef40c3dd7"],["/sw-register.js","6f103c55448a54c4b10c5758a57a08d0"],["/tags/Arnold/index.html","a6c86e0745a2ee422d6a12c0a9a7b638"],["/tags/Hexo/index.html","62f414b347f0c63427a297510ac1311f"],["/tags/Hypixel/index.html","229dacbb1dd661ca7b9f37280ed08a63"],["/tags/Imbox/index.html","0fe35b555d8552afd51d0febbd799df7"],["/tags/Maya/index.html","343a815abde706400f626da9d34b15d7"],["/tags/Minecraft/index.html","9da72b3521fba71487c2c00c6db9c405"],["/tags/OVERLORD/index.html","1ae24b60be47c6e0320867f8b5c7c85e"],["/tags/Steam/index.html","19993746fcc09e124ce2fb765591aeaa"],["/tags/SteamDB/index.html","0eecf8fa5f153a4adddaccd564b6841f"],["/tags/index.html","c423be8479a20e00e67c33312b55860d"],["/tags/动漫/index.html","e644ee2bfcaa7530219fb22e98798b0b"],["/tags/战地/index.html","0ebe2fbcbb7a613e5db5e9b7fa13a0f3"],["/tags/战火试炼/index.html","07d5a4f97fd67ecb91237bc168d69525"],["/tags/插件/index.html","acc0996a063efa02ad43ebc6da75b794"],["/tags/游戏/index.html","b810d36217caa38d330d35baee7eb5fa"],["/tags/破解/index.html","e3942ec6032af8fe0d7660597c54b10d"],["/tags/软件/index.html","e0141d51a3b13479648357b92f108118"],["/tags/闪电突袭/index.html","62fa18ea643cf60e1a110634c6ad515f"],["/tags/阿诺德/index.html","64d9e91f6c0138c084a5b7968c77e40a"]];
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
