(function(sttc) {
    'use strict';
    var aa = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function ba(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var ca = ba(this),
        da = typeof Symbol === "function" && typeof Symbol("x") === "symbol",
        ea = {},
        fa = {};

    function ha(a, b, c) {
        if (!c || a != null) {
            c = fa[b];
            if (c == null) return a[b];
            c = a[c];
            return c !== void 0 ? c : a[b]
        }
    }

    function ia(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = d.length === 1;
            var e = d[0],
                f;!a && e in ea ? f = ea : f = ca;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = da && c === "es6" ? f[d] : null;b = b(c);b != null && (a ? aa(ea, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (fa[d] === void 0 && (a = Math.random() * 1E9 >>> 0, fa[d] = da ? ca.Symbol(d) : "$jscp$" + a + "$" + d), aa(f, fa[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    ia("Symbol.dispose", function(a) {
        return a ? a : Symbol("Symbol.dispose")
    }, "es_next");
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var l = this || self;

    function ja(a, b) {
        a: {
            var c = ["CLOSURE_FLAGS"];
            for (var d = l, e = 0; e < c.length; e++)
                if (d = d[c[e]], d == null) {
                    c = null;
                    break a
                }
            c = d
        }
        a = c && c[a];
        return a != null ? a : b
    }

    function ka(a) {
        var b = typeof a;
        return b == "object" && a != null || b == "function"
    }

    function la(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function ma(a, b, c) {
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

    function na(a, b, c) {
        na = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? la : ma;
        return na.apply(null, arguments)
    }

    function oa(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function pa(a, b) {
        a = a.split(".");
        var c = l || l;
        a[0] in c || typeof c.execScript == "undefined" || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || b === void 0 ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function qa(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Y = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.nb = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    }

    function ra(a) {
        return a
    };
    var sa;

    function ta(a) {
        l.setTimeout(() => {
            throw a;
        }, 0)
    };
    var va = /&/g,
        wa = /</g,
        xa = />/g,
        ya = /"/g,
        za = /'/g,
        Aa = /\x00/g,
        Ba = /[\x00&<>"']/;
    var Ca = ja(610401301, !1),
        Da = ja(188588736, !0),
        Ea = ja(645172343, ja(1, !0));

    function Fa() {
        var a = l.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var n;
    const Ga = l.navigator;
    n = Ga ? Ga.userAgentData || null : null;

    function Ha(a) {
        return Ca ? n ? n.brands.some(({
            brand: b
        }) => b && b.indexOf(a) != -1) : !1 : !1
    }

    function p(a) {
        return Fa().indexOf(a) != -1
    };

    function r() {
        return Ca ? !!n && n.brands.length > 0 : !1
    }

    function Ia() {
        return r() ? !1 : p("Trident") || p("MSIE")
    }

    function Ja() {
        return r() ? Ha("Chromium") : (p("Chrome") || p("CriOS")) && !(r() ? 0 : p("Edge")) || p("Silk")
    };

    function Ka(a, b) {
        if (typeof a === "string") return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function La(a, b) {
        const c = a.length,
            d = typeof a === "string" ? a.split("") : a;
        for (let e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function Ma(a, b) {
        var c = a.length;
        const d = typeof a === "string" ? a.split("") : a;
        for (--c; c >= 0; --c) c in d && b.call(void 0, d[c], c, a)
    }

    function Na(a, b) {
        b = Ka(a, b);
        let c;
        (c = b >= 0) && Array.prototype.splice.call(a, b, 1);
        return c
    }

    function Oa(a, b) {
        let c = 0;
        Ma(a, function(d, e) {
            b.call(void 0, d, e, a) && Array.prototype.splice.call(a, e, 1).length == 1 && c++
        })
    };

    function Pa(a) {
        Pa[" "](a);
        return a
    }
    Pa[" "] = function() {};

    function Qa(a, b) {
        try {
            return Pa(a[b]), !0
        } catch (c) {}
        return !1
    };
    var Ra = Ia(),
        Sa = p("Gecko") && !(Fa().toLowerCase().indexOf("webkit") != -1 && !p("Edge")) && !(p("Trident") || p("MSIE")) && !p("Edge"),
        Ta = Fa().toLowerCase().indexOf("webkit") != -1 && !p("Edge");
    !p("Android") || Ja();
    Ja();
    p("Safari") && (Ja() || (r() ? 0 : p("Coast")) || (r() ? 0 : p("Opera")) || (r() ? 0 : p("Edge")) || (r() ? Ha("Microsoft Edge") : p("Edg/")) || r() && Ha("Opera"));
    let Ua = 0,
        Va = 0;

    function Xa(a) {
        const b = a >>> 0;
        Ua = b;
        Va = (a - b) / 4294967296 >>> 0
    }

    function Ya(a) {
        if (a < 0) {
            Xa(-a);
            a = Ua;
            var b = Va;
            b = ~b;
            a ? a = ~a + 1 : b += 1;
            const [c, d] = [a, b];
            Ua = c >>> 0;
            Va = d >>> 0
        } else Xa(a)
    }

    function Za() {
        var a = Ua,
            b = Va;
        if (b & 2147483648) var c = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0));
        else b >>>= 0, a >>>= 0, b <= 2097151 ? c = "" + (4294967296 * b + a) : c = "" + (BigInt(b) << BigInt(32) | BigInt(a));
        return c
    };

    function $a(a) {
        return Array.prototype.slice.call(a)
    };
    var t = Symbol(),
        ab = Symbol(),
        bb = Symbol();

    function cb(a, b) {
        b[t] = (a | 34) & -14557
    };
    var db = {},
        eb = {};

    function fb(a) {
        return !(!a || typeof a !== "object" || a.g !== eb)
    }

    function gb(a) {
        return a !== null && typeof a === "object" && !Array.isArray(a) && a.constructor === Object
    }

    function hb(a, b, c) {
        if (!Array.isArray(a) || a.length) return !1;
        const d = a[t] | 0;
        if (d & 1) return !0;
        if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
        a[t] = d | 1;
        return !0
    }
    var ib;
    const jb = [];
    jb[t] = 55;
    ib = Object.freeze(jb);

    function kb(a) {
        if (a & 2) throw Error();
    }
    Object.freeze({});
    var lb = Object.freeze({});

    function mb(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };
    let nb, ob;

    function pb(a) {
        if (ob) throw Error("");
        ob = b => {
            l.setTimeout(() => {
                a(b)
            }, 0)
        }
    }

    function qb(a) {
        if (ob) try {
            ob(a)
        } catch (b) {
            throw b.cause = a, b;
        }
    }

    function rb(a) {
        a = Error(a);
        mb(a, "warning");
        qb(a);
        return a
    };

    function sb(a) {
        if (a == null || typeof a === "boolean") return a;
        if (typeof a === "number") return !!a
    }
    const tb = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;

    function ub(a) {
        if (!Number.isFinite(a)) throw rb("enum");
        return a | 0
    }

    function vb(a) {
        if (typeof a !== "number") throw rb("int32");
        if (!Number.isFinite(a)) throw rb("int32");
        return a | 0
    }

    function wb(a) {
        if (a != null) {
            var b = !!b;
            var c = typeof a;
            if (!(c === "number" ? Number.isFinite(a) : c !== "string" ? 0 : tb.test(a))) throw rb("int64");
            if (typeof a === "string") b = Math.trunc(Number(a)), Number.isSafeInteger(b) ? a = String(b) : (b = a.indexOf("."), b !== -1 && (a = a.substring(0, b)), xb(a) || (a.length < 16 ? Ya(Number(a)) : (a = BigInt(a), Ua = Number(a & BigInt(4294967295)) >>> 0, Va = Number(a >> BigInt(32) & BigInt(4294967295))), a = Za()));
            else if (b) a = Math.trunc(a), Number.isSafeInteger(a) ? a = String(a) : (b = String(a), xb(b) ? a = b : (Ya(a), a = Za()));
            else if (a = Math.trunc(a), !Number.isSafeInteger(a)) {
                Ya(a);
                b = Ua;
                c = Va;
                if (a = c & 2147483648) b = ~b + 1 >>> 0, c = ~c >>> 0, b == 0 && (c = c + 1 >>> 0);
                b = c * 4294967296 + (b >>> 0);
                a = a ? -b : b
            }
        }
        return a
    }

    function xb(a) {
        return a[0] === "-" ? a.length < 20 ? !0 : a.length === 20 && Number(a.substring(0, 7)) > -922337 : a.length < 19 ? !0 : a.length === 19 && Number(a.substring(0, 6)) < 922337
    }

    function yb(a) {
        if (typeof a !== "string") throw Error();
        return a
    }

    function zb(a) {
        return a == null || typeof a === "string" ? a : void 0
    };
    let Ab;

    function Bb(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (hb(a, void 0, 0)) return
                    } else if (a != null && a instanceof Uint8Array) {
                    let b = "",
                        c = 0;
                    const d = a.length - 10240;
                    for (; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
                    b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
                    return btoa(b)
                }
        }
        return a
    };

    function Cb(a, b, c) {
        a = $a(a);
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

    function Db(a, b, c, d, e) {
        if (a != null) {
            if (Array.isArray(a)) a = hb(a, void 0, 0) ? void 0 : e && (a[t] | 0) & 2 ? a : Eb(a, b, c, d !== void 0, e);
            else if (gb(a)) {
                const f = {};
                for (let g in a) Object.prototype.hasOwnProperty.call(a, g) && (f[g] = Db(a[g], b, c, d, e));
                a = f
            } else a = b(a, d);
            return a
        }
    }

    function Eb(a, b, c, d, e) {
        const f = d || c ? a[t] | 0 : 0;
        d = d ? !!(f & 32) : void 0;
        a = $a(a);
        for (let g = 0; g < a.length; g++) a[g] = Db(a[g], b, c, d, e);
        c && c(f, a);
        return a
    }

    function Fb(a) {
        return a.Ha === db ? a.toJSON() : Bb(a)
    };

    function Gb(a, b, c = cb) {
        if (a != null) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[t] | 0;
                if (d & 2) return a;
                b && (b = d === 0 || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (a[t] = (d | 34) & -12293, a) : Eb(a, Gb, d & 4 ? cb : c, !0, !0)
            }
            a.Ha === db && (c = a.G, d = c[t], a = d & 2 ? a : Hb(a, c, d));
            return a
        }
    }

    function Hb(a, b, c) {
        a = a.constructor;
        Ab = b = Ib(b, c);
        b = new a(b);
        Ab = void 0;
        return b
    }

    function Ib(a, b) {
        const c = !!(b & 32);
        a = Cb(a, b, d => Gb(d, c, cb));
        a[t] |= 34;
        return a
    };

    function Mb(a, b) {
        a = a.G;
        return Nb(a, a[t], b)
    }

    function Ob(a, b, c, d) {
        b = d + (+!!(b & 512) - 1);
        if (!(b < 0 || b >= a.length || b >= c)) return a[b]
    }

    function Nb(a, b, c, d) {
        if (c === -1) return null;
        const e = b >> 14 & 1023 || 536870912;
        if (c >= e) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var f = a.length;
            return d && b & 256 && (d = a[f - 1][c], d != null) ? (Ob(a, b, e, c) && ab != null && (a = nb ? ? (nb = {}), b = a[ab] || 0, b >= 4 || (a[ab] = b + 1, a = Error(), mb(a, "incident"), ob ? qb(a) : ta(a))), d) : Ob(a, b, e, c)
        }
    }

    function u(a, b, c, d, e) {
        const f = b >> 14 & 1023 || 536870912;
        if (c >= f || e && !Ea) {
            let g = b;
            if (b & 256) e = a[a.length - 1];
            else {
                if (d == null) return g;
                e = a[f + (+!!(b & 512) - 1)] = {};
                g |= 256
            }
            e[c] = d;
            c < f && (a[c + (+!!(b & 512) - 1)] = void 0);
            g !== b && (a[t] = g);
            return g
        }
        a[c + (+!!(b & 512) - 1)] = d;
        b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
        return b
    }

    function Pb(a, b, c, d) {
        a = a.G;
        let e = a[t];
        kb(e);
        if (c == null) u(a, e, b);
        else {
            c = (void 0) ? .get(c) || c;
            var f = c[t] | 0,
                g = f,
                h = !!(2 & f) || Object.isFrozen(c),
                k = !h && (void 0 === lb || !1);
            if (!(4 & f))
                for (f = 21, h && (c = $a(c), g = 0, f = Qb(f, e), f = Rb(f, e)), h = 0; h < c.length; h++) c[h] = d(c[h]);
            k && (c = $a(c), g = 0, f = Qb(f, e), f = Rb(f, e));
            f !== g && (c[t] = f);
            u(a, e, b, c)
        }
    }

    function w(a, b, c, d) {
        const e = a.G;
        let f = e[t];
        kb(f);
        u(e, f, b, (d === "0" ? Number(c) === 0 : c === d) ? void 0 : c);
        return a
    }

    function Sb(a, b, c, d) {
        let e = a.get(d);
        if (e != null) return e;
        e = 0;
        for (let f = 0; f < d.length; f++) {
            const g = d[f];
            Nb(b, c, g) != null && (e !== 0 && (c = u(b, c, e)), e = g)
        }
        a.set(d, e);
        return e
    }

    function Tb(a, b, c) {
        c == null && (c = void 0);
        const d = a.G;
        let e = d[t];
        kb(e);
        u(d, e, b, c);
        return a
    }

    function Ub(a, b, c, d) {
        d == null && (d = void 0);
        a: {
            const g = a.G;
            var e = g[t];kb(e);
            if (d == null) {
                var f = g[bb] ? ? (g[bb] = new Map);
                if (Sb(f, g, e, c) === b) f.set(c, 0);
                else break a
            } else {
                f = g;
                const h = f[bb] ? ? (f[bb] = new Map),
                    k = Sb(h, f, e, c);
                k !== b && (k && (e = u(f, e, k)), h.set(c, b))
            }
            u(g, e, b, d)
        }
        return a
    }

    function Qb(a, b) {
        a = 2 & b ? a | 2 : a & -3;
        return (a | 32) & -2049
    }

    function Rb(a, b) {
        32 & b || (a &= -33);
        return a
    }

    function Vb(a, b) {
        return a ? ? b
    }

    function x(a, b, c) {
        if (c != null && typeof c !== "string") throw Error();
        return w(a, b, c, "")
    };
    var y = class {
        constructor(a) {
            a: {
                a == null && (a = Ab);Ab = void 0;
                if (a == null) {
                    var b = 96;
                    a = []
                } else {
                    if (!Array.isArray(a)) throw Error("narr");
                    b = a[t] | 0;
                    if (b & 2048) throw Error("farr");
                    if (b & 64) break a;
                    var c = a;
                    b |= 64;
                    var d = c.length;
                    if (d && (--d, gb(c[d]))) {
                        b |= 256;
                        c = d - (+!!(b & 512) - 1);
                        if (c >= 1024) throw Error("pvtlmt");
                        b = b & -16760833 | (c & 1023) << 14
                    }
                }
                a[t] = b
            }
            this.G = a
        }
        toJSON() {
            return Wb(this)
        }
    };
    y.prototype.Ha = db;

    function Wb(a) {
        const b = Eb(a.G, Fb, void 0, void 0, !1);
        var c = Da ? void 0 : a.constructor.da;
        var d = a.G[t];
        if (a = b.length) {
            var e = b[a - 1],
                f = gb(e);
            f ? a-- : e = void 0;
            d = +!!(d & 512) - 1;
            if (f) {
                b: {
                    var g = e;
                    var h = {};f = !1;
                    if (g)
                        for (var k in g) {
                            if (!Object.prototype.hasOwnProperty.call(g, k)) continue;
                            if (isNaN(+k)) {
                                h[k] = g[k];
                                continue
                            }
                            let v = g[k];
                            Array.isArray(v) && (hb(v, c, +k) || fb(v) && v.size === 0) && (v = null);
                            v == null && (f = !0);
                            v != null && (h[k] = v)
                        }
                    if (f) {
                        for (var m in h) break b;
                        h = null
                    } else h = g
                }
                g = h == null ? e != null : h !== e
            }
            for (var q; a > 0; a--) {
                m = a - 1;
                k = b[m];
                m -= d;
                if (!(k == null || hb(k, c, m) || fb(k) && k.size === 0)) break;
                q = !0
            }
            if (b !== b || g || q) {
                if (q || g || h) b.length = a;
                h && b.push(h)
            }
        }
        return b
    };

    function Xb(a, b) {
        const c = Yb;
        if (!b(a)) throw b = (typeof c === "function" ? c() : c) ? .concat("\n") ? ? "", Error(b + String(a));
    }
    let Yb = void 0;

    function Zb(a, b) {
        this.g = a === $b && b || "";
        this.j = ac
    }
    Zb.prototype.toString = function() {
        return this.g
    };

    function bc(a) {
        return a instanceof Zb && a.constructor === Zb && a.j === ac ? a.g : "type_error:Const"
    }
    var ac = {},
        $b = {};

    function cc(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function dc(a) {
        let b = 0;
        return function(c) {
            l.clearTimeout(b);
            const d = arguments;
            b = l.setTimeout(function() {
                a.apply(void 0, d)
            }, 100)
        }
    };

    function z(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    }

    function ec(a, b, c) {
        return a.removeEventListener ? (a.removeEventListener(b, c, !1), !0) : !1
    };

    function fc(a, b, c) {
        for (const d in a) b.call(c, a[d], d, a)
    }

    function gc(a) {
        let b = 0;
        for (const c in a) b++
    }

    function hc(a) {
        const b = {};
        for (const c in a) b[c] = a[c];
        return b
    }
    const ic = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function jc(a, b) {
        let c, d;
        for (let e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (let f = 0; f < ic.length; f++) c = ic[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var kc;

    function lc() {
        if (kc === void 0) {
            var a = null,
                b = l.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: ra,
                        createScript: ra,
                        createScriptURL: ra
                    })
                } catch (c) {
                    l.console && l.console.error(c.message)
                }
                kc = a
            } else kc = a
        }
        return kc
    };
    var mc = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g + ""
        }
    };

    function nc(a) {
        return a instanceof mc && a.constructor === mc ? a.g : "type_error:TrustedResourceUrl"
    }
    var oc = {};

    function pc(a) {
        const b = lc();
        a = b ? b.createScriptURL(a) : a;
        return new mc(a, oc)
    };
    class qc {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g.toString()
        }
    };
    const rc = {};

    function sc(a) {
        return a instanceof tc && a.constructor === tc ? a.g : "type_error:SafeStyleSheet"
    }
    class tc {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g.toString()
        }
    };
    const uc = {};

    function vc(a) {
        return a instanceof A && a.constructor === A ? a.g : "type_error:SafeHtml"
    }

    function wc(a) {
        a instanceof A || (a = String(a), Ba.test(a) && (a.indexOf("&") != -1 && (a = a.replace(va, "&amp;")), a.indexOf("<") != -1 && (a = a.replace(wa, "&lt;")), a.indexOf(">") != -1 && (a = a.replace(xa, "&gt;")), a.indexOf('"') != -1 && (a = a.replace(ya, "&quot;")), a.indexOf("'") != -1 && (a = a.replace(za, "&#39;")), a.indexOf("\x00") != -1 && (a = a.replace(Aa, "&#0;"))), a = xc(a));
        return a
    }

    function xc(a) {
        const b = lc();
        a = b ? b.createHTML(a) : a;
        return new A(a, uc)
    }
    class A {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g.toString()
        }
    }
    var yc = new A(l.trustedTypes && l.trustedTypes.emptyHTML || "", uc);
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    function zc(a) {
        return new tc(a[0], rc)
    };

    function Ac(a) {
        const b = a.split(/\?|#/),
            c = /\?/.test(a) ? "?" + b[1] : "";
        return {
            path: b[0],
            params: c,
            hash: /#/.test(a) ? "#" + (c ? b[2] : b[1]) : ""
        }
    }

    function Bc(a, b) {
        a = Ac(nc(a).toString());
        let c = a.params,
            d = c.length ? "&" : "?";
        b.forEach((e, f) => {
            e = e instanceof Array ? e : [e];
            for (let g = 0; g < e.length; g++) {
                const h = e[g];
                h !== null && h !== void 0 && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h)), d = "&")
            }
        });
        return pc(a.path + c + a.hash)
    };
    var Cc = cc(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = vc(yc);
        return !b.parentElement
    });

    function Dc(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }

    function Ec(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    };

    function Fc(a, b) {
        b = String(b);
        a.contentType === "application/xhtml+xml" && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function Gc(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    }

    function Hc() {
        this.g = l.document || document
    };

    function Ic() {
        return Ca && n ? n.mobile : !Jc() && (p("iPod") || p("iPhone") || p("Android") || p("IEMobile"))
    }

    function Jc() {
        return Ca && n ? !n.mobile && (p("iPad") || p("Android") || p("Silk")) : p("iPad") || p("Android") && !p("Mobile") || p("Silk")
    };
    var Kc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function Lc(a) {
        try {
            return !!a && a.location.href != null && Qa(a, "foo")
        } catch {
            return !1
        }
    }

    function Mc() {
        if (!globalThis.crypto) return Math.random();
        try {
            const a = new Uint32Array(1);
            globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch {
            return Math.random()
        }
    }

    function Nc(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function Oc(a) {
        const b = [];
        Nc(a, function(c) {
            b.push(c)
        });
        return b
    }
    var Pc = cc(() => Ic() ? 2 : Jc() ? 1 : 0),
        Qc = (a, b) => {
            Nc(b, (c, d) => {
                a.style.setProperty(d, c, "important")
            })
        },
        Sc = (a, b) => {
            if ("length" in a.style) {
                a = a.style;
                const c = a.length;
                for (let d = 0; d < c; d++) {
                    const e = a[d];
                    b(a[e], e, a)
                }
            } else a = Rc(a.style.cssText), Nc(a, b)
        },
        Rc = a => {
            const b = {};
            if (a) {
                const c = /\s*:\s*/;
                La((a || "").split(/\s*;\s*/), d => {
                    if (d) {
                        var e = d.split(c);
                        d = e[0];
                        e = e[1];
                        d && e && (b[d.toLowerCase()] = e)
                    }
                })
            }
            return b
        },
        Tc = a => {
            const b = /!\s*important/i;
            Sc(a, (c, d) => {
                b.test(c) ? b.test(c) : a.style.setProperty(d, c, "important")
            })
        };
    let Uc = [];
    const Vc = () => {
        const a = Uc;
        Uc = [];
        for (const b of a) try {
            b()
        } catch {}
    };
    var Wc = a => {
            Uc.push(a);
            Uc.length == 1 && (window.Promise ? Promise.resolve().then(Vc) : window.setImmediate ? setImmediate(Vc) : setTimeout(Vc, 0))
        },
        Xc = a => {
            if (typeof a.goog_pvsid !== "number") try {
                var b = Object,
                    c = b.defineProperty,
                    d = Math.random;
                var e = Math.floor(d() * 2 ** 52);
                c.call(b, a, "goog_pvsid", {
                    value: e,
                    configurable: !1
                })
            } catch (f) {}
            return Number(a.goog_pvsid) || -1
        },
        Yc = (a, b) => new Promise(c => {
            setTimeout(() => void c(b), a)
        });

    function Zc(a, b = document) {
        return b.createElement(String(a).toLowerCase())
    }
    var $c = a => {
        if (Ja() && Ic()) {
            var b = Lc(a.top) ? a.top : null;
            if (b) {
                a = Pc() === 0;
                var c = !!b.document.querySelector('meta[name=viewport][content*="width=device-width"]'),
                    d = b.innerWidth;
                b = b.outerWidth;
                if (d === 0) a = 1;
                else {
                    var e = Math.round((b / d + Number.EPSILON) * 100) / 100;
                    a = e === 1 ? 1 : a || c ? e : Math.round((b / d / .4 + Number.EPSILON) * 100) / 100
                }
            } else a = 1
        } else a = 1;
        return a
    };

    function ad(a, b, c = null, d = !1, e = !1) {
        bd(a, b, c, d, e)
    }

    function bd(a, b, c, d, e = !1) {
        a.google_image_requests || (a.google_image_requests = []);
        const f = Zc("IMG", a.document);
        if (c || d) {
            const g = h => {
                c && c(h);
                d && Na(a.google_image_requests, f);
                ec(f, "load", g);
                ec(f, "error", g)
            };
            z(f, "load", g);
            z(f, "error", g)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    }
    var dd = a => {
            let b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=rcs_internal";
            Nc(a, (c, d) => {
                if (c || c === 0) b += `&${d}=${encodeURIComponent(""+c)}`
            });
            cd(b)
        },
        cd = a => {
            var b = window;
            b.fetch ? b.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : ad(b, a, void 0, !1, !1)
        };
    var ed = window;

    function fd() {
        var a = l.context || l.AMP_CONTEXT_DATA;
        if (!a) try {
            a = l.parent.context || l.parent.AMP_CONTEXT_DATA
        } catch {}
        return (a = a ? .pageViewId && a ? .canonicalUrl ? a : null) ? Lc(a.master) ? a.master : null : null
    };

    function B(a, b, c) {
        if (typeof b === "string")(b = gd(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = gd(c, d);
                f && (c.style[f] = e)
            }
    }
    var hd = {};

    function gd(a, b) {
        var c = hd[b];
        if (!c) {
            var d = Dc(b);
            c = d;
            a.style[d] === void 0 && (d = (Ta ? "Webkit" : Sa ? "Moz" : Ra ? "ms" : null) + Ec(d), a.style[d] !== void 0 && (c = d));
            hd[b] = c
        }
        return c
    };
    var id = () => {
        if (!ed) return !1;
        try {
            return !(!ed.navigator.standalone && !ed.top.navigator.standalone)
        } catch (a) {
            return !1
        }
    };
    class jd {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };
    const kd = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var ld = class {
            constructor(a, b) {
                this.g = a;
                this.j = b
            }
        },
        md = class {
            constructor(a, b) {
                this.url = a;
                this.Ea = !!b;
                this.depth = null
            }
        };
    let nd = null;

    function od() {
        const a = l.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function pd() {
        const a = l.performance;
        return a && a.now ? a.now() : null
    };
    var qd = class {
        constructor(a, b) {
            var c = pd() || od();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    };
    const C = l.performance,
        rd = !!(C && C.mark && C.measure && C.clearMarks),
        sd = cc(() => {
            var a;
            if (a = rd) {
                var b;
                if (nd === null) {
                    nd = "";
                    try {
                        a = "";
                        try {
                            a = l.top.location.hash
                        } catch (c) {
                            a = l.location.hash
                        }
                        a && (nd = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = nd;
                a = !!b.indexOf && b.indexOf("1337") >= 0
            }
            return a
        });

    function td(a) {
        a && C && sd() && (C.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), C.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }

    function ud(a) {
        a.g = !1;
        a.j != a.i.google_js_reporting_queue && (sd() && La(a.j, td), a.j.length = 0)
    }
    class vd {
        constructor(a) {
            this.j = [];
            this.i = a || l;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.j = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.g = sd() || (b != null ? b : Math.random() < 1)
        }
        start(a, b) {
            if (!this.g) return null;
            a = new qd(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            C && sd() && C.mark(b);
            return a
        }
        end(a) {
            if (this.g && typeof a.value === "number") {
                a.duration = (pd() || od()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                C && sd() && C.mark(b);
                !this.g || this.j.length >
                    2048 || this.j.push(a)
            }
        }
    };

    function wd(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function xd(a, b, c, d, e) {
        const f = [];
        Nc(a, function(g, h) {
            (g = yd(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function yd(a, b, c, d, e) {
        if (a == null) return "";
        b = b || "&";
        c = c || ",$";
        typeof c == "string" && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(yd(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if (typeof a == "object") return e = e || 0, e < 2 ? encodeURIComponent(xd(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function zd(a) {
        let b = 1;
        for (const c in a.j) b = c.length > b ? c.length : b;
        return 3997 - b - a.i.length - 1
    }

    function Ed(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = zd(a) - b.length;
        if (d < 0) return "";
        a.g.sort(function(f, g) {
            return f - g
        });
        b = null;
        let e = "";
        for (let f = 0; f < a.g.length; f++) {
            const g = a.g[f],
                h = a.j[g];
            for (let k = 0; k < h.length; k++) {
                if (!d) {
                    b = b == null ? g : b;
                    break
                }
                let m = xd(h[k], a.i, ",$");
                if (m) {
                    m = e + m;
                    if (d >= m.length) {
                        d -= m.length;
                        c += m;
                        e = a.i;
                        break
                    }
                    b = b == null ? g : b
                }
            }
        }
        a = "";
        b != null && (a = e + "trn=" + b);
        return c + a
    }
    class Fd {
        constructor() {
            this.i = "&";
            this.j = {};
            this.u = 0;
            this.g = []
        }
    };

    function Gd(a) {
        let b = a.toString();
        a.name && b.indexOf(a.name) == -1 && (b += ": " + a.name);
        a.message && b.indexOf(a.message) == -1 && (b += ": " + a.message);
        if (a.stack) a: {
            a = a.stack;
            var c = b;
            try {
                a.indexOf(c) == -1 && (a = c + "\n" + a);
                let d;
                for (; a != d;) d = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                b = a.replace(RegExp("\n *", "g"), "\n");
                break a
            } catch (d) {
                b = c;
                break a
            }
            b = void 0
        }
        return b
    }

    function Hd(a, b) {
        a.i = b
    }

    function Id(a, b, c) {
        let d, e;
        try {
            a.g && a.g.g ? (e = a.g.start(b.toString(), 3), d = c(), a.g.end(e)) : d = c()
        } catch (f) {
            c = a.l;
            try {
                td(e), c = a.o(b, new jd(f, {
                    message: Gd(f)
                }), void 0, void 0)
            } catch (g) {
                a.ta(217, g)
            }
            if (c) window.console ? .error ? .(f);
            else throw f;
        }
        return d
    }

    function Jd(a, b) {
        var c = D;
        return (...d) => Id(c, a, () => b.apply(void 0, d))
    }
    var Ld = class {
        constructor(a, b, c = null) {
            this.u = a;
            this.l = b;
            this.g = c;
            this.i = null;
            this.j = !1;
            this.o = this.ta
        }
        ta(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const O = new Fd;
                var g = O;
                g.g.push(1);
                g.j[1] = wd("context", a);
                b.error && b.meta && b.id || (b = new jd(b, {
                    message: Gd(b)
                }));
                if (b.msg) {
                    g = O;
                    var h = b.msg.substring(0, 512);
                    g.g.push(2);
                    g.j[2] = wd("msg", h)
                }
                var k = b.meta || {};
                b = k;
                if (this.i) try {
                    this.i(b)
                } catch (W) {}
                if (d) try {
                    d(b)
                } catch (W) {}
                d = O;
                k = [k];
                d.g.push(3);
                d.j[3] = k;
                d = l;
                k = [];
                b = null;
                do {
                    var m = d;
                    if (Lc(m)) {
                        var q = m.location.href;
                        b = m.document &&
                            m.document.referrer || null
                    } else q = b, b = null;
                    k.push(new md(q || ""));
                    try {
                        d = m.parent
                    } catch (W) {
                        d = null
                    }
                } while (d && m != d);
                for (let W = 0, Ad = k.length - 1; W <= Ad; ++W) k[W].depth = Ad - W;
                m = l;
                if (m.location && m.location.ancestorOrigins && m.location.ancestorOrigins.length == k.length - 1)
                    for (q = 1; q < k.length; ++q) {
                        var v = k[q];
                        v.url || (v.url = m.location.ancestorOrigins[q - 1] || "", v.Ea = !0)
                    }
                var P = k;
                let Wa = new md(l.location.href, !1);
                m = null;
                const Jb = P.length - 1;
                for (v = Jb; v >= 0; --v) {
                    var Q = P[v];
                    !m && kd.test(Q.url) && (m = Q);
                    if (Q.url && !Q.Ea) {
                        Wa = Q;
                        break
                    }
                }
                Q =
                    null;
                const Nf = P.length && P[Jb].url;
                Wa.depth != 0 && Nf && (Q = P[Jb]);
                f = new ld(Wa, Q);
                if (f.j) {
                    P = O;
                    var X = f.j.url || "";
                    P.g.push(4);
                    P.j[4] = wd("top", X)
                }
                var Kb = {
                    url: f.g.url || ""
                };
                if (f.g.url) {
                    var Lb = f.g.url.match(Kc),
                        ua = Lb[1],
                        Bd = Lb[3],
                        Cd = Lb[4];
                    X = "";
                    ua && (X += ua + ":");
                    Bd && (X += "//", X += Bd, Cd && (X += ":" + Cd));
                    var Dd = X
                } else Dd = "";
                ua = O;
                Kb = [Kb, {
                    url: Dd
                }];
                ua.g.push(5);
                ua.j[5] = Kb;
                Kd(this.u, e, O, this.j, c)
            } catch (O) {
                try {
                    Kd(this.u, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: Gd(O),
                        url: f && f.g.url
                    }, this.j, c)
                } catch (Wa) {}
            }
            return this.l
        }
    };
    var Md = a => typeof a === "string",
        Nd = a => a === void 0;
    var Od = class extends y {
        constructor() {
            super()
        }
    };

    function Pd(a, b) {
        try {
            const c = d => [{
                [d.Ja]: d.Ga
            }];
            return JSON.stringify([a.filter(d => d.sa).map(c), Wb(b), a.filter(d => !d.sa).map(c)])
        } catch (c) {
            return Qd(c, b), ""
        }
    }

    function Qd(a, b) {
        try {
            var c = Gd(a instanceof Error ? a : Error(String(a))),
                d = Mb(b, 1);
            var e = d == null ? d : Number.isFinite(d) ? d | 0 : void 0;
            dd({
                m: c,
                b: (e ? ? 0) || null,
                v: Vb(zb(Mb(b, 2)), "") || null
            })
        } catch (f) {}
    }
    var Rd = class {
        constructor(a, b) {
            var c = new Od;
            a = w(c, 1, a == null ? a : ub(a), 0);
            b = x(a, 2, b);
            a = b.G;
            c = a[t];
            this.i = c & 2 ? b : Hb(b, a, c)
        }
    };
    var Sd = class extends y {
        constructor() {
            super()
        }
        L(a) {
            return w(this, 2, a == null ? a : ub(a), 0)
        }
    };
    var Td = class extends y {
            constructor() {
                super()
            }
        },
        Ud = [4, 5, 6, 8, 9, 10, 11, 12, 13];
    var Vd = class extends y {
        constructor() {
            super()
        }
    };
    var Wd = class extends y {
        constructor() {
            super()
        }
    };
    Wd.da = [4, 5];
    var Xd = class extends y {
        constructor() {
            super()
        }
    };
    Xd.da = [2];
    var Yd = class extends y {
            constructor() {
                super()
            }
        },
        Zd = [4, 6];
    class $d extends Rd {
        constructor() {
            super(...arguments)
        }
    }

    function ae(a, ...b) {
        be(a, ...b.map(c => ({
            sa: !0,
            Ja: 3,
            Ga: Wb(c)
        })))
    }

    function ce(a, ...b) {
        be(a, ...b.map(c => ({
            sa: !0,
            Ja: 7,
            Ga: Wb(c)
        })))
    }
    var de = class extends $d {};
    var ee = (a, b) => {
        globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: b.length < 65536,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(() => {})
    };

    function be(a, ...b) {
        try {
            a.A && Pd(a.g.concat(b), a.i).length >= 65536 && fe(a), a.u && !a.l && (a.l = !0, ge(a.u, () => {
                fe(a)
            })), a.g.push(...b), a.g.length >= a.o && fe(a), a.g.length && a.j === null && (a.j = setTimeout(() => {
                fe(a)
            }, a.C))
        } catch (c) {
            Qd(c, a.i)
        }
    }

    function fe(a) {
        a.j !== null && (clearTimeout(a.j), a.j = null);
        if (a.g.length) {
            var b = Pd(a.g, a.i);
            a.H("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
            a.g = []
        }
    }
    var ie = class extends de {
            constructor(a, b, c, d) {
                super(2, he());
                this.H = ee;
                this.C = a;
                this.o = b;
                this.A = c;
                this.u = d;
                this.g = [];
                this.j = null;
                this.l = !1
            }
        },
        je = class extends ie {
            constructor(a = 1E3, b = 100, c = !1, d) {
                super(a, b, c && !0, d)
            }
        };
    var E = a => {
        var b = "qa";
        if (a.qa && a.hasOwnProperty(b)) return a.qa;
        b = new a;
        return a.qa = b
    };

    function F(a, b, c) {
        return b[a] || c
    };

    function ke(a, b) {
        a.g = () => F(3, b, () => [])(1)
    }
    class le {
        g() {
            return []
        }
    };

    function Kd(a, b, c, d = !1, e) {
        if ((d ? a.g : Math.random()) < (e || .01)) try {
            let f;
            c instanceof Fd ? f = c : (f = new Fd, Nc(c, (h, k) => {
                var m = f;
                const q = m.u++;
                h = wd(k, h);
                m.g.push(q);
                m.j[q] = h
            }));
            const g = Ed(f, "/pagead/gen_204?id=" + b + "&");
            g && ad(l, g)
        } catch (f) {}
    }

    function me(a, b) {
        b >= 0 && b <= 1 && (a.g = b)
    }
    class ne {
        constructor() {
            this.g = Math.random()
        }
    };
    let oe, pe;
    const qe = new vd(window);
    (a => {
        oe = a ? ? new ne;
        typeof window.google_srt !== "number" && (window.google_srt = Math.random());
        me(oe, window.google_srt);
        pe = new Ld(oe, !0, qe);
        Hd(pe, () => {});
        pe.j = !0;
        window.document.readyState == "complete" ? window.google_measure_js_timing || ud(qe) : qe.g && z(window, "load", () => {
            window.google_measure_js_timing || ud(qe)
        })
    })();
    let re, D;
    const se = new vd(l);
    ((a, b = !0) => {
        re = a || new ne;
        typeof l.google_srt !== "number" && (l.google_srt = Math.random());
        me(re, l.google_srt);
        D = new Ld(re, b, se);
        D.j = !0;
        l.document.readyState == "complete" ? l.google_measure_js_timing || ud(se) : se.g && z(l, "load", () => {
            l.google_measure_js_timing || ud(se)
        })
    })();
    var G = (a, b) => Jd(a, b);

    function te(a) {
        if (ue) var b = ue;
        else {
            var c = fd() || window;
            b = c.google_persistent_state_async;
            b = b != null && typeof b == "object" && b.S != null && typeof b.S == "object" ? ue = b : c.google_persistent_state_async = ue = new ve
        }
        c = we[33] || "google_ps_33";
        b = b.S;
        const d = b[c];
        return d === void 0 ? (b[c] = a(), b[c]) : d
    }
    var ve = class {
            constructor() {
                this.S = {}
            }
        },
        ue = null;
    const we = {
        [8]: "google_prev_ad_formats_by_region",
        [9]: "google_prev_ad_slotnames_by_region"
    };

    function xe(a) {
        a && typeof a.dispose == "function" && a.dispose()
    };

    function H() {
        this.u = this.u;
        this.H = this.H
    }
    H.prototype.u = !1;
    H.prototype.dispose = function() {
        this.u || (this.u = !0, this.j())
    };
    H.prototype[ha(Symbol, "dispose")] = function() {
        this.dispose()
    };

    function I(a, b) {
        a.u ? b() : (a.H || (a.H = []), a.H.push(b))
    }
    H.prototype.j = function() {
        if (this.H)
            for (; this.H.length;) this.H.shift()()
    };
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    gc({
        ib: 0,
        hb: 1,
        eb: 2,
        Xa: 3,
        fb: 4,
        Ya: 5,
        gb: 6,
        ab: 7,
        bb: 8,
        Wa: 9,
        Za: 10,
        jb: 11
    });
    gc({
        lb: 0,
        mb: 1,
        kb: 2
    });

    function he() {
        return "m202407230101"
    };
    var ye = class {
            constructor(a, b = !1) {
                this.g = a;
                this.defaultValue = b
            }
        },
        J = class {
            constructor(a, b = 0) {
                this.g = a;
                this.defaultValue = b
            }
        };
    var ze = new J(1130, 100),
        Ae = new ye(652491597),
        Be = new J(1085, 5),
        Ce = new J(63, 30),
        De = new J(1080, 5),
        Ee = new J(1027, 10),
        Fe = new J(57, 120),
        Ge = new J(1050, 30),
        He = new J(58, 120),
        Ie = new ye(10005, !0),
        Je = new J(550718588, 250);

    function Ke(a) {
        var b = new Le,
            c = b.G;
        const d = c[t] | 0;
        kb(b.G[t]);
        var e = d & 2;
        b = Nb(c, d, 1, !1);
        Array.isArray(b) || (b = ib);
        const f = !!(d & 32);
        let g = b[t] | 0;
        g === 0 && f && !e ? (g |= 33, b[t] = g) : g & 1 || (g |= 1, b[t] = g);
        if (e) g & 2 || (b[t] |= 34), Object.freeze(b);
        else if (2 & g || 2048 & g) b = $a(b), e = 1, f && (e |= 32), b[t] = e, u(c, d, 1, b, !1);
        c = b;
        if (Array.isArray(a))
            for (var h = 0; h < a.length; h++) c.push(ub(a[h]));
        else
            for (h of a) c.push(ub(h))
    }
    var Le = class extends y {
        constructor() {
            super()
        }
    };
    Le.da = [1];
    /* 
     
    Math.uuid.js (v1.4) 
    http://www.broofa.com 
    mailto:robert@broofa.com 
    Copyright (c) 2010 Robert Kieffer 
    Dual licensed under the MIT and GPL licenses. 
    */
    var Me = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    class Ne {
        constructor(a) {
            for (var b = Array(36), c = 0, d, e = 0; e < 36; e++) e == 8 || e == 13 || e == 18 || e == 23 ? b[e] = "-" : e == 14 ? b[e] = "4" : (c <= 2 && (c = 33554432 + Math.random() * 16777216 | 0), d = c & 15, c >>= 4, b[e] = Me[e == 19 ? d & 3 | 8 : d]);
            this.uuid = b.join("");
            this.callback = a
        }
    }

    function Oe(a) {
        const b = l.imalib_globalCallbacks || new Map,
            c = b.get("AFMA_updateActiveView") || [];
        if (c.length === 0 && l.AFMA_updateActiveView) {
            const d = new Ne(l.AFMA_updateActiveView);
            c.push(d);
            l.AFMA_updateActiveView = void 0
        }
        l.AFMA_updateActiveView || (l.AFMA_updateActiveView = function() {
            const d = b.get("AFMA_updateActiveView");
            for (const e of d) e.callback.apply(null, arguments)
        });
        a = new Ne(a);
        c.push(a);
        b.set("AFMA_updateActiveView", c);
        l.imalib_globalCallbacks = b;
        return a.uuid
    }

    function Pe(a) {
        if (l.AFMA_updateActiveView) {
            var b = l.imalib_globalCallbacks;
            if (b) {
                var c = b.get("AFMA_updateActiveView");
                if (c) {
                    var d = c.findIndex(e => e.uuid === a);
                    d !== -1 && (c.splice(d, 1), c.length === 0 && (l.AFMA_updateActiveView = void 0), b.set("AFMA_updateActiveView", c), l.imalib_globalCallbacks = b)
                }
            }
        }
    };
    Ke([1, 8, 9, 10, 11, 12, 2, 3, 4, 5, 15, 16]);
    Ke([1, 6, 7, 9, 10, 11, 12, 2, 3, 4, 5, 13, 14, 18]);
    Ke([1, 6, 7, 9, 10, 11, 12, 2, 3, 4, 5, 13, 14, 17, 18]);
    new Le;
    var Qe = (l.navigator ? l.navigator.userAgent : "").indexOf("Android") != -1;

    function K(a, b) {
        this.type = a;
        this.g = this.target = b;
        this.defaultPrevented = !1
    }
    K.prototype.j = function() {
        this.defaultPrevented = !0
    };
    var L = class {
            constructor(a, b) {
                this.messageName = a;
                this.parameters = b || {}
            }
        },
        Re = class extends K {
            constructor(a, b) {
                super(a.messageName, b);
                this.params = a.parameters || {}
            }
        };

    function Se(a, {
        data: b,
        source: c
    }) {
        if (c && b) {
            var d = a.i,
                e = b.messageName;
            b = b.parameters;
            if (a.u) switch (e) {
                case "mraid_loaded":
                    e = b.is_top_win;
                    e === !1 && (a.l = !0, a.j = Oe(f => {
                        a.u && Te(a, new L("update_activeview_action", f))
                    }), d.indexOf(c) === -1 && (d.push(c), typeof c.postMessage !== "undefined" && c.postMessage(new L("mraid_env_obj", window.MRAID_ENV), "*")));
                    break;
                case "start_tracking_action":
                    a.g == 0 && window.AFMA_SendMessage("trackActiveViewUnit");
                    a.g += 1;
                    break;
                case "stop_tracking_action":
                    --a.g;
                    a.g == 0 && (window.AFMA_SendMessage("untrackActiveViewUnit", {
                        hashCode: b.hashCode
                    }), a.j && (Pe(a.j), a.j = null));
                    break;
                case "register_iframe_window_action":
                    e = b.is_top_win;
                    e === !1 && d.indexOf(c) === -1 && d.push(c);
                    break;
                case "receive_message_action":
                    b.messageName == "disableMraidOpen" && window.AFMA_ReceiveMessage(b.messageName, b.parameters)
            } else switch (e) {
                case "mraid_env_obj":
                    window.MRAID_ENV = b;
                    break;
                case "update_activeview_action":
                    window.AFMA_updateActiveView && window.AFMA_updateActiveView(b);
                    break;
                case "receive_message_action":
                    window.AFMA_ReceiveMessage(b.messageName,
                        b.parameters)
            }
        }
    }

    function Te(a, b) {
        a.i.forEach(c => c.postMessage(b, "*"))
    }
    class Ue {
        constructor() {
            this.i = [];
            this.u = window === window.top;
            this.l = !1;
            this.g = 0;
            this.j = null;
            typeof window.addEventListener !== "undefined" && window.addEventListener("message", a => Se(this, a))
        }
    };

    function Ve(a) {
        var b = pc("gmsg://mobileads.google.com/" + a.messageName);
        return Bc(b, new Map(Object.entries(a.parameters)))
    };

    function We(a, b) {
        K.call(this, a ? a.type : "");
        this.relatedTarget = this.g = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.pointerId = 0;
        this.pointerType = "";
        this.i = null;
        a && this.init(a, b)
    }
    qa(We, K);
    var Xe = {
        2: "touch",
        3: "pen",
        4: "mouse"
    };
    We.prototype.init = function(a, b) {
        var c = this.type = a.type,
            d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.g = b;
        (b = a.relatedTarget) ? Sa && (Qa(b, "nodeName") || (b = null)): c == "mouseover" ? b = a.fromElement : c == "mouseout" && (b = a.toElement);
        this.relatedTarget = b;
        d ? (this.clientX = d.clientX !== void 0 ? d.clientX : d.pageX, this.clientY = d.clientY !== void 0 ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = a.clientX !== void 0 ? a.clientX :
            a.pageX, this.clientY = a.clientY !== void 0 ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.key = a.key || "";
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = typeof a.pointerType === "string" ? a.pointerType : Xe[a.pointerType] || "";
        this.state = a.state;
        this.i = a;
        a.defaultPrevented && We.Y.j.call(this)
    };
    We.prototype.j = function() {
        We.Y.j.call(this);
        var a = this.i;
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    };
    var Ye = "closure_listenable_" + (Math.random() * 1E6 | 0);
    var Ze = 0;

    function $e(a, b, c, d, e) {
        this.listener = a;
        this.proxy = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.ca = e;
        this.key = ++Ze;
        this.W = this.Z = !1
    }

    function af(a) {
        a.W = !0;
        a.listener = null;
        a.proxy = null;
        a.src = null;
        a.ca = null
    };

    function bf(a) {
        this.src = a;
        this.g = {};
        this.j = 0
    }
    bf.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.g[f];
        a || (a = this.g[f] = [], this.j++);
        var g = cf(a, b, d, e);
        g > -1 ? (b = a[g], c || (b.Z = !1)) : (b = new $e(b, this.src, f, !!d, e), b.Z = c, a.push(b));
        return b
    };

    function df(a, b, c, d, e) {
        b = b.toString();
        if (b in a.g) {
            var f = a.g[b];
            c = cf(f, c, d, e);
            c > -1 && (af(f[c]), Array.prototype.splice.call(f, c, 1), f.length == 0 && (delete a.g[b], a.j--))
        }
    }

    function ef(a, b) {
        var c = b.type;
        c in a.g && Na(a.g[c], b) && (af(b), a.g[c].length == 0 && (delete a.g[c], a.j--))
    }

    function cf(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.W && f.listener == b && f.capture == !!c && f.ca == d) return e
        }
        return -1
    };
    var ff = "closure_lm_" + (Math.random() * 1E6 | 0),
        gf = {},
        hf = 0;

    function jf(a, b, c, d, e) {
        if (d && d.once) return kf(a, b, c, d, e);
        if (Array.isArray(b)) {
            for (var f = 0; f < b.length; f++) jf(a, b[f], c, d, e);
            return null
        }
        c = lf(c);
        return a && a[Ye] ? a.listen(b, c, ka(d) ? !!d.capture : !!d, e) : mf(a, b, c, !1, d, e)
    }

    function mf(a, b, c, d, e, f) {
        if (!b) throw Error("Invalid event type");
        var g = ka(e) ? !!e.capture : !!e,
            h = nf(a);
        h || (a[ff] = h = new bf(a));
        c = h.add(b, c, d, g, f);
        if (c.proxy) return c;
        d = of ();
        c.proxy = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener) e === void 0 && (e = !1), a.addEventListener(b.toString(), d, e);
        else if (a.attachEvent) a.attachEvent(pf(b.toString()), d);
        else if (a.addListener && a.removeListener) a.addListener(d);
        else throw Error("addEventListener and attachEvent are unavailable.");
        hf++;
        return c
    }

    function of () {
        function a(c) {
            return b.call(a.src, a.listener, c)
        }
        const b = qf;
        return a
    }

    function kf(a, b, c, d, e) {
        if (Array.isArray(b)) {
            for (var f = 0; f < b.length; f++) kf(a, b[f], c, d, e);
            return null
        }
        c = lf(c);
        return a && a[Ye] ? a.g.add(String(b), c, !0, ka(d) ? !!d.capture : !!d, e) : mf(a, b, c, !0, d, e)
    }

    function rf(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) rf(a, b[f], c, d, e);
        else(d = ka(d) ? !!d.capture : !!d, c = lf(c), a && a[Ye]) ? df(a.g, String(b), c, d, e) : a && (a = nf(a)) && (b = a.g[b.toString()], a = -1, b && (a = cf(b, c, d, e)), (c = a > -1 ? b[a] : null) && sf(c))
    }

    function sf(a) {
        if (typeof a !== "number" && a && !a.W) {
            var b = a.src;
            if (b && b[Ye]) ef(b.g, a);
            else {
                var c = a.type,
                    d = a.proxy;
                b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(pf(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                hf--;
                (c = nf(b)) ? (ef(c, a), c.j == 0 && (c.src = null, b[ff] = null)) : af(a)
            }
        }
    }

    function pf(a) {
        return a in gf ? gf[a] : gf[a] = "on" + a
    }

    function qf(a, b) {
        if (a.W) a = !0;
        else {
            b = new We(b, this);
            var c = a.listener,
                d = a.ca || a.src;
            a.Z && sf(a);
            a = c.call(d, b)
        }
        return a
    }

    function nf(a) {
        a = a[ff];
        return a instanceof bf ? a : null
    }
    var tf = "__closure_events_fn_" + (Math.random() * 1E9 >>> 0);

    function lf(a) {
        if (typeof a === "function") return a;
        a[tf] || (a[tf] = function(b) {
            return a.handleEvent(b)
        });
        return a[tf]
    };

    function uf(a) {
        H.call(this);
        this.i = a;
        this.g = {}
    }
    qa(uf, H);
    var vf = [];
    uf.prototype.listen = function(a, b, c, d) {
        Array.isArray(b) || (b && (vf[0] = b.toString()), b = vf);
        for (var e = 0; e < b.length; e++) {
            var f = jf(a, b[e], c || this.handleEvent, d || !1, this.i || this);
            if (!f) break;
            this.g[f.key] = f
        }
        return this
    };

    function wf(a) {
        fc(a.g, function(b, c) {
            this.g.hasOwnProperty(c) && sf(b)
        }, a);
        a.g = {}
    }
    uf.prototype.j = function() {
        uf.Y.j.call(this);
        wf(this)
    };
    uf.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };

    function M() {
        H.call(this);
        this.g = new bf(this);
        this.I = this;
        this.A = null
    }
    qa(M, H);
    M.prototype[Ye] = !0;
    M.prototype.addEventListener = function(a, b, c, d) {
        jf(this, a, b, c, d)
    };
    M.prototype.removeEventListener = function(a, b, c, d) {
        rf(this, a, b, c, d)
    };

    function xf(a, b) {
        var c, d = a.A;
        if (d)
            for (c = []; d; d = d.A) c.push(d);
        a = a.I;
        d = b.type || b;
        if (typeof b === "string") b = new K(b, a);
        else if (b instanceof K) b.target = b.target || a;
        else {
            var e = b;
            b = new K(d, a);
            jc(b, e)
        }
        e = !0;
        if (c)
            for (var f = c.length - 1; f >= 0; f--) {
                var g = b.g = c[f];
                e = yf(g, d, !0, b) && e
            }
        g = b.g = a;
        e = yf(g, d, !0, b) && e;
        e = yf(g, d, !1, b) && e;
        if (c)
            for (f = 0; f < c.length; f++) g = b.g = c[f], e = yf(g, d, !1, b) && e
    }
    M.prototype.j = function() {
        M.Y.j.call(this);
        if (this.g) {
            var a = this.g,
                b = 0,
                c;
            for (c in a.g) {
                for (var d = a.g[c], e = 0; e < d.length; e++) ++b, af(d[e]);
                delete a.g[c];
                a.j--
            }
        }
        this.A = null
    };
    M.prototype.listen = function(a, b, c, d) {
        return this.g.add(String(a), b, !1, c, d)
    };

    function yf(a, b, c, d) {
        b = a.g.g[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.W && g.capture == c) {
                var h = g.listener,
                    k = g.ca || g.src;
                g.Z && ef(a.g, g);
                e = h.call(k, d) !== !1 && e
            }
        }
        return e && !d.defaultPrevented
    };

    function N(a, b) {
        M.call(this);
        this.o = a || 1;
        this.l = b || l;
        this.C = na(this.J, this);
        this.D = Date.now()
    }
    qa(N, M);
    N.prototype.enabled = !1;
    N.prototype.i = null;
    N.prototype.J = function() {
        if (this.enabled) {
            var a = Date.now() - this.D;
            a > 0 && a < this.o * .8 ? this.i = this.l.setTimeout(this.C, this.o - a) : (this.i && (this.l.clearTimeout(this.i), this.i = null), xf(this, "tick"), this.enabled && (zf(this), this.start()))
        }
    };
    N.prototype.start = function() {
        this.enabled = !0;
        this.i || (this.i = this.l.setTimeout(this.C, this.o), this.D = Date.now())
    };

    function zf(a) {
        a.enabled = !1;
        a.i && (a.l.clearTimeout(a.i), a.i = null)
    }
    N.prototype.j = function() {
        N.Y.j.call(this);
        zf(this);
        delete this.l
    };

    function Af() {
        if (window.googleJsEnvironment && (window.googleJsEnvironment.environment == "rhino" || window.googleJsEnvironment.environment == "jscore")) return new Bf;
        if (Qe && window.googleAdsJsInterface && "notify" in window.googleAdsJsInterface) try {
            return window.googleAdsJsInterface.notify("gmsg://mobileads.google.com/noop"), new Bf
        } catch (a) {} else if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.gadGMSGHandler) return new Cf;
        return new Df
    }

    function Ef() {
        Ff || (Ff = Af());
        return Ff
    }
    var Ff = null,
        Gf = class extends H {};

    function Hf(a) {
        const b = hc(a.parameters);
        b["google.afma.Notify_dt"] = (new Date).getTime();
        return Ve(new L(a.messageName, b)).toString()
    }
    var If = class extends Gf {
            constructor(a) {
                super();
                this.A = a;
                this.o = [];
                this.l = new N(1);
                this.C = new uf(this);
                this.C.listen(this.l, "tick", this.D)
            }
            sendMessage(a) {
                this.o.push(a);
                this.l.enabled || (a = this.o.shift(), this.A(a), this.l.start())
            }
            D() {
                const a = this.o.shift();
                a ? this.A(a) : zf(this.l)
            }
        },
        Df = class extends If {
            constructor() {
                super(a => {
                    var b = this.g[this.i];
                    b || (b = Fc(document, "IFRAME"), b.id = "afma-notify-" + (new Date).getTime(), b.style.display = "none", this.g[this.i] = b);
                    this.i = (this.i + 1) % 25;
                    const c = hc(a.parameters);
                    c["google.afma.Notify_dt"] = (new Date).getTime();
                    var d = b;
                    a = Ve(new L(a.messageName, c));
                    d.src = nc(a).toString();
                    b.parentNode || document.body.appendChild(b)
                });
                this.g = [];
                this.i = 0
            }
            j() {
                this.g.forEach(Gc);
                this.g = [];
                super.j()
            }
        },
        Bf = class extends Gf {
            sendMessage(a) {
                a = Hf(a);
                window.googleAdsJsInterface && window.googleAdsJsInterface.notify && (window.googleAdsJsInterface.notify(a), window.googleAdsJsInterface.DEBUG && console.log(a))
            }
        },
        Cf = class extends Gf {
            sendMessage(a) {
                a = Hf(a);
                window.webkit && window.webkit.messageHandlers &&
                    window.webkit.messageHandlers.gadGMSGHandler && window.webkit.messageHandlers.gadGMSGHandler.postMessage(a)
            }
        };
    var Kf = class extends M {
        constructor() {
            super();
            this.l = Ef();
            this.l = Ef();
            I(this, oa(xe, this.l));
            this.i = {};
            this.o = new Ue
        }
        sendMessage(a, b) {
            let c;
            typeof a === "string" ? c = new L(a, b) : a instanceof L && (c = a);
            document.readyState == "loading" ? kf(l, "DOMContentLoaded", () => this.l.sendMessage(c), !1, this) : this.l.sendMessage(c)
        }
        receiveMessage(a, b) {
            if (this.shouldForwardMessageToIframe()) this.forwardMessage(new L("receive_message_action", new L(a, b)));
            else {
                const c = document.getElementById("ad_iframe");
                c != void 0 && c.contentWindow !=
                    void 0 && c.contentWindow.AFMA_ReceiveMessage != void 0 && c.contentWindow.AFMA_ReceiveMessage(a, b)
            }
            a == "onshow" && document.readyState == "loading" ? kf(l, "DOMContentLoaded", () => Jf(a, b ? ? void 0)) : xf(this, new Re(new L(a, b), this))
        }
        addObserver(a, b, c) {
            const d = e => void c.call(b, e.type, e.params);
            this.listen(a, d);
            this.i[a] || (this.i[a] = {});
            this.i[a][b] = d
        }
        removeObserver(a, b) {
            this.i[a] && this.i[a][b] && (df(this.g, String(a), this.i[a][b]), delete this.i[a][b])
        }
        shouldForwardMessageToIframe() {
            return this.o.l
        }
        forwardMessage(a) {
            Te(this.o,
                a)
        }
    };

    function R(a, b) {
        l.AFMA_Communicator ? l.AFMA_Communicator.sendMessage(a, b) : Lf(a, b)
    }

    function Lf(a, b) {
        document.readyState == "loading" ? (a = na(Lf, null, a, b), kf(l, "DOMContentLoaded", a, !1)) : (a = new L(a, b), Ef().sendMessage(a))
    }

    function Jf(a, b) {
        l.AFMA_Communicator.receiveMessage(a, b)
    }

    function Mf(a, b, c, d) {
        l.AFMA_Communicator.removeEventListener(a, b, c, d)
    }

    function Of(a, b, c, d) {
        l.AFMA_Communicator.addEventListener(a, b, c, d)
    }

    function Pf(a, b, c) {
        l.AFMA_Communicator.addObserver(a, b, c)
    }

    function Qf(a, b) {
        l.AFMA_Communicator.removeObserver(a, b)
    }
    l.AFMA_Communicator || (pa("AFMA_AddEventListener", Of), pa("AFMA_RemoveEventListener", Mf), pa("AFMA_AddObserver", Pf), pa("AFMA_RemoveObserver", Qf), pa("AFMA_ReceiveMessage", Jf), pa("AFMA_SendMessage", R), l.AFMA_Communicator = new Kf);
    var Rf = class {
        constructor(a) {
            this.g = a;
            Of("h5adsEvent", b => void this.g(b))
        }
        oa(a, b) {
            R("h5ads", {
                obj_id: a,
                action: "create_interstitial_ad",
                ad_unit: b
            })
        }
        pa(a, b) {
            R("h5ads", {
                obj_id: a,
                ad_unit: b,
                action: "create_rewarded_ad"
            })
        }
        dispose(a) {
            R("h5ads", {
                obj_id: a,
                action: "dispose"
            })
        }
    };
    class S {
        constructor() {
            this.promise = new Promise((a, b) => {
                this.resolve = a;
                this.reject = b
            })
        }
    };

    function Sf(a) {
        a.extras === void 0 && (a.extras = {});
        a.extras.highfive = "1";
        return encodeURIComponent(JSON.stringify(a))
    }
    class Tf extends H {
        constructor(a, b) {
            super();
            this.id = a;
            this.g = b
        }
        load(a, b) {
            this.u || (this.listener = b, b = this.id, a = Sf(a), R("h5ads", {
                obj_id: b,
                action: "load_interstitial_ad",
                ad_request: a
            }))
        }
        show() {
            if (!this.u) {
                if (this.listener == null) throw Error("load must be called before show");
                R("h5ads", {
                    obj_id: this.id,
                    action: "show_interstitial_ad"
                })
            }
        }
        j() {
            this.g.u.dispose(this.id);
            super.j()
        }
    }
    class Uf extends H {
        constructor(a, b) {
            super();
            this.id = a;
            this.g = b
        }
        load(a, b) {
            this.u || (this.listener = b, b = this.id, a = Sf(a), R("h5ads", {
                obj_id: b,
                action: "load_rewarded_ad",
                ad_request: a
            }))
        }
        show() {
            if (!this.u) {
                if (this.listener == null) throw Error("load must be called before show");
                R("h5ads", {
                    obj_id: this.id,
                    action: "show_rewarded_ad"
                })
            }
        }
        j() {
            this.g.u.dispose(this.id);
            super.j()
        }
    }

    function Vf(a) {
        const b = a.l;
        a.l += 1;
        return b
    }
    var Wf = class {
        constructor() {
            this.l = 0;
            this.ads = new Map;
            this.g = new Map;
            this.i = new S;
            this.j = 0;
            this.u = new Rf(a => {
                a = a.params;
                switch (a.eventCategory) {
                    case "initialize":
                        this.ads.clear();
                        this.g.clear();
                        this.j = 3;
                        this.i.resolve(this);
                        break;
                    case "creation":
                        var b = a.objectId;
                        switch (a.event) {
                            case "nativeObjectCreated":
                                if (a = this.g.get(b)) this.g.delete(b), this.ads.set(b, a.ad), a.M.resolve(a.ad);
                                return;
                            case "nativeObjectNotCreated":
                                if (a = this.g.get(b)) this.g.delete(b), a.ad.dispose(), a.M.reject(Error("Native object not created"));
                                return;
                            default:
                                return
                        }
                    case "interstitial":
                        if ((b = this.ads.get(a.objectId)) && b instanceof Tf && b.listener) switch (a.event) {
                            case "onAdLoaded":
                                b.listener.P ? .(b);
                                break;
                            case "onAdFailedToLoad":
                                b.listener.O ? .(b, a.errorCode);
                                break;
                            case "onAdOpened":
                                b.listener.Ra ? .(b);
                                break;
                            case "onAdClicked":
                                b.listener.pb ? .(b);
                                break;
                            case "onAdClosed":
                                b.listener.K ? .(b);
                                break;
                            case "onNativeAdObjectNotAvailable":
                                b.listener.R ? .(b)
                        }
                        break;
                    case "rewarded":
                        if ((b = this.ads.get(a.objectId)) && b instanceof Uf && b.listener) switch (a.event) {
                            case "onRewardedAdLoaded":
                                b.listener.P ? .(b);
                                break;
                            case "onRewardedAdFailedToLoad":
                                b.listener.O ? .(b, a.errorCode);
                                break;
                            case "onRewardedAdOpened":
                                b.listener.Ra ? .(b);
                                break;
                            case "onRewardedAdFailedToShow":
                                b.listener.Qa ? .(b, a.errorCode);
                                break;
                            case "onUserEarnedReward":
                                b.listener.Sa ? .(b);
                                break;
                            case "onRewardedAdClosed":
                                b.listener.K ? .(b);
                                break;
                            case "onNativeAdObjectNotAvailable":
                                b.listener.R ? .(b)
                        }
                }
            })
        }
        connect() {
            switch (this.j) {
                case 3:
                    return Promise.resolve(this);
                case 1:
                    return this.i.promise;
                default:
                    return this.j = 1, this.i = new S, R("h5ads", {
                            action: "initialize"
                        }),
                        setTimeout(() => {
                            this.j !== 3 && (this.j = 2, this.i.reject(Error("GmaBridge could not connect to SDK after 10000 ms.")))
                        }, 1E4), this.i.promise
            }
        }
        oa(a) {
            if (this.j !== 3) return Promise.reject(Error("GmaBridge is not connected"));
            const b = Vf(this),
                c = new S;
            this.g.set(b, {
                M: c,
                ad: new Tf(b, this)
            });
            this.u.oa(b, a);
            return c.promise
        }
        pa(a) {
            if (this.j !== 3) return Promise.reject(Error("GmaBridge is not connected"));
            const b = Vf(this),
                c = new S;
            this.g.set(b, {
                M: c,
                ad: new Uf(b, this)
            });
            this.u.pa(b, a);
            return c.promise
        }
    };
    let Xf = null;
    var Yf = {},
        Zf = {};

    function $f() {
        throw Error("Do not instantiate directly");
    }
    $f.prototype.Ca = null;
    $f.prototype.toString = function() {
        return this.ga
    };
    $f.prototype.ua = function() {
        if (this.aa !== Yf) throw Error("Sanitized content was not of kind HTML.");
        return xc(this.toString())
    };

    function ag() {
        $f.call(this)
    }
    qa(ag, $f);
    ag.prototype.aa = Yf;

    function bg(a) {
        if (a != null) switch (a.Ca) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
        return null
    }
    var T = function(a) {
        function b(c) {
            this.ga = c
        }
        b.prototype = a.prototype;
        return function(c, d) {
            c = new b(String(c));
            d !== void 0 && (c.Ca = d);
            return c
        }
    }(ag);

    function cg(a) {
        return dg(String(a), () => "").replace(eg, "&lt;")
    }
    const fg = RegExp.prototype.hasOwnProperty("sticky"),
        gg = new RegExp((fg ? "" : "^") + "(?:!|/?([a-zA-Z][a-zA-Z0-9:-]*))", fg ? "gy" : "g");

    function dg(a, b) {
        const c = [],
            d = a.length;
        let e = 0,
            f = [],
            g, h, k = 0;
        for (; k < d;) {
            switch (e) {
                case 0:
                    var m = a.indexOf("<", k);
                    if (m < 0) {
                        if (c.length === 0) return a;
                        c.push(a.substring(k));
                        k = d
                    } else c.push(a.substring(k, m)), h = m, k = m + 1, fg ? (gg.lastIndex = k, m = gg.exec(a)) : (gg.lastIndex = 0, m = gg.exec(a.substring(k))), m ? (f = ["<", m[0]], g = m[1], e = 1, k += m[0].length) : c.push("<");
                    break;
                case 1:
                    m = a.charAt(k++);
                    switch (m) {
                        case "'":
                        case '"':
                            let q = a.indexOf(m, k);
                            q < 0 ? k = d : (f.push(m, a.substring(k, q + 1)), k = q + 1);
                            break;
                        case ">":
                            f.push(m);
                            c.push(b(f.join(""),
                                g));
                            e = 0;
                            f = [];
                            h = g = null;
                            break;
                        default:
                            f.push(m)
                    }
                    break;
                default:
                    throw Error();
            }
            e === 1 && k >= d && (k = h + 1, c.push("<"), e = 0, f = [], h = g = null)
        }
        return c.join("")
    }

    function hg(a) {
        return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>")
    }

    function U(a) {
        return a != null && a.aa === Yf ? String(cg(a.ga)).replace(ig, jg) : String(a).replace(kg, jg)
    }

    function V(a) {
        a != null && a.aa === Zf ? a = hg(a.ga) : a == null ? a = "" : a instanceof qc ? a = hg(a instanceof qc && a.constructor === qc ? a.g : "type_error:SafeStyle") : a instanceof tc ? a = hg(sc(a)) : (a = String(a), a = lg.test(a) ? a : "zSoyz");
        return a
    }
    const mg = {
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

    function jg(a) {
        return mg[a]
    }
    const kg = /[\x00\x22\x26\x27\x3c\x3e]/g,
        ig = /[\x00\x22\x27\x3c\x3e]/g,
        lg = /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:calc|cubic-bezier|drop-shadow|hsl|hsla|hue-rotate|invert|linear-gradient|max|min|rgb|rgba|rotate|rotateZ|translate|translate3d|translateX|translateY|var)\((?:(?:(?:(?:\/(?![\/\*]))|(?:\*(?!\/)))?[-\u0020\t,+.!#%_0-9a-zA-Z]+)*|(?:calc|cubic-bezier|drop-shadow|hsl|hsla|hue-rotate|invert|linear-gradient|max|min|rgb|rgba|rotate|rotateZ|translate|translate3d|translateX|translateY|var)\((?:(?:(?:\/(?![\/\*]))|(?:\*(?!\/)))?[-\u0020\t,+.!#%_0-9a-zA-Z]+)*\))+\)|[-+]?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:e-?[0-9]+)?(?:[a-z]{1,4}|%)?|(?:(?:\/(?![\/\*]))|(?:\*(?!\/)))|!important)(?:\s*[,\u0020]\s*|$))*$/i,
        ng =
        /^[a-zA-Z0-9+\/_-]+={0,2}$/,
        eg = /</g;
    var og = class extends y {};
    og.da = [19];
    let pg = void 0;

    function qg(a) {
        Xb(pg, Nd);
        pg = a
    };
    var rg = class {
        constructor() {
            const a = {};
            this.j = (b, c) => a[b] != null ? a[b] : c;
            this.i = (b, c) => a[b] != null ? a[b] : c;
            this.l = (b, c) => a[b] != null ? a[b] : c;
            this.o = (b, c) => a[b] != null ? a[b] : c;
            this.u = (b, c) => a[b] != null ? c.concat(a[b]) : c;
            this.g = () => {}
        }
    };

    function Y(a) {
        return E(rg).i(a.g, a.defaultValue)
    };
    class sg {
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
            this.floatingAdsStacking = new tg;
            this.sideRailProcessedFixedElements = new Set;
            this.sideRailAvailableSpace = new Map;
            this.sideRailPlasParam = new Map
        }
    }
    var tg = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    };

    function ug(a) {
        const b = vg(a);
        La(a.g.maxZIndexListeners, c => c(b))
    }

    function vg(a) {
        a = Oc(a.g.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    }
    class wg {
        constructor(a) {
            a.google_reactive_ads_global_state ? (a.google_reactive_ads_global_state.sideRailProcessedFixedElements == null && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new Set), a.google_reactive_ads_global_state.sideRailAvailableSpace == null && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new Map), a.google_reactive_ads_global_state.sideRailPlasParam == null && (a.google_reactive_ads_global_state.sideRailPlasParam = new Map)) : a.google_reactive_ads_global_state =
                new sg;
            this.g = a.google_reactive_ads_global_state.floatingAdsStacking
        }
        addListener(a) {
            this.g.maxZIndexListeners.push(a);
            a(vg(this))
        }
        removeListener(a) {
            Oa(this.g.maxZIndexListeners, b => b === a)
        }
    }
    class xg {
        constructor(a) {
            this.j = a;
            this.g = null
        }
    };

    function yg(a) {
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
        La(Object.keys(b), c => {
            var d = a.style[Dc(c)];
            (typeof d !==
                "undefined" ? d : a.style[gd(a, c)]) || B(a, c, b[c])
        });
        Tc(a)
    };
    const zg = (a, b) => {
        const c = Zc("STYLE", a);
        c.textContent = sc(zc `* { pointer-events: none; }`);
        a ? .head.appendChild(c);
        setTimeout(() => {
            a ? .head.removeChild(c)
        }, b)
    };
    var Bg = (a, b, c) => {
        if (!a.body) return null;
        const d = new Ag;
        d.apply(a, b);
        return () => {
            var e = c || 0;
            e > 0 && zg(b.document, e);
            B(a.body, {
                filter: d.g,
                webkitFilter: d.g,
                overflow: d.i,
                position: d.u,
                top: d.l
            });
            b.scrollTo(0, d.j)
        }
    };
    class Ag {
        constructor() {
            this.g = this.l = this.u = this.i = null;
            this.j = 0
        }
        apply(a, b) {
            this.i = a.body.style.overflow;
            this.u = a.body.style.position;
            this.l = a.body.style.top;
            this.g = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
            this.j = b.pageYOffset === void 0 ? (b.document.documentElement || b.document.body.parentNode || b.document.body).scrollTop : b.pageYOffset;
            B(a.body, "top", -this.j + "px")
        }
    };

    function Cg(a, b) {
        var c;
        if (!a.i)
            for (a.i = [], c = a.g.parentElement; c;) {
                a.i.push(c);
                if (a.I(c)) break;
                c = c.parentNode && c.parentNode.nodeType === 1 ? c.parentNode : null
            }
        c = a.i.slice();
        let d, e;
        for (d = 0; d < c.length; ++d)(e = c[d]) && b.call(a, e, d, c)
    }
    var Dg = class extends H {
        constructor(a, b, c) {
            super();
            this.g = a;
            this.T = b;
            this.C = c;
            this.i = null;
            I(this, () => this.i = null)
        }
        I(a) {
            return this.C === a
        }
    };

    function Eg(a, b) {
        const c = a.C;
        if (c)
            if (b) {
                b = a.D;
                if (b.g == null) {
                    var d = b.j;
                    const e = d.g.nextRestrictionId++;
                    d.g.maxZIndexRestrictions[e] = 2147483646;
                    ug(d);
                    b.g = e
                }
                Qc(c, {
                    display: "block"
                });
                a.A.body && !a.l && (a.l = Bg(a.A, a.T, a.N));
                c.setAttribute("tabindex", "0");
                c.setAttribute("aria-hidden", "false");
                a.A.body.setAttribute("aria-hidden", "true")
            } else b = a.D, b.g != null && (d = b.j, delete d.g.maxZIndexRestrictions[b.g], ug(d), b.g = null), Qc(c, {
                    display: "none"
                }), a.l && (a.l(), a.l = null), a.A.body.setAttribute("aria-hidden", "false"),
                c.setAttribute("aria-hidden", "true")
    }

    function Fg(a) {
        Eg(a, !1);
        const b = a.C;
        if (b) {
            var c = Gg(a.J);
            Cg(a, d => {
                Qc(d, c);
                yg(d)
            });
            a.g.setAttribute("width", "");
            a.g.setAttribute("height", "");
            B(a.g, c);
            B(a.g, Hg);
            B(b, Ig);
            B(b, {
                background: "transparent"
            });
            Qc(b, {
                display: "none",
                position: "fixed"
            });
            yg(b);
            yg(a.g);
            $c(a.J) <= 1 || (B(b, {
                overflow: "scroll",
                "max-width": "100vw"
            }), Tc(b))
        }
    }
    class Jg extends Dg {
        constructor(a, b) {
            var c = window,
                d = Y(Je);
            super(a, c, b);
            this.l = null;
            this.A = c.document;
            this.N = d;
            a = new wg(c);
            this.D = new xg(a);
            this.J = c
        }
        o() {
            Eg(this, !1)
        }
    }

    function Gg(a) {
        a = $c(a);
        a = 100 * (a < 1 ? 1 : a);
        return {
            width: `${a}vw`,
            height: `${a}vh`
        }
    }
    var Ig = {
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
        Hg = {
            left: "0",
            position: "absolute",
            top: "0"
        };
    var Kg = class extends Jg {
        constructor(a, b) {
            super(a, b);
            Fg(this)
        }
        I(a) {
            a.classList ? a = a.classList.contains("adsbygoogle") : (a = a.classList ? a.classList : (typeof a.className == "string" ? a.className : a.getAttribute && a.getAttribute("class") || "").match(/\S+/g) || [], a = Ka(a, "adsbygoogle") >= 0);
            return a
        }
    };

    function Lg() {
        const a = window.google_ad_modifications = window.google_ad_modifications || {};
        a.afg_slotcar_vars || (a.afg_slotcar_vars = {});
        return a.afg_slotcar_vars
    };

    function Mg(a) {
        return (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && RegExp("google_ad_client").test(a[1]) ? a[1] : null
    }

    function Ng(a) {
        if (a = a.innerText || a.innerHTML)
            if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && RegExp("google_ad_client").test(a[1])) return a[1];
        return null
    }

    function Og(a) {
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

    function ge(a, b) {
        a.i.size > 0 || Pg(a);
        const c = a.i.get(0);
        c ? c.push(b) : a.i.set(0, [b])
    }

    function Qg(a, b, c, d) {
        z(b, c, d);
        I(a, () => ec(b, c, d))
    }

    function Rg(a, b) {
        a.state !== 1 && (a.state = 1, a.i.size > 0 && Sg(a, b))
    }

    function Pg(a) {
        a.g.document.visibilityState ? Qg(a, a.g.document, "visibilitychange", b => {
            a.g.document.visibilityState === "hidden" && Rg(a, b);
            a.g.document.visibilityState === "visible" && (a.state = 0)
        }) : "onpagehide" in a.g ? (Qg(a, a.g, "pagehide", b => {
            Rg(a, b)
        }), Qg(a, a.g, "pageshow", () => {
            a.state = 0
        })) : Qg(a, a.g, "beforeunload", b => {
            Rg(a, b)
        })
    }

    function Sg(a, b) {
        for (let c = 9; c >= 0; c--) a.i.get(c) ? .forEach(d => {
            d(b)
        })
    }
    var Tg = class extends H {
        constructor(a) {
            super();
            this.g = a;
            this.state = 0;
            this.i = new Map
        }
    };
    async function Ug(a, b) {
        var c = 10;
        return c <= 0 ? Promise.reject(Error(`wfc bad input ${c} ${200}`)) : b() ? Promise.resolve() : new Promise((d, e) => {
            const f = a.setInterval(() => {
                --c ? b() && (a.clearInterval(f), d()) : (a.clearInterval(f), e(Error(`wfc timed out ${c}`)))
            }, 200)
        })
    };

    function Vg(a) {
        const b = a.state.pc;
        return b !== null && b !== 0 ? b : a.state.pc = Xc(a.g)
    }

    function Wg(a) {
        var b = a.state.wpc;
        if (b === null || b === "") {
            b = a.state;
            var c = a.g;
            if (c.google_ad_client) a = String(c.google_ad_client);
            else {
                if ((a = (c.google_ad_modifications = c.google_ad_modifications || {}).head_tag_slot_vars ? .google_ad_client ? ? c.document.querySelector(".adsbygoogle[data-ad-client]") ? .getAttribute("data-ad-client")) == null)
                    if (E(rg).j(Ae.g, Ae.defaultValue)) a = "";
                    else {
                        b: {
                            a = c.document.getElementsByTagName("script");c = c.navigator && c.navigator.userAgent || "";c = RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube",
                                "i").test(c) || /i(phone|pad|pod)/i.test(c) && /applewebkit/i.test(c) && !/version|safari/i.test(c) && !id() ? Mg : Ng;
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
                            for (d = {}; e = c.exec(a);) d[e[1]] = Og(e[2]);
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
    async function Xg(a) {
        await Ug(a.g, () => !(!Vg(a) || !Wg(a)))
    }
    async function Yg(a, b) {
        await Xg(a);
        var c = a.i;
        var d = new Td;
        var e = Vg(a);
        d = w(d, 1, wb(e), "0");
        e = Wg(a);
        d = x(d, 2, e);
        d = w(d, 3, wb(a.state.sd), "0");
        a = w(d, 7, wb(Math.round(a.g.performance.now())), "0");
        a = w(a, 3, wb(1), "0");
        b = Ub(a, 10, Ud, b);
        ce(c, b)
    }
    var Zg = class {
        constructor(a, b) {
            this.g = fd() || window;
            this.j = b ? ? new Tg(this.g);
            this.i = a ? ? new je(100, 100, !0, this.j);
            this.state = te(() => {
                const c = Y(ze);
                return {
                    sd: c,
                    ssp: c > 0 && Mc() < 1 / c,
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
    };

    function $g(a) {
        var b = window;
        return a.google_adtest === "on" || a.google_adbreak_test === "on" || b.location.host.endsWith("h5games.usercontent.goog") || b.location.host === "gamesnacks.com" ? b.document.querySelector('meta[name="h5-games-eids"]') ? .getAttribute("content") ? .split(",").map(c => Math.floor(Number(c))).filter(c => !isNaN(c) && c > 0) || [] : []
    };
    class ah {};

    function bh() {
        var a = l.ggeac || (l.ggeac = {});
        ke(E(le), a);
        ch(a);
        E(ah);
        E(rg).g()
    }

    function ch(a) {
        const b = E(rg);
        b.j = (c, d) => F(5, a, () => !1)(c, d, 1);
        b.i = (c, d) => F(6, a, () => 0)(c, d, 1);
        b.l = (c, d) => F(7, a, () => "")(c, d, 1);
        b.o = (c, d) => F(8, a, () => [])(c, d, 1);
        b.u = (c, d) => F(17, a, () => [])(c, d, 1);
        b.g = () => {
            F(15, a, () => {})(1)
        }
    };

    function dh(a) {
        const b = E(le).g();
        a = $g(a);
        return b.concat(a).join(",")
    };

    function eh({
        Na: a,
        Ua: b
    }) {
        return a || (b === "dev" ? "dev" : "")
    };

    function fh(a, b) {
        Hd(a, c => {
            c.shv = String(b);
            c.mjsv = eh({
                Na: he(),
                Ua: b
            });
            c.eid = dh(l)
        })
    };
    var gh = typeof sttc === "undefined" ? void 0 : sttc;

    function hh() {
        var a = D;
        try {
            return Xb(gh, Md), new og(JSON.parse(gh))
        } catch (b) {
            a.ta(838, b instanceof Error ? b : Error(String(b)))
        }
        return new og
    };

    function ih(a) {
        {
            l.google_llp || (l.google_llp = {});
            var b = l.google_llp;
            let c = b[7];
            if (!c) {
                const {
                    promise: d,
                    resolve: e
                } = new S;
                c = {
                    promise: d,
                    resolve: e
                };
                b[7] = c
            }
            b = c
        }
        b.resolve(a)
    };
    var jh = class extends H {
            j() {
                this.disposeAd();
                super.j()
            }
        },
        kh = class extends H {
            constructor(a) {
                super();
                this.callback = a
            }
        },
        lh = class extends H {
            constructor(a) {
                super();
                this.F = a;
                this.g = new Set
            }
            fetch(a) {
                const b = new kh(a.callback);
                this.g.add(b);
                this.F.fetch({ ...a,
                    callback: c => {
                        b.u ? c && c.dispose() : b.callback(c);
                        this.g.delete(b)
                    }
                })
            }
            j() {
                for (const a of this.g.values()) a.dispose();
                this.g.clear();
                super.j()
            }
        };
    var mh = class {
        constructor(a) {
            var b = he();
            this.Ta = 1;
            this.Ma = a;
            this.Oa = b;
            this.Ka = "unset"
        }
        ea(a) {
            this.Ka = a
        }
        X(a) {
            this.U = a.Da;
            this.V = a.Ia
        }
        L(a) {
            this.F = a
        }
        B(a, b = {}) {
            b.event = a;
            b.client = this.Ka;
            b.bow_v = this.Ma;
            b.js_v = this.Oa;
            b.fetcher = this.F ? .toString() ? ? "unset";
            this.U && (b.admb_iid = this.U);
            this.V && (b.admb_rid = this.V);
            a = this.Ta;
            const c = E(le).g();
            !b.eid && c.length && (b.eid = c.toString());
            Kd(re, "slotcar", b, !0, a)
        }
    };
    var nh = class extends jh {
        constructor(a, b, c, d) {
            super();
            this.ad = a;
            this.l = b;
            this.o = c;
            this.i = d;
            this.g = null;
            this.A = this.C = !1;
            this.D = !0
        }
        show(a) {
            this.g = a;
            if (this.D && this.A) this.ad.show();
            else if (this.A) this.K();
            else throw Error("Tried to show AdMobAd before it finished loading.");
        }
        disposeAd() {
            this.ad.dispose()
        }
        P() {
            this.A = !0;
            this.o(this)
        }
        O() {
            this.o(null);
            this.dispose()
        }
        R() {
            this.i.B("admb_na");
            this.g ? this.K() : this.D = !1
        }
    };

    function oh(a) {
        return {
            P: G(849, () => {
                a.P()
            }),
            O: G(850, () => {
                a.O()
            }),
            K: G(851, () => {
                a.K()
            }),
            R: G(854, () => {
                a.R()
            })
        }
    }
    var ph = class extends nh {
        constructor(a, b, c, d) {
            super(a, b, c, d);
            this.ad = a;
            this.l = b;
            this.o = c;
            this.i = d
        }
        request() {
            this.ad.load(this.l, oh(this))
        }
        K() {
            (0, this.g)(1)
        }
    };

    function qh(a) {
        return {
            P: G(849, () => {
                a.P()
            }),
            O: G(850, () => {
                a.O()
            }),
            Qa: G(855, () => {
                a.i.B("admb_rfs");
                (0, a.g)(2)
            }),
            Sa: G(852, () => {
                a.C = !0
            }),
            K: G(853, () => {
                a.K()
            }),
            R: G(854, () => {
                a.R()
            })
        }
    }
    var rh = class extends nh {
        constructor(a, b, c, d) {
            super(a, b, c, d);
            this.ad = a;
            this.l = b;
            this.o = c;
            this.i = d
        }
        request() {
            this.ad.load(this.l, qh(this))
        }
        K() {
            this.C ? (0, this.g)(3) : (0, this.g)(2)
        }
    };

    function sh(a, b) {
        const c = a.g.google_adbreak_test === "on";
        switch (b) {
            case 1:
                return c ? "ca-app-pub-3940256099942544/1033173712" : a.g.google_admob_interstitial_slot;
            case 2:
                return c ? "ca-app-pub-3940256099942544/5224354917" : a.g.google_admob_rewarded_slot;
            default:
                throw Error(`Unknown ad type ${b}`);
        }
    }

    function th(a, b, c) {
        a.l.error(`Unable to fetch ad: '${b}' is missing from tag.`);
        c(null)
    }

    function uh(a) {
        Id(D, 850, () => {
            a(null)
        })
    }
    var vh = class {
        constructor(a, b, c, d) {
            this.i = a;
            this.g = b;
            this.l = c;
            this.j = d;
            this.u = Xc(window).toString()
        }
        fetch(a) {
            const b = {
                isTestDevice: !1,
                httpTimeoutMillis: Y(Ce) * 1E3
            };
            var c = this.g.google_tag_for_child_directed_treatment;
            if (c === "0" || c === "1") b.tagForChildDirectedTreatment = c === "1";
            c = this.g.google_tag_for_under_age_of_consent;
            if (c === "0" || c === "1") b.tagForUnderAgeOfConsent = c === "1";
            c = this.g.google_max_ad_content_rating;
            typeof c === "string" && (b.maxAdContentRating = c);
            b.extras ? ? (b.extras = {});
            b.extras.muted = a.Fa ||
                a.type === 2 ? "0" : "1";
            this.u && (b.extras.pvsid = this.u);
            c = dh(this.g);
            c.length && (b.extras.slotcar_eids = c);
            c = sh(this, a.type);
            a.type === 1 ? typeof c !== "string" ? th(this, "data-admob-interstitial-slot", a.callback) : this.i.oa(c).then(d => {
                (new ph(d, b, a.callback, this.j)).request()
            }).catch(() => {
                uh(a.callback)
            }) : typeof c !== "string" ? th(this, "data-admob-rewarded-slot", a.callback) : this.i.pa(c).then(d => {
                (new rh(d, b, a.callback, this.j)).request()
            }).catch(() => {
                uh(a.callback)
            })
        }
    };
    const wh = {
            [1]: 10,
            [2]: 11
        },
        xh = {
            closed: 1,
            granted: 3,
            cancelled: 2,
            error: 4
        };
    var zh = class {
            constructor() {
                this.g = window
            }
            fetch(a) {
                this.g.adsbygoogle.push({
                    params: {
                        google_reactive_ad_format: wh[a.type],
                        google_wrap_fullscreen_ad: !0,
                        google_video_play_muted: a.type !== 2 && !a.Fa,
                        google_acr: b => {
                            a.callback(b ? new yh(b) : null)
                        }
                    }
                })
            }
        },
        yh = class extends jh {
            constructor(a) {
                super();
                this.ad = a
            }
            show(a) {
                this.ad.show(b => {
                    a(xh[b])
                })
            }
            disposeAd() {
                this.ad.disposeAd()
            }
        };
    /* 
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    const Ah = {};

    function Bh() {
        return T('<ins class="adsbygoogle" style="width:100% !important;height:100% !important;" id="fake-interstitial-ins"><iframe style="overflow:hidden;" width="100%" height="100%" frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0" scrolling="no" src="about:blank" id="aswift-fake"></iframe></ins>')
    }

    function Ch() {
        return T('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path style="fill:#f5f5f5" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>')
    }

    function Dh(a) {
        const b = a.Pa;
        a = a.Va;
        return T('<div class="dialog-wrapper" style="width: 100%; height: 100%; position: absolute; top: 0;"><div class="close-confirmation-dialog" id="close-confirmation-dialog" style="width: ' + U(V(Math.floor(a * .78))) + 'px"><div class="confirmation-title" style="font-size: ' + U(V(Math.floor(b * .031))) + "px; margin-top: " + U(V(Math.floor(b * .0375))) + "px; margin-left: " + U(V(Math.floor(a * .066))) + "px; margin-right: " + U(V(Math.floor(a * .066))) + 'px;">Close Ad?</div><div class="confirmation-message" style="font-size: ' +
            U(V(Math.floor(b * .025))) + "px; margin-bottom: " + U(V(Math.floor(b * .0375))) + "px; margin-top: " + U(V(Math.floor(b * .0375))) + "px; margin-left: " + U(V(Math.floor(a * .066))) + "px; margin-right: " + U(V(Math.floor(a * .066))) + 'px;">You will lose your reward</div><div class="confirmation-buttons" style="font-size: ' + U(V(Math.floor(b * .0218))) + "px; line-height: " + U(V(Math.floor(b * .05625))) + "px; margin-right: " + U(V(Math.floor(b * .0125))) + "px; margin-bottom: " + U(V(Math.floor(b * .0125))) + 'px;"><div class="close-ad-button" id="close-ad-button" style="padding-left: ' +
            U(V(Math.floor(a * .044))) + "px; padding-right: " + U(V(Math.floor(a * .044))) + 'px;">CLOSE</div><div class="resume-ad-button" id="resume-ad-button" style="padding-left: ' + U(V(Math.floor(a * .044))) + "px; padding-right: " + U(V(Math.floor(a * .044))) + 'px;">RESUME</div></div></div></div>')
    };
    pc(bc(new Zb($b, "about:blank")));
    pc(bc(new Zb($b, "javascript:undefined")));

    function Eh(a, b, c) {
        a = a.g;
        c = b(c || Ah, {});
        b = a || sa || (sa = new Hc);
        if (c && c.g) b = c.g();
        else {
            b = Fc(b.g, "DIV");
            b: if (ka(c)) {
                if (c.ua && (c = c.ua(), c instanceof A)) break b;
                c = wc("zSoyz")
            } else c = wc(String(c));
            a = c;
            c = b;
            if (Cc())
                for (; c.lastChild;) c.removeChild(c.lastChild);
            c.innerHTML = vc(a)
        }
        b.childNodes.length == 1 && (c = b.firstChild, c.nodeType == 1 && (b = c));
        return b
    }
    class Fh {
        constructor() {
            this.g = sa || (sa = new Hc)
        }
        render(a, b) {
            a = a(b || {}, {});
            return String(a)
        }
    };

    function Gh(a, b) {
        if (a.contentDocument || a.contentWindow) b(a);
        else {
            const c = () => {
                b(a);
                ec(a, "load", c)
            };
            z(a, "load", c)
        }
    }
    async function Hh(a) {
        if (a.g == null) throw Error("Tried to show ad before initialized.");
        const b = new S;
        var c = a.g.g,
            d = Math.min(Number(c.clientWidth), Number(c.clientHeight));
        let e = Math.max(Number(c.clientWidth), Number(c.clientHeight));
        Ih(a) && (d *= .5, e *= .5);
        c = c.contentDocument;
        a = c.body.appendChild(Eh(a.C, Dh, {
            Va: d,
            Pa: e
        }));
        d = a.querySelector(".resume-ad-button");
        z(a.querySelector(".close-ad-button"), "click", () => {
            b.resolve(0)
        });
        z(d, "click", () => {
            b.resolve(1)
        });
        d = await b.promise;
        c.body.removeChild(a);
        return d ===
            0
    }

    function Ih(a) {
        if (a.g == null) throw Error("Tried to show ad before initialized.");
        a = a.g.g;
        return Number(a.clientWidth) > 1E3 || Number(a.clientHeight) > 1E3
    }
    var Jh = class extends jh {
            constructor(a, b) {
                super();
                this.A = b;
                this.C = new Fh;
                this.i = 10;
                this.o = !1;
                this.l = Eh(this.C, Bh);
                this.l.dataset["slotcar" + (b === 1 ? "Interstitial" : "Rewarded")] = "true";
                document.documentElement.appendChild(this.l);
                Gh(this.l.firstChild, c => {
                    var d = {};
                    var e = this.A === 2 ? "Rewarded ad example" : "Interstitial ad example";
                    var f = this.A;
                    (d = d && d.ob) ? (d = String(d), d = ng.test(d) ? d : "zSoyz", d = ' nonce="' + U(d) + '"') : d = "";
                    d = "<!DOCTYPE html><html><head>" + T("\n  <style" + d + '>\n    body {\n      padding: 0;\n      margin: 0;\n      background-color: #262626;\n    }\n    .container {\n      width: 100vw;\n      height: 92vh;\n      display: flex;\n      flex-direction: column;\n    }\n    .container .creative {\n      background-color: white;\n      border-style: solid;\n      border-width: thin;\n      border-color:#bdc1c6;\n      height: 250px;\n      margin: 20vh auto auto auto;\n      overflow: hidden;\n      padding: 0;\n      width: 300px;\n    }\n    .header-panel {\n      display: flex;\n      justify-content: center;\n      margin-bottom: 20px;\n      background-color: #424242;\n      border: 1px solid transparent;\n      border-radius: 4px;\n      height: 8vh;\n      color: #f5f5f5;\n      font-family: "Google Sans",Roboto,Arial,sans-serif;\n      font-size: 20px;\n      line-height: 8vh;\n    }\n    .dismiss-button {\n      display: flex;\n      flex-direction: row;\n      height: inherit;\n      align-items: center;\n      padding-right: 4%;\n      cursor: pointer;\n      position: absolute;\n      right: 0;\n    }\n    .count-down-container {\n      display: inline-flex;\n      flex: auto;\n    }\n    .adContainer {\n      display: flex;\n      flex-direction: row;\n      width: 100%;\n      height: 100%;\n      text-align: left;\n      margin: 0;\n    }\n    .adContainer .logo {\n      align-self: center;\n      width: 40px;\n      margin: 0 24px;\n      height: 40px;\n    }\n    .adContainer .logo IMG {\n      height: 40px;\n      width: 40px;\n    }\n    .adContainer .text {\n      margin: auto auto auto 0;\n    }\n    .adContainer .button {\n      align-self: center;\n      height: 100%;\n      max-height: 48px;\n      /* This gives a perceived margin of 32px, due to the margins within the button SVGs. */\n      margin-right: 30px;\n    }\n    .adContainer .button-inner {\n      max-height: 48px;\n      height: 100%;\n    }\n    .adContainer .button-inner SVG {\n      height: 100%;\n      width: auto;\n    }\n    .adText {\n      font-family: "Google Sans",Roboto,Arial,sans-serif;\n      font-size: 18px;\n      font-weight: normal;\n      line-height: 18px;\n      color: #202124;\n      margin-bottom: 4px;\n    }\n    .nativeIframeMessage .text {\n      padding: 0 10px;\n    }\n    .creative a {\n      text-decoration: none;\n    }\n\n    @media (max-height: 44px),\n        (max-height: 150px) and (max-width: 210px) {\n      .adContainer .logo {\n        display: none;\n      }\n      .adContainer .text {\n        margin-left: 5px;\n      }\n    }\n    @media (max-height: 110px) and (max-width: 330px) {\n      .adText {\n        font-size: 13px;\n        line-height: 13px;\n        margin-bottom: 2px;\n      }\n    }\n    @media (max-height: 38px) {\n      .adText {\n        font-size: 17px;\n        line-height: 17px;\n        margin-bottom: 0;\n      }\n    }\n    @media (max-height: 20px) {\n      .adText {\n        font-size: 12px;\n        line-height: 12px;\n        margin-bottom: 0;\n      }\n    }\n\n    /* Vertically stacked assets in cases where creative is not a distictly\n       horizontal rectangle shape */\n    @media (min-height: 240px),\n        (max-width: 65px) and (min-height: 50px),\n        (max-width: 130px) and (min-height: 100px),\n        (max-width: 195px) and (min-height: 150px),\n        (max-width: 260px) and (min-height: 200px) {\n      .adContainer .logo {\n        display: initial;\n      }\n      .adContainer .text {\n        margin-left: 0;\n      }\n      .adContainer {\n        text-align: center;\n        display: flex;\n        flex-direction: column;\n      }\n      .adContainer .logo {\n        margin: 40px auto 24px auto;\n      }\n      .adContainer .text {\n        margin: 0 auto auto auto;\n      }\n      .adContainer .text .adText{\n        margin-bottom: 8px;\n      }\n      .adContainer .button {\n        margin: auto auto 32px auto;\n      }\n      @media (max-height: 200px) {\n        .adContainer .logo {\n          display: none;\n        }\n        .adContainer .text {\n          margin: 10px auto auto auto;\n        }\n      }\n    }\n\n    .x-button {\n      display: flex;\n      align-items: center;\n    }\n\n    .dialog-wrapper {\n      background: rgba(0, 0, 0, .4);\n      height: 100%;\n      left: 0;\n      opacity: 1;\n      pointer-events: auto;\n      position: fixed;\n      top: 0;\n      transition: opacity .15s ease-out;\n      -webkit-transition: opacity .15s ease-out;\n      width: 100%;\n      will-change: opacity;\n      z-index: 2147483647;\n    }\n\n    .close-confirmation-dialog {\n      background: #fff;\n      box-shadow: 0 16px 24px 2px rgba(0, 0, 0, .14),\n        0 6px 30px 5px rgba(0, 0, 0, .12), 0 8px 10px -5px rgba(0, 0, 0, .2);\n      font-family: Roboto, sans-serif;\n      left: 50%;\n      position: fixed;\n      top: 50%;\n      transform: translate(-50%, -50%);\n      -webkit-transform: translate(-50%, -50%);\n    }\n\n    .confirmation-title {\n      color: #000;\n    }\n\n    .confirmation-message {\n      color: #757575;\n    }\n\n    .confirmation-buttons {\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: flex;\n\n      -webkit-box-align: center;\n      -webkit-align-items: center;\n      align-items: center;\n\n      -webkit-box-pack: flex-end;\n      -webkit-justify-content: flex-end;\n      justify-content: flex-end;\n    }\n\n    .close-ad-button,\n    .resume-ad-button {\n      color: #fff;\n      cursor: pointer;\n      font-weight: 500;\n      text-align: center;\n\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: flex;\n    }\n\n    .close-ad-button {\n      color: #3e82f7;\n    }\n\n    .resume-ad-button {\n      background: #3e82f7;\n      border-radius: 2px;\n      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .24);\n    }\n  </style>\n  ') +
                        '</head><body><div class="header-panel">';
                    f !== 2 && (d += "Ad");
                    d += '<div class="dismiss-button" id="dismiss-button">' + (f === 2 ? '<div class="count-down-container" id="count-down-container"><div id="count-down"><div class="count-down-text" id="count-down-text"></div></div><div class="x-button" id="close-button" style="padding-left: 5px;">' + Ch() + "</div></div>" : "") + '<div class="x-button" id="dismiss-button-element">' + Ch() + '</div></div></div><div class="container"><div class="creative">' + T('<div style="position:relative;float:right;top:1px;right:1px;width:15px;height:15px;"><svg style="fill:#00aecd;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15"><circle cx="6" cy="6" r="0.67"></circle><path d="M4.2,11.3Q3.3,11.8,3.3,10.75L3.3,4.1Q3.3,3.1,4.3,3.5L10.4,7.0Q12.0,7.5,10.4,8.0L6.65,10.0L6.65,7.75a0.65,0.65,0,1,0,-1.3,0L5.35,10.75a0.9,0.9,0,0,0,1.3,0.8L12.7,8.2Q13.7,7.5,12.7,6.7L3.3,1.6Q2.2,1.3,1.8,2.5L1.8,12.5Q2.2,13.9,3.3,13.3L4.8,12.5A0.3,0.3,0,1,0,4.2,11.3Z"></path></svg></div>') +
                        '<a target="_blank" href="https://developers.google.com/ad-placement"><div class="adContainer"><div class="logo">' + T('<img width="40" height="40" alt="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTVweCIgaGVpZ2h0PSI1NnB4IiB2aWV3Qm94PSIwIDAgNTUgNTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjMgKDY3Mjk3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5sb2dvX2dvb2dsZWdfNDhkcDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJNMl92MiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IjAyYV9hdXRvX2FkcyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQxNy4wMDAwMDAsIC03MDUuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJtb2JpbGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM3OC4wMDAwMDAsIDE2NC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC00IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDc0LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHUC1hZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEuMDAwMDAwLCA0NDQuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJsb2dvX2dvb2dsZWdfNDhkcCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQuMDAwMDAwLCAyMy4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik01NC44OCwyOC42MzYzNjM2IEM1NC44OCwyNi42NTA5MDkxIDU0LjcwMTgxODIsMjQuNzQxODE4MiA1NC4zNzA5MDkxLDIyLjkwOTA5MDkgTDI4LDIyLjkwOTA5MDkgTDI4LDMzLjc0IEw0My4wNjkwOTA5LDMzLjc0IEM0Mi40MiwzNy4yNCA0MC40NDcyNzI3LDQwLjIwNTQ1NDUgMzcuNDgxODE4Miw0Mi4xOTA5MDkxIEwzNy40ODE4MTgyLDQ5LjIxNjM2MzYgTDQ2LjUzMDkwOTEsNDkuMjE2MzYzNiBDNTEuODI1NDU0NSw0NC4zNDE4MTgyIDU0Ljg4LDM3LjE2MzYzNjQgNTQuODgsMjguNjM2MzYzNiBaIiBpZD0iU2hhcGUiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI4LDU2IEMzNS41Niw1NiA0MS44OTgxODE4LDUzLjQ5MjcyNzMgNDYuNTMwOTA5MSw0OS4yMTYzNjM2IEwzNy40ODE4MTgyLDQyLjE5MDkwOTEgQzM0Ljk3NDU0NTUsNDMuODcwOTA5MSAzMS43NjcyNzI3LDQ0Ljg2MzYzNjQgMjgsNDQuODYzNjM2NCBDMjAuNzA3MjcyNyw0NC44NjM2MzY0IDE0LjUzNDU0NTUsMzkuOTM4MTgxOCAxMi4zMzI3MjczLDMzLjMyIEwyLjk3ODE4MTgyLDMzLjMyIEwyLjk3ODE4MTgyLDQwLjU3NDU0NTUgQzcuNTg1NDU0NTUsNDkuNzI1NDU0NSAxNy4wNTQ1NDU1LDU2IDI4LDU2IFoiIGlkPSJTaGFwZSIgZmlsbD0iIzM0QTg1MyIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTIuMzMyNzI3MywzMy4zMiBDMTEuNzcyNzI3MywzMS42NCAxMS40NTQ1NDU1LDI5Ljg0NTQ1NDUgMTEuNDU0NTQ1NSwyOCBDMTEuNDU0NTQ1NSwyNi4xNTQ1NDU1IDExLjc3MjcyNzMsMjQuMzYgMTIuMzMyNzI3MywyMi42OCBMMTIuMzMyNzI3MywxNS40MjU0NTQ1IEwyLjk3ODE4MTgyLDE1LjQyNTQ1NDUgQzEuMDgxODE4MTgsMTkuMjA1NDU0NSAwLDIzLjQ4MTgxODIgMCwyOCBDMCwzMi41MTgxODE4IDEuMDgxODE4MTgsMzYuNzk0NTQ1NSAyLjk3ODE4MTgyLDQwLjU3NDU0NTUgTDEyLjMzMjcyNzMsMzMuMzIgWiIgaWQ9IlNoYXBlIiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOCwxMS4xMzYzNjM2IEMzMi4xMTA5MDkxLDExLjEzNjM2MzYgMzUuODAxODE4MiwxMi41NDkwOTA5IDM4LjcwMzYzNjQsMTUuMzIzNjM2NCBMNDYuNzM0NTQ1NSw3LjI5MjcyNzI3IEM0MS44ODU0NTQ1LDIuNzc0NTQ1NDUgMzUuNTQ3MjcyNywwIDI4LDAgQzE3LjA1NDU0NTUsMCA3LjU4NTQ1NDU1LDYuMjc0NTQ1NDUgMi45NzgxODE4MiwxNS40MjU0NTQ1IEwxMi4zMzI3MjczLDIyLjY4IEMxNC41MzQ1NDU1LDE2LjA2MTgxODIgMjAuNzA3MjcyNywxMS4xMzYzNjM2IDI4LDExLjEzNjM2MzYgWiIgaWQ9IlNoYXBlIiBmaWxsPSIjRUE0MzM1IiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJTaGFwZSIgcG9pbnRzPSIwIDAgNTYgMCA1NiA1NiAwIDU2Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="/>') +
                        '</div><div class="text"><div class="adText">' + (e != null && e.aa === Yf ? e : e instanceof A ? T(vc(e).toString()) : T(String(String(e)).replace(kg, jg), bg(e))) + "</div></div></div></a></div></div></body></html>";
                    e = T(d).ua();
                    f = c.contentDocument || c.contentWindow.document;
                    f.open();
                    f.write(vc(e));
                    f.close();
                    this.g = new Kg(c, this.l);
                    a(this)
                })
            }
            show(a) {
                if (this.g == null) throw Error("Tried to show ad before initialized.");
                const b = this.g.g.contentDocument,
                    c = b.getElementById("dismiss-button");
                Eg(this.g, !0);
                if (this.A === 2) {
                    const d =
                        c.querySelector("#dismiss-button-element");
                    d.style.display = "none";
                    const e = async () => {
                        if (this.g == null) throw Error("Failure on rewarded example: Could not find ad frame.");
                        this.o = !0;
                        await Hh(this) ? (this.g.o(), z(c, "click", e), a(2)) : this.o = !1
                    };
                    z(c, "click", e);
                    this.i = Y(Ee);
                    const f = this.i < 0;
                    this.o = !1;
                    const g = b.getElementById("count-down-container"),
                        h = g.querySelector("#count-down-text");
                    h.innerText = `Reward in ${this.i} seconds`;
                    f || (this.D = setInterval(() => {
                        this.o || (--this.i, h.innerText = `Reward in ${this.i} seconds`);
                        if (this.i === 0) {
                            g.style.display = "none";
                            d.style.display = "";
                            clearInterval(this.D);
                            const k = async () => {
                                if (this.g == null) throw Error("Failure on rewarded example: Could not find ad frame.");
                                this.g.o();
                                ec(c, "click", k);
                                a(3)
                            };
                            z(c, "click", k);
                            ec(c, "click", e)
                        }
                    }, 1E3))
                } else z(c, "click", () => {
                    if (this.g == null) throw Error("Failure on rewarded example: Could not find ad frame.");
                    this.g.o();
                    a(1)
                })
            }
            disposeAd() {
                this.g ? .o();
                Gc(this.l)
            }
        },
        Kh = class {
            fetch(a) {
                new Jh(a.callback, a.type)
            }
        };
    var Lh = class {
            constructor() {
                this.g = E(Zg);
                this.j = (new Map).set("inv_plcnf", 1).set("inv_adcnf", 2).set("adbr_cl", 3).set("adbr_noad", 4).set("adbr_nousitr", 5).set("adbr_usrint", 6).set("adbr_naf", 7).set("adbr_pgad", 8).set("adbr_pgaatd", 9).set("adbr_tepgai", 10).set("adcf_cl", 11).set("adcf_afni", 29).set("adcf_pgad", 13).set("adcf_pgaatd", 14).set("prf_suc", 15).set("prf_fail", 16).set("admb_na", 17).set("admb_rfs", 18).set("admb_fetfail", 19).set("lgc_fld", 20).set("pr_rr", 21).set("pr_to", 22).set("api_ld", 23).set("admb_tm",
                    24).set("adbr_dn", 25).set("dbl_init", 26).set("sess_m", 27).set("ad_cls", 28);
                this.i = (new Map).set("admob", 1).set("adsense", 2)
            }
            ea() {}
            X(a) {
                this.U = a.Da;
                this.V = a.Ia
            }
            L(a) {
                this.F = this.i.get(a) ? ? 0
            }
            async B(a) {
                var b = new Sd;
                a = this.j.get(a) ? ? 0;
                b = w(b, 1, a == null ? a : ub(a), 0).L(this.F);
                this.U && x(b, 3, this.U);
                this.V && x(b, 4, this.V);
                await Yg(this.g, b)
            }
        },
        Mh = class {
            constructor(a) {
                this.na = new Lh;
                this.ba = a
            }
            ea(a) {
                this.ba.ea(a)
            }
            X(a) {
                this.na.X(a);
                this.ba.X(a)
            }
            L(a) {
                this.na.L(a);
                this.ba.L(a)
            }
            async B(a, b = {}) {
                await this.na.B(a, b);
                this.ba.B(a, b)
            }
        };
    const Nh = "click mousedown mouseup touchstart touchend pointerdown pointerup keydown keyup scroll".split(" ");
    var Oh = class extends H {
        constructor() {
            var a = window;
            super();
            this.g = 0;
            const b = () => {
                this.g = Date.now()
            };
            for (const c of Nh) a.document.documentElement.addEventListener(c, b, {
                capture: !0
            });
            I(this, () => {
                for (const c of Nh) a.document.documentElement.removeEventListener(c, b, {
                    capture: !0
                })
            })
        }
    };
    const Ph = new Set(["auto", "on"]),
        Qh = new Set(["on", "off"]),
        Rh = new Set("start pause next browse reward preroll".split(" ")),
        Sh = new Map([
            ["start", "interstitial"],
            ["pause", "interstitial"],
            ["next", "interstitial"],
            ["browse", "interstitial"],
            ["reward", "reward"],
            ["preroll", "preroll"]
        ]),
        Th = new Map([
            ["interstitial", ["type"]],
            ["reward", ["type", "beforeReward", "adDismissed", "adViewed"]],
            ["preroll", ["type", "adBreakDone"]]
        ]),
        Uh = new Map([
            ["interstitial", ["beforeReward", "adDismissed", "adViewed"]],
            ["reward", []],
            ["preroll", ["afterAd", "beforeReward", "adDismissed", "adViewed"]]
        ]),
        Vh = "beforeAd afterAd beforeReward adDismissed adViewed adBreakDone".split(" "),
        Wh = new Map([
            ["beforeBreak", "beforeAd"],
            ["afterBreak", "afterAd"],
            ["adComplete", "adViewed"]
        ]);

    function Xh(a, b) {
        let c = !1;
        const d = f => {
            c = !0;
            b.error(`Invalid ad config: ${f}.`)
        };
        if (a.preloadAdBreaks != null && !Ph.has(a.preloadAdBreaks)) {
            var e = Array.from(Ph).map(f => `'${f}'`).join(", ");
            d(`'preloadAdBreaks' must be one of [${e}]`)
        }
        a.sound == null || Qh.has(a.sound) || (e = Array.from(Qh).map(f => `'${f}'`).join(", "), d(`'sound' must be one of [${e}]`));
        a.onReady != null && typeof a.onReady !== "function" && d("'onReady' must be a function");
        return !c
    }

    function Yh(a, b, c) {
        for (const [d, e] of Wh) {
            const f = d,
                g = e;
            if (f in a) {
                c.B("lgc_fld", {
                    field: f
                });
                if (g in a) return b.error(`Invalid placement config: '${f}' has been renamed to ${g}. Cannot pass both fields. Please use ${g} only.`), !1;
                b.warn(`Placement config: '${f}' has been renamed to '${g}'. Please update your code.`);
                a[g] = a[f];
                delete a[f]
            }
        }
        return !0
    }

    function Zh(a, b, c) {
        let d = !1;
        const e = h => {
            d = !0;
            b.error(`Invalid placement config: ${h}.`)
        };
        a = Object.assign({}, a);
        if (!Yh(a, b, c)) return {
            ra: !1,
            va: a
        };
        if (!Rh.has(a.type)) {
            var f = Array.from(Rh).map(h => `'${h}'`).join(", ");
            e(`'type' must be one of [${f}]`);
            return {
                ra: !d,
                va: a
            }
        }
        c = Sh.get(a.type);
        const g = Th.get(c).filter(h => !(h in a));
        g.length > 0 && e("missing required properties " + g.map(h => `'${h}'`).join(", "));
        c = Uh.get(c).filter(h => h in a);
        c.length > 0 && e("the following properties are not used for the given ad type: " +
            c.map(h => `'${h}'`).join(", "));
        for (f of Vh) f in a && typeof a[f] !== "function" && e(`'${f}' must be a function`);
        return {
            ra: !d,
            va: a
        }
    };
    class $h extends H {
        constructor(a, b) {
            super();
            this.M = new S;
            this.g = !1;
            this.timeout = setTimeout(G(726, () => {
                b()
            }), a * 1E3)
        }
        get promise() {
            return this.M.promise
        }
        resolve(a) {
            this.u || (this.g = !0, this.M.resolve(a))
        }
        reject(a) {
            this.u || (this.g = !0, this.M.reject(a))
        }
        j() {
            clearTimeout(this.timeout)
        }
    }

    function ai(a, b) {
        if (a = a.google_adbreak_test) switch (a) {
            case "on":
                return new Kh;
            case "adsense":
                break;
            default:
                throw b.error(`Unsupported data-adbreak-test value '${a}. Supported values: '${"on"}'.`), Error("unsupported test mode");
        }
        return new zh
    }

    function bi(a) {
        return ["google_admob_interstitial_slot", "google_admob_rewarded_slot"].some(b => typeof ci(b, a) === "string")
    }

    function ci(a, b) {
        if (b[a] && typeof b[a] === "string") return String(b[a])
    }

    function di(a, b, c) {
        Xf == null && (Xf = new Wf);
        return Xf.connect().then(d => new vh(d, a, b, c))
    }

    function ei(a) {
        if (typeof a !== "string") return -1;
        a = /^(\d+)s$/.exec(a);
        return a == null ? -1 : Number(a[1])
    }

    function fi(a, b) {
        window.addEventListener("onpagehide" in self ? "pagehide" : "unload", G(938, () => {
            if (b.first_slotcar_request_processing_time) {
                var c = Date.now();
                a.g.B("sess_m", {
                    igsl: c - b.first_slotcar_request_processing_time,
                    afh: String(b.ad_frequency_hint),
                    niab: Number(b.number_of_interstitial_ad_breaks),
                    nias: Number(b.number_of_interstitial_ads_shown),
                    opsl: c - b.adsbygoogle_execution_start_time
                })
            }
        }))
    }

    function gi(a, b) {
        const c = b.google_admob_ads_only;
        typeof c === "string" && (c === "on" ? bi(b) ? a.ka = !0 : a.l.error("Cannot set data-admob-ads-only without providing at least one AdMob ad slot id.") : a.l.error(`Unsupported data-admob-ads-only value '${c}'. Supported value: 'on'.`))
    }

    function hi(a) {
        return a.wa ? "adbreaktest" : a.C ? "admob" : "adsense"
    }

    function ii(a) {
        if (!a.J || a.Ba) {
            if (!a.ya && a.o.preloadAdBreaks)
                for (var b of [1, 2])
                    if (!a.i.has(b) && !a.D.has(b)) return;
            for (a.ya = !0; a.la.length > 0;) b = a.la.pop(), ji(a, "onReady", b)
        }
    }

    function ki(a, b) {
        b = b.google_ad_frequency_hint;
        const c = Y(Fe);
        if (typeof b !== "string") return c;
        const d = /^(\d+)s$/.exec(b);
        return d == null ? (a.l.error(`Invalid data-ad-frequency-hint value: '${b}'. It must be in format 'Xs' where X is a number.`), c) : Math.max(Y(Ge), Number(d[1]))
    }

    function li(a, b) {
        !a.ka || a.C ? b() : a.g.B("adcf_afni")
    }

    function mi(a, b, c, d = !0) {
        const e = a.i.get(b);
        e && (e.dispose(), ni(a, b, 10, c), d && a.i.delete(b))
    }

    function oi(a, b) {
        return a.A.has(b) && !a.A.get(b).g
    }

    function ni(a, b, c, d) {
        if (oi(a, b)) throw Error("already scheduled");
        c = new $h(c, () => {
            pi(a, b, d)
        });
        a.A.set(b, c);
        return c
    }

    function ji(a, b, c) {
        Wc(() => {
            qi(a, b, c)
        })
    }

    function Z(a, b, c, d) {
        const e = {
            breakType: b.type,
            breakFormat: c === 2 ? "reward" : b.type === "preroll" ? "preroll" : "interstitial",
            breakStatus: d
        };
        b.name && (e.breakName = b.name);
        a.g.B("adbr_dn", {
            breakType: e.breakType,
            breakFormat: e.breakFormat,
            breakStatus: e.breakStatus,
            breakName: e.breakName ? ? ""
        });
        const f = b.adBreakDone;
        f != null && ji(a, "adBreakDone", () => {
            f(e)
        })
    }
    async function ri(a, b, c) {
        if (a.ia) return a.g.B("pr_rr"), Z(a, b, c, "frequencyCapped"), !1;
        a.ia = !0;
        a.J && await a.fa;
        var d = oi(a, c) ? a.A.get(c) : ni(a, c, 0, 2);
        d = await Promise.race([d.promise, Yc(Y(De) * 1E3, 2)]);
        return d === 1 ? (a.g.B("adbr_noad"), Z(a, b, c, "noAdPreloaded"), !1) : d === 2 ? (a.g.B("pr_to", {
            source: "slotcar"
        }), Z(a, b, c, "timeout"), !1) : !0
    }
    async function si(a, b) {
        const c = new S;
        a.xa = c;
        qi(a, "beforeReward", () => {
            b.beforeReward(() => {
                c.resolve(0)
            })
        });
        return await c.promise === 0
    }

    function qi(a, b, c) {
        if (c) try {
            c()
        } catch (d) {
            return a.l.error(`'${b}' callback threw an error:`, d), !1
        }
        return !0
    }

    function ti(a, b, c, d, e) {
        const f = a.La.get(c),
            g = b ? 1 : -1,
            h = f.length > 0 ? f[f.length - 1] : 0;
        Math.sign(h) === g ? f[f.length - 1] = h + g : f.push(g);
        a.g.B(b ? "prf_suc" : "prf_fail", {
            type: c,
            src: d,
            stats: f.join(","),
            timing: Date.now() - e
        })
    }

    function pi(a, b, c) {
        const d = Date.now();
        a.F.fetch({
            type: b,
            Fa: a.o.sound === "on",
            callback: e => {
                a.D.delete(b);
                const f = a.A.get(b);
                e ? (f.resolve(0), a.i.set(b, e), I(e, () => {
                    a.i.delete(b)
                })) : (f.resolve(1), a.D.add(b), ni(a, b, Y(He), 5));
                ti(a, e != null, b, c, d);
                c !== 1 && c !== 7 || ii(a)
            }
        })
    }
    var ui = class extends H {
        constructor(a, b) {
            super();
            this.l = a;
            this.g = b;
            this.F = null;
            this.T = "";
            this.ia = this.J = this.ya = this.wa = !1;
            this.ha = 0;
            this.I = !1;
            this.xa = null;
            this.la = [];
            this.N = window.innerWidth;
            this.ma = window.innerHeight;
            this.ka = this.Ba = this.C = !1;
            this.ja = 0;
            this.fa = Promise.resolve();
            this.za = 0;
            this.o = {
                sound: "on"
            };
            this.i = new Map;
            this.A = new Map;
            this.Aa = new Oh;
            this.D = new Set;
            this.La = new Map([
                [1, []],
                [2, []]
            ]);
            I(this, oa(xe, this.Aa))
        }
        init(a) {
            this.T = String(a.google_ad_client);
            if (this.F != null) this.g.B("dbl_init", {
                ad_client: this.T
            });
            else {
                var b = Lg();
                b.in_game_session_length = 0;
                b.number_of_interstitial_ad_breaks = 0;
                b.number_of_interstitial_ads_shown = 0;
                b.ad_frequency_hint = a.google_ad_frequency_hint ? String(a.google_ad_frequency_hint) : "";
                fi(this, b);
                b = navigator.userAgent;
                var c = RegExp("\\bwv\\b");
                this.J = b.includes("Android") && c.test(b);
                a.google_adbreak_test === "on" && (this.wa = !0);
                gi(this, a);
                this.g.ea(this.T);
                this.F = new lh(ai(a, this.l));
                this.g.L(hi(this));
                if (bi(a)) {
                    this.g.X({
                        Da: ci("google_admob_interstitial_slot", a),
                        Ia: ci("google_admob_rewarded_slot", a)
                    });
                    const e = Date.now();
                    b = di(a, this.l, this.g).then(f => {
                        this.F != null && this.F.dispose();
                        this.F = new lh(f);
                        this.C = !0;
                        this.g.L(hi(this));
                        for (const g of [1, 2])
                            if ((f = this.i.get(g)) || oi(this, g)) f ? (f.dispose(), this.i.delete(g)) : (this.A.get(g).dispose(), this.A.delete(g)), ni(this, g, 0, 7)
                    }).catch(f => {
                        this.g.B("admb_fetfail", {
                            error: f
                        })
                    }).finally(() => {
                        this.g.B("admb_tm", {
                            timing: Date.now() - e
                        })
                    });
                    this.J && (this.fa = Promise.race([b, Yc(Y(Be) * 1E3)]), this.fa.finally(() => {
                        this.Ba = !0;
                        ii(this)
                    }))
                }
                this.ha =
                    ki(this, a);
                this.ja = ei(a.google_ad_start_delay_hint);
                this.N = window.innerWidth;
                this.ma = window.innerHeight;
                var d = dc(G(791, () => {
                    if (this.N !== window.innerWidth || this.ma !== window.innerHeight)
                        if (!this.C || this.N !== window.innerWidth) {
                            for (const e of this.i.keys()) mi(this, e, 4, !1);
                            this.i.clear();
                            this.N = window.innerWidth;
                            this.ma = window.innerHeight
                        }
                }));
                window.addEventListener("resize", d);
                I(this, () => {
                    window.removeEventListener("resize", d)
                });
                this.za = Date.now()
            }
        }
        handleAdConfig(a) {
            Xh(a, this.l) ? (this.g.B("adcf_cl", {
                    preloadAdBreaks: a.preloadAdBreaks ||
                        "",
                    sound: a.sound || "",
                    onReady: a.onReady ? "true" : "false"
                }), a.sound && this.o.sound !== a.sound && (this.o.sound = a.sound, li(this, () => {
                    mi(this, 1, 6)
                })), a.preloadAdBreaks && !this.o.preloadAdBreaks ? li(this, () => {
                    this.o.preloadAdBreaks = a.preloadAdBreaks;
                    if (this.o.preloadAdBreaks === "on")
                        for (const b of [1, 2]) this.i.has(b) || oi(this, b) || ni(this, b, 0, 1)
                }) : a.preloadAdBreaks && this.o.preloadAdBreaks && this.l.error("'adConfig' was already called to set 'preloadAdBreaks' with value " + `'${this.o.preloadAdBreaks}'`), a.onReady &&
                (this.la.push(a.onReady), ii(this))) : this.g.B("inv_adcnf")
        }
        async handleAdBreak(a, b) {
            if (!this.ka || this.C)
                if (a = Zh(a, this.l, this.g), a.ra) {
                    var c = a.va,
                        d = c.type === "reward" ? 2 : 1;
                    if (d !== 1 || this.ja <= 0 || Date.now() - this.za > this.ja * 1E3) {
                        a = Lg();
                        d === 1 && a.number_of_interstitial_ad_breaks++;
                        var e = c.type === "preroll";
                        this.g.B("adbr_cl", {
                            type: c.type,
                            name: c.name || "",
                            frequency_cap: d === 2 ? 0 : this.ha,
                            last_intr: Date.now() - this.Aa.g
                        });
                        if (b && !e) Z(this, c, d, "notReady");
                        else if (d === 2 && this.xa ? .resolve(1), this.i.get(d) || !e || await ri(this,
                                c, d)) {
                            var f = this.i.get(d);
                            if (f)
                                if (d !== 2 || await si(this, c))
                                    if (this.I) this.l.error("Cannot show ad while another ad is already visible."), Z(this, c, d, "frequencyCapped");
                                    else if (qi(this, "beforeAd", c.beforeAd)) {
                                this.I = !0;
                                d === 1 && a.number_of_interstitial_ads_shown++;
                                this.ia = !0;
                                var g = Date.now(),
                                    h = k => {
                                        this.I = !1;
                                        k === 2 || d === 2 && k === 4 ? ji(this, "adDismissed", c.adDismissed) : k === 3 && ji(this, "adViewed", c.adViewed);
                                        ji(this, "afterAd", c.afterAd);
                                        d === 1 ? Z(this, c, d, "viewed") : Z(this, c, d, k === 4 ? "other" : k === 2 ? "dismissed" : "viewed");
                                        k !== 4 && (f.dispose(), ni(this, d, d === 2 ? 0 : this.ha, 3));
                                        this.g.B("ad_cls", {
                                            result: k,
                                            adType: d,
                                            dur: Date.now() - g
                                        })
                                    };
                                I(f, () => {
                                    this.I && h(4)
                                });
                                f.show(h)
                            } else ji(this, "afterAd", c.afterAd), Z(this, c, d, "error");
                            else Z(this, c, d, "ignored");
                            else oi(this, d) ? (this.g.B("adbr_noad"), Z(this, c, d, this.D.has(d) ? "other" : "frequencyCapped")) : (ni(this, d, 0, 2), Z(this, c, d, "noAdPreloaded"))
                        }
                    } else this.g.B("adbr_tepgai")
                } else this.g.B("inv_plcnf");
            else this.g.B("adbr_naf")
        }
        handleAdBreakBeforeReady(a) {
            return this.handleAdBreak(a, !0)
        }
        j() {
            for (const a of this.A.values()) a.dispose();
            this.A.clear();
            for (const a of this.i.values()) a.dispose();
            this.i.clear();
            this.F && this.F.dispose();
            super.j()
        }
    };
    Id(D, 723, () => {
        const a = new je;
        try {
            pb(d => {
                var e = new Yd;
                var f = new Xd;
                try {
                    var g = Xc(window);
                    w(f, 1, wb(g), "0")
                } catch (q) {}
                try {
                    var h = E(le).g();
                    Pb(f, 2, h, vb)
                } catch (q) {}
                try {
                    x(f, 3, window.document.URL)
                } catch (q) {}
                e = Tb(e, 2, f);
                f = new Wd;
                f = w(f, 1, ub(1196), 0);
                try {
                    var k = Md(d ? .name) ? d.name : "Unknown error";
                    x(f, 2, k)
                } catch (q) {}
                try {
                    var m = Md(d ? .message) ? d.message : `Caught ${d}`;
                    x(f, 3, m)
                } catch (q) {}
                try {
                    const q = Md(d ? .stack) ? d.stack : Error().stack;
                    q && Pb(f, 4, q.split(/\n\s*/), yb)
                } catch (q) {}
                d = Tb(e, 1, f);
                k = new Vd;
                try {
                    x(k, 1, he())
                } catch {}
                Ub(d,
                    6, Zd, k);
                w(d, 5, wb(1), "0");
                ae(a, d)
            })
        } catch (d) {}
        var b = hh();
        fh(D, Vb(zb(Mb(b, 2)), ""));
        qg(Vb(sb(Mb(b, 6)), !1));
        bh();
        b = new mh(Vb(zb(Mb(b, 2)), ""));
        b = Ie ? new Mh(b) : b;
        const c = {
            error(...d) {
                console.error("[Ad Placement API]", ...d)
            },
            warn(...d) {
                console.warn("[Ad Placement API]", ...d)
            }
        };
        Ia() ? c.warn("Internet Explorer is not supported.") : ih(new ui(c, b))
    });
}).call(this, "[2021,\"r20240724\",\"r20110914\",null,null,null,null,\".google.com.pk\",null,null,null,null,null,null,null,null,null,-1,[44759875,44759926,44759837]]");