(function() {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var m = this || self;

    function aa(a, b) {
        a: {
            var c = ["CLOSURE_FLAGS"];
            for (var d = m, f = 0; f < c.length; f++)
                if (d = d[c[f]], d == null) {
                    c = null;
                    break a
                }
            c = d
        }
        a = c && c[a];
        return a != null ? a : b
    };

    function ba(a) {
        a = a.o;
        const b = encodeURIComponent;
        let c = "";
        a.platform && (c += "&uap=" + b(a.platform));
        a.platformVersion && (c += "&uapv=" + b(a.platformVersion));
        a.uaFullVersion && (c += "&uafv=" + b(a.uaFullVersion));
        a.architecture && (c += "&uaa=" + b(a.architecture));
        a.model && (c += "&uam=" + b(a.model));
        a.bitness && (c += "&uab=" + b(a.bitness));
        a.fullVersionList && (c += "&uafvl=" + b(a.fullVersionList.map(d => b(d.brand) + ";" + b(d.version)).join("|")));
        typeof a.wow64 !== "undefined" && (c += "&uaw=" + Number(a.wow64));
        return c
    }

    function ca(a, b) {
        return a.g ? a.m.slice(0, a.g.index) + b + a.m.slice(a.g.index) : a.m + b
    }

    function da(a, b = 0) {
        let c = "&act=1&ri=1";
        b == 1 && (c = "&act=1&ri=24");
        a.h && a.o && (c += ba(a));
        return ca(a, c)
    }

    function ea(a, b) {
        return a.h && a.i || a.l ? b == 1 ? a.h ? a.i : ca(a, "&dct=1") : b == 2 ? ca(a, "&ri=2") : ca(a, "&ri=16") : a.m
    }
    var fa = class {
        constructor({
            url: a,
            Z: b
        }) {
            this.m = a;
            this.o = b;
            b = /[?&]dsh=1(&|$)/.test(a);
            this.h = !b && /[?&]ae=1(&|$)/.test(a);
            this.l = !b && /[?&]ae=2(&|$)/.test(a);
            this.g = /[?&]adurl=([^&]*)/.exec(a);
            this.A = !b && /[?&]aspm=1(&|$)/.test(a);
            if (this.g && this.g[1]) {
                let c;
                try {
                    c = decodeURIComponent(this.g[1])
                } catch (d) {
                    c = null
                }
                this.i = c
            }
        }
    };

    function ha(a, b) {
        a: {
            const c = a.length,
                d = typeof a === "string" ? a.split("") : a;
            for (let f = 0; f < c; f++)
                if (f in d && b.call(void 0, d[f], f, a)) {
                    b = f;
                    break a
                }
            b = -1
        }
        return b < 0 ? null : typeof a === "string" ? a.charAt(b) : a[b]
    };

    function ia(a) {
        let b = 0;
        for (const c in a) b++
    };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var r = class {
            constructor(a) {
                this.g = a
            }
            toString() {
                return this.g
            }
        },
        ka = new r("about:invalid#zClosurez");
    class la {
        constructor(a) {
            this.ga = a
        }
    }

    function t(a) {
        return new la(b => b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const ma = new la(a => /^[^:]*([/?#]|$)/.test(a));
    var na = t("http"),
        oa = t("https"),
        pa = t("ftp"),
        qa = t("mailto"),
        ra = t("intent"),
        ta = t("market"),
        ua = t("itms"),
        va = t("itms-appss");
    const wa = [t("data"), na, oa, qa, pa, ma];

    function xa(a, b = wa) {
        if (a instanceof r) return a;
        for (let c = 0; c < b.length; ++c) {
            const d = b[c];
            if (d instanceof la && d.ga(a)) return new r(a)
        }
    }

    function ya(a, b = wa) {
        return xa(a, b) || ka
    }
    var za = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;

    function Aa(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };

    function Ba(a) {
        m.setTimeout(() => {
            throw a;
        }, 0)
    };
    const Ca = aa(1, !1);
    var Da = aa(610401301, !1),
        Ea = aa(188588736, !0),
        Fa = aa(645172343, Ca),
        Ga = aa(653718497, Ca);
    var Ha;
    const Ia = m.navigator;
    Ha = Ia ? Ia.userAgentData || null : null;

    function Ka(a) {
        return Da ? Ha ? Ha.brands.some(({
            brand: b
        }) => b && b.indexOf(a) != -1) : !1 : !1
    }

    function v(a) {
        var b;
        a: {
            if (b = m.navigator)
                if (b = b.userAgent) break a;b = ""
        }
        return b.indexOf(a) != -1
    };

    function w() {
        return Da ? !!Ha && Ha.brands.length > 0 : !1
    }

    function La() {
        return w() ? Ka("Chromium") : (v("Chrome") || v("CriOS")) && !(w() ? 0 : v("Edge")) || v("Silk")
    };

    function Ma() {
        return v("iPhone") && !v("iPod") && !v("iPad")
    };

    function Na(a) {
        Na[" "](a);
        return a
    }
    Na[" "] = function() {};
    var Oa = Ma(),
        Pa = v("iPad");
    var Qa = Ma() || v("iPod"),
        Ra = v("iPad");
    !v("Android") || La();
    La();
    v("Safari") && (La() || (w() ? 0 : v("Coast")) || (w() ? 0 : v("Opera")) || (w() ? 0 : v("Edge")) || (w() ? Ka("Microsoft Edge") : v("Edg/")) || w() && Ka("Opera"));
    var Sa = {},
        Ta = null;

    function x(a) {
        return Array.prototype.slice.call(a)
    };
    var y = Symbol(),
        Ua = Symbol(),
        Va = Symbol();

    function z(a) {
        a[y] |= 34;
        return a
    }

    function Wa(a, b) {
        b[y] = (a | 0) & -14591
    }

    function Xa(a, b) {
        b[y] = (a | 34) & -14557
    };
    var Ya = {},
        Za = {};

    function $a(a) {
        return !(!a || typeof a !== "object" || a.ia !== Za)
    }

    function ab(a) {
        return a !== null && typeof a === "object" && !Array.isArray(a) && a.constructor === Object
    }

    function bb(a, b, c) {
        if (!Array.isArray(a) || a.length) return !1;
        const d = a[y] | 0;
        if (d & 1) return !0;
        if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
        a[y] = d | 1;
        return !0
    }
    var cb;
    const db = [];
    db[y] = 55;
    cb = Object.freeze(db);

    function eb(a) {
        if (a & 2) throw Error();
    }
    class fb {
        constructor(a, b, c) {
            this.i = 0;
            this.g = a;
            this.h = b;
            this.l = c
        }
        next() {
            if (this.i < this.g.length) {
                const a = this.g[this.i++];
                return {
                    done: !1,
                    value: this.h ? this.h.call(this.l, a) : a
                }
            }
            return {
                done: !0,
                value: void 0
            }
        }[Symbol.iterator]() {
            return new fb(this.g, this.h, this.l)
        }
    }
    var gb = Object.freeze({});
    Object.freeze({});
    var ib = Object.freeze({});
    let jb;

    function kb() {
        const a = Error();
        Aa(a, "incident");
        Ba(a)
    }

    function lb(a) {
        a = Error(a);
        Aa(a, "warning");
        return a
    };

    function nb(a) {
        if (!Number.isFinite(a)) throw lb("enum");
        return a | 0
    }

    function ob(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return Number.isFinite(a) ? a | 0 : void 0
    }

    function B(a) {
        return a == null || typeof a === "string" ? a : void 0
    }

    function pb(a, b, c, d) {
        if (a != null && typeof a === "object" && a.F === Ya) return a;
        if (!Array.isArray(a)) return c ? d & 2 ? (a = b[Ua]) ? b = a : (a = new b, z(a.j), b = b[Ua] = a) : b = new b : b = void 0, b;
        let f = c = a[y] | 0;
        f === 0 && (f |= d & 32);
        f |= d & 2;
        f !== c && (a[y] = f);
        return new b(a)
    }

    function qb(a, b, c) {
        if (b) {
            if (typeof a !== "string") throw Error();
            return a
        }
        let d;
        return (d = B(a)) != null ? d : c ? "" : void 0
    };
    let rb;

    function sb(a) {
        if (typeof Proxy !== "function") return a;
        let b = wb(a);
        if (b) return b;
        b = new Proxy(a, {
            set(c, d, f) {
                xb();
                c[d] = f;
                return !0
            }
        });
        yb(a, b);
        return b
    }

    function xb() {
        kb()
    }
    let zb = void 0,
        Ab = void 0;

    function wb(a) {
        let b;
        return (b = zb) == null ? void 0 : b.get(a)
    }

    function yb(a, b) {
        (zb || (zb = new WeakMap)).set(a, b);
        (Ab || (Ab = new WeakMap)).set(b, a)
    };
    const Bb = {},
        Cb = (() => class extends Map {
            constructor() {
                super()
            }
        })();

    function Db(a) {
        return a
    }

    function Eb(a) {
        if (a.s & 2) throw Error("Cannot mutate an immutable Map");
    }
    var D = class extends Cb {
        constructor(a, b, c = Db, d = Db) {
            super();
            let f = a[y] | 0;
            f |= 64;
            this.s = a[y] = f;
            this.C = b;
            this.v = c;
            this.K = this.C ? Fb : d;
            for (let e = 0; e < a.length; e++) {
                const h = a[e],
                    g = c(h[0], !1, !0);
                let k = h[1];
                b ? k === void 0 && (k = null) : k = d(h[1], !1, !0, void 0, void 0, f);
                super.set(g, k)
            }
        }
        Y(a = Gb) {
            if (this.size !== 0) return this.H(a)
        }
        H(a = Gb) {
            const b = [],
                c = super.entries();
            for (var d; !(d = c.next()).done;) d = d.value, d[0] = a(d[0]), d[1] = a(d[1]), b.push(d);
            return b
        }
        clear() {
            Eb(this);
            super.clear()
        }
        delete(a) {
            Eb(this);
            return super.delete(this.v(a, !0, !1))
        }
        entries() {
            var a = this.W();
            return new fb(a, Hb, this)
        }
        keys() {
            return this.ha()
        }
        values() {
            var a = this.W();
            return new fb(a, D.prototype.get, this)
        }
        forEach(a, b) {
            super.forEach((c, d) => {
                a.call(b, this.get(d), d, this)
            })
        }
        set(a, b) {
            Eb(this);
            a = this.v(a, !0, !1);
            return a == null ? this : b == null ? (super.delete(a), this) : super.set(a, this.K(b, !0, !0, this.C, !1, this.s))
        }
        has(a) {
            return super.has(this.v(a, !1, !1))
        }
        get(a) {
            a = this.v(a, !1, !1);
            const b = super.get(a);
            if (b !== void 0) {
                var c = this.C;
                return c ? (c = this.K(b, !1, !0, c, this.fa, this.s),
                    c !== b && super.set(a, c), c) : b
            }
        }
        W() {
            return Array.from(super.keys())
        }
        ha() {
            return super.keys()
        }[Symbol.iterator]() {
            return this.entries()
        }
    };
    D.prototype.toJSON = void 0;
    D.prototype.ia = Za;

    function Fb(a, b, c, d, f, e) {
        a = pb(a, d, c, e);
        f && (a = Ib(a));
        return a
    }

    function Gb(a) {
        return a
    }

    function Hb(a) {
        return [a, this.get(a)]
    }
    let Jb;

    function Kb() {
        return Jb || (Jb = new D(z([]), void 0, void 0, void 0, Bb))
    };

    function Lb(a, b) {
        return Mb(b)
    }

    function Mb(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (bb(a, void 0, 0)) return
                    } else {
                        if (a != null && a instanceof Uint8Array) {
                            let b = "",
                                c = 0;
                            const d = a.length - 10240;
                            for (; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
                            b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
                            return btoa(b)
                        }
                        if (a instanceof D) return a.Y()
                    }
        }
        return a
    };

    function Nb(a, b, c) {
        a = x(a);
        var d = a.length;
        const f = b & 256 ? a[d - 1] : void 0;
        d += f ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
        if (f) {
            b = a[b] = {};
            for (const e in f) b[e] = c(f[e])
        }
        return a
    }

    function Ob(a, b, c, d, f) {
        if (a != null) {
            if (Array.isArray(a)) a = bb(a, void 0, 0) ? void 0 : f && (a[y] | 0) & 2 ? a : Pb(a, b, c, d !== void 0, f);
            else if (ab(a)) {
                const e = {};
                for (let h in a) e[h] = Ob(a[h], b, c, d, f);
                a = e
            } else a = b(a, d);
            return a
        }
    }

    function Pb(a, b, c, d, f) {
        const e = d || c ? a[y] | 0 : 0;
        d = d ? !!(e & 32) : void 0;
        a = x(a);
        for (let h = 0; h < a.length; h++) a[h] = Ob(a[h], b, c, d, f);
        c && c(e, a);
        return a
    }

    function Qb(a) {
        return Ob(a, Rb, void 0, void 0, !1)
    }

    function Rb(a) {
        return a.F === Ya ? a.toJSON() : a instanceof D ? a.Y(Qb) : Mb(a)
    };

    function Sb(a, b, c = Xa) {
        if (a != null) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[y] | 0;
                if (d & 2) return a;
                b && (b = d === 0 || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (a[y] = (d | 34) & -12293, a) : Pb(a, Sb, d & 4 ? Xa : c, !0, !0)
            }
            a.F === Ya ? (c = a.j, d = c[y], a = d & 2 ? a : Tb(a, c, d, !0)) : a instanceof D && !(a.s & 2) && (c = z(a.H(Sb)), a = new D(c, a.C, a.v, a.K));
            return a
        }
    }

    function Ub(a) {
        const b = a.j;
        return Tb(a, b, b[y], !1)
    }

    function Tb(a, b, c, d) {
        a = a.constructor;
        rb = b = Vb(b, c, d);
        b = new a(b);
        rb = void 0;
        return b
    }

    function Vb(a, b, c) {
        const d = c || b & 2 ? Xa : Wa,
            f = !!(b & 32);
        a = Nb(a, b, e => Sb(e, f, d));
        a[y] = a[y] | 32 | (c ? 2 : 0);
        return a
    }

    function Ib(a) {
        const b = a.j,
            c = b[y];
        return c & 2 ? Tb(a, b, c, !1) : a
    };

    function E(a, b) {
        a = a.j;
        return F(a, a[y], b)
    }

    function Wb(a, b, c, d) {
        b = d + (+!!(b & 512) - 1);
        if (!(b < 0 || b >= a.length || b >= c)) return a[b]
    }

    function F(a, b, c, d) {
        if (c === -1) return null;
        const f = b >> 14 & 1023 || 536870912;
        if (c >= f) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var e = a.length;
            if (d && b & 256 && (d = a[e - 1][c], d != null)) {
                if (Wb(a, b, f, c) && Va != null) {
                    var h;
                    a = (h = jb) != null ? h : jb = {};
                    h = a[Va] || 0;
                    h >= 4 || (a[Va] = h + 1, kb())
                }
                return d
            }
            return Wb(a, b, f, c)
        }
    }

    function Xb(a, b, c) {
        const d = a.j;
        let f = d[y];
        eb(f);
        G(d, f, b, c);
        return a
    }

    function G(a, b, c, d, f) {
        const e = b >> 14 & 1023 || 536870912;
        if (c >= e || f && !Fa) {
            let h = b;
            if (b & 256) f = a[a.length - 1];
            else {
                if (d == null) return h;
                f = a[e + (+!!(b & 512) - 1)] = {};
                h |= 256
            }
            f[c] = d;
            c < e && (a[c + (+!!(b & 512) - 1)] = void 0);
            h !== b && (a[y] = h);
            return h
        }
        a[c + (+!!(b & 512) - 1)] = d;
        b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
        return b
    }

    function H(a, b, c) {
        return Yb(a, b, c) !== void 0
    }

    function Zb(a, b, c) {
        a = F(a, b, c);
        return Array.isArray(a) ? a : cb
    }

    function $b(a, b) {
        a === 0 && (a = I(a, b));
        return a | 1
    }

    function J(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    }

    function ac(a, b, c, d, f, e) {
        const h = b & 2;
        a: {
            var g = c,
                k = b & 2;c = !1;
            if (g == null) {
                if (k) {
                    a = Kb();
                    break a
                }
                g = []
            } else if (g.constructor === D) {
                if ((g.s & 2) == 0 || k) {
                    a = g;
                    break a
                }
                g = g.H()
            } else Array.isArray(g) ? c = !!((g[y] | 0) & 2) : g = [];
            if (k) {
                if (!g.length) {
                    a = Kb();
                    break a
                }
                c || (c = !0, z(g))
            } else if (c) {
                c = !1;
                k = x(g);
                for (g = 0; g < k.length; g++) {
                    const l = k[g] = x(k[g]);
                    Array.isArray(l[1]) && (l[1] = z(l[1]))
                }
                g = k
            }
            c || ((g[y] | 0) & 64 ? g[y] &= -33 : 32 & b && (g[y] |= 32));e = new D(g, f, qb, e);G(a, b, d, e, !1);a = e
        }!h && f && (a.fa = !0);
        return a
    }

    function bc(a, b) {
        a = a.j;
        const c = a[y];
        return ac(a, c, F(a, c, b), b, void 0, qb)
    }

    function cc(a) {
        var b = dc;
        a = a.j;
        const c = a[y];
        return ac(a, c, F(a, c, 1), 1, b)
    }

    function Yb(a, b, c) {
        a = a.j;
        let d = a[y];
        const f = F(a, d, c, !1);
        b = pb(f, b, !1, d);
        b !== f && b != null && G(a, d, c, b, !1);
        return b
    }

    function K(a, b, c) {
        b = Yb(a, b, c);
        if (b == null) return b;
        a = a.j;
        let d = a[y];
        if (!(d & 2)) {
            const f = Ib(b);
            f !== b && (b = f, G(a, d, c, b, !1))
        }
        return b
    }

    function I(a, b) {
        a = (2 & b ? a | 2 : a & -3) | 32;
        return a &= -2049
    }

    function ec(a, b, c) {
        32 & b && c || (a &= -33);
        return a
    }

    function N(a, b) {
        return a != null ? a : b
    }

    function fc(a, b) {
        a = E(a, b);
        return a == null ? a : Number.isFinite(a) ? a | 0 : void 0
    }

    function O(a, b, c = !1) {
        a = E(a, b);
        return N(a == null || typeof a === "boolean" ? a : typeof a === "number" ? !!a : void 0, c)
    }

    function P(a, b) {
        return N(B(E(a, b)), "")
    }

    function Q(a, b, c = 0) {
        return N(fc(a, b), c)
    }

    function gc(a, b) {
        var c = void 0 === gb ? 2 : Ga ? 5 : 2;
        const d = a.j;
        a = d[y];
        const f = 2 & a ? 1 : c;
        c = Zb(d, a, b);
        var e = c[y] | 0;
        if (!(4 & e)) {
            if (4 & e || Object.isFrozen(c)) c = x(c), e = I(e, a), a = G(d, a, b, c);
            var h = 0;
            let k = 0;
            for (; h < c.length; h++) {
                const l = B(c[h]);
                l != null && (c[k++] = l)
            }
            k < h && (c.length = k);
            e = $b(e, a);
            e = (e | 20) & -4097;
            e &= -8193;
            c[y] = e;
            2 & e && Object.freeze(c)
        }
        let g;
        f === 1 || f === 4 && 32 & e ? J(e) || (b = e, e |= 2, e !== b && (c[y] = e), Object.freeze(c)) : (h = f !== 5 ? !1 : !!(32 & e) || J(e) || !!wb(c), (f === 2 || h) && J(e) && (c = x(c), e = I(e, a), e = ec(e, a, !1), c[y] = e, a = G(d, a, b,
            c)), J(e) || (b = e, e = ec(e, a, !1), e !== b && (c[y] = e)), h && (g = sb(c)));
        return g || c
    }

    function hc(a, b, c) {
        if (c != null && typeof c !== "boolean") throw a = typeof c, Error(`Expected boolean but got ${a!="object"?a:c?Array.isArray(c)?"array":a:"null"}: ${c}`);
        return Xb(a, b, c)
    }

    function ic(a, b, c) {
        if (c != null) {
            if (typeof c !== "number") throw lb("int32");
            if (!Number.isFinite(c)) throw lb("int32");
            c |= 0
        }
        Xb(a, b, c)
    }

    function R(a, b, c) {
        if (c != null && typeof c !== "string") throw Error();
        return Xb(a, b, c)
    }

    function jc(a, b, c) {
        Xb(a, b, c == null ? c : nb(c))
    };
    let S;

    function kc(a) {
        try {
            return S = !0, JSON.stringify(lc(a), Lb)
        } finally {
            S = !1
        }
    }
    var T = class {
        constructor(a) {
            a: {
                a == null && (a = rb);rb = void 0;
                if (a == null) {
                    var b = 96;
                    a = []
                } else {
                    if (!Array.isArray(a)) throw Error("narr");
                    b = a[y] | 0;
                    if (b & 2048) throw Error("farr");
                    if (b & 64) break a;
                    var c = a;
                    b |= 64;
                    var d = c.length;
                    if (d && (--d, ab(c[d]))) {
                        b |= 256;
                        c = d - (+!!(b & 512) - 1);
                        if (c >= 1024) throw Error("pvtlmt");
                        b = b & -16760833 | (c & 1023) << 14
                    }
                }
                a[y] = b
            }
            this.j = a
        }
        toJSON() {
            return lc(this)
        }
    };
    T.prototype.F = Ya;
    T.prototype.toString = function() {
        try {
            return S = !0, lc(this).toString()
        } finally {
            S = !1
        }
    };

    function lc(a) {
        var b = S ? a.j : Pb(a.j, Rb, void 0, void 0, !1);
        var c = !S;
        var d = Ea ? void 0 : a.constructor.B;
        var f = (c ? a.j : b)[y];
        if (a = b.length) {
            var e = b[a - 1],
                h = ab(e);
            h ? a-- : e = void 0;
            f = +!!(f & 512) - 1;
            var g = b;
            if (h) {
                b: {
                    var k = e;
                    var l = {};h = !1;
                    if (k)
                        for (var n in k) {
                            if (isNaN(+n)) {
                                l[n] = k[n];
                                continue
                            }
                            let u = k[n];
                            Array.isArray(u) && (bb(u, d, +n) || $a(u) && u.size === 0) && (u = null);
                            u == null && (h = !0);
                            u != null && (l[n] = u)
                        }
                    if (h) {
                        for (var p in l) break b;
                        l = null
                    } else l = k
                }
                k = l == null ? e != null : l !== e
            }
            for (var q; a > 0; a--) {
                p = a - 1;
                n = g[p];
                p -= f;
                if (!(n == null || bb(n,
                        d, p) || $a(n) && n.size === 0)) break;
                q = !0
            }
            if (g !== b || k || q) {
                if (!c) g = Array.prototype.slice.call(g, 0, a);
                else if (q || k || l) g.length = a;
                l && g.push(l)
            }
            b = g
        }
        return b
    };
    var mc = class extends T {};
    var nc = class extends T {
        constructor() {
            super()
        }
    };
    var oc = class extends T {};
    var pc = class extends T {};
    var qc = class extends T {
        u() {
            return P(this, 3)
        }
        X(a) {
            hc(this, 5, a)
        }
    };
    var U = class extends T {
        u() {
            return P(this, 1)
        }
        X(a) {
            hc(this, 2, a)
        }
    };
    var rc = class extends T {};

    function sc(a) {
        var b = a.j,
            c = b[y];
        a = c;
        var d = !(2 & c),
            f = void 0 === gb ? 2 : Ga ? 5 : 2;
        f = (c = !!(2 & a)) ? 1 : f;
        d && (d = !c);
        c = Zb(b, a, 7);
        var e = c[y] | 0,
            h = !!(4 & e);
        if (!h) {
            e = $b(e, a);
            var g = c,
                k = a,
                l = !!(2 & e);
            l && (k |= 2);
            let p = !l,
                q = !0,
                u = 0,
                A = 0;
            for (; u < g.length; u++) {
                const C = pb(g[u], qc, !1, k);
                if (C instanceof qc) {
                    if (!l) {
                        const Y = !!((C.j[y] | 0) & 2);
                        p && (p = !Y);
                        q && (q = Y)
                    }
                    g[A++] = C
                }
            }
            A < u && (g.length = A);
            e |= 4;
            e = q ? e | 16 : e & -17;
            e = p ? e | 8 : e & -9;
            g[y] = e;
            l && Object.freeze(g)
        }
        if (d && !(8 & e || !c.length && (f === 1 || f === 4 && 32 & e))) {
            J(e) && (c = x(c), e = I(e, a), a = G(b, a, 7, c));
            d = c;
            g =
                e;
            for (e = 0; e < d.length; e++) k = d[e], l = Ib(k), k !== l && (d[e] = l);
            g |= 8;
            g = d.length ? g & -17 : g | 16;
            e = d[y] = g
        }
        let n;
        f === 1 || f === 4 && 32 & e ? J(e) || (a = e, e |= !c.length || 16 & e && (!h || 32 & e) ? 2 : 2048, e !== a && (c[y] = e), Object.freeze(c)) : (h = f !== 5 ? !1 : !!(32 & e) || J(e) || !!wb(c), (f === 2 || h) && J(e) && (c = x(c), e = I(e, a), e = ec(e, a, !1), c[y] = e, a = G(b, a, 7, c)), J(e) || (b = e, e = ec(e, a, !1), e !== b && (c[y] = e)), h && (n = sb(c)));
        return n || c
    }
    var dc = class extends T {};
    dc.B = [6, 7];
    var tc = class extends T {};
    tc.B = [17];
    var uc = class extends T {};
    var vc = class extends T {
        constructor() {
            super()
        }
    };

    function wc(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var xc = {
            capture: !0
        },
        yc = {
            passive: !0
        },
        zc = wc(function() {
            let a = !1;
            try {
                const b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                m.addEventListener("test", null, b)
            } catch (b) {}
            return a
        });

    function Ac(a) {
        return a ? a.passive && zc() ? a : a.capture || !1 : !1
    }

    function V(a, b, c, d) {
        a.addEventListener && a.addEventListener(b, c, Ac(d))
    };

    function Bc(a, b) {
        if (b instanceof r)
            if (b instanceof r) b = b.g;
            else throw Error("");
        else b = za.test(b) ? b : void 0;
        a.href = b === void 0 ? ka.toString() : b
    };
    var Cc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function Dc(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) Dc(a, String(b[d]), c);
        else b != null && c.push(a + (b === "" ? "" : "=" + encodeURIComponent(String(b))))
    }

    function Ec(a, b, c, d) {
        for (var f = c.length;
            (b = a.indexOf(c, b)) >= 0 && b < d;) {
            var e = a.charCodeAt(b - 1);
            if (e == 38 || e == 63)
                if (e = a.charCodeAt(b + f), !e || e == 61 || e == 38 || e == 35) return b;
            b += f + 1
        }
        return -1
    }
    var Fc = /#|$/;

    function Gc(a, b) {
        var c = a.search(Fc),
            d = Ec(a, 0, b, c);
        if (d < 0) return null;
        var f = a.indexOf("&", d);
        if (f < 0 || f > c) f = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, f !== -1 ? f : 0).replace(/\+/g, " "))
    }
    var Hc = /[?&]($|#)/;

    function Ic(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }
    var Jc = a => {
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    };
    let Kc = [];
    const Lc = () => {
        const a = Kc;
        Kc = [];
        for (const b of a) try {
            b()
        } catch (c) {}
    };
    var Mc = a => {
            Kc.push(a);
            Kc.length == 1 && (window.Promise ? Promise.resolve().then(Lc) : window.setImmediate ? setImmediate(Lc) : setTimeout(Lc, 0))
        },
        Rc = a => {
            var b = W;
            b.readyState === "complete" || b.readyState === "interactive" ? Mc(a) : b.addEventListener("DOMContentLoaded", a)
        },
        Sc = a => {
            var b = window;
            b.document.readyState === "complete" ? Mc(a) : b.addEventListener("load", a)
        };

    function Tc(a = document) {
        return a.createElement("img")
    };

    function Uc(a, b, c = null, d = !1) {
        Vc(a, b, c, d)
    }

    function Vc(a, b, c, d) {
        a.google_image_requests || (a.google_image_requests = []);
        const f = Tc(a.document);
        if (c || d) {
            const e = h => {
                c && c(h);
                if (d) {
                    h = a.google_image_requests;
                    const g = Array.prototype.indexOf.call(h, f, void 0);
                    g >= 0 && Array.prototype.splice.call(h, g, 1)
                }
                f.removeEventListener && f.removeEventListener("load", e, Ac());
                f.removeEventListener && f.removeEventListener("error", e, Ac())
            };
            V(f, "load", e);
            V(f, "error", e)
        }
        f.src = b;
        a.google_image_requests.push(f)
    };
    let Wc = 0;

    function Xc(a) {
        return (a = Yc(a, document.currentScript)) && a.getAttribute("data-jc-version") || "unknown"
    }

    function Yc(a, b = null) {
        return b && b.getAttribute("data-jc") === String(a) ? b : document.querySelector(`[${"data-jc"}="${a}"]`)
    }

    function Zc(a) {
        if (!(Math.random() > .01)) {
            var b = Yc(a, document.currentScript);
            a = `https://${b&&b.getAttribute("data-jc-rcd")==="true"?"pagead2.googlesyndication-cn.com":"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${a}&version=${Xc(a)}&sample=${.01}`;
            b = window;
            var c;
            if (c = b.navigator) c = b.navigator.userAgent, c = /Chrome/.test(c) && !/Edge/.test(c) ? !0 : !1;
            c && b.navigator.sendBeacon ? b.navigator.sendBeacon(a) : Uc(b, a, void 0, !1)
        }
    };
    var W = document,
        $c = window;
    const ad = [na, oa, qa, pa, ma, ta, ua, ra, va];

    function bd(a, b) {
        if (a instanceof r) return a;
        const c = ya(a, ad);
        c === ka && b(a);
        return c
    }
    var cd = a => {
        var b = `${$c.location.protocol==="http:"?"http:":"https:"}//${"pagead2.googlesyndication.com"}/pagead/gen_204`;
        return c => {
            c = {
                id: "unsafeurl",
                ctx: a,
                url: c
            };
            var d = [];
            for (f in c) Dc(f, c[f], d);
            var f = d.join("&");
            if (f) {
                c = b.indexOf("#");
                c < 0 && (c = b.length);
                d = b.indexOf("?");
                if (d < 0 || d > c) {
                    d = c;
                    var e = ""
                } else e = b.substring(d + 1, c);
                c = [b.slice(0, d), e, b.slice(c)];
                d = c[1];
                c[1] = f ? d ? d + "&" + f : f : d;
                f = c[0] + (c[1] ? "?" + c[1] : "") + c[2]
            } else f = b;
            navigator.sendBeacon && navigator.sendBeacon(f, "")
        }
    };
    var dd = a => {
        var b = W;
        try {
            return b.querySelectorAll("*[" + a + "]")
        } catch (c) {
            return []
        }
    };
    class ed {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };
    const fd = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var gd = class {
            constructor(a, b) {
                this.g = a;
                this.h = b
            }
        },
        hd = class {
            constructor(a, b) {
                this.url = a;
                this.V = !!b;
                this.depth = null
            }
        };
    let id = null;

    function jd() {
        const a = m.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function kd() {
        const a = m.performance;
        return a && a.now ? a.now() : null
    };
    var ld = class {
        constructor(a, b) {
            var c = kd() || jd();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    };
    const X = m.performance,
        md = !!(X && X.mark && X.measure && X.clearMarks),
        nd = wc(() => {
            var a;
            if (a = md) {
                var b;
                if (id === null) {
                    id = "";
                    try {
                        a = "";
                        try {
                            a = m.top.location.hash
                        } catch (c) {
                            a = m.location.hash
                        }
                        a && (id = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = id;
                a = !!b.indexOf && b.indexOf("1337") >= 0
            }
            return a
        });

    function od(a) {
        a && X && nd() && (X.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), X.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }
    class pd {
        constructor() {
            var a = window;
            this.h = [];
            this.i = a || m;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.h = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.g = nd() || (b != null ? b : Math.random() < 1)
        }
        start(a, b) {
            if (!this.g) return null;
            a = new ld(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            X && nd() && X.mark(b);
            return a
        }
        end(a) {
            if (this.g && typeof a.value === "number") {
                a.duration = (kd() || jd()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                X && nd() && X.mark(b);
                !this.g ||
                    this.h.length > 2048 || this.h.push(a)
            }
        }
    };

    function qd(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function rd(a, b, c, d, f) {
        const e = [];
        Ic(a, function(h, g) {
            (h = sd(h, b, c, d, f)) && e.push(g + "=" + h)
        });
        return e.join(b)
    }

    function sd(a, b, c, d, f) {
        if (a == null) return "";
        b = b || "&";
        c = c || ",$";
        typeof c == "string" && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const e = [];
                for (let h = 0; h < a.length; h++) e.push(sd(a[h], b, c, d + 1, f));
                return e.join(c[d])
            }
        } else if (typeof a == "object") return f = f || 0, f < 2 ? encodeURIComponent(rd(a, b, c, d, f + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function td(a) {
        let b = 1;
        for (const c in a.h) b = c.length > b ? c.length : b;
        return 3997 - b - a.i.length - 1
    }

    function ud(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = td(a) - b.length;
        if (d < 0) return "";
        a.g.sort(function(e, h) {
            return e - h
        });
        b = null;
        let f = "";
        for (let e = 0; e < a.g.length; e++) {
            const h = a.g[e],
                g = a.h[h];
            for (let k = 0; k < g.length; k++) {
                if (!d) {
                    b = b == null ? h : b;
                    break
                }
                let l = rd(g[k], a.i, ",$");
                if (l) {
                    l = f + l;
                    if (d >= l.length) {
                        d -= l.length;
                        c += l;
                        f = a.i;
                        break
                    }
                    b = b == null ? h : b
                }
            }
        }
        a = "";
        b != null && (a = f + "trn=" + b);
        return c + a
    }
    class vd {
        constructor() {
            this.i = "&";
            this.h = {};
            this.l = 0;
            this.g = []
        }
    };

    function wd(a) {
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

    function xd(a, b, c) {
        let d, f;
        try {
            a.g && a.g.g ? (f = a.g.start(b.toString(), 3), d = c(), a.g.end(f)) : d = c()
        } catch (e) {
            c = !0;
            try {
                od(f), c = a.m(b, new ed(e, {
                    message: wd(e)
                }), void 0, void 0)
            } catch (h) {
                a.l(217, h)
            }
            if (c) {
                let h, g;
                (h = window.console) == null || (g = h.error) == null || g.call(h, e)
            } else throw e;
        }
        return d
    }

    function yd(a, b) {
        var c = zd;
        return (...d) => xd(c, a, () => b.apply(void 0, d))
    }
    var Cd = class {
        constructor(a = null) {
            this.pinger = Ad;
            this.g = a;
            this.h = null;
            this.i = !1;
            this.m = this.l
        }
        l(a, b, c, d, f) {
            f = f || "jserror";
            let e;
            try {
                const M = new vd;
                var h = M;
                h.g.push(1);
                h.h[1] = qd("context", a);
                b.error && b.meta && b.id || (b = new ed(b, {
                    message: wd(b)
                }));
                if (b.msg) {
                    h = M;
                    var g = b.msg.substring(0, 512);
                    h.g.push(2);
                    h.h[2] = qd("msg", g)
                }
                var k = b.meta || {};
                b = k;
                if (this.h) try {
                    this.h(b)
                } catch (L) {}
                if (d) try {
                    d(b)
                } catch (L) {}
                d = M;
                k = [k];
                d.g.push(3);
                d.h[3] = k;
                d = m;
                k = [];
                let Ja;
                b = null;
                do {
                    var l = d;
                    try {
                        var n;
                        if (n = !!l && l.location.href != null) b: {
                            try {
                                Na(l.foo);
                                n = !0;
                                break b
                            } catch (L) {}
                            n = !1
                        }
                        var p = n
                    } catch (L) {
                        p = !1
                    }
                    p ? (Ja = l.location.href, b = l.document && l.document.referrer || null) : (Ja = b, b = null);
                    k.push(new hd(Ja || ""));
                    try {
                        d = l.parent
                    } catch (L) {
                        d = null
                    }
                } while (d && l != d);
                for (let L = 0, Nc = k.length - 1; L <= Nc; ++L) k[L].depth = Nc - L;
                l = m;
                if (l.location && l.location.ancestorOrigins && l.location.ancestorOrigins.length == k.length - 1)
                    for (p = 1; p < k.length; ++p) {
                        var q = k[p];
                        q.url || (q.url = l.location.ancestorOrigins[p - 1] || "", q.V = !0)
                    }
                var u = k;
                let tb = new hd(m.location.href, !1);
                l = null;
                const ub = u.length -
                    1;
                for (q = ub; q >= 0; --q) {
                    var A = u[q];
                    !l && fd.test(A.url) && (l = A);
                    if (A.url && !A.V) {
                        tb = A;
                        break
                    }
                }
                A = null;
                const ae = u.length && u[ub].url;
                tb.depth != 0 && ae && (A = u[ub]);
                e = new gd(tb, A);
                if (e.h) {
                    u = M;
                    var C = e.h.url || "";
                    u.g.push(4);
                    u.h[4] = qd("top", C)
                }
                var Y = {
                    url: e.g.url || ""
                };
                if (e.g.url) {
                    var vb = e.g.url.match(Cc),
                        sa = vb[1],
                        Oc = vb[3],
                        Pc = vb[4];
                    C = "";
                    sa && (C += sa + ":");
                    Oc && (C += "//", C += Oc, Pc && (C += ":" + Pc));
                    var Qc = C
                } else Qc = "";
                sa = M;
                Y = [Y, {
                    url: Qc
                }];
                sa.g.push(5);
                sa.h[5] = Y;
                Bd(this.pinger, f, M, this.i, c)
            } catch (M) {
                try {
                    Bd(this.pinger, f, {
                        context: "ecmserr",
                        rctx: a,
                        msg: wd(M),
                        url: e && e.g.url
                    }, this.i, c)
                } catch (Ja) {}
            }
            return !0
        }
    };
    class Dd {};

    function Bd(a, b, c, d = !1, f) {
        if ((d ? a.g : Math.random()) < (f || .01)) try {
            let e;
            c instanceof vd ? e = c : (e = new vd, Ic(c, (g, k) => {
                var l = e;
                const n = l.l++;
                g = qd(k, g);
                l.g.push(n);
                l.h[n] = g
            }));
            const h = ud(e, "/pagead/gen_204?id=" + b + "&");
            h && Uc(m, h)
        } catch (e) {}
    }

    function Ed() {
        var a = Ad,
            b = window.google_srt;
        b >= 0 && b <= 1 && (a.g = b)
    }
    class Fd {
        constructor() {
            this.g = Math.random()
        }
    };
    let Ad, zd;
    const Z = new pd;
    var Gd = () => {
        window.google_measure_js_timing || (Z.g = !1, Z.h != Z.i.google_js_reporting_queue && (nd() && Array.prototype.forEach.call(Z.h, od, void 0), Z.h.length = 0))
    };
    (a => {
        Ad = a != null ? a : new Fd;
        typeof window.google_srt !== "number" && (window.google_srt = Math.random());
        Ed();
        zd = new Cd(Z);
        zd.h = b => {
            const c = Wc;
            c !== 0 && (b.jc = String(c), b.shv = Xc(c))
        };
        zd.i = !0;
        window.document.readyState == "complete" ? Gd() : Z.g && V(window, "load", () => {
            Gd()
        })
    })();
    var Hd = (a, b) => yd(a, b),
        Id = (a, b) => {
            var c = Dd;
            var d = "U";
            c.U && c.hasOwnProperty(d) || (d = new c, c.U = d);
            c = [];
            !b.eid && c.length && (b.eid = c.toString());
            Bd(Ad, a, b, !0)
        };

    function Jd(a = window) {
        return a
    };
    ia({
        ua: 0,
        ta: 1,
        qa: 2,
        la: 3,
        ra: 4,
        ma: 5,
        sa: 6,
        oa: 7,
        pa: 8,
        ka: 9,
        na: 10,
        va: 11
    });
    ia({
        xa: 0,
        ya: 1,
        wa: 2
    });

    function Kd(a) {
        var b = new Ld,
            c = b.j;
        const d = c[y] | 0;
        eb(b.j[y]);
        var f = d & 2;
        b = F(c, d, 1, !1);
        Array.isArray(b) || (b = cb);
        const e = !!(d & 32);
        let h = b[y] | 0;
        h === 0 && e && !f ? (h |= 33, b[y] = h) : h & 1 || (h |= 1, b[y] = h);
        if (f) h & 2 || z(b), Object.freeze(b);
        else if (2 & h || 2048 & h) b = x(b), f = 1, e && (f |= 32), b[y] = f, G(c, d, 1, b, !1);
        c = b;
        if (Array.isArray(a))
            for (var g = 0; g < a.length; g++) c.push(nb(a[g]));
        else
            for (g of a) c.push(nb(g))
    }
    var Ld = class extends T {
        constructor() {
            super()
        }
    };
    Ld.B = [1];
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    Kd([1, 8, 9, 10, 11, 12, 2, 3, 4, 5, 15, 16]);
    Kd([1, 6, 7, 9, 10, 11, 12, 2, 3, 4, 5, 13, 14, 18]);
    Kd([1, 6, 7, 9, 10, 11, 12, 2, 3, 4, 5, 13, 14, 17, 18]);
    new Ld;
    var Md = (a, b) => {
            b = P(a, 2) || b;
            if (!b) return "";
            if (O(a, 13)) return b;
            const c = /[?&]adurl=([^&]+)/.exec(b);
            if (!c) return b;
            const d = [b.slice(0, c.index + 1)];
            bc(a, 4).forEach((f, e) => {
                d.push(encodeURIComponent(e) + "=" + encodeURIComponent(f) + "&")
            });
            d.push(b.slice(c.index + 1));
            return d.join("")
        },
        Nd = (a, b = []) => {
            b = b.length > 0 ? b : dd("data-asoch-targets");
            a = cc(a);
            const c = [];
            for (let g = 0; g < b.length; ++g) {
                var d = b[g].getAttribute("data-asoch-targets"),
                    f = d.split(","),
                    e = !0;
                for (let k of f)
                    if (!a.has(k)) {
                        e = !1;
                        break
                    }
                if (e) {
                    e = a.get(f[0]);
                    for (d = 1; d < f.length; ++d) {
                        var h = a.get(f[d]);
                        e = lc(Ub(e));
                        h = lc(h);
                        const k = Math.max(e.length, h.length);
                        for (let l = 0; l < k; ++l) e[l] == null && (e[l] = h[l]);
                        e = new dc(e)
                    }
                    f = bc(e, 4);
                    fc(e, 5) != null && f.set("nb", Q(e, 5, 0).toString());
                    c.push({
                        element: b[g],
                        data: e
                    })
                } else Id("gdn-asoch", {
                    type: 1,
                    data: d
                })
            }
            return c
        },
        Qd = (a, b, c, d) => {
            c = Md(b, c);
            if (c.length !== 0) {
                var f = d === 609;
                if (Gc(c, "ase") === "2" && d !== 1087) {
                    var e;
                    const h = !((e = W.featurePolicy) == null || !e.allowedFeatures().includes("attribution-reporting"));
                    e = f ? 4 : h ? 6 : 5;
                    let g = "";
                    f || h &&
                        !Od(c) ? (c = Pd(c, "nis", e.toString()), a.setAttribute("attributionsrc", g)) : h && Od(c) && (g = Pd(da(new fa({
                            url: c
                        })), "nis", e.toString()), a.setAttribute("attributionsrc", g))
                }
                f && H(b, mc, 24) && (f = K(b, mc, 24), a.setAttribute("attributionDestination", P(f, 2)), a.setAttribute("attributionSourceNonce", P(f, 1)));
                Bc(a, bd(c, cd(d)));
                a.target || (a.target = B(E(b, 11)) != null ? P(b, 11) : "_top")
            }
        },
        Rd = a => {
            for (const b of a)
                if (a = b.data, b.element.tagName == "A" && !O(a, 1)) {
                    const c = b.element;
                    Qd(c, a, c.href, 609)
                }
        },
        Sd = (a, b, c) => {
            b = encodeURIComponent(b);
            const d = encodeURIComponent(c);
            c = new RegExp("[?&]" + b + "=([^&]+)");
            const f = c.exec(a);
            b = b + "=" + d;
            return f ? a.replace(c, f[0].charAt(0) + b) : a.replace("?", "?" + b + "&")
        },
        Od = a => !/[?&]dsh=1(&|$)/.test(a) && /[?&]ae=1(&|$)/.test(a),
        Td = a => {
            const b = m.oneAfmaInstance;
            if (b)
                for (const c of a)
                    if ((a = c.data) && H(a, rc, 8)) {
                        const d = P(K(a, rc, 8), 4);
                        if (d) {
                            b.fetchAppStoreOverlay(d, void 0, P(K(a, rc, 8), 6));
                            break
                        }
                    }
        },
        Ud = (a, b = 500) => {
            const c = [],
                d = [];
            for (var f of a)(a = f.data) && H(a, U, 12) && (d.push(K(a, U, 12)), c.push(K(a, U, 12).u()));
            f = (e, h) => {
                if (h)
                    for (const g of d) h[g.u()] && g.X(!0)
            };
            a = m.oneAfmaInstance;
            for (const e of c) {
                let h;
                (h = a) == null || h.canOpenAndroidApp(e, f, () => {}, b)
            }
        },
        Wd = (a, b, c, d) => {
            if (!b || !H(b, rc, 8)) return !1;
            const f = K(b, rc, 8);
            let e = P(f, 2);
            bc(b, 10).forEach((g, k) => {
                e = Sd(e, k, g)
            });
            Vd(b) && O(b, 15) && !/[?&]label=/.test(c) && (c = Pd(c, "label", "deep_link_fallback"));
            const h = g => d.openStoreOverlay(g, void 0, P(f, 6));
            return d.redirectForStoreU2({
                clickUrl: c,
                trackingUrl: P(f, 3),
                finalUrl: e,
                pingFunc: O(b, 13) ? d.httpTrack : d.click,
                openFunc: (a == null ? 0 : O(a,
                    1)) ? h : d.openIntentOrNativeApp,
                isExternalClickUrl: O(b, 13)
            })
        },
        Xd = (a, b, c, d) => {
            c && c.startsWith("intent:") ? d.openIntentOrNativeApp(c) : a ? b ? d.openBrowser(c) : d.openChromeCustomTab(c) : d.openSystemBrowser(c, {
                useFirstPackage: !0,
                useRunningProcess: !0
            })
        },
        Zd = (a, b, c, d, f, e, h, g = !1, k = !1) => {
            const l = O(f, 15);
            if (!k && l && B(E(f, 22)) != null) Xd(c, d, P(f, 22), h);
            else {
                var n = Od(e);
                if (a && b && (!l || !n && !k) && (e = Yd(e, h.click, !0), g && (f == null ? 0 : O(f, 21, !1)))) return;
                Xd(c, d, e, h)
            }
        },
        Yd = (a, b = null, c = !1) => {
            if (b !== null) {
                const f = new fa({
                    url: a
                });
                if (f.h &&
                    f.i || f.l) {
                    if (f.l && c) {
                        a = da(f);
                        var d = encodeURIComponent("ase");
                        c = encodeURIComponent("3");
                        d = new RegExp("[?&]" + d + "=([^&]+)", "g");
                        let e = 0;
                        const h = [];
                        for (let g = d.exec(a); g !== null;) {
                            if (g[1] == c) {
                                let k = g[0].charAt(0) == "?" ? 1 : 0;
                                h.push(a.slice(e, g.index + k));
                                e = g.index + g[0].length + k
                            }
                            g = d.exec(a)
                        }
                        h.push(a.slice(e));
                        b(h.join(""))
                    } else b(da(f));
                    return ea(f, 1)
                }
            } else return {
                    Z: b
                } = {}, b = new fa({
                    url: a,
                    Z: b
                }), b.h && b.i || b.l ? b.A ? (fetch(da(b, 1), {
                    method: "GET",
                    keepalive: !0,
                    mode: "no-cors",
                    redirect: "follow"
                }), b = ea(b, 1)) : b = navigator.sendBeacon ?
                navigator.sendBeacon(da(b, 0), "") ? ea(b, 1) : ea(b, 2) : ea(b, 0) : b = a, b;
            return a
        },
        $d = (a, b = !0) => {
            b && $c.fetch ? $c.fetch(a, {
                method: "GET",
                keepalive: !0,
                mode: "no-cors"
            }).then(c => {
                c.ok || Uc($c, a)
            }) : Uc($c, a)
        },
        Pd = (a, b, c) => {
            b = encodeURIComponent(String(b));
            c = encodeURIComponent(String(c));
            return a.replace("?", "?" + b + "=" + c + "&")
        },
        Vd = a => {
            for (const b of sc(a))
                if (Q(b, 1, 0) === 3 && P(b, 2)) return !0;
            return !1
        };
    var be = (a, b) => a && (a = a.match(b + "=([^&]+)")) && a.length == 2 ? a[1] : "";
    var ce = class extends T {
        constructor() {
            super()
        }
    };

    function de(a, b) {
        return R(a, 2, b)
    }

    function ee(a, b) {
        return R(a, 3, b)
    }

    function fe(a, b) {
        return R(a, 4, b)
    }

    function ge(a, b) {
        return R(a, 5, b)
    }

    function he(a, b) {
        return R(a, 9, b)
    }

    function ie(a, b) {
        {
            const n = a.j;
            let p = n[y];
            eb(p);
            if (b == null) G(n, p, 10);
            else {
                var c = b,
                    d;
                b = ((d = Ab) == null ? void 0 : d.get(c)) || c;
                c = d = b[y] | 0;
                var f = !!(2 & d) || !!(2048 & d),
                    e = f || Object.isFrozen(b),
                    h;
                if (h = !e) h = void 0 === ib || !1;
                var g = !0,
                    k = !0;
                for (let q = 0; q < b.length; q++) {
                    var l = b[q];
                    f || (l = !!((l.j[y] | 0) & 2), g && (g = !l), k && (k = l))
                }
                f || (d |= 5, d = g ? d | 8 : d & -9, d = k ? d | 16 : d & -17);
                if (h || e && d !== c) b = x(b), c = 0, d = I(d, p), d = ec(d, p, !0);
                d !== c && (b[y] = d);
                G(n, p, 10, b)
            }
        }
        return a
    }

    function je(a, b) {
        return hc(a, 11, b)
    }

    function ke(a, b) {
        return R(a, 1, b)
    }

    function le(a, b) {
        return hc(a, 7, b)
    }
    var me = class extends T {
        constructor() {
            super()
        }
    };
    me.B = [10, 6];
    const ne = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function oe(a) {
        let b;
        return (b = a.google_tag_data) != null ? b : a.google_tag_data = {}
    }

    function pe(a) {
        let b, c;
        return typeof((b = a.navigator) == null ? void 0 : (c = b.userAgentData) == null ? void 0 : c.getHighEntropyValues) === "function"
    }

    function qe() {
        var a = window;
        if (!pe(a)) return null;
        const b = oe(a);
        if (b.uach_promise) return b.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(ne).then(c => {
            b.uach != null || (b.uach = c);
            return c
        });
        return b.uach_promise = a
    }

    function re(a) {
        let b;
        return je(ie(ge(de(ke(fe(le(he(ee(new me, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), ((b = a.fullVersionList) == null ? void 0 : b.map(c => {
            var d = new ce;
            d = R(d, 1, c.brand);
            return R(d, 2, c.version)
        })) || []), a.wow64 || !1)
    }

    function se() {
        let a, b;
        return (b = (a = qe()) == null ? void 0 : a.then(c => re(c))) != null ? b : null
    };

    function te(a) {
        for (const b of a)
            if (b.element.tagName == "A") {
                a = b.element;
                const c = b.data;
                B(E(c, 2)) == null && R(c, 2, a.href)
            }
    }

    function ue(a, b) {
        return ha(a, c => c.element === b)
    }

    function ve(a) {
        Rc(Hd(556, () => {
            new we(a || {})
        }))
    }

    function xe(a, b) {
        if (!b.defaultPrevented || a.I === b) {
            for (var c, d, f = b.target;
                (!c || !d) && f;) {
                d || f.tagName != "A" || (d = f);
                var e = f.hasAttribute("data-asoch-targets"),
                    h = f.hasAttribute("data-asoch-fixed-value");
                if (!c)
                    if (h) c = new dc(JSON.parse(f.getAttribute("data-asoch-fixed-value")) || []);
                    else if (f.tagName == "A" || e)
                    if (e = e && f.getAttribute("data-asoch-is-dynamic") === "true" ? Nd(a.h, [f]) : a.g, e = ue(e, f)) c = e.data;
                f = f.parentElement
            }
            f = c && !O(c, 1);
            if (a.D && a.l && b.defaultPrevented) ye(a, b, d, f ? c : a.l);
            else {
                if (f) {
                    if (!a.D && b.defaultPrevented) {
                        ye(a,
                            b, d, c);
                        return
                    }
                    e = c;
                    for (var g of gc(e, 6)) $d(g)
                }
                a.L && f && O(c, 21, !1) && (Jc(b), (g = c) && P(g, 2) && (e = Sd(P(g, 2), "ae", "1"), R(g, 2, e)));
                if (d && f) {
                    c = f ? c : null;
                    (g = ue(a.g, d)) ? g = g.data: (g = new dc, R(g, 2, d.href), R(g, 11, d.target || "_top"), a.g.push({
                        element: d,
                        data: g
                    }));
                    Qd(d, c || g, P(g, 2), 557);
                    ze(a, b, d, c);
                    for (var k of gc(a.h, 17)) g = W.body, f = {}, typeof window.CustomEvent === "function" ? e = new CustomEvent(k, f) : (e = document.createEvent("CustomEvent"), e.initCustomEvent(k, !!f.bubbles, !!f.cancelable, f.detail)), g.dispatchEvent(e);
                    if (c == null ?
                        0 : B(E(c, 19)) != null) {
                        k = new nc;
                        fc(c, 5) != null ? (g = k, f = Q(c, 5, 0), jc(g, 1, f)) : (g = be(d.href, "nb"), g != "" && jc(k, 1, +g));
                        g = be(d.href, "nx");
                        g != "" && ic(k, 2, +g);
                        g = be(d.href, "ny");
                        g != "" && ic(k, 3, +g);
                        g = be(d.href, "bg");
                        g != "" && R(k, 4, g);
                        g = be(d.href, "nm");
                        g != "" && ic(k, 5, +g);
                        g = be(d.href, "mb");
                        g != "" && ic(k, 6, +g);
                        g = d.href;
                        f = g.search(Fc);
                        e = 0;
                        for (var l = [];
                            (h = Ec(g, e, "bg", f)) >= 0;) l.push(g.substring(e, h)), e = Math.min(g.indexOf("&", h) + 1 || f, f);
                        l.push(g.slice(e));
                        g = l.join("").replace(Hc, "$1");
                        Bc(d, bd(g, cd(1211)));
                        e = P(c, 19);
                        g = ob(E(c, 20)) !=
                            null ? N(ob(E(c, 20)), 0) : null;
                        h = kc(k);
                        k = a.o;
                        f = Jd(m);
                        l = new vc;
                        e = R(l, 1, e);
                        e = R(e, 4, h);
                        e = R(e, 10, Date.now().toString());
                        g !== null && ic(e, 2, g);
                        k !== null && R(e, 3, k);
                        jc(e, 9, 7);
                        var n;
                        f == null || (n = f.fence) == null || n.setReportEventDataForAutomaticBeacons({
                            eventType: "reserved.top_navigation_start",
                            eventData: JSON.stringify(e),
                            destination: ["buyer"],
                            once: !0
                        });
                        var p;
                        f == null || (p = f.fence) == null || p.reportEvent({
                            eventType: "click",
                            destination: ["component-seller"]
                        })
                    }
                    O(a.h, 16) || a.O ? Ae(a, b, d, c) : (n = "", (p = m.oneAfmaInstance) && (n = p.appendClickSignals(d.href)),
                        Be(a, b, d, c, n))
                }
            }
        }
    }

    function ye(a, b, c, d) {
        if (a.I === b && a.J) {
            const e = new pc(a.J),
                h = P(d, 9);
            var f = "";
            switch (Q(e, 4, 1)) {
                case 2:
                    if (N(ob(E(e, 2)), 0)) f = "blocked_fast_click";
                    else if (P(e, 1) || P(e, 7)) f = "blocked_border_click";
                    break;
                case 3:
                    f = W;
                    f = f.getElementById ? f.getElementById("common_15click_anchor") : null;
                    const g = window;
                    if (typeof g.copfcChm === "function" && f) {
                        d = Ub(d);
                        jc(d, 5, 12);
                        bc(d, 4).set("nb", (12).toString());
                        const k = ue(a.g, f);
                        k ? k.data = d : a.g.push({
                            element: f,
                            data: d
                        });
                        !a.T && c && (ze(a, b, c, d), R(d, 2, c.href));
                        g.copfcChm(b, Md(d, f.href), null,
                            H(e, oc, 10) ? kc(K(e, oc, 10)) : null);
                        a.T && ze(a, b, f, d)
                    }
                    f = "onepointfiveclick_first_click"
            }
            h && f && (c = h + "&label=" + f, f === "onepointfiveclick_first_click" && (c += "&ccx=" + b.clientX + "&ccy=" + b.clientY), $d(c, !1));
            Zc(a.P)
        }
    }

    function ze(a, b, c, d) {
        if (!O(d, 13)) {
            var f = c.href;
            var e = /[?&]adurl=([^&]+)/.exec(f);
            f = e ? [f.slice(0, e.index), f.slice(e.index)] : [f, ""];
            for (Bc(c, bd(f[0], cd(557))); !c.id;)
                if (e = "asoch-id-" + (Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ Date.now()).toString(36)), !W.getElementById(e)) {
                    c.id = e;
                    break
                }
            e = c.id;
            typeof window.xy === "function" && window.xy(b, c, W.body);
            typeof window.mb === "function" && window.mb(c);
            typeof window.bgz === "function" && window.bgz(e);
            typeof window.ja ===
                "function" && window.ja(e, d ? Q(d, 5, 0) : 0);
            typeof window.vti === "function" && window.vti(c);
            a.i && typeof window.ss === "function" && (a.S ? window.ss(e, 1, a.i) : window.ss(a.i, 1));
            f.length > 0 && (a = a.o.length > 0 && (d == null || B(E(d, 19)) == null) ? c.href + "&uach=" + encodeURIComponent(a.o) + f[1] : c.href + f[1], Bc(c, bd(a, cd(557))))
        }
    }
    async function Ae(a, b, c, d) {
        let f = "";
        var e = m.oneAfmaInstance;
        if (e && (b.preventDefault(), f = await e.appendClickSignalsAsync(c.href) || "", a.O)) {
            if (a.ba) return;
            if (e = await e.getNativeClickMeta()) {
                if (e.customClickGestureEligible) return;
                f = Pd(f, "nas", e.encodedNas)
            }
        }
        Be(a, b, c, d, f)
    }

    function Be(a, b, c, d, f) {
        a.N++;
        a.A < 0 && (a.A = Date.now());
        const e = O(a.h, 2),
            h = e && Date.now() - a.R > 300,
            g = m.oneAfmaInstance;
        g ? (Jc(b), (() => {
            var k = O(d, 13) ? f : g.logScionEventAndAddParam(f);
            if (!a.G && d && H(d, U, 12)) {
                var l = K(d, U, 12).u();
                var n = "";
                if (sc(d).length > 0)
                    for (const p of sc(d)) n += P(p, 2) + " " + p.u() + " ";
                O(K(d, U, 12), 2) ? (g.click(k), g.openAndroidApp(l), l = !0) : l = !1
            } else l = !1;
            l || Wd(a.m, d, k, g) || Zd(e, h, a.da, a.G, d, k, g, a.L, a.ca)
        })()) : (b = window, a.aa && b.pawsig && typeof b.pawsig.clk === "function" ? (Id("paw_sigs", {
            msg: "click",
            count: a.N.toString(),
            elapsed: (Date.now() - a.A).toString()
        }), b.pawsig.clk(c)) : h && (b = c.getAttribute("attributionsrc") != null && Gc(c.getAttribute("attributionsrc"), "nis") === "6" ? Yd(c.href, () => {}) : Yd(c.href), b !== c.href && Bc(c, bd(b, cd(599)))));
        h && (a.R = Date.now());
        Zc(a.P)
    }
    var we = class {
        constructor(a) {
            this.G = Qa || Oa || Ra || Pa;
            var b = dd("data-asoch-meta");
            if (b.length !== 1) Id("gdn-asoch", {
                type: 2,
                data: b.length
            });
            else {
                this.P = 70;
                this.h = new tc(JSON.parse(b[0].getAttribute("data-asoch-meta")) || []);
                this.M = a["extra-meta"] ? new tc(JSON.parse(a["extra-meta"])) : null;
                this.O = a["is-fsn"] === "true";
                this.ba = a["is-tap-disabled-for-fsn"] === "true";
                this.m = a["ios-store-overlay-config"] ? new uc(JSON.parse(a["ios-store-overlay-config"])) : null;
                this.da = a["use-cct-over-browser"] === "true";
                this.T = a["correct-redirect-url-for-och-15-click"] ===
                    "true";
                this.ca = a["spitzer-use-click-url-for-fallback"] === "true";
                this.D = a["default-msg-in-och"] === "true";
                this.aa = a["enable-paw"] === "true";
                this.L = a["allow-redirection-muted-in-och"] === "true";
                this.o = "";
                b = se();
                b != null && b.then(d => {
                    var f = kc(d);
                    d = [];
                    for (var e = 0, h = 0; h < f.length; h++) {
                        var g = f.charCodeAt(h);
                        g > 255 && (d[e++] = g & 255, g >>= 8);
                        d[e++] = g
                    }
                    f = 3;
                    f === void 0 && (f = 0);
                    if (!Ta)
                        for (Ta = {}, e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), h = ["+/=", "+/", "-_=", "-_.", "-_"], g = 0; g < 5; g++) {
                            var k =
                                e.concat(h[g].split(""));
                            Sa[g] = k;
                            for (var l = 0; l < k.length; l++) {
                                var n = k[l];
                                Ta[n] === void 0 && (Ta[n] = l)
                            }
                        }
                    f = Sa[f];
                    e = Array(Math.floor(d.length / 3));
                    h = f[64] || "";
                    for (g = k = 0; k < d.length - 2; k += 3) {
                        var p = d[k],
                            q = d[k + 1];
                        n = d[k + 2];
                        l = f[p >> 2];
                        p = f[(p & 3) << 4 | q >> 4];
                        q = f[(q & 15) << 2 | n >> 6];
                        n = f[n & 63];
                        e[g++] = l + p + q + n
                    }
                    l = 0;
                    n = h;
                    switch (d.length - k) {
                        case 2:
                            l = d[k + 1], n = f[(l & 15) << 2] || h;
                        case 1:
                            d = d[k], e[g] = f[d >> 2] + f[(d & 3) << 4 | l >> 4] + n + h
                    }
                    this.o = e.join("")
                });
                this.g = Nd(this.h);
                this.D && (this.l = null, cc(this.h).forEach(d => {
                    this.l != null || B(E(d, 2)) == null ||
                        B(E(d, 9)) == null || O(d, 13) || (this.l = d)
                }));
                this.ea = Number(a["deeplink-and-android-app-validation-timeout"]) || 500;
                this.R = -Infinity;
                this.A = this.N = 0;
                this.i = P(this.h, 5) || "";
                this.S = O(this.h, 11);
                this.M && (this.S = O(this.M, 11));
                this.J = this.I = null;
                O(this.h, 3) || (Rd(this.g), hc(this.h, 3, !0));
                te(this.g);
                a = m.oneAfmaInstance;
                !this.G && a && Ud(this.g, this.ea);
                var c;
                if (a && ((c = this.m) == null ? 0 : O(c, 2))) switch (c = () => {
                    const d = N(ob(E(this.m, 4)), 0);
                    d > 0 ? m.setTimeout(() => {
                        Td(this.g)
                    }, d) : Td(this.g)
                }, Q(this.m, 3, 0)) {
                    case 1:
                        a.runOnOnShowEvent(c);
                        break;
                    case 2:
                        Sc(c);
                        break;
                    default:
                        Td(this.g)
                }
                V(W, "click", Hd(557, d => {
                    xe(this, d)
                }), xc);
                V(W, "auxclick", Hd(557, d => {
                    d.button === 1 && xe(this, d)
                }), xc);
                this.i && typeof window.ss === "function" && V(W.body, "mouseover", Hd(626, () => {
                    window.ss(this.i, 0)
                }), yc);
                typeof window.ivti === "function" && window.ivti(W.body);
                c = window;
                c.googqscp && typeof c.googqscp.registerCallback === "function" && c.googqscp.registerCallback((d, f) => {
                    this.I = d;
                    this.J = f
                })
            }
        }
    };
    var Ce = Hd(555, a => ve(a));
    Wc = 70;
    const De = Yc(70, document.currentScript);
    if (De == null) throw Error("JSC not found 70");
    const Ee = {},
        Fe = De.attributes;
    for (let a = Fe.length - 1; a >= 0; a--) {
        const b = Fe[a].name;
        b.indexOf("data-jcp-") === 0 && (Ee[b.substring(9)] = Fe[a].value)
    }
    Ce(Ee);
}).call(this);