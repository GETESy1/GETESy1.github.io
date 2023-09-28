/*! BUILD: 2023-06-27 */
var crtptoUtil = {
    iSecUtil: {
        getVersion: function() {
            var a = iSec_js_sdk.isec_crypto_getversion();
            if (a && "0" == a.code) return a.data;
            throw Error("获取SDK版本号 :" + a)
        },
        asymmKey: function() {
            var a = iSec_js_sdk.isec_crypto_generate_asymm_key("256");
            if (a && "0" == a.code) return a.data;
            throw Error("生成非对称密钥对 :" + a)
        },
        symmKey: function(a) {
            if ("NUMBER" != (typeof a).toLocaleUpperCase()) throw Error("number: 参数类型不对，应为Number类型");
            if (1 > a) throw Error("plaintext: 对称密钥长度不存在");
            var b = iSec_js_sdk.isec_crypto_generate_symm_key(a);
            if (b && "0" == b.code) return b.data;
            throw Error("生成对称密钥 :" + b)
        },
        sm2_encrypt: function(a, b) {
            if (0 === a.length) throw Error("plaintext: 待加密原文为空");
            if (0 === b.length) throw Error("publicKey: sm2公钥为空");
            var c = {
                    plaintext: a,
                    publicKey: b
                },
                d = iSec_js_sdk.isec_crypto_sm2_encrypt(c);
            if (d && "0" == d.code) return d.data;
            throw Error("SM2加密 :" + d)
        },
        sm2_decrypt: function(a, b) {
            if (0 === a.length) throw Error("plaintext: 加密密文为空");
            if (0 === b.length) throw Error("privateKey: 私钥为空");
            var c = {
                    ciphertext: a,
                    privateKey: b
                },
                d = iSec_js_sdk.isec_crypto_sm2_decrypt(c);
            if (d && "0" == d.code) return d.data;
            throw Error("SM2解密 :" + d)
        },
        sm2_sign: function(a, b) {
            if (0 === a.length) throw Error("privateKey: 待签名原文为空");
            if (0 === b.length) throw Error("plaintext: 私钥为空");
            var c = {
                    privateKey: a,
                    plaintext: b
                },
                d = iSec_js_sdk.isec_crypto_sm2_sign(c);
            if (d && "0" == d.code) return d.data;
            throw Error("SM2签名 :" + d)
        },
        sm2_verify: function(a, b, c) {
            if (0 === a.length) throw Error("publicKey: 公钥为空");
            if (0 === b.length) throw Error("plaintext: 原文为空");
            if (0 === c.length) throw Error("ciphertext: 密文为空");
            var d = {
                    publicKey: a,
                    plaintext: b,
                    ciphertext: c
                },
                e = iSec_js_sdk.isec_crypto_sm2_verify(d);
            if (e && "0" == e.code) return e.data;
            throw Error("SM2验签 :" + e)
        },
        sm3_hash: function(a) {
            if (0 === a.length) throw Error("plaintext: 为空");
            var a = a,
                b = iSec_js_sdk.isec_crypto_sm3_hash(a);
            if (b && "0" == b.code) return b.data;
            throw Error("SM3摘要 :" + b)
        },
        hmac_sm3: function(a, b) {
            if (0 === a.length) throw Error("plaintext: 为空");
            var c = {
                    plaintext: a,
                    key: b || "530ee72e9ed0e80125f4a9c6ce2db106"
                },
                d = iSec_js_sdk.isec_crypto_hmac_sm3(c);
            if (d && "0" == d.code) return d.data;
            throw Error("hmac_sm3:" + d)
        },
        sm4_encrypt: function(a, b, c, d, e) {
            if (0 === a.length) throw Error("plaintext: 原文为空");
            if (0 === b.length) throw Error("plaintext: 密钥为空");
            if (("CBC" == d || "CTR" == d || "OFB" == d) && 0 === c.length) throw Error("iv: 不可空，仅在ECB模式下可缺省");
            var f = {
                    plaintext: a,
                    key: b,
                    iv: c || "",
                    mode: d || "ECB",
                    padding: e || "pkcs7padding"
                },
                g = iSec_js_sdk.isec_crypto_sm4_encrypt(f);
            if (g && "0" == g.code) return g.data;
            throw Error("SM4加密:" + g)
        },
        sm4_decrypt: function(a, b, c, d, e) {
            if (0 === a.length) throw Error("ciphertext: 密文为空");
            if (0 === b.length) throw Error("plaintext: 密钥为空");
            if (("CBC" == d || "CTR" == d || "OFB" == d) && 0 === c.length) throw Error("iv: 不可空，仅在ECB模式下可缺省");
            var f = {
                    ciphertext: a,
                    key: b,
                    iv: c || "",
                    mode: d || "ECB",
                    padding: e || "pkcs7padding"
                },
                g = iSec_js_sdk.isec_crypto_sm4_decrypt(f);
            if (g && "0" == g.code) return g.data;
            throw Error("SM4解密:" + g)
        },
        utf8ToBase64: function(a) {
            var b = a,
                c = iSec_js_sdk.isec_crypto_utf8_to_base64(b);
            if (c && "0" == c.code) return c.data;
            throw Error("UTF8转base64:" + c)
        },
        base64Toutf8: function(a) {
            var b = a,
                c = iSec_js_sdk.isec_crypto_base64_to_utf8(b);
            if (c && "0" == c.code) return c.data;
            throw Error("base64转UTF8:" + c)
        },
        hexTobase64: function(a) {
            var a = a,
                b = iSec_js_sdk.isec_crypto_hex_to_base64(a);
            if (b && "0" == b.code) return b.data;
            throw Error("hex转base64:" + b)
        },
        base64ToHex: function(a) {
            var a = a,
                b = iSec_js_sdk.isec_crypto_base64_to_hex(a);
            if (b && "0" == b.code) return b.data;
            throw Error("base64转hex :" + b)
        }
    },
    exportSm2: {
        generateAsymmKey: function(a) {
            return iSec_js_sdk.isec_crypto_generate_asymm_key(a)
        },
        encryptSM2: function(a) {
            return iSec_js_sdk.isec_crypto_sm2_encrypt(a)
        },
        decryptSM2: function(a) {
            return iSec_js_sdk.isec_crypto_sm2_decrypt(a)
        },
        signSM2: function(a) {
            return iSec_js_sdk.isec_crypto_sm2_sign(a)
        },
        verifySM2: function(a) {
            return iSec_js_sdk.isec_crypto_sm2_verify(a)
        }
    },
    exportSm3: {
        hashSM3: function(a, b) {
            return iSec_js_sdk.isec_crypto_sm3_hash(a, b)
        },
        hmacSM3: function(a) {
            return iSec_js_sdk.isec_crypto_hmac_sm3(a)
        }
    },
    exportSm4: {
        encryptSM4: function(a) {
            return iSec_js_sdk.isec_crypto_sm4_encrypt(a)
        },
        decryptSM4: function(a) {
            return iSec_js_sdk.sec_crypto_sm4_decrypt(a)
        },
        generateSymmKey: function(a) {
            return iSec_js_sdk.isec_crypto_generate_symm_key(a)
        }
    },
    pubilicEncry: {
        pubilicData: "",
        pubilicPar: function(a, b, c) {
            var d = this;
            return {
                MODE: a || "ECB",
                PADDING: b || "pkcs7padding",
                publicKey: c || Common.publicKeys.SAP,
                sm4Key: d.randomString(16),
                hmacKey: d.randomString(16)
            }
        },
        randomString: function(a) {
            for (var b = "", c = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", d = 0; a > d; d++) {
                var e = Math.round(Math.random() * (c.length - 1));
                b += c[e]
            }
            return b
        },
        stringToHex: function(a) {
            for (var b = "", c = 0; c < a.length; c++) b += a.charCodeAt(c).toString(16);
            return b
        },
        hexToBase64: function(a) {
            for (var b = this, c = a.toLowerCase(), d = "0123456789abcdef", e = "", f = 0; f < c.length; f += 2) e += String.fromCharCode(d.indexOf(c[f]) << 4 | d.indexOf(c[f + 1]));
            return b.encode64(e)
        },
        encode64: function(a) {
            var b, c, d, e, f, g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                h = "",
                i = "",
                j = "",
                k = 0;
            do b = a.charCodeAt(k++), c = a.charCodeAt(k++), i = a.charCodeAt(k++), d = b >> 2, e = (3 & b) << 4 | c >> 4, f = (15 & c) << 2 | i >> 6, j = 63 & i, isNaN(c) ? f = j = 64 : isNaN(i) && (j = 64), h = h + g.charAt(d) + g.charAt(e) + g.charAt(f) + g.charAt(j), b = c = i = "", d = e = f = j = ""; while (k < a.length);
            return h
        },
        encryptModel: function(a) {
            var b = this;
            b.pubilicData = b.pubilicPar();
            var c = {
                    plaintext: a,
                    key: b.stringToHex(b.pubilicData.sm4Key),
                    iv: "",
                    mode: b.pubilicData.MODE,
                    padding: b.pubilicData.PADDING
                },
                d = crtptoUtil.exportSm4.encryptSM4(c).data,
                e = {
                    plaintext: d,
                    key: b.stringToHex(b.pubilicData.hmacKey)
                },
                f = b.hexToBase64(crtptoUtil.exportSm3.hmacSM3(e).data),
                g = {
                    plaintext: b.pubilicData.sm4Key + b.pubilicData.hmacKey,
                    publicKey: b.pubilicData.publicKey
                },
                h = b.hexToBase64(crtptoUtil.exportSm2.encryptSM2(g).data);
            return {
                body: d,
                hmac: f,
                skey: h
            }
        },
        decryptModel: function(a) {
            var b = this;
            if (a.body && a.hmac) {
                var c = {
                        plaintext: a.body,
                        key: b.stringToHex(b.pubilicData.hmacKey)
                    },
                    d = b.hexToBase64(crtptoUtil.exportSm3.hmacSM3(c).data);
                if (d === a.hmac) {
                    var e = {
                            ciphertext: a.body,
                            key: b.stringToHex(b.pubilicData.sm4Key),
                            iv: "",
                            mode: b.pubilicData.MODE,
                            padding: b.pubilicData.PADDING
                        },
                        f = JSON.parse(crtptoUtil.exportSm4.decryptSM4(e).data);
                    return f
                }
                throw Error("摘要不一致")
            }
            throw Error("报文错误！")
        }
    }
};