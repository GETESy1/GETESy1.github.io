/*! BUILD: 2018-10-19 */
$.fn.extend({
    sec: function(a, b) {
        "use strict";
        var c, d, e, f, g = {
                width: 200,
                height: 22,
                mode: 0,
                RandomKey_S: "",
                required: !0
            },
            h = [{
                PasswordIntensityMinLength: 8,
                MaxLength: 20,
                OutputValueType: 2,
                PasswordIntensityRegularExpression: "^[a-zA-Z0-9]*$",
                reg: "reg9",
                tips: "tips0239"
            }, {
                PasswordIntensityMinLength: 8,
                MaxLength: 20,
                OutputValueType: 2,
                PasswordIntensityRegularExpression: "(^[!-~]*[A-Za-z]+[!-~]*[0-9]+[!-~]*$)|(^[!-~]*[0-9]+[!-~]*[A-Za-z]+[!-~]*$)",
                reg: "reg27",
                tips: "tips0239"
            }, {
                PasswordIntensityMinLength: 6,
                MaxLength: 6,
                OutputValueType: 1,
                PasswordIntensityRegularExpression: "^[0-9]{6}$",
                reg: "reg57",
                tips: "tips0266"
            }, {
                PasswordIntensityMinLength: 6,
                MaxLength: 6,
                OutputValueType: 1,
                PasswordIntensityRegularExpression: "^[0-9]{6}$",
                reg: "reg57",
                tips: "tips0266"
            }, {
                PasswordIntensityMinLength: 8,
                MaxLength: 20,
                OutputValueType: 1,
                PasswordIntensityRegularExpression: "^[!-~]*$",
                reg: "reg27",
                tips: "tips0239"
            }, {
                PasswordIntensityMinLength: 3,
                MaxLength: 3,
                OutputValueType: 1,
                PasswordIntensityRegularExpression: "^[0-9]{3}$",
                reg: "reg57",
                tips: "tips0266"
            }, {
                PasswordIntensityMinLength: 8,
                MaxLength: 20,
                OutputValueType: 2,
                PasswordIntensityRegularExpression: "^[^＀-￿]*$",
                reg: "reg27",
                tips: "tips0239"
            }, {
                PasswordIntensityMinLength: 6,
                MaxLength: 6,
                OutputValueType: 1,
                PasswordIntensityRegularExpression: "^[0-9]{6}$",
                reg: "reg57",
                tips: "tips0266"
            }, {
                PasswordIntensityMinLength: 6,
                MaxLength: 6,
                OutputValueType: 2,
                PasswordIntensityRegularExpression: "^[0-9]{6}$",
                reg: "reg57",
                tips: "tips0266"
            }, {
                PasswordIntensityMinLength: 8,
                MaxLength: 20,
                OutputValueType: 2,
                PasswordIntensityRegularExpression: "((?=^[0-9a-zA-Z~!@#$%^&*()_+-=[]{}\\|;':\",.<>/?]{8,20}$)((?=.*[0-9])(?=.*[a-zA-Z])|(?=.*[~!@#$%^&*()_+-=[]{}\\|;':\",.<>/?])(?=.*[a-zA-Z])|(?=.*[0-9])(?=.*[~!@#$%^&*()_+-=[]{}\\|;':\",.<>/?])).*$)",
                reg: "reg114",
                tips: "tips0319"
            }, {
                PasswordIntensityMinLength: 6,
                MaxLength: 20,
                OutputValueType: 2,
                PasswordIntensityRegularExpression: "^[!-~]*$",
                reg: "reg27",
                tips: "tips0239"
            }, {
                PasswordIntensityMinLength: 8,
                MaxLength: 20,
                OutputValueType: 2,
                PasswordIntensityRegularExpression: "(^[!-~]*[A-Za-z]+[!-~]*[0-9]+[!-~]*$)|(^[!-~]*[0-9]+[!-~]*[A-Za-z]+[!-~]*$)",
                reg: "reg114",
                tips: "tips0319"
            }, {
                PasswordIntensityMinLength: 8,
                MaxLength: 20,
                OutputValueType: 1,
                PasswordIntensityRegularExpression: "^[!-~]*[a-zA-Z0-9]+[!-~]*$",
                reg: "reg144",
                tips: "tips0541"
            }, {
                PasswordIntensityMinLength: 6,
                MaxLength: 6,
                OutputValueType: 1,
                PasswordIntensityRegularExpression: "^[0-9]{6}$",
                reg: "reg57",
                tips: "tips0266"
            }, {
                PasswordIntensityMinLength: 8,
                MaxLength: 8,
                OutputValueType: 1,
                PasswordIntensityRegularExpression: "^[0-9]{8}$",
                reg: "reg57",
                tips: "tips0266"
            }, {
                PasswordIntensityMinLength: 10,
                MaxLength: 10,
                OutputValueType: 1,
                PasswordIntensityRegularExpression: "^[0-9]{10}$",
                reg: "reg57",
                tips: "tips0266"
            }, {
                PasswordIntensityMinLength: 11,
                MaxLength: 11,
                OutputValueType: 1,
                PasswordIntensityRegularExpression: "^[0-9]{11}$",
                reg: "reg57",
                tips: "tips0266"
            }],
            i = "SecEditCtrl";
        if ($.browser.chrome && $.browser.version >= 42) {
            if ("string" == typeof a) {
                var a = a.toLowerCase(),
                    j = "";
                if ("clear" === a) return this.each(function(a, b) {
                    $(b).removeClass("warning").removeAttr("pass"), $(b).data("secH5").clearInputValue()
                });
                var k = this.data("secH5");
                switch (a) {
                    case "randomkey_c":
                        var l = k.getEncryptedClientRandom(),
                            m = k.getErrorCode("input_" + $(this).attr("id")).toString(16);
                        m != CFCA_OK ? console.warn("加密客户端随机数错误: 0x" + m) : j = l;
                        break;
                    case "value":
                        var n = k.getEncryptedInputValue(),
                            m = k.getErrorCode("input_" + $(this).attr("id")).toString(16);
                        m != CFCA_OK ? console.warn("加密输入数据错误: 0x" + m) : j = n;
                        break;
                    case "passwordlengthintensity":
                        var o = $("#input_" + $(this).attr("id")).val().length,
                            p = k.getMaxLength(),
                            q = k.getMinLength();
                        j = o >= q && p >= o;
                        break;
                    case "passwordcomplexintensity":
                        var n = k.getEncryptedInputValue(),
                            r = k.checkMatchRegex();
                        j = "false" != $(this).attr("required") || n ? r && !!n : r;
                        break;
                    case "version":
                        j = getCFCASIPInputVersion();
                        break;
                    case "checkmatchvalue":
                        j = k.checkInputValueMatch($(b).data("secH5"))
                }
                return j
            }
            return c = $.extend({}, g, a), $.extend(c, h[c.mode]), this.each(function() {
                var b = $('<input id="input_' + $(this).attr("id") + '" type="text" oncopy="return false;" onpaste="return false;" oncut="return false;" style="border:none;width:' + (c.width - 8) + "px;height:" + (c.height - 6) + 'px;padding:2px 3px;background:#fff;"/>');
                $(this).empty().addClass(i).css({
                    width: c.width - 2 + "px",
                    height: c.height - 2 + "px",
                    border: "1px solid #ccc"
                }).attr({
                    tips: "tipsrequired tipsmax tipsmin " + c.tips,
                    validateGroup: "{required:true,maxLength:" + c.MaxLength + ",minLength:" + c.PasswordIntensityMinLength + "," + c.reg + ":true}",
                    required: "" + c.required
                }).append(b), b.on("focus", function() {
                    $(this).attr("type", "password")
                });
                var d = new CFCASIPInput(b.get(0));
                a || (c.RandomKey_S = "MgS0eef5nobU0zI170uerw=="), CFCA_OK != d.setMinLength(parseInt(c.PasswordIntensityMinLength)) && console.warn("setMinLength error"), CFCA_OK != d.setMaxLength(parseInt(c.MaxLength)) && console.warn("setMaxLength error"), CFCA_OK != d.setOutputType(c.OutputValueType) && console.warn("setOutputType error"), CFCA_OK != d.setServerRandom(c.RandomKey_S) && console.warn("setServerRandom error"), CFCA_OK != d.setCipherType(CIPHER_TYPE_SM2) && console.warn("setCipherType error"), CFCA_OK != d.setMatchRegex(c.PasswordIntensityRegularExpression) && console.warn("setMatchRegex error"), $(this).data("secH5", d)
            })
        }
        if ("string" == typeof a) try {
            if (d = $(this).children().get(0), "clear" === a.toLowerCase()) return this.each(function(a, b) {
                $(b).removeClass("warning").removeAttr("pass").children().get(0).Clear()
            });
            if ("RandomKey_C" === a) return $.browser.msie ? $(this).attr("RC") : d.RandomKey_C;
            if ("State" !== a) return a = $.browser.msie || "Value" !== a ? a : "value", f = d[a], "PasswordLengthIntensity" === a || "PasswordComplexIntensity" === a ? "false" != $(this).attr("required") || d.Value ? $.browser.msie ? !!f : f : 1 : f ? f + "" : null;
            try {
                return e = d.State ? d.State + "" : null, void 0 === e ? "0" : e
            } catch (s) {
                return "0"
            }
        } catch (t) {
            return console && console.warn && console.warn(t.message), ""
        }
        return c = $.extend({}, g, a), $.extend(c, h[c.mode]), this.each(function() {
            var a, b, d, e;
            if ($.browser.msie || $.browser.mozilla && 5 == $.browser.version) {
                b = '<object classid="', b += 'clsid:E61E8363-041F-455c-8AD0-8A61F1D8E540" '; {
                    window.navigator.userAgent.toLowerCase()
                }
                a = "x86" == window.navigator.cpuClass ? '<object classid="clsid:20E3E6E1-85F1-408A-8975-6A4511345584" ' : '<object classid="clsid:19D3AD65-675C-48DE-9E56-2CAD98D67440" '
            } else a = '<object type="application/npSecEditCtl.BOC.x86" ';
            a += 'width="' + (c.width - 2) + '" ', a += 'height="' + (c.height - 2) + '">', $.browser.msie || (a += '<param name="PasswordIntensityMinLength" value="' + c.PasswordIntensityMinLength + '"/>', a += '<param name="MaxLength" value="' + c.MaxLength + '"/>', a += '<param name="OutputValueType" value="' + c.OutputValueType + '"/>', a += '<param name="PasswordIntensityRegularExpression" value="' + c.PasswordIntensityRegularExpression + '"/>', a += '<param name="RandomKey_S" value="' + c.RandomKey_S + '"/>'), a += "</object>";
            var f = this;
            $(this).empty().addClass(i).css({
                width: c.width - 2 + "px",
                height: c.height - 2 + "px",
                borderTop: "1px solid white",
                borderBottom: "1px solid white"
            }).attr({
                tips: "tipsrequired tipsmax tipsmin " + c.tips,
                validateGroup: "{required:true,maxLength:" + c.MaxLength + ",minLength:" + c.PasswordIntensityMinLength + "," + c.reg + ":true}",
                required: "" + c.required
            }).html(a), d = $(this).children().get(0), ($.browser.msie || $.browser.mozilla && 5 == $.browser.version) && (d.Version || ($(f).empty().html(b + a.substring(a.indexOf("width="))), d = $(this).children().get(0))), e = setInterval(function() {
                d.Version && (clearInterval(e), ($.browser.msie || $.browser.mozilla && 5 == $.browser.version) && (d.PasswordIntensityMinLength = c.PasswordIntensityMinLength, d.MaxLength = c.MaxLength, d.OutputValueType = c.OutputValueType, d.PasswordIntensityRegularExpression = c.PasswordIntensityRegularExpression, d.RandomKey_S = c.RandomKey_S), $(f).attr("RC", d.RandomKey_C))
            }, 200), $(this).on("focus", function() {
                d.focus(), c.focus && c.focus()
            })
        })
    }
});