(function(sttc) {
    'use strict';
    var aa, ca = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function da(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var ea = da(this),
        fa = typeof Symbol === "function" && typeof Symbol("x") === "symbol",
        ia = {},
        ka = {};

    function la(a, b, c) {
        if (!c || a != null) {
            c = ka[b];
            if (c == null) return a[b];
            c = a[c];
            return c !== void 0 ? c : a[b]
        }
    }

    function na(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = d.length === 1;
            var e = d[0],
                f;!a && e in ia ? f = ia : f = ea;
            for (e = 0; e < d.length - 1; e++) {
                var h = d[e];
                if (!(h in f)) break a;
                f = f[h]
            }
            d = d[d.length - 1];c = fa && c === "es6" ? f[d] : null;b = b(c);b != null && (a ? ca(ia, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (ka[d] === void 0 && (a = Math.random() * 1E9 >>> 0, ka[d] = fa ? ea.Symbol(d) : "$jscp$" + a + "$" + d), ca(f, ka[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    var oa = typeof Object.create == "function" ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        qa;
    if (fa && typeof Object.setPrototypeOf == "function") qa = Object.setPrototypeOf;
    else {
        var sa;
        a: {
            var ta = {
                    a: !0
                },
                ua = {};
            try {
                ua.__proto__ = ta;
                sa = ua.a;
                break a
            } catch (a) {}
            sa = !1
        }
        qa = sa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var va = qa;

    function wa(a, b) {
        a.prototype = oa(b.prototype);
        a.prototype.constructor = a;
        if (va) va(a, b);
        else
            for (var c in b)
                if (c != "prototype")
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.Nj = b.prototype
    }
    na("Symbol.dispose", function(a) {
        return a ? a : Symbol("Symbol.dispose")
    }, "es_next");
    na("String.prototype.replaceAll", function(a) {
        return a ? a : function(b, c) {
            if (b instanceof RegExp && !b.global) throw new TypeError("String.prototype.replaceAll called with a non-global RegExp argument.");
            return b instanceof RegExp ? this.replace(b, c) : this.replace(new RegExp(String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), c)
        }
    }, "es_2021");
    na("AggregateError", function(a) {
        function b(c, d) {
            d = Error(d);
            "stack" in d && (this.stack = d.stack);
            this.errors = c;
            this.message = d.message
        }
        if (a) return a;
        wa(b, Error);
        b.prototype.name = "AggregateError";
        return b
    }, "es_2021");
    na("Promise.any", function(a) {
        return a ? a : function(b) {
            b = b instanceof Array ? b : Array.from(b);
            return Promise.all(b.map(function(c) {
                return Promise.resolve(c).then(function(d) {
                    throw d;
                }, function(d) {
                    return d
                })
            })).then(function(c) {
                throw new ia.AggregateError(c, "All promises were rejected");
            }, function(c) {
                return c
            })
        }
    }, "es_2021");
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var r = this || self;

    function xa(a, b) {
        a: {
            var c = ["CLOSURE_FLAGS"];
            for (var d = r, e = 0; e < c.length; e++)
                if (d = d[c[e]], d == null) {
                    c = null;
                    break a
                }
            c = d
        }
        a = c && c[a];
        return a != null ? a : b
    }

    function Aa(a) {
        var b = typeof a;
        return b != "object" ? b : a ? Array.isArray(a) ? "array" : b : "null"
    }

    function Ba(a) {
        var b = Aa(a);
        return b == "array" || b == "object" && typeof a.length == "number"
    }

    function Da(a) {
        var b = typeof a;
        return b == "object" && a != null || b == "function"
    }

    function Ea(a) {
        return Object.prototype.hasOwnProperty.call(a, Fa) && a[Fa] || (a[Fa] = ++Ga)
    }
    var Fa = "closure_uid_" + (Math.random() * 1E9 >>> 0),
        Ga = 0;

    function Ha(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Ia(a, b, c) {
        if (!a) throw Error();
        if (arguments.length > 2) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function Ja(a, b, c) {
        Ja = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? Ha : Ia;
        return Ja.apply(null, arguments)
    }

    function Ka(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function La(a, b, c) {
        a = a.split(".");
        c = c || r;
        a[0] in c || typeof c.execScript == "undefined" || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || b === void 0 ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function Ma(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Nj = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.lo = function(d, e, f) {
            for (var h = Array(arguments.length - 2), k = 2; k < arguments.length; k++) h[k - 2] = arguments[k];
            return b.prototype[e].apply(d, h)
        }
    }

    function Na(a) {
        return a
    };
    var Pa = {
        en: 0,
        dn: 1,
        cn: 2
    };

    function Qa(a, b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Qa);
        else {
            const c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        b !== void 0 && (this.cause = b)
    }
    Ma(Qa, Error);
    Qa.prototype.name = "CustomError";
    var Ra;

    function Sa(a, b) {
        a = a.split("%s");
        let c = "";
        const d = a.length - 1;
        for (let e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        Qa.call(this, c + a[d])
    }
    Ma(Sa, Qa);
    Sa.prototype.name = "AssertionError";

    function Ta(a, b) {
        if (typeof a === "string") return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function Ua(a, b) {
        const c = a.length,
            d = typeof a === "string" ? a.split("") : a;
        for (let e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function Va(a, b) {
        var c = a.length;
        const d = typeof a === "string" ? a.split("") : a;
        for (--c; c >= 0; --c) c in d && b.call(void 0, d[c], c, a)
    }

    function Wa(a, b) {
        const c = a.length,
            d = [];
        let e = 0;
        const f = typeof a === "string" ? a.split("") : a;
        for (let h = 0; h < c; h++)
            if (h in f) {
                const k = f[h];
                b.call(void 0, k, h, a) && (d[e++] = k)
            }
        return d
    }

    function Xa(a, b) {
        const c = a.length,
            d = Array(c),
            e = typeof a === "string" ? a.split("") : a;
        for (let f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Ya(a, b, c) {
        let d = c;
        Ua(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }

    function Za(a, b) {
        const c = a.length,
            d = typeof a === "string" ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function $a(a, b) {
        return Ta(a, b) >= 0
    }

    function bb(a, b) {
        b = Ta(a, b);
        let c;
        (c = b >= 0) && Array.prototype.splice.call(a, b, 1);
        return c
    }

    function cb(a, b) {
        let c = 0;
        Va(a, function(d, e) {
            b.call(void 0, d, e, a) && Array.prototype.splice.call(a, e, 1).length == 1 && c++
        })
    }

    function eb(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function fb(a) {
        const b = a.length;
        if (b > 0) {
            const c = Array(b);
            for (let d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function gb(a, b) {
        for (let c = 1; c < arguments.length; c++) {
            const d = arguments[c];
            if (Ba(d)) {
                const e = a.length || 0,
                    f = d.length || 0;
                a.length = e + f;
                for (let h = 0; h < f; h++) a[e + h] = d[h]
            } else a.push(d)
        }
    }

    function jb(a, b, c) {
        return arguments.length <= 2 ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }

    function kb(a, b, c) {
        c = c || lb;
        let d = 0,
            e = a.length,
            f;
        for (; d < e;) {
            const h = d + (e - d >>> 1);
            let k;
            k = c(b, a[h]);
            k > 0 ? d = h + 1 : (e = h, f = !k)
        }
        return f ? d : -d - 1
    }

    function mb(a, b) {
        if (!Ba(a) || !Ba(b) || a.length != b.length) return !1;
        const c = a.length,
            d = nb;
        for (let e = 0; e < c; e++)
            if (!d(a[e], b[e])) return !1;
        return !0
    }

    function lb(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }

    function nb(a, b) {
        return a === b
    }

    function ob(a) {
        const b = [];
        for (let c = 0; c < arguments.length; c++) {
            const d = arguments[c];
            if (Array.isArray(d))
                for (let e = 0; e < d.length; e += 8192) {
                    const f = ob.apply(null, jb(d, e, e + 8192));
                    for (let h = 0; h < f.length; h++) b.push(f[h])
                } else b.push(d)
        }
        return b
    }

    function pb(a, b) {
        b = b || Math.random;
        for (let c = a.length - 1; c > 0; c--) {
            const d = Math.floor(b() * (c + 1)),
                e = a[c];
            a[c] = a[d];
            a[d] = e
        }
    };
    var qb = {
        ak: "google_adtest",
        ek: "google_ad_client",
        nk: "google_ad_intent_query",
        mk: "google_ad_intent_qetid",
        lk: "google_ad_intent_eids",
        fk: "google_ad_format",
        hk: "google_ad_height",
        zk: "google_ad_width",
        pk: "google_ad_layout",
        qk: "google_ad_layout_key",
        rk: "google_ad_output",
        sk: "google_ad_region",
        vk: "google_ad_slot",
        xk: "google_ad_type",
        yk: "google_ad_url",
        Tk: "google_analytics_domain_name",
        Uk: "google_analytics_uacct",
        kl: "google_container_id",
        zl: "google_gl",
        Tl: "google_enable_ose",
        dm: "google_full_width_responsive",
        hn: "google_rl_filtering",
        gn: "google_rl_mode",
        jn: "google_rt",
        fn: "google_rl_dest_url",
        Km: "google_max_radlink_len",
        Qm: "google_num_radlinks",
        Rm: "google_num_radlinks_per_unit",
        dk: "google_ad_channel",
        Jm: "google_max_num_ads",
        Lm: "google_max_responsive_height",
        el: "google_color_border",
        Sl: "google_enable_content_recommendations",
        wl: "google_content_recommendation_ui_type",
        vl: "google_source_type",
        ul: "google_content_recommendation_rows_num",
        rl: "google_content_recommendation_columns_num",
        ql: "google_content_recommendation_ad_positions",
        xl: "google_content_recommendation_use_square_imgs",
        gl: "google_color_link",
        fl: "google_color_line",
        jl: "google_color_url",
        bk: "google_ad_block",
        uk: "google_ad_section",
        ck: "google_ad_callback",
        al: "google_captcha_token",
        il: "google_color_text",
        Lk: "google_alternate_ad_url",
        kk: "google_ad_host_tier_id",
        bl: "google_city",
        ik: "google_ad_host",
        jk: "google_ad_host_channel",
        Mk: "google_alternate_color",
        dl: "google_color_bg",
        Ul: "google_encoding",
        bm: "google_font_face",
        Cl: "google_cust_ch",
        Fl: "google_cust_job",
        El: "google_cust_interests",
        Dl: "google_cust_id",
        Gl: "google_cust_u_url",
        fm: "google_hints",
        vm: "google_image_size",
        Mm: "google_mtl",
        Nn: "google_cpm",
        ml: "google_contents",
        Om: "google_native_settings_key",
        yl: "google_country",
        Fn: "google_targeting",
        cm: "google_font_size",
        Jl: "google_disable_video_autoplay",
        co: "google_video_product_type",
        bo: "google_video_doc_id",
        ao: "google_cust_gender",
        zn: "google_cust_lh",
        yn: "google_cust_l",
        Mn: "google_tfs",
        Nm: "google_native_ad_template",
        Bm: "google_kw",
        Cn: "google_tag_for_child_directed_treatment",
        Dn: "google_tag_for_under_age_of_consent",
        ln: "google_region",
        Bl: "google_cust_criteria",
        tk: "google_safe",
        Al: "google_ctr_threshold",
        mn: "google_resizing_allowed",
        on: "google_resizing_width",
        nn: "google_resizing_height",
        Zn: "google_cust_age",
        Em: "google_language",
        Cm: "google_kw_type",
        Zm: "google_pucrd",
        Xm: "google_page_url",
        En: "google_tag_partner",
        sn: "google_restrict_data_processing",
        Wj: "google_adbreak_test",
        gk: "google_ad_frequency_hint",
        Yj: "google_admob_interstitial_slot",
        Zj: "google_admob_rewarded_slot",
        Xj: "google_admob_ads_only",
        wk: "google_ad_start_delay_hint",
        Im: "google_max_ad_content_rating",
        bn: "google_ad_public_floor",
        an: "google_ad_private_floor",
        Xn: "google_traffic_source",
        wn: "google_shadow_mode",
        Um: "google_overlays",
        Ym: "google_privacy_treatments",
        An: "google_special_category_data",
        eo: "google_wrap_fullscreen_ad"
    };

    function rb(a, b) {
        this.g = a === tb && b || "";
        this.i = ub
    }
    rb.prototype.toString = function() {
        return this.g
    };

    function vb(a) {
        return a instanceof rb && a.constructor === rb && a.i === ub ? a.g : "type_error:Const"
    }
    var ub = {},
        tb = {};

    function wb() {
        return !1
    }

    function xb() {
        return !0
    }

    function yb(a) {
        const b = arguments,
            c = b.length;
        return function() {
            for (let d = 0; d < c; d++)
                if (!b[d].apply(this, arguments)) return !1;
            return !0
        }
    }

    function zb(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function Ab(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function Bb(a) {
        let b = a;
        return function() {
            if (b) {
                const c = b;
                b = null;
                c()
            }
        }
    }

    function Cb(a, b) {
        let c = 0;
        return function(d) {
            r.clearTimeout(c);
            const e = arguments;
            c = r.setTimeout(function() {
                a.apply(b, e)
            }, 63)
        }
    }

    function Db(a, b) {
        function c() {
            e = r.setTimeout(d, 63);
            let k = h;
            h = [];
            a.apply(b, k)
        }

        function d() {
            e = 0;
            f && (f = !1, c())
        }
        let e = 0,
            f = !1,
            h = [];
        return function(k) {
            h = arguments;
            e ? f = !0 : c()
        }
    };
    var Eb = {
            passive: !0
        },
        Fb = Ab(function() {
            let a = !1;
            try {
                const b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                r.addEventListener("test", null, b)
            } catch (b) {}
            return a
        });

    function Gb(a) {
        return a ? a.passive && Fb() ? a : a.capture || !1 : !1
    }

    function Hb(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, Gb(d)), !0) : !1
    }

    function Ib(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, Gb(d)), !0) : !1
    };

    function Jb(a, b) {
        const c = {};
        for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function Kb(a) {
        var b = Lb;
        a: {
            for (const c in b)
                if (b[c] == a) {
                    a = !0;
                    break a
                }
            a = !1
        }
        return a
    }

    function Mb(a) {
        const b = [];
        let c = 0;
        for (const d in a) b[c++] = a[d];
        return b
    }

    function Nb(a) {
        const b = {};
        for (const c in a) b[c] = a[c];
        return b
    }
    const Ob = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function Pb(a, b) {
        let c, d;
        for (let e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (let f = 0; f < Ob.length; f++) c = Ob[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var Qb = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };

    function Rb(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function Sb(a) {
        if (!Tb.test(a)) return a;
        a.indexOf("&") != -1 && (a = a.replace(Ub, "&amp;"));
        a.indexOf("<") != -1 && (a = a.replace(Vb, "&lt;"));
        a.indexOf(">") != -1 && (a = a.replace(Wb, "&gt;"));
        a.indexOf('"') != -1 && (a = a.replace(Xb, "&quot;"));
        a.indexOf("'") != -1 && (a = a.replace(Yb, "&#39;"));
        a.indexOf("\x00") != -1 && (a = a.replace(Zb, "&#0;"));
        return a
    }
    var Ub = /&/g,
        Vb = /</g,
        Wb = />/g,
        Xb = /"/g,
        Yb = /'/g,
        Zb = /\x00/g,
        Tb = /[\x00&<>"']/;

    function $b(a, b) {
        return a.toLowerCase().indexOf(b.toLowerCase()) != -1
    };
    var ac;

    function bc() {
        if (ac === void 0) {
            var a = null,
                b = r.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: Na,
                        createScript: Na,
                        createScriptURL: Na
                    })
                } catch (c) {
                    r.console && r.console.error(c.message)
                }
                ac = a
            } else ac = a
        }
        return ac
    };
    var cc = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g + ""
        }
    };

    function dc(a, b) {
        a = ec.exec(fc(a).toString());
        const c = a[3] || "";
        return gc(a[1] + hc("?", a[2] || "", b) + hc("#", c))
    }

    function fc(a) {
        return a instanceof cc && a.constructor === cc ? a.g : "type_error:TrustedResourceUrl"
    }

    function ic(a, b) {
        var c = vb(a);
        if (!jc.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
        a = c.replace(kc, function(d, e) {
            if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
            d = b[e];
            return d instanceof rb ? vb(d) : encodeURIComponent(String(d))
        });
        return gc(a)
    }
    var kc = /%{(\w+)}/g,
        jc = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i"),
        ec = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;

    function lc(a, b) {
        return dc(ic(new rb(tb, "https://fundingchoicesmessages.google.com/i/%{id}"), a), b)
    }
    var mc = {};

    function gc(a) {
        const b = bc();
        a = b ? b.createScriptURL(a) : a;
        return new cc(a, mc)
    }

    function hc(a, b, c) {
        if (c == null) return b;
        if (typeof c === "string") return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var h = e[f];
                    h != null && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(h)))
                }
            }
        return b
    };
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    var nc = class {
            constructor(a) {
                this.g = a
            }
            toString() {
                return this.g
            }
        },
        oc = new nc("about:invalid#zClosurez");

    function pc(a) {
        if (a instanceof nc) return a.g;
        throw Error("");
    };
    class qc {
        constructor(a) {
            this.bj = a
        }
    }

    function rc(a) {
        return new qc(b => b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const sc = [rc("data"), rc("http"), rc("https"), rc("mailto"), rc("ftp"), new qc(a => /^[^:]*([/?#]|$)/.test(a))];

    function tc(a, b = sc) {
        if (a instanceof nc) return a;
        for (let c = 0; c < b.length; ++c) {
            const d = b[c];
            if (d instanceof qc && d.bj(a)) return new nc(a)
        }
    }

    function uc(a) {
        return tc(a, sc) || oc
    }
    var vc = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;

    function wc(a) {
        if (vc.test(a)) return a
    }

    function xc(a) {
        return a instanceof nc ? pc(a) : wc(a)
    };
    const yc = {};

    function zc(a) {
        return a instanceof Ac && a.constructor === Ac ? a.g : "type_error:SafeStyle"
    }
    class Ac {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g.toString()
        }
    }
    var Bc = new Ac("", yc);

    function Cc(a) {
        if (a instanceof nc) return 'url("' + a.toString().replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        if (a instanceof rb) a = vb(a);
        else {
            a = String(a);
            var b = a.replace(Dc, "$1").replace(Dc, "$1").replace(Ec, "url");
            if (Fc.test(b)) {
                if (b = !Gc.test(a)) {
                    let c = b = !0;
                    for (let d = 0; d < a.length; d++) {
                        const e = a.charAt(d);
                        e == "'" && c ? b = !b : e == '"' && b && (c = !c)
                    }
                    b = b && c && Hc(a)
                }
                a = b ? Ic(a) : "zClosurez"
            } else a = "zClosurez"
        }
        if (/[{;}]/.test(a)) throw new Sa("Value does not allow [{;}], got: %s.", [a]);
        return a
    }

    function Hc(a) {
        let b = !0;
        const c = /^[-_a-zA-Z0-9]$/;
        for (let d = 0; d < a.length; d++) {
            const e = a.charAt(d);
            if (e == "]") {
                if (b) return !1;
                b = !0
            } else if (e == "[") {
                if (!b) return !1;
                b = !1
            } else if (!b && !c.test(e)) return !1
        }
        return b
    }
    const Fc = RegExp("^[-+,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),
        Ec = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g"),
        Dc = RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)", "g"),
        Gc = /\/\*/;

    function Ic(a) {
        return a.replace(Ec, (b, c, d, e) => {
            let f = "";
            d = d.replace(/^(['"])(.*)\1$/, (h, k, l) => {
                f = k;
                return l
            });
            b = uc(d).toString();
            return c + f + b + f + e
        })
    };
    const Jc = {};

    function Kc(a) {
        return a instanceof Lc && a.constructor === Lc ? a.g : "type_error:SafeStyleSheet"
    }
    class Lc {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g.toString()
        }
    };
    const Mc = {};

    function Nc(a) {
        return a instanceof Oc && a.constructor === Oc ? a.g : "type_error:SafeHtml"
    }

    function Pc(a) {
        const b = bc();
        a = b ? b.createHTML(a) : a;
        return new Oc(a, Mc)
    }

    function Qc(a) {
        var b = Rc;
        b = b instanceof Oc ? b : Pc(Sb(String(b)));
        const c = [],
            d = e => {
                Array.isArray(e) ? e.forEach(d) : (e = e instanceof Oc ? e : Pc(Sb(String(e))), c.push(Nc(e).toString()))
            };
        a.forEach(d);
        return Pc(c.join(Nc(b).toString()))
    }

    function Sc(a) {
        return Qc(Array.prototype.slice.call(arguments))
    }
    class Oc {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g.toString()
        }
    }
    const Tc = /^[a-zA-Z0-9-]+$/,
        Uc = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        Vc = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        };
    var Rc = new Oc(r.trustedTypes && r.trustedTypes.emptyHTML || "", Mc);
    var Wc = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g
        }
    };

    function Xc(a) {
        return new Wc(a[0].toLowerCase())
    };

    function Yc(a) {
        return new Lc(a[0], Jc)
    };

    function Zc(a) {
        var b = {};
        if (a instanceof Oc) return a;
        a = $c(String(a));
        b.yo && (a = a.replace(/(^|[\r\n\t ]) /g, "$1&#160;"));
        b.xo && (a = a.replace(/(\r\n|\n|\r)/g, "<br>"));
        b.zo && (a = a.replace(/(\t+)/g, '<span style="white-space:pre">$1</span>'));
        return Pc(a)
    }

    function $c(a) {
        return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
    }

    function ad(a) {
        const b = Zc("");
        return Pc(a.map(c => Nc(Zc(c))).join(Nc(b).toString()))
    }
    const bd = /^[a-z][a-z\d-]*$/i,
        cd = "APPLET BASE EMBED IFRAME LINK MATH META OBJECT SCRIPT STYLE SVG TEMPLATE".split(" ");
    var dd = "AREA BR COL COMMAND HR IMG INPUT KEYGEN PARAM SOURCE TRACK WBR".split(" ");
    const ed = ["action", "formaction", "href"];

    function fd(a, b) {
        if (!bd.test("body")) throw Error("");
        if (cd.indexOf("BODY") !== -1) throw Error("");
        let c = "<body";
        a && (c += gd(a));
        Array.isArray(b) || (b = b === void 0 ? [] : [b]);
        dd.indexOf("BODY") !== -1 ? c += ">" : (a = ad(b.map(d => d instanceof Oc ? d : Zc(String(d)))), c += ">" + a.toString() + "</body>");
        return Pc(c)
    }

    function gd(a) {
        var b = "";
        const c = Object.keys(a);
        for (let f = 0; f < c.length; f++) {
            var d = c[f],
                e = a[d];
            if (!bd.test(d)) throw Error("");
            if (e !== void 0 && e !== null) {
                if (/^on/i.test(d)) throw Error("");
                ed.indexOf(d.toLowerCase()) !== -1 && (e = e instanceof nc ? e.toString() : wc(String(e)) || "about:invalid#zClosurez");
                e = `${d}="${Zc(String(e))}"`;
                b += " " + e
            }
        }
        return b
    };

    function hd(a) {
        const b = a.split(/\?|#/),
            c = /\?/.test(a) ? "?" + b[1] : "";
        return {
            path: b[0],
            params: c,
            hash: /#/.test(a) ? "#" + (c ? b[2] : b[1]) : ""
        }
    }

    function id(a, ...b) {
        if (b.length === 0) return gc(a[0]);
        let c = a[0];
        for (let d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
        return gc(c)
    }

    function jd(a) {
        var b = id `https://cse.google.com/cse.js`;
        b = hd(fc(b).toString());
        let c = b.params,
            d = c.length ? "&" : "?";
        a.forEach((e, f) => {
            e = e instanceof Array ? e : [e];
            for (let h = 0; h < e.length; h++) {
                const k = e[h];
                k !== null && k !== void 0 && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(k)), d = "&")
            }
        });
        return gc(b.path + c + b.hash)
    };

    function kd(a, ...b) {
        let c = a[0];
        for (let d = 0; d < a.length - 1; d++) c += String(b[d]) + a[d + 1];
        if (/[<>]/.test(c)) throw Error("Forbidden characters in style string: " + c);
        return new Ac(c, yc)
    };
    var ld = Ab(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = Nc(Rc);
        return !b.parentElement
    });

    function md(a, b) {
        if (ld())
            for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = Nc(b)
    }
    var nd = /^[\w+/_-]+[=]{0,2}$/;

    function od(a, b, c) {
        return Math.min(Math.max(a, b), c)
    }

    function pd(a) {
        return Array.prototype.reduce.call(arguments, function(b, c) {
            return b + c
        }, 0)
    }

    function qd(a) {
        return pd.apply(null, arguments) / arguments.length
    };

    function rd(a, b) {
        this.x = a !== void 0 ? a : 0;
        this.y = b !== void 0 ? b : 0
    }
    rd.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    rd.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    rd.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    rd.prototype.scale = function(a, b) {
        this.x *= a;
        this.y *= typeof b === "number" ? b : a;
        return this
    };

    function sd(a, b) {
        this.width = a;
        this.height = b
    }

    function td(a, b) {
        return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
    }
    aa = sd.prototype;
    aa.aspectRatio = function() {
        return this.width / this.height
    };
    aa.isEmpty = function() {
        return !(this.width * this.height)
    };
    aa.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    aa.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    aa.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    aa.scale = function(a, b) {
        this.width *= a;
        this.height *= typeof b === "number" ? b : a;
        return this
    };

    function ud(a) {
        var b = uc("#");
        b = xc(b);
        b !== void 0 && (a.href = b)
    };

    function vd(a, b, c) {
        var d = [Xc `width`, Xc `height`];
        if (d.length === 0) throw Error("");
        d = d.map(f => {
            if (f instanceof Wc) f = f.g;
            else throw Error("");
            return f
        });
        const e = b.toLowerCase();
        if (d.every(f => e.indexOf(f) !== 0)) throw Error(`Attribute "${b}" does not match any of the allowed prefixes.`);
        a.setAttribute(b, c)
    };

    function wd(a, b = `unexpected value ${a}!`) {
        throw Error(b);
    };

    function xd(a, b) {
        a.src = fc(b);
        (void 0) ? .wo || (b = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document.querySelector ? .("script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    };

    function yd(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };

    function zd(a, b) {
        const c = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };
        let d;
        d = b ? b.createElement("div") : r.document.createElement("div");
        return a.replace(Ad, function(e, f) {
            var h = c[e];
            if (h) return h;
            f.charAt(0) == "#" && (f = Number("0" + f.slice(1)), isNaN(f) || (h = String.fromCharCode(f)));
            if (!h) {
                h = Pc(e + " ");
                if (d.nodeType === 1 && (f = d.tagName, f === "SCRIPT" || f === "STYLE")) throw Error("");
                d.innerHTML = Nc(h);
                h = d.firstChild.nodeValue.slice(0, -1)
            }
            return c[e] = h
        })
    }
    var Ad = /&([^;\s<&]+);?/g;

    function Bd(a) {
        let b = 0;
        for (let c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
        return b
    }

    function Cd(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }

    function Dd(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    };
    const Ed = xa(1, !0);
    var Fd = xa(610401301, !1),
        Gd = xa(188588736, !0),
        Hd = xa(645172343, Ed),
        Id = xa(653718497, Ed);

    function Jd() {
        var a = r.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var Kd;
    const Ld = r.navigator;
    Kd = Ld ? Ld.userAgentData || null : null;

    function Md(a) {
        return Fd ? Kd ? Kd.brands.some(({
            brand: b
        }) => b && b.indexOf(a) != -1) : !1 : !1
    }

    function u(a) {
        return Jd().indexOf(a) != -1
    };

    function Nd() {
        return Fd ? !!Kd && Kd.brands.length > 0 : !1
    }

    function Qd() {
        return Nd() ? !1 : u("Opera")
    }

    function Rd() {
        return Nd() ? !1 : u("Trident") || u("MSIE")
    }

    function Sd() {
        return u("Firefox") || u("FxiOS")
    }

    function Td() {
        return u("Safari") && !(Ud() || (Nd() ? 0 : u("Coast")) || Qd() || (Nd() ? 0 : u("Edge")) || (Nd() ? Md("Microsoft Edge") : u("Edg/")) || (Nd() ? Md("Opera") : u("OPR")) || Sd() || u("Silk") || u("Android"))
    }

    function Ud() {
        return Nd() ? Md("Chromium") : (u("Chrome") || u("CriOS")) && !(Nd() ? 0 : u("Edge")) || u("Silk")
    }

    function Vd() {
        return u("Android") && !(Ud() || Sd() || Qd() || u("Silk"))
    };

    function Wd(a) {
        Wd[" "](a);
        return a
    }
    Wd[" "] = function() {};

    function Xd(a, b) {
        try {
            return Wd(a[b]), !0
        } catch (c) {}
        return !1
    };
    var Yd = Rd(),
        Zd = u("Edge") || Yd,
        $d = u("Gecko") && !($b(Jd(), "WebKit") && !u("Edge")) && !(u("Trident") || u("MSIE")) && !u("Edge"),
        ae = $b(Jd(), "WebKit") && !u("Edge");

    function be(a) {
        return a ? new ce(de(a)) : Ra || (Ra = new ce)
    }

    function ee(a) {
        a = a.document;
        a = a.compatMode == "CSS1Compat" ? a.documentElement : a.body;
        return new sd(a.clientWidth, a.clientHeight)
    }

    function fe(a) {
        var b = a.scrollingElement ? a.scrollingElement : ae || a.compatMode != "CSS1Compat" ? a.body || a.documentElement : a.documentElement;
        a = ge(a);
        return new rd(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }

    function ge(a) {
        return a.parentWindow || a.defaultView
    }

    function he(a, b) {
        b = String(b);
        a.contentType === "application/xhtml+xml" && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function ie(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    }

    function je(a) {
        var b;
        if (b = a.parentElement) return b;
        b = a.parentNode;
        return Da(b) && b.nodeType == 1 ? b : null
    }

    function de(a) {
        return a.nodeType == 9 ? a : a.ownerDocument || a.document
    }
    var ke = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        le = {
            IMG: " ",
            BR: "\n"
        };

    function me(a) {
        var b = [];
        ne(a, b, !0);
        a = b.join("");
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        a = a.replace(/ +/g, " ");
        a != " " && (a = a.replace(/^\s*/, ""));
        return a
    }

    function ne(a, b, c) {
        if (!(a.nodeName in ke))
            if (a.nodeType == 3) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in le) b.push(le[a.nodeName]);
        else
            for (a = a.firstChild; a;) ne(a, b, c), a = a.nextSibling
    }

    function oe(a, b, c) {
        if (!b && !c) return null;
        var d = b ? String(b).toUpperCase() : null;
        return pe(a, function(e) {
            return (!d || e.nodeName == d) && (!c || typeof e.className === "string" && $a(e.className.split(/\s+/), c))
        })
    }

    function pe(a, b) {
        for (var c = 0; a;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    }

    function ce(a) {
        this.g = a || r.document || document
    }
    aa = ce.prototype;
    aa.uh = function(a) {
        var b = this.g;
        return typeof a === "string" ? b.getElementById(a) : a
    };
    aa.Vj = ce.prototype.uh;

    function qe(a, b) {
        return he(a.g, b)
    }

    function re(a, b) {
        var c = a.g;
        a = he(c, "DIV");
        md(a, b);
        if (a.childNodes.length == 1) b = a.removeChild(a.firstChild);
        else
            for (b = c.createDocumentFragment(); a.firstChild;) b.appendChild(a.firstChild);
        return b
    }
    aa.da = function() {
        return ge(this.g)
    };
    aa.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && b.nodeType == 1) return a == b || a.contains(b);
        if (typeof a.compareDocumentPosition != "undefined") return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    aa.Gi = function(a) {
        var b, c = arguments.length;
        if (!c) return null;
        if (c == 1) return arguments[0];
        var d = [],
            e = Infinity;
        for (b = 0; b < c; b++) {
            for (var f = [], h = arguments[b]; h;) f.unshift(h), h = h.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            h = d[0][b];
            for (var k = 1; k < c; k++)
                if (h != d[k][b]) return f;
            f = h
        }
        return f
    };

    function se() {
        return Fd && Kd ? Kd.mobile : !te() && (u("iPod") || u("iPhone") || u("Android") || u("IEMobile"))
    }

    function te() {
        return Fd && Kd ? !Kd.mobile && (u("iPad") || u("Android") || u("Silk")) : u("iPad") || u("Android") && !u("Mobile") || u("Silk")
    };
    var ue = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function ve(a, b) {
        if (!b) return a;
        var c = a.indexOf("#");
        c < 0 && (c = a.length);
        var d = a.indexOf("?");
        if (d < 0 || d > c) {
            d = c;
            var e = ""
        } else e = a.substring(d + 1, c);
        a = [a.slice(0, d), e, a.slice(c)];
        c = a[1];
        a[1] = b ? c ? c + "&" + b : b : c;
        return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
    }

    function we(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) we(a, String(b[d]), c);
        else b != null && c.push(a + (b === "" ? "" : "=" + encodeURIComponent(String(b))))
    };

    function xe(a) {
        try {
            return !!a && a.location.href != null && Xd(a, "foo")
        } catch {
            return !1
        }
    }

    function ye(a, b = r) {
        b = ze(b);
        let c = 0;
        for (; b && c++ < 40 && !a(b);) b = ze(b)
    }

    function ze(a) {
        try {
            const b = a.parent;
            if (b && b != a) return b
        } catch {}
        return null
    }

    function Ae(a) {
        return xe(a.top) ? a.top : null
    }

    function Be(a, b) {
        const c = Ce("SCRIPT", a);
        xd(c, b);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    }

    function De(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function Ee() {
        if (!globalThis.crypto) return Math.random();
        try {
            const a = new Uint32Array(1);
            globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch {
            return Math.random()
        }
    }

    function Fe(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function Ge(a) {
        const b = [];
        Fe(a, function(c) {
            b.push(c)
        });
        return b
    }

    function He(a) {
        const b = a.length;
        if (b == 0) return 0;
        let c = 305419896;
        for (let d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return c > 0 ? c : 4294967296 + c
    }
    var Je = Ab(() => Za(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Ie) || Math.random() < 1E-4);
    const Ie = a => Jd().indexOf(a) != -1;
    var Ke = /^([0-9.]+)px$/,
        Le = /^(-?[0-9.]{1,30})$/;

    function Me(a) {
        if (!Le.test(a)) return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }

    function Ne(a) {
        return (a = Ke.exec(a)) ? +a[1] : null
    }
    var Oe = {
        Ak: "allow-forms",
        Bk: "allow-modals",
        Ck: "allow-orientation-lock",
        Dk: "allow-pointer-lock",
        Ek: "allow-popups",
        Fk: "allow-popups-to-escape-sandbox",
        Gk: "allow-presentation",
        Hk: "allow-same-origin",
        Ik: "allow-scripts",
        Jk: "allow-top-navigation",
        Kk: "allow-top-navigation-by-user-activation"
    };
    const Pe = Ab(() => Ge(Oe));

    function Qe() {
        var a = ["allow-top-navigation", "allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"];
        const b = Pe();
        return a.length ? Wa(b, c => !$a(a, c)) : b
    }

    function Re() {
        const a = Ce("IFRAME"),
            b = {};
        Ua(Pe(), c => {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    }
    var Se = (a, b) => {
            try {
                return !(!a.frames || !a.frames[b])
            } catch {
                return !1
            }
        },
        Te = (a, b) => {
            for (let c = 0; c < 50; ++c) {
                if (Se(a, b)) return a;
                if (!(a = ze(a))) break
            }
            return null
        },
        Ue = Ab(() => se() ? 2 : te() ? 1 : 0),
        v = (a, b) => {
            Fe(b, (c, d) => {
                a.style.setProperty(d, c, "important")
            })
        },
        We = (a, b) => {
            if ("length" in a.style) {
                a = a.style;
                const c = a.length;
                for (let d = 0; d < c; d++) {
                    const e = a[d];
                    b(a[e], e, a)
                }
            } else a = Ve(a.style.cssText), Fe(a, b)
        },
        Ve = a => {
            const b = {};
            if (a) {
                const c = /\s*:\s*/;
                Ua((a || "").split(/\s*;\s*/), d => {
                    if (d) {
                        var e = d.split(c);
                        d = e[0];
                        e = e[1];
                        d &&
                            e && (b[d.toLowerCase()] = e)
                    }
                })
            }
            return b
        },
        Xe = a => {
            const b = /!\s*important/i;
            We(a, (c, d) => {
                b.test(c) ? b.test(c) : a.style.setProperty(d, c, "important")
            })
        };
    const Ye = {
            ["http://googleads.g.doubleclick.net"]: !0,
            ["http://pagead2.googlesyndication.com"]: !0,
            ["https://googleads.g.doubleclick.net"]: !0,
            ["https://pagead2.googlesyndication.com"]: !0
        },
        Ze = /\.proxy\.(googleprod|googlers)\.com(:\d+)?$/,
        $e = /.*domain\.test$/,
        af = /\.prod\.google\.com(:\d+)?$/;
    var bf = a => Ye[a] || Ze.test(a) || $e.test(a) || af.test(a);
    let cf = [];
    const df = () => {
        const a = cf;
        cf = [];
        for (const b of a) try {
            b()
        } catch {}
    };
    var ef = () => {
            var a = Math.random;
            return Math.floor(a() * 2 ** 52)
        },
        ff = (a, b) => {
            if (typeof a.goog_pvsid !== "number") try {
                Object.defineProperty(a, "goog_pvsid", {
                    value: ef(),
                    configurable: !1
                })
            } catch (c) {
                b && b.ba(784, c)
            }
            a = Number(a.goog_pvsid);
            b && (!a || a <= 0) && b.ba(784, Error(`Invalid correlator, ${a}`));
            return a || -1
        },
        gf = (a, b) => {
            a.document.readyState === "complete" ? (cf.push(b), cf.length == 1 && (window.Promise ? Promise.resolve().then(df) : window.setImmediate ? setImmediate(df) : setTimeout(df, 0))) : a.addEventListener("load", b)
        },
        hf = (a,
            b) => new Promise(c => {
            setTimeout(() => void c(b), a)
        });

    function Ce(a, b = document) {
        return b.createElement(String(a).toLowerCase())
    }
    var jf = a => {
            let b = a;
            for (; a && a != a.parent;) a = a.parent, xe(a) && (b = a);
            return b
        },
        lf = a => Ud() && se() ? kf(a) : 1,
        kf = a => {
            var b = Ae(a);
            if (!b) return 1;
            a = Ue() === 0;
            const c = !!b.document.querySelector('meta[name=viewport][content*="width=device-width"]'),
                d = b.innerWidth;
            b = b.outerWidth;
            if (d === 0) return 1;
            const e = Math.round((b / d + Number.EPSILON) * 100) / 100;
            return e === 1 ? 1 : a || c ? e : Math.round((b / d / .4 + Number.EPSILON) * 100) / 100
        };

    function mf(a) {
        r.setTimeout(() => {
            throw a;
        }, 0)
    };
    Vd();
    Ud();
    Td();
    var nf = {},
        of = null;

    function pf(a) {
        var b = 3;
        b === void 0 && (b = 0);
        qf();
        b = nf[b];
        const c = Array(Math.floor(a.length / 3)),
            d = b[64] || "";
        let e = 0,
            f = 0;
        for (; e < a.length - 2; e += 3) {
            var h = a[e],
                k = a[e + 1],
                l = a[e + 2],
                m = b[h >> 2];
            h = b[(h & 3) << 4 | k >> 4];
            k = b[(k & 15) << 2 | l >> 6];
            l = b[l & 63];
            c[f++] = m + h + k + l
        }
        m = 0;
        l = d;
        switch (a.length - e) {
            case 2:
                m = a[e + 1], l = b[(m & 15) << 2] || d;
            case 1:
                a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | m >> 4] + l + d
        }
        return c.join("")
    }

    function rf(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            e > 255 && (b[c++] = e & 255, e >>= 8);
            b[c++] = e
        }
        return pf(b)
    }

    function sf(a) {
        var b = [];
        tf(a, function(c) {
            b.push(c)
        });
        return b
    }

    function tf(a, b) {
        function c(l) {
            for (; d < a.length;) {
                var m = a.charAt(d++),
                    n = of [m];
                if (n != null) return n;
                if (!/^[\s\xa0]*$/.test(m)) throw Error("Unknown base64 encoding at char: " + m);
            }
            return l
        }
        qf();
        for (var d = 0;;) {
            var e = c(-1),
                f = c(0),
                h = c(64),
                k = c(64);
            if (k === 64 && e === -1) break;
            b(e << 2 | f >> 4);
            h != 64 && (b(f << 4 & 240 | h >> 2), k != 64 && b(h << 6 & 192 | k))
        }
    }

    function qf() {
        if (! of ) { of = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; c < 5; c++) {
                var d = a.concat(b[c].split(""));
                nf[c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e]; of [f] === void 0 && ( of [f] = e)
                }
            }
        }
    };

    function uf(a) {
        let b = "",
            c = 0;
        const d = a.length - 10240;
        for (; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
        b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
        return btoa(b)
    }
    const vf = /[-_.]/g,
        wf = {
            "-": "+",
            _: "/",
            ".": "="
        };

    function xf(a) {
        return wf[a] || ""
    }

    function yf(a) {
        return a != null && a instanceof Uint8Array
    }
    var zf = {},
        Af = typeof structuredClone != "undefined";
    let Bf;

    function Cf(a) {
        if (a !== zf) throw Error("illegal external caller");
    }

    function Df() {
        return Bf || (Bf = new Ef(null, zf))
    }
    var Ef = class {
        constructor(a, b) {
            Cf(b);
            this.g = a;
            if (a != null && a.length === 0) throw Error("ByteString should be constructed with non-empty values");
        }
        isEmpty() {
            return this.g == null
        }
    };
    let Ff = 0,
        Gf = 0;

    function Hf(a) {
        const b = a >>> 0;
        Ff = b;
        Gf = (a - b) / 4294967296 >>> 0
    }

    function If(a) {
        if (a < 0) {
            Hf(-a);
            a = Ff;
            var b = Gf;
            b = ~b;
            a ? a = ~a + 1 : b += 1;
            const [c, d] = [a, b];
            Ff = c >>> 0;
            Gf = d >>> 0
        } else Hf(a)
    }

    function Jf(a, b) {
        b >>>= 0;
        a >>>= 0;
        var c;
        b <= 2097151 ? c = "" + (4294967296 * b + a) : c = "" + (BigInt(b) << BigInt(32) | BigInt(a));
        return c
    }

    function Kf() {
        var a = Ff,
            b = Gf,
            c;
        b & 2147483648 ? c = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0)) : c = Jf(a, b);
        return c
    }

    function Lf(a) {
        a.length < 16 ? If(Number(a)) : (a = BigInt(a), Ff = Number(a & BigInt(4294967295)) >>> 0, Gf = Number(a >> BigInt(32) & BigInt(4294967295)))
    };

    function Mf(a) {
        return Array.prototype.slice.call(a)
    };
    var x = Symbol(),
        Nf = Symbol(),
        Of = Symbol(),
        Pf = Symbol(),
        Qf = Symbol();

    function Rf(a) {
        return !!((a[x] | 0) & 2)
    }

    function Sf(a) {
        a[x] |= 34;
        return a
    }

    function Tf(a) {
        a[x] |= 32;
        return a
    }

    function Uf(a, b) {
        b[x] = (a | 0) & -14591
    }

    function Vf(a, b) {
        b[x] = (a | 34) & -14557
    };
    var Wf = {},
        Xf = {};

    function Yf(a) {
        return !(!a || typeof a !== "object" || a.fj !== Xf)
    }

    function Zf(a) {
        return a !== null && typeof a === "object" && !Array.isArray(a) && a.constructor === Object
    }

    function $f(a, b, c) {
        if (a != null)
            if (typeof a === "string") a = a ? new Ef(a, zf) : Df();
            else if (a.constructor !== Ef)
            if (yf(a)) a = a.length ? new Ef(c ? a : new Uint8Array(a), zf) : Df();
            else {
                if (!b) throw Error();
                a = void 0
            }
        return a
    }

    function ag(a, b, c) {
        if (!Array.isArray(a) || a.length) return !1;
        const d = a[x] | 0;
        if (d & 1) return !0;
        if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
        a[x] = d | 1;
        return !0
    }
    var bg;
    const cg = [];
    cg[x] = 55;
    bg = Object.freeze(cg);

    function dg(a) {
        if (a & 2) throw Error();
    }
    class jg {
        constructor(a, b, c) {
            this.j = 0;
            this.g = a;
            this.i = b;
            this.l = c
        }
        next() {
            if (this.j < this.g.length) {
                const a = this.g[this.j++];
                return {
                    done: !1,
                    value: this.i ? this.i.call(this.l, a) : a
                }
            }
            return {
                done: !0,
                value: void 0
            }
        }[Symbol.iterator]() {
            return new jg(this.g, this.i, this.l)
        }
    }
    var kg = Object.freeze({});
    Object.freeze({});
    var lg = Object.freeze({});
    let mg, ng;

    function og(a) {
        if (ng) throw Error("");
        ng = b => {
            r.setTimeout(() => {
                a(b)
            }, 0)
        }
    }

    function pg(a) {
        if (ng) try {
            ng(a)
        } catch (b) {
            throw b.cause = a, b;
        }
    }

    function qg() {
        const a = Error();
        yd(a, "incident");
        ng ? pg(a) : mf(a)
    }

    function rg(a) {
        a = Error(a);
        yd(a, "warning");
        pg(a);
        return a
    };

    function sg(a) {
        if (a != null && typeof a !== "number") throw Error(`Value of float/double field must be a number, found ${typeof a}: ${a}`);
        return a
    }

    function tg(a) {
        if (typeof a !== "boolean") throw Error(`Expected boolean but got ${Aa(a)}: ${a}`);
        return a
    }
    const ug = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;

    function vg(a) {
        const b = typeof a;
        return b === "number" ? Number.isFinite(a) : b !== "string" ? !1 : ug.test(a)
    }

    function wg(a) {
        if (!Number.isFinite(a)) throw rg("enum");
        return a | 0
    }

    function xg(a) {
        return a == null ? a : wg(a)
    }

    function yg(a) {
        return a == null ? a : Number.isFinite(a) ? a | 0 : void 0
    }

    function zg(a) {
        if (typeof a !== "number") throw rg("int32");
        if (!Number.isFinite(a)) throw rg("int32");
        return a | 0
    }

    function Ag(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return Number.isFinite(a) ? a | 0 : void 0
    }

    function Bg(a) {
        if (typeof a !== "number") throw rg("uint32");
        if (!Number.isFinite(a)) throw rg("uint32");
        return a >>> 0
    }

    function Cg(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return Number.isFinite(a) ? a >>> 0 : void 0
    }

    function Dg(a, b) {
        b = !!b;
        if (!vg(a)) throw rg("int64");
        return typeof a === "string" ? Eg(a) : b ? Fg(a) : Gg(a)
    }

    function Hg(a) {
        return a == null ? a : Dg(a)
    }

    function Ig(a) {
        return a[0] === "-" ? !1 : a.length < 20 ? !0 : a.length === 20 && Number(a.substring(0, 6)) < 184467
    }

    function Jg(a) {
        return a[0] === "-" ? a.length < 20 ? !0 : a.length === 20 && Number(a.substring(0, 7)) > -922337 : a.length < 19 ? !0 : a.length === 19 && Number(a.substring(0, 6)) < 922337
    }

    function Kg(a) {
        if (a < 0) {
            If(a);
            const b = Jf(Ff, Gf);
            a = Number(b);
            return Number.isSafeInteger(a) ? a : b
        }
        if (Ig(String(a))) return a;
        If(a);
        return Gf * 4294967296 + (Ff >>> 0)
    }

    function Gg(a) {
        a = Math.trunc(a);
        if (!Number.isSafeInteger(a)) {
            If(a);
            var b = Ff,
                c = Gf;
            if (a = c & 2147483648) b = ~b + 1 >>> 0, c = ~c >>> 0, b == 0 && (c = c + 1 >>> 0);
            b = c * 4294967296 + (b >>> 0);
            a = a ? -b : b
        }
        return a
    }

    function Fg(a) {
        a = Math.trunc(a);
        if (Number.isSafeInteger(a)) a = String(a);
        else {
            {
                const b = String(a);
                Jg(b) ? a = b : (If(a), a = Kf())
            }
        }
        return a
    }

    function Lg(a) {
        a = Math.trunc(a);
        if (a >= 0 && Number.isSafeInteger(a)) a = String(a);
        else {
            {
                const b = String(a);
                Ig(b) ? a = b : (If(a), a = Jf(Ff, Gf))
            }
        }
        return a
    }

    function Eg(a) {
        var b = Math.trunc(Number(a));
        if (Number.isSafeInteger(b)) return String(b);
        b = a.indexOf(".");
        b !== -1 && (a = a.substring(0, b));
        Jg(a) || (Lf(a), a = Kf());
        return a
    }

    function Mg(a) {
        var b = Math.trunc(Number(a));
        if (Number.isSafeInteger(b) && b >= 0) return String(b);
        b = a.indexOf(".");
        b !== -1 && (a = a.substring(0, b));
        Ig(a) || (Lf(a), a = Jf(Ff, Gf));
        return a
    }

    function Ng(a) {
        if (a == null) return a;
        if (vg(a)) {
            var b;
            typeof a === "number" ? b = Gg(a) : b = Eg(a);
            return b
        }
    }

    function Og(a, b) {
        b = !!b;
        if (!vg(a)) throw rg("uint64");
        typeof a === "string" ? a = Mg(a) : b ? a = Lg(a) : (a = Math.trunc(a), a = a >= 0 && Number.isSafeInteger(a) ? a : Kg(a));
        return a
    }

    function Pg(a) {
        return a == null ? a : Og(a)
    }

    function Qg(a) {
        if (a == null) return a;
        if (vg(a)) return typeof a === "string" ? Mg(a) : Lg(a)
    }

    function Rg(a) {
        if (typeof a !== "string") throw Error();
        return a
    }

    function Sg(a) {
        if (a != null && typeof a !== "string") throw Error();
        return a
    }

    function Tg(a) {
        return a == null || typeof a === "string" ? a : void 0
    }

    function Ug(a, b, c, d) {
        if (a != null && typeof a === "object" && a.Gd === Wf) return a;
        if (!Array.isArray(a)) return c ? d & 2 ? Vg(b) : new b : void 0;
        let e = c = a[x] | 0;
        e === 0 && (e |= d & 32);
        e |= d & 2;
        e !== c && (a[x] = e);
        return new b(a)
    }

    function Vg(a) {
        var b = a[Nf];
        if (b) return b;
        b = new a;
        Sf(b.U);
        return a[Nf] = b
    }

    function Wg(a, b, c) {
        return b ? Rg(a) : Tg(a) ? ? (c ? "" : void 0)
    };
    const Xg = {},
        Yg = (() => class extends Map {
            constructor() {
                super()
            }
        })();

    function Zg(a) {
        return a
    }

    function $g(a) {
        if (a.ac & 2) throw Error("Cannot mutate an immutable Map");
    }
    var dh = class extends Yg {
        constructor(a, b, c = Zg, d = Zg) {
            super();
            let e = a[x] | 0;
            e |= 64;
            this.ac = a[x] = e;
            this.Zd = b;
            this.yc = c;
            this.xf = this.Zd ? ah : d;
            for (let f = 0; f < a.length; f++) {
                const h = a[f],
                    k = c(h[0], !1, !0);
                let l = h[1];
                b ? l === void 0 && (l = null) : l = d(h[1], !1, !0, void 0, void 0, e);
                super.set(k, l)
            }
        }
        tf(a = bh) {
            if (this.size !== 0) return this.sf(a)
        }
        sf(a = bh) {
            const b = [],
                c = super.entries();
            for (var d; !(d = c.next()).done;) d = d.value, d[0] = a(d[0]), d[1] = a(d[1]), b.push(d);
            return b
        }
        clear() {
            $g(this);
            super.clear()
        }
        delete(a) {
            $g(this);
            return super.delete(this.yc(a, !0, !1))
        }
        entries() {
            var a = this.yg();
            return new jg(a, ch, this)
        }
        keys() {
            return this.cj()
        }
        values() {
            var a = this.yg();
            return new jg(a, dh.prototype.get, this)
        }
        forEach(a, b) {
            super.forEach((c, d) => {
                a.call(b, this.get(d), d, this)
            })
        }
        set(a, b) {
            $g(this);
            a = this.yc(a, !0, !1);
            return a == null ? this : b == null ? (super.delete(a), this) : super.set(a, this.xf(b, !0, !0, this.Zd, !1, this.ac))
        }
        has(a) {
            return super.has(this.yc(a, !1, !1))
        }
        get(a) {
            a = this.yc(a, !1, !1);
            const b = super.get(a);
            if (b !== void 0) {
                var c = this.Zd;
                return c ? (c = this.xf(b, !1, !0, c, this.Uh,
                    this.ac), c !== b && super.set(a, c), c) : b
            }
        }
        yg() {
            return Array.from(super.keys())
        }
        cj() {
            return super.keys()
        }[Symbol.iterator]() {
            return this.entries()
        }
    };
    dh.prototype.toJSON = void 0;
    dh.prototype.fj = Xf;

    function ah(a, b, c, d, e, f) {
        a = Ug(a, d, c, f);
        e && (a = eh(a));
        return a
    }

    function bh(a) {
        return a
    }

    function ch(a) {
        return [a, this.get(a)]
    }
    let fh;

    function gh() {
        return fh || (fh = new dh(Sf([]), void 0, void 0, void 0, Xg))
    };
    let hh;

    function ih(a, b) {
        hh = b;
        a = new a(b);
        hh = void 0;
        return a
    };

    function jh(a, b) {
        return kh(b)
    }

    function kh(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (ag(a, void 0, 0)) return
                    } else {
                        if (yf(a)) return uf(a);
                        if (a instanceof Ef) {
                            const b = a.g;
                            return b == null ? "" : typeof b === "string" ? b : a.g = uf(b)
                        }
                        if (a instanceof dh) return a.tf()
                    }
        }
        return a
    };

    function lh(a, b, c) {
        a = Mf(a);
        var d = a.length;
        const e = b & 256 ? a[d - 1] : void 0;
        d += e ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
        if (e) {
            b = a[b] = {};
            for (const f in e) Object.prototype.hasOwnProperty.call(e, f) && (b[f] = c(e[f]))
        }
        return a
    }

    function mh(a, b, c, d, e) {
        if (a != null) {
            if (Array.isArray(a)) a = ag(a, void 0, 0) ? void 0 : e && (a[x] | 0) & 2 ? a : nh(a, b, c, d !== void 0, e);
            else if (Zf(a)) {
                const f = {};
                for (let h in a) Object.prototype.hasOwnProperty.call(a, h) && (f[h] = mh(a[h], b, c, d, e));
                a = f
            } else a = b(a, d);
            return a
        }
    }

    function nh(a, b, c, d, e) {
        const f = d || c ? a[x] | 0 : 0;
        d = d ? !!(f & 32) : void 0;
        a = Mf(a);
        for (let h = 0; h < a.length; h++) a[h] = mh(a[h], b, c, d, e);
        c && c(f, a);
        return a
    }

    function oh(a) {
        return mh(a, ph, void 0, void 0, !1)
    }

    function ph(a) {
        a.Gd === Wf ? a = a.toJSON() : a instanceof Ef ? (a = a.g || "", a = typeof a === "string" ? a : new Uint8Array(a)) : a = yf(a) ? new Uint8Array(a) : a instanceof dh ? a.tf(oh) : a;
        return a
    }

    function qh(a) {
        return mh(a, rh, void 0, void 0, !1)
    }

    function rh(a) {
        return a.Gd === Wf ? a.toJSON() : a instanceof dh ? a.tf(qh) : kh(a)
    }
    var sh = Af ? structuredClone : a => nh(a, ph, void 0, void 0, !1);

    function th(a, b, c = Vf) {
        if (a != null) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[x] | 0;
                if (d & 2) return a;
                b && (b = d === 0 || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (a[x] = (d | 34) & -12293, a) : nh(a, th, d & 4 ? Vf : c, !0, !0)
            }
            a.Gd === Wf ? (c = a.U, d = c[x], a = d & 2 ? a : ih(a.constructor, uh(c, d, !0))) : a instanceof dh && !(a.ac & 2) && (c = Sf(a.sf(th)), a = new dh(c, a.Zd, a.yc, a.xf));
            return a
        }
    }

    function vh(a) {
        const b = a.U;
        return ih(a.constructor, uh(b, b[x], !1))
    }

    function uh(a, b, c) {
        const d = c || b & 2 ? Vf : Uf,
            e = !!(b & 32);
        a = lh(a, b, f => th(f, e, d));
        a[x] = a[x] | 32 | (c ? 2 : 0);
        return a
    }

    function eh(a) {
        const b = a.U,
            c = b[x];
        return c & 2 ? ih(a.constructor, uh(b, c, !1)) : a
    };

    function wh(a) {
        if (typeof Proxy !== "function") return a;
        let b = xh ? .get(a);
        if (b) return b;
        b = new Proxy(a, {
            set(c, d, e) {
                yh();
                c[d] = e;
                return !0
            }
        });
        zh(a, b);
        return b
    }

    function yh() {
        qg()
    }
    let xh = void 0,
        Ah = void 0;

    function zh(a, b) {
        (xh || (xh = new WeakMap)).set(a, b);
        (Ah || (Ah = new WeakMap)).set(b, a)
    };

    function Bh(a, b, c, d) {
        if (!(4 & b)) return !0;
        if (c == null) return !1;
        !d && c === 0 && (4096 & b || 8192 & b) && (a.constructor[Pf] = (a.constructor[Pf] | 0) + 1) < 5 && qg();
        return c === 0 ? !1 : !(c & b)
    }

    function Ch(a, b) {
        a = a.U;
        return Dh(a, a[x], b)
    }

    function Eh(a, b, c, d) {
        b = d + (+!!(b & 512) - 1);
        if (!(b < 0 || b >= a.length || b >= c)) return a[b]
    }

    function Dh(a, b, c, d) {
        if (c === -1) return null;
        const e = b >> 14 & 1023 || 536870912;
        if (c >= e) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var f = a.length;
            return d && b & 256 && (d = a[f - 1][c], d != null) ? (Eh(a, b, e, c) && Of != null && (a = mg ? ? (mg = {}), b = a[Of] || 0, b >= 4 || (a[Of] = b + 1, qg())), d) : Eh(a, b, e, c)
        }
    }

    function Fh(a, b, c) {
        const d = a.U;
        let e = d[x];
        dg(e);
        Gh(d, e, b, c);
        return a
    }

    function Gh(a, b, c, d, e) {
        const f = b >> 14 & 1023 || 536870912;
        if (c >= f || e && !Hd) {
            let h = b;
            if (b & 256) e = a[a.length - 1];
            else {
                if (d == null) return h;
                e = a[f + (+!!(b & 512) - 1)] = {};
                h |= 256
            }
            e[c] = d;
            c < f && (a[c + (+!!(b & 512) - 1)] = void 0);
            h !== b && (a[x] = h);
            return h
        }
        a[c + (+!!(b & 512) - 1)] = d;
        b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
        return b
    }

    function Hh(a, b, c) {
        return Ih(a, b, c, !1) !== void 0
    }

    function Jh(a, b, c, d) {
        var e = b & 2;
        let f = Dh(a, b, c, d);
        Array.isArray(f) || (f = bg);
        const h = !!(b & 32);
        let k = f[x] | 0;
        k === 0 && h && !e ? (k |= 33, f[x] = k) : k & 1 || (k |= 1, f[x] = k);
        if (e) k & 2 || Sf(f), Object.freeze(f);
        else if (2 & k || 2048 & k) f = Mf(f), e = 1, h && (e |= 32), f[x] = e, Gh(a, b, c, f, d);
        return f
    }

    function Kh(a, b) {
        a = a.U;
        let c = a[x];
        const d = Dh(a, c, b);
        var e = d == null || typeof d === "number" ? d : d === "NaN" || d === "Infinity" || d === "-Infinity" ? Number(d) : void 0;
        e != null && e !== d && Gh(a, c, b, e);
        return e
    }

    function y(a) {
        return a === kg ? 2 : Id ? 5 : 2
    }

    function Lh(a, b, c, d, e) {
        const f = a.U;
        var h = f[x];
        const k = 2 & h ? 1 : d;
        d = Mh(f, h, b);
        var l = d[x] | 0;
        if (Bh(a, l, e, !1)) {
            if (4 & l || Object.isFrozen(d)) d = Mf(d), l = Nh(l, h), h = Gh(f, h, b, d);
            let n = a = 0;
            for (; a < d.length; a++) {
                const p = c(d[a]);
                p != null && (d[n++] = p)
            }
            n < a && (d.length = n);
            l = Oh(l, h);
            l = (l | 20) & -4097;
            l &= -8193;
            e && (l |= e);
            d[x] = l;
            2 & l && Object.freeze(d)
        }
        let m;
        k === 1 || k === 4 && 32 & l ? Ph(l) || (h = l, l |= 2, l !== h && (d[x] = l), Object.freeze(d)) : (e = k !== 5 ? !1 : !!(32 & l) || Ph(l) || !!xh ? .get(d), (k === 2 || e) && Ph(l) && (d = Mf(d), l = Nh(l, h), l = Qh(l, h, !1), d[x] = l, h = Gh(f,
            h, b, d)), Ph(l) || (b = l, l = Qh(l, h, !1), l !== b && (d[x] = l)), e && (m = wh(d)));
        return m || d
    }

    function Mh(a, b, c, d) {
        a = Dh(a, b, c, d);
        return Array.isArray(a) ? a : bg
    }

    function Oh(a, b) {
        a === 0 && (a = Nh(a, b));
        return a | 1
    }

    function Ph(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    }

    function Rh(a) {
        var b = Sh,
            c = a.U;
        const d = c[x];
        var e = Dh(c, d, 14);
        a = d & 2;
        a: {
            var f = e,
                h = d & 2;e = !1;
            if (f == null) {
                if (h) {
                    c = gh();
                    break a
                }
                f = []
            } else if (f.constructor === dh) {
                if ((f.ac & 2) == 0 || h) {
                    c = f;
                    break a
                }
                f = f.sf()
            } else Array.isArray(f) ? e = Rf(f) : f = [];
            if (h) {
                if (!f.length) {
                    c = gh();
                    break a
                }
                e || (e = !0, Sf(f))
            } else if (e) {
                e = !1;
                h = Mf(f);
                for (f = 0; f < h.length; f++) {
                    const k = h[f] = Mf(h[f]);
                    Array.isArray(k[1]) && (k[1] = Sf(k[1]))
                }
                f = h
            }
            e || ((f[x] | 0) & 64 ? f[x] &= -33 : 32 & d && Tf(f));e = new dh(f, b, Wg, void 0);Gh(c, d, 14, e, !1);c = e
        }!a && b && (c.Uh = !0);
        return c
    }

    function Th(a, b, c, d) {
        const e = a.U;
        let f = e[x];
        dg(f);
        if (c == null) return Gh(e, f, b), a;
        c = Ah ? .get(c) || c;
        let h = c[x] | 0,
            k = h;
        var l = !!(2 & h) || Object.isFrozen(c);
        const m = !l && (void 0 === lg || !1);
        if (Bh(a, h))
            for (h = 21, l && (c = Mf(c), k = 0, h = Nh(h, f), h = Qh(h, f, !0)), l = 0; l < c.length; l++) c[l] = d(c[l]);
        m && (c = Mf(c), k = 0, h = Nh(h, f), h = Qh(h, f, !0));
        h !== k && (c[x] = h);
        Gh(e, f, b, c);
        return a
    }

    function Uh(a, b, c, d) {
        const e = a.U;
        let f = e[x];
        dg(f);
        Gh(e, f, b, (d === "0" ? Number(c) === 0 : c === d) ? void 0 : c);
        return a
    }

    function Vh(a, b) {
        var c = a.U,
            d = c[x] | 0;
        dg(a.U[x]);
        c = Jh(c, d, 3, !1);
        d = c[x] | 0;
        d = !!(4 & d) && !!(4096 & d);
        if (Array.isArray(b))
            for (var e = 0; e < b.length; e++) c.push(Dg(b[e], d));
        else
            for (e of b) c.push(Dg(e, d));
        return a
    }

    function Wh(a, b, c, d) {
        var e = a.U;
        const f = e[x];
        dg(f);
        b = Jh(e, f, b);
        e = b[x] | 0;
        d = c(d, !!(4 & e) && !!(4096 & e));
        b.push(d);
        return a
    }

    function Xh(a, b, c, d) {
        const e = a.U;
        var f = e[x];
        dg(f);
        if (d == null) {
            var h = Yh(e);
            if (Zh(h, e, f, c) === b) h.set(c, 0);
            else return a
        } else {
            h = Yh(e);
            const k = Zh(h, e, f, c);
            k !== b && (k && (f = Gh(e, f, k)), h.set(c, b))
        }
        Gh(e, f, b, d);
        return a
    }

    function $h(a, b) {
        a = a.U;
        return Zh(Yh(a), a, a[x], b)
    }

    function Yh(a) {
        return a[Qf] ? ? (a[Qf] = new Map)
    }

    function Zh(a, b, c, d) {
        let e = a.get(d);
        if (e != null) return e;
        e = 0;
        for (let f = 0; f < d.length; f++) {
            const h = d[f];
            Dh(b, c, h) != null && (e !== 0 && (c = Gh(b, c, e)), e = h)
        }
        a.set(d, e);
        return e
    }

    function Ih(a, b, c, d) {
        a = a.U;
        let e = a[x];
        const f = Dh(a, e, c, d);
        b = Ug(f, b, !1, e);
        b !== f && b != null && Gh(a, e, c, b, d);
        return b
    }

    function ai(a) {
        var b = bi;
        return (a = Ih(a, b, 1, !1)) ? a : Vg(b)
    }

    function z(a, b, c) {
        b = Ih(a, b, c, !1);
        if (b == null) return b;
        a = a.U;
        let d = a[x];
        if (!(d & 2)) {
            const e = eh(b);
            e !== b && (b = e, Gh(a, d, c, b, !1))
        }
        return b
    }

    function ci(a, b, c, d, e, f, h, k) {
        var l = !!(2 & b);
        e = l ? 1 : e;
        h = !!h;
        k && (k = !l);
        l = Mh(a, b, d, f);
        var m = l[x] | 0,
            n = !!(4 & m);
        if (!n) {
            m = Oh(m, b);
            var p = l,
                q = b;
            const w = !!(2 & m);
            w && (q |= 2);
            let A = !w,
                D = !0,
                G = 0,
                I = 0;
            for (; G < p.length; G++) {
                const B = Ug(p[G], c, !1, q);
                if (B instanceof c) {
                    if (!w) {
                        const J = Rf(B.U);
                        A && (A = !J);
                        D && (D = J)
                    }
                    p[I++] = B
                }
            }
            I < G && (p.length = I);
            m |= 4;
            m = D ? m | 16 : m & -17;
            m = A ? m | 8 : m & -9;
            p[x] = m;
            w && Object.freeze(p)
        }
        if (k && !(8 & m || !l.length && (e === 1 || e === 4 && 32 & m))) {
            Ph(m) && (l = Mf(l), m = Nh(m, b), b = Gh(a, b, d, l, f));
            c = l;
            k = m;
            for (p = 0; p < c.length; p++) m = c[p],
                q = eh(m), m !== q && (c[p] = q);
            k |= 8;
            k = c.length ? k & -17 : k | 16;
            m = c[x] = k
        }
        let t;
        e === 1 || e === 4 && 32 & m ? Ph(m) || (b = m, m |= !l.length || 16 & m && (!n || 32 & m) ? 2 : 2048, m !== b && (l[x] = m), Object.freeze(l)) : (n = e !== 5 ? !1 : !!(32 & m) || Ph(m) || !!xh ? .get(l), (e === 2 || n) && Ph(m) && (l = Mf(l), m = Nh(m, b), m = Qh(m, b, h), l[x] = m, b = Gh(a, b, d, l, f)), Ph(m) || (a = m, m = Qh(m, b, h), m !== a && (l[x] = m)), n && (t = wh(l)));
        return t || l
    }

    function di(a, b, c, d) {
        a = a.U;
        const e = a[x];
        return ci(a, e, b, c, d, void 0, !1, !(2 & e))
    }

    function C(a, b, c) {
        c == null && (c = void 0);
        return Fh(a, b, c)
    }

    function E(a, b, c, d) {
        d == null && (d = void 0);
        return Xh(a, b, c, d)
    }

    function ei(a, b, c) {
        const d = a.U;
        let e = d[x];
        dg(e);
        if (c == null) return Gh(d, e, b), a;
        c = Ah ? .get(c) || c;
        let f = c[x] | 0,
            h = f;
        const k = !!(2 & f) || !!(2048 & f),
            l = k || Object.isFrozen(c),
            m = !l && (void 0 === lg || !1);
        let n = !0,
            p = !0;
        for (let t = 0; t < c.length; t++) {
            var q = c[t];
            k || (q = Rf(q.U), n && (n = !q), p && (p = q))
        }
        k || (f |= 5, f = n ? f | 8 : f & -9, f = p ? f | 16 : f & -17);
        if (m || l && f !== h) c = Mf(c), h = 0, f = Nh(f, e), f = Qh(f, e, !0);
        f !== h && (c[x] = f);
        Gh(d, e, b, c);
        return a
    }

    function Nh(a, b) {
        a = (2 & b ? a | 2 : a & -3) | 32;
        return a &= -2049
    }

    function Qh(a, b, c) {
        32 & b && c || (a &= -33);
        return a
    }

    function fi(a, b, c, d, e, f, h) {
        a = a.U;
        const k = a[x];
        dg(k);
        b = ci(a, k, c, b, 2, f, !0);
        c = d != null ? d : new c;
        if (h && (typeof e !== "number" || e < 0 || e > b.length)) throw Error();
        e != void 0 ? b.splice(e, h, c) : b.push(c);
        b[x] = Rf(c.U) ? b[x] & -9 : b[x] & -17
    }

    function gi(a, b, c, d) {
        fi(a, b, c, d);
        return a
    }

    function hi(a, b) {
        return a ? ? b
    }

    function ii(a, b) {
        a = Ch(a, b);
        return a == null || typeof a === "boolean" ? a : typeof a === "number" ? !!a : void 0
    }

    function ji(a, b) {
        return Ag(Ch(a, b))
    }

    function F(a, b) {
        return Tg(Ch(a, b))
    }

    function ki(a, b) {
        return yg(Ch(a, b))
    }

    function K(a, b, c = !1) {
        return hi(ii(a, b), c)
    }

    function li(a, b) {
        return hi(ji(a, b), 0)
    }

    function mi(a, b) {
        return hi(Ng(Ch(a, b)), 0)
    }

    function ni(a, b, c = 0) {
        return hi(Kh(a, b), c)
    }

    function L(a, b) {
        return hi(F(a, b), "")
    }

    function oi(a, b) {
        return hi(ki(a, b), 0)
    }

    function pi(a, b, c, d) {
        c = $h(a, d) === c ? c : -1;
        return z(a, b, c)
    }

    function qi(a, b) {
        a = ji(a, b);
        return a == null ? void 0 : a
    }

    function ri(a) {
        a = Kh(a, 4);
        return a == null ? void 0 : a
    }

    function si(a, b) {
        a = ki(a, b);
        return a == null ? void 0 : a
    }

    function ti(a, b, c) {
        return Fh(a, b, c == null ? c : tg(c))
    }

    function M(a, b, c) {
        return Uh(a, b, c == null ? c : tg(c), !1)
    }

    function ui(a, b, c) {
        return Fh(a, b, c == null ? c : zg(c))
    }

    function vi(a, b, c) {
        return Uh(a, b, c == null ? c : zg(c), 0)
    }

    function Ci(a, b, c) {
        return Fh(a, b, Hg(c))
    }

    function Di(a, b, c) {
        return Uh(a, b, Hg(c), "0")
    }

    function Ei(a, b, c) {
        return Fh(a, b, Sg(c))
    }

    function Fi(a, b, c) {
        return Uh(a, b, Sg(c), "")
    }

    function N(a, b, c) {
        return Uh(a, b, xg(c), 0)
    };
    let Gi;

    function Hi(a) {
        try {
            return Gi = !0, JSON.stringify(Ii(a), jh)
        } finally {
            Gi = !1
        }
    }
    var O = class {
        constructor(a) {
            a: {
                a == null && (a = hh);hh = void 0;
                if (a == null) {
                    var b = 96;
                    a = []
                } else {
                    if (!Array.isArray(a)) throw Error("narr");
                    b = a[x] | 0;
                    if (b & 2048) throw Error("farr");
                    if (b & 64) break a;
                    var c = a;
                    b |= 64;
                    var d = c.length;
                    if (d && (--d, Zf(c[d]))) {
                        b |= 256;
                        c = d - (+!!(b & 512) - 1);
                        if (c >= 1024) throw Error("pvtlmt");
                        b = b & -16760833 | (c & 1023) << 14
                    }
                }
                a[x] = b
            }
            this.U = a
        }
        toJSON() {
            return Ii(this)
        }
        i() {
            const a = this.U,
                b = a[x];
            return b & 2 ? this : ih(this.constructor, uh(a, b, !0))
        }
    };
    O.prototype.Gd = Wf;

    function Ii(a) {
        var b = Gi ? a.U : nh(a.U, rh, void 0, void 0, !1);
        var c = !Gi;
        var d = Gd ? void 0 : a.constructor.O;
        var e = (c ? a.U : b)[x];
        if (a = b.length) {
            var f = b[a - 1],
                h = Zf(f);
            h ? a-- : f = void 0;
            e = +!!(e & 512) - 1;
            var k = b;
            if (h) {
                b: {
                    var l = f;
                    var m = {};h = !1;
                    if (l)
                        for (var n in l) {
                            if (!Object.prototype.hasOwnProperty.call(l, n)) continue;
                            if (isNaN(+n)) {
                                m[n] = l[n];
                                continue
                            }
                            let t = l[n];
                            Array.isArray(t) && (ag(t, d, +n) || Yf(t) && t.size === 0) && (t = null);
                            t == null && (h = !0);
                            t != null && (m[n] = t)
                        }
                    if (h) {
                        for (var p in m) break b;
                        m = null
                    } else m = l
                }
                l = m == null ? f != null : m !==
                    f
            }
            for (var q; a > 0; a--) {
                p = a - 1;
                n = k[p];
                p -= e;
                if (!(n == null || ag(n, d, p) || Yf(n) && n.size === 0)) break;
                q = !0
            }
            if (k !== b || l || q) {
                if (!c) k = Array.prototype.slice.call(k, 0, a);
                else if (q || l || m) k.length = a;
                m && k.push(m)
            }
            b = k
        }
        return b
    }

    function Ji(a, b) {
        if (b == null) return new a;
        if (!Array.isArray(b)) throw Error("must be an array");
        if (Object.isFrozen(b) || Object.isSealed(b) || !Object.isExtensible(b)) throw Error("arrays passed to jspb constructors must be mutable");
        b[x] |= 128;
        return ih(a, Tf(b))
    };

    function Ki(a, b) {
        const c = Li;
        if (!b(a)) throw b = (typeof c === "function" ? c() : c) ? .concat("\n") ? ? "", Error(b + String(a));
    }

    function Mi(a) {
        a.to = !0;
        return a
    }
    let Li = void 0;
    const Ni = Mi(a => a !== null && a !== void 0);

    function Oi(a) {
        return b => {
            if (b == null || b == "") b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error("dnarr");
                b = ih(a, Tf(b))
            }
            return b
        }
    };
    id `https://www.google.com/recaptcha/api2/aframe`;

    function Pi(a) {
        var b = window;
        new Promise((c, d) => {
            function e() {
                f.onload = null;
                f.onerror = null;
                f.parentElement ? .removeChild(f)
            }
            const f = b.document.createElement("script");
            f.onload = () => {
                e();
                c()
            };
            f.onerror = () => {
                e();
                d(void 0)
            };
            f.type = "text/javascript";
            xd(f, a);
            b.document.readyState !== "complete" ? Hb(b, "load", () => {
                b.document.body.appendChild(f)
            }) : b.document.body.appendChild(f)
        })
    };
    async function Qi(a) {
        var b = "https://pagead2.googlesyndication.com/getconfig/sodar" + `?sv=${200}&tid=${a.g}` + `&tv=${a.i}&st=` + `${a.Wb}`;
        let c = void 0;
        try {
            c = await Ri(b)
        } catch (h) {}
        if (c) {
            b = a.xc || c.sodar_query_id;
            var d = c.rc_enable !== void 0 && a.j ? c.rc_enable : "n",
                e = c.bg_snapshot_delay_ms === void 0 ? "0" : c.bg_snapshot_delay_ms,
                f = c.is_gen_204 === void 0 ? "1" : c.is_gen_204;
            if (b && c.bg_hash_basename && c.bg_binary) return {
                context: a.l,
                Ph: c.bg_hash_basename,
                Oh: c.bg_binary,
                dj: a.g + "_" + a.i,
                xc: b,
                Wb: a.Wb,
                vd: d,
                Ud: e,
                rd: f
            }
        }
    }
    let Ri = a => new Promise((b, c) => {
        const d = new XMLHttpRequest;
        d.onreadystatechange = () => {
            d.readyState === d.DONE && (d.status >= 200 && d.status < 300 ? b(JSON.parse(d.responseText)) : c())
        };
        d.open("GET", a, !0);
        d.send()
    });
    async function Si(a) {
        var b = await Qi(a);
        if (b) {
            a = window;
            let c = a.GoogleGcLKhOms;
            c && typeof c.push === "function" || (c = a.GoogleGcLKhOms = []);
            c.push({
                _ctx_: b.context,
                _bgv_: b.Ph,
                _bgp_: b.Oh,
                _li_: b.dj,
                _jk_: b.xc,
                _st_: b.Wb,
                _rc_: b.vd,
                _dl_: b.Ud,
                _g2_: b.rd
            });
            if (b = a.GoogleDX5YKUSk) a.GoogleDX5YKUSk = void 0, b[1]();
            a = id `https://tpc.googlesyndication.com/sodar/${"sodar2"}.js`;
            Pi(a)
        }
    };

    function Ti(a, b) {
        return Fi(a, 1, b)
    }
    var Ui = class extends O {
        g() {
            return L(this, 1)
        }
    };

    function Vi(a, b) {
        return C(a, 5, b)
    }

    function Wi(a, b) {
        return Fi(a, 3, b)
    }

    function Xi(a, b) {
        return M(a, 6, b)
    }
    var Yi = class extends O {
        constructor() {
            super()
        }
    };

    function Zi(a) {
        switch (a) {
            case 1:
                return "gda";
            case 2:
                return "gpt";
            case 3:
                return "ima";
            case 4:
                return "pal";
            case 5:
                return "xfad";
            case 6:
                return "dv3n";
            case 7:
                return "spa";
            default:
                return "unk"
        }
    }
    var $i = class {
            constructor(a) {
                this.g = a.i;
                this.i = a.j;
                this.l = a.l;
                this.xc = a.xc;
                this.win = a.da();
                this.Wb = a.Wb;
                this.vd = a.vd;
                this.Ud = a.Ud;
                this.rd = a.rd;
                this.j = a.g
            }
        },
        aj = class {
            constructor(a, b, c) {
                this.i = a;
                this.j = b;
                this.l = c;
                this.win = window;
                this.Wb = "env";
                this.vd = "n";
                this.Ud = "0";
                this.rd = "1";
                this.g = !0
            }
            da() {
                return this.win
            }
            build() {
                return new $i(this)
            }
        };

    function bj(a) {
        var b = new cj;
        return Ei(b, 1, a)
    }
    var cj = class extends O {
        getValue() {
            return L(this, 1)
        }
        getVersion() {
            return oi(this, 5)
        }
    };
    var dj = class extends O {};
    dj.O = [2, 3, 4];
    var ej = class extends O {};

    function fj(a, b, c = null, d = !1, e = !1) {
        gj(a, b, c, d, e)
    }

    function gj(a, b, c, d, e = !1) {
        a.google_image_requests || (a.google_image_requests = []);
        const f = Ce("IMG", a.document);
        if (c || d) {
            const h = k => {
                c && c(k);
                d && bb(a.google_image_requests, f);
                Ib(f, "load", h);
                Ib(f, "error", h)
            };
            Hb(f, "load", h);
            Hb(f, "error", h)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    }
    var ij = (a, b) => {
            let c = `https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=${b}`;
            Fe(a, (d, e) => {
                if (d || d === 0) c += `&${e}=${encodeURIComponent(""+d)}`
            });
            hj(c)
        },
        hj = a => {
            var b = window;
            b.fetch ? b.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : fj(b, a, void 0, !1, !1)
        };
    let jj = null;
    var kj = window;
    var lj = class extends O {
        constructor() {
            super()
        }
    };
    lj.O = [15];
    var mj = class extends O {
        constructor() {
            super()
        }
        getCorrelator() {
            return mi(this, 1)
        }
        setCorrelator(a) {
            return Di(this, 1, a)
        }
    };
    var nj = class extends O {
        constructor() {
            super()
        }
    };

    function oj(a) {
        this.g = a || {
            cookie: ""
        }
    }
    aa = oj.prototype;
    aa.set = function(a, b, c) {
        let d, e, f, h = !1,
            k;
        typeof c === "object" && (k = c.Wg, h = c.Sd || !1, f = c.domain || void 0, e = c.path || void 0, d = c.Bd);
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        d === void 0 && (d = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (d < 0 ? "" : d == 0 ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + d * 1E3)).toUTCString()) + (h ? ";secure" : "") + (k != null ? ";samesite=" + k : "")
    };
    aa.get = function(a, b) {
        const c = a + "=",
            d = (this.g.cookie || "").split(";");
        for (let e = 0, f; e < d.length; e++) {
            f = Rb(d[e]);
            if (f.lastIndexOf(c, 0) == 0) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };

    function pj(a, b, c, d) {
        a.get(b);
        a.set(b, "", {
            Bd: 0,
            path: c,
            domain: d
        })
    }
    aa.isEmpty = function() {
        return !this.g.cookie
    };
    aa.vc = function() {
        return this.g.cookie ? (this.g.cookie || "").split(";").length : 0
    };
    aa.clear = function() {
        var a = (this.g.cookie || "").split(";");
        const b = [],
            c = [];
        let d, e;
        for (let f = 0; f < a.length; f++) e = Rb(a[f]), d = e.indexOf("="), d == -1 ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; a >= 0; a--) pj(this, b[a])
    };

    function qj(a, b = window) {
        if (a.g()) try {
            return b.localStorage
        } catch {}
        return null
    }

    function rj(a = window) {
        try {
            return a.localStorage
        } catch {
            return null
        }
    }
    let sj;

    function tj(a) {
        return sj ? sj : a.origin === "null" ? sj = !1 : sj = uj(a)
    }

    function uj(a) {
        if (!a.navigator.cookieEnabled) return !1;
        const b = new oj(a.document);
        if (!b.isEmpty()) return !0;
        b.set("TESTCOOKIESENABLED", "1", {
            Bd: 60,
            Wg: a.isSecureContext ? "none" : void 0,
            Sd: a.isSecureContext || void 0
        });
        if (b.get("TESTCOOKIESENABLED") !== "1") return !1;
        pj(b, "TESTCOOKIESENABLED");
        return !0
    }

    function vj(a, b) {
        b = b.origin !== "null" ? b.document.cookie : null;
        return b === null ? null : (new oj({
            cookie: b
        })).get(a) || ""
    }

    function wj(a, b, c, d) {
        d.origin !== "null" && (d.isSecureContext && (c = { ...c,
            Wg: "none",
            Sd: !0
        }), (new oj(d.document)).set(a, b, c))
    };
    let xj = null,
        yj = null;

    function zj() {
        if (xj != null) return xj;
        xj = !1;
        try {
            const a = Ae(r);
            a && a.location.hash.indexOf("google_logging") !== -1 && (xj = !0);
            rj(r) ? .getItem("google_logging") && (xj = !0)
        } catch (a) {}
        return xj
    }

    function Aj() {
        if (yj != null) return yj;
        yj = !1;
        try {
            const a = Ae(r),
                b = rj(r);
            if (a && a.location.hash.indexOf("auto_ads_logging") !== -1 || b && b.getItem("auto_ads_logging")) yj = !0
        } catch (a) {}
        return yj
    }
    var Bj = (a, b = []) => {
        let c = !1;
        r.google_logging_queue || (c = !0, r.google_logging_queue = []);
        r.google_logging_queue.push([a, b]);
        c && zj() && Be(r.document, id `https://pagead2.googlesyndication.com/pagead/js/logging_library.js`)
    };

    function Cj(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    aa = Cj.prototype;
    aa.getWidth = function() {
        return this.right - this.left
    };
    aa.getHeight = function() {
        return this.bottom - this.top
    };

    function Dj(a) {
        return new Cj(a.top, a.right, a.bottom, a.left)
    }
    aa.contains = function(a) {
        return this && a ? a instanceof Cj ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };

    function Ej(a, b) {
        return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom
    }
    aa.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    aa.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    aa.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    aa.scale = function(a, b) {
        b = typeof b === "number" ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= b;
        this.bottom *= b;
        return this
    };

    function Fj(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }

    function Gj(a, b) {
        var c = Math.max(a.left, b.left),
            d = Math.min(a.left + a.width, b.left + b.width);
        if (c <= d) {
            var e = Math.max(a.top, b.top);
            a = Math.min(a.top + a.height, b.top + b.height);
            if (e <= a) return new Fj(c, e, d - c, a - e)
        }
        return null
    }

    function Hj(a, b) {
        var c = Gj(a, b);
        if (!c || !c.height || !c.width) return [new Fj(a.left, a.top, a.width, a.height)];
        c = [];
        var d = a.top,
            e = a.height,
            f = a.left + a.width,
            h = a.top + a.height,
            k = b.left + b.width,
            l = b.top + b.height;
        b.top > a.top && (c.push(new Fj(a.left, a.top, a.width, b.top - a.top)), d = b.top, e -= b.top - a.top);
        l < h && (c.push(new Fj(a.left, l, a.width, h - l)), e = l - d);
        b.left > a.left && c.push(new Fj(a.left, d, b.left - a.left, e));
        k < f && c.push(new Fj(k, d, f - k, e));
        return c
    }
    aa = Fj.prototype;
    aa.contains = function(a) {
        return a instanceof rd ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    aa.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    aa.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    aa.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    aa.scale = function(a, b) {
        b = typeof b === "number" ? b : a;
        this.left *= a;
        this.width *= a;
        this.top *= b;
        this.height *= b;
        return this
    };
    const Ij = {
        "AMP-CAROUSEL": "ac",
        "AMP-FX-FLYING-CARPET": "fc",
        "AMP-LIGHTBOX": "lb",
        "AMP-STICKY-AD": "sa"
    };

    function Jj(a = r) {
        let b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch {}
        return b ? .pageViewId && b ? .canonicalUrl ? b : null
    }

    function Kj(a = Jj()) {
        return a && a.mode ? +a.mode.version || null : null
    }

    function Lj(a = Jj()) {
        if (a && a.container) {
            a = a.container.split(",");
            const b = [];
            for (let c = 0; c < a.length; c++) b.push(Ij[a[c]] || "x");
            return b.join()
        }
        return null
    }

    function Mj() {
        var a = Jj();
        return a && a.initialIntersection
    }

    function Nj() {
        const a = Mj();
        return a && Da(a.rootBounds) ? new sd(a.rootBounds.width, a.rootBounds.height) : null
    }

    function Oj(a = Jj()) {
        return a ? xe(a.master) ? a.master : null : null
    }

    function Pj(a, b) {
        const c = a.ampInaboxIframes = a.ampInaboxIframes || [];
        let d = () => {},
            e = () => {};
        b && (c.push(b), e = () => {
            a.AMP && a.AMP.inaboxUnregisterIframe && a.AMP.inaboxUnregisterIframe(b);
            bb(c, b);
            d()
        });
        if (a.ampInaboxInitialized) return e;
        a.ampInaboxPendingMessages = a.ampInaboxPendingMessages || [];
        const f = h => {
            if (a.ampInaboxInitialized) h = !0;
            else {
                var k, l = h.data === "amp-ini-load";
                a.ampInaboxPendingMessages && !l && (k = /^amp-(\d{15,20})?/.exec(h.data)) && (a.ampInaboxPendingMessages.push(h), h = k[1], a.ampInaboxInitialized ||
                    h && !/^\d{15,20}$/.test(h) || a.document.querySelector('script[src$="amp4ads-host-v0.js"]') || Be(a.document, h ? id `https://cdn.ampproject.org/rtv/${h}/amp4ads-host-v0.js` : id `https://cdn.ampproject.org/amp4ads-host-v0.js`));
                h = !1
            }
            h && d()
        };
        c.google_amp_listener_added || (c.google_amp_listener_added = !0, Hb(a, "message", f), d = () => {
            Ib(a, "message", f)
        });
        return e
    };
    var Qj = () => a => {
        a = {
            id: "unsafeurl",
            ctx: 638,
            url: a
        };
        var b = [];
        for (c in a) we(c, a[c], b);
        var c = ve("https://pagead2.googlesyndication.com/pagead/gen_204", b.join("&"));
        navigator.sendBeacon && navigator.sendBeacon(c, "")
    };

    function Rj(a, b, c) {
        if (typeof b === "string")(b = Sj(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = Sj(c, d);
                f && (c.style[f] = e)
            }
    }
    var Tj = {};

    function Sj(a, b) {
        var c = Tj[b];
        if (!c) {
            var d = Cd(b);
            c = d;
            a.style[d] === void 0 && (d = (ae ? "Webkit" : $d ? "Moz" : Yd ? "ms" : null) + Dd(d), a.style[d] !== void 0 && (c = d));
            Tj[b] = c
        }
        return c
    }

    function Uj(a, b) {
        var c = a.style[Cd(b)];
        return typeof c !== "undefined" ? c : a.style[Sj(a, b)] || ""
    }

    function Vj(a, b) {
        var c = de(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }

    function Wj(a, b) {
        return Vj(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }

    function Xj(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    }

    function Yj(a) {
        var b = de(a),
            c = new rd(0, 0);
        if (a == (b ? de(b) : document).documentElement) return c;
        a = Xj(a);
        b = fe(be(b).g);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }

    function Zj(a) {
        var b = ak;
        if (Wj(a, "display") != "none") return b(a);
        var c = a.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    }

    function ak(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = ae && !b && !c;
        return (b === void 0 || d) && a.getBoundingClientRect ? (a = Xj(a), new sd(a.right - a.left, a.bottom - a.top)) : new sd(b, c)
    };
    var bk = a => typeof a === "number" && a > 0,
        dk = (a, b) => {
            a = ck(a);
            if (!a) return b;
            const c = b.slice(-1);
            return b + (c === "?" || c === "#" ? "" : "&") + a
        },
        ck = a => Object.entries(ek(a)).map(([b, c]) => `${b}=${encodeURIComponent(String(c))}`).join("&"),
        ek = a => {
            const b = {};
            Fe(a, (c, d) => {
                if (c || c === 0 || c === !1) typeof c === "boolean" && (c = c ? 1 : 0), b[d] = c
            });
            return b
        },
        fk = () => {
            try {
                return kj.history.length
            } catch (a) {
                return 0
            }
        },
        gk = a => {
            a = Oj(Jj(a)) || a;
            a.google_unique_id = (a.google_unique_id || 0) + 1
        },
        hk = a => {
            a = a.google_unique_id;
            return typeof a === "number" ?
                a : 0
        },
        ik = a => {
            let b;
            b = a.nodeType !== 9 && a.id;
            a: {
                if (a && a.nodeName && a.parentElement) {
                    var c = a.nodeName.toString().toLowerCase();
                    const d = a.parentElement.childNodes;
                    let e = 0;
                    for (let f = 0; f < d.length; ++f) {
                        const h = d[f];
                        if (h.nodeName && h.nodeName.toString().toLowerCase() === c) {
                            if (a === h) {
                                c = "." + e;
                                break a
                            }++e
                        }
                    }
                }
                c = ""
            }
            return (a.nodeName && a.nodeName.toString().toLowerCase()) + (b ? "/" + b : "") + c
        },
        jk = () => {
            if (!kj) return !1;
            try {
                return !(!kj.navigator.standalone && !kj.top.navigator.standalone)
            } catch (a) {
                return !1
            }
        },
        kk = a => (a = a.google_ad_format) ?
        a.indexOf("_0ads") > 0 : !1,
        lk = a => {
            let b = Number(a.google_ad_width),
                c = Number(a.google_ad_height);
            if (!(b > 0 && c > 0)) {
                a: {
                    try {
                        const e = String(a.google_ad_format);
                        if (e && e.match) {
                            const f = e.match(/(\d+)x(\d+)/i);
                            if (f) {
                                const h = parseInt(f[1], 10),
                                    k = parseInt(f[2], 10);
                                if (h > 0 && k > 0) {
                                    var d = {
                                        width: h,
                                        height: k
                                    };
                                    break a
                                }
                            }
                        }
                    } catch (e) {}
                    d = null
                }
                a = d;
                if (!a) return null;b = b > 0 ? b : a.width;c = c > 0 ? c : a.height
            }
            return {
                width: b,
                height: c
            }
        };
    class mk {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };
    const nk = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var ok = class {
            constructor(a, b) {
                this.g = a;
                this.i = b
            }
        },
        pk = class {
            constructor(a, b, c) {
                this.url = a;
                this.win = b;
                this.vg = !!c;
                this.depth = null
            }
        };
    let qk = null;

    function rk() {
        if (qk === null) {
            qk = "";
            try {
                let a = "";
                try {
                    a = r.top.location.hash
                } catch (b) {
                    a = r.location.hash
                }
                if (a) {
                    const b = a.match(/\bdeid=([\d,]+)/);
                    qk = b ? b[1] : ""
                }
            } catch (a) {}
        }
        return qk
    };

    function sk() {
        const a = r.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function tk() {
        const a = r.performance;
        return a && a.now ? a.now() : null
    };
    var uk = class {
        constructor(a, b) {
            var c = tk() || sk();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    };
    const vk = r.performance,
        wk = !!(vk && vk.mark && vk.measure && vk.clearMarks),
        xk = Ab(() => {
            var a;
            if (a = wk) a = rk(), a = !!a.indexOf && a.indexOf("1337") >= 0;
            return a
        });

    function yk(a) {
        a && vk && xk() && (vk.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), vk.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }

    function zk(a) {
        a.g = !1;
        a.i != a.j.google_js_reporting_queue && (xk() && Ua(a.i, yk), a.i.length = 0)
    }

    function Ak(a, b) {
        if (!a.g) return b();
        const c = a.start("491", 3);
        let d;
        try {
            d = b()
        } catch (e) {
            throw yk(c), e;
        }
        a.end(c);
        return d
    }
    class Bk {
        constructor(a) {
            this.i = [];
            this.j = a || r;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.i = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.g = xk() || (b != null ? b : Math.random() < 1)
        }
        start(a, b) {
            if (!this.g) return null;
            a = new uk(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            vk && xk() && vk.mark(b);
            return a
        }
        end(a) {
            if (this.g && typeof a.value === "number") {
                a.duration = (tk() || sk()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                vk && xk() && vk.mark(b);
                !this.g || this.i.length >
                    2048 || this.i.push(a)
            }
        }
    };

    function Ck(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function Dk(a, b, c, d, e) {
        const f = [];
        Fe(a, function(h, k) {
            (h = Ek(h, b, c, d, e)) && f.push(k + "=" + h)
        });
        return f.join(b)
    }

    function Ek(a, b, c, d, e) {
        if (a == null) return "";
        b = b || "&";
        c = c || ",$";
        typeof c == "string" && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let h = 0; h < a.length; h++) f.push(Ek(a[h], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if (typeof a == "object") return e = e || 0, e < 2 ? encodeURIComponent(Dk(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Fk(a) {
        let b = 1;
        for (const c in a.i) b = c.length > b ? c.length : b;
        return 3997 - b - a.j.length - 1
    }

    function Gk(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = Fk(a) - b.length;
        if (d < 0) return "";
        a.g.sort(function(f, h) {
            return f - h
        });
        b = null;
        let e = "";
        for (let f = 0; f < a.g.length; f++) {
            const h = a.g[f],
                k = a.i[h];
            for (let l = 0; l < k.length; l++) {
                if (!d) {
                    b = b == null ? h : b;
                    break
                }
                let m = Dk(k[l], a.j, ",$");
                if (m) {
                    m = e + m;
                    if (d >= m.length) {
                        d -= m.length;
                        c += m;
                        e = a.j;
                        break
                    }
                    b = b == null ? h : b
                }
            }
        }
        a = "";
        b != null && (a = e + "trn=" + b);
        return c + a
    }
    class Hk {
        constructor() {
            this.j = "&";
            this.i = {};
            this.l = 0;
            this.g = []
        }
    };

    function Ik(a) {
        let b = a.toString();
        a.name && b.indexOf(a.name) == -1 && (b += ": " + a.name);
        a.message && b.indexOf(a.message) == -1 && (b += ": " + a.message);
        a.stack && (b = Jk(a.stack, b));
        return b
    }

    function Jk(a, b) {
        try {
            a.indexOf(b) == -1 && (a = b + "\n" + a);
            let c;
            for (; a != c;) c = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
            return a.replace(RegExp("\n *", "g"), "\n")
        } catch (c) {
            return b
        }
    }
    var Lk = class {
        constructor(a, b, c = null) {
            this.ta = a;
            this.A = b;
            this.i = c;
            this.g = null;
            this.j = !1;
            this.C = this.ba
        }
        mf(a) {
            this.g = a
        }
        l(a) {
            this.j = a
        }
        vb(a, b, c) {
            let d, e;
            try {
                this.i && this.i.g ? (e = this.i.start(a.toString(), 3), d = b(), this.i.end(e)) : d = b()
            } catch (f) {
                b = this.A;
                try {
                    yk(e), b = this.C(a, new mk(f, {
                        message: Ik(f)
                    }), void 0, c)
                } catch (h) {
                    this.ba(217, h)
                }
                if (b) window.console ? .error ? .(f);
                else throw f;
            }
            return d
        }
        Da(a, b, c, d) {
            return (...e) => this.vb(a, () => b.apply(c, e), d)
        }
        ba(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const H = new Hk;
                var h = H;
                h.g.push(1);
                h.i[1] = Ck("context", a);
                b.error && b.meta && b.id || (b = new mk(b, {
                    message: Ik(b)
                }));
                if (b.msg) {
                    h = H;
                    var k = b.msg.substring(0, 512);
                    h.g.push(2);
                    h.i[2] = Ck("msg", k)
                }
                var l = b.meta || {};
                b = l;
                if (this.g) try {
                    this.g(b)
                } catch (ha) {}
                if (d) try {
                    d(b)
                } catch (ha) {}
                d = H;
                l = [l];
                d.g.push(3);
                d.i[3] = l;
                d = r;
                l = [];
                b = null;
                do {
                    var m = d;
                    if (xe(m)) {
                        var n = m.location.href;
                        b = m.document && m.document.referrer || null
                    } else n = b, b = null;
                    l.push(new pk(n || "", m));
                    try {
                        d = m.parent
                    } catch (ha) {
                        d = null
                    }
                } while (d && m != d);
                for (let ha = 0, ma = l.length - 1; ha <= ma; ++ha) l[ha].depth =
                    ma - ha;
                m = r;
                if (m.location && m.location.ancestorOrigins && m.location.ancestorOrigins.length == l.length - 1)
                    for (n = 1; n < l.length; ++n) {
                        var p = l[n];
                        p.url || (p.url = m.location.ancestorOrigins[n - 1] || "", p.vg = !0)
                    }
                var q = l;
                let ba = new pk(r.location.href, r, !1);
                m = null;
                const db = q.length - 1;
                for (p = db; p >= 0; --p) {
                    var t = q[p];
                    !m && nk.test(t.url) && (m = t);
                    if (t.url && !t.vg) {
                        ba = t;
                        break
                    }
                }
                t = null;
                const ya = q.length && q[db].url;
                ba.depth != 0 && ya && (t = q[db]);
                f = new ok(ba, t);
                if (f.i) {
                    q = H;
                    var w = f.i.url || "";
                    q.g.push(4);
                    q.i[4] = Ck("top", w)
                }
                var A = {
                    url: f.g.url ||
                        ""
                };
                if (f.g.url) {
                    var D = f.g.url.match(ue),
                        G = D[1],
                        I = D[3],
                        B = D[4];
                    w = "";
                    G && (w += G + ":");
                    I && (w += "//", w += I, B && (w += ":" + B));
                    var J = w
                } else J = "";
                G = H;
                A = [A, {
                    url: J
                }];
                G.g.push(5);
                G.i[5] = A;
                Kk(this.ta, e, H, this.j, c)
            } catch (H) {
                try {
                    Kk(this.ta, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: Ik(H),
                        url: f && f.g.url
                    }, this.j, c)
                } catch (ba) {}
            }
            return this.A
        }
        na(a, b, c) {
            b.catch(d => {
                d = d ? d : "unknown rejection";
                this.ba(a, d instanceof Error ? d : Error(d), void 0, c || this.g || void 0)
            })
        }
    };
    var Mk = Mi(a => typeof a === "string"),
        Nk = Mi(a => a === void 0);

    function Ok() {
        var a = Pk;
        return Mi(b => {
            for (const c in a)
                if (b === a[c] && !/^[0-9]+$/.test(c)) return !0;
            return !1
        })
    };
    var Qk = class extends O {
        constructor() {
            super()
        }
    };

    function Rk(a, b) {
        try {
            const c = d => [{
                [d.vf]: d.We
            }];
            return JSON.stringify([a.filter(d => d.xd).map(c), Ii(b), a.filter(d => !d.xd).map(c)])
        } catch (c) {
            return Sk(c, b), ""
        }
    }

    function Sk(a, b) {
        try {
            ij({
                m: Ik(a instanceof Error ? a : Error(String(a))),
                b: oi(b, 1) || null,
                v: L(b, 2) || null
            }, "rcs_internal")
        } catch (c) {}
    }
    var Tk = class {
        constructor(a, b) {
            var c = new Qk;
            a = N(c, 1, a);
            this.i = Fi(a, 2, b).i()
        }
    };
    var Uk = class extends O {},
        Vk = [1, 2, 3];
    var Wk = class extends O {
            constructor() {
                super()
            }
        },
        Xk = [2, 4];

    function Yk(a) {
        var b = new Zk;
        return Fi(b, 1, a)
    }
    var Zk = class extends O {
        constructor() {
            super()
        }
    };
    Zk.O = [4];
    var $k = class extends O {
        getValue() {
            return oi(this, 1)
        }
    };

    function al(a) {
        var b = new bl;
        return Fh(b, 1, xg(a))
    }
    var bl = class extends O {
        getValue() {
            return oi(this, 1)
        }
    };
    var cl = class extends O {
        constructor() {
            super()
        }
        getValue() {
            return oi(this, 1)
        }
    };

    function dl(a, b) {
        return Di(a, 1, b)
    }

    function el(a, b) {
        return Di(a, 2, b)
    }

    function fl(a, b) {
        return Di(a, 3, b)
    }

    function gl(a, b) {
        return Di(a, 4, b)
    }

    function hl(a, b) {
        return Di(a, 5, b)
    }

    function il(a, b) {
        return Uh(a, 8, sg(b), 0)
    }

    function jl(a, b) {
        return Uh(a, 9, sg(b), 0)
    }
    var kl = class extends O {
        constructor() {
            super()
        }
    };

    function ll(a, b) {
        return Di(a, 1, b)
    }

    function ml(a, b) {
        return Di(a, 2, b)
    }
    var nl = class extends O {};

    function ol(a, b) {
        gi(a, 1, nl, b)
    }
    var Sh = class extends O {
        Zg(a) {
            fi(this, 1, nl, void 0, a, !1, 1);
            return this
        }
    };
    Sh.O = [1];
    var pl = class extends O {
        constructor() {
            super()
        }
    };

    function ql(a, b) {
        return Th(a, 1, b, Rg)
    }

    function rl(a, b) {
        return Th(a, 12, b, Og)
    }

    function sl() {
        var a = new tl;
        return Wh(a, 2, Rg, "irr")
    }

    function ul(a, b) {
        return M(a, 3, b)
    }

    function vl(a, b) {
        return M(a, 4, b)
    }

    function wl(a, b) {
        return M(a, 5, b)
    }

    function xl(a, b) {
        return M(a, 7, b)
    }

    function yl(a, b) {
        return M(a, 8, b)
    }

    function zl(a, b) {
        return Di(a, 9, b)
    }

    function Al(a, b) {
        return ei(a, 10, b)
    }

    function Bl(a, b) {
        return Th(a, 11, b, Dg)
    }
    var tl = class extends O {
        constructor() {
            super()
        }
    };
    tl.O = [1, 12, 2, 10, 11];

    function Cl(a) {
        var b = Dl();
        C(a, 1, b)
    }

    function El(a, b) {
        return Di(a, 2, b)
    }

    function Fl(a, b) {
        return ei(a, 3, b)
    }

    function Gl(a, b) {
        return ei(a, 4, b)
    }

    function Hl(a, b) {
        return gi(a, 4, bl, b)
    }

    function Il(a, b) {
        return ei(a, 5, b)
    }

    function Jl(a, b) {
        return Th(a, 6, b, Rg)
    }

    function Kl(a, b) {
        return Di(a, 7, b)
    }

    function Ll(a, b) {
        C(a, 9, b)
    }

    function Ml(a, b) {
        return M(a, 10, b)
    }

    function Nl(a, b) {
        return M(a, 11, b)
    }

    function Ol(a, b) {
        return M(a, 12, b)
    }
    var Pl = class extends O {
        constructor() {
            super()
        }
        H(a) {
            fi(this, 3, $k, void 0, a, !1, 1);
            return this
        }
        G(a) {
            return Di(this, 8, a)
        }
    };
    Pl.O = [3, 4, 5, 15, 6];
    var Ql = class extends O {
        constructor() {
            super()
        }
    };
    Ql.O = [2];
    var Rl = class extends O {};

    function Sl(a) {
        var b = new Tl;
        return N(b, 1, a)
    }
    var Tl = class extends O {
        constructor() {
            super()
        }
    };
    var Ul = class extends O {
        constructor() {
            super()
        }
    };
    var Vl = class extends O {
        constructor() {
            super()
        }
    };
    var Wl = class extends O {
        constructor() {
            super()
        }
    };
    Wl.O = [7];
    var Xl = class extends O {
            constructor() {
                super()
            }
        },
        Yl = [1, 2];
    var Zl = class extends O {
        constructor() {
            super()
        }
    };
    var $l = class extends O {
            constructor() {
                super()
            }
        },
        am = [1];

    function bm(a) {
        var b = new cm;
        return N(b, 1, a)
    }
    var cm = class extends O {
        constructor() {
            super()
        }
    };
    var dm = class extends O {
        constructor() {
            super()
        }
    };
    var em = class extends O {
        constructor() {
            super()
        }
    };
    var fm = class extends O {
        constructor() {
            super()
        }
    };
    var gm = class extends O {
        constructor() {
            super()
        }
    };
    var hm = class extends O {
        constructor() {
            super()
        }
    };
    var im = class extends O {
        constructor() {
            super()
        }
    };
    var jm = class extends O {
        constructor() {
            super()
        }
        getContentUrl() {
            return L(this, 1)
        }
    };
    var km = class extends O {
        constructor() {
            super()
        }
    };
    km.O = [1];
    var lm = class extends O {
        constructor() {
            super()
        }
    };

    function mm() {
        var a = new nm,
            b = new lm;
        return E(a, 1, om, b)
    }
    var nm = class extends O {
            constructor() {
                super()
            }
        },
        om = [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    var pm = class extends O {
        constructor() {
            super()
        }
    };
    pm.O = [1];
    var qm = class extends O {
        constructor() {
            super()
        }
    };
    qm.O = [2];
    var rm = class extends O {
        constructor() {
            super()
        }
    };
    var sm = class extends O {
        constructor() {
            super()
        }
    };

    function tm(a, b) {
        return Uh(a, 10, Pg(b), "0")
    }

    function um(a, b) {
        return N(a, 1, b)
    }
    var vm = class extends O {};
    vm.O = [9];
    var wm = class extends O {
        constructor() {
            super()
        }
    };
    wm.O = [2];
    var xm = class extends O {
        constructor() {
            super()
        }
    };
    var ym = class extends O {
            constructor() {
                super()
            }
        },
        zm = [4, 5];

    function Am(a) {
        var b = new Mm;
        return Fi(b, 4, a)
    }

    function Nm(a, b) {
        return Fh(a, 6, Pg(b))
    }
    var Mm = class extends O {
        constructor() {
            super()
        }
    };

    function Om(a) {
        var b = new Pm;
        return vi(b, 2, a)
    }
    var Pm = class extends O {
        constructor() {
            super()
        }
    };
    Pm.O = [3];
    var Qm = class extends O {
        constructor() {
            super()
        }
    };
    var Rm = class extends O {
        constructor() {
            super()
        }
    };
    var Sm = class extends O {
        constructor() {
            super()
        }
    };
    var Tm = class extends O {
        constructor() {
            super()
        }
    };
    var Um = class extends O {
        constructor() {
            super()
        }
    };
    var Vm = class extends O {
            constructor() {
                super()
            }
        },
        Wm = [2, 3];
    var Xm = class extends O {
            constructor() {
                super()
            }
        },
        Ym = [3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 16, 17];

    function Zm(a, b) {
        return Di(a, 3, b)
    }
    var $m = class extends O {
            constructor() {
                super()
            }
            Ub(a) {
                return Fi(this, 2, a)
            }
        },
        an = [4, 5, 6, 8, 9, 10, 11, 12, 13];
    var bn = class extends O {
        constructor() {
            super()
        }
    };
    var cn = class extends O {
        constructor() {
            super()
        }
    };
    cn.O = [4, 5];
    var dn = class extends O {
        constructor() {
            super()
        }
        getTagSessionCorrelator() {
            return mi(this, 1)
        }
    };
    dn.O = [2];
    var en = class extends O {
            constructor() {
                super()
            }
        },
        fn = [4, 6];
    class gn {
        constructor(a) {
            this.g = new hn(a)
        }
    }
    class hn {
        constructor(a) {
            this.g = new jn(a)
        }
    }
    class jn {
        constructor(a) {
            this.g = new kn(a)
        }
    }
    class kn {
        constructor(a) {
            this.i = new ln(a);
            this.g = new mn(a)
        }
    }
    class ln {
        constructor(a) {
            this.g = ({
                jf: b,
                status: c
            }) => {
                var d = Yk("xR0Czf"),
                    e = new Uk;
                c = Xh(e, 1, Vk, Sg(c));
                d = gi(d, 4, Uk, c);
                c = new Wk;
                b = Xh(c, 4, Xk, sg(b));
                b = C(d, 3, b);
                a(b)
            }
        }
    }
    class mn {
        constructor(a) {
            this.g = ({
                jf: b,
                Qj: c
            }) => {
                var d = Yk("jM4CPd"),
                    e = new Uk;
                c = Xh(e, 2, Vk, Hg(Math.round(c)));
                d = gi(d, 4, Uk, c);
                c = new Wk;
                b = Xh(c, 4, Xk, sg(b));
                b = C(d, 3, b);
                a(b)
            }
        }
    }
    class nn extends Tk {
        constructor() {
            super(...arguments);
            this.B = new gn(a => on(this, a))
        }
    }

    function on(a, ...b) {
        a.l(...b.map(c => ({
            xd: !1,
            vf: 1,
            We: Ii(c)
        })))
    }

    function pn(a, ...b) {
        a.l(...b.map(c => ({
            xd: !0,
            vf: 3,
            We: Ii(c)
        })))
    }

    function qn(a, ...b) {
        a.l(...b.map(c => ({
            xd: !0,
            vf: 7,
            We: Ii(c)
        })))
    }
    var rn = class extends nn {};
    var sn = (a, b) => {
            globalThis.fetch(a, {
                method: "POST",
                body: b,
                keepalive: b.length < 65536,
                credentials: "omit",
                mode: "no-cors",
                redirect: "follow"
            }).catch(() => {})
        },
        tn = class extends rn {
            constructor(a) {
                super(2, a);
                this.g = sn
            }
            l(...a) {
                try {
                    const b = Rk(a, this.i);
                    this.g("https://pagead2.googlesyndication.com/pagead/ping?e=1", b)
                } catch (b) {
                    Sk(b, this.i)
                }
            }
        },
        un = class extends tn {};

    function vn(a) {
        a.j !== null && (clearTimeout(a.j), a.j = null);
        if (a.g.length) {
            var b = Rk(a.g, a.i);
            a.G("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
            a.g = []
        }
    }
    var xn = class extends rn {
            constructor(a, b, c, d, e) {
                super(2, a);
                this.G = sn;
                this.I = b;
                this.F = c;
                this.H = d;
                this.A = e;
                this.g = [];
                this.j = null;
                this.C = !1
            }
            l(...a) {
                try {
                    this.H && Rk(this.g.concat(a), this.i).length >= 65536 && vn(this), this.A && !this.C && (this.C = !0, wn(this.A, () => {
                        vn(this)
                    })), this.g.push(...a), this.g.length >= this.F && vn(this), this.g.length && this.j === null && (this.j = setTimeout(() => {
                        vn(this)
                    }, this.I))
                } catch (b) {
                    Sk(b, this.i)
                }
            }
        },
        yn = class extends xn {
            constructor(a, b = 1E3, c = 100, d = !1, e) {
                super(a, b, c, d && !0, e)
            }
        };
    var P = a => {
        var b = "Qe";
        if (a.Qe && a.hasOwnProperty(b)) return a.Qe;
        b = new a;
        return a.Qe = b
    };

    function zn(a, b, c) {
        return b[a] || c
    };

    function An(a, b) {
        a.i = (c, d) => zn(2, b, () => [])(c, 1, d);
        a.g = () => zn(3, b, () => [])(1)
    }
    class Bn {
        i() {
            return []
        }
        g() {
            return []
        }
    }

    function Cn(a, b) {
        return P(Bn).i(a, b)
    };

    function Kk(a, b, c, d = !1, e) {
        if ((d ? a.g : Math.random()) < (e || .01)) try {
            let f;
            c instanceof Hk ? f = c : (f = new Hk, Fe(c, (k, l) => {
                var m = f;
                const n = m.l++;
                k = Ck(l, k);
                m.g.push(n);
                m.i[n] = k
            }));
            const h = Gk(f, "/pagead/gen_204?id=" + b + "&");
            h && fj(r, h)
        } catch (f) {}
    }

    function Dn(a, b) {
        b >= 0 && b <= 1 && (a.g = b)
    }
    class En {
        constructor() {
            this.g = Math.random()
        }
    };
    let Fn, Gn;
    const Hn = new Bk(window);
    (a => {
        Fn = a ? ? new En;
        typeof window.google_srt !== "number" && (window.google_srt = Math.random());
        Dn(Fn, window.google_srt);
        Gn = new Lk(Fn, !0, Hn);
        Gn.mf(() => {});
        Gn.l(!0);
        window.document.readyState == "complete" ? window.google_measure_js_timing || zk(Hn) : Hn.g && Hb(window, "load", () => {
            window.google_measure_js_timing || zk(Hn)
        })
    })();
    let In = (new Date).getTime();
    var Jn = {
        qm: 0,
        pm: 1,
        mm: 2,
        hm: 3,
        nm: 4,
        im: 5,
        om: 6,
        km: 7,
        lm: 8,
        gm: 9,
        jm: 10,
        rm: 11
    };
    var Kn = {
        tm: 0,
        um: 1,
        sm: 2
    };

    function Ln(a, b) {
        return a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom
    }

    function Mn(a) {
        a = Xa(a, b => new Cj(b.top, b.right, b.bottom, b.left));
        a = Nn(a);
        return {
            top: a.top,
            right: a.right,
            bottom: a.bottom,
            left: a.left
        }
    }

    function Nn(a) {
        if (!a.length) throw Error("pso:box:m:nb");
        return Ya(a.slice(1), (b, c) => {
            b.left = Math.min(b.left, c.left);
            b.top = Math.min(b.top, c.top);
            b.right = Math.max(b.right, c.right);
            b.bottom = Math.max(b.bottom, c.bottom);
            return b
        }, Dj(a[0]))
    };
    var Lb = {
        kn: 0,
        Vl: 1,
        Yl: 2,
        Wl: 3,
        Xl: 4,
        em: 8,
        vn: 9,
        Gm: 10,
        Hm: 11,
        rn: 16,
        Il: 17,
        Hl: 24,
        Dm: 25,
        Wk: 26,
        Vk: 27,
        xh: 30,
        xm: 32,
        Am: 40,
        Bn: 41,
        xn: 42
    };
    var On = {
            overlays: 1,
            interstitials: 2,
            vignettes: 2,
            inserts: 3,
            immersives: 4,
            list_view: 5,
            full_page: 6,
            side_rails: 7
        },
        Pn = {
            [1]: 1,
            [2]: 1,
            [3]: 7,
            [4]: 7,
            [8]: 2,
            [27]: 3,
            [9]: 4,
            [30]: 5
        };
    var Qn = 728 * 1.38;

    function Rn(a, b = -1) {
        if (a !== a.top) {
            if (b < 0) a = !1;
            else {
                var c = Sn(a, !0, !0),
                    d = Tn(a, !0);
                a = c > 0 && d > 0 && Math.abs(1 - a.screen.width / c) <= b && Math.abs(1 - a.screen.height / d) <= b
            }
            a = a ? 0 : 512
        } else a = 0;
        return a
    }

    function Un(a, b = 420, c = !1, d = !1) {
        return (a = Sn(a, c, d)) ? a > b ? 32768 : a < 320 ? 65536 : 0 : 16384
    }

    function Vn(a) {
        return Math.max(0, Wn(a, !0) - Tn(a))
    }

    function Xn(a) {
        a = a.document;
        let b = {};
        a && (b = a.compatMode == "CSS1Compat" ? a.documentElement : a.body);
        return b || {}
    }

    function Tn(a, b = !1) {
        const c = Xn(a).clientHeight;
        return b ? c * lf(a) : c
    }

    function Sn(a, b = !1, c = !1) {
        c = Xn(a).clientWidth ? ? (c ? a.innerWidth : void 0);
        return b ? c * lf(a) : c
    }

    function Wn(a, b) {
        const c = Xn(a);
        return b ? (a = Tn(a), c.scrollHeight === a ? c.offsetHeight : c.scrollHeight) : c.offsetHeight
    }

    function Yn(a, b) {
        return Zn(b) || b === 10 || !a.adCount ? !1 : b == 1 || b == 2 ? !(!a.adCount[1] && !a.adCount[2]) : (a = a.adCount[b]) ? a >= 1 : !1
    }

    function $n(a, b) {
        return a && a.source ? a.source === b || a.source.parent === b : !1
    }

    function ao(a) {
        return a.pageYOffset === void 0 ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
    }

    function bo(a) {
        return a.pageXOffset === void 0 ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollLeft : a.pageXOffset
    }

    function co(a) {
        const b = {};
        let c;
        Array.isArray(a) ? c = a : a && a.key_value && (c = a.key_value);
        if (c)
            for (a = 0; a < c.length; a++) {
                const d = c[a];
                if ("key" in d && "value" in d) {
                    const e = d.value;
                    b[d.key] = e == null ? null : String(e)
                }
            }
        return b
    }

    function eo(a, b, c, d) {
        Kk(c, b, {
            c: d.data.substring(0, 500),
            u: a.location.href.substring(0, 500)
        }, !0, .1);
        return !0
    }

    function fo(a) {
        const b = {
            bottom: "auto",
            clear: "none",
            display: "inline",
            "float": "none",
            height: "auto",
            left: "auto",
            margin: 0,
            "margin-bottom": 0,
            "margin-left": 0,
            "margin-right": "0",
            "margin-top": 0,
            "max-height": "none",
            "max-width": "none",
            opacity: 1,
            overflow: "visible",
            padding: 0,
            "padding-bottom": 0,
            "padding-left": 0,
            "padding-right": 0,
            "padding-top": 0,
            position: "static",
            right: "auto",
            top: "auto",
            "vertical-align": "baseline",
            visibility: "visible",
            width: "auto",
            "z-index": "auto"
        };
        Ua(Object.keys(b), c => {
            Uj(a, c) || Rj(a, c, b[c])
        });
        Xe(a)
    }

    function Zn(a) {
        return a === 26 || a === 27 || a === 40 || a === 41
    };

    function go(a, b) {
        ho(a).forEach(b, void 0)
    }

    function ho(a) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
    };

    function io(a, b) {
        return a.g[jo(b)] !== void 0
    }

    function ko(a) {
        const b = [];
        for (const c in a.g) a.g[c] !== void 0 && a.g.hasOwnProperty(c) && b.push(a.i[c]);
        return b
    }

    function lo(a) {
        const b = [];
        for (const c in a.g) a.g[c] !== void 0 && a.g.hasOwnProperty(c) && b.push(a.g[c]);
        return b
    }
    const mo = class {
        constructor() {
            this.g = {};
            this.i = {}
        }
        set(a, b) {
            const c = jo(a);
            this.g[c] = b;
            this.i[c] = a
        }
        get(a, b) {
            a = jo(a);
            return this.g[a] !== void 0 ? this.g[a] : b
        }
        vc() {
            return ko(this).length
        }
        clear() {
            this.g = {};
            this.i = {}
        }
    };

    function jo(a) {
        return a instanceof Object ? String(Ea(a)) : a + ""
    };
    const no = class {
        constructor(a) {
            this.g = new mo;
            if (a)
                for (var b = 0; b < a.length; ++b) this.add(a[b])
        }
        add(a) {
            this.g.set(a, !0)
        }
        contains(a) {
            return io(this.g, a)
        }
    };
    const oo = new no("IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(" "));

    function po(a, {
        eb: b,
        Xa: c,
        Db: d
    }) {
        return d && c(b) ? b : (b = b.parentElement) ? qo(a, {
            eb: b,
            Xa: c,
            Db: !0
        }) : null
    }

    function qo(a, {
        eb: b,
        Xa: c,
        Db: d = !1
    }) {
        const e = ro({
                eb: b,
                Xa: c,
                Db: d
            }),
            f = a.g.get(e);
        if (f) return f.element;
        b = po(a, {
            eb: b,
            Xa: c,
            Db: d
        });
        a.g.set(e, {
            element: b
        });
        return b
    }
    var so = class {
        constructor() {
            this.g = new Map
        }
    };

    function ro({
        eb: a,
        Xa: b,
        Db: c
    }) {
        a = Ea(a);
        b = Ea(b);
        return `${a}:${b}:${c}`
    };

    function to(a) {
        Wd(a.document.body.offsetHeight)
    };

    function uo(a) {
        a && typeof a.dispose == "function" && a.dispose()
    };

    function Q() {
        this.C = this.C;
        this.G = this.G
    }
    Q.prototype.C = !1;
    Q.prototype.dispose = function() {
        this.C || (this.C = !0, this.i())
    };
    Q.prototype[la(Symbol, "dispose")] = function() {
        this.dispose()
    };

    function vo(a, b) {
        wo(a, Ka(uo, b))
    }

    function wo(a, b) {
        a.C ? b() : (a.G || (a.G = []), a.G.push(b))
    }
    Q.prototype.i = function() {
        if (this.G)
            for (; this.G.length;) this.G.shift()()
    };

    function xo(a) {
        a.g.forEach((b, c) => {
            if (b.overrides.delete(a)) {
                b = Array.from(b.overrides.values()).pop() || b.originalValue;
                var d = a.element;
                b ? d.style.setProperty(c, b.value, b.priority) : d.style.removeProperty(c)
            }
        })
    }

    function yo(a, b, c) {
        c = {
            value: c,
            priority: "important"
        };
        var d = a.g.get(b);
        if (!d) {
            d = a.element;
            var e = d.style.getPropertyValue(b);
            d = {
                originalValue: e ? {
                    value: e,
                    priority: d.style.getPropertyPriority(b)
                } : null,
                overrides: new Map
            };
            a.g.set(b, d)
        }
        d.overrides.delete(a);
        d.overrides.set(a, c);
        a = a.element;
        c ? a.style.setProperty(b, c.value, c.priority) : a.style.removeProperty(b)
    }
    var zo = class extends Q {
        constructor(a, b) {
            super();
            this.element = b;
            a = a.googTempStyleOverrideInfo = a.googTempStyleOverrideInfo || new Map;
            var c = a.get(b);
            c ? b = c : (c = new Map, a.set(b, c), b = c);
            this.g = b
        }
        i() {
            xo(this);
            super.i()
        }
    };

    function Ao(a) {
        const b = new R(a.getValue());
        a.listen(c => b.g(c));
        return b
    }

    function Bo(a, b) {
        const c = new R({
            first: a.P,
            second: b.P
        });
        a.listen(() => c.g({
            first: a.P,
            second: b.P
        }));
        b.listen(() => c.g({
            first: a.P,
            second: b.P
        }));
        return c
    }

    function Co(...a) {
        const b = [...a],
            c = () => b.every(f => f.P),
            d = new R(c()),
            e = () => {
                d.g(c())
            };
        b.forEach(f => f.listen(e));
        return Do(d)
    }

    function Eo(...a) {
        const b = [...a],
            c = () => b.findIndex(f => f.P) !== -1,
            d = new R(c()),
            e = () => {
                d.g(c())
            };
        b.forEach(f => f.listen(e));
        return Do(d)
    }

    function Do(a, b = Fo) {
        var c = a.P;
        const d = new R(a.P);
        a.listen(e => {
            b(e, c) || (c = e, d.g(e))
        });
        return d
    }

    function Go(a, b, c) {
        return a.i(d => {
            d === b && c()
        })
    }

    function Ho(a, b, c) {
        if (a.P === b) return c(), () => {};
        const d = {
            dc: null
        };
        d.dc = Go(a, b, () => {
            d.dc && (d.dc(), d.dc = null);
            c()
        });
        return d.dc
    }

    function Io(a, b, c) {
        Do(a).listen(d => {
            d === b && c()
        })
    }

    function Jo(a, b) {
        a.l && a.l();
        a.l = b.listen(c => a.g(c), !0)
    }

    function Ko(a, b, c, d) {
        const e = new R(!1);
        var f = null;
        a = a.map(d);
        Go(a, !0, () => {
            f === null && (f = b.setTimeout(() => {
                e.g(!0)
            }, c))
        });
        Go(a, !1, () => {
            e.g(!1);
            f !== null && (b.clearTimeout(f), f = null)
        });
        return Do(e)
    }

    function Lo(a) {
        return {
            listen: b => a.listen(b),
            getValue: () => a.P
        }
    }
    class R {
        constructor(a) {
            this.P = a;
            this.j = new Map;
            this.C = 1;
            this.l = null
        }
        listen(a, b = !1) {
            const c = this.C++;
            this.j.set(c, a);
            b && a(this.P);
            return () => {
                this.j.delete(c)
            }
        }
        i(a) {
            return this.listen(a, !0)
        }
        A() {
            return this.P
        }
        g(a) {
            this.P = a;
            this.j.forEach(b => {
                b(this.P)
            })
        }
        map(a) {
            const b = new R(a(this.P));
            this.listen(c => b.g(a(c)));
            return b
        }
    }

    function Fo(a, b) {
        return a == b
    };

    function Mo(a) {
        return new No(a)
    }

    function Oo(a, b) {
        Ua(a.g, c => {
            c(b)
        })
    }
    var Po = class {
        constructor() {
            this.g = []
        }
    };
    class No {
        constructor(a) {
            this.g = a
        }
        listen(a) {
            this.g.g.push(a)
        }
        map(a) {
            const b = new Po;
            this.listen(c => Oo(b, a(c)));
            return Mo(b)
        }
        delay(a, b) {
            const c = new Po;
            this.listen(d => {
                a.setTimeout(() => {
                    Oo(c, d)
                }, b)
            });
            return Mo(c)
        }
    }

    function Qo(...a) {
        const b = new Po;
        a.forEach(c => {
            c.listen(d => {
                Oo(b, d)
            })
        });
        return Mo(b)
    };

    function Ro(a) {
        return Do(Bo(a.g, a.j).map(b => {
            var c = b.first;
            b = b.second;
            return c == null || b == null ? null : So(c, b)
        }))
    }
    var Uo = class {
        constructor(a) {
            this.i = a;
            this.g = new R(null);
            this.j = new R(null);
            this.l = new Po;
            this.B = b => {
                this.g.P == null && b.touches.length == 1 && this.g.g(b.touches[0])
            };
            this.A = b => {
                const c = this.g.P;
                c != null && (b = To(c, b.changedTouches), b != null && (this.g.g(null), this.j.g(null), Oo(this.l, So(c, b))))
            };
            this.C = b => {
                var c = this.g.P;
                c != null && (c = To(c, b.changedTouches), c != null && (this.j.g(c), b.preventDefault()))
            }
        }
    };

    function So(a, b) {
        return {
            qh: b.pageX - a.pageX,
            rh: b.pageY - a.pageY
        }
    }

    function To(a, b) {
        if (b == null) return null;
        for (let c = 0; c < b.length; ++c)
            if (b[c].identifier == a.identifier) return b[c];
        return null
    };

    function Vo(a) {
        return Do(Bo(a.g, a.i).map(b => {
            var c = b.first;
            b = b.second;
            return c == null || b == null ? null : Wo(c, b)
        }))
    }
    var Xo = class {
        constructor(a, b) {
            this.l = a;
            this.A = b;
            this.g = new R(null);
            this.i = new R(null);
            this.j = new Po;
            this.G = c => {
                this.g.g(c)
            };
            this.C = c => {
                const d = this.g.P;
                d != null && (this.g.g(null), this.i.g(null), Oo(this.j, Wo(d, c)))
            };
            this.B = c => {
                this.g.P != null && (this.i.g(c), c.preventDefault())
            }
        }
    };

    function Wo(a, b) {
        return {
            qh: b.screenX - a.screenX,
            rh: b.screenY - a.screenY
        }
    };
    var $o = (a, b, c) => {
        const d = new Yo(a, b, c);
        return () => Zo(d)
    };

    function Zo(a) {
        if (a.g) return !1;
        if (a.i == null) return ap(a), !0;
        const b = a.i + a.A - (new Date).getTime();
        if (b < 1) return ap(a), !0;
        bp(a, b);
        return !0
    }

    function ap(a) {
        a.i = (new Date).getTime();
        a.l()
    }

    function bp(a, b) {
        a.g = !0;
        a.j.setTimeout(() => {
            a.g = !1;
            ap(a)
        }, b)
    }
    class Yo {
        constructor(a, b, c) {
            this.j = a;
            this.A = b;
            this.l = c;
            this.i = null;
            this.g = !1
        }
    };

    function cp(a) {
        return dp(Vo(a.g), Ro(a.i))
    }

    function ep(a) {
        return Qo(Mo(a.g.j), Mo(a.i.l))
    }
    var fp = class {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
    };

    function dp(a, b) {
        return Bo(a, b).map(({
            first: c,
            second: d
        }) => c || d || null)
    };
    var gp = class {
        constructor() {
            this.cache = new Map
        }
        getBoundingClientRect(a) {
            var b = this.cache.get(a);
            if (b) return b;
            b = a.getBoundingClientRect();
            this.cache.set(a, b);
            return b
        }
    };

    function hp(a) {
        a.A == null && (a.A = new R(a.B.getBoundingClientRect()));
        return a.A
    }
    class ip extends Q {
        constructor(a, b) {
            super();
            this.j = a;
            this.B = b;
            this.F = !1;
            this.A = null;
            this.l = () => {
                hp(this).g(this.B.getBoundingClientRect())
            }
        }
        g() {
            this.F || (this.F = !0, this.j.addEventListener("resize", this.l), this.j.addEventListener("scroll", this.l));
            return hp(this)
        }
        i() {
            this.j.removeEventListener("resize", this.l);
            this.j.removeEventListener("scroll", this.l);
            super.i()
        }
    };

    function jp(a, b) {
        return new kp(a, b)
    }

    function lp(a) {
        a.win.requestAnimationFrame(() => {
            a.C || a.j.g(new sd(a.element.offsetWidth, a.element.offsetHeight))
        })
    }

    function mp(a) {
        a.g || (a.g = !0, a.l.observe(a.element));
        return Do(a.j, td)
    }
    var kp = class extends Q {
        constructor(a, b) {
            super();
            this.win = a;
            this.element = b;
            this.g = !1;
            this.j = new R(new sd(this.element.offsetWidth, this.element.offsetHeight));
            this.l = new ResizeObserver(() => {
                lp(this)
            })
        }
        i() {
            this.l.disconnect();
            super.i()
        }
    };

    function np(a, b) {
        return {
            top: a.g - b,
            right: a.j + a.i,
            bottom: a.g + b,
            left: a.j
        }
    }
    class op {
        constructor(a, b, c) {
            this.j = a;
            this.g = b;
            this.i = c
        }
    };

    function pp(a, b) {
        a = a.getBoundingClientRect();
        return new qp(a.top + ao(b), a.bottom - a.top)
    }

    function rp(a) {
        return new qp(Math.round(a.g), Math.round(a.i))
    }
    class qp {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
        getHeight() {
            return this.i
        }
    };
    var tp = (a, b) => {
        const c = a.google_pso_loaded_fonts || (a.google_pso_loaded_fonts = []),
            d = new no(c);
        b = b.filter(e => !d.contains(e));
        b.length && (sp(a, b), gb(c, b))
    };

    function sp(a, b) {
        for (const f of b) {
            b = Ce("LINK", a.document);
            b.type = "text/css";
            var c = id `//fonts.googleapis.com/css`,
                d = Qj(),
                e = b;
            c = dc(c, {
                family: f
            });
            if (c instanceof cc) d = c;
            else a: {
                if (c instanceof nc) {
                    d = c;
                    break a
                }
                const h = uc(c);h === oc && d(c);d = h
            }
            e.rel = "stylesheet";
            if ($b("stylesheet", "stylesheet")) {
                e.href = fc(d).toString();
                a: if (d = (e.ownerDocument && e.ownerDocument.defaultView || r).document, d.querySelector) {
                    if ((d = d.querySelector('style[nonce],link[rel="stylesheet"][nonce]')) && (d = d.nonce || d.getAttribute("nonce")) &&
                        nd.test(d)) break a;
                    d = ""
                } else d = "";
                d && e.setAttribute("nonce", d)
            } else d instanceof cc ? d = fc(d).toString() : (d = xc(d), d = d === void 0 ? oc.toString() : d), e.href = d;
            a.document.head.appendChild(b)
        }
    };

    function up(a, b) {
        a.F ? b(a.l) : a.j.push(b)
    }

    function vp(a, b) {
        a.F = !0;
        a.l = b;
        a.j.forEach(c => {
            c(a.l)
        });
        a.j = []
    }
    class wp extends Q {
        constructor(a) {
            super();
            this.g = a;
            this.j = [];
            this.F = !1;
            this.B = this.l = null;
            this.H = $o(a, 1E3, () => {
                if (this.B != null) {
                    var b = Wn(this.g, !0) - this.B;
                    b > 1E3 && vp(this, b)
                }
            });
            this.A = null
        }
        J(a, b) {
            a == null ? (this.B = a = Wn(this.g, !0), this.g.addEventListener("scroll", this.H), b != null && b(a)) : this.A = this.g.setTimeout(() => {
                this.J(void 0, b)
            }, a)
        }
        i() {
            this.A != null && this.g.clearTimeout(this.A);
            this.g.removeEventListener("scroll", this.H);
            this.j = [];
            this.l = null;
            super.i()
        }
    };
    var xp = (a, b) => a.reduce((c, d) => c.concat(b(d)), []);
    class yp {
        constructor(a = 1) {
            this.g = a
        }
        next() {
            var a = 48271 * this.g % 2147483647;
            this.g = a * 2147483647 < 0 ? a + 2147483647 : a;
            return this.g / 2147483647
        }
    };

    function zp(a, b, c) {
        const d = [];
        for (const e of a.g) b(e) ? d.push(e) : c(e);
        return new Ap(d)
    }

    function Bp(a) {
        return a.g.slice(0)
    }

    function Cp(a, b = 1) {
        a = Bp(a);
        const c = new yp(b);
        pb(a, () => c.next());
        return new Ap(a)
    }
    const Ap = class {
        constructor(a) {
            this.g = a.slice(0)
        }
        forEach(a) {
            this.g.forEach((b, c) => void a(b, c, this))
        }
        filter(a) {
            return new Ap(Wa(this.g, a))
        }
        apply(a) {
            return new Ap(a(Bp(this)))
        }
        sort(a) {
            return new Ap(Bp(this).sort(a))
        }
        get(a) {
            return this.g[a]
        }
        add(a) {
            const b = Bp(this);
            b.push(a);
            return new Ap(b)
        }
    };
    class Dp {
        constructor(a) {
            this.g = new no(a)
        }
        contains(a) {
            return this.g.contains(a)
        }
    };

    function Ep(a) {
        return new Fp({
            value: a
        }, null)
    }

    function Gp(a) {
        return new Fp(null, Error(a))
    }

    function Hp(a) {
        try {
            return Ep(a())
        } catch (b) {
            return new Fp(null, b)
        }
    }

    function Ip(a) {
        return a.g != null ? a.getValue() : null
    }

    function Jp(a, b) {
        a.g != null && b(a.getValue());
        return a
    }

    function Kp(a, b) {
        return a.g != null ? a : new Fp(null, b(a.i))
    }

    function Lp(a, b) {
        return Kp(a, c => Error(`${b}${c.message}`))
    }

    function Mp(a, b) {
        a.g != null || b(a.i);
        return a
    }
    class Fp {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
        getValue() {
            return this.g.value
        }
        map(a) {
            return this.g != null ? (a = a(this.getValue()), a instanceof Fp ? a : Ep(a)) : this
        }
    };
    class Np {
        constructor() {
            this.g = new mo
        }
        set(a, b) {
            let c = this.g.get(a);
            c || (c = new no, this.g.set(a, c));
            c.add(b)
        }
    };

    function Op(a) {
        return !a
    }

    function Pp(a) {
        return b => {
            for (const c of a) c(b)
        }
    };

    function Qp(a) {
        return a !== null
    };
    var Rp = class extends O {
        getId() {
            return F(this, 3)
        }
    };
    Rp.O = [4];
    class Sp {
        constructor(a, {
            Lf: b,
            zh: c,
            Ui: d,
            Ug: e
        }) {
            this.A = a;
            this.j = c;
            this.l = new Ap(b || []);
            this.i = e;
            this.g = d
        }
    };
    var Tp = a => {
            var b = a.split("~").filter(c => c.length > 0);
            a = new mo;
            for (const c of b) b = c.indexOf("."), b == -1 ? a.set(c, "") : a.set(c.substring(0, b), c.substring(b + 1));
            return a
        },
        Vp = a => {
            var b = Up(a);
            a = [];
            for (let c of b) b = String(c.ic), a.push(c.yb + "." + (b.length <= 20 ? b : b.slice(0, 19) + "_"));
            return a.join("~")
        };
    const Up = a => {
            const b = [],
                c = a.l;
            c && c.g.length && b.push({
                yb: "a",
                ic: Wp(c)
            });
            a.j != null && b.push({
                yb: "as",
                ic: a.j
            });
            a.g != null && b.push({
                yb: "i",
                ic: String(a.g)
            });
            a.i != null && b.push({
                yb: "rp",
                ic: String(a.i)
            });
            b.sort(function(d, e) {
                return d.yb.localeCompare(e.yb)
            });
            b.unshift({
                yb: "t",
                ic: Xp(a.A)
            });
            return b
        },
        Xp = a => {
            switch (a) {
                case 0:
                    return "aa";
                case 1:
                    return "ma";
                default:
                    throw Error("Invalid slot type" + a);
            }
        },
        Wp = a => {
            a = Bp(a).map(Yp);
            a = JSON.stringify(a);
            return He(a)
        },
        Yp = a => {
            const b = {};
            F(a, 7) != null && (b.q = F(a, 7));
            ji(a, 2) != null &&
                (b.o = ji(a, 2));
            ji(a, 5) != null && (b.p = ji(a, 5));
            return b
        };

    function Zp() {
        var a = new $p;
        return Fh(a, 2, xg(1))
    }
    var $p = class extends O {
        setLocation(a) {
            return Fh(this, 1, xg(a))
        }
        g() {
            return si(this, 1)
        }
    };

    function aq(a) {
        const b = [].slice.call(arguments).filter(zb(e => e === null));
        if (!b.length) return null;
        let c = [],
            d = {};
        b.forEach(e => {
            c = c.concat(e.Sf || []);
            d = Object.assign(d, e.wc())
        });
        return new bq(c, d)
    }

    function cq(a) {
        switch (a) {
            case 1:
                return new bq(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new bq(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new bq(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new bq(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function dq(a) {
        return a == null ? null : new bq(null, {
            google_ml_rank: a
        })
    }

    function eq(a) {
        return a == null ? null : new bq(null, {
            google_placement_id: Vp(a)
        })
    }

    function fq({
        ji: a,
        Di: b = null
    }) {
        if (a == null) return null;
        a = {
            google_daaos_ts: a
        };
        b != null && (a.google_erank = b + 1);
        return new bq(null, a)
    }
    class bq {
        constructor(a, b) {
            this.Sf = a;
            this.g = b
        }
        wc() {
            return this.g
        }
    };
    var gq = class extends O {};
    var hq = class extends O {};
    var iq = class extends O {
        C() {
            return F(this, 2)
        }
        A() {
            return F(this, 5)
        }
        g() {
            return di(this, hq, 3, y())
        }
        j() {
            return ji(this, 4)
        }
        l() {
            return Kh(this, 6)
        }
        B() {
            return Hh(this, gq, 7)
        }
    };
    iq.O = [3];
    var jq = class extends O {};
    var kq = class extends O {
        l() {
            return K(this, 12, !1)
        }
        j() {
            return Ng(Ch(this, 13))
        }
        g() {
            const a = ii(this, 23);
            return a == null ? void 0 : a
        }
    };
    var lq = class extends O {
        constructor() {
            super()
        }
    };
    var mq = class extends O {
        g() {
            return ki(this, 3)
        }
        j() {
            return ii(this, 6)
        }
    };
    var nq = class extends O {};
    var oq = class extends O {};
    var pq = class extends O {
        ja() {
            return z(this, Rp, 1)
        }
        g() {
            return ki(this, 2)
        }
    };
    var qq = class extends O {};
    var rq = class extends O {};
    var sq = class extends O {
            getName() {
                return F(this, 4)
            }
        },
        tq = [1, 2, 3];
    var uq = class extends O {
        g() {
            return z(this, mq, 10)
        }
    };
    uq.O = [2, 5, 6, 11];
    var vq = class extends O {
        g() {
            return ii(this, 2)
        }
        j() {
            return ii(this, 3)
        }
    };
    var wq = class extends O {
        g() {
            return Ng(Ch(this, 1))
        }
    };
    var xq = class extends O {};
    var yq = class extends O {
        g() {
            return mi(this, 1)
        }
    };
    var zq = class extends O {
        g() {
            return L(this, 1)
        }
        j() {
            return L(this, 2)
        }
    };
    var Aq = class extends O {};
    var Bq = class extends O {
        l() {
            return K(this, 1)
        }
        A() {
            return K(this, 3)
        }
        C() {
            return K(this, 7)
        }
        g() {
            return K(this, 4)
        }
        j() {
            return K(this, 5)
        }
    };
    var Cq = class extends O {
        j() {
            return z(this, zq, 5)
        }
        g() {
            return z(this, yq, 6)
        }
        A() {
            return L(this, 8)
        }
        C() {
            return K(this, 9)
        }
        B() {
            return L(this, 13)
        }
        G() {
            return K(this, 11)
        }
        l() {
            return z(this, Bq, 12)
        }
    };
    var Dq = class extends O {};
    var Eq = class extends O {
        g() {
            return z(this, Dq, 1)
        }
    };
    var Fq = class extends O {};
    Fq.O = [2];
    var Gq = class extends O {};
    var Hq = class extends O {
        g(a) {
            return di(this, Gq, 1, y(a))
        }
    };
    Hq.O = [1];
    var Iq = class extends O {
        setProperty(a) {
            return Ei(this, 1, a)
        }
        getValue() {
            return F(this, 2)
        }
    };
    var Jq = class extends O {};
    Jq.O = [3, 4];
    var Kq = class extends O {};
    var Lq = class extends O {
        ja() {
            return z(this, Rp, 1)
        }
        g() {
            return ki(this, 2)
        }
    };
    Lq.O = [6, 7, 9, 10, 11];
    var Mq = class extends O {};
    Mq.O = [4];
    var Nq = class extends O {};
    var Oq = class extends O {
        g() {
            return Lh(this, 6, Tg, y())
        }
    };
    Oq.O = [6];
    var Pq = class extends O {
        Je() {
            return Hh(this, Nq, 2)
        }
    };
    var Qq = class extends O {
        g() {
            return mi(this, 1)
        }
    };
    var Rq = class extends O {};
    var Tq = class extends O {
            g() {
                return pi(this, Rq, 2, Sq)
            }
        },
        Sq = [1, 2];
    var Uq = class extends O {
        g() {
            return z(this, Tq, 3)
        }
    };
    var Vq = class extends O {};
    var Wq = class extends O {
        g() {
            return di(this, Vq, 1, y())
        }
    };
    Wq.O = [1];
    var Xq = class extends O {
        g() {
            return Lh(this, 1, Tg, y())
        }
        j() {
            return z(this, Uq, 3)
        }
    };
    Xq.O = [1, 4];
    var Yq = class extends O {
            g() {
                return z(this, kq, 15)
            }
        },
        Zq = Oi(Yq);
    Yq.O = [1, 2, 5, 7];
    var $q = class extends O {},
        ar = Oi($q);

    function br(a) {
        try {
            const b = a.localStorage.getItem("google_ama_settings");
            return b ? ar(b) : null
        } catch (b) {
            return null
        }
    }

    function cr(a, b) {
        if (a.Be !== void 0) {
            var c = br(b);
            c || (c = new $q);
            a.Be !== void 0 && ti(c, 2, a.Be);
            a = Date.now() + 864E5;
            Number.isFinite(a) && Ci(c, 1, Math.round(a));
            c = Hi(c);
            try {
                b.localStorage.setItem("google_ama_settings", c)
            } catch (d) {}
        } else if ((c = br(b)) && Ng(Ch(c, 1)) < Date.now()) try {
            b.localStorage.removeItem("google_ama_settings")
        } catch (d) {}
    };
    var dr = {
            qb: "ama_success",
            Pa: .1,
            Ua: !0,
            rb: !0
        },
        er = {
            qb: "ama_failure",
            Pa: .1,
            Ua: !0,
            rb: !0
        },
        fr = {
            qb: "ama_coverage",
            Pa: .1,
            Ua: !0,
            rb: !0
        },
        gr = {
            qb: "ama_opt",
            Pa: .1,
            Ua: !0,
            rb: !1
        },
        hr = {
            qb: "ama_auto_rs",
            Pa: 1,
            Ua: !0,
            rb: !1
        },
        ir = {
            qb: "ama_improv",
            Pa: .1,
            Ua: !0,
            rb: !1
        },
        jr = {
            qb: "ama_constraints",
            Pa: 0,
            Ua: !0,
            rb: !0
        };

    function kr(a, b) {
        lr(a.i, hr, { ...b,
            evt: "place",
            vh: Tn(a.win),
            eid: a.g.g() ? .g() || 0,
            hl: a.g.j() ? .g() || ""
        })
    }

    function mr(a, b, c) {
        b = {
            sts: b
        };
        c && (b.excp_n = c.name, b.excp_m = c.message && c.message.substring(0, 512), b.excp_s = c.stack && Jk(c.stack, "") || "");
        kr(a, b)
    }
    var nr = class {
        constructor(a, b, c) {
            this.win = a;
            this.i = b;
            this.g = c
        }
    };
    const or = ["-webkit-text-fill-color"];

    function pr(a) {
        if (Zd) {
            {
                const c = De(a.document.body, a);
                if (c) {
                    a = {};
                    var b = c.length;
                    for (let d = 0; d < b; ++d) a[c[d]] = "initial";
                    a = qr(a)
                } else a = rr()
            }
        } else a = rr();
        return a
    }
    var rr = () => {
        const a = {
            all: "initial"
        };
        Ua(or, b => {
            a[b] = "unset"
        });
        return a
    };

    function qr(a) {
        Ua(or, b => {
            delete a[b]
        });
        return a
    };
    var sr = class {
        constructor(a) {
            this.g = a
        }
        Ja(a) {
            const b = a.document.createElement("div");
            v(b, pr(a));
            v(b, {
                width: "100%",
                "max-width": "1000px",
                margin: "auto"
            });
            b.appendChild(this.g);
            const c = a.document.createElement("div");
            v(c, pr(a));
            v(c, {
                width: "100%",
                "text-align": "center",
                display: "block",
                padding: "5px 5px 2px",
                "box-sizing": "border-box",
                "background-color": "#FFF"
            });
            c.appendChild(b);
            return c
        }
    };

    function tr(a) {
        if (a.nodeType != 1) var b = !1;
        else if (b = a.tagName == "INS") a: {
            b = ["adsbygoogle-placeholder"];a = a.className ? a.className.split(/\s+/) : [];
            for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
            for (d = 0; d < b.length; ++d)
                if (!c[b[d]]) {
                    b = !1;
                    break a
                }
            b = !0
        }
        return b
    }

    function ur(a) {
        return ho(a.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"))
    };
    var S = class {
            constructor(a, b = !1) {
                this.g = a;
                this.defaultValue = b
            }
        },
        T = class {
            constructor(a, b = 0) {
                this.g = a;
                this.defaultValue = b
            }
        },
        vr = class {
            constructor(a, b = "") {
                this.g = a;
                this.defaultValue = b
            }
        },
        wr = class {
            constructor(a, b = []) {
                this.g = a;
                this.defaultValue = b
            }
        },
        xr = class {
            constructor(a, b = []) {
                this.g = a;
                this.defaultValue = b
            }
        };
    var yr = new S(1321, !0),
        zr = new T(619278254, 10),
        Ar = new S(1325, !0),
        Br = new S(1310, !0),
        Cr = new S(1355, !0),
        Dr = new S(1351, !0),
        Er = new T(1130, 100),
        Fr = new S(1331, !0),
        Gr = new S(1352, !0),
        Hr = new S(1330, !0),
        Ir = new T(1339, .3),
        Jr = new T(1032, 200),
        Kr = new vr(14),
        Lr = new T(1224, .01),
        Mr = new T(1346, 6),
        Nr = new T(1347, 3),
        Or = new S(1320, !0),
        Pr = new S(1260),
        Qr = new S(1239),
        Rr = new S(1196),
        Sr = new S(1160),
        Tr = new S(316),
        Ur = new S(1290),
        Vr = new S(334),
        Wr = new T(1263, -1),
        Xr = new T(54),
        Yr = new T(1323, -1),
        Zr = new T(1265, -1),
        $r = new T(1264, -1),
        as =
        new S(1291),
        bs = new S(1267, !0),
        cs = new S(1266),
        ds = new S(313),
        es = new T(66, -1),
        fs = new T(65, -1),
        gs = new S(1256),
        hs = new S(369),
        is = new S(1241, !0),
        js = new S(368),
        ks = new S(1300, !0),
        ls = new wr(1273, ["en", "de"]),
        ms = new S(1223, !0),
        ns = new wr(1261, ["44786015", "44786016"]),
        os = new S(1309),
        ps = new S(1250),
        qs = new S(1151),
        rs = new S(1361),
        ss = new S(1349),
        ts = new T(1072, .75),
        us = new S(290),
        vs = new S(1222),
        ws = new S(1354),
        xs = new S(1341),
        ys = new S(1237),
        zs = new T(1363),
        As = new T(1364, 300),
        Bs = new S(1350),
        Cs = new S(1356),
        Ds = new S(626390500),
        Es = new xr(627094447, "1 2 4 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 24 30".split(" ")),
        Fs = new T(643258048),
        Gs = new T(643258049),
        Hs = new T(579884443, .7),
        Is = new T(624950166, 15E3),
        Js = new S(652479164),
        Ks = new vr(622128249),
        Ls = new vr(622128250),
        Ms = new xr(641845510, ["33"]),
        Ns = new S(566279275),
        Os = new S(622128248, !0),
        Ps = new S(566279276),
        Qs = new vr(589752731),
        Rs = new vr(589752730),
        Ss = new xr(635821288, ["30_19"]),
        Ts = new xr(631402549),
        Us = new xr(636146137, ["30_6"]),
        Vs = new S(579884441, !0),
        Ws = new S(636570127),
        Xs =
        new xr(627094446, "1 2 4 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 24 30".split(" ")),
        Ys = new T(579884442, .7),
        Zs = new S(613534001, !0),
        $s = new T(652486359),
        at = new T(626062006, 670),
        bt = new S(626062008),
        ct = new S(643258050),
        dt = new S(506914611),
        et = new S(597181299),
        ft = new S(626062007),
        gt = new S(1120),
        ht = new xr(630330362),
        it = new T(618163195, 15E3),
        jt = new T(623405755, 300),
        kt = new T(508040914, 100),
        lt = new T(547455356, 49),
        mt = new T(650548030, 5),
        nt = new T(650548032, 300),
        ot = new T(650548031, 2),
        pt = new T(561668774, .1),
        qt =
        new T(469675170, 6E4),
        rt = new S(652491597),
        st = new S(562896595),
        tt = new S(644381219),
        ut = new S(644381220),
        vt = new S(570863962, !0),
        wt = new vr(570879859, "control_1\\.\\d"),
        xt = new T(570863961, 50),
        yt = new S(570879858, !0),
        zt = new S(45615403, !0),
        At = new S(45621722, !0),
        Bt = new S(570804360, !0),
        Ct = new T(63, 30),
        Dt = new S(1134),
        Et = new S(562874197),
        Ft = new S(562874196),
        Gt = new S(555237685, !0),
        Ht = new S(45460956),
        It = new S(45414947, !0),
        Jt = new T(472785970, 500),
        Kt = new S(643056383),
        Lt = new T(550718588, 250),
        Mt = new S(45545710),
        Nt =
        new T(624290870),
        Ot = new T(629793592, .8),
        Pt = new S(506738118),
        Qt = new S(77),
        Rt = new S(78),
        St = new S(83),
        Tt = new S(80),
        Ut = new S(76),
        Vt = new S(84),
        Wt = new S(1973),
        Xt = new S(188),
        Yt = new S(485990406);
    var Zt = class {
        constructor() {
            const a = {};
            this.j = (b, c) => a[b] != null ? a[b] : c;
            this.A = (b, c) => a[b] != null ? a[b] : c;
            this.C = (b, c) => a[b] != null ? a[b] : c;
            this.g = (b, c) => a[b] != null ? a[b] : c;
            this.l = (b, c) => a[b] != null ? c.concat(a[b]) : c;
            this.i = () => {}
        }
    };

    function U(a) {
        return P(Zt).j(a.g, a.defaultValue)
    }

    function V(a) {
        return P(Zt).A(a.g, a.defaultValue)
    }

    function $t(a) {
        return P(Zt).C(a.g, a.defaultValue)
    }

    function au(a) {
        return P(Zt).l(a.g, a.defaultValue)
    };

    function bu(a, b) {
        a = qe(new ce(a), "DIV");
        const c = a.style;
        c.width = "100%";
        c.height = "auto";
        c.clear = b ? "both" : "none";
        return a
    }

    function cu(a, b, c) {
        switch (c) {
            case 0:
                b.parentNode && b.parentNode.insertBefore(a, b);
                break;
            case 3:
                if (c = b.parentNode) {
                    var d = b.nextSibling;
                    if (d && d.parentNode != c)
                        for (; d && d.nodeType == 8;) d = d.nextSibling;
                    c.insertBefore(a, d)
                }
                break;
            case 1:
                b.insertBefore(a, b.firstChild);
                break;
            case 2:
                b.appendChild(a)
        }
        tr(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    }

    function du(a) {
        if (a && a.parentNode) {
            const b = a.parentNode;
            b.removeChild(a);
            tr(b) && (b.style.display = b.getAttribute("data-init-display") || "none")
        }
    };
    var fu = (a, b, c, d = 0) => {
            var e = eu(b, c, d);
            if (e.J) {
                for (c = b = e.J; c = e.od(c);) b = c;
                e = {
                    anchor: b,
                    position: e.Md
                }
            } else e = {
                anchor: b,
                position: c
            };
            a["google-ama-order-assurance"] = d;
            cu(a, e.anchor, e.position)
        },
        gu = (a, b, c, d = 0) => {
            U(ds) ? fu(a, b, c, d) : cu(a, b, c)
        };

    function eu(a, b, c) {
        const d = f => {
                f = hu(f);
                return f == null ? !1 : c < f
            },
            e = f => {
                f = hu(f);
                return f == null ? !1 : c > f
            };
        switch (b) {
            case 0:
                return {
                    J: iu(a.previousSibling, d),
                    od: f => iu(f.previousSibling, d),
                    Md: 0
                };
            case 2:
                return {
                    J: iu(a.lastChild, d),
                    od: f => iu(f.previousSibling, d),
                    Md: 0
                };
            case 3:
                return {
                    J: iu(a.nextSibling, e),
                    od: f => iu(f.nextSibling, e),
                    Md: 3
                };
            case 1:
                return {
                    J: iu(a.firstChild, e),
                    od: f => iu(f.nextSibling, e),
                    Md: 3
                }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }

    function hu(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function iu(a, b) {
        return a && b(a) ? a : null
    };

    function ju(a, b) {
        try {
            const c = b.document.documentElement.getBoundingClientRect(),
                d = a.getBoundingClientRect();
            return {
                x: d.left - c.left,
                y: d.top - c.top
            }
        } catch (c) {
            return null
        }
    }

    function ku(a, b) {
        const c = a.google_reactive_ad_format === 40,
            d = a.google_reactive_ad_format === 16;
        return !!a.google_ad_resizable && (!a.google_reactive_ad_format || c) && !d && !!b.navigator && /iPhone|iPod|iPad|Android|BlackBerry/.test(b.navigator.userAgent) && b === b.top
    }

    function lu(a, b, c) {
        a = a.style;
        b === "rtl" ? a.marginRight = c : a.marginLeft = c
    }

    function mu(a, b, c) {
        a = ju(b, a);
        return c === "rtl" ? -a.x : a.x
    }

    function nu(a, b) {
        b = b.parentElement;
        return b ? (a = De(b, a)) ? a.direction : "" : ""
    }

    function ou(a, b, c) {
        if (mu(a, b, c) !== 0) {
            lu(b, c, "0px");
            var d = mu(a, b, c);
            lu(b, c, `${-1*d}px`);
            a = mu(a, b, c);
            a !== 0 && a !== d && lu(b, c, `${d/(a-d)*d}px`)
        }
    };
    const pu = RegExp("(^| )adsbygoogle($| )");

    function qu(a, b) {
        for (let c = 0; c < b.length; c++) {
            const d = b[c],
                e = Cd(d.property);
            a[e] = d.value
        }
    }

    function ru(a, b, c, d, e, f) {
        a = su(a, e);
        a.va.setAttribute("data-ad-format", d ? d : "auto");
        tu(a, b, c, f);
        return a
    }

    function uu(a, b, c = null) {
        a = su(a, {});
        tu(a, b, null, c);
        return a
    }

    function tu(a, b, c, d) {
        var e = [];
        if (d = d && d.Sf) a.nb.className = d.join(" ");
        a = a.va;
        a.className = "adsbygoogle";
        a.setAttribute("data-ad-client", b);
        c && a.setAttribute("data-ad-slot", c);
        e.length && a.setAttribute("data-ad-channel", e.join("+"))
    }

    function su(a, b) {
        const c = bu(a, b.clearBoth || !1);
        var d = c.style;
        d.textAlign = "center";
        b.Ld && qu(d, b.Ld);
        a = qe(new ce(a), "INS");
        d = a.style;
        d.display = "block";
        d.margin = "auto";
        d.backgroundColor = "transparent";
        b.uf && (d.marginTop = b.uf);
        b.ne && (d.marginBottom = b.ne);
        b.Yb && qu(d, b.Yb);
        c.appendChild(a);
        return {
            nb: c,
            va: a
        }
    }

    function vu(a, b, c) {
        b.dataset.adsbygoogleStatus = "reserved";
        b.className += " adsbygoogle-noablate";
        const d = {
            element: b
        };
        c = c && c.wc();
        if (b.hasAttribute("data-pub-vars")) {
            try {
                c = JSON.parse(b.getAttribute("data-pub-vars"))
            } catch (e) {
                return
            }
            b.removeAttribute("data-pub-vars")
        }
        c && (d.params = c);
        (a.adsbygoogle = a.adsbygoogle || []).push(d)
    }

    function wu(a) {
        const b = ur(a.document);
        Ua(b, function(c) {
            const d = xu(a, c);
            var e;
            if (e = d) {
                e = (e = ju(c, a)) ? e.y : 0;
                const f = Tn(a);
                e = !(e < f)
            }
            e && (c.setAttribute("data-pub-vars", JSON.stringify(d)), c.removeAttribute("height"), c.style.removeProperty("height"), c.removeAttribute("width"), c.style.removeProperty("width"), vu(a, c))
        })
    }

    function xu(a, b) {
        b = b.getAttribute("google_element_uid");
        a = a.google_sv_map;
        if (!b || !a || !a[b]) return null;
        a = a[b];
        b = {};
        for (let c in qb) a[qb[c]] && (b[qb[c]] = a[qb[c]]);
        return b
    };
    var zu = (a, b, c) => {
        if (!b || !c) return !1;
        var d = b.parentElement;
        const e = c.parentElement;
        if (!d || !e || d != e) return !1;
        d = 0;
        for (b = b.nextSibling; d < 10 && b;) {
            if (b == c) return !0;
            if (yu(a, b)) break;
            b = b.nextSibling;
            d++
        }
        return !1
    };
    const yu = (a, b) => {
        if (b.nodeType == 3) return b.nodeType == 3 ? (b = b.data, a = b.indexOf("&") != -1 ? zd(b, a.document) : b, a = /\S/.test(a)) : a = !1, a;
        if (b.nodeType == 1) {
            var c = a.getComputedStyle(b);
            if (c.opacity == "0" || c.display == "none" || c.visibility == "hidden") return !1;
            if ((c = b.tagName) && oo.contains(c.toUpperCase())) return !0;
            b = b.childNodes;
            for (c = 0; c < b.length; c++)
                if (yu(a, b[c])) return !0
        }
        return !1
    };
    var Au = a => {
        if (a >= 460) return a = Math.min(a, 1200), Math.ceil(a < 800 ? a / 4 : 200);
        a = Math.min(a, 600);
        return a <= 420 ? Math.ceil(a / 1.2) : Math.ceil(a / 1.91) + 130
    };
    const Bu = class {
        constructor() {
            this.g = {
                clearBoth: !0
            }
        }
        i(a, b, c, d) {
            return ru(d.document, a, null, null, this.g, b)
        }
        j(a) {
            return Au(Math.min(a.screen.width || 0, a.screen.height || 0))
        }
    };

    function Cu(a) {
        var b = [];
        go(a.getElementsByTagName("p"), function(c) {
            Du(c) >= 100 && b.push(c)
        });
        return b
    }

    function Du(a) {
        if (a.nodeType == 3) return a.length;
        if (a.nodeType != 1 || a.tagName == "SCRIPT") return 0;
        var b = 0;
        go(a.childNodes, function(c) {
            b += Du(c)
        });
        return b
    }

    function Eu(a) {
        return a.length == 0 || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }

    function Fu(a, b) {
        if (a.g == null) return b;
        switch (a.g) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.g);
        }
    }

    function Gu(a, b) {
        var c = [];
        try {
            c = b.querySelectorAll(a.l)
        } catch (h) {}
        if (!c.length) return [];
        b = fb(c);
        b = Fu(a, b);
        typeof a.i === "number" && (c = a.i, c < 0 && (c += b.length), b = c >= 0 && c < b.length ? [b[c]] : []);
        if (typeof a.j === "number") {
            c = [];
            for (var d = 0; d < b.length; d++) {
                var e = Cu(b[d]),
                    f = a.j;
                f < 0 && (f += e.length);
                f >= 0 && f < e.length && c.push(e[f])
            }
            b = c
        }
        return b
    }
    const Hu = class {
        constructor(a, b, c, d) {
            this.l = a;
            this.i = b;
            this.j = c;
            this.g = d
        }
        toString() {
            return JSON.stringify({
                nativeQuery: this.l,
                occurrenceIndex: this.i,
                paragraphIndex: this.j,
                ignoreMode: this.g
            })
        }
    };
    class Iu {
        constructor() {
            var a = id `https://pagead2.googlesyndication.com/pagead/js/err_rep.js`;
            this.g = null;
            this.i = !1;
            this.A = Math.random();
            this.j = this.ba;
            this.C = a
        }
        mf(a) {
            this.g = a
        }
        l(a) {
            this.i = a
        }
        ba(a, b, c = .01, d, e = "jserror") {
            if ((this.i ? this.A : Math.random()) > c) return !1;
            b.error && b.meta && b.id || (b = new mk(b, {
                context: a,
                id: e
            }));
            if (d || this.g) b.meta = {}, this.g && this.g(b.meta), d && d(b.meta);
            r.google_js_errors = r.google_js_errors || [];
            r.google_js_errors.push(b);
            r.error_rep_loaded || (Be(r.document, this.C), r.error_rep_loaded = !0);
            return !1
        }
        vb(a, b, c) {
            try {
                return b()
            } catch (d) {
                if (!this.j(a, d, .01, c, "jserror")) throw d;
            }
        }
        Da(a, b, c, d) {
            return (...e) => this.vb(a, () => b.apply(c, e), d)
        }
        na(a, b, c) {
            b.catch(d => {
                d = d ? d : "unknown rejection";
                this.ba(a, d instanceof Error ? d : Error(d), void 0, c || this.g || void 0)
            })
        }
    };
    const Ju = (a, b) => {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        b.length < 2048 && b.push(a)
    };
    var Ku = (a, b, c, d, e = !1) => {
            const f = d || window,
                h = typeof queueMicrotask !== "undefined";
            return function() {
                e && h && queueMicrotask(() => {
                    f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
                    f.google_rum_task_id_counter += 1
                });
                const k = tk();
                let l, m = 3;
                try {
                    l = b.apply(this, arguments)
                } catch (n) {
                    m = 13;
                    if (!c) throw n;
                    c(a, n)
                } finally {
                    f.google_measure_js_timing && k && Ju({
                        label: a.toString(),
                        value: k,
                        duration: (tk() || 0) - k,
                        type: m,
                        ...(e && h && {
                            taskId: f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1
                        })
                    }, f)
                }
                return l
            }
        },
        Lu = (a, b, c, d = !1) => Ku(a, b, (e, f) => {
            (new Iu).ba(e, f)
        }, c, d);

    function Mu(a, b, c) {
        return Ku(a, b, void 0, c, !0).apply()
    }

    function Nu(a, b) {
        return Lu(754, a, b, !0).apply()
    }

    function Ou(a) {
        if (!a) return null;
        var b = F(a, 7);
        if (F(a, 1) || a.getId() || Lh(a, 4, Tg, y()).length > 0) {
            var c = F(a, 3),
                d = F(a, 1),
                e = Lh(a, 4, Tg, y(kg));
            b = ji(a, 2);
            var f = ji(a, 5);
            a = Pu(ki(a, 6));
            var h = "";
            d && (h += d);
            c && (h += "#" + Eu(c));
            if (e)
                for (c = 0; c < e.length; c++) h += "." + Eu(e[c]);
            b = (e = h) ? new Hu(e, b, f, a) : null
        } else b = b ? new Hu(b, ji(a, 2), ji(a, 5), Pu(ki(a, 6))) : null;
        return b
    }
    var Qu = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function Pu(a) {
        return a == null ? a : Qu[a]
    }

    function Ru(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = F(a[c], 1),
                e = F(a[c], 2);
            if (d && e != null) {
                var f = {};
                f.property = d;
                f.value = e;
                b.push(f)
            }
        }
        return b
    }

    function Su(a, b) {
        var c = {};
        a && (c.uf = F(a, 1), c.ne = F(a, 2), c.clearBoth = !!ii(a, 3));
        b && (c.Ld = Ru(di(b, Iq, 3, y(kg))), a = di(b, Iq, 4, y(kg)), c.Yb = Ru(a));
        return c
    }
    var Tu = {
            1: 0,
            2: 1,
            3: 2,
            4: 3
        },
        Uu = {
            0: 1,
            1: 2,
            2: 3,
            3: 4
        };
    const Vu = class {
        constructor(a) {
            this.g = a
        }
        i(a, b, c, d) {
            return ru(d.document, a, null, null, this.g, b)
        }
        j() {
            return null
        }
    };
    class Wu {
        constructor(a) {
            this.i = a
        }
        g(a) {
            a = Math.floor(a.i);
            const b = Au(a);
            return new bq(["ap_container"], {
                google_reactive_ad_format: 27,
                google_responsive_auto_format: 16,
                google_max_num_ads: 1,
                google_ad_type: this.i,
                google_ad_format: a + "x" + b,
                google_ad_width: a,
                google_ad_height: b
            })
        }
    };
    const Xu = class {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
        i() {
            return this.l
        }
        g() {
            return this.j
        }
    };
    const Yu = class {
        constructor(a) {
            this.g = a
        }
        i(a, b, c, d) {
            var e = di(this.g, Jq, 9, y()).length > 0 ? di(this.g, Jq, 9, y())[0] : null,
                f = Su(z(this.g, Kq, 3), e);
            if (!e) return null;
            if (e = F(e, 1)) {
                d = d.document;
                var h = c.tagName;
                c = qe(new ce(d), h);
                c.style.clear = f.clearBoth ? "both" : "none";
                h == "A" && (c.style.display = "block");
                c.style.padding = "0px";
                c.style.margin = "0px";
                f.Ld && qu(c.style, f.Ld);
                d = qe(new ce(d), "INS");
                f.Yb && qu(d.style, f.Yb);
                c.appendChild(d);
                f = {
                    nb: c,
                    va: d
                };
                f.va.setAttribute("data-ad-type", "text");
                f.va.setAttribute("data-native-settings-key",
                    e);
                tu(f, a, null, b);
                a = f
            } else a = null;
            return a
        }
        j() {
            var a = di(this.g, Jq, 9, y()).length > 0 ? di(this.g, Jq, 9, y())[0] : null;
            if (!a) return null;
            a = di(a, Iq, 3, y());
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if (F(c, 1) == "height" && parseInt(F(c, 2), 10) > 0) return parseInt(F(c, 2), 10)
            }
            return null
        }
    };
    const Zu = class {
        constructor(a) {
            this.g = a
        }
        i(a, b, c, d) {
            if (!this.g) return null;
            const e = this.g.google_ad_format || null,
                f = this.g.google_ad_slot || null;
            if (c = c.style) {
                var h = [];
                for (let k = 0; k < c.length; k++) {
                    const l = c.item(k);
                    l !== "width" && l !== "height" && h.push({
                        property: l,
                        value: c.getPropertyValue(l)
                    })
                }
                c = {
                    Yb: h
                }
            } else c = {};
            a = ru(d.document, a, f, e, c, b);
            a.va.setAttribute("data-pub-vars", JSON.stringify(this.g));
            return a
        }
        j() {
            return this.g ? parseInt(this.g.google_ad_height, 10) || null : null
        }
        wc() {
            return this.g
        }
    };
    class $u {
        constructor(a) {
            this.i = a
        }
        g() {
            return new bq([], {
                google_ad_type: this.i,
                google_reactive_ad_format: 26,
                google_ad_format: "fluid"
            })
        }
    };
    const av = class {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
        g() {
            return this.j
        }
        i(a) {
            a = Gu(this.l, a.document);
            return a.length > 0 ? a[0] : null
        }
    };

    function bv(a, b, c) {
        const d = [];
        for (let t = 0; t < a.length; t++) {
            var e = a[t];
            var f = t,
                h = b,
                k = c,
                l = e.ja();
            if (l) {
                var m = Ou(l);
                if (m) {
                    var n = ki(e, 2);
                    n = Tu[n];
                    var p = n === void 0 ? null : n;
                    if (p === null) e = null;
                    else {
                        n = (n = z(e, Kq, 3)) ? ii(n, 3) : null;
                        m = new av(m, p);
                        p = Lh(e, 10, yg, y()).slice(0);
                        ji(l, 5) != null && p.push(1);
                        var q = k ? k : {};
                        k = ji(e, 12);
                        l = Hh(e, $p, 4) ? z(e, $p, 4) : null;
                        ki(e, 8) == 1 ? (q = q.Mh || null, e = new cv(m, new Vu(Su(z(e, Kq, 3), null)), q, n, 0, p, l, h, f, k, e)) : e = ki(e, 8) == 2 ? new cv(m, new Yu(e), q.Vi || new $u("text"), n, 1, p, l, h, f, k, e) : null
                    }
                } else e =
                    null
            } else e = null;
            e !== null && d.push(e)
        }
        return d
    }

    function dv(a) {
        return a.A
    }

    function ev(a) {
        return a.Fa
    }

    function fv(a) {
        return U(Rr) ? (a.M || (a.M = a.F.i(a.j)), a.M) : a.F.i(a.j)
    }

    function gv(a) {
        var b = a.H;
        a = a.j.document.createElement("div");
        U(Rr) ? a.className = "google-auto-placed-ad-placeholder" : a.className = "google-auto-placed";
        var c = a.style;
        c.textAlign = "center";
        c.width = "100%";
        c.height = "0px";
        c.clear = b ? "both" : "none";
        return a
    }

    function hv(a) {
        return a.B instanceof Zu ? a.B.wc() : null
    }

    function iv(a, b, c) {
        io(a.I, b) || a.I.set(b, []);
        a.I.get(b).push(c)
    }

    function jv(a, b) {
        a.A = !0;
        U(Rr) && (a.i && du(a.i), a.i = null);
        b != null && a.ca.push(b)
    }

    function kv(a) {
        return bu(a.j.document, a.H || !1)
    }

    function lv(a) {
        return a.B.j(a.j)
    }

    function mv(a, b = null, c = null) {
        return new cv(a.F, b || a.B, c || a.R, a.H, a.Lb, a.zc, a.Td, a.j, a.ua, a.G, a.l, a.C, a.ia)
    }
    class cv {
        constructor(a, b, c, d, e, f, h, k, l, m = null, n = null, p = null, q = null) {
            this.F = a;
            this.B = b;
            this.R = c;
            this.H = d;
            this.Lb = e;
            this.zc = f;
            this.Td = h ? h : new $p;
            this.j = k;
            this.ua = l;
            this.G = m;
            this.l = n;
            (a = !n) || (a = !(n.ja() && ji(n.ja(), 5) != null));
            this.Fa = !a;
            this.C = p;
            this.ia = q;
            this.ca = [];
            this.A = !1;
            this.I = new mo;
            this.M = this.i = null
        }
        da() {
            return this.j
        }
        g() {
            return this.F.g()
        }
    };

    function nv(a, b, c, d, e, f) {
        const h = Zp();
        return new cv(new Xu(c, e), new Bu, new Wu(a), !0, 2, [], h, d, null, null, null, b, f)
    }

    function ov(a, b, c, d, e) {
        const f = Zp();
        return new cv(new Xu(b, d), new Vu({
            clearBoth: !0
        }), null, !0, 2, [], f, c, null, null, null, a, e)
    };
    var pv = class {
        constructor(a, b, c) {
            this.articleStructure = a;
            this.element = b;
            this.win = c
        }
        da() {
            return this.win
        }
        A(a) {
            return nv(a, this.articleStructure, this.element, this.win, 3, null)
        }
        j() {
            return ov(this.articleStructure, this.element, this.win, 3, null)
        }
    };
    const qv = {
        TABLE: {
            mc: new Dp([1, 2])
        },
        THEAD: {
            mc: new Dp([0, 3, 1, 2])
        },
        TBODY: {
            mc: new Dp([0, 3, 1, 2])
        },
        TR: {
            mc: new Dp([0, 3, 1, 2])
        },
        TD: {
            mc: new Dp([0, 3])
        }
    };

    function rv(a, b, c, d) {
        const e = c.childNodes;
        c = c.querySelectorAll(b);
        b = [];
        for (const f of c) c = Ta(e, f), c < 0 || b.push(new sv(a, [f], c, f, 3, me(f).trim(), d));
        return b
    }

    function tv(a, b, c) {
        let d = [];
        const e = [],
            f = b.childNodes,
            h = f.length;
        let k = 0,
            l = "";
        for (let p = 0; p < h; p++) {
            var m = f[p];
            if (m.nodeType == 1 || m.nodeType == 3) {
                if (m.nodeType != 1) var n = null;
                else m.tagName == "BR" ? n = m : (n = c.getComputedStyle(m).getPropertyValue("display"), n = n == "inline" || n == "inline-block" ? null : m);
                n ? (d.length && l && e.push(new sv(a, d, p - 1, n, 0, l, c)), d = [], k = p + 1, l = "") : (d.push(m), m = me(m).trim(), l += m && l ? " " + m : m)
            }
        }
        d.length && l && e.push(new sv(a, d, k, b, 2, l, c));
        return e
    }

    function uv(a, b) {
        return a.g - b.g
    }
    class sv {
        constructor(a, b, c, d, e, f, h) {
            this.l = a;
            this.Yc = b.slice(0);
            this.g = c;
            this.ae = d;
            this.be = e;
            this.C = f;
            this.i = h
        }
        da() {
            return this.i
        }
        A(a) {
            return nv(a, this.l, this.ae, this.i, this.be, this.g)
        }
        j() {
            return ov(this.l, this.ae, this.i, this.be, this.g)
        }
    };

    function vv(a) {
        return eb(a.C ? tv(a.i, a.g, a.j) : [], a.A ? rv(a.i, a.A, a.g, a.j) : []).filter(b => {
            var c = b.ae.tagName;
            c ? (c = qv[c.toUpperCase()], b = c != null && c.mc.contains(b.be)) : b = !1;
            return !b
        })
    }
    class wv {
        constructor(a, b, c) {
            this.g = a;
            this.A = b.Vc;
            this.C = b.fg;
            this.i = b.articleStructure;
            this.j = c;
            this.l = b.Kf
        }
    };

    function xv(a, b) {
        if (!b) return !1;
        const c = Ea(b),
            d = a.g.get(c);
        if (d != null) return d;
        if (b.nodeType == 1 && (b.tagName == "UL" || b.tagName == "OL") && a.i.getComputedStyle(b).getPropertyValue("list-style-type") != "none") return a.g.set(c, !0), !0;
        b = xv(a, b.parentNode);
        a.g.set(c, b);
        return b
    }

    function yv(a, b) {
        return Za(b.Yc, c => xv(a, c))
    }
    class zv {
        constructor(a) {
            this.g = new mo;
            this.i = a
        }
    };
    class Av {
        constructor(a, b) {
            this.l = a;
            this.g = [];
            this.i = [];
            this.j = b
        }
    };
    var Cv = (a, {
            sg: b = !1,
            nf: c = !1,
            Bg: d = c || U(Qr) ? 2 : 3,
            lf: e = null
        } = {}) => {
            a = vv(a);
            return Bv(a, {
                sg: b,
                nf: c,
                Bg: d,
                lf: e
            })
        },
        Bv = (a, {
            sg: b = !1,
            nf: c = !1,
            Bg: d = c || U(Qr) ? 2 : 3,
            lf: e = null
        } = {}) => {
            if (d < 2) throw Error("minGroupSize should be at least 2, found " + d);
            var f = a.slice(0);
            f.sort(uv);
            a = [];
            b = new Av(b, e);
            for (const h of f) {
                e = {
                    Nd: h,
                    qd: h.C.length < 51 ? !1 : b.j != null ? !yv(b.j, h) : !0
                };
                if (b.l || e.qd) b.g.length ? (f = b.g[b.g.length - 1].Nd, f = zu(f.da(), f.Yc[f.Yc.length - 1], e.Nd.Yc[0])) : f = !0, f ? (b.g.push(e), e.qd && b.i.push(e.Nd)) : (b.g = [e], b.i = e.qd ? [e.Nd] : []);
                if (b.i.length >= d) {
                    e = b;
                    f = c || U(Qr) ? 0 : 1;
                    if (f < 0 || f >= e.i.length) e = null;
                    else {
                        for (f = e.i[f]; e.g.length && !e.g[0].qd;) e.g.shift();
                        e.g.shift();
                        e.i.shift();
                        e = f
                    }
                    e && a.push(e)
                }
            }
            return a
        };
    var Ev = (a, b, c = !1) => {
            a = Dv(a, b);
            const d = new zv(b);
            return xp(a, e => Cv(e, {
                nf: c,
                lf: d
            }))
        },
        Fv = (a, b) => {
            a = Dv(a, b);
            const c = new zv(b);
            return xp(a, d => {
                if (d.l) {
                    var e = d.i;
                    var f = d.j;
                    d = d.g.querySelectorAll(d.l);
                    var h = [];
                    for (var k of d) h.push(new pv(e, k, f));
                    e = h
                } else e = [];
                d = e.slice(0);
                if (d.length) {
                    e = [];
                    f = d[0];
                    for (h = 1; h < d.length; h++) {
                        const n = d[h];
                        k = f;
                        b: {
                            if (k.element.hasAttributes())
                                for (m of k.element.attributes)
                                    if (m.name.toLowerCase() === "style" && m.value.toLowerCase().includes("background-image")) {
                                        var l = !0;
                                        break b
                                    }
                            l =
                            k.element.tagName;l = l === "IMG" || l === "SVG"
                        }(l || k.element.textContent.length > 1) && !xv(c, f.element) && zu(n.da(), f.element, n.element) && e.push(f);
                        f = n
                    }
                    var m = e
                } else m = [];
                return m
            })
        },
        Dv = (a, b) => {
            const c = new mo;
            a.forEach(d => {
                var e = Ou(z(d, Rp, 1));
                if (e) {
                    var f = e.toString();
                    io(c, f) || c.set(f, {
                        articleStructure: d,
                        Eh: e,
                        Vc: null,
                        fg: !1,
                        Kf: null
                    });
                    e = c.get(f);
                    (f = (f = z(d, Rp, 2)) ? F(f, 7) : null) ? e.Vc = e.Vc ? e.Vc + "," + f : f: e.fg = !0;
                    d = z(d, Rp, 4);
                    e.Kf = d ? F(d, 7) : null
                }
            });
            return lo(c).map(d => {
                const e = Gu(d.Eh, b.document);
                return e.length ? new wv(e[0],
                    d, b) : null
            }).filter(d => d != null)
        };
    var Gv = a => a ? .google_ad_slot ? Ep(new Sp(1, {
            zh: a.google_ad_slot
        })) : Gp("Missing dimension when creating placement id"),
        Iv = a => {
            switch (a.Lb) {
                case 0:
                case 1:
                    var b = a.l;
                    b == null ? a = null : (a = b.ja(), a == null ? a = null : (b = ki(b, 2), a = b == null ? null : new Sp(0, {
                        Lf: [a],
                        Ug: b
                    })));
                    return a != null ? Ep(a) : Gp("Missing dimension when creating placement id");
                case 2:
                    return a = Hv(a), a != null ? Ep(a) : Gp("Missing dimension when creating placement id");
                default:
                    return Gp("Invalid type: " + a.Lb)
            }
        };
    const Hv = a => {
        if (a == null || a.C == null) return null;
        const b = z(a.C, Rp, 1),
            c = z(a.C, Rp, 2);
        if (b == null || c == null) return null;
        const d = a.ia;
        if (d == null) return null;
        a = a.g();
        return a == null ? null : new Sp(0, {
            Lf: [b, c],
            Ui: d,
            Ug: Uu[a]
        })
    };

    function Jv(a) {
        const b = hv(a.ha);
        return (b ? Gv(b) : Iv(a.ha)).map(c => Vp(c))
    }

    function Kv(a) {
        a.g = a.g || Jv(a);
        return a.g
    }

    function Lv(a, b) {
        if (a.ha.A) throw Error("AMA:AP:AP");
        gu(b, a.ja(), a.ha.g());
        jv(a.ha, b)
    }
    const Mv = class {
        constructor(a, b, c) {
            this.ha = a;
            this.i = b;
            this.la = c;
            this.g = null
        }
        ja() {
            return this.i
        }
        fill(a, b) {
            var c = this.ha;
            (a = c.B.i(a, b, this.i, c.j)) && Lv(this, a.nb);
            return a
        }
    };

    function Nv(a, b) {
        return Nu(() => {
            if (U(Rr)) {
                var c = [],
                    d = [];
                for (var e = 0; e < a.length; e++) {
                    var f = a[e],
                        h = fv(f);
                    if (h) {
                        if (!f.i && !f.A) {
                            a: {
                                var k = null;
                                try {
                                    var l = fv(f);
                                    if (l) {
                                        k = gv(f);
                                        gu(k, l, f.g());
                                        var m = k;
                                        break a
                                    }
                                    m = null;
                                    break a
                                } catch (t) {
                                    throw du(k), t;
                                }
                                m = void 0
                            }
                            f.i = m
                        }(k = f.i) && d.push({
                            xj: f,
                            anchorElement: h,
                            Fi: k
                        })
                    }
                }
                if (d.length > 0)
                    for (m = ao(b), l = bo(b), e = 0; e < d.length; e++) {
                        const {
                            xj: t,
                            anchorElement: w,
                            Fi: A
                        } = d[e];
                        f = Ov(A, l, m);
                        c.push(new Mv(t, w, f))
                    }
                m = c
            } else {
                m = [];
                l = [];
                try {
                    const t = [];
                    for (let w = 0; w < a.length; w++) {
                        var n = a[w],
                            p = fv(n);
                        p && t.push({
                            Og: n,
                            anchorElement: p
                        })
                    }
                    for (p = 0; p < t.length; p++) {
                        n = l;
                        h = n.push; {
                            var q = t[p];
                            const w = q.anchorElement,
                                A = q.Og,
                                D = gv(A);
                            try {
                                gu(D, w, A.g()), k = D
                            } catch (G) {
                                throw du(D), G;
                            }
                        }
                        h.call(n, k)
                    }
                    c = ao(b);
                    d = bo(b);
                    for (h = 0; h < l.length; h++) e = Ov(l[h], d, c), f = t[h], m.push(new Mv(f.Og, f.anchorElement, e))
                } finally {
                    for (c = 0; c < l.length; c++) du(l[c])
                }
            }
            return m
        }, b)
    }

    function Ov(a, b, c) {
        a = a.getBoundingClientRect();
        return new op(a.left + b, a.top + c, a.right - a.left)
    };
    const Pv = {
            1: "0.5vp",
            2: "300px"
        },
        Qv = {
            1: 700,
            2: 1200
        },
        Rv = {
            [1]: {
                fh: "3vp",
                pf: "1vp",
                eh: "0.3vp"
            },
            [2]: {
                fh: "900px",
                pf: "300px",
                eh: "90px"
            }
        };

    function Sv(a, b, c) {
        var d = Tv(a),
            e = Tn(a) || Qv[d],
            f = void 0;
        c && (f = (c = (c = Uv(di(c, iq, 2, y()), d)) ? z(c, gq, 7) : void 0) ? Vv(c, e) : void 0);
        c = f;
        f = Tv(a);
        a = Tn(a) || Qv[f];
        const h = Wv(Rv[f].pf, a);
        a = h === null ? Xv(f, a) : new Yv(h, h, Zv(h, 8), 8, .3, c);
        c = Wv(Rv[d].fh, e);
        f = Wv(Rv[d].pf, e);
        d = Wv(Rv[d].eh, e);
        e = a.j;
        c && d && f && b !== void 0 && (e = b <= .5 ? f + (1 - 2 * b) * (c - f) : d + (2 - 2 * b) * (f - d));
        return new Yv(e, e, Zv(e, a.i), a.i, a.l, a.g)
    }

    function $v(a, b) {
        const c = Ng(Ch(a, 4));
        a = Kh(a, 5);
        return c == null || a == null ? b : new Yv(a, 0, [], c, 1)
    }

    function aw(a, b) {
        const c = Tv(a);
        a = Tn(a) || Qv[c];
        if (!b) return Xv(c, a);
        if (b = Uv(di(b, iq, 2, y()), c))
            if (b = bw(b, a)) return b;
        return Xv(c, a)
    }

    function cw(a) {
        const b = Tv(a);
        a = Tn(a) || Qv[b];
        return Xv(b, a)
    }

    function dw(a, b) {
        let c = {
            Gc: a.j,
            tb: a.C
        };
        for (let d of a.A) d.adCount <= b && (c = d.Lc);
        return c
    }

    function ew(a, b, c) {
        var d = ii(b, 2);
        b = z(b, iq, 1);
        var e = Tv(c);
        var f = Tn(c) || Qv[e];
        c = Wv(b ? .C(), f) ? ? a.j;
        e = Wv(b ? .A(), f) ? ? a.C;
        d = d ? [] : fw(b ? .g(), f) ? ? a.A;
        const h = b ? .j() ? ? a.i,
            k = b ? .l() ? ? a.l;
        a = (b ? .B() ? Vv(z(b, gq, 7), f) : null) ? ? a.g;
        return new Yv(c, e, d, h, k, a)
    }

    function gw(a, b) {
        var c = Tv(b);
        const d = new jq,
            e = new iq;
        let f = !1;
        var h = V(Wr);
        h >= 0 && (ui(e, 4, h), f = !0);
        h = null;
        c === 1 ? (c = V($r), c >= 0 && (h = c + "vp")) : (c = V(Zr), c >= 0 && (h = c + "px"));
        c = V(Yr);
        c >= 0 && (h = c + "px");
        h !== null && (Ei(e, 2, h), f = !0);
        c = U(bs) ? "0px" : null;
        c !== null && (Ei(e, 5, c), f = !0);
        if (U(cs)) ti(d, 2, !0), f = !0;
        else if (c !== null || h !== null) {
            const n = [];
            for (const p of a.A) {
                var k = n,
                    l = k.push;
                var m = new hq;
                m = ui(m, 1, p.adCount);
                m = Ei(m, 3, c ? ? p.Lc.tb + "px");
                m = Ei(m, 2, h ? ? p.Lc.Gc + "px");
                l.call(k, m)
            }
            ei(e, 3, n)
        }
        return f ? (C(d, 1, e), ew(a, d, b)) : a
    }
    class Yv {
        constructor(a, b, c, d, e, f) {
            this.j = a;
            this.C = b;
            this.A = c.sort((h, k) => h.adCount - k.adCount);
            this.i = d;
            this.l = e;
            this.g = f
        }
    }

    function Uv(a, b) {
        for (let c of a)
            if (ki(c, 1) == b) return c;
        return null
    }

    function fw(a, b) {
        if (a === void 0) return null;
        const c = [];
        for (let d of a) {
            a = ji(d, 1);
            const e = Wv(F(d, 2), b),
                f = Wv(F(d, 3), b);
            if (typeof a !== "number" || e === null) return null;
            c.push({
                adCount: a,
                Lc: {
                    Gc: e,
                    tb: f
                }
            })
        }
        return c
    }

    function bw(a, b) {
        const c = Wv(F(a, 2), b),
            d = Wv(F(a, 5), b);
        if (c === null) return null;
        const e = ji(a, 4);
        if (e == null) return null;
        var f = a.g();
        f = fw(f, b);
        if (f === null) return null;
        const h = z(a, gq, 7);
        b = h ? Vv(h, b) : void 0;
        return new Yv(c, d, f, e, Kh(a, 6), b)
    }

    function Xv(a, b) {
        a = Wv(Pv[a], b);
        return U(Ur) ? new Yv(a === null ? Infinity : a, null, [], 8, .3) : new Yv(a === null ? Infinity : a, null, [], 3, null)
    }

    function Wv(a, b) {
        if (!a) return null;
        const c = parseFloat(a);
        return isNaN(c) ? null : a.endsWith("px") ? c : a.endsWith("vp") ? c * b : null
    }

    function Tv(a) {
        a = Sn(a) >= 900;
        return se() && !a ? 1 : 2
    }

    function Zv(a, b) {
        if (b < 4) return [];
        const c = Math.ceil(b / 2);
        return [{
            adCount: c,
            Lc: {
                Gc: a * 2,
                tb: a * 2
            }
        }, {
            adCount: c + Math.ceil((b - c) / 2),
            Lc: {
                Gc: a * 3,
                tb: a * 3
            }
        }]
    }

    function Vv(a, b) {
        const c = Wv(F(a, 2), b) || 0,
            d = ji(a, 3) || 1;
        a = Wv(F(a, 1), b) || 0;
        return {
            Cg: c,
            Ag: d,
            ec: a
        }
    };

    function hw(a, b, c) {
        return Ln({
            top: a.g.top - (c + 1),
            right: a.g.right + (c + 1),
            bottom: a.g.bottom + (c + 1),
            left: a.g.left - (c + 1)
        }, b.g)
    }

    function iw(a) {
        if (!a.length) return null;
        const b = Mn(a.map(c => c.g));
        a = a.reduce((c, d) => c + d.i, 0);
        return new jw(b, a)
    }
    class jw {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
    };
    let kw, W;
    const lw = new Bk(r);
    ((a, b = !0) => {
        kw = a || new En;
        typeof r.google_srt !== "number" && (r.google_srt = Math.random());
        Dn(kw, r.google_srt);
        W = new Lk(kw, b, lw);
        W.l(!0);
        r.document.readyState == "complete" ? r.google_measure_js_timing || zk(lw) : lw.g && Hb(r, "load", () => {
            r.google_measure_js_timing || zk(lw)
        })
    })();
    var mw = (a, b) => W.vb(a, b),
        nw = (a, b) => W.Da(a, b),
        ey = (a, b, c) => {
            const d = P(Bn).g();
            !b.eid && d.length && (b.eid = d.toString());
            Kk(kw, a, b, !0, c)
        },
        fy = (a, b, c) => {
            W.na(a, b, c)
        };

    function gy(a = null) {
        ({
            googletag: a
        } = a ? ? window);
        return a ? .apiReady ? a : void 0
    };
    var ly = (a, b) => {
        var c = fb(b.document.querySelectorAll(".google-auto-placed"));
        const d = fb(b.document.querySelectorAll("ins.adsbygoogle[data-anchor-status]")),
            e = hy(b),
            f = iy(b),
            h = jy(b),
            k = fb(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
            l = fb(b.document.querySelectorAll("div.googlepublisherpluginad")),
            m = fb(b.document.querySelectorAll("html > ins.adsbygoogle"));
        let n = [].concat(fb(b.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), fb(b.document.querySelectorAll("body ins.adsbygoogle")));
        b = [];
        for (const [p, q] of [
                [a.pd, c],
                [a.Kb, d],
                [a.Si, e],
                [a.Ne, f],
                [a.Oe, h],
                [a.Qi, k],
                [a.Ri, l],
                [a.Ti, m]
            ]) p === !1 ? b = b.concat(q) : n = n.concat(q);
        a = ky(n);
        c = ky(b);
        a = a.slice(0);
        for (const p of c)
            for (c = 0; c < a.length; c++)(p.contains(a[c]) || a[c].contains(p)) && a.splice(c, 1);
        return a
    };
    const my = a => {
            const b = gy(a);
            return b ? Wa(Xa(b.pubads().getSlots(), c => a.document.getElementById(c.getSlotElementId())), c => c != null) : null
        },
        hy = a => fb(a.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]")),
        iy = a => (my(a) || fb(a.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(fb(a.document.querySelectorAll("iframe[id^=google_ads_iframe]"))),
        jy = a => fb(a.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"));
    var ky = a => {
        const b = [];
        for (const c of a) {
            a = !0;
            for (let d = 0; d < b.length; d++) {
                const e = b[d];
                if (e.contains(c)) {
                    a = !1;
                    break
                }
                if (c.contains(e)) {
                    a = !1;
                    b[d] = c;
                    break
                }
            }
            a && b.push(c)
        }
        return b
    };
    var ny = W.Da(453, ly),
        oy;
    oy = W.Da(454, (a, b) => {
        const c = fb(b.document.querySelectorAll(".google-auto-placed")),
            d = fb(b.document.querySelectorAll("ins.adsbygoogle[data-anchor-status]")),
            e = hy(b),
            f = iy(b),
            h = jy(b),
            k = fb(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
            l = fb(b.document.querySelectorAll("div.googlepublisherpluginad"));
        b = fb(b.document.querySelectorAll("html > ins.adsbygoogle"));
        return ky([].concat(a.pd === !0 ? c : [], a.Kb === !0 ? d : [], a.Si === !0 ? e : [], a.Ne === !0 ? f : [], a.Oe === !0 ? h : [], a.Qi === !0 ? k : [], a.Ri === !0 ? l : [], a.Ti ===
            !0 ? b : []))
    });

    function py(a, b, c) {
        const d = qy(a);
        b = ry(d, b, c);
        return new sy(a, d, b)
    }

    function ty(a) {
        return (a.bottom - a.top) * (a.right - a.left) > 1
    }

    function uy(a) {
        return a.g.map(b => b.box)
    }

    function vy(a) {
        return a.g.reduce((b, c) => b + c.box.bottom - c.box.top, 0)
    }
    class sy {
        constructor(a, b, c) {
            this.j = a;
            this.g = b.slice(0);
            this.l = c.slice(0);
            this.i = null
        }
    }

    function qy(a) {
        const b = ny({
                Kb: !1
            }, a),
            c = bo(a),
            d = ao(a);
        return b.map(e => {
            const f = e.getBoundingClientRect();
            return (e = !!e.className && e.className.indexOf("google-auto-placed") != -1) || ty(f) ? {
                box: {
                    top: f.top + d,
                    right: f.right + c,
                    bottom: f.bottom + d,
                    left: f.left + c
                },
                fo: e ? 1 : 0
            } : null
        }).filter(zb(e => e === null))
    }

    function ry(a, b, c) {
        return b != void 0 && a.length <= (c != void 0 ? c : 8) ? wy(a, b) : Xa(a, d => new jw(d.box, 1))
    }

    function wy(a, b) {
        a = Xa(a, d => new jw(d.box, 1));
        const c = [];
        for (; a.length > 0;) {
            let d = a.pop(),
                e = !0;
            for (; e;) {
                e = !1;
                for (let f = 0; f < a.length; f++)
                    if (hw(d, a[f], b)) {
                        d = iw([d, a[f]]);
                        Array.prototype.splice.call(a, f, 1);
                        e = !0;
                        break
                    }
            }
            c.push(d)
        }
        return c
    };

    function xy(a, b, c) {
        const d = np(c, b);
        return !Za(a, e => Ln(e, d))
    }

    function yy(a, b, c, d, e) {
        e = e.la;
        const f = np(e, b),
            h = np(e, c),
            k = np(e, d);
        return !Za(a, l => Ln(l, h) || Ln(l, f) && !Ln(l, k))
    }

    function zy(a, b, c, d) {
        const e = uy(a);
        if (xy(e, b, d.la)) return !0;
        if (!yy(e, b, c.Cg, c.ec, d)) return !1;
        const f = new jw(np(d.la, 0), 1);
        a = Wa(a.l, h => hw(h, f, c.ec));
        b = Ya(a, (h, k) => h + k.i, 1);
        return a.length === 0 || b > c.Ag ? !1 : !0
    };
    var Ay = (a, b) => {
        const c = [];
        let d = a;
        for (a = () => {
                c.push({
                    anchor: d.anchor,
                    position: d.position
                });
                return d.anchor == b.anchor && d.position == b.position
            }; d;) {
            switch (d.position) {
                case 1:
                    if (a()) return c;
                    d.position = 2;
                case 2:
                    if (a()) return c;
                    if (d.anchor.firstChild) {
                        d = {
                            anchor: d.anchor.firstChild,
                            position: 1
                        };
                        continue
                    } else d.position = 3;
                case 3:
                    if (a()) return c;
                    d.position = 4;
                case 4:
                    if (a()) return c
            }
            for (; d && !d.anchor.nextSibling && d.anchor.parentNode != d.anchor.ownerDocument.body;) {
                d = {
                    anchor: d.anchor.parentNode,
                    position: 3
                };
                if (a()) return c;
                d.position = 4;
                if (a()) return c
            }
            d && d.anchor.nextSibling ? d = {
                anchor: d.anchor.nextSibling,
                position: 1
            } : d = null
        }
        return c
    };

    function By(a, b) {
        const c = new Np,
            d = new no;
        b.forEach(e => {
            if (pi(e, qq, 1, tq)) {
                e = pi(e, qq, 1, tq);
                if (z(e, pq, 1) && z(e, pq, 1).ja() && z(e, pq, 2) && z(e, pq, 2).ja()) {
                    const h = Cy(a, z(e, pq, 1).ja()),
                        k = Cy(a, z(e, pq, 2).ja());
                    if (h && k)
                        for (var f of Ay({
                                anchor: h,
                                position: ki(z(e, pq, 1), 2)
                            }, {
                                anchor: k,
                                position: ki(z(e, pq, 2), 2)
                            })) c.set(Ea(f.anchor), f.position)
                }
                z(e, pq, 3) && z(e, pq, 3).ja() && (f = Cy(a, z(e, pq, 3).ja())) && c.set(Ea(f), ki(z(e, pq, 3), 2))
            } else pi(e, rq, 2, tq) ? Dy(a, pi(e, rq, 2, tq), c) : pi(e, oq, 3, tq) && Ey(a, pi(e, oq, 3, tq), d)
        });
        return new Fy(c,
            d)
    }
    class Fy {
        constructor(a, b) {
            this.i = a;
            this.g = b
        }
    }
    const Dy = (a, b, c) => {
            z(b, pq, 2) ? (b = z(b, pq, 2), (a = Cy(a, b.ja())) && c.set(Ea(a), ki(b, 2))) : z(b, Rp, 1) && (a = Gy(a, z(b, Rp, 1))) && a.forEach(d => {
                d = Ea(d);
                c.set(d, 1);
                c.set(d, 4);
                c.set(d, 2);
                c.set(d, 3)
            })
        },
        Ey = (a, b, c) => {
            z(b, Rp, 1) && (a = Gy(a, z(b, Rp, 1))) && a.forEach(d => {
                c.add(Ea(d))
            })
        },
        Cy = (a, b) => (a = Gy(a, b)) && a.length > 0 ? a[0] : null,
        Gy = (a, b) => (b = Ou(b)) ? Gu(b, a) : null;
    var Hy = class {
        constructor() {
            this.g = ef();
            this.i = 0
        }
    };

    function Iy(a, b, c) {
        switch (c) {
            case 2:
            case 3:
                break;
            case 1:
            case 4:
                b = b.parentElement;
                break;
            default:
                throw Error("Unknown RelativePosition: " + c);
        }
        for (c = []; b;) {
            if (Jy(b)) return !0;
            if (a.g.has(b)) break;
            c.push(b);
            b = b.parentElement
        }
        c.forEach(d => a.g.add(d));
        return !1
    }

    function Ky(a) {
        a = Ly(a);
        return a.has("all") || a.has("after")
    }

    function My(a) {
        a = Ly(a);
        return a.has("all") || a.has("before")
    }

    function Ly(a) {
        return (a = a && a.getAttribute("data-no-auto-ads")) ? new Set(a.split("|")) : new Set
    }

    function Jy(a) {
        const b = Ly(a);
        return a && (a.tagName === "AUTO-ADS-EXCLUSION-AREA" || b.has("inside") || b.has("all"))
    }
    var Ny = class {
        constructor() {
            this.g = new Set;
            this.i = new Hy
        }
    };

    function Oy(a) {
        return function(b) {
            return Nv(b, a)
        }
    }

    function Py(a) {
        const b = Tn(a);
        return b ? Ka(Qy, b + ao(a)) : wb
    }

    function Ry(a, b, c) {
        if (a < 0) throw Error("ama::ead:nd");
        if (a === Infinity) return wb;
        const d = uy(c || py(b));
        return e => xy(d, a, e.la)
    }

    function Sy(a, b, c, d) {
        if (a < 0 || b.Cg < 0 || b.Ag < 0 || b.ec < 0) throw Error("ama::ead:nd");
        return a === Infinity ? wb : e => zy(d || py(c, b.ec), a, b, e)
    }

    function Ty(a) {
        if (!a.length) return wb;
        const b = new Dp(a);
        return c => b.contains(c.Lb)
    }

    function Uy(a) {
        return function(b) {
            for (let c of b.zc)
                if (a.indexOf(c) > -1) return !1;
            return !0
        }
    }

    function Vy(a) {
        return a.length ? function(b) {
            const c = b.zc;
            return a.some(d => c.indexOf(d) > -1)
        } : xb
    }

    function Wy(a, b) {
        if (a <= 0) return xb;
        const c = Xn(b).scrollHeight - a;
        return function(d) {
            return d.la.g <= c
        }
    }

    function Xy(a) {
        const b = {};
        a && a.forEach(c => {
            b[c] = !0
        });
        return function(c) {
            return !b[ki(c.Td, 2) || 0]
        }
    }

    function Yy(a) {
        return a.length ? b => a.includes(ki(b.Td, 1) || 0) : xb
    }

    function Zy(a, b) {
        const c = By(a, b);
        return function(d) {
            var e = d.ja();
            d = Uu[d.ha.g()];
            var f = c.i,
                h = Ea(e);
            f = f.g.get(h);
            if (!(f = f ? f.contains(d) : !1)) a: {
                if (c.g.contains(Ea(e))) switch (d) {
                    case 2:
                    case 3:
                        f = !0;
                        break a;
                    default:
                        f = !1;
                        break a
                }
                for (e = e.parentElement; e;) {
                    if (c.g.contains(Ea(e))) {
                        f = !0;
                        break a
                    }
                    e = e.parentElement
                }
                f = !1
            }
            return !f
        }
    }

    function $y() {
        const a = new Ny;
        return function(b) {
            var c = b.ja(),
                d = Uu[b.ha.g()];
            a: switch (d) {
                case 1:
                    b = Ky(c.previousElementSibling) || My(c);
                    break a;
                case 4:
                    b = Ky(c) || My(c.nextElementSibling);
                    break a;
                case 2:
                    b = My(c.firstElementChild);
                    break a;
                case 3:
                    b = Ky(c.lastElementChild);
                    break a;
                default:
                    throw Error("Unknown RelativePosition: " + d);
            }
            c = Iy(a, c, d);
            d = a.i;
            ey("ama_exclusion_zone", {
                typ: b ? c ? "siuex" : "siex" : c ? "suex" : "noex",
                cor: d.g,
                num: d.i++,
                dvc: Ue()
            }, .1);
            return !(b || c)
        }
    }
    const Qy = (a, b) => b.la.g >= a,
        az = (a, b, c) => {
            c = c.la.i;
            return a <= c && c <= b
        };

    function bz(a, b, c, d, e) {
        var f = cz(dz(a, b), a);
        if (f.length === 0) {
            var h = !!z(b, Hq, 6) ? .g() ? .length;
            f = z(b, Cq, 28) ? .l() ? .j() && h ? cz(ez(a, b), a) : f
        }
        if (f.length === 0) return mr(d, "pfno"), [];
        b = f;
        a = e.gd ? fz(a, b, c) : {
            kb: b,
            jd: null
        };
        const {
            kb: k,
            jd: l
        } = a;
        f = k;
        return f.length === 0 && l ? (mr(d, l), []) : [f[e.Sj ? 0 : e.Rj ? Math.floor(f.length / 4) : Math.floor(f.length / 2)]]
    }

    function fz(a, b, c) {
        c = c ? di(c, sq, 5, y(kg)) : [];
        const d = Zy(a.document, c),
            e = $y();
        b = b.filter(f => d(f));
        if (b.length === 0) return {
            kb: [],
            jd: "pfaz"
        };
        b = b.filter(f => e(f));
        return b.length === 0 ? {
            kb: [],
            jd: "pfet"
        } : {
            kb: b,
            jd: null
        }
    }

    function gz(a, b) {
        return a.la.g - b.la.g
    }

    function dz(a, b) {
        const c = z(b, Hq, 6);
        if (!c) return [];
        b = z(b, Cq, 28) ? .l();
        return (b ? .g() ? Fv(c.g(kg), a) : Ev(c.g(kg), a, !!b ? .l())).map(d => d.j())
    }

    function ez(a, b) {
        b = di(b, Lq, 1, y(kg)) || [];
        return bv(b, a, {}).filter(c => !c.zc.includes(6))
    }

    function cz(a, b) {
        a = Nv(a, b);
        const c = Py(b);
        a = a.filter(d => c(d));
        return a.sort(gz)
    };
    var hz = {},
        iz = {},
        jz = {},
        kz = {};

    function lz() {
        throw Error("Do not instantiate directly");
    }
    lz.prototype.Uf = null;
    lz.prototype.Ja = function() {
        return this.content
    };
    lz.prototype.toString = function() {
        return this.content
    };

    function mz(a) {
        if (a.Vf !== hz) throw Error("Sanitized content was not of kind HTML.");
        return Pc(a.toString())
    }

    function nz() {
        lz.call(this)
    }
    Ma(nz, lz);
    nz.prototype.Vf = hz;

    function oz(a) {
        if (a != null) switch (a.Uf) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
        return null
    }

    function pz(a) {
        return qz(a, hz) ? a : a instanceof Oc ? rz(Nc(a).toString()) : rz(String(String(a)).replace(sz, tz), oz(a))
    }
    var rz = function(a) {
        function b(c) {
            this.content = c
        }
        b.prototype = a.prototype;
        return function(c, d) {
            c = new b(String(c));
            d !== void 0 && (c.Uf = d);
            return c
        }
    }(nz);

    function uz(a) {
        return vz(String(a), () => "").replace(wz, "&lt;")
    }
    const xz = RegExp.prototype.hasOwnProperty("sticky"),
        yz = new RegExp((xz ? "" : "^") + "(?:!|/?([a-zA-Z][a-zA-Z0-9:-]*))", xz ? "gy" : "g");

    function vz(a, b) {
        const c = [],
            d = a.length;
        let e = 0,
            f = [],
            h, k, l = 0;
        for (; l < d;) {
            switch (e) {
                case 0:
                    var m = a.indexOf("<", l);
                    if (m < 0) {
                        if (c.length === 0) return a;
                        c.push(a.substring(l));
                        l = d
                    } else c.push(a.substring(l, m)), k = m, l = m + 1, xz ? (yz.lastIndex = l, m = yz.exec(a)) : (yz.lastIndex = 0, m = yz.exec(a.substring(l))), m ? (f = ["<", m[0]], h = m[1], e = 1, l += m[0].length) : c.push("<");
                    break;
                case 1:
                    m = a.charAt(l++);
                    switch (m) {
                        case "'":
                        case '"':
                            let n = a.indexOf(m, l);
                            n < 0 ? l = d : (f.push(m, a.substring(l, n + 1)), l = n + 1);
                            break;
                        case ">":
                            f.push(m);
                            c.push(b(f.join(""),
                                h));
                            e = 0;
                            f = [];
                            k = h = null;
                            break;
                        default:
                            f.push(m)
                    }
                    break;
                default:
                    throw Error();
            }
            e === 1 && l >= d && (l = k + 1, c.push("<"), e = 0, f = [], k = h = null)
        }
        return c.join("")
    }

    function zz(a) {
        return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>")
    }

    function Az(a) {
        return qz(a, hz) ? String(uz(a.Ja())).replace(Bz, tz) : String(a).replace(sz, tz)
    }

    function Cz(a) {
        return qz(a, hz) ? String(uz(a.Ja())).replace(Dz, tz) : String(a).replace(Ez, tz)
    }
    const Fz = /['()]/g;

    function Gz(a) {
        return "%" + a.charCodeAt(0).toString(16)
    }

    function X(a) {
        qz(a, kz) ? a = zz(a.Ja()) : a == null ? a = "" : a instanceof Ac ? a = zz(zc(a)) : a instanceof Lc ? a = zz(Kc(a)) : (a = String(a), a = Hz.test(a) ? a : "zSoyz");
        return a
    }

    function qz(a, b) {
        return a != null && a.Vf === b
    }
    const Iz = {
        "\x00": "&#0;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\v": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "-": "&#45;",
        "/": "&#47;",
        "<": "&lt;",
        "=": "&#61;",
        ">": "&gt;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    };

    function tz(a) {
        return Iz[a]
    }
    const Jz = {
        "\x00": "\\x00",
        "\b": "\\x08",
        "\t": "\\t",
        "\n": "\\n",
        "\v": "\\x0b",
        "\f": "\\f",
        "\r": "\\r",
        '"': "\\x22",
        $: "\\x24",
        "&": "\\x26",
        "'": "\\x27",
        "(": "\\x28",
        ")": "\\x29",
        "*": "\\x2a",
        "+": "\\x2b",
        ",": "\\x2c",
        "-": "\\x2d",
        ".": "\\x2e",
        "/": "\\/",
        ":": "\\x3a",
        "<": "\\x3c",
        "=": "\\x3d",
        ">": "\\x3e",
        "?": "\\x3f",
        "[": "\\x5b",
        "\\": "\\\\",
        "]": "\\x5d",
        "^": "\\x5e",
        "{": "\\x7b",
        "|": "\\x7c",
        "}": "\\x7d",
        "\u0085": "\\x85",
        "\u2028": "\\u2028",
        "\u2029": "\\u2029"
    };

    function Kz(a) {
        return Jz[a]
    }
    const Lz = {
        "\x00": "%00",
        "\u0001": "%01",
        "\u0002": "%02",
        "\u0003": "%03",
        "\u0004": "%04",
        "\u0005": "%05",
        "\u0006": "%06",
        "\u0007": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\v": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\u000e": "%0E",
        "\u000f": "%0F",
        "\u0010": "%10",
        "\u0011": "%11",
        "\u0012": "%12",
        "\u0013": "%13",
        "\u0014": "%14",
        "\u0015": "%15",
        "\u0016": "%16",
        "\u0017": "%17",
        "\u0018": "%18",
        "\u0019": "%19",
        "\u001a": "%1A",
        "\u001b": "%1B",
        "\u001c": "%1C",
        "\u001d": "%1D",
        "\u001e": "%1E",
        "\u001f": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "<": "%3C",
        ">": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\u007f": "%7F",
        "\u0085": "%C2%85",
        "\u00a0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uff01": "%EF%BC%81",
        "\uff03": "%EF%BC%83",
        "\uff04": "%EF%BC%84",
        "\uff06": "%EF%BC%86",
        "\uff07": "%EF%BC%87",
        "\uff08": "%EF%BC%88",
        "\uff09": "%EF%BC%89",
        "\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C",
        "\uff0f": "%EF%BC%8F",
        "\uff1a": "%EF%BC%9A",
        "\uff1b": "%EF%BC%9B",
        "\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F",
        "\uff20": "%EF%BC%A0",
        "\uff3b": "%EF%BC%BB",
        "\uff3d": "%EF%BC%BD"
    };

    function Mz(a) {
        return Lz[a]
    }
    const sz = /[\x00\x22\x26\x27\x3c\x3e]/g,
        Bz = /[\x00\x22\x27\x3c\x3e]/g,
        Ez = /[\x00\x09-\x0d \x22\x26\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g,
        Dz = /[\x00\x09-\x0d \x22\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g,
        Nz = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\x5b-\x5d\x7b\x7d\x85\u2028\u2029]/g,
        Oz = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        Hz = /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:calc|cubic-bezier|drop-shadow|hsl|hsla|hue-rotate|invert|linear-gradient|max|min|rgb|rgba|rotate|rotateZ|translate|translate3d|translateX|translateY|var)\((?:(?:(?:(?:\/(?![\/\*]))|(?:\*(?!\/)))?[-\u0020\t,+.!#%_0-9a-zA-Z]+)*|(?:calc|cubic-bezier|drop-shadow|hsl|hsla|hue-rotate|invert|linear-gradient|max|min|rgb|rgba|rotate|rotateZ|translate|translate3d|translateX|translateY|var)\((?:(?:(?:\/(?![\/\*]))|(?:\*(?!\/)))?[-\u0020\t,+.!#%_0-9a-zA-Z]+)*\))+\)|[-+]?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:e-?[0-9]+)?(?:[a-z]{1,4}|%)?|(?:(?:\/(?![\/\*]))|(?:\*(?!\/)))|!important)(?:\s*[,\u0020]\s*|$))*$/i,
        Pz =
        /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^ftp:|^data:image\/[a-z0-9+-]+;base64,[a-z0-9+\/]+=*$|^blob:/i,
        wz = /</g;
    /* 
     
     
     Copyright Mathias Bynens <http://mathiasbynens.be/> 
     
     Permission is hereby granted, free of charge, to any person obtaining 
     a copy of this software and associated documentation files (the 
     "Software"), to deal in the Software without restriction, including 
     without limitation the rights to use, copy, modify, merge, publish, 
     distribute, sublicense, and/or sell copies of the Software, and to 
     permit persons to whom the Software is furnished to do so, subject to 
     the following conditions: 
     
     The above copyright notice and this permission notice shall be 
     included in all copies or substantial portions of the Software. 
     
     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
     EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
     MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
     NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE 
     LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION 
     OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION 
     WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 
    */
    const Qz = Math.floor;
    var Rz = /^xn--/,
        Sz = /[\x2E\u3002\uFF0E\uFF61]/g;
    const Tz = {
        Tm: "Overflow: input needs wider integers to process",
        Pm: "Illegal input >= 0x80 (not a basic code point)",
        zm: "Invalid input"
    };

    function Uz(a) {
        throw RangeError(Tz[a]);
    }

    function Vz(a, b) {
        const c = a.split("@");
        let d = "";
        c.length > 1 && (d = c[0] + "@", a = c[1]);
        a = a.replace(Sz, ".");
        a = a.split(".").map(b).join(".");
        return d + a
    }

    function Wz(a) {
        return Vz(a, b => {
            if (Rz.test(b) && b.length > 4) {
                b = b.slice(4).toLowerCase();
                const k = [],
                    l = b.length;
                let m = 0,
                    n = 128;
                var c = 72,
                    d = b.lastIndexOf("-");
                d < 0 && (d = 0);
                for (var e = 0; e < d; ++e) b.charCodeAt(e) >= 128 && Uz("Illegal input >= 0x80 (not a basic code point)"), k.push(b.charCodeAt(e));
                for (d = d > 0 ? d + 1 : 0; d < l;) {
                    e = m;
                    for (let p = 1, q = 36;; q += 36) {
                        d >= l && Uz("Invalid input");
                        var f = b.charCodeAt(d++);
                        f = f - 48 < 10 ? f - 22 : f - 65 < 26 ? f - 65 : f - 97 < 26 ? f - 97 : 36;
                        (f >= 36 || f > Qz((2147483647 - m) / p)) && Uz("Overflow: input needs wider integers to process");
                        m += f * p;
                        var h = q <= c ? 1 : q >= c + 26 ? 26 : q - c;
                        if (f < h) break;
                        f = 36 - h;
                        p > Qz(2147483647 / f) && Uz("Overflow: input needs wider integers to process");
                        p *= f
                    }
                    f = k.length + 1;
                    c = m - e;
                    h = 0;
                    c = e == 0 ? Qz(c / 700) : c >> 1;
                    for (c += Qz(c / f); c > 455; h += 36) c = Qz(c / 35);
                    c = Qz(h + 36 * c / (c + 38));
                    Qz(m / f) > 2147483647 - n && Uz("Overflow: input needs wider integers to process");
                    n += Qz(m / f);
                    m %= f;
                    k.splice(m++, 0, n)
                }
                b = String.fromCodePoint.apply(null, k)
            }
            return b
        })
    };
    const Xz = new rb(tb, "558153351");

    function Yz(a, b, c) {
        var d = a.Na.contentWindow;
        const e = !a.A && typeof a.g === "number";
        a.C ? (b = {
            action: "search",
            searchTerm: b,
            rsToken: c
        }, e && (b.experimentId = a.g), a.i.length > 0 && (b.adfiliateWp = a.i), d.postMessage(b, "https://www.gstatic.com")) : (d = d.google.search.cse.element.getElement(a.B), c = {
            rsToken: c,
            hostName: a.host
        }, e && (c.afsExperimentId = a.g), a.i.length > 0 && (c.adfiliateWp = a.i), d.execute(b, void 0, c))
    }
    var Zz = class {
        constructor(a, b, c, d, e, f, h, k, l, m, n, p = !1, q = !1, t = !1, w = "") {
            this.Na = a;
            this.l = b;
            this.B = c;
            this.j = d;
            this.M = e;
            this.host = f.host;
            this.origin = f.origin;
            this.language = h;
            this.G = k;
            this.g = l;
            this.H = p;
            this.C = m;
            this.F = n;
            this.I = q;
            this.A = t;
            this.i = w
        }
        J() {
            this.Na.setAttribute("id", "prose-iframe");
            this.Na.setAttribute("width", "100%");
            this.Na.setAttribute("height", "100%");
            var a = kd `box-sizing:border-box;border:unset;`;
            this.Na.style.cssText = zc(a);
            var b = uc("https://www.google.com/s2/favicons?sz=64&domain_url=" + encodeURIComponent(this.host)),
                c = Wz(this.host.startsWith("www.") ? this.host.slice(4) : this.host);
            a = this.B;
            var d = this.j,
                e = this.M;
            const f = this.host;
            c = this.G.replace("${website}", c);
            const h = this.I;
            var k = rz,
                l = "<style>.cse-favicon {display: block; float: left; height: 16px; position: absolute; left: 15px; width: 16px;}.cse-header {font-size: 16px; font-family: Arial; margin-left: 35px; margin-top: 6px; margin-bottom: unset; line-height: 16px;}.gsc-search-box {max-width: 520px !important;}.gsc-input {padding-right: 0 !important;}.gsc-input-box {border-radius: 16px 0 0 16px !important;}.gsc-search-button-v2 {border-left: 0 !important; border-radius: 0 16px 16px 0 !important; min-height: 30px !important; margin-left: 0 !important;}.gsc-cursor-page, .gsc-cursor-next-page, .gsc-cursor-numbered-page {color: #1a73e8 !important;}.gsc-cursor-chevron {fill: #1a73e8 !important;}.gsc-cursor-box {text-align: center !important;}.gsc-cursor-current-page {color: #000 !important;}.gcsc-find-more-on-google-root, .gcsc-find-more-on-google {display: none !important;}.prose-container {max-width: 652px;}#prose-empty-serp-container {display: flex; flex-direction: column; align-items: center; padding: 0; gap: 52px; position: relative; width: 248px; height: 259px; margin: auto; top: 100px;}#prose-empty-serp-icon-image {display: flex; flex-direction: row; justify-content: center; align-items: center; padding: 30px; gap: 10px; width: 124px; height: 124px; border-radius: 62px; flex: none; order: 1; flex-grow: 0; position: absolute; top: 0;}#prose-empty-serp-text-container {display: flex; flex-direction: column; align-items: center; padding: 0; gap: 19px; width: 248px; height: 83px; flex: none; order: 2; align-self: stretch; flex-grow: 0; position: absolute; top: 208px;}#prose-empty-serp-text-div {display: flex; flex-direction: column; align-items: flex-start; padding: 0; gap: 11px; width: 248px; height: 83px; flex: none; order: 0; align-self: stretch; flex-grow: 0;}#prose-empty-serp-supporting-text {width: 248px; height: 40px; font-family: 'Arial'; font-style: normal; font-weight: 400; font-size: 14px; line-height: 20px; text-align: center; letter-spacing: 0.2px; color: #202124; flex: none; order: 1; align-self: stretch; flex-grow: 0;}</style>" +
                (this.H ? '<script>window.__gcse={initializationCallback:function(){top.postMessage({action:"init",adChannel:"' + String(e).replace(Nz, Kz) + '"},top.location.origin);}};\x3c/script>' : "") + '<div class="prose-container"><img class="cse-favicon" src="';
            qz(b, iz) || qz(b, jz) ? b = String(b).replace(Oz, Mz) : b instanceof nc ? b = String(pc(b)).replace(Oz, Mz) : b instanceof cc ? b = String(fc(b).toString()).replace(Oz, Mz) : (b = String(b), b = Pz.test(b) ? b.replace(Oz, Mz) : "about:invalid#zSoyz");
            a = k(l + Az(b) + '" alt="' + Az(f) + ' icon"><p class="cse-header"><strong>' +
                pz(c) + '</strong></p><div class="gcse-search" data-gname="' + Az(a) + '" data-adclient="' + Az(d) + '" data-adchannel="' + Az(e) + '" data-as_sitesearch="' + Az(f) + '" data-personalizedAds="false"></div></div>' + (h ? "<div id=\"prose-empty-serp-container\"><img id='prose-empty-serp-icon-image' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI0IiBoZWlnaHQ9IjEyNCIgdmlld0JveD0iMCAwIDEyNCAxMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjQiIGhlaWdodD0iMTI0IiByeD0iNjIiIGZpbGw9IiNGMUYzRjQiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02OS4zNiA2NS4zODY3TDg0LjY0IDgwLjY2NjdMODAuNjY2NyA4NC42NEw2NS4zODY3IDY5LjM2QzYyLjUzMzMgNzEuNDEzMyA1OS4wOTMzIDcyLjY2NjcgNTUuMzMzMyA3Mi42NjY3QzQ1Ljc2IDcyLjY2NjcgMzggNjQuOTA2NyAzOCA1NS4zMzMzQzM4IDQ1Ljc2IDQ1Ljc2IDM4IDU1LjMzMzMgMzhDNjQuOTA2NyAzOCA3Mi42NjY3IDQ1Ljc2IDcyLjY2NjcgNTUuMzMzM0M3Mi42NjY3IDU5LjA5MzMgNzEuNDEzMyA2Mi41MzMzIDY5LjM2IDY1LjM4NjdaTTU1LjMzMzMgNDMuMzMzM0M0OC42OTMzIDQzLjMzMzMgNDMuMzMzMyA0OC42OTMzIDQzLjMzMzMgNTUuMzMzM0M0My4zMzMzIDYxLjk3MzMgNDguNjkzMyA2Ny4zMzMzIDU1LjMzMzMgNjcuMzMzM0M2MS45NzMzIDY3LjMzMzMgNjcuMzMzMyA2MS45NzMzIDY3LjMzMzMgNTUuMzMzM0M2Ny4zMzMzIDQ4LjY5MzMgNjEuOTczMyA0My4zMzMzIDU1LjMzMzMgNDMuMzMzM1oiIGZpbGw9IiM5QUEwQTYiLz4KPC9zdmc+Cg==' alt=''><div id='prose-empty-serp-text-container'><div id='prose-empty-serp-text-div'><div id='prose-empty-serp-supporting-text'>Search this website by entering a keyword.</div></div></div></div>" :
                    ""));
            a = mz(a);
            this.C ? (a = this.Na, d = ic(new rb(tb, "https://www.gstatic.com/prose/protected/%{version}/iframe.html?cx=%{cxId}&host=%{host}&hl=%{lang}&lrh=%{lrh}&client=%{client}&origin=%{origin}"), {
                version: this.F || Xz,
                cxId: this.l,
                host: this.host,
                lang: this.language,
                lrh: this.G,
                client: this.j,
                origin: this.origin
            }), a.src = fc(d).toString()) : (d = new Map([
                    ["cx", this.l],
                    ["language", this.language]
                ]), this.A && (e = Array.isArray(this.g) ? this.g : [this.g], e.length && d.set("fexp", e.join())), e = jd(d), d = {}, e = `<script src="${$c(fc(e).toString())}"`,
                d.async && (e += " async"), d.gi && (e += ` custom-element="${$c(d.gi)}"`), d.defer && (e += " defer"), d.id && (e += ` id="${$c(d.id)}"`), d.nonce && (e += ` nonce="${$c(d.nonce)}"`), d.type && (e += ` type="${$c(d.type)}"`), d.di && (e += ` crossorigin="${$c(d.di)}"`), d = Pc(e + ">\x3c/script>"), a = fd({
                    style: kd `margin:${0};`
                }, [a, d]), this.Na.srcdoc = Nc(a))
        }
    };

    function $z(a) {
        a.google_reactive_ads_global_state ? (a.google_reactive_ads_global_state.sideRailProcessedFixedElements == null && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new Set), a.google_reactive_ads_global_state.sideRailAvailableSpace == null && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new Map), a.google_reactive_ads_global_state.sideRailPlasParam == null && (a.google_reactive_ads_global_state.sideRailPlasParam = new Map)) : a.google_reactive_ads_global_state = new aA;
        return a.google_reactive_ads_global_state
    }
    class aA {
        constructor() {
            this.wasPlaTagProcessed = !1;
            this.wasReactiveAdConfigReceived = {};
            this.adCount = {};
            this.wasReactiveAdVisible = {};
            this.stateForType = {};
            this.reactiveTypeEnabledInAsfe = {};
            this.wasReactiveTagRequestSent = !1;
            this.reactiveTypeDisabledByPublisher = {};
            this.tagSpecificState = {};
            this.messageValidationEnabled = !1;
            this.floatingAdsStacking = new bA;
            this.sideRailProcessedFixedElements = new Set;
            this.sideRailAvailableSpace = new Map;
            this.sideRailPlasParam = new Map;
            this.i = [];
            this.g = null
        }
    }
    var bA = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    };

    function cA(a, b) {
        return new dA(a, b)
    }

    function eA(a) {
        const b = fA(a);
        Ua(a.g.maxZIndexListeners, c => c(b))
    }

    function fA(a) {
        a = Ge(a.g.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    }

    function gA(a, b) {
        cb(a.g.maxZIndexListeners, c => c === b)
    }
    class hA {
        constructor(a) {
            this.g = $z(a).floatingAdsStacking
        }
    }

    function iA(a) {
        if (a.g == null) {
            var b = a.i,
                c = a.j;
            const d = b.g.nextRestrictionId++;
            b.g.maxZIndexRestrictions[d] = c;
            eA(b);
            a.g = d
        }
    }

    function jA(a) {
        if (a.g != null) {
            var b = a.i;
            delete b.g.maxZIndexRestrictions[a.g];
            eA(b);
            a.g = null
        }
    }
    class dA {
        constructor(a, b) {
            this.i = a;
            this.j = b;
            this.g = null
        }
    };

    function kA(a) {
        a = a.activeElement;
        const b = a ? .shadowRoot;
        return b ? kA(b) || a : a
    }

    function lA(a, b) {
        return mA(b, a.document.body).flatMap(c => nA(c))
    }

    function mA(a, b) {
        var c = a;
        for (a = []; c && c !== b;) {
            a.push(c);
            let e;
            var d;
            (d = c.parentElement) || (c = c.getRootNode(), d = ((e = c.mode && c.host ? c : null) == null ? void 0 : e.host) || null);
            c = d
        }
        return c !== b ? [] : a
    }

    function nA(a) {
        const b = a.parentElement;
        return b ? Array.from(b.children).filter(c => c !== a) : []
    };

    function oA(a) {
        a.g !== null && (a.g.Ai.forEach(b => {
            b.inert = !1
        }), a.g.zj ? .focus(), a.g = null)
    }

    function pA(a, b) {
        oA(a);
        const c = kA(a.win.document);
        b = lA(a.win, b).filter(d => !d.inert);
        b.forEach(d => {
            d.inert = !0
        });
        a.g = {
            zj: c,
            Ai: b
        }
    }
    var qA = class {
        constructor(a) {
            this.win = a;
            this.g = null
        }
        Yd() {
            oA(this)
        }
    };

    function rA(a) {
        return new sA(a, new zo(a, a.document.body), new zo(a, a.document.documentElement), new zo(a, a.document.documentElement))
    }

    function tA(a) {
        yo(a.j, "scroll-behavior", "auto");
        const b = uA(a.win);
        b.activePageScrollPreventers.add(a);
        b.previousWindowScroll === null && (b.previousWindowScroll = a.win.scrollY);
        yo(a.g, "position", "fixed");
        yo(a.g, "top", `${-b.previousWindowScroll}px`);
        yo(a.g, "width", "100%");
        yo(a.g, "overflow-x", "hidden");
        yo(a.g, "overflow-y", "hidden");
        yo(a.i, "overflow-x", "hidden");
        yo(a.i, "overflow-y", "hidden")
    }

    function vA(a) {
        xo(a.g);
        xo(a.i);
        const b = uA(a.win);
        b.activePageScrollPreventers.delete(a);
        b.activePageScrollPreventers.size === 0 && (a.win.scrollTo(0, b.previousWindowScroll || 0), b.previousWindowScroll = null);
        xo(a.j)
    }
    var sA = class {
        constructor(a, b, c, d) {
            this.win = a;
            this.g = b;
            this.i = c;
            this.j = d
        }
    };

    function uA(a) {
        return a.googPageScrollPreventerInfo = a.googPageScrollPreventerInfo || {
            previousWindowScroll: null,
            activePageScrollPreventers: new Set
        }
    }

    function wA(a) {
        return a.googPageScrollPreventerInfo && a.googPageScrollPreventerInfo.activePageScrollPreventers.size > 0 ? !0 : !1
    };

    function xA(a, b) {
        return yA(`#${a}`, b)
    }

    function zA(a, b) {
        return yA(`.${a}`, b)
    }

    function yA(a, b) {
        b = b.querySelector(a);
        if (!b) throw Error(`Element (${a}) does not exist`);
        return b
    };

    function AA(a, b) {
        const c = a.document.createElement("div");
        v(c, pr(a));
        a = c.attachShadow({
            mode: "open"
        });
        b && c.classList.add(b);
        return {
            Za: c,
            shadowRoot: a
        }
    };

    function BA(a, b) {
        b = AA(a, b);
        a.document.body.appendChild(b.Za);
        return b
    }

    function CA(a, b) {
        const c = new R(b.P);
        Io(b, !0, () => void c.g(!0));
        Io(b, !1, () => {
            a.setTimeout(() => {
                b.P || c.g(!1)
            }, 700)
        });
        return Do(c)
    };

    function DA(a) {
        const b = a.ld;
        var c = a.gf,
            d = a.hd;
        const e = a.Xc,
            f = a.Pf,
            h = a.ie,
            k = a.Ma;
        a = "<style>#hd-drawer-container {position: fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " + X(a.zIndex) + "; pointer-events: none;}#hd-drawer-container.hd-revealed {pointer-events: auto;}#hd-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.hd-revealed > #hd-modal-background {opacity: 0.5;}#hd-drawer {position: absolute; top: 0; height: 100%; width: " +
            X(b) + "; background-color: white; display: flex; flex-direction: column; box-sizing: border-box; padding-bottom: ";
        c = c ? k ? 20 : 16 : 0;
        a += X(c) + "px; transition: transform " + X(h) + "s ease-in-out;" + (d ? "left: 0; border-top-right-radius: " + X(c) + "px; border-bottom-right-radius: " + X(c) + "px; transform: translateX(-100%);" : "right: 0; border-top-left-radius: " + X(c) + "px; border-bottom-left-radius: " + X(c) + "px; transform: translateX(100%);") + "}.hd-revealed > #hd-drawer {transform: translateY(0);}#hd-control-bar {" + (k ?
                "height: 24px;" : "padding: 5px;") + "}.hd-control-button {border: none; background: none; cursor: pointer;" + (k ? "" : "padding: 5px;") + "}#hd-back-arrow-button {" + (d ? "float: right;" : "float: left;") + "}#hd-close-button {" + (d ? "float: left;" : "float: right;") + '}#hd-content-container {flex-grow: 1; overflow: auto;}#hd-content-container::-webkit-scrollbar * {background: transparent;}.hd-hidden {visibility: hidden;}</style><div id="hd-drawer-container" class="hd-hidden" aria-modal="true" role="dialog" tabindex="0"><div id="hd-modal-background"></div><div id="hd-drawer"><div id="hd-control-bar"><button id="hd-back-arrow-button" class="hd-control-button hd-hidden" aria-label="' +
            Az(f) + '">';
        d = k ? "#5F6368" : "#444746";
        a += '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="' + Az(d) + '"><path d="m12 20-8-8 8-8 1.425 1.4-5.6 5.6H20v2H7.825l5.6 5.6Z"/></svg></button><button id="hd-close-button" class="hd-control-button" aria-label="' + Az(e) + '"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="' + Az(d) + '"><path d="M6.4 19 5 17.6 10.6 12 5 6.4 6.4 5 12 10.6 17.6 5 19 6.4 13.4 12 19 17.6 17.6 19 12 13.4Z"/></svg></button></div><div id="hd-content-container"></div></div></div>';
        return rz(a)
    };

    function EA(a) {
        a = a.top;
        if (!a) return null;
        try {
            var b = a.history
        } catch (c) {
            b = null
        }
        b = b && b.pushState && typeof b.pushState === "function" ? b : null;
        if (!b) return null;
        if (a.googNavStack) return a.googNavStack;
        b = new FA(a, b);
        b.J();
        return b ? a.googNavStack = b : null
    }

    function GA(a, b) {
        return b ? b.googNavStackId === a.j ? b : null : null
    }

    function HA(a, b) {
        for (let c = b.length - 1; c >= 0; --c) {
            const d = c === 0;
            a.K.requestAnimationFrame(() => void b[c].Ij({
                isFinal: d
            }))
        }
    }

    function IA(a, b) {
        b = kb(a.stack, b, (c, d) => c - d.og.googNavStackStateId);
        if (b >= 0) return a.stack.splice(b, a.stack.length - b);
        b = -b - 1;
        return a.stack.splice(b, a.stack.length - b)
    }
    class FA extends Q {
        constructor(a, b) {
            super();
            this.K = a;
            this.g = b;
            this.stack = [];
            this.j = Math.random() * 1E9 >>> 0;
            this.A = 0;
            this.l = c => {
                (c = GA(this, c.state)) ? HA(this, IA(this, c.googNavStackStateId + .5)): HA(this, this.stack.splice(0, this.stack.length))
            }
        }
        pushEvent() {
            const a = {
                    googNavStackId: this.j,
                    googNavStackStateId: this.A++
                },
                b = new Promise(c => {
                    this.stack.push({
                        Ij: c,
                        og: a
                    })
                });
            this.g.pushState(a, "");
            return {
                navigatedBack: b,
                triggerNavigateBack: () => {
                    const c = IA(this, a.googNavStackStateId);
                    var d;
                    if (d = c.length > 0) {
                        d = c[0].og;
                        const e = GA(this, this.g.state);
                        d = e && e.googNavStackId === d.googNavStackId && e.googNavStackStateId === d.googNavStackStateId
                    }
                    d && this.g.go(-c.length);
                    HA(this, c)
                }
            }
        }
        J() {
            this.K.addEventListener("popstate", this.l)
        }
        i() {
            this.K.removeEventListener("popstate", this.l);
            super.i()
        }
    };

    function JA(a) {
        return (a = EA(a)) ? new KA(a) : null
    }

    function LA(a) {
        if (!a.g) {
            var {
                navigatedBack: b,
                triggerNavigateBack: c
            } = a.l.pushEvent();
            a.g = c;
            b.then(() => {
                a.g && !a.C && (a.g = null, Oo(a.j))
            })
        }
    }
    var KA = class extends Q {
        constructor(a) {
            super();
            this.l = a;
            this.j = new Po;
            this.g = null
        }
    };

    function MA(a, b, c) {
        var d = c.ze ? null : new qA(a);
        const e = cA(new hA(a), c.zIndex - 1);
        b = NA(a, b, c);
        d = new OA(a, b, d, c.tc, rA(a), e);
        d.J();
        (c.cg || c.cg === void 0) && PA(d);
        c.oc && ((a = JA(a)) ? QA(d, a, c.bf) : c.bf ? .(Error("Unable to create closeNavigator")));
        return d
    }

    function PA(a) {
        a.A = b => {
            b.key === "Escape" && a.g.P && a.collapse()
        };
        a.win.document.body.addEventListener("keydown", a.A)
    }

    function QA(a, b, c) {
        Io(a.g, !0, () => {
            try {
                LA(b)
            } catch (d) {
                c ? .(d)
            }
        });
        Io(a.g, !1, () => {
            try {
                b.g && (b.g(), b.g = null)
            } catch (d) {
                c ? .(d)
            }
        });
        Mo(b.j).listen(() => void a.collapse());
        vo(a, b)
    }

    function RA(a) {
        if (a.C) throw Error("Accessing domItems after disposal");
        return a.B
    }

    function SA(a) {
        a.win.setTimeout(() => {
            a.g.P && RA(a).Ha.focus()
        }, 500)
    }

    function TA(a) {
        const {
            Ye: b,
            Wh: c
        } = RA(a);
        b.addEventListener("click", () => void a.collapse());
        c.addEventListener("click", () => void a.collapse())
    }

    function UA(a) {
        Io(a.j, !1, () => {
            RA(a).Ha.classList.add("hd-hidden")
        })
    }
    var OA = class extends Q {
        constructor(a, b, c, d = !0, e, f) {
            super();
            this.win = a;
            this.B = b;
            this.l = c;
            this.tc = d;
            this.g = new R(!1);
            this.j = CA(a, this.g);
            Io(this.j, !0, () => {
                tA(e);
                iA(f)
            });
            Io(this.j, !1, () => {
                vA(e);
                jA(f)
            })
        }
        show({
            Zf: a = !1
        } = {}) {
            if (this.C) throw Error("Cannot show drawer after disposal");
            RA(this).Ha.classList.remove("hd-hidden");
            to(this.win);
            RA(this).Ha.classList.add("hd-revealed");
            this.g.g(!0);
            this.l && (pA(this.l, RA(this).bb.Za), this.tc && SA(this));
            a && Io(this.j, !1, () => {
                this.dispose()
            })
        }
        collapse() {
            RA(this).Ha.classList.remove("hd-revealed");
            this.g.g(!1);
            this.l ? .Yd()
        }
        isVisible() {
            return this.j
        }
        J() {
            TA(this);
            UA(this)
        }
        i() {
            this.A && this.win.document.body.removeEventListener("keydown", this.A);
            const a = this.B.bb.Za,
                b = a.parentNode;
            b && b.removeChild(a);
            this.l ? .Yd();
            super.i()
        }
    };

    function NA(a, b, c) {
        const d = BA(a, c.Ae),
            e = d.shadowRoot;
        e.appendChild(re(new ce(a.document), mz(DA({
            ld: c.ld,
            gf: c.gf ? ? !0,
            hd: c.hd || !1,
            Xc: c.Xc,
            Pf: c.Pf || "",
            zIndex: c.zIndex,
            ie: .5,
            Ma: c.Ma || !1
        }))));
        const f = xA("hd-drawer-container", e);
        c.Fe ? .i(h => {
            f.setAttribute("aria-label", h)
        });
        c = xA("hd-content-container", e);
        c.appendChild(b);
        to(a);
        return {
            Ha: f,
            Ye: xA("hd-modal-background", e),
            te: c,
            Wh: xA("hd-close-button", e),
            ko: xA("hd-back-arrow-button", e),
            bb: d
        }
    };

    function VA(a) {
        const b = a.tj,
            c = a.Ji;
        var d = a.ie;
        const e = a.Ma;
        a = "<style>#ved-drawer-container {position:  fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " + X(a.zIndex) + "; pointer-events: none;}#ved-drawer-container.ved-revealed {pointer-events: auto;}#ved-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.ved-revealed > #ved-modal-background {opacity: 0.5;}#ved-ui-revealer {position: absolute; left: 0; bottom: 0; width: 100%; height: " +
            X(c) + "%; transition: transform " + X(d) + "s ease-in-out; transform: translateY(100%);}#ved-ui-revealer.ved-no-animation {transition-property: none;}.ved-revealed > #ved-ui-revealer {transform: translateY(0);}#ved-scroller-container {position: absolute; left: 0; bottom: 0; width: 100%; height: 100%; clip-path: inset(0 0 -50px 0 round ";
        d = e ? 20 : 28;
        a += X(d) + "px);}#ved-scroller {position: relative; width: 100%; height: 100%; overflow-y: scroll; -ms-overflow-style: none; scrollbar-width: none; overflow-y: scroll; overscroll-behavior: none; scroll-snap-type: y mandatory;}#ved-scroller.ved-scrolling-paused {overflow: hidden;}#ved-scroller.ved-no-snap {scroll-snap-type: none;}#ved-scroller::-webkit-scrollbar {display: none;}#ved-scrolled-stack {width: 100%; height: 100%; overflow: visible;}#ved-scrolled-stack.ved-with-background {background-color: white;}.ved-snap-point-top {scroll-snap-align: start;}.ved-snap-point-bottom {scroll-snap-align: end;}#ved-fully-closed-anchor {height: " +
            X(b / c * 100) + "%;}.ved-with-background #ved-fully-closed-anchor {background-color: white;}#ved-partially-extended-anchor {height: " + X((c - b) / c * 100) + "%;}.ved-with-background #ved-partially-extended-anchor {background-color: white;}#ved-moving-handle-holder {scroll-snap-stop: always;}.ved-with-background #ved-moving-handle-holder {background-color: white;}#ved-fixed-handle-holder {position: absolute; left: 0; top: 0; width: 100%;}#ved-visible-scrolled-items {display: flex; flex-direction: column; min-height: " +
            X(b / c * 100) + "%;}#ved-content-background {width: 100%; flex-grow: 1; padding-top: 1px; margin-top: -1px; background-color: white;}#ved-content-sizer {overflow: hidden; width: 100%; height: 100%;}#ved-content-container {width: 100%;}#ved-over-scroll-block {display: flex; flex-direction: column; position: absolute; bottom: 0; left: 0; width: 100%; height: " + X(b / c * 100) + "%; pointer-events: none;}#ved-over-scroll-handle-spacer {height: " + X(80) + "px;}#ved-over-scroll-background {flex-grow: 1; background-color: white;}.ved-handle {align-items: flex-end; border-radius: " +
            X(d) + "px " + X(d) + "px 0 0; background: white; display: flex; height: " + X(30) + "px; justify-content: center; cursor: grab;}.ved-handle-icon {" + (e ? "background: #dadce0; width: 50px;" : "background: #747775; opacity: 0.4; width: 32px;") + 'border-radius: 2px; height: 4px; margin-bottom: 8px;}.ved-hidden {visibility: hidden;}</style><div id="ved-drawer-container" class="ved-hidden" aria-modal="true" role="dialog" tabindex="0"><div id="ved-modal-background"></div><div id="ved-ui-revealer"><div id="ved-over-scroll-block" class="ved-hidden"><div id=\'ved-over-scroll-handle-spacer\'></div><div id=\'ved-over-scroll-background\'></div></div><div id="ved-scroller-container"><div id="ved-scroller"><div id="ved-scrolled-stack"><div id="ved-fully-closed-anchor" class="ved-snap-point-top"></div><div id="ved-partially-extended-anchor" class="ved-snap-point-top"></div><div id="ved-visible-scrolled-items"><div id="ved-moving-handle-holder" class="ved-snap-point-top">' +
            WA("ved-moving-handle") + '</div><div id="ved-content-background"><div id="ved-content-sizer" class="ved-snap-point-bottom"><div id="ved-content-container"></div></div></div></div></div></div></div><div id="ved-fixed-handle-holder" class="ved-hidden">' + WA("ved-fixed-handle") + "</div></div></div>";
        return rz(a)
    }

    function WA(a) {
        return rz('<div class="ved-handle" id="' + Az(a) + '"><div class="ved-handle-icon"></div></div>')
    };

    function XA(a) {
        return cp(a.g).map(b => b ? YA(a, b) : 0)
    }

    function YA(a, b) {
        switch (a.direction) {
            case 0:
                return ZA(-b.rh);
            case 1:
                return ZA(-b.qh);
            default:
                throw Error(`Unhandled direction: ${a.direction}`);
        }
    }

    function $A(a) {
        return ep(a.g).map(b => YA(a, b))
    }
    var aB = class {
        constructor(a) {
            this.g = a;
            this.direction = 0
        }
    };

    function ZA(a) {
        return a === 0 ? 0 : a
    };

    function Y(a) {
        if (a.C) throw Error("Accessing domItems after disposal");
        return a.B
    }

    function bB(a) {
        a.win.setTimeout(() => {
            a.g.P && Y(a).Ha.focus()
        }, 500)
    }

    function cB(a) {
        Y(a).Ha.classList.remove("ved-hidden");
        to(a.win);
        const {
            pa: b,
            Ya: c
        } = Y(a);
        c.getBoundingClientRect().top <= b.getBoundingClientRect().top || dB(a);
        Y(a).Ha.classList.add("ved-revealed");
        a.g.g(!0);
        a.j && (pA(a.j, Y(a).bb.Za), a.tc && bB(a))
    }

    function eB(a) {
        return CA(a.win, a.g)
    }

    function fB(a, b) {
        const c = new R(b());
        Mo(a.H).listen(() => void c.g(b()));
        return Do(c)
    }

    function gB(a) {
        const {
            pa: b,
            Id: c
        } = Y(a);
        return fB(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top)
    }

    function hB(a) {
        const {
            pa: b,
            Id: c
        } = Y(a);
        return fB(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top - 1)
    }

    function iB(a) {
        const {
            pa: b
        } = Y(a);
        return fB(a, () => b.scrollTop === b.scrollHeight - b.clientHeight)
    }

    function jB(a) {
        return Eo(gB(a), iB(a))
    }

    function kB(a) {
        const {
            pa: b,
            Ya: c
        } = Y(a);
        return fB(a, () => c.getBoundingClientRect().top < b.getBoundingClientRect().top - 1)
    }

    function dB(a) {
        Y(a).Ya.classList.add("ved-snap-point-top");
        var b = lB(a, Y(a).Ya);
        Y(a).pa.scrollTop = b;
        mB(a)
    }

    function nB(a) {
        Go(gB(a), !0, () => {
            const {
                hg: b,
                Kc: c
            } = Y(a);
            b.classList.remove("ved-hidden");
            c.classList.add("ved-with-background")
        });
        Go(gB(a), !1, () => {
            const {
                hg: b,
                Kc: c
            } = Y(a);
            b.classList.add("ved-hidden");
            c.classList.remove("ved-with-background")
        })
    }

    function oB(a) {
        const b = jp(a.win, Y(a).te);
        mp(b).i(() => void pB(a));
        vo(a, b)
    }

    function qB(a) {
        Go(rB(a), !0, () => {
            Y(a).Ig.classList.remove("ved-hidden")
        });
        Go(rB(a), !1, () => {
            Y(a).Ig.classList.add("ved-hidden")
        })
    }

    function sB(a) {
        const b = () => void Oo(a.F),
            {
                Ye: c,
                Ya: d,
                Ii: e
            } = Y(a);
        c.addEventListener("click", b);
        d.addEventListener("click", b);
        e.addEventListener("click", b);
        Io(tB(a), !0, b)
    }

    function uB(a) {
        Io(eB(a), !1, () => {
            dB(a);
            Y(a).Ha.classList.add("ved-hidden")
        })
    }

    function mB(a) {
        Ho(a.l, !1, () => void Oo(a.H))
    }

    function pB(a) {
        if (!a.l.P) {
            var {
                Wf: b,
                te: c
            } = Y(a), d = c.getBoundingClientRect().height;
            d = Math.max(vB(a), d);
            a.l.g(!0);
            var e = wB(a);
            b.style.setProperty("height", `${d}px`);
            e();
            a.win.requestAnimationFrame(() => {
                a.win.requestAnimationFrame(() => {
                    a.l.g(!1)
                })
            })
        }
    }

    function rB(a) {
        const {
            pa: b,
            Ya: c
        } = Y(a);
        return fB(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top)
    }

    function tB(a) {
        return Co(a.A.map(Op), xB(a))
    }

    function xB(a) {
        return fB(a, () => Y(a).pa.scrollTop === 0)
    }

    function lB(a, b) {
        ({
            Kc: a
        } = Y(a));
        a = a.getBoundingClientRect().top;
        return b.getBoundingClientRect().top - a
    }

    function yB(a, b) {
        a.A.g(!0);
        const {
            Kc: c,
            pa: d
        } = Y(a);
        d.scrollTop = 0;
        d.classList.add("ved-scrolling-paused");
        c.style.setProperty("margin-top", `-${b}px`);
        return () => void zB(a, b)
    }

    function zB(a, b) {
        const {
            Kc: c,
            pa: d
        } = Y(a);
        c.style.removeProperty("margin-top");
        d.classList.remove("ved-scrolling-paused");
        Y(a).pa.scrollTop = b;
        mB(a);
        a.A.g(!1)
    }

    function wB(a) {
        const b = Y(a).pa.scrollTop;
        yB(a, b);
        return () => void zB(a, b)
    }

    function vB(a) {
        const {
            pa: b,
            Id: c,
            Wf: d,
            Ya: e
        } = Y(a);
        a = b.getBoundingClientRect();
        const f = c.getBoundingClientRect();
        var h = d.getBoundingClientRect();
        const k = e.getBoundingClientRect();
        h = h.top - f.top;
        return Math.max(a.height - k.height - h, Math.min(a.height, a.bottom - f.top) - h)
    }
    var AB = class extends Q {
        constructor(a, b, c, d, e = !0) {
            super();
            this.win = a;
            this.B = b;
            this.I = c;
            this.j = d;
            this.tc = e;
            this.F = new Po;
            this.H = new Po;
            this.g = new R(!1);
            this.A = new R(!1);
            this.l = new R(!1)
        }
        J() {
            dB(this);
            nB(this);
            oB(this);
            qB(this);
            sB(this);
            uB(this);
            Y(this).pa.addEventListener("scroll", () => void mB(this))
        }
        i() {
            const a = this.B.bb.Za,
                b = a.parentNode;
            b && b.removeChild(a);
            this.j ? .Yd();
            super.i()
        }
    };

    function BB(a, b, c) {
        const d = BA(a, c.Ae),
            e = d.shadowRoot;
        e.appendChild(re(new ce(a.document), mz(VA({
            tj: c.Mg * 100,
            Ji: c.ig * 100,
            zIndex: c.zIndex,
            ie: .5,
            Ma: c.Ma || !1
        }))));
        const f = xA("ved-drawer-container", e);
        c.Fe ? .i(h => {
            f.setAttribute("aria-label", h)
        });
        c = xA("ved-content-container", e);
        c.appendChild(b);
        to(a);
        return {
            Ha: f,
            Ye: xA("ved-modal-background", e),
            ih: xA("ved-ui-revealer", e),
            pa: xA("ved-scroller", e),
            Kc: xA("ved-scrolled-stack", e),
            Ii: xA("ved-fully-closed-anchor", e),
            Ya: xA("ved-partially-extended-anchor", e),
            Wf: xA("ved-content-sizer",
                e),
            te: c,
            uo: xA("ved-moving-handle", e),
            Id: xA("ved-moving-handle-holder", e),
            Hi: xA("ved-fixed-handle", e),
            hg: xA("ved-fixed-handle-holder", e),
            Ig: xA("ved-over-scroll-block", e),
            bb: d
        }
    };

    function CB(a, b, c) {
        var d = cA(new hA(a), c.zIndex - 1);
        b = BB(a, b, c);
        const e = c.ze ? null : new qA(a);
        var f = b.Hi;
        f = new fp(new Xo(a, f), new Uo(f));
        var h = f.g;
        h.A.addEventListener("mousedown", h.G);
        h.l.addEventListener("mouseup", h.C);
        h.l.addEventListener("mousemove", h.B, {
            passive: !1
        });
        h = f.i;
        h.i.addEventListener("touchstart", h.B);
        h.i.addEventListener("touchend", h.A);
        h.i.addEventListener("touchmove", h.C, {
            passive: !1
        });
        b = new AB(a, b, new aB(f), e, c.tc);
        b.J();
        d = new DB(a, b, rA(a), d);
        vo(d, b);
        d.J();
        c.oc && ((a = JA(a)) ? EB(d, a, c.bf) :
            c.bf ? .(Error("Unable to create closeNavigator")));
        return d
    }

    function EB(a, b, c) {
        Io(a.g.g, !0, () => {
            try {
                LA(b)
            } catch (d) {
                c ? .(d)
            }
        });
        Io(a.g.g, !1, () => {
            try {
                b.g && (b.g(), b.g = null)
            } catch (d) {
                c ? .(d)
            }
        });
        Mo(b.j).listen(() => void a.collapse());
        vo(a, b)
    }

    function FB(a) {
        Io(Co(jB(a.g), kB(a.g)), !0, () => {
            Y(a.g).Ya.classList.remove("ved-snap-point-top")
        });
        Go(hB(a.g), !0, () => {
            Y(a.g).pa.classList.add("ved-no-snap")
        });
        Go(hB(a.g), !1, () => {
            Y(a.g).pa.classList.remove("ved-no-snap")
        });
        Io(hB(a.g), !1, () => {
            var b = a.g;
            var c = Y(b).Id;
            c = yB(b, lB(b, c));
            b.win.setTimeout(c, 100)
        })
    }

    function GB(a) {
        const b = a.g.I;
        XA(b).listen(c => {
            c = -c;
            if (c > 0) {
                const {
                    ih: d
                } = Y(a.g);
                d.classList.add("ved-no-animation");
                d.style.setProperty("transform", `translateY(${c}px)`)
            } else({
                ih: c
            } = Y(a.g)), c.classList.remove("ved-no-animation"), c.style.removeProperty("transform")
        });
        $A(b).listen(c => {
            -c > 30 && a.collapse()
        })
    }
    var DB = class extends Q {
        constructor(a, b, c, d) {
            super();
            this.win = a;
            this.g = b;
            Io(eB(b), !0, () => {
                tA(c);
                iA(d)
            });
            Io(eB(b), !1, () => {
                vA(c);
                jA(d)
            })
        }
        show({
            Zf: a = !1
        } = {}) {
            if (this.C) throw Error("Cannot show drawer after disposal");
            cB(this.g);
            a && Io(eB(this.g), !1, () => {
                this.dispose()
            })
        }
        collapse() {
            var a = this.g;
            Y(a).Ha.classList.remove("ved-revealed");
            a.g.g(!1);
            a.j ? .Yd()
        }
        isVisible() {
            return eB(this.g)
        }
        J() {
            Mo(this.g.F).listen(() => {
                this.collapse()
            });
            FB(this);
            GB(this);
            to(this.win)
        }
    };

    function HB(a, b) {
        return Ue() === 2 ? CB(a.win, b, {
            Mg: .95,
            ig: .95,
            zIndex: 2147483645,
            oc: !0,
            Ma: !0
        }) : MA(a.win, b, {
            ld: "min(65vw, 768px)",
            Xc: "",
            hd: !1,
            zIndex: 2147483645,
            oc: !0,
            gf: !1,
            Ma: !0
        })
    }

    function IB(a) {
        ((d, e) => {
            d[e] = d[e] || function() {
                (d[e].q = d[e].q || []).push(arguments)
            };
            d[e].t = (new Date).getTime()
        })(a.win, "_googCsa");
        const b = a.R.map(d => ({
                container: d,
                relatedSearches: 5
            })),
            c = {
                pubId: a.H,
                styleId: "5134551505",
                hl: a.language,
                fexp: a.B,
                channel: "AutoRsVariant",
                resultsPageBaseUrl: "http://google.com",
                resultsPageQueryParam: "q",
                relatedSearchTargeting: "content",
                relatedSearchResultClickedCallback: a.Bb.bind(a),
                relatedSearchUseResultCallback: !0,
                cx: a.I
            };
        a.ua && (c.adLoadedCallback = a.Ka.bind(a));
        a.j && a.A instanceof
        Array && (c.fexp = a.A.join(","));
        a.win._googCsa("relatedsearch", c, b)
    }

    function JB(a) {
        a.win.addEventListener("message", b => {
            b.origin === "https://www.gstatic.com" && b.data.action === "resize" && (a.g.style.height = `${Math.ceil(b.data.height)+1}px`)
        })
    }
    var KB = class extends Q {
        constructor(a, b, c, d, e, f, h, k, l, m = () => {}) {
            super();
            this.win = a;
            this.R = b;
            this.M = e;
            this.B = f;
            this.l = k;
            this.Fa = l;
            this.ib = m;
            this.language = d ? .g() || "en";
            this.hb = d ? .j() || "Search results from ${website}";
            this.ua = U(is);
            this.H = c.replace("ca", "partner");
            this.ca = new ce(a.document);
            this.g = qe(this.ca, "IFRAME");
            this.I = h.i ? h.g : "9d449ff4a772956c6";
            this.A = (this.j = U(os)) ? P(Bn).g().concat(this.B) : this.B;
            this.F = new Zz(this.g, this.I, "auto-rs-prose", this.H, "AutoRsVariant", a.location, this.language, this.hb,
                this.A, this.l, this.Fa, this.j);
            this.ia = HB(this, this.g);
            vo(this, this.ia)
        }
        J() {
            this.R.length !== 0 && (this.ua || Mu(1075, () => {
                this.F.J()
            }, this.win), Mu(1076, () => {
                const a = qe(this.ca, "SCRIPT");
                xd(a, id `https://www.google.com/adsense/search/async-ads.js`);
                this.win.document.head.appendChild(a)
            }, this.win), IB(this), kr(this.M, {
                sts: "ok"
            }), this.l && JB(this))
        }
        Ka(a, b) {
            b ? Mu(1075, () => {
                this.F.J()
            }, this.win) : (this.ib(), mr(this.M, "pfns"))
        }
        Bb(a, b) {
            Yz(this.F, a, b);
            (() => {
                if (!this.l) {
                    const c = new ResizeObserver(async e => {
                            this.g.height =
                                "0";
                            await new Promise(f => {
                                this.win.requestAnimationFrame(f)
                            });
                            this.g.height = e[0].target.scrollHeight.toString()
                        }),
                        d = () => {
                            const e = this.g.contentDocument ? .documentElement;
                            e ? c.observe(e) : (console.warn("iframe body missing"), setTimeout(d, 1E3))
                        };
                    d()
                }
                this.ia.show()
            })()
        }
    };
    var LB = class {
        constructor(a, b) {
            this.i = a;
            this.g = b
        }
    };

    function MB(a) {
        const b = kv(a.l.ha),
            c = a.C.Ja(a.G, () => a.i());
        b.appendChild(c);
        a.A && (b.className = a.A);
        return {
            xi: b,
            ci: c
        }
    }
    class NB {
        constructor(a, b, c, d) {
            this.G = a;
            this.l = b;
            this.C = c;
            this.A = d || null;
            this.g = null;
            this.j = new R(null)
        }
        J() {
            const a = MB(this);
            this.g = a.xi;
            Lv(this.l, this.g);
            this.j.g(a.ci)
        }
        i() {
            this.g && this.g.parentNode && this.g.parentNode.removeChild(this.g);
            this.g = null;
            this.j.g(null)
        }
        B() {
            return this.j
        }
    };
    async function OB(a) {
        await new Promise(b => {
            setTimeout(() => {
                try {
                    PB(a)
                } catch (c) {
                    mr(a.i, "pfere", c)
                }
                b()
            })
        })
    }

    function PB(a) {
        if ((!a.gd || !QB(a.config, a.aa, a.i)) && RB(a.g ? .j(), a.i)) {
            var b = a.g ? .l();
            b = bz(a.win, a.config, a.aa, a.i, {
                Sj: !!b ? .A(),
                gd: a.gd,
                vo: !!b ? .g(),
                Rj: !!b ? .C()
            });
            b = SB(b, a.win);
            var c = Object.keys(b),
                d = Object.values(b),
                e = a.g ? .g() ? .g() || 0,
                f = TB(a.g),
                h = !!a.g ? .C(),
                k = String(a.g ? .B());
            if (!z(a.config, vq, 25) ? .g()) {
                var l = () => {
                    d.forEach(m => {
                        m.i()
                    })
                };
                Mu(1074, () => {
                    (new KB(a.win, c, a.webPropertyCode, a.g ? .j(), a.i, e, f, h, k, l)).J()
                }, a.win)
            }
        }
    }
    var UB = class {
        constructor(a, b, c, d, e, f) {
            this.win = a;
            this.config = c;
            this.webPropertyCode = d;
            this.aa = e;
            this.gd = f;
            this.i = new nr(a, b, z(this.config, Cq, 28) || new Cq);
            this.g = z(this.config, Cq, 28)
        }
    };

    function QB(a, b, c) {
        a = z(a, Cq, 28) ? .g() ? .g() || 0;
        const d = P(Zt).g(ns.g, ns.defaultValue);
        return d && d.includes(a.toString()) ? !1 : (b ? Lh(b, 2, yg, y()) : []).length === 0 ? (mr(c, "pfeu"), !0) : !1
    }

    function RB(a, b) {
        const c = P(Zt).g(ls.g, ls.defaultValue);
        a = a ? .g() || "";
        return c && c.length !== 0 && !c.includes(a.toString()) ? (mr(b, "pflna"), !1) : !0
    }

    function SB(a, b) {
        const c = {};
        for (let e = 0; e < a.length; e++) {
            var d = a[e];
            const f = "autors-container-" + e.toString(),
                h = b.document.createElement("div");
            h.setAttribute("id", f);
            d = new NB(b, d, new sr(h), "autors-widget");
            d.J();
            c[f] = d
        }
        return c
    }

    function TB(a) {
        const b = a ? .G() || !1;
        a = a ? .A() || "";
        return new LB(b, a)
    };
    var VB = (a, b) => {
        const c = [];
        z(a, Mq, 18) && c.push(2);
        b.aa && c.push(0);
        z(a, Cq, 28) && oi(z(a, Cq, 28), 1) == 1 && c.push(1);
        z(a, Aq, 31) && oi(z(a, Aq, 31), 1) == 1 && c.push(5);
        z(a, xq, 32) && c.push(6);
        z(a, Pq, 34) && K(z(a, Pq, 34), 3) && c.push(7);
        return c
    };

    function WB(a, b) {
        const c = qe(be(a), "IMG");
        XB(a, c);
        c.src = "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg";
        v(c, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: b == null ? "auto" : "pointer"
        });
        b && c.addEventListener("click", d => {
            b();
            d.stopPropagation()
        });
        return c
    }

    function YB(a, b) {
        const c = b.document.createElement("button");
        XB(b, c);
        v(c, {
            display: "inline",
            "line-height": "24px",
            cursor: "pointer"
        });
        c.appendChild(b.document.createTextNode(a.i));
        c.addEventListener("click", d => {
            a.j();
            d.stopPropagation()
        });
        return c
    }

    function ZB(a, b, c) {
        const d = qe(be(b), "IMG");
        d.src = "https://www.gstatic.com/adsense/autoads/icons/arrow_left_24px_grey_800.svg";
        d.setAttribute("aria-label", a.l);
        XB(b, d);
        v(d, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        d.addEventListener("click", e => {
            c();
            e.stopPropagation()
        });
        return d
    }

    function $B(a) {
        const b = a.document.createElement("ins");
        XB(a, b);
        v(b, {
            "float": "left",
            display: "inline-flex",
            padding: "8px 0px",
            "background-color": "#FFF",
            "border-radius": "0px 20px 20px 0px",
            "box-shadow": "0px 1px 2px 0px rgba(60,64,67,0.3), 0px 1px 3px 1px rgba(60,64,67,0.15)"
        });
        return b
    }
    class aC {
        constructor(a, b, c) {
            this.i = a;
            this.l = b;
            this.j = c;
            this.g = new R(!1)
        }
        Ja(a, b, c, d) {
            const e = WB(a, d),
                f = WB(a),
                h = YB(this, a),
                k = ZB(this, a, c);
            a = $B(a);
            a.appendChild(e);
            a.appendChild(f);
            a.appendChild(h);
            a.appendChild(k);
            this.g.listen(l => {
                v(e, {
                    display: l ? "none" : "inline"
                });
                v(f, {
                    display: l ? "inline" : "none"
                });
                l ? (v(h, {
                        "line-height": "24px",
                        "max-width": "100vw",
                        opacity: "1",
                        transition: "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms"
                    }), v(k, {
                        margin: "0px 12px 0px 8px",
                        opacity: 1,
                        width: "24px",
                        transition: "margin 100ms 50ms, opacity 50ms 50ms, width 100ms 50ms"
                    })) :
                    (v(h, {
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        transition: "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms"
                    }), v(k, {
                        margin: "0",
                        opacity: "0",
                        width: "0",
                        transition: "margin 100ms, opacity 50ms, width 100ms"
                    }))
            }, !0);
            return a
        }
        jg() {
            return 40
        }
        Gg() {
            this.g.g(!1);
            return 0
        }
        Hg() {
            this.g.g(!0)
        }
    }

    function XB(a, b) {
        v(b, pr(a));
        v(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#3C4043",
            "user-select": "none"
        })
    };
    var bC = a => a.googlefc = a.googlefc || {},
        cC = a => {
            a = a.googlefc = a.googlefc || {};
            return a.ccpa = a.ccpa || {}
        },
        dC = a => {
            a = a.googlefc = a.googlefc || {};
            return a.__fcusi = a.__fcusi || {}
        },
        eC = a => {
            a = a.googlefc = a.googlefc || {};
            if (!a.getFloatingToolbarTranslatedMessages) return null;
            if (a = a.getFloatingToolbarTranslatedMessages()) {
                var b = new Dq;
                b = Ei(b, 1, a.defaultFloatingToolbarToggleExpansionText);
                b = Ei(b, 2, a.defaultFloatingToolbarTogglePrivacySettings);
                a = Ei(b, 3, a.defaultFloatingToolbarDismissPrivacySettings).i()
            } else a = null;
            return a
        };

    function fC(a, b) {
        const c = b.document.createElement("button");
        gC(a, b, c);
        b = {
            width: "100%",
            "text-align": "center",
            display: "block",
            padding: "8px 0px",
            "background-color": a.i
        };
        a.g && (b["border-top"] = a.g, b["border-bottom"] = a.g);
        v(c, b);
        c.addEventListener("click", d => {
            a.C();
            d.stopPropagation()
        });
        return c
    }

    function hC(a, b, c, d) {
        const e = b.document.createElement("div");
        v(e, pr(b));
        v(e, {
            "align-items": "center",
            "background-color": a.i,
            display: "flex",
            "justify-content": "center"
        });
        const f = b.document.createElement("span");
        f.appendChild(b.document.createTextNode(d));
        v(f, pr(b));
        v(f, {
            "font-family": "Arial,sans-serif",
            "font-size": "12px",
            padding: "8px 0px"
        });
        b = b.matchMedia("(min-width: 768px)");
        d = h => {
            h.matches ? (v(e, {
                    "flex-direction": "row"
                }), a.g && v(e, {
                    "border-top": a.g,
                    "border-bottom": a.g
                }), v(f, {
                    "margin-left": "8px",
                    "text-align": "start"
                }),
                v(c, {
                    border: "0",
                    "margin-right": "8px",
                    width: "auto"
                })) : (v(e, {
                border: "0",
                "flex-direction": "column"
            }), v(f, {
                "margin-left": "0",
                "text-align": "center"
            }), v(c, {
                "margin-right": "0",
                width: "100%"
            }), a.g && v(c, {
                "border-top": a.g,
                "border-bottom": a.g
            }))
        };
        d(b);
        b.addEventListener("change", d);
        e.appendChild(c);
        e.appendChild(f);
        return e
    }

    function gC(a, b, c) {
        v(c, pr(b));
        v(c, {
            "font-family": "Arial,sans-serif",
            "font-weight": a.B,
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: a.G,
            "user-select": "none",
            cursor: "pointer"
        })
    }
    class iC {
        constructor(a, b, c, d, e, f = null, h = null, k = null) {
            this.A = a;
            this.C = b;
            this.G = c;
            this.i = d;
            this.B = e;
            this.l = f;
            this.g = h;
            this.j = k
        }
        Ja(a) {
            const b = a.document.createElement("div");
            gC(this, a, b);
            v(b, {
                display: "inline-flex",
                padding: "8px 0px",
                "background-color": this.i
            });
            if (this.l) {
                var c = qe(be(a), "IMG");
                c.src = this.l;
                gC(this, a, c);
                v(c, {
                    margin: "0px 8px 0px 0px",
                    width: "24px",
                    height: "24px"
                })
            } else c = null;
            c && b.appendChild(c);
            c = a.document.createElement("span");
            gC(this, a, c);
            v(c, {
                "line-height": "24px"
            });
            c.appendChild(a.document.createTextNode(this.A));
            b.appendChild(c);
            c = fC(this, a);
            c.appendChild(b);
            return this.j ? hC(this, a, c, this.j) : c
        }
    };

    function jC(a, b) {
        b = b.filter(c => z(c, $p, 4) ? .g() === 5 && si(c, 8) === 1);
        b = bv(b, a);
        a = Nv(b, a);
        a.sort((c, d) => d.la.g - c.la.g);
        return a[0] || null
    };

    function kC({
        Wd: a,
        dd: b,
        Jd: c,
        Xd: d,
        ed: e,
        Kd: f
    }) {
        const h = [];
        for (let p = 0; p < f; p++)
            for (let q = 0; q < c; q++) {
                var k = q,
                    l = c - 1,
                    m = p,
                    n = f - 1;
                h.push({
                    x: a + (l === 0 ? 0 : k / l) * (b - a),
                    y: d + (n === 0 ? 0 : m / n) * (e - d)
                })
            }
        return h
    }

    function lC(a, b) {
        a.hasOwnProperty("_goog_efp_called_") || (a._goog_efp_called_ = a.elementFromPoint(b.x, b.y));
        return a.elementFromPoint(b.x, b.y)
    };

    function mC(a, b) {
        var c = kC({
            Wd: b.left,
            dd: b.right,
            Jd: 10,
            Xd: b.top,
            ed: b.bottom,
            Kd: 10
        });
        b = new Set;
        for (const d of c)(c = nC(a, d)) && b.add(c);
        return b
    }

    function oC(a, b) {
        for (const c of b)
            if (b = nC(a, c)) return b;
        return null
    }

    function pC(a, b, c) {
        if (Wj(b, "position") !== "fixed") return null;
        var d = b.getAttribute("class") === "GoogleActiveViewInnerContainer" || Zj(b).width <= 1 && Zj(b).height <= 1 || a.g.yi && !a.g.yi(b) ? !0 : !1;
        a.g.gg && a.g.gg(b, c, d);
        return d ? null : b
    }

    function nC(a, b) {
        var c = lC(a.K.document, b);
        if (c) {
            var d;
            if (!(d = pC(a, c, b))) a: {
                d = a.K.document;
                for (c = c.offsetParent; c && c !== d.body; c = c.offsetParent) {
                    const e = pC(a, c, b);
                    if (e) {
                        d = e;
                        break a
                    }
                }
                d = null
            }
            a = d || null
        } else a = null;
        return a
    }
    var qC = class {
        constructor(a, b = {}) {
            this.K = a;
            this.g = b
        }
    };

    function rC({
        K: a,
        nj: b,
        gj: c,
        Vh: d,
        Do: e,
        Eo: f,
        ta: h
    }) {
        let k = 0;
        try {
            k |= Rn(a, f);
            const n = Math.min(a.screen.width || 0, a.screen.height || 0);
            k |= n ? n < 320 ? 8192 : 0 : 2048;
            k |= a.navigator && sC(a.navigator.userAgent) ? 1048576 : 0;
            if (b) {
                f = k;
                const p = a.innerHeight;
                var l = lf(a) * p >= b;
                var m = f | (l ? 0 : 1024)
            } else m = k | (a.innerHeight >= a.innerWidth ? 0 : 8);
            k = m;
            k |= Un(a, c, !0, e)
        } catch {
            k |= 32
        }
        switch (d) {
            case 2:
                tC(a, h) && (k |= 16777216);
                break;
            case 1:
                uC(a, h) && (k |= 16777216)
        }
        return k
    }

    function sC(a) {
        return /Android 2/.test(a) || /iPhone OS [34]_/.test(a) || /Windows Phone (?:OS )?[67]/.test(a) || /MSIE.*Windows NT/.test(a) || /Windows NT.*Trident/.test(a)
    }
    var tC = (a, b = null) => {
            const c = kC({
                Wd: 0,
                dd: a.innerWidth,
                Jd: 3,
                Xd: 0,
                ed: Math.min(Math.round(a.innerWidth / 320 * 50), vC) + 15,
                Kd: 3
            });
            return oC(wC(a, b), c) != null
        },
        uC = (a, b = null) => {
            const c = a.innerWidth,
                d = a.innerHeight,
                e = Math.min(Math.round(a.innerWidth / 320 * 50), vC) + 15,
                f = kC({
                    Wd: 0,
                    dd: c,
                    Jd: 3,
                    Xd: d - e,
                    ed: d,
                    Kd: 3
                });
            e > 25 && f.push({
                x: c - 25,
                y: d - 25
            });
            return oC(wC(a, b), f) != null
        };

    function xC(a, b) {
        var c = U(Br);
        a: {
            const e = a.innerWidth,
                f = a.innerHeight;
            let h = f;
            for (; h > b;) {
                var d = kC({
                    Wd: 0,
                    dd: e,
                    Jd: 9,
                    Xd: h - b,
                    ed: h,
                    Kd: 9
                });
                d = oC(wC(a), d);
                if (!d) {
                    a = f - h;
                    break a
                }
                h = c ? Math.min(d.getBoundingClientRect().top - 1, h - 1) : d.getBoundingClientRect().top - 1
            }
            a = null
        }
        return a
    }

    function wC(a, b = null) {
        return new qC(a, {
            gg: yC(a, b)
        })
    }

    function yC(a, b = null) {
        if (b) return (c, d, e) => {
            Kk(b, "ach_evt", {
                tn: c.tagName,
                id: c.getAttribute("id") ? ? "",
                cls: c.getAttribute("class") ? ? "",
                ign: String(e),
                pw: a.innerWidth,
                ph: a.innerHeight,
                x: d.x,
                y: d.y
            }, !0, 1)
        }
    }
    const vC = 90 * 1.38;

    function zC(a) {
        a = new AC(a);
        a.J();
        return a
    }

    function BC(a) {
        if (!wA(a.win)) {
            if (a.j.P) {
                const b = ao(a.win);
                if (b > a.g + 100 || b < a.g - 100) a.j.g(!1), a.g = Vn(a.win)
            }
            a.l && a.win.clearTimeout(a.l);
            a.l = a.win.setTimeout(() => void CC(a), 200)
        }
    }

    function CC(a) {
        if (!wA(a.win)) {
            var b = Vn(a.win);
            a.g && a.g > b && (a.g = b);
            b = ao(a.win);
            b >= a.g - 100 && (a.g = Math.max(a.g, b), a.j.g(!0))
        }
    }
    var AC = class extends Q {
        constructor(a) {
            super();
            this.win = a;
            this.j = new R(!1);
            this.g = 0;
            this.l = null;
            this.A = () => void BC(this)
        }
        J() {
            this.win.addEventListener("scroll", this.A);
            this.g = Vn(this.win);
            CC(this)
        }
        i() {
            this.win.removeEventListener("scroll", this.A);
            this.j.g(!1);
            super.i()
        }
    };

    function DC(a) {
        a.g || (a.g = EC(a));
        v(a.g, {
            display: "block"
        });
        a.A.Hg();
        a.j.g(a.C)
    }

    function FC(a) {
        const b = a.A.Gg();
        switch (b) {
            case 0:
                a.j.g(a.C);
                break;
            case 1:
                a.g && (v(a.g, {
                    display: "none"
                }), a.j.g(null));
                break;
            default:
                throw Error("Unhandled OnHideOutcome: " + b);
        }
    }

    function EC(a) {
        var b = xC(a.l, a.A.jg() + 60);
        b = b == null ? 30 : b + 30;
        const c = a.l.document.createElement("div");
        v(c, pr(a.l));
        v(c, {
            position: "fixed",
            left: "0px",
            bottom: b + "px",
            width: "100vw",
            "text-align": "center",
            "z-index": 2147483642,
            display: "none",
            "pointer-events": "none"
        });
        a.C = a.A.Ja(a.l, () => a.i(), () => {
            a.G.dispose();
            FC(a)
        }, () => {
            a.G.dispose();
            DC(a)
        });
        c.appendChild(a.C);
        a.F && (c.className = a.F);
        a.l.document.body.appendChild(c);
        return c
    }
    class GC {
        constructor(a, b, c) {
            this.l = a;
            this.A = b;
            this.C = null;
            this.j = new R(null);
            this.F = c || null;
            this.G = zC(a);
            this.g = null
        }
        J() {
            const a = Do(this.G.j);
            Go(a, !0, () => void DC(this));
            Io(a, !1, () => void FC(this))
        }
        i() {
            this.g && this.g.parentNode && this.g.parentNode.removeChild(this.g);
            this.g = null;
            this.G.dispose();
            this.j.g(null)
        }
        B() {
            return this.j
        }
    };

    function HC(a) {
        a.G.g(0);
        a.l != null && (a.l.i(), a.l = null);
        a.j != null && (a.j.i(), a.j = null)
    }

    function IC(a) {
        a.j = new GC(a.C, a.I, a.F);
        a.j.J();
        Jo(a.A, a.j.B());
        a.G.g(2)
    }
    class JC {
        constructor(a, b, c, d, e) {
            this.C = a;
            this.H = b;
            this.M = c;
            this.I = d;
            this.F = e;
            this.G = new R(0);
            this.A = new R(null);
            this.j = this.l = this.g = null
        }
        J() {
            this.H ? (this.l = new NB(this.C, this.H, this.M, this.F), this.l.J(), Jo(this.A, this.l.B()), this.G.g(1), this.g == null && (this.g = new wp(this.C), this.g.J(2E3)), up(this.g, () => {
                HC(this);
                IC(this)
            })) : IC(this)
        }
        i() {
            HC(this);
            this.g && (this.g.dispose(), this.g = null)
        }
        B() {
            return this.A
        }
    };
    var KC = class {
        constructor(a, b, c) {
            this.position = a;
            this.Ab = b;
            this.Ke = c
        }
    };

    function LC(a, b) {
        this.start = a < b ? a : b;
        this.end = a < b ? b : a
    };

    function MC(a, b, c) {
        var d = Tn(a);
        d = new KC(b.Tb.Dg(b.mb), b.Ab + 2 * b.mb, Math.min(d, b.Cd) - b.Tb.nd() + 2 * b.mb);
        d = d.position.Xf(a, d.Ab, d.Ke);
        var e = Sn(a),
            f = Tn(a);
        c = NC(a, new Cj(od(d.top, 0, f - 1), od(d.right, 0, e - 1), od(d.bottom, 0, f - 1), od(d.left, 0, e - 1)), c);
        f = OC(c);
        let h = d.top;
        e = [];
        for (let k = 0; k < f.length; k++) f[k].start > h && e.push(new LC(h, f[k].start)), h = f[k].end;
        h < d.bottom && e.push(new LC(h, d.bottom));
        a = Tn(a);
        d = [];
        for (f = e.length - 1; f >= 0; f--) d.push(new LC(a - e[f].end, a - e[f].start));
        a: {
            for (const k of d)
                if (a = k.start + b.mb, a >
                    b.Tb.nd() + b.Ue ? a = null : (d = Math.min(k.end - b.mb, b.Cd) - a, a = d < b.Xe ? null : {
                        position: b.Tb.oh(a),
                        Dc: d
                    }), a) {
                    b = a;
                    break a
                }
            b = null
        }
        return {
            me: b,
            jo: c
        }
    }

    function NC(a, b, c) {
        const d = mC(new qC(a), b);
        c.forEach(e => void d.delete(e));
        return d
    }

    function OC(a) {
        return Array.from(a).map(PC).sort((b, c) => b.start - c.start)
    }

    function PC(a) {
        a = a.getBoundingClientRect();
        return new LC(a.top, a.bottom)
    };

    function QC({
        ga: a,
        sa: b
    }) {
        return new RC(a, b)
    }
    var RC = class {
        constructor(a, b) {
            this.ga = a;
            this.sa = b
        }
        Dg(a) {
            return new RC(this.ga - a, this.sa - a)
        }
        Xf(a, b, c) {
            a = Tn(a) - this.ga - c;
            return new Cj(a, this.sa + b, a + c, this.sa)
        }
        Mf(a) {
            a.bottom = `${this.ga}px`;
            a.left = `${this.sa}px`;
            a.right = ""
        }
        kg() {
            return 0
        }
        nd() {
            return this.ga
        }
        oh(a) {
            return new RC(a, this.sa)
        }
    };

    function SC({
        ga: a,
        Ca: b
    }) {
        return new TC(a, b)
    }
    var TC = class {
        constructor(a, b) {
            this.ga = a;
            this.Ca = b
        }
        Dg(a) {
            return new TC(this.ga - a, this.Ca - a)
        }
        Xf(a, b, c) {
            var d = Sn(a);
            a = Tn(a) - this.ga - c;
            d = d - this.Ca - b;
            return new Cj(a, d + b, a + c, d)
        }
        Mf(a) {
            a.bottom = `${this.ga}px`;
            a.right = `${this.Ca}px`;
            a.left = ""
        }
        kg() {
            return 1
        }
        nd() {
            return this.ga
        }
        oh(a) {
            return new TC(a, this.Ca)
        }
    };

    function UC(a) {
        const b = a.Ci,
            c = a.Yh,
            d = a.Rh,
            e = a.Mj,
            f = a.Sh;
        a = a.Qh;
        return rz('<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Google+Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/><link href="https://fonts.googleapis.com/css?family=Google+Sans+Text:400,500,700" rel="stylesheet"><style>.ft-styless-button {border: none; background: none; user-select: none; cursor: pointer; border-radius: ' + X(16) + "px;}.ft-container {position: fixed;}.ft-menu {position: absolute; bottom: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; box-shadow: 0 4px 8px 3px rgba(60, 64, 67, 0.15), 0 1px 3px rgba(60, 64, 67, 0.3); min-height: " +
            X(d) + "px;}.ft-menu:not(.ft-multiple-buttons *) {transition: padding 0.25s 0.25s, margin 0.25s 0.25s, border-radius 0.25s 0.25s, background-color 0s 0.5s; padding: 0; margin: " + X(a) + "px; border-radius: " + X(16) + "px; background-color: rgba(255, 255, 255, 0);}.ft-multiple-buttons .ft-menu {transition: margin 0.25s, padding 0.25s, border-radius 0.25s 0.25s, background-color 0s; padding: " + X(a) + "px; margin: 0; border-radius: " + X(16 + a) + "px; background-color: rgba(255, 255, 255, 1);}.ft-left-pos .ft-menu {left: 0;}.ft-right-pos .ft-menu {right: 0;}.ft-container.ft-hidden {transition: opacity 0.25s, visibility 0.5s 0s; opacity: 0; visibility: hidden;}.ft-container:not(.ft-hidden) {transition: opacity 0.25s, bottom 0.5s ease; opacity: 1;}.google-symbols {font-size: 26px; color: #3c4043;}.ft-button-holder {display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 0;}.ft-flip-vertically {transform: scaleY(-1);}.ft-expand-toggle {width: " +
            X(d) + "px; height: " + X(d) + "px;}.ft-collapsed .ft-expand-icon {transition: transform 0.25s; transform: rotate(180deg);}.ft-expand-icon:not(.ft-collapsed *) {transition: transform 0.25s; transform: rotate(0deg);}.ft-button {position: relative; height: " + X(d) + "px; margin-bottom: " + X(f) + "px; transform: margin 0.25s 0.25s;}.ft-button.ft-last-button {margin-bottom: 0;}.ft-button > button {position: relative; height: " + X(d) + "px; width: " + X(d) + "px; margin: 0; padding: 0; border: none;}.ft-button > button > * {position: relative;}.ft-button .ft-highlighter {position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); height: " +
            X(d - 6) + "px; width: " + X(d - 6) + "px; border-radius: " + X(d / 2) + "px; background-color: #d2e3fc; opacity: 0; transition: opacity 0.25s;}.ft-button.ft-highlighted .ft-highlighter {opacity: 1;}.ft-button-corner-info {display: none;}.ft-button.ft-show-corner-info .ft-button-corner-info {position: absolute; left: -5px; top: 4px; background: #b3261e; border: 1.5px solid #ffffff; box-shadow: 0 1px 2px rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15); border-radius: 100px; color: ffffff; font-family: 'Google Sans Text'; font-style: normal; font-weight: 700; font-size: 11px; line-height: 14px; min-width: 16px; height: 16px; display: flex; flex-direction: row; justify-content: center; align-items: center;}.ft-separator {display: block; width: 100%; height: " +
            X(e) + "px;}.ft-separator > span {display: block; width: 28px; margin: 0 auto 10px auto; height: 0; border-bottom: 1px solid #dadce0;}.ft-expand-toggle-container {height: " + X(d) + "px;}.ft-hidden {transition: opacity 0.25s, visibility 0.5s 0s; opacity: 0; visibility: hidden;}:not(.ft-hidden) {transition: opacity 0.25s; opacity: 1;}.ft-collapsed .ft-collapsible, .ft-collapsible.ft-collapsed, .ft-expand-toggle-container.ft-collapsed {transition: opacity 0.25s, margin 0.25s 0.25s, height 0.25s 0.25s, overflow 0.25s 0s, visibility 1s 0s; height: 0; opacity: 0; overflow: hidden; visibility: hidden; margin: 0;}.ft-collapsible:not(.ft-collapsed *):not(.ft-collapsed), .ft-expand-toggle-container:not(.ft-collapsed) {transition: margin 0.25s, height 0.25s, opacity 0.25s 0.25s; opacity: 1;}.ft-symbol-font-load-test {position: fixed; left: -1000px; top: -1000px; font-size: 26px; visibility: hidden;}.ft-reg-bubble {position: absolute; bottom: 0; padding: 10px 10px 0 10px; background: #fff; box-shadow: 0 4px 8px 3px rgba(60, 64, 67, 0.15), 0 1px 3px rgba(60, 64, 67, 0.3); border-radius: " +
            X(16) + "px; max-width: calc(90vw - " + X(d * 2) + "px); width: 300px; height: 200px;}.ft-left-pos .ft-reg-bubble {left: " + X(d + 10 + a) + "px;}.ft-right-pos .ft-reg-bubble {right: " + X(d + 10 + a) + "px;}.ft-collapsed .ft-reg-bubble, .ft-reg-bubble.ft-collapsed {transition: width 0.25s ease-in 0.25s, height 0.25s ease-in 0.25s, opacity 0.05s linear 0.45s, overflow 0s 0.25s, visibility 0s 0.5s; width: 0; overflow: hidden; opacity: 0; visibility: hidden;}.ft-collapsed .ft-reg-bubble, .ft-reg-bubble.ft-no-messages {height: 0 !important;}.ft-reg-bubble:not(.ft-collapsed *):not(.ft-collapsed) {transition: width 0.25s ease-out, height 0.25s ease-out, opacity 0.05s linear;}.ft-reg-bubble-content {display: flex; flex-direction: row; max-width: calc(90vw - " +
            X(d * 2) + 'px); width: 300px;}.ft-collapsed .ft-reg-bubble-content {transition: opacity 0.25s; opacity: 0;}.ft-reg-bubble-content:not(.ft-collapsed *) {transition: opacity 0.25s 0.25s; opacity: 1;}.ft-reg-message-holder {flex-grow: 1; display: flex; flex-direction: column; height: auto;}.ft-reg-controls {flex-grow: 0; padding-left: 5px;}.ft-reg-bubble-close-icon {font-size: 16px;}.ft-reg-message {font-family: \'Google Sans Text\'; font-style: normal; font-weight: 400; font-size: 12px; line-height: 14px; padding-bottom: 5px; margin-bottom: 5px; border-bottom: 1px solid #dadce0;}.ft-reg-message:last-of-type {border-bottom: none;}.ft-reg-message-button {border: none; background: none; font-family: \'Google Sans Text\'; color: #0b57d0; font-weight: 500; font-size: 14px; line-height: 22px; cursor: pointer; margin: 0; padding: 0; text-align: start;}.ft-display-none {display: none;}</style><toolbar id="ft-floating-toolbar" class="ft-container ft-hidden"><div class="ft-menu"><div class="ft-button-holder"></div><div class="ft-separator ft-collapsible ft-collapsed"><span></span></div><div class="ft-bottom-button-holder"></div><div class="ft-expand-toggle-container"><button class="ft-expand-toggle ft-styless-button" aria-controls="ft-floating-toolbar" aria-label="' +
            Az(b) + '"><span class="google-symbols ft-expand-icon" aria-hidden="true">expand_more</span></button></div></div><div id="ft-reg-bubble" class="ft-reg-bubble ft-collapsed ft-no-messages"><div class="ft-reg-bubble-content"><div class="ft-reg-message-holder"></div><div class="ft-reg-controls"><button class="ft-reg-bubble-close ft-styless-button" aria-controls="ft-reg-bubble" aria-label="' + Az(c) + '"><span class="google-symbols ft-reg-bubble-close-icon" aria-hidden="true">close</span></button></div></div></div></toolbar><span inert class="ft-symbol-font-load-test"><span class="ft-symbol-reference google-symbols" aria-hidden="true">keyboard_double_arrow_right</span><span class="ft-text-reference" aria-hidden="true">keyboard_double_arrow_right</span></span>')
    }

    function VC(a) {
        const b = a.googleIconName,
            c = a.ariaLabel,
            d = a.backgroundColorCss,
            e = a.iconColorCss;
        a = a.hi;
        return rz('<div class="ft-button ft-collapsible ft-collapsed ft-last-button">' + ((a instanceof lz ? a.Ja() : a) ? "<style>@scope {" + X(a) + "}</style>" : "") + '<button class="ft-styless-button" aria-label="' + Az(c) + '" style="background-color: ' + Az(X(d)) + '"><span class="ft-highlighter"></span><span class="google-symbols" style="color: ' + Az(X(e)) + '" aria-hidden="true">' + pz(b) + '</span></button><span class="ft-button-corner-info"></span></div>')
    };
    const WC = ["Google Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200", "Google Sans Text:400,500,700"];

    function XC(a, b) {
        a = new YC(a, b, ZC(a, b));
        a.J();
        return a
    }

    function $C() {
        ({
            hc: a
        } = {
            hc: 2
        });
        var a;
        return a > 1 ? 50 : 120
    }

    function aD(a, b, c) {
        bD(a) === 0 && b.classList.remove("ft-collapsed");
        cD(b, c);
        to(a.win);
        b.classList.remove("ft-collapsed");
        dD(a);
        return () => void eD(a, b, c)
    }

    function fD(a) {
        gD(a.g.ka.Fc).length === 0 ? (a.l.P ? .Cj(), a.l.g(null), a.g.ka.Je.g(!1), a.g.ka.ug.g(!1), a.g.ka.Re.g(!1)) : (a.g.ka.Je.g(!0), hD(a))
    }

    function iD(a, {
        Ah: b = 0,
        ho: c = 0
    }) {
        b = Math.max(gD(a.g.Eb).length + b, 0);
        c = Math.max(gD(a.g.lb).length + c, 0);
        const d = b + c;
        let e = d * 50;
        b > 0 && c > 0 && (e += 11);
        e += Math.max(0, d - 1) * 10;
        d >= a.j.hc && (e += 60);
        d > 1 && (e += 10);
        return e
    }

    function bD(a) {
        const b = a.g.lb;
        return gD(a.g.Eb).length + gD(b).length
    }

    function dD(a) {
        const b = a.g.lb,
            c = a.g.separator;
        gD(a.g.Eb).length > 0 && gD(b).length > 0 ? c.classList.remove("ft-collapsed") : c.classList.add("ft-collapsed");
        bD(a) >= a.j.hc ? a.g.tg.g(!0) : a.g.tg.g(!1);
        bD(a) > 1 ? a.g.ng.g(!0) : a.g.ng.g(!1);
        bD(a) > 0 ? a.g.isVisible.g(!0) : a.g.isVisible.g(!1);
        jD(a);
        kD(a)
    }

    function eD(a, b, c) {
        b.classList.contains("ft-removing") || (b.classList.add("ft-removing"), b.classList.add("ft-collapsed"), dD(a), a.win.setTimeout(() => {
            c.removeChild(b)
        }, 750))
    }

    function jD(a) {
        const b = gD(a.g.Eb).concat(gD(a.g.lb));
        b.forEach(c => {
            c.classList.remove("ft-last-button")
        });
        bD(a) >= a.j.hc || b[b.length - 1] ? .classList.add("ft-last-button")
    }

    function kD(a) {
        const b = gD(a.g.Eb).concat(gD(a.g.lb)).filter(c => !c.classList.contains("ft-reg-button"));
        a.F.g(b.length > 0)
    }

    function lD(a) {
        go(a.g.ka.Fc.children, b => {
            const c = a.g.ka.Ic;
            eD(a, b, a.g.ka.Fc);
            const d = c.get(b);
            c.delete(b);
            d ? .isDismissed.g(!0)
        });
        fD(a)
    }

    function hD(a) {
        if (!a.l.P) {
            var b = mD(a.win, {
                googleIconName: "verified_user",
                ariaLabel: L(a.j.Oa, 2),
                orderingIndex: 0,
                onClick: () => {
                    a.g.ka.ug.g(!a.g.ka.isVisible.P);
                    for (const [, c] of a.g.ka.Ic) c.xg = !0;
                    a.g.ka.Re.g(!1)
                },
                backgroundColorCss: "#fff"
            });
            b.Sc.classList.add("ft-reg-button");
            aD(a, b.Sc, a.g.lb);
            Jo(b.Zi, a.g.ka.isVisible);
            a.l.g({
                no: b,
                Cj: () => void eD(a, b.Sc, a.g.lb)
            })
        }
    }

    function nD(a) {
        var b = a.g.ka.Re,
            c = b.g;
        a: {
            for ([, d] of a.g.ka.Ic)
                if (a = d, a.showUnlessUserInControl && !a.xg) {
                    var d = !0;
                    break a
                }
            d = !1
        }
        c.call(b, d)
    }

    function oD(a) {
        a.g.ka.Xh.listen(() => {
            lD(a)
        })
    }
    var YC = class extends Q {
        constructor(a, b, c) {
            super();
            this.win = a;
            this.j = b;
            this.g = c;
            this.l = new R(null);
            this.F = new R(!1)
        }
        addButton(a) {
            a = mD(this.win, a);
            return aD(this, a.Sc, this.g.Eb)
        }
        addRegulatoryMessage(a) {
            const b = this.g.ka.Fc,
                c = pD(this.win, a);
            cD(c.Ve, b);
            this.g.ka.Ic.set(c.Ve, c);
            fD(this);
            return {
                showUnlessUserInControl: () => {
                    c.showUnlessUserInControl = !0;
                    nD(this)
                },
                hideUnlessUserInControl: () => {
                    c.showUnlessUserInControl = !1;
                    nD(this)
                },
                isDismissed: Lo(c.isDismissed),
                removeCallback: () => {
                    var d = c.Ve;
                    const e = this.g.ka.Fc;
                    d.parentNode === e && e.removeChild(d);
                    this.g.ka.Ic.delete(d);
                    fD(this)
                }
            }
        }
        H() {
            return Do(this.l.map(a => a != null))
        }
        B() {
            return Do(this.F)
        }
        A() {
            return [this.g.container]
        }
        i() {
            const a = this.g.bb.Za;
            a.parentNode ? .removeChild(a);
            super.i()
        }
        J() {
            tp(this.win, WC);
            Jo(this.g.Uj, this.j.Ec);
            this.win.document.body.appendChild(this.g.bb.Za);
            oD(this)
        }
    };

    function ZC(a, b) {
        const c = AA(a),
            d = c.shadowRoot;
        d.appendChild(re(new ce(a.document), mz(UC({
            Ci: L(b.Oa, 1),
            Yh: L(b.Oa, 3),
            Rh: 50,
            Mj: 11,
            Sh: 10,
            Qh: 5
        }))));
        const e = zA("ft-container", d),
            f = zA("ft-expand-toggle", d),
            h = zA("ft-expand-toggle-container", d),
            k = new R(null);
        k.i(q => {
            e.style.zIndex = String(q ? ? 2147483647)
        });
        const l = new R(!0);
        Go(l, !0, () => {
            e.classList.remove("ft-collapsed");
            f.setAttribute("aria-expanded", "true")
        });
        Go(l, !1, () => {
            e.classList.add("ft-collapsed");
            f.setAttribute("aria-expanded", "false")
        });
        f.addEventListener("click",
            () => {
                l.g(!l.P)
            });
        const m = new R(!1);
        Go(m, !0, () => {
            h.classList.remove("ft-collapsed");
            e.classList.add("ft-toolbar-collapsible")
        });
        Go(m, !1, () => {
            h.classList.add("ft-collapsed");
            e.classList.remove("ft-toolbar-collapsible");
            l.g(!0)
        });
        const n = new R(!1);
        Go(n, !0, () => {
            e.classList.add("ft-multiple-buttons")
        });
        Go(n, !1, () => {
            e.classList.remove("ft-multiple-buttons")
        });
        b.position.i(q => {
            if (q) {
                q.Mf(e.style);
                q = q.kg();
                switch (q) {
                    case 0:
                        e.classList.add("ft-left-pos");
                        e.classList.remove("ft-right-pos");
                        break;
                    case 1:
                        e.classList.add("ft-right-pos");
                        e.classList.remove("ft-left-pos");
                        break;
                    default:
                        throw Error(`Unknown HorizontalAnchoring: ${q}`);
                }
                to(a)
            }
        });
        const p = new R(!1);
        b = Co(qD(a, d), p, b.position.map(q => q !== null));
        Go(b, !0, () => {
            e.classList.remove("ft-hidden")
        });
        Go(b, !1, () => {
            e.classList.add("ft-hidden")
        });
        b = rD(a, zA("ft-reg-bubble", d));
        return {
            container: e,
            Eb: zA("ft-button-holder", d),
            lb: zA("ft-bottom-button-holder", d),
            separator: zA("ft-separator", d),
            bb: c,
            Uj: k,
            so: l,
            tg: m,
            ng: n,
            isVisible: p,
            ka: b
        }
    }

    function rD(a, b) {
        const c = new R(!1),
            d = new R(!1),
            e = Eo(c, d);
        Go(e, !0, () => {
            b.classList.remove("ft-collapsed")
        });
        Go(e, !1, () => {
            b.classList.add("ft-collapsed")
        });
        const f = new R(!1);
        Go(f, !0, () => {
            b.classList.remove("ft-no-messages")
        });
        Go(f, !1, () => {
            b.classList.add("ft-no-messages")
        });
        const h = zA("ft-reg-bubble-close", b),
            k = new Po;
        h.addEventListener("click", () => {
            Oo(k)
        });
        const l = zA("ft-reg-message-holder", b);
        mp(jp(a, l)).i(() => {
            b.style.height = `${l.offsetHeight}px`
        });
        return {
            Fc: l,
            ug: c,
            Re: d,
            isVisible: e,
            Je: f,
            Ic: new Map,
            Xh: Mo(k)
        }
    }

    function mD(a, b) {
        const c = re(new ce(a.document), mz(VC({
            googleIconName: b.googleIconName,
            ariaLabel: b.ariaLabel,
            backgroundColorCss: b.backgroundColorCss || "#e2eaf6",
            iconColorCss: b.iconColorCss || "#3c4043",
            hi: b.buttonExtension ? .styleSheet
        })));
        if (b.cornerNumber !== void 0) {
            const d = od(Math.round(b.cornerNumber), 0, 99);
            zA("ft-button-corner-info", c).appendChild(a.document.createTextNode(String(d)));
            c.classList.add("ft-show-corner-info")
        }
        c.orderingIndex = b.orderingIndex;
        b.onClick && yA("BUTTON", c).addEventListener("click", b.onClick);
        a = new R(!1);
        Go(a, !0, () => {
            c.classList.add("ft-highlighted")
        });
        Go(a, !1, () => {
            c.classList.remove("ft-highlighted")
        });
        return {
            Sc: c,
            Zi: a
        }
    }

    function pD(a, b) {
        a = new ce(a.document);
        var c = rz('<div class="ft-reg-message"><button class="ft-reg-message-button"></button><div class="ft-reg-message-info"></div></div>');
        a = re(a, mz(c));
        c = zA("ft-reg-message-button", a);
        b.regulatoryMessage.actionButton ? (c.appendChild(b.regulatoryMessage.actionButton.buttonText), c.addEventListener("click", b.regulatoryMessage.actionButton.onClick)) : c.classList.add("ft-display-none");
        c = zA("ft-reg-message-info", a);
        b.regulatoryMessage.informationText ? c.appendChild(b.regulatoryMessage.informationText) :
            c.classList.add("ft-display-none");
        a.orderingIndex = b.orderingIndex;
        return {
            Ve: a,
            showUnlessUserInControl: !1,
            xg: !1,
            isDismissed: new R(!1)
        }
    }

    function cD(a, b) {
        a: {
            var c = Array.from(b.children);
            for (let d = 0; d < c.length; ++d)
                if (c[d].orderingIndex >= a.orderingIndex) {
                    c = d;
                    break a
                }
            c = c.length
        }
        b.insertBefore(a, b.childNodes[c] || null)
    }

    function gD(a) {
        return Array.from(a.children).filter(b => !b.classList.contains("ft-removing"))
    }

    function qD(a, b) {
        const c = new R(!1),
            d = zA("ft-symbol-font-load-test", b);
        b = zA("ft-symbol-reference", d);
        const e = zA("ft-text-reference", d),
            f = jp(a, b);
        Ho(mp(f).map(h => h.width > 0 && h.width < e.offsetWidth / 2), !0, () => {
            c.g(!0);
            d.parentNode ? .removeChild(d);
            f.dispose()
        });
        return c
    };

    function sD(a) {
        const b = new Po,
            c = $o(a, 2500, () => void Oo(b));
        return new tD(a, () => void uD(a, () => void c()), Mo(b))
    }

    function vD(a) {
        const b = new MutationObserver(() => {
            a.g()
        });
        b.observe(a.win.document.documentElement, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "style"]
        });
        wo(a, () => void b.disconnect())
    }

    function wD(a) {
        a.win.addEventListener("resize", a.g);
        wo(a, () => void a.win.removeEventListener("resize", a.g))
    }
    var tD = class extends Q {
        constructor(a, b, c) {
            super();
            this.win = a;
            this.g = b;
            this.l = c;
            this.j = !1
        }
    };

    function uD(a, b) {
        b();
        a.setTimeout(b, 1500)
    };

    function xD(a) {
        return a.g[a.g.length - 1]
    }
    var zD = class {
        constructor() {
            this.j = yD;
            this.g = [];
            this.i = new Set
        }
        add(a) {
            if (this.i.has(a)) return !1;
            const b = kb(this.g, a, this.j);
            this.g.splice(b >= 0 ? b : -b - 1, 0, a);
            this.i.add(a);
            return !0
        }
        first() {
            return this.g[0]
        }
        has(a) {
            return this.i.has(a)
        }
        delete(a) {
            cb(this.g, b => b === a);
            return this.i.delete(a)
        }
        clear() {
            this.i.clear();
            return this.g.splice(0, this.g.length)
        }
        size() {
            return this.g.length
        }
    };

    function AD(a) {
        var b = a.Dc.P;
        let c;
        for (; a.j.fi() > b && (c = a.i.first());) {
            var d = a,
                e = c;
            BD(d, e);
            d.g.add(e)
        }
        for (;
            (d = xD(a.g)) && a.j.Oi() <= b;) CD(a, d);
        for (;
            (d = xD(a.g)) && (c = a.i.first()) && d.priority > c.priority;) b = a, e = c, BD(b, e), b.g.add(e), CD(a, d)
    }

    function CD(a, b) {
        a.g.delete(b);
        a.i.add(b) && (b.wf = a.j.addButton(b.buttonSpec));
        b.isInToolbar.g(!0)
    }

    function BD(a, b) {
        b.wf && b.wf();
        b.wf = void 0;
        a.i.delete(b);
        b.isInToolbar.g(!1)
    }
    var DD = class {
        constructor(a, b) {
            this.Dc = a;
            this.j = b;
            this.g = new zD;
            this.i = new zD;
            this.l = 0;
            this.Dc.listen(() => void AD(this))
        }
        addButton(a) {
            const b = {
                buttonSpec: a.buttonSpec,
                priority: a.priority,
                Cf: this.l++,
                isInToolbar: new R(!1)
            };
            this.g.add(b);
            AD(this);
            return {
                isInToolbar: Lo(Do(b.isInToolbar)),
                removeCallback: () => {
                    BD(this, b);
                    this.g.delete(b);
                    AD(this)
                }
            }
        }
    };

    function yD(a, b) {
        return a.priority === b.priority ? b.Cf - a.Cf : a.priority - b.priority
    };

    function ED(a) {
        if (!a.g) {
            const b = zC(a.win);
            a.g = Do(b.j);
            vo(a, b)
        }
        return a.g
    }

    function FD(a, b, c) {
        const d = a.j.addRegulatoryMessage(b.messageSpec);
        b.messageSpec.regulatoryMessage.disableFloatingToolbarAutoShow || GD(a, d, c);
        Ho(c, !0, () => {
            d.removeCallback()
        })
    }

    function GD(a, b, c) {
        a = ED(a);
        const d = Go(a, !0, () => void b.showUnlessUserInControl()),
            e = Go(a, !1, () => void b.hideUnlessUserInControl());
        Go(Ao(b.isDismissed), !0, () => {
            d();
            e()
        });
        Ho(c, !0, () => {
            d();
            e()
        })
    }
    var HD = class extends Q {
        constructor(a, b) {
            super();
            this.win = a;
            this.j = b;
            this.g = null
        }
        addRegulatoryMessage(a) {
            const b = new R(!1),
                c = Ho(ED(this), !0, () => {
                    FD(this, a, b)
                });
            return {
                removeCallback: () => {
                    b.g(!0);
                    c()
                }
            }
        }
    };

    function ID(a, b) {
        a.googFloatingToolbarManager || (a.googFloatingToolbarManager = new JD(a, b));
        return a.googFloatingToolbarManager
    }

    function KD(a) {
        a.g || (a.g = LD(a.win, a.Hb, a.Ec), vo(a, a.g.Ib), vo(a, a.g.Tg), MD(a), ND(a, a.g.Ib));
        return a.g
    }

    function OD(a) {
        var b = [];
        a.g ? .Ib ? .B().A() ? (b.push(() => PD(a)), b.push(() => QD(a))) : (b.push(() => QD(a)), b.push(() => PD(a)));
        a.g ? .Ib ? .H() ? .A() && b.push(() => {
            const c = Tn(a.win);
            return {
                position: QC({
                    ga: Math.floor(c / 3),
                    sa: 10
                }),
                Dc: 0
            }
        });
        for (const c of b)
            if (b = c()) return b;
        return null
    }

    function MD(a) {
        a.Ec.P === null && a.g ? .position.g(OD(a))
    }

    function ND(a, b) {
        const c = sD(a.win);
        c.j || (vD(c), wD(c), c.j = !0);
        c.l.listen(() => void MD(a));
        vo(a, c);
        b.H().listen(() => void MD(a));
        b.B().listen(() => void MD(a));
        a.Ec.listen(() => void MD(a))
    }

    function PD(a) {
        var b = a.win;
        const c = Tn(a.win);
        return MC(b, {
            Tb: SC({
                ga: 50,
                Ca: 10
            }),
            Ue: Math.floor(c / 3),
            Ab: 60,
            Xe: $C(),
            Cd: Math.floor(c / 2),
            mb: 20
        }, [...(a.g ? .Ib.A() ? ? []), a.win.document.body]).me
    }

    function QD(a) {
        var b = a.win;
        const c = Tn(a.win);
        return MC(b, {
            Tb: QC({
                ga: 50,
                sa: 10
            }),
            Ue: Math.floor(c / 3),
            Ab: 60,
            Xe: $C(),
            Cd: Math.floor(c / 2),
            mb: 40
        }, [...(a.g ? .Ib.A() ? ? []), a.win.document.body]).me
    }
    class JD extends Q {
        constructor(a, b) {
            super();
            this.win = a;
            this.Hb = b;
            this.g = null;
            this.Ec = RD(this.win, this)
        }
        addButton(a) {
            return KD(this).oj.addButton(a)
        }
        addRegulatoryMessage(a) {
            return KD(this).Tg.addRegulatoryMessage(a)
        }
    }

    function LD(a, b, c) {
        const d = new R(null),
            e = XC(a, {
                hc: 2,
                position: d.map(f => f ? .position ? ? null),
                Oa: b,
                Ec: c
            });
        b = new DD(d.map(f => f ? .Dc || 0), {
            addButton: f => e.addButton(f),
            fi: () => iD(e, {}),
            Oi: () => iD(e, {
                Ah: 1
            })
        });
        a = new HD(a, {
            addRegulatoryMessage: f => e.addRegulatoryMessage(f)
        });
        return {
            Ib: e,
            position: d,
            oj: b,
            Tg: a
        }
    }

    function RD(a, b) {
        const c = new hA(a),
            d = new R(null),
            e = f => void d.g(f);
        wo(b, () => {
            gA(c, e)
        });
        c.g.maxZIndexListeners.push(e);
        d.g(fA(c));
        return d
    };
    const SD = ["Google Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200", "Google Sans Text:400,500"];

    function TD(a, b, c, d, e) {
        a = new UD(a, b, c, d, e);
        if (a.l) {
            tp(a.win, SD);
            var f = a.win;
            b = a.message;
            c = AA(f);
            e = c.shadowRoot;
            d = e.appendChild;
            f = new ce(f.document);
            var h = rz('<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Google+Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/><link href="https://fonts.googleapis.com/css?family=Google+Sans+Text:400,500" rel="stylesheet"><style>.ipr-container {font-family: \'Google Sans Text\'; font-style: normal; font-weight: 400; font-size: 12px; line-height: 14px; color: #000; border-top: 2px solid rgb(236, 237, 237); border-bottom: 2px solid rgb(236, 237, 237); background-color: #fff; padding: 5px; margin: 5px 0; text-align: center;}.ipr-button {border: none; background: none; font-family: \'Google Sans Text\'; color: #0b57d0; font-weight: 500; font-size: 14px; line-height: 22px; cursor: pointer; margin: 0; padding: 0;}.ipr-display-none {display: none;}</style><div class="ipr-container"><button class="ipr-button"></button><div class="ipr-info"></div></div>');
            d.call(e,
                re(f, mz(h)));
            d = zA("ipr-container", e);
            e = zA("ipr-button", d);
            b.actionButton ? (e.appendChild(b.actionButton.buttonText), e.addEventListener("click", b.actionButton.onClick)) : e.classList.add("ipr-display-none");
            d = zA("ipr-info", d);
            b.informationText ? d.appendChild(b.informationText) : d.classList.add("ipr-display-none");
            a.g = c.Za;
            Lv(a.l, a.g);
            a.j && a.j(bm(1));
            VD(a)
        } else WD(a);
        return a
    }

    function VD(a) {
        const b = new wp(a.win);
        b.J(2E3);
        vo(a, b);
        up(b, () => {
            XD(a);
            WD(a);
            b.dispose()
        })
    }

    function WD(a) {
        const b = ID(a.win, a.Hb).addRegulatoryMessage({
            messageSpec: {
                regulatoryMessage: a.message,
                orderingIndex: 0
            }
        });
        wo(a, () => void b.removeCallback());
        a.j && a.j(bm(2))
    }

    function XD(a) {
        a.g && (a.g.parentNode ? .removeChild(a.g), a.g = null)
    }
    var UD = class extends Q {
        constructor(a, b, c, d, e) {
            super();
            this.win = a;
            this.l = b;
            this.message = c;
            this.Hb = d;
            this.j = e;
            this.g = null
        }
        i() {
            XD(this);
            super.i()
        }
    };
    var $D = (a, b, c, d, e) => U(Fr) ? YD(a, b, d, e) : ZD(a, b, c, d, e);

    function ZD(a, b, c, d, e) {
        const f = new JC(a, jC(a, e), new iC(b, d, "#FFF", "#4A4A4A", "normal"), new aC(b, c, d), "google-dns-link-placeholder");
        f.J();
        return () => f.i()
    }

    function YD(a, b, c, d) {
        const e = TD(a, jC(a, d), {
            actionButton: {
                buttonText: a.document.createTextNode(b),
                onClick: c
            }
        }, aE(a));
        return () => e.dispose()
    }

    function aE(a) {
        if (a = eC(a)) return a;
        W.ba(1234, Error("No messages"), void 0, void 0);
        return (new Dq).i()
    };

    function bE(a, b) {
        b && (a.i = $D(a.g, b.localizedDnsText, b.localizedDnsCollapseText, () => cE(a, b), a.l))
    }

    function dE(a) {
        var b = cC(a.g);
        if (eE(b.getInitialCcpaStatus(), b.InitialCcpaStatusEnum)) {
            var c = b.getLocalizedDnsText();
            b = b.getLocalizedDnsCollapseText();
            c != null && b != null && (a.i = $D(a.g, c, b, () => fE(a), a.l))
        }
    }

    function gE(a) {
        const b = bC(a.g);
        b.callbackQueue = b.callbackQueue || [];
        U(Or) ? (dC(a.g).overrideDnsLink = !0, b.callbackQueue.push({
            INITIAL_US_STATES_DATA_READY: c => bE(a, c)
        })) : (cC(a.g).overrideDnsLink = !0, b.callbackQueue.push({
            INITIAL_CCPA_DATA_READY: () => dE(a)
        }))
    }

    function fE(a) {
        iA(a.j);
        cC(a.g).openConfirmationDialog(b => hE(a, b))
    }

    function cE(a, b) {
        iA(a.j);
        b.openConfirmationDialog(c => hE(a, c))
    }

    function hE(a, b) {
        b && a.i && (a.i(), a.i = null);
        jA(a.j)
    }
    class iE {
        constructor(a, b, c) {
            this.g = a;
            this.j = cA(b, 2147483643);
            this.l = c;
            this.i = null
        }
    }

    function eE(a, b) {
        switch (a) {
            case b.CCPA_DOES_NOT_APPLY:
            case b.OPTED_OUT:
                return !1;
            case b.NOT_OPTED_OUT:
                return !0;
            default:
                return !0
        }
    };

    function jE(a) {
        const b = a.document.createElement("ins");
        kE(a, b);
        v(b, {
            display: "flex",
            padding: "8px 0px",
            width: "100%"
        });
        return b
    }

    function lE(a, b, c, d) {
        const e = qe(be(a), "IMG");
        e.src = b;
        d && e.setAttribute("aria-label", d);
        kE(a, e);
        v(e, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        e.addEventListener("click", f => {
            c();
            f.stopPropagation()
        });
        return e
    }

    function mE(a, b) {
        const c = b.document.createElement("span");
        kE(b, c);
        v(c, {
            "line-height": "24px",
            cursor: "pointer"
        });
        c.appendChild(b.document.createTextNode(a.l));
        c.addEventListener("click", d => {
            a.i();
            d.stopPropagation()
        });
        return c
    }

    function nE(a, b) {
        const c = b.document.createElement("span");
        c.appendChild(b.document.createTextNode(a.j));
        v(c, pr(b));
        v(c, {
            "border-top": "11px solid #ECEDED",
            "font-family": "Arial,sans-serif",
            "font-size": "12px",
            "line-height": "1414px",
            padding: "8px 32px",
            "text-align": "center"
        });
        return c
    }

    function oE(a) {
        const b = a.document.createElement("div");
        v(b, pr(a));
        v(b, {
            "align-items": "flex-start",
            "background-color": "#FFF",
            "border-radius": "0px 20px 20px 0px",
            "box-shadow": "0px 1px 3px 1px rgba(60,64,67,0.5)",
            display: "inline-flex",
            "flex-direction": "column",
            "float": "left"
        });
        return b
    }
    class pE {
        constructor(a, b, c, d) {
            this.l = a;
            this.A = b;
            this.j = c;
            this.i = d;
            this.g = new R(!1)
        }
        Ja(a, b, c, d) {
            c = jE(a);
            const e = lE(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", d),
                f = lE(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", this.i),
                h = mE(this, a),
                k = lE(a, "https://www.gstatic.com/adsense/autoads/icons/close_24px_grey_700.svg", b, this.A);
            v(k, {
                "margin-left": "auto"
            });
            c.appendChild(e);
            c.appendChild(f);
            c.appendChild(h);
            c.appendChild(k);
            const l = nE(this, a);
            a = oE(a);
            a.appendChild(c);
            a.appendChild(l);
            this.g.listen(m => {
                v(e, {
                    display: m ? "none" : "inline"
                });
                v(f, {
                    display: m ? "inline" : "none"
                });
                m ? (v(h, {
                        "line-height": "24px",
                        "max-width": "100vw",
                        opacity: "1",
                        transition: "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms"
                    }), v(k, {
                        "margin-right": "12px",
                        opacity: 1,
                        width: "24px",
                        transition: "margin 50ms, opacity 50ms 50ms, width 50ms"
                    }), v(l, {
                        "border-width": "1px",
                        "line-height": "14px",
                        "max-width": "100vw",
                        opacity: "1",
                        padding: "8px 32px",
                        transition: "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms, padding 50ms"
                    })) :
                    (v(h, {
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        transition: "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms"
                    }), v(k, {
                        "margin-right": "0",
                        opacity: "0",
                        width: "0",
                        transition: "margin 50ms 50ms, opacity 50ms, width 50ms 50ms"
                    }), v(l, {
                        "border-width": "0px",
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        padding: "0",
                        transition: "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms, padding 50ms 50ms"
                    }))
            }, !0);
            return a
        }
        jg() {
            return 71
        }
        Gg() {
            this.g.g(!1);
            return 0
        }
        Hg() {
            this.g.g(!0)
        }
    }

    function kE(a, b) {
        v(b, pr(a));
        v(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#1A73E8",
            "user-select": "none"
        })
    };

    function qE(a) {
        rE(a.j, b => {
                var c = a.i,
                    d = b.Jj,
                    e = b.Zh,
                    f = b.Gh;
                b = b.showRevocationMessage;
                var h = a.l;
                U(Hr) ? (e = jC(c, h), d = {
                    actionButton: {
                        buttonText: c.document.createTextNode(d),
                        onClick: b
                    },
                    informationText: c.document.createTextNode(f)
                }, f = eC(c), f || (W.ba(1233, Error("No messages"), void 0, void 0), f = (new Dq).i()), TD(c, e, d, f)) : (new JC(c, jC(c, h), new iC(d, b, "#1A73E8", "#FFF", "bold", "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_blue_600.svg", "2px solid #ECEDED", f), new pE(d, e, f, b), "google-revocation-link-placeholder")).J()
            },
            () => {
                jA(a.g);
                sE(a)
            })
    }

    function tE(a) {
        iA(a.g);
        qE(a)
    }

    function sE(a) {
        U(Gr) && (a.i.__tcfapi ? a.i.__tcfapi("addEventListener", 2, (b, c) => {
            c && b.eventStatus == "cmpuishown" ? iA(a.g) : jA(a.g)
        }) : W.ba(1250, Error("No TCF API function"), void 0, void 0))
    }
    class uE {
        constructor(a, b, c, d) {
            this.i = a;
            this.g = cA(b, 2147483643);
            this.l = c;
            this.j = d
        }
    };
    var vE = a => {
            if (!a || ki(a, 1) == null) return !1;
            a = ki(a, 1);
            switch (a) {
                case 1:
                    return !0;
                case 2:
                    return !1;
                default:
                    throw Error("Unhandled AutoConsentUiStatus: " + a);
            }
        },
        wE = a => {
            if (!a || ki(a, 3) == null) return !1;
            a = ki(a, 3);
            switch (a) {
                case 1:
                    return !0;
                case 2:
                    return !1;
                default:
                    throw Error("Unhandled AutoCcpaUiStatus: " + a);
            }
        },
        xE = a => a ? ii(a, 5) === !0 : !1,
        yE = a => a ? ii(a, 6) === !0 : !1;

    function zE() {
        return "m202407230101"
    };

    function AE(a) {
        let b = a.location.href;
        if (a === a.top) return {
            url: b,
            Te: !0
        };
        let c = !1;
        const d = a.document;
        d && d.referrer && (b = d.referrer, a.parent === a.top && (c = !0));
        (a = a.location.ancestorOrigins) && (a = a[a.length - 1]) && b.indexOf(a) === -1 && (c = !1, b = a);
        return {
            url: b,
            Te: c
        }
    };

    function BE(a, b) {
        Fe(a, (c, d) => {
            b[d] = c
        })
    }

    function CE(a) {
        if (a === a.top) return 0;
        for (let b = a; b && b !== b.top && xe(b); b = b.parent) {
            if (a.sf_) return 2;
            if (a.$sf) return 3;
            if (a.inGptIF) return 4;
            if (a.inDapIF) return 5
        }
        return 1
    };

    function DE() {
        if (EE) return EE;
        const a = Oj() || window,
            b = a.google_persistent_state_async;
        return b != null && typeof b == "object" && b.S != null && typeof b.S == "object" ? EE = b : a.google_persistent_state_async = EE = new FE
    }

    function GE(a, b, c) {
        b = HE[b] || `google_ps_${b}`;
        a = a.S;
        const d = a[b];
        return d === void 0 ? (a[b] = c(), a[b]) : d
    }

    function IE(a, b, c) {
        return GE(a, b, () => c)
    }

    function JE(a, b, c) {
        return a.S[HE[b] || `google_ps_${b}`] = c
    }

    function KE(a, b) {
        return JE(a, b, IE(a, b, 0) + 1)
    }

    function LE() {
        var a = DE();
        return IE(a, 20, {})
    }

    function ME() {
        var a = DE();
        const b = IE(a, 31, !1);
        b || JE(a, 31, !0);
        return !b
    }

    function NE() {
        var a = DE();
        const b = IE(a, 41, !1);
        b || JE(a, 41, !0);
        return !b
    }

    function OE() {
        var a = DE();
        return IE(a, 26)
    }

    function PE() {
        var a = DE();
        return IE(a, 28, [])
    }

    function QE() {
        var a = DE();
        return GE(a, 39, RE)
    }
    var FE = class {
            constructor() {
                this.S = {}
            }
        },
        EE = null;
    const HE = {
        [8]: "google_prev_ad_formats_by_region",
        [9]: "google_prev_ad_slotnames_by_region"
    };

    function SE(a) {
        return a.google_ad_modifications = a.google_ad_modifications || {}
    }

    function TE(a, b) {
        a = SE(a);
        a.processed_sra_frame_pingbacks = a.processed_sra_frame_pingbacks || {};
        const c = !a.processed_sra_frame_pingbacks[b];
        a.processed_sra_frame_pingbacks[b] = !0;
        return c
    };
    var UE = {
        google_ad_block: "ad_block",
        google_ad_client: "client",
        google_ad_intent_query: "ait_q",
        google_ad_output: "output",
        google_ad_callback: "callback",
        google_ad_height: "h",
        google_ad_resize: "twa",
        google_ad_slot: "slotname",
        google_ad_unit_key: "adk",
        google_ad_dom_fingerprint: "adf",
        google_ad_intent_qetid: "aiqeid",
        google_placement_id: "pi",
        google_daaos_ts: "daaos",
        google_erank: "epr",
        google_ad_width: "w",
        abgtt: "abgtt",
        google_captcha_token: "captok",
        google_content_recommendation_columns_num: "cr_col",
        google_content_recommendation_rows_num: "cr_row",
        google_ctr_threshold: "ctr_t",
        google_cust_criteria: "cust_params",
        gfwrnwer: "fwrn",
        gfwrnher: "fwrnh",
        google_image_size: "image_size",
        google_last_modified_time: "lmt",
        google_loeid: "loeid",
        google_max_num_ads: "num_ads",
        google_max_radlink_len: "max_radlink_len",
        google_mtl: "mtl",
        google_native_settings_key: "nsk",
        google_enable_content_recommendations: "ecr",
        google_num_radlinks: "num_radlinks",
        google_num_radlinks_per_unit: "num_radlinks_per_unit",
        google_pucrd: "pucrd",
        google_reactive_plaf: "plaf",
        google_reactive_plat: "plat",
        google_reactive_fba: "fba",
        google_reactive_sra_channels: "plach",
        google_responsive_auto_format: "rafmt",
        armr: "armr",
        google_plas: "plas",
        google_rl_dest_url: "rl_dest_url",
        google_rl_filtering: "rl_filtering",
        google_rl_mode: "rl_mode",
        google_rt: "rt",
        google_video_play_muted: "vpmute",
        google_source_type: "src_type",
        google_restrict_data_processing: "rdp",
        google_tag_for_child_directed_treatment: "tfcd",
        google_tag_for_under_age_of_consent: "tfua",
        google_tag_origin: "to",
        google_ad_semantic_area: "sem",
        google_tfs: "tfs",
        google_package: "pwprc",
        google_tag_partner: "tp",
        fra: "fpla",
        google_ml_rank: "mlr",
        google_apsail: "psa",
        google_ad_channel: "channel",
        google_ad_type: "ad_type",
        google_ad_format: "format",
        google_color_bg: "color_bg",
        google_color_border: "color_border",
        google_color_link: "color_link",
        google_color_text: "color_text",
        google_color_url: "color_url",
        google_page_url: "url",
        google_ad_section: "region",
        google_cpm: "cpm",
        google_encoding: "oe",
        google_safe: "adsafe",
        google_font_face: "f",
        google_font_size: "fs",
        google_hints: "hints",
        google_ad_host: "host",
        google_ad_host_channel: "h_ch",
        google_ad_host_tier_id: "ht_id",
        google_kw_type: "kw_type",
        google_kw: "kw",
        google_contents: "contents",
        google_targeting: "targeting",
        google_adtest: "adtest",
        google_alternate_color: "alt_color",
        google_alternate_ad_url: "alternate_ad_url",
        google_cust_age: "cust_age",
        google_cust_gender: "cust_gender",
        google_cust_l: "cust_l",
        google_cust_lh: "cust_lh",
        google_language: "hl",
        google_city: "gcs",
        google_country: "gl",
        google_region: "gr",
        google_content_recommendation_ad_positions: "ad_pos",
        google_content_recommendation_ui_type: "crui",
        google_content_recommendation_use_square_imgs: "cr_sq_img",
        sso: "sso",
        google_color_line: "color_line",
        google_disable_video_autoplay: "disable_video_autoplay",
        google_full_width_responsive_allowed: "fwr",
        google_full_width_responsive: "fwrattr",
        efwr: "efwr",
        google_pgb_reactive: "pra",
        rc: "rc",
        google_resizing_allowed: "rs",
        google_resizing_height: "rh",
        google_resizing_width: "rw",
        rpe: "rpe",
        google_responsive_formats: "resp_fmts",
        google_safe_for_responsive_override: "sfro",
        google_video_doc_id: "video_doc_id",
        google_video_product_type: "video_product_type",
        google_webgl_support: "wgl",
        easpi: "easpi",
        aihb: "aihb",
        asro: "asro",
        ailel: "ailel",
        aiael: "aiael",
        aicel: "aicel",
        aifxl: "aifxl",
        aiixl: "aiixl",
        slmct: "aslmct",
        samct: "asamct",
        aiict: "aiict",
        aigda: "aifgd",
        aipaq: "aipaq",
        vmsli: "itsi",
        dap: "dap",
        aiapm: "aiapm",
        aiapmi: "aiapmi",
        aiombap: "aiombap"
    };

    function VE(a) {
        return (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && RegExp("google_ad_client").test(a[1]) ? a[1] : null
    }

    function WE(a) {
        if (a = a.innerText || a.innerHTML)
            if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && RegExp("google_ad_client").test(a[1])) return a[1];
        return null
    }

    function XE(a) {
        switch (a) {
            case "true":
                return !0;
            case "false":
                return !1;
            case "null":
                return null;
            case "undefined":
                break;
            default:
                try {
                    const b = a.match(/^(?:'(.*)'|"(.*)")$/);
                    if (b) return b[1] || b[2] || "";
                    if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
                        const c = parseFloat(a);
                        return c === c ? c : void 0
                    }
                } catch (b) {}
        }
    };

    function wn(a, b) {
        a.g.size > 0 || YE(a);
        const c = a.g.get(0);
        c ? c.push(b) : a.g.set(0, [b])
    }

    function ZE(a, b, c, d) {
        Hb(b, c, d);
        wo(a, () => Ib(b, c, d))
    }

    function $E(a, b) {
        a.j !== 1 && (a.j = 1, a.g.size > 0 && aF(a, b))
    }

    function YE(a) {
        a.win.document.visibilityState ? ZE(a, a.win.document, "visibilitychange", b => {
            a.win.document.visibilityState === "hidden" && $E(a, b);
            a.win.document.visibilityState === "visible" && (a.j = 0)
        }) : "onpagehide" in a.win ? (ZE(a, a.win, "pagehide", b => {
            $E(a, b)
        }), ZE(a, a.win, "pageshow", () => {
            a.j = 0
        })) : ZE(a, a.win, "beforeunload", b => {
            $E(a, b)
        })
    }

    function aF(a, b) {
        for (let c = 9; c >= 0; c--) a.g.get(c) ? .forEach(d => {
            d(b)
        })
    }
    var bF = class extends Q {
        constructor(a) {
            super();
            this.win = a;
            this.j = 0;
            this.g = new Map
        }
    };
    async function cF(a, b) {
        var c = 10;
        return c <= 0 ? Promise.reject(Error(`wfc bad input ${c} ${200}`)) : b() ? Promise.resolve() : new Promise((d, e) => {
            const f = a.setInterval(() => {
                --c ? b() && (a.clearInterval(f), d()) : (a.clearInterval(f), e(Error(`wfc timed out ${c}`)))
            }, 200)
        })
    };

    function dF(a) {
        const b = a.g.pc;
        return b !== null && b !== 0 ? b : a.g.pc = ff(a.win)
    }

    function eF(a) {
        var b = a.g.wpc;
        if (b === null || b === "") {
            b = a.g;
            var c = a.win;
            if (c.google_ad_client) a = String(c.google_ad_client);
            else {
                if ((a = SE(c).head_tag_slot_vars ? .google_ad_client ? ? c.document.querySelector(".adsbygoogle[data-ad-client]") ? .getAttribute("data-ad-client")) == null)
                    if (U(rt)) a = "";
                    else {
                        b: {
                            a = c.document.getElementsByTagName("script");c = c.navigator && c.navigator.userAgent || "";c = RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube", "i").test(c) ||
                            /i(phone|pad|pod)/i.test(c) && /applewebkit/i.test(c) && !/version|safari/i.test(c) && !jk() ? VE : WE;
                            for (var d = a.length - 1; d >= 0; d--) {
                                var e = a[d];
                                if (!e.google_parsed_script_for_pub_code && (e.google_parsed_script_for_pub_code = !0, e = c(e))) {
                                    a = e;
                                    break b
                                }
                            }
                            a = null
                        }
                        if (a) {
                            c = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
                            for (d = {}; e = c.exec(a);) d[e[1]] = XE(e[2]);
                            a = d;
                            a = a.google_ad_client ? a.google_ad_client : ""
                        } else a = ""
                    }
                a = a ? ? ""
            }
            b = b.wpc = a
        }
        return b
    }

    function fF(a, b) {
        var c = new $m;
        var d = dF(a);
        c = Di(c, 1, d);
        c = Zm(c.Ub(eF(a)), a.g.sd);
        return Di(c, 7, Math.round(b || a.win.performance.now()))
    }
    async function gF(a) {
        await cF(a.win, () => !(!dF(a) || !eF(a)))
    }

    function hF() {
        var a = P(iF);
        a.i && (a.g.tar += 1)
    }

    function jF(a) {
        var b = P(iF);
        if (b.i) {
            var c = b.l;
            a(c);
            b.g.cc = Ii(c)
        }
    }
    async function kF(a, b, c) {
        if (a.i && c.length && !a.g.lgdp.includes(Number(b))) {
            a.g.lgdp.push(Number(b));
            var d = a.win.performance.now();
            await gF(a);
            var e = a.ta;
            a = fF(a, d);
            d = new Ql;
            b = N(d, 1, b);
            c = Th(b, 2, c, zg);
            c = E(a, 9, an, c);
            qn(e, c)
        }
    }
    async function lF(a, b) {
        await gF(a);
        var c = fF(a);
        b = E(c, 5, an, b);
        a.i && !a.g.le.includes(2) && (a.g.le.push(2), qn(a.ta, b))
    }
    async function mF(a, b, c) {
        await gF(a);
        var d = a.ta;
        a = Zm(fF(a, c), 1);
        b = E(a, 6, an, b);
        qn(d, b)
    }
    async function nF(a, b) {
        await gF(a);
        var c = a.ta;
        a = Zm(fF(a), 1);
        b = E(a, 13, an, b);
        qn(c, b)
    }
    async function oF(a, b) {
        if (a.i) {
            await gF(a);
            var c = a.ta;
            a = fF(a);
            b = E(a, 11, an, b);
            qn(c, b)
        }
    }
    var iF = class {
        constructor(a, b) {
            this.win = Oj() || window;
            this.j = b ? ? new bF(this.win);
            this.ta = a ? ? new yn(zE(), 100, 100, !0, this.j);
            this.g = GE(DE(), 33, () => {
                const c = V(Er);
                return {
                    sd: c,
                    ssp: c > 0 && Ee() < 1 / c,
                    pc: null,
                    wpc: null,
                    cu: null,
                    le: [],
                    lgdp: [],
                    psi: null,
                    tar: 0,
                    cc: null
                }
            })
        }
        get i() {
            return this.g.ssp
        }
        get Zc() {
            return this.g.cu
        }
        set Zc(a) {
            this.g.cu = a
        }
        get l() {
            return mw(1227, () => Ji(Rl, sh(this.g.cc || []))) || new Rl
        }
    };

    function pF(a) {
        var b = new qF;
        return ti(b, 1, a)
    }
    var qF = class extends O {
        constructor() {
            super()
        }
    };

    function rF(a) {
        if (a.i.adsbygoogle_ama_fc_has_run !== !0) {
            var b = vE(a.g),
                c = wE(a.g),
                d = !1;
            b && (tE(new uE(a.i, a.A, a.l || di(a.g, Lq, 4, y(kg)), a.j)), d = !0);
            c && (gE(new iE(a.i, a.A, a.l || di(a.g, Lq, 4, y(kg)))), d = !0);
            jF(h => {
                h = M(h, 9, !0);
                h = M(h, 10, b);
                M(h, 11, c)
            });
            var e = xE(a.g),
                f = yE(a.g) || U(qs);
            e && (d = !0);
            d && (d = pF(e && f), a.j.start(U(Ar), d), a.i.adsbygoogle_ama_fc_has_run = !0)
        }
    }
    class sF {
        constructor(a, b, c, d, e) {
            this.i = a;
            this.j = b;
            this.g = c;
            this.A = d;
            this.l = e || null
        }
    };

    function tF(a, b, c, d, e, f) {
        try {
            const h = a.g,
                k = Ce("SCRIPT", h);
            k.async = !0;
            xd(k, b);
            h.head.appendChild(k);
            k.addEventListener("load", () => {
                e();
                d && h.head.removeChild(k)
            });
            k.addEventListener("error", () => {
                c > 0 ? tF(a, b, c - 1, d, e, f) : (d && h.head.removeChild(k), f())
            })
        } catch (h) {
            f()
        }
    }

    function uF(a, b, c = () => {}, d = () => {}) {
        tF(be(a), b, 0, !1, c, d)
    };

    function vF(a = null) {
        a = a || r;
        return a.googlefc || (a.googlefc = {})
    };
    Mb(Jn).map(a => Number(a));
    Mb(Kn).map(a => Number(a));
    const wF = r.URL;

    function xF(a) {
        const b = c => encodeURIComponent(c).replace(/[!()~']|(%20)/g, d => ({
            "!": "%21",
            "(": "%28",
            ")": "%29",
            "%20": "+",
            "'": "%27",
            "~": "%7E"
        })[d]);
        return Array.from(a, c => b(c[0]) + "=" + b(c[1])).join("&")
    };

    function yF(a) {
        var b = (new wF(a.location.href)).searchParams;
        a = b.get("fcconsent");
        b = b.get("fc");
        return b === "alwaysshow" ? b : a === "alwaysshow" ? a : null
    }

    function zF(a) {
        const b = ["ab", "gdpr", "consent", "ccpa", "monetization"];
        return (a = (new wF(a.location.href)).searchParams.get("fctype")) && b.indexOf(a) !== -1 ? a : null
    }

    function AF(a) {
        var b = new wF(a),
            c = {
                search: "",
                hash: ""
            };
        a = {};
        b && (a.protocol = b.protocol, a.username = b.username, a.password = b.password, a.hostname = b.hostname, a.port = b.port, a.pathname = b.pathname, a.search = b.search, a.hash = b.hash);
        Object.assign(a, c);
        if (a.port && a.port[0] === ":") throw Error("port should not start with ':'");
        a.hash && a.hash[0] != "#" && (a.hash = "#" + a.hash);
        c.search ? c.search[0] != "?" && (a.search = "?" + c.search) : c.searchParams && (a.search = "?" + xF(c.searchParams), a.searchParams = void 0);
        b = "";
        a.protocol && (b += a.protocol +
            "//");
        c = a.username;
        var d = a.password;
        b = b + (c && d ? c + ":" + d + "@" : c ? c + "@" : d ? ":" + d + "@" : "") + (a.hostname || "");
        a.port && (b += ":" + a.port);
        b += a.pathname || "";
        b += a.search || "";
        b += a.hash || "";
        a = (new wF(b)).toString();
        a.charAt(a.length - 1) === "/" && (a = a.substring(0, a.length - 1));
        return a.toString().length <= 1E3 ? a : null
    };

    function BF(a, b) {
        const c = a.document,
            d = () => {
                if (!a.frames[b])
                    if (c.body) {
                        const e = Ce("IFRAME", c);
                        e.style.display = "none";
                        e.style.width = "0px";
                        e.style.height = "0px";
                        e.style.border = "none";
                        e.style.zIndex = "-1000";
                        e.style.left = "-1000px";
                        e.style.top = "-1000px";
                        e.name = b;
                        c.body.appendChild(e)
                    } else a.setTimeout(d, 5)
            };
        d()
    };
    var CF = Oi(class extends O {});

    function DF(a) {
        if (a.g) return a.g;
        a.I && a.I(a.j) ? a.g = a.j : a.g = Te(a.j, a.M);
        return a.g ? ? null
    }

    function EF(a) {
        a.l || (a.l = b => {
            try {
                var c = a.H ? a.H(b) : void 0;
                if (c) {
                    var d = c.df,
                        e = a.F.get(d);
                    e && (e.wj || a.F.delete(d), e.Pb ? .(e.li, c.payload))
                }
            } catch (f) {}
        }, Hb(a.j, "message", a.l))
    }

    function FF(a, b, c) {
        if (DF(a))
            if (a.g === a.j)(b = a.B.get(b)) && b(a.g, c);
            else {
                var d = a.A.get(b);
                if (d && d.Bc) {
                    EF(a);
                    var e = ++a.R;
                    a.F.set(e, {
                        Pb: d.Pb,
                        li: d.yd(c),
                        wj: b === "addEventListener"
                    });
                    a.g.postMessage(d.Bc(c, e), "*")
                }
            }
    }
    var GF = class extends Q {
        constructor(a, b, c, d) {
            super();
            this.M = b;
            this.I = c;
            this.H = d;
            this.B = new Map;
            this.R = 0;
            this.A = new Map;
            this.F = new Map;
            this.l = void 0;
            this.j = a
        }
        i() {
            delete this.g;
            this.B.clear();
            this.A.clear();
            this.F.clear();
            this.l && (Ib(this.j, "message", this.l), delete this.l);
            delete this.j;
            delete this.H;
            super.i()
        }
    };
    const HF = (a, b) => {
            const c = {
                cb: d => {
                    d = CF(d);
                    b.Ra({
                        jc: d
                    })
                }
            };
            b.spsp && (c.spsp = b.spsp);
            a = a.googlefc || (a.googlefc = {});
            a.__fci = a.__fci || [];
            a.__fci.push(b.command, c)
        },
        IF = {
            yd: a => a.Ra,
            Bc: (a, b) => ({
                __fciCall: {
                    callId: b,
                    command: a.command,
                    spsp: a.spsp || void 0
                }
            }),
            Pb: (a, b) => {
                a({
                    jc: b
                })
            }
        };

    function JF(a) {
        a = CF(a.data.__fciReturn);
        return {
            payload: a,
            df: mi(a, 1)
        }
    }

    function KF(a, b = !1) {
        if (b) return !1;
        a.j || (a.g = !!DF(a.caller), a.j = !0);
        return a.g
    }

    function LF(a) {
        return new Promise(b => {
            KF(a) && FF(a.caller, "getDataWithCallback", {
                command: "loaded",
                Ra: c => {
                    b(c.jc)
                }
            })
        })
    }

    function MF(a, b) {
        KF(a) && FF(a.caller, "getDataWithCallback", {
            command: "prov",
            spsp: Hi(b),
            Ra: () => {}
        })
    }
    var NF = class extends Q {
        constructor(a) {
            super();
            this.g = this.j = !1;
            this.caller = new GF(a, "googlefcPresent", void 0, JF);
            this.caller.B.set("getDataWithCallback", HF);
            this.caller.A.set("getDataWithCallback", IF)
        }
        i() {
            this.caller.dispose();
            super.i()
        }
    };
    const OF = a => {
        a.addtlConsent !== void 0 && typeof a.addtlConsent !== "string" && (a.addtlConsent = void 0);
        a.gdprApplies !== void 0 && typeof a.gdprApplies !== "boolean" && (a.gdprApplies = void 0);
        return a.tcString !== void 0 && typeof a.tcString !== "string" || a.listenerId !== void 0 && typeof a.listenerId !== "number" ? 2 : a.cmpStatus && a.cmpStatus !== "error" ? 0 : 3
    };

    function PF(a) {
        if (a.gdprApplies === !1) return !0;
        a.internalErrorState === void 0 && (a.internalErrorState = OF(a));
        return a.cmpStatus === "error" || a.internalErrorState !== 0 ? a.internalBlockOnErrors ? (ij({
            e: String(a.internalErrorState)
        }, "tcfe"), !1) : !0 : a.cmpStatus !== "loaded" || a.eventStatus !== "tcloaded" && a.eventStatus !== "useractioncomplete" ? !1 : !0
    }

    function QF(a, b = {}) {
        return PF(a) ? a.gdprApplies === !1 ? !0 : a.tcString === "tcunavailable" ? !b.idpcApplies : (b.idpcApplies || a.gdprApplies !== void 0 || b.po) && (b.idpcApplies || typeof a.tcString === "string" && a.tcString.length) ? RF(a, "1", 0) : !0 : !1
    }

    function RF(a, b, c) {
        a: {
            if (a.publisher && a.publisher.restrictions) {
                var d = a.publisher.restrictions[b];
                if (d !== void 0) {
                    d = d["755"];
                    break a
                }
            }
            d = void 0
        }
        if (d === 0) return !1;
        let e = c;c === 2 ? (e = 0, d === 2 && (e = 1)) : c === 3 && (e = 1, d === 1 && (e = 0));
        if (e === 0) a = a.purpose && a.vendor ? (c = SF(a.vendor.consents, "755")) && b === "1" && a.purposeOneTreatment && a.publisherCC === "CH" ? !0 : c && SF(a.purpose.consents, b) : !0;
        else {
            var f;
            e === 1 ? f = a.purpose && a.vendor ? SF(a.purpose.legitimateInterests, b) && SF(a.vendor.legitimateInterests, "755") : !0 : f = !0;
            a = f
        }
        return a
    }

    function SF(a, b) {
        return !(!a || !a[b])
    }

    function TF(a, b, c) {
        return a.gdprApplies === !1 ? !0 : b.every(d => RF(a, d, c))
    }

    function UF(a) {
        if (a.g) return a.g;
        a.g = Te(a.j, "__tcfapiLocator");
        return a.g
    }

    function VF(a) {
        return typeof a.j.__tcfapi === "function" || UF(a) != null
    }

    function WF(a, b, c, d) {
        c || (c = () => {});
        if (typeof a.j.__tcfapi === "function") a = a.j.__tcfapi, a(b, 2, c, d);
        else if (UF(a)) {
            XF(a);
            const e = ++a.H;
            a.B[e] = c;
            a.g && a.g.postMessage({
                __tcfapiCall: {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }
            }, "*")
        } else c({}, !1)
    }

    function YF(a, b) {
        let c = {
            internalErrorState: 0,
            internalBlockOnErrors: a.A
        };
        const d = Bb(() => b(c));
        let e = 0;
        a.F !== -1 && (e = setTimeout(() => {
            e = 0;
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, a.F));
        WF(a, "addEventListener", f => {
            f && (c = f, c.internalErrorState = OF(c), c.internalBlockOnErrors = a.A, PF(c) ? (c.internalErrorState != 0 && (c.tcString = "tcunavailable"), WF(a, "removeEventListener", null, c.listenerId), (f = e) && clearTimeout(f), d()) : (c.cmpStatus === "error" || c.internalErrorState !== 0) && (f = e) && clearTimeout(f))
        })
    }

    function XF(a) {
        a.l || (a.l = b => {
            try {
                var c = (typeof b.data === "string" ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.B[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, Hb(a.j, "message", a.l))
    }
    class ZF extends Q {
        constructor(a, b = {}) {
            super();
            this.j = a;
            this.g = null;
            this.B = {};
            this.H = 0;
            this.F = b.timeoutMs ? ? 500;
            this.A = b.Nh ? ? !1;
            this.l = null
        }
        i() {
            this.B = {};
            this.l && (Ib(this.j, "message", this.l), delete this.l);
            delete this.B;
            delete this.j;
            delete this.g;
            super.i()
        }
        addEventListener(a) {
            let b = {
                internalBlockOnErrors: this.A
            };
            const c = Bb(() => a(b));
            let d = 0;
            this.F !== -1 && (d = setTimeout(() => {
                b.tcString = "tcunavailable";
                b.internalErrorState = 1;
                c()
            }, this.F));
            const e = (f, h) => {
                clearTimeout(d);
                f ? (b = f, b.internalErrorState = OF(b),
                    b.internalBlockOnErrors = this.A, h && b.internalErrorState === 0 || (b.tcString = "tcunavailable", h || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
                a(b)
            };
            try {
                WF(this, "addEventListener", e)
            } catch (f) {
                b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d), d = 0), c()
            }
        }
        removeEventListener(a) {
            a && a.listenerId && WF(this, "removeEventListener", null, a.listenerId)
        }
    };

    function rE(a, b, c) {
        const d = vF(a.win);
        d.callbackQueue = d.callbackQueue || [];
        d.callbackQueue.push({
            CONSENT_DATA_READY: () => {
                const e = vF(a.win),
                    f = new ZF(a.win);
                VF(f) && YF(f, h => {
                    h.cmpId === 300 && h.tcString && h.tcString !== "tcunavailable" && b({
                        Jj: (0, e.getDefaultConsentRevocationText)(),
                        Zh: (0, e.getDefaultConsentRevocationCloseText)(),
                        Gh: (0, e.getDefaultConsentRevocationAttestationText)(),
                        showRevocationMessage: () => {
                            (0, e.showRevocationMessage)()
                        }
                    })
                });
                c()
            }
        })
    }

    function $F(a, b = !1, c) {
        const d = {};
        try {
            const f = yF(a.win),
                h = zF(a.win);
            d.fc = f;
            d.fctype = h
        } catch (f) {}
        let e;
        try {
            e = AF(a.win.location.href)
        } catch (f) {}
        b && e && (d.href = e);
        b = lc({
            id: a.g
        }, { ...d,
            ers: 2
        });
        uF(a.win, b, () => {}, () => {});
        c && MF(new NF(a.win), c)
    }
    var aG = class {
        constructor(a, b) {
            this.win = a;
            this.g = b
        }
        start(a = !1, b) {
            if (this.win === this.win.top) try {
                BF(this.win, "googlefcPresent"), $F(this, a, b)
            } catch (c) {}
        }
    };
    const bG = new Set(["ARTICLE", "SECTION"]);
    var cG = class {
        constructor(a) {
            this.g = a
        }
    };

    function dG(a, b) {
        return Array.from(b.classList).map(c => `${a}=${c}`)
    }

    function eG(a) {
        return a.classList.length > 0
    }

    function fG(a) {
        return bG.has(a.tagName)
    };
    var gG = class {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
    };

    function hG(a) {
        return Da(a) && a.nodeType == 1 && a.tagName == "FIGURE" ? a : (a = a.parentNode) ? hG(a) : null
    };
    var iG = a => {
        var b = a.src;
        const c = a.getAttribute("data-src") || a.getAttribute("data-lazy-src");
        (b && b.startsWith("data:") && c ? c : b || c) ? (a.getAttribute("srcset"), b = (b = hG(a)) ? (b = b.getElementsByTagName("figcaption")[0]) ? b.textContent : null : null, a = new gG(a, b || a.getAttribute("alt") || null)) : a = null;
        return a
    };
    var jG = class {
        constructor() {
            this.map = new Map
        }
        clear() {
            this.map.clear()
        }
        delete(a, b) {
            const c = this.map.get(a);
            return c ? (b = c.delete(b), c.size === 0 && this.map.delete(a), b) : !1
        }
        get(a) {
            return [...(this.map.get(a) ? ? [])]
        }
        keys() {
            return this.map.keys()
        }
        add(a, b) {
            let c = this.map.get(a);
            c || this.map.set(a, c = new Set);
            c.add(b)
        }
        get size() {
            let a = 0;
            for (const b of this.map.values()) a += b.size;
            return a
        }
        values() {
            const a = this.map;
            return function*() {
                for (const b of a.values()) yield* b
            }()
        }[Symbol.iterator]() {
            const a = this.map;
            return function*() {
                for (const [b,
                        c
                    ] of a) {
                    const d = b,
                        e = c;
                    for (const f of e) yield [d, f]
                }
            }()
        }
    };

    function kG(a) {
        return [a[0],
            [...a[1]]
        ]
    };

    function lG(a) {
        return Array.from(mG(a).map.values()).filter(b => b.size >= 3).map(b => [...b])
    }

    function nG(a, b) {
        return b.every(c => {
            var d = a.g.getBoundingClientRect(c.g);
            if (d = d.height >= 50 && d.width >= a.A) {
                var e = a.g.getBoundingClientRect(c.g);
                d = a.l;
                e = new LC(e.left, e.right);
                d = Math.max(d.start, e.start) <= Math.min(d.end, e.end)
            }
            return d && qo(a.j, {
                eb: c.g,
                Xa: oG,
                Db: !0
            }) === null
        })
    }

    function pG(a) {
        return lG(a).sort(qG).find(b => nG(a, b)) || []
    }

    function mG(a) {
        return rG(Array.from(a.win.document.getElementsByTagName("IMG")).map(iG).filter(Qp), b => {
            var c = [...dG("CLASS_NAME", b.g)],
                d = b.g.parentElement;
            d = [...(d ? dG("PARENT_CLASS_NAME", d) : [])];
            var e = b.g.parentElement ? .parentElement;
            e = [...(e ? dG("GRANDPARENT_CLASS_NAME", e) : [])];
            var f = (f = qo(a.i.g, {
                eb: b.g,
                Xa: eG
            })) ? dG("NEAREST_ANCESTOR_CLASS_NAME", f) : [];
            return [...c, ...d, ...e, ...f, ...(b.i ? ["HAS_CAPTION=true"] : []), ...(qo(a.i.g, {
                eb: b.g,
                Xa: fG
            }) ? ["ARTICLE_LIKE_ANCESTOR=true"] : [])]
        })
    }
    var sG = class {
        constructor(a, b, c, d, e) {
            var f = new gp;
            this.win = a;
            this.l = b;
            this.A = c;
            this.g = f;
            this.j = d;
            this.i = e
        }
    };

    function rG(a, b) {
        const c = new jG;
        for (const d of a)
            for (const e of b(d)) c.add(e, d);
        return c
    }

    function oG(a) {
        return a.tagName === "A" && a.hasAttribute("href")
    }

    function qG(a, b) {
        return b.length - a.length
    };

    function tG(a) {
        const b = a.l.parentNode;
        if (!b) throw Error("Image not in the DOM");
        const c = uG(a.j),
            d = vG(a.j);
        c.appendChild(d);
        b.insertBefore(c, a.l.nextSibling);
        a.A.g().i(e => {
            var f = a.j;
            const h = d.getBoundingClientRect(),
                k = h.top - e.top,
                l = h.left - e.left,
                m = h.width - e.width;
            e = h.height - e.height;
            Math.abs(k) < 1 && Math.abs(l) < 1 && Math.abs(m) < 1 && Math.abs(e) < 1 || (f = f.getComputedStyle(d), v(d, {
                top: parseInt(f.top, 10) - k + "px",
                left: parseInt(f.left, 10) - l + "px",
                width: parseInt(f.width, 10) - m + "px",
                height: parseInt(f.height, 10) - e + "px"
            }))
        });
        return d
    }

    function wG(a) {
        a.g || (a.g = tG(a));
        return a.g
    }
    var xG = class extends Q {
        constructor(a, b, c) {
            super();
            this.j = a;
            this.l = b;
            this.A = c;
            this.g = null
        }
        i() {
            if (this.g) {
                var a = this.g;
                const b = a.parentNode;
                b && b.removeChild(a);
                this.g = null
            }
            super.i()
        }
    };

    function vG(a) {
        const b = a.document.createElement("div");
        v(b, pr(a));
        v(b, {
            position: "absolute",
            left: "0",
            top: "0",
            width: "0",
            height: "0",
            "pointer-events": "none"
        });
        return b
    }

    function uG(a) {
        const b = a.document.createElement("div");
        v(b, pr(a));
        v(b, {
            position: "relative",
            width: "0",
            height: "0"
        });
        return b
    };

    function yG(a) {
        const b = new R(a.dataset.adStatus || null);
        (new MutationObserver(() => {
            b.g(a.dataset.adStatus || null)
        })).observe(a, {
            attributes: !0
        });
        return Do(b)
    };
    const zG = ["Google Material Icons", "Roboto"];

    function AG({
        win: a,
        Aa: b,
        Pi: c,
        webPropertyCode: d,
        Oa: e,
        L: f
    }) {
        const h = new ip(a, c);
        c = new xG(a, c, h);
        vo(c, h);
        a = new BG(a, d, e, b, c, f);
        vo(a, c);
        a.J()
    }
    var BG = class extends Q {
        constructor(a, b, c, d, e, f) {
            super();
            this.win = a;
            this.webPropertyCode = b;
            this.Oa = c;
            this.Aa = d;
            this.j = e;
            this.L = f;
            this.g = new R(!1)
        }
        J() {
            const a = CG(this.win, this.webPropertyCode, this.Oa);
            wG(this.j).appendChild(a.zi);
            vu(this.win, a.va);
            yG(a.va).i(b => {
                if (b !== null) {
                    switch (b) {
                        case "unfilled":
                            this.dispose();
                            break;
                        case "filled":
                            this.g.g(!0);
                            break;
                        default:
                            this.L ? .reportError("Unhandled AdStatus: " + String(b)), this.dispose()
                    }
                    this.L ? .Fj(this.Aa, b)
                }
            });
            Ho(this.g, !0, () => void a.Xi.g(!0));
            a.ui.listen(() =>
                void this.dispose());
            a.ti.listen(() => void this.L ? .Dj(this.Aa))
        }
    };

    function CG(a, b, c) {
        const d = new R(!1),
            e = a.document.createElement("div");
        v(e, pr(a));
        v(e, {
            position: "absolute",
            top: "50%",
            left: "0",
            transform: "translateY(-50%)",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            "background-color": "rgba(0, 0, 0, 0.75)",
            opacity: "0",
            transition: "opacity 0.25s ease-in-out",
            "box-sizing": "border-box",
            padding: "40px 5px 5px 5px"
        });
        Go(d, !0, () => void v(e, {
            opacity: "1"
        }));
        Go(d, !1, () => void v(e, {
            opacity: "0"
        }));
        const f = a.document.createElement("div");
        v(f, pr(a));
        v(f, {
            display: "block",
            width: "100%",
            height: "100%"
        });
        e.appendChild(f);
        const {
            yh: h,
            Wi: k
        } = DG(a, b);
        f.appendChild(h);
        e.appendChild(EG(a, L(c, 1)));
        b = FG(a, L(c, 2));
        e.appendChild(b.Th);
        b.se.listen(() => void d.g(!1));
        return {
            Xi: d,
            zi: e,
            va: k,
            ti: b.se,
            ui: b.se.delay(a, 450)
        }
    }

    function EG(a, b) {
        const c = a.document.createElement("div");
        v(c, pr(a));
        v(c, {
            position: "absolute",
            top: "10px",
            width: "100%",
            color: "white",
            "font-family": "Roboto",
            "font-size": "12px",
            "line-height": "16px",
            "text-align": "center"
        });
        c.appendChild(a.document.createTextNode(b));
        return c
    }

    function FG(a, b) {
        const c = a.document.createElement("button");
        c.setAttribute("aria-label", b);
        v(c, pr(a));
        v(c, {
            position: "absolute",
            top: "10px",
            right: "10px",
            display: "block",
            cursor: "pointer",
            width: "24px",
            height: "24px",
            "font-size": "24px",
            "user-select": "none",
            color: "white"
        });
        b = a.document.createElement("gm-icon");
        b.className = "google-material-icons";
        b.appendChild(a.document.createTextNode("close"));
        c.appendChild(b);
        const d = new Po;
        c.addEventListener("click", () => void Oo(d));
        return {
            Th: c,
            se: Mo(d)
        }
    }

    function DG(a, b) {
        a = ru(a.document, b, null, null, {});
        return {
            yh: a.nb,
            Wi: a.va
        }
    };

    function GG({
        target: a,
        threshold: b = 0
    }) {
        const c = new HG;
        c.J(a, b);
        return c
    }
    var HG = class extends Q {
        constructor() {
            super();
            this.g = new R(!1)
        }
        J(a, b) {
            const c = new IntersectionObserver(d => {
                for (const e of d)
                    if (e.target === a) {
                        this.g.g(e.isIntersecting);
                        break
                    }
            }, {
                threshold: b
            });
            c.observe(a);
            wo(this, () => void c.disconnect())
        }
    };

    function IG(a) {
        const b = JG(a.win, qi(a.g, 2) ? ? 250, qi(a.g, 3) ? ? 300);
        let c = 1;
        return pG(a.l).map(d => ({
            Aa: c++,
            image: d,
            gb: b(d)
        }))
    }

    function KG(a, b) {
        const c = GG({
            target: b.image.g,
            threshold: ri(a.g) ? ? .8
        });
        a.j.push(c);
        Ho(Ko(c.g, a.win, qi(a.g, 5) ? ? 3E3, d => d), !0, () => {
            if (a.i < (qi(a.g, 1) ? ? 1)) {
                AG({
                    win: a.win,
                    Aa: b.Aa,
                    Pi: b.image.g,
                    webPropertyCode: a.webPropertyCode,
                    Oa: a.Oa,
                    L: a.L
                });
                a.i++;
                if (!(a.i < (qi(a.g, 1) ? ? 1)))
                    for (; a.j.length;) a.j.pop() ? .dispose();
                a.L ? .Ej(b.Aa)
            }
        })
    }

    function LG(a) {
        const b = IG(a);
        b.filter(MG).forEach(c => void KG(a, c));
        a.L ? .Gj(b.map(c => ({
            Aa: c.Aa,
            gb: c.gb
        })))
    }
    var NG = class {
        constructor(a, b, c, d, e, f) {
            this.win = a;
            this.webPropertyCode = b;
            this.g = c;
            this.Oa = d;
            this.l = e;
            this.L = f;
            this.j = [];
            this.i = 0
        }
    };

    function MG(a) {
        return a.gb.rejectionReasons.length === 0
    }

    function JG(a, b, c) {
        const d = Tn(a);
        return e => {
            e = e.g.getBoundingClientRect();
            const f = [];
            e.width < b && f.push(1);
            e.height < c && f.push(2);
            e.top <= d && f.push(3);
            return {
                Ab: e.width,
                Ke: e.height,
                vi: e.top - d,
                rejectionReasons: f
            }
        }
    };

    function OG(a, b) {
        a.Aa = b;
        return a
    }
    var PG = class {
        constructor(a, b, c, d, e) {
            this.A = a;
            this.webPropertyCode = b;
            this.hostname = c;
            this.j = d;
            this.l = e;
            this.errorMessage = this.i = this.Aa = this.g = null
        }
    };

    function QG(a, b) {
        return new PG(b, a.webPropertyCode, a.hostname, a.i, a.l)
    }

    function RG(a, b, c) {
        var d = a.j++;
        a.g === null ? (a.g = sk(), a = 0) : a = sk() - a.g;
        var e = b.A,
            f = b.webPropertyCode,
            h = b.hostname,
            k = b.j,
            l = b.l.map(encodeURIComponent).join(",");
        if (b.g) {
            var m = {
                imcnt: b.g.length
            };
            var n = Math.min(b.g.length, 10);
            for (let p = 0; p < n; p++) {
                const q = `im${p}`;
                m[`${q}_id`] = b.g[p].Aa;
                m[`${q}_s_w`] = b.g[p].gb.Ab;
                m[`${q}_s_h`] = b.g[p].gb.Ke;
                m[`${q}_s_dbf`] = b.g[p].gb.vi;
                b.g[p].gb.rejectionReasons.length > 0 && (m[`${q}_s_rej`] = b.g[p].gb.rejectionReasons.join(","))
            }
        } else m = null;
        ey("abg::imovad", {
            typ: e,
            wpc: f,
            hst: h,
            pvsid: k,
            peid: l,
            rate: c,
            num: d,
            tim: a,
            ...(b.Aa === null ? {} : {
                imid: b.Aa
            }),
            ...(b.i === null ? {} : {
                astat: b.i
            }),
            ...(b.errorMessage === null ? {} : {
                errm: b.errorMessage
            }),
            ...m
        }, c)
    }
    var SG = class {
        constructor(a, b, c, d) {
            this.webPropertyCode = a;
            this.hostname = b;
            this.i = c;
            this.l = d;
            this.j = 0;
            this.g = null
        }
        Gj(a) {
            var b = QG(this, "fndi");
            b.g = a;
            RG(this, b, a.length > 0 ? 1 : .1)
        }
        Ej(a) {
            a = OG(QG(this, "adpl"), a);
            RG(this, a, 1)
        }
        Fj(a, b) {
            a = OG(QG(this, "adst"), a);
            a.i = b;
            RG(this, a, 1)
        }
        Dj(a) {
            a = OG(QG(this, "adis"), a);
            RG(this, a, 1)
        }
        reportError(a) {
            var b = QG(this, "err");
            b.errorMessage = a;
            RG(this, b, .1)
        }
    };

    function TG(a, b, c) {
        return (a = a.g()) && ii(a, 11) ? c.map(d => d.j()) : c.map(d => d.A(b))
    };
    var UG = class extends O {
        getHeight() {
            return li(this, 2)
        }
    };

    function VG(a, b) {
        return ui(a, 1, b)
    }

    function WG(a, b) {
        return ei(a, 2, b)
    }
    var XG = class extends O {};
    XG.O = [2];
    var YG = class extends O {
        constructor() {
            super()
        }
    };
    YG.O = [5];
    var ZG = class extends O {
            constructor() {
                super()
            }
        },
        $G = [1, 2];
    const aH = new Set([7, 1]);
    var bH = class {
        constructor() {
            this.j = new jG;
            this.l = []
        }
        g(a, b) {
            aH.has(b) || Mp(Jp(Kv(a), c => void this.j.add(c, b)), c => void this.l.push(c))
        }
        i(a, b) {
            for (const c of a) this.g(c, b)
        }
    };

    function cH(a) {
        return new bq(["pedestal_container"], {
            google_reactive_ad_format: 30,
            google_phwr: 2.189,
            google_ad_width: Math.floor(a),
            google_ad_format: "autorelaxed",
            google_full_width_responsive: !0,
            google_enable_content_recommendations: !0,
            google_content_recommendation_ui_type: "pedestal"
        })
    }
    class dH {
        g(a) {
            return cH(Math.floor(a.i))
        }
    };
    var eH = class extends O {
        constructor() {
            super()
        }
    };

    function fH(a, b) {
        var c = b.adClient;
        if (typeof c !== "string" || !c) return !1;
        a.ce = c;
        a.j = !!b.adTest;
        c = b.pubVars;
        Da(c) && (a.D = c);
        if (Array.isArray(b.fillMessage) && b.fillMessage.length > 0) {
            a.C = {};
            for (const d of b.fillMessage) a.C[d.key] = d.value
        }
        a.l = b.adWidth;
        a.i = b.adHeight;
        bk(a.l) && bk(a.i) || ey("rctnosize", b);
        return !0
    }
    var gH = class {
        constructor() {
            this.C = this.D = this.j = this.ce = null;
            this.i = this.l = 0
        }
        B() {
            return !0
        }
    };

    function hH(a) {
        try {
            a.setItem("__storage_test__", "__storage_test__");
            const b = a.getItem("__storage_test__");
            a.removeItem("__storage_test__");
            return b === "__storage_test__"
        } catch (b) {
            return !1
        }
    }

    function iH(a, b = []) {
        const c = Date.now();
        return Wa(b, d => c - d < a * 1E3)
    }

    function jH(a, b, c) {
        try {
            const d = a.getItem(c);
            if (!d) return [];
            let e;
            try {
                e = JSON.parse(d)
            } catch (f) {}
            if (!Array.isArray(e) || Za(e, f => !Number.isInteger(f))) return a.removeItem(c), [];
            e = iH(b, e);
            e.length || a ? .removeItem(c);
            return e
        } catch (d) {
            return null
        }
    }

    function kH(a, b, c) {
        return b <= 0 || a == null || !hH(a) ? null : jH(a, b, c)
    };
    var lH = (a, b, c) => {
        let d = 0;
        try {
            var e = d |= Rn(a);
            const k = Sn(a),
                l = a.innerWidth;
            var f = k && l ? k / l : 0;
            d = e | (f ? f > 1.05 ? 262144 : f < .95 ? 524288 : 0 : 131072);
            d |= Un(a);
            d |= a.innerHeight >= a.innerWidth ? 0 : 8;
            d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
            var h;
            if (h = b) h = kH(c, 3600, "__lsv__") ? .length !== 0;
            h && (d |= 134217728)
        } catch (k) {
            d |= 32
        }
        return d
    };
    var mH = class extends gH {
        constructor() {
            super(...arguments);
            this.A = !1;
            this.g = null
        }
        B(a) {
            this.A = !!a.enableAma;
            if (a = a.amaConfig) try {
                var b = Zq(a)
            } catch (c) {
                b = null
            } else b = null;
            this.g = b;
            return !0
        }
    };
    const nH = {};

    function oH(a, b, c) {
        let d = pH(a, c, b);
        if (!d) return !0;
        const e = c.B.i;
        for (; d.Rb && d.Rb.length;) {
            const f = d.Rb.shift(),
                h = lv(f.ha);
            if (h && !(h <= d.Rc)) c.C ? .g(f, 18);
            else if (qH(c, f, {
                    zd: d.Rc
                })) {
                if (d.Oc.g.length + 1 >= e) return c.C ? .i(d.Rb, 19), !0;
                d = pH(a, c, b);
                if (!d) return !0
            }
        }
        return c.l
    }
    const pH = (a, b, c) => {
        var d = b.B.i,
            e = b.B.l,
            f = b.B;
        f = py(b.da(), f.g ? f.g.ec : void 0, d);
        if (f.g.length >= d) return b.C ? .i(rH(b, f, {
            types: a
        }, c), 19), null;
        e ? (d = f.i || (f.i = Xn(f.j).scrollHeight || null), e = !d || d < 0 ? -1 : f.i * e - vy(f)) : e = void 0;
        const h = (d = e == null || e >= 50) ? rH(b, f, {
            types: a
        }, c) : null;
        d || b.C ? .i(rH(b, f, {
            types: a
        }, c), 18);
        return {
            Oc: f,
            Rc: e,
            Rb: h
        }
    };
    nH[2] = Ka(function(a, b) {
        a = rH(b, py(b.da()), {
            types: a,
            Cb: cw(b.da())
        }, 2);
        if (a.length == 0) return !0;
        for (var c = 0; c < a.length; c++)
            if (qH(b, a[c])) return !0;
        return b.l ? (b.A.push(11), !0) : !1
    }, [0]);
    nH[5] = Ka(oH, [0], 5);
    nH[10] = Ka(function(a, b) {
        a = [];
        const c = b.Ka;
        c.includes(3) && a.push(2);
        c.includes(1) && a.push(0);
        c.includes(2) && !U(Sr) && a.push(1);
        return oH(a, 10, b)
    }, 10);
    nH[3] = function(a) {
        if (!a.l) return !1;
        var b = rH(a, py(a.da()), {
            types: [0],
            Cb: cw(a.da())
        }, 3);
        if (b.length == 0) return !0;
        for (var c = b.length - 1; c >= 0; c--)
            if (qH(a, b[c])) return !0;
        a.A.push(11);
        return !0
    };
    const sH = a => {
            var b;
            a.j.kh ? b = U(Ur) ? new Yv(0, null, [], 8, .3) : new Yv(0, null, [], 3, null) : b = cw(a.da());
            return {
                types: [0],
                Cb: b
            }
        },
        uH = a => {
            const b = a.da().document.body.getBoundingClientRect().width;
            tH(a, cH(b))
        },
        wH = (a, b) => {
            var c = sH(a);
            c.Hj = [5];
            c = rH(a, py(a.da()), c, 8);
            vH(a, c.reverse(), b)
        },
        vH = (a, b, c) => {
            for (const d of b)
                if (b = c.g(d.la), qH(a, d, {
                        de: b
                    })) return !0;
            return !1
        };
    nH[8] = function(a) {
        var b = a.da().document;
        if (b.readyState != "complete") return b.addEventListener("readystatechange", () => nH[8](a), {
            once: !0
        }), !0;
        if (!a.l) return !1;
        if (!a.ud()) return !0;
        b = sH(a);
        b.ef = [2, 4, 5];
        b = rH(a, py(a.da()), b, 8);
        const c = new dH;
        if (vH(a, b, c)) return !0;
        if (a.j.dg) switch (a.j.Ng || 0) {
            case 1:
                wH(a, c);
                break;
            default:
                uH(a)
        }
        return !0
    };
    nH[6] = Ka(oH, [2], 6);
    nH[7] = Ka(oH, [1], 7);
    nH[9] = function(a) {
        const b = pH([0, 2], a, 9);
        if (!b || !b.Rb) return a.A.push(17), a.l;
        for (const d of b.Rb) {
            var c = a.j.He || null;
            c == null ? c = null : (c = mv(d.ha, new xH, new yH(c, a.da())), c = new Mv(c, d.ja(), d.la));
            if (c && !(lv(c.ha) > b.Rc) && qH(a, c, {
                    zd: b.Rc,
                    qe: !0
                })) return a = c.ha.ca, jv(d.ha, a.length > 0 ? a[0] : null), !0
        }
        a.A.push(17);
        return a.l
    };
    class xH {
        i(a, b, c, d) {
            return uu(d.document, a, b)
        }
        j(a) {
            return Tn(a) || 0
        }
    };
    var zH = class {
        constructor(a, b, c) {
            this.i = a;
            this.g = b;
            this.Oc = c
        }
        Ba(a) {
            return this.g ? Sy(this.i, this.g, a, this.Oc) : Ry(this.i, a, this.Oc)
        }
        za() {
            return this.g ? 16 : 9
        }
    };
    var AH = class {
        constructor(a) {
            this.ee = a
        }
        Ba(a) {
            return Zy(a.document, this.ee)
        }
        za() {
            return 11
        }
    };
    var BH = class {
        constructor(a) {
            this.tb = a
        }
        Ba(a) {
            return Wy(this.tb, a)
        }
        za() {
            return 13
        }
    };
    var CH = class {
        Ba(a) {
            return Py(a)
        }
        za() {
            return 12
        }
    };
    var DH = class {
        constructor(a) {
            this.sc = a
        }
        Ba() {
            return Uy(this.sc)
        }
        za() {
            return 2
        }
    };
    var EH = class {
        constructor(a) {
            this.g = a
        }
        Ba() {
            return Xy(this.g)
        }
        za() {
            return 3
        }
    };
    var FH = class {
        Ba() {
            return $y()
        }
        za() {
            return 17
        }
    };
    var GH = class {
        constructor(a) {
            this.g = a
        }
        Ba() {
            return Ty(this.g)
        }
        za() {
            return 1
        }
    };
    var HH = class {
        Ba() {
            return zb(dv)
        }
        za() {
            return 7
        }
    };
    var IH = class {
        constructor(a) {
            this.ef = a
        }
        Ba() {
            return Vy(this.ef)
        }
        za() {
            return 6
        }
    };
    var JH = class {
        constructor(a) {
            this.g = a
        }
        Ba() {
            return Yy(this.g)
        }
        za() {
            return 5
        }
    };
    var KH = class {
        constructor(a, b) {
            this.minWidth = a;
            this.maxWidth = b
        }
        Ba() {
            return Ka(az, this.minWidth, this.maxWidth)
        }
        za() {
            return 10
        }
    };
    var LH = class {
        constructor(a) {
            this.l = a.i.slice(0);
            this.i = a.g.slice(0);
            this.j = a.j;
            this.A = a.l;
            this.g = a.A
        }
    };

    function MH(a) {
        var b = new NH;
        b.A = a;
        b.i.push(new GH(a));
        return b
    }

    function OH(a, b) {
        a.i.push(new IH(b));
        return a
    }

    function PH(a, b) {
        a.i.push(new DH(b));
        return a
    }

    function QH(a, b) {
        a.i.push(new JH(b));
        return a
    }

    function RH(a, b) {
        a.i.push(new EH(b));
        return a
    }

    function SH(a) {
        a.i.push(new HH);
        return a
    }

    function TH(a) {
        a.g.push(new CH);
        return a
    }

    function UH(a, b = 0, c, d) {
        a.g.push(new zH(b, c, d));
        return a
    }

    function VH(a, b = 0, c = Infinity) {
        a.g.push(new KH(b, c));
        return a
    }

    function WH(a) {
        a.g.push(new FH);
        return a
    }

    function XH(a, b = 0) {
        a.g.push(new BH(b));
        return a
    }

    function YH(a, b) {
        a.j = b;
        return a
    }
    var NH = class {
        constructor() {
            this.j = 0;
            this.l = !1;
            this.i = [].slice(0);
            this.g = [].slice(0)
        }
        build() {
            return new LH(this)
        }
    };
    class yH {
        constructor(a, b) {
            this.i = a;
            this.j = b
        }
        g() {
            var a = this.i,
                b = this.j;
            const c = a.D || {};
            c.google_ad_client = a.ce;
            c.google_ad_height = Tn(b) || 0;
            c.google_ad_width = Sn(b) || 0;
            c.google_reactive_ad_format = 9;
            b = new eH;
            b = ti(b, 1, a.A);
            a.g && C(b, 2, a.g);
            c.google_rasc = Hi(b);
            a.j && (c.google_adtest = "on");
            return new bq(["fsi_container"], c)
        }
    };
    var ZH = Vp(new Sp(0, {})),
        $H = Vp(new Sp(1, {})),
        aI = a => a === ZH || a === $H;

    function bI(a, b, c) {
        io(a.g, b) || a.g.set(b, []);
        a.g.get(b).push(c)
    }
    class cI {
        constructor() {
            this.g = new mo
        }
    };

    function dI(a, b) {
        for (var c = 0; c < b.length; c++) a.wa(b[c]);
        return a
    }

    function eI(a, b) {
        a.j = a.j ? a.j : b;
        return a
    }
    class fI {
        constructor(a) {
            this.B = {};
            this.B.c = a;
            this.A = [];
            this.j = null;
            this.C = [];
            this.F = 0
        }
        Ub(a) {
            this.B.wpc = a;
            return this
        }
        wa(a) {
            for (var b = 0; b < this.A.length; b++)
                if (this.A[b] == a) return this;
            this.A.push(a);
            return this
        }
        l(a) {
            var b = Nb(this.B);
            this.F > 0 && (b.t = this.F);
            b.err = this.A.join();
            b.warn = this.C.join();
            this.j && (b.excp_n = this.j.name, b.excp_m = this.j.message && this.j.message.substring(0, 512), b.excp_s = this.j.stack && Jk(this.j.stack, ""));
            b.w = 0 < a.innerWidth ? a.innerWidth : null;
            b.h = 0 < a.innerHeight ? a.innerHeight : null;
            return b
        }
    };

    function gI(a, b) {
        if (b && (a.g.apv = F(b, 4), Hh(b, wq, 23))) {
            var c = a.g;
            b = z(b, wq, 23);
            b = Ng(Ch(b, 1));
            c.sat = "" + b
        }
        return a
    }

    function hI(a, b) {
        a.g.afm = b.join(",");
        return a
    }
    var iI = class extends fI {
        constructor(a) {
            super(a);
            this.g = {}
        }
        H(a) {
            this.g.a = a.join(",");
            return this
        }
        G(a) {
            a != null && (this.g.allp = a);
            return this
        }
        Zg(a) {
            if (a) {
                const b = [];
                for (const c of ko(a))
                    if (a.get(c).length > 0) {
                        const d = a.get(c)[0];
                        b.push("(" + [c, d.kb, d.lh].join() + ")")
                    }
                this.g.fd = b.join(",")
            }
            return this
        }
        l(a) {
            try {
                this.g.su = a.location.hostname
            } catch (b) {
                this.g.su = "_ex"
            }
            a = super.l(a);
            Pb(a, this.g);
            return a
        }
    };

    function jI(a) {
        return a == null ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function kI(a, b, c, d = 30) {
        c.length <= d ? a[b] = lI(c) : (a[b] = lI(c.slice(0, d)), a[b + "_c"] = c.length.toString())
    }

    function lI(a) {
        const b = a.length > 0 && typeof a[0] === "string";
        a = a.map(c => c ? .toString() ? ? "null");
        b && (a = a.map(c => la(c, "replaceAll").call(c, "~", "")));
        return a.join("~")
    }

    function mI(a) {
        return a == null ? "null" : typeof a === "string" ? a : typeof a === "boolean" ? a ? "1" : "0" : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function nI(a, b) {
        a.i.op = mI(b)
    }

    function oI(a, b, c) {
        kI(a.i, "fap", b);
        a.i.fad = mI(c)
    }

    function pI(a, b, c) {
        kI(a.i, "fmp", b);
        a.i.fmd = mI(c)
    }

    function qI(a, b, c) {
        kI(a.i, "vap", b);
        a.i.vad = mI(c)
    }

    function rI(a, b, c) {
        kI(a.i, "vmp", b);
        a.i.vmd = mI(c)
    }

    function sI(a, b, c) {
        kI(a.i, "pap", b);
        a.i.pad = mI(c)
    }

    function tI(a, b, c) {
        kI(a.i, "pmp", b);
        a.i.pmd = mI(c)
    }

    function uI(a, b) {
        kI(a.i, "psq", b)
    }
    var vI = class extends iI {
        constructor(a) {
            super(0);
            Object.assign(this, a);
            this.i = {};
            this.errors = []
        }
        l(a) {
            a = super.l(a);
            Object.assign(a, this.i);
            this.errors.length > 0 && (a.e = lI(this.errors));
            return a
        }
    };

    function wI(a, b, c) {
        const d = b.ha;
        io(a.g, d) || a.g.set(d, new xI(Ip(Kv(b)) ? ? ""));
        c(a.g.get(d))
    }

    function yI(a, b) {
        wI(a, b, c => {
            c.g = !0
        })
    }

    function zI(a, b) {
        wI(a, b, c => {
            c.i = !0
        })
    }

    function AI(a, b) {
        wI(a, b, c => {
            c.j = !0
        });
        a.I.push(b.ha)
    }

    function BI(a, b, c) {
        wI(a, b, d => {
            d.Mb = c
        })
    }

    function CI(a, b, c) {
        const d = [];
        let e = 0;
        for (const f of c.filter(b)) aI(f.Mb ? ? "") ? ++e : (b = a.i.get(f.Mb ? ? "", null), d.push(b));
        return {
            list: d.sort((f, h) => (f ? ? -1) - (h ? ? -1)),
            Nb: e
        }
    }

    function DI(a, b) {
        nI(b, a.i.vc());
        var c = lo(a.g).filter(f => (f.xb.startsWith(ZH) ? 0 : 1) === 0),
            d = lo(a.g).filter(f => (f.xb.startsWith(ZH) ? 0 : 1) === 1),
            e = CI(a, f => f.g, c);
        oI(b, e.list, e.Nb);
        e = CI(a, f => f.g, d);
        pI(b, e.list, e.Nb);
        e = CI(a, f => f.i, c);
        qI(b, e.list, e.Nb);
        e = CI(a, f => f.i, d);
        rI(b, e.list, e.Nb);
        c = CI(a, f => f.j, c);
        sI(b, c.list, c.Nb);
        d = CI(a, f => f.j, d);
        tI(b, d.list, d.Nb);
        uI(b, a.I.map(f => a.g.get(f) ? .Mb).map(f => a.i.get(f) ? ? null))
    }

    function Dl() {
        var a = P(EI);
        if (!a.A) return sl();
        const b = Bl(Al(zl(yl(xl(wl(vl(ul(rl(ql(new tl, a.A ? ? []), a.H ? ? []), a.C), a.G), a.F), a.M), a.R), a.B ? ? 0), lo(a.g).map(c => {
            var d = new pl;
            d = Fi(d, 1, c.xb);
            var e = a.i.get(c.Mb ? ? "", -1);
            d = Di(d, 2, e);
            d = M(d, 3, c.g);
            return M(d, 4, c.i)
        })), a.I.map(c => a.g.get(c) ? .Mb).map(c => a.i.get(c) ? ? -1));
        a.j != null && M(b, 6, a.j);
        a.l != null && Uh(b, 13, Pg(a.l), "0");
        return b
    }
    var EI = class {
        constructor() {
            this.l = this.H = this.A = null;
            this.F = this.G = !1;
            this.j = null;
            this.R = this.C = this.M = !1;
            this.B = null;
            this.i = new mo;
            this.g = new mo;
            this.I = []
        }
    };
    class xI {
        constructor(a) {
            this.j = this.i = this.g = !1;
            this.Mb = null;
            this.xb = a
        }
    };
    class FI {
        constructor(a) {
            this.i = a;
            this.g = -1
        }
    };

    function GI(a) {
        let b = 0;
        for (; a;)(!b || a.previousElementSibling || a.nextElementSibling) && b++, a = a.parentElement;
        return b
    };

    function HI(a, b) {
        const c = a.H.filter(d => ko(d.bd).every(e => d.bd.get(e) === b.get(e)));
        return c.length === 0 ? (a.i.push(19), null) : c.reduce((d, e) => d.bd.vc() > e.bd.vc() ? d : e, c[0])
    }

    function II(a, b) {
        b = Kv(b);
        if (b.g == null) return a.i.push(18), null;
        b = b.getValue();
        if (io(a.j, b)) return a.j.get(b);
        var c = Tp(b);
        c = HI(a, c);
        a.j.set(b, c);
        return c
    }
    var JI = class {
        constructor(a) {
            this.g = a;
            this.j = new mo;
            this.H = (z(a, Wq, 2) ? .g() || []).map(b => {
                const c = Tp(L(b, 1)),
                    d = mi(b, 2);
                return {
                    bd: c,
                    Rg: d,
                    xb: L(b, 1)
                }
            });
            this.i = []
        }
        F() {
            const a = P(EI);
            var b = this.l();
            a.A = b;
            b = this.C();
            a.H = b;
            b = this.A();
            b != null && (a.l = b);
            b = !!this.g.j() ? .g() ? .g();
            a.F = b;
            b = new mo;
            for (const c of z(this.g, Wq, 2) ? .g() ? ? []) b.set(L(c, 1), mi(c, 2));
            a.i = b
        }
        B() {
            return [...this.i]
        }
        l() {
            return [...this.g.g()]
        }
        C() {
            return [...Lh(this.g, 4, Ng, y(), 0)]
        }
        A() {
            return z(this.g, Qq, 5) ? .g() ? ? null
        }
        G(a) {
            const b = II(this, a);
            b ? .xb != null &&
                BI(P(EI), a, b.xb)
        }
        I(a) {
            const b = V(ts) || 0;
            if (a.length == 0 || b == 0) return !0;
            const c = (new Ap(a)).filter(d => {
                d = II(this, d) ? .xb || "";
                return d != "" && !(d === ZH || d === $H)
            });
            return b <= c.g.length / a.length
        }
    };

    function KI(a, b) {
        return b.g.length == 0 ? b : b.sort((c, d) => (II(a.g, c) ? .Rg ? ? Number.MAX_VALUE) - (II(a.g, d) ? .Rg ? ? Number.MAX_VALUE))
    }

    function LI(a, b) {
        var c = b.la.g,
            d = Math,
            e = d.min;
        const f = b.ja(),
            h = b.ha.g();
        c += 200 * e.call(d, 20, h == 0 || h == 3 ? GI(f.parentElement) : GI(f));
        a = a.i;
        a.g < 0 && (a.g = Xn(a.i).scrollHeight || 0);
        a = a.g - b.la.g;
        a = c + (a > 1E3 ? 0 : 2 * (1E3 - a));
        b.ja();
        return a
    }

    function MI(a, b) {
        return b.g.length == 0 ? b : b.sort((c, d) => LI(a, c) - LI(a, d))
    }

    function NI(a, b) {
        return b.sort((c, d) => {
            const e = c.ha.G,
                f = d.ha.G;
            var h;
            e == null || f == null ? h = e == null && f == null ? LI(a, c) - LI(a, d) : e == null ? 1 : -1 : h = e - f;
            return h
        })
    }
    class OI {
        constructor(a, b = null) {
            this.i = new FI(a);
            this.g = b && new JI(b)
        }
    };

    function PI(a, b, c = 0, d) {
        var e = a.i;
        for (var f of b.l) e = zp(e, f.Ba(a.j), QI(f.za(), c));
        f = e = e.apply(Oy(a.j));
        for (const h of b.i) f = zp(f, h.Ba(a.j), Pp([RI(h.za(), c), k => {
            d ? .g(k, h.za())
        }]));
        switch (b.j) {
            case 1:
                f = MI(a.g, f);
                break;
            case 2:
                f = NI(a.g, f);
                break;
            case 3:
                const h = P(EI);
                f = KI(a.g, f);
                e.forEach(k => {
                    yI(h, k);
                    a.g.g ? .G(k)
                });
                f.forEach(k => zI(h, k))
        }
        b.A && (f = Cp(f, Bd(a.j.location.href + a.j.localStorage.google_experiment_mod)));
        b.g ? .length === 1 && bI(a.l, b.g[0], {
            kb: e.g.length,
            lh: f.g.length
        });
        return Bp(f)
    }
    class SI {
        constructor(a, b, c = null) {
            this.i = new Ap(a);
            this.g = new OI(b, c);
            this.j = b;
            this.l = new cI
        }
        A() {
            this.i.forEach(a => {
                a.i && du(a.i);
                a.i = null
            })
        }
    }
    const QI = (a, b) => c => iv(c, b, a),
        RI = (a, b) => c => iv(c.ha, b, a);

    function TI(a, b, c, d) {
        a: {
            switch (b) {
                case 0:
                    a = UI(VI(c), a);
                    break a;
                case 3:
                    a = UI(c, a);
                    break a;
                case 2:
                    var e = c.lastChild;
                    a = UI(e ? e.nodeType == 1 ? e : VI(e) : null, a);
                    break a
            }
            a = !1
        }
        if (d = !a && !(!d && b == 2 && !WI(c))) b = b == 1 || b == 2 ? c : c.parentNode,
        d = !(b && !tr(b) && b.offsetWidth <= 0);
        return d
    }

    function UI(a, b) {
        if (!a) return !1;
        a = De(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return a == "left" || a == "right"
    }

    function VI(a) {
        for (a = a.previousSibling; a && a.nodeType != 1;) a = a.previousSibling;
        return a ? a : null
    }

    function WI(a) {
        return !!a.nextSibling || !!a.parentNode && WI(a.parentNode)
    };
    var XI = !Yd && !Td();

    function YI(a) {
        if (/-[a-z]/.test("adFormat")) return null;
        if (XI && a.dataset) {
            if (Vd() && !("adFormat" in a.dataset)) return null;
            a = a.dataset.adFormat;
            return a === void 0 ? null : a
        }
        return a.getAttribute("data-" + "adFormat".replace(/([A-Z])/g, "-$1").toLowerCase())
    };
    var ZI = (a, b, c) => {
            if (!b) return null;
            const d = he(document, "INS");
            d.id = "google_pedestal_container";
            d.style.width = "100%";
            d.style.zIndex = "-1";
            if (c) {
                var e = a.getComputedStyle(c),
                    f = "";
                if (e && e.position != "static") {
                    var h = c.parentNode.lastElementChild;
                    for (f = e.position; h && h != c;) {
                        if (a.getComputedStyle(h).display != "none") {
                            f = a.getComputedStyle(h).position;
                            break
                        }
                        h = h.previousElementSibling
                    }
                }
                if (c = f) d.style.position = c
            }
            b.appendChild(d);
            if (d) {
                var k = a.document;
                f = k.createElement("div");
                f.style.width = "100%";
                f.style.height =
                    "2000px";
                c = Tn(a);
                e = k.body.scrollHeight;
                a = a.innerHeight;
                h = k.body.getBoundingClientRect().bottom;
                d.appendChild(f);
                var l = f.getBoundingClientRect().top;
                k = k.body.getBoundingClientRect().top;
                d.removeChild(f);
                f = e;
                e <= a && c > 0 && h > 0 && (f = h - k);
                a = l - k >= .8 * f
            } else a = !1;
            return a ? d : (b.removeChild(d), null)
        },
        $I = a => {
            const b = a.document.body;
            var c = ZI(a, b, null);
            if (c) return c;
            if (a.document.body) {
                c = Math.floor(a.document.body.getBoundingClientRect().width);
                for (var d = [{
                        element: a.document.body,
                        depth: 0,
                        height: 0
                    }], e = -1, f = null; d.length >
                    0;) {
                    const k = d.pop(),
                        l = k.element;
                    var h = k.height;
                    k.depth > 0 && h > e && (e = h, f = l);
                    if (k.depth < 5)
                        for (h = 0; h < l.children.length; h++) {
                            const m = l.children[h],
                                n = m.getBoundingClientRect().width;
                            (n == null || c == null ? 0 : n >= c * .9 && n <= c * 1.01) && d.push({
                                element: m,
                                depth: k.depth + 1,
                                height: m.getBoundingClientRect().height
                            })
                        }
                }
                c = f
            } else c = null;
            return c ? ZI(a, c.parentNode || b, c) : null
        },
        bJ = a => {
            let b = 0;
            try {
                b |= Rn(a), se() || (b |= 1048576), Math.floor(a.document.body.getBoundingClientRect().width) <= 1200 || (b |= 32768), aJ(a) && (b |= 33554432)
            } catch (c) {
                b |=
                    32
            }
            return b
        },
        aJ = a => {
            a = a.document.getElementsByClassName("adsbygoogle");
            for (let b = 0; b < a.length; b++)
                if (YI(a[b]) == "autorelaxed") return !0;
            return !1
        };

    function cJ(a) {
        const b = Wn(a, !0),
            c = Xn(a).scrollWidth,
            d = Xn(a).scrollHeight;
        let e = "unknown";
        a && a.document && a.document.readyState && (e = a.document.readyState);
        var f = ao(a);
        const h = [];
        var k = [];
        const l = [],
            m = [];
        var n = [],
            p = [],
            q = [];
        let t = 0,
            w = 0,
            A = Infinity,
            D = Infinity,
            G = null;
        var I = ly({
            Kb: !1
        }, a);
        for (var B of I) {
            I = B.getBoundingClientRect();
            const ba = b - (I.bottom + f);
            var J = void 0,
                H = void 0;
            if (B.className && B.className.indexOf("adsbygoogle-ablated-ad-slot") != -1) {
                J = B.getAttribute("google_element_uid");
                H = a.google_sv_map;
                if (!J ||
                    !H || !H[J]) continue;
                J = (H = lk(H[J])) ? H.height : 0;
                H = H ? H.width : 0
            } else if (J = I.bottom - I.top, H = I.right - I.left, J <= 1 || H <= 1) continue;
            h.push(J);
            l.push(H);
            m.push(J * H);
            B.className && B.className.indexOf("google-auto-placed") != -1 ? (w += 1, B.className && B.className.indexOf("pedestal_container") != -1 && (G = J)) : (A = Math.min(A, ba), p.push(I), t += 1, k.push(J), n.push(J * H));
            D = Math.min(D, ba);
            q.push(I)
        }
        A = A === Infinity ? null : A;
        D = D === Infinity ? null : D;
        f = dJ(p);
        q = dJ(q);
        k = eJ(b, k);
        p = eJ(b, h);
        n = eJ(b * c, n);
        B = eJ(b * c, m);
        return new fJ(a, {
            wi: e,
            Hc: b,
            sj: c,
            rj: d,
            ej: t,
            Hh: w,
            Jh: gJ(h),
            Kh: gJ(l),
            Ih: gJ(m),
            mj: f,
            lj: q,
            kj: A,
            jj: D,
            ye: k,
            xe: p,
            Ch: n,
            Bh: B,
            uj: G
        })
    }

    function hJ(a, b, c, d) {
        const e = se() && !(Sn(a.i) >= 900);
        d = Wa(d, f => $a(a.j, f)).join(",");
        return {
            wpc: b,
            su: c,
            eid: d,
            doc: a.g.wi,
            pg_h: iJ(a.g.Hc),
            pg_w: iJ(a.g.sj),
            pg_hs: iJ(a.g.rj),
            c: iJ(a.g.ej),
            aa_c: iJ(a.g.Hh),
            av_h: iJ(a.g.Jh),
            av_w: iJ(a.g.Kh),
            av_a: iJ(a.g.Ih),
            s: iJ(a.g.mj),
            all_s: iJ(a.g.lj),
            b: iJ(a.g.kj),
            all_b: iJ(a.g.jj),
            d: iJ(a.g.ye),
            all_d: iJ(a.g.xe),
            ard: iJ(a.g.Ch),
            all_ard: iJ(a.g.Bh),
            pd_h: iJ(a.g.uj),
            dt: e ? "m" : "d"
        }
    }
    class fJ {
        constructor(a, b) {
            this.i = a;
            this.g = b;
            this.j = "633794002 633794005 21066126 21066127 21065713 21065714 21065715 21065716 42530887 42530888 42530889 42530890 42530891 42530892 42530893".split(" ")
        }
    }

    function gJ(a) {
        return qd.apply(null, Wa(a, b => b > 0)) || null
    }

    function eJ(a, b) {
        return a <= 0 ? null : pd.apply(null, b) / a
    }

    function dJ(a) {
        let b = Infinity;
        for (let e = 0; e < a.length - 1; e++)
            for (let f = e + 1; f < a.length; f++) {
                var c = a[e],
                    d = a[f];
                c = Math.max(Math.max(0, c.left - d.right, d.left - c.right), Math.max(0, c.top - d.bottom, d.top - c.bottom));
                c > 0 && (b = Math.min(c, b))
            }
        return b !== Infinity ? b : null
    }

    function iJ(a) {
        return a == null ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function jJ(a) {
        var b = ny({
            Kb: !1,
            pd: !1
        }, a);
        a = (Tn(a) || 0) - ao(a);
        let c = 0;
        for (let d = 0; d < b.length; d++) {
            const e = b[d].getBoundingClientRect();
            ty(e) && e.top <= a && (c += 1)
        }
        return c > 0
    }

    function kJ(a) {
        const b = {};
        var c = ny({
            Kb: !1,
            pd: !1,
            Ne: !1,
            Oe: !1
        }, a).map(d => d.getBoundingClientRect()).filter(ty);
        b.Df = c.length;
        c = oy({
            Ne: !0
        }, a).map(d => d.getBoundingClientRect()).filter(ty);
        b.bg = c.length;
        c = oy({
            Oe: !0
        }, a).map(d => d.getBoundingClientRect()).filter(ty);
        b.Eg = c.length;
        c = oy({
            pd: !0
        }, a).map(d => d.getBoundingClientRect()).filter(ty);
        b.If = c.length;
        c = (Tn(a) || 0) - ao(a);
        c = ny({
            Kb: !1
        }, a).map(d => d.getBoundingClientRect()).filter(ty).filter(Ja(lJ, null, c));
        b.Ef = c.length;
        a = cJ(a);
        c = a.g.ye != null ? a.g.ye : null;
        c !=
            null && (b.zg = c);
        a = a.g.xe != null ? a.g.xe : null;
        a != null && (b.Ff = a);
        return b
    }

    function qH(a, b, {
        zd: c,
        de: d,
        qe: e
    } = {}) {
        return Mu(997, () => mJ(a, b, {
            zd: c,
            de: d,
            qe: e
        }), a.g)
    }

    function rH(a, b, c, d) {
        var e = c.Cb ? c.Cb : a.B;
        const f = dw(e, b.g.length);
        e = a.j.Gf ? e.g : void 0;
        const h = WH(XH(TH(VH(UH(SH(QH(RH(OH(PH(MH(c.types), a.ia), c.ef || []), a.ca), c.Hj || [])), f.Gc || void 0, e, b), c.minWidth, c.maxWidth)), f.tb || void 0));
        a.R && h.g.push(new AH(a.R));
        b = 1;
        a.j.jh ? b = 2 : a.sb() && (b = 3);
        YH(h, b);
        a.j.bh && (h.l = !0);
        return Mu(995, () => PI(a.i, h.build(), d, a.C || void 0), a.g)
    }

    function tH(a, b) {
        const c = $I(a.g);
        if (c) {
            const d = aq(a.I, b),
                e = ru(a.g.document, a.G, null, null, {}, d);
            e && (gu(e.nb, c, 2, 256), Mu(996, () => nJ(a, e, d), a.g))
        }
    }

    function oJ(a) {
        return a.F ? a.F : a.F = a.g.google_ama_state
    }

    function mJ(a, b, {
        zd: c,
        de: d,
        qe: e
    } = {}) {
        const f = b.ha;
        if (f.A) return !1;
        var h = b.ja(),
            k = f.g();
        if (!TI(a.g, k, h, a.l)) return !1;
        k = null;
        f.zc ? .includes(6) ? (k = Math.round(h.getBoundingClientRect().height), k = new bq(null, {
            google_max_responsive_height: c == null ? k : Math.min(c, k),
            google_full_width_responsive: "false"
        })) : k = c == null ? null : new bq(null, {
            google_max_responsive_height: c
        });
        c = cq(ki(f.Td, 2) || 0);
        h = dq(f.G);
        const l = pJ(a, f),
            m = qJ(a),
            n = aq(a.I, f.R ? f.R.g(b.la) : null, k, d || null, c, h, l, m),
            p = b.fill(a.G, n);
        if (e && !rJ(a, p, n) || !Mu(996,
                () => nJ(a, p, n), a.g)) return !1;
        Bj(9, [f.G, f.Lb]);
        a.sb() && AI(P(EI), b);
        return !0
    }

    function pJ(a, b) {
        return Ip(Mp(Iv(b).map(eq), () => {
            a.A.push(18)
        }))
    }

    function qJ(a) {
        if (!a.sb()) return null;
        var b = a.i.g.g ? .C();
        if (b == null) return null;
        b = b.join("~");
        a = a.i.g.g ? .A() ? ? null;
        return fq({
            ji: b,
            Di: a
        })
    }

    function rJ(a, b, c) {
        if (!b) return !1;
        var d = b.va,
            e = d.style.width;
        d.style.width = "100%";
        var f = d.offsetWidth;
        d.style.width = e;
        d = a.g;
        e = b.va;
        c = c && c.wc() || {};
        var h = V(Ir);
        if (d !== d.top) h = Ae(d) ? 3 : 16;
        else if (Sn(d) < 488)
            if (d.innerHeight >= d.innerWidth) {
                var k = Sn(d);
                if (!k || (k - f) / k > h) h = 6;
                else {
                    if (h = c.google_full_width_responsive !== "true") b: {
                        k = e.parentElement;
                        for (h = Sn(d); k; k = k.parentElement) {
                            const l = De(k, d);
                            if (!l) continue;
                            const m = Ne(l.width);
                            if (m && !(m >= h) && l.overflow !== "visible") {
                                h = !0;
                                break b
                            }
                        }
                        h = !1
                    }
                    h = h ? 7 : !0
                }
            } else h = 5;
        else h =
            4;
        if (h !== !0) f = h;
        else {
            if (!(c = c.google_full_width_responsive === "true")) a: {
                do
                    if ((c = De(e, d)) && c.position == "fixed") {
                        c = !1;
                        break a
                    }
                while (e = e.parentElement);
                c = !0
            }
            c ? (d = Sn(d), f = d - f, f = d && f >= 0 ? !0 : d ? f < -10 ? 11 : f < 0 ? 14 : 12 : 10) : f = 9
        }
        if (f) {
            a = a.g;
            b = b.va;
            if (d = nu(a, b)) f = b.style, f.border = f.borderStyle = f.outline = f.outlineStyle = f.transition = "none", f.borderSpacing = f.padding = "0", lu(b, d, "0px"), f.width = `${Sn(a)}px`, ou(a, b, d), f.zIndex = "30";
            return !0
        }
        du(b.nb);
        return !1
    }

    function nJ(a, b, c) {
        if (!b) return !1;
        try {
            vu(a.g, b.va, c)
        } catch (d) {
            return du(b.nb), a.A.push(6), !1
        }
        return !0
    }
    class sJ {
        constructor(a, b, c, d, e = {}, f = [], h = !1) {
            this.i = a;
            this.G = b;
            this.g = c;
            this.B = d.Cb;
            this.ia = d.sc || [];
            this.I = d.Ei || null;
            this.ca = d.ni || [];
            this.R = d.ee || [];
            this.j = e;
            this.l = !1;
            this.M = [];
            this.A = [];
            this.H = this.F = void 0;
            this.Ka = f;
            this.C = h ? new bH : null
        }
        Fa() {
            return this.i
        }
        da() {
            return this.g
        }
        wa(a) {
            this.M.push(a)
        }
        sb() {
            if ((this.i.g.g ? .l().length ? ? 0) == 0) return !1;
            if ((V(ts) || 0) == 0) return !0;
            if (this.H === void 0) {
                const a = YH(TH(SH(MH([0, 1, 2]))), 1).build(),
                    b = Mu(995, () => PI(this.i, a), this.g);
                this.H = this.i.g.g ? .I(b) || !1
            }
            return this.H
        }
        Se() {
            return !!this.j.Vg
        }
        ud() {
            return !aJ(this.g)
        }
        ua() {
            return this.C
        }
    }
    const lJ = (a, b) => b.top <= a;

    function tJ(a, b, c, d, e, f = 0, h = 0) {
        this.La = a;
        this.Pd = f;
        this.Od = h;
        this.errors = b;
        this.zb = c;
        this.g = d;
        this.i = e
    };
    var uJ = (a, {
        ud: b = !1,
        Se: c = !1,
        Kj: d = !1,
        sb: e = !1
    } = {}) => {
        const f = [];
        d && f.push(9);
        if (e) {
            a.includes(4) && !c && b && f.push(8);
            a.includes(1) && f.push(1);
            d = a.includes(3);
            e = a.includes(2) && !U(Sr);
            const h = a.includes(1);
            (d || e || h) && f.push(10)
        } else a.includes(3) && f.push(6), a.includes(4) && !c && b && f.push(8), a.includes(1) && f.push(1, 5), a.includes(2) && !U(Sr) && f.push(7);
        a.includes(4) && c && b && f.push(8);
        return f
    };

    function vJ(a, b, c) {
        a = uJ(a, {
            ud: b.ud(),
            Se: b.Se(),
            Kj: !!b.j.He,
            sb: b.sb()
        });
        return new wJ(a, b, c)
    }

    function xJ(a, b) {
        const c = nH[b];
        return c ? Mu(998, () => c(a.g), a.A) : (a.g.wa(12), !0)
    }

    function yJ(a, b) {
        return new Promise(c => {
            setTimeout(() => {
                c(xJ(a, b))
            })
        })
    }

    function zJ(a) {
        a.g.l = !0;
        return Promise.all(a.i.map(b => yJ(a, b))).then(b => {
            b.includes(!1) && a.g.wa(5);
            a.i.splice(0, a.i.length)
        })
    }
    class wJ {
        constructor(a, b, c) {
            this.l = a.slice(0);
            this.i = a.slice(0);
            this.j = bb(this.i, 1);
            this.g = b;
            this.A = c
        }
    };
    const AJ = class {
        constructor(a) {
            this.g = a;
            this.exception = void 0
        }
    };

    function BJ(a) {
        return zJ(a).then(() => {
            var b = a.g.i.i.filter(dv).g.length;
            var c = a.g.M.slice(0);
            var d = a.g;
            d = [...d.A, ...(d.i.g.g ? .B() || [])];
            b = new tJ(b, c, d, a.g.i.i.g.length, a.g.i.l.g, a.g.i.i.filter(dv).filter(ev).g.length, a.g.i.i.filter(ev).g.length);
            return new AJ(b)
        })
    };
    var CJ = a => {
            let b = 0;
            a.forEach(c => b = Math.max(b, c.getBoundingClientRect().width));
            return c => c.getBoundingClientRect().width > b * .5
        },
        DJ = a => {
            const b = Tn(a) || 0;
            return c => c.getBoundingClientRect().height >= b * .75
        };
    var EJ = (a, b) => {
        b = Dv(b, a);
        const c = b.map(d => d.g);
        b = b.filter(d => {
            d = d.g.getBoundingClientRect();
            return d.width > 0 && d.height > 0
        }).filter(d => CJ(c)(d.g)).filter(d => DJ(a)(d.g));
        b.sort((d, e) => {
            e = e.g;
            return d.g.getBoundingClientRect().top - e.getBoundingClientRect().top
        });
        return b
    };

    function FJ(a) {
        return a.reduce((b, c) => b.g.getBoundingClientRect().bottom < c.g.getBoundingClientRect().bottom ? c : b)
    }

    function GJ(a, b, c, d) {
        let e = !1;
        const f = new IntersectionObserver(h => {
            for (const k of h)
                if (k.isIntersecting) e = !0;
                else {
                    if (h = e) h = a, h = b.getBoundingClientRect().bottom <= Tn(h.win) / 2;
                    h && (HJ(a.L, {
                        typ: "cee",
                        cet: c
                    }), e = !1)
                }
        }, {
            rootMargin: d
        });
        f.observe(b);
        wo(a, () => {
            f.disconnect()
        })
    }
    var IJ = class extends Q {
        constructor(a, b, c) {
            super();
            this.win = a;
            this.g = b;
            this.L = c
        }
    };

    function JJ(a, b) {
        HJ(a, {
            typ: "cdr",
            af: b.ke,
            ...(b.ke > 0 ? {
                vh: b.W,
                ph: b.Hc,
                ah: b.Dh,
                at: b.Fh
            } : {})
        })
    }

    function HJ(a, b) {
        a = { ...b,
            wpc: a.webPropertyCode,
            cor: a.g,
            tim: Math.round(tk() ? ? -1),
            num: a.i++
        };
        ey("ama_vignette", a, 1)
    }
    var KJ = class {
        constructor(a) {
            var b = ef();
            this.webPropertyCode = a;
            this.g = b;
            this.i = 0
        }
    };
    class LJ {
        g() {
            return new bq([], {
                google_reactive_ad_format: 40,
                google_tag_origin: "qs"
            })
        }
    };
    class MJ {
        g() {
            return new bq(["adsbygoogle-resurrected-ad-slot"], {})
        }
    };

    function NJ(a) {
        return ur(a.g.document).map(b => {
            const c = new Xu(b, 3);
            b = new Zu(xu(a.g, b));
            return new cv(c, b, a.i, !1, 0, [], null, a.g, null)
        })
    }
    class OJ {
        constructor(a) {
            var b = new MJ;
            this.g = a;
            this.i = b || null
        }
    };
    const PJ = {
        uf: "10px",
        ne: "10px"
    };

    function QJ(a) {
        return ho(a.g.document.querySelectorAll("INS.adsbygoogle-placeholder")).map(b => new cv(new Xu(b, 1), new Vu(PJ), a.i, !1, 0, [], null, a.g, null))
    }
    class RJ {
        constructor(a, b) {
            this.g = a;
            this.i = b || null
        }
    };

    function SJ(a, b) {
        const c = [];
        b.forEach((d, e) => {
            c.push(la(e, "replaceAll").call(e, "~", "_") + "--" + d.map(f => Number(f)).join("_"))
        });
        kI(a.i, "cnstr", c, 80)
    }
    var TJ = class extends fI {
        constructor() {
            super(-1);
            this.i = {}
        }
        l(a) {
            a = super.l(a);
            Object.assign(a, this.i);
            return a
        }
    };

    function UJ(a, b) {
        return a == null ? b + "ShouldNotBeNull" : a == 0 ? b + "ShouldNotBeZero" : a < -1 ? b + "ShouldNotBeLessMinusOne" : null
    }

    function VJ(a, b, c) {
        const d = UJ(c.md, "gapsMeasurementWindow") || UJ(c.uc, "gapsPerMeasurementWindow") || UJ(c.Cc, "maxGapsToReport");
        return d != null ? Gp(d) : c.Hf || c.uc != -1 || c.Cc != -1 ? Ep(new WJ(a, b, c)) : Gp("ShouldHaveLimits")
    }

    function XJ(a) {
        return oJ(a.j) && oJ(a.j).placed || []
    }

    function YJ(a) {
        return XJ(a).map(b => rp(pp(b.element, a.g)))
    }

    function ZJ(a) {
        return XJ(a).map(b => b.index)
    }

    function $J(a, b) {
        const c = b.ha;
        return !a.C && c.l && ki(c.l, 8) != null && ki(c.l, 8) == 1 ? [] : c.A ? (c.ca || []).map(d => rp(pp(d, a.g))) : [rp(new qp(b.la.g, 0))]
    }

    function aK(a) {
        a.sort((e, f) => e.g - f.g);
        const b = [];
        let c = 0;
        for (let e = 0; e < a.length; ++e) {
            var d = a[e];
            let f = d.g;
            d = d.g + d.i;
            f <= c ? c = Math.max(c, d) : (b.push(new qp(c, f - c)), c = d)
        }
        return b
    }

    function bK(a, b) {
        b = b.map(c => {
            var d = new UG;
            d = ui(d, 1, c.g);
            c = c.getHeight();
            return ui(d, 2, c)
        });
        return WG(VG(new XG, a), b)
    }

    function cK(a) {
        const b = di(a, UG, 2, y()).map(c => `G${li(c,1)}~${c.getHeight()}`);
        return `W${li(a,1)}${b.join("")}`
    }

    function dK(a, b) {
        const c = [];
        let d = 0;
        for (const e of ko(b)) {
            const f = b.get(e);
            f.sort((h, k) => k.getHeight() - h.getHeight());
            a.F || f.splice(a.A, f.length);
            !a.B && d + f.length > a.i && f.splice(a.i - d, f.length);
            c.push(bK(e, f));
            d += f.length;
            if (!a.B && d >= a.i) break
        }
        return c
    }

    function eK(a) {
        const b = di(a, XG, 5, y()).map(c => cK(c));
        return `M${li(a,1)}H${li(a,2)}C${li(a,3)}B${Number(!!K(a,4))}${b.join("")}`
    }

    function fK(a) {
        var b = Nv(Bp(a.j.i.i), a.g),
            c = YJ(a),
            d = new no(ZJ(a));
        for (var e = 0; e < b.length; ++e)
            if (!d.contains(e)) {
                var f = $J(a, b[e]);
                c.push(...f)
            }
        c.push(new qp(0, 0));
        c.push(rp(new qp(Xn(a.g).scrollHeight, 0)));
        b = aK(c);
        c = new mo;
        for (d = 0; d < b.length; ++d) e = b[d], f = a.G ? 0 : Math.floor(e.g / a.l), io(c, f) || c.set(f, []), c.get(f).push(e);
        b = dK(a, c);
        c = new YG;
        c = ui(c, 1, a.i);
        c = ui(c, 2, a.l);
        c = ui(c, 3, a.A);
        a = ti(c, 4, a.C);
        return ei(a, 5, b)
    }

    function gK(a) {
        a = fK(a);
        return eK(a)
    }
    var WJ = class {
        constructor(a, b, c) {
            this.G = c.md == -1;
            this.l = c.md;
            this.F = c.uc == -1;
            this.A = c.uc;
            this.B = c.Cc == -1;
            this.i = c.Cc;
            this.C = c.rg;
            this.j = b;
            this.g = a
        }
    };

    function lr(a, b, c) {
        let d = b.Pa;
        b.rb && U(gs) && (d = 1, "r" in c && (c.r += "F"));
        d <= 0 || (!b.Ua || "pvc" in c || (c.pvc = ff(a.g)), ey(b.qb, c, d))
    }

    function hK(a, b, c) {
        c = c.l(a.g);
        b.Ua && (c.pvc = ff(a.g));
        0 <= b.Pa && (c.r = b.Pa, lr(a, b, c))
    }
    var iK = class {
        constructor(a) {
            this.g = a
        }
    };
    const jK = {
        google_ad_channel: !0,
        google_ad_host: !0
    };

    function kK(a, b) {
        a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        ey("ama", b, .01)
    }

    function lK(a) {
        const b = {};
        Fe(jK, (c, d) => {
            d in a && (b[d] = a[d])
        });
        return b
    };

    function mK(a) {
        const b = /[a-zA-Z0-9._~-]/,
            c = /%[89a-zA-Z]./;
        return a.replace(/(%[a-zA-Z0-9]{2})/g, d => {
            if (!d.match(c)) {
                const e = decodeURIComponent(d);
                if (e.match(b)) return e
            }
            return d.toUpperCase()
        })
    }

    function nK(a) {
        let b = "";
        const c = /[/%?&=]/;
        for (let d = 0; d < a.length; ++d) {
            const e = a[d];
            b = e.match(c) ? b + e : b + encodeURIComponent(e)
        }
        return b
    };

    function oK(a, b) {
        a = Lh(a, 2, yg, y());
        if (!a) return !1;
        for (let c = 0; c < a.length; c++)
            if (a[c] == b) return !0;
        return !1
    }

    function pK(a, b) {
        a = nK(mK(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
        const c = He(a),
            d = qK(a);
        return b.find(e => {
            const f = Hh(e, nq, 7) ? Cg(Ch(z(e, nq, 7), 1)) : Cg(Ch(e, 1));
            e = Hh(e, nq, 7) ? ki(z(e, nq, 7), 2) : 2;
            if (typeof f !== "number") return !1;
            switch (e) {
                case 1:
                    return f == c;
                case 2:
                    return d[f] || !1
            }
            return !1
        }) || null
    }

    function qK(a) {
        const b = {};
        for (;;) {
            b[He(a)] = !0;
            if (!a) return b;
            a = a.substring(0, a.lastIndexOf("/"))
        }
    };

    function rK(a, b) {
        try {
            b.removeItem("google_ama_config")
        } catch (c) {
            kK(a, {
                lserr: 1
            })
        }
    };

    function sK() {
        var a = new Dq;
        a = Ei(a, 1, "Toggle toolbar expansion");
        a = Ei(a, 2, "Toggle privacy and legal settings display");
        return Ei(a, 3, "Dismiss privacy and legal settings display").i()
    };
    var uK = (a, b, c, d, e, f = null, h = null) => {
            tK(a, new iK(a), b, c, d, e, f, h)
        },
        tK = (a, b, c, d, e, f, h = null, k = null) => {
            if (c)
                if (d) {
                    var l = VB(d, e);
                    try {
                        const m = new vK(a, b, c, d, e, l, f, h, k);
                        Mu(990, () => wK(m), a)
                    } catch (m) {
                        Aj() && Bj(15, [m]), hK(b, er, eI(hI(gI((new iI(0)).Ub(c), d), l).wa(1), m)), lF(P(iF), Hl(new Pl, al(1)))
                    }
                } else hK(b, er, (new iI(0)).Ub(c).wa(8)), lF(P(iF), Hl(new Pl, al(8)));
            else hK(b, er, (new iI(0)).wa(9)), lF(P(iF), Hl(new Pl, al(9)))
        };

    function wK(a) {
        a.G.forEach(b => {
            switch (b) {
                case 0:
                    Mu(991, () => xK(a), a.g);
                    break;
                case 1:
                    Mu(1073, () => {
                        const c = U(ms);
                        OB(new UB(a.g, a.C, a.j, a.A, a.i.aa, c))
                    }, a.g);
                    break;
                case 2:
                    yK(a);
                    break;
                case 6:
                    a.runAutoGames();
                    break;
                case 7:
                    Mu(1203, () => {
                        var c = z(a.j, Pq, 34);
                        if (c) {
                            var d = a.g,
                                e = a.A,
                                f = c.i();
                            c = d.location.hostname;
                            var h = z(f, Oq, 1) ? .g() ? ? [];
                            c = new SG(e, c, ff(r), h);
                            if (h = z(f, Oq, 1))
                                if (f = z(f, Nq, 2)) {
                                    tp(d, zG);
                                    const m = new so;
                                    var k = d.innerWidth;
                                    var l = .375 * k;
                                    k = new LC(l, k - l);
                                    l = d.innerWidth;
                                    l = Sn(d) >= 900 ? .2 * l : .5 * l;
                                    LG(new NG(d, e,
                                        h, f, new sG(d, k, l, m, new cG(m)), c))
                                } else c.reportError("No messages");
                            else c.reportError("No settings")
                        }
                    }, a.g)
            }
        })
    }

    function xK(a) {
        var b = U(Ur) ? void 0 : a.i.yj;
        let c = null;
        c = U(Ur) ? cw(a.g) : aw(a.g, b);
        if (a.i.aa && Hh(a.i.aa, mq, 10)) {
            var d = Kh(a.i.aa.g(), 1);
            d !== null && d !== void 0 && (c = Sv(a.g, d, b));
            U(ks) && a.i.aa.g() ? .g() === 2 && (c = $v(a.i.aa.g(), c))
        }
        Hh(a.j, jq, 26) && (c = ew(c, z(a.j, jq, 26), a.g));
        c = gw(c, a.g);
        b = a.i.aa ? Lh(a.i.aa, 6, yg, y(kg)) : [];
        d = a.i.aa ? di(a.i.aa, sq, 5, y(kg)) : [];
        const e = a.i.aa ? Lh(a.i.aa, 2, yg, y(kg)) : [],
            f = Mu(993, () => {
                var h = a.j,
                    k = di(h, Lq, 1, y(kg)),
                    l = a.i.aa && oK(a.i.aa, 1);
                l = U(ps) ? "" : l ? "text_image" : "text";
                var m = new LJ,
                    n = bv(k, a.g, {
                        Mh: m,
                        Vi: new $u(l)
                    });
                k.length != n.length && a.H.push(13);
                n = n.concat(QJ(new RJ(a.g, m)));
                k = U(hs);
                m = z(h, Xq, 24) ? .j() ? .g() ? .g() || !1;
                if (k || m) k = NJ(new OJ(a.g)), m = P(EI), n = n.concat(k), m.M = !0, m.B = k.length, a.F === "n" && (a.F = z(h, Xq, 24) ? .g() ? .length ? "o" : "p");
                k = U(ks) && a.i.aa.g() ? .g() === 2 && a.i.aa.g() ? .j();
                k = U(Pr) || k;
                a: {
                    if (m = z(h, Hq, 6))
                        for (p of m.g())
                            if (Hh(p, Rp, 4)) {
                                var p = !0;
                                break a
                            }
                    p = !1
                }
                k && p ? (p = n.concat, k = a.g, (m = z(h, Hq, 6)) ? (k = Fv(m.g(kg), k), l = TG(h, l, k)) : l = [], l = p.call(n, l)) : (p = n.concat, k = a.g, (m = z(h, Hq, 6)) ? (k = Ev(m.g(kg),
                    k), l = TG(h, l, k)) : l = [], l = p.call(n, l));
                n = l;
                h = z(h, Xq, 24);
                return new SI(n, a.g, h)
            }, a.g);
        a.l = new sJ(f, a.A, a.g, {
            Cb: c,
            Ei: a.M,
            sc: a.i.sc,
            ni: b,
            ee: d
        }, zK(a), e, U(gs));
        oJ(a.l) ? .optimization ? .ablatingThisPageview && !a.l.sb() && (wu(a.g), P(EI).C = !0, a.F = "f");
        a.B = vJ(e, a.l, a.g);
        Mu(992, () => BJ(a.B), a.g).then(Mu(994, () => a.ia.bind(a), a.g), a.ca.bind(a));
        AK(a)
    }

    function yK(a) {
        const b = z(a.j, Mq, 18);
        b && rF(new sF(a.g, new aG(a.g, a.A), b, new hA(a.g), di(a.j, Lq, 1, y(kg))))
    }

    function zK(a) {
        const b = U(js);
        if (!a.j.g()) return {
            bh: b,
            jh: !1,
            oi: !1,
            kh: !1,
            dg: !1,
            Vg: !1,
            vj: 0,
            Ng: 0,
            Gf: BK(a),
            He: a.I
        };
        const c = a.j.g();
        return {
            bh: b || K(c, 14, !1),
            jh: K(c, 2, !1),
            oi: K(c, 3, !1),
            kh: K(c, 4, !1),
            dg: K(c, 5, !1),
            Vg: K(c, 6, !1),
            vj: ni(c, 8, 0),
            Ng: ki(c, 10),
            Gf: BK(a),
            He: a.I
        }
    }

    function AK(a) {
        if (U(Mt)) {
            var b = new KJ(a.A);
            const e = z(a.j, Hq, 6) ? .g(kg),
                f = e ? .length > 0;
            var c = b,
                d = !!$z(a.g).reactiveTypeEnabledInAsfe[8];
            HJ(c, {
                typ: "pv",
                asp: Number(f),
                ve: Number(d)
            });
            f && (a = new IJ(a.g, e, b), b = EJ(a.win, a.g), b.length === 0 ? JJ(a.L, {
                ke: 0
            }) : (c = FJ(b), d = c.g.getBoundingClientRect(), JJ(a.L, {
                ke: b.length,
                W: Tn(a.win),
                Hc: Xn(a.win).scrollHeight,
                Dh: d.height,
                Fh: a.win.scrollY + d.top
            }), c = c.g, GJ(a, c, 0, "-50% 0px 0px 0px"), GJ(a, c, 1, "0px 0px 0px 0px")))
        }
    }

    function BK(a) {
        return U(as) || U(ks) && a.i.aa ? .g() ? .g() === 2 ? !1 : a.i.aa && Hh(a.i.aa, mq, 10) ? (Kh(a.i.aa.g(), 1) || 0) >= .5 : !0
    }

    function CK(a, b) {
        for (var c = dI(dI(new iI(b.La), b.errors), a.H), d = b.zb, e = 0; e < d.length; e++) a: {
            for (var f = c, h = d[e], k = 0; k < f.C.length; k++)
                if (f.C[k] == h) break a;f.C.push(h)
        }
        c.g.pp = b.Od;
        c.g.ppp = b.Pd;
        c.g.ppos = b.placementPositionDiffs;
        c.g.eatf = b.kc;
        c.g.eatfAbg = b.lc;
        c.g.reatf = b.Jb;
        c = hI(gI(c.H(a.B.l.slice(0)), a.j), a.G).Ub(a.A);
        if (d = b.Ga) c.g.as_count = d.Df, c.g.d_count = d.bg, c.g.ng_count = d.Eg, c.g.am_count = d.If, c.g.atf_count = d.Ef, c.g.mdns = jI(d.zg), c.g.alldns = jI(d.Ff);
        c = c.G(b.Qb).Zg(b.kd);
        d = b.Hc;
        d != null && (c.g.pgh = d);
        c.g.abl = b.mg;
        c.g.rr = a.F;
        b.exception !== void 0 && eI(c, b.exception).wa(1);
        return c
    }

    function DK(a, b) {
        var c = CK(a, b);
        hK(a.C, b.errors.length > 0 || a.H.length > 0 || b.exception !== void 0 ? er : dr, c);
        if (z(a.j, Xq, 24)) {
            a.l.i.g.g ? .F();
            b = oJ(a.l);
            const d = P(EI);
            d.j = !!b ? .optimization ? .ablationFromStorage;
            b ? .optimization ? .ablatingThisPageview && (d.G = !0);
            d.R = !!b ? .optimization ? .availableAbg;
            b = P(EI);
            c = new vI(c);
            b.A ? (c.i.sl = lI(b.A ? ? []), c.i.daaos = lI(b.H ? ? []), c.i.ab = mI(b.G), c.i.rr = mI(b.M), c.i.oab = mI(b.F), b.j != null && (c.i.sab = mI(b.j)), b.C && (c.i.fb = mI(b.C)), c.i.ls = mI(b.R), nI(c, b.i.vc()), b.B != null && (c.i.rp = mI(b.B)),
                b.l != null && (c.i.expl = mI(b.l)), DI(b, c)) : c.errors.push("irr");
            hK(a.C, gr, c)
        }
        c = a.l ? .ua();
        U(gs) && c != null && (c = new Map([...c.j.map.entries()].map(kG)), b = new TJ, SJ(b, c), hK(a.C, jr, b))
    }

    function EK(a, b) {
        const c = P(iF);
        if (c.i) {
            var d = new Pl,
                e = b.zb.filter(h => h !== null),
                f = a.H.concat(b.errors, b.exception ? [1] : []).filter(h => h !== null);
            Ll(Jl(Ol(Nl(Ml(Kl(El(Gl(Il(Fl(d, a.B.l.slice(0).map(h => {
                var k = new $k;
                return Fh(k, 1, xg(h))
            })), e.map(h => {
                var k = new cl;
                return Fh(k, 1, xg(h))
            })), f.map(h => al(h))), z(a.j, wq, 23) ? .g()), b.La).G(b.Qb), b.Jb), b.kc), b.lc), a.G.map(h => h.toString())), jl(il(hl(gl(fl(el(dl(new kl, b.Ga ? .Df), b.Ga ? .bg), b.Ga ? .Eg), b.Ga ? .If), b.Ga ? .Ef), b.Ga ? .zg), b.Ga ? .Ff));
            if (b.kd)
                for (let h of ko(b.kd)) {
                    e =
                        new Sh;
                    for (let k of b.kd.get(h)) ol(e, ml(ll(new nl, k.kb), k.lh));
                    Rh(d).set(h.toString(), e)
                }
            z(a.j, Xq, 24) && Cl(d);
            lF(c, d)
        }
    }

    function FK(a, b) {
        try {
            U(Rr) && a.l ? .Fa() ? .A()
        } catch (c) {
            hK(a.C, ir, eI(hI(gI((new iI(b)).Ub(a.A), a.j), a.G).wa(14), c))
        }
    }

    function GK(a, b, c) {
        {
            var d = oJ(a.l),
                e = b.g;
            const f = e.g,
                h = e.Od;
            let k = e.La,
                l = e.Pd,
                m = e.errors.slice(),
                n = e.zb.slice(),
                p = b.exception;
            const q = SE(a.g).had_ads_ablation ? ? !1;
            d ? (d.numAutoAdsPlaced ? k += d.numAutoAdsPlaced : a.B.j && n.push(13), d.exception !== void 0 && (p = d.exception), d.numPostPlacementsPlaced && (l += d.numPostPlacementsPlaced), c = {
                La: k,
                Od: h,
                Pd: l,
                Qb: f,
                errors: e.errors.slice(),
                zb: n,
                exception: p,
                Jb: c,
                kc: !!d.eatf,
                lc: !!d.eatfAbg,
                mg: q
            }) : (n.push(12), a.B.j && n.push(13), c = {
                La: k,
                Od: h,
                Pd: l,
                Qb: f,
                errors: m,
                zb: n,
                exception: p,
                Jb: c,
                kc: !1,
                lc: !1,
                mg: q
            })
        }
        c.Ga = kJ(a.l.g);
        if (b = b.g.i) c.kd = b;
        c.Hc = Xn(a.g).scrollHeight;
        if (Aj() || z(a.j, vq, 25) ? .j()) {
            d = Bp(a.l.i.i);
            b = [];
            for (const f of d) {
                d = {};
                e = f.I;
                for (const h of ko(e)) d[h] = e.get(h);
                d = {
                    anchorElement: fv(f),
                    position: f.g(),
                    clearBoth: f.H,
                    locationType: f.Lb,
                    placed: f.A,
                    placementProto: f.l ? Ii(f.l) : null,
                    articleStructure: f.C ? Ii(f.C) : null,
                    rejectionReasons: d
                };
                b.push(d)
            }
            Bj(14, [{
                placementIdentifiers: b
            }, a.l.G, c.Ga])
        }
        return c
    }

    function HK(a, b) {
        var c = a.l.g;
        c = c.googleSimulationState = c.googleSimulationState || {};
        c.amaConfigPlacementCount = b.Qb;
        c.numAutoAdsPlaced = b.La;
        c.hasAtfAd = b.Jb;
        b.exception !== void 0 && (c.exception = b.exception);
        a.l != null && (a = VJ(a.g, a.l, {
            md: -1,
            uc: -1,
            Cc: -1,
            rg: !0,
            Hf: !0
        }), a.g != null ? (c.placementPositionDiffs = gK(a.getValue()), b = fK(a.getValue()), a = new ZG, a = E(a, 2, $G, b), c.placementPositionDiffsReport = Hi(a)) : (b = a.i.message, c.placementPositionDiffs = "E" + b, a = new ZG, a = Xh(a, 1, $G, Sg(b)), c.placementPositionDiffsReport = Hi(a)))
    }

    function IK(a, b) {
        DK(a, {
            La: 0,
            Qb: void 0,
            errors: [],
            zb: [],
            exception: b,
            Jb: void 0,
            kc: void 0,
            lc: void 0,
            Ga: void 0
        });
        EK(a, {
            La: 0,
            Qb: void 0,
            errors: [],
            zb: [],
            exception: b,
            Jb: void 0,
            kc: void 0,
            lc: void 0,
            Ga: void 0
        })
    }
    class vK {
        constructor(a, b, c, d, e, f, h, k, l) {
            this.g = a;
            this.C = b;
            this.A = c;
            this.j = d;
            this.i = e;
            this.G = f;
            this.M = k || null;
            this.H = [];
            this.I = l;
            this.R = h;
            this.F = "n"
        }
        runAutoGames() {
            const a = z(this.j, xq, 32);
            a && this.R.runAutoGames({
                win: this.g,
                webPropertyCode: this.A,
                Nf: a,
                Hb: (z(this.j, Eq, 33) ? .g() ? .i() ? ? null) || sK()
            })
        }
        ia(a) {
            try {
                FK(this, a.g.La);
                const b = jJ(this.l.g) || void 0;
                cr({
                    Be: b
                }, this.g);
                const c = GK(this, a, jJ(this.l.g));
                Hh(this.j, vq, 25) && ii(z(this.j, vq, 25), 1) && HK(this, c);
                DK(this, c);
                EK(this, c);
                nw(753, () => {
                    if (U(Vr) && this.l !=
                        null) {
                        var d = VJ(this.g, this.l, {
                                md: V(fs),
                                uc: V(es),
                                Cc: V(Xr),
                                rg: !0,
                                Hf: !1
                            }),
                            e = Nb(c);
                        d.g != null ? (d = gK(d.getValue()), e.placementPositionDiffs = d) : e.placementPositionDiffs = "E" + d.i.message;
                        e = CK(this, e);
                        hK(this.C, fr, e)
                    }
                })()
            } catch (b) {
                IK(this, b)
            }
        }
        ca(a) {
            FK(this, 0);
            IK(this, a)
        }
    };
    var JK = class extends O {},
        KK = Oi(JK);

    function LK(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        const c = b;
        return c ? Hp(() => KK(c)) : Ep(null)
    };

    function MK(a, b) {
        return ti(a, 5, b)
    }

    function NK(a, b) {
        return ti(a, 14, b)
    }
    var OK = class extends O {
        constructor() {
            super()
        }
        l() {
            return F(this, 1) != null
        }
        j() {
            return F(this, 2) != null
        }
        A() {
            return K(this, 3)
        }
        C() {
            return ii(this, 3) != null
        }
        g() {
            return K(this, 5)
        }
    };
    OK.O = [10];
    var RK = ({
        win: a,
        Va: b,
        pg: c = !1,
        qg: d = !1
    }) => PK({
        win: a,
        Va: b,
        pg: c,
        qg: d
    }) ? (b = IE(DE(), 24)) ? QK(a, MK(new OK, QF(b))) : new Fp(null, Error("tcunav")) : QK(a, MK(new OK, !0));

    function PK({
        win: a,
        Va: b,
        pg: c,
        qg: d
    }) {
        if (!(d = !d && VF(new ZF(a)))) {
            if (c = !c) {
                if (b) {
                    a = LK(a);
                    if (a.g != null)
                        if ((a = a.getValue()) && ki(a, 1) != null) b: switch (a = ki(a, 1), a) {
                            case 1:
                                a = !0;
                                break b;
                            default:
                                throw Error("Unhandled AutoGdprFeatureStatus: " + a);
                        } else a = !1;
                        else W.ba(806, a.i, void 0, void 0), a = !1;
                    b = !a
                }
                c = b
            }
            d = c
        }
        return d ? !0 : !1
    }

    function QK(a, b) {
        return (a = qj(b, a)) ? Ep(a) : new Fp(null, Error("unav"))
    };
    var SK = class extends O {};
    class TK {
        constructor(a, b, c, d, e) {
            this.g = a;
            this.l = b;
            this.C = c;
            this.i = !1;
            this.j = d;
            this.A = e
        }
    };
    class UK {
        constructor() {
            this.promise = new Promise((a, b) => {
                this.resolve = a;
                this.reject = b
            })
        }
    };

    function VK() {
        const {
            promise: a,
            resolve: b
        } = new UK;
        return {
            promise: a,
            resolve: b
        }
    };

    function WK(a, b, c = () => {}) {
        b.google_llp || (b.google_llp = {});
        b = b.google_llp;
        let d = b[a];
        if (d) return d;
        d = VK();
        b[a] = d;
        c();
        return d
    }

    function XK(a, b, c) {
        return WK(a, b, () => {
            Be(b.document, c)
        }).promise
    };

    function YK() {
        const a = {};
        $t(Kr) && (a.bust = $t(Kr));
        var b = DE();
        b = IE(b, 38, "");
        b !== "" && (a.sbust = b);
        return a
    }
    const ZK = new Map([
        [2, 7],
        [3, 1],
        [4, 3],
        [5, 12]
    ]);

    function $K(a, b, c) {
        c = dc(c, YK());
        if (a === 1) return {
            Ao: Be(b.document, c),
            Qc: new Promise(() => {})
        };
        if (ZK.has(a)) return {
            Qc: XK(ZK.get(a), b, c)
        };
        throw Error(`Unexpected chunkId: ${a}`);
    };
    var aL = class {
        constructor(a) {
            this.jb = a
        }
        runAutoGames({
            win: a,
            webPropertyCode: b,
            Nf: c,
            Hb: d
        }) {
            fy(1116, $K(5, a, this.jb).Qc.then(e => {
                e.runAutoGames({
                    win: a,
                    webPropertyCode: b,
                    serializedAutoGamesConfig: Hi(c),
                    serializedFloatingToolbarMessages: Hi(d)
                })
            }))
        }
    };
    var bL = {
            Xk: "google_ads_preview",
            Kl: "google_mc_lab",
            am: "google_anchor_debug",
            Zl: "google_bottom_anchor_debug",
            INTERSTITIAL: "google_ia_debug",
            wm: "google_scr_debug",
            ym: "google_ia_debug_allow_onclick",
            Wm: "googleads",
            xh: "google_pedestal_debug",
            qn: "google_responsive_slot_preview",
            pn: "google_responsive_dummy_ad",
            Nk: "google_audio_sense",
            Qk: "google_auto_gallery",
            Sk: "google_auto_storify_swipeable",
            Rk: "google_auto_storify_scrollable",
            Pk: "google_games_single_game",
            Ok: "google_games_catalog"
        },
        cL = {
            google_bottom_anchor_debug: 1,
            google_anchor_debug: 2,
            google_ia_debug: 8,
            google_scr_debug: 9,
            googleads: 2,
            google_pedestal_debug: 30
        };
    var dL = {
        INTERSTITIAL: 1,
        BOTTOM_ANCHOR: 2,
        TOP_ANCHOR: 3,
        1: "INTERSTITIAL",
        2: "BOTTOM_ANCHOR",
        3: "TOP_ANCHOR"
    };

    function eL(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (a.indexOf(b) != -1) return !0;
        b = fL(b);
        return b != "go" && a.indexOf(b) != -1 ? !0 : !1
    }

    function fL(a) {
        let b = "";
        Fe(a.split("_"), c => {
            b += c.substr(0, 2)
        });
        return b
    }

    function gL() {
        var a = r.location;
        let b = !1;
        Fe(bL, c => {
            eL(a, c) && (b = !0)
        });
        return b
    }

    function hL(a, b) {
        switch (a) {
            case 1:
                return eL(b, "google_ia_debug");
            case 2:
                return eL(b, "google_bottom_anchor_debug");
            case 3:
                return eL(b, "google_anchor_debug") || eL(b, "googleads")
        }
    };

    function iL({
        win: a,
        webPropertyCode: b,
        jb: c
    }) {
        eL(a.location, "google_games_single_game") ? jL(a, b, 1, c) : eL(a.location, "google_games_catalog") && jL(a, b, 2, c)
    }

    function jL(a, b, c, d) {
        var e = new xq;
        c = Fh(e, 1, xg(c));
        (new aL(d)).runAutoGames({
            win: a,
            webPropertyCode: b,
            Nf: c,
            Hb: sK()
        })
    };
    var kL = class extends O {
        constructor() {
            super()
        }
        Ki() {
            return oi(this, 3)
        }
    };
    const lL = {
        "-": 0,
        Y: 2,
        N: 1
    };
    var mL = class extends O {
        constructor() {
            super()
        }
        getVersion() {
            return li(this, 2)
        }
    };
    mL.O = [3];

    function nL(a) {
        return a.includes("~") ? a.split("~").slice(1) : []
    };

    function oL(a) {
        return sf(a.length % 4 !== 0 ? a + "A" : a).map(b => b.toString(2).padStart(8, "0")).join("")
    }

    function pL(a) {
        if (!/^[0-1]+$/.test(a)) throw Error(`Invalid input [${a}] not a bit string.`);
        return parseInt(a, 2)
    }

    function qL(a) {
        if (!/^[0-1]+$/.test(a)) throw Error(`Invalid input [${a}] not a bit string.`);
        const b = [1, 2, 3, 5];
        let c = 0;
        for (let d = 0; d < a.length - 1; d++) b.length <= d && b.push(b[d - 1] + b[d - 2]), c += parseInt(a[d], 2) * b[d];
        return c
    }

    function rL(a, b) {
        a = oL(a);
        return a.length < b ? a.padEnd(b, "0") : a
    };

    function sL(a) {
        var b = oL(a),
            c = pL(b.slice(0, 6));
        a = pL(b.slice(6, 12));
        var d = new mL;
        c = vi(d, 1, c);
        a = vi(c, 2, a);
        b = b.slice(12);
        c = pL(b.slice(0, 12));
        d = [];
        let e = b.slice(12).replace(/0+$/, "");
        for (let l = 0; l < c; l++) {
            if (e.length === 0) throw Error(`Found ${l} of ${c} sections [${d}] but reached end of input [${b}]`);
            var f = pL(e[0]) === 0;
            e = e.slice(1);
            var h = tL(e, b),
                k = d.length === 0 ? 0 : d[d.length - 1];
            k = qL(h) + k;
            e = e.slice(h.length);
            if (f) d.push(k);
            else {
                f = tL(e, b);
                h = qL(f);
                for (let m = 0; m <= h; m++) d.push(k + m);
                e = e.slice(f.length)
            }
        }
        if (e.length >
            0) throw Error(`Found ${c} sections [${d}] but has remaining input [${e}], entire input [${b}]`);
        return Th(a, 3, d, zg)
    }

    function tL(a, b) {
        const c = a.indexOf("11");
        if (c === -1) throw Error(`Expected section bitstring but not found in [${a}] part of [${b}]`);
        return a.slice(0, c + 2)
    };
    var uL = class extends O {
        constructor() {
            super()
        }
    };
    var vL = class extends O {
        constructor() {
            super()
        }
    };
    var wL = class extends O {
        getVersion() {
            return li(this, 1)
        }
    };
    var xL = class extends O {
        constructor() {
            super()
        }
    };

    function yL(a) {
        var b = new zL;
        return C(b, 1, a)
    }
    var zL = class extends O {
        constructor() {
            super()
        }
    };
    const AL = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        BL = 6 + AL.reduce((a, b) => a + b);
    var CL = class extends O {
        constructor() {
            super()
        }
    };
    var DL = class extends O {
        getVersion() {
            return li(this, 1)
        }
    };
    var EL = class extends O {
        constructor() {
            super()
        }
    };

    function FL(a) {
        var b = new GL;
        return C(b, 1, a)
    }
    var GL = class extends O {
        constructor() {
            super()
        }
    };
    const HL = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        IL = 6 + HL.reduce((a, b) => a + b);
    var JL = class extends O {
        constructor() {
            super()
        }
    };
    var KL = class extends O {
        constructor() {
            super()
        }
    };
    var LL = class extends O {
        getVersion() {
            return li(this, 1)
        }
    };
    var ML = class extends O {
        constructor() {
            super()
        }
    };

    function NL(a) {
        var b = new OL;
        return C(b, 1, a)
    }
    var OL = class extends O {
        constructor() {
            super()
        }
    };
    const PL = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        QL = 6 + PL.reduce((a, b) => a + b);
    var RL = class extends O {
        constructor() {
            super()
        }
    };
    var SL = class extends O {
        constructor() {
            super()
        }
    };
    var TL = class extends O {
        getVersion() {
            return li(this, 1)
        }
    };
    var UL = class extends O {
        constructor() {
            super()
        }
    };

    function VL(a) {
        var b = new WL;
        return C(b, 1, a)
    }
    var WL = class extends O {
        constructor() {
            super()
        }
    };
    const XL = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        YL = 6 + XL.reduce((a, b) => a + b);
    var ZL = class extends O {
        constructor() {
            super()
        }
    };
    var $L = class extends O {
        constructor() {
            super()
        }
        getVersion() {
            return li(this, 1)
        }
    };
    const aM = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        bM = 6 + aM.reduce((a, b) => a + b);

    function cM() {
        var a = new dM;
        return Di(a, 1, 0)
    }

    function eM(a) {
        var b = Number;
        var c = Ch(a, 1);
        c = c == null ? c : vg(c) ? typeof c === "string" ? Eg(c) : Fg(c) : void 0;
        b = b(c ? ? "0");
        a = li(a, 2);
        return new Date(b * 1E3 + a / 1E6)
    }
    var dM = class extends O {};
    var fM = "a".charCodeAt(),
        gM = Mb(Jn),
        hM = Mb(Kn);

    function iM(a, b) {
        if (a.g + b > a.i.length) throw Error("Requested length " + b + " is past end of string.");
        const c = a.i.substring(a.g, a.g + b);
        a.g += b;
        return parseInt(c, 2)
    }

    function jM(a) {
        let b = iM(a, 12);
        const c = [];
        for (; b--;) {
            var d = !!iM(a, 1) === !0,
                e = iM(a, 16);
            if (d)
                for (d = iM(a, 16); e <= d; e++) c.push(e);
            else c.push(e)
        }
        c.sort((f, h) => f - h);
        return c
    }

    function kM(a, b, c) {
        const d = [];
        for (let e = 0; e < b; e++)
            if (iM(a, 1)) {
                const f = e + 1;
                if (c && c.indexOf(f) === -1) throw Error(`ID: ${f} is outside of allowed values!`);
                d.push(f)
            }
        return d
    }

    function lM(a) {
        const b = iM(a, 16);
        return !!iM(a, 1) === !0 ? (a = jM(a), a.forEach(c => {
            if (c > b) throw Error(`ID ${c} is past MaxVendorId ${b}!`);
        }), a) : kM(a, b)
    }
    class mM {
        constructor(a) {
            if (/[^01]/.test(a)) throw Error(`Input bitstring ${a} is malformed!`);
            this.i = a;
            this.g = 0
        }
        skip(a) {
            this.g += a
        }
    };
    var oM = a => {
        try {
            var b = sf(a.split(".")[0]).map(d => d.toString(2).padStart(8, "0")).join("");
            const c = new mM(b);
            b = {};
            b.tcString = a;
            b.gdprApplies = !0;
            c.skip(78);
            b.cmpId = iM(c, 12);
            b.cmpVersion = iM(c, 12);
            c.skip(30);
            b.tcfPolicyVersion = iM(c, 6);
            b.isServiceSpecific = !!iM(c, 1);
            b.useNonStandardStacks = !!iM(c, 1);
            b.specialFeatureOptins = nM(kM(c, 12, hM), hM);
            b.purpose = {
                consents: nM(kM(c, 24, gM), gM),
                legitimateInterests: nM(kM(c, 24, gM), gM)
            };
            b.purposeOneTreatment = !!iM(c, 1);
            b.publisherCC = String.fromCharCode(fM + iM(c, 6)) + String.fromCharCode(fM +
                iM(c, 6));
            b.vendor = {
                consents: nM(lM(c), null),
                legitimateInterests: nM(lM(c), null)
            };
            return b
        } catch (c) {
            return null
        }
    };
    const nM = (a, b) => {
        const c = {};
        if (Array.isArray(b) && b.length !== 0)
            for (const d of b) c[d] = a.indexOf(d) !== -1;
        else
            for (const d of a) c[d] = !0;
        delete c[0];
        return c
    };
    var pM = class extends O {
        g() {
            return F(this, 2) != null
        }
    };
    var qM = class extends O {
        l() {
            return F(this, 2) != null
        }
    };
    var rM = class extends O {
        j() {
            return F(this, 1) != null
        }
    };
    var sM = class extends O {},
        tM = Oi(sM);
    sM.O = [7];

    function uM(a) {
        a = vM(a);
        try {
            var b = a ? tM(a) : null
        } catch (c) {
            b = null
        }
        return b ? z(b, rM, 4) || null : null
    }

    function vM(a) {
        a = (new oj(a)).get("FCCDCF", "");
        if (a)
            if (a.startsWith("%")) try {
                var b = decodeURIComponent(a)
            } catch (c) {
                b = null
            } else b = a;
            else b = null;
        return b
    };

    function wM(a) {
        a.__tcfapiPostMessageReady || xM(new yM(a))
    }

    function xM(a) {
        a.g = b => {
            const c = typeof b.data === "string";
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__tcfapiCall;
            e && (e.command === "ping" || e.command === "addEventListener" || e.command === "removeEventListener") && (0, a.win.__tcfapi)(e.command, e.version, (f, h) => {
                const k = {};
                k.__tcfapiReturn = e.command === "removeEventListener" ? {
                    success: f,
                    callId: e.callId
                } : {
                    returnValue: f,
                    success: h,
                    callId: e.callId
                };
                f = c ? JSON.stringify(k) : k;
                b.source && typeof b.source.postMessage === "function" && b.source.postMessage(f,
                    b.origin);
                return f
            }, e.parameter)
        };
        a.win.addEventListener("message", a.g);
        a.win.__tcfapiPostMessageReady = !0
    }
    var yM = class {
        constructor(a) {
            this.win = a
        }
    };

    function zM(a) {
        a.__uspapiPostMessageReady || AM(new BM(a))
    }

    function AM(a) {
        a.g = b => {
            const c = typeof b.data === "string";
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__uspapiCall;
            e && e.command === "getUSPData" && a.win.__uspapi(e.command, e.version, (f, h) => {
                const k = {};
                k.__uspapiReturn = {
                    returnValue: f,
                    success: h,
                    callId: e.callId
                };
                f = c ? JSON.stringify(k) : k;
                b.source && typeof b.source.postMessage === "function" && b.source.postMessage(f, b.origin);
                return f
            })
        };
        a.win.addEventListener("message", a.g);
        a.win.__uspapiPostMessageReady = !0
    }
    var BM = class {
        constructor(a) {
            this.win = a;
            this.g = null
        }
    };
    var CM = class extends O {};
    var DM = class extends O {
            g() {
                return F(this, 1) != null
            }
        },
        EM = Oi(DM);
    DM.O = [2];

    function FM(a, b, c) {
        function d(p) {
            if (p.length < 10) return null;
            var q = k(p.slice(0, 4));
            q = l(q);
            p = k(p.slice(6, 10));
            p = m(p);
            return "1" + q + p + "N"
        }

        function e(p) {
            if (p.length < 10) return null;
            var q = k(p.slice(0, 6));
            q = l(q);
            p = k(p.slice(6, 10));
            p = m(p);
            return "1" + q + p + "N"
        }

        function f(p) {
            if (p.length < 12) return null;
            var q = k(p.slice(0, 6));
            q = l(q);
            p = k(p.slice(8, 12));
            p = m(p);
            return "1" + q + p + "N"
        }

        function h(p) {
            if (p.length < 18) return null;
            var q = k(p.slice(0, 8));
            q = l(q);
            p = k(p.slice(12, 18));
            p = m(p);
            return "1" + q + p + "N"
        }

        function k(p) {
            const q = [];
            let t = 0;
            for (let w = 0; w < p.length / 2; w++) q.push(pL(p.slice(t, t + 2))), t += 2;
            return q
        }

        function l(p) {
            return p.every(q => q === 1) ? "Y" : "N"
        }

        function m(p) {
            return p.some(q => q === 1) ? "Y" : "N"
        }
        if (a.length === 0) return null;
        a = a.split(".");
        if (a.length > 2) return null;
        a = oL(a[0]);
        const n = pL(a.slice(0, 6));
        a = a.slice(6);
        if (n !== 1) return null;
        switch (b) {
            case 8:
                return d(a);
            case 10:
            case 12:
            case 9:
                return e(a);
            case 11:
                return f(a);
            case 7:
                return c ? h(a) : null;
            default:
                return null
        }
    };

    function GM(a) {
        var b = U(Cr);
        a !== a.top || a.__uspapi || a.frames.__uspapiLocator || (a = new HM(a, b), IM(a), JM(a))
    }

    function IM(a) {
        !a.i || a.win.__uspapi || a.win.frames.__uspapiLocator || (a.win.__uspapiManager = "fc", BF(a.win, "__uspapiLocator"), La("__uspapi", (b, c, d) => {
            typeof d === "function" && b === "getUSPData" && d({
                version: 1,
                uspString: a.i
            }, !0)
        }, a.win), zM(a.win))
    }

    function JM(a) {
        !a.tcString || a.win.__tcfapi || a.win.frames.__tcfapiLocator || (a.win.__tcfapiManager = "fc", BF(a.win, "__tcfapiLocator"), a.win.__tcfapiEventListeners = a.win.__tcfapiEventListeners || [], La("__tcfapi", (b, c, d, e) => {
            if (typeof d === "function")
                if (c && (c > 2.2 || c <= 1)) d(null, !1);
                else switch (c = a.win.__tcfapiEventListeners, b) {
                    case "ping":
                        d({
                            gdprApplies: !0,
                            cmpLoaded: !0,
                            cmpStatus: "loaded",
                            displayStatus: "disabled",
                            apiVersion: "2.2",
                            cmpVersion: 2,
                            cmpId: 300
                        });
                        break;
                    case "addEventListener":
                        b = c.push(d) - 1;
                        a.tcString ?
                            (e = oM(a.tcString), e.addtlConsent = a.g != null ? a.g : void 0, e.cmpStatus = "loaded", e.eventStatus = "tcloaded", b != null && (e.listenerId = b), b = e) : b = null;
                        d(b, !0);
                        break;
                    case "removeEventListener":
                        e !== void 0 && c[e] ? (c[e] = null, d(!0)) : d(!1);
                        break;
                    case "getInAppTCData":
                    case "getVendorList":
                        d(null, !1);
                        break;
                    case "getTCData":
                        d(null, !1)
                }
        }, a.win), wM(a.win))
    }

    function KM(a, b) {
        if (!b ? .g() || L(b, 1).length === 0 || di(b, CM, 2, y()).length === 0) return null;
        const c = L(b, 1);
        let d;
        try {
            var e = sL(c.split("~")[0]);
            d = nL(c)
        } catch (f) {
            return null
        }
        b = di(b, CM, 2, y()).reduce((f, h) => mi(LM(f), 1) > mi(LM(h), 1) ? f : h);
        e = Lh(e, 3, Ag, y()).indexOf(li(b, 1));
        return e === -1 || e >= d.length ? null : {
            uspString: FM(d[e], li(b, 1), a.j),
            we: eM(LM(b))
        }
    }

    function MM(a) {
        a = a.find(b => b && oi(b, 1) === 13);
        if (a ? .g()) try {
            return EM(L(a, 2))
        } catch (b) {}
        return null
    }

    function LM(a) {
        return Hh(a, dM, 2) ? z(a, dM, 2) : cM()
    }
    var HM = class {
        constructor(a, b) {
            this.win = a;
            this.j = b;
            b = vM(this.win.document);
            try {
                var c = b ? tM(b) : null
            } catch (e) {
                c = null
            }(b = c) ? (c = z(b, qM, 5) || null, b = di(b, pM, 7, y()), b = MM(b ? ? []), c = {
                Rf: c,
                lg: b
            }) : c = {
                Rf: null,
                lg: null
            };
            b = c;
            c = KM(this, b.lg);
            b = b.Rf;
            if (b ? .l() && L(b, 2).length !== 0) {
                var d = Hh(b, dM, 1) ? z(b, dM, 1) : cM();
                b = {
                    uspString: L(b, 2),
                    we: eM(d)
                }
            } else b = null;
            this.i = b && c ? c.we > b.we ? c.uspString : b.uspString : b ? b.uspString : c ? c.uspString : null;
            this.tcString = (c = uM(a.document)) && c.j() ? L(c, 1) : null;
            this.g = (a = uM(a.document)) && F(a, 2) != null ?
                L(a, 2) : null
        }
    };

    function NM() {
        const a = Jd();
        return a ? Za("AmazonWebAppPlatform;Android TV;Apple TV;AppleTV;BRAVIA;BeyondTV;Freebox;GoogleTV;HbbTV;LongTV;MiBOX;MiTV;NetCast.TV;Netcast;Opera TV;PANASONIC;POV_TV;SMART-TV;SMART_TV;SWTV;Smart TV;SmartTV;TV Store;UnionTV;WebOS".split(";"), b => $b(a, b)) || $b(a, "OMI/") && !$b(a, "XiaoMi/") ? !0 : $b(a, "Presto") && $b(a, "Linux") && !$b(a, "X11") && !$b(a, "Android") && !$b(a, "Mobi") : !1
    };

    function OM(a) {
        const b = a[0] / 255,
            c = a[1] / 255;
        a = a[2] / 255;
        return (b <= .03928 ? b / 12.92 : Math.pow((b + .055) / 1.055, 2.4)) * .2126 + (c <= .03928 ? c / 12.92 : Math.pow((c + .055) / 1.055, 2.4)) * .7152 + (a <= .03928 ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4)) * .0722
    }
    var PM = (a, b) => {
        a = OM(a);
        b = OM(b);
        return (Math.max(a, b) + .05) / (Math.min(a, b) + .05)
    };
    var QM = (a, b, c, d = null) => {
            const e = h => {
                let k;
                try {
                    k = JSON.parse(h.data)
                } catch (l) {
                    return
                }!k || k.googMsgType !== b || d && /[:|%3A]javascript\(/i.test(h.data) && !d(k, h) || c(k, h)
            };
            Hb(a, "message", e);
            let f = !1;
            return () => {
                let h = !1;
                f || (f = !0, h = Ib(a, "message", e));
                return h
            }
        },
        RM = (a, b, c, d = null) => {
            const e = QM(a, b, yb(c, () => e()), d);
            return e
        },
        SM = (a, b, c, d, e) => {
            if (!(e <= 0) && (c.googMsgType = b, a.postMessage(JSON.stringify(c), d), a = a.frames))
                for (let f = 0; f < a.length; ++f) e > 1 && SM(a[f], b, c, d, --e)
        };

    function TM(a, b, c, d) {
        return QM(a, "fullscreen", d.Da(952, (e, f) => {
            if (f.source === b) {
                if (!("eventType" in e)) throw Error(`bad message ${JSON.stringify(e)}`);
                delete e.googMsgType;
                c(e)
            }
        }))
    };
    async function UM(a) {
        return a.A.promise
    }
    async function VM(a) {
        return a.j.promise
    }
    async function WM(a) {
        return a.l.promise
    }

    function XM(a, b) {
        b.type = "err_st";
        b.slot = a.slotType;
        b.freq = .25;
        a.qem && (b.qem = a.qem);
        b.tag_type = a.B.Oj;
        b.version = a.B.version;
        Kk(a.ta, "fullscreen_tag", b, !1, .25)
    }
    class YM extends Q {
        constructor(a, b, c) {
            var d = W,
                e = kw,
                f = {
                    Oj: 2,
                    version: zE()
                };
            super();
            this.slotType = a;
            this.pubWin = b;
            this.ue = c;
            this.Ia = d;
            this.ta = e;
            this.B = f;
            this.g = 1;
            this.qem = null;
            this.A = new UK;
            this.j = new UK;
            this.l = new UK
        }
        J() {
            const a = TM(this.pubWin, this.ue, b => {
                if (b.eventType === "adError") this.l.resolve(), this.g = 4;
                else if (b.eventType === "adReady" && this.g === 1) this.qem = b.qem, b.slotType !== this.slotType && (XM(this, {
                    cur_st: this.g,
                    evt: b.eventType,
                    adp_tp: b.slotType
                }), this.g = 4), this.A.resolve(), this.g = 2;
                else if (b.eventType ===
                    "adClosed" && this.g === 2) this.j.resolve(b.result), this.g = 3;
                else if (b.eventType !== "adClosed" || this.g !== 3) XM(this, {
                    cur_st: this.g,
                    evt: b.eventType
                }), this.g = 4
            }, this.Ia);
            wo(this, a)
        }
    };
    var ZM = Promise;
    class $M {
        constructor(a) {
            this.j = a
        }
        i(a, b, c) {
            this.j.then(d => {
                d.i(a, b, c)
            })
        }
        g(a, b) {
            return this.j.then(c => c.g(a, b))
        }
    };
    class aN {
        constructor(a) {
            this.data = a
        }
    };

    function bN(a, b) {
        cN(a, b);
        return new dN(a)
    }
    class dN {
        constructor(a) {
            this.j = a
        }
        i(a, b, c = []) {
            const d = new MessageChannel;
            cN(d.port1, b);
            this.j.postMessage(a, [d.port2].concat(c))
        }
        g(a, b) {
            return new ZM(c => {
                this.i(a, c, b)
            })
        }
    }

    function cN(a, b) {
        b && (a.onmessage = c => {
            b(new aN(c.data, bN(c.ports[0])))
        })
    };
    var eN = class {
        constructor(a) {
            this.g = a
        }
    };
    const fN = a => {
        const b = Object.create(null);
        (typeof a === "string" ? [a] : a).forEach(c => {
            if (c === "null") throw Error("Receiving from null origin not allowed without token verification. Please use NullOriginConnector.");
            b[c] = !0
        });
        return c => b[c] === !0
    };
    var hN = ({
        destination: a,
        Na: b,
        origin: c,
        pe: d = "ZNWN1d",
        onMessage: e,
        Fg: f
    }) => gN({
        destination: a,
        Li: () => b.contentWindow,
        pj: c instanceof eN ? c : typeof c === "function" ? new eN(c) : new eN(fN(c)),
        pe: d,
        onMessage: e,
        Fg: f
    });
    const gN = ({
        destination: a,
        Li: b,
        pj: c,
        Co: d,
        pe: e,
        onMessage: f,
        Fg: h
    }) => new $M(new ZM((k, l) => {
        const m = n => {
            n.source && n.source === b() && c.g(n.origin) && (n.data.n || n.data) === e && (a.removeEventListener("message", m, !1), d && n.data.t !== d ? l(Error(`Token mismatch while establishing channel "${e}". Expected ${d}, but received ${n.data.t}.`)) : (k(bN(n.ports[0], f)), h && h(n)))
        };
        a.addEventListener("message", m, !1)
    }));

    function iN(a, b, c, d, e, f, h = null) {
        if (e) {
            if (U(Tr)) var k = null;
            else try {
                k = e.getItem("google_ama_config")
            } catch (n) {
                k = null
            }
            try {
                var l = k ? Zq(k) : null
            } catch (n) {
                l = null
            }
        } else l = null;
        a: {
            if (d) try {
                var m = Zq(d);
                break a
            } catch (n) {
                kK(a, {
                    cfg: 1,
                    inv: 1
                })
            }
            m = null
        }
        if (d = m) {
            if (e) {
                m = new lq;
                C(d, 3, m);
                l = d ? .g() ? .j() || 1;
                l = Date.now() + 864E5 * l;
                Number.isFinite(l) && Ci(m, 1, Math.round(l));
                m = vh(d);
                d.g() && (l = new kq, k = d ? .g() ? .g(), l = ti(l, 23, k), k = d ? .g() ? .l(), l = ti(l, 12, k), C(m, 15, l));
                l = di(m, Lq, 1, y());
                for (k = 0; k < l.length; k++) Fh(l[k], 11);
                Fh(m, 22);
                if (U(Tr)) rK(a,
                    e);
                else try {
                    e.setItem("google_ama_config", Hi(m))
                } catch (n) {
                    kK(a, {
                        lserr: 1
                    })
                }
            }
            e = pK(a, di(d, uq, 7, y()));
            m = {};
            U(Ur) || (m.yj = z(d, Fq, 8) || new Fq);
            e && (m.aa = e);
            e && oK(e, 3) && (m.sc = [1]);
            e = m;
            if (!U(yr) && c.google_pgb_reactive === 7 && !e.aa) return !1;
            TE(a, 2) && (Bj(5, [Ii(d)]), c = lK(c), f = new aL(f), m = (m = e.aa) && F(m, 4) || "", c.google_package = m, uK(a, b, d, e, f, new bq(["google-auto-placed"], c), h));
            return !0
        }
        l && (kK(a, {
            cfg: 1,
            cl: 1
        }), e != null && rK(a, e));
        return !1
    };

    function jN(a, b) {
        b = b && b[0];
        if (!b) return null;
        b = b.target;
        const c = b.getBoundingClientRect(),
            d = ee(a.g.da() || window);
        if (c.bottom <= 0 || c.bottom > d.height || c.right <= 0 || c.left >= d.width) return null;
        var e = kN(a, b, c, a.g.g.elementsFromPoint(od(c.left + c.width / 2, c.left, c.right - 1), od(c.bottom - 1 - 2, c.top, c.bottom - 1)), 1, []),
            f = kN(a, b, c, a.g.g.elementsFromPoint(od(c.left + c.width / 2, c.left, c.right - 1), od(c.top + 2, c.top, c.bottom - 1)), 2, e.ob),
            h = kN(a, b, c, a.g.g.elementsFromPoint(od(c.left + 2, c.left, c.right - 1), od(c.top + c.height / 2,
                c.top, c.bottom - 1)), 3, [...e.ob, ...f.ob]);
        const k = kN(a, b, c, a.g.g.elementsFromPoint(od(c.right - 1 - 2, c.left, c.right - 1), od(c.top + c.height / 2, c.top, c.bottom - 1)), 4, [...e.ob, ...f.ob, ...h.ob]);
        var l = lN(a, b, c),
            m = p => $a(a.j, p.ub) && $a(a.l, p.Jg) && $a(a.i, p.Kg);
        e = Wa([...e.entries, ...f.entries, ...h.entries, ...k.entries], m);
        m = Wa(l, m);
        l = [...e, ...m];
        f = c.left < -2 || c.right > d.width + 2;
        f = l.length > 0 || f;
        h = fe(a.g.g);
        const n = new Fj(c.left, c.top, c.width, c.height);
        e = [...Xa(e, p => new Fj(p.nc.left, p.nc.top, p.nc.width, p.nc.height)), ...ob(Xa(m,
            p => Hj(n, p.nc))), ...Wa(Hj(n, new Fj(0, 0, d.width, d.height)), p => p.top >= 0 && p.top + p.height <= d.height)];
        return {
            entries: l,
            wg: f,
            Xg: {
                scrollX: h.x,
                scrollY: h.y
            },
            target: b,
            Xb: c,
            mh: {
                width: d.width,
                height: d.height
            },
            qj: e.length < 20 ? mN(n, e) : nN(c, e)
        }
    }

    function oN(a, b) {
        const c = a.g.da(),
            d = a.g.g;
        return new Promise((e, f) => {
            const h = c.IntersectionObserver;
            if (h)
                if (d.elementsFromPoint)
                    if (d.createNodeIterator)
                        if (d.createRange)
                            if (c.Range.prototype.getBoundingClientRect) {
                                var k = new h(l => {
                                    const m = new Bk,
                                        n = Ak(m, () => jN(a, l));
                                    n && (m.i.length && (n.Bi = Math.round(Number(m.i[0].duration))), k.disconnect(), e(n))
                                }, pN);
                                k.observe(b)
                            } else f(Error("5"));
            else f(Error("4"));
            else f(Error("3"));
            else f(Error("2"));
            else f(Error("1"))
        })
    }

    function kN(a, b, c, d, e, f) {
        if (c.width === 0 || c.height === 0) return {
            entries: [],
            ob: []
        };
        const h = [],
            k = [];
        for (let n = 0; n < d.length; n++) {
            const p = d[n];
            if (p === b) continue;
            if ($a(f, p)) continue;
            k.push(p);
            const q = p.getBoundingClientRect();
            if (a.g.contains(p, b)) {
                h.push(qN(a, c, p, q, 1, e));
                continue
            }
            if (a.g.contains(b, p)) {
                h.push(qN(a, c, p, q, 2, e));
                continue
            }
            a: {
                var l = a;
                var m = b;
                const A = l.g.Gi(m, p);
                if (!A) {
                    l = null;
                    break a
                }
                const {
                    Ea: D,
                    Fb: G
                } = rN(l, m, A, p) || {},
                {
                    Ea: I,
                    Fb: B
                } = rN(l, p, A, m) || {};l = D && G && I && B ? G <= B ? {
                    Ea: D,
                    ub: sN[G]
                } : {
                    Ea: I,
                    ub: tN[B]
                } : D && G ? {
                    Ea: D,
                    ub: sN[G]
                } : I && B ? {
                    Ea: I,
                    ub: tN[B]
                } : null
            }
            const {
                Ea: t,
                ub: w
            } = l || {};
            t && w ? h.push(qN(a, c, p, q, w, e, t)) : h.push(qN(a, c, p, q, 9, e))
        }
        return {
            entries: h,
            ob: k
        }
    }

    function lN(a, b, c) {
        const d = [];
        for (b = b.parentElement; b; b = b.parentElement) {
            const f = b.getBoundingClientRect();
            if (f) {
                var e = De(b, a.g.da());
                e && e.overflow !== "visible" && (e.overflowY !== "auto" && e.overflowY !== "scroll" && c.bottom > f.bottom + 2 ? d.push(qN(a, c, b, f, 5, 1)) : (e = e.overflowX === "auto" || e.overflowX === "scroll", !e && c.left < f.left - 2 ? d.push(qN(a, c, b, f, 5, 3)) : !e && c.right > f.right + 2 && d.push(qN(a, c, b, f, 5, 4))))
            }
        }
        return d
    }

    function mN(a, b) {
        if (a.width === 0 || a.height === 0 || b.length === 0) return 0;
        let c = 0;
        for (let d = 1; d < 1 << b.length; d++) {
            let e = a,
                f = 0;
            for (let h = 0; h < b.length && (!(d & 1 << h) || (f++, e = Gj(e, b[h]), e)); h++);
            e && (c = f % 2 === 1 ? c + (e.width + 1) * (e.height + 1) : c - (e.width + 1) * (e.height + 1))
        }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function nN(a, b) {
        if (a.width === 0 || a.height === 0 || b.length === 0) return 0;
        let c = 0;
        for (let d = a.left; d <= a.right; d++)
            for (let e = a.top; e <= a.bottom; e++)
                for (let f = 0; f < b.length; f++)
                    if (d >= b[f].left && d <= b[f].left + b[f].width && e >= b[f].top && e <= b[f].top + b[f].height) {
                        c++;
                        break
                    }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function qN(a, b, c, d, e, f, h) {
        const k = {
            element: c,
            nc: d,
            ub: e,
            Kg: f
        };
        if ($a(a.j, e) && $a(a.i, f)) {
            b = new Cj(b.top, b.right - 1, b.bottom - 1, b.left);
            if ((a = uN(a, c)) && Ej(b, a)) c = 4;
            else {
                a = vN(c, d);
                e = Vj(c, "paddingLeft");
                f = Vj(c, "paddingRight");
                var l = Vj(c, "paddingTop"),
                    m = Vj(c, "paddingBottom");
                e = new Cj(parseFloat(l), parseFloat(f), parseFloat(m), parseFloat(e));
                Ej(b, new Cj(a.top + e.top, a.right - e.right, a.bottom - e.bottom, a.left + e.left)) ? c = 3 : (c = vN(c, d), c = Ej(b, c) ? 2 : 1)
            }
            k.Jg = c
        }
        h && (k.Ea = h);
        return k
    }

    function rN(a, b, c, d) {
        const e = [];
        for (var f = b; f && f !== c; f = f.parentElement) e.unshift(f);
        c = a.g.da();
        for (f = 0; f < e.length; f++) {
            const k = e[f];
            var h = De(k, c);
            if (h) {
                if (h.position === "fixed") return {
                    Ea: k,
                    Fb: 1
                };
                if (h.position === "sticky" && a.g.contains(k.parentElement, d)) return {
                    Ea: k,
                    Fb: 2
                };
                if (h.position === "absolute") return {
                    Ea: k,
                    Fb: 3
                };
                if (h.cssFloat !== "none") {
                    h = k === e[0];
                    const l = wN(a, e.slice(0, f), k);
                    if (h || l) return {
                        Ea: k,
                        Fb: 4
                    }
                }
            }
        }
        return (a = wN(a, e, b)) ? {
            Ea: a,
            Fb: 5
        } : null
    }

    function wN(a, b, c) {
        const d = c.getBoundingClientRect();
        if (!d) return null;
        for (let e = 0; e < b.length; e++) {
            const f = b[e];
            if (!a.g.contains(f, c)) continue;
            const h = f.getBoundingClientRect();
            if (!h) continue;
            const k = De(f, a.g.da());
            if (k && d.bottom > h.bottom + 2 && k.overflowY === "visible") return f
        }
        return null
    }

    function uN(a, b) {
        var c = a.g.g;
        a = c.createRange();
        if (!a) return null;
        c = c.createNodeIterator(b, NodeFilter.SHOW_TEXT, {
            acceptNode: d => /^[\s\xa0]*$/.test(d.nodeValue) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
        });
        for (b = c.nextNode(); c.nextNode(););
        c = c.previousNode();
        if (!b || !c) return null;
        a.setStartBefore(b);
        a.setEndAfter(c);
        a = a.getBoundingClientRect();
        return a.width === 0 || a.height === 0 ? null : new Cj(a.top, a.right, a.bottom, a.left)
    }

    function vN(a, b) {
        var c = Vj(a, "borderLeftWidth");
        var d = Vj(a, "borderRightWidth"),
            e = Vj(a, "borderTopWidth");
        a = Vj(a, "borderBottomWidth");
        c = new Cj(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c));
        return new Cj(b.top + c.top, b.right - 1 - c.right, b.bottom - 1 - c.bottom, b.left + c.left)
    }
    class xN {
        constructor(a) {
            var b = yN;
            this.g = be(a);
            this.j = [5, 8, 9];
            this.l = [3, 4];
            this.i = b
        }
    }
    const sN = {
            [1]: 3,
            [4]: 10,
            [3]: 12,
            [2]: 4,
            [5]: 5
        },
        tN = {
            [1]: 6,
            [4]: 11,
            [3]: 13,
            [2]: 7,
            [5]: 8
        };
    Wa(Ge({
        Ql: 1,
        Rl: 2,
        Hn: 3,
        In: 4,
        Kn: 5,
        Ml: 6,
        Nl: 7,
        Pl: 8,
        Sm: 9,
        Jn: 10,
        Ol: 11,
        Gn: 12,
        Ll: 13
    }), a => !$a([1, 2], a));
    Ge({
        Yk: 1,
        Vm: 2,
        ll: 3,
        Ln: 4
    });
    const yN = Ge({
            Zk: 1,
            On: 2,
            Fm: 3,
            un: 4
        }),
        pN = {
            threshold: [0, .25, .5, .75, .95, .96, .97, .98, .99, 1]
        };

    function zN(a) {
        a.g != null || a.C || (a.g = new MutationObserver(b => {
            for (const c of b)
                for (const d of c.addedNodes) Da(d) && d.nodeType == 1 && (b = a, d.matches('A[href]:not([href=""])') && Oo(b.j, d))
        }), a.g.observe(a.win.document.documentElement, {
            childList: !0,
            subtree: !0
        }))
    }
    var AN = class extends Q {
        constructor(a) {
            super();
            this.win = a;
            this.j = new Po;
            this.g = null;
            wo(this, () => {
                this.g ? .disconnect();
                this.g = null
            })
        }
    };

    function BN(a, b) {
        b.addEventListener("click", () => {
            var c = a.g;
            var d = b.getAttribute("href");
            c = d ? d === "#" ? Ep(Sl(4)) : d.startsWith("#") ? Ep(Sl(5)) : CN(d, c) : Gp("Empty href");
            if (c.g != null) {
                d = c.getValue();
                c = a.L;
                var e = new Ul;
                d = C(e, 1, d);
                c.call(a, d)
            } else a.i(c.i)
        })
    }
    var EN = class {
        constructor(a, b, c) {
            var d = DN();
            this.win = a;
            this.g = b;
            this.L = c;
            this.i = d
        }
        J() {
            const a = new AN(this.win);
            Array.from(a.win.document.querySelectorAll('A[href]:not([href=""])')).forEach(b => {
                BN(this, b)
            });
            zN(a);
            Mo(a.j).listen(b => {
                BN(this, b)
            })
        }
    };

    function CN(a, b) {
        return FN(a, b).map(c => FN(b).map(d => {
            if (c.protocol === "http:" || c.protocol === "https:") {
                var e = Sl(2);
                e = Fi(e, 2, `${c.host}${c.pathname}`);
                d = Fi(e, 3, `${d.host}${d.pathname}`)
            } else d = c.protocol === "javascript:" ? Sl(3) : Sl(1);
            return d
        }))
    }

    function FN(a, b) {
        return Kp(Hp(() => new URL(a, b)), () => Error("Invalid URL"))
    };

    function GN(a) {
        if (a < 0 || !Number.isInteger(a)) return Gp(`Not a non-negative integer: ${a}`);
        const b = [];
        do b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a % 64)), a = Math.floor(a / 64); while (a > 0);
        return Ep(b.reverse().join(""))
    };
    class HN {
        constructor() {
            this.wh = 5E3
        }
        bi() {
            return 5E3
        }
    }

    function IN(a, b) {
        return a.g ? Math.floor(b / 5E3) * 5E3 / a.g.wh : b
    }

    function JN(a, b) {
        b = b.map(c => IN(a, c));
        return KN(b, a.i === void 0 ? void 0 : IN(a, a.i)).map(c => {
            a: {
                var d = LN;
                const e = [];
                for (const f of c) {
                    c = d(f);
                    if (c.g == null) {
                        d = new Fp(null, c.i);
                        break a
                    }
                    e.push(c.getValue())
                }
                d = Ep(e)
            }
            return d
        }).map(c => c.join(".")).map(c => MN(c, a.g ? .bi()))
    }
    var NN = class {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
    };

    function LN(a) {
        const b = GN(a.value);
        if (b.g == null) return b;
        const c = b.getValue();
        return a.Rd === 1 ? Ep(`${c}`) : a.Rd === 2 ? Ep(`${c}${"~"}`) : Mp(GN(a.Rd - 2), d => {
            throw d;
        }).map(d => `${c}${"~"}${d}`)
    }

    function KN(a, b) {
        const c = [];
        for (let d = 0; d < a.length; d++) {
            const e = a[d] ? ? b;
            if (e === void 0) return Gp("Sparse but no default");
            c.length === 0 || e !== c[c.length - 1].value ? c.push({
                value: e,
                Rd: 1
            }) : c[c.length - 1].Rd++
        }
        return Ep(c)
    }

    function MN(a, b) {
        return a === "" ? Ep("") : ON(b).map(c => `${c}${a}`)
    }

    function ON(a) {
        return a === void 0 || a === 1 ? Ep("") : Lp(GN(a), "ComFactor: ").map(b => `${"~"}${b}${"."}`)
    };
    var PN = class extends Q {
        constructor(a) {
            super();
            this.win = a;
            this.j = new R(!1);
            this.g = () => {
                this.j.g(this.win.document.hasFocus())
            }
        }
        J() {
            this.win.addEventListener("focus", this.g);
            this.win.addEventListener("blur", this.g);
            wo(this, () => void this.win.removeEventListener("focus", this.g));
            wo(this, () => void this.win.removeEventListener("blur", this.g));
            this.j.g(this.win.document.hasFocus())
        }
    };

    function QN(a) {
        a.j.g(a.win.document.visibilityState === "visible")
    }
    var RN = class extends Q {
        constructor(a) {
            super();
            this.win = a;
            this.j = new R(!1);
            this.g = () => void QN(this)
        }
        J() {
            this.win.addEventListener("visibilitychange", this.g);
            wo(this, () => void this.win.removeEventListener("visibilitychange", this.g));
            QN(this)
        }
    };

    function SN(a) {
        return a.g !== null ? a.i + a.j() - a.g : a.i
    }
    var UN = class {
        constructor(a) {
            this.win = a;
            this.j = TN(this.win);
            this.i = 0;
            this.g = null
        }
        start() {
            this.g === null && (this.g = this.j())
        }
    };

    function TN(a) {
        return a.performance && a.performance.now ? () => a.performance.now() : () => Date.now()
    };

    function VN(a) {
        a = new WN(a);
        a.J();
        return a
    }

    function XN(a) {
        const b = $o(a.win, 1E3, () => void a.handleEvent());
        a.win.addEventListener("scroll", () => void b())
    }

    function YN(a) {
        const b = ZN(a.win),
            c = () => {
                const d = ZN(a.win),
                    e = Math.abs(d.height - b.height);
                if (Math.abs(d.width - b.width) > 20 || e > 20) a.F = !0, a.win.removeEventListener("resize", c)
            };
        a.win.addEventListener("resize", c)
    }

    function $N(a) {
        a.l = !a.g.P;
        Ho(a.g, !1, () => {
            a.win.setTimeout(() => {
                a.l = !0
            }, 100)
        })
    }

    function aO(a) {
        Go(a.g, !0, () => void a.j.start());
        Go(a.g, !1, () => {
            var b = a.j;
            b.g !== null && (b.i += b.j() - b.g);
            b.g = null
        });
        a.G.start()
    }

    function bO(a) {
        var b = a.win.scrollY;
        var c = Tn(a.win);
        b = {
            Vd: Math.floor(b / 100),
            cd: Math.floor((b + c) / 100),
            gh: a.win.performance.now()
        };
        if (b.Vd < 0 || b.cd < 0 || b.Vd > 1E3 || b.cd > 1E3) a.B = !0, a.i = null;
        else {
            if (a.i) {
                c = a.i;
                var d = new LC(c.Vd, c.cd),
                    e = new LC(b.Vd, b.cd);
                var f = Math.max(d.start, e.start);
                d = Math.min(d.end, e.end);
                if (f = f <= d ? new LC(f, d) : null)
                    for (c = b.gh - c.gh, d = f.start; d <= f.end; d++) a.C[d] = (a.C[d] ? ? 0) + c
            }
            a.i = a.A.P ? b : null
        }
    }
    var WN = class {
        constructor(a) {
            this.win = a;
            this.C = [];
            a = this.win;
            var b = new PN(a);
            b.J();
            b = Do(b.j);
            a = new RN(a);
            a.J();
            this.A = this.g = Co(b, Do(a.j));
            this.j = new UN(this.win);
            this.G = new UN(this.win);
            this.H = new NN((new NN(new HN)).g, 0);
            this.F = this.l = this.B = !1;
            this.i = null
        }
        J() {
            XN(this);
            YN(this);
            $N(this);
            aO(this);
            this.A.listen(() => void bO(this));
            r.setInterval(() => void this.handleEvent(), 5E3);
            this.handleEvent()
        }
        handleEvent() {
            this.A.P && bO(this)
        }
    };

    function ZN(a) {
        return new sd(Sn(a), Tn(a))
    };

    function cO(a, {
        Va: b
    }) {
        a = new dO(a, b);
        if (!a.Va && U(Bs)) {
            b = a.win;
            var c = eO(fO(a));
            (new EN(b, b.document.baseURI, c)).J()
        }
        gO(a)
    }

    function gO(a) {
        if (U(Cs)) {
            var b = VN(a.win);
            wn(new bF(a.win), hO(() => {
                var c = fO(a),
                    d = new Xl,
                    e = JN(b.H, b.C);
                if (e.g == null) throw Lp(e, "PVDC: ").i;
                var f = new Wl;
                f = vi(f, 2, 5E3);
                f = vi(f, 1, 100);
                e = e.getValue();
                e = Fi(f, 3, e);
                f = ZN(b.win);
                var h = new Vl;
                h = vi(h, 1, f.width);
                f = vi(h, 2, f.height);
                e = C(e, 4, f);
                f = new Vl;
                f = vi(f, 1, Xn(b.win).scrollWidth);
                f = vi(f, 2, Xn(b.win).scrollHeight);
                e = C(e, 5, f);
                e = M(e, 6, b.l);
                f = Math.round(SN(b.G) / 1E3);
                e = vi(e, 8, f);
                f = Math.round(SN(b.j) / 1E3);
                e = vi(e, 9, f);
                b.B && Wh(e, 7, wg, 1);
                b.F && Wh(e, 7, wg, 2);
                d = E(d, 2, Yl, e);
                c(d)
            }))
        }
    }

    function fO(a) {
        if (!a.L) {
            const b = P(iF);
            a.L = c => {
                nF(b, c)
            }
        }
        return a.L
    }
    var dO = class {
        constructor(a, b) {
            this.win = a;
            this.Va = b;
            this.L = null
        }
    };

    function eO(a) {
        return b => {
            var c = new Xl;
            b = E(c, 1, Yl, b);
            return void a(b)
        }
    }

    function DN() {
        return a => {
            W.ba(1243, a, void 0, iO("LCC"))
        }
    }

    function hO(a) {
        return () => void W.vb(1243, a, iO("PVC"))
    }

    function iO(a) {
        return b => {
            b.errSrc = a
        }
    };
    var kO = a => {
        const b = a.D;
        b.google_ad_output == null && (b.google_ad_output = "html");
        if (b.google_ad_client != null) {
            var c;
            (c = String(b.google_ad_client)) ? (c = c.toLowerCase(), c.substring(0, 3) != "ca-" && (c = "ca-" + c)) : c = "";
            b.google_ad_client = c
        }
        b.google_ad_slot != null && (b.google_ad_slot = String(b.google_ad_slot));
        b.google_webgl_support = !!kj.WebGLRenderingContext;
        b.google_ad_section = b.google_ad_section || b.google_ad_region || "";
        b.google_country = b.google_country || b.google_gl || "";
        c = (new Date).getTime();
        Array.isArray(b.google_color_bg) &&
            (b.google_color_bg = jO(a, b.google_color_bg, c));
        Array.isArray(b.google_color_text) && (b.google_color_text = jO(a, b.google_color_text, c));
        Array.isArray(b.google_color_link) && (b.google_color_link = jO(a, b.google_color_link, c));
        Array.isArray(b.google_color_url) && (b.google_color_url = jO(a, b.google_color_url, c));
        Array.isArray(b.google_color_border) && (b.google_color_border = jO(a, b.google_color_border, c));
        Array.isArray(b.google_color_line) && (b.google_color_line = jO(a, b.google_color_line, c))
    };

    function jO(a, b, c) {
        a.i |= 2;
        return b[c % b.length]
    };
    const lO = {
        google: 1,
        googlegroups: 1,
        gmail: 1,
        googlemail: 1,
        googleimages: 1,
        googleprint: 1
    };
    var mO = (a, b = !1) => {
        try {
            return b ? (new sd(a.innerWidth, a.innerHeight)).round() : ee(a || window).round()
        } catch (c) {
            return new sd(-12245933, -12245933)
        }
    };

    function nO(a = r) {
        a = a.devicePixelRatio;
        return typeof a === "number" ? +a.toFixed(3) : null
    }

    function oO(a, b = r) {
        a = a.scrollingElement || (a.compatMode == "CSS1Compat" ? a.documentElement : a.body);
        return new rd(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
    }

    function pO(a) {
        try {
            return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
        } catch (b) {
            return !1
        }
    };

    function qO(a, b) {
        var c = W,
            d;
        var e;
        d = (e = (e = Jj()) && (d = e.initialLayoutRect) && typeof d.top === "number" && typeof d.left === "number" && typeof d.width === "number" && typeof d.height === "number" ? new Fj(d.left, d.top, d.width, d.height) : null) ? new rd(e.left, e.top) : (d = Mj()) && Da(d.rootBounds) ? new rd(d.rootBounds.left + d.boundingClientRect.left, d.rootBounds.top + d.boundingClientRect.top) : null;
        if (d) return d;
        try {
            var f = new rd(0, 0),
                h = de(b);
            var k = h ? ge(h) : window;
            if (Xd(k, "parent")) {
                do {
                    if (k == a) var l = Yj(b);
                    else {
                        var m = Xj(b);
                        l = new rd(m.left,
                            m.top)
                    }
                    h = l;
                    f.x += h.x;
                    f.y += h.y
                } while (k && k != a && k != k.parent && (b = k.frameElement) && (k = k.parent))
            }
            return f
        } catch (n) {
            return c.ba(888, n), new rd(-12245933, -12245933)
        }
    };

    function rO(a, b) {
        return tj(a.win) ? !!b.g() : !1
    }

    function sO(a, b, c) {
        c ? (a = a.win, b = c.g() ? vj(b, a) : null) : b = null;
        return b
    }

    function tO(a, b, c, d) {
        if (d) {
            var e = mi(c, 2) - Date.now() / 1E3;
            e = {
                Bd: Math.max(e, 0),
                path: L(c, 3),
                domain: L(c, 4),
                Sd: !1
            };
            c = c.getValue();
            a = a.win;
            d.g() && wj(b, c, e, a)
        }
    }

    function uO(a, b, c) {
        var d;
        (d = !c) || (d = a.win, d = !(c.g() && vj(b, d)));
        if (!d)
            for (const f of vO(a.win.location.hostname)) {
                d = b;
                var e = a.win;
                c.g() && e.origin !== "null" && pj(new oj(e.document), d, "/", f)
            }
    }
    var wO = class {
        constructor(a) {
            this.win = a
        }
    };

    function vO(a) {
        if (a === "localhost") return ["localhost"];
        a = a.split(".");
        if (a.length < 2) return [];
        const b = [];
        for (let c = 0; c < a.length - 1; ++c) b.push(a.slice(c).join("."));
        return b
    };

    function xO(a, b, c) {
        var d = sO(a, "__gpi_opt_out", b);
        d && (d = Ei(Ci(bj(d), 2, 2147483647), 3, "/"), c = Ei(d, 4, c), tO(a, "__gpi_opt_out", c, b))
    }

    function yO(a, b, c, d) {
        const e = QM(a, "gpi-uoo", (f, h) => {
            if (h.source === c) {
                h = Ei(Ci(bj(f.userOptOut ? "1" : "0"), 2, 2147483647), 3, "/");
                h = Ei(h, 4, a.location.hostname);
                var k = new wO(a);
                tO(k, "__gpi_opt_out", h, b);
                if (f.userOptOut || f.clearAdsData) uO(k, "__gads", b), uO(k, "__gpi", b)
            }
        });
        d.push(e)
    };
    const zO = (a, b) => {
            b = b.listener;
            (a = (0, a.__gpp)("addEventListener", b)) && b(a, !0)
        },
        AO = (a, b) => {
            (0, a.__gpp)("removeEventListener", b.listener, b.listenerId)
        },
        BO = {
            yd: a => a.listener,
            Bc: (a, b) => ({
                __gppCall: {
                    callId: b,
                    command: "addEventListener",
                    version: "1.1"
                }
            }),
            Pb: (a, b) => {
                b = b.__gppReturn;
                a(b.returnValue, b.success)
            }
        },
        CO = {
            yd: a => a.listener,
            Bc: (a, b) => ({
                __gppCall: {
                    callId: b,
                    command: "removeEventListener",
                    version: "1.1",
                    parameter: a.listenerId
                }
            }),
            Pb: (a, b) => {
                b = b.__gppReturn;
                const c = b.returnValue.data;
                a ? .(c, b.success)
            }
        };

    function DO(a) {
        let b = {};
        typeof a.data === "string" ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            df: b.__gppReturn.callId
        }
    }

    function EO(a, b) {
        if (!a) return !1;
        const c = sL(a.split("~")[0]),
            d = nL(a),
            e = Lh(c, 3, Ag, y());
        for (let wi = 0; wi < e.length; ++wi) {
            const ow = e[wi];
            if (!b.includes(ow)) continue;
            const sb = d[wi];
            switch (ow) {
                case 7:
                    if (sb.length === 0) throw Error("Cannot decode empty USNat section string.");
                    const eg = sb.split(".");
                    if (eg.length > 2) throw Error(`Expected at most 2 segments but got ${eg.length} when decoding ${sb}.`);
                    var f = void 0,
                        h = void 0,
                        k = void 0,
                        l = void 0,
                        m = void 0,
                        n = void 0,
                        p = void 0,
                        q = void 0,
                        t = void 0,
                        w = void 0,
                        A = void 0,
                        D = void 0,
                        G = void 0,
                        I = void 0,
                        B = void 0,
                        J = void 0,
                        H = void 0,
                        ba = void 0,
                        db = void 0,
                        ya = void 0,
                        ha = void 0,
                        ma = void 0,
                        hb = void 0,
                        ib = void 0,
                        fg = void 0,
                        ra = void 0,
                        Od = void 0,
                        pw = void 0,
                        qw = void 0,
                        rw = void 0,
                        sw = eg[0];
                    if (sw.length === 0) throw Error("Cannot decode empty core segment string.");
                    let xi = rL(sw, YL);
                    const Bm = pL(xi.slice(0, 6));
                    xi = xi.slice(6);
                    if (Bm !== 1) throw Error(`Unable to decode unsupported USNat Section specification version ${Bm} - only version 1 is supported.`);
                    let Cm = 0;
                    const pa = [];
                    for (let ja = 0; ja < XL.length; ja++) {
                        const Z =
                            XL[ja];
                        pa.push(pL(xi.slice(Cm, Cm + Z)));
                        Cm += Z
                    }
                    var bS = new TL;
                    rw = vi(bS, 1, Bm);
                    var cS = pa.shift();
                    qw = N(rw, 2, cS);
                    var dS = pa.shift();
                    pw = N(qw, 3, dS);
                    var eS = pa.shift();
                    Od = N(pw, 4, eS);
                    var fS = pa.shift();
                    ra = N(Od, 5, fS);
                    var gS = pa.shift();
                    fg = N(ra, 6, gS);
                    var hS = pa.shift();
                    ib = N(fg, 7, hS);
                    var iS = pa.shift();
                    hb = N(ib, 8, iS);
                    var jS = pa.shift();
                    ma = N(hb, 9, jS);
                    var kS = pa.shift();
                    ha = N(ma, 10, kS);
                    var lS = new SL,
                        mS = pa.shift();
                    ya = N(lS, 1, mS);
                    var nS = pa.shift();
                    db = N(ya, 2, nS);
                    var oS = pa.shift();
                    ba = N(db, 3, oS);
                    var pS = pa.shift();
                    H = N(ba, 4, pS);
                    var qS =
                        pa.shift();
                    J = N(H, 5, qS);
                    var rS = pa.shift();
                    B = N(J, 6, rS);
                    var sS = pa.shift();
                    I = N(B, 7, sS);
                    var tS = pa.shift();
                    G = N(I, 8, tS);
                    var uS = pa.shift();
                    D = N(G, 9, uS);
                    var vS = pa.shift();
                    A = N(D, 10, vS);
                    var wS = pa.shift();
                    w = N(A, 11, wS);
                    var xS = pa.shift();
                    t = N(w, 12, xS);
                    q = C(ha, 11, t);
                    var yS = new RL,
                        zS = pa.shift();
                    p = N(yS, 1, zS);
                    var AS = pa.shift();
                    n = N(p, 2, AS);
                    m = C(q, 12, n);
                    var BS = pa.shift();
                    l = N(m, 13, BS);
                    var CS = pa.shift();
                    k = N(l, 14, CS);
                    var DS = pa.shift();
                    h = N(k, 15, DS);
                    var ES = pa.shift();
                    const tw = f = N(h, 16, ES);
                    if (eg.length === 1) var uw = VL(tw);
                    else {
                        var FS =
                            VL(tw),
                            vw = void 0,
                            ww = void 0,
                            xw = void 0,
                            yw = eg[1];
                        if (yw.length === 0) throw Error("Cannot decode empty GPC segment string.");
                        const ja = rL(yw, 3),
                            Z = pL(ja.slice(0, 2));
                        if (Z < 0 || Z > 1) throw Error(`Attempting to decode unknown GPC segment subsection type ${Z}.`);
                        xw = Z + 1;
                        const Pd = pL(ja.charAt(2));
                        var GS = new UL;
                        ww = N(GS, 2, xw);
                        vw = M(ww, 1, !!Pd);
                        uw = C(FS, 2, vw)
                    }
                    const Dm = z(uw, TL, 1);
                    if (oi(Dm, 8) === 1 || oi(Dm, 9) === 1 || oi(Dm, 10) === 1) return !0;
                    break;
                case 8:
                    if (sb.length === 0) throw Error("Cannot decode empty USCA section string.");
                    const gg =
                        sb.split(".");
                    if (gg.length > 2) throw Error(`Expected at most 1 sub-section but got ${gg.length-1} when decoding ${sb}.`);
                    var HS = void 0,
                        zw = void 0,
                        Aw = void 0,
                        Bw = void 0,
                        Cw = void 0,
                        Dw = void 0,
                        Ew = void 0,
                        Fw = void 0,
                        Gw = void 0,
                        Hw = void 0,
                        Iw = void 0,
                        Jw = void 0,
                        Kw = void 0,
                        Lw = void 0,
                        Mw = void 0,
                        Nw = void 0,
                        Ow = void 0,
                        Pw = void 0,
                        Qw = void 0,
                        Rw = void 0,
                        Sw = void 0,
                        Tw = void 0,
                        Uw = void 0,
                        Vw = gg[0];
                    if (Vw.length === 0) throw Error("Cannot decode empty core segment string.");
                    let yi = rL(Vw, BL);
                    const Em = pL(yi.slice(0, 6));
                    yi = yi.slice(6);
                    if (Em !==
                        1) throw Error(`Unable to decode unsupported USCA Section specification version ${Em} - only version 1 is supported.`);
                    let Fm = 0;
                    const za = [];
                    for (let ja = 0; ja < AL.length; ja++) {
                        const Z = AL[ja];
                        za.push(pL(yi.slice(Fm, Fm + Z)));
                        Fm += Z
                    }
                    var IS = new wL;
                    Uw = vi(IS, 1, Em);
                    var JS = za.shift();
                    Tw = N(Uw, 2, JS);
                    var KS = za.shift();
                    Sw = N(Tw, 3, KS);
                    var LS = za.shift();
                    Rw = N(Sw, 4, LS);
                    var MS = za.shift();
                    Qw = N(Rw, 5, MS);
                    var NS = za.shift();
                    Pw = N(Qw, 6, NS);
                    var OS = new vL,
                        PS = za.shift();
                    Ow = N(OS, 1, PS);
                    var QS = za.shift();
                    Nw = N(Ow, 2, QS);
                    var RS = za.shift();
                    Mw = N(Nw, 3, RS);
                    var SS = za.shift();
                    Lw = N(Mw, 4, SS);
                    var TS = za.shift();
                    Kw = N(Lw, 5, TS);
                    var US = za.shift();
                    Jw = N(Kw, 6, US);
                    var VS = za.shift();
                    Iw = N(Jw, 7, VS);
                    var WS = za.shift();
                    Hw = N(Iw, 8, WS);
                    var XS = za.shift();
                    Gw = N(Hw, 9, XS);
                    Fw = C(Pw, 7, Gw);
                    var YS = new uL,
                        ZS = za.shift();
                    Ew = N(YS, 1, ZS);
                    var $S = za.shift();
                    Dw = N(Ew, 2, $S);
                    Cw = C(Fw, 8, Dw);
                    var aT = za.shift();
                    Bw = N(Cw, 9, aT);
                    var bT = za.shift();
                    Aw = N(Bw, 10, bT);
                    var cT = za.shift();
                    zw = N(Aw, 11, cT);
                    var dT = za.shift();
                    const Ww = HS = N(zw, 12, dT);
                    if (gg.length === 1) var Xw = yL(Ww);
                    else {
                        var eT = yL(Ww),
                            Yw =
                            void 0,
                            Zw = void 0,
                            $w = void 0,
                            ax = gg[1];
                        if (ax.length === 0) throw Error("Cannot decode empty GPC segment string.");
                        const ja = rL(ax, 3),
                            Z = pL(ja.slice(0, 2));
                        if (Z < 0 || Z > 1) throw Error(`Attempting to decode unknown GPC segment subsection type ${Z}.`);
                        $w = Z + 1;
                        const Pd = pL(ja.charAt(2));
                        var fT = new xL;
                        Zw = N(fT, 2, $w);
                        Yw = M(Zw, 1, !!Pd);
                        Xw = C(eT, 2, Yw)
                    }
                    const bx = z(Xw, wL, 1);
                    if (oi(bx, 5) === 1 || oi(bx, 6) === 1) return !0;
                    break;
                case 9:
                    if (sb.length === 0) throw Error("Cannot decode empty USVA section string.");
                    let zi = rL(sb, bM);
                    const Gm = pL(zi.slice(0,
                        6));
                    zi = zi.slice(6);
                    if (Gm !== 1) throw Error(`Unable to decode unsupported USVA Section specification version ${Gm} - only version 1 is supported.`);
                    let Hm = 0;
                    const Oa = [];
                    for (let ja = 0; ja < aM.length; ja++) {
                        const Z = aM[ja];
                        Oa.push(pL(zi.slice(Hm, Hm + Z)));
                        Hm += Z
                    }
                    var gT = Gm,
                        hT = new $L,
                        iT = vi(hT, 1, gT),
                        jT = Oa.shift(),
                        kT = N(iT, 2, jT),
                        lT = Oa.shift(),
                        mT = N(kT, 3, lT),
                        nT = Oa.shift(),
                        oT = N(mT, 4, nT),
                        pT = Oa.shift(),
                        qT = N(oT, 5, pT),
                        rT = Oa.shift();
                    var sT = N(qT, 6, rT);
                    var tT = new ZL,
                        uT = Oa.shift(),
                        vT = N(tT, 1, uT),
                        wT = Oa.shift(),
                        xT = N(vT, 2, wT),
                        yT =
                        Oa.shift(),
                        zT = N(xT, 3, yT),
                        AT = Oa.shift(),
                        BT = N(zT, 4, AT),
                        CT = Oa.shift(),
                        DT = N(BT, 5, CT),
                        ET = Oa.shift(),
                        FT = N(DT, 6, ET),
                        GT = Oa.shift(),
                        HT = N(FT, 7, GT),
                        IT = Oa.shift();
                    var JT = N(HT, 8, IT);
                    var KT = C(sT, 7, JT),
                        LT = Oa.shift(),
                        MT = N(KT, 8, LT),
                        NT = Oa.shift(),
                        OT = N(MT, 9, NT),
                        PT = Oa.shift(),
                        QT = N(OT, 10, PT),
                        RT = Oa.shift(),
                        cx = N(QT, 11, RT);
                    if (oi(cx, 5) === 1 || oi(cx, 6) === 1) return !0;
                    break;
                case 10:
                    if (sb.length === 0) throw Error("Cannot decode empty USCO section string.");
                    const hg = sb.split(".");
                    if (hg.length > 2) throw Error(`Expected at most 2 segments but got ${hg.length} when decoding ${sb}.`);
                    var ST = void 0,
                        dx = void 0,
                        ex = void 0,
                        fx = void 0,
                        gx = void 0,
                        hx = void 0,
                        ix = void 0,
                        jx = void 0,
                        kx = void 0,
                        lx = void 0,
                        mx = void 0,
                        nx = void 0,
                        ox = void 0,
                        px = void 0,
                        qx = void 0,
                        rx = void 0,
                        sx = void 0,
                        tx = void 0,
                        ux = hg[0];
                    if (ux.length === 0) throw Error("Cannot decode empty core segment string.");
                    let Ai = rL(ux, IL);
                    const Im = pL(Ai.slice(0, 6));
                    Ai = Ai.slice(6);
                    if (Im !== 1) throw Error(`Unable to decode unsupported USCO Section specification version ${Im} - only version 1 is supported.`);
                    let Jm = 0;
                    const ab = [];
                    for (let ja = 0; ja < HL.length; ja++) {
                        const Z =
                            HL[ja];
                        ab.push(pL(Ai.slice(Jm, Jm + Z)));
                        Jm += Z
                    }
                    var TT = new DL;
                    tx = vi(TT, 1, Im);
                    var UT = ab.shift();
                    sx = N(tx, 2, UT);
                    var VT = ab.shift();
                    rx = N(sx, 3, VT);
                    var WT = ab.shift();
                    qx = N(rx, 4, WT);
                    var XT = ab.shift();
                    px = N(qx, 5, XT);
                    var YT = ab.shift();
                    ox = N(px, 6, YT);
                    var ZT = new CL,
                        $T = ab.shift();
                    nx = N(ZT, 1, $T);
                    var aU = ab.shift();
                    mx = N(nx, 2, aU);
                    var bU = ab.shift();
                    lx = N(mx, 3, bU);
                    var cU = ab.shift();
                    kx = N(lx, 4, cU);
                    var dU = ab.shift();
                    jx = N(kx, 5, dU);
                    var eU = ab.shift();
                    ix = N(jx, 6, eU);
                    var fU = ab.shift();
                    hx = N(ix, 7, fU);
                    gx = C(ox, 7, hx);
                    var gU = ab.shift();
                    fx =
                        N(gx, 8, gU);
                    var hU = ab.shift();
                    ex = N(fx, 9, hU);
                    var iU = ab.shift();
                    dx = N(ex, 10, iU);
                    var jU = ab.shift();
                    const vx = ST = N(dx, 11, jU);
                    if (hg.length === 1) var wx = FL(vx);
                    else {
                        var kU = FL(vx),
                            xx = void 0,
                            yx = void 0,
                            zx = void 0,
                            Ax = hg[1];
                        if (Ax.length === 0) throw Error("Cannot decode empty GPC segment string.");
                        const ja = rL(Ax, 3),
                            Z = pL(ja.slice(0, 2));
                        if (Z < 0 || Z > 1) throw Error(`Attempting to decode unknown GPC segment subsection type ${Z}.`);
                        zx = Z + 1;
                        const Pd = pL(ja.charAt(2));
                        var lU = new EL;
                        yx = N(lU, 2, zx);
                        xx = M(yx, 1, !!Pd);
                        wx = C(kU, 2, xx)
                    }
                    const Bx =
                        z(wx, DL, 1);
                    if (oi(Bx, 5) === 1 || oi(Bx, 6) === 1) return !0;
                    break;
                case 12:
                    if (sb.length === 0) throw Error("Cannot decode empty usct section string.");
                    const ig = sb.split(".");
                    if (ig.length > 2) throw Error(`Expected at most 2 segments but got ${ig.length} when decoding ${sb}.`);
                    var mU = void 0,
                        Cx = void 0,
                        Dx = void 0,
                        Ex = void 0,
                        Fx = void 0,
                        Gx = void 0,
                        Hx = void 0,
                        Ix = void 0,
                        Jx = void 0,
                        Kx = void 0,
                        Lx = void 0,
                        Mx = void 0,
                        Nx = void 0,
                        Ox = void 0,
                        Px = void 0,
                        Qx = void 0,
                        Rx = void 0,
                        Sx = void 0,
                        Tx = void 0,
                        Ux = void 0,
                        Vx = void 0,
                        Wx = void 0,
                        Xx = ig[0];
                    if (Xx.length ===
                        0) throw Error("Cannot decode empty core segment string.");
                    let Bi = rL(Xx, QL);
                    const Km = pL(Bi.slice(0, 6));
                    Bi = Bi.slice(6);
                    if (Km !== 1) throw Error(`Unable to decode unsupported USCT Section specification version ${Km} - only version 1 is supported.`);
                    let Lm = 0;
                    const Ca = [];
                    for (let ja = 0; ja < PL.length; ja++) {
                        const Z = PL[ja];
                        Ca.push(pL(Bi.slice(Lm, Lm + Z)));
                        Lm += Z
                    }
                    var nU = new LL;
                    Wx = vi(nU, 1, Km);
                    var oU = Ca.shift();
                    Vx = N(Wx, 2, oU);
                    var pU = Ca.shift();
                    Ux = N(Vx, 3, pU);
                    var qU = Ca.shift();
                    Tx = N(Ux, 4, qU);
                    var rU = Ca.shift();
                    Sx = N(Tx, 5,
                        rU);
                    var sU = Ca.shift();
                    Rx = N(Sx, 6, sU);
                    var tU = new KL,
                        uU = Ca.shift();
                    Qx = N(tU, 1, uU);
                    var vU = Ca.shift();
                    Px = N(Qx, 2, vU);
                    var wU = Ca.shift();
                    Ox = N(Px, 3, wU);
                    var xU = Ca.shift();
                    Nx = N(Ox, 4, xU);
                    var yU = Ca.shift();
                    Mx = N(Nx, 5, yU);
                    var zU = Ca.shift();
                    Lx = N(Mx, 6, zU);
                    var AU = Ca.shift();
                    Kx = N(Lx, 7, AU);
                    var BU = Ca.shift();
                    Jx = N(Kx, 8, BU);
                    Ix = C(Rx, 7, Jx);
                    var CU = new JL,
                        DU = Ca.shift();
                    Hx = N(CU, 1, DU);
                    var EU = Ca.shift();
                    Gx = N(Hx, 2, EU);
                    var FU = Ca.shift();
                    Fx = N(Gx, 3, FU);
                    Ex = C(Ix, 8, Fx);
                    var GU = Ca.shift();
                    Dx = N(Ex, 9, GU);
                    var HU = Ca.shift();
                    Cx = N(Dx, 10, HU);
                    var IU = Ca.shift();
                    const Yx = mU = N(Cx, 11, IU);
                    if (ig.length === 1) var Zx = NL(Yx);
                    else {
                        var JU = NL(Yx),
                            $x = void 0,
                            ay = void 0,
                            by = void 0,
                            cy = ig[1];
                        if (cy.length === 0) throw Error("Cannot decode empty GPC segment string.");
                        const ja = rL(cy, 3),
                            Z = pL(ja.slice(0, 2));
                        if (Z < 0 || Z > 1) throw Error(`Attempting to decode unknown GPC segment subsection type ${Z}.`);
                        by = Z + 1;
                        const Pd = pL(ja.charAt(2));
                        var KU = new ML;
                        ay = N(KU, 2, by);
                        $x = M(ay, 1, !!Pd);
                        Zx = C(JU, 2, $x)
                    }
                    const dy = z(Zx, LL, 1);
                    if (oi(dy, 5) === 1 || oi(dy, 6) === 1) return !0
            }
        }
        return !1
    }
    var IO = class extends Q {
        constructor(a) {
            ({
                timeoutMs: c,
                cmpInteractionEventReporter: b
            } = {});
            var b, c;
            super();
            this.caller = new GF(a, "__gppLocator", d => typeof d.__gpp === "function", DO);
            this.caller.B.set("addEventListener", zO);
            this.caller.A.set("addEventListener", BO);
            this.caller.B.set("removeEventListener", AO);
            this.caller.A.set("removeEventListener", CO);
            this.timeoutMs = c ? ? 500;
            this.cmpInteractionEventReporter = b
        }
        i() {
            this.caller.dispose();
            super.i()
        }
        addEventListener(a) {
            const b = Bb(() => {
                    a(FO, !0)
                }),
                c = this.timeoutMs ===
                -1 ? void 0 : setTimeout(() => {
                    b()
                }, this.timeoutMs);
            FF(this.caller, "addEventListener", {
                listener: (d, e) => {
                    clearTimeout(c);
                    try {
                        if (d.pingData ? .gppVersion === void 0 || d.pingData.gppVersion === "1" || d.pingData.gppVersion === "1.0") {
                            this.removeEventListener(d.listenerId);
                            var f = {
                                eventName: "signalStatus",
                                data: "ready",
                                pingData: {
                                    internalErrorState: 1,
                                    gppString: "GPP_ERROR_STRING_IS_DEPRECATED_SPEC",
                                    applicableSections: [-1]
                                }
                            }
                        } else Array.isArray(d.pingData.applicableSections) ? f = d : (this.removeEventListener(d.listenerId), f = {
                            eventName: "signalStatus",
                            data: "ready",
                            pingData: {
                                internalErrorState: 2,
                                gppString: "GPP_ERROR_STRING_EXPECTED_APPLICATION_SECTION_ARRAY",
                                applicableSections: [-1]
                            }
                        });
                        a(f, e);
                        this.cmpInteractionEventReporter ? .g()
                    } catch {
                        if (d ? .listenerId) try {
                            this.removeEventListener(d.listenerId)
                        } catch {
                            a(GO, !0);
                            return
                        }
                        a(HO, !0)
                    }
                }
            })
        }
        removeEventListener(a) {
            FF(this.caller, "removeEventListener", {
                listener: () => {},
                listenerId: a
            })
        }
    };
    const HO = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                internalErrorState: 2,
                gppString: "GPP_ERROR_STRING_UNAVAILABLE",
                applicableSections: [-1]
            },
            listenerId: -1
        },
        FO = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                gppString: "GPP_ERROR_STRING_LISTENER_REGISTRATION_TIMEOUT",
                internalErrorState: 2,
                applicableSections: [-1]
            },
            listenerId: -1
        },
        GO = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                gppString: "GPP_ERROR_STRING_REMOVE_EVENT_LISTENER_ERROR",
                internalErrorState: 2,
                applicableSections: [-1]
            },
            listenerId: -1
        };

    function JO(a) {
        return !a || a.length === 1 && a[0] === -1
    };

    function KO(a, b) {
        if (b.internalErrorState) Ei(a, 11, b.gppString);
        else if (JO(b.applicableSections)) {
            var c = Th(a, 10, b.applicableSections, Dg);
            ti(c, 12, !1)
        } else {
            c = !1;
            try {
                c = EO(b.gppString, b.applicableSections)
            } catch (d) {
                W.ba(1182, d, void 0, void 0)
            }
            a = Th(a, 10, b.applicableSections, Dg);
            b = Ei(a, 11, b.gppString);
            ti(b, 12, c)
        }
    }

    function LO(a) {
        const b = new IO(a.pubWin);
        if (!DF(b.caller)) return Promise.resolve(null);
        const c = DE(),
            d = IE(c, 35);
        if (d) return Promise.resolve(d);
        const e = new Promise(f => {
            f = {
                resolve: f
            };
            const h = IE(c, 36, []);
            h.push(f);
            JE(c, 36, h)
        });
        d || d === null || (JE(c, 35, null), b.addEventListener(f => {
            if (f.pingData.signalStatus === "ready" || JO(f.pingData.applicableSections)) {
                f = f.pingData;
                JE(c, 35, f);
                KO(a.g, f);
                for (const h of IE(c, 36, [])) h.resolve(f);
                JE(c, 36, [])
            }
        }));
        return e
    };

    function MO(a) {
        return a.length ? a.join("~") : void 0
    };

    function NO(a, b) {
        return rC({
            K: a,
            gj: 3E3,
            nj: a.innerWidth > Qn ? 650 : 0,
            ta: kw,
            Vh: b
        })
    };

    function OO(a) {
        let b = 0;
        try {
            b |= Rn(a)
        } catch (c) {
            b |= 32
        }
        return b
    };

    function PO(a) {
        let b = 0;
        try {
            b |= Rn(a), b |= Un(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    };

    function QO(a) {
        return a.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    }

    function RO(a) {
        let b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    }

    function SO(a) {
        return a.hidden != null ? a.hidden : a.mozHidden != null ? a.mozHidden : a.webkitHidden != null ? a.webkitHidden : null
    }

    function TO(a, b) {
        if (QO(b) == 3) var c = !1;
        else a(), c = !0;
        if (!c) {
            const d = () => {
                Ib(b, "prerenderingchange", d);
                a()
            };
            Hb(b, "prerenderingchange", d)
        }
    };
    var UO = a => {
        let b = 0;
        try {
            b |= Rn(a);
            var c;
            if (!(c = !a.navigator)) {
                var d = a.navigator;
                c = "brave" in d && "isBrave" in d.brave || !1
            }
            b |= c || /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
            b |= Un(a, 2500, !0)
        } catch (e) {
            b |= 32
        }
        return b
    };
    const VO = "body div footer header html main section".split(" ");

    function WO(a, b, c = null, d = !1, e = !1) {
        let f = Rn(a);
        sC(a.navigator ? .userAgent) && (f |= 1048576);
        const h = a.innerWidth;
        h < 1200 && (f |= 65536);
        const k = a.innerHeight;
        k < 650 && (f |= 2097152);
        c && f === 0 && (c = c === 3 ? "left" : "right", (b = XO({
            K: a,
            aj: b,
            Lj: 1,
            position: c,
            V: h,
            W: k,
            Gb: new Set,
            minWidth: 120,
            minHeight: 500,
            Me: d,
            cf: e
        })) ? $z(a).sideRailPlasParam.set(c, `${b.width}x${b.height}_${String(c).charAt(0)}`) : f |= 16);
        return f
    }

    function YO(a) {
        a = $z(a).sideRailPlasParam;
        return [...Array.from(a.values())].join("|")
    }

    function ZO(a, b) {
        return pe(a, c => c.nodeType === Node.ELEMENT_NODE && b.has(c)) !== null
    }

    function $O(a, b) {
        return pe(a, c => c.nodeType === Node.ELEMENT_NODE && b.getComputedStyle(c, null).position === "fixed")
    }

    function aP(a) {
        const b = [];
        for (const c of a.document.querySelectorAll("*")) {
            const d = a.getComputedStyle(c, null);
            d.position === "fixed" && d.display !== "none" && d.visibility !== "hidden" && b.push(c)
        }
        return b
    }

    function bP(a, b) {
        const {
            top: c,
            left: d,
            bottom: e,
            right: f
        } = b.getBoundingClientRect();
        return c >= 0 && d >= 0 && e <= a.innerHeight && f <= a.innerWidth
    }

    function cP(a) {
        return Math.round(Math.round(a / 10) * 10)
    }

    function dP(a) {
        return `${a.position}-${cP(a.V)}x${cP(a.W)}-${cP(a.scrollY+a.Sb)}Y`
    }

    function eP(a) {
        return `f-${dP({position:a.position,Sb:a.Sb,scrollY:0,V:a.V,W:a.W})}`
    }

    function fP(a, b) {
        a = Math.min(a ? ? Infinity, b ? ? Infinity);
        return a !== Infinity ? a : 0
    }

    function gP(a, b, c) {
        const d = $z(c.K).sideRailProcessedFixedElements;
        if (!d.has(a)) {
            var e = a.getBoundingClientRect();
            if (e) {
                var f = Math.max(e.top - 10, 0),
                    h = Math.min(e.bottom + 10, c.W),
                    k = Math.max(e.left - 10, 0);
                e = Math.min(e.right + 10, c.V);
                for (var l = c.V * .3; f <= h; f += 10) {
                    if (e > 0 && k < l) {
                        var m = eP({
                            position: "left",
                            Sb: f,
                            V: c.V,
                            W: c.W
                        });
                        b.set(m, fP(b.get(m), k))
                    }
                    if (k < c.V && e > c.V - l) {
                        m = eP({
                            position: "right",
                            Sb: f,
                            V: c.V,
                            W: c.W
                        });
                        const n = c.V - e;
                        b.set(m, fP(b.get(m), n))
                    }
                }
                d.add(a)
            }
        }
    }

    function hP(a, b) {
        const c = b.K,
            d = b.Me;
        var e = `f-${cP(b.V)}x${cP(b.W)}`;
        a.has(e) || (a.set(e, 0), e = aP(c), d ? (iP(a, b, e.filter(f => bP(c, f))), jP(c, e.filter(f => !bP(c, f)))) : iP(a, b, e))
    }

    function iP(a, b, c) {
        var d = b.Gb;
        const e = b.K;
        $z(e).sideRailProcessedFixedElements.clear();
        d = new Set([...Array.from(e.document.querySelectorAll("[data-anchor-status],[data-side-rail-status]")), ...d]);
        for (const f of c) ZO(f, d) || gP(f, a, b)
    }

    function kP(a) {
        if (a.V < 1200 || a.W < 650) return null;
        var b = $z(a.K).sideRailAvailableSpace;
        a.aj || hP(b, {
            K: a.K,
            V: a.V,
            W: a.W,
            Gb: a.Gb,
            Me: a.Me
        });
        const c = [];
        var d = a.W * .9,
            e = ao(a.K),
            f = (a.W - d) / 2,
            h = f,
            k = d / 7;
        for (var l = 0; l < 8; l++) {
            var m = c,
                n = m.push;
            a: {
                var p = h;
                var q = a.position,
                    t = b,
                    w = {
                        K: a.K,
                        V: a.V,
                        W: a.W,
                        Gb: a.Gb,
                        cf: a.cf
                    };
                const I = eP({
                        position: q,
                        Sb: p,
                        V: w.V,
                        W: w.W
                    }),
                    B = dP({
                        position: q,
                        Sb: p,
                        scrollY: e,
                        V: w.V,
                        W: w.W
                    });
                if (t.has(B)) {
                    p = fP(t.get(I), t.get(B));
                    break a
                }
                const J = q === "left" ? 20 : w.V - 20;
                let H = J;q = w.V * .3 / 5 * (q === "left" ? 1 : -1);
                for (let ba =
                        0; ba < 6; ba++) {
                    var A = lC(w.K.document, {
                            x: Math.round(H),
                            y: Math.round(p)
                        }),
                        D = ZO(A, w.Gb),
                        G = $O(A, w.K);
                    if (!D && G !== null) {
                        gP(G, t, w);
                        t.delete(B);
                        break
                    }
                    D || (D = w, A.getAttribute("google-side-rail-overlap") === "true" ? D = !0 : A.getAttribute("google-side-rail-overlap") === "false" || D.cf && !VO.includes(A.tagName.toLowerCase()) ? D = !1 : (G = A.offsetHeight >= D.W * .25, D = A.offsetWidth >= D.V * .9 && G));
                    if (D) t.set(B, Math.round(Math.abs(H - J) + 20));
                    else if (H !== J) H -= q, q /= 2;
                    else {
                        t.set(B, 0);
                        break
                    }
                    H += q
                }
                p = fP(t.get(I), t.get(B))
            }
            n.call(m, p);
            h += k
        }
        b =
            a.Lj;
        e = a.position;
        d = Math.round(d / 8);
        f = Math.round(f);
        h = a.minWidth;
        a = a.minHeight;
        n = [];
        k = Array(c.length).fill(0);
        for (m = 0; m < c.length; m++) {
            for (; n.length !== 0 && c[n[n.length - 1]] >= c[m];) n.pop();
            k[m] = n.length === 0 ? 0 : n[n.length - 1] + 1;
            n.push(m)
        }
        n = [];
        l = c.length - 1;
        m = Array(c.length).fill(0);
        for (p = l; p >= 0; p--) {
            for (; n.length !== 0 && c[n[n.length - 1]] >= c[p];) n.pop();
            m[p] = n.length === 0 ? l : n[n.length - 1] - 1;
            n.push(p)
        }
        n = null;
        for (l = 0; l < c.length; l++)
            if (p = {
                    position: e,
                    width: Math.round(c[l]),
                    height: Math.round((m[l] - k[l] + 1) * d),
                    offsetY: f +
                        k[l] * d
                }, t = p.width >= h && p.height >= a, b === 0 && t) {
                n = p;
                break
            } else b === 1 && t && (!n || p.width * p.height > n.width * n.height) && (n = p);
        return n
    }

    function jP(a, b) {
        const c = $z(a);
        if (b.length && !c.g) {
            var d = new MutationObserver(() => {
                setTimeout(() => {
                    lP(a);
                    for (const e of c.i) e()
                }, 500)
            });
            for (const e of b) d.observe(e, {
                attributes: !0
            });
            c.g = d
        }
    }

    function lP(a) {
        ({
            sideRailAvailableSpace: a
        } = $z(a));
        const b = Array.from(a.keys()).filter(c => c.startsWith("f-"));
        for (const c of b) a.delete(c)
    }

    function XO(a) {
        if (a.Ia) return a.Ia.vb(1228, () => kP(a)) || null;
        try {
            return kP(a)
        } catch {}
        return null
    };
    const mP = {
        [27]: 512,
        [26]: 128
    };
    var nP = (a, b, c, d) => {
            switch (c) {
                case 1:
                case 2:
                    return NO(a, c) === 0;
                case 3:
                case 4:
                    return WO(a, !1, c, !0, U(xs)) === 0;
                case 8:
                    return UO(a) == 0;
                case 9:
                    return b = !(b.google_adtest === "on" || eL(a.location, "google_scr_debug")), !lH(a, b, d);
                case 30:
                    return bJ(a) == 0;
                case 26:
                    return PO(a) === 0;
                case 27:
                    return OO(a) === 0;
                case 40:
                    return !0;
                default:
                    return !1
            }
        },
        oP = (a, b, c, d) => {
            switch (c) {
                case 0:
                case 40:
                case 10:
                case 11:
                    return 0;
                case 1:
                case 2:
                    return NO(a, c);
                case 3:
                case 4:
                    return WO(a, U(ys), c, !1, U(xs));
                case 8:
                    return UO(a);
                case 9:
                    return lH(a, !(b.google_adtest === "on" || eL(a.location, "google_scr_debug")), d);
                case 16:
                    return ku(b, a) ? 0 : 8388608;
                case 30:
                    return bJ(a);
                case 26:
                    return PO(a);
                case 27:
                    return OO(a);
                default:
                    return 32
            }
        },
        pP = (a, b, c) => {
            const d = b.google_reactive_ad_format;
            if (!Kb(d)) return !1;
            a = Ae(a);
            if (!a || !nP(a, b, d, c)) return !1;
            b = $z(a);
            if (Yn(b, d)) return !1;
            b.adCount[d] || (b.adCount[d] = 0);
            b.adCount[d]++;
            return !0
        },
        rP = a => {
            const b = a.google_reactive_ad_format;
            return !a.google_reactive_ads_config && qP(a) && b !== 16 && b !== 10 && b !== 11 && b !== 40 && b !== 41
        },
        sP = a => {
            if (!a.hash) return null;
            let b = null;
            Fe(bL, c => {
                !b && eL(a, c) && (b = cL[c])
            });
            return b
        },
        uP = (a, b) => {
            const c = $z(a).tagSpecificState[1] || null;
            c != null && c.debugCard == null && Fe(dL, d => {
                !c.debugCardRequested && typeof d === "number" && hL(d, a.location) && (c.debugCardRequested = !0, tP(a, b, e => {
                    c.debugCard = e.createDebugCard(d, a)
                }))
            })
        },
        wP = (a, b, c) => {
            if (!b) return null;
            const d = $z(b);
            let e = 0;
            Fe(Lb, f => {
                const h = mP[f];
                h && vP(a, b, f, c) === 0 && (e |= h)
            });
            d.wasPlaTagProcessed && (e |= 256);
            a.google_reactive_tag_first && (e |= 1024);
            return e ? "" + e : null
        },
        xP = (a, b, c) => {
            const d = [];
            Fe(Lb, e => {
                const f = vP(b, a, e, c);
                f !== 0 && d.push(e + ":" + f)
            });
            return d.join(",") || null
        },
        yP = a => {
            const b = [],
                c = {};
            Fe(a, (d, e) => {
                if ((e = On[e]) && !c[e]) {
                    c[e] = !0;
                    if (d) d = 1;
                    else if (d === !1) d = 2;
                    else return;
                    b.push(e + ":" + d)
                }
            });
            return b.join(",")
        },
        zP = a => {
            a = a.overlays;
            if (!a) return "";
            a = a.bottom;
            return typeof a === "boolean" ? a ? "1" : "0" : ""
        },
        vP = (a, b, c, d) => {
            if (!b) return 256;
            let e = 0;
            const f = $z(b),
                h = Yn(f, c);
            if (a.google_reactive_ad_format == c || h) e |= 64;
            let k = !1;
            Fe(f.reactiveTypeDisabledByPublisher, (l, m) => {
                String(c) ===
                    String(m) && (k = !0)
            });
            return k && sP(b.location) !== c && (e |= 128, c == 2 || c == 1 || c == 3 || c == 4 || c == 8) ? e : e | oP(b, a, c, d)
        },
        AP = (a, b) => {
            if (a) {
                var c = $z(a),
                    d = {};
                Fe(b, (e, f) => {
                    (f = On[f]) && (e === !1 || /^false$/i.test(e)) && (d[f] = !0)
                });
                Fe(Lb, e => {
                    d[Pn[e]] && (c.reactiveTypeDisabledByPublisher[e] = !0)
                })
            }
        },
        BP = (a, b, c) => {
            b = W.Da(b, c);
            return $K(3, window, a).Qc.then(b)
        },
        tP = (a, b, c) => {
            c = W.Da(212, c);
            $K(4, a, b).Qc.then(c)
        },
        CP = (a, b, c) => {
            a.dataset.adsbygoogleStatus = "reserved";
            a.className += " adsbygoogle-noablate";
            c.adsbygoogle || (c.adsbygoogle = [],
                Be(c.document, id `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`));
            c.adsbygoogle.push({
                element: a,
                params: b
            })
        },
        DP = a => {
            a = a.google_reactive_ad_format;
            return Kb(a) ? "" + a : null
        },
        qP = a => !!DP(a) || a.google_pgb_reactive != null,
        EP = a => {
            a = DP(a);
            return a == 26 || a == 27 || a == 30 || a == 16 || a == 40 || a == 41
        };

    function FP(a) {
        return typeof a.google_reactive_sra_index === "number"
    }

    function GP(a, b, c) {
        const d = b.K || b.pubWin,
            e = b.D;
        var f = xP(d, e, c);
        e.google_reactive_plat = f;
        (f = yP(a)) && (e.google_reactive_plaf = f);
        (f = zP(a)) && (e.google_reactive_fba = f);
        (f = YO(d)) && (e.google_plas = f);
        HP(a, e);
        f = sP(b.pubWin.location);
        IP(a, f, e);
        f ? (e.fra = f, e.google_pgb_reactive = 6) : e.google_pgb_reactive = 5;
        e.easpi = U(gt);
        e.asro = U(dt);
        e.aihb = U(Ds);
        e.ailel = MO(au(Xs));
        e.aiael = MO(au(Es));
        e.aifxl = MO(au(Ss));
        e.aiixl = MO(au(Us));
        U(Vs) && (e.slmct = V(Ys), e.samct = V(Hs));
        U(Os) || (e.aiict = !0, e.aicel = MO(au(Ms)));
        U(bt) && (e.aipaq = !0);
        U(ft) && (e.aigda = !0);
        V(Fs) && (e.aiapm = V(Fs));
        V(Gs) && (e.aiapmi = V(Gs));
        U(ct) && (e.aiombap = !0);
        e.fsapi = !0;
        f !== 8 && (c && hH(c) ? (f = kH(c, 86400, "__lsv__"), f ? .length && (f = Math.floor((Date.now() - Math.max(...f)) / 6E4), f >= 0 && (e.vmsli = f))) : e.vmsli = -1);
        f = kH(c, 600, "__lsa__");
        f ? .length && Math.floor((Date.now() - Math.max(...f)) / 6E4) <= V(zr) && (e.dap = 3);
        Nj() || mO(b.pubWin.top);
        f = RM(b.pubWin, "rsrai", nw(429, (h, k) => JP(b, d, e.google_ad_client, a, h, k, c)), nw(430, (h, k) => eo(b.pubWin, "431", kw, k)));
        b.j.push(f);
        $z(d).wasReactiveTagRequestSent = !0;
        KP(b, a, c)
    }

    function KP(a, b, c) {
        const d = a.D,
            e = Da(b.page_level_pubvars) ? b.page_level_pubvars : {};
        b = RM(a.pubWin, "apcnf", nw(353, (f, h) => {
            const k = dc(a.xa.jb, YK());
            var l = a.pubWin,
                m = d.google_ad_client;
            return bf(h.origin) ? iN(l, m, e, f.config, c, k, null) : !1
        }), nw(353, (f, h) => eo(a.pubWin, "353", kw, h)));
        a.j.push(b)
    }

    function JP(a, b, c, d, e, f, h) {
        if (!bf(f.origin)) return !1;
        f = e.data;
        if (!Array.isArray(f)) return !1;
        if (!TE(b, 1)) return !0;
        f && Bj(6, [f]);
        e = e.amaConfig;
        const k = [],
            l = [],
            m = $z(b);
        let n = null;
        for (let p = 0; p < f.length; p++) {
            if (!f[p]) continue;
            const q = f[p],
                t = q.adFormat;
            m && q.enabledInAsfe && (m.reactiveTypeEnabledInAsfe[t] = !0);
            if (!q.noCreative) {
                q.google_reactive_sra_index = p;
                if (t === 9 && e) {
                    q.pubVars = Object.assign(q.pubVars || {}, LP(d, q));
                    const w = new mH;
                    if (fH(w, q) && w.B(q)) {
                        n = w;
                        continue
                    }
                }
                k.push(q);
                l.push(t)
            }
        }
        k.length && BP(a.xa.Sg,
            522, p => {
                MP(k, b, p, d, h)
            });
        e && iN(b, c, d, e, h, a.xa.jb, n);
        return !0
    }

    function LP(a, b) {
        const c = b.adFormat,
            d = b.adKey;
        delete b.adKey;
        const e = {};
        a = a.page_level_pubvars;
        Da(a) && Object.assign(e, a);
        e.google_ad_unit_key = d;
        e.google_reactive_sra_index = b.google_reactive_sra_index;
        c === 30 && (e.google_reactive_ad_format = 30);
        e.google_pgb_reactive = e.google_pgb_reactive || 5;
        return b.pubVars = e
    }

    function MP(a, b, c, d, e) {
        const f = [];
        for (let h = 0; h < a.length; h++) {
            const k = a[h],
                l = k.adFormat,
                m = k.adKey,
                n = c.configProcessorForAdFormat(l);
            l && n && m && (k.pubVars = LP(d, k), delete k.google_reactive_sra_index, f.push(l), mw(466, () => n.verifyAndProcessConfig(b, k, e)))
        }
    }

    function HP(a, b) {
        const c = [];
        let d = !1;
        Fe(On, (e, f) => {
            let h;
            a.hasOwnProperty(f) && (f = a[f], f ? .google_ad_channel && (h = String(f.google_ad_channel)));
            --e;
            c[e] && c[e] !== "+" || (c[e] = h ? h.replace(/,/g, "+") : "+", d || (d = !!h))
        });
        d && (b.google_reactive_sra_channels = c.join(","))
    }

    function IP(a, b, c) {
        if (!c.google_adtest) {
            var d = a.page_level_pubvars;
            if (a.google_adtest === "on" || d ? .google_adtest === "on" || b) c.google_adtest = "on"
        }
    };
    Wd("script");
    var NP = {
        "image-top": 0,
        "image-middle": 1,
        "image-side": 2,
        "text-only": 3,
        "in-article": 4
    };

    function OP(a, b) {
        if (!ku(b, a)) return () => {};
        a = PP(b, a);
        if (!a) return () => {};
        const c = PE();
        b = Nb(b);
        const d = {
            wb: a,
            D: b,
            offsetWidth: a.offsetWidth
        };
        c.push(d);
        return () => bb(c, d)
    }

    function PP(a, b) {
        a = b.document.getElementById(a.google_async_iframe_id);
        if (!a) return null;
        for (a = a.parentElement; a && !pu.test(a.className);) a = a.parentElement;
        return a
    }

    function QP(a, b) {
        for (let f = 0; f < a.childNodes.length; f++) {
            const h = {},
                k = a.childNodes[f];
            var c = k.style,
                d = ["width", "height"];
            for (let l = 0; l < d.length; l++) {
                const m = "google_ad_" + d[l];
                if (!h.hasOwnProperty(m)) {
                    var e = Ne(c[d[l]]);
                    e = e === null ? null : Math.round(e);
                    e != null && (h[m] = e)
                }
            }
            if (h.google_ad_width == b.google_ad_width && h.google_ad_height == b.google_ad_height) return k
        }
        return null
    }

    function RP(a, b) {
        a.style.display = b ? "inline-block" : "none";
        const c = a.parentElement;
        b ? c.dataset.adStatus = a.dataset.adStatus : (a.dataset.adStatus = c.dataset.adStatus, delete c.dataset.adStatus)
    }

    function SP(a, b) {
        const c = b.innerHeight >= b.innerWidth ? 1 : 2;
        if (a.g != c) {
            a.g = c;
            a = PE();
            for (const d of a)
                if (d.wb.offsetWidth != d.offsetWidth || d.D.google_full_width_responsive_allowed) d.offsetWidth = d.wb.offsetWidth, mw(467, () => {
                    var e = d.wb,
                        f = d.D;
                    const h = QP(e, f);
                    f.google_full_width_responsive_allowed && (e.style.marginLeft = f.gfwroml || "", e.style.marginRight = f.gfwromr || "", e.style.height = f.gfwroh ? `${f.gfwroh}px` : "", e.style.width = f.gfwrow ? `${f.gfwrow}px` : "", e.style.zIndex = f.gfwroz || "", delete f.google_full_width_responsive_allowed);
                    delete f.google_ad_format;
                    delete f.google_ad_width;
                    delete f.google_ad_height;
                    delete f.google_content_recommendation_ui_type;
                    delete f.google_content_recommendation_rows_num;
                    delete f.google_content_recommendation_columns_num;
                    b.google_spfd(e, f, b);
                    const k = QP(e, f);
                    !k && h && e.childNodes.length == 1 ? (RP(h, !1), f.google_reactive_ad_format = 16, f.google_ad_section = "responsive_resize", CP(e, f, b)) : k && h && k != h && (RP(h, !1), RP(k, !0))
                })
        }
    }
    var TP = class extends Q {
        constructor() {
            super(...arguments);
            this.g = null
        }
        J(a) {
            const b = DE();
            if (!IE(b, 27, !1)) {
                JE(b, 27, !0);
                this.g = a.innerHeight >= a.innerWidth ? 1 : 2;
                var c = () => {
                    SP(this, a)
                };
                Hb(a, "resize", c);
                wo(this, () => {
                    Ib(a, "resize", c)
                })
            }
        }
    };
    var UP = class {
        constructor(a, b) {
            this.K = a;
            this.wb = b;
            this.g = null;
            this.j = 0
        }
        i() {
            ++this.j >= 10 && r.clearInterval(this.g);
            var a = nu(this.K, this.wb);
            ou(this.K, this.wb, a);
            a = ju(this.wb, this.K);
            a != null && a.x === 0 || r.clearInterval(this.g)
        }
    };

    function VP(a) {
        var b = window;
        return a.google_adtest === "on" || a.google_adbreak_test === "on" || b.location.host.endsWith("h5games.usercontent.goog") || b.location.host === "gamesnacks.com" ? b.document.querySelector('meta[name="h5-games-eids"]') ? .getAttribute("content") ? .split(",").map(c => Math.floor(Number(c))).filter(c => !isNaN(c) && c > 0) || [] : []
    };

    function WP(a, b) {
        b && !a.g && (b = b.split(":"), a.g = b.find(c => c.indexOf("ID=") === 0) || null, a.j = b.find(c => c.indexOf("T=") === 0) ? .substring(2) || null)
    }
    var XP = class {
            constructor() {
                this.l = new Date(Date.now());
                this.j = this.g = null;
                this.i = {
                    [3]: {},
                    [4]: {},
                    [5]: {}
                };
                this.i[3] = {
                    [71]: (...a) => {
                        var b = this.g;
                        var c = this.l,
                            d = Number(a[0]);
                        a = Number(a[1]);
                        b = b !== null ? He(`${"w5uHecUBa2S"}:${d}:${b}`) % a === Math.floor(c.valueOf() / 864E5) % a : void 0;
                        return b
                    }
                };
                this.i[4] = {
                    [15]: () => {
                        var a = Number(this.j || void 0);
                        isNaN(a) ? a = void 0 : (a = new Date(a * 1E3), a = a.getFullYear() * 1E4 + (a.getMonth() + 1) * 100 + a.getDate());
                        return a
                    }
                }
            }
        },
        YP;
    var ZP = class extends O {
        g() {
            return K(this, 10)
        }
    };
    var $P = class extends O {
        g() {
            return Lh(this, 1, Tg, y())
        }
    };
    $P.O = [1];
    var aQ = class extends O {};
    aQ.O = [19];
    var bQ = [13, 14];
    let cQ = void 0;

    function dQ() {
        Ki(cQ, Ni);
        return cQ
    }

    function eQ(a) {
        Ki(cQ, Nk);
        cQ = a
    };

    function fQ(a) {
        try {
            const b = a.getItem("google_adsense_settings");
            if (!b) return {};
            const c = JSON.parse(b);
            return c !== Object(c) ? {} : Jb(c, (d, e) => Object.prototype.hasOwnProperty.call(c, e) && typeof e === "string" && Array.isArray(d))
        } catch (b) {
            return {}
        }
    };

    function gQ(a = r) {
        return a.ggeac || (a.ggeac = {})
    };

    function hQ(a, b = document) {
        return !!b.featurePolicy ? .features().includes(a)
    }

    function iQ(a, b = document) {
        return !!b.featurePolicy ? .allowedFeatures().includes(a)
    }

    function jQ(a = navigator) {
        try {
            return !!a.protectedAudience ? .queryFeatureSupport ? .("deprecatedRenderURLReplacements")
        } catch (b) {
            return !1
        }
    };

    function kQ(a = Ee()) {
        return b => He(`${b} + ${a}`) % 1E3
    };

    function lQ(a, b) {
        a.g = zn(14, b, () => {})
    }
    class mQ {
        constructor() {
            this.g = () => {}
        }
    }

    function nQ(a) {
        P(mQ).g(a)
    };

    function oQ(a = gQ()) {
        An(P(Bn), a);
        pQ(a);
        lQ(P(mQ), a);
        P(Zt).i()
    }

    function pQ(a) {
        const b = P(Zt);
        b.j = (c, d) => zn(5, a, () => !1)(c, d, 1);
        b.A = (c, d) => zn(6, a, () => 0)(c, d, 1);
        b.C = (c, d) => zn(7, a, () => "")(c, d, 1);
        b.g = (c, d) => zn(8, a, () => [])(c, d, 1);
        b.l = (c, d) => zn(17, a, () => [])(c, d, 1);
        b.i = () => {
            zn(15, a, () => {})(1)
        }
    };

    function qQ(a, b, c) {
        var d = {
            [0]: kQ(ff(b).toString())
        };
        if (c) {
            c = sO(new wO(b), "__gads", c) || "";
            YP || (YP = new XP);
            b = YP;
            WP(b, c);
            nQ(b.i);
            const e = (new RegExp(/(?:^|:)(ID=[^\s:]+)/)).exec(c) ? .[1];
            d[1] = f => e ? kQ(e)(f) : void 0
        }
        d = Cn(a, d);
        Gn.na(1085, kF(P(iF), a, d))
    }

    function rQ(a, b) {
        qQ(20, a, b);
        qQ(17, a, b)
    }

    function sQ(a) {
        const b = P(Bn).g();
        a = VP(a);
        return b.concat(a).join(",")
    }

    function tQ(a) {
        const b = rk();
        b && (a.debug_experiment_id = b)
    };
    var uQ = class {
        constructor(a) {
            this.i = 0;
            this.g = this.I = null;
            this.H = 0;
            this.j = [];
            this.qc = this.B = "";
            this.l = this.G = null;
            this.F = !1;
            this.K = a.K;
            this.pubWin = a.pubWin;
            this.D = a.D;
            this.ma = a.ma;
            this.xa = a.xa;
            this.Wa = a.Wa;
            this.ea = a.ea
        }
    };

    function vQ(a, b, c) {
        c = MK(a, QF(b, {
            idpcApplies: c && !NM()
        }));
        c = Ei(c, 2, b.tcString);
        c = Ei(c, 4, b.addtlConsent || "");
        Fh(c, 7, xg(b.internalErrorState));
        c = !TF(b, ["2", "7", "9", "10"], 3);
        ti(a, 8, c);
        c = !TF(b, ["3", "4"], 0);
        ti(a, 9, c);
        b.gdprApplies != null && ti(a, 3, b.gdprApplies)
    }

    function wQ(a) {
        const b = new ZF(a.pubWin, {
            timeoutMs: -1,
            Nh: !0
        });
        if (!VF(b)) return Promise.resolve(null);
        const c = DE(),
            d = IE(c, 24);
        if (d) return Promise.resolve(d);
        const e = new Promise(f => {
            f = {
                resolve: f
            };
            const h = IE(c, 25, []);
            h.push(f);
            JE(c, 25, h)
        });
        d || d === null || (JE(c, 24, null), b.addEventListener(f => {
            if (PF(f)) {
                JE(c, 24, f);
                vQ(a.g, f, K(a.ma, 6));
                for (const h of IE(c, 25, [])) h.resolve(f);
                JE(c, 25, [])
            } else JE(c, 24, null)
        }));
        return e
    };

    function xQ(a, b, c = 1E5) {
        a -= b;
        return a >= c ? "M" : a >= 0 ? a : "-M"
    };
    var Pk = {
        Wn: 0,
        Sn: 1,
        Tn: 9,
        Pn: 2,
        Qn: 3,
        Vn: 5,
        Un: 7,
        Rn: 10
    };
    var yQ = class extends O {},
        zQ = Oi(yQ),
        AQ = [1, 3];
    const BQ = id `https://securepubads.g.doubleclick.net/static/topics/topics_frame.html`;

    function CQ(a) {
        const b = a.google_tag_topics_state ? ? (a.google_tag_topics_state = {});
        return b.messageChannelSendRequestFn ? Promise.resolve(b.messageChannelSendRequestFn) : new Promise(c => {
            function d(k) {
                return h.g(k).then(({
                    data: l
                }) => l)
            }
            const e = Ce("IFRAME");
            e.style.display = "none";
            e.name = "goog_topics_frame";
            e.src = fc(BQ).toString();
            const f = (new URL(BQ.toString())).origin,
                h = hN({
                    destination: a,
                    Na: e,
                    origin: f,
                    pe: "goog:gRpYw:doubleclick"
                });
            h.g("goog:topics:frame:handshake:ack").then(({
                data: k
            }) => {
                k === "goog:topics:frame:handshake:ack" &&
                    c(d)
            });
            b.messageChannelSendRequestFn = d;
            a.document.documentElement.appendChild(e)
        })
    }

    function DQ(a, b, c) {
        var d = W,
            e = U(It);
        const {
            Uc: f,
            Tc: h
        } = EQ(c);
        b = b.google_tag_topics_state ? ? (b.google_tag_topics_state = {});
        b.getTopicsPromise || (a = a({
            message: "goog:topics:frame:get:topics",
            skipTopicsObservation: e
        }).then(k => {
            let l = h;
            if (k instanceof Uint8Array) l || (l = !(f instanceof Uint8Array && mb(k, f)));
            else if (Ok()(k)) l || (l = k !== f);
            else return d.ba(989, Error(JSON.stringify(k))), 7;
            if (l && c) try {
                var m = new yQ;
                var n = Ci(m, 2, sk());
                k instanceof Uint8Array ? Xh(n, 1, AQ, $f(k, !1, !1)) : Xh(n, 3, AQ, xg(k));
                c.setItem("goog:cached:topics",
                    Hi(n))
            } catch {}
            return k
        }), b.getTopicsPromise = a);
        return f && !h ? Promise.resolve(f) : b.getTopicsPromise
    }

    function EQ(a) {
        if (!a) return {
            Uc: null,
            Tc: !0
        };
        try {
            const m = a.getItem("goog:cached:topics");
            if (!m) return {
                Uc: null,
                Tc: !0
            };
            const n = zQ(m);
            let p;
            const q = $h(n, AQ);
            switch (q) {
                case 0:
                    p = null;
                    break;
                case 1:
                    a = n;
                    var b = $h(n, AQ) === 1 ? 1 : -1;
                    const w = a.U;
                    let A = w[x];
                    const D = Dh(w, A, b),
                        G = $f(D, !0, !!(A & 34));
                    G != null && G !== D && Gh(w, A, b, G);
                    var c = G;
                    var d = c == null ? Df() : c;
                    b = Uint8Array;
                    Cf(zf);
                    var e = d.g;
                    if (e == null || yf(e)) var f = e;
                    else {
                        if (typeof e === "string") {
                            vf.test(e) && (e = e.replace(vf, xf));
                            let I;
                            I = atob(e);
                            const B = new Uint8Array(I.length);
                            for (e = 0; e < I.length; e++) B[e] = I.charCodeAt(e);
                            var h = B
                        } else h = null;
                        f = h
                    }
                    var k = f;
                    var l = k == null ? k : d.g = k;
                    p = new b(l || 0);
                    break;
                case 3:
                    p = oi(n, $h(n, AQ) === 3 ? 3 : -1);
                    break;
                default:
                    wd(q, void 0)
            }
            const t = mi(n, 2) + 6048E5 < sk();
            return {
                Uc: p,
                Tc: t
            }
        } catch {
            return {
                Uc: null,
                Tc: !0
            }
        }
    };

    function FQ(a) {
        return U(yt) && a ? !!a.match($t(wt)) : !1
    }

    function GQ(a, b) {
        if (!U(Gt) && (!U(zt) || b.g())) {
            b = iQ("shared-storage", a.document);
            const c = iQ("browsing-topics", a.document);
            if (b || c) try {
                return CQ(a)
            } catch (d) {
                W.ba(984, d, void 0, void 0)
            }
        }
        return null
    }
    async function HQ(a, b, c, d, e, f) {
        if (iQ("browsing-topics", b.document) && e && !U(Ft) && !FQ(f ? .label))
            if (IQ(c, d)) {
                a.l = 1;
                const h = qj(c, b);
                c = e.then(async k => {
                    await DQ(k, b, h).then(l => {
                        a.l = l
                    })
                });
                U(Ht) && (d = V(Jt), d > 0 ? await Promise.race([c, hf(d)]) : await c)
            } else a.l = 5
    }

    function IQ(a, b) {
        return !b.google_restrict_data_processing && b.google_tag_for_under_age_of_consent !== 1 && b.google_tag_for_child_directed_treatment !== 1 && !!a.g() && !OE() && !K(a, 9) && !K(a, 13) && !K(a, 12) && (typeof b.google_privacy_treatments !== "string" || !b.google_privacy_treatments.split(",").includes("disablePersonalization")) && !K(a, 14)
    };
    var KQ = (a, b, c) => {
        const d = b.parentElement ? .classList.contains("adsbygoogle") ? b.parentElement : b;
        c.addEventListener("load", () => JQ(d));
        return RM(a, "adpnt", (e, f) => {
            if ($n(f, c.contentWindow)) {
                e = co(e).qid;
                try {
                    c.setAttribute("data-google-query-id", e), a.googletag ? ? (a.googletag = {
                        cmd: []
                    }), a.googletag.queryIds = a.googletag.queryIds ? ? [], a.googletag.queryIds.push(e), a.googletag.queryIds.length > 500 && a.googletag.queryIds.shift()
                } catch {}
                d.dataset.adStatus = "filled";
                e = !0
            } else e = !1;
            return e
        })
    };

    function JQ(a) {
        setTimeout(() => {
            a.dataset.adStatus !== "filled" && (a.dataset.adStatus = "unfilled")
        }, 1E3)
    };

    function LQ(a, b, {
        Pg: c,
        Qg: d
    }) {
        return !tj(a.g) || K(b, 8) || (c || !b.g()) && d ? !1 : !0
    }

    function MQ(a, b, {
        Pg: c,
        Qg: d
    }) {
        if (!K(b, 8) && (!c && b.g() || !d)) return vj("__eoi", a.g) ? ? void 0
    }
    var NQ = class {
        constructor(a) {
            this.g = a
        }
    };

    function OQ(a, b, c) {
        try {
            if (!bf(c.origin) || !$n(c, a.g.contentWindow)) return
        } catch (f) {
            return
        }
        const d = b.msg_type;
        let e;
        typeof d === "string" && (e = a.ua[d]) && a.Ia.vb(168, () => {
            e.call(a, b, c)
        })
    }
    class PQ extends Q {
        constructor(a, b) {
            var c = W,
                d = kw;
            super();
            this.j = a;
            this.g = b;
            this.Ia = c;
            this.ta = d;
            this.ua = {};
            this.Fa = this.Ia.Da(168, (e, f) => void OQ(this, e, f));
            this.ib = this.Ia.Da(169, (e, f) => eo(this.j, "ras::xsf", this.ta, f));
            this.R = [];
            this.ca(this.ua);
            this.R.push(QM(this.j, "sth", this.Fa, this.ib))
        }
        i() {
            for (const a of this.R) a();
            this.R.length = 0;
            super.i()
        }
    };
    var QQ = class extends PQ {};

    function RQ(a, b, c = null) {
        return new SQ(a, b, c)
    }
    var SQ = class extends QQ {
        constructor(a, b, c) {
            super(a, b);
            this.A = c;
            this.B = P(iF);
            this.l = () => {};
            Hb(this.g, "load", this.l)
        }
        i() {
            Ib(this.g, "load", this.l);
            super.i()
        }
        ca(a) {
            a["adsense-labs"] = b => {
                if (b = co(b).settings)
                    if (b = Ji(dj, JSON.parse(b)), F(b, 1) != null) {
                        var c = b.U;
                        if (ci(c, c[x], cj, 4, 3, !1, !0).length > 0) {
                            var d = c = di(b, cj, 4, y(kg)),
                                e = this.B;
                            const k = new Zl;
                            for (var f of d) switch (f.getVersion()) {
                                case 1:
                                    ti(k, 1, !0);
                                    break;
                                case 2:
                                    ti(k, 2, !0)
                            }
                            f = new $l;
                            f = E(f, 1, am, k);
                            oF(e, f);
                            f = this.j;
                            e = this.A;
                            if (!IE(DE(), 37, !1)) {
                                f = new wO(f);
                                for (var h of c) switch (h.getVersion()) {
                                    case 1:
                                        tO(f,
                                            "__gads", h, e);
                                        break;
                                    case 2:
                                        tO(f, "__gpi", h, e)
                                }
                                JE(DE(), 37, !0)
                            }
                            Fh(b, 4)
                        }
                        if (h = z(b, cj, 5)) c = this.j, IE(DE(), 40, !1) || (c = new NQ(c), f = mi(h, 2) - Date.now() / 1E3, f = {
                            Bd: Math.max(f, 0),
                            path: L(h, 3),
                            domain: L(h, 4),
                            Sd: !1
                        }, wj("__eoi", h.getValue(), f, c.g), JE(DE(), 40, !0));
                        Fh(b, 5);
                        h = this.j;
                        c = L(b, 1) || "";
                        if (RK({
                                win: h,
                                Va: dQ()
                            }).g != null) {
                            f = RK({
                                win: h,
                                Va: dQ()
                            });
                            f = f.g != null ? fQ(f.getValue()) : {};
                            b !== null && (f[c] = Ii(b));
                            try {
                                h.localStorage.setItem("google_adsense_settings", JSON.stringify(f))
                            } catch (k) {}
                        }
                    }
            }
        }
    };

    function TQ(a) {
        a.A = a.B;
        a.F.style.transition = "height 500ms";
        a.l.style.transition = "height 500ms";
        a.g.style.transition = "height 500ms";
        UQ(a)
    }

    function VQ(a, b) {
        a.g.contentWindow.postMessage(JSON.stringify({
            msg_type: "expand-on-scroll-result",
            eos_success: !0,
            eos_amount: b,
            googMsgType: "sth"
        }), "*")
    }

    function UQ(a) {
        const b = `rect(0px, ${a.g.width}px, ${a.A}px, 0px)`;
        a.g.style.clip = b;
        a.l.style.clip = b;
        a.g.setAttribute("height", a.A);
        a.g.style.height = a.A + "px";
        a.l.setAttribute("height", a.A);
        a.l.style.height = a.A + "px";
        a.F.style.height = a.A + "px"
    }

    function WQ(a, b) {
        b = Me(b.r_nh);
        a.B = b == null ? 0 : b;
        if (a.B <= 0) return "1";
        a.I = Yj(a.F).y;
        a.H = ao(a.j);
        if (a.I + a.A < a.H) return "2";
        if (a.I > Wn(a.j) - a.j.innerHeight) return "3";
        b = a.H;
        a.g.setAttribute("height", a.B);
        a.g.style.height = a.B + "px";
        a.l.style.overflow = "hidden";
        a.F.style.position = "relative";
        a.F.style.transition = "height 100ms";
        a.l.style.transition = "height 100ms";
        a.g.style.transition = "height 100ms";
        b = Math.min(b + a.j.innerHeight - a.I, a.A);
        Rj(a.l, {
            position: "relative",
            top: "auto",
            bottom: "auto"
        });
        b = `rect(0px, ${a.g.width}px, ${b}px, 0px)`;
        Rj(a.g, {
            clip: b
        });
        Rj(a.l, {
            clip: b
        });
        return "0"
    }
    class XQ extends QQ {
        constructor(a, b) {
            super(a.K, b);
            this.l = a.ea;
            this.F = this.l.parentElement && this.l.parentElement.classList.contains("adsbygoogle") ? this.l.parentElement : this.l;
            this.A = parseInt(this.l.style.height, 10);
            this.Ka = this.hb = !1;
            this.ia = this.H = this.B = 0;
            this.Mc = this.A / 5;
            this.I = Yj(this.F).y;
            this.Bb = Db(nw(651, () => {
                this.I = Yj(this.F).y;
                var c = this.H;
                this.H = ao(this.j);
                this.A < this.B ? (c = this.H - c, c > 0 && (this.ia += c, this.ia >= this.Mc ? (TQ(this), VQ(this, this.B)) : (this.A = Math.min(this.B, this.A + c), VQ(this, c), UQ(this)))) :
                    Ib(this.j, "scroll", this.M)
            }), this);
            this.M = () => {
                var c = this.Bb;
                kj.requestAnimationFrame ? kj.requestAnimationFrame(c) : c()
            }
        }
        ca(a) {
            a["expand-on-scroll"] = (b, c) => {
                b = co(b);
                this.hb || (this.hb = !0, b = WQ(this, b), b === "0" && Hb(this.j, "scroll", this.M, Eb), c.source.postMessage(JSON.stringify({
                    msg_type: "expand-on-scroll-result",
                    eos_success: b === "0",
                    googMsgType: "sth"
                }), "*"))
            };
            a["expand-on-scroll-force-expand"] = () => {
                this.Ka || (this.Ka = !0, TQ(this), Ib(this.j, "scroll", this.M))
            }
        }
        i() {
            this.M && Ib(this.j, "scroll", this.M, Eb);
            super.i()
        }
    };

    function YQ(a) {
        const b = a.I.getBoundingClientRect(),
            c = b.top + b.height < 0;
        return !(b.top > a.j.innerHeight) && !c
    }
    class ZQ extends Q {
        constructor(a, b, c) {
            super();
            this.j = a;
            this.A = b;
            this.I = c;
            this.B = 0;
            this.l = YQ(this);
            this.H = Cb(this.F, this);
            this.g = nw(433, () => {
                var d = this.H;
                kj.requestAnimationFrame ? kj.requestAnimationFrame(d) : d()
            });
            Hb(this.j, "scroll", this.g, Eb)
        }
        F() {
            const a = YQ(this);
            if (a && !this.l) {
                var b = {
                    rr: "vis-bcr"
                };
                const c = this.A.contentWindow;
                c && (SM(c, "ig", b, "*", 2), ++this.B >= 10 && this.g && Ib(this.j, "scroll", this.g, Eb))
            }
            this.l = a
        }
    };

    function $Q(a, b) {
        Array.isArray(b) || (b = [b]);
        b = b.map(function(c) {
            return typeof c === "string" ? c : c.property + " " + c.duration + "s " + c.timing + " " + c.delay + "s"
        });
        Rj(a, "transition", b.join(","))
    }
    var aR = Ab(function() {
        var a = he(document, "DIV"),
            b = ae ? "-webkit" : $d ? "-moz" : Yd ? "-ms" : null,
            c = {
                transition: "opacity 1s linear"
            };
        b && (c[b + "-transition"] = "opacity 1s linear");
        c = {
            style: c
        };
        if (!Tc.test("div")) throw Error("");
        if ("DIV" in Vc) throw Error("");
        b = void 0;
        var d = "";
        if (c)
            for (k in c)
                if (Object.prototype.hasOwnProperty.call(c, k)) {
                    if (!Tc.test(k)) throw Error("");
                    var e = c[k];
                    if (e != null) {
                        var f = k;
                        if (e instanceof rb) e = vb(e);
                        else if (f.toLowerCase() == "style") {
                            if (!Da(e)) throw Error("");
                            if (!(e instanceof Ac)) {
                                let l = "";
                                for (var h in e)
                                    if (Object.prototype.hasOwnProperty.call(e, h)) {
                                        if (!/^[-_a-zA-Z0-9]+$/.test(h)) throw Error(`Name allows only [-_a-zA-Z0-9], got: ${h}`);
                                        let m = e[h];
                                        m != null && (m = Array.isArray(m) ? m.map(Cc).join(" ") : Cc(m), l += `${h}:${m};`)
                                    }
                                e = l ? new Ac(l, yc) : Bc
                            }
                            e = zc(e)
                        } else {
                            if (/^on/i.test(f)) throw Error("");
                            if (f.toLowerCase() in Uc)
                                if (e instanceof cc) e = fc(e).toString();
                                else if (e instanceof nc) e = pc(e);
                            else if (typeof e === "string") e = uc(e).toString();
                            else throw Error("");
                        }
                        f = `${f}="` + Sb(String(e)) + '"';
                        d += " " + f
                    }
                }
        var k =
            "<div" + d;
        b == null ? b = [] : Array.isArray(b) || (b = [b]);
        Qb.div === !0 ? k += ">" : (h = Sc(b), k += ">" + Nc(h).toString() + "</div>");
        k = Pc(k);
        md(a, k);
        return Uj(a.firstChild, "transition") != ""
    });

    function bR(a, b, c) {
        a.i[b].indexOf(c) < 0 && (a.i[b] += c)
    }

    function cR(a, b) {
        a.g.indexOf(b) >= 0 || (a.g = b + a.g)
    }

    function dR(a, b, c, d) {
        return a.errors != "" || b ? null : a.g.replace(eR, "") == "" ? c != null && a.i[0] || d != null && a.i[1] ? !1 : !0 : !1
    }

    function fR(a) {
        var b = dR(a, "", null, 0);
        if (b === null) return "XS";
        b = b ? "C" : "N";
        a = a.g;
        return a.indexOf("a") >= 0 ? b + "A" : a.indexOf("f") >= 0 ? b + "F" : b + "S"
    }
    var gR = class {
        constructor(a, b) {
            this.i = ["", ""];
            this.g = a || "";
            this.errors = b || ""
        }
        wa(a) {
            this.errors.indexOf(a) < 0 && (this.errors = a + this.errors);
            return this
        }
        toString() {
            return [this.i[0], this.i[1], this.g, this.errors].join("|")
        }
    };

    function hR(a) {
        let b = a.R;
        a.G = () => {};
        iR(a, a.C, b);
        let c = a.C.parentElement;
        if (!c) return a.g;
        let d = !0,
            e = null;
        for (; c;) {
            try {
                e = /^head|html$/i.test(c.nodeName) ? null : De(c, b)
            } catch (h) {
                a.g.wa("c")
            }
            const f = jR(a, b, c, e);
            c.classList.contains("adsbygoogle") && e && (/^\-.*/.test(e["margin-left"]) || /^\-.*/.test(e["margin-right"])) && (a.M = !0);
            if (d && !f && kR(e)) {
                cR(a.g, "l");
                a.F = c;
                break
            }
            d = d && f;
            if (e && lR(a, e)) break;
            c = c.parentElement;
            if (!c) {
                if (b === a.pubWin) break;
                try {
                    if (c = b.frameElement, b = b.parent, !xe(b)) {
                        cR(a.g, "c");
                        break
                    }
                } catch (h) {
                    cR(a.g,
                        "c");
                    break
                }
            }
        }
        a.B && a.A && mR(a);
        return a.g
    }

    function nR(a) {
        function b(n) {
            for (let p = 0; p < n.length; p++) Rj(l, n[p], "0px")
        }

        function c() {
            oR(d, h, k);
            !l || m || k || (b(pR), b(qR))
        }
        const d = a.C;
        d.style.overflow = a.Pc ? "visible" : "hidden";
        a.B && (a.F ? ($Q(d, rR()), $Q(a.F, rR())) : $Q(d, "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1) .3s, height .5s cubic-bezier(.4, 0, 1, 1)"));
        a.I !== null && (d.style.opacity = String(a.I));
        const e = a.width != null && a.j != null && (a.Qd || a.j > a.width) ? a.j : null,
            f = a.height != null && a.i != null && (a.Qd || a.i > a.height) ? a.i : null;
        if (a.H) {
            const n =
                a.H.length;
            for (let p = 0; p < n; p++) oR(a.H[p], e, f)
        }
        const h = a.j,
            k = a.i,
            l = a.F,
            m = a.M;
        a.B ? r.setTimeout(c, 1E3) : c()
    }

    function sR(a) {
        if (a.A && !a.ca || a.j == null && a.i == null && a.I == null && a.A) return a.g;
        var b = a.A;
        a.A = !1;
        hR(a);
        a.A = b;
        if (!b || a.check != null && !dR(a.g, a.check, a.j, a.i)) return a.g;
        a.g.g.indexOf("n") >= 0 && (a.width = null, a.height = null);
        if (a.width == null && a.j !== null || a.height == null && a.i !== null) a.B = !1;
        (a.j == 0 || a.i == 0) && a.g.g.indexOf("l") >= 0 && (a.j = 0, a.i = 0);
        b = a.g;
        b.i[0] = "";
        b.i[1] = "";
        b.g = "";
        b.errors = "";
        nR(a);
        return hR(a)
    }

    function lR(a, b) {
        let c = !1;
        b.display == "none" && (cR(a.g, "n"), a.A && (c = !0));
        b.visibility != "hidden" && b.visibility != "collapse" || cR(a.g, "v");
        b.overflow == "hidden" && cR(a.g, "o");
        b.position == "absolute" ? (cR(a.g, "a"), c = !0) : b.position == "fixed" && (cR(a.g, "f"), c = !0);
        return c
    }

    function iR(a, b, c) {
        let d = 0;
        if (!b || !b.parentElement) return !0;
        let e = !1,
            f = 0;
        const h = b.parentElement.childNodes;
        for (let l = 0; l < h.length; l++) {
            var k = h[l];
            k == b ? e = !0 : (k = tR(a, k, c), d |= k, e && (f |= k))
        }
        f & 1 && (d & 2 && bR(a.g, 0, "o"), d & 4 && bR(a.g, 1, "o"));
        return !(d & 1)
    }

    function jR(a, b, c, d) {
        let e = null;
        try {
            e = c.style
        } catch (A) {
            a.g.wa("s")
        }
        var f = c.getAttribute("width"),
            h = Me(f),
            k = c.getAttribute("height"),
            l = Me(k),
            m = d && /^block$/.test(d.display) || e && /^block$/.test(e.display);
        b = iR(a, c, b);
        var n = d && d.width;
        const p = d && d.height;
        var q = e && e.width,
            t = e && e.height,
            w = Ne(n) == a.width && Ne(p) == a.height;
        n = w ? n : q;
        t = w ? p : t;
        q = Ne(n);
        w = Ne(t);
        h = a.width !== null && (q !== null && a.width >= q || h !== null && a.width >= h);
        w = a.height !== null && (w !== null && a.height >= w || l !== null && a.height >= l);
        l = !b && kR(d);
        w = b || w || l || !(f ||
            n || d && (!uR(String(d.minWidth)) || !vR(String(d.maxWidth))));
        m = b || h || l || m || !(k || t || d && (!uR(String(d.minHeight)) || !vR(String(d.maxHeight))));
        wR(a, 0, w, c, "width", f, a.width, a.j);
        xR(a, 0, "d", w, e, d, "width", n, a.width, a.j);
        xR(a, 0, "m", w, e, d, "minWidth", e && e.minWidth, a.width, a.j);
        xR(a, 0, "M", w, e, d, "maxWidth", e && e.maxWidth, a.width, a.j);
        a.ff ? (c = /^html|body$/i.test(c.nodeName), f = Ne(p), k = d ? d.overflowY === "auto" || d.overflowY === "scroll" : !1, k = a.i != null && d && f && Math.round(f) !== a.i && !k && d.minHeight !== "100%", a.A && !c && k && (e.setProperty("height",
            "auto", "important"), d && !uR(String(d.minHeight)) && e.setProperty("min-height", "0px", "important"), d && !vR(String(d.maxHeight)) && a.i && Math.round(f) < a.i && e.setProperty("max-height", "none", "important"))) : (wR(a, 1, m, c, "height", k, a.height, a.i), xR(a, 1, "d", m, e, d, "height", t, a.height, a.i), xR(a, 1, "m", m, e, d, "minHeight", e && e.minHeight, a.height, a.i), xR(a, 1, "M", m, e, d, "maxHeight", e && e.maxHeight, a.height, a.i));
        return b
    }

    function mR(a) {
        function b() {
            if (c > 0) {
                var m = De(e, d) || {
                    width: 0,
                    height: 0
                };
                const n = Ne(m.width);
                m = Ne(m.height);
                n !== null && f !== null && k && k(0, f - n);
                m !== null && h !== null && k && k(1, h - m);
                --c
            } else r.clearInterval(l), k && (k(0, 0), k(1, 0))
        }
        let c = 31.25;
        const d = a.R,
            e = a.C,
            f = a.j,
            h = a.i,
            k = a.G;
        let l;
        r.setTimeout(() => {
            l = r.setInterval(b, 16)
        }, 990)
    }

    function tR(a, b, c) {
        if (b.nodeType == 3) return /\S/.test(b.data) ? 1 : 0;
        if (b.nodeType == 1) {
            if (/^(head|script|style)$/i.test(b.nodeName)) return 0;
            let d = null;
            try {
                d = De(b, c)
            } catch (e) {}
            if (d) {
                if (d.display == "none" || d.position == "fixed") return 0;
                if (d.position == "absolute") {
                    if (!a.l.boundingClientRect || d.visibility == "hidden" || d.visibility == "collapse") return 0;
                    c = null;
                    try {
                        c = b.getBoundingClientRect()
                    } catch (e) {
                        return 0
                    }
                    return (c.right > a.l.boundingClientRect.left ? 2 : 0) | (c.bottom > a.l.boundingClientRect.top ? 4 : 0)
                }
            }
            return 1
        }
        return 0
    }

    function wR(a, b, c, d, e, f, h, k) {
        if (k != null) {
            if (typeof f == "string") {
                if (f == "100%" || !f) return;
                f = Me(f);
                f == null && (a.g.wa("n"), bR(a.g, b, "d"))
            }
            if (f != null)
                if (c) {
                    if (a.A)
                        if (a.B) {
                            const l = Math.max(f + k - (h || 0), 0),
                                m = a.G;
                            a.G = (n, p) => {
                                n == b && vd(d, e, String(l - p));
                                m && m(n, p)
                            }
                        } else vd(d, e, String(k))
                } else bR(a.g, b, "d")
        }
    }

    function xR(a, b, c, d, e, f, h, k, l, m) {
        if (m != null) {
            f = f && f[h];
            typeof f != "string" || (c == "m" ? uR(f) : vR(f)) || (f = Ne(f), f == null ? cR(a.g, "p") : l != null && cR(a.g, f == l ? "E" : "e"));
            if (typeof k == "string") {
                if (c == "m" ? uR(k) : vR(k)) return;
                k = Ne(k);
                k == null && (a.g.wa("p"), bR(a.g, b, c))
            }
            if (k != null)
                if (d && e) {
                    if (a.A)
                        if (a.B) {
                            const n = Math.max(k + m - (l || 0), 0),
                                p = a.G;
                            a.G = (q, t) => {
                                q == b && (e[h] = n - t + "px");
                                p && p(q, t)
                            }
                        } else e[h] = m + "px"
                } else bR(a.g, b, c)
        }
    }
    var CR = class {
        constructor(a, b, c, d, e, f, h) {
            this.pubWin = a;
            this.C = b;
            this.H = c;
            this.l = new yR(this.C);
            this.F = this.G = null;
            this.M = !1;
            this.R = (a = this.C.ownerDocument) && (a.defaultView || a.parentWindow);
            this.l = new yR(this.C);
            this.A = h;
            this.ca = zR(this.l, d.qf, d.height, d.Jc);
            this.width = this.A ? this.l.boundingClientRect ? this.l.boundingClientRect.right - this.l.boundingClientRect.left : null : e;
            this.height = this.A ? this.l.boundingClientRect ? this.l.boundingClientRect.bottom - this.l.boundingClientRect.top : null : f;
            this.j = AR(d.width);
            this.i = AR(d.height);
            this.I = this.A ? AR(d.opacity) : null;
            this.check = d.check;
            this.Jc = !!d.Jc;
            this.B = d.qf == "animate" && !BR(this.l, this.i, this.Jc) && aR();
            this.Pc = !!d.Pc;
            this.g = new gR;
            BR(this.l, this.i, this.Jc) && cR(this.g, "r");
            e = this.l;
            e.g && e.i >= e.W && cR(this.g, "b");
            this.Qd = !!d.Qd;
            this.ff = !!d.ff
        }
    };

    function BR(a, b, c) {
        var d;
        (d = a.g) && !(d = !a.visible) && (c ? (b = a.i + Math.min(b, AR(a.getHeight())), a = a.g && b >= a.W) : a = a.g && a.i >= a.W, d = a);
        return d
    }
    var yR = class {
        constructor(a) {
            this.boundingClientRect = null;
            var b = a && a.ownerDocument,
                c = b && (b.defaultView || b.parentWindow);
            c = c && Ae(c);
            this.g = !!c;
            if (a) try {
                this.boundingClientRect = a.getBoundingClientRect()
            } catch (h) {}
            var d = a;
            let e = 0,
                f = this.boundingClientRect;
            for (; d;) try {
                f && (e += f.top);
                const h = d.ownerDocument,
                    k = h && (h.defaultView || h.parentWindow);
                (d = k && k.frameElement) && (f = d.getBoundingClientRect())
            } catch (h) {
                break
            }
            this.i = e;
            c = c || r;
            this.W = (c.document.compatMode == "CSS1Compat" ? c.document.documentElement : c.document.body).clientHeight;
            b = b && QO(b);
            this.visible = !!a && !(b == 2 || b == 3) && !(this.boundingClientRect && this.boundingClientRect.top >= this.boundingClientRect.bottom && this.boundingClientRect.left >= this.boundingClientRect.right)
        }
        isVisible() {
            return this.visible
        }
        getWidth() {
            return this.boundingClientRect ? this.boundingClientRect.right - this.boundingClientRect.left : null
        }
        getHeight() {
            return this.boundingClientRect ? this.boundingClientRect.bottom - this.boundingClientRect.top : null
        }
    };

    function zR(a, b, c, d) {
        switch (b) {
            case "no_rsz":
                return !1;
            case "force":
            case "animate":
                return !0;
            default:
                return BR(a, c, d)
        }
    }

    function kR(a) {
        return !!a && /^left|right$/.test(a.cssFloat || a.styleFloat)
    }

    function DR(a, b, c, d) {
        return sR(new CR(a, b, d, c, null, null, !0))
    }
    var ER = new gR("s", ""),
        eR = RegExp("[lonvafrbpEe]", "g");

    function vR(a) {
        return !a || /^(auto|none|100%)$/.test(a)
    }

    function uR(a) {
        return !a || /^(0px|auto|none|0%)$/.test(a)
    }

    function oR(a, b, c) {
        b !== null && Me(a.getAttribute("width")) !== null && a.setAttribute("width", String(b));
        c !== null && Me(a.getAttribute("height")) !== null && a.setAttribute("height", String(c));
        b !== null && (a.style.width = b + "px");
        c !== null && (a.style.height = c + "px")
    }
    var pR = "margin-left margin-right padding-left padding-right border-left-width border-right-width".split(" "),
        qR = "margin-top margin-bottom padding-top padding-bottom border-top-width border-bottom-width".split(" ");

    function rR() {
        let a = "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1), height .3s cubic-bezier(.4, 0, 1, 1) .2s",
            b = pR;
        for (var c = 0; c < b.length; c++) a += ", " + b[c] + " .2s cubic-bezier(.4, 0, 1, 1)";
        b = qR;
        for (c = 0; c < b.length; c++) a += ", " + b[c] + " .3s cubic-bezier(.4, 0, 1, 1) .2s";
        return a
    }

    function AR(a) {
        return typeof a === "string" ? Me(a) : typeof a === "number" && isFinite(a) ? a : null
    };
    var FR = class extends QQ {
        constructor(a, b, c) {
            super(a, b);
            this.l = c
        }
        ca(a) {
            a["resize-me"] = (b, c) => {
                b = co(b);
                var d = b.r_chk;
                if (d == null || d === "") {
                    var e = Me(b.r_nw),
                        f = Me(b.r_nh),
                        h = Me(b.r_no);
                    h != null || e !== 0 && f !== 0 || (h = 0);
                    var k = b.r_str;
                    k = k ? k : null; {
                        var l = /^true$/.test(b.r_ao),
                            m = /^true$/.test(b.r_ifr),
                            n = /^true$/.test(b.r_cab);
                        const t = window;
                        if (t)
                            if (k === "no_rsz") b.err = "7", e = !0;
                            else {
                                var p = new yR(this.g);
                                if (p.g) {
                                    var q = p.getWidth();
                                    q != null && (b.w = q);
                                    q = p.getHeight();
                                    q != null && (b.h = q);
                                    zR(p, k, f, n) ? (p = this.l, d = DR(t, p, {
                                        width: e,
                                        height: f,
                                        opacity: h,
                                        check: d,
                                        qf: k,
                                        Pc: l,
                                        Qd: m,
                                        Jc: n
                                    }, [this.g]), b.r_cui && /^true$/.test(b.r_cui.toString()) && v(p, {
                                        height: (f === null ? 0 : f - 48) + "px",
                                        top: "24px"
                                    }), e != null && (b.nw = e), f != null && (b.nh = f), b.rsz = d.toString(), b.abl = fR(d), b.frsz = (k === "force").toString(), b.err = "0", e = !0) : (b.err = "1", e = !1)
                                } else b.err = "3", e = !1
                            }
                        else b.err = "2", e = !1
                    }
                    c.source.postMessage(JSON.stringify({
                        msg_type: "resize-result",
                        r_str: k,
                        r_status: e,
                        googMsgType: "sth"
                    }), "*");
                    this.g.dataset.googleQueryId || this.g.setAttribute("data-google-query-id",
                        b.qid)
                }
            }
        }
    };

    function GR(a, b, c) {
        return new IntersectionObserver(c, b)
    }

    function HR(a, b, c) {
        Hb(a, b, c);
        return () => Ib(a, b, c)
    }
    let IR = null;

    function JR() {
        IR = sk()
    }

    function KR(a, b) {
        return b ? IR === null ? (Hb(a, "mousemove", JR, {
            passive: !0
        }), Hb(a, "scroll", JR, {
            passive: !0
        }), JR(), !1) : sk() - IR >= b * 1E3 : !1
    }

    function LR({
        win: a,
        element: b,
        B: c,
        C: d,
        A: e = 0,
        Ra: f,
        i: h,
        g: k = {},
        l = !0,
        j: m = GR
    }) {
        let n, p = !1,
            q = !1;
        const t = [],
            w = m(a, k, (A, D) => {
                try {
                    const G = () => {
                        t.length || (d && (t.push(HR(b, "mouseenter", () => {
                            p = !0;
                            G()
                        })), t.push(HR(b, "mouseleave", () => {
                            p = !1;
                            G()
                        }))), t.push(HR(a.document, "visibilitychange", () => G())));
                        const I = KR(a, e),
                            B = SO(a.document);
                        if (q && !p && !I && !B) n = n || a.setTimeout(() => {
                            KR(a, e) ? G() : (f(), D.disconnect())
                        }, c * 1E3);
                        else if (l || p || I || B) a.clearTimeout(n), n = void 0
                    };
                    ({
                        isIntersecting: q
                    } = A[A.length - 1]);
                    G()
                } catch (G) {
                    h && h(G)
                }
            });
        w.observe(b);
        return () => {
            w.disconnect();
            for (const A of t) A();
            n != null && a.clearTimeout(n)
        }
    };

    function MR(a, b, c, d, e) {
        return new NR(a, b, c, d, e)
    }

    function OR(a, b, c) {
        const d = a.g,
            e = a.F;
        if (e != null && d != null && $n(c, d.contentWindow) && (b = b.config, typeof b === "string")) {
            try {
                var f = JSON.parse(b);
                if (!Array.isArray(f)) return;
                a.l = new ej(f)
            } catch (h) {
                return
            }
            a.dispose();
            f = li(a.l, 1);
            f <= 0 || (a.B = LR({
                win: a.j,
                element: e,
                B: f - .2,
                C: !se(),
                A: li(a.l, 3),
                Ra: () => void PR(a, e),
                i: h => Gn.ba(1223, h, void 0, void 0),
                g: {
                    threshold: ni(a.l, 2, 1)
                },
                l: !0,
                j: void 0
            }))
        }
    }

    function PR(a, b) {
        a.H();
        setTimeout(Gn.Da(1224, () => {
            a.A.rc = (parseInt(a.A.rc, 10) || 0) + 1;
            var c = je(b);
            c && pu.test(c.className) || (c = he(document, "INS"), c.className = "adsbygoogle", b.parentNode && b.parentNode.insertBefore(c, b.nextSibling));
            U(rs) ? (QR(a, c, b), a.A.no_resize = !0, Ho(yG(c), "filled", () => {
                ie(b)
            })) : ie(b);
            CP(c, a.A, a.j)
        }), 200)
    }

    function QR(a, b, c) {
        a.j.getComputedStyle(b).position == "static" && (b.style.position = "relative");
        c.style.position = "absolute";
        c.style.top = "0";
        c.style.left = "0";
        delete b.dataset.adsbygoogleStatus;
        delete b.dataset.adStatus;
        b.classList.remove("adsbygoogle-noablate")
    }
    var NR = class extends QQ {
        constructor(a, b, c, d, e) {
            super(a, b);
            this.F = d;
            this.A = c;
            this.H = e;
            this.l = this.B = null;
            (b = (b = b.contentWindow) && b.parent) && a != b && this.R.push(QM(b, "sth", this.Fa, this.ib))
        }
        ca(a) {
            a.av_ref = (b, c) => OR(this, b, c)
        }
        i() {
            super.i();
            this.F = null;
            this.B && this.B()
        }
    };
    const RR = ["google_ad_client", "google_ad_format", "google_ad_height", "google_ad_width", "google_page_url"];

    function SR(a) {
        if (U(ss)) {
            var b = je(a.ea);
            b && pu.test(b.className) && Ho(yG(b), "unfilled", () => {
                var c;
                if (c = U(ss))
                    if (c = !IE(DE(), 42, !1)) {
                        a: switch (a.D.google_reactive_ad_format) {
                            case 0:
                            case 27:
                            case 40:
                                c = !0;
                                break a;
                            default:
                                c = !1
                        }
                        if (c = c && a.D.google_ad_width >= V(As) && (a.g ? rO(new wO(a.pubWin), a.g) : !1)) c = (c = a.g ? qj(a.g, a.pubWin) : null) ? (c.getItem("google_survey_fcap") ? Number(c.getItem("google_survey_fcap")) : 0) <= sk() : !1;c && (c = (c = Tn(a.pubWin)) ? b.getBoundingClientRect().top > c : !1)
                    }
                if (c) {
                    c = a.pubWin.document.createElement("ins");
                    var d = b.getAttribute("style");
                    d && c.setAttribute("style", d);
                    a.D.google_ad_height && (c.style.height = `${a.D.google_ad_height}px`);
                    (d = b.getAttribute("class")) && c.setAttribute("class", d);
                    (d = b.getAttribute("id")) && c.setAttribute("id", d);
                    b.replaceWith(c);
                    d = a.D;
                    const f = {};
                    for (var e of RR) d[e] && (f[e] = d[e]);
                    f.sso = !0;
                    CP(c, f, a.pubWin);
                    JE(DE(), 42, !0);
                    if (c = a.g ? qj(a.g, a.pubWin) : null) e = sk() + V(zs) * 36E5, c.setItem("google_survey_fcap", String(e))
                }
            })
        }
    };
    const TR = /^blogger$/,
        UR = /^wordpress(.|\s|$)/i,
        VR = /^joomla!/i,
        WR = /^drupal/i,
        YR = /\/wp-content\//,
        ZR = /\/wp-content\/plugins\/advanced-ads/,
        $R = /\/wp-content\/themes\/genesis/,
        aS = /\/wp-content\/plugins\/genesis/;

    function LU(a) {
        var b = a.getElementsByTagName("script"),
            c = b.length;
        for (var d = 0; d < c; ++d) {
            var e = b[d];
            if (e.hasAttribute("src")) {
                e = e.getAttribute("src") || "";
                if (ZR.test(e)) return 5;
                if (aS.test(e)) return 6
            }
        }
        b = a.getElementsByTagName("link");
        c = b.length;
        for (d = 0; d < c; ++d)
            if (e = b[d], e.hasAttribute("href") && (e = e.getAttribute("href") || "", $R.test(e) || aS.test(e))) return 6;
        a = a.getElementsByTagName("meta");
        d = a.length;
        for (e = 0; e < d; ++e) {
            var f = a[e];
            if (f.getAttribute("name") == "generator" && f.hasAttribute("content")) {
                f = f.getAttribute("content") ||
                    "";
                if (TR.test(f)) return 1;
                if (UR.test(f)) return 2;
                if (VR.test(f)) return 3;
                if (WR.test(f)) return 4
            }
        }
        for (a = 0; a < c; ++a)
            if (d = b[a], d.getAttribute("rel") == "stylesheet" && d.hasAttribute("href") && (d = d.getAttribute("href") || "", YR.test(d))) return 2;
        return 0
    };
    let MU = navigator;

    function NU(a) {
        let b = 1;
        let c;
        if (a !== void 0 && a !== "")
            for (b = 0, c = a.length - 1; c >= 0; c--) {
                var d = a.charCodeAt(c);
                b = (b << 6 & 268435455) + d + (d << 14);
                d = b & 266338304;
                b = d !== 0 ? b ^ d >> 21 : b
            }
        return b
    }

    function OU(a, b) {
        if (!a || a === "none") return 1;
        a = String(a);
        "auto" === a && (a = b, "www." === a.substring(0, 4) && (a = a.substring(4, a.length)));
        return NU(a.toLowerCase())
    }
    const PU = RegExp("^\\s*_ga=\\s*1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        QU = RegExp("^[^=]+=\\s*GA1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        RU = RegExp("^\\s*_ga=\\s*()(amp-[\\w.-]{22,64})$");

    function SU(a) {
        a.g === -1 && (a.g = a.data.reduce((b, c, d) => b + (c ? 2 ** d : 0), 0));
        return a.g
    }
    var TU = class {
        constructor() {
            this.data = [];
            this.g = -1
        }
        set(a, b = !0) {
            0 <= a && a < 52 && Number.isInteger(a) && this.data[a] !== b && (this.data[a] = b, this.g = -1)
        }
        get(a) {
            return !!this.data[a]
        }
    };

    function UU() {
        const a = new TU;
        "SVGElement" in r && "createElementNS" in r.document && a.set(0);
        const b = Re();
        b["allow-top-navigation-by-user-activation"] && a.set(1);
        b["allow-popups-to-escape-sandbox"] && a.set(2);
        r.crypto && r.crypto.subtle && a.set(3);
        "TextDecoder" in r && "TextEncoder" in r && a.set(4);
        return SU(a)
    };
    const VU = new Map([
            ["navigate", 1],
            ["reload", 2],
            ["back_forward", 3],
            ["prerender", 4]
        ]),
        WU = new Map([
            [0, 1],
            [1, 2],
            [2, 3]
        ]);

    function XU(a) {
        try {
            const b = a.performance ? .getEntriesByType("navigation") ? .[0];
            if (b ? .type) return VU.get(b.type) ? ? null
        } catch {}
        return WU.get(a.performance ? .navigation ? .type) ? ? null
    };
    var YU = class extends O {
        constructor() {
            super()
        }
    };

    function ZU(a, b) {
        if (Ud()) {
            var c = a.document.documentElement.lang;
            $U(a) ? aV(b, ff(a), !0, "", c) : (new MutationObserver((d, e) => {
                $U(a) && (aV(b, ff(a), !1, c, a.document.documentElement.lang), e.disconnect())
            })).observe(a.document.documentElement, {
                attributeFilter: ["class"]
            })
        }
    }

    function $U(a) {
        a = a.document ? .documentElement ? .classList;
        return !(!a ? .contains("translated-rtl") && !a ? .contains("translated-ltr"))
    }

    function aV(a, b, c, d, e) {
        ij({
            ptt: `${a}`,
            pvsid: `${b}`,
            ibatl: String(c),
            pl: d,
            nl: e
        }, "translate-event")
    };

    function bV(a) {
        if (a = a.navigator ? .userActivation) {
            var b = 0;
            a ? .hasBeenActive && (b |= 1);
            a ? .isActive && (b |= 2);
            return b
        }
    };
    const cV = /[+, ]/;

    function dV(a, b) {
        const c = a.D;
        var d = a.pubWin,
            e = {},
            f = d.document,
            h = jf(d),
            k = !1,
            l = "",
            m = 1;
        a: {
            m = c.google_ad_width || d.google_ad_width;
            var n = c.google_ad_height || d.google_ad_height;
            if (d && d.top === d) k = !1;
            else {
                k = d.document;
                l = k.documentElement;
                if (m && n) {
                    var p = 1;
                    let t = 1;
                    d.innerHeight ? (p = d.innerWidth, t = d.innerHeight) : l && l.clientHeight ? (p = l.clientWidth, t = l.clientHeight) : k.body && (p = k.body.clientWidth, t = k.body.clientHeight);
                    if (t > 2 * n || p > 2 * m) {
                        k = !1;
                        break a
                    }
                }
                k = !0
            }
        }
        l = k;
        m = AE(h).Te;
        n = d.top == d ? 0 : xe(d.top) ? 1 : 2;
        p = 4;
        l || n !== 1 ? l ||
            n !== 2 ? l && n === 1 ? p = 7 : l && n === 2 && (p = 8) : p = 6 : p = 5;
        m && (p |= 16);
        l = String(p);
        m = CE(d);
        n = !!c.google_page_url;
        e.google_iframing = l;
        m !== 0 && (e.google_iframing_environment = m);
        if (!n && f.domain === "ad.yieldmanager.com") {
            for (l = f.URL.substring(f.URL.lastIndexOf("http")); l.indexOf("%") > -1;) try {
                l = decodeURIComponent(l)
            } catch (t) {
                break
            }
            c.google_page_url = l;
            n = !!l
        }
        n ? (e.google_page_url = c.google_page_url, e.google_page_location = (k ? f.referrer : f.URL) || "EMPTY") : (k && xe(d.top) && f.referrer && d.top.document.referrer === f.referrer ? e.google_page_url =
            d.top.document.URL : e.google_page_url = k ? f.referrer : f.URL, e.google_page_location = null);
        if (f.URL === e.google_page_url) try {
            var q = Math.round(Date.parse(f.lastModified) / 1E3) || null
        } catch {
            q = null
        } else q = null;
        e.google_last_modified_time = q;
        d = h === h.top ? h.document.referrer : (d = Jj()) && d.referrer || "";
        e.google_referrer_url = d;
        BE(e, c);
        U(zt) && !b.g() ? e = "pagead2.googlesyndication.com" : (e = c.google_page_location || c.google_page_url, "EMPTY" === e && (e = c.google_page_url), e ? (e = e.toString(), e.indexOf("http://") == 0 ? e = e.substring(7,
            e.length) : e.indexOf("https://") == 0 && (e = e.substring(8, e.length)), d = e.indexOf("/"), d === -1 && (d = e.length), e = e.substring(0, d).split("."), d = !1, e.length >= 3 && (d = e[e.length - 3] in lO), e.length >= 2 && (d = d || e[e.length - 2] in lO), e = d) : e = !1, e = e ? "pagead2.googlesyndication.com" : "googleads.g.doubleclick.net");
        b = eV(a, b);
        d = a.D;
        f = d.google_ad_channel;
        h = "/pagead/ads?";
        d.google_ad_client === "ca-pub-6219811747049371" && fV.test(f) && (h = "/pagead/lopri?");
        e = `https://${e}${h}`;
        a = K(a.ma, 9) && c.google_debug_params ? c.google_debug_params :
            "";
        a = dk(b, e + a);
        return c.google_ad_url = a
    }

    function gV(a) {
        try {
            if (a.parentNode) return a.parentNode
        } catch {
            return null
        }
        if (a.nodeType === 9) a: {
            try {
                const c = a ? ge(a) : window;
                if (c) {
                    const d = c.frameElement;
                    if (d && xe(c.parent)) {
                        var b = d;
                        break a
                    }
                }
            } catch {}
            b = null
        }
        else b = null;
        return b
    }

    function hV(a, b) {
        var c = sQ(a.pubWin);
        a.D.saaei && (c += (c === "" ? "" : ",") + a.D.saaei);
        a.D.google_ad_intent_eids && (c += `${c===""?"":","}${a.D.google_ad_intent_eids}`);
        b.eid = c;
        c = a.D.google_loeid;
        typeof c === "string" && (a.i |= 4096, b.loeid = c)
    }

    function iV(a, b) {
        a = (a = Ae(a.pubWin)) && a.document ? oO(a.document, a) : new rd(-12245933, -12245933);
        b.scr_x = Math.round(a.x);
        b.scr_y = Math.round(a.y)
    }

    function jV(a) {
        try {
            const b = r.top.location.hash;
            if (b) {
                const c = b.match(a);
                return c && c[1] || ""
            }
        } catch {}
        return ""
    }

    function kV(a, b, c) {
        const d = a.D;
        var e = a.pubWin,
            f = a.K,
            h = jf(window);
        d.fsapi && (b.fsapi = !0);
        b.ref = d.google_referrer_url;
        b.loc = d.google_page_location;
        var k;
        (k = Jj(e)) && Da(k.data) && typeof k.data.type === "string" ? (k = k.data.type.toLowerCase(), k = k == "doubleclick" || k == "adsense" ? null : k) : k = null;
        k && (b.apn = k.substr(0, 10));
        h = AE(h);
        b.url || b.loc || !h.url || (b.url = h.url, h.Te || (b.usrc = 1));
        h.url != (b.loc || b.url) && (b.top = h.url);
        a.qc && (b.etu = a.qc);
        c = f ? qj(c, f) : null;
        (c = wP(d, f, c)) && (b.fc = c);
        if (!kk(d)) {
            c = a.pubWin.document;
            h = "";
            if (c.documentMode &&
                (k = qe(new ce(c), "IFRAME"), k.frameBorder = "0", k.style.height = 0, k.style.width = 0, k.style.position = "absolute", c.body)) {
                c.body.appendChild(k);
                try {
                    const ra = k.contentWindow.document;
                    ra.open();
                    var l = Pc("<!DOCTYPE html>");
                    ra.write(Nc(l));
                    ra.close();
                    h += ra.documentMode
                } catch (ra) {}
                c.body.removeChild(k)
            }
            b.docm = h
        }
        let m, n, p, q, t, w, A, D, G, I;
        try {
            m = e.screenX, n = e.screenY
        } catch (ra) {}
        try {
            p = e.outerWidth, q = e.outerHeight
        } catch (ra) {}
        try {
            t = e.innerWidth, w = e.innerHeight
        } catch (ra) {}
        try {
            A = e.screenLeft, D = e.screenTop
        } catch (ra) {}
        try {
            t =
                e.innerWidth, w = e.innerHeight
        } catch (ra) {}
        try {
            G = e.screen.availWidth, I = e.screen.availTop
        } catch (ra) {}
        b.brdim = [A, D, m, n, G, I, p, q, t, w].join();
        l = 0;
        r.postMessage === void 0 && (l |= 1);
        l > 0 && (b.osd = l);
        b.vis = QO(e.document);
        l = a.ea;
        e = qP(d) ? ER : sR(new CR(e, l, null, {
            width: 0,
            height: 0
        }, d.google_ad_width, d.google_ad_height, !1));
        b.rsz = e.toString();
        b.abl = fR(e);
        if (!qP(d) && (e = lk(d), e != null)) {
            l = 0;
            a: {
                try {
                    {
                        var B = d.google_async_iframe_id;
                        const ra = window.document;
                        if (B) var J = ra.getElementById(B);
                        else {
                            var H = ra.getElementsByTagName("script"),
                                ba = H[H.length - 1];
                            J = ba && ba.parentNode || null
                        }
                    }
                    if (B = J) {
                        J = [];
                        H = 0;
                        for (var db = Date.now(); ++H <= 100 && Date.now() - db < 50 && (B = gV(B));) B.nodeType === 1 && J.push(B);
                        var ya = J;
                        b: {
                            for (db = 0; db < ya.length; db++) {
                                c: {
                                    var ha = ya[db];
                                    try {
                                        if (ha.parentNode && ha.offsetWidth > 0 && ha.offsetHeight > 0 && ha.style && ha.style.display !== "none" && ha.style.visibility !== "hidden" && (!ha.style.opacity || Number(ha.style.opacity) !== 0)) {
                                            const ra = ha.getBoundingClientRect();
                                            var ma = ra.right > 0 && ra.bottom > 0;
                                            break c
                                        }
                                    } catch (ra) {}
                                    ma = !1
                                }
                                if (!ma) {
                                    var hb = !1;
                                    break b
                                }
                            }
                            hb = !0
                        }
                        if (hb) {
                            b: {
                                const ra = Date.now();hb = /^html|body$/i;ma = /^fixed/i;
                                for (ha = 0; ha < ya.length && Date.now() - ra < 50; ha++) {
                                    const Od = ya[ha];
                                    if (!hb.test(Od.tagName) && ma.test(Od.style.position || Wj(Od, "position"))) {
                                        var ib = Od;
                                        break b
                                    }
                                }
                                ib = null
                            }
                            break a
                        }
                    }
                } catch {}
                ib = null
            }
            ib && ib.offsetWidth * ib.offsetHeight <= 4 * e.width * e.height && (l = 1);
            b.pfx = l
        }
        a: {
            if (Math.random() < .05 && f) try {
                const ra = f.document.getElementsByTagName("head")[0];
                var fg = ra ? LU(ra) : 0;
                break a
            } catch (ra) {}
            fg = 0
        }
        f = fg;
        f !== 0 && (b.cms = f);
        d.google_lrv !== a.Wa && (b.alvm = d.google_lrv ||
            "none")
    }

    function lV(a, b) {
        let c = 0;
        a.location && a.location.ancestorOrigins ? c = a.location.ancestorOrigins.length : ye(() => {
            c++;
            return !1
        }, a);
        c && (b.nhd = c)
    }

    function mV(a, b) {
        const c = IE(b, 8, {});
        b = IE(b, 9, {});
        const d = a.google_ad_section,
            e = a.google_ad_format;
        a = a.google_ad_slot;
        e ? c[d] = c[d] ? c[d] + `,${e}` : e : a && (b[d] = b[d] ? b[d] + `,${a}` : a)
    }

    function nV(a, b, c) {
        const d = a.D;
        var e = a.D;
        b.dt = In;
        e.google_async_iframe_id && e.google_bpp && (b.bpp = e.google_bpp);
        a: {
            try {
                var f = r.performance;
                if (f && f.timing && f.now) {
                    var h = f.timing.navigationStart + Math.round(f.now()) - f.timing.domLoading;
                    break a
                }
            } catch (G) {}
            h = null
        }(e = (e = h) ? xQ(e, r.Date.now() - In, 1E6) : null) && (b.bdt = e);
        b.idt = xQ(a.H, In);
        e = a.D;
        b.shv = L(a.ma, 2);
        a.Wa && (b.mjsv = a.Wa);
        e.google_loader_used == "sd" ? b.ptt = 5 : e.google_loader_used == "aa" && (b.ptt = 9);
        /^\w{1,3}$/.test(e.google_loader_used) && (b.saldr = e.google_loader_used);
        if (e = Jj(a.pubWin)) b.is_amp = 1, b.amp_v = Kj(e), (e = Lj(e)) && (b.act = e);
        e = a.pubWin;
        e == e.top && (b.abxe = 1);
        e = new wO(a.pubWin);
        (h = sO(e, "__gads", c)) ? b.cookie = h: rO(e, c) && (b.cookie_enabled = "1");
        (h = sO(e, "__gpi", c)) && !h.includes("&") && (b.gpic = h);
        sO(e, "__gpi_opt_out", c) === "1" && (b.pdopt = "1");
        e = new NQ(a.pubWin);
        h = {
            Pg: !1,
            Qg: !a.F
        };
        (f = MQ(e, c, h)) ? b.eo_id_str = f: LQ(e, c, h) && (b.eoidce = "1");
        e = DE();
        f = IE(e, 8, {});
        h = d.google_ad_section;
        f[h] && (b.prev_fmts = f[h]);
        f = IE(e, 9, {});
        f[h] && (b.prev_slotnames = f[h].toLowerCase());
        mV(d, e);
        h = IE(e,
            15, 0);
        h > 0 && (b.nras = String(h));
        (f = Jj(window)) ? (f ? (h = f.pageViewId, f = f.clientId, typeof f === "string" && (h += f.replace(/\D/g, "").substr(0, 6))) : h = null, h = +h) : (h = jf(window), f = h.google_global_correlator, f || (h.google_global_correlator = f = 1 + Math.floor(Math.random() * Math.pow(2, 43))), h = f);
        b.correlator = IE(e, 7, h);
        U(St) && (b.rume = 1);
        if (d.google_ad_channel) {
            h = IE(e, 10, {});
            f = "";
            var k = d.google_ad_channel.split(cV);
            for (var l = 0; l < k.length; l++) {
                var m = k[l];
                h[m] ? f += m + "+" : h[m] = !0
            }
            b.pv_ch = f
        }
        if (d.google_ad_host_channel) {
            h = d.google_ad_host_channel;
            f = IE(e, 11, []);
            k = h.split("|");
            e = -1;
            h = [];
            for (l = 0; l < k.length; l++) {
                m = k[l].split(cV);
                f[l] || (f[l] = {});
                var n = "";
                for (var p = 0; p < m.length; p++) {
                    const G = m[p];
                    G !== "" && (f[l][G] ? n += "+" + G : f[l][G] = !0)
                }
                n = n.slice(1);
                h[l] = n;
                n !== "" && (e = l)
            }
            f = "";
            if (e > -1) {
                for (k = 0; k < e; k++) f += h[k] + "|";
                f += h[e]
            }
            b.pv_h_ch = f
        }
        b.frm = d.google_iframing;
        b.ife = d.google_iframing_environment;
        a: {
            e = d.google_ad_client;
            try {
                var q = jf(window),
                    t = q.google_prev_clients;
                t || (t = q.google_prev_clients = {});
                if (e in t) {
                    var w = 1;
                    break a
                }
                t[e] = !0;
                w = 2;
                break a
            } catch {
                w = 0;
                break a
            }
            w =
            void 0
        }
        b.pv = w;
        a.K && U(vs) && (w = a.K, w = Ud() && $U(w) ? w.document.documentElement.lang : void 0, w && (b.tl = w));
        U(ws) && a.pubWin.location.host.endsWith("h5games.usercontent.goog") && (b.cdm = a.pubWin.location.host);
        if (!U(Kt)) {
            q = a.pubWin.document;
            w = a.D;
            t = a.pubWin;
            t = c.g() ? t.origin !== "null" ? t.document.cookie : null : null;
            c = q.domain;
            e = t || "";
            k = a.pubWin.screen;
            l = q.referrer;
            m = fk();
            if (Jj()) var A = window.gaGlobal || {};
            else {
                h = Math.round((new Date).getTime() / 1E3);
                f = w.google_analytics_domain_name;
                c = typeof f === "undefined" ? OU("auto",
                    c) : OU(f, c);
                p = e.indexOf(`__utma=${c}.`) > -1;
                n = e.indexOf(`__utmb=${c}`) > -1;
                (q = (Oj() || window).gaGlobal) || (q = {}, (Oj() || window).gaGlobal = q);
                t = !1;
                if (p) {
                    var D = e.split(`__utma=${c}.`)[1].split(";")[0].split(".");
                    n ? q.sid = String(D[3]) : q.sid || (q.sid = String(h));
                    q.vid = `${D[0]}.${D[1]}`;
                    q.from_cookie = !0
                } else {
                    q.sid || (q.sid = String(h));
                    if (!q.vid) {
                        t = !0;
                        n = Math.round(Math.random() * 2147483647);
                        try {
                            D = MU.javaEnabled()
                        } catch (G) {
                            D = !1
                        }
                        D = [MU.appName, MU.version, MU.language ? MU.language : MU.browserLanguage, MU.platform, MU.userAgent,
                            D ? 1 : 0
                        ].join("");
                        k ? D += `${k.width}x${k.height}${k.colorDepth}` : r.g && r.g.Lh && (k = r.g.Lh.Yn.qo().ro(), D += `${k.screen.width}x${k.screen.height}`);
                        D = D + e + (l || "");
                        for (k = D.length; m > 0;) D += m-- ^ k++;
                        q.vid = `${n^NU(D)&2147483647}.${h}`
                    }
                    q.from_cookie || (q.from_cookie = !1)
                }
                if (!q.cid) {
                    b: for (h = f, D = 999, h && (h = h.indexOf(".") === 0 ? h.substr(1) : h, D = h.split(".").length), h = 999, e = e.split(";"), f = 0; f < e.length; f++)
                        if (k = PU.exec(e[f]) || QU.exec(e[f]) || RU.exec(e[f])) {
                            l = parseInt(k[1], 10) || 0;
                            if (l === D) {
                                A = k[2];
                                break b
                            }
                            l < h && (h = l, A = k[2])
                        }t &&
                    A && A.search(/^\d+\.\d+$/) !== -1 ? (q.vid = A, q.from_cookie = !0) : A !== q.vid && (q.cid = A)
                }
                q.dh = c;
                q.hid || (q.hid = Math.round(Math.random() * 2147483647));
                A = q
            }
            b.ga_vid = A.vid;
            b.ga_sid = A.sid;
            b.ga_hid = A.hid;
            b.ga_fc = A.from_cookie;
            b.ga_cid = A.cid;
            b.ga_wpids = w.google_analytics_uacct
        }
        lV(a.pubWin, b);
        (a = d.google_ad_layout) && NP[a] >= 0 && (b.rplot = NP[a])
    }

    function oV(a, b) {
        var c = a.g;
        a = a.ma;
        OE() && (b.npa = 1);
        K(a, 6) && !c ? .C() && (b.ltd_cs = 1);
        c && (c.C() && (b.gdpr = c.A() ? "1" : "0"), (a = F(c, 1)) && (b.us_privacy = a), (a = F(c, 2)) && (b.gdpr_consent = a), (a = F(c, 4)) && (b.addtl_consent = a), (a = ki(c, 7)) && (b.tcfe = a), (a = L(c, 11)) && (b.gpp = a), (c = Lh(c, 10, Ng, y(), 0)) && c.length > 0 && (b.gpp_sid = c.join(",")))
    }

    function pV(a, b) {
        const c = a.D;
        oV(a, b);
        Fe(UE, (d, e) => {
            b[d] = c[e]
        });
        qP(c) && (a = DP(c), b.fa = a);
        b.pi || c.google_ad_slot == null || (a = Gv(c), a.g != null && (a = Vp(a.getValue()), b.pi = a))
    }

    function qV(a, b) {
        var c = Nj() || mO(a.pubWin.top);
        c && (b.biw = c.width, b.bih = c.height);
        c = a.pubWin;
        c !== c.top && (a = mO(a.pubWin)) && (b.isw = a.width, b.ish = a.height)
    }

    function rV(a, b) {
        var c = a.pubWin;
        c !== null && c != c.top ? (a = [c.document.URL], c.name && a.push(c.name), c = mO(c, !1), a.push(c.width.toString()), a.push(c.height.toString()), a = He(a.join(""))) : a = 0;
        a !== 0 && (b.ifk = a)
    }

    function sV(a, b) {
        (a = LE()[a.D.google_ad_client]) && (b.psts = a.join())
    }

    function tV(a, b) {
        (a = a.pubWin.tmod) && (b.tmod = a)
    }

    function uV(a, b) {
        (a = a.pubWin.google_user_agent_client_hint) && (b.uach = rf(a))
    }

    function vV(a, b) {
        try {
            const e = a.pubWin && a.pubWin.external && a.pubWin.external.getHostEnvironmentValue && a.pubWin.external.getHostEnvironmentValue.bind(a.pubWin.external);
            if (e) {
                var c = JSON.parse(e("os-mode")),
                    d = parseInt(c["os-mode"], 10);
                d >= 0 && (b.wsm = d + 1)
            }
        } catch {}
    }

    function wV(a, b) {
        a.D.google_ad_public_floor >= 0 && (b.pubf = a.D.google_ad_public_floor);
        a.D.google_ad_private_floor >= 0 && (b.pvtf = a.D.google_ad_private_floor)
    }

    function xV(a, b) {
        const c = Number(a.D.google_traffic_source);
        c && Object.values(Pa).includes(c) && (b.trt = a.D.google_traffic_source)
    }

    function yV(a, b) {
        var c;
        if (c = !U(Yt)) c = a.C ? .label, c = !(U(yt) && c && c.match($t(wt)));
        c && ("runAdAuction" in a.pubWin.navigator && "joinAdInterestGroup" in a.pubWin.navigator && (b.td = 1), c = a.pubWin.navigator, a.pubWin.isSecureContext && "runAdAuction" in c && c.runAdAuction instanceof Function && iQ("run-ad-auction", a.pubWin.document) && (c = new TU, c.set(1, jQ(a.pubWin.navigator)), b.tdf = SU(c)))
    }

    function zV(a, b) {
        if (a.C != null && Ud()) {
            var c = new YU,
                d = Fi(c, 3, a.C.label);
            N(d, 4, a.C.status);
            b.psd = rf(Hi(c))
        }
    }

    function AV(a, b) {
        U(Pt) || iQ("attribution-reporting", a.pubWin.document) && (b.nt = 1)
    }

    function BV(a, b) {
        if (typeof a.D.google_privacy_treatments === "string") {
            var c = new Map([
                ["disablePersonalization", 1]
            ]);
            a = a.D.google_privacy_treatments.split(",");
            var d = [];
            for (const [e, f] of c.entries()) c = f, a.includes(e) && d.push(c);
            d.length && (b.ppt = d.join("~"))
        }
    }

    function CV(a, b) {
        if (a.A) {
            a.A.Yi && (b.xatf = 1);
            try {
                a.A.Le ? .disconnect(), a.A.Le = void 0
            } catch {}
        }
    }

    function eV(a, b) {
        const c = {};
        pV(a, c);
        uV(a, c);
        nV(a, c, b);
        c.u_tz = -(new Date).getTimezoneOffset();
        c.u_his = fk();
        c.u_h = kj.screen ? .height;
        c.u_w = kj.screen ? .width;
        c.u_ah = kj.screen ? .availHeight;
        c.u_aw = kj.screen ? .availWidth;
        c.u_cd = kj.screen ? .colorDepth;
        c.u_sd = nO(a.pubWin);
        c.dmc = a.pubWin.navigator ? .deviceMemory;
        mw(889, () => {
            if (a.K == null) c.adx = -12245933, c.ady = -12245933;
            else {
                var e = qO(a.K, a.ea);
                c.adx && c.adx != -12245933 && c.ady && c.ady != -12245933 || (c.adx = Math.round(e.x), c.ady = Math.round(e.y));
                pO(a.ea) || (c.adx = -12245933,
                    c.ady = -12245933, a.i |= 32768)
            }
        });
        qV(a, c);
        rV(a, c);
        iV(a, c);
        hV(a, c);
        c.oid = 2;
        sV(a, c);
        c.pvsid = ff(a.pubWin, W);
        tV(a, c);
        vV(a, c);
        c.uas = bV(a.pubWin);
        const d = XU(a.pubWin);
        d && (c.nvt = d);
        a.B && (c.scar = a.B);
        a.l instanceof Uint8Array ? c.topics = pf(a.l) : a.l && (c.topics = a.l, c.tps = a.l);
        CV(a, c);
        kV(a, c, b);
        c.fu = a.i;
        c.bc = UU();
        K(a.ma, 9) && (tQ(c), c.creatives = jV(/\b(?:creatives)=([\d,]+)/), c.adgroups = jV(/\b(?:adgroups)=([\d,]+)/), c.adgroups || c.sso) && (c.adtest = "on", c.disable_budget_throttling = !0, c.use_budget_filtering = !1, c.retrieve_only = !0, c.disable_fcap = !0);
        zj() && (c.atl = !0);
        c.bz = kf(a.pubWin);
        wV(a, c);
        xV(a, c);
        yV(a, c);
        zV(a, c);
        AV(a, c);
        BV(a, c);
        U(Bt) && String(a.D.google_special_category_data) === "true" && (c.scd = 1);
        return c
    }
    const fV = /YtLoPri/;
    var DV = class extends O {};
    DV.O = [3];

    function EV(a) {
        return di(a, DV, 15, y())
    }
    var bi = class extends O {},
        FV = Oi(bi);
    bi.O = [15, 24];

    function GV() {
        var a = new HV;
        var b = new Lq;
        b = Fh(b, 2, xg(4));
        b = Fh(b, 8, xg(1));
        var c = new Rp;
        c = Ei(c, 7, "#dpId");
        b = C(b, 1, c);
        return gi(a, 3, Lq, b)
    }
    var HV = class extends O {},
        IV = Oi(HV);
    HV.O = [3];
    var JV = Symbol(),
        KV = Symbol();
    var LV = class {
        constructor(a) {
            this.Ob = a.Ob ? ? [];
            this.Lg = a.Lg ? ? .1;
            this.Ce = !!a.Ce;
            this.Ee = !!a.Ee;
            this.Zb = a.Zb ? ? 0;
            this.fe = a.fe ? ? "";
            this.Qa = a.Qa ? ? "";
            this.ge = a.ge ? ? 15E3;
            this.he = a.he ? ? 0;
            this.De = a.De ? ? !0;
            this.re = a.re || "#0B57D0";
            this.Wc = a.Wc || "#FFFFFF";
            this.Fd = a.Fd ? ? 0;
            this.Vb = !!a.Vb;
            this.Ie = a.Ie ? ? [];
            this.Pe = !!a.Pe;
            this.Ed = a.Ed ? ? 0;
            this.Ge = !!a.Ge
        }
    };

    function MV(a, b) {
        a = Nv(bv([...b], a), a);
        if (a.length !== 0) return a.reduce((c, d) => c.la.g > d.la.g ? c : d)
    };

    function NV(a, b, c, d, e, f, h, k) {
        var l = new ym,
            m = new jm;
        c = Fi(m, 1, c);
        d = Fi(c, 2, d);
        b = M(d, 3, b);
        l = C(l, 1, b);
        b = new km;
        b = Fi(b, 2, a.language);
        e = Fi(b, 3, e);
        e = C(l, 2, e);
        h = Di(e, 3, Math.round(h));
        c = EV(f);
        e = l = b = d = 0;
        for (n of c) d += OV(L(n, 6) !== "") + OV(L(n, 7) !== ""), b += OV(L(n, 6) !== "") + OV(L(n, 7) !== ""), l += OV(L(n, 6) !== ""), e += OV(L(n, 7) !== "");
        var n = new xm;
        n = ui(n, 1, c.length);
        n = ui(n, 2, d);
        n = Fh(n, 3, b == null ? b : Bg(b));
        n = Fh(n, 4, l == null ? l : Bg(l));
        n = Fh(n, 5, e == null ? e : Bg(e));
        n = C(h, 6, n);
        if (k.length) f = new pm, f = ei(f, 1, k), E(n, 5, zm, f);
        else {
            a.g = a.entries.length;
            k = new wm;
            a = a.entries;
            h = k.U;
            e = h[x];
            dg(e);
            h = ci(h, e, vm, 2, 2, !1, !0);
            l = e = 0;
            if (Array.isArray(a))
                for (var p = 0; p < a.length; p++) b = a[p], h.push(b), (b = Rf(b.U)) && !e++ && (h[x] &= -9), b || l++ || (h[x] &= -17);
            else
                for (p of a) a = p, h.push(a), (a = Rf(a.U)) && !e++ && (h[x] &= -9), a || l++ || (h[x] &= -17);
            f = EV(f).length;
            f = Di(k, 3, f);
            E(n, 4, zm, f)
        }
        return n
    }

    function PV(a, b) {
        const c = a.g;
        a.g = a.entries.length;
        var d = new Qm,
            e = new wm;
        a = ei(e, 2, a.entries.slice(c));
        b = EV(b).length;
        b = Di(a, 3, b);
        return C(d, 1, b)
    }
    var QV = class {
        constructor() {
            this.entries = [];
            this.language = null;
            this.g = 0
        }
    };

    function OV(a) {
        return a ? 1 : 0
    };
    async function RV(a, b) {
        await new Promise(c => void a.win.setTimeout(c, 0));
        a.i = a.g.qa(b) + a.j
    }
    var SV = class {
        constructor(a, b) {
            var c = V(lt);
            this.win = a;
            this.g = b;
            this.j = c;
            this.i = b.qa(2) + c
        }
    };
    var TV = class {
            constructor(a) {
                this.performance = a
            }
            qa() {
                return this.performance.now()
            }
        },
        UV = class {
            qa() {
                return Date.now()
            }
        };
    const VV = [255, 255, 255];

    function WV(a) {
        function b(d) {
            return [Number(d[1]), Number(d[2]), Number(d[3]), d.length > 4 ? Number(d[4]) : 1]
        }
        var c = a.match(/rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)/);
        if (c || (c = a.match(/rgba\(([0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([0-9\\.]+)\)/))) return b(c);
        if (a === "transparent" || a === "") return [0, 0, 0, 0];
        throw Error(`Invalid color: ${a}`);
    }

    function XV(a) {
        var b = getComputedStyle(a);
        if (b.backgroundImage !== "none") return null;
        b = WV(b.backgroundColor);
        var c = YV(b);
        if (c) return c;
        a = (a = a.parentElement) ? XV(a) : VV;
        if (!a) return null;
        c = b[3];
        return [Math.round(c * b[0] + (1 - c) * a[0]), Math.round(c * b[1] + (1 - c) * a[1]), Math.round(c * b[2] + (1 - c) * a[2])]
    }

    function YV(a) {
        return a[3] === 1 ? [a[0], a[1], a[2]] : null
    };

    function ZV(a) {
        return a.Dd > 0 && a.i.j >= a.Dd
    }
    var aW = class {
        constructor(a, b, c, d) {
            this.hf = b;
            this.je = c;
            this.Dd = d;
            this.g = 0;
            this.i = new $V(a)
        }
    };

    function bW(a, b) {
        b -= a.l;
        for (const c of a.g.keys()) {
            const d = a.g.get(c);
            let e = 0;
            for (; e < d.length && d[e] < b;) e++;
            a.i -= e;
            e > 0 && a.g.set(c, d.slice(e))
        }
    }

    function cW(a, b, c) {
        let d = [];
        a.g.has(b) && (d = a.g.get(b));
        d.push(c);
        a.i++;
        a.g.set(b, d)
    }
    class $V {
        constructor(a) {
            this.l = a;
            this.g = new Map;
            this.i = 0
        }
        get j() {
            return this.i
        }
    };

    function dW(a) {
        v(a, {
            border: "0",
            "box-shadow": "none",
            display: "inline",
            "float": "none",
            margin: "0",
            outline: "0",
            padding: "0"
        })
    };

    function eW(a, b) {
        a = fW(a, "100 -1000 840 840", `calc(${b} - 2px)`, b, "m784-120-252-252q-30 24-69 38t-83 14q-109 0-184.5-75.5t-75.5-184.5q0-109 75.5-184.5t184.5-75.5q109 0 184.5 75.5t75.5 184.5q0 44-14 83t-38 69l252 252-56 56zm-404-280q75 0 127.5-52.5t52.5-127.5q0-75-52.5-127.5t-127.5-52.5q-75 0-127.5 52.5t-52.5 127.5q0 75 52.5 127.5t127.5 52.5z");
        v(a, {
            color: "inherit",
            cursor: "inherit",
            fill: "currentcolor"
        });
        return a
    }

    function gW(a, b, c, d) {
        a = fW(a, "0 -960 960 960", b, b, hW[d]);
        v(a, {
            fill: c || "white",
            cursor: "inherit"
        });
        a.classList.add("google-anno-sa-intent-icon");
        return a
    }

    function iW(a, b, c) {
        a = fW(a, "0 -960 960 960", "20px", "20px", "m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z");
        v(a, {
            left: "13px",
            right: "",
            "pointer-events": "initial",
            position: "absolute",
            top: "15px",
            transform: "none",
            fill: c ? "#1A73E8" : "white"
        });
        a.role = "button";
        a.ariaLabel = b;
        a.tabIndex = 0;
        return a
    }
    const hW = {
        [0]: "M503-104q-24 24-57 24t-57-24L103-390q-23-23-23-56.5t23-56.5l352-353q11-11 26-17.5t32-6.5h286q33 0 56.5 23.5T879-800v286q0 17-6.5 32T855-456L503-104Zm196-536q25 0 42.5-17.5T759-700q0-25-17.5-42.5T699-760q-25 0-42.5 17.5T639-700q0 25 17.5 42.5T699-640ZM446-160l353-354v-286H513L160-446l286 286Zm353-640Z",
        [1]: "m274-274-128-70 42-42 100 14 156-156-312-170 56-56 382 98 157-155q17-17 42.5-17t42.5 17q17 17 17 42.5T812-726L656-570l98 382-56 56-170-312-156 156 14 100-42 42-70-128Z",
        [2]: "M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z",
        [3]: "M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm200-500 54-18 16-54q-32-48-77-82.5T574-786l-54 38v56l160 112Zm-400 0 160-112v-56l-54-38q-54 17-99 51.5T210-652l16 54 54 18Zm-42 308 46-4 30-54-58-174-56-20-40 30q0 65 18 118.5T238-272Zm242 112q26 0 51-4t49-12l28-60-26-44H378l-26 44 28 60q24 8 49 12t51 4Zm-90-200h180l56-160-146-102-144 102 54 160Zm332 88q42-50 60-103.5T800-494l-40-28-56 18-58 174 30 54 46 4Z",
        [4]: "M120-680v-160l160 80-160 80Zm600 0v-160l160 80-160 80Zm-280-40v-160l160 80-160 80Zm0 640q-76-2-141.5-12.5t-114-26.5Q136-135 108-156t-28-44v-360q0-25 31.5-46.5t85.5-38q54-16.5 127-26t156-9.5q83 0 156 9.5t127 26q54 16.5 85.5 38T880-560v360q0 23-28 44t-76.5 37q-48.5 16-114 26.5T520-80v-160h-80v160Zm40-440q97 0 167.5-11.5T760-558q0-5-76-23.5T480-600q-128 0-204 18.5T200-558q42 15 112.5 26.5T480-520ZM360-166v-154h240v154q80-8 131-23.5t69-27.5v-271q-55 22-138 35t-182 13q-99 0-182-13t-138-35v271q18 12 69 27.5T360-166Zm120-161Z",
        [5]: "M200-80q-33 0-56.5-23.5T120-160v-480q0-33 23.5-56.5T200-720h80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720h80q33 0 56.5 23.5T840-640v480q0 33-23.5 56.5T760-80H200Zm0-80h560v-480H200v480Zm280-240q83 0 141.5-58.5T680-600h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85h-80q0 83 58.5 141.5T480-400ZM360-720h240q0-50-35-85t-85-35q-50 0-85 35t-35 85ZM200-160v-480 480Z",
        [6]: "M80-160v-120h80v-440q0-33 23.5-56.5T240-800h600v80H240v440h240v120H80Zm520 0q-17 0-28.5-11.5T560-200v-400q0-17 11.5-28.5T600-640h240q17 0 28.5 11.5T880-600v400q0 17-11.5 28.5T840-160H600Zm40-120h160v-280H640v280Zm0 0h160-160Z",
        [7]: "M400-40v-80H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h200v-80h80v880h-80ZM200-240h200v-240L200-240Zm360 120v-360l200 240v-520H560v-80h200q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H560Z",
        [8]: "M300-240q25 0 42.5-17.5T360-300q0-25-17.5-42.5T300-360q-25 0-42.5 17.5T240-300q0 25 17.5 42.5T300-240Zm0-360q25 0 42.5-17.5T360-660q0-25-17.5-42.5T300-720q-25 0-42.5 17.5T240-660q0 25 17.5 42.5T300-600Zm180 180q25 0 42.5-17.5T540-480q0-25-17.5-42.5T480-540q-25 0-42.5 17.5T420-480q0 25 17.5 42.5T480-420Zm180 180q25 0 42.5-17.5T720-300q0-25-17.5-42.5T660-360q-25 0-42.5 17.5T600-300q0 25 17.5 42.5T660-240Zm0-360q25 0 42.5-17.5T720-660q0-25-17.5-42.5T660-720q-25 0-42.5 17.5T600-660q0 25 17.5 42.5T660-600ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z",
        [9]: "M160-80v-440H80v-240h208q-5-9-6.5-19t-1.5-21q0-50 35-85t85-35q23 0 43 8.5t37 23.5q17-16 37-24t43-8q50 0 85 35t35 85q0 11-2 20.5t-6 19.5h208v240h-80v440H160Zm400-760q-17 0-28.5 11.5T520-800q0 17 11.5 28.5T560-760q17 0 28.5-11.5T600-800q0-17-11.5-28.5T560-840Zm-200 40q0 17 11.5 28.5T400-760q17 0 28.5-11.5T440-800q0-17-11.5-28.5T400-840q-17 0-28.5 11.5T360-800ZM160-680v80h280v-80H160Zm280 520v-360H240v360h200Zm80 0h200v-360H520v360Zm280-440v-80H520v80h280Z"
    };

    function fW(a, b, c, d, e) {
        const f = a.document.createElementNS("http://www.w3.org/2000/svg", "path");
        f.setAttribute("d", e);
        e = a.document.createElementNS("http://www.w3.org/2000/svg", "svg");
        v(e, pr(a));
        e.setAttribute("viewBox", b);
        e.setAttribute("width", c);
        e.setAttribute("height", d);
        dW(e);
        e.appendChild(f);
        return e
    };

    function jW(a, b, c, d) {
        const e = document.createElement("DIV");
        e.className = "google-anno-skip";
        d = a.getComputedStyle(d).fontSize || "16px";
        var f = e.appendChild,
            h = gW(a, d, b.T.Wc, b.g.get(c) || 0);
        v(h, {
            position: "relative",
            top: "3px"
        });
        const k = document.createElement("SPAN");
        v(k, {
            display: "inline-block",
            "padding-left": b.Z() ? "" : "3px",
            "padding-right": b.Z() ? "3px" : ""
        });
        k.appendChild(h);
        f.call(e, k);
        f = e.appendChild;
        h = a.document.createElement("SPAN");
        h.appendChild(a.document.createTextNode(c));
        v(h, {
            position: "relative",
            left: b.Z() ?
                "" : "3px",
            right: b.Z() ? "3px" : "",
            "padding-left": b.Z() ? "6px" : "",
            "padding-right": b.Z() ? "" : "6px"
        });
        f.call(e, h);
        v(e, {
            display: "inline-block",
            "border-radius": "20px",
            "padding-left": b.Z() ? "7px" : "6px",
            "padding-right": b.Z() ? "6px" : "7px",
            "padding-top": "3px",
            "padding-bottom": "3px",
            "border-width": "1px",
            "border-style": "solid",
            color: b.T.Wc,
            "font-family": "Roboto",
            "font-weight": "500",
            "font-size": d,
            "border-color": "#D7D7D7",
            background: b.T.re,
            cursor: "pointer"
        });
        return e
    };
    const kW = [{
        kf: "1907259590",
        Hd: 480,
        Nc: 220
    }, {
        kf: "2837189651",
        Hd: 400,
        Nc: 180
    }, {
        kf: "9211025045",
        Hd: 360,
        Nc: 160
    }, {
        kf: "6584860439",
        Hd: -Infinity,
        Nc: 150
    }];

    function lW(a) {
        return kW.find(b => b.Hd <= a)
    };

    function mW(a, b) {
        return b ? a.replace("ca", "partner") : "pub-adfiliates-query-origin"
    };
    const nW = new class {
        constructor() {
            this.g = []
        }
    };
    let oW = !1;

    function pW(a) {
        qW(a.config, 1065, a.win, () => {
            if (!a.g) {
                var b = new Vm;
                b = Di(b, 1, a.i);
                var c = new Um;
                b = E(b, 2, Wm, c);
                rW(a.config.L, b)
            }
        }, 1E4)
    }
    class sW {
        constructor(a, b, c) {
            this.win = a;
            this.config = b;
            this.i = c;
            this.g = !1
        }
        cancel(a) {
            this.win.clearTimeout(a)
        }
    }

    function tW(a, b, c, d, e, f, h = null) {
        const k = lW(a.document.body.clientWidth);
        d = b.ra ? uW(a, b, d, k, e, f, h) : vW(a, b, d, k, e, f, h);
        Io(d.isVisible(), !1, () => {
            oW = !1;
            for (const m of nW.g) m();
            nW.g.length = 0
        });
        d.show({
            Zf: !0
        });
        oW = !0;
        const l = new sW(a, b, c);
        pW(l);
        nW.g.push(() => {
            var m = b.L;
            var n = new Vm;
            n = Di(n, 1, c);
            var p = new Tm;
            n = E(n, 3, Wm, p);
            rW(m, n);
            l.g = !0
        })
    }

    function uW(a, b, c, d, e, f, h) {
        d = wW(a, b, c, e, f, {
            ei: d,
            ag: a.innerWidth,
            si: "100%",
            hj: "15px",
            ri: "13px",
            ij: "center",
            hh: 0
        }, h);
        return CB(a, d, {
            Mg: .95,
            ig: .95,
            zIndex: 2147483647,
            oc: !0,
            Ae: "adpub-drawer-root",
            ze: !1,
            Ma: !0,
            Fe: new R(xW(b.X, c))
        })
    }

    function vW(a, b, c, d, e, f, h) {
        a: {
            var k = b.T;
            var l = a.document.body.clientWidth;
            if (k.Fd) k = Math.min(l, k.Fd);
            else
                for (k = l * .9, l = l <= 768 ? 3 : 4; l >= 1; l--) {
                    const m = d.Nc * l + 42;
                    if (m <= k) {
                        k = m;
                        break a
                    }
                }
        }
        d = wW(a, b, c, e, f, {
            ei: d,
            ag: k,
            si: "600px",
            hj: "24px",
            ri: "24px",
            ij: "start",
            hh: 0
        }, h);
        return MA(a, d, {
            ld: `${k}px`,
            hd: b.Z(),
            Xc: L(b.X, 14),
            zIndex: 2147483647,
            oc: !0,
            cg: !0,
            Ae: "adpub-drawer-root",
            ze: !1,
            Ma: !0,
            Fe: new R(xW(b.X, c))
        })
    }

    function wW(a, b, c, d, e, f, h) {
        if (e === JV)
            if (b.T.Vb) {
                d = b.ra ? .95 * a.innerHeight - 30 : a.innerHeight;
                e = b.l;
                var k = f.ag,
                    l = d,
                    m = b.Z(),
                    n = !!K(b.X, 13),
                    p = b.T.Ie.join(","),
                    q = rz;
                m = "<style>#gda-search-term {height: 24px; font-size: 18px; font-weight: 500; color: #202124; font-family: 'Google Sans Text'; padding-bottom: 6px;" + (m ? "padding-right: 16px;" : "padding-left: 16px;") + '}</style><div id="gda-search-term">' + pz(c) + "</div>";
                n ? h = "" : (h = "<script data-ad-intent-query=" + Cz(c) + " data-ad-intent-qetid=" + Cz(h) + " data-ad-intent-eids=" +
                    Cz(p) + ' async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=', p = encodeURIComponent(String(e)), Fz.lastIndex = 0, p = Fz.test(p) ? p.replace(Fz, Gz) : p, h = h + p + '" crossorigin="anonymous">\x3c/script>');
                c = q(m + h + '<ins class="adsbygoogle" style="display:inline-block;width:' + Az(X(k)) + "px;height:" + Az(X(l - 30)) + 'px" data-ad-client="' + Az(e) + '"></ins><script>(adsbygoogle=window.adsbygoogle||[]).requestNonPersonalizedAds=1;\x3c/script>' + (n ? "<script>const el = document.querySelector('ins.adsbygoogle'); el.dir = 'ltr'; el.style.backgroundColor = 'lightblue'; el.style.fontSize = '25px'; el.style.textDecoration = 'none'; el.textContent = \"Loading display ads inside this slot for query = " +
                    String(c).replace(Nz, Kz) + ' and " + "property code = ' + String(e).replace(Nz, Kz) + '";\x3c/script>' : ""));
                e = b.Z() ? "rtl" : "ltr";
                b = fd({
                    dir: e,
                    lang: L(b.X, 7),
                    style: kd `margin:0px;height:100%;padding-top: ${f.hh}px;overflow: hidden;`
                }, mz(c));
                a = a.document.createElement("IFRAME");
                v(a, {
                    border: "0",
                    width: "100%",
                    height: d + "px"
                });
                a.srcdoc = Nc(b)
            } else a = yW(a, b, c, d);
        else a = e.mo(a, c, d);
        return a
    }

    function xW(a, b) {
        return L(a, 10).replace("TERM", b)
    }

    function yW(a, b, c, d) {
        const e = a.document.createElement("iframe");
        var f = b.X;
        const h = xW(f, c);
        f = new Zz(e, L(f, 16), "anno-cse", mW(b.l, K(f, 22)), "ShoppingVariant", a.location, L(f, 7), h, b.T.Ob.filter(k => k !== 42), !1, void 0, !0, void 0, !0, b.l);
        f.J();
        zW(a, b, e, c, f, d);
        return e
    }

    function zW(a, b, c, d, e, f) {
        const h = AW(b, a.top, function(k) {
            k.data.action === "init" && k.data.adChannel === "ShoppingVariant" && BW(a, b, c, e, d, f)
        });
        nW.g.push(() => {
            a.top.removeEventListener("message", h)
        })
    }

    function BW(a, b, c, d, e, f) {
        K(b.X, 13) || Yz(d, e, f);
        const h = c.contentDocument.documentElement,
            k = new ResizeObserver(() => {
                c.height = `${Math.ceil(h.offsetHeight+22)}px`
            });
        k.observe(h);
        const l = CW(b, 1066, a, () => {
            const m = h.offsetHeight;
            m && (c.height = `${m+22}px`)
        }, 1E3);
        nW.g.push(() => {
            k.disconnect();
            a.clearInterval(l)
        })
    };

    function DW(a, b, c) {
        b = b.getBoundingClientRect();
        a = um(tm(new vm, a), 3);
        c = Fi(a, 4, c);
        c = vi(c, 6, Math.round(b.x));
        return vi(c, 7, Math.round(b.y))
    }

    function EW(a) {
        a = WV(a);
        var b = new rm;
        b = vi(b, 1, a[0]);
        b = vi(b, 2, a[1]);
        b = vi(b, 3, a[2]);
        return Uh(b, 4, sg(a[3]), 0)
    };
    const FW = /[\s!'",:;\\(\\)\\?\\.\u00bf\u00a1\u30a0\uff1d\u037e\u061f\u3002\uff1f\uff1b\uff1a\u2014\u2014\uff5e\u300a\u300b\u3008\u3009\uff08\uff09\u300c\u300d\u3001\u00b7\u2026\u2025\uff01\uff0c\u00b7\u2019\u060c\u061b\u060d\u06d4\u0648]/;

    function GW(a, b) {
        switch (b) {
            case 1:
                return !0;
            default:
                return a === "" || FW.test(a)
        }
    };

    function HW(a, b) {
        const c = new IW(b);
        for (const d of a) L(d, 5) && Lh(d, 3, Tg, y()).forEach(e => {
            JW(c, e, e)
        });
        KW(c);
        return new LW(c)
    }

    function MW(a, b) {
        b = a.match(b);
        a = new Map;
        for (const c of b)
            if (b = c.l, a.has(b)) {
                const d = a.get(b);
                c.length > d.length && a.set(b, c)
            } else a.set(b, c);
        return Array.from(a.values())
    }
    var LW = class {
        constructor(a) {
            this.g = a
        }
        isEmpty() {
            return this.g.isEmpty()
        }
        match(a) {
            return this.g.match(a)
        }
    };

    function JW(a, b, c) {
        const d = a.i.has(c) ? a.i.get(c) : a.l++;
        a.i.set(c, d);
        a.A.set(d, c);
        c = 0;
        for (let e = 0; e < b.length; e++) {
            const f = b.charCodeAt(e);
            a.g[c].contains(f) || (a.g.push(new NW), a.g[a.size].A = c, a.g[a.size].B = f, a.g[c].j.set(f, a.size), a.size++);
            c = a.g[c].j.get(f)
        }
        a.g[c].l = !0;
        a.g[c].C = d;
        a.g[c].G = a.j.length;
        a.j.push(b.length)
    }

    function KW(a) {
        const b = [];
        for (b.push(0); b.length > 0;) {
            const f = b.shift();
            var c = a,
                d = c.g[f];
            if (f === 0) d.g = 0, d.i = 0;
            else if (d.A === 0) d.g = 0, d.i = d.l ? f : c.g[c.g[f].g].i;
            else {
                d = c.g[c.g[f].A].g;
                for (var e = c.g[f].B;;) {
                    if (c.g[d].contains(e)) {
                        c.g[f].g = c.g[d].j.get(e);
                        break
                    }
                    if (d === 0) {
                        c.g[f].g = 0;
                        break
                    }
                    d = c.g[d].g
                }
                c.g[f].i = c.g[f].l ? f : c.g[c.g[f].g].i
            }
            for (const h of a.g[f].ua) b.push(h)
        }
    }
    class IW {
        constructor(a) {
            this.C = a;
            this.size = 1;
            this.g = [new NW];
            this.j = [];
            this.i = new Map;
            this.A = new Map;
            this.l = 0
        }
        isEmpty() {
            return this.l === 0
        }
        match(a) {
            let b = 0;
            const c = [];
            for (let h = 0; h < a.length; h++) {
                for (;;) {
                    var d = a.charCodeAt(h),
                        e = this.g[b];
                    if (e.contains(d)) {
                        b = e.j.get(d);
                        break
                    }
                    if (b === 0) break;
                    b = e.g
                }
                let k = b;
                for (;;) {
                    k = this.g[k].i;
                    if (k === 0) break;
                    const l = h + 1 - this.j[this.g[k].G],
                        m = h;
                    d = a;
                    e = m;
                    var f = this.C;
                    GW(d.charAt(l - 1), f) && GW(d.charAt(e + 1), f) && c.push(new OW(l, m, this.A.get(this.g[k].C)));
                    k = this.g[k].g
                }
            }
            return c
        }
    }
    class NW {
        constructor() {
            this.j = new Map;
            this.I = !1;
            this.ia = this.H = this.F = this.ca = this.M = this.R = -1
        }
        contains(a) {
            return this.j.has(a)
        }
        set A(a) {
            this.R = a
        }
        get A() {
            return this.R
        }
        set B(a) {
            this.M = a
        }
        get B() {
            return this.M
        }
        set l(a) {
            this.I = a
        }
        get l() {
            return this.I
        }
        set C(a) {
            this.H = a
        }
        get C() {
            return this.H
        }
        set g(a) {
            this.ca = a
        }
        get g() {
            return this.ca
        }
        set i(a) {
            this.F = a
        }
        get i() {
            return this.F
        }
        set G(a) {
            this.ia = a
        }
        get G() {
            return this.ia
        }
        get ua() {
            return this.j.values()
        }
    }
    var OW = class {
        constructor(a, b, c) {
            this.j = a;
            this.i = b;
            this.C = c
        }
        get l() {
            return this.j
        }
        get A() {
            return this.i
        }
        get g() {
            return this.C
        }
        get length() {
            return this.i - this.j
        }
    };
    async function PW(a, b, c, d, e) {
        const f = HW(EV(b.X), b.i);
        if (!f.isEmpty()) {
            var h = new Map;
            for (const k of EV(b.X).filter(l => L(l, 5))) Lh(k, 3, Tg, y()).forEach(l => {
                h.set(l, L(k, 1))
            });
            await QW(a, a.document.body, b, f, h, new Set, c, d, b.T.Ed ? new aW(0, 0, 0, b.T.Ed) : null, e)
        }
    }
    async function QW(a, b, c, d, e, f, h, k, l, m) {
        h.g.qa(9) >= h.i && await RV(h, 10);
        if (b.nodeType !== Node.ELEMENT_NODE || !b.classList ? .contains("google-anno-skip"))
            if (c.T.Pe && f.size && b.nodeType === Node.ELEMENT_NODE && RW(a, b) && b.parentElement && SW(a, f, c, k, b.parentElement, b, l), b.nodeType === Node.TEXT_NODE && b.textContent) MW(d, b.textContent).map(n => e.get(n.g)).filter(n => !!n).forEach(n => void f.add(n));
            else {
                for (const n of b.childNodes) await QW(a, n, c, d, e, f, h, k, l, m);
                f.size && b.nodeType === Node.ELEMENT_NODE && ["block", "table-cell"].includes(a.getComputedStyle(b).display) &&
                    SW(a, f, c, k, b, null, l)
            }
    }

    function SW(a, b, c, d, e, f, h) {
        for (const k of b) {
            if (h && ZV(h)) return;
            const l = DW(c.L.Ze++, f ? ? e, k);
            d.entries.push(vh(l));
            h && cW(h.i, k, h.g);
            if (K(c.X, 17)) continue;
            const m = jW(a, c, k, e),
                n = TW(m, c, hi(Qg(Ch(l, 10)), "0"));
            UW(c, 999, m, p => {
                try {
                    if (c.Ta === KV) return !1;
                    var q = c.L,
                        t = Nm(Am(k), hi(Qg(Ch(l, 10)), "0"));
                    var w = Ci(t, 7, n.i);
                    const A = VW(q, w);
                    tW(a, c, A, k, c.C.get(k) || "", c.Ta);
                    return !1
                } finally {
                    p.preventDefault()
                }
            });
            e.insertBefore(m, f)
        }
        b.clear()
    }

    function RW(a, b) {
        return ["BR", "IMG", "TABLE"].includes(b.tagName) || a.getComputedStyle(b).display === "block"
    }
    class WW {
        constructor() {
            this.g = null
        }
        get i() {
            return this.g
        }
    }

    function TW(a, b, c) {
        const d = new WW;
        XW(b, e => {
            for (const l of e)
                if (l.isIntersecting) {
                    var f = c;
                    e = b.L;
                    var h = new em;
                    h = f = Uh(h, 1, Pg(f), "0");
                    f = e.handle;
                    var k = YW(e, 17);
                    h = E(k, 16, Ym, h);
                    e = f.call(e, h);
                    d.g = e
                } else d.g && (e = b.L, f = new dm, h = f = Di(f, 1, d.g), f = e.handle, k = YW(e, 18), h = E(k, 17, Ym, h), f.call(e, h), d.g = null)
        }).observe(a);
        return d
    };

    function ZW(a, b, c, d, e, f) {
        if (!a.g) {
            var h = b.document.createElement("span");
            h.appendChild(eW(b, "12px"));
            h.appendChild(b.document.createTextNode(d));
            TD(b, c || null, {
                informationText: h
            }, e, f ? k => {
                var l = f.handle,
                    m = YW(f, 20);
                k = E(m, 11, Ym, k);
                l.call(f, k)
            } : f);
            a.g = !0
        }
    }
    var $W = class {
        constructor() {
            this.g = !1
        }
    };

    function aX(a, b) {
        const c = b.ra === b.Z;
        var d = bX(a, b, c);
        if (!d) return null;
        d = d.position.nd();
        a = cX(a, d, b, function(f) {
            f = f.getBoundingClientRect();
            return c ? b.V - f.right : f.left
        });
        if (!a || a - 16 < 200) return null;
        const e = b.V;
        return {
            sa: c ? e - a : 16,
            Ca: c ? 16 : e - a,
            ga: d
        }
    }

    function dX(a, b) {
        const c = Sn(a),
            d = Tn(a);
        return mC(new qC(a), new Cj(d - b.ga - 50, c - b.Ca, d - b.ga, b.sa)).size > 0
    }

    function bX(a, b, c) {
        b = Math.floor(b.W * .3);
        return b < 66 ? null : MC(a, {
            Tb: c ? SC({
                ga: 16,
                Ca: 16
            }) : QC({
                ga: 16,
                sa: 16
            }),
            Ue: b - 66,
            Ab: 50,
            Xe: 50,
            Cd: b,
            mb: 16
        }, [a.document.body]).me
    }

    function cX(a, b, c, d) {
        a = c.ra ? eX(a, b, c) : fX(a, b, c);
        b = c.V;
        let e = c.ra ? b : b * .35;
        a.forEach(f => {
            e = Math.min(e, d(f))
        });
        return e < 16 ? null : e - 16
    }

    function eX(a, b, c) {
        const d = c.W;
        return mC(new qC(a), new Cj(d - b - 50, c.V - 16, d - b, 16))
    }

    function fX(a, b, c) {
        const d = c.W,
            e = c.V;
        c = c.Z;
        return mC(new qC(a), new Cj(d - b - 50, (c ? e * .35 : e) - 16, d - b, (c ? 16 : e * .65) + 16))
    }

    function gX(a, b, c) {
        const d = a.Z;
        return {
            sa: d ? hX(a, b, c) : c,
            Ca: d ? c : hX(a, b, c),
            ga: 16
        }
    }

    function hX(a, b, c) {
        const d = a.V;
        return a.ra ? d - b + 16 : Math.max(d - c - d * .35, d - b + 16)
    }

    function iX(a, b) {
        const c = b.Z,
            d = b.V;
        a = b.ra ? eX(a, 16, b) : fX(a, 16, b);
        return Array.from(a).map(e => new LC(c ? d - e.getBoundingClientRect().right : e.getBoundingClientRect().left, c ? d - e.getBoundingClientRect().left : e.getBoundingClientRect().right)).sort((e, f) => e.start - f.start)
    };

    function jX(a, b, c, d, e, f, h, k, l) {
        v(c, {
            width: "50px",
            bottom: h ? h.ga + "px" : "16px",
            left: b.Z() === b.ra ? "" : h ? h.sa + "px" : "16px",
            right: b.Z() === b.ra ? h ? h.Ca + "px" : "16px" : ""
        });
        c.role = "button";
        c.ariaLabel = L(b.X, 20);
        v(e, {
            display: "none"
        });
        v(d, {
            display: "none"
        });
        const m = gW(a, "20px", b.T.Qa || "inherit", b.g.get(l.ya) || 0);
        a = a.document.createElement("SPAN");
        v(a, {
            display: "inline-block",
            position: "absolute",
            top: "14px",
            left: "15px",
            cursor: "pointer"
        });
        v(m, {
            cursor: "pointer"
        });
        c.appendChild(a);
        a.appendChild(m);
        UW(b, 1064, c, n => {
            k ? .();
            m.remove();
            v(c, {
                bottom: h ? h.ga + "px" : "16px",
                left: h ? h.sa + "px" : b.ra ? "16px" : b.Z() ? "16px" : "65%",
                right: h ? h.Ca + "px" : kX(b),
                width: ""
            });
            c.role = "";
            c.ariaLabel = "";
            v(e, {
                display: ""
            });
            v(d, {
                display: "flex"
            });
            f.focus();
            n.preventDefault();
            return !1
        });
        c.focus()
    }

    function kX(a) {
        return a.Z() ? a.ra ? "16px" : "65%" : "16px"
    }

    function lX(a) {
        return {
            position: "absolute",
            top: "2.5px",
            bottom: "2.5px",
            left: (a.Z(), "50px"),
            right: a.Z() ? "24px" : "12px",
            display: "flex",
            "flex-direction": "row",
            color: a.T.Qa || "#FFFFFF",
            cursor: "pointer",
            transition: "width 5s"
        }
    }

    function mX(a) {
        return {
            "margin-left": a ? "6px" : "4px",
            "margin-right": a ? "4px" : "6px",
            "margin-top": "12px"
        }
    }

    function nX(a, b, c) {
        a.tabIndex = 0;
        a.role = "link";
        a.ariaLive = "polite";
        a.ariaLabel = c.replace("TERM", b)
    };

    function oX(a, b, c, d, e, f, h, k, l) {
        const m = document.createElement("SPAN");
        v(m, pr(a));
        m.id = "gda";
        m.appendChild(iW(a, L(b.X, 18), b.T.Qa));
        UW(b, 1064, m, n => {
            h ? .();
            jX(a, b, c, d, m, e, f, k, l);
            n.preventDefault();
            n.stopImmediatePropagation();
            return !1
        });
        return m
    }

    function pX(a, b, c, d) {
        const e = document.createElement("SPAN");
        v(e, pr(a));
        dW(e);
        v(e, lX(b));
        b.ra || v(e, {
            "justify-content": ""
        });
        const f = gW(a, "20px", b.T.Qa, b.g.get(d.ya) || 0),
            h = document.createElement("SPAN");
        v(h, {
            display: "inline-block",
            cursor: "inherit"
        });
        v(h, mX(b.Z()));
        e.appendChild(h);
        h.appendChild(f);
        c.classList ? .add("google-anno-sa-qtx", "google-anno-skip");
        nX(c, d.ya, L(b.X, 19));
        v(c, {
            height: "40px",
            "align-items": "center",
            "line-height": "44px",
            "font-size": "16px",
            "font-weight": "400",
            "font-style": "normal",
            "font-family": "Roboto",
            "text-overflow": "ellipsis",
            "white-space": "nowrap",
            overflow: "hidden",
            "-webkit-tap-highlight-color": "transparent",
            color: b.T.Qa || "inherit"
        });
        UW(b, 999, e, k => {
            k.preventDefault();
            if (b.Ta !== KV && (d.Jf ? ? 0) + 800 <= b.qa(25)) {
                k = d.ya;
                const n = b.A.get(k) || "";
                var l = b.L;
                var m = Nm(Am(k), d.Ac);
                m = Ci(m, 3, d.wd);
                l = VW(l, m);
                tW(a, b, l, k, n, b.Ta, b.T.Vb ? b.j.get(k) || "" : null)
            }
            return !1
        });
        e.appendChild(c);
        return e
    }

    function qX(a) {
        (new MutationObserver(b => {
            b.forEach(c => {
                c.type === "attributes" && a.document.body.style.paddingBottom === "0px" && v(a.document.body, {
                    "padding-bottom": "66px"
                })
            })
        })).observe(a.document.body, {
            attributes: !0
        })
    }

    function rX(a, b, c, d, e, f) {
        var h = a.getComputedStyle(a.document.body).paddingBottom.match(/\d+/);
        v(a.document.body, {
            "padding-bottom": (h && h.length ? Number(h[0]) : 0) + 66 + "px"
        });
        qX(a);
        h = document.createElement("div");
        v(h, pr(a));
        h.id = "google-anno-sa";
        h.dir = b.Z() ? "rtl" : "ltr";
        h.tabIndex = 0;
        var k = {
            background: b.T.fe || "#1A73E8",
            "border-style": "solid",
            bottom: d ? d.ga + "px" : "16px",
            "border-radius": "16px",
            height: "50px",
            position: "fixed",
            "text-align": "center",
            border: "0px",
            left: d ? d.sa + "px" : b.ra ? "16px" : b.Z() ? "16px" : "65%",
            right: d ?
                d.Ca + "px" : kX(b),
            "box-shadow": "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
            "z-index": "1000"
        };
        v(h, k);
        v(h, {
            fill: "white"
        });
        const l = document.createElement("SPAN");
        v(l, pr(a));
        v(l, {
            cursor: "inherit"
        });
        k = pX(a, b, l, c);
        a = oX(a, b, h, k, l, d, e, f, c);
        h.appendChild(k);
        h.appendChild(a);
        return h
    }

    function sX(a, b, c, d, e) {
        var f = c.getElementsByClassName("google-anno-sa-qtx")[0];
        f instanceof HTMLElement && (f.innerText = a.ya);
        if ((d.g.get(e) || 0) !== (d.g.get(a.ya) || 0)) {
            b = gW(b, "20px", d.T.Qa, d.g.get(a.ya) || 0);
            for (var h of c.getElementsByClassName("google-anno-sa-intent-icon")) h.replaceWith(b)
        }
        c = a.ya;
        h = L(d.X, 19);
        f.ariaLabel = h.replace("TERM", c);
        d = d.L;
        f = new im;
        f = Fh(f, 2, Pg(a.Ac));
        f = Fi(f, 4, a.ya);
        a = d.handle;
        c = YW(d, 15);
        f = E(c, 6, Ym, f);
        return a.call(d, f)
    }

    function tX(a, b, c, d) {
        if (dX(b, d)) return null;
        a.Jf = c.qa(24);
        d = rX(b, c, a, d, () => {
            var f = c.L;
            var h = new fm;
            h = Uh(h, 3, Pg(a.Ac), "0");
            var k = Fi(h, 2, a.ya);
            h = f.handle;
            var l = YW(f, 22);
            k = E(l, 12, Ym, k);
            return h.call(f, k)
        }, () => {
            var f = c.L,
                h = new gm,
                k = f.handle,
                l = YW(f, 23);
            h = E(l, 13, Ym, h);
            return k.call(f, h)
        });
        const e = sX(a, b, d, c, a.ya);
        b.document.body.appendChild(d);
        return e
    }

    function uX(a, b, c, d, e, f, h) {
        if (a.ya !== e || a.Ac !== d || a.g !== f) {
            if (a.wd !== null) {
                var k = a.wd,
                    l = c.L;
                var m = new hm;
                m = Di(m, 1, k);
                k = l.handle;
                var n = YW(l, 16);
                m = E(n, 7, Ym, m);
                k.call(l, m)
            }
            l = a.ya;
            a.ya = e;
            a.Ac = d;
            a.g = f;
            K(c.X, 17) || (d = b.document.getElementById("google-anno-sa"), a.wd = d ? sX(a, b, d, c, l) : tX(a, b, c, h))
        }
    }
    var vX = class {
        constructor() {
            this.ya = "";
            this.Ac = null;
            this.g = "";
            this.Jf = this.wd = null
        }
    };

    function wX(a, b) {
        a.g >= a.i.length && (a.g = 0);
        if (oW) nW.g.push(() => void wX(a, b));
        else {
            var c = a.i[a.g++];
            a.j = !1;
            uX(a.A, a.win, a.config, c.i, c.g, c.j, a.l);
            qW(a.config, 898, a.win, () => void wX(a, b), a.rf)
        }
    }
    var xX = class {
        constructor(a, b, c) {
            var d = new vX;
            this.win = a;
            this.config = b;
            this.A = d;
            this.l = c;
            this.i = [];
            this.j = !0;
            this.g = 0;
            this.rf = b.params.rf
        }
    };
    class yX {
        constructor(a, b, c) {
            this.i = a;
            this.g = b;
            this.j = c
        }
    };

    function zX(a, b, c, d, e) {
        c.forEach(f => {
            var h = a.L.Ze++;
            h = um(tm(new vm, h), 1);
            h = Fi(h, 4, f);
            d.entries.push(vh(h));
            h = hi(Qg(Ch(h, 10)), "0");
            e.i.push(new yX(h, f, f));
            e.j && wX(e, b)
        })
    };
    const AX = ["block", "inline", "inline-block", "list-item", "table-cell"];
    async function BX(a, b, c, d, e) {
        d.g.qa(5) >= d.i && await RV(d, 6);
        if (!c.T.Ce) {
            const f = EV(c.X);
            f.length && CX(a, b, c, e, f)
        }
        c.T.De || await c.na(898, PW(a, c, d, e, b));
        c.T.Ee || await DX(a, c, () => new $W, d, e)
    }
    async function DX(a, b, c, d, e) {
        var f = EV(b.X);
        var h = new IW(b.i);
        for (const k of f) L(k, 6) !== "" && (f = L(k, 1), JW(h, f, f));
        KW(h);
        h = new LW(h);
        h.isEmpty() || await b.na(898, EX(a, b, d, e, h, new aW(b.params.Tj, b.params.hf, b.params.je, b.params.Dd), c()))
    }
    async function EX(a, b, c, d, e, f, h) {
        var k = a.document.body;
        if (K(b.X, 17) || z(b.X, Dq, 21))
            for (; k;) {
                c.g.qa(7) >= c.i && await RV(c, 8);
                if (k.nodeType === Node.TEXT_NODE && k.textContent !== "" && k.parentElement) {
                    var l = k.parentElement;
                    a: {
                        var m = a;
                        var n = b,
                            p = l,
                            q = k.textContent,
                            t = d,
                            w = e,
                            A = f;
                        const hb = [];b: {
                            var D = q;
                            switch (n.i) {
                                case 1:
                                    var G = Array(D.length),
                                        I = 0;
                                    for (var B = 0; B < D.length; B++) FW.test(D[B]) || I++, G[B] = I;
                                    D = G;
                                    break b;
                                default:
                                    G = Array(D.length);
                                    for (B = I = 0; B < D.length;) {
                                        for (;
                                            /\s/.test(D[B]);) G[B] = I, B++;
                                        for (var J = !1; B < D.length &&
                                            !/\s/.test(D[B]);) J = !0, G[B] = I, B++;
                                        J && (I++, G[B - 1] = I)
                                    }
                                    D = G
                            }
                        }
                        w = q.includes("\u00bb") ? [] : MW(w, q);I = -1;
                        for (const ib of w)
                            if (w = ib.l, G = ib.A, !(w < I)) {
                                B = A;
                                var H = ib.g;
                                bW(B.i, B.g + D[w]);
                                J = B;
                                var ba = J.i;
                                if ((ba.g.has(H) ? ba.g.get(H).length : 0) < J.hf && B.i.j < B.je) {
                                    B = m.getComputedStyle(p);
                                    J = B.fontSize.match(/\d+/);
                                    if (!(J && Number(J[0]) >= 12 && Number(J[0]) <= 22 && $a(AX, B.display))) {
                                        A.g += D[D.length - 1];
                                        m = [];
                                        break a
                                    }
                                    I += 1;
                                    I < w && hb.push(m.document.createTextNode(q.substring(I, w)));
                                    I = q.substring(w, G + 1);
                                    B = q;
                                    J = w;
                                    ba = G + 1;
                                    ba = B.substring(Math.max(J -
                                        30, 0), J) + "~~" + B.substring(ba, Math.min(ba + 30, B.length));
                                    J = m;
                                    var db = n.L.Ze++;
                                    B = p;
                                    var ya = I,
                                        ha = ba,
                                        ma = ib.g;
                                    H = D[w];
                                    ba = B.getBoundingClientRect();
                                    db = um(tm(new vm, db), 2);
                                    ya = Fi(db, 2, ya);
                                    ya = Fi(ya, 3, ha);
                                    ma = Fi(ya, 4, ma);
                                    H = vi(ma, 5, H);
                                    H = vi(H, 6, Math.round(ba.x));
                                    ba = vi(H, 7, Math.round(ba.y));
                                    J = J.getComputedStyle(B);
                                    H = new sm;
                                    H = Fi(H, 1, J.fontFamily);
                                    ma = EW(J.color);
                                    H = C(H, 7, ma);
                                    ma = EW(J.backgroundColor);
                                    H = C(H, 8, ma);
                                    ma = J.fontSize.match(/^(\d+(\.\d+)?)px$/);
                                    H = vi(H, 4, ma ? Math.round(Number(ma[1])) : 0);
                                    ma = Math.round(Number(J.fontWeight));
                                    isNaN(ma) || ma === 400 || vi(H, 5, ma);
                                    J.textDecorationLine !== "none" && Fi(H, 6, J.textDecorationLine);
                                    J = C(ba, 8, H);
                                    ba = [];
                                    for (ya = B; ya && ba.length < 20;) {
                                        B = ba;
                                        H = B.push;
                                        ma = ya;
                                        ha = new qm;
                                        ha = Fi(ha, 1, ma.tagName);
                                        ma.className !== "" && Th(ha, 2, ma.className.split(" "), Rg);
                                        H.call(B, ha);
                                        if (ya.tagName === "BODY") break;
                                        ya = ya.parentElement
                                    }
                                    B = ba.reverse();
                                    B = ei(J, 9, B);
                                    t.entries.push(vh(B));
                                    hb.push(FX(m, n, hi(Qg(Ch(B, 10)), "0"), ib.g, I, p));
                                    cW(A.i, ib.g, A.g + D[w]);
                                    I = G;
                                    if (ZV(A)) break
                                }
                            }
                        n = I + 1;n !== 0 && n < q.length && hb.push(m.document.createTextNode(q.substring(n)));
                        A.g += D[D.length - 1];m = hb
                    }
                    if (m.length && !K(b.X, 17)) {
                        !b.T.Vb && ZW(h, a, b.params.Yf ? MV(a, b.params.Yf) : void 0, L(b.X, 3), z(b.X, Dq, 21).i(), b.L);
                        for (const hb of m) l.insertBefore(hb, k), GX(hb);
                        l.removeChild(k);
                        for (k = m[m.length - 1]; k.lastChild;) k = k.lastChild;
                        if (ZV(f)) break
                    }
                }
                a: {
                    l = f;m = b.i;
                    if (k.firstChild && (k.nodeType !== Node.ELEMENT_NODE ? 0 : !k.classList ? .contains("google-anno-skip") && k.offsetHeight)) {
                        b: {
                            switch (k.tagName ? .toUpperCase ? .()) {
                                case "IFRAME":
                                case "A":
                                case "AUDIO":
                                case "BUTTON":
                                case "CANVAS":
                                case "CITE":
                                case "CODE":
                                case "EMBED":
                                case "FOOTER":
                                case "FORM":
                                case "KBD":
                                case "LABEL":
                                case "OBJECT":
                                case "PRE":
                                case "SAMP":
                                case "SCRIPT":
                                case "SELECT":
                                case "STYLE":
                                case "SUB":
                                case "SUPER":
                                case "SVG":
                                case "TEXTAREA":
                                case "TIME":
                                case "VAR":
                                case "VIDEO":
                                case null:
                                    q = !1;
                                    break b
                            }
                            q = !(k.className.toUpperCase ? .() ? .includes("CRUMB") || k.id.toUpperCase ? .() ? .includes("CRUMB"))
                        }
                        if (q) {
                            k = k.firstChild;
                            break a
                        }
                        if (k.textContent ? .length) {
                            b: switch (q = k.textContent, m) {
                                case 1:
                                    m = q;
                                    q = 0;
                                    for (A = m.length - 1; A >= 0; A--) FW.test(m[A]) || q++;
                                    m = q;
                                    break b;
                                default:
                                    m = q.trim(), m = m === "" ? 0 : m.split(/\s+/).length
                            }
                            bW(l.i, l.g + m)
                        }
                    }
                    for (;;) {
                        if (k.nextSibling) {
                            k = k.nextSibling;
                            break a
                        }
                        if (!k.parentNode) {
                            k = null;
                            break a
                        }
                        k = k.parentNode
                    }
                    k = void 0
                }
            }
    }

    function HX(a, b) {
        b = {
            Z: b.Z(),
            ra: b.ra,
            V: Sn(a),
            W: Tn(a)
        };
        if (b.W >= 400) {
            var c;
            if ((c = aX(a, b)) != null) var d = c;
            else a: {
                c = b.V;
                var e = iX(a, b);a = 16;
                for (d of e) {
                    e = d.start;
                    const f = d.end;
                    if (e > a) {
                        if (e - a - 16 >= 200) {
                            d = gX(b, e, a);
                            break a
                        }
                        a = f + 16
                    } else f >= a && (a = f + 16)
                }
                d = c - a - 16 >= 200 ? gX(b, c, a) : null
            }
        } else d = null;
        return d
    }

    function CX(a, b, c, d, e) {
        function f() {
            return k ? ? (k = CW(c, 898, a, () => {
                h || (a.clearInterval(k), h = !0, IX(a, b, c, d, e), JX(c.L, PV(d, c.X)))
            }, c.T.Zb))
        }
        let h = !1,
            k = void 0;
        const l = KX(c, a, () => {
            (c.T.Ge ? a : window).scrollY <= c.T.he || h || (c.T.Zb > 0 && !HX(a, c) ? k = f() : (h = !0, a.removeEventListener("scroll", l), IX(a, b, c, d, e), JX(c.L, PV(d, c.X))))
        });
        qW(c, 898, a, () => {
            h || (c.T.Zb > 0 && !HX(a, c) ? k = f() : (h = !0, IX(a, b, c, d, e), JX(c.L, PV(d, c.X))))
        }, c.T.ge)
    }

    function IX(a, b, c, d, e) {
        e = e.filter(h => L(h, 7).length).map(h => L(h, 1));
        if (e.length !== 0) {
            var f = HX(a, c);
            f && zX(c, b, e, d, new xX(a, c, f))
        }
    }

    function GX(a) {
        if (a.nodeType === Node.ELEMENT_NODE) {
            if (a.tagName === "A") {
                var b = YV(WV(getComputedStyle(a.parentElement).color)),
                    c = YV(WV(getComputedStyle(a).color));
                var d = XV(a);
                if (d = b && c && d ? PM(c, d) < Math.min(PM(b, d), 2.5) ? b : null : b) {
                    b = d[0];
                    c = d[1];
                    d = d[2];
                    b = Number(b);
                    c = Number(c);
                    d = Number(d);
                    if (b != (b & 255) || c != (c & 255) || d != (d & 255)) throw Error('"(' + b + "," + c + "," + d + '") is not a valid RGB color');
                    c = b << 16 | c << 8 | d;
                    b = b < 16 ? "#" + (16777216 | c).toString(16).slice(1) : "#" + c.toString(16);
                    v(a, {
                        color: b
                    })
                }
            }
            for (b = 0; b < a.childElementCount; b++) GX(a.children[b])
        }
    }
    class LX {
        constructor() {
            this.g = null
        }
        get i() {
            return this.g
        }
    }

    function FX(a, b, c, d, e, f) {
        const h = a.document.createElement("SPAN");
        h.className = "google-anno-t";
        dW(h);
        v(h, {
            "text-decoration": "underline"
        });
        v(h, {
            "text-decoration-style": "dotted"
        });
        v(h, {
            "-webkit-text-decoration-line": "underline",
            "-webkit-text-decoration-style": "dotted"
        });
        h.appendChild(a.document.createTextNode(e));
        e = a.document.createElement("A");
        dW(e);
        v(e, {
            "text-decoration": "none",
            fill: "currentColor"
        });
        ud(e);
        e.className = "google-anno";
        e.appendChild(eW(a, a.getComputedStyle(f).fontSize));
        e.appendChild(a.document.createTextNode("\u00a0"));
        e.appendChild(h);
        const k = MX(b, c, e);
        UW(b, 999, e, l => {
            try {
                if (b.Ta === KV) return !1;
                var m = b.L,
                    n = Nm(Am(d), c);
                var p = Ci(n, 2, k.i);
                const q = VW(m, p);
                tW(a, b, q, d, b.B.get(d) || "", b.Ta, b.T.Vb ? b.j.get(d) || "" : null);
                return !1
            } finally {
                l.preventDefault(), l.stopImmediatePropagation()
            }
        });
        return e
    }

    function MX(a, b, c) {
        const d = new LX;
        XW(a, e => {
            for (const l of e)
                if (l.isIntersecting) {
                    var f = b;
                    e = a.L;
                    var h = new Sm;
                    h = f = Uh(h, 2, Pg(f), "0");
                    f = e.handle;
                    var k = YW(e, 13);
                    h = E(k, 4, Ym, h);
                    e = f.call(e, h);
                    d.g = e
                } else d.g && (e = a.L, f = new Rm, h = f = Di(f, 1, d.g), f = e.handle, k = YW(e, 14), h = E(k, 5, Ym, h), f.call(e, h), d.g = null)
        }).observe(c);
        return d
    };

    function rW(a, b) {
        var c = a.handle,
            d = YW(a, 19);
        b = E(d, 9, Ym, b);
        c.call(a, b)
    }

    function VW(a, b) {
        var c = a.handle,
            d = YW(a, 12);
        b = E(d, 8, Ym, b);
        return c.call(a, b)
    }

    function JX(a, b) {
        var c = a.handle,
            d = YW(a, 11);
        b = E(d, 14, Ym, b);
        c.call(a, b)
    }

    function YW(a, b) {
        var c = new Xm;
        var d = a.C++;
        c = Di(c, 1, d);
        b = Di(c, 2, Math.round(a.g.qa(b) - a.i));
        b = C(b, 10, a.j);
        return ti(b, 15, a.l ? !0 : void 0)
    }
    var NX = class {
        constructor(a, b, c, d, e) {
            this.g = a;
            this.i = b;
            this.j = c;
            this.l = d;
            this.Ze = this.C = 1;
            this.A = [...e]
        }
        handle(a) {
            for (const b of this.A) b(a);
            return mi(a, 1)
        }
    };

    function qW(a, b, c, d, e) {
        c.setTimeout(OX(a, b, d), e)
    }

    function AW(a, b, c) {
        a = OX(a, 999, c);
        b.addEventListener("message", a);
        return a
    }

    function CW(a, b, c, d, e) {
        return c.setInterval(OX(a, b, d), e)
    }

    function UW(a, b, c, d) {
        c.addEventListener("click", OX(a, b, d))
    }

    function XW(a, b) {
        return new IntersectionObserver(OX(a, 1065, b), {
            threshold: .98
        })
    }

    function KX(a, b, c) {
        a = OX(a, 898, c);
        b.addEventListener("scroll", a, {
            passive: !0
        });
        return a
    }

    function OX(a, b, c) {
        return a.Ia.Da(b, c, void 0, d => {
            d.es = a.T.Ob.join(",")
        })
    }
    var QX = class {
        constructor(a, b, c, d, e, f, h, k, l, m) {
            this.l = a;
            this.ra = b;
            this.X = c;
            this.Ia = d;
            this.L = e;
            this.ta = f;
            this.G = h;
            this.params = k;
            this.T = l;
            this.Ta = m;
            this.B = new Map;
            this.A = new Map;
            this.C = new Map;
            this.g = new Map;
            this.j = new Map;
            this.i = $a(PX, L(c, 7)) ? 1 : 0;
            for (const n of EV(this.X)) F(n, 6) != null && this.B.set(L(n, 1), L(n, 6)), F(n, 7) != null && this.A.set(L(n, 1), L(n, 7)), F(n, 5) != null && this.C.set(L(n, 1), L(n, 5)), ki(n, 10) != null && this.g.set(L(n, 1), oi(n, 10)), F(n, 11) != null && this.j.set(L(n, 1), L(n, 11))
        }
        na(a, b) {
            this.Ia.na(a, b, c => {
                c.es = this.T.Ob.join(",")
            });
            return b
        }
        qa(a) {
            return this.G.qa(a)
        }
        Z() {
            return oi(this.X, 12) === 2
        }
    };
    const PX = ["ja", "zh_CN", "zh_TW"];

    function RX(a, b) {
        return b == null ? `&${a}=null` : `&${a}=${Math.floor(b)}`
    }

    function SX(a, b) {
        return `&${a}=${b.toFixed(3)}`
    }

    function TX() {
        const a = new Set,
            b = gy();
        try {
            if (!b) return a;
            const c = b.pubads();
            for (const d of c.getSlots()) a.add(d.getSlotId().getDomId())
        } catch {}
        return a
    }

    function UX(a) {
        a = a.id;
        return a != null && (TX().has(a) || a.startsWith("google_ads_iframe_") || a.startsWith("aswift"))
    }

    function VX(a, b, c) {
        if (!a.sources) return !1;
        switch (WX(a)) {
            case 2:
                const d = XX(a);
                if (d) return c.some(f => YX(d, f));
                break;
            case 1:
                const e = ZX(a);
                if (e) return b.some(f => YX(e, f))
        }
        return !1
    }

    function WX(a) {
        if (!a.sources) return 0;
        a = a.sources.filter(b => b.previousRect && b.currentRect);
        if (a.length >= 1) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top) return 2;
            if (a.previousRect.top > a.currentRect.top) return 1
        }
        return 0
    }

    function ZX(a) {
        return $X(a, b => b.currentRect)
    }

    function XX(a) {
        return $X(a, b => b.previousRect)
    }

    function $X(a, b) {
        return a.sources.reduce((c, d) => {
            d = b(d);
            return c ? d && d.width * d.height !== 0 ? d.top < c.top ? d : c : c : d
        }, null)
    }

    function YX(a, b) {
        const c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        return c <= 0 || a <= 0 ? !1 : 100 * c * a / ((b.right - b.left) * (b.bottom - b.top)) >= 50
    }

    function aY() {
        const a = Array.from(document.getElementsByTagName("iframe")).filter(UX),
            b = [...TX()].map(c => document.getElementById(c)).filter(c => c !== null);
        bY = window.scrollX;
        cY = window.scrollY;
        return dY = [...a, ...b].map(c => c.getBoundingClientRect())
    }

    function eY(a, b) {
        const c = bY !== window.scrollX || cY !== window.scrollY ? [] : dY,
            d = aY();
        for (const e of b.getEntries()) switch (b = e.entryType, b) {
            case "layout-shift":
                fY(a, e, c, d);
                break;
            case "largest-contentful-paint":
                b = e;
                a.Bb = Math.floor(b.renderTime || b.loadTime);
                a.ib = b.size;
                break;
            case "first-input":
                b = e;
                a.Fa = Number((b.processingStart - b.startTime).toFixed(3));
                a.Ka = !0;
                a.g.some(f => f.entries.some(h => e.duration === h.duration && e.startTime === h.startTime)) || gY(a, e);
                break;
            case "longtask":
                b = Math.max(0, e.duration - 50);
                a.B +=
                    b;
                a.H = Math.max(a.H, b);
                a.ca += 1;
                break;
            case "event":
                gY(a, e);
                break;
            default:
                wd(b, void 0)
        }
    }

    function hY(a) {
        a.A || (a.A = new PerformanceObserver(Lu(640, b => {
            eY(a, b)
        })));
        return a.A
    }

    function iY(a) {
        const b = Lu(641, () => {
                QO(document) === 2 && jY(a)
            }),
            c = Lu(641, () => void jY(a));
        document.addEventListener("visibilitychange", b);
        document.addEventListener("pagehide", c);
        a.ua = () => {
            document.removeEventListener("visibilitychange", b);
            document.removeEventListener("pagehide", c);
            hY(a).disconnect()
        }
    }

    function jY(a) {
        if (!a.zf) {
            a.zf = !0;
            hY(a).takeRecords();
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
            window.LayoutShift && (b += SX("cls", a.G), b += SX("mls", a.I), b += RX("nls", a.R), window.LayoutShiftAttribution && (b += SX("cas", a.C), b += RX("nas", a.yf), b += SX("was", a.Qf)), b += SX("wls", a.ia), b += SX("tls", a.Of));
            window.LargestContentfulPaint && (b += RX("lcp", a.Bb), b += RX("lcps", a.ib));
            window.PerformanceEventTiming && a.Ka && (b += RX("fid", a.Fa));
            window.PerformanceLongTaskTiming && (b += RX("cbt", a.B),
                b += RX("mbt", a.H), b += RX("nlt", a.ca));
            let d = 0;
            for (var c of document.getElementsByTagName("iframe")) UX(c) && d++;
            b += RX("nif", d);
            b += RX("ifi", hk(window));
            c = P(Bn).g();
            b += `&${"eid"}=${encodeURIComponent(c.join())}`;
            b += `&${"top"}=${r===r.top?1:0}`;
            b += a.Bf ? `&${"qqid"}=${encodeURIComponent(a.Bf)}` : RX("pvsid", ff(r));
            window.googletag && (b += "&gpt=1");
            c = Math.min(a.g.length - 1, Math.floor((a.A ? a.hb : performance.interactionCount || 0) / 50));
            c >= 0 && (c = a.g[c].latency, c >= 0 && (b += RX("inp", c)));
            window.fetch(b, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            });
            a.ua()
        }
    }

    function fY(a, b, c, d) {
        if (!b.hadRecentInput) {
            a.G += Number(b.value);
            Number(b.value) > a.I && (a.I = Number(b.value));
            a.R += 1;
            if (c = VX(b, c, d)) a.C += b.value, a.yf++;
            if (b.startTime - a.Mc > 5E3 || b.startTime - a.Af > 1E3) a.Mc = b.startTime, a.i = 0, a.j = 0;
            a.Af = b.startTime;
            a.i += b.value;
            c && (a.j += b.value);
            a.i > a.ia && (a.ia = a.i, a.Qf = a.j, a.Of = b.startTime + b.duration)
        }
    }

    function gY(a, b) {
        kY(a, b);
        const c = a.g[a.g.length - 1],
            d = a.F[b.interactionId];
        if (d || a.g.length < 10 || b.duration > c.latency) d ? (d.entries.push(b), d.latency = Math.max(d.latency, b.duration)) : (b = {
            id: b.interactionId,
            latency: b.duration,
            entries: [b]
        }, a.F[b.id] = b, a.g.push(b)), a.g.sort((e, f) => f.latency - e.latency), a.g.splice(10).forEach(e => {
            delete a.F[e.id]
        })
    }

    function kY(a, b) {
        b.interactionId && (a.M = Math.min(a.M, b.interactionId), a.l = Math.max(a.l, b.interactionId), a.hb = a.l ? (a.l - a.M) / 7 + 1 : 0)
    }
    var lY = class {
            constructor() {
                this.j = this.i = this.R = this.I = this.G = 0;
                this.Af = this.Mc = Number.NEGATIVE_INFINITY;
                this.g = [];
                this.F = {};
                this.hb = 0;
                this.M = Infinity;
                this.Fa = this.ib = this.Bb = this.yf = this.Qf = this.C = this.Of = this.ia = this.l = 0;
                this.Ka = !1;
                this.ca = this.H = this.B = 0;
                this.A = null;
                this.zf = !1;
                this.ua = () => {};
                const a = document.querySelector("[data-google-query-id]");
                this.Bf = a ? a.getAttribute("data-google-query-id") : null;
                this.ii = {
                    ai: !1
                }
            }
            observe() {
                var a = window;
                if (!a.google_plmetrics && window.PerformanceObserver) {
                    a.google_plmetrics = !0;
                    a = ["layout-shift", "largest-contentful-paint", "first-input", "longtask"];
                    this.ii.ai && a.push("event");
                    for (const b of a) a = {
                        type: b,
                        buffered: !0
                    }, b === "event" && (a.durationThreshold = 40), hY(this).observe(a);
                    iY(this)
                }
            }
        },
        bY, cY, dY = [];
    async function mY(a, b, c, d, e, f, h, k) {
        var l = W,
            m = kw,
            n = ((k = sO(new wO(a), "__gads", k)) ? He(k + "t2Z7mVic") % 20 : null) ? ? Math.floor(Ee() * 20);
        k = f.qa(0);
        const p = Sn(a) < 488,
            q = c.X;
        var t = c.T;
        n = Om(n);
        t = Vh(n, t.Ob);
        e = new NX(f, k, t, K(q, 17), e);
        l = new QX(d, p, q, l, e, m, f, c.params, c.T, c.Ta);
        d = new QV;
        b = await nY(a, a.document, b, l, h, d);
        c = NV(d, p, c.Zc, a.location.hostname, c.Mi, q, f.qa(11) - k, b);
        a = e.handle;
        f = YW(e, 11);
        c = E(f, 3, Ym, c);
        a.call(e, c)
    }
    async function nY(a, b, c, d, e, f) {
        b = b.body;
        if (!b || !oY(b)) return [mm()];
        e.g.qa(3) >= e.i && await RV(e, 4);
        b = (b = L(d.X, 7)) ? (b = b.match(/^[a-z]{2,3}/i)) ? b[0].toLowerCase() : "" : "";
        f.language = b;
        b = [];
        if (a.document.querySelector('script[src*="www.google.com/adsense/search/ads.js"]')) {
            var h = b.push;
            var k = new nm;
            var l = new lm;
            k = E(k, 3, om, l);
            h.call(b, k)
        }
        b.length || await BX(a, c, d, e, f);
        return b
    }

    function oY(a) {
        try {
            (new ResizeObserver(() => {})).disconnect(), (new MutationObserver(() => {})).disconnect()
        } catch {
            return !1
        }
        return a.classList && a.classList.contains !== void 0 && a.attachShadow !== void 0
    }

    function pY() {
        var a = V(pt),
            b = W;
        if (Math.random() < a) try {
            (new lY).observe()
        } catch (c) {
            b.ba(1161, c instanceof Error ? c : Error("Unknown error."))
        }
    };
    async function qY(a, b, c, d, e, f, h) {
        Sd() || (pY(), d.push(async () => {
            delete window.google_plmetrics
        }));
        U(et) || (a = await rY(a, b, c, d, e, f, h), a.pb.length && sY(b, c, h, a))
    }
    async function rY(a, b, c, d, e, f, h) {
        const k = a.performance ? .now ? new TV(a.performance) : new UV;
        a = new SV(a, k);
        if (typeof e !== "string") return e = new nm, b = new lm, {
            Sa: null,
            pb: [E(e, 12, om, b)]
        };
        const l = IV(e);
        e = ai(l);
        if (!b) return b = new nm, d = new lm, b = E(b, 9, om, d), {
            Sa: e,
            pb: [b]
        };
        const m = c.google_ad_client;
        if (typeof m !== "string") return b = new nm, d = new lm, b = E(b, 11, om, d), {
            Sa: e,
            pb: [b]
        };
        if (Rd()) return {
            Sa: e,
            pb: [mm()]
        };
        if (Je()) return b = new nm, d = new lm, b = E(b, 13, om, d), {
            Sa: e,
            pb: [b]
        };
        var n = U(Zs) ? P(iF) : null;
        c = tY(c);
        var p = uY(e);
        a: {
            try {
                const w =
                    b ? .location ? .hash ? .match(/\bgoog_cpmi=([^&]*)/);
                if (!w) {
                    var q = null;
                    break a
                }
                var t = decodeURIComponent(w[1]);
                q = FV(t);
                break a
            } catch (w) {
                q = null;
                break a
            }
            q = void 0
        }
        q = q || ai(l);
        t = l.U;
        t = ci(t, t[x], Lq, 3, 1);
        t = {
            Tj: V(kt),
            hf: V(ot),
            je: V(mt),
            Dd: V(nt),
            Yf: t,
            rf: V(qt)
        };
        h = {
            X: q,
            Zc: c,
            Mi: h,
            params: t,
            T: new LV({
                Ob: p,
                Lg: V(pt),
                Ce: U(Ns),
                Ee: U(Ps),
                Zb: V(Is),
                fe: $t(Qs),
                Qa: $t(Rs),
                ge: V(it),
                he: V(jt),
                De: U(Os),
                re: $t(Ks),
                Wc: $t(Ls),
                Fd: V(at),
                Vb: U(ft),
                Ie: au(Ts),
                Pe: U(Ws),
                Ed: V($s),
                Ge: U(Js)
            }),
            Ta: JV
        };
        await vY(b, d, n, h, m, k, a, f);
        return {
            Sa: e,
            pb: []
        }
    }

    function uY(a) {
        const b = P(Bn).g();
        a && b.push(...Lh(a, 24, Ag, y()));
        b.push(...au(ht).map(Number));
        b.push(42);
        b.sort((c, d) => c - d);
        return b
    }

    function sY(a, b, c, d) {
        a = NV(new QV, !!a && Sn(a) < 488, tY(b), a ? .location ? .hostname ? ? "", c, d.Sa ? ? new bi, 0, d.pb);
        c = Math.floor(Ee() * 20);
        b = new Xm;
        b = Di(b, 1, 1);
        b = Di(b, 2, 0);
        c = Om(c);
        var e = uY(d.Sa);
        c = Vh(c, e);
        b = C(b, 10, c);
        a = E(b, 3, Ym, a);
        wY(U(Zs) ? P(iF) : null, a, Date.now(), d.Sa)
    }
    async function vY(a, b, c, d, e, f, h, k) {
        const l = $z(a);
        l.wasReactiveAdConfigReceived[42] || (l.wasReactiveAdConfigReceived[42] = !0, await mY(a, b, d, e, [m => {
            wY(c, m, f.qa(21), d.X)
        }], f, h, k))
    }

    function wY(a, b, c, d) {
        a && W.na(1214, mF(a, b, c), e => {
            e.es = uY(d).join(",")
        })
    }

    function tY(a) {
        a = a.google_page_url;
        return typeof a === "string" ? a : ""
    };
    const xY = (a, b) => {
        const c = Ce("STYLE", a);
        c.textContent = Kc(Yc `* { pointer-events: none; }`);
        a ? .head.appendChild(c);
        setTimeout(() => {
            a ? .head.removeChild(c)
        }, b)
    };
    var zY = (a, b, c) => {
        if (!a.body) return null;
        const d = new yY;
        d.apply(a, b);
        return () => {
            var e = c || 0;
            e > 0 && xY(b.document, e);
            Rj(a.body, {
                filter: d.g,
                webkitFilter: d.g,
                overflow: d.j,
                position: d.l,
                top: d.A
            });
            b.scrollTo(0, d.i)
        }
    };
    class yY {
        constructor() {
            this.g = this.A = this.l = this.j = null;
            this.i = 0
        }
        apply(a, b) {
            this.j = a.body.style.overflow;
            this.l = a.body.style.position;
            this.A = a.body.style.top;
            this.g = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
            this.i = ao(b);
            Rj(a.body, "top", -this.i + "px")
        }
    };

    function AY(a, b) {
        var c;
        if (!a.j)
            for (a.j = [], c = a.g.parentElement; c;) {
                a.j.push(c);
                if (a.H(c)) break;
                c = c.parentNode && c.parentNode.nodeType === 1 ? c.parentNode : null
            }
        c = a.j.slice();
        let d, e;
        for (d = 0; d < c.length; ++d)(e = c[d]) && b.call(a, e, d, c)
    }
    var BY = class extends Q {
        constructor(a, b, c) {
            super();
            this.g = a;
            this.M = b;
            this.B = c;
            this.j = null;
            wo(this, () => this.j = null)
        }
        H(a) {
            return this.B === a
        }
    };

    function CY(a, b) {
        const c = a.B;
        c && (b ? (iA(a.F), v(c, {
            display: "block"
        }), a.A.body && !a.l && (a.l = zY(a.A, a.M, a.R)), c.setAttribute("tabindex", "0"), c.setAttribute("aria-hidden", "false"), a.A.body.setAttribute("aria-hidden", "true")) : (jA(a.F), v(c, {
            display: "none"
        }), a.l && (a.l(), a.l = null), a.A.body.setAttribute("aria-hidden", "false"), c.setAttribute("aria-hidden", "true")))
    }

    function DY(a) {
        CY(a, !1);
        const b = a.B;
        if (b) {
            var c = EY(a.I);
            AY(a, d => {
                v(d, c);
                fo(d)
            });
            a.g.setAttribute("width", "");
            a.g.setAttribute("height", "");
            Rj(a.g, c);
            Rj(a.g, FY);
            Rj(b, GY);
            Rj(b, {
                background: "transparent"
            });
            v(b, {
                display: "none",
                position: "fixed"
            });
            fo(b);
            fo(a.g);
            lf(a.I) <= 1 || (Rj(b, {
                overflow: "scroll",
                "max-width": "100vw"
            }), Xe(b))
        }
    }
    class HY extends BY {
        constructor(a, b, c) {
            var d = V(Lt);
            super(a, b, c);
            this.l = null;
            this.A = b.document;
            this.R = d;
            this.F = cA(new hA(b), 2147483646);
            this.I = b
        }
    }

    function EY(a) {
        a = lf(a);
        a = 100 * (a < 1 ? 1 : a);
        return {
            width: `${a}vw`,
            height: `${a}vh`
        }
    }
    var GY = {
            backgroundColor: "white",
            opacity: "1",
            position: "fixed",
            left: "0px",
            top: "0px",
            margin: "0px",
            padding: "0px",
            display: "none",
            zIndex: "2147483647"
        },
        FY = {
            left: "0",
            position: "absolute",
            top: "0"
        };
    var IY = class extends HY {
        constructor(a, b, c) {
            super(b, a, c);
            DY(this)
        }
        H(a) {
            return a.classList ? a.classList.contains("adsbygoogle") : $a(a.classList ? a.classList : (typeof a.className == "string" ? a.className : a.getAttribute && a.getAttribute("class") || "").match(/\S+/g) || [], "adsbygoogle")
        }
    };
    const JY = {
        [1]: "closed",
        [2]: "granted",
        [3]: "cancelled"
    };
    async function KY(a, b, c, d) {
        a = new LY(a, b, c, d);
        await a.J();
        return a
    }

    function MY(a) {
        return setTimeout(nw(728, () => {
            NY(() => {
                a.A.reject()
            });
            a.dispose()
        }), V(Ct) * 1E3)
    }

    function OY(a, b) {
        var c = UM(a.g).then(() => {
            clearTimeout(b);
            a.A.resolve()
        });
        W.na(1005, c);
        c = VM(a.g).then(d => {
            PY(a, JY[d.status])
        });
        W.na(1006, c);
        c = WM(a.g).then(() => {
            PY(a, "error")
        });
        W.na(1004, c)
    }

    function QY(a) {
        if (U(Dt)) {
            a.win.location.hash !== "" && ey("pub_hash", {
                o_url: a.win.location.href
            }, .1);
            a.win.location.hash = "goog_fullscreen_ad";
            var b = nw(950, c => {
                c.oldURL.endsWith("#goog_fullscreen_ad") && (a.l === 10 ? PY(a, "closed") : a.g.ue.postMessage(JSON.stringify({
                    eventType: "backButton",
                    googMsgType: "fullscreen"
                }), "*"), a.win.removeEventListener("hashchange", b))
            });
            a.win.addEventListener("hashchange", b);
            wo(a, () => {
                a.win.removeEventListener("hashchange", b);
                a.win.location.hash === "#goog_fullscreen_ad" && a.win.history.back()
            })
        }
    }

    function NY(a) {
        try {
            a()
        } catch (b) {}
    }

    function PY(a, b) {
        CY(a.F, !1);
        a.j && NY(() => {
            a.j(b)
        });
        a.dispose()
    }
    var LY = class extends Q {
        constructor(a, b, c, d) {
            super();
            this.win = a;
            this.B = b;
            this.H = c;
            this.l = d;
            this.j = null;
            this.F = new IY(a, c, b);
            a = new YM(this.l === 10 ? 1 : 2, this.win, this.H.contentWindow);
            a.J();
            this.g = a;
            this.A = new UK;
            this.B.dataset["slotcar" + (this.l === 10 ? "Interstitial" : "Rewarded")] = "true"
        }
        async J() {
            const a = MY(this);
            OY(this, a);
            wo(this, () => {
                this.g.dispose();
                clearTimeout(a);
                ie(this.B)
            });
            await this.A.promise
        }
        show(a) {
            this.C || (this.j = a, CY(this.F, !0), r.IntersectionObserver || this.g.ue.postMessage(JSON.stringify({
                eventType: "visible",
                googMsgType: "fullscreen"
            }), "*"), QY(this))
        }
        disposeAd() {
            this.dispose()
        }
    };

    function RY({
        Tf: a,
        Yg: b
    }) {
        return a || (b === "dev" ? "dev" : "")
    };

    function SY(a, b) {
        a.mf(c => {
            c.shv = String(b);
            c.mjsv = RY({
                Tf: zE(),
                Yg: b
            });
            c.eid = sQ(r)
        })
    };

    function TY(a) {
        var b = W;
        try {
            return Ki(a, Mk), new aQ(JSON.parse(a))
        } catch (c) {
            b.ba(838, c instanceof Error ? c : Error(String(c)))
        }
        return new aQ
    };
    const UY = (a, b) => {
            (0, a.__uspapi)("getUSPData", 1, (c, d) => {
                b.Ra({
                    jc: c ? ? void 0,
                    eg: d ? void 0 : 2
                })
            })
        },
        VY = {
            yd: a => a.Ra,
            Bc: (a, b) => ({
                __uspapiCall: {
                    callId: b,
                    command: "getUSPData",
                    version: 1
                }
            }),
            Pb: (a, b) => {
                b = b.__uspapiReturn;
                a({
                    jc: b.returnValue ? ? void 0,
                    eg: b.success ? void 0 : 2
                })
            }
        };

    function WY(a) {
        let b = {};
        typeof a.data === "string" ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            df: b.__uspapiReturn.callId
        }
    }

    function XY(a, b) {
        let c = {};
        if (DF(a.caller)) {
            var d = Bb(() => {
                b(c)
            });
            FF(a.caller, "getDataWithCallback", {
                Ra: e => {
                    e.eg || (c = e.jc);
                    d()
                }
            });
            setTimeout(d, a.timeoutMs)
        } else b(c)
    }
    var YY = class extends Q {
        constructor(a) {
            super();
            this.timeoutMs = {}.timeoutMs ? ? 500;
            this.caller = new GF(a, "__uspapiLocator", b => typeof b.__uspapi === "function", WY);
            this.caller.B.set("getDataWithCallback", UY);
            this.caller.A.set("getDataWithCallback", VY)
        }
        i() {
            this.caller.dispose();
            super.i()
        }
    };

    function ZY(a, b, c, d) {
        const e = new UK;
        let f = "";
        const h = l => {
            try {
                const m = typeof l.data === "object" ? l.data : JSON.parse(l.data);
                f === m.paw_id && (Ib(a, "message", h), m.error ? e.reject(Error(m.error)) : e.resolve(d(m)))
            } catch (m) {}
        };
        var k = typeof a.gmaSdk ? .getQueryInfo === "function" ? a.gmaSdk : void 0;
        if (k) return Hb(a, "message", h), f = c(k), e.promise;
        c = typeof a.webkit ? .messageHandlers ? .getGmaQueryInfo ? .postMessage === "function" || typeof a.webkit ? .messageHandlers ? .getGmaSig ? .postMessage === "function" ? a.webkit.messageHandlers :
            void 0;
        return c ? (f = String(Math.floor(Ee() * 2147483647)), Hb(a, "message", h), b(c, f), e.promise) : null
    }

    function $Y(a) {
        return ZY(a, (b, c) => void(b.getGmaQueryInfo ? ? b.getGmaSig) ? .postMessage(c), b => b.getQueryInfo(), b => b.signal)
    };
    const aZ = (a, b) => {
        try {
            const l = K(b, 6) === void 0 ? !0 : K(b, 6);
            var c = Zi(oi(b, 2)),
                d = L(b, 3);
            a: switch (oi(b, 4)) {
                case 1:
                    var e = "pt";
                    break a;
                case 2:
                    e = "cr";
                    break a;
                default:
                    e = ""
            }
            var f = new aj(c, d, e),
                h = z(b, Ui, 5) ? .g() ? ? "";
            f.xc = h;
            f.g = l;
            f.win = a;
            var k = f.build();
            Si(k)
        } catch {}
    };

    function bZ(a, b) {
        a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {
            value: !0
        }), a.document.readyState === "complete" ? aZ(a, b) : Hb(a, "load", () => void aZ(a, b)))
    };

    function cZ(a) {
        const b = RegExp("^https?://[^/#?]+/?$");
        return !!a && !b.test(a)
    }

    function dZ(a) {
        if (a === a.top || xe(a.top)) return Promise.resolve({
            status: 4
        });
        a: {
            try {
                var b = (a.top ? .frames ? ? {}).google_ads_top_frame;
                break a
            } catch (d) {}
            b = null
        }
        if (!b) return Promise.resolve({
            status: 2
        });
        if (a.parent === a.top && cZ(a.document.referrer)) return Promise.resolve({
            status: 3
        });
        const c = new UK;
        a = new MessageChannel;
        a.port1.onmessage = d => {
            d.data.msgType === "__goog_top_url_resp" && c.resolve({
                qc: d.data.topUrl,
                status: d.data.topUrl ? 0 : 1
            })
        };
        b.postMessage({
            msgType: "__goog_top_url_req"
        }, "*", [a.port2]);
        return c.promise
    };

    function RE() {
        return navigator.cookieDeprecationLabel ? Promise.race([navigator.cookieDeprecationLabel.getValue().then(a => ({
            status: 1,
            label: a
        })).catch(() => ({
            status: 2
        })), hf(V(xt), {
            status: 5
        })]) : Promise.resolve({
            status: 3
        })
    }

    function eZ(a) {
        a = a.innerInsElement;
        if (!a) throw Error("no_wrapper_element_in_loader_provided_slot");
        return a
    }
    async function fZ({
        ma: a,
        xa: b,
        Wa: c,
        slot: d
    }) {
        const e = d.vars,
            f = Ae(d.pubWin),
            h = eZ(d),
            k = new uQ({
                K: f,
                pubWin: d.pubWin,
                D: e,
                ma: a,
                xa: b,
                Wa: c,
                ea: h
            });
        k.H = Date.now();
        Bj(1, [k.D]);
        mw(1032, () => {
            if (f && U(Wt)) {
                var l = k.D;
                IE(DE(), 32, !1) || (JE(DE(), 32, !0), ZU(f, l.google_loader_used === "sd" ? 5 : 9))
            }
        });
        try {
            await gZ(k)
        } catch (l) {
            if (!W.ba(159, l, void 0, void 0)) throw l;
        }
        mw(639, () => {
            var l;
            var m = k.D;
            (l = k.K) && m.google_responsive_auto_format === 1 && m.google_full_width_responsive_allowed === !0 ? (m = (m = l.document.getElementById(m.google_async_iframe_id)) ?
                oe(m, "INS", "adsbygoogle") : null) ? (l = new UP(l, m), l.g = r.setInterval(Ja(l.i, l), 500), l.i(), l = !0) : l = !1 : l = !1;
            return l
        });
        f ? .location ? .hash ? .match(/\bgoog_cpmi=([^&]*)/) ? fy(1008, hZ(d.pubWin, f, e, k.j, Hi(GV()), k.g, L(a, 8)), l => {
            l.es = uY(null).join(",")
        }) : RM(k.pubWin, "affa", l => {
            fy(1008, hZ(d.pubWin, f, e, k.j, l.config, k.g, L(a, 8)), m => {
                m.es = uY(null).join(",")
            });
            return !0
        });
        iZ(k);
        return k
    }
    async function hZ(a, b, c, d, e, f, h) {
        await qY(a, b, c, d, e, f, h)
    }

    function gZ(a) {
        if (/_sdo/.test(a.D.google_ad_format)) return Promise.resolve();
        var b = a.pubWin;
        qQ(13, b);
        qQ(11, b);
        a.F = pi(a.ma, ZP, 13, bQ) ? .g() ? ? U(At);
        b = DE();
        var c = IE(b, 23, !1);
        c || JE(b, 23, !0);
        if (!c) {
            b = a.D.google_ad_client;
            c = a.ma;
            b = Ih(c, ZP, $h(c, bQ) === 13 ? 13 : -1) !== void 0 ? z(pi(c, ZP, 13, bQ), SK, 2) : mb(pi(c, $P, 14, bQ) ? .g() ? ? [], [b]) ? z(z(pi(c, $P, 14, bQ), ZP, 2), SK, 2) : new SK;
            c = a.pubWin;
            var d = a.D.google_ad_client,
                e = K(a.ma, 6),
                f = K(a.ma, 20);
            b = new TK(c, d, b, e, f);
            b.i = !0;
            c = z(b.C, Mq, 1);
            if (b.i && (d = b.g, b.j && !vE(c) ? (e = new JK, e = Fh(e,
                    1, xg(1))) : e = null, e)) {
                e = Hi(e);
                try {
                    d.localStorage.setItem("google_auto_fc_cmp_setting", e)
                } catch (h) {}
            }
            d = vE(c) && (b.j || b.A);
            c && d && rF(new sF(b.g, new aG(b.g, b.l), c, new hA(b.g)))
        }
        b = !Jj() && !Qd();
        return !b || b && !jZ(a) ? kZ(a) : Promise.resolve()
    }

    function lZ(a, b, c = !1) {
        b = qO(a.K, b);
        const d = Nj() || mO(a.pubWin.top);
        if (!b || b.y === -12245933 || d.width === -12245933 || d.height === -12245933 || !d.height) return 0;
        let e = 0;
        try {
            const f = a.pubWin.top;
            e = oO(f.document, f).y
        } catch (f) {
            return 0
        }
        a = e + d.height;
        return b.y < e ? c ? 0 : (e - b.y) / d.height : b.y > a ? (b.y - a) / d.height : 0
    }

    function jZ(a) {
        return mZ(a) || nZ(a)
    }

    function mZ(a) {
        const b = a.D;
        if (!b.google_pause_ad_requests) return !1;
        const c = r.setTimeout(() => {
                ey("abg:cmppar", {
                    client: a.D.google_ad_client,
                    url: a.D.google_page_url
                })
            }, 1E4),
            d = nw(450, () => {
                b.google_pause_ad_requests = !1;
                r.clearTimeout(c);
                a.pubWin.removeEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
                if (!jZ(a)) {
                    const e = kZ(a);
                    W.na(1222, e)
                }
            });
        a.pubWin.addEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
        return !0
    }

    function nZ(a) {
        const b = a.pubWin.document,
            c = a.ea;
        if (QO(b) === 3) return TO(nw(332, () => {
            if (!oZ(a, pZ().visible, c)) {
                const h = kZ(a);
                W.na(1222, h)
            }
        }), b), !0;
        const d = pZ();
        if (d.hidden < 0 && d.visible < 0) return !1;
        const e = RO(b);
        if (!e) return !1;
        if (!SO(b)) return oZ(a, d.visible, c);
        if (lZ(a, c) <= d.hidden) return !1;
        let f = nw(332, () => {
            if (!SO(b) && f) {
                Ib(b, e, f);
                if (!oZ(a, d.visible, c)) {
                    const h = kZ(a);
                    W.na(1222, h)
                }
                f = null
            }
        });
        return Hb(b, e, f)
    }

    function pZ() {
        var a = V(Mr);
        const b = V(Nr);
        return b === 3 && a === 6 ? (a = {
            hidden: 0,
            visible: 3
        }, r.IntersectionObserver || (a.visible = -1), se() && (a.visible *= 2), a) : {
            hidden: 0,
            visible: r.IntersectionObserver ? se() ? a : b : -1
        }
    }

    function oZ(a, b, c) {
        if (!c || b < 0) return !1;
        var d = a.D;
        if (!Zn(d.google_reactive_ad_format) && (qP(d) || d.google_reactive_ads_config) || !pO(c) || lZ(a, c) <= b) return !1;
        var e = DE(),
            f = IE(e, 8, {});
        e = IE(e, 9, {});
        d = d.google_ad_section || d.google_ad_region || "";
        const h = !!a.pubWin.google_apltlad;
        if (!f[d] && !e[d] && !h) return !1;
        f = new Promise(k => {
            const l = new r.IntersectionObserver((m, n) => {
                Ua(m, p => {
                    p.intersectionRatio <= 0 || (n.unobserve(p.target), k(void 0))
                })
            }, {
                rootMargin: `${b*100}%`
            });
            a.I = l;
            l.observe(c)
        });
        e = new Promise(k => {
            c.addEventListener("adsbygoogle-close-to-visible-event",
                () => {
                    k(void 0)
                })
        });
        la(Promise, "any").call(Promise, [f, e]).then(() => {
            mw(294, () => {
                const k = kZ(a);
                W.na(1222, k)
            })
        });
        return !0
    }

    function kZ(a) {
        mw(326, () => {
            var c = a.pubWin,
                d = a.K,
                e = a.ma,
                f = a.xa;
            if (hk(a.D) === 1) {
                var h = U(Xt);
                if ((h || U(Vt)) && c === d) {
                    var k = new mj;
                    d = new nj;
                    var l = k.setCorrelator(ff(c));
                    var m = sQ(c);
                    l = Fi(l, 5, m);
                    N(l, 2, 1);
                    k = C(d, 1, k);
                    l = new lj;
                    l = M(l, 10, !0);
                    m = U(Qt);
                    l = M(l, 8, m);
                    m = U(Rt);
                    l = M(l, 12, m);
                    m = U(Ut);
                    l = M(l, 7, m);
                    m = U(Tt);
                    l = M(l, 13, m);
                    C(k, 2, l);
                    c.google_rum_config = Ii(d);
                    e = K(e, 9) && h ? f.Aj : f.Bj;
                    Be(c.document, e)
                } else zk(lw)
            }
        });
        a.D.google_ad_channel = qZ(a, a.D.google_ad_channel);
        a.D.google_tag_partner = rZ(a, a.D.google_tag_partner);
        sZ(a);
        const b = a.D.google_start_time;
        typeof b === "number" && (In = b, a.D.google_start_time = null);
        kO(a);
        a.K && uP(a.K, dc(a.xa.ki, YK()));
        ME() && iL({
            win: a.pubWin,
            webPropertyCode: a.D.google_ad_client,
            jb: dc(a.xa.jb, YK())
        });
        qP(a.D) && (gL() && (a.D.google_adtest = a.D.google_adtest || "on"), a.D.google_pgb_reactive = a.D.google_pgb_reactive || 3);
        return tZ(a)
    }

    function qZ(a, b) {
        return (b ? [b] : []).concat(SE(a.pubWin).ad_channels || []).join("+")
    }

    function rZ(a, b) {
        return (b ? [b] : []).concat(SE(a.pubWin).tag_partners || []).join("+")
    }

    function uZ(a) {
        const b = Ce("IFRAME");
        Fe(a, (c, d) => {
            c != null && b.setAttribute(d, c)
        });
        return b
    }

    function vZ(a, b, c) {
        return a.D.google_reactive_ad_format === 9 && oe(a.ea, null, "fsi_container") ? (a.ea.appendChild(b), Promise.resolve(b)) : BP(a.xa.Sg, 525, d => {
            a.ea.appendChild(b);
            const e = qj(c, a.pubWin);
            d.createAdSlot(a.K, a.D, b, a.ea.parentElement, e);
            return b
        })
    }

    function wZ(a, b, c, d) {
        hF();
        P(iF).Zc = a.D.google_page_url;
        bZ(a.pubWin, Xi(Wi(N(N(Vi(new Yi, Ti(new Ui, String(ff(a.pubWin)))), 4, 1), 2, 1), L(a.ma, 2)), d.g()));
        const e = a.K;
        if (a.D.google_acr)
            if (a.D.google_wrap_fullscreen_ad) {
                const h = a.D.google_acr;
                KY(a.pubWin, a.ea.parentElement, b, a.D.google_reactive_ad_format).then(h).catch(() => {
                    h(null)
                })
            } else a.D.google_acr(b);
        Hb(b, "load", () => {
            b && b.setAttribute("data-load-complete", !0);
            const h = e ? SE(e).enable_overlap_observer || !1 : !1;
            (a.D.ovlp || h) && e && e === a.pubWin && xZ(e, a, a.ea,
                b)
        });
        d = h => {
            h && a.j.push(() => {
                h.dispose()
            })
        };
        const f = yZ(a, b);
        yO(a.pubWin, a.g, b.contentWindow, a.j);
        !e || qP(a.D) && !EP(a.D) || (a.D.no_resize || d(new FR(e, b, a.ea)), d(new XQ(a, b)), d(e.IntersectionObserver ? null : new ZQ(e, b, a.ea)), d(MR(e, b, a.D, a.ea, nw(1225, () => {
            f();
            for (const h of a.j) h();
            a.j.length = 0
        }))));
        e && (d(RQ(e, b, a.g)), a.j.push(OP(e, a.D)), P(TP).J(e), a.j.push(KQ(e, a.ea, b)));
        b && b.setAttribute("data-google-container-id", c);
        c = a.D.iaaso;
        if (c != null) {
            d = a.ea;
            const h = d.parentElement;
            (h && pu.test(h.className) ? h : d).setAttribute("data-auto-ad-size",
                c)
        }
        b.setAttribute("tabindex", "0");
        b.setAttribute("title", "Advertisement");
        b.setAttribute("aria-label", "Advertisement");
        zZ(a);
        SR(a)
    }

    function yZ(a, b) {
        const c = a.pubWin,
            d = a.D.google_ad_client,
            e = LE();
        let f = null;
        const h = QM(c, "pvt", (k, l) => {
            typeof k.token === "string" && l.source === b.contentWindow && (f = k.token, h(), e[d] = e[d] || [], e[d].push(f), e[d].length > 100 && e[d].shift())
        });
        a.j.push(h);
        return () => {
            f && Array.isArray(e[d]) && (bb(e[d], f), e[d].length || delete e[d], f = null)
        }
    }

    function zZ(a) {
        const b = Jj(a.pubWin);
        if (b)
            if (b.container === "AMP-STICKY-AD") {
                const c = d => {
                    d.data === "fill_sticky" && b.renderStart && b.renderStart()
                };
                Hb(a.pubWin, "message", W.Da(616, c));
                a.j.push(() => {
                    Ib(a.pubWin, "message", c)
                })
            } else b.renderStart && b.renderStart()
    }

    function xZ(a, b, c, d) {
        oN(new xN(a), c).then(e => {
            Bj(8, [e]);
            return e
        }).then(e => {
            const f = c.parentElement;
            (f && pu.test(f.className) ? f : c).setAttribute("data-overlap-observer-io", String(e.wg));
            return e
        }).then(e => {
            const f = b.D.armr || "",
                h = e.Bi || "",
                k = b.D.iaaso == null ? "" : Number(b.D.iaaso),
                l = Number(e.wg),
                m = Xa(e.entries, D => `${D.ub}:${D.Jg}:${D.Kg}`),
                n = Number(e.qj.toFixed(2)),
                p = d.dataset.googleQueryId || "",
                q = n * e.Xb.width * e.Xb.height,
                t = `${e.Xg.scrollX},${e.Xg.scrollY}`,
                w = ik(e.target),
                A = [e.Xb.left, e.Xb.top, e.Xb.right,
                    e.Xb.bottom
                ].join();
            e = `${e.mh.width}x${e.mh.height}`;
            ey("ovlp", {
                adf: b.D.google_ad_dom_fingerprint,
                armr: f,
                client: b.D.google_ad_client,
                eid: sQ(b.D),
                et: h,
                fwrattr: b.D.google_full_width_responsive,
                iaaso: k,
                io: l,
                saldr: b.D.google_loader_used,
                oa: n,
                oe: m.join(","),
                qid: p,
                rafmt: b.D.google_responsive_auto_format,
                roa: q,
                slot: b.D.google_ad_slot,
                sp: t,
                tgt: w,
                tr: A,
                url: b.D.google_page_url,
                vp: e,
                pvc: ff(a)
            }, 1)
        }).catch(e => {
            Bj(8, ["Error:", e.message, c]);
            ey("ovlp-err", {
                err: e.message
            }, 1)
        })
    }

    function AZ(a, b) {
        b.allow = b.allow && b.allow.length > 0 ? b.allow + ("; " + a) : a
    }

    function BZ(a, b, c) {
        var d = a.D,
            e = d.google_async_iframe_id;
        const f = d.google_ad_width,
            h = d.google_ad_height,
            k = FP(d);
        e = {
            id: e,
            name: e
        };
        var l = a.D,
            m = a.C;
        iQ("browsing-topics", a.pubWin.document) && IQ(c, l) && !U(Et) && !FQ(m ? .label) && (e.browsingTopics = "true");
        e.style = k ? [`width:${f}px !IMPORTANT`, `height:${h}px !IMPORTANT`].join(";") : "left:0;position:absolute;top:0;border:0;" + `width:${f}px;` + `height:${h}px;`;
        l = Re();
        l["allow-top-navigation-by-user-activation"] && l["allow-popups-to-escape-sandbox"] && (k || (l = "=" + encodeURIComponent("1"),
            b = ve(b, "fsb" + l)), e.sandbox = Qe().join(" "));
        d.google_video_play_muted === !1 && AZ("autoplay", e);
        l = b;
        l.length > 61440 && (l = l.substring(0, 61432), l = l.replace(/%\w?$/, ""), l = l.replace(/&[^=]*=?$/, ""), l += "&trunc=1");
        l !== b && (m = b.lastIndexOf("&", 61432), m === -1 && (m = b.lastIndexOf("?", 61432)), ey("trn", {
            ol: b.length,
            tr: m === -1 ? "" : b.substring(m + 1),
            url: b
        }, .01));
        b = l;
        f != null && (e.width = String(f));
        h != null && (e.height = String(h));
        e.frameborder = "0";
        e.marginwidth = "0";
        e.marginheight = "0";
        e.vspace = "0";
        e.hspace = "0";
        e.allowtransparency =
            "true";
        e.scrolling = "no";
        d.dash && (e.srcdoc = d.dash);
        hQ("attribution-reporting", a.pubWin.document) && AZ("attribution-reporting", e);
        hQ("run-ad-auction", a.pubWin.document) && AZ("run-ad-auction", e);
        U(tt) && (d = a.pubWin, d.credentialless !== void 0 && (U(ut) || d.crossOriginIsolated) && (e.credentialless = "true"));
        if (k) e.src = b, e = uZ(e), a = vZ(a, e, c);
        else {
            c = {};
            c.dtd = xQ((new Date).getTime(), In);
            c = dk(c, b);
            e.src = c;
            c = a.pubWin;
            c = c == c.top;
            e = uZ(e);
            c && a.j.push(Pj(a.pubWin, e));
            a.ea.style.visibility = "visible";
            for (a = a.ea; c = a.firstChild;) a.removeChild(c);
            a.appendChild(e);
            a = Promise.resolve(e)
        }
        return a
    }
    async function CZ(a) {
        var b = a.D,
            c = a.pubWin;
        const d = a.g;
        DZ(a);
        d.g() && xO(new wO(a.pubWin), a.g, a.pubWin.location.hostname);
        var e = qj(d, a.pubWin);
        if (!(d.g() || U(zt) && a.F)) return ey("afc_noc_req", {
            client: a.D.google_ad_client,
            isGdprCountry: K(a.ma, 6).toString()
        }, V(Lr)), Promise.resolve();
        var f = EZ(a.xa, d);
        f && document.documentElement.appendChild(f);
        !U(vt) || U(zt) && !d.g() || (a.C = await QE());
        a.G = GQ(a.pubWin, d);
        rQ(a.pubWin, d);
        if (f = a.D.google_reactive_ads_config) {
            AP(a.K, f);
            const h = qj(d);
            GP(f, a, h);
            f = f.page_level_pubvars;
            Da(f) && Pb(a.D, f)
        }
        f = iQ("shared-storage", a.pubWin.document);
        a.G && d.g() && f && !U(st) && !IE(DE(), 34, !1) && (JE(DE(), 34, !0), f = a.G.then(h => {
            h({
                message: "goog:spam:client_age",
                pvsid: ff(a.pubWin)
            })
        }), W.na(1069, f));
        await HQ(a, a.pubWin, d, a.D, a.G, a.C);
        await a.A ? .mi;
        f = "";
        FP(b) ? (f = (d.g() ? a.xa.th : a.xa.sh).toString() + "#" + (encodeURIComponent("RS-" + b.google_reactive_sra_index + "-") + "&" + ck({
            adk: b.google_ad_unit_key,
            client: b.google_ad_client,
            fa: b.google_reactive_ad_format
        })), mV(b, DE()), FZ(b)) : (b.google_pgb_reactive === 5 && b.google_reactive_ads_config ||
            !rP(b) || pP(c, b, e)) && FZ(b) && (f = dV(a, d));
        Bj(2, [b, f]);
        if (!f) return Promise.resolve();
        b.google_async_iframe_id || gk(c);
        e = hk(b);
        b = a.pubWin === a.K ? "a!" + e.toString(36) : `${e.toString(36)}.${Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)}`;
        c = lZ(a, a.ea, !0) > 0;
        e = {
            ifi: e,
            uci: b
        };
        c && (c = DE(), e.btvi = IE(c, 21, 1), KE(c, 21));
        f = dk(e, f);
        c = BZ(a, f, d);
        a.D.rpe && DR(a.pubWin, a.ea, {
            height: a.D.google_ad_height,
            qf: "force",
            Pc: !0,
            ff: !0,
            ce: a.D.google_ad_client
        });
        c = await c;
        try {
            wZ(a, c, b, d)
        } catch (h) {
            W.ba(223, h, void 0, void 0)
        }
    }

    function GZ(a) {
        const b = new YY(a);
        return new Promise(c => {
            XY(b, d => {
                d && typeof d.uspString === "string" ? c(d.uspString) : c(null)
            })
        })
    }

    function HZ(a) {
        var b = Se(r.top, "googlefcPresent");
        r.googlefc && !b && ey("adsense_fc_has_namespace_but_no_iframes", {
            publisherId: a
        }, 1)
    }

    function IZ(a, b) {
        return KF(a, b === ".google.cn") ? LF(a) : Promise.resolve(null)
    }

    function JZ(a, b, c) {
        var d = c.Pj,
            e = c.uspString;
        c = c.Ni;
        d && vQ(a, d, b);
        e && (b = Ei(a, 1, e), e = e.toUpperCase(), e.length == 4 && (e.indexOf("-") == -1 || e.substring(1) === "---") && e[0] >= "1" && e[0] <= "9" && lL.hasOwnProperty(e[1]) && lL.hasOwnProperty(e[2]) && lL.hasOwnProperty(e[3]) ? (d = new kL, d = vi(d, 1, parseInt(e[0], 10)), d = N(d, 2, lL[e[1]]), d = N(d, 3, lL[e[2]]), e = N(d, 4, lL[e[3]])) : e = null, e = e ? .Ki() === 2, ti(b, 13, e));
        c && KO(a, c)
    }

    function KZ(a) {
        const b = V(Jr);
        if (b <= 0) return null;
        const c = sk(),
            d = $Y(a.pubWin);
        if (!d) return null;
        a.B = "0";
        return Promise.race([d, hf(b, "0")]).then(e => {
            ey("adsense_paw", {
                time: sk() - c
            });
            e ? .length > 1E4 ? W.ba(809, Error(`ML:${e.length}`), void 0, void 0) : a.B = e
        }).catch(e => {
            W.ba(809, e, void 0, void 0)
        })
    }

    function DZ(a) {
        var b = a.pubWin;
        const c = a.ea;
        var d = a.D;
        const e = a.Wa,
            f = V(Nt);
        d = !Zn(d.google_reactive_ad_format) && (qP(d) || d.google_reactive_ads_config);
        if (!(a.A ? .Le || f <= 0 || Ae(b) || !r.IntersectionObserver || d)) {
            a.A = {};
            var h = V(Ot),
                k = new un(e),
                l = sk();
            b = new Promise(m => {
                let n = 0;
                const p = a.A,
                    q = new r.IntersectionObserver(nw(1236, t => {
                        if (t = t.find(w => w.target === c)) k.B.g.g.g.g.g({
                            jf: sk() - l,
                            Qj: ++n
                        }), p.Yi = t.isIntersecting && t.intersectionRatio >= h, m()
                    }), {
                        threshold: [h]
                    });
                q.observe(c);
                p.Le = q
            });
            a.A.mi = Promise.race([b, hf(f,
                null)]).then(m => {
                k.B.g.g.g.i.g({
                    jf: sk() - l,
                    status: m === null ? "TIMEOUT" : "OK"
                })
            })
        }
    }

    function LZ(a) {
        const b = sk();
        return Promise.race([mw(832, () => dZ(a)), hf(200)]).then(c => {
            ey("afc_etu", {
                etus: c ? .status ? ? 100,
                sig: sk() - b,
                tms: 200
            });
            return c ? .qc
        })
    }
    async function MZ(a) {
        const b = sk(),
            c = a.ma;
        jF(h => {
            if (oi(h, 1) === 0) {
                var k = !!K(c, 6);
                h = M(h, 2, k);
                k = !!K(c, 20);
                h = M(h, 6, k);
                N(h, 1, 1)
            }
        });
        GM(a.pubWin);
        HZ(a.D.google_ad_client);
        jF(h => {
            oi(h, 1) === 1 && N(h, 1, 2)
        });
        var d = new NF(a.pubWin);
        await IZ(d, L(c, 8));
        jF(h => {
            oi(h, 1) === 2 && (h = M(h, 3, !0), N(h, 1, 3))
        });
        d = K(c, 6);
        var e = K(c, 25);
        a.g = NK(MK(new OK, !(d && !NM())), e && navigator.globalPrivacyControl);
        e = [wQ(a), GZ(a.pubWin), LO(a)];
        e = await Promise.all(e);
        JZ(a.g, d, {
            Pj: e[0],
            uspString: e[1],
            Ni: e[2]
        });
        const f = sk();
        jF(h => {
            if (oi(h, 1) === 3) {
                h =
                    M(h, 3, f - b > 500);
                var k = !!a.g ? .A();
                h = M(h, 4, k);
                k = !!a.g ? .g();
                h = M(h, 5, k);
                k = !!a.g ? .j();
                h = M(h, 7, k);
                k = !!a.g ? .l();
                h = M(h, 8, k);
                N(h, 1, 4)
            }
        })
    }
    async function NZ(a) {
        const b = KZ(a),
            c = mw(868, () => LZ(a.pubWin));
        await MZ(a);
        await b;
        a.qc = await c || "";
        await CZ(a)
    }

    function tZ(a) {
        jf(a.pubWin) !== a.pubWin && (a.i |= 4);
        QO(a.pubWin.document) === 3 && (a.i |= 32);
        var b;
        if (b = a.K) {
            b = a.K;
            const c = Sn(b);
            b = !(Xn(b).scrollWidth <= c)
        }
        b && (a.i |= 1024);
        a.pubWin.Prototype ? .Version && (a.i |= 16384);
        a.D.google_loader_features_used && (a.i |= a.D.google_loader_features_used);
        return NZ(a)
    }

    function FZ(a) {
        const b = DE(),
            c = a.google_ad_section;
        qP(a) && KE(b, 15);
        if (kk(a)) {
            if (KE(b, 5) > 100) return !1
        } else if (KE(b, 6) - IE(b, 15, 0) > 100 && c === "") return !1;
        return !0
    }

    function EZ(a, b) {
        a: {
            var c = [r.top];
            var d = [];
            let f = 0,
                h;
            for (; h = c[f++];) {
                d.push(h);
                try {
                    if (h.frames)
                        for (let k = 0; k < h.frames.length && c.length < 1024; ++k) c.push(h.frames[k])
                } catch {}
            }
            c = d;
            for (d = 0; d < c.length; d++) try {
                var e = c[d].frames.google_esf;
                if (e) {
                    jj = e;
                    break a
                }
            } catch (k) {}
            jj = null
        }
        if (jj) return null;e = Ce("IFRAME");e.id = "google_esf";e.name = "google_esf";a = b.g() ? a.th : a.sh;e.src = fc(a).toString();e.style.display = "none";
        return e
    }

    function iZ(a) {
        U(Dr) && NE() && r.setTimeout(nw(1244, () => void cO(a.K || a.pubWin, {
            Va: K(a.ma, 6)
        })), 1E3)
    }

    function sZ(a) {
        const b = a.K;
        if (b && !SE(b).ads_density_stats_processed && !Jj(b) && (SE(b).ads_density_stats_processed = !0, U(us) || Ee() < .01)) {
            const c = () => {
                if (b) {
                    var d = hJ(cJ(b), a.D.google_ad_client, b.location.hostname, sQ(a.D).split(","));
                    ey("ama_stats", d, 1)
                }
            };
            gf(b, () => {
                r.setTimeout(c, 1E3)
            })
        }
    };
    (function(a, b, c) {
        mw(843, () => {
            if (!r.google_sa_impl) {
                var d = new yn(b);
                try {
                    og(l => {
                        var m = new en;
                        var n = new dn;
                        try {
                            var p = ff(window);
                            Di(n, 1, p)
                        } catch (A) {}
                        try {
                            var q = P(Bn).g();
                            Th(n, 2, q, zg)
                        } catch (A) {}
                        try {
                            Fi(n, 3, window.document.URL)
                        } catch (A) {}
                        m = C(m, 2, n);
                        n = new cn;
                        n = N(n, 1, 1192);
                        try {
                            var t = Mk(l ? .name) ? l.name : "Unknown error";
                            Fi(n, 2, t)
                        } catch (A) {}
                        try {
                            var w = Mk(l ? .message) ? l.message : `Caught ${l}`;
                            Fi(n, 3, w)
                        } catch (A) {}
                        try {
                            const A = Mk(l ? .stack) ? l.stack : Error().stack;
                            A && Th(n, 4, A.split(/\n\s*/), Rg)
                        } catch (A) {}
                        l = C(m, 1, n);
                        t = new bn;
                        try {
                            Fi(t, 1, zE())
                        } catch {}
                        E(l, 6, fn, t);
                        Di(l, 5, 1);
                        pn(d, l)
                    })
                } catch (l) {}
                var e = TY(a);
                SY(W, L(e, 2));
                eQ(K(e, 6));
                Bj(16, [3, Ii(e)]);
                var f = RY({
                        Tf: b,
                        Yg: L(e, 2)
                    }),
                    h = c(f, e);
                r.google_sa_impl = l => fZ({
                    ma: e,
                    xa: h,
                    Wa: f,
                    slot: l
                });
                oQ(gQ(r));
                r.google_process_slots ? .();
                var k = (r.Prototype || {}).Version;
                k != null && ey("prtpjs", {
                    version: k
                })
            }
        })
    })(typeof sttc === "undefined" ? void 0 : sttc, zE(), function(a, b) {
        const c = li(b, 1) > 2012 ? `_fy${li(b,1)}` : "",
            d = L(b, 3);
        b = L(b, 2);
        return {
            Bj: id `https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/rum${c}.js`,
            Aj: id `https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/rum_debug${c}.js`,
            Sg: id `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/${""}reactive_library${c}.js`,
            ki: id `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/${""}debug_card_library${c}.js`,
            Bo: id `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/${""}slotcar_library${c}.js`,
            oo: id `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/gallerify${c}.js`,
            jb: id `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/${""}autogames${c}.js`,
            th: id `https://googleads.g.doubleclick.net/pagead/html/${b}/${d}/zrt_lookup${c}.html`,
            sh: id `https://pagead2.googlesyndication.com/pagead/html/${b}/${d}/zrt_lookup${c}.html`
        }
    });
}).call(this, "[2021,\"r20240724\",\"r20110914\",null,null,null,null,\".google.com.pk\",null,null,null,null,null,null,null,null,null,-1,[44759876,44759927,44759842]]");