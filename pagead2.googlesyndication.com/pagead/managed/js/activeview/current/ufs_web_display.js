(function() {
    var n, aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ba = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        },
        ca = function(a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math) return c
            }
            throw Error("a");
        },
        da =
        ca(this),
        p = function(a, b) {
            if (b) a: {
                var c = da;a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    if (!(e in c)) break a;
                    c = c[e]
                }
                a = a[a.length - 1];d = c[a];b = b(d);b != d && b != null && ba(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
        };
    p("Symbol", function(a) {
        if (a) return a;
        var b = function(f, g) {
            this.qg = f;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        };
        b.prototype.toString = function() {
            return this.qg
        };
        var c = "jscomp_symbol_" + (Math.random() * 1E9 >>> 0) + "_",
            d = 0,
            e = function(f) {
                if (this instanceof e) throw new TypeError("b");
                return new b(c + (f || "") + "_" + d++, f)
            };
        return e
    });
    p("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = da[b[c]];
            typeof d === "function" && typeof d.prototype[a] != "function" && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ea(aa(this))
                }
            })
        }
        return a
    });
    p("Symbol.asyncIterator", function(a) {
        return a ? a : Symbol("Symbol.asyncIterator")
    });
    var ea = function(a) {
            a = {
                next: a
            };
            a[Symbol.iterator] = function() {
                return this
            };
            return a
        },
        fa = function(a) {
            return a.raw = a
        },
        ha = function(a, b) {
            a.raw = b;
            return a
        },
        u = function(a) {
            var b = typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
            if (b) return b.call(a);
            if (typeof a.length == "number") return {
                next: aa(a)
            };
            throw Error("c`" + String(a));
        },
        x = function(a) {
            if (!(a instanceof Array)) {
                a = u(a);
                for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
                a = c
            }
            return a
        },
        ia = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a,
                b)
        },
        ja = typeof Object.assign == "function" ? Object.assign : function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (d)
                    for (var e in d) ia(d, e) && (a[e] = d[e])
            }
            return a
        };
    p("Object.assign", function(a) {
        return a || ja
    });
    var ka = typeof Object.create == "function" ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        la;
    if (typeof Object.setPrototypeOf == "function") la = Object.setPrototypeOf;
    else {
        var ma;
        a: {
            var na = {
                    a: !0
                },
                oa = {};
            try {
                oa.__proto__ = na;
                ma = oa.a;
                break a
            } catch (a) {}
            ma = !1
        }
        la = ma ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError("d`" + a);
            return a
        } : null
    }
    var qa = la,
        y = function(a, b) {
            a.prototype = ka(b.prototype);
            a.prototype.constructor = a;
            if (qa) qa(a, b);
            else
                for (var c in b)
                    if (c != "prototype")
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.pi = b.prototype
        },
        ra = function() {
            this.fc = !1;
            this.Ya = null;
            this.ub = void 0;
            this.N = 1;
            this.Da = this.bb = 0;
            this.Jd = this.aa = null
        };
    ra.prototype.La = function() {
        if (this.fc) throw new TypeError("f");
        this.fc = !0
    };
    ra.prototype.nc = function(a) {
        this.ub = a
    };
    ra.prototype.uc = function(a) {
        this.aa = {
            ff: a,
            zf: !0
        };
        this.N = this.bb || this.Da
    };
    ra.prototype.return = function(a) {
        this.aa = {
            return: a
        };
        this.N = this.Da
    };
    var sa = function(a, b, c) {
        a.N = c;
        return {
            value: b
        }
    };
    ra.prototype.ib = function(a) {
        this.N = a
    };
    var ta = function(a, b, c, d) {
            d ? a.Jd[d] = a.aa : a.Jd = [a.aa];
            a.bb = b || 0;
            a.Da = c || 0
        },
        ua = function(a, b, c) {
            c = a.Jd.splice(c || 0)[0];
            (c = a.aa = a.aa || c) ? c.zf ? a.N = a.bb || a.Da : c.ib != void 0 && a.Da < c.ib ? (a.N = c.ib, a.aa = null) : a.N = a.Da: a.N = b
        };
    ra.prototype.forIn = function(a) {
        return new va(a)
    };
    var va = function(a) {
            this.Of = [];
            for (var b in a) this.Of.push(b);
            this.Of.reverse()
        },
        wa = function(a) {
            this.o = new ra;
            this.Xh = a
        };
    wa.prototype.nc = function(a) {
        this.o.La();
        if (this.o.Ya) return xa(this, this.o.Ya.next, a, this.o.nc);
        this.o.nc(a);
        return ya(this)
    };
    var za = function(a, b) {
        a.o.La();
        var c = a.o.Ya;
        if (c) return xa(a, "return" in c ? c["return"] : function(d) {
            return {
                value: d,
                done: !0
            }
        }, b, a.o.return);
        a.o.return(b);
        return ya(a)
    };
    wa.prototype.uc = function(a) {
        this.o.La();
        if (this.o.Ya) return xa(this, this.o.Ya["throw"], a, this.o.nc);
        this.o.uc(a);
        return ya(this)
    };
    var xa = function(a, b, c, d) {
            try {
                var e = b.call(a.o.Ya, c);
                if (!(e instanceof Object)) throw new TypeError("e`" + e);
                if (!e.done) return a.o.fc = !1, e;
                var f = e.value
            } catch (g) {
                return a.o.Ya = null, a.o.uc(g), ya(a)
            }
            a.o.Ya = null;
            d.call(a.o, f);
            return ya(a)
        },
        ya = function(a) {
            for (; a.o.N;) try {
                var b = a.Xh(a.o);
                if (b) return a.o.fc = !1, {
                    value: b.value,
                    done: !1
                }
            } catch (c) {
                a.o.ub = void 0, a.o.uc(c)
            }
            a.o.fc = !1;
            if (a.o.aa) {
                b = a.o.aa;
                a.o.aa = null;
                if (b.zf) throw b.ff;
                return {
                    value: b.return,
                    done: !0
                }
            }
            return {
                value: void 0,
                done: !0
            }
        },
        Aa = function(a) {
            this.next =
                function(b) {
                    return a.nc(b)
                };
            this.throw = function(b) {
                return a.uc(b)
            };
            this.return = function(b) {
                return za(a, b)
            };
            this[Symbol.iterator] = function() {
                return this
            }
        },
        Ba = function(a) {
            function b(d) {
                return a.next(d)
            }

            function c(d) {
                return a.throw(d)
            }
            return new Promise(function(d, e) {
                function f(g) {
                    g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
                }
                f(a.next())
            })
        },
        Ca = function(a) {
            return Ba(new Aa(new wa(a)))
        },
        Da = function(a) {
            this[Symbol.asyncIterator] = function() {
                return this
            };
            this[Symbol.iterator] = function() {
                return a
            };
            this.next = function(b) {
                return Promise.resolve(a.next(b))
            };
            this["throw"] = function(b) {
                return new Promise(function(c, d) {
                    var e = a["throw"];
                    e !== void 0 ? c(e.call(a, b)) : (c = a["return"], c !== void 0 && c.call(a), d(new TypeError("g")))
                })
            };
            a["return"] !== void 0 && (this["return"] = function(b) {
                return Promise.resolve(a["return"](b))
            })
        },
        B = function() {
            for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
            return b
        };
    p("Promise", function(a) {
        function b() {
            this.Na = null
        }

        function c(g) {
            return g instanceof e ? g : new e(function(h) {
                h(g)
            })
        }
        if (a) return a;
        b.prototype.Qe = function(g) {
            if (this.Na == null) {
                this.Na = [];
                var h = this;
                this.Re(function() {
                    h.Qg()
                })
            }
            this.Na.push(g)
        };
        var d = da.setTimeout;
        b.prototype.Re = function(g) {
            d(g, 0)
        };
        b.prototype.Qg = function() {
            for (; this.Na && this.Na.length;) {
                var g = this.Na;
                this.Na = [];
                for (var h = 0; h < g.length; ++h) {
                    var k = g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (l) {
                        this.zg(l)
                    }
                }
            }
            this.Na = null
        };
        b.prototype.zg = function(g) {
            this.Re(function() {
                throw g;
            })
        };
        var e = function(g) {
            this.Ob = 0;
            this.sc = void 0;
            this.Ib = [];
            this.Cf = !1;
            var h = this.Dd();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        };
        e.prototype.Dd = function() {
            function g(l) {
                return function(m) {
                    k || (k = !0, l.call(h, m))
                }
            }
            var h = this,
                k = !1;
            return {
                resolve: g(this.gi),
                reject: g(this.ne)
            }
        };
        e.prototype.gi = function(g) {
            if (g === this) this.ne(new TypeError("h"));
            else if (g instanceof e) this.ji(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var h = g != null;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ? this.fi(g) : this.jf(g)
            }
        };
        e.prototype.fi = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.ne(k);
                return
            }
            typeof h == "function" ? this.ki(h, g) : this.jf(g)
        };
        e.prototype.ne = function(g) {
            this.Vf(2, g)
        };
        e.prototype.jf = function(g) {
            this.Vf(1, g)
        };
        e.prototype.Vf = function(g, h) {
            if (this.Ob != 0) throw Error("i`" + g + "`" + h + "`" + this.Ob);
            this.Ob = g;
            this.sc = h;
            this.Ob === 2 && this.hi();
            this.Rg()
        };
        e.prototype.hi = function() {
            var g = this;
            d(function() {
                if (g.Jh()) {
                    var h = da.console;
                    typeof h !== "undefined" && h.error(g.sc)
                }
            }, 1)
        };
        e.prototype.Jh = function() {
            if (this.Cf) return !1;
            var g = da.CustomEvent,
                h = da.Event,
                k = da.dispatchEvent;
            if (typeof k === "undefined") return !0;
            typeof g === "function" ? g = new g("unhandledrejection", {
                cancelable: !0
            }) : typeof h === "function" ? g = new h("unhandledrejection", {
                cancelable: !0
            }) : (g = da.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
            g.promise = this;
            g.reason = this.sc;
            return k(g)
        };
        e.prototype.Rg = function() {
            if (this.Ib != null) {
                for (var g = 0; g < this.Ib.length; ++g) f.Qe(this.Ib[g]);
                this.Ib = null
            }
        };
        var f = new b;
        e.prototype.ji = function(g) {
            var h =
                this.Dd();
            g.Fc(h.resolve, h.reject)
        };
        e.prototype.ki = function(g, h) {
            var k = this.Dd();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        e.prototype.then = function(g, h) {
            function k(t, r) {
                return typeof t == "function" ? function(v) {
                    try {
                        l(t(v))
                    } catch (w) {
                        m(w)
                    }
                } : r
            }
            var l, m, q = new e(function(t, r) {
                l = t;
                m = r
            });
            this.Fc(k(g, l), k(h, m));
            return q
        };
        e.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        e.prototype.Fc = function(g, h) {
            function k() {
                switch (l.Ob) {
                    case 1:
                        g(l.sc);
                        break;
                    case 2:
                        h(l.sc);
                        break;
                    default:
                        throw Error("j`" +
                            l.Ob);
                }
            }
            var l = this;
            this.Ib == null ? f.Qe(k) : this.Ib.push(k);
            this.Cf = !0
        };
        e.resolve = c;
        e.reject = function(g) {
            return new e(function(h, k) {
                k(g)
            })
        };
        e.race = function(g) {
            return new e(function(h, k) {
                for (var l = u(g), m = l.next(); !m.done; m = l.next()) c(m.value).Fc(h, k)
            })
        };
        e.all = function(g) {
            var h = u(g),
                k = h.next();
            return k.done ? c([]) : new e(function(l, m) {
                function q(v) {
                    return function(w) {
                        t[v] = w;
                        r--;
                        r == 0 && l(t)
                    }
                }
                var t = [],
                    r = 0;
                do t.push(void 0), r++, c(k.value).Fc(q(t.length - 1), m), k = h.next(); while (!k.done)
            })
        };
        return e
    });
    p("Symbol.dispose", function(a) {
        return a ? a : Symbol("Symbol.dispose")
    });
    p("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) ia(b, d) && c.push(b[d]);
            return c
        }
    });
    var Ea = function(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[Symbol.iterator] = function() {
            return e
        };
        return e
    };
    p("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return Ea(this, function(b) {
                return b
            })
        }
    });
    p("WeakMap", function(a) {
        function b() {}

        function c(k) {
            var l = typeof k;
            return l === "object" && k !== null || l === "function"
        }

        function d(k) {
            if (!ia(k, f)) {
                var l = new b;
                ba(k, f, {
                    value: l
                })
            }
        }

        function e(k) {
            var l = Object[k];
            l && (Object[k] = function(m) {
                if (m instanceof b) return m;
                Object.isExtensible(m) && d(m);
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
                } catch (q) {
                    return !1
                }
            }()) return a;
        var f = "$jscomp_hidden_" + Math.random();
        e("freeze");
        e("preventExtensions");
        e("seal");
        var g = 0,
            h = function(k) {
                this.bc = (g += Math.random() + 1).toString();
                if (k) {
                    k = u(k);
                    for (var l; !(l = k.next()).done;) l = l.value, this.set(l[0], l[1])
                }
            };
        h.prototype.set = function(k, l) {
            if (!c(k)) throw Error("k");
            d(k);
            if (!ia(k, f)) throw Error("l`" + k);
            k[f][this.bc] = l;
            return this
        };
        h.prototype.get = function(k) {
            return c(k) && ia(k, f) ? k[f][this.bc] : void 0
        };
        h.prototype.has = function(k) {
            return c(k) && ia(k, f) && ia(k[f], this.bc)
        };
        h.prototype.delete = function(k) {
            return c(k) &&
                ia(k, f) && ia(k[f], this.bc) ? delete k[f][this.bc] : !1
        };
        return h
    });
    p("Map", function(a) {
        if (function() {
                if (!a || typeof a != "function" || !a.prototype.entries || typeof Object.seal != "function") return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(u([
                            [h, "s"]
                        ]));
                    if (k.get(h) != "s" || k.size != 1 || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || k.size != 2) return !1;
                    var l = k.entries(),
                        m = l.next();
                    if (m.done || m.value[0] != h || m.value[1] != "s") return !1;
                    m = l.next();
                    return m.done || m.value[0].x != 4 || m.value[1] != "t" || !l.next().done ? !1 : !0
                } catch (q) {
                    return !1
                }
            }()) return a;
        var b = new WeakMap,
            c = function(h) {
                this[0] = {};
                this[1] =
                    f();
                this.size = 0;
                if (h) {
                    h = u(h);
                    for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
                }
            };
        c.prototype.set = function(h, k) {
            h = h === 0 ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this[0][l.id] = []);
            l.S ? l.S.value = k : (l.S = {
                next: this[1],
                Ja: this[1].Ja,
                head: this[1],
                key: h,
                value: k
            }, l.list.push(l.S), this[1].Ja.next = l.S, this[1].Ja = l.S, this.size++);
            return this
        };
        c.prototype.delete = function(h) {
            h = d(this, h);
            return h.S && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this[0][h.id], h.S.Ja.next = h.S.next, h.S.next.Ja = h.S.Ja,
                h.S.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function() {
            this[0] = {};
            this[1] = this[1].Ja = f();
            this.size = 0
        };
        c.prototype.has = function(h) {
            return !!d(this, h).S
        };
        c.prototype.get = function(h) {
            return (h = d(this, h).S) && h.value
        };
        c.prototype.entries = function() {
            return e(this, function(h) {
                return [h.key, h.value]
            })
        };
        c.prototype.keys = function() {
            return e(this, function(h) {
                return h.key
            })
        };
        c.prototype.values = function() {
            return e(this, function(h) {
                return h.value
            })
        };
        c.prototype.forEach = function(h, k) {
            for (var l = this.entries(),
                    m; !(m = l.next()).done;) m = m.value, h.call(k, m[1], m[0], this)
        };
        c.prototype[Symbol.iterator] = c.prototype.entries;
        var d = function(h, k) {
                var l = k && typeof k;
                l == "object" || l == "function" ? b.has(k) ? l = b.get(k) : (l = "" + ++g, b.set(k, l)) : l = "p_" + k;
                var m = h[0][l];
                if (m && ia(h[0], l))
                    for (h = 0; h < m.length; h++) {
                        var q = m[h];
                        if (k !== k && q.key !== q.key || k === q.key) return {
                            id: l,
                            list: m,
                            index: h,
                            S: q
                        }
                    }
                return {
                    id: l,
                    list: m,
                    index: -1,
                    S: void 0
                }
            },
            e = function(h, k) {
                var l = h[1];
                return ea(function() {
                    if (l) {
                        for (; l.head != h[1];) l = l.Ja;
                        for (; l.next != l.head;) return l =
                            l.next, {
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
            },
            f = function() {
                var h = {};
                return h.Ja = h.next = h.head = h
            },
            g = 0;
        return c
    });
    var Fa = function(a, b, c) {
        if (a == null) throw new TypeError("m`" + c);
        if (b instanceof RegExp) throw new TypeError("n`" + c);
        return a + ""
    };
    p("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return Ea(this, function(b, c) {
                return [b, c]
            })
        }
    });
    p("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Fa(this, b, "startsWith");
            b += "";
            var e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    });
    p("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return typeof b !== "number" ? !1 : !isNaN(b) && b !== Infinity && b !== -Infinity
        }
    });
    p("String.prototype.repeat", function(a) {
        return a ? a : function(b) {
            var c = Fa(this, null, "repeat");
            if (b < 0 || b > 1342177279) throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b;)
                if (b & 1 && (d += c), b >>>= 1) c += c;
            return d
        }
    });
    p("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? b !== 0 || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    p("Array.prototype.includes", function(a) {
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
    p("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return Fa(this, b, "includes").indexOf(b, c || 0) !== -1
        }
    });
    p("Set", function(a) {
        if (function() {
                if (!a || typeof a != "function" || !a.prototype.entries || typeof Object.seal != "function") return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(u([c]));
                    if (!d.has(c) || d.size != 1 || d.add(c) != d || d.size != 1 || d.add({
                            x: 4
                        }) != d || d.size != 2) return !1;
                    var e = d.entries(),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || f.value[0].x != 4 || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        var b = function(c) {
            this.va = new Map;
            if (c) {
                c =
                    u(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.va.size
        };
        b.prototype.add = function(c) {
            c = c === 0 ? 0 : c;
            this.va.set(c, c);
            this.size = this.va.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.va.delete(c);
            this.size = this.va.size;
            return c
        };
        b.prototype.clear = function() {
            this.va.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.va.has(c)
        };
        b.prototype.entries = function() {
            return this.va.entries()
        };
        b.prototype.values = function() {
            return this.va.values()
        };
        b.prototype.keys = b.prototype.values;
        b.prototype[Symbol.iterator] = b.prototype.values;
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.va.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    });
    p("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    });
    p("Number.MAX_SAFE_INTEGER", function() {
        return 9007199254740991
    });
    p("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return Number.isFinite(b) ? b === Math.floor(b) : !1
        }
    });
    p("Number.isSafeInteger", function(a) {
        return a ? a : function(b) {
            return Number.isInteger(b) && Math.abs(b) <= Number.MAX_SAFE_INTEGER
        }
    });
    p("Math.trunc", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            if (isNaN(b) || b === Infinity || b === -Infinity || b === 0) return b;
            var c = Math.floor(Math.abs(b));
            return b < 0 ? -c : c
        }
    });
    p("Math.log2", function(a) {
        return a ? a : function(b) {
            return Math.log(b) / Math.LN2
        }
    });
    p("Array.prototype.values", function(a) {
        return a ? a : function() {
            return Ea(this, function(b, c) {
                return c
            })
        }
    });
    p("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = c != null ? c : function(h) {
                return h
            };
            var e = [],
                f = typeof Symbol != "undefined" && Symbol.iterator && b[Symbol.iterator];
            if (typeof f == "function") {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
            } else
                for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e
        }
    });
    p("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return typeof b === "number" && isNaN(b)
        }
    });
    p("Array.prototype.fill", function(a) {
        return a ? a : function(b, c, d) {
            var e = this.length || 0;
            c < 0 && (c = Math.max(0, e + c));
            if (d == null || d > e) d = e;
            d = Number(d);
            d < 0 && (d = Math.max(0, e + d));
            for (c = Number(c || 0); c < d; c++) this[c] = b;
            return this
        }
    });
    var Ga = function(a) {
        return a ? a : Array.prototype.fill
    };
    p("Int8Array.prototype.fill", Ga);
    p("Uint8Array.prototype.fill", Ga);
    p("Uint8ClampedArray.prototype.fill", Ga);
    p("Int16Array.prototype.fill", Ga);
    p("Uint16Array.prototype.fill", Ga);
    p("Int32Array.prototype.fill", Ga);
    p("Uint32Array.prototype.fill", Ga);
    p("Float32Array.prototype.fill", Ga);
    p("Float64Array.prototype.fill", Ga);
    p("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) ia(b, d) && c.push([d, b[d]]);
            return c
        }
    });
    p("String.prototype.padStart", function(a) {
        return a ? a : function(b, c) {
            var d = Fa(this, null, "padStart");
            b -= d.length;
            c = c !== void 0 ? String(c) : " ";
            return (b > 0 && c ? c.repeat(Math.ceil(b / c.length)).substring(0, b) : "") + d
        }
    });
    p("Array.prototype.flat", function(a) {
        return a ? a : function(b) {
            b = b === void 0 ? 1 : b;
            var c = [];
            Array.prototype.forEach.call(this, function(d) {
                Array.isArray(d) && b > 0 ? (d = Array.prototype.flat.call(d, b - 1), c.push.apply(c, d)) : c.push(d)
            });
            return c
        }
    });
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var Ha = this || self,
        Ia = function(a, b) {
            a: {
                var c = ["CLOSURE_FLAGS"];
                for (var d = Ha, e = 0; e < c.length; e++)
                    if (d = d[c[e]], d == null) {
                        c = null;
                        break a
                    }
                c = d
            }
            a = c && c[a];
            return a != null ? a : b
        },
        Ja = function(a) {
            var b = typeof a;
            return b != "object" ? b : a ? Array.isArray(a) ? "array" : b : "null"
        },
        Ka = function(a) {
            var b = Ja(a);
            return b == "array" || b == "object" && typeof a.length == "number"
        },
        La = function(a) {
            var b = typeof a;
            return b == "object" && a != null || b == "function"
        },
        Qa = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.pi = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.ij = function(d, e, f) {
                for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
                return b.prototype[e].apply(d, g)
            }
        },
        Ra = function(a) {
            return a
        };
    var Sa = function() {
        this.dg = 0
    };
    Sa.prototype.Pb = function(a, b) {
        var c = this;
        return function() {
            var d = B.apply(0, arguments);
            c.dg = a;
            return b.apply(null, x(d))
        }
    };
    var Ta = function() {
            var a = {};
            this.xa = (a[3] = [], a[2] = [], a[1] = [], a);
            this.ae = !1
        },
        Va = function(a, b, c) {
            var d = Ua(a, c);
            a.xa[c].push(b);
            d && a.xa[c].length === 1 && a.flush()
        },
        Ua = function(a, b) {
            return Object.keys(a.xa).map(function(c) {
                return Number(c)
            }).filter(function(c) {
                return !isNaN(c) && c > b
            }).every(function(c) {
                return a.xa[c].length === 0
            })
        };
    Ta.prototype.flush = function() {
        if (!this.ae) {
            this.ae = !0;
            try {
                for (; Object.values(this.xa).some(function(a) {
                        return a.length > 0
                    });) Wa(this, 3), Wa(this, 2), Wa(this, 1)
            } catch (a) {
                throw Object.values(this.xa).forEach(function(b) {
                    return void b.splice(0, b.length)
                }), a;
            } finally {
                this.ae = !1
            }
        }
    };
    var Wa = function(a, b) {
        for (; Ua(a, b) && a.xa[b].length > 0;) a.xa[b][0](), a.xa[b].shift()
    };
    da.Object.defineProperties(Ta.prototype, {
        Rf: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return Object.values(this.xa).some(function(a) {
                    return a.length > 0
                })
            }
        }
    });
    var Xa = function(a, b) {
        return a.toLowerCase().indexOf(b.toLowerCase()) != -1
    };

    function Ya(a, b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Ya);
        else {
            var c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        b !== void 0 && (this.cause = b)
    }
    Qa(Ya, Error);
    Ya.prototype.name = "CustomError";
    var Za;

    function $a(a, b) {
        var c = Ya.call;
        a = a.split("%s");
        for (var d = "", e = a.length - 1, f = 0; f < e; f++) d += a[f] + (f < b.length ? b[f] : "%s");
        c.call(Ya, this, d + a[e])
    }
    Qa($a, Ya);
    $a.prototype.name = "AssertionError";

    function ab(a, b, c, d) {
        var e = "Assertion failed";
        if (c) {
            e += ": " + c;
            var f = d
        } else a && (e += ": " + a, f = b);
        throw new $a("" + e, f || []);
    }
    var E = function(a, b, c) {
            a || ab("", null, b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        bb = function(a, b, c) {
            a == null && ab("Expected to exist: %s.", [a], b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        cb = function(a, b) {
            throw new $a("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
        },
        db = function(a, b, c) {
            typeof a !== "number" && ab("Expected number but got %s: %s.", [Ja(a), a], b, Array.prototype.slice.call(arguments, 2))
        },
        eb = function(a, b, c) {
            typeof a !== "string" && ab("Expected string but got %s: %s.", [Ja(a), a], b, Array.prototype.slice.call(arguments, 2))
        },
        fb = function(a, b, c) {
            typeof a !== "function" && ab("Expected function but got %s: %s.", [Ja(a), a], b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        gb = function(a, b, c) {
            La(a) || ab("Expected object but got %s: %s.", [Ja(a), a], b, Array.prototype.slice.call(arguments, 2))
        },
        ib = function(a, b, c) {
            Array.isArray(a) || ab("Expected array but got %s: %s.", [Ja(a), a], b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        kb = function(a, b, c, d) {
            a instanceof b || ab("Expected instanceof %s but got %s.", [jb(b), jb(a)], c, Array.prototype.slice.call(arguments, 3));
            return a
        };

    function jb(a) {
        return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : a === null ? "null" : typeof a
    };
    var lb;
    var pb = function(a, b) {
        if (b !== nb) throw Error("o");
        this.Nf = a
    };
    pb.prototype.toString = function() {
        return this.Nf + ""
    };
    var nb = {},
        qb = function(a) {
            if (lb === void 0) {
                var b = null;
                var c = Ha.trustedTypes;
                if (c && c.createPolicy) try {
                    b = c.createPolicy("goog#html", {
                        createHTML: Ra,
                        createScript: Ra,
                        createScriptURL: Ra
                    })
                } catch (d) {
                    Ha.console && Ha.console.error(d.message)
                }
                lb = b
            }
            a = (b = lb) ? b.createScriptURL(a) : a;
            return new pb(a, nb)
        };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var rb = fa([""]),
        sb = ha(["\x00"], ["\\0"]),
        tb = ha(["\n"], ["\\n"]),
        ub = ha(["\x00"], ["\\u0000"]),
        vb = fa([""]),
        wb = ha(["\x00"], ["\\0"]),
        xb = ha(["\n"], ["\\n"]),
        yb = ha(["\x00"], ["\\u0000"]);

    function zb(a) {
        return Object.isFrozen(a) && Object.isFrozen(a.raw)
    }

    function Ab(a) {
        return a.toString().indexOf("`") === -1
    }
    var Bb = Ab(function(a) {
            return a(rb)
        }) || Ab(function(a) {
            return a(sb)
        }) || Ab(function(a) {
            return a(tb)
        }) || Ab(function(a) {
            return a(ub)
        }),
        Cb = zb(vb) && zb(wb) && zb(xb) && zb(yb);
    var Db = {};
    var Fb = function(a) {
        if (Db !== Db) throw Error("q");
        this.Wh = a
    };
    Fb.prototype.toString = function() {
        return this.Wh
    };
    new Fb("about:blank");
    new Fb("about:invalid#zClosurez");
    var Gb = [],
        Hb = function(a) {
            console.warn("r`" + a)
        };
    Gb.indexOf(Hb) === -1 && Gb.push(Hb);
    var Ib = Array.prototype.forEach ? function(a, b) {
            E(a.length != null);
            Array.prototype.forEach.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = typeof a === "string" ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
        },
        Jb = Array.prototype.map ? function(a, b) {
            E(a.length != null);
            return Array.prototype.map.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = Array(c), e = typeof a === "string" ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
            return d
        },
        Kb = Array.prototype.some ? function(a, b) {
            E(a.length !=
                null);
            return Array.prototype.some.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = typeof a === "string" ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) return !0;
            return !1
        };

    function Lb(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function Mb(a) {
        var b = a.length;
        if (b > 0) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function Nb(a, b, c) {
        if (!Ka(a) || !Ka(b) || a.length != b.length) return !1;
        var d = a.length;
        c = c || Ob;
        for (var e = 0; e < d; e++)
            if (!c(a[e], b[e])) return !1;
        return !0
    }

    function Ob(a, b) {
        return a === b
    }

    function Pb(a, b) {
        return Lb.apply([], Jb(a, b))
    };
    var Qb = {},
        Rb = function() {
            if (Qb !== Qb) throw Error("s");
            this.Vh = ""
        };
    Rb.prototype.toString = function() {
        return this.Vh.toString()
    };
    new Rb;
    var Sb = {},
        Tb = function() {
            if (Sb !== Sb) throw Error("t");
            this.Uh = ""
        };
    Tb.prototype.toString = function() {
        return this.Uh.toString()
    };
    new Tb;
    var Wb = {},
        Xb = function() {
            var a = Ha.trustedTypes && Ha.trustedTypes.emptyHTML || "";
            if (Wb !== Wb) throw Error("u");
            this.Th = a
        };
    Xb.prototype.toString = function() {
        return this.Th.toString()
    };
    new Xb;
    var Yb = function(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };
    var Zb = function(a, b) {
        this.name = a;
        this.value = b
    };
    Zb.prototype.toString = function() {
        return this.name
    };
    var $b = new Zb("OFF", Infinity),
        ac = new Zb("WARNING", 900),
        bc = new Zb("INFO", 800),
        cc = new Zb("CONFIG", 700),
        dc = function() {
            this.Gc = 0;
            this.clear()
        },
        ec;
    dc.prototype.clear = function() {
        this.C = Array(this.Gc);
        this.Xe = -1;
        this.Af = !1
    };
    var fc = function(a, b, c) {
        this.reset(a || $b, b, c, void 0, void 0)
    };
    fc.prototype.reset = function(a, b, c, d) {
        d || Date.now();
        this.Ih = b
    };
    fc.prototype.getMessage = function() {
        return this.Ih
    };
    var gc = function(a, b) {
            this.level = null;
            this.ah = [];
            this.parent = (b === void 0 ? null : b) || null;
            this.children = [];
            this.zh = {
                Ea: function() {
                    return a
                }
            }
        },
        hc = function(a) {
            if (a.level) return a.level;
            if (a.parent) return hc(a.parent);
            cb("Root logger has no level set.");
            return $b
        },
        ic = function(a, b) {
            for (; a;) a.ah.forEach(function(c) {
                c(b)
            }), a = a.parent
        },
        jc = function() {
            this.entries = {};
            var a = new gc("");
            a.level = cc;
            this.entries[""] = a
        },
        kc, lc = function(a, b, c) {
            var d = a.entries[b];
            if (d) return c !== void 0 && (d.level = c), d;
            d = b.lastIndexOf(".");
            d = b.slice(0, Math.max(d, 0));
            d = lc(a, d);
            var e = new gc(b, d);
            a.entries[b] = e;
            d.children.push(e);
            c !== void 0 && (e.level = c);
            return e
        },
        mc = function() {
            kc || (kc = new jc);
            return kc
        },
        oc = function(a) {
            var b = nc;
            if (b) {
                var c = a,
                    d = ac;
                if (a = b)
                    if (a = b && d) {
                        a = d.value;
                        var e = b ? hc(lc(mc(), b.Ea())) : $b;
                        a = a >= e.value
                    }
                if (a) {
                    d = d || $b;
                    a = lc(mc(), b.Ea());
                    typeof c === "function" && (c = c());
                    ec || (ec = new dc);
                    e = ec;
                    b = b.Ea();
                    if (e.Gc > 0) {
                        var f = (e.Xe + 1) % e.Gc;
                        e.Xe = f;
                        e.Af ? (e = e.C[f], e.reset(d, c, b), b = e) : (e.Af = f == e.Gc - 1, b = e.C[f] = new fc(d, c, b))
                    } else b = new fc(d,
                        c, b);
                    ic(a, b)
                }
            }
        };
    var pc = function() {
        this.names = new Map
    };
    pc.prototype.Ea = function(a) {
        var b = this.names.get(a);
        if (b) return b;
        var c;
        b = (c = a.description) != null ? c : Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ Date.now()).toString(36);
        this.names.set(a, b);
        return b
    };
    /*


     Copyright (c) 2015-2018 Google, Inc., Netflix, Inc., Microsoft Corp. and contributors
     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at
         http://www.apache.org/licenses/LICENSE-2.0
     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.
    */
    function rc(a) {
        a = a(function(b) {
            b.name = b.constructor.name;
            b.stack = Error().stack
        });
        a.prototype = Object.create(Error.prototype);
        return a.prototype.constructor = a
    };
    var sc = rc(function(a) {
        return function(b) {
            a(this);
            this.message = b ? b.length + " errors occurred during unsubscription:\n" + b.map(function(c, d) {
                return d + 1 + ") " + c.toString()
            }).join("\n  ") : "";
            this.name = "UnsubscriptionError";
            this.errors = b
        }
    });

    function tc(a, b) {
        a && (b = a.indexOf(b), 0 <= b && a.splice(b, 1))
    };

    function G(a) {
        return typeof a === "function"
    };
    var uc = function(a) {
        this.ih = a;
        this.closed = !1;
        this.Rb = this.wb = null
    };
    n = uc.prototype;
    n.unsubscribe = function() {
        if (!this.closed) {
            this.closed = !0;
            var a = this.wb;
            if (Array.isArray(a))
                for (var b = u(a), c = b.next(); !c.done; c = b.next()) c.value.remove(this);
            else a == null || a.remove(this);
            b = this.ih;
            if (G(b)) try {
                b()
            } catch (f) {
                var d = f instanceof sc ? f.errors : [f]
            }
            var e = this.Rb;
            if (e)
                for (this.Rb = null, b = u(e), c = b.next(); !c.done; c = b.next()) {
                    c = c.value;
                    try {
                        G(c) ? c() : c.unsubscribe()
                    } catch (f) {
                        c = void 0, d = (c = d) != null ? c : [], f instanceof sc ? d = [].concat(x(d), x(f.errors)) : d.push(f)
                    }
                }
            if (d) throw new sc(d);
        }
    };
    n.add = function(a) {
        if (a && a !== this)
            if (this.closed) G(a) ? a() : a.unsubscribe();
            else {
                if (a instanceof uc) {
                    if (a.closed || a.tg(this)) return;
                    a.sg(this)
                }
                var b;
                (this.Rb = (b = this.Rb) != null ? b : []).push(a)
            }
    };
    n.tg = function(a) {
        var b = this.wb;
        return b === a || Array.isArray(b) && b.includes(a)
    };
    n.sg = function(a) {
        var b = this.wb;
        this.wb = Array.isArray(b) ? (b.push(a), b) : b ? [b, a] : a
    };
    n.ug = function(a) {
        var b = this.wb;
        b === a ? this.wb = null : Array.isArray(b) && tc(b, a)
    };
    n.remove = function(a) {
        var b = this.Rb;
        b && tc(b, a);
        a instanceof uc && a.ug(this)
    };
    var vc = new uc;
    vc.closed = !0;
    uc.EMPTY = vc;

    function wc(a) {
        return a instanceof uc || a && "closed" in a && G(a.remove) && G(a.add) && G(a.unsubscribe)
    };

    function xc() {};

    function yc(a) {
        setTimeout(function() {
            throw a;
        })
    };
    var zc = function(a) {
        uc.call(this);
        this.L = !1;
        this.destination = a instanceof zc ? a : new Ac(!a || G(a) ? {
            next: a != null ? a : void 0
        } : a);
        wc(a) && a.add(this)
    };
    y(zc, uc);
    zc.EMPTY = uc.EMPTY;
    zc.create = function(a, b, c) {
        return new Bc(a, b, c)
    };
    n = zc.prototype;
    n.next = function(a) {
        this.L || this.qd(a)
    };
    n.error = function(a) {
        this.L || (this.L = !0, this.Le(a))
    };
    n.complete = function() {
        this.L || (this.L = !0, this.zc())
    };
    n.unsubscribe = function() {
        this.closed || (this.L = !0, uc.prototype.unsubscribe.call(this))
    };
    n.qd = function(a) {
        this.destination.next(a)
    };
    n.Le = function(a) {
        this.destination.error(a);
        this.unsubscribe()
    };
    n.zc = function() {
        this.destination.complete();
        this.unsubscribe()
    };
    var Ac = function(a) {
        this.ie = a
    };
    Ac.prototype.next = function(a) {
        var b = this.ie;
        if (b.next) try {
            b.next(a)
        } catch (c) {
            yc(c)
        }
    };
    Ac.prototype.error = function(a) {
        var b = this.ie;
        if (b.error) try {
            b.error(a)
        } catch (c) {
            yc(c)
        } else yc(a)
    };
    Ac.prototype.complete = function() {
        var a = this.ie;
        if (a.complete) try {
            a.complete()
        } catch (b) {
            yc(b)
        }
    };
    var Bc = function(a, b, c) {
        zc.call(this);
        this.destination = new Ac(G(a) || !a ? {
            next: a != null ? a : void 0,
            error: b != null ? b : void 0,
            complete: c != null ? c : void 0
        } : a)
    };
    y(Bc, zc);
    Bc.EMPTY = zc.EMPTY;
    Bc.create = zc.create;
    var Cc = typeof Symbol === "function" && Symbol.observable || "@@observable";

    function Dc(a) {
        return a
    };

    function H() {
        return Ec(B.apply(0, arguments))
    }

    function Ec(a) {
        return a.length === 0 ? Dc : a.length === 1 ? a[0] : function(b) {
            return a.reduce(function(c, d) {
                return d(c)
            }, b)
        }
    };
    var J = function(a) {
        a && (this.ya = a)
    };
    n = J.prototype;
    n.kb = function(a) {
        var b = new J;
        b.source = this;
        b.operator = a;
        return b
    };
    n.subscribe = function(a, b, c) {
        a = a && a instanceof zc || a && G(a.next) && G(a.error) && G(a.complete) && wc(a) ? a : new Bc(a, b, c);
        b = this.operator;
        c = this.source;
        a.add(b ? b.call(a, c) : c ? this.ya(a) : this.sd(a));
        return a
    };
    n.sd = function(a) {
        try {
            return this.ya(a)
        } catch (e) {
            var b;
            a: {
                for (b = a; b;) {
                    var c = b.destination,
                        d = b.L;
                    if (b.closed || d) {
                        b = !1;
                        break a
                    }
                    b = c && c instanceof zc ? c : null
                }
                b = !0
            }
            b ? a.error(e) : yc(e)
        }
    };
    n.forEach = function(a, b) {
        var c = this;
        b = Fc(b);
        return new b(function(d, e) {
            var f = c.subscribe(function(g) {
                try {
                    a(g)
                } catch (h) {
                    e(h), f == null || f.unsubscribe()
                }
            }, e, d)
        })
    };
    n.ya = function(a) {
        var b;
        return (b = this.source) == null ? void 0 : b.subscribe(a)
    };
    J.prototype[Cc] = function() {
        return this
    };
    J.prototype.g = function() {
        var a = B.apply(0, arguments);
        return a.length ? Ec(a)(this) : this
    };
    J.create = function(a) {
        return new J(a)
    };

    function Fc(a) {
        var b;
        return (b = a != null ? a : void 0) != null ? b : Promise
    };
    var Gc = rc(function(a) {
        return function() {
            a(this);
            this.message = "object unsubscribed"
        }
    });
    var K = function() {
        this.Hb = [];
        this.Qc = this.L = this.closed = !1;
        this.ve = null
    };
    y(K, J);
    n = K.prototype;
    n.kb = function(a) {
        var b = new Hc(this, this);
        b.operator = a;
        return b
    };
    n.Za = function() {
        if (this.closed) throw new Gc;
    };
    n.next = function(a) {
        this.Za();
        if (!this.L) {
            var b = this.Hb.slice();
            b = u(b);
            for (var c = b.next(); !c.done; c = b.next()) c.value.next(a)
        }
    };
    n.error = function(a) {
        this.Za();
        if (!this.L) {
            this.Qc = this.L = !0;
            this.ve = a;
            for (var b = this.Hb; b.length;) b.shift().error(a)
        }
    };
    n.complete = function() {
        this.Za();
        if (!this.L) {
            this.L = !0;
            for (var a = this.Hb; a.length;) a.shift().complete()
        }
    };
    n.unsubscribe = function() {
        this.L = this.closed = !0;
        this.Hb = null
    };
    n.sd = function(a) {
        this.Za();
        return J.prototype.sd.call(this, a)
    };
    n.ya = function(a) {
        this.Za();
        this.Ke(a);
        return this.Ne(a)
    };
    n.Ne = function(a) {
        var b = this,
            c = this.L,
            d = this.Hb;
        return this.Qc || c ? uc.EMPTY : (d.push(a), new uc(function() {
            return tc(b.Hb, a)
        }))
    };
    n.Ke = function(a) {
        var b = this.ve,
            c = this.L;
        this.Qc ? a.error(b) : c && a.complete()
    };
    n.P = function() {
        var a = new J;
        a.source = this;
        return a
    };
    K.create = function(a, b) {
        return new Hc(a, b)
    };
    var Hc = function(a, b) {
        K.call(this);
        this.destination = a;
        this.source = b
    };
    y(Hc, K);
    Hc.create = K.create;
    Hc.prototype.next = function(a) {
        var b, c;
        (b = this.destination) == null || (c = b.next) == null || c.call(b, a)
    };
    Hc.prototype.error = function(a) {
        var b, c;
        (b = this.destination) == null || (c = b.error) == null || c.call(b, a)
    };
    Hc.prototype.complete = function() {
        var a, b;
        (a = this.destination) == null || (b = a.complete) == null || b.call(a)
    };
    Hc.prototype.ya = function(a) {
        var b, c;
        return (c = (b = this.source) == null ? void 0 : b.subscribe(a)) != null ? c : uc.EMPTY
    };
    var Ic = function(a) {
        K.call(this);
        this.td = a
    };
    y(Ic, K);
    Ic.create = K.create;
    Ic.prototype.ya = function(a) {
        var b = K.prototype.ya.call(this, a);
        !b.closed && a.next(this.td);
        return b
    };
    Ic.prototype.getValue = function() {
        var a = this.ve,
            b = this.td;
        if (this.Qc) throw a;
        this.Za();
        return b
    };
    Ic.prototype.next = function(a) {
        K.prototype.next.call(this, this.td = a)
    };
    da.Object.defineProperties(Ic.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.getValue()
            }
        }
    });
    var Jc = new J(function(a) {
        return a.complete()
    });

    function Kc(a, b) {
        return new J(function(c) {
            var d = new uc,
                e = 0;
            d.add(b.A(function() {
                e === a.length ? c.complete() : (c.next(a[e++]), c.closed || d.add(this.A()))
            }));
            return d
        })
    };

    function Lc(a, b) {
        if (!a) throw Error("v");
        return new J(function(c) {
            var d = new uc;
            d.add(b.A(function() {
                var e = a[Symbol.asyncIterator]();
                d.add(b.A(function() {
                    var f = this;
                    e.next().then(function(g) {
                        g.done ? c.complete() : (c.next(g.value), f.A())
                    })
                }))
            }));
            return d
        })
    };
    var Mc = typeof Symbol === "function" && Symbol.iterator ? Symbol.iterator : "@@iterator";

    function Nc(a, b) {
        return new J(function(c) {
            var d;
            c.add(b.A(function() {
                d = a[Mc]();
                c.add(b.A(function() {
                    if (!c.closed) {
                        try {
                            var e = d.next();
                            var f = e.value;
                            var g = e.done
                        } catch (h) {
                            c.error(h);
                            return
                        }
                        g ? c.complete() : (c.next(f), this.A())
                    }
                }))
            }));
            return function() {
                var e;
                return G((e = d) == null ? void 0 : e.return) && d.return()
            }
        })
    };

    function Oc(a, b) {
        return new J(function(c) {
            var d = new uc;
            d.add(b.A(function() {
                var e = a[Cc]();
                d.add(e.subscribe({
                    next: function(f) {
                        d.add(b.A(function() {
                            return c.next(f)
                        }))
                    },
                    error: function(f) {
                        d.add(b.A(function() {
                            return c.error(f)
                        }))
                    },
                    complete: function() {
                        d.add(b.A(function() {
                            return c.complete()
                        }))
                    }
                }))
            }));
            return d
        })
    };

    function Pc(a, b) {
        return new J(function(c) {
            var d = new uc;
            d.add(b.A(function() {
                return a.then(function(e) {
                    d.add(b.A(function() {
                        c.next(e);
                        d.add(b.A(function() {
                            return c.complete()
                        }))
                    }))
                }, function(e) {
                    d.add(b.A(function() {
                        return c.error(e)
                    }))
                })
            }));
            return d
        })
    };
    var Qc = function(a) {
        return a && typeof a.length === "number" && typeof a !== "function"
    };

    function Rc(a) {
        return new TypeError("w`" + (a !== null && typeof a === "object" ? "an invalid object" : "'" + a + "'"))
    };

    function Sc(a, b) {
        if (a != null) {
            if (G(a[Cc])) return Oc(a, b);
            if (Qc(a)) return Kc(a, b);
            if (G(a == null ? void 0 : a.then)) return Pc(a, b);
            if (Symbol.asyncIterator && G(a == null ? void 0 : a[Symbol.asyncIterator])) return Lc(a, b);
            if (G(a == null ? void 0 : a[Mc])) return Nc(a, b)
        }
        throw Rc(a);
    };

    function Vc(a, b) {
        return b ? Sc(a, b) : Wc(a)
    }

    function Wc(a) {
        if (a instanceof J) return a;
        if (a != null) {
            if (G(a[Cc])) return Xc(a);
            if (Qc(a)) return Yc(a);
            if (G(a == null ? void 0 : a.then)) return Zc(a);
            if (Symbol.asyncIterator && G(a == null ? void 0 : a[Symbol.asyncIterator])) return $c(a);
            if (G(a == null ? void 0 : a[Mc])) return ad(a)
        }
        throw Rc(a);
    }

    function Xc(a) {
        return new J(function(b) {
            var c = a[Cc]();
            if (G(c.subscribe)) return c.subscribe(b);
            throw new TypeError("x");
        })
    }

    function Yc(a) {
        return new J(function(b) {
            for (var c = 0; c < a.length && !b.closed; c++) b.next(a[c]);
            b.complete()
        })
    }

    function Zc(a) {
        return new J(function(b) {
            a.then(function(c) {
                b.closed || (b.next(c), b.complete())
            }, function(c) {
                return b.error(c)
            }).then(null, yc)
        })
    }

    function ad(a) {
        return new J(function(b) {
            for (var c = a[Mc](); !b.closed;) {
                var d = c.next(),
                    e = d.value;
                d.done ? b.complete() : b.next(e)
            }
            return function() {
                return G(c == null ? void 0 : c.return) && c.return()
            }
        })
    }

    function $c(a) {
        return new J(function(b) {
            bd(a, b).catch(function(c) {
                return b.error(c)
            })
        })
    }

    function bd(a, b) {
        var c, d, e, f, g, h;
        return Ca(function(k) {
            switch (k.N) {
                case 1:
                    k.bb = 2;
                    k.Da = 3;
                    var l = a[Symbol.asyncIterator];
                    f = l !== void 0 ? l.call(a) : new Da(u(a));
                case 5:
                    return sa(k, f.next(), 8);
                case 8:
                    d = k.ub;
                    if (d.done) {
                        k.ib(3);
                        break
                    }
                    g = d.value;
                    b.next(g);
                    k.ib(5);
                    break;
                case 3:
                    ta(k);
                    k.bb = 0;
                    k.Da = 9;
                    if (!d || d.done || !(e = f.return)) {
                        k.ib(9);
                        break
                    }
                    return sa(k, e.call(f), 9);
                case 9:
                    ta(k, 0, 0, 1);
                    if (c) throw c.error;
                    ua(k, 10, 1);
                    break;
                case 10:
                    ua(k, 4);
                    break;
                case 2:
                    k.bb = 0;
                    l = k.aa.ff;
                    k.aa = null;
                    h = l;
                    c = {
                        error: h
                    };
                    k.ib(3);
                    break;
                case 4:
                    b.complete(),
                        k.N = 0
            }
        })
    };

    function cd(a, b) {
        return b ? Kc(a, b) : Yc(a)
    };

    function dd(a) {
        return G(a[a.length - 1]) ? a.pop() : void 0
    }

    function ed(a) {
        var b = a[a.length - 1];
        return b && G(b.A) ? a.pop() : void 0
    };

    function L() {
        var a = B.apply(0, arguments),
            b = ed(a);
        return b ? Kc(a, b) : cd(a)
    };

    function fd(a) {
        var b = G(a) ? a : function() {
            return a
        };
        return new J(function(c) {
            return c.error(b())
        })
    };
    var gd = {
        now: function() {
            return (gd.Lg || Date).now()
        },
        Lg: void 0
    };
    var hd = function(a, b, c) {
        a = a === void 0 ? Infinity : a;
        b = b === void 0 ? Infinity : b;
        c = c === void 0 ? gd : c;
        K.call(this);
        this.bufferSize = a;
        this.lg = b;
        this.eg = c;
        this.buffer = [];
        this.Ud = b === Infinity;
        this.bufferSize = Math.max(1, a);
        this.lg = Math.max(1, b)
    };
    y(hd, K);
    hd.create = K.create;
    hd.prototype.next = function(a) {
        var b = this.buffer,
            c = this.Ud,
            d = this.eg,
            e = this.lg;
        this.L || (b.push(a), !c && b.push(d.now() + e));
        id(this);
        K.prototype.next.call(this, a)
    };
    hd.prototype.ya = function(a) {
        this.Za();
        id(this);
        for (var b = this.Ne(a), c = this.Ud, d = this.buffer.slice(), e = 0; e < d.length && !a.closed; e += c ? 1 : 2) a.next(d[e]);
        this.Ke(a);
        return b
    };
    var id = function(a) {
        var b = a.bufferSize,
            c = a.eg,
            d = a.buffer;
        a = a.Ud;
        var e = (a ? 1 : 2) * b;
        b < Infinity && e < d.length && d.splice(0, d.length - e);
        if (!a) {
            b = c.now();
            c = 0;
            for (a = 1; a < d.length && d[a] <= b; a += 2) c = a;
            c && d.splice(0, c + 1)
        }
    };
    var kd = function(a, b) {
        b = b === void 0 ? jd : b;
        this.rg = a;
        this.now = b
    };
    kd.prototype.A = function(a, b, c) {
        b = b === void 0 ? 0 : b;
        return (new this.rg(this, a)).A(c, b)
    };
    var jd = gd.now;
    var ld = rc(function(a) {
        return function() {
            a(this);
            this.message = "no elements in sequence"
        }
    });

    function md(a) {
        return new Promise(function(b, c) {
            var d = new uc;
            d.add(a.subscribe({
                next: function(e) {
                    b(e);
                    d.unsubscribe()
                },
                error: c,
                complete: function() {
                    c(new ld)
                }
            }))
        })
    };
    var M = function(a, b, c, d, e) {
        zc.call(this, a);
        this.Ph = e;
        b && (this.qd = function(f) {
            try {
                b(f)
            } catch (g) {
                this.error(g)
            }
        });
        c && (this.Le = function(f) {
            try {
                c(f)
            } catch (g) {
                this.destination.error(g)
            }
            this.unsubscribe()
        });
        d && (this.zc = function() {
            try {
                d()
            } catch (f) {
                this.destination.error(f)
            }
            this.unsubscribe()
        })
    };
    y(M, zc);
    M.EMPTY = zc.EMPTY;
    M.create = zc.create;
    M.prototype.unsubscribe = function() {
        var a;
        this.closed || (a = this.Ph) != null && a.call(this);
        zc.prototype.unsubscribe.call(this)
    };

    function N(a) {
        return function(b) {
            if (G(b == null ? void 0 : b.kb)) return b.kb(function(c) {
                try {
                    return a(c, this)
                } catch (d) {
                    this.error(d)
                }
            });
            throw new TypeError("y");
        }
    };

    function nd() {
        return N(function(a, b) {
            var c = null;
            a.Ac++;
            var d = new M(b, void 0, void 0, void 0, function() {
                if (!a || a.Ac <= 0 || 0 < --a.Ac) c = null;
                else {
                    var e = a.vb,
                        f = c;
                    c = null;
                    !e || f && e !== f || e.unsubscribe();
                    b.unsubscribe()
                }
            });
            a.subscribe(d);
            d.closed || (c = a.connect())
        })
    };
    var od = function(a, b) {
        this.source = a;
        this.Yf = b;
        this.Bc = null;
        this.Ac = 0;
        this.vb = null
    };
    y(od, J);
    od.create = J.create;
    od.prototype.ya = function(a) {
        return pd(this).subscribe(a)
    };
    var pd = function(a) {
        var b = a.Bc;
        if (!b || b.L) a.Bc = a.Yf();
        return a.Bc
    };
    od.prototype.rd = function() {
        this.Ac = 0;
        var a = this.vb;
        this.Bc = this.vb = null;
        a == null || a.unsubscribe()
    };
    od.prototype.connect = function() {
        var a = this,
            b = this.vb;
        if (!b) {
            b = this.vb = new uc;
            var c = pd(this);
            b.add(this.source.subscribe(new M(c, void 0, function(d) {
                a.rd();
                c.error(d)
            }, function() {
                a.rd();
                c.complete()
            }, function() {
                return a.rd()
            })));
            b.closed && (this.vb = null, b = uc.EMPTY)
        }
        return b
    };

    function O(a) {
        return N(function(b, c) {
            var d = 0;
            b.subscribe(new M(c, function(e) {
                c.next(a.call(void 0, e, d++))
            }))
        })
    };
    var qd = Array.isArray;

    function rd(a) {
        return O(function(b) {
            return qd(b) ? a.apply(null, x(b)) : a(b)
        })
    };
    var sd = Array.isArray,
        td = Object,
        ud = td.getPrototypeOf,
        vd = td.prototype,
        wd = td.keys;

    function xd(a) {
        if (a.length === 1) {
            var b = a[0];
            if (sd(b)) return {
                args: b,
                keys: null
            };
            if (b && typeof b === "object" && ud(b) === vd) return a = wd(b), {
                args: a.map(function(c) {
                    return b[c]
                }),
                keys: a
            }
        }
        return {
            args: a,
            keys: null
        }
    };

    function P() {
        var a = B.apply(0, arguments),
            b = ed(a),
            c = dd(a);
        a = xd(a);
        var d = a.args,
            e = a.keys;
        if (d.length === 0) return Vc([], b);
        b = new J(yd(d, b, e ? function(f) {
            for (var g = {}, h = 0; h < f.length; h++) g[e[h]] = f[h];
            return g
        } : Dc));
        return c ? b.g(rd(c)) : b
    }
    var zd = function(a, b, c) {
        zc.call(this, a);
        this.qd = b;
        this.mi = c
    };
    y(zd, zc);
    zd.EMPTY = zc.EMPTY;
    zd.create = zc.create;
    zd.prototype.zc = function() {
        this.mi() ? zc.prototype.zc.call(this) : this.unsubscribe()
    };

    function yd(a, b, c) {
        c = c === void 0 ? Dc : c;
        return function(d) {
            Ad(b, function() {
                for (var e = a.length, f = Array(e), g = e, h = a.map(function() {
                        return !1
                    }), k = !0, l = {
                        fb: 0
                    }; l.fb < e; l = {
                        fb: l.fb
                    }, l.fb++) Ad(b, function(m) {
                    return function() {
                        Vc(a[m.fb], b).subscribe(new zd(d, function(q) {
                            f[m.fb] = q;
                            k && (h[m.fb] = !0, k = !h.every(Dc));
                            k || d.next(c(f.slice()))
                        }, function() {
                            return --g === 0
                        }))
                    }
                }(l), d)
            }, d)
        }
    }

    function Ad(a, b, c) {
        a ? c.add(a.A(b)) : b()
    };

    function Bd(a, b, c, d) {
        var e = [],
            f = 0,
            g = 0,
            h = !1,
            k = function(l) {
                f++;
                Wc(c(l, g++)).subscribe(new M(b, function(m) {
                    b.next(m)
                }, void 0, function() {
                    for (f--; e.length && f < d;) k(e.shift());
                    !h || e.length || f || b.complete()
                }))
            };
        a.subscribe(new M(b, function(l) {
            return f < d ? k(l) : e.push(l)
        }, void 0, function() {
            h = !0;
            !h || e.length || f || b.complete()
        }));
        return function() {
            e = null
        }
    };

    function Cd(a, b) {
        var c = c === void 0 ? Infinity : c;
        if (G(b)) return function(d) {
            return d.g(Cd(function(e, f) {
                return Wc(a(e, f)).g(O(function(g, h) {
                    return b(e, g, f, h)
                }))
            }, c))
        };
        typeof b === "number" && (c = b);
        return N(function(d, e) {
            return Bd(d, e, a, c)
        })
    };

    function Dd(a) {
        a = a === void 0 ? Infinity : a;
        return Cd(Dc, a)
    };

    function Ed() {
        var a = B.apply(0, arguments);
        return Dd(1)(cd(a, ed(a)))
    };

    function Fd(a, b, c) {
        if (G(c)) {
            var d = c;
            c = void 0
        }
        return d ? Fd(a, b, c).g(rd(d)) : new J(function(e) {
            var f = function() {
                var g = B.apply(0, arguments);
                return e.next(g.length > 1 ? g : g[0])
            };
            if (G(a.addEventListener) && G(a.removeEventListener)) return a.addEventListener(b, f, c),
                function() {
                    return a.removeEventListener(b, f, c)
                };
            if (G(a.Mh) && G(a.Lh)) return a.Mh(b, f),
                function() {
                    return a.Lh(b, f)
                };
            if (G(a.addListener) && G(a.removeListener)) return a.addListener(b, f),
                function() {
                    return a.removeListener(b, f)
                };
            if (Qc(a)) return Cd(function(g) {
                return Fd(g,
                    b, c)
            })(cd(a)).subscribe(e);
            e.error(new TypeError("z"))
        })
    };
    var Gd = function() {
        uc.call(this)
    };
    y(Gd, uc);
    Gd.EMPTY = uc.EMPTY;
    Gd.prototype.A = function() {
        return this
    };
    var Hd = function(a, b) {
        return setInterval.apply(null, [a, b].concat(x(B.apply(2, arguments))))
    };
    var Id = function(a, b) {
        uc.call(this);
        this.scheduler = a;
        this.Ee = b;
        this.pending = !1
    };
    y(Id, Gd);
    Id.EMPTY = Gd.EMPTY;
    Id.prototype.A = function(a, b) {
        b = b === void 0 ? 0 : b;
        if (this.closed) return this;
        this.state = a;
        a = this.id;
        var c = this.scheduler;
        a != null && (this.id = Jd(this, a, b));
        this.pending = !0;
        this.delay = b;
        this.id = this.id || this.qe(c, this.id, b);
        return this
    };
    Id.prototype.qe = function(a, b, c) {
        c = c === void 0 ? 0 : c;
        return Hd(a.flush.bind(a, this), c)
    };
    var Jd = function(a, b, c) {
        c = c === void 0 ? 0 : c;
        if (c != null && a.delay === c && a.pending === !1) return b;
        clearInterval(b)
    };
    Id.prototype.execute = function(a, b) {
        if (this.closed) return Error("A");
        this.pending = !1;
        if (a = this.Me(a, b)) return a;
        this.pending === !1 && this.id != null && (this.id = Jd(this, this.id, null))
    };
    Id.prototype.Me = function(a) {
        var b = !1,
            c = void 0;
        try {
            this.Ee(a)
        } catch (d) {
            b = !0, c = !!d && d || Error(d)
        }
        if (b) return this.unsubscribe(), c
    };
    Id.prototype.unsubscribe = function() {
        if (!this.closed) {
            var a = this.id,
                b = this.scheduler.actions;
            this.Ee = this.state = this.scheduler = null;
            this.pending = !1;
            tc(b, this);
            a != null && (this.id = Jd(this, a, null));
            this.delay = null;
            Gd.prototype.unsubscribe.call(this)
        }
    };
    var Kd = function(a, b) {
        b = b === void 0 ? jd : b;
        kd.call(this, a, b);
        this.actions = [];
        this.active = !1
    };
    y(Kd, kd);
    Kd.prototype.flush = function(a) {
        var b = this.actions;
        if (this.active) b.push(a);
        else {
            var c;
            this.active = !0;
            do
                if (c = a.execute(a.state, a.delay)) break; while (a = b.shift());
            this.active = !1;
            if (c) {
                for (; a = b.shift();) a.unsubscribe();
                throw c;
            }
        }
    };

    function Ld() {
        var a = B.apply(0, arguments),
            b = ed(a);
        var c = typeof a[a.length - 1] === "number" ? a.pop() : Infinity;
        return a.length ? a.length === 1 ? Wc(a[0]) : Dd(c)(cd(a, b)) : Jc
    };
    var Md = new J(xc);
    var Nd = Array.isArray;

    function Od(a) {
        return a.length === 1 && Nd(a[0]) ? a[0] : a
    };

    function Pd() {
        var a = B.apply(0, arguments);
        a = Od(a);
        return N(function(b, c) {
            var d = [b].concat(x(a)),
                e = function() {
                    if (!c.closed)
                        if (d.length > 0) {
                            try {
                                var f = Wc(d.shift())
                            } catch (h) {
                                e();
                                return
                            }
                            var g = new M(c, void 0, xc, xc);
                            c.add(f.subscribe(g));
                            g.add(e)
                        } else c.complete()
                };
            e()
        })
    };

    function Q(a) {
        return N(function(b, c) {
            var d = 0;
            b.subscribe(new M(c, function(e) {
                return a.call(void 0, e, d++) && c.next(e)
            }))
        })
    };

    function Qd() {
        var a = B.apply(0, arguments);
        a = Od(a);
        return a.length === 1 ? Wc(a[0]) : new J(Rd(a))
    }

    function Rd(a) {
        return function(b) {
            for (var c = [], d = {
                    Ab: 0
                }; c && !b.closed && d.Ab < a.length; d = {
                    Ab: d.Ab
                }, d.Ab++) c.push(Wc(a[d.Ab]).subscribe(new M(b, function(e) {
                return function(f) {
                    if (c) {
                        for (var g = 0; g < c.length; g++) g !== e.Ab && c[g].unsubscribe();
                        c = null
                    }
                    b.next(f)
                }
            }(d))))
        }
    };

    function Sd() {
        var a = B.apply(0, arguments),
            b = dd(a);
        a = Od(a);
        return a.length ? new J(function(c) {
            var d = a.map(function() {
                    return []
                }),
                e = a.map(function() {
                    return !1
                });
            c.add(function() {
                d = e = null
            });
            for (var f = {
                    Ta: 0
                }; !c.closed && f.Ta < a.length; f = {
                    Ta: f.Ta
                }, f.Ta++) Wc(a[f.Ta]).subscribe(new M(c, function(g) {
                    return function(h) {
                        d[g.Ta].push(h);
                        d.every(function(k) {
                            return k.length
                        }) && (h = d.map(function(k) {
                            return k.shift()
                        }), c.next(b ? b.apply(null, x(h)) : h), d.some(function(k, l) {
                            return !k.length && e[l]
                        }) && c.complete())
                    }
                }(f), void 0,
                function(g) {
                    return function() {
                        e[g.Ta] = !0;
                        !d[g.Ta].length && c.complete()
                    }
                }(f)));
            return function() {
                d = e = null
            }
        }) : Jc
    };
    rc(function(a) {
        return function(b) {
            b = b === void 0 ? null : b;
            a(this);
            this.message = "Timeout has occurred";
            this.name = "TimeoutError";
            this.info = b
        }
    });
    var Td = function(a, b) {
        Id.call(this, a, b);
        this.scheduler = a;
        this.Ee = b
    };
    y(Td, Id);
    Td.EMPTY = Id.EMPTY;
    Td.prototype.A = function(a, b) {
        b = b === void 0 ? 0 : b;
        if (b > 0) return Id.prototype.A.call(this, a, b);
        this.delay = b;
        this.state = a;
        this.scheduler.flush(this);
        return this
    };
    Td.prototype.execute = function(a, b) {
        return b > 0 || this.closed ? Id.prototype.execute.call(this, a, b) : this.Me(a, b)
    };
    Td.prototype.qe = function(a, b, c) {
        c = c === void 0 ? 0 : c;
        return c != null && c > 0 || c == null && this.delay > 0 ? Id.prototype.qe.call(this, a, b, c) : a.flush(this)
    };
    var Ud = function() {
        Kd.apply(this, arguments)
    };
    y(Ud, Kd);
    var Vd = new Ud(Td);
    rc(function(a) {
        return function() {
            a(this);
            this.message = "argument out of range"
        }
    });
    rc(function(a) {
        return function(b) {
            a(this);
            this.message = b
        }
    });
    rc(function(a) {
        return function(b) {
            a(this);
            this.message = b
        }
    });
    var Wd = function() {
        this.B = new Sa;
        this.h = new Ta;
        this.mh = Symbol();
        this.Yb = new pc
    };
    Wd.prototype.Md = function() {
        return Md
    };
    var Xd = function(a, b) {
        a.Ba !== null && a.Ba.next(b)
    };
    da.Object.defineProperties(Wd.prototype, {
        qb: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.mh
            }
        }
    });
    var Yd = function(a, b) {
        b = Error.call(this, b ? a + ": " + b : String(a));
        this.message = b.message;
        "stack" in b && (this.stack = b.stack);
        this.code = a;
        this.__proto__ = Yd.prototype;
        this.name = String(a)
    };
    y(Yd, Error);
    var ae = function(a) {
        Yd.call(this, 1E3, 'sfr:"' + a + '"');
        this.Dh = a;
        this.__proto__ = ae.prototype
    };
    y(ae, Yd);
    var be = function() {
        Yd.call(this, 1003);
        this.__proto__ = be.prototype
    };
    y(be, Yd);
    var ce = function() {
        Yd.call(this, 1009);
        this.__proto__ = ce.prototype
    };
    y(ce, Yd);
    var de = function() {
        Yd.call(this, 1011);
        this.__proto__ = de.prototype
    };
    y(de, Yd);
    var ee = function() {
        Yd.call(this, 1007);
        this.__proto__ = be.prototype
    };
    y(ee, Yd);
    var fe = function() {
        Yd.call(this, 1008);
        this.__proto__ = be.prototype
    };
    y(fe, Yd);
    var ge = function() {
        Yd.call(this, 1001);
        this.__proto__ = ge.prototype
    };
    y(ge, Yd);
    var he = function(a) {
        Yd.call(this, 1004, String(a));
        this.jh = a;
        this.__proto__ = he.prototype
    };
    y(he, Yd);
    var je = function(a) {
        Yd.call(this, 1010, a);
        this.__proto__ = ie.prototype
    };
    y(je, Yd);
    var ie = function(a) {
        Yd.call(this, 1005, a);
        this.__proto__ = ie.prototype
    };
    y(ie, Yd);
    var ke = function(a) {
        var b = B.apply(1, arguments),
            c = this;
        this.Jb = [];
        this.Jb.push(a);
        b.forEach(function(d) {
            c.Jb.push(d)
        })
    };
    ke.prototype.F = function(a) {
        return this.Jb.some(function(b) {
            return b.F(a)
        })
    };
    ke.prototype.G = function(a, b) {
        for (var c = 0; c < this.Jb.length; c++)
            if (this.Jb[c].F(b)) return this.Jb[c].G(a, b);
        throw new ce;
    };

    function le(a) {
        var b, c, d;
        return !!a && typeof a.active === "boolean" && typeof((b = a.clock) == null ? void 0 : b.now) === "function" && ((c = a.clock) == null ? void 0 : c.timeline) !== void 0 && !((d = a.u) == null || !d.timestamp) && typeof a.ca === "function" && typeof a.da === "function" && typeof a.ja === "function" && typeof a.map === "function" && typeof a.oa === "function"
    };
    var me = Symbol("time-origin"),
        ne = Symbol("date"),
        oe = function(a, b) {
            this.value = a;
            this.timeline = b
        },
        pe = function(a, b) {
            if (b.timeline !== a.timeline) throw new ee;
        },
        qe = function(a, b) {
            pe(a, b);
            return a.value - b.value
        };
    n = oe.prototype;
    n.equals = function(a) {
        return qe(this, a) === 0
    };
    n.maximum = function(a) {
        pe(this, a);
        return this.value >= a.value ? this : a
    };
    n.round = function() {
        return new oe(Math.round(this.value), this.timeline)
    };
    n.add = function(a) {
        return new oe(this.value + a, this.timeline)
    };
    n.toString = function() {
        return String(this.value)
    };

    function re(a) {
        function b(c) {
            return typeof c === "boolean" || typeof c === "string" || typeof c === "number" || c === void 0 || c === null
        }
        return b(a) ? !0 : Array.isArray(a) ? a.every(b) : typeof a === "object" ? Object.keys(a).every(function(c) {
            return typeof c === "string"
        }) && Object.values(a).every(function(c) {
            return Array.isArray(c) ? c.every(b) : b(c)
        }) : !1
    }

    function se(a) {
        if (re(a)) return a;
        if (le(a)) return {
            u: {
                value: se(a.u.value),
                timestamp: qe(a.u.timestamp, new oe(0, a.u.timestamp.timeline))
            },
            active: a.active
        };
        try {
            return JSON.parse(JSON.stringify(a))
        } catch (b) {}
        return String(a)
    };
    var te = {
        Fi: "app",
        ej: "web"
    };
    var ue = ["sessionStart", "sessionError", "sessionFinish"],
        ve = function(a, b) {
            this.Y = a;
            this.ld = b;
            this.ready = !1;
            this.mb = [];
            this.Tf = function() {};
            this.jg = function() {};
            this.kf = function() {};
            this.sf = function() {};
            this.dd = function() {}
        },
        we = function(a, b) {
            a.Tf = b
        },
        xe = function(a, b) {
            a.jg = b
        },
        ye = function(a, b) {
            a.kf = b
        },
        ze = function(a, b) {
            a.sf = b
        },
        Ae = function(a, b) {
            a.dd = b;
            a.dd(a.mb.length)
        },
        Fe = function(a) {
            for (var b = u("geometryChange impression loaded start firstQuartile midpoint thirdQuartile complete pause resume bufferStart bufferFinish skipped volumeChange playerStateChange adUserInteraction".split(" ")),
                    c = b.next(); !c.done; c = b.next()) a.Y.addEventListener(c.value, function(d) {
                Be(a, d)
            });
            Ce(a.Y, function(d) {
                d.type !== "sessionStart" && Be(a, d)
            }, a.ld);
            Ce(a.Y, function(d) {
                d.type === "sessionStart" && (Be(a, d), De(a), Ee(a))
            }, a.ld)
        },
        Be = function(a, b) {
            a.mb.push(b);
            a.dd(a.mb.length);
            Ee(a)
        },
        Ee = function(a) {
            if (a.ready)
                for (; a.mb.length > 0;) {
                    var b = a.mb.pop();
                    b !== void 0 && (b.type === "geometryChange" ? a.kf(b) : b.type === "impression" ? a.sf(b) : ue.includes(b.type) ? a.Tf(b) : a.jg(b));
                    a.dd(a.mb.length)
                }
        },
        De = function(a) {
            a.ready || (a.ready = !0,
                a.mb.sort(function(b, c) {
                    return c.timestamp - b.timestamp
                }))
        };

    function Ge(a) {
        return N(function(b, c) {
            var d = null,
                e = !1,
                f;
            d = b.subscribe(new M(c, void 0, function(g) {
                f = Wc(a(g, Ge(a)(b)));
                d ? (d.unsubscribe(), d = null, f.subscribe(c)) : e = !0
            }));
            e && (d.unsubscribe(), d = null, f.subscribe(c))
        })
    };

    function He(a, b, c) {
        return function(d, e) {
            var f = c,
                g = b,
                h = 0;
            d.subscribe(new M(e, function(k) {
                var l = h++;
                g = f ? a(g, k, l) : (f = !0, k);
                e.next(g)
            }, void 0, void 0))
        }
    };

    function Ie() {
        var a = B.apply(0, arguments),
            b = dd(a);
        return b ? H(Ie.apply(null, x(a)), rd(b)) : N(function(c, d) {
            yd([c].concat(x(Od(a))))(d)
        })
    }

    function Je() {
        return Ie.apply(null, x(B.apply(0, arguments)))
    };

    function Ke(a) {
        a = a === void 0 ? null : a;
        return N(function(b, c) {
            var d = !1;
            b.subscribe(new M(c, function(e) {
                d = !0;
                c.next(e)
            }, void 0, function() {
                d || c.next(a);
                c.complete()
            }))
        })
    };

    function Le() {
        return N(function(a, b) {
            a.subscribe(new M(b, xc))
        })
    };

    function Me(a) {
        return a <= 0 ? function() {
            return Jc
        } : N(function(b, c) {
            var d = 0;
            b.subscribe(new M(c, function(e) {
                ++d <= a && (c.next(e), a <= d && c.complete())
            }))
        })
    };

    function Ne(a) {
        return N(function(b, c) {
            var d = 0,
                e = !1,
                f = 0;
            b.subscribe(new M(c, function(g) {
                var h = !1,
                    k = function() {
                        c.next(g);
                        var m;
                        (m = l) == null || m.unsubscribe();
                        h || (f--, h = !0, e && !f && c.complete())
                    },
                    l = new M(c, k, void 0, k);
                f++;
                a(g, d++).subscribe(l)
            }, void 0, function() {
                (e = !0, !f) && c.complete()
            }))
        })
    };

    function Oe(a) {
        return N(function(b, c) {
            var d = new Set;
            b.subscribe(new M(c, function(e) {
                var f = a ? a(e) : e;
                d.has(f) || (d.add(f), c.next(e))
            }))
        })
    };

    function S(a) {
        var b = b === void 0 ? Dc : b;
        var c;
        a = (c = a) != null ? c : Pe;
        return N(function(d, e) {
            var f, g = !0;
            d.subscribe(new M(e, function(h) {
                var k = b(h);
                if (g || !a(f, k)) g = !1, f = k, e.next(h)
            }))
        })
    }

    function Pe(a, b) {
        return a === b
    };

    function Qe(a) {
        a = a === void 0 ? Re : a;
        return N(function(b, c) {
            var d = !1;
            b.subscribe(new M(c, function(e) {
                d = !0;
                c.next(e)
            }, void 0, function() {
                return d ? c.complete() : c.error(a())
            }))
        })
    }

    function Re() {
        return new ld
    };

    function Se() {
        var a = B.apply(0, arguments);
        return function(b) {
            return Ed(b, L.apply(null, x(a)))
        }
    };

    function Te(a) {
        return N(function(b, c) {
            b.subscribe(new M(c, function(d) {
                a.call(void 0, d, 0, b) || (c.next(!1), c.complete())
            }, void 0, function() {
                c.next(!0);
                c.complete()
            }))
        })
    };

    function Ue() {
        return N(function(a, b) {
            var c = [];
            a.subscribe(new M(b, function(d) {
                c.push(d);
                1 < c.length && c.shift()
            }, void 0, function() {
                for (; c.length;) b.next(c.shift());
                b.complete();
                c = null
            }))
        })
    };

    function Ve(a, b) {
        var c = arguments.length >= 2;
        return function(d) {
            return d.g(a ? Q(function(e, f) {
                return a(e, f, d)
            }) : Dc, Ue(), c ? Ke(b) : Qe(function() {
                return new ld
            }))
        }
    };

    function We(a) {
        return N(function(b, c) {
            b.subscribe(new M(c, function() {
                return c.next(a)
            }))
        })
    };

    function Xe(a) {
        var b = G(a) ? a : function() {
            return a
        };
        return G() ? N(function(c, d) {
            var e = b();
            (void 0)(e).subscribe(d).add(c.subscribe(e))
        }) : function(c) {
            var d = new od(c, b);
            G(c == null ? void 0 : c.kb) && (d.kb = c.kb);
            d.source = c;
            d.Yf = b;
            return d
        }
    };

    function Ye(a) {
        var b = new hd(a, void 0, void 0);
        return function(c) {
            return Xe(function() {
                return b
            })(c)
        }
    };

    function Ze() {
        var a = a === void 0 ? Infinity : a;
        return a <= 0 ? function() {
            return Jc
        } : N(function(b, c) {
            var d = 0,
                e, f = function() {
                    var g = !1;
                    e = b.subscribe(new M(c, void 0, void 0, function() {
                        ++d < a ? e ? (e.unsubscribe(), e = null, f()) : g = !0 : c.complete()
                    }));
                    g && (e.unsubscribe(), e = null, f())
                };
            f()
        })
    };

    function $e(a, b) {
        return N(He(a, b, arguments.length >= 2))
    };

    function af() {
        return new K
    }

    function bf() {
        return function(a) {
            return nd()(Xe(af)(a))
        }
    };

    function T() {
        var a = B.apply(0, arguments),
            b = ed(a);
        return N(function(c, d) {
            (b ? Ed(a, c, b) : Ed(a, c)).subscribe(d)
        })
    };

    function cf() {
        var a = a === void 0 ? 0 : a;
        return N(function(b, c) {
            c.add(Vd.A(function() {
                return b.subscribe(c)
            }, a))
        })
    };

    function U(a) {
        return N(function(b, c) {
            var d = null,
                e = 0,
                f = !1;
            b.subscribe(new M(c, function(g) {
                var h;
                (h = d) == null || h.unsubscribe();
                h = e++;
                Wc(a(g, h)).subscribe(d = new M(c, function(k) {
                    return c.next(k)
                }, void 0, function() {
                    d = null;
                    f && !d && c.complete()
                }))
            }, void 0, function() {
                (f = !0, !d) && c.complete()
            }))
        })
    };

    function df(a, b) {
        b = b === void 0 ? !1 : b;
        return N(function(c, d) {
            var e = 0;
            c.subscribe(new M(d, function(f) {
                var g = a(f, e++);
                (g || b) && d.next(f);
                !g && d.complete()
            }))
        })
    };

    function ef(a, b, c) {
        var d = G(a) || b || c ? {
            next: a,
            error: b,
            complete: c
        } : a;
        return d ? N(function(e, f) {
            e.subscribe(new M(f, function(g) {
                var h;
                (h = d.next) == null || h.call(d, g);
                f.next(g)
            }, function(g) {
                var h;
                (h = d.error) == null || h.call(d, g);
                f.error(g)
            }, function() {
                var g;
                (g = d.complete) == null || g.call(d);
                f.complete()
            }))
        }) : Dc
    };

    function ff() {
        var a = B.apply(0, arguments),
            b = dd(a);
        return N(function(c, d) {
            for (var e = a.length, f = Array(e), g = a.map(function() {
                    return !1
                }), h = !1, k = {
                    Ua: 0
                }; k.Ua < e; k = {
                    Ua: k.Ua
                }, k.Ua++) {
                var l = a[k.Ua],
                    m = void 0;
                try {
                    m = Wc(l)
                } catch (q) {
                    d.error(q);
                    return
                }
                m.subscribe(new M(d, function(q) {
                    return function(t) {
                        f[q.Ua] = t;
                        h || g[q.Ua] || (g[q.Ua] = !0, (h = g.every(Dc)) && (g = null))
                    }
                }(k), void 0, xc))
            }
            c.subscribe(new M(d, function(q) {
                h && (q = [q].concat(x(f)), d.next(b ? b.apply(null, x(q)) : q))
            }))
        })
    };
    var gf = function(a) {
        this.Y = a
    };
    gf.prototype.F = function(a) {
        return (a == null ? 0 : a.Sb) ? !0 : (a == null ? void 0 : a.ha) === "POST" || (a == null ? 0 : a.eb) || (a == null ? 0 : a.Kc) ? !1 : this.Y.F()
    };
    gf.prototype.ping = function() {
        var a = this,
            b = L.apply(null, x(B.apply(0, arguments))).g(Cd(function(c) {
                return hf(a, c)
            }), Te(function(c) {
                return c
            }), Ye(1));
        b.connect();
        return b
    };
    var hf = function(a, b) {
        var c = new hd(1);
        jf(a.Y, b, function() {
            c.next(!0);
            c.complete()
        }, function() {
            c.next(!1);
            c.complete()
        });
        return c
    };
    gf.prototype.cd = function(a, b, c) {
        this.ping.apply(this, x(B.apply(3, arguments)))
    };

    function kf(a, b) {
        var c = !1;
        return new J(function(d) {
            var e = a.setTimeout(function() {
                c = !0;
                d.next(!0);
                d.complete()
            }, b);
            return function() {
                c || a.clearTimeout(e)
            }
        })
    };
    var lf = function(a) {
        this.Y = a;
        this.timeline = ne
    };
    n = lf.prototype;
    n.setTimeout = function(a, b) {
        return Number(this.Y.setTimeout(function() {
            return a()
        }, b))
    };
    n.clearTimeout = function(a) {
        this.Y.clearTimeout(a)
    };
    n.now = function() {
        return new oe(Date.now(), this.timeline)
    };
    n.interval = function(a, b) {
        var c = this.Ga(a).subscribe(b);
        return function() {
            return void c.unsubscribe()
        }
    };
    n.Ga = function(a) {
        return kf(this, a).g(Ze(), $e(function(b) {
            return b + 1
        }, -1))
    };
    n.ba = function() {
        return !0
    };
    var mf = function(a, b) {
        this.context = a;
        this.Kb = b
    };
    mf.prototype.F = function(a) {
        return this.Kb.F(a)
    };
    mf.prototype.G = function(a, b) {
        if (!this.F(b)) throw new ce;
        return new nf(this.context, this.Kb, b != null ? b : void 0, a)
    };
    var nf = function(a, b, c, d) {
        var e = this;
        this.Kb = b;
        this.properties = c;
        this.url = d;
        this.Vc = !0;
        this.eb = new Map;
        this.body = void 0;
        var f;
        this.method = (f = c == null ? void 0 : c.ha) != null ? f : "GET";
        this.Ag = a.Md().subscribe(function() {
            e.sendNow()
        })
    };
    nf.prototype.deactivate = function() {
        this.Vc = !1
    };
    nf.prototype.sendNow = function() {
        if (this.Vc)
            if (this.Ag.unsubscribe(), this.Kb.F(this.properties)) try {
                if (this.eb.size > 0 || this.body !== void 0) {
                    var a, b;
                    this.Kb.cd((a = this.properties) != null ? a : {}, this.eb, (b = this.body) != null ? b : "", this.url)
                } else this.Kb.ping(this.url);
                this.Vc = !1
            } catch (c) {} else this.Vc = !1
    };
    var pf = function(a, b, c, d, e, f) {
            this.mode = a;
            this.j = b;
            this.setTime = c;
            this.rc = d;
            this.ti = e;
            this.Eg = f;
            this.za = !1;
            this.id = this.mode === 0 ? of (this) : 0
        },
        of = function(a) {
            return a.j.setTimeout(function() {
                qf(a)
            }, a.rc)
        },
        rf = function(a, b) {
            var c = qe(b, a.setTime);
            c >= a.rc ? qf(a) : (a.setTime = b, a.rc -= c)
        },
        qf = function(a) {
            try {
                a.ti(a.setTime.add(a.rc))
            } finally {
                a.za = !0, a.Eg()
            }
        };
    pf.prototype.Ae = function(a, b) {
        this.za || (this.mode === 1 && a === 1 ? rf(this, b) : this.mode === 1 && a === 0 ? (this.mode = a, rf(this, this.j.now()), this.za || (this.id = of (this))) : this.mode === 0 && a === 1 && (this.mode = a, this.clear(), rf(this, b)))
    };
    pf.prototype.clear = function() {
        this.za || this.j.clearTimeout(this.id)
    };
    var sf = function(a) {
        this.Lc = a;
        this.kh = this.mode = 0;
        this.Db = {};
        this.timeline = a.timeline;
        this.jb = a.now()
    };
    n = sf.prototype;
    n.Ae = function(a, b) {
        this.mode = a;
        pe(this.jb, b);
        this.jb = b;
        Object.values(this.Db).forEach(function(c) {
            return void c.Ae(a, b)
        })
    };
    n.now = function() {
        return this.mode === 1 ? this.jb : this.Lc.now()
    };
    n.setTimeout = function(a, b) {
        var c = this,
            d = ++this.kh,
            e = this.mode === 1 ? this.jb : this.Lc.now();
        this.Db[d] = new pf(this.mode, this.Lc, e, b, function(f) {
            var g = c.jb;
            c.mode === 1 && (c.jb = f);
            a();
            c.jb = g
        }, function() {
            delete c.Db[d]
        });
        return d
    };
    n.clearTimeout = function(a) {
        this.Db[a] && (this.Db[a].clear(), delete this.Db[a])
    };
    n.interval = function() {
        throw Error("B");
    };
    n.Ga = function() {
        throw Error("C");
    };
    n.ba = function() {
        return this.Lc.ba()
    };

    function tf(a, b) {
        var c = new sf(a);
        a = b.subscribe(function(d) {
            c.Ae(d.value ? 1 : 0, d.timestamp)
        });
        return {
            j: c,
            pj: a
        }
    };

    function uf(a) {
        var b = Object.assign({}, a);
        delete b.timestamp;
        return {
            timestamp: new oe(a.timestamp, ne),
            value: b
        }
    };

    function vf(a) {
        return a !== void 0 && typeof a.x === "number" && typeof a.y === "number" && typeof a.width === "number" && typeof a.height === "number"
    };
    "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
        "INPUT"
    ]);

    function wf(a) {
        var b = B.apply(1, arguments),
            c = b.length;
        if (!Array.isArray(a) || !Array.isArray(a.raw) || a.length !== a.raw.length || !Bb && a === a.raw || !(Bb && !Cb || zb(a)) || c + 1 !== a.length) throw new TypeError("p");
        if (b.length === 0) return qb(a[0]);
        c = a[0].toLowerCase();
        if (/^data:/.test(c)) throw Error("J");
        if (/^https:\/\//.test(c) || /^\/\//.test(c)) {
            var d = c.indexOf("//") + 2;
            var e = c.indexOf("/", d);
            if (e <= d) throw Error("D");
            d = c.substring(d, e);
            if (!/^[0-9a-z.:-]+$/i.test(d)) throw Error("E");
            if (!/^[^:]*(:[0-9]+)?$/i.test(d)) throw Error("F");
            if (!/(^|\.)[a-z][^.]*$/i.test(d)) throw Error("G");
            d = !0
        } else d = !1;
        if (!d)
            if (/^\//.test(c))
                if (c === "/" || c.length > 1 && c[1] !== "/" && c[1] !== "\\") d = !0;
                else throw Error("I");
        else d = !1;
        if (!(d = d || RegExp("^[^:\\s\\\\/]+/").test(c)))
            if (/^about:blank/.test(c)) {
                if (c !== "about:blank" && !/^about:blank#/.test(c)) throw Error("H");
                d = !0
            } else d = !1;
        if (!d) throw Error("K");
        c = a[0];
        for (d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
        return qb(c)
    };
    var xf = fa(["https://www.googleadservices.com/pagead/managed/js/activeview/", "/reach_worklet.html"]),
        yf = fa(["./reach_worklet.js"]),
        zf = fa(["./reach_worklet.js"]),
        Af = fa(["./reach_worklet.html"]),
        Bf = fa(["./reach_worklet.js"]),
        Cf = fa(["./reach_worklet.js"]);

    function Df(a) {
        var b = {};
        return b[0] = wf(xf, a), b[1] = wf(yf), b[2] = wf(zf), b
    }
    wf(Af);
    wf(Bf);
    wf(Cf);
    var Ff = function(a, b, c, d) {
        c = c === void 0 ? null : c;
        d = d === void 0 ? Df("current") : d;
        Wd.call(this);
        this.Y = a;
        this.ld = b;
        this.Ba = c;
        this.Xf = d;
        this.Wa = null;
        this.se = new hd(3);
        this.se.g(Q(function(e) {
            return e.value.type === "sessionStart"
        }));
        this.ii = this.se.g(Q(function(e) {
            return e.value.type === "sessionFinish"
        }));
        this.tf = new hd(1);
        this.zi = new hd;
        this.lf = new hd(10);
        this.H = new mf(this, new gf(a));
        this.sh = this.Y.F();
        this.j = Ef(this, new lf(this.Y))
    };
    y(Ff, Wd);
    var Gf = function(a) {
        a.Wa !== null && Fe(a.Wa)
    };
    Ff.prototype.validate = function() {
        return this.sh
    };
    var Ef = function(a, b) {
        a.Wa = new ve(a.Y, a.ld);
        var c = new hd;
        we(a.Wa, function(f) {
            f = uf(f);
            c.next({
                timestamp: f.timestamp,
                value: !0
            });
            a.se.next(f)
        });
        ye(a.Wa, function(f) {
            if (f === void 0) var g = !1;
            else {
                g = f.data;
                var h;
                (h = g === void 0) || (h = g.viewport, h = h === void 0 || h !== void 0 && typeof h.width === "number" && typeof h.height === "number");
                h ? (g = g.adView, g = g !== void 0 && typeof g.percentageInView === "number" && (g.geometry === void 0 || vf(g.geometry)) && (g.onScreenGeometry === void 0 || vf(g.onScreenGeometry))) : g = !1
            }
            g ? (f = uf(f), c.next({
                timestamp: f.timestamp,
                value: !0
            }), a.lf.next(f)) : .01 >= Math.random() && (f = "https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=error&name=invalid_geo&context=1092&msg=" + JSON.stringify(f), a.H.G(f).sendNow())
        });
        xe(a.Wa, function(f) {
            f = uf(f);
            c.next({
                timestamp: f.timestamp,
                value: !0
            });
            a.zi.next(f)
        });
        ze(a.Wa, function(f) {
            f = uf(f);
            c.next({
                timestamp: f.timestamp,
                value: !0
            });
            a.tf.next(f)
        });
        var d = 0;
        Ae(a.Wa, function(f) {
            d += f;
            d > 0 && f === 0 && c.next({
                timestamp: a.j.now(),
                value: !1
            })
        });
        var e = c.g(df(function(f) {
            return f.value
        }, !0));
        return tf(b,
            e).j
    };
    da.Object.defineProperties(Ff.prototype, {
        global: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return Hf
            }
        }
    });
    var Hf = {};

    function If(a, b) {
        if (!b) throw Error("L`" + a);
        if (typeof b !== "string" && !(b instanceof String)) throw Error("M`" + a);
        if (b.trim() === "") throw Error("N`" + a);
    }

    function Jf(a) {
        if (!a) throw Error("Q`functionToExecute");
    }

    function Kf(a, b) {
        if (b == null) throw Error("O`" + a);
        if (typeof b !== "number" || isNaN(b)) throw Error("P`" + a);
        if (b < 0) throw Error("R`" + a);
    };

    function Lf() {
        return /\d+\.\d+\.\d+(-.*)?/.test("1.4.10-google_20240110")
    }

    function Mf() {
        for (var a = ["1", "4", "10"], b = ["1", "0", "3"], c = 0; c < 3; c++) {
            var d = parseInt(a[c], 10),
                e = parseInt(b[c], 10);
            if (d > e) break;
            else if (d < e) return !1
        }
        return !0
    };
    var Nf = function(a, b, c, d) {
            this.rf = a;
            this.method = b;
            this.version = c;
            this.args = d
        },
        Of = function(a) {
            return !!a && a.omid_message_guid !== void 0 && a.omid_message_method !== void 0 && a.omid_message_version !== void 0 && typeof a.omid_message_guid === "string" && typeof a.omid_message_method === "string" && typeof a.omid_message_version === "string" && (a.omid_message_args === void 0 || a.omid_message_args !== void 0)
        },
        Pf = function(a) {
            return new Nf(a.omid_message_guid, a.omid_message_method, a.omid_message_version, a.omid_message_args)
        };
    Nf.prototype.Xa = function() {
        var a = {};
        a = (a.omid_message_guid = this.rf, a.omid_message_method = this.method, a.omid_message_version = this.version, a);
        this.args !== void 0 && (a.omid_message_args = this.args);
        return a
    };
    var Qf = function(a) {
        this.jd = a
    };
    Qf.prototype.Xa = function() {
        return JSON.stringify(void 0)
    };

    function Rf(a, b) {
        try {
            return a.frames && !!a.frames[b]
        } catch (c) {
            return !1
        }
    }
    var Sf = function(a) {
            return ["omid_v1_present", "omid_v1_present_web", "omid_v1_present_app"].some(function(b) {
                return Rf(a, b)
            })
        },
        Tf = function(a) {
            for (var b = u(Object.values(te)), c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                var d = {};
                d = (d.app = "omid_v1_present_app", d.web = "omid_v1_present_web", d)[c];
                if (Rf(a, d)) return c
            }
            return null
        };

    function Uf(a, b) {
        return a && (a[b] || (a[b] = {}))
    };

    function Vf() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
            var b = Math.random() * 16 | 0;
            return a === "y" ? (b & 3 | 8).toString(16) : b.toString(16)
        })
    };

    function Wf() {
        var a = B.apply(0, arguments);
        Xf(function() {
            throw new(Function.prototype.bind.apply(Error, [null, "Could not complete the test successfully - "].concat(x(a))));
        }, function() {
            return console.error.apply(console, x(a))
        })
    }

    function Xf(a, b) {
        typeof jasmine !== "undefined" && jasmine ? a() : typeof console !== "undefined" && console && console.error && b()
    };
    var Yf = function() {
        if (typeof omidGlobal !== "undefined" && omidGlobal) return omidGlobal;
        if (typeof global !== "undefined" && global) return global;
        if (typeof window !== "undefined" && window) return window;
        if (typeof globalThis !== "undefined" && globalThis) return globalThis;
        var a = Function("return this")();
        if (a) return a;
        throw Error("S");
    }();
    var Zf = function(a) {
        this.jd = a;
        this.handleExportedMessage = Zf.prototype.Yg.bind(this)
    };
    y(Zf, Qf);
    Zf.prototype.sendMessage = function(a, b) {
        b = b === void 0 ? this.jd : b;
        if (!b) throw Error("T");
        b.handleExportedMessage(a.Xa(), this)
    };
    Zf.prototype.Yg = function(a, b) {
        if (Of(a) && this.onMessage) this.onMessage(Pf(a), b)
    };

    function $f(a) {
        return a != null && typeof a.top !== "undefined" && a.top != null
    }

    function ag(a) {
        if (a === Yf) return !1;
        try {
            if (typeof a.location.hostname === "undefined") return !0
        } catch (b) {
            return !0
        }
        return !1
    }

    function bg() {
        var a;
        typeof a === "undefined" && typeof window !== "undefined" && window && (a = window);
        return $f(a) ? a : Yf
    };
    var cg = function(a, b) {
        this.jd = b = b === void 0 ? Yf : b;
        var c = this;
        a.addEventListener("message", function(d) {
            if (typeof d.data === "object") {
                var e = d.data;
                if (Of(e) && d.source && c.onMessage) c.onMessage(Pf(e), d.source)
            }
        })
    };
    y(cg, Qf);
    cg.prototype.sendMessage = function(a, b) {
        b = b === void 0 ? this.jd : b;
        if (!b) throw Error("T");
        b.postMessage(a.Xa(), "*")
    };
    var dg = ["omid", "v1_VerificationServiceCommunication"],
        eg = ["omidVerificationProperties", "serviceWindow"];

    function fg(a, b) {
        return b.reduce(function(c, d) {
            return c && c[d]
        }, a)
    };
    var gg = function(a) {
        if (!a) {
            a = bg();
            var b = b === void 0 ? Sf : b;
            var c = [],
                d = fg(a, eg);
            d && c.push(d);
            c.push($f(a) ? a.top : Yf);
            a: {
                c = u(c);
                for (var e = c.next(); !e.done; e = c.next()) {
                    b: {
                        d = a;e = e.value;
                        var f = b;
                        if (!ag(e)) try {
                            var g = fg(e, dg);
                            if (g) {
                                var h = new Zf(g);
                                break b
                            }
                        } catch (k) {}
                        h = f(e) ? new cg(d, e) : null
                    }
                    if (d = h) {
                        a = d;
                        break a
                    }
                }
                a = null
            }
        }
        if (this.Wb = a) this.Wb.onMessage = this.Zg.bind(this);
        else if (b = (b = Yf.omid3p) && typeof b.registerSessionObserver === "function" && typeof b.addEventListener === "function" ? b : null) this.oc = b;
        this.bi = this.ci =
            0;
        this.yd = {};
        this.Rd = [];
        this.dc = (b = Yf.omidVerificationProperties) ? b.injectionId : void 0
    };
    gg.prototype.F = function() {
        var a = bg();
        var b = (b = Yf.omidVerificationProperties) && b.injectionSource ? b.injectionSource : void 0;
        return (b || Tf(a) || Tf($f(a) ? a.top : Yf)) !== "web" || this.dc ? !(!this.Wb && !this.oc) : !1
    };
    var Ce = function(a, b, c) {
        Jf(b);
        a.oc ? a.oc.registerSessionObserver(b, c, a.dc) : a.Nb("addSessionListener", b, c, a.dc)
    };
    gg.prototype.addEventListener = function(a, b) {
        If("eventType", a);
        Jf(b);
        this.oc ? this.oc.addEventListener(a, b, this.dc) : this.Nb("addEventListener", b, a, this.dc)
    };
    var jf = function(a, b, c, d) {
            If("url", b);
            Yf.document && Yf.document.createElement ? hg(a, b, c, d) : a.Nb("sendUrl", function(e) {
                e && c ? c() : !e && d && d()
            }, b)
        },
        hg = function(a, b, c, d) {
            var e = Yf.document.createElement("img");
            a.Rd.push(e);
            var f = function(g) {
                var h = a.Rd.indexOf(e);
                h >= 0 && a.Rd.splice(h, 1);
                g && g()
            };
            e.addEventListener("load", f.bind(a, c));
            e.addEventListener("error", f.bind(a, d));
            e.src = b
        };
    gg.prototype.setTimeout = function(a, b) {
        Jf(a);
        Kf("timeInMillis", b);
        if (ig()) return Yf.setTimeout(a, b);
        var c = this.ci++;
        this.Nb("setTimeout", a, c, b);
        return c
    };
    gg.prototype.clearTimeout = function(a) {
        Kf("timeoutId", a);
        ig() ? Yf.clearTimeout(a) : this.Sf("clearTimeout", a)
    };
    gg.prototype.setInterval = function(a, b) {
        Jf(a);
        Kf("timeInMillis", b);
        if (jg()) return Yf.setInterval(a, b);
        var c = this.bi++;
        this.Nb("setInterval", a, c, b);
        return c
    };
    gg.prototype.clearInterval = function(a) {
        Kf("intervalId", a);
        jg() ? Yf.clearInterval(a) : this.Sf("clearInterval", a)
    };
    var ig = function() {
            return typeof Yf.setTimeout === "function" && typeof Yf.clearTimeout === "function"
        },
        jg = function() {
            return typeof Yf.setInterval === "function" && typeof Yf.clearInterval === "function"
        };
    gg.prototype.Zg = function(a) {
        var b = a.method,
            c = a.rf;
        a = a.args;
        if (b === "response" && this.yd[c]) {
            var d = Lf() && Mf() ? a ? a : [] : a && typeof a === "string" ? JSON.parse(a) : [];
            this.yd[c].apply(this, d)
        }
        b === "error" && window.console && Wf(a)
    };
    gg.prototype.Sf = function(a) {
        this.Nb.apply(this, [a, null].concat(x(B.apply(1, arguments))))
    };
    gg.prototype.Nb = function(a, b) {
        var c = B.apply(2, arguments);
        if (this.Wb) {
            var d = Vf();
            b && (this.yd[d] = b);
            var e = "VerificationService." + a;
            c = Lf() && Mf() ? c : JSON.stringify(c);
            this.Wb.sendMessage(new Nf(d, e, "1.4.10-google_20240110", c))
        }
    };
    var kg = void 0;
    if (kg = kg === void 0 ? typeof omidExports === "undefined" ? null : omidExports : kg) {
        var lg = ["OmidVerificationClient"];
        lg.slice(0, lg.length - 1).reduce(Uf, kg)[lg[lg.length - 1]] = gg
    };

    function mg(a, b) {
        return function(c) {
            return new J(function(d) {
                return c.subscribe(function(e) {
                    a.Pb(b, function() {
                        d.next(e)
                    })()
                }, function(e) {
                    a.Pb(b, function() {
                        d.error(e)
                    })()
                }, function() {
                    a.Pb(b, function() {
                        d.complete()
                    })()
                })
            })
        }
    };
    var og = function() {
        for (var a = u(B.apply(0, arguments)), b = a.next(); !b.done; b = a.next())
            if (b = b.value, b.ba()) {
                this.j = b;
                return
            }
        this.j = new ng
    };
    n = og.prototype;
    n.ba = function() {
        return this.j.ba()
    };
    n.now = function() {
        return this.j.now()
    };
    n.setTimeout = function(a, b) {
        return this.j.setTimeout(a, b)
    };
    n.clearTimeout = function(a) {
        this.j.clearTimeout(a)
    };
    n.interval = function(a, b) {
        var c = this.Ga(a).subscribe(b);
        return function() {
            return void c.unsubscribe()
        }
    };
    n.Ga = function(a) {
        return this.j.Ga(a)
    };
    da.Object.defineProperties(og.prototype, {
        timeline: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.j.timeline
            }
        }
    });
    var ng = function() {
        this.timeline = Symbol()
    };
    n = ng.prototype;
    n.ba = function() {
        return !1
    };
    n.now = function() {
        return new oe(0, this.timeline)
    };
    n.setTimeout = function() {
        return 0
    };
    n.clearTimeout = function() {};
    n.interval = function() {
        return function() {}
    };
    n.Ga = function() {
        return Md
    };
    var pg = function(a, b) {
        this.K = a;
        this.B = b
    };
    n = pg.prototype;
    n.setTimeout = function(a, b) {
        return this.K.setTimeout(this.B.Pb(734, a), b)
    };
    n.clearTimeout = function(a) {
        this.K.clearTimeout(a)
    };
    n.interval = function(a, b) {
        var c = this.Ga(a).subscribe(b);
        return function() {
            return void c.unsubscribe()
        }
    };
    n.Ga = function(a) {
        var b = this;
        return new J(function(c) {
            var d = 0,
                e = b.K.setInterval(function() {
                    c.next(d++)
                }, a);
            return function() {
                b.K.clearInterval(e)
            }
        })
    };
    n.ba = function() {
        return !!this.K.clearTimeout && "setTimeout" in this.K && "setInterval" in this.K && !!this.K.clearInterval
    };
    var qg = function(a, b) {
        pg.call(this, a, b);
        this.timeline = ne
    };
    y(qg, pg);
    qg.prototype.now = function() {
        return new oe(this.K.Date.now(), this.timeline)
    };
    qg.prototype.ba = function() {
        return !!this.K.Date && !!this.K.Date.now && pg.prototype.ba.call(this)
    };
    var rg = function(a, b) {
        pg.call(this, a, b);
        this.timeline = me
    };
    y(rg, pg);
    rg.prototype.now = function() {
        return new oe(this.K.performance.now(), this.timeline)
    };
    rg.prototype.ba = function() {
        return !!this.K.performance && !!this.K.performance.now && pg.prototype.ba.call(this)
    };

    function sg(a) {
        a = a.global;
        if (a.fetchLater) return a.fetchLater.bind(a)
    }

    function tg(a) {
        var b, c, d = (b = a.global) == null ? void 0 : (c = b.document) == null ? void 0 : c.createElement("meta");
        if (d) try {
            return d.httpEquiv = "origin-trial", d.content = "AxjhRadLCARYRJawRjMjq4U8V8okQvSnrBIJWdMajuEkN3/DfVAcLcFhMVrUWnOXagwlI8dQD84FwJDGj9ohqAYAAABveyJvcmlnaW4iOiJodHRwczovL2dvb2dsZWFkc2VydmljZXMuY29tOjQ0MyIsImZlYXR1cmUiOiJGZXRjaExhdGVyQVBJIiwiZXhwaXJ5IjoxNzI1NDA3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9", a.global.document.head.append(d), d
        } catch (e) {}
    }
    var vg = function(a) {
            this.context = a;
            ug === void 0 && (ug = tg(a))
        },
        ug;
    vg.prototype.F = function(a) {
        return sg(this.context) !== void 0 && !(a == null || !a.bf) && !wg(this.context) && !(a == null ? 0 : a.Sb) && !(a == null ? 0 : a.eb) && !(a == null ? 0 : a.Kc)
    };
    vg.prototype.G = function(a, b) {
        if (!this.F(b)) throw new ce;
        return new xg(this.context, a, b)
    };
    var xg = function(a, b, c) {
            this.context = a;
            this.properties = c;
            this.sb = b;
            var d;
            this.ha = (d = c == null ? void 0 : c.ha) != null ? d : "GET";
            a = sg(this.context);
            if (a === void 0) throw Error();
            this.fetchLater = a;
            yg(this, this.ic())
        },
        yg = function(a, b) {
            a.Oa && a.Oa.activated || (a.Tb = new AbortController, a.Oa = a.fetchLater(b, {
                method: a.ha,
                cache: "no-cache",
                mode: "no-cors",
                signal: a.Tb.signal,
                activateAfter: 96E4
            }))
        };
    xg.prototype.ic = function() {
        var a = this.sb;
        return (a.slice(-1)[0] === "&" ? a : a + "&") + "flapi=1"
    };
    xg.prototype.deactivate = function() {
        this.Oa && !this.Oa.activated && this.Tb && (this.Tb.abort(), this.Oa = void 0)
    };
    xg.prototype.sendNow = function() {};
    da.Object.defineProperties(xg.prototype, {
        url: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.sb
            },
            set: function(a) {
                this.sb = a;
                a = this.ic();
                this.Oa && this.Oa.activated || !this.Tb || (this.Tb.abort(), this.Oa = void 0);
                yg(this, a)
            }
        },
        method: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.ha
            }
        }
    });
    var zg = function(a) {
        this.context = a
    };
    zg.prototype.F = function() {
        return !wg(this.context) && !!this.context.global.fetch
    };
    zg.prototype.ping = function() {
        var a = this;
        return Ld.apply(null, x(B.apply(0, arguments).map(function(b) {
            return Vc(a.context.global.fetch(b, {
                method: "GET",
                cache: "no-cache",
                keepalive: !0,
                mode: "no-cors"
            })).g(O(function(c) {
                return c.status === 200
            }))
        }))).g(Te(function(b) {
            return b
        }), Ve())
    };
    zg.prototype.cd = function(a, b, c) {
        for (var d = B.apply(3, arguments), e = this, f = new Headers, g = u(b.entries()), h = g.next(); !h.done; h = g.next()) {
            var k = u(h.value);
            h = k.next().value;
            k = k.next().value;
            f.set(h, k)
        }
        var l, m = (l = a.keepAlive) != null ? l : !1;
        Ld.apply(null, x(d.map(function(q) {
            return Vc(e.context.global.fetch(q, Object.assign({}, {
                method: String(a.ha),
                cache: "no-cache"
            }, m ? {
                keepalive: !0
            } : {}, {
                mode: "no-cors",
                headers: f,
                body: c
            }))).g(O(function(t) {
                return t.status === 200
            }))
        }))).g(Te(function(q) {
            return q
        }), Ve())
    };
    var Ag = function(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };
    var Bg = function(a, b) {
        this.x = a !== void 0 ? a : 0;
        this.y = b !== void 0 ? b : 0
    };
    n = Bg.prototype;
    n.clone = function() {
        return new Bg(this.x, this.y)
    };
    n.toString = function() {
        return "(" + this.x + ", " + this.y + ")"
    };
    n.equals = function(a) {
        return a instanceof Bg && (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1)
    };
    n.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    n.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    n.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    n.translate = function(a, b) {
        a instanceof Bg ? (this.x += a.x, this.y += a.y) : (this.x += Number(a), typeof b === "number" && (this.y += b));
        return this
    };
    n.scale = function(a, b) {
        this.x *= a;
        this.y *= typeof b === "number" ? b : a;
        return this
    };
    var Cg = function(a, b) {
        this.width = a;
        this.height = b
    };
    n = Cg.prototype;
    n.clone = function() {
        return new Cg(this.width, this.height)
    };
    n.toString = function() {
        return "(" + this.width + " x " + this.height + ")"
    };
    n.aspectRatio = function() {
        return this.width / this.height
    };
    n.isEmpty = function() {
        return !(this.width * this.height)
    };
    n.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    n.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    n.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    n.scale = function(a, b) {
        this.width *= a;
        this.height *= typeof b === "number" ? b : a;
        return this
    };
    var Dg = Ia(1, !0),
        Eg = Ia(610401301, !1);
    Ia(899588437, !1);
    var Fg = Ia(188588736, !0);
    Ia(641353869, Dg);
    Ia(644029907, !0);
    Ia(1822726157, Dg);
    var Gg = Ia(645172343, Dg);
    Ia(651175828, !0);
    Ia(653718497, Dg);
    Ia(2147483644, !1);
    Ia(2147483645, !0);
    Ia(2147483646, Dg);
    Ia(2147483647, !0);

    function Hg() {
        var a = Ha.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var Ig, Jg = Ha.navigator;
    Ig = Jg ? Jg.userAgentData || null : null;

    function Kg(a) {
        return Eg ? Ig ? Ig.brands.some(function(b) {
            return (b = b.brand) && b.indexOf(a) != -1
        }) : !1 : !1
    }

    function V(a) {
        return Hg().indexOf(a) != -1
    };

    function Lg() {
        return Eg ? !!Ig && Ig.brands.length > 0 : !1
    }

    function Mg() {
        return Lg() ? !1 : V("Opera")
    }

    function Ng() {
        return Lg() ? !1 : V("Trident") || V("MSIE")
    }

    function Og() {
        return V("Firefox") || V("FxiOS")
    }

    function Pg() {
        return V("Safari") && !(Qg() || (Lg() ? 0 : V("Coast")) || Mg() || (Lg() ? 0 : V("Edge")) || (Lg() ? Kg("Microsoft Edge") : V("Edg/")) || (Lg() ? Kg("Opera") : V("OPR")) || Og() || V("Silk") || V("Android"))
    }

    function Qg() {
        return Lg() ? Kg("Chromium") : (V("Chrome") || V("CriOS")) && !(Lg() ? 0 : V("Edge")) || V("Silk")
    }

    function Rg() {
        return V("Android") && !(Qg() || Og() || Mg() || V("Silk"))
    }

    function Sg() {
        var a = Hg();
        if (Ng()) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1]) a = b[1];
            else {
                b = "";
                var c = /MSIE +([\d\.]+)/.exec(a);
                if (c && c[1])
                    if (a = /Trident\/(\d.\d)/.exec(a), c[1] == "7.0")
                        if (a && a[1]) switch (a[1]) {
                            case "4.0":
                                b = "8.0";
                                break;
                            case "5.0":
                                b = "9.0";
                                break;
                            case "6.0":
                                b = "10.0";
                                break;
                            case "7.0":
                                b = "11.0"
                        } else b = "7.0";
                        else b = c[1];
                a = b
            }
        } else a = "";
        return a
    }

    function Tg() {
        if (Lg()) {
            var a = Ig.brands.find(function(b) {
                return b.brand === "Internet Explorer"
            });
            if (!a || !a.version) return NaN;
            a = a.version.split(".")
        } else {
            a = Sg();
            if (a === "") return NaN;
            a = a.split(".")
        }
        return a.length === 0 ? NaN : Number(a[0])
    };

    function Ug() {
        return Eg ? !!Ig && !!Ig.platform : !1
    }

    function Vg() {
        return V("iPhone") && !V("iPod") && !V("iPad")
    }

    function Wg() {
        Vg() || V("iPad") || V("iPod")
    };
    var Xg = function(a) {
        Xg[" "](a);
        return a
    };
    Xg[" "] = function() {};
    var Yg = function(a, b) {
        try {
            return Xg(a[b]), !0
        } catch (c) {}
        return !1
    };
    Mg();
    var Zg = Ng();
    V("Edge");
    var $g = V("Gecko") && !(Xa(Hg(), "WebKit") && !V("Edge")) && !(V("Trident") || V("MSIE")) && !V("Edge"),
        ah = Xa(Hg(), "WebKit") && !V("Edge");
    ah && V("Mobile");
    Ug() || V("Macintosh");
    Ug() || V("Windows");
    (Ug() ? Ig.platform === "Linux" : V("Linux")) || Ug() || V("CrOS");
    Ug() || V("Android");
    Vg();
    V("iPad");
    V("iPod");
    Wg();
    Xa(Hg(), "KaiOS");
    var dh = function(a) {
            return a ? new bh(ch(a)) : Za || (Za = new bh)
        },
        eh = function(a) {
            var b = a.scrollingElement ? a.scrollingElement : ah || a.compatMode != "CSS1Compat" ? a.body || a.documentElement : a.documentElement;
            a = a.parentWindow || a.defaultView;
            return new Bg(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
        },
        fh = function(a, b, c) {
            function d(h) {
                h && b.appendChild(typeof h === "string" ? a.createTextNode(h) : h)
            }
            for (var e = 1; e < c.length; e++) {
                var f = c[e];
                if (!Ka(f) || La(f) && f.nodeType > 0) d(f);
                else {
                    a: {
                        if (f && typeof f.length == "number") {
                            if (La(f)) {
                                var g =
                                    typeof f.item == "function" || typeof f.item == "string";
                                break a
                            }
                            if (typeof f === "function") {
                                g = typeof f.item == "function";
                                break a
                            }
                        }
                        g = !1
                    }
                    Ib(g ? Mb(f) : f, d)
                }
            }
        },
        ch = function(a) {
            E(a, "Node cannot be null or undefined.");
            return a.nodeType == 9 ? a : a.ownerDocument || a.document
        },
        gh = function(a, b) {
            a && (a = a.parentNode);
            for (var c = 0; a;) {
                E(a.name != "parentNode");
                if (b(a)) return a;
                a = a.parentNode;
                c++
            }
            return null
        },
        bh = function(a) {
            this.Zb = a || Ha.document || document
        };
    n = bh.prototype;
    n.getElementsByTagName = function(a, b) {
        return (b || this.Zb).getElementsByTagName(String(a))
    };
    n.createElement = function(a) {
        var b = this.Zb;
        a = String(a);
        b.contentType === "application/xhtml+xml" && (a = a.toLowerCase());
        return b.createElement(a)
    };
    n.createTextNode = function(a) {
        return this.Zb.createTextNode(String(a))
    };
    n.appendChild = function(a, b) {
        E(a != null && b != null, "goog.dom.appendChild expects non-null arguments");
        a.appendChild(b)
    };
    n.append = function(a, b) {
        fh(ch(a), a, arguments)
    };
    n.canHaveChildren = function(a) {
        if (a.nodeType != 1) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    };
    n.removeNode = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    };
    n.isElement = function(a) {
        return La(a) && a.nodeType == 1
    };
    n.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && b.nodeType == 1) return a == b || a.contains(b);
        if (typeof a.compareDocumentPosition != "undefined") return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    var ih = function() {
            return Eg && Ig ? Ig.mobile : !hh() && (V("iPod") || V("iPhone") || V("Android") || V("IEMobile"))
        },
        hh = function() {
            return Eg && Ig ? !Ig.mobile && (V("iPad") || V("Android") || V("Silk")) : V("iPad") || V("Android") && !V("Mobile") || V("Silk")
        };
    var jh = function(a) {
        try {
            return !!a && a.location.href != null && Yg(a, "foo")
        } catch (b) {
            return !1
        }
    };
    var kh = function(a) {
        this.context = a
    };
    kh.prototype.F = function(a) {
        return (a == null ? 0 : a.Sb) || (a == null ? void 0 : a.ha) === "POST" || (a == null ? 0 : a.eb) || (a == null ? 0 : a.Kc) || (a == null ? 0 : a.keepAlive) ? !1 : !wg(this.context)
    };
    kh.prototype.ping = function() {
        var a = this;
        return L(B.apply(0, arguments).map(function(b) {
            try {
                var c = a.context.global;
                c.google_image_requests || (c.google_image_requests = []);
                var d = c.document;
                d = d === void 0 ? document : d;
                var e = d.createElement("img");
                e.src = b;
                c.google_image_requests.push(e);
                return !0
            } catch (f) {
                return !1
            }
        }).every(function(b) {
            return b
        }))
    };
    kh.prototype.cd = function(a, b, c) {
        this.ping.apply(this, x(B.apply(3, arguments)))
    };

    function lh(a) {
        a = a.global;
        if (a.PendingGetBeacon) return a.PendingGetBeacon
    }
    var mh = function(a) {
        this.context = a
    };
    mh.prototype.F = function(a) {
        return nh && !wg(this.context) && lh(this.context) !== void 0 && !(a == null ? 0 : a.Sb) && (a == null ? void 0 : a.ha) !== "POST" && !(a == null ? 0 : a.eb) && !(a == null ? 0 : a.Kc)
    };
    mh.prototype.G = function(a, b) {
        if (!this.F(b)) throw new ce;
        return new oh(this.context, a)
    };
    var nh = !1,
        oh = function(a, b) {
            this.context = a;
            this.sb = b;
            a = lh(this.context);
            if (a === void 0) throw Error();
            this.Fe = new a(this.ic(), {})
        };
    oh.prototype.ic = function() {
        var a = this.sb;
        return (a.slice(-1)[0] === "&" ? a : a + "&") + "pbapi=1"
    };
    oh.prototype.deactivate = function() {
        this.Fe.deactivate()
    };
    oh.prototype.sendNow = function() {
        this.Fe.sendNow()
    };
    da.Object.defineProperties(oh.prototype, {
        url: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.sb
            },
            set: function(a) {
                this.sb = a;
                this.Fe.setURL(this.ic())
            }
        },
        method: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return "GET"
            },
            set: function(a) {
                if (a !== "GET") throw new ce;
            }
        }
    });
    var ph = function(a) {
        this.context = a
    };
    ph.prototype.F = function(a) {
        if ((a == null ? 0 : a.Sb) || (a == null ? void 0 : a.ha) === "GET" || (a == null ? 0 : a.eb) || (a == null ? 0 : a.Kc) || (a == null ? 0 : a.keepAlive)) return !1;
        var b;
        return !wg(this.context) && ((b = this.context.global.navigator) == null ? void 0 : b.sendBeacon) !== void 0
    };
    ph.prototype.ping = function() {
        var a = this;
        return L(B.apply(0, arguments).map(function(b) {
            var c;
            return (c = a.context.global.navigator) == null ? void 0 : c.sendBeacon(b)
        }).every(function(b) {
            return b
        }))
    };
    ph.prototype.cd = function(a, b, c) {
        this.ping.apply(this, x(B.apply(3, arguments)))
    };

    function qh(a) {
        return function(b) {
            return b.g(rh(a, Xe(new K)))
        }
    }

    function W(a, b) {
        return function(c) {
            return c.g(rh(a, Ye(b)))
        }
    }

    function rh(a, b) {
        function c(d) {
            return new J(function(e) {
                return d.subscribe(function(f) {
                    Va(a, function() {
                        return void e.next(f)
                    }, 3)
                }, function(f) {
                    Va(a, function() {
                        return void e.error(f)
                    }, 3)
                }, function() {
                    Va(a, function() {
                        return void e.complete()
                    }, 3)
                })
            })
        }
        return H(c, cf(), b, nd(), c)
    };
    var Y = function(a) {
        this.value = a
    };
    Y.prototype.P = function(a) {
        return L(this.value).g(W(a, 1))
    };
    var sh = new Y(!1);

    function th(a) {
        Ha.setTimeout(function() {
            throw a;
        }, 0)
    };
    Og();
    Vg() || V("iPod");
    V("iPad");
    Rg();
    Qg();
    Pg() && Wg();
    var uh = {},
        vh = null,
        wh = $g || ah || typeof Ha.btoa == "function",
        yh = function(a) {
            var b;
            E(Ka(a), "encodeByteArray takes an array as a parameter");
            b === void 0 && (b = 0);
            xh();
            b = uh[b];
            for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
                var g = a[e],
                    h = a[e + 1],
                    k = a[e + 2],
                    l = b[g >> 2];
                g = b[(g & 3) << 4 | h >> 4];
                h = b[(h & 15) << 2 | k >> 6];
                k = b[k & 63];
                c[f++] = "" + l + g + h + k
            }
            l = 0;
            k = d;
            switch (a.length - e) {
                case 2:
                    l = a[e + 1], k = b[(l & 15) << 2] || d;
                case 1:
                    a = a[e], c[f] = "" + b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
            }
            return c.join("")
        },
        Ah = function(a) {
            var b =
                a.length,
                c = b * 3 / 4;
            c % 3 ? c = Math.floor(c) : "=.".indexOf(a[b - 1]) != -1 && (c = "=.".indexOf(a[b - 2]) != -1 ? c - 2 : c - 1);
            var d = new Uint8Array(c),
                e = 0;
            zh(a, function(f) {
                d[e++] = f
            });
            return e !== c ? d.subarray(0, e) : d
        },
        zh = function(a, b) {
            function c(k) {
                for (; d < a.length;) {
                    var l = a.charAt(d++),
                        m = vh[l];
                    if (m != null) return m;
                    if (!/^[\s\xa0]*$/.test(l)) throw Error("V`" + l);
                }
                return k
            }
            xh();
            for (var d = 0;;) {
                var e = c(-1),
                    f = c(0),
                    g = c(64),
                    h = c(64);
                if (h === 64 && e === -1) break;
                b(e << 2 | f >> 4);
                g != 64 && (b(f << 4 & 240 | g >> 2), h != 64 && b(g << 6 & 192 | h))
            }
        },
        xh = function() {
            if (!vh) {
                vh = {};
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; c < 5; c++) {
                    var d = a.concat(b[c].split(""));
                    uh[c] = d;
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e],
                            g = vh[f];
                        g === void 0 ? vh[f] = e : E(g === e)
                    }
                }
            }
        };

    function Bh(a) {
        var b = Ch(a);
        return b === null ? new Y(null) : b.g(O(function(c) {
            c = c.Xa();
            if (wh) c = Ha.btoa(c);
            else {
                for (var d = [], e = 0, f = 0; f < c.length; f++) {
                    var g = c.charCodeAt(f);
                    if (g > 255) throw Error("U");
                    d[e++] = g
                }
                c = yh(d)
            }
            return c
        }), Me(1), W(a.h, 1))
    };

    function Dh(a) {
        var b = b === void 0 ? {} : b;
        if (typeof Event === "function") return new Event(a, b);
        if (typeof document !== "undefined") {
            var c = document.createEvent("CustomEvent");
            c.initCustomEvent(a, b.bubbles || !1, b.cancelable || !1, b.detail);
            return c
        }
        throw Error();
    };
    var Eh = function(a) {
        this.value = a;
        this.pe = new K
    };
    Eh.prototype.release = function() {
        this.pe.next();
        this.pe.complete();
        this.value = void 0
    };
    da.Object.defineProperties(Eh.prototype, {
        i: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.value
            }
        },
        released: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.pe
            }
        }
    });
    var Fh = ["FRAME", "IMG", "IFRAME"],
        Gh = /^[01](px)?$/,
        Hh = function() {
            this.vh = this.Oe = this.Mf = this.We = !1
        },
        Ih = function() {
            var a = new Hh;
            a.We = !0;
            a.Mf = !0;
            return a
        };

    function Jh(a) {
        return typeof a === "string" ? document.getElementById(a) : a
    }

    function Kh(a, b) {
        b = b === void 0 ? !1 : b;
        if (a.tagName === "IMG") {
            if (a.complete && (!a.naturalWidth || !a.naturalHeight)) return !0;
            var c;
            if (b && ((c = a.style) == null ? void 0 : c.display) === "none") return !0
        }
        var d, e;
        return Gh.test((d = a.getAttribute("width")) != null ? d : "") && Gh.test((e = a.getAttribute("height")) != null ? e : "")
    }

    function Lh(a, b) {
        if (a.tagName === "IMG") return a.naturalWidth && a.naturalHeight ? !0 : !1;
        try {
            if (a.readyState) var c = a.readyState;
            else {
                var d, e;
                c = (d = a.contentWindow) == null ? void 0 : (e = d.document) == null ? void 0 : e.readyState
            }
            return c === "complete"
        } catch (f) {
            return b === void 0 ? !1 : b
        }
    }

    function Mh(a, b) {
        var c = Ih(),
            d;
        c = c === void 0 ? new Hh : c;
        if (a = Jh(a)) {
            d || (d = function(z, C, I) {
                z.addEventListener(C, I)
            });
            for (var e = !1, f = function(z) {
                    e || (e = !0, b(z))
                }, g, h = 2, k = 0; k < Fh.length; ++k)
                if (Fh[k] === a.tagName) {
                    h = 3;
                    g = [a];
                    break
                }
            g || (g = a.querySelectorAll(Fh.join(",")));
            var l = 0,
                m = 0,
                q = !c.Oe,
                t = a = !1;
            k = {};
            for (var r = 0; r < g.length; k = {
                    Wc: void 0
                }, r++) {
                var v = g[r];
                if (!Kh(v, c.Oe))
                    if (k.Wc = v.tagName === "IMG", Lh(v, c.We)) a = !0, k.Wc && (q = !0);
                    else {
                        l++;
                        var w = function(z) {
                            return function(C) {
                                l--;
                                !l && q && f(h);
                                z.Wc && (C = C && C.type === "error",
                                    m--, C || (q = !0), !m && t && q && f(h))
                            }
                        }(k);
                        d(v, "load", w);
                        k.Wc && (m++, d(v, "error", w))
                    }
            }
            m === 0 && (q = !0);
            g = null;
            g = Ha.document.readyState === "complete";
            if (c.vh && g) {
                if (m > 0) {
                    t = !0;
                    return
                }
                h = 5
            } else if (l === 0 && !a && g) h = 5;
            else if (l || !a) {
                d(Ha, "load", function() {
                    !c.Mf || !m && q ? f(4) : t = !0
                });
                return
            }
            f(h)
        }
    };

    function Nh(a, b, c) {
        if (a)
            for (var d = 0; a != null && d < 500 && !c(a); ++d) a = b(a)
    }

    function Oh(a, b) {
        Nh(a, function(c) {
            try {
                return c === c.parent ? null : c.parent
            } catch (d) {}
            return null
        }, b)
    }

    function Ph(a, b) {
        if (a.tagName == "IFRAME") b(a);
        else {
            a = a.querySelectorAll("IFRAME");
            for (var c = 0; c < a.length && !b(a[c]); ++c);
        }
    }

    function Qh(a) {
        return (a = a.ownerDocument) && (a.parentWindow || a.defaultView) || null
    }

    function Rh(a, b, c) {
        try {
            var d = JSON.parse(c.data)
        } catch (g) {}
        if (typeof d === "object" && d && d.type === "creativeLoad") {
            var e = Qh(a);
            if (c.source && e) {
                var f;
                Oh(c.source, function(g) {
                    try {
                        if (g.parent === e) return f = g, !0
                    } catch (h) {}
                });
                f && Ph(a, function(g) {
                    if (g.contentWindow === f) return b(d), !0
                })
            }
        }
    }

    function Sh(a) {
        return typeof a === "string" ? document.getElementById(a) : a
    }
    var Vh = function(a, b) {
        var c = Sh(a);
        if (c)
            if (c.onCreativeLoad) c.onCreativeLoad(b);
            else {
                var d = b ? [b] : [],
                    e = function(f) {
                        for (var g = 0; g < d.length; ++g) try {
                            d[g](1, f)
                        } catch (h) {}
                        d = {
                            push: function(h) {
                                h(1, f)
                            }
                        }
                    };
                c.onCreativeLoad = function(f) {
                    d.push(f)
                };
                c.setAttribute("data-creative-load-listener", "");
                c.addEventListener("creativeLoad", function(f) {
                    e(f.detail)
                });
                Ha.addEventListener("message", function(f) {
                    Rh(c, e, f)
                })
            }
    };
    var Wh = function(a, b) {
            var c = this;
            this.global = a;
            this.ad = b;
            this.Qh = this.document ? Ld(L(!0), Fd(this.document, "visibilitychange")).g(mg(this.ad.B, 748), O(function() {
                return c.document ? c.document.visibilityState : "visible"
            }), S()) : L("visible");
            this.Nh = this.document ? Fd(this.document, "DOMContentLoaded").g(mg(this.ad.B, 739), Me(1)) : L(Dh("DOMContentLoaded"))
        },
        Xh = function(a) {
            return a.document ? a.document.readyState : "complete"
        },
        Yh = function(a) {
            return a.document !== null && a.document.visibilityState !== void 0
        };
    Wh.prototype.querySelector = function(a) {
        return this.document ? this.document.querySelector(a) : null
    };
    Wh.prototype.querySelectorAll = function(a) {
        return this.document ? Mb(this.document.querySelectorAll(a)) : []
    };
    var Zh = function(a) {
        return a.document !== null && typeof a.document.elementFromPoint === "function"
    };
    Wh.prototype.elementFromPoint = function(a, b) {
        if (!this.document || !Zh(this)) return null;
        a = this.document.elementFromPoint(a, b);
        return a === null ? null : new Eh(a)
    };
    var $h = function(a, b, c) {
            c = c === void 0 ? !1 : c;
            if (b.i === void 0 || !a.document) return L(b).g(mg(a.ad.B, 749));
            var d = new hd(1),
                e = function() {
                    d.next(b)
                };
            c || Vh(b.i, e);
            Mh(b.i, e);
            return d.g(mg(a.ad.B, 749), Me(1))
        },
        ai = function(a, b) {
            a = a.document;
            if (!a) return L(!1);
            var c = Ld(L(null), Fd(a, "DOMContentLoaded", {
                    once: !0
                }), Fd(a, "load", {
                    once: !0
                })),
                d = new Eh({
                    document: a,
                    element: b
                });
            return c.g(O(function() {
                if (!d.i) return !1;
                var e = d.i,
                    f = e.document;
                e = e.element;
                var g, h, k = (h = (g = f.body) != null ? g : f.children[0]) != null ? h : f;
                try {
                    k.appendChild(e),
                        d.release()
                } catch (l) {}
                return !d.i
            }), Q(function(e) {
                return e
            }), Me(1), Ke(!1), ef({
                complete: function() {
                    return void d.release()
                }
            }))
        },
        bi = function(a, b, c) {
            var d, e, f;
            return Ca(function(g) {
                if (g.N == 1) {
                    d = a.global.document.createElement("iframe");
                    e = new Promise(function(k) {
                        d.onload = k;
                        d.onerror = k
                    });
                    if (b instanceof pb && b.constructor === pb) var h = b.Nf;
                    else cb("expected object of type TrustedResourceUrl, got '%s' of type %s", b, Ja(b)), h = "type_error:TrustedResourceUrl";
                    d.src = h.toString();
                    return sa(g, md(ai(a, d)), 2)
                }
                if (g.N !=
                    3) {
                    if (!g.ub) return g.return();
                    d.style.display = "none";
                    return sa(g, e, 3)
                }
                f = d.contentWindow;
                if (!f) return g.return();
                f.postMessage(c, "*");
                return g.return(d)
            })
        };
    da.Object.defineProperties(Wh.prototype, {
        document: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return Yg(this.global, "document") ? this.global.document || null : null
            }
        }
    });
    var ci = {
        left: 0,
        top: 0,
        width: 0,
        height: 0
    };

    function di(a, b) {
        return a.left === b.left && a.top === b.top && a.width === b.width && a.height === b.height
    }

    function ei(a, b) {
        return {
            left: Math.max(a.left, b.left),
            top: Math.max(a.top, b.top),
            width: Math.max(0, Math.min(a.left + a.width, b.left + b.width) - Math.max(a.left, b.left)),
            height: Math.max(0, Math.min(a.top + a.height, b.top + b.height) - Math.max(a.top, b.top))
        }
    }

    function fi(a, b) {
        return {
            left: Math.round(a.left + b.x),
            top: Math.round(a.top + b.y),
            width: a.width,
            height: a.height
        }
    };
    var gi = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    n = gi.prototype;
    n.Nd = function() {
        return this.right - this.left
    };
    n.Ld = function() {
        return this.bottom - this.top
    };
    n.clone = function() {
        return new gi(this.top, this.right, this.bottom, this.left)
    };
    n.toString = function() {
        return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
    };
    n.contains = function(a) {
        return this && a ? a instanceof gi ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    n.expand = function(a, b, c, d) {
        La(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += Number(b), this.bottom += Number(c), this.left -= Number(d));
        return this
    };
    n.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    n.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    n.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    n.translate = function(a, b) {
        a instanceof Bg ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (db(a), this.left += a, this.right += a, typeof b === "number" && (this.top += b, this.bottom += b));
        return this
    };
    n.scale = function(a, b) {
        b = typeof b === "number" ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= b;
        this.bottom *= b;
        return this
    };

    function hi(a, b) {
        if (a) throw Error("W");
        b.push(65533)
    }

    function ii(a, b) {
        b = String.fromCharCode.apply(null, b);
        return a == null ? b : a + b
    }
    var ji = void 0,
        ki, li, mi = typeof TextDecoder !== "undefined",
        ni, oi = typeof String.prototype.th === "function",
        pi = typeof TextEncoder !== "undefined";
    var qi = typeof Uint8Array !== "undefined",
        ri = !Zg && typeof btoa === "function";

    function si(a) {
        if (!ri) return yh(a);
        for (var b = "", c = 0, d = a.length - 10240; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
        b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
        return btoa(b)
    }
    var ti = /[-_.]/g,
        ui = {
            "-": "+",
            _: "/",
            ".": "="
        };

    function vi(a) {
        return ui[a] || ""
    }

    function wi(a) {
        if (!ri) return Ah(a);
        var b = a;
        ti.test(b) && (b = b.replace(ti, vi));
        try {
            var c = atob(b)
        } catch (d) {
            throw Error("Y`" + a + "`" + d);
        }
        a = new Uint8Array(c.length);
        for (b = 0; b < c.length; b++) a[b] = c.charCodeAt(b);
        return a
    }
    var xi = {};
    var yi, Ai = function(a, b) {
        if (b !== xi) throw Error("Z");
        this.yc = a;
        if (a != null && a.length === 0) throw Error("$");
        this.dontPassByteStringToStructuredClone = zi
    };
    Ai.prototype.isEmpty = function() {
        return this.yc == null
    };

    function zi() {};

    function Bi(a) {
        kb(a, Ai);
        if (xi !== xi) throw Error("Z");
        var b = a.yc;
        b == null || qi && b != null && b instanceof Uint8Array || (typeof b === "string" ? b = wi(b) : (cb("Cannot coerce to Uint8Array: " + Ja(b)), b = null));
        return (b == null ? b : a.yc = b) || new Uint8Array(0)
    };

    function Ci(a) {
        if (typeof a === "string") return {
            buffer: wi(a),
            gb: !1
        };
        if (Array.isArray(a)) return {
            buffer: new Uint8Array(a),
            gb: !1
        };
        if (a.constructor === Uint8Array) return {
            buffer: a,
            gb: !1
        };
        if (a.constructor === ArrayBuffer) return {
            buffer: new Uint8Array(a),
            gb: !1
        };
        if (a.constructor === Ai) return {
            buffer: Bi(a),
            gb: !0
        };
        if (a instanceof Uint8Array) return {
            buffer: new Uint8Array(a.buffer, a.byteOffset, a.byteLength),
            gb: !1
        };
        throw Error("ja");
    };
    var Di = typeof Uint8Array.prototype.slice === "function",
        Ei = 0,
        Fi = 0,
        Gi;

    function Hi(a) {
        var b = a >>> 0;
        Ei = b;
        Fi = (a - b) / 4294967296 >>> 0
    }

    function Ii(a) {
        if (a < 0) {
            Hi(0 - a);
            var b = u(Ji());
            a = b.next().value;
            b = b.next().value;
            Ei = a >>> 0;
            Fi = b >>> 0
        } else Hi(a)
    }

    function Ki(a) {
        E(a <= 8);
        return Gi || (Gi = new DataView(new ArrayBuffer(8)))
    }

    function Li() {
        var a = Ei,
            b = Fi;
        b >>>= 0;
        a >>>= 0;
        if (b <= 2097151) var c = "" + (4294967296 * b + a);
        else typeof BigInt === "function" ? c = "" + (BigInt(b) << BigInt(32) | BigInt(a)) : (c = (a >>> 24 | b << 8) & 16777215, b = b >> 16 & 65535, a = (a & 16777215) + c * 6777216 + b * 6710656, c += b * 8147497, b *= 2, a >= 1E7 && (c += a / 1E7 >>> 0, a %= 1E7), c >= 1E7 && (b += c / 1E7 >>> 0, c %= 1E7), E(b), c = b + Mi(c) + Mi(a));
        return c
    }

    function Mi(a) {
        a = String(a);
        return "0000000".slice(a.length) + a
    }

    function Ni(a) {
        E(a.length > 0);
        if (a.length < 16) Ii(Number(a));
        else if (typeof BigInt === "function") a = BigInt(a), Ei = Number(a & BigInt(4294967295)) >>> 0, Fi = Number(a >> BigInt(32) & BigInt(4294967295));
        else {
            E(a.length > 0);
            var b = +(a[0] === "-");
            Fi = Ei = 0;
            for (var c = a.length, d = 0 + b, e = (c - b) % 6 + b; e <= c; d = e, e += 6) d = Number(a.slice(d, e)), Fi *= 1E6, Ei = Ei * 1E6 + d, Ei >= 4294967296 && (Fi += Math.trunc(Ei / 4294967296), Fi >>>= 0, Ei >>>= 0);
            b && (b = u(Ji()), a = b.next().value, b = b.next().value, Ei = a, Fi = b)
        }
    }

    function Ji() {
        var a = Ei,
            b = Fi;
        b = ~b;
        a ? a = ~a + 1 : b += 1;
        return [a, b]
    };
    var Oi = function(a, b) {
        this.sa = null;
        this.xd = !1;
        this.I = this.ta = this.La = 0;
        this.cc(a, void 0, void 0, b)
    };
    n = Oi.prototype;
    n.cc = function(a, b, c, d) {
        d = d === void 0 ? {} : d;
        this.Ec = d.Ec === void 0 ? !1 : d.Ec;
        a && (a = Ci(a), this.sa = a.buffer, this.xd = a.gb, this.La = b || 0, this.ta = c !== void 0 ? this.La + c : this.sa.length, this.I = this.La)
    };
    n.hf = function() {
        this.clear();
        Pi.length < 100 && Pi.push(this)
    };
    n.clear = function() {
        this.sa = null;
        this.xd = !1;
        this.I = this.ta = this.La = 0;
        this.Ec = !1
    };
    n.setEnd = function(a) {
        this.ta = a
    };
    n.reset = function() {
        this.I = this.La
    };
    n.U = function() {
        return this.I
    };
    n.advance = function(a) {
        Qi(this, this.I + a)
    };
    var Ri = function(a) {
            var b = 0,
                c = 0,
                d = 0,
                e = a.sa,
                f = a.I;
            do {
                var g = e[f++];
                b |= (g & 127) << d;
                d += 7
            } while (d < 32 && g & 128);
            d > 32 && (c |= (g & 127) >> 4);
            for (d = 3; d < 32 && g & 128; d += 7) g = e[f++], c |= (g & 127) << d;
            Qi(a, f);
            if (g < 128) return (c >>> 0) * 4294967296 + (b >>> 0 >>> 0);
            throw Error("ga");
        },
        Qi = function(a, b) {
            a.I = b;
            if (b > a.ta) throw Error("ha`" + b + "`" + a.ta);
        },
        Si = function(a) {
            var b = a.sa,
                c = a.I,
                d = b[c++],
                e = d & 127;
            if (d & 128 && (d = b[c++], e |= (d & 127) << 7, d & 128 && (d = b[c++], e |= (d & 127) << 14, d & 128 && (d = b[c++], e |= (d & 127) << 21, d & 128 && (d = b[c++], e |= d << 28, d & 128 && b[c++] & 128 &&
                    b[c++] & 128 && b[c++] & 128 && b[c++] & 128 && b[c++] & 128))))) throw Error("ga");
            Qi(a, c);
            return e
        },
        Ti = function(a) {
            return Si(a) >>> 0
        },
        Ui = function(a) {
            return Ri(a)
        },
        Vi = function(a) {
            var b = a.sa,
                c = a.I,
                d = b[c + 0],
                e = b[c + 1],
                f = b[c + 2];
            b = b[c + 3];
            a.advance(4);
            return (d << 0 | e << 8 | f << 16 | b << 24) >>> 0
        },
        Wi = function(a) {
            for (var b = 0, c = a.I, d = c + 10, e = a.sa; c < d;) {
                var f = e[c++];
                b |= f;
                if ((f & 128) === 0) return Qi(a, c), !!(b & 127)
            }
            throw Error("ga");
        },
        Xi = function(a) {
            return Si(a)
        },
        Yi = function(a, b) {
            if (b < 0) throw Error("ia`" + b);
            var c = a.I,
                d = c + b;
            if (d > a.ta) throw Error("ha`" +
                (a.ta - c) + "`" + b);
            a.I = d;
            return c
        };
    Oi.prototype.Pf = function(a, b) {
        var c = Yi(this, a),
            d = E(this.sa);
        if (mi) {
            var e;
            b ? (e = ki) || (e = ki = new TextDecoder("utf-8", {
                fatal: !0
            })) : (e = li) || (e = li = new TextDecoder("utf-8", {
                fatal: !1
            }));
            var f = c + a;
            d = c === 0 && f === d.length ? d : d.subarray(c, f);
            try {
                var g = e.decode(d)
            } catch (m) {
                if (b) {
                    if (ji === void 0) {
                        try {
                            e.decode(new Uint8Array([128]))
                        } catch (q) {}
                        try {
                            e.decode(new Uint8Array([97])), ji = !0
                        } catch (q) {
                            ji = !1
                        }
                    }
                    b = !ji
                }
                b && (ki = void 0);
                throw m;
            }
        } else {
            a = c + a;
            g = [];
            for (var h = null, k, l; c < a;) k = d[c++], k < 128 ? g.push(k) : k < 224 ? c >= a ? hi(b, g) : (l =
                d[c++], k < 194 || (l & 192) !== 128 ? (c--, hi(b, g)) : (k = (k & 31) << 6 | l & 63, E(k >= 128 && k <= 2047), g.push(k))) : k < 240 ? c >= a - 1 ? hi(b, g) : (l = d[c++], (l & 192) !== 128 || k === 224 && l < 160 || k === 237 && l >= 160 || ((e = d[c++]) & 192) !== 128 ? (c--, hi(b, g)) : (k = (k & 15) << 12 | (l & 63) << 6 | e & 63, E(k >= 2048 && k <= 65535), E(k < 55296 || k > 57343), g.push(k))) : k <= 244 ? c >= a - 2 ? hi(b, g) : (l = d[c++], (l & 192) !== 128 || (k << 28) + (l - 144) >> 30 !== 0 || ((e = d[c++]) & 192) !== 128 || ((f = d[c++]) & 192) !== 128 ? (c--, hi(b, g)) : (k = (k & 7) << 18 | (l & 63) << 12 | (e & 63) << 6 | f & 63, E(k >= 65536 && k <= 1114111), k -= 65536, g.push((k >>
                10 & 1023) + 55296, (k & 1023) + 56320))) : hi(b, g), g.length >= 8192 && (h = ii(h, g), g.length = 0);
            E(c === a, "expected " + c + " === " + a);
            g = ii(h, g)
        }
        return g
    };
    Oi.prototype.me = function(a) {
        if (a == 0) return yi || (yi = new Ai(null, xi));
        var b = Yi(this, a);
        if (this.Ec && this.xd) b = this.sa.subarray(b, b + a);
        else {
            var c = E(this.sa);
            a = b + a;
            b = b === a ? new Uint8Array(0) : Di ? c.slice(b, a) : new Uint8Array(c.subarray(b, a))
        }
        kb(b, Uint8Array);
        return b.length == 0 ? yi || (yi = new Ai(null, xi)) : new Ai(b, xi)
    };
    var Pi = [];
    E(!0);
    var $i = function(a, b) {
            if (Pi.length) {
                var c = Pi.pop();
                c.cc(a, void 0, void 0, b);
                a = c
            } else a = new Oi(a, b);
            this.l = a;
            this.Ca = this.l.U();
            this.m = this.wa = this.Gb = -1;
            Zi(this, b)
        },
        Zi = function(a, b) {
            b = b === void 0 ? {} : b;
            a.Gd = b.Gd === void 0 ? !1 : b.Gd
        };
    $i.prototype.hf = function() {
        this.l.clear();
        this.m = this.Gb = this.wa = -1;
        aj.length < 100 && aj.push(this)
    };
    $i.prototype.U = function() {
        return this.l.U()
    };
    $i.prototype.reset = function() {
        this.l.reset();
        this.Ca = this.l.U();
        this.m = this.Gb = this.wa = -1
    };
    $i.prototype.advance = function(a) {
        this.l.advance(a)
    };
    var bj = function(a) {
            var b = a.l;
            if (b.I == b.ta) return !1;
            a.wa !== -1 && (b = a.l.U(), a.l.I = a.Ca, Ti(a.l), a.m === 4 || a.m === 3 ? E(b === a.l.U(), "Expected to not advance the cursor.  Group tags do not have values.") : E(b > a.l.U(), "Expected to read the field, did you forget to call a read or skip method?"), a.l.I = b);
            a.Ca = a.l.U();
            b = Ti(a.l);
            var c = b >>> 3,
                d = b & 7;
            if (!(d >= 0 && d <= 5)) throw Error("ba`" + d + "`" + a.Ca);
            if (c < 1) throw Error("ca`" + c + "`" + a.Ca);
            a.wa = b;
            a.Gb = c;
            a.m = d;
            return !0
        },
        dj = function(a) {
            if (a.m != 2) cb("Invalid wire type for skipDelimitedField"),
                cj(a);
            else {
                var b = Ti(a.l);
                a.l.advance(b)
            }
        },
        cj = function(a) {
            switch (a.m) {
                case 0:
                    a.m != 0 ? (cb("Invalid wire type for skipVarintField"), cj(a)) : Wi(a.l);
                    break;
                case 1:
                    E(a.m === 1);
                    a.l.advance(8);
                    break;
                case 2:
                    dj(a);
                    break;
                case 5:
                    E(a.m === 5);
                    a.l.advance(4);
                    break;
                case 3:
                    var b = a.Gb;
                    do {
                        if (!bj(a)) throw Error("ea");
                        if (a.m == 4) {
                            if (a.Gb != b) throw Error("fa");
                            break
                        }
                        cj(a)
                    } while (1);
                    break;
                default:
                    throw Error("ba`" + a.m + "`" + a.Ca);
            }
        },
        fj = function(a) {
            var b = a.Ca;
            cj(a);
            return ej(a, b)
        },
        ej = function(a, b) {
            if (!a.Gd) {
                var c = a.l.U();
                a.l.I = b;
                b = a.l.me(c - b);
                E(c == a.l.U());
                return b
            }
        },
        gj = function(a, b, c) {
            E(a.m == 2);
            var d = a.l.ta,
                e = Ti(a.l),
                f = a.l.U() + e,
                g = f - d;
            g <= 0 && (a.l.setEnd(f), c(b, a, void 0, void 0, void 0), g = f - a.l.U());
            if (g) throw Error("aa`" + e + "`" + (e - g));
            a.l.I = f;
            a.l.setEnd(d)
        },
        ij = function(a, b) {
            E(a.wa === 11);
            for (var c = 0, d = 0; bj(a) && a.m != 4;) a.wa !== 16 || c ? a.wa !== 26 || d ? cj(a) : c ? (d = -1, gj(a, c, b)) : (d = a.Ca, dj(a)) : (c = hj(a), d && (E(d > 0), a.wa = -1, a.m = -1, a.l.I = d, d = 0));
            if (a.wa !== 12 || !d || !c) throw Error("da");
        },
        jj = function(a) {
            E(a.m == 0);
            return Si(a.l)
        },
        hj = function(a) {
            E(a.m ==
                0);
            return Ti(a.l)
        },
        kj = function(a) {
            E(a.m == 0);
            return Ri(a.l)
        },
        lj = function(a) {
            E(a.m == 0);
            return Si(a.l)
        };
    $i.prototype.Pf = function() {
        return mj(this)
    };
    var mj = function(a) {
        E(a.m == 2);
        var b = Ti(a.l);
        return a.l.Pf(b, !0)
    };
    $i.prototype.me = function() {
        E(this.m == 2);
        var a = Ti(this.l);
        return this.l.me(a)
    };
    var nj = function(a, b, c) {
            E(a.m == 2);
            var d = Ti(a.l);
            for (d = a.l.U() + d; a.l.U() < d;) c.push(b(a.l))
        },
        aj = [];

    function oj(a) {
        return Array.prototype.slice.call(a)
    };
    var pj = typeof Symbol === "function" && typeof Symbol() === "symbol";

    function qj(a, b) {
        return typeof Symbol === "function" && typeof Symbol() === "symbol" ? Symbol(a) : b
    }
    var rj = qj("INTERNAL_ARRAY_STATE"),
        sj = qj("defaultInstance", "0di");
    E(Math.round(Math.log2(Math.max.apply(Math, x(Object.values({
        Vi: 1,
        Ti: 2,
        Si: 4,
        Zi: 8,
        Yi: 16,
        Xi: 32,
        Gi: 64,
        cj: 128,
        Ri: 256,
        Qi: 512,
        Ui: 1024,
        Ki: 2048,
        bj: 4096,
        Li: 8192
    }))))) === 13);

    function tj(a) {
        E((a & 16777215) == a)
    }
    var uj = pj ? function(a, b) {
            tj(b);
            ib(a, "state is only maintained on arrays.");
            a[rj] |= b
        } : function(a, b) {
            tj(b);
            ib(a, "state is only maintained on arrays.");
            a.ma !== void 0 ? a.ma |= b : Object.defineProperties(a, {
                ma: {
                    value: b,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                }
            })
        },
        vj = pj ? function(a, b) {
            tj(b);
            ib(a, "state is only maintained on arrays.");
            a[rj] &= ~b
        } : function(a, b) {
            tj(b);
            ib(a, "state is only maintained on arrays.");
            a.ma !== void 0 && (a.ma &= ~b)
        },
        wj = Object.getOwnPropertyDescriptor(Array.prototype, "uh");
    Object.defineProperties(Array.prototype, {
        uh: {
            get: function() {
                function a(e, f) {
                    e & b && c.push(f)
                }
                var b = Z(this),
                    c = [];
                a(1, "IS_REPEATED_FIELD");
                a(2, "IS_IMMUTABLE_ARRAY");
                a(4, "IS_API_FORMATTED");
                a(4096, "STRING_FORMATTED");
                a(8192, "GBIGINT_FORMATTED");
                a(8, "ONLY_MUTABLE_VALUES");
                a(32, "MUTABLE_REFERENCES_ARE_OWNED");
                a(64, "CONSTRUCTED");
                a(128, "TRANSFERRED");
                a(256, "HAS_SPARSE_OBJECT");
                a(512, "HAS_MESSAGE_ID");
                a(2048, "FROZEN_ARRAY");
                var d = b >> 14 & 1023 || 536870912;
                d !== 536870912 && c.push("pivot: " + d);
                d = c.join(",");
                return wj ?
                    wj.get.call(this) + "|" + d : d
            },
            configurable: !0,
            enumerable: !1
        }
    });
    var Z = pj ? function(a) {
        ib(a, "state is only maintained on arrays.");
        return a[rj] | 0
    } : function(a) {
        ib(a, "state is only maintained on arrays.");
        return a.ma | 0
    };

    function xj(a, b) {
        E(b & 64, "state for messages must be constructed");
        E((b & 5) === 0, "state for messages should not contain repeated field state");
        var c = b >> 14 & 1023 || 536870912,
            d = a.length;
        E(c + yj(b) >= d - 1, "pivot %s is pointing at an index earlier than the last index of the array, length: %s", c, d);
        b & 512 && E(typeof a[0] === "string", "arrays with a message_id bit must have a string in the first position, got: %s", a[0]);
        a = d ? a[d - 1] : void 0;
        E((a != null && typeof a === "object" && a.constructor === Object) === !!(b & 256), "arraystate and array disagree on sparseObject presence")
    }
    var zj = pj ? function(a) {
            ib(a, "state is only maintained on arrays.");
            var b = a[rj];
            xj(a, b);
            return b
        } : function(a) {
            ib(a, "state is only maintained on arrays.");
            var b = a.ma;
            xj(a, b);
            return b
        },
        Aj = pj ? function(a, b) {
            ib(a, "state is only maintained on arrays.");
            tj(b);
            a[rj] = b
        } : function(a, b) {
            ib(a, "state is only maintained on arrays.");
            tj(b);
            a.ma !== void 0 ? a.ma = b : Object.defineProperties(a, {
                ma: {
                    value: b,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                }
            })
        };

    function Bj(a) {
        return !!(Z(a) & 2)
    }

    function Cj(a, b) {
        Aj(b, (a | 0) & -14591)
    }

    function Dj(a, b) {
        Aj(b, (a | 34) & -14557)
    }

    function Ej(a, b) {
        db(b);
        E(b > 0 && b <= 1023 || 536870912 === b);
        return a & -16760833 | (b & 1023) << 14
    }

    function yj(a) {
        return +!!(a & 512) - 1
    };
    var Fj, Gj = {};

    function Hj(a) {
        var b = a.Fh === Gj;
        E(!Fj || b === a instanceof Fj);
        return b
    }
    var Ij = {};

    function Jj(a) {
        var b = !(!a || typeof a !== "object" || a.nj !== Ij);
        E(b === a instanceof Map);
        return b && kb(a, Map).size === 0
    }

    function Kj(a, b) {
        db(a);
        E(a > 0);
        E(b === 0 || b === -1);
        return a + b
    }

    function Lj(a, b) {
        db(a);
        E(a >= 0);
        E(b === 0 || b === -1);
        return a - b
    }

    function Mj(a) {
        return a !== null && typeof a === "object" && !Array.isArray(a) && a.constructor === Object
    }

    function Nj(a, b, c) {
        if (!Array.isArray(a) || a.length) return !1;
        var d = Z(a);
        if (d & 1) return !0;
        if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
        Aj(a, d | 1);
        return !0
    }
    var Oj, Pj = [];
    Aj(Pj, 55);
    Oj = Object.freeze(Pj);

    function Qj(a) {
        if (a & 2) throw Error("ka");
    }

    function Rj() {}
    var Sj;

    function Tj(a, b) {
        ib(a);
        if (b) {
            Sj || (Sj = Symbol("unknownBinaryFields"));
            var c = a[Sj];
            c ? c.push(b) : a[Sj] = [b]
        }
    }

    function Uj(a, b) {
        ib(a);
        ib(b);
        (b = Sj ? ib(b)[Sj] : void 0) && (a[Sj] = oj(b))
    }
    var Vj;

    function Wj(a, b) {
        var c = Z(ib(a));
        b || E(!(c & 2 && c & 4 || c & 2048) || Object.isFrozen(a));
        b = !!(c & 8);
        c = !!(c & 16 && c & 32);
        if (b || c) {
            var d, e, f;
            a.forEach(function(g) {
                Array.isArray(g) ? f = !0 : g && Hj(g) && (Bj(g.s) ? e = !0 : d = !0)
            });
            f && E(!e && !d);
            c && E(!f && !d);
            b && E(!f && !e)
        }
        Xj(a)
    }

    function Xj(a) {
        var b = Z(a),
            c = b & 4,
            d = (4096 & b ? 1 : 0) + (8192 & b ? 1 : 0);
        E(c && d <= 1 || !c && d === 0, "Expected at most 1 type-specific formatting bit, but got " + d + " with state: " + b);
        if (4096 & Z(a))
            for (b = 0; b < a.length; b++) typeof a[b] !== "string" && cb("Unexpected element of type " + typeof a[b] + " in string formatted repeated 64-bit int field")
    }
    var Yj = Object.freeze({}),
        Zj = Object.freeze({}),
        ak = Object.freeze({});

    function bk(a) {
        a = Error(a);
        Yb(a, "warning");
        return a
    };

    function ck(a) {
        if (a == null || typeof a === "number") return a;
        if (a === "NaN" || a === "Infinity" || a === "-Infinity") return Number(a)
    }

    function dk(a) {
        return a.displayName || a.name || "unknown type name"
    }

    function ek(a) {
        if (typeof a !== "boolean") throw Error("la`" + Ja(a) + "`" + a);
        return a
    }

    function fk(a) {
        if (a == null || typeof a === "boolean") return a;
        if (typeof a === "number") return !!a
    }
    var gk = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;

    function hk(a) {
        var b = typeof a;
        return b === "number" ? Number.isFinite(a) : b !== "string" ? !1 : gk.test(a)
    }

    function ik(a) {
        if (!Number.isFinite(a)) throw a = "Expected enum as finite number but got " + Ja(a) + ": " + a, bk(a);
        return a | 0
    }

    function jk(a) {
        return a == null ? a : Number.isFinite(a) ? a | 0 : void 0
    }

    function kk(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return Number.isFinite(a) ? a | 0 : void 0
    }

    function lk(a) {
        return "Expected uint32 as finite number but got " + Ja(a) + ": " + a
    }

    function mk(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return Number.isFinite(a) ? a >>> 0 : void 0
    }

    function nk(a) {
        return a[0] === "-" ? !1 : a.length < 20 ? !0 : a.length === 20 && Number(a.substring(0, 6)) < 184467
    }

    function ok(a) {
        E(a < 0 || !(0 < a && a < Number.MAX_SAFE_INTEGER));
        E(Number.isInteger(a));
        if (a < 0) {
            Ii(a);
            var b = Li();
            a = Number(b);
            return Number.isSafeInteger(a) ? a : b
        }
        if (nk(String(a))) return a;
        Ii(a);
        return Fi * 4294967296 + (Ei >>> 0)
    }

    function pk(a) {
        if (a == null) return a;
        if (hk(a)) {
            if (typeof a === "string") {
                E(hk(a));
                E(!0);
                var b = Math.trunc(Number(a));
                Number.isSafeInteger(b) && b >= 0 ? a = String(b) : (b = a.indexOf("."), b !== -1 && (a = a.substring(0, b)), E(a.indexOf(".") === -1), nk(a) || (Ni(a), a = Li()));
                return a
            }
            if (typeof a === "number") return E(hk(a)), E(!0), a = Math.trunc(a), a >= 0 && Number.isSafeInteger(a) ? a : ok(a)
        }
    }

    function qk(a) {
        return a == null || typeof a === "string" ? a : void 0
    }

    function rk(a, b, c) {
        if (a != null && typeof a === "object" && Hj(a)) return a;
        if (Array.isArray(a)) {
            var d = Z(a),
                e = d;
            e === 0 && (e |= c & 32);
            e |= c & 2;
            e !== d && Aj(a, e);
            return new b(a)
        }
    };
    var sk = function() {
        throw Error("oa");
    };
    if (typeof Symbol != "undefined" && typeof Symbol.hasInstance != "undefined") {
        var tk = function() {
                throw Error("pa");
            },
            uk = {};
        Object.defineProperties(sk, (uk[Symbol.hasInstance] = {
            value: tk,
            configurable: !1,
            writable: !1,
            enumerable: !1
        }, uk));
        E(sk[Symbol.hasInstance] === tk, "defineProperties did not work: was it monkey-patched?")
    };
    var vk;

    function wk(a, b) {
        E(!!(Z(b) & 32));
        vk = b;
        a = new a(b);
        vk = void 0;
        return a
    }
    var xk, yk;

    function zk(a) {
        switch (typeof a) {
            case "boolean":
                return xk || (xk = [0, void 0, !0]);
            case "number":
                return a > 0 ? void 0 : a === 0 ? yk || (yk = [0, void 0]) : [-a, void 0];
            case "string":
                return [0, a];
            case "object":
                return ib(a), E(a.length === 2 || a.length === 3 && a[2] === !0), E(a[0] == null || typeof a[0] === "number" && a[0] >= 0), E(a[1] == null || typeof a[1] === "string"), a
        }
    }

    function Ak(a, b) {
        ib(b);
        return Bk(a, b[0], b[1])
    }

    function Bk(a, b, c) {
        a == null && (a = vk);
        vk = void 0;
        if (a != null)
            for (var d = 0; d < a.length; d++) {
                var e = a[d];
                Array.isArray(e) && Wj(e)
            }
        if (a == null) e = 96, c ? (a = [c], e |= 512) : a = [], b && (e = Ej(e, b));
        else {
            if (!Array.isArray(a)) throw Error("qa`" + JSON.stringify(a) + "`" + Ja(a));
            if (Object.isFrozen(a) || !Object.isExtensible(a) || Object.isSealed(a)) throw Error("ra");
            e = Z(a);
            if (e & 2048) throw Error("sa");
            if (e & 64) return xj(a, e), a;
            e |= 64;
            if (c && (e |= 512, c !== a[0])) throw Error("ta`" + c + "`" + JSON.stringify(a[0]) + "`" + Ja(a[0]));
            a: {
                d = a;c = e;
                if (e = d.length) {
                    var f =
                        e - 1;
                    if (Mj(d[f])) {
                        c |= 256;
                        b = Lj(f, yj(c));
                        if (b >= 1024) throw Error("ua`" + b);
                        e = Ej(c, b);
                        break a
                    }
                }
                if (b) {
                    b = Math.max(b, Lj(e, yj(c)));
                    if (b > 1024) throw Error("va`" + e);
                    e = Ej(c, b)
                } else e = c
            }
        }
        Aj(a, e);
        E(e & 64);
        return a
    };

    function Ck(a, b) {
        return Dk(b)
    }

    function Dk(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (Nj(a, void 0, 0)) return
                    } else {
                        if (qi && a != null && a instanceof Uint8Array) return si(a);
                        if (a instanceof Ai) {
                            var b = a.yc;
                            return b == null ? "" : typeof b === "string" ? b : a.yc = si(b)
                        }
                    }
        }
        return a
    };

    function Ek(a, b, c) {
        var d = oj(a),
            e = d.length,
            f = b & 256 ? d[e - 1] : void 0;
        e += f ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < e; b++) d[b] = c(d[b]);
        if (f) {
            b = d[b] = {};
            for (var g in f) E(!isNaN(g), "should not have non-numeric keys in sparse objects after a constructor is called."), b[g] = c(f[g])
        }
        Uj(d, a);
        return d
    }

    function Fk(a, b, c, d, e) {
        if (a != null) {
            if (Array.isArray(a)) a = Nj(a, void 0, 0) ? void 0 : e && Z(a) & 2 ? a : Gk(a, b, c, d !== void 0, e);
            else if (Mj(a)) {
                var f = {},
                    g;
                for (g in a) f[g] = Fk(a[g], b, c, d, e);
                a = f
            } else a = b(a, d);
            return a
        }
    }

    function Gk(a, b, c, d, e) {
        var f = d || c ? Z(a) : 0;
        d = d ? !!(f & 32) : void 0;
        for (var g = oj(a), h = 0; h < g.length; h++) g[h] = Fk(g[h], b, c, d, e);
        c && (Uj(g, a), c(f, g));
        return g
    }

    function Hk(a) {
        return Hj(a) ? a.toJSON() : Dk(a)
    };

    function Ik(a, b, c) {
        c = c === void 0 ? Dj : c;
        if (a != null) {
            if (qi && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = Z(a);
                if (d & 2) return a;
                Wj(a);
                b && (b = d === 0 || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (Aj(a, (d | 34) & -12293), a) : Gk(a, Ik, d & 4 ? Dj : c, !0, !0)
            }
            Hj(a) && (E(Hj(a)), c = a.s, d = zj(c), a = d & 2 ? a : wk(a.constructor, Jk(c, d, !0)));
            return a
        }
    }

    function Jk(a, b, c) {
        var d = c || b & 2 ? Dj : Cj,
            e = !!(b & 32);
        a = Ek(a, b, function(f) {
            return Ik(f, e, d)
        });
        uj(a, 32 | (c ? 2 : 0));
        return a
    }

    function Kk(a) {
        var b = a.s,
            c = zj(b);
        return c & 2 ? wk(a.constructor, Jk(b, c, !1)) : a
    };
    var Ok = function(a) {
        if (typeof Proxy !== "function") return a;
        var b = Lk(a);
        if (b) return b;
        var c = Error().stack;
        b = new Proxy(a, {
            set: function(d, e, f) {
                Mk(c);
                d[e] = f;
                return !0
            }
        });
        Nk(a, b);
        return b
    };

    function Mk(a) {
        a = Error("Warning: Forbidden array mutation. This will be a hard error in the future, please fix. See go/jspb-api-gotchas#readonly-repeated-fields.\nArray origin at " + a + "\nMutation at " + Error().stack + "\n...");
        Yb(a, "incident");
        th(a)
    }
    var Pk = void 0,
        Qk = void 0,
        Lk = function(a) {
            var b;
            return (b = Pk) == null ? void 0 : b.get(a)
        };

    function Nk(a, b) {
        (Pk || (Pk = new WeakMap)).set(a, b);
        (Qk || (Qk = new WeakMap)).set(b, a)
    };
    var Sk = function(a, b) {
        a = a.s;
        return Rk(a, zj(a), b)
    };

    function Tk(a, b, c, d) {
        b = Kj(d, yj(b));
        if (!(b < 0 || b >= a.length || b >= c)) return a[b]
    }
    var Rk = function(a, b, c, d) {
            if (c === -1) return null;
            var e = b >> 14 & 1023 || 536870912;
            if (c >= e) {
                if (b & 256) return a[a.length - 1][c]
            } else {
                var f = a.length;
                if (d && b & 256 && (d = a[f - 1][c], d != null)) {
                    if (Tk(a, b, e, c)) throw Error("wa`" + c);
                    return d
                }
                return Tk(a, b, e, c)
            }
        },
        Vk = function(a, b, c) {
            var d = a.s,
                e = zj(d);
            Qj(e);
            Uk(d, e, b, c);
            return a
        };

    function Uk(a, b, c, d, e) {
        E(!Mj(d), "Invalid object passed to a setter");
        var f = b >> 14 & 1023 || 536870912;
        if (c >= f || e && !Gg) {
            E(f !== 536870912);
            e = b;
            if (b & 256) var g = a[a.length - 1];
            else {
                if (d == null) return e;
                g = Kj(f, yj(b));
                E(g >= a.length && Number.isInteger(g) && g < 4294967295, "Expected sparseObjectIndex (%s) to be >= %s and a valid array index", g, a.length);
                g = a[g] = {};
                e |= 256
            }
            g[c] = d;
            c < f && (a[Kj(c, yj(b))] = void 0);
            e !== b && Aj(a, e);
            return e
        }
        a[Kj(c, yj(b))] = d;
        b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
        return b
    }
    var Xk = function(a, b, c, d) {
        return Wk(a, b, c, d === void 0 ? !1 : d) !== void 0
    };

    function Yk(a, b) {
        if (!a) return a;
        E(Bj(b) ? Bj(a.s) : !0);
        return a
    }

    function Zk(a, b, c, d) {
        c = c === void 0 ? !1 : c;
        d = d === void 0 ? !1 : d;
        Wj(a, c);
        E(!!(Z(a) & 1));
        c || (d || E(Object.isFrozen(a) || !(Z(a) & 32)), E(Bj(b) ? Object.isFrozen(a) : !0));
        return a
    }

    function $k(a, b, c, d, e) {
        E((d & 3) === d);
        var f = b & 2,
            g = Rk(a, b, c, e);
        Array.isArray(g) || (g = Oj);
        var h = !(d & 2);
        d = !(d & 1);
        var k = !!(b & 32),
            l = Z(g);
        l !== 0 || !k || f || h ? l & 1 || (l |= 1, Aj(g, l)) : (l |= 33, Aj(g, l));
        f ? (a = !1, l & 2 || (uj(g, 34), a = !!(4 & l)), (d || a) && Object.freeze(g)) : (f = !!(2 & l) || !!(2048 & l), d && f ? (g = oj(g), d = 1, k && !h && (d |= 32), Aj(g, d), Uk(a, b, c, g, e)) : h && l & 32 && !f && vj(g, 32));
        return g
    }
    var al = function(a, b) {
        var c = c === void 0 ? !1 : c;
        return Zk($k(a, zj(a), b, 2, c), a, !1, !0)
    };

    function bl(a, b, c, d) {
        var e = void 0;
        a = a.s;
        var f = zj(a),
            g = 2 & f ? 1 : d;
        e = !!e;
        d = cl(a, f, b);
        var h = Z(d);
        Xj(d);
        if (!(4 & h)) {
            if (4 & h || Object.isFrozen(d)) d = oj(d), h = dl(h, f), f = Uk(a, f, b, d);
            for (var k = 0, l = 0; k < d.length; k++) {
                var m = c(d[k]);
                m != null && (d[l++] = m)
            }
            l < k && (d.length = l);
            h = el(h, f);
            h = (h | 20) & -4097;
            h &= -8193;
            Aj(d, h);
            2 & h && Object.freeze(d)
        }
        var q;
        g === 1 || g === 4 && 32 & h ? fl(h) || (b = h, h |= 2, h !== b && Aj(d, h), Object.freeze(d)) : (c = g !== 5 ? !1 : !!(32 & h) || fl(h) || !!Lk(d), (g === 2 || c) && fl(h) && (d = oj(d), h = dl(h, f), h = gl(h, f, e), Aj(d, h), f = Uk(a, f, b, d)), fl(h) ||
            (b = h, h = gl(h, f, e), h !== b && Aj(d, h)), c && (q = Ok(d)));
        Xj(d);
        e || Zk(d, a, !1, e);
        return q || d
    }

    function cl(a, b, c) {
        a = Rk(a, b, c);
        return Array.isArray(a) ? a : Oj
    }

    function el(a, b) {
        a === 0 && (a = dl(a, b));
        return a | 1
    }

    function fl(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    }
    var hl = function(a, b, c, d) {
        var e = zj(a),
            f = Rk(a, e, c, d);
        if (f != null && Hj(f)) return b = Kk(f), b !== f && Uk(a, e, c, b, d), b.s;
        if (Array.isArray(f)) {
            var g = Z(f);
            g = g & 2 ? Jk(f, g, !1) : f;
            g = Ak(g, b)
        } else g = Ak(void 0, b);
        g !== f && Uk(a, e, c, g, d);
        return g
    };

    function Wk(a, b, c, d) {
        a = a.s;
        var e = zj(a),
            f = Rk(a, e, c, d);
        b = rk(f, b, e);
        b !== f && b != null && Uk(a, e, c, b, d);
        return Yk(b, a)
    }
    var jl = function(a) {
            var b = il;
            (a = Wk(a, b, 2, !1)) ? b = a: (a = b[sj]) ? b = a : (a = new b, uj(a.s, 34), b = b[sj] = a);
            return b
        },
        kl = function(a, b, c) {
            var d = d === void 0 ? !1 : d;
            b = Wk(a, b, c, d);
            if (b == null) return b;
            a = a.s;
            var e = zj(a);
            if (!(e & 2)) {
                var f = Kk(b);
                f !== b && (b = f, Uk(a, e, c, b, d))
            }
            return Yk(b, a)
        },
        ml = function(a) {
            var b = ll;
            a = a.s;
            var c = zj(a),
                d;
            var e = !!e;
            d && (d = !(2 & c));
            var f = cl(a, c, 10),
                g = Z(f),
                h = !!(4 & g);
            if (!h) {
                g = el(g, c);
                var k = f,
                    l = c,
                    m;
                (m = !!(2 & g)) && (l |= 2);
                for (var q = !m, t = !0, r = 0, v = 0; r < k.length; r++) {
                    var w = rk(k[r], b, l);
                    if (w instanceof b) {
                        if (!m) {
                            var z =
                                Bj(w.s);
                            q && (q = !z);
                            t && (t = z)
                        }
                        k[v++] = w
                    }
                }
                v < r && (k.length = v);
                g |= 4;
                g = t ? g | 16 : g & -17;
                g = q ? g | 8 : g & -9;
                Aj(k, g);
                m && Object.freeze(k)
            }
            if (d && !(8 & g) && f.length) {
                fl(g) && (f = oj(f), g = dl(g, c), Uk(a, c, 10, f));
                b = f;
                d = g;
                for (c = 0; c < b.length; c++) k = b[c], g = Kk(k), k !== g && (b[c] = g);
                d |= 8;
                d = b.length ? d & -17 : d | 16;
                Aj(b, d);
                g = d
            }
            fl(g) || (b = g, g |= !f.length || 16 & g && (!h || 32 & g) ? 2 : 2048, g !== b && Aj(f, g), Object.freeze(f));
            if (!e) {
                e = f;
                h = !1;
                h = h === void 0 ? !1 : h;
                b = Bj(a);
                d = Bj(e);
                c = Object.isFrozen(e) && d;
                Zk(e, a, h);
                if (b || d) h ? E(d) : E(c);
                E(!!(Z(e) & 4));
                if (d && e.length)
                    for (h =
                        0; h < 1; h++) Yk(e[h], a)
            }
            return f
        };

    function dl(a, b) {
        a = (2 & b ? a | 2 : a & -3) | 32;
        return a &= -2049
    }

    function gl(a, b, c) {
        32 & b && c || (a &= -33);
        return a
    }

    function nl(a, b) {
        return a != null ? a : b
    }
    var ol = function(a, b, c) {
            c = c === void 0 ? !1 : c;
            return nl(fk(Sk(a, b)), c)
        },
        pl = function(a, b) {
            var c = c === void 0 ? 0 : c;
            return nl(kk(Sk(a, b)), c)
        },
        ql = function(a) {
            var b = b === void 0 ? "" : b;
            return nl(qk(Sk(a, 2)), b)
        },
        rl = function(a) {
            a = fk(Sk(a, 5));
            return a == null ? void 0 : a
        },
        sl = function(a, b) {
            a = qk(Sk(a, b));
            return a == null ? void 0 : a
        },
        tl = function(a, b) {
            if (b != null) {
                if (typeof b !== "number") throw bk(lk(b));
                if (!Number.isFinite(b)) throw bk(lk(b));
                b >>>= 0
            }
            Vk(a, 1, b)
        },
        ul = function(a, b, c) {
            if (c != null && typeof c !== "string") throw Error("ma`" + c + "`" +
                Ja(c));
            return Vk(a, b, c)
        };
    if (typeof Proxy !== "undefined") {
        var wl = vl;
        new Proxy({}, {
            getPrototypeOf: wl,
            setPrototypeOf: wl,
            isExtensible: wl,
            preventExtensions: wl,
            getOwnPropertyDescriptor: wl,
            defineProperty: wl,
            has: wl,
            get: wl,
            set: wl,
            deleteProperty: wl,
            apply: wl,
            construct: wl
        })
    }

    function vl() {
        throw Error("xa");
    };
    var xl, yl = function(a, b, c) {
        kb(this, yl, "The message constructor should only be used by subclasses");
        E(this.constructor !== yl, "Message is an abstract class and cannot be directly constructed");
        this.s = Bk(a, b, c);
        this.preventPassingToStructuredClone = Rj
    };
    n = yl.prototype;
    n.toJSON = function() {
        return zl(this)
    };
    n.Xa = function() {
        E(!0);
        try {
            return xl = !0, E(xl && !0), JSON.stringify(zl(this), Ck)
        } finally {
            xl = !1
        }
    };
    n.getExtension = function(a) {
        kb(this, a.Tg);
        var b = kb(this, yl);
        b = a.xb ? a.be ? a.ac(b, a.xb, a.yb, void 0 === Yj ? 2 : 4, !0) : a.ac(b, a.xb, a.yb, !0) : a.be ? a.ac(b, a.yb, void 0 === Yj ? 2 : 4, !0) : a.ac(b, a.yb, a.defaultValue, !0);
        return a.lj && b == null ? a.defaultValue : b
    };
    n.hasExtension = function(a) {
        E(!a.be, "repeated extensions don't support hasExtension");
        if (a.xb) a = Xk(this, a.xb, a.yb, !0);
        else {
            E(!a.be, "repeated extensions don't support getExtensionOrUndefined");
            kb(this, a.Tg);
            var b = kb(this, yl);
            a = a.xb ? a.ac(b, a.xb, a.yb, !0) : a.ac(b, a.yb, null, !0);
            a = (a === null ? void 0 : a) !== void 0
        }
        return a
    };
    n.clone = function() {
        var a = kb(this, yl);
        E(Hj(a));
        var b = a.s,
            c = zj(b);
        return wk(a.constructor, Jk(b, c, !1))
    };
    n.gb = function() {
        return Bj(this.s)
    };
    Fj = yl;
    yl.prototype.Fh = Gj;
    yl.prototype.toString = function() {
        try {
            return xl = !0, zl(this).toString()
        } finally {
            xl = !1
        }
    };

    function zl(a) {
        if (xl) var b = a.s;
        else b = a.s, ib(b), b = Gk(b, Hk, void 0, void 0, !1);
        var c = !xl;
        var d = Fg ? void 0 : a.constructor.fd;
        var e = zj(c ? a.s : b);
        if (a = b.length) {
            var f = b[a - 1],
                g = Mj(f);
            g ? a-- : f = void 0;
            var h = yj(e),
                k = Lj(a, h),
                l = (e = Gg && !(e & 512) && k !== k) ? Array.prototype.slice.call(b, 0, a) : b;
            if (g || e) {
                b: {
                    var m = l;
                    var q = f;g = {};
                    var t = !1;
                    if (e)
                        for (var r = Math.max(0, k + h); r < m.length; r++) {
                            var v = m[r],
                                w = Lj(r, h);
                            v == null || Nj(v, d, w) || Jj(v) || (m[r] = void 0, g[w] = v, t = !0)
                        }
                    if (q)
                        for (var z in q)
                            if (r = +z, isNaN(r)) g[z] = q[z];
                            else if (v = q[z], Array.isArray(v) &&
                        (Nj(v, d, +z) || Jj(v)) && (v = null), v == null && (t = !0), e && r < k) {
                        t = !0;
                        v = Kj(r, h);
                        for (w = m.length; w <= v; w++) m.push(void 0);
                        m[v] = q[r]
                    } else v != null && (g[z] = v);
                    if (t) {
                        for (var C in g) {
                            q = g;
                            break b
                        }
                        q = null
                    }
                }
                m = q == null ? f != null : q !== f
            }
            e && (a = l.length);
            for (; a > 0; a--) {
                C = a - 1;
                z = l[C];
                C = Lj(C, h);
                if (z != null && !Nj(z, d, C) && !Jj(z)) break;
                var I = !0
            }
            if (l !== b || m || I) {
                if (!e && !c) l = Array.prototype.slice.call(l, 0, a);
                else if (I || m || q) l.length = a;
                q && l.push(q)
            }
            I = l
        } else I = b;
        return I
    };
    var Al = function(a, b) {
            this.wh = a >>> 0;
            this.eh = b >>> 0
        },
        Cl = function(a) {
            if (!a) return Bl || (Bl = new Al(0, 0));
            if (!/^\d+$/.test(a)) return null;
            Ni(a);
            return new Al(Ei, Fi)
        },
        Bl;
    var Dl = function() {
        this.C = []
    };
    Dl.prototype.length = function() {
        return this.C.length
    };
    Dl.prototype.end = function() {
        var a = this.C;
        this.C = [];
        return a
    };
    Dl.prototype.nd = function(a, b) {
        E(a == Math.floor(a));
        E(b == Math.floor(b));
        E(a >= 0 && a < 4294967296);
        for (E(b >= 0 && b < 4294967296); b > 0 || a > 127;) this.C.push(a & 127 | 128), a = (a >>> 7 | b << 25) >>> 0, b >>>= 7;
        this.C.push(a)
    };
    var El = function(a, b) {
            E(b == Math.floor(b));
            for (E(b >= 0 && b < 4294967296); b > 127;) a.C.push(b & 127 | 128), b >>>= 7;
            a.C.push(b)
        },
        Fl = function(a, b) {
            E(b == Math.floor(b));
            E(b >= -2147483648 && b < 2147483648);
            if (b >= 0) El(a, b);
            else {
                for (var c = 0; c < 9; c++) a.C.push(b & 127 | 128), b >>= 7;
                a.C.push(1)
            }
        };
    n = Dl.prototype;
    n.tb = function(a) {
        E(a == Math.floor(a));
        E(a >= 0 && a < 4294967296);
        this.C.push(a >>> 0 & 255);
        this.C.push(a >>> 8 & 255);
        this.C.push(a >>> 16 & 255);
        this.C.push(a >>> 24 & 255)
    };
    n.ng = function(a) {
        E(a == Math.floor(a));
        E(a >= 0 && a < 1.8446744073709552E19);
        Hi(a);
        this.tb(Ei);
        this.tb(Fi)
    };
    n.mg = function(a) {
        E(a == Math.floor(a));
        E(a >= -2147483648 && a < 2147483648);
        this.C.push(a >>> 0 & 255);
        this.C.push(a >>> 8 & 255);
        this.C.push(a >>> 16 & 255);
        this.C.push(a >>> 24 & 255)
    };
    n.Je = function(a) {
        E(a == Infinity || a == -Infinity || isNaN(a) || typeof a === "number" && a >= -3.4028234663852886E38 && a <= 3.4028234663852886E38);
        var b = Ki(4);
        b.setFloat32(0, +a, !0);
        Fi = 0;
        Ei = b.getUint32(0, !0);
        this.tb(Ei)
    };
    n.He = function(a) {
        E(typeof a === "number" || a === "Infinity" || a === "-Infinity" || a === "NaN");
        var b = Ki(8);
        b.setFloat64(0, +a, !0);
        Ei = b.getUint32(0, !0);
        Fi = b.getUint32(4, !0);
        this.tb(Ei);
        this.tb(Fi)
    };
    n.Ge = function(a) {
        E(typeof a === "boolean" || typeof a === "number");
        this.C.push(a ? 1 : 0)
    };
    n.Ie = function(a) {
        E(a == Math.floor(a));
        E(a >= -2147483648 && a < 2147483648);
        Fl(this, a)
    };
    var Gl = function() {
            this.wd = [];
            this.rb = 0;
            this.J = new Dl
        },
        Hl = function(a, b) {
            b.length !== 0 && (a.wd.push(b), a.rb += b.length)
        },
        Jl = function(a, b) {
            Il(a, b, 2);
            b = a.J.end();
            Hl(a, b);
            b.push(a.rb);
            return b
        },
        Kl = function(a, b) {
            var c = b.pop();
            c = a.rb + a.J.length() - c;
            for (E(c >= 0); c > 127;) b.push(c & 127 | 128), c >>>= 7, a.rb++;
            b.push(c);
            a.rb++
        },
        Il = function(a, b, c) {
            E(b >= 1 && b == Math.floor(b));
            El(a.J, b * 8 + c)
        },
        Ll = function(a, b, c) {
            c != null && (Il(a, b, 0), typeof c === "number" ? (a = a.J, E(c == Math.floor(c)), E(c >= 0 && c < 1.8446744073709552E19), Ii(c), a.nd(Ei,
                Fi)) : (c = Cl(c), a.J.nd(c.wh, c.eh)))
        };
    n = Gl.prototype;
    n.mg = function(a, b) {
        b != null && (Ml(a, b, b >= -2147483648 && b < 2147483648), b != null && (Nl(a, b), Il(this, a, 0), Fl(this.J, b)))
    };
    n.tb = function(a, b) {
        b != null && (Ml(a, b, b >= 0 && b < 4294967296), b != null && (Il(this, a, 0), El(this.J, b)))
    };
    n.ng = function(a, b) {
        b != null && (Ml(a, b, typeof b === "string" && Cl(b) || typeof b === "number" && b >= 0 && b < 1.8446744073709552E19), Ll(this, a, b))
    };
    n.Je = function(a, b) {
        b != null && (Il(this, a, 5), this.J.Je(b))
    };
    n.He = function(a, b) {
        b != null && (Il(this, a, 1), this.J.He(b))
    };
    n.Ge = function(a, b) {
        b != null && (Ml(a, b, typeof b === "boolean" || typeof b === "number"), Il(this, a, 0), this.J.Ge(b))
    };
    n.Ie = function(a, b) {
        b != null && (b = parseInt(b, 10), Nl(a, b), Il(this, a, 0), Fl(this.J, b))
    };
    n.nd = function(a, b) {
        Il(this, a, 0);
        this.J.nd(b)
    };

    function Nl(a, b) {
        Ml(a, b, b === Math.floor(b));
        Ml(a, b, b >= -2147483648 && b < 2147483648)
    }

    function Ml(a, b, c) {
        c || cb("for [" + b + "] at [" + a + "]")
    };
    var Ol = function(a, b, c, d) {
        this.od = a;
        this.pd = b;
        this.pg = c;
        this.og = d
    };

    function Pl(a) {
        return Array.isArray(a) ? a[0] instanceof Ol ? (E(a.length === 2), Ql(a[1]), a) : [Rl, Ql(a)] : [kb(a, Ol), void 0]
    }
    var Ul = function(a, b, c) {
            ib(a);
            for (var d = c.Nc, e = {}; bj(b) && b.m != 4; e = {
                    ze: void 0
                })
                if (b.wa === 11) {
                    var f = b.Ca;
                    e.ze = !1;
                    ij(b, function(g) {
                        return function(h, k) {
                            var l = c[h];
                            if (!l) {
                                var m = d[h];
                                if (m) {
                                    l = Ql(m);
                                    var q = Sl(l),
                                        t = Tl(l).lb;
                                    l = c[h] = function(r, v, w) {
                                        return q(hl(v, t, w, !0), r)
                                    }
                                }
                            }
                            l ? l(k, a, h) : (g.ze = !0, k.l.I = k.l.ta)
                        }
                    }(e));
                    e.ze && Tj(a, ej(b, f))
                } else Tj(a, fj(b))
        },
        Zl = function(a, b) {
            return function(c, d, e) {
                d = Yl(d, a);
                d != null && (Il(c, 1, 3), Il(c, 2, 0), Fl(c.J, e), e = Jl(c, 3), b(d, c), Kl(c, e), Il(c, 1, 4))
            }
        };

    function $l(a, b, c) {
        if (Array.isArray(b)) {
            var d = Z(b);
            if (d & 4) return b;
            for (var e = 0, f = 0; e < b.length; e++) {
                var g = a(b[e]);
                g != null && (b[f++] = g)
            }
            f < e && (b.length = f);
            c && (Aj(b, (d | 5) & -12289), d & 2 && Object.freeze(b));
            return b
        }
    }

    function Yl(a, b) {
        return a instanceof yl ? a.s : Array.isArray(a) ? Ak(a, b) : void 0
    }
    var am = Symbol("deserializeBinaryFromReaderCache");

    function Sl(a) {
        var b = a[am];
        if (!b) {
            var c = bm(a),
                d = Tl(a),
                e = d.Ye;
            b = e ? function(f, g) {
                return e(f, g, d)
            } : function(f, g) {
                for (; bj(g) && g.m != 4;) {
                    var h = g.Gb,
                        k = d[h];
                    if (!k) {
                        var l = d.Nc;
                        l && (l = l[h]) && (k = d[h] = cm(l))
                    }
                    k && k(g, f, h) || Tj(f, fj(g))
                }
                c === dm || c === em || c.Rh || (f[Vj || (Vj = Symbol("JSPB_COMPARISON_TYPE_INFO"))] = c)
            };
            a[am] = b
        }
        return b
    }

    function cm(a) {
        a = Pl(a);
        var b = kb(a[0], Ol).od;
        if (a = a[1]) {
            Ql(a);
            var c = Sl(a),
                d = Tl(E(a)).lb;
            return function(e, f, g) {
                return b(e, f, g, d, c)
            }
        }
        return b
    }
    var fm = function() {},
        dm, em, gm = Symbol("comparisonTypeInfoCache");

    function hm(a, b, c) {
        var d = c[1];
        if (d) {
            var e = d[gm];
            var f = e ? e.lb : E(zk(d[0]));
            a[b] = e != null ? e : d
        }
        f && f === xk ? (a = a.Ff || (a.Ff = new Set), kb(a, Set).add(b)) : c[0] && (a = a.Qf || (a.Qf = new Set), kb(a, Set).add(b))
    }

    function im(a, b) {
        return [a.pg, !b || b[0] > 0 ? void 0 : b]
    }

    function bm(a) {
        var b = a[gm];
        if (b) return b;
        b = jm(a, a[gm] = new fm, im, im, hm);
        if (!b.Nc && !b.Qf && !b.Ff) {
            var c = !0,
                d;
            for (d in b) isNaN(d) || (c = !1);
            c ? (E(zk(a[0])) === xk ? em ? b = em : (b = new fm, b.lb = ib(zk(!0)), b = em = b) : b = dm || (dm = new fm), b = a[gm] = b) : b.Rh = !0
        }
        return b
    }

    function Ql(a) {
        ib(a);
        var b;
        if (!(b = km in a || lm in a) && (b = a.length > 0)) {
            b = a[0];
            var c = zk(b);
            c != null && c !== b && (a[0] = c);
            b = c != null
        }
        E(b);
        return a
    }

    function mm(a, b, c) {
        a[b] = c
    }

    function nm(a) {
        return Array.isArray(a) && typeof a[0] === "number" && a[0] > 0
    }

    function jm(a, b, c, d, e) {
        e = e === void 0 ? mm : e;
        b.lb = E(zk(a[0]));
        var f = 0,
            g = a[++f];
        g && g.constructor === Object && (b.Nc = g, g = a[++f], typeof g === "function" && (b.Ye = g, b.Ef = fb(a[++f]), E(b.Ye === Ul), E(b.Ef === Zl), g = a[++f]));
        for (var h = {}; nm(g);) {
            for (var k = 0; k < g.length; k++) h[g[k]] = g;
            g = a[++f]
        }
        for (k = 1; g !== void 0;) {
            typeof g === "number" && (E(g > 0), k += g, g = a[++f]);
            var l = void 0;
            if (g instanceof Ol) var m = g;
            else m = om, f--;
            if (m.og) {
                g = a[++f];
                l = a;
                var q = f;
                typeof g == "function" && (E(g.length === 0), g = g(), l[q] = g);
                Ql(g);
                l = g
            }
            g = a[++f];
            q = k + 1;
            typeof g ===
                "number" && g < 0 && (q -= g, g = a[++f]);
            for (; k < q; k++) {
                var t = h[k];
                e(b, k, l ? d(m, l, t) : c(m, t))
            }
        }
        return b
    }
    var pm = Symbol("serializeBinaryToWriterCache");

    function qm(a) {
        var b = a[pm];
        if (!b) {
            var c = rm(a);
            b = function(d, e) {
                return sm(d, e, c)
            };
            a[pm] = b
        }
        return b
    }
    var lm = Symbol("serializerFnCache");

    function tm(a) {
        return a.pd
    }

    function um(a, b) {
        var c, d, e = a.pd;
        return function(f, g, h) {
            return e(f, g, h, d || (d = rm(b).lb), c || (c = qm(b)))
        }
    }

    function rm(a) {
        var b = a[lm];
        if (b) return b;
        b = jm(a, a[lm] = {}, tm, um);
        vm(a);
        return b
    }
    var km = Symbol("deserializerFnCache");

    function wm(a, b) {
        var c = a.od;
        return b ? function(d, e, f) {
            return c(d, e, f, b)
        } : c
    }

    function xm(a, b, c) {
        var d = a.od,
            e, f;
        return function(g, h, k) {
            return d(g, h, k, f || (f = Tl(b).lb), e || (e = Sl(b)), c)
        }
    }

    function Tl(a) {
        var b = a[km];
        if (b) return b;
        bm(a);
        b = jm(a, a[km] = {}, wm, xm);
        vm(a);
        return b
    }

    function vm(a) {
        km in a && gm in a && lm in a && (a.length = 0)
    }

    function ym(a, b) {
        var c = a[b];
        if (c) return c;
        if (c = a.Nc)
            if (c = c[b]) {
                c = Pl(c);
                var d = kb(c[0], Ol).pd;
                if (c = c[1]) {
                    Ql(c);
                    var e = qm(c),
                        f = rm(c).lb;
                    c = (c = a.Ef) ? c(f, e) : function(g, h, k) {
                        return d(g, h, k, f, e)
                    }
                } else c = d;
                return a[b] = c
            }
    }

    function sm(a, b, c) {
        for (var d = zj(a), e = yj(d), f = a.length, g = f + (d & 256 ? -1 : 0), h = d & 512 ? 1 : 0; h < g; h++) {
            var k = a[h];
            if (k != null) {
                var l = Lj(h, e),
                    m = ym(c, l);
                m && m(b, k, l)
            }
        }
        if (d & 256) {
            d = a[f - 1];
            for (var q in d) e = +q, Number.isNaN(e) || (f = d[q], f != null && (g = ym(c, e)) && g(b, f, e))
        }
        if (a = Sj ? ib(a)[Sj] : void 0)
            for (Hl(b, b.J.end()), c = 0; c < a.length; c++) Hl(b, Bi(a[c]))
    }

    function zm(a, b) {
        return new Ol(a, b, !1, !1)
    }

    function Am(a, b) {
        return new Ol(a, b, !0, !1)
    }

    function Bm(a, b, c) {
        Uk(a, zj(a), b, c)
    }

    function Cm(a, b, c, d, e) {
        b = Yl(b, d);
        b != null && (c = Jl(a, c), e(b, a), Kl(a, c))
    }
    var Dm = zm(function(a, b, c) {
            if (a.m !== 1) return !1;
            E(a.m == 1);
            var d = a.l;
            a = Vi(d);
            var e = Vi(d);
            d = (e >> 31) * 2 + 1;
            var f = e >>> 20 & 2047;
            a = 4294967296 * (e & 1048575) + a;
            Bm(b, c, f == 2047 ? a ? NaN : d * Infinity : f == 0 ? d * Math.pow(2, -1074) * a : d * Math.pow(2, f - 1075) * (a + 4503599627370496));
            return !0
        }, function(a, b, c) {
            a.He(c, ck(b))
        }),
        Em = zm(function(a, b, c) {
                if (a.m !== 5) return !1;
                E(a.m == 5);
                var d = Vi(a.l);
                a = (d >> 31) * 2 + 1;
                var e = d >>> 23 & 255;
                d &= 8388607;
                Bm(b, c, e == 255 ? d ? NaN : a * Infinity : e == 0 ? a * Math.pow(2, -149) * d : a * Math.pow(2, e - 150) * (d + Math.pow(2, 23)));
                return !0
            },
            function(a, b, c) {
                a.Je(c, ck(b))
            }),
        Fm = zm(function(a, b, c) {
            if (a.m !== 0) return !1;
            Bm(b, c, kj(a));
            return !0
        }, function(a, b, c) {
            a.ng(c, pk(b))
        }),
        Gm = Am(function(a, b, c) {
            if (a.m !== 0 && a.m !== 2) return !1;
            b = al(b, c);
            a.m == 2 ? nj(a, Ui, b) : b.push(kj(a));
            return !0
        }, function(a, b, c) {
            b = $l(pk, b, !1);
            if (b != null)
                for (var d = 0; d < b.length; d++) Ll(a, c, b[d])
        }),
        Hm = zm(function(a, b, c) {
            if (a.m !== 0) return !1;
            Bm(b, c, jj(a));
            return !0
        }, function(a, b, c) {
            a.mg(c, kk(b))
        }),
        Im = Am(function(a, b, c) {
            if (a.m !== 0 && a.m !== 2) return !1;
            b = al(b, c);
            a.m == 2 ? nj(a, Si, b) : b.push(jj(a));
            return !0
        }, function(a, b, c) {
            b = $l(kk, b, !0);
            if (b != null)
                for (var d = 0; d < b.length; d++) {
                    var e = a,
                        f = c,
                        g = b[d];
                    g != null && (Nl(f, g), Il(e, f, 0), Fl(e.J, g))
                }
        }),
        Jm = zm(function(a, b, c) {
            if (a.m !== 0) return !1;
            E(a.m == 0);
            a = Wi(a.l);
            Bm(b, c, a);
            return !0
        }, function(a, b, c) {
            a.Ge(c, fk(b))
        }),
        Km = zm(function(a, b, c) {
            if (a.m !== 2) return !1;
            Bm(b, c, mj(a));
            return !0
        }, function(a, b, c) {
            b = qk(b);
            if (b != null) {
                var d = !0;
                d = d === void 0 ? !1 : d;
                eb(b);
                if (pi) {
                    if (d && (oi ? !b.th() : /(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(b))) throw Error("X");
                    b = (ni || (ni = new TextEncoder)).encode(b)
                } else {
                    for (var e = 0, f = new Uint8Array(3 * b.length), g = 0; g < b.length; g++) {
                        var h = b.charCodeAt(g);
                        if (h < 128) f[e++] = h;
                        else {
                            if (h < 2048) f[e++] = h >> 6 | 192;
                            else {
                                E(h < 65536);
                                if (h >= 55296 && h <= 57343) {
                                    if (h <= 56319 && g < b.length) {
                                        var k = b.charCodeAt(++g);
                                        if (k >= 56320 && k <= 57343) {
                                            h = (h - 55296) * 1024 + k - 56320 + 65536;
                                            f[e++] = h >> 18 | 240;
                                            f[e++] = h >> 12 & 63 | 128;
                                            f[e++] = h >> 6 & 63 | 128;
                                            f[e++] = h & 63 | 128;
                                            continue
                                        } else g--
                                    }
                                    if (d) throw Error("X");
                                    h = 65533
                                }
                                f[e++] = h >> 12 | 224;
                                f[e++] = h >> 6 & 63 | 128
                            }
                            f[e++] = h & 63 | 128
                        }
                    }
                    b = e === f.length ?
                        f : f.subarray(0, e)
                }
                Il(a, c, 2);
                El(a.J, b.length);
                Hl(a, a.J.end());
                Hl(a, b)
            }
        }),
        Rl = new Ol(function(a, b, c, d, e) {
            if (a.m !== 2) return !1;
            gj(a, hl(b, d, c, !0), e);
            return !0
        }, Cm, !1, !0),
        om = new Ol(function(a, b, c, d, e) {
            if (a.m !== 2) return !1;
            gj(a, hl(b, d, c), e);
            return !0
        }, Cm, !1, !0),
        Lm;
    Lm = new Ol(function(a, b, c, d, e) {
        if (a.m !== 2) return !1;
        d = Ak(void 0, d);
        var f = zj(b);
        Qj(f);
        var g = $k(b, f, c, 3);
        f = zj(b);
        if (Z(g) & 4) {
            g = oj(g);
            var h = Z(g);
            Aj(g, (h | 1) & -2079);
            Uk(b, f, c, g)
        }
        g.push(d);
        gj(a, d, e);
        return !0
    }, function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) Cm(a, b[f], c, d, e)
    }, !0, !0);
    var Mm = zm(function(a, b, c) {
            if (a.m !== 0) return !1;
            Bm(b, c, hj(a));
            return !0
        }, function(a, b, c) {
            a.tb(c, mk(b))
        }),
        Nm = Am(function(a, b, c) {
            if (a.m !== 0 && a.m !== 2) return !1;
            b = al(b, c);
            a.m == 2 ? nj(a, Ti, b) : b.push(hj(a));
            return !0
        }, function(a, b, c) {
            b = $l(mk, b, !0);
            if (b != null && b.length) {
                c = Jl(a, c);
                for (var d = 0; d < b.length; d++) El(a.J, b[d]);
                Kl(a, c)
            }
        }),
        Om = zm(function(a, b, c) {
            if (a.m !== 0) return !1;
            Bm(b, c, lj(a));
            return !0
        }, function(a, b, c) {
            a.Ie(c, kk(b))
        }),
        Pm = Am(function(a, b, c) {
            if (a.m !== 0 && a.m !== 2) return !1;
            b = al(b, c);
            a.m == 2 ? nj(a, Xi, b) : b.push(lj(a));
            return !0
        }, function(a, b, c) {
            b = $l(kk, b, !0);
            if (b != null)
                for (var d = 0; d < b.length; d++) a.Ie(c, b[d])
        });

    function Qm(a) {
        if (a instanceof yl) return a.constructor.na
    };

    function Rm(a, b) {
        b = b === void 0 ? new Set : b;
        if (b.has(a)) return "(Recursive reference)";
        switch (typeof a) {
            case "object":
                if (a) {
                    var c = Object.getPrototypeOf(a);
                    switch (c) {
                        case Map.prototype:
                        case Set.prototype:
                        case Array.prototype:
                            b.add(a);
                            var d = "[" + Array.from(a, function(e) {
                                return Rm(e, b)
                            }).join(", ") + "]";
                            b.delete(a);
                            c !== Array.prototype && (d = Sm(c.constructor) + "(" + d + ")");
                            return d;
                        case Object.prototype:
                            return b.add(a), c = "{" + Object.entries(a).map(function(e) {
                                var f = u(e);
                                e = f.next().value;
                                f = f.next().value;
                                return e +
                                    ": " + Rm(f, b)
                            }).join(", ") + "}", b.delete(a), c;
                        default:
                            return d = "Object", c && c.constructor && (d = Sm(c.constructor)), typeof a.toString === "function" && a.toString !== Object.prototype.toString ? d + "(" + String(a) + ")" : "(object " + d + ")"
                    }
                }
                break;
            case "function":
                return "function " + Sm(a);
            case "number":
                if (!Number.isFinite(a)) return String(a);
                break;
            case "bigint":
                return a.toString(10) + "n";
            case "symbol":
                return a.toString()
        }
        return JSON.stringify(a)
    }

    function Sm(a) {
        var b = a.displayName;
        return b && typeof b === "string" || (b = a.name) && typeof b === "string" ? b : (a = /function\s+([^\(]+)/m.exec(String(a))) ? a[1] : "(Anonymous)"
    };

    function Tm(a, b) {
        a.mj = !0;
        a.qf = typeof b === "function" ? b : function() {
            return b
        };
        return a
    }

    function Um(a, b, c) {
        var d = a(b, c);
        d || Vm(c, function() {
            var e = "";
            e.length > 0 && (e += ": ");
            return e + "Expected " + a.qf().trim() + ", got " + Rm(b)
        });
        return d
    }

    function Vm(a, b) {
        a == null || a.push((typeof b === "function" ? b() : b).trim())
    }

    function Wm(a) {
        return typeof a === "function" ? a() : a
    }

    function Xm() {
        throw Error(B.apply(0, arguments).map(Wm).filter(Boolean).join("\n").trim().replace(/:$/, ""));
    };
    (function() {
        var a = Ha.jspbGetTypeName;
        Ha.jspbGetTypeName = a ? function(b) {
            return a(b) || Qm(b)
        } : Qm
    })();
    var Ym = yl;

    function Zm(a) {
        return function() {
            var b = new Gl;
            sm(kb(this, yl).s, b, rm(a));
            Hl(b, b.J.end());
            for (var c = new Uint8Array(b.rb), d = b.wd, e = d.length, f = 0, g = 0; g < e; g++) {
                var h = d[g];
                c.set(h, f);
                f += h.length
            }
            E(f == c.length);
            b.wd = [c];
            return c
        }
    };
    var ll = function(a) {
        Ym.call(this, a)
    };
    y(ll, Ym);
    ll.prototype.pf = function() {
        return ql(this)
    };
    ll.na = "wireless.mdl.UserAgentClientHints.BrandAndVersion";
    var $m = [0, Km, -1];
    ll.prototype.pa = Zm($m);
    var an = function(a) {
        Ym.call(this, a)
    };
    y(an, Ym);
    var bn = function(a, b) {
            return ul(a, 2, b)
        },
        cn = function(a, b) {
            return ul(a, 3, b)
        },
        dn = function(a, b) {
            return ul(a, 4, b)
        },
        en = function(a, b) {
            return ul(a, 5, b)
        },
        fn = function(a, b) {
            return ul(a, 9, b)
        },
        gn = function(a, b) {
            var c = ll,
                d = a.s,
                e = zj(d);
            Qj(e);
            if (b == null) Uk(d, e, 10);
            else {
                var f = b;
                var g = b = ((g = Qk) == null ? void 0 : g.get(f)) || f;
                if (!Array.isArray(g)) throw a = "Expected array but got " + Ja(g) + ": " + g, bk(a);
                f = g = Z(b);
                var h = !!(2 & g) || !!(2048 & g);
                E(!h || Object.isFrozen(b));
                var k = h || Object.isFrozen(b),
                    l;
                if (l = !k) l = void 0 === ak || void 0 !== Zj;
                for (var m = !0, q = !0, t = 0; t < b.length; t++) {
                    var r = b[t],
                        v = r,
                        w = bb(c);
                    if (!(v instanceof w)) throw Error("na`" + dk(w) + "`" + (v && dk(v.constructor)));
                    h || (r = Bj(r.s), m && (m = !r), q && (q = r))
                }
                h || (g |= 5, g = m ? g | 8 : g & -9, g = q ? g | 16 : g & -17);
                if (l || k && g !== f) b = oj(b), f = 0, g = dl(g, e), g = gl(g, e, !0);
                g !== f && Aj(b, g);
                Wj(b);
                Uk(d, e, 10, b)
            }
            return a
        },
        hn = function(a, b) {
            return Vk(a, 11, b == null ? b : ek(b))
        },
        jn = function(a, b) {
            return ul(a, 1, b)
        },
        kn = function(a, b) {
            return Vk(a, 7, b == null ? b : ek(b))
        };
    an.na = "wireless.mdl.UserAgentClientHints";
    an.fd = [10, 6];
    an.prototype.pa = Zm([0, Km, -4, Lm, $m, Jm, Om, Km, Lm, $m, Jm]);
    var ln = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function mn(a) {
        var b;
        return (b = a.google_tag_data) != null ? b : a.google_tag_data = {}
    }

    function nn(a) {
        var b, c;
        return typeof((b = a.navigator) == null ? void 0 : (c = b.userAgentData) == null ? void 0 : c.getHighEntropyValues) === "function"
    }

    function on(a) {
        if (!nn(a)) return null;
        var b = mn(a);
        if (b.uach_promise) return b.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(ln).then(function(c) {
            b.uach != null || (b.uach = c);
            return c
        });
        return b.uach_promise = a
    }

    function pn(a) {
        var b;
        return hn(gn(en(bn(jn(dn(kn(fn(cn(new an, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), ((b = a.fullVersionList) == null ? void 0 : b.map(function(c) {
            var d = new ll;
            d = ul(d, 1, c.brand);
            return ul(d, 2, c.version)
        })) || []), a.wow64 || !1)
    }

    function qn(a) {
        var b, c;
        return (c = (b = on(a)) == null ? void 0 : b.then(function(d) {
            return pn(d)
        })) != null ? c : null
    };
    var rn = function(a, b, c, d) {
        a = a === void 0 ? window : a;
        b = b === void 0 ? null : b;
        c = c === void 0 ? new Sa : c;
        d = d === void 0 ? Df("current") : d;
        Wd.call(this);
        this.global = a;
        this.Ba = b;
        this.B = c;
        this.Xf = d;
        this.Lf = Fd(this.global, "pagehide").g(mg(this.B, 941));
        this.Kf = Fd(this.global, "load").g(mg(this.B, 738), Me(1));
        this.Oh = Fd(this.global, "resize").g(mg(this.B, 741));
        this.onMessage = Fd(this.global, "message").g(mg(this.B, 740));
        this.document = new Wh(this.global, this);
        this.j = new og(new rg(this.K, this.B), new qg(this.K, this.B));
        this.H = new ke(new vg(this),
            new mh(this), new mf(this, new zg(this)), new mf(this, new ph(this)), new mf(this, new kh(this)))
    };
    y(rn, Wd);
    var wg = function(a) {
        var b = a.global;
        return !!a.global.HTMLFencedFrameElement && !!b.fence && typeof b.fence.reportEvent === "function"
    };
    rn.prototype.Lb = function(a) {
        wg(this) && this.global.fence.reportEvent(a)
    };
    rn.prototype.Md = function() {
        return this.Lf.g(mg(this.B, 942), W(this.h, 1), O(function() {}))
    };
    var sn = function(a) {
            var b = new rn(a.global.top, a.Ba);
            b.H = a.H;
            return b
        },
        tn = function(a, b) {
            b.start();
            return Fd(b, "message").g(mg(a.B, 740))
        };
    rn.prototype.postMessage = function(a, b, c) {
        c = c === void 0 ? [] : c;
        this.global.postMessage(a, b, c)
    };
    rn.prototype.Nd = function() {
        return jh(this.global) ? this.global.width : 0
    };
    rn.prototype.Ld = function() {
        return jh(this.global) ? this.global.height : 0
    };
    var un = function(a, b) {
        try {
            a: {
                var c = a.global,
                    d = hh() || ih();
                try {
                    b && (c = c.top);
                    a = c;
                    b && a !== null && a != a.top && (a = a.top);
                    try {
                        if (d === void 0 ? 0 : d) var e = (new Cg(a.innerWidth, a.innerHeight)).round();
                        else {
                            var f = (a || window).document,
                                g = f.compatMode == "CSS1Compat" ? f.documentElement : f.body;
                            e = (new Cg(g.clientWidth, g.clientHeight)).round()
                        }
                        var h = e
                    } catch (v) {
                        h = new Cg(-12245933, -12245933)
                    }
                    b = h;
                    var k = b.height,
                        l = b.width;
                    if (l === -12245933) {
                        var m = new gi(l, l, l, l);
                        break a
                    }
                    var q = eh(dh(c.document).Zb),
                        t = q.x,
                        r = q.y;
                    m = new gi(r, t + l, r + k,
                        t);
                    break a
                } catch (v) {
                    m = new gi(-12245933, -12245933, -12245933, -12245933);
                    break a
                }
                m = void 0
            }
            return {
                left: m.left,
                top: m.top,
                width: m.Nd(),
                height: m.Ld()
            }
        }
        catch (v) {
            return ci
        }
    };
    rn.prototype.validate = function() {
        var a = this.H.F() || wg(this);
        return this.global && this.j.ba() && a
    };
    var Ch = function(a) {
        return (a = qn(a.global)) ? Vc(a) : null
    };
    da.Object.defineProperties(rn.prototype, {
        sharedStorage: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                try {
                    return this.global.sharedStorage
                } catch (a) {}
            }
        },
        K: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return window
            }
        },
        Cb: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return !jh(this.global.top)
            }
        },
        Td: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Cb || this.global.top !== this.global
            }
        },
        scrollY: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.global.scrollY
            }
        },
        MutationObserver: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.K.MutationObserver
            }
        },
        ResizeObserver: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.K.ResizeObserver
            }
        },
        qh: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                E(!0, "Major version must be an integer");
                return Tg() >= 8
            }
        },
        Cg: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return "vu" in this.global || "vv" in this.global
            }
        }
    });
    var vn = !Zg && !Pg(),
        wn = function(a, b) {
            if (/-[a-z]/.test(b)) return null;
            if (vn && a.dataset) {
                if (Rg() && !(b in a.dataset)) return null;
                a = a.dataset[b];
                return a === void 0 ? null : a
            }
            return a.getAttribute("data-" + String(b).replace(/([A-Z])/g, "-$1").toLowerCase())
        };
    var xn = {},
        yn = (xn["data-google-av-cxn"] = "_avicxn_", xn["data-google-av-cpmav"] = "_cvu_", xn["data-google-av-metadata"] = "_avm_", xn["data-google-av-adk"] = "_adk_", xn["data-google-av-btr"] = void 0, xn["data-google-av-override"] = void 0, xn["data-google-av-dm"] = void 0, xn["data-google-av-immediate"] = void 0, xn["data-google-av-aid"] = void 0, xn["data-google-av-naid"] = void 0, xn["data-google-av-inapp"] = void 0, xn["data-google-av-slift"] = void 0, xn["data-google-av-itpl"] = void 0, xn["data-google-av-ext-cxn"] = void 0, xn["data-google-av-rs"] =
            void 0, xn["data-google-av-flags"] = void 0, xn["data-google-av-turtlex"] = void 0, xn["data-google-av-ufs-integrator-metadata"] = void 0, xn["data-google-av-vattr"] = void 0, xn["data-google-av-vrus"] = void 0, xn),
        zn = {},
        An = (zn["data-google-av-adk"] = "googleAvAdk", zn["data-google-av-btr"] = "googleAvBtr", zn["data-google-av-cpmav"] = "googleAvCpmav", zn["data-google-av-dm"] = "googleAvDm", zn["data-google-av-ext-cxn"] = "googleAvExtCxn", zn["data-google-av-immediate"] = "googleAvImmediate", zn["data-google-av-inapp"] = "googleAvInapp",
            zn["data-google-av-itpl"] = "googleAvItpl", zn["data-google-av-metadata"] = "googleAvMetadata", zn["data-google-av-naid"] = "googleAvNaid", zn["data-google-av-override"] = "googleAvOverride", zn["data-google-av-rs"] = "googleAvRs", zn["data-google-av-slift"] = "googleAvSlift", zn["data-google-av-cxn"] = "googleAvCxn", zn["data-google-av-aid"] = void 0, zn["data-google-av-flags"] = "googleAvFlags", zn["data-google-av-turtlex"] = "googleAvTurtlex", zn["data-google-av-ufs-integrator-metadata"] = "googleAvUfsIntegratorMetadata", zn["data-google-av-vattr"] =
            "googleAvVattr", zn["data-google-av-vrus"] = "googleAvVurs", zn);

    function Bn(a, b) {
        if (a.i === void 0) return null;
        try {
            var c;
            var d = (c = a.i.getAttribute(b)) != null ? c : null;
            if (d !== null) return d
        } catch (g) {}
        try {
            var e = yn[b];
            if (e && (d = a.i[e], d !== void 0)) return d
        } catch (g) {}
        try {
            var f = An[b];
            if (f) return wn(a.i, f)
        } catch (g) {}
        return null
    }

    function Cn(a) {
        return O(function(b) {
            return Bn(b, a)
        })
    };
    var Dn = H(function(a) {
        return O(function(b) {
            return a.map(function(c) {
                return Bn(b, c)
            })
        })
    }(["data-google-av-cxn", "data-google-av-turtlex"]), O(function(a) {
        var b = u(a);
        a = b.next().value;
        b = b.next().value;
        if (!a) {
            if (b !== null) return [];
            throw new ge;
        }
        return a.split("|")
    }));
    var En = function() {
        return H(Cd(function(a) {
            return a.element.g(Dn, Ge(function() {
                return L([""])
            })).g(O(function(b) {
                return {
                    ra: b,
                    Ic: a
                }
            }))
        }), Oe(function(a) {
            return a.ra.sort().join(";")
        }), O(function(a) {
            return a.Ic
        }))
    };
    var Gn = function() {
            return Cd(function(a) {
                return Vc(Fn(a)).g(qh(a.h))
            })
        },
        Fn = function(a) {
            return a.document.querySelectorAll(".GoogleActiveViewElement,.GoogleActiveViewClass").map(function(b) {
                return new Eh(b)
            })
        };

    function Hn(a) {
        var b = a.Kf,
            c = a.document.Nh;
        return Ld(L({}), c, b).g(O(function() {
            return a
        }))
    };
    var Jn = O(In);

    function In(a) {
        var b = Number(Bn(a, "data-google-av-rs"));
        if (!isNaN(b) && b !== 0) return b;
        var c;
        return (a = (c = a.i) == null ? void 0 : c.id) ? a.startsWith("DfaVisibilityIdentifier") ? 6 : a.startsWith("YtKevlarVisibilityIdentifier") ? 15 : a.startsWith("YtSparklesVisibilityIdentifier") ? 17 : a.startsWith("YtKabukiVisibilityIdentifier") ? 18 : 0 : 0
    };

    function Kn() {
        return H(Q(function(a) {
            return a !== void 0
        }), O(function(a) {
            return a
        }))
    };

    function Ln() {
        return function(a) {
            var b = [];
            return a.g(Q(function(c) {
                if (c.i === void 0 || b.some(function(d) {
                        return d.i === c.i
                    })) return !1;
                b.push(c);
                return !0
            }))
        }
    };

    function Mn(a, b) {
        b = b === void 0 ? Jc : b;
        return Ld(Hn(a), b).g(Gn(), Ln(), Kn(), W(a.h, 1))
    };

    function Nn(a, b) {
        return new J(function(c) {
            var d = !1,
                e = Array(b.length);
            e.fill(void 0);
            var f = new Set,
                g = new Set,
                h = function(q, t) {
                    a.Rf ? (e[t] = q, f.add(t), d || (d = !0, Va(a, function() {
                        d = !1;
                        c.next(Mb(e))
                    }, 1))) : c.error(new he(t))
                },
                k = function(q, t) {
                    g.add(t);
                    f.add(t);
                    Va(a, function() {
                        c.error(q)
                    }, 1)
                },
                l = function(q) {
                    g.add(q);
                    Va(a, function() {
                        g.size === b.length && c.complete()
                    }, 1)
                },
                m = b.map(function(q, t) {
                    return q.subscribe(function(r) {
                        return void h(r, t)
                    }, function(r) {
                        return void k(r, t)
                    }, function() {
                        return void l(t)
                    })
                });
            return function() {
                m.forEach(function(q) {
                    return void q.unsubscribe()
                })
            }
        })
    };

    function On(a, b, c) {
        function d() {
            if (b.Ba) {
                var z = b.Ba,
                    C = z.next;
                var I = {
                    creativeId: b.Yb.Ea(c),
                    requiredSignals: e,
                    signals: Object.assign({}, f),
                    hasPrematurelyCompleted: g,
                    errorMessage: h,
                    erroredSignalKey: k
                };
                I = {
                    specMajor: 2,
                    specMinor: 0,
                    specPatch: 0,
                    timestamp: qe(b.j.now(), new oe(0, b.j.timeline)),
                    instanceId: b.Yb.Ea(b.qb),
                    creativeState: I
                };
                C.call(z, I)
            }
        }
        for (var e = Object.keys(a), f = {}, g = !1, h = null, k = null, l = {}, m = new Set, q = [], t = [], r = u(e), v = r.next(), w = {}; !v.done; w = {
                ea: void 0
            }, v = r.next()) w.ea = v.value, v = a[w.ea], v instanceof
        Y ? (l[w.ea] = v.value, m.add(w.ea), b.Ba && (f[String(w.ea)] = se(v.value))) : (v = v.g(S(function(z, C) {
                return le(z) || le(C) ? !1 : z === C
            }), O(function(z) {
                return function(C) {
                    b.Ba && (f[String(z.ea)] = se(C), d());
                    var I = {};
                    return I[z.ea] = C, I
                }
            }(w)), Ge(function(z) {
                return function(C) {
                    if (C instanceof he) throw new je(String(z.ea));
                    throw C;
                }
            }(w)), ef(function(z) {
                return function() {
                    m.add(z.ea)
                }
            }(w), function(z) {
                return function(C) {
                    k = String(z.ea);
                    h = String(C);
                    d()
                }
            }(w), function(z) {
                return function() {
                    m.has(z.ea) || (g = !0, d())
                }
            }(w))), t.push(w.ea),
            q.push(v));
        (a = Object.keys(f).length > 0) && d();
        r = Nn(b.h, q).g(Ge(function(z) {
            if (z instanceof he) throw new ie(String(t[z.jh]));
            throw z;
        }), O(function(z) {
            return Object.freeze(Object.assign.apply(Object, [{}, l].concat(x(z))))
        }));
        return (q = q.length > 0) && a ? Ld(L(Object.freeze(l)), r) : q ? r : L(Object.freeze(l))
    };

    function Pn(a, b, c, d) {
        var e = Qn(Rn(Sn(), Tn), Un, Vn);
        return a.B.Pb.bind(a.B)(733, function() {
            var f = {};
            try {
                return b.g(Ge(function(g) {
                    d(Object.assign({}, f, {
                        error: g
                    }));
                    return Jc
                }), Cd(function(g) {
                    try {
                        var h = c(a, g)
                    } catch (l) {
                        return d(Object.assign({}, f, {
                            error: l instanceof Error ? l : String(l)
                        })), Jc
                    }
                    var k = {};
                    return On(h, a, g.qb).g(ef(function(l) {
                        k = l
                    }), Ye(1), nd()).g(e, Ge(function(l) {
                        d(Object.assign({}, k, {
                            error: l
                        }));
                        return Jc
                    }), Se(void 0), O(function() {
                        return !0
                    }))
                })).g($e(function(g) {
                    return g + 1
                }, 0), Ge(function(g) {
                    d(Object.assign({},
                        f, {
                            error: g
                        }));
                    return Jc
                }))
            } catch (g) {
                return d(Object.assign({}, f, {
                    error: g
                })), Jc
            }
        })()
    };

    function Wn(a, b) {
        return H(U(function(c) {
            var d = a(c),
                e = b(c),
                f = {};
            return d && e && f ? new J(function(g) {
                e(d, f, function(h) {
                    g.next(Object.assign({}, c, {
                        ab: h
                    }));
                    g.complete()
                });
                return function() {}
            }) : Md
        }), Q(function(c) {
            return c.ab
        }))
    };
    var Un = H(Q(function(a) {
        var b = a.H;
        var c = a.Vb;
        var d = a.Qb;
        var e = a.Lb;
        var f = a.hb;
        var g = a.Ra;
        a = a.Ub;
        return g !== void 0 && a !== void 0 && b !== void 0 && c !== void 0 && d !== void 0 && (!f || e !== void 0)
    }), df(function(a) {
        return !(a.yf === !1 && a.cf !== void 0)
    }, !1), Q(function(a) {
        var b = a.yf;
        var c = a.Qd;
        var d = a.Ai;
        a = a.Vb;
        return d ? !!c && a !== void 0 && (a == null ? void 0 : a.length) > 0 : !!b
    }), Wn(function(a) {
        return a.Ub
    }, function(a) {
        return a.Ra
    }), O(function(a) {
        a.hb || a.Qb(a.Vb, a).forEach(function(b) {
            a.H.G(b).sendNow()
        })
    }), Me(1), Le());

    function Xn(a) {
        var b = new Map;
        if (typeof a !== "object" || a === null) return b;
        Object.values(a).forEach(function(c) {
            c && typeof c.da === "function" && (b.has(c.clock.timeline) || b.set(c.clock.timeline, c.clock.now()))
        });
        return b
    };

    function Yn(a, b, c) {
        var d = Zn,
            e = $n;
        c = c === void 0 ? .01 : c;
        return function(f) {
            c > 0 && Math.random() <= c && (a.global.HTMLFencedFrameElement && a.global.fence && typeof a.global.fence.reportEvent === "function" && a.global.fence.reportEvent({
                eventType: "active-view-error",
                eventData: "",
                destination: ["buyer"]
            }), f = Object.assign({}, f, {
                errorMessage: f.error instanceof Error && f.error.message ? f.error.message : String(f.error),
                df: f.error instanceof Error && f.error.stack ? String(f.error.stack) : null,
                Ng: f.error instanceof Error && f.error.name ?
                    String(f.error.name) : null,
                Mg: String(a.B.dg)
            }), d(Object.assign({}, f, {
                ga: function() {
                    return function(g) {
                        try {
                            return e(Object.assign({}, g))
                        } catch (h) {
                            return {}
                        }
                    }
                }(),
                ra: [b]
            }), Xn(f)).forEach(function(g) {
                a.H.G(g).sendNow()
            }))
        }
    };
    var Vn = H(O(function(a) {
        var b = a.H;
        var c = a.Ug;
        if (b === void 0 || c === void 0) return !1;
        if (a.cf !== void 0) return !0;
        if (c === null) return !1;
        for (a = 0; a < c; a++) b.G("https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=extra&rnd=" + Math.floor(Math.random() * 1E7)).sendNow();
        return !0
    }), df(function(a) {
        return !a
    }), Le());
    var $n = function(a) {
        return {
            id: a.bd,
            mcvt: a.kc,
            p: a.Jc,
            asp: a.fj,
            tm: a.vi,
            tu: a.wi,
            mtos: a.lc,
            tos: a.vc,
            v: a.Bg,
            bin: a.vd,
            avms: a.If,
            bs: a.Se,
            mc: a.Gf,
            "if": a.Ig,
            vu: a.Kg,
            app: a.Va,
            mse: a.ge,
            mtop: a.he,
            itpl: a.Vd,
            adk: a.ud,
            exk: a.hj,
            rs: a.Ka,
            la: a.Bf,
            cr: a.Zd,
            uach: a.xc,
            vs: a.md,
            r: a.ed,
            pay: a.bh,
            co: a.Dg,
            rst: a.wg,
            rpt: a.vg,
            isd: a.hh,
            lsd: a.yh,
            context: a.Mg,
            msg: a.errorMessage,
            stack: a.df,
            name: a.Ng,
            ec: a.dh,
            sfr: a.ue,
            met: a.Xb,
            wmsd: a.De,
            pv: a.Cj,
            epv: a.jj,
            pbe: a.xf,
            fle: a.fh,
            vae: a.gh,
            spb: a.ag,
            sfl: a.Zf,
            ffslot: a.ph,
            reach: a.li,
            io2: a.kd,
            rxdbg: a.Gj,
            omida: a.rj,
            omidp: a.yj,
            omidpv: a.zj,
            omidor: a.xj,
            omidv: a.Bj,
            omids: a.Aj,
            omidam: a.qj,
            omidct: a.sj,
            omidia: a.vj,
            omiddc: a.tj,
            omidlat: a.wj,
            omiddit: a.uj
        }
    };

    function Qn() {
        var a = B.apply(0, arguments);
        return function(b) {
            var c = b.g(Ye(1), nd());
            b = a.map(function(d) {
                return c.g(d, Se(!0))
            });
            return P(b).g(Me(1), Le())
        }
    };

    function Rn() {
        var a = B.apply(0, arguments);
        return function(b) {
            var c = b.g(Ye(1), nd());
            b = a.map(function(d) {
                return c.g(d, Se(!0))
            });
            return Ld.apply(null, x(b)).g(Me(1), Le())
        }
    };

    function Sn() {
        var a = ao,
            b = bo;
        return function(c) {
            var d = c.g(Ye(1), nd());
            c = d.g(a, Se(!0));
            d = d.g(H(b, Ye(), nd()), Se(!0));
            c = P([c, d]);
            return Qd(c, d).g(Me(1), Le())
        }
    };
    var bo = function(a) {
        var b = [];
        return a.g(O(function(c) {
            var d = c.H,
                e = c.Vg,
                f = c.vc,
                g = c.si,
                h = c.ga,
                k = c.ri,
                l = c.bg,
                m = c.wc,
                q = c.Be,
                t = c.Qd,
                r = c.xf,
                v = c.ag,
                w = c.Zf,
                z = c.ye;
            if (!c.mf || !t || c.lc === void 0 || f === void 0 || g === void 0 || h === void 0 || k === void 0 || m === void 0 || d === void 0) return !1;
            if (c.hb) {
                if (l === void 0) return !1;
                g = c.Lb;
                if (!g) return !1;
                g({
                    eventType: "active-view-time-on-screen",
                    eventData: z != null ? z : "",
                    destination: ["buyer"]
                });
                return !0
            }
            if (!(r || w || l)) return !1;
            z = Xn(c);
            var C;
            q = (C = q == null ? void 0 : q.ka(z).value) != null ? C : !1;
            C = m(Object.assign({},
                c, {
                    bd: k,
                    md: q ? 4 : 3,
                    ed: l != null ? l : "u",
                    ga: h,
                    ra: g
                }), z);
            if (r) {
                for (; b.length > g.length;) c = void 0, (c = b.shift()) == null || c.deactivate();
                C.forEach(function(X, pa) {
                    pa >= b.length ? b.push(d.G(X)) : b[pa].url = X
                });
                return v && e && l !== void 0 ? (C.forEach(function(X) {
                    e.G(X).sendNow()
                }), !0) : l !== void 0
            }
            if (v && e && l !== void 0) return C.forEach(function(X) {
                e.G(X).sendNow()
            }), !0;
            if (w && e) {
                for (; b.length > g.length;) v = void 0, (v = b.shift()) == null || v.deactivate();
                var I = m(Object.assign({}, c, {
                        bd: k,
                        md: q ? 4 : 3,
                        ed: l != null ? l : "u",
                        ga: h,
                        ra: ["https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=fetch&later&lidartos"]
                    }),
                    z)[0];
                C.forEach(function(X, pa) {
                    pa >= b.length ? b.push(d.G(I, {
                        bf: !0
                    })) : b[pa].url = I
                });
                return l !== void 0 ? (C.forEach(function(X) {
                    e.G(X).sendNow()
                }), !0) : l !== void 0
            }
            return l !== void 0 ? (C.forEach(function(X) {
                d.G(X).sendNow()
            }), !0) : !1
        }), df(function(c) {
            return !c
        }), Le())
    };

    function co(a) {
        return function(b) {
            return b.g(O(function(c) {
                a.Rf || cb("Assertion on queued Observable output failed");
                return c
            }))
        }
    };

    function eo(a) {
        return function(b) {
            return new J(function(c) {
                var d = !1,
                    e = b.g(co(a)).subscribe(function(f) {
                        d = !0;
                        c.next(f)
                    }, c.error.bind(c), c.complete.bind(c));
                Va(a, function() {
                    d || c.next(null)
                }, 3);
                return e
            })
        }
    };

    function fo(a, b) {
        return function(c) {
            return c.g(U(function(d) {
                return new J(function(e) {
                    function f() {
                        h.disconnect();
                        k.unsubscribe()
                    }
                    var g = a.MutationObserver;
                    if (g && d.i !== void 0) {
                        var h = new g(function(l) {
                            e.next(l)
                        });
                        h.observe(d.i, b);
                        var k = d.released.subscribe(f);
                        return f
                    }
                })
            }))
        }
    };
    var go = {
        dj: 0,
        Hi: 1,
        Ji: 2,
        Ii: 3,
        0: "UNKNOWN",
        1: "DEFER_MEASUREMENT",
        2: "DO_NOT_DEFER_MEASUREMENT",
        3: "DEFER_MEASUREMENT_AND_PING"
    };

    function ho(a, b) {
        var c = b.g(fo(a, {
            attributes: !0
        }), W(a.h, 1));
        return P([b, c.g(W(a.h, 1), eo(a.h))]).g(O(function(d) {
            return u(d).next().value
        }), Cn("data-google-av-dm"), O(io))
    }

    function io(a) {
        return a && a in go ? Number(a) : 2
    };

    function jo(a) {
        if (a.Ch === 3) return null;
        if (a.bg !== void 0) {
            var b = a.Hg === !1 ? "n" : null;
            if (b !== null) return b
        }
        return a.Oc instanceof ae ? "msf" : a.Bd instanceof be ? "c" : a.Fg === !1 ? "pv" : a.Oc || a.Bd ? "x" : null
    }
    var Tn = H(Q(function(a) {
        return a.Sc !== void 0 && a.ga !== void 0 && a.wc !== void 0 && a.Tc !== void 0 && a.H !== void 0
    }), Q(function(a) {
        return jo(a) !== null
    }), Wn(function(a) {
        return a.Cc
    }, function(a) {
        return a.Ra
    }), O(function(a) {
        if (a.hb) {
            var b = a.Lb;
            if (b) {
                var c;
                b({
                    eventType: "active-view-unmeasurable",
                    eventData: (c = a.ye) != null ? c : "",
                    destination: ["buyer"]
                })
            }
        } else {
            c = void 0;
            var d = jo(a);
            if (d === "x") {
                var e, f = (e = a.Oc) != null ? e : a.Bd;
                f && (b = f.stack, c = f.message)
            }
            a.wc(Object.assign({}, a, {
                ra: a.Sc,
                ga: a.ga,
                bd: a.Tc,
                md: 2,
                ed: d,
                errorMessage: c,
                df: b
            }), Xn(a)).forEach(function(g) {
                a.H.G(g).sendNow()
            })
        }
    }), Me(1), Le());
    var ko = function() {
            this.startTime = Math.floor(Date.now() / 1E3 - 1704067200);
            this.re = 0
        },
        lo = function(a) {
            var b = a.re.toString(10).padStart(2, "0");
            b = "" + a.startTime + b;
            a.re < 99 && a.re++;
            return b
        };

    function mo(a, b) {
        return typeof a === "string" ? encodeURIComponent(a) : typeof a === "number" ? String(a) : Array.isArray(a) ? a.map(function(c) {
            return mo(c, b)
        }).join(",") : a instanceof oe ? a.toString() : a && typeof a.da === "function" ? mo(a.ka(b).value, b) : a === !0 ? "1" : a === !1 ? "0" : a === void 0 || a === null ? null : a instanceof ko ? lo(a) : [a.top, a.left, a.top + a.height, a.left + a.width].join()
    }

    function no(a, b) {
        a = Object.entries(a).map(function(c) {
            var d = u(c);
            c = d.next().value;
            d = d.next().value;
            d = mo(d, b);
            return d === null ? "" : c + "=" + d
        }).filter(function(c) {
            return c !== ""
        });
        return a.length ? a.join("&") : ""
    };
    var oo = /(?:\[|%5B)([a-zA-Z0-9_]+)(?:\]|%5D)/g,
        nc = lc(mc(), "google3.javascript.ads.common.url_macros_substitutor", bc).zh;

    function po(a, b) {
        return a.replace(oo, function(c, d) {
            try {
                var e = b !== null && d in b ? b[d] : void 0;
                if (e == null) return oc("No value supplied for unsupported macro: " + d), c;
                if (e.toString() == null) return oc("The toString method of value returns null for macro: " + d), c;
                e = e.toString();
                if (e == "" || !/^[\s\xa0]*$/.test(e == null ? "" : String(e))) return encodeURIComponent(e).replace(/%2C/g, ",");
                oc("Null value supplied for macro: " + d)
            } catch (f) {
                oc("Failed to set macro: " + d)
            }
            return c
        })
    };

    function qo(a, b) {
        var c = Object.assign({}, a),
            d = a.xc;
        c = (delete c.xc, c);
        c = a.ga(c);
        var e = no(c, b);
        return Jb(a.ra, function(f) {
            var g = "";
            typeof d === "string" && (g = "&" + no({
                uach: d
            }, b));
            var h = {};
            return po(f, (h.VIEWABILITY = e, h)) + g
        })
    };

    function Zn(a, b) {
        var c = a.ga(a),
            d = no(c, b);
        return d ? Jb(a.ra, function(e) {
            e = e.indexOf("?") >= 0 ? e : e + "?";
            e = "?&".indexOf(e.slice(-1)) >= 0 ? e : e + "&";
            return e + d
        }) : a.ra
    };

    function ro(a, b) {
        return Jb(a, function(c) {
            if (typeof b.xc === "string") {
                var d = "&" + no({
                    uach: b.xc
                }, new Map);
                return c.substring(c.length - 7) == "&adurl=" ? c.substring(0, c.length - 7) + d + "&adurl=" : c + d
            }
            return c
        })
    };
    var ao = H(Q(function(a) {
        return a.ga !== void 0 && a.Sc !== void 0 && a.wc !== void 0 && a.Tc !== void 0 && a.H !== void 0
    }), O(function(a) {
        return Object.assign({}, a, {
            fg: Xn(a)
        })
    }), Q(function(a) {
        var b = a.Be;
        var c = a.Qd;
        a = a.fg;
        var d;
        return !!c && ((d = b == null ? void 0 : b.ka(a).value) != null ? d : !1)
    }), Wn(function(a) {
        return a.Dc
    }, function(a) {
        return a.Ra
    }), O(function(a) {
        var b = a.H,
            c = a.ye;
        if (a.hb) {
            var d = a.Lb;
            if (!d) return !1;
            d({
                eventType: "active-view-viewable",
                eventData: c != null ? c : "",
                destination: ["buyer"]
            });
            return !0
        }
        c = a.wc(Object.assign({},
            a, {
                ra: a.Sc,
                ga: a.ga,
                bd: a.Tc,
                md: 4,
                ed: "v"
            }), a.fg);
        (d = a.Cd) && d.length > 0 && a.Qb && a.Qb(d, a).forEach(function(e) {
            b.G(e).sendNow()
        });
        (d = a.Ce) && d.length > 0 && a.Qb && a.Qb(d, a).forEach(function(e) {
            b.G(e).sendNow()
        });
        c.forEach(function(e) {
            b.G(e, {
                Sb: a.de
            }).sendNow()
        });
        return !0
    }), df(function(a) {
        return !a
    }), Le());

    function so(a) {
        var b = Math.pow(10, 2);
        return Math.round(a * b) / b
    };

    function to(a, b, c, d) {
        var e = Object.keys(c).map(function(h) {
                return h
            }),
            f = e.filter(function(h) {
                var k = c[h];
                h = d[h];
                return k instanceof Y && h instanceof Y && k.value === h.value
            }),
            g = f.reduce(function(h, k) {
                var l = {};
                return Object.assign({}, h, (l[k] = c[k], l))
            }, {});
        return e.reduce(function(h, k) {
            if (f.indexOf(k) >= 0) return h;
            var l = {};
            return Object.assign({}, h, (l[k] = b.g(U(function(m) {
                return (m = m ? c[k] : d[k]) && (m instanceof J || G(m.kb) && G(m.subscribe)) ? m : m.P(a)
            })), l))
        }, g)
    };

    function uo(a) {
        return H(O(function() {
            return !0
        }), T(!1), W(a, 1))
    };

    function vo(a) {
        return a.length <= 0 ? Jc : P(a.map(function(b) {
            var c = 0;
            return b.g(O(function(d) {
                return {
                    index: c++,
                    value: d
                }
            }))
        })).g(Q(function(b) {
            return b.every(function(c) {
                return c.index === b[0].index
            })
        }), O(function(b) {
            return b.map(function(c) {
                return c.value
            })
        }))
    };

    function wo(a, b) {
        a.Aa && (a.nb = a.Aa);
        a.Aa = b;
        a.nb && a.nb.value ? (b = Math.max(0, qe(b.timestamp, a.nb.timestamp)), a.totalTime += b, a.ia += b) : a.ia = 0;
        return a
    }

    function xo() {
        return H($e(wo, {
            totalTime: 0,
            ia: 0
        }), O(function(a) {
            return a.totalTime
        }))
    }

    function yo() {
        return H($e(wo, {
            totalTime: 0,
            ia: 0
        }), O(function(a) {
            return a.ia
        }))
    };

    function zo(a, b) {
        return H(Cn("data-google-av-metadata"), O(function(c) {
            if (c === null) return b(void 0);
            c = c.split("&").map(function(d) {
                return d.split("=")
            }).filter(function(d) {
                return d[0] === a
            });
            if (c.length === 0) return b(void 0);
            c = c[0].slice(1).join("=");
            return b(c)
        }))
    };
    var Ao = {
        Di: "asmreq",
        Ei: "asmres"
    };
    var Bo = function(a) {
        Ym.call(this, a)
    };
    y(Bo, Ym);
    Bo.prototype.Uf = function(a) {
        tl(this, a)
    };
    Bo.na = "tagging.common.osd.AdSpeedMetricsRequest";
    Bo.prototype.pa = Zm([0, Mm]);
    var Co = function(a) {
        Ym.call(this, a)
    };
    y(Co, Ym);
    Co.na = "tagging.common.osd.AdSpeedMetricsResponse.Box";
    var Do = [0, Hm, -3];
    Co.prototype.pa = Zm(Do);
    var Eo = function(a) {
        Ym.call(this, a)
    };
    y(Eo, Ym);
    Eo.prototype.Uf = function(a) {
        tl(this, a)
    };
    var Fo = function(a) {
        return function(b) {
            fb(a);
            if (b == null || b == "") b = kb(new a, yl);
            else {
                eb(b);
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error("ya`" + Ja(b) + "`" + b);
                uj(b, 32);
                b = wk(a, b)
            }
            return b
        }
    }(Eo);
    Eo.na = "tagging.common.osd.AdSpeedMetricsResponse";
    Eo.prototype.pa = Zm([0, Mm, Jm, Do, Hm, -1]);

    function Go(a, b) {
        var c = c === void 0 ? sn(a) : c;
        var d = new MessageChannel;
        b = b.g(O(function(f) {
            return Number(f)
        }), Q(function(f) {
            return !isNaN(f) && f !== 0
        }), ef(function(f) {
            var g = new Bo;
            g.Uf(f);
            f = {
                type: "asmreq",
                payload: g.Xa()
            };
            c.postMessage(f, "*", [d.port2])
        }), Me(1));
        var e = tn(a, d.port1).g(Q(function(f) {
                return typeof f.data === "object"
            }), O(function(f) {
                var g = f.data,
                    h = Object.values(Ao).includes(g.type);
                g = typeof g.payload === "string";
                if (!h || !g || f.data.type !== "asmres") return null;
                try {
                    return Fo(f.data.payload)
                } catch (k) {
                    return null
                }
            }),
            Q(function(f) {
                return f !== null
            }), O(function(f) {
                return f
            }));
        return b.g(U(function(f) {
            return L(f).g(Je(e))
        }), Q(function(f) {
            var g = u(f);
            f = g.next().value;
            g = g.next().value;
            if (mk(Sk(g, 1)) != null) {
                var h = h === void 0 ? 0 : h;
                h = nl(mk(Sk(g, 1)), h) === f
            } else h = !1;
            return h
        }), O(function(f) {
            f = u(f);
            f.next();
            return f.next().value
        }), qh(a.h))
    };

    function Ho(a, b, c) {
        var d = b.hc.g(Me(1), U(function() {
            return Go(a, c)
        }), Q(function(f) {
            return ol(f, 2) && Xk(f, Co, 3) && kk(Sk(f, 4)) != null && kk(Sk(f, 5)) != null
        }), Me(1), qh(a.h));
        b = d.g(O(function(f) {
            return {
                x: pl(kl(f, Co, 3), 2),
                y: pl(kl(f, Co, 3), 1)
            }
        }), S(function(f, g) {
            return f.x === g.x && f.y === g.y
        }), W(a.h, 1));
        var e = d.g(O(function(f) {
            return pl(f, 4)
        }), W(a.h, 1));
        d = d.g(O(function(f) {
            return pl(f, 5)
        }), W(a.h, 1));
        return {
            hh: e,
            yg: b,
            yh: d
        }
    };

    function Io(a, b) {
        return b.hc.g(Me(1), O(function() {
            return a.j.now().round()
        }))
    };
    var Jo = O(function(a) {
        return [a.value.O.width, a.value.O.height]
    });

    function Ko(a, b) {
        return function(c) {
            return vo(b.map(function(d) {
                return c.g(a(d))
            }))
        }
    };

    function Lo() {
        var a;
        return H(ef(function(b) {
            return void(a = b.timestamp)
        }), yo(), O(function(b) {
            return {
                timestamp: a,
                value: Math.round(b)
            }
        }))
    };
    var Mo = function(a, b) {
            this.Te = a;
            this.options = b;
            this.Xd = this.Wd = null
        },
        No = function(a, b) {
            b ? a.Xd || (b = Object.assign({}, a.options, {
                delay: 100,
                trackVisibility: !0
            }), a.Xd = new IntersectionObserver(a.Te, b)) : a.Wd || (a.Wd = new IntersectionObserver(a.Te, a.options))
        },
        Oo = function(a, b) {
            a = b ? a.Xd : a.Wd;
            if (!a) throw new de;
            return a
        };
    Mo.prototype.observe = function(a, b) {
        Oo(this, a).observe(b)
    };
    Mo.prototype.unobserve = function(a, b) {
        Oo(this, a).unobserve(b)
    };
    Mo.prototype.disconnect = function(a) {
        Oo(this, a).disconnect()
    };
    Mo.prototype.takeRecords = function(a) {
        return Oo(this, a).takeRecords()
    };
    var Po = {
        W: "ns",
        X: ci,
        O: ci,
        V: new K,
        R: "ns",
        D: ci,
        T: ci,
        Z: {
            x: 0,
            y: 0
        }
    };

    function Qo(a, b) {
        return di(a.O, b.O) && di(a.D, b.D) && di(a.X, b.X) && di(a.T, b.T) && a.R === b.R && a.V === b.V && a.W === b.W && a.Z.x === b.Z.x && a.Z.y === b.Z.y
    };
    var Ro = function(a) {
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
    };

    function So(a, b) {
        return function(c) {
            return function(d) {
                var e = d.g(Xe(new K), nd());
                d = c.element.g(S());
                e = e.g(O(function(f) {
                    return f.value
                }));
                return P([d, e, b]).g(O(function(f) {
                    var g = u(f);
                    f = g.next().value;
                    var h = g.next().value;
                    g = g.next().value;
                    if (f.i === void 0) var k = {
                        top: 0,
                        left: 0,
                        width: 0,
                        height: 0
                    };
                    else {
                        k = f.i.getBoundingClientRect();
                        var l = f.i,
                            m = a.global,
                            q = new Bg(0, 0);
                        var t = (t = ch(l)) ? t.parentWindow || t.defaultView : window;
                        if (Yg(t, "parent")) {
                            do {
                                if (t == m) {
                                    var r = l,
                                        v = ch(r);
                                    gb(r, "Parameter is required");
                                    var w = new Bg(0,
                                        0);
                                    var z = (v ? ch(v) : document).documentElement;
                                    r != z && (r = Ro(r), v = eh(dh(v).Zb), w.x = r.left + v.x, w.y = r.top + v.y)
                                } else w = E(l), w = Ro(w), w = new Bg(w.left, w.top);
                                q.x += w.x;
                                q.y += w.y
                            } while (t && t != m && t != t.parent && (l = t.frameElement) && (t = t.parent))
                        }
                        k = {
                            top: q.y,
                            left: q.x,
                            width: k.width,
                            height: k.height
                        }
                    }
                    k = fi(k, h.Z);
                    m = ei(k, h.X);
                    q = a.j.now();
                    t = Object;
                    l = t.assign;
                    if (g !== 2 || a.Cb || m.width <= 0 || m.height <= 0) var C = !1;
                    else try {
                        var I = a.document.elementFromPoint(m.left + m.width / 2, m.top + m.height / 2);
                        C = I ? !To(I, f) : !1
                    } catch (X) {
                        C = !1
                    }
                    return {
                        timestamp: q,
                        value: l.call(t, {}, h, {
                            R: "geo",
                            T: C ? Po.T : m,
                            D: k
                        })
                    }
                }), qh(a.h))
            }
        }
    }

    function To(a, b, c) {
        c = c === void 0 ? 0 : c;
        return a.i === void 0 || b.i === void 0 ? !1 : a.i === b.i || gh(b.i, function(d) {
            return d === a.i
        }) ? !0 : b.i.ownerDocument && b.i.ownerDocument.defaultView && b.i.ownerDocument.defaultView === b.i.ownerDocument.defaultView.top ? !1 : c < 10 && b.i.ownerDocument && b.i.ownerDocument.defaultView && b.i.ownerDocument.defaultView.frameElement ? To(a, new Eh(b.i.ownerDocument.defaultView.frameElement), c + 1) : !0
    };

    function Uo(a) {
        return function(b) {
            return b.g(a.ResizeObserver ? Vo(a) : Wo(a), Ye(1), nd())
        }
    }

    function Vo(a) {
        return function(b) {
            return b.g(U(function(c) {
                var d = a.ResizeObserver;
                if (!d || c.i === void 0) return L(Po.D);
                var e = (new J(function(f) {
                    function g() {
                        c.i !== void 0 && h.unobserve(c.i);
                        h.disconnect();
                        k.unsubscribe()
                    }
                    if (c.i === void 0) return f.complete(),
                        function() {};
                    var h = new d(function(l) {
                        l.forEach(function(m) {
                            f.next(m)
                        })
                    });
                    h.observe(c.i);
                    var k = c.released.subscribe(g);
                    return g
                })).g(mg(a.B, 736), O(function(f) {
                    return f.contentRect
                }));
                return Ld(L(c.i.getBoundingClientRect()), e)
            }), S(di))
        }
    }

    function Wo(a) {
        return function(b) {
            var c = b.g(fo(a, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                })),
                d = a.Oh;
            c = Ld(b.g(O(function() {
                return Dh("resize")
            })), c, d);
            return P(b, c).g(mg(a.B, 737), O(function(e) {
                e = u(e).next().value;
                return e.i === void 0 ? void 0 : e.i.getBoundingClientRect()
            }), Kn(), S(di))
        }
    };

    function Xo(a, b) {
        var c = Yo(a, b).g(Ye(1), nd());
        return function(d) {
            return function(e) {
                e = e.g(U(function(f) {
                    return f.element
                }), S());
                return P([c, e]).g(U(function(f) {
                    var g = u(f);
                    f = g.next().value;
                    g = g.next().value;
                    return Zo(a, f.nh, Uo(a), f.Kh, d, f.Wg, g)
                }), qh(a.h))
            }
        }
    }

    function $o(a, b, c) {
        var d = Xo(a, c)(b);
        return function(e) {
            var f = d(L(e));
            return function(g) {
                return P([g, f]).g(O(function(h) {
                    var k = u(h);
                    h = k.next().value;
                    k = k.next().value;
                    var l = fi(k.value.D, h.value.Z),
                        m = ei(fi(k.value.T, h.value.Z), h.value.X);
                    return {
                        timestamp: h.timestamp.maximum(k.timestamp),
                        value: Object.assign({}, h.value, {
                            R: "nio",
                            T: m,
                            D: l
                        })
                    }
                }))
            }
        }
    }

    function ap(a) {
        return O(function(b) {
            return b.value.W !== "nio" ? b : Object.assign({}, b, {
                value: Object.assign({}, b.value, {
                    X: un(a, !0),
                    O: un(a, !0)
                })
            })
        })
    }

    function bp(a, b) {
        return L(b).g(a, O(function() {
            return b
        }))
    }

    function Yo(a, b) {
        return a.j.timeline !== me ? fd(new ae(2)) : a.MutationObserver ? typeof IntersectionObserver === "undefined" ? fd(new ae(0)) : (new J(function(c) {
            var d = new K,
                e = new Mo(d.next.bind(d), {
                    threshold: [].concat(x(b))
                });
            c.next({
                Kh: d.g(mg(a.B, 735)),
                nh: e,
                Wg: function(f) {
                    f = e.takeRecords(f);
                    f.length > 0 && d.next(f)
                }
            })
        })).g(Me(1), Ye(1), nd()) : fd(new ae(1))
    }

    function cp(a) {
        return Sc(a.sort(function(b, c) {
            return b.time - c.time
        }), Vd)
    }

    function Zo(a, b, c, d, e, f, g) {
        return new J(function(h) {
            function k() {
                v || (v = !0, g.i !== void 0 && b.unobserve(e, g.i), m.unsubscribe(), r.unsubscribe(), t.unsubscribe(), w.unsubscribe())
            }
            if (g.i !== void 0) {
                No(b, e);
                b.observe(e, g.i);
                var l = new Ic({
                        timestamp: a.j.now(),
                        value: Object.assign({}, Po, {
                            W: "nio",
                            R: "nio"
                        })
                    }),
                    m = d.g(Cd(function(z) {
                        return cp(z)
                    }), Q(function(z) {
                        return z.target === g.i
                    }), O(function(z) {
                        return {
                            timestamp: new oe(z.time, me),
                            value: {
                                W: "nio",
                                X: z.rootBounds || ci,
                                O: z.rootBounds || un(a, !0),
                                V: q,
                                R: "nio",
                                T: z.intersectionRect,
                                D: z.boundingClientRect,
                                Z: {
                                    x: 0,
                                    y: 0
                                },
                                isIntersecting: z.isIntersecting,
                                Df: z.isVisible
                            }
                        }
                    }), Xe(l), nd()).subscribe(h),
                    q = new K,
                    t = q.subscribe(function() {
                        f(e);
                        h.next({
                            timestamp: a.j.now(),
                            value: l.value.value
                        });
                        g.i !== void 0 && (b.unobserve(e, g.i), b.observe(e, g.i))
                    }),
                    r = bp(c, g).subscribe(function() {
                        q.next()
                    }),
                    v = !1,
                    w = g.released.subscribe(function() {
                        return k()
                    });
                return k
            }
        })
    };

    function dp(a, b) {
        var c = a.Md().g(O(function() {
            return "b"
        }));
        return Qd(b, c).g(Me(1), W(a.h, 1))
    };

    function ep(a) {
        return function(b) {
            var c;
            return b.g(ef(function(d) {
                return void(c = d.timestamp)
            }), O(function(d) {
                return d.value
            }), a, O(function(d) {
                return {
                    timestamp: c,
                    value: d
                }
            }))
        }
    };
    var fp = function(a) {
            return a.T.width * a.T.height / (a.D.width * a.D.height)
        },
        gp = ep(H(O(function(a) {
            var b;
            return (b = a.Mc) != null ? b : fp(a)
        }), O(function(a) {
            return isFinite(a) ? a : 0
        }))),
        hp = ep(H(O(function(a) {
            var b;
            return (b = a.Mc) != null ? b : fp(a)
        }), O(function(a) {
            return isFinite(a) ? a : -1
        })));
    var ip = function(a, b) {
        this.a = a;
        this.b = b;
        if (a.clock.timeline !== b.clock.timeline) throw Error();
    };
    ip.prototype.ca = function(a) {
        return a instanceof ip ? this.a.ca(a.a) && this.b.ca(a.b) : !1
    };
    ip.prototype.ja = function(a) {
        var b = this.a.ja(a).value,
            c = this.b.ja(a).value;
        return {
            timestamp: a,
            value: [b, c]
        }
    };
    da.Object.defineProperties(ip.prototype, {
        active: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.a.active || this.b.active
            }
        },
        clock: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.a.clock
            }
        },
        u: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var a = this.a.u.timestamp.maximum(this.b.u.timestamp),
                    b = this.a.u.timestamp.equals(a) ? this.a.u.value : this.a.ja(a).value,
                    c = this.b.u.timestamp.equals(a) ? this.b.u.value : this.b.ja(a).value;
                return {
                    timestamp: a,
                    value: [b, c]
                }
            }
        }
    });
    var jp = function(a, b) {
        this.input = a;
        this.Yc = b;
        this.u = {
            timestamp: this.input.u.timestamp,
            value: this.Yc(this.input.u.value)
        }
    };
    jp.prototype.ca = function(a) {
        return a instanceof jp ? this.input.ca(a.input) && this.Yc === a.Yc : !1
    };
    jp.prototype.ja = function(a) {
        a = this.input.ja(a);
        return {
            timestamp: a.timestamp,
            value: this.Yc(a.value)
        }
    };
    da.Object.defineProperties(jp.prototype, {
        active: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.input.active
            }
        },
        clock: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.input.clock
            }
        }
    });

    function kp(a, b, c) {
        c = c === void 0 ? function(d, e) {
            return d === e
        } : c;
        return a.timestamp.equals(b.timestamp) && c(a.value, b.value)
    };
    var lp = function(a, b, c) {
        this.clock = a;
        this.u = b;
        this.active = c
    };
    lp.prototype.ca = function(a) {
        return a instanceof lp ? this.active === a.active && this.clock.timeline === a.clock.timeline && kp(this.u, a.u) : !1
    };
    lp.prototype.ja = function(a) {
        return {
            timestamp: a,
            value: this.u.value + (this.active ? Math.max(0, qe(a, this.u.timestamp)) : 0)
        }
    };
    var mp = function() {};
    mp.prototype.da = function() {
        return this.ja(this.clock.now())
    };
    mp.prototype.ka = function(a) {
        var b = this.clock.timeline,
            c, d = (c = a.get(b)) != null ? c : this.clock.now();
        a.set(b, d);
        return this.ja(d)
    };
    mp.prototype.map = function(a) {
        return new np(this, a)
    };
    mp.prototype.oa = function(a) {
        return new op(this, a)
    };
    var op = function() {
        ip.apply(this, arguments);
        this.map = mp.prototype.map;
        this.oa = mp.prototype.oa;
        this.da = mp.prototype.da;
        this.ka = mp.prototype.ka
    };
    y(op, ip);
    var pp = function() {
        lp.apply(this, arguments);
        this.map = mp.prototype.map;
        this.oa = mp.prototype.oa;
        this.da = mp.prototype.da;
        this.ka = mp.prototype.ka
    };
    y(pp, lp);
    var np = function() {
        jp.apply(this, arguments);
        this.map = mp.prototype.map;
        this.oa = mp.prototype.oa;
        this.da = mp.prototype.da;
        this.ka = mp.prototype.ka
    };
    y(np, jp);

    function qp(a, b) {
        a.Aa && (a.nb = a.Aa);
        a.Aa = b;
        a.nb && a.nb.value ? (b = Math.max(0, qe(b.timestamp, a.nb.timestamp)), a.totalTime += b, a.ia += b) : a.ia = 0;
        return a
    }

    function rp(a) {
        return H($e(qp, {
            totalTime: 0,
            ia: 0
        }), O(function(b) {
            return new pp(a, {
                timestamp: b.Aa.timestamp,
                value: b.totalTime
            }, b.Aa.value)
        }))
    }

    function sp(a) {
        return H($e(qp, {
            totalTime: 0,
            ia: 0
        }), O(function(b) {
            return new pp(a, {
                timestamp: b.Aa.timestamp,
                value: b.ia
            }, b.Aa.value)
        }))
    };

    function tp(a) {
        return H(sp(a), O(function(b) {
            return b.map(function(c) {
                return Math.round(c)
            })
        }))
    };
    var up = function(a, b) {
        this.u = b;
        this.da = mp.prototype.da;
        this.ka = mp.prototype.ka;
        this.map = mp.prototype.map;
        this.oa = mp.prototype.oa;
        this.clock = a
    };
    up.prototype.ca = function(a) {
        return a.active
    };
    up.prototype.ja = function() {
        return this.u
    };
    da.Object.defineProperties(up.prototype, {
        active: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return !1
            }
        }
    });

    function vp(a, b) {
        return b.g(O(function(c) {
            return new up(a.j, {
                timestamp: a.j.now(),
                value: c
            })
        }))
    };

    function wp(a, b) {
        return a >= 1 ? !0 : a <= 0 ? !1 : a >= b
    };

    function xp(a) {
        return function(b) {
            return b.g(ff(a), O(function(c) {
                var d = u(c);
                c = d.next().value;
                d = d.next().value;
                return {
                    timestamp: c.timestamp,
                    value: wp(c.value, d)
                }
            }))
        }
    };
    var yp = O(function(a) {
        if (a.value.W === "omid") {
            if (a.value.R === "nio") return "omio";
            if (a.value.R === "geo") return "omgeo"
        }
        return a.value.R === "geo" || a.value.R === "nio" ? a.value.W : a.value.R
    });

    function zp() {
        return H(Q(function(a, b) {
            return b > 0
        }), Ap, T(-1), S())
    }
    var Ap = H(Q(function(a) {
        return !isNaN(a)
    }), $e(function(a, b) {
        return isNaN(a) ? b : Math.min(a, b)
    }, NaN), S());
    var Bp = ep(H(O(function(a) {
        return a.T.width * a.T.height / (a.X.width * a.X.height)
    }), O(function(a) {
        return isFinite(a) ? Math.min(1, a) : 0
    })));

    function Cp(a, b, c) {
        return a ? P([b, c]).g(Q(function(d) {
            var e = u(d);
            d = e.next().value;
            e = e.next().value;
            return d.timestamp.equals(e.timestamp)
        }), O(function(d) {
            var e = u(d);
            d = e.next().value;
            e = e.next().value;
            return d.value > e.value ? d : e
        })) : b
    }

    function Dp(a) {
        return function(b) {
            var c = b.g(gp),
                d = b.g(Bp);
            return a instanceof J ? a.g(U(function(e) {
                return Cp(e, c, d)
            })) : Cp(a.value, c, d)
        }
    };
    var Ep = H(ep(O(function(a) {
        a = a.Mc ? a.Mc * a.D.width * a.D.height / (a.O.width * a.O.height) : a.T.width * a.T.height / (a.O.width * a.O.height);
        return isFinite(a) ? a : 0
    })));

    function Fp(a, b, c, d) {
        var e = d.Pc,
            f = d.Id,
            g = d.kg,
            h = d.Pe,
            k = d.ee,
            l = d.Hf,
            m = d.Rc;
        d = d.hg;
        b = Gp(a, c, b);
        c = Hp(a, c);
        d = Ip(b, d);
        var q = Jp(a, e, l, b),
            t = q.g(O(function(A) {
                return A.value
            }), S(), W(a, 1), $e(function(A, R) {
                return Math.max(A, R)
            }, 0)),
            r = q.g(O(function(A) {
                return A.value
            }), zp(), W(a, 1)),
            v = b.g(hp, O(function(A) {
                return A.value
            }), Me(2), S(), W(a, 1));
        g = Kp(a, b, g, h);
        var w = g.g(T(!1), S(), O(function(A) {
            return A ? k : f
        }));
        h = q.g(xp(w), S(), W(a, 1));
        var z = P([h, b]).g(Q(function(A) {
                var R = u(A);
                A = R.next().value;
                R = R.next().value;
                return A.timestamp.equals(R.timestamp)
            }),
            O(function(A) {
                var R = u(A);
                A = R.next().value;
                R = R.next().value;
                return {
                    visible: A.value,
                    geometry: R.value.D
                }
            }), $e(function(A, R) {
                return !R.visible && A.visible ? A : R
            }, {
                visible: !1,
                geometry: ci
            }), O(function(A) {
                return A.geometry
            }), T(ci), W(a, 1), S(di));
        l = l instanceof J ? l.g(S(), We()) : Md;
        w = P([l, w]).g(We());
        var C = b.g(Q(function(A) {
                return A.value.W !== "ns" && A.value.R !== "ns"
            }), $e(function(A) {
                return A + 1
            }, 0), T(0), W(a, 1)),
            I = c.g(We(!0), T(!1), W(a, 1));
        I = P([m, I]).g(O(function(A) {
            var R = u(A);
            A = R.next().value;
            R = R.next().value;
            return A &&
                !R
        }), W(a, 1));
        var X = b.g(Ep, S()),
            pa = X.g(O(function(A) {
                return A.value
            }), $e(function(A, R) {
                return Math.max(A, R)
            }, 0), S(), W(a, 1)),
            F = X.g(O(function(A) {
                return A.value
            }), zp(), W(a, 1));
        return {
            te: l,
            tc: w,
            ua: {
                Zh: b,
                If: b.g(yp),
                Jc: z.g(S(di)),
                visible: h.g(S(kp)),
                we: q.g(S(kp)),
                Gf: t,
                Hh: r,
                Se: b.g(Jo, S(Nb)),
                ui: X,
                Ah: pa,
                Gh: F,
                Oc: c,
                V: (new Y(new K)).P(a),
                Bf: g,
                Pc: e,
                Rc: m,
                mf: I,
                xi: C,
                xh: v,
                kd: d
            }
        }
    }

    function Hp(a, b) {
        return b.g(Q(function() {
            return !1
        }), O(function(c) {
            return c
        }), Ge(function(c) {
            return (new Y(c)).P(a)
        }))
    }

    function Ip(a, b) {
        a = P([a, b]).g(O(function(e) {
            var f = u(e);
            e = f.next().value;
            if (f.next().value && e.value.isIntersecting) return e.value.Df
        }), S());
        var c = a.g(O(function(e) {
                return e === void 0 ? !0 : e
            }), $e(function(e, f) {
                return e || !f
            }, !1)),
            d = a.g($e(function(e, f) {
                return f === void 0 ? e : f ? !1 : e != null ? e : !0
            }, void 0), O(function(e) {
                return !!e
            }));
        return P([b, Sd(a, c, d)]).g(O(function(e) {
            var f = u(e);
            e = f.next().value;
            var g = u(f.next().value);
            f = g.next().value;
            var h = g.next().value;
            g = g.next().value;
            var k = 0;
            if (!e) return 0;
            if (f === void 0) return 16;
            f && (k |= 1);
            f || (k |= 2);
            h && (k |= 4);
            g && (k |= 8);
            return k
        }))
    }

    function Gp(a, b, c) {
        return b.g(Pd(Md), W(a, 1)).g(S(function(d, e) {
            return kp(d, e, Qo)
        }), T({
            timestamp: c.now(),
            value: Po
        }), W(a, 1))
    }

    function Jp(a, b, c, d) {
        c = d.g(Dp(c), ep(O(function(e) {
            return so(e)
        })), W(a, 1));
        return b instanceof Y ? c : P([c, b]).g(O(function(e) {
            var f = u(e);
            e = f.next().value;
            f = f.next().value;
            return {
                timestamp: f.timestamp.maximum(e.timestamp),
                value: f.value ? 0 : e.value
            }
        }), S(kp), W(a, 10))
    }

    function Kp(a, b, c, d) {
        b = [b.g(O(function(e) {
            return e.value.D.width * e.value.D.height >= 242500
        }))];
        c instanceof J && b.push(c.g(O(function(e) {
            return !!e
        })));
        c = P(b);
        return d ? c.g(O(function(e) {
            return e.some(function(f) {
                return f
            })
        }), T(!1), S(), W(a, 1)) : (new Y(!1)).P(a)
    };
    var Lp = function(a) {
            this.j = a;
            this.hd = null;
            this.timeout = new K
        },
        Np = function(a, b) {
            Mp(a);
            a.hd = a.j.setTimeout(function() {
                return void a.timeout.next()
            }, b)
        },
        Mp = function(a) {
            a.hd !== null && (a.j.clearTimeout(a.hd), a.hd = null)
        };

    function Op(a, b, c, d) {
        var e = Pp.cg,
            f = new Lp(b);
        c = c.g(T(void 0), U(function() {
            Mp(f);
            return d
        })).g(O(function(g) {
            Mp(f);
            var h = g.u,
                k = g.active;
            h.value >= e || !k || (k = b.now(), k = Math.max(0, qe(k, h.timestamp)), Np(f, Math.max(0, e - h.value - k)));
            return g.map(function(l) {
                return l >= e
            })
        }));
        return P([c, Ld(f.timeout, L(void 0))]).g(O(function(g) {
            return u(g).next().value
        }), df(function(g) {
            return !g.da().value
        }, !0), W(a, 1))
    };

    function Qp(a) {
        var b = new pp(a, {
            timestamp: a.now(),
            value: 0
        }, !1);
        return H(sp(a), $e(function(c, d) {
            return c.u.value > d.u.value ? new pp(a, c.u, !1) : d
        }, b), O(function(c) {
            return c.map(function(d) {
                return Math.round(d)
            })
        }))
    };

    function Rp(a) {
        return function(b) {
            return H(xp(L(b)), Qp(a))
        }
    };

    function Sp(a) {
        return function(b) {
            return H(ep(O(function(c) {
                return wp(c, b)
            })), rp(a), O(function(c) {
                return c.map(function(d) {
                    return Math.round(d)
                })
            }))
        }
    };

    function Tp(a) {
        return a.map(function(b) {
            return b.map(function(c) {
                return [c]
            })
        }).reduce(function(b, c) {
            return b.oa(c).map(function(d) {
                return d.flat()
            })
        })
    }

    function Up(a, b) {
        return a.oa(b).map(function(c) {
            var d = u(c);
            c = d.next().value;
            d = d.next().value;
            return c - d
        })
    }

    function Vp(a, b, c, d, e, f) {
        var g = Wp;
        if (g.length > 1)
            for (var h = 0; h < g.length - 1; h++)
                if (g[h] < g[h + 1]) throw Error();
        h = f.g(T(void 0), U(function() {
            return d.g(tp(a))
        }), S(function(k, l) {
            return k.ca(l)
        }), W(b, 1));
        f = f.g(T(void 0), U(function() {
            return d.g(Qp(a))
        }), S(function(k, l) {
            return k.ca(l)
        }), W(b, 1));
        return {
            lc: e.g(T(void 0), U(function() {
                return c.g(Ko(Rp(a), g))
            }), O(Tp), S(function(k, l) {
                return k.ca(l)
            }), W(b, 1)),
            vc: e.g(T(void 0), U(function() {
                return c.g(Ko(Sp(a), g), O(function(k) {
                    return k.map(function(l, m) {
                        return m > 0 ?
                            Up(l, k[m - 1]) : l
                    })
                }))
            }), O(Tp), S(function(k, l) {
                return k.ca(l)
            }), W(b, 1)),
            kc: f,
            cb: h.g(S(function(k, l) {
                return k.ca(l)
            }), W(b, 1))
        }
    };

    function Xp(a) {
        var b;
        if (b = Yp(a)) b = !Zp(a, "abgcp") && !Zp(a, "abgc") && !(typeof a.id === "string" && a.id === "abgb") && !(typeof a.id === "string" && a.id === "mys-abgc") && !Zp(a, "cbb");
        return b
    }

    function Zp(a, b) {
        return a.classList ? a.classList.contains(b) : (" " + a.className + " ").indexOf(" " + b + " ") > -1
    }

    function Yp(a) {
        try {
            var b = a.getBoundingClientRect();
            return b && b.height >= 30 && b.width >= 30
        } catch (c) {
            return !1
        }
    }

    function $p(a, b) {
        if (a.i === void 0 || !a.i.children) return a;
        for (var c = Mb(a.i.children); c.length;) {
            var d = b ? c.filter(Xp) : c.filter(Yp);
            if (d.length === 1) return new Eh(d[0]);
            if (d.length > 1) break;
            c = Pb(c, function(e) {
                return Mb(e.children)
            })
        }
        return a
    }

    function aq(a, b, c, d, e) {
        if (c) return {
            Ic: b,
            ob: L(null)
        };
        c = b.element.g(O(function(f) {
            a: if (f.i === void 0 || Yp(f.i)) f = {
                    Zc: f,
                    ob: "mue"
                };
                else {
                    var g = $p(f, e);
                    if (g.i !== void 0 && Yp(g.i)) f = {
                        Zc: g,
                        ob: "ie"
                    };
                    else {
                        if (d || a.Td)
                            if (g = a.document.querySelector(".GoogleActiveViewInnerContainer")) {
                                f = {
                                    Zc: new Eh(g),
                                    ob: "ce"
                                };
                                break a
                            }
                        f = {
                            Zc: f,
                            ob: "mue"
                        }
                    }
                }return f
        }), bf());
        return {
            Ic: {
                qb: b.qb,
                element: c.g(O(function(f) {
                    return f.Zc
                }))
            },
            ob: c.g(O(function(f) {
                return f.ob
            }))
        }
    };

    function bq(a, b, c, d) {
        var e = d.Pc,
            f = d.Id,
            g = d.kg,
            h = d.Pe,
            k = d.ee,
            l = d.Hf,
            m = d.Rc;
        d = d.hg;
        b = cq(a, c, b);
        c = dq(a, c);
        d = eq(b, d);
        var q = fq(a, e, l, b),
            t = q.g(O(function(F) {
                return F.value
            }), S(), W(a, 1), $e(function(F, A) {
                return Math.max(F, A)
            }, 0)),
            r = q.g(O(function(F) {
                return F.value
            }), zp(), W(a, 1)),
            v = b.g(hp, O(function(F) {
                return F.value
            }), Me(2), S(), W(a, 1));
        g = gq(a, b, g, h);
        var w = g.g(T(!1), S(), O(function(F) {
            return F ? k : f
        }));
        h = q.g(xp(w), S(), W(a, 1));
        var z = P([h, b]).g(Q(function(F) {
                var A = u(F);
                F = A.next().value;
                A = A.next().value;
                return F.timestamp.equals(A.timestamp)
            }),
            O(function(F) {
                var A = u(F);
                F = A.next().value;
                A = A.next().value;
                return {
                    visible: F.value,
                    geometry: A.value.D
                }
            }), $e(function(F, A) {
                return !A.visible && F.visible ? F : A
            }, {
                visible: !1,
                geometry: ci
            }), O(function(F) {
                return F.geometry
            }), T(ci), W(a, 1), S(di));
        l = l instanceof J ? l.g(S(), We()) : Md;
        w = P([l, w]).g(We());
        var C = b.g(Q(function(F) {
                return F.value.W !== "ns" && F.value.R !== "ns"
            }), $e(function(F) {
                return F + 1
            }, 0), T(0), W(a, 1)),
            I = c.g(We(!0), T(!1), W(a, 1));
        I = P([m, I]).g(O(function(F) {
            var A = u(F);
            F = A.next().value;
            A = A.next().value;
            return F &&
                !A
        }), W(a, 1));
        var X = b.g(Ep, S()),
            pa = X.g(O(function(F) {
                return F.value
            }), $e(function(F, A) {
                return Math.max(F, A)
            }, 0), S(), W(a, 1));
        a = X.g(O(function(F) {
            return F.value
        }), zp(), W(a, 1));
        return {
            te: l,
            tc: w,
            ua: {
                Zh: b,
                If: b.g(yp),
                Jc: z.g(S(di)),
                visible: h.g(S(kp)),
                we: q.g(S(kp)),
                Gf: t,
                Hh: r,
                Se: b.g(Jo, S(Nb)),
                ui: X,
                Ah: pa,
                Gh: a,
                Oc: c,
                V: b.g(O(function(F) {
                    return F.value.V
                })),
                Bf: g,
                Pc: e,
                Rc: m,
                mf: I,
                xi: C,
                xh: v,
                kd: d
            }
        }
    }

    function dq(a, b) {
        return b.g(Q(function() {
            return !1
        }), O(function(c) {
            return c
        }), Ge(function(c) {
            return (new Y(c)).P(a)
        }))
    }

    function cq(a, b, c) {
        return b.g(Pd(Md), W(a, 1)).g(S(function(d, e) {
            return kp(d, e, Qo)
        }), T({
            timestamp: c.now(),
            value: Po
        }), W(a, 1))
    }

    function fq(a, b, c, d) {
        c = d.g(Dp(c), ep(O(function(e) {
            return so(e)
        })), W(a, 1));
        return b instanceof Y ? c : P([c, b]).g(O(function(e) {
            var f = u(e);
            e = f.next().value;
            f = f.next().value;
            return {
                timestamp: f.timestamp.maximum(e.timestamp),
                value: f.value ? 0 : e.value
            }
        }), S(kp), W(a, 1))
    }

    function gq(a, b, c, d) {
        b = [b.g(O(function(e) {
            return e.value.D.width * e.value.D.height >= 242500
        }))];
        c instanceof J && b.push(c.g(O(function(e) {
            return !!e
        })));
        c = P(b);
        return d ? c.g(O(function(e) {
            return e.some(function(f) {
                return f
            })
        }), T(!1), S(), W(a, 1)) : (new Y(!1)).P(a)
    }

    function eq(a, b) {
        a = P([a, b]).g(O(function(e) {
            var f = u(e);
            e = f.next().value;
            if (f.next().value && e.value.isIntersecting) return e.value.Df
        }), S());
        var c = a.g(O(function(e) {
                return e === void 0 ? !0 : e
            }), $e(function(e, f) {
                return e || !f
            }, !1)),
            d = a.g($e(function(e, f) {
                return f === void 0 ? e : f ? !1 : e != null ? e : !0
            }, void 0), O(function(e) {
                return !!e
            }));
        return P([b, Sd(a, c, d)]).g(O(function(e) {
            var f = u(e);
            e = f.next().value;
            var g = u(f.next().value);
            f = g.next().value;
            var h = g.next().value;
            g = g.next().value;
            var k = 0;
            if (!e) return 0;
            if (f === void 0) return 16;
            f && (k |= 1);
            f || (k |= 2);
            h && (k |= 4);
            g && (k |= 8);
            return k
        }))
    };
    var hq = H(Cn("data-google-av-itpl"), O(function(a) {
        return Number(a)
    }), O(function(a) {
        return isNaN(a) ? 1 : a
    }));
    var iq = {
            Ci: "addEventListener",
            Mi: "getMaxSize",
            Ni: "getScreenSize",
            Oi: "getState",
            Pi: "getVersion",
            aj: "removeEventListener",
            Wi: "isViewable"
        },
        jq = function(a, b) {
            this.qa = null;
            this.lh = new K;
            b = b || this.yi;
            var c = a.Td,
                d = !a.Cb;
            if (c && d) {
                var e = a.global.top.mraid;
                if (e) {
                    this.Hc = b(e);
                    this.qa = e;
                    this.pb = 3;
                    return
                }
            }(a = a.global.mraid) ? (this.Hc = b(a), this.qa = a, this.pb = c ? d ? 2 : 1 : 0) : (this.pb = -1, this.Hc = 2)
        };
    jq.prototype.addEventListener = function(a, b) {
        return this.Mb("addEventListener", a, b)
    };
    jq.prototype.removeEventListener = function(a, b) {
        return this.Mb("removeEventListener", a, b)
    };
    jq.prototype.pf = function() {
        var a = this.Mb("getVersion");
        return typeof a === "string" ? a : ""
    };
    jq.prototype.getState = function() {
        var a = this.Mb("getState");
        return typeof a === "string" ? a : ""
    };
    var kq = function(a) {
            a = a.Mb("isViewable");
            return typeof a === "boolean" ? a : !1
        },
        lq = function(a) {
            if (a.qa) return a = a.qa.AFMA_LIDAR, typeof a === "string" ? a : void 0
        };
    jq.prototype.yi = function(a) {
        return a ? a.IS_GMA_SDK ? Object.values(iq).every(function(b) {
            return typeof a[b] === "function"
        }) ? 0 : 1 : 2 : 1
    };
    jq.prototype.Mb = function(a) {
        var b = B.apply(1, arguments);
        if (this.qa) try {
            return this.qa[a].apply(this.qa, x(b))
        } catch (c) {
            this.lh.next(a)
        }
    };
    da.Object.defineProperties(jq.prototype, {
        af: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                if (this.qa) {
                    var a = this.qa.AFMA_LIDAR_EXP_1;
                    return a === void 0 ? void 0 : !!a
                }
            },
            set: function(a) {
                this.qa && (this.qa.AFMA_LIDAR_EXP_1 = a)
            }
        }
    });

    function mq(a, b) {
        return (new jq(a)).pb !== -1 ? (new Y(!0)).P(a.h) : b.g(Cn("data-google-av-inapp"), O(function(c) {
            return c !== null
        }), W(a.h, 1))
    };
    var oq = function(a, b) {
            var c = this;
            this.j = a;
            this.fe = this.Xc = null;
            this.di = b.g(S()).subscribe(function(d) {
                nq(c);
                c.fe = d
            })
        },
        pq = function(a, b) {
            nq(a);
            a.Xc = a.j.setTimeout(function() {
                var c;
                return void((c = a.fe) == null ? void 0 : c.next())
            }, b)
        },
        nq = function(a) {
            a.Xc !== null && a.j.clearTimeout(a.Xc);
            a.Xc = null
        };
    oq.prototype.dispose = function() {
        nq(this);
        this.di.unsubscribe();
        this.fe = null
    };

    function qq(a, b, c, d, e) {
        var f = Pp.cg;
        var g = g === void 0 ? new oq(b, d) : g;
        return (new J(function(h) {
            var k = c.g(T(void 0), U(function() {
                return rq(e)
            })).g(O(function(l) {
                var m = l.value;
                l = l.timestamp;
                var q = m.visible;
                m = m.cb;
                var t = m >= f;
                t || !q ? nq(g) : (l = Math.max(0, qe(b.now(), l)), pq(g, Math.max(0, f - m - l)));
                return t
            }), $e(function(l, m) {
                return m || l
            }, !1), S()).subscribe(h);
            return function() {
                g.dispose();
                k.unsubscribe()
            }
        })).g(df(function(h) {
            return !h
        }, !0), W(a, 1))
    }

    function rq(a) {
        return vo([a, a.g(Lo())]).g(O(function(b) {
            var c = u(b);
            b = c.next().value;
            c = c.next().value;
            return {
                timestamp: b.timestamp,
                value: {
                    visible: b.value,
                    cb: c.value
                }
            }
        }), S(function(b, c) {
            return kp(b, c, function(d, e) {
                return d.cb === e.cb && d.visible === e.visible
            })
        }))
    };

    function sq(a, b) {
        return {
            ud: b.g(Cn("data-google-av-adk")),
            Vb: b.g(Cn("data-google-av-btr"), S(), O(function(c) {
                return c === null ? [] : c.split("|").filter(function(d) {
                    return d !== ""
                })
            })),
            Cd: b.g(Cn("data-google-av-cpmav"), S(), O(function(c) {
                return c === null ? [] : c.split("|").filter(function(d) {
                    return d !== ""
                })
            })),
            Ce: b.g(Cn("data-google-av-vrus"), S(), O(function(c) {
                return c === null ? [] : c.split("|").filter(function(d) {
                    return d !== ""
                })
            })),
            Jg: ho(a, b),
            flags: b.g(Cn("data-google-av-flags"), S()),
            Va: mq(a, b),
            Zd: b.g(zo("cr", function(c) {
                return c ===
                    "1"
            }), S()),
            rh: b.g(zo("omid", function(c) {
                return c === "1"
            }), S()),
            Vd: b.g(hq),
            metadata: b.g(Cn("data-google-av-metadata")),
            Ka: b.g(Jn),
            ra: b.g(Dn),
            Bi: b.g(zo("la", function(c) {
                return c === "1"
            }), S()),
            hb: b.g(Cn("data-google-av-turtlex"), O(function(c) {
                return c !== null
            }), S()),
            de: b.g(Cn("data-google-av-vattr"), O(function(c) {
                return c !== null
            }), S())
        }
    };

    function tq() {
        return H(yo(), $e(function(a, b) {
            return Math.max(a, b)
        }, 0), O(function(a) {
            return Math.round(a)
        }))
    };

    function uq(a) {
        return H(xp(L(a)), tq())
    };

    function vq(a, b, c, d, e) {
        c = c.g(O(function() {
            return !1
        }));
        d = P([e, d]).g(U(function(f) {
            f = u(f).next().value;
            return wq(b, f)
        }));
        return Ld(L(!1), c, d).g(S(), W(a.h, 1))
    }

    function wq(a, b) {
        return a.g(O(function(c) {
            return b || c === 0 || c === 2
        }))
    };
    var xq = [33, 32],
        yq = H(hq, O(function(a) {
            return xq.indexOf(a) >= 0
        }), S());

    function zq(a, b, c, d, e, f) {
        var g = c.g(O(function(k) {
                return k === 9
            })),
            h = b.element.g(yq);
        c = e.g(Q(function(k) {
            return k
        }), U(function() {
            return P([g, h])
        }), O(function(k) {
            var l = u(k);
            k = l.next().value;
            return !l.next().value || k
        }), S());
        f = P([c, d.g(S()), f]).g(O(function(k) {
            var l = u(k);
            k = l.next().value;
            var m = l.next().value;
            l = l.next().value;
            return aq(a, b, !k, m, l)
        }), Ye(1), nd());
        d = f.g(O(function(k) {
            return k.Ic
        }));
        f = f.g(U(function(k) {
            return k.ob
        }), T(null), S(), W(a.h, 1));
        return {
            Ha: d,
            Xb: f
        }
    };

    function Aq(a) {
        var b = b === void 0 ? !1 : b;
        return H(U(function(c) {
            return $h(a.document, c, b)
        }), W(a.h, 1))
    };
    var Bq = function(a, b, c, d, e, f) {
        this.hc = b.element.g(Aq(a), W(a.h, 1));
        this.Wf = vq(a, c, b.element, this.hc, d);
        c = zq(a, b, e, d, this.Wf, f);
        d = c.Xb;
        this.Ha = c.Ha;
        this.Xb = d;
        this.De = Ld((new Y(1)).P(a.h), b.element.g(Me(1), O(function() {
            return 2
        }), W(a.h, 1)), this.hc.g(Me(1), O(function() {
            return 3
        }), W(a.h, 1)), this.Wf.g(Q(Boolean), Me(1), O(function() {
            return 0
        }), W(a.h, 1))).g(df(function(g) {
            return g !== 0
        }, !0), W(a.h, 0))
    };

    function Cq(a, b) {
        return a && b === 0 ? 15 : a || b !== 1 ? null : 14
    }

    function Dq(a, b, c) {
        return b instanceof J ? b.g(U(function(d) {
            return (d = Cq(d, c)) ? fd(new ae(d)) : a
        })) : (b = Cq(b.value, c)) ? fd(new ae(b)) : a
    };

    function Eq(a) {
        var b = new ae(13);
        if (a.length < 1) return {
            chain: Jc,
            zd: Jc
        };
        var c = new K,
            d = a[0];
        return {
            chain: a.slice(1).reduce(function(e, f) {
                return e.g(Ge(function(g) {
                    c.next(g);
                    return f
                }))
            }, d).g(Ge(function(e) {
                c.next(e);
                return fd(b)
            }), Xe(new K), nd()),
            zd: c
        }
    };
    var Fq = function() {};
    var Gq = function(a, b) {
        this.context = a;
        this.oi = b
    };
    y(Gq, Fq);
    Gq.prototype.Pa = function(a, b) {
        var c = this.oi.map(function(f) {
                return f.Pa(a, b)
            }),
            d = Eq(c.map(function(f) {
                return f.Sa
            })),
            e = d.zd.g(Hq());
        return {
            Sa: d.chain.g(W(this.context.h, 1)),
            Ma: Object.assign.apply(Object, [{
                ue: e,
                Ij: d.zd
            }].concat(x(c.map(function(f) {
                return f.Ma
            }))))
        }
    };
    var Hq = function() {
        return $e(function(a, b) {
            b instanceof ae ? a.push(b.Dh) : a.push(-1);
            return a
        }, [])
    };

    function Iq(a, b) {
        var c = a.g(Xe(new K), nd());
        return U(function(d) {
            return c.g(b(d))
        })
    };

    function Jq(a, b) {
        var c = c === void 0 ? function() {
            var f = (jh(a.global) ? a.global.innerWidth : 0) || a.Nd() || 0,
                g = (jh(a.global) ? a.global.innerHeight : 0) || a.Ld() || 0;
            return {
                left: 0,
                top: 0,
                width: f,
                height: g
            }
        } : c;
        var d = a.Cb ? Zh(a.document) ? a.qh ? null : fd(new ae(5)) : fd(new ae(4)) : fd(new ae(3));
        if (d) return d;
        var e = new K;
        return Ld(L({}), b, e).g(O(function() {
            var f = Kq(a, c);
            return {
                timestamp: a.j.now(),
                value: {
                    W: "iem",
                    X: f,
                    O: f,
                    V: e,
                    Z: {
                        x: 0,
                        y: 0
                    }
                }
            }
        }), W(a.h, 1))
    }

    function Kq(a, b) {
        b = b();
        var c = eh(document),
            d = function(t, r) {
                return !!a.document.elementFromPoint(t, r)
            },
            e = Math.floor(b.left - c.x),
            f = Math.floor(b.top - c.y),
            g = Math.floor(b.left + b.width - c.x),
            h = Math.floor(b.top + b.height - c.y);
        b = d(e, f);
        c = d(g, h);
        if (b && c) return {
            top: f,
            left: e,
            width: g - e,
            height: h - f
        };
        var k = d(g, f),
            l = d(e, h);
        if (b) h = Lq(f, h, function(t) {
            return d(e, t)
        }), g = Lq(e, g, function(t) {
            return d(t, f)
        });
        else if (k) h = Lq(f, h, function(t) {
            return d(g, t)
        }), e = Lq(g, e, function(t) {
            return d(t, f)
        });
        else if (l) f = Lq(h, f, function(t) {
            return d(e,
                t)
        }), g = Lq(e, g, function(t) {
            return d(t, h)
        });
        else if (c) f = Lq(h, f, function(t) {
            return d(g, t)
        }), e = Lq(g, e, function(t) {
            return d(t, h)
        });
        else {
            var m = Math.floor((e + g) / 2),
                q = Math.floor((f + h) / 2);
            if (!d(m, q)) return {
                left: 0,
                top: 0,
                width: 0,
                height: 0
            };
            f = Lq(q, f, function(t) {
                return d(m, t)
            });
            h = Lq(q, h, function(t) {
                return d(m, t)
            });
            e = Lq(m, e, function(t) {
                return d(t, q)
            });
            g = Lq(m, g, function(t) {
                return d(t, q)
            })
        }
        return {
            top: f,
            left: e,
            width: g - e,
            height: h - f
        }
    }

    function Lq(a, b, c) {
        if (c(b)) return b;
        for (var d = 15; d--;) {
            var e = Math.floor((a + b) / 2);
            if (e === a || e === b) break;
            c(e) ? a = e : b = e
        }
        return a
    };
    var Mq = function(a, b) {
        this.context = a;
        this.Ia = b
    };
    y(Mq, Fq);
    Mq.prototype.Pa = function(a, b) {
        var c = Iq(Jq(this.context, this.Ia), So(this.context, b.Ka));
        return {
            Sa: Dq(a.Ha.g(c), b.Va, 0),
            Ma: {}
        }
    };

    function Nq(a, b) {
        if (a.Cb) return fd(new ae(6));
        var c = new K;
        return Ld(L({}), b, c).g(O(function() {
            return {
                timestamp: a.j.now(),
                value: {
                    W: "geo",
                    X: Oq(a),
                    O: un(a, !0),
                    V: c,
                    Z: {
                        x: 0,
                        y: 0
                    }
                }
            }
        }), qh(a.h))
    }

    function Oq(a) {
        var b = un(a, !1);
        if (!a.Td || !jh(a.global.parent) || a.global.parent === a.global) return b;
        var c = new rn(a.global.parent, a.Ba);
        c.H = a.H;
        c = Oq(c);
        a = a.global.frameElement.getBoundingClientRect();
        return ei(fi(ei(c, a), {
            x: b.left - a.left,
            y: b.top - a.top
        }), b)
    };
    var Pq = function(a, b) {
        this.context = a;
        this.Ia = b
    };
    y(Pq, Fq);
    Pq.prototype.Pa = function(a, b) {
        var c = Iq(Nq(this.context, this.Ia), So(this.context, b.Ka));
        return {
            Sa: Dq(a.Ha.g(c), b.Va, 0),
            Ma: {}
        }
    };
    var Qq = function(a, b, c) {
        c = c === void 0 ? Xo(a, b) : c;
        this.context = a;
        this.oh = c
    };
    y(Qq, Fq);
    Qq.prototype.Pa = function(a, b) {
        var c = this.oh(b.ig);
        return {
            Sa: Dq(a.Ha.g(c, ap(this.context)), b.Va, 0),
            Ma: {}
        }
    };

    function Rq(a, b, c, d, e) {
        var f = f === void 0 ? new jq(a) : f;
        var g = g === void 0 ? kf(a.j, 500) : g;
        var h = h === void 0 ? kf(a.j, 100) : h;
        e = L(f).g(Sq(c), ef(function(k) {
            d.next(k.pb)
        }), Tq(a, h), Uq(a), Vq(a, e), Ye(1), nd());
        f = new K;
        b = Ld(L({}), b, f);
        return e.g(Wq(a, f, b, g, c), W(a.h, 1))
    }

    function Vq(a, b) {
        return H(function(c) {
            return P([c, b])
        }, Ne(function(c) {
            var d = u(c);
            c = d.next().value;
            return d.next().value !== 9 || kq(c) ? L(!0) : Xq(a, c, "viewableChange").g(Q(function(e) {
                return u(e).next().value
            }), Me(1))
        }), O(function(c) {
            return u(c).next().value
        }))
    }

    function Sq(a) {
        return U(function(b) {
            if (b.pb === -1) return a.next("if"), fd(new ae(7));
            if (b.Hc !== 0) switch (b.Hc) {
                case 1:
                    return a.next("mm"), fd(new ae(18));
                case 2:
                    return a.next("ng"), fd(new ae(17));
                default:
                    return a.next("i"), fd(new ae(8))
            }
            return L(b)
        })
    }

    function Tq(a, b) {
        return Ne(function() {
            var c = a.Kf;
            return Xh(a.document) === "complete" ? L(!0) : c.g(Ne(function() {
                return b
            }))
        })
    }
    var Uq = function(a) {
        return U(function(b) {
            return b.getState() !== "loading" ? L(b) : Xq(a, b, "ready").g(O(function() {
                return b
            }))
        })
    };

    function Wq(a, b, c, d, e) {
        return U(function(f) {
            var g = lq(f);
            if (typeof g !== "string") return e.next("nc"), fd(new ae(9));
            f.af !== void 0 && (f.af = !0);
            g = Xq(a, f, g, Yq);
            var h = {
                version: f.pf(),
                pb: f.pb
            };
            g = g.g(O(function(l) {
                return Zq.apply(null, [a, b, f, h].concat(x(l)))
            }));
            var k = d.g(ef(function() {
                e.next("mt")
            }), U(function() {
                return fd(new ae(10))
            }));
            g = Qd(g, k);
            return P([g, c]).g(O(function(l) {
                l = u(l).next().value;
                return Object.assign({}, l, {
                    timestamp: a.j.now()
                })
            }))
        })
    }

    function Yq(a, b) {
        return (b === null || typeof b === "number") && (a === null || !!a && typeof a.height === "number" && typeof a.width === "number" && typeof a.x === "number" && typeof a.y === "number")
    }

    function Zq(a, b, c, d, e, f) {
        e = e ? {
            left: e.x,
            top: e.y,
            width: e.width,
            height: e.height
        } : ci;
        c = c.Mb("getMaxSize");
        var g = c != null && typeof c.width === "number" && typeof c.height === "number" ? c : {
            width: 0,
            height: 0
        };
        c = {
            left: 0,
            top: 0,
            width: -1,
            height: -1
        };
        if (g) {
            var h = Number(String(g.width));
            g = Number(String(g.height));
            c = isNaN(h) || isNaN(g) ? c : {
                left: 0,
                top: 0,
                width: h,
                height: g
            }
        }
        a = {
            value: {
                X: e,
                O: c,
                W: "mraid",
                V: b,
                Z: {
                    x: 0,
                    y: 0
                }
            },
            timestamp: a.j.now()
        };
        return Object.assign({}, a, d, {
            gj: f
        })
    }

    function Xq(a, b, c, d) {
        d = d === void 0 ? function() {
            return !0
        } : d;
        return (new J(function(e) {
            var f = a.B.Pb(745, function() {
                e.next(B.apply(0, arguments))
            });
            b.addEventListener(c, f);
            return function() {
                b.removeEventListener(c, f)
            }
        })).g(Q(function(e) {
            return d.apply(null, x(e))
        }))
    };
    var $q = function(a, b) {
        this.context = a;
        this.Ia = b
    };
    y($q, Fq);
    $q.prototype.Pa = function(a, b) {
        var c = new hd(1),
            d = new hd(1),
            e = Iq(Rq(this.context, this.Ia, c, d, b.Ka), So(this.context, b.Ka));
        return {
            Sa: Dq(a.Ha.g(e), b.Va, 1),
            Ma: {
                ge: c.g(W(this.context.h, 1)),
                he: d.g(W(this.context.h, 1))
            }
        }
    };

    function ar(a) {
        return ["backgrounded", "notFound", "hidden", "noOutputDevice"].includes(a)
    };

    function br() {
        var a = Error;
        return Tm(function(b) {
            return b instanceof a
        }, function() {
            return Sm(a)
        })
    };

    function cr(a, b) {
        var c = c === void 0 ? null : c;
        var d = new K,
            e = void 0,
            f = a.lf,
            g = d.g(O(function() {
                return e ? Object.assign({}, e, {
                    timestamp: a.j.now()
                }) : null
            }), Q(function(k) {
                return k !== null
            }), O(function(k) {
                return k
            }));
        b = P([Ld(f, g), b]);
        var h = c;
        return b.g(Q(function(k) {
            k = u(k).next().value;
            h === null && (h = k.value.xg);
            return k.value.xg === h
        }), ef(function(k) {
            return void(e = u(k).next().value)
        }), O(function(k) {
            var l = u(k);
            k = l.next().value;
            l = l.next().value;
            try {
                var m = k.value.data,
                    q = k.timestamp,
                    t = m.viewport,
                    r, v, w = Object.assign({},
                        t, {
                            width: (r = t == null ? void 0 : t.width) != null ? r : 0,
                            height: (v = t == null ? void 0 : t.height) != null ? v : 0,
                            x: 0,
                            y: 0,
                            Dj: t ? t.width * t.height : 0
                        }),
                    z = dr(w),
                    C = m.adView,
                    I = C.measuringElement && C.containerGeometry ? dr(C.containerGeometry) : dr(C.geometry),
                    X = dr(C.geometry),
                    pa = C.reasons.some(ar),
                    F = pa ? ci : dr(C.onScreenGeometry),
                    A;
                l && (A = C.percentageInView / 100);
                l && pa && (A = 0);
                return {
                    timestamp: q,
                    value: {
                        W: "omid",
                        X: I,
                        O: z,
                        V: d,
                        R: "omid",
                        D: X,
                        Z: {
                            x: I.left,
                            y: I.top
                        },
                        T: F,
                        Mc: A
                    }
                }
            } catch (hb) {
                m = br();
                q = [];
                Um(m, hb, q) || Xm.apply(null, [void 0, void 0, "Guard " +
                    m.qf().trim() + " failed:"
                ].concat(x(q.reverse())));
                var R, mb;
                m = (mb = (R = hb) == null ? void 0 : R.message) != null ? mb : "An unknown error occurred";
                R = "Error while processing geometryChange event: " + JSON.stringify(k.value) + "; " + m;
                throw Error(R);
            }
        }), Ye(1), nd())
    }

    function dr(a) {
        var b, c, d, e;
        return {
            left: Math.floor((b = a == null ? void 0 : a.x) != null ? b : 0),
            top: Math.floor((c = a == null ? void 0 : a.y) != null ? c : 0),
            width: Math.floor((d = a == null ? void 0 : a.width) != null ? d : 0),
            height: Math.floor((e = a == null ? void 0 : a.height) != null ? e : 0)
        }
    };

    function er(a, b, c, d) {
        c = c === void 0 ? Md : c;
        var e = a.h;
        if (b === null) return fd(new ae(20));
        if (!b.validate()) return fd(new ae(21));
        var f;
        d = fr(e, b, d).g(O(function(g) {
            var h = g.value;
            g = g.timestamp;
            var k = b.j,
                l = a.j;
            if (k.timeline !== g.timeline) throw new fe;
            g = new oe(g.value - k.now().value + l.now().value, l.timeline);
            return f = {
                value: h,
                timestamp: g
            }
        }));
        return Ld(d, c.g(O(function() {
            return f
        }))).g(Q(function(g) {
            return g !== void 0
        }), O(function(g) {
            return g
        }), W(a.h, 1))
    }

    function fr(a, b, c) {
        return cr(b, c).g(W(a, 1), O(function(d) {
            return {
                timestamp: d.timestamp,
                value: {
                    Z: {
                        x: d.value.D.left,
                        y: d.value.D.top
                    },
                    X: d.value.T,
                    O: d.value.O,
                    W: d.value.R,
                    V: d.value.V
                }
            }
        }))
    };
    var gr = function(a, b, c) {
        this.fa = a;
        this.M = b;
        this.Ia = c
    };
    y(gr, Fq);
    gr.prototype.Pa = function(a, b) {
        var c = b.Ka;
        b = er(this.M, this.fa, this.Ia, b.Jf);
        c = Iq(b, So(this.M, c));
        return {
            Sa: a.Ha.g(c),
            Ma: {}
        }
    };
    var hr = function(a, b, c) {
        this.fa = a;
        this.M = b;
        this.Sg = c
    };
    y(hr, Fq);
    hr.prototype.Pa = function(a, b) {
        var c = er(this.M, this.fa, void 0, b.Jf);
        b = $o(this.M, b.ig, this.Sg);
        c = Iq(c, b);
        return {
            Sa: a.Ha.g(c),
            Ma: {}
        }
    };
    var ir = function(a) {
            return a.prerendering ? 3 : {
                visible: 1,
                hidden: 2,
                prerender: 3,
                preview: 4,
                unloaded: 5
            }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
        },
        jr = function(a) {
            var b;
            a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
            return b
        };

    function kr(a) {
        return a.document.Qh.g(O(function(b) {
            return b === "visible"
        }), S(), W(a.h, 1))
    };
    var lr;
    lr = ["2024072401"].slice(-1)[0].substring(0, 8);

    function mr(a, b, c) {
        var d;
        return b.g(S(), U(function(e) {
            return c.g(O(function() {
                if (!d) {
                    d = !0;
                    try {
                        e.next()
                    } finally {
                        d = !1
                    }
                }
                return !0
            }))
        }), T(!1), W(a.h, 1))
    };

    function nr(a) {
        return H(ep(O(function(b) {
            return wp(b, a)
        })), xo(), O(function(b) {
            return Math.round(b)
        }))
    };

    function or(a, b, c, d, e) {
        var f = Wp;
        if (f.length > 1)
            for (var g = 0; g < f.length - 1; g++)
                if (f[g] < f[g + 1]) throw Error();
        g = e.g(T(void 0), U(function() {
            return c.g(Lo())
        }), S(), W(a, 1));
        e = e.g(T(void 0), U(function() {
            return c.g(tq())
        }), S(), W(a, 1));
        return {
            vi: d.g(T(void 0), U(function() {
                return b.g(O(function(h) {
                    return {
                        timestamp: h.timestamp,
                        value: !0
                    }
                }), xo())
            }), S(), W(a, 1)),
            wi: d.g(T(void 0), U(function() {
                return b.g(O(function(h) {
                    return {
                        timestamp: h.timestamp,
                        value: h.value === 0
                    }
                }), xo())
            }), S(), W(a, 1)),
            lc: d.g(T(void 0), U(function() {
                return b.g(Ko(uq,
                    f))
            }), S(Nb), W(a, 1)),
            vc: d.g(T(void 0), U(function() {
                return b.g(Ko(nr, f), O(function(h) {
                    return h.map(function(k, l) {
                        return l > 0 ? k - h[l - 1] : k
                    })
                }))
            }), S(Nb), W(a, 1)),
            kc: e,
            cb: g.g(S(kp), W(a, 1))
        }
    };

    function pr(a, b, c) {
        var d = c.g(O(function(e) {
            return {
                value: e,
                timestamp: a.j.now()
            }
        }), S(kp));
        return b instanceof J ? b.g(S(), U(function(e) {
            return e ? (new Y({
                value: !1,
                timestamp: a.j.now()
            })).P(a.h) : d
        })) : b.value === !1 ? d : new Y(!1)
    }

    function qr(a, b, c, d, e, f, g) {
        var h = Pp;
        b = b instanceof J ? b.g(T(!1), S()) : b;
        var k = !(hh() || ih());
        c = pr(a, c, d);
        a = g.Ha.g(uo(a.h));
        return Object.assign({}, h, {
            Pc: c,
            kg: e,
            Pe: k,
            Hf: b,
            Rc: a,
            hg: f
        })
    };

    function rr(a) {
        a = a.global;
        if (typeof a.__google_lidar_ === "undefined") return a.__google_lidar_ = 1, !1;
        a.__google_lidar_ = Number(a.__google_lidar_) + 1;
        var b = a.__google_lidar_adblocks_count_;
        if (typeof b === "number" && b > 0 && (a = a.__google_lidar_radf_, typeof a === "function")) try {
            a()
        } catch (c) {}
        return !0
    }

    function sr(a) {
        var b = a.global;
        b.osdlfm = function() {
            return b.__google_lidar_radf_
        };
        if (b.__google_lidar_radf_ !== void 0) return Jc;
        b.__google_lidar_adblocks_count_ = 1;
        var c = new K;
        b.__google_lidar_radf_ = function() {
            return void c.next(a)
        };
        return c.g(mg(a.B, 743))
    };
    var tr = function(a) {
            var b = this;
            this.ce = !1;
            this.ke = [];
            this.je = [];
            a(function(c) {
                b.ce = !0;
                b.ei = c;
                b.evaluate()
            }, function(c) {
                b.ai = c;
                b.evaluate()
            })
        },
        ur = function(a) {
            return new tr(function(b, c) {
                var d = [],
                    e = 0;
                a.forEach(function(f, g) {
                    f.then(function(h) {
                        d[g] = h;
                        ++e === a.length && b(d)
                    }).catch(function(h) {
                        c(h)
                    })
                })
            })
        };
    tr.prototype.evaluate = function() {
        var a = this.ei,
            b = this.ai;
        if (b !== void 0 || this.ce) this.ce && this.ke.forEach(function(c) {
            return void c(a)
        }), b !== void 0 && this.je.forEach(function(c) {
            return void c(b)
        }), this.ke = [], this.je = []
    };
    tr.prototype.then = function(a) {
        this.ke.push(a);
        this.evaluate();
        return this
    };
    tr.prototype.catch = function(a) {
        this.je.push(a);
        this.evaluate();
        return this
    };
    var vr = function(a) {
        this.children = a;
        this.Yd = !1;
        this.Ad = []
    };
    vr.prototype.complete = function() {
        var a = this;
        this.Yd = !0;
        this.Ad.forEach(function(b) {
            return void b(a)
        });
        this.Ad.splice(0)
    };
    vr.prototype.onComplete = function(a) {
        this.Yd ? a(this) : this.Ad.push(a)
    };
    vr.prototype.ab = function(a) {
        var b = this.children.map(function(c) {
            return c.ab(a)
        });
        return b.find(function(c) {
            return c !== 2
        }) === void 0 ? 2 : this.za ? 0 : b.some(function(c) {
            return c === 1
        }) ? 1 : 0
    };
    da.Object.defineProperties(vr.prototype, {
        za: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Yd
            }
        }
    });
    var wr = function() {
        var a = B.apply(0, arguments);
        vr.call(this, a);
        var b = this;
        this.events = a;
        var c = this.events.length;
        this.events.forEach(function(d) {
            d.onComplete(function() {
                --c === 0 && b.complete()
            })
        })
    };
    y(wr, vr);
    wr.prototype.clone = function() {
        return new(Function.prototype.bind.apply(wr, [null].concat(x(this.events.map(function(a) {
            return a.clone()
        })))))
    };
    wr.prototype.xe = function(a, b) {
        var c = this;
        if (!this.za) {
            var d = this.events.find(function(e) {
                return e.ab(a) === 1
            });
            d !== void 0 && d.xe(a, function() {
                c.za || b()
            })
        }
    };
    var xr = function(a, b) {
        vr.call(this, []);
        this.Hd = a;
        this.Uc = Symbol(b);
        this.Sh = a
    };
    y(xr, vr);
    xr.prototype.clone = function() {
        var a = new xr(this.Sh, this.Uc.description);
        a.Uc = this.Uc;
        return a
    };
    xr.prototype.ab = function(a) {
        return a !== this.event ? 2 : this.za || this.Hd === 0 ? 0 : 1
    };
    xr.prototype.xe = function(a, b) {
        this.ab(a) === 1 && (this.Hd--, b(), this.Hd === 0 && this.complete())
    };
    da.Object.defineProperties(xr.prototype, {
        event: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Uc
            }
        }
    });
    var yr = function(a) {
        xr.call(this, 1, a)
    };
    y(yr, xr);
    var zr = function(a, b, c) {
        var d = B.apply(3, arguments);
        this.Qa = a;
        this.Pg = b;
        this.Ed = c;
        this.jc = new Set;
        this.Fb = d;
        if (this.Qa.M) this.context = this.Qa.M;
        else if (this.Qa.fa) this.context = this.Qa.fa;
        else throw Error("za");
        var e = d.reduce(function(h, k) {
            k.subscribedEvents.forEach(function(l) {
                return void h.add(l)
            });
            return h
        }, new Set);
        e = u(e.values());
        for (var f = e.next(), g = {}; !f.done; g = {
                ef: void 0
            }, f = e.next()) {
            g.ef = f.value;
            f = d.filter(function(h) {
                return function(k) {
                    return k.controlledEvents.indexOf(h.ef) >= 0
                }
            }(g));
            if (f.length ===
                0) throw Error("Aa");
            if (f.length > 1) throw Error("Ba");
        }
    };
    zr.prototype.start = function() {
        var a = this;
        this.Fb.forEach(function(b) {
            return void b.start(a.Qa)
        });
        this.Ed.start(this.Qa, this.Xg.bind(this), this.zb.bind(this), function() {})
    };
    zr.prototype.dispose = function() {
        var a = this;
        this.Ed.dispose();
        this.jc.forEach(function(b) {
            return void a.zb(b)
        });
        this.Fb.forEach(function(b) {
            return void b.dispose()
        })
    };
    var Ar = function(a, b) {
            b = {
                measuringCreativeIds: [].concat(x(a.jc.values())).map(function(c) {
                    return a.context.Yb.Ea(c)
                }),
                hasCreativeSourceCompleted: !!a.Ed.gd,
                colleagues: a.Fb.map(function(c) {
                    return {
                        name: c.name,
                        controlledEvents: c.controlledEvents.map(function(d) {
                            var e;
                            return (e = d.description) != null ? e : "n/a"
                        }),
                        subscribedEvents: c.subscribedEvents.map(function(d) {
                            var e;
                            return (e = d.description) != null ? e : "n/a"
                        })
                    }
                }),
                ephemeralCreativeStateChanges: b
            };
            b = {
                specMajor: 2,
                specMinor: 0,
                specPatch: 0,
                instanceId: a.context.Yb.Ea(a.context.qb),
                timestamp: qe(a.context.j.now(), new oe(0, a.context.j.timeline)),
                mediatorState: b
            };
            Xd(a.context, b)
        },
        Br = function(a, b, c, d, e) {
            var f = {};
            Ar(a, (f[b] = {
                events: [{
                    timestamp: c,
                    description: d,
                    status: e
                }]
            }, f))
        };
    zr.prototype.Xg = function(a, b, c) {
        var d = this;
        if (!this.jc.has(a)) {
            var e = this.Pg.clone();
            this.jc.add(a);
            Ar(this, {});
            var f = !1,
                g = [];
            this.Fb.forEach(function(h) {
                var k = function(l, m, q) {
                    var t = d.context.Yb.Ea(a),
                        r = qe(d.context.j.now(), new oe(0, d.context.j.timeline)),
                        v, w = (v = l.description) != null ? v : "n/a";
                    if (h.controlledEvents.indexOf(l) < 0 || e.ab(l) !== 1) return q(!1), Br(d, t, r, w, 1), new tr(function(C) {
                        return void C()
                    });
                    var z = new tr(function(C) {
                        e.xe(l, function() {
                            d.Fb.filter(function(I) {
                                return I.subscribedEvents.indexOf(l) >=
                                    0
                            }).forEach(function(I) {
                                return void I.handleEvent(a, l, m)
                            });
                            C()
                        })
                    });
                    return new tr(function(C) {
                        z.then(function() {
                            q(!0);
                            Br(d, t, r, w, 2);
                            C()
                        })
                    })
                };
                h.Pd(a, b, c, function(l, m, q) {
                    return f ? k(l, m, q) : new tr(function(t) {
                        g.push(function() {
                            k(l, m, q).then(function() {
                                t()
                            })
                        })
                    })
                })
            });
            f = !0;
            g.forEach(function(h) {
                return void h()
            })
        }
    };
    zr.prototype.zb = function(a) {
        this.jc.delete(a);
        this.Fb.forEach(function(b) {
            b.zb(a)
        });
        Ar(this, {})
    };
    var Cr = function(a, b) {
            this.key = a;
            this.defaultValue = b === void 0 ? !1 : b;
            this.valueType = "boolean"
        },
        Dr = function(a) {
            this.key = a;
            this.defaultValue = 0;
            this.valueType = "number"
        };
    var Er = new Cr("100006"),
        Fr = new Dr("45362137"),
        Gr = new Cr("45377435"),
        Hr = new Cr("45618478"),
        Ir = new Cr("45642405"),
        Jr = new Cr("45372163"),
        Kr = new Cr("45407241"),
        Lr = new Cr("45382077"),
        Mr = new Cr("45407239"),
        Nr = new Cr("45407240", !0),
        Or = new Cr("45430682");
    var Pr = new Dr("45389692");
    var il = function(a) {
        Ym.call(this, a)
    };
    y(il, Ym);
    il.prototype.Kd = function() {
        return ol(this, 4, !0)
    };
    il.na = "ads.branding.measurement.client.serving.integrations.active_view.ActiveViewMetadata";
    var Qr = [0, Km, -2, Jm, -1];
    il.prototype.pa = Zm(Qr);
    var Rr = function(a) {
        Ym.call(this, a)
    };
    y(Rr, Ym);
    Rr.prototype.getType = function() {
        var a = 0;
        a = a === void 0 ? 0 : a;
        var b = jk(Sk(this, 6));
        return nl(b, a)
    };
    Rr.na = "ads.geo.GeoTargetMessage";
    Rr.fd = [17, 18];
    var Sr = function(a) {
        Ym.call(this, a)
    };
    y(Sr, Ym);
    Sr.prototype.Kd = function() {
        return ol(this, 3, !0)
    };
    Sr.prototype.nf = function() {
        return kl(this, Rr, 4)
    };
    Sr.na = "ads.branding.measurement.client.serving.integrations.reach.ReachMetadata";
    Sr.fd = [5, 6, 7];
    var Tr = [0, Mm, -4, Om, Jm, Hm, Em, Mm, Em, Mm, Hm, Mm, -1, [0, Hm, -3], Nm, Gm, Mm, Fm, -1, Hm, -1, Fm, Em, [0, Fm, Hm, -1, Om, Em, Fm], Dm, Mm];
    Rr.prototype.pa = Zm(Tr);
    var Ur = [0, Km, -1, Jm, Tr, Im, -1, Pm, Hm, Jm];
    Sr.prototype.pa = Zm(Ur);
    var Vr = function(a) {
        Ym.call(this, a)
    };
    y(Vr, Ym);
    var Wr = function(a) {
        return kl(a, Sr, 1)
    };
    Vr.na = "ads.branding.measurement.client.serving.IntegratorMetadata";
    var Xr = [0, Ur, Qr];
    Vr.prototype.pa = Zm(Xr);
    var Yr = function(a, b) {
        return function(c, d) {
            if (aj.length) {
                var e = aj.pop();
                Zi(e, d);
                e.l.cc(c, void 0, void 0, d);
                c = e
            } else c = new $i(c, d);
            try {
                var f = new a,
                    g = f.s;
                Sl(b)(g, c);
                var h = f
            } finally {
                c.hf()
            }
            return h
        }
    }(Vr, Xr);
    var Zr = function() {
            this.gf = {}
        },
        $r = function(a, b) {
            a = a.gf[b.key];
            if (b.valueType === "proto") {
                try {
                    var c = JSON.parse(a);
                    if (Array.isArray(c)) return c
                } catch (d) {}
                return b.defaultValue
            }
            return typeof a === typeof b.defaultValue ? a : b.defaultValue
        };
    var as = function() {
        this.Ze = !1;
        this.Ve = new Map
    };
    as.prototype.start = function(a, b, c, d) {
        var e = this;
        if (this.gd === void 0 && a.M) {
            var f = a.M;
            this.Ue = d;
            c = !this.Ze && rr(f);
            d = this.Ze ? Jc : sr(f);
            d = Mn(f, d);
            this.gd = (c ? Jc : d.g(O(function(g) {
                var h = h === void 0 ? Symbol() : h;
                return Object.freeze({
                    qb: h,
                    element: (new Y(g)).P(f.h)
                })
            }), En())).subscribe(function(g) {
                var h = g.qb;
                e.Ve.set(h, g);
                g.element.g(Me(1)).subscribe(function(k) {
                    var l = Bn(k, "data-google-av-flags"),
                        m = new Zr;
                    if (l !== null) try {
                        var q = JSON.parse(l)[0];
                        l = "";
                        for (var t = 0; t < q.length; t++) l += String.fromCharCode(q.charCodeAt(t) ^
                            "\u0003\u0007\u0003\u0007\b\u0004\u0004\u0006\u0005\u0003".charCodeAt(t % 10));
                        m.gf = JSON.parse(l)
                    } catch (Tc) {}
                    var r, v, w, z, C, I, X, pa, F, A, R, mb;
                    q = {
                        considerOmidZOrderOcclusions: (r = m == null ? void 0 : $r(m, Er)) != null ? r : !1,
                        extraPings: (v = m == null ? void 0 : $r(m, Fr)) != null ? v : 0,
                        extrapolators: (w = m == null ? void 0 : $r(m, Gr)) != null ? w : !1,
                        rxlidarStatefulBeacons: (z = m == null ? void 0 : $r(m, Jr)) != null ? z : !1,
                        shouldIgnoreAdChoicesIcon: (C = m == null ? void 0 : $r(m, Lr)) != null ? C : !1,
                        dedicatedViewableAttributionPing: (I = m == null ? void 0 : $r(m, Pr)) != null ?
                            I : 0,
                        useReachIntegrationPolyfill: (X = m == null ? void 0 : $r(m, Mr)) != null ? X : !1,
                        useReachIntegrationSharedStorage: (pa = m == null ? void 0 : $r(m, Nr)) != null ? pa : !0,
                        sendBrowserIdInsteadOfVPID: (F = m == null ? void 0 : $r(m, Kr)) != null ? F : !1,
                        waitForImpressionColleague: (A = m == null ? void 0 : $r(m, Or)) != null ? A : !1,
                        fetchLaterBeacons: (R = m == null ? void 0 : $r(m, Hr)) != null ? R : !1,
                        rxInNonrx: (mb = m == null ? void 0 : $r(m, Ir)) != null ? mb : !1
                    };
                    k = Bn(k, "data-google-av-ufs-integrator-metadata");
                    a: {
                        if (k !== null) try {
                            var hb = Yr(k);
                            break a
                        } catch (Tc) {}
                        hb = new Vr
                    }
                    b(h, hb,
                        q)
                })
            });
            c && this.dispose();
            a.fa && Gf(a.fa)
        }
    };
    as.prototype.dispose = function() {
        var a, b;
        (a = this.gd) == null || (b = a.unsubscribe) == null || b.call(a);
        this.gd = void 0;
        var c;
        (c = this.Ue) == null || c.call(this);
        this.Ue = void 0
    };
    var bs = function(a) {
        Ym.call(this, a)
    };
    y(bs, Ym);
    var cs = function(a, b) {
        return ul(a, 1, b)
    };
    bs.na = "contentads.bow.rendering.client.TurtleDoveReportingData";
    bs.prototype.pa = Zm([0, Km, Hm, Km, -5, Om, Km, -1]);

    function ds() {
        var a = Hg();
        return a ? Kb("AmazonWebAppPlatform;Android TV;Apple TV;AppleTV;BRAVIA;BeyondTV;Freebox;GoogleTV;HbbTV;LongTV;MiBOX;MiTV;NetCast.TV;Netcast;Opera TV;PANASONIC;POV_TV;SMART-TV;SMART_TV;SWTV;Smart TV;SmartTV;TV Store;UnionTV;WebOS".split(";"), function(b) {
            return Xa(a, b)
        }) || Xa(a, "OMI/") && !Xa(a, "XiaoMi/") ? !0 : Xa(a, "Presto") && Xa(a, "Linux") && !Xa(a, "X11") && !Xa(a, "Android") && !Xa(a, "Mobi") : !1
    };
    var Pp = Object.freeze({
            cg: 1E3,
            Id: .5,
            ee: .3
        }),
        Wp = Object.freeze([1, .75, Pp.Id, Pp.ee, 0]),
        es = function(a, b, c, d, e, f, g) {
            this.Yh = a;
            this.Eb = b;
            this.Bb = c;
            this.Ub = d;
            this.Cc = e;
            this.Dc = f;
            this.vd = g;
            this.name = "rxlidar";
            this.Bh = new hd;
            this.controlledEvents = [];
            this.subscribedEvents = [];
            this.Fd = new hd;
            this.Fa = new hd;
            this.controlledEvents.push(this.Ub, this.Cc, this.Dc);
            this.subscribedEvents.push(this.Bb)
        };
    n = es.prototype;
    n.start = function(a) {
        if (this.Od === void 0 && a.M) {
            var b;
            if ((b = this.Eb) != null) var c = b;
            else {
                b = a.M;
                var d = (c = a.fa) != null ? c : null;
                c = {
                    Og: .01,
                    Eh: kf(b.j, 36E5),
                    Ia: b.j.Ga(100).g(W(b.h, 1)),
                    fa: d
                }
            }
            this.Eb = c;
            a = a.M;
            this.Od = fs(a, this.Fd.g(W(a.h, 1)), this.Eb.Og, this.Eb.Eh, this.Eb.Ia, this.Eb.fa, this.Fa.g(T(!1), W(a.h, 1)), this.Ub, this.Cc, this.Dc, this.vd).subscribe(this.Bh)
        }
    };
    n.dispose = function() {
        this.Fd.complete();
        this.Fa.complete();
        var a;
        (a = this.Od) == null || a.unsubscribe();
        this.Od = void 0
    };
    n.Pd = function(a, b, c, d) {
        Xk(b, il, 2) && !kl(b, il, 2).Kd() || this.Fd.next(Object.assign({}, this.Yh.Ve.get(a), {
            metadata: b,
            experimentState: c,
            Jj: a,
            Ra: d
        }))
    };
    n.zb = function() {};
    n.handleEvent = function(a, b) {
        b === this.Bb && (this.Fa.next(!0), this.Fa.complete())
    };

    function fs(a, b, c, d, e, f, g, h, k, l, m) {
        var q = kr(a).g(O(function(r) {
                return !r
            })),
            t = new Gq(a, [new Qq(a, Wp), new Pq(a, e), new Mq(a, e), new hr(f, a, Wp), new gr(f, a, e), new $q(a, e)]);
        return Pn(a, b, function(r, v) {
            var w = sq(r, v.element),
                z = w.ud,
                C = w.Vb,
                I = w.Cd,
                X = w.Ce,
                pa = w.Jg,
                F = w.Va,
                A = w.rh,
                R = w.Vd,
                mb = w.Zd,
                hb = w.Ka,
                Tc = w.ra,
                Ma = w.Bi,
                Uc = w.hb;
            w = w.de;
            var Ub, Na = (Ub = sl(jl(v.metadata), 3)) != null ? Ub : "";
            Ub = cs(new bs, atob(Na)).Xa();
            Na = (new Y(v.experimentState)).P(r.h);
            var Vl = new Y(new mf(r, new zg(r))),
                Wl = Na.g(O(function(D) {
                        return D.fetchLaterBeacons
                    }),
                    T(!1), S(), W(r.h, 1)),
                qs = Wl.g(O(function(D) {
                    return D && (new vg(r)).F({
                        bf: !0
                    })
                }), ef(function(D) {
                    D && Vl.value.G("https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=fetch&later&start&control&fle=1&sfl=1").sendNow()
                })),
                Zd = Na.g(O(function(D) {
                    return D.shouldIgnoreAdChoicesIcon
                })),
                Oa = F.g(Je(A), O(function(D) {
                    var Eb = u(D);
                    D = Eb.next().value;
                    Eb = Eb.next().value;
                    (D = D || Eb) || ((D = Xa(Hg(), "CrKey") && !(Xa(Hg(), "CrKey") && Xa(Hg(), "SmartSpeaker")) || Xa(Hg(), "PlayStation") || Xa(Hg(), "Roku") || ds() || Xa(Hg(), "Xbox")) ||
                        (D = Hg(), D = Xa(D, "AppleTV") || Xa(D, "Apple TV") || Xa(D, "CFNetwork") || Xa(D, "tvOS")), D || (D = Hg(), D = Xa(D, "sdk_google_atv_x86") || Xa(D, "Android TV")));
                    return D
                }));
            A = new Bq(r, v, pa, F, hb, Zd);
            Zd = Na.g(O(function(D) {
                return D.considerOmidZOrderOcclusions
            }));
            var qc, ob = (qc = rl(jl(v.metadata))) != null ? qc : !1;
            qc = t.Pa(A, {
                Va: F,
                ig: ob,
                Ka: hb,
                Jf: Zd
            });
            var Pa = qc.Sa,
                $d = qc.Ma;
            qc = $d.ge;
            Zd = $d.he;
            $d = $d.ue;
            ob = (new Y(ob)).P(r.h);
            var Vb = qr(r, mb, Oa, q, Ma, ob, A);
            Ma = bq(r.h, r.j, Pa, Vb);
            Oa = or(r.h, Ma.ua.we, Ma.ua.visible, Ma.te, Ma.tc);
            ob = qq(r.h, r.j,
                Ma.tc, Ma.ua.V, Ma.ua.visible);
            Pa = Fp(r.h, r.j, Pa, Vb);
            Vb = Vp(r.j, r.h, Pa.ua.we, Pa.ua.visible, Pa.te, Pa.tc);
            var Th = {
                    Be: Op(r.h, r.j, Pa.tc, Vb.kc)
                },
                Uh = Na.g(O(function(D) {
                    return D.extrapolators
                }), T(!1));
            Pa = to(r.h, Uh, Object.assign({}, Pa.ua, Vb, Th), Object.assign({}, Ma.ua, {
                Be: vp(r, ob),
                lc: vp(r, Oa.lc),
                vc: vp(r, Oa.vc),
                kc: vp(r, Oa.kc),
                cb: Oa.cb.g(O(function(D) {
                    return new up(r.j, D)
                }))
            }));
            Oa = dp(r, d.g(We("t")));
            ob = (f !== null && f.validate() ? f.ii : Md).g(W(r.h, 1), We("u"));
            Oa = Qd(Oa, ob);
            ob = mr(r, Pa.V, Oa.g(Q(function(D) {
                return D !== null
            })));
            Vb = gs(r, A, z);
            Th = hs(r, Oa, v.element);
            Uh = Vb.yg.g(T({
                x: 0,
                y: 0
            }));
            var ts = Na.g(O(function(D) {
                    return D.rxlidarStatefulBeacons
                }), T(!1), S(), ef(function(D) {
                    nh = D
                }), W(r.h, 1)),
                Xl = R.g(O(function(D) {
                    return D === 40 || D === 41 || D === 42
                })),
                us = Na.g(O(function(D) {
                    return D.waitForImpressionColleague
                }), T(!1), S(), W(r.h, 1));
            return Object.assign({}, {
                    H: new Y(r.H),
                    Tc: new Y("lidar2"),
                    ri: new Y("lidartos"),
                    Bg: new Y(lr),
                    vd: new Y(m),
                    Bd: new Y(r.validate() ? null : new be),
                    Fg: new Y(Yh(r.document)),
                    ga: new Y($n),
                    cf: Oa,
                    bg: Oa,
                    Fj: ob,
                    Qd: g,
                    Ai: us,
                    Ra: new Y(v.Ra),
                    Ub: new Y(h),
                    Cc: new Y(k),
                    Dc: new Y(l),
                    Ig: new Y(r.Cb ? 1 : void 0),
                    Kg: new Y(r.Cg ? 1 : void 0),
                    Va: F,
                    hb: Uc,
                    ye: new Y(Ub),
                    Lb: Uc.g(Q(function(D) {
                        return D
                    }), O(function() {
                        return r.Lb.bind(r)
                    })),
                    ge: qc.g(W(r.h, 1)),
                    he: Zd.g(W(r.h, 1)),
                    Ug: Na.g(O(function(D) {
                        return D.extraPings
                    })),
                    xf: ts,
                    fh: Wl,
                    Zf: qs,
                    de: w,
                    ph: Xl,
                    gh: Na.g(O(function(D) {
                        return D.dedicatedViewableAttributionPing
                    })),
                    Vg: Vl,
                    ag: new Y(nh && (new mh(r)).F({
                        ha: "GET"
                    })),
                    li: new Y(Number(v.experimentState.useReachIntegrationSharedStorage) << 0 + Number(v.experimentState.useReachIntegrationPolyfill) <<
                        1 + Number(v.experimentState.sendBrowserIdInsteadOfVPID) << 2),
                    Hg: v.element.g(O(function(D) {
                        return D !== null
                    })),
                    Sc: Tc,
                    si: Tc,
                    Cd: I.g(T([])),
                    Ce: X.g(T([])),
                    bh: I.g(O(function(D) {
                        return D.length > 0 ? !0 : null
                    }), T(null), S()),
                    Vb: C.g(T([]), W(r.h, 1)),
                    oj: Na,
                    ud: z,
                    Xb: A.Xb,
                    Vd: R.g(T(0), W(r.h, 1)),
                    Ch: pa,
                    Ka: hb.g(T(0), W(r.h, 1)),
                    wc: Xl.g(O(function(D) {
                        return D ? qo : Zn
                    })),
                    Qb: new Y(ro),
                    Zd: mb,
                    yf: A.hc.g(uo(r.h)),
                    De: A.De
                }, Pa, {
                    Jc: P([Pa.Jc, Uh]).g(O(function(D) {
                        var Eb = u(D);
                        D = Eb.next().value;
                        Eb = Eb.next().value;
                        return fi(D, Eb)
                    }), S(di))
                },
                Vb, {
                    xc: Bh(r),
                    dh: Th,
                    ue: $d,
                    kd: Ma.ua.kd,
                    Dg: new Y(new ko)
                })
        }, Yn(a, "https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=error&bin=" + m + "&v=" + lr, c))
    }

    function gs(a, b, c) {
        var d = d === void 0 ? Ha : d;
        var e, f;
        d = ((e = d.performance) == null ? void 0 : (f = e.timing) == null ? void 0 : f.navigationStart) || 0;
        return Object.assign({}, {
            wg: new Y(d),
            vg: Io(a, b)
        }, Ho(a, b, c))
    }

    function hs(a, b, c) {
        return b.g(Q(function(d) {
            return d !== null
        }), U(function() {
            return c
        }), O(function(d) {
            var e = Fn(a);
            return e.length > 0 && e.indexOf(d) >= 0
        }), O(function(d) {
            return !d
        }))
    };
    var is = function(a) {
        var b = b === void 0 ? [] : b;
        var c = c === void 0 ? [a] : c;
        this.Bb = a;
        this.subscribedEvents = b;
        this.controlledEvents = c;
        this.name = "impression";
        this.Sd = new Map
    };
    n = is.prototype;
    n.start = function(a) {
        this.Qa = a
    };
    n.dispose = function() {
        this.Sd.clear()
    };
    n.Pd = function(a, b, c, d) {
        if (b = this.Qa) c = new js(b, c, this.Bb, d), this.Sd.set(a, c)
    };
    n.zb = function(a) {
        this.Sd.delete(a)
    };
    n.handleEvent = function() {};
    var js = function(a, b, c, d) {
        var e = this;
        this.context = a;
        this.Bb = c;
        this.gg = function() {};
        this.wf = [];
        this.uf = "&avradf=1";
        this.vf = ur([]);
        this.Fa = new hd;
        c = a.fa;
        var f = c !== null && (c == null ? void 0 : c.validate()),
            g, h = (g = a.M) == null ? void 0 : g.h;
        this.Fa.g(T(!b.waitForImpressionColleague), W(h, 1));
        this.ni = f ? c == null ? void 0 : c.tf.g(Me(1), We(!0), T(!1)) : (new Y(!0)).P(h);
        this.gg = function(k, l) {
            e.Fa.next(!0);
            e.Fa.complete();
            P([e.Fa, e.ni]).subscribe(function(m) {
                var q = u(m);
                m = q.next().value;
                q = q.next().value;
                if (!q) return Md;
                m && q &&
                    d(e.Bb, k, l);
                return !0
            })
        };
        this.cc(a.M)
    };
    js.prototype.cc = function(a) {
        var b = this;
        this.pc = a.global.document;
        this.wf.push(ks(this));
        var c = {};
        this.vf = ur(this.wf);
        this.vf.then(function() {
            b.uf = "&vis=" + ir(b.pc) + "&uach=0&ms=0";
            c.paramString = b.uf;
            c.view_type = "DELAYED_IMPRESSION";
            b.gg(c, function() {})
        })
    };
    var ks = function(a) {
        return new tr(function(b) {
            var c = jr(a.pc);
            if (c)
                if (ir(a.pc) === 3) {
                    var d = function() {
                        var e = a.pc;
                        e.removeEventListener && e.removeEventListener(c, d, !1);
                        b(!0)
                    };
                    Ag(a.pc, c, d)
                } else b(!0)
        })
    };

    function ls(a) {
        var b = Ch(a);
        return b ? b.g(O(function(c) {
            var d;
            c = (d = ml(c).find(function(f) {
                return sl(f, 1) === "Google Chrome"
            })) == null ? void 0 : sl(d, 2);
            if (!c) return !1;
            var e;
            return ((e = u(c.split(".").map(function(f) {
                return Number(f)
            })).next().value) != null ? e : 0) >= 121
        })) : sh.P(a.h)
    };
    var ms = function(a) {
        Ym.call(this, a)
    };
    y(ms, Ym);
    ms.prototype.nf = function() {
        return kl(this, Rr, 11)
    };
    ms.na = "ads.branding.measurement.client.frontend.integrations.reach.ReachStatusMessage";
    ms.fd = [12];
    ms.prototype.pa = Zm([0, Om, Km, -1, Om, -2, Km, -1, Hm, Km, Tr, Pm, Hm]);
    var ns = function(a) {
            this.context = a;
            this.points = []
        },
        os = function(a, b) {
            Ca(function(c) {
                if (c.N == 1) return c.bb = 0, c.Da = 2, sa(c, b(), 4);
                if (c.N != 2) return c.return(c.ub);
                ta(c);
                a.flush();
                return ua(c, 0)
            })
        };
    ns.prototype.flush = function() {
        if (!(this.points.length <= 0)) {
            var a = new ms;
            var b = ik(9);
            Vk(a, 1, b);
            if (!Number.isFinite(3)) throw a = "Expected int32 as finite number but got " + Ja(3) + ": 3", bk(a);
            Vk(a, 13, 3);
            b = this.points;
            var c = a.s,
                d = Z(c);
            Qj(zj(a.s));
            c = $k(c, d, 12, 2, !1);
            Z(c);
            if (Array.isArray(b))
                for (d = 0; d < b.length; d++) c.push(ik(b[d]));
            else
                for (b = u(b), d = b.next(); !d.done; d = b.next()) c.push(ik(d.value));
            Xj(c);
            this.points.splice(0);
            b = this.context;
            a = "https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=reach&proto=" +
                encodeURIComponent(yh(a.pa()));
            b.H.G(a, {
                ha: "GET"
            }).sendNow()
        }
    };
    var ps = function(a) {
        var b = b === void 0 ? [] : b;
        var c = c === void 0 ? [a] : c;
        this.le = a;
        this.subscribedEvents = b;
        this.controlledEvents = c;
        this.name = "reach";
        this.qc = new Map
    };
    n = ps.prototype;
    n.start = function(a) {
        a.M && (this.context = a.M)
    };
    n.dispose = function() {
        this.qc.forEach(function(a) {
            return void a.dispose()
        });
        this.qc.clear()
    };
    n.Pd = function(a, b, c, d) {
        var e = this,
            f = this.context;
        if (f) {
            var g = new ns(f);
            os(g, function() {
                var h, k;
                return Ca(function(l) {
                    if (l.N == 1) {
                        g.points.push(1);
                        if (Xk(b, Sr, 1) && !Wr(b).Kd()) return l.return();
                        g.points.push(2);
                        try {
                            var m = !!f.global.sharedStorage
                        } catch (q) {
                            m = q
                        }
                        return m ? sa(l, md(ls(f)), 2) : l.return()
                    }
                    h = l.ub;
                    if (!h) return l.return();
                    g.points.push(3);
                    k = new rs(f, b, e.le, c, d, g);
                    e.qc.set(a, k);
                    return sa(l, k.run(), 0)
                })
            })
        }
    };
    n.zb = function(a) {
        var b;
        (b = this.qc.get(a)) == null || b.dispose();
        this.qc.delete(a)
    };
    n.handleEvent = function() {};
    var rs = function(a, b, c, d, e, f) {
        this.context = a;
        this.metadata = b;
        this.le = c;
        this.experimentState = d;
        this.Ra = e;
        this.Gg = f
    };
    rs.prototype.run = function() {
        var a = this,
            b, c;
        return Ca(function(d) {
            if (d.N == 1) return b = {}, sa(d, new Promise(function(e) {
                a.Ra(a.le, b, e)
            }), 2);
            c = d.ub;
            if (!c) return d.return();
            a.Gg.points.push(4);
            return sa(d, ss(a), 0)
        })
    };
    var ss = function(a) {
            var b, c, d, e, f, g, h, k, l, m, q, t, r, v, w, z, C, I, X;
            return Ca(function(pa) {
                var F = a.experimentState,
                    A = (m = (b = Wr(a.metadata)) == null ? void 0 : ql(b)) != null ? m : "",
                    R = (q = (c = Wr(a.metadata)) == null ? void 0 : bl(c, 7, jk, void 0 === Yj ? 2 : 4)) != null ? q : void 0,
                    mb = (t = (d = Wr(a.metadata)) == null ? void 0 : ol(d, 9)) != null ? t : void 0,
                    hb = (e = Wr(a.metadata)) == null ? void 0 : sl(e, 1),
                    Tc = (r = (f = Wr(a.metadata)) == null ? void 0 : (g = f.nf()) == null ? void 0 : g.Xa()) != null ? r : void 0,
                    Ma = (v = (h = Wr(a.metadata)) == null ? void 0 : pl(h, 8)) != null ? v : void 0,
                    Uc = vs;
                var Ub = (k = Wr(a.metadata)) == null ? void 0 : bl(k, 5, kk, Yj === Yj ? 2 : 4);
                Uc = Uc(a, (w = Ub) != null ? w : void 0);
                Ub = vs;
                var Na = (l = Wr(a.metadata)) == null ? void 0 : bl(l, 6, kk, Yj === Yj ? 2 : 4);
                C = {
                    experimentState: F,
                    escapedQueryId: A,
                    trafficTypes: R,
                    isProductSplitVpidLogsExperiment: mb,
                    clientsideModelFilename: hb,
                    geoTargetMessage: Tc,
                    deviceType: Ma,
                    productionFilterIds: Uc,
                    testFilterIds: Ub(a, (z = Na) != null ? z : void 0)
                };
                I = btoa(JSON.stringify(C));
                X = a.context.Xf[0];
                return sa(pa, bi(a.context.document, X, I), 0)
            })
        },
        vs = function(a, b) {
            if (b !== void 0) return b.map(function(c) {
                return String(BigInt(c))
            })
        };
    rs.prototype.dispose = function() {};
    var ws = Df("m202407240101".match(/^m\d{10}$/g) !== null ? "m202407240101" : "current"),
        xs;
    a: {
        try {
            var ys = new gg;
            xs = new Ff(ys, "doubleclickbygoogle.com-omid", void 0, ws);
            break a
        } catch (a) {}
        xs = void 0
    }
    var zs = xs,
        As = {
            M: new rn(void 0, void 0, void 0, ws),
            fa: zs
        };
    (function(a) {
        if (a && tg(a)) {
            var b = sg(a);
            if (b) {
                a.global.fetch("https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=fle-fetch-start2", {
                    method: "GET",
                    cache: "no-cache",
                    keepalive: !0,
                    mode: "no-cors"
                });
                try {
                    b("https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=fle-fetch-later2", {
                        method: "GET",
                        cache: "no-cache",
                        mode: "no-cors",
                        activateAfter: 96E4
                    })
                } catch (c) {
                    a.global.fetch("https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=fle-fetch-fallback2", {
                        method: "GET",
                        cache: "no-cache",
                        keepalive: !0,
                        mode: "no-cors"
                    })
                }
                a.Lf.subscribe(function() {
                    a.global.fetch("https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=fle-fetch-pagehide2", {
                        method: "GET",
                        cache: "no-cache",
                        keepalive: !0,
                        mode: "no-cors"
                    })
                })
            }
        }
    })(As.M);
    (function(a, b, c) {
        var d = new yr("impression"),
            e = new yr("begin to render"),
            f = new yr("unmeasurable"),
            g = new yr("viewable"),
            h = new yr("reach vpid"),
            k = new wr(d, h, e, g, f),
            l = new as,
            m = new is(d.event);
        b = new es(l, c, d.event, e.event, f.event, g.event, b);
        h = new ps(h.event);
        var q = new zr(a, k, l, m, b, h);
        q.start();
        return {
            dispose: function() {
                return void q.dispose()
            },
            colleagues: {
                kj: m,
                Hj: b,
                Ej: h
            }
        }
    })(As, 7);
}).call(this);