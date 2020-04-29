/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","98541f7197ff343879108713df31f833"],["/404/404.css","08001da80cf3c965178410cc1bb9c58b"],["/404/404.jpg","f8adbcdb0b13ffd80ee097e232e412f4"],["/about/index.html","80448a891c512204f65c03e926c075aa"],["/archives/2018/08/index.html","b9a260f9e5850caf469fe29ee5c07135"],["/archives/2018/10/index.html","541150d274622d20a50ba14a059e6817"],["/archives/2018/index.html","07abb59778b815120cb714fb59cd2a25"],["/archives/2019/03/index.html","56f92834955861f4aa3823912c861fc3"],["/archives/2019/04/index.html","ce11b87e2f10c43af3d9b7fa3f3b87f7"],["/archives/2019/07/index.html","5a9d9047a0bb54975a62eb2da2830cd5"],["/archives/2019/index.html","ca5fd7a52d1cc2e35b8dfea30bac5a24"],["/archives/2020/04/index.html","808e9f6d14662d23a8165c50050c151b"],["/archives/2020/index.html","653a8e1157a2765a6d864393d0c8f3df"],["/archives/index.html","b29000f9da74d13e83659a48e9f95c5b"],["/archives/page/2/index.html","2892859f56160c2f901e3aad7d7f4335"],["/archives/page/3/index.html","f514d49c21757f3f819bdf551ed0f359"],["/categories/Hexo/index.html","63033a55b7ba3090f32835d1dd4fb614"],["/categories/Steam/index.html","c17f375d477ed27c987fbff911609d9e"],["/categories/index.html","91c611ef2ee86021532f009d80594f3e"],["/categories/动漫/index.html","9613230c7c2a2b73080ca54a78d9de4a"],["/categories/动漫/オーバーロード（OVERLORD）/index.html","fecd9f2f224f2acb9ee7bf5f389d0038"],["/categories/游戏/Minecraft/Hypixel/index.html","32b6a00e9192d7bf9cd5bea6d72e4522"],["/categories/游戏/Minecraft/Imbox/index.html","57acceab6a98fa638507b097af661dbe"],["/categories/游戏/Minecraft/index.html","62f74781900e923e33fafdd402a229ef"],["/categories/游戏/index.html","ddc69fba7784c51fb10af7265a017796"],["/categories/游戏/战地Ⅴ/index.html","c5bda0c7d5468f1c2dedd260d6c235d9"],["/categories/软件/Maya/index.html","6128e7b71035b3e2dc713dc218d6864f"],["/categories/软件/index.html","0b3a2a1168c56762b70e1547a682f383"],["/css/main.css","d799a129f570dcb9bd469fd6265acab4"],["/fonts/chinese-zodiac.eot","732f7594f7de8a566ae31ff704dd3e16"],["/fonts/chinese-zodiac.woff","de6297d6703fdc83798000ee1bff183d"],["/fonts/chinese-zodiac.woff2","454bc56fd19872218bd1e02cb0a2ee3c"],["/guestbook/index.html","dc8f9c736baad2ec78e97fcd2b99442b"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/alipay.png","829278a659169b9dbff45e1b71a8690d"],["/images/apple-touch-icon-next.png","c308494b5ccc0f96887c6a5e9c95d3c8"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","082f47f6a60f432e7ed4dc59aac518ce"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","f0fca3451f4b72f410bfd362581c17c5"],["/images/favicon-32x32-next.png","a501af46d1ff08f45f55612bda1fb9b6"],["/images/logo.png","082f47f6a60f432e7ed4dc59aac518ce"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","0b1836f275d9cc3b980c7077f4854f8f"],["/index.html","48d9c57bd9fe5e500bee670082c9d90c"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/cursor/fireworks.js","a313af9166d96fbcc82333d6b4e76a70"],["/js/fold_action.js","6d9697819721c5118f0bb1580f69d128"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/tw_cn.js","8e59aeafb481906e86bb91c7a269710d"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/other/index.html","df12ba53bd9dbd3a3c7cea7f63d64deb"],["/other/picture/index.html","b691af9708e9cbe401ec7f4ca78d3f0a"],["/other/schedule/index.html","860978e8e9c4e7a3b6e9e45ef181c0de"],["/page/2/index.html","9b77d83c66f1ca01246e30e25bcca37f"],["/page/3/index.html","6f492dfd82335ea39132c4face0ea2b2"],["/posts/Anime/index.html","efdac098b5e5bbfd3a7799158c19c454"],["/posts/Arnold/index.html","a0d32ce61862a1ae7ea548cbec903d77"],["/posts/Battlefield_1/index.html","7beb6c27ab8a98c040fa18a7259b385e"],["/posts/Battlefield_2/index.html","8ff60fefe422b29c0d66a0e5c1a28ec5"],["/posts/Code/index.html","28bbe318a8137ed4d1496043c6b1546a"],["/posts/Hypixel_BedWars/index.html","29f1c71484dd11f14dbce60e53e6bf45"],["/posts/Imbox/index.html","ecdfffde6c055842abb4ed5aaacb4e4c"],["/posts/OVERLORD_1/index.html","d3b8cafd322f884b27e6148e7a77b434"],["/posts/OVERLORD_2/index.html","57ebf6ec95363153fa6d0f09d927af36"],["/posts/OVERLORD_All/index.html","b428103e5dd6e335f81dfc3a0157234f"],["/posts/SteamDB/index.html","1dbf5b581ce9c8e39e88baa128f0ce7e"],["/posts/Steam_Buy/index.html","784b2c8f1d58be285874799acd1fb5a2"],["/posts/Steam_Warning/index.html","2fff2f5f1da16903b163df6b8d1127e0"],["/sw-register.js","c3cea6cc93bca8e6c02e201b2083c2e4"],["/tags/Arnold/index.html","d7d18571ce2ebc9bc94e1bbddd7075a3"],["/tags/Hexo/index.html","942c73b83e9606e471c810bfac7a20ee"],["/tags/Hypixel/index.html","636104e753b37d0436ba5f979cd2b833"],["/tags/Imbox/index.html","48c475de3f124e8aa5efaaa6aff3c819"],["/tags/Maya/index.html","dd8583452b509f3c30b03b1e66a7e5aa"],["/tags/Minecraft/index.html","a6c3e6b15d9f69b16f0e4c0aff3963c0"],["/tags/OVERLORD/index.html","304df295408102988c6d5641d9adc573"],["/tags/Steam/index.html","dbe94e6e221046ade441c5700042cfc3"],["/tags/SteamDB/index.html","c0656c40ba7731467f1028110c4228cf"],["/tags/index.html","221f97b2b30e82d1c89eb09093b06841"],["/tags/动漫/index.html","28bd77e84054a2124b4def76a20a212c"],["/tags/战地/index.html","e220ab995139b1c50139aca9da3758ac"],["/tags/战火试炼/index.html","d070ece6646fdfc96356212ad08392b3"],["/tags/插件/index.html","17ffdedc184de343484456c8012b26c3"],["/tags/游戏/index.html","a39e5bad5c356eb9918aa32498c0c371"],["/tags/破解/index.html","9951aba6eafff2aa1b2a84813297db9c"],["/tags/软件/index.html","116d5b8c13e0d928ae65c9e040b3a0ca"],["/tags/闪电突袭/index.html","b555c1e4ceb5355d179a2bfcf8a2444b"],["/tags/阿诺德/index.html","49533fbd96234d11051447bd59a10afa"]];
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
