/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4867a7e366bffeb40606b1db1c8acee2"],["/404/404.css","08001da80cf3c965178410cc1bb9c58b"],["/404/404.jpg","f8adbcdb0b13ffd80ee097e232e412f4"],["/about/index.html","16dbd7b649da71f2dd3153d001a85abb"],["/archives/2018/08/index.html","29cf28296b95d3619ee64688a44431f9"],["/archives/2018/10/index.html","8a558bcb87e398089ee5a405acd21286"],["/archives/2018/index.html","27b1f5ac2fb12b1efbf936f3ec58af84"],["/archives/2019/03/index.html","68917a5ffdfcc24241f8e14bb16dfc73"],["/archives/2019/04/index.html","29d197c38f314eb2b66d1a47ac621cdd"],["/archives/2019/07/index.html","078d196c1a3dede28fafe9b1a2e0714b"],["/archives/2019/index.html","3a176c8d9ddaa75cc111d6411b4e9d20"],["/archives/2020/04/index.html","e73e29a48241530b096a4268f7534bd0"],["/archives/2020/index.html","d9b125e2b865dd7eed53ccc9fc84f41b"],["/archives/index.html","11948c610627788a5568dbd9996b848e"],["/archives/page/2/index.html","2212d81a32d2493414ecba6c2411fdf7"],["/archives/page/3/index.html","b6e75fff810b49a73829978ed27e3629"],["/categories/Hexo/index.html","2fb1b9558ae2119fc333b90a737aeaeb"],["/categories/Steam/index.html","d67cf391ea8e9e6f2ec95188ea5ee4ba"],["/categories/index.html","35e9cad55ec65dee0e88b5437acaedf5"],["/categories/动漫/index.html","8938fadd1ed3efee03e0b334f2541218"],["/categories/动漫/オーバーロード（OVERLORD）/index.html","9382062c8bb67164b98b28b12f29f718"],["/categories/游戏/Minecraft/Hypixel/index.html","8c5e6faee12712c562054c5db24413ba"],["/categories/游戏/Minecraft/Imbox/index.html","bb051ffad30c782d17a378e7cd6bd718"],["/categories/游戏/Minecraft/index.html","a065f23d1a02e4692e963ac58487daac"],["/categories/游戏/index.html","22a9948f1bf4377fb944abc32a5fe22c"],["/categories/游戏/战地Ⅴ/index.html","e57927409a38cc560df55b54272de763"],["/categories/软件/Maya/index.html","d8a2eb57c257910b6cf2c41a94491fa3"],["/categories/软件/index.html","a106ac03b158783efc859b7b33e2767b"],["/css/main.css","7e025f5628a17d9f6b7c207d1632768b"],["/fonts/chinese-zodiac.eot","732f7594f7de8a566ae31ff704dd3e16"],["/fonts/chinese-zodiac.woff","de6297d6703fdc83798000ee1bff183d"],["/fonts/chinese-zodiac.woff2","454bc56fd19872218bd1e02cb0a2ee3c"],["/guestbook/index.html","61f79fda0112f46c80658c7a824e6b37"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/alipay.png","829278a659169b9dbff45e1b71a8690d"],["/images/apple-touch-icon-next.png","c308494b5ccc0f96887c6a5e9c95d3c8"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","082f47f6a60f432e7ed4dc59aac518ce"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","f0fca3451f4b72f410bfd362581c17c5"],["/images/favicon-32x32-next.png","a501af46d1ff08f45f55612bda1fb9b6"],["/images/logo.png","082f47f6a60f432e7ed4dc59aac518ce"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","0b1836f275d9cc3b980c7077f4854f8f"],["/index.html","2119c87975ef8d9f6f23c044da93f0b5"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/cursor/fireworks.js","a313af9166d96fbcc82333d6b4e76a70"],["/js/fold_action.js","6d9697819721c5118f0bb1580f69d128"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/tw_cn.js","8e59aeafb481906e86bb91c7a269710d"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/other/index.html","9f32a9ef82704a0fe21817b95676d88b"],["/other/picture/index.html","88a14d819898515815a15c9431240069"],["/other/schedule/index.html","cb137c31b41ef76a4db7b2373354ddf0"],["/page/2/index.html","f9e9473a7df386609e92f8fc2fb7e7fc"],["/page/3/index.html","98952e355f1c7c9e80a67247bae3e39f"],["/posts/Anime/index.html","0496576a2740b94d4f427ef0b3ccb8b2"],["/posts/Arnold/index.html","7c35e5428f785335f659688c9309d1e2"],["/posts/Battlefield_1/index.html","6b05d5a1a1448c50f5f67ae367e57335"],["/posts/Battlefield_2/index.html","5135bfdb5eedc4c8689383e45c9bdc3d"],["/posts/Code/index.html","bc8cbaca822970ba5693085d2d18c720"],["/posts/Hypixel_BedWars/index.html","233ff1969f7ecf43f0763ed60ce758d4"],["/posts/Imbox/index.html","4de3bf5b382ddde13b91755117f76d7a"],["/posts/OVERLORD_1/index.html","3488562526c6afa8e063a45a7d1df670"],["/posts/OVERLORD_2/index.html","06087c8b566f3061f5e2383630576855"],["/posts/OVERLORD_All/index.html","f150fa354e5ff1ee2e24a7d8b1f8f324"],["/posts/SteamDB/index.html","7dd1d15397084cda943e459f96b063de"],["/posts/Steam_Buy/index.html","2cb625f6337521557259123867b8968e"],["/posts/Steam_Warning/index.html","3623b92c90f21e325b6fb0d6b1849875"],["/sw-register.js","be6c28408e8273f5cca5eafb7ed566da"],["/tags/Arnold/index.html","428b0de0322724a9c9359010588a29e2"],["/tags/Hexo/index.html","7bb2c6ee660176cb1fbb4ee9a7fe4791"],["/tags/Hypixel/index.html","b00d41c0982cab820e764007021f9515"],["/tags/Imbox/index.html","f7d57a6a0df590636a1b0fdb08f49560"],["/tags/Maya/index.html","29ecd9b741166c41b164d51ddcec6278"],["/tags/Minecraft/index.html","767456f0b0ecd13d4ffcc3ed465819a9"],["/tags/OVERLORD/index.html","506ad2775e3de947293020874d0102eb"],["/tags/Steam/index.html","7e9e76f1003ad2558309d21093ee618b"],["/tags/SteamDB/index.html","3eabdd9c8fba8763915b2bf8e1c6dbce"],["/tags/index.html","c6b04653ef80a972de24c6a902816a39"],["/tags/动漫/index.html","56af39cc5fbee85f38ff2307f38aa6b2"],["/tags/战地/index.html","d382c8a4ca736159c92220af97e206df"],["/tags/战火试炼/index.html","0f7ef5d31fa1b998facff2ab1827523d"],["/tags/插件/index.html","9590d5073d9475552d6473a7f139228f"],["/tags/游戏/index.html","55eed98ed87a778e69ccd7e7d92887ac"],["/tags/破解/index.html","895e1f3512959651abbe839b9fdc098d"],["/tags/软件/index.html","6478a33c09785b7c53ec436e224aaf10"],["/tags/闪电突袭/index.html","cd7828a254220e0ab9cac887235809c7"],["/tags/阿诺德/index.html","4c5089d4cc57a64dd7e94c23735afe09"]];
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
