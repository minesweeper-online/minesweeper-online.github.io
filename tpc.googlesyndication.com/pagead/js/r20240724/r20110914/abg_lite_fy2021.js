(function() {
    'use strict';
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var m = this || self;

    function n(a, b) {
        a: {
            var c = ["CLOSURE_FLAGS"];
            for (var d = m, e = 0; e < c.length; e++)
                if (d = d[c[e]], d == null) {
                    c = null;
                    break a
                }
            c = d
        }
        a = c && c[a];
        return a != null ? a : b
    }

    function aa(a) {
        return a
    };

    function ba(a) {
        m.setTimeout(() => {
            throw a;
        }, 0)
    };
    var ca = n(610401301, !1),
        da = n(188588736, !0),
        fa = n(645172343, n(1, !0));
    var r;
    const ha = m.navigator;
    r = ha ? ha.userAgentData || null : null;

    function ia(a) {
        return ca ? r ? r.brands.some(({
            brand: b
        }) => b && b.indexOf(a) != -1) : !1 : !1
    }

    function t(a) {
        var b;
        a: {
            if (b = m.navigator)
                if (b = b.userAgent) break a;b = ""
        }
        return b.indexOf(a) != -1
    };

    function w() {
        return ca ? !!r && r.brands.length > 0 : !1
    }

    function ja() {
        return w() ? ia("Chromium") : (t("Chrome") || t("CriOS")) && !(w() ? 0 : t("Edge")) || t("Silk")
    };

    function ka(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    };

    function la(a) {
        la[" "](a);
        return a
    }
    la[" "] = function() {};
    !t("Android") || ja();
    ja();
    t("Safari") && (ja() || (w() ? 0 : t("Coast")) || (w() ? 0 : t("Opera")) || (w() ? 0 : t("Edge")) || (w() ? ia("Microsoft Edge") : t("Edg/")) || w() && ia("Opera"));
    let ma;
    var x = Symbol(),
        na = Symbol();

    function oa(a, b) {
        b[x] = (a | 0) & -14591
    }

    function pa(a, b) {
        b[x] = (a | 34) & -14557
    };
    var y = {},
        qa = {};

    function ra(a) {
        return !(!a || typeof a !== "object" || a.g !== qa)
    }

    function sa(a) {
        return a !== null && typeof a === "object" && !Array.isArray(a) && a.constructor === Object
    }

    function z(a, b, c) {
        if (!Array.isArray(a) || a.length) return !1;
        const d = a[x] | 0;
        if (d & 1) return !0;
        if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
        a[x] = d | 1;
        return !0
    };

    function A(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return Number.isFinite(a) ? a | 0 : void 0
    };
    let B;

    function F(a, b) {
        B = b;
        a = new a(b);
        B = void 0;
        return a
    };

    function ta(a, b) {
        return ua(b)
    }

    function ua(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (z(a, void 0, 0)) return
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

    function va(a, b, c) {
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

    function wa(a, b, c, d, e) {
        if (a != null) {
            if (Array.isArray(a)) a = z(a, void 0, 0) ? void 0 : e && (a[x] | 0) & 2 ? a : xa(a, b, c, d !== void 0, e);
            else if (sa(a)) {
                const f = {};
                for (let g in a) f[g] = wa(a[g], b, c, d, e);
                a = f
            } else a = b(a, d);
            return a
        }
    }

    function xa(a, b, c, d, e) {
        const f = d || c ? a[x] | 0 : 0;
        d = d ? !!(f & 32) : void 0;
        a = Array.prototype.slice.call(a);
        for (let g = 0; g < a.length; g++) a[g] = wa(a[g], b, c, d, e);
        c && c(f, a);
        return a
    }

    function ya(a) {
        return a.v === y ? a.toJSON() : ua(a)
    };

    function za(a, b, c = pa) {
        if (a != null) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[x] | 0;
                if (d & 2) return a;
                b && (b = d === 0 || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (a[x] = (d | 34) & -12293, a) : xa(a, za, d & 4 ? pa : c, !0, !0)
            }
            a.v === y && (c = a.l, d = c[x], a = d & 2 ? a : F(a.constructor, Aa(c, d, !0)));
            return a
        }
    }

    function Aa(a, b, c) {
        const d = c || b & 2 ? pa : oa,
            e = !!(b & 32);
        a = va(a, b, f => za(f, e, d));
        a[x] = a[x] | 32 | (c ? 2 : 0);
        return a
    };

    function G(a, b) {
        a = a.l;
        return Ba(a, a[x], b)
    }

    function Ga(a, b, c, d) {
        b = d + (+!!(b & 512) - 1);
        if (!(b < 0 || b >= a.length || b >= c)) return a[b]
    }

    function Ba(a, b, c, d) {
        if (c === -1) return null;
        const e = b >> 14 & 1023 || 536870912;
        if (c >= e) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var f = a.length;
            return d && b & 256 && (d = a[f - 1][c], d != null) ? (Ga(a, b, e, c) && na != null && (a = ma ? ? (ma = {}), b = a[na] || 0, b >= 4 || (a[na] = b + 1, a = Error(), a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {}), a.__closure__error__context__984382.severity = "incident", ba(a))), d) : Ga(a, b, e, c)
        }
    }

    function Ha(a, b, c, d, e) {
        const f = b >> 14 & 1023 || 536870912;
        if (c >= f || e && !fa) {
            let g = b;
            if (b & 256) e = a[a.length - 1];
            else {
                if (d == null) return;
                e = a[f + (+!!(b & 512) - 1)] = {};
                g |= 256
            }
            e[c] = d;
            c < f && (a[c + (+!!(b & 512) - 1)] = void 0);
            g !== b && (a[x] = g)
        } else a[c + (+!!(b & 512) - 1)] = d, b & 256 && (a = a[a.length - 1], c in a && delete a[c])
    }

    function Ia(a) {
        var b = Ja;
        a = a.l;
        let c = a[x];
        const d = Ba(a, c, 1, !1);
        if (d != null && typeof d === "object" && d.v === y) b = d;
        else if (Array.isArray(d)) {
            const e = d[x] | 0;
            let f = e;
            f === 0 && (f |= c & 32);
            f |= c & 2;
            f !== e && (d[x] = f);
            b = new b(d)
        } else b = void 0;
        b !== d && b != null && Ha(a, c, 1, b, !1);
        return b
    }

    function Ka(a) {
        let b = Ia(a);
        if (b == null) return b;
        a = a.l;
        let c = a[x];
        if (!(c & 2)) {
            var d = b;
            const e = d.l,
                f = e[x];
            d = f & 2 ? F(d.constructor, Aa(e, f, !1)) : d;
            d !== b && (b = d, Ha(a, c, 1, b, !1))
        }
        return b
    }

    function I(a, b) {
        a = G(a, b);
        return a == null || typeof a === "string" ? a : void 0
    }

    function J(a, b) {
        a = G(a, b);
        return (a == null || typeof a === "boolean" ? a : typeof a === "number" ? !!a : void 0) ? ? !1
    }

    function K(a, b, c) {
        if (c != null && typeof c !== "string") throw Error();
        a = a.l;
        let d = a[x];
        if (d & 2) throw Error();
        Ha(a, d, b, c)
    };
    let L;
    var Ma = class {
        constructor(a) {
            a: {
                a == null && (a = B);B = void 0;
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
                    if (d && (--d, sa(c[d]))) {
                        b |= 256;
                        c = d - (+!!(b & 512) - 1);
                        if (c >= 1024) throw Error("pvtlmt");
                        b = b & -16760833 | (c & 1023) << 14
                    }
                }
                a[x] = b
            }
            this.l = a
        }
        toJSON() {
            return La(this)
        }
    };
    Ma.prototype.v = y;

    function La(a) {
        var b = L ? a.l : xa(a.l, ya, void 0, void 0, !1);
        var c = !L;
        var d = da ? void 0 : a.constructor.N;
        var e = (c ? a.l : b)[x];
        if (a = b.length) {
            var f = b[a - 1],
                g = sa(f);
            g ? a-- : f = void 0;
            e = +!!(e & 512) - 1;
            var k = b;
            if (g) {
                b: {
                    var l = f;
                    var h = {};g = !1;
                    if (l)
                        for (var p in l) {
                            if (isNaN(+p)) {
                                h[p] = l[p];
                                continue
                            }
                            let q = l[p];
                            Array.isArray(q) && (z(q, d, +p) || ra(q) && q.size === 0) && (q = null);
                            q == null && (g = !0);
                            q != null && (h[p] = q)
                        }
                    if (g) {
                        for (var u in h) break b;
                        h = null
                    } else h = l
                }
                l = h == null ? f != null : h !== f
            }
            for (var v; a > 0; a--) {
                u = a - 1;
                p = k[u];
                u -= e;
                if (!(p == null || z(p,
                        d, u) || ra(p) && p.size === 0)) break;
                v = !0
            }
            if (k !== b || l || v) {
                if (!c) k = Array.prototype.slice.call(k, 0, a);
                else if (v || l || h) k.length = a;
                h && k.push(h)
            }
            b = k
        }
        return b
    };
    var Ja = class extends Ma {};
    Ja.N = [28];
    var Na = class extends Ma {},
        Oa = function(a) {
            return b => {
                if (b == null || b == "") b = new a;
                else {
                    b = JSON.parse(b);
                    if (!Array.isArray(b)) throw Error("dnarr");
                    b[x] |= 32;
                    b = F(a, b)
                }
                return b
            }
        }(Na);
    Na.N = [21];
    var Pa = class extends Ma {
        constructor() {
            super()
        }
    };

    function Qa(a = window) {
        return a
    };

    function Ra(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var Sa = {
            passive: !0
        },
        Ta = Ra(function() {
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

    function Ua(a) {
        return a ? a.passive && Ta() ? a : a.capture || !1 : !1
    }

    function M(a, b, c, d) {
        a.addEventListener && a.addEventListener(b, c, Ua(d))
    };
    var Va;
    var Wa = class {
            constructor(a) {
                this.g = a
            }
            toString() {
                return this.g + ""
            }
        },
        Xa = {};

    function N(a) {
        var b = document;
        return typeof a === "string" ? b.getElementById(a) : a
    }

    function Ya(a) {
        var b = document;
        b.getElementsByClassName ? a = b.getElementsByClassName(a)[0] : (b = document, a = b.querySelectorAll && b.querySelector && a ? b.querySelector(a ? "." + a : "") : Za(b, a)[0] || null);
        return a || null
    }

    function Za(a, b) {
        var c, d;
        if (a.querySelectorAll && a.querySelector && b) return a.querySelectorAll(b ? "." + b : "");
        if (b && a.getElementsByClassName) {
            var e = a.getElementsByClassName(b);
            return e
        }
        e = a.getElementsByTagName("*");
        if (b) {
            var f = {};
            for (c = d = 0; a = e[c]; c++) {
                var g = a.className,
                    k;
                if (k = typeof g.split == "function") k = ka(g.split(/\s+/), b) >= 0;
                k && (f[d++] = a)
            }
            f.length = d;
            return f
        }
        return e
    }

    function $a(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    };
    var ab = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
        bb = /#|$/;

    function cb(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function db(a, b = document) {
        return b.createElement(String(a).toLowerCase())
    };

    function eb(a, b, c = null, d = !1) {
        fb(a, b, c, d)
    }

    function fb(a, b, c, d) {
        a.google_image_requests || (a.google_image_requests = []);
        const e = db("IMG", a.document);
        if (c || d) {
            const f = g => {
                c && c(g);
                if (d) {
                    g = a.google_image_requests;
                    const k = ka(g, e);
                    k >= 0 && Array.prototype.splice.call(g, k, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, Ua());
                e.removeEventListener && e.removeEventListener("error", f, Ua())
            };
            M(e, "load", f);
            M(e, "error", f)
        }
        e.src = b;
        a.google_image_requests.push(e)
    };
    let gb = 0;

    function hb(a) {
        return (a = ib(a, document.currentScript)) && a.getAttribute("data-jc-version") || "unknown"
    }

    function ib(a, b = null) {
        return b && b.getAttribute("data-jc") === String(a) ? b : document.querySelector(`[${"data-jc"}="${a}"]`)
    }

    function jb() {
        if (!(Math.random() > .01)) {
            var a = ib(60, document.currentScript);
            a = `https://${a&&a.getAttribute("data-jc-rcd")==="true"?"pagead2.googlesyndication-cn.com":"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${60}&version=${hb(60)}&sample=${.01}`;
            var b = window,
                c;
            if (c = b.navigator) c = b.navigator.userAgent, c = /Chrome/.test(c) && !/Edge/.test(c) ? !0 : !1;
            c && b.navigator.sendBeacon ? b.navigator.sendBeacon(a) : eb(b, a, void 0, !1)
        }
    };
    var kb = document,
        O = window;

    function pb(a) {
        return typeof a.className == "string" ? a.className : a.getAttribute && a.getAttribute("class") || ""
    }

    function qb(a, b) {
        a.classList ? b = a.classList.contains(b) : (a = a.classList ? a.classList : pb(a).match(/\S+/g) || [], b = ka(a, b) >= 0);
        return b
    }

    function P(a, b) {
        if (a.classList) a.classList.add(b);
        else if (!qb(a, b)) {
            var c = pb(a);
            b = c + (c.length > 0 ? " " + b : b);
            typeof a.className == "string" ? a.className = b : a.setAttribute && a.setAttribute("class", b)
        }
    };
    var rb = class {
        constructor(a) {
            var b = La(a);
            this.serializedAttributionData = b;
            b = a.l;
            this.g = F(a.constructor, Aa(b, b[x], !1));
            this.isMutableImpression = Ia(this.g) !== void 0 && !!J(Ka(this.g), 33);
            I(this.g, 30);
            this.X = !!J(this.g, 11);
            this.hasUserFeedbackData = !!this.g && Ia(this.g) !== void 0;
            this.R = !!J(this.g, 4);
            this.U = !!J(this.g, 6);
            this.P = !!J(this.g, 13);
            A(G(this.g, 8));
            this.creativeIndexSuffix = (A(G(this.g, 8)) ? ? 0) > 1 ? (A(G(this.g, 7)) ? ? 0).toString() : "";
            I(this.g, 34) != null && (this.creativeIndexSuffix = (I(this.g, 34) ? ? "") + "_" +
                this.creativeIndexSuffix);
            this.Y = !!J(this.g, 17);
            this.W = !!J(this.g, 18);
            this.O = !!J(this.g, 14);
            this.F = !!J(this.g, 15);
            this.Z = !!J(this.g, 31);
            this.V = J(this.g, 9) == 1;
            this.openAttributionInline = J(this.g, 10) == 1;
            this.isMobileDevice = !!J(this.g, 12);
            this.u = null;
            this.T = (a = kb.querySelector("[data-slide]")) ? a.getAttribute("data-slide") === "true" : !1;
            (this.H = (A(G(this.g, 8)) ? ? 0) > 1) && O.goog_multislot_cache === void 0 && (O.goog_multislot_cache = {});
            if (this.H && !this.T) {
                if (a = O.goog_multislot_cache.hd, a === void 0) {
                    a = !1;
                    if (b = kb.querySelector("[data-dim]"))
                        if (b =
                            b.getBoundingClientRect(), b.right - b.left >= 150 && b.bottom - b.top >= 150) a = !1;
                        else {
                            var c = document.body.getBoundingClientRect();
                            (Math.abs(c.left - b.left) <= 1 && Math.abs(c.right - b.right) <= 1 ? b.bottom - b.top : b.right - b.left) < 150 && (a = !0)
                        }
                    else a = !1;
                    window.goog_multislot_cache.hd = a
                }
            } else a = !1;
            this.G = a;
            this.B = N("abgcp" + this.creativeIndexSuffix);
            this.A = N("abgc" + this.creativeIndexSuffix);
            this.h = N("abgs" + this.creativeIndexSuffix);
            N("abgl" + this.creativeIndexSuffix);
            this.s = N("abgb" + this.creativeIndexSuffix);
            this.D = N("abgac" +
                this.creativeIndexSuffix);
            N("mute_panel" + this.creativeIndexSuffix);
            this.C = Ya("goog_delegate_attribution" + this.creativeIndexSuffix);
            this.isDelegateAttributionActive = !!this.C && !!this.O && !Ya("goog_delegate_disabled") && !this.F;
            if (this.h) a: for (a = this.h, b = a.childNodes, c = 0; c < b.length; c++) {
                const d = b.item(c);
                if (typeof d.tagName != "undefined" && d.tagName.toUpperCase() == "A") {
                    a = d;
                    break a
                }
            } else a = null;
            this.m = a;
            this.j = this.isDelegateAttributionActive ? this.C : N("cbb" + this.creativeIndexSuffix);
            this.S = this.G ? this.creativeIndexSuffix ===
                "0" : !0;
            this.enableDelegateDismissableMenu = !!this.j && qb(this.j, "goog_dismissable_menu");
            this.o = null;
            this.I = 0;
            this.i = this.isDelegateAttributionActive ? this.C : this.U && this.B ? this.B : this.A;
            this.autoExpandOnLoad = !!J(this.g, 19);
            this.adbadgeEnabled = !!J(this.g, 24);
            this.enableNativeJakeUi = !!J(this.g, 27);
            I(this.g, 33)
        }
    };
    var sb = class {
        constructor(a, b, c) {
            if (!a) throw Error("bad conv util ctor args");
            this.g = a;
            this.h = c
        }
    };
    var Q = (a, b) => {
        a && cb(b, (c, d) => {
            a.style[d] = c
        })
    };
    class tb {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };
    const ub = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var vb = class {
            constructor(a, b) {
                this.g = a;
                this.h = b
            }
        },
        wb = class {
            constructor(a, b) {
                this.url = a;
                this.L = !!b;
                this.depth = null
            }
        };
    let xb = null;

    function yb() {
        const a = m.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function zb() {
        const a = m.performance;
        return a && a.now ? a.now() : null
    };
    var Ab = class {
        constructor(a, b) {
            var c = zb() || yb();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    };
    const S = m.performance,
        Bb = !!(S && S.mark && S.measure && S.clearMarks),
        T = Ra(() => {
            var a;
            if (a = Bb) {
                var b;
                if (xb === null) {
                    xb = "";
                    try {
                        a = "";
                        try {
                            a = m.top.location.hash
                        } catch (c) {
                            a = m.location.hash
                        }
                        a && (xb = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = xb;
                a = !!b.indexOf && b.indexOf("1337") >= 0
            }
            return a
        });

    function Cb(a) {
        a && S && T() && (S.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), S.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }
    class Db {
        constructor() {
            var a = window;
            this.h = [];
            this.i = a || m;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.h = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.g = T() || (b != null ? b : Math.random() < 1)
        }
        start(a, b) {
            if (!this.g) return null;
            a = new Ab(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            S && T() && S.mark(b);
            return a
        }
        end(a) {
            if (this.g && typeof a.value === "number") {
                a.duration = (zb() || yb()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                S && T() && S.mark(b);
                !this.g || this.h.length >
                    2048 || this.h.push(a)
            }
        }
    };

    function Eb(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function Fb(a, b, c, d, e) {
        const f = [];
        cb(a, function(g, k) {
            (g = Gb(g, b, c, d, e)) && f.push(k + "=" + g)
        });
        return f.join(b)
    }

    function Gb(a, b, c, d, e) {
        if (a == null) return "";
        b = b || "&";
        c = c || ",$";
        typeof c == "string" && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(Gb(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if (typeof a == "object") return e = e || 0, e < 2 ? encodeURIComponent(Fb(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Hb(a) {
        let b = 1;
        for (const c in a.h) b = c.length > b ? c.length : b;
        return 3997 - b - a.i.length - 1
    }

    function Ib(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = Hb(a) - b.length;
        if (d < 0) return "";
        a.g.sort(function(f, g) {
            return f - g
        });
        b = null;
        let e = "";
        for (let f = 0; f < a.g.length; f++) {
            const g = a.g[f],
                k = a.h[g];
            for (let l = 0; l < k.length; l++) {
                if (!d) {
                    b = b == null ? g : b;
                    break
                }
                let h = Fb(k[l], a.i, ",$");
                if (h) {
                    h = e + h;
                    if (d >= h.length) {
                        d -= h.length;
                        c += h;
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
    class Jb {
        constructor() {
            this.i = "&";
            this.h = {};
            this.j = 0;
            this.g = []
        }
    };

    function Kb(a) {
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

    function Lb(a, b, c) {
        let d, e;
        try {
            a.g && a.g.g ? (e = a.g.start(b.toString(), 3), d = c(), a.g.end(e)) : d = c()
        } catch (f) {
            c = !0;
            try {
                Cb(e), c = a.m(b, new tb(f, {
                    message: Kb(f)
                }), void 0, void 0)
            } catch (g) {
                a.j(217, g)
            }
            if (c) window.console ? .error ? .(f);
            else throw f;
        }
        return d
    }

    function Mb(a, b) {
        var c = U;
        return (...d) => Lb(c, a, () => b.apply(void 0, d))
    }
    var Pb = class {
        constructor(a = null) {
            this.pinger = Nb;
            this.g = a;
            this.h = null;
            this.i = !1;
            this.m = this.j
        }
        j(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const C = new Jb;
                var g = C;
                g.g.push(1);
                g.h[1] = Eb("context", a);
                b.error && b.meta && b.id || (b = new tb(b, {
                    message: Kb(b)
                }));
                if (b.msg) {
                    g = C;
                    var k = b.msg.substring(0, 512);
                    g.g.push(2);
                    g.h[2] = Eb("msg", k)
                }
                var l = b.meta || {};
                b = l;
                if (this.h) try {
                    this.h(b)
                } catch (D) {}
                if (d) try {
                    d(b)
                } catch (D) {}
                d = C;
                l = [l];
                d.g.push(3);
                d.h[3] = l;
                d = m;
                l = [];
                let ea;
                b = null;
                do {
                    var h = d;
                    try {
                        var p;
                        if (p = !!h && h.location.href != null) b: {
                            try {
                                la(h.foo);
                                p = !0;
                                break b
                            } catch (D) {}
                            p = !1
                        }
                        var u = p
                    } catch {
                        u = !1
                    }
                    u ? (ea = h.location.href, b = h.document && h.document.referrer || null) : (ea = b, b = null);
                    l.push(new wb(ea || ""));
                    try {
                        d = h.parent
                    } catch (D) {
                        d = null
                    }
                } while (d && h != d);
                for (let D = 0, lb = l.length - 1; D <= lb; ++D) l[D].depth = lb - D;
                h = m;
                if (h.location && h.location.ancestorOrigins && h.location.ancestorOrigins.length == l.length - 1)
                    for (u = 1; u < l.length; ++u) {
                        var v = l[u];
                        v.url || (v.url = h.location.ancestorOrigins[u - 1] || "", v.L = !0)
                    }
                var q = l;
                let Ca = new wb(m.location.href, !1);
                h = null;
                const Da = q.length - 1;
                for (v = Da; v >= 0; --v) {
                    var E = q[v];
                    !h && ub.test(E.url) && (h = E);
                    if (E.url && !E.L) {
                        Ca = E;
                        break
                    }
                }
                E = null;
                const Yb = q.length && q[Da].url;
                Ca.depth != 0 && Yb && (E = q[Da]);
                f = new vb(Ca, E);
                if (f.h) {
                    q = C;
                    var H = f.h.url || "";
                    q.g.push(4);
                    q.h[4] = Eb("top", H)
                }
                var Ea = {
                    url: f.g.url || ""
                };
                if (f.g.url) {
                    var Fa = f.g.url.match(ab),
                        R = Fa[1],
                        mb = Fa[3],
                        nb = Fa[4];
                    H = "";
                    R && (H += R + ":");
                    mb && (H += "//", H += mb, nb && (H += ":" + nb));
                    var ob = H
                } else ob = "";
                R = C;
                Ea = [Ea, {
                    url: ob
                }];
                R.g.push(5);
                R.h[5] = Ea;
                Ob(this.pinger, e, C, this.i, c)
            } catch (C) {
                try {
                    Ob(this.pinger, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: Kb(C),
                        url: f && f.g.url
                    }, this.i, c)
                } catch (ea) {}
            }
            return !0
        }
    };

    function Ob(a, b, c, d = !1, e) {
        if ((d ? a.g : Math.random()) < (e || .01)) try {
            let f;
            c instanceof Jb ? f = c : (f = new Jb, cb(c, (k, l) => {
                var h = f;
                const p = h.j++;
                k = Eb(l, k);
                h.g.push(p);
                h.h[p] = k
            }));
            const g = Ib(f, "/pagead/gen_204?id=" + b + "&");
            g && eb(m, g)
        } catch (f) {}
    }

    function Qb() {
        var a = Nb,
            b = window.google_srt;
        b >= 0 && b <= 1 && (a.g = b)
    }
    class Rb {
        constructor() {
            this.g = Math.random()
        }
    };
    let Nb, U;
    const V = new Db;
    var Sb = () => {
        window.google_measure_js_timing || (V.g = !1, V.h != V.i.google_js_reporting_queue && (T() && Array.prototype.forEach.call(V.h, Cb, void 0), V.h.length = 0))
    };
    (a => {
        Nb = a ? ? new Rb;
        typeof window.google_srt !== "number" && (window.google_srt = Math.random());
        Qb();
        U = new Pb(V);
        U.h = b => {
            const c = gb;
            c !== 0 && (b.jc = String(c), b.shv = hb(c))
        };
        U.i = !0;
        window.document.readyState == "complete" ? Sb() : V.g && M(window, "load", () => {
            Sb()
        })
    })();
    var W = (a, b) => Mb(a, b);

    function Tb(a) {
        if (a.g.m && a.g.W) {
            const b = Ka(a.g.g);
            b && I(b, 5) != null && I(b, 6) != null && (a.i = new sb(I(b, 5) ? ? "", I(b, 6) ? ? "", I(b, 19) ? ? ""));
            M(a.g.m, "click", W(452, () => {
                if (!a.j && (a.j = !0, a.i)) {
                    var c = a.i;
                    var d = c.g;
                    var e = d.search(bb),
                        f;
                    b: {
                        for (f = 0;
                            (f = d.indexOf("ad_signals", f)) >= 0 && f < e;) {
                            var g = d.charCodeAt(f - 1);
                            if (g == 38 || g == 63)
                                if (g = d.charCodeAt(f + 10), !g || g == 61 || g == 38 || g == 35) break b;
                            f += 11
                        }
                        f = -1
                    }
                    if (f < 0) d = null;
                    else {
                        g = d.indexOf("&", f);
                        if (g < 0 || g > e) g = e;
                        d = decodeURIComponent(d.slice(f + 11, g !== -1 ? g : 0).replace(/\+/g, " "))
                    }
                    if (d) {
                        if (d = {
                                J: d,
                                label: "closebutton_whythisad_click",
                                M: "1",
                                K: ""
                            }, c = new Pa, d != null && (d.J != null && K(c, 1, d.J), d.ba != null && K(c, 3, d.ba), d.label != null && K(c, 6, d.label), d.M != null && K(c, 7, d.M), d.K != null && K(c, 8, d.K), d.aa != null && K(c, 11, d.aa)), (d = Qa(m).fence) != null) {
                            e = d.reportEvent;
                            try {
                                L = !0;
                                var k = JSON.stringify(La(c), ta)
                            } finally {
                                L = !1
                            }
                            e.call(d, {
                                eventType: "interaction",
                                eventData: k,
                                destination: ["buyer"]
                            })
                        }
                    } else k = c.g + "&label=closebutton_whythisad_click", k += "&label_instance=1", c.h && (k += "&cid=" + c.h), eb(window, k)
                }
            }))
        }
    }

    function Ub(a) {
        if (a.g.X) M(a.g.i, "click", W(365, b => {
            const c = O.goog_interstitial_display;
            c && (c(b), b && (b.stopPropagation(), b.preventDefault()))
        }));
        else if (a.g.isMutableImpression && a.g.isMobileDevice) M(a.g.i, "click", () => a.h());
        else if (a.g.isMutableImpression && !a.g.isMobileDevice && (a.g.j && (M(a.g.j, "click", () => a.h()), M(a.g.j, "keydown", b => {
                b.code !== "Enter" && b.code !== "Space" || a.h()
            })), a.g.Z && a.g.h && M(a.g.h, "click", () => a.h())), a.g.R) Vb(a);
        else {
            M(a.g.i, "mouseover", W(367, () => Vb(a)));
            M(a.g.i, "mouseout", W(369,
                () => Wb(a, 500)));
            M(a.g.i, "touchstart", W(368, () => Vb(a)), Sa);
            const b = W(370, () => Wb(a, 4E3));
            M(a.g.i, "mouseup", b);
            M(a.g.i, "touchend", b);
            M(a.g.i, "touchcancel", b);
            a.g.m && M(a.g.m, "click", W(371, c => a.preventDefault(c)))
        }
    }

    function Vb(a) {
        window.clearTimeout(a.g.o);
        a.g.o = null;
        a.g.h && a.g.h.style.display == "block" || (a.g.I = Date.now(), a.g.s && a.g.h && (a.g.s.style.display = "none", a.g.h.style.display = "block"))
    }

    function Wb(a, b) {
        window.clearTimeout(a.g.o);
        a.g.o = window.setTimeout(() => Xb(a), b)
    }

    function Zb(a) {
        const b = a.g.D;
        b !== void 0 && (b.style.display = "block", a.g.enableNativeJakeUi && window.requestAnimationFrame(() => {
            P(b, "abgacfo")
        }))
    }

    function Xb(a) {
        window.clearTimeout(a.g.o);
        a.g.o = null;
        a.g.s && a.g.h && (a.g.s.style.display = "block", a.g.h.style.display = "none")
    }
    class $b {
        constructor(a, b) {
            this.g = a;
            this.h = b;
            this.g.Y || (this.j = !1, this.i = null, !this.g.G || this.g.adbadgeEnabled || this.g.S ? Tb(this) : (a = {
                display: "none"
            }, b = {
                width: "15px",
                height: "15px"
            }, this.g.isMobileDevice ? (Q(this.g.s, a), Q(this.g.h, a), Q(this.g.B, b), Q(this.g.A, b)) : Q(this.g.A, a)), Ub(this), this.g.enableNativeJakeUi && P(this.g.D, "abgnac"), this.g.isDelegateAttributionActive ? (P(document.body, "goog_delegate_active"), P(document.body, "jaa")) : (!this.g.isMutableImpression && this.g.j && $a(this.g.j), setTimeout(() => {
                P(document.body,
                    "jar")
            }, this.g.P ? 750 : 100)), this.g.F && P(document.body, "goog_delegate_disabled"), this.g.autoExpandOnLoad && O.addEventListener("load", () => this.h()))
        }
        preventDefault(a) {
            if (this.g.h && this.g.h.style.display == "block" && Date.now() - this.g.I < 500) a.preventDefault ? a.preventDefault() : a.returnValue = !1;
            else if (this.g.openAttributionInline) {
                var b = this.g.m.getAttribute("href");
                window.adSlot ? window.adSlot.openAttribution(b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1) : window.openAttribution && (window.openAttribution(b),
                    a.preventDefault ? a.preventDefault() : a.returnValue = !1)
            } else this.g.V && (b = this.g.m.getAttribute("href"), window.adSlot ? window.adSlot.openSystemBrowser(b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1) : window.openSystemBrowser && (window.openSystemBrowser(b), a.preventDefault ? a.preventDefault() : a.returnValue = !1))
        }
    };

    function ac(a) {
        if (!a.g && (a.g = !0, O.goog_delegate_deferred_token = void 0, a.h)) {
            var b = a.i;
            a = Oa(JSON.stringify(a.h));
            if (!a) throw Error("bad attrdata");
            a = new rb(a);
            new b(a)
        }
    }
    class bc {
        constructor(a) {
            var b = cc;
            if (!b) throw Error("bad ctor");
            this.i = b;
            this.h = a;
            this.g = !1;
            Ya("goog_delegate_deferred") ? O.goog_delegate_deferred_token !== void 0 ? ac(this) : (a = () => {
                ac(this)
            }, O.goog_delegate_deferred_token = a, setTimeout(a, 5E3)) : ac(this)
        }
    };
    var dc = (a = []) => {
        m.google_logging_queue || (m.google_logging_queue = []);
        m.google_logging_queue.push([11, a])
    };
    class ec {
        constructor() {
            this.promise = new Promise((a, b) => {
                this.resolve = a;
                this.reject = b
            })
        }
    };

    function fc() {
        const {
            promise: a,
            resolve: b
        } = new ec;
        return {
            promise: a,
            resolve: b
        }
    };
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    function gc(a, b = () => {}) {
        a.google_llp || (a.google_llp = {});
        a = a.google_llp;
        let c = a[5];
        if (c) return c;
        c = fc();
        a[5] = c;
        b();
        return c
    }

    function hc(a, b) {
        return gc(a, () => {
            var c = a.document;
            const d = db("SCRIPT", c);
            d.src = b instanceof Wa && b.constructor === Wa ? b.g : "type_error:TrustedResourceUrl";
            if (!(void 0) ? .ca) {
                var e;
                (e = (e = (d.ownerDocument && d.ownerDocument.defaultView || window).document.querySelector ? .("script[nonce]")) ? e.nonce || e.getAttribute("nonce") || "" : "") && d.setAttribute("nonce", e)
            }(c = c.getElementsByTagName("script")[0]) && c.parentNode && c.parentNode.insertBefore(d, c)
        }).promise
    };

    function ic(a) {
        a = a === null ? "null" : a === void 0 ? "undefined" : a;
        if (Va === void 0) {
            var b = null;
            var c = m.trustedTypes;
            if (c && c.createPolicy) {
                try {
                    b = c.createPolicy("goog#html", {
                        createHTML: aa,
                        createScript: aa,
                        createScriptURL: aa
                    })
                } catch (d) {
                    m.console && m.console.error(d.message)
                }
                Va = b
            } else Va = b
        }
        a = (b = Va) ? b.createScriptURL(a) : a;
        return new Wa(a, Xa)
    };

    function jc(a) {
        dc([a]);
        new bc(a)
    }

    function kc(a) {
        a.g.u ? a.g.u.expandAttributionCard() : (Lb(U, 373, () => {
            Xb(a.h);
            Zb(a.h)
        }), hc(window, ic(`https://${"pagead2.googlesyndication.com"}${"/pagead/js/"+(I(a.g.g,33)??"")+"/abg_survey.js"}`)).then(b => {
            b.createAttributionCard(a.g);
            a.g.u = b;
            b.expandAttributionCard()
        }), jb())
    }
    var cc = class {
        constructor(a) {
            this.g = a;
            this.h = new $b(this.g, W(359, () => kc(this)))
        }
    };
    gb = 60;
    const lc = ib(60, document.currentScript);
    if (lc == null) throw Error("JSC not found 60");
    const mc = {},
        nc = lc.attributes;
    for (let a = nc.length - 1; a >= 0; a--) {
        const b = nc[a].name;
        b.indexOf("data-jcp-") === 0 && (mc[b.substring(9)] = nc[a].value)
    }
    if (mc["attribution-data"]) jc(JSON.parse(mc["attribution-data"]));
    else {
        var X = ["buildAttribution"],
            Y = m;
        X[0] in Y || typeof Y.execScript == "undefined" || Y.execScript("var " + X[0]);
        for (var Z; X.length && (Z = X.shift());) X.length || jc === void 0 ? Y[Z] && Y[Z] !== Object.prototype[Z] ? Y = Y[Z] : Y = Y[Z] = {} : Y[Z] = jc
    };
}).call(this);