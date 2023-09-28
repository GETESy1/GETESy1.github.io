/*! BUILD: 2023-08-05 */ ! function(a) {
    function b(a) {
        if (!a || !a.match) return null;
        var b = /^(?:https?:)?(?:\/\/)?([^:\/\n]+)/im,
            c = a.match(b);
        return c ? c[1] : null
    }

    function c(a, c) {
        var d = b(a);
        if (d) {
            d = d.toLowerCase();
            for (var e = 0; e < c.length; e++)
                if (d == c[e]) return e
        }
        return -1
    }
    var d = {
        main: ["www.boc.cn", "netc1.igtb.bankofchina.com", "netc2.igtb.bankofchina.com", "netc1ap.igtb.bankofchina.com", "netc1ea.igtb.bankofchina.com", "netc1am.igtb.bankofchina.com", "ebsc1ap.igtb.bankofchina.com", "ebsc1ea.igtb.bankofchina.com", "ebsc1am.igtb.bankofchina.com", "trnctr.igtb.bankofchina.com", "incfin.boc.cn", "ebs.boc.cn", "co.ebs.boc.cn", "dlsev.ebs.boc.cn", "c1dld.igtb.bankofchina.com", "c1msg.igtb.bankofchina.com", "tap-immvs.bankofchina.com", "b2bsfg.bankofchina.com", "b2enew.bankofchina.com", "watcher.boc.cn", "b2b.ebspay.boc.cn", "ebsnews1.dlsev.boc.cn", "ebsnews2.dlsev.boc.cn", "ebsnews3.dlsev.boc.cn", "ebsnews4.dlsev.boc.cn", "ebsnews5.dlsev.boc.cn", "ebsnews6.dlsev.boc.cn", "ebsnews7.dlsev.boc.cn", "ebsnews8.dlsev.boc.cn", "ccsa.ebsnew.boc.cn", "dlsev.boc.cn", "ebsaps1.dlsev.boc.cn", "bocnetca.boc.cn", "ebsces.igtb.bankofchina.com", "ces.netc1am.igtb.bankofchina.com", "ces.netc1ea.igtb.bankofchina.com", "ces.netc1ap.igtb.bankofchina.com", "bocnetgts.ebs.boc.cn", "cesd.netc1.igtb.bankofchina.com", "cesd.netc2.igtb.bankofchina.com", "card.bank-of-china.com", "hhapos.mcard.boc.cn", "easy.ebspay.boc.cn", "ebspay.boc.cn", "ecny.ebspay.boc.cn", "iisp-oidea.mbs.boc.cn", "iisp.mbs.boc.cn", "openapi.boc.cn", "cdn1.mbs.boc.cn", "smsp.mbs.boc.cn", "ap.ebs.bankofchina.com", "ea.ebs.bankofchina.com", "am.ebs.bankofchina.com", "s1.ap.ebs.bankofchina.com", "s1.ea.ebs.bankofchina.com", "s1.am.ebs.bankofchina.com", "ebsnew.boc.cn", "s1.ebsnew.boc.cn", "s2.ebsnew.boc.cn", "s3.ebsnew.boc.cn", "s4.ebsnew.boc.cn", "s5.ebsnew.boc.cn", "s6.ebsnew.boc.cn", "s7.ebsnew.boc.cn", "s8.ebsnew.boc.cn", "branch.ap.ebs.bankofchina.com", "branch.am.ebs.bankofchina.com"],
        standby: ["www.bankofchina.com", "netc1.igtb.boc.cn", "netc2.igtb.boc.cn", "netc1ap.igtb.boc.cn", "netc1ea.igtb.boc.cn", "netc1am.igtb.boc.cn", "ebsc1ap.igtb.boc.cn", "ebsc1ea.igtb.boc.cn", "ebsc1am.igtb.boc.cn", "trnctr.igtb.boc.cn", "incfin.bankofchina.com", "ebs.bankofchina.com", "co.ebs.bankofchina.com", "dlsev.ebs.bankofchina.com", "c1dld.igtb.boc.cn", "c1msg.igtb.boc.cn", "tap-immvs.boc.cn", "b2bsfg.boc.cn", "b2enew.boc.cn", "watcher.bankofchina.com", "b2b.ebspay.bankofchina.com", "ebsnews1.dlsev.bankofchina.com", "ebsnews2.dlsev.bankofchina.com", "ebsnews3.dlsev.bankofchina.com", "ebsnews4.dlsev.bankofchina.com", "ebsnews5.dlsev.bankofchina.com", "ebsnews6.dlsev.bankofchina.com", "ebsnews7.dlsev.bankofchina.com", "ebsnews8.dlsev.bankofchina.com", "ccsa.ebsnew.bankofchina.com", "dlsev.bankofchina.com", "ebsaps1.dlsev.bankofchina.com", "bocnetca.bankofchina.com", "ebsces.igtb.boc.cn", "ces.netc1am.igtb.boc.cn", "ces.netc1ea.igtb.boc.cn", "ces.netc1ap.igtb.boc.cn", "bocnetgts.ebs.bankofchina.com", "cesd.netc1.igtb.boc.cn", "cesd.netc2.igtb.boc.cn", "card.boc.cn", "hhapos.mcard.bankofchina.com", "easy.ebspay.bankofchina.com", "epay.bankofchina.com", "ecny.ebspay.bankofchina.com", "iisp-oidea.mbs.bankofchina.com", "iisp.mbs.bankofchina.com", "openapi.bankofchina.com", "cdn1.mbs.bankofchina.com", "smsp.mbs.bankofchina.com", "ap.ebs.boc.cn", "ea.ebs.boc.cn", "am.ebs.boc.cn", "s1.ap.ebs.boc.cn", "s1.ea.ebs.boc.cn", "s1.am.ebs.boc.cn", "ebsnew.bankofchina.com", "s1.ebsnew.bankofchina.com", "s2.ebsnew.bankofchina.com", "s3.ebsnew.bankofchina.com", "s4.ebsnew.bankofchina.com", "s5.ebsnew.bankofchina.com", "s6.ebsnew.bankofchina.com", "s7.ebsnew.bankofchina.com", "s8.ebsnew.bankofchina.com", "branch.ap.ebs.boc.cn", "branch.am.ebs.boc.cn"]
    };
    a.changeDomain = function(b) {
        if (!b || !b.replace) return b;
        var e = a.location.hostname,
            f = "bankofchina.com",
            g = d.standby,
            h = d.main;
        e.indexOf(f) > -1 && (g = d.main, h = d.standby);
        var i = c(b, g);
        return i > -1 ? b.replace(g[i], h[i]) : b
    };
    var e = function() {
        var a = function(a) {
            var b = a.target || a.srcElement;
            if ("A" === b.tagName) {
                var c = b.href;
                c && b.setAttribute("href", changeDomain(c))
            }
        };
        document.documentElement.addEventListener ? document.documentElement.addEventListener("click", a) : document.documentElement.attachEvent("onclick", a)
    };
    e();
    var f = a.open;
    a.open = function(a, b, c) {
        f(changeDomain(a), b, c)
    }
}(window);