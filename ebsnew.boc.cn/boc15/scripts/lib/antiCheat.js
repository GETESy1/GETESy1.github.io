/*! BUILD: 2023-06-27 */
Common.AntiCheat = Common.AC = function(a) {
    this.init(a)
}, Common.AC.enabled = !0, Common.AC.prototype.EJS = {
    before: {
        SMS: "templates/antiCheat/sms_login.ejs",
        QUESTION_OLD: "templates/antiCheat/question_login_old.ejs",
        QUESTION: "templates/antiCheat/question_login.ejs",
        QUESTIONLIST: "templates/antiCheat/questionList.ejs",
        NULL: "templates/antiCheat/nullAlert.ejs",
        DENY: "templates/antiCheat/deny_login.ejs",
        CCC: "templates/antiCheat/ccc.ejs",
        TOKEN: "templates/antiCheat/token.ejs",
        PASSWORD: "templates/antiCheat/password.ejs",
        WARNING: "templates/antiCheat/warning_login.ejs",
        LOCATION: "templates/antiCheat/location.ejs",
        FAILED: "templates/antiCheat/failed_login.ejs",
        TIMEOUT: "templates/antiCheat/timeout_login.ejs",
        SOUNDKEY: "templates/antiCheat/soundkey_login.ejs",
        NOTICE: "templates/antiCheat/notice_login.ejs"
    },
    after: {
        SMS: "templates/antiCheat/sms.ejs",
        QUESTION_OLD: "templates/antiCheat/question_old.ejs",
        QUESTION: "templates/antiCheat/question.ejs",
        QUESTIONLIST: "templates/antiCheat/questionList.ejs",
        NULL: "templates/antiCheat/nullAlert.ejs",
        DENY: "templates/antiCheat/deny.ejs",
        CCC: "templates/antiCheat/ccc.ejs",
        INTELLIGENT: "templates/antiCheat/intelligent.ejs",
        TOKEN: "templates/antiCheat/token.ejs",
        PASSWORD: "templates/antiCheat/password.ejs",
        WARNING: "templates/antiCheat/warning.ejs",
        LOCATION: "templates/antiCheat/location.ejs",
        FAILED: "templates/antiCheat/failed.ejs",
        TIMEOUT: "templates/antiCheat/timeout.ejs",
        SOUNDKEY: "templates/antiCheat/soundkey.ejs",
        NOTICE: "templates/antiCheat/notice.ejs",
        SMSCHECK: "templates/antiCheat/smsCheck.ejs"
    },
    antiList: "templates/antiCheat/anti_list.ejs"
}, Common.AC.prototype.resultPath = {
    NULL: "templates/antiCheat/null_result.ejs",
    DENY: "templates/antiCheat/deny_result.ejs",
    CCC: "templates/antiCheat/ccc_result.ejs",
    INTELLIGENT: "templates/antiCheat/intelligent_result.ejs",
    FAILED: "templates/antiCheat/failed_result.ejs",
    TIMEOUT: "templates/antiCheat/timeout_result.ejs",
    QUESTION_TOKEN_FAILED: "templates/antiCheat/question_token_failed.ejs",
    INTERFACE_ERROR: "templates/antiCheat/interface_error.ejs",
    SMSCHECK: "templates/antiCheat/sms_check_result.ejs"
}, Common.AC.prototype.init = function(a) {
    function b(a, b) {
        switch (a) {
            case "QUESTION_OLD":
                d.show({
                    ejs: d.ejsPath.QUESTION_OLD,
                    data: d.data,
                    callback: function() {
                        d.addIframe(d.popup), d.el.find("#ac-question-close, #ac-question-cancel").on("click", function() {
                            b ? (d.hide(d.isLogin), d.count_down_1 && clearInterval(d.count_down_1)) : (d.hide(d.isLogin), d.result = "FAILED", d.failed(d.isLogin))
                        }), d.el.find("#ac-question-ok").on("click", function() {
                            var a = $(this);
                            a.hasClass("disabled") || formValid.checkAll(d.el.find("#ac-popup")) && d.ok && (a.addClass("disabled"), d.getTokenId(f, function() {
                                d.ok(function() {
                                    a.removeClass("disabled")
                                })
                            }), b && (d.hideAntiList(), d.count_down && clearInterval(d.count_down), d.count_down_1 && clearInterval(d.count_down_1)))
                        }), d.el.find("#ac-question-anwser").on("focus", function() {
                            d.reset()
                        }), b && (d.count_down_1 && clearInterval(d.count_down_1), d.countDownFun_1())
                    }
                }), d.getTokenId(f), d.result = "QUESTION_OLD";
                break;
            case "QUESTION":
                c(null, b);
                break;
            case "WARNING":
                d.show({
                    ejs: d.ejsPath.WARNING,
                    data: d.data,
                    callback: function() {
                        d.el.find("#ac-warning-close, #ac-warning-cancel").on("click", function() {
                            d.hide(d.isLogin), d.result = "FAILED", d.failed(d.isLogin)
                        }), d.el.find("#ac-warning-ok").on("click", function() {
                            var a = $(this);
                            a.hasClass("disabled") || d.ok && (a.addClass("disabled"), d.getTokenId(f, function() {
                                d.ok(function() {
                                    a.removeClass("disabled")
                                })
                            }))
                        })
                    }
                });
                break;
            case "NOTICE":
                d.show({
                    ejs: d.ejsPath.NOTICE,
                    data: d.data,
                    callback: function() {
                        d.el.find("#ac-warning-close, #ac-warning-cancel").on("click", function() {
                            d.hide(d.isLogin), d.result = "FAILED", d.failed(d.isLogin)
                        }), d.el.find("#ac-warning-ok").on("click", function() {
                            var a = $(this);
                            a.hasClass("disabled") || d.ok && (a.addClass("disabled"), d.getTokenId(f, function() {
                                d.ok(function() {
                                    a.removeClass("disabled")
                                })
                            }))
                        })
                    }
                });
                break;
            case "LOCATION":
                d.show({
                    ejs: d.ejsPath.LOCATION,
                    data: null,
                    callback: function() {
                        d.el.find("#circle").css({
                            background: "url(images/cir.gif?v=" + (new Date).getTime() + ")  0 0 no-repeat",
                            height: "121px",
                            width: "121px",
                            "line-height": "203px",
                            color: "#cf3222",
                            "font-size": "0px",
                            "text-align": "center",
                            margin: "20px auto 20px"
                        }), d.ok && d.getTokenId(f, function() {
                            var a = setTimeout(function() {
                                d.hide(), d.ok(function() {
                                    clearTimeout(a)
                                })
                            }, 2500)
                        })
                    }
                });
                break;
            case "TOKEN":
                d.show({
                    ejs: d.ejsPath.TOKEN,
                    data: d.data,
                    callback: function() {
                        function a() {
                            d.addIframe(d.popup), d.el.find("#ac-token-code").sec({
                                mode: 2,
                                width: 60,
                                RandomKey_S: d.random,
                                focus: function() {
                                    d.reset()
                                }
                            }), d.el.find("#ac-token-code").on("mouseover", function() {
                                d.el.find("#ac-warn-text:visible").length && d.el.find("#ac-warn-text").hide()
                            }), d.el.find("#ac-token-close, #ac-token-cancel").on("click", function() {
                                b ? (d.hide(d.isLogin), d.count_down_1 && clearInterval(d.count_down_1)) : (d.hide(d.isLogin), d.result = "QUESTION_TOKEN_FAILED", d.failed(d.isLogin))
                            }), d.el.find("#ac-token-ok").on("click", function() {
                                var a = $(this);
                                a.hasClass("disabled") || formValid.checkAll(d.el.find("#ac-popup")) && d.ok && (b && (d.hideAntiList(), d.count_down && clearInterval(d.count_down), d.count_down_1 && clearInterval(d.count_down_1)), a.addClass("disabled"), d.getTokenId(f, function() {
                                    d.ok(function() {
                                        a.removeClass("disabled")
                                    })
                                }))
                            })
                        }
                        b && (d.count_down_1 && clearInterval(d.count_down_1), d.countDownFun_1()), d.random ? a() : Common.postRequest(new Model(e, d.cid)).then(function(b) {
                            d.random = d.ajaxDataHandle(b), "01" === b.response[0].status && a()
                        })
                    }
                });
                break;
            case "PASSWORD":
                d.data && void 0 == d.data.passwordType && (d.data.passwordType = ""), d.show({
                    ejs: d.ejsPath.PASSWORD,
                    data: d.data,
                    callback: function() {
                        function a() {
                            d.addIframe(d.popup), d.el.find("#ac-password-code").sec({
                                mode: 3,
                                width: 60,
                                RandomKey_S: d.random,
                                focus: function() {
                                    d.reset()
                                }
                            }), d.el.find("#ac-password-code").on("mouseover", function() {
                                d.el.find("#ac-warn-text:visible").length && d.el.find("#ac-warn-text").hide()
                            }), d.el.find("#ac-password-close, #ac-password-cancel").on("click", function() {
                                b ? (d.hide(d.isLogin), d.count_down_1 && clearInterval(d.count_down_1)) : (d.hide(d.isLogin), d.result = "QUESTION_TOKEN_FAILED", d.failed(d.isLogin))
                            }), d.el.find("#ac-password-ok").on("click", function() {
                                var a = $(this);
                                a.hasClass("disabled") || formValid.checkAll(d.el.find("#ac-popup")) && d.ok && (a.addClass("disabled"), d.getTokenId(f, function() {
                                    d.ok(function() {
                                        a.removeClass("disabled")
                                    })
                                }), b && (d.hideAntiList(), d.count_down && clearInterval(d.count_down), d.count_down_1 && clearInterval(d.count_down_1)))
                            })
                        }
                        b && (d.count_down_1 && clearInterval(d.count_down_1), d.countDownFun_1()), d.random ? a() : Common.postRequest(new Model(e, d.cid)).then(function(b) {
                            d.random = d.ajaxDataHandle(b), "01" === b.response[0].status && a()
                        })
                    }
                });
                break;
            case "SMS":
                d.show({
                    ejs: d.ejsPath.SMS,
                    data: d.data,
                    callback: function() {
                        function a() {
                            d.addIframe(d.popup), d.el.find("#ac-sms-code").sec({
                                mode: 3,
                                width: 60,
                                RandomKey_S: d.random,
                                focus: function() {
                                    d.reset()
                                }
                            }), d.el.find("#ac-sms-code").on("mouseover", function() {
                                d.el.find("#ac-warn-text:visible").length && d.el.find("#ac-warn-text").hide()
                            }), d.el.find("#ac-sms-close, #ac-sms-cancel").on("click", function() {
                                b ? (d.hide(d.isLogin), d.count_down_1 && clearInterval(d.count_down_1)) : (d.hide(d.isLogin), d.result = "FAILED", d.failed(d.isLogin))
                            }), d.el.find("#ac-sms-ok").on("click", function() {
                                var a = $(this);
                                a.hasClass("disabled") || formValid.checkAll(d.el.find("#ac-popup")) && d.ok && (a.addClass("disabled"), d.getTokenId(f, function() {
                                    d.ok(function() {
                                        a.removeClass("disabled")
                                    })
                                }), b && (d.hideAntiList(), d.count_down && clearInterval(d.count_down), d.count_down_1 && clearInterval(d.count_down_1)))
                            }), d.el.find("#ac-sms-send").on("click", function() {
                                Common.postRequest(new Model(g, d.cid)).then(function(a) {
                                    if (d.ajaxDataHandle(a), CU.isSuccesful(a)) {
                                        d.el.find("#ac_code_cd").show();
                                        var b = 60,
                                            c = setInterval(function() {
                                                b -= 1, 0 >= b ? (clearTimeout(c), d.el.find("#ac_code_sec").size() > 0 && (d.el.find("#ac-sms-send").show(), d.el.find("#ac_code_cd").hide())) : d.el.find("#ac_code_sec").size() > 0 ? d.el.find("#ac_code_sec").text(b) : clearInterval(c)
                                            }, 1e3);
                                        d.el.find("#ac_code_sec").text(b), d.el.find("#ac-sms-send").hide()
                                    }
                                })
                            })
                        }
                        b && (d.count_down_1 && clearInterval(d.count_down_1), d.countDownFun_1()), d.random ? a() : Common.postRequest(new Model(e, d.cid)).then(function(b) {
                            d.random = d.ajaxDataHandle(b), "01" === b.response[0].status && a()
                        })
                    }
                });
                break;
            case "SOUND_KEY":
                d.show({
                    ejs: d.ejsPath.SOUNDKEY,
                    data: null,
                    callback: function() {
                        b && (d.count_down_1 && clearInterval(d.count_down_1), d.countDownFun_1()), $("#SignerContainer").size() > 0 && (Common.Signer.init({
                            container: $("#SignerContainer")
                        }), setTimeout(function() {
                            d.popup && d.popup.css("zIndex", "1"), Common.LightBox.showMessage(CU.getDictNameByKey("l8970"))
                        }, 200)), d.el.find("#ac-soundKey-cancel,#ac-soundKey-close").on("click", function() {
                            b ? (d.hide(), d.count_down_1 && clearInterval(d.count_down_1)) : (d.hide(d.isLogin), d.result = "FAILED", d.failed(d.isLogin))
                        }), d.el.find("#ac-soundKey-ok").on("click", function() {
                            var a = $(this);
                            if (formValid.checkAll(d.el.find("#ac-popup")) && !a.hasClass("disabled")) {
                                if ($("#SignerContainer").size() > 0) {
                                    var c;
                                    c = Common.Signer.doDetachSign(d.data._certDN, null, d.data._plainData)
                                }
                                if (!c) return d.popup && d.popup.css("zIndex", "1"), !1;
                                if (!c.result) return d.popup && d.popup.css("zIndex", "1"), !1;
                                $.extend(d.data, {
                                    _signedData: c.result
                                }), d.ok && (a.addClass("disabled"), d.getTokenId(f, function() {
                                    d.ok(function() {
                                        a.removeClass("disabled")
                                    })
                                }), b && (d.hideAntiList(), d.count_down && clearInterval(d.count_down), d.count_down_1 && clearInterval(d.count_down_1)))
                            }
                        }), b || $("#hideMsgBox,#closeMsgBox").on("click", function() {
                            d.popup && d.popup.css("zIndex", "921")
                        }), CU.changeLan(d.el)
                    }
                });
                break;
            case "ALLOW":
                d.result = "ALLOW";
                break;
            case "CCC":
                d.popupAntiList && (d.popupAntiList.hide(), d.hide(), d.hideMask()), d.isLogin && (d.result = "CCC", d.show({
                    ejs: d.ejsPath.CCC,
                    data: null,
                    callback: function() {
                        d.el.find("#ac-alert-close, #ac-alert-ok").on("click", function() {
                            d.hide()
                        })
                    }
                })), b ? d.ok && (d.getTokenId(f, function() {
                    d.ok(function() {})
                }), d.hideAntiList(), d.count_down && clearInterval(d.count_down), d.count_down_1 && clearInterval(d.count_down_1)) : (d.result = "CCC", d.showResult());
                break;
            case "SMSCHECK":
                d.popupAntiList && (d.popupAntiList.hide(), d.hide(), d.hideMask()), d.isLogin && (d.result = "SMSCHECK", d.show({
                    ejs: d.ejsPath.SMSCHECK,
                    data: null,
                    callback: function() {
                        d.el.find("#ac-alert-close, #ac-alert-ok").on("click", function() {
                            d.hide()
                        })
                    }
                })), b || (d.result = "SMSCHECK", d.showResult());
                break;
            case "INTELLIGENT":
                d.popupAntiList && (d.popupAntiList.hide(), d.hide(), d.hideMask()), d.isLogin && (d.result = "INTELLIGENT", d.show({
                    ejs: d.ejsPath.INTELLIGENT,
                    data: null,
                    callback: function() {
                        d.el.find("#ac-alert-close, #ac-alert-ok").on("click", function() {
                            d.hide()
                        })
                    }
                })), b || (d.result = "INTELLIGENT", d.showResult());
                break;
            case "DENY":
            default:
                "1" == d.data.CredentialNullFlag ? (d.result = "NULL", d.isLogin ? d.show({
                    ejs: d.ejsPath.NULL,
                    data: null,
                    callback: function() {
                        d.el.find("#ac-alert-close, #ac-alert-ok").on("click", function() {
                            d.hide(), d.showResult()
                        })
                    }
                }) : d.showResult()) : (d.result = "DENY", d.show({
                    ejs: d.ejsPath.DENY,
                    data: d.data,
                    callback: function() {
                        d.el.find("#ac-alert-close, #ac-alert-ok").on("click", function() {
                            d.hide(), d.showResult()
                        })
                    }
                }))
        }
    }

    function c(a, b) {
        Common.postRequest(new Model("PsnQueryChallengeQuestion", d.cid)).then(function(c) {
            d.data.question = d.ajaxDataHandle(c), CU.isSuccesful(c) && d.data.question.questionList && d.data.question.questionList.length ? a ? $("#questionList").html(d.ejsPath.QUESTIONLIST, d.data) : d.show({
                ejs: d.ejsPath.QUESTION,
                data: null,
                callback: function() {
                    b && (d.count_down_1 && clearInterval(d.count_down_1), d.countDownFun_1()), $("#questionList").html(d.ejsPath.QUESTIONLIST, d.data, function() {
                        CU.setObjAbsCenter(d.popup), d.addIframe(d.popup), d.el.find("#questionList").on("mouseover", function() {
                            d.el.find("#ac-warn-text:visible").length && setTimeout(function() {
                                d.el.find("#ac-warn-text").hide()
                            }, 2e3)
                        }), d.el.find("#ac-question-close, #ac-question-cancel").on("click", function() {
                            b ? (d.hide(d.isLogin), d.count_down_1 && clearInterval(d.count_down_1)) : (d.hide(d.isLogin), d.result = "QUESTION_TOKEN_FAILED", d.failed(d.isLogin))
                        }), d.el.find("#ac-question-ok").on("click", function() {
                            var a = $(this);
                            if (!a.hasClass("disabled") && formValid.checkAll(d.el.find("#ac-popup"))) {
                                d.watcherQAList = [];
                                var c = d.el.find("input[rdname=rd_answer]:checked");
                                if (c && c.targets && d.data.question.questionNum - c.targets.length > 0) return void d.el.find("#ac-warn-text").text(CU.getDictNameByKey("l8891")).show();
                                $.each(c, function(a, b) {
                                    d.watcherQAList.push({
                                        question_id: $(b).attr("qid"),
                                        answer_id: $(b).attr("aid")
                                    })
                                }), d.ok && (a.addClass("disabled"), d.getTokenId(f, function() {
                                    d.ok(function() {
                                        a.removeClass("disabled")
                                    })
                                }), b && (d.hideAntiList(), d.count_down && clearInterval(d.count_down), d.count_down_1 && clearInterval(d.count_down_1)))
                            }
                        })
                    })
                }
            }) : d.ok && d.getTokenId(f, function() {
                d.ok(function() {})
            })
        })
    }
    var d = this,
        e = a.loginPre ? "PSNGetRandomLoginPre" : "PSNGetRandom",
        f = a.loginPre ? "PSNGetTokenIdLoginPre" : "PSNGetTokenId",
        g = a.loginPre ? "PsnSendSMSCodeToMobilePre" : "PsnSendSMSCodeToMobile";
    if (d.loginPre = a.loginPre, d.isLogin = !!a.isLogin, d.ejsPath = d.isLogin ? d.EJS.before : d.EJS.after, d.prefix = a.prefix || "", d.data = a.data, d.ok = a.ok, d.cancel = a.cancel, d.random = a.random, d.cid = a.conversationId, d.el = a.el, d.txtMinute = 10, d.txtSecond = 0, !d.data || !d.data.transMonStatus) return d.result = "ALLOW", d.disabled = !0, d;
    d.data.suspendObj && $.extend(d.data, d.data.suspendObj), d.result = "INTERFACE_ERROR";
    var h = d.data.transMonStatus.toUpperCase();
    if ("QUESTION" == h && d.data && d.data.questionId && d.data.questionText && (h = "QUESTION_OLD"), "CHALIST" == d.data.transMonStatus) {
        var i = d.data.chaList,
            j = [];
        i && i.length > 0 && $.each(i, function(a, b) {
            j.push(b.actionAuthTools)
        }), d.showAnTiSelectBox(j, function(a) {
            $.extend(d.data, {
                chaListSelectVal: a
            }), d.hide(), b(a, !0)
        })
    } else b(h)
}, Common.AC.prototype.showMask = function() {
    Common.LightBox.show()
}, Common.AC.prototype.hideMask = function() {
    Common.LightBox.hide()
}, Common.AC.prototype.chaListSelect_1 = function(a, b) {
    var c = this,
        d = [];
    $.each(a, function(a, b) {
        d.push({
            key: b,
            val: '<span lan="anti_' + b + '">' + CU.getDictNameByKey("anti_" + b) + "</span>"
        })
    }), c.antiItSelect_1 = new ITSelect({
        data: d,
        oddCls: "even",
        appendTo: $("#anti_list_220215").empty(),
        defText: "<span lan='l0092'>" + CU.getDictNameByKey("l0092") + "</span>",
        defVal: "",
        callback: function(a) {
            a.val && b && b(a)
        }
    })
}, Common.AC.prototype.showAnTiSelectBox = function(a, b) {
    var c, d, e = this,
        f = 0,
        g = ["CCC", "QUESTION", "SMS", "TOKEN", "PASSWORD", "FACE", "SOUND_KEY", "SOFT_OTP", "LOCATION"];
    e.show({
        ejs: e.EJS.antiList,
        data: null,
        flag: !0,
        callback: function() {
            e.countDownFun(), e.chaListSelect_1(a, function(a) {
                switch (c = a.val, d = a.txt, a.val) {
                    case "SMS":
                        f = "Y" == e.data.smsFactorFlag ? 1 : 3;
                        break;
                    case "TOKEN":
                        f = "Y" == e.data.tokenFactorFlag ? 1 : 3;
                        break;
                    case "QUESTION":
                        f = 2;
                        break;
                    case "CCC":
                        f = 2;
                        break;
                    case "FACE":
                        f = 5;
                        break;
                    case "PASSWORD":
                        f = 2;
                        break;
                    case "SOFT_OTP":
                        f = 5;
                        break;
                    case "LOCATION":
                        f = 2;
                        break;
                    case "SOUND_KEY":
                        f = "Y" == e.data.caFactorFlag ? 4 : 3;
                        break;
                    default:
                        f = 3
                }
            }), e.el.find("#ac-select-close").on("click", function() {
                e.result = "FAILED", e.hide(e.isLogin), e.failed(e.isLogin), e.hideAntiList(e.isLogin)
            }), e.el.find("#ac-select-ok").on("click", function() {
                formValid.checkAll(e.el.find("#ac-antiList-popup")) && (1 == f ? $.inArray(c, g) > -1 ? b && b(c) : (e.popup && e.popup.css("zIndex", "1"), e.popupAntiList && e.popupAntiList.css("zIndex", "1"), Common.LightBox.showMessage(CU.getDictNameByKey("N1300"))) : 2 == f ? $.inArray(c, g) > -1 ? b && b(c) : (e.popup && e.popup.css("zIndex", "1"), e.popupAntiList && e.popupAntiList.css("zIndex", "1"), Common.LightBox.showMessage(CU.getDictNameByKey("N1300"))) : 4 == f ? $.inArray(c, g) > -1 ? (e.popupAntiList && e.popupAntiList.css("zIndex", "1"), b && b(c)) : (e.popup && e.popup.css("zIndex", "1"), e.popupAntiList && e.popupAntiList.css("zIndex", "1"), Common.LightBox.showMessage(CU.getDictNameByKey("N1300"))) : 5 == f ? (e.popup && e.popup.css("zIndex", "1"), e.popupAntiList && e.popupAntiList.css("zIndex", "1"), Common.LightBox.showMessage(CU.getDictNameByKey("N1303"))) : (e.popup && e.popup.css("zIndex", "1"), e.popupAntiList && e.popupAntiList.css("zIndex", "1"), Common.LightBox.showMessage(CU.getDictNameByKey("N1300"))))
            }), $("#hideMsgBox,#closeMsgBox").on("click", function() {
                e.popup && e.popup.css("zIndex", "921"), e.popupAntiList && e.popupAntiList.css("zIndex", "821")
            }), CU.changeLan(e.el)
        }
    })
}, Common.AC.prototype.countDownFun = function() {
    var a = this,
        b = a.el.find("#ac-antiList-popup"),
        c = b.find(".pop-con"),
        d = "<div id='txt_count_down_warp' class='tac mb20' style='font-size:18px'><label lan='l3583' v='有效期'>有效期</label><em lan='l35346' v=':'>:</em><strong id='txt_count_down_0217' class='text-red'></strong><div>";
    c.prepend(d);
    var e = b.find("#txt_count_down_0217");
    e.text("10:00"), a.count_down = null, a.count_down = setInterval(function() {
        return 0 == a.txtMinute && 0 == a.txtSecond ? (clearInterval(a.count_down), b.find("#txt_count_down_warp").hide(), a.txtMinute = -1, a.txtSecond = -1, a.result = "TIMEOUT", a.hide(), a.hideAntiList(a.isLogin), void a.failed(a.isLogin)) : (0 == a.txtSecond && 0 != a.txtMinute && (a.txtMinute -= 1, a.txtSecond = 60), a.txtSecond--, void e.text("0" + a.txtMinute + ":" + (a.txtSecond > 9 ? a.txtSecond : "0" + a.txtSecond)))
    }, 1e3)
}, Common.AC.prototype.countDownFun_1 = function() {
    var a = this,
        b = a.txtMinute,
        c = a.txtSecond,
        d = a.el.find("#ac-popup"),
        e = d.find(".pop-con"),
        f = "<div id='txt_count_down_warp_1' class='tac mb20' style='font-size:18px'><label lan='l3583' v='有效期'>有效期</label><em lan='l35346' v=':'>:</em><strong id='txt_count_down_0217_1' class='text-red'></strong><div>";
    e.prepend(f);
    var g = d.find("#txt_count_down_0217_1"),
        h = b > 9 ? b : "0" + b,
        i = c > 9 ? c : "0" + c,
        j = h + ":" + i;
    g.text(j), a.count_down_1 && clearInterval(a.count_down_1), a.count_down_1 = setInterval(function() {
        return 0 == b && 0 == c ? (clearInterval(a.count_down_1), d.find("#txt_count_down_warp_1").hide(), b = -1, c = -1, void(a.result = "TIMEOUT")) : (0 == c && 0 != b && (b -= 1, c = 60), c--, void g.text("0" + b + ":" + (c > 9 ? c : "0" + c)))
    }, 1e3)
}, Common.AC.prototype.showResult = function() {
    var a = this;
    a.isLogin || a.el.empty().html(a.prefix + a.resultPath[a.result], null, function() {
        a.hideMask(), CU.changeLan(a.el), a.count_down && clearInterval(a.count_down)
    }).addClass("transresult-r")
}, Common.AC.prototype.addIframe = function(a) {
    a.after("<iframe id = ac-popup_iframe></iframe>");
    var b = a.css("left") + "px",
        c = a.css("top") + "px";
    $("#ac-popup_iframe").attr({
        marginwidth: 0,
        framespacing: 0,
        marginheight: 0,
        frameborder: 0,
        width: a.css("width"),
        height: a.css("height")
    }).css({
        position: "absolute",
        left: b,
        background: "rgb(255,255,255)",
        top: c,
        width: a.css("width"),
        filter: "alpha(opacity=0)",
        "-moz-opacity": 0,
        opacity: 0,
        zoom: 1,
        "z-index": a.css("zIndex") - 1
    })
}, Common.AC.prototype.getTokenId = function(a, b) {
    var c = this;
    Common.postRequest(new Model(a, c.cid)).then(function(a) {
        c.token = c.ajaxDataHandle(a), b && b()
    })
}, Common.AC.prototype.failed = function(a) {
    var b = this,
        c = b.ejsPath.FAILED;
    b.isLogin && ("TIMEOUT" == b.result && (c = b.ejsPath.TIMEOUT), b.show({
        ejs: c,
        data: null,
        mask: a,
        callback: function() {
            b.el.find("#ac-alert-close, #ac-alert-ok").on("click", function() {
                b.hide(), window.location = window.location
            })
        }
    })), b.showResult()
}, Common.AC.prototype.show = function(a) {
    var b = this;
    a.mask || b.showMask(), b.el.append(b.prefix + a.ejs, a.data, function() {
        a.flag ? (b.popupAntiList = b.el.find("#ac-antiList-popup"), CU.setObjAbsCenter(b.popupAntiList), b.zIndex1 && b.zIndex1 > 821 ? b.popupAntiList.css("zIndex", b.zIndex1 + "") : b.popupAntiList.css({
            zIndex: "821"
        })) : (b.popup = b.el.find("#ac-popup"), b.popup.find("#ac-warn-text").hide(), CU.setObjAbsCenter(b.popup), b.zIndex && b.zIndex > 921 ? b.popup.css("zIndex", b.zIndex + "") : b.popup.css({
            zIndex: "921"
        }), b.popupAntiList && b.popupAntiList.hide()), a.callback && a.callback(), CU.changeLan(b.el)
    })
}, Common.AC.prototype.hide = function(a) {
    var b = this;
    b.popup && (b.popupAntiList && b.popupAntiList.show(), $(window.top.document.body).find("#info-ps").hide(), b.popup.remove(), $("#ac-popup_iframe").remove(), delete b.popup, a || b.hideMask())
}, Common.AC.prototype.hideAntiList = function(a) {
    var b = this;
    b.popupAntiList && (clearInterval(b.count_down), $(window.top.document.body).find("#info-ps").hide(), b.popupAntiList.remove(), $("#ac-popup_iframe").remove(), delete b.popupAntiList, a || b.hideMask())
}, Common.AC.prototype.warn = function(a) {
    var b = this;
    switch (b.data.transMonStatus) {
        case "QUESTION_OLD":
            b.el.find("#ac-question-anwser").addClass("warning");
            break;
        case "SMS":
            b.el.find("#ac-sms-code").addClass("warning");
            break;
        case "TOKEN":
            b.el.find("#ac-token-code").addClass("warning");
            break;
        case "PASSWORD":
            b.el.find("#ac-password-code").addClass("warning")
    }
    b.el.find("#ac-warn-text").text(a).show()
}, Common.AC.prototype.reset = function() {
    var a = this;
    switch (a.data.transMonStatus) {
        case "QUESTION_OLD":
            a.el.find("#ac-question-anwser").removeClass("warning");
            break;
        case "SMS":
            a.el.find("#ac-sms-code").removeClass("warning");
            break;
        case "TOKEN":
            a.el.find("#ac-token-code").removeClass("warning");
            break;
        case "PASSWORD":
            a.el.find("#ac-password-code").removeClass("warning")
    }
    a.el.find("#ac-warn-text").hide()
}, Common.AC.prototype.get = function() {
    var a, b = this,
        c = {};
    if ("CHALIST" == b.data.transMonStatus) a = b.data.chaListSelectVal ? b.data.chaListSelectVal : null;
    else {
        var d = b.data.transMonStatus.toUpperCase();
        "QUESTION" == d && b.data && b.data.questionId && b.data.questionText && (d = "QUESTION_OLD"), a = d
    }
    switch (a) {
        case "QUESTION_OLD":
            c = {
                devicePrint: encode_deviceprint(),
                questionId: b.data.questionId,
                questionText: b.data.questionText,
                questionAnswer: b.el.find("#ac-question-anwser").val(),
                token: b.token
            };
            break;
        case "QUESTION":
            c = {
                devicePrint: encode_deviceprint(),
                watcherQAList: b.watcherQAList,
                devicePrintTokenId: window.tencentDevicePrintToken,
                token: b.token
            };
            break;
        case "LOCATION":
        case "WARNING":
        case "NOTICE":
            c = {
                devicePrint: encode_deviceprint(),
                devicePrintTokenId: window.tencentDevicePrintToken,
                token: b.token
            };
            break;
        case "SMS":
            c = {
                devicePrint: encode_deviceprint(),
                activ: b.el.find("#ac-sms-code").sec("Version"),
                state: b.el.find("#ac-sms-code").sec("State"),
                Smc: b.el.find("#ac-sms-code").sec("Value"),
                Smc_RC: b.el.find("#ac-sms-code").sec("RandomKey_C"),
                devicePrintTokenId: window.tencentDevicePrintToken,
                token: b.token
            };
            break;
        case "TOKEN":
            c = {
                devicePrint: encode_deviceprint(),
                activ: b.el.find("#ac-token-code").sec("Version"),
                state: b.el.find("#ac-token-code").sec("State"),
                devicePrintTokenId: window.tencentDevicePrintToken,
                Otp: b.el.find("#ac-token-code").sec("Value"),
                Otp_RC: b.el.find("#ac-token-code").sec("RandomKey_C"),
                token: b.token
            };
            break;
        case "SOUND_KEY":
            c = {
                devicePrint: encode_deviceprint(),
                devicePrintTokenId: window.tencentDevicePrintToken,
                _signedData: b.data._signedData,
                token: b.token
            };
            break;
        case "PASSWORD":
            var e = b.el.find("#ac-password-code"),
                f = b.data.passwordType,
                g = {
                    devicePrint: encode_deviceprint(),
                    activ: e.sec("Version"),
                    state: e.sec("State"),
                    devicePrintTokenId: window.tencentDevicePrintToken,
                    token: b.token
                };
            1 == f ? (g.atmPassword = e.sec("Value"), g.atmPassword_RC = e.sec("RandomKey_C")) : 2 == f ? (g.phoneBankPassword = e.sec("Value"), g.phoneBankPassword_RC = e.sec("RandomKey_C")) : 3 == f && (g.passbookPassword = e.sec("Value"), g.passbookPassword_RC = e.sec("RandomKey_C")), c = g;
            break;
        case "CCC":
            c = {
                devicePrint: encode_deviceprint(),
                devicePrintTokenId: window.tencentDevicePrintToken,
                token: b.token
            };
            break;
        case "SMSCHECK":
            c = {
                devicePrint: encode_deviceprint(),
                devicePrintTokenId: window.tencentDevicePrintToken,
                token: b.token
            };
            break;
        case "INTELLIGENT":
            c = {
                devicePrint: encode_deviceprint(),
                devicePrintTokenId: window.tencentDevicePrintToken,
                token: b.token
            };
            break;
        default:
            c = null
    }
    return "CHALIST" == b.data.transMonStatus ? $.extend(c, {
        actionAuthTools: a
    }) : c
}, Common.AC.prototype.ajaxDataHandle = function(a, b) {
    var c = this;
    if ($("#disablePage").hide(), b = b || 0, a) {
        var d = a.response;
        if (d && d.length)
            if (d[b].status == ajaxSuccessStatusCode) {
                var e = d[b].result;
                if (e) {
                    if ("CCC" != e.transMonStatus || "CHALIST" != c.data.transMonStatus) return CU.Json.replaceNull(e);
                    c.result = "CCC", c.showResult()
                }
            } else {
                var f = d[b].error,
                    g = {
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
                if (f && f.code && f.code in g) {
                    var h = g[f.code];
                    "validation.session_invalid" === f.code && (h = f.message), window.top.location.href = (window.mainPath || "") + "logout.html?title=" + escape(h) + "&locale=" + localParam[lan] + ("validation.resubmit_same_session" === f.code ? "&relogin=0" : "")
                } else c.el.targets.length && (c.hide(), c.hideAntiList()), Common.LightBox.showMessage(d[b].error.message), $("#hideMsgBox,#closeMsgBox").off("click.antiCheat").on("click.antiCheat", function() {
                    $(this).off("click.antiCheat"), c.isLogin ? window.location = window.location : ("CHALIST" == c.data.transMonStatus && (c.count_down && clearInterval(c.count_down), c.count_down_1 && clearInterval(c.count_down_1)), c.showResult())
                }), CU.changeLan($("#msgBox"))
            }
    }
    return null
};