/*! BUILD: 2014-04-24 */ ! function() {
    var sMap = null;
    if ((sMap || "undefined" != typeof djConfig && djConfig.scopeMap) && "undefined" != typeof window) {
        var scopeDef = "",
            scopePrefix = "",
            scopeSuffix = "",
            scopeMap = {},
            scopeMapRev = {};
        sMap = sMap || djConfig.scopeMap;
        for (var i = 0; i < sMap.length; i++) {
            var newScope = sMap[i];
            scopeDef += "var " + newScope[0] + " = {}; " + newScope[1] + " = " + newScope[0] + ";" + newScope[1] + "._scopeName = '" + newScope[1] + "';", scopePrefix += (0 == i ? "" : ",") + newScope[0], scopeSuffix += (0 == i ? "" : ",") + newScope[1], scopeMap[newScope[0]] = newScope[1], scopeMapRev[newScope[1]] = newScope[0]
        }
        eval(scopeDef + "dojo._scopeArgs = [" + scopeSuffix + "];"), dojo._scopePrefixArgs = scopePrefix, dojo._scopePrefix = "(function(" + scopePrefix + "){", dojo._scopeSuffix = "})(" + scopeSuffix + ")", dojo._scopeMap = scopeMap, dojo._scopeMapRev = scopeMapRev
    }
    if (function() {
            if ("function" == typeof this.loadFirebugConsole) this.loadFirebugConsole();
            else {
                this.console = this.console || {};
                for (var cn = ["assert", "count", "debug", "dir", "dirxml", "error", "group", "groupEnd", "info", "profile", "profileEnd", "time", "timeEnd", "trace", "warn", "log"], i = 0, tn; tn = cn[i++];) console[tn] || ! function() {
                    var a = tn + "";
                    console[a] = "log" in console ? function() {
                        var b = Array.apply({}, arguments);
                        b.unshift(a + ":"), console.log(b.join(" "))
                    } : function() {}, console[a]._fake = !0
                }()
            }
            "undefined" == typeof dojo && (dojo = {
                _scopeName: "dojo",
                _scopePrefix: "",
                _scopePrefixArgs: "",
                _scopeSuffix: "",
                _scopeMap: {},
                _scopeMapRev: {}
            });
            var d = dojo;
            "undefined" == typeof dijit && (dijit = {
                _scopeName: "dijit"
            }), "undefined" == typeof dojox && (dojox = {
                _scopeName: "dojox"
            }), d._scopeArgs || (d._scopeArgs = [dojo, dijit, dojox]), d.global = this, d.config = {
                isDebug: !1,
                debugAtAllCosts: !1
            };
            var cfg = "undefined" != typeof djConfig ? djConfig : "undefined" != typeof dojoConfig ? dojoConfig : null;
            if (cfg)
                for (var c in cfg) d.config[c] = cfg[c];
            dojo.locale = d.config.locale;
            var rev = "$Rev: 24595 $".match(/\d+/);
            dojo.version = {
                major: 1,
                minor: 6,
                patch: 1,
                flag: "",
                revision: rev ? +rev[0] : 0 / 0,
                toString: function() {
                    with(d.version) return major + "." + minor + "." + patch + flag + " (" + revision + ")"
                }
            }, "undefined" != typeof OpenAjax && OpenAjax.hub.registerLibrary(dojo._scopeName, "http://dojotoolkit.org", d.version.toString());
            var extraNames, extraLen, empty = {};
            for (var i in {
                    toString: 1
                }) {
                extraNames = [];
                break
            }
            dojo._extraNames = extraNames = extraNames || ["hasOwnProperty", "valueOf", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "constructor"], extraLen = extraNames.length, dojo._mixin = function(a, b) {
                var c, d, e;
                for (c in b) d = b[c], c in a && (a[c] === d || c in empty && empty[c] === d) || (a[c] = d);
                if (extraLen && b)
                    for (e = 0; extraLen > e; ++e) c = extraNames[e], d = b[c], c in a && (a[c] === d || c in empty && empty[c] === d) || (a[c] = d);
                return a
            }, dojo.mixin = function(a) {
                a || (a = {});
                for (var b = 1, c = arguments.length; c > b; b++) d._mixin(a, arguments[b]);
                return a
            }, dojo._getProp = function(a, b, c) {
                for (var e, f = c || d.global, g = 0; f && (e = a[g]); g++) 0 == g && d._scopeMap[e] && (e = d._scopeMap[e]), f = e in f ? f[e] : b ? f[e] = {} : void 0;
                return f
            }, dojo.setObject = function(a, b, c) {
                var e = a.split("."),
                    f = e.pop(),
                    g = d._getProp(e, !0, c);
                return g && f ? g[f] = b : void 0
            }, dojo.getObject = function(a, b, c) {
                return d._getProp(a.split("."), b, c)
            }, dojo.exists = function(a, b) {
                return void 0 !== d.getObject(a, !1, b)
            }, dojo.eval = function(scriptFragment) {
                return d.global.eval ? d.global.eval(scriptFragment) : eval(scriptFragment)
            }, d.deprecated = d.experimental = function() {}
        }(), function() {
            var a, b = dojo;
            b.mixin(b, {
                _loadedModules: {},
                _inFlightCount: 0,
                _hasResource: {},
                _modulePrefixes: {
                    dojo: {
                        name: "dojo",
                        value: "."
                    },
                    doh: {
                        name: "doh",
                        value: "../util/doh"
                    },
                    tests: {
                        name: "tests",
                        value: "tests"
                    }
                },
                _moduleHasPrefix: function(a) {
                    var c = b._modulePrefixes;
                    return !(!c[a] || !c[a].value)
                },
                _getModulePrefix: function(a) {
                    var c = b._modulePrefixes;
                    return b._moduleHasPrefix(a) ? c[a].value : a
                },
                _loadedUrls: [],
                _postLoad: !1,
                _loaders: [],
                _unloaders: [],
                _loadNotifying: !1
            }), dojo._loadPath = function(c, d, e) {
                var f = ("/" == c.charAt(0) || c.match(/^\w+:/) ? "" : b.baseUrl) + c;
                try {
                    return a = d, d ? b._loadUriAndCheck(f, d, e) : b._loadUri(f, e)
                } catch (g) {
                    return console.error(g), !1
                } finally {
                    a = null
                }
            }, dojo._loadUri = function(a, c) {
                if (b._loadedUrls[a]) return !0;
                b._inFlightCount++;
                var d = b._getText(a, !0);
                if (d) {
                    b._loadedUrls[a] = !0, b._loadedUrls.push(a), d = c ? /^define\(/.test(d) ? d : "(" + d + ")" : b._scopePrefix + d + b._scopeSuffix, b.isIE || (d += "\r\n//@ sourceURL=" + a);
                    var e = b.eval(d);
                    c && c(e)
                }
                return 0 == --b._inFlightCount && b._postLoad && b._loaders.length && setTimeout(function() {
                    0 == b._inFlightCount && b._callLoaded()
                }, 0), !!d
            }, dojo._loadUriAndCheck = function(a, c, d) {
                var e = !1;
                try {
                    e = b._loadUri(a, d)
                } catch (f) {
                    console.error("failed loading " + a + " with error: " + f)
                }
                return !(!e || !b._loadedModules[c])
            }, dojo.loaded = function() {
                b._loadNotifying = !0, b._postLoad = !0;
                var a = b._loaders;
                b._loaders = [];
                for (var c = 0; c < a.length; c++) a[c]();
                b._loadNotifying = !1, b._postLoad && 0 == b._inFlightCount && a.length && b._callLoaded()
            }, dojo.unloaded = function() {
                for (var a = b._unloaders; a.length;) a.pop()()
            }, b._onto = function(a, b, c) {
                if (c) {
                    if (c) {
                        var d = "string" == typeof c ? b[c] : c;
                        a.push(function() {
                            d.call(b)
                        })
                    }
                } else a.push(b)
            }, dojo.ready = dojo.addOnLoad = function(a, c) {
                b._onto(b._loaders, a, c), b._postLoad && 0 == b._inFlightCount && !b._loadNotifying && b._callLoaded()
            };
            var c = b.config.addOnLoad;
            c && b.addOnLoad[c instanceof Array ? "apply" : "call"](b, c), dojo._modulesLoaded = function() {
                return b._postLoad ? void 0 : b._inFlightCount > 0 ? (console.warn("files still in flight!"), void 0) : (b._callLoaded(), void 0)
            }, dojo._callLoaded = function() {
                "object" == typeof setTimeout || b.config.useXDomain && b.isOpera ? setTimeout(b.isAIR ? function() {
                    b.loaded()
                } : b._scopeName + ".loaded();", 0) : b.loaded()
            }, dojo._getModuleSymbols = function(a) {
                for (var c = a.split("."), d = c.length; d > 0; d--) {
                    var e = c.slice(0, d).join(".");
                    if (1 != d || b._moduleHasPrefix(e)) {
                        var f = b._getModulePrefix(e);
                        if (f != e) {
                            c.splice(0, d, f);
                            break
                        }
                    } else c[0] = "../" + c[0]
                }
                return c
            }, dojo._global_omit_module_check = !1, dojo.loadInit = function(a) {
                a()
            }, dojo._loadModule = dojo.require = function(a, c) {
                c = b._global_omit_module_check || c;
                var d = b._loadedModules[a];
                if (d) return d;
                var e = b._getModuleSymbols(a).join("/") + ".js",
                    f = c ? null : a,
                    g = b._loadPath(e, f);
                if (!g && !c) throw new Error("Could not load '" + a + "'; last tried '" + e + "'");
                if (!c && !b._isXDomain && (d = b._loadedModules[a], !d)) throw new Error("symbol '" + a + "' is not defined after loading '" + e + "'");
                return d
            }, dojo.provide = function(a) {
                return a += "", b._loadedModules[a] = b.getObject(a, !0)
            }, dojo.platformRequire = function(a) {
                for (var c = a.common || [], d = c.concat(a[b._name] || a["default"] || []), e = 0; e < d.length; e++) {
                    var f = d[e];
                    f.constructor == Array ? b._loadModule.apply(b, f) : b._loadModule(f)
                }
            }, dojo.requireIf = function(a) {
                if (a === !0) {
                    for (var c = [], d = 1; d < arguments.length; d++) c.push(arguments[d]);
                    b.require.apply(b, c)
                }
            }, dojo.requireAfterIf = b.requireIf, dojo.registerModulePath = function(a, c) {
                b._modulePrefixes[a] = {
                    name: a,
                    value: c
                }
            }, dojo.requireLocalization = function() {
                b.require("dojo.i18n"), b.i18n._requireLocalization.apply(b.hostenv, arguments)
            };
            var d = new RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?$"),
                e = new RegExp("^((([^\\[:]+):)?([^@]+)@)?(\\[([^\\]]+)\\]|([^\\[:]*))(:([0-9]+))?$");
            dojo._Url = function() {
                for (var a = null, c = arguments, f = [c[0]], g = 1; g < c.length; g++)
                    if (c[g]) {
                        var h = new b._Url(c[g] + ""),
                            i = new b._Url(f[0] + "");
                        if ("" != h.path || h.scheme || h.authority || h.query) {
                            if (!h.scheme && (h.scheme = i.scheme, !h.authority && (h.authority = i.authority, "/" != h.path.charAt(0)))) {
                                for (var j = i.path.substring(0, i.path.lastIndexOf("/") + 1) + h.path, k = j.split("/"), l = 0; l < k.length; l++) "." == k[l] ? l == k.length - 1 ? k[l] = "" : (k.splice(l, 1), l--) : l > 0 && (1 != l || "" != k[0]) && ".." == k[l] && ".." != k[l - 1] && (l == k.length - 1 ? (k.splice(l, 1), k[l - 1] = "") : (k.splice(l - 1, 2), l -= 2));
                                h.path = k.join("/")
                            }
                        } else h.fragment != a && (i.fragment = h.fragment), h = i;
                        f = [], h.scheme && f.push(h.scheme, ":"), h.authority && f.push("//", h.authority), f.push(h.path), h.query && f.push("?", h.query), h.fragment && f.push("#", h.fragment)
                    }
                this.uri = f.join("");
                var m = this.uri.match(d);
                this.scheme = m[2] || (m[1] ? "" : a), this.authority = m[4] || (m[3] ? "" : a), this.path = m[5], this.query = m[7] || (m[6] ? "" : a), this.fragment = m[9] || (m[8] ? "" : a), this.authority != a && (m = this.authority.match(e), this.user = m[3] || a, this.password = m[4] || a, this.host = m[6] || m[7], this.port = m[9] || a)
            }, dojo._Url.prototype.toString = function() {
                return this.uri
            }, dojo.moduleUrl = function(a, c) {
                var d = b._getModuleSymbols(a).join("/");
                if (!d) return null;
                d.lastIndexOf("/") != d.length - 1 && (d += "/");
                var e = d.indexOf(":");
                return "/" != d.charAt(0) && (-1 == e || e > d.indexOf("/")) && (d = b.baseUrl + d), new b._Url(d, c)
            }
        }(), "undefined" != typeof window && (dojo.isBrowser = !0, dojo._name = "browser", function() {
            var d = dojo;
            if (document && document.getElementsByTagName)
                for (var scripts = document.getElementsByTagName("script"), rePkg = /dojo(\.xd)?\.js(\W|$)/i, i = 0; i < scripts.length; i++) {
                    var src = scripts[i].getAttribute("src");
                    if (src) {
                        var m = src.match(rePkg);
                        if (m) {
                            d.config.baseUrl || (d.config.baseUrl = src.substring(0, m.index));
                            var cfg = scripts[i].getAttribute("djConfig") || scripts[i].getAttribute("data-dojo-config");
                            if (cfg) {
                                var cfgo = eval("({ " + cfg + " })");
                                for (var x in cfgo) dojo.config[x] = cfgo[x]
                            }
                            break
                        }
                    }
                }
            d.baseUrl = d.config.baseUrl;
            var n = navigator,
                dua = n.userAgent,
                dav = n.appVersion,
                tv = parseFloat(dav);
            dua.indexOf("Opera") >= 0 && (d.isOpera = tv), dua.indexOf("AdobeAIR") >= 0 && (d.isAIR = 1), d.isKhtml = dav.indexOf("Konqueror") >= 0 ? tv : 0, d.isWebKit = parseFloat(dua.split("WebKit/")[1]) || void 0, d.isChrome = parseFloat(dua.split("Chrome/")[1]) || void 0, d.isMac = dav.indexOf("Macintosh") >= 0;
            var index = Math.max(dav.indexOf("WebKit"), dav.indexOf("Safari"), 0);
            if (index && !dojo.isChrome && (d.isSafari = parseFloat(dav.split("Version/")[1]), (!d.isSafari || parseFloat(dav.substr(index + 7)) <= 419.3) && (d.isSafari = 2)), dua.indexOf("Gecko") >= 0 && !d.isKhtml && !d.isWebKit && (d.isMozilla = d.isMoz = tv), d.isMoz && (d.isFF = parseFloat(dua.split("Firefox/")[1] || dua.split("Minefield/")[1]) || void 0), document.all && !d.isOpera) {
                d.isIE = parseFloat(dav.split("MSIE ")[1]) || void 0;
                var mode = document.documentMode;
                mode && 5 != mode && Math.floor(d.isIE) != mode && (d.isIE = mode)
            }
            dojo.isIE && "file:" === window.location.protocol && (dojo.config.ieForceActiveXXhr = !0), d.isQuirks = "BackCompat" == document.compatMode, d.locale = dojo.config.locale || (d.isIE ? n.userLanguage : n.language).toLowerCase(), d._XMLHTTP_PROGIDS = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"], d._xhrObj = function() {
                var a, b;
                if (!dojo.isIE || !dojo.config.ieForceActiveXXhr) try {
                    a = new XMLHttpRequest
                } catch (c) {}
                if (!a)
                    for (var e = 0; 3 > e; ++e) {
                        var f = d._XMLHTTP_PROGIDS[e];
                        try {
                            a = new ActiveXObject(f)
                        } catch (c) {
                            b = c
                        }
                        if (a) {
                            d._XMLHTTP_PROGIDS = [f];
                            break
                        }
                    }
                if (!a) throw new Error("XMLHTTP not available: " + b);
                return a
            }, d._isDocumentOk = function(a) {
                var b = a.status || 0,
                    c = location.protocol;
                return b >= 200 && 300 > b || 304 == b || 1223 == b || !b && ("file:" == c || "chrome:" == c || "chrome-extension:" == c || "app:" == c)
            };
            var owloc = window.location + "",
                base = document.getElementsByTagName("base"),
                hasBase = base && base.length > 0;
            d._getText = function(a, b) {
                var c = d._xhrObj();
                !hasBase && dojo._Url && (a = new dojo._Url(owloc, a).toString()), d.config.cacheBust && (a += "", a += (-1 == a.indexOf("?") ? "?" : "&") + String(d.config.cacheBust).replace(/\W+/g, "")), c.open("GET", a, !1);
                try {
                    if (c.send(null), !d._isDocumentOk(c)) {
                        var e = Error("Unable to load " + a + " status:" + c.status);
                        throw e.status = c.status, e.responseText = c.responseText, e
                    }
                } catch (f) {
                    if (b) return null;
                    throw f
                }
                return c.responseText
            };
            var _w = window,
                _handleNodeEvent = function(a, b) {
                    var c = _w.attachEvent || _w.addEventListener;
                    a = _w.attachEvent ? a : a.substring(2), c(a, function() {
                        b.apply(_w, arguments)
                    }, !1)
                };
            d._windowUnloaders = [], d.windowUnloaded = function() {
                for (var a = d._windowUnloaders; a.length;) a.pop()();
                d = null
            };
            var _onWindowUnloadAttached = 0;
            d.addOnWindowUnload = function(a, b) {
                d._onto(d._windowUnloaders, a, b), _onWindowUnloadAttached || (_onWindowUnloadAttached = 1, _handleNodeEvent("onunload", d.windowUnloaded))
            };
            var _onUnloadAttached = 0;
            d.addOnUnload = function(a, b) {
                d._onto(d._unloaders, a, b), _onUnloadAttached || (_onUnloadAttached = 1, _handleNodeEvent("onbeforeunload", dojo.unloaded))
            }
        }(), dojo._initFired = !1, dojo._loadInit = function() {
            dojo._scrollIntervalId && (clearInterval(dojo._scrollIntervalId), dojo._scrollIntervalId = 0), dojo._initFired || (dojo._initFired = !0, !dojo.config.afterOnLoad && window.detachEvent && window.detachEvent("onload", dojo._loadInit), 0 == dojo._inFlightCount && dojo._modulesLoaded())
        }, dojo.config.afterOnLoad || (document.addEventListener ? (document.addEventListener("DOMContentLoaded", dojo._loadInit, !1), window.addEventListener("load", dojo._loadInit, !1)) : window.attachEvent && (window.attachEvent("onload", dojo._loadInit), dojo.config.skipIeDomLoaded || self !== self.top || (dojo._scrollIntervalId = setInterval(function() {
            try {
                document.body && (document.documentElement.doScroll("left"), dojo._loadInit())
            } catch (a) {}
        }, 30)))), dojo.isIE)) try {
        ! function() {
            document.namespaces.add("v", "urn:schemas-microsoft-com:vml");
            var a = ["*", "group", "roundrect", "oval", "shape", "rect", "imagedata", "path", "textpath", "text"],
                b = 0,
                c = 1,
                d = document.createStyleSheet();
            for (dojo.isIE >= 8 && (b = 1, c = a.length); c > b; ++b) d.addRule("v\\:" + a[b], "behavior:url(#default#VML); display:inline-block")
        }()
    } catch (e) {}
    if (function() {
            var a = dojo.config.modulePaths;
            if (a)
                for (var b in a) dojo.registerModulePath(b, a[b])
        }(), dojo.config.isDebug && dojo.require("dojo._firebug.firebug"), dojo.config.debugAtAllCosts && (dojo.require("dojo._base._loader.loader_debug"), dojo.require("dojo.i18n")), dojo._hasResource["dojo._base.lang"] || (dojo._hasResource["dojo._base.lang"] = !0, dojo.provide("dojo._base.lang"), function() {
            var a = dojo,
                b = Object.prototype.toString;
            dojo.isString = function(a) {
                return "string" == typeof a || a instanceof String
            }, dojo.isArray = function(a) {
                return a && (a instanceof Array || "array" == typeof a)
            }, dojo.isFunction = function(a) {
                return "[object Function]" === b.call(a)
            }, dojo.isObject = function(b) {
                return void 0 !== b && (null === b || "object" == typeof b || a.isArray(b) || a.isFunction(b))
            }, dojo.isArrayLike = function(b) {
                return !(!b || void 0 === b || a.isString(b) || a.isFunction(b) || b.tagName && "form" == b.tagName.toLowerCase() || !a.isArray(b) && !isFinite(b.length))
            }, dojo.isAlien = function(b) {
                return b && !a.isFunction(b) && /\{\s*\[native code\]\s*\}/.test(String(b))
            }, dojo.extend = function(b) {
                for (var c = 1, d = arguments.length; d > c; c++) a._mixin(b.prototype, arguments[c]);
                return b
            }, dojo._hitchArgs = function(b, c) {
                var d = a._toArray(arguments, 2),
                    e = a.isString(c);
                return function() {
                    var f = a._toArray(arguments),
                        g = e ? (b || a.global)[c] : c;
                    return g && g.apply(b || this, d.concat(f))
                }
            }, dojo.hitch = function(b, c) {
                if (arguments.length > 2) return a._hitchArgs.apply(a, arguments);
                if (c || (c = b, b = null), a.isString(c)) {
                    if (b = b || a.global, !b[c]) throw ['dojo.hitch: scope["', c, '"] is null (scope="', b, '")'].join("");
                    return function() {
                        return b[c].apply(b, arguments || [])
                    }
                }
                return b ? function() {
                    return c.apply(b, arguments || [])
                } : c
            }, dojo.delegate = dojo._delegate = function() {
                function b() {}
                return function(c, d) {
                    b.prototype = c;
                    var e = new b;
                    return b.prototype = null, d && a._mixin(e, d), e
                }
            }();
            var c = function(a, b, c) {
                    return (c || []).concat(Array.prototype.slice.call(a, b || 0))
                },
                d = function(a, b, c) {
                    for (var d = c || [], e = b || 0; e < a.length; e++) d.push(a[e]);
                    return d
                };
            dojo._toArray = a.isIE ? function(a) {
                return (a.item ? d : c).apply(this, arguments)
            } : c, dojo.partial = function() {
                var b = [null];
                return a.hitch.apply(a, b.concat(a._toArray(arguments)))
            };
            var e = a._extraNames,
                f = e.length,
                g = {};
            dojo.clone = function(b) {
                if (!b || "object" != typeof b || a.isFunction(b)) return b;
                if (b.nodeType && "cloneNode" in b) return b.cloneNode(!0);
                if (b instanceof Date) return new Date(b.getTime());
                if (b instanceof RegExp) return new RegExp(b);
                var c, d, h, i, j;
                if (a.isArray(b))
                    for (c = [], d = 0, h = b.length; h > d; ++d) d in b && c.push(a.clone(b[d]));
                else c = b.constructor ? new b.constructor : {};
                for (j in b) i = b[j], j in c && (c[j] === i || j in g && g[j] === i) || (c[j] = a.clone(i));
                if (f)
                    for (d = 0; f > d; ++d) j = e[d], i = b[j], j in c && (c[j] === i || j in g && g[j] === i) || (c[j] = i);
                return c
            }, dojo.trim = String.prototype.trim ? function(a) {
                return a.trim()
            } : function(a) {
                return a.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
            };
            var h = /\{([^\}]+)\}/g;
            dojo.replace = function(b, c, d) {
                return b.replace(d || h, a.isFunction(c) ? c : function(b, d) {
                    return a.getObject(d, !1, c)
                })
            }
        }()), dojo._hasResource["dojo._base.array"] || (dojo._hasResource["dojo._base.array"] = !0, dojo.provide("dojo._base.array"), function() {
            var a = function(a, b, c) {
                    return ["string" == typeof a ? a.split("") : a, b || dojo.global, "string" == typeof c ? new Function("item", "index", "array", c) : c]
                },
                b = function(b, c, d, e) {
                    var f = a(c, e, d);
                    c = f[0];
                    for (var g = 0, h = c.length; h > g; ++g) {
                        var i = !!f[2].call(f[1], c[g], g, c);
                        if (b ^ i) return i
                    }
                    return b
                };
            dojo.mixin(dojo, {
                indexOf: function(a, b, c, d) {
                    var e = 1,
                        f = a.length || 0,
                        g = 0;
                    if (d && (g = f - 1, e = f = -1), void 0 != c && (g = c), d && g > f || f > g)
                        for (; g != f; g += e)
                            if (a[g] == b) return g;
                    return -1
                },
                lastIndexOf: function(a, b, c) {
                    return dojo.indexOf(a, b, c, !0)
                },
                forEach: function(b, c, d) {
                    if (b && b.length) {
                        var e = a(b, d, c);
                        b = e[0];
                        for (var f = 0, g = b.length; g > f; ++f) e[2].call(e[1], b[f], f, b)
                    }
                },
                every: function(a, c, d) {
                    return b(!0, a, c, d)
                },
                some: function(a, c, d) {
                    return b(!1, a, c, d)
                },
                map: function(b, c, d) {
                    var e = a(b, d, c);
                    b = e[0];
                    for (var f = arguments[3] ? new arguments[3] : [], g = 0, h = b.length; h > g; ++g) f.push(e[2].call(e[1], b[g], g, b));
                    return f
                },
                filter: function(b, c, d) {
                    var e = a(b, d, c);
                    b = e[0];
                    for (var f = [], g = 0, h = b.length; h > g; ++g) e[2].call(e[1], b[g], g, b) && f.push(b[g]);
                    return f
                }
            })
        }()), dojo._hasResource["dojo._base.declare"] || (dojo._hasResource["dojo._base.declare"] = !0, dojo.provide("dojo._base.declare"), function() {
            function a(a, b) {
                throw new Error("declare" + (b ? " " + b : "") + ": " + a)
            }

            function b(b, c) {
                for (var d, e, f, g, h, i, j, k, l = [], m = [{
                        cls: 0,
                        refs: []
                    }], n = {}, o = 1, p = b.length, q = 0; p > q; ++q) {
                    for (f = b[q], f ? "[object Function]" != r.call(f) && a("mixin #" + q + " is not a callable constructor.", c) : a("mixin #" + q + " is unknown. Did you use dojo.require to pull it in?", c), e = f._meta ? f._meta.bases : [f], g = 0, d = e.length - 1; d >= 0; --d) h = e[d].prototype, h.hasOwnProperty("declaredClass") || (h.declaredClass = "uniqName_" + t++), j = h.declaredClass, n.hasOwnProperty(j) || (n[j] = {
                        count: 0,
                        refs: [],
                        cls: e[d]
                    }, ++o), i = n[j], g && g !== i && (i.refs.push(g), ++g.count), g = i;
                    ++g.count, m[0].refs.push(g)
                }
                for (; m.length;) {
                    for (g = m.pop(), l.push(g.cls), --o; k = g.refs, 1 == k.length;) {
                        if (g = k[0], !g || --g.count) {
                            g = 0;
                            break
                        }
                        l.push(g.cls), --o
                    }
                    if (g)
                        for (q = 0, p = k.length; p > q; ++q) g = k[q], --g.count || m.push(g)
                }
                return o && a("can't build consistent linearization", c), f = b[0], l[0] = f ? f._meta && f === l[l.length - f._meta.bases.length] ? f._meta.bases.length : 1 : 0, l
            }

            function c(b, c, d) {
                var e, f, g, h, i, j, k, l, m, n = this._inherited = this._inherited || {};
                if ("string" == typeof b && (e = b, b = c, c = d), d = 0, h = b.callee, e = e || h.nom, e || a("can't deduce a name to call inherited()", this.declaredClass), i = this.constructor._meta, g = i.bases, m = n.p, e != u) {
                    if (n.c !== h && (m = 0, j = g[0], i = j._meta, i.hidden[e] !== h)) {
                        f = i.chains, f && "string" == typeof f[e] && a("calling chained method with inherited: " + e, this.declaredClass);
                        do
                            if (i = j._meta, k = j.prototype, i && (k[e] === h && k.hasOwnProperty(e) || i.hidden[e] === h)) break; while (j = g[++m]);
                        m = j ? m : -1
                    }
                    if (j = g[++m])
                        if (k = j.prototype, j._meta && k.hasOwnProperty(e)) d = k[e];
                        else {
                            l = q[e];
                            do
                                if (k = j.prototype, d = k[e], d && (j._meta ? k.hasOwnProperty(e) : d !== l)) break; while (j = g[++m])
                        }
                    d = j && d || q[e]
                } else {
                    if (n.c !== h && (m = 0, i = g[0]._meta, i && i.ctor !== h)) {
                        for (f = i.chains, f && "manual" === f.constructor || a("calling chained constructor with inherited", this.declaredClass);
                            (j = g[++m]) && (i = j._meta, !i || i.ctor !== h););
                        m = j ? m : -1
                    }
                    for (;
                        (j = g[++m]) && (i = j._meta, !(d = i ? i.ctor : j)););
                    d = j && d
                }
                return n.c = d, n.p = m, d ? c === !0 ? d : d.apply(this, c || b) : void 0
            }

            function d(a, b) {
                return "string" == typeof a ? this.inherited(a, b, !0) : this.inherited(a, !0)
            }

            function e(a) {
                for (var b = this.constructor._meta.bases, c = 0, d = b.length; d > c; ++c)
                    if (b[c] === a) return !0;
                return this instanceof a
            }

            function f(a, b) {
                var c, d = 0,
                    e = o._extraNames.length;
                for (c in b) c != u && b.hasOwnProperty(c) && (a[c] = b[c]);
                for (; e > d; ++d) c = o._extraNames[d], c != u && b.hasOwnProperty(c) && (a[c] = b[c])
            }

            function g(a, b) {
                var c, d, e = 0,
                    f = o._extraNames.length;
                for (c in b) d = b[c], d === q[c] && c in q || c == u || ("[object Function]" == r.call(d) && (d.nom = c), a[c] = d);
                for (; f > e; ++e) c = o._extraNames[e], d = b[c], d === q[c] && c in q || c == u || ("[object Function]" == r.call(d) && (d.nom = c), a[c] = d);
                return a
            }

            function h(a) {
                return g(this.prototype, a), this
            }

            function i(a, b) {
                return function() {
                    var c, d, e, f, g = arguments,
                        h = g,
                        i = g[0],
                        j = a.length;
                    if (!(this instanceof g.callee)) return n(g);
                    if (b && (i && i.preamble || this.preamble))
                        for (f = new Array(a.length), f[0] = g, d = 0; i = g[0], i && (c = i.preamble, c && (g = c.apply(this, g) || g)), c = a[d].prototype, c = c.hasOwnProperty("preamble") && c.preamble, c && (g = c.apply(this, g) || g), ++d != j;) f[d] = g;
                    for (d = j - 1; d >= 0; --d) c = a[d], e = c._meta, c = e ? e.ctor : c, c && c.apply(this, f ? f[d] : g);
                    c = this.postscript, c && c.apply(this, h)
                }
            }

            function j(a, b) {
                return function() {
                    var c, d = arguments,
                        e = d,
                        f = d[0];
                    return this instanceof d.callee ? (b && (f && (c = f.preamble, c && (e = c.apply(this, e) || e)), c = this.preamble, c && c.apply(this, e)), a && a.apply(this, d), c = this.postscript, c && c.apply(this, d), void 0) : n(d)
                }
            }

            function k(a) {
                return function() {
                    var b, c, d = arguments,
                        e = 0;
                    if (!(this instanceof d.callee)) return n(d);
                    for (; b = a[e]; ++e)
                        if (c = b._meta, b = c ? c.ctor : b) {
                            b.apply(this, d);
                            break
                        }
                    b = this.postscript, b && b.apply(this, d)
                }
            }

            function l(a, b, c) {
                return function() {
                    var d, e, f, g = 0,
                        h = 1;
                    for (c && (g = b.length - 1, h = -1); d = b[g]; g += h) e = d._meta, f = (e ? e.hidden : d.prototype)[a], f && f.apply(this, arguments)
                }
            }

            function m(a) {
                s.prototype = a.prototype;
                var b = new s;
                return s.prototype = null, b
            }

            function n(a) {
                var b = a.callee,
                    c = m(b);
                return b.apply(c, a), c
            }
            var o = dojo,
                p = o._mixin,
                q = Object.prototype,
                r = q.toString,
                s = new Function,
                t = 0,
                u = "constructor";
            o.declare = function(n, s, t) {
                "string" != typeof n && (t = s, s = n, n = ""), t = t || {};
                var v, w, x, y, z, A, B, C = 1,
                    D = s;
                if ("[object Array]" == r.call(s) ? (A = b(s, n), x = A[0], C = A.length - x, s = A[C]) : (A = [0], s ? "[object Function]" == r.call(s) ? (x = s._meta, A = A.concat(x ? x.bases : s)) : a("base class is not a callable constructor.", n) : null !== s && a("unknown base class. Did you use dojo.require to pull it in?", n)), s)
                    for (w = C - 1; v = m(s), w; --w) x = A[w], (x._meta ? f : p)(v, x.prototype), y = new Function, y.superclass = s, y.prototype = v, s = v.constructor = y;
                else v = {};
                for (g(v, t), x = t.constructor, x !== q.constructor && (x.nom = u, v.constructor = x), w = C - 1; w; --w) x = A[w]._meta, x && x.chains && (B = p(B || {}, x.chains));
                if (v["-chains-"] && (B = p(B || {}, v["-chains-"])), x = !B || !B.hasOwnProperty(u), A[0] = y = B && "manual" === B.constructor ? k(A) : 1 == A.length ? j(t.constructor, x) : i(A, x), y._meta = {
                        bases: A,
                        hidden: t,
                        chains: B,
                        parents: D,
                        ctor: t.constructor
                    }, y.superclass = s && s.prototype, y.extend = h, y.prototype = v, v.constructor = y, v.getInherited = d, v.inherited = c, v.isInstanceOf = e, n && (v.declaredClass = n, o.setObject(n, y)), B)
                    for (z in B) v[z] && "string" == typeof B[z] && z != u && (x = v[z] = l(z, A, "after" === B[z]), x.nom = z);
                return y
            }, o.safeMixin = g
        }()), dojo._hasResource["dojo._base.connect"] || (dojo._hasResource["dojo._base.connect"] = !0, dojo.provide("dojo._base.connect"), dojo._listener = {
            getDispatcher: function() {
                return function() {
                    var a, b = Array.prototype,
                        c = arguments.callee,
                        d = c._listeners,
                        e = c.target,
                        f = e && e.apply(this, arguments),
                        g = [].concat(d);
                    for (a in g) a in b || g[a].apply(this, arguments);
                    return f
                }
            },
            add: function(a, b, c) {
                a = a || dojo.global;
                var d = a[b];
                if (!d || !d._listeners) {
                    var e = dojo._listener.getDispatcher();
                    e.target = d, e._listeners = [], d = a[b] = e
                }
                return d._listeners.push(c)
            },
            remove: function(a, b, c) {
                var d = (a || dojo.global)[b];
                d && d._listeners && c-- && delete d._listeners[c]
            }
        }, dojo.connect = function() {
            var a = arguments,
                b = [],
                c = 0;
            b.push(dojo.isString(a[0]) ? null : a[c++], a[c++]);
            var d = a[c + 1];
            b.push(dojo.isString(d) || dojo.isFunction(d) ? a[c++] : null, a[c++]);
            for (var e = a.length; e > c; c++) b.push(a[c]);
            return dojo._connect.apply(this, b)
        }, dojo._connect = function(a, b, c, d) {
            var e = dojo._listener,
                f = e.add(a, b, dojo.hitch(c, d));
            return [a, b, f, e]
        }, dojo.disconnect = function(a) {
            a && void 0 !== a[0] && (dojo._disconnect.apply(this, a), delete a[0])
        }, dojo._disconnect = function(a, b, c, d) {
            d.remove(a, b, c)
        }, dojo._topics = {}, dojo.subscribe = function(a, b, c) {
            return [a, dojo._listener.add(dojo._topics, a, dojo.hitch(b, c))]
        }, dojo.unsubscribe = function(a) {
            a && dojo._listener.remove(dojo._topics, a[0], a[1])
        }, dojo.publish = function(a, b) {
            var c = dojo._topics[a];
            c && c.apply(this, b || [])
        }, dojo.connectPublisher = function(a, b, c) {
            var d = function() {
                dojo.publish(a, arguments)
            };
            return c ? dojo.connect(b, c, d) : dojo.connect(b, d)
        }), dojo._hasResource["dojo._base.Deferred"] || (dojo._hasResource["dojo._base.Deferred"] = !0, dojo.provide("dojo._base.Deferred"), function() {
            var a = function() {},
                b = Object.freeze || function() {};
            dojo.Deferred = function(c) {
                function d(a) {
                    if (g) throw new Error("This deferred has already been resolved");
                    f = a, g = !0, e()
                }

                function e() {
                    for (var b; !b && j;) {
                        var c = j;
                        j = j.next, (b = c.progress == a) && (g = !1);
                        var d = h ? c.error : c.resolved;
                        if (d) try {
                            var e = d(f);
                            if (e && "function" == typeof e.then) {
                                e.then(dojo.hitch(c.deferred, "resolve"), dojo.hitch(c.deferred, "reject"));
                                continue
                            }
                            var i = b && void 0 === e;
                            b && !i && (h = e instanceof Error), c.deferred[i && h ? "reject" : "resolve"](i ? f : e)
                        } catch (k) {
                            c.deferred.reject(k)
                        } else h ? c.deferred.reject(f) : c.deferred.resolve(f)
                    }
                }
                var f, g, h, i, j, k = this.promise = {};
                this.resolve = this.callback = function(a) {
                    this.fired = 0, this.results = [a, null], d(a)
                }, this.reject = this.errback = function(a) {
                    h = !0, this.fired = 1, d(a), this.results = [null, a], a && a.log === !1 || (dojo.config.deferredOnError || function(a) {
                        console.error(a)
                    })(a)
                }, this.progress = function(a) {
                    for (var b = j; b;) {
                        var c = b.progress;
                        c && c(a), b = b.next
                    }
                }, this.addCallbacks = function(b, c) {
                    return this.then(b, c, a), this
                }, this.then = k.then = function(b, c, d) {
                    var f = d == a ? this : new dojo.Deferred(k.cancel),
                        h = {
                            resolved: b,
                            error: c,
                            progress: d,
                            deferred: f
                        };
                    return j ? i = i.next = h : j = i = h, g && e(), f.promise
                };
                var l = this;
                this.cancel = k.cancel = function() {
                    if (!g) {
                        var a = c && c(l);
                        g || (a instanceof Error || (a = new Error(a)), a.log = !1, l.reject(a))
                    }
                }, b(k)
            }, dojo.extend(dojo.Deferred, {
                addCallback: function() {
                    return this.addCallbacks(dojo.hitch.apply(dojo, arguments))
                },
                addErrback: function() {
                    return this.addCallbacks(null, dojo.hitch.apply(dojo, arguments))
                },
                addBoth: function() {
                    var a = dojo.hitch.apply(dojo, arguments);
                    return this.addCallbacks(a, a)
                },
                fired: -1
            })
        }(), dojo.when = function(a, b, c, d) {
            return a && "function" == typeof a.then ? a.then(b, c, d) : b(a)
        }), dojo._hasResource["dojo._base.json"] || (dojo._hasResource["dojo._base.json"] = !0, dojo.provide("dojo._base.json"), dojo.fromJson = function(json) {
            return eval("(" + json + ")")
        }, dojo._escapeString = function(a) {
            return ('"' + a.replace(/(["\\])/g, "\\$1") + '"').replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r")
        }, dojo.toJsonIndentStr = "	", dojo.toJson = function(a, b, c) {
            if (void 0 === a) return "undefined";
            var d = typeof a;
            if ("number" == d || "boolean" == d) return a + "";
            if (null === a) return "null";
            if (dojo.isString(a)) return dojo._escapeString(a);
            var e, f = arguments.callee;
            c = c || "";
            var g = b ? c + dojo.toJsonIndentStr : "",
                h = a.__json__ || a.json;
            if (dojo.isFunction(h) && (e = h.call(a), a !== e)) return f(e, b, g);
            if (a.nodeType && a.cloneNode) throw new Error("Can't serialize DOM nodes");
            var i = b ? " " : "",
                j = b ? "\n" : "";
            if (dojo.isArray(a)) {
                var k = dojo.map(a, function(a) {
                    var c = f(a, b, g);
                    return "string" != typeof c && (c = "undefined"), j + g + c
                });
                return "[" + k.join("," + i) + j + c + "]"
            }
            if ("function" == d) return null;
            var l, m = [];
            for (l in a) {
                var n, o;
                if ("number" == typeof l) n = '"' + l + '"';
                else {
                    if ("string" != typeof l) continue;
                    n = dojo._escapeString(l)
                }
                o = f(a[l], b, g), "string" == typeof o && m.push(j + g + n + ":" + i + o)
            }
            return "{" + m.join("," + i) + j + c + "}"
        }), dojo._hasResource["dojo._base.Color"] || (dojo._hasResource["dojo._base.Color"] = !0, dojo.provide("dojo._base.Color"), function() {
            var a = dojo;
            dojo.Color = function(a) {
                a && this.setColor(a)
            }, dojo.Color.named = {
                black: [0, 0, 0],
                silver: [192, 192, 192],
                gray: [128, 128, 128],
                white: [255, 255, 255],
                maroon: [128, 0, 0],
                red: [255, 0, 0],
                purple: [128, 0, 128],
                fuchsia: [255, 0, 255],
                green: [0, 128, 0],
                lime: [0, 255, 0],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                navy: [0, 0, 128],
                blue: [0, 0, 255],
                teal: [0, 128, 128],
                aqua: [0, 255, 255],
                transparent: a.config.transparentColor || [255, 255, 255]
            }, dojo.extend(dojo.Color, {
                r: 255,
                g: 255,
                b: 255,
                a: 1,
                _set: function(a, b, c, d) {
                    var e = this;
                    e.r = a, e.g = b, e.b = c, e.a = d
                },
                setColor: function(b) {
                    return a.isString(b) ? a.colorFromString(b, this) : a.isArray(b) ? a.colorFromArray(b, this) : (this._set(b.r, b.g, b.b, b.a), b instanceof a.Color || this.sanitize()), this
                },
                sanitize: function() {
                    return this
                },
                toRgb: function() {
                    var a = this;
                    return [a.r, a.g, a.b]
                },
                toRgba: function() {
                    var a = this;
                    return [a.r, a.g, a.b, a.a]
                },
                toHex: function() {
                    var b = a.map(["r", "g", "b"], function(a) {
                        var b = this[a].toString(16);
                        return b.length < 2 ? "0" + b : b
                    }, this);
                    return "#" + b.join("")
                },
                toCss: function(a) {
                    var b = this,
                        c = b.r + ", " + b.g + ", " + b.b;
                    return (a ? "rgba(" + c + ", " + b.a : "rgb(" + c) + ")"
                },
                toString: function() {
                    return this.toCss(!0)
                }
            }), dojo.blendColors = function(b, c, d, e) {
                var f = e || new a.Color;
                return a.forEach(["r", "g", "b", "a"], function(a) {
                    f[a] = b[a] + (c[a] - b[a]) * d, "a" != a && (f[a] = Math.round(f[a]))
                }), f.sanitize()
            }, dojo.colorFromRgb = function(a, b) {
                var c = a.toLowerCase().match(/^rgba?\(([\s\.,0-9]+)\)/);
                return c && dojo.colorFromArray(c[1].split(/\s*,\s*/), b)
            }, dojo.colorFromHex = function(b, c) {
                var d = c || new a.Color,
                    e = 4 == b.length ? 4 : 8,
                    f = (1 << e) - 1;
                return b = Number("0x" + b.substr(1)), isNaN(b) ? null : (a.forEach(["b", "g", "r"], function(a) {
                    var c = b & f;
                    b >>= e, d[a] = 4 == e ? 17 * c : c
                }), d.a = 1, d)
            }, dojo.colorFromArray = function(b, c) {
                var d = c || new a.Color;
                return d._set(Number(b[0]), Number(b[1]), Number(b[2]), Number(b[3])), isNaN(d.a) && (d.a = 1), d.sanitize()
            }, dojo.colorFromString = function(b, c) {
                var d = a.Color.named[b];
                return d && a.colorFromArray(d, c) || a.colorFromRgb(b, c) || a.colorFromHex(b, c)
            }
        }()), dojo._hasResource["dojo._base.window"] || (dojo._hasResource["dojo._base.window"] = !0, dojo.provide("dojo._base.window"), dojo.doc = window.document || null, dojo.body = function() {
            return dojo.doc.body || dojo.doc.getElementsByTagName("body")[0]
        }, dojo.setContext = function(a, b) {
            dojo.global = a, dojo.doc = b
        }, dojo.withGlobal = function(a, b, c, d) {
            var e = dojo.global;
            try {
                return dojo.global = a, dojo.withDoc.call(null, a.document, b, c, d)
            } finally {
                dojo.global = e
            }
        }, dojo.withDoc = function(a, b, c, d) {
            var e = dojo.doc,
                f = dojo._bodyLtr,
                g = dojo.isQuirks;
            try {
                return dojo.doc = a, delete dojo._bodyLtr, dojo.isQuirks = "BackCompat" == dojo.doc.compatMode, c && "string" == typeof b && (b = c[b]), b.apply(c, d || [])
            } finally {
                dojo.doc = e, delete dojo._bodyLtr, void 0 !== f && (dojo._bodyLtr = f), dojo.isQuirks = g
            }
        }), dojo._hasResource["dojo._base.event"] || (dojo._hasResource["dojo._base.event"] = !0, dojo.provide("dojo._base.event"), function() {
            var a = dojo._event_listener = {
                add: function(b, c, d) {
                    if (b) {
                        if (c = a._normalizeEventName(c), d = a._fixCallback(c, d), !dojo.isIE && ("mouseenter" == c || "mouseleave" == c)) {
                            var e = d;
                            c = "mouseenter" == c ? "mouseover" : "mouseout", d = function(a) {
                                return dojo.isDescendant(a.relatedTarget, b) ? void 0 : e.call(this, a)
                            }
                        }
                        return b.addEventListener(c, d, !1), d
                    }
                },
                remove: function(b, c, d) {
                    b && (c = a._normalizeEventName(c), dojo.isIE || "mouseenter" != c && "mouseleave" != c || (c = "mouseenter" == c ? "mouseover" : "mouseout"), b.removeEventListener(c, d, !1))
                },
                _normalizeEventName: function(a) {
                    return "on" == a.slice(0, 2) ? a.slice(2) : a
                },
                _fixCallback: function(b, c) {
                    return "keypress" != b ? c : function(b) {
                        return c.call(this, a._fixEvent(b, this))
                    }
                },
                _fixEvent: function(b) {
                    switch (b.type) {
                        case "keypress":
                            a._setKeyChar(b)
                    }
                    return b
                },
                _setKeyChar: function(a) {
                    a.keyChar = a.charCode >= 32 ? String.fromCharCode(a.charCode) : "", a.charOrCode = a.keyChar || a.keyCode
                },
                _punctMap: {
                    106: 42,
                    111: 47,
                    186: 59,
                    187: 43,
                    188: 44,
                    189: 45,
                    190: 46,
                    191: 47,
                    192: 96,
                    219: 91,
                    220: 92,
                    221: 93,
                    222: 39
                }
            };
            dojo.fixEvent = function(b, c) {
                return a._fixEvent(b, c)
            }, dojo.stopEvent = function(a) {
                a.preventDefault(), a.stopPropagation()
            };
            var b = dojo._listener;
            dojo._connect = function(c, d, e, f, g) {
                var h = c && (c.nodeType || c.attachEvent || c.addEventListener),
                    i = h ? g ? 2 : 1 : 0,
                    j = [dojo._listener, a, b][i],
                    k = j.add(c, d, dojo.hitch(e, f));
                return [c, d, k, i]
            }, dojo._disconnect = function(c, d, e, f) {
                [dojo._listener, a, b][f].remove(c, d, e)
            }, dojo.keys = {
                BACKSPACE: 8,
                TAB: 9,
                CLEAR: 12,
                ENTER: 13,
                SHIFT: 16,
                CTRL: 17,
                ALT: 18,
                META: dojo.isSafari ? 91 : 224,
                PAUSE: 19,
                CAPS_LOCK: 20,
                ESCAPE: 27,
                SPACE: 32,
                PAGE_UP: 33,
                PAGE_DOWN: 34,
                END: 35,
                HOME: 36,
                LEFT_ARROW: 37,
                UP_ARROW: 38,
                RIGHT_ARROW: 39,
                DOWN_ARROW: 40,
                INSERT: 45,
                DELETE: 46,
                HELP: 47,
                LEFT_WINDOW: 91,
                RIGHT_WINDOW: 92,
                SELECT: 93,
                NUMPAD_0: 96,
                NUMPAD_1: 97,
                NUMPAD_2: 98,
                NUMPAD_3: 99,
                NUMPAD_4: 100,
                NUMPAD_5: 101,
                NUMPAD_6: 102,
                NUMPAD_7: 103,
                NUMPAD_8: 104,
                NUMPAD_9: 105,
                NUMPAD_MULTIPLY: 106,
                NUMPAD_PLUS: 107,
                NUMPAD_ENTER: 108,
                NUMPAD_MINUS: 109,
                NUMPAD_PERIOD: 110,
                NUMPAD_DIVIDE: 111,
                F1: 112,
                F2: 113,
                F3: 114,
                F4: 115,
                F5: 116,
                F6: 117,
                F7: 118,
                F8: 119,
                F9: 120,
                F10: 121,
                F11: 122,
                F12: 123,
                F13: 124,
                F14: 125,
                F15: 126,
                NUM_LOCK: 144,
                SCROLL_LOCK: 145,
                copyKey: dojo.isMac && !dojo.isAIR ? dojo.isSafari ? 91 : 224 : 17
            };
            var c = dojo.isMac ? "metaKey" : "ctrlKey";
            if (dojo.isCopyKey = function(a) {
                    return a[c]
                }, dojo.mouseButtons = dojo.isIE < 9 || dojo.isIE && dojo.isQuirks ? {
                    LEFT: 1,
                    MIDDLE: 4,
                    RIGHT: 2,
                    isButton: function(a, b) {
                        return a.button & b
                    },
                    isLeft: function(a) {
                        return 1 & a.button
                    },
                    isMiddle: function(a) {
                        return 4 & a.button
                    },
                    isRight: function(a) {
                        return 2 & a.button
                    }
                } : {
                    LEFT: 0,
                    MIDDLE: 1,
                    RIGHT: 2,
                    isButton: function(a, b) {
                        return a.button == b
                    },
                    isLeft: function(a) {
                        return 0 == a.button
                    },
                    isMiddle: function(a) {
                        return 1 == a.button
                    },
                    isRight: function(a) {
                        return 2 == a.button
                    }
                }, dojo.isIE) {
                var d = function(a, b) {
                        try {
                            return a.keyCode = b
                        } catch (a) {
                            return 0
                        }
                    },
                    e = dojo._listener,
                    f = dojo._ieListenersName = "_" + dojo._scopeName + "_listeners";
                if (!dojo.config._allow_leaks) {
                    b = e = dojo._ie_listener = {
                        handlers: [],
                        add: function(a, b, c) {
                            a = a || dojo.global;
                            var d = a[b];
                            if (!d || !d[f]) {
                                var e = dojo._getIeDispatcher();
                                e.target = d && g.push(d) - 1, e[f] = [], d = a[b] = e
                            }
                            return d[f].push(g.push(c) - 1)
                        },
                        remove: function(a, b, c) {
                            var d = (a || dojo.global)[b],
                                e = d && d[f];
                            d && e && c-- && (delete g[e[c]], delete e[c])
                        }
                    };
                    var g = e.handlers
                }
                dojo.mixin(a, {
                    add: function(b, c, d) {
                        if (b) {
                            if (c = a._normalizeEventName(c), "onkeypress" == c) {
                                var g = b.onkeydown;
                                if (g && g[f] && g._stealthKeydownHandle) g._stealthKeydownRefs++;
                                else {
                                    var h = a.add(b, "onkeydown", a._stealthKeyDown);
                                    g = b.onkeydown, g._stealthKeydownHandle = h, g._stealthKeydownRefs = 1
                                }
                            }
                            return e.add(b, c, a._fixCallback(d))
                        }
                    },
                    remove: function(b, c, d) {
                        if (c = a._normalizeEventName(c), e.remove(b, c, d), "onkeypress" == c) {
                            var f = b.onkeydown;
                            --f._stealthKeydownRefs <= 0 && (e.remove(b, "onkeydown", f._stealthKeydownHandle), delete f._stealthKeydownHandle)
                        }
                    },
                    _normalizeEventName: function(a) {
                        return "on" != a.slice(0, 2) ? "on" + a : a
                    },
                    _nop: function() {},
                    _fixEvent: function(b, c) {
                        if (!b) {
                            var d = c && (c.ownerDocument || c.document || c).parentWindow || window;
                            b = d.event
                        }
                        if (!b) return b;
                        b.target = b.srcElement, b.currentTarget = c || b.srcElement, b.layerX = b.offsetX, b.layerY = b.offsetY;
                        var e = b.srcElement,
                            f = e && e.ownerDocument || document,
                            g = dojo.isIE < 6 || "BackCompat" == f.compatMode ? f.body : f.documentElement,
                            h = dojo._getIeDocumentElementOffset();
                        return b.pageX = b.clientX + dojo._fixIeBiDiScrollLeft(g.scrollLeft || 0) - h.x, b.pageY = b.clientY + (g.scrollTop || 0) - h.y, "mouseover" == b.type && (b.relatedTarget = b.fromElement), "mouseout" == b.type && (b.relatedTarget = b.toElement), (dojo.isIE < 9 || dojo.isQuirks) && (b.stopPropagation = a._stopPropagation, b.preventDefault = a._preventDefault), a._fixKeys(b)
                    },
                    _fixKeys: function(b) {
                        switch (b.type) {
                            case "keypress":
                                var c = "charCode" in b ? b.charCode : b.keyCode;
                                10 == c ? (c = 0, b.keyCode = 13) : 13 == c || 27 == c ? c = 0 : 3 == c && (c = 99), b.charCode = c, a._setKeyChar(b)
                        }
                        return b
                    },
                    _stealthKeyDown: function(b) {
                        var c = b.currentTarget.onkeypress;
                        if (c && c[f]) {
                            var e = b.keyCode,
                                g = (13 != e || dojo.isIE >= 9 && !dojo.isQuirks) && 32 != e && 27 != e && (48 > e || e > 90) && (96 > e || e > 111) && (186 > e || e > 192) && (219 > e || e > 222);
                            if (g || b.ctrlKey) {
                                var h = g ? 0 : e;
                                if (b.ctrlKey) {
                                    if (3 == e || 13 == e) return;
                                    h > 95 && 106 > h ? h -= 48 : !b.shiftKey && h >= 65 && 90 >= h ? h += 32 : h = a._punctMap[h] || h
                                }
                                var i = a._synthesizeEvent(b, {
                                    type: "keypress",
                                    faux: !0,
                                    charCode: h
                                });
                                c.call(b.currentTarget, i), (dojo.isIE < 9 || dojo.isIE && dojo.isQuirks) && (b.cancelBubble = i.cancelBubble), b.returnValue = i.returnValue, d(b, i.keyCode)
                            }
                        }
                    },
                    _stopPropagation: function() {
                        this.cancelBubble = !0
                    },
                    _preventDefault: function() {
                        this.bubbledKeyCode = this.keyCode, this.ctrlKey && d(this, 0), this.returnValue = !1
                    }
                }), dojo.stopEvent = dojo.isIE < 9 || dojo.isQuirks ? function(b) {
                    b = b || window.event, a._stopPropagation.call(b), a._preventDefault.call(b)
                } : dojo.stopEvent
            }
            a._synthesizeEvent = function(b, c) {
                var d = dojo.mixin({}, b, c);
                return a._setKeyChar(d), d.preventDefault = function() {
                    b.preventDefault()
                }, d.stopPropagation = function() {
                    b.stopPropagation()
                }, d
            }, dojo.isOpera && dojo.mixin(a, {
                _fixEvent: function(b) {
                    switch (b.type) {
                        case "keypress":
                            var c = b.which;
                            return 3 == c && (c = 99), c = 41 > c && !b.shiftKey ? 0 : c, b.ctrlKey && !b.shiftKey && c >= 65 && 90 >= c && (c += 32), a._synthesizeEvent(b, {
                                charCode: c
                            })
                    }
                    return b
                }
            }), dojo.isWebKit && (a._add = a.add, a._remove = a.remove, dojo.mixin(a, {
                add: function(b, c, d) {
                    if (b) {
                        var e = a._add(b, c, d);
                        return "keypress" == a._normalizeEventName(c) && (e._stealthKeyDownHandle = a._add(b, "keydown", function(b) {
                            var c = b.keyCode,
                                e = 13 != c && 32 != c && (48 > c || c > 90) && (96 > c || c > 111) && (186 > c || c > 192) && (219 > c || c > 222);
                            if (e || b.ctrlKey) {
                                var f = e ? 0 : c;
                                if (b.ctrlKey) {
                                    if (3 == c || 13 == c) return;
                                    f > 95 && 106 > f ? f -= 48 : !b.shiftKey && f >= 65 && 90 >= f ? f += 32 : f = a._punctMap[f] || f
                                }
                                var g = a._synthesizeEvent(b, {
                                    type: "keypress",
                                    faux: !0,
                                    charCode: f
                                });
                                d.call(b.currentTarget, g)
                            }
                        })), e
                    }
                },
                remove: function(b, c, d) {
                    b && (d._stealthKeyDownHandle && a._remove(b, "keydown", d._stealthKeyDownHandle), a._remove(b, c, d))
                },
                _fixEvent: function(b) {
                    switch (b.type) {
                        case "keypress":
                            if (b.faux) return b;
                            var c = b.charCode;
                            return c = c >= 32 ? c : 0, a._synthesizeEvent(b, {
                                charCode: c,
                                faux: !0
                            })
                    }
                    return b
                }
            }))
        }(), dojo.isIE && (dojo._ieDispatcher = function(a, b) {
            var c = Array.prototype,
                d = dojo._ie_listener.handlers,
                e = a.callee,
                f = e[dojo._ieListenersName],
                g = d[e.target],
                h = g && g.apply(b, a),
                i = [].concat(f);
            for (var j in i) {
                var k = d[i[j]];
                j in c || !k || k.apply(b, a)
            }
            return h
        }, dojo._getIeDispatcher = function() {
            return new Function(dojo._scopeName + "._ieDispatcher(arguments, this)")
        }, dojo._event_listener._fixCallback = function(a) {
            var b = dojo._event_listener._fixEvent;
            return function(c) {
                return a.call(this, b(c, this))
            }
        })), !dojo._hasResource["dojo._base.html"]) {
        dojo._hasResource["dojo._base.html"] = !0, dojo.provide("dojo._base.html");
        try {
            document.execCommand("BackgroundImageCache", !1, !0)
        } catch (e) {}
        dojo.byId = dojo.isIE ? function(a, b) {
                if ("string" != typeof a) return a;
                var c = b || dojo.doc,
                    d = c.getElementById(a);
                if (d && (d.attributes.id.value == a || d.id == a)) return d;
                var e = c.all[a];
                (!e || e.nodeName) && (e = [e]);
                for (var f = 0; d = e[f++];)
                    if (d.attributes && d.attributes.id && d.attributes.id.value == a || d.id == a) return d
            } : function(a, b) {
                return ("string" == typeof a ? (b || dojo.doc).getElementById(a) : a) || null
            },
            function() {
                var _destroyDoc, d = dojo,
                    byId = d.byId,
                    _destroyContainer = null;
                d.addOnWindowUnload(function() {
                    _destroyContainer = null
                }), dojo._destroyElement = dojo.destroy = function(a) {
                    a = byId(a);
                    try {
                        var b = a.ownerDocument;
                        _destroyContainer && _destroyDoc == b || (_destroyContainer = b.createElement("div"), _destroyDoc = b), _destroyContainer.appendChild(a.parentNode ? a.parentNode.removeChild(a) : a), _destroyContainer.innerHTML = ""
                    } catch (c) {}
                }, dojo.isDescendant = function(a, b) {
                    try {
                        for (a = byId(a), b = byId(b); a;) {
                            if (a == b) return !0;
                            a = a.parentNode
                        }
                    } catch (c) {}
                    return !1
                }, dojo.setSelectable = function(a, b) {
                    if (a = byId(a), d.isMozilla) a.style.MozUserSelect = b ? "" : "none";
                    else if (d.isKhtml || d.isWebKit) a.style.KhtmlUserSelect = b ? "auto" : "none";
                    else if (d.isIE) {
                        var c = a.unselectable = b ? "" : "on";
                        d.query("*", a).forEach("item.unselectable = '" + c + "'")
                    }
                };
                var _insertBefore = function(a, b) {
                        var c = b.parentNode;
                        c && c.insertBefore(a, b)
                    },
                    _insertAfter = function(a, b) {
                        var c = b.parentNode;
                        c && (c.lastChild == b ? c.appendChild(a) : c.insertBefore(a, b.nextSibling))
                    };
                dojo.place = function(a, b, c) {
                    if (b = byId(b), "string" == typeof a && (a = /^\s*</.test(a) ? d._toDom(a, b.ownerDocument) : byId(a)), "number" == typeof c) {
                        var e = b.childNodes;
                        !e.length || e.length <= c ? b.appendChild(a) : _insertBefore(a, e[0 > c ? 0 : c])
                    } else switch (c) {
                        case "before":
                            _insertBefore(a, b);
                            break;
                        case "after":
                            _insertAfter(a, b);
                            break;
                        case "replace":
                            b.parentNode.replaceChild(a, b);
                            break;
                        case "only":
                            d.empty(b), b.appendChild(a);
                            break;
                        case "first":
                            if (b.firstChild) {
                                _insertBefore(a, b.firstChild);
                                break
                            }
                        default:
                            b.appendChild(a)
                    }
                    return a
                }, dojo.boxModel = "content-box", d.isIE && (d.boxModel = "BackCompat" == document.compatMode ? "border-box" : "content-box");
                var gcs;
                gcs = d.isWebKit ? function(a) {
                    var b;
                    if (1 == a.nodeType) {
                        var c = a.ownerDocument.defaultView;
                        b = c.getComputedStyle(a, null), !b && a.style && (a.style.display = "", b = c.getComputedStyle(a, null))
                    }
                    return b || {}
                } : d.isIE ? function(a) {
                    return 1 == a.nodeType ? a.currentStyle : {}
                } : function(a) {
                    return 1 == a.nodeType ? a.ownerDocument.defaultView.getComputedStyle(a, null) : {}
                }, dojo.getComputedStyle = gcs, d._toPixelValue = d.isIE ? function(element, avalue) {
                    if (!avalue) return 0;
                    if ("medium" == avalue) return 4;
                    if (avalue.slice && "px" == avalue.slice(-2)) return parseFloat(avalue);
                    with(element) {
                        var sLeft = style.left,
                            rsLeft = runtimeStyle.left;
                        runtimeStyle.left = currentStyle.left;
                        try {
                            style.left = avalue, avalue = style.pixelLeft
                        } catch (e) {
                            avalue = 0
                        }
                        style.left = sLeft, runtimeStyle.left = rsLeft
                    }
                    return avalue
                } : function(a, b) {
                    return parseFloat(b) || 0
                };
                var px = d._toPixelValue,
                    astr = "DXImageTransform.Microsoft.Alpha",
                    af = function(a, b) {
                        try {
                            return a.filters.item(astr)
                        } catch (c) {
                            return b ? {} : null
                        }
                    };
                dojo._getOpacity = d.isIE < 9 ? function(a) {
                    try {
                        return af(a).Opacity / 100
                    } catch (b) {
                        return 1
                    }
                } : function(a) {
                    return gcs(a).opacity
                }, dojo._setOpacity = d.isIE < 9 ? function(a, b) {
                    var c = 100 * b,
                        e = 1 == b;
                    if (a.style.zoom = e ? "" : 1, af(a)) af(a, 1).Opacity = c;
                    else {
                        if (e) return b;
                        a.style.filter += " progid:" + astr + "(Opacity=" + c + ")"
                    }
                    return af(a, 1).Enabled = !e, "tr" == a.nodeName.toLowerCase() && d.query("> td", a).forEach(function(a) {
                        d._setOpacity(a, b)
                    }), b
                } : function(a, b) {
                    return a.style.opacity = b
                };
                var _pixelNamesCache = {
                        left: !0,
                        top: !0
                    },
                    _pixelRegExp = /margin|padding|width|height|max|min|offset/,
                    _toStyleValue = function(a, b, c) {
                        if (b = b.toLowerCase(), d.isIE) {
                            if ("auto" == c) {
                                if ("height" == b) return a.offsetHeight;
                                if ("width" == b) return a.offsetWidth
                            }
                            if ("fontweight" == b) switch (c) {
                                case 700:
                                    return "bold";
                                case 400:
                                default:
                                    return "normal"
                            }
                        }
                        return b in _pixelNamesCache || (_pixelNamesCache[b] = _pixelRegExp.test(b)), _pixelNamesCache[b] ? px(a, c) : c
                    },
                    _floatStyle = d.isIE ? "styleFloat" : "cssFloat",
                    _floatAliases = {
                        cssFloat: _floatStyle,
                        styleFloat: _floatStyle,
                        "float": _floatStyle
                    };
                dojo.style = function(a, b, c) {
                    var e = byId(a),
                        f = arguments.length,
                        g = "opacity" == b;
                    if (b = _floatAliases[b] || b, 3 == f) return g ? d._setOpacity(e, c) : e.style[b] = c;
                    if (2 == f && g) return d._getOpacity(e);
                    var h = gcs(e);
                    if (2 == f && "string" != typeof b) {
                        for (var i in b) d.style(a, i, b[i]);
                        return h
                    }
                    return 1 == f ? h : _toStyleValue(e, b, h[b] || e.style[b])
                }, dojo._getPadExtents = function(a, b) {
                    var c = b || gcs(a),
                        d = px(a, c.paddingLeft),
                        e = px(a, c.paddingTop);
                    return {
                        l: d,
                        t: e,
                        w: d + px(a, c.paddingRight),
                        h: e + px(a, c.paddingBottom)
                    }
                }, dojo._getBorderExtents = function(a, b) {
                    var c = "none",
                        d = b || gcs(a),
                        e = d.borderLeftStyle != c ? px(a, d.borderLeftWidth) : 0,
                        f = d.borderTopStyle != c ? px(a, d.borderTopWidth) : 0;
                    return {
                        l: e,
                        t: f,
                        w: e + (d.borderRightStyle != c ? px(a, d.borderRightWidth) : 0),
                        h: f + (d.borderBottomStyle != c ? px(a, d.borderBottomWidth) : 0)
                    }
                }, dojo._getPadBorderExtents = function(a, b) {
                    var c = b || gcs(a),
                        e = d._getPadExtents(a, c),
                        f = d._getBorderExtents(a, c);
                    return {
                        l: e.l + f.l,
                        t: e.t + f.t,
                        w: e.w + f.w,
                        h: e.h + f.h
                    }
                }, dojo._getMarginExtents = function(a, b) {
                    var c = b || gcs(a),
                        e = px(a, c.marginLeft),
                        f = px(a, c.marginTop),
                        g = px(a, c.marginRight),
                        h = px(a, c.marginBottom);
                    return d.isWebKit && "absolute" != c.position && (g = e), {
                        l: e,
                        t: f,
                        w: e + g,
                        h: f + h
                    }
                }, dojo._getMarginBox = function(a, b) {
                    var c = b || gcs(a),
                        e = d._getMarginExtents(a, c),
                        f = a.offsetLeft - e.l,
                        g = a.offsetTop - e.t,
                        h = a.parentNode;
                    if (d.isMoz) {
                        var i = parseFloat(c.left),
                            j = parseFloat(c.top);
                        if (isNaN(i) || isNaN(j)) {
                            if (h && h.style) {
                                var k = gcs(h);
                                if ("visible" != k.overflow) {
                                    var l = d._getBorderExtents(h, k);
                                    f += l.l, g += l.t
                                }
                            }
                        } else f = i, g = j
                    } else(d.isOpera || d.isIE > 7 && !d.isQuirks) && h && (l = d._getBorderExtents(h), f -= l.l, g -= l.t);
                    return {
                        l: f,
                        t: g,
                        w: a.offsetWidth + e.w,
                        h: a.offsetHeight + e.h
                    }
                }, dojo._getMarginSize = function(a, b) {
                    a = byId(a);
                    var c = d._getMarginExtents(a, b || gcs(a)),
                        e = a.getBoundingClientRect();
                    return {
                        w: e.right - e.left + c.w,
                        h: e.bottom - e.top + c.h
                    }
                }, dojo._getContentBox = function(a, b) {
                    var c, e = b || gcs(a),
                        f = d._getPadExtents(a, e),
                        g = d._getBorderExtents(a, e),
                        h = a.clientWidth;
                    return h ? (c = a.clientHeight, g.w = g.h = 0) : (h = a.offsetWidth, c = a.offsetHeight), d.isOpera && (f.l += g.l, f.t += g.t), {
                        l: f.l,
                        t: f.t,
                        w: h - f.w - g.w,
                        h: c - f.h - g.h
                    }
                }, dojo._getBorderBox = function(a, b) {
                    var c = b || gcs(a),
                        e = d._getPadExtents(a, c),
                        f = d._getContentBox(a, c);
                    return {
                        l: f.l - e.l,
                        t: f.t - e.t,
                        w: f.w + e.w,
                        h: f.h + e.h
                    }
                }, dojo._setBox = function(a, b, c, d, e, f) {
                    f = f || "px";
                    var g = a.style;
                    isNaN(b) || (g.left = b + f), isNaN(c) || (g.top = c + f), d >= 0 && (g.width = d + f), e >= 0 && (g.height = e + f)
                }, dojo._isButtonTag = function(a) {
                    return "BUTTON" == a.tagName || "INPUT" == a.tagName && "BUTTON" == (a.getAttribute("type") || "").toUpperCase()
                }, dojo._usesBorderBox = function(a) {
                    var b = a.tagName;
                    return "border-box" == d.boxModel || "TABLE" == b || d._isButtonTag(a)
                }, dojo._setContentSize = function(a, b, c, e) {
                    if (d._usesBorderBox(a)) {
                        var f = d._getPadBorderExtents(a, e);
                        b >= 0 && (b += f.w), c >= 0 && (c += f.h)
                    }
                    d._setBox(a, 0 / 0, 0 / 0, b, c)
                }, dojo._setMarginBox = function(a, b, c, e, f, g) {
                    var h = g || gcs(a),
                        i = d._usesBorderBox(a),
                        j = i ? _nilExtents : d._getPadBorderExtents(a, h);
                    if (d.isWebKit && d._isButtonTag(a)) {
                        var k = a.style;
                        e >= 0 && !k.width && (k.width = "4px"), f >= 0 && !k.height && (k.height = "4px")
                    }
                    var l = d._getMarginExtents(a, h);
                    e >= 0 && (e = Math.max(e - j.w - l.w, 0)), f >= 0 && (f = Math.max(f - j.h - l.h, 0)), d._setBox(a, b, c, e, f)
                };
                var _nilExtents = {
                    l: 0,
                    t: 0,
                    w: 0,
                    h: 0
                };
                dojo.marginBox = function(a, b) {
                    var c = byId(a),
                        e = gcs(c),
                        f = b;
                    return f ? d._setMarginBox(c, f.l, f.t, f.w, f.h, e) : d._getMarginBox(c, e)
                }, dojo.contentBox = function(a, b) {
                    var c = byId(a),
                        e = gcs(c),
                        f = b;
                    return f ? d._setContentSize(c, f.w, f.h, e) : d._getContentBox(c, e)
                }, dojo._docScroll = function() {
                    var a = d.global;
                    return "pageXOffset" in a ? {
                        x: a.pageXOffset,
                        y: a.pageYOffset
                    } : (a = d.isQuirks ? d.doc.body : d.doc.documentElement, {
                        x: d._fixIeBiDiScrollLeft(a.scrollLeft || 0),
                        y: a.scrollTop || 0
                    })
                }, dojo._isBodyLtr = function() {
                    return "_bodyLtr" in d ? d._bodyLtr : d._bodyLtr = "ltr" == (d.body().dir || d.doc.documentElement.dir || "ltr").toLowerCase()
                }, dojo._getIeDocumentElementOffset = function() {
                    var a = d.doc.documentElement;
                    if (d.isIE < 8) {
                        var b = a.getBoundingClientRect(),
                            c = b.left,
                            e = b.top;
                        return d.isIE < 7 && (c += a.clientLeft, e += a.clientTop), {
                            x: 0 > c ? 0 : c,
                            y: 0 > e ? 0 : e
                        }
                    }
                    return {
                        x: 0,
                        y: 0
                    }
                }, dojo._fixIeBiDiScrollLeft = function(a) {
                    var b = d.isIE;
                    if (b && !d._isBodyLtr()) {
                        var c = d.isQuirks,
                            e = c ? d.doc.body : d.doc.documentElement;
                        return 6 == b && !c && d.global.frameElement && e.scrollHeight > e.clientHeight && (a += e.clientLeft), 8 > b || c ? a + e.clientWidth - e.scrollWidth : -a
                    }
                    return a
                }, dojo._abs = dojo.position = function(a, b) {
                    a = byId(a);
                    var c = d.body(),
                        e = c.parentNode,
                        f = a.getBoundingClientRect();
                    if (f = {
                            x: f.left,
                            y: f.top,
                            w: f.right - f.left,
                            h: f.bottom - f.top
                        }, d.isIE) {
                        var g = d._getIeDocumentElementOffset();
                        f.x -= g.x + (d.isQuirks ? c.clientLeft + c.offsetLeft : 0), f.y -= g.y + (d.isQuirks ? c.clientTop + c.offsetTop : 0)
                    } else if (3 == d.isFF) {
                        var h = gcs(e);
                        f.x -= px(e, h.marginLeft) + px(e, h.borderLeftWidth), f.y -= px(e, h.marginTop) + px(e, h.borderTopWidth)
                    }
                    if (b) {
                        var i = d._docScroll();
                        f.x += i.x, f.y += i.y
                    }
                    return f
                }, dojo.coords = function(a, b) {
                    var c = byId(a),
                        e = gcs(c),
                        f = d._getMarginBox(c, e),
                        g = d.position(c, b);
                    return f.x = g.x, f.y = g.y, f
                };
                var _propNames = {
                        "class": "className",
                        "for": "htmlFor",
                        tabindex: "tabIndex",
                        readonly: "readOnly",
                        colspan: "colSpan",
                        frameborder: "frameBorder",
                        rowspan: "rowSpan",
                        valuetype: "valueType"
                    },
                    _attrNames = {
                        classname: "class",
                        htmlfor: "for",
                        tabindex: "tabIndex",
                        readonly: "readOnly"
                    },
                    _forcePropNames = {
                        innerHTML: 1,
                        className: 1,
                        htmlFor: d.isIE,
                        value: 1
                    },
                    _fixAttrName = function(a) {
                        return _attrNames[a.toLowerCase()] || a
                    },
                    _hasAttr = function(a, b) {
                        var c = a.getAttributeNode && a.getAttributeNode(b);
                        return c && c.specified
                    };
                dojo.hasAttr = function(a, b) {
                    var c = b.toLowerCase();
                    return _forcePropNames[_propNames[c] || b] || _hasAttr(byId(a), _attrNames[c] || b)
                };
                var _evtHdlrMap = {},
                    _ctr = 0,
                    _attrId = dojo._scopeName + "attrid",
                    _roInnerHtml = {
                        col: 1,
                        colgroup: 1,
                        table: 1,
                        tbody: 1,
                        tfoot: 1,
                        thead: 1,
                        tr: 1,
                        title: 1
                    };
                dojo.attr = function(a, b, c) {
                    a = byId(a);
                    var e = arguments.length;
                    if (2 == e && "string" != typeof b) {
                        for (var f in b) d.attr(a, f, b[f]);
                        return a
                    }
                    var g = b.toLowerCase(),
                        h = _propNames[g] || b,
                        i = _forcePropNames[h],
                        j = _attrNames[g] || b;
                    if (3 == e) {
                        do {
                            if ("style" == h && "string" != typeof c) {
                                d.style(a, c);
                                break
                            }
                            if ("innerHTML" == h) {
                                d.isIE && a.tagName.toLowerCase() in _roInnerHtml ? (d.empty(a), a.appendChild(d._toDom(c, a.ownerDocument))) : a[h] = c;
                                break
                            }
                            if (d.isFunction(c)) {
                                var k = d.attr(a, _attrId);
                                k || (k = _ctr++, d.attr(a, _attrId, k)), _evtHdlrMap[k] || (_evtHdlrMap[k] = {});
                                var l = _evtHdlrMap[k][h];
                                if (l) d.disconnect(l);
                                else try {
                                    delete a[h]
                                } catch (m) {}
                                _evtHdlrMap[k][h] = d.connect(a, h, c);
                                break
                            }
                            if (i || "boolean" == typeof c) {
                                a[h] = c;
                                break
                            }
                            a.setAttribute(j, c)
                        } while (!1);
                        return a
                    }
                    return c = a[h], i && "undefined" != typeof c ? c : "href" == h || "boolean" != typeof c && !d.isFunction(c) ? _hasAttr(a, j) ? a.getAttribute(j) : null : c
                }, dojo.removeAttr = function(a, b) {
                    byId(a).removeAttribute(_fixAttrName(b))
                }, dojo.getNodeProp = function(a, b) {
                    a = byId(a);
                    var c = b.toLowerCase(),
                        d = _propNames[c] || b;
                    if (d in a && "href" != d) return a[d];
                    var e = _attrNames[c] || b;
                    return _hasAttr(a, e) ? a.getAttribute(e) : null
                }, dojo.create = function(a, b, c, e) {
                    var f = d.doc;
                    return c && (c = byId(c), f = c.ownerDocument), "string" == typeof a && (a = f.createElement(a)), b && d.attr(a, b), c && d.place(a, c, e), a
                }, d.empty = d.isIE ? function(a) {
                    a = byId(a);
                    for (var b; b = a.lastChild;) d.destroy(b)
                } : function(a) {
                    byId(a).innerHTML = ""
                };
                var tagWrap = {
                        option: ["select"],
                        tbody: ["table"],
                        thead: ["table"],
                        tfoot: ["table"],
                        tr: ["table", "tbody"],
                        td: ["table", "tbody", "tr"],
                        th: ["table", "thead", "tr"],
                        legend: ["fieldset"],
                        caption: ["table"],
                        colgroup: ["table"],
                        col: ["table", "colgroup"],
                        li: ["ul"]
                    },
                    reTag = /<\s*([\w\:]+)/,
                    masterNode = {},
                    masterNum = 0,
                    masterName = "__" + d._scopeName + "ToDomId";
                for (var param in tagWrap)
                    if (tagWrap.hasOwnProperty(param)) {
                        var tw = tagWrap[param];
                        tw.pre = "option" == param ? '<select multiple="multiple">' : "<" + tw.join("><") + ">", tw.post = "</" + tw.reverse().join("></") + ">"
                    }
                d._toDom = function(a, b) {
                    b = b || d.doc;
                    var c = b[masterName];
                    c || (b[masterName] = c = ++masterNum + "", masterNode[c] = b.createElement("div")), a += "";
                    var e, f, g, h, i = a.match(reTag),
                        j = i ? i[1].toLowerCase() : "",
                        k = masterNode[c];
                    if (i && tagWrap[j])
                        for (e = tagWrap[j], k.innerHTML = e.pre + a + e.post, f = e.length; f; --f) k = k.firstChild;
                    else k.innerHTML = a;
                    if (1 == k.childNodes.length) return k.removeChild(k.firstChild);
                    for (h = b.createDocumentFragment(); g = k.firstChild;) h.appendChild(g);
                    return h
                };
                var _className = "className";
                dojo.hasClass = function(a, b) {
                    return (" " + byId(a)[_className] + " ").indexOf(" " + b + " ") >= 0
                };
                var spaces = /\s+/,
                    a1 = [""],
                    fakeNode = {},
                    str2array = function(a) {
                        return "string" == typeof a || a instanceof String ? a.indexOf(" ") < 0 ? (a1[0] = a, a1) : a.split(spaces) : a || ""
                    };
                dojo.addClass = function(a, b) {
                    a = byId(a), b = str2array(b);
                    var c, d = a[_className];
                    d = d ? " " + d + " " : " ", c = d.length;
                    for (var e, f = 0, g = b.length; g > f; ++f) e = b[f], e && d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                    c < d.length && (a[_className] = d.substr(1, d.length - 2))
                }, dojo.removeClass = function(a, b) {
                    a = byId(a);
                    var c;
                    if (void 0 !== b) {
                        b = str2array(b), c = " " + a[_className] + " ";
                        for (var e = 0, f = b.length; f > e; ++e) c = c.replace(" " + b[e] + " ", " ");
                        c = d.trim(c)
                    } else c = "";
                    a[_className] != c && (a[_className] = c)
                }, dojo.replaceClass = function(a, b, c) {
                    a = byId(a), fakeNode.className = a.className, dojo.removeClass(fakeNode, c), dojo.addClass(fakeNode, b), a.className !== fakeNode.className && (a.className = fakeNode.className)
                }, dojo.toggleClass = function(a, b, c) {
                    void 0 === c && (c = !d.hasClass(a, b)), d[c ? "addClass" : "removeClass"](a, b)
                }
            }()
    }
    dojo._hasResource["dojo._base.NodeList"] || (dojo._hasResource["dojo._base.NodeList"] = !0, dojo.provide("dojo._base.NodeList"), function() {
        var a = dojo,
            b = Array.prototype,
            c = b.slice,
            d = b.concat,
            e = function(b, d, e) {
                b.sort || (b = c.call(b, 0));
                var f = e || this._NodeListCtor || a._NodeListCtor;
                return b.constructor = f, dojo._mixin(b, f.prototype), b._NodeListCtor = f, d ? b._stash(d) : b
            },
            f = function(b, d, e) {
                return d = [0].concat(c.call(d, 0)), e = e || a.global,
                    function(a) {
                        return d[0] = a, b.apply(e, d)
                    }
            },
            g = function(a, b) {
                return function() {
                    return this.forEach(f(a, arguments, b)), this
                }
            },
            h = function(a, b) {
                return function() {
                    return this.map(f(a, arguments, b))
                }
            },
            i = function(a, b) {
                return function() {
                    return this.filter(f(a, arguments, b))
                }
            },
            j = function(b, c, d) {
                return function() {
                    var e = arguments,
                        g = f(b, e, d);
                    return c.call(d || a.global, e) ? this.map(g) : (this.forEach(g), this)
                }
            },
            k = function(a) {
                return 1 == a.length && "string" == typeof a[0]
            },
            l = function(a) {
                var b = a.parentNode;
                b && b.removeChild(a)
            };
        dojo.NodeList = function() {
            return e(Array.apply(null, arguments))
        }, a._NodeListCtor = a.NodeList;
        var m = a.NodeList,
            n = m.prototype;
        m._wrap = n._wrap = e, m._adaptAsMap = h, m._adaptAsForEach = g, m._adaptAsFilter = i, m._adaptWithCondition = j, a.forEach(["slice", "splice"], function(a) {
            var c = b[a];
            n[a] = function() {
                return this._wrap(c.apply(this, arguments), "slice" == a ? this : null)
            }
        }), a.forEach(["indexOf", "lastIndexOf", "every", "some"], function(b) {
            var d = a[b];
            n[b] = function() {
                return d.apply(a, [this].concat(c.call(arguments, 0)))
            }
        }), a.forEach(["attr", "style"], function(b) {
            n[b] = j(a[b], k)
        }), a.forEach(["connect", "addClass", "removeClass", "replaceClass", "toggleClass", "empty", "removeAttr"], function(b) {
            n[b] = g(a[b])
        }), dojo.extend(dojo.NodeList, {
            _normalize: function(a, b) {
                var c = a.parse === !0 ? !0 : !1;
                if ("string" == typeof a.template) {
                    var d = a.templateFunc || dojo.string && dojo.string.substitute;
                    a = d ? d(a.template, a) : a
                }
                var e = typeof a;
                return "string" == e || "number" == e ? (a = dojo._toDom(a, b && b.ownerDocument), a = 11 == a.nodeType ? dojo._toArray(a.childNodes) : [a]) : dojo.isArrayLike(a) ? dojo.isArray(a) || (a = dojo._toArray(a)) : a = [a], c && (a._runParse = !0), a
            },
            _cloneNode: function(a) {
                return a.cloneNode(!0)
            },
            _place: function(a, b, c, d) {
                if (1 == b.nodeType || "only" != c)
                    for (var e, f = b, g = a.length, h = g - 1; h >= 0; h--) {
                        var i = d ? this._cloneNode(a[h]) : a[h];
                        if (a._runParse && dojo.parser && dojo.parser.parse)
                            for (e || (e = f.ownerDocument.createElement("div")), e.appendChild(i), dojo.parser.parse(e), i = e.firstChild; e.firstChild;) e.removeChild(e.firstChild);
                        h == g - 1 ? dojo.place(i, f, c) : f.parentNode.insertBefore(i, f), f = i
                    }
            },
            _stash: function(a) {
                return this._parent = a, this
            },
            end: function() {
                return this._parent ? this._parent : new this._NodeListCtor
            },
            concat: function() {
                var b = a.isArray(this) ? this : c.call(this, 0),
                    e = a.map(arguments, function(b) {
                        return b && !a.isArray(b) && ("undefined" != typeof NodeList && b.constructor === NodeList || b.constructor === this._NodeListCtor) ? c.call(b, 0) : b
                    });
                return this._wrap(d.apply(b, e), this)
            },
            map: function(b, c) {
                return this._wrap(a.map(this, b, c), this)
            },
            forEach: function(b, c) {
                return a.forEach(this, b, c), this
            },
            coords: h(a.coords),
            position: h(a.position),
            place: function(b, c) {
                var d = a.query(b)[0];
                return this.forEach(function(b) {
                    a.place(b, d, c)
                })
            },
            orphan: function(b) {
                return (b ? a._filterQueryResult(this, b) : this).forEach(l)
            },
            adopt: function(b, c) {
                return a.query(b).place(this[0], c)._stash(this)
            },
            query: function(b) {
                if (!b) return this;
                var c = this.map(function(c) {
                    return a.query(b, c).filter(function(a) {
                        return void 0 !== a
                    })
                });
                return this._wrap(d.apply([], c), this)
            },
            filter: function(b) {
                var c = arguments,
                    d = this,
                    e = 0;
                if ("string" == typeof b) {
                    if (d = a._filterQueryResult(this, c[0]), 1 == c.length) return d._stash(this);
                    e = 1
                }
                return this._wrap(a.filter(d, c[e], c[e + 1]), this)
            },
            addContent: function(a, b) {
                a = this._normalize(a, this[0]);
                for (var c, d = 0; c = this[d]; d++) this._place(a, c, b, d > 0);
                return this
            },
            instantiate: function(b, c) {
                var d = a.isFunction(b) ? b : a.getObject(b);
                return c = c || {}, this.forEach(function(a) {
                    new d(c, a)
                })
            },
            at: function() {
                var b = new this._NodeListCtor;
                return a.forEach(arguments, function(a) {
                    0 > a && (a = this.length + a), this[a] && b.push(this[a])
                }, this), b._stash(this)
            }
        }), m.events = ["blur", "focus", "change", "click", "error", "keydown", "keypress", "keyup", "load", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseout", "mouseover", "mouseup", "submit"], a.forEach(m.events, function(a) {
            var b = "on" + a;
            n[b] = function(a, c) {
                return this.connect(b, a, c)
            }
        })
    }()), dojo._hasResource["dojo._base.query"] || (dojo._hasResource["dojo._base.query"] = !0, function() {
        var a = function(a) {
                var b = a.trim,
                    c = a.forEach,
                    d = a._NodeListCtor = a.NodeList,
                    e = function() {
                        return a.doc
                    },
                    f = (a.isWebKit || a.isMozilla) && "BackCompat" == e().compatMode,
                    g = e().firstChild.children ? "children" : "childNodes",
                    h = ">~+",
                    i = !1,
                    j = function() {
                        return !0
                    },
                    k = function(a) {
                        a += h.indexOf(a.slice(-1)) >= 0 ? " * " : " ";
                        for (var c, d = function(c, d) {
                                return b(a.slice(c, d))
                            }, e = [], f = -1, g = -1, j = -1, k = -1, l = -1, m = -1, n = -1, o = "", p = "", q = 0, r = a.length, s = null, t = null, u = function() {
                                if (n >= 0) {
                                    var a = n == q ? null : d(n, q);
                                    s[h.indexOf(a) < 0 ? "tag" : "oper"] = a, n = -1
                                }
                            }, v = function() {
                                m >= 0 && (s.id = d(m, q).replace(/\\/g, ""), m = -1)
                            }, w = function() {
                                l >= 0 && (s.classes.push(d(l + 1, q).replace(/\\/g, "")), l = -1)
                            }, x = function() {
                                v(), u(), w()
                            }, y = function() {
                                x(), k >= 0 && s.pseudos.push({
                                    name: d(k + 1, q)
                                }), s.loops = s.pseudos.length || s.attrs.length || s.classes.length, s.oquery = s.query = d(c, q), s.otag = s.tag = s.oper ? null : s.tag || "*", s.tag && (s.tag = s.tag.toUpperCase()), e.length && e[e.length - 1].oper && (s.infixOper = e.pop(), s.query = s.infixOper.query + " " + s.query), e.push(s), s = null
                            }; o = p, p = a.charAt(q), r > q; q++)
                            if ("\\" != o)
                                if (s || (c = q, s = {
                                        query: null,
                                        pseudos: [],
                                        attrs: [],
                                        classes: [],
                                        tag: null,
                                        oper: null,
                                        id: null,
                                        getTag: function() {
                                            return i ? this.otag : this.tag
                                        }
                                    }, n = q), f >= 0) {
                                    if ("]" == p) {
                                        t.attr ? t.matchFor = d(j || f + 1, q) : t.attr = d(f + 1, q);
                                        var z = t.matchFor;
                                        z && ('"' == z.charAt(0) || "'" == z.charAt(0)) && (t.matchFor = z.slice(1, -1)), s.attrs.push(t), t = null, f = j = -1
                                    } else if ("=" == p) {
                                        var A = "|~^$*".indexOf(o) >= 0 ? o : "";
                                        t.type = A + p, t.attr = d(f + 1, q - A.length), j = q + 1
                                    }
                                } else g >= 0 ? ")" == p && (k >= 0 && (t.value = d(g + 1, q)), k = g = -1) : "#" == p ? (x(), m = q + 1) : "." == p ? (x(), l = q) : ":" == p ? (x(), k = q) : "[" == p ? (x(), f = q, t = {}) : "(" == p ? (k >= 0 && (t = {
                                    name: d(k + 1, q),
                                    value: null
                                }, s.pseudos.push(t)), g = q) : " " == p && o != p && y();
                        return e
                    },
                    l = function(a, b) {
                        return a ? b ? function() {
                            return a.apply(window, arguments) && b.apply(window, arguments)
                        } : a : b
                    },
                    m = function(a, b) {
                        var c = b || [];
                        return a && c.push(a), c
                    },
                    n = function(a) {
                        return 1 == a.nodeType
                    },
                    o = "",
                    p = function(a, b) {
                        return a ? "class" == b ? a.className || o : "for" == b ? a.htmlFor || o : "style" == b ? a.style.cssText || o : (i ? a.getAttribute(b) : a.getAttribute(b, 2)) || o : o
                    },
                    q = {
                        "*=": function(a, b) {
                            return function(c) {
                                return p(c, a).indexOf(b) >= 0
                            }
                        },
                        "^=": function(a, b) {
                            return function(c) {
                                return 0 == p(c, a).indexOf(b)
                            }
                        },
                        "$=": function(a, b) {
                            return function(c) {
                                var d = " " + p(c, a);
                                return d.lastIndexOf(b) == d.length - b.length
                            }
                        },
                        "~=": function(a, b) {
                            var c = " " + b + " ";
                            return function(b) {
                                var d = " " + p(b, a) + " ";
                                return d.indexOf(c) >= 0
                            }
                        },
                        "|=": function(a, b) {
                            var c = " " + b + "-";
                            return function(d) {
                                var e = " " + p(d, a);
                                return e == b || 0 == e.indexOf(c)
                            }
                        },
                        "=": function(a, b) {
                            return function(c) {
                                return p(c, a) == b
                            }
                        }
                    },
                    r = "undefined" == typeof e().firstChild.nextElementSibling,
                    s = r ? "nextSibling" : "nextElementSibling",
                    t = r ? "previousSibling" : "previousElementSibling",
                    u = r ? n : j,
                    v = function(a) {
                        for (; a = a[t];)
                            if (u(a)) return !1;
                        return !0
                    },
                    w = function(a) {
                        for (; a = a[s];)
                            if (u(a)) return !1;
                        return !0
                    },
                    x = function(a) {
                        var b = a.parentNode,
                            c = 0,
                            d = b[g],
                            e = a._i || -1,
                            f = b._l || -1;
                        if (!d) return -1;
                        var h = d.length;
                        if (f == h && e >= 0 && f >= 0) return e;
                        b._l = h, e = -1;
                        for (var i = b.firstElementChild || b.firstChild; i; i = i[s]) u(i) && (i._i = ++c, a === i && (e = c));
                        return e
                    },
                    y = function(a) {
                        return !(x(a) % 2)
                    },
                    z = function(a) {
                        return x(a) % 2
                    },
                    A = {
                        checked: function() {
                            return function(a) {
                                return !!("checked" in a ? a.checked : a.selected)
                            }
                        },
                        "first-child": function() {
                            return v
                        },
                        "last-child": function() {
                            return w
                        },
                        "only-child": function() {
                            return function(a) {
                                return v(a) ? w(a) ? !0 : !1 : !1
                            }
                        },
                        empty: function() {
                            return function(a) {
                                for (var b = a.childNodes, c = a.childNodes.length, d = c - 1; d >= 0; d--) {
                                    var e = b[d].nodeType;
                                    if (1 === e || 3 == e) return !1
                                }
                                return !0
                            }
                        },
                        contains: function(a, b) {
                            var c = b.charAt(0);
                            return ('"' == c || "'" == c) && (b = b.slice(1, -1)),
                                function(a) {
                                    return a.innerHTML.indexOf(b) >= 0
                                }
                        },
                        not: function(a, b) {
                            var c = k(b)[0],
                                d = {
                                    el: 1
                                };
                            "*" != c.tag && (d.tag = 1), c.classes.length || (d.classes = 1);
                            var e = C(c, d);
                            return function(a) {
                                return !e(a)
                            }
                        },
                        "nth-child": function(a, b) {
                            var c = parseInt;
                            if ("odd" == b) return z;
                            if ("even" == b) return y;
                            if (-1 != b.indexOf("n")) {
                                var d = b.split("n", 2),
                                    e = d[0] ? "-" == d[0] ? -1 : c(d[0]) : 1,
                                    f = d[1] ? c(d[1]) : 0,
                                    g = 0,
                                    h = -1;
                                if (e > 0 ? 0 > f ? f = f % e && e + f % e : f > 0 && (f >= e && (g = f - f % e), f %= e) : 0 > e && (e *= -1, f > 0 && (h = f, f %= e)), e > 0) return function(a) {
                                    var b = x(a);
                                    return b >= g && (0 > h || h >= b) && b % e == f
                                };
                                b = f
                            }
                            var i = c(b);
                            return function(a) {
                                return x(a) == i
                            }
                        }
                    },
                    B = a.isIE < 9 || dojo.isIE && dojo.isQuirks ? function(a) {
                        var b = a.toLowerCase();
                        return "class" == b && (a = "className"),
                            function(c) {
                                return i ? c.getAttribute(a) : c[a] || c[b]
                            }
                    } : function(a) {
                        return function(b) {
                            return b && b.getAttribute && b.hasAttribute(a)
                        }
                    },
                    C = function(a, b) {
                        if (!a) return j;
                        b = b || {};
                        var d = null;
                        return "el" in b || (d = l(d, n)), "tag" in b || "*" != a.tag && (d = l(d, function(b) {
                            return b && b.tagName == a.getTag()
                        })), "classes" in b || c(a.classes, function(a, b) {
                            var c = new RegExp("(?:^|\\s)" + a + "(?:\\s|$)");
                            d = l(d, function(a) {
                                return c.test(a.className)
                            }), d.count = b
                        }), "pseudos" in b || c(a.pseudos, function(a) {
                            var b = a.name;
                            A[b] && (d = l(d, A[b](b, a.value)))
                        }), "attrs" in b || c(a.attrs, function(a) {
                            var b, c = a.attr;
                            a.type && q[a.type] ? b = q[a.type](c, a.matchFor) : c.length && (b = B(c)), b && (d = l(d, b))
                        }), "id" in b || a.id && (d = l(d, function(b) {
                            return !!b && b.id == a.id
                        })), d || "default" in b || (d = j), d
                    },
                    D = function(a) {
                        return function(b, c, d) {
                            for (; b = b[s];)
                                if (!r || n(b)) {
                                    d && !Y(b, d) || !a(b) || c.push(b);
                                    break
                                }
                            return c
                        }
                    },
                    E = function(a) {
                        return function(b, c, d) {
                            for (var e = b[s]; e;) {
                                if (u(e)) {
                                    if (d && !Y(e, d)) break;
                                    a(e) && c.push(e)
                                }
                                e = e[s]
                            }
                            return c
                        }
                    },
                    F = function(a) {
                        return a = a || j,
                            function(b, c, d) {
                                for (var e, f = 0, h = b[g]; e = h[f++];) u(e) && (!d || Y(e, d)) && a(e, f) && c.push(e);
                                return c
                            }
                    },
                    G = function(a, b) {
                        for (var c = a.parentNode; c && c != b;) c = c.parentNode;
                        return !!c
                    },
                    H = {},
                    I = function(b) {
                        var c = H[b.query];
                        if (c) return c;
                        var d = b.infixOper,
                            g = d ? d.oper : "",
                            h = C(b, {
                                el: 1
                            }),
                            i = b.tag,
                            k = "*" == i,
                            l = e().getElementsByClassName;
                        if (g) {
                            var n = {
                                el: 1
                            };
                            k && (n.tag = 1), h = C(b, n), "+" == g ? c = D(h) : "~" == g ? c = E(h) : ">" == g && (c = F(h))
                        } else if (b.id) h = !b.loops && k ? j : C(b, {
                            el: 1,
                            id: 1
                        }), c = function(c, d) {
                            var e = a.byId(b.id, c.ownerDocument || c);
                            if (e && h(e)) return 9 == c.nodeType ? m(e, d) : G(e, c) ? m(e, d) : void 0
                        };
                        else if (l && /\{\s*\[native code\]\s*\}/.test(String(l)) && b.classes.length && !f) {
                            h = C(b, {
                                el: 1,
                                classes: 1,
                                id: 1
                            });
                            var o = b.classes.join(" ");
                            c = function(a, b, c) {
                                for (var d, e = m(0, b), f = 0, g = a.getElementsByClassName(o); d = g[f++];) h(d, a) && Y(d, c) && e.push(d);
                                return e
                            }
                        } else k || b.loops ? (h = C(b, {
                            el: 1,
                            tag: 1,
                            id: 1
                        }), c = function(a, c, d) {
                            for (var e, f = m(0, c), g = 0, i = a.getElementsByTagName(b.getTag()); e = i[g++];) h(e, a) && Y(e, d) && f.push(e);
                            return f
                        }) : c = function(a, c, d) {
                            for (var e, f = m(0, c), g = 0, h = a.getElementsByTagName(b.getTag()); e = h[g++];) Y(e, d) && f.push(e);
                            return f
                        };
                        return H[b.query] = c
                    },
                    J = function(a, b) {
                        for (var c, d, e, f, g, h = m(a), i = b.length, j = 0; i > j; j++) {
                            g = [], c = b[j], d = h.length - 1, d > 0 && (f = {}, g.nozip = !0);
                            for (var k = I(c), l = 0; e = h[l]; l++) k(e, g, f);
                            if (!g.length) break;
                            h = g
                        }
                        return g
                    },
                    K = {},
                    L = {},
                    M = function(a) {
                        var c = k(b(a));
                        if (1 == c.length) {
                            var e = I(c[0]);
                            return function(a) {
                                var b = e(a, new d);
                                return b && (b.nozip = !0), b
                            }
                        }
                        return function(a) {
                            return J(a, c)
                        }
                    },
                    N = navigator.userAgent,
                    O = "WebKit/",
                    P = a.isWebKit && N.indexOf(O) > 0 && parseFloat(N.split(O)[1]) > 528,
                    Q = a.isIE ? "commentStrip" : "nozip",
                    R = "querySelectorAll",
                    S = !!e()[R] && (!a.isSafari || a.isSafari > 3.1 || P),
                    T = /n\+\d|([^ ])?([>~+])([^ =])?/g,
                    U = function(a, b, c, d) {
                        return c ? (b ? b + " " : "") + c + (d ? " " + d : "") : a
                    },
                    V = function(b, c) {
                        if (b = b.replace(T, U), S) {
                            var d = L[b];
                            if (d && !c) return d
                        }
                        var e = K[b];
                        if (e) return e;
                        var g = b.charAt(0),
                            i = -1 == b.indexOf(" ");
                        b.indexOf("#") >= 0 && i && (c = !0);
                        var j = !(!S || c || -1 != h.indexOf(g) || a.isIE && -1 != b.indexOf(":") || f && b.indexOf(".") >= 0 || -1 != b.indexOf(":contains") || -1 != b.indexOf(":checked") || -1 != b.indexOf("|="));
                        if (j) {
                            var k = h.indexOf(b.charAt(b.length - 1)) >= 0 ? b + " *" : b;
                            return L[b] = function(a) {
                                try {
                                    if (9 != a.nodeType && !i) throw "";
                                    var c = a[R](k);
                                    return c[Q] = !0, c
                                } catch (d) {
                                    return V(b, !0)(a)
                                }
                            }
                        }
                        var l = b.split(/\s*,\s*/);
                        return K[b] = l.length < 2 ? M(b) : function(a) {
                            for (var b, c = 0, d = []; b = l[c++];) d = d.concat(M(b)(a));
                            return d
                        }
                    },
                    W = 0,
                    X = a.isIE ? function(a) {
                        return i ? a.getAttribute("_uid") || a.setAttribute("_uid", ++W) || W : a.uniqueID
                    } : function(a) {
                        return a._uid || (a._uid = ++W)
                    },
                    Y = function(a, b) {
                        if (!b) return 1;
                        var c = X(a);
                        return b[c] ? 0 : b[c] = 1
                    },
                    Z = "_zipIdx",
                    $ = function(b) {
                        if (b && b.nozip) return d._wrap ? d._wrap(b) : b;
                        var c = new d;
                        if (!b || !b.length) return c;
                        if (b[0] && c.push(b[0]), b.length < 2) return c;
                        if (W++, a.isIE && i) {
                            var e = W + "";
                            b[0].setAttribute(Z, e);
                            for (var f, g = 1; f = b[g]; g++) b[g].getAttribute(Z) != e && c.push(f), f.setAttribute(Z, e)
                        } else if (a.isIE && b.commentStrip) try {
                            for (var f, g = 1; f = b[g]; g++) n(f) && c.push(f)
                        } catch (h) {} else {
                            b[0] && (b[0][Z] = W);
                            for (var f, g = 1; f = b[g]; g++) b[g][Z] != W && c.push(f), f[Z] = W
                        }
                        return c
                    };
                a.query = function(b, c) {
                    if (d = a._NodeListCtor, !b) return new d;
                    if (b.constructor == d) return b;
                    if ("string" != typeof b) return new d(b);
                    if ("string" == typeof c && (c = a.byId(c), !c)) return new d;
                    c = c || e();
                    var f = c.ownerDocument || c.documentElement;
                    i = c.contentType && "application/xml" == c.contentType || a.isOpera && (c.doctype || "[object XMLDocument]" == f.toString()) || !!f && (a.isIE ? f.xml : c.xmlVersion || f.xmlVersion);
                    var g = V(b)(c);
                    return g && g.nozip && !d._wrap ? g : $(g)
                }, a.query.pseudos = A, a._filterQueryResult = function(b, c, d) {
                    for (var e, f = new a._NodeListCtor, g = k(c), h = 1 != g.length || /[^\w#\.]/.test(c) ? function(a) {
                            return -1 != dojo.query(c, d).indexOf(a)
                        } : C(g[0]), i = 0; e = b[i]; i++) h(e) && f.push(e);
                    return f
                }
            },
            b = function() {
                acme = {
                    trim: function(a) {
                        a = a.replace(/^\s+/, "");
                        for (var b = a.length - 1; b >= 0; b--)
                            if (/\S/.test(a.charAt(b))) {
                                a = a.substring(0, b + 1);
                                break
                            }
                        return a
                    },
                    forEach: function(a, b, c) {
                        if (a && a.length)
                            for (var d = 0, e = a.length; e > d; ++d) b.call(c || window, a[d], d, a)
                    },
                    byId: function(a, b) {
                        return "string" == typeof a ? (b || document).getElementById(a) : a
                    },
                    doc: document,
                    NodeList: Array
                };
                var a = navigator,
                    b = a.userAgent,
                    c = a.appVersion,
                    d = parseFloat(c);
                acme.isOpera = b.indexOf("Opera") >= 0 ? d : void 0, acme.isKhtml = c.indexOf("Konqueror") >= 0 ? d : void 0, acme.isWebKit = parseFloat(b.split("WebKit/")[1]) || void 0, acme.isChrome = parseFloat(b.split("Chrome/")[1]) || void 0;
                var e = Math.max(c.indexOf("WebKit"), c.indexOf("Safari"), 0);
                return e && !acme.isChrome && (acme.isSafari = parseFloat(c.split("Version/")[1]), (!acme.isSafari || parseFloat(c.substr(e + 7)) <= 419.3) && (acme.isSafari = 2)), document.all && !acme.isOpera && (acme.isIE = parseFloat(c.split("MSIE ")[1]) || void 0), Array._wrap = function(a) {
                    return a
                }, acme
            };
        this.dojo ? (dojo.provide("dojo._base.query"), a(this.queryPortability || this.acme || dojo)) : a(this.queryPortability || this.acme || b())
    }()), dojo._hasResource["dojo._base.xhr"] || (dojo._hasResource["dojo._base.xhr"] = !0, dojo.provide("dojo._base.xhr"), function() {
        function a(a, c, d) {
            if (null !== d) {
                var e = a[c];
                "string" == typeof e ? a[c] = [e, d] : b.isArray(e) ? e.push(d) : a[c] = d
            }
        }
        var b = dojo,
            c = b.config;
        dojo.fieldToObject = function(a) {
            var c = null,
                d = b.byId(a);
            if (d) {
                var e = d.name,
                    f = (d.type || "").toLowerCase();
                e && f && !d.disabled && ("radio" == f || "checkbox" == f ? d.checked && (c = d.value) : d.multiple ? (c = [], b.query("option", d).forEach(function(a) {
                    a.selected && c.push(a.value)
                })) : c = d.value)
            }
            return c
        }, dojo.formToObject = function(c) {
            var d = {},
                e = "file|submit|image|reset|button|";
            return b.forEach(dojo.byId(c).elements, function(c) {
                var f = c.name,
                    g = (c.type || "").toLowerCase();
                f && g && -1 == e.indexOf(g) && !c.disabled && (a(d, f, b.fieldToObject(c)), "image" == g && (d[f + ".x"] = d[f + ".y"] = d[f].x = d[f].y = 0))
            }), d
        }, dojo.objectToQuery = function(a) {
            var c = encodeURIComponent,
                d = [],
                e = {};
            for (var f in a) {
                var g = a[f];
                if (g != e[f]) {
                    var h = c(f) + "=";
                    if (b.isArray(g))
                        for (var i = 0; i < g.length; i++) d.push(h + c(g[i]));
                    else d.push(h + c(g))
                }
            }
            return d.join("&")
        }, dojo.formToQuery = function(a) {
            return b.objectToQuery(b.formToObject(a))
        }, dojo.formToJson = function(a, c) {
            return b.toJson(b.formToObject(a), c)
        }, dojo.queryToObject = function(a) {
            var c = {},
                d = a.split("&"),
                e = decodeURIComponent;
            return b.forEach(d, function(a) {
                if (a.length) {
                    var d = a.split("="),
                        f = e(d.shift()),
                        g = e(d.join("="));
                    "string" == typeof c[f] && (c[f] = [c[f]]), b.isArray(c[f]) ? c[f].push(g) : c[f] = g
                }
            }), c
        }, dojo._blockAsync = !1;
        var d = b._contentHandlers = dojo.contentHandlers = {
            text: function(a) {
                return a.responseText
            },
            json: function(a) {
                return b.fromJson(a.responseText || null)
            },
            "json-comment-filtered": function(a) {
                dojo.config.useCommentedJson || console.warn("Consider using the standard mimetype:application/json. json-commenting can introduce security issues. To decrease the chances of hijacking, use the standard the 'json' handler and prefix your json with: {}&&\nUse djConfig.useCommentedJson=true to turn off this message.");
                var c = a.responseText,
                    d = c.indexOf("/*"),
                    e = c.lastIndexOf("*/");
                if (-1 == d || -1 == e) throw new Error("JSON was not comment filtered");
                return b.fromJson(c.substring(d + 2, e))
            },
            javascript: function(a) {
                return b.eval(a.responseText)
            },
            xml: function(a) {
                var c = a.responseXML;
                if (b.isIE && (!c || !c.documentElement)) {
                    var d = function(a) {
                            return "MSXML" + a + ".DOMDocument"
                        },
                        e = ["Microsoft.XMLDOM", d(6), d(4), d(3), d(2)];
                    b.some(e, function(b) {
                        try {
                            var d = new ActiveXObject(b);
                            d.async = !1, d.loadXML(a.responseText), c = d
                        } catch (e) {
                            return !1
                        }
                        return !0
                    })
                }
                return c
            },
            "json-comment-optional": function(a) {
                return a.responseText && /^[^{\[]*\/\*/.test(a.responseText) ? d["json-comment-filtered"](a) : d.json(a)
            }
        };
        dojo._ioSetArgs = function(a, d, e, f) {
            var g = {
                    args: a,
                    url: a.url
                },
                h = null;
            if (a.form) {
                var i = b.byId(a.form),
                    j = i.getAttributeNode("action");
                g.url = g.url || (j ? j.value : null), h = b.formToObject(i)
            }
            var k = [{}];
            h && k.push(h), a.content && k.push(a.content), a.preventCache && k.push({
                "dojo.preventCache": (new Date).valueOf()
            }), g.query = b.objectToQuery(b.mixin.apply(null, k)), g.handleAs = a.handleAs || "text";
            var l = new b.Deferred(d);
            l.addCallbacks(e, function(a) {
                return f(a, l)
            });
            var m = a.load;
            m && b.isFunction(m) && l.addCallback(function(b) {
                return m.call(a, b, g)
            });
            var n = a.error;
            n && b.isFunction(n) && l.addErrback(function(b) {
                return n.call(a, b, g)
            });
            var o = a.handle;
            return o && b.isFunction(o) && l.addBoth(function(b) {
                return o.call(a, b, g)
            }), c.ioPublish && b.publish && g.args.ioPublish !== !1 && (l.addCallbacks(function(a) {
                return b.publish("/dojo/io/load", [l, a]), a
            }, function(a) {
                return b.publish("/dojo/io/error", [l, a]), a
            }), l.addBoth(function(a) {
                return b.publish("/dojo/io/done", [l, a]), a
            })), l.ioArgs = g, l
        };
        var e = function(a) {
                a.canceled = !0;
                var b = a.ioArgs.xhr,
                    c = typeof b.abort;
                ("function" == c || "object" == c || "unknown" == c) && b.abort();
                var d = a.ioArgs.error;
                return d || (d = new Error("xhr cancelled"), d.dojoType = "cancel"), d
            },
            f = function(a) {
                var b = d[a.ioArgs.handleAs](a.ioArgs.xhr);
                return void 0 === b ? null : b
            },
            g = function(a, b) {
                return b.ioArgs.args.failOk || console.error(a), a
            },
            h = null,
            i = [],
            j = 0,
            k = function(a) {
                0 >= j && (j = 0, c.ioPublish && b.publish && (!a || a && a.ioArgs.args.ioPublish !== !1) && b.publish("/dojo/io/stop"))
            },
            l = function() {
                var a = (new Date).getTime();
                if (!b._blockAsync)
                    for (var c, d = 0; d < i.length && (c = i[d]); d++) {
                        var e = c.dfd,
                            f = function() {
                                if (e && !e.canceled && c.validCheck(e)) {
                                    if (c.ioCheck(e)) i.splice(d--, 1), c.resHandle(e), j -= 1;
                                    else if (e.startTime && e.startTime + (e.ioArgs.args.timeout || 0) < a) {
                                        i.splice(d--, 1);
                                        var b = new Error("timeout exceeded");
                                        b.dojoType = "timeout", e.errback(b), e.cancel(), j -= 1
                                    }
                                } else i.splice(d--, 1), j -= 1
                            };
                        if (dojo.config.debugAtAllCosts) f.call(this);
                        else try {
                            f.call(this)
                        } catch (g) {
                            e.errback(g)
                        }
                    }
                return k(e), i.length ? void 0 : (clearInterval(h), h = null, void 0)
            };
        dojo._ioCancelAll = function() {
            try {
                b.forEach(i, function(a) {
                    try {
                        a.dfd.cancel()
                    } catch (b) {}
                })
            } catch (a) {}
        }, b.isIE && b.addOnWindowUnload(b._ioCancelAll), b._ioNotifyStart = function(a) {
            c.ioPublish && b.publish && a.ioArgs.args.ioPublish !== !1 && (j || b.publish("/dojo/io/start"), j += 1, b.publish("/dojo/io/send", [a]))
        }, b._ioWatch = function(a, b, c, d) {
            var e = a.ioArgs.args;
            e.timeout && (a.startTime = (new Date).getTime()), i.push({
                dfd: a,
                validCheck: b,
                ioCheck: c,
                resHandle: d
            }), h || (h = setInterval(l, 50)), e.sync && l()
        };
        var m = "application/x-www-form-urlencoded",
            n = function(a) {
                return a.ioArgs.xhr.readyState
            },
            o = function(a) {
                return 4 == a.ioArgs.xhr.readyState
            },
            p = function(a) {
                var c = a.ioArgs.xhr;
                if (b._isDocumentOk(c)) a.callback(a);
                else {
                    var d = new Error("Unable to load " + a.ioArgs.url + " status:" + c.status);
                    d.status = c.status, d.responseText = c.responseText, a.errback(d)
                }
            };
        dojo._ioAddQueryToUrl = function(a) {
            a.query.length && (a.url += (-1 == a.url.indexOf("?") ? "?" : "&") + a.query, a.query = null)
        }, dojo.xhr = function(a, c, d) {
            var h = b._ioSetArgs(c, e, f, g),
                i = h.ioArgs,
                j = i.xhr = b._xhrObj(i.args);
            if (!j) return h.cancel(), h;
            if ("postData" in c ? i.query = c.postData : "putData" in c ? i.query = c.putData : "rawBody" in c ? i.query = c.rawBody : (arguments.length > 2 && !d || -1 == "POST|PUT".indexOf(a.toUpperCase())) && b._ioAddQueryToUrl(i), j.open(a, i.url, c.sync !== !0, c.user || void 0, c.password || void 0), c.headers)
                for (var k in c.headers) "content-type" !== k.toLowerCase() || c.contentType ? c.headers[k] && j.setRequestHeader(k, c.headers[k]) : c.contentType = c.headers[k];
            if (j.setRequestHeader("Content-Type", c.contentType || m), c.headers && "X-Requested-With" in c.headers || j.setRequestHeader("X-Requested-With", "XMLHttpRequest"), b._ioNotifyStart(h), dojo.config.debugAtAllCosts) j.send(i.query);
            else try {
                j.send(i.query)
            } catch (l) {
                i.error = l, h.cancel()
            }
            return b._ioWatch(h, n, o, p), j = null, h
        }, dojo.xhrGet = function(a) {
            return b.xhr("GET", a)
        }, dojo.rawXhrPost = dojo.xhrPost = function(a) {
            return b.xhr("POST", a, !0)
        }, dojo.rawXhrPut = dojo.xhrPut = function(a) {
            return b.xhr("PUT", a, !0)
        }, dojo.xhrDelete = function(a) {
            return b.xhr("DELETE", a)
        }
    }()), dojo._hasResource["dojo._base.fx"] || (dojo._hasResource["dojo._base.fx"] = !0, dojo.provide("dojo._base.fx"), function() {
        var a = dojo,
            b = a._mixin;
        dojo._Line = function(a, b) {
            this.start = a, this.end = b
        }, dojo._Line.prototype.getValue = function(a) {
            return (this.end - this.start) * a + this.start
        }, dojo.Animation = function(c) {
            b(this, c), a.isArray(this.curve) && (this.curve = new a._Line(this.curve[0], this.curve[1]))
        }, a._Animation = a.Animation, a.extend(dojo.Animation, {
            duration: 350,
            repeat: 0,
            rate: 20,
            _percent: 0,
            _startRepeatCount: 0,
            _getStep: function() {
                var a = this._percent,
                    b = this.easing;
                return b ? b(a) : a
            },
            _fire: function(b, c) {
                var d = c || [];
                if (this[b])
                    if (a.config.debugAtAllCosts) this[b].apply(this, d);
                    else try {
                        this[b].apply(this, d)
                    } catch (e) {
                        console.error("exception in animation handler for:", b), console.error(e)
                    }
                return this
            },
            play: function(a, b) {
                var c = this;
                if (c._delayTimer && c._clearTimer(), b) c._stopTimer(), c._active = c._paused = !1, c._percent = 0;
                else if (c._active && !c._paused) return c;
                c._fire("beforeBegin", [c.node]);
                var d = a || c.delay,
                    e = dojo.hitch(c, "_play", b);
                return d > 0 ? (c._delayTimer = setTimeout(e, d), c) : (e(), c)
            },
            _play: function() {
                var a = this;
                a._delayTimer && a._clearTimer(), a._startTime = (new Date).valueOf(), a._paused && (a._startTime -= a.duration * a._percent), a._active = !0, a._paused = !1;
                var b = a.curve.getValue(a._getStep());
                return a._percent || (a._startRepeatCount || (a._startRepeatCount = a.repeat), a._fire("onBegin", [b])), a._fire("onPlay", [b]), a._cycle(), a
            },
            pause: function() {
                var a = this;
                return a._delayTimer && a._clearTimer(), a._stopTimer(), a._active ? (a._paused = !0, a._fire("onPause", [a.curve.getValue(a._getStep())]), a) : a
            },
            gotoPercent: function(a, b) {
                var c = this;
                return c._stopTimer(), c._active = c._paused = !0, c._percent = a, b && c.play(), c
            },
            stop: function(a) {
                var b = this;
                return b._delayTimer && b._clearTimer(), b._timer ? (b._stopTimer(), a && (b._percent = 1), b._fire("onStop", [b.curve.getValue(b._getStep())]), b._active = b._paused = !1, b) : b
            },
            status: function() {
                return this._active ? this._paused ? "paused" : "playing" : "stopped"
            },
            _cycle: function() {
                var a = this;
                if (a._active) {
                    var b = (new Date).valueOf(),
                        c = (b - a._startTime) / a.duration;
                    c >= 1 && (c = 1), a._percent = c, a.easing && (c = a.easing(c)), a._fire("onAnimate", [a.curve.getValue(c)]), a._percent < 1 ? a._startTimer() : (a._active = !1, a.repeat > 0 ? (a.repeat--, a.play(null, !0)) : -1 == a.repeat ? a.play(null, !0) : a._startRepeatCount && (a.repeat = a._startRepeatCount, a._startRepeatCount = 0), a._percent = 0, a._fire("onEnd", [a.node]), !a.repeat && a._stopTimer())
                }
                return a
            },
            _clearTimer: function() {
                clearTimeout(this._delayTimer), delete this._delayTimer
            }
        });
        var c = 0,
            d = null,
            e = {
                run: function() {}
            };
        a.extend(a.Animation, {
            _startTimer: function() {
                this._timer || (this._timer = a.connect(e, "run", this, "_cycle"), c++), d || (d = setInterval(a.hitch(e, "run"), this.rate))
            },
            _stopTimer: function() {
                this._timer && (a.disconnect(this._timer), this._timer = null, c--), 0 >= c && (clearInterval(d), d = null, c = 0)
            }
        });
        var f = a.isIE ? function(b) {
            var c = b.style;
            c.width.length || "auto" != a.style(b, "width") || (c.width = "auto")
        } : function() {};
        dojo._fade = function(c) {
            c.node = a.byId(c.node);
            var d = b({
                    properties: {}
                }, c),
                e = d.properties.opacity = {};
            e.start = "start" in d ? d.start : function() {
                return +a.style(d.node, "opacity") || 0
            }, e.end = d.end;
            var g = a.animateProperty(d);
            return a.connect(g, "beforeBegin", a.partial(f, d.node)), g
        }, dojo.fadeIn = function(c) {
            return a._fade(b({
                end: 1
            }, c))
        }, dojo.fadeOut = function(c) {
            return a._fade(b({
                end: 0
            }, c))
        }, dojo._defaultEasing = function(a) {
            return .5 + Math.sin((a + 1.5) * Math.PI) / 2
        };
        var g = function(b) {
            this._properties = b;
            for (var c in b) {
                var d = b[c];
                d.start instanceof a.Color && (d.tempColor = new a.Color)
            }
        };
        g.prototype.getValue = function(b) {
            var c = {};
            for (var d in this._properties) {
                var e = this._properties[d],
                    f = e.start;
                f instanceof a.Color ? c[d] = a.blendColors(f, e.end, b, e.tempColor).toCss() : a.isArray(f) || (c[d] = (e.end - f) * b + f + ("opacity" != d ? e.units || "px" : 0))
            }
            return c
        }, dojo.animateProperty = function(c) {
            var d = c.node = a.byId(c.node);
            c.easing || (c.easing = a._defaultEasing);
            var e = new a.Animation(c);
            return a.connect(e, "beforeBegin", e, function() {
                function c(b, c) {
                    var d = {
                        height: b.offsetHeight,
                        width: b.offsetWidth
                    }[c];
                    return void 0 !== d ? d : (d = a.style(b, c), "opacity" == c ? +d : i ? d : parseFloat(d))
                }
                var e = {};
                for (var f in this.properties) {
                    ("width" == f || "height" == f) && (this.node.display = "block");
                    var h = this.properties[f];
                    a.isFunction(h) && (h = h(d)), h = e[f] = b({}, a.isObject(h) ? h : {
                        end: h
                    }), a.isFunction(h.start) && (h.start = h.start(d)), a.isFunction(h.end) && (h.end = h.end(d));
                    var i = f.toLowerCase().indexOf("color") >= 0;
                    "end" in h ? "start" in h || (h.start = c(d, f)) : h.end = c(d, f), i ? (h.start = new a.Color(h.start), h.end = new a.Color(h.end)) : h.start = "opacity" == f ? +h.start : parseFloat(h.start)
                }
                this.curve = new g(e)
            }), a.connect(e, "onAnimate", a.hitch(a, "style", e.node)), e
        }, dojo.anim = function(b, c, d, e, f, g) {
            return a.animateProperty({
                node: b,
                duration: d || a.Animation.prototype.duration,
                properties: c,
                easing: e,
                onEnd: f
            }).play(g || 0)
        }
    }()), dojo._hasResource["dojo._base.browser"] || (dojo._hasResource["dojo._base.browser"] = !0, dojo.provide("dojo._base.browser"), dojo.forEach(dojo.config.require, function(a) {
        dojo.require(a)
    })), dojo._hasResource["dojo._base"] || (dojo._hasResource["dojo._base"] = !0, dojo.provide("dojo._base")), dojo.isBrowser && ("complete" === document.readyState || dojo.config.afterOnLoad) && window.setTimeout(dojo._loadInit, 100)
}();