(function() {
    'use strict';
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var f = this || self;

    function g() {
        const a = h;
        return a && a.visibilityState === "visible"
    }

    function l() {
        const a = q;
        return a && a.innerWidth > 0 && a.innerHeight > 0
    }

    function r(a) {
        const c = a.g && a.i && a.j;
        if (a.h === c) return !1;
        a.h = c;
        return !0
    }

    function t(a) {
        if (r(a))
            for (const c of a.l) c(a.h)
    }

    function u(a) {
        var c = v || (v = new w);
        a(c.h);
        c.l.add(a)
    }
    var w = class {
            constructor() {
                this.l = new Set;
                this.i = g();
                this.j = l();
                this.h = this.g = !1;
                var a = f.oneAfmaInstance;
                this.g = a ? a.visibilityState : !0;
                r(this);
                a = window.AFMA_Communicator;
                a == null || a.addEventListener("onshow", () => {
                    this.g = !0;
                    t(this)
                });
                a == null || a.addEventListener("onhide", () => {
                    this.g = !1;
                    t(this)
                });
                let c;
                (c = h) == null || c.addEventListener("visibilitychange", () => {
                    this.i = g();
                    t(this)
                });
                let d;
                (d = q) == null || d.addEventListener("resize", () => {
                    this.j = l();
                    t(this)
                })
            }
        },
        h = document,
        q = window;
    let v;

    function y(a) {
        a.h = 4;
        a.g && a.setData(43, Date.now() - window.mys.pingback.getBaseTime())
    }
    var z = class {
        constructor() {
            this.g = !(!window.mys || !window.mys.pingback);
            this.h = 0
        }
        setAttribute(a, c) {
            this.g && window.mys.pingback.setAttribute(a, c)
        }
        setData(a, c) {
            this.g && window.mys.pingback.setData(a, c, this.h)
        }
        send(a) {
            this.g && window.mys.pingback.send(a)
        }
    };

    function A(a, c) {
        var d;
        if ((a.g.includes(c) || a.i.includes(c)) && ((d = window.performance) == null ? 0 : d.getEntries) && window.PerformanceNavigationTiming && window.PerformanceResourceTiming) {
            d = a.g.includes(c) ? ["script"] : [];
            var b = window.performance.getEntries(),
                e = 0,
                m = 0,
                n = 0,
                p = 0;
            for (const k of b)
                if (!k.name.includes("pagead2.googlesyndication.com/pagead/gen_204?id=mys"))
                    if (k instanceof window.PerformanceNavigationTiming) e += k.transferSize || 0;
                    else if (k instanceof window.PerformanceResourceTiming) {
                b = k.initiatorType;
                const x = k.transferSize || 0;
                if (d.length === 0 || d.includes(b)) n++, m += x === 0 ? 1 : 0, p += x
            }
            a.g.includes(c) ? (a.pingback.setData(16, e), a.pingback.setData(17, p), a.pingback.setData(18, n), a.pingback.setData(19, m)) : a.i.includes(c) && (a.pingback.setData(20, p), a.pingback.setData(21, n), a.pingback.setData(22, m))
        }
        a.pingback.setData(c, window.performance.now());
        a.pingback.send()
    }

    function B(a, c) {
        a.h[c] = window.performance.now()
    }

    function C(a, c) {
        a.h.hasOwnProperty(c) && (a.pingback.setData(c, window.performance.now() - a.h[c]), c === 13 && (a.pingback.setData(30, `${window.innerWidth}x${window.innerHeight}`), a.pingback.setData(25, `${a.body.clientWidth}x${a.body.clientHeight}`)), a.pingback.send())
    }
    var E = class {
        constructor() {
            this.body = D;
            this.pingback = new z;
            this.h = {};
            this.j = {
                overallStart: () => void A(this, 3),
                overallReady: () => void A(this, 4),
                overallQuiet: () => void A(this, 5),
                overallError: () => void A(this, 6),
                assembleStart: () => void B(this, 7),
                assembleReady: () => void C(this, 7),
                decorateStart: () => void B(this, 8),
                decorateReady: () => void C(this, 8),
                fontStart: () => void B(this, 9),
                fontReady: () => void C(this, 9),
                spanStart: () => void B(this, 10),
                spanReady: () => void C(this, 10),
                prepareStart: () => void B(this, 11),
                prepareReady: () =>
                    void C(this, 11),
                bindingStart: () => void B(this, 12),
                bindingReady: () => void C(this, 12),
                browserStart: () => void B(this, 13),
                browserStartEnd: () => void C(this, 13),
                browserReady: () => void B(this, 14),
                browserReadyEnd: () => void C(this, 14),
                browserQuiet: () => void B(this, 15),
                browserQuietEnd: () => void C(this, 15)
            };
            this.g = [23];
            this.i = [24];
            y(this.pingback)
        }
    };
    const D = document.getElementById("mys-content");
    (function() {
        var a = new E;
        let c;
        if ((c = window.mys) != null && c.pingback) {
            window.addEventListener("error", b => {
                a.pingback.setData(1, b.message);
                a.pingback.setData(95, b.filename);
                a.pingback.send()
            });
            a.body.addEventListener("customError", b => {
                let e = "custom_error: ";
                b.detail && (e += b.detail.message);
                a.pingback.setData(2, e);
                a.pingback.send()
            });
            window.addEventListener("click", b => {
                const e = Date.now() - window.mys.pingback.getBaseTime();
                a.pingback.setData(47, `${b.clientX}x${b.clientY}@${e}`);
                a.pingback.send()
            }, !0);
            var d;
            if ((d = window.performance) != null && d.now) {
                window.addEventListener("DOMContentLoaded", () => void A(a, 23));
                window.addEventListener("load", () => {
                    A(a, 24);
                    setTimeout(() => {
                        var b;
                        (b = window.performance) != null && b.getEntriesByType && (b = performance.getEntriesByType("navigation")[0]) && (a.pingback.setData(50, b.fetchStart), a.pingback.setData(51, b.domainLookupStart), a.pingback.setData(52, b.domainLookupEnd), a.pingback.setData(53, b.connectStart), a.pingback.setData(54, b.connectEnd), a.pingback.setData(55, b.secureConnectionStart),
                            a.pingback.setData(56, b.requestStart), a.pingback.setData(57, b.responseStart), a.pingback.setData(58, b.responseEnd), a.pingback.setData(59, b.domInteractive), a.pingback.setData(60, b.domContentLoadedEventStart), a.pingback.setData(61, b.domContentLoadedEventEnd), a.pingback.setData(62, b.domComplete), a.pingback.setData(63, b.loadEventStart), a.pingback.setData(64, b.loadEventEnd), a.pingback.send())
                    }, 0)
                });
                u(b => {
                    b ? a.pingback.setData(75, window.performance.now()) : a.pingback.setData(76, window.performance.now());
                    a.pingback.send()
                });
                for (const [b, e] of Object.entries(a.j)) a.body.addEventListener(b, e)
            }
        }
    })();
}).call(this);