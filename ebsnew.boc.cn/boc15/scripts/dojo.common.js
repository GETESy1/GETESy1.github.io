/*! VERSION: 307_20131112, DATE: 2013-11-12 */
var d = document,
    w = window,
    ST = setTimeout,
    SI = setInterval;
w.errorMsg = null;
var recurrenceFlag = !1,
    exceptionLog = function(a) {
        return recurrenceFlag ? (recurrenceFlag = !1, void 0) : (recurrenceFlag = !0, $.ajaxPostText("/Ajax/log/Controller.aspx/LogExceptonMessage", a), void 0)
    };
$.extend({
    AjaxTimeout: 3e3,
    UNDF: "undefined",
    dmxMsgType: {
        Alert: 0,
        FloatWindow: 1,
        TextElement: 2
    },
    loadingShow: function(a) {
        a = a || $("#loading"), a && ($.browser.msie && "6.0" == $.browser.version && !$.support.style && $('<iframe class="floatIframe"></iframe>').appendTo(a), a.css({
            top: ((window.screen.availHeight || window.screen.height || 640) - a.height()) / 2 - 90 + (document.documentElement.scrollTop || 0) + "px",
            left: ((window.screen.availWidth || window.screen.width || 1366) - a.width()) / 2 + 80 + (document.documentElement.scrollLeft || 0) + "px"
        }).show())
    },
    loadingHide: function(a) {
        (a || $("#loading")).hide()
    },
    ajaxGetJson: function(a, b, c, d, e) {
        $.ajax({
            url: a,
            data: b,
            type: "get",
            async: 0 == (d | !1) ? !1 : !0,
            beforeSend: function() {
                $.loadingShow(e)
            },
            complete: function() {
                $.loadingHide(e)
            },
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: function(a) {
                $.ajaxSuccess(a, c)
            },
            error: function(a, b, c) {
                exceptionLog("Ajax get error : " + a + "---" + b + "---" + c)
            }
        })
    },
    ajaxPostJson: function(a, b, c, d, e) {
        $.ajax({
            url: a,
            data: b,
            type: "post",
            async: 0 == (d | !1) ? !1 : !0,
            beforeSend: function() {
                $.loadingShow(e)
            },
            complete: function() {
                $.loadingHide(e)
            },
            dataType: "json",
            contentType: "application/json;charset=utf-8",
            success: function(a) {
                $.ajaxSuccess(a, c)
            },
            error: function(a, b, c) {
                exceptionLog("Ajax post error : " + a + "---" + b + "---" + c)
            }
        })
    },
    ajaxSuccess: function(a, b) {
        a.Error ? (w.errorMsg = a.Error, $.handleError()) : void 0 != b && b(a)
    },
    ajaxPostText: function(a, b, c, d) {
        $.ajax({
            url: a,
            data: b,
            type: "post",
            dataType: "text",
            beforeSend: function() {
                $.loadingShow(d)
            },
            complete: function() {
                $.loadingHide(d)
            },
            contentType: "text;charset=utf-8",
            success: function(a) {
                $.ajaxSuccess(a, c)
            },
            error: function(a, b, c) {
                exceptionLog("Ajax post error : " + a + "---" + b + "---" + c)
            }
        })
    },
    string2xml: function(a) {
        var b, c = navigator.appName;
        return "Microsoft Internet Explorer" == c ? (b = new ActiveXObject("Microsoft.XMLDOM"), b.async = "false", b.loadXML(a)) : b = (new DOMParser).parseFromString(a, "text/xml"), b
    },
    dateDiff: function(a, b, c) {
        var d = {
            D: 864e5,
            H: 36e5,
            M: 6e4,
            S: 1e3,
            T: 1
        };
        a = a.toUpperCase();
        try {
            return Math.abs((c - b) / d[a])
        } catch (e) {
            return 999999
        }
    },
    getCookie: function(a) {
        var b = document.cookie,
            c = a + "=";
        return b && b.indexOf(c) > -1 ? unescape(b.substring(b.indexOf(c) + c.length).split(";")[0]) : null
    },
    removeCookie: function(a) {
        var b = new Date;
        document.cookie = a + "=;expires=" + b.setFullYear(b.getFullYear - 1) + ";"
    },
    setCookie: function(a, b) {
        document.cookie = a + "=" + escape(b)
    },
    showMsg: function(a) {
        var b = this.dmxMsgType;
        switch (a.msgType) {
            case b.Alert:
            case b.FloatWindow:
            case b.TextElement:
            default:
                alert(a.msgText)
        }
        a.redirectUrl && (window.location.href = a.redirectUrl), a.focusElement && a.focusElement.length && a.focusElement.focus()
    },
    showError: function(a, b) {
        $.extend(this.errorMap, b), this.errorList = [];
        for (var c in b) this.errorList.push({
            message: b[c],
            element: this.findByName(c)[0]
        });
        this.successList = $.grep(this.successList, function(a) {
            return !(a.name in b)
        });
        var d = "";
        $.each(b, function(a, b) {
            d += b.message + "\n"
        }), d && $.showMsg({
            msgType: $.dmxMsgType.Alert,
            msgText: d,
            focusElement: $(b[0].element)
        })
    },
    handleError: function() {}
});