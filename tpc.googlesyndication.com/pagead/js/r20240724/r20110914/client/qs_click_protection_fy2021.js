(function() {
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
    var ca = ba(this);

    function da(a, b) {
        if (b) a: {
            var c = ca;a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                if (!(e in c)) break a;
                c = c[e]
            }
            a = a[a.length - 1];d = c[a];b = b(d);b != d && b != null && aa(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    }
    da("Symbol.dispose", function(a) {
        return a ? a : Symbol("Symbol.dispose")
    });
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var n = this || self;

    function q(a, b) {
        a: {
            var c = ["CLOSURE_FLAGS"];
            for (var d = n, e = 0; e < c.length; e++)
                if (d = d[c[e]], d == null) {
                    c = null;
                    break a
                }
            c = d
        }
        a = c && c[a];
        return a != null ? a : b
    }

    function ea(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function u(a, b, c) {
        u = ea;
        return u.apply(null, arguments)
    }

    function ka(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.O = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.P = function(d, e, g) {
            for (var f = Array(arguments.length - 2), h = 2; h < arguments.length; h++) f[h - 2] = arguments[h];
            return b.prototype[e].apply(d, f)
        }
    };

    function la(a) {
        n.setTimeout(() => {
            throw a;
        }, 0)
    };
    const ma = q(1, !0);
    var na = q(610401301, !1),
        oa = q(188588736, !0),
        pa = q(645172343, ma),
        qa = q(653718497, ma);
    var v;
    const ra = n.navigator;
    v = ra ? ra.userAgentData || null : null;

    function sa(a) {
        return na ? v ? v.brands.some(({
            brand: b
        }) => b && b.indexOf(a) != -1) : !1 : !1
    }

    function w(a) {
        var b;
        a: {
            if (b = n.navigator)
                if (b = b.userAgent) break a;b = ""
        }
        return b.indexOf(a) != -1
    };

    function y() {
        return na ? !!v && v.brands.length > 0 : !1
    }

    function ta() {
        return y() ? sa("Chromium") : (w("Chrome") || w("CriOS")) && !(y() ? 0 : w("Edge")) || w("Silk")
    };

    function z(a, b) {
        Array.prototype.forEach.call(a, b, void 0)
    };
    !w("Android") || ta();
    ta();
    w("Safari") && (ta() || (y() ? 0 : w("Coast")) || (y() ? 0 : w("Opera")) || (y() ? 0 : w("Edge")) || (y() ? sa("Microsoft Edge") : w("Edg/")) || y() && sa("Opera"));
    let ua;

    function va() {
        const a = Error();
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = "incident";
        return a
    };
    var A = Symbol(),
        wa = Symbol();

    function xa(a, b) {
        b[A] = (a | 0) & -14591
    }

    function ya(a, b) {
        b[A] = (a | 34) & -14557
    };
    var C = {},
        za = {};

    function Aa(a) {
        return !(!a || typeof a !== "object" || a.g !== za)
    }

    function Da(a) {
        return a !== null && typeof a === "object" && !Array.isArray(a) && a.constructor === Object
    }

    function D(a, b, c) {
        if (!Array.isArray(a) || a.length) return !1;
        const d = a[A] | 0;
        if (d & 1) return !0;
        if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
        a[A] = d | 1;
        return !0
    }
    var Ea;
    const Fa = [];
    Fa[A] = 55;
    Ea = Object.freeze(Fa);
    var Ga = Object.freeze({});

    function Ha(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return Number.isFinite(a) ? a | 0 : void 0
    }

    function Ia(a, b, c) {
        if (a != null && typeof a === "object" && a.G === C) return a;
        if (Array.isArray(a)) {
            var d = a[A] | 0,
                e = d;
            e === 0 && (e |= c & 32);
            e |= c & 2;
            e !== d && (a[A] = e);
            return new b(a)
        }
    };

    function Ja(a) {
        if (typeof Proxy !== "function") return a;
        let b = E ? .get(a);
        if (b) return b;
        b = new Proxy(a, {
            set(c, d, e) {
                Ka();
                c[d] = e;
                return !0
            }
        });
        La(a, b);
        return b
    }

    function Ka() {
        const a = va();
        la(a)
    }
    let E = void 0,
        Ma = void 0;

    function La(a, b) {
        (E || (E = new WeakMap)).set(a, b);
        (Ma || (Ma = new WeakMap)).set(b, a)
    };
    let F;

    function Na(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (D(a, void 0, 0)) return
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

    function Oa(a, b, c) {
        a = Array.prototype.slice.call(a);
        var d = a.length;
        const e = b & 256 ? a[d - 1] : void 0;
        d += e ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
        if (e) {
            b = a[b] = {};
            for (const g in e) b[g] = c(e[g])
        }
        return a
    }

    function Pa(a, b, c, d, e) {
        if (a != null) {
            if (Array.isArray(a)) a = D(a, void 0, 0) ? void 0 : e && (a[A] | 0) & 2 ? a : Qa(a, b, c, d !== void 0, e);
            else if (Da(a)) {
                const g = {};
                for (let f in a) g[f] = Pa(a[f], b, c, d, e);
                a = g
            } else a = b(a, d);
            return a
        }
    }

    function Qa(a, b, c, d, e) {
        const g = d || c ? a[A] | 0 : 0;
        d = d ? !!(g & 32) : void 0;
        a = Array.prototype.slice.call(a);
        for (let f = 0; f < a.length; f++) a[f] = Pa(a[f], b, c, d, e);
        c && c(g, a);
        return a
    }

    function Ra(a) {
        return a.G === C ? a.toJSON() : Na(a)
    };

    function Sa(a, b, c = ya) {
        if (a != null) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[A] | 0;
                if (d & 2) return a;
                b && (b = d === 0 || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (a[A] = (d | 34) & -12293, a) : Qa(a, Sa, d & 4 ? ya : c, !0, !0)
            }
            a.G === C && (c = a.l, d = c[A], a = d & 2 ? a : Ta(a, c, d, !0));
            return a
        }
    }

    function Ta(a, b, c, d) {
        a = a.constructor;
        F = b = Ua(b, c, d);
        b = new a(b);
        F = void 0;
        return b
    }

    function Ua(a, b, c) {
        const d = c || b & 2 ? ya : xa,
            e = !!(b & 32);
        a = Oa(a, b, g => Sa(g, e, d));
        a[A] = a[A] | 32 | (c ? 2 : 0);
        return a
    }

    function Va(a) {
        const b = a.l,
            c = b[A];
        return c & 2 ? Ta(a, b, c, !1) : a
    };

    function G(a, b) {
        a = a.l;
        return Wa(a, a[A], b)
    }

    function Xa(a, b, c, d) {
        b = d + (+!!(b & 512) - 1);
        if (!(b < 0 || b >= a.length || b >= c)) return a[b]
    }

    function Wa(a, b, c, d) {
        if (c === -1) return null;
        const e = b >> 14 & 1023 || 536870912;
        if (c >= e) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var g = a.length;
            return d && b & 256 && (d = a[g - 1][c], d != null) ? (Xa(a, b, e, c) && wa != null && (a = ua ? ? (ua = {}), b = a[wa] || 0, b >= 4 || (a[wa] = b + 1, a = va(), la(a))), d) : Xa(a, b, e, c)
        }
    }

    function I(a, b, c, d) {
        const e = b >> 14 & 1023 || 536870912;
        if (1 >= e || d && !pa) {
            let g = b;
            if (b & 256) d = a[a.length - 1];
            else {
                if (c == null) return g;
                d = a[e + (+!!(b & 512) - 1)] = {};
                g |= 256
            }
            d[1] = c;
            1 < e && (a[1 + (+!!(b & 512) - 1)] = void 0);
            g !== b && (a[A] = g);
            return g
        }
        a[1 + (+!!(b & 512) - 1)] = c;
        b & 256 && (a = a[a.length - 1], 1 in a && delete a[1]);
        return b
    }

    function J(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    }

    function Ya(a) {
        var b = Za,
            c = a.l,
            d = c[A],
            e = Wa(c, d, 1, !1);
        b = Ia(e, b, d);
        b !== e && b != null && I(c, d, b, !1);
        c = b;
        if (c == null) return c;
        a = a.l;
        d = a[A];
        d & 2 || (e = Va(c), e !== c && (c = e, I(a, d, c, !1)));
        return c
    }

    function $a(a, b) {
        a = (2 & b ? a | 2 : a & -3) | 32;
        return a &= -2049
    }

    function K(a, b) {
        a = G(a, b);
        return (a == null || typeof a === "boolean" ? a : typeof a === "number" ? !!a : void 0) ? ? !1
    }

    function L(a, b) {
        return Ha(G(a, b)) ? ? 0
    }

    function M(a) {
        a = G(a, 1);
        return (a == null || typeof a === "string" ? a : void 0) ? ? ""
    }

    function N(a, b) {
        a = G(a, b);
        return (a == null ? a : Number.isFinite(a) ? a | 0 : void 0) ? ? 1
    };
    let ab;
    var O = class {
        constructor(a) {
            a: {
                a == null && (a = F);F = void 0;
                if (a == null) {
                    var b = 96;
                    a = []
                } else {
                    if (!Array.isArray(a)) throw Error("narr");
                    b = a[A] | 0;
                    if (b & 2048) throw Error("farr");
                    if (b & 64) break a;
                    var c = a;
                    b |= 64;
                    var d = c.length;
                    if (d && (--d, Da(c[d]))) {
                        b |= 256;
                        c = d - (+!!(b & 512) - 1);
                        if (c >= 1024) throw Error("pvtlmt");
                        b = b & -16760833 | (c & 1023) << 14
                    }
                }
                a[A] = b
            }
            this.l = a
        }
        toJSON() {
            return bb(this)
        }
    };
    O.prototype.G = C;
    O.prototype.toString = function() {
        try {
            return ab = !0, bb(this).toString()
        } finally {
            ab = !1
        }
    };

    function bb(a) {
        var b = ab ? a.l : Qa(a.l, Ra, void 0, void 0, !1);
        var c = !ab;
        var d = oa ? void 0 : a.constructor.N;
        var e = (c ? a.l : b)[A];
        if (a = b.length) {
            var g = b[a - 1],
                f = Da(g);
            f ? a-- : g = void 0;
            e = +!!(e & 512) - 1;
            var h = b;
            if (f) {
                b: {
                    var k = g;
                    var l = {};f = !1;
                    if (k)
                        for (var m in k) {
                            if (isNaN(+m)) {
                                l[m] = k[m];
                                continue
                            }
                            let r = k[m];
                            Array.isArray(r) && (D(r, d, +m) || Aa(r) && r.size === 0) && (r = null);
                            r == null && (f = !0);
                            r != null && (l[m] = r)
                        }
                    if (f) {
                        for (var p in l) break b;
                        l = null
                    } else l = k
                }
                k = l == null ? g != null : l !== g
            }
            for (var t; a > 0; a--) {
                p = a - 1;
                m = h[p];
                p -= e;
                if (!(m == null || D(m,
                        d, p) || Aa(m) && m.size === 0)) break;
                t = !0
            }
            if (h !== b || k || t) {
                if (!c) h = Array.prototype.slice.call(h, 0, a);
                else if (t || k || l) h.length = a;
                l && h.push(l)
            }
            b = h
        }
        return b
    };
    var cb = class extends O {};

    function db(a) {
        var b;
        void 0 === Ga ? b = 2 : b = qa ? 5 : 2;
        a = a.l;
        var c = a[A],
            d = c,
            e = !(2 & c),
            g = !!(2 & d);
        c = g ? 1 : b;
        e && (e = !g);
        b = Wa(a, d, 1);
        b = Array.isArray(b) ? b : Ea;
        var f = b[A] | 0;
        g = !!(4 & f);
        if (!g) {
            var h = f;
            h === 0 && (h = $a(h, d));
            f = b;
            h |= 1;
            var k = d,
                l = !!(2 & h);
            l && (k |= 2);
            let p = !l,
                t = !0,
                r = 0,
                x = 0;
            for (; r < f.length; r++) {
                const H = Ia(f[r], cb, k);
                if (H instanceof cb) {
                    if (!l) {
                        const B = !!((H.l[A] | 0) & 2);
                        p && (p = !B);
                        t && (t = B)
                    }
                    f[x++] = H
                }
            }
            x < r && (f.length = x);
            h |= 4;
            h = t ? h | 16 : h & -17;
            h = p ? h | 8 : h & -9;
            f[A] = h;
            l && Object.freeze(f);
            f = h
        }
        if (e && !(8 & f || !b.length && (c === 1 || c === 4 &&
                32 & f))) {
            J(f) && (b = Array.prototype.slice.call(b), f = $a(f, d), d = I(a, d, b));
            e = b;
            for (h = 0; h < e.length; h++) k = e[h], l = Va(k), k !== l && (e[h] = l);
            f |= 8;
            f = e.length ? f & -17 : f | 16;
            e[A] = f
        }
        let m;
        c === 1 || c === 4 && 32 & f ? J(f) || (a = f, d = !!(32 & f), f |= !b.length || 16 & f && (!g || d) ? 2 : 2048, f !== a && (b[A] = f), Object.freeze(b)) : (g = c !== 5 ? !1 : !!(32 & f) || J(f) || !!E ? .get(b), (c === 2 || g) && J(f) && (b = Array.prototype.slice.call(b), c = f = $a(f, d), f = c &= -33, b[A] = f, d = I(a, d, b)), J(f) || (d = a = f, f = d &= -33, f !== a && (b[A] = f)), g && (m = Ja(b)));
        return m || b
    }
    var Za = class extends O {};
    Za.N = [1];
    var eb = class extends O {};

    function fb() {}

    function gb(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var hb = {
            capture: !0
        },
        ib = {
            passive: !0
        },
        jb = gb(function() {
            let a = !1;
            try {
                const b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                n.addEventListener("test", null, b)
            } catch (b) {}
            return a
        });

    function kb(a) {
        return a ? a.passive && jb() ? a : a.capture || !1 : !1
    }

    function P(a, b, c, d) {
        a.addEventListener && a.addEventListener(b, c, kb(d))
    };
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    var lb = class {
            constructor(a) {
                this.g = a
            }
            toString() {
                return this.g
            }
        },
        mb = new lb("about:invalid#zClosurez");
    class nb {
        constructor(a) {
            this.M = a
        }
    }

    function Q(a) {
        return new nb(b => b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const ob = new nb(a => /^[^:]*([/?#]|$)/.test(a));
    var pb = Q("http"),
        qb = Q("https"),
        rb = Q("ftp"),
        sb = Q("mailto");
    const tb = [Q("data"), pb, qb, sb, rb, ob];

    function ub(a = tb) {
        for (let b = 0; b < a.length; ++b) {
            const c = a[b];
            if (c instanceof nb && c.M("#")) return new lb("#")
        }
    }

    function vb(a = tb) {
        return ub(a) || mb
    }
    var wb = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;

    function xb(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) xb(a, String(b[d]), c);
        else b != null && c.push(a + (b === "" ? "" : "=" + encodeURIComponent(String(b))))
    };

    function yb(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }
    let zb = [];
    const Ab = () => {
        const a = zb;
        zb = [];
        for (const b of a) try {
            b()
        } catch {}
    };
    var Bb = a => {
        var b = R;
        b.readyState === "complete" || b.readyState === "interactive" ? (zb.push(a), zb.length == 1 && (window.Promise ? Promise.resolve().then(Ab) : window.setImmediate ? setImmediate(Ab) : setTimeout(Ab, 0))) : b.addEventListener("DOMContentLoaded", a)
    };

    function Cb(a = document) {
        return a.createElement("img")
    };

    function Db(a, b, c = null, d = !1) {
        Eb(a, b, c, d)
    }

    function Eb(a, b, c, d) {
        a.google_image_requests || (a.google_image_requests = []);
        const e = Cb(a.document);
        if (c || d) {
            const g = f => {
                c && c(f);
                if (d) {
                    f = a.google_image_requests;
                    var h = Array.prototype.indexOf.call(f, e, void 0);
                    h >= 0 && Array.prototype.splice.call(f, h, 1)
                }
                e.removeEventListener && e.removeEventListener("load", g, kb());
                e.removeEventListener && e.removeEventListener("error", g, kb())
            };
            P(e, "load", g);
            P(e, "error", g)
        }
        e.src = b;
        a.google_image_requests.push(e)
    };

    function Fb(a = null) {
        return a && a.getAttribute("data-jc") === "23" ? a : document.querySelector('[data-jc="23"]')
    }

    function Gb() {
        if (!(Math.random() > .01)) {
            var a = Fb(document.currentScript);
            a = a && a.getAttribute("data-jc-rcd") === "true" ? "pagead2.googlesyndication-cn.com" : "pagead2.googlesyndication.com";
            var b = (b = Fb(document.currentScript)) && b.getAttribute("data-jc-version") || "unknown";
            a = `https://${a}/pagead/gen_204?id=jca&jc=${23}&version=${b}&sample=${.01}`;
            b = window;
            var c;
            if (c = b.navigator) c = b.navigator.userAgent, c = /Chrome/.test(c) && !/Edge/.test(c) ? !0 : !1;
            c && b.navigator.sendBeacon ? b.navigator.sendBeacon(a) : Db(b, a, void 0, !1)
        }
    };
    var R = document,
        S = window;
    var Hb = (a = []) => {
        n.google_logging_queue || (n.google_logging_queue = []);
        n.google_logging_queue.push([12, a])
    };
    const Ib = [pb, qb, sb, rb, ob, Q("market"), Q("itms"), Q("intent"), Q("itms-appss")];
    var Jb = () => {
        var a = `${S.location.protocol==="http:"?"http:":"https:"}//${"pagead2.googlesyndication.com"}/pagead/gen_204`;
        return b => {
            b = {
                id: "unsafeurl",
                ctx: 625,
                url: b
            };
            var c = [];
            for (d in b) xb(d, b[d], c);
            var d = c.join("&");
            if (d) {
                b = a.indexOf("#");
                b < 0 && (b = a.length);
                c = a.indexOf("?");
                if (c < 0 || c > b) {
                    c = b;
                    var e = ""
                } else e = a.substring(c + 1, b);
                b = [a.slice(0, c), e, a.slice(b)];
                c = b[1];
                b[1] = d ? c ? c + "&" + d : d : c;
                d = b[0] + (b[1] ? "?" + b[1] : "") + b[2]
            } else d = a;
            navigator.sendBeacon && navigator.sendBeacon(d, "")
        }
    };
    var Kb = () => {
            var a = R;
            try {
                return a.querySelectorAll("*[data-ifc]")
            } catch (b) {
                return []
            }
        },
        Lb = (a, b) => {
            a && yb(b, (c, d) => {
                a.style[d] = c
            })
        },
        Mb = a => {
            var b = R.body;
            const c = document.createDocumentFragment(),
                d = a.length;
            for (let e = 0; e < d; ++e) c.appendChild(a[e]);
            b.appendChild(c)
        };
    let Nb = null;

    function Ob() {
        const a = n.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function Pb() {
        const a = n.performance;
        return a && a.now ? a.now() : null
    };
    var Qb = class {
        constructor(a, b) {
            var c = Pb() || Ob();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    };
    const T = n.performance,
        Rb = !!(T && T.mark && T.measure && T.clearMarks),
        U = gb(() => {
            var a;
            if (a = Rb) {
                var b;
                if (Nb === null) {
                    Nb = "";
                    try {
                        a = "";
                        try {
                            a = n.top.location.hash
                        } catch (c) {
                            a = n.location.hash
                        }
                        a && (Nb = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = Nb;
                a = !!b.indexOf && b.indexOf("1337") >= 0
            }
            return a
        });

    function Sb(a) {
        a && T && U() && (T.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), T.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }
    class Tb {
        constructor() {
            var a = window;
            this.g = [];
            this.i = a || n;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.g = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.h = U() || (b != null ? b : Math.random() < 1)
        }
        start(a, b) {
            if (!this.h) return null;
            a = new Qb(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            T && U() && T.mark(b);
            return a
        }
        end(a) {
            if (this.h && typeof a.value === "number") {
                a.duration = (Pb() || Ob()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                T && U() && T.mark(b);
                !this.h || this.g.length >
                    2048 || this.g.push(a)
            }
        }
    };

    function Ub(a, b, c, d, e) {
        const g = [];
        yb(a, function(f, h) {
            (f = Vb(f, b, c, d, e)) && g.push(h + "=" + f)
        });
        return g.join(b)
    }

    function Vb(a, b, c, d, e) {
        if (a == null) return "";
        b = b || "&";
        c = c || ",$";
        typeof c == "string" && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const g = [];
                for (let f = 0; f < a.length; f++) g.push(Vb(a[f], b, c, d + 1, e));
                return g.join(c[d])
            }
        } else if (typeof a == "object") return e = e || 0, e < 2 ? encodeURIComponent(Ub(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Wb(a) {
        let b = 1;
        for (const c in a.h) b = c.length > b ? c.length : b;
        return 3997 - b - a.i.length - 1
    }

    function Xb(a) {
        let b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=fccs&",
            c = Wb(a) - 24;
        if (c < 0) return "";
        a.g.sort(function(g, f) {
            return g - f
        });
        let d = null,
            e = "";
        for (let g = 0; g < a.g.length; g++) {
            const f = a.g[g],
                h = a.h[f];
            for (let k = 0; k < h.length; k++) {
                if (!c) {
                    d = d == null ? f : d;
                    break
                }
                let l = Ub(h[k], a.i, ",$");
                if (l) {
                    l = e + l;
                    if (c >= l.length) {
                        c -= l.length;
                        b += l;
                        e = a.i;
                        break
                    }
                    d = d == null ? f : d
                }
            }
        }
        a = "";
        d != null && (a = e + "trn=" + d);
        return b + a
    }
    class Yb {
        constructor() {
            this.i = "&";
            this.h = {};
            this.m = 0;
            this.g = []
        }
    };
    class Zb {};

    function $b() {
        var a = ac,
            b = window.google_srt;
        b >= 0 && b <= 1 && (a.g = b)
    }

    function bc(a) {
        if (ac.g < 1) try {
            let b;
            a instanceof Yb ? b = a : (b = new Yb, yb(a, (d, e) => {
                var g = b;
                const f = g.m++,
                    h = {};
                h[e] = d;
                d = [h];
                g.g.push(f);
                g.h[f] = d
            }));
            const c = Xb(b);
            c && Db(n, c)
        } catch (b) {}
    }
    class cc {
        constructor() {
            this.g = Math.random()
        }
    };
    let ac;
    const V = new Tb;
    var dc = () => {
        window.google_measure_js_timing || (V.h = !1, V.g != V.i.google_js_reporting_queue && (U() && z(V.g, Sb), V.g.length = 0))
    };
    (a => {
        ac = a ? ? new cc;
        typeof window.google_srt !== "number" && (window.google_srt = Math.random());
        $b();
        window.document.readyState == "complete" ? dc() : V.h && P(window, "load", () => {
            dc()
        })
    })();
    var ec = a => {
        P(S, "message", b => {
            let c;
            try {
                c = JSON.parse(b.data)
            } catch (d) {
                return
            }!c || c.googMsgType !== "ig" || a(c, b)
        })
    };

    function W() {
        this.h = this.h;
        this.i = this.i
    }
    W.prototype.h = !1;
    W.prototype.dispose = function() {
        this.h || (this.h = !0, this.m())
    };
    W.prototype[Symbol.dispose] = function() {
        this.dispose()
    };
    W.prototype.m = function() {
        if (this.i)
            for (; this.i.length;) this.i.shift()()
    };

    function X(a, b, c) {
        W.call(this);
        this.o = a;
        this.C = b || 0;
        this.s = c;
        this.v = u(this.A, this)
    }
    ka(X, W);
    X.prototype.g = 0;
    X.prototype.m = function() {
        X.O.m.call(this);
        this.isActive() && n.clearTimeout(this.g);
        this.g = 0;
        delete this.o;
        delete this.s
    };
    X.prototype.start = function(a) {
        this.isActive() && n.clearTimeout(this.g);
        this.g = 0;
        var b = this.v;
        a = a !== void 0 ? a : this.C;
        if (typeof b !== "function")
            if (b && typeof b.handleEvent == "function") b = u(b.handleEvent, b);
            else throw Error("Invalid listener argument");
        this.g = Number(a) > 2147483647 ? -1 : n.setTimeout(b, a || 0)
    };
    X.prototype.isActive = function() {
        return this.g != 0
    };
    X.prototype.A = function() {
        this.g = 0;
        this.o && this.o.call(this.s)
    };
    const fc = {
            display: "inline-block",
            position: "absolute"
        },
        gc = {
            display: "none",
            width: "100%",
            height: "100%",
            top: "0",
            left: "0"
        },
        Y = (a, b) => {
            a && (a.style.display = b ? "inline-block" : "none")
        };

    function hc(a = "") {
        const b = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        };
        a && (a = a.split(","), a.length === 4 && a.reduce((c, d) => c && !isNaN(+d), !0) && ([b.top, b.right, b.bottom, b.left] = a.map(c => +c)));
        return b
    }

    function ic(a, b, c = 2147483647) {
        const d = R.createElement("div");
        Lb(d, { ...fc,
            "z-index": String(c),
            ...b
        });
        K(a.data, 10) && P(d, "click", fb);
        if (K(a.data, 11)) {
            a = R.createElement("a");
            b = Jb();
            c = vb(Ib);
            c === mb && b("#");
            b = c;
            if (b instanceof lb)
                if (b instanceof lb) b = b.g;
                else throw Error("");
            else b = wb.test(b) ? b : void 0;
            a.href = b === void 0 ? mb.toString() : b;
            a.appendChild(d);
            return a
        }
        return d
    }

    function jc(a, b) {
        switch (N(b.j, 5)) {
            case 2:
                S.AFMA_Communicator ? .addEventListener ? .("onshow", () => {
                    Z(a, b)
                });
                break;
            case 10:
                P(S, "i-creative-view", () => {
                    Z(a, b)
                });
                break;
            case 4:
                P(R, "DOMContentLoaded", () => {
                    Z(a, b)
                });
                break;
            case 8:
                ec(c => {
                    c.rr && Z(a, b)
                });
                break;
            case 9:
                if ("IntersectionObserver" in S) {
                    const c = new IntersectionObserver(d => {
                        for (const e of d)
                            if (e.intersectionRatio > 0) {
                                Z(a, b);
                                break
                            }
                    });
                    c.observe(R.body);
                    a.L.push(c)
                }
                break;
            case 11:
                S.AFMA_Communicator ? .addEventListener ? .("onAdVisibilityChanged", () => {
                    Z(a, b)
                })
        }
    }

    function kc(a, b) {
        b = hc(b);
        const c = L(a.data, 9);
        a.m = [{
            width: "100%",
            height: b.top + c + "px",
            top: -c + "px",
            left: "0"
        }, {
            width: b.right + c + "px",
            height: "100%",
            top: "0",
            right: -c + "px"
        }, {
            width: "100%",
            height: b.bottom + c + "px",
            bottom: -c + "px",
            left: "0"
        }, {
            width: b.left + c + "px",
            height: "100%",
            top: "0",
            left: -c + "px"
        }].map(d => ic(a, d, 9019))
    }

    function lc(a) {
        var b = 0;
        for (const d of a.K) {
            const e = d.j,
                g = a.A[N(e, 5)];
            d.u || g === void 0 || (b = Math.max(b, g + L(e, 2)))
        }
        a.o && a.o.dispose();
        b -= Date.now();
        const c = a.h;
        b > 0 ? (Y(c, !0), a.o = new X(() => {
            Y(c, !1)
        }, b), a.o.start()) : Y(c, !1)
    }

    function Z(a, b) {
        if (!b.u) {
            var c = N(b.j, 5);
            a.A[c] = Date.now();
            K(b.j, 9) && (a.K.push(b), lc(a))
        }
    }

    function mc(a, b, c) {
        if (!a.g || !a.v || b.timeStamp - a.g.timeStamp >= 300) return !1;
        const d = new Map;
        z(a.v.changedTouches, e => {
            d.set(e.identifier, {
                x: e.clientX,
                y: e.clientY
            })
        });
        b = L(c.j, 11) || 10;
        for (const e of a.g.changedTouches)
            if (a = d.get(e.identifier), !a || Math.abs(a.x - e.clientX) > b || Math.abs(a.y - e.clientY) > b) return !0;
        return !1
    }
    var oc = class {
        constructor() {
            var a = nc;
            this.m = [];
            this.o = this.h = null;
            this.K = [];
            this.data = null;
            this.C = [];
            this.i = [];
            this.s = [];
            this.A = {};
            this.L = [];
            this.v = this.g = null;
            this.H = "";
            this.I = a["send-fccs"] === "true";
            this.H = a.qid || ""
        }
        init(a) {
            Hb([a]);
            this.data = new eb(a);
            a = Ya(this.data);
            z(db(a), g => {
                this.s.push({
                    D: 0,
                    u: !1,
                    F: 0,
                    j: g,
                    B: -1
                })
            });
            this.i = Kb();
            let b = !1;
            a = this.i.length;
            for (let g = 0; g < a; ++g) {
                var c = new Za(JSON.parse(this.i[g].getAttribute("data-ifc") || "[]"));
                z(db(c), f => {
                    this.s.push({
                        D: 0,
                        u: !1,
                        F: 0,
                        j: f,
                        B: g
                    });
                    N(f, 4) ===
                        1 && (b = !0)
                })
            }
            c = a = !1;
            let d = K(this.data, 12);
            for (var e of this.s) {
                const g = e.j;
                L(g, 2) > 0 && N(g, 5) > 0 ? (!this.h && K(g, 9) && (this.h = ic(this, gc)), jc(this, e)) : M(g) && K(g, 9) && kc(this, M(g));
                M(g) && (a = !0);
                L(g, 11) > 0 && (c = !0);
                K(g, 12) && (d = !0)
            }
            e = [];
            this.h && e.push(this.h);
            !b && e.push(...this.m);
            R.body && Mb(e);
            K(this.data, 13) && Bb(() => {
                const g = R.body.querySelectorAll(".amp-fcp, .amp-bcp");
                for (let h = 0; h < g.length; ++h) {
                    var f = (f = g[h]) ? S.getComputedStyle(f).getPropertyValue("position") : void 0;
                    f === "absolute" && Y(g[h], !1)
                }
            });
            P(R, "click",
                g => {
                    if (this.I) {
                        var f = {
                            cx: g.clientX,
                            cy: g.clientY,
                            et: Date.now(),
                            qid: this.H
                        };
                        var h = Zb;
                        var k = "J";
                        h.J && h.hasOwnProperty(k) || (k = new h, h.J = k);
                        h = [];
                        !f.eid && h.length && (f.eid = h.toString());
                        bc(f);
                        this.I = !1
                    }
                    if (g.isTrusted === !1 && K(this.data, 15)) g.preventDefault ? g.preventDefault() : g.returnValue = !1, g.stopImmediatePropagation(), Gb();
                    else {
                        f = -1;
                        h = [];
                        for (var l of this.s) {
                            k = l.B;
                            var m = k !== -1;
                            if (!(L(l.j, 3) <= f || l.u || m && h[k] === !1)) {
                                var p = !m || h[k] || this.i[k].contains(g.target);
                                m && p && (h[k] = !0);
                                if (k = p)
                                    if (k = g, m = l.j, L(m, 2) > 0 &&
                                        N(m, 5) > 0) k = this.A[N(m, 5)], k = k !== void 0 && Date.now() < k + L(m, 2);
                                    else if (M(m)) {
                                    {
                                        m = (l.B >= 0 ? this.i[l.B] : R.body).getBoundingClientRect();
                                        p = Number;
                                        var t = (t = R.body) ? S.getComputedStyle(t).getPropertyValue("zoom") : void 0;
                                        const B = p(t || "1"),
                                            [sc, tc] = [k.clientX, k.clientY],
                                            [fa, ha, Ba, Ca] = [sc / B - m.left, tc / B - m.top, m.width, m.height];
                                        if (!(Ba > 0 && Ca > 0) || isNaN(fa) || isNaN(ha) || fa < 0 || ha < 0) k = !1;
                                        else {
                                            p = hc(M(l.j));
                                            t = !(fa >= p.left && Ba - fa > p.right && ha >= p.top && Ca - ha > p.bottom);
                                            var r = K(l.j, 12);
                                            if (this.g && (K(this.data, 12) || r) && k.timeStamp -
                                                this.g.timeStamp < 300) {
                                                k = this.g.changedTouches[0];
                                                const [ia, ja] = [k.clientX / B - m.left, k.clientY / B - m.top];
                                                !isNaN(ia) && !isNaN(ja) && ia >= 0 && ja >= 0 && (t = (t = K(this.data, 16) || r ? t : !1) || !(ia >= p.left && Ba - ia > p.right && ja >= p.top && Ca - ja > p.bottom))
                                            }
                                            k = t
                                        }
                                    }
                                } else k = L(m, 11) > 0 ? mc(this, k, l) : !0;
                                if (k) {
                                    var x = l;
                                    f = L(l.j, 3)
                                }
                            }
                        }
                        if (x) switch (l = x.j, N(l, 4)) {
                            case 2:
                            case 3:
                                g.preventDefault ? g.preventDefault() : g.returnValue = !1;
                                f = Date.now();
                                f - x.F > 500 && (x.F = f, ++x.D);
                                f = x.j;
                                if (L(f, 8) && x.D >= L(f, 8))
                                    if (x.u = !0, this.h && L(f, 2) > 0) lc(this);
                                    else if (this.m.length >
                                    0 && M(f))
                                    for (var H of this.m) Y(H, !1);
                                Gb();
                                H = bb(l);
                                for (const B of this.C) B(g, H)
                        }
                    }
                }, hb);
            c && P(R, "touchstart", g => {
                this.v = g
            }, ib);
            (a && d || c) && P(R, "touchend", g => {
                this.g = g
            }, ib)
        }
        registerCallback(a) {
            this.C.push(a)
        }
    };
    const pc = Fb(document.currentScript);
    if (pc == null) throw Error("JSC not found 23");
    var nc;
    const qc = {},
        rc = pc.attributes;
    for (let a = rc.length - 1; a >= 0; a--) {
        const b = rc[a].name;
        b.indexOf("data-jcp-") === 0 && (qc[b.substring(9)] = rc[a].value)
    }
    nc = qc;
    const uc = window;
    uc.googqscp = new oc;
    nc["init-data"] && uc.googqscp.init(JSON.parse(nc["init-data"]));
}).call(this);