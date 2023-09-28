/*! BUILD: 2021-04-21 */ ! function(a, b) {
    function c(a, c, d) {
        if (d === b && 1 === a.nodeType) {
            var e = "data-" + c.replace(v, "-$1").toLowerCase();
            if (d = a.getAttribute(e), "string" == typeof d) {
                try {
                    d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : g.isNumeric(d) ? parseFloat(d) : u.test(d) ? g.parseJSON(d) : d
                } catch (f) {}
                g.data(a, c, d)
            } else d = b
        }
        return d
    }

    function d() {
        return !1
    }

    function e() {
        return !0
    }

    function f(a) {
        for (var b in a)
            if (("data" !== b || !g.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }
    var g = function(a, b) {
            return new g.prototype.init(a, b)
        },
        h = /^(?:textarea|input|select)$/i,
        i = /^([^\.]*)?(?:\.(.+))?$/,
        j = /\bhover(\.\S+)?\b/,
        k = /^(?:focusinfocus|focusoutblur)$/,
        l = /-([a-z]|[0-9])/gi,
        m = /^-ms-/,
        n = Array.prototype.push,
        o = function(a, b) {
            return (b + "").toUpperCase()
        },
        p = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
        q = {},
        r = /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
        s = function(a) {
            var b = p.exec(a);
            return b && (b[1] = (b[1] || "").toLowerCase(), b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)")), b
        },
        t = function(a) {
            return g.event.special.hover ? a : a.replace(j, "mouseenter$1 mouseleave$1")
        },
        u = /^(?:\{.*\}|\[.*\])$/,
        v = /([A-Z])/g,
        w = function(a, b) {
            var c = a.attributes || {};
            return !(b[1] && a.nodeName.toLowerCase() !== b[1] || b[2] && (c.id || {}).value !== b[2] || b[3] && !b[3].test((c["class"] || {}).value))
        },
        x = {
            slow: 1e3,
            normal: 500,
            fast: 250
        },
        n = Array.prototype.push;
    g.prototype = {
        constructor: g,
        targets: null,
        init: function(c, d) {
            if (this.targets = [], null == c) return this.targets = dojo.query(), this;
            if (c.targets) return this.targets = c.targets, this;
            if (g.isFunction(c)) return this.ready(c);
            if ("object" == typeof obj && "[object object]" == Object.prototype.toString.call(obj).toLowerCase() && !obj.length) return this.targets = c, void(this.length = 1);
            if (c.target && "A" != c.tagName || c.currentTarget || c === b && (a.event.currentTarget || a.event.target)) {
                var e = c || a.event;
                c = this.context = e.target || e.currentTarget
            } else {
                if (g.isArray(c)) {
                    if (c.length) {
                        if (c[0].nodeType && !c.on) {
                            for (var f, h = 0, i = c.length; i > h; h++) c[h].nodeType && (null != f ? f.push(c[h]) : f = dojo.query(c[h]));
                            this.targets = f
                        } else this.targets = c;
                        return this.selector = c, this.length = this.targets.length, this
                    }
                    return this.selector = c, this.targets = [], this.length = this.targets.length, this
                }
                if (c) {
                    if (c.nodeType) this.context = c;
                    else if ("body" === c && !d && document.body) this.context = document;
                    else if ("string" == typeof c) {
                        if (c.indexOf("<") > -1 && c.indexOf(">") > 0) {
                            if (c.indexOf("</script>") > 0) {
                                var j = document.getElementById("t_tmpl");
                                null == j && (j = document.createElement("script"), j.setAttribute("id", "t_tmpl"), j.setAttribute("type", "text/html"), document.getElementsByTagName("head")[0].appendChild(j)), j.text = g.trim(c).replace(/<\/script>/i, "").replace(/<script[^>]*?>/gi, ""), this.selector = j
                            } else {
                                var j = dojo._toDom(c);
                                this.selector = j
                            }
                            return this.targets = dojo.query(this.selector), this.length = this.targets.length, this
                        }
                        this.context = d
                    }
                } else;
            }
            return this.selector = c, "string" == typeof c && c.indexOf(":visible") > -1 ? (this.targets = dojo.query(c.replace(/:visible/gi, "")), this.filter(":visible")) : this.targets = dojo.query(c), this.length = this.targets.length, this
        },
        addClass: function(a) {
            return this.targets.addClass ? this.targets.addClass(a) : dojo.addClass(this.get(0), a), this
        },
        after: function(a) {
            return this.targets.after(a), this
        },
        before: function(a) {
            return this.targets.before(a), this
        },
        hasComplete: function(a) {
            return a + 1 == this.size()
        },
        animate: function(a, b, c) {
            this.size();
            return this.each(function(d, e) {
                dojo.animateProperty({
                    node: e,
                    properties: a,
                    duration: b,
                    onEnd: c
                }).play()
            }), this
        },
        append: function(c, d, e) {
            g.isFunction(d) && (e = d, d = null);
            var f = this;
            return "string" == typeof c && ".ejs" == c.substr(c.length - 4).toLowerCase() ? (c += "?v=" + a.VERSION, g.get(c, null, function(a) {
                if (a) {
                    var b = d ? g(a).tmpl(d) : a;
                    f.append(b, function() {
                        a && a.indexOf("page-num") > 0 && g("#pageNo em").text(g(b).find("p.page-num>em").text()), e && e(f.targets)
                    })
                }
            }), this) : (c !== b ? (this.targets.append(c.targets || c), e && e(this.targets)) : alert("Method append must have a param!"), this)
        },
        appendTo: function(a, c) {
            return a !== b ? (a.at || (a = a.targets || dojo.query(a)), this.targets.appendTo(a), c && c(this.targets)) : alert("Method appendTo must have a param!"), this
        },
        keyValToJson: function(a, b) {
            var c = {};
            return c[a] = b, c
        },
        attr: function(a, c) {
            return "string" == typeof a && c === b ? dojo.attr(this.get(0), a) : (c !== b && (a = this.keyValToJson(a, c)), this.targets.attr(a), this)
        },
        children: function(a) {
            return a = a || "*", this.find(">" + a).filter(function(a) {
                return 1 === a.nodeType
            })
        },
        clone: function() {
            return g(this.targets.clone())
        },
        contents: function(a) {
            return g.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : g.makeArray(a.childNodes)
        },
        css: function(a, b) {
            if ("string" == typeof a && null == b) return dojo.style(this.get(0), a);
            if ("string" == typeof a && "string" == typeof b) {
                if ("zindex" == a.toLowerCase() && (b.indexOf("-=") > -1 || b.indexOf("+=") > -1)) {
                    var c = parseInt(dojo.style(this.get(0), a) || "0");
                    b = b.indexOf("-=") > -1 ? c - parseInt(b.replace(/\+\=|\-\=/g, "")) : c + parseInt(b.replace(/\+\=|\-\=/g, ""))
                }
                a = this.keyValToJson(a, b)
            }
            return this.targets.style(a), this
        },
        data: function(a, d) {
            var e, f, h, i = null,
                j = this.get(0);
            if (a === b) {
                if (this.length && (i = g.data(j), 1 === j.nodeType && !g._data(j, "parsedAttrs"))) {
                    f = j.attributes;
                    for (var k = 0, l = f.length; l > k; k++) h = f[k].name, 0 === h.indexOf("data-") && (h = g.camelCase(h.substring(5)), c(j, h, i[h]));
                    g._data(j, "parsedAttrs", !0)
                }
                return i
            }
            return "object" == typeof a ? this.each(function() {
                g.data(this, a)
            }) : (e = a.split("."), e[1] = e[1] ? "." + e[1] : "", d === b ? (i = this.triggerHandler("getData" + e[1] + "!", [e[0]]), i === b && this.length && (i = g.data(j, a), i = c(j, a, i)), i === b && e[1] ? this.data(e[0]) : i) : this.each(function(b, c) {
                var f = g(c),
                    h = [e[0], d];
                f.triggerHandler("setData" + e[1] + "!", h), g.data(c, a, d), f.triggerHandler("changeData" + e[1] + "!", h)
            }))
        },
        removeData: function(a) {
            return this.each(function(b, c) {
                g.removeData(c, a)
            })
        },
        find: function(a) {
            var b = null;
            if (a)
                for (var c, d = 0, e = this.size(); e > d; d++) "3" != this.get(d).nodeType && (c = dojo.query("string" == typeof a ? a.replace(/:visible/gi, "") : a, this.get(d)), c.length && (b = null == b ? c : b.concat(c)));
            return a.indexOf(":visible") > -1 && null != b ? g(b).filter(":visible") : g(b)
        },
        each: function(a, b) {
            return g.each(this.targets, a, b), this
        },
        empty: function() {
            return this.targets.empty(), this
        },
        eq: function(a) {
            var b = this.get(a);
            return b ? g(b) : null
        },
        filter: function(a) {
            for (var b = 0; b < this.length; b++) this.eq(b) && this.eq(b).is(a) || (this.targets.splice(b, 1), b--, this.length--);
            return this
        },
        first: function() {
            return this.eq(0)
        },
        hasClass: function(a) {
            for (var b = 0, c = this.size(); c > b; b++)
                if (dojo.hasClass(this.targets[b], a)) return !0;
            return !1
        },
        hover: function(a, b) {
            return this.on("mouseenter", a).on("mouseleave", b || a)
        },
        last: function() {
            return this.eq(-1)
        },
        length: 0,
        get: function(a) {
            return a > this.size() ? null : null == a || a === b ? this.targets : 0 > a ? this.targets[this.length + a] : this.targets[a]
        },
        html: function(b, c, d) {
            g.isFunction(c) && (d = c, c = null);
            var e = this;
            if (null == b && null == d) return this.get(0).innerHTML;
            if ("string" == typeof b) {
                if (".ejs" == b.substr(b.length - 4).toLowerCase()) return b += "?v=" + a.VERSION, g.get(b, null, function(a) {
                    a && e.empty().html(c ? g(a).tmpl(c) : a, function() {
                        d && d(), a && a.indexOf("page-num") > 0 && g("#pageNo em").text(e.find("p.page-num>em").text())
                    })
                }), this;
                if (b.indexOf("<script") > -1 && "function" != typeof c) return e.empty().html(g(b).tmpl(c), function() {
                    d && d()
                }), this
            }
            if (b.targets) {
                var f = b.targets[0];
                b = 11 == f.nodeType ? f : f.innerHTML
            }
            return g.each(this.targets, function(a, c) {
                "string" == typeof b ? c.innerHTML = b : null != b.nodeType && g(c).append(b), a == e.size() - 1 && "function" == typeof d && d(this.targets)
            }), this
        },
        text: function(a) {
            return null != a ? (this.targets.text(a), this) : this.targets.text()
        },
        val: function(a) {
            var b = null != a ? this.targets.val(a) : this.targets.val();
            return "string" == typeof a ? this : b
        },
        offset: function() {
            var a = {
                top: 0,
                left: 0
            };
            return this.size() > 0 && (a.top = this.get(0).offsetTop, a.left = this.get(0).offsetLeft), a
        },
        offset2: function() {
            var a, b = this.get(0);
            if (!b || !b.ownerDocument) return null;
            if (b === b.ownerDocument.body) return null;
            if (!b.getBoundingClientRect) return null;
            try {
                a = b.getBoundingClientRect()
            } catch (c) {}
            var d = b.ownerDocument,
                e = d.documentElement;
            if (!a || !g.contains(e, b)) return a ? {
                top: a.top,
                left: a.left
            } : {
                top: 0,
                left: 0
            };
            var f = d.body,
                h = g.isWindow(b) ? b : 9 === b.nodeType ? b.defaultView || b.parentWindow : !1,
                i = e.clientTop || f.clientTop || 0,
                j = e.clientLeft || f.clientLeft || 0,
                k = h.pageYOffset || g.boxModel && e.scrollTop || f.scrollTop,
                l = h.pageXOffset || g.boxModel && e.scrollLeft || f.scrollLeft,
                m = a.top + k - i,
                n = a.left + l - j;
            return {
                top: m,
                left: n
            }
        },
        on: function(a, c, e, f, h) {
            var i;
            if ("object" == typeof a) {
                "string" != typeof c && (e = c, c = b);
                for (i in a) this.on(i, c, e, a[i], h);
                return this
            }
            if (null == e && null == f ? (f = c, e = c = b) : null == f && ("string" == typeof c ? (f = e, e = b) : (f = e, e = c, c = b)), f === !1) f = d;
            else if (!f) return this;
            return this.each(function(b, d) {
                g.event.add(d, a, f, e, c)
            })
        },
        off: function(a, c, e) {
            if (a && a.preventDefault && a.handleObj) {
                var f = a.handleObj;
                return g(a.delegateTarget).off(f.namespace ? f.type + "." + f.namespace : f.type, f.selector, f.handler), this
            }
            if ("object" == typeof a) {
                for (var h in a) this.off(h, c, a[h]);
                return this
            }
            return (c === !1 || "function" == typeof c) && (e = c, c = b), e === !1 && (e = d), this.each(function() {
                g.event.remove(this, a, e, c)
            })
        },
        outerWidth: function() {
            return this.size() < 1 ? 0 : this.width() + this.css("marginLeft") + this.css("marginRight")
        },
        outerHeight: function() {
            return this.size() < 1 ? 0 : this.height() + this.css("marginTop") + this.css("marginBottom")
        },
        screenHeight: function(a) {
            var b = document.documentElement.scrollTop || document.body.scrollTop,
                c = document.documentElement.clientHeight || document.body.clientHeight,
                d = this.offset2().top,
                e = this.height();
            return c - (d + e - b) - (a || 0)
        },
        scrollHight: function(a) {
            return a ? (this.get(0).scrollHeight = a, this) : this.get(0).scrollHeight
        },
        scrollWidth: function(a) {
            return a ? (this.get(0).scrollHeight = a, this) : this.get(0).scrollWidth
        },
        trigger: function(a, b) {
            if ("click" == a && /.*version\/([\w.]+).*(safari).*/i.test(navigator.userAgent)) {
                var c = document.createEvent("HTMLEvents");
                return c.initEvent("click", !0, !0), this.each(function() {
                    this.dispatchEvent(c)
                }), this
            }
            return this.each(function() {
                g.event.trigger(a, b, this)
            })
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        fadeIn: function(a, b, c) {
            isNaN(a) ? a = x[a] || 1e3 : "function" == typeof a && (b = a), isNaN(a) && (a = 1e3);
            for (var d = 0, e = this.length; e > d; d++) dojo[c || "fadeIn"]({
                node: this.get(d),
                duration: a
            }).play();
            return b && b.call(this.targets), this
        },
        fadeOut: function(a, b) {
            return this.fadeIn(a, b, "fadeOut"), this
        },
        focus: function(a) {
            return this.on("focus", a)
        },
        undelegate: function(a, b, c) {
            return 1 == arguments.length ? this.off(a, "**") : this.off(b, a, c)
        },
        length: this.length,
        keydown: function(a) {
            return this.on("keydown", a)
        },
        keypress: function(a) {
            return this.on("keypress", a)
        },
        keyup: function(a) {
            return this.on("keyup", a)
        },
        mousedown: function(a) {
            return this.on("mousedown", a)
        },
        ready: dojo.ready,
        remove: function() {
            this.targets.remove()
        },
        removeAttr: function(a) {
            return this.targets.removeAttr(a), this
        },
        removeClass: function(a) {
            return this.targets.removeClass(a), this
        },
        size: function() {
            return this.targets.length || (g.isArray(this.targets) ? 0 : 1)
        },
        slideDown: function(a, b) {
            var c = this.height(),
                d = this;
            return g.isFunction(a) && (b = a), d.css({
                display: "block",
                overflow: "hidden",
                height: "0px"
            }), this.animate({
                height: c
            }, x[a] || x.normal, function() {
                d.targets.style({
                    display: "",
                    overflow: "",
                    height: ""
                }), b && b(d)
            })
        },
        slideUp: function(a, b) {
            var c = this;
            return c.css({
                display: "block",
                overflow: "hidden"
            }), g.isFunction(a) && (b = a), this.animate({
                height: 0
            }, x[a] || x.normal, function(a) {
                c.css({
                    display: "",
                    overflow: "",
                    height: ""
                }).hide(), b && b(a)
            })
        },
        slideToggle: function(a, b) {
            this.eq(0).is(":visible") ? this.slideUp(a, b) : this.slideDown(a, b)
        },
        type: function(a) {
            return null == a ? String(a) : q[Object.prototype.toString.call(a)] || "object"
        },
        toArray: function() {
            return slice.call(this, 0)
        },
        toJson: dojo.toJson,
        toggle: function() {
            return this.each(function(a, b) {
                var c = g(b);
                c.is(":visible") ? c.addClass("hide").css("display", "") : c.removeClass("hide").css("display", "block")
            }), this
        },
        toggleClass: function(a, b) {
            return this.targets.toggleClass(a, b), this
        },
        triggerHandler: function(a, b) {
            return this.get(0) ? g.event.trigger(a, b, this.get(0), !0) : void 0
        },
        hide: function(a) {
            return this.addClass("hide").css("display", "none").attr("visible", "false"), this
        },
        show: function(a) {
            this.removeClass("hide").css("display", "").removeAttr("visible");
            var b = g(this).find("p.page-num");
            return b.size() && g("#pageNo em").text(b.find("em").text()), this
        },
        parent: function() {
            var a, b, c = (this.size(), this);
            return this.each(function(d) {
                b = c.get(d).parentNode, 11 !== parent.nodeType && (a ? a.push(b) : a = dojo.query(b))
            }), a ? g(a) : null
        },
        closest: function(a, b, c) {
            for (var d = null, e = c ? this.get(0).parentNode : this.get(0); null != e;) {
                if (g(e).is(a)) {
                    d = e;
                    break
                }
                e = e.parentNode
            }
            return d ? g(d) : d
        },
        parents: function(a, b) {
            return this.closest(a, b, !0)
        },
        next: function(a, b) {
            var c = [];
            return this.each(function(d, e) {
                for (var f = !0, h = e.nextSibling; f && null != h;) null != a ? g(h).is(a) && (c.push(h), b || (f = !1)) : "1" == h.nodeType && (c.push(h), b || (f = !1)), h = h.nextSibling
            }), g(c || null)
        },
        nextAll: function(a) {
            return this.next(a, !0)
        },
        prev: function(a, b) {
            var c = [];
            return this.each(function(d, e) {
                for (var f = !0, h = e.previousSibling; f && null != h;) null != a ? g(h).is(a) && (c.push(h), b || (f = !1)) : "1" == h.nodeType && (c.push(h), b || (f = !1)), h = h.previousSibling
            }), g(c)
        },
        prevAll: function(a) {
            return this.prev(a, !0)
        },
        siblings: function(a) {
            return g(g.merge(this.prevAll(a).targets, this.nextAll(a).targets))
        },
        is: function(a) {
            return ":visible" == a && this.size() > 0 ? this.get(0).offsetWidth > 0 && this.get(0).offsetHeight > 0 && "hidden" != this.css("visibility") : !!a && ("string" == typeof a && r.test(a) ? g(a, this.context).index(this.get(0)) >= 0 : this.targets.filter(a).length > 0)
        },
        index: function(a) {
            if (null == a) {
                var b = this.get(0);
                return b && b.parentNode ? this.prevAll().length : -1
            }
            return g.inArray(a.index ? a.get(0) : a, this)
        },
        position: function() {
            var a = this.targets.at(0).position()[0];
            return {
                left: a.x,
                top: a.y
            }
        },
        prepend: function(a) {
            return this.targets.prepend(a.targets || a), this
        },
        prependTo: function(a) {
            return this.targets.prepend(a.targets || a), this
        },
        insertAfter: function(a) {
            return this.targets.insertAfter(a.targets || a), this
        },
        insertBefore: function(a) {
            return this.targets.insertBefore(a.targets || a), this
        },
        replaceAll: function(a) {
            return this.targets.replaceAll(a), this
        },
        width: function(a) {
            if (0 == this.size()) return 0;
            if (null != a) return this.css("width", a), this;
            if (this.eq(0).hasClass("hide")) {
                var b = this.eq(0).removeClass("hide").css({
                        position: "absolute",
                        visibility: "hidden"
                    }),
                    c = b.targets.at(0).position()[0].w;
                return b.addClass("hide").css({
                    position: "",
                    visibility: ""
                }), "" == b.attr("style") && b.removeAttr("style"), c
            }
            return this.targets.at(0).position()[0].w
        },
        height: function(a) {
            if (0 == this.size()) return 0;
            if (null != a) return this.css("height", a), this;
            if (!this.eq(0).is(":visible")) {
                var b = this.eq(0).css({
                        position: "absolute",
                        visibility: "hidden",
                        display: "block"
                    }),
                    c = b.targets.at(0).position()[0].h;
                return b.css({
                    position: "",
                    visibility: "",
                    display: ""
                }), c
            }
            return this.targets.at(0).position()[0].h
        }
    }, g.prototype.init.prototype = g.prototype, g.extend = g.prototype.extend = function() {
        var a, c, d, e, f, h, i = arguments[0] || {},
            j = 1,
            k = arguments.length,
            l = !1;
        for ("boolean" == typeof i && (l = i, i = arguments[1] || {}, j = 2), "object" == typeof i || g.isFunction(i) || (i = {}), k === j && (i = this, --j); k > j; j++)
            if (null != (a = arguments[j]))
                for (c in a) d = i[c], e = a[c], i !== e && (l && e && (g.isPlainObject(e) || (f = g.isArray(e))) ? (f ? (f = !1, h = d && g.isArray(d) ? d : []) : h = d && g.isPlainObject(d) ? d : {}, i[c] = g.extend(l, h, e)) : e !== b && (i[c] = e));
        return i
    }, g.fn = g.prototype, g.extend({
        cache: {},
        uuid: 0,
        expando: "dojo" + ("1.6." + Math.random()).replace(/\D/g, ""),
        type: function(a) {
            return null == a ? String(a) : q[Object.prototype.toString.call(a) || toString().call(a)] || "object"
        },
        ajax: function(a) {
            0 != a.showLoading && g("#ajaxLoading").css("height", CU.getDocumentPracticalHeight() + "px").show();
            var b = a.type ? a.type.toUpperCase() : "POST",
                c = {
                    url: a.url,
                    headers: {
                        "bfw-ctrl": "json",
                        "X-id": Common.getIdentityId()
                    },
                    handleAs: a.dataType || "json",
                    error: a.error || function(a) {
                        console.log(a)
                    },
                    contentType: a.contentType || "application/json",
                    handle: function() {
                        0 != a.showLoading && g("#ajaxLoading").hide()
                    }
                };
            return null != a.async && (c.sync = a.async), null != a.success && (c.load = a.success), null != a.data && (c.postData = a.data), dojo.xhr(b, c)
        },
        ajax2: function(a) {
            0 != a.showLoading && g("#ajaxLoading").css("height", CU.getDocumentPracticalHeight() + "px").show();
            var b = a.type ? a.type.toUpperCase() : "POST",
                c = {
                    url: a.url,
                    headers: a.headers,
                    handleAs: a.dataType || "json",
                    error: a.error || function(a) {
                        console.log(a)
                    },
                    contentType: a.contentType || "application/json",
                    handle: function() {
                        0 != a.showLoading && g("#ajaxLoading").hide()
                    }
                };
            return null != a.async && (c.sync = a.async), null != a.success && (c.load = a.success), null != a.data && (c.postData = a.data), dojo.xhr(b, c)
        },
        browser: {
            chrome: dojo.isChrome !== b,
            firefox: dojo.isFF !== b,
            opera: dojo.isOpera !== b,
            mozilla: dojo.isMozilla !== b,
            msie: dojo.isIE !== b,
            version: dojo.isIE || dojo.isFF || dojo.isSafari || dojo.isOpera || dojo.isChrome || dojo.isMozilla
        },
        camelCase: function(a) {
            return a.replace(m, "ms-").replace(l, o)
        },
        each: function(a, c, d) {
            a.targets && (a = a.targets);
            var e, f = 0,
                h = a.length,
                i = h === b || g.isFunction(a);
            if (d)
                if (i) {
                    for (e in a)
                        if (c.apply(a[e], d) === !1) break
                } else
                    for (; h > f && c.apply(a[f++], d) !== !1;);
            else if (i) {
                for (e in a)
                    if (c.call(a[e], e, a[e]) === !1) break
            } else
                for (; h > f && c.call(a[f], f, a[f++]) !== !1;);
            return a
        },
        guid: 1,
        hasData: function(a) {
            return a = a.nodeType ? g.cache[a[g.expando]] : a[g.expando], !!a && !f(a)
        },
        merge: function(a, c) {
            var d = a.length,
                e = 0;
            if ("number" == typeof c.length)
                for (var f = c.length; f > e; e++) a[d++] = c[e];
            else
                for (; c[e] !== b;) a[d++] = c[e++];
            return a.length = d, a
        },
        makeArray: function(a, b) {
            var c = b || [];
            if (null != a) {
                var d = g.type(a);
                null == a.length || "string" === d || "function" === d || "regexp" === d || g.isWindow(a) ? n.call(c, a) : g.merge(c, a)
            }
            return c
        },
        noop: function() {},
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        data: function(a, c, d, e) {
            if (g.acceptData(a)) {
                var f, h, i, j = g.expando,
                    k = "string" == typeof c,
                    l = a.nodeType,
                    m = l ? g.cache : a,
                    n = l ? a[j] : a[j] && j,
                    o = "events" === c;
                if (n && m[n] && (o || e || m[n].data) || !k || d !== b) return n || (l ? a[j] = n = ++g.uuid : n = j), m[n] || (m[n] = {}, l || (m[n].toJSON = g.noop)), ("object" == typeof c || "function" == typeof c) && (e ? m[n] = g.extend(m[n], c) : m[n].data = g.extend(m[n].data, c)), f = h = m[n], e || (h.data || (h.data = {}), h = h.data), d !== b && (h[g.camelCase(c)] = d), o && !h[c] ? f.events : (k ? (i = h[c], null == i && (i = h[g.camelCase(c)])) : i = h, i)
            }
        },
        removeData: function(a, b, c) {
            if (g.acceptData(a)) {
                var d, e, h, i = g.expando,
                    j = a.nodeType,
                    k = j ? g.cache : a,
                    l = j ? a[i] : i;
                if (k[l]) {
                    if (b && (d = c ? k[l] : k[l].data)) {
                        g.isArray(b) || (b in d ? b = [b] : (b = g.camelCase(b), b = b in d ? [b] : b.split(" ")));
                        for (e = 0, h = b.length; h > e; e++) delete d[b[e]];
                        if (!(c ? f : g.isEmptyObject)(d)) return
                    }(c || (delete k[l].data, f(k[l]))) && (g.support.deleteExpando || !k.setInterval ? delete k[l] : k[l] = null, j && (g.support.deleteExpando ? delete a[i] : a.removeAttribute ? a.removeAttribute(i) : a[i] = null))
                }
            }
        },
        _data: function(a, b, c) {
            return g.data(a, b, c, !0)
        },
        acceptData: function(a) {
            if (a.nodeName) {
                var b = g.noData[a.nodeName.toLowerCase()];
                return b ? !(b === !0 || a.getAttribute("classid") !== b) : !0
            }
            return !1
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (Array.prototype.indexOf) return Array.prototype.indexOf.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        isFunction: function(a) {
            return "function" === g.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === g.type(a)
        },
        isWindow: function(a) {
            return a && "object" == typeof a && "setInterval" in a
        },
        isNumeric: function(a) {
            return !isNaN(parseFloat(a)) && isFinite(a)
        },
        isPlainObject: function(a) {
            if (!a || "object" !== g.type(a) || a.nodeType || g.isWindow(a)) return !1;
            try {
                if (a.constructor && !hasOwn.call(a, "constructor") && !hasOwn.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            var d;
            for (d in a);
            return d === b || hasOwn.call(a, d)
        },
        isEmptyObject: function(a) {
            for (var b in a) return !1;
            return !0
        },
        now: function() {
            return (new Date).getTime()
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
        },
        ready: dojo.ready,
        map: dojo.map,
        when: function(a) {
            if (!a || a.el) {
                var b = {
                    then: function(a) {
                        "function" == typeof a && a()
                    },
                    done: function(a) {
                        "function" == typeof a && a()
                    }
                };
                return b
            }
            return dojo.when(a)
        },
        Deferred: dojo.Deferred,
        trim: function(a) {
            return "string" != typeof a ? a : dojo.trim(a)
        }
    }), g.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) {
        q["[object " + b + "]"] = b.toLowerCase()
    }), g.event = {
        add: function(a, c, d, e, f) {
            var h, j, k, l, m, n, o, p, q, r, u;
            if (3 !== a.nodeType && 8 !== a.nodeType && c && d && (h = g._data(a))) {
                for (d.handler && (q = d, d = q.handler), d.guid || (d.guid = g.guid++), k = h.events, k || (h.events = k = {}), j = h.handle, j || (h.handle = j = function(a) {
                        return "undefined" == typeof g || a && g.event.triggered === a.type ? b : g.event.dispatch.apply(j.elem, arguments)
                    }, j.elem = a), c = g.trim(t(c)).split(" "), l = 0; l < c.length; l++) m = i.exec(c[l]) || [], n = m[1], o = (m[2] || "").split(".").sort(), u = g.event.special[n] || {}, n = (f ? u.delegateType : u.bindType) || n, u = g.event.special[n] || {}, p = g.extend({
                    type: n,
                    origType: m[1],
                    data: e,
                    handler: d,
                    guid: d.guid,
                    selector: f,
                    quick: s(f),
                    namespace: o.join(".")
                }, q), r = k[n], r || (r = k[n] = [], r.delegateCount = 0, u.setup && u.setup.call(a, e, o, j) !== !1 || (a.addEventListener ? a.addEventListener(n, j, !1) : a.attachEvent && a.attachEvent("on" + n, j))), u.add && (u.add.call(a, p), p.handler.guid || (p.handler.guid = d.guid)), f ? r.splice(r.delegateCount++, 0, p) : r.push(p), g.event.global[n] = !0;
                a = null
            }
        },
        global: {},
        remove: function(a, b, c, d, e) {
            var f, h, j, k, l, m, n, o, p, q, r, s, u = g.hasData(a) && g._data(a);
            if (u && (o = u.events)) {
                for (b = g.trim(t(b || "")).split(" "), f = 0; f < b.length; f++)
                    if (h = i.exec(b[f]) || [], j = k = h[1], l = h[2], j) {
                        for (p = g.event.special[j] || {}, j = (d ? p.delegateType : p.bindType) || j, r = o[j] || [], m = r.length, l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null, n = 0; n < r.length; n++) s = r[n], !e && k !== s.origType || c && c.guid !== s.guid || l && !l.test(s.namespace) || d && d !== s.selector && ("**" !== d || !s.selector) || (r.splice(n--, 1), s.selector && r.delegateCount--, p.remove && p.remove.call(a, s));
                        0 === r.length && m !== r.length && (p.teardown && p.teardown.call(a, l) !== !1 || g.removeEvent(a, j, u.handle), delete o[j])
                    } else
                        for (j in o) g.event.remove(a, j + b[f], c, d, !0);
                g.isEmptyObject(o) && (q = u.handle, q && (q.elem = null), g.removeData(a, ["events", "handle"], !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(c, d, e, f) {
            if (!e || 3 !== e.nodeType && 8 !== e.nodeType) {
                var h, i, j, l, m, n, o, p, q, r, s = c.type || c,
                    t = [];
                if (!k.test(s + g.event.triggered) && (s.indexOf("!") >= 0 && (s = s.slice(0, -1), i = !0), s.indexOf(".") >= 0 && (t = s.split("."), s = t.shift(), t.sort()), e && !g.event.customEvent[s] || g.event.global[s]))
                    if (c = "object" == typeof c ? c[g.expando] ? c : new g.Event(s, c) : new g.Event(s), c.type = s, c.isTrigger = !0, c.exclusive = i, c.namespace = t.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + t.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, n = s.indexOf(":") < 0 ? "on" + s : "", e) {
                        if (c.result = b, c.target || (c.target = e), d = null != d ? g.makeArray(d) : [], d.unshift(c), o = g.event.special[s] || {}, !o.trigger || o.trigger.apply(e, d) !== !1) {
                            if (q = [
                                    [e, o.bindType || s]
                                ], !f && !o.noBubble && !g.isWindow(e)) {
                                for (r = o.delegateType || s, l = k.test(r + s) ? e : e.parentNode, m = null; l; l = l.parentNode) q.push([l, r]), m = l;
                                m && m === e.ownerDocument && q.push([m.defaultView || m.parentWindow || a, r])
                            }
                            for (j = 0; j < q.length && !c.isPropagationStopped(); j++) l = q[j][0], c.type = q[j][1], p = (g._data(l, "events") || {})[c.type] && g._data(l, "handle"), p && p.apply(l, d), p = n && l[n], p && g.acceptData(l) && p.apply(l, d) === !1 && c.preventDefault();
                            return c.type = s, f || c.isDefaultPrevented() || o._default && o._default.apply(e.ownerDocument, d) !== !1 || "click" === s && g.nodeName(e, "a") || !g.acceptData(e) || n && e[s] && ("focus" !== s && "blur" !== s || 0 !== c.target.offsetWidth) && !g.isWindow(e) && (m = e[n], m && (e[n] = null), g.event.triggered = s, e[s](), g.event.triggered = b, m && (e[n] = m)), c.result
                        }
                    } else {
                        h = g.cache;
                        for (j in h) h[j].events && h[j].events[s] && g.event.trigger(c, d, h[j].handle.elem, !0)
                    }
            }
        },
        dispatch: function(c) {
            c = g.event.fix(c || a.event);
            var d, e, f, h, i, j, k, l, m, n, o = (g._data(this, "events") || {})[c.type] || [],
                p = o.delegateCount,
                q = [].slice.call(arguments, 0),
                r = !c.exclusive && !c.namespace,
                s = [];
            if (q[0] = c, c.delegateTarget = this, p && !c.target.disabled && (!c.button || "click" !== c.type))
                for (h = g(this), h.context = this.ownerDocument || this, f = c.target; f != this; f = f.parentNode || this) {
                    for (j = {}, l = [], h.targets[0] = f, d = 0; p > d; d++) m = o[d], n = m.selector, j[n] === b && (j[n] = m.quick ? w(f, m.quick) : h.is(n)), j[n] && l.push(m);
                    l.length && s.push({
                        elem: f,
                        matches: l
                    })
                }
            for (o.length > p && s.push({
                    elem: this,
                    matches: o.slice(p)
                }), d = 0; d < s.length && !c.isPropagationStopped(); d++)
                for (k = s[d], c.currentTarget = k.elem, e = 0; e < k.matches.length && !c.isImmediatePropagationStopped(); e++) m = k.matches[e], (r || !c.namespace && !m.namespace || c.namespace_re && c.namespace_re.test(m.namespace)) && (c.data = m.data, c.handleObj = m, i = ((g.event.special[m.origType] || {}).handle || m.handler).apply(k.elem, q), i !== b && (c.result = i, i === !1 && (c.preventDefault(), c.stopPropagation())));
            return c.result
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, c) {
                var d, e, f, g = c.button,
                    h = c.fromElement;
                return null == a.pageX && null != c.clientX && (d = a.target.ownerDocument || document, e = d.documentElement, f = d.body, a.pageX = c.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = c.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? c.toElement : h), a.which || g === b || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
            }
        },
        fix: function(a) {
            if (a[g.expando]) return a;
            var c, d, e = a,
                f = g.event.fixHooks[a.type] || {},
                h = f.props ? this.props.concat(f.props) : this.props;
            for (a = g.Event(e), c = h.length; c;) d = h[--c], a[d] = e[d];
            return a.target || (a.target = e.srcElement || document), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey === b && (a.metaKey = a.ctrlKey), f.filter ? f.filter(a, e) : a
        },
        special: {
            ready: {
                setup: g.bindReady
            },
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(a, b, c) {
                    g.isWindow(this) && (this.onbeforeunload = c)
                },
                teardown: function(a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = g.extend(new g.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? g.event.trigger(e, null, b) : g.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, g.event.handle = g.event.dispatch, g.removeEvent = document.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function(a, b, c) {
        a.detachEvent && a.detachEvent("on" + b, c)
    }, g.Event = function(a, b) {
        return this instanceof g.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? e : d) : this.type = a, b && g.extend(this, b), this.timeStamp = a && a.timeStamp || g.now(), void(this[g.expando] = !0)) : new g.Event(a, b)
    }, g.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = e;
            var a = this.originalEvent;
            a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = e;
            var a = this.originalEvent;
            a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = e, this.stopPropagation()
        },
        isDefaultPrevented: d,
        isPropagationStopped: d,
        isImmediatePropagationStopped: d
    }, g.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(a, b) {
        g.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                {
                    var c, d = this,
                        e = a.relatedTarget,
                        f = a.handleObj;
                    f.selector
                }
                return (!e || e !== d && !g.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), g.support = function() {
        {
            var b, c, d, e, f, h, i, j, k, l, m, n, o = document.createElement("div");
            document.documentElement
        }
        if (o.setAttribute("className", "t"), o.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", c = o.getElementsByTagName("*"), d = o.getElementsByTagName("a")[0], !c || !c.length || !d) return {};
        e = document.createElement("select"), f = e.appendChild(document.createElement("option")), h = o.getElementsByTagName("input")[0], b = {
            leadingWhitespace: 3 === o.firstChild.nodeType,
            tbody: !o.getElementsByTagName("tbody").length,
            htmlSerialize: !!o.getElementsByTagName("link").length,
            style: /top/.test(d.getAttribute("style")),
            hrefNormalized: "/a" === d.getAttribute("href"),
            opacity: /^0.55/.test(d.style.opacity),
            cssFloat: !!d.style.cssFloat,
            checkOn: "on" === h.value,
            optSelected: f.selected,
            getSetAttribute: "t" !== o.className,
            enctype: !!document.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== document.createElement("nav").cloneNode(!0).outerHTML,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0
        }, h.checked = !0, b.noCloneChecked = h.cloneNode(!0).checked, e.disabled = !0, b.optDisabled = !f.disabled;
        try {
            delete o.test
        } catch (p) {
            b.deleteExpando = !1
        }
        if (!o.addEventListener && o.attachEvent && o.fireEvent && (o.attachEvent("onclick", function() {
                b.noCloneEvent = !1
            }), o.cloneNode(!0).fireEvent("onclick")), h = document.createElement("input"), h.value = "t", h.setAttribute("type", "radio"), b.radioValue = "t" === h.value, h.setAttribute("checked", "checked"), o.appendChild(h), j = document.createDocumentFragment(), j.appendChild(o.lastChild), b.checkClone = j.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = h.checked, j.removeChild(h), j.appendChild(o), o.innerHTML = "", a.getComputedStyle && (i = document.createElement("div"), i.style.width = "0", i.style.marginRight = "0", o.style.width = "2px", o.appendChild(i), b.reliableMarginRight = 0 === (parseInt((a.getComputedStyle(i, null) || {
                marginRight: 0
            }).marginRight, 10) || 0)), o.attachEvent)
            for (m in {
                    submit: 1,
                    change: 1,
                    focusin: 1
                }) l = "on" + m, n = l in o, n || (o.setAttribute(l, "return;"), n = "function" == typeof o[l]), b[m + "Bubbles"] = n;
        return j.removeChild(o), j = e = f = i = o = h = null, g(function() {
            var a, c, d, e, f, h, i, j, l, m, p = document.getElementsByTagName("body")[0];
            p && (h = 1, i = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;", j = "visibility:hidden;border:0;", l = "style='" + i + "border:5px solid #000;padding:0;'", m = "<div " + l + "><div></div></div><table " + l + " cellpadding='0' cellspacing='0'><tr><td></td></tr></table>", a = document.createElement("div"), a.style.cssText = j + "width:0;height:0;position:static;top:0;margin-top:" + h + "px", p.insertBefore(a, p.firstChild), o = document.createElement("div"), a.appendChild(o), o.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>", k = o.getElementsByTagName("td"), n = 0 === k[0].offsetHeight, k[0].style.display = "", k[1].style.display = "none", b.reliableHiddenOffsets = n && 0 === k[0].offsetHeight, o.innerHTML = "", o.style.width = o.style.paddingLeft = "1px", g.boxModel = b.boxModel = 2 === o.offsetWidth, "undefined" != typeof o.style.zoom && (o.style.display = "inline", o.style.zoom = 1, b.inlineBlockNeedsLayout = 2 === o.offsetWidth, o.style.display = "", o.innerHTML = "<div style='width:4px;'></div>", b.shrinkWrapBlocks = 2 !== o.offsetWidth), o.style.cssText = i + j, o.innerHTML = m, c = o.firstChild, d = c.firstChild, e = c.nextSibling.firstChild.firstChild, f = {
                doesNotAddBorder: 5 !== d.offsetTop,
                doesAddBorderForTableAndCells: 5 === e.offsetTop
            }, d.style.position = "fixed", d.style.top = "20px", f.fixedPosition = 20 === d.offsetTop || 15 === d.offsetTop, d.style.position = d.style.top = "", c.style.overflow = "hidden", c.style.position = "relative", f.subtractsBorderForOverflowNotVisible = -5 === d.offsetTop, f.doesNotIncludeMarginInBodyOffset = p.offsetTop !== h, p.removeChild(a), o = a = null, g.extend(b, f))
        }), b
    }(), g.support.submitBubbles || (g.event.special.submit = {
        setup: function() {
            return g.nodeName(this, "form") ? !1 : void g.event.add(this, "click._submit keypress._submit", function(a) {
                var c = a.target,
                    d = g.nodeName(c, "input") || g.nodeName(c, "button") ? c.form : b;
                d && !d._submit_attached && (g.event.add(d, "submit._submit", function(a) {
                    this.parentNode && !a.isTrigger && g.event.simulate("submit", this.parentNode, a, !0)
                }), d._submit_attached = !0)
            })
        },
        teardown: function() {
            return g.nodeName(this, "form") ? !1 : void g.event.remove(this, "._submit")
        }
    }), g.support.changeBubbles || (g.event.special.change = {
        setup: function() {
            return h.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (g.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), g.event.add(this, "click._change", function(a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1, g.event.simulate("change", this, a, !0))
            })), !1) : void g.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                h.test(b.nodeName) && !b._change_attached && (g.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || g.event.simulate("change", this.parentNode, a, !0)
                }), b._change_attached = !0)
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return g.event.remove(this, "._change"), h.test(this.nodeName)
        }
    }), g.support.focusinBubbles || g.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = 0,
            d = function(a) {
                g.event.simulate(b, a.target, g.event.fix(a), !0)
            };
        g.event.special[b] = {
            setup: function() {
                0 === c++ && document.addEventListener(a, d, !0)
            },
            teardown: function() {
                0 === --c && document.removeEventListener(a, d, !0)
            }
        }
    }), g.extend({
        getScript: function(a, c) {
            return g.get(a, b, c, "script")
        },
        getJSON: function(a, b, c) {
            return g.get(a, b, c, "json")
        }
    }), g.each(["get", "post"], function(a, c) {
        g[c] = function(a, d, e, f, h) {
            return g.isFunction(d) && (f = f || e, e = d, d = b), g.ajax({
                type: c,
                url: a,
                data: d,
                showLoading: h === b ? f && 0 == f.showLoading ? !1 : !0 : h.showLoading,
                success: e,
                contentType: "text",
                dataType: "string" == typeof f ? f : "text"
            })
        }
    }), g.contains = document.documentElement.contains ? function(a, b) {
        return a !== b && (a.contains ? a.contains(b) : !0)
    } : document.documentElement.compareDocumentPosition ? function(a, b) {
        return a && a.compareDocumentPosition ? !!(16 & a.compareDocumentPosition(b)) : !1
    } : function() {
        return !1
    }, a.$ = g
}(window, void 0);