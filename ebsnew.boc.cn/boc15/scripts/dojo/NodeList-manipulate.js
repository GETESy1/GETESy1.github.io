/*! BUILD: 2014-04-24 */
"undefined" == typeof define && (define = function(a, b, c) {
    function d(b) {
        if ("." === b.charAt(0)) {
            for (b = a.substring(0, a.lastIndexOf("/") + 1) + b; c !== b;);
            var c = b,
                b = b.replace(/\/[^\/]*\/\.\.\//, "/");
            b = b.replace(/\/\.\//g, "/")
        }
        return b.replace(/\//g, ".")
    }
    c || (b ? (c = b, b = a) : (c = a, b = "function" == typeof c ? ["require", "exports", "module"].slice(0, c.length) : []), a = currentModule ? currentModule.replace(/\./g, "/") : "anon");
    var e = a.replace(/\//g, "."),
        f = dojo.provide(e);
    if ("function" == typeof c) {
        for (var g, h = [], i = 0; i < b.length; i++) {
            g = d(b[i]);
            var j = g.indexOf("!");
            if (j > -1) "i18n" == g.substring(0, j) && (g = g.match(/^i18n\!(.+)\.nls\.([^\.]+)$/), dojo.requireLocalization(g[1], g[2])), g = null;
            else switch (g) {
                case "require":
                    g = function(a) {
                        return dojo.require(d(a))
                    };
                    break;
                case "exports":
                    g = f;
                    break;
                case "module":
                    var k = g = {
                        exports: f
                    };
                    break;
                case "dojox":
                    g = dojo.getObject(g);
                    break;
                case "dojo/lib/kernel":
                case "dojo/lib/backCompat":
                    g = dojo;
                    break;
                default:
                    g = dojo.require(g)
            }
            h.push(g)
        }
        b = c.apply(null, h)
    } else b = c;
    return b && (dojo._loadedModules[e] = b, dojo.setObject(e, b)), k && (dojo._loadedModules[e] = k.exports), b
}, define.vendor = "dojotoolkit.org", define.version = dojo.version, define("dojo/lib/kernel", [], dojo), define("dojo/lib/backCompat", [], dojo), define("dojo", [], dojo), define("dijit", [], this.dijit || (this.dijit = {}))), define("dojo/NodeList-manipulate", ["dojo"], function(a) {
    return function() {
        function b(a) {
            for (var c, d = "", e = a.childNodes, f = 0; c = e[f]; f++) 8 != c.nodeType && (d += 1 == c.nodeType ? b(c) : c.nodeValue);
            return d
        }

        function c(a) {
            for (; a.childNodes[0] && 1 == a.childNodes[0].nodeType;) a = a.childNodes[0];
            return a
        }

        function d(b, c) {
            return "string" == typeof b ? (b = a._toDom(b, c && c.ownerDocument), 11 == b.nodeType && (b = b.childNodes[0])) : 1 == b.nodeType && b.parentNode && (b = b.cloneNode(!1)), b
        }
        a.extend(a.NodeList, {
            _placeMultiple: function(b, c) {
                for (var d = "string" == typeof b || b.nodeType ? a.query(b) : b, e = [], f = 0; f < d.length; f++)
                    for (var g, h = d[f], i = this.length, j = i - 1; g = this[j]; j--) f > 0 && (g = this._cloneNode(g), e.unshift(g)), j == i - 1 ? a.place(g, h, c) : h.parentNode.insertBefore(g, h), h = g;
                return e.length && (e.unshift(0), e.unshift(this.length - 1), Array.prototype.splice.apply(this, e)), this
            },
            innerHTML: function(a) {
                return arguments.length ? this.addContent(a, "only") : this[0].innerHTML
            },
            text: function(c) {
                if (arguments.length) {
                    for (var d, e = 0; d = this[e]; e++) 1 == d.nodeType && (a.empty(d), d.appendChild(d.ownerDocument.createTextNode(c)));
                    return this
                }
                var f = "";
                for (e = 0; d = this[e]; e++) f += b(d);
                return f
            },
            val: function(b) {
                if (arguments.length) {
                    for (var c, d = a.isArray(b), e = 0; c = this[e]; e++) {
                        var f = c.nodeName.toUpperCase(),
                            g = c.type,
                            h = d ? b[e] : b;
                        if ("SELECT" == f)
                            for (var i = c.options, j = 0; j < i.length; j++) {
                                var k = i[j];
                                k.selected = c.multiple ? -1 != a.indexOf(b, k.value) : k.value == h
                            } else "checkbox" == g || "radio" == g ? c.checked = c.value == h : c.value = h
                    }
                    return this
                }
                if (c = this[0], !c || 1 != c.nodeType) return void 0;
                if (b = c.value || "", "SELECT" == c.nodeName.toUpperCase() && c.multiple) {
                    for (b = [], i = c.options, j = 0; j < i.length; j++) k = i[j], k.selected && b.push(k.value);
                    b.length || (b = null)
                }
                return b
            },
            append: function(a) {
                return this.addContent(a, "last")
            },
            appendTo: function(a) {
                return this._placeMultiple(a, "last")
            },
            prepend: function(a) {
                return this.addContent(a, "first")
            },
            prependTo: function(a) {
                return this._placeMultiple(a, "first")
            },
            after: function(a) {
                return this.addContent(a, "after")
            },
            insertAfter: function(a) {
                return this._placeMultiple(a, "after")
            },
            before: function(a) {
                return this.addContent(a, "before")
            },
            insertBefore: function(a) {
                return this._placeMultiple(a, "before")
            },
            remove: a.NodeList.prototype.orphan,
            wrap: function(a) {
                if (this[0]) {
                    a = d(a, this[0]);
                    for (var b, e = 0; b = this[e]; e++) {
                        var f = this._cloneNode(a);
                        b.parentNode && b.parentNode.replaceChild(f, b);
                        var g = c(f);
                        g.appendChild(b)
                    }
                }
                return this
            },
            wrapAll: function(a) {
                if (this[0]) {
                    a = d(a, this[0]), this[0].parentNode.replaceChild(a, this[0]);
                    for (var b, e = c(a), f = 0; b = this[f]; f++) e.appendChild(b)
                }
                return this
            },
            wrapInner: function(b) {
                if (this[0]) {
                    b = d(b, this[0]);
                    for (var c = 0; c < this.length; c++) {
                        var e = this._cloneNode(b);
                        this._wrap(a._toArray(this[c].childNodes), null, this._NodeListCtor).wrapAll(e)
                    }
                }
                return this
            },
            replaceWith: function(a) {
                a = this._normalize(a, this[0]);
                for (var b, c = 0; b = this[c]; c++) this._place(a, b, "before", c > 0), b.parentNode.removeChild(b);
                return this
            },
            replaceAll: function(b) {
                for (var c, d = a.query(b), e = this._normalize(this, this[0]), f = 0; c = d[f]; f++) this._place(e, c, "before", f > 0), c.parentNode.removeChild(c);
                return this
            },
            clone: function() {
                for (var a = [], b = 0; b < this.length; b++) a.push(this._cloneNode(this[b]));
                return this._wrap(a, this, this._NodeListCtor)
            }
        }), a.NodeList.prototype.html || (a.NodeList.prototype.html = a.NodeList.prototype.innerHTML)
    }(), a.NodeList
}), dojo.require("dojo.NodeList-manipulate");