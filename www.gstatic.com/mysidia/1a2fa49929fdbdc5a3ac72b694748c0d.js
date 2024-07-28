(function() {
    'use strict';
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var h = this || self;

    function l(a, b) {
        a: {
            var c = ["CLOSURE_FLAGS"];
            for (var d = h, e = 0; e < c.length; e++)
                if (d = d[c[e]], d == null) {
                    c = null;
                    break a
                }
            c = d
        }
        a = c && c[a];
        return a != null ? a : b
    }

    function m(a, b) {
        a = a.split(".");
        var c = h;
        a[0] in c || typeof c.execScript == "undefined" || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || b === void 0 ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    };
    var r = l(610401301, !1),
        aa = l(188588736, !0);
    var t;
    const v = h.navigator;
    t = v ? v.userAgentData || null : null;

    function w(a) {
        return r ? t ? t.brands.some(({
            brand: b
        }) => b && b.indexOf(a) != -1) : !1 : !1
    }

    function x(a) {
        var b;
        a: {
            if (b = h.navigator)
                if (b = b.userAgent) break a;b = ""
        }
        return b.indexOf(a) != -1
    };

    function y() {
        return r ? !!t && t.brands.length > 0 : !1
    }

    function z() {
        return y() ? w("Chromium") : (x("Chrome") || x("CriOS")) && !(y() ? 0 : x("Edge")) || x("Silk")
    };
    !x("Android") || z();
    z();
    x("Safari") && (z() || (y() ? 0 : x("Coast")) || (y() ? 0 : x("Opera")) || (y() ? 0 : x("Edge")) || (y() ? w("Microsoft Edge") : x("Edg/")) || y() && w("Opera"));
    var A = Symbol(),
        B = Symbol();

    function ba(a, b) {
        b[A] = (a | 0) & -14591
    }

    function C(a, b) {
        b[A] = (a | 34) & -14557
    };
    var E = {},
        ca = {};

    function F(a) {
        return !(!a || typeof a !== "object" || a.g !== ca)
    }

    function G(a) {
        return a !== null && typeof a === "object" && !Array.isArray(a) && a.constructor === Object
    }

    function H(a, b, c) {
        if (!Array.isArray(a) || a.length) return !1;
        const d = a[A] | 0;
        if (d & 1) return !0;
        if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
        a[A] = d | 1;
        return !0
    };
    let I;

    function J(a, b) {
        I = b;
        a = new a(b);
        I = void 0;
        return a
    };

    function da(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (H(a, void 0, 0)) return
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

    function ea(a, b, c) {
        a = Array.prototype.slice.call(a);
        var d = a.length;
        const e = b & 256 ? a[d - 1] : void 0;
        d += e ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
        if (e) {
            b = a[b] = {};
            for (const f in e) b[f] = c(e[f])
        }
        return a
    }

    function K(a, b, c, d, e) {
        if (a != null) {
            if (Array.isArray(a)) a = H(a, void 0, 0) ? void 0 : e && (a[A] | 0) & 2 ? a : L(a, b, c, d !== void 0, e);
            else if (G(a)) {
                const f = {};
                for (let g in a) f[g] = K(a[g], b, c, d, e);
                a = f
            } else a = b(a, d);
            return a
        }
    }

    function L(a, b, c, d, e) {
        const f = d || c ? a[A] | 0 : 0;
        d = d ? !!(f & 32) : void 0;
        a = Array.prototype.slice.call(a);
        for (let g = 0; g < a.length; g++) a[g] = K(a[g], b, c, d, e);
        c && c(f, a);
        return a
    }

    function fa(a) {
        return a.s === E ? a.toJSON() : da(a)
    };

    function N(a, b, c = C) {
        if (a != null) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[A] | 0;
                if (d & 2) return a;
                b && (b = d === 0 || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (a[A] = (d | 34) & -12293, a) : L(a, N, d & 4 ? C : c, !0, !0)
            }
            a.s === E && (c = a.l, d = c[A], a = d & 2 ? a : J(a.constructor, O(c, d, !0)));
            return a
        }
    }

    function O(a, b, c) {
        const d = c || b & 2 ? C : ba,
            e = !!(b & 32);
        a = ea(a, b, f => N(f, e, d));
        a[A] = a[A] | 32 | (c ? 2 : 0);
        return a
    };

    function P(a, b, c) {
        a = a.l;
        let d = a[A];
        if (d & 2) throw Error();
        if (c === -1) var e = null;
        else if (e = d >> 14 & 1023 || 536870912, c >= e) e = d & 256 ? a[a.length - 1][c] : void 0;
        else {
            var f = c + (+!!(d & 512) - 1);
            e = f < 0 || f >= a.length || f >= e ? void 0 : a[f]
        }
        if (e != null && typeof e === "object" && e.s === E) b = e;
        else if (Array.isArray(e)) {
            var g = f = e[A] | 0;
            g === 0 && (g |= d & 32);
            g |= d & 2;
            g !== f && (e[A] = g);
            b = new b(e)
        } else d & 2 ? (f = b[B]) ? b = f : (f = new b, g = f.l, g[A] |= 34, b = b[B] = f) : b = new b;
        f = b.l;
        g = f[A];
        b = g & 2 ? J(b.constructor, O(f, g, !1)) : b;
        if (e !== b) a: if (e = d >> 14 & 1023 || 536870912, c >=
            e) {
            g = d;
            if (d & 256) f = a[a.length - 1];
            else {
                if (b == null) break a;
                f = a[e + (+!!(d & 512) - 1)] = {};
                g |= 256
            }
            f[c] = b;
            c < e && (a[c + (+!!(d & 512) - 1)] = void 0);
            g !== d && (a[A] = g)
        } else a[c + (+!!(d & 512) - 1)] = b, d & 256 && (a = a[a.length - 1], c in a && delete a[c]);
        return b
    };
    let Q;
    var S = class {
        constructor(a) {
            a: {
                a == null && (a = I);I = void 0;
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
                    if (d && (--d, G(c[d]))) {
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
            return R(this)
        }
    };
    S.prototype.s = E;
    S.prototype.toString = function() {
        try {
            return Q = !0, R(this).toString()
        } finally {
            Q = !1
        }
    };

    function R(a) {
        var b = Q ? a.l : L(a.l, fa, void 0, void 0, !1);
        var c = !Q;
        var d = aa ? void 0 : a.constructor.o;
        var e = (c ? a.l : b)[A];
        if (a = b.length) {
            var f = b[a - 1],
                g = G(f);
            g ? a-- : f = void 0;
            e = +!!(e & 512) - 1;
            var u = b;
            if (g) {
                b: {
                    var p = f;
                    var n = {};g = !1;
                    if (p)
                        for (var k in p) {
                            if (isNaN(+k)) {
                                n[k] = p[k];
                                continue
                            }
                            let q = p[k];
                            Array.isArray(q) && (H(q, d, +k) || F(q) && q.size === 0) && (q = null);
                            q == null && (g = !0);
                            q != null && (n[k] = q)
                        }
                    if (g) {
                        for (var D in n) break b;
                        n = null
                    } else n = p
                }
                p = n == null ? f != null : n !== f
            }
            for (var M; a > 0; a--) {
                D = a - 1;
                k = u[D];
                D -= e;
                if (!(k == null || H(k, d, D) ||
                        F(k) && k.size === 0)) break;
                M = !0
            }
            if (u !== b || p || M) {
                if (!c) u = Array.prototype.slice.call(u, 0, a);
                else if (M || p || n) u.length = a;
                n && u.push(n)
            }
            b = u
        }
        return b
    };

    function T(a) {
        return b => {
            if (b == null || b == "") b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error("dnarr");
                b[A] |= 32;
                b = J(a, b)
            }
            return b
        }
    };
    var U = class extends S {};
    U.o = [17];
    var V = class extends S {};
    V.o = [76, 27];
    var ha = class extends S {};
    ha.o = [8];
    var ia = T(class extends S {});
    var ja = class extends S {},
        ka = T(ja);
    ja.o = [1, 2, 3];

    function W(a, b) {
        a = a.getElementsByTagName("META");
        for (let c = 0; c < a.length; ++c)
            if (a[c].getAttribute("name") === b) return a[c].getAttribute("content") || "";
        return ""
    };

    function X(a, b) {
        a.body.dispatchEvent(new CustomEvent(b, {
            detail: void 0
        }))
    }
    var la = class {
        constructor(a) {
            this.body = a;
            this.g = [];
            W(a, "sampling_mod");
            var b = W(a, "namespace");
            if (!b) {
                b = "ns-" + (0, Math.random)().toString(36).substr(2, 5);
                a: {
                    var c = a.getElementsByTagName("META");
                    for (let d = 0; d < c.length; ++d)
                        if (c[d].getAttribute("name") === "namespace" && c[d].getAttribute("index") === (0).toString()) {
                            c[d].setAttribute("content", b);
                            break a
                        }
                    c = a.querySelector("#mys-meta");c || (c = document.createElement("div"), c.id = "mys-meta", c.style.position = "absolute", c.style.display = "none", a.appendChild(c));a = document.createElement("META");
                    a.setAttribute("name", "namespace");a.setAttribute("content", b);a.setAttribute("index", (0).toString());c.appendChild(a)
                }
            }
            if (!(this.g.length > 0)) {
                a = W(this.body, "environment");
                for (const d of a.split("|")) d && this.g.push(d)
            }
        }
        addEventListener(a, b) {
            this.body.addEventListener(a, b)
        }
    };

    function ma(a) {
        if (a.i.offsetWidth <= 1 || a.i.offsetHeight <= 1) return !1;
        a.g.remove();
        X(a.context, "spanReady");
        return !0
    }
    var na = class {
        constructor(a) {
            this.context = a;
            this.config = {
                B: !1,
                A: 100
            };
            this.i = document.createElement("span");
            this.g = document.createElement("div");
            this.i.style.fontSize = "6px";
            this.i.textContent = "go";
            this.g.style.position = "absolute";
            this.g.style.top = "100%";
            this.g.style.left = "100%";
            this.g.style.width = "1px";
            this.g.style.height = "0";
            this.g.style.overflow = "hidden";
            this.g.style.visibility = "hidden";
            this.g.appendChild(this.i)
        }
        wait() {
            if (!this.config.B && (X(this.context, "spanStart"), this.context.body.appendChild(this.g), !ma(this))) return new Promise(a => {
                const b = setInterval(() => {
                    ma(this) && (clearInterval(b), a())
                }, this.config.A)
            })
        }
    };
    var oa = class {
        constructor(a, b) {
            this.context = a;
            this.config = b;
            this.g = P(b, V, 1);
            P(b, ha, 12);
            P(this.g, U, 10)
        }
    };

    function pa(a) {
        a.m.length = 0;
        a.i = !0
    }

    function qa(a, b) {
        a.g = !0;
        const c = () => {
            a.i = !1;
            const d = a.m.shift();
            return d === void 0 ? (a.g = !1, Promise.resolve()) : qa(a, d())
        };
        return b ? b.then(c, () => {
            if (a.i) return c();
            a.g = !1;
            return Promise.reject()
        }) : c()
    }

    function ra(a, b) {
        for (const c of b) a.m.push(c);
        if (!a.g) return qa(a)
    }
    var sa = class {
        constructor() {
            this.i = this.g = !1;
            this.m = []
        }
    };

    function ta(a) {
        pa(a.m);
        return ra(a.m, [() => {
            if (!a.u) {
                var b = W(a.context.body, "render_config") || "[]";
                b = ia(b);
                b = new oa(a.context, b);
                a.u = b
            }
            b = (new na(a.context)).wait();
            X(a.context, "browserStart");
            X(a.context, "browserStartEnd");
            a.g &= -31;
            a.g |= 2;
            return b
        }, () => {
            X(a.context, "browserReady");
            X(a.context, "browserReadyEnd");
            a.g |= 4;
            X(a.context, "overallReady")
        }, () => {
            X(a.context, "browserQuiet");
            X(a.context, "browserQuietEnd");
            a.g |= 8
        }])
    }

    function ua(a) {
        ka(W(a.context.body, "engine_msg") || "[]");
        return ta(a) || Promise.resolve()
    }
    var Y = class {
        constructor(a, b) {
            this.m = new sa;
            this.g = 0;
            this.context = new la(b)
        }
        v() {
            return this.g
        }
        i() {
            this.g &= -31;
            this.g |= 1;
            let a = 0;
            const b = this.context.body;
            b.addEventListener("browserRender", () => {
                ++a;
                if (a === 1) X(this.context, "overallStart"), ua(this).then(() => {
                    X(this.context, "overallQuiet")
                });
                else {
                    var c = b.clientHeight;
                    b.clientWidth && c && ua(this)
                }
            })
        }
    };
    let Z;
    m("mys.engine.init", (a, b) => {
        Z = new Y(a, b);
        Z.i()
    });
    m("mys.engine.stage", () => {
        let a;
        return ((a = Z) == null ? void 0 : a.g) || 0
    });
    m("mys.Engine", Y);
    m("mys.Engine.prototype.i", Y.prototype.i);
    m("mys.Engine.prototype.s", Y.prototype.v);
}).call(this);