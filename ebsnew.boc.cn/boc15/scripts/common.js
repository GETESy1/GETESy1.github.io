/*! BUILD: 2023-08-05 */
function ModelSap() {
    this.attributes = {
        method: null,
        params: null,
        header: null,
        isIdea: !1,
        aes: {}
    }, 1 === arguments.length && "object" == typeof arguments[0] ? $.extend(this.attributes, arguments[0]) : ("string" == typeof arguments[0] && (this.attributes.method = arguments[0]), "object" == typeof arguments[1] && (this.attributes.params = arguments[1]), "object" == typeof arguments[2] && (this.attributes.header = arguments[2]), "boolean" == typeof arguments[3] && (this.attributes.isIdea = arguments[3]), "object" == typeof arguments[4] && (this.attributes.aes = arguments[4]))
}

function Model() {
    this.attributes = {
        id: null,
        method: null,
        conversationId: null,
        params: null
    }, 1 === arguments.length && "object" == typeof arguments[0] ? $.extend(this.attributes, arguments[0]) : ("string" == typeof arguments[0] && (this.attributes.method = arguments[0]), "object" == typeof arguments[1] && (this.attributes.params = arguments[1]), "string" == typeof arguments[1] && (this.attributes.conversationId = arguments[1]), "string" == typeof arguments[2] && (this.attributes.conversationId = arguments[2]));
    var a = ["LoginPre", "PsnFindPassword", "PsnSVRLimitSetting", "PasswordModSelectResult", "PsnTransBocTransferSubmit", "PsnTransNationalTransferSubmit", "PsnEbpsRealTimePaymentTransfer", "PsnTransInternationalTransferSubmit", "PsnLoanSelfEApplySubmit", "PsnTransActPaymentSubmit", "PsnTransActCollectionSubmit", "PsnLoanCFSelfEApplySubmit"];
    for (i in a) a[i] == this.attributes.method && $.extend(this.attributes.params, {
        devicePrintTokenId: window.tencentDevicePrintToken ? window.tencentDevicePrintToken : "",
        deviceLocateInfo: ""
    })
}

function openWin(a, b) {
    var c = (parseFloat(navigator.appVersion.split("MSIE ")[1]) || void 0, window.open(a, b || "win_" + Common.getIdentityId(), "toolbar=no, menubar=no,scrollbars=yes,resizable=yes, location=no, status=no"));
    try {
        c.focus(), c.moveTo(0, 0), c.resizeTo(screen.width, screen.height - 30)
    } catch (d) {}
}

function keepSessionActive() {
    var a = Common.postRequest(new Model("PsnCommonQueryOprLoginInfo", {
        fieldList: ["NONE"]
    }), {
        showLoading: !1
    });
    return {
        then: function(b, c) {
            a.then(function(a) {
                void 0 !== a.response[0].status && "01" == a.response[0].status ? b() : (c(), CU.ajaxDataHandle(a))
            })
        }
    }
}

function isCipherTypeFlag(a) {
    var b = parseInt(a.params.activ ? a.params.activ : Common.secVersion, 10);
    Common.cipherTypeFlag = null, b && ($.browser.msie || $.browser.mozilla && 5 == $.browser.version ? b > 2e8 && (Common.cipherTypeFlag = "0") : b > 2e8 && (Common.cipherTypeFlag = "0"))
}
var isArray = function(a) {
        return "[object Array]" === Object.prototype.toString.call(a)
    },
    contextPath = "",
    ajaxSuccessStatusCode = "01",
    dataHeaderCipherType = {},
    devAndpfInfo = "",
    Common = {};
Common.triggerSubMenuAuto = !0, Common.controllers = {}, Common.context = {}, Common.context.modules = {}, Common.menu = {}, Common.basePath = "", biztype = "individual", Common.params = {}, window.VERSION = "20230805134529104";
var stopBubble = function(a) {
        a && a.stopPropagation ? a.stopPropagation() : window.event.cancelBubble = !0
    },
    Class = {
        create: function() {
            return function() {
                this.initialize.apply(this, arguments)
            }
        }
    };
Common.imgFn = {
    imgOnLoad: function(a) {
        a && a()
    },
    imgError: function(a) {
        a && a()
    }
};
var localParam = {
        C: "zh_CN",
        E: "en_US"
    },
    urlPrefix = "/BII/",
    dataPostURL = urlPrefix + "PsnGetUserProfile.do",
    validationURL = urlPrefix + "ImageValidation/validation",
    sapUrlPrefix = "/SAP/";
Common.UUID = function(a) {
    for (var b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", c = b.length, d = "", e = 0; a > e; e++) d += b.charAt(Math.floor(Math.random() * c));
    return d
}, Common.publicKeys = {
    SAP: "041789313A2A7FC41D9AEF3063B1B53DDB0EEC46A724F680F6848A9D29A6383EE069DE7137031CD924DF365150E4E00269BEFF6A04EAF94B9ACCE5690F1F7C3402"
}, Common.sapRequest = function() {
    var a = "",
        b = "",
        c = "",
        d = "",
        e = "",
        f = "",
        g = "",
        h = !1,
        j = "",
        k = "",
        l = "",
        m = {
            userid: "",
            acton: "",
            chnflg: "2",
            trandt: "",
            trantm: "",
            uuid: Common.UUID(32),
            transseqno: "",
            version: "",
            routeType: "",
            routeCode: "",
            tranCode: "",
            product: "BOCNETC-D-WPSN",
            platform: "BOCNETC-D-WPSN",
            appVersion: "",
            deviceNo: "",
            language: "zh_CN",
            cifNumber: "",
            custNo: "",
            name: "",
            certType: "",
            certNo: "",
            userLevel: "",
            conversationID: "",
            keyversion: "",
            clentid: ""
        };
    if (0 === arguments.length) throw Error("Common.sapRequest: 需要参数");
    if (!(arguments[0] instanceof ModelSap)) throw Error("Common.sapRequest: 需要参数");
    for (f = 0, i = 0, len = arguments.length; len > i; i++)
        if (arguments[i] instanceof ModelSap) {
            if (a = arguments[i].attributes.params, b = arguments[i].attributes.method, g = arguments[i].attributes.header, h = arguments[i].attributes.isIdea) {
                var n = arguments[i].attributes.aes;
                j = n.iv, k = n.aesMode, l = n.padding
            }
        } else {
            switch (f) {
                case 0:
                    c = arguments[i];
                    break;
                case 1:
                    d = arguments[i];
                    break;
                case 2:
                    e = arguments[i]
            }
            f++
        }
    var o = sapUrlPrefix + b,
        p = "",
        q = "",
        r = "",
        s = $.extend(m, {
            clentid: CU.getUrl("SAP.clentid"),
            language: localParam[lan] || "zh_CN"
        });
    if (g && (s = $.extend(s, g)), h) {
        var t = crtptoUtil.pubilicEncry.encryptModel(JSON.stringify(a));
        p = t.skey, q = t.sm4Key, r = t.hmacKey, s = $.extend(s, {
            gmversion: "1.1"
        }), a = {
            body: t.body,
            skey: t.skey,
            hmac: t.hmac
        }
    }
    $.ajax2({
        url: o,
        type: "post",
        showLoading: !1,
        dataType: "json",
        headers: s,
        data: JSON.stringify(a),
        contentType: "application/json;charset=UTF-8",
        error: function() {
            Common.LightBox.hide(), Common.LightBox.showMessage(Common.Error.getMsgByCode("ajaxError"))
        }
    }).then(function(a) {
        if (a && a.hasOwnProperty("body")) {
            if (h && p) {
                var b = crtptoUtil.pubilicEncry.decryptModel(a),
                    f = decodeURIComponent(b, q, r);
                a = f
            }
            c && c(a), e && e(a)
        } else a && (a.hasOwnProperty("msgcde") || a.hasOwnProperty("rtnmsg")) ? (d && d(a), e && e(a)) : (Common.LightBox.showMessage(CU.getDictNameByKey("l101837")), Common.LightBox.hide())
    })
}, Common.getCommPostParam = function(a, b) {
    return {
        header: $.extend({
            local: b || ("C" == lan ? "zh_CN" : "en_US"),
            agent: "WEB15",
            "bfw-ctrl": "json",
            version: "",
            device: "",
            platform: "",
            plugins: "",
            page: "",
            ext: ""
        }, Common.getDeviceAndSecInfo(), dataHeaderCipherType),
        request: a || null
    }
};
var getIdentityId = function() {
        function a() {
            return ++b
        }
        var b = 0;
        return a
    },
    DetachSigner = Class.create();
DetachSigner.prototype = {
    initialize: function(a, b, c, d) {
        this.util = new com.ibm.boc.util, this.el = a;
        var e = this.dataHandle(b),
            f = {
                data: e.data,
                appendTo: a,
                defValue: e.def.val,
                defText: e.def.text,
                callback: function(a) {
                    d && d(a)
                }
            };
        return this.conversationId = c, this.itSelect = new ITSelect(f), this
    },
    clear: function() {
        this.smsControl && this.smsControl.clear && this.smsControl.clear(), this.otpController && this.otpController.clear && this.otpController.clear("dynamic_password")
    },
    _initSmsController: function(a) {
        this.smsControl = new com.ibm.boc.security.MobileCheckNum({
            container: this.controlsDomNode,
            smcTrigerInterval: a,
            conversationid: this.conversationId
        })
    },
    removeControl: function() {
        this.controlsDomNode && $(this.controlsDomNode).remove()
    },
    _initOtpController: function() {
        this.otpController = new com.ibm.boc.security.PassWordController(this.main);
        var a = dojo.create("div", {
                "class": "para clear"
            }, this.controlsDomNode),
            b = (dojo.create("span", {
                "class": "lt dynamictitle",
                innerHTML: this.util.nls.dynamicpasswordlabel
            }, a), dojo.create("span", {
                "class": "rt"
            }, a));
        this.otpControl = this.otpController.createControl(b, null, "dynamic_password", 2, "zh_CN", this.conversationId)
    },
    build: function(a) {
        dojo.require("com.ibm.boc.attest.attest"), this.main = "undefined" != typeof attest ? attest : new com.ibm.boc.attest, this.detachSigner = new com.ibm.boc.security.DetachSigner, this.factorList = a.factorList, this.controlsDomNode = dojo.create("span", {
            "class": "contentBox securityControllerDomNode"
        }, a.container || dojo.create("span")), this.conversationId = a.conversationId || this.conversationId || "", dojo.forEach(this.factorList, dojo.hitch(this, function(b) {
            switch (b.field.name) {
                case "Smc":
                    this._initSmsController(a.smcTrigerInterval);
                    break;
                case "Otp":
                    this._initOtpController(this.conversationId);
                    break;
                case "_signedData":
                    this.certDN = a.certDN, this.plainData = a.plainData, dojo.create("div", {
                        "class": "para importantInfo",
                        innerHTML: this.util.nls.canotifyMsg
                    }, this.controlsDomNode)
            }
        }))
    },
    dataHandle: function(a) {
        for (var b = {
                data: [],
                def: {
                    text: Regional.l0002[lan],
                    val: ""
                }
            }, c = 0, d = a._combinList.length; d > c; c++) b.data.push({
            key: a._combinList[c].id,
            val: a._combinList[c].name
        });
        return null != a._defaultCombin && (b._defaultCombin = {
            text: a._combinList[0].name,
            val: a._combinList[0].id
        }), b
    },
    doCA: function(a, b, c) {
        return this.main.detachSigner.doDetachSign(a, b, c)
    },
    val: function() {
        for (var a = {
                Smc: "",
                Otp: "",
                _signedData: ""
            }, b = 0; b < this.factorList.length; b++) {
            var c = this.factorList[b];
            switch (c.field.name) {
                case "Smc":
                    var d = {
                        Smc: this.smsControl.getValue(),
                        Smc_RC: this.smsControl.getRSValue()
                    };
                    dojo.mixin(a, d), dojo.mixin(a, this.smsControl.getfixedParams());
                    break;
                case "Otp":
                    var e = {
                        Otp: this.otpController.passobj.dynamic_password.value,
                        Otp_RC: this.otpController.getRcParam("dynamic_password")
                    };
                    dojo.mixin(a, e), dojo.mixin(a, this.otpController.getfixedParams());
                    break;
                case "_signedData":
                    var f = {
                        _signedData: this.caPlainResult.result
                    };
                    dojo.mixin(a, f)
            }
        }
        return a
    },
    isValidate: function() {
        dojo.forEach(this.factorList, dojo.hitch(this, function(a) {
            "_signedData" == a.field.name && (this.caPlainResult = this.doCA(this.certDN, "", this.plainData))
        }));
        for (var a = 0; a < this.factorList.length; a++) {
            var b = this.factorList[a];
            switch (b.field.name) {
                case "Smc":
                    if (!this.smsControl.validate()) return !1;
                    break;
                case "Otp":
                    if (!this.otpController.passwordValidation("dynamic_password")) return !1;
                    break;
                case "_signedData":
                    if (!this.caPlainResult || !this.caPlainResult.result) {
                        {
                            (this.caPlainResult.error && this.caPlainResult.error.message || this.util.nls.FailedSignedtitle) + this.util.nls.plsbacktoredocaorselectotherfactor
                        }
                        return !1
                    }
            }
        }
        return !0
    }
}, Common.getIdentityId = getIdentityId(), Common.getDeviceAndSecInfo = function() {
    function a() {
        var a = {},
            b = "-",
            c = window.navigator,
            d = c.appVersion,
            e = c.userAgent,
            f = c.appName,
            g = "" + parseFloat(c.appVersion),
            h = parseInt(c.appVersion, 10),
            i = null,
            j = null,
            k = null,
            l = b,
            m = "",
            n = "",
            o = [{
                s: "Windows 10",
                r: /(Windows 10.0|Windows NT 10.0)/
            }, {
                s: "Windows 8.1",
                r: /(Windows 8.1|Windows NT 6.3)/
            }, {
                s: "Windows 8",
                r: /(Windows 8|Windows NT 6.2)/
            }, {
                s: "Windows 7",
                r: /(Windows 7|Windows NT 6.1)/
            }, {
                s: "Windows Vista",
                r: /Windows NT 6.0/
            }, {
                s: "Windows Server 2003",
                r: /Windows NT 5.2/
            }, {
                s: "Windows XP",
                r: /(Windows NT 5.1|Windows XP)/
            }, {
                s: "Windows 2000",
                r: /(Windows NT 5.0|Windows 2000)/
            }, {
                s: "Windows ME",
                r: /(Win 9x 4.90|Windows ME)/
            }, {
                s: "Windows 98",
                r: /(Windows 98|Win98)/
            }, {
                s: "Windows 95",
                r: /(Windows 95|Win95|Windows_95)/
            }, {
                s: "Windows NT 4.0",
                r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
            }, {
                s: "Windows CE",
                r: /Windows CE/
            }, {
                s: "Windows 3.11",
                r: /Win16/
            }, {
                s: "Android",
                r: /Android/
            }, {
                s: "Open BSD",
                r: /OpenBSD/
            }, {
                s: "Sun OS",
                r: /SunOS/
            }, {
                s: "Linux",
                r: /(Linux|X11)/
            }, {
                s: "iOS",
                r: /(iPhone|iPad|iPod)/
            }, {
                s: "Mac OS X",
                r: /Mac OS X/
            }, {
                s: "Mac OS",
                r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
            }, {
                s: "QNX",
                r: /QNX/
            }, {
                s: "UNIX",
                r: /UNIX/
            }, {
                s: "BeOS",
                r: /BeOS/
            }, {
                s: "OS/2",
                r: /OS\/2/
            }, {
                s: "Search Bot",
                r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
            }],
            p = b; - 1 != (j = e.indexOf("Opera")) ? (f = "Opera", m = "Opera Software", g = e.substring(j + 6), -1 != (j = e.indexOf("Version")) && (g = e.substring(j + 8))) : -1 != (j = e.indexOf("MSIE")) ? (f = "Microsoft Internet Explorer", m = "Microsoft", g = e.substring(j + 5)) : -1 != (j = e.indexOf("Chrome")) ? (f = "Chrome", m = "Google", g = e.substring(j + 7)) : -1 != (j = e.indexOf("Safari")) ? (f = "Safari", m = "Apple", g = e.substring(j + 7), -1 != (j = e.indexOf("Version")) && (g = e.substring(j + 8))) : -1 != (j = e.indexOf("Firefox")) ? (f = "Firefox", m = "Mozilla", g = e.substring(j + 8)) : -1 != e.indexOf("Trident/") ? (f = "Microsoft Internet Explorer", m = "Microsoft", g = e.substring(e.indexOf("rv:") + 3)) : (i = e.lastIndexOf(" ") + 1) < (j = e.lastIndexOf("/")) && (f = e.substring(i, j), g = e.substring(j + 1), f.toLowerCase() == f.toUpperCase() && (f = navigator.appName)), -1 != (k = g.indexOf(";")) && (g = g.substring(0, k)), -1 != (k = g.indexOf(" ")) && (g = g.substring(0, k)), -1 != (k = g.indexOf(")")) && (g = g.substring(0, k)), h = parseInt("" + g, 10), isNaN(h) && (g = "" + parseFloat(navigator.appVersion), h = parseInt(navigator.appVersion, 10));
        for (var q = 0; q < o.length; q++) {
            var r = o[q];
            if (r.r.test(e)) {
                l = r.s;
                break
            }
        }
        switch (/Windows/.test(l) && (p = /Windows (.*)/.exec(l)[1], l = "Windows", n = "Microsoft"), l) {
            case "Mac OS X":
                p = /Mac OS X ([\.\_\d]+)/.exec(e)[1], n = "Apple";
                break;
            case "Android":
                p = /Android ([\.\_\d]+)/.exec(e)[1], n = "Google";
                break;
            case "iOS":
                p = /OS (\d+)_(\d+)_?(\d+)?/.exec(d), p = p[1] + "." + p[2] + "." + (0 | p[3]), n = "Apple"
        }
        return a.browserVendor = m, a.browser = f, a.browserVersion = g, a.osVendor = n, a.os = l, a.osVersion = p, a
    }

    function b() {
        var a = {
            mac: "",
            serial: ""
        };
        try {
            var b = $("<div id='secInfoDiv' style='position:absolute;top:-1000px;left:-1000px;'></div>").appendTo("body");
            b.sec(), a.mac = b.sec("NetInfo") || "", a.serial = b.sec("CPUInfo") || b.sec("DeviceUUID") || "", b.remove()
        } catch (c) {}
        return a
    }
    if (!devAndpfInfo) {
        devAndpfInfo = {};
        var c = a(),
            d = b();
        devAndpfInfo.device = c.browserVendor + "," + c.browser + "," + c.browserVersion, devAndpfInfo.platform = c.osVendor + "," + c.os + "," + c.osVersion, $.extend(devAndpfInfo, d)
    }
    return devAndpfInfo
}, Common.postRequestCallback = null, Common.postRequest = function() {
    var modelArray = arguments,
        showLoading = !0,
        async = !1;
    if (!modelArray.length) return null;
    isArray(modelArray[0]) && (modelArray = modelArray[0]);
    var arr = [],
        jsn = {};
    dataHeaderCipherType = {};
    for (var i = 0; i < modelArray.length; i++) {
        if (0 == modelArray[i].showLoading) {
            showLoading = !1;
            break
        }
        if (null == modelArray[i]) break;
        jsn = void 0 === modelArray[i].id ? modelArray[i].attributes : modelArray[i], jsn.id = Common.getIdentityId(), jsn.params && (jsn.params.activ || jsn.params.devicePrint) && (isCipherTypeFlag(jsn), "0" === Common.cipherTypeFlag && (dataHeaderCipherType = {
            cipherType: "0"
        })), arr[arr.length] = jsn
    }
    return Common.async && (async = !0), $.ajax({
        url: dataPostURL + "?_locale=" + localParam[lan],
        type: "post",
        async: async,
        showLoading: showLoading,
        data: JSON.stringify(Common.getCommPostParam(arr)).replace(/"null"/g, '""') || eval("(" + Common.getCommPostParam(arr) + ")"),
        dataType: "json",
        headers: {
            "bfw-ctrl": "json"
        },
        contentType: "text/json;",
        error: function() {
            Common.LightBox.hide(), Common.LightBox.showMessage(Common.Error.getMsgByCode("ajaxError")), "function" == typeof Common.postRequestCallback && Common.postRequestCallback()
        }
    })
}, Common.getPostHeader = function(a, b) {
    return a.header = {
        local: b || ("C" == lan ? "ZH_cn" : "EN_us")
    }, a
}, Common.ajax = function(a, b) {
    return $.ajax({
        url: dataPostURL,
        type: b,
        data: JSON.stringify(Common.getPostHeader(a)),
        dataType: "json",
        headers: {
            "bfw-ctrl": "json"
        },
        contentType: "text/plain; charset=utf-8",
        error: function() {
            $("#disablePage").hide(), Common.LightBox.showMessage(Common.Error.getMsgByCode("ajaxError"))
        }
    })
}, Common.post = function() {
    var a = arguments[0];
    return a.attributes || a.method ? (void 0 !== a.attributes && (a = a.attributes), $("#disablePage").show(), Common.ajax(a, "post")) : !1
}, Common.postReqTree = function() {
    var a = arguments,
        b = {};
    if (!a.length) return null;
    isArray(a[0]) && (a = a[0]);
    var c = a.length;
    if (1 == c) b = a[0].attributes || a[0];
    else
        for (var d = 0; c > d && null != a[d]; d++) b["param" + (d + 1)] = a[d].attributes || a[d];
    return $("#disablePage").show(), Common.ajax(b, "post")
}, Common.Canvas = {
    element: null,
    clear: function() {
        this.element.html("")
    },
    init: function(a) {
        this.element = $("#" + a)
    },
    render: function(a) {
        this.clear(), this.element.html(a)
    }
}, Common.Dispatcher = {
    redirect: function(action) {
        this.showLoading();
        var t = this;
        window.previousAction, action && (0 == $("#" + action).length && $("body").append($('<div id="' + action + '" class="window"></div>')), Common.Canvas.init(action), $.when(eval("Common.Canvas.element." + action + "();")).done(function() {
            t.hideLoading(), window.previousAction = action
        }))
    },
    showLoading: function() {
        this.loading = (this.loading || $('<div style="position:absolute; top:45%; left:36%;z-index:10; display:none" id="ctrollerLoading"><img src="images/loading.gif" alt="loading" /></div>').appendTo(document.body)).show(), Common.LightBox.show()
    },
    hideLoading: function() {
        this.loading.hide(), Common.LightBox.hide()
    }
}, Common.ValicationUtil = Common.VU = {
    addAmountValid: function(a, b) {
        switch (a) {
            case "027":
                $(b).attr({
                    tips: "tipsrequired tipsmax tips0306",
                    validateGroup: "{required:true,maxLength:15,reg100:true}"
                }).attr("currCode", a);
                break;
            case "034":
                $(b).attr({
                    tips: "tipsrequired tipsmax tips0266",
                    validateGroup: "{required:true,maxLength:15,reg44:true}"
                }).attr("currCode", a);
                break;
            default:
                $(b).attr({
                    tips: "tipsrequired tipsmax tips0293",
                    validateGroup: "{required:true,maxLength:15,reg45:true}"
                }).attr("currCode", a)
        }
    }
}, Common.Security = {
    mask: function(a, b) {
        var c = 0,
            d = len = 0,
            e = "";
        switch (a.toLowerCase()) {
            case "302":
                if (b.length < 9) return b;
                len = b.length - 4, c = 4, d = 6;
                break;
            case "mobile":
                c = 3, len = b.length - 4, d = 4;
                break;
            case "066":
                d = 6, len = b.length - 6;
                break;
            case "361":
                c = 3, len = b.length - 1, d = 6;
                break;
            case "4104":
                c = 4, len = b.length - 4, d = 10;
                break;
            default:
                c = 4, len = b.length - 4, d = 6
        }
        for (; d-- > 0;) e += "*";
        return b.substr(0, c) + e + b.substr(len)
    },
    maskName: function() {
        var a = Common.currentUser.customerName;
        if (!a) return "";
        var b = a.split(" ");
        if (1 == b.length && (b = a.split("")), 2 == b.length) return b[0] + "*";
        for (var c = b.length - 2, d = ""; c-- > 0;) d += "*";
        return b[0] + d + b[b.length - 1]
    }
}, Common.AccountInfo = {
    getAccountInfo: function(a, b, c, d, e) {
        var f = "";
        return a && (f += "<span lan='account_type_" + a + "'>" + CU.getDictNameByKey("account_type_" + a) + "</span>"), b && (f += "<span class='ml5'>" + Common.Security.mask(null == e ? "302" : "", b) + "</span>"), c && (f += "<span class='ml5'>" + c + "</span>"), d && (f += "<span class='ml5' lan='payeraccount_" + d + "'>" + CU.getDictNameByKey("payeraccount_" + d) + "</span>"), f.trim()
    },
    getAllAccountInfo: function(a, b) {
        var c = "";
        return b && (c = "<span lan='payeraccount_" + a.accountIbkNum + "'>" + CU.getDictNameByKey("payeraccount_" + a.accountIbkNum) + "</span>"), a ? "<span lan='account_type_" + a.accountType + "'>" + CU.getDictNameByKey("account_type_" + a.accountType) + "</span> " + Common.Security.mask("", a.accountNumber) + " " + a.nickName + " " + c : ""
    },
    getAccountInfoByCatalog: function(a, b) {
        var c = "",
            d = "";
        return a ? (b && (c = "<span lan='payeraccount_" + a.accountIbkNum + "'>" + CU.getDictNameByKey("payeraccount_" + a.accountIbkNum) + "</span>"), d = "119" == a.accountType && a.accountCatalog ? "<span lan='cardType_cc_" + a.accountCatalog + "'>" + CU.getDictNameByKey("cardType_cc_" + a.accountCatalog) + "</span>" : "<span lan='account_type_" + a.accountType + "'>" + CU.getDictNameByKey("account_type_" + a.accountType) + "</span>", d + " " + Common.Security.mask("", a.accountNumber) + " " + a.nickName + " " + c) : ""
    },
    getAccountElementDesc: function(a) {
        return a ? (-1 == $.inArray(a.accountType, ["103", "104", "107"]) ? '<span class="mr5" lan="account_type_' + CU.transToEcard(a.accountType, a.ecard) + '">' + CU.getDictNameByKey("account_type_" + CU.transToEcard(a.accountType, a.ecard)) + "</span>" : a.cardDescription) + '<span class="mr5">' + Common.Security.mask("", a.accountNumber) + '</span><span class="mr5">' + a.nickName + '</span><span class="mr5" lan="payeraccount_' + a.accountIbkNum + '">' + CU.getDictNameByKey("payeraccount_" + a.accountIbkNum) + "</span>" : ""
    }
}, Common.Error = {
    handle: function(a) {
        var b = ErrorCode ? ErrorCode[a.code][lan] : a.message;
        return b
    },
    getMsgByCode: function(a) {
        var b = void 0;
        return b = a.code ? a.code : a, a && ErrorCode[b] ? ErrorCode[b][lan] || "" : a ? "后台返回未知错误Code:" + a.code : "后台返回错误,没有错误编号"
    },
    lastErrorCode: ""
}, Common.getControllerParam = function(a, b) {
    var c = null;
    return c = a.length > 3 ? a[3] : (new b).findAll()
}, CU = Common.Util = {
    getFirstElementChild: function(a) {
        if ("1" == a.nodeType) return a;
        if ("11" == a.nodeType)
            for (var b = 0, c = a.childNodes.length; c > b; b++)
                if ("1" == a.childNodes[b].nodeType) {
                    a = a.childNodes[b];
                    break
                }
        return a || null
    },
    getElementChildren: function() {},
    Json: {
        merge: function() {
            var a = arguments;
            if (!a || !a.length) return null;
            for (var b = a[0], c = 1; c < a.length; c++)
                for (var d in a[c]) b[d] = a[c][d];
            return b
        },
        copyAttr: function(a, b) {
            for (var c in a) a[c] = b[c]
        },
        replaceNull: function(a) {
            if (a)
                for (var b in a) null == a[b] && (a[b] = ""), "object" == typeof a[b] && (a[b] = CU.Json.replaceNull(a[b]));
            return a
        }
    },
    getKeyCode: function(a) {
        var b = 0,
            a = a || event;
        return b = a.keyCode || a.which || a.charCode || a.originalEvent.keyCode
    },
    Date: {
        getDateObj: function(a) {
            return new Date(a.replace(/\-/g, "/"))
        },
        in_N_month: function(a, b, c, d) {
            var e = CU.Date.getDateObj(a),
                f = CU.Date.getDateObj(a),
                g = CU.Date.getDateObj(b);
            e.setMonth(e.getMonth() + c), e.setDate(e.getDate());
            var h = g.getYear() - f.getYear(),
                i = g.getMonth() + 12 * h;
            return 0 > g - f || g - e > 0 || i - f.getMonth() > c ? !1 : d && g - e == 0 ? !1 : !0
        },
        inThreeMonth: function(a, b) {
            return CU.Date.in_N_month(a, b, 3)
        },
        inOneMonth: function(a, b) {
            return CU.Date.in_N_month(a, b, 1)
        },
        inSixMonth: function(a, b) {
            return CU.Date.in_N_month(a, b, 6)
        },
        inOneYear: function(a, b) {
            var c = CU.Date.getDateObj(a),
                d = CU.Date.getDateObj(a),
                e = CU.Date.getDateObj(b);
            return c.setFullYear(c.getFullYear() + 1), c.setDate(c.getDate() - 1), e - c > 0 || e.getFullYear() - d.getFullYear() == 1 && e.getMonth() - d.getMonth() > 0 ? !1 : !0
        },
        inTwoYears: function(a, b) {
            var c = CU.Date.getDateObj(a),
                d = CU.Date.getDateObj(b);
            return c.setFullYear(c.getFullYear() + 2), c.setDate(c.getDate() - 1), d - c > 0 ? !1 : !0
        },
        in_N_years: function(a, b, c) {
            var d = CU.Date.getDateObj(a),
                e = CU.Date.getDateObj(b);
            return d.setFullYear(d.getFullYear() + c), d.setDate(d.getDate() - 1), e - d > 0 ? !1 : !0
        },
        diff: function(a, b) {
            var c = Date.parse(a.replace(/\-/g, "/")),
                d = Date.parse(b.replace(/\-/g, "/"));
            return (d - c) / 864e5
        },
        format: function(a) {
            if (a = $.trim(a), 0 == a.length) return "";
            var b = "",
                c = a.indexOf("-");
            if (c && -1 != c) b = a.replace(/-/g, "/");
            else {
                var d = a.split("/");
                b = d[2] + "/" + d[0] + "/" + d[1]
            }
            return b
        },
        lastMonthDay: function(a) {
            var b = new Date(a.replace(/\-/g, "/"));
            b.setMonth(b.getMonth() - 1), b.setDate(b.getDate() + 1);
            var c = b.getMonth() + 1;
            9 >= c && (c = "0" + c);
            var d = b.getDate();
            return 9 >= d && (d = "0" + d), b.getFullYear() + "/" + c + "/" + d
        },
        lastThreeMonthDay: function(a) {
            var b = new Date(a.replace(/\-/g, "/"));
            b.setMonth(b.getMonth() - 3), b.setDate(b.getDate() + 1);
            var c = b.getMonth() + 1;
            9 >= c && (c = "0" + c);
            var d = b.getDate();
            return 9 >= d && (d = "0" + d), b.getFullYear() + "/" + c + "/" + d
        },
        checkDateTime: function(a, b) {
            for (var c = !0, d = 0; 16 > d; d++)
                if (a.charAt(d) > b.charAt(d)) {
                    c = !1;
                    break
                }
            return c
        },
        lasWeekDay: function(a) {
            var b = new Date(a.replace(/\-/g, "/")),
                c = b.getTime(),
                d = c - 5184e5,
                e = new Date(d),
                f = e.getMonth() + 1;
            9 >= f && (f = "0" + f);
            var g = e.getDate();
            return 9 >= g && (g = "0" + g), e.getFullYear() + "/" + f + "/" + g
        },
        addDays: function(a, b) {
            var c, d;
            if ("string" == typeof a) {
                c = a.split(/[\/|-]/), d = new Date(c[0], parseInt(1 * c[1]) - 1, c[2]), d.setTime(d.getTime() + 3600 * b * 24 * 1e3);
                var e = d.getFullYear(),
                    f = d.getMonth() + 1,
                    g = d.getDate();
                return 10 > f && (f = "0" + f), 10 > g && (g = "0" + g), e + "/" + f + "/" + g
            }
            return a.constructor === Date ? (d = new Date, d.setTime(a.getTime() + 3600 * b * 24 * 1e3), d) : null
        },
        addMonths: function(a, b) {
            var c, d;
            if ("string" == typeof a) {
                c = a.split(/[\/|-]/), d = new Date(c[0], parseInt(1 * c[1]) - 1, c[2]), d.setMonth(d.getMonth() + b);
                var e = d.getFullYear(),
                    f = d.getMonth() + 1,
                    g = d.getDate();
                return 10 > f && (f = "0" + f), 10 > g && (g = "0" + g), e + "/" + f + "/" + g
            }
            return a.constructor === Date ? (d = new Date, d.setTime(a.getTime()), d.setMonth(d.getMonth() + b), d) : null
        },
        getDateStr: function(a) {
            var b = new Date;
            b.setDate(b.getDate() + a);
            var c = b.getFullYear(),
                d = b.getMonth() + 1,
                e = b.getDate();
            return 10 > d && (d = "0" + d), 10 > e && (e = "0" + e), c + "/" + d + "/" + e
        },
        getDateStrByTime: function(a) {
            var b = new Date;
            b.setTime(a);
            var c = b.getFullYear(),
                d = b.getMonth() + 1,
                e = b.getDate();
            return 10 > d && (d = "0" + d), 10 > e && (e = "0" + e), c + "/" + d + "/" + e
        }
    },
    circle: function(a, b) {
        var c = "",
            b = b || 1,
            d = /(\d+)(['d','w','m','y'])/;
        if (a) {
            b = b > 2 ? 2 : b;
            var e = d.exec(a.toLowerCase());
            return e ? e[b] : ""
        }
        return c
    },
    appointPageNo: function(a) {
        $("#pageNo em").text(a)
    },
    Currency: {
        getSymbol: function(a) {
            var b = "￥";
            switch (a) {
                case "014":
                    b = "$";
                    break;
                case "001":
                    b = "￥"
            }
            return b
        }
    },
    ajaxDataHandle: function(a, b, c) {
        if ($("#disablePage").hide(), b = b || 0, a) {
            var d = a.response;
            if (d && d.length)
                if (d[b].status == ajaxSuccessStatusCode) {
                    var e = d[b].result;
                    if (null != e) return CU.Json.replaceNull(e)
                } else {
                    var f = d[b].error;
                    if (f && f.code && f.code in redirectErrorMap) {
                        var g = redirectErrorMap[f.code];
                        "validation.session_invalid" === f.code && (g = f.message), window.top.location.href = (window.mainPath || "") + "logout.html?title=" + escape(g) + "&locale=" + localParam[lan] + ("validation.resubmit_same_session" === f.code || Common.basePath ? "&relogin=0" : "")
                    } else CU.changeLan($("#msgBox")), d[b].error && d[b].error.message || (d[b].error = {
                        message: "C" === lan ? "系统逻辑处理问题" : "System Logic Process Problem"
                    }), Common.LightBox.showMessage(d[b].error.message), Common.Error.lastErrorCode = d[b].error.code, c && c.length && (Common.Dispatcher.redirect(c), Common.LightBox.hide(), CU.cordinateWithMenu(c))
                }
        }
        return null
    },
    isSuccesful: function(a, b) {
        return b = b || 0, void 0 !== a.response[b].status ? ($("#disablePage").hide(), "01" == a.response[b].status) : null == this.ajaxDataHandle(a, b)
    },
    createTokenId: function(a) {
        return new Model("PSNGetTokenId", a)
    },
    createConversation: function() {
        return new Model("PSNCreatConversation")
    },
    closeConversation: function(a) {
        return new Model("PSNCloseConversation", a)
    },
    getPageCount: function(a, b) {
        return parseInt((a - 1) / b) + 1
    },
    getAbsCenterAxis: function(a) {
        return {
            left: (document.body.clientWidth - a.width()) / 2,
            top: (document.body.clientHeight - a.height()) / 2
        }
    },
    setObjScreenAbsCenter: function(a, b) {
        var c = {
            left: (window.top.document.body.clientWidth - a.width()) / 2,
            top: ((window.top.innerHeight || window.top.document.documentElement.clientHeight) - a.height()) / 2 + (window.top.document.body.scrollTop || window.top.document.documentElement && window.top.document.documentElement.scrollTop || 0)
        };
        return c.top = c.top > 0 ? c.top : 0, a.css({
            left: c.left + "px",
            top: c.top + "px"
        }), b && mw.addTask(a.parent().attr("id"), a.find("h4.i-pop-title-m").text()), a
    },
    setObjAbsCenter: function(a, b) {
        this.setObjScreenAbsCenter(a, b)
    },
    loadLan: function(a) {
        var b = document.createElement("script");
        b.type = "text/javascript", b.readyState ? b.onreadystatechange = function() {
            "loaded" === b.readyState || "complete" === b.readyState ? (b.onreadystatechange = null, a()) : "loading" !== b.readyState && (b.onreadystatechange = null, a())
        } : (b.onload = function() {
            a()
        }, b.onerror = function() {
            a()
        }), b.src = "scripts/lib/lan_" + lan.toLowerCase() + ".js?v=" + window.VERSION, document.getElementsByTagName("head")[0].appendChild(b)
    },
    fixTips: function(a) {
        var b, c, d = 0,
            e = 0;
        uptipsArea = a && a.find(".uptips") && a.find(".uptips").size() ? a.find(".uptips") : a && a.closest(".uptips") || $(".uptips:visible"), uptipsArea.css({
            minHeight: "",
            _height: ""
        });
        var f = $("#content").children("div"),
            g = 41;
        try {
            uptipsArea.find("p.btn-box:visible").size() && 0 == uptipsArea.parent().find("div.tips-box:visible").size() && !$.browser.firefox && (d = 20)
        } catch (h) {}
        $.browser.firefox && (e = 10), b = $("#subMenu").height() - f.height() - 22 - g - d + e, b > 0 && ($.browser.msie && "6.0" == $.browser.version && !$.support.style ? uptipsArea.css({
            height: uptipsArea.height() + b - 28 + "px"
        }) : (c = uptipsArea.height() + b + "px", uptipsArea.css({
            minHeight: c,
            _height: c
        })))
    },
    changeLan: function(a) {
        function b() {
            if (c) {
                if (!window.Regional) return CU.loadLan(b);
                for (var e in window.Regional) $.extend(window.Regional[e], c[e])
            }
            window.Regional && window.Regional.N1 && window.Regional.N1[lan] || $.extend(window.Regional, window["Regional_new" + lan]), Common.LightBox.hide(), window.lanLoaded[lan] = !0, d.local = d.local || new Localize, setTimeout(function() {
                d.local.changeLanInContainer(lan, a || Common.Canvas.element), CU.fixTips(a)
            }, 1)
        }
        var c, d = this;
        return window.lanLoaded || (window.lanLoaded = {}), lan = lan || "C", window.lanLoaded[lan] ? (window.Regional && window.Regional.N1 && window.Regional.N1[lan] || $.extend(window.Regional, window["Regional_new" + lan]), d.local = d.local || new Localize, d.local.changeLanInContainer(lan, a || Common.Canvas.element), CU.fixTips(a)) : (window.Regional && (c = window.Regional, window.Regional = null), Common.LightBox.show(), CU.loadLan(b)), a
    },
    getLanMenu: function(a) {
        return "E" == window.lan ? (!a && $("#main").is(":visible") && (a = "l0027"), Constant.menuConst[a] || CU.getDictNameByKey(a)) : CU.getDictNameByKey(a)
    },
    CNYFormat: function(a, b) {
        var c, d = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"],
            e = new Array(["元", "万", "亿", "万亿", "京", "垓"], ["", "拾", "佰", "仟"]),
            f = "",
            g = "",
            h = "";
        switch (b) {
            case "AUD":
            case "CAD":
            case "MOP":
            case "MZD":
            case "SGD":
            case "USD":
            case "014":
            case "018":
            case "028":
            case "029":
            case "081":
            case "087":
            case "038":
            case "EUR":
                c = ["拾", "分"];
                break;
            case "015":
            case "CHF":
                c = ["拾", "分"], e[0][0] = "法郎";
                break;
            case "022":
            case "DKK":
                c = ["拾", "欧尔"], e[0][0] = "克朗";
                break;
            case "013":
            case "HKD":
                c = ["毫", "分"];
                break;
            case "012":
            case "GBP":
                c = ["拾", "便士"], e[0][0] = "镑";
                break;
            case "023":
            case "NOK":
            case "021":
            case "SEK":
                c = ["拾", "欧尔"], e[0][0] = "克朗";
                break;
            case "082":
            case "PHP":
                e[0][0] = "比索";
                break;
            case "084":
            case "THB":
                c = ["拾", "萨当"], e[0][0] = "铢";
                break;
            default:
                c = ["角", "分"]
        }
        if (-1 != a.indexOf(".") ? (g = a.substring(0, a.indexOf(".")), h = a.substring(a.indexOf(".") + 1).split("")) : g = a, "" != h && 0 != h) {
            if (h.length > 2) return;
            for (var i = 0, j = h.length; j > i; i++) "0" != h[i] && (f += d[parseInt(h[i])] + c[i], (1 == j && b && "001" != b && "CNY" != b || 2 == j && "0" == h[1]) && (f += c[1]))
        }
        f = f || "整";
        var k;
        for (i = 0, j = e[0].length; j > i && g > 0; i++) {
            k = "";
            for (var l = 0; l < e[1].length && g > 0; l++) k = d[g % 10] + e[1][l] + k, g = Math.floor(g / 10);
            f = k.replace(/(零.)*零$/, "").replace(/^$/, "零") + e[0][i] + f
        }
        return f.replace(new RegExp("(零.)*零" + e[0][0]), e[0][0]).replace(/(零.)+/g, "零").replace(/^整$/, "零" + e[0][0] + "整").replace("角分", "角").replace("毫分", "毫")
    },
    shareNumberUpper: function(a, b) {
        var c = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"],
            d = new Array(["", "万", "亿", "万亿", "京", "垓"], ["", "拾", "佰", "仟"]),
            e = "",
            f = "",
            g = "",
            h = "",
            a = a.replace(/,/g, "");
        if (!/^[0-9]{1,12}(\.\d{1,2}){0,1}$/.test(a) || "" == a) return "-";
        if (0 == a) return "零份";
        if (a = a.formatNum(b, !1, !0).replace(/,/g, ""), -1 != a.indexOf(".") ? (g = a.substring(0, a.indexOf(".")), h = a.substring(a.indexOf(".") + 1).split("")) : g = a, "" != h && 0 != h) {
            if (h.length > 2) return;
            for (var i = 0, j = h.length; j > i; i++) e += c[parseInt(h[i])];
            e = e.replace(/(零)\1+/g, "")
        }
        if ("" != g && 0 != g) {
            var k;
            for (e && (d[0][0] = "点"), i = 0, j = d[0].length; j > i && g > 0; i++) {
                k = "";
                for (var l = 0; l < d[1].length && g > 0; l++) k = c[g % 10] + d[1][l] + k, g = Math.floor(g / 10);
                var m = k.replace(/(零.)*零$/, "").replace(/^$/, "");
                m && (f = m + d[0][i] + f)
            }
            f = f.replace(/(零.)+/g, "零").replace(/零/g, "零") + e
        } else f = e ? "零点" + e : "零";
        return f ? f + "份" : "-"
    },
    loadUrlScript: function(a, b) {
        var c = this,
            d = document.createElement("script");
        d.type = "text/javascript", d.readyState ? d.onreadystatechange = function() {
            "loaded" === d.readyState || "complete" === d.readyState ? (d.onreadystatechange = null, b()) : "loading" !== d.readyState && (d.onreadystatechange = null, console.log("load Js error..."), c.loadUrlScript(a, b))
        } : (d.onload = function() {
            b()
        }, d.onerror = function() {
            console.log("load Js error..."), c.loadUrlScript(a, b)
        }), d.src = a + "?v=" + window.VERSION, document.getElementsByTagName("head")[0].appendChild(d)
    },
    changeSecEditCtrl: function(a) {
        var b = this;
        Common.SecVerion && 2 == Common.SecVerion ? b.loadUrlScript("scripts/lib/CFCASIPInput.SP.min.js", function() {
            b.loadUrlScript("scripts/lib/secEditCtrl.js", function() {
                Common.SecVerion = 1, a && a()
            })
        }) : b.loadUrlScript("scripts/ovsLib/ovsCFCASIPInput.min.js", function() {
            b.loadUrlScript("scripts/ovsLib/ovsSecEditCtrl.js", function() {
                Common.SecVerion = 2, a && a()
            })
        })
    },
    getDictNameByKey: function(a) {
        var b = "";
        try {
            b = Regional[a][lan]
        } catch (c) {}
        return b
    },
    cordinateWithMenu: function(a) {
        $("ul li", "#accordion").each(function() {
            var b = this;
            if ($(this).css("color", "#333").removeAttr("class"), $("a", b).attr("action") == a) {
                $("ul li", b).removeAttr("class"), $("#navigator").removeAttr("style"), $(b).attr("class", "current");
                var c = $(b).parent();
                $("span", c.parent()).attr("class", "ndown"), c.slideDown()
            }
        })
    },
    print: function() {
        window.print()
    },
    changeTheme: function(a) {
        $("#skin").attr("href", "css/" + a + "/default.css")
    },
    letterLenLimit: function(a, b, c) {
        var d = c - a.val().len();
        $.browser.msie && (a.attr("_change_attached") || (d = c)), b.text(d >= 0 ? d : 0), a.on("keyup.lmt", function() {
            var a = $(this),
                d = a.val().len(),
                e = c - d;
            b.text(e >= 0 ? e : 0)
        }).on("keydown.lmt", function(a) {
            var b = CU.getKeyCode(a);
            return (b > 46 && 112 > b || $.inArray(b, [13, 32, 189, 187, 219, 221, 220, 186, 222, 188, 190, 191, 192, 229]) > -1) && $(this).val().len() >= c ? !1 : void 0
        })
    },
    resetForm: function(a) {
        var b = "input[type='text'],input[type='radio'],input[type='password'],textarea";
        $.each(a.find(b), function(a, b) {
            $(b).val($(b).attr("defValue") ? $(b).attr("defValue") : "")
        }), a.find("select").each(function() {
            this.selectedIndex = 0
        }), a.find(".inwords").html("-"), a.find(":checkbox:checked").attr("checked", !1), a.find("div.SecEditCtrl").length && a.find("div.SecEditCtrl").sec("clear"), a.find(b).removeClass("passed").removeClass("warning").removeAttr("pass"), Common.SF.reset(), window.formValid && window.formValid.tooltip && window.formValid.tooltip.hide(), window.formValid && window.formValid.TIMER && clearTimeout(window.formValid.TIMER), ITSelect.reset(a)
    },
    emptyQueryResult: function(a) {
        a.children("tbody").html(""), a.children("tfoot td>div.page").html("")
    },
    addIFrame: function(a) {
        $.browser.msie && "6.0" == $.browser.version && !$.support.style && $("<iframe src='' marginwidth=0 framespacing=0 marginheight=0 frameborder=0 width=100% class='ifhideselect'></iframe>").insertBefore($(a).children().first().first())
    },
    setMenuClicked: function(a) {
        var b = $("span[action='" + a + "']"),
            c = b.parent();
        $("#accordion li.current,h3").removeClass("current"), c.addClass("current"), c.parent().addClass("open").show(), c.parent().parent().children().first().addClass("current")
    },
    triggerLeftMenuClick: function(a) {
        mw.dropTask(), CU.setMenuClicked(a), $("#accordion").find("*[action='" + a + "']").first().trigger("click"), $("#transmitter").hide()
    },
    forceReading: function(a, b) {
        var c = 0,
            d = 0,
            e = a.height();
        a.on("scroll", function() {
            c = a.get(0).scrollHeight, d = a.get(0).scrollTop, d + e >= c ? b.removeAttr("disabled") : b.attr("disabled", "disabled")
        })
    },
    appendZero: function(a, b) {
        if (a || (a = ""), 1 > b) return "";
        var c = a.length;
        if (c > b) return a.substr(0, b);
        c = b - c;
        for (var d = "", e = 0; c > e; e++) d += "0";
        return a + d
    },
    formatCurrency: function(a, b) {
        var c = "";
        if (isNaN(a)) switch (a) {
            case "JPY":
                c = Number(b).toFixed(0);
                break;
            case "XAU":
                c = Number(b).toFixed(1);
                break;
            default:
                c = Number(b).toFixed(2)
        } else switch (a) {
            case "027":
                c = Number(b).toFixed(0);
                break;
            case "034":
                c = Number(b).toFixed(1);
                break;
            default:
                c = Number(b).toFixed(2)
        }
        return c
    },
    formatCurrencyFloor: function(a, b, c) {
        var d = 2,
            e = "";
        switch (a) {
            case "KRW":
            case "088":
            case "JPY":
            case "027":
                d = 0;
                break;
            case "XAU":
            case "034":
                d = 1
        }
        b = ("" + b).replace(/\,/g, "");
        var f = b.split(".");
        if (1 == f.length) e = Number(b).toFixed(d) + "";
        else {
            var g = f[0],
                h = f[1];
            if (h.length <= d) e = Number(b).toFixed(d) + "";
            else if (0 == d) {
                var i = h.charAt(0);
                e = i > 4 ? Number(g) + 1 + "" : g
            } else {
                var j = Math.round(h.replace(new RegExp("^([0-9]{" + d + "})"), "$1.")) + "",
                    k = j.length;
                if (k > d && (j = j.substring(1), g = Number(g) + 1 + ""), d > k)
                    for (var l = 0; d - k > l; l++) j = "0" + j;
                e = g + j.replace(new RegExp("(\\d{" + d + "})$"), ".$1")
            }
        }
        return c ? e : CurrencyUtil.formatCurrency(e)
    },
    getDocumentPracticalHeight: function() {
        return Math.max(document.documentElement.clientHeight || 0, Math.max(document.body.scrollHeight || 0, document.body.offsetHeight || 0))
    },
    filterInvestmentOpen: function(a, b, c) {
        var a = a || $("#content").find("div").first();
        c || (c = "templates/bocWealthMgt/bocWealthMgtI/noOpenServer.ejs"), Common.LightBox.show(), Common.postRequest(new Model("PsnInvestmentManageIsOpen")).then(function(d) {
            var e = CU.ajaxDataHandle(d);
            1 == e ? (Common.LightBox.hide(), b && b()) : a.html(c, {}, function() {
                Common.LightBox.hide(), $("#gotoOpenService_wealth").off("click").on("click", function() {
                    Common.triggerAction("InvestmentManageSign")
                }), CU.changeLan(a)
            })
        })
    }
}, String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, "")
}, String.prototype.format = function() {
    var a = arguments;
    return 1 == a.length && a[0].join && (a = a[0]), this.replace(/\{(\d+)\}/g, function(b, c) {
        return a[c]
    })
}, String.prototype.len = function() {
    return this.replace(/[^\x00-\xff]/g, "  ").length
}, String.prototype.toJson = function() {
    return new Function("return " + this)()
}, String.prototype.fix2decimal = function() {
    if (0 == this.length) return this;
    var a = this.split(".")[0].replace(/(\d{1,2}?)((\d{3})+)$/, "$1,$2").replace(/(\d{3})(?=\d)/g, "$1,"),
        b = this.split(".")[1];
    return b && b.length >= 2 ? a + "." + b.substr(0, 2) : b ? a + "." + b + "0" : a + ".00"
}, String.prototype.formatVlidNum = function() {
    if (0 == this.length || isNaN(this)) return "";
    var a = parseFloat(this, 10).toString().replace(/\,/g, "").split(".");
    return a[0] = a[0].replace(/(\d{1,2}?)((\d{3})+)$/, "$1,$2").replace(/(\d{3})(?=\d)/g, "$1,"), 1 == a.length ? a[0] : a[0] + "." + a[1]
}, String.prototype.removeComma = function() {
    return this.replace(/\,/g, "")
}, Number.prototype.fix2decimal = function() {
    return this.toString().fix2decimal()
}, Number.prototype.formatVlidNum = function() {
    return this.toString().formatVlidNum()
}, String.prototype.formatRateERNum = function() {
    if (0 == this.length) return "";
    if (isNaN(this.removeComma())) return this.toString();
    var a = "";
    a = this.formatNum("ER", !1, !0).removeComma();
    for (var b = a.split("."), c = b[1].split(""), d = 3; d > 1 && !(c[d] > 0);) c.splice(d, 1), d--;
    return a = b[0] + "." + c.join("")
}, Number.prototype.formatRateERNum = function() {
    return this.toString().formatRateERNum()
}, String.prototype.formatNum = function(a, b, c) {
    if (0 == this.length) return "";
    if (isNaN(this.removeComma())) return this.toString();
    switch (a) {
        case "zero":
        case "027":
        case "2":
        case "JPY":
        case "KRW":
        case "068":
        case "SLV":
        case "036":
        case "0271":
        case "0272":
        case "0881":
        case "0882":
        case "035":
        case "GLD":
        case "088":
        case "844":
        case "PLD":
        case "845":
        case "PLT":
            a = 0;
            break;
        case "034":
        case "841":
        case "045":
        case "one":
            a = 1;
            break;
        case "two":
            a = 2;
            break;
        case "GS":
            a = 3;
            break;
        case "ER":
            a = 4;
            break;
        case "NV":
            a = 8;
            break;
        default:
            a = 2
    }
    var d = this.replace(/\,/g, "").split(".");
    return !c && d[1] && d[1].length > a ? this : (1 != b && (d[0] = d[0].replace(/(\d{1,2}?)((\d{3})+)$/, "$1,$2").replace(/(\d{3})(?=\d)/g, "$1,")), 1 > a ? d[0] : d[0] + "." + CU.appendZero(d[1], a))
}, Number.prototype.formatNum = function(a, b, c) {
    return this.toString().formatNum(a, b, c)
}, CU.dateFormat = function(a, b) {
    var c = a ? a : new Date,
        d = c.getFullYear() + "",
        e = c.getMonth() + 1,
        a = c.getDate();
    return 10 > e && (e = "0" + e), 10 > a && (a = "0" + a), [d, e, a].join(b ? b : "")
}, Common.stopBubble = function(a) {
    a && a.stopPropagation ? a.stopPropagation() : window.event.cancelBubble = !0
}, Common.LightBox = {
    element: null,
    init: function() {
        var a = "100%",
            b = "fixed";
        $.browser.msie && "6.0" == $.browser.version && !$.support.style && (a = document.documentElement.clientHeight + "px", b = "absolute");
        var c;
        c = $.browser.msie ? '<div id="lightbox" style="left:0; background:rgb(150,150,150); top:0; width:100%; height:' + a + "; filter:alpha(opacity=30); -moz-opacity: 0.3; opacity: 0.3;zoom:1; position:" + b + '; z-index:7; " ><iframe src="" marginwidth="0" framespacing="0" marginheight="0" frameborder="0" width="100%" height="100%" style="left:0; background:rgb(255,255,255); top:0; width:100%; filter:alpha(opacity=0); -moz-opacity: 0; opacity: 0;zoom:1; position:absolute; z-index: 9"></iframe></div>' : '<div id="lightbox" style="left:0; background:rgb(150,150,150); top:0; width:100%; height:' + a + "; filter:alpha(opacity=30); -moz-opacity: 0.3; opacity: 0.3;zoom:1; position:" + b + '; z-index:7; " ></div>', this.element = $(c).appendTo(document.body), $("#_lightbox").remove(), this.count = 0
    },
    getZIndex: function() {
        return parseInt(this.element.css("zIndex")) || -1
    },
    hide: function() {
        var a = this;
        a.element && ($.browser.msie && Number($.browser.version) < 9 ? setTimeout(function() {
            a.count--, a.setZIndex("-=2"), (a.count <= 0 || a.element.css("zIndex") <= 7) && (a.element.hide(), a.count = 0, a.element.css("zIndex", "7"))
        }, 200) : (a.count--, a.setZIndex("-=2"), (a.count <= 0 || a.element.css("zIndex") <= 7) && (a.element.hide(), $.browser.msie || $("div.SecEditCtrl").css("visibility", "visible"), a.count = 0, a.element.css("zIndex", "7"))))
    },
    resetZIndex: function() {
        return this.setZIndex("7")
    },
    setZIndex: function(a) {
        return this.element || this.init(), this.element.css("zIndex", a || "+=2")
    },
    show: function() {
        return this.element || this.init(), $.browser.msie && "6.0" == $.browser.version && !$.support.style && this.element.css("height", CU.getDocumentPracticalHeight() + "px"), this.element.show(), this.count < 0 && (this.count = 0, this.resetZIndex()), this.count++, this.setZIndex("+=2"), $.browser.msie || $("div.SecEditCtrl").each(function() {
            $(this).parents("div.bu-pop") || $(this).css("visibility", "hidden")
        }), window.formValid && window.formValid.tooltip && window.formValid.tooltip.hide(), window.formValid && window.formValid.TIMER && clearTimeout(window.formValid.TIMER), this
    },
    zIndexUp: function() {
        this.element.css("zIndex", "+=2")
    },
    zIndexDown: function() {
        this.element.css("zIndex", "-=2")
    },
    showCallbackMessage: function() {
        var a = null,
            b = null,
            c = null,
            d = {},
            e = arguments.length;
        if (0 === e) throw Error("Common.request: 需要参数");
        for (var f = 0, g = e; g > f; f++) switch (f) {
            case 0:
                d = arguments[f];
                break;
            case 1:
                a = arguments[f];
                break;
            case 2:
                b = arguments[f];
                break;
            case 3:
                c = arguments[f]
        }
        var h = d.point,
            i = {
                tipsLan: "l7282",
                messageLan: "",
                message: "",
                replaceLan: "",
                conFlag: !0,
                conLan: "l0315",
                celLan: "l0464",
                closeFlag: !1,
                flag: !1,
                hideClose: !1
            };
        d.replaceLan && (d.replaceLan = d.replaceLan.join("|")), h.el.append("templates/common/tips.ejs", $.extend(i, d), function() {
            var e = h.el.find("#pop_tips_0917"),
                f = "#btn_Confirm";
            e.find(".close").on("click", function() {
                d.closeFlag && b && b(), e.remove(), Common.LightBox.hide()
            }), d.flag ? e.find("#btn_close").on("click", function() {
                b && b(), e.remove(), Common.LightBox.hide()
            }) : f = "#btn_Confirm", e.find(f).on("click", function() {
                if (a) a();
                else {
                    var b = d.nodeId;
                    if (b && b.length) {
                        var c = b.get(0);
                        c && "INPUT" == c.tagName && "text" == c.type && (b.val("").get(0).focus(), d.inwordsId && d.inwordsId.text("-"))
                    }
                }
                e.remove(), Common.LightBox.hide()
            }), c && c(e), CU.changeLan(e), e.show(), CU.setObjAbsCenter(e), Common.LightBox.show()
        })
    },
    showMessage: function(a) {
        var b = a,
            c = (arguments[1], this);
        if ((a && a.code || void 0 !== a.code && null == a.code) && (b = Common.Error.getMsgByCode(a)), c.element) {
            if (c.isShowMessageModel()) return;
            this.element.show(), c.element.css("zIndex", "+=2").css("height", CU.getDocumentPracticalHeight() + "px"), this.count++, $.browser.msie || $("div.SecEditCtrl").each(function() {
                $(this).parents("div.bu-pop") || $(this).css("visibility", "hidden")
            })
        } else c.show();
        $("#msgContent").text(b), CU.changeLan($("#msgBox")), c.msgBox || (c.msgBox = $("#msgBox"), $("#hideMsgBox,#closeMsgBox").on("click", function() {
            c.hideMessage()
        })), c.msgBox.show(), CU.setObjScreenAbsCenter(c.msgBox), $(window).on("resize", function() {
            CU.setObjScreenAbsCenter(c.msgBox)
        })
    },
    hideMessage: function() {
        this.msgBox.hide(), this.element.css("zIndex", "-=2"), this.count--, (this.count <= 0 || this.element.css("zIndex") <= 7) && (this.element.hide(), $.browser.msie || $("div.SecEditCtrl").css("visibility", "visible")), $(window).off("resize")
    },
    isShowMessageModel: function() {
        return $("#msgBox").is(":visible")
    }
}, Common.Hashtable = function() {
    this._hash = new Object
}, Common.Hashtable.prototype = {
    add: function(a, b) {
        return void 0 === a || this.contains(a) ? !1 : (this._hash[a] = void 0 === b ? null : b, this.length++, !0)
    },
    clear: function() {
        for (var a in this._hash) delete this._hash[a];
        this.length = 0
    },
    contains: function(a) {
        return void 0 !== this._hash[a]
    },
    count: function() {
        return this.length
    },
    isEmpty: function() {
        return 0 == this.length
    },
    item: function(a, b) {
        return b && (this._hash[a] = b), this._hash[a]
    },
    length: 0,
    remove: function(a) {
        delete this._hash[a], this.length--
    }
}, Common.upperAmount = function(a, b, c) {
    var d = a.el.find(c),
        e = a.el.find(b);
    e.on("keyup", function() {
        setTimeout(function() {
            var a = $.trim(e.val().removeComma()),
                b = e.attr("currCode");
            d.text("C" == lan && "" != a && /^[0-9]{1,12}(\.\d{1,2}){0,1}$/.test(a) ? CU.CNYFormat(a, b) : "-").show()
        }, 200)
    })
}, Common.newWindowByUrlPath = function(a) {
    var b = document.createElement("a");
    b.style.display = "none", b.href = a, b.target = "_blank", $(document.body).append(b), b.click(), document.body.removeChild(b)
};
var Pager = Pager || {
    defaultIndex: 1
};
Pager.Entity = function() {
    var a = this.defaultIndex;
    this.setPageIndex = function(b) {
        a = b
    }, this.getPageIndex = function() {
        return a
    }, this.params = this.params || {}
}, Pager.Entity.prototype = {
    init: function(a) {
        return this.paramsCheck(a) ? (this.paramsRefactoring(a), this.render(), this.bindEvent(), void(this.autoCallback && this.callbackFn(a.pageIndex, this.point))) : !1
    },
    bindEvent: function() {
        var a = this;
        a.canvas.find("a.prev,a.next,a.goto").on("click", function() {
            a.clickHandler($(this))
        }), a.canvas.find(".page_pop_btn").on("click", function() {
            var b = a.canvas.find("div.page_pop_div");
            Common.LightBox.show(a.point.el), CU.setObjAbsCenter(b), b.show()
        }), a.canvas.find("a.page_pop_cancel").on("click", function() {
            a.canvas.find("div.page_pop_div").hide(), Common.LightBox.hide(a.point._el)
        }), a.canvas.find("a.page_pop_ok").on("click", function() {
            a.canvas.find("div.page_pop_div").hide(), Common.LightBox.hide(a.point._el);
            var b = parseInt(a.canvas.find("div.page_pop_div input").val());
            1 > b || b > this.pageCount || a.pageIndexChange(b)
        })
    },
    clickHandler: function(a) {
        var b = a.attr("op"),
            c = this.getPageIndex();
        if (!(1 == c && "first" == b || c == this.pageCount && "last" == b)) {
            switch (b) {
                case "prev":
                    c--;
                    break;
                case "next":
                    c++;
                    break;
                case "first":
                    c = 1;
                    break;
                case "last":
                    c = this.pageCount;
                    break;
                case "goto":
                    if (a.hasClass("btn-disabled")) return;
                    c = this.canvas.find("input.input-page").val();
                    break;
                default:
                    c = parseInt(a.text())
            }
            var d = a.parent().hasClass("disabled");
            if ("goto" == b && !d) {
                if ("" == c || /^[1-9]+[0-9]*$/.test(c + "") === !1 || isNaN(parseInt(c)) || parseInt(c) != c) return this.canvas.find("input.input-page").val(""), Common.LightBox.showMessage(CU.getDictNameByKey("l8979")), !1;
                if (parseInt(c) % 1 != 0) return this.canvas.find("input.input-page").val(""), Common.LightBox.showMessage(CU.getDictNameByKey("l8979")), !1;
                if (1 > c || c > this.pageCount) return this.canvas.find("input.input-page").val(""), Common.LightBox.showMessage(CU.getDictNameByKey("l10013")), !1
            }
            return "goto" == b && 1 == this.pageCount ? (Common.LightBox.showMessage(CU.getDictNameByKey("l8978")), !1) : void this.pageIndexChange(c)
        }
    },
    htmlCombine: function() {
        this.outputHtml = '<ul class="page"><li class="p-list" ><span lan="l0384" v="查询到" class="mr5"></span><em>' + this.recordCount + '</em><span lan="l0385" v="条记录" class="ml5"></span></li><li class="p-list"><span lan="l1430" v="第" class="mr5"></span><em class="js-curindex">' + this.getPageIndex() + '</em><span class="ml5 mr5" lan="l1428" v="页/共"></span><em>' + Math.ceil(this.recordCount / this.pageSize) + '</em><span class="ml5" lan="l36263" v="页"></span></li><li class="p-list"><a href="javascript:void(0);" title="" class="prev" op="prev" lan="l1425" v="上一页"></a></li><li class="p-list"><a href="javascript:void(0);" title="" class="next" op="next" lan="l1426" v="下一页"></a></li><li class="p-list"><span lan="l1427" v="跳转到第"></span><input type="text" class="input input-page"><span lan="l1429" v="页"></span></li><li class="p-list"><a class="btn btn-gray-s btn-page goto" href="javascript:void(0);" op="goto"><span class="btn-r goto" op="goto" lan="l0441">' + CU.getDictNameByKey("l0441") + "</span></a></li></ul>"
    },
    displayPageNum: function() {
        for (var a = this, b = "", c = [], d = 4; d > 0; d--) a.getPageIndex() - d > 0 && c.push(a.getPageIndex() - d);
        c.push(a.getPageIndex());
        for (var e = c.length, d = 1; 5 > d; d++) a.getPageIndex() + d <= a.pageCount && c.push(a.getPageIndex() + d);
        var f = 0;
        if (3 >= e || e <= c.length / 2)
            for (var d = 1; d <= c.length && 5 >= d; d++) b += '<em class="default-num ' + (d == e ? "cur-num" : "") + '">' + c[d - 1] + "</em>";
        else if (c.length - e >= 2 || e >= c.length / 2)
            for (var d = c.length; d > 0 && 5 > f; d--) f++, b = '<em class="default-num ' + (d == e ? "cur-num" : "") + '">' + c[d - 1] + "</em>" + b;
        return b
    },
    htmlFormat: function(a) {
        var b = "";
        return b = "prev" == a ? "pre-sh" : "next-sh", "<" + this.panelFlag + ' class="' + b + " " + a + '" op="' + a + '"></' + this.panelFlag + ">"
    },
    pageIndexChange: function(a) {
        1 > a || a > this.pageCount || (this.setPageIndex(a), this.canvas.find("em.js-curindex").text(a), 1 == a ? this.canvas.find("a.prev").addClass("disabled") : this.canvas.find("a.prev").removeClass("disabled"), a == this.pageCount ? this.canvas.find("a.next").addClass("disabled") : this.canvas.find("a.next").removeClass("disabled"), this.canvas.find("input.input-page").val(""), this.callbackFn && this.callbackFn(a, this.point))
    },
    paramsCheck: function(a) {
        var b = "Parameter error!";
        if (0 !== a.pageCount) {
            if (!a.pageCount && (!a.canvas || !a.pageSize || void 0 === a.recordCount || a.recordCount < 0)) return alert(b), !1;
            if (0 !== a.recordCount) return !0
        }
    },
    paramsRefactoring: function(a) {
        var b = this;
        if (b.goToPage = a.goToPage || "", b.panelFlag = a.panelFlag || "span", b.callbackFn = a.callbackFn || void 0, a.pageIndex && this.setPageIndex(a.pageIndex), b.canvas = $(a.canvas).first(), b.point = a.point || null, b.autoCallback = a.autoCallback || null, b.recordCount = a.recordCount, b.pageSize = a.pageSize, b.pageCount = a.pageCount || parseInt((a.recordCount - 1) / a.pageSize + 1), b.pageCount < 1) return void(b.outputHtml = "");
        var c = "undefined" == typeof a.isShowPrevNext || a.isShowPrevNext;
        b.prevHtml = c ? this.htmlFormat("prev") : "", b.nextHtml = c ? this.htmlFormat("next") : "", a.showDownload && (b.showDownload = !0, b.downClick = a.downClick), a.showPrint && (b.showPrint = !0, b.printClick = a.printClick)
    },
    render: function() {
        var a = this;
        a.htmlCombine(), a.canvas.html(a.outputHtml), a.getPageIndex() > 1 ? (a.canvas.find("span.first").addClass("first-sh-g"), a.canvas.find("span.prev").addClass("pre-sh-g")) : (a.canvas.find("span.first").removeClass("first-sh-g"), a.canvas.find("span.prev").removeClass("pre-sh-g")), a.getPageIndex() < a.pageCount ? (a.canvas.find("span.last").addClass("last-sh-g"), a.canvas.find("span.next").addClass("next-sh-g")) : (a.canvas.find("span.last").removeClass("last-sh-g"), a.canvas.find("span.next").removeClass("next-sh-g")), a.showDownload && $('<a id="download" target="_blank" class="btn btn-gray-s btn-page ml5" href="javascript:void(0);"><span class="btn-r" lan="l0442" v="下载"></span></a>').on("click", function() {
            a.downClick && a.downClick($(this))
        }).appendTo(a.canvas.find("ul>li.p-list").last()), a.showPrint && $('<a id="listPrint" class="btn btn-gray-s btn-page ml5" href="javascript:void(0);"><span class="btn-r" lan="l0416" v="打印"></span></a>').on("click", function() {
            a.printClick && a.printClick()
        }).appendTo(a.canvas.find("ul>li.p-list").last()), 1 == a.pageCount && a.canvas.find(".prev").addClass("disabled"), 1 == a.getPageIndex() && 1 == a.pageCount && (a.canvas.find(".prev").addClass("disabled"), a.canvas.find(".btn-page[op=goto]").addClass("btn-disabled")), 1 == a.getPageIndex() && a.canvas.find(".prev").addClass("disabled"), a.getPageIndex() == a.pageCount && a.canvas.find(".next").addClass("disabled"), CU.changeLan(a.canvas)
    }
}, Pager.getInstance = function(a) {
    return new Pager.Entity(a)
}, Model.prototype.setCurrentIndex = function(a) {
    return a && (this.attributes.params.currentIndex = this.attributes.params.pageSize ? (a - 1) * this.attributes.params.pageSize : a), this
}, Model.migrate = {
    map: {
        PsnAccountQuery: {
            name: "a",
            args: [30, 1]
        },
        PsnAccountSigningProductQuery: {
            name: "a",
            args: [30, 1]
        },
        PsnAccountQueryForPaging: {
            name: "a",
            args: [25, 1]
        },
        PsnLinkAccProQuery: {
            name: "a",
            args: [25, 0]
        },
        PsnPackageQuery: {
            name: "a",
            args: [25, 0]
        },
        PsnXpadProgressQuery: {
            name: "b",
            args: [10, 0]
        },
        PsnVirtualVircardListQuery: {
            name: "b"
        },
        PsnXpadQueryGuarantyProductListResult: {
            name: "b"
        },
        PsnXpadSingleProductQuery: {
            name: "b"
        },
        PsnXpadTradStatus: {
            name: "b"
        },
        PsnOFAProdQueryByCode: {
            name: "b"
        },
        PsnOFAComBuyAndGenTrsQuery: {
            name: "b"
        },
        PsnBFTHistoryTransQueryResult: {
            name: "b"
        },
        PsnBFTRelationQueryResult: {
            name: "b"
        },
        PsnStockThirdTAQuery: {
            name: "b"
        },
        PsnStockThirdTransactionQuery: {
            name: "b"
        },
        PsnStockThirdResHisQueryList: {
            name: "b"
        },
        StockTQuerySingInfo: {
            name: "b"
        },
        StockTQueryTransferRecord: {
            name: "b"
        },
        PsnCashBankCompanyDetail: {
            name: "b"
        },
        PsnCashBankYieldsDetail: {
            name: "b"
        },
        PsnCrcdDividedPayHisQry: {
            name: "b"
        },
        PsnRegularToCurrentParamQuery: {
            name: "b"
        },
        PsnVFGBailProductQuery: {
            name: "b"
        },
        PsnVFGTradeInfoQuery: {
            name: "b"
        },
        PsnForexAllTransQuery: {
            name: "b"
        },
        PsnWealthDetailQuery: {
            name: "b"
        },
        PsnWealthTransRecordQuery: {
            name: "b"
        },
        PsnFundStatusDdTransQuery: {
            name: "b"
        },
        PsnEntrustTransQuery: {
            name: "b"
        },
        PsnHistoryTransQuery: {
            name: "b"
        },
        PsnPrepaidCardQueryReplenishmentList: {
            name: "b"
        },
        CheckSharedAccount: {
            name: "b"
        },
        PsnBatTransDetail: {
            name: "b"
        },
        PsnBatTransSumList: {
            name: "b"
        },
        PsnOcrsHistoryTransferQuery: {
            name: "b"
        },
        PsnTransActQueryPaymentOrderList: {
            name: "b"
        },
        PsnTransActQueryReminderOrderList: {
            name: "b"
        },
        PsnTransQueryExternalBankInfo: {
            name: "b"
        },
        RemitSetMealApply: {
            name: "b"
        },
        RemitSetMealApplyPre: {
            name: "b"
        },
        RemitSetMealCancel: {
            name: "b"
        },
        RemitSetMealCancelPre: {
            name: "b"
        },
        RemitSetMealModify: {
            name: "b"
        },
        RemitSetMealModifyPre: {
            name: "b"
        },
        RemitSetMealQuery: {
            name: "b"
        },
        PsnCrcdDividedPayConsumeQry: {
            name: "b"
        },
        PsnCrcdVirtualCardQuery: {
            name: "b"
        },
        PsnCrcdVirtualCardUnsettledbillQuery: {
            name: "b"
        },
        PsnBocExpressPaymentRecordQuery: {
            name: "b"
        },
        PsnEpayQueryAgreementPaySignRelation: {
            name: "b"
        },
        PsnEpayQueryAgreePaymentRecord: {
            name: "b"
        },
        PsnEpayQueryAllTypeRecord: {
            name: "b"
        },
        PsnInsuranceProductQuery: {
            name: "b"
        },
        PsnInsuranceSavedQuery: {
            name: "b"
        },
        PsnInternationalTransferTemplateQuery: {
            name: "b"
        },
        PsnXpadProductQuery: {
            name: "b",
            args: [!0]
        },
        StockTQueryCompanyList: {
            name: "b",
            args: [!0]
        },
        StockTQueryTransTime: {
            name: "b",
            args: [!0]
        },
        StockTQueryCompanyBalance: {
            name: "b",
            args: [!0]
        },
        StockTBanktoCompanyPre: {
            name: "b",
            args: [!0]
        },
        StockTBanktoCompany: {
            name: "b",
            args: [!0]
        },
        StockTCompanytoBank: {
            name: "b",
            args: [!0]
        },
        StockTSignPre: {
            name: "b",
            args: [!0]
        },
        StockTSign: {
            name: "b",
            args: [!0]
        },
        PsnFessQueryExchangeTrans: {
            name: "b",
            args: [!0]
        },
        PsnFundQueryTransOntran: {
            name: "b",
            args: [!0]
        },
        PsnInsuranceListQuery: {
            name: "b",
            args: [!0]
        },
        PsnInsuranceTradeQuery: {
            name: "b",
            args: [!0]
        },
        PsnProxyPaymentSignRelationQuery: {
            name: "b",
            args: [!0]
        },
        PsnProxyPaymentTransRecordsQuery: {
            name: "b",
            args: [!0]
        },
        PsnPasswordRemitFreeTranQuery: {
            name: "b",
            args: [!0]
        },
        RemitSetMealDetail: {
            name: "b",
            args: [!0]
        },
        PsnTransQueryTransferRecord: {
            name: "b",
            args: [!0]
        },
        PsnTrsWealthTransferOSListQry: {
            name: "b",
            args: [!0]
        },
        PsnEshopQueryHistoryOrder: {
            name: "b",
            args: [!0]
        },
        PsnEshopQueryNewOrder: {
            name: "b",
            args: [!0]
        },
        PsnSVRServiceRecQueryDetail: {
            name: "b",
            args: [!0]
        },
        PsnServiceLogQuery4Sme: {
            name: "b",
            args: [!0]
        },
        PsnFincHistoryQuery: {
            name: "b",
            args: [!0]
        },
        PsnFincTodayQuery: {
            name: "b",
            args: [!0]
        },
        PsnFundAttentionQueryList: {
            name: "b",
            args: [!0]
        },
        PsnFundQueryAppointDeal: {
            name: "b",
            args: [!0]
        },
        PsnFundQueryConsignStatus: {
            name: "b",
            args: [!0]
        },
        PsnFundQueryHistoryDetail: {
            name: "b",
            args: [!0]
        },
        PsnFundStatusDdApplyQuery: {
            name: "b",
            args: [!0]
        },
        PsnOFAProductQuery: {
            name: "b",
            args: [!0]
        },
        PsnCrcdQueryFutureBill: {
            name: "b",
            args: [!0]
        },
        PsnEpayQueryOnlinePaymentRecord: {
            name: "b",
            args: [!0]
        },
        PsnFundQueryTodayConsignStatus: {
            name: "b",
            args: [!0]
        },
        PsnFundCollectionparamQuery: {
            name: "b",
            args: [!0]
        },
        PsnEbpsTransferRecordQuery: {
            name: "b",
            args: [!1, !0]
        },
        PsnGoldTDQueryInstIdList: {
            name: "b",
            args: [!1, !0]
        },
        PsnGoldTDQueryConsign: {
            name: "b",
            args: [!1, !0]
        },
        PsnGoldTDCancelConsign: {
            name: "b",
            args: [!1, !0]
        },
        PsnGoldTDQueryTransfer: {
            name: "b",
            args: [!1, !0]
        },
        PsnAnnuityAccInfoList: {
            name: "b",
            args: [!1, !0]
        },
        PsnAnnuityQuery: {
            name: "b",
            args: [!1, !0]
        },
        PsnQueryBancInfo: {
            name: "b",
            args: [!0, !0]
        },
        PsnQueryCrcdBancInfo: {
            name: "b",
            args: [!0, !0]
        },
        PsnEbpsQueryAccountOfBank: {
            name: "b",
            args: [!0, !0]
        },
        PsnGoldTDQueryNotifyBill: {
            name: "b",
            args: [!0, !0]
        },
        PsnGoldStoreTransQuery: {
            name: "b",
            args: [!0, !0]
        },
        PsnGoldBonusTransferInfoQry: {
            name: "b",
            args: [!0, !0]
        },
        PsnTransPreRecordQuery: {
            name: "b",
            args: [!0, !0]
        },
        PsnCurrentToRegularParamQuery: {
            name: "b",
            args: [!1, !1, 1]
        },
        PsnFinanceICTransferDetail: {
            name: "c"
        },
        PsnEpayQueryFinancialPaymentRecord: {
            name: "d"
        },
        PsnxStructDepBuyListQuery: {
            name: "d"
        },
        PsnxStructDepPeriodBuyListQuery: {
            name: "d"
        },
        PsnCrcdQueryBilledTransDetail: {
            name: "e"
        },
        PsnInternationalTransferSwiftQuery: {
            name: "d"
        }
    },
    func: {
        a: function(a, b, c) {
            this.attributes.params || (this.attributes.params = {}), this.attributes.params.currentIndex = (a - 1) * b + c
        },
        b: function(a, b, c, d, e, f) {
            return this.attributes.params || (this.attributes.params = {}), f || (f = 0), b && (this.attributes.params.pageSize = d ? b + "" : b), e && "undefined" === c || (this.attributes.params._refresh = c ? "true" : "false"), this.attributes.params.currentIndex = d ? (a - 1) * this.attributes.params.pageSize + f + "" : (a - 1) * this.attributes.params.pageSize + f, this
        },
        c: function(a, b) {
            return this.attributes.params || (this.attributes.params = {}), b && (this.attributes.params.pageSize = b + ""), this.attributes.params.currentIndex = a + "", this
        },
        d: function(a, b, c) {
            return this.attributes.params || (this.attributes.params = {}), b && (this.attributes.params.pageSize = b), this.attributes.params._refresh = c ? "true" : "false", this.attributes.params.currentIndex = (a - 1) * this.attributes.params.pageSize + "", this
        },
        e: function(a, b, c) {
            return this.attributes.params || (this.attributes.params = {}), b && (this.attributes.params.lineNum = b + ""), this.attributes.params._refresh = c ? "true" : "false", this.attributes.params.currentIndex = (a - 1) * this.attributes.params.lineNum + "", this
        },
        f: function(a, b, c) {
            return this.attributes.params || (this.attributes.params = {}), b && (this.attributes.params.pageSize = b), this.attributes.params._refresh = c ? "true" : "false", this.attributes.params.currentIndex = a - 1, this
        }
    }
}, Model.prototype.findPage = function() {
    var a, b = Model.migrate.map[this.attributes.method],
        c = [],
        d = arguments.length;
    for ("b" === b.name && (d = 3), a = 0; d > a; a++) c[a] = arguments[a];
    return b && Model.migrate.func[b.name].apply(this, b.args ? c.concat(b.args) : c), this
};
var redirectErrorMap = {
    "validation.session_invalid": "l122266",
    "role.invalid_user": "l122267",
    "validation.resubmit_same_session": "l122268",
    "QA.authenticate.limit": "l122269",
    "smc.token.lock": "l122270",
    "smc.token.false.lock": "l122271",
    "smc.token.true.lock": "l122272",
    "otp.token.lock": "l122273",
    "otp.token.false.lock": "l122274",
    "otp.token.true.lock": "l122272"
};
Common.handleError = function(a) {
    if (a.code && a.code in redirectErrorMap) {
        var b = redirectErrorMap[a.code];
        "validation.session_invalid" === a.code && (b = a.message), window.top.location.href = (window.mainPath || "") + "logout.html?title=" + escape(b) + "&locale=" + localParam[lan] + ("validation.resubmit_same_session" === a.code || Common.basePath ? "&relogin=0" : "")
    } else Common.LightBox.showMessage(a.message || ("C" === lan ? "系统逻辑处理问题" : "System Logic Process Problem")), Common.Error.lastErrorCode = a.code
}, Common.getRequestHeader = function() {
    return $.extend({
        agent: "WEB15",
        version: "1.0",
        device: "",
        platform: "",
        plugins: "",
        page: "",
        local: localParam[lan],
        ext: ""
    }, Common.getDeviceAndSecInfo(), dataHeaderCipherType)
}, Common.request = function() {
    var a, b, c, d, e, f, g, h, i, j, k, l, m;
    if (0 === arguments.length) throw Error("Common.request: 需要参数");
    if (arguments[0] instanceof Model)
        for (k = 0, a = [], g = !0, h = !0, j = 0, l = arguments.length; l > j; j++)
            if (arguments[j] instanceof Model) a.push(arguments[j]);
            else {
                switch (k) {
                    case 0:
                        d = arguments[j];
                        break;
                    case 1:
                        e = arguments[j];
                        break;
                    case 2:
                        f = arguments[j]
                }
                k++
            }
    else c = arguments[0], a = c.models, d = c.success, e = c.fail, f = c.complete, g = !!c.showLoading, h = "undefined" == typeof c.dataHandle ? !0 : !!c.dataHandle;
    if (!a || 0 === a.length) throw Error("Common.request: models 为空");
    if (1 === a.length) b = a[0], i = {
        method: b.attributes.method,
        params: b.attributes.params
    }, dataHeaderCipherType = {}, i.params && (i.params.activ || i.params.devicePrint) && (isCipherTypeFlag(i), "0" === Common.cipherTypeFlag && (dataHeaderCipherType = {
        cipherType: "0"
    })), i.params || (i.params = {}), b.attributes.conversationId && (i.params.conversationId = b.attributes.conversationId);
    else
        for (i = {
                method: "CompositeAjax",
                params: {
                    methods: []
                }
            }, dataHeaderCipherType = {}, j = 0, l = a.length; l > j; j++) b = a[j], m = {
            method: b.attributes.method,
            params: b.attributes.params,
            header: Common.getRequestHeader()
        }, m.params && (m.params.activ || m.params.devicePrint) && (isCipherTypeFlag(m), "0" === Common.cipherTypeFlag && (dataHeaderCipherType = {
            cipherType: "0"
        })), m.params || (m.params = {}), b.attributes.conversationId && (m.params.conversationId = b.attributes.conversationId), i.params.methods.push(m);
    i.header = Common.getRequestHeader(), Common.isOvsRequestChangeAgent(i), $.ajax({
        url: urlPrefix + "_bfwajax.do?_locale=" + localParam[lan],
        type: "post",
        showLoading: g,
        data: "json=" + encodeURIComponent(JSON.stringify(i).replace(/"null"/g, '""')),
        dataType: "json",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        error: function() {
            Common.LightBox.hide(), Common.LightBox.showMessage(Common.Error.getMsgByCode("ajaxError"))
        }
    }).then(function(b) {
        if (b && b.hasOwnProperty("_isException_")) {
            if (b._isException_) h && Common.handleError(b), e && e(CU.Json.replaceNull(b));
            else if (1 === a.length) d && d(CU.Json.replaceNull(b.result));
            else {
                for (var c = [], g = 0, i = b.result.results.length; i > g; g++) {
                    var j = b.result.results[g];
                    j._isException_ ? (h && Common.handleError(j), c.push(j)) : c.push(j.result)
                }
                d && d(CU.Json.replaceNull(c))
            }
            f && f(CU.Json.replaceNull(b))
        } else Common.LightBox.showMessage(CU.getDictNameByKey("l101837")), Common.LightBox.hide()
    })
}, Common.isOvsRequestChangeAgent = function(a) {
    var b = ["OvsTransSwitch", "GlbAcctQueryCustProperty", "GlbAcctRegisterListQuery", "GlbAcctAllowableBranchQuery", "GlbAcctOvsCustInfoCheck", "GlbAcctOvsSecurityToolConfirm", "GlbAcctOvsMemberAcctListQry", "GlbAcctRegister", "GlbAcctUnregisterOnlyOneCheck", "GlbAcctUnregister", "GlbAcctServiceClose", "GlbAcctServiceLogQuery", "GlbAcctOvsBanlanceQuery", "GlbAcctHKBanlanceQuery", "GlbAcctMABanlanceQuery", "GlbAcctOvsTransDetailQry", "GlbAcctHKTransDetailQry", "GlbAcctMATransDetailQry", "GlbAcctOvsDbcdSubAcctListQry", "GlbAcctOvsDbcdNoAssoAcctBanlanceQry", "GlbAcctOvsDbcdHisListQry", "GlbAcctOvsGetSmc", "GlbAcctOvsGetValidCode", "OverseaGetRandomLoginPre"],
        c = ["GlbAcctOvsGetSmc", "GlbAcctOvsGetValidCode", "OverseaGetRandomLoginPre", "GlbAcctOvsCustInfoCheck", "GlbAcctOvsSecurityToolConfirm", "GlbAcctOvsMemberAcctListQry"];
    if ($.inArray(a.method, b) >= 0) {
        var d = "";
        d = $.inArray(a.method, c) >= 0 && Common.CUST_CHANNEL_TYPE ? "1" == Common.CUST_CHANNEL_TYPE ? "WEB20" : "O-IOS" : "WEB20", $.extend(a.header, {
            cipherType: "1",
            rsCipherType: "1",
            agent: d
        })
    }
}, Common.requestInterface = function(a, b, c) {
    var d = this,
        e = a.attributes.params,
        f = a.attributes.conversationId;
    d.request(a, b, function() {
        e && e.token ? d.creatToken(f, c) : c ? c() : Common.LightBox.hide()
    })
}, Common.creatToken = function(a, b) {
    this.requestInterface(new Model("PSNGetTokenId", a), b)
}, Common.getCurrentSystemDate = function(a) {
    this.requestInterface(new Model("PsnCommonQuerySystemDateTime"), function(b) {
        a && a(b.dateTme.substr(0, 10))
    })
}, Common.hideWarning = function(a) {
    a ? ($("div.info-tip").parent().hide(), a.find(".warning") && a.find(".warning").removeClass("warning").removeAttr("pass")) : ($("div.info-tip").parent().hide(), $(".warning").removeClass("warning").removeAttr("pass"))
}, lan = dojo.locale && "zh" == dojo.locale ? "C" : "E", Common.currencyChange = function(a, b, c, d, e, f, g, h) {
    var i = new Common.Hashtable,
        j = new Common.Hashtable,
        k = "",
        l = $(b),
        m = $(c),
        n = $(b + "," + c),
        o = $(e).attr("val");
    if (f ? f : f = "currencyCode", g ? g : g = "cashRemit", h ? h : h = "availableBalance", $.each(a || [], function(a, b) {
            "001" == b[f] && (k = b[h]), j.add(b[f] + "-" + b[g], b), i.contains(b[f]) ? (i.remove(b[f]), i.add(b[f], "all")) : i.add(b[f], b[g])
        }), n.on("click", function(a) {
            var b = $(e).attr("val"),
                c = j.item(b + "-" + $(a).val());
            d ? $(d).html(c[h].formatNum(b, !1, !0)) : ""
        }), "001" == o) return d ? $(d).html(k.formatNum("001", !1, !0)) : "", void n.attr("checked", !1).attr("disabled", "disabled").addClass("text-darkengray");
    var p = i.item(o);
    switch (p) {
        case "01":
            m.removeAttr("checked").attr("disabled", "disabled"), l.removeAttr("disabled").attr("checked", !0).trigger("click");
            break;
        case "02":
            l.removeAttr("checked").attr("disabled", "disabled"), m.removeAttr("disabled").attr("checked", !0).trigger("click");
            break;
        case "all":
            m.removeAttr("disabled").attr("checked", !1), l.removeAttr("disabled").attr("checked", !0).trigger("click");
            break;
        default:
            n.removeAttr("checked").attr("disabled", "disabled")
    }
}, String.prototype.formatFront = function() {
    var a = this.split("."),
        b = "";
    return b = a[0].formatNum("027", !1, !0), a[1] && (b += (Number("0." + a[1]) + "").substring(1)), b
}, Common.AMS = function(a, b) {
    var a = a + "";
    if (!a) return !1;
    var c = window.innerHeight,
        d = "";
    d = 800 > c || 800 == c ? 600 : c > 800 && 960 > c ? 800 : 960, Common.request({
        models: [new Model("PsnQueryTransActivityStatus", {
            transactionId: a,
            tranType: b
        })],
        dataHandle: !1,
        showLoading: !1,
        success: function(b) {
            var c = "";
            if ($.each($(".border-box"), function(a, b) {
                    $(b).hasClass("hide") || (c = $(b))
                }), c || $.each($(".layout-title"), function(a, b) {
                    $(b).hasClass("hide") || (c = $(b))
                }), b.actyList.length > 0) {
                var e = b.actyList[0];
                if (e.actyPicUrl) {
                    var f = b.customerId + "|" + b.cifNumber + "|1|" + b.ownerIbkNum + "|" + a + "|" + b.firstSubmitDate + "|" + b.serviceId + "|" + b.amount + "|" + b.actType,
                        g = $("<div class='tac'></div>"),
                        h = $("<a></a>"),
                        i = $("<img >"),
                        j = $("<form target='amsb' method='post'></form>"),
                        k = "<input style='display:none' name='channel' value='1'>",
                        l = "<input style='display:none' name='tokenCode' value='" + b.ticketInfo + "'>",
                        m = "<input style='display:none' name='ticketMsg' value='" + f + "'>",
                        n = "<input style='display:none' name='actyId' value='" + e.actyId + "'>";
                    j.attr({
                        id: "form" + e.actyId,
                        action: b.actyUrl
                    }).append(k).append(l).append(m).append(n), i.attr({
                        src: e.actyPicUrl,
                        alt: e.actyName,
                        actyId: e.actyId
                    }), h.append(i.targets[0]), g.append(h.targets[0]), c.append(g.targets[0]).append(j.targets[0]), j.on("submit", function() {
                        window.open("about:blank", "amsb", "resizeable=no,scrollbars=no,height=" + d + "px,width=" + d + "px,left=" + (window.screen.width - d) / 2 + "px,top=" + (window.screen.availHeight - d) / 2 + "px,location=0,menubar=no,status=no,titlebar=no", "")
                    }), i.on("click", function() {
                        j.trigger("submit")
                    })
                }
            }
        }
    })
}, Common.openKLineChart = function(a, b, c) {
    if (a) {
        var d = window.innerHeight,
            e = "";
        e = 800 > d || 800 == d ? 600 : d > 800 && 960 > d ? 800 : 960, a && a.parent() && a.parent().targets.length && a.parent().off("click").on("click", function() {
            var a = $(this).children().eq(0),
                d = a.attr("vt") ? a.attr("vt") : c,
                f = a.attr("curr1"),
                g = a.attr("curr2"),
                h = escape(CU.getDictNameByKey("currency_type_" + f)),
                i = escape(CU.getDictNameByKey("currency_type_" + g)),
                j = escape(CU.getDictNameByKey("F" == d ? "l0039" : "l0041")),
                k = "resizable=yes,scrollbars=yes,height=750px,width=950px,left=" + (window.screen.width - e) / 2 + "px,top=" + (window.screen.availHeight - e) / 2 + "px,location=no,menubar=no,status=no,titlebar=yes,depended=yes",
                l = "kline/index.html?cc1=" + f + "&cc2=" + g + "&c1=" + h + "&c2=" + i + "&th=" + b + "&cn=" + j + "&ct=" + d;
            window.popwin && !window.popwin.closed ? (window.popwin.location = l, window.popwin.focus()) : window.popwin = window.open(l, "kline", k, "")
        })
    }
}, Common.askIconTips = function(a) {
    $(".ask-icon").off("mouseover").on("mouseover", function() {
        var b = a.el.find(".tips-radius");
        a._el_width || (a._el_width = b.width()), b.attr("hasBindEvent") || (b.on("mouseout", function() {
            var b = this;
            clearTimeout(a.askIconTimeout), $(b).hide()
        }), b.on("mouseover", function() {
            $(this).show()
        }), b.attr("hasBindEvent", !0));
        var c = 0,
            d = 0;
        document.documentElement && document.documentElement.scrollTop ? (c = document.documentElement.scrollTop, d = document.documentElement.scrollLeft) : document.body && (c = document.body.scrollTop, d = document.body.scrollLeft);
        var e = $(this).position().left - d + 30,
            f = $(this).position().top - $(this).height() / 2 + c - 17;
        a.el.append(b.css({
            left: e + "px",
            top: f + "px",
            position: "absolute"
        }).show()), a.el.find("a.tips-close").on("click", function() {
            $(this).parent().hide()
        }), clearInterval(a.askIconTimeout)
    }).off("mouseout").on("mouseout", function() {
        a.askIconTimeout = setTimeout(function() {
            a.el.find(".tips-radius").hide()
        }, 1e3)
    })
}, Common.hkMacaoResidentsValidation = function(a, b) {
    if ($(a).targets.length) {
        var c = $(a).attr("tips"),
            d = $(a).attr("validateGroup"),
            e = $(a).attr("maxLength"),
            f = $(a).attr("minLength");
        switch (b) {
            case "96":
                $(a).attr({
                    tips: "tips0956",
                    validateGroup: "{required:true,reg353:true}",
                    maxLength: 18,
                    minLength: 18
                });
                break;
            case "97":
                $(a).attr({
                    tips: "tips0957",
                    validateGroup: "{required:true,reg354:true}",
                    maxLength: 18,
                    minLength: 18
                });
                break;
            case "98":
                $(a).attr({
                    tips: "tips0958",
                    validateGroup: "{required:true,reg355:true}",
                    maxLength: 18,
                    minLength: 18
                });
                break;
            default:
                $(a).attr({
                    tips: c,
                    validateGroup: d,
                    maxLength: e,
                    minLength: f
                })
        }
    }
}, Common.userInfoCheck = function(a) {
    var b = this,
        c = Common.currentUser,
        d = function() {
            Common.triggerAction("PersonalInformation"), Common.disableMenuClickEvent = !0
        },
        e = function(a) {
            Common.LightBox.show(), Common.requestInterface(new Model("PSNCreatConversation"), function(b) {
                Common.requestInterface(CU.createTokenId(b), function(c) {
                    Common.requestInterface(new Model("PsnMaintenExempDate", {
                        token: c
                    }, b), function() {
                        Common.LightBox.hide(), a && a()
                    })
                })
            })
        },
        f = function() {
            $("#a_59_1168").trigger("click")
        },
        g = function(e) {
            if (1 == c.isCustIsolate) {
                var g = 1 * c.illegalField.substring(0, 1) + 1 * c.illegalField.substring(7, 8) + 1 * c.illegalField.substring(9, 11),
                    h = 1 * c.illegalField.substring(1, 7) + 1 * c.illegalField.substring(8, 9) + 1 * c.illegalField.substring(11, 17);
                0 == g && h > 0 && ("3" == c.identityExpType || "1" == c.identityExpType) ? Common.LightBox.showCallbackMessage({
                    messageLan: "l134419",
                    conLan: "l134266",
                    celLan: "l134267",
                    point: b,
                    conFlag: !0,
                    flag: !0,
                    hideClose: !0
                }, function() {
                    d()
                }, function() {
                    f()
                }) : Common.LightBox.showCallbackMessage({
                    messageLan: "l134418",
                    conLan: "l134260",
                    point: b,
                    conFlag: !0,
                    flag: !1,
                    hideClose: !0
                }, function() {
                    f()
                })
            } else e && e(a)
        },
        h = function(a) {
            var g = month = date = "";
            "2100-12-31" != c.dueDate && (g = c.dueDate.substring(0, 4), month = c.dueDate.substring(5, 7), date = c.dueDate.substring(8, 10));
            var h = "0",
                i = "0",
                j = "",
                k = "";
            "1" == c.identityExpType ? h = "1" : "2" == c.identityExpType ? (h = "1", i = "1") : "4" == c.identityExpType && (h = "1", i = "2"), "1" == c.isOverdue && (j = "1"), c.promptMould && (k = c.promptMould);
            var l = [{
                    keyStr: "0011*",
                    deal: "updateExit"
                }, {
                    keyStr: "2*11*",
                    deal: "updateExit"
                }, {
                    keyStr: "0002*",
                    deal: "get"
                }, {
                    keyStr: "2*02*",
                    deal: "get"
                }, {
                    keyStr: "0012*",
                    deal: "update"
                }, {
                    keyStr: "2*12*",
                    deal: "update"
                }, {
                    keyStr: "0111*",
                    deal: "updateExit"
                }, {
                    keyStr: "0211*",
                    deal: "updateExit"
                }, {
                    keyStr: "0112*",
                    deal: "update"
                }, {
                    keyStr: "0102*",
                    deal: "get"
                }, {
                    keyStr: "0110*",
                    deal: "update"
                }, {
                    keyStr: "01000",
                    deal: "get"
                }, {
                    keyStr: "1*000",
                    deal: "exit"
                }, {
                    keyStr: "2*000",
                    deal: "get"
                }, {
                    keyStr: "00001",
                    deal: "confirm"
                }, {
                    keyStr: "1*11*",
                    deal: "exit"
                }, {
                    keyStr: "1*21*",
                    deal: "exit"
                }, {
                    keyStr: "1*02*",
                    deal: "exit"
                }, {
                    keyStr: "1*10*",
                    deal: "exit"
                }, {
                    keyStr: "1*20*",
                    deal: "exit"
                }, {
                    keyStr: "1*12*",
                    deal: "exit"
                }, {
                    keyStr: "1*22*",
                    deal: "exit"
                }, {
                    keyStr: "01001",
                    deal: "get"
                }, {
                    keyStr: "1*001",
                    deal: "exit"
                }, {
                    keyStr: "2*10*",
                    deal: "update"
                }, {
                    keyStr: "2*001",
                    deal: "get"
                }, {
                    keyStr: "0010*",
                    deal: "update"
                }, {
                    keyStr: "0020*",
                    deal: "update"
                }, {
                    keyStr: "1*01*",
                    deal: "exit"
                }, {
                    keyStr: "0*01*",
                    deal: "exit"
                }, {
                    keyStr: "2*01*",
                    deal: "exit"
                }],
                m = function(c) {
                    switch (c) {
                        case "updateExit":
                            Common.LightBox.showCallbackMessage({
                                message: k,
                                conLan: "l134266",
                                celLan: "l134267",
                                point: b,
                                conFlag: !0,
                                flag: !0,
                                hideClose: !0
                            }, function() {
                                d()
                            }, function() {
                                f()
                            });
                            break;
                        case "get":
                            Common.LightBox.showCallbackMessage({
                                message: k,
                                conLan: "l134259",
                                point: b,
                                conFlag: !0,
                                hideClose: !0
                            }, function() {
                                a && a()
                            });
                            break;
                        case "update":
                            Common.LightBox.showCallbackMessage({
                                message: k,
                                conLan: "l134266",
                                celLan: "l134272",
                                point: b,
                                conFlag: !0,
                                flag: !0,
                                hideClose: !0
                            }, function() {
                                d()
                            }, function() {
                                e(function() {
                                    a && a()
                                })
                            });
                            break;
                        case "confirm":
                            Common.LightBox.showCallbackMessage({
                                message: k,
                                conLan: "l134262",
                                celLan: "l134263",
                                point: b,
                                conFlag: !0,
                                flag: !0,
                                hideClose: !0
                            }, function() {
                                d()
                            }, function() {
                                a && a()
                            });
                            break;
                        case "exit":
                            Common.LightBox.showCallbackMessage({
                                message: k,
                                conLan: "l134260",
                                point: b,
                                conFlag: !0,
                                flag: !1,
                                hideClose: !0
                            }, function() {
                                f()
                            });
                            break;
                        default:
                            a && a()
                    }
                },
                n = function(b) {
                    for (var c = 0; c < l.length; c++) {
                        var d = new RegExp("^" + l[c].keyStr.replace(/\*/g, "\\d") + "$");
                        if (d.test(b)) return m(l[c].deal), !0
                    }
                    a && a()
                },
                o = i + h + c.isCustTips + c.isCustReject + c.isOverdue,
                p = h + i + c.isCustTips + c.isCustReject + j;
            k = k + "(" + p + ")", n(o)
        };
    g(h)
}, Common.bookEntryTBondCheck = function(a, b, c) {
    var d = this,
        e = {
            bookEntryTBondProtocol: "templates/nationalDebt/deptAccount/bookEntryTBondProtocol.ejs",
            bookEntryTBondProtocolPopup: "templates/nationalDebt/deptAccount/bookEntryTBondProtocolPopup.ejs"
        };
    Common.LightBox.show(), Common.requestInterface(new Model("PsnBondSignQuery"), function(f) {
        Common.LightBox.hide(), "Y" == f.overdueFlag ? Common.LightBox.showCallbackMessage({
            messageLan: "l134748",
            conLan: "l134744",
            point: d,
            conFlag: !0,
            flag: !0,
            hideClose: !1
        }, function() {
            Common.LightBox.show(), Common.requestInterface(new Model("PSNCreatConversation"), function(f) {
                Common.requestInterface(new Model("PsnSVRPsnInfoQry", f), function(g) {
                    d.el.append(e.bookEntryTBondProtocolPopup, null, function() {
                        $("#bookEntryTBondProtocol").html(e.bookEntryTBondProtocol, g, function() {
                            var d = $("#bookEntryTBondProtocolPopup");
                            d.css("z-index", Common.LightBox.getZIndex() + 1 + ""), $("#btn_cancel_book_protocol,#bookEntryTBondProtocolPopup .close").on("click", function() {
                                d.remove(), Common.LightBox.hide()
                            }), Common.checkReadAgreement("#cb_yes_109286_1", "#tips_id_19010004", "#btn_conf_book_protocol", function() {
                                Common.requestInterface(CU.createTokenId(f), function(e) {
                                    Common.requestInterface(new Model("PsnBondSign", {
                                        token: e
                                    }, f), function() {
                                        d.remove(), Common.LightBox.hide(), a && a(b, c)
                                    }, function() {
                                        d.remove(), Common.LightBox.hide()
                                    })
                                })
                            }), CU.changeLan(d), CU.setObjAbsCenter(d)
                        })
                    })
                })
            })
        }) : a && a(b, c)
    })
};
var isSupportRRweb = function() {
    var a;
    a = navigator.userAgent.indexOf("Edge") > -1 ? !1 : window.ActiveXObject || "ActiveXObject" in window ? !0 : !1;
    var b = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    return !a && !!b && "function" == typeof rrwebRecord
};
Common.qrCode = function(a, b, c) {
    var d = new QRCode(a, b);
    d.makeCode("http://wpsn.com/mobileToPC?keyData=" + c), $("#" + a).css("margin-left", $("#" + a).parent().css("width") / 2 - 100 + "px")
}, Common.queryFaceVerifyResult = function(a, b) {
    var c = this;
    Common.LightBox.show(), Common.postRequest(new Model("PsnTranFaceVerifyResultQry", {
        qrCode: c.qrCodeInfo
    }, c.conversationId)).then(function(c) {
        var d = CU.ajaxDataHandle(c);
        d ? "Y" == d.passOrNot ? (a && a(), Common.LightBox.hide()) : (Common.LightBox.hide(), Common.LightBox.showCallbackMessage({
            messageLan: "N212",
            point: b
        }, function() {
            Common.LightBox.getZIndex() > 2 * $(".pop-con:visible").length + 6 && Common.LightBox.hide()
        })) : (Common.LightBox.hide(), Common.LightBox.getZIndex() > 2 * $(".pop-con:visible").length + 6 && Common.LightBox.hide())
    })
}, Common.initiatePreTransFun = function(a, b) {
    var c = this;
    Common.LightBox.show(), preTransModelFun = function(a) {
        Common.postRequest(a).then(function(a) {
            var d = CU.ajaxDataHandle(a);
            d ? (Common.qrCode("div_qrCode", {
                width: 200,
                height: 200
            }, d.qrCode), c.qrCodeInfo = d.qrCode, Common.countDownFun(b), Common.LightBox.hide()) : Common.LightBox.hide()
        })
    };
    var d = ["token", "_token", "tokenId", "_tokenId"],
        e = !1,
        f = "";
    $.each(d, function(b, c) {
        a.attributes.params[c] && (e = !0, f = c)
    }), e ? Common.postRequest(CU.createTokenId(c.conversationId)).then(function(b) {
        var c = CU.ajaxDataHandle(b);
        c ? (a.attributes.params[f] = c, preTransModelFun(a)) : Common.LightBox.hide()
    }) : preTransModelFun(a)
}, Common.qrCodeFun = function(a, b, c, d, e) {
    var f = this;
    f.conversationId = c, f.qrCodeInfo = b, Common.LightBox.show(), a.el.append("templates/common/qrCode/qrCodePage.ejs", function() {
        var c = a.el.find("#div_qrCodePage");
        c.css("zIndex", "+=2"), CU.changeLan(c), CU.setObjAbsCenter(c), Common.qrCode("div_qrCode", {
            width: 200,
            height: 200
        }, b), Common.countDownFun(c), c.find("#btn_qrCodePageRefer").off("click").on("click", function(a) {
            Common.stopBubble(a), c.find("#div_qrCode").html(""), clearInterval(f.count_down), f.count_down = null, Common.initiatePreTransFun(d, c)
        }), c.find("#btn_qrCodeQueryFaceVerifyResult").off("click").on("click", function(b) {
            Common.stopBubble(b), c.remove(), Common.LightBox.hide(), clearInterval(f.count_down), f.count_down = null, Common.queryFaceVerifyResult(e, a)
        }), c.find(".close,#btn_qrCodeCancle").off("click").on("click", function(a) {
            Common.stopBubble(a), c.remove(), Common.LightBox.hide(), clearInterval(f.count_down), f.count_down = null, Common.LightBox.getZIndex() > 2 * $(".pop-con:visible").length + 6 && Common.LightBox.hide()
        })
    })
}, Common.countDownFun = function(a) {
    var b = this,
        c = 10,
        d = 0,
        e = a.find("#txt_count_down_14171");
    e.text("10:00"), a.find("#div_qrCode_effective").show(), a.find("#div_qrCode_invalid").hide(), b.count_down = setInterval(function() {
        return 0 == c && 0 == d ? (a.find("#div_qrCode_effective").hide(), a.find("#div_qrCode_invalid").show(), clearInterval(b.count_down), void(b.count_down = null)) : (0 == d && 0 != c && (c -= 1, d = 60), d--, void e.text("0" + c + ":" + (d > 9 ? d : "0" + d)))
    }, 1e3)
}, Common.replaceElement = function(a, b) {
    if (b && b.length > 0) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c];
            a = a.replace(d.reg, d.txt)
        }
        return a
    }
};