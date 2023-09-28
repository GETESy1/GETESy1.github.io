/*! BUILD: 2023-07-14 */ ! function() {
    "use strict";

    function a(a) {
        Common.postRequest(new Model("PSNCreatConversation")).then(function(b) {
            e = CU.ajaxDataHandle(b), a && a()
        })
    }
    var b, c, d = {
            EJS: {
                SELECTOR: "templates/securityFactor/securityFactorSelector.ejs",
                INPUT: "templates/securityFactor/securityFactorInput.ejs",
                caOrNo: "templates/transfersAndRemittances/batchTransferAccount/onlineBatchTransfer/caOrNo.ejs",
                simExpireMsg: "templates/securityFactor/simExpireMsg.ejs"
            },
            MAP: {
                Smc: 32,
                Otp: 8,
                _signedData: 4
            }
        },
        e = null,
        f = null,
        g = "00",
        h = null,
        i = null,
        j = null,
        k = null,
        l = null,
        m = [];
    Common.SecurityFactor = Common.SF = {
        showSelector: function(c, g, h, j, k) {
            function l() {
                Common.requestInterface(new Model("PsnGetSecurityFactor", {
                    serviceId: c
                }, e), function(a) {
                    var b = null,
                        c = null,
                        e = null,
                        j = null;
                    a && (b = a._defaultCombin, c = a._combinList, e = d.EJS.SELECTOR, j = $(h), i = a._combinList), m = [];
                    var l = b && b.id && b.id.toString(),
                        o = !1;
                    return c && 0 !== c.length ? void n.getQrySIMCertStatus(c, function(a, d) {
                        return $.each(c, function(b, c) {
                            c.id = c.id.toString(), $.inArray(c.id, a) > -1 && (m.push(c), l === c.id && (o = !0))
                        }), 0 === m.length ? (Common.LightBox.showMessage(CU.getDictNameByKey("l8969")), g && 1 === g.length && g(!1), Common.LightBox.hide(), !1) : (Common.LOGIN_PRE && k && (e = k + e), void j.addClass("chose-stool").html("").html(e, {
                            list: m,
                            def: b,
                            pre: Common.LOGIN_PRE
                        }, function() {
                            b && o && (f = b.id, j.find("input[value=" + f + "]").attr("checked", !0).attr("defaultfactor", 1), d && "2" == d.certIsExpire && ("512" == f || "4096" == f) && n.simExpireFunc(m)), j.off("change").on("change", "input[name=rd_choose_security_tool_17637]", function() {
                                f = $(this).val(), d && "2" == d.certIsExpire && ("512" == f || "4096" == f) && n.simExpireFunc(m)
                            }), j.off("click").on("click", "#goto_sec_setting", function() {
                                var a = setInterval(function() {
                                    Common.LightBox.count > 0 ? Common.LightBox.hide() : (clearInterval(a), Common.triggerAction("SecurityToolSet"))
                                }, 100)
                            }), CU.changeLan(j), g && g()
                        }))
                    }) : (Common.LightBox.showMessage(CU.getDictNameByKey("l8969")), g && 1 === g.length && g(!1), Common.LightBox.hide(), !1)
                })
            }
            var n = this;
            f = null, h || (h = "#stool-selector"), b = h, j ? (e = j, l()) : a(l)
        },
        simExpireFunc: function(a) {
            var c = this;
            Common.LightBox.show(), $(document.body).append(d.EJS.simExpireMsg, {}, function() {
                var d = $("#smsExpireMsgPop");
                CU.changeLan(d), CU.setObjAbsCenter(d), d.css("zIndex", "+=4"), d.find("a.close,#btn_msg_confirm").on("click", function() {
                    d.remove(), Common.LightBox.hide(), $(b).find("input[value=" + f + "]").attr("disabled", "disabled").attr("checked", !1).next("label").addClass("text-darkengray"), 1 == a.length ? f = null : c.simExpireChecked()
                })
            })
        },
        simExpireChecked: function() {
            var a = $(b).find("input[name='rd_choose_security_tool_17637']"),
                c = a.selector,
                d = c.length,
                e = $(c[d - 1]).attr("value");
            if ("512" == e || "4096" == e) {
                f = null;
                var g = $(c[0]),
                    h = g.attr("disabled");
                h || (g.attr("checked", !0), f = g.attr("value"))
            } else {
                f = null;
                for (var i = "", j = 0; d > j; j++) {
                    var k = c[j],
                        e = $(k).attr("value");
                    if ("512" == e || "4096" == e) {
                        i = j;
                        break
                    }
                }
                var l = $(c[i + 1]),
                    h = l.attr("disabled");
                h || (l.attr("checked", !0), f = l.attr("value"))
            }
        },
        getQrySIMCertStatus: function(a, b) {
            for (var c = 0, d = a.length, e = null, f = !1, g = null, i = ["4", "8", "32", "40"]; d > c; c++)
                if (e = a[c], e && (512 == e.id || 4096 == e.id)) {
                    f = !0, g = e.id.toString();
                    break
                }
            f ? Common.requestInterface(new Model("QuerySIMCert"), function(a) {
                a && "4" == a.certStatus ? (a.phoneNum && (h = a.phoneNum.substr(7, 4)), i.push(g)) : h = null, b && b(i, a)
            }) : b && b(i, {})
        },
        appendInputTo: function(a, b, i, m, n, o, p) {
            if (512 == f || 4096 == f) {
                g = "00";
                var q = !0,
                    r = !1,
                    s = i && i.simSequenceInt || "",
                    t = new Model("PsnQuerySimSecurityStatus", {
                        simSequenceInt: s
                    }, e),
                    u = $("#ajaxLoading"),
                    v = null,
                    w = null,
                    x = null,
                    y = 60,
                    z = function() {
                        Common.request({
                            models: [t],
                            dataHandle: !1,
                            showLoading: !1,
                            success: function(a) {
                                r || (g = a && a.transVerifyInfo || g, $.inArray(g, ["02", "03", "04"]) >= 0 ? (r = !0, Common.LightBox.hide(), B(!0)) : A())
                            },
                            fail: function(a) {
                                q || u.hide(), r || (Common.LightBox.hide(), Common.handleError(a), g = a.message, B(!0))
                            }
                        })
                    },
                    A = function() {
                        setTimeout(function() {
                            z()
                        }, 2e3)
                    },
                    B = function(a) {
                        a && (x && clearInterval(x), q || u.hide()), v = $("#pop_tips_0917_3022"), v.size() > 0 && (v && v.remove(), w && w.remove(), Common.LightBox.hide())
                    };
                Common.LightBox.show();
                var C = "";
                C = $($("div.article").is(":visible") ? "div.article" : "#full-container"), C.append("templates/securityFactor/simTips.ejs", {
                    phoneNum: h
                }, function() {
                    v = $("#pop_tips_0917_3022"), w = $("#if_cover"), v.find("#btn_Confirm").on("click", function() {
                        q && (q = !1, u.css("height", screen.availHeight + "px").show()), B(!1)
                    }), v.find("#btn_cancel,.close").on("click", function() {
                        r || (r = !0, Common.LightBox.hide()), g = "02", B(!0)
                    }), Common.LightBox.show(), A(), x = setInterval(function() {
                        y--, 0 == y && (Common.LightBox.hide(), r = !0, g = "02", B(!0))
                    }, 1e3), CU.changeLan(v.show()), CU.setObjAbsCenter(v), CU.setObjAbsCenter(w)
                }), b && b()
            } else {
                var D = d.EJS.INPUT;
                l = null, o || (o = "PsnSendSMSCodeToMobile"), p && (e = p), i.factorList && ! function() {
                    f = 0;
                    var a, b, c;
                    for (a = 0, b = i.factorList.length; b > a; a++) c = i.factorList[a].field.name, f |= d.MAP[c]
                }(), $(a).find(".sf-list-item").remove(), Common.LOGIN_PRE && n && (D = n + D), $(a).append(D, {
                    combinId: f
                }, function() {
                    m ? ($("#txt_inputdealcode_18055").sec({
                        mode: 3,
                        RandomKey_S: m,
                        width: 60
                    }), $("#txt_dynamiccommand_18060").sec({
                        mode: 2,
                        RandomKey_S: m,
                        width: 60
                    })) : Common.postRequest(new Model("PSNGetRandom", e)).then(function(a) {
                        var b = CU.ajaxDataHandle(a);
                        $("#txt_inputdealcode_18055").sec({
                            mode: 3,
                            RandomKey_S: b,
                            width: 60
                        }), $("#txt_dynamiccommand_18060").sec({
                            mode: 2,
                            RandomKey_S: b,
                            width: 60
                        })
                    }), $("#SignerContainer").size() > 0 && i._plainData && i._certDN && (j = i._plainData, k = i._certDN, Common.Signer.init({
                        container: $("#SignerContainer")
                    }), setTimeout(function() {
                        Common.LightBox.showMessage(CU.getDictNameByKey("l8970"))
                    }, 200)), $(a).off("click", "#btn_getdealcode_18056").on("click", "#btn_getdealcode_18056", function() {
                        $("#txt_inputdealcode_18055").sec("Clear"), Common.postRequest(new Model(o, e)).then(function(a) {
                            if (CU.ajaxDataHandle(a), CU.isSuccesful(a)) {
                                $("#code_cd").show();
                                var b = 60;
                                c && clearInterval(c), c = setInterval(function() {
                                    b -= 1, 0 >= b ? Common.SF.clearTimer() : $("#code_sec").size() > 0 ? $("#code_sec").text(b) : Common.SF.clearTimer()
                                }, 1e3), $("#code_sec").text(b), $("#btn_getdealcode_18056").hide()
                            }
                        })
                    }), b && b()
                })
            }
        },
        get: function(a) {
            var b, c = {
                Smc: "#txt_inputdealcode_18055",
                Otp: "#txt_dynamiccommand_18060",
                combinId: f + "",
                _combinId: f + "",
                conversationId: e,
                _combinList: i,
                _signedData: l,
                signedData: l
            };
            if (a) {
                if ("Smc" === a || "Otp" === a) return b = $(c[a]), b.size() > 0 ? (Common.secVersion = b.sec("Version") + "", {
                    Version: b.sec("Version"),
                    State: b.sec("State"),
                    Value: b.sec("Value"),
                    RandomKey_C: b.sec("RandomKey_C")
                }) : null;
                if ("_signedData" === a || "signedData" === a) return $("#SignerContainer").size() > 0 && (l = Common.Signer.doDetachSign(k, null, j)), l;
                if ("Sim" == a) {
                    if ("512" == f || "4096" == f) {
                        if ("03" == g) return !1;
                        switch (g) {
                            case "00":
                                Common.LightBox.showMessage(CU.getDictNameByKey("l122263"));
                                break;
                            case "01":
                            case "02":
                            case "04":
                                Common.LightBox.showMessage(CU.getDictNameByKey("l123448"));
                                break;
                            default:
                                Common.LightBox.showMessage(g)
                        }
                        return !0
                    }
                    return !1
                }
                return c[a]
            }
            return c
        },
        reSetCombinId: function(a) {
            a = a ? a : null
        },
        getData: function(a) {
            var b = this,
                c = null,
                d = "",
                e = [],
                g = !1;
            switch (f.toString()) {
                case "4":
                    d = "_signedData";
                    break;
                case "8":
                    d = "Otp";
                    break;
                case "32":
                    d = "Smc";
                    break;
                case "40":
                    d = "Smc,Otp";
                    break;
                case "512":
                case "4096":
                    d = "Sim"
            }
            return e = d.split(","), $.each(e, function(d, e) {
                switch (c = b.get(e), e) {
                    case "Smc":
                    case "Otp":
                        c && (Common.secVersion = c.Version + "", $.extend(a, {
                            activ: c.Version,
                            state: c.State
                        }), a[e] = c.Value, a[e + "_RC"] = c.RandomKey_C);
                        break;
                    case "_signedData":
                        if (c) {
                            if (!c.result) return g = !0, !1;
                            $.extend(a, {
                                _signedData: c.result
                            })
                        }
                        break;
                    case "Sim":
                        g = c
                }
            }), g ? !1 : a
        },
        reset: function() {
            var a = $("input[defaultfactor]"),
                c = this;
            if (a.size() > 0 ? (a.attr("checked", !0), f = a.val()) : ($(b + " input[type=radio]").attr("checked", !1), f = null), "512" == f || "4096" == f) c.getQrySIMCertStatus(i, function(a, b) {
                b && "2" == b.certIsExpire && c.simExpireFunc(m)
            });
            else {
                var d = $(b).find("#rd_choose_security_tool_17637_5,#rd_choose_security_tool_17637_6");
                if (d.size() > 0) {
                    var e = d.attr({
                        disabled: !1,
                        checked: !1
                    }).next("label");
                    $(e).hasClass("text-darkengray") && $(e).removeClass("text-darkengray")
                }
            }
        },
        check: function() {
            return f || 0 !== $("input[name=rd_choose_security_tool_17637]:checked").size() ? (f = $("input[name=rd_choose_security_tool_17637]:checked").val(), !0) : (Common.LightBox.showMessage(CU.getDictNameByKey("l0325")), !1)
        },
        clear: function() {
            $("#txt_inputdealcode_18055,#txt_dynamiccommand_18060").sec("Clear"), Common.SF.clearTimer()
        },
        clearTimer: function() {
            clearInterval(c), $("#code_sec").size() > 0 && ($("#btn_getdealcode_18056").show(), $("#code_cd").hide())
        },
        isHasSelector: function(a, b, c, e) {
            Common.LightBox.show(), Common.postRequest(new Model("PsnGetSecurityFactor", {
                serviceId: b
            }, c)).then(function(b) {
                b.response[0].error && "SafetyCombin.noSafetyCombins" == b.response[0].error.code ? a.el.append(d.EJS.caOrNo, function() {
                    var b = a.el.find("#caorno");
                    $("#caorno_btn,a.close").on("click", function() {
                        b.remove(), Common.LightBox.hide()
                    }), CU.changeLan(b), CU.setObjAbsCenter(b)
                }) : CU.isSuccesful(b) ? e && e() : (CU.ajaxDataHandle(b), Common.LightBox.hide())
            })
        }
    }
}();