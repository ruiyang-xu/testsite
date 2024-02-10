(() => {
    var e, r, s, t, n = {
            3150: function(e, r) {
                var s, t, n;
                "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, t = [e], s = function(e) {
                    "use strict";
                    if (!globalThis.chrome?.runtime?.id) throw new Error("This script should only be loaded in a browser extension.");
                    if (void 0 === globalThis.browser || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
                        const r = "The message port closed before a response was received.",
                            s = e => {
                                const s = {
                                    alarms: {
                                        clear: {
                                            minArgs: 0,
                                            maxArgs: 1
                                        },
                                        clearAll: {
                                            minArgs: 0,
                                            maxArgs: 0
                                        },
                                        get: {
                                            minArgs: 0,
                                            maxArgs: 1
                                        },
                                        getAll: {
                                            minArgs: 0,
                                            maxArgs: 0
                                        }
                                    },
                                    bookmarks: {
                                        create: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        get: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        getChildren: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        getRecent: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        getSubTree: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        getTree: {
                                            minArgs: 0,
                                            maxArgs: 0
                                        },
                                        move: {
                                            minArgs: 2,
                                            maxArgs: 2
                                        },
                                        remove: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        removeTree: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        search: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        update: {
                                            minArgs: 2,
                                            maxArgs: 2
                                        }
                                    },
                                    browserAction: {
                                        disable: {
                                            minArgs: 0,
                                            maxArgs: 1,
                                            fallbackToNoCallback: !0
                                        },
                                        enable: {
                                            minArgs: 0,
                                            maxArgs: 1,
                                            fallbackToNoCallback: !0
                                        },
                                        getBadgeBackgroundColor: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        getBadgeText: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        getPopup: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        getTitle: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        openPopup: {
                                            minArgs: 0,
                                            maxArgs: 0
                                        },
                                        setBadgeBackgroundColor: {
                                            minArgs: 1,
                                            maxArgs: 1,
                                            fallbackToNoCallback: !0
                                        },
                                        setBadgeText: {
                                            minArgs: 1,
                                            maxArgs: 1,
                                            fallbackToNoCallback: !0
                                        },
                                        setIcon: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        setPopup: {
                                            minArgs: 1,
                                            maxArgs: 1,
                                            fallbackToNoCallback: !0
                                        },
                                        setTitle: {
                                            minArgs: 1,
                                            maxArgs: 1,
                                            fallbackToNoCallback: !0
                                        }
                                    },
                                    browsingData: {
                                        remove: {
                                            minArgs: 2,
                                            maxArgs: 2
                                        },
                                        removeCache: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        removeCookies: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        removeDownloads: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        removeFormData: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        removeHistory: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        removeLocalStorage: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        removePasswords: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        removePluginData: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        settings: {
                                            minArgs: 0,
                                            maxArgs: 0
                                        }
                                    },
                                    commands: {
                                        getAll: {
                                            minArgs: 0,
                                            maxArgs: 0
                                        }
                                    },
                                    contextMenus: {
                                        remove: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        removeAll: {
                                            minArgs: 0,
                                            maxArgs: 0
                                        },
                                        update: {
                                            minArgs: 2,
                                            maxArgs: 2
                                        }
                                    },
                                    cookies: {
                                        get: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        getAll: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        getAllCookieStores: {
                                            minArgs: 0,
                                            maxArgs: 0
                                        },
                                        remove: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        set: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        }
                                    },
                                    devtools: {
                                        inspectedWindow: {
                                            eval: {
                                                minArgs: 1,
                                                maxArgs: 2,
                                                singleCallbackArg: !1
                                            }
                                        },
                                        panels: {
                                            create: {
                                                minArgs: 3,
                                                maxArgs: 3,
                                                singleCallbackArg: !0
                                            },
                                            elements: {
                                                createSidebarPane: {
                                                    minArgs: 1,
                                                    maxArgs: 1
                                                }
                                            }
                                        }
                                    },
                                    downloads: {
                                        cancel: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        download: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        erase: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        getFileIcon: {
                                            minArgs: 1,
                                            maxArgs: 2
                                        },
                                        open: {
                                            minArgs: 1,
                                            maxArgs: 1,
                                            fallbackToNoCallback: !0
                                        },
                                        pause: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        removeFile: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        resume: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        search: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        show: {
                                            minArgs: 1,
                                            maxArgs: 1,
                                            fallbackToNoCallback: !0
                                        }
                                    },
                                    extension: {
                                        isAllowedFileSchemeAccess: {
                                            minArgs: 0,
                                            maxArgs: 0
                                        },
                                        isAllowedIncognitoAccess: {
                                            minArgs: 0,
                                            maxArgs: 0
                                        }
                                    },
                                    history: {
                                        addUrl: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        deleteAll: {
                                            minArgs: 0,
                                            maxArgs: 0
                                        },
                                        deleteRange: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        deleteUrl: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        getVisits: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        search: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        }
                                    },
                                    i18n: {
                                        detectLanguage: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        getAcceptLanguages: {
                                            minArgs: 0,
                                            maxArgs: 0
                                        }
                                    },
                                    identity: {
                                        launchWebAuthFlow: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        }
                                    },
                                    idle: {
                                        queryState: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        }
                                    },
                                    management: {
                                        get: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        getAll: {
                                            minArgs: 0,
                                            maxArgs: 0
                                        },
                                        getSelf: {
                                            minArgs: 0,
                                            maxArgs: 0
                                        },
                                        setEnabled: {
                                            minArgs: 2,
                                            maxArgs: 2
                                        },
                                        uninstallSelf: {
                                            minArgs: 0,
                                            maxArgs: 1
                                        }
                                    },
                                    notifications: {
                                        clear: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        create: {
                                            minArgs: 1,
                                            maxArgs: 2
                                        },
                                        getAll: {
                                            minArgs: 0,
                                            maxArgs: 0
                                        },
                                        getPermissionLevel: {
                                            minArgs: 0,
                                            maxArgs: 0
                                        },
                                        update: {
                                            minArgs: 2,
                                            maxArgs: 2
                                        }
                                    },
                                    pageAction: {
                                        getPopup: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        getTitle: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        hide: {
                                            minArgs: 1,
                                            maxArgs: 1,
                                            fallbackToNoCallback: !0
                                        },
                                        setIcon: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        setPopup: {
                                            minArgs: 1,
                                            maxArgs: 1,
                                            fallbackToNoCallback: !0
                                        },
                                        setTitle: {
                                            minArgs: 1,
                                            maxArgs: 1,
                                            fallbackToNoCallback: !0
                                        },
                                        show: {
                                            minArgs: 1,
                                            maxArgs: 1,
                                            fallbackToNoCallback: !0
                                        }
                                    },
                                    permissions: {
                                        contains: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        getAll: {
                                            minArgs: 0,
                                            maxArgs: 0
                                        },
                                        remove: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        request: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        }
                                    },
                                    runtime: {
                                        getBackgroundPage: {
                                            minArgs: 0,
                                            maxArgs: 0
                                        },
                                        getPlatformInfo: {
                                            minArgs: 0,
                                            maxArgs: 0
                                        },
                                        openOptionsPage: {
                                            minArgs: 0,
                                            maxArgs: 0
                                        },
                                        requestUpdateCheck: {
                                            minArgs: 0,
                                            maxArgs: 0
                                        },
                                        sendMessage: {
                                            minArgs: 1,
                                            maxArgs: 3
                                        },
                                        sendNativeMessage: {
                                            minArgs: 2,
                                            maxArgs: 2
                                        },
                                        setUninstallURL: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        }
                                    },
                                    sessions: {
                                        getDevices: {
                                            minArgs: 0,
                                            maxArgs: 1
                                        },
                                        getRecentlyClosed: {
                                            minArgs: 0,
                                            maxArgs: 1
                                        },
                                        restore: {
                                            minArgs: 0,
                                            maxArgs: 1
                                        }
                                    },
                                    storage: {
                                        local: {
                                            clear: {
                                                minArgs: 0,
                                                maxArgs: 0
                                            },
                                            get: {
                                                minArgs: 0,
                                                maxArgs: 1
                                            },
                                            getBytesInUse: {
                                                minArgs: 0,
                                                maxArgs: 1
                                            },
                                            remove: {
                                                minArgs: 1,
                                                maxArgs: 1
                                            },
                                            set: {
                                                minArgs: 1,
                                                maxArgs: 1
                                            }
                                        },
                                        managed: {
                                            get: {
                                                minArgs: 0,
                                                maxArgs: 1
                                            },
                                            getBytesInUse: {
                                                minArgs: 0,
                                                maxArgs: 1
                                            }
                                        },
                                        sync: {
                                            clear: {
                                                minArgs: 0,
                                                maxArgs: 0
                                            },
                                            get: {
                                                minArgs: 0,
                                                maxArgs: 1
                                            },
                                            getBytesInUse: {
                                                minArgs: 0,
                                                maxArgs: 1
                                            },
                                            remove: {
                                                minArgs: 1,
                                                maxArgs: 1
                                            },
                                            set: {
                                                minArgs: 1,
                                                maxArgs: 1
                                            }
                                        }
                                    },
                                    tabs: {
                                        captureVisibleTab: {
                                            minArgs: 0,
                                            maxArgs: 2
                                        },
                                        create: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        detectLanguage: {
                                            minArgs: 0,
                                            maxArgs: 1
                                        },
                                        discard: {
                                            minArgs: 0,
                                            maxArgs: 1
                                        },
                                        duplicate: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        executeScript: {
                                            minArgs: 1,
                                            maxArgs: 2
                                        },
                                        get: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        getCurrent: {
                                            minArgs: 0,
                                            maxArgs: 0
                                        },
                                        getZoom: {
                                            minArgs: 0,
                                            maxArgs: 1
                                        },
                                        getZoomSettings: {
                                            minArgs: 0,
                                            maxArgs: 1
                                        },
                                        goBack: {
                                            minArgs: 0,
                                            maxArgs: 1
                                        },
                                        goForward: {
                                            minArgs: 0,
                                            maxArgs: 1
                                        },
                                        highlight: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        insertCSS: {
                                            minArgs: 1,
                                            maxArgs: 2
                                        },
                                        move: {
                                            minArgs: 2,
                                            maxArgs: 2
                                        },
                                        query: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        reload: {
                                            minArgs: 0,
                                            maxArgs: 2
                                        },
                                        remove: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        removeCSS: {
                                            minArgs: 1,
                                            maxArgs: 2
                                        },
                                        sendMessage: {
                                            minArgs: 2,
                                            maxArgs: 3
                                        },
                                        setZoom: {
                                            minArgs: 1,
                                            maxArgs: 2
                                        },
                                        setZoomSettings: {
                                            minArgs: 1,
                                            maxArgs: 2
                                        },
                                        update: {
                                            minArgs: 1,
                                            maxArgs: 2
                                        }
                                    },
                                    topSites: {
                                        get: {
                                            minArgs: 0,
                                            maxArgs: 0
                                        }
                                    },
                                    webNavigation: {
                                        getAllFrames: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        getFrame: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        }
                                    },
                                    webRequest: {
                                        handlerBehaviorChanged: {
                                            minArgs: 0,
                                            maxArgs: 0
                                        }
                                    },
                                    windows: {
                                        create: {
                                            minArgs: 0,
                                            maxArgs: 1
                                        },
                                        get: {
                                            minArgs: 1,
                                            maxArgs: 2
                                        },
                                        getAll: {
                                            minArgs: 0,
                                            maxArgs: 1
                                        },
                                        getCurrent: {
                                            minArgs: 0,
                                            maxArgs: 1
                                        },
                                        getLastFocused: {
                                            minArgs: 0,
                                            maxArgs: 1
                                        },
                                        remove: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        update: {
                                            minArgs: 2,
                                            maxArgs: 2
                                        }
                                    }
                                };
                                if (0 === Object.keys(s).length) throw new Error("api-metadata.json has not been included in browser-polyfill");
                                class t extends WeakMap {
                                    constructor(e, r = void 0) {
                                        super(r), this.createItem = e
                                    }
                                    get(e) {
                                        return this.has(e) || this.set(e, this.createItem(e)), super.get(e)
                                    }
                                }
                                const n = e => e && "object" == typeof e && "function" == typeof e.then,
                                    a = (r, s) => (...t) => {
                                        e.runtime.lastError ? r.reject(new Error(e.runtime.lastError.message)) : s.singleCallbackArg || t.length <= 1 && !1 !== s.singleCallbackArg ? r.resolve(t[0]) : r.resolve(t)
                                    },
                                    g = e => 1 == e ? "argument" : "arguments",
                                    m = (e, r) => function(s, ...t) {
                                        if (t.length < r.minArgs) throw new Error(`Expected at least ${r.minArgs} ${g(r.minArgs)} for ${e}(), got ${t.length}`);
                                        if (t.length > r.maxArgs) throw new Error(`Expected at most ${r.maxArgs} ${g(r.maxArgs)} for ${e}(), got ${t.length}`);
                                        return new Promise(((n, g) => {
                                            if (r.fallbackToNoCallback) try {
                                                s[e](...t, a({
                                                    resolve: n,
                                                    reject: g
                                                }, r))
                                            } catch (a) {
                                                s[e](...t), r.fallbackToNoCallback = !1, r.noCallback = !0, n()
                                            } else r.noCallback ? (s[e](...t), n()) : s[e](...t, a({
                                                resolve: n,
                                                reject: g
                                            }, r))
                                        }))
                                    },
                                    i = (e, r, s) => new Proxy(r, {
                                        apply: (r, t, n) => s.call(t, e, ...n)
                                    });
                                let o = Function.call.bind(Object.prototype.hasOwnProperty);
                                const A = (e, r = {}, s = {}) => {
                                        let t = Object.create(null),
                                            n = {
                                                has: (r, s) => s in e || s in t,
                                                get(n, a, g) {
                                                    if (a in t) return t[a];
                                                    if (!(a in e)) return;
                                                    let l = e[a];
                                                    if ("function" == typeof l)
                                                        if ("function" == typeof r[a]) l = i(e, e[a], r[a]);
                                                        else if (o(s, a)) {
                                                        let r = m(a, s[a]);
                                                        l = i(e, e[a], r)
                                                    } else l = l.bind(e);
                                                    else if ("object" == typeof l && null !== l && (o(r, a) || o(s, a))) l = A(l, r[a], s[a]);
                                                    else {
                                                        if (!o(s, "*")) return Object.defineProperty(t, a, {
                                                            configurable: !0,
                                                            enumerable: !0,
                                                            get: () => e[a],
                                                            set(r) {
                                                                e[a] = r
                                                            }
                                                        }), l;
                                                        l = A(l, r[a], s["*"])
                                                    }
                                                    return t[a] = l, l
                                                },
                                                set: (r, s, n, a) => (s in t ? t[s] = n : e[s] = n, !0),
                                                defineProperty: (e, r, s) => Reflect.defineProperty(t, r, s),
                                                deleteProperty: (e, r) => Reflect.deleteProperty(t, r)
                                            },
                                            a = Object.create(e);
                                        return new Proxy(a, n)
                                    },
                                    l = e => ({
                                        addListener(r, s, ...t) {
                                            r.addListener(e.get(s), ...t)
                                        },
                                        hasListener: (r, s) => r.hasListener(e.get(s)),
                                        removeListener(r, s) {
                                            r.removeListener(e.get(s))
                                        }
                                    }),
                                    c = new t((e => "function" != typeof e ? e : function(r) {
                                        const s = A(r, {}, {
                                            getContent: {
                                                minArgs: 0,
                                                maxArgs: 0
                                            }
                                        });
                                        e(s)
                                    })),
                                    x = new t((e => "function" != typeof e ? e : function(r, s, t) {
                                        let a, g, m = !1,
                                            i = new Promise((e => {
                                                a = function(r) {
                                                    m = !0, e(r)
                                                }
                                            }));
                                        try {
                                            g = e(r, s, a)
                                        } catch (e) {
                                            g = Promise.reject(e)
                                        }
                                        const o = !0 !== g && n(g);
                                        if (!0 !== g && !o && !m) return !1;
                                        const A = e => {
                                            e.then((e => {
                                                t(e)
                                            }), (e => {
                                                let r;
                                                r = e && (e instanceof Error || "string" == typeof e.message) ? e.message : "An unexpected error occurred", t({
                                                    __mozWebExtensionPolyfillReject__: !0,
                                                    message: r
                                                })
                                            })).catch((e => {}))
                                        };
                                        return A(o ? g : i), !0
                                    })),
                                    u = ({
                                        reject: s,
                                        resolve: t
                                    }, n) => {
                                        e.runtime.lastError ? e.runtime.lastError.message === r ? t() : s(new Error(e.runtime.lastError.message)) : n && n.__mozWebExtensionPolyfillReject__ ? s(new Error(n.message)) : t(n)
                                    },
                                    d = (e, r, s, ...t) => {
                                        if (t.length < r.minArgs) throw new Error(`Expected at least ${r.minArgs} ${g(r.minArgs)} for ${e}(), got ${t.length}`);
                                        if (t.length > r.maxArgs) throw new Error(`Expected at most ${r.maxArgs} ${g(r.maxArgs)} for ${e}(), got ${t.length}`);
                                        return new Promise(((e, r) => {
                                            const n = u.bind(null, {
                                                resolve: e,
                                                reject: r
                                            });
                                            t.push(n), s.sendMessage(...t)
                                        }))
                                    },
                                    f = {
                                        devtools: {
                                            network: {
                                                onRequestFinished: l(c)
                                            }
                                        },
                                        runtime: {
                                            onMessage: l(x),
                                            onMessageExternal: l(x),
                                            sendMessage: d.bind(null, "sendMessage", {
                                                minArgs: 1,
                                                maxArgs: 3
                                            })
                                        },
                                        tabs: {
                                            sendMessage: d.bind(null, "sendMessage", {
                                                minArgs: 2,
                                                maxArgs: 3
                                            })
                                        }
                                    },
                                    p = {
                                        clear: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        get: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        set: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        }
                                    };
                                return s.privacy = {
                                    network: {
                                        "*": p
                                    },
                                    services: {
                                        "*": p
                                    },
                                    websites: {
                                        "*": p
                                    }
                                }, A(e, f, s)
                            };
                        e.exports = s(chrome)
                    } else e.exports = globalThis.browser
                }, void 0 === (n = "function" == typeof s ? s.apply(r, t) : s) || (e.exports = n)
            }
        },
        a = {};

    function g(e) {
        var r = a[e];
        if (void 0 !== r) return r.exports;
        var s = a[e] = {
            exports: {}
        };
        return n[e].call(s.exports, s, s.exports, g), s.exports
    }
    g.m = n, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, g.t = function(s, t) {
        if (1 & t && (s = this(s)), 8 & t) return s;
        if ("object" == typeof s && s) {
            if (4 & t && s.__esModule) return s;
            if (16 & t && "function" == typeof s.then) return s
        }
        var n = Object.create(null);
        g.r(n);
        var a = {};
        e = e || [null, r({}), r([]), r(r)];
        for (var m = 2 & t && s;
            "object" == typeof m && !~e.indexOf(m); m = r(m)) Object.getOwnPropertyNames(m).forEach((e => a[e] = () => s[e]));
        return a.default = () => s, g.d(n, a), n
    }, g.d = (e, r) => {
        for (var s in r) g.o(r, s) && !g.o(e, s) && Object.defineProperty(e, s, {
            enumerable: !0,
            get: r[s]
        })
    }, g.f = {}, g.e = e => Promise.all(Object.keys(g.f).reduce(((r, s) => (g.f[s](e, r), r)), [])), g.u = e => "js/" + e + ".bundle.js", g.miniCssF = e => {}, g.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), g.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), s = {}, t = "sabre:", g.l = (e, r, n, a) => {
        if (s[e]) s[e].push(r);
        else {
            var m, i;
            if (void 0 !== n)
                for (var o = document.getElementsByTagName("script"), A = 0; A < o.length; A++) {
                    var l = o[A];
                    if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == t + n) {
                        m = l;
                        break
                    }
                }
            m || (i = !0, (m = document.createElement("script")).charset = "utf-8", m.timeout = 120, g.nc && m.setAttribute("nonce", g.nc), m.setAttribute("data-webpack", t + n), m.src = e), s[e] = [r];
            var c = (r, t) => {
                    m.onerror = m.onload = null, clearTimeout(x);
                    var n = s[e];
                    if (delete s[e], m.parentNode && m.parentNode.removeChild(m), n && n.forEach((e => e(t))), r) return r(t)
                },
                x = setTimeout(c.bind(null, void 0, {
                    type: "timeout",
                    target: m
                }), 12e4);
            m.onerror = c.bind(null, m.onerror), m.onload = c.bind(null, m.onload), i && document.head.appendChild(m)
        }
    }, g.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, (() => {
        var e;
        g.g.importScripts && (e = g.g.location + "");
        var r = g.g.document;
        if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
            var s = r.getElementsByTagName("script");
            s.length && (e = s[s.length - 1].src)
        }
        if (!e) throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), g.p = e + "../"
    })(), (() => {
        var e = {
            338: 0
        };
        g.f.j = (r, s) => {
            var t = g.o(e, r) ? e[r] : void 0;
            if (0 !== t)
                if (t) s.push(t[2]);
                else {
                    var n = new Promise(((s, n) => t = e[r] = [s, n]));
                    s.push(t[2] = n);
                    var a = g.p + g.u(r),
                        m = new Error;
                    g.l(a, (s => {
                        if (g.o(e, r) && (0 !== (t = e[r]) && (e[r] = void 0), t)) {
                            var n = s && ("load" === s.type ? "missing" : s.type),
                                a = s && s.target && s.target.src;
                            m.message = "Loading chunk " + r + " failed.\n(" + n + ": " + a + ")", m.name = "ChunkLoadError", m.type = n, m.request = a, t[1](m)
                        }
                    }), "chunk-" + r, r)
                }
        };
        var r = (r, s) => {
                var t, n, [a, m, i] = s,
                    o = 0;
                if (a.some((r => 0 !== e[r]))) {
                    for (t in m) g.o(m, t) && (g.m[t] = m[t]);
                    if (i) i(g)
                }
                for (r && r(s); o < a.length; o++) n = a[o], g.o(e, n) && e[n] && e[n][0](), e[n] = 0
            },
            s = self.webpackChunksabre = self.webpackChunksabre || [];
        s.forEach(r.bind(null, 0)), s.push = r.bind(null, s.push.bind(s))
    })(), (() => {
        "use strict";
        var e;
        const r = "undefined" != typeof process && (null === (e = process.versions) || void 0 === e ? void 0 : e.node) ? {} : g(3150);
        r.runtime.onMessage.addListener(((e, r) => {
            if ("offscreen" === e.target) return (async () => !!e.method && ("getPDFText" === e.method && (async e => {
                const r = await Promise.all([g.e(299), g.e(611)]).then(g.t.bind(g, 9299, 23)),
                    s = await g.e(16).then(g.t.bind(g, 9016, 23));
                r.GlobalWorkerOptions.workerSrc = s;
                const t = await r.getDocument(e).promise,
                    n = [];
                for (let e = 1; e <= t.numPages; e += 1) {
                    const r = await t.getPage(e),
                        s = (await r.getTextContent()).items.map((e => "str" in e && e.str)).filter(Boolean).join(" ");
                    n.push(s)
                }
                return n.join(" ")
            })(e.url)))()
        }))
    })()
})();