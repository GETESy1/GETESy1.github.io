/*! BUILD: 2021-07-30 */
StringUtil = {
    sbc2dbc: function(a) {
        for (var b = "", c = 0; c < a.length; c++) {
            var d = a.charCodeAt(c);
            b += String.fromCharCode(12288 != d ? d > 65280 && 65375 > d ? d - 65248 : d : d - 12256)
        }
        return b
    },
    clearLeft0: function(a) {
        return a ? a.replace(/^0+/g, "") : ""
    },
    maskMobile: function(a) {
        return a ? a.substr(0, 3) + "****" + a.substr(7, 4) : a
    },
    maskEmail: function(a) {
        if (-1 == a.indexOf("@")) return a;
        var b = a.split("@");
        return (b[0].length > 3 ? b[0].substr(0, 3) : "") + "***@" + b[1]
    },
    maskAccount: function(a) {
        return a ? (a += "", a.length < 9 ? a : a.substr(0, 4) + "******" + a.substr(a.length - 4, 4)) : ""
    },
    maskIdentity: function(a) {
        if (a) {
            var b = a.length,
                c = "",
                d = 0;
            if (b > 2) {
                for (d = 0; b - 2 > d; d++) c += "*";
                a = a.substring(0, 1) + c + a.substring(b - 1)
            }
        } else a = "";
        return a
    },
    substring: function(a, b, c) {
        if ("string" != typeof a) return "";
        var d = a.split(""),
            e = 0;
        result = "";
        for (var f = b; f < a.length && (result += d[f], e += d[f].len(), !(e >= c)); f++);
        return result
    },
    lastFourDigits: function(a) {
        return a ? (a += "", a.length < 4 ? a : a.substr(a.length - 4, 4)) : ""
    },
    fixedPrecisionLoss: function(a, b) {
        var c = 0,
            d = 0,
            e = Math.pow(10, b);
        for (d = 0; d < a.length; d++) c += e * a[d];
        return c /= e
    },
    scientificNotationToString: function(a) {
        var b = String(a),
            c = /\d+e/.test(b);
        if (!c) return a;
        var d = !0;
        /e-/.test(b) && (d = !1);
        var e = Number(b.match(/\d+$/)[0]),
            f = b.match(/^[\d\.]+/)[0].replace(/\./, "");
        if (d) {
            for (var g = f.length; e + 1 - g;) f += "0", e--;
            return f
        }
        for (; e;) f = "0" + f, e--;
        return f.replace(/^0/, "0.")
    },
    toInteger: function(a) {
        for (var b = this.scientificNotationToString(a) + "", c = /\./.exec(b), d = c && c.index ? b.length - c.index - 1 : 0, e = +b.replace(".", ""); 0 !== e && e / 10 % 1 === 0;) e /= 10, d--;
        return [e, d]
    },
    toDecimal: function(a) {
        for (var b = a[0] + "", c = b.length - a[1]; 1 > c;) b = b.replace(/^(-?)(\d*)$/, "$10$2"), c++;
        for (; c > b.length;) b += "0";
        var d = b.substr(0, c);
        return +(d + "." + b.substr(c))
    },
    calc: function(a, b, c) {
        var d = [],
            e = this.toInteger(a),
            f = this.toInteger(b);
        switch (c) {
            case "*":
                d[0] = e[0] * f[0], d[1] = e[1] + f[1];
                break;
            case "+":
                e[1] > f[1] ? (f[0] = f[0] * Math.pow(10, e[1] - f[1]), f[1] = e[1]) : (e[0] = e[0] * Math.pow(10, f[1] - e[1]), e[1] = f[1]), d[0] = e[0] + f[0], d[1] = e[1];
                break;
            case "-":
                return this.calc(a, -b, "+");
            case "/":
                var g = e[0] / f[0],
                    h = this.toInteger(g);
                d[0] = h[0], d[1] = h[1] + e[1] - f[1]
        }
        return this.toDecimal(d)
    },
    calcAll: function(a, b) {
        for (var c = a[0], d = 1; d < a.length; d++) c = this.calc(c, a[d], b);
        return c
    },
    getAge: function(a, b) {
        if (a && (a = (a + "").replace(/-/g, "").replace(/\//g, "")), b && (b = (b + "").replace(/-/g, "").replace(/\//g, "")), a && 8 == a.length && b && 8 == b.length) {
            var c, d = !1,
                e = parseInt(a.substring(0, 4)),
                f = parseInt(a.substring(4, 6)),
                g = parseInt(a.substring(6, 8)),
                h = parseInt(b.substring(0, 4)),
                i = parseInt(b.substring(4, 6)),
                j = parseInt(b.substring(6, 8));
            i - f > 0 ? d = !0 : i == f && j >= g && (d = !0), c = d ? h - e : h - e - 1
        } else c = 0;
        return c
    },
    getStrBytes: function(a) {
        if ("" != a && null != a && "undefined" != typeof a) {
            for (var b = 0, c = 0; c < a.length; c++) {
                var d = a.charCodeAt(c);
                d >= 1 && 126 >= d || d >= 65376 && 65439 >= d ? b++ : b += 2
            }
            var e = b / 1024;
            return e.formatNum("001", !0, !0)
        }
        return 0
    },
    subStrRe: function(a, b, c) {
        if (a) {
            a += "";
            var d = a.substring(0, b);
            return c && (d += c), d
        }
        return ""
    },
    _cipherKey: "AzNDI2"
};