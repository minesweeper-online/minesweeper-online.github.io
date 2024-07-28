(function() {
    'use strict';

    function aa(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    var r = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
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

    function t(a, b) {
        if (b) a: {
            var c = ca;a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                if (!(e in c)) break a;
                c = c[e]
            }
            a = a[a.length - 1];d = c[a];b = b(d);b != d && b != null && r(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    }
    t("Symbol", function(a) {
        function b(f) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c(d + (f || "") + "_" + e++, f)
        }

        function c(f, h) {
            this.g = f;
            r(this, "description", {
                configurable: !0,
                writable: !0,
                value: h
            })
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.g
        };
        var d = "jscomp_symbol_" + (Math.random() * 1E9 >>> 0) + "_",
            e = 0;
        return b
    });
    t("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = ca[b[c]];
            typeof d === "function" && typeof d.prototype[a] != "function" && r(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return da(aa(this))
                }
            })
        }
        return a
    });

    function da(a) {
        a = {
            next: a
        };
        a[Symbol.iterator] = function() {
            return this
        };
        return a
    }

    function v(a) {
        var b = typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
        if (b) return b.call(a);
        if (typeof a.length == "number") return {
            next: aa(a)
        };
        throw Error(String(a) + " is not an iterable or ArrayLike");
    }

    function ha(a) {
        for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
        return c
    }
    var ia = typeof Object.create == "function" ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        ja;
    if (typeof Object.setPrototypeOf == "function") ja = Object.setPrototypeOf;
    else {
        var ka;
        a: {
            var la = {
                    a: !0
                },
                ma = {};
            try {
                ma.__proto__ = la;
                ka = ma.a;
                break a
            } catch (a) {}
            ka = !1
        }
        ja = ka ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var na = ja;

    function oa(a, b) {
        a.prototype = ia(b.prototype);
        a.prototype.constructor = a;
        if (na) na(a, b);
        else
            for (var c in b)
                if (c != "prototype")
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.D = b.prototype
    }

    function w(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    t("WeakMap", function(a) {
        function b(k) {
            this.g = (g += Math.random() + 1).toString();
            if (k) {
                k = v(k);
                for (var l; !(l = k.next()).done;) l = l.value, this.set(l[0], l[1])
            }
        }

        function c() {}

        function d(k) {
            var l = typeof k;
            return l === "object" && k !== null || l === "function"
        }

        function e(k) {
            if (!w(k, h)) {
                var l = new c;
                r(k, h, {
                    value: l
                })
            }
        }

        function f(k) {
            var l = Object[k];
            l && (Object[k] = function(m) {
                if (m instanceof c) return m;
                Object.isExtensible(m) && e(m);
                return l(m)
            })
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var k = Object.seal({}),
                        l = Object.seal({}),
                        m = new a([
                            [k, 2],
                            [l, 3]
                        ]);
                    if (m.get(k) != 2 || m.get(l) != 3) return !1;
                    m.delete(k);
                    m.set(l, 4);
                    return !m.has(k) && m.get(l) == 4
                } catch (n) {
                    return !1
                }
            }()) return a;
        var h = "$jscomp_hidden_" + Math.random();
        f("freeze");
        f("preventExtensions");
        f("seal");
        var g = 0;
        b.prototype.set = function(k, l) {
            if (!d(k)) throw Error("Invalid WeakMap key");
            e(k);
            if (!w(k, h)) throw Error("WeakMap key fail: " + k);
            k[h][this.g] = l;
            return this
        };
        b.prototype.get = function(k) {
            return d(k) && w(k, h) ? k[h][this.g] : void 0
        };
        b.prototype.has = function(k) {
            return d(k) && w(k,
                h) && w(k[h], this.g)
        };
        b.prototype.delete = function(k) {
            return d(k) && w(k, h) && w(k[h], this.g) ? delete k[h][this.g] : !1
        };
        return b
    });
    t("Map", function(a) {
        function b() {
            var g = {};
            return g.l = g.next = g.head = g
        }

        function c(g, k) {
            var l = g[1];
            return da(function() {
                if (l) {
                    for (; l.head != g[1];) l = l.l;
                    for (; l.next != l.head;) return l = l.next, {
                        done: !1,
                        value: k(l)
                    };
                    l = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }

        function d(g, k) {
            var l = k && typeof k;
            l == "object" || l == "function" ? f.has(k) ? l = f.get(k) : (l = "" + ++h, f.set(k, l)) : l = "p_" + k;
            var m = g[0][l];
            if (m && w(g[0], l))
                for (g = 0; g < m.length; g++) {
                    var n = m[g];
                    if (k !== k && n.key !== n.key || k === n.key) return {
                        id: l,
                        list: m,
                        index: g,
                        i: n
                    }
                }
            return {
                id: l,
                list: m,
                index: -1,
                i: void 0
            }
        }

        function e(g) {
            this[0] = {};
            this[1] = b();
            this.size = 0;
            if (g) {
                g = v(g);
                for (var k; !(k = g.next()).done;) k = k.value, this.set(k[0], k[1])
            }
        }
        if (function() {
                if (!a || typeof a != "function" || !a.prototype.entries || typeof Object.seal != "function") return !1;
                try {
                    var g = Object.seal({
                            x: 4
                        }),
                        k = new a(v([
                            [g, "s"]
                        ]));
                    if (k.get(g) != "s" || k.size != 1 || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || k.size != 2) return !1;
                    var l = k.entries(),
                        m = l.next();
                    if (m.done || m.value[0] != g || m.value[1] != "s") return !1;
                    m = l.next();
                    return m.done || m.value[0].x !=
                        4 || m.value[1] != "t" || !l.next().done ? !1 : !0
                } catch (n) {
                    return !1
                }
            }()) return a;
        var f = new WeakMap;
        e.prototype.set = function(g, k) {
            g = g === 0 ? 0 : g;
            var l = d(this, g);
            l.list || (l.list = this[0][l.id] = []);
            l.i ? l.i.value = k : (l.i = {
                next: this[1],
                l: this[1].l,
                head: this[1],
                key: g,
                value: k
            }, l.list.push(l.i), this[1].l.next = l.i, this[1].l = l.i, this.size++);
            return this
        };
        e.prototype.delete = function(g) {
            g = d(this, g);
            return g.i && g.list ? (g.list.splice(g.index, 1), g.list.length || delete this[0][g.id], g.i.l.next = g.i.next, g.i.next.l = g.i.l, g.i.head =
                null, this.size--, !0) : !1
        };
        e.prototype.clear = function() {
            this[0] = {};
            this[1] = this[1].l = b();
            this.size = 0
        };
        e.prototype.has = function(g) {
            return !!d(this, g).i
        };
        e.prototype.get = function(g) {
            return (g = d(this, g).i) && g.value
        };
        e.prototype.entries = function() {
            return c(this, function(g) {
                return [g.key, g.value]
            })
        };
        e.prototype.keys = function() {
            return c(this, function(g) {
                return g.key
            })
        };
        e.prototype.values = function() {
            return c(this, function(g) {
                return g.value
            })
        };
        e.prototype.forEach = function(g, k) {
            for (var l = this.entries(), m; !(m = l.next()).done;) m =
                m.value, g.call(k, m[1], m[0], this)
        };
        e.prototype[Symbol.iterator] = e.prototype.entries;
        var h = 0;
        return e
    });
    t("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return typeof b !== "number" ? !1 : !isNaN(b) && b !== Infinity && b !== -Infinity
        }
    });
    t("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? b !== 0 || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    t("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (c < 0 && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || Object.is(f, b)) return !0
            }
            return !1
        }
    });
    t("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            if (this == null) throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");
            if (b instanceof RegExp) throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
            return this.indexOf(b, c || 0) !== -1
        }
    });
    t("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return typeof b === "number" && isNaN(b)
        }
    });
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var x = this || self;

    function y(a, b) {
        a: {
            var c = ["CLOSURE_FLAGS"];
            for (var d = x, e = 0; e < c.length; e++)
                if (d = d[c[e]], d == null) {
                    c = null;
                    break a
                }
            c = d
        }
        a = c && c[a];
        return a != null ? a : b
    };
    var pa = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function(a, b) {
        if (typeof a === "string") return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    };

    function qa(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };
    var ra = y(1, !1),
        sa = y(610401301, !1),
        ta = y(188588736, !0),
        ua = y(645172343, ra),
        va = y(653718497, ra);
    var z, wa = x.navigator;
    z = wa ? wa.userAgentData || null : null;

    function xa(a) {
        return sa ? z ? z.brands.some(function(b) {
            return (b = b.brand) && b.indexOf(a) != -1
        }) : !1 : !1
    }

    function A(a) {
        var b;
        a: {
            if (b = x.navigator)
                if (b = b.userAgent) break a;b = ""
        }
        return b.indexOf(a) != -1
    };

    function B() {
        return sa ? !!z && z.brands.length > 0 : !1
    }

    function ya() {
        return B() ? xa("Chromium") : (A("Chrome") || A("CriOS")) && !(B() ? 0 : A("Edge")) || A("Silk")
    };
    var za = B() ? !1 : A("Trident") || A("MSIE");

    function Aa(a) {
        a = a === void 0 ? document : a;
        return a.createElement("img")
    };

    function Ea(a, b, c) {
        var d = !1;
        d = d === void 0 ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = Aa(a.document);
        if (c) {
            var f = function() {
                if (c) {
                    var h = a.google_image_requests,
                        g = pa(h, e);
                    g >= 0 && Array.prototype.splice.call(h, g, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, !1);
                e.removeEventListener && e.removeEventListener("error", f, !1)
            };
            e.addEventListener && e.addEventListener("load", f, !1);
            e.addEventListener && e.addEventListener("error", f, !1)
        }
        d && (e.attributionSrc = "");
        e.src = b;
        a.google_image_requests.push(e)
    };

    function Fa(a) {
        x.setTimeout(function() {
            throw a;
        }, 0)
    };
    !A("Android") || ya();
    ya();
    A("Safari") && (ya() || (B() ? 0 : A("Coast")) || (B() ? 0 : A("Opera")) || (B() ? 0 : A("Edge")) || (B() ? xa("Microsoft Edge") : A("Edg/")) || B() && xa("Opera"));
    var Ga = {},
        C = null;

    function Ha(a) {
        var b;
        b === void 0 && (b = 0);
        if (!C) {
            C = {};
            for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; e < 5; e++) {
                var f = c.concat(d[e].split(""));
                Ga[e] = f;
                for (var h = 0; h < f.length; h++) {
                    var g = f[h];
                    C[g] === void 0 && (C[g] = h)
                }
            }
        }
        b = Ga[b];
        c = Array(Math.floor(a.length / 3));
        d = b[64] || "";
        for (e = f = 0; f < a.length - 2; f += 3) {
            var k = a[f],
                l = a[f + 1];
            g = a[f + 2];
            h = b[k >> 2];
            k = b[(k & 3) << 4 | l >> 4];
            l = b[(l & 15) << 2 | g >> 6];
            g = b[g & 63];
            c[e++] = h + k + l + g
        }
        h = 0;
        g = d;
        switch (a.length - f) {
            case 2:
                h =
                    a[f + 1], g = b[(h & 15) << 2] || d;
            case 1:
                a = a[f], c[e] = b[a >> 2] + b[(a & 3) << 4 | h >> 4] + g + d
        }
        return c.join("")
    };
    var Ia, Ja = typeof String.prototype.A === "function",
        Ka = typeof TextEncoder !== "undefined";
    var La = typeof Uint8Array !== "undefined",
        Ma = !za && typeof btoa === "function";
    var Na = 0,
        Oa = 0,
        Pa;

    function Qa() {
        this.g = []
    }
    Qa.prototype.length = function() {
        return this.g.length
    };
    Qa.prototype.end = function() {
        var a = this.g;
        this.g = [];
        return a
    };

    function D(a, b) {
        for (; b > 127;) a.g.push(b & 127 | 128), b >>>= 7;
        a.g.push(b)
    }

    function Ra(a, b) {
        if (b >= 0) D(a, b);
        else {
            for (var c = 0; c < 9; c++) a.g.push(b & 127 | 128), b >>= 7;
            a.g.push(1)
        }
    }

    function Sa(a, b) {
        a.g.push(b >>> 0 & 255);
        a.g.push(b >>> 8 & 255);
        a.g.push(b >>> 16 & 255);
        a.g.push(b >>> 24 & 255)
    };

    function Ta() {
        this.m = [];
        this.j = 0;
        this.g = new Qa
    }

    function E(a, b) {
        b.length !== 0 && (a.m.push(b), a.j += b.length)
    };

    function F(a, b) {
        this.g = a;
        this.u = b
    };

    function G(a) {
        return Array.prototype.slice.call(a)
    };
    var H = typeof Symbol === "function" && typeof Symbol() === "symbol";

    function Ua(a) {
        return typeof Symbol === "function" && typeof Symbol() === "symbol" ? Symbol() : a
    }
    var I = Ua(),
        Va = Ua("2ex"),
        J = Ua("1oa");
    var Wa = H ? function(a, b) {
            a[I] |= b
        } : function(a, b) {
            a.g !== void 0 ? a.g |= b : Object.defineProperties(a, {
                g: {
                    value: b,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                }
            })
        },
        Xa = H ? function(a, b) {
            a[I] &= ~b
        } : function(a, b) {
            a.g !== void 0 && (a.g &= ~b)
        },
        K = H ? function(a) {
            return a[I] | 0
        } : function(a) {
            return a.g | 0
        },
        L = H ? function(a) {
            return a[I]
        } : function(a) {
            return a.g
        },
        M = H ? function(a, b) {
            a[I] = b
        } : function(a, b) {
            a.g !== void 0 ? a.g = b : Object.defineProperties(a, {
                g: {
                    value: b,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                }
            })
        };

    function Ya(a, b) {
        M(b, (a | 0) & -14591)
    }

    function Za(a, b) {
        M(b, (a | 34) & -14557)
    };
    var N = {},
        $a = {};

    function ab(a) {
        return !(!a || typeof a !== "object" || a.g !== $a)
    }

    function bb(a) {
        return a !== null && typeof a === "object" && !Array.isArray(a) && a.constructor === Object
    }

    function O(a, b, c) {
        if (!Array.isArray(a) || a.length) return !1;
        var d = K(a);
        if (d & 1) return !0;
        if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
        M(a, d | 1);
        return !0
    }
    var cb, db = [];
    M(db, 55);
    cb = Object.freeze(db);

    function P(a) {
        if (a & 2) throw Error();
    }
    var eb = Object.freeze({});
    Object.freeze({});
    var fb = Object.freeze({});
    var gb;

    function hb() {
        var a = Error();
        qa(a, "incident");
        Fa(a)
    }

    function ib(a) {
        a = Error(a);
        qa(a, "warning");
        return a
    };

    function jb(a) {
        if (!Number.isFinite(a)) throw ib("enum");
        return a | 0
    }

    function kb(a) {
        if (typeof a !== "number") throw ib("int32");
        if (!Number.isFinite(a)) throw ib("int32");
        return a | 0
    }

    function lb(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return Number.isFinite(a) ? a | 0 : void 0
    }

    function mb(a) {
        if (a != null && typeof a !== "string") throw Error();
        return a
    };
    var nb, ob, pb;

    function qb(a) {
        switch (typeof a) {
            case "boolean":
                return ob || (ob = [0, void 0, !0]);
            case "number":
                return a > 0 ? void 0 : a === 0 ? pb || (pb = [0, void 0]) : [-a, void 0];
            case "string":
                return [0, a];
            case "object":
                return a
        }
    }

    function Q(a, b, c) {
        a == null && (a = nb);
        nb = void 0;
        if (a == null) {
            var d = 96;
            c ? (a = [c], d |= 512) : a = [];
            b && (d = d & -16760833 | (b & 1023) << 14)
        } else {
            if (!Array.isArray(a)) throw Error("narr");
            d = K(a);
            if (d & 2048) throw Error("farr");
            if (d & 64) return a;
            d |= 64;
            if (c && (d |= 512, c !== a[0])) throw Error("mid");
            a: {
                c = a;
                var e = c.length;
                if (e) {
                    var f = e - 1;
                    if (bb(c[f])) {
                        d |= 256;
                        b = f - (+!!(d & 512) - 1);
                        if (b >= 1024) throw Error("pvtlmt");
                        d = d & -16760833 | (b & 1023) << 14;
                        break a
                    }
                }
                if (b) {
                    b = Math.max(b, e - (+!!(d & 512) - 1));
                    if (b > 1024) throw Error("spvt");
                    d = d & -16760833 | (b & 1023) <<
                        14
                }
            }
        }
        M(a, d);
        return a
    };

    function rb(a) {
        if (typeof Proxy !== "function") return a;
        var b = sb(a);
        if (b) return b;
        b = new Proxy(a, {
            set: function(c, d, e) {
                tb();
                c[d] = e;
                return !0
            }
        });
        ub(a, b);
        return b
    }

    function tb() {
        hb()
    }
    var xb = void 0,
        yb = void 0;

    function sb(a) {
        var b;
        return (b = xb) == null ? void 0 : b.get(a)
    }

    function ub(a, b) {
        (xb || (xb = new WeakMap)).set(a, b);
        (yb || (yb = new WeakMap)).set(b, a)
    };

    function zb(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (O(a, void 0, 0)) return
                    } else if (La && a != null && a instanceof Uint8Array) {
                    if (Ma) {
                        for (var b = "", c = 0, d = a.length - 10240; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
                        b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
                        a = btoa(b)
                    } else a = Ha(a);
                    return a
                }
        }
        return a
    };

    function Ab(a, b, c) {
        a = G(a);
        var d = a.length,
            e = b & 256 ? a[d - 1] : void 0;
        d += e ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
        if (e) {
            b = a[b] = {};
            for (var f in e) b[f] = c(e[f])
        }
        return a
    }

    function Bb(a, b, c, d, e) {
        if (a != null) {
            if (Array.isArray(a)) a = O(a, void 0, 0) ? void 0 : e && K(a) & 2 ? a : Cb(a, b, c, d !== void 0, e);
            else if (bb(a)) {
                var f = {},
                    h;
                for (h in a) f[h] = Bb(a[h], b, c, d, e);
                a = f
            } else a = b(a, d);
            return a
        }
    }

    function Cb(a, b, c, d, e) {
        var f = d || c ? K(a) : 0;
        d = d ? !!(f & 32) : void 0;
        a = G(a);
        for (var h = 0; h < a.length; h++) a[h] = Bb(a[h], b, c, d, e);
        c && c(f, a);
        return a
    }

    function Db(a) {
        return a.o === N ? a.toJSON() : zb(a)
    };

    function Eb(a, b, c) {
        c = c === void 0 ? Za : c;
        if (a != null) {
            if (La && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = K(a);
                if (d & 2) return a;
                b && (b = d === 0 || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (M(a, (d | 34) & -12293), a) : Cb(a, Eb, d & 4 ? Za : c, !0, !0)
            }
            a.o === N && (c = a.h, d = L(c), a = d & 2 ? a : Fb(a, c, d, !0));
            return a
        }
    }

    function Fb(a, b, c, d) {
        a = a.constructor;
        nb = b = Gb(b, c, d);
        b = new a(b);
        nb = void 0;
        return b
    }

    function Gb(a, b, c) {
        var d = c || b & 2 ? Za : Ya,
            e = !!(b & 32);
        a = Ab(a, b, function(f) {
            return Eb(f, e, d)
        });
        Wa(a, 32 | (c ? 2 : 0));
        return a
    };

    function Hb(a, b, c, d) {
        b = d + (+!!(b & 512) - 1);
        if (!(b < 0 || b >= a.length || b >= c)) return a[b]
    }

    function Ib(a, b, c, d) {
        if (c === -1) return null;
        var e = b >> 14 & 1023 || 536870912;
        if (c >= e) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var f = a.length;
            if (d && b & 256 && (d = a[f - 1][c], d != null)) {
                if (Hb(a, b, e, c) && Va != null) {
                    var h;
                    a = (h = gb) != null ? h : gb = {};
                    h = a[Va] || 0;
                    h >= 4 || (a[Va] = h + 1, hb())
                }
                return d
            }
            return Hb(a, b, e, c)
        }
    }

    function Jb(a, b, c) {
        a = a.h;
        var d = L(a);
        P(d);
        R(a, d, b, c)
    }

    function R(a, b, c, d, e) {
        var f = b >> 14 & 1023 || 536870912;
        if (c >= f || e && !ua) {
            var h = b;
            if (b & 256) e = a[a.length - 1];
            else {
                if (d == null) return h;
                e = a[f + (+!!(b & 512) - 1)] = {};
                h |= 256
            }
            e[c] = d;
            c < f && (a[c + (+!!(b & 512) - 1)] = void 0);
            h !== b && M(a, h);
            return h
        }
        a[c + (+!!(b & 512) - 1)] = d;
        b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
        return b
    }

    function T(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    }

    function U(a, b, c, d) {
        a = a.h;
        var e = L(a);
        P(e);
        if (d == null) {
            var f = Kb(a);
            if (Lb(f, a, e, c) === b) f.set(c, 0);
            else return
        } else {
            f = Kb(a);
            var h = Lb(f, a, e, c);
            h !== b && (h && (e = R(a, e, h)), f.set(c, b))
        }
        R(a, e, b, d)
    }

    function Kb(a) {
        if (H) {
            var b;
            return (b = a[J]) != null ? b : a[J] = new Map
        }
        if (J in a) return a[J];
        b = new Map;
        Object.defineProperty(a, J, {
            value: b
        });
        return b
    }

    function Lb(a, b, c, d) {
        var e = a.get(d);
        if (e != null) return e;
        for (var f = e = 0; f < d.length; f++) {
            var h = d[f];
            Ib(b, c, h) != null && (e !== 0 && (c = R(b, c, e)), e = h)
        }
        a.set(d, e);
        return e
    }

    function Mb(a, b, c, d, e, f, h, g) {
        var k = !!(2 & b);
        e = k ? 1 : e;
        h = !!h;
        g && (g = !k);
        k = Ib(a, b, d, f);
        k = Array.isArray(k) ? k : cb;
        var l = K(k),
            m = !!(4 & l);
        if (!m) {
            var n = l;
            n === 0 && (n = Nb(n, b));
            l = k;
            n |= 1;
            var p = b,
                q = !!(2 & n);
            q && (p |= 2);
            for (var Ba = !q, Ca = !0, ea = 0, Da = 0; ea < l.length; ea++) {
                var u = l[ea];
                var fa = c;
                if (u == null || typeof u !== "object" || u.o !== N)
                    if (Array.isArray(u)) {
                        var vb = K(u),
                            S = vb;
                        S === 0 && (S |= p & 32);
                        S |= p & 2;
                        S !== vb && M(u, S);
                        u = new fa(u)
                    } else u = void 0;
                u instanceof c && (q || (fa = !!(K(u.h) & 2), Ba && (Ba = !fa), Ca && (Ca = fa)), l[Da++] = u)
            }
            Da < ea && (l.length =
                Da);
            n |= 4;
            n = Ca ? n | 16 : n & -17;
            n = Ba ? n | 8 : n & -9;
            M(l, n);
            q && Object.freeze(l);
            l = n
        }
        if (g && !(8 & l || !k.length && (e === 1 || e === 4 && 32 & l))) {
            T(l) && (k = G(k), l = Nb(l, b), b = R(a, b, d, k, f));
            c = k;
            g = l;
            for (l = 0; l < c.length; l++) n = c[l], p = n.h, q = L(p), p = q & 2 ? Fb(n, p, q, !1) : n, n !== p && (c[l] = p);
            g |= 8;
            g = c.length ? g & -17 : g | 16;
            M(c, g);
            l = g
        }
        var wb;
        e === 1 || e === 4 && 32 & l ? T(l) || (b = l, h = !!(32 & l), l |= !k.length || 16 & l && (!m || h) ? 2 : 2048, l !== b && M(k, l), Object.freeze(k)) : (m = e !== 5 ? !1 : !!(32 & l) || T(l) || !!sb(k), (e === 2 || m) && T(l) && (k = G(k), l = Nb(l, b), l = Ob(l, b, h), M(k, l), b = R(a, b, d, k,
            f)), T(l) || (a = l, l = Ob(l, b, h), l !== a && M(k, l)), m && (wb = rb(k)));
        return wb || k
    }

    function Pb(a, b) {
        a = a.h;
        var c = L(a);
        return Mb(a, c, Qb, b, void 0 === eb ? 2 : va ? 5 : 2, void 0, !1, !(2 & c))
    }

    function Rb(a, b, c) {
        var d = a.h,
            e = L(d);
        P(e);
        if (c == null) return R(d, e, b), a;
        var f = c,
            h;
        c = ((h = yb) == null ? void 0 : h.get(f)) || f;
        h = f = K(c);
        var g = !!(2 & f) || !!(2048 & f),
            k = g || Object.isFrozen(c),
            l;
        if (l = !k)(l = void 0 === fb) || (l = !1);
        for (var m = !0, n = !0, p = 0; p < c.length; p++) {
            var q = c[p];
            g || (q = !!(K(q.h) & 2), m && (m = !q), n && (n = q))
        }
        g || (f |= 5, f = m ? f | 8 : f & -9, f = n ? f | 16 : f & -17);
        if (l || k && f !== h) c = G(c), h = 0, f = Nb(f, e), f = Ob(f, e, !0);
        f !== h && M(c, f);
        R(d, e, b, c);
        return a
    }

    function Nb(a, b) {
        a = (2 & b ? a | 2 : a & -3) | 32;
        return a &= -2049
    }

    function Ob(a, b, c) {
        32 & b && c || (a &= -33);
        return a
    };
    var Sb;

    function V(a, b, c) {
        this.h = Q(a, b, c)
    }
    V.prototype.toJSON = function() {
        return Tb(this)
    };
    V.prototype.o = N;
    V.prototype.toString = function() {
        try {
            return Sb = !0, Tb(this).toString()
        } finally {
            Sb = !1
        }
    };

    function Tb(a) {
        var b = Sb ? a.h : Cb(a.h, Db, void 0, void 0, !1);
        var c = !Sb;
        var d = ta ? void 0 : a.constructor.s;
        var e = L(c ? a.h : b);
        if (a = b.length) {
            var f = b[a - 1],
                h = bb(f);
            h ? a-- : f = void 0;
            e = +!!(e & 512) - 1;
            var g = b;
            if (h) {
                b: {
                    var k = f;
                    var l = {};h = !1;
                    if (k)
                        for (var m in k)
                            if (isNaN(+m)) l[m] = k[m];
                            else {
                                var n = k[m];
                                Array.isArray(n) && (O(n, d, +m) || ab(n) && n.size === 0) && (n = null);
                                n == null && (h = !0);
                                n != null && (l[m] = n)
                            }
                    if (h) {
                        for (var p in l) break b;
                        l = null
                    } else l = k
                }
                k = l == null ? f != null : l !== f
            }
            for (var q; a > 0; a--) {
                p = a - 1;
                m = g[p];
                p -= e;
                if (!(m == null || O(m, d, p) ||
                        ab(m) && m.size === 0)) break;
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
    var Ub = Symbol();

    function Vb(a, b, c) {
        a[b] = c
    }
    var Wb = Symbol();

    function Xb(a) {
        var b = a[Wb];
        if (!b) {
            var c = Yb(a);
            b = function(d, e) {
                return Zb(d, e, c)
            };
            a[Wb] = b
        }
        return b
    }
    var $b = Symbol();

    function ac(a) {
        return a.g
    }

    function bc(a, b) {
        var c, d, e = a.g;
        return function(f, h, g) {
            return e(f, h, g, d || (d = Yb(b).g), c || (c = Xb(b)))
        }
    }

    function Yb(a) {
        var b = a[$b];
        if (b) return b;
        b = a[$b] = {};
        var c = ac,
            d = bc;
        var e = e === void 0 ? Vb : e;
        b.g = qb(a[0]);
        var f = 0,
            h = a[++f];
        h && h.constructor === Object && (b.v = h, h = a[++f], typeof h === "function" && (b.m = h, b.j = a[++f], h = a[++f]));
        for (var g = {}; Array.isArray(h) && typeof h[0] === "number" && h[0] > 0;) {
            for (var k = 0; k < h.length; k++) g[h[k]] = h;
            h = a[++f]
        }
        for (k = 1; h !== void 0;) {
            typeof h === "number" && (k += h, h = a[++f]);
            var l = void 0;
            if (h instanceof F) var m = h;
            else m = cc, f--;
            if (m.u) {
                h = a[++f];
                l = a;
                var n = f;
                typeof h == "function" && (h = h(), l[n] = h);
                l =
                    h
            }
            h = a[++f];
            n = k + 1;
            typeof h === "number" && h < 0 && (n -= h, h = a[++f]);
            for (; k < n; k++) {
                var p = g[k];
                e(b, k, l ? d(m, l, p) : c(m, p))
            }
        }
        dc in a && Ub in a && $b in a && (a.length = 0);
        return b
    }
    var dc = Symbol();

    function ec(a, b) {
        var c = a[b];
        if (c) return c;
        if (c = a.v)
            if (c = c[b]) {
                c = Array.isArray(c) ? c[0] instanceof F ? c : [fc, c] : [c, void 0];
                var d = c[0].g;
                if (c = c[1]) {
                    var e = Xb(c),
                        f = Yb(c).g;
                    c = (c = a.j) ? c(f, e) : function(h, g, k) {
                        return d(h, g, k, f, e)
                    }
                } else c = d;
                return a[b] = c
            }
    }

    function Zb(a, b, c) {
        for (var d = L(a), e = +!!(d & 512) - 1, f = a.length, h = f + (d & 256 ? -1 : 0), g = d & 512 ? 1 : 0; g < h; g++) {
            var k = a[g];
            if (k != null) {
                var l = g - e,
                    m = ec(c, l);
                m && m(b, k, l)
            }
        }
        if (d & 256) {
            a = a[f - 1];
            for (var n in a) d = +n, Number.isNaN(d) || (e = a[n], e != null && (f = ec(c, d)) && f(b, e, d))
        }
    }

    function gc(a, b, c) {
        b = b == null || typeof b === "string" ? b : void 0;
        if (b != null) {
            var d = !1;
            d = d === void 0 ? !1 : d;
            if (Ka) {
                if (d && (Ja ? !b.A() : /(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(b))) throw Error("Found an unpaired surrogate");
                b = (Ia || (Ia = new TextEncoder)).encode(b)
            } else {
                for (var e = 0, f = new Uint8Array(3 * b.length), h = 0; h < b.length; h++) {
                    var g = b.charCodeAt(h);
                    if (g < 128) f[e++] = g;
                    else {
                        if (g < 2048) f[e++] = g >> 6 | 192;
                        else {
                            if (g >= 55296 && g <= 57343) {
                                if (g <= 56319 && h < b.length) {
                                    var k = b.charCodeAt(++h);
                                    if (k >= 56320 && k <= 57343) {
                                        g = (g - 55296) * 1024 + k - 56320 + 65536;
                                        f[e++] = g >> 18 | 240;
                                        f[e++] = g >> 12 & 63 | 128;
                                        f[e++] = g >> 6 & 63 | 128;
                                        f[e++] = g & 63 | 128;
                                        continue
                                    } else h--
                                }
                                if (d) throw Error("Found an unpaired surrogate");
                                g = 65533
                            }
                            f[e++] = g >> 12 | 224;
                            f[e++] = g >> 6 & 63 | 128
                        }
                        f[e++] = g & 63 | 128
                    }
                }
                b = e === f.length ? f : f.subarray(0, e)
            }
            D(a.g, c * 8 + 2);
            D(a.g, b.length);
            E(a, a.g.end());
            E(a, b)
        }
    }

    function hc(a, b, c, d, e) {
        b = b instanceof V ? b.h : Array.isArray(b) ? Q(b, d[0], d[1]) : void 0;
        if (b != null) {
            D(a.g, c * 8 + 2);
            c = a.g.end();
            E(a, c);
            c.push(a.j);
            e(b, a);
            e = c.pop();
            for (e = a.j + a.g.length() - e; e > 127;) c.push(e & 127 | 128), e >>>= 7, a.j++;
            c.push(e);
            a.j++
        }
    }
    var ic = new F(function(a, b, c) {
            b = b == null || typeof b === "number" ? b : b === "NaN" || b === "Infinity" || b === "-Infinity" ? Number(b) : void 0;
            b != null && (D(a.g, c * 8 + 1), a = a.g, c = Pa || (Pa = new DataView(new ArrayBuffer(8))), c.setFloat64(0, +b, !0), Na = c.getUint32(0, !0), Oa = c.getUint32(4, !0), Sa(a, Na), Sa(a, Oa))
        }, !1),
        jc = new F(function(a, b, c) {
            b = lb(b);
            b != null && b != null && (D(a.g, c * 8), Ra(a.g, b))
        }, !1),
        kc = new F(gc, !1),
        lc = new F(gc, !1),
        fc = new F(hc, !0),
        cc = new F(hc, !0),
        mc;
    mc = new F(function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) hc(a, b[f], c, d, e)
    }, !0);
    var nc = new F(function(a, b, c) {
        b = lb(b);
        b != null && (b = parseInt(b, 10), D(a.g, c * 8), Ra(a.g, b))
    }, !1);

    function Qb(a) {
        this.h = Q(a)
    }
    oa(Qb, V);
    var oc = [1, 2, 3],
        pc = [4, 5],
        qc = [0, oc, pc, nc, -1, lc, ic, lc, jc];

    function rc(a) {
        this.h = Q(a)
    }
    oa(rc, V);
    rc.s = [1];
    rc.prototype.g = function(a) {
        return function() {
            var b = new Ta;
            Zb(this.h, b, Yb(a));
            E(b, b.g.end());
            for (var c = new Uint8Array(b.j), d = b.m, e = d.length, f = 0, h = 0; h < e; h++) {
                var g = d[h];
                c.set(g, f);
                f += g.length
            }
            b.m = [c];
            return c
        }
    }([0, mc, qc, kc, 1, kc, jc]);

    function sc(a) {
        this.h = Q(a)
    }
    oa(sc, V);
    sc.prototype.setData = function(a, b) {
        var c = Qb,
            d = this.h,
            e = L(d);
        P(e);
        d = Mb(d, e, c, 2, 2, !1, !0);
        b = b != null ? b : new c;
        if (typeof a !== "number" || a < 0 || a > d.length) throw Error();
        a != void 0 ? d.splice(a, 1, b) : d.push(b);
        K(b.h) & 2 ? Xa(d, 8) : Xa(d, 16);
        return this
    };
    sc.s = [1, 2];

    function tc() {
        this.data = [];
        this.j = [];
        this.g = []
    }
    tc.prototype.setData = function(a, b, c) {
        this.g.includes(c) && this.data.push({
            key: a,
            value: b,
            channel: c
        })
    };

    function uc(a) {
        return a.data.some(function(b) {
            return b.channel === 1
        })
    }
    tc.prototype.setAttribute = function(a, b) {
        this.j.push({
            key: a,
            value: b
        })
    };

    function vc(a, b, c, d) {
        var e = new Qb;
        typeof a === "string" ? U(e, 3, oc, mb(a)) : d ? U(e, 1, oc, a == null ? a : jb(a)) : U(e, 2, oc, a == null ? a : jb(a));
        if (typeof b === "number") {
            if (b == null) a = b;
            else {
                if (typeof b !== "number") throw Error("Value of float/double field must be a number, found " + typeof b + ": " + b);
                a = b
            }
            U(e, 4, pc, a)
        } else U(e, 5, pc, mb(b));
        c && Jb(e, 6, c == null ? c : kb(c));
        return e
    };

    function W() {
        this.g = new tc;
        this.m = Date.now()
    }
    W.prototype.init = function(a, b, c, d, e, f) {
        var h = this;
        this.g.g.push.apply(this.g.g, b instanceof Array ? b : ha(v(b)));
        this.C = a;
        this.j = e;
        this.B = c;
        if (d)
            for (a = v(d), b = a.next(); !b.done; b = a.next()) c = v(b.value), b = c.next().value, c = c.next().value, this.g.setAttribute(b, c);
        if (f) {
            f = v(f);
            for (a = f.next(); !a.done; a = f.next()) c = v(a.value), a = c.next().value, b = c.next().value, c = c.next().value, this.setData(a, b, c);
            document.readyState === "complete" ? this.send() : window.addEventListener("load", function() {
                h.send()
            })
        }
    };
    W.prototype.getBaseTime = function() {
        return this.m
    };
    W.prototype.setData = function(a, b, c) {
        this.g.setData(a, b, c)
    };
    W.prototype.setAttribute = function(a, b) {
        this.g.setAttribute(a, b)
    };
    W.prototype.send = function(a) {
        var b = this,
            c = uc(this.g) ? 0 : 100;
        a = a != null ? a : c;
        a > 0 ? setTimeout(function() {
            return void wc(b)
        }, a) : wc(this)
    };

    function wc(a) {
        if (a.g.data.length > 0) {
            var b = a.C,
                c = a.j,
                d = a.B,
                e = a.g,
                f = [];
            var h = v(e.j);
            for (var g = h.next(); !g.done; g = h.next()) g = g.value, f.push(vc(g.key, g.value, void 0, !0));
            h = [];
            e = v(e.data);
            for (g = e.next(); !g.done; g = e.next()) g = g.value, h.push(vc(g.key, g.value, g.channel, !1));
            e = new sc;
            f = Rb(e, 1, f);
            h = Rb(f, 2, h);
            f = new rc;
            h = Pb(h, 1).concat(Pb(h, 2));
            f = Rb(f, 1, h);
            b && Jb(f, 2, mb(b));
            d && Jb(f, 4, mb(d));
            c && Jb(f, 5, c == null ? c : kb(c));
            b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=mys&d=" + Ha(f.g()).replace(/\//g, "_").replace(/\+/g,
                "-");
            c = window;
            var k = k === void 0 ? !1 : k;
            if (d = c.navigator) d = c.navigator.userAgent, d = /Chrome/.test(d) && !/Edge/.test(d) ? !0 : !1;
            d && c.navigator.sendBeacon ? c.navigator.sendBeacon(b) : Ea(c, b, k === void 0 ? !1 : k);
            a.g.data = []
        }
    }
    if (!window.mys || !window.mys.pingback) {
        var xc = new W,
            X = ["mys", "pingback"],
            Y = x;
        X[0] in Y || typeof Y.execScript == "undefined" || Y.execScript("var " + X[0]);
        for (var Z; X.length && (Z = X.shift());) X.length || xc === void 0 ? Y[Z] && Y[Z] !== Object.prototype[Z] ? Y = Y[Z] : Y = Y[Z] = {} : Y[Z] = xc
    };
}).call(this);