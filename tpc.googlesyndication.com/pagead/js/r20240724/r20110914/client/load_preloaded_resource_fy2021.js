(function() {
    'use strict';
    let e = [];
    const f = () => {
        const a = e;
        e = [];
        for (const b of a) try {
            b()
        } catch {}
    };

    function g(a = document) {
        return a.createElement("img")
    };

    function h(a = null) {
        return a && a.getAttribute("data-jc") === "26" ? a : document.querySelector('[data-jc="26"]')
    };
    var k = document;
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var m = () => {
        var a = k.querySelectorAll("link[data-reload-stylesheet][as=style][rel=preload]");
        for (var b = 0; b < a.length; b++) {
            var c = a[b],
                d = "link",
                l = document;
            d = String(d);
            l.contentType === "application/xhtml+xml" && (d = d.toLowerCase());
            d = l.createElement(d);
            d.setAttribute("rel", "stylesheet");
            d.setAttribute("href", c.getAttribute("href"));
            k.head.appendChild(d)
        }
        if (a.length > 0 && !(Math.random() > .01)) {
            a = (a = h(document.currentScript)) && a.getAttribute("data-jc-rcd") === "true" ? "pagead2.googlesyndication-cn.com" : "pagead2.googlesyndication.com";
            b = (b = h(document.currentScript)) && b.getAttribute("data-jc-version") || "unknown";
            a = `https://${a}/pagead/gen_204?id=jca&jc=${26}&version=${b}&sample=${.01}`;
            b = window;
            if (c = b.navigator) c = b.navigator.userAgent, c = /Chrome/.test(c) && !/Edge/.test(c) ? !0 : !1;
            c && b.navigator.sendBeacon ? b.navigator.sendBeacon(a) : (b.google_image_requests || (b.google_image_requests = []), c = g(b.document), c.src = a, b.google_image_requests.push(c))
        }
    };
    const n = h(document.currentScript);
    if (n == null) throw Error("JSC not found 26");
    const p = n.attributes;
    for (let a = p.length - 1; a >= 0; a--);
    var q = document;
    q.readyState === "complete" || q.readyState === "interactive" ? (e.push(m), e.length == 1 && (window.Promise ? Promise.resolve().then(f) : window.setImmediate ? setImmediate(f) : setTimeout(f, 0))) : q.addEventListener("DOMContentLoaded", m);
}).call(this);