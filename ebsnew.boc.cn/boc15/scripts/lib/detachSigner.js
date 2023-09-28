/*! BUILD: 2020-11-30 */
Common.Signer = {
    defaults: {},
    init: function(a) {
        a = $.extend({}, this.defaults, a), this.container = a.container || $("<div/>").appendTo(document.body), dojo.place(this._createSignObj(), this.container.get(0))
    },
    doDetachSign: function(a, b, c) {
        var d, e, f, g;
        if (!c) return Common.LightBox.showMessage(CU.getDictNameByKey("l8966")), {
            result: null,
            error: {
                code: "001",
                message: CU.getDictNameByKey("l8966")
            }
        };
        if (a = a || "cn=955660A020190121,ou=Individual2,ou=BOC-TPC,o=CFCA TEST CA,c=cn", b = b || "", d = this._signValidate(a, b), d.error) return {
            result: null,
            error: d.error
        };
        try {
            if (e = this.signObj.DetachSignStr(a, c), f = this.signObj.GetErrorCode(), 0 !== f) return g = this.signObj.GetErrorMessage(f), Common.LightBox.showMessage(CU.getDictNameByKey("l8967") + " " + g), {
                result: null,
                error: {
                    code: f,
                    message: g
                }
            }
        } catch (h) {
            return Common.LightBox.showMessage(CU.getDictNameByKey("l8968")), {
                result: null,
                error: h
            }
        }
        return {
            result: e,
            error: null
        }
    },
    _createSignObj: function() {
        var a;
        return $.browser.msie || $.browser.mozilla && 5 == $.browser.version ? (a = dojo.create("object"), dojo.attr(a, "classid", "clsid:8BBD6F34-9815-4208-B375-30EEE148D8FF"), dojo.attr(a, "codebase", "resources/controlerinstall/JITDSign.cab"), dojo.attr(a, "id", "jitsigntk")) : (a = document.createElement("embed"), a.id = "jitsigntk", a.type = "application/x-jit-sign-plugin-boc", a.style.width = "0px", a.style.height = "0px"), a
    },
    _signValidate: function(a, b) {
        var c, d, e, f = {
            error: null
        };
        this.signObj = document.getElementById("jitsigntk");
        try {
            if (e = this._getSignAlgorithm(), this.signObj.SetAlgorithm(e, ""), this.signObj.SetCertChooseType(1), this.signObj.SetCert("SC", a, "", "", b, ""), c = this.signObj.GetErrorCode(), 0 !== c && (d = this.signObj.GetErrorMessage(c), Common.LightBox.showMessage(CU.getDictNameByKey("l9022") + c + CU.getDictNameByKey("l9023") + d + CU.getDictNameByKey("l9025")), f.error = {
                    code: c,
                    message: d
                }), !($.browser.msie || $.browser.mozilla && 5 == $.browser.version)) try {
                this.signObj.Initialize('<?xml version="1.0" encoding="utf-8"?><authinfo><liblist><lib type="CSP" version="1.0" dllname="" ><algid val="SHA256" sm2_hashalg="SHA1"/></lib><lib type="SKF" version="1.1" dllname="SERfR01DQUlTLmRsbA==" ><algid val="SHA256" sm2_hashalg="SM3"/></lib><lib type="SKF" version="1.1" dllname="U2h1dHRsZUNzcDExXzMwMDBHTS5kbGw=" ><algid val="SHA256" sm2_hashalg="SM3"/></lib><lib type="SKF" version="1.1" dllname="U0tGQVBJLmRsbA==" ><algid val="SHA256" sm2_hashalg="SM3"/></lib></liblist></authinfo>')
            } catch (g) {
                return Common.LightBox.showMessage(CU.getDictNameByKey("l8968")), f.error = g, f
            }
        } catch (g) {
            try {
                d = this.signObj.GetErrorMessage(), Common.LightBox.showMessage(CU.getDictNameByKey("l8967") + " " + d)
            } catch (h) {
                Common.LightBox.showMessage(CU.getDictNameByKey("l8968"))
            }
            f.error = g
        }
        return f
    },
    _getSignAlgorithm: function() {
        var algorithem = "SHA256",
            m = {
                id: null,
                method: "PsnCommonQueryOprLoginInfo",
                conversationId: null,
                params: {
                    fieldList: ["keyAlg"]
                }
            },
            arr = [];
        return m.id = Common.getIdentityId(), arr.push(m), $.ajax({
            url: dataPostURL + "?_locale=" + localParam[lan],
            type: "post",
            showLoading: !0,
            data: JSON.stringify(Common.getCommPostParam(arr)).replace(/"null"/g, '""') || eval("(" + Common.getCommPostParam(arr) + ")"),
            dataType: "json",
            headers: {
                "bfw-ctrl": "json"
            },
            contentType: "text/json;",
            async: !0,
            error: function() {
                Common.LightBox.showMessage(Common.Error.getMsgByCode("ajaxError"))
            }
        }).then(function(a) {
            var b = CU.ajaxDataHandle(a);
            b && (algorithem = "RSA" === b.keyAlg ? "SHA256" : "SM3")
        }), algorithem
    },
    isKeyPullOut: function() {
        var a, b, c = {
            error: null
        };
        this.signObj = document.getElementById("jitsigntk");
        try {
            $.browser.msie || $.browser.mozilla && 5 == $.browser.version || (a = '<?xml version="1.0" encoding="utf-8"?><authinfo><liblist><lib type="CSP" version="1.0" dllname="" ><algid val="SHA256" sm2_hashalg="SHA1"/></lib><lib type="SKF" version="1.1" dllname="SERfR01DQUlTLmRsbA==" ><algid val="SHA256" sm2_hashalg="SM3"/></lib><lib type="SKF" version="1.1" dllname="U2h1dHRsZUNzcDExXzMwMDBHTS5kbGw=" ><algid val="SHA256" sm2_hashalg="SM3"/></lib><lib type="SKF" version="1.1" dllname="U0tGQVBJLmRsbA==" ><algid val="SHA256" sm2_hashalg="SM3"/></lib></liblist></authinfo>', this.signObj.Initialize(a)), this.signObj.SetCertChooseType(1), b = this.signObj.SetCert("SC", "95566", "", "", "", ""), 0 != this.signObj.GetErrorCode() && (c = {
                error: {
                    code: this.signObj.GetErrorCode(),
                    message: this.signObj.GetErrorMessage(this.signObj.GetErrorCode())
                }
            })
        } catch (d) {
            c = {
                error: "未装控件或未找到证书"
            }
        }
        return c
    }
};