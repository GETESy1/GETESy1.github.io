/*! BUILD: 2023-06-27 */
var ITSelect = Class.create();
ITSelect.isFirstLoad = !0, ITSelect._cipherKey = "U4YTQ5", ITSelect.elements = [], ITSelect.each = function(a) {
    var b, c, d = ITSelect.elements;
    for (c = d.length - 1; c >= 0; c--) b = d[c], a.call(b, c, b)
}, ITSelect.destroy = function() {
    this.each(function(a) {
        ITSelect.elements.splice(a, 1), this.dispose()
    })
}, ITSelect.reset = function(a) {
    var b = {};
    a && $(a).find("div.sel").each(function() {
        b[$(this).attr("id")] = this
    }), this.each(function() {
        $(this.appendTo).attr("id") in b && this.reset()
    })
}, ITSelect.prototype = {
    initialize: function(a) {
        this.paramsRefactoring(a || {}).dataRefactoring(), ITSelect.elements.push(this)
    },
    bindEvent: function() {
        var a = this,
            b = a.appendTo.find("span.title input.txt");
        a.element.find(a.childTagName).on("click", function() {
            var c = $(this);
            a.val = c.attr("val"), a.txt = c.text(), a.appendTo.attr("val", a.val).attr("title", a.txt).removeClass("warning");
            var d = 1 == c.find("a").get(0).childNodes.length && 1 == c.find("[lan]").size() ? c.find("[lan]").attr("lan") : c.attr("lan");
            d && a.appendTo.attr("lan", d), a.element.parent().removeClass("sel-open"), a.element.hide().prev().find("label.txt").html(c.html()), a.iframe.hide(), a.searchable && b.hide().prev().show(), a.callback && a.callback(a)
        }), a.searchable && (b.on("keyup", function() {
            var b = this.value,
                c = 0;
            a.element.children().each(function(a, d) {
                LiquidMetal.score($(d).text(), b) > 0 ? ($(d).show(), c++) : $(d).hide()
            }), a.iframe[c ? "show" : "hide"](), a.element[c ? "show" : "hide"]()
        }), a.searchCallback && a.searchCallback(b)), ITSelect.isFirstLoad && ($(document.body).on("click", function(a) {
            var b = $(a).closest("div.sel");
            b && b.size() || ($("ul.list").hide(), $("div.sel-open").size() > 0 && $("div.sel-open").removeClass("sel-open"), $("div.sel input.txt").size() > 0 && $.each($("div.sel input.txt"), function(a, b) {
                $(b).attr("isHide") || $(b).hide().prev().show()
            }), $("iframe.list").hide())
        }), ITSelect.isFirstLoad = !1), !a.disabled || a.searchCallback ? a.enable() : a.disable(), a.evenCls && a.element.find("li:nth-child(odd)").addClass(a.evenCls), a.oddCls && a.element.find("li:nth-child(even)").addClass(a.oddCls)
    },
    enable: function() {
        var a = this;
        return a.disabled = !1, a.element.prev().size() ? (a.isRequired && a.appendTo.attr("validateGroup", "{required:true}"), void a.element.prev().removeClass("disabled").off("click").on("click", function(b) {
            if (a.appendTo.hasClass("disabled")) return a.appendTo.removeAttr("validateGroup"), a.appendTo.removeClass("warning"), Common.stopBubble(b), !1;
            if (a.element.hasClass("hide")) {
                if ($("div.sel-open").size() > 0 && $("div.sel-open").removeClass("sel-open").children("ul.list").hide(), a.element.closest("#welcome")) {
                    var c = a.element.height() + a.appendTo.height(),
                        d = $("#welcome").next();
                    c + a.appendTo.offset2().top > d.offset2().top ? a.element.css("marginTop", "-" + c + "px") : a.element.removeAttr("style")
                } else a.element.removeAttr("style");
                a.searchable && a.appendTo.find("span.title label.txt").hide().next().show().get(0).focus(), setTimeout(function() {
                    a.element.parent().addClass("sel-open"), a.element.show().children("li:visible").size() || a.element.hide(), a.iframe.css({
                        width: a.appendTo.width() + 2 + "px",
                        height: a.element.height() + "px"
                    }).show()
                }, 200), Common.stopBubble(b)
            } else a.element.hide(function() {
                a.element.parent().removeClass("sel-open")
            }), a.iframe.hide(), a.searchable && a.appendTo.find("span.title input.txt").hide().prev().show(), Common.stopBubble(b)
        })) : !1
    },
    disable: function() {
        var a = this;
        a.element.prev().length > 0 && (a.element.prev().addClass("disabled"), a.element.prev().off("click"), a.appendTo.removeAttr("validateGroup"), a.appendTo.removeClass("warning")), a.disabled = !0
    },
    dataRefactoring: function() {
        var a = this;
        if (null != a.dataXHR) a.dataXHR.then(function(b) {
            a.data = CU.ajaxDataHandle(b), a.dataXHR = null, a.dataRefactoring()
        });
        else {
            a.html = "";
            for (var b = 0, c = a.data.length; c > b; b++) a.data[b].selected && (a.val = a.data[b][a.keyName], a.txt = a.data[b][a.valName], a.defVal = a.val), a.html += "<" + a.childTagName + ' val="' + a.data[b][a.keyName] + '"><a href="javascript:void(0);">' + a.data[b][a.valName] + "</a></" + a.childTagName + ">";
            a.render().bindEvent()
        }
    },
    dispose: function() {
        delete this.val, delete this.txt, delete this.defValue, delete this.defText, delete this.html, delete this.element, delete this.evenCls, delete this.oddCls, delete this.rootTagName, delete this.childTagName, delete this.data, delete this.attrVal, delete this.callback, delete this.searchable
    },
    paramsRefactoring: function(a) {
        var b = this;
        return b.dataXHR = a.dataXHR || null, b.rootTagName = a.rootTagName || "ul", b.childTagName = a.childTagName || "li", b.attrVal = a.attrVal || "value", b.data = a.data || {}, b.appendTo = a.appendTo || document.body, b.defVal = a.defValue || "", b.defValue = a.defValue || "", b.defText = a.defText || "", b.val = b.defValue, b.txt = b.defText, b.callback = a.callback || null, b.evenCls = a.evenCls || null, b.oddCls = a.oddCls || null, b.keyName = a.keyName || "key", b.valName = a.valName || "val", b.isRequired = "undefined" == typeof a.isRequired ? !0 : a.isRequired, b.disabled = a.disabled || !1, b.searchable = !!a.searchable, b.searchCallback = a.searchCallback, b
    },
    render: function() {
        var a = this;
        return a.isRequired && a.appendTo.attr({
            validateGroup: "{required:true}",
            val: void 0 == a.defVal ? "" : a.defVal,
            tips: "tipsrequired"
        }), $('<span class="title"><label class="txt">' + a.txt + "</label></span>").appendTo(a.appendTo), a.element = $("<" + a.rootTagName + " class='list hide' />").append(a.html).appendTo(a.appendTo), a.iframe = $('<iframe class="list hide" src="" marginwidth="0" framespacing="0" marginheight="0" frameborder="0" style="background:rgb(255,255,255); filter:alpha(opacity=0); -moz-opacity: 0; opacity: 0;zoom:1; position:absolute; z-index: 9; margin-left: -1px;"></iframe>').css({
            width: a.appendTo.width() + 2 + "px"
        }).appendTo(a.appendTo), a.data.length > 5 && a.element.addClass("sel-h"), a.data.length <= 0 && (a.disabled = !0), a.searchable && a.appendTo.find("span.title").append('<input type="text" class="txt" style="display:none"/>'), CU.changeLan(a.element), a
    },
    setValue: function(a) {
        var b = this,
            c = b.appendTo.find("li[val=" + a + "]");
        if (c.size()) {
            b.val = a, b.txt = c.text(), b.callback && b.callback(b);
            var d = 1 == c.find("a").get(0).childNodes.length && 1 == c.find("[lan]").size() ? c.find("[lan]").attr("lan") : c.attr("lan");
            b.appendTo.attr({
                val: b.val,
                title: b.txt,
                lan: d
            }).removeClass("warning"), b.element.parent().removeClass("sel-open"), b.element.hide().prev().find("label.txt").html(c.html())
        }
    },
    reset: function() {
        var a = this;
        a.val = a.defValue, a.txt = a.defText, a.appendTo.attr("val", a.val).removeClass("warning").removeAttr("title");
        var b = a.element.parent();
        b.size() > 0 && b.removeClass("sel-open"), a.element.hide().prev().find("label.txt").html(a.txt), CU.changeLan(a.appendTo)
    }
};