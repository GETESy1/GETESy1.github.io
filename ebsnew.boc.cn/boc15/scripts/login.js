/*! BUILD: 2023-08-05 */
$(function() {
    "use strict";

    function a(a) {
        function b() {
            f += 1, f === e && a && a()
        }

        function c(a, b) {
            return Common[a] && Common[a][lan] ? Common[a][lan][b] || "" : ""
        }
        var d = [{
                name: "externUrl_zh_CN",
                map: "urls",
                lan: "C"
            }, {
                name: "externUrl_en_US",
                map: "urls",
                lan: "E"
            }],
            e = d.length,
            f = 0;
        Common.urls = {}, CU.getUrl = function(a) {
            return $.trim(c("urls", a))
        }, $.each(d, function(a, c) {
            $.ajax({
                url: "config/" + c.name + ".json?v=" + window.VERSION,
                type: "get"
            }).then(function(a) {
                Common[c.map][c.lan] = a, b()
            })
        })
    }

    function b(a) {
        a && Common.postRequest(new Model("PSNCreatConversation")).then(function(b) {
            a(CU.ajaxDataHandle(b))
        })
    }

    function c(a, b) {
        Common.postRequest(new Model("PSNCloseConversation", a)).then(function() {
            b && b()
        })
    }

    function d() {
        1 == u && $("#captcha_debitCard").attr("src", validationURL + (new Date).getTime() + ".gif"), 2 == u && $("#captcha_creditCard").attr("src", validationURL + (new Date).getTime() + ".gif"), 0 == u && $("#captcha").attr("src", validationURL + (new Date).getTime() + ".gif"), $.browser.msie ? ($("#txt_captcha_79449").val(CU.getDictNameByKey("l7143")), $("#txt_captcha_740885").val(CU.getDictNameByKey("l7143")), $("#txt_captcha_741012").val(CU.getDictNameByKey("l7143"))) : ($("#txt_captcha_79449").val(""), $("#txt_captcha_740885").val(""), $("#txt_captcha_741012").val(""))
    }

    function e(a) {
        Common.postRequest(new Model("PSNCreatConversationLoginPre")).then(function(b) {
            j = CU.ajaxDataHandle(b), a || Common.postRequest(new Model("PsnCommonQueryOprIpforlogin")).then(function(a) {
                ProxyCollector.externalIP = CU.ajaxDataHandle(a), ProxyCollector.initProxyCollection()
            }), Common.postRequest(new Model("PSNGetRandomLoginPre", j)).then(function(b) {
                if (k = CU.ajaxDataHandle(b), CU.isSuccesful(b)) {
                    $("#div_password_79445").sec({
                        mode: 10,
                        RandomKey_S: k
                    });
                    var c = $("#div_password_79445").sec("Version"),
                        e = !0,
                        f = "";
                    if (c) {
                        if (!a) {
                            if ($.browser.chrome && $.browser.version >= 42) e = !1;
                            else if (c - 3e8 > 0) switch (f = (c + "").substring(4), (c + "").substring(2, 3)) {
                                case "0":
                                    0 >= 1001 - f && (e = !1);
                                    break;
                                case "1":
                                    0 >= 2 - f && (e = !1);
                                    break;
                                default:
                                    0 >= 3 - f && (e = !1)
                            }
                            e && (Common.LightBox.show(), $(document.body).append(t.secUpdatePrompt, {}, function() {
                                var a = $("#secUpdatePromptPop");
                                CU.changeLan(a), CU.setObjAbsCenter(a), a.css({
                                    zIndex: "11"
                                }), a.find("a.close,#btn_update_prompt").on("click", function() {
                                    a.remove(), Common.LightBox.hide()
                                })
                            }, !0))
                        }
                    } else $("#sec_container").hide(), $("#sec_required").show()
                }
                d()
            })
        })
    }

    function f() {
        if (!window.tencentDevicePrintToken && !window.tfp) {
            var a = {
                    appid: CU.getUrl("appId"),
                    thost: window.changeDomain ? changeDomain(CU.getUrl("thost")) : CU.getUrl("thost"),
                    flashurl: CU.getUrl("tencentSwf")
                },
                b = CU.getUrl("tencentSdk");
            $.browser.msie && $.browser.version <= 8 && (b = CU.getUrl("tencentSdkIE"));
            try {
                ! function() {
                    window.tfp = window.tfp || function() {
                        (tfp.q = tfp.q || []).push(arguments)
                    };
                    var c = document.createElement("script");
                    c.type = "text/javascript", c.async = !0, c.src = b;
                    var d = document.getElementsByTagName("script")[0];
                    window.tencentDevicePrintToken = "", tfp("config", a), tfp("getToken", function(a) {
                        window.tencentDevicePrintToken = a
                    }), d.parentNode.insertBefore(c, d)
                }()
            } catch (c) {
                window.tencentDevicePrintToken = ""
            }
        }
    }

    function g() {
        Common.LightBox.show(), Common.postRequest(new Model("PsnAccBocnetCreateConversationPre")).then(function(a) {
            r = CU.ajaxDataHandle(a), Common.postRequest(new Model("PsnAccBocnetGetRandomPre", r)).then(function(a) {
                s = CU.ajaxDataHandle(a), h($("#txt_username_79443"))
            })
        })
    }

    function h(a) {
        $("#misMatchAcctPop").remove();
        var b = $(a).val(),
            c = b.length;
        !/^[0-9]*$/.test(b) || 15 != c && 16 != c && 19 != c ? (u = 0, $("#txt_username_79443").val(b), Common.LightBox.hide(), $("#cardLogin_ul").hide(), $("#cardLogin_ul").prev().show()) : ((!v || w) && Common.LightBox.show(), Common.postRequest(new Model("PsnAccBocnetQryCardType", {
            accountNumber: b
        })).then(function(a) {
            if (CU.ajaxDataHandle(a), Common.LightBox.hide(), CU.isSuccesful(a)) {
                var c = CU.ajaxDataHandle(a);
                c.accountType && "119" == c.accountType ? (Common.isDebitCard = !0, u = 1, $("#cardLogin_ul").prev().hide(), $("#cardLogin_ul").html(t.debitCardLogin, function() {
                    CU.changeLan($("#cardLogin_ul")), Common.LightBox.hide(), $("#txt_50514_741010").on("blur", function() {
                        /^[0-9]*$/.test($(this).val()) || 15 == $(this).val().length && 16 == $(this).val().length && 19 == $(this).val().length ? (/^[0-9]*$/.test($(this).val()) && (15 == $(this).val().length || 16 == $(this).val().length) || 19 != $(this).val().length) && (w = !0, h($(this))) : ($("#cardLogin_ul").hide(), $("#cardLogin_ul").prev().show(), $("#txt_username_79443").val($(this).val()))
                    }), $("#txt_50514_741010").val(b), $("#div_password_79445_1").sec({
                        mode: 3,
                        RandomKey_S: s
                    }), $("#div_password_79445_1").sec("Version") || ($("#sec_container").hide(), $("#sec_required").show()), $("#captcha_debitCard").attr("src", validationURL + (new Date).getTime() + ".gif"), $.browser.msie || $.browser.mozilla && 5 == $.browser.version ? $("#txt_captcha_741012").on("focus", function() {
                        $(this).removeClass("inputfm")
                    }).on("blur", function() {
                        var a = $.trim($(this).val());
                        ("" === a || a === CU.getDictNameByKey("l7143")) && $(this).addClass("inputfm")
                    }) : $("#txt_captcha_741012").removeClass("inputfm"), $("#a_shuaxin_741013,#captcha_debitCard").on("click", function(a) {
                        stopBubble(a || window.event), setTimeout(function() {
                            $("#captcha_debitCard").attr("src", validationURL + (new Date).getTime() + ".gif")
                        }, 1)
                    }), $("#btn_49_741014").on("click", function() {
                        i()
                    })
                }).show()) : c.accountType && "103" == c.accountType ? (Common.isDebitCard = !1, u = 2, $("#sec_container").empty().hide(), $("#cardLogin_ul").prev().hide(), $("#cardLogin_ul").html(t.creditCardLogin, function() {
                    CU.changeLan($("#cardLogin_ul")), Common.LightBox.hide(), $("#txt_50514_740882").on("blur", function() {
                        /^[0-9]*$/.test($(this).val()) || 15 == $(this).val().length && 16 == $(this).val().length && 19 == $(this).val().length ? !/^[0-9]*$/.test($(this).val()) || 19 != $(this).val().length && 15 == $(this).val().length && 16 == $(this).val().length || (w = !0, h($(this))) : ($("#cardLogin_ul").hide(), $("#cardLogin_ul").prev().show(), $("#txt_username_79443").val($(this).val()))
                    }), $("#txt_50514_740882").val(b), $("#txt_50531_740884").sec({
                        mode: 3,
                        RandomKey_S: s
                    }), $("#txt_50531_740884").sec("Version") || ($("#sec_container").hide(), $("#sec_required").show()), $("#captcha_creditCard").attr("src", validationURL + (new Date).getTime() + ".gif"), $.browser.msie || $.browser.mozilla && 5 == $.browser.version ? $("#txt_captcha_740885").on("focus", function() {
                        $(this).removeClass("inputfm")
                    }).on("blur", function() {
                        var a = $.trim($(this).val());
                        ("" === a || a === CU.getDictNameByKey("l7143")) && $(this).addClass("inputfm")
                    }) : $("#txt_captcha_740885").removeClass("inputfm"), $("#a_shuaxin_740886,#captcha_creditCard").on("click", function(a) {
                        stopBubble(a || window.event), setTimeout(function() {
                            $("#captcha_creditCard").attr("src", validationURL + (new Date).getTime() + ".gif")
                        }, 1)
                    }), $("#btn_49_740887").on("click", function() {
                        i()
                    })
                }).show()) : (Common.LightBox.show(), $(document.body).append(t.misMatchAcct, function() {
                    var a = $("#misMatchAcctPop");
                    CU.setObjAbsCenter(a), a.css({
                        zIndex: "11"
                    }), a.find("a.close,#btn_ok_740747").on("click", function() {
                        a.remove(), Common.LightBox.hide()
                    })
                }))
            } else v = !1, w = !1
        }))
    }

    function i() {
        if (formValid.checkAll(document.body)) {
            var a = {
                loginName: Common.isDebitCard ? $("#txt_50514_741010").val() : $("#txt_50514_740882").val(),
                validationChar: Common.isDebitCard ? $("#txt_captcha_741012").val() : $("#txt_captcha_740885").val(),
                activ: Common.isDebitCard ? $("#div_password_79445_1").sec("Version") : $("#txt_50531_740884").sec("Version"),
                state: Common.isDebitCard ? $("#div_password_79445_1").sec("State") : $("#txt_50531_740884").sec("State")
            };
            Common.isDebitCard ? (a.atmPassword = $("#div_password_79445_1").sec("Value"), a.atmPassword_RC = $("#div_password_79445_1").sec("RandomKey_C")) : (a.phoneBankPassword = $("#txt_50531_740884").sec("Value"), a.phoneBankPassword_RC = $("#txt_50531_740884").sec("RandomKey_C")), Common.LightBox.show(), Common.postRequest(new Model("PsnAccBocnetLogin", a, r)).then(function(a) {
                var b = CU.ajaxDataHandle(a);
                CU.isSuccesful(a) && b.accountSeq ? (Common.LightBox.hide(), window.top.location.href = p.electron + "?v=" + window.VERSION + "&locale=" + dojo.locale + "&login=card&segment=" + segment) : (Common.LightBox.hide(), $("#div_password_79445_1").sec("Clear"), $("#txt_50531_740884").sec("Clear"), d())
            })
        }
    }
    var j, k, l, m, n = {},
        o = {},
        p = {
            normal: "welcome.html",
            vip: "welcome_vip.html",
            electron: "welcome_ele.html"
        },
        q = 0;
    Common.LOGIN_PRE = !0, Common.isDebitCard = !1;
    var r, s, t = {
            debitCardLogin: "templates/login/debitCardLogin.ejs",
            creditCardLogin: "templates/login/creditCardLogin.ejs",
            misMatchAcct: "templates/login/misMatchAccount.ejs",
            secUpdatePrompt: "templates/login/secUpdatePrompt.ejs",
            secUpdateProto: "templates/login/secUpdateProto.ejs"
        },
        u = 0,
        v = !0,
        w = !1;
    $("#txt_username_79443").on("blur", function() {
        var a = $(this).val().length;
        !/^[0-9]*$/.test($(this).val()) || 15 != a && 16 != a && 19 != a || (r || s ? h($(this)) : g())
    }), $("#loginPre_loan").on("click", function() {
        var a = "loginPreLoan.html?locale=" + dojo.locale + "&v=" + window.VERSION;
        $(this).attr("target", "_blank").attr("href", a)
    }), $("#btnSecUpdateProto").on("click", "a", function() {
        Common.LightBox.show(), $(document.body).append(t.secUpdateProto, {}, function() {
            var a = $("#secUpdateProtoPop");
            CU.changeLan(a), CU.setObjAbsCenter(a), a.css({
                zIndex: "11"
            }), a.find("a.close,#btn_understood").on("click", function() {
                a.remove(), Common.LightBox.hide()
            })
        }, !0)
    }), n.cardLogin = function(a, b) {
        Common.LightBox.show(), Common.postRequest(new Model("PsnAccBocnetLogin", a, b)).then(function(a) {
            CU.ajaxDataHandle(a), CU.isSuccesful(a) ? (Common.LightBox.hide(), window.top.location.href = p.electron + "?v=" + window.VERSION + "&locale=" + dojo.locale + "&login=card&segment=" + segment) : Common.LightBox.hide()
        })
    }, $("#btn_login_79676").on("click", function(a) {
        function f(a, b, c, d) {
            var e = $("#container"),
                f = d ? "append" : "html";
            e[f](a, b, function() {
                CU.changeLan(e), c()
            })
        }

        function g(a, b) {
            a && b && Common.postRequest(new Model("PSNGetTokenId", a)).then(function(a) {
                var c = CU.ajaxDataHandle(a);
                b && CU.isSuccesful(a) && b(c)
            })
        }

        function h(a) {
            $("#captcha-item").show(), a || $("#div_password_79445").sec("Clear"), m = !0, l = !1
        }

        function i(a) {
            var b = $("#div_password_79445");
            m && (a = {
                validationChar: N
            }), Common.postRequest(new Model("LoginPre", $.extend({
                loginName: M,
                activ: b.sec("Version"),
                state: b.sec("State"),
                password: b.sec("Value"),
                password_RC: b.sec("RandomKey_C"),
                segment: segment,
                devicePrint: encode_deviceprint()
            }, a), j)).then(n)
        }

        function n(a) {
            var b, c = CU.ajaxDataHandle(a);
            if (CU.isSuccesful(a)) {
                if (1 == c.needValidationChars) return void h(!0);
                b = new Common.AC({
                    loginPre: !0,
                    isLogin: !0,
                    el: $(document.body),
                    data: c,
                    conversationId: j,
                    random: k,
                    ok: function(a) {
                        Common.postRequest(new Model("LoginForTM", $.extend({
                            isusualdevice: "1"
                        }, b.get()), j)).then(function(c) {
                            b.ajaxDataHandle(c), CU.isSuccesful(c) ? (b.hide(), r(c)) : (d(), h()), a()
                        })
                    }
                }), "ALLOW" == b.result && o()
            } else 5 > q && "conversationMap.null" === a.response[0].error.code ? (q += 1, e(!0)) : d(), h()
        }

        function o(a) {
            Common.postRequest(new Model("LoginForTM", $.extend({
                devicePrint: encode_deviceprint(),
                loginName: M
            }, a), j)).then(r)
        }

        function r(a) {
            if (K = CU.ajaxDataHandle(a), CU.isSuccesful(a)) {
                if (K = CU.ajaxDataHandle(a), 66 != K.segment && 66 == segment) return void Common.LightBox.showMessage(CU.getDictNameByKey("l32656"));
                s()
            } else d(), h()
        }

        function s() {
            switch (K.regtype) {
                case "1":
                case "2":
                    t();
                    break;
                case "3":
                    u()
            }
        }

        function t() {
            switch (K.combinStatus) {
                case "11":
                    v();
                    break;
                case "10":
                    w();
                    break;
                default:
                    x()
            }
        }

        function u() {
            f(L.EJS_BATCH, null, function() {
                $("#btn_accept_agreement_15187").on("click", function(a) {
                    stopBubble(a || window.event), $(this).off("click"), t()
                })
            })
        }

        function v() {
            f(L.EJS_COMBINE, K, function() {
                $("#btn_continue_28937").on("click", function(a) {
                    stopBubble(a || window.event), y()
                }), $("#btn_download_28938").attr("href", L.FILE_COMBINE[lan])
            }, null, CU.getDictNameByKey("l8987"))
        }

        function w() {
            Common.postRequest(new Model("PsnCustomerCombinInfo")).then(function(a) {
                var b = CU.ajaxDataHandle(a);
                CU.isSuccesful(a) && Common.postRequest(new Model("Logout")).then(function(a) {
                    CU.ajaxDataHandle(a), CU.isSuccesful(a) && f(L.EJS_INFO, b, function() {
                        $("#btn_boc_website_15147").attr("href", L.BOC_WEBSITE), $("#div_username_15144").text(M)
                    })
                })
            })
        }

        function x() {
            switch (K.loginStatus) {
                case "0":
                    z();
                    break;
                case "1":
                    A();
                    break;
                case "2":
                    D()
            }
        }

        function y() {
            Common.postRequest(new Model("AgreeCombin")).then(function(a) {
                CU.isSuccesful(a) && ($("#btn_continue_28937,#btn_download_28938").off("click"), x())
            })
        }

        function z() {
            switch (K.userStatus) {
                case "VERIFIED":
                case "":
                    J();
                    break;
                case "UNVERIFIED":
                case "NOTENROLLED":
                    10 == K.segment ? J() : G()
            }
        }

        function A() {
            function a(a, b) {
                var c = CU.ajaxDataHandle(a);
                $("#psw_enter_new_password_15691,#psw_repeat_new_password_15693").sec({
                    mode: 11,
                    RandomKey_S: c
                }), $("input[name=rd_choose_security_tool_17636]").on("change", function() {
                    var a = $(this).val();
                    "32" == a && O.isSMSActivated(b), ("512" == a || "4096" == a) && Common.SF.getQrySIMCertStatus(d, function(b, c) {
                        c && "2" == c.certIsExpire && (Common.LightBox.show(), $(document.body).append(L.SIMEXPIREMSG, {}, function() {
                            var b = $("#smsExpireMsgPop");
                            CU.changeLan(b), CU.setObjAbsCenter(b), b.css({
                                zIndex: "11"
                            }), b.find("a.close,#btn_msg_confirm").on("click", function() {
                                b.remove(), Common.LightBox.hide();
                                var c = $(".chose-stool").find("input[value=" + a + "]");
                                c && c.attr("disabled", "disabled").attr("checked", !1).next("label").addClass("text-darkengray"), a = ""
                            })
                        }))
                    })
                }), $("#btn_ok_15695").on("click", function(a) {
                    if (stopBubble(a || window.event), formValid.checkAll("#container")) {
                        var c = K.defaultSafety;
                        if (!c || c.length < 1) {
                            var d = $("input[name=rd_choose_security_tool_17636][type=radio]:checked").val();
                            if (d) c = d;
                            else {
                                if (10 != K.segment) return void Common.LightBox.showMessage(CU.getDictNameByKey("l0325"));
                                c = "0"
                            }
                        }
                        B(b, c)
                    }
                }), $("#btn_reset_15696").on("click", function(a) {
                    stopBubble(a || window.event), $("#login_name_unique").removeAttr("lan").text(""), CU.resetForm($("#container"));
                    var b = $(".chose-stool input[type=radio]"),
                        c = b.size() > 0 && b.attr("checked", !1).attr("disabled", !1).next("label");
                    return $(c).size() > 0 && $(c).hasClass("text-darkengray") && $(c).removeClass("text-darkengray"), !1
                }), $("#btn_check_existence_15694").on("click", function(a) {
                    stopBubble(a || window.event), Common.postRequest(new Model("LoginNameUniqueCheck", {
                        loginName: $("#txt_enter_new_username_new").val(),
                        channel: "1"
                    })).then(function(a) {
                        var b = CU.ajaxDataHandle(a);
                        CU.isSuccesful(a) && (b + "" == "true" ? $("#login_name_unique").addClass("text-red").removeClass("text-green").attr("lan", "l8982").text(CU.getDictNameByKey("l8982")) : $("#login_name_unique").addClass("text-green").removeClass("text-red").attr("lan", "l8983").text(CU.getDictNameByKey("l8983")))
                    })
                })
            }

            function c() {
                b(function(b) {
                    Common.postRequest(new Model("PSNGetRandom", b)).then(function(c) {
                        a(c, b)
                    })
                })
            }
            var d = [];
            K.defaultSafety && K.defaultSafety.length > 0 || 10 == K.segment ? f(L.EJS_SET_ACT, {
                userInfo: K
            }, c, null, CU.getDictNameByKey("l1375")) : Common.postRequest(new Model("PsnSVRSecurityList")).then(function(a) {
                var b = CU.ajaxDataHandle(a);
                b && b.length > 0 && (d = b, f(L.EJS_SET_ACT, {
                    userInfo: K,
                    secuList: b
                }, c, null, CU.getDictNameByKey("l1375")))
            })
        }

        function B(a, b) {
            var c = $("#psw_enter_new_password_15691"),
                d = $("#psw_repeat_new_password_15693");
            Common.LightBox.show(), Common.postRequest(new Model("NamePasswordMod", {
                loginName: $("#txt_enter_new_username_new").val(),
                activ: c.sec("Version"),
                state: c.sec("State"),
                newPass: c.sec("Value"),
                newPass_RC: c.sec("RandomKey_C"),
                newPass2: d.sec("Value"),
                newPass2_RC: d.sec("RandomKey_C"),
                combinId: b
            }, a)).then(function(b) {
                CU.ajaxDataHandle(b), Common.LightBox.hide(), CU.isSuccesful(b) && ($("#btn_ok_15695,#btn_reset_15696,#btn_check_existence_15694").off("click"), C(a))
            })
        }

        function C(a) {
            f(L.EJS_DONE_ACT, null, function() {
                $("#btn_continue_15841").on("click", function(b) {
                    stopBubble(b || window.event), $(this).off("click"), c(a), z()
                })
            }, null, CU.getDictNameByKey("l1375"))
        }

        function D() {
            function a(a, b) {
                var c = CU.ajaxDataHandle(a);
                $("#psw_enter_old_password_15881").sec({
                    mode: 10,
                    RandomKey_S: c
                }), $("#psw_enter_new_password_15885,#psw_repeat_new_password_15887").sec({
                    mode: 11,
                    RandomKey_S: c
                }), $("#btn_ok_15890").on("click", function(a) {
                    stopBubble(a || window.event), formValid.checkAll("#container") && g(b, function(a) {
                        E(b, a)
                    })
                }), $("#btn_reset_15886").on("click", function(a) {
                    stopBubble(a || window.event), CU.resetForm($("#container"))
                })
            }
            f(L.EJS_SET_PWD, K, function() {
                b(function(b) {
                    Common.postRequest(new Model("PSNGetRandom", b)).then(function(c) {
                        a(c, b)
                    })
                })
            })
        }

        function E(a, b) {
            var c = $("#psw_enter_old_password_15881"),
                d = $("#psw_enter_new_password_15885"),
                e = $("#psw_repeat_new_password_15887");
            Common.postRequest(new Model("PsnSVRPasswordSeting", {
                activ: c.sec("Version"),
                state: c.sec("State"),
                oldPass: c.sec("Value"),
                oldPass_RC: c.sec("RandomKey_C"),
                newPass: d.sec("Value"),
                newPass_RC: d.sec("RandomKey_C"),
                newPass2: e.sec("Value"),
                newPass2_RC: e.sec("RandomKey_C"),
                token: b
            }, a)).then(function(b) {
                CU.ajaxDataHandle(b), CU.isSuccesful(b) && ($("#btn_ok_15890,#btn_reset_15886").off("click"), F(a))
            })
        }

        function F(a) {
            f(L.EJS_DONE_PWD, null, function() {
                $("#btn_continue_15933").on("click", function(b) {
                    stopBubble(b || window.event), $(this).off("click"), c(a), z()
                })
            }, null, CU.getDictNameByKey("l1447"))
        }

        function G() {
            var a = K.challengeQuestion;
            return $("#securityQuestionSetting").size() > 0 ? ($("#securityQuestionSetting").show(), void $("#securityQuestionConfirm").hide()) : void f(L.EJS_QUES_SET, {}, function() {
                1 == K.loginStatus ? $("#btn_skip_17641").show() : $("#btn_skip_17641").hide(), $("#question-intro").height($("#question-box").height() - 14 + "px"), Common.SF.showSelector("PB102C", function() {
                    CU.changeLan($("#securityQuestionSetting"));
                    var b, c = [$("#sel_question_one_17624"), $("#sel_question_two_17628"), $("#sel_question_three_17632")];
                    b = $.map(a, function(a, b) {
                        return new ITSelect({
                            data: $.map(a, function(a) {
                                return {
                                    key: a.questionId,
                                    val: a.questionText
                                }
                            }),
                            defText: "<span lan='l0092'>" + CU.getDictNameByKey("l0092") + "</span>",
                            appendTo: c[b]
                        })
                    }), $("#btn_nextstep_17639").on("click", function(a) {
                        if (stopBubble(a || window.event), formValid.checkAll("#container") && Common.SF.check()) {
                            var c = [$("#txt_answer_one_17626").val(), $("#txt_answer_two_17630").val(), $("#txt_answer_three_17634").val()];
                            Common.postRequest(new Model("PsnLoginChallengeQASettingVerify", {
                                questionOne: b[0].txt,
                                questionOneId: b[0].val,
                                answerOne: c[0],
                                questionTwo: b[1].txt,
                                questionTwoId: b[1].val,
                                answerTwo: c[1],
                                questionThree: b[1].txt,
                                questionThreeId: b[1].val,
                                answerThree: c[1],
                                isusualdevice: "0",
                                _combinId: Common.SF.get("combinId")
                            }, Common.SF.get("conversationId"))).then(function(a) {
                                var d = CU.ajaxDataHandle(a);
                                CU.isSuccesful(a) && H(b, c, d)
                            })
                        }
                    }), $("#btn_reset_17640").on("click", function(a) {
                        return stopBubble(a || window.event), CU.resetForm($("#container")), !1
                    }), $("#btn_skip_17641").on("click", function(a) {
                        stopBubble(a || window.event), $("#btn_nextstep_17639,#btn_reset_17640,#btn_skip_17641").off("click"), J()
                    })
                })
            }, !1, CU.getDictNameByKey("l15630"))
        }

        function H(a, b, c) {
            return $("#securityQuestionConfirm").size() > 0 ? ($("#securityQuestionConfirm").show(), $("#securityQuestionSetting").hide(), $("#div_question_one_18043").text(a[0].txt), $("#div_question_two_18047").text(a[1].txt), $("#div_question_three_18051").text(a[2].txt), $("#div_answer_one_18045").text(b[0]), $("#div_answer_two_18049").text(b[1]), $("#div_answer_three_18053").text(b[2]), $("#btn_confirm_18061").off("click"), void Common.SF.appendInputTo("#qa_list", function() {
                CU.changeLan($("#qa_list")), $("#qa_list").attr("isShowSF", "true"), $("#btn_confirm_18061").on("click", function(c) {
                    stopBubble(c || window.event), formValid.checkAll("#qa_list") && g(Common.SF.get("conversationId"), function(d) {
                        var e = Common.SF.get("Smc"),
                            f = Common.SF.get("Otp"),
                            g = Common.SF.get("signedData"),
                            h = {
                                questionOne: a[0].txt,
                                questionOneId: a[0].val,
                                answerOne: b[0],
                                questionTwo: a[1].txt,
                                questionTwoId: a[1].val,
                                answerTwo: b[1],
                                questionThree: a[1].txt,
                                questionThreeId: a[1].val,
                                answerThree: b[1],
                                userStatus: K.userStatus,
                                token: d,
                                devicePrint: encode_deviceprint()
                            };
                        if (e && $.extend(h, {
                                activ: e.Version,
                                state: e.State,
                                Smc: e.Value,
                                Smc_RC: e.RandomKey_C
                            }), f && $.extend(h, {
                                activ: f.Version,
                                state: f.State,
                                Otp: f.Value,
                                Otp_RC: f.RandomKey_C
                            }), g) {
                            if (!g.result) return !1;
                            $.extend(h, {
                                _signedData: g.result
                            })
                        }
                        return Common.SF.get("Sim") ? !1 : void Common.postRequest(new Model("PsnLoginChallengeQASetting", h, Common.SF.get("conversationId"))).then(function(d) {
                            CU.ajaxDataHandle(d), CU.isSuccesful(d) ? (I(a, b), $("#btn_nextstep_17639,#btn_reset_17640,#btn_skip_17641,#btn_confirm_18061,#btn_forward_18062").off("click")) : (stopBubble(c || window.event), Common.SF.clear(), Common.LightBox.hide())
                        })
                    })
                })
            }, c)) : void f(L.EJS_QUES_CFM, {}, function() {
                $("#btn_forward_18062").on("click", function(a) {
                    stopBubble(a || window.event), G()
                }), H(a, b, c)
            }, !0, CU.getDictNameByKey("l1726"))
        }

        function I(a, b) {
            f(L.EJS_QUES_DONE, {
                q1: a[0].txt,
                q2: a[1].txt,
                q3: a[2].txt,
                a1: b[0],
                a2: b[1],
                a3: b[2]
            }, function() {
                $("#btn_confirm_18969").on("click", function(a) {
                    stopBubble(a || window.event), $(this).off("click"), c(Common.SF.get("conversationId")), J()
                })
            }, !1, CU.getDictNameByKey("l1802"))
        }

        function J() {
            var a;
            a = 66 == K.segment ? p.vip : p.normal;
            var b = {
                loginName: K.loginName,
                userId: K.operatorId,
                custId: K.customerId,
                channel: "1",
                terminal: "WEB15",
                loginType: "1",
                shardingTicket: K.shardingTicket,
                currentDeviceFlag: "0",
                mainLoginUrl: window.top.location.href
            };
            window.name = JSON.stringify(b);
            var c = K.shardingUrl ? K.shardingUrl.trim() + "/" : "";
            c ? Common.request(new Model("Logout"), function() {
                window.top.location.href = c.replace("BII", "boc15") + a + "?v=" + window.VERSION + "&locale=" + dojo.locale + "&mainLoginUrl=" + window.top.location.href
            }) : window.top.location.href = a + "?v=" + window.VERSION + "&locale=" + dojo.locale
        }
        if (!l) {
            var K, L = {
                    BOC_WEBSITE: "login.html",
                    EJS_BATCH: "templates/login/batchServiceAgreement.ejs",
                    EJS_INFO: "templates/login/combineInfo.ejs",
                    EJS_COMBINE: "templates/login/combineAgreement.ejs",
                    EJS_SET_ACT: "templates/login/forceResetAccount.ejs",
                    EJS_DONE_ACT: "templates/login/forceResetAccountSuccess.ejs",
                    EJS_SET_PWD: "templates/login/forceResetPassword.ejs",
                    EJS_DONE_PWD: "templates/login/forceResetPasswordSuccess.ejs",
                    EJS_QUES_SET: "templates/login/securityQuestionSetting.ejs",
                    EJS_QUES_CFM: "templates/login/securityQuestionConfirm.ejs",
                    EJS_QUES_DONE: "templates/login/securityQuestionSuccess.ejs",
                    EJS_SMS_ACTIVATE_PATHS: {
                        activateTips: "templates/personalPerenference/securityFactorSet/activateTips.ejs",
                        activateSuccess: "templates/personalPerenference/securityFactorSet/activateSuccess.ejs",
                        confirmActivate: "templates/personalPerenference/securityFactorSet/confirmActivate.ejs",
                        confirmVerifyInfo: "templates/personalPerenference/securityFactorSet/confirmVerifyInfo.ejs"
                    },
                    FILE_COMBINE: {
                        C: "download/Notice on E-banking Customer Information Merge of Bank of China_zh_CN.pdf",
                        E: "download/Notice on E-banking Customer Information Merge of Bank of China.pdf",
                        J: "download/Notice on E-banking Customer Information Merge of Bank of China.pdf",
                        K: "download/Notice on E-banking Customer Information Merge of Bank of China.pdf"
                    },
                    SIMEXPIREMSG: "templates/securityFactor/simExpireMsg.ejs"
                },
                M = $("#txt_username_79443").val(),
                N = $("#txt_captcha_79449").val();
            if (stopBubble(a || window.event), formValid.checkAll(document.body)) {
                l = !0, i();
                var O = {
                    isSMSActivated: function(a) {
                        var b = this;
                        Common.postRequest(new Model("PsnSvrQueryMessage", {}, a)).then(function(a) {
                            var c = CU.ajaxDataHandle(a);
                            b._phoneNumberTemp = c.phoneNumber, c.flag || c.flag || (Common.LightBox.show(), f(L.EJS_SMS_ACTIVATE_PATHS.activateTips, {}, function() {
                                var a = $(document.body).find("#SMSNotActivatedPopup");
                                $(document.body).find("#btn_631_68521, a.close").on("click", function() {
                                    a.remove(), Common.LightBox.hide(), $("#container .bu-pwduser-i").find("input[value=32]").attr("checked", !1)
                                }), $(document.body).find("#btn_630_68520").on("click", function() {
                                    a.remove(), Common.LightBox.hide(), b.confirmActivate()
                                }), CU.changeLan(a), CU.setObjAbsCenter(a)
                            }, !0))
                        })
                    },
                    confirmActivate: function() {
                        var a = this,
                            c = {};
                        c.phoneNumber = Common.Security.mask("", a._phoneNumberTemp), Common.LightBox.show(), f(L.EJS_SMS_ACTIVATE_PATHS.confirmActivate, c, function() {
                            b(function(b) {
                                if (a._conversationId = b, a._conversationId) {
                                    var c = $(document.body).find("#confirmActivate");
                                    Common.SF.showSelector("PB104C", function() {
                                        CU.changeLan($(document.body).find("#safeTool_Div")), $(document.body).find("#btn_confirm_68788").on("click", function() {
                                            if (!Common.SF.check()) return !1;
                                            var b = {
                                                _combinId: Common.SF.get("combinId"),
                                                phoneNumber: a._phoneNumberTemp
                                            };
                                            Common.postRequest(new Model("SignMessageServicePre", b, a._conversationId)).then(function(b) {
                                                var d = CU.ajaxDataHandle(b);
                                                d.phoneNumber = a._phoneNumberTemp, c.remove(), a.confirmVerifyInfo(d, a._conversationId)
                                            })
                                        })
                                    }, "#safeTool_Div", a._conversationId), CU.changeLan(c), CU.setObjAbsCenter(c)
                                }
                            })
                        }, !0)
                    },
                    confirmVerifyInfo: function(a, b) {
                        var c = this;
                        a.phoneNumber = Common.Security.mask("", c._phoneNumberTemp), f(L.EJS_SMS_ACTIVATE_PATHS.confirmVerifyInfo, a, function() {
                            var d = $(document.body).find("#confirmVerifyInfo");
                            Common.SF.appendInputTo("#sf-ul", function() {
                                CU.changeLan($(document.body).find("#confirmVerifyInfo")), Common.postRequest(new Model("PSNGetTokenId", null, b)).then(function(a) {
                                    c._token = CU.ajaxDataHandle(a)
                                }), $(document.body).find("#btn_confirm_69543").on("click", function() {
                                    if (!formValid.checkAll($("#confirmVerifyInfo"))) return !1;
                                    if (!Common.SF.check()) return !1;
                                    var a = {
                                            toActiveAct: c.toActiveAct,
                                            token: c._token,
                                            phoneNumber: c._phoneNumberTemp
                                        },
                                        e = Common.SF.get("Smc"),
                                        g = Common.SF.get("Otp");
                                    Common.AC.enabled && (a.devicePrint = encode_deviceprint()), e && $.extend(a, {
                                        activ: e.Version,
                                        state: e.State,
                                        Smc: e.Value,
                                        Smc_RC: e.RandomKey_C
                                    }), g && $.extend(a, {
                                        activ: g.Version,
                                        state: g.State,
                                        Otp: g.Value,
                                        Otp_RC: g.RandomKey_C
                                    });
                                    var h = Common.SF.get("signedData");
                                    if (h) {
                                        if (!h.result) return !1;
                                        a._signedData = h.result
                                    }
                                    return Common.SF.get("Sim") ? !1 : (Common.LightBox.show(), void Common.postRequest(new Model("SignMessageService", a, b)).then(function(a) {
                                        CU.isSuccesful(a) && (d.remove(), Common.LightBox.hide(), f(L.EJS_SMS_ACTIVATE_PATHS.activateSuccess, {}, function() {
                                            var a = $(document.body).find("#activateSuccess");
                                            $("#btn_confirm_69821").on("click", function() {
                                                a.remove(), Common.LightBox.hide()
                                            }), CU.changeLan(a), CU.setObjAbsCenter(a)
                                        }, !0))
                                    }))
                                }), $("#btn_reset_69544").on("click", function(a) {
                                    stopBubble(a || window.event), Common.SF.clear()
                                })
                            }, a), CU.changeLan(d), CU.setObjAbsCenter(d)
                        }, !0)
                    }
                }
            }
        }
    }), $("#a_11_79447,#captcha").on("click", function(a) {
        stopBubble(a || window.event), setTimeout(function() {
            $("#captcha").attr("src", validationURL + (new Date).getTime() + ".gif")
        }, 1)
    }), $.browser.msie || $.browser.mozilla && 5 == $.browser.version ? $("#txt_captcha_79449").on("focus", function() {
        $(this).removeClass("inputfm")
    }).on("blur", function() {
        var a = $.trim($(this).val());
        ("" === a || a === CU.getDictNameByKey("l7143")) && $(this).addClass("inputfm")
    }) : $("#txt_captcha_79449").removeClass("inputfm"), $("#txt_captcha_79449").on("keydown", function(a) {
        a = window.event || a;
        var b = a.keyCode || a.which;
        13 === b && $("#btn_login_79676").trigger("click")
    }), $("#a_58_1167").attr({
        href: "help.html?locale=" + localParam[lan] + "&menu=Login",
        target: "_blank"
    }), $("a[href][target=_blank]").on("click", function(a) {
        a = window.event || a;
        try {
            a.preventDefault()
        } catch (b) {}
        stopBubble(a);
        var c, d = "";
        ("a_60_1170" === this.id || "a_60_1169" === this.id) && (d = ",width=810,height=645", c = [Math.floor((screen.width - 810) / 2), Math.floor((screen.height - 645) / 2)]);
        var e = $(this).attr("href");
        "url.onlineServiceUrl" == $(this).attr("urllan") && (e += "?channel=1");
        var f = window.open(e, "extWin", "toolbar=no, menubar=no,scrollbars=yes, location=no, status=no,resizable=yes" + d);
        return c && setTimeout(function() {
            try {
                f.moveTo(c[0], c[1])
            } catch (a) {}
        }, 0), !1
    });
    var x = function(a) {
        document.getElementById("ariascripts") && document.body.removeChild(document.getElementById("ariascripts"));
        var b = document.getElementsByTagName("script"),
            c = b[b.length - 1],
            d = document.createElement("script");
        d.type = "text/javascript", d.charset = "utf-8", d.src = "//csv2.bankofchina.com/dist/aria.js?appid=f0d4a7cfca52bd27ee5dbb3fdd55756e", a && "en" == a && (d.src = "//csv2.bankofchina.com/dist/aria.js?appid=07a800d84c80d60274b0c7535cff4ea2"), d.src = changeDomain(d.src), d.id = "ariascripts", c.parentNode.appendChild(d)
    };
    n.show = function(a) {
        a || (a = {}), $("#wrapper").show(), $("#iframe").hide(), $("#div_password_79445").sec("Clear"), $("#div_password_79445_1").sec("Clear"), $("#txt_50531_740884").sec("Clear"), d(), $("#txt_username_79443").val(a.username || "")
    }, n.changeLan = function(a, b) {
        dojo.locale = a, 0 === a.indexOf("en") ? (lan = "E", $("#lan-en").hide(), $("#lan-zh").show(), $(document.body).addClass("i18n_en")) : (lan = "C", $("#lan-en").show(), $("#lan-zh").hide(), $(document.body).removeClass("i18n_en")), $("#a_58_1167").attr("href", "help.html?locale=" + localParam[lan] + "&menu=Login"), CU.changeLan(), $.browser.msie && $("#txt_captcha_79449").val(CU.getDictNameByKey($("#txt_captcha_79449").attr("phLan"))), b && $("#iframe").attr("src") && (o.url = "/bocPatch/login/login.html?locale=" + a + "&seg=" + segment + "&username=" + $("#txt_username_79443").val())
    }, n.hideLoading = function() {
        $("#ajaxLoading").hide(), $("#wrapper").hide(), $("#iframe").show(), $.browser.mozilla && $("#iframe").css("visibility", "visible"), Common.LightBox.hide()
    }, o.show = function(a) {
        if ($.browser.msie && ($.browser.version < 7 && !a || $.browser.version > 10)) {
            if ($.browser.version > 10) return "C" === lan && ($("#msgBox").css("width", "540px"), $("#msgBox .bu-pop").css("width", "540px")), Common.LightBox.showMessage(CU.getDictNameByKey("l29630"));
            if ($.browser.version < 7) return $("#msgBox").css("width", "470px"), $("#msgBox .bu-pop").css("width", "470px"), $("#hideMsgBox,#closeMsgBox").on("click.restrict", function() {
                $("#hideMsgBox,#closeMsgBox").off("click.restrict"), $("#msgBox").css("width", "590px"), $("#msgBox .bu-pop").css("width", "590px")
            }), Common.LightBox.showMessage(CU.getDictNameByKey("l29718"))
        }
        if (!$("#iframe").attr("src") || o.url) $("#_ajaxLoading").attr("id", "ajaxLoading"), $.browser.mozilla && $("#iframe").css("visibility", "hidden").show(), Common.LightBox.show(), $("#ajaxLoading").show(), o.url ? ($("#iframe").attr("src", o.url + (a ? "&init=" + a : "")), o.url = null) : $("#iframe").attr("src", "/bocPatch/login/login.html?locale=" + dojo.locale + "&seg=" + segment + "&username=" + $("#txt_username_79443").val() + (a ? "&init=" + a : ""));
        else {
            var b = $("#iframe").get(0).contentWindow;
            $("#wrapper").hide();
            try {
                $(b.document).find("input[name=j_username]").val($("#txt_username_79443").val()), b.login.loginWidget.refreshValidateImg()
            } catch (c) {}
            if ($("#iframe").show(), a) try {
                b.login.formUE15 = !0, b.login.loginWidget[a]()
            } catch (c) {}
        }
    }, $("a[init]").on("click", function() {
        o.show($(this).attr("init"))
    }), $.browser.msie && $.browser.version <= 10 || $.browser.chrome || $.browser.firefox || dojo.isSafari && dojo.isMac || $.browser.mozilla && 5 == $.browser.version ? a(function() {
        window.lanLoaded = {
            C: !0,
            E: !0
        }, CU.changeLan($("body")), f(), e()
    }) : $.browser.msie && $.browser.version > 10 ? ($("#hideMsgBox,#closeMsgBox").on("click", function() {
        window.close()
    }), $("#ajaxLoading").hide(), o.show()) : o.show(), $("#lan-en").on("click", function() {
        n.changeLan("en", !0), x("en")
    }), $("#lan-zh").on("click", function() {
        n.changeLan("zh", !0), x()
    }), window.BOC15 = n;
    var y = window.location.search,
        z = new RegExp("init=([^&?]*)", "ig");
    if (y.indexOf("locale=") > -1) {
        var A = y.split("locale=")[1].split("&")[0];
        0 === A.lastIndexOf("en", 0) && x("en")
    }
    var B = y.match(z) ? y.match(z)[0].substr("init".length + 1) : null;
    B && o.show(B)
});