var t = require("../../@babel/runtime/helpers/typeof");

!function(e, n) {
    "object" == ("undefined" == typeof exports ? "undefined" : t(exports)) && "undefined" != typeof module ? n(exports) : "function" == typeof define && define.amd ? define([ "exports" ], n) : n((void 0).echarts = {});
}(0, function(e) {
    function n(t, e) {
        function n() {
            this.constructor = t;
        }
        _h(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, 
        new n());
    }
    function i() {
        for (var t = 0, e = 0, n = arguments.length; n > e; e++) t += arguments[e].length;
        var i = Array(t), r = 0;
        for (e = 0; n > e; e++) for (var o = arguments[e], a = 0, s = o.length; s > a; a++, 
        r++) i[r] = o[a];
        return i;
    }
    function r(t, e) {
        Lh[t] = e;
    }
    function o() {
        return Oh++;
    }
    function a() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        "undefined" != typeof console && console.error.apply(console, t);
    }
    function s(e) {
        if (null == e || "object" != t(e)) return e;
        var n = e, i = Mh.call(e);
        if ("[object Array]" === i) {
            if (!W(e)) {
                n = [];
                for (var r = 0, o = e.length; o > r; r++) n[r] = s(e[r]);
            }
        } else if (Sh[i]) {
            if (!W(e)) {
                var a = e.constructor;
                if (a.from) n = a.from(e); else {
                    n = new a(e.length);
                    for (r = 0, o = e.length; o > r; r++) n[r] = s(e[r]);
                }
            }
        } else if (!bh[i] && !W(e) && !P(e)) for (var l in n = {}, e) e.hasOwnProperty(l) && (n[l] = s(e[l]));
        return n;
    }
    function l(t, e, n) {
        if (!k(e) || !k(t)) return n ? s(e) : t;
        for (var i in e) if (e.hasOwnProperty(i)) {
            var r = t[i], o = e[i];
            !k(o) || !k(r) || S(o) || S(r) || P(o) || P(r) || I(o) || I(r) || W(o) || W(r) ? !n && i in t || (t[i] = s(e[i])) : l(r, o, n);
        }
        return t;
    }
    function u(t, e) {
        for (var n = t[0], i = 1, r = t.length; r > i; i++) n = l(n, t[i], e);
        return n;
    }
    function h(t, e) {
        if (Object.assign) Object.assign(t, e); else for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        return t;
    }
    function c(t, e, n) {
        for (var i = w(e), r = 0; r < i.length; r++) {
            var o = i[r];
            (n ? null != e[o] : null == t[o]) && (t[o] = e[o]);
        }
        return t;
    }
    function p(t, e) {
        if (t) {
            if (t.indexOf) return t.indexOf(e);
            for (var n = 0, i = t.length; i > n; n++) if (t[n] === e) return n;
        }
        return -1;
    }
    function f(t, e) {
        function n() {}
        var i = t.prototype;
        for (var r in n.prototype = e.prototype, t.prototype = new n(), i) i.hasOwnProperty(r) && (t.prototype[r] = i[r]);
        t.prototype.constructor = t, t.superClass = e;
    }
    function d(t, e, n) {
        if (t = "prototype" in t ? t.prototype : t, e = "prototype" in e ? e.prototype : e, 
        Object.getOwnPropertyNames) for (var i = Object.getOwnPropertyNames(e), r = 0; r < i.length; r++) {
            var o = i[r];
            "constructor" !== o && (n ? null != e[o] : null == t[o]) && (t[o] = e[o]);
        } else c(t, e, n);
    }
    function g(t) {
        return !!t && ("string" != typeof t && "number" == typeof t.length);
    }
    function y(t, e, n) {
        if (t && e) if (t.forEach && t.forEach === Ch) t.forEach(e, n); else if (t.length === +t.length) for (var i = 0, r = t.length; r > i; i++) e.call(n, t[i], i, t); else for (var o in t) t.hasOwnProperty(o) && e.call(n, t[o], o, t);
    }
    function v(t, e, n) {
        if (!t) return [];
        if (!e) return z(t);
        if (t.map && t.map === Ih) return t.map(e, n);
        for (var i = [], r = 0, o = t.length; o > r; r++) i.push(e.call(n, t[r], r, t));
        return i;
    }
    function m(t, e, n, i) {
        if (t && e) {
            for (var r = 0, o = t.length; o > r; r++) n = e.call(i, n, t[r], r, t);
            return n;
        }
    }
    function _(t, e, n) {
        if (!t) return [];
        if (!e) return z(t);
        if (t.filter && t.filter === Ah) return t.filter(e, n);
        for (var i = [], r = 0, o = t.length; o > r; r++) e.call(n, t[r], r, t) && i.push(t[r]);
        return i;
    }
    function x(t, e, n) {
        if (t && e) for (var i = 0, r = t.length; r > i; i++) if (e.call(n, t[i], i, t)) return t[i];
    }
    function w(t) {
        if (!t) return [];
        if (Object.keys) return Object.keys(t);
        var e = [];
        for (var n in t) t.hasOwnProperty(n) && e.push(n);
        return e;
    }
    function b(t) {
        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        return function() {
            return t.apply(this, e.concat(kh.call(arguments)));
        };
    }
    function S(t) {
        return Array.isArray ? Array.isArray(t) : "[object Array]" === Mh.call(t);
    }
    function M(t) {
        return "function" == typeof t;
    }
    function T(t) {
        return "string" == typeof t;
    }
    function C(t) {
        return "[object String]" === Mh.call(t);
    }
    function A(t) {
        return "number" == typeof t;
    }
    function k(e) {
        var n = t(e);
        return "function" === n || !!e && "object" === n;
    }
    function I(t) {
        return !!bh[Mh.call(t)];
    }
    function D(t) {
        return !!Sh[Mh.call(t)];
    }
    function P(e) {
        return "object" == t(e) && "number" == typeof e.nodeType && "object" == t(e.ownerDocument);
    }
    function L(t) {
        return null != t.colorStops;
    }
    function O(t) {
        return null != t.image;
    }
    function R(t) {
        return t != t;
    }
    function E() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        for (var n = 0, i = t.length; i > n; n++) if (null != t[n]) return t[n];
    }
    function N(t, e) {
        return null != t ? t : e;
    }
    function B(t, e, n) {
        return null != t ? t : null != e ? e : n;
    }
    function z(t) {
        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        return kh.apply(t, e);
    }
    function F(t) {
        if ("number" == typeof t) return [ t, t, t, t ];
        var e = t.length;
        return 2 === e ? [ t[0], t[1], t[0], t[1] ] : 3 === e ? [ t[0], t[1], t[2], t[1] ] : t;
    }
    function V(t, e) {
        if (!t) throw new Error(e);
    }
    function H(t) {
        return null == t ? null : "function" == typeof t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    }
    function G(t) {
        t[Nh] = !0;
    }
    function W(t) {
        return t[Nh];
    }
    function U(t) {
        return new Bh(t);
    }
    function X(t, e) {
        var n;
        if (Object.create) n = Object.create(t); else {
            var i = function() {};
            i.prototype = t, n = new i();
        }
        return e && h(n, e), n;
    }
    function Y(t, e) {
        return t.hasOwnProperty(e);
    }
    function q() {}
    function j(t, e) {
        return null == t && (t = 0), null == e && (e = 0), [ t, e ];
    }
    function Z(t) {
        return [ t[0], t[1] ];
    }
    function K(t, e, n) {
        return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t;
    }
    function $(t, e, n) {
        return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t;
    }
    function J(t) {
        return Math.sqrt(Q(t));
    }
    function Q(t) {
        return t[0] * t[0] + t[1] * t[1];
    }
    function tt(t, e, n) {
        return t[0] = e[0] * n, t[1] = e[1] * n, t;
    }
    function et(t, e) {
        var n = J(e);
        return 0 === n ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / n, t[1] = e[1] / n), t;
    }
    function nt(t, e) {
        return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]));
    }
    function it(t, e) {
        return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]);
    }
    function rt(t, e, n, i) {
        return t[0] = e[0] + i * (n[0] - e[0]), t[1] = e[1] + i * (n[1] - e[1]), t;
    }
    function ot(t, e, n) {
        var i = e[0], r = e[1];
        return t[0] = n[0] * i + n[2] * r + n[4], t[1] = n[1] * i + n[3] * r + n[5], t;
    }
    function at(t, e, n) {
        return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t;
    }
    function st(t, e, n) {
        return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t;
    }
    function lt(t, e, n, i, r, o) {
        var a = i + "-" + r, s = t.length;
        if (o.hasOwnProperty(a)) return o[a];
        if (1 === e) {
            var l = Math.round(Math.log((1 << s) - 1 & ~r) / qh);
            return t[n][l];
        }
        for (var u = i | 1 << n, h = n + 1; i & 1 << h; ) h++;
        for (var c = 0, p = 0, f = 0; s > p; p++) {
            var d = 1 << p;
            d & r || (c += (f % 2 ? -1 : 1) * t[n][p] * lt(t, e - 1, h, u, r | d, o), f++);
        }
        return o[a] = c, c;
    }
    function ut(t, e) {
        var n = [ [ t[0], t[1], 1, 0, 0, 0, -e[0] * t[0], -e[0] * t[1] ], [ 0, 0, 0, t[0], t[1], 1, -e[1] * t[0], -e[1] * t[1] ], [ t[2], t[3], 1, 0, 0, 0, -e[2] * t[2], -e[2] * t[3] ], [ 0, 0, 0, t[2], t[3], 1, -e[3] * t[2], -e[3] * t[3] ], [ t[4], t[5], 1, 0, 0, 0, -e[4] * t[4], -e[4] * t[5] ], [ 0, 0, 0, t[4], t[5], 1, -e[5] * t[4], -e[5] * t[5] ], [ t[6], t[7], 1, 0, 0, 0, -e[6] * t[6], -e[6] * t[7] ], [ 0, 0, 0, t[6], t[7], 1, -e[7] * t[6], -e[7] * t[7] ] ], i = {}, r = lt(n, 8, 0, 0, 0, i);
        if (0 !== r) {
            for (var o = [], a = 0; 8 > a; a++) for (var s = 0; 8 > s; s++) null == o[s] && (o[s] = 0), 
            o[s] += ((a + s) % 2 ? -1 : 1) * lt(n, 7, 0 === a ? 1 : 0, 1 << a, 1 << s, i) / r * e[a];
            return function(t, e, n) {
                var i = e * o[6] + n * o[7] + 1;
                t[0] = (e * o[0] + n * o[1] + o[2]) / i, t[1] = (e * o[3] + n * o[4] + o[5]) / i;
            };
        }
    }
    function ht(t, e, n, i, r) {
        if (e.getBoundingClientRect && wh.domSupported && !ct(e)) {
            var o = e[jh] || (e[jh] = {}), a = function(t, e, n) {
                for (var i = n ? "invTrans" : "trans", r = e[i], o = e.srcCoords, a = [], s = [], l = !0, u = 0; 4 > u; u++) {
                    var h = t[u].getBoundingClientRect(), c = 2 * u, p = h.left, f = h.top;
                    a.push(p, f), l = l && o && p === o[c] && f === o[c + 1], s.push(t[u].offsetLeft, t[u].offsetTop);
                }
                return l && r ? r : (e.srcCoords = a, e[i] = n ? ut(s, a) : ut(a, s));
            }(function(t, e) {
                var n = e.markers;
                if (n) return n;
                n = e.markers = [];
                for (var i = [ "left", "right" ], r = [ "top", "bottom" ], o = 0; 4 > o; o++) {
                    var a = document.createElement("div"), s = a.style, l = o % 2, u = (o >> 1) % 2;
                    s.cssText = [ "position: absolute", "visibility: hidden", "padding: 0", "margin: 0", "border-width: 0", "user-select: none", "width:0", "height:0", i[l] + ":0", r[u] + ":0", i[1 - l] + ":auto", r[1 - u] + ":auto", "" ].join("!important;"), 
                    t.appendChild(a), n.push(a);
                }
                return n;
            }(e, o), o, r);
            if (a) return a(t, n, i), !0;
        }
        return !1;
    }
    function ct(t) {
        return "CANVAS" === t.nodeName.toUpperCase();
    }
    function pt(t, e, n, i) {
        return n = n || {}, i || !wh.canvasSupported ? ft(t, e, n) : wh.browser.firefox && null != e.layerX && e.layerX !== e.offsetX ? (n.zrX = e.layerX, 
        n.zrY = e.layerY) : null != e.offsetX ? (n.zrX = e.offsetX, n.zrY = e.offsetY) : ft(t, e, n), 
        n;
    }
    function ft(t, e, n) {
        if (wh.domSupported && t.getBoundingClientRect) {
            var i = e.clientX, r = e.clientY;
            if (ct(t)) {
                var o = t.getBoundingClientRect();
                return n.zrX = i - o.left, void (n.zrY = r - o.top);
            }
            if (ht($h, t, i, r)) return n.zrX = $h[0], void (n.zrY = $h[1]);
        }
        n.zrX = n.zrY = 0;
    }
    function dt(t) {
        return t || window.event;
    }
    function gt(t, e, n) {
        if (null != (e = dt(e)).zrX) return e;
        var i = e.type;
        if (i && i.indexOf("touch") >= 0) {
            var r = "touchend" !== i ? e.targetTouches[0] : e.changedTouches[0];
            r && pt(t, r, e, n);
        } else {
            pt(t, e, e, n);
            var o = function(t) {
                var e = t.wheelDelta;
                if (e) return e;
                var n = t.deltaX, i = t.deltaY;
                return null == n || null == i ? e : 3 * Math.abs(0 !== i ? i : n) * (i > 0 ? -1 : 0 > i ? 1 : n > 0 ? -1 : 1);
            }(e);
            e.zrDelta = o ? o / 120 : -(e.detail || 0) / 3;
        }
        var a = e.button;
        return null == e.which && void 0 !== a && Kh.test(e.type) && (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), 
        e;
    }
    function yt(t, e, n, i) {
        Zh ? t.removeEventListener(e, n, i) : t.detachEvent("on" + e, n);
    }
    function vt(t) {
        var e = t[1][0] - t[0][0], n = t[1][1] - t[0][1];
        return Math.sqrt(e * e + n * n);
    }
    function mt() {
        Jh(this.event);
    }
    function _t(t, e, n) {
        if (t[t.rectHover ? "rectContain" : "contain"](e, n)) {
            for (var i = t, r = void 0, o = !1; i; ) {
                if (i.ignoreClip && (o = !0), !o) {
                    var a = i.getClipPath();
                    if (a && !a.contain(e, n)) return !1;
                    i.silent && (r = !0);
                }
                var s = i.__hostTarget;
                i = s || i.parent;
            }
            return !r || ec;
        }
        return !1;
    }
    function xt(t, e, n) {
        var i = t.painter;
        return 0 > e || e > i.getWidth() || 0 > n || n > i.getHeight();
    }
    function wt(t, e, n, i) {
        var r = e + 1;
        if (r === n) return 1;
        if (i(t[r++], t[e]) < 0) {
            for (;n > r && i(t[r], t[r - 1]) < 0; ) r++;
            !function(t, e, n) {
                for (n--; n > e; ) {
                    var i = t[e];
                    t[e++] = t[n], t[n--] = i;
                }
            }(t, e, r);
        } else for (;n > r && i(t[r], t[r - 1]) >= 0; ) r++;
        return r - e;
    }
    function bt(t, e, n, i, r) {
        for (i === e && i++; n > i; i++) {
            for (var o, a = t[i], s = e, l = i; l > s; ) r(a, t[o = s + l >>> 1]) < 0 ? l = o : s = o + 1;
            var u = i - s;
            switch (u) {
              case 3:
                t[s + 3] = t[s + 2];

              case 2:
                t[s + 2] = t[s + 1];

              case 1:
                t[s + 1] = t[s];
                break;

              default:
                for (;u > 0; ) t[s + u] = t[s + u - 1], u--;
            }
            t[s] = a;
        }
    }
    function St(t, e, n, i, r, o) {
        var a = 0, s = 0, l = 1;
        if (o(t, e[n + r]) > 0) {
            for (s = i - r; s > l && o(t, e[n + r + l]) > 0; ) a = l, 0 >= (l = 1 + (l << 1)) && (l = s);
            l > s && (l = s), a += r, l += r;
        } else {
            for (s = r + 1; s > l && o(t, e[n + r - l]) <= 0; ) a = l, 0 >= (l = 1 + (l << 1)) && (l = s);
            l > s && (l = s);
            var u = a;
            a = r - l, l = r - u;
        }
        for (a++; l > a; ) {
            var h = a + (l - a >>> 1);
            o(t, e[n + h]) > 0 ? a = h + 1 : l = h;
        }
        return l;
    }
    function Mt(t, e, n, i, r, o) {
        var a = 0, s = 0, l = 1;
        if (o(t, e[n + r]) < 0) {
            for (s = r + 1; s > l && o(t, e[n + r - l]) < 0; ) a = l, 0 >= (l = 1 + (l << 1)) && (l = s);
            l > s && (l = s);
            var u = a;
            a = r - l, l = r - u;
        } else {
            for (s = i - r; s > l && o(t, e[n + r + l]) >= 0; ) a = l, 0 >= (l = 1 + (l << 1)) && (l = s);
            l > s && (l = s), a += r, l += r;
        }
        for (a++; l > a; ) {
            var h = a + (l - a >>> 1);
            o(t, e[n + h]) < 0 ? l = h : a = h + 1;
        }
        return l;
    }
    function Tt(t, e, n, i) {
        n || (n = 0), i || (i = t.length);
        var r = i - n;
        if (!(2 > r)) {
            var o = 0;
            if (ac > r) return void bt(t, n, i, n + (o = wt(t, n, i, e)), e);
            var a = function(t, e) {
                function n(n) {
                    var s = o[n], u = a[n], h = o[n + 1], c = a[n + 1];
                    a[n] = u + c, n === l - 3 && (o[n + 1] = o[n + 2], a[n + 1] = a[n + 2]), l--;
                    var p = Mt(t[h], t, s, u, 0, e);
                    s += p, 0 !== (u -= p) && (0 !== (c = St(t[s + u - 1], t, h, c, c - 1, e)) && (c >= u ? i(s, u, h, c) : r(s, u, h, c)));
                }
                function i(n, i, r, o) {
                    var a = 0;
                    for (a = 0; i > a; a++) u[a] = t[n + a];
                    var l = 0, h = r, c = n;
                    if (t[c++] = t[h++], 0 != --o) {
                        if (1 === i) {
                            for (a = 0; o > a; a++) t[c + a] = t[h + a];
                            return void (t[c + o] = u[l]);
                        }
                        for (var p, f, d, g = s; ;) {
                            p = 0, f = 0, d = !1;
                            do {
                                if (e(t[h], u[l]) < 0) {
                                    if (t[c++] = t[h++], f++, p = 0, 0 == --o) {
                                        d = !0;
                                        break;
                                    }
                                } else if (t[c++] = u[l++], p++, f = 0, 1 == --i) {
                                    d = !0;
                                    break;
                                }
                            } while (g > (p | f));
                            if (d) break;
                            do {
                                if (0 !== (p = Mt(t[h], u, l, i, 0, e))) {
                                    for (a = 0; p > a; a++) t[c + a] = u[l + a];
                                    if (c += p, l += p, 1 >= (i -= p)) {
                                        d = !0;
                                        break;
                                    }
                                }
                                if (t[c++] = t[h++], 0 == --o) {
                                    d = !0;
                                    break;
                                }
                                if (0 !== (f = St(u[l], t, h, o, 0, e))) {
                                    for (a = 0; f > a; a++) t[c + a] = t[h + a];
                                    if (c += f, h += f, 0 === (o -= f)) {
                                        d = !0;
                                        break;
                                    }
                                }
                                if (t[c++] = u[l++], 1 == --i) {
                                    d = !0;
                                    break;
                                }
                                g--;
                            } while (p >= sc || f >= sc);
                            if (d) break;
                            0 > g && (g = 0), g += 2;
                        }
                        if (1 > (s = g) && (s = 1), 1 === i) {
                            for (a = 0; o > a; a++) t[c + a] = t[h + a];
                            t[c + o] = u[l];
                        } else {
                            if (0 === i) throw new Error();
                            for (a = 0; i > a; a++) t[c + a] = u[l + a];
                        }
                    } else for (a = 0; i > a; a++) t[c + a] = u[l + a];
                }
                function r(n, i, r, o) {
                    var a = 0;
                    for (a = 0; o > a; a++) u[a] = t[r + a];
                    var l = n + i - 1, h = o - 1, c = r + o - 1, p = 0, f = 0;
                    if (t[c--] = t[l--], 0 != --i) {
                        if (1 === o) {
                            for (f = (c -= i) + 1, p = (l -= i) + 1, a = i - 1; a >= 0; a--) t[f + a] = t[p + a];
                            return void (t[c] = u[h]);
                        }
                        for (var d = s; ;) {
                            var g = 0, y = 0, v = !1;
                            do {
                                if (e(u[h], t[l]) < 0) {
                                    if (t[c--] = t[l--], g++, y = 0, 0 == --i) {
                                        v = !0;
                                        break;
                                    }
                                } else if (t[c--] = u[h--], y++, g = 0, 1 == --o) {
                                    v = !0;
                                    break;
                                }
                            } while (d > (g | y));
                            if (v) break;
                            do {
                                if (0 !== (g = i - Mt(u[h], t, n, i, i - 1, e))) {
                                    for (i -= g, f = (c -= g) + 1, p = (l -= g) + 1, a = g - 1; a >= 0; a--) t[f + a] = t[p + a];
                                    if (0 === i) {
                                        v = !0;
                                        break;
                                    }
                                }
                                if (t[c--] = u[h--], 1 == --o) {
                                    v = !0;
                                    break;
                                }
                                if (0 !== (y = o - St(t[l], u, 0, o, o - 1, e))) {
                                    for (o -= y, f = (c -= y) + 1, p = (h -= y) + 1, a = 0; y > a; a++) t[f + a] = u[p + a];
                                    if (1 >= o) {
                                        v = !0;
                                        break;
                                    }
                                }
                                if (t[c--] = t[l--], 0 == --i) {
                                    v = !0;
                                    break;
                                }
                                d--;
                            } while (g >= sc || y >= sc);
                            if (v) break;
                            0 > d && (d = 0), d += 2;
                        }
                        if (1 > (s = d) && (s = 1), 1 === o) {
                            for (f = (c -= i) + 1, p = (l -= i) + 1, a = i - 1; a >= 0; a--) t[f + a] = t[p + a];
                            t[c] = u[h];
                        } else {
                            if (0 === o) throw new Error();
                            for (p = c - (o - 1), a = 0; o > a; a++) t[p + a] = u[a];
                        }
                    } else for (p = c - (o - 1), a = 0; o > a; a++) t[p + a] = u[a];
                }
                var o, a, s = sc, l = 0, u = [];
                return o = [], a = [], {
                    mergeRuns: function() {
                        for (;l > 1; ) {
                            var t = l - 2;
                            if (t >= 1 && a[t - 1] <= a[t] + a[t + 1] || t >= 2 && a[t - 2] <= a[t] + a[t - 1]) a[t - 1] < a[t + 1] && t--; else if (a[t] > a[t + 1]) break;
                            n(t);
                        }
                    },
                    forceMergeRuns: function() {
                        for (;l > 1; ) {
                            var t = l - 2;
                            t > 0 && a[t - 1] < a[t + 1] && t--, n(t);
                        }
                    },
                    pushRun: function(t, e) {
                        o[l] = t, a[l] = e, l += 1;
                    }
                };
            }(t, e), s = function(t) {
                for (var e = 0; t >= ac; ) e |= 1 & t, t >>= 1;
                return t + e;
            }(r);
            do {
                if (s > (o = wt(t, n, i, e))) {
                    var l = r;
                    l > s && (l = s), bt(t, n, n + l, n + o, e), o = l;
                }
                a.pushRun(n, o), a.mergeRuns(), r -= o, n += o;
            } while (0 !== r);
            a.forceMergeRuns();
        }
    }
    function Ct() {
        hc || (hc = !0, console.warn("z / z2 / zlevel of displayable is invalid, which may cause unexpected errors"));
    }
    function At(t, e) {
        return t.zlevel === e.zlevel ? t.z === e.z ? t.z2 - e.z2 : t.z - e.z : t.zlevel - e.zlevel;
    }
    function kt(t) {
        return 0 > (t = Math.round(t)) ? 0 : t > 255 ? 255 : t;
    }
    function It(t) {
        return 0 > t ? 0 : t > 1 ? 1 : t;
    }
    function Dt(t) {
        var e = t;
        return kt(e.length && "%" === e.charAt(e.length - 1) ? parseFloat(e) / 100 * 255 : parseInt(e, 10));
    }
    function Pt(t) {
        var e = t;
        return It(e.length && "%" === e.charAt(e.length - 1) ? parseFloat(e) / 100 : parseFloat(e));
    }
    function Lt(t, e, n) {
        return 0 > n ? n += 1 : n > 1 && (n -= 1), 1 > 6 * n ? t + (e - t) * n * 6 : 1 > 2 * n ? e : 2 > 3 * n ? t + (e - t) * (2 / 3 - n) * 6 : t;
    }
    function Ot(t, e, n) {
        return t + (e - t) * n;
    }
    function Rt(t, e, n, i, r) {
        return t[0] = e, t[1] = n, t[2] = i, t[3] = r, t;
    }
    function Et(t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t;
    }
    function Nt(t, e) {
        xc && Et(xc, e), xc = _c.put(t, xc || e.slice());
    }
    function Bt(t, e) {
        if (t) {
            e = e || [];
            var n = _c.get(t);
            if (n) return Et(e, n);
            var i = (t += "").replace(/ /g, "").toLowerCase();
            if (i in mc) return Et(e, mc[i]), Nt(t, e), e;
            var r = i.length;
            if ("#" !== i.charAt(0)) {
                var o = i.indexOf("("), a = i.indexOf(")");
                if (-1 !== o && a + 1 === r) {
                    var s = i.substr(0, o), l = i.substr(o + 1, a - (o + 1)).split(","), u = 1;
                    switch (s) {
                      case "rgba":
                        if (4 !== l.length) return 3 === l.length ? Rt(e, +l[0], +l[1], +l[2], 1) : Rt(e, 0, 0, 0, 1);
                        u = Pt(l.pop());

                      case "rgb":
                        return 3 !== l.length ? void Rt(e, 0, 0, 0, 1) : (Rt(e, Dt(l[0]), Dt(l[1]), Dt(l[2]), u), 
                        Nt(t, e), e);

                      case "hsla":
                        return 4 !== l.length ? void Rt(e, 0, 0, 0, 1) : (l[3] = Pt(l[3]), zt(l, e), Nt(t, e), 
                        e);

                      case "hsl":
                        return 3 !== l.length ? void Rt(e, 0, 0, 0, 1) : (zt(l, e), Nt(t, e), e);

                      default:
                        return;
                    }
                }
                Rt(e, 0, 0, 0, 1);
            } else {
                var h;
                if (4 === r || 5 === r) return (h = parseInt(i.slice(1, 4), 16)) >= 0 && 4095 >= h ? (Rt(e, (3840 & h) >> 4 | (3840 & h) >> 8, 240 & h | (240 & h) >> 4, 15 & h | (15 & h) << 4, 5 === r ? parseInt(i.slice(4), 16) / 15 : 1), 
                Nt(t, e), e) : void Rt(e, 0, 0, 0, 1);
                if (7 === r || 9 === r) return (h = parseInt(i.slice(1, 7), 16)) >= 0 && 16777215 >= h ? (Rt(e, (16711680 & h) >> 16, (65280 & h) >> 8, 255 & h, 9 === r ? parseInt(i.slice(7), 16) / 255 : 1), 
                Nt(t, e), e) : void Rt(e, 0, 0, 0, 1);
            }
        }
    }
    function zt(t, e) {
        var n = (parseFloat(t[0]) % 360 + 360) % 360 / 360, i = Pt(t[1]), r = Pt(t[2]), o = .5 >= r ? r * (i + 1) : r + i - r * i, a = 2 * r - o;
        return Rt(e = e || [], kt(255 * Lt(a, o, n + 1 / 3)), kt(255 * Lt(a, o, n)), kt(255 * Lt(a, o, n - 1 / 3)), 1), 
        4 === t.length && (e[3] = t[3]), e;
    }
    function Ft(t, e) {
        var n = Bt(t);
        if (n) {
            for (var i = 0; 3 > i; i++) n[i] = 0 > e ? n[i] * (1 - e) | 0 : (255 - n[i]) * e + n[i] | 0, 
            n[i] > 255 ? n[i] = 255 : n[i] < 0 && (n[i] = 0);
            return Wt(n, 4 === n.length ? "rgba" : "rgb");
        }
    }
    function Vt(t, e, n) {
        if (e && e.length && t >= 0 && 1 >= t) {
            n = n || [];
            var i = t * (e.length - 1), r = Math.floor(i), o = Math.ceil(i), a = e[r], s = e[o], l = i - r;
            return n[0] = kt(Ot(a[0], s[0], l)), n[1] = kt(Ot(a[1], s[1], l)), n[2] = kt(Ot(a[2], s[2], l)), 
            n[3] = It(Ot(a[3], s[3], l)), n;
        }
    }
    function Ht(t, e, n) {
        if (e && e.length && t >= 0 && 1 >= t) {
            var i = t * (e.length - 1), r = Math.floor(i), o = Math.ceil(i), a = Bt(e[r]), s = Bt(e[o]), l = i - r, u = Wt([ kt(Ot(a[0], s[0], l)), kt(Ot(a[1], s[1], l)), kt(Ot(a[2], s[2], l)), It(Ot(a[3], s[3], l)) ], "rgba");
            return n ? {
                color: u,
                leftIndex: r,
                rightIndex: o,
                value: i
            } : u;
        }
    }
    function Gt(t, e) {
        var n = Bt(t);
        return n && null != e ? (n[3] = It(e), Wt(n, "rgba")) : void 0;
    }
    function Wt(t, e) {
        if (t && t.length) {
            var n = t[0] + "," + t[1] + "," + t[2];
            return ("rgba" === e || "hsva" === e || "hsla" === e) && (n += "," + t[3]), e + "(" + n + ")";
        }
    }
    function Ut(t, e) {
        var n = Bt(t);
        return n ? (.299 * n[0] + .587 * n[1] + .114 * n[2]) * n[3] / 255 + (1 - n[3]) * e : 0;
    }
    function Xt(t, e, n) {
        return (e - t) * n + t;
    }
    function Yt(t, e, n, i) {
        for (var r = e.length, o = 0; r > o; o++) t[o] = Xt(e[o], n[o], i);
    }
    function qt(t, e, n, i) {
        for (var r = e.length, o = 0; r > o; o++) t[o] = e[o] + n[o] * i;
        return t;
    }
    function jt(t, e, n, i) {
        for (var r = e.length, o = r && e[0].length, a = 0; r > a; a++) {
            t[a] || (t[a] = []);
            for (var s = 0; o > s; s++) t[a][s] = e[a][s] + n[a][s] * i;
        }
        return t;
    }
    function Zt(t, e, n) {
        var i = t, r = e;
        if (i.push && r.push) {
            var o = i.length, a = r.length;
            if (o !== a) if (o > a) i.length = a; else for (var s = o; a > s; s++) i.push(1 === n ? r[s] : Mc.call(r[s]));
            var l = i[0] && i[0].length;
            for (s = 0; s < i.length; s++) if (1 === n) isNaN(i[s]) && (i[s] = r[s]); else for (var u = 0; l > u; u++) isNaN(i[s][u]) && (i[s][u] = r[s][u]);
        }
    }
    function Kt(t, e) {
        var n = t.length;
        if (n !== e.length) return !1;
        for (var i = 0; n > i; i++) if (t[i] !== e[i]) return !1;
        return !0;
    }
    function $t(t, e, n, i, r, o, a) {
        var s = .5 * (n - t), l = .5 * (i - e);
        return (2 * (e - n) + s + l) * a + (-3 * (e - n) - 2 * s - l) * o + s * r + e;
    }
    function Jt(t, e, n, i, r, o, a, s) {
        for (var l = e.length, u = 0; l > u; u++) t[u] = $t(e[u], n[u], i[u], r[u], o, a, s);
    }
    function Qt(t) {
        if (g(t)) {
            var e = t.length;
            if (g(t[0])) {
                for (var n = [], i = 0; e > i; i++) n.push(Mc.call(t[i]));
                return n;
            }
            return Mc.call(t);
        }
        return t;
    }
    function te(t) {
        return t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.floor(t[2]), 
        "rgba(" + t.join(",") + ")";
    }
    function ee(t) {
        var e = t.pointerType;
        return "pen" === e || "touch" === e;
    }
    function ne(t) {
        t && (t.zrByTouch = !0);
    }
    function ie(t, e) {
        for (var n = e, i = !1; n && 9 !== n.nodeType && !(i = n.domBelongToZr || n !== e && n === t.painterRoot); ) n = n.parentNode;
        return i;
    }
    function re(t, e) {
        var n = e.domHandlers;
        wh.pointerEventsSupported ? y(Dc.pointer, function(i) {
            ae(e, i, function(e) {
                n[i].call(t, e);
            });
        }) : (wh.touchEventsSupported && y(Dc.touch, function(i) {
            ae(e, i, function(r) {
                n[i].call(t, r), function(t) {
                    t.touching = !0, null != t.touchTimer && (clearTimeout(t.touchTimer), t.touchTimer = null), 
                    t.touchTimer = setTimeout(function() {
                        t.touching = !1, t.touchTimer = null;
                    }, 700);
                }(e);
            });
        }), y(Dc.mouse, function(i) {
            ae(e, i, function(r) {
                r = dt(r), e.touching || n[i].call(t, r);
            });
        }));
    }
    function oe(t, e) {
        function n(n) {
            ae(e, n, function(i) {
                i = dt(i), ie(t, i.target) || (i = function(t, e) {
                    return gt(t.dom, new Oc(t, e), !0);
                }(t, i), e.domHandlers[n].call(t, i));
            }, {
                capture: !0
            });
        }
        wh.pointerEventsSupported ? y(Pc.pointer, n) : wh.touchEventsSupported || y(Pc.mouse, n);
    }
    function ae(t, e, n, i) {
        t.mounted[e] = n, t.listenerOpts[e] = i, function(t, e, n, i) {
            Zh ? t.addEventListener(e, n, i) : t.attachEvent("on" + e, n);
        }(t.domTarget, e, n, i);
    }
    function se(t) {
        var e = t.mounted;
        for (var n in e) e.hasOwnProperty(n) && yt(t.domTarget, n, e[n], t.listenerOpts[n]);
        t.mounted = {};
    }
    function le() {
        return [ 1, 0, 0, 1, 0, 0 ];
    }
    function ue(t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t;
    }
    function he(t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], 
        t;
    }
    function ce(t, e, n) {
        var i = e[0] * n[0] + e[2] * n[1], r = e[1] * n[0] + e[3] * n[1], o = e[0] * n[2] + e[2] * n[3], a = e[1] * n[2] + e[3] * n[3], s = e[0] * n[4] + e[2] * n[5] + e[4], l = e[1] * n[4] + e[3] * n[5] + e[5];
        return t[0] = i, t[1] = r, t[2] = o, t[3] = a, t[4] = s, t[5] = l, t;
    }
    function pe(t, e, n) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + n[0], t[5] = e[5] + n[1], 
        t;
    }
    function fe(t, e, n) {
        var i = e[0], r = e[2], o = e[4], a = e[1], s = e[3], l = e[5], u = Math.sin(n), h = Math.cos(n);
        return t[0] = i * h + a * u, t[1] = -i * u + a * h, t[2] = r * h + s * u, t[3] = -r * u + h * s, 
        t[4] = h * o + u * l, t[5] = h * l - u * o, t;
    }
    function de(t, e, n) {
        var i = n[0], r = n[1];
        return t[0] = e[0] * i, t[1] = e[1] * r, t[2] = e[2] * i, t[3] = e[3] * r, t[4] = e[4] * i, 
        t[5] = e[5] * r, t;
    }
    function ge(t, e) {
        var n = e[0], i = e[2], r = e[4], o = e[1], a = e[3], s = e[5], l = n * a - o * i;
        return l ? (l = 1 / l, t[0] = a * l, t[1] = -o * l, t[2] = -i * l, t[3] = n * l, 
        t[4] = (i * s - a * r) * l, t[5] = (o * r - n * s) * l, t) : null;
    }
    function ye(t) {
        return t > qc || -qc > t;
    }
    function ve(t, e) {
        var n = up[e = e || hp];
        n || (n = up[e] = new vc(500));
        var i = n.get(t);
        return null == i && (i = cp.measureText(t, e).width, n.put(t, i)), i;
    }
    function me(t, e, n, i) {
        var r = ve(t, e), o = be(e), a = xe(0, r, n), s = we(0, o, i);
        return new lp(a, s, r, o);
    }
    function _e(t, e, n, i) {
        var r = ((t || "") + "").split("\n");
        if (1 === r.length) return me(r[0], e, n, i);
        for (var o = new lp(0, 0, 0, 0), a = 0; a < r.length; a++) {
            var s = me(r[a], e, n, i);
            0 === a ? o.copy(s) : o.union(s);
        }
        return o;
    }
    function xe(t, e, n) {
        return "right" === n ? t -= e : "center" === n && (t -= e / 2), t;
    }
    function we(t, e, n) {
        return "middle" === n ? t -= e / 2 : "bottom" === n && (t -= e), t;
    }
    function be(t) {
        return ve("国", t);
    }
    function Se(t, e) {
        return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t;
    }
    function Me(t, e, n) {
        var i = e.position || "inside", r = null != e.distance ? e.distance : 5, o = n.height, a = n.width, s = o / 2, l = n.x, u = n.y, h = "left", c = "top";
        if (i instanceof Array) l += Se(i[0], n.width), u += Se(i[1], n.height), h = null, 
        c = null; else switch (i) {
          case "left":
            l -= r, u += s, h = "right", c = "middle";
            break;

          case "right":
            l += r + a, u += s, c = "middle";
            break;

          case "top":
            l += a / 2, u -= r, h = "center", c = "bottom";
            break;

          case "bottom":
            l += a / 2, u += o + r, h = "center";
            break;

          case "inside":
            l += a / 2, u += s, h = "center", c = "middle";
            break;

          case "insideLeft":
            l += r, u += s, c = "middle";
            break;

          case "insideRight":
            l += a - r, u += s, h = "right", c = "middle";
            break;

          case "insideTop":
            l += a / 2, u += r, h = "center";
            break;

          case "insideBottom":
            l += a / 2, u += o - r, h = "center", c = "bottom";
            break;

          case "insideTopLeft":
            l += r, u += r;
            break;

          case "insideTopRight":
            l += a - r, u += r, h = "right";
            break;

          case "insideBottomLeft":
            l += r, u += o - r, c = "bottom";
            break;

          case "insideBottomRight":
            l += a - r, u += o - r, h = "right", c = "bottom";
        }
        return (t = t || {}).x = l, t.y = u, t.align = h, t.verticalAlign = c, t;
    }
    function Te(t, e, n, i, r) {
        var o = [];
        ke(t, "", t, e, n = n || {}, i, o, r);
        var a = o.length, s = !1, l = n.done, u = n.aborted, h = function() {
            s = !0, 0 >= --a && (s ? l && l() : u && u());
        }, c = function() {
            0 >= --a && (s ? l && l() : u && u());
        };
        a || l && l(), o.length > 0 && n.during && o[0].during(function(t, e) {
            n.during(e);
        });
        for (var p = 0; p < o.length; p++) {
            var f = o[p];
            h && f.done(h), c && f.aborted(c), f.start(n.easing, n.force);
        }
        return o;
    }
    function Ce(t, e, n) {
        for (var i = 0; n > i; i++) t[i] = e[i];
    }
    function Ae(t, e, n) {
        if (g(e[n])) if (g(t[n]) || (t[n] = []), D(e[n])) {
            var i = e[n].length;
            t[n].length !== i && (t[n] = new e[n].constructor(i), Ce(t[n], e[n], i));
        } else {
            var r = e[n], o = t[n], a = r.length;
            if (function(t) {
                return g(t[0]);
            }(r)) for (var s = r[0].length, l = 0; a > l; l++) o[l] ? Ce(o[l], r[l], s) : o[l] = Array.prototype.slice.call(r[l]); else Ce(o, r, a);
            o.length = r.length;
        } else t[n] = e[n];
    }
    function ke(t, e, n, i, r, o, a, s) {
        for (var l = [], u = [], h = w(i), c = r.duration, f = r.delay, d = r.additive, y = r.setToFinal, v = !k(o), m = 0; m < h.length; m++) {
            if (null != n[I = h[m]] && null != i[I] && (v || o[I])) if (k(i[I]) && !g(i[I])) {
                if (e) {
                    s || (n[I] = i[I], t.updateDuringAnimation(e));
                    continue;
                }
                ke(t, I, n[I], i[I], r, o && o[I], a, s);
            } else l.push(I), u.push(I); else s || (n[I] = i[I], t.updateDuringAnimation(e), 
            u.push(I));
        }
        var _ = l.length;
        if (_ > 0 || r.force && !a.length) {
            for (var x = t.animators, b = [], S = 0; S < x.length; S++) x[S].targetName === e && b.push(x[S]);
            if (!d && b.length) for (S = 0; S < b.length; S++) {
                if (b[S].stopTracks(u)) {
                    var M = p(x, b[S]);
                    x.splice(M, 1);
                }
            }
            var T = void 0, C = void 0, A = void 0;
            if (s) {
                C = {}, y && (T = {});
                for (S = 0; _ > S; S++) {
                    C[I = l[S]] = n[I], y ? T[I] = i[I] : n[I] = i[I];
                }
            } else if (y) {
                A = {};
                for (S = 0; _ > S; S++) {
                    var I;
                    A[I = l[S]] = Qt(n[I]), Ae(n, i, I);
                }
            }
            var D = new Ac(n, !1, d ? b : null);
            D.targetName = e, r.scope && (D.scope = r.scope), y && T && D.whenWithKeys(0, T, l), 
            A && D.whenWithKeys(0, A, l), D.whenWithKeys(null == c ? 500 : c, s ? C : i, l).delay(f || 0), 
            t.addAnimator(D, e), a.push(D);
        }
    }
    function Ie(t, e) {
        var n = new bp(o(), t, e);
        return wp[n.id] = n, n;
    }
    function De(t, e) {
        xp[t] = e;
    }
    function Pe(t, e, n, i) {
        var r = e[0], o = e[1], a = n[0], s = n[1], l = o - r, u = s - a;
        if (0 === l) return 0 === u ? a : (a + s) / 2;
        if (i) if (l > 0) {
            if (r >= t) return a;
            if (t >= o) return s;
        } else {
            if (t >= r) return a;
            if (o >= t) return s;
        } else {
            if (t === r) return a;
            if (t === o) return s;
        }
        return (t - r) / l * u + a;
    }
    function Le(t, e) {
        switch (t) {
          case "center":
          case "middle":
            t = "50%";
            break;

          case "left":
          case "top":
            t = "0%";
            break;

          case "right":
          case "bottom":
            t = "100%";
        }
        return "string" == typeof t ? function(t) {
            return t.replace(/^\s+|\s+$/g, "");
        }(t).match(/%$/) ? parseFloat(t) / 100 * e : parseFloat(t) : null == t ? NaN : +t;
    }
    function Oe(t, e, n) {
        return null == e && (e = 10), e = Math.min(Math.max(0, e), Tp), t = (+t).toFixed(e), 
        n ? t : +t;
    }
    function Re(t) {
        return t.sort(function(t, e) {
            return t - e;
        }), t;
    }
    function Ee(t) {
        if (t = +t, isNaN(t)) return 0;
        if (t > 1e-14) for (var e = 1, n = 0; 15 > n; n++, e *= 10) if (Math.round(t * e) / e === t) return n;
        return Ne(t);
    }
    function Ne(t) {
        var e = t.toString().toLowerCase(), n = e.indexOf("e"), i = n > 0 ? +e.slice(n + 1) : 0, r = n > 0 ? n : e.length, o = e.indexOf("."), a = 0 > o ? 0 : r - 1 - o;
        return Math.max(0, a - i);
    }
    function Be(t, e) {
        var n = Math.log, i = Math.LN10, r = Math.floor(n(t[1] - t[0]) / i), o = Math.round(n(Math.abs(e[1] - e[0])) / i), a = Math.min(Math.max(-r + o, 0), 20);
        return isFinite(a) ? a : 20;
    }
    function ze(t, e) {
        var n = Math.max(Ee(t), Ee(e)), i = t + e;
        return n > Tp ? i : Oe(i, n);
    }
    function Fe(t) {
        var e = 2 * Math.PI;
        return (t % e + e) % e;
    }
    function Ve(t) {
        return t > -Mp && Mp > t;
    }
    function He(t) {
        if (t instanceof Date) return t;
        if ("string" == typeof t) {
            var e = Cp.exec(t);
            if (!e) return new Date(NaN);
            if (e[8]) {
                var n = +e[4] || 0;
                return "Z" !== e[8].toUpperCase() && (n -= +e[8].slice(0, 3)), new Date(Date.UTC(+e[1], +(e[2] || 1) - 1, +e[3] || 1, n, +(e[5] || 0), +e[6] || 0, +e[7] || 0));
            }
            return new Date(+e[1], +(e[2] || 1) - 1, +e[3] || 1, +e[4] || 0, +(e[5] || 0), +e[6] || 0, +e[7] || 0);
        }
        return new Date(null == t ? NaN : Math.round(t));
    }
    function Ge(t) {
        return Math.pow(10, We(t));
    }
    function We(t) {
        if (0 === t) return 0;
        var e = Math.floor(Math.log(t) / Math.LN10);
        return t / Math.pow(10, e) >= 10 && e++, e;
    }
    function Ue(t, e) {
        var n = We(t), i = Math.pow(10, n), r = t / i;
        return t = (e ? 1.5 > r ? 1 : 2.5 > r ? 2 : 4 > r ? 3 : 7 > r ? 5 : 10 : 1 > r ? 1 : 2 > r ? 2 : 3 > r ? 3 : 5 > r ? 5 : 10) * i, 
        n >= -20 ? +t.toFixed(0 > n ? -n : 0) : t;
    }
    function Xe(t) {
        var e = parseFloat(t);
        return e == t && (0 !== e || "string" != typeof t || t.indexOf("x") <= 0) ? e : NaN;
    }
    function Ye(t) {
        return !isNaN(Xe(t));
    }
    function qe() {
        return Math.round(9 * Math.random());
    }
    function je(t, e) {
        return null == t ? e : null == e ? t : t * e / function t(e, n) {
            return 0 === n ? e : t(n, e % n);
        }(t, e);
    }
    function Ze(t) {
        throw new Error(t);
    }
    function Ke(t) {
        return t instanceof Array ? t : null == t ? [] : [ t ];
    }
    function $e(t, e, n) {
        if (t) {
            t[e] = t[e] || {}, t.emphasis = t.emphasis || {}, t.emphasis[e] = t.emphasis[e] || {};
            for (var i = 0, r = n.length; r > i; i++) {
                var o = n[i];
                !t.emphasis[e].hasOwnProperty(o) && t[e].hasOwnProperty(o) && (t.emphasis[e][o] = t[e][o]);
            }
        }
    }
    function Je(t) {
        return !k(t) || S(t) || t instanceof Date ? t : t.value;
    }
    function Qe(t, e, n) {
        var i = "normalMerge" === n, r = "replaceMerge" === n, o = "replaceAll" === n;
        t = t || [], e = (e || []).slice();
        var a = U();
        y(e, function(t, n) {
            return k(t) ? void 0 : void (e[n] = null);
        });
        var s = function(t, e, n) {
            var i = [];
            if ("replaceAll" === n) return i;
            for (var r = 0; r < t.length; r++) {
                var o = t[r];
                o && null != o.id && e.set(o.id, r), i.push({
                    existing: "replaceMerge" === n || on(o) ? null : o,
                    newOption: null,
                    keyInfo: null,
                    brandNew: null
                });
            }
            return i;
        }(t, a, n);
        return (i || r) && function(t, e, n, i) {
            y(i, function(r, o) {
                if (r && null != r.id) {
                    var a = en(r.id), s = n.get(a);
                    if (null != s) {
                        var l = t[s];
                        V(!l.newOption, 'Duplicated option on id "' + a + '".'), l.newOption = r, l.existing = e[s], 
                        i[o] = null;
                    }
                }
            });
        }(s, t, a, e), i && function(t, e) {
            y(e, function(n, i) {
                if (n && null != n.name) for (var r = 0; r < t.length; r++) {
                    var o = t[r].existing;
                    if (!t[r].newOption && o && (null == o.id || null == n.id) && !on(n) && !on(o) && tn("name", o, n)) return t[r].newOption = n, 
                    void (e[i] = null);
                }
            });
        }(s, e), i || r ? function(t, e, n) {
            y(e, function(e) {
                if (e) {
                    for (var i, r = 0; (i = t[r]) && (i.newOption || on(i.existing) || i.existing && null != e.id && !tn("id", e, i.existing)); ) r++;
                    i ? (i.newOption = e, i.brandNew = n) : t.push({
                        newOption: e,
                        brandNew: n,
                        existing: null,
                        keyInfo: null
                    }), r++;
                }
            });
        }(s, e, r) : o && function(t, e) {
            y(e, function(e) {
                t.push({
                    newOption: e,
                    brandNew: !0,
                    existing: null,
                    keyInfo: null
                });
            });
        }(s, e), function(t) {
            var e = U();
            y(t, function(t) {
                var n = t.existing;
                n && e.set(n.id, t);
            }), y(t, function(t) {
                var n = t.newOption;
                V(!n || null == n.id || !e.get(n.id) || e.get(n.id) === t, "id duplicates: " + (n && n.id)), 
                n && null != n.id && e.set(n.id, t), !t.keyInfo && (t.keyInfo = {});
            }), y(t, function(t, n) {
                var i = t.existing, r = t.newOption, o = t.keyInfo;
                if (k(r)) {
                    if (o.name = null != r.name ? en(r.name) : i ? i.name : Ap + n, i) o.id = en(i.id); else if (null != r.id) o.id = en(r.id); else {
                        var a = 0;
                        do {
                            o.id = "\0" + o.name + "\0" + a++;
                        } while (e.get(o.id));
                    }
                    e.set(o.id, t);
                }
            });
        }(s), s;
    }
    function tn(t, e, n) {
        var i = nn(e[t], null), r = nn(n[t], null);
        return null != i && null != r && i === r;
    }
    function en(t) {
        return nn(t, "");
    }
    function nn(e, n) {
        if (null == e) return n;
        var i = t(e);
        return "string" === i ? e : "number" === i || C(e) ? e + "" : n;
    }
    function rn(t) {
        var e = t.name;
        return !(!e || !e.indexOf(Ap));
    }
    function on(t) {
        return t && null != t.id && 0 === en(t.id).indexOf(kp);
    }
    function an(t, e) {
        return null != e.dataIndexInside ? e.dataIndexInside : null != e.dataIndex ? S(e.dataIndex) ? v(e.dataIndex, function(e) {
            return t.indexOfRawIndex(e);
        }) : t.indexOfRawIndex(e.dataIndex) : null != e.name ? S(e.name) ? v(e.name, function(e) {
            return t.indexOfName(e);
        }) : t.indexOfName(e.name) : void 0;
    }
    function sn() {
        var t = "__ec_inner_" + Dp++;
        return function(e) {
            return e[t] || (e[t] = {});
        };
    }
    function ln(t, e, n) {
        var i = un(e, n), r = i.mainTypeSpecified, o = i.queryOptionMap, a = i.others, s = n ? n.defaultMainType : null;
        return !r && s && o.set(s, {}), o.each(function(e, i) {
            var r = hn(t, i, e, {
                useDefault: s === i,
                enableAll: !n || null == n.enableAll || n.enableAll,
                enableNone: !n || null == n.enableNone || n.enableNone
            });
            a[i + "Models"] = r.models, a[i + "Model"] = r.models[0];
        }), a;
    }
    function un(t, e) {
        var n;
        if (T(t)) {
            var i = {};
            i[t + "Index"] = 0, n = i;
        } else n = t;
        var r = U(), o = {}, a = !1;
        return y(n, function(t, n) {
            if ("dataIndex" !== n && "dataIndexInside" !== n) {
                var i = n.match(/^(\w+)(Index|Id|Name)$/) || [], s = i[1], l = (i[2] || "").toLowerCase();
                if (s && l && !(e && e.includeMainTypes && p(e.includeMainTypes, s) < 0)) a = a || !!s, 
                (r.get(s) || r.set(s, {}))[l] = t;
            } else o[n] = t;
        }), {
            mainTypeSpecified: a,
            queryOptionMap: r,
            others: o
        };
    }
    function hn(t, e, n, i) {
        i = i || Pp;
        var r = n.index, o = n.id, a = n.name, s = {
            models: null,
            specified: null != r || null != o || null != a
        };
        if (!s.specified) {
            var l = void 0;
            return s.models = i.useDefault && (l = t.getComponent(e)) ? [ l ] : [], s;
        }
        return "none" === r || !1 === r ? (V(i.enableNone, '`"none"` or `false` is not a valid value on index option.'), 
        s.models = [], s) : ("all" === r && (V(i.enableAll, '`"all"` is not a valid value on index option.'), 
        r = o = a = null), s.models = t.queryComponents({
            mainType: e,
            index: r,
            id: o,
            name: a
        }), s);
    }
    function cn(t, e, n) {
        t.setAttribute ? t.setAttribute(e, n) : t[e] = n;
    }
    function pn(t) {
        var e = {
            main: "",
            sub: ""
        };
        if (t) {
            var n = t.split(Lp);
            e.main = n[0] || "", e.sub = n[1] || "";
        }
        return e;
    }
    function fn(t) {
        t.$constructor = t, t.extend = function(t) {
            function e() {
                for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
                if (t.$constructor) t.$constructor.apply(this, arguments); else {
                    if (dn(n)) {
                        var a = X(e.prototype, new (n.bind.apply(n, i([ void 0 ], r)))());
                        return a;
                    }
                    n.apply(this, arguments);
                }
            }
            var n = this;
            return e[Rp] = !0, h(e.prototype, t), e.extend = this.extend, e.superCall = yn, 
            e.superApply = vn, f(e, this), e.superClass = n, e;
        };
    }
    function dn(t) {
        return "function" == typeof t && /^class\s/.test(Function.prototype.toString.call(t));
    }
    function gn(t, e) {
        t.extend = e.extend;
    }
    function yn(t, e) {
        for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
        return this.superClass.prototype[e].apply(t, n);
    }
    function vn(t, e, n) {
        return this.superClass.prototype[e].apply(t, n);
    }
    function mn(t) {
        var e = {};
        t.registerClass = function(t) {
            var n = t.type || t.prototype.type;
            if (n) {
                (function(t) {
                    V(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t), 'componentType "' + t + '" illegal');
                })(n), t.prototype.type = n;
                var i = pn(n);
                if (i.sub) {
                    if (i.sub !== Op) ((function(t) {
                        var n = e[t.main];
                        return n && n[Op] || ((n = e[t.main] = {})[Op] = !0), n;
                    })(i))[i.sub] = t;
                } else e[i.main] = t;
            }
            return t;
        }, t.getClass = function(t, n, i) {
            var r = e[t];
            if (r && r[Op] && (r = n ? r[n] : null), i && !r) throw new Error(n ? "Component " + t + "." + (n || "") + " is used but not imported." : t + ".type should be specified.");
            return r;
        }, t.getClassesByMainType = function(t) {
            var n = pn(t), i = [], r = e[n.main];
            return r && r[Op] ? y(r, function(t, e) {
                e !== Op && i.push(t);
            }) : i.push(r), i;
        }, t.hasClass = function(t) {
            var n = pn(t);
            return !!e[n.main];
        }, t.getAllClassMainTypes = function() {
            var t = [];
            return y(e, function(e, n) {
                t.push(n);
            }), t;
        }, t.hasSubTypes = function(t) {
            var n = pn(t), i = e[n.main];
            return i && i[Op];
        };
    }
    function _n(t, e) {
        for (var n = 0; n < t.length; n++) t[n][1] || (t[n][1] = t[n][0]);
        return e = e || !1, function(n, i, r) {
            for (var o = {}, a = 0; a < t.length; a++) {
                var s = t[a][1];
                if (!(i && p(i, s) >= 0 || r && p(r, s) < 0)) {
                    var l = n.getShallow(s, e);
                    null != l && (o[t[a][0]] = l);
                }
            }
            return o;
        };
    }
    function xn(t) {
        if ("string" == typeof t) {
            var e = zp.get(t);
            return e && e.image;
        }
        return t;
    }
    function wn(t, e, n, i, r) {
        if (t) {
            if ("string" == typeof t) {
                if (e && e.__zrImageSrc === t || !n) return e;
                var o = zp.get(t), a = {
                    hostEl: n,
                    cb: i,
                    cbPayload: r
                };
                return o ? !Sn(e = o.image) && o.pending.push(a) : ((e = new Image()).onload = e.onerror = bn, 
                zp.put(t, e.__cachedImgObj = {
                    image: e,
                    pending: [ a ]
                }), e.src = e.__zrImageSrc = t), e;
            }
            return t;
        }
        return e;
    }
    function bn() {
        var t = this.__cachedImgObj;
        this.onload = this.onerror = this.__cachedImgObj = null;
        for (var e = 0; e < t.pending.length; e++) {
            var n = t.pending[e], i = n.cb;
            i && i(this, n.cbPayload), n.hostEl.dirty();
        }
        t.pending.length = 0;
    }
    function Sn(t) {
        return t && t.width && t.height;
    }
    function Mn(t, e, n, i, r) {
        if (!e) return "";
        var o = (t + "").split("\n");
        r = Tn(e, n, i, r);
        for (var a = 0, s = o.length; s > a; a++) o[a] = Cn(o[a], r);
        return o.join("\n");
    }
    function Tn(t, e, n, i) {
        var r = h({}, i = i || {});
        r.font = e, n = N(n, "..."), r.maxIterations = N(i.maxIterations, 2);
        var o = r.minChar = N(i.minChar, 0);
        r.cnCharWidth = ve("国", e);
        var a = r.ascCharWidth = ve("a", e);
        r.placeholder = N(i.placeholder, "");
        for (var s = t = Math.max(0, t - 1), l = 0; o > l && s >= a; l++) s -= a;
        var u = ve(n, e);
        return u > s && (n = "", u = 0), s = t - u, r.ellipsis = n, r.ellipsisWidth = u, 
        r.contentWidth = s, r.containerWidth = t, r;
    }
    function Cn(t, e) {
        var n = e.containerWidth, i = e.font, r = e.contentWidth;
        if (!n) return "";
        var o = ve(t, i);
        if (n >= o) return t;
        for (var a = 0; ;a++) {
            if (r >= o || a >= e.maxIterations) {
                t += e.ellipsis;
                break;
            }
            var s = 0 === a ? An(t, r, e.ascCharWidth, e.cnCharWidth) : o > 0 ? Math.floor(t.length * r / o) : 0;
            o = ve(t = t.substr(0, s), i);
        }
        return "" === t && (t = e.placeholder), t;
    }
    function An(t, e, n, i) {
        for (var r = 0, o = 0, a = t.length; a > o && e > r; o++) {
            var s = t.charCodeAt(o);
            r += s >= 0 && 127 >= s ? n : i;
        }
        return o;
    }
    function kn(t, e, n, i, r) {
        var o, a, s = "" === e, l = r && n.rich[r] || {}, u = t.lines, h = l.font || n.font, c = !1;
        if (i) {
            var p = l.padding, f = p ? p[1] + p[3] : 0;
            if (null != l.width && "auto" !== l.width) {
                var d = Se(l.width, i.width) + f;
                u.length > 0 && d + i.accumWidth > i.width && (o = e.split("\n"), c = !0), i.accumWidth = d;
            } else {
                var g = Dn(e, h, i.width, i.breakAll, i.accumWidth);
                i.accumWidth = g.accumWidth + f, a = g.linesWidths, o = g.lines;
            }
        } else o = e.split("\n");
        for (var y = 0; y < o.length; y++) {
            var v = o[y], m = new Vp();
            if (m.styleName = r, m.text = v, m.isLineHolder = !v && !s, m.width = "number" == typeof l.width ? l.width : a ? a[y] : ve(v, h), 
            y || c) u.push(new Hp([ m ])); else {
                var _ = (u[u.length - 1] || (u[0] = new Hp())).tokens, x = _.length;
                1 === x && _[0].isLineHolder ? _[0] = m : (v || !x || s) && _.push(m);
            }
        }
    }
    function In(t) {
        return !function(t) {
            var e = t.charCodeAt(0);
            return e >= 33 && 255 >= e;
        }(t) || !!Wp[t];
    }
    function Dn(t, e, n, i, r) {
        for (var o = [], a = [], s = "", l = "", u = 0, h = 0, c = 0; c < t.length; c++) {
            var p = t.charAt(c);
            if ("\n" !== p) {
                var f = ve(p, e), d = !i && !In(p);
                (o.length ? h + f > n : r + h + f > n) ? h ? (s || l) && (d ? (s || (s = l, l = "", 
                h = u = 0), o.push(s), a.push(h - u), l += p, s = "", h = u += f) : (l && (s += l, 
                h += u, l = "", u = 0), o.push(s), a.push(h), s = p, h = f)) : d ? (o.push(l), a.push(u), 
                l = p, u = f) : (o.push(p), a.push(f)) : (h += f, d ? (l += p, u += f) : (l && (s += l, 
                l = "", u = 0), s += p));
            } else l && (s += l, h += u), o.push(s), a.push(h), s = "", l = "", u = 0, h = 0;
        }
        return o.length || s || (s = t, l = "", u = 0), l && (s += l), s && (o.push(s), 
        a.push(h)), 1 === o.length && (h += r), {
            accumWidth: h,
            lines: o,
            linesWidths: a
        };
    }
    function Pn(t) {
        return t > -tf && tf > t;
    }
    function Ln(t) {
        return t > tf || -tf > t;
    }
    function On(t, e, n, i, r) {
        var o = 1 - r;
        return o * o * (o * t + 3 * r * e) + r * r * (r * i + 3 * o * n);
    }
    function Rn(t, e, n, i, r) {
        var o = 1 - r;
        return 3 * (((e - t) * o + 2 * (n - e) * r) * o + (i - n) * r * r);
    }
    function En(t, e, n, i, r) {
        var o = 6 * n - 12 * e + 6 * t, a = 9 * e + 3 * i - 3 * t - 9 * n, s = 3 * e - 3 * t, l = 0;
        if (Pn(a)) {
            if (Ln(o)) (h = -s / o) >= 0 && 1 >= h && (r[l++] = h);
        } else {
            var u = o * o - 4 * a * s;
            if (Pn(u)) r[0] = -o / (2 * a); else if (u > 0) {
                var h, c = Qp(u), p = (-o - c) / (2 * a);
                (h = (-o + c) / (2 * a)) >= 0 && 1 >= h && (r[l++] = h), p >= 0 && 1 >= p && (r[l++] = p);
            }
        }
        return l;
    }
    function Nn(t, e, n, i, r, o) {
        var a = (e - t) * r + t, s = (n - e) * r + e, l = (i - n) * r + n, u = (s - a) * r + a, h = (l - s) * r + s, c = (h - u) * r + u;
        o[0] = t, o[1] = a, o[2] = u, o[3] = c, o[4] = c, o[5] = h, o[6] = l, o[7] = i;
    }
    function Bn(t, e, n, i, r, o, a, s, l, u, h) {
        var c, p, f, d, g, y = .005, v = 1 / 0;
        of[0] = l, of[1] = u;
        for (var m = 0; 1 > m; m += .05) af[0] = On(t, n, r, a, m), af[1] = On(e, i, o, s, m), 
        v > (d = Gh(of, af)) && (c = m, v = d);
        v = 1 / 0;
        for (var _ = 0; 32 > _ && !(ef > y); _++) p = c - y, f = c + y, af[0] = On(t, n, r, a, p), 
        af[1] = On(e, i, o, s, p), d = Gh(af, of), p >= 0 && v > d ? (c = p, v = d) : (sf[0] = On(t, n, r, a, f), 
        sf[1] = On(e, i, o, s, f), g = Gh(sf, of), 1 >= f && v > g ? (c = f, v = g) : y *= .5);
        return h && (h[0] = On(t, n, r, a, c), h[1] = On(e, i, o, s, c)), Qp(v);
    }
    function zn(t, e, n, i, r, o, a, s, l) {
        for (var u = t, h = e, c = 0, p = 1 / l, f = 1; l >= f; f++) {
            var d = f * p, g = On(t, n, r, a, d), y = On(e, i, o, s, d), v = g - u, m = y - h;
            c += Math.sqrt(v * v + m * m), u = g, h = y;
        }
        return c;
    }
    function Fn(t, e, n, i) {
        var r = 1 - i;
        return r * (r * t + 2 * i * e) + i * i * n;
    }
    function Vn(t, e, n, i) {
        return 2 * ((1 - i) * (e - t) + i * (n - e));
    }
    function Hn(t, e, n) {
        var i = t + n - 2 * e;
        return 0 === i ? .5 : (t - e) / i;
    }
    function Gn(t, e, n, i, r) {
        var o = (e - t) * i + t, a = (n - e) * i + e, s = (a - o) * i + o;
        r[0] = t, r[1] = o, r[2] = s, r[3] = s, r[4] = a, r[5] = n;
    }
    function Wn(t, e, n, i, r, o, a, s, l) {
        var u, h = .005, c = 1 / 0;
        of[0] = a, of[1] = s;
        for (var p = 0; 1 > p; p += .05) {
            af[0] = Fn(t, n, r, p), af[1] = Fn(e, i, o, p), c > (y = Gh(of, af)) && (u = p, 
            c = y);
        }
        c = 1 / 0;
        for (var f = 0; 32 > f && !(ef > h); f++) {
            var d = u - h, g = u + h;
            af[0] = Fn(t, n, r, d), af[1] = Fn(e, i, o, d);
            var y = Gh(af, of);
            if (d >= 0 && c > y) u = d, c = y; else {
                sf[0] = Fn(t, n, r, g), sf[1] = Fn(e, i, o, g);
                var v = Gh(sf, of);
                1 >= g && c > v ? (u = g, c = v) : h *= .5;
            }
        }
        return l && (l[0] = Fn(t, n, r, u), l[1] = Fn(e, i, o, u)), Qp(c);
    }
    function Un(t, e, n, i, r, o, a) {
        for (var s = t, l = e, u = 0, h = 1 / a, c = 1; a >= c; c++) {
            var p = c * h, f = Fn(t, n, r, p), d = Fn(e, i, o, p), g = f - s, y = d - l;
            u += Math.sqrt(g * g + y * y), s = f, l = d;
        }
        return u;
    }
    function Xn(t, e, n) {
        if (0 !== t.length) {
            for (var i = t[0], r = i[0], o = i[0], a = i[1], s = i[1], l = 1; l < t.length; l++) i = t[l], 
            r = lf(r, i[0]), o = uf(o, i[0]), a = lf(a, i[1]), s = uf(s, i[1]);
            e[0] = r, e[1] = a, n[0] = o, n[1] = s;
        }
    }
    function Yn(t, e, n, i, r, o) {
        r[0] = lf(t, n), r[1] = lf(e, i), o[0] = uf(t, n), o[1] = uf(e, i);
    }
    function qn(t, e, n, i, r, o, a, s, l, u) {
        var h = En, c = On, p = h(t, n, r, a, yf);
        l[0] = 1 / 0, l[1] = 1 / 0, u[0] = -1 / 0, u[1] = -1 / 0;
        for (var f = 0; p > f; f++) {
            var d = c(t, n, r, a, yf[f]);
            l[0] = lf(d, l[0]), u[0] = uf(d, u[0]);
        }
        p = h(e, i, o, s, vf);
        for (f = 0; p > f; f++) {
            var g = c(e, i, o, s, vf[f]);
            l[1] = lf(g, l[1]), u[1] = uf(g, u[1]);
        }
        l[0] = lf(t, l[0]), u[0] = uf(t, u[0]), l[0] = lf(a, l[0]), u[0] = uf(a, u[0]), 
        l[1] = lf(e, l[1]), u[1] = uf(e, u[1]), l[1] = lf(s, l[1]), u[1] = uf(s, u[1]);
    }
    function jn(t, e, n, i, r, o, a, s) {
        var l = Hn, u = Fn, h = uf(lf(l(t, n, r), 1), 0), c = uf(lf(l(e, i, o), 1), 0), p = u(t, n, r, h), f = u(e, i, o, c);
        a[0] = lf(t, r, p), a[1] = lf(e, o, f), s[0] = uf(t, r, p), s[1] = uf(e, o, f);
    }
    function Zn(t, e, n, i, r, o, a, s, l) {
        var u = at, h = st, c = Math.abs(r - o);
        if (1e-4 > c % pf && c > 1e-4) return s[0] = t - n, s[1] = e - i, l[0] = t + n, 
        void (l[1] = e + i);
        if (ff[0] = cf(r) * n + t, ff[1] = hf(r) * i + e, df[0] = cf(o) * n + t, df[1] = hf(o) * i + e, 
        u(s, ff, df), h(l, ff, df), 0 > (r %= pf) && (r += pf), 0 > (o %= pf) && (o += pf), 
        r > o && !a ? o += pf : o > r && a && (r += pf), a) {
            var p = o;
            o = r, r = p;
        }
        for (var f = 0; o > f; f += Math.PI / 2) f > r && (gf[0] = cf(f) * n + t, gf[1] = hf(f) * i + e, 
        u(s, gf, s), h(l, gf, l));
    }
    function Kn(t) {
        return Math.round(t / Pf * 1e8) / 1e8 % 2 * Pf;
    }
    function $n(t, e) {
        var n = Kn(t[0]);
        0 > n && (n += Lf);
        var i = n - t[0], r = t[1];
        r += i, !e && r - n >= Lf ? r = n + Lf : e && n - r >= Lf ? r = n - Lf : !e && n > r ? r = n + (Lf - Kn(n - r)) : e && r > n && (r = n - (Lf - Kn(r - n))), 
        t[0] = n, t[1] = r;
    }
    function Jn(t, e, n, i, r, o, a) {
        if (0 === r) return !1;
        var s, l = r;
        if (a > e + l && a > i + l || e - l > a && i - l > a || o > t + l && o > n + l || t - l > o && n - l > o) return !1;
        if (t === n) return Math.abs(o - t) <= l / 2;
        var u = (s = (e - i) / (t - n)) * o - a + (t * i - n * e) / (t - n);
        return l / 2 * l / 2 >= u * u / (s * s + 1);
    }
    function Qn(t, e, n, i, r, o, a, s, l, u, h) {
        if (0 === l) return !1;
        return !(h > e + l && h > i + l && h > o + l && h > s + l || e - l > h && i - l > h && o - l > h && s - l > h || u > t + l && u > n + l && u > r + l && u > a + l || t - l > u && n - l > u && r - l > u && a - l > u) && l / 2 >= Bn(t, e, n, i, r, o, a, s, u, h, null);
    }
    function ti(t, e, n, i, r, o, a, s, l) {
        if (0 === a) return !1;
        return !(l > e + a && l > i + a && l > o + a || e - a > l && i - a > l && o - a > l || s > t + a && s > n + a && s > r + a || t - a > s && n - a > s && r - a > s) && a / 2 >= Wn(t, e, n, i, r, o, s, l, null);
    }
    function ei(t) {
        return 0 > (t %= Nf) && (t += Nf), t;
    }
    function ni(t, e, n, i, r, o, a, s, l) {
        if (0 === a) return !1;
        var u = a;
        s -= t, l -= e;
        var h = Math.sqrt(s * s + l * l);
        if (h - u > n || n > h + u) return !1;
        if (Math.abs(i - r) % Bf < 1e-4) return !0;
        if (o) {
            var c = i;
            i = ei(r), r = ei(c);
        } else i = ei(i), r = ei(r);
        i > r && (r += Bf);
        var p = Math.atan2(l, s);
        return 0 > p && (p += Bf), p >= i && r >= p || p + Bf >= i && r >= p + Bf;
    }
    function ii(t, e, n, i, r, o) {
        if (o > e && o > i || e > o && i > o) return 0;
        if (i === e) return 0;
        var a = (o - e) / (i - e), s = e > i ? 1 : -1;
        (1 === a || 0 === a) && (s = e > i ? .5 : -.5);
        var l = a * (n - t) + t;
        return l === r ? 1 / 0 : l > r ? s : 0;
    }
    function ri() {
        var t = Gf[0];
        Gf[0] = Gf[1], Gf[1] = t;
    }
    function oi(t, e, n, i, r, o, a, s, l, u) {
        if (u > e && u > i && u > o && u > s || e > u && i > u && o > u && s > u) return 0;
        var h = function(t, e, n, i, r, o) {
            var a = i + 3 * (e - n) - t, s = 3 * (n - 2 * e + t), l = 3 * (e - t), u = t - r, h = s * s - 3 * a * l, c = s * l - 9 * a * u, p = l * l - 3 * s * u, f = 0;
            if (Pn(h) && Pn(c)) {
                if (Pn(s)) o[0] = 0; else (M = -l / s) >= 0 && 1 >= M && (o[f++] = M);
            } else {
                var d = c * c - 4 * h * p;
                if (Pn(d)) {
                    var g = c / h, y = -g / 2;
                    (M = -s / a + g) >= 0 && 1 >= M && (o[f++] = M), y >= 0 && 1 >= y && (o[f++] = y);
                } else if (d > 0) {
                    var v = Qp(d), m = h * s + 1.5 * a * (-c + v), _ = h * s + 1.5 * a * (-c - v);
                    (M = (-s - ((m = 0 > m ? -Jp(-m, rf) : Jp(m, rf)) + (_ = 0 > _ ? -Jp(-_, rf) : Jp(_, rf)))) / (3 * a)) >= 0 && 1 >= M && (o[f++] = M);
                } else {
                    var x = (2 * h * s - 3 * a * c) / (2 * Qp(h * h * h)), w = Math.acos(x) / 3, b = Qp(h), S = Math.cos(w), M = (-s - 2 * b * S) / (3 * a), T = (y = (-s + b * (S + nf * Math.sin(w))) / (3 * a), 
                    (-s + b * (S - nf * Math.sin(w))) / (3 * a));
                    M >= 0 && 1 >= M && (o[f++] = M), y >= 0 && 1 >= y && (o[f++] = y), T >= 0 && 1 >= T && (o[f++] = T);
                }
            }
            return f;
        }(e, i, o, s, u, Hf);
        if (0 === h) return 0;
        for (var c = 0, p = -1, f = void 0, d = void 0, g = 0; h > g; g++) {
            var y = Hf[g], v = 0 === y || 1 === y ? .5 : 1;
            l > On(t, n, r, a, y) || (0 > p && (p = En(e, i, o, s, Gf), Gf[1] < Gf[0] && p > 1 && ri(), 
            f = On(e, i, o, s, Gf[0]), p > 1 && (d = On(e, i, o, s, Gf[1]))), c += 2 === p ? y < Gf[0] ? e > f ? v : -v : y < Gf[1] ? f > d ? v : -v : d > s ? v : -v : y < Gf[0] ? e > f ? v : -v : f > s ? v : -v);
        }
        return c;
    }
    function ai(t, e, n, i, r, o, a, s) {
        if (s > e && s > i && s > o || e > s && i > s && o > s) return 0;
        var l = function(t, e, n, i, r) {
            var o = t - 2 * e + n, a = 2 * (e - t), s = t - i, l = 0;
            if (Pn(o)) {
                if (Ln(a)) (h = -s / a) >= 0 && 1 >= h && (r[l++] = h);
            } else {
                var u = a * a - 4 * o * s;
                if (Pn(u)) (h = -a / (2 * o)) >= 0 && 1 >= h && (r[l++] = h); else if (u > 0) {
                    var h, c = Qp(u), p = (-a - c) / (2 * o);
                    (h = (-a + c) / (2 * o)) >= 0 && 1 >= h && (r[l++] = h), p >= 0 && 1 >= p && (r[l++] = p);
                }
            }
            return l;
        }(e, i, o, s, Hf);
        if (0 === l) return 0;
        var u = Hn(e, i, o);
        if (u >= 0 && 1 >= u) {
            for (var h = 0, c = Fn(e, i, o, u), p = 0; l > p; p++) {
                var f = 0 === Hf[p] || 1 === Hf[p] ? .5 : 1;
                a > Fn(t, n, r, Hf[p]) || (h += Hf[p] < u ? e > c ? f : -f : c > o ? f : -f);
            }
            return h;
        }
        f = 0 === Hf[0] || 1 === Hf[0] ? .5 : 1;
        return a > Fn(t, n, r, Hf[0]) ? 0 : e > o ? f : -f;
    }
    function si(t, e, n, i, r, o, a, s) {
        if ((s -= e) > n || -n > s) return 0;
        var l = Math.sqrt(n * n - s * s);
        Hf[0] = -l, Hf[1] = l;
        var u = Math.abs(i - r);
        if (1e-4 > u) return 0;
        if (u >= Ff - 1e-4) {
            i = 0, r = Ff;
            var h = o ? 1 : -1;
            return a >= Hf[0] + t && a <= Hf[1] + t ? h : 0;
        }
        if (i > r) {
            var c = i;
            i = r, r = c;
        }
        0 > i && (i += Ff, r += Ff);
        for (var p = 0, f = 0; 2 > f; f++) {
            var d = Hf[f];
            if (d + t > a) {
                var g = Math.atan2(s, d);
                h = o ? 1 : -1;
                0 > g && (g = Ff + g), (g >= i && r >= g || g + Ff >= i && r >= g + Ff) && (g > Math.PI / 2 && g < 1.5 * Math.PI && (h = -h), 
                p += h);
            }
        }
        return p;
    }
    function li(t, e, n, i, r) {
        for (var o, a, s = t.data, l = t.len(), u = 0, h = 0, c = 0, p = 0, f = 0, d = 0; l > d; ) {
            var g = s[d++], y = 1 === d;
            switch (g === zf.M && d > 1 && (n || (u += ii(h, c, p, f, i, r))), y && (p = h = s[d], 
            f = c = s[d + 1]), g) {
              case zf.M:
                h = p = s[d++], c = f = s[d++];
                break;

              case zf.L:
                if (n) {
                    if (Jn(h, c, s[d], s[d + 1], e, i, r)) return !0;
                } else u += ii(h, c, s[d], s[d + 1], i, r) || 0;
                h = s[d++], c = s[d++];
                break;

              case zf.C:
                if (n) {
                    if (Qn(h, c, s[d++], s[d++], s[d++], s[d++], s[d], s[d + 1], e, i, r)) return !0;
                } else u += oi(h, c, s[d++], s[d++], s[d++], s[d++], s[d], s[d + 1], i, r) || 0;
                h = s[d++], c = s[d++];
                break;

              case zf.Q:
                if (n) {
                    if (ti(h, c, s[d++], s[d++], s[d], s[d + 1], e, i, r)) return !0;
                } else u += ai(h, c, s[d++], s[d++], s[d], s[d + 1], i, r) || 0;
                h = s[d++], c = s[d++];
                break;

              case zf.A:
                var v = s[d++], m = s[d++], _ = s[d++], x = s[d++], w = s[d++], b = s[d++];
                d += 1;
                var S = !!(1 - s[d++]);
                o = Math.cos(w) * _ + v, a = Math.sin(w) * x + m, y ? (p = o, f = a) : u += ii(h, c, o, a, i, r);
                var M = (i - v) * x / _ + v;
                if (n) {
                    if (ni(v, m, x, w, w + b, S, e, M, r)) return !0;
                } else u += si(v, m, x, w, w + b, S, M, r);
                h = Math.cos(w + b) * _ + v, c = Math.sin(w + b) * x + m;
                break;

              case zf.R:
                if (p = h = s[d++], f = c = s[d++], o = p + s[d++], a = f + s[d++], n) {
                    if (Jn(p, f, o, f, e, i, r) || Jn(o, f, o, a, e, i, r) || Jn(o, a, p, a, e, i, r) || Jn(p, a, p, f, e, i, r)) return !0;
                } else u += ii(o, f, o, a, i, r), u += ii(p, a, p, f, i, r);
                break;

              case zf.Z:
                if (n) {
                    if (Jn(h, c, p, f, e, i, r)) return !0;
                } else u += ii(h, c, p, f, i, r);
                h = p, c = f;
            }
        }
        return n || function(t, e) {
            return Math.abs(t - e) < Vf;
        }(c, f) || (u += ii(h, c, p, f, i, r) || 0), 0 !== u;
    }
    function ui(t, e, n) {
        if (e) {
            var i = e.x1, r = e.x2, o = e.y1, a = e.y2;
            t.x1 = i, t.x2 = r, t.y1 = o, t.y2 = a;
            var s = n && n.lineWidth;
            return s ? (Jf(2 * i) === Jf(2 * r) && (t.x1 = t.x2 = ci(i, s, !0)), Jf(2 * o) === Jf(2 * a) && (t.y1 = t.y2 = ci(o, s, !0)), 
            t) : t;
        }
    }
    function hi(t, e, n) {
        if (e) {
            var i = e.x, r = e.y, o = e.width, a = e.height;
            t.x = i, t.y = r, t.width = o, t.height = a;
            var s = n && n.lineWidth;
            return s ? (t.x = ci(i, s, !0), t.y = ci(r, s, !0), t.width = Math.max(ci(i + o, s, !1) - t.x, 0 === o ? 0 : 1), 
            t.height = Math.max(ci(r + a, s, !1) - t.y, 0 === a ? 0 : 1), t) : t;
        }
    }
    function ci(t, e, n) {
        if (!e) return t;
        var i = Jf(2 * t);
        return (i + Jf(e)) % 2 == 0 ? i / 2 : (i + (n ? 1 : -1)) / 2;
    }
    function pi(t) {
        if (t) {
            t.font = rd.makeFont(t);
            var e = t.align;
            "middle" === e && (e = "center"), t.align = null == e || od[e] ? e : "left";
            var n = t.verticalAlign;
            "center" === n && (n = "middle"), t.verticalAlign = null == n || ad[n] ? n : "top", 
            t.padding && (t.padding = F(t.padding));
        }
    }
    function fi(t, e) {
        return null == t || 0 >= e || "transparent" === t || "none" === t ? null : t.image || t.colorStops ? "#000" : t;
    }
    function di(t, e, n) {
        return "right" === e ? t - n[1] : "center" === e ? t + n[3] / 2 - n[1] / 2 : t + n[3];
    }
    function gi(t) {
        var e = t.text;
        return null != e && (e += ""), e;
    }
    function yi(t) {
        return !!(t.backgroundColor || t.borderWidth && t.borderColor);
    }
    function vi(t) {
        return null != t && "none" !== t;
    }
    function mi(t) {
        if ("string" != typeof t) return t;
        var e = Sd.get(t);
        return e || (e = Ft(t, -.1), Sd.put(t, e)), e;
    }
    function _i(t, e, n) {
        t.onHoverStateChange && (t.hoverState || 0) !== n && t.onHoverStateChange(e), t.hoverState = n;
    }
    function xi(t) {
        _i(t, "emphasis", fd);
    }
    function wi(t) {
        t.hoverState === fd && _i(t, "normal", cd);
    }
    function bi(t) {
        _i(t, "blur", pd);
    }
    function Si(t) {
        t.hoverState === pd && _i(t, "normal", cd);
    }
    function Mi(t) {
        t.selected = !0;
    }
    function Ti(t) {
        t.selected = !1;
    }
    function Ci(t, e, n) {
        e(t, n);
    }
    function Ai(t, e, n) {
        Ci(t, e, n), t.isGroup && t.traverse(function(t) {
            Ci(t, e, n);
        });
    }
    function ki(t, e) {
        var n = this.states[t];
        if (this.style) {
            if ("emphasis" === t) return function(t, e, n, i) {
                var r = n && p(n, "select") >= 0, o = !1;
                if (t instanceof Yf) {
                    var a = hd(t), s = r && a.selectFill || a.normalFill, l = r && a.selectStroke || a.normalStroke;
                    if (vi(s) || vi(l)) {
                        var u = (i = i || {}).style || {};
                        !vi(u.fill) && vi(s) ? (o = !0, i = h({}, i), (u = h({}, u)).fill = mi(s)) : !vi(u.stroke) && vi(l) && (o || (i = h({}, i), 
                        u = h({}, u)), u.stroke = mi(l)), i.style = u;
                    }
                }
                if (i && null == i.z2) {
                    o || (i = h({}, i));
                    var c = t.z2EmphasisLift;
                    i.z2 = t.z2 + (null != c ? c : yd);
                }
                return i;
            }(this, 0, e, n);
            if ("blur" === t) return function(t, e, n) {
                var i = p(t.currentStates, e) >= 0, r = t.style.opacity, o = i ? null : function(t, e, n, i) {
                    for (var r = t.style, o = {}, a = 0; a < e.length; a++) {
                        var s = e[a], l = r[s];
                        o[s] = null == l ? i && i[s] : l;
                    }
                    for (a = 0; a < t.animators.length; a++) {
                        var u = t.animators[a];
                        u.__fromStateTransition && u.__fromStateTransition.indexOf(n) < 0 && "style" === u.targetName && u.saveFinalToTarget(o, e);
                    }
                    return o;
                }(t, [ "opacity" ], e, {
                    opacity: 1
                }), a = (n = n || {}).style || {};
                return null == a.opacity && (n = h({}, n), a = h({
                    opacity: i ? r : .1 * o.opacity
                }, a), n.style = a), n;
            }(this, t, n);
            if ("select" === t) return function(t, e, n) {
                if (n && null == n.z2) {
                    n = h({}, n);
                    var i = t.z2SelectLift;
                    n.z2 = t.z2 + (null != i ? i : vd);
                }
                return n;
            }(this, 0, n);
        }
        return n;
    }
    function Ii(t) {
        t.stateProxy = ki;
        var e = t.getTextContent(), n = t.getTextGuideLine();
        e && (e.stateProxy = ki), n && (n.stateProxy = ki);
    }
    function Di(t, e) {
        !zi(t, e) && !t.__highByOuter && Ai(t, xi);
    }
    function Pi(t, e) {
        !zi(t, e) && !t.__highByOuter && Ai(t, wi);
    }
    function Li(t, e) {
        t.__highByOuter |= 1 << (e || 0), Ai(t, xi);
    }
    function Oi(t, e) {
        !(t.__highByOuter &= ~(1 << (e || 0))) && Ai(t, wi);
    }
    function Ri(t) {
        Ai(t, bi);
    }
    function Ei(t) {
        Ai(t, Si);
    }
    function Ni(t) {
        Ai(t, Mi);
    }
    function Bi(t) {
        Ai(t, Ti);
    }
    function zi(t, e) {
        return t.__highDownSilentOnTouch && e.zrByTouch;
    }
    function Fi(t) {
        t.getModel().eachComponent(function(e, n) {
            ("series" === e ? t.getViewOfSeriesModel(n) : t.getViewOfComponentModel(n)).group.traverse(function(t) {
                Si(t);
            });
        });
    }
    function Vi(t, e, n, i) {
        function r(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = t.getItemGraphicEl(e[n]);
                i && Ei(i);
            }
        }
        var o = i.getModel();
        if (n = n || "coordinateSystem", null != t && e && "none" !== e) {
            var a = o.getSeriesByIndex(t), s = a.coordinateSystem;
            s && s.master && (s = s.master);
            var l = [];
            o.eachSeries(function(t) {
                var o = a === t, u = t.coordinateSystem;
                if (u && u.master && (u = u.master), !("series" === n && !o || "coordinateSystem" === n && !(u && s ? u === s : o) || "series" === e && o)) {
                    if (i.getViewOfSeriesModel(t).group.traverse(function(t) {
                        bi(t);
                    }), g(e)) r(t.getData(), e); else if (k(e)) for (var h = w(e), c = 0; c < h.length; c++) r(t.getData(h[c]), e[h[c]]);
                    l.push(t);
                }
            }), o.eachComponent(function(t, e) {
                if ("series" !== t) {
                    var n = i.getViewOfComponentModel(e);
                    n && n.blurSeries && n.blurSeries(l, o);
                }
            });
        }
    }
    function Hi(t, e, n) {
        if (null != t && null != e) {
            var i = n.getModel().getComponent(t, e);
            if (i) {
                var r = n.getViewOfComponentModel(i);
                r && r.focusBlurEnabled && r.group.traverse(function(t) {
                    bi(t);
                });
            }
        }
    }
    function Gi(t, e, n, i) {
        var r = {
            focusSelf: !1,
            dispatchers: null
        };
        if (null == t || "series" === t || null == e || null == n) return r;
        var o = i.getModel().getComponent(t, e);
        if (!o) return r;
        var a = i.getViewOfComponentModel(o);
        if (!a || !a.findHighDownDispatchers) return r;
        for (var s, l = a.findHighDownDispatchers(n), u = 0; u < l.length; u++) if ("self" === sd(l[u]).focus) {
            s = !0;
            break;
        }
        return {
            focusSelf: s,
            dispatchers: l
        };
    }
    function Wi(t) {
        y(t.getAllData(), function(e) {
            var n = e.data, i = e.type;
            n.eachItemGraphicEl(function(e, n) {
                t.isSelected(n, i) ? Ni(e) : Bi(e);
            });
        });
    }
    function Ui(t) {
        var e = [];
        return t.eachSeries(function(t) {
            y(t.getAllData(), function(n) {
                var i = (n.data, n.type), r = t.getSelectedDataIndices();
                if (r.length > 0) {
                    var o = {
                        dataIndex: r,
                        seriesIndex: t.seriesIndex
                    };
                    null != i && (o.dataType = i), e.push(o);
                }
            });
        }), e;
    }
    function Xi(t, e, n) {
        (function(t, e) {
            var n = !1 === e, i = t;
            t.highDownSilentOnTouch && (i.__highDownSilentOnTouch = t.highDownSilentOnTouch), 
            (!n || i.__highDownDispatcher) && (i.__highByOuter = i.__highByOuter || 0, i.__highDownDispatcher = !n);
        })(t, !0), Ai(t, Ii), function(t, e, n) {
            var i = sd(t);
            null != e ? (i.focus = e, i.blurScope = n) : i.focus && (i.focus = null);
        }(t, e, n);
    }
    function Yi(t, e, n, i) {
        n = n || "itemStyle";
        for (var r = 0; r < Md.length; r++) {
            var o = Md[r], a = e.getModel([ o, n ]);
            t.ensureState(o).style = i ? i(a) : a[Td[n]]();
        }
    }
    function qi(t) {
        return !(!t || !t.__highDownDispatcher);
    }
    function ji(t) {
        var e = t.type;
        return e === xd || e === wd || e === bd;
    }
    function Zi(t) {
        var e = t.type;
        return e === md || e === _d;
    }
    function Ki(t) {
        return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
    }
    function $i(t, e) {
        return (t[0] * e[0] + t[1] * e[1]) / (Ki(t) * Ki(e));
    }
    function Ji(t, e) {
        return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos($i(t, e));
    }
    function Qi(t, e, n, i, r, o, a, s, l, u, h) {
        var c = l * (Od / 180), p = Ld(c) * (t - n) / 2 + Pd(c) * (e - i) / 2, f = -1 * Pd(c) * (t - n) / 2 + Ld(c) * (e - i) / 2, d = p * p / (a * a) + f * f / (s * s);
        d > 1 && (a *= Dd(d), s *= Dd(d));
        var g = (r === o ? -1 : 1) * Dd((a * a * s * s - a * a * f * f - s * s * p * p) / (a * a * f * f + s * s * p * p)) || 0, y = g * a * f / s, v = g * -s * p / a, m = (t + n) / 2 + Ld(c) * y - Pd(c) * v, _ = (e + i) / 2 + Pd(c) * y + Ld(c) * v, x = Ji([ 1, 0 ], [ (p - y) / a, (f - v) / s ]), w = [ (p - y) / a, (f - v) / s ], b = [ (-1 * p - y) / a, (-1 * f - v) / s ], S = Ji(w, b);
        if ($i(w, b) <= -1 && (S = Od), $i(w, b) >= 1 && (S = 0), 0 > S) {
            var M = Math.round(S / Od * 1e6) / 1e6;
            S = 2 * Od + M % 2 * Od;
        }
        h.addData(u, m, _, a, s, x, S, c, o);
    }
    function tr(t) {
        return null != t.setData;
    }
    function er(t, e) {
        var n = function(t) {
            var e = new Ef();
            if (!t) return e;
            var n, i = 0, r = 0, o = i, a = r, s = Ef.CMD, l = t.match(Rd);
            if (!l) return e;
            for (var u = 0; u < l.length; u++) {
                for (var h = l[u], c = h.charAt(0), p = void 0, f = h.match(Ed) || [], d = f.length, g = 0; d > g; g++) f[g] = parseFloat(f[g]);
                for (var y = 0; d > y; ) {
                    var v = void 0, m = void 0, _ = void 0, x = void 0, w = void 0, b = void 0, S = void 0, M = i, T = r, C = void 0, A = void 0;
                    switch (c) {
                      case "l":
                        i += f[y++], r += f[y++], p = s.L, e.addData(p, i, r);
                        break;

                      case "L":
                        i = f[y++], r = f[y++], p = s.L, e.addData(p, i, r);
                        break;

                      case "m":
                        i += f[y++], r += f[y++], p = s.M, e.addData(p, i, r), o = i, a = r, c = "l";
                        break;

                      case "M":
                        i = f[y++], r = f[y++], p = s.M, e.addData(p, i, r), o = i, a = r, c = "L";
                        break;

                      case "h":
                        i += f[y++], p = s.L, e.addData(p, i, r);
                        break;

                      case "H":
                        i = f[y++], p = s.L, e.addData(p, i, r);
                        break;

                      case "v":
                        r += f[y++], p = s.L, e.addData(p, i, r);
                        break;

                      case "V":
                        r = f[y++], p = s.L, e.addData(p, i, r);
                        break;

                      case "C":
                        p = s.C, e.addData(p, f[y++], f[y++], f[y++], f[y++], f[y++], f[y++]), i = f[y - 2], 
                        r = f[y - 1];
                        break;

                      case "c":
                        p = s.C, e.addData(p, f[y++] + i, f[y++] + r, f[y++] + i, f[y++] + r, f[y++] + i, f[y++] + r), 
                        i += f[y - 2], r += f[y - 1];
                        break;

                      case "S":
                        v = i, m = r, C = e.len(), A = e.data, n === s.C && (v += i - A[C - 4], m += r - A[C - 3]), 
                        p = s.C, M = f[y++], T = f[y++], i = f[y++], r = f[y++], e.addData(p, v, m, M, T, i, r);
                        break;

                      case "s":
                        v = i, m = r, C = e.len(), A = e.data, n === s.C && (v += i - A[C - 4], m += r - A[C - 3]), 
                        p = s.C, M = i + f[y++], T = r + f[y++], i += f[y++], r += f[y++], e.addData(p, v, m, M, T, i, r);
                        break;

                      case "Q":
                        M = f[y++], T = f[y++], i = f[y++], r = f[y++], p = s.Q, e.addData(p, M, T, i, r);
                        break;

                      case "q":
                        M = f[y++] + i, T = f[y++] + r, i += f[y++], r += f[y++], p = s.Q, e.addData(p, M, T, i, r);
                        break;

                      case "T":
                        v = i, m = r, C = e.len(), A = e.data, n === s.Q && (v += i - A[C - 4], m += r - A[C - 3]), 
                        i = f[y++], r = f[y++], p = s.Q, e.addData(p, v, m, i, r);
                        break;

                      case "t":
                        v = i, m = r, C = e.len(), A = e.data, n === s.Q && (v += i - A[C - 4], m += r - A[C - 3]), 
                        i += f[y++], r += f[y++], p = s.Q, e.addData(p, v, m, i, r);
                        break;

                      case "A":
                        _ = f[y++], x = f[y++], w = f[y++], b = f[y++], S = f[y++], Qi(M = i, T = r, i = f[y++], r = f[y++], b, S, _, x, w, p = s.A, e);
                        break;

                      case "a":
                        _ = f[y++], x = f[y++], w = f[y++], b = f[y++], S = f[y++], Qi(M = i, T = r, i += f[y++], r += f[y++], b, S, _, x, w, p = s.A, e);
                    }
                }
                ("z" === c || "Z" === c) && (p = s.Z, e.addData(p), i = o, r = a), n = p;
            }
            return e.toStatic(), e;
        }(t), i = h({}, e);
        return i.buildPath = function(t) {
            if (tr(t)) {
                t.setData(n.data), (e = t.getContext()) && t.rebuildPath(e, 1);
            } else {
                var e = t;
                n.rebuildPath(e, 1);
            }
        }, i.applyTransform = function(t) {
            (function(t, e) {
                var n, i, r, o, a, s, l = t.data, u = t.len(), h = Cd.M, c = Cd.C, p = Cd.L, f = Cd.R, d = Cd.A, g = Cd.Q;
                for (r = 0, o = 0; u > r; ) {
                    switch (n = l[r++], o = r, i = 0, n) {
                      case h:
                      case p:
                        i = 1;
                        break;

                      case c:
                        i = 3;
                        break;

                      case g:
                        i = 2;
                        break;

                      case d:
                        var y = e[4], v = e[5], m = kd(e[0] * e[0] + e[1] * e[1]), _ = kd(e[2] * e[2] + e[3] * e[3]), x = Id(-e[1] / _, e[0] / m);
                        l[r] *= m, l[r++] += y, l[r] *= _, l[r++] += v, l[r++] *= m, l[r++] *= _, l[r++] += x, 
                        l[r++] += x, o = r += 2;
                        break;

                      case f:
                        s[0] = l[r++], s[1] = l[r++], ot(s, s, e), l[o++] = s[0], l[o++] = s[1], s[0] += l[r++], 
                        s[1] += l[r++], ot(s, s, e), l[o++] = s[0], l[o++] = s[1];
                    }
                    for (a = 0; i > a; a++) {
                        var w = Ad[a];
                        w[0] = l[r++], w[1] = l[r++], ot(w, w, e), l[o++] = w[0], l[o++] = w[1];
                    }
                }
                t.increaseVersion();
            })(n, t), this.dirtyShape();
        }, i;
    }
    function nr(t, e) {
        return new Nd(er(t, e));
    }
    function ir(t, e, n, i, r, o, a) {
        var s = t - n, l = e - i, u = (a ? o : -o) / jd(s * s + l * l), h = u * l, c = -u * s, p = t + h, f = e + c, d = n + h, g = i + c, y = (p + d) / 2, v = (f + g) / 2, m = d - p, _ = g - f, x = m * m + _ * _, w = r - o, b = p * g - d * f, S = (0 > _ ? -1 : 1) * jd(Zd(0, w * w * x - b * b)), M = (b * _ - m * S) / x, T = (-b * m - _ * S) / x, C = (b * _ + m * S) / x, A = (-b * m + _ * S) / x, k = M - y, I = T - v, D = C - y, P = A - v;
        return k * k + I * I > D * D + P * P && (M = C, T = A), {
            cx: M,
            cy: T,
            x01: -h,
            y01: -c,
            x11: M * (r / w - 1),
            y11: T * (r / w - 1)
        };
    }
    function rr(t, e) {
        var n = Zd(e.r, 0), i = Zd(e.r0 || 0, 0), r = n > 0;
        if (r || i > 0) {
            if (r || (n = i, i = 0), i > n) {
                var o = n;
                n = i, i = o;
            }
            var a, s = !!e.clockwise, l = e.startAngle, u = e.endAngle;
            if (l === u) a = 0; else {
                var h = [ l, u ];
                $n(h, !s), a = qd(h[0] - h[1]);
            }
            var c = e.cx, p = e.cy, f = e.cornerRadius || 0, d = e.innerCornerRadius || 0;
            if (n > $d) if (a > Gd - $d) t.moveTo(c + n * Ud(l), p + n * Wd(l)), t.arc(c, p, n, l, u, !s), 
            i > $d && (t.moveTo(c + i * Ud(u), p + i * Wd(u)), t.arc(c, p, i, u, l, s)); else {
                var g = qd(n - i) / 2, y = Kd(g, f), v = Kd(g, d), m = v, _ = y, x = n * Ud(l), w = n * Wd(l), b = i * Ud(u), S = i * Wd(u), M = void 0, T = void 0, C = void 0, A = void 0;
                if ((y > $d || v > $d) && (M = n * Ud(u), T = n * Wd(u), C = i * Ud(l), A = i * Wd(l), 
                Hd > a)) {
                    var k = function(t, e, n, i, r, o, a, s) {
                        var l = n - t, u = i - e, h = a - r, c = s - o, p = c * l - h * u;
                        return $d > p * p ? void 0 : [ t + (p = (h * (e - o) - c * (t - r)) / p) * l, e + p * u ];
                    }(x, w, C, A, M, T, b, S);
                    if (k) {
                        var I = x - k[0], D = w - k[1], P = M - k[0], L = T - k[1], O = 1 / Wd(Xd((I * P + D * L) / (jd(I * I + D * D) * jd(P * P + L * L))) / 2), R = jd(k[0] * k[0] + k[1] * k[1]);
                        m = Kd(v, (i - R) / (O - 1)), _ = Kd(y, (n - R) / (O + 1));
                    }
                }
                if (a > $d) if (_ > $d) {
                    var E = ir(C, A, x, w, n, _, s), N = ir(M, T, b, S, n, _, s);
                    t.moveTo(c + E.cx + E.x01, p + E.cy + E.y01), y > _ ? t.arc(c + E.cx, p + E.cy, _, Yd(E.y01, E.x01), Yd(N.y01, N.x01), !s) : (t.arc(c + E.cx, p + E.cy, _, Yd(E.y01, E.x01), Yd(E.y11, E.x11), !s), 
                    t.arc(c, p, n, Yd(E.cy + E.y11, E.cx + E.x11), Yd(N.cy + N.y11, N.cx + N.x11), !s), 
                    t.arc(c + N.cx, p + N.cy, _, Yd(N.y11, N.x11), Yd(N.y01, N.x01), !s));
                } else t.moveTo(c + x, p + w), t.arc(c, p, n, l, u, !s); else t.moveTo(c + x, p + w);
                if (i > $d && a > $d) if (m > $d) {
                    E = ir(b, S, M, T, i, -m, s), N = ir(x, w, C, A, i, -m, s);
                    t.lineTo(c + E.cx + E.x01, p + E.cy + E.y01), v > m ? t.arc(c + E.cx, p + E.cy, m, Yd(E.y01, E.x01), Yd(N.y01, N.x01), !s) : (t.arc(c + E.cx, p + E.cy, m, Yd(E.y01, E.x01), Yd(E.y11, E.x11), !s), 
                    t.arc(c, p, i, Yd(E.cy + E.y11, E.cx + E.x11), Yd(N.cy + N.y11, N.cx + N.x11), s), 
                    t.arc(c + N.cx, p + N.cy, m, Yd(N.y11, N.x11), Yd(N.y01, N.x01), !s));
                } else t.lineTo(c + b, p + S), t.arc(c, p, i, u, l, s); else t.lineTo(c + b, p + S);
            } else t.moveTo(c, p);
            t.closePath();
        }
    }
    function or(t, e, n, i, r, o, a) {
        var s = .5 * (n - t), l = .5 * (i - e);
        return (2 * (e - n) + s + l) * a + (-3 * (e - n) - 2 * s - l) * o + s * r + e;
    }
    function ar(t, e, n) {
        var i = e.smooth, r = e.points;
        if (r && r.length >= 2) {
            if (i && "spline" !== i) {
                var o = function(t, e, n, i) {
                    var r, o, a, s, l = [], u = [], h = [], c = [];
                    if (i) {
                        a = [ 1 / 0, 1 / 0 ], s = [ -1 / 0, -1 / 0 ];
                        for (var p = 0, f = t.length; f > p; p++) at(a, a, t[p]), st(s, s, t[p]);
                        at(a, a, i[0]), st(s, s, i[1]);
                    }
                    for (p = 0, f = t.length; f > p; p++) {
                        var d = t[p];
                        if (n) r = t[p ? p - 1 : f - 1], o = t[(p + 1) % f]; else {
                            if (0 === p || p === f - 1) {
                                l.push(Z(t[p]));
                                continue;
                            }
                            r = t[p - 1], o = t[p + 1];
                        }
                        $(u, o, r), tt(u, u, e);
                        var g = nt(d, r), y = nt(d, o), v = g + y;
                        0 !== v && (g /= v, y /= v), tt(h, u, -g), tt(c, u, y);
                        var m = K([], d, h), _ = K([], d, c);
                        i && (st(m, m, a), at(m, m, s), st(_, _, a), at(_, _, s)), l.push(m), l.push(_);
                    }
                    return n && l.push(l.shift()), l;
                }(r, i, n, e.smoothConstraint);
                t.moveTo(r[0][0], r[0][1]);
                for (var a = r.length, s = 0; (n ? a : a - 1) > s; s++) {
                    var l = o[2 * s], u = o[2 * s + 1], h = r[(s + 1) % a];
                    t.bezierCurveTo(l[0], l[1], u[0], u[1], h[0], h[1]);
                }
            } else {
                "spline" === i && (r = function(t, e) {
                    for (var n = t.length, i = [], r = 0, o = 1; n > o; o++) r += nt(t[o - 1], t[o]);
                    var a = r / 2;
                    for (a = n > a ? n : a, o = 0; a > o; o++) {
                        var s = o / (a - 1) * (e ? n : n - 1), l = Math.floor(s), u = s - l, h = void 0, c = t[l % n], p = void 0, f = void 0;
                        e ? (h = t[(l - 1 + n) % n], p = t[(l + 1) % n], f = t[(l + 2) % n]) : (h = t[0 === l ? l : l - 1], 
                        p = t[l > n - 2 ? n - 1 : l + 1], f = t[l > n - 3 ? n - 1 : l + 2]);
                        var d = u * u, g = u * d;
                        i.push([ or(h[0], c[0], p[0], f[0], u, d, g), or(h[1], c[1], p[1], f[1], u, d, g) ]);
                    }
                    return i;
                }(r, n)), t.moveTo(r[0][0], r[0][1]);
                s = 1;
                for (var c = r.length; c > s; s++) t.lineTo(r[s][0], r[s][1]);
            }
            n && t.closePath();
        }
    }
    function sr(t, e, n) {
        var i = t.cpx2, r = t.cpy2;
        return null === i || null === r ? [ (n ? Rn : On)(t.x1, t.cpx1, t.cpx2, t.x2, e), (n ? Rn : On)(t.y1, t.cpy1, t.cpy2, t.y2, e) ] : [ (n ? Vn : Fn)(t.x1, t.cpx1, t.x2, e), (n ? Vn : Fn)(t.y1, t.cpy1, t.y2, e) ];
    }
    function lr(t) {
        return Yf.extend(t);
    }
    function ur(t, e) {
        return kg(t, e);
    }
    function hr(t, e) {
        Ag[t] = e;
    }
    function cr(t) {
        return Ag.hasOwnProperty(t) ? Ag[t] : void 0;
    }
    function pr(t, e, n, i) {
        var r = nr(t, e);
        return n && ("center" === i && (n = dr(n, r.getBoundingRect())), gr(r, n)), r;
    }
    function fr(t, e, n) {
        var i = new $f({
            style: {
                image: t,
                x: e.x,
                y: e.y,
                width: e.width,
                height: e.height
            },
            onload: function(t) {
                if ("center" === n) {
                    var r = {
                        width: t.width,
                        height: t.height
                    };
                    i.setStyle(dr(e, r));
                }
            }
        });
        return i;
    }
    function dr(t, e) {
        var n, i = e.width / e.height, r = t.height * i;
        return r <= t.width ? n = t.height : n = (r = t.width) / i, {
            x: t.x + t.width / 2 - r / 2,
            y: t.y + t.height / 2 - n / 2,
            width: r,
            height: n
        };
    }
    function gr(t, e) {
        if (t.applyTransform) {
            var n = t.getBoundingRect().calculateTransform(e);
            t.applyTransform(n);
        }
    }
    function yr(t, e, n, i, r, o, a) {
        var s, l = !1;
        "function" == typeof r ? (a = o, o = r, r = null) : k(r) && (o = r.cb, a = r.during, 
        l = r.isFrom, s = r.removeOpt, r = r.dataIndex);
        var u, h = "update" === t, c = "remove" === t;
        if (i && i.ecModel) {
            var p = i.ecModel.getUpdatePayload();
            u = p && p.animation;
        }
        var f = i && i.isAnimationEnabled();
        if (c || e.stopAnimation("remove"), f) {
            var d = void 0, g = void 0, y = void 0;
            u ? (d = u.duration || 0, g = u.easing || "cubicOut", y = u.delay || 0) : c ? (d = N((s = s || {}).duration, 200), 
            g = N(s.easing, "cubicOut"), y = 0) : (d = i.getShallow(h ? "animationDurationUpdate" : "animationDuration"), 
            g = i.getShallow(h ? "animationEasingUpdate" : "animationEasing"), y = i.getShallow(h ? "animationDelayUpdate" : "animationDelay")), 
            "function" == typeof y && (y = y(r, i.getAnimationDelayParams ? i.getAnimationDelayParams(e, r) : null)), 
            "function" == typeof d && (d = d(r)), d > 0 ? l ? e.animateFrom(n, {
                duration: d,
                delay: y || 0,
                easing: g,
                done: o,
                force: !!o || !!a,
                scope: t,
                during: a
            }) : e.animateTo(n, {
                duration: d,
                delay: y || 0,
                easing: g,
                done: o,
                force: !!o || !!a,
                setToFinal: !0,
                scope: t,
                during: a
            }) : (e.stopAnimation(), !l && e.attr(n), o && o());
        } else e.stopAnimation(), !l && e.attr(n), a && a(1), o && o();
    }
    function vr(t, e, n, i, r, o) {
        yr("update", t, e, n, i, r, o);
    }
    function mr(t, e, n, i, r, o) {
        yr("init", t, e, n, i, r, o);
    }
    function _r(t, e, n, i, r, o) {
        wr(t) || yr("remove", t, e, n, i, r, o);
    }
    function xr(t, e, n, i) {
        t.removeTextContent(), t.removeTextGuideLine(), _r(t, {
            style: {
                opacity: 0
            }
        }, e, n, i);
    }
    function wr(t) {
        if (!t.__zr) return !0;
        for (var e = 0; e < t.animators.length; e++) {
            if ("remove" === t.animators[e].scope) return !0;
        }
        return !1;
    }
    function br(t, e) {
        for (var n = ue([]); t && t !== e; ) ce(n, t.getLocalTransform(), n), t = t.parent;
        return n;
    }
    function Sr(t, e, n) {
        return e && !g(e) && (e = Jc.getLocalTransform(e)), n && (e = ge([], e)), ot([], t, e);
    }
    function Mr(t) {
        return !t.isGroup;
    }
    function Tr(t, e, n) {
        function i(t) {
            var e = {
                x: t.x,
                y: t.y,
                rotation: t.rotation
            };
            return function(t) {
                return null != t.shape;
            }(t) && (e.shape = h({}, t.shape)), e;
        }
        if (t && e) {
            var r = function(t) {
                var e = {};
                return t.traverse(function(t) {
                    Mr(t) && t.anid && (e[t.anid] = t);
                }), e;
            }(t);
            e.traverse(function(t) {
                if (Mr(t) && t.anid) {
                    var e = r[t.anid];
                    if (e) {
                        var o = i(t);
                        t.attr(i(e)), vr(t, o, n, sd(t).dataIndex);
                    }
                }
            });
        }
    }
    function Cr(t, e) {
        return v(t, function(t) {
            var n = t[0];
            n = Tg(n, e.x), n = Cg(n, e.x + e.width);
            var i = t[1];
            return i = Tg(i, e.y), [ n, i = Cg(i, e.y + e.height) ];
        });
    }
    function Ar(t, e) {
        var n = Tg(t.x, e.x), i = Cg(t.x + t.width, e.x + e.width), r = Tg(t.y, e.y), o = Cg(t.y + t.height, e.y + e.height);
        return i >= n && o >= r ? {
            x: n,
            y: r,
            width: i - n,
            height: o - r
        } : void 0;
    }
    function kr(t, e, n) {
        var i = h({
            rectHover: !0
        }, e), r = i.style = {
            strokeNoScale: !0
        };
        return n = n || {
            x: -1,
            y: -1,
            width: 2,
            height: 2
        }, t ? 0 === t.indexOf("image://") ? (r.image = t.slice(8), c(r, n), new $f(i)) : pr(t.replace("path://", ""), i, n, "center") : void 0;
    }
    function Ir(t, e, n, i, r, o, a, s) {
        var l = n - t, u = i - e, h = a - r, c = s - o, p = Dr(h, c, l, u);
        if (function(t) {
            return 1e-6 >= t && t >= -1e-6;
        }(p)) return !1;
        var f = t - r, d = e - o, g = Dr(f, d, l, u) / p;
        if (0 > g || g > 1) return !1;
        var y = Dr(f, d, h, c) / p;
        return !(0 > y || y > 1);
    }
    function Dr(t, e, n, i) {
        return t * i - n * e;
    }
    function Pr(t) {
        var e = t.itemTooltipOption, n = t.componentModel, i = t.itemName, r = T(e) ? {
            formatter: e
        } : e, o = n.mainType, a = n.componentIndex, s = {
            componentType: o,
            name: i,
            $vars: [ "name" ]
        };
        s[o + "Index"] = a;
        var l = t.formatterParamsExtra;
        l && y(w(l), function(t) {
            Y(s, t) || (s[t] = l[t], s.$vars.push(t));
        });
        var u = sd(t.el);
        u.componentMainType = o, u.componentIndex = a, u.tooltipConfig = {
            name: i,
            option: c({
                content: i,
                formatterParams: s
            }, r)
        };
    }
    function Lr(t, e) {
        for (var n = 0; n < dd.length; n++) {
            var i = dd[n], r = e[i], o = t.ensureState(i);
            o.style = o.style || {}, o.style.text = r;
        }
        var a = t.currentStates.slice();
        t.clearStates(!0), t.setStyle({
            text: e.normal
        }), t.useStates(a, !0);
    }
    function Or(t, e, n) {
        var i, r = t.labelFetcher, o = t.labelDataIndex, a = t.labelDimIndex, s = e.normal;
        r && (i = r.getFormattedLabel(o, "normal", null, a, s && s.get("formatter"), null != n ? {
            interpolatedValue: n
        } : null)), null == i && (i = M(t.defaultText) ? t.defaultText(o, t, n) : t.defaultText);
        for (var l = {
            normal: i
        }, u = 0; u < dd.length; u++) {
            var h = dd[u], c = e[h];
            l[h] = N(r ? r.getFormattedLabel(o, h, null, a, c && c.get("formatter")) : null, i);
        }
        return l;
    }
    function Rr(t, e, n, i) {
        n = n || Lg;
        for (var r = t instanceof rd, o = !1, a = 0; a < gd.length; a++) {
            if ((p = e[gd[a]]) && p.getShallow("show")) {
                o = !0;
                break;
            }
        }
        var s = r ? t : t.getTextContent();
        if (o) {
            r || (s || (s = new rd(), t.setTextContent(s)), t.stateProxy && (s.stateProxy = t.stateProxy));
            var l = Or(n, e), u = e.normal, h = !!u.getShallow("show"), c = Nr(u, i && i.normal, n, !1, !r);
            c.text = l.normal, r || t.setTextConfig(Br(u, n, !1));
            for (a = 0; a < dd.length; a++) {
                var p, f = dd[a];
                if (p = e[f]) {
                    var d = s.ensureState(f), g = !!N(p.getShallow("show"), h);
                    if (g !== h && (d.ignore = !g), d.style = Nr(p, i && i[f], n, !0, !r), d.style.text = l[f], 
                    !r) t.ensureState(f).textConfig = Br(p, n, !0);
                }
            }
            s.silent = !!u.getShallow("silent"), null != s.style.x && (c.x = s.style.x), null != s.style.y && (c.y = s.style.y), 
            s.ignore = !h, s.useStyle(c), s.dirty(), n.enableTextSetter && (Ng(s).setLabelText = function(t) {
                var i = Or(n, e, t);
                Lr(s, i);
            });
        } else s && (s.ignore = !0);
        t.dirty();
    }
    function Er(t, e) {
        e = e || "label";
        for (var n = {
            normal: t.getModel(e)
        }, i = 0; i < dd.length; i++) {
            var r = dd[i];
            n[r] = t.getModel([ r, e ]);
        }
        return n;
    }
    function Nr(t, e, n, i, r) {
        var o = {};
        return function(t, e, n, i, r) {
            n = n || Lg;
            var o, a = e.ecModel, s = a && a.option.textStyle, l = function(t) {
                for (var e; t && t !== t.ecModel; ) {
                    var n = (t.option || Lg).rich;
                    if (n) {
                        e = e || {};
                        for (var i = w(n), r = 0; r < i.length; r++) {
                            var o = i[r];
                            e[o] = 1;
                        }
                    }
                    t = t.parentModel;
                }
                return e;
            }(e);
            if (l) for (var u in o = {}, l) if (l.hasOwnProperty(u)) {
                var h = e.getModel([ "rich", u ]);
                zr(o[u] = {}, h, s, n, i, r, !1, !0);
            }
            o && (t.rich = o);
            var c = e.get("overflow");
            c && (t.overflow = c);
            var p = e.get("minMargin");
            null != p && (t.margin = p), zr(t, e, s, n, i, r, !0, !1);
        }(o, t, n, i, r), e && h(o, e), o;
    }
    function Br(t, e, n) {
        e = e || {};
        var i, r = {}, o = t.getShallow("rotate"), a = N(t.getShallow("distance"), n ? null : 5), s = t.getShallow("offset");
        return "outside" === (i = t.getShallow("position") || (n ? null : "inside")) && (i = e.defaultOutsidePosition || "top"), 
        null != i && (r.position = i), null != s && (r.offset = s), null != o && (o *= Math.PI / 180, 
        r.rotation = o), null != a && (r.distance = a), r.outsideFill = "inherit" === t.get("color") ? e.inheritColor || null : "auto", 
        r;
    }
    function zr(t, e, n, i, r, o, a, s) {
        n = !r && n || Lg;
        var l = i && i.inheritColor, u = e.getShallow("color"), h = e.getShallow("textBorderColor"), c = N(e.getShallow("opacity"), n.opacity);
        ("inherit" === u || "auto" === u) && (u = l || null), ("inherit" === h || "auto" === h) && (h = l || null), 
        o || (u = u || n.color, h = h || n.textBorderColor), null != u && (t.fill = u), 
        null != h && (t.stroke = h);
        var p = N(e.getShallow("textBorderWidth"), n.textBorderWidth);
        null != p && (t.lineWidth = p);
        var f = N(e.getShallow("textBorderType"), n.textBorderType);
        null != f && (t.lineDash = f);
        var d = N(e.getShallow("textBorderDashOffset"), n.textBorderDashOffset);
        null != d && (t.lineDashOffset = d), r || null != c || s || (c = i && i.defaultOpacity), 
        null != c && (t.opacity = c), r || o || null == t.fill && i.inheritColor && (t.fill = i.inheritColor);
        for (var g = 0; g < Og.length; g++) {
            var y = Og[g];
            null != (m = N(e.getShallow(y), n[y])) && (t[y] = m);
        }
        for (g = 0; g < Rg.length; g++) {
            y = Rg[g];
            null != (m = e.getShallow(y)) && (t[y] = m);
        }
        if (null == t.verticalAlign) {
            var v = e.getShallow("baseline");
            null != v && (t.verticalAlign = v);
        }
        if (!a || !i.disableBox) {
            for (g = 0; g < Eg.length; g++) {
                var m;
                y = Eg[g];
                null != (m = e.getShallow(y)) && (t[y] = m);
            }
            var _ = e.getShallow("borderType");
            null != _ && (t.borderDash = _), "auto" !== t.backgroundColor && "inherit" !== t.backgroundColor || !l || (t.backgroundColor = l), 
            "auto" !== t.borderColor && "inherit" !== t.borderColor || !l || (t.borderColor = l);
        }
    }
    function Fr(t, e, n, i, r) {
        var o = Ng(t);
        if (o.valueAnimation) {
            var a = o.defaultInterpolatedText, s = N(o.interpolatedValue, o.prevValue), l = o.value;
            (null == s ? mr : vr)(t, {}, i, e, null, function(i) {
                var u = function(t, e, n, i, r) {
                    var o = null == e || "auto" === e;
                    if (null == i) return i;
                    if ("number" == typeof i) return Oe(f = Xt(n || 0, i, r), o ? Math.max(Ee(n || 0), Ee(i)) : e);
                    if ("string" == typeof i) return 1 > r ? n : i;
                    for (var a = [], s = n, l = i, u = Math.max(s ? s.length : 0, l.length), h = 0; u > h; ++h) {
                        if ("ordinal" === t.getDimensionInfo(h).type) a[h] = (1 > r && s ? s : l)[h]; else {
                            var c = s && s[h] ? s[h] : 0, p = l[h], f = Xt(c, p, r);
                            a[h] = Oe(f, o ? Math.max(Ee(c), Ee(p)) : e);
                        }
                    }
                    return a;
                }(n, o.precision, s, l, i);
                o.interpolatedValue = 1 === i ? null : u;
                var h = Or({
                    labelDataIndex: e,
                    labelFetcher: r,
                    defaultText: a ? a(u) : u + ""
                }, o.statesModels, u);
                Lr(t, h);
            });
        }
    }
    function Vr(t) {
        return [ t || "", qg++ ].join("_");
    }
    function Hr(t, e) {
        t = t.toUpperCase(), Jg[t] = new Yg(e), $g[t] = e;
    }
    function Gr(t) {
        if (T(t)) {
            var e = $g[t.toUpperCase()] || {};
            return t === jg || t === Zg ? s(e) : l(s(e), s($g[Kg]), !1);
        }
        return l(s(t), s($g[Kg]), !1);
    }
    function Wr(t, e) {
        return "0000".substr(0, e - (t += "").length) + t;
    }
    function Ur(t) {
        switch (t) {
          case "half-year":
          case "quarter":
            return "month";

          case "week":
          case "half-week":
            return "day";

          case "half-day":
          case "quarter-day":
            return "hour";

          default:
            return t;
        }
    }
    function Xr(t) {
        return t === Ur(t);
    }
    function Yr(t, e, n, i) {
        var r = He(t), o = r[Zr(n)](), a = r[Kr(n)]() + 1, s = Math.floor((a - 1) / 4) + 1, l = r[$r(n)](), u = r["get" + (n ? "UTC" : "") + "Day"](), h = r[Jr(n)](), c = (h - 1) % 12 + 1, p = r[Qr(n)](), f = r[to(n)](), d = r[eo(n)](), g = (i instanceof Yg ? i : function(t) {
            return Jg[t];
        }(i || Qg) || Jg[Kg]).getModel("time"), y = g.get("month"), v = g.get("monthAbbr"), m = g.get("dayOfWeek"), _ = g.get("dayOfWeekAbbr");
        return (e || "").replace(/{yyyy}/g, o + "").replace(/{yy}/g, o % 100 + "").replace(/{Q}/g, s + "").replace(/{MMMM}/g, y[a - 1]).replace(/{MMM}/g, v[a - 1]).replace(/{MM}/g, Wr(a, 2)).replace(/{M}/g, a + "").replace(/{dd}/g, Wr(l, 2)).replace(/{d}/g, l + "").replace(/{eeee}/g, m[u]).replace(/{ee}/g, _[u]).replace(/{e}/g, u + "").replace(/{HH}/g, Wr(h, 2)).replace(/{H}/g, h + "").replace(/{hh}/g, Wr(c + "", 2)).replace(/{h}/g, c + "").replace(/{mm}/g, Wr(p, 2)).replace(/{m}/g, p + "").replace(/{ss}/g, Wr(f, 2)).replace(/{s}/g, f + "").replace(/{SSS}/g, Wr(d, 3)).replace(/{S}/g, d + "");
    }
    function qr(t, e) {
        var n = He(t), i = n[Kr(e)]() + 1, r = n[$r(e)](), o = n[Jr(e)](), a = n[Qr(e)](), s = n[to(e)](), l = 0 === n[eo(e)](), u = l && 0 === s, h = u && 0 === a, c = h && 0 === o, p = c && 1 === r;
        return p && 1 === i ? "year" : p ? "month" : c ? "day" : h ? "hour" : u ? "minute" : l ? "second" : "millisecond";
    }
    function jr(t, e, n) {
        var i = "number" == typeof t ? He(t) : t;
        switch (e = e || qr(t, n)) {
          case "year":
            return i[Zr(n)]();

          case "half-year":
            return i[Kr(n)]() >= 6 ? 1 : 0;

          case "quarter":
            return Math.floor((i[Kr(n)]() + 1) / 4);

          case "month":
            return i[Kr(n)]();

          case "day":
            return i[$r(n)]();

          case "half-day":
            return i[Jr(n)]() / 24;

          case "hour":
            return i[Jr(n)]();

          case "minute":
            return i[Qr(n)]();

          case "second":
            return i[to(n)]();

          case "millisecond":
            return i[eo(n)]();
        }
    }
    function Zr(t) {
        return t ? "getUTCFullYear" : "getFullYear";
    }
    function Kr(t) {
        return t ? "getUTCMonth" : "getMonth";
    }
    function $r(t) {
        return t ? "getUTCDate" : "getDate";
    }
    function Jr(t) {
        return t ? "getUTCHours" : "getHours";
    }
    function Qr(t) {
        return t ? "getUTCMinutes" : "getMinutes";
    }
    function to(t) {
        return t ? "getUTCSeconds" : "getSeconds";
    }
    function eo(t) {
        return t ? "getUTCSeconds" : "getSeconds";
    }
    function no(t) {
        return t ? "setUTCFullYear" : "setFullYear";
    }
    function io(t) {
        return t ? "setUTCMonth" : "setMonth";
    }
    function ro(t) {
        return t ? "setUTCDate" : "setDate";
    }
    function oo(t) {
        return t ? "setUTCHours" : "setHours";
    }
    function ao(t) {
        return t ? "setUTCMinutes" : "setMinutes";
    }
    function so(t) {
        return t ? "setUTCSeconds" : "setSeconds";
    }
    function lo(t) {
        return t ? "setUTCSeconds" : "setSeconds";
    }
    function uo(t) {
        if (!Ye(t)) return T(t) ? t : "-";
        var e = (t + "").split(".");
        return e[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (e.length > 1 ? "." + e[1] : "");
    }
    function ho(t) {
        return null == t ? "" : (t + "").replace(cy, function(t, e) {
            return py[e];
        });
    }
    function co(t, e, n) {
        S(e) || (e = [ e ]);
        var i = e.length;
        if (!i) return "";
        for (var r = e[0].$vars || [], o = 0; o < r.length; o++) {
            var a = fy[o];
            t = t.replace(dy(a), dy(a, 0));
        }
        for (var s = 0; i > s; s++) for (var l = 0; l < r.length; l++) {
            var u = e[s][r[l]];
            t = t.replace(dy(fy[l], s), n ? ho(u) : u);
        }
        return t;
    }
    function po(t, e) {
        var n = T(t) ? {
            color: t,
            extraCssText: e
        } : t || {}, i = n.color, r = n.type;
        e = n.extraCssText;
        var o = n.renderMode || "html";
        return i ? "html" === o ? "subItem" === r ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + ho(i) + ";" + (e || "") + '"></span>' : '<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:' + ho(i) + ";" + (e || "") + '"></span>' : {
            renderMode: o,
            content: "{" + (n.markerId || "markerX") + "|}  ",
            style: "subItem" === r ? {
                width: 4,
                height: 4,
                borderRadius: 2,
                backgroundColor: i
            } : {
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: i
            }
        } : "";
    }
    function fo(t, e, n, i, r) {
        var o = 0, a = 0;
        null == i && (i = 1 / 0), null == r && (r = 1 / 0);
        var s = 0;
        e.eachChild(function(l, u) {
            var h, c, p = l.getBoundingRect(), f = e.childAt(u + 1), d = f && f.getBoundingRect();
            if ("horizontal" === t) {
                var g = p.width + (d ? -d.x + p.x : 0);
                (h = o + g) > i || l.newline ? (o = 0, h = g, a += s + n, s = p.height) : s = Math.max(s, p.height);
            } else {
                var y = p.height + (d ? -d.y + p.y : 0);
                (c = a + y) > r || l.newline ? (o += s + n, a = 0, c = y, s = p.width) : s = Math.max(s, p.width);
            }
            l.newline || (l.x = o, l.y = a, l.markRedraw(), "horizontal" === t ? o = h + n : a = c + n);
        });
    }
    function go(t, e, n) {
        n = hy(n || 0);
        var i = e.width, r = e.height, o = Le(t.left, i), a = Le(t.top, r), s = Le(t.right, i), l = Le(t.bottom, r), u = Le(t.width, i), h = Le(t.height, r), c = n[2] + n[0], p = n[1] + n[3], f = t.aspect;
        switch (isNaN(u) && (u = i - s - p - o), isNaN(h) && (h = r - l - c - a), null != f && (isNaN(u) && isNaN(h) && (f > i / r ? u = .8 * i : h = .8 * r), 
        isNaN(u) && (u = f * h), isNaN(h) && (h = u / f)), isNaN(o) && (o = i - s - u - p), 
        isNaN(a) && (a = r - l - h - c), t.left || t.right) {
          case "center":
            o = i / 2 - u / 2 - n[3];
            break;

          case "right":
            o = i - u - p;
        }
        switch (t.top || t.bottom) {
          case "middle":
          case "center":
            a = r / 2 - h / 2 - n[0];
            break;

          case "bottom":
            a = r - h - c;
        }
        o = o || 0, a = a || 0, isNaN(u) && (u = i - p - o - (s || 0)), isNaN(h) && (h = r - c - a - (l || 0));
        var d = new lp(o + n[3], a + n[0], u, h);
        return d.margin = n, d;
    }
    function yo(t) {
        var e = t.layoutMode || t.constructor.layoutMode;
        return k(e) ? e : e ? {
            type: e
        } : null;
    }
    function vo(t, e, n) {
        function i(n, i) {
            var a = {}, l = 0, u = {}, h = 0;
            if (gy(n, function(e) {
                u[e] = t[e];
            }), gy(n, function(t) {
                r(e, t) && (a[t] = u[t] = e[t]), o(a, t) && l++, o(u, t) && h++;
            }), s[i]) return o(e, n[1]) ? u[n[2]] = null : o(e, n[2]) && (u[n[1]] = null), u;
            if (2 !== h && l) {
                if (l >= 2) return a;
                for (var c = 0; c < n.length; c++) {
                    var p = n[c];
                    if (!r(a, p) && r(t, p)) {
                        a[p] = t[p];
                        break;
                    }
                }
                return a;
            }
            return u;
        }
        function r(t, e) {
            return t.hasOwnProperty(e);
        }
        function o(t, e) {
            return null != t[e] && "auto" !== t[e];
        }
        function a(t, e, n) {
            gy(t, function(t) {
                e[t] = n[t];
            });
        }
        var s = n && n.ignoreSize;
        !S(s) && (s = [ s, s ]);
        var l = i(vy[0], 0), u = i(vy[1], 1);
        a(vy[0], t, l), a(vy[1], t, u);
    }
    function mo(t) {
        return function(t, e) {
            return e && t && gy(yy, function(n) {
                e.hasOwnProperty(n) && (t[n] = e[n]);
            }), t;
        }({}, t);
    }
    function _o(t, e, n) {
        function i(t, e, n) {
            for (var i = 0; n > i; i++) t.push(e + i);
        }
        function r(t) {
            var e = t.dimsDef;
            return e ? e.length : 1;
        }
        var o = {}, a = xo(e);
        if (!a || !t) return o;
        var s, l, u = [], h = [], c = e.ecModel, p = Ey(c).datasetMap, f = a.uid + "_" + n.seriesLayoutBy;
        y(t = t.slice(), function(e, n) {
            var i = k(e) ? e : t[n] = {
                name: e
            };
            "ordinal" === i.type && null == s && (s = n, l = r(i)), o[i.name] = [];
        });
        var d = p.get(f) || p.set(f, {
            categoryWayDim: l,
            valueWayDim: 0
        });
        return y(t, function(t, e) {
            var n = t.name, a = r(t);
            if (null == s) {
                var l = d.valueWayDim;
                i(o[n], l, a), i(h, l, a), d.valueWayDim += a;
            } else if (s === e) i(o[n], 0, a), i(u, 0, a); else {
                l = d.categoryWayDim;
                i(o[n], l, a), i(h, l, a), d.categoryWayDim += a;
            }
        }), u.length && (o.itemName = u), h.length && (o.seriesName = h), o;
    }
    function xo(t) {
        return t.get("data", !0) ? void 0 : hn(t.ecModel, "dataset", {
            index: t.get("datasetIndex", !0),
            id: t.get("datasetId", !0)
        }, Pp).models[0];
    }
    function wo(t, e) {
        return function(t, e, n, i, r, o) {
            function a(t) {
                var e = T(t);
                return null != t && isFinite(t) && "" !== t ? e ? Ry.Might : Ry.Not : e && "-" !== t ? Ry.Must : void 0;
            }
            var s, l, u;
            if (D(t)) return Ry.Not;
            if (i) {
                var h = i[o];
                k(h) ? (l = h.name, u = h.type) : T(h) && (l = h);
            }
            if (null != u) return "ordinal" === u ? Ry.Must : Ry.Not;
            if (e === Ay) {
                var c = t;
                if (n === Oy) {
                    for (var p = c[o], f = 0; f < (p || []).length && 5 > f; f++) if (null != (s = a(p[r + f]))) return s;
                } else for (f = 0; f < c.length && 5 > f; f++) {
                    var d = c[r + f];
                    if (d && null != (s = a(d[o]))) return s;
                }
            } else if (e === ky) {
                var g = t;
                if (!l) return Ry.Not;
                for (f = 0; f < g.length && 5 > f; f++) {
                    if ((m = g[f]) && null != (s = a(m[l]))) return s;
                }
            } else if (e === Iy) {
                var y = t;
                if (!l) return Ry.Not;
                if (!(p = y[l]) || D(p)) return Ry.Not;
                for (f = 0; f < p.length && 5 > f; f++) if (null != (s = a(p[f]))) return s;
            } else if (e === Cy) {
                var v = t;
                for (f = 0; f < v.length && 5 > f; f++) {
                    var m, _ = Je(m = v[f]);
                    if (!S(_)) return Ry.Not;
                    if (null != (s = a(_[o]))) return s;
                }
            }
            return Ry.Not;
        }(t.data, t.sourceFormat, t.seriesLayoutBy, t.dimensionsDefine, t.startIndex, e);
    }
    function bo(t, e, n) {
        if (S(e)) {
            var i = U();
            return y(e, function(t) {
                null != t && (null != nn(t, null) && i.set(t, !0));
            }), _(n, function(e) {
                return e && i.get(e[t]);
            });
        }
        var r = nn(e, null);
        return _(n, function(e) {
            return e && null != r && e[t] === r;
        });
    }
    function So(t, e) {
        return e.hasOwnProperty("subType") ? _(t, function(t) {
            return t && t.subType === e.subType;
        }) : t;
    }
    function Mo(t) {
        var e = U();
        return t && y(Ke(t.replaceMerge), function(t) {
            e.set(t, !0);
        }), {
            replaceMergeMainTypeMap: e
        };
    }
    function To(t, e, n) {
        var i = {
            width: e,
            height: n,
            aspectratio: e / n
        }, r = !0;
        return y(t, function(t, e) {
            var n = e.match(Ky);
            if (n && n[1] && n[2]) {
                var o = n[1], a = n[2].toLowerCase();
                (function(t, e, n) {
                    return "min" === n ? t >= e : "max" === n ? e >= t : t === e;
                })(i[a], t, o) || (r = !1);
            }
        }), r;
    }
    function Co(t) {
        var e = t && t.itemStyle;
        if (e) for (var n = 0, i = tv.length; i > n; n++) {
            var r = tv[n], o = e.normal, a = e.emphasis;
            o && o[r] && (t[r] = t[r] || {}, t[r].normal ? l(t[r].normal, o[r]) : t[r].normal = o[r], 
            o[r] = null), a && a[r] && (t[r] = t[r] || {}, t[r].emphasis ? l(t[r].emphasis, a[r]) : t[r].emphasis = a[r], 
            a[r] = null);
        }
    }
    function Ao(t, e, n) {
        if (t && t[e] && (t[e].normal || t[e].emphasis)) {
            var i = t[e].normal, r = t[e].emphasis;
            i && (n ? (t[e].normal = t[e].emphasis = null, c(t[e], i)) : t[e] = i), r && (t.emphasis = t.emphasis || {}, 
            t.emphasis[e] = r, r.focus && (t.emphasis.focus = r.focus), r.blurScope && (t.emphasis.blurScope = r.blurScope));
        }
    }
    function ko(t) {
        Ao(t, "itemStyle"), Ao(t, "lineStyle"), Ao(t, "areaStyle"), Ao(t, "label"), Ao(t, "labelLine"), 
        Ao(t, "upperLabel"), Ao(t, "edgeLabel");
    }
    function Io(t, e) {
        var n = Qy(t) && t[e], i = Qy(n) && n.textStyle;
        if (i) for (var r = 0, o = Ip.length; o > r; r++) {
            var a = Ip[r];
            i.hasOwnProperty(a) && (n[a] = i[a]);
        }
    }
    function Do(t) {
        t && (ko(t), Io(t, "label"), t.emphasis && Io(t.emphasis, "label"));
    }
    function Po(t) {
        return S(t) ? t : t ? [ t ] : [];
    }
    function Lo(t) {
        return (S(t) ? t[0] : t) || {};
    }
    function Oo(t, e) {
        Jy(Po(t.series), function(t) {
            Qy(t) && function(t) {
                if (Qy(t)) {
                    Co(t), ko(t), Io(t, "label"), Io(t, "upperLabel"), Io(t, "edgeLabel"), t.emphasis && (Io(t.emphasis, "label"), 
                    Io(t.emphasis, "upperLabel"), Io(t.emphasis, "edgeLabel"));
                    var e = t.markPoint;
                    e && (Co(e), Do(e));
                    var n = t.markLine;
                    n && (Co(n), Do(n));
                    var i = t.markArea;
                    i && Do(i);
                    var r = t.data;
                    if ("graph" === t.type) {
                        r = r || t.nodes;
                        var o = t.links || t.edges;
                        if (o && !D(o)) for (var a = 0; a < o.length; a++) Do(o[a]);
                        y(t.categories, function(t) {
                            ko(t);
                        });
                    }
                    if (r && !D(r)) for (a = 0; a < r.length; a++) Do(r[a]);
                    if ((e = t.markPoint) && e.data) {
                        var s = e.data;
                        for (a = 0; a < s.length; a++) Do(s[a]);
                    }
                    if ((n = t.markLine) && n.data) {
                        var l = n.data;
                        for (a = 0; a < l.length; a++) S(l[a]) ? (Do(l[a][0]), Do(l[a][1])) : Do(l[a]);
                    }
                    "gauge" === t.type ? (Io(t, "axisLabel"), Io(t, "title"), Io(t, "detail")) : "treemap" === t.type ? (Ao(t.breadcrumb, "itemStyle"), 
                    y(t.levels, function(t) {
                        ko(t);
                    })) : "tree" === t.type && ko(t.leaves);
                }
            }(t);
        });
        var n = [ "xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar" ];
        e && n.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), Jy(n, function(e) {
            Jy(Po(t[e]), function(t) {
                t && (Io(t, "axisLabel"), Io(t.axisPointer, "label"));
            });
        }), Jy(Po(t.parallel), function(t) {
            var e = t && t.parallelAxisDefault;
            Io(e, "axisLabel"), Io(e && e.axisPointer, "label");
        }), Jy(Po(t.calendar), function(t) {
            Ao(t, "itemStyle"), Io(t, "dayLabel"), Io(t, "monthLabel"), Io(t, "yearLabel");
        }), Jy(Po(t.radar), function(t) {
            Io(t, "name"), t.name && null == t.axisName && (t.axisName = t.name, delete t.name), 
            null != t.nameGap && null == t.axisNameGap && (t.axisNameGap = t.nameGap, delete t.nameGap);
        }), Jy(Po(t.geo), function(t) {
            Qy(t) && (Do(t), Jy(Po(t.regions), function(t) {
                Do(t);
            }));
        }), Jy(Po(t.timeline), function(t) {
            Do(t), Ao(t, "label"), Ao(t, "itemStyle"), Ao(t, "controlStyle", !0);
            var e = t.data;
            S(e) && y(e, function(t) {
                k(t) && (Ao(t, "label"), Ao(t, "itemStyle"));
            });
        }), Jy(Po(t.toolbox), function(t) {
            Ao(t, "iconStyle"), Jy(t.feature, function(t) {
                Ao(t, "iconStyle");
            });
        }), Io(Lo(t.axisPointer), "label"), Io(Lo(t.tooltip).axisPointer, "label");
    }
    function Ro(t) {
        t && y(ev, function(e) {
            e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]]);
        });
    }
    function Eo(t) {
        var e = t && t.itemStyle;
        if (e) for (var n = 0; n < iv.length; n++) {
            var i = iv[n][1], r = iv[n][0];
            null != e[i] && (e[r] = e[i]);
        }
    }
    function No(t) {
        t && "edge" === t.alignTo && null != t.margin && null == t.edgeDistance && (t.edgeDistance = t.margin);
    }
    function Bo(t) {
        t && t.downplay && !t.blur && (t.blur = t.downplay);
    }
    function zo(e, n) {
        Oo(e, n), e.series = Ke(e.series), y(e.series, function(e) {
            if (k(e)) {
                var n = e.type;
                if ("line" === n) null != e.clipOverflow && (e.clip = e.clipOverflow); else if ("pie" === n || "gauge" === n) {
                    if (null != e.clockWise && (e.clockwise = e.clockWise), No(e.label), (o = e.data) && !D(o)) for (var i = 0; i < o.length; i++) No(o[i]);
                    null != e.hoverOffset && (e.emphasis = e.emphasis || {}, (e.emphasis.scaleSize = null) && (e.emphasis.scaleSize = e.hoverOffset));
                } else if ("gauge" === n) {
                    var r = function(t, e) {
                        for (var n = e.split(","), i = t, r = 0; r < n.length && null != (i = i && i[n[r]]); r++) ;
                        return i;
                    }(e, "pointer.color");
                    null != r && function(t, e, n, i) {
                        for (var r, o = e.split(","), a = t, s = 0; s < o.length - 1; s++) null == a[r = o[s]] && (a[r] = {}), 
                        a = a[r];
                        (i || null == a[o[s]]) && (a[o[s]] = n);
                    }(e, "itemStyle.color", r);
                } else if ("bar" === n) {
                    var o;
                    if (Eo(e), Eo(e.backgroundStyle), Eo(e.emphasis), (o = e.data) && !D(o)) for (i = 0; i < o.length; i++) "object" == t(o[i]) && (Eo(o[i]), 
                    Eo(o[i] && o[i].emphasis));
                } else if ("sunburst" === n) {
                    var a = e.highlightPolicy;
                    a && (e.emphasis = e.emphasis || {}, e.emphasis.focus || (e.emphasis.focus = a)), 
                    Bo(e), function t(e, n) {
                        if (e) for (var i = 0; i < e.length; i++) n(e[i]), e[i] && t(e[i].children, n);
                    }(e.data, Bo);
                } else "graph" === n || "sankey" === n ? function(t) {
                    t && null != t.focusNodeAdjacency && (t.emphasis = t.emphasis || {}, null == t.emphasis.focus && (t.emphasis.focus = "adjacency"));
                }(e) : "map" === n && (e.mapType && !e.map && (e.map = e.mapType), e.mapLocation && c(e, e.mapLocation));
                null != e.hoverAnimation && (e.emphasis = e.emphasis || {}, e.emphasis && null == e.emphasis.scale && (e.emphasis.scale = e.hoverAnimation)), 
                Ro(e);
            }
        }), e.dataRange && (e.visualMap = e.dataRange), y(nv, function(t) {
            var n = e[t];
            n && (S(n) || (n = [ n ]), y(n, function(t) {
                Ro(t);
            }));
        });
    }
    function Fo(t) {
        y(t, function(e, n) {
            var i = [], r = [ NaN, NaN ], o = [ e.stackResultDimension, e.stackedOverDimension ], a = e.data, s = e.isStackedByIndex, l = a.map(o, function(o, l, u) {
                var h, c, p = a.get(e.stackedDimension, u);
                if (isNaN(p)) return r;
                s ? c = a.getRawIndex(u) : h = a.get(e.stackedByDimension, u);
                for (var f = NaN, d = n - 1; d >= 0; d--) {
                    var g = t[d];
                    if (s || (c = g.data.rawIndexOf(g.stackedByDimension, h)), c >= 0) {
                        var y = g.data.getByRawIndex(g.stackResultDimension, c);
                        if (p >= 0 && y > 0 || 0 >= p && 0 > y) {
                            p = ze(p, y), f = y;
                            break;
                        }
                    }
                }
                return i[0] = p, i[1] = f, i;
            });
            a.hostModel.setData(l), e.data = l;
        });
    }
    function Vo(t) {
        return t instanceof rv;
    }
    function Ho(t, e, n, i) {
        n = n || Xo(t);
        var r = e.seriesLayoutBy, o = function(t, e, n, i, r) {
            var o, a;
            if (!t) return {
                dimensionsDefine: Yo(r),
                startIndex: a,
                dimensionsDetectedCount: o
            };
            if (e === Ay) {
                var s = t;
                "auto" === i || null == i ? qo(function(t) {
                    null != t && "-" !== t && (T(t) ? null == a && (a = 1) : a = 0);
                }, n, s, 10) : a = A(i) ? i : i ? 1 : 0, r || 1 !== a || (r = [], qo(function(t, e) {
                    r[e] = null != t ? t + "" : "";
                }, n, s, 1 / 0)), o = r ? r.length : n === Oy ? s.length : s[0] ? s[0].length : null;
            } else if (e === ky) r || (r = function(t) {
                for (var e, n = 0; n < t.length && !(e = t[n++]); ) ;
                if (e) {
                    var i = [];
                    return y(e, function(t, e) {
                        i.push(e);
                    }), i;
                }
            }(t)); else if (e === Iy) r || (r = [], y(t, function(t, e) {
                r.push(e);
            })); else if (e === Cy) {
                var l = Je(t[0]);
                o = S(l) && l.length || 1;
            }
            return {
                startIndex: a,
                dimensionsDefine: Yo(r),
                dimensionsDetectedCount: o
            };
        }(t, n, r, e.sourceHeader, e.dimensions);
        return new rv({
            data: t,
            sourceFormat: n,
            seriesLayoutBy: r,
            dimensionsDefine: o.dimensionsDefine,
            startIndex: o.startIndex,
            dimensionsDetectedCount: o.dimensionsDetectedCount,
            encodeDefine: Uo(i),
            metaRawOption: s(e)
        });
    }
    function Go(t) {
        return new rv({
            data: t,
            sourceFormat: D(t) ? Dy : Cy
        });
    }
    function Wo(t) {
        return new rv({
            data: t.data,
            sourceFormat: t.sourceFormat,
            seriesLayoutBy: t.seriesLayoutBy,
            dimensionsDefine: s(t.dimensionsDefine),
            startIndex: t.startIndex,
            dimensionsDetectedCount: t.dimensionsDetectedCount,
            encodeDefine: Uo(t.encodeDefine)
        });
    }
    function Uo(t) {
        return t ? U(t) : null;
    }
    function Xo(t) {
        var e = Py;
        if (D(t)) e = Dy; else if (S(t)) {
            0 === t.length && (e = Ay);
            for (var n = 0, i = t.length; i > n; n++) {
                var r = t[n];
                if (null != r) {
                    if (S(r)) {
                        e = Ay;
                        break;
                    }
                    if (k(r)) {
                        e = ky;
                        break;
                    }
                }
            }
        } else if (k(t)) for (var o in t) if (Y(t, o) && g(t[o])) {
            e = Iy;
            break;
        }
        return e;
    }
    function Yo(t) {
        if (t) {
            var e = U();
            return v(t, function(t) {
                var n = {
                    name: (t = k(t) ? t : {
                        name: t
                    }).name,
                    displayName: t.displayName,
                    type: t.type
                };
                if (null == n.name) return n;
                n.name += "", null == n.displayName && (n.displayName = n.name);
                var i = e.get(n.name);
                return i ? n.name += "-" + i.count++ : e.set(n.name, {
                    count: 1
                }), n;
            });
        }
    }
    function qo(t, e, n, i) {
        if (e === Oy) for (var r = 0; r < n.length && i > r; r++) t(n[r] ? n[r][0] : null, r); else {
            var o = n[0] || [];
            for (r = 0; r < o.length && i > r; r++) t(o[r], r);
        }
    }
    function jo(t, e) {
        return sv[$o(t, e)];
    }
    function Zo(t, e) {
        return uv[$o(t, e)];
    }
    function Ko(t) {
        return cv[t];
    }
    function $o(t, e) {
        return t === Ay ? t + "_" + e : t;
    }
    function Jo(t, e, n) {
        if (t) {
            var i = t.getRawDataItem(e);
            if (null != i) {
                var r, o, a = t.getProvider().getSource().sourceFormat, s = t.getDimensionInfo(n);
                return s && (r = s.name, o = s.index), Ko(a)(i, o, r);
            }
        }
    }
    function Qo(t) {
        return new dv(t);
    }
    function ta(t, e) {
        var n = e && e.type;
        if ("ordinal" === n) {
            var i = e && e.ordinalMeta;
            return i ? i.parseAndCollect(t) : t;
        }
        return "time" === n && "number" != typeof t && null != t && "-" !== t && (t = +He(t)), 
        null == t || "" === t ? NaN : +t;
    }
    function ea(t) {
        if (!aa(t.sourceFormat)) {
            Ze("");
        }
        return t.data;
    }
    function na(t) {
        var e = t.sourceFormat, n = t.data;
        if (!aa(e)) {
            Ze("");
        }
        if (e === Ay) {
            for (var i = [], r = 0, o = n.length; o > r; r++) i.push(n[r].slice());
            return i;
        }
        if (e === ky) {
            for (i = [], r = 0, o = n.length; o > r; r++) i.push(h({}, n[r]));
            return i;
        }
    }
    function ia(t, e, n) {
        return null != n ? "number" == typeof n || !isNaN(n) && !Y(e, n) ? t[n] : Y(e, n) ? e[n] : void 0 : void 0;
    }
    function ra(t) {
        return s(t);
    }
    function oa(t, e) {
        e.length || Ze(""), k(t) || Ze("");
        var n = t.type, i = mv.get(n);
        i || Ze("");
        var r = v(e, function(t) {
            return function(t, e) {
                var n = new vv(), i = t.data, r = n.sourceFormat = t.sourceFormat, o = t.startIndex;
                t.seriesLayoutBy !== Ly && Ze("");
                var a = [], s = {}, l = t.dimensionsDefine;
                if (l) y(l, function(t, e) {
                    var n = t.name, i = {
                        index: e,
                        name: n,
                        displayName: t.displayName
                    };
                    if (a.push(i), null != n) {
                        Y(s, n) && Ze(""), s[n] = i;
                    }
                }); else for (var u = 0; u < t.dimensionsDetectedCount; u++) a.push({
                    index: u
                });
                var h = jo(r, Ly);
                e.__isBuiltIn && (n.getRawDataItem = function(t) {
                    return h(i, o, a, t);
                }, n.getRawData = Eh(ea, null, t)), n.cloneRawData = Eh(na, null, t);
                var c = Zo(r, Ly);
                n.count = Eh(c, null, i, o, a);
                var p = Ko(r);
                n.retrieveValue = function(t, e) {
                    var n = h(i, o, a, t);
                    return f(n, e);
                };
                var f = n.retrieveValueFromItem = function(t, e) {
                    if (null != t) {
                        var n = a[e];
                        return n ? p(t, e, n.name) : void 0;
                    }
                };
                return n.getDimensionInfo = Eh(ia, null, a, s), n.cloneAllDimensionInfo = Eh(ra, null, a), 
                n;
            }(t, i);
        });
        return v(Ke(i.transform({
            upstream: r[0],
            upstreamList: r,
            config: s(t.config)
        })), function(t, n) {
            k(t) || Ze(""), t.data || Ze(""), aa(Xo(t.data)) || Ze("");
            var i, r = e[0];
            if (r && 0 === n && !t.dimensions) {
                var o = r.startIndex;
                o && (t.data = r.data.slice(0, o).concat(t.data)), i = {
                    seriesLayoutBy: Ly,
                    sourceHeader: o,
                    dimensions: r.metaRawOption.dimensions
                };
            } else i = {
                seriesLayoutBy: Ly,
                sourceHeader: 0,
                dimensions: t.dimensions
            };
            return Ho(t.data, i, null, null);
        });
    }
    function aa(t) {
        return t === Ay || t === ky;
    }
    function sa(t) {
        t.option.transform && G(t.option.transform);
    }
    function la(t) {
        return "series" === t.mainType;
    }
    function ua(t) {
        throw new Error(t);
    }
    function ha(t, e) {
        return e.type = t, e;
    }
    function ca(t, e) {
        return function(t, e) {
            return e = e || "transparent", T(t) ? t : k(t) && t.colorStops && (t.colorStops[0] || {}).color || e;
        }(t.getData().getItemVisual(e, "style")[t.visualDrawType]);
    }
    function pa(t, e, n, i, r) {
        function o(t, e) {
            var n = a.getDimensionInfo(e);
            n && !1 !== n.otherDims.tooltip && (s ? h.push(ha("nameValue", {
                markerType: "subItem",
                markerColor: r,
                name: n.displayName,
                value: t,
                valueType: n.type
            })) : (l.push(t), u.push(n.type)));
        }
        var a = e.getData(), s = m(t, function(t, e, n) {
            var i = a.getDimensionInfo(n);
            return t || i && !1 !== i.tooltip && null != i.displayName;
        }, !1), l = [], u = [], h = [];
        return i.length ? y(i, function(t) {
            o(Jo(a, n, t), t);
        }) : y(t, o), {
            inlineValues: l,
            inlineValueTypes: u,
            blocks: h
        };
    }
    function fa(t, e) {
        return t.getName(e) || t.getId(e);
    }
    function da(t) {
        var e = t.name;
        rn(t) || (t.name = function(t) {
            var e = t.getRawData(), n = e.mapDimensionsAll("seriesName"), i = [];
            return y(n, function(t) {
                var n = e.getDimensionInfo(t);
                n.displayName && i.push(n.displayName);
            }), i.join(" ");
        }(t) || e);
    }
    function ga(t) {
        return t.model.getRawData().count();
    }
    function ya(t) {
        var e = t.model;
        return e.setData(e.getRawData().cloneShallow()), va;
    }
    function va(t, e) {
        e.outputData && t.end > e.outputData.count() && e.model.getRawData().cloneShallow(e.outputData);
    }
    function ma(t, e) {
        y(i(t.CHANGABLE_METHODS, t.DOWNSAMPLE_METHODS), function(n) {
            t.wrapMethod(n, b(_a, e));
        });
    }
    function _a(t, e) {
        var n = xa(t);
        return n && n.setOutputEnd((e || this).count()), e;
    }
    function xa(t) {
        var e = (t.ecModel || {}).scheduler, n = e && e.getPipeline(t.uid);
        if (n) {
            var i = n.currentTask;
            if (i) {
                var r = i.agentStubMap;
                r && (i = r.get(t.uid));
            }
            return i;
        }
    }
    function wa() {
        var t = sn();
        return function(e) {
            var n = t(e), i = e.pipelineContext, r = !!n.large, o = !!n.progressiveRender, a = n.large = !(!i || !i.large), s = n.progressiveRender = !(!i || !i.progressiveRender);
            return !(r === a && o === s) && "reset";
        };
    }
    function ba(t, e, n) {
        t && ("emphasis" === e ? Li : Oi)(t, n);
    }
    function Sa(t, e, n) {
        var i = an(t, e), r = e && null != e.highlightKey ? function(t) {
            var e = ud[t];
            return null == e && 32 >= ld && (e = ud[t] = ld++), e;
        }(e.highlightKey) : null;
        null != i ? y(Ke(i), function(e) {
            ba(t.getItemGraphicEl(e), n, r);
        }) : t.eachItemGraphicEl(function(t) {
            ba(t, n, r);
        });
    }
    function Ma(t) {
        return Mv(t.model);
    }
    function Ta(t) {
        var e = t.model, n = t.ecModel, i = t.api, r = t.payload, o = e.pipelineContext.progressiveRender, a = t.view, s = r && Sv(r).updateMethod, l = o ? "incrementalPrepareRender" : s && a[s] ? s : "render";
        return "render" !== l && a[l](e, n, i, r), Av[l];
    }
    function Ca(t, e, n) {
        function i() {
            h = new Date().getTime(), c = null, t.apply(a, s || []);
        }
        var r, o, a, s, l, u = 0, h = 0, c = null;
        e = e || 0;
        var p = function() {
            for (var t = [], p = 0; p < arguments.length; p++) t[p] = arguments[p];
            r = new Date().getTime(), a = this, s = t;
            var f = l || e, d = l || n;
            l = null, o = r - (d ? u : h) - f, clearTimeout(c), d ? c = setTimeout(i, f) : o >= 0 ? i() : c = setTimeout(i, -o), 
            u = r;
        };
        return p.clear = function() {
            c && (clearTimeout(c), c = null);
        }, p.debounceNextCall = function(t) {
            l = t;
        }, p;
    }
    function Aa(t, e) {
        var n = t.visualStyleMapper || Lv[e];
        return n || (console.warn("Unkown style type '" + e + "'."), Lv.itemStyle);
    }
    function ka(t, e) {
        var n = t.visualDrawType || Ov[e];
        return n || (console.warn("Unkown style type '" + e + "'."), "fill");
    }
    function Ia(t) {
        t.overallReset(t.ecModel, t.api, t.payload);
    }
    function Da(t) {
        return t.overallProgress && Pa;
    }
    function Pa() {
        this.agent.dirty(), this.getDownstream().dirty();
    }
    function La() {
        this.agent && this.agent.dirty();
    }
    function Oa(t) {
        return t.plan ? t.plan(t.model, t.ecModel, t.api, t.payload) : null;
    }
    function Ra(t) {
        t.useClearVisual && t.data.clearAllVisual();
        var e = t.resetDefines = Ke(t.reset(t.model, t.ecModel, t.api, t.payload));
        return e.length > 1 ? v(e, function(t, e) {
            return Ea(e);
        }) : Vv;
    }
    function Ea(t) {
        return function(e, n) {
            var i = n.data, r = n.resetDefines[t];
            if (r && r.dataEach) for (var o = e.start; o < e.end; o++) r.dataEach(i, o); else r && r.progress && r.progress(e, i);
        };
    }
    function Na(t) {
        return t.data.count();
    }
    function Ba(t) {
        Cv = null;
        try {
            t(Hv, Gv);
        } catch (t) {}
        return Cv;
    }
    function za(t, e) {
        for (var n in e.prototype) t[n] = q;
    }
    function Fa(t, e) {
        switch (e) {
          case "color":
            return t.getVisual("style")[t.getVisual("drawType")];

          case "opacity":
            return t.getVisual("style").opacity;

          case "symbol":
          case "symbolSize":
          case "liftZ":
            return t.getVisual(e);
        }
    }
    function Va(t, e, n, i, r) {
        var o = n.width, a = n.height;
        switch (t) {
          case "top":
            i.set(n.x + o / 2, n.y - e), r.set(0, -1);
            break;

          case "bottom":
            i.set(n.x + o / 2, n.y + a + e), r.set(0, 1);
            break;

          case "left":
            i.set(n.x - e, n.y + a / 2), r.set(-1, 0);
            break;

          case "right":
            i.set(n.x + o + e, n.y + a / 2), r.set(1, 0);
        }
    }
    function Ha(t, e, n, i, r, o, a, s, l) {
        a -= t, s -= e;
        var u = Math.sqrt(a * a + s * s), h = (a /= u) * n + t, c = (s /= u) * n + e;
        if (Math.abs(i - r) % Jv < 1e-4) return l[0] = h, l[1] = c, u - n;
        if (o) {
            var p = i;
            i = ei(r), r = ei(p);
        } else i = ei(i), r = ei(r);
        i > r && (r += Jv);
        var f = Math.atan2(s, a);
        if (0 > f && (f += Jv), f >= i && r >= f || f + Jv >= i && r >= f + Jv) return l[0] = h, 
        l[1] = c, u - n;
        var d = n * Math.cos(i) + t, g = n * Math.sin(i) + e, y = n * Math.cos(r) + t, v = n * Math.sin(r) + e, m = (d - a) * (d - a) + (g - s) * (g - s), _ = (y - a) * (y - a) + (v - s) * (v - s);
        return _ > m ? (l[0] = d, l[1] = g, Math.sqrt(m)) : (l[0] = y, l[1] = v, Math.sqrt(_));
    }
    function Ga(t, e, n, i, r, o, a, s) {
        var l = r - t, u = o - e, h = n - t, c = i - e, p = Math.sqrt(h * h + c * c), f = (l * (h /= p) + u * (c /= p)) / p;
        s && (f = Math.min(Math.max(f, 0), 1)), f *= p;
        var d = a[0] = t + f * h, g = a[1] = e + f * c;
        return Math.sqrt((d - r) * (d - r) + (g - o) * (g - o));
    }
    function Wa(t, e, n, i, r, o, a) {
        0 > n && (t += n, n = -n), 0 > i && (e += i, i = -i);
        var s = t + n, l = e + i, u = a[0] = Math.min(Math.max(r, t), s), h = a[1] = Math.min(Math.max(o, e), l);
        return Math.sqrt((u - r) * (u - r) + (h - o) * (h - o));
    }
    function Ua(t, e, n) {
        var i = Wa(e.x, e.y, e.width, e.height, t.x, t.y, em);
        return n.set(em[0], em[1]), i;
    }
    function Xa(t, e, n) {
        for (var i, r, o = 0, a = 0, s = 0, l = 0, u = 1 / 0, h = e.data, c = t.x, p = t.y, f = 0; f < h.length; ) {
            var d = h[f++];
            1 === f && (s = o = h[f], l = a = h[f + 1]);
            var g = u;
            switch (d) {
              case Qv.M:
                o = s = h[f++], a = l = h[f++];
                break;

              case Qv.L:
                g = Ga(o, a, h[f], h[f + 1], c, p, em, !0), o = h[f++], a = h[f++];
                break;

              case Qv.C:
                g = Bn(o, a, h[f++], h[f++], h[f++], h[f++], h[f], h[f + 1], c, p, em), o = h[f++], 
                a = h[f++];
                break;

              case Qv.Q:
                g = Wn(o, a, h[f++], h[f++], h[f], h[f + 1], c, p, em), o = h[f++], a = h[f++];
                break;

              case Qv.A:
                var y = h[f++], v = h[f++], m = h[f++], _ = h[f++], x = h[f++], w = h[f++];
                f += 1;
                var b = !!(1 - h[f++]);
                i = Math.cos(x) * m + y, r = Math.sin(x) * _ + v, 1 >= f && (s = i, l = r), g = Ha(y, v, _, x, x + w, b, (c - y) * _ / m + y, p, em), 
                o = Math.cos(x + w) * m + y, a = Math.sin(x + w) * _ + v;
                break;

              case Qv.R:
                g = Wa(s = o = h[f++], l = a = h[f++], h[f++], h[f++], c, p, em);
                break;

              case Qv.Z:
                g = Ga(o, a, s, l, c, p, em, !0), o = s, a = l;
            }
            u > g && (u = g, n.set(em[0], em[1]));
        }
        return u;
    }
    function Ya(t, e) {
        if (t) {
            var n = t.getTextGuideLine(), i = t.getTextContent();
            if (i && n) {
                var r = t.textGuideLineConfig || {}, o = [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ], a = r.candidates || tm, s = i.getBoundingRect().clone();
                s.applyTransform(i.getComputedTransform());
                var l = 1 / 0, u = r.anchor, h = t.getComputedTransform(), c = h && ge([], h), p = e.get("length2") || 0;
                u && rm.copy(u);
                for (var f = 0; f < a.length; f++) {
                    Va(a[f], 0, s, nm, om), Qc.scaleAndAdd(im, nm, om, p), im.transform(c);
                    var d = t.getBoundingRect(), g = u ? u.distance(im) : t instanceof Yf ? Xa(im, t.path, rm) : Ua(im, d, rm);
                    l > g && (l = g, im.transform(h), rm.transform(h), rm.toArray(o[0]), im.toArray(o[1]), 
                    nm.toArray(o[2]));
                }
                (function(t, e) {
                    if (180 >= e && e > 0) {
                        e = e / 180 * Math.PI, nm.fromArray(t[0]), im.fromArray(t[1]), rm.fromArray(t[2]), 
                        Qc.sub(om, nm, im), Qc.sub(am, rm, im);
                        var n = om.len(), i = am.len();
                        if (!(.001 > n || .001 > i)) {
                            om.scale(1 / n), am.scale(1 / i);
                            var r = om.dot(am), o = Math.cos(e);
                            if (r > o) {
                                var a = Ga(im.x, im.y, rm.x, rm.y, nm.x, nm.y, sm, !1);
                                lm.fromArray(sm), lm.scaleAndAdd(am, a / Math.tan(Math.PI - e));
                                var s = rm.x !== im.x ? (lm.x - im.x) / (rm.x - im.x) : (lm.y - im.y) / (rm.y - im.y);
                                if (isNaN(s)) return;
                                0 > s ? Qc.copy(lm, im) : s > 1 && Qc.copy(lm, rm), lm.toArray(t[1]);
                            }
                        }
                    }
                })(o, e.get("minTurnAngle")), n.setShape({
                    points: o
                });
            }
        }
    }
    function qa(t, e, n, i) {
        var r = "normal" === n, o = r ? t : t.ensureState(n);
        o.ignore = e;
        var a = i.get("smooth");
        a && !0 === a && (a = .3), o.shape = o.shape || {}, a > 0 && (o.shape.smooth = a);
        var s = i.getModel("lineStyle").getLineStyle();
        r ? t.useStyle(s) : o.style = s;
    }
    function ja(t, e) {
        var n = e.smooth, i = e.points;
        if (i) if (t.moveTo(i[0][0], i[0][1]), n > 0 && i.length >= 3) {
            var r = Hh(i[0], i[1]), o = Hh(i[1], i[2]);
            if (!r || !o) return t.lineTo(i[1][0], i[1][1]), void t.lineTo(i[2][0], i[2][1]);
            var a = Math.min(r, o) * n, s = rt([], i[1], i[0], a / r), l = rt([], i[1], i[2], a / o), u = rt([], s, l, .5);
            t.bezierCurveTo(s[0], s[1], s[0], s[1], u[0], u[1]), t.bezierCurveTo(l[0], l[1], l[0], l[1], i[2][0], i[2][1]);
        } else for (var h = 1; h < i.length; h++) t.lineTo(i[h][0], i[h][1]);
    }
    function Za(t, e, n, i, r, o) {
        function a() {
            w = S.rect[e] - i, b = r - M.rect[e] - M.rect[n];
        }
        function s(t, e, n) {
            if (0 > t) {
                var i = Math.min(e, -t);
                if (i > 0) {
                    l(i * n, 0, c);
                    var r = i + t;
                    0 > r && u(-r * n, 1);
                } else u(-t * n, 1);
            }
        }
        function l(n, i, r) {
            0 !== n && (d = !0);
            for (var o = i; r > o; o++) {
                var a = t[o];
                a.rect[e] += n, a.label[e] += n;
            }
        }
        function u(i, r) {
            for (var o = [], a = 0, s = 1; c > s; s++) {
                var u = t[s - 1].rect, h = Math.max(t[s].rect[e] - u[e] - u[n], 0);
                o.push(h), a += h;
            }
            if (a) {
                var p = Math.min(Math.abs(i) / a, r);
                if (i > 0) for (s = 0; c - 1 > s; s++) {
                    l(o[s] * p, 0, s + 1);
                } else for (s = c - 1; s > 0; s--) {
                    l(-(o[s - 1] * p), s, c);
                }
            }
        }
        function h(t) {
            var e = 0 > t ? -1 : 1;
            t = Math.abs(t);
            for (var n = Math.ceil(t / (c - 1)), i = 0; c - 1 > i; i++) if (e > 0 ? l(n, 0, i + 1) : l(-n, c - i - 1, c), 
            0 >= (t -= n)) return;
        }
        var c = t.length;
        if (!(2 > c)) {
            t.sort(function(t, n) {
                return t.rect[e] - n.rect[e];
            });
            for (var p, f = 0, d = !1, g = [], y = 0, v = 0; c > v; v++) {
                var m = t[v], _ = m.rect;
                0 > (p = _[e] - f) && (_[e] -= p, m.label[e] -= p, d = !0);
                var x = Math.max(-p, 0);
                g.push(x), y += x, f = _[e] + _[n];
            }
            y > 0 && o && l(-y / c, 0, c);
            var w, b, S = t[0], M = t[c - 1];
            return a(), 0 > w && u(-w, .8), 0 > b && u(b, .8), a(), s(w, b, 1), s(b, w, -1), 
            a(), 0 > w && h(-w), 0 > b && h(b), d;
        }
    }
    function Ka(t) {
        if (t) {
            for (var e = [], n = 0; n < t.length; n++) e.push(t[n].slice());
            return e;
        }
    }
    function $a(t, e) {
        var n = t.label, i = e && e.getTextGuideLine();
        return {
            dataIndex: t.dataIndex,
            dataType: t.dataType,
            seriesIndex: t.seriesModel.seriesIndex,
            text: t.label.style.text,
            rect: t.hostRect,
            labelRect: t.rect,
            align: n.style.align,
            verticalAlign: n.style.verticalAlign,
            labelLinePoints: Ka(i && i.shape.points)
        };
    }
    function Ja(t, e, n) {
        for (var i = 0; i < n.length; i++) {
            var r = n[i];
            null != e[r] && (t[r] = e[r]);
        }
    }
    function Qa(t, e, n, i, r) {
        var o = t + e;
        n.isSilent(o) || i.eachComponent({
            mainType: "series",
            subType: "pie"
        }, function(t) {
            for (var e = t.seriesIndex, i = r.selected, a = 0; a < i.length; a++) if (i[a].seriesIndex === e) {
                var s = t.getData(), l = an(s, r.fromActionPayload);
                n.trigger(o, {
                    type: o,
                    seriesId: t.id,
                    name: s.getName(S(l) ? l[0] : l),
                    selected: h({}, t.option.selectedMap)
                });
            }
        });
    }
    function ts(t, e, n) {
        for (var i; t && (!e(t) || (i = t, !n)); ) t = t.__hostTarget || t.parent;
        return i;
    }
    function es(t, e) {
        if ("image" !== this.type) {
            var n = this.style;
            this.__isEmptyBrush ? (n.stroke = t, n.fill = e || "#fff", n.lineWidth = 2) : "line" === this.shape.symbolType ? n.stroke = t : n.fill = t, 
            this.markRedraw();
        }
    }
    function ns(t, e, n, i, r, o, a) {
        var s, l = 0 === t.indexOf("empty");
        return l && (t = t.substr(5, 1).toLowerCase() + t.substr(6)), (s = 0 === t.indexOf("image://") ? fr(t.slice(8), new lp(e, n, i, r), a ? "center" : "cover") : 0 === t.indexOf("path://") ? pr(t.slice(7), {}, new lp(e, n, i, r), a ? "center" : "cover") : new Mm({
            shape: {
                symbolType: t,
                x: e,
                y: n,
                width: i,
                height: r
            }
        })).__isEmptyBrush = l, s.setColor = es, o && s.setColor(o), s;
    }
    function is(t, e, n) {
        for (var i = "radial" === e.type ? function(t, e, n) {
            var i = n.width, r = n.height, o = Math.min(i, r), a = null == e.x ? .5 : e.x, s = null == e.y ? .5 : e.y, l = null == e.r ? .5 : e.r;
            return e.global || (a = a * i + n.x, s = s * r + n.y, l *= o), t.createRadialGradient(a, s, 0, a, s, l);
        }(t, e, n) : function(t, e, n) {
            var i = null == e.x ? 0 : e.x, r = null == e.x2 ? 1 : e.x2, o = null == e.y ? 0 : e.y, a = null == e.y2 ? 0 : e.y2;
            return e.global || (i = i * n.width + n.x, r = r * n.width + n.x, o = o * n.height + n.y, 
            a = a * n.height + n.y), i = isNaN(i) ? 0 : i, r = isNaN(r) ? 1 : r, o = isNaN(o) ? 0 : o, 
            a = isNaN(a) ? 0 : a, t.createLinearGradient(i, o, r, a);
        }(t, e, n), r = e.colorStops, o = 0; o < r.length; o++) i.addColorStop(r[o].offset, r[o].color);
        return i;
    }
    function rs(t, e) {
        return t && "solid" !== t && e > 0 ? (e = e || 1, "dashed" === t ? [ 4 * e, 2 * e ] : "dotted" === t ? [ e ] : A(t) ? [ t ] : S(t) ? t : null) : null;
    }
    function os(t) {
        var e = t.stroke;
        return !(null == e || "none" === e || !(t.lineWidth > 0));
    }
    function as(t) {
        var e = t.fill;
        return null != e && "none" !== e;
    }
    function ss(t, e) {
        if (null != e.fillOpacity && 1 !== e.fillOpacity) {
            var n = t.globalAlpha;
            t.globalAlpha = e.fillOpacity * e.opacity, t.fill(), t.globalAlpha = n;
        } else t.fill();
    }
    function ls(t, e) {
        if (null != e.strokeOpacity && 1 !== e.strokeOpacity) {
            var n = t.globalAlpha;
            t.globalAlpha = e.strokeOpacity * e.opacity, t.stroke(), t.globalAlpha = n;
        } else t.stroke();
    }
    function us(t, e, n) {
        var i = wn(e.image, e.__image, n);
        if (Sn(i)) {
            var r = t.createPattern(i, e.repeat || "repeat");
            if ("function" == typeof DOMMatrix && r.setTransform) {
                var o = new DOMMatrix();
                o.rotateSelf(0, 0, (e.rotation || 0) / Math.PI * 180), o.scaleSelf(e.scaleX || 1, e.scaleY || 1), 
                o.translateSelf(e.x || 0, e.y || 0), r.setTransform(o);
            }
            return r;
        }
    }
    function hs(t, e, n, i, r) {
        var o = !1;
        if (!i && e === (n = n || {})) return !1;
        if (i || e.opacity !== n.opacity) {
            o || (fs(t, r), o = !0);
            var a = Math.max(Math.min(e.opacity, 1), 0);
            t.globalAlpha = isNaN(a) ? Xp.opacity : a;
        }
        (i || e.blend !== n.blend) && (o || (fs(t, r), o = !0), t.globalCompositeOperation = e.blend || Xp.blend);
        for (var s = 0; s < Cm.length; s++) {
            var l = Cm[s];
            (i || e[l] !== n[l]) && (o || (fs(t, r), o = !0), t[l] = t.dpr * (e[l] || 0));
        }
        return (i || e.shadowColor !== n.shadowColor) && (o || (fs(t, r), o = !0), t.shadowColor = e.shadowColor || Xp.shadowColor), 
        o;
    }
    function cs(t, e, n, i, r) {
        var o = ds(e, r.inHover), a = i ? null : n && ds(n, r.inHover) || {};
        if (o === a) return !1;
        var s = hs(t, o, a, i, r);
        if ((i || o.fill !== a.fill) && (s || (fs(t, r), s = !0), t.fillStyle = o.fill), 
        (i || o.stroke !== a.stroke) && (s || (fs(t, r), s = !0), t.strokeStyle = o.stroke), 
        (i || o.opacity !== a.opacity) && (s || (fs(t, r), s = !0), t.globalAlpha = null == o.opacity ? 1 : o.opacity), 
        e.hasStroke()) {
            var l = o.lineWidth / (o.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1);
            t.lineWidth !== l && (s || (fs(t, r), s = !0), t.lineWidth = l);
        }
        for (var u = 0; u < Am.length; u++) {
            var h = Am[u], c = h[0];
            (i || o[c] !== a[c]) && (s || (fs(t, r), s = !0), t[c] = o[c] || h[1]);
        }
        return s;
    }
    function ps(t, e) {
        var n = e.transform, i = t.dpr || 1;
        n ? t.setTransform(i * n[0], i * n[1], i * n[2], i * n[3], i * n[4], i * n[5]) : t.setTransform(i, 0, 0, i, 0, 0);
    }
    function fs(t, e) {
        e.batchFill && t.fill(), e.batchStroke && t.stroke(), e.batchFill = "", e.batchStroke = "";
    }
    function ds(t, e) {
        return e && t.__hoverStyle || t.style;
    }
    function gs(t, e) {
        ys(t, e, {
            inHover: !1,
            viewWidth: 0,
            viewHeight: 0
        }, !0);
    }
    function ys(t, e, n, i) {
        var r = e.transform;
        if (!e.shouldBePainted(n.viewWidth, n.viewHeight, !1, !1)) return e.__dirty &= ~lc, 
        void (e.__isRendered = !1);
        var o = e.__clipPaths, a = n.prevElClipPaths, s = !1, l = !1;
        if ((!a || function(t, e) {
            if (t === e || !t && !e) return !1;
            if (!t || !e || t.length !== e.length) return !0;
            for (var n = 0; n < t.length; n++) if (t[n] !== e[n]) return !0;
            return !1;
        }(o, a)) && (a && a.length && (fs(t, n), t.restore(), l = s = !0, n.prevElClipPaths = null, 
        n.allClipped = !1, n.prevEl = null), o && o.length && (fs(t, n), t.save(), function(t, e, n) {
            for (var i = !1, r = 0; r < t.length; r++) {
                var o = t[r];
                i = i || o.isZeroArea(), ps(e, o), e.beginPath(), o.buildPath(e, o.shape), e.clip();
            }
            n.allClipped = i;
        }(o, t, n), s = !0), n.prevElClipPaths = o), n.allClipped) e.__isRendered = !1; else {
            e.beforeBrush && e.beforeBrush(), e.innerBeforeBrush();
            var u = n.prevEl;
            u || (l = s = !0);
            var h = e instanceof Yf && e.autoBatch && function(t) {
                var e = as(t), n = os(t);
                return !(t.lineDash || !(+e ^ +n) || e && "string" != typeof t.fill || n && "string" != typeof t.stroke || t.strokePercent < 1 || t.strokeOpacity < 1 || t.fillOpacity < 1);
            }(e.style);
            s || function(t, e) {
                return t && e ? t[0] !== e[0] || t[1] !== e[1] || t[2] !== e[2] || t[3] !== e[3] || t[4] !== e[4] || t[5] !== e[5] : !(!t && !e);
            }(r, u.transform) ? (fs(t, n), ps(t, e)) : h || fs(t, n);
            var c = ds(e, n.inHover);
            e instanceof Yf ? (n.lastDrawType !== km && (l = !0, n.lastDrawType = km), cs(t, e, u, l, n), 
            h && (n.batchFill || n.batchStroke) || t.beginPath(), function(t, e, n, i) {
                var r = os(n), o = as(n), a = n.strokePercent, s = 1 > a, l = !e.path;
                e.silent && !s || !l || e.createPathProxy();
                var u = e.path || Tm;
                if (!i) {
                    var h = n.fill, c = n.stroke, p = o && !!h.colorStops, f = r && !!c.colorStops, d = o && !!h.image, g = r && !!c.image, y = void 0, m = void 0, _ = void 0, x = void 0, w = void 0;
                    (p || f) && (w = e.getBoundingRect()), p && (y = e.__dirty ? is(t, h, w) : e.__canvasFillGradient, 
                    e.__canvasFillGradient = y), f && (m = e.__dirty ? is(t, c, w) : e.__canvasStrokeGradient, 
                    e.__canvasStrokeGradient = m), d && (_ = e.__dirty || !e.__canvasFillPattern ? us(t, h, e) : e.__canvasFillPattern, 
                    e.__canvasFillPattern = _), g && (x = e.__dirty || !e.__canvasStrokePattern ? us(t, c, e) : e.__canvasStrokePattern, 
                    e.__canvasStrokePattern = _), p ? t.fillStyle = y : d && (_ ? t.fillStyle = _ : o = !1), 
                    f ? t.strokeStyle = m : g && (x ? t.strokeStyle = x : r = !1);
                }
                var b = n.lineDash && n.lineWidth > 0 && rs(n.lineDash, n.lineWidth), S = n.lineDashOffset, M = !!t.setLineDash, T = e.getGlobalScale();
                if (u.setScale(T[0], T[1], e.segmentIgnoreThreshold), b) {
                    var C = n.strokeNoScale && e.getLineScale ? e.getLineScale() : 1;
                    C && 1 !== C && (b = v(b, function(t) {
                        return t / C;
                    }), S /= C);
                }
                var A = !0;
                (l || e.__dirty & uc || b && !M && r) && (u.setDPR(t.dpr), s ? u.setContext(null) : (u.setContext(t), 
                A = !1), u.reset(), b && !M && (u.setLineDash(b), u.setLineDashOffset(S)), e.buildPath(u, e.shape, i), 
                u.toStatic(), e.pathUpdated()), A && u.rebuildPath(t, s ? a : 1), b && M && (t.setLineDash(b), 
                t.lineDashOffset = S), i || (n.strokeFirst ? (r && ls(t, n), o && ss(t, n)) : (o && ss(t, n), 
                r && ls(t, n))), b && M && t.setLineDash([]);
            }(t, e, c, h), h && (n.batchFill = c.fill || "", n.batchStroke = c.stroke || "")) : e instanceof jf ? (n.lastDrawType !== Dm && (l = !0, 
            n.lastDrawType = Dm), cs(t, e, u, l, n), function(t, e, n) {
                var i = n.text;
                if (null != i && (i += ""), i) {
                    t.font = n.font || hp, t.textAlign = n.textAlign, t.textBaseline = n.textBaseline;
                    var r = void 0;
                    if (t.setLineDash) {
                        var o = n.lineDash && n.lineWidth > 0 && rs(n.lineDash, n.lineWidth), a = n.lineDashOffset;
                        if (o) {
                            var s = n.strokeNoScale && e.getLineScale ? e.getLineScale() : 1;
                            s && 1 !== s && (o = v(o, function(t) {
                                return t / s;
                            }), a /= s), t.setLineDash(o), t.lineDashOffset = a, r = !0;
                        }
                    }
                    n.strokeFirst ? (os(n) && t.strokeText(i, n.x, n.y), as(n) && t.fillText(i, n.x, n.y)) : (as(n) && t.fillText(i, n.x, n.y), 
                    os(n) && t.strokeText(i, n.x, n.y)), r && t.setLineDash([]);
                }
            }(t, e, c)) : e instanceof $f ? (n.lastDrawType !== Im && (l = !0, n.lastDrawType = Im), 
            function(t, e, n, i, r) {
                hs(t, ds(e, r.inHover), n && ds(n, r.inHover), i, r);
            }(t, e, u, l, n), function(t, e, n) {
                var i = e.__image = wn(n.image, e.__image, e, e.onload);
                if (i && Sn(i)) {
                    var r = n.x || 0, o = n.y || 0, a = e.getWidth(), s = e.getHeight(), l = i.width / i.height;
                    if (null == a && null != s ? a = s * l : null == s && null != a ? s = a / l : null == a && null == s && (a = i.width, 
                    s = i.height), n.sWidth && n.sHeight) {
                        var u = n.sx || 0, h = n.sy || 0;
                        t.drawImage(i, u, h, n.sWidth, n.sHeight, r, o, a, s);
                    } else if (n.sx && n.sy) {
                        var c = a - (u = n.sx), p = s - (h = n.sy);
                        t.drawImage(i, u, h, c, p, r, o, a, s);
                    } else t.drawImage(i, r, o, a, s);
                }
            }(t, e, c)) : e instanceof Mg && (n.lastDrawType !== Pm && (l = !0, n.lastDrawType = Pm), 
            function(t, e, n) {
                var i = e.getDisplayables(), r = e.getTemporalDisplayables();
                t.save();
                var o, a, s = {
                    prevElClipPaths: null,
                    prevEl: null,
                    allClipped: !1,
                    viewWidth: n.viewWidth,
                    viewHeight: n.viewHeight,
                    inHover: n.inHover
                };
                for (o = e.getCursor(), a = i.length; a > o; o++) {
                    (h = i[o]).beforeBrush && h.beforeBrush(), h.innerBeforeBrush(), ys(t, h, s, o === a - 1), 
                    h.innerAfterBrush(), h.afterBrush && h.afterBrush(), s.prevEl = h;
                }
                for (var l = 0, u = r.length; u > l; l++) {
                    var h;
                    (h = r[l]).beforeBrush && h.beforeBrush(), h.innerBeforeBrush(), ys(t, h, s, l === u - 1), 
                    h.innerAfterBrush(), h.afterBrush && h.afterBrush(), s.prevEl = h;
                }
                e.clearTemporalDisplayables(), e.notClear = !0, t.restore();
            }(t, e, n)), h && i && fs(t, n), e.innerAfterBrush(), e.afterBrush && e.afterBrush(), 
            n.prevEl = e, e.__dirty = 0, e.__isRendered = !0;
        }
    }
    function vs(e, n) {
        if ("none" === e) return null;
        var i = n.getDevicePixelRatio(), r = n.getZr(), o = "svg" === r.painter.type;
        e.dirty && Lm.delete(e);
        var a = Lm.get(e);
        if (a) return a;
        var s = c(e, {
            symbol: "rect",
            symbolSize: 1,
            symbolKeepAspect: !0,
            color: "rgba(0, 0, 0, 0.2)",
            backgroundColor: null,
            dashArrayX: 5,
            dashArrayY: 5,
            rotation: 0,
            maxTileWidth: 512,
            maxTileHeight: 512
        });
        "none" === s.backgroundColor && (s.backgroundColor = null);
        var l = {
            repeat: "repeat"
        };
        return function(e) {
            for (var n = [ i ], a = !0, l = 0; l < Rm.length; ++l) {
                var u = s[Rm[l]], h = t(u);
                if (null != u && !S(u) && "string" !== h && "number" !== h && "boolean" !== h) {
                    a = !1;
                    break;
                }
                n.push(u);
            }
            var c;
            if (a) {
                c = n.join(",") + (o ? "-svg" : "");
                var p = Om.get(c);
                p && (o ? e.svgElement = p : e.image = p);
            }
            var f, d = ms(s.dashArrayX), g = _s(s.dashArrayY), y = function t(e) {
                if (!e || 0 === e.length) return [ [ "rect" ] ];
                if ("string" == typeof e) return [ [ e ] ];
                for (var n = !0, i = 0; i < e.length; ++i) if ("string" != typeof e[i]) {
                    n = !1;
                    break;
                }
                if (n) return t([ e ]);
                var r = [];
                for (i = 0; i < e.length; ++i) r.push("string" == typeof e[i] ? [ e[i] ] : e[i]);
                return r;
            }(s.symbol), v = xs(d), m = ws(g), _ = !o && Rh(), x = o && r.painter.createSVGElement("g"), w = function() {
                for (var t = 1, e = 0, n = v.length; n > e; ++e) t = je(t, v[e]);
                var i = 1;
                for (e = 0, n = y.length; n > e; ++e) i = je(i, y[e].length);
                t *= i;
                var r = m * v.length * y.length;
                return {
                    width: Math.max(1, Math.min(t, s.maxTileWidth)),
                    height: Math.max(1, Math.min(r, s.maxTileHeight))
                };
            }();
            _ && (_.width = w.width * i, _.height = w.height * i, f = _.getContext("2d")), function() {
                function t(t, e, n, a, l) {
                    var u = o ? 1 : i, h = ns(l, t * u, e * u, n * u, a * u, s.color, s.symbolKeepAspect);
                    o ? x.appendChild(r.painter.paintOne(h)) : gs(f, h);
                }
                f && (f.clearRect(0, 0, _.width, _.height), s.backgroundColor && (f.fillStyle = s.backgroundColor, 
                f.fillRect(0, 0, _.width, _.height)));
                for (var e = 0, n = 0; n < g.length; ++n) e += g[n];
                if (!(0 >= e)) for (var a = -m, l = 0, u = 0, h = 0; a < w.height; ) {
                    if (l % 2 == 0) {
                        for (var c = u / 2 % y.length, p = 0, v = 0, b = 0; p < 2 * w.width; ) {
                            var S = 0;
                            for (n = 0; n < d[h].length; ++n) S += d[h][n];
                            if (0 >= S) break;
                            if (v % 2 == 0) {
                                var M = .5 * (1 - s.symbolSize), T = p + d[h][v] * M, C = a + g[l] * M, A = d[h][v] * s.symbolSize, k = g[l] * s.symbolSize, I = b / 2 % y[c].length;
                                t(T, C, A, k, y[c][I]);
                            }
                            p += d[h][v], ++b, ++v === d[h].length && (v = 0);
                        }
                        ++h === d.length && (h = 0);
                    }
                    a += g[l], ++u, ++l === g.length && (l = 0);
                }
            }(), a && Om.put(c, _ || x), e.image = _, e.svgElement = x, e.svgWidth = w.width, 
            e.svgHeight = w.height;
        }(l), l.rotation = s.rotation, l.scaleX = l.scaleY = o ? 1 : 1 / i, Lm.set(e, l), 
        e.dirty = !1, l;
    }
    function ms(t) {
        if (!t || 0 === t.length) return [ [ 0, 0 ] ];
        if ("number" == typeof t) return [ [ r = Math.ceil(t), r ] ];
        for (var e = !0, n = 0; n < t.length; ++n) if ("number" != typeof t[n]) {
            e = !1;
            break;
        }
        if (e) return ms([ t ]);
        var i = [];
        for (n = 0; n < t.length; ++n) if ("number" == typeof t[n]) {
            var r = Math.ceil(t[n]);
            i.push([ r, r ]);
        } else {
            r = v(t[n], function(t) {
                return Math.ceil(t);
            });
            i.push(r.length % 2 == 1 ? r.concat(r) : r);
        }
        return i;
    }
    function _s(e) {
        if (!e || "object" == t(e) && 0 === e.length) return [ 0, 0 ];
        if ("number" == typeof e) {
            var n = Math.ceil(e);
            return [ n, n ];
        }
        var i = v(e, function(t) {
            return Math.ceil(t);
        });
        return e.length % 2 ? i.concat(i) : i;
    }
    function xs(t) {
        return v(t, function(t) {
            return ws(t);
        });
    }
    function ws(t) {
        for (var e = 0, n = 0; n < t.length; ++n) e += t[n];
        return t.length % 2 == 1 ? 2 * e : e;
    }
    function bs(t) {
        T(t) && (t = new DOMParser().parseFromString(t, "text/xml"));
        var e = t;
        for (9 === e.nodeType && (e = e.firstChild); "svg" !== e.nodeName.toLowerCase() || 1 !== e.nodeType; ) e = e.nextSibling;
        return e;
    }
    function Ss(t, e) {
        "userSpaceOnUse" === t.getAttribute("gradientUnits") && (e.global = !0);
    }
    function Ms(t, e) {
        for (var n = t.firstChild; n; ) {
            if (1 === n.nodeType && "stop" === n.nodeName.toLocaleLowerCase()) {
                var i, r = n.getAttribute("offset");
                i = r && r.indexOf("%") > 0 ? parseInt(r, 10) / 100 : r ? parseFloat(r) : 0;
                var o = {};
                Ds(n, o, o);
                var a = o.stopColor || n.getAttribute("stop-color") || "#000000";
                e.colorStops.push({
                    offset: i,
                    color: a
                });
            }
            n = n.nextSibling;
        }
    }
    function Ts(t, e) {
        t && t.__inheritedStyle && (e.__inheritedStyle || (e.__inheritedStyle = {}), c(e.__inheritedStyle, t.__inheritedStyle));
    }
    function Cs(t) {
        for (var e = Is(t), n = [], i = 0; i < e.length; i += 2) {
            var r = parseFloat(e[i]), o = parseFloat(e[i + 1]);
            n.push([ r, o ]);
        }
        return n;
    }
    function As(t, e, n, i, r) {
        var o = e, a = o.__inheritedStyle = o.__inheritedStyle || {}, s = {};
        1 === t.nodeType && (function(t, e) {
            var n = t.getAttribute("transform");
            if (n) {
                n = n.replace(/,/g, " ");
                var i = [], r = null;
                n.replace(Wm, function(t, e, n) {
                    return i.push(e, n), "";
                });
                for (var o = i.length - 1; o > 0; o -= 2) {
                    var a = i[o], s = i[o - 1], l = Is(a);
                    switch (r = r || [ 1, 0, 0, 1, 0, 0 ], s) {
                      case "translate":
                        pe(r, r, [ parseFloat(l[0]), parseFloat(l[1] || "0") ]);
                        break;

                      case "scale":
                        de(r, r, [ parseFloat(l[0]), parseFloat(l[1] || l[0]) ]);
                        break;

                      case "rotate":
                        fe(r, r, -parseFloat(l[0]) * Um);
                        break;

                      case "skewX":
                        var u = Math.tan(parseFloat(l[0]) * Um);
                        ce(r, [ 1, 0, u, 1, 0, 0 ], r);
                        break;

                      case "skewY":
                        var h = Math.tan(parseFloat(l[0]) * Um);
                        ce(r, [ 1, h, 0, 1, 0, 0 ], r);
                        break;

                      case "matrix":
                        r[0] = parseFloat(l[0]), r[1] = parseFloat(l[1]), r[2] = parseFloat(l[2]), r[3] = parseFloat(l[3]), 
                        r[4] = parseFloat(l[4]), r[5] = parseFloat(l[5]);
                    }
                }
                e.setLocalTransform(r);
            }
        }(t, e), Ds(t, a, s), i || function(t, e, n) {
            for (var i = 0; i < Nm.length; i++) {
                var r = Nm[i];
                null != (o = t.getAttribute(r)) && (e[Em[r]] = o);
            }
            for (i = 0; i < zm.length; i++) {
                var o;
                r = zm[i];
                null != (o = t.getAttribute(r)) && (n[Bm[r]] = o);
            }
        }(t, a, s)), o.style = o.style || {}, null != a.fill && (o.style.fill = ks(o, "fill", a.fill, n)), 
        null != a.stroke && (o.style.stroke = ks(o, "stroke", a.stroke, n)), y([ "lineWidth", "opacity", "fillOpacity", "strokeOpacity", "miterLimit", "fontSize" ], function(t) {
            null != a[t] && (o.style[t] = parseFloat(a[t]));
        }), y([ "lineDashOffset", "lineCap", "lineJoin", "fontWeight", "fontFamily", "fontStyle", "textAlign" ], function(t) {
            null != a[t] && (o.style[t] = a[t]);
        }), r && (o.__selfStyle = s), a.lineDash && (o.style.lineDash = v(Is(a.lineDash), function(t) {
            return parseFloat(t);
        })), ("hidden" === a.visibility || "collapse" === a.visibility) && (o.invisible = !0), 
        "none" === a.display && (o.ignore = !0);
    }
    function ks(t, e, n, i) {
        var r = n && n.match(Hm);
        if (!r) return "none" === n && (n = null), n;
        var o = H(r[1]);
        i.push([ t, e, o ]);
    }
    function Is(t) {
        return t.match(Gm) || [];
    }
    function Ds(t, e, n) {
        var i = t.getAttribute("style");
        if (i) {
            Xm.lastIndex = 0;
            for (var r; null != (r = Xm.exec(i)); ) {
                var o = r[1], a = Y(Em, o) ? Em[o] : null;
                a && (e[a] = r[2]);
                var s = Y(Bm, o) ? Bm[o] : null;
                s && (n[s] = r[2]);
            }
        }
    }
    function Ps(t, e) {
        var n = e.width / t.width, i = e.height / t.height, r = Math.min(n, i);
        return {
            scale: r,
            x: -(t.x + t.width / 2) * r + (e.x + e.width / 2),
            y: -(t.y + t.height / 2) * r + (e.y + e.height / 2)
        };
    }
    function Ls(t, e) {
        return Math.abs(t - e) < Ym;
    }
    function Os(t, e, n) {
        var i = 0, r = t[0];
        if (!r) return !1;
        for (var o = 1; o < t.length; o++) {
            var a = t[o];
            i += ii(r[0], r[1], a[0], a[1], e, n), r = a;
        }
        var s = t[0];
        return Ls(r[0], s[0]) && Ls(r[1], s[1]) || (i += ii(r[0], r[1], s[0], s[1], e, n)), 
        0 !== i;
    }
    function Rs(t, e, n) {
        for (var i = [], r = e[0], o = e[1], a = 0; a < t.length; a += 2) {
            var s = t.charCodeAt(a) - 64, l = t.charCodeAt(a + 1) - 64;
            s = s >> 1 ^ -(1 & s), l = l >> 1 ^ -(1 & l), r = s += r, o = l += o, i.push([ s / n, l / n ]);
        }
        return i;
    }
    function Es(t, e) {
        return v(_((t = function(t) {
            if (!t.UTF8Encoding) return t;
            var e = t, n = e.UTF8Scale;
            null == n && (n = 1024);
            for (var i = e.features, r = 0; r < i.length; r++) {
                var o = i[r].geometry;
                if ("Polygon" === o.type) for (var a = o.coordinates, s = 0; s < a.length; s++) a[s] = Rs(a[s], o.encodeOffsets[s], n); else if ("MultiPolygon" === o.type) for (a = o.coordinates, 
                s = 0; s < a.length; s++) for (var l = a[s], u = 0; u < l.length; u++) l[u] = Rs(l[u], o.encodeOffsets[s][u], n);
            }
            return e.UTF8Encoding = !1, e;
        }(t)).features, function(t) {
            return t.geometry && t.properties && t.geometry.coordinates.length > 0;
        }), function(t) {
            var n = t.properties, i = t.geometry, r = [];
            if ("Polygon" === i.type) {
                var o = i.coordinates;
                r.push({
                    type: "polygon",
                    exterior: o[0],
                    interiors: o.slice(1)
                });
            }
            "MultiPolygon" === i.type && y(o = i.coordinates, function(t) {
                t[0] && r.push({
                    type: "polygon",
                    exterior: t[0],
                    interiors: t.slice(1)
                });
            });
            var a = new Zm(n[e || "name"], r, n.cp);
            return a.properties = n, a;
        });
    }
    function Ns(t) {
        for (var e, n = 0; n < t.length; n++) {
            var i = t[n].getBoundingRect();
            (e = e || i.clone()).union(i);
        }
        return e;
    }
    function Bs(t) {
        return function() {
            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
            return this.isDisposed() ? void 0 : Fs(this, t, e);
        };
    }
    function zs(t) {
        return function() {
            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
            return Fs(this, t, e);
        };
    }
    function Fs(t, e, n) {
        return n[0] = n[0] && n[0].toLowerCase(), Yh.prototype[e].apply(t, n);
    }
    function Vs(t) {
        sx[t] = !1;
    }
    function Hs(t) {
        return ax[function(t, e) {
            return t.getAttribute ? t.getAttribute(e) : t[e];
        }(t, hx)];
    }
    function Gs(t, e) {
        rx[t] = e;
    }
    function Ws(t) {
        d_(tx, t) < 0 && tx.push(t);
    }
    function Us(t, e) {
        $s(Q_, t, e, y_);
    }
    function Xs(t) {
        d_(ex, t) < 0 && t && ex.push(t);
    }
    function Ys(t) {
        d_(nx, t) < 0 && t && nx.push(t);
    }
    function qs(t, e, n) {
        "function" == typeof e && (n = e, e = "");
        var i = f_(t) ? t.type : [ t, t = {
            event: e
        } ][0];
        t.event = (t.event || i).toLowerCase(), e = t.event, J_[e] || (h_(S_.test(i) && S_.test(e)), 
        $_[i] || ($_[i] = {
            action: n,
            actionInfo: t
        }), J_[e] = i);
    }
    function js(t, e) {
        Zy.register(t, e);
    }
    function Zs(t, e) {
        $s(ix, t, e, v_, "layout");
    }
    function Ks(t, e) {
        $s(ix, t, e, m_, "visual");
    }
    function $s(t, e, n, i, r) {
        if ((p_(e) || f_(e)) && (n = e, e = i), !(d_(px, n) >= 0)) {
            px.push(n);
            var o = Fv.wrapStageHandler(n, r);
            o.__prio = e, o.__raw = n, t.push(o);
        }
    }
    function Js(t, e) {
        ox[t] = e;
    }
    function Qs(t, e, n) {
        u_.registerMap(t, e, n);
    }
    function tl(t) {
        return null == t ? 0 : t.length || 1;
    }
    function el(t) {
        return t;
    }
    function nl(t, e) {
        return t.hasOwnProperty(e) || (t[e] = []), t[e];
    }
    function il(t, e, n) {
        function i(t, e, n) {
            null != Ty.get(e) ? t.otherDims[e] = n : (t.coordDim = e, t.coordDimIndex = n, a.set(e, !0));
        }
        Vo(e) || (e = Go(e)), n = n || {}, t = (t || []).slice();
        for (var r = (n.dimsDef || []).slice(), o = U(), a = U(), l = [], u = function(t, e, n, i) {
            var r = Math.max(t.dimensionsDetectedCount || 1, e.length, n.length, i || 0);
            return y(e, function(t) {
                var e;
                k(t) && (e = t.dimsDef) && (r = Math.max(r, e.length));
            }), r;
        }(e, t, r, n.dimCount), p = 0; u > p; p++) {
            var f = r[p], d = r[p] = h({}, k(f) ? f : {
                name: f
            }), g = d.name, v = l[p] = new Dx();
            null != g && null == o.get(g) && (v.name = v.displayName = g, o.set(g, p)), null != d.type && (v.type = d.type), 
            null != d.displayName && (v.displayName = d.displayName);
        }
        var m = n.encodeDef;
        !m && n.encodeDefaulter && (m = n.encodeDefaulter(e, u));
        var _ = U(m);
        _.each(function(t, e) {
            var n = Ke(t).slice();
            if (1 === n.length && !T(n[0]) && n[0] < 0) _.set(e, !1); else {
                var r = _.set(e, []);
                y(n, function(t, n) {
                    var a = T(t) ? o.get(t) : t;
                    null != a && u > a && (r[n] = a, i(l[a], e, n));
                });
            }
        });
        var x = 0;
        y(t, function(t) {
            var e, n, r, o;
            if (T(t)) e = t, o = {}; else {
                e = (o = t).name;
                var a = o.ordinalMeta;
                o.ordinalMeta = null, (o = s(o)).ordinalMeta = a, n = o.dimsDef, r = o.otherDims, 
                o.name = o.coordDim = o.coordDimIndex = o.dimsDef = o.otherDims = null;
            }
            var u = _.get(e);
            if (!1 !== u) {
                if (!(u = Ke(u)).length) for (var h = 0; h < (n && n.length || 1); h++) {
                    for (;x < l.length && null != l[x].coordDim; ) x++;
                    x < l.length && u.push(x++);
                }
                y(u, function(t, a) {
                    var s = l[t];
                    if (i(c(s, o), e, a), null == s.name && n) {
                        var u = n[a];
                        !k(u) && (u = {
                            name: u
                        }), s.name = s.displayName = u.name, s.defaultTooltip = u.defaultTooltip;
                    }
                    r && c(s.otherDims, r);
                });
            }
        });
        var w = n.generateCoord, b = n.generateCoordCount, S = null != b;
        b = w ? b || 1 : 0;
        for (var M = w || "value", C = 0; u > C; C++) {
            null == (v = l[C] = l[C] || new Dx()).coordDim && (v.coordDim = rl(M, a, S), v.coordDimIndex = 0, 
            (!w || 0 >= b) && (v.isExtraCoord = !0), b--), null == v.name && (v.name = rl(v.coordDim, o, !1)), 
            null != v.type || wo(e, C) !== Ry.Must && (!v.isExtraCoord || null == v.otherDims.itemName && null == v.otherDims.seriesName) || (v.type = "ordinal");
        }
        return l;
    }
    function rl(t, e, n) {
        if (n || null != e.get(t)) {
            for (var i = 0; null != e.get(t + i); ) i++;
            t += i;
        }
        return e.set(t, !0), t;
    }
    function ol(t, e) {
        return il((e = e || {}).coordDimensions || [], t, {
            dimsDef: e.dimensionsDefine || t.dimensionsDefine,
            encodeDef: e.encodeDefine || t.encodeDefine,
            dimCount: e.dimensionsCount,
            encodeDefaulter: e.encodeDefaulter,
            generateCoord: e.generateCoord,
            generateCoordCount: e.generateCoordCount
        });
    }
    function al(t) {
        return "category" === t.get("type");
    }
    function sl(t, e, n) {
        var i, r, o, a, s = (n = n || {}).byIndex, l = n.stackedCoordDimension, u = !(!t || !t.get("stack"));
        if (y(e, function(t, n) {
            T(t) && (e[n] = t = {
                name: t
            }), u && !t.isExtraCoord && (s || i || !t.ordinalMeta || (i = t), r || "ordinal" === t.type || "time" === t.type || l && l !== t.coordDim || (r = t));
        }), !r || s || i || (s = !0), r) {
            o = "__\0ecstackresult", a = "__\0ecstackedover", i && (i.createInvertedIndices = !0);
            var h = r.coordDim, c = r.type, p = 0;
            y(e, function(t) {
                t.coordDim === h && p++;
            }), e.push({
                name: o,
                coordDim: h,
                coordDimIndex: p,
                type: c,
                isExtraCoord: !0,
                isCalculationCoord: !0
            }), p++, e.push({
                name: a,
                coordDim: a,
                coordDimIndex: p,
                type: c,
                isExtraCoord: !0,
                isCalculationCoord: !0
            });
        }
        return {
            stackedDimension: r && r.name,
            stackedByDimension: i && i.name,
            isStackedByIndex: s,
            stackedOverDimension: a,
            stackResultDimension: o
        };
    }
    function ll(t, e) {
        return !!e && e === t.getCalculationInfo("stackedDimension");
    }
    function ul(t, e) {
        return ll(t, e) ? t.getCalculationInfo("stackResultDimension") : e;
    }
    function hl(t, e, n) {
        n = n || {}, Vo(t) || (t = Go(t));
        var i, r = e.get("coordinateSystem"), o = Zy.get(r), a = function(t) {
            var e = t.get("coordinateSystem"), n = new Gx(e), i = Wx[e];
            return i ? (i(t, n, n.axisMap, n.categoryAxisMap), n) : void 0;
        }(e);
        a && a.coordSysDims && (i = v(a.coordSysDims, function(t) {
            var e = {
                name: t
            }, n = a.axisMap.get(t);
            if (n) {
                var i = n.get("type");
                e.type = function(t) {
                    return "category" === t ? "ordinal" : "time" === t ? "time" : "float";
                }(i);
            }
            return e;
        })), i || (i = o && (o.getDimensionsInfo ? o.getDimensionsInfo() : o.dimensions.slice()) || [ "x", "y" ]);
        var s, l, u = n.useEncodeDefaulter, h = ol(t, {
            coordDimensions: i,
            generateCoord: n.generateCoord,
            encodeDefaulter: M(u) ? u : u ? b(_o, i, e) : null
        });
        a && y(h, function(t, e) {
            var i = t.coordDim, r = a.categoryAxisMap.get(i);
            r && (null == s && (s = e), t.ordinalMeta = r.getOrdinalMeta(), n.createInvertedIndices && (t.createInvertedIndices = !0)), 
            null != t.otherDims.itemName && (l = !0);
        }), l || null == s || (h[s].otherDims.itemName = 0);
        var c = sl(e, h), p = new Hx(h, e);
        p.setCalculationInfo(c);
        var f = null != s && function(t) {
            if (t.sourceFormat === Cy) {
                var e = function(t) {
                    for (var e = 0; e < t.length && null == t[e]; ) e++;
                    return t[e];
                }(t.data || []);
                return null != e && !S(Je(e));
            }
        }(t) ? function(t, e, n, i) {
            return i === s ? n : this.defaultDimValueGetter(t, e, n, i);
        } : null;
        return p.hasItemOption = !1, p.initData(t, null, f), p;
    }
    function cl(t) {
        return k(t) && null != t.value ? t.value : t + "";
    }
    function pl(t, e, n, i) {
        var r = {}, o = t[1] - t[0], a = r.interval = Ue(o / e, !0);
        null != n && n > a && (a = r.interval = n), null != i && a > i && (a = r.interval = i);
        var s = r.intervalPrecision = fl(a);
        return function(t, e) {
            !isFinite(t[0]) && (t[0] = e[0]), !isFinite(t[1]) && (t[1] = e[1]), dl(t, 0, e), 
            dl(t, 1, e), t[0] > t[1] && (t[0] = t[1]);
        }(r.niceTickExtent = [ Yx(Math.ceil(t[0] / a) * a, s), Yx(Math.floor(t[1] / a) * a, s) ], t), 
        r;
    }
    function fl(t) {
        return Ee(t) + 2;
    }
    function dl(t, e, n) {
        t[e] = Math.max(Math.min(t[e], n[1]), n[0]);
    }
    function gl(t, e) {
        return t >= e[0] && t <= e[1];
    }
    function yl(t, e) {
        return e[1] === e[0] ? .5 : (t - e[0]) / (e[1] - e[0]);
    }
    function vl(t, e) {
        return t * (e[1] - e[0]) + e[0];
    }
    function ml(t) {
        return t.get("stack") || Kx + t.seriesIndex;
    }
    function _l(t) {
        return t.dim + t.index;
    }
    function xl(t) {
        var e = function(t) {
            var e = {};
            y(t, function(t) {
                var n = t.coordinateSystem.getBaseAxis();
                if ("time" === n.type || "value" === n.type) for (var i = t.getData(), r = n.dim + "_" + n.index, o = i.mapDimension(n.dim), a = 0, s = i.count(); s > a; ++a) {
                    var l = i.get(o, a);
                    e[r] ? e[r].push(l) : e[r] = [ l ];
                }
            });
            var n = {};
            for (var i in e) if (e.hasOwnProperty(i)) {
                var r = e[i];
                if (r) {
                    r.sort(function(t, e) {
                        return t - e;
                    });
                    for (var o = null, a = 1; a < r.length; ++a) {
                        var s = r[a] - r[a - 1];
                        s > 0 && (o = null === o ? s : Math.min(o, s));
                    }
                    n[i] = o;
                }
            }
            return n;
        }(t), n = [];
        return y(t, function(t) {
            var i, r = t.coordinateSystem.getBaseAxis(), o = r.getExtent();
            if ("category" === r.type) i = r.getBandWidth(); else if ("value" === r.type || "time" === r.type) {
                var a = r.dim + "_" + r.index, s = e[a], l = Math.abs(o[1] - o[0]), u = r.scale.getExtent(), h = Math.abs(u[1] - u[0]);
                i = s ? l / h * s : l;
            } else {
                var c = t.getData();
                i = Math.abs(o[1] - o[0]) / c.count();
            }
            var p = Le(t.get("barWidth"), i), f = Le(t.get("barMaxWidth"), i), d = Le(t.get("barMinWidth") || 1, i), g = t.get("barGap"), y = t.get("barCategoryGap");
            n.push({
                bandWidth: i,
                barWidth: p,
                barMaxWidth: f,
                barMinWidth: d,
                barGap: g,
                barCategoryGap: y,
                axisKey: _l(r),
                stackId: ml(t)
            });
        }), function(t) {
            var e = {};
            y(t, function(t) {
                var n = t.axisKey, i = t.bandWidth, r = e[n] || {
                    bandWidth: i,
                    remainedWidth: i,
                    autoWidthCount: 0,
                    categoryGap: null,
                    gap: "20%",
                    stacks: {}
                }, o = r.stacks;
                e[n] = r;
                var a = t.stackId;
                o[a] || r.autoWidthCount++, o[a] = o[a] || {
                    width: 0,
                    maxWidth: 0
                };
                var s = t.barWidth;
                s && !o[a].width && (o[a].width = s, s = Math.min(r.remainedWidth, s), r.remainedWidth -= s);
                var l = t.barMaxWidth;
                l && (o[a].maxWidth = l);
                var u = t.barMinWidth;
                u && (o[a].minWidth = u);
                var h = t.barGap;
                null != h && (r.gap = h);
                var c = t.barCategoryGap;
                null != c && (r.categoryGap = c);
            });
            var n = {};
            return y(e, function(t, e) {
                n[e] = {};
                var i = t.stacks, r = t.bandWidth, o = t.categoryGap;
                if (null == o) {
                    var a = w(i).length;
                    o = Math.max(35 - 4 * a, 15) + "%";
                }
                var s = Le(o, r), l = Le(t.gap, 1), u = t.remainedWidth, h = t.autoWidthCount, c = (u - s) / (h + (h - 1) * l);
                c = Math.max(c, 0), y(i, function(t) {
                    var e = t.maxWidth, n = t.minWidth;
                    if (t.width) {
                        var i = t.width;
                        e && (i = Math.min(i, e)), n && (i = Math.max(i, n)), t.width = i, u -= i + l * i, 
                        h--;
                    } else {
                        i = c;
                        e && i > e && (i = Math.min(e, u)), n && n > i && (i = n), i !== c && (t.width = i, 
                        u -= i + l * i, h--);
                    }
                }), c = (u - s) / (h + (h - 1) * l), c = Math.max(c, 0);
                var p, f = 0;
                y(i, function(t) {
                    t.width || (t.width = c), p = t, f += t.width * (1 + l);
                }), p && (f -= p.width * l);
                var d = -f / 2;
                y(i, function(t, i) {
                    n[e][i] = n[e][i] || {
                        bandWidth: r,
                        offset: d,
                        width: t.width
                    }, d += t.width * (1 + l);
                });
            }), n;
        }(n);
    }
    function wl(t, e, n) {
        if (t && e) {
            var i = t[_l(e)];
            return null != i && null != n ? i[ml(n)] : i;
        }
    }
    function bl(t) {
        return t.coordinateSystem && "cartesian2d" === t.coordinateSystem.type;
    }
    function Sl(t) {
        return t.pipelineContext && t.pipelineContext.large;
    }
    function Ml(t) {
        return (t /= iy) > 16 ? 16 : t > 7.5 ? 7 : t > 3.5 ? 4 : t > 1.5 ? 2 : 1;
    }
    function Tl(t) {
        return (t /= 30 * iy) > 6 ? 6 : t > 3 ? 3 : t > 2 ? 2 : 1;
    }
    function Cl(t) {
        return (t /= ny) > 12 ? 12 : t > 6 ? 6 : t > 3.5 ? 4 : t > 2 ? 2 : 1;
    }
    function Al(t, e) {
        return (t /= e ? ey : ty) > 30 ? 30 : t > 20 ? 20 : t > 15 ? 15 : t > 10 ? 10 : t > 5 ? 5 : t > 2 ? 2 : 1;
    }
    function kl(t) {
        return Ue(t, !0);
    }
    function Il(t, e, n) {
        var i = new Date(t);
        switch (Ur(e)) {
          case "year":
          case "month":
            i[io(n)](0);

          case "day":
            i[ro(n)](1);

          case "hour":
            i[oo(n)](0);

          case "minute":
            i[ao(n)](0);

          case "second":
            i[so(n)](0), i[lo(n)](0);
        }
        return i.getTime();
    }
    function Dl(t, e, n, i) {
        function r(t, e, n, r, o, a, s) {
            for (var l = new Date(e), u = e, h = l[r](); n > u && u <= i[1]; ) s.push({
                value: u
            }), h += t, l[o](h), u = l.getTime();
            s.push({
                value: u,
                notAdd: !0
            });
        }
        function o(t, o, a) {
            var s = [], l = !o.length;
            if (!function(t, e, n, i) {
                var r = He(e), o = He(n), a = function(t) {
                    return jr(r, t, i) === jr(o, t, i);
                }, s = function() {
                    return a("year");
                }, l = function() {
                    return s() && a("month");
                }, u = function() {
                    return l() && a("day");
                }, h = function() {
                    return u() && a("hour");
                }, c = function() {
                    return h() && a("minute");
                }, p = function() {
                    return c() && a("second");
                };
                switch (t) {
                  case "year":
                    return s();

                  case "month":
                    return l();

                  case "day":
                    return u();

                  case "hour":
                    return h();

                  case "minute":
                    return c();

                  case "second":
                    return p();

                  case "millisecond":
                    return p() && a("millisecond");
                }
            }(Ur(t), i[0], i[1], n)) {
                l && (o = [ {
                    value: Il(new Date(i[0]), t, n)
                }, {
                    value: i[1]
                } ]);
                for (var u = 0; u < o.length - 1; u++) {
                    var h = o[u].value, c = o[u + 1].value;
                    if (h !== c) {
                        var p = void 0, f = void 0, d = void 0;
                        switch (t) {
                          case "year":
                            p = Math.max(1, Math.round(e / iy / 365)), f = Zr(n), d = no(n);
                            break;

                          case "half-year":
                          case "quarter":
                          case "month":
                            p = Tl(e), f = Kr(n), d = io(n);
                            break;

                          case "week":
                          case "half-week":
                          case "day":
                            p = Ml(e), f = $r(n), d = ro(n), !0;
                            break;

                          case "half-day":
                          case "quarter-day":
                          case "hour":
                            p = Cl(e), f = Jr(n), d = oo(n);
                            break;

                          case "minute":
                            p = Al(e, !0), f = Qr(n), d = ao(n);
                            break;

                          case "second":
                            p = Al(e, !1), f = to(n), d = so(n);
                            break;

                          case "millisecond":
                            p = kl(e), f = eo(n), d = lo(n);
                        }
                        r(p, h, c, f, d, 0, s), "year" === t && a.length > 1 && 0 === u && a.unshift({
                            value: a[0].value - p
                        });
                    }
                }
                for (u = 0; u < s.length; u++) a.push(s[u]);
                return s;
            }
        }
        for (var a = uy, s = 0, l = [], u = [], h = 0, c = 0, p = 0; p < a.length && s++ < 1e4; ++p) {
            var f = Ur(a[p]);
            if (Xr(a[p])) if (o(a[p], l[l.length - 1] || [], u), f !== (a[p + 1] ? Ur(a[p + 1]) : null)) {
                if (u.length) {
                    c = h, u.sort(function(t, e) {
                        return t.value - e.value;
                    });
                    for (var d = [], g = 0; g < u.length; ++g) {
                        var y = u[g].value;
                        (0 === g || u[g - 1].value !== y) && (d.push(u[g]), y >= i[0] && y <= i[1] && h++);
                    }
                    var m = (i[1] - i[0]) / e;
                    if (h > 1.5 * m && c > m / 1.5) break;
                    if (l.push(d), h > m || t === a[p]) break;
                }
                u = [];
            }
        }
        var x = _(v(l, function(t) {
            return _(t, function(t) {
                return t.value >= i[0] && t.value <= i[1] && !t.notAdd;
            });
        }), function(t) {
            return t.length > 0;
        }), w = [], b = x.length - 1;
        for (p = 0; p < x.length; ++p) for (var S = x[p], M = 0; M < S.length; ++M) w.push({
            value: S[M].value,
            level: b - p
        });
        w.sort(function(t, e) {
            return t.value - e.value;
        });
        var T = [];
        for (p = 0; p < w.length; ++p) (0 === p || w[p].value !== w[p - 1].value) && T.push(w[p]);
        return T;
    }
    function Pl(t, e) {
        return nw(t, Ee(e));
    }
    function Ll(t, e) {
        return null == e ? null : R(e) ? NaN : t.parse(e);
    }
    function Ol(t, e) {
        var n = t.type, i = function(t, e, n) {
            var i = t.rawExtentInfo;
            return i || (i = new uw(t, e, n), t.rawExtentInfo = i, i);
        }(t, e, t.getExtent()).calculate();
        t.setBlank(i.isBlank);
        var r = i.min, o = i.max, a = e.ecModel;
        if (a && "time" === n) {
            var s = function(t, e) {
                var n = [];
                return e.eachSeriesByType(t, function(t) {
                    bl(t) && !Sl(t) && n.push(t);
                }), n;
            }("bar", a), l = !1;
            if (y(s, function(t) {
                l = l || t.getBaseAxis() === e.axis;
            }), l) {
                var u = xl(s), h = function(t, e, n, i) {
                    var r = n.axis.getExtent(), o = r[1] - r[0], a = wl(i, n.axis);
                    if (void 0 === a) return {
                        min: t,
                        max: e
                    };
                    var s = 1 / 0;
                    y(a, function(t) {
                        s = Math.min(t.offset, s);
                    });
                    var l = -1 / 0;
                    y(a, function(t) {
                        l = Math.max(t.offset + t.width, l);
                    }), s = Math.abs(s), l = Math.abs(l);
                    var u = s + l, h = e - t, c = h / (1 - (s + l) / o) - h;
                    return {
                        min: t -= c * (s / u),
                        max: e += c * (l / u)
                    };
                }(r, o, e, u);
                r = h.min, o = h.max;
            }
        }
        return {
            extent: [ r, o ],
            fixMin: i.minFixed,
            fixMax: i.maxFixed
        };
    }
    function Rl(t, e) {
        var n = Ol(t, e), i = n.extent, r = e.get("splitNumber");
        t instanceof sw && (t.base = e.get("logBase"));
        var o = t.type;
        t.setExtent(i[0], i[1]), t.niceExtent({
            splitNumber: r,
            fixMin: n.fixMin,
            fixMax: n.fixMax,
            minInterval: "interval" === o || "time" === o ? e.get("minInterval") : null,
            maxInterval: "interval" === o || "time" === o ? e.get("maxInterval") : null
        });
        var a = e.get("interval");
        null != a && t.setInterval && t.setInterval(a);
    }
    function El(t, e) {
        if (e = e || t.get("type")) switch (e) {
          case "category":
            return new qx({
                ordinalMeta: t.getOrdinalMeta ? t.getOrdinalMeta() : t.getCategories(),
                extent: [ 1 / 0, -1 / 0 ]
            });

          case "time":
            return new Jx({
                locale: t.ecModel.getLocaleModel(),
                useUTC: t.ecModel.get("useUTC")
            });

          default:
            return new (Ux.getClass(e) || Zx)();
        }
    }
    function Nl(t) {
        var e = t.getLabelModel().get("formatter"), n = "category" === t.type ? t.scale.getExtent()[0] : null;
        return "time" === t.scale.type ? function(e) {
            return function(n, i) {
                return t.scale.getFormattedLabel(n, i, e);
            };
        }(e) : "string" == typeof e ? function(e) {
            return function(n) {
                var i = t.scale.getLabel(n);
                return e.replace("{value}", null != i ? i : "");
            };
        }(e) : "function" == typeof e ? function(e) {
            return function(i, r) {
                return null != n && (r = i.value - n), e(Bl(t, i), r, null != i.level ? {
                    level: i.level
                } : null);
            };
        }(e) : function(e) {
            return t.scale.getLabel(e);
        };
    }
    function Bl(t, e) {
        return "category" === t.type ? t.scale.getLabel(e) : e.value;
    }
    function zl(t, e) {
        var n = e * Math.PI / 180, i = t.width, r = t.height, o = i * Math.abs(Math.cos(n)) + Math.abs(r * Math.sin(n)), a = i * Math.abs(Math.sin(n)) + Math.abs(r * Math.cos(n));
        return new lp(t.x, t.y, o, a);
    }
    function Fl(t) {
        var e = t.get("interval");
        return null == e ? "auto" : e;
    }
    function Vl(t) {
        return "category" === t.type && 0 === Fl(t.getLabelModel());
    }
    function Hl(t, e) {
        var n = {};
        return y(t.mapDimensionsAll(e), function(e) {
            n[ul(t, e)] = !0;
        }), w(n);
    }
    function Gl(t) {
        return S(t) ? void y(t, function(t) {
            Gl(t);
        }) : void (p(gw, t) >= 0 || (gw.push(t), M(t) && (t = {
            install: t
        }), t.install(yw)));
    }
    function Wl(t) {
        return "category" === t.type ? function(t) {
            var e = t.getLabelModel(), n = Xl(t, e);
            return !e.get("show") || t.scale.isBlank() ? {
                labels: [],
                labelCategoryInterval: n.labelCategoryInterval
            } : n;
        }(t) : function(t) {
            var e = t.scale.getTicks(), n = Nl(t);
            return {
                labels: v(e, function(e, i) {
                    return {
                        formattedLabel: n(e, i),
                        rawLabel: t.scale.getLabel(e),
                        tickValue: e.value
                    };
                })
            };
        }(t);
    }
    function Ul(t, e) {
        return "category" === t.type ? function(t, e) {
            var n, i, r = Yl(t, "ticks"), o = Fl(e), a = ql(r, o);
            if (a) return a;
            if ((!e.get("show") || t.scale.isBlank()) && (n = []), M(o)) n = Kl(t, o, !0); else if ("auto" === o) {
                var s = Xl(t, t.getLabelModel());
                i = s.labelCategoryInterval, n = v(s.labels, function(t) {
                    return t.tickValue;
                });
            } else n = Zl(t, i = o, !0);
            return jl(r, o, {
                ticks: n,
                tickCategoryInterval: i
            });
        }(t, e) : {
            ticks: v(t.scale.getTicks(), function(t) {
                return t.value;
            })
        };
    }
    function Xl(t, e) {
        var n, i, r = Yl(t, "labels"), o = Fl(e), a = ql(r, o);
        return a || (M(o) ? n = Kl(t, o) : (i = "auto" === o ? function(t) {
            var e = bw(t).autoInterval;
            return null != e ? e : bw(t).autoInterval = t.calculateCategoryInterval();
        }(t) : o, n = Zl(t, i)), jl(r, o, {
            labels: n,
            labelCategoryInterval: i
        }));
    }
    function Yl(t, e) {
        return bw(t)[e] || (bw(t)[e] = []);
    }
    function ql(t, e) {
        for (var n = 0; n < t.length; n++) if (t[n].key === e) return t[n].value;
    }
    function jl(t, e, n) {
        return t.push({
            key: e,
            value: n
        }), n;
    }
    function Zl(t, e, n) {
        function i(t) {
            var e = {
                value: t
            };
            l.push(n ? t : {
                formattedLabel: r(e),
                rawLabel: o.getLabel(e),
                tickValue: t
            });
        }
        var r = Nl(t), o = t.scale, a = o.getExtent(), s = t.getLabelModel(), l = [], u = Math.max((e || 0) + 1, 1), h = a[0], c = o.count();
        0 !== h && u > 1 && c / u > 2 && (h = Math.round(Math.ceil(h / u) * u));
        var p = Vl(t), f = s.get("showMinLabel") || p, d = s.get("showMaxLabel") || p;
        f && h !== a[0] && i(a[0]);
        for (var g = h; g <= a[1]; g += u) i(g);
        return d && g - u !== a[1] && i(a[1]), l;
    }
    function Kl(t, e, n) {
        var i = t.scale, r = Nl(t), o = [];
        return y(i.getTicks(), function(t) {
            var a = i.getLabel(t), s = t.value;
            e(t.value, a) && o.push(n ? s : {
                formattedLabel: r(t),
                rawLabel: a,
                tickValue: s
            });
        }), o;
    }
    function $l(t, e) {
        var n = (t[1] - t[0]) / e / 2;
        t[0] += n, t[1] -= n;
    }
    function Jl() {
        return !1;
    }
    function Ql(t, e, n) {
        var i = Rh(), r = e.getWidth(), o = e.getHeight(), a = i.style;
        return a && (a.position = "absolute", a.left = "0", a.top = "0", a.width = r + "px", 
        a.height = o + "px", i.setAttribute("data-zr-dom-id", t)), i.width = r * n, i.height = o * n, 
        i;
    }
    function tu(t) {
        return parseInt(t, 10);
    }
    function eu(t) {
        t.eachSeriesByType("radar", function(t) {
            var e = t.getData(), n = [], i = t.coordinateSystem;
            if (i) {
                var r = i.getIndicatorAxes();
                y(r, function(t, o) {
                    e.each(e.mapDimension(r[o].dim), function(t, e) {
                        n[e] = n[e] || [];
                        var r = i.dataToPoint(t, o);
                        n[e][o] = nu(r) ? r : iu(i);
                    });
                }), e.each(function(t) {
                    var r = x(n[t], function(t) {
                        return nu(t);
                    }) || iu(i);
                    n[t].push(r.slice()), e.setItemLayout(t, n[t]);
                });
            }
        });
    }
    function nu(t) {
        return !isNaN(t[0]) && !isNaN(t[1]);
    }
    function iu(t) {
        return [ t.cx, t.cy ];
    }
    function ru(t) {
        var e = t.polar;
        if (e) {
            S(e) || (e = [ e ]);
            var n = [];
            y(e, function(e) {
                e.indicator ? (e.type && !e.shape && (e.shape = e.type), t.radar = t.radar || [], 
                S(t.radar) || (t.radar = [ t.radar ]), t.radar.push(e)) : n.push(e);
            }), t.polar = n;
        }
        y(t.series, function(t) {
            t && "radar" === t.type && t.polarIndex && (t.radarIndex = t.polarIndex);
        });
    }
    function ou(t, e, n) {
        e = S(e) && {
            coordDimensions: e
        } || h({}, e);
        var i = t.getSource(), r = ol(i, e), o = new Hx(r, t);
        return o.initData(i, n), o;
    }
    function au(t, e) {
        return c({
            show: e
        }, t);
    }
    function su(t) {
        t && (t.ignore = !0);
    }
    function lu(t, e) {
        var n = t && t.getBoundingRect().clone(), i = e && e.getBoundingRect().clone();
        if (n && i) {
            var r = ue([]);
            return fe(r, r, -t.rotation), n.applyTransform(ce([], r, t.getLocalTransform())), 
            i.applyTransform(ce([], r, e.getLocalTransform())), n.intersect(i);
        }
    }
    function uu(t) {
        return "middle" === t || "center" === t;
    }
    function hu(t, e, n, i, r) {
        for (var o = [], a = [], s = [], l = 0; l < t.length; l++) {
            var u = t[l].coord;
            a[0] = u, a[1] = 0, s[0] = u, s[1] = n, e && (ot(a, a, e), ot(s, s, e));
            var h = new lg({
                subPixelOptimize: !0,
                shape: {
                    x1: a[0],
                    y1: a[1],
                    x2: s[0],
                    y2: s[1]
                },
                style: i,
                z2: 2,
                autoBatch: !0,
                silent: !0
            });
            h.anid = r + "_" + t[l].tickValue, o.push(h);
        }
        return o;
    }
    function cu(t) {
        t.registerCoordinateSystem("radar", Xw), t.registerComponentModel(zw), t.registerComponentView(Ww), 
        t.registerVisual({
            seriesType: "radar",
            reset: function(t) {
                var e = t.getData();
                e.each(function(t) {
                    e.setItemVisual(t, "legendIcon", "roundRect");
                }), e.setVisual("legendIcon", "roundRect");
            }
        });
    }
    function pu(t, e) {
        var n = null == t ? "" : t + "";
        return e && ("string" == typeof e ? n = e.replace("{value}", n) : "function" == typeof e && (n = e(t))), 
        n;
    }
    function fu(t, e, i, r) {
        y(eb, function(o, a) {
            var s = l(l({}, Nw[a], !0), r, !0), u = function(t) {
                function i() {
                    for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i];
                    var r = t.apply(this, n) || this;
                    return r.type = e + "Axis." + a, r;
                }
                return n(i, t), i.prototype.mergeDefaultAndTheme = function(t, e) {
                    var n = yo(this), i = n ? mo(t) : {};
                    l(t, e.getTheme().get(a + "Axis")), l(t, this.getDefaultOption()), t.type = du(t), 
                    n && vo(t, i, n);
                }, i.prototype.optionUpdated = function() {
                    "category" === this.option.type && (this.__ordinalMeta = Xx.createByAxisModel(this));
                }, i.prototype.getCategories = function(t) {
                    var e = this.option;
                    return "category" === e.type ? t ? e.data : this.__ordinalMeta.categories : void 0;
                }, i.prototype.getOrdinalMeta = function() {
                    return this.__ordinalMeta;
                }, i.type = e + "Axis." + a, i.defaultOption = s, i;
            }(i);
            t.registerComponentModel(u);
        }), t.registerSubTypeDefaulter(e + "Axis", du);
    }
    function du(t) {
        return t.type || (t.data ? "category" : "value");
    }
    function gu(t) {
        return "interval" === t.type || "time" === t.type;
    }
    function yu(t, e, n) {
        n = n || {};
        var i = t.coordinateSystem, r = e.axis, o = {}, a = r.getAxesOnZeroOf()[0], s = r.position, l = a ? "onZero" : s, u = r.dim, h = i.getRect(), c = [ h.x, h.x + h.width, h.y, h.y + h.height ], p = {
            left: 0,
            right: 1,
            top: 0,
            bottom: 1,
            onZero: 2
        }, f = e.get("offset") || 0, d = "x" === u ? [ c[2] - f, c[3] + f ] : [ c[0] - f, c[1] + f ];
        if (a) {
            var g = a.toGlobalCoord(a.dataToCoord(0));
            d[p.onZero] = Math.max(Math.min(g, d[1]), d[0]);
        }
        o.position = [ "y" === u ? d[p[l]] : c[0], "x" === u ? d[p[l]] : c[3] ], o.rotation = Math.PI / 2 * ("x" === u ? 0 : 1);
        o.labelDirection = o.tickDirection = o.nameDirection = {
            top: -1,
            bottom: 1,
            left: -1,
            right: 1
        }[s], o.labelOffset = a ? d[p[s]] - d[p.onZero] : 0, e.get([ "axisTick", "inside" ]) && (o.tickDirection = -o.tickDirection), 
        E(n.labelInside, e.get([ "axisLabel", "inside" ])) && (o.labelDirection = -o.labelDirection);
        var y = e.get([ "axisLabel", "rotate" ]);
        return o.labelRotate = "top" === l ? -y : y, o.z2 = 1, o;
    }
    function vu(t) {
        return "cartesian2d" === t.get("coordinateSystem");
    }
    function mu(t) {
        var e = {
            xAxisModel: null,
            yAxisModel: null
        };
        return y(e, function(n, i) {
            var r = i.replace(/Model$/, ""), o = t.getReferringComponents(r, Pp).models[0];
            e[i] = o;
        }), e;
    }
    function _u(t, e) {
        return t.getCoordSysModel() === e;
    }
    function xu(t, e, n, i) {
        function r(t) {
            return t.dim + "_" + t.index;
        }
        n.getAxesOnZeroOf = function() {
            return o ? [ o ] : [];
        };
        var o, a = t[e], s = n.model, l = s.get([ "axisLine", "onZero" ]), u = s.get([ "axisLine", "onZeroAxisIndex" ]);
        if (l) {
            if (null != u) wu(a[u]) && (o = a[u]); else for (var h in a) if (a.hasOwnProperty(h) && wu(a[h]) && !i[r(a[h])]) {
                o = a[h];
                break;
            }
            o && (i[r(o)] = !0);
        }
    }
    function wu(t) {
        return t && "category" !== t.type && "time" !== t.type && function(t) {
            var e = t.scale.getExtent(), n = e[0], i = e[1];
            return !(n > 0 && i > 0 || 0 > n && 0 > i);
        }(t);
    }
    function bu(t, e) {
        var n = {
            axesInfo: {},
            seriesInvolved: !1,
            coordSysAxesInfo: {},
            coordSysMap: {}
        };
        return function(t, e, n) {
            var i = e.getComponent("tooltip"), r = e.getComponent("axisPointer"), o = r.get("link", !0) || [], a = [];
            y(n.getCoordinateSystems(), function(n) {
                function s(i, s, l) {
                    var c = l.model.getModel("axisPointer", r), p = c.get("show");
                    if (p && ("auto" !== p || i || Au(c))) {
                        null == s && (s = c.get("triggerTooltip"));
                        var f = (c = i ? Su(l, h, r, e, i, s) : c).get("snap"), d = ku(l.model), g = s || f || "category" === l.type, y = t.axesInfo[d] = {
                            key: d,
                            axis: l,
                            coordSys: n,
                            axisPointerModel: c,
                            triggerTooltip: s,
                            involveSeries: g,
                            snap: f,
                            useHandle: Au(c),
                            seriesModels: [],
                            linkGroup: null
                        };
                        u[d] = y, t.seriesInvolved = t.seriesInvolved || g;
                        var v = function(t, e) {
                            for (var n = e.model, i = e.dim, r = 0; r < t.length; r++) {
                                var o = t[r] || {};
                                if (Mu(o[i + "AxisId"], n.id) || Mu(o[i + "AxisIndex"], n.componentIndex) || Mu(o[i + "AxisName"], n.name)) return r;
                            }
                        }(o, l);
                        if (null != v) {
                            var m = a[v] || (a[v] = {
                                axesInfo: {}
                            });
                            m.axesInfo[d] = y, m.mapper = o[v].mapper, y.linkGroup = m;
                        }
                    }
                }
                if (n.axisPointerEnabled) {
                    var l = ku(n.model), u = t.coordSysAxesInfo[l] = {};
                    t.coordSysMap[l] = n;
                    var h = n.model.getModel("tooltip", i);
                    if (y(n.getAxes(), b(s, !1, null)), n.getTooltipAxes && i && h.get("show")) {
                        var c = "axis" === h.get("trigger"), p = "cross" === h.get([ "axisPointer", "type" ]), f = n.getTooltipAxes(h.get([ "axisPointer", "axis" ]));
                        (c || p) && y(f.baseAxes, b(s, !p || "cross", c)), p && y(f.otherAxes, b(s, "cross", !1));
                    }
                }
            });
        }(n, t, e), n.seriesInvolved && function(t, e) {
            e.eachSeries(function(e) {
                var n = e.coordinateSystem, i = e.get([ "tooltip", "trigger" ], !0), r = e.get([ "tooltip", "show" ], !0);
                n && "none" !== i && !1 !== i && "item" !== i && !1 !== r && !1 !== e.get([ "axisPointer", "show" ], !0) && y(t.coordSysAxesInfo[ku(n.model)], function(t) {
                    var i = t.axis;
                    n.getAxis(i.dim) === i && (t.seriesModels.push(e), null == t.seriesDataCount && (t.seriesDataCount = 0), 
                    t.seriesDataCount += e.getData().count());
                });
            });
        }(n, t), n;
    }
    function Su(t, e, n, i, r, o) {
        var a = e.getModel("axisPointer"), l = {};
        y([ "type", "snap", "lineStyle", "shadowStyle", "label", "animation", "animationDurationUpdate", "animationEasingUpdate", "z" ], function(t) {
            l[t] = s(a.get(t));
        }), l.snap = "category" !== t.type && !!o, "cross" === a.get("type") && (l.type = "line");
        var u = l.label || (l.label = {});
        if (null == u.show && (u.show = !1), "cross" === r) {
            var h = a.get([ "label", "show" ]);
            if (u.show = null == h || h, !o) {
                var p = l.lineStyle = a.get("crossStyle");
                p && c(u, p.textStyle);
            }
        }
        return t.model.getModel("axisPointer", new Yg(l, n, i));
    }
    function Mu(t, e) {
        return "all" === t || S(t) && p(t, e) >= 0 || t === e;
    }
    function Tu(t) {
        var e = Cu(t);
        if (e) {
            var n = e.axisPointerModel, i = e.axis.scale, r = n.option, o = n.get("status"), a = n.get("value");
            null != a && (a = i.parse(a));
            var s = Au(n);
            null == o && (r.status = s ? "show" : "hide");
            var l = i.getExtent().slice();
            l[0] > l[1] && l.reverse(), (null == a || a > l[1]) && (a = l[1]), a < l[0] && (a = l[0]), 
            r.value = a, s && (r.status = e.axis.scale.isBlank() ? "hide" : "show");
        }
    }
    function Cu(t) {
        var e = (t.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
        return e && e.axesInfo[ku(t)];
    }
    function Au(t) {
        return !!t.get([ "handle", "show" ]);
    }
    function ku(t) {
        return t.type + "||" + t.id;
    }
    function Iu(t, e, n, i) {
        (function t(e, n) {
            if (k(e) && k(n)) {
                var i = !0;
                return y(n, function(n, r) {
                    i = i && t(e[r], n);
                }), !!i;
            }
            return e === n;
        })(mb(n).lastProp, i) || (mb(n).lastProp = i, e ? vr(n, i, t) : (n.stopAnimation(), 
        n.attr(i)));
    }
    function Du(t, e) {
        t[e.get([ "label", "show" ]) ? "show" : "hide"]();
    }
    function Pu(t) {
        return {
            x: t.x || 0,
            y: t.y || 0,
            rotation: t.rotation || 0
        };
    }
    function Lu(t, e, n) {
        var i = e.get("z"), r = e.get("zlevel");
        t && t.traverse(function(t) {
            "group" !== t.type && (null != i && (t.z = i), null != r && (t.zlevel = r), t.silent = n);
        });
    }
    function Ou(t) {
        var e, n = t.get("type"), i = t.getModel(n + "Style");
        return "line" === n ? (e = i.getLineStyle()).fill = null : "shadow" === n && ((e = i.getAreaStyle()).stroke = null), 
        e;
    }
    function Ru(t, e, n, i, r) {
        var o = Eu(n.get("value"), e.axis, e.ecModel, n.get("seriesDataIndices"), {
            precision: n.get([ "label", "precision" ]),
            formatter: n.get([ "label", "formatter" ])
        }), a = n.getModel("label"), s = hy(a.get("padding") || 0), l = a.getFont(), u = _e(o, l), h = r.position, c = u.width + s[1] + s[3], p = u.height + s[0] + s[2], f = r.align;
        "right" === f && (h[0] -= c), "center" === f && (h[0] -= c / 2);
        var d = r.verticalAlign;
        "bottom" === d && (h[1] -= p), "middle" === d && (h[1] -= p / 2), function(t, e, n, i) {
            var r = i.getWidth(), o = i.getHeight();
            t[0] = Math.min(t[0] + e, r) - e, t[1] = Math.min(t[1] + n, o) - n, t[0] = Math.max(t[0], 0), 
            t[1] = Math.max(t[1], 0);
        }(h, c, p, i);
        var g = a.get("backgroundColor");
        g && "auto" !== g || (g = e.get([ "axisLine", "lineStyle", "color" ])), t.label = {
            x: h[0],
            y: h[1],
            style: Nr(a, {
                text: o,
                font: l,
                fill: a.getTextColor(),
                padding: s,
                backgroundColor: g
            }),
            z2: 10
        };
    }
    function Eu(t, e, n, i, r) {
        t = e.scale.parse(t);
        var o = e.scale.getLabel({
            value: t
        }, {
            precision: r.precision
        }), a = r.formatter;
        if (a) {
            var s = {
                value: Bl(e, {
                    value: t
                }),
                axisDimension: e.dim,
                axisIndex: e.index,
                seriesData: []
            };
            y(i, function(t) {
                var e = n.getSeriesByIndex(t.seriesIndex), i = t.dataIndexInside, r = e && e.getDataParams(i);
                r && s.seriesData.push(r);
            }), T(a) ? o = a.replace("{value}", o) : M(a) && (o = a(s));
        }
        return o;
    }
    function Nu(t, e, n) {
        var i = [ 1, 0, 0, 1, 0, 0 ];
        return fe(i, i, n.rotation), pe(i, i, n.position), Sr([ t.dataToCoord(e), (n.labelOffset || 0) + (n.labelDirection || 1) * (n.labelMargin || 0) ], i);
    }
    function Bu(t, e, n) {
        return {
            x1: t[n = n || 0],
            y1: t[1 - n],
            x2: e[n],
            y2: e[1 - n]
        };
    }
    function zu(t, e, n) {
        return {
            x: t[n = n || 0],
            y: t[1 - n],
            width: e[n],
            height: e[1 - n]
        };
    }
    function Fu(t, e, n, i, r, o) {
        return {
            cx: t,
            cy: e,
            r0: n,
            r: i,
            startAngle: r,
            endAngle: o,
            clockwise: !0
        };
    }
    function Vu(t, e) {
        var n = {};
        return n[e.dim + "AxisIndex"] = e.index, t.getCartesian(n);
    }
    function Hu(t) {
        return "x" === t.dim ? 0 : 1;
    }
    function Gu(t, e, n) {
        if (!wh.node) {
            var i = e.getZr();
            Ab(i).records || (Ab(i).records = {}), function(t, e) {
                function n(n, i) {
                    t.on(n, function(n) {
                        var r = function(t) {
                            var e = {
                                showTip: [],
                                hideTip: []
                            };
                            return {
                                dispatchAction: function n(i) {
                                    var r = e[i.type];
                                    r ? r.push(i) : (i.dispatchAction = n, t.dispatchAction(i));
                                },
                                pendings: e
                            };
                        }(e);
                        kb(Ab(t).records, function(t) {
                            t && i(t, n, r.dispatchAction);
                        }), function(t, e) {
                            var n, i = t.showTip.length, r = t.hideTip.length;
                            i ? n = t.showTip[i - 1] : r && (n = t.hideTip[r - 1]), n && (n.dispatchAction = null, 
                            e.dispatchAction(n));
                        }(r.pendings, e);
                    });
                }
                Ab(t).initialized || (Ab(t).initialized = !0, n("click", b(Uu, "click")), n("mousemove", b(Uu, "mousemove")), 
                n("globalout", Wu));
            }(i, e), (Ab(i).records[t] || (Ab(i).records[t] = {})).handler = n;
        }
    }
    function Wu(t, e, n) {
        t.handler("leave", null, n);
    }
    function Uu(t, e, n, i) {
        e.handler(t, n, i);
    }
    function Xu(t, e) {
        if (!wh.node) {
            var n = e.getZr();
            (Ab(n).records || {})[t] && (Ab(n).records[t] = null);
        }
    }
    function Yu(t, e) {
        var n, i = [], r = t.seriesIndex;
        if (null == r || !(n = e.getSeriesByIndex(r))) return {
            point: []
        };
        var o = n.getData(), a = an(o, t);
        if (null == a || 0 > a || S(a)) return {
            point: []
        };
        var s = o.getItemGraphicEl(a), l = n.coordinateSystem;
        if (n.getTooltipPosition) i = n.getTooltipPosition(a) || []; else if (l && l.dataToPoint) if (t.isStacked) {
            var u = l.getBaseAxis(), h = l.getOtherAxis(u).dim, c = u.dim, p = "x" === h || "radius" === h ? 1 : 0, f = o.mapDimension(c), d = [];
            d[p] = o.get(f, a), d[1 - p] = o.get(o.getCalculationInfo("stackResultDimension"), a), 
            i = l.dataToPoint(d) || [];
        } else i = l.dataToPoint(o.getValues(v(l.dimensions, function(t) {
            return o.mapDimension(t);
        }), a)) || []; else if (s) {
            var g = s.getBoundingRect().clone();
            g.applyTransform(s.transform), i = [ g.x + g.width / 2, g.y + g.height / 2 ];
        }
        return {
            point: i,
            el: s
        };
    }
    function qu(t, e, n) {
        var i = t.currTrigger, r = [ t.x, t.y ], o = t, a = t.dispatchAction || Eh(n.dispatchAction, n), s = e.getComponent("axisPointer").coordSysAxesInfo;
        if (s) {
            Ju(r) && (r = Yu({
                seriesIndex: o.seriesIndex,
                dataIndex: o.dataIndex
            }, e).point);
            var l = Ju(r), u = o.axesInfo, h = s.axesInfo, c = "leave" === i || Ju(r), p = {}, f = {}, d = {
                list: [],
                map: {}
            }, g = {
                showPointer: b(Zu, f),
                showTooltip: b(Ku, d)
            };
            y(s.coordSysMap, function(t, e) {
                var n = l || t.containPoint(r);
                y(s.coordSysAxesInfo[e], function(t) {
                    var e = t.axis, i = function(t, e) {
                        for (var n = 0; n < (t || []).length; n++) {
                            var i = t[n];
                            if (e.axis.dim === i.axisDim && e.axis.model.componentIndex === i.axisIndex) return i;
                        }
                    }(u, t);
                    if (!c && n && (!u || i)) {
                        var o = i && i.value;
                        null != o || l || (o = e.pointToData(r)), null != o && ju(t, o, g, !1, p);
                    }
                });
            });
            var v = {};
            return y(h, function(t, e) {
                var n = t.linkGroup;
                n && !f[e] && y(n.axesInfo, function(e, i) {
                    var r = f[i];
                    if (e !== t && r) {
                        var o = r.value;
                        n.mapper && (o = t.axis.scale.parse(n.mapper(o, $u(e), $u(t)))), v[t.key] = o;
                    }
                });
            }), y(v, function(t, e) {
                ju(h[e], t, g, !0, p);
            }), function(t, e, n) {
                var i = n.axesInfo = [];
                y(e, function(e, n) {
                    var r = e.axisPointerModel.option, o = t[n];
                    o ? (!e.useHandle && (r.status = "show"), r.value = o.value, r.seriesDataIndices = (o.payloadBatch || []).slice()) : !e.useHandle && (r.status = "hide"), 
                    "show" === r.status && i.push({
                        axisDim: e.axis.dim,
                        axisIndex: e.axis.model.componentIndex,
                        value: r.value
                    });
                });
            }(f, h, p), function(t, e, n, i) {
                if (Ju(e) || !t.list.length) return void i({
                    type: "hideTip"
                });
                var r = ((t.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};
                i({
                    type: "showTip",
                    escapeConnect: !0,
                    x: e[0],
                    y: e[1],
                    tooltipOption: n.tooltipOption,
                    position: n.position,
                    dataIndexInside: r.dataIndexInside,
                    dataIndex: r.dataIndex,
                    seriesIndex: r.seriesIndex,
                    dataByCoordSys: t.list
                });
            }(d, r, t, a), function(t, e, n) {
                var i = n.getZr(), r = "axisPointerLastHighlights", o = Db(i)[r] || {}, a = Db(i)[r] = {};
                y(t, function(t) {
                    var e = t.axisPointerModel.option;
                    "show" === e.status && y(e.seriesDataIndices, function(t) {
                        var e = t.seriesIndex + " | " + t.dataIndex;
                        a[e] = t;
                    });
                });
                var s = [], l = [];
                y(o, function(t, e) {
                    !a[e] && l.push(t);
                }), y(a, function(t, e) {
                    !o[e] && s.push(t);
                }), l.length && n.dispatchAction({
                    type: "downplay",
                    escapeConnect: !0,
                    notBlur: !0,
                    batch: l
                }), s.length && n.dispatchAction({
                    type: "highlight",
                    escapeConnect: !0,
                    notBlur: !0,
                    batch: s
                });
            }(h, 0, n), p;
        }
    }
    function ju(t, e, n, i, r) {
        var o = t.axis;
        if (!o.scale.isBlank() && o.containData(e)) {
            if (!t.involveSeries) return void n.showPointer(t, e);
            var a = function(t, e) {
                var n = e.axis, i = n.dim, r = t, o = [], a = Number.MAX_VALUE, s = -1;
                return y(e.seriesModels, function(e) {
                    var l, u, h = e.getData().mapDimensionsAll(i);
                    if (e.getAxisTooltipData) {
                        var c = e.getAxisTooltipData(h, t, n);
                        u = c.dataIndices, l = c.nestestValue;
                    } else {
                        if (!(u = e.getData().indicesOfNearest(h[0], t, "category" === n.type ? .5 : null)).length) return;
                        l = e.getData().get(h[0], u[0]);
                    }
                    if (null != l && isFinite(l)) {
                        var p = t - l, f = Math.abs(p);
                        a >= f && ((a > f || p >= 0 && 0 > s) && (a = f, s = p, r = l, o.length = 0), y(u, function(t) {
                            o.push({
                                seriesIndex: e.seriesIndex,
                                dataIndexInside: t,
                                dataIndex: e.getData().getRawIndex(t)
                            });
                        }));
                    }
                }), {
                    payloadBatch: o,
                    snapToValue: r
                };
            }(e, t), s = a.payloadBatch, l = a.snapToValue;
            s[0] && null == r.seriesIndex && h(r, s[0]), !i && t.snap && o.containData(l) && null != l && (e = l), 
            n.showPointer(t, e, s), n.showTooltip(t, a, l);
        }
    }
    function Zu(t, e, n, i) {
        t[e.key] = {
            value: n,
            payloadBatch: i
        };
    }
    function Ku(t, e, n, i) {
        var r = n.payloadBatch, o = e.axis, a = o.model, s = e.axisPointerModel;
        if (e.triggerTooltip && r.length) {
            var l = e.coordSys.model, u = ku(l), h = t.map[u];
            h || (h = t.map[u] = {
                coordSysId: l.id,
                coordSysIndex: l.componentIndex,
                coordSysType: l.type,
                coordSysMainType: l.mainType,
                dataByAxis: []
            }, t.list.push(h)), h.dataByAxis.push({
                axisDim: o.dim,
                axisIndex: a.componentIndex,
                axisType: a.type,
                axisId: a.id,
                value: i,
                valueLabelOpt: {
                    precision: s.get([ "label", "precision" ]),
                    formatter: s.get([ "label", "formatter" ])
                },
                seriesDataIndices: r.slice()
            });
        }
    }
    function $u(t) {
        var e = t.axis.model, n = {}, i = n.axisDim = t.axis.dim;
        return n.axisIndex = n[i + "AxisIndex"] = e.componentIndex, n.axisName = n[i + "AxisName"] = e.name, 
        n.axisId = n[i + "AxisId"] = e.id, n;
    }
    function Ju(t) {
        return !t || null == t[0] || isNaN(t[0]) || null == t[1] || isNaN(t[1]);
    }
    function Qu(t) {
        lb.registerAxisPointerClass("CartesianAxisPointer", Mb), t.registerComponentModel(Cb), 
        t.registerComponentView(Ib), t.registerPreprocessor(function(t) {
            if (t) {
                (!t.axisPointer || 0 === t.axisPointer.length) && (t.axisPointer = {});
                var e = t.axisPointer.link;
                e && !S(e) && (t.axisPointer.link = [ e ]);
            }
        }), t.registerProcessor(t.PRIORITY.PROCESSOR.STATISTIC, function(t, e) {
            t.getComponent("axisPointer").coordSysAxesInfo = bu(t, e);
        }), t.registerAction({
            type: "updateAxisPointer",
            event: "updateAxisPointer",
            update: ":updateAxisPointer"
        }, qu);
    }
    function th(t) {
        var e = t.seriesModel, n = t.polarModel;
        return n && n.coordinateSystem || e && e.coordinateSystem;
    }
    function eh(t) {
        var e = this, n = e.getAngleAxis(), i = e.getRadiusAxis();
        if (n.scale.setExtent(1 / 0, -1 / 0), i.scale.setExtent(1 / 0, -1 / 0), t.eachSeries(function(t) {
            if (t.coordinateSystem === e) {
                var r = t.getData();
                y(Hl(r, "radius"), function(t) {
                    i.scale.unionExtentFromData(r, t);
                }), y(Hl(r, "angle"), function(t) {
                    n.scale.unionExtentFromData(r, t);
                });
            }
        }), Rl(n.scale, n.model), Rl(i.scale, i.model), "category" === n.type && !n.onBand) {
            var r = n.getExtent(), o = 360 / n.scale.count();
            n.inverse ? r[1] += o : r[1] -= o, n.setExtent(r[0], r[1]);
        }
    }
    function nh(t, e) {
        if (t.type = e.get("type"), t.scale = El(e), t.onBand = e.get("boundaryGap") && "category" === t.type, 
        t.inverse = e.get("inverse"), function(t) {
            return "angleAxis" === t.mainType;
        }(e)) {
            t.inverse = t.inverse !== e.get("clockwise");
            var n = e.get("startAngle");
            t.setExtent(n, n + (t.inverse ? -360 : 360));
        }
        e.axis = t, t.model = e;
    }
    function ih(t, e, n) {
        e[1] > e[0] && (e = e.slice().reverse());
        var i = t.coordToPoint([ e[0], n ]), r = t.coordToPoint([ e[1], n ]);
        return {
            x1: i[0],
            y1: i[1],
            x2: r[0],
            y2: r[1]
        };
    }
    function rh(t) {
        return t.getRadiusAxis().inverse ? 0 : 1;
    }
    function oh(t) {
        var e = t[0], n = t[t.length - 1];
        e && n && Math.abs(Math.abs(e.coord - n.coord) - 360) < 1e-4 && t.pop();
    }
    function ah(t) {
        return t.get("stack") || "__ec_stack_" + t.seriesIndex;
    }
    function sh(t, e) {
        return e.dim + t.model.componentIndex;
    }
    function lh(t, e) {
        var n = {}, i = function(t) {
            var e = {};
            y(t, function(t) {
                var n = t.getData(), i = t.coordinateSystem, r = i.getBaseAxis(), o = sh(i, r), a = r.getExtent(), s = "category" === r.type ? r.getBandWidth() : Math.abs(a[1] - a[0]) / n.count(), l = e[o] || {
                    bandWidth: s,
                    remainedWidth: s,
                    autoWidthCount: 0,
                    categoryGap: "20%",
                    gap: "30%",
                    stacks: {}
                }, u = l.stacks;
                e[o] = l;
                var h = ah(t);
                u[h] || l.autoWidthCount++, u[h] = u[h] || {
                    width: 0,
                    maxWidth: 0
                };
                var c = Le(t.get("barWidth"), s), p = Le(t.get("barMaxWidth"), s), f = t.get("barGap"), d = t.get("barCategoryGap");
                c && !u[h].width && (c = Math.min(l.remainedWidth, c), u[h].width = c, l.remainedWidth -= c), 
                p && (u[h].maxWidth = p), null != f && (l.gap = f), null != d && (l.categoryGap = d);
            });
            var n = {};
            return y(e, function(t, e) {
                n[e] = {};
                var i = t.stacks, r = t.bandWidth, o = Le(t.categoryGap, r), a = Le(t.gap, 1), s = t.remainedWidth, l = t.autoWidthCount, u = (s - o) / (l + (l - 1) * a);
                u = Math.max(u, 0), y(i, function(t) {
                    var e = t.maxWidth;
                    e && u > e && (e = Math.min(e, s), t.width && (e = Math.min(e, t.width)), s -= e, 
                    t.width = e, l--);
                }), u = (s - o) / (l + (l - 1) * a), u = Math.max(u, 0);
                var h, c = 0;
                y(i, function(t) {
                    t.width || (t.width = u), h = t, c += t.width * (1 + a);
                }), h && (c -= h.width * a);
                var p = -c / 2;
                y(i, function(t, i) {
                    n[e][i] = n[e][i] || {
                        offset: p,
                        width: t.width
                    }, p += t.width * (1 + a);
                });
            }), n;
        }(_(e.getSeriesByType(t), function(t) {
            return !e.isSeriesFiltered(t) && t.coordinateSystem && "polar" === t.coordinateSystem.type;
        }));
        e.eachSeriesByType(t, function(t) {
            if ("polar" === t.coordinateSystem.type) {
                var e = t.getData(), r = t.coordinateSystem, o = r.getBaseAxis(), a = sh(r, o), s = ah(t), l = i[a][s], u = l.offset, h = l.width, c = r.getOtherAxis(o), p = t.coordinateSystem.cx, f = t.coordinateSystem.cy, d = t.get("barMinHeight") || 0, g = t.get("barMinAngle") || 0;
                n[s] = n[s] || [];
                for (var y = e.mapDimension(c.dim), v = e.mapDimension(o.dim), m = ll(e, y), _ = "radius" !== o.dim || !t.get("roundCap", !0), x = c.dataToCoord(0), w = 0, b = e.count(); b > w; w++) {
                    var S = e.get(y, w), M = e.get(v, w), T = S >= 0 ? "p" : "n", C = x;
                    m && (n[s][M] || (n[s][M] = {
                        p: x,
                        n: x
                    }), C = n[s][M][T]);
                    var A = void 0, k = void 0, I = void 0, D = void 0;
                    if ("radius" === c.dim) {
                        var P = c.dataToCoord(S) - x, L = o.dataToCoord(M);
                        Math.abs(P) < d && (P = (0 > P ? -1 : 1) * d), A = C, k = C + P, D = (I = L - u) - h, 
                        m && (n[s][M][T] = k);
                    } else {
                        var O = c.dataToCoord(S, _) - x, R = o.dataToCoord(M);
                        Math.abs(O) < g && (O = (0 > O ? -1 : 1) * g), k = (A = R + u) + h, I = C, D = C + O, 
                        m && (n[s][M][T] = D);
                    }
                    e.setItemLayout(w, {
                        cx: p,
                        cy: f,
                        r0: A,
                        r: k,
                        startAngle: -I * Math.PI / 180,
                        endAngle: -D * Math.PI / 180
                    });
                }
            }
        });
    }
    function uh(t) {
        $e(t, "label", [ "show" ]);
    }
    function hh(t, e, n, i, r, o) {
        var a = [], s = ll(e, i) ? e.getCalculationInfo("stackResultDimension") : i, l = fh(e, s, t), u = e.indicesOfNearest(s, l)[0];
        a[r] = e.get(n, u), a[o] = e.get(s, u);
        var h = e.get(i, u), c = Ee(e.get(i, u));
        return (c = Math.min(c, 20)) >= 0 && (a[o] = +a[o].toFixed(c)), [ a, h ];
    }
    function ch(t, e) {
        var n = t.getData(), i = t.coordinateSystem;
        if (e && !function(t) {
            return !isNaN(parseFloat(t.x)) && !isNaN(parseFloat(t.y));
        }(e) && !S(e.coord) && i) {
            var r = i.dimensions, o = function(t, e, n, i) {
                var r = {};
                return null != t.valueIndex || null != t.valueDim ? (r.valueDataDim = null != t.valueIndex ? e.getDimension(t.valueIndex) : t.valueDim, 
                r.valueAxis = n.getAxis(function(t, e) {
                    var n = t.getData(), i = n.dimensions;
                    e = n.getDimension(e);
                    for (var r = 0; r < i.length; r++) {
                        var o = n.getDimensionInfo(i[r]);
                        if (o.name === e) return o.coordDim;
                    }
                }(i, r.valueDataDim)), r.baseAxis = n.getOtherAxis(r.valueAxis), r.baseDataDim = e.mapDimension(r.baseAxis.dim)) : (r.baseAxis = i.getBaseAxis(), 
                r.valueAxis = n.getOtherAxis(r.baseAxis), r.baseDataDim = e.mapDimension(r.baseAxis.dim), 
                r.valueDataDim = e.mapDimension(r.valueAxis.dim)), r;
            }(e, n, i, t);
            if ((e = s(e)).type && Qb[e.type] && o.baseAxis && o.valueAxis) {
                var a = p(r, o.baseAxis.dim), l = p(r, o.valueAxis.dim), u = Qb[e.type](n, o.baseDataDim, o.valueDataDim, a, l);
                e.coord = u[0], e.value = u[1];
            } else {
                for (var h = [ null != e.xAxis ? e.xAxis : e.radiusAxis, null != e.yAxis ? e.yAxis : e.angleAxis ], c = 0; 2 > c; c++) Qb[h[c]] && (h[c] = fh(n, n.mapDimension(r[c]), h[c]));
                e.coord = h;
            }
        }
        return e;
    }
    function ph(t, e) {
        return !(t && t.containData && e.coord && !function(t) {
            return !(isNaN(parseFloat(t.x)) && isNaN(parseFloat(t.y)));
        }(e)) || t.containData(e.coord);
    }
    function fh(t, e, n) {
        if ("average" === n) {
            var i = 0, r = 0;
            return t.each(e, function(t) {
                isNaN(t) || (i += t, r++);
            }), i / r;
        }
        return "median" === n ? t.getMedian(e) : t.getDataExtent(e)["max" === n ? 1 : 0];
    }
    function dh(t, e) {
        return t.type === e;
    }
    function gh(t) {
        return !isNaN(t) && !isFinite(t);
    }
    function yh(t, e, n) {
        var i = 1 - t;
        return gh(e[i]) && gh(n[i]);
    }
    function vh(t, e) {
        var n = e.coord[0], i = e.coord[1];
        return !!(dh(t, "cartesian2d") && n && i && (yh(1, n, i) || yh(0, n, i))) || (ph(t, {
            coord: n,
            x: e.x0,
            y: e.y0
        }) || ph(t, {
            coord: i,
            x: e.x1,
            y: e.y1
        }));
    }
    function mh(t, e, n, i, r) {
        var o, a = i.coordinateSystem, s = t.getItemModel(e), l = Le(s.get(n[0]), r.getWidth()), u = Le(s.get(n[1]), r.getHeight());
        if (isNaN(l) || isNaN(u)) {
            if (i.getMarkerPosition) o = i.getMarkerPosition(t.getValues(n, e)); else {
                var h = [ f = t.get(n[0], e), d = t.get(n[1], e) ];
                a.clampData && a.clampData(h, h), o = a.dataToPoint(h, !0);
            }
            if (dh(a, "cartesian2d")) {
                var c = a.getAxis("x"), p = a.getAxis("y"), f = t.get(n[0], e), d = t.get(n[1], e);
                gh(f) ? o[0] = c.toGlobalCoord(c.getExtent()["x0" === n[0] ? 0 : 1]) : gh(d) && (o[1] = p.toGlobalCoord(p.getExtent()["y0" === n[1] ? 0 : 1]));
            }
            isNaN(l) || (o[0] = l), isNaN(u) || (o[1] = u);
        } else o = [ l, u ];
        return o;
    }
    var _h = function(t, e) {
        return (_h = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(t, e) {
            t.__proto__ = e;
        } || function(t, e) {
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(t, e);
    }, xh = function() {
        this.firefox = !1, this.ie = !1, this.edge = !1, this.newEdge = !1, this.weChat = !1;
    }, wh = new function() {
        this.browser = new xh(), this.node = !1, this.wxa = !1, this.worker = !1, this.canvasSupported = !1, 
        this.svgSupported = !1, this.touchEventsSupported = !1, this.pointerEventsSupported = !1, 
        this.domSupported = !1, this.transformSupported = !1, this.transform3dSupported = !1;
    }();
    "object" == ("undefined" == typeof wx ? "undefined" : t(wx)) && "function" == typeof wx.getSystemInfoSync ? (wh.wxa = !0, 
    wh.canvasSupported = !0, wh.touchEventsSupported = !0) : "undefined" == typeof document && "undefined" != typeof self ? (wh.worker = !0, 
    wh.canvasSupported = !0) : "undefined" == typeof navigator ? (wh.node = !0, wh.canvasSupported = !0, 
    wh.svgSupported = !0) : function(t, e) {
        var n = e.browser, i = t.match(/Firefox\/([\d.]+)/), r = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/), o = t.match(/Edge?\/([\d.]+)/), a = /micromessenger/i.test(t);
        i && (n.firefox = !0, n.version = i[1]), r && (n.ie = !0, n.version = r[1]), o && (n.edge = !0, 
        n.version = o[1], n.newEdge = +o[1].split(".")[0] > 18), a && (n.weChat = !0), e.canvasSupported = !!document.createElement("canvas").getContext, 
        e.svgSupported = "undefined" != typeof SVGRect, e.touchEventsSupported = "ontouchstart" in window && !n.ie && !n.edge, 
        e.pointerEventsSupported = "onpointerdown" in window && (n.edge || n.ie && +n.version >= 11), 
        e.domSupported = "undefined" != typeof document;
        var s = document.documentElement.style;
        e.transform3dSupported = (n.ie && "transition" in s || n.edge || "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix() || "MozPerspective" in s) && !("OTransition" in s), 
        e.transformSupported = e.transform3dSupported || n.ie && +n.version >= 9;
    }(navigator.userAgent, wh);
    var bh = {
        "[object Function]": !0,
        "[object RegExp]": !0,
        "[object Date]": !0,
        "[object Error]": !0,
        "[object CanvasGradient]": !0,
        "[object CanvasPattern]": !0,
        "[object Image]": !0,
        "[object Canvas]": !0
    }, Sh = {
        "[object Int8Array]": !0,
        "[object Uint8Array]": !0,
        "[object Uint8ClampedArray]": !0,
        "[object Int16Array]": !0,
        "[object Uint16Array]": !0,
        "[object Int32Array]": !0,
        "[object Uint32Array]": !0,
        "[object Float32Array]": !0,
        "[object Float64Array]": !0
    }, Mh = Object.prototype.toString, Th = Array.prototype, Ch = Th.forEach, Ah = Th.filter, kh = Th.slice, Ih = Th.map, Dh = function() {}.constructor, Ph = Dh ? Dh.prototype : null, Lh = {}, Oh = 2311, Rh = function() {
        return Lh.createCanvas();
    };
    Lh.createCanvas = function() {
        return document.createElement("canvas");
    };
    var Eh = Ph && M(Ph.bind) ? Ph.call.bind(Ph.bind) : function(t, e) {
        for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
        return function() {
            return t.apply(e, n.concat(kh.call(arguments)));
        };
    }, Nh = "__ec_primitive__", Bh = function() {
        function t(e) {
            function n(t, e) {
                i ? r.set(t, e) : r.set(e, t);
            }
            this.data = {};
            var i = S(e);
            this.data = {};
            var r = this;
            e instanceof t ? e.each(n) : e && y(e, n);
        }
        return t.prototype.get = function(t) {
            return this.data.hasOwnProperty(t) ? this.data[t] : null;
        }, t.prototype.set = function(t, e) {
            return this.data[t] = e;
        }, t.prototype.each = function(t, e) {
            for (var n in this.data) this.data.hasOwnProperty(n) && t.call(e, this.data[n], n);
        }, t.prototype.keys = function() {
            return w(this.data);
        }, t.prototype.removeKey = function(t) {
            delete this.data[t];
        }, t;
    }(), zh = (Object.freeze || Object)({
        $override: r,
        guid: o,
        logError: a,
        clone: s,
        merge: l,
        mergeAll: u,
        extend: h,
        defaults: c,
        createCanvas: Rh,
        indexOf: p,
        inherits: f,
        mixin: d,
        isArrayLike: g,
        each: y,
        map: v,
        reduce: m,
        filter: _,
        find: x,
        keys: w,
        bind: Eh,
        curry: b,
        isArray: S,
        isFunction: M,
        isString: T,
        isStringSafe: C,
        isNumber: A,
        isObject: k,
        isBuiltInObject: I,
        isTypedArray: D,
        isDom: P,
        isGradientObject: L,
        isImagePatternObject: O,
        isRegExp: function(t) {
            return "[object RegExp]" === Mh.call(t);
        },
        eqNaN: R,
        retrieve: E,
        retrieve2: N,
        retrieve3: B,
        slice: z,
        normalizeCssArray: F,
        assert: V,
        trim: H,
        setAsPrimitive: G,
        isPrimitive: W,
        HashMap: Bh,
        createHashMap: U,
        concatArray: function(t, e) {
            for (var n = new t.constructor(t.length + e.length), i = 0; i < t.length; i++) n[i] = t[i];
            var r = t.length;
            for (i = 0; i < e.length; i++) n[i + r] = e[i];
            return n;
        },
        createObject: X,
        hasOwn: Y,
        noop: q
    }), Fh = J, Vh = Q, Hh = nt, Gh = it, Wh = (Object.freeze || Object)({
        create: j,
        copy: function(t, e) {
            return t[0] = e[0], t[1] = e[1], t;
        },
        clone: Z,
        set: function(t, e, n) {
            return t[0] = e, t[1] = n, t;
        },
        add: K,
        scaleAndAdd: function(t, e, n, i) {
            return t[0] = e[0] + n[0] * i, t[1] = e[1] + n[1] * i, t;
        },
        sub: $,
        len: J,
        length: Fh,
        lenSquare: Q,
        lengthSquare: Vh,
        mul: function(t, e, n) {
            return t[0] = e[0] * n[0], t[1] = e[1] * n[1], t;
        },
        div: function(t, e, n) {
            return t[0] = e[0] / n[0], t[1] = e[1] / n[1], t;
        },
        dot: function(t, e) {
            return t[0] * e[0] + t[1] * e[1];
        },
        scale: tt,
        normalize: et,
        distance: nt,
        dist: Hh,
        distanceSquare: it,
        distSquare: Gh,
        negate: function(t, e) {
            return t[0] = -e[0], t[1] = -e[1], t;
        },
        lerp: rt,
        applyTransform: ot,
        min: at,
        max: st
    }), Uh = function(t, e) {
        this.target = t, this.topTarget = e && e.topTarget;
    }, Xh = function() {
        function t(t) {
            this.handler = t, t.on("mousedown", this._dragStart, this), t.on("mousemove", this._drag, this), 
            t.on("mouseup", this._dragEnd, this);
        }
        return t.prototype._dragStart = function(t) {
            for (var e = t.target; e && !e.draggable; ) e = e.parent;
            e && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, 
            this.handler.dispatchToElement(new Uh(e, t), "dragstart", t.event));
        }, t.prototype._drag = function(t) {
            var e = this._draggingTarget;
            if (e) {
                var n = t.offsetX, i = t.offsetY, r = n - this._x, o = i - this._y;
                this._x = n, this._y = i, e.drift(r, o, t), this.handler.dispatchToElement(new Uh(e, t), "drag", t.event);
                var a = this.handler.findHover(n, i, e).target, s = this._dropTarget;
                this._dropTarget = a, e !== a && (s && a !== s && this.handler.dispatchToElement(new Uh(s, t), "dragleave", t.event), 
                a && a !== s && this.handler.dispatchToElement(new Uh(a, t), "dragenter", t.event));
            }
        }, t.prototype._dragEnd = function(t) {
            var e = this._draggingTarget;
            e && (e.dragging = !1), this.handler.dispatchToElement(new Uh(e, t), "dragend", t.event), 
            this._dropTarget && this.handler.dispatchToElement(new Uh(this._dropTarget, t), "drop", t.event), 
            this._draggingTarget = null, this._dropTarget = null;
        }, t;
    }(), Yh = function() {
        function t(t) {
            t && (this._$eventProcessor = t);
        }
        return t.prototype.on = function(t, e, n, i) {
            this._$handlers || (this._$handlers = {});
            var r = this._$handlers;
            if ("function" == typeof e && (i = n, n = e, e = null), !n || !t) return this;
            var o = this._$eventProcessor;
            null != e && o && o.normalizeQuery && (e = o.normalizeQuery(e)), r[t] || (r[t] = []);
            for (var a = 0; a < r[t].length; a++) if (r[t][a].h === n) return this;
            var s = {
                h: n,
                query: e,
                ctx: i || this,
                callAtLast: n.zrEventfulCallAtLast
            }, l = r[t].length - 1, u = r[t][l];
            return u && u.callAtLast ? r[t].splice(l, 0, s) : r[t].push(s), this;
        }, t.prototype.isSilent = function(t) {
            var e = this._$handlers;
            return !e || !e[t] || !e[t].length;
        }, t.prototype.off = function(t, e) {
            var n = this._$handlers;
            if (!n) return this;
            if (!t) return this._$handlers = {}, this;
            if (e) {
                if (n[t]) {
                    for (var i = [], r = 0, o = n[t].length; o > r; r++) n[t][r].h !== e && i.push(n[t][r]);
                    n[t] = i;
                }
                n[t] && 0 === n[t].length && delete n[t];
            } else delete n[t];
            return this;
        }, t.prototype.trigger = function(t) {
            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            if (!this._$handlers) return this;
            var i = this._$handlers[t], r = this._$eventProcessor;
            if (i) for (var o = e.length, a = i.length, s = 0; a > s; s++) {
                var l = i[s];
                if (!r || !r.filter || null == l.query || r.filter(t, l.query)) switch (o) {
                  case 0:
                    l.h.call(l.ctx);
                    break;

                  case 1:
                    l.h.call(l.ctx, e[0]);
                    break;

                  case 2:
                    l.h.call(l.ctx, e[0], e[1]);
                    break;

                  default:
                    l.h.apply(l.ctx, e);
                }
            }
            return r && r.afterTrigger && r.afterTrigger(t), this;
        }, t.prototype.triggerWithContext = function(t) {
            if (!this._$handlers) return this;
            var e = this._$handlers[t], n = this._$eventProcessor;
            if (e) for (var i = arguments, r = i.length, o = i[r - 1], a = e.length, s = 0; a > s; s++) {
                var l = e[s];
                if (!n || !n.filter || null == l.query || n.filter(t, l.query)) switch (r) {
                  case 0:
                    l.h.call(o);
                    break;

                  case 1:
                    l.h.call(o, i[0]);
                    break;

                  case 2:
                    l.h.call(o, i[0], i[1]);
                    break;

                  default:
                    l.h.apply(o, i.slice(1, r - 1));
                }
            }
            return n && n.afterTrigger && n.afterTrigger(t), this;
        }, t;
    }(), qh = Math.log(2), jh = "___zrEVENTSAVED", Zh = "undefined" != typeof window && !!window.addEventListener, Kh = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, $h = [], Jh = Zh ? function(t) {
        t.preventDefault(), t.stopPropagation(), t.cancelBubble = !0;
    } : function(t) {
        t.returnValue = !1, t.cancelBubble = !0;
    }, Qh = function() {
        function t() {
            this._track = [];
        }
        return t.prototype.recognize = function(t, e, n) {
            return this._doTrack(t, e, n), this._recognize(t);
        }, t.prototype.clear = function() {
            return this._track.length = 0, this;
        }, t.prototype._doTrack = function(t, e, n) {
            var i = t.touches;
            if (i) {
                for (var r = {
                    points: [],
                    touches: [],
                    target: e,
                    event: t
                }, o = 0, a = i.length; a > o; o++) {
                    var s = i[o], l = pt(n, s, {});
                    r.points.push([ l.zrX, l.zrY ]), r.touches.push(s);
                }
                this._track.push(r);
            }
        }, t.prototype._recognize = function(t) {
            for (var e in tc) if (tc.hasOwnProperty(e)) {
                var n = tc[e](this._track, t);
                if (n) return n;
            }
        }, t;
    }(), tc = {
        pinch: function(t, e) {
            var n = t.length;
            if (n) {
                var i = (t[n - 1] || {}).points, r = (t[n - 2] || {}).points || i;
                if (r && r.length > 1 && i && i.length > 1) {
                    var o = vt(i) / vt(r);
                    !isFinite(o) && (o = 1), e.pinchScale = o;
                    var a = function(t) {
                        return [ (t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2 ];
                    }(i);
                    return e.pinchX = a[0], e.pinchY = a[1], {
                        type: "pinch",
                        target: t[0].target,
                        event: e
                    };
                }
            }
        }
    }, ec = "silent", nc = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.handler = null, e;
        }
        return n(e, t), e.prototype.dispose = function() {}, e.prototype.setCursor = function() {}, 
        e;
    }(Yh), ic = function(t, e) {
        this.x = t, this.y = e;
    }, rc = [ "click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu" ], oc = function(t) {
        function e(e, n, i, r) {
            var o = t.call(this) || this;
            return o._hovered = new ic(0, 0), o.storage = e, o.painter = n, o.painterRoot = r, 
            i = i || new nc(), o.proxy = null, o.setHandlerProxy(i), o._draggingMgr = new Xh(o), 
            o;
        }
        return n(e, t), e.prototype.setHandlerProxy = function(t) {
            this.proxy && this.proxy.dispose(), t && (y(rc, function(e) {
                t.on && t.on(e, this[e], this);
            }, this), t.handler = this), this.proxy = t;
        }, e.prototype.mousemove = function(t) {
            var e = t.zrX, n = t.zrY, i = xt(this, e, n), r = this._hovered, o = r.target;
            o && !o.__zr && (o = (r = this.findHover(r.x, r.y)).target);
            var a = this._hovered = i ? new ic(e, n) : this.findHover(e, n), s = a.target, l = this.proxy;
            l.setCursor && l.setCursor(s ? s.cursor : "default"), o && s !== o && this.dispatchToElement(r, "mouseout", t), 
            this.dispatchToElement(a, "mousemove", t), s && s !== o && this.dispatchToElement(a, "mouseover", t);
        }, e.prototype.mouseout = function(t) {
            var e = t.zrEventControl;
            "only_globalout" !== e && this.dispatchToElement(this._hovered, "mouseout", t), 
            "no_globalout" !== e && this.trigger("globalout", {
                type: "globalout",
                event: t
            });
        }, e.prototype.resize = function() {
            this._hovered = new ic(0, 0);
        }, e.prototype.dispatch = function(t, e) {
            var n = this[t];
            n && n.call(this, e);
        }, e.prototype.dispose = function() {
            this.proxy.dispose(), this.storage = null, this.proxy = null, this.painter = null;
        }, e.prototype.setCursorStyle = function(t) {
            var e = this.proxy;
            e.setCursor && e.setCursor(t);
        }, e.prototype.dispatchToElement = function(t, e, n) {
            var i = (t = t || {}).target;
            if (!i || !i.silent) {
                for (var r = "on" + e, o = function(t, e, n) {
                    return {
                        type: t,
                        event: n,
                        target: e.target,
                        topTarget: e.topTarget,
                        cancelBubble: !1,
                        offsetX: n.zrX,
                        offsetY: n.zrY,
                        gestureEvent: n.gestureEvent,
                        pinchX: n.pinchX,
                        pinchY: n.pinchY,
                        pinchScale: n.pinchScale,
                        wheelDelta: n.zrDelta,
                        zrByTouch: n.zrByTouch,
                        which: n.which,
                        stop: mt
                    };
                }(e, t, n); i && (i[r] && (o.cancelBubble = !!i[r].call(i, o)), i.trigger(e, o), 
                i = i.__hostTarget ? i.__hostTarget : i.parent, !o.cancelBubble); ) ;
                o.cancelBubble || (this.trigger(e, o), this.painter && this.painter.eachOtherLayer && this.painter.eachOtherLayer(function(t) {
                    "function" == typeof t[r] && t[r].call(t, o), t.trigger && t.trigger(e, o);
                }));
            }
        }, e.prototype.findHover = function(t, e, n) {
            for (var i = this.storage.getDisplayList(), r = new ic(t, e), o = i.length - 1; o >= 0; o--) {
                var a = void 0;
                if (i[o] !== n && !i[o].ignore && (a = _t(i[o], t, e)) && (!r.topTarget && (r.topTarget = i[o]), 
                a !== ec)) {
                    r.target = i[o];
                    break;
                }
            }
            return r;
        }, e.prototype.processGesture = function(t, e) {
            this._gestureMgr || (this._gestureMgr = new Qh());
            var n = this._gestureMgr;
            "start" === e && n.clear();
            var i = n.recognize(t, this.findHover(t.zrX, t.zrY, null).target, this.proxy.dom);
            if ("end" === e && n.clear(), i) {
                var r = i.type;
                t.gestureEvent = r;
                var o = new ic();
                o.target = i.target, this.dispatchToElement(o, r, i.event);
            }
        }, e;
    }(Yh);
    y([ "click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu" ], function(t) {
        oc.prototype[t] = function(e) {
            var n, i, r = e.zrX, o = e.zrY, a = xt(this, r, o);
            if ("mouseup" === t && a || (i = (n = this.findHover(r, o)).target), "mousedown" === t) this._downEl = i, 
            this._downPoint = [ e.zrX, e.zrY ], this._upEl = i; else if ("mouseup" === t) this._upEl = i; else if ("click" === t) {
                if (this._downEl !== this._upEl || !this._downPoint || Hh(this._downPoint, [ e.zrX, e.zrY ]) > 4) return;
                this._downPoint = null;
            }
            this.dispatchToElement(n, t, e);
        };
    });
    var ac = 32, sc = 7, lc = 1, uc = 4, hc = !1, cc = function() {
        function t() {
            this._roots = [], this._displayList = [], this._displayListLen = 0, this.displayableSortFunc = At;
        }
        return t.prototype.traverse = function(t, e) {
            for (var n = 0; n < this._roots.length; n++) this._roots[n].traverse(t, e);
        }, t.prototype.getDisplayList = function(t, e) {
            e = e || !1;
            var n = this._displayList;
            return (t || !n.length) && this.updateDisplayList(e), n;
        }, t.prototype.updateDisplayList = function(t) {
            this._displayListLen = 0;
            for (var e = this._roots, n = this._displayList, i = 0, r = e.length; r > i; i++) this._updateAndAddDisplayable(e[i], null, t);
            n.length = this._displayListLen, wh.canvasSupported && Tt(n, At);
        }, t.prototype._updateAndAddDisplayable = function(t, e, n) {
            if (!t.ignore || n) {
                t.beforeUpdate(), t.update(), t.afterUpdate();
                var i = t.getClipPath();
                if (t.ignoreClip) e = null; else if (i) {
                    e = e ? e.slice() : [];
                    for (var r = i, o = t; r; ) r.parent = o, r.updateTransform(), e.push(r), o = r, 
                    r = r.getClipPath();
                }
                if (t.childrenRef) {
                    for (var a = t.childrenRef(), s = 0; s < a.length; s++) {
                        var l = a[s];
                        t.__dirty && (l.__dirty |= lc), this._updateAndAddDisplayable(l, e, n);
                    }
                    t.__dirty = 0;
                } else {
                    var u = t;
                    e && e.length ? u.__clipPaths = e : u.__clipPaths && u.__clipPaths.length > 0 && (u.__clipPaths = []), 
                    isNaN(u.z) && (Ct(), u.z = 0), isNaN(u.z2) && (Ct(), u.z2 = 0), isNaN(u.zlevel) && (Ct(), 
                    u.zlevel = 0), this._displayList[this._displayListLen++] = u;
                }
                var h = t.getDecalElement && t.getDecalElement();
                h && this._updateAndAddDisplayable(h, e, n);
                var c = t.getTextGuideLine();
                c && this._updateAndAddDisplayable(c, e, n);
                var p = t.getTextContent();
                p && this._updateAndAddDisplayable(p, e, n);
            }
        }, t.prototype.addRoot = function(t) {
            t.__zr && t.__zr.storage === this || this._roots.push(t);
        }, t.prototype.delRoot = function(t) {
            if (t instanceof Array) for (var e = 0, n = t.length; n > e; e++) this.delRoot(t[e]); else {
                var i = p(this._roots, t);
                i >= 0 && this._roots.splice(i, 1);
            }
        }, t.prototype.delAllRoots = function() {
            this._roots = [], this._displayList = [], this._displayListLen = 0;
        }, t.prototype.getRoots = function() {
            return this._roots;
        }, t.prototype.dispose = function() {
            this._displayList = null, this._roots = null;
        }, t;
    }(), pc = "undefined" != typeof window && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function(t) {
        return setTimeout(t, 16);
    }, fc = {
        linear: function(t) {
            return t;
        },
        quadraticIn: function(t) {
            return t * t;
        },
        quadraticOut: function(t) {
            return t * (2 - t);
        },
        quadraticInOut: function(t) {
            return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1);
        },
        cubicIn: function(t) {
            return t * t * t;
        },
        cubicOut: function(t) {
            return --t * t * t + 1;
        },
        cubicInOut: function(t) {
            return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);
        },
        quarticIn: function(t) {
            return t * t * t * t;
        },
        quarticOut: function(t) {
            return 1 - --t * t * t * t;
        },
        quarticInOut: function(t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2);
        },
        quinticIn: function(t) {
            return t * t * t * t * t;
        },
        quinticOut: function(t) {
            return --t * t * t * t * t + 1;
        },
        quinticInOut: function(t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2);
        },
        sinusoidalIn: function(t) {
            return 1 - Math.cos(t * Math.PI / 2);
        },
        sinusoidalOut: function(t) {
            return Math.sin(t * Math.PI / 2);
        },
        sinusoidalInOut: function(t) {
            return .5 * (1 - Math.cos(Math.PI * t));
        },
        exponentialIn: function(t) {
            return 0 === t ? 0 : Math.pow(1024, t - 1);
        },
        exponentialOut: function(t) {
            return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
        },
        exponentialInOut: function(t) {
            return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (2 - Math.pow(2, -10 * (t - 1)));
        },
        circularIn: function(t) {
            return 1 - Math.sqrt(1 - t * t);
        },
        circularOut: function(t) {
            return Math.sqrt(1 - --t * t);
        },
        circularInOut: function(t) {
            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
        },
        elasticIn: function(t) {
            var e, n = .1;
            return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = .1) : e = .4 * Math.asin(1 / n) / (2 * Math.PI), 
            -n * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / .4));
        },
        elasticOut: function(t) {
            var e, n = .1;
            return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = .1) : e = .4 * Math.asin(1 / n) / (2 * Math.PI), 
            n * Math.pow(2, -10 * t) * Math.sin(2 * (t - e) * Math.PI / .4) + 1);
        },
        elasticInOut: function(t) {
            var e, n = .1, i = .4;
            return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = .1) : e = i * Math.asin(1 / n) / (2 * Math.PI), 
            (t *= 2) < 1 ? -.5 * n * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / i) : n * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / i) * .5 + 1);
        },
        backIn: function(t) {
            var e = 1.70158;
            return t * t * ((e + 1) * t - e);
        },
        backOut: function(t) {
            var e = 1.70158;
            return --t * t * ((e + 1) * t + e) + 1;
        },
        backInOut: function(t) {
            var e = 2.5949095;
            return (t *= 2) < 1 ? .5 * t * t * ((e + 1) * t - e) : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2);
        },
        bounceIn: function(t) {
            return 1 - fc.bounceOut(1 - t);
        },
        bounceOut: function(t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
        },
        bounceInOut: function(t) {
            return .5 > t ? .5 * fc.bounceIn(2 * t) : .5 * fc.bounceOut(2 * t - 1) + .5;
        }
    }, dc = function() {
        function t(t) {
            this._initialized = !1, this._startTime = 0, this._pausedTime = 0, this._paused = !1, 
            this._life = t.life || 1e3, this._delay = t.delay || 0, this.loop = null != t.loop && t.loop, 
            this.gap = t.gap || 0, this.easing = t.easing || "linear", this.onframe = t.onframe, 
            this.ondestroy = t.ondestroy, this.onrestart = t.onrestart;
        }
        return t.prototype.step = function(t, e) {
            if (this._initialized || (this._startTime = t + this._delay, this._initialized = !0), 
            !this._paused) {
                var n = (t - this._startTime - this._pausedTime) / this._life;
                0 > n && (n = 0), n = Math.min(n, 1);
                var i = this.easing, r = "string" == typeof i ? fc[i] : i, o = "function" == typeof r ? r(n) : n;
                if (this.onframe && this.onframe(o), 1 === n) {
                    if (!this.loop) return !0;
                    this._restart(t), this.onrestart && this.onrestart();
                }
                return !1;
            }
            this._pausedTime += e;
        }, t.prototype._restart = function(t) {
            var e = (t - this._startTime - this._pausedTime) % this._life;
            this._startTime = t - e + this.gap, this._pausedTime = 0;
        }, t.prototype.pause = function() {
            this._paused = !0;
        }, t.prototype.resume = function() {
            this._paused = !1;
        }, t;
    }(), gc = function(t) {
        this.value = t;
    }, yc = function() {
        function t() {
            this._len = 0;
        }
        return t.prototype.insert = function(t) {
            var e = new gc(t);
            return this.insertEntry(e), e;
        }, t.prototype.insertEntry = function(t) {
            this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t, 
            this._len++;
        }, t.prototype.remove = function(t) {
            var e = t.prev, n = t.next;
            e ? e.next = n : this.head = n, n ? n.prev = e : this.tail = e, t.next = t.prev = null, 
            this._len--;
        }, t.prototype.len = function() {
            return this._len;
        }, t.prototype.clear = function() {
            this.head = this.tail = null, this._len = 0;
        }, t;
    }(), vc = function() {
        function t(t) {
            this._list = new yc(), this._maxSize = 10, this._map = {}, this._maxSize = t;
        }
        return t.prototype.put = function(t, e) {
            var n = this._list, i = this._map, r = null;
            if (null == i[t]) {
                var o = n.len(), a = this._lastRemovedEntry;
                if (o >= this._maxSize && o > 0) {
                    var s = n.head;
                    n.remove(s), delete i[s.key], r = s.value, this._lastRemovedEntry = s;
                }
                a ? a.value = e : a = new gc(e), a.key = t, n.insertEntry(a), i[t] = a;
            }
            return r;
        }, t.prototype.get = function(t) {
            var e = this._map[t], n = this._list;
            return null != e ? (e !== n.tail && (n.remove(e), n.insertEntry(e)), e.value) : void 0;
        }, t.prototype.clear = function() {
            this._list.clear(), this._map = {};
        }, t.prototype.len = function() {
            return this._list.len();
        }, t;
    }(), mc = {
        transparent: [ 0, 0, 0, 0 ],
        aliceblue: [ 240, 248, 255, 1 ],
        antiquewhite: [ 250, 235, 215, 1 ],
        aqua: [ 0, 255, 255, 1 ],
        aquamarine: [ 127, 255, 212, 1 ],
        azure: [ 240, 255, 255, 1 ],
        beige: [ 245, 245, 220, 1 ],
        bisque: [ 255, 228, 196, 1 ],
        black: [ 0, 0, 0, 1 ],
        blanchedalmond: [ 255, 235, 205, 1 ],
        blue: [ 0, 0, 255, 1 ],
        blueviolet: [ 138, 43, 226, 1 ],
        brown: [ 165, 42, 42, 1 ],
        burlywood: [ 222, 184, 135, 1 ],
        cadetblue: [ 95, 158, 160, 1 ],
        chartreuse: [ 127, 255, 0, 1 ],
        chocolate: [ 210, 105, 30, 1 ],
        coral: [ 255, 127, 80, 1 ],
        cornflowerblue: [ 100, 149, 237, 1 ],
        cornsilk: [ 255, 248, 220, 1 ],
        crimson: [ 220, 20, 60, 1 ],
        cyan: [ 0, 255, 255, 1 ],
        darkblue: [ 0, 0, 139, 1 ],
        darkcyan: [ 0, 139, 139, 1 ],
        darkgoldenrod: [ 184, 134, 11, 1 ],
        darkgray: [ 169, 169, 169, 1 ],
        darkgreen: [ 0, 100, 0, 1 ],
        darkgrey: [ 169, 169, 169, 1 ],
        darkkhaki: [ 189, 183, 107, 1 ],
        darkmagenta: [ 139, 0, 139, 1 ],
        darkolivegreen: [ 85, 107, 47, 1 ],
        darkorange: [ 255, 140, 0, 1 ],
        darkorchid: [ 153, 50, 204, 1 ],
        darkred: [ 139, 0, 0, 1 ],
        darksalmon: [ 233, 150, 122, 1 ],
        darkseagreen: [ 143, 188, 143, 1 ],
        darkslateblue: [ 72, 61, 139, 1 ],
        darkslategray: [ 47, 79, 79, 1 ],
        darkslategrey: [ 47, 79, 79, 1 ],
        darkturquoise: [ 0, 206, 209, 1 ],
        darkviolet: [ 148, 0, 211, 1 ],
        deeppink: [ 255, 20, 147, 1 ],
        deepskyblue: [ 0, 191, 255, 1 ],
        dimgray: [ 105, 105, 105, 1 ],
        dimgrey: [ 105, 105, 105, 1 ],
        dodgerblue: [ 30, 144, 255, 1 ],
        firebrick: [ 178, 34, 34, 1 ],
        floralwhite: [ 255, 250, 240, 1 ],
        forestgreen: [ 34, 139, 34, 1 ],
        fuchsia: [ 255, 0, 255, 1 ],
        gainsboro: [ 220, 220, 220, 1 ],
        ghostwhite: [ 248, 248, 255, 1 ],
        gold: [ 255, 215, 0, 1 ],
        goldenrod: [ 218, 165, 32, 1 ],
        gray: [ 128, 128, 128, 1 ],
        green: [ 0, 128, 0, 1 ],
        greenyellow: [ 173, 255, 47, 1 ],
        grey: [ 128, 128, 128, 1 ],
        honeydew: [ 240, 255, 240, 1 ],
        hotpink: [ 255, 105, 180, 1 ],
        indianred: [ 205, 92, 92, 1 ],
        indigo: [ 75, 0, 130, 1 ],
        ivory: [ 255, 255, 240, 1 ],
        khaki: [ 240, 230, 140, 1 ],
        lavender: [ 230, 230, 250, 1 ],
        lavenderblush: [ 255, 240, 245, 1 ],
        lawngreen: [ 124, 252, 0, 1 ],
        lemonchiffon: [ 255, 250, 205, 1 ],
        lightblue: [ 173, 216, 230, 1 ],
        lightcoral: [ 240, 128, 128, 1 ],
        lightcyan: [ 224, 255, 255, 1 ],
        lightgoldenrodyellow: [ 250, 250, 210, 1 ],
        lightgray: [ 211, 211, 211, 1 ],
        lightgreen: [ 144, 238, 144, 1 ],
        lightgrey: [ 211, 211, 211, 1 ],
        lightpink: [ 255, 182, 193, 1 ],
        lightsalmon: [ 255, 160, 122, 1 ],
        lightseagreen: [ 32, 178, 170, 1 ],
        lightskyblue: [ 135, 206, 250, 1 ],
        lightslategray: [ 119, 136, 153, 1 ],
        lightslategrey: [ 119, 136, 153, 1 ],
        lightsteelblue: [ 176, 196, 222, 1 ],
        lightyellow: [ 255, 255, 224, 1 ],
        lime: [ 0, 255, 0, 1 ],
        limegreen: [ 50, 205, 50, 1 ],
        linen: [ 250, 240, 230, 1 ],
        magenta: [ 255, 0, 255, 1 ],
        maroon: [ 128, 0, 0, 1 ],
        mediumaquamarine: [ 102, 205, 170, 1 ],
        mediumblue: [ 0, 0, 205, 1 ],
        mediumorchid: [ 186, 85, 211, 1 ],
        mediumpurple: [ 147, 112, 219, 1 ],
        mediumseagreen: [ 60, 179, 113, 1 ],
        mediumslateblue: [ 123, 104, 238, 1 ],
        mediumspringgreen: [ 0, 250, 154, 1 ],
        mediumturquoise: [ 72, 209, 204, 1 ],
        mediumvioletred: [ 199, 21, 133, 1 ],
        midnightblue: [ 25, 25, 112, 1 ],
        mintcream: [ 245, 255, 250, 1 ],
        mistyrose: [ 255, 228, 225, 1 ],
        moccasin: [ 255, 228, 181, 1 ],
        navajowhite: [ 255, 222, 173, 1 ],
        navy: [ 0, 0, 128, 1 ],
        oldlace: [ 253, 245, 230, 1 ],
        olive: [ 128, 128, 0, 1 ],
        olivedrab: [ 107, 142, 35, 1 ],
        orange: [ 255, 165, 0, 1 ],
        orangered: [ 255, 69, 0, 1 ],
        orchid: [ 218, 112, 214, 1 ],
        palegoldenrod: [ 238, 232, 170, 1 ],
        palegreen: [ 152, 251, 152, 1 ],
        paleturquoise: [ 175, 238, 238, 1 ],
        palevioletred: [ 219, 112, 147, 1 ],
        papayawhip: [ 255, 239, 213, 1 ],
        peachpuff: [ 255, 218, 185, 1 ],
        peru: [ 205, 133, 63, 1 ],
        pink: [ 255, 192, 203, 1 ],
        plum: [ 221, 160, 221, 1 ],
        powderblue: [ 176, 224, 230, 1 ],
        purple: [ 128, 0, 128, 1 ],
        red: [ 255, 0, 0, 1 ],
        rosybrown: [ 188, 143, 143, 1 ],
        royalblue: [ 65, 105, 225, 1 ],
        saddlebrown: [ 139, 69, 19, 1 ],
        salmon: [ 250, 128, 114, 1 ],
        sandybrown: [ 244, 164, 96, 1 ],
        seagreen: [ 46, 139, 87, 1 ],
        seashell: [ 255, 245, 238, 1 ],
        sienna: [ 160, 82, 45, 1 ],
        silver: [ 192, 192, 192, 1 ],
        skyblue: [ 135, 206, 235, 1 ],
        slateblue: [ 106, 90, 205, 1 ],
        slategray: [ 112, 128, 144, 1 ],
        slategrey: [ 112, 128, 144, 1 ],
        snow: [ 255, 250, 250, 1 ],
        springgreen: [ 0, 255, 127, 1 ],
        steelblue: [ 70, 130, 180, 1 ],
        tan: [ 210, 180, 140, 1 ],
        teal: [ 0, 128, 128, 1 ],
        thistle: [ 216, 191, 216, 1 ],
        tomato: [ 255, 99, 71, 1 ],
        turquoise: [ 64, 224, 208, 1 ],
        violet: [ 238, 130, 238, 1 ],
        wheat: [ 245, 222, 179, 1 ],
        white: [ 255, 255, 255, 1 ],
        whitesmoke: [ 245, 245, 245, 1 ],
        yellow: [ 255, 255, 0, 1 ],
        yellowgreen: [ 154, 205, 50, 1 ]
    }, _c = new vc(20), xc = null, wc = Vt, bc = Ht, Sc = (Object.freeze || Object)({
        parse: Bt,
        lift: Ft,
        toHex: function(t) {
            var e = Bt(t);
            return e ? ((1 << 24) + (e[0] << 16) + (e[1] << 8) + +e[2]).toString(16).slice(1) : void 0;
        },
        fastLerp: Vt,
        fastMapToColor: wc,
        lerp: Ht,
        mapToColor: bc,
        modifyHSL: function(t, e, n, i) {
            var r = Bt(t);
            return t ? (r = function(t) {
                if (t) {
                    var e, n, i = t[0] / 255, r = t[1] / 255, o = t[2] / 255, a = Math.min(i, r, o), s = Math.max(i, r, o), l = s - a, u = (s + a) / 2;
                    if (0 === l) e = 0, n = 0; else {
                        n = .5 > u ? l / (s + a) : l / (2 - s - a);
                        var h = ((s - i) / 6 + l / 2) / l, c = ((s - r) / 6 + l / 2) / l, p = ((s - o) / 6 + l / 2) / l;
                        i === s ? e = p - c : r === s ? e = 1 / 3 + h - p : o === s && (e = 2 / 3 + c - h), 
                        0 > e && (e += 1), e > 1 && (e -= 1);
                    }
                    var f = [ 360 * e, n, u ];
                    return null != t[3] && f.push(t[3]), f;
                }
            }(r), null != e && (r[0] = function(t) {
                return 0 > (t = Math.round(t)) ? 0 : t > 360 ? 360 : t;
            }(e)), null != n && (r[1] = Pt(n)), null != i && (r[2] = Pt(i)), Wt(zt(r), "rgba")) : void 0;
        },
        modifyAlpha: Gt,
        stringify: Wt,
        lum: Ut,
        random: function() {
            return "rgb(" + Math.round(255 * Math.random()) + "," + Math.round(255 * Math.random()) + "," + Math.round(255 * Math.random()) + ")";
        }
    }), Mc = Array.prototype.slice, Tc = [ 0, 0, 0, 0 ], Cc = function() {
        function t(t) {
            this.keyframes = [], this.maxTime = 0, this.arrDim = 0, this.interpolable = !0, 
            this._needsSort = !1, this._isAllValueEqual = !0, this._lastFrame = 0, this._lastFramePercent = 0, 
            this.propName = t;
        }
        return t.prototype.isFinished = function() {
            return this._finished;
        }, t.prototype.setFinished = function() {
            this._finished = !0, this._additiveTrack && this._additiveTrack.setFinished();
        }, t.prototype.needsAnimate = function() {
            return !this._isAllValueEqual && this.keyframes.length >= 2 && this.interpolable;
        }, t.prototype.getAdditiveTrack = function() {
            return this._additiveTrack;
        }, t.prototype.addKeyframe = function(t, e) {
            t >= this.maxTime ? this.maxTime = t : this._needsSort = !0;
            var n = this.keyframes, i = n.length;
            if (this.interpolable) if (g(e)) {
                var r = function(t) {
                    return g(t && t[0]) ? 2 : 1;
                }(e);
                if (i > 0 && this.arrDim !== r) return void (this.interpolable = !1);
                if (1 === r && "number" != typeof e[0] || 2 === r && "number" != typeof e[0][0]) return void (this.interpolable = !1);
                if (i > 0) {
                    var o = n[i - 1];
                    this._isAllValueEqual && (1 === r && Kt(e, o.value) || (this._isAllValueEqual = !1));
                }
                this.arrDim = r;
            } else {
                if (this.arrDim > 0) return void (this.interpolable = !1);
                if ("string" == typeof e) {
                    var a = Bt(e);
                    a ? (e = a, this.isValueColor = !0) : this.interpolable = !1;
                } else if ("number" != typeof e || isNaN(e)) return void (this.interpolable = !1);
                if (this._isAllValueEqual && i > 0) {
                    o = n[i - 1];
                    (this.isValueColor && !Kt(o.value, e) || o.value !== e) && (this._isAllValueEqual = !1);
                }
            }
            var s = {
                time: t,
                value: e,
                percent: 0
            };
            return this.keyframes.push(s), s;
        }, t.prototype.prepare = function(t) {
            var e = this.keyframes;
            this._needsSort && e.sort(function(t, e) {
                return t.time - e.time;
            });
            for (var n = this.arrDim, i = e.length, r = e[i - 1], o = 0; i > o; o++) e[o].percent = e[o].time / this.maxTime, 
            n > 0 && o !== i - 1 && Zt(e[o].value, r.value, n);
            if (t && this.needsAnimate() && t.needsAnimate() && n === t.arrDim && this.isValueColor === t.isValueColor && !t._finished) {
                this._additiveTrack = t;
                var a = e[0].value;
                for (o = 0; i > o; o++) 0 === n ? e[o].additiveValue = this.isValueColor ? qt([], e[o].value, a, -1) : e[o].value - a : 1 === n ? e[o].additiveValue = qt([], e[o].value, a, -1) : 2 === n && (e[o].additiveValue = jt([], e[o].value, a, -1));
            }
        }, t.prototype.step = function(t, e) {
            if (!this._finished) {
                this._additiveTrack && this._additiveTrack._finished && (this._additiveTrack = null);
                var n, i = null != this._additiveTrack, r = i ? "additiveValue" : "value", o = this.keyframes, a = this.keyframes.length, s = this.propName, l = this.arrDim, u = this.isValueColor;
                if (0 > e) n = 0; else if (e < this._lastFramePercent) {
                    for (n = Math.min(this._lastFrame + 1, a - 1); n >= 0 && !(o[n].percent <= e); n--) ;
                    n = Math.min(n, a - 2);
                } else {
                    for (n = this._lastFrame; a > n && !(o[n].percent > e); n++) ;
                    n = Math.min(n - 1, a - 2);
                }
                var h = o[n + 1], c = o[n];
                if (c && h) {
                    this._lastFrame = n, this._lastFramePercent = e;
                    var p = h.percent - c.percent;
                    if (0 !== p) {
                        var f = (e - c.percent) / p, d = i ? this._additiveValue : u ? Tc : t[s];
                        if ((l > 0 || u) && !d && (d = this._additiveValue = []), this.useSpline) {
                            var g = o[n][r], y = o[0 === n ? n : n - 1][r], v = o[n > a - 2 ? a - 1 : n + 1][r], m = o[n > a - 3 ? a - 1 : n + 2][r];
                            if (l > 0) 1 === l ? Jt(d, y, g, v, m, f, f * f, f * f * f) : function(t, e, n, i, r, o, a, s) {
                                for (var l = e.length, u = e[0].length, h = 0; l > h; h++) {
                                    t[h] || (t[1] = []);
                                    for (var c = 0; u > c; c++) t[h][c] = $t(e[h][c], n[h][c], i[h][c], r[h][c], o, a, s);
                                }
                            }(d, y, g, v, m, f, f * f, f * f * f); else if (u) Jt(d, y, g, v, m, f, f * f, f * f * f), 
                            i || (t[s] = te(d)); else {
                                var _ = void 0;
                                _ = this.interpolable ? $t(y, g, v, m, f, f * f, f * f * f) : v, i ? this._additiveValue = _ : t[s] = _;
                            }
                        } else if (l > 0) 1 === l ? Yt(d, c[r], h[r], f) : function(t, e, n, i) {
                            for (var r = e.length, o = r && e[0].length, a = 0; r > a; a++) {
                                t[a] || (t[a] = []);
                                for (var s = 0; o > s; s++) t[a][s] = Xt(e[a][s], n[a][s], i);
                            }
                        }(d, c[r], h[r], f); else if (u) Yt(d, c[r], h[r], f), i || (t[s] = te(d)); else {
                            _ = void 0;
                            _ = this.interpolable ? Xt(c[r], h[r], f) : function(t, e, n) {
                                return n > .5 ? e : t;
                            }(c[r], h[r], f), i ? this._additiveValue = _ : t[s] = _;
                        }
                        i && this._addToTarget(t);
                    }
                }
            }
        }, t.prototype._addToTarget = function(t) {
            var e = this.arrDim, n = this.propName, i = this._additiveValue;
            0 === e ? this.isValueColor ? (Bt(t[n], Tc), qt(Tc, Tc, i, 1), t[n] = te(Tc)) : t[n] = t[n] + i : 1 === e ? qt(t[n], t[n], i, 1) : 2 === e && jt(t[n], t[n], i, 1);
        }, t;
    }(), Ac = function() {
        function t(t, e, n) {
            return this._tracks = {}, this._trackKeys = [], this._delay = 0, this._maxTime = 0, 
            this._paused = !1, this._started = 0, this._clip = null, this._target = t, this._loop = e, 
            e && n ? void a("Can' use additive animation on looped animation.") : void (this._additiveAnimators = n);
        }
        return t.prototype.getTarget = function() {
            return this._target;
        }, t.prototype.changeTarget = function(t) {
            this._target = t;
        }, t.prototype.when = function(t, e) {
            return this.whenWithKeys(t, e, w(e));
        }, t.prototype.whenWithKeys = function(t, e, n) {
            for (var i = this._tracks, r = 0; r < n.length; r++) {
                var o = n[r], a = i[o];
                if (!a) {
                    a = i[o] = new Cc(o);
                    var s = void 0, l = this._getAdditiveTrack(o);
                    if (l) {
                        var u = l.keyframes[l.keyframes.length - 1];
                        s = u && u.value, l.isValueColor && s && (s = te(s));
                    } else s = this._target[o];
                    if (null == s) continue;
                    0 !== t && a.addKeyframe(0, Qt(s)), this._trackKeys.push(o);
                }
                a.addKeyframe(t, Qt(e[o]));
            }
            return this._maxTime = Math.max(this._maxTime, t), this;
        }, t.prototype.pause = function() {
            this._clip.pause(), this._paused = !0;
        }, t.prototype.resume = function() {
            this._clip.resume(), this._paused = !1;
        }, t.prototype.isPaused = function() {
            return !!this._paused;
        }, t.prototype._doneCallback = function() {
            this._setTracksFinished(), this._clip = null;
            var t = this._doneList;
            if (t) for (var e = t.length, n = 0; e > n; n++) t[n].call(this);
        }, t.prototype._abortedCallback = function() {
            this._setTracksFinished();
            var t = this.animation, e = this._abortedList;
            if (t && t.removeClip(this._clip), this._clip = null, e) for (var n = 0; n < e.length; n++) e[n].call(this);
        }, t.prototype._setTracksFinished = function() {
            for (var t = this._tracks, e = this._trackKeys, n = 0; n < e.length; n++) t[e[n]].setFinished();
        }, t.prototype._getAdditiveTrack = function(t) {
            var e, n = this._additiveAnimators;
            if (n) for (var i = 0; i < n.length; i++) {
                var r = n[i].getTrack(t);
                r && (e = r);
            }
            return e;
        }, t.prototype.start = function(t, e) {
            if (!(this._started > 0)) {
                this._started = 1;
                for (var n = this, i = [], r = 0; r < this._trackKeys.length; r++) {
                    var o = this._trackKeys[r], a = this._tracks[o], s = this._getAdditiveTrack(o), l = a.keyframes;
                    if (a.prepare(s), a.needsAnimate()) i.push(a); else if (!a.interpolable) {
                        var u = l[l.length - 1];
                        u && (n._target[a.propName] = u.value);
                    }
                }
                if (i.length || e) {
                    var h = new dc({
                        life: this._maxTime,
                        loop: this._loop,
                        delay: this._delay,
                        onframe: function(t) {
                            n._started = 2;
                            var e = n._additiveAnimators;
                            if (e) {
                                for (var r = !1, o = 0; o < e.length; o++) if (e[o]._clip) {
                                    r = !0;
                                    break;
                                }
                                r || (n._additiveAnimators = null);
                            }
                            for (o = 0; o < i.length; o++) i[o].step(n._target, t);
                            var a = n._onframeList;
                            if (a) for (o = 0; o < a.length; o++) a[o](n._target, t);
                        },
                        ondestroy: function() {
                            n._doneCallback();
                        }
                    });
                    this._clip = h, this.animation && this.animation.addClip(h), t && "spline" !== t && (h.easing = t);
                } else this._doneCallback();
                return this;
            }
        }, t.prototype.stop = function(t) {
            if (this._clip) {
                var e = this._clip;
                t && e.onframe(1), this._abortedCallback();
            }
        }, t.prototype.delay = function(t) {
            return this._delay = t, this;
        }, t.prototype.during = function(t) {
            return t && (this._onframeList || (this._onframeList = []), this._onframeList.push(t)), 
            this;
        }, t.prototype.done = function(t) {
            return t && (this._doneList || (this._doneList = []), this._doneList.push(t)), this;
        }, t.prototype.aborted = function(t) {
            return t && (this._abortedList || (this._abortedList = []), this._abortedList.push(t)), 
            this;
        }, t.prototype.getClip = function() {
            return this._clip;
        }, t.prototype.getTrack = function(t) {
            return this._tracks[t];
        }, t.prototype.stopTracks = function(t, e) {
            if (!t.length || !this._clip) return !0;
            for (var n = this._tracks, i = this._trackKeys, r = 0; r < t.length; r++) {
                var o = n[t[r]];
                o && (e ? o.step(this._target, 1) : 1 === this._started && o.step(this._target, 0), 
                o.setFinished());
            }
            var a = !0;
            for (r = 0; r < i.length; r++) if (!n[i[r]].isFinished()) {
                a = !1;
                break;
            }
            return a && this._abortedCallback(), a;
        }, t.prototype.saveFinalToTarget = function(t, e) {
            if (t) {
                e = e || this._trackKeys;
                for (var n = 0; n < e.length; n++) {
                    var i = e[n], r = this._tracks[i];
                    if (r && !r.isFinished()) {
                        var o = r.keyframes, a = o[o.length - 1];
                        if (a) {
                            var s = Qt(a.value);
                            r.isValueColor && (s = te(s)), t[i] = s;
                        }
                    }
                }
            }
        }, t.prototype.__changeFinalValue = function(t, e) {
            e = e || w(t);
            for (var n = 0; n < e.length; n++) {
                var i = e[n], r = this._tracks[i];
                if (r) {
                    var o = r.keyframes;
                    if (o.length > 1) {
                        var a = o.pop();
                        r.addKeyframe(a.time, t[i]), r.prepare(r.getAdditiveTrack());
                    }
                }
            }
        }, t;
    }(), kc = function(t) {
        function e(e) {
            var n = t.call(this) || this;
            return n._running = !1, n._time = 0, n._pausedTime = 0, n._pauseStart = 0, n._paused = !1, 
            e = e || {}, n.stage = e.stage || {}, n.onframe = e.onframe || function() {}, n;
        }
        return n(e, t), e.prototype.addClip = function(t) {
            t.animation && this.removeClip(t), this._clipsHead ? (this._clipsTail.next = t, 
            t.prev = this._clipsTail, t.next = null, this._clipsTail = t) : this._clipsHead = this._clipsTail = t, 
            t.animation = this;
        }, e.prototype.addAnimator = function(t) {
            t.animation = this;
            var e = t.getClip();
            e && this.addClip(e);
        }, e.prototype.removeClip = function(t) {
            if (t.animation) {
                var e = t.prev, n = t.next;
                e ? e.next = n : this._clipsHead = n, n ? n.prev = e : this._clipsTail = e, t.next = t.prev = t.animation = null;
            }
        }, e.prototype.removeAnimator = function(t) {
            var e = t.getClip();
            e && this.removeClip(e), t.animation = null;
        }, e.prototype.update = function(t) {
            for (var e = new Date().getTime() - this._pausedTime, n = e - this._time, i = this._clipsHead; i; ) {
                var r = i.next;
                i.step(e, n) ? (i.ondestroy && i.ondestroy(), this.removeClip(i), i = r) : i = r;
            }
            this._time = e, t || (this.onframe(n), this.trigger("frame", n), this.stage.update && this.stage.update());
        }, e.prototype._startLoop = function() {
            var t = this;
            this._running = !0, pc(function e() {
                t._running && (pc(e), !t._paused && t.update());
            });
        }, e.prototype.start = function() {
            this._running || (this._time = new Date().getTime(), this._pausedTime = 0, this._startLoop());
        }, e.prototype.stop = function() {
            this._running = !1;
        }, e.prototype.pause = function() {
            this._paused || (this._pauseStart = new Date().getTime(), this._paused = !0);
        }, e.prototype.resume = function() {
            this._paused && (this._pausedTime += new Date().getTime() - this._pauseStart, this._paused = !1);
        }, e.prototype.clear = function() {
            for (var t = this._clipsHead; t; ) {
                var e = t.next;
                t.prev = t.next = t.animation = null, t = e;
            }
            this._clipsHead = this._clipsTail = null;
        }, e.prototype.isFinished = function() {
            return null == this._clipsHead;
        }, e.prototype.animate = function(t, e) {
            e = e || {}, this.start();
            var n = new Ac(t, e.loop);
            return this.addAnimator(n), n;
        }, e;
    }(Yh), Ic = wh.domSupported, Dc = function() {
        var t = [ "click", "dblclick", "mousewheel", "wheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu" ], e = {
            pointerdown: 1,
            pointerup: 1,
            pointermove: 1,
            pointerout: 1
        }, n = v(t, function(t) {
            var n = t.replace("mouse", "pointer");
            return e.hasOwnProperty(n) ? n : t;
        });
        return {
            mouse: t,
            touch: [ "touchstart", "touchend", "touchmove" ],
            pointer: n
        };
    }(), Pc = {
        mouse: [ "mousemove", "mouseup" ],
        pointer: [ "pointermove", "pointerup" ]
    }, Lc = !1, Oc = function(t, e) {
        this.stopPropagation = q, this.stopImmediatePropagation = q, this.preventDefault = q, 
        this.type = e.type, this.target = this.currentTarget = t.dom, this.pointerType = e.pointerType, 
        this.clientX = e.clientX, this.clientY = e.clientY;
    }, Rc = {
        mousedown: function(t) {
            t = gt(this.dom, t), this.__mayPointerCapture = [ t.zrX, t.zrY ], this.trigger("mousedown", t);
        },
        mousemove: function(t) {
            t = gt(this.dom, t);
            var e = this.__mayPointerCapture;
            !e || t.zrX === e[0] && t.zrY === e[1] || this.__togglePointerCapture(!0), this.trigger("mousemove", t);
        },
        mouseup: function(t) {
            t = gt(this.dom, t), this.__togglePointerCapture(!1), this.trigger("mouseup", t);
        },
        mouseout: function(t) {
            ie(this, (t = gt(this.dom, t)).toElement || t.relatedTarget) || (this.__pointerCapturing && (t.zrEventControl = "no_globalout"), 
            this.trigger("mouseout", t));
        },
        wheel: function(t) {
            Lc = !0, t = gt(this.dom, t), this.trigger("mousewheel", t);
        },
        mousewheel: function(t) {
            Lc || (t = gt(this.dom, t), this.trigger("mousewheel", t));
        },
        touchstart: function(t) {
            ne(t = gt(this.dom, t)), this.__lastTouchMoment = new Date(), this.handler.processGesture(t, "start"), 
            Rc.mousemove.call(this, t), Rc.mousedown.call(this, t);
        },
        touchmove: function(t) {
            ne(t = gt(this.dom, t)), this.handler.processGesture(t, "change"), Rc.mousemove.call(this, t);
        },
        touchend: function(t) {
            ne(t = gt(this.dom, t)), this.handler.processGesture(t, "end"), Rc.mouseup.call(this, t), 
            +new Date() - +this.__lastTouchMoment < 300 && Rc.click.call(this, t);
        },
        pointerdown: function(t) {
            Rc.mousedown.call(this, t);
        },
        pointermove: function(t) {
            ee(t) || Rc.mousemove.call(this, t);
        },
        pointerup: function(t) {
            Rc.mouseup.call(this, t);
        },
        pointerout: function(t) {
            ee(t) || Rc.mouseout.call(this, t);
        }
    };
    y([ "click", "dblclick", "contextmenu" ], function(t) {
        Rc[t] = function(e) {
            e = gt(this.dom, e), this.trigger(t, e);
        };
    });
    var Ec = {
        pointermove: function(t) {
            ee(t) || Ec.mousemove.call(this, t);
        },
        pointerup: function(t) {
            Ec.mouseup.call(this, t);
        },
        mousemove: function(t) {
            this.trigger("mousemove", t);
        },
        mouseup: function(t) {
            var e = this.__pointerCapturing;
            this.__togglePointerCapture(!1), this.trigger("mouseup", t), e && (t.zrEventControl = "only_globalout", 
            this.trigger("mouseout", t));
        }
    }, Nc = function(t, e) {
        this.mounted = {}, this.listenerOpts = {}, this.touching = !1, this.domTarget = t, 
        this.domHandlers = e;
    }, Bc = function(t) {
        function e(e, n) {
            var i = t.call(this) || this;
            return i.__pointerCapturing = !1, i.dom = e, i.painterRoot = n, i._localHandlerScope = new Nc(e, Rc), 
            Ic && (i._globalHandlerScope = new Nc(document, Ec)), re(i, i._localHandlerScope), 
            i;
        }
        return n(e, t), e.prototype.dispose = function() {
            se(this._localHandlerScope), Ic && se(this._globalHandlerScope);
        }, e.prototype.setCursor = function(t) {
            this.dom.style && (this.dom.style.cursor = t || "default");
        }, e.prototype.__togglePointerCapture = function(t) {
            if (this.__mayPointerCapture = null, Ic && +this.__pointerCapturing ^ +t) {
                this.__pointerCapturing = t;
                var e = this._globalHandlerScope;
                t ? oe(this, e) : se(e);
            }
        }, e;
    }(Yh), zc = 1;
    "undefined" != typeof window && (zc = Math.max(window.devicePixelRatio || window.screen && window.screen.deviceXDPI / window.screen.logicalXDPI || 1, 1));
    var Fc, Vc, Hc = zc, Gc = .4, Wc = "#333", Uc = "#ccc", Xc = (Object.freeze || Object)({
        create: le,
        identity: ue,
        copy: he,
        mul: ce,
        translate: pe,
        rotate: fe,
        scale: de,
        invert: ge,
        clone: function(t) {
            var e = [ 1, 0, 0, 1, 0, 0 ];
            return he(e, t), e;
        }
    }), Yc = ue, qc = 5e-5, jc = [], Zc = [], Kc = [ 1, 0, 0, 1, 0, 0 ], $c = Math.abs, Jc = function() {
        function t() {}
        return t.prototype.setPosition = function(t) {
            this.x = t[0], this.y = t[1];
        }, t.prototype.setScale = function(t) {
            this.scaleX = t[0], this.scaleY = t[1];
        }, t.prototype.setSkew = function(t) {
            this.skewX = t[0], this.skewY = t[1];
        }, t.prototype.setOrigin = function(t) {
            this.originX = t[0], this.originY = t[1];
        }, t.prototype.needLocalTransform = function() {
            return ye(this.rotation) || ye(this.x) || ye(this.y) || ye(this.scaleX - 1) || ye(this.scaleY - 1);
        }, t.prototype.updateTransform = function() {
            var t = this.parent, e = t && t.transform, n = this.needLocalTransform(), i = this.transform;
            return n || e ? (i = i || [ 1, 0, 0, 1, 0, 0 ], n ? this.getLocalTransform(i) : Yc(i), 
            e && (n ? ce(i, t.transform, i) : he(i, t.transform)), this.transform = i, void this._resolveGlobalScaleRatio(i)) : void (i && Yc(i));
        }, t.prototype._resolveGlobalScaleRatio = function(t) {
            var e = this.globalScaleRatio;
            if (null != e && 1 !== e) {
                this.getGlobalScale(jc);
                var n = jc[0] < 0 ? -1 : 1, i = jc[1] < 0 ? -1 : 1, r = ((jc[0] - n) * e + n) / jc[0] || 0, o = ((jc[1] - i) * e + i) / jc[1] || 0;
                t[0] *= r, t[1] *= r, t[2] *= o, t[3] *= o;
            }
            this.invTransform = this.invTransform || [ 1, 0, 0, 1, 0, 0 ], ge(this.invTransform, t);
        }, t.prototype.getLocalTransform = function(e) {
            return t.getLocalTransform(this, e);
        }, t.prototype.getComputedTransform = function() {
            for (var t = this, e = []; t; ) e.push(t), t = t.parent;
            for (;t = e.pop(); ) t.updateTransform();
            return this.transform;
        }, t.prototype.setLocalTransform = function(t) {
            if (t) {
                var e = t[0] * t[0] + t[1] * t[1], n = t[2] * t[2] + t[3] * t[3], i = Math.atan2(t[1], t[0]), r = Math.PI / 2 + i - Math.atan2(t[3], t[2]);
                n = Math.sqrt(n) * Math.cos(r), e = Math.sqrt(e), this.skewX = r, this.skewY = 0, 
                this.rotation = -i, this.x = +t[4], this.y = +t[5], this.scaleX = e, this.scaleY = n, 
                this.originX = 0, this.originY = 0;
            }
        }, t.prototype.decomposeTransform = function() {
            if (this.transform) {
                var t = this.parent, e = this.transform;
                t && t.transform && (ce(Zc, t.invTransform, e), e = Zc);
                var n = this.originX, i = this.originY;
                (n || i) && (Kc[4] = n, Kc[5] = i, ce(Zc, e, Kc), Zc[4] -= n, Zc[5] -= i, e = Zc), 
                this.setLocalTransform(e);
            }
        }, t.prototype.getGlobalScale = function(t) {
            var e = this.transform;
            return t = t || [], e ? (t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1]), t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3]), 
            e[0] < 0 && (t[0] = -t[0]), e[3] < 0 && (t[1] = -t[1]), t) : (t[0] = 1, t[1] = 1, 
            t);
        }, t.prototype.transformCoordToLocal = function(t, e) {
            var n = [ t, e ], i = this.invTransform;
            return i && ot(n, n, i), n;
        }, t.prototype.transformCoordToGlobal = function(t, e) {
            var n = [ t, e ], i = this.transform;
            return i && ot(n, n, i), n;
        }, t.prototype.getLineScale = function() {
            var t = this.transform;
            return t && $c(t[0] - 1) > 1e-10 && $c(t[3] - 1) > 1e-10 ? Math.sqrt($c(t[0] * t[3] - t[2] * t[1])) : 1;
        }, t.getLocalTransform = function(t, e) {
            e = e || [];
            var n = t.originX || 0, i = t.originY || 0, r = t.scaleX, o = t.scaleY, a = t.rotation || 0, s = t.x, l = t.y, u = t.skewX ? Math.tan(t.skewX) : 0, h = t.skewY ? Math.tan(-t.skewY) : 0;
            return n || i ? (e[4] = -n * r - u * i * o, e[5] = -i * o - h * n * r) : e[4] = e[5] = 0, 
            e[0] = r, e[3] = o, e[1] = h * r, e[2] = u * o, a && fe(e, e, a), e[4] += n + s, 
            e[5] += i + l, e;
        }, t.initDefaultProps = function() {
            var e = t.prototype;
            e.x = 0, e.y = 0, e.scaleX = 1, e.scaleY = 1, e.originX = 0, e.originY = 0, e.skewX = 0, 
            e.skewY = 0, e.rotation = 0, e.globalScaleRatio = 1;
        }(), t;
    }(), Qc = function() {
        function t(t, e) {
            this.x = t || 0, this.y = e || 0;
        }
        return t.prototype.copy = function(t) {
            return this.x = t.x, this.y = t.y, this;
        }, t.prototype.clone = function() {
            return new t(this.x, this.y);
        }, t.prototype.set = function(t, e) {
            return this.x = t, this.y = e, this;
        }, t.prototype.equal = function(t) {
            return t.x === this.x && t.y === this.y;
        }, t.prototype.add = function(t) {
            return this.x += t.x, this.y += t.y, this;
        }, t.prototype.scale = function(t) {
            this.x *= t, this.y *= t;
        }, t.prototype.scaleAndAdd = function(t, e) {
            this.x += t.x * e, this.y += t.y * e;
        }, t.prototype.sub = function(t) {
            return this.x -= t.x, this.y -= t.y, this;
        }, t.prototype.dot = function(t) {
            return this.x * t.x + this.y * t.y;
        }, t.prototype.len = function() {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }, t.prototype.lenSquare = function() {
            return this.x * this.x + this.y * this.y;
        }, t.prototype.normalize = function() {
            var t = this.len();
            return this.x /= t, this.y /= t, this;
        }, t.prototype.distance = function(t) {
            var e = this.x - t.x, n = this.y - t.y;
            return Math.sqrt(e * e + n * n);
        }, t.prototype.distanceSquare = function(t) {
            var e = this.x - t.x, n = this.y - t.y;
            return e * e + n * n;
        }, t.prototype.negate = function() {
            return this.x = -this.x, this.y = -this.y, this;
        }, t.prototype.transform = function(t) {
            if (t) {
                var e = this.x, n = this.y;
                return this.x = t[0] * e + t[2] * n + t[4], this.y = t[1] * e + t[3] * n + t[5], 
                this;
            }
        }, t.prototype.toArray = function(t) {
            return t[0] = this.x, t[1] = this.y, t;
        }, t.prototype.fromArray = function(t) {
            this.x = t[0], this.y = t[1];
        }, t.set = function(t, e, n) {
            t.x = e, t.y = n;
        }, t.copy = function(t, e) {
            t.x = e.x, t.y = e.y;
        }, t.len = function(t) {
            return Math.sqrt(t.x * t.x + t.y * t.y);
        }, t.lenSquare = function(t) {
            return t.x * t.x + t.y * t.y;
        }, t.dot = function(t, e) {
            return t.x * e.x + t.y * e.y;
        }, t.add = function(t, e, n) {
            t.x = e.x + n.x, t.y = e.y + n.y;
        }, t.sub = function(t, e, n) {
            t.x = e.x - n.x, t.y = e.y - n.y;
        }, t.scale = function(t, e, n) {
            t.x = e.x * n, t.y = e.y * n;
        }, t.scaleAndAdd = function(t, e, n, i) {
            t.x = e.x + n.x * i, t.y = e.y + n.y * i;
        }, t.lerp = function(t, e, n, i) {
            var r = 1 - i;
            t.x = r * e.x + i * n.x, t.y = r * e.y + i * n.y;
        }, t;
    }(), tp = Math.min, ep = Math.max, np = new Qc(), ip = new Qc(), rp = new Qc(), op = new Qc(), ap = new Qc(), sp = new Qc(), lp = function() {
        function t(t, e, n, i) {
            0 > n && (t += n, n = -n), 0 > i && (e += i, i = -i), this.x = t, this.y = e, this.width = n, 
            this.height = i;
        }
        return t.prototype.union = function(t) {
            var e = tp(t.x, this.x), n = tp(t.y, this.y);
            this.width = isFinite(this.x) && isFinite(this.width) ? ep(t.x + t.width, this.x + this.width) - e : t.width, 
            this.height = isFinite(this.y) && isFinite(this.height) ? ep(t.y + t.height, this.y + this.height) - n : t.height, 
            this.x = e, this.y = n;
        }, t.prototype.applyTransform = function(e) {
            t.applyTransform(this, this, e);
        }, t.prototype.calculateTransform = function(t) {
            var e = this, n = t.width / e.width, i = t.height / e.height, r = [ 1, 0, 0, 1, 0, 0 ];
            return pe(r, r, [ -e.x, -e.y ]), de(r, r, [ n, i ]), pe(r, r, [ t.x, t.y ]), r;
        }, t.prototype.intersect = function(e, n) {
            if (!e) return !1;
            e instanceof t || (e = t.create(e));
            var i = this, r = i.x, o = i.x + i.width, a = i.y, s = i.y + i.height, l = e.x, u = e.x + e.width, h = e.y, c = e.y + e.height, p = !(l > o || r > u || h > s || a > c);
            if (n) {
                var f = 1 / 0, d = 0, g = Math.abs(o - l), y = Math.abs(u - r), v = Math.abs(s - h), m = Math.abs(c - a), _ = Math.min(g, y), x = Math.min(v, m);
                l > o || r > u ? _ > d && (d = _, y > g ? Qc.set(sp, -g, 0) : Qc.set(sp, y, 0)) : f > _ && (f = _, 
                y > g ? Qc.set(ap, g, 0) : Qc.set(ap, -y, 0)), h > s || a > c ? x > d && (d = x, 
                m > v ? Qc.set(sp, 0, -v) : Qc.set(sp, 0, m)) : f > _ && (f = _, m > v ? Qc.set(ap, 0, v) : Qc.set(ap, 0, -m));
            }
            return n && Qc.copy(n, p ? ap : sp), p;
        }, t.prototype.contain = function(t, e) {
            var n = this;
            return t >= n.x && t <= n.x + n.width && e >= n.y && e <= n.y + n.height;
        }, t.prototype.clone = function() {
            return new t(this.x, this.y, this.width, this.height);
        }, t.prototype.copy = function(e) {
            t.copy(this, e);
        }, t.prototype.plain = function() {
            return {
                x: this.x,
                y: this.y,
                width: this.width,
                height: this.height
            };
        }, t.prototype.isFinite = function() {
            return isFinite(this.x) && isFinite(this.y) && isFinite(this.width) && isFinite(this.height);
        }, t.prototype.isZero = function() {
            return 0 === this.width || 0 === this.height;
        }, t.create = function(e) {
            return new t(e.x, e.y, e.width, e.height);
        }, t.copy = function(t, e) {
            t.x = e.x, t.y = e.y, t.width = e.width, t.height = e.height;
        }, t.applyTransform = function(e, n, i) {
            if (i) {
                if (i[1] < 1e-5 && i[1] > -1e-5 && i[2] < 1e-5 && i[2] > -1e-5) {
                    var r = i[0], o = i[3], a = i[4], s = i[5];
                    return e.x = n.x * r + a, e.y = n.y * o + s, e.width = n.width * r, e.height = n.height * o, 
                    e.width < 0 && (e.x += e.width, e.width = -e.width), void (e.height < 0 && (e.y += e.height, 
                    e.height = -e.height));
                }
                np.x = rp.x = n.x, np.y = op.y = n.y, ip.x = op.x = n.x + n.width, ip.y = rp.y = n.y + n.height, 
                np.transform(i), op.transform(i), ip.transform(i), rp.transform(i), e.x = tp(np.x, ip.x, rp.x, op.x), 
                e.y = tp(np.y, ip.y, rp.y, op.y);
                var l = ep(np.x, ip.x, rp.x, op.x), u = ep(np.y, ip.y, rp.y, op.y);
                e.width = l - e.x, e.height = u - e.y;
            } else e !== n && t.copy(e, n);
        }, t;
    }(), up = {}, hp = "12px sans-serif", cp = {
        measureText: function(t, e) {
            return Fc || (Fc = Rh().getContext("2d")), Vc !== e && (Vc = Fc.font = e || hp), 
            Fc.measureText(t);
        }
    }, pp = "__zr_normal__", fp = [ "x", "y", "scaleX", "scaleY", "originX", "originY", "rotation", "ignore" ], dp = {
        x: !0,
        y: !0,
        scaleX: !0,
        scaleY: !0,
        originX: !0,
        originY: !0,
        rotation: !0,
        ignore: !1
    }, gp = {}, yp = new lp(0, 0, 0, 0), vp = function() {
        function t(t) {
            this.id = o(), this.animators = [], this.currentStates = [], this.states = {}, this._init(t);
        }
        return t.prototype._init = function(t) {
            this.attr(t);
        }, t.prototype.drift = function(t, e) {
            switch (this.draggable) {
              case "horizontal":
                e = 0;
                break;

              case "vertical":
                t = 0;
            }
            var n = this.transform;
            n || (n = this.transform = [ 1, 0, 0, 1, 0, 0 ]), n[4] += t, n[5] += e, this.decomposeTransform(), 
            this.markRedraw();
        }, t.prototype.beforeUpdate = function() {}, t.prototype.afterUpdate = function() {}, 
        t.prototype.update = function() {
            this.updateTransform(), this.__dirty && this.updateInnerText();
        }, t.prototype.updateInnerText = function(t) {
            var e = this._textContent;
            if (e && (!e.ignore || t)) {
                this.textConfig || (this.textConfig = {});
                var n = this.textConfig, i = n.local, r = e.attachedTransform, o = void 0, a = void 0, s = !1;
                r.parent = i ? this : null;
                var l = !1;
                if (r.x = e.x, r.y = e.y, r.originX = e.originX, r.originY = e.originY, r.rotation = e.rotation, 
                r.scaleX = e.scaleX, r.scaleY = e.scaleY, null != n.position) {
                    var u = yp;
                    u.copy(n.layoutRect ? n.layoutRect : this.getBoundingRect()), i || u.applyTransform(this.transform), 
                    this.calculateTextPosition ? this.calculateTextPosition(gp, n, u) : Me(gp, n, u), 
                    r.x = gp.x, r.y = gp.y, o = gp.align, a = gp.verticalAlign;
                    var h = n.origin;
                    if (h && null != n.rotation) {
                        var c = void 0, p = void 0;
                        "center" === h ? (c = .5 * u.width, p = .5 * u.height) : (c = Se(h[0], u.width), 
                        p = Se(h[1], u.height)), l = !0, r.originX = -r.x + c + (i ? 0 : u.x), r.originY = -r.y + p + (i ? 0 : u.y);
                    }
                }
                null != n.rotation && (r.rotation = n.rotation);
                var f = n.offset;
                f && (r.x += f[0], r.y += f[1], l || (r.originX = -f[0], r.originY = -f[1]));
                var d = null == n.inside ? "string" == typeof n.position && n.position.indexOf("inside") >= 0 : n.inside, g = this._innerTextDefaultStyle || (this._innerTextDefaultStyle = {}), y = void 0, v = void 0, m = void 0;
                d && this.canBeInsideText() ? (y = n.insideFill, v = n.insideStroke, (null == y || "auto" === y) && (y = this.getInsideTextFill()), 
                (null == v || "auto" === v) && (v = this.getInsideTextStroke(y), m = !0)) : (y = n.outsideFill, 
                v = n.outsideStroke, (null == y || "auto" === y) && (y = this.getOutsideFill()), 
                (null == v || "auto" === v) && (v = this.getOutsideStroke(y), m = !0)), ((y = y || "#000") !== g.fill || v !== g.stroke || m !== g.autoStroke || o !== g.align || a !== g.verticalAlign) && (s = !0, 
                g.fill = y, g.stroke = v, g.autoStroke = m, g.align = o, g.verticalAlign = a, e.setDefaultTextStyle(g)), 
                e.__dirty |= lc, s && e.dirtyStyle(!0);
            }
        }, t.prototype.canBeInsideText = function() {
            return !0;
        }, t.prototype.getInsideTextFill = function() {
            return "#fff";
        }, t.prototype.getInsideTextStroke = function() {
            return "#000";
        }, t.prototype.getOutsideFill = function() {
            return this.__zr && this.__zr.isDarkMode() ? Uc : Wc;
        }, t.prototype.getOutsideStroke = function() {
            var t = this.__zr && this.__zr.getBackgroundColor(), e = "string" == typeof t && Bt(t);
            e || (e = [ 255, 255, 255, 1 ]);
            for (var n = e[3], i = this.__zr.isDarkMode(), r = 0; 3 > r; r++) e[r] = e[r] * n + (i ? 0 : 255) * (1 - n);
            return e[3] = 1, Wt(e, "rgba");
        }, t.prototype.traverse = function() {}, t.prototype.attrKV = function(t, e) {
            "textConfig" === t ? this.setTextConfig(e) : "textContent" === t ? this.setTextContent(e) : "clipPath" === t ? this.setClipPath(e) : "extra" === t ? (this.extra = this.extra || {}, 
            h(this.extra, e)) : this[t] = e;
        }, t.prototype.hide = function() {
            this.ignore = !0, this.markRedraw();
        }, t.prototype.show = function() {
            this.ignore = !1, this.markRedraw();
        }, t.prototype.attr = function(t, e) {
            if ("string" == typeof t) this.attrKV(t, e); else if (k(t)) for (var n = w(t), i = 0; i < n.length; i++) {
                var r = n[i];
                this.attrKV(r, t[r]);
            }
            return this.markRedraw(), this;
        }, t.prototype.saveCurrentToNormalState = function(t) {
            this._innerSaveToNormal(t);
            for (var e = this._normalState, n = 0; n < this.animators.length; n++) {
                var i = this.animators[n], r = i.__fromStateTransition;
                if (!r || r === pp) {
                    var o = i.targetName, a = o ? e[o] : e;
                    i.saveFinalToTarget(a);
                }
            }
        }, t.prototype._innerSaveToNormal = function(t) {
            var e = this._normalState;
            e || (e = this._normalState = {}), t.textConfig && !e.textConfig && (e.textConfig = this.textConfig), 
            this._savePrimaryToNormal(t, e, fp);
        }, t.prototype._savePrimaryToNormal = function(t, e, n) {
            for (var i = 0; i < n.length; i++) {
                var r = n[i];
                null == t[r] || r in e || (e[r] = this[r]);
            }
        }, t.prototype.hasState = function() {
            return this.currentStates.length > 0;
        }, t.prototype.getState = function(t) {
            return this.states[t];
        }, t.prototype.ensureState = function(t) {
            var e = this.states;
            return e[t] || (e[t] = {}), e[t];
        }, t.prototype.clearStates = function(t) {
            this.useState(pp, !1, t);
        }, t.prototype.useState = function(t, e, n, i) {
            var r = t === pp;
            if (this.hasState() || !r) {
                var o = this.currentStates, s = this.stateTransition;
                if (!(p(o, t) >= 0) || !e && 1 !== o.length) {
                    var l;
                    if (this.stateProxy && !r && (l = this.stateProxy(t)), l || (l = this.states && this.states[t]), 
                    !l && !r) return void a("State " + t + " not exists.");
                    r || this.saveCurrentToNormalState(l);
                    var u = !!(l && l.hoverLayer || i);
                    u && this._toggleHoverLayerFlag(!0), this._applyStateObj(t, l, this._normalState, e, !n && !this.__inHover && s && s.duration > 0, s);
                    var h = this._textContent, c = this._textGuide;
                    return h && h.useState(t, e, n, u), c && c.useState(t, e, n, u), r ? (this.currentStates = [], 
                    this._normalState = {}) : e ? this.currentStates.push(t) : this.currentStates = [ t ], 
                    this._updateAnimationTargets(), this.markRedraw(), !u && this.__inHover && (this._toggleHoverLayerFlag(!1), 
                    this.__dirty &= ~lc), l;
                }
            }
        }, t.prototype.useStates = function(t, e, n) {
            if (t.length) {
                var i = [], r = this.currentStates, o = t.length, a = o === r.length;
                if (a) for (var s = 0; o > s; s++) if (t[s] !== r[s]) {
                    a = !1;
                    break;
                }
                if (a) return;
                for (s = 0; o > s; s++) {
                    var l = t[s], u = void 0;
                    this.stateProxy && (u = this.stateProxy(l, t)), u || (u = this.states[l]), u && i.push(u);
                }
                var h = i[o - 1], c = !!(h && h.hoverLayer || n);
                c && this._toggleHoverLayerFlag(!0);
                var p = this._mergeStates(i), f = this.stateTransition;
                this.saveCurrentToNormalState(p), this._applyStateObj(t.join(","), p, this._normalState, !1, !e && !this.__inHover && f && f.duration > 0, f);
                var d = this._textContent, g = this._textGuide;
                d && d.useStates(t, e, c), g && g.useStates(t, e, c), this._updateAnimationTargets(), 
                this.currentStates = t.slice(), this.markRedraw(), !c && this.__inHover && (this._toggleHoverLayerFlag(!1), 
                this.__dirty &= ~lc);
            } else this.clearStates();
        }, t.prototype._updateAnimationTargets = function() {
            for (var t = 0; t < this.animators.length; t++) {
                var e = this.animators[t];
                e.targetName && e.changeTarget(this[e.targetName]);
            }
        }, t.prototype.removeState = function(t) {
            var e = p(this.currentStates, t);
            if (e >= 0) {
                var n = this.currentStates.slice();
                n.splice(e, 1), this.useStates(n);
            }
        }, t.prototype.replaceState = function(t, e, n) {
            var i = this.currentStates.slice(), r = p(i, t), o = p(i, e) >= 0;
            r >= 0 ? o ? i.splice(r, 1) : i[r] = e : n && !o && i.push(e), this.useStates(i);
        }, t.prototype.toggleState = function(t, e) {
            e ? this.useState(t, !0) : this.removeState(t);
        }, t.prototype._mergeStates = function(t) {
            for (var e, n = {}, i = 0; i < t.length; i++) {
                var r = t[i];
                h(n, r), r.textConfig && h(e = e || {}, r.textConfig);
            }
            return e && (n.textConfig = e), n;
        }, t.prototype._applyStateObj = function(t, e, n, i, r, o) {
            var a = !(e && i);
            e && e.textConfig ? (this.textConfig = h({}, i ? this.textConfig : n.textConfig), 
            h(this.textConfig, e.textConfig)) : a && n.textConfig && (this.textConfig = n.textConfig);
            for (var s = {}, l = !1, u = 0; u < fp.length; u++) {
                var c = fp[u], p = r && dp[c];
                e && null != e[c] ? p ? (l = !0, s[c] = e[c]) : this[c] = e[c] : a && null != n[c] && (p ? (l = !0, 
                s[c] = n[c]) : this[c] = n[c]);
            }
            if (!r) for (u = 0; u < this.animators.length; u++) {
                var f = this.animators[u], d = f.targetName;
                f.__changeFinalValue(d ? (e || n)[d] : e || n);
            }
            l && this._transitionState(t, s, o);
        }, t.prototype._attachComponent = function(t) {
            if (t.__zr && !t.__hostTarget) throw new Error("Text element has been added to zrender.");
            if (t === this) throw new Error("Recursive component attachment.");
            var e = this.__zr;
            e && t.addSelfToZr(e), t.__zr = e, t.__hostTarget = this;
        }, t.prototype._detachComponent = function(t) {
            t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__hostTarget = null;
        }, t.prototype.getClipPath = function() {
            return this._clipPath;
        }, t.prototype.setClipPath = function(t) {
            this._clipPath && this._clipPath !== t && this.removeClipPath(), this._attachComponent(t), 
            this._clipPath = t, this.markRedraw();
        }, t.prototype.removeClipPath = function() {
            var t = this._clipPath;
            t && (this._detachComponent(t), this._clipPath = null, this.markRedraw());
        }, t.prototype.getTextContent = function() {
            return this._textContent;
        }, t.prototype.setTextContent = function(t) {
            var e = this._textContent;
            if (e !== t) {
                if (e && e !== t && this.removeTextContent(), t.__zr && !t.__hostTarget) throw new Error("Text element has been added to zrender.");
                t.attachedTransform = new Jc(), this._attachComponent(t), this._textContent = t, 
                this.markRedraw();
            }
        }, t.prototype.setTextConfig = function(t) {
            this.textConfig || (this.textConfig = {}), h(this.textConfig, t), this.markRedraw();
        }, t.prototype.removeTextConfig = function() {
            this.textConfig = null, this.markRedraw();
        }, t.prototype.removeTextContent = function() {
            var t = this._textContent;
            t && (t.attachedTransform = null, this._detachComponent(t), this._textContent = null, 
            this._innerTextDefaultStyle = null, this.markRedraw());
        }, t.prototype.getTextGuideLine = function() {
            return this._textGuide;
        }, t.prototype.setTextGuideLine = function(t) {
            this._textGuide && this._textGuide !== t && this.removeTextGuideLine(), this._attachComponent(t), 
            this._textGuide = t, this.markRedraw();
        }, t.prototype.removeTextGuideLine = function() {
            var t = this._textGuide;
            t && (this._detachComponent(t), this._textGuide = null, this.markRedraw());
        }, t.prototype.markRedraw = function() {
            this.__dirty |= lc;
            var t = this.__zr;
            t && (this.__inHover ? t.refreshHover() : t.refresh()), this.__hostTarget && this.__hostTarget.markRedraw();
        }, t.prototype.dirty = function() {
            this.markRedraw();
        }, t.prototype._toggleHoverLayerFlag = function(t) {
            this.__inHover = t;
            var e = this._textContent, n = this._textGuide;
            e && (e.__inHover = t), n && (n.__inHover = t);
        }, t.prototype.addSelfToZr = function(t) {
            this.__zr = t;
            var e = this.animators;
            if (e) for (var n = 0; n < e.length; n++) t.animation.addAnimator(e[n]);
            this._clipPath && this._clipPath.addSelfToZr(t), this._textContent && this._textContent.addSelfToZr(t), 
            this._textGuide && this._textGuide.addSelfToZr(t);
        }, t.prototype.removeSelfFromZr = function(t) {
            this.__zr = null;
            var e = this.animators;
            if (e) for (var n = 0; n < e.length; n++) t.animation.removeAnimator(e[n]);
            this._clipPath && this._clipPath.removeSelfFromZr(t), this._textContent && this._textContent.removeSelfFromZr(t), 
            this._textGuide && this._textGuide.removeSelfFromZr(t);
        }, t.prototype.animate = function(t, e) {
            var n = t ? this[t] : this;
            if (n) {
                var i = new Ac(n, e);
                return this.addAnimator(i, t), i;
            }
            a('Property "' + t + '" is not existed in element ' + this.id);
        }, t.prototype.addAnimator = function(t, e) {
            var n = this.__zr, i = this;
            t.during(function() {
                i.updateDuringAnimation(e);
            }).done(function() {
                var e = i.animators, n = p(e, t);
                n >= 0 && e.splice(n, 1);
            }), this.animators.push(t), n && n.animation.addAnimator(t), n && n.wakeUp();
        }, t.prototype.updateDuringAnimation = function() {
            this.markRedraw();
        }, t.prototype.stopAnimation = function(t, e) {
            for (var n = this.animators, i = n.length, r = [], o = 0; i > o; o++) {
                var a = n[o];
                t && t !== a.scope ? r.push(a) : a.stop(e);
            }
            return this.animators = r, this;
        }, t.prototype.animateTo = function(t, e, n) {
            Te(this, t, e, n);
        }, t.prototype.animateFrom = function(t, e, n) {
            Te(this, t, e, n, !0);
        }, t.prototype._transitionState = function(t, e, n, i) {
            for (var r = Te(this, e, n, i), o = 0; o < r.length; o++) r[o].__fromStateTransition = t;
        }, t.prototype.getBoundingRect = function() {
            return null;
        }, t.prototype.getPaintRect = function() {
            return null;
        }, t.initDefaultProps = function() {
            function e(t, e, n) {
                r[t + e + n] || (console.warn("DEPRECATED: '" + t + "' has been deprecated. use '" + e + "', '" + n + "' instead"), 
                r[t + e + n] = !0);
            }
            function n(t, n, r, o) {
                function a(t, e) {
                    Object.defineProperty(e, 0, {
                        get: function() {
                            return t[r];
                        },
                        set: function(e) {
                            t[r] = e;
                        }
                    }), Object.defineProperty(e, 1, {
                        get: function() {
                            return t[o];
                        },
                        set: function(e) {
                            t[o] = e;
                        }
                    });
                }
                Object.defineProperty(i, t, {
                    get: function() {
                        (e(t, r, o), this[n]) || a(this, this[n] = []);
                        return this[n];
                    },
                    set: function(i) {
                        e(t, r, o), this[r] = i[0], this[o] = i[1], this[n] = i, a(this, i);
                    }
                });
            }
            var i = t.prototype;
            i.type = "element", i.name = "", i.ignore = !1, i.silent = !1, i.isGroup = !1, i.draggable = !1, 
            i.dragging = !1, i.ignoreClip = !1, i.__inHover = !1, i.__dirty = lc;
            var r = {};
            Object.defineProperty && (!wh.browser.ie || wh.browser.version > 8) && (n("position", "_legacyPos", "x", "y"), 
            n("scale", "_legacyScale", "scaleX", "scaleY"), n("origin", "_legacyOrigin", "originX", "originY"));
        }(), t;
    }();
    d(vp, Yh), d(vp, Jc);
    var mp = function(t) {
        function e(e) {
            var n = t.call(this) || this;
            return n.isGroup = !0, n._children = [], n.attr(e), n;
        }
        return n(e, t), e.prototype.childrenRef = function() {
            return this._children;
        }, e.prototype.children = function() {
            return this._children.slice();
        }, e.prototype.childAt = function(t) {
            return this._children[t];
        }, e.prototype.childOfName = function(t) {
            for (var e = this._children, n = 0; n < e.length; n++) if (e[n].name === t) return e[n];
        }, e.prototype.childCount = function() {
            return this._children.length;
        }, e.prototype.add = function(t) {
            if (t && (t !== this && t.parent !== this && (this._children.push(t), this._doAdd(t)), 
            t.__hostTarget)) throw "This elemenet has been used as an attachment";
            return this;
        }, e.prototype.addBefore = function(t, e) {
            if (t && t !== this && t.parent !== this && e && e.parent === this) {
                var n = this._children, i = n.indexOf(e);
                i >= 0 && (n.splice(i, 0, t), this._doAdd(t));
            }
            return this;
        }, e.prototype.replaceAt = function(t, e) {
            var n = this._children, i = n[e];
            if (t && t !== this && t.parent !== this && t !== i) {
                n[e] = t, i.parent = null;
                var r = this.__zr;
                r && i.removeSelfFromZr(r), this._doAdd(t);
            }
            return this;
        }, e.prototype._doAdd = function(t) {
            t.parent && t.parent.remove(t), t.parent = this;
            var e = this.__zr;
            e && e !== t.__zr && t.addSelfToZr(e), e && e.refresh();
        }, e.prototype.remove = function(t) {
            var e = this.__zr, n = this._children, i = p(n, t);
            return 0 > i || (n.splice(i, 1), t.parent = null, e && t.removeSelfFromZr(e), e && e.refresh()), 
            this;
        }, e.prototype.removeAll = function() {
            for (var t = this._children, e = this.__zr, n = 0; n < t.length; n++) {
                var i = t[n];
                e && i.removeSelfFromZr(e), i.parent = null;
            }
            return t.length = 0, this;
        }, e.prototype.eachChild = function(t, e) {
            for (var n = this._children, i = 0; i < n.length; i++) {
                var r = n[i];
                t.call(e, r, i);
            }
            return this;
        }, e.prototype.traverse = function(t, e) {
            for (var n = 0; n < this._children.length; n++) {
                var i = this._children[n], r = t.call(e, i);
                i.isGroup && !r && i.traverse(t, e);
            }
            return this;
        }, e.prototype.addSelfToZr = function(e) {
            t.prototype.addSelfToZr.call(this, e);
            for (var n = 0; n < this._children.length; n++) {
                this._children[n].addSelfToZr(e);
            }
        }, e.prototype.removeSelfFromZr = function(e) {
            t.prototype.removeSelfFromZr.call(this, e);
            for (var n = 0; n < this._children.length; n++) {
                this._children[n].removeSelfFromZr(e);
            }
        }, e.prototype.getBoundingRect = function(t) {
            for (var e = new lp(0, 0, 0, 0), n = t || this._children, i = [], r = null, o = 0; o < n.length; o++) {
                var a = n[o];
                if (!a.ignore && !a.invisible) {
                    var s = a.getBoundingRect(), l = a.getLocalTransform(i);
                    l ? (lp.applyTransform(e, s, l), (r = r || e.clone()).union(e)) : (r = r || s.clone()).union(s);
                }
            }
            return r || e;
        }, e;
    }(vp);
    mp.prototype.type = "group";
    var _p = !wh.canvasSupported, xp = {}, wp = {}, bp = function() {
        function t(t, e, n) {
            var i = this;
            this._sleepAfterStill = 10, this._stillFrameAccum = 0, this._needsRefresh = !0, 
            this._needsRefreshHover = !0, this._darkMode = !1, n = n || {}, this.dom = e, this.id = t;
            var r = new cc(), o = n.renderer || "canvas";
            if (_p) throw new Error("IE8 support has been dropped since 5.0");
            if (xp[o] || (o = w(xp)[0]), !xp[o]) throw new Error("Renderer '" + o + "' is not imported. Please import it first.");
            n.useDirtyRect = null != n.useDirtyRect && n.useDirtyRect;
            var a = new xp[o](e, r, n, t);
            this.storage = r, this.painter = a;
            var s = wh.node || wh.worker ? null : new Bc(a.getViewportRoot(), a.root);
            this.handler = new oc(r, a, s, a.root), this.animation = new kc({
                stage: {
                    update: function() {
                        return i._flush(!0);
                    }
                }
            }), this.animation.start();
        }
        return t.prototype.add = function(t) {
            t && (this.storage.addRoot(t), t.addSelfToZr(this), this.refresh());
        }, t.prototype.remove = function(t) {
            t && (this.storage.delRoot(t), t.removeSelfFromZr(this), this.refresh());
        }, t.prototype.configLayer = function(t, e) {
            this.painter.configLayer && this.painter.configLayer(t, e), this.refresh();
        }, t.prototype.setBackgroundColor = function(t) {
            this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this.refresh(), 
            this._backgroundColor = t, this._darkMode = function(t) {
                if (!t) return !1;
                if ("string" == typeof t) return Ut(t, 1) < Gc;
                if (t.colorStops) {
                    for (var e = t.colorStops, n = 0, i = e.length, r = 0; i > r; r++) n += Ut(e[r].color, 1);
                    return Gc > (n /= i);
                }
                return !1;
            }(t);
        }, t.prototype.getBackgroundColor = function() {
            return this._backgroundColor;
        }, t.prototype.setDarkMode = function(t) {
            this._darkMode = t;
        }, t.prototype.isDarkMode = function() {
            return this._darkMode;
        }, t.prototype.refreshImmediately = function(t) {
            t || this.animation.update(!0), this._needsRefresh = !1, this.painter.refresh(), 
            this._needsRefresh = !1;
        }, t.prototype.refresh = function() {
            this._needsRefresh = !0, this.animation.start();
        }, t.prototype.flush = function() {
            this._flush(!1);
        }, t.prototype._flush = function(t) {
            var e, n = new Date().getTime();
            this._needsRefresh && (e = !0, this.refreshImmediately(t)), this._needsRefreshHover && (e = !0, 
            this.refreshHoverImmediately());
            var i = new Date().getTime();
            e ? (this._stillFrameAccum = 0, this.trigger("rendered", {
                elapsedTime: i - n
            })) : this._sleepAfterStill > 0 && (this._stillFrameAccum++, this._stillFrameAccum > this._sleepAfterStill && this.animation.stop());
        }, t.prototype.setSleepAfterStill = function(t) {
            this._sleepAfterStill = t;
        }, t.prototype.wakeUp = function() {
            this.animation.start(), this._stillFrameAccum = 0;
        }, t.prototype.addHover = function() {}, t.prototype.removeHover = function() {}, 
        t.prototype.clearHover = function() {}, t.prototype.refreshHover = function() {
            this._needsRefreshHover = !0;
        }, t.prototype.refreshHoverImmediately = function() {
            this._needsRefreshHover = !1, this.painter.refreshHover && "canvas" === this.painter.getType() && this.painter.refreshHover();
        }, t.prototype.resize = function(t) {
            t = t || {}, this.painter.resize(t.width, t.height), this.handler.resize();
        }, t.prototype.clearAnimation = function() {
            this.animation.clear();
        }, t.prototype.getWidth = function() {
            return this.painter.getWidth();
        }, t.prototype.getHeight = function() {
            return this.painter.getHeight();
        }, t.prototype.pathToImage = function(t, e) {
            return this.painter.pathToImage ? this.painter.pathToImage(t, e) : void 0;
        }, t.prototype.setCursorStyle = function(t) {
            this.handler.setCursorStyle(t);
        }, t.prototype.findHover = function(t, e) {
            return this.handler.findHover(t, e);
        }, t.prototype.on = function(t, e, n) {
            return this.handler.on(t, e, n), this;
        }, t.prototype.off = function(t, e) {
            this.handler.off(t, e);
        }, t.prototype.trigger = function(t, e) {
            this.handler.trigger(t, e);
        }, t.prototype.clear = function() {
            for (var t = this.storage.getRoots(), e = 0; e < t.length; e++) t[e] instanceof mp && t[e].removeSelfFromZr(this);
            this.storage.delAllRoots(), this.painter.clear();
        }, t.prototype.dispose = function() {
            this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), 
            this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, 
            function(t) {
                delete wp[t];
            }(this.id);
        }, t;
    }(), Sp = (Object.freeze || Object)({
        init: Ie,
        dispose: function(t) {
            t.dispose();
        },
        disposeAll: function() {
            for (var t in wp) wp.hasOwnProperty(t) && wp[t].dispose();
            wp = {};
        },
        getInstance: function(t) {
            return wp[t];
        },
        registerPainter: De,
        version: "5.1.1"
    }), Mp = 1e-4, Tp = 20, Cp = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d{1,2})(?::(\d{1,2})(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/, Ap = ("undefined" != typeof console && console.warn && console.log, 
    "series\0"), kp = "\0_ec_\0", Ip = [ "fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding" ], Dp = qe(), Pp = {
        useDefault: !0,
        enableAll: !1,
        enableNone: !1
    }, Lp = ".", Op = "___EC__COMPONENT__CONTAINER___", Rp = "___EC__EXTENDED_CLASS___", Ep = Math.round(10 * Math.random()), Np = _n([ [ "fill", "color" ], [ "shadowBlur" ], [ "shadowOffsetX" ], [ "shadowOffsetY" ], [ "opacity" ], [ "shadowColor" ] ]), Bp = function() {
        function t() {}
        return t.prototype.getAreaStyle = function(t, e) {
            return Np(this, t, e);
        }, t;
    }(), zp = new vc(50), Fp = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g, Vp = function() {}, Hp = function(t) {
        this.tokens = [], t && (this.tokens = t);
    }, Gp = function() {
        this.width = 0, this.height = 0, this.contentWidth = 0, this.contentHeight = 0, 
        this.outerWidth = 0, this.outerHeight = 0, this.lines = [];
    }, Wp = m(",&?/;] ".split(""), function(t, e) {
        return t[e] = !0, t;
    }, {}), Up = "__zr_style_" + Math.round(10 * Math.random()), Xp = {
        shadowBlur: 0,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: "#000",
        opacity: 1,
        blend: "source-over"
    }, Yp = {
        style: {
            shadowBlur: !0,
            shadowOffsetX: !0,
            shadowOffsetY: !0,
            shadowColor: !0,
            opacity: !0
        }
    };
    Xp[Up] = !0;
    var qp = [ "z", "z2", "invisible" ], jp = [ "invisible" ], Zp = function(t) {
        function e(e) {
            return t.call(this, e) || this;
        }
        return n(e, t), e.prototype._init = function(e) {
            for (var n = w(e), i = 0; i < n.length; i++) {
                var r = n[i];
                "style" === r ? this.useStyle(e[r]) : t.prototype.attrKV.call(this, r, e[r]);
            }
            this.style || this.useStyle({});
        }, e.prototype.beforeBrush = function() {}, e.prototype.afterBrush = function() {}, 
        e.prototype.innerBeforeBrush = function() {}, e.prototype.innerAfterBrush = function() {}, 
        e.prototype.shouldBePainted = function(t, e, n, i) {
            var r = this.transform;
            if (this.ignore || this.invisible || 0 === this.style.opacity || this.culling && function(t, e, n) {
                return Kp.copy(t.getBoundingRect()), t.transform && Kp.applyTransform(t.transform), 
                $p.width = e, $p.height = n, !Kp.intersect($p);
            }(this, t, e) || r && !r[0] && !r[3]) return !1;
            if (n && this.__clipPaths) for (var o = 0; o < this.__clipPaths.length; ++o) if (this.__clipPaths[o].isZeroArea()) return !1;
            if (i && this.parent) for (var a = this.parent; a; ) {
                if (a.ignore) return !1;
                a = a.parent;
            }
            return !0;
        }, e.prototype.contain = function(t, e) {
            return this.rectContain(t, e);
        }, e.prototype.traverse = function(t, e) {
            t.call(e, this);
        }, e.prototype.rectContain = function(t, e) {
            var n = this.transformCoordToLocal(t, e);
            return this.getBoundingRect().contain(n[0], n[1]);
        }, e.prototype.getPaintRect = function() {
            var t = this._paintRect;
            if (!this._paintRect || this.__dirty) {
                var e = this.transform, n = this.getBoundingRect(), i = this.style, r = i.shadowBlur || 0, o = i.shadowOffsetX || 0, a = i.shadowOffsetY || 0;
                t = this._paintRect || (this._paintRect = new lp(0, 0, 0, 0)), e ? lp.applyTransform(t, n, e) : t.copy(n), 
                (r || o || a) && (t.width += 2 * r + Math.abs(o), t.height += 2 * r + Math.abs(a), 
                t.x = Math.min(t.x, t.x + o - r), t.y = Math.min(t.y, t.y + a - r));
                var s = this.dirtyRectTolerance;
                t.isZero() || (t.x = Math.floor(t.x - s), t.y = Math.floor(t.y - s), t.width = Math.ceil(t.width + 1 + 2 * s), 
                t.height = Math.ceil(t.height + 1 + 2 * s));
            }
            return t;
        }, e.prototype.setPrevPaintRect = function(t) {
            t ? (this._prevPaintRect = this._prevPaintRect || new lp(0, 0, 0, 0), this._prevPaintRect.copy(t)) : this._prevPaintRect = null;
        }, e.prototype.getPrevPaintRect = function() {
            return this._prevPaintRect;
        }, e.prototype.animateStyle = function(t) {
            return this.animate("style", t);
        }, e.prototype.updateDuringAnimation = function(t) {
            "style" === t ? this.dirtyStyle() : this.markRedraw();
        }, e.prototype.attrKV = function(e, n) {
            "style" !== e ? t.prototype.attrKV.call(this, e, n) : this.style ? this.setStyle(n) : this.useStyle(n);
        }, e.prototype.setStyle = function(t, e) {
            return "string" == typeof t ? this.style[t] = e : h(this.style, t), this.dirtyStyle(), 
            this;
        }, e.prototype.dirtyStyle = function(t) {
            t || this.markRedraw(), this.__dirty |= 2, this._rect && (this._rect = null);
        }, e.prototype.dirty = function() {
            this.dirtyStyle();
        }, e.prototype.styleChanged = function() {
            return !!(2 & this.__dirty);
        }, e.prototype.styleUpdated = function() {
            this.__dirty &= -3;
        }, e.prototype.createStyle = function(t) {
            return X(Xp, t);
        }, e.prototype.useStyle = function(t) {
            t[Up] || (t = this.createStyle(t)), this.__inHover ? this.__hoverStyle = t : this.style = t, 
            this.dirtyStyle();
        }, e.prototype.isStyleObject = function(t) {
            return t[Up];
        }, e.prototype._innerSaveToNormal = function(e) {
            t.prototype._innerSaveToNormal.call(this, e);
            var n = this._normalState;
            e.style && !n.style && (n.style = this._mergeStyle(this.createStyle(), this.style)), 
            this._savePrimaryToNormal(e, n, qp);
        }, e.prototype._applyStateObj = function(e, n, i, r, o, a) {
            t.prototype._applyStateObj.call(this, e, n, i, r, o, a);
            var s, l = !(n && r);
            if (n && n.style ? o ? r ? s = n.style : (s = this._mergeStyle(this.createStyle(), i.style), 
            this._mergeStyle(s, n.style)) : (s = this._mergeStyle(this.createStyle(), r ? this.style : i.style), 
            this._mergeStyle(s, n.style)) : l && (s = i.style), s) if (o) {
                var u = this.style;
                if (this.style = this.createStyle(l ? {} : u), l) for (var h = w(u), c = 0; c < h.length; c++) {
                    (f = h[c]) in s && (s[f] = s[f], this.style[f] = u[f]);
                }
                var p = w(s);
                for (c = 0; c < p.length; c++) {
                    var f = p[c];
                    this.style[f] = this.style[f];
                }
                this._transitionState(e, {
                    style: s
                }, a, this.getAnimationStyleProps());
            } else this.useStyle(s);
            var d = this.__inHover ? jp : qp;
            for (c = 0; c < d.length; c++) {
                f = d[c];
                n && null != n[f] ? this[f] = n[f] : l && null != i[f] && (this[f] = i[f]);
            }
        }, e.prototype._mergeStates = function(e) {
            for (var n, i = t.prototype._mergeStates.call(this, e), r = 0; r < e.length; r++) {
                var o = e[r];
                o.style && (n = n || {}, this._mergeStyle(n, o.style));
            }
            return n && (i.style = n), i;
        }, e.prototype._mergeStyle = function(t, e) {
            return h(t, e), t;
        }, e.prototype.getAnimationStyleProps = function() {
            return Yp;
        }, e.initDefaultProps = function() {
            var t = e.prototype;
            t.type = "displayable", t.invisible = !1, t.z = 0, t.z2 = 0, t.zlevel = 0, t.culling = !1, 
            t.cursor = "pointer", t.rectHover = !1, t.incremental = !1, t._rect = null, t.dirtyRectTolerance = 0, 
            t.__dirty = 2 | lc;
        }(), e;
    }(vp), Kp = new lp(0, 0, 0, 0), $p = new lp(0, 0, 0, 0), Jp = Math.pow, Qp = Math.sqrt, tf = 1e-8, ef = 1e-4, nf = Qp(3), rf = 1 / 3, of = j(), af = j(), sf = j(), lf = Math.min, uf = Math.max, hf = Math.sin, cf = Math.cos, pf = 2 * Math.PI, ff = j(), df = j(), gf = j(), yf = [], vf = [], mf = {
        M: 1,
        L: 2,
        C: 3,
        Q: 4,
        A: 5,
        Z: 6,
        R: 7
    }, _f = [], xf = [], wf = [], bf = [], Sf = [], Mf = [], Tf = Math.min, Cf = Math.max, Af = Math.cos, kf = Math.sin, If = Math.sqrt, Df = Math.abs, Pf = Math.PI, Lf = 2 * Pf, Of = "undefined" != typeof Float32Array, Rf = [], Ef = function() {
        function t(t) {
            this.dpr = 1, this._xi = 0, this._yi = 0, this._x0 = 0, this._y0 = 0, this._len = 0, 
            t && (this._saveData = !1), this._saveData && (this.data = []);
        }
        return t.prototype.increaseVersion = function() {
            this._version++;
        }, t.prototype.getVersion = function() {
            return this._version;
        }, t.prototype.setScale = function(t, e, n) {
            (n = n || 0) > 0 && (this._ux = Df(n / Hc / t) || 0, this._uy = Df(n / Hc / e) || 0);
        }, t.prototype.setDPR = function(t) {
            this.dpr = t;
        }, t.prototype.setContext = function(t) {
            this._ctx = t;
        }, t.prototype.getContext = function() {
            return this._ctx;
        }, t.prototype.beginPath = function() {
            return this._ctx && this._ctx.beginPath(), this.reset(), this;
        }, t.prototype.reset = function() {
            this._saveData && (this._len = 0), this._lineDash && (this._lineDash = null, this._dashOffset = 0), 
            this._pathSegLen && (this._pathSegLen = null, this._pathLen = 0), this._version++;
        }, t.prototype.moveTo = function(t, e) {
            return this._drawPendingPt(), this.addData(mf.M, t, e), this._ctx && this._ctx.moveTo(t, e), 
            this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this;
        }, t.prototype.lineTo = function(t, e) {
            var n = Df(t - this._xi), i = Df(e - this._yi), r = n > this._ux || i > this._uy;
            if (this.addData(mf.L, t, e), this._ctx && r && (this._needsDash ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)), 
            r) this._xi = t, this._yi = e, this._pendingPtDist = 0; else {
                var o = n * n + i * i;
                o > this._pendingPtDist && (this._pendingPtX = t, this._pendingPtY = e, this._pendingPtDist = o);
            }
            return this;
        }, t.prototype.bezierCurveTo = function(t, e, n, i, r, o) {
            return this.addData(mf.C, t, e, n, i, r, o), this._ctx && (this._needsDash ? this._dashedBezierTo(t, e, n, i, r, o) : this._ctx.bezierCurveTo(t, e, n, i, r, o)), 
            this._xi = r, this._yi = o, this;
        }, t.prototype.quadraticCurveTo = function(t, e, n, i) {
            return this.addData(mf.Q, t, e, n, i), this._ctx && (this._needsDash ? this._dashedQuadraticTo(t, e, n, i) : this._ctx.quadraticCurveTo(t, e, n, i)), 
            this._xi = n, this._yi = i, this;
        }, t.prototype.arc = function(t, e, n, i, r, o) {
            Rf[0] = i, Rf[1] = r, $n(Rf, o), i = Rf[0];
            var a = (r = Rf[1]) - i;
            return this.addData(mf.A, t, e, n, n, i, a, 0, o ? 0 : 1), this._ctx && this._ctx.arc(t, e, n, i, r, o), 
            this._xi = Af(r) * n + t, this._yi = kf(r) * n + e, this;
        }, t.prototype.arcTo = function(t, e, n, i, r) {
            return this._ctx && this._ctx.arcTo(t, e, n, i, r), this;
        }, t.prototype.rect = function(t, e, n, i) {
            return this._ctx && this._ctx.rect(t, e, n, i), this.addData(mf.R, t, e, n, i), 
            this;
        }, t.prototype.closePath = function() {
            this._drawPendingPt(), this.addData(mf.Z);
            var t = this._ctx, e = this._x0, n = this._y0;
            return t && (this._needsDash && this._dashedLineTo(e, n), t.closePath()), this._xi = e, 
            this._yi = n, this;
        }, t.prototype.fill = function(t) {
            t && t.fill(), this.toStatic();
        }, t.prototype.stroke = function(t) {
            t && t.stroke(), this.toStatic();
        }, t.prototype.setLineDash = function(t) {
            if (t instanceof Array) {
                this._lineDash = t, this._dashIdx = 0;
                for (var e = 0, n = 0; n < t.length; n++) e += t[n];
                this._dashSum = e, this._needsDash = !0;
            } else this._lineDash = null, this._needsDash = !1;
            return this;
        }, t.prototype.setLineDashOffset = function(t) {
            return this._dashOffset = t, this;
        }, t.prototype.len = function() {
            return this._len;
        }, t.prototype.setData = function(t) {
            var e = t.length;
            this.data && this.data.length === e || !Of || (this.data = new Float32Array(e));
            for (var n = 0; e > n; n++) this.data[n] = t[n];
            this._len = e;
        }, t.prototype.appendPath = function(t) {
            t instanceof Array || (t = [ t ]);
            for (var e = t.length, n = 0, i = this._len, r = 0; e > r; r++) n += t[r].len();
            Of && this.data instanceof Float32Array && (this.data = new Float32Array(i + n));
            for (r = 0; e > r; r++) for (var o = t[r].data, a = 0; a < o.length; a++) this.data[i++] = o[a];
            this._len = i;
        }, t.prototype.addData = function() {
            if (this._saveData) {
                var t = this.data;
                this._len + arguments.length > t.length && (this._expandData(), t = this.data);
                for (var e = 0; e < arguments.length; e++) t[this._len++] = arguments[e];
            }
        }, t.prototype._drawPendingPt = function() {
            this._pendingPtDist > 0 && (this._ctx && this._ctx.lineTo(this._pendingPtX, this._pendingPtY), 
            this._pendingPtDist = 0);
        }, t.prototype._expandData = function() {
            if (!(this.data instanceof Array)) {
                for (var t = [], e = 0; e < this._len; e++) t[e] = this.data[e];
                this.data = t;
            }
        }, t.prototype._dashedLineTo = function(t, e) {
            var n, i, r = this._dashSum, o = this._lineDash, a = this._ctx, s = this._dashOffset, l = this._xi, u = this._yi, h = t - l, c = e - u, p = If(h * h + c * c), f = l, d = u, g = o.length;
            for (0 > s && (s = r + s), f -= (s %= r) * (h /= p), d -= s * (c /= p); h > 0 && t >= f || 0 > h && f >= t || 0 === h && (c > 0 && e >= d || 0 > c && d >= e); ) f += h * (n = o[i = this._dashIdx]), 
            d += c * n, this._dashIdx = (i + 1) % g, h > 0 && l > f || 0 > h && f > l || c > 0 && u > d || 0 > c && d > u || a[i % 2 ? "moveTo" : "lineTo"](h >= 0 ? Tf(f, t) : Cf(f, t), c >= 0 ? Tf(d, e) : Cf(d, e));
            h = f - t, c = d - e, this._dashOffset = -If(h * h + c * c);
        }, t.prototype._dashedBezierTo = function(t, e, n, i, r, o) {
            var a, s, l, u, h, c = this._ctx, p = this._dashSum, f = this._dashOffset, d = this._lineDash, g = this._xi, y = this._yi, v = 0, m = this._dashIdx, _ = d.length, x = 0;
            for (0 > f && (f = p + f), f %= p, a = 0; 1 > a; a += .1) s = On(g, t, n, r, a + .1) - On(g, t, n, r, a), 
            l = On(y, e, i, o, a + .1) - On(y, e, i, o, a), v += If(s * s + l * l);
            for (;_ > m && !((x += d[m]) > f); m++) ;
            for (a = (x - f) / v; 1 >= a; ) u = On(g, t, n, r, a), h = On(y, e, i, o, a), m % 2 ? c.moveTo(u, h) : c.lineTo(u, h), 
            a += d[m] / v, m = (m + 1) % _;
            m % 2 != 0 && c.lineTo(r, o), s = r - u, l = o - h, this._dashOffset = -If(s * s + l * l);
        }, t.prototype._dashedQuadraticTo = function(t, e, n, i) {
            var r = n, o = i;
            n = (n + 2 * t) / 3, i = (i + 2 * e) / 3, t = (this._xi + 2 * t) / 3, e = (this._yi + 2 * e) / 3, 
            this._dashedBezierTo(t, e, n, i, r, o);
        }, t.prototype.toStatic = function() {
            if (this._saveData) {
                this._drawPendingPt();
                var t = this.data;
                t instanceof Array && (t.length = this._len, Of && this._len > 11 && (this.data = new Float32Array(t)));
            }
        }, t.prototype.getBoundingRect = function() {
            wf[0] = wf[1] = Sf[0] = Sf[1] = Number.MAX_VALUE, bf[0] = bf[1] = Mf[0] = Mf[1] = -Number.MAX_VALUE;
            var t, e = this.data, n = 0, i = 0, r = 0, o = 0;
            for (t = 0; t < this._len; ) {
                var a = e[t++], s = 1 === t;
                switch (s && (r = n = e[t], o = i = e[t + 1]), a) {
                  case mf.M:
                    n = r = e[t++], i = o = e[t++], Sf[0] = r, Sf[1] = o, Mf[0] = r, Mf[1] = o;
                    break;

                  case mf.L:
                    Yn(n, i, e[t], e[t + 1], Sf, Mf), n = e[t++], i = e[t++];
                    break;

                  case mf.C:
                    qn(n, i, e[t++], e[t++], e[t++], e[t++], e[t], e[t + 1], Sf, Mf), n = e[t++], i = e[t++];
                    break;

                  case mf.Q:
                    jn(n, i, e[t++], e[t++], e[t], e[t + 1], Sf, Mf), n = e[t++], i = e[t++];
                    break;

                  case mf.A:
                    var l = e[t++], u = e[t++], h = e[t++], c = e[t++], p = e[t++], f = e[t++] + p;
                    t += 1;
                    var d = !e[t++];
                    s && (r = Af(p) * h + l, o = kf(p) * c + u), Zn(l, u, h, c, p, f, d, Sf, Mf), n = Af(f) * h + l, 
                    i = kf(f) * c + u;
                    break;

                  case mf.R:
                    Yn(r = n = e[t++], o = i = e[t++], r + e[t++], o + e[t++], Sf, Mf);
                    break;

                  case mf.Z:
                    n = r, i = o;
                }
                at(wf, wf, Sf), st(bf, bf, Mf);
            }
            return 0 === t && (wf[0] = wf[1] = bf[0] = bf[1] = 0), new lp(wf[0], wf[1], bf[0] - wf[0], bf[1] - wf[1]);
        }, t.prototype._calculateLength = function() {
            var t = this.data, e = this._len, n = this._ux, i = this._uy, r = 0, o = 0, a = 0, s = 0;
            this._pathSegLen || (this._pathSegLen = []);
            for (var l = this._pathSegLen, u = 0, h = 0, c = 0; e > c; ) {
                var p = t[c++], f = 1 === c;
                f && (a = r = t[c], s = o = t[c + 1]);
                var d = -1;
                switch (p) {
                  case mf.M:
                    r = a = t[c++], o = s = t[c++];
                    break;

                  case mf.L:
                    var g = t[c++], y = (_ = t[c++]) - o;
                    (Df(I = g - r) > n || Df(y) > i || c === e - 1) && (d = Math.sqrt(I * I + y * y), 
                    r = g, o = _);
                    break;

                  case mf.C:
                    var v = t[c++], m = t[c++], _ = (g = t[c++], t[c++]), x = t[c++], w = t[c++];
                    d = zn(r, o, v, m, g, _, x, w, 10), r = x, o = w;
                    break;

                  case mf.Q:
                    d = Un(r, o, v = t[c++], m = t[c++], g = t[c++], _ = t[c++], 10), r = g, o = _;
                    break;

                  case mf.A:
                    var b = t[c++], S = t[c++], M = t[c++], T = t[c++], C = t[c++], A = t[c++], k = A + C;
                    c += 1, t[c++], f && (a = Af(C) * M + b, s = kf(C) * T + S), d = Cf(M, T) * Tf(Lf, Math.abs(A)), 
                    r = Af(k) * M + b, o = kf(k) * T + S;
                    break;

                  case mf.R:
                    a = r = t[c++], s = o = t[c++], d = 2 * t[c++] + 2 * t[c++];
                    break;

                  case mf.Z:
                    var I = a - r;
                    y = s - o;
                    d = Math.sqrt(I * I + y * y), r = a, o = s;
                }
                d >= 0 && (l[h++] = d, u += d);
            }
            return this._pathLen = u, u;
        }, t.prototype.rebuildPath = function(t, e) {
            var n, i, r, o, a, s, l, u, h, c, p = this.data, f = this._ux, d = this._uy, g = this._len, y = 1 > e, v = 0, m = 0, _ = 0;
            if (!y || (this._pathSegLen || this._calculateLength(), l = this._pathSegLen, u = e * this._pathLen)) t: for (var x = 0; g > x; ) {
                var w = p[x++], b = 1 === x;
                switch (b && (n = r = p[x], i = o = p[x + 1]), w) {
                  case mf.M:
                    _ > 0 && (t.lineTo(h, c), _ = 0), n = r = p[x++], i = o = p[x++], t.moveTo(r, o);
                    break;

                  case mf.L:
                    a = p[x++], s = p[x++];
                    var S = Df(a - r), M = Df(s - o);
                    if (S > f || M > d) {
                        if (y) {
                            if (v + (j = l[m++]) > u) {
                                var T = (u - v) / j;
                                t.lineTo(r * (1 - T) + a * T, o * (1 - T) + s * T);
                                break t;
                            }
                            v += j;
                        }
                        t.lineTo(a, s), r = a, o = s, _ = 0;
                    } else {
                        var C = S * S + M * M;
                        C > _ && (h = a, c = s, _ = C);
                    }
                    break;

                  case mf.C:
                    var A = p[x++], k = p[x++], I = p[x++], D = p[x++], P = p[x++], L = p[x++];
                    if (y) {
                        if (v + (j = l[m++]) > u) {
                            Nn(r, A, I, P, T = (u - v) / j, _f), Nn(o, k, D, L, T, xf), t.bezierCurveTo(_f[1], xf[1], _f[2], xf[2], _f[3], xf[3]);
                            break t;
                        }
                        v += j;
                    }
                    t.bezierCurveTo(A, k, I, D, P, L), r = P, o = L;
                    break;

                  case mf.Q:
                    A = p[x++], k = p[x++], I = p[x++], D = p[x++];
                    if (y) {
                        if (v + (j = l[m++]) > u) {
                            Gn(r, A, I, T = (u - v) / j, _f), Gn(o, k, D, T, xf), t.quadraticCurveTo(_f[1], xf[1], _f[2], xf[2]);
                            break t;
                        }
                        v += j;
                    }
                    t.quadraticCurveTo(A, k, I, D), r = I, o = D;
                    break;

                  case mf.A:
                    var O = p[x++], R = p[x++], E = p[x++], N = p[x++], B = p[x++], z = p[x++], F = p[x++], V = !p[x++], H = E > N ? E : N, G = Df(E - N) > .001, W = B + z, U = !1;
                    if (y) v + (j = l[m++]) > u && (W = B + z * (u - v) / j, U = !0), v += j;
                    if (G && t.ellipse ? t.ellipse(O, R, E, N, F, B, W, V) : t.arc(O, R, H, B, W, V), 
                    U) break t;
                    b && (n = Af(B) * E + O, i = kf(B) * N + R), r = Af(W) * E + O, o = kf(W) * N + R;
                    break;

                  case mf.R:
                    n = r = p[x], i = o = p[x + 1], a = p[x++], s = p[x++];
                    var X = p[x++], Y = p[x++];
                    if (y) {
                        if (v + (j = l[m++]) > u) {
                            var q = u - v;
                            t.moveTo(a, s), t.lineTo(a + Tf(q, X), s), (q -= X) > 0 && t.lineTo(a + X, s + Tf(q, Y)), 
                            (q -= Y) > 0 && t.lineTo(a + Cf(X - q, 0), s + Y), (q -= X) > 0 && t.lineTo(a, s + Cf(Y - q, 0));
                            break t;
                        }
                        v += j;
                    }
                    t.rect(a, s, X, Y);
                    break;

                  case mf.Z:
                    if (_ > 0 && (t.lineTo(h, c), _ = 0), y) {
                        var j;
                        if (v + (j = l[m++]) > u) {
                            T = (u - v) / j;
                            t.lineTo(r * (1 - T) + n * T, o * (1 - T) + i * T);
                            break t;
                        }
                        v += j;
                    }
                    t.closePath(), r = n, o = i;
                }
            }
        }, t.CMD = mf, t.initDefaultProps = function() {
            var e = t.prototype;
            e._saveData = !0, e._needsDash = !1, e._dashOffset = 0, e._dashIdx = 0, e._dashSum = 0, 
            e._ux = 0, e._uy = 0, e._pendingPtDist = 0, e._version = 0;
        }(), t;
    }(), Nf = 2 * Math.PI, Bf = 2 * Math.PI, zf = Ef.CMD, Ff = 2 * Math.PI, Vf = 1e-4, Hf = [ -1, -1, -1 ], Gf = [ -1, -1 ], Wf = c({
        fill: "#000",
        stroke: null,
        strokePercent: 1,
        fillOpacity: 1,
        strokeOpacity: 1,
        lineDashOffset: 0,
        lineWidth: 1,
        lineCap: "butt",
        miterLimit: 10,
        strokeNoScale: !1,
        strokeFirst: !1
    }, Xp), Uf = {
        style: c({
            fill: !0,
            stroke: !0,
            strokePercent: !0,
            fillOpacity: !0,
            strokeOpacity: !0,
            lineDashOffset: !0,
            lineWidth: !0,
            miterLimit: !0
        }, Yp.style)
    }, Xf = [ "x", "y", "rotation", "scaleX", "scaleY", "originX", "originY", "invisible", "culling", "z", "z2", "zlevel", "parent" ], Yf = function(e) {
        function i(t) {
            return e.call(this, t) || this;
        }
        return n(i, e), i.prototype.update = function() {
            var t = this;
            e.prototype.update.call(this);
            var n = this.style;
            if (n.decal) {
                var r = this._decalEl = this._decalEl || new i();
                r.buildPath === i.prototype.buildPath && (r.buildPath = function(e) {
                    t.buildPath(e, t.shape);
                }), r.silent = !0;
                var o = r.style;
                for (var a in n) o[a] !== n[a] && (o[a] = n[a]);
                o.fill = n.fill ? n.decal : null, o.decal = null, o.shadowColor = null, n.strokeFirst && (o.stroke = null);
                for (var s = 0; s < Xf.length; ++s) r[Xf[s]] = this[Xf[s]];
                r.__dirty |= lc;
            } else this._decalEl && (this._decalEl = null);
        }, i.prototype.getDecalElement = function() {
            return this._decalEl;
        }, i.prototype._init = function(t) {
            var n = w(t);
            this.shape = this.getDefaultShape();
            var i = this.getDefaultStyle();
            i && this.useStyle(i);
            for (var r = 0; r < n.length; r++) {
                var o = n[r], a = t[o];
                "style" === o ? this.style ? h(this.style, a) : this.useStyle(a) : "shape" === o ? h(this.shape, a) : e.prototype.attrKV.call(this, o, a);
            }
            this.style || this.useStyle({});
        }, i.prototype.getDefaultStyle = function() {
            return null;
        }, i.prototype.getDefaultShape = function() {
            return {};
        }, i.prototype.canBeInsideText = function() {
            return this.hasFill();
        }, i.prototype.getInsideTextFill = function() {
            var t = this.style.fill;
            if ("none" !== t) {
                if (T(t)) {
                    var e = Ut(t, 0);
                    return e > .5 ? Wc : e > .2 ? "#eee" : Uc;
                }
                if (t) return Uc;
            }
            return Wc;
        }, i.prototype.getInsideTextStroke = function(t) {
            var e = this.style.fill;
            if (T(e)) {
                var n = this.__zr;
                if (!(!n || !n.isDarkMode()) === Ut(t, 0) < Gc) return e;
            }
        }, i.prototype.buildPath = function() {}, i.prototype.pathUpdated = function() {
            this.__dirty &= ~uc;
        }, i.prototype.createPathProxy = function() {
            this.path = new Ef(!1);
        }, i.prototype.hasStroke = function() {
            var t = this.style, e = t.stroke;
            return !(null == e || "none" === e || !(t.lineWidth > 0));
        }, i.prototype.hasFill = function() {
            var t = this.style.fill;
            return null != t && "none" !== t;
        }, i.prototype.getBoundingRect = function() {
            var t = this._rect, e = this.style, n = !t;
            if (n) {
                var i = !1;
                this.path || (i = !0, this.createPathProxy());
                var r = this.path;
                (i || this.__dirty & uc) && (r.beginPath(), this.buildPath(r, this.shape, !1), this.pathUpdated()), 
                t = r.getBoundingRect();
            }
            if (this._rect = t, this.hasStroke() && this.path && this.path.len() > 0) {
                var o = this._rectWithStroke || (this._rectWithStroke = t.clone());
                if (this.__dirty || n) {
                    o.copy(t);
                    var a = e.strokeNoScale ? this.getLineScale() : 1, s = e.lineWidth;
                    if (!this.hasFill()) {
                        var l = this.strokeContainThreshold;
                        s = Math.max(s, null == l ? 4 : l);
                    }
                    a > 1e-10 && (o.width += s / a, o.height += s / a, o.x -= s / a / 2, o.y -= s / a / 2);
                }
                return o;
            }
            return t;
        }, i.prototype.contain = function(t, e) {
            var n = this.transformCoordToLocal(t, e), i = this.getBoundingRect(), r = this.style;
            if (t = n[0], e = n[1], i.contain(t, e)) {
                var o = this.path;
                if (this.hasStroke()) {
                    var a = r.lineWidth, s = r.strokeNoScale ? this.getLineScale() : 1;
                    if (s > 1e-10 && (this.hasFill() || (a = Math.max(a, this.strokeContainThreshold)), 
                    function(t, e, n, i) {
                        return li(t, e, !0, n, i);
                    }(o, a / s, t, e))) return !0;
                }
                if (this.hasFill()) return function(t, e, n) {
                    return li(t, 0, !1, e, n);
                }(o, t, e);
            }
            return !1;
        }, i.prototype.dirtyShape = function() {
            this.__dirty |= uc, this._rect && (this._rect = null), this._decalEl && this._decalEl.dirtyShape(), 
            this.markRedraw();
        }, i.prototype.dirty = function() {
            this.dirtyStyle(), this.dirtyShape();
        }, i.prototype.animateShape = function(t) {
            return this.animate("shape", t);
        }, i.prototype.updateDuringAnimation = function(t) {
            "style" === t ? this.dirtyStyle() : "shape" === t ? this.dirtyShape() : this.markRedraw();
        }, i.prototype.attrKV = function(t, n) {
            "shape" === t ? this.setShape(n) : e.prototype.attrKV.call(this, t, n);
        }, i.prototype.setShape = function(t, e) {
            var n = this.shape;
            return n || (n = this.shape = {}), "string" == typeof t ? n[t] = e : h(n, t), this.dirtyShape(), 
            this;
        }, i.prototype.shapeChanged = function() {
            return !!(this.__dirty & uc);
        }, i.prototype.createStyle = function(t) {
            return X(Wf, t);
        }, i.prototype._innerSaveToNormal = function(t) {
            e.prototype._innerSaveToNormal.call(this, t);
            var n = this._normalState;
            t.shape && !n.shape && (n.shape = h({}, this.shape));
        }, i.prototype._applyStateObj = function(n, i, r, o, a, s) {
            e.prototype._applyStateObj.call(this, n, i, r, o, a, s);
            var l, u = !(i && o);
            if (i && i.shape ? a ? o ? l = i.shape : (l = h({}, r.shape), h(l, i.shape)) : (l = h({}, o ? this.shape : r.shape), 
            h(l, i.shape)) : u && (l = r.shape), l) if (a) {
                this.shape = h({}, this.shape);
                for (var c = {}, p = w(l), f = 0; f < p.length; f++) {
                    var d = p[f];
                    "object" == t(l[d]) ? this.shape[d] = l[d] : c[d] = l[d];
                }
                this._transitionState(n, {
                    shape: c
                }, s);
            } else this.shape = l, this.dirtyShape();
        }, i.prototype._mergeStates = function(t) {
            for (var n, i = e.prototype._mergeStates.call(this, t), r = 0; r < t.length; r++) {
                var o = t[r];
                o.shape && (n = n || {}, this._mergeStyle(n, o.shape));
            }
            return n && (i.shape = n), i;
        }, i.prototype.getAnimationStyleProps = function() {
            return Uf;
        }, i.prototype.isZeroArea = function() {
            return !1;
        }, i.extend = function(t) {
            var e = function(e) {
                function i(n) {
                    var i = e.call(this, n) || this;
                    return t.init && t.init.call(i, n), i;
                }
                return n(i, e), i.prototype.getDefaultStyle = function() {
                    return s(t.style);
                }, i.prototype.getDefaultShape = function() {
                    return s(t.shape);
                }, i;
            }(i);
            for (var r in t) "function" == typeof t[r] && (e.prototype[r] = t[r]);
            return e;
        }, i.initDefaultProps = function() {
            var t = i.prototype;
            t.type = "path", t.strokeContainThreshold = 5, t.segmentIgnoreThreshold = 0, t.subPixelOptimize = !1, 
            t.autoBatch = !1, t.__dirty = 2 | lc | uc;
        }(), i;
    }(Zp), qf = c({
        strokeFirst: !0,
        font: hp,
        x: 0,
        y: 0,
        textAlign: "left",
        textBaseline: "top",
        miterLimit: 2
    }, Wf), jf = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this;
        }
        return n(e, t), e.prototype.hasStroke = function() {
            var t = this.style, e = t.stroke;
            return null != e && "none" !== e && t.lineWidth > 0;
        }, e.prototype.hasFill = function() {
            var t = this.style.fill;
            return null != t && "none" !== t;
        }, e.prototype.createStyle = function(t) {
            return X(qf, t);
        }, e.prototype.setBoundingRect = function(t) {
            this._rect = t;
        }, e.prototype.getBoundingRect = function() {
            var t = this.style;
            if (!this._rect) {
                var e = t.text;
                null != e ? e += "" : e = "";
                var n = _e(e, t.font, t.textAlign, t.textBaseline);
                if (n.x += t.x || 0, n.y += t.y || 0, this.hasStroke()) {
                    var i = t.lineWidth;
                    n.x -= i / 2, n.y -= i / 2, n.width += i, n.height += i;
                }
                this._rect = n;
            }
            return this._rect;
        }, e.initDefaultProps = void (e.prototype.dirtyRectTolerance = 10), e;
    }(Zp);
    jf.prototype.type = "tspan";
    var Zf = c({
        x: 0,
        y: 0
    }, Xp), Kf = {
        style: c({
            x: !0,
            y: !0,
            width: !0,
            height: !0,
            sx: !0,
            sy: !0,
            sWidth: !0,
            sHeight: !0
        }, Yp.style)
    }, $f = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this;
        }
        return n(e, t), e.prototype.createStyle = function(t) {
            return X(Zf, t);
        }, e.prototype._getSize = function(t) {
            var e = this.style, n = e[t];
            if (null != n) return n;
            var i = function(t) {
                return !!(t && "string" != typeof t && t.width && t.height);
            }(e.image) ? e.image : this.__image;
            if (!i) return 0;
            var r = "width" === t ? "height" : "width", o = e[r];
            return null == o ? i[t] : i[t] / i[r] * o;
        }, e.prototype.getWidth = function() {
            return this._getSize("width");
        }, e.prototype.getHeight = function() {
            return this._getSize("height");
        }, e.prototype.getAnimationStyleProps = function() {
            return Kf;
        }, e.prototype.getBoundingRect = function() {
            var t = this.style;
            return this._rect || (this._rect = new lp(t.x || 0, t.y || 0, this.getWidth(), this.getHeight())), 
            this._rect;
        }, e;
    }(Zp);
    $f.prototype.type = "image";
    var Jf = Math.round, Qf = function() {
        this.x = 0, this.y = 0, this.width = 0, this.height = 0;
    }, td = {}, ed = function(t) {
        function e(e) {
            return t.call(this, e) || this;
        }
        return n(e, t), e.prototype.getDefaultShape = function() {
            return new Qf();
        }, e.prototype.buildPath = function(t, e) {
            var n, i, r, o;
            if (this.subPixelOptimize) {
                var a = hi(td, e, this.style);
                n = a.x, i = a.y, r = a.width, o = a.height, a.r = e.r, e = a;
            } else n = e.x, i = e.y, r = e.width, o = e.height;
            e.r ? function(t, e) {
                var n, i, r, o, a, s = e.x, l = e.y, u = e.width, h = e.height, c = e.r;
                0 > u && (s += u, u = -u), 0 > h && (l += h, h = -h), "number" == typeof c ? n = i = r = o = c : c instanceof Array ? 1 === c.length ? n = i = r = o = c[0] : 2 === c.length ? (n = r = c[0], 
                i = o = c[1]) : 3 === c.length ? (n = c[0], i = o = c[1], r = c[2]) : (n = c[0], 
                i = c[1], r = c[2], o = c[3]) : n = i = r = o = 0, n + i > u && (n *= u / (a = n + i), 
                i *= u / a), r + o > u && (r *= u / (a = r + o), o *= u / a), i + r > h && (i *= h / (a = i + r), 
                r *= h / a), n + o > h && (n *= h / (a = n + o), o *= h / a), t.moveTo(s + n, l), 
                t.lineTo(s + u - i, l), 0 !== i && t.arc(s + u - i, l + i, i, -Math.PI / 2, 0), 
                t.lineTo(s + u, l + h - r), 0 !== r && t.arc(s + u - r, l + h - r, r, 0, Math.PI / 2), 
                t.lineTo(s + o, l + h), 0 !== o && t.arc(s + o, l + h - o, o, Math.PI / 2, Math.PI), 
                t.lineTo(s, l + n), 0 !== n && t.arc(s + n, l + n, n, Math.PI, 1.5 * Math.PI);
            }(t, e) : t.rect(n, i, r, o);
        }, e.prototype.isZeroArea = function() {
            return !this.shape.width || !this.shape.height;
        }, e;
    }(Yf);
    ed.prototype.type = "rect";
    var nd = {
        fill: "#000"
    }, id = {
        style: c({
            fill: !0,
            stroke: !0,
            fillOpacity: !0,
            strokeOpacity: !0,
            lineWidth: !0,
            fontSize: !0,
            lineHeight: !0,
            width: !0,
            height: !0,
            textShadowColor: !0,
            textShadowBlur: !0,
            textShadowOffsetX: !0,
            textShadowOffsetY: !0,
            backgroundColor: !0,
            padding: !0,
            borderColor: !0,
            borderWidth: !0,
            borderRadius: !0
        }, Yp.style)
    }, rd = function(t) {
        function e(e) {
            var n = t.call(this) || this;
            return n.type = "text", n._children = [], n._defaultStyle = nd, n.attr(e), n;
        }
        return n(e, t), e.prototype.childrenRef = function() {
            return this._children;
        }, e.prototype.update = function() {
            this.styleChanged() && this._updateSubTexts();
            for (var e = 0; e < this._children.length; e++) {
                var n = this._children[e];
                n.zlevel = this.zlevel, n.z = this.z, n.z2 = this.z2, n.culling = this.culling, 
                n.cursor = this.cursor, n.invisible = this.invisible;
            }
            var i = this.attachedTransform;
            if (i) {
                i.updateTransform();
                var r = i.transform;
                r ? (this.transform = this.transform || [], he(this.transform, r)) : this.transform = null;
            } else t.prototype.update.call(this);
        }, e.prototype.getComputedTransform = function() {
            return this.__hostTarget && (this.__hostTarget.getComputedTransform(), this.__hostTarget.updateInnerText(!0)), 
            this.attachedTransform ? this.attachedTransform.getComputedTransform() : t.prototype.getComputedTransform.call(this);
        }, e.prototype._updateSubTexts = function() {
            this._childCursor = 0, function(t) {
                pi(t), y(t.rich, pi);
            }(this.style), this.style.rich ? this._updateRichTexts() : this._updatePlainTexts(), 
            this._children.length = this._childCursor, this.styleUpdated();
        }, e.prototype.addSelfToZr = function(e) {
            t.prototype.addSelfToZr.call(this, e);
            for (var n = 0; n < this._children.length; n++) this._children[n].__zr = e;
        }, e.prototype.removeSelfFromZr = function(e) {
            t.prototype.removeSelfFromZr.call(this, e);
            for (var n = 0; n < this._children.length; n++) this._children[n].__zr = null;
        }, e.prototype.getBoundingRect = function() {
            if (this.styleChanged() && this._updateSubTexts(), !this._rect) {
                for (var t = new lp(0, 0, 0, 0), e = this._children, n = [], i = null, r = 0; r < e.length; r++) {
                    var o = e[r], a = o.getBoundingRect(), s = o.getLocalTransform(n);
                    s ? (t.copy(a), t.applyTransform(s), (i = i || t.clone()).union(t)) : (i = i || a.clone()).union(a);
                }
                this._rect = i || t;
            }
            return this._rect;
        }, e.prototype.setDefaultTextStyle = function(t) {
            this._defaultStyle = t || nd;
        }, e.prototype.setTextContent = function() {
            throw new Error("Can't attach text on another text");
        }, e.prototype._mergeStyle = function(t, e) {
            if (!e) return t;
            var n = e.rich, i = t.rich || n && {};
            return h(t, e), n && i ? (this._mergeRich(i, n), t.rich = i) : i && (t.rich = i), 
            t;
        }, e.prototype._mergeRich = function(t, e) {
            for (var n = w(e), i = 0; i < n.length; i++) {
                var r = n[i];
                t[r] = t[r] || {}, h(t[r], e[r]);
            }
        }, e.prototype.getAnimationStyleProps = function() {
            return id;
        }, e.prototype._getOrCreateChild = function(t) {
            var e = this._children[this._childCursor];
            return e && e instanceof t || (e = new t()), this._children[this._childCursor++] = e, 
            e.__zr = this.__zr, e.parent = this, e;
        }, e.prototype._updatePlainTexts = function() {
            var t = this.style, e = t.font || hp, n = t.padding, i = function(t, e) {
                null != t && (t += "");
                var n, i = e.overflow, r = e.padding, o = e.font, a = "truncate" === i, s = be(o), l = N(e.lineHeight, s), u = "truncate" === e.lineOverflow, h = e.width, c = (n = null != h && "break" === i || "breakAll" === i ? t ? Dn(t, e.font, h, "breakAll" === i, 0).lines : [] : t ? t.split("\n") : []).length * l, p = N(e.height, c);
                if (c > p && u) {
                    var f = Math.floor(p / l);
                    n = n.slice(0, f);
                }
                var d = p, g = h;
                if (r && (d += r[0] + r[2], null != g && (g += r[1] + r[3])), t && a && null != g) for (var y = Tn(h, o, e.ellipsis, {
                    minChar: e.truncateMinChar,
                    placeholder: e.placeholder
                }), v = 0; v < n.length; v++) n[v] = Cn(n[v], y);
                if (null == h) {
                    var m = 0;
                    for (v = 0; v < n.length; v++) m = Math.max(ve(n[v], o), m);
                    h = m;
                }
                return {
                    lines: n,
                    height: p,
                    outerHeight: d,
                    lineHeight: l,
                    calculatedLineHeight: s,
                    contentHeight: c,
                    width: h
                };
            }(gi(t), t), r = yi(t), o = !!t.backgroundColor, a = i.outerHeight, s = i.lines, l = i.lineHeight, u = this._defaultStyle, h = t.x || 0, c = t.y || 0, p = t.align || u.align || "left", f = t.verticalAlign || u.verticalAlign || "top", d = h, g = we(c, i.contentHeight, f);
            if (r || n) {
                var y = i.width;
                n && (y += n[1] + n[3]);
                var v = xe(h, y, p), m = we(c, a, f);
                r && this._renderBackground(t, t, v, m, y, a);
            }
            g += l / 2, n && (d = di(h, p, n), "top" === f ? g += n[0] : "bottom" === f && (g -= n[2]));
            for (var _ = 0, x = !1, w = (function(t) {
                return null == t || "none" === t ? null : t.image || t.colorStops ? "#000" : t;
            }("fill" in t ? t.fill : (x = !0, u.fill))), b = (fi("stroke" in t ? t.stroke : o || u.autoStroke && !x ? null : (_ = 2, 
            u.stroke))), S = t.textShadowBlur > 0, M = null != t.width && ("truncate" === t.overflow || "break" === t.overflow || "breakAll" === t.overflow), T = i.calculatedLineHeight, C = 0; C < s.length; C++) {
                var A = this._getOrCreateChild(jf), k = A.createStyle();
                A.useStyle(k), k.text = s[C], k.x = d, k.y = g, p && (k.textAlign = p), k.textBaseline = "middle", 
                k.opacity = t.opacity, k.strokeFirst = !0, S && (k.shadowBlur = t.textShadowBlur || 0, 
                k.shadowColor = t.textShadowColor || "transparent", k.shadowOffsetX = t.textShadowOffsetX || 0, 
                k.shadowOffsetY = t.textShadowOffsetY || 0), b && (k.stroke = b, k.lineWidth = t.lineWidth || _, 
                k.lineDash = t.lineDash, k.lineDashOffset = t.lineDashOffset || 0), w && (k.fill = w), 
                k.font = e, g += l, M && A.setBoundingRect(new lp(xe(k.x, t.width, k.textAlign), we(k.y, T, k.textBaseline), t.width, T));
            }
        }, e.prototype._updateRichTexts = function() {
            var t = this.style, e = function(t, e) {
                function n(t, e, n) {
                    t.width = e, t.lineHeight = n, p += n, f = Math.max(f, e);
                }
                var i = new Gp();
                if (null != t && (t += ""), !t) return i;
                for (var r, o = e.width, a = e.height, s = e.overflow, l = "break" !== s && "breakAll" !== s || null == o ? null : {
                    width: o,
                    accumWidth: 0,
                    breakAll: "breakAll" === s
                }, u = Fp.lastIndex = 0; null != (r = Fp.exec(t)); ) {
                    var h = r.index;
                    h > u && kn(i, t.substring(u, h), e, l), kn(i, r[2], e, l, r[1]), u = Fp.lastIndex;
                }
                u < t.length && kn(i, t.substring(u, t.length), e, l);
                var c = [], p = 0, f = 0, d = e.padding, g = "truncate" === s, y = "truncate" === e.lineOverflow;
                t: for (var v = 0; v < i.lines.length; v++) {
                    for (var m = i.lines[v], _ = 0, x = 0, w = 0; w < m.tokens.length; w++) {
                        var b = (L = m.tokens[w]).styleName && e.rich[L.styleName] || {}, S = L.textPadding = b.padding, M = S ? S[1] + S[3] : 0, T = L.font = b.font || e.font;
                        L.contentHeight = be(T);
                        var C = N(b.height, L.contentHeight);
                        if (L.innerHeight = C, S && (C += S[0] + S[2]), L.height = C, L.lineHeight = B(b.lineHeight, e.lineHeight, C), 
                        L.align = b && b.align || e.align, L.verticalAlign = b && b.verticalAlign || "middle", 
                        y && null != a && p + L.lineHeight > a) {
                            w > 0 ? (m.tokens = m.tokens.slice(0, w), n(m, x, _), i.lines = i.lines.slice(0, v + 1)) : i.lines = i.lines.slice(0, v);
                            break t;
                        }
                        var A = b.width, k = null == A || "auto" === A;
                        if ("string" == typeof A && "%" === A.charAt(A.length - 1)) L.percentWidth = A, 
                        c.push(L), L.contentWidth = ve(L.text, T); else {
                            if (k) {
                                var I = b.backgroundColor, D = I && I.image;
                                D && (Sn(D = xn(D)) && (L.width = Math.max(L.width, D.width * C / D.height)));
                            }
                            var P = g && null != o ? o - x : null;
                            null != P && P < L.width ? !k || M > P ? (L.text = "", L.width = L.contentWidth = 0) : (L.text = Mn(L.text, P - M, T, e.ellipsis, {
                                minChar: e.truncateMinChar
                            }), L.width = L.contentWidth = ve(L.text, T)) : L.contentWidth = ve(L.text, T);
                        }
                        L.width += M, x += L.width, b && (_ = Math.max(_, L.lineHeight));
                    }
                    n(m, x, _);
                }
                for (i.outerWidth = i.width = N(o, f), i.outerHeight = i.height = N(a, p), i.contentHeight = p, 
                i.contentWidth = f, d && (i.outerWidth += d[1] + d[3], i.outerHeight += d[0] + d[2]), 
                v = 0; v < c.length; v++) {
                    var L, O = (L = c[v]).percentWidth;
                    L.width = parseInt(O, 10) / 100 * i.width;
                }
                return i;
            }(gi(t), t), n = e.width, i = e.outerWidth, r = e.outerHeight, o = t.padding, a = t.x || 0, s = t.y || 0, l = this._defaultStyle, u = t.align || l.align, h = t.verticalAlign || l.verticalAlign, c = xe(a, i, u), p = we(s, r, h), f = c, d = p;
            o && (f += o[3], d += o[0]);
            var g = f + n;
            yi(t) && this._renderBackground(t, t, c, p, i, r);
            for (var y = !!t.backgroundColor, v = 0; v < e.lines.length; v++) {
                for (var m = e.lines[v], _ = m.tokens, x = _.length, w = m.lineHeight, b = m.width, S = 0, M = f, T = g, C = x - 1, A = void 0; x > S && (!(A = _[S]).align || "left" === A.align); ) this._placeToken(A, t, w, d, M, "left", y), 
                b -= A.width, M += A.width, S++;
                for (;C >= 0 && "right" === (A = _[C]).align; ) this._placeToken(A, t, w, d, T, "right", y), 
                b -= A.width, T -= A.width, C--;
                for (M += (n - (M - f) - (g - T) - b) / 2; C >= S; ) A = _[S], this._placeToken(A, t, w, d, M + A.width / 2, "center", y), 
                M += A.width, S++;
                d += w;
            }
        }, e.prototype._placeToken = function(t, e, n, i, r, o, a) {
            var s = e.rich[t.styleName] || {};
            s.text = t.text;
            var l = t.verticalAlign, u = i + n / 2;
            "top" === l ? u = i + t.height / 2 : "bottom" === l && (u = i + n - t.height / 2), 
            !t.isLineHolder && yi(s) && this._renderBackground(s, e, "right" === o ? r - t.width : "center" === o ? r - t.width / 2 : r, u - t.height / 2, t.width, t.height);
            var h = !!s.backgroundColor, c = t.textPadding;
            c && (r = di(r, o, c), u -= t.height / 2 - c[0] - t.innerHeight / 2);
            var p = this._getOrCreateChild(jf), f = p.createStyle();
            p.useStyle(f);
            var d = this._defaultStyle, g = !1, y = 0, v = fi("fill" in s ? s.fill : "fill" in e ? e.fill : (g = !0, 
            d.fill)), m = fi("stroke" in s ? s.stroke : "stroke" in e ? e.stroke : h || a || d.autoStroke && !g ? null : (y = 2, 
            d.stroke)), _ = s.textShadowBlur > 0 || e.textShadowBlur > 0;
            f.text = t.text, f.x = r, f.y = u, _ && (f.shadowBlur = s.textShadowBlur || e.textShadowBlur || 0, 
            f.shadowColor = s.textShadowColor || e.textShadowColor || "transparent", f.shadowOffsetX = s.textShadowOffsetX || e.textShadowOffsetX || 0, 
            f.shadowOffsetY = s.textShadowOffsetY || e.textShadowOffsetY || 0), f.textAlign = o, 
            f.textBaseline = "middle", f.font = t.font || hp, f.opacity = B(s.opacity, e.opacity, 1), 
            m && (f.lineWidth = B(s.lineWidth, e.lineWidth, y), f.lineDash = N(s.lineDash, e.lineDash), 
            f.lineDashOffset = e.lineDashOffset || 0, f.stroke = m), v && (f.fill = v);
            var x = t.contentWidth, w = t.contentHeight;
            p.setBoundingRect(new lp(xe(f.x, x, f.textAlign), we(f.y, w, f.textBaseline), x, w));
        }, e.prototype._renderBackground = function(t, e, n, i, r, o) {
            var a, s, l, u = t.backgroundColor, h = t.borderWidth, c = t.borderColor, p = u && u.image, f = u && !p, d = t.borderRadius, g = this;
            if (f || h && c) {
                (a = this._getOrCreateChild(ed)).useStyle(a.createStyle()), a.style.fill = null;
                var y = a.shape;
                y.x = n, y.y = i, y.width = r, y.height = o, y.r = d, a.dirtyShape();
            }
            if (f) (l = a.style).fill = u || null, l.fillOpacity = N(t.fillOpacity, 1); else if (p) {
                (s = this._getOrCreateChild($f)).onload = function() {
                    g.dirtyStyle();
                };
                var v = s.style;
                v.image = u.image, v.x = n, v.y = i, v.width = r, v.height = o;
            }
            h && c && ((l = a.style).lineWidth = h, l.stroke = c, l.strokeOpacity = N(t.strokeOpacity, 1), 
            l.lineDash = t.borderDash, l.lineDashOffset = t.borderDashOffset || 0, a.strokeContainThreshold = 0, 
            a.hasFill() && a.hasStroke() && (l.strokeFirst = !0, l.lineWidth *= 2));
            var m = (a || s).style;
            m.shadowBlur = t.shadowBlur || 0, m.shadowColor = t.shadowColor || "transparent", 
            m.shadowOffsetX = t.shadowOffsetX || 0, m.shadowOffsetY = t.shadowOffsetY || 0, 
            m.opacity = B(t.opacity, e.opacity, 1);
        }, e.makeFont = function(t) {
            var e = "";
            if (t.fontSize || t.fontFamily || t.fontWeight) {
                var n = "";
                n = "string" != typeof t.fontSize || -1 === t.fontSize.indexOf("px") && -1 === t.fontSize.indexOf("rem") && -1 === t.fontSize.indexOf("em") ? isNaN(+t.fontSize) ? "12px" : t.fontSize + "px" : t.fontSize, 
                e = [ t.fontStyle, t.fontWeight, n, t.fontFamily || "sans-serif" ].join(" ");
            }
            return e && H(e) || t.textFont || t.font;
        }, e;
    }(Zp), od = {
        left: !0,
        right: 1,
        center: 1
    }, ad = {
        top: 1,
        bottom: 1,
        middle: 1
    }, sd = sn(), ld = 1, ud = {}, hd = sn(), cd = 0, pd = 1, fd = 2, dd = [ "emphasis", "blur", "select" ], gd = [ "normal", "emphasis", "blur", "select" ], yd = 10, vd = 9, md = "highlight", _d = "downplay", xd = "select", wd = "unselect", bd = "toggleSelect", Sd = new vc(100), Md = [ "emphasis", "blur", "select" ], Td = {
        itemStyle: "getItemStyle",
        lineStyle: "getLineStyle",
        areaStyle: "getAreaStyle"
    }, Cd = Ef.CMD, Ad = [ [], [], [] ], kd = Math.sqrt, Id = Math.atan2, Dd = Math.sqrt, Pd = Math.sin, Ld = Math.cos, Od = Math.PI, Rd = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/gi, Ed = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g, Nd = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this;
        }
        return n(e, t), e.prototype.applyTransform = function() {}, e;
    }(Yf), Bd = function() {
        this.cx = 0, this.cy = 0, this.r = 0;
    }, zd = function(t) {
        function e(e) {
            return t.call(this, e) || this;
        }
        return n(e, t), e.prototype.getDefaultShape = function() {
            return new Bd();
        }, e.prototype.buildPath = function(t, e, n) {
            n && t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI);
        }, e;
    }(Yf);
    zd.prototype.type = "circle";
    var Fd = function() {
        this.cx = 0, this.cy = 0, this.rx = 0, this.ry = 0;
    }, Vd = function(t) {
        function e(e) {
            return t.call(this, e) || this;
        }
        return n(e, t), e.prototype.getDefaultShape = function() {
            return new Fd();
        }, e.prototype.buildPath = function(t, e) {
            var n = .5522848, i = e.cx, r = e.cy, o = e.rx, a = e.ry, s = o * n, l = a * n;
            t.moveTo(i - o, r), t.bezierCurveTo(i - o, r - l, i - s, r - a, i, r - a), t.bezierCurveTo(i + s, r - a, i + o, r - l, i + o, r), 
            t.bezierCurveTo(i + o, r + l, i + s, r + a, i, r + a), t.bezierCurveTo(i - s, r + a, i - o, r + l, i - o, r), 
            t.closePath();
        }, e;
    }(Yf);
    Vd.prototype.type = "ellipse";
    var Hd = Math.PI, Gd = 2 * Hd, Wd = Math.sin, Ud = Math.cos, Xd = Math.acos, Yd = Math.atan2, qd = Math.abs, jd = Math.sqrt, Zd = Math.max, Kd = Math.min, $d = 1e-4, Jd = function() {
        this.cx = 0, this.cy = 0, this.r0 = 0, this.r = 0, this.startAngle = 0, this.endAngle = 2 * Math.PI, 
        this.clockwise = !0, this.cornerRadius = 0, this.innerCornerRadius = 0;
    }, Qd = function(t) {
        function e(e) {
            return t.call(this, e) || this;
        }
        return n(e, t), e.prototype.getDefaultShape = function() {
            return new Jd();
        }, e.prototype.buildPath = function(t, e) {
            rr(t, e);
        }, e.prototype.isZeroArea = function() {
            return this.shape.startAngle === this.shape.endAngle || this.shape.r === this.shape.r0;
        }, e;
    }(Yf);
    Qd.prototype.type = "sector";
    var tg = function() {
        this.cx = 0, this.cy = 0, this.r = 0, this.r0 = 0;
    }, eg = function(t) {
        function e(e) {
            return t.call(this, e) || this;
        }
        return n(e, t), e.prototype.getDefaultShape = function() {
            return new tg();
        }, e.prototype.buildPath = function(t, e) {
            var n = e.cx, i = e.cy, r = 2 * Math.PI;
            t.moveTo(n + e.r, i), t.arc(n, i, e.r, 0, r, !1), t.moveTo(n + e.r0, i), t.arc(n, i, e.r0, 0, r, !0);
        }, e;
    }(Yf);
    eg.prototype.type = "ring";
    var ng = function() {
        this.points = null, this.smooth = 0, this.smoothConstraint = null;
    }, ig = function(t) {
        function e(e) {
            return t.call(this, e) || this;
        }
        return n(e, t), e.prototype.getDefaultShape = function() {
            return new ng();
        }, e.prototype.buildPath = function(t, e) {
            ar(t, e, !0);
        }, e;
    }(Yf);
    ig.prototype.type = "polygon";
    var rg = function() {
        this.points = null, this.percent = 1, this.smooth = 0, this.smoothConstraint = null;
    }, og = function(t) {
        function e(e) {
            return t.call(this, e) || this;
        }
        return n(e, t), e.prototype.getDefaultStyle = function() {
            return {
                stroke: "#000",
                fill: null
            };
        }, e.prototype.getDefaultShape = function() {
            return new rg();
        }, e.prototype.buildPath = function(t, e) {
            ar(t, e, !1);
        }, e;
    }(Yf);
    og.prototype.type = "polyline";
    var ag = {}, sg = function() {
        this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.percent = 1;
    }, lg = function(t) {
        function e(e) {
            return t.call(this, e) || this;
        }
        return n(e, t), e.prototype.getDefaultStyle = function() {
            return {
                stroke: "#000",
                fill: null
            };
        }, e.prototype.getDefaultShape = function() {
            return new sg();
        }, e.prototype.buildPath = function(t, e) {
            var n, i, r, o;
            if (this.subPixelOptimize) {
                var a = ui(ag, e, this.style);
                n = a.x1, i = a.y1, r = a.x2, o = a.y2;
            } else n = e.x1, i = e.y1, r = e.x2, o = e.y2;
            var s = e.percent;
            0 !== s && (t.moveTo(n, i), 1 > s && (r = n * (1 - s) + r * s, o = i * (1 - s) + o * s), 
            t.lineTo(r, o));
        }, e.prototype.pointAt = function(t) {
            var e = this.shape;
            return [ e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t ];
        }, e;
    }(Yf);
    lg.prototype.type = "line";
    var ug = [], hg = function() {
        this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.cpx1 = 0, this.cpy1 = 0, 
        this.percent = 1;
    }, cg = function(t) {
        function e(e) {
            return t.call(this, e) || this;
        }
        return n(e, t), e.prototype.getDefaultStyle = function() {
            return {
                stroke: "#000",
                fill: null
            };
        }, e.prototype.getDefaultShape = function() {
            return new hg();
        }, e.prototype.buildPath = function(t, e) {
            var n = e.x1, i = e.y1, r = e.x2, o = e.y2, a = e.cpx1, s = e.cpy1, l = e.cpx2, u = e.cpy2, h = e.percent;
            0 !== h && (t.moveTo(n, i), null == l || null == u ? (1 > h && (Gn(n, a, r, h, ug), 
            a = ug[1], r = ug[2], Gn(i, s, o, h, ug), s = ug[1], o = ug[2]), t.quadraticCurveTo(a, s, r, o)) : (1 > h && (Nn(n, a, l, r, h, ug), 
            a = ug[1], l = ug[2], r = ug[3], Nn(i, s, u, o, h, ug), s = ug[1], u = ug[2], o = ug[3]), 
            t.bezierCurveTo(a, s, l, u, r, o)));
        }, e.prototype.pointAt = function(t) {
            return sr(this.shape, t, !1);
        }, e.prototype.tangentAt = function(t) {
            var e = sr(this.shape, t, !0);
            return et(e, e);
        }, e;
    }(Yf);
    cg.prototype.type = "bezier-curve";
    var pg = function() {
        this.cx = 0, this.cy = 0, this.r = 0, this.startAngle = 0, this.endAngle = 2 * Math.PI, 
        this.clockwise = !0;
    }, fg = function(t) {
        function e(e) {
            return t.call(this, e) || this;
        }
        return n(e, t), e.prototype.getDefaultStyle = function() {
            return {
                stroke: "#000",
                fill: null
            };
        }, e.prototype.getDefaultShape = function() {
            return new pg();
        }, e.prototype.buildPath = function(t, e) {
            var n = e.cx, i = e.cy, r = Math.max(e.r, 0), o = e.startAngle, a = e.endAngle, s = e.clockwise, l = Math.cos(o), u = Math.sin(o);
            t.moveTo(l * r + n, u * r + i), t.arc(n, i, r, o, a, !s);
        }, e;
    }(Yf);
    fg.prototype.type = "arc";
    var dg = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.type = "compound", e;
        }
        return n(e, t), e.prototype._updatePathDirty = function() {
            for (var t = this.shape.paths, e = this.shapeChanged(), n = 0; n < t.length; n++) e = e || t[n].shapeChanged();
            e && this.dirtyShape();
        }, e.prototype.beforeBrush = function() {
            this._updatePathDirty();
            for (var t = this.shape.paths || [], e = this.getGlobalScale(), n = 0; n < t.length; n++) t[n].path || t[n].createPathProxy(), 
            t[n].path.setScale(e[0], e[1], t[n].segmentIgnoreThreshold);
        }, e.prototype.buildPath = function(t, e) {
            for (var n = e.paths || [], i = 0; i < n.length; i++) n[i].buildPath(t, n[i].shape, !0);
        }, e.prototype.afterBrush = function() {
            for (var t = this.shape.paths || [], e = 0; e < t.length; e++) t[e].pathUpdated();
        }, e.prototype.getBoundingRect = function() {
            return this._updatePathDirty.call(this), Yf.prototype.getBoundingRect.call(this);
        }, e;
    }(Yf), gg = function() {
        function t(t) {
            this.colorStops = t || [];
        }
        return t.prototype.addColorStop = function(t, e) {
            this.colorStops.push({
                offset: t,
                color: e
            });
        }, t;
    }(), yg = function(t) {
        function e(e, n, i, r, o, a) {
            var s = t.call(this, o) || this;
            return s.x = null == e ? 0 : e, s.y = null == n ? 0 : n, s.x2 = null == i ? 1 : i, 
            s.y2 = null == r ? 0 : r, s.type = "linear", s.global = a || !1, s;
        }
        return n(e, t), e;
    }(gg), vg = function(t) {
        function e(e, n, i, r, o) {
            var a = t.call(this, r) || this;
            return a.x = null == e ? .5 : e, a.y = null == n ? .5 : n, a.r = null == i ? .5 : i, 
            a.type = "radial", a.global = o || !1, a;
        }
        return n(e, t), e;
    }(gg), mg = [ 0, 0 ], _g = [ 0, 0 ], xg = new Qc(), wg = new Qc(), bg = function() {
        function t(t, e) {
            this._corners = [], this._axes = [], this._origin = [ 0, 0 ];
            for (var n = 0; 4 > n; n++) this._corners[n] = new Qc();
            for (n = 0; 2 > n; n++) this._axes[n] = new Qc();
            t && this.fromBoundingRect(t, e);
        }
        return t.prototype.fromBoundingRect = function(t, e) {
            var n = this._corners, i = this._axes, r = t.x, o = t.y, a = r + t.width, s = o + t.height;
            if (n[0].set(r, o), n[1].set(a, o), n[2].set(a, s), n[3].set(r, s), e) for (var l = 0; 4 > l; l++) n[l].transform(e);
            Qc.sub(i[0], n[1], n[0]), Qc.sub(i[1], n[3], n[0]), i[0].normalize(), i[1].normalize();
            for (l = 0; 2 > l; l++) this._origin[l] = i[l].dot(n[0]);
        }, t.prototype.intersect = function(t, e) {
            var n = !0, i = !e;
            return xg.set(1 / 0, 1 / 0), wg.set(0, 0), !this._intersectCheckOneSide(this, t, xg, wg, i, 1) && (n = !1, 
            i) || !this._intersectCheckOneSide(t, this, xg, wg, i, -1) && (n = !1, i) || i || Qc.copy(e, n ? xg : wg), 
            n;
        }, t.prototype._intersectCheckOneSide = function(t, e, n, i, r, o) {
            for (var a = !0, s = 0; 2 > s; s++) {
                var l = this._axes[s];
                if (this._getProjMinMaxOnAxis(s, t._corners, mg), this._getProjMinMaxOnAxis(s, e._corners, _g), 
                mg[1] < _g[0] || mg[0] > _g[1]) {
                    if (a = !1, r) return a;
                    var u = Math.abs(_g[0] - mg[1]), h = Math.abs(mg[0] - _g[1]);
                    Math.min(u, h) > i.len() && (h > u ? Qc.scale(i, l, -u * o) : Qc.scale(i, l, h * o));
                } else if (n) {
                    u = Math.abs(_g[0] - mg[1]), h = Math.abs(mg[0] - _g[1]);
                    Math.min(u, h) < n.len() && (h > u ? Qc.scale(n, l, u * o) : Qc.scale(n, l, -h * o));
                }
            }
            return a;
        }, t.prototype._getProjMinMaxOnAxis = function(t, e, n) {
            for (var i = this._axes[t], r = this._origin, o = e[0].dot(i) + r[t], a = o, s = o, l = 1; l < e.length; l++) {
                var u = e[l].dot(i) + r[t];
                a = Math.min(u, a), s = Math.max(u, s);
            }
            n[0] = a, n[1] = s;
        }, t;
    }(), Sg = [], Mg = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.notClear = !0, e.incremental = !0, e._displayables = [], e._temporaryDisplayables = [], 
            e._cursor = 0, e;
        }
        return n(e, t), e.prototype.traverse = function(t, e) {
            t.call(e, this);
        }, e.prototype.useStyle = function() {
            this.style = {};
        }, e.prototype.getCursor = function() {
            return this._cursor;
        }, e.prototype.innerAfterBrush = function() {
            this._cursor = this._displayables.length;
        }, e.prototype.clearDisplaybles = function() {
            this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.markRedraw(), 
            this.notClear = !1;
        }, e.prototype.clearTemporalDisplayables = function() {
            this._temporaryDisplayables = [];
        }, e.prototype.addDisplayable = function(t, e) {
            e ? this._temporaryDisplayables.push(t) : this._displayables.push(t), this.markRedraw();
        }, e.prototype.addDisplayables = function(t, e) {
            e = e || !1;
            for (var n = 0; n < t.length; n++) this.addDisplayable(t[n], e);
        }, e.prototype.getDisplayables = function() {
            return this._displayables;
        }, e.prototype.getTemporalDisplayables = function() {
            return this._temporaryDisplayables;
        }, e.prototype.eachPendingDisplayable = function(t) {
            for (var e = this._cursor; e < this._displayables.length; e++) t && t(this._displayables[e]);
            for (e = 0; e < this._temporaryDisplayables.length; e++) t && t(this._temporaryDisplayables[e]);
        }, e.prototype.update = function() {
            this.updateTransform();
            for (var t = this._cursor; t < this._displayables.length; t++) {
                (e = this._displayables[t]).parent = this, e.update(), e.parent = null;
            }
            for (t = 0; t < this._temporaryDisplayables.length; t++) {
                var e;
                (e = this._temporaryDisplayables[t]).parent = this, e.update(), e.parent = null;
            }
        }, e.prototype.getBoundingRect = function() {
            if (!this._rect) {
                for (var t = new lp(1 / 0, 1 / 0, -1 / 0, -1 / 0), e = 0; e < this._displayables.length; e++) {
                    var n = this._displayables[e], i = n.getBoundingRect().clone();
                    n.needLocalTransform() && i.applyTransform(n.getLocalTransform(Sg)), t.union(i);
                }
                this._rect = t;
            }
            return this._rect;
        }, e.prototype.contain = function(t, e) {
            var n = this.transformCoordToLocal(t, e);
            if (this.getBoundingRect().contain(n[0], n[1])) for (var i = 0; i < this._displayables.length; i++) {
                if (this._displayables[i].contain(t, e)) return !0;
            }
            return !1;
        }, e;
    }(Zp), Tg = Math.max, Cg = Math.min, Ag = {}, kg = function(t, e) {
        var i = er(t, e);
        return function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.applyTransform = i.applyTransform, n.buildPath = i.buildPath, n;
            }
            return n(e, t), e;
        }(Nd);
    }, Ig = function(t, e) {
        for (var n = [], i = t.length, r = 0; i > r; r++) {
            var o = t[r];
            o.path || o.createPathProxy(), o.shapeChanged() && o.buildPath(o.path, o.shape, !0), 
            n.push(o.path);
        }
        var a = new Yf(e);
        return a.createPathProxy(), a.buildPath = function(t) {
            if (tr(t)) {
                t.appendPath(n);
                var e = t.getContext();
                e && t.rebuildPath(e, 1);
            }
        }, a;
    }, Dg = ci;
    hr("circle", zd), hr("ellipse", Vd), hr("sector", Qd), hr("ring", eg), hr("polygon", ig), 
    hr("polyline", og), hr("rect", ed), hr("line", lg), hr("bezierCurve", cg), hr("arc", fg);
    var Pg = (Object.freeze || Object)({
        extendShape: lr,
        extendPath: ur,
        registerShape: hr,
        getShapeClass: cr,
        makePath: pr,
        makeImage: fr,
        mergePath: Ig,
        resizePath: gr,
        subPixelOptimizeLine: function(t) {
            return ui(t.shape, t.shape, t.style), t;
        },
        subPixelOptimizeRect: function(t) {
            return hi(t.shape, t.shape, t.style), t;
        },
        subPixelOptimize: Dg,
        updateProps: vr,
        initProps: mr,
        removeElement: _r,
        removeElementWithFadeOut: function(t, e, n) {
            function i() {
                t.parent && t.parent.remove(t);
            }
            t.isGroup ? t.traverse(function(t) {
                t.isGroup || xr(t, e, n, i);
            }) : xr(t, e, n, i);
        },
        isElementRemoved: wr,
        getTransform: br,
        applyTransform: Sr,
        transformDirection: function(t, e, n) {
            var i = 0 === e[4] || 0 === e[5] || 0 === e[0] ? 1 : Math.abs(2 * e[4] / e[0]), r = 0 === e[4] || 0 === e[5] || 0 === e[2] ? 1 : Math.abs(2 * e[4] / e[2]), o = [ "left" === t ? -i : "right" === t ? i : 0, "top" === t ? -r : "bottom" === t ? r : 0 ];
            return o = Sr(o, e, n), Math.abs(o[0]) > Math.abs(o[1]) ? o[0] > 0 ? "right" : "left" : o[1] > 0 ? "bottom" : "top";
        },
        groupTransition: Tr,
        clipPointsByRect: Cr,
        clipRectByRect: Ar,
        createIcon: kr,
        linePolygonIntersect: function(t, e, n, i, r) {
            for (var o = 0, a = r[r.length - 1]; o < r.length; o++) {
                var s = r[o];
                if (Ir(t, e, n, i, s[0], s[1], a[0], a[1])) return !0;
                a = s;
            }
        },
        lineLineIntersect: Ir,
        setTooltipConfig: Pr,
        Group: mp,
        Image: $f,
        Text: rd,
        Circle: zd,
        Ellipse: Vd,
        Sector: Qd,
        Ring: eg,
        Polygon: ig,
        Polyline: og,
        Rect: ed,
        Line: lg,
        BezierCurve: cg,
        Arc: fg,
        IncrementalDisplayable: Mg,
        CompoundPath: dg,
        LinearGradient: yg,
        RadialGradient: vg,
        BoundingRect: lp,
        OrientedBoundingRect: bg,
        Point: Qc,
        Path: Yf
    }), Lg = {}, Og = [ "fontStyle", "fontWeight", "fontSize", "fontFamily", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY" ], Rg = [ "align", "lineHeight", "width", "height", "tag", "verticalAlign" ], Eg = [ "padding", "borderWidth", "borderRadius", "borderDashOffset", "backgroundColor", "borderColor", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY" ], Ng = sn(), Bg = [ "textStyle", "color" ], zg = new rd(), Fg = function() {
        function t() {}
        return t.prototype.getTextColor = function(t) {
            var e = this.ecModel;
            return this.getShallow("color") || (!t && e ? e.get(Bg) : null);
        }, t.prototype.getFont = function() {
            return function(t, e) {
                var n = e && e.getModel("textStyle");
                return H([ t.fontStyle || n && n.getShallow("fontStyle") || "", t.fontWeight || n && n.getShallow("fontWeight") || "", (t.fontSize || n && n.getShallow("fontSize") || 12) + "px", t.fontFamily || n && n.getShallow("fontFamily") || "sans-serif" ].join(" "));
            }({
                fontStyle: this.getShallow("fontStyle"),
                fontWeight: this.getShallow("fontWeight"),
                fontSize: this.getShallow("fontSize"),
                fontFamily: this.getShallow("fontFamily")
            }, this.ecModel);
        }, t.prototype.getTextRect = function(t) {
            return zg.useStyle({
                text: t,
                fontStyle: this.getShallow("fontStyle"),
                fontWeight: this.getShallow("fontWeight"),
                fontSize: this.getShallow("fontSize"),
                fontFamily: this.getShallow("fontFamily"),
                verticalAlign: this.getShallow("verticalAlign") || this.getShallow("baseline"),
                padding: this.getShallow("padding"),
                lineHeight: this.getShallow("lineHeight"),
                rich: this.getShallow("rich")
            }), zg.update(), zg.getBoundingRect();
        }, t;
    }(), Vg = [ [ "lineWidth", "width" ], [ "stroke", "color" ], [ "opacity" ], [ "shadowBlur" ], [ "shadowOffsetX" ], [ "shadowOffsetY" ], [ "shadowColor" ], [ "lineDash", "type" ], [ "lineDashOffset", "dashOffset" ], [ "lineCap", "cap" ], [ "lineJoin", "join" ], [ "miterLimit" ] ], Hg = _n(Vg), Gg = function() {
        function t() {}
        return t.prototype.getLineStyle = function(t) {
            return Hg(this, t);
        }, t;
    }(), Wg = [ [ "fill", "color" ], [ "stroke", "borderColor" ], [ "lineWidth", "borderWidth" ], [ "opacity" ], [ "shadowBlur" ], [ "shadowOffsetX" ], [ "shadowOffsetY" ], [ "shadowColor" ], [ "lineDash", "borderType" ], [ "lineDashOffset", "borderDashOffset" ], [ "lineCap", "borderCap" ], [ "lineJoin", "borderJoin" ], [ "miterLimit", "borderMiterLimit" ] ], Ug = _n(Wg), Xg = function() {
        function t() {}
        return t.prototype.getItemStyle = function(t, e) {
            return Ug(this, t, e);
        }, t;
    }(), Yg = function() {
        function e(t, e, n) {
            this.parentModel = e, this.ecModel = n, this.option = t;
        }
        return e.prototype.init = function() {
            for (var t = [], e = 3; e < arguments.length; e++) t[e - 3] = arguments[e];
        }, e.prototype.mergeOption = function(t) {
            l(this.option, t, !0);
        }, e.prototype.get = function(t, e) {
            return null == t ? this.option : this._doGet(this.parsePath(t), !e && this.parentModel);
        }, e.prototype.getShallow = function(t, e) {
            var n = this.option, i = null == n ? n : n[t];
            if (null == i && !e) {
                var r = this.parentModel;
                r && (i = r.getShallow(t));
            }
            return i;
        }, e.prototype.getModel = function(t, n) {
            var i = null != t, r = i ? this.parsePath(t) : null;
            return new e(i ? this._doGet(r) : this.option, n = n || this.parentModel && this.parentModel.getModel(this.resolveParentPath(r)), this.ecModel);
        }, e.prototype.isEmpty = function() {
            return null == this.option;
        }, e.prototype.restoreData = function() {}, e.prototype.clone = function() {
            return new (0, this.constructor)(s(this.option));
        }, e.prototype.parsePath = function(t) {
            return "string" == typeof t ? t.split(".") : t;
        }, e.prototype.resolveParentPath = function(t) {
            return t;
        }, e.prototype.isAnimationEnabled = function() {
            if (!wh.node && this.option) {
                if (null != this.option.animation) return !!this.option.animation;
                if (this.parentModel) return this.parentModel.isAnimationEnabled();
            }
        }, e.prototype._doGet = function(e, n) {
            var i = this.option;
            if (!e) return i;
            for (var r = 0; r < e.length && (!e[r] || null != (i = i && "object" == t(i) ? i[e[r]] : null)); r++) ;
            return null == i && n && (i = n._doGet(this.resolveParentPath(e), n.parentModel)), 
            i;
        }, e;
    }();
    fn(Yg), function(t) {
        var e = [ "__\0is_clz", Ep++ ].join("_");
        t.prototype[e] = !0, t.isInstance = function(t) {
            return !(!t || !t[e]);
        };
    }(Yg), d(Yg, Gg), d(Yg, Xg), d(Yg, Bp), d(Yg, Fg);
    var qg = Math.round(10 * Math.random()), jg = "ZH", Zg = "EN", Kg = Zg, $g = {}, Jg = {}, Qg = wh.domSupported && (document.documentElement.lang || navigator.language || navigator.browserLanguage).toUpperCase().indexOf(jg) > -1 ? jg : Kg;
    Hr(Zg, {
        time: {
            month: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
            monthAbbr: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
            dayOfWeek: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
            dayOfWeekAbbr: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ]
        },
        legend: {
            selector: {
                all: "All",
                inverse: "Inv"
            }
        },
        toolbox: {
            brush: {
                title: {
                    rect: "Box Select",
                    polygon: "Lasso Select",
                    lineX: "Horizontally Select",
                    lineY: "Vertically Select",
                    keep: "Keep Selections",
                    clear: "Clear Selections"
                }
            },
            dataView: {
                title: "Data View",
                lang: [ "Data View", "Close", "Refresh" ]
            },
            dataZoom: {
                title: {
                    zoom: "Zoom",
                    back: "Zoom Reset"
                }
            },
            magicType: {
                title: {
                    line: "Switch to Line Chart",
                    bar: "Switch to Bar Chart",
                    stack: "Stack",
                    tiled: "Tile"
                }
            },
            restore: {
                title: "Restore"
            },
            saveAsImage: {
                title: "Save as Image",
                lang: [ "Right Click to Save Image" ]
            }
        },
        series: {
            typeNames: {
                pie: "Pie chart",
                bar: "Bar chart",
                line: "Line chart",
                scatter: "Scatter plot",
                effectScatter: "Ripple scatter plot",
                radar: "Radar chart",
                tree: "Tree",
                treemap: "Treemap",
                boxplot: "Boxplot",
                candlestick: "Candlestick",
                k: "K line chart",
                heatmap: "Heat map",
                map: "Map",
                parallel: "Parallel coordinate map",
                lines: "Line graph",
                graph: "Relationship graph",
                sankey: "Sankey diagram",
                funnel: "Funnel chart",
                gauge: "Gauge",
                pictorialBar: "Pictorial bar",
                themeRiver: "Theme River Map",
                sunburst: "Sunburst"
            }
        },
        aria: {
            general: {
                withTitle: 'This is a chart about "{title}"',
                withoutTitle: "This is a chart"
            },
            series: {
                single: {
                    prefix: "",
                    withName: " with type {seriesType} named {seriesName}.",
                    withoutName: " with type {seriesType}."
                },
                multiple: {
                    prefix: ". It consists of {seriesCount} series count.",
                    withName: " The {seriesId} series is a {seriesType} representing {seriesName}.",
                    withoutName: " The {seriesId} series is a {seriesType}.",
                    separator: {
                        middle: "",
                        end: ""
                    }
                }
            },
            data: {
                allData: "The data is as follows: ",
                partialData: "The first {displayCnt} items are: ",
                withName: "the data for {name} is {value}",
                withoutName: "{value}",
                separator: {
                    middle: ", ",
                    end: ". "
                }
            }
        }
    }), Hr(jg, {
        time: {
            month: [ "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月" ],
            monthAbbr: [ "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月" ],
            dayOfWeek: [ "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六" ],
            dayOfWeekAbbr: [ "日", "一", "二", "三", "四", "五", "六" ]
        },
        legend: {
            selector: {
                all: "全选",
                inverse: "反选"
            }
        },
        toolbox: {
            brush: {
                title: {
                    rect: "矩形选择",
                    polygon: "圈选",
                    lineX: "横向选择",
                    lineY: "纵向选择",
                    keep: "保持选择",
                    clear: "清除选择"
                }
            },
            dataView: {
                title: "数据视图",
                lang: [ "数据视图", "关闭", "刷新" ]
            },
            dataZoom: {
                title: {
                    zoom: "区域缩放",
                    back: "区域缩放还原"
                }
            },
            magicType: {
                title: {
                    line: "切换为折线图",
                    bar: "切换为柱状图",
                    stack: "切换为堆叠",
                    tiled: "切换为平铺"
                }
            },
            restore: {
                title: "还原"
            },
            saveAsImage: {
                title: "保存为图片",
                lang: [ "右键另存为图片" ]
            }
        },
        series: {
            typeNames: {
                pie: "饼图",
                bar: "柱状图",
                line: "折线图",
                scatter: "散点图",
                effectScatter: "涟漪散点图",
                radar: "雷达图",
                tree: "树图",
                treemap: "矩形树图",
                boxplot: "箱型图",
                candlestick: "K线图",
                k: "K线图",
                heatmap: "热力图",
                map: "地图",
                parallel: "平行坐标图",
                lines: "线图",
                graph: "关系图",
                sankey: "桑基图",
                funnel: "漏斗图",
                gauge: "仪表盘图",
                pictorialBar: "象形柱图",
                themeRiver: "主题河流图",
                sunburst: "旭日图"
            }
        },
        aria: {
            general: {
                withTitle: "这是一个关于“{title}”的图表。",
                withoutTitle: "这是一个图表，"
            },
            series: {
                single: {
                    prefix: "",
                    withName: "图表类型是{seriesType}，表示{seriesName}。",
                    withoutName: "图表类型是{seriesType}。"
                },
                multiple: {
                    prefix: "它由{seriesCount}个图表系列组成。",
                    withName: "第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",
                    withoutName: "第{seriesId}个系列是一个{seriesType}，",
                    separator: {
                        middle: "；",
                        end: "。"
                    }
                }
            },
            data: {
                allData: "其数据是——",
                partialData: "其中，前{displayCnt}项是——",
                withName: "{name}的数据是{value}",
                withoutName: "{value}",
                separator: {
                    middle: "，",
                    end: ""
                }
            }
        }
    });
    var ty = 1e3, ey = 60 * ty, ny = 60 * ey, iy = 24 * ny, ry = 365 * iy, oy = {
        year: "{yyyy}",
        month: "{MMM}",
        day: "{d}",
        hour: "{HH}:{mm}",
        minute: "{HH}:{mm}",
        second: "{HH}:{mm}:{ss}",
        millisecond: "{hh}:{mm}:{ss} {SSS}",
        none: "{yyyy}-{MM}-{dd} {hh}:{mm}:{ss} {SSS}"
    }, ay = "{yyyy}-{MM}-{dd}", sy = {
        year: "{yyyy}",
        month: "{yyyy}-{MM}",
        day: ay,
        hour: ay + " " + oy.hour,
        minute: ay + " " + oy.minute,
        second: ay + " " + oy.second,
        millisecond: oy.none
    }, ly = [ "year", "month", "day", "hour", "minute", "second", "millisecond" ], uy = [ "year", "half-year", "quarter", "month", "week", "half-week", "day", "half-day", "quarter-day", "hour", "minute", "second", "millisecond" ], hy = F, cy = /([&<>"'])/g, py = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    }, fy = [ "a", "b", "c", "d", "e", "f", "g" ], dy = function(t, e) {
        return "{" + t + (null == e ? "" : e) + "}";
    }, gy = y, yy = [ "left", "right", "top", "bottom", "width", "height" ], vy = [ [ "width", "left", "right" ], [ "height", "top", "bottom" ] ], my = (b(fo, "vertical"), 
    b(fo, "horizontal"), sn()), _y = function(t) {
        function e(e, n, i) {
            var r = t.call(this, e, n, i) || this;
            return r.uid = Vr("ec_cpt_model"), r;
        }
        return n(e, t), e.prototype.init = function(t, e, n) {
            this.mergeDefaultAndTheme(t, n);
        }, e.prototype.mergeDefaultAndTheme = function(t, e) {
            var n = yo(this), i = n ? mo(t) : {};
            l(t, e.getTheme().get(this.mainType)), l(t, this.getDefaultOption()), n && vo(t, i, n);
        }, e.prototype.mergeOption = function(t) {
            l(this.option, t, !0);
            var e = yo(this);
            e && vo(this.option, t, e);
        }, e.prototype.optionUpdated = function() {}, e.prototype.getDefaultOption = function() {
            var t = this.constructor;
            if (!function(t) {
                return !(!t || !t[Rp]);
            }(t)) return t.defaultOption;
            var e = my(this);
            if (!e.defaultOption) {
                for (var n = [], i = t; i; ) {
                    var r = i.prototype.defaultOption;
                    r && n.push(r), i = i.superClass;
                }
                for (var o = {}, a = n.length - 1; a >= 0; a--) o = l(o, n[a], !0);
                e.defaultOption = o;
            }
            return e.defaultOption;
        }, e.prototype.getReferringComponents = function(t, e) {
            var n = t + "Index", i = t + "Id";
            return hn(this.ecModel, t, {
                index: this.get(n, !0),
                id: this.get(i, !0)
            }, e);
        }, e.prototype.getBoxLayoutParams = function() {
            var t = this;
            return {
                left: t.get("left"),
                top: t.get("top"),
                right: t.get("right"),
                bottom: t.get("bottom"),
                width: t.get("width"),
                height: t.get("height")
            };
        }, e.protoInitialize = function() {
            var t = e.prototype;
            t.type = "component", t.id = "", t.name = "", t.mainType = "", t.subType = "", t.componentIndex = 0;
        }(), e;
    }(Yg);
    gn(_y, Yg), mn(_y), function(t) {
        var e = {};
        t.registerSubTypeDefaulter = function(t, n) {
            var i = pn(t);
            e[i.main] = n;
        }, t.determineSubType = function(n, i) {
            var r = i.type;
            if (!r) {
                var o = pn(n).main;
                t.hasSubTypes(n) && e[o] && (r = e[o](i));
            }
            return r;
        };
    }(_y), function(t, e) {
        function n(t) {
            var n = {}, r = [];
            return y(t, function(o) {
                var a = i(n, o), s = function(t, e) {
                    var n = [];
                    return y(t, function(t) {
                        p(e, t) >= 0 && n.push(t);
                    }), n;
                }(a.originalDeps = e(o), t);
                a.entryCount = s.length, 0 === a.entryCount && r.push(o), y(s, function(t) {
                    p(a.predecessor, t) < 0 && a.predecessor.push(t);
                    var e = i(n, t);
                    p(e.successor, t) < 0 && e.successor.push(o);
                });
            }), {
                graph: n,
                noEntryList: r
            };
        }
        function i(t, e) {
            return t[e] || (t[e] = {
                predecessor: [],
                successor: []
            }), t[e];
        }
        t.topologicalTravel = function(t, e, i, r) {
            function o(t) {
                l[t].entryCount--, 0 === l[t].entryCount && u.push(t);
            }
            function a(t) {
                h[t] = !0, o(t);
            }
            if (t.length) {
                var s = n(e), l = s.graph, u = s.noEntryList, h = {};
                for (y(t, function(t) {
                    h[t] = !0;
                }); u.length; ) {
                    var c = u.pop(), p = l[c], f = !!h[c];
                    f && (i.call(r, c, p.originalDeps.slice()), delete h[c]), y(p.successor, f ? a : o);
                }
                y(h, function() {
                    throw new Error("");
                });
            }
        };
    }(_y, function(t) {
        var e = [];
        return y(_y.getClassesByMainType(t), function(t) {
            e = e.concat(t.dependencies || t.prototype.dependencies || []);
        }), e = v(e, function(t) {
            return pn(t).main;
        }), "dataset" !== t && p(e, "dataset") <= 0 && e.unshift("dataset"), e;
    });
    var xy = "";
    "undefined" != typeof navigator && (xy = navigator.platform || "");
    var wy, by, Sy = "rgba(0, 0, 0, 0.2)", My = {
        darkMode: "auto",
        color: [ "#5470c6", "#91cc75", "#fac858", "#ee6666", "#73c0de", "#3ba272", "#fc8452", "#9a60b4", "#ea7ccc" ],
        gradientColor: [ "#f6efa6", "#d88273", "#bf444c" ],
        aria: {
            decal: {
                decals: [ {
                    color: Sy,
                    dashArrayX: [ 1, 0 ],
                    dashArrayY: [ 2, 5 ],
                    symbolSize: 1,
                    rotation: Math.PI / 6
                }, {
                    color: Sy,
                    symbol: "circle",
                    dashArrayX: [ [ 8, 8 ], [ 0, 8, 8, 0 ] ],
                    dashArrayY: [ 6, 0 ],
                    symbolSize: .8
                }, {
                    color: Sy,
                    dashArrayX: [ 1, 0 ],
                    dashArrayY: [ 4, 3 ],
                    rotation: -Math.PI / 4
                }, {
                    color: Sy,
                    dashArrayX: [ [ 6, 6 ], [ 0, 6, 6, 0 ] ],
                    dashArrayY: [ 6, 0 ]
                }, {
                    color: Sy,
                    dashArrayX: [ [ 1, 0 ], [ 1, 6 ] ],
                    dashArrayY: [ 1, 0, 6, 0 ],
                    rotation: Math.PI / 4
                }, {
                    color: Sy,
                    symbol: "triangle",
                    dashArrayX: [ [ 9, 9 ], [ 0, 9, 9, 0 ] ],
                    dashArrayY: [ 7, 2 ],
                    symbolSize: .75
                } ]
            }
        },
        textStyle: {
            fontFamily: xy.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
            fontSize: 12,
            fontStyle: "normal",
            fontWeight: "normal"
        },
        blendMode: null,
        stateAnimation: {
            duration: 300,
            easing: "cubicOut"
        },
        animation: "auto",
        animationDuration: 1e3,
        animationDurationUpdate: 500,
        animationEasing: "cubicInOut",
        animationEasingUpdate: "cubicInOut",
        animationThreshold: 2e3,
        progressiveThreshold: 3e3,
        progressive: 400,
        hoverLayerThreshold: 3e3,
        useUTC: !1
    }, Ty = U([ "tooltip", "label", "itemName", "itemId", "seriesName" ]), Cy = "original", Ay = "arrayRows", ky = "objectRows", Iy = "keyedColumns", Dy = "typedArray", Py = "unknown", Ly = "column", Oy = "row", Ry = {
        Must: 1,
        Might: 2,
        Not: 3
    }, Ey = sn(), Ny = U(), By = sn(), zy = (sn(), function() {
        function t() {}
        return t.prototype.getColorFromPalette = function(t, e, n) {
            var i = Ke(this.get("color", !0)), r = this.get("colorLayer", !0);
            return function(t, e, n, i, r, o, a) {
                var s = e(o = o || t), l = s.paletteIdx || 0, u = s.paletteNameMap = s.paletteNameMap || {};
                if (u.hasOwnProperty(r)) return u[r];
                var h = null != a && i ? function(t, e) {
                    for (var n = t.length, i = 0; n > i; i++) if (t[i].length > e) return t[i];
                    return t[n - 1];
                }(i, a) : n;
                if ((h = h || n) && h.length) {
                    var c = h[l];
                    return r && (u[r] = c), s.paletteIdx = (l + 1) % h.length, c;
                }
            }(this, By, i, r, t, e, n);
        }, t.prototype.clearColorPalette = function() {
            !function(t, e) {
                e(t).paletteIdx = 0, e(t).paletteNameMap = {};
            }(this, By);
        }, t;
    }()), Fy = "\0_ec_inner", Vy = function(e) {
        function i() {
            return null !== e && e.apply(this, arguments) || this;
        }
        return n(i, e), i.prototype.init = function(t, e, n, i, r, o) {
            i = i || {}, this.option = null, this._theme = new Yg(i), this._locale = new Yg(r), 
            this._optionManager = o;
        }, i.prototype.setOption = function(t, e, n) {
            var i = Mo(e);
            this._optionManager.setOption(t, n, i), this._resetOption(null, i);
        }, i.prototype.resetOption = function(t, e) {
            return this._resetOption(t, Mo(e));
        }, i.prototype._resetOption = function(t, e) {
            var n = !1, i = this._optionManager;
            if (!t || "recreate" === t) {
                var r = i.mountOption("recreate" === t);
                this.option && "recreate" !== t ? (this.restoreData(), this._mergeOption(r, e)) : by(this, r), 
                n = !0;
            }
            if (("timeline" === t || "media" === t) && this.restoreData(), !t || "recreate" === t || "timeline" === t) {
                var o = i.getTimelineOption(this);
                o && (n = !0, this._mergeOption(o, e));
            }
            if (!t || "recreate" === t || "media" === t) {
                var a = i.getMediaOption(this);
                a.length && y(a, function(t) {
                    n = !0, this._mergeOption(t, e);
                }, this);
            }
            return n;
        }, i.prototype.mergeOption = function(t) {
            this._mergeOption(t, null);
        }, i.prototype._mergeOption = function(t, e) {
            var n = this.option, i = this._componentsMap, r = this._componentsCount, o = [], a = U(), u = e && e.replaceMergeMainTypeMap;
            (function(t) {
                Ey(t).datasetMap = U();
            })(this), y(t, function(t, e) {
                null != t && (_y.hasClass(e) ? e && (o.push(e), a.set(e, !0)) : n[e] = null == n[e] ? s(t) : l(n[e], t, !0));
            }), u && u.each(function(t, e) {
                _y.hasClass(e) && !a.get(e) && (o.push(e), a.set(e, !0));
            }), _y.topologicalTravel(o, _y.getAllClassMainTypes(), function(e) {
                var o = function(t, e, n) {
                    var i = Ny.get(e);
                    if (!i) return n;
                    var r = i(t);
                    return r ? n.concat(r) : n;
                }(this, e, Ke(t[e])), a = i.get(e), s = Qe(a, o, a ? u && u.get(e) ? "replaceMerge" : "normalMerge" : "replaceAll");
                (function(t, e, n) {
                    y(t, function(t) {
                        var i = t.newOption;
                        k(i) && (t.keyInfo.mainType = e, t.keyInfo.subType = function(t, e, n, i) {
                            return e.type ? e.type : n ? n.subType : i.determineSubType(t, e);
                        }(e, i, t.existing, n));
                    });
                })(s, e, _y), n[e] = null, i.set(e, null), r.set(e, 0);
                var l = [], c = [], p = 0;
                y(s, function(t, n) {
                    var i = t.existing, r = t.newOption;
                    if (r) {
                        var o = "series" === e, a = _y.getClass(e, t.keyInfo.subType, !o);
                        if (!a) return;
                        if (i && i.constructor === a) i.name = t.keyInfo.name, i.mergeOption(r, this), i.optionUpdated(r, !1); else {
                            var s = h({
                                componentIndex: n
                            }, t.keyInfo);
                            h(i = new a(r, this, this, s), s), t.brandNew && (i.__requireNewView = !0), i.init(r, this, this), 
                            i.optionUpdated(null, !0);
                        }
                    } else i && (i.mergeOption({}, this), i.optionUpdated({}, !1));
                    i ? (l.push(i.option), c.push(i), p++) : (l.push(void 0), c.push(void 0));
                }, this), n[e] = l, i.set(e, c), r.set(e, p), "series" === e && wy(this);
            }, this), this._seriesIndices || wy(this);
        }, i.prototype.getOption = function() {
            var t = s(this.option);
            return y(t, function(e, n) {
                if (_y.hasClass(n)) {
                    for (var i = Ke(e), r = i.length, o = !1, a = r - 1; a >= 0; a--) i[a] && !on(i[a]) ? o = !0 : (i[a] = null, 
                    !o && r--);
                    i.length = r, t[n] = i;
                }
            }), delete t[Fy], t;
        }, i.prototype.getTheme = function() {
            return this._theme;
        }, i.prototype.getLocaleModel = function() {
            return this._locale;
        }, i.prototype.getLocale = function(t) {
            return this.getLocaleModel().get(t);
        }, i.prototype.setUpdatePayload = function(t) {
            this._payload = t;
        }, i.prototype.getUpdatePayload = function() {
            return this._payload;
        }, i.prototype.getComponent = function(t, e) {
            var n = this._componentsMap.get(t);
            if (n) {
                var i = n[e || 0];
                if (i) return i;
                if (null == e) for (var r = 0; r < n.length; r++) if (n[r]) return n[r];
            }
        }, i.prototype.queryComponents = function(t) {
            var e = t.mainType;
            if (!e) return [];
            var n, i = t.index, r = t.id, o = t.name, a = this._componentsMap.get(e);
            return a && a.length ? (null != i ? (n = [], y(Ke(i), function(t) {
                a[t] && n.push(a[t]);
            })) : n = null != r ? bo("id", r, a) : null != o ? bo("name", o, a) : _(a, function(t) {
                return !!t;
            }), So(n, t)) : [];
        }, i.prototype.findComponents = function(t) {
            var e = t.query, n = t.mainType, i = function(t) {
                var e = n + "Index", i = n + "Id", r = n + "Name";
                return !t || null == t[e] && null == t[i] && null == t[r] ? null : {
                    mainType: n,
                    index: t[e],
                    id: t[i],
                    name: t[r]
                };
            }(e);
            return function(e) {
                return t.filter ? _(e, t.filter) : e;
            }(So(i ? this.queryComponents(i) : _(this._componentsMap.get(n), function(t) {
                return !!t;
            }), t));
        }, i.prototype.eachComponent = function(t, e, n) {
            var i = this._componentsMap;
            if (M(t)) {
                var r = e, o = t;
                i.each(function(t, e) {
                    for (var n = 0; t && n < t.length; n++) {
                        var i = t[n];
                        i && o.call(r, e, i, i.componentIndex);
                    }
                });
            } else for (var a = T(t) ? i.get(t) : k(t) ? this.findComponents(t) : null, s = 0; a && s < a.length; s++) {
                var l = a[s];
                l && e.call(n, l, l.componentIndex);
            }
        }, i.prototype.getSeriesByName = function(t) {
            var e = nn(t, null);
            return _(this._componentsMap.get("series"), function(t) {
                return !!t && null != e && t.name === e;
            });
        }, i.prototype.getSeriesByIndex = function(t) {
            return this._componentsMap.get("series")[t];
        }, i.prototype.getSeriesByType = function(t) {
            return _(this._componentsMap.get("series"), function(e) {
                return !!e && e.subType === t;
            });
        }, i.prototype.getSeries = function() {
            return _(this._componentsMap.get("series").slice(), function(t) {
                return !!t;
            });
        }, i.prototype.getSeriesCount = function() {
            return this._componentsCount.get("series");
        }, i.prototype.eachSeries = function(t, e) {
            y(this._seriesIndices, function(n) {
                var i = this._componentsMap.get("series")[n];
                t.call(e, i, n);
            }, this);
        }, i.prototype.eachRawSeries = function(t, e) {
            y(this._componentsMap.get("series"), function(n) {
                n && t.call(e, n, n.componentIndex);
            });
        }, i.prototype.eachSeriesByType = function(t, e, n) {
            y(this._seriesIndices, function(i) {
                var r = this._componentsMap.get("series")[i];
                r.subType === t && e.call(n, r, i);
            }, this);
        }, i.prototype.eachRawSeriesByType = function(t, e, n) {
            return y(this.getSeriesByType(t), e, n);
        }, i.prototype.isSeriesFiltered = function(t) {
            return null == this._seriesIndicesMap.get(t.componentIndex);
        }, i.prototype.getCurrentSeriesIndices = function() {
            return (this._seriesIndices || []).slice();
        }, i.prototype.filterSeries = function(t, e) {
            var n = [];
            y(this._seriesIndices, function(i) {
                var r = this._componentsMap.get("series")[i];
                t.call(e, r, i) && n.push(i);
            }, this), this._seriesIndices = n, this._seriesIndicesMap = U(n);
        }, i.prototype.restoreData = function(t) {
            wy(this);
            var e = this._componentsMap, n = [];
            e.each(function(t, e) {
                _y.hasClass(e) && n.push(e);
            }), _y.topologicalTravel(n, _y.getAllClassMainTypes(), function(n) {
                y(e.get(n), function(e) {
                    !e || "series" === n && function(t, e) {
                        if (e) {
                            var n = e.seriesIndex, i = e.seriesId, r = e.seriesName;
                            return null != n && t.componentIndex !== n || null != i && t.id !== i || null != r && t.name !== r;
                        }
                    }(e, t) || e.restoreData();
                });
            });
        }, i.internalField = (wy = function(t) {
            var e = t._seriesIndices = [];
            y(t._componentsMap.get("series"), function(t) {
                t && e.push(t.componentIndex);
            }), t._seriesIndicesMap = U(e);
        }, void (by = function(e, n) {
            e.option = {}, e.option[Fy] = 1, e._componentsMap = U({
                series: []
            }), e._componentsCount = U();
            var i = n.aria;
            k(i) && null == i.enabled && (i.enabled = !0), function(e, n) {
                var i = e.color && !e.colorLayer;
                y(n, function(n, r) {
                    "colorLayer" === r && i || _y.hasClass(r) || ("object" == t(n) ? e[r] = e[r] ? l(e[r], n, !1) : s(n) : null == e[r] && (e[r] = n));
                });
            }(n, e._theme.option), l(n, My, !1), e._mergeOption(n, null);
        })), i;
    }(Yg);
    d(Vy, zy);
    var Hy, Gy, Wy, Uy, Xy, Yy = [ "getDom", "getZr", "getWidth", "getHeight", "getDevicePixelRatio", "dispatchAction", "isDisposed", "on", "off", "getDataURL", "getConnectedDataURL", "getOption", "getId", "updateLabelLayout" ], qy = function(t) {
        y(Yy, function(e) {
            this[e] = Eh(t[e], t);
        }, this);
    }, jy = {}, Zy = function() {
        function t() {
            this._coordinateSystems = [];
        }
        return t.prototype.create = function(t, e) {
            var n = [];
            y(jy, function(i) {
                var r = i.create(t, e);
                n = n.concat(r || []);
            }), this._coordinateSystems = n;
        }, t.prototype.update = function(t, e) {
            y(this._coordinateSystems, function(n) {
                n.update && n.update(t, e);
            });
        }, t.prototype.getCoordinateSystems = function() {
            return this._coordinateSystems.slice();
        }, t.register = function(t, e) {
            jy[t] = e;
        }, t.get = function(t) {
            return jy[t];
        }, t;
    }(), Ky = /^(min|max)?(.+)$/, $y = function() {
        function t(t) {
            this._timelineOptions = [], this._mediaList = [], this._currentMediaIndices = [], 
            this._api = t;
        }
        return t.prototype.setOption = function(t, e) {
            t && (y(Ke(t.series), function(t) {
                t && t.data && D(t.data) && G(t.data);
            }), y(Ke(t.dataset), function(t) {
                t && t.source && D(t.source) && G(t.source);
            })), t = s(t);
            var n = this._optionBackup, i = function(t, e, n) {
                function i(t) {
                    y(e, function(e) {
                        e(t, n);
                    });
                }
                var r, o, a = [], s = t.baseOption, l = t.timeline, u = t.options, h = t.media, c = !!t.media, p = !!(u || l || s && s.timeline);
                return s ? (o = s).timeline || (o.timeline = l) : ((p || c) && (t.options = t.media = null), 
                o = t), c && S(h) && y(h, function(t) {
                    t && t.option && (t.query ? a.push(t) : r || (r = t));
                }), i(o), y(u, function(t) {
                    return i(t);
                }), y(a, function(t) {
                    return i(t.option);
                }), {
                    baseOption: o,
                    timelineOptions: u || [],
                    mediaDefault: r,
                    mediaList: a
                };
            }(t, e, !n);
            this._newBaseOption = i.baseOption, n ? (i.timelineOptions.length && (n.timelineOptions = i.timelineOptions), 
            i.mediaList.length && (n.mediaList = i.mediaList), i.mediaDefault && (n.mediaDefault = i.mediaDefault)) : this._optionBackup = i;
        }, t.prototype.mountOption = function(t) {
            var e = this._optionBackup;
            return this._timelineOptions = e.timelineOptions, this._mediaList = e.mediaList, 
            this._mediaDefault = e.mediaDefault, this._currentMediaIndices = [], s(t ? e.baseOption : this._newBaseOption);
        }, t.prototype.getTimelineOption = function(t) {
            var e, n = this._timelineOptions;
            if (n.length) {
                var i = t.getComponent("timeline");
                i && (e = s(n[i.getCurrentIndex()]));
            }
            return e;
        }, t.prototype.getMediaOption = function() {
            var t = this._api.getWidth(), e = this._api.getHeight(), n = this._mediaList, i = this._mediaDefault, r = [], o = [];
            if (!n.length && !i) return o;
            for (var a = 0, l = n.length; l > a; a++) To(n[a].query, t, e) && r.push(a);
            return !r.length && i && (r = [ -1 ]), r.length && !function(t, e) {
                return t.join(",") === e.join(",");
            }(r, this._currentMediaIndices) && (o = v(r, function(t) {
                return s(-1 === t ? i.option : n[t].option);
            })), this._currentMediaIndices = r, o;
        }, t;
    }(), Jy = y, Qy = k, tv = [ "areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine" ], ev = [ [ "x", "left" ], [ "y", "top" ], [ "x2", "right" ], [ "y2", "bottom" ] ], nv = [ "grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline" ], iv = [ [ "borderRadius", "barBorderRadius" ], [ "borderColor", "barBorderColor" ], [ "borderWidth", "barBorderWidth" ] ], rv = function(t) {
        this.data = t.data || (t.sourceFormat === Iy ? {} : []), this.sourceFormat = t.sourceFormat || Py, 
        this.seriesLayoutBy = t.seriesLayoutBy || Ly, this.startIndex = t.startIndex || 0, 
        this.dimensionsDefine = t.dimensionsDefine, this.dimensionsDetectedCount = t.dimensionsDetectedCount, 
        this.encodeDefine = t.encodeDefine, this.metaRawOption = t.metaRawOption;
    }, ov = function() {
        function t(t, e) {
            var n = Vo(t) ? t : Go(t);
            this._source = n;
            var i = this._data = n.data;
            n.sourceFormat === Dy && (this._offset = 0, this._dimSize = e, this._data = i), 
            Xy(this, i, n);
        }
        return t.prototype.getSource = function() {
            return this._source;
        }, t.prototype.count = function() {
            return 0;
        }, t.prototype.getItem = function() {}, t.prototype.appendData = function() {}, 
        t.prototype.clean = function() {}, t.protoInitialize = function() {
            var e = t.prototype;
            e.pure = !1, e.persistent = !0;
        }(), t.internalField = function() {
            function t(t) {
                for (var e = 0; e < t.length; e++) this._data.push(t[e]);
            }
            var e;
            Xy = function(t, e, o) {
                var a = o.sourceFormat, s = o.seriesLayoutBy, l = o.startIndex, u = o.dimensionsDefine;
                if (h(t, Uy[$o(a, s)]), a === Dy) t.getItem = n, t.count = r, t.fillStorage = i; else {
                    var c = jo(a, s);
                    t.getItem = Eh(c, null, e, l, u);
                    var p = Zo(a, s);
                    t.count = Eh(p, null, e, l, u);
                }
            };
            var n = function(t, e) {
                t -= this._offset, e = e || [];
                for (var n = this._data, i = this._dimSize, r = i * t, o = 0; i > o; o++) e[o] = n[r + o];
                return e;
            }, i = function(t, e, n, i) {
                for (var r = this._data, o = this._dimSize, a = 0; o > a; a++) {
                    for (var s = i[a], l = null == s[0] ? 1 / 0 : s[0], u = null == s[1] ? -1 / 0 : s[1], h = e - t, c = n[a], p = 0; h > p; p++) {
                        var f = r[p * o + a];
                        c[t + p] = f, l > f && (l = f), f > u && (u = f);
                    }
                    s[0] = l, s[1] = u;
                }
            }, r = function() {
                return this._data ? this._data.length / this._dimSize : 0;
            };
            (e = {})[Ay + "_" + Ly] = {
                pure: !0,
                appendData: t
            }, e[Ay + "_" + Oy] = {
                pure: !0,
                appendData: function() {
                    throw new Error('Do not support appendData when set seriesLayoutBy: "row".');
                }
            }, e[ky] = {
                pure: !0,
                appendData: t
            }, e[Iy] = {
                pure: !0,
                appendData: function(t) {
                    var e = this._data;
                    y(t, function(t, n) {
                        for (var i = e[n] || (e[n] = []), r = 0; r < (t || []).length; r++) i.push(t[r]);
                    });
                }
            }, e[Cy] = {
                appendData: t
            }, e[Dy] = {
                persistent: !1,
                pure: !0,
                appendData: function(t) {
                    this._data = t;
                },
                clean: function() {
                    this._offset += this.count(), this._data = null;
                }
            }, Uy = e;
        }(), t;
    }(), av = function(t, e, n, i) {
        return t[i];
    }, sv = ((Hy = {})[Ay + "_" + Ly] = function(t, e, n, i) {
        return t[i + e];
    }, Hy[Ay + "_" + Oy] = function(t, e, n, i) {
        i += e;
        for (var r = [], o = t, a = 0; a < o.length; a++) {
            var s = o[a];
            r.push(s ? s[i] : null);
        }
        return r;
    }, Hy[ky] = av, Hy[Iy] = function(t, e, n, i) {
        for (var r = [], o = 0; o < n.length; o++) {
            var a = t[n[o].name];
            r.push(a ? a[i] : null);
        }
        return r;
    }, Hy[Cy] = av, Hy), lv = function(t) {
        return t.length;
    }, uv = ((Gy = {})[Ay + "_" + Ly] = function(t, e) {
        return Math.max(0, t.length - e);
    }, Gy[Ay + "_" + Oy] = function(t, e) {
        var n = t[0];
        return n ? Math.max(0, n.length - e) : 0;
    }, Gy[ky] = lv, Gy[Iy] = function(t, e, n) {
        var i = t[n[0].name];
        return i ? i.length : 0;
    }, Gy[Cy] = lv, Gy), hv = function(t, e) {
        return null != e ? t[e] : t;
    }, cv = ((Wy = {})[Ay] = hv, Wy[ky] = function(t, e, n) {
        return null != e ? t[n] : t;
    }, Wy[Iy] = hv, Wy[Cy] = function(t, e) {
        var n = Je(t);
        return null != e && n instanceof Array ? n[e] : n;
    }, Wy[Dy] = hv, Wy), pv = /\{@(.+?)\}/g, fv = function() {
        function t() {}
        return t.prototype.getDataParams = function(t, e) {
            var n = this.getData(e), i = this.getRawValue(t, e), r = n.getRawIndex(t), o = n.getName(t), a = n.getRawDataItem(t), s = n.getItemVisual(t, "style"), l = s && s[n.getItemVisual(t, "drawType") || "fill"], u = s && s.stroke, h = this.mainType, c = "series" === h, p = n.userOutput;
            return {
                componentType: h,
                componentSubType: this.subType,
                componentIndex: this.componentIndex,
                seriesType: c ? this.subType : null,
                seriesIndex: this.seriesIndex,
                seriesId: c ? this.id : null,
                seriesName: c ? this.name : null,
                name: o,
                dataIndex: r,
                data: a,
                dataType: e,
                value: i,
                color: l,
                borderColor: u,
                dimensionNames: p ? p.dimensionNames : null,
                encode: p ? p.encode : null,
                $vars: [ "seriesName", "name", "value" ]
            };
        }, t.prototype.getFormattedLabel = function(t, e, n, i, r, o) {
            e = e || "normal";
            var a = this.getData(n), s = this.getDataParams(t, n);
            (o && (s.value = o.interpolatedValue), null != i && S(s.value) && (s.value = s.value[i]), 
            r) || (r = a.getItemModel(t).get("normal" === e ? [ "label", "formatter" ] : [ e, "label", "formatter" ]));
            return "function" == typeof r ? (s.status = e, s.dimensionIndex = i, r(s)) : "string" == typeof r ? co(r, s).replace(pv, function(e, n) {
                var i = n.length, r = "[" === n.charAt(0) && "]" === n.charAt(i - 1) ? +n.slice(1, i - 1) : n, s = Jo(a, t, r);
                if (o && S(o.interpolatedValue)) {
                    var l = a.getDimensionInfo(r);
                    l && (s = o.interpolatedValue[l.index]);
                }
                return null != s ? s + "" : "";
            }) : void 0;
        }, t.prototype.getRawValue = function(t, e) {
            return Jo(this.getData(e), t);
        }, t.prototype.formatTooltip = function() {}, t;
    }(), dv = function() {
        function t(t) {
            t = t || {}, this._reset = t.reset, this._plan = t.plan, this._count = t.count, 
            this._onDirty = t.onDirty, this._dirty = !0;
        }
        return t.prototype.perform = function(t) {
            function e(t) {
                return !(t >= 1) && (t = 1), t;
            }
            var n, i = this._upstream, r = t && t.skip;
            if (this._dirty && i) {
                var o = this.context;
                o.data = o.outputData = i.context.outputData;
            }
            this.__pipeline && (this.__pipeline.currentTask = this), this._plan && !r && (n = this._plan(this.context));
            var a, s = e(this._modBy), l = this._modDataCount || 0, u = e(t && t.modBy), h = t && t.modDataCount || 0;
            (s !== u || l !== h) && (n = "reset"), (this._dirty || "reset" === n) && (this._dirty = !1, 
            a = this._doReset(r)), this._modBy = u, this._modDataCount = h;
            var c = t && t.step;
            if (this._dueEnd = i ? i._outputDueEnd : this._count ? this._count(this.context) : 1 / 0, 
            this._progress) {
                var p = this._dueIndex, f = Math.min(null != c ? this._dueIndex + c : 1 / 0, this._dueEnd);
                if (!r && (a || f > p)) {
                    var d = this._progress;
                    if (S(d)) for (var g = 0; g < d.length; g++) this._doProgress(d[g], p, f, u, h); else this._doProgress(d, p, f, u, h);
                }
                this._dueIndex = f;
                var y = null != this._settedOutputEnd ? this._settedOutputEnd : f;
                this._outputDueEnd = y;
            } else this._dueIndex = this._outputDueEnd = null != this._settedOutputEnd ? this._settedOutputEnd : this._dueEnd;
            return this.unfinished();
        }, t.prototype.dirty = function() {
            this._dirty = !0, this._onDirty && this._onDirty(this.context);
        }, t.prototype._doProgress = function(t, e, n, i, r) {
            gv.reset(e, n, i, r), this._callingProgress = t, this._callingProgress({
                start: e,
                end: n,
                count: n - e,
                next: gv.next
            }, this.context);
        }, t.prototype._doReset = function(t) {
            var e, n;
            this._dueIndex = this._outputDueEnd = this._dueEnd = 0, this._settedOutputEnd = null, 
            !t && this._reset && ((e = this._reset(this.context)) && e.progress && (n = e.forceFirstProgress, 
            e = e.progress), S(e) && !e.length && (e = null)), this._progress = e, this._modBy = this._modDataCount = null;
            var i = this._downstream;
            return i && i.dirty(), n;
        }, t.prototype.unfinished = function() {
            return this._progress && this._dueIndex < this._dueEnd;
        }, t.prototype.pipe = function(t) {
            (this._downstream !== t || this._dirty) && (this._downstream = t, t._upstream = this, 
            t.dirty());
        }, t.prototype.dispose = function() {
            this._disposed || (this._upstream && (this._upstream._downstream = null), this._downstream && (this._downstream._upstream = null), 
            this._dirty = !1, this._disposed = !0);
        }, t.prototype.getUpstream = function() {
            return this._upstream;
        }, t.prototype.getDownstream = function() {
            return this._downstream;
        }, t.prototype.setOutputEnd = function(t) {
            this._outputDueEnd = this._settedOutputEnd = t;
        }, t;
    }(), gv = function() {
        function t() {
            return n > i ? i++ : null;
        }
        function e() {
            var t = i % a * r + Math.ceil(i / a), e = i >= n ? null : o > t ? t : i;
            return i++, e;
        }
        var n, i, r, o, a, s = {
            reset: function(l, u, h, c) {
                i = l, n = u, r = h, o = c, a = Math.ceil(o / r), s.next = r > 1 && o > 0 ? e : t;
            }
        };
        return s;
    }(), yv = (U({
        number: function(t) {
            return parseFloat(t);
        },
        time: function(t) {
            return +He(t);
        },
        trim: function(t) {
            return "string" == typeof t ? H(t) : t;
        }
    }), {
        lt: function(t, e) {
            return e > t;
        },
        lte: function(t, e) {
            return e >= t;
        },
        gt: function(t, e) {
            return t > e;
        },
        gte: function(t, e) {
            return t >= e;
        }
    }), vv = (function() {
        function t(t, e) {
            if ("number" != typeof e) {
                Ze("");
            }
            this._opFn = yv[t], this._rvalFloat = Xe(e);
        }
        t.prototype.evaluate = function(t) {
            return "number" == typeof t ? this._opFn(t, this._rvalFloat) : this._opFn(Xe(t), this._rvalFloat);
        };
    }(), function() {
        function e(t, e) {
            var n = "desc" === t;
            this._resultLT = n ? 1 : -1, null == e && (e = n ? "min" : "max"), this._incomparable = "min" === e ? -1 / 0 : 1 / 0;
        }
        e.prototype.evaluate = function(e, n) {
            var i = t(e), r = t(n), o = "number" === i ? e : Xe(e), a = "number" === r ? n : Xe(n), s = isNaN(o), l = isNaN(a);
            if (s && (o = this._incomparable), l && (a = this._incomparable), s && l) {
                var u = "string" === i, h = "string" === r;
                u && (o = h ? e : 0), h && (a = u ? n : 0);
            }
            return a > o ? this._resultLT : o > a ? -this._resultLT : 0;
        };
    }(), function() {
        function e(e, n) {
            this._rval = n, this._isEQ = e, this._rvalTypeof = t(n), this._rvalFloat = Xe(n);
        }
        e.prototype.evaluate = function(e) {
            var n = e === this._rval;
            if (!n) {
                var i = t(e);
                i === this._rvalTypeof || "number" !== i && "number" !== this._rvalTypeof || (n = Xe(e) === this._rvalFloat);
            }
            return this._isEQ ? n : !n;
        };
    }(), function() {
        function t() {}
        return t.prototype.getRawData = function() {
            throw new Error("not supported");
        }, t.prototype.getRawDataItem = function() {
            throw new Error("not supported");
        }, t.prototype.cloneRawData = function() {}, t.prototype.getDimensionInfo = function() {}, 
        t.prototype.cloneAllDimensionInfo = function() {}, t.prototype.count = function() {}, 
        t.prototype.retrieveValue = function() {}, t.prototype.retrieveValueFromItem = function() {}, 
        t.prototype.convertValue = function(t, e) {
            return ta(t, e);
        }, t;
    }()), mv = U(), _v = function() {
        function t(t) {
            this._sourceList = [], this._upstreamSignList = [], this._versionSignBase = 0, this._sourceHost = t;
        }
        return t.prototype.dirty = function() {
            this._setLocalSource([], []);
        }, t.prototype._setLocalSource = function(t, e) {
            this._sourceList = t, this._upstreamSignList = e, this._versionSignBase++, this._versionSignBase > 9e10 && (this._versionSignBase = 0);
        }, t.prototype._getVersionSign = function() {
            return this._sourceHost.uid + "_" + this._versionSignBase;
        }, t.prototype.prepareSource = function() {
            this._isDirty() && this._createSource();
        }, t.prototype._createSource = function() {
            this._setLocalSource([], []);
            var t, e, n = this._sourceHost, i = this._getUpstreamSourceManagers(), r = !!i.length;
            if (la(n)) {
                var o = n, a = void 0, s = void 0, l = void 0;
                if (r) {
                    var u = i[0];
                    u.prepareSource(), a = (l = u.getSource()).data, s = l.sourceFormat, e = [ u._getVersionSign() ];
                } else s = D(a = o.get("data", !0)) ? Dy : Cy, e = [];
                var h = this._getSourceMetaRawOption(), c = l ? l.metaRawOption : null;
                t = [ Ho(a, {
                    seriesLayoutBy: N(h.seriesLayoutBy, c ? c.seriesLayoutBy : null),
                    sourceHeader: N(h.sourceHeader, c ? c.sourceHeader : null),
                    dimensions: N(h.dimensions, c ? c.dimensions : null)
                }, s, o.get("encode", !0)) ];
            } else {
                var p = n;
                if (r) {
                    var f = this._applyTransform(i);
                    t = f.sourceList, e = f.upstreamSignList;
                } else {
                    t = [ Ho(p.get("source", !0), this._getSourceMetaRawOption(), null, null) ], e = [];
                }
            }
            this._setLocalSource(t, e);
        }, t.prototype._applyTransform = function(t) {
            var e = this._sourceHost, n = e.get("transform", !0), i = e.get("fromTransformResult", !0);
            if (null != i) {
                1 !== t.length && ua("");
            }
            var r, o = [], a = [];
            return y(t, function(t) {
                t.prepareSource();
                var e = t.getSource(i || 0);
                null == i || e || ua(""), o.push(e), a.push(t._getVersionSign());
            }), n ? r = function(t, e, n) {
                var i = Ke(t), r = i.length;
                r || Ze("");
                for (var o = 0, a = r; a > o; o++) {
                    e = oa(i[o], e), o !== a - 1 && (e.length = Math.max(e.length, 1));
                }
                return e;
            }(n, o, e.componentIndex) : null != i && (r = [ Wo(o[0]) ]), {
                sourceList: r,
                upstreamSignList: a
            };
        }, t.prototype._isDirty = function() {
            if (!this._sourceList.length) return !0;
            for (var t = this._getUpstreamSourceManagers(), e = 0; e < t.length; e++) {
                var n = t[e];
                if (n._isDirty() || this._upstreamSignList[e] !== n._getVersionSign()) return !0;
            }
        }, t.prototype.getSource = function(t) {
            return this._sourceList[t || 0];
        }, t.prototype._getUpstreamSourceManagers = function() {
            var t = this._sourceHost;
            if (la(t)) {
                var e = xo(t);
                return e ? [ e.getSourceManager() ] : [];
            }
            return v(function(t) {
                return t.get("transform", !0) || t.get("fromTransformResult", !0) ? hn(t.ecModel, "dataset", {
                    index: t.get("fromDatasetIndex", !0),
                    id: t.get("fromDatasetId", !0)
                }, Pp).models : [];
            }(t), function(t) {
                return t.getSourceManager();
            });
        }, t.prototype._getSourceMetaRawOption = function() {
            var t, e, n, i = this._sourceHost;
            if (la(i)) t = i.get("seriesLayoutBy", !0), e = i.get("sourceHeader", !0), n = i.get("dimensions", !0); else if (!this._getUpstreamSourceManagers().length) {
                var r = i;
                t = r.get("seriesLayoutBy", !0), e = r.get("sourceHeader", !0), n = r.get("dimensions", !0);
            }
            return {
                seriesLayoutBy: t,
                sourceHeader: e,
                dimensions: n
            };
        }, t;
    }(), xv = (function() {
        function t() {
            this.richTextStyles = {}, this._nextStyleNameId = qe();
        }
        t.prototype._generateStyleName = function() {
            return "__EC_aUTo_" + this._nextStyleNameId++;
        }, t.prototype.makeTooltipMarker = function(t, e, n) {
            var i = "richText" === n ? this._generateStyleName() : null, r = po({
                color: e,
                type: t,
                renderMode: n,
                markerId: i
            });
            return T(r) ? r : (this.richTextStyles[i] = r.style, r.content);
        }, t.prototype.wrapRichTextStyle = function(t, e) {
            var n = {};
            S(e) ? y(e, function(t) {
                return h(n, t);
            }) : h(n, e);
            var i = this._generateStyleName();
            return this.richTextStyles[i] = n, "{" + i + "|" + t + "}";
        };
    }(), sn()), wv = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e._selectedDataIndicesMap = {}, e;
        }
        return n(e, t), e.prototype.init = function(t, e, n) {
            this.seriesIndex = this.componentIndex, this.dataTask = Qo({
                count: ga,
                reset: ya
            }), this.dataTask.context = {
                model: this
            }, this.mergeDefaultAndTheme(t, n), (xv(this).sourceManager = new _v(this)).prepareSource();
            var i = this.getInitialData(t, n);
            ma(i, this), this.dataTask.context.data = i, xv(this).dataBeforeProcessed = i, da(this), 
            this._initSelectedMapFromData(i);
        }, e.prototype.mergeDefaultAndTheme = function(t, e) {
            var n = yo(this), i = n ? mo(t) : {}, r = this.subType;
            _y.hasClass(r) && (r += "Series"), l(t, e.getTheme().get(this.subType)), l(t, this.getDefaultOption()), 
            $e(t, "label", [ "show" ]), this.fillDataTextStyle(t.data), n && vo(t, i, n);
        }, e.prototype.mergeOption = function(t, e) {
            t = l(this.option, t, !0), this.fillDataTextStyle(t.data);
            var n = yo(this);
            n && vo(this.option, t, n);
            var i = xv(this).sourceManager;
            i.dirty(), i.prepareSource();
            var r = this.getInitialData(t, e);
            ma(r, this), this.dataTask.dirty(), this.dataTask.context.data = r, xv(this).dataBeforeProcessed = r, 
            da(this), this._initSelectedMapFromData(r);
        }, e.prototype.fillDataTextStyle = function(t) {
            if (t && !D(t)) for (var e = [ "show" ], n = 0; n < t.length; n++) t[n] && t[n].label && $e(t[n], "label", e);
        }, e.prototype.getInitialData = function() {}, e.prototype.appendData = function(t) {
            this.getRawData().appendData(t.data);
        }, e.prototype.getData = function(t) {
            var e = xa(this);
            if (e) {
                var n = e.context.data;
                return null == t ? n : n.getLinkedData(t);
            }
            return xv(this).data;
        }, e.prototype.getAllData = function() {
            var t = this.getData();
            return t && t.getLinkedDataAll ? t.getLinkedDataAll() : [ {
                data: t
            } ];
        }, e.prototype.setData = function(t) {
            var e = xa(this);
            if (e) {
                var n = e.context;
                n.outputData = t, e !== this.dataTask && (n.data = t);
            }
            xv(this).data = t;
        }, e.prototype.getSource = function() {
            return xv(this).sourceManager.getSource();
        }, e.prototype.getRawData = function() {
            return xv(this).dataBeforeProcessed;
        }, e.prototype.getBaseAxis = function() {
            var t = this.coordinateSystem;
            return t && t.getBaseAxis && t.getBaseAxis();
        }, e.prototype.formatTooltip = function(t, e) {
            return function(t) {
                var e, n, i, r, o = t.series, a = t.dataIndex, s = t.multipleSeries, l = o.getData(), u = l.mapDimensionsAll("defaultedTooltip"), h = u.length, c = o.getRawValue(a), p = S(c), f = ca(o, a);
                if (h > 1 || p && !h) {
                    var d = pa(c, o, a, u, f);
                    e = d.inlineValues, n = d.inlineValueTypes, i = d.blocks, r = d.inlineValues[0];
                } else if (h) {
                    var g = l.getDimensionInfo(u[0]);
                    r = e = Jo(l, a, u[0]), n = g.type;
                } else r = e = p ? c[0] : c;
                var y = rn(o), v = y && o.name || "", m = l.getName(a), _ = s ? v : m;
                return ha("section", {
                    header: v,
                    noHeader: s || !y,
                    sortParam: r,
                    blocks: [ ha("nameValue", {
                        markerType: "item",
                        markerColor: f,
                        name: _,
                        noName: !H(_),
                        value: e,
                        valueType: n
                    }) ].concat(i || [])
                });
            }({
                series: this,
                dataIndex: t,
                multipleSeries: e
            });
        }, e.prototype.isAnimationEnabled = function() {
            if (wh.node) return !1;
            var t = this.getShallow("animation");
            return t && this.getData().count() > this.getShallow("animationThreshold") && (t = !1), 
            !!t;
        }, e.prototype.restoreData = function() {
            this.dataTask.dirty();
        }, e.prototype.getColorFromPalette = function(t, e, n) {
            var i = this.ecModel, r = zy.prototype.getColorFromPalette.call(this, t, e, n);
            return r || (r = i.getColorFromPalette(t, e, n)), r;
        }, e.prototype.coordDimToDataDim = function(t) {
            return this.getRawData().mapDimensionsAll(t);
        }, e.prototype.getProgressive = function() {
            return this.get("progressive");
        }, e.prototype.getProgressiveThreshold = function() {
            return this.get("progressiveThreshold");
        }, e.prototype.select = function(t, e) {
            this._innerSelect(this.getData(e), t);
        }, e.prototype.unselect = function(t, e) {
            var n = this.option.selectedMap;
            if (n) for (var i = this.getData(e), r = 0; r < t.length; r++) {
                var o = fa(i, t[r]);
                n[o] = !1, this._selectedDataIndicesMap[o] = -1;
            }
        }, e.prototype.toggleSelect = function(t, e) {
            for (var n = [], i = 0; i < t.length; i++) n[0] = t[i], this.isSelected(t[i], e) ? this.unselect(n, e) : this.select(n, e);
        }, e.prototype.getSelectedDataIndices = function() {
            for (var t = this._selectedDataIndicesMap, e = w(t), n = [], i = 0; i < e.length; i++) {
                var r = t[e[i]];
                r >= 0 && n.push(r);
            }
            return n;
        }, e.prototype.isSelected = function(t, e) {
            var n = this.option.selectedMap;
            return n && n[fa(this.getData(e), t)] || !1;
        }, e.prototype._innerSelect = function(t, e) {
            var n, i, r = this.option.selectedMode, o = e.length;
            if (r && o) if ("multiple" === r) for (var a = this.option.selectedMap || (this.option.selectedMap = {}), s = 0; o > s; s++) {
                var l = e[s];
                a[h = fa(t, l)] = !0, this._selectedDataIndicesMap[h] = t.getRawIndex(l);
            } else if ("single" === r || !0 === r) {
                var u = e[o - 1], h = fa(t, u);
                this.option.selectedMap = ((n = {})[h] = !0, n), this._selectedDataIndicesMap = ((i = {})[h] = t.getRawIndex(u), 
                i);
            }
        }, e.prototype._initSelectedMapFromData = function(t) {
            if (!this.option.selectedMap) {
                var e = [];
                t.hasItemOption && t.each(function(n) {
                    var i = t.getRawDataItem(n);
                    i && i.selected && e.push(n);
                }), e.length > 0 && this._innerSelect(t, e);
            }
        }, e.registerClass = function(t) {
            return _y.registerClass(t);
        }, e.protoInitialize = function() {
            var t = e.prototype;
            t.type = "series.__base__", t.seriesIndex = 0, t.useColorPaletteOnData = !1, t.ignoreStyleOnData = !1, 
            t.hasSymbolVisual = !1, t.defaultSymbol = "circle", t.visualStyleAccessPath = "itemStyle", 
            t.visualDrawType = "fill";
        }(), e;
    }(_y);
    d(wv, fv), d(wv, zy), gn(wv, _y);
    var bv = function() {
        function t() {
            this.group = new mp(), this.uid = Vr("viewComponent");
        }
        return t.prototype.init = function() {}, t.prototype.render = function() {}, t.prototype.dispose = function() {}, 
        t.prototype.updateView = function() {}, t.prototype.updateLayout = function() {}, 
        t.prototype.updateVisual = function() {}, t.prototype.blurSeries = function() {}, 
        t;
    }();
    fn(bv), mn(bv);
    var Sv = sn(), Mv = wa(), Tv = function() {
        function t() {
            this.group = new mp(), this.uid = Vr("viewChart"), this.renderTask = Qo({
                plan: Ma,
                reset: Ta
            }), this.renderTask.context = {
                view: this
            };
        }
        return t.prototype.init = function() {}, t.prototype.render = function() {}, t.prototype.highlight = function(t, e, n, i) {
            Sa(t.getData(), i, "emphasis");
        }, t.prototype.downplay = function(t, e, n, i) {
            Sa(t.getData(), i, "normal");
        }, t.prototype.remove = function() {
            this.group.removeAll();
        }, t.prototype.dispose = function() {}, t.prototype.updateView = function(t, e, n, i) {
            this.render(t, e, n, i);
        }, t.prototype.updateLayout = function(t, e, n, i) {
            this.render(t, e, n, i);
        }, t.prototype.updateVisual = function(t, e, n, i) {
            this.render(t, e, n, i);
        }, t.markUpdateMethod = function(t, e) {
            Sv(t).updateMethod = e;
        }, t.protoInitialize = void (t.prototype.type = "chart"), t;
    }();
    fn(Tv), mn(Tv);
    var Cv, Av = {
        incrementalPrepareRender: {
            progress: function(t, e) {
                e.view.incrementalRender(t, e.model, e.ecModel, e.api, e.payload);
            }
        },
        render: {
            forceFirstProgress: !0,
            progress: function(t, e) {
                e.view.render(e.model, e.ecModel, e.api, e.payload);
            }
        }
    }, kv = "\0__throttleOriginMethod", Iv = "\0__throttleRate", Dv = "\0__throttleType", Pv = sn(), Lv = {
        itemStyle: _n(Wg, !0),
        lineStyle: _n(Vg, !0)
    }, Ov = {
        lineStyle: "stroke",
        itemStyle: "fill"
    }, Rv = {
        createOnAllSeries: !0,
        performRawSeries: !0,
        reset: function(t, e) {
            var n = t.getData(), i = t.visualStyleAccessPath || "itemStyle", r = t.getModel(i), o = Aa(t, i)(r), a = r.getShallow("decal");
            a && (n.setVisual("decal", a), a.dirty = !0);
            var s = ka(t, i), l = o[s], u = M(l) ? l : null, c = "auto" === o.fill || "auto" === o.stroke;
            if (!o[s] || u || c) {
                var p = t.getColorFromPalette(t.name, null, e.getSeriesCount());
                o[s] || (o[s] = p, n.setVisual("colorFromPalette", !0)), o.fill = "auto" === o.fill || "function" == typeof o.fill ? p : o.fill, 
                o.stroke = "auto" === o.stroke || "function" == typeof o.stroke ? p : o.stroke;
            }
            return n.setVisual("style", o), n.setVisual("drawType", s), !e.isSeriesFiltered(t) && u ? (n.setVisual("colorFromPalette", !1), 
            {
                dataEach: function(e, n) {
                    var i = t.getDataParams(n), r = h({}, o);
                    r[s] = u(i), e.setItemVisual(n, "style", r);
                }
            }) : void 0;
        }
    }, Ev = new Yg(), Nv = {
        createOnAllSeries: !0,
        performRawSeries: !0,
        reset: function(t, e) {
            if (!t.ignoreStyleOnData && !e.isSeriesFiltered(t)) {
                var n = t.getData(), i = t.visualStyleAccessPath || "itemStyle", r = Aa(t, i), o = n.getVisual("drawType");
                return {
                    dataEach: n.hasItemOption ? function(t, e) {
                        var n = t.getRawDataItem(e);
                        if (n && n[i]) {
                            Ev.option = n[i];
                            var a = r(Ev);
                            h(t.ensureUniqueItemVisual(e, "style"), a), Ev.option.decal && (t.setItemVisual(e, "decal", Ev.option.decal), 
                            Ev.option.decal.dirty = !0), o in a && t.setItemVisual(e, "colorFromPalette", !1);
                        }
                    } : null
                };
            }
        }
    }, Bv = {
        performRawSeries: !0,
        overallReset: function(t) {
            var e = U();
            t.eachSeries(function(t) {
                if (t.useColorPaletteOnData) {
                    var n = e.get(t.type);
                    n || (n = {}, e.set(t.type, n)), Pv(t).scope = n;
                }
            }), t.eachSeries(function(e) {
                if (e.useColorPaletteOnData && !t.isSeriesFiltered(e)) {
                    var n = e.getRawData(), i = {}, r = e.getData(), o = Pv(e).scope, a = e.visualStyleAccessPath || "itemStyle", s = ka(e, a);
                    r.each(function(t) {
                        var e = r.getRawIndex(t);
                        i[e] = t;
                    }), n.each(function(t) {
                        var a = i[t];
                        if (r.getItemVisual(a, "colorFromPalette")) {
                            var l = r.ensureUniqueItemVisual(a, "style"), u = n.getName(t) || t + "", h = n.count();
                            l[s] = e.getColorFromPalette(u, o, h);
                        }
                    });
                }
            });
        }
    }, zv = Math.PI, Fv = function() {
        function t(t, e, n, i) {
            this._stageTaskMap = U(), this.ecInstance = t, this.api = e, n = this._dataProcessorHandlers = n.slice(), 
            i = this._visualHandlers = i.slice(), this._allHandlers = n.concat(i);
        }
        return t.prototype.restoreData = function(t, e) {
            t.restoreData(e), this._stageTaskMap.each(function(t) {
                var e = t.overallTask;
                e && e.dirty();
            });
        }, t.prototype.getPerformArgs = function(t, e) {
            if (t.__pipeline) {
                var n = this._pipelineMap.get(t.__pipeline.id), i = n.context, r = !e && n.progressiveEnabled && (!i || i.progressiveRender) && t.__idxInPipeline > n.blockIndex ? n.step : null, o = i && i.modDataCount;
                return {
                    step: r,
                    modBy: null != o ? Math.ceil(o / r) : null,
                    modDataCount: o
                };
            }
        }, t.prototype.getPipeline = function(t) {
            return this._pipelineMap.get(t);
        }, t.prototype.updateStreamModes = function(t, e) {
            var n = this._pipelineMap.get(t.uid), i = t.getData().count(), r = n.progressiveEnabled && e.incrementalPrepareRender && i >= n.threshold, o = t.get("large") && i >= t.get("largeThreshold"), a = "mod" === t.get("progressiveChunkMode") ? i : null;
            t.pipelineContext = n.context = {
                progressiveRender: r,
                modDataCount: a,
                large: o
            };
        }, t.prototype.restorePipelines = function(t) {
            var e = this, n = e._pipelineMap = U();
            t.eachSeries(function(t) {
                var i = t.getProgressive(), r = t.uid;
                n.set(r, {
                    id: r,
                    head: null,
                    tail: null,
                    threshold: t.getProgressiveThreshold(),
                    progressiveEnabled: i && !(t.preventIncremental && t.preventIncremental()),
                    blockIndex: -1,
                    step: Math.round(i || 700),
                    count: 0
                }), e._pipe(t, t.dataTask);
            });
        }, t.prototype.prepareStageTasks = function() {
            var t = this._stageTaskMap, e = this.api.getModel(), n = this.api;
            y(this._allHandlers, function(i) {
                var r = t.get(i.uid) || t.set(i.uid, {});
                V(!(i.reset && i.overallReset), ""), i.reset && this._createSeriesStageTask(i, r, e, n), 
                i.overallReset && this._createOverallStageTask(i, r, e, n);
            }, this);
        }, t.prototype.prepareView = function(t, e, n, i) {
            var r = t.renderTask, o = r.context;
            o.model = e, o.ecModel = n, o.api = i, r.__block = !t.incrementalPrepareRender, 
            this._pipe(e, r);
        }, t.prototype.performDataProcessorTasks = function(t, e) {
            this._performStageTasks(this._dataProcessorHandlers, t, e, {
                block: !0
            });
        }, t.prototype.performVisualTasks = function(t, e, n) {
            this._performStageTasks(this._visualHandlers, t, e, n);
        }, t.prototype._performStageTasks = function(t, e, n, i) {
            function r(t, e) {
                return t.setDirty && (!t.dirtyMap || t.dirtyMap.get(e.__pipeline.id));
            }
            i = i || {};
            var o = !1, a = this;
            y(t, function(t) {
                if (!i.visualType || i.visualType === t.visualType) {
                    var s = a._stageTaskMap.get(t.uid), l = s.seriesTaskMap, u = s.overallTask;
                    if (u) {
                        var h, c = u.agentStubMap;
                        c.each(function(t) {
                            r(i, t) && (t.dirty(), h = !0);
                        }), h && u.dirty(), a.updatePayload(u, n);
                        var p = a.getPerformArgs(u, i.block);
                        c.each(function(t) {
                            t.perform(p);
                        }), u.perform(p) && (o = !0);
                    } else l && l.each(function(s) {
                        r(i, s) && s.dirty();
                        var l = a.getPerformArgs(s, i.block);
                        l.skip = !t.performRawSeries && e.isSeriesFiltered(s.context.model), a.updatePayload(s, n), 
                        s.perform(l) && (o = !0);
                    });
                }
            }), this.unfinished = o || this.unfinished;
        }, t.prototype.performSeriesTasks = function(t) {
            var e;
            t.eachSeries(function(t) {
                e = t.dataTask.perform() || e;
            }), this.unfinished = e || this.unfinished;
        }, t.prototype.plan = function() {
            this._pipelineMap.each(function(t) {
                var e = t.tail;
                do {
                    if (e.__block) {
                        t.blockIndex = e.__idxInPipeline;
                        break;
                    }
                    e = e.getUpstream();
                } while (e);
            });
        }, t.prototype.updatePayload = function(t, e) {
            "remain" !== e && (t.context.payload = e);
        }, t.prototype._createSeriesStageTask = function(t, e, n, i) {
            function r(e) {
                var r = e.uid, l = s.set(r, a && a.get(r) || Qo({
                    plan: Oa,
                    reset: Ra,
                    count: Na
                }));
                l.context = {
                    model: e,
                    ecModel: n,
                    api: i,
                    useClearVisual: t.isVisual && !t.isLayout,
                    plan: t.plan,
                    reset: t.reset,
                    scheduler: o
                }, o._pipe(e, l);
            }
            var o = this, a = e.seriesTaskMap, s = e.seriesTaskMap = U(), l = t.seriesType, u = t.getTargetSeries;
            t.createOnAllSeries ? n.eachRawSeries(r) : l ? n.eachRawSeriesByType(l, r) : u && u(n, i).each(r);
        }, t.prototype._createOverallStageTask = function(t, e, n, i) {
            function r(t) {
                var e = t.uid, n = l.set(e, s && s.get(e) || (p = !0, Qo({
                    reset: Da,
                    onDirty: La
                })));
                n.context = {
                    model: t,
                    overallProgress: c
                }, n.agent = a, n.__block = c, o._pipe(t, n);
            }
            var o = this, a = e.overallTask = e.overallTask || Qo({
                reset: Ia
            });
            a.context = {
                ecModel: n,
                api: i,
                overallReset: t.overallReset,
                scheduler: o
            };
            var s = a.agentStubMap, l = a.agentStubMap = U(), u = t.seriesType, h = t.getTargetSeries, c = !0, p = !1;
            V(!t.createOnAllSeries, ""), u ? n.eachRawSeriesByType(u, r) : h ? h(n, i).each(r) : (c = !1, 
            y(n.getSeries(), r)), p && a.dirty();
        }, t.prototype._pipe = function(t, e) {
            var n = t.uid, i = this._pipelineMap.get(n);
            !i.head && (i.head = e), i.tail && i.tail.pipe(e), i.tail = e, e.__idxInPipeline = i.count++, 
            e.__pipeline = i;
        }, t.wrapStageHandler = function(t, e) {
            return M(t) && (t = {
                overallReset: t,
                seriesType: Ba(t)
            }), t.uid = Vr("stageHandler"), e && (t.visualType = e), t;
        }, t;
    }(), Vv = Ea(0), Hv = {}, Gv = {};
    za(Hv, Vy), za(Gv, qy), Hv.eachSeriesByType = Hv.eachRawSeriesByType = function(t) {
        Cv = t;
    }, Hv.eachComponent = function(t) {
        "series" === t.mainType && t.subType && (Cv = t.subType);
    };
    var Wv = [ "#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF" ], Uv = {
        color: Wv,
        colorLayer: [ [ "#37A2DA", "#ffd85c", "#fd7b5f" ], [ "#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5" ], [ "#37A2DA", "#32C5E9", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378EA", "#96BFFF" ], Wv ]
    }, Xv = "#B9B8CE", Yv = "#100C2A", qv = function() {
        return {
            axisLine: {
                lineStyle: {
                    color: Xv
                }
            },
            splitLine: {
                lineStyle: {
                    color: "#484753"
                }
            },
            splitArea: {
                areaStyle: {
                    color: [ "rgba(255,255,255,0.02)", "rgba(255,255,255,0.05)" ]
                }
            },
            minorSplitLine: {
                lineStyle: {
                    color: "#20203B"
                }
            }
        };
    }, jv = [ "#4992ff", "#7cffb2", "#fddd60", "#ff6e76", "#58d9f9", "#05c091", "#ff8a45", "#8d48e3", "#dd79ff" ], Zv = {
        darkMode: !0,
        color: jv,
        backgroundColor: Yv,
        axisPointer: {
            lineStyle: {
                color: "#817f91"
            },
            crossStyle: {
                color: "#817f91"
            },
            label: {
                color: "#fff"
            }
        },
        legend: {
            textStyle: {
                color: Xv
            }
        },
        textStyle: {
            color: Xv
        },
        title: {
            textStyle: {
                color: "#EEF1FA"
            },
            subtextStyle: {
                color: "#B9B8CE"
            }
        },
        toolbox: {
            iconStyle: {
                borderColor: Xv
            }
        },
        dataZoom: {
            borderColor: "#71708A",
            textStyle: {
                color: Xv
            },
            brushStyle: {
                color: "rgba(135,163,206,0.3)"
            },
            handleStyle: {
                color: "#353450",
                borderColor: "#C5CBE3"
            },
            moveHandleStyle: {
                color: "#B0B6C3",
                opacity: .3
            },
            fillerColor: "rgba(135,163,206,0.2)",
            emphasis: {
                handleStyle: {
                    borderColor: "#91B7F2",
                    color: "#4D587D"
                },
                moveHandleStyle: {
                    color: "#636D9A",
                    opacity: .7
                }
            },
            dataBackground: {
                lineStyle: {
                    color: "#71708A",
                    width: 1
                },
                areaStyle: {
                    color: "#71708A"
                }
            },
            selectedDataBackground: {
                lineStyle: {
                    color: "#87A3CE"
                },
                areaStyle: {
                    color: "#87A3CE"
                }
            }
        },
        visualMap: {
            textStyle: {
                color: Xv
            }
        },
        timeline: {
            lineStyle: {
                color: Xv
            },
            label: {
                color: Xv
            },
            controlStyle: {
                color: Xv,
                borderColor: Xv
            }
        },
        calendar: {
            itemStyle: {
                color: Yv
            },
            dayLabel: {
                color: Xv
            },
            monthLabel: {
                color: Xv
            },
            yearLabel: {
                color: Xv
            }
        },
        timeAxis: qv(),
        logAxis: qv(),
        valueAxis: qv(),
        categoryAxis: qv(),
        line: {
            symbol: "circle"
        },
        graph: {
            color: jv
        },
        gauge: {
            title: {
                color: Xv
            },
            axisLine: {
                lineStyle: {
                    color: [ [ 1, "rgba(207,212,219,0.2)" ] ]
                }
            },
            axisLabel: {
                color: Xv
            },
            detail: {
                color: "#EEF1FA"
            }
        },
        candlestick: {
            itemStyle: {
                color: "#f64e56",
                color0: "#54ea92",
                borderColor: "#f64e56",
                borderColor0: "#54ea92"
            }
        }
    };
    Zv.categoryAxis.splitLine.show = !1;
    var Kv = function() {
        function t() {}
        return t.prototype.normalizeQuery = function(t) {
            var e = {}, n = {}, i = {};
            if (T(t)) {
                var r = pn(t);
                e.mainType = r.main || null, e.subType = r.sub || null;
            } else {
                var o = [ "Index", "Name", "Id" ], a = {
                    name: 1,
                    dataIndex: 1,
                    dataType: 1
                };
                y(t, function(t, r) {
                    for (var s = !1, l = 0; l < o.length; l++) {
                        var u = o[l], h = r.lastIndexOf(u);
                        if (h > 0 && h === r.length - u.length) {
                            var c = r.slice(0, h);
                            "data" !== c && (e.mainType = c, e[u.toLowerCase()] = t, s = !0);
                        }
                    }
                    a.hasOwnProperty(r) && (n[r] = t, s = !0), s || (i[r] = t);
                });
            }
            return {
                cptQuery: e,
                dataQuery: n,
                otherQuery: i
            };
        }, t.prototype.filter = function(t, e) {
            function n(t, e, n, i) {
                return null == t[n] || e[i || n] === t[n];
            }
            var i = this.eventInfo;
            if (!i) return !0;
            var r = i.targetEl, o = i.packedEvent, a = i.model, s = i.view;
            if (!a || !s) return !0;
            var l = e.cptQuery, u = e.dataQuery;
            return n(l, a, "mainType") && n(l, a, "subType") && n(l, a, "index", "componentIndex") && n(l, a, "name") && n(l, a, "id") && n(u, o, "name") && n(u, o, "dataIndex") && n(u, o, "dataType") && (!s.filterForExposedEvent || s.filterForExposedEvent(t, e.otherQuery, r, o));
        }, t.prototype.afterTrigger = function() {
            this.eventInfo = null;
        }, t;
    }(), $v = {
        createOnAllSeries: !0,
        performRawSeries: !0,
        reset: function(t, e) {
            var n = t.getData();
            if (t.legendIcon && n.setVisual("legendIcon", t.legendIcon), t.hasSymbolVisual) {
                var i = t.get("symbol"), r = t.get("symbolSize"), o = t.get("symbolKeepAspect"), a = t.get("symbolRotate"), s = t.get("symbolOffset"), l = M(i), u = M(r), h = M(a), c = M(s), p = l || u || h || c, f = !l && i ? i : t.defaultSymbol, d = u ? null : r, g = h ? null : a, y = c ? null : s;
                if (n.setVisual({
                    legendIcon: t.legendIcon || f,
                    symbol: f,
                    symbolSize: d,
                    symbolKeepAspect: o,
                    symbolRotate: g,
                    symbolOffset: y
                }), !e.isSeriesFiltered(t)) return {
                    dataEach: p ? function(e, n) {
                        var o = t.getRawValue(n), p = t.getDataParams(n);
                        l && e.setItemVisual(n, "symbol", i(o, p)), u && e.setItemVisual(n, "symbolSize", r(o, p)), 
                        h && e.setItemVisual(n, "symbolRotate", a(o, p)), c && e.setItemVisual(n, "symbolOffset", s(o, p));
                    } : null
                };
            }
        }
    }, Jv = 2 * Math.PI, Qv = Ef.CMD, tm = [ "top", "right", "bottom", "left" ], em = [], nm = new Qc(), im = new Qc(), rm = new Qc(), om = new Qc(), am = new Qc(), sm = [], lm = new Qc(), um = [ "align", "verticalAlign", "width", "height", "fontSize" ], hm = new Jc(), cm = sn(), pm = sn(), fm = [ "x", "y", "rotation" ], dm = function() {
        function t() {
            this._labelList = [], this._chartViewList = [];
        }
        return t.prototype.clearLabels = function() {
            this._labelList = [], this._chartViewList = [];
        }, t.prototype._addLabel = function(t, e, n, i, r) {
            var o = i.style, a = i.__hostTarget.textConfig || {}, s = i.getComputedTransform(), l = i.getBoundingRect().plain();
            lp.applyTransform(l, l, s), s ? hm.setLocalTransform(s) : (hm.x = hm.y = hm.rotation = hm.originX = hm.originY = 0, 
            hm.scaleX = hm.scaleY = 1);
            var u, h = i.__hostTarget;
            if (h) {
                u = h.getBoundingRect().plain();
                var c = h.getComputedTransform();
                lp.applyTransform(u, u, c);
            }
            var p = u && h.getTextGuideLine();
            this._labelList.push({
                label: i,
                labelLine: p,
                seriesModel: n,
                dataIndex: t,
                dataType: e,
                layoutOption: r,
                computedLayoutOption: null,
                rect: l,
                hostRect: u,
                priority: u ? u.width * u.height : 0,
                defaultAttr: {
                    ignore: i.ignore,
                    labelGuideIgnore: p && p.ignore,
                    x: hm.x,
                    y: hm.y,
                    scaleX: hm.scaleX,
                    scaleY: hm.scaleY,
                    rotation: hm.rotation,
                    style: {
                        x: o.x,
                        y: o.y,
                        align: o.align,
                        verticalAlign: o.verticalAlign,
                        width: o.width,
                        height: o.height,
                        fontSize: o.fontSize
                    },
                    cursor: i.cursor,
                    attachedPos: a.position,
                    attachedRot: a.rotation
                }
            });
        }, t.prototype.addLabelsOfSeries = function(t) {
            var e = this;
            this._chartViewList.push(t);
            var n = t.__model, i = n.get("labelLayout");
            (M(i) || w(i).length) && t.group.traverse(function(t) {
                if (t.ignore) return !0;
                var r = t.getTextContent(), o = sd(t);
                r && !r.disableLabelLayout && e._addLabel(o.dataIndex, o.dataType, n, r, i);
            });
        }, t.prototype.updateLayoutConfig = function(t) {
            function e(t, e) {
                return function() {
                    Ya(t, e);
                };
            }
            for (var n = t.getWidth(), i = t.getHeight(), r = 0; r < this._labelList.length; r++) {
                var o = this._labelList[r], a = o.label, s = a.__hostTarget, l = o.defaultAttr, u = void 0;
                u = (u = "function" == typeof o.layoutOption ? o.layoutOption($a(o, s)) : o.layoutOption) || {}, 
                o.computedLayoutOption = u;
                var h = Math.PI / 180;
                s && s.setTextConfig({
                    local: !1,
                    position: null != u.x || null != u.y ? null : l.attachedPos,
                    rotation: null != u.rotate ? u.rotate * h : l.attachedRot,
                    offset: [ u.dx || 0, u.dy || 0 ]
                });
                var c = !1;
                if (null != u.x ? (a.x = Le(u.x, n), a.setStyle("x", 0), c = !0) : (a.x = l.x, a.setStyle("x", l.style.x)), 
                null != u.y ? (a.y = Le(u.y, i), a.setStyle("y", 0), c = !0) : (a.y = l.y, a.setStyle("y", l.style.y)), 
                u.labelLinePoints) {
                    var p = s.getTextGuideLine();
                    p && (p.setShape({
                        points: u.labelLinePoints
                    }), c = !1);
                }
                cm(a).needsUpdateLabelLine = c, a.rotation = null != u.rotate ? u.rotate * h : l.rotation, 
                a.scaleX = l.scaleX, a.scaleY = l.scaleY;
                for (var f = 0; f < um.length; f++) {
                    var d = um[f];
                    a.setStyle(d, null != u[d] ? u[d] : l.style[d]);
                }
                if (u.draggable) {
                    if (a.draggable = !0, a.cursor = "move", s) {
                        var g = o.seriesModel;
                        if (null != o.dataIndex) g = o.seriesModel.getData(o.dataType).getItemModel(o.dataIndex);
                        a.on("drag", e(s, g.getModel("labelLine")));
                    }
                } else a.off("drag"), a.cursor = l.cursor;
            }
        }, t.prototype.layout = function(t) {
            var e = t.getWidth(), n = t.getHeight(), i = function(t) {
                for (var e = [], n = 0; n < t.length; n++) {
                    var i = t[n];
                    if (!i.defaultAttr.ignore) {
                        var r = i.label, o = r.getComputedTransform(), a = r.getBoundingRect(), s = !o || o[1] < 1e-5 && o[2] < 1e-5, l = r.style.margin || 0, u = a.clone();
                        u.applyTransform(o), u.x -= l / 2, u.y -= l / 2, u.width += l, u.height += l;
                        var h = s ? new bg(a, o) : null;
                        e.push({
                            label: r,
                            labelLine: i.labelLine,
                            rect: u,
                            localRect: a,
                            obb: h,
                            priority: i.priority,
                            defaultAttr: i.defaultAttr,
                            layoutOption: i.computedLayoutOption,
                            axisAligned: s,
                            transform: o
                        });
                    }
                }
                return e;
            }(this._labelList), r = _(i, function(t) {
                return "shiftX" === t.layoutOption.moveOverlap;
            }), o = _(i, function(t) {
                return "shiftY" === t.layoutOption.moveOverlap;
            });
            (function(t, e, n, i) {
                Za(t, "x", "width", e, n, i);
            })(r, 0, e), function(t, e, n, i) {
                Za(t, "y", "height", e, n, i);
            }(o, 0, n), function(t) {
                function e(t) {
                    if (!t.ignore) {
                        var e = t.ensureState("emphasis");
                        null == e.ignore && (e.ignore = !1);
                    }
                    t.ignore = !0;
                }
                var n = [];
                t.sort(function(t, e) {
                    return e.priority - t.priority;
                });
                for (var i = new lp(0, 0, 0, 0), r = 0; r < t.length; r++) {
                    var o = t[r], a = o.axisAligned, s = o.localRect, l = o.transform, u = o.label, h = o.labelLine;
                    i.copy(o.rect), i.width -= .1, i.height -= .1, i.x += .05, i.y += .05;
                    for (var c = o.obb, p = !1, f = 0; f < n.length; f++) {
                        var d = n[f];
                        if (i.intersect(d.rect)) {
                            if (a && d.axisAligned) {
                                p = !0;
                                break;
                            }
                            if (d.obb || (d.obb = new bg(d.localRect, d.transform)), c || (c = new bg(s, l)), 
                            c.intersect(d.obb)) {
                                p = !0;
                                break;
                            }
                        }
                    }
                    p ? (e(u), h && e(h)) : (u.attr("ignore", o.defaultAttr.ignore), h && h.attr("ignore", o.defaultAttr.labelGuideIgnore), 
                    n.push(o));
                }
            }(_(i, function(t) {
                return t.layoutOption.hideOverlap;
            }));
        }, t.prototype.processLabelsOverall = function() {
            var t = this;
            y(this._chartViewList, function(e) {
                var n = e.__model, i = e.ignoreLabelLineUpdate, r = n.isAnimationEnabled();
                e.group.traverse(function(e) {
                    if (e.ignore) return !0;
                    var o = !i, a = e.getTextContent();
                    !o && a && (o = cm(a).needsUpdateLabelLine), o && t._updateLabelLine(e, n), r && t._animateLabels(e, n);
                });
            });
        }, t.prototype._updateLabelLine = function(t, e) {
            var n = t.getTextContent(), i = sd(t), r = i.dataIndex;
            if (n && null != r) {
                var o = e.getData(i.dataType), a = o.getItemModel(r), s = {}, l = o.getItemVisual(r, "style"), u = o.getVisual("drawType");
                s.stroke = l[u];
                var h = a.getModel("labelLine");
                (function(t, e, n) {
                    var i = t.getTextGuideLine(), r = t.getTextContent();
                    if (r) {
                        for (var o = e.normal, a = o.get("show"), s = r.ignore, l = 0; l < gd.length; l++) {
                            var u = gd[l], h = e[u], p = "normal" === u;
                            if (h) {
                                var f = h.get("show");
                                if ((p ? s : N(r.states[u] && r.states[u].ignore, s)) || !N(f, a)) {
                                    var d = p ? i : i && i.states.normal;
                                    d && (d.ignore = !0);
                                    continue;
                                }
                                i || (i = new og(), t.setTextGuideLine(i), p || !s && a || qa(i, !0, "normal", e.normal), 
                                t.stateProxy && (i.stateProxy = t.stateProxy)), qa(i, !1, u, h);
                            }
                        }
                        if (i) {
                            c(i.style, n), i.style.fill = null;
                            var g = o.get("showAbove");
                            (t.textGuideLineConfig = t.textGuideLineConfig || {}).showAbove = g || !1, i.buildPath = ja;
                        }
                    } else i && t.removeTextGuideLine();
                })(t, function(t, e) {
                    e = e || "labelLine";
                    for (var n = {
                        normal: t.getModel(e)
                    }, i = 0; i < dd.length; i++) {
                        var r = dd[i];
                        n[r] = t.getModel([ r, e ]);
                    }
                    return n;
                }(a), s), Ya(t, h);
            }
        }, t.prototype._animateLabels = function(t, e) {
            var n = t.getTextContent(), i = t.getTextGuideLine();
            if (n && !n.ignore && !n.invisible && !t.disableLabelAnimation && !wr(t)) {
                var r = (d = cm(n)).oldLayout, o = sd(t), a = o.dataIndex, s = {
                    x: n.x,
                    y: n.y,
                    rotation: n.rotation
                }, l = e.getData(o.dataType);
                if (r) {
                    n.attr(r);
                    var u = t.prevStates;
                    u && (p(u, "select") >= 0 && n.attr(d.oldLayoutSelect), p(u, "emphasis") >= 0 && n.attr(d.oldLayoutEmphasis)), 
                    vr(n, s, e, a);
                } else if (n.attr(s), !Ng(n).valueAnimation) {
                    var h = N(n.style.opacity, 1);
                    n.style.opacity = 0, mr(n, {
                        style: {
                            opacity: h
                        }
                    }, e, a);
                }
                if (d.oldLayout = s, n.states.select) {
                    var c = d.oldLayoutSelect = {};
                    Ja(c, s, fm), Ja(c, n.states.select, fm);
                }
                if (n.states.emphasis) {
                    var f = d.oldLayoutEmphasis = {};
                    Ja(f, s, fm), Ja(f, n.states.emphasis, fm);
                }
                Fr(n, a, l, e, e);
            }
            if (i && !i.ignore && !i.invisible) {
                r = (d = pm(i)).oldLayout;
                var d, g = {
                    points: i.shape.points
                };
                r ? (i.attr({
                    shape: r
                }), vr(i, {
                    shape: g
                }, e)) : (i.setShape(g), i.style.strokePercent = 0, mr(i, {
                    style: {
                        strokePercent: 1
                    }
                }, e)), d.oldLayout = g;
            }
        }, t;
    }(), gm = Math.round(9 * Math.random()), ym = function() {
        function t() {
            this._id = "__ec_inner_" + gm++;
        }
        return t.prototype.get = function(t) {
            return this._guard(t)[this._id];
        }, t.prototype.set = function(t, e) {
            var n = this._guard(t);
            return "function" == typeof Object.defineProperty ? Object.defineProperty(n, this._id, {
                value: e,
                enumerable: !1,
                configurable: !0
            }) : n[this._id] = e, this;
        }, t.prototype.delete = function(t) {
            return !!this.has(t) && (delete this._guard(t)[this._id], !0);
        }, t.prototype.has = function(t) {
            return !!this._guard(t)[this._id];
        }, t.prototype._guard = function(t) {
            if (t !== Object(t)) throw TypeError("Value of WeakMap is not a non-null object.");
            return t;
        }, t;
    }(), vm = Yf.extend({
        type: "triangle",
        shape: {
            cx: 0,
            cy: 0,
            width: 0,
            height: 0
        },
        buildPath: function(t, e) {
            var n = e.cx, i = e.cy, r = e.width / 2, o = e.height / 2;
            t.moveTo(n, i - o), t.lineTo(n + r, i + o), t.lineTo(n - r, i + o), t.closePath();
        }
    }), mm = Yf.extend({
        type: "diamond",
        shape: {
            cx: 0,
            cy: 0,
            width: 0,
            height: 0
        },
        buildPath: function(t, e) {
            var n = e.cx, i = e.cy, r = e.width / 2, o = e.height / 2;
            t.moveTo(n, i - o), t.lineTo(n + r, i), t.lineTo(n, i + o), t.lineTo(n - r, i), 
            t.closePath();
        }
    }), _m = Yf.extend({
        type: "pin",
        shape: {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        },
        buildPath: function(t, e) {
            var n = e.x, i = e.y, r = e.width / 5 * 3, o = Math.max(r, e.height), a = r / 2, s = a * a / (o - a), l = i - o + a + s, u = Math.asin(s / a), h = Math.cos(u) * a, c = Math.sin(u), p = Math.cos(u), f = .6 * a, d = .7 * a;
            t.moveTo(n - h, l + s), t.arc(n, l, a, Math.PI - u, 2 * Math.PI + u), t.bezierCurveTo(n + h - c * f, l + s + p * f, n, i - d, n, i), 
            t.bezierCurveTo(n, i - d, n - h + c * f, l + s + p * f, n - h, l + s), t.closePath();
        }
    }), xm = Yf.extend({
        type: "arrow",
        shape: {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        },
        buildPath: function(t, e) {
            var n = e.height, i = e.width, r = e.x, o = e.y, a = i / 3 * 2;
            t.moveTo(r, o), t.lineTo(r + a, o + n), t.lineTo(r, o + n / 4 * 3), t.lineTo(r - a, o + n), 
            t.lineTo(r, o), t.closePath();
        }
    }), wm = {
        line: function(t, e, n, i, r) {
            r.x1 = t, r.y1 = e + i / 2, r.x2 = t + n, r.y2 = e + i / 2;
        },
        rect: function(t, e, n, i, r) {
            r.x = t, r.y = e, r.width = n, r.height = i;
        },
        roundRect: function(t, e, n, i, r) {
            r.x = t, r.y = e, r.width = n, r.height = i, r.r = Math.min(n, i) / 4;
        },
        square: function(t, e, n, i, r) {
            var o = Math.min(n, i);
            r.x = t, r.y = e, r.width = o, r.height = o;
        },
        circle: function(t, e, n, i, r) {
            r.cx = t + n / 2, r.cy = e + i / 2, r.r = Math.min(n, i) / 2;
        },
        diamond: function(t, e, n, i, r) {
            r.cx = t + n / 2, r.cy = e + i / 2, r.width = n, r.height = i;
        },
        pin: function(t, e, n, i, r) {
            r.x = t + n / 2, r.y = e + i / 2, r.width = n, r.height = i;
        },
        arrow: function(t, e, n, i, r) {
            r.x = t + n / 2, r.y = e + i / 2, r.width = n, r.height = i;
        },
        triangle: function(t, e, n, i, r) {
            r.cx = t + n / 2, r.cy = e + i / 2, r.width = n, r.height = i;
        }
    }, bm = {};
    y({
        line: lg,
        rect: ed,
        roundRect: ed,
        square: ed,
        circle: zd,
        diamond: mm,
        pin: _m,
        arrow: xm,
        triangle: vm
    }, function(t, e) {
        bm[e] = new t();
    });
    for (var Sm, Mm = Yf.extend({
        type: "symbol",
        shape: {
            symbolType: "",
            x: 0,
            y: 0,
            width: 0,
            height: 0
        },
        calculateTextPosition: function(t, e, n) {
            var i = Me(t, e, n), r = this.shape;
            return r && "pin" === r.symbolType && "inside" === e.position && (i.y = n.y + .4 * n.height), 
            i;
        },
        buildPath: function(t, e, n) {
            var i = e.symbolType;
            if ("none" !== i) {
                var r = bm[i];
                r || (r = bm[i = "rect"]), wm[i](e.x, e.y, e.width, e.height, r.shape), r.buildPath(t, r.shape, n);
            }
        }
    }), Tm = new Ef(!0), Cm = [ "shadowBlur", "shadowOffsetX", "shadowOffsetY" ], Am = [ [ "lineCap", "butt" ], [ "lineJoin", "miter" ], [ "miterLimit", 10 ] ], km = 1, Im = 2, Dm = 3, Pm = 4, Lm = new ym(), Om = new vc(100), Rm = [ "symbol", "symbolSize", "symbolKeepAspect", "color", "backgroundColor", "dashArrayX", "dashArrayY", "maxTileWidth", "maxTileHeight" ], Em = {
        fill: "fill",
        stroke: "stroke",
        "stroke-width": "lineWidth",
        opacity: "opacity",
        "fill-opacity": "fillOpacity",
        "stroke-opacity": "strokeOpacity",
        "stroke-dasharray": "lineDash",
        "stroke-dashoffset": "lineDashOffset",
        "stroke-linecap": "lineCap",
        "stroke-linejoin": "lineJoin",
        "stroke-miterlimit": "miterLimit",
        "font-family": "fontFamily",
        "font-size": "fontSize",
        "font-style": "fontStyle",
        "font-weight": "fontWeight",
        "text-anchor": "textAlign",
        visibility: "visibility",
        display: "display"
    }, Nm = w(Em), Bm = {
        "alignment-baseline": "textBaseline",
        "stop-color": "stopColor"
    }, zm = w(Bm), Fm = function() {
        function t() {
            this._defs = {}, this._root = null;
        }
        return t.prototype.parse = function(t, e) {
            e = e || {};
            var n = bs(t);
            if (!n) throw new Error("Illegal svg");
            this._defsUsePending = [];
            var i = new mp();
            this._root = i;
            var r, o, a = [], s = n.getAttribute("viewBox") || "", l = parseFloat(n.getAttribute("width") || e.width), u = parseFloat(n.getAttribute("height") || e.height);
            isNaN(l) && (l = null), isNaN(u) && (u = null), As(n, i, null, !0, !1);
            for (var h = n.firstChild; h; ) this._parseNode(h, i, a, null, !1, !1), h = h.nextSibling;
            if (function(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i[0].style[i[1]] = t[i[2]];
                }
            }(this._defs, this._defsUsePending), this._defsUsePending = [], s) {
                var c = Is(s);
                c.length >= 4 && (r = {
                    x: parseFloat(c[0] || 0),
                    y: parseFloat(c[1] || 0),
                    width: parseFloat(c[2]),
                    height: parseFloat(c[3])
                });
            }
            if (r && null != l && null != u && (o = Ps(r, {
                x: 0,
                y: 0,
                width: l,
                height: u
            }), !e.ignoreViewBox)) {
                var p = i;
                (i = new mp()).add(p), p.scaleX = p.scaleY = o.scale, p.x = o.x, p.y = o.y;
            }
            return e.ignoreRootClip || null == l || null == u || i.setClipPath(new ed({
                shape: {
                    x: 0,
                    y: 0,
                    width: l,
                    height: u
                }
            })), {
                root: i,
                width: l,
                height: u,
                viewBoxRect: r,
                viewBoxTransform: o,
                named: a
            };
        }, t.prototype._parseNode = function(t, e, n, i, r, o) {
            var a, s = t.nodeName.toLowerCase(), l = i;
            if ("defs" === s && (r = !0), "text" === s && (o = !0), "defs" === s || "switch" === s) a = e; else {
                if (!r) {
                    var u = Sm[s];
                    if (u && Y(Sm, s)) {
                        a = u.call(this, t, e);
                        var h = t.getAttribute("name");
                        if (h) {
                            var c = {
                                name: h,
                                namedFrom: null,
                                svgNodeTagLower: s,
                                el: a
                            };
                            n.push(c), "g" === s && (l = c);
                        } else i && n.push({
                            name: i.name,
                            namedFrom: i,
                            svgNodeTagLower: s,
                            el: a
                        });
                        e.add(a);
                    }
                }
                var p = Vm[s];
                if (p && Y(Vm, s)) {
                    var f = p.call(this, t), d = t.getAttribute("id");
                    d && (this._defs[d] = f);
                }
            }
            if (a && a.isGroup) for (var g = t.firstChild; g; ) 1 === g.nodeType ? this._parseNode(g, a, n, l, r, o) : 3 === g.nodeType && o && this._parseText(g, a), 
            g = g.nextSibling;
        }, t.prototype._parseText = function(t, e) {
            var n = new jf({
                style: {
                    text: t.textContent
                },
                silent: !0,
                x: this._textX || 0,
                y: this._textY || 0
            });
            Ts(e, n), As(t, n, this._defsUsePending, !1, !1), function(t, e) {
                var n = e.__selfStyle;
                if (n) {
                    var i = n.textBaseline, r = i;
                    i && "auto" !== i ? "baseline" === i ? r = "alphabetic" : "before-edge" === i || "text-before-edge" === i ? r = "top" : "after-edge" === i || "text-after-edge" === i ? r = "bottom" : ("central" === i || "mathematical" === i) && (r = "middle") : r = "alphabetic", 
                    t.style.textBaseline = r;
                }
                var o = e.__inheritedStyle;
                if (o) {
                    var a = o.textAlign, s = a;
                    a && ("middle" === a && (s = "center"), t.style.textAlign = s);
                }
            }(n, e);
            var i = n.style, r = i.fontSize;
            r && 9 > r && (i.fontSize = 9, n.scaleX *= r / 9, n.scaleY *= r / 9);
            var o = (i.fontSize || i.fontFamily) && [ i.fontStyle, i.fontWeight, (i.fontSize || 12) + "px", i.fontFamily || "sans-serif" ].join(" ");
            i.font = o;
            var a = n.getBoundingRect();
            return this._textX += a.width, e.add(n), n;
        }, t.internalField = void (Sm = {
            g: function(t, e) {
                var n = new mp();
                return Ts(e, n), As(t, n, this._defsUsePending, !1, !1), n;
            },
            rect: function(t, e) {
                var n = new ed();
                return Ts(e, n), As(t, n, this._defsUsePending, !1, !1), n.setShape({
                    x: parseFloat(t.getAttribute("x") || "0"),
                    y: parseFloat(t.getAttribute("y") || "0"),
                    width: parseFloat(t.getAttribute("width") || "0"),
                    height: parseFloat(t.getAttribute("height") || "0")
                }), n.silent = !0, n;
            },
            circle: function(t, e) {
                var n = new zd();
                return Ts(e, n), As(t, n, this._defsUsePending, !1, !1), n.setShape({
                    cx: parseFloat(t.getAttribute("cx") || "0"),
                    cy: parseFloat(t.getAttribute("cy") || "0"),
                    r: parseFloat(t.getAttribute("r") || "0")
                }), n.silent = !0, n;
            },
            line: function(t, e) {
                var n = new lg();
                return Ts(e, n), As(t, n, this._defsUsePending, !1, !1), n.setShape({
                    x1: parseFloat(t.getAttribute("x1") || "0"),
                    y1: parseFloat(t.getAttribute("y1") || "0"),
                    x2: parseFloat(t.getAttribute("x2") || "0"),
                    y2: parseFloat(t.getAttribute("y2") || "0")
                }), n.silent = !0, n;
            },
            ellipse: function(t, e) {
                var n = new Vd();
                return Ts(e, n), As(t, n, this._defsUsePending, !1, !1), n.setShape({
                    cx: parseFloat(t.getAttribute("cx") || "0"),
                    cy: parseFloat(t.getAttribute("cy") || "0"),
                    rx: parseFloat(t.getAttribute("rx") || "0"),
                    ry: parseFloat(t.getAttribute("ry") || "0")
                }), n.silent = !0, n;
            },
            polygon: function(t, e) {
                var n, i = t.getAttribute("points");
                i && (n = Cs(i));
                var r = new ig({
                    shape: {
                        points: n || []
                    },
                    silent: !0
                });
                return Ts(e, r), As(t, r, this._defsUsePending, !1, !1), r;
            },
            polyline: function(t, e) {
                var n, i = t.getAttribute("points");
                i && (n = Cs(i));
                var r = new og({
                    shape: {
                        points: n || []
                    },
                    silent: !0
                });
                return Ts(e, r), As(t, r, this._defsUsePending, !1, !1), r;
            },
            image: function(t, e) {
                var n = new $f();
                return Ts(e, n), As(t, n, this._defsUsePending, !1, !1), n.setStyle({
                    image: t.getAttribute("xlink:href"),
                    x: +t.getAttribute("x"),
                    y: +t.getAttribute("y"),
                    width: +t.getAttribute("width"),
                    height: +t.getAttribute("height")
                }), n.silent = !0, n;
            },
            text: function(t, e) {
                var n = t.getAttribute("x") || "0", i = t.getAttribute("y") || "0", r = t.getAttribute("dx") || "0", o = t.getAttribute("dy") || "0";
                this._textX = parseFloat(n) + parseFloat(r), this._textY = parseFloat(i) + parseFloat(o);
                var a = new mp();
                return Ts(e, a), As(t, a, this._defsUsePending, !1, !0), a;
            },
            tspan: function(t, e) {
                var n = t.getAttribute("x"), i = t.getAttribute("y");
                null != n && (this._textX = parseFloat(n)), null != i && (this._textY = parseFloat(i));
                var r = t.getAttribute("dx") || "0", o = t.getAttribute("dy") || "0", a = new mp();
                return Ts(e, a), As(t, a, this._defsUsePending, !1, !0), this._textX += parseFloat(r), 
                this._textY += parseFloat(o), a;
            },
            path: function(t, e) {
                var n = nr(t.getAttribute("d") || "");
                return Ts(e, n), As(t, n, this._defsUsePending, !1, !1), n.silent = !0, n;
            }
        }), t;
    }(), Vm = {
        lineargradient: function(t) {
            var e = parseInt(t.getAttribute("x1") || "0", 10), n = parseInt(t.getAttribute("y1") || "0", 10), i = parseInt(t.getAttribute("x2") || "10", 10), r = parseInt(t.getAttribute("y2") || "0", 10), o = new yg(e, n, i, r);
            return Ss(t, o), Ms(t, o), o;
        },
        radialgradient: function(t) {
            var e = parseInt(t.getAttribute("cx") || "0", 10), n = parseInt(t.getAttribute("cy") || "0", 10), i = parseInt(t.getAttribute("r") || "0", 10), r = new vg(e, n, i);
            return Ss(t, r), Ms(t, r), r;
        }
    }, Hm = /^url\(\s*#(.*?)\)/, Gm = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g, Wm = /(translate|scale|rotate|skewX|skewY|matrix)\(([\-\s0-9\.eE,]*)\)/g, Um = Math.PI / 180, Xm = /([^\s:;]+)\s*:\s*([^:;]+)/g, Ym = 1e-8, qm = [], jm = function() {
        function t(t) {
            this.name = t;
        }
        return t.prototype.getCenter = function() {}, t;
    }(), Zm = function(t) {
        function e(e, n, i) {
            var r = t.call(this, e) || this;
            if (r.type = "geoJSON", r.geometries = n, i) i = [ i[0], i[1] ]; else {
                var o = r.getBoundingRect();
                i = [ o.x + o.width / 2, o.y + o.height / 2 ];
            }
            return r._center = i, r;
        }
        return n(e, t), e.prototype.getBoundingRect = function() {
            var t = this._rect;
            if (t) return t;
            for (var e = Number.MAX_VALUE, n = [ e, e ], i = [ -e, -e ], r = [], o = [], a = this.geometries, s = 0; s < a.length; s++) if ("polygon" === a[s].type) {
                Xn(a[s].exterior, r, o), at(n, n, r), st(i, i, o);
            }
            return 0 === s && (n[0] = n[1] = i[0] = i[1] = 0), this._rect = new lp(n[0], n[1], i[0] - n[0], i[1] - n[1]);
        }, e.prototype.contain = function(t) {
            var e = this.getBoundingRect(), n = this.geometries;
            if (!e.contain(t[0], t[1])) return !1;
            t: for (var i = 0, r = n.length; r > i; i++) if ("polygon" === n[i].type) {
                var o = n[i].exterior, a = n[i].interiors;
                if (Os(o, t[0], t[1])) {
                    for (var s = 0; s < (a ? a.length : 0); s++) if (Os(a[s], t[0], t[1])) continue t;
                    return !0;
                }
            }
            return !1;
        }, e.prototype.transformTo = function(t, e, n, i) {
            var r = this.getBoundingRect(), o = r.width / r.height;
            n ? i || (i = n / o) : n = o * i;
            for (var a = new lp(t, e, n, i), s = r.calculateTransform(a), l = this.geometries, u = 0; u < l.length; u++) if ("polygon" === l[u].type) {
                for (var h = l[u].exterior, c = l[u].interiors, p = 0; p < h.length; p++) ot(h[p], h[p], s);
                for (var f = 0; f < (c ? c.length : 0); f++) for (p = 0; p < c[f].length; p++) ot(c[f][p], c[f][p], s);
            }
            (r = this._rect).copy(a), this._center = [ r.x + r.width / 2, r.y + r.height / 2 ];
        }, e.prototype.cloneShallow = function(t) {
            null == t && (t = this.name);
            var n = new e(t, this.geometries, this._center);
            return n._rect = this._rect, n.transformTo = null, n;
        }, e.prototype.getCenter = function() {
            return this._center;
        }, e.prototype.setCenter = function(t) {
            this._center = t;
        }, e;
    }(jm), Km = function(t) {
        function e(e, n) {
            var i = t.call(this, e) || this;
            return i.type = "geoSVG", i._elOnlyForCalculate = n, i;
        }
        return n(e, t), e.prototype.getCenter = function() {
            var t = this._center;
            return t || (t = this._center = this._calculateCenter()), t;
        }, e.prototype._calculateCenter = function() {
            for (var t = this._elOnlyForCalculate, e = t.getBoundingRect(), n = [ e.x + e.width / 2, e.y + e.height / 2 ], i = ue(qm), r = t; r && !r.isGeoSVGGraphicRoot; ) ce(i, r.getLocalTransform(), i), 
            r = r.parent;
            return ge(i, i), ot(n, n, i), n;
        }, e;
    }(jm), $m = U([ "rect", "circle", "line", "ellipse", "polygon", "polyline", "path", "text", "tspan", "g" ]), Jm = function() {
        function t(t, e) {
            this.type = "geoSVG", this._usedGraphicMap = U(), this._freedGraphics = [], this._mapName = t, 
            this._parsedXML = bs(e);
        }
        return t.prototype.load = function() {
            var t = this._firstGraphic;
            if (!t) {
                t = this._firstGraphic = this._buildGraphic(this._parsedXML), this._freedGraphics.push(t), 
                this._boundingRect = this._firstGraphic.boundingRect.clone();
                var e = function(t) {
                    var e = [], n = U();
                    return y(t, function(t) {
                        if (null == t.namedFrom) {
                            var i = new Km(t.name, t.el);
                            e.push(i), n.set(t.name, i);
                        }
                    }), {
                        regions: e,
                        regionsMap: n
                    };
                }(t.named), n = e.regions, i = e.regionsMap;
                this._regions = n, this._regionsMap = i;
            }
            return {
                boundingRect: this._boundingRect,
                regions: this._regions,
                regionsMap: this._regionsMap
            };
        }, t.prototype._buildGraphic = function(t) {
            var e, n;
            try {
                V(null != (n = (e = t && function(t, e) {
                    return new Fm().parse(t, e);
                }(t, {
                    ignoreViewBox: !0,
                    ignoreRootClip: !0
                }) || {}).root));
            } catch (t) {
                throw new Error("Invalid svg format\n" + t.message);
            }
            var i = new mp();
            i.add(n), i.isGeoSVGGraphicRoot = !0;
            var r = e.width, o = e.height, a = e.viewBoxRect, s = this._boundingRect;
            if (!s) {
                var l = void 0, u = void 0, h = void 0, c = void 0;
                if (null != r ? (l = 0, h = r) : a && (l = a.x, h = a.width), null != o ? (u = 0, 
                c = o) : a && (u = a.y, c = a.height), null == l || null == u) {
                    var p = n.getBoundingRect();
                    null == l && (l = p.x, h = p.width), null == u && (u = p.y, c = p.height);
                }
                s = this._boundingRect = new lp(l, u, h, c);
            }
            if (a) {
                var f = Ps(a, s);
                n.scaleX = n.scaleY = f.scale, n.x = f.x, n.y = f.y;
            }
            i.setClipPath(new ed({
                shape: s.plain()
            }));
            var d = [];
            return y(e.named, function(t) {
                null != $m.get(t.svgNodeTagLower) && (d.push(t), function(t) {
                    t.silent = !1, t.isGroup && t.traverse(function(t) {
                        t.silent = !1;
                    });
                }(t.el));
            }), {
                root: i,
                boundingRect: s,
                named: d
            };
        }, t.prototype.useGraphic = function(t) {
            var e = this._usedGraphicMap, n = e.get(t);
            return n || (n = this._freedGraphics.pop() || this._buildGraphic(this._parsedXML), 
            e.set(t, n), n);
        }, t.prototype.freeGraphic = function(t) {
            var e = this._usedGraphicMap, n = e.get(t);
            n && (e.removeKey(t), this._freedGraphics.push(n));
        }, t;
    }(), Qm = [ 126, 25 ], t_ = "南海诸岛", e_ = [ [ [ 0, 3.5 ], [ 7, 11.2 ], [ 15, 11.9 ], [ 30, 7 ], [ 42, .7 ], [ 52, .7 ], [ 56, 7.7 ], [ 59, .7 ], [ 64, .7 ], [ 64, 0 ], [ 5, 0 ], [ 0, 3.5 ] ], [ [ 13, 16.1 ], [ 19, 14.7 ], [ 16, 21.7 ], [ 11, 23.1 ], [ 13, 16.1 ] ], [ [ 12, 32.2 ], [ 14, 38.5 ], [ 15, 38.5 ], [ 13, 32.2 ], [ 12, 32.2 ] ], [ [ 16, 47.6 ], [ 12, 53.2 ], [ 13, 53.2 ], [ 18, 47.6 ], [ 16, 47.6 ] ], [ [ 6, 64.4 ], [ 8, 70 ], [ 9, 70 ], [ 8, 64.4 ], [ 6, 64.4 ] ], [ [ 23, 82.6 ], [ 29, 79.8 ], [ 30, 79.8 ], [ 25, 82.6 ], [ 23, 82.6 ] ], [ [ 37, 70.7 ], [ 43, 62.3 ], [ 44, 62.3 ], [ 39, 70.7 ], [ 37, 70.7 ] ], [ [ 48, 51.1 ], [ 51, 45.5 ], [ 53, 45.5 ], [ 50, 51.1 ], [ 48, 51.1 ] ], [ [ 51, 35 ], [ 51, 28.7 ], [ 53, 28.7 ], [ 53, 35 ], [ 51, 35 ] ], [ [ 52, 22.4 ], [ 55, 17.5 ], [ 56, 17.5 ], [ 53, 22.4 ], [ 52, 22.4 ] ], [ [ 58, 12.6 ], [ 62, 7 ], [ 63, 7 ], [ 60, 12.6 ], [ 58, 12.6 ] ], [ [ 0, 3.5 ], [ 0, 93.1 ], [ 64, 93.1 ], [ 64, 0 ], [ 63, 0 ], [ 63, 92.4 ], [ 1, 92.4 ], [ 1, 3.5 ], [ 0, 3.5 ] ] ], n_ = 0; n_ < e_.length; n_++) for (var i_ = 0; i_ < e_[n_].length; i_++) e_[n_][i_][0] /= 10.5, 
    e_[n_][i_][1] /= -14, e_[n_][i_][0] += Qm[0], e_[n_][i_][1] += Qm[1];
    var r_ = {
        "南海诸岛": [ 32, 80 ],
        "广东": [ 0, -10 ],
        "香港": [ 10, 5 ],
        "澳门": [ -10, 10 ],
        "天津": [ 5, 5 ]
    }, o_ = {
        Russia: [ 100, 60 ],
        "United States": [ -99, 38 ],
        "United States of America": [ -99, 38 ]
    }, a_ = [ [ [ 123.45165252685547, 25.73527164402261 ], [ 123.49731445312499, 25.73527164402261 ], [ 123.49731445312499, 25.750734064600884 ], [ 123.45165252685547, 25.750734064600884 ], [ 123.45165252685547, 25.73527164402261 ] ] ], s_ = function() {
        function t(t, e, n) {
            this.type = "geoJSON", this._parsedMap = U(), this._mapName = t, this._specialAreas = n, 
            this._geoJSON = function(t) {
                return T(t) ? "undefined" != typeof JSON && JSON.parse ? JSON.parse(t) : new Function("return (" + t + ");")() : t;
            }(e);
        }
        return t.prototype.load = function(t, e) {
            e = e || "name";
            var n = this._parsedMap.get(e);
            if (!n) {
                var i = this._parseToRegions(e);
                n = this._parsedMap.set(e, {
                    regions: i,
                    boundingRect: Ns(i)
                });
            }
            var r = U(), o = [];
            return y(n.regions, function(e) {
                var n = e.name;
                t && t.hasOwnProperty(n) && (e = e.cloneShallow(n = t[n])), o.push(e), r.set(n, e);
            }), {
                regions: o,
                boundingRect: n.boundingRect || new lp(0, 0, 0, 0),
                regionsMap: r
            };
        }, t.prototype._parseToRegions = function(t) {
            var e, n = this._mapName, i = this._geoJSON;
            try {
                e = i ? Es(i, t) : [];
            } catch (t) {
                throw new Error("Invalid geoJson format\n" + t.message);
            }
            return function(t, e) {
                if ("china" === t) {
                    for (var n = 0; n < e.length; n++) if (e[n].name === t_) return;
                    e.push(new Zm(t_, v(e_, function(t) {
                        return {
                            type: "polygon",
                            exterior: t
                        };
                    }), Qm));
                }
            }(n, e), y(e, function(t) {
                var e = t.name;
                (function(t, e) {
                    if ("china" === t) {
                        var n = r_[e.name];
                        if (n) {
                            var i = e.getCenter();
                            i[0] += n[0] / 10.5, i[1] += -n[1] / 14, e.setCenter(i);
                        }
                    }
                })(n, t), function(t, e) {
                    if ("world" === t) {
                        var n = o_[e.name];
                        if (n) {
                            var i = [ n[0], n[1] ];
                            e.setCenter(i);
                        }
                    }
                }(n, t), function(t, e) {
                    "china" === t && "台湾" === e.name && e.geometries.push({
                        type: "polygon",
                        exterior: a_[0]
                    });
                }(n, t);
                var i = this._specialAreas && this._specialAreas[e];
                i && t.transformTo(i.left, i.top, i.width, i.height);
            }, this), e;
        }, t.prototype.getMapForUser = function() {
            return {
                geoJson: this._geoJSON,
                geoJSON: this._geoJSON,
                specialAreas: this._specialAreas
            };
        }, t;
    }(), l_ = U(), u_ = {
        registerMap: function(t, e, n) {
            if (e.svg) {
                var i = new Jm(t, e.svg);
                l_.set(t, i);
            } else {
                var r = e.geoJson || e.geoJSON;
                r && !e.features ? n = e.specialAreas : r = e;
                i = new s_(t, r, n);
                l_.set(t, i);
            }
        },
        getGeoResource: function(t) {
            return l_.get(t);
        },
        getMapForUser: function(t) {
            var e = l_.get(t);
            return e && "geoJSON" === e.type && e.getMapForUser();
        },
        load: function(t, e, n) {
            var i = l_.get(t);
            if (i) return i.load(e, n);
        }
    }, h_ = V, c_ = y, p_ = M, f_ = k, d_ = p, g_ = "undefined" != typeof window, y_ = 2e3, v_ = 1e3, m_ = 3e3, __ = {
        PROCESSOR: {
            FILTER: 1e3,
            SERIES_FILTER: 800,
            STATISTIC: 5e3
        },
        VISUAL: {
            LAYOUT: v_,
            PROGRESSIVE_LAYOUT: 1100,
            GLOBAL: 2e3,
            CHART: m_,
            POST_CHART_LAYOUT: 4600,
            COMPONENT: 4e3,
            BRUSH: 5e3,
            CHART_ITEM: 4500,
            ARIA: 6e3,
            DECAL: 7e3
        }
    }, x_ = "__flagInMainProcess", w_ = "__optionUpdated", b_ = "__needsUpdateStatus", S_ = /^[a-zA-Z0-9_]+$/, M_ = "__connectUpdateStatus", T_ = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this;
        }
        return n(e, t), e;
    }(Yh), C_ = T_.prototype;
    C_.on = zs("on"), C_.off = zs("off");
    var A_, k_, I_, D_, P_, L_, O_, R_, E_, N_, B_, z_, F_, V_, H_, G_, W_, U_, X_, Y_, q_, j_ = function(t) {
        function e(e, n, i) {
            function r(t, e) {
                return t.__prio - e.__prio;
            }
            var o = t.call(this, new Kv()) || this;
            o._chartsViews = [], o._chartsMap = {}, o._componentsViews = [], o._componentsMap = {}, 
            o._pendingActions = [], i = i || {}, "string" == typeof n && (n = rx[n]), o._dom = e;
            var a = o._zr = Ie(e, {
                renderer: i.renderer || "canvas",
                devicePixelRatio: i.devicePixelRatio,
                width: i.width,
                height: i.height,
                useDirtyRect: null != i.useDirtyRect && i.useDirtyRect
            });
            o._throttledZrFlush = Ca(Eh(a.flush, a), 17), (n = s(n)) && zo(n, !0), o._theme = n, 
            o._locale = Gr(i.locale || Qg), o._coordSysMgr = new Zy();
            var l = o._api = W_(o);
            return Tt(ix, r), Tt(Q_, r), o._scheduler = new Fv(o, l, Q_, ix), o._messageCenter = new T_(), 
            o._labelManager = new dm(), o._initEvents(), o.resize = Eh(o.resize, o), a.animation.on("frame", o._onframe, o), 
            N_(a, o), B_(a, o), G(o), o;
        }
        return n(e, t), e.prototype._onframe = function() {
            if (!this._disposed) {
                q_(this);
                var t = this._scheduler;
                if (this[w_]) {
                    var e = this[w_].silent;
                    this[x_] = !0, A_(this), D_.update.call(this), this._zr.flush(), this[x_] = !1, 
                    this[w_] = !1, R_.call(this, e), E_.call(this, e);
                } else if (t.unfinished) {
                    var n = 1, i = this._model, r = this._api;
                    t.unfinished = !1;
                    do {
                        var o = +new Date();
                        t.performSeriesTasks(i), t.performDataProcessorTasks(i), L_(this, i), t.performVisualTasks(i), 
                        H_(this, this._model, r, "remain"), n -= +new Date() - o;
                    } while (n > 0 && t.unfinished);
                    t.unfinished || this._zr.flush();
                }
            }
        }, e.prototype.getDom = function() {
            return this._dom;
        }, e.prototype.getId = function() {
            return this.id;
        }, e.prototype.getZr = function() {
            return this._zr;
        }, e.prototype.setOption = function(t, e, n) {
            if (!this._disposed) {
                var i, r, o;
                if (f_(e) && (n = e.lazyUpdate, i = e.silent, r = e.replaceMerge, o = e.transition, 
                e = e.notMerge), this[x_] = !0, !this._model || e) {
                    var a = new $y(this._api), s = this._theme, l = this._model = new Vy();
                    l.scheduler = this._scheduler, l.init(null, null, null, s, this._locale, a);
                }
                this._model.setOption(t, {
                    replaceMerge: r
                }, tx), X_(this, o), n ? (this[w_] = {
                    silent: i
                }, this[x_] = !1, this.getZr().wakeUp()) : (A_(this), D_.update.call(this), this._zr.flush(), 
                this[w_] = !1, this[x_] = !1, R_.call(this, i), E_.call(this, i));
            }
        }, e.prototype.setTheme = function() {
            console.error("ECharts#setTheme() is DEPRECATED in ECharts 3.0");
        }, e.prototype.getModel = function() {
            return this._model;
        }, e.prototype.getOption = function() {
            return this._model && this._model.getOption();
        }, e.prototype.getWidth = function() {
            return this._zr.getWidth();
        }, e.prototype.getHeight = function() {
            return this._zr.getHeight();
        }, e.prototype.getDevicePixelRatio = function() {
            return this._zr.painter.dpr || g_ && window.devicePixelRatio || 1;
        }, e.prototype.getRenderedCanvas = function(t) {
            return wh.canvasSupported ? (t = t || {}, this._zr.painter.getRenderedCanvas({
                backgroundColor: t.backgroundColor || this._model.get("backgroundColor"),
                pixelRatio: t.pixelRatio || this.getDevicePixelRatio()
            })) : void 0;
        }, e.prototype.getSvgDataURL = function() {
            if (wh.svgSupported) {
                var t = this._zr;
                return y(t.storage.getDisplayList(), function(t) {
                    t.stopAnimation(null, !0);
                }), t.painter.toDataURL();
            }
        }, e.prototype.getDataURL = function(t) {
            if (!this._disposed) {
                var e = (t = t || {}).excludeComponents, n = this._model, i = [], r = this;
                c_(e, function(t) {
                    n.eachComponent({
                        mainType: t
                    }, function(t) {
                        var e = r._componentsMap[t.__viewId];
                        e.group.ignore || (i.push(e), e.group.ignore = !0);
                    });
                });
                var o = "svg" === this._zr.painter.getType() ? this.getSvgDataURL() : this.getRenderedCanvas(t).toDataURL("image/" + (t && t.type || "png"));
                return c_(i, function(t) {
                    t.group.ignore = !1;
                }), o;
            }
        }, e.prototype.getConnectedDataURL = function(t) {
            if (!this._disposed && wh.canvasSupported) {
                var e = "svg" === t.type, n = this.group, i = Math.min, r = Math.max, o = 1 / 0;
                if (sx[n]) {
                    var a = o, l = o, u = -o, h = -o, c = [], p = t && t.pixelRatio || this.getDevicePixelRatio();
                    y(ax, function(o) {
                        if (o.group === n) {
                            var p = e ? o.getZr().painter.getSvgDom().innerHTML : o.getRenderedCanvas(s(t)), f = o.getDom().getBoundingClientRect();
                            a = i(f.left, a), l = i(f.top, l), u = r(f.right, u), h = r(f.bottom, h), c.push({
                                dom: p,
                                left: f.left,
                                top: f.top
                            });
                        }
                    });
                    var f = (u *= p) - (a *= p), d = (h *= p) - (l *= p), g = Rh(), v = Ie(g, {
                        renderer: e ? "svg" : "canvas"
                    });
                    if (v.resize({
                        width: f,
                        height: d
                    }), e) {
                        var m = "";
                        return c_(c, function(t) {
                            var e = t.left - a, n = t.top - l;
                            m += '<g transform="translate(' + e + "," + n + ')">' + t.dom + "</g>";
                        }), v.painter.getSvgRoot().innerHTML = m, t.connectedBackgroundColor && v.painter.setBackgroundColor(t.connectedBackgroundColor), 
                        v.refreshImmediately(), v.painter.toDataURL();
                    }
                    return t.connectedBackgroundColor && v.add(new ed({
                        shape: {
                            x: 0,
                            y: 0,
                            width: f,
                            height: d
                        },
                        style: {
                            fill: t.connectedBackgroundColor
                        }
                    })), c_(c, function(t) {
                        var e = new $f({
                            style: {
                                x: t.left * p - a,
                                y: t.top * p - l,
                                image: t.dom
                            }
                        });
                        v.add(e);
                    }), v.refreshImmediately(), g.toDataURL("image/" + (t && t.type || "png"));
                }
                return this.getDataURL(t);
            }
        }, e.prototype.convertToPixel = function(t, e) {
            return P_(this, "convertToPixel", t, e);
        }, e.prototype.convertFromPixel = function(t, e) {
            return P_(this, "convertFromPixel", t, e);
        }, e.prototype.containPixel = function(t, e) {
            var n;
            if (!this._disposed) return y(ln(this._model, t), function(t, i) {
                i.indexOf("Models") >= 0 && y(t, function(t) {
                    var r = t.coordinateSystem;
                    if (r && r.containPoint) n = n || !!r.containPoint(e); else if ("seriesModels" === i) {
                        var o = this._chartsMap[t.__viewId];
                        o && o.containPoint && (n = n || o.containPoint(e, t));
                    }
                }, this);
            }, this), !!n;
        }, e.prototype.getVisual = function(t, e) {
            var n = ln(this._model, t, {
                defaultMainType: "series"
            }), i = n.seriesModel.getData(), r = n.hasOwnProperty("dataIndexInside") ? n.dataIndexInside : n.hasOwnProperty("dataIndex") ? i.indexOfRawIndex(n.dataIndex) : null;
            return null != r ? function(t, e, n) {
                switch (n) {
                  case "color":
                    return t.getItemVisual(e, "style")[t.getVisual("drawType")];

                  case "opacity":
                    return t.getItemVisual(e, "style").opacity;

                  case "symbol":
                  case "symbolSize":
                  case "liftZ":
                    return t.getItemVisual(e, n);
                }
            }(i, r, e) : Fa(i, e);
        }, e.prototype.getViewOfComponentModel = function(t) {
            return this._componentsMap[t.__viewId];
        }, e.prototype.getViewOfSeriesModel = function(t) {
            return this._chartsMap[t.__viewId];
        }, e.prototype._initEvents = function() {
            var t = this;
            c_(K_, function(e) {
                var n = function(n) {
                    var i, r = t.getModel(), o = n.target;
                    if ("globalout" === e ? i = {} : o && ts(o, function(t) {
                        var e = sd(t);
                        if (e && null != e.dataIndex) {
                            var n = e.dataModel || r.getSeriesByIndex(e.seriesIndex);
                            return i = n && n.getDataParams(e.dataIndex, e.dataType) || {}, !0;
                        }
                        return e.eventData ? (i = h({}, e.eventData), !0) : void 0;
                    }, !0), i) {
                        var a = i.componentType, s = i.componentIndex;
                        ("markLine" === a || "markPoint" === a || "markArea" === a) && (a = "series", s = i.seriesIndex);
                        var l = a && null != s && r.getComponent(a, s), u = l && t["series" === l.mainType ? "_chartsMap" : "_componentsMap"][l.__viewId];
                        i.event = n, i.type = e, t._$eventProcessor.eventInfo = {
                            targetEl: o,
                            packedEvent: i,
                            model: l,
                            view: u
                        }, t.trigger(e, i);
                    }
                };
                n.zrEventfulCallAtLast = !0, t._zr.on(e, n, t);
            }), c_(J_, function(e, n) {
                t._messageCenter.on(n, function(t) {
                    this.trigger(n, t);
                }, t);
            }), c_([ "selectchanged" ], function(e) {
                t._messageCenter.on(e, function(t) {
                    this.trigger(e, t);
                }, t);
            }), function(t, e, n) {
                t.on("selectchanged", function(t) {
                    var i = n.getModel();
                    t.isFromClick ? (Qa("map", "selectchanged", e, i, t), Qa("pie", "selectchanged", e, i, t)) : "select" === t.fromAction ? (Qa("map", "selected", e, i, t), 
                    Qa("pie", "selected", e, i, t)) : "unselect" === t.fromAction && (Qa("map", "unselected", e, i, t), 
                    Qa("pie", "unselected", e, i, t));
                });
            }(this._messageCenter, this, this._api);
        }, e.prototype.isDisposed = function() {
            return this._disposed;
        }, e.prototype.clear = function() {
            this._disposed || this.setOption({
                series: []
            }, !0);
        }, e.prototype.dispose = function() {
            if (!this._disposed) {
                this._disposed = !0, cn(this.getDom(), hx, "");
                var t = this._api, e = this._model;
                c_(this._componentsViews, function(n) {
                    n.dispose(e, t);
                }), c_(this._chartsViews, function(n) {
                    n.dispose(e, t);
                }), this._zr.dispose(), delete ax[this.id];
            }
        }, e.prototype.resize = function(t) {
            if (!this._disposed) {
                this._zr.resize(t);
                var e = this._model;
                if (this._loadingFX && this._loadingFX.resize(), e) {
                    var n = e.resetOption("media"), i = t && t.silent;
                    this[w_] && (null == i && (i = this[w_].silent), n = !0, this[w_] = !1), this[x_] = !0, 
                    n && A_(this), D_.update.call(this, {
                        type: "resize",
                        animation: h({
                            duration: 0
                        }, t && t.animation)
                    }), this[x_] = !1, R_.call(this, i), E_.call(this, i);
                }
            }
        }, e.prototype.showLoading = function(t, e) {
            if (!this._disposed && (f_(t) && (e = t, t = ""), t = t || "default", this.hideLoading(), 
            ox[t])) {
                var n = ox[t](this._api, e), i = this._zr;
                this._loadingFX = n, i.add(n);
            }
        }, e.prototype.hideLoading = function() {
            this._disposed || (this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null);
        }, e.prototype.makeActionFromEvent = function(t) {
            var e = h({}, t);
            return e.type = J_[t.type], e;
        }, e.prototype.dispatchAction = function(t, e) {
            if (!this._disposed && (f_(e) || (e = {
                silent: !!e
            }), $_[t.type] && this._model)) {
                if (this[x_]) return void this._pendingActions.push(t);
                var n = e.silent;
                O_.call(this, t, n);
                var i = e.flush;
                i ? this._zr.flush() : !1 !== i && wh.browser.weChat && this._throttledZrFlush(), 
                R_.call(this, n), E_.call(this, n);
            }
        }, e.prototype.updateLabelLayout = function() {
            var t = this._labelManager;
            t.updateLayoutConfig(this._api), t.layout(this._api), t.processLabelsOverall();
        }, e.prototype.appendData = function(t) {
            if (!this._disposed) {
                var e = t.seriesIndex;
                this.getModel().getSeriesByIndex(e).appendData(t), this._scheduler.unfinished = !0, 
                this.getZr().wakeUp();
            }
        }, e.internalField = function() {
            function t(t) {
                for (var e = [], n = t.currentStates, i = 0; i < n.length; i++) {
                    var r = n[i];
                    "emphasis" !== r && "blur" !== r && "select" !== r && e.push(r);
                }
                t.selected && t.states.select && e.push("select"), t.hoverState === fd && t.states.emphasis ? e.push("emphasis") : t.hoverState === pd && t.states.blur && e.push("blur"), 
                t.useStates(e);
            }
            function e(t, e) {
                t.preventAutoZ || function t(e, n, i, r) {
                    var o = e.getTextContent(), a = e.getTextGuideLine();
                    if (e.isGroup) for (var s = e.childrenRef(), l = 0; l < s.length; l++) r = Math.max(t(s[l], n, i, r), r); else e.z = n, 
                    e.zlevel = i, r = Math.max(e.z2, r);
                    if (o && (o.z = n, o.zlevel = i, isFinite(r) && (o.z2 = r + 2)), a) {
                        var u = e.textGuideLineConfig;
                        a.z = n, a.zlevel = i, isFinite(r) && (a.z2 = r + (u && u.showAbove ? 1 : -1));
                    }
                    return r;
                }(e.group, t.get("z") || 0, t.get("zlevel") || 0, -1 / 0);
            }
            function i(t, e) {
                e.group.traverse(function(t) {
                    if (!wr(t)) {
                        var e = t.getTextContent(), n = t.getTextGuideLine();
                        t.stateTransition && (t.stateTransition = null), e && e.stateTransition && (e.stateTransition = null), 
                        n && n.stateTransition && (n.stateTransition = null), t.hasState() ? (t.prevStates = t.currentStates, 
                        t.clearStates()) : t.prevStates && (t.prevStates = null);
                    }
                });
            }
            function r(e, n) {
                var i = e.getModel("stateAnimation"), r = e.isAnimationEnabled(), o = i.get("duration"), a = o > 0 ? {
                    duration: o,
                    delay: i.get("delay"),
                    easing: i.get("easing")
                } : null;
                n.group.traverse(function(e) {
                    if (e.states && e.states.emphasis) {
                        if (wr(e)) return;
                        if (e instanceof Yf && function(t) {
                            var e = hd(t);
                            e.normalFill = t.style.fill, e.normalStroke = t.style.stroke;
                            var n = t.states.select || {};
                            e.selectFill = n.style && n.style.fill || null, e.selectStroke = n.style && n.style.stroke || null;
                        }(e), e.__dirty) {
                            var n = e.prevStates;
                            n && e.useStates(n);
                        }
                        if (r) {
                            e.stateTransition = a;
                            var i = e.getTextContent(), o = e.getTextGuideLine();
                            i && (i.stateTransition = a), o && (o.stateTransition = a);
                        }
                        e.__dirty && t(e);
                    }
                });
            }
            A_ = function(t) {
                var e = t._scheduler;
                e.restorePipelines(t._model), e.prepareStageTasks(), k_(t, !0), k_(t, !1), e.plan();
            }, k_ = function(t, e) {
                function n(t) {
                    var n = t.__requireNewView;
                    t.__requireNewView = !1;
                    var u = "_ec_" + t.id + "_" + t.type, h = !n && a[u];
                    if (!h) {
                        var c = pn(t.type);
                        (h = new (e ? bv.getClass(c.main, c.sub) : Tv.getClass(c.sub))()).init(i, l), a[u] = h, 
                        o.push(h), s.add(h.group);
                    }
                    t.__viewId = h.__id = u, h.__alive = !0, h.__model = t, h.group.__ecComponentInfo = {
                        mainType: t.mainType,
                        index: t.componentIndex
                    }, !e && r.prepareView(h, t, i, l);
                }
                for (var i = t._model, r = t._scheduler, o = e ? t._componentsViews : t._chartsViews, a = e ? t._componentsMap : t._chartsMap, s = t._zr, l = t._api, u = 0; u < o.length; u++) o[u].__alive = !1;
                e ? i.eachComponent(function(t, e) {
                    "series" !== t && n(e);
                }) : i.eachSeries(n);
                for (u = 0; u < o.length; ) {
                    var h = o[u];
                    h.__alive ? u++ : (!e && h.renderTask.dispose(), s.remove(h.group), h.dispose(i, l), 
                    o.splice(u, 1), a[h.__id] === h && delete a[h.__id], h.__id = h.group.__ecComponentInfo = null);
                }
            }, I_ = function(t, e, n, i, r) {
                function o(i) {
                    i && i.__alive && i[e] && i[e](i.__model, a, t._api, n);
                }
                var a = t._model;
                if (a.setUpdatePayload(n), i) {
                    var s = {};
                    s[i + "Id"] = n[i + "Id"], s[i + "Index"] = n[i + "Index"], s[i + "Name"] = n[i + "Name"];
                    var l = {
                        mainType: i,
                        query: s
                    };
                    r && (l.subType = r);
                    var u, h = n.excludeSeriesId;
                    null != h && (u = U(), c_(Ke(h), function(t) {
                        var e = nn(t, null);
                        null != e && u.set(e, !0);
                    })), Zi(n) && Fi(t._api), a && a.eachComponent(l, function(e) {
                        if (!u || null == u.get(e.id)) {
                            if (Zi(n)) if (e instanceof wv) n.type !== md || n.notBlur || function(t, e, n) {
                                var i = t.seriesIndex, r = t.getData(e.dataType), o = an(r, e);
                                o = (S(o) ? o[0] : o) || 0;
                                var a = r.getItemGraphicEl(o);
                                if (!a) for (var s = r.count(), l = 0; !a && s > l; ) a = r.getItemGraphicEl(l++);
                                if (a) {
                                    var u = sd(a);
                                    Vi(i, u.focus, u.blurScope, n);
                                } else {
                                    var h = t.get([ "emphasis", "focus" ]), c = t.get([ "emphasis", "blurScope" ]);
                                    null != h && Vi(i, h, c, n);
                                }
                            }(e, n, t._api); else {
                                var r = Gi(e.mainType, e.componentIndex, n.name, t._api), a = r.focusSelf, s = r.dispatchers;
                                n.type === md && a && !n.notBlur && Hi(e.mainType, e.componentIndex, t._api), s && c_(s, function(t) {
                                    n.type === md ? Li(t) : Oi(t);
                                });
                            } else ji(n) && e instanceof wv && (function(t, e) {
                                if (ji(e)) {
                                    var n = e.dataType, i = an(t.getData(n), e);
                                    S(i) || (i = [ i ]), t[e.type === bd ? "toggleSelect" : e.type === xd ? "select" : "unselect"](i, n);
                                }
                            }(e, n, t._api), Wi(e), Y_(t));
                            o(t["series" === i ? "_chartsMap" : "_componentsMap"][e.__viewId]);
                        }
                    }, t);
                } else c_([].concat(t._componentsViews).concat(t._chartsViews), o);
            }, D_ = {
                prepareAndUpdate: function(t) {
                    A_(this), D_.update.call(this, t);
                },
                update: function(t) {
                    var e = this._model, n = this._api, i = this._zr, r = this._coordSysMgr, o = this._scheduler;
                    if (e) {
                        e.setUpdatePayload(t), o.restoreData(e, t), o.performSeriesTasks(e), r.create(e, n), 
                        o.performDataProcessorTasks(e, t), L_(this, e), r.update(e, n), z_(e), o.performVisualTasks(e, t), 
                        F_(this, e, n, t);
                        var a = e.get("backgroundColor") || "transparent", s = e.get("darkMode");
                        if (wh.canvasSupported) i.setBackgroundColor(a), null != s && "auto" !== s && i.setDarkMode(s); else {
                            var l = Bt(a);
                            a = Wt(l, "rgb"), 0 === l[3] && (a = "transparent");
                        }
                        G_(e, n);
                    }
                },
                updateTransform: function(t) {
                    var e = this, n = this._model, i = this._api;
                    if (n) {
                        n.setUpdatePayload(t);
                        var r = [];
                        n.eachComponent(function(o, a) {
                            if ("series" !== o) {
                                var s = e.getViewOfComponentModel(a);
                                if (s && s.__alive) if (s.updateTransform) {
                                    var l = s.updateTransform(a, n, i, t);
                                    l && l.update && r.push(s);
                                } else r.push(s);
                            }
                        });
                        var o = U();
                        n.eachSeries(function(r) {
                            var a = e._chartsMap[r.__viewId];
                            if (a.updateTransform) {
                                var s = a.updateTransform(r, n, i, t);
                                s && s.update && o.set(r.uid, 1);
                            } else o.set(r.uid, 1);
                        }), z_(n), this._scheduler.performVisualTasks(n, t, {
                            setDirty: !0,
                            dirtyMap: o
                        }), H_(this, n, i, t, o), G_(n, this._api);
                    }
                },
                updateView: function(t) {
                    var e = this._model;
                    e && (e.setUpdatePayload(t), Tv.markUpdateMethod(t, "updateView"), z_(e), this._scheduler.performVisualTasks(e, t, {
                        setDirty: !0
                    }), F_(this, this._model, this._api, t), G_(e, this._api));
                },
                updateVisual: function(t) {
                    var e = this, n = this._model;
                    n && (n.setUpdatePayload(t), n.eachSeries(function(t) {
                        t.getData().clearAllVisual();
                    }), Tv.markUpdateMethod(t, "updateVisual"), z_(n), this._scheduler.performVisualTasks(n, t, {
                        visualType: "visual",
                        setDirty: !0
                    }), n.eachComponent(function(i, r) {
                        if ("series" !== i) {
                            var o = e.getViewOfComponentModel(r);
                            o && o.__alive && o.updateVisual(r, n, e._api, t);
                        }
                    }), n.eachSeries(function(i) {
                        e._chartsMap[i.__viewId].updateVisual(i, n, e._api, t);
                    }), G_(n, this._api));
                },
                updateLayout: function(t) {
                    D_.update.call(this, t);
                }
            }, P_ = function(t, e, n, i) {
                if (!t._disposed) for (var r, o = t._model, a = t._coordSysMgr.getCoordinateSystems(), s = ln(o, n), l = 0; l < a.length; l++) {
                    var u = a[l];
                    if (u[e] && null != (r = u[e](o, s, i))) return r;
                }
            }, L_ = function(t, e) {
                var n = t._chartsMap, i = t._scheduler;
                e.eachSeries(function(t) {
                    i.updateStreamModes(t, n[t.__viewId]);
                });
            }, O_ = function(t, e) {
                var n = this, i = this.getModel(), r = t.type, o = t.escapeConnect, a = $_[r], s = a.actionInfo, l = (s.update || "update").split(":"), u = l.pop(), p = null != l[0] && pn(l[0]);
                this[x_] = !0;
                var f = [ t ], d = !1;
                t.batch && (d = !0, f = v(t.batch, function(e) {
                    return (e = c(h({}, e), t)).batch = null, e;
                }));
                var g, y = [], m = ji(t), _ = Zi(t);
                if (c_(f, function(e) {
                    if ((g = (g = a.action(e, n._model, n._api)) || h({}, e)).type = s.event || g.type, 
                    y.push(g), _) {
                        var i = un(t), r = i.queryOptionMap, o = i.mainTypeSpecified ? r.keys()[0] : "series";
                        I_(n, u, e, o), Y_(n);
                    } else m ? (I_(n, u, e, "series"), Y_(n)) : p && I_(n, u, e, p.main, p.sub);
                }), "none" === u || _ || m || p || (this[w_] ? (A_(this), D_.update.call(this, t), 
                this[w_] = !1) : D_[u].call(this, t)), g = d ? {
                    type: s.event || r,
                    escapeConnect: o,
                    batch: y
                } : y[0], this[x_] = !1, !e) {
                    var x = this._messageCenter;
                    if (x.trigger(g.type, g), m) {
                        var w = {
                            type: "selectchanged",
                            escapeConnect: o,
                            selected: Ui(i),
                            isFromClick: t.isFromClick || !1,
                            fromAction: t.type,
                            fromActionPayload: t
                        };
                        x.trigger(w.type, w);
                    }
                }
            }, R_ = function(t) {
                for (var e = this._pendingActions; e.length; ) {
                    var n = e.shift();
                    O_.call(this, n, t);
                }
            }, E_ = function(t) {
                !t && this.trigger("updated");
            }, N_ = function(t, e) {
                t.on("rendered", function(n) {
                    e.trigger("rendered", n), !t.animation.isFinished() || e[w_] || e._scheduler.unfinished || e._pendingActions.length || e.trigger("finished");
                });
            }, B_ = function(t, e) {
                t.on("mouseover", function(t) {
                    var n = ts(t.target, qi);
                    n && (function(t, e, n) {
                        var i = sd(t), r = Gi(i.componentMainType, i.componentIndex, i.componentHighDownName, n), o = r.dispatchers, a = r.focusSelf;
                        o ? (a && Hi(i.componentMainType, i.componentIndex, n), y(o, function(t) {
                            return Di(t, e);
                        })) : (Vi(i.seriesIndex, i.focus, i.blurScope, n), "self" === i.focus && Hi(i.componentMainType, i.componentIndex, n), 
                        Di(t, e));
                    }(n, t, e._api), Y_(e));
                }).on("mouseout", function(t) {
                    var n = ts(t.target, qi);
                    n && (function(t, e, n) {
                        Fi(n);
                        var i = sd(t), r = Gi(i.componentMainType, i.componentIndex, i.componentHighDownName, n).dispatchers;
                        r ? y(r, function(t) {
                            return Pi(t, e);
                        }) : Pi(t, e);
                    }(n, t, e._api), Y_(e));
                }).on("click", function(t) {
                    var n = ts(t.target, function(t) {
                        return null != sd(t).dataIndex;
                    }, !0);
                    if (n) {
                        var i = n.selected ? "unselect" : "select", r = sd(n);
                        e._api.dispatchAction({
                            type: i,
                            dataType: r.dataType,
                            dataIndexInside: r.dataIndex,
                            seriesIndex: r.seriesIndex,
                            isFromClick: !0
                        });
                    }
                });
            }, z_ = function(t) {
                t.clearColorPalette(), t.eachSeries(function(t) {
                    t.clearColorPalette();
                });
            }, F_ = function(t, e, n, i) {
                V_(t, e, n, i), c_(t._chartsViews, function(t) {
                    t.__alive = !1;
                }), H_(t, e, n, i), c_(t._chartsViews, function(t) {
                    t.__alive || t.remove(e, n);
                });
            }, V_ = function(t, n, o, a, s) {
                c_(s || t._componentsViews, function(t) {
                    var s = t.__model;
                    i(0, t), t.render(s, n, o, a), e(s, t), r(s, t);
                });
            }, H_ = function(t, n, o, a, s) {
                var l = t._scheduler, u = t._labelManager;
                u.clearLabels();
                var h = !1;
                n.eachSeries(function(e) {
                    var n = t._chartsMap[e.__viewId];
                    n.__alive = !0;
                    var r = n.renderTask;
                    l.updatePayload(r, a), i(0, n), s && s.get(e.uid) && r.dirty(), r.perform(l.getPerformArgs(r)) && (h = !0), 
                    e.__transientTransitionOpt = null, n.group.silent = !!e.get("silent"), function(t, e) {
                        var n = t.get("blendMode") || null;
                        e.group.traverse(function(t) {
                            t.isGroup || (t.style.blend = n), t.eachPendingDisplayable && t.eachPendingDisplayable(function(t) {
                                t.style.blend = n;
                            });
                        });
                    }(e, n), Wi(e), u.addLabelsOfSeries(n);
                }), l.unfinished = h || l.unfinished, u.updateLayoutConfig(o), u.layout(o), u.processLabelsOverall(), 
                n.eachSeries(function(n) {
                    var i = t._chartsMap[n.__viewId];
                    e(n, i), r(n, i);
                }), function(t, e) {
                    var n = t._zr.storage, i = 0;
                    n.traverse(function(t) {
                        t.isGroup || i++;
                    }), i > e.get("hoverLayerThreshold") && !wh.node && !wh.worker && e.eachSeries(function(e) {
                        if (!e.preventUsingHoverLayer) {
                            var n = t._chartsMap[e.__viewId];
                            n.__alive && n.group.traverse(function(t) {
                                t.states.emphasis && (t.states.emphasis.hoverLayer = !0);
                            });
                        }
                    });
                }(t, n);
            }, G_ = function(t, e) {
                c_(nx, function(n) {
                    n(t, e);
                });
            }, Y_ = function(t) {
                t[b_] = !0, t.getZr().wakeUp();
            }, q_ = function(e) {
                e[b_] && (e.getZr().storage.traverse(function(e) {
                    wr(e) || t(e);
                }), e[b_] = !1);
            }, W_ = function(t) {
                return new (function(e) {
                    function i() {
                        return null !== e && e.apply(this, arguments) || this;
                    }
                    return n(i, e), i.prototype.getCoordinateSystems = function() {
                        return t._coordSysMgr.getCoordinateSystems();
                    }, i.prototype.getComponentByElement = function(e) {
                        for (;e; ) {
                            var n = e.__ecComponentInfo;
                            if (null != n) return t._model.getComponent(n.mainType, n.index);
                            e = e.parent;
                        }
                    }, i.prototype.enterEmphasis = function(e, n) {
                        Li(e, n), Y_(t);
                    }, i.prototype.leaveEmphasis = function(e, n) {
                        Oi(e, n), Y_(t);
                    }, i.prototype.enterBlur = function(e) {
                        Ri(e), Y_(t);
                    }, i.prototype.leaveBlur = function(e) {
                        Ei(e), Y_(t);
                    }, i.prototype.enterSelect = function(e) {
                        Ni(e), Y_(t);
                    }, i.prototype.leaveSelect = function(e) {
                        Bi(e), Y_(t);
                    }, i.prototype.getModel = function() {
                        return t.getModel();
                    }, i.prototype.getViewOfComponentModel = function(e) {
                        return t.getViewOfComponentModel(e);
                    }, i.prototype.getViewOfSeriesModel = function(e) {
                        return t.getViewOfSeriesModel(e);
                    }, i;
                }(qy))(t);
            }, U_ = function(t) {
                function e(t, e) {
                    for (var n = 0; n < t.length; n++) {
                        t[n][M_] = e;
                    }
                }
                c_(J_, function(n, i) {
                    t._messageCenter.on(i, function(n) {
                        if (sx[t.group] && 0 !== t[M_]) {
                            if (n && n.escapeConnect) return;
                            var i = t.makeActionFromEvent(n), r = [];
                            c_(ax, function(e) {
                                e !== t && e.group === t.group && r.push(e);
                            }), e(r, 0), c_(r, function(t) {
                                1 !== t[M_] && t.dispatchAction(i);
                            }), e(r, 2);
                        }
                    });
                });
            }, X_ = function(t, e) {
                var n = t._model;
                y(Ke(e), function(t) {
                    var e, i = t.from, r = t.to;
                    null == r && Ze(e);
                    var o = {
                        includeMainTypes: [ "series" ],
                        enableAll: !1,
                        enableNone: !1
                    }, a = i ? ln(n, i, o) : null, s = ln(n, r, o).seriesModel;
                    null == s && (e = ""), a && a.seriesModel !== s && (e = ""), null != e && Ze(e), 
                    s.__transientTransitionOpt = {
                        from: i ? i.dimension : null,
                        to: r.dimension,
                        dividingMethod: t.dividingMethod
                    };
                });
            };
        }(), e;
    }(Yh), Z_ = j_.prototype;
    Z_.on = Bs("on"), Z_.off = Bs("off"), Z_.one = function(t, e, n) {
        var i = this;
        this.on.call(this, t, function n() {
            for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
            e && e.apply && e.apply(this, r), i.off(t, n);
        }, n);
    };
    var K_ = [ "click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu" ], $_ = {}, J_ = {}, Q_ = [], tx = [], ex = [], nx = [], ix = [], rx = {}, ox = {}, ax = {}, sx = {}, lx = +new Date() - 0, ux = +new Date() - 0, hx = "_echarts_instance_", cx = Vs, px = [], fx = function(t) {
        var e = (t = s(t)).type;
        e || Ze("");
        var n = e.split(":");
        2 !== n.length && Ze("");
        var i = !1;
        "echarts" === n[0] && (e = n[1], i = !0), t.__isBuiltIn = i, mv.set(e, t);
    };
    Ks(2e3, Rv), Ks(4500, Nv), Ks(4500, Bv), Ks(2e3, $v), Ks(4500, {
        createOnAllSeries: !0,
        performRawSeries: !0,
        reset: function(t, e) {
            if (t.hasSymbolVisual && !e.isSeriesFiltered(t)) return {
                dataEach: t.getData().hasItemOption ? function(t, e) {
                    var n = t.getItemModel(e), i = n.getShallow("symbol", !0), r = n.getShallow("symbolSize", !0), o = n.getShallow("symbolRotate", !0), a = n.getShallow("symbolOffset", !0), s = n.getShallow("symbolKeepAspect", !0);
                    null != i && t.setItemVisual(e, "symbol", i), null != r && t.setItemVisual(e, "symbolSize", r), 
                    null != o && t.setItemVisual(e, "symbolRotate", o), null != a && t.setItemVisual(e, "symbolOffset", a), 
                    null != s && t.setItemVisual(e, "symbolKeepAspect", s);
                } : null
            };
        }
    }), Ks(7e3, function(t, e) {
        t.eachRawSeries(function(n) {
            if (!t.isSeriesFiltered(n)) {
                var i = n.getData();
                i.hasItemVisual() && i.each(function(t) {
                    var n = i.getItemVisual(t, "decal");
                    n && (i.ensureUniqueItemVisual(t, "style").decal = vs(n, e));
                });
                var r = i.getVisual("decal");
                if (r) i.getVisual("style").decal = vs(r, e);
            }
        });
    }), Ws(zo), Us(900, function(t) {
        var e = U();
        t.eachSeries(function(t) {
            var n = t.get("stack");
            if (n) {
                var i = e.get(n) || e.set(n, []), r = t.getData(), o = {
                    stackResultDimension: r.getCalculationInfo("stackResultDimension"),
                    stackedOverDimension: r.getCalculationInfo("stackedOverDimension"),
                    stackedDimension: r.getCalculationInfo("stackedDimension"),
                    stackedByDimension: r.getCalculationInfo("stackedByDimension"),
                    isStackedByIndex: r.getCalculationInfo("isStackedByIndex"),
                    data: r,
                    seriesModel: t
                };
                if (!o.stackedDimension || !o.isStackedByIndex && !o.stackedByDimension) return;
                i.length && r.setCalculationInfo("stackedOnSeries", i[i.length - 1].seriesModel), 
                i.push(o);
            }
        }), e.each(Fo);
    }), Js("default", function(t, e) {
        c(e = e || {}, {
            text: "loading",
            textColor: "#000",
            fontSize: 12,
            fontWeight: "normal",
            fontStyle: "normal",
            fontFamily: "sans-serif",
            maskColor: "rgba(255, 255, 255, 0.8)",
            showSpinner: !0,
            color: "#5470c6",
            spinnerRadius: 10,
            lineWidth: 5,
            zlevel: 0
        });
        var n = new mp(), i = new ed({
            style: {
                fill: e.maskColor
            },
            zlevel: e.zlevel,
            z: 1e4
        });
        n.add(i);
        var r, o = new rd({
            style: {
                text: e.text,
                fill: e.textColor,
                fontSize: e.fontSize,
                fontWeight: e.fontWeight,
                fontStyle: e.fontStyle,
                fontFamily: e.fontFamily
            },
            zlevel: e.zlevel,
            z: 10001
        }), a = new ed({
            style: {
                fill: "none"
            },
            textContent: o,
            textConfig: {
                position: "right",
                distance: 10
            },
            zlevel: e.zlevel,
            z: 10001
        });
        return n.add(a), e.showSpinner && ((r = new fg({
            shape: {
                startAngle: -zv / 2,
                endAngle: -zv / 2 + .1,
                r: e.spinnerRadius
            },
            style: {
                stroke: e.color,
                lineCap: "round",
                lineWidth: e.lineWidth
            },
            zlevel: e.zlevel,
            z: 10001
        })).animateShape(!0).when(1e3, {
            endAngle: 3 * zv / 2
        }).start("circularInOut"), r.animateShape(!0).when(1e3, {
            startAngle: 3 * zv / 2
        }).delay(300).start("circularInOut"), n.add(r)), n.resize = function() {
            var n = o.getBoundingRect().width, s = e.showSpinner ? e.spinnerRadius : 0, l = (t.getWidth() - 2 * s - (e.showSpinner && n ? 10 : 0) - n) / 2 - (e.showSpinner && n ? 0 : 5 + n / 2) + (e.showSpinner ? 0 : n / 2) + (n ? 0 : s), u = t.getHeight() / 2;
            e.showSpinner && r.setShape({
                cx: l,
                cy: u
            }), a.setShape({
                x: l - s,
                y: u - s,
                width: 2 * s,
                height: 2 * s
            }), i.setShape({
                x: 0,
                y: 0,
                width: t.getWidth(),
                height: t.getHeight()
            });
        }, n.resize(), n;
    }), qs({
        type: md,
        event: md,
        update: md
    }, q), qs({
        type: _d,
        event: _d,
        update: _d
    }, q), qs({
        type: xd,
        event: xd,
        update: xd
    }, q), qs({
        type: wd,
        event: wd,
        update: wd
    }, q), qs({
        type: bd,
        event: bd,
        update: bd
    }, q), Gs("light", Uv), Gs("dark", Zv);
    var dx, gx, yx, vx, mx, _x, xx, bx, Sx, Mx, Tx, Cx, Ax, kx, Ix = function() {
        function t(t, e, n, i, r, o) {
            this._old = t, this._new = e, this._oldKeyGetter = n || el, this._newKeyGetter = i || el, 
            this.context = r, this._diffModeMultiple = "multiple" === o;
        }
        return t.prototype.add = function(t) {
            return this._add = t, this;
        }, t.prototype.update = function(t) {
            return this._update = t, this;
        }, t.prototype.updateManyToOne = function(t) {
            return this._updateManyToOne = t, this;
        }, t.prototype.updateOneToMany = function(t) {
            return this._updateOneToMany = t, this;
        }, t.prototype.remove = function(t) {
            return this._remove = t, this;
        }, t.prototype.execute = function() {
            this[this._diffModeMultiple ? "_executeMultiple" : "_executeOneToOne"]();
        }, t.prototype._executeOneToOne = function() {
            var t = this._old, e = this._new, n = {}, i = new Array(t.length), r = new Array(e.length);
            this._initIndexMap(t, null, i, "_oldKeyGetter"), this._initIndexMap(e, n, r, "_newKeyGetter");
            for (var o = 0; o < t.length; o++) {
                var a = i[o], s = n[a], l = tl(s);
                if (l > 1) {
                    var u = s.shift();
                    1 === s.length && (n[a] = s[0]), this._update && this._update(u, o);
                } else 1 === l ? (n[a] = null, this._update && this._update(s, o)) : this._remove && this._remove(o);
            }
            this._performRestAdd(r, n);
        }, t.prototype._executeMultiple = function() {
            var t = this._old, e = this._new, n = {}, i = {}, r = [], o = [];
            this._initIndexMap(t, n, r, "_oldKeyGetter"), this._initIndexMap(e, i, o, "_newKeyGetter");
            for (var a = 0; a < r.length; a++) {
                var s = r[a], l = n[s], u = i[s], h = tl(l), c = tl(u);
                if (h > 1 && 1 === c) this._updateManyToOne && this._updateManyToOne(u, l), i[s] = null; else if (1 === h && c > 1) this._updateOneToMany && this._updateOneToMany(u, l), 
                i[s] = null; else if (1 === h && 1 === c) this._update && this._update(u, l), i[s] = null; else if (h > 1) for (var p = 0; h > p; p++) this._remove && this._remove(l[p]); else this._remove && this._remove(l);
            }
            this._performRestAdd(o, i);
        }, t.prototype._performRestAdd = function(t, e) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n], r = e[i], o = tl(r);
                if (o > 1) for (var a = 0; o > a; a++) this._add && this._add(r[a]); else 1 === o && this._add && this._add(r);
                e[i] = null;
            }
        }, t.prototype._initIndexMap = function(t, e, n, i) {
            for (var r = this._diffModeMultiple, o = 0; o < t.length; o++) {
                var a = "_ec_" + this[i](t[o], o);
                if (r || (n[o] = a), e) {
                    var s = e[a], l = tl(s);
                    0 === l ? (e[a] = o, r && n.push(a)) : 1 === l ? e[a] = [ s, o ] : s.push(o);
                }
            }
        }, t;
    }(), Dx = function(t) {
        this.otherDims = {}, null != t && h(this, t);
    }, Px = Math.floor, Lx = k, Ox = v, Rx = "undefined", Ex = {
        float: ("undefined" == typeof Float64Array ? "undefined" : t(Float64Array)) === Rx ? Array : Float64Array,
        int: ("undefined" == typeof Int32Array ? "undefined" : t(Int32Array)) === Rx ? Array : Int32Array,
        ordinal: Array,
        number: Array,
        time: Array
    }, Nx = ("undefined" == typeof Uint32Array ? "undefined" : t(Uint32Array)) === Rx ? Array : Uint32Array, Bx = ("undefined" == typeof Int32Array ? "undefined" : t(Int32Array)) === Rx ? Array : Int32Array, zx = ("undefined" == typeof Uint16Array ? "undefined" : t(Uint16Array)) === Rx ? Array : Uint16Array, Fx = [ "hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_rawData", "_dimValueGetter", "_count", "_rawCount", "_nameDimIdx", "_idDimIdx", "_nameRepeatCount" ], Vx = [ "_extent", "_approximateExtent", "_rawExtent" ], Hx = function() {
        function e(t, e) {
            this.type = "list", this._count = 0, this._rawCount = 0, this._storage = {}, this._storageArr = [], 
            this._nameList = [], this._idList = [], this._visual = {}, this._layout = {}, this._itemVisuals = [], 
            this._itemLayouts = [], this._graphicEls = [], this._rawExtent = {}, this._extent = {}, 
            this._approximateExtent = {}, this._calculationInfo = {}, this.hasItemOption = !0, 
            this.TRANSFERABLE_METHODS = [ "cloneShallow", "downSample", "lttbDownSample", "map" ], 
            this.CHANGABLE_METHODS = [ "filterSelf", "selectRange" ], this.DOWNSAMPLE_METHODS = [ "downSample", "lttbDownSample" ], 
            this.getRawIndex = mx, t = t || [ "x", "y" ];
            for (var n = {}, i = [], r = {}, o = 0; o < t.length; o++) {
                var a = t[o], s = T(a) ? new Dx({
                    name: a
                }) : a instanceof Dx ? a : new Dx(a), l = s.name;
                s.type = s.type || "float", s.coordDim || (s.coordDim = l, s.coordDimIndex = 0);
                var u = s.otherDims = s.otherDims || {};
                i.push(l), n[l] = s, s.index = o, s.createInvertedIndices && (r[l] = []), 0 === u.itemName && (this._nameDimIdx = o, 
                this._nameOrdinalMeta = s.ordinalMeta), 0 === u.itemId && (this._idDimIdx = o, this._idOrdinalMeta = s.ordinalMeta);
            }
            this.dimensions = i, this._dimensionInfos = n, this.hostModel = e, this._dimensionsSummary = function(t) {
                var e = {}, n = e.encode = {}, i = U(), r = [], o = [], a = e.userOutput = {
                    dimensionNames: t.dimensions.slice(),
                    encode: {}
                };
                y(t.dimensions, function(e) {
                    var s = t.getDimensionInfo(e), l = s.coordDim;
                    if (l) {
                        var u = s.coordDimIndex;
                        nl(n, l)[u] = e, s.isExtraCoord || (i.set(l, 1), function(t) {
                            return !("ordinal" === t || "time" === t);
                        }(s.type) && (r[0] = e), nl(a.encode, l)[u] = s.index), s.defaultTooltip && o.push(e);
                    }
                    Ty.each(function(t, e) {
                        var i = nl(n, e), r = s.otherDims[e];
                        null != r && !1 !== r && (i[r] = s.name);
                    });
                });
                var s = [], l = {};
                i.each(function(t, e) {
                    var i = n[e];
                    l[e] = i[0], s = s.concat(i);
                }), e.dataDimsOnCoord = s, e.encodeFirstDimNotExtra = l;
                var u = n.label;
                u && u.length && (r = u.slice());
                var h = n.tooltip;
                return h && h.length ? o = h.slice() : o.length || (o = r.slice()), n.defaultedLabel = r, 
                n.defaultedTooltip = o, e;
            }(this), this._invertedIndicesMap = r, this.userOutput = this._dimensionsSummary.userOutput;
        }
        return e.prototype.getDimension = function(t) {
            return ("number" == typeof t || !isNaN(t) && !this._dimensionInfos.hasOwnProperty(t)) && (t = this.dimensions[t]), 
            t;
        }, e.prototype.getDimensionInfo = function(t) {
            return this._dimensionInfos[this.getDimension(t)];
        }, e.prototype.getDimensionsOnCoord = function() {
            return this._dimensionsSummary.dataDimsOnCoord.slice();
        }, e.prototype.mapDimension = function(t, e) {
            var n = this._dimensionsSummary;
            if (null == e) return n.encodeFirstDimNotExtra[t];
            var i = n.encode[t];
            return i ? i[e] : null;
        }, e.prototype.mapDimensionsAll = function(t) {
            return (this._dimensionsSummary.encode[t] || []).slice();
        }, e.prototype.initData = function(t, e, n) {
            var i = Vo(t) || g(t) ? new ov(t, this.dimensions.length) : t;
            this._rawData = i;
            var r = i.getSource().sourceFormat;
            this._storage = {}, this._indices = null, this._dontMakeIdFromName = null != this._idDimIdx || r === Dy || !!i.fillStorage, 
            this._nameList = (e || []).slice(), this._idList = [], this._nameRepeatCount = {}, 
            n || (this.hasItemOption = !1), this.defaultDimValueGetter = dx[r], this._dimValueGetter = n = n || this.defaultDimValueGetter, 
            this._dimValueGetterArrayRows = dx.arrayRows, this._rawExtent = {}, this._initDataFromProvider(0, i.count()), 
            i.pure && (this.hasItemOption = !1);
        }, e.prototype.getProvider = function() {
            return this._rawData;
        }, e.prototype.appendData = function(t) {
            var e = this._rawData, n = this.count();
            e.appendData(t);
            var i = e.count();
            e.persistent || (i += n), this._initDataFromProvider(n, i, !0);
        }, e.prototype.appendValues = function(t, e) {
            for (var n = this._storage, i = this.dimensions, r = i.length, o = this._rawExtent, a = this.count(), s = a + Math.max(t.length, e ? e.length : 0), l = 0; r > l; l++) {
                var u = i[l];
                o[u] || (o[u] = Cx()), vx(n, this._dimensionInfos[u], s, !0);
            }
            for (var h = Ox(i, function(t) {
                return o[t];
            }), c = this._storageArr = Ox(i, function(t) {
                return n[t];
            }), p = [], f = a; s > f; f++) {
                for (var d = f - a, g = 0; r > g; g++) {
                    u = i[g];
                    var y = this._dimValueGetterArrayRows(t[d] || p, u, d, g);
                    c[g][f] = y;
                    var v = h[g];
                    y < v[0] && (v[0] = y), y > v[1] && (v[1] = y);
                }
                e && (this._nameList[f] = e[d], this._dontMakeIdFromName || Sx(this, f));
            }
            this._rawCount = this._count = s, this._extent = {}, gx(this);
        }, e.prototype._initDataFromProvider = function(t, e, n) {
            if (!(t >= e)) {
                for (var i = this._rawData, r = this._storage, o = this.dimensions, a = o.length, s = this._dimensionInfos, l = this._nameList, u = this._idList, h = this._rawExtent, c = i.getSource().sourceFormat === Cy, p = 0; a > p; p++) {
                    var f = o[p];
                    h[f] || (h[f] = Cx()), vx(r, s[f], e, n);
                }
                var d = this._storageArr = Ox(o, function(t) {
                    return r[t];
                }), g = Ox(o, function(t) {
                    return h[t];
                });
                if (i.fillStorage) i.fillStorage(t, e, d, g); else for (var y = [], v = t; e > v; v++) {
                    y = i.getItem(v, y);
                    for (var m = 0; a > m; m++) {
                        f = o[m];
                        var _ = d[m], x = this._dimValueGetter(y, f, v, m);
                        _[v] = x;
                        var w = g[m];
                        x < w[0] && (w[0] = x), x > w[1] && (w[1] = x);
                    }
                    if (c && !i.pure && y) {
                        var b = y.name;
                        null == l[v] && null != b && (l[v] = nn(b, null));
                        var S = y.id;
                        null == u[v] && null != S && (u[v] = nn(S, null));
                    }
                    this._dontMakeIdFromName || Sx(this, v);
                }
                !i.persistent && i.clean && i.clean(), this._rawCount = this._count = e, this._extent = {}, 
                gx(this);
            }
        }, e.prototype.count = function() {
            return this._count;
        }, e.prototype.getIndices = function() {
            var t, e = this._indices;
            if (e) {
                var n = e.constructor, i = this._count;
                if (n === Array) {
                    t = new n(i);
                    for (var r = 0; i > r; r++) t[r] = e[r];
                } else t = new n(e.buffer, 0, i);
            } else {
                t = new (n = yx(this))(this.count());
                for (r = 0; r < t.length; r++) t[r] = r;
            }
            return t;
        }, e.prototype.getByDimIdx = function(t, e) {
            if (!(e >= 0 && e < this._count)) return NaN;
            var n = this._storageArr[t];
            return n ? n[this.getRawIndex(e)] : NaN;
        }, e.prototype.get = function(t, e) {
            if (!(e >= 0 && e < this._count)) return NaN;
            var n = this._storage[t];
            return n ? n[this.getRawIndex(e)] : NaN;
        }, e.prototype.getByRawIndex = function(t, e) {
            if (!(e >= 0 && e < this._rawCount)) return NaN;
            var n = this._storage[t];
            return n ? n[e] : NaN;
        }, e.prototype.getValues = function(t, e) {
            var n = [];
            S(t) || (e = t, t = this.dimensions);
            for (var i = 0, r = t.length; r > i; i++) n.push(this.get(t[i], e));
            return n;
        }, e.prototype.hasValue = function(t) {
            for (var e = this._dimensionsSummary.dataDimsOnCoord, n = 0, i = e.length; i > n; n++) if (isNaN(this.get(e[n], t))) return !1;
            return !0;
        }, e.prototype.getDataExtent = function(t) {
            t = this.getDimension(t);
            var e = this._storage[t], n = Cx();
            if (!e) return n;
            var i, r = this.count();
            if (!this._indices) return this._rawExtent[t].slice();
            if (i = this._extent[t]) return i.slice();
            for (var o = (i = n)[0], a = i[1], s = 0; r > s; s++) {
                var l = e[this.getRawIndex(s)];
                o > l && (o = l), l > a && (a = l);
            }
            return i = [ o, a ], this._extent[t] = i, i;
        }, e.prototype.getApproximateExtent = function(t) {
            return t = this.getDimension(t), this._approximateExtent[t] || this.getDataExtent(t);
        }, e.prototype.setApproximateExtent = function(t, e) {
            e = this.getDimension(e), this._approximateExtent[e] = t.slice();
        }, e.prototype.getCalculationInfo = function(t) {
            return this._calculationInfo[t];
        }, e.prototype.setCalculationInfo = function(t, e) {
            Lx(t) ? h(this._calculationInfo, t) : this._calculationInfo[t] = e;
        }, e.prototype.getSum = function(t) {
            var e = 0;
            if (this._storage[t]) for (var n = 0, i = this.count(); i > n; n++) {
                var r = this.get(t, n);
                isNaN(r) || (e += r);
            }
            return e;
        }, e.prototype.getMedian = function(t) {
            var e = [];
            this.each(t, function(t) {
                isNaN(t) || e.push(t);
            });
            var n = e.sort(function(t, e) {
                return t - e;
            }), i = this.count();
            return 0 === i ? 0 : i % 2 == 1 ? n[(i - 1) / 2] : (n[i / 2] + n[i / 2 - 1]) / 2;
        }, e.prototype.rawIndexOf = function(t, e) {
            var n = (t && this._invertedIndicesMap[t])[e];
            return null == n || isNaN(n) ? -1 : n;
        }, e.prototype.indexOfName = function(t) {
            for (var e = 0, n = this.count(); n > e; e++) if (this.getName(e) === t) return e;
            return -1;
        }, e.prototype.indexOfRawIndex = function(t) {
            if (t >= this._rawCount || 0 > t) return -1;
            if (!this._indices) return t;
            var e = this._indices, n = e[t];
            if (null != n && n < this._count && n === t) return t;
            for (var i = 0, r = this._count - 1; r >= i; ) {
                var o = (i + r) / 2 | 0;
                if (e[o] < t) i = o + 1; else {
                    if (!(e[o] > t)) return o;
                    r = o - 1;
                }
            }
            return -1;
        }, e.prototype.indicesOfNearest = function(t, e, n) {
            var i = this._storage[t], r = [];
            if (!i) return r;
            null == n && (n = 1 / 0);
            for (var o = 1 / 0, a = -1, s = 0, l = 0, u = this.count(); u > l; l++) {
                var h = e - i[this.getRawIndex(l)], c = Math.abs(h);
                n >= c && ((o > c || c === o && h >= 0 && 0 > a) && (o = c, a = h, s = 0), h === a && (r[s++] = l));
            }
            return r.length = s, r;
        }, e.prototype.getRawDataItem = function(t) {
            if (this._rawData.persistent) return this._rawData.getItem(this.getRawIndex(t));
            for (var e = [], n = 0; n < this.dimensions.length; n++) {
                var i = this.dimensions[n];
                e.push(this.get(i, t));
            }
            return e;
        }, e.prototype.getName = function(t) {
            var e = this.getRawIndex(t), n = this._nameList[e];
            return null == n && null != this._nameDimIdx && (n = bx(this, this._nameDimIdx, this._nameOrdinalMeta, e)), 
            null == n && (n = ""), n;
        }, e.prototype.getId = function(t) {
            return xx(this, this.getRawIndex(t));
        }, e.prototype.each = function(t, e, n, i) {
            var r = this;
            if (this._count) {
                "function" == typeof t && (i = n, n = e, e = t, t = []);
                for (var o = n || i || this, a = Ox(Mx(t), this.getDimension, this), s = a.length, l = Ox(a, function(t) {
                    return r._dimensionInfos[t].index;
                }), u = this._storageArr, h = 0, c = this.count(); c > h; h++) {
                    var p = this.getRawIndex(h);
                    switch (s) {
                      case 0:
                        e.call(o, h);
                        break;

                      case 1:
                        e.call(o, u[l[0]][p], h);
                        break;

                      case 2:
                        e.call(o, u[l[0]][p], u[l[1]][p], h);
                        break;

                      default:
                        for (var f = 0, d = []; s > f; f++) d[f] = u[l[f]][p];
                        d[f] = h, e.apply(o, d);
                    }
                }
            }
        }, e.prototype.filterSelf = function(t, e, n, i) {
            var r = this;
            if (this._count) {
                "function" == typeof t && (i = n, n = e, e = t, t = []);
                for (var o = n || i || this, a = Ox(Mx(t), this.getDimension, this), s = this.count(), l = new (yx(this))(s), u = [], h = a.length, c = 0, p = Ox(a, function(t) {
                    return r._dimensionInfos[t].index;
                }), f = p[0], d = this._storageArr, g = 0; s > g; g++) {
                    var y = void 0, v = this.getRawIndex(g);
                    if (0 === h) y = e.call(o, g); else if (1 === h) {
                        var m = d[f][v];
                        y = e.call(o, m, g);
                    } else {
                        for (var _ = 0; h > _; _++) u[_] = d[p[_]][v];
                        u[_] = g, y = e.apply(o, u);
                    }
                    y && (l[c++] = v);
                }
                return s > c && (this._indices = l), this._count = c, this._extent = {}, this.getRawIndex = this._indices ? _x : mx, 
                this;
            }
        }, e.prototype.selectRange = function(t) {
            var e = this, n = this._count;
            if (n) {
                var i = [];
                for (var r in t) t.hasOwnProperty(r) && i.push(r);
                var o = i.length;
                if (o) {
                    var a = this.count(), s = new (yx(this))(a), l = 0, u = i[0], h = Ox(i, function(t) {
                        return e._dimensionInfos[t].index;
                    }), c = t[u][0], p = t[u][1], f = this._storageArr, d = !1;
                    if (!this._indices) {
                        var g = 0;
                        if (1 === o) {
                            for (var y = f[h[0]], v = 0; n > v; v++) {
                                ((w = y[v]) >= c && p >= w || isNaN(w)) && (s[l++] = g), g++;
                            }
                            d = !0;
                        } else if (2 === o) {
                            y = f[h[0]];
                            var m = f[h[1]], _ = t[i[1]][0], x = t[i[1]][1];
                            for (v = 0; n > v; v++) {
                                var w = y[v], b = m[v];
                                (w >= c && p >= w || isNaN(w)) && (b >= _ && x >= b || isNaN(b)) && (s[l++] = g), 
                                g++;
                            }
                            d = !0;
                        }
                    }
                    if (!d) if (1 === o) for (v = 0; a > v; v++) {
                        var S = this.getRawIndex(v);
                        ((w = f[h[0]][S]) >= c && p >= w || isNaN(w)) && (s[l++] = S);
                    } else for (v = 0; a > v; v++) {
                        for (var M = !0, T = (S = this.getRawIndex(v), 0); o > T; T++) {
                            var C = i[T];
                            ((w = f[h[T]][S]) < t[C][0] || w > t[C][1]) && (M = !1);
                        }
                        M && (s[l++] = this.getRawIndex(v));
                    }
                    return a > l && (this._indices = s), this._count = l, this._extent = {}, this.getRawIndex = this._indices ? _x : mx, 
                    this;
                }
            }
        }, e.prototype.mapArray = function(t, e, n, i) {
            "function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this;
            var r = [];
            return this.each(t, function() {
                r.push(e && e.apply(this, arguments));
            }, n), r;
        }, e.prototype.map = function(e, n, i, r) {
            var o = i || r || this, a = Ox(Mx(e), this.getDimension, this), s = Tx(this, a), l = s._storage;
            s._indices = this._indices, s.getRawIndex = s._indices ? _x : mx;
            for (var u = [], h = a.length, c = this.count(), p = [], f = s._rawExtent, d = 0; c > d; d++) {
                for (var g = 0; h > g; g++) p[g] = this.get(a[g], d);
                p[h] = d;
                var y = n && n.apply(o, p);
                if (null != y) {
                    "object" != t(y) && (u[0] = y, y = u);
                    for (var v = this.getRawIndex(d), m = 0; m < y.length; m++) {
                        var _ = a[m], x = y[m], w = f[_], b = l[_];
                        b && (b[v] = x), x < w[0] && (w[0] = x), x > w[1] && (w[1] = x);
                    }
                }
            }
            return s;
        }, e.prototype.downSample = function(t, e, n, i) {
            for (var r = Tx(this, [ t ]), o = r._storage, a = [], s = Px(1 / e), l = o[t], u = this.count(), h = r._rawExtent[t], c = new (yx(this))(u), p = 0, f = 0; u > f; f += s) {
                s > u - f && (s = u - f, a.length = s);
                for (var d = 0; s > d; d++) {
                    var g = this.getRawIndex(f + d);
                    a[d] = l[g];
                }
                var y = n(a), v = this.getRawIndex(Math.min(f + i(a, y) || 0, u - 1));
                l[v] = y, y < h[0] && (h[0] = y), y > h[1] && (h[1] = y), c[p++] = v;
            }
            return r._count = p, r._indices = c, r.getRawIndex = _x, r;
        }, e.prototype.lttbDownSample = function(t, e) {
            var n, i, r, o = Tx(this, []), a = o._storage[t], s = this.count(), l = new (yx(this))(s), u = 0, h = Px(1 / e), c = this.getRawIndex(0);
            l[u++] = c;
            for (var p = 1; s - 1 > p; p += h) {
                for (var f = Math.min(p + h, s - 1), d = Math.min(p + 2 * h, s), g = (d + f) / 2, y = 0, v = f; d > v; v++) {
                    var m = a[S = this.getRawIndex(v)];
                    isNaN(m) || (y += m);
                }
                y /= d - f;
                var _ = p, x = Math.min(p + h, s), w = p - 1, b = a[c];
                n = -1, r = _;
                for (v = _; x > v; v++) {
                    var S;
                    m = a[S = this.getRawIndex(v)];
                    isNaN(m) || (i = Math.abs((w - g) * (m - b) - (w - v) * (y - b))) > n && (n = i, 
                    r = S);
                }
                l[u++] = r, c = r;
            }
            return l[u++] = this.getRawIndex(s - 1), o._count = u, o._indices = l, o.getRawIndex = _x, 
            o;
        }, e.prototype.getItemModel = function(t) {
            var e = this.hostModel, n = this.getRawDataItem(t);
            return new Yg(n, e, e && e.ecModel);
        }, e.prototype.diff = function(t) {
            var e = this;
            return new Ix(t ? t.getIndices() : [], this.getIndices(), function(e) {
                return xx(t, e);
            }, function(t) {
                return xx(e, t);
            });
        }, e.prototype.getVisual = function(t) {
            var e = this._visual;
            return e && e[t];
        }, e.prototype.setVisual = function(t, e) {
            this._visual = this._visual || {}, Lx(t) ? h(this._visual, t) : this._visual[t] = e;
        }, e.prototype.getItemVisual = function(t, e) {
            var n = this._itemVisuals[t], i = n && n[e];
            return null == i ? this.getVisual(e) : i;
        }, e.prototype.hasItemVisual = function() {
            return this._itemVisuals.length > 0;
        }, e.prototype.ensureUniqueItemVisual = function(t, e) {
            var n = this._itemVisuals, i = n[t];
            i || (i = n[t] = {});
            var r = i[e];
            return null == r && (S(r = this.getVisual(e)) ? r = r.slice() : Lx(r) && (r = h({}, r)), 
            i[e] = r), r;
        }, e.prototype.setItemVisual = function(t, e, n) {
            var i = this._itemVisuals[t] || {};
            this._itemVisuals[t] = i, Lx(e) ? h(i, e) : i[e] = n;
        }, e.prototype.clearAllVisual = function() {
            this._visual = {}, this._itemVisuals = [];
        }, e.prototype.setLayout = function(t, e) {
            if (Lx(t)) for (var n in t) t.hasOwnProperty(n) && this.setLayout(n, t[n]); else this._layout[t] = e;
        }, e.prototype.getLayout = function(t) {
            return this._layout[t];
        }, e.prototype.getItemLayout = function(t) {
            return this._itemLayouts[t];
        }, e.prototype.setItemLayout = function(t, e, n) {
            this._itemLayouts[t] = n ? h(this._itemLayouts[t] || {}, e) : e;
        }, e.prototype.clearItemLayouts = function() {
            this._itemLayouts.length = 0;
        }, e.prototype.setItemGraphicEl = function(t, e) {
            var n = this.hostModel;
            if (e) {
                var i = sd(e);
                i.dataIndex = t, i.dataType = this.dataType, i.seriesIndex = n && n.seriesIndex, 
                "group" === e.type && e.traverse(Ax, e);
            }
            this._graphicEls[t] = e;
        }, e.prototype.getItemGraphicEl = function(t) {
            return this._graphicEls[t];
        }, e.prototype.eachItemGraphicEl = function(t, e) {
            y(this._graphicEls, function(n, i) {
                n && t && t.call(e, n, i);
            });
        }, e.prototype.cloneShallow = function(t) {
            t || (t = new e(Ox(this.dimensions, this.getDimensionInfo, this), this.hostModel));
            if (t._storage = this._storage, t._storageArr = this._storageArr, kx(t, this), this._indices) {
                var n = this._indices.constructor;
                if (n === Array) {
                    var i = this._indices.length;
                    t._indices = new n(i);
                    for (var r = 0; i > r; r++) t._indices[r] = this._indices[r];
                } else t._indices = new n(this._indices);
            } else t._indices = null;
            return t.getRawIndex = t._indices ? _x : mx, t;
        }, e.prototype.wrapMethod = function(t, e) {
            var n = this[t];
            "function" == typeof n && (this.__wrappedMethods = this.__wrappedMethods || [], 
            this.__wrappedMethods.push(t), this[t] = function() {
                var t = n.apply(this, arguments);
                return e.apply(this, [ t ].concat(z(arguments)));
            });
        }, e.internalField = function() {
            function t(t, e, n, i) {
                return ta(t[i], this._dimensionInfos[e]);
            }
            function n(t) {
                var e = t.constructor;
                return e === Array ? t.slice() : new e(t);
            }
            dx = {
                arrayRows: t,
                objectRows: function(t, e) {
                    return ta(t[e], this._dimensionInfos[e]);
                },
                keyedColumns: t,
                original: function(t, e, n, i) {
                    var r = t && (null == t.value ? t : t.value);
                    return !this._rawData.pure && function(t) {
                        return k(t) && !(t instanceof Array);
                    }(t) && (this.hasItemOption = !0), ta(r instanceof Array ? r[i] : r, this._dimensionInfos[e]);
                },
                typedArray: function(t, e, n, i) {
                    return t[i];
                }
            }, gx = function(t) {
                var e = t._invertedIndicesMap;
                y(e, function(n, i) {
                    var r = t._dimensionInfos[i].ordinalMeta;
                    if (r) {
                        n = e[i] = new Bx(r.categories.length);
                        for (var o = 0; o < n.length; o++) n[o] = -1;
                        for (o = 0; o < t._count; o++) n[t.get(i, o)] = o;
                    }
                });
            }, bx = function(t, e, n, i) {
                var r, o = t._storageArr[e];
                return o && (r = o[i], n && n.categories.length && (r = n.categories[r])), nn(r, null);
            }, yx = function(t) {
                return t._rawCount > 65535 ? Nx : zx;
            }, vx = function(t, e, n, i) {
                var r = Ex[e.type], o = e.name;
                if (i) {
                    var a = t[o], s = a && a.length;
                    if (s !== n) {
                        for (var l = new r(n), u = 0; s > u; u++) l[u] = a[u];
                        t[o] = l;
                    }
                } else t[o] = new r(n);
            }, mx = function(t) {
                return t;
            }, _x = function(t) {
                return t < this._count && t >= 0 ? this._indices[t] : -1;
            }, xx = function(t, e) {
                var n = t._idList[e];
                return null == n && null != t._idDimIdx && (n = bx(t, t._idDimIdx, t._idOrdinalMeta, e)), 
                null == n && (n = "e\0\0" + e), n;
            }, Mx = function(t) {
                return S(t) || (t = null != t ? [ t ] : []), t;
            }, Tx = function(t, i) {
                var r = t.dimensions, o = new e(Ox(r, t.getDimensionInfo, t), t.hostModel);
                kx(o, t);
                for (var a = o._storage = {}, s = t._storage, l = o._storageArr = [], u = 0; u < r.length; u++) {
                    var h = r[u];
                    s[h] && (p(i, h) >= 0 ? (a[h] = n(s[h]), o._rawExtent[h] = Cx(), o._extent[h] = null) : a[h] = s[h], 
                    l.push(a[h]));
                }
                return o;
            }, Cx = function() {
                return [ 1 / 0, -1 / 0 ];
            }, Ax = function(t) {
                var e = sd(t), n = sd(this);
                e.seriesIndex = n.seriesIndex, e.dataIndex = n.dataIndex, e.dataType = n.dataType;
            }, kx = function(t, e) {
                y(Fx.concat(e.__wrappedMethods || []), function(n) {
                    e.hasOwnProperty(n) && (t[n] = e[n]);
                }), t.__wrappedMethods = e.__wrappedMethods, y(Vx, function(n) {
                    t[n] = s(e[n]);
                }), t._calculationInfo = h({}, e._calculationInfo);
            }, Sx = function(t, e) {
                var n = t._nameList, i = t._idList, r = t._nameDimIdx, o = t._idDimIdx, a = n[e], s = i[e];
                if (null == a && null != r && (n[e] = a = bx(t, r, t._nameOrdinalMeta, e)), null == s && null != o && (i[e] = s = bx(t, o, t._idOrdinalMeta, e)), 
                null == s && null != a) {
                    var l = t._nameRepeatCount, u = l[a] = (l[a] || 0) + 1;
                    s = a, u > 1 && (s += "__ec__" + u), i[e] = s;
                }
            };
        }(), e;
    }(), Gx = function(t) {
        this.coordSysDims = [], this.axisMap = U(), this.categoryAxisMap = U(), this.coordSysName = t;
    }, Wx = {
        cartesian2d: function(t, e, n, i) {
            var r = t.getReferringComponents("xAxis", Pp).models[0], o = t.getReferringComponents("yAxis", Pp).models[0];
            e.coordSysDims = [ "x", "y" ], n.set("x", r), n.set("y", o), al(r) && (i.set("x", r), 
            e.firstCategoryDimIndex = 0), al(o) && (i.set("y", o), null == e.firstCategoryDimIndex && (e.firstCategoryDimIndex = 1));
        },
        singleAxis: function(t, e, n, i) {
            var r = t.getReferringComponents("singleAxis", Pp).models[0];
            e.coordSysDims = [ "single" ], n.set("single", r), al(r) && (i.set("single", r), 
            e.firstCategoryDimIndex = 0);
        },
        polar: function(t, e, n, i) {
            var r = t.getReferringComponents("polar", Pp).models[0], o = r.findAxisModel("radiusAxis"), a = r.findAxisModel("angleAxis");
            e.coordSysDims = [ "radius", "angle" ], n.set("radius", o), n.set("angle", a), al(o) && (i.set("radius", o), 
            e.firstCategoryDimIndex = 0), al(a) && (i.set("angle", a), null == e.firstCategoryDimIndex && (e.firstCategoryDimIndex = 1));
        },
        geo: function(t, e) {
            e.coordSysDims = [ "lng", "lat" ];
        },
        parallel: function(t, e, n, i) {
            var r = t.ecModel, o = r.getComponent("parallel", t.get("parallelIndex")), a = e.coordSysDims = o.dimensions.slice();
            y(o.parallelAxisIndex, function(t, o) {
                var s = r.getComponent("parallelAxis", t), l = a[o];
                n.set(l, s), al(s) && (i.set(l, s), null == e.firstCategoryDimIndex && (e.firstCategoryDimIndex = o));
            });
        }
    }, Ux = function() {
        function t(t) {
            this._setting = t || {}, this._extent = [ 1 / 0, -1 / 0 ];
        }
        return t.prototype.getSetting = function(t) {
            return this._setting[t];
        }, t.prototype.unionExtent = function(t) {
            var e = this._extent;
            t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]);
        }, t.prototype.unionExtentFromData = function(t, e) {
            this.unionExtent(t.getApproximateExtent(e));
        }, t.prototype.getExtent = function() {
            return this._extent.slice();
        }, t.prototype.setExtent = function(t, e) {
            var n = this._extent;
            isNaN(t) || (n[0] = t), isNaN(e) || (n[1] = e);
        }, t.prototype.isInExtentRange = function(t) {
            return this._extent[0] <= t && this._extent[1] >= t;
        }, t.prototype.isBlank = function() {
            return this._isBlank;
        }, t.prototype.setBlank = function(t) {
            this._isBlank = t;
        }, t;
    }();
    mn(Ux);
    var Xx = function() {
        function t(t) {
            this.categories = t.categories || [], this._needCollect = t.needCollect, this._deduplication = t.deduplication;
        }
        return t.createByAxisModel = function(e) {
            var n = e.option, i = n.data, r = i && v(i, cl);
            return new t({
                categories: r,
                needCollect: !r,
                deduplication: !1 !== n.dedplication
            });
        }, t.prototype.getOrdinal = function(t) {
            return this._getOrCreateMap().get(t);
        }, t.prototype.parseAndCollect = function(t) {
            var e, n = this._needCollect;
            if ("string" != typeof t && !n) return t;
            if (n && !this._deduplication) return e = this.categories.length, this.categories[e] = t, 
            e;
            var i = this._getOrCreateMap();
            return null == (e = i.get(t)) && (n ? (e = this.categories.length, this.categories[e] = t, 
            i.set(t, e)) : e = NaN), e;
        }, t.prototype._getOrCreateMap = function() {
            return this._map || (this._map = U(this.categories));
        }, t;
    }(), Yx = Oe, qx = function(t) {
        function e(e) {
            var n = t.call(this, e) || this;
            n.type = "ordinal";
            var i = n.getSetting("ordinalMeta");
            return i || (i = new Xx({})), S(i) && (i = new Xx({
                categories: v(i, function(t) {
                    return k(t) ? t.value : t;
                })
            })), n._ordinalMeta = i, n._extent = n.getSetting("extent") || [ 0, i.categories.length - 1 ], 
            n;
        }
        return n(e, t), e.prototype.parse = function(t) {
            return "string" == typeof t ? this._ordinalMeta.getOrdinal(t) : Math.round(t);
        }, e.prototype.contain = function(t) {
            return gl(t = this.parse(t), this._extent) && null != this._ordinalMeta.categories[t];
        }, e.prototype.normalize = function(t) {
            return yl(t = this._getTickNumber(this.parse(t)), this._extent);
        }, e.prototype.scale = function(t) {
            return t = Math.round(vl(t, this._extent)), this.getRawOrdinalNumber(t);
        }, e.prototype.getTicks = function() {
            for (var t = [], e = this._extent, n = e[0]; n <= e[1]; ) t.push({
                value: n
            }), n++;
            return t;
        }, e.prototype.getMinorTicks = function() {}, e.prototype.setSortInfo = function(t) {
            if (null != t) {
                for (var e = t.ordinalNumbers, n = this._ordinalNumbersByTick = [], i = this._ticksByOrdinalNumber = [], r = 0, o = this._ordinalMeta.categories.length, a = Math.min(o, e.length); a > r; ++r) {
                    var s = e[r];
                    n[r] = s, i[s] = r;
                }
                for (var l = 0; o > r; ++r) {
                    for (;null != i[l]; ) l++;
                    n.push(l), i[l] = r;
                }
            } else this._ordinalNumbersByTick = this._ticksByOrdinalNumber = null;
        }, e.prototype._getTickNumber = function(t) {
            var e = this._ticksByOrdinalNumber;
            return e && t >= 0 && t < e.length ? e[t] : t;
        }, e.prototype.getRawOrdinalNumber = function(t) {
            var e = this._ordinalNumbersByTick;
            return e && t >= 0 && t < e.length ? e[t] : t;
        }, e.prototype.getLabel = function(t) {
            if (!this.isBlank()) {
                var e = this.getRawOrdinalNumber(t.value), n = this._ordinalMeta.categories[e];
                return null == n ? "" : n + "";
            }
        }, e.prototype.count = function() {
            return this._extent[1] - this._extent[0] + 1;
        }, e.prototype.unionExtentFromData = function(t, e) {
            this.unionExtent(t.getApproximateExtent(e));
        }, e.prototype.isInExtentRange = function(t) {
            return t = this._getTickNumber(t), this._extent[0] <= t && this._extent[1] >= t;
        }, e.prototype.getOrdinalMeta = function() {
            return this._ordinalMeta;
        }, e.prototype.niceTicks = function() {}, e.prototype.niceExtent = function() {}, 
        e.type = "ordinal", e;
    }(Ux);
    Ux.registerClass(qx);
    var jx = Oe, Zx = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.type = "interval", e._interval = 0, e._intervalPrecision = 2, e;
        }
        return n(e, t), e.prototype.parse = function(t) {
            return t;
        }, e.prototype.contain = function(t) {
            return gl(t, this._extent);
        }, e.prototype.normalize = function(t) {
            return yl(t, this._extent);
        }, e.prototype.scale = function(t) {
            return vl(t, this._extent);
        }, e.prototype.setExtent = function(t, e) {
            var n = this._extent;
            isNaN(t) || (n[0] = parseFloat(t)), isNaN(e) || (n[1] = parseFloat(e));
        }, e.prototype.unionExtent = function(t) {
            var e = this._extent;
            t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]), this.setExtent(e[0], e[1]);
        }, e.prototype.getInterval = function() {
            return this._interval;
        }, e.prototype.setInterval = function(t) {
            this._interval = t, this._niceExtent = this._extent.slice(), this._intervalPrecision = fl(t);
        }, e.prototype.getTicks = function(t) {
            var e = this._interval, n = this._extent, i = this._niceExtent, r = this._intervalPrecision, o = [];
            if (!e) return o;
            n[0] < i[0] && o.push(t ? {
                value: jx(i[0] - e, r)
            } : {
                value: n[0]
            });
            for (var a = i[0]; a <= i[1] && (o.push({
                value: a
            }), (a = jx(a + e, r)) !== o[o.length - 1].value); ) if (o.length > 1e4) return [];
            var s = o.length ? o[o.length - 1].value : i[1];
            return n[1] > s && o.push(t ? {
                value: jx(s + e, r)
            } : {
                value: n[1]
            }), o;
        }, e.prototype.getMinorTicks = function(t) {
            for (var e = this.getTicks(!0), n = [], i = this.getExtent(), r = 1; r < e.length; r++) {
                for (var o = e[r], a = e[r - 1], s = 0, l = [], u = (o.value - a.value) / t; t - 1 > s; ) {
                    var h = jx(a.value + (s + 1) * u);
                    h > i[0] && h < i[1] && l.push(h), s++;
                }
                n.push(l);
            }
            return n;
        }, e.prototype.getLabel = function(t, e) {
            if (null == t) return "";
            var n = e && e.precision;
            return null == n ? n = Ee(t.value) || 0 : "auto" === n && (n = this._intervalPrecision), 
            uo(jx(t.value, n, !0));
        }, e.prototype.niceTicks = function(t, e, n) {
            t = t || 5;
            var i = this._extent, r = i[1] - i[0];
            if (isFinite(r)) {
                0 > r && (r = -r, i.reverse());
                var o = pl(i, t, e, n);
                this._intervalPrecision = o.intervalPrecision, this._interval = o.interval, this._niceExtent = o.niceTickExtent;
            }
        }, e.prototype.niceExtent = function(t) {
            var e = this._extent;
            if (e[0] === e[1]) if (0 !== e[0]) {
                var n = e[0];
                t.fixMax || (e[1] += n / 2), e[0] -= n / 2;
            } else e[1] = 1;
            var i = e[1] - e[0];
            isFinite(i) || (e[0] = 0, e[1] = 1), this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
            var r = this._interval;
            t.fixMin || (e[0] = jx(Math.floor(e[0] / r) * r)), t.fixMax || (e[1] = jx(Math.ceil(e[1] / r) * r));
        }, e.type = "interval", e;
    }(Ux);
    Ux.registerClass(Zx);
    var Kx = "__ec_stack_", $x = ("undefined" != typeof Float32Array && Float32Array, 
    wa(), function(t, e, n, i) {
        for (;i > n; ) {
            var r = n + i >>> 1;
            t[r][1] < e ? n = r + 1 : i = r;
        }
        return n;
    }), Jx = function(t) {
        function e(e) {
            var n = t.call(this, e) || this;
            return n.type = "time", n;
        }
        return n(e, t), e.prototype.getLabel = function(t) {
            var e = this.getSetting("useUTC");
            return Yr(t.value, sy[function(t) {
                switch (t) {
                  case "year":
                  case "month":
                    return "day";

                  case "millisecond":
                    return "millisecond";

                  default:
                    return "second";
                }
            }(Ur(this._minLevelUnit))] || sy.second, e, this.getSetting("locale"));
        }, e.prototype.getFormattedLabel = function(t, e, n) {
            var i = this.getSetting("useUTC");
            return function(t, e, n, i, r) {
                var o = null;
                if ("string" == typeof n) o = n; else if ("function" == typeof n) o = n(t.value, e, {
                    level: t.level
                }); else {
                    var a = h({}, oy);
                    if (t.level > 0) for (var s = 0; s < ly.length; ++s) a[ly[s]] = "{primary|" + a[ly[s]] + "}";
                    var l = n ? !1 === n.inherit ? n : c(n, a) : a, u = qr(t.value, r);
                    if (l[u]) o = l[u]; else if (l.inherit) {
                        for (s = uy.indexOf(u) - 1; s >= 0; --s) if (l[u]) {
                            o = l[u];
                            break;
                        }
                        o = o || a.none;
                    }
                    if (S(o)) {
                        var p = null == t.level ? 0 : t.level >= 0 ? t.level : o.length + t.level;
                        o = o[p = Math.min(p, o.length - 1)];
                    }
                }
                return Yr(new Date(t.value), o, r, i);
            }(t, e, n, this.getSetting("locale"), i);
        }, e.prototype.getTicks = function() {
            var t = this._interval, e = this._extent, n = [];
            if (!t) return n;
            n.push({
                value: e[0],
                level: 0
            });
            var i = this.getSetting("useUTC"), r = Dl(this._minLevelUnit, this._approxInterval, i, e);
            return (n = n.concat(r)).push({
                value: e[1],
                level: 0
            }), n;
        }, e.prototype.niceExtent = function(t) {
            var e = this._extent;
            if (e[0] === e[1] && (e[0] -= iy, e[1] += iy), e[1] === -1 / 0 && 1 / 0 === e[0]) {
                var n = new Date();
                e[1] = +new Date(n.getFullYear(), n.getMonth(), n.getDate()), e[0] = e[1] - iy;
            }
            this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
        }, e.prototype.niceTicks = function(t, e, n) {
            t = t || 10;
            var i = this._extent, r = i[1] - i[0];
            this._approxInterval = r / t, null != e && this._approxInterval < e && (this._approxInterval = e), 
            null != n && this._approxInterval > n && (this._approxInterval = n);
            var o = Qx.length, a = Math.min($x(Qx, this._approxInterval, 0, o), o - 1);
            this._interval = Qx[a][1], this._minLevelUnit = Qx[Math.max(a - 1, 0)][0];
        }, e.prototype.parse = function(t) {
            return "number" == typeof t ? t : +He(t);
        }, e.prototype.contain = function(t) {
            return gl(this.parse(t), this._extent);
        }, e.prototype.normalize = function(t) {
            return yl(this.parse(t), this._extent);
        }, e.prototype.scale = function(t) {
            return vl(t, this._extent);
        }, e.type = "time", e;
    }(Zx), Qx = [ [ "second", ty ], [ "minute", ey ], [ "hour", ny ], [ "quarter-day", 6 * ny ], [ "half-day", 12 * ny ], [ "day", 1.2 * iy ], [ "half-week", 3.5 * iy ], [ "week", 7 * iy ], [ "month", 31 * iy ], [ "quarter", 95 * iy ], [ "half-year", ry / 2 ], [ "year", ry ] ];
    Ux.registerClass(Jx);
    var tw = Ux.prototype, ew = Zx.prototype, nw = Oe, iw = Math.floor, rw = Math.ceil, ow = Math.pow, aw = Math.log, sw = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.type = "log", e.base = 10, e._originalScale = new Zx(), e._interval = 0, 
            e;
        }
        return n(e, t), e.prototype.getTicks = function(t) {
            var e = this._originalScale, n = this._extent, i = e.getExtent();
            return v(ew.getTicks.call(this, t), function(t) {
                var e = t.value, r = Oe(ow(this.base, e));
                return r = e === n[0] && this._fixMin ? Pl(r, i[0]) : r, {
                    value: r = e === n[1] && this._fixMax ? Pl(r, i[1]) : r
                };
            }, this);
        }, e.prototype.setExtent = function(t, e) {
            var n = this.base;
            t = aw(t) / aw(n), e = aw(e) / aw(n), ew.setExtent.call(this, t, e);
        }, e.prototype.getExtent = function() {
            var t = this.base, e = tw.getExtent.call(this);
            e[0] = ow(t, e[0]), e[1] = ow(t, e[1]);
            var n = this._originalScale.getExtent();
            return this._fixMin && (e[0] = Pl(e[0], n[0])), this._fixMax && (e[1] = Pl(e[1], n[1])), 
            e;
        }, e.prototype.unionExtent = function(t) {
            this._originalScale.unionExtent(t);
            var e = this.base;
            t[0] = aw(t[0]) / aw(e), t[1] = aw(t[1]) / aw(e), tw.unionExtent.call(this, t);
        }, e.prototype.unionExtentFromData = function(t, e) {
            this.unionExtent(t.getApproximateExtent(e));
        }, e.prototype.niceTicks = function(t) {
            t = t || 10;
            var e = this._extent, n = e[1] - e[0];
            if (!(1 / 0 === n || 0 >= n)) {
                var i = Ge(n);
                for (.5 >= t / n * i && (i *= 10); !isNaN(i) && Math.abs(i) < 1 && Math.abs(i) > 0; ) i *= 10;
                var r = [ Oe(rw(e[0] / i) * i), Oe(iw(e[1] / i) * i) ];
                this._interval = i, this._niceExtent = r;
            }
        }, e.prototype.niceExtent = function(t) {
            ew.niceExtent.call(this, t), this._fixMin = t.fixMin, this._fixMax = t.fixMax;
        }, e.prototype.parse = function(t) {
            return t;
        }, e.prototype.contain = function(t) {
            return gl(t = aw(t) / aw(this.base), this._extent);
        }, e.prototype.normalize = function(t) {
            return yl(t = aw(t) / aw(this.base), this._extent);
        }, e.prototype.scale = function(t) {
            return t = vl(t, this._extent), ow(this.base, t);
        }, e.type = "log", e;
    }(Ux), lw = sw.prototype;
    lw.getMinorTicks = ew.getMinorTicks, lw.getLabel = ew.getLabel, Ux.registerClass(sw);
    var uw = function() {
        function t(t, e, n) {
            this._prepareParams(t, e, n);
        }
        return t.prototype._prepareParams = function(t, e, n) {
            n[1] < n[0] && (n = [ NaN, NaN ]), this._dataMin = n[0], this._dataMax = n[1];
            var i = this._isOrdinal = "ordinal" === t.type;
            this._needCrossZero = e.getNeedCrossZero && e.getNeedCrossZero();
            var r = this._modelMinRaw = e.get("min", !0);
            M(r) ? this._modelMinNum = Ll(t, r({
                min: n[0],
                max: n[1]
            })) : "dataMin" !== r && (this._modelMinNum = Ll(t, r));
            var o = this._modelMaxRaw = e.get("max", !0);
            if (M(o) ? this._modelMaxNum = Ll(t, o({
                min: n[0],
                max: n[1]
            })) : "dataMax" !== o && (this._modelMaxNum = Ll(t, o)), i) this._axisDataLen = e.getCategories().length; else {
                var a = e.get("boundaryGap"), s = S(a) ? a : [ a || 0, a || 0 ];
                this._boundaryGapInner = "boolean" == typeof s[0] || "boolean" == typeof s[1] ? [ 0, 0 ] : [ Se(s[0], 1), Se(s[1], 1) ];
            }
        }, t.prototype.calculate = function() {
            var t = this._isOrdinal, e = this._dataMin, n = this._dataMax, i = this._axisDataLen, r = this._boundaryGapInner, o = t ? null : n - e || Math.abs(e), a = "dataMin" === this._modelMinRaw ? e : this._modelMinNum, s = "dataMax" === this._modelMaxRaw ? n : this._modelMaxNum, l = null != a, u = null != s;
            null == a && (a = t ? i ? 0 : NaN : e - r[0] * o), null == s && (s = t ? i ? i - 1 : NaN : n + r[1] * o), 
            (null == a || !isFinite(a)) && (a = NaN), (null == s || !isFinite(s)) && (s = NaN), 
            a > s && (a = NaN, s = NaN);
            var h = R(a) || R(s) || t && !i;
            this._needCrossZero && (a > 0 && s > 0 && !l && (a = 0), 0 > a && 0 > s && !u && (s = 0));
            var c = this._determinedMin, p = this._determinedMax;
            return null != c && (a = c, l = !0), null != p && (s = p, u = !0), {
                min: a,
                max: s,
                minFixed: l,
                maxFixed: u,
                isBlank: h
            };
        }, t.prototype.modifyDataMinMax = function(t, e) {
            this[cw[t]] = e;
        }, t.prototype.setDeterminedMinMax = function(t, e) {
            this[hw[t]] = e;
        }, t.prototype.freeze = function() {
            this.frozen = !0;
        }, t;
    }(), hw = {
        min: "_determinedMin",
        max: "_determinedMax"
    }, cw = {
        min: "_dataMin",
        max: "_dataMax"
    }, pw = function() {
        function t() {}
        return t.prototype.getNeedCrossZero = function() {
            return !this.option.scale;
        }, t.prototype.getCoordSysModel = function() {}, t;
    }(), fw = {
        isDimensionStacked: ll,
        enableDataStack: sl,
        getStackedDimension: ul
    }, dw = (Object.freeze || Object)({
        createList: function(t) {
            return hl(t.getSource(), t);
        },
        getLayoutRect: go,
        dataStack: fw,
        createScale: function(t, e) {
            var n = e;
            e instanceof Yg || (n = new Yg(e));
            var i = El(n);
            return i.setExtent(t[0], t[1]), Rl(i, n), i;
        },
        mixinAxisModelCommonMethods: function(t) {
            d(t, pw);
        },
        getECData: sd,
        createTextStyle: function(t, e) {
            return Nr(t, null, null, "normal" !== (e = e || {}).state);
        },
        createDimensions: ol,
        createSymbol: ns,
        enableHoverEmphasis: Xi
    }), gw = [], yw = {
        registerPreprocessor: Ws,
        registerProcessor: Us,
        registerPostInit: Xs,
        registerPostUpdate: Ys,
        registerAction: qs,
        registerCoordinateSystem: js,
        registerLayout: Zs,
        registerVisual: Ks,
        registerTransform: fx,
        registerLoading: Js,
        registerMap: Qs,
        PRIORITY: __,
        ComponentModel: _y,
        ComponentView: bv,
        SeriesModel: wv,
        ChartView: Tv,
        registerComponentModel: function(t) {
            _y.registerClass(t);
        },
        registerComponentView: function(t) {
            bv.registerClass(t);
        },
        registerSeriesModel: function(t) {
            wv.registerClass(t);
        },
        registerChartView: function(t) {
            Tv.registerClass(t);
        },
        registerSubTypeDefaulter: function(t, e) {
            _y.registerSubTypeDefaulter(t, e);
        },
        registerPainter: function(t, e) {
            De(t, e);
        }
    }, vw = (Object.freeze || Object)({
        linearMap: Pe,
        round: Oe,
        asc: Re,
        getPrecision: Ee,
        getPrecisionSafe: Ne,
        getPixelPrecision: Be,
        getPercentWithPrecision: function(t, e, n) {
            if (!t[e]) return 0;
            var i = m(t, function(t, e) {
                return t + (isNaN(e) ? 0 : e);
            }, 0);
            if (0 === i) return 0;
            for (var r = Math.pow(10, n), o = v(t, function(t) {
                return (isNaN(t) ? 0 : t) / i * r * 100;
            }), a = 100 * r, s = v(o, function(t) {
                return Math.floor(t);
            }), l = m(s, function(t, e) {
                return t + e;
            }, 0), u = v(o, function(t, e) {
                return t - s[e];
            }); a > l; ) {
                for (var h = Number.NEGATIVE_INFINITY, c = null, p = 0, f = u.length; f > p; ++p) u[p] > h && (h = u[p], 
                c = p);
                ++s[c], u[c] = 0, ++l;
            }
            return s[e] / r;
        },
        MAX_SAFE_INTEGER: 9007199254740991,
        remRadian: Fe,
        isRadianAroundZero: Ve,
        parseDate: He,
        quantity: Ge,
        quantityExponent: We,
        nice: Ue,
        quantile: function(t, e) {
            var n = (t.length - 1) * e + 1, i = Math.floor(n), r = +t[i - 1], o = n - i;
            return o ? r + o * (t[i] - r) : r;
        },
        reformIntervals: function(t) {
            t.sort(function(t, e) {
                return function t(e, n, i) {
                    return e.interval[i] < n.interval[i] || e.interval[i] === n.interval[i] && (e.close[i] - n.close[i] == (i ? -1 : 1) || !i && t(e, n, 1));
                }(t, e, 0) ? -1 : 1;
            });
            for (var e = -1 / 0, n = 1, i = 0; i < t.length; ) {
                for (var r = t[i].interval, o = t[i].close, a = 0; 2 > a; a++) r[a] <= e && (r[a] = e, 
                o[a] = a ? 1 : 1 - n), e = r[a], n = o[a];
                r[0] === r[1] && o[0] * o[1] != 1 ? t.splice(i, 1) : i++;
            }
            return t;
        },
        isNumeric: Ye,
        numericToNumber: Xe
    }), mw = (Object.freeze || Object)({
        parse: He,
        format: Yr
    }), _w = (Object.freeze || Object)({
        extendShape: lr,
        extendPath: ur,
        makePath: pr,
        makeImage: fr,
        mergePath: Ig,
        resizePath: gr,
        createIcon: kr,
        updateProps: vr,
        initProps: mr,
        getTransform: br,
        clipPointsByRect: Cr,
        clipRectByRect: Ar,
        registerShape: hr,
        getShapeClass: cr,
        Group: mp,
        Image: $f,
        Text: rd,
        Circle: zd,
        Ellipse: Vd,
        Sector: Qd,
        Ring: eg,
        Polygon: ig,
        Polyline: og,
        Rect: ed,
        Line: lg,
        BezierCurve: cg,
        Arc: fg,
        IncrementalDisplayable: Mg,
        CompoundPath: dg,
        LinearGradient: yg,
        RadialGradient: vg,
        BoundingRect: lp
    }), xw = (Object.freeze || Object)({
        addCommas: uo,
        toCamelCase: function(t, e) {
            return t = (t || "").toLowerCase().replace(/-(.)/g, function(t, e) {
                return e.toUpperCase();
            }), e && t && (t = t.charAt(0).toUpperCase() + t.slice(1)), t;
        },
        normalizeCssArray: hy,
        encodeHTML: ho,
        formatTpl: co,
        getTooltipMarker: po,
        formatTime: function(t, e, n) {
            ("week" === t || "month" === t || "quarter" === t || "half-year" === t || "year" === t) && (t = "MM-dd\nyyyy");
            var i = He(e), r = n ? "UTC" : "", o = i["get" + r + "FullYear"](), a = i["get" + r + "Month"]() + 1, s = i["get" + r + "Date"](), l = i["get" + r + "Hours"](), u = i["get" + r + "Minutes"](), h = i["get" + r + "Seconds"](), c = i["get" + r + "Milliseconds"]();
            return t.replace("MM", Wr(a, 2)).replace("M", a).replace("yyyy", o).replace("yy", o % 100 + "").replace("dd", Wr(s, 2)).replace("d", s).replace("hh", Wr(l, 2)).replace("h", l).replace("mm", Wr(u, 2)).replace("m", u).replace("ss", Wr(h, 2)).replace("s", h).replace("SSS", Wr(c, 3));
        },
        capitalFirst: function(t) {
            return t ? t.charAt(0).toUpperCase() + t.substr(1) : t;
        },
        truncateText: Mn,
        getTextRect: function(t, e, n, i, r, o, a, s) {
            return new rd({
                style: {
                    text: t,
                    font: e,
                    align: n,
                    verticalAlign: i,
                    padding: r,
                    rich: o,
                    overflow: a ? "truncate" : null,
                    lineHeight: s
                }
            }).getBoundingRect();
        }
    }), ww = (Object.freeze || Object)({
        map: v,
        each: y,
        indexOf: p,
        inherits: f,
        reduce: m,
        filter: _,
        bind: Eh,
        curry: b,
        isArray: S,
        isString: T,
        isObject: k,
        isFunction: M,
        extend: h,
        defaults: c,
        clone: s,
        merge: l
    }), bw = sn(), Sw = [ 0, 1 ], Mw = function() {
        function t(t, e, n) {
            this.onBand = !1, this.inverse = !1, this.dim = t, this.scale = e, this._extent = n || [ 0, 0 ];
        }
        return t.prototype.contain = function(t) {
            var e = this._extent, n = Math.min(e[0], e[1]), i = Math.max(e[0], e[1]);
            return t >= n && i >= t;
        }, t.prototype.containData = function(t) {
            return this.scale.contain(t);
        }, t.prototype.getExtent = function() {
            return this._extent.slice();
        }, t.prototype.getPixelPrecision = function(t) {
            return Be(t || this.scale.getExtent(), this._extent);
        }, t.prototype.setExtent = function(t, e) {
            var n = this._extent;
            n[0] = t, n[1] = e;
        }, t.prototype.dataToCoord = function(t, e) {
            var n = this._extent, i = this.scale;
            return t = i.normalize(t), this.onBand && "ordinal" === i.type && $l(n = n.slice(), i.count()), 
            Pe(t, Sw, n, e);
        }, t.prototype.coordToData = function(t, e) {
            var n = this._extent, i = this.scale;
            this.onBand && "ordinal" === i.type && $l(n = n.slice(), i.count());
            var r = Pe(t, n, Sw, e);
            return this.scale.scale(r);
        }, t.prototype.pointToData = function() {}, t.prototype.getTicksCoords = function(t) {
            var e = (t = t || {}).tickModel || this.getTickModel(), n = v(Ul(this, e).ticks, function(t) {
                return {
                    coord: this.dataToCoord("ordinal" === this.scale.type ? this.scale.getRawOrdinalNumber(t) : t),
                    tickValue: t
                };
            }, this);
            return function(t, e, n, i) {
                function r(t, e) {
                    return t = Oe(t), e = Oe(e), c ? t > e : e > t;
                }
                var o = e.length;
                if (t.onBand && !n && o) {
                    var a, s, l = t.getExtent();
                    if (1 === o) e[0].coord = l[0], a = e[1] = {
                        coord: l[0]
                    }; else {
                        var u = e[o - 1].tickValue - e[0].tickValue, h = (e[o - 1].coord - e[0].coord) / u;
                        y(e, function(t) {
                            t.coord -= h / 2;
                        }), s = 1 + t.scale.getExtent()[1] - e[o - 1].tickValue, a = {
                            coord: e[o - 1].coord + h * s
                        }, e.push(a);
                    }
                    var c = l[0] > l[1];
                    r(e[0].coord, l[0]) && (i ? e[0].coord = l[0] : e.shift()), i && r(l[0], e[0].coord) && e.unshift({
                        coord: l[0]
                    }), r(l[1], a.coord) && (i ? a.coord = l[1] : e.pop()), i && r(a.coord, l[1]) && e.push({
                        coord: l[1]
                    });
                }
            }(this, n, e.get("alignWithLabel"), t.clamp), n;
        }, t.prototype.getMinorTicksCoords = function() {
            if ("ordinal" === this.scale.type) return [];
            var t = this.model.getModel("minorTick").get("splitNumber");
            return t > 0 && 100 > t || (t = 5), v(this.scale.getMinorTicks(t), function(t) {
                return v(t, function(t) {
                    return {
                        coord: this.dataToCoord(t),
                        tickValue: t
                    };
                }, this);
            }, this);
        }, t.prototype.getViewLabels = function() {
            return Wl(this).labels;
        }, t.prototype.getLabelModel = function() {
            return this.model.getModel("axisLabel");
        }, t.prototype.getTickModel = function() {
            return this.model.getModel("axisTick");
        }, t.prototype.getBandWidth = function() {
            var t = this._extent, e = this.scale.getExtent(), n = e[1] - e[0] + (this.onBand ? 1 : 0);
            0 === n && (n = 1);
            var i = Math.abs(t[1] - t[0]);
            return Math.abs(i) / n;
        }, t.prototype.calculateCategoryInterval = function() {
            return function(t) {
                var e = function(t) {
                    var e = t.getLabelModel();
                    return {
                        axisRotate: t.getRotate ? t.getRotate() : t.isHorizontal && !t.isHorizontal() ? 90 : 0,
                        labelRotate: e.get("rotate") || 0,
                        font: e.getFont()
                    };
                }(t), n = Nl(t), i = (e.axisRotate - e.labelRotate) / 180 * Math.PI, r = t.scale, o = r.getExtent(), a = r.count();
                if (o[1] - o[0] < 1) return 0;
                var s = 1;
                a > 40 && (s = Math.max(1, Math.floor(a / 40)));
                for (var l = o[0], u = t.dataToCoord(l + 1) - t.dataToCoord(l), h = Math.abs(u * Math.cos(i)), c = Math.abs(u * Math.sin(i)), p = 0, f = 0; l <= o[1]; l += s) {
                    var d, g, y = _e(n({
                        value: l
                    }), e.font, "center", "top");
                    d = 1.3 * y.width, g = 1.3 * y.height, p = Math.max(p, d, 7), f = Math.max(f, g, 7);
                }
                var v = p / h, m = f / c;
                isNaN(v) && (v = 1 / 0), isNaN(m) && (m = 1 / 0);
                var _ = Math.max(0, Math.floor(Math.min(v, m))), x = bw(t.model), w = t.getExtent(), b = x.lastAutoInterval, S = x.lastTickCount;
                return null != b && null != S && Math.abs(b - _) <= 1 && Math.abs(S - a) <= 1 && b > _ && x.axisExtent0 === w[0] && x.axisExtent1 === w[1] ? _ = b : (x.lastTickCount = a, 
                x.lastAutoInterval = _, x.axisExtent0 = w[0], x.axisExtent1 = w[1]), _;
            }(this);
        }, t;
    }(), Tw = function(t) {
        function e(e, n, i) {
            var r, o = t.call(this) || this;
            o.motionBlur = !1, o.lastFrameAlpha = .7, o.dpr = 1, o.virtual = !1, o.config = {}, 
            o.incremental = !1, o.zlevel = 0, o.maxRepaintRectCount = 5, o.__dirty = !0, o.__firstTimePaint = !0, 
            o.__used = !1, o.__drawIndex = 0, o.__startIndex = 0, o.__endIndex = 0, o.__prevStartIndex = null, 
            o.__prevEndIndex = null, i = i || Hc, "string" == typeof e ? r = Ql(e, n, i) : k(e) && (e = (r = e).id), 
            o.id = e, o.dom = r;
            var a = r.style;
            return a && (r.onselectstart = Jl, a.webkitUserSelect = "none", a.userSelect = "none", 
            a.webkitTapHighlightColor = "rgba(0,0,0,0)", a["-webkit-touch-callout"] = "none", 
            a.padding = "0", a.margin = "0", a.borderWidth = "0"), o.domBack = null, o.ctxBack = null, 
            o.painter = n, o.config = null, o.dpr = i, o;
        }
        return n(e, t), e.prototype.getElementCount = function() {
            return this.__endIndex - this.__startIndex;
        }, e.prototype.afterBrush = function() {
            this.__prevStartIndex = this.__startIndex, this.__prevEndIndex = this.__endIndex;
        }, e.prototype.initContext = function() {
            this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr;
        }, e.prototype.setUnpainted = function() {
            this.__firstTimePaint = !0;
        }, e.prototype.createBackBuffer = function() {
            var t = this.dpr;
            this.domBack = Ql("back-" + this.id, this.painter, t), this.ctxBack = this.domBack.getContext("2d"), 
            1 !== t && this.ctxBack.scale(t, t);
        }, e.prototype.createRepaintRects = function(t, e, n, i) {
            function r(t) {
                if (t.isFinite() && !t.isZero()) if (0 === o.length) {
                    (d = new lp(0, 0, 0, 0)).copy(t), o.push(d);
                } else {
                    for (var e = !1, n = 1 / 0, i = 0, r = 0; r < o.length; ++r) {
                        var u = o[r];
                        if (u.intersect(t)) {
                            var h = new lp(0, 0, 0, 0);
                            h.copy(u), h.union(t), o[r] = h, e = !0;
                            break;
                        }
                        if (s) {
                            l.copy(t), l.union(u);
                            var c = t.width * t.height, p = u.width * u.height, f = l.width * l.height - c - p;
                            n > f && (n = f, i = r);
                        }
                    }
                    var d;
                    if (s && (o[i].union(t), e = !0), !e) (d = new lp(0, 0, 0, 0)).copy(t), o.push(d);
                    s || (s = o.length >= a);
                }
            }
            if (this.__firstTimePaint) return this.__firstTimePaint = !1, null;
            for (var o = [], a = this.maxRepaintRectCount, s = !1, l = new lp(0, 0, 0, 0), u = this.__startIndex; u < this.__endIndex; ++u) {
                if (p = t[u]) {
                    var h = p.shouldBePainted(n, i, !0, !0);
                    (f = p.__isRendered && (p.__dirty & lc || !h) ? p.getPrevPaintRect() : null) && r(f);
                    var c = h && (p.__dirty & lc || !p.__isRendered) ? p.getPaintRect() : null;
                    c && r(c);
                }
            }
            for (u = this.__prevStartIndex; u < this.__prevEndIndex; ++u) {
                var p, f;
                h = (p = e[u]).shouldBePainted(n, i, !0, !0);
                if (p && (!h || !p.__zr) && p.__isRendered) (f = p.getPrevPaintRect()) && r(f);
            }
            var d;
            do {
                d = !1;
                for (u = 0; u < o.length; ) if (o[u].isZero()) o.splice(u, 1); else {
                    for (var g = u + 1; g < o.length; ) o[u].intersect(o[g]) ? (d = !0, o[u].union(o[g]), 
                    o.splice(g, 1)) : g++;
                    u++;
                }
            } while (d);
            return this._paintRects = o, o;
        }, e.prototype.debugGetPaintRects = function() {
            return (this._paintRects || []).slice();
        }, e.prototype.resize = function(t, e) {
            var n = this.dpr, i = this.dom, r = i.style, o = this.domBack;
            r && (r.width = t + "px", r.height = e + "px"), i.width = t * n, i.height = e * n, 
            o && (o.width = t * n, o.height = e * n, 1 !== n && this.ctxBack.scale(n, n));
        }, e.prototype.clear = function(t, e, n) {
            function i(t, n, i, r) {
                if (o.clearRect(t, n, i, r), e && "transparent" !== e) {
                    var a = void 0;
                    L(e) ? (a = e.__canvasGradient || is(o, e, {
                        x: 0,
                        y: 0,
                        width: i,
                        height: r
                    }), e.__canvasGradient = a) : O(e) && (a = us(o, e, {
                        dirty: function() {
                            c.setUnpainted(), c.__painter.refresh();
                        }
                    })), o.save(), o.fillStyle = a || e, o.fillRect(t, n, i, r), o.restore();
                }
                l && (o.save(), o.globalAlpha = u, o.drawImage(p, t, n, i, r), o.restore());
            }
            var r = this.dom, o = this.ctx, a = r.width, s = r.height;
            e = e || this.clearColor;
            var l = this.motionBlur && !t, u = this.lastFrameAlpha, h = this.dpr, c = this;
            l && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", 
            this.ctxBack.drawImage(r, 0, 0, a / h, s / h));
            var p = this.domBack;
            !n || l ? i(0, 0, a, s) : n.length && y(n, function(t) {
                i(t.x * h, t.y * h, t.width * h, t.height * h);
            });
        }, e;
    }(Yh), Cw = 314159, Aw = function() {
        function t(t, e, n) {
            this.type = "canvas", this._zlevelList = [], this._prevDisplayList = [], this._layers = {}, 
            this._layerConfig = {}, this._needsManuallyCompositing = !1, this.type = "canvas";
            var i = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase();
            this._opts = n = h({}, n || {}), this.dpr = n.devicePixelRatio || Hc, this._singleCanvas = i, 
            this.root = t;
            var r = t.style;
            r && (r.webkitTapHighlightColor = "transparent", r.webkitUserSelect = "none", r.userSelect = "none", 
            r["-webkit-touch-callout"] = "none", t.innerHTML = ""), this.storage = e;
            var o = this._zlevelList;
            this._prevDisplayList = [];
            var a = this._layers;
            if (i) {
                var s = t, l = s.width, u = s.height;
                null != n.width && (l = n.width), null != n.height && (u = n.height), this.dpr = n.devicePixelRatio || 1, 
                s.width = l * this.dpr, s.height = u * this.dpr, this._width = l, this._height = u;
                var c = new Tw(s, this, this.dpr);
                c.__builtin__ = !0, c.initContext(), a[Cw] = c, c.zlevel = Cw, o.push(Cw), this._domRoot = t;
            } else {
                this._width = this._getSize(0), this._height = this._getSize(1);
                var p = this._domRoot = function(t, e) {
                    var n = document.createElement("div");
                    return n.style.cssText = [ "position:relative", "width:" + t + "px", "height:" + e + "px", "padding:0", "margin:0", "border-width:0" ].join(";") + ";", 
                    n;
                }(this._width, this._height);
                t.appendChild(p);
            }
        }
        return t.prototype.getType = function() {
            return "canvas";
        }, t.prototype.isSingleCanvas = function() {
            return this._singleCanvas;
        }, t.prototype.getViewportRoot = function() {
            return this._domRoot;
        }, t.prototype.getViewportRootOffset = function() {
            var t = this.getViewportRoot();
            return t ? {
                offsetLeft: t.offsetLeft || 0,
                offsetTop: t.offsetTop || 0
            } : void 0;
        }, t.prototype.refresh = function(t) {
            var e = this.storage.getDisplayList(!0), n = this._prevDisplayList, i = this._zlevelList;
            this._redrawId = Math.random(), this._paintList(e, n, t, this._redrawId);
            for (var r = 0; r < i.length; r++) {
                var o = i[r], a = this._layers[o];
                if (!a.__builtin__ && a.refresh) {
                    var s = 0 === r ? this._backgroundColor : null;
                    a.refresh(s);
                }
            }
            return this._opts.useDirtyRect && (this._prevDisplayList = e.slice()), this;
        }, t.prototype.refreshHover = function() {
            this._paintHoverList(this.storage.getDisplayList(!1));
        }, t.prototype._paintHoverList = function(t) {
            var e = t.length, n = this._hoverlayer;
            if (n && n.clear(), e) {
                for (var i, r = {
                    inHover: !0,
                    viewWidth: this._width,
                    viewHeight: this._height
                }, o = 0; e > o; o++) {
                    var a = t[o];
                    a.__inHover && (n || (n = this._hoverlayer = this.getLayer(1e5)), i || (i = n.ctx).save(), 
                    ys(i, a, r, o === e - 1));
                }
                i && i.restore();
            }
        }, t.prototype.getHoverLayer = function() {
            return this.getLayer(1e5);
        }, t.prototype.paintOne = function(t, e) {
            gs(t, e);
        }, t.prototype._paintList = function(t, e, n, i) {
            if (this._redrawId === i) {
                n = n || !1, this._updateLayerStatus(t);
                var r = this._doPaintList(t, e, n), o = r.finished, a = r.needsRefreshHover;
                if (this._needsManuallyCompositing && this._compositeManually(), a && this._paintHoverList(t), 
                o) this.eachLayer(function(t) {
                    t.afterBrush && t.afterBrush();
                }); else {
                    var s = this;
                    pc(function() {
                        s._paintList(t, e, n, i);
                    });
                }
            }
        }, t.prototype._compositeManually = function() {
            var t = this.getLayer(Cw).ctx, e = this._domRoot.width, n = this._domRoot.height;
            t.clearRect(0, 0, e, n), this.eachBuiltinLayer(function(i) {
                i.virtual && t.drawImage(i.dom, 0, 0, e, n);
            });
        }, t.prototype._doPaintList = function(t, e, n) {
            for (var i = this, r = [], o = this._opts.useDirtyRect, a = 0; a < this._zlevelList.length; a++) {
                var s = this._zlevelList[a], l = this._layers[s];
                l.__builtin__ && l !== this._hoverlayer && (l.__dirty || n) && r.push(l);
            }
            for (var u = !0, h = !1, c = function(a) {
                var s = r[a], l = s.ctx, c = o && s.createRepaintRects(t, e, p._width, p._height), f = n ? s.__startIndex : s.__drawIndex, d = !n && s.incremental && Date.now, g = d && Date.now(), y = s.zlevel === p._zlevelList[0] ? p._backgroundColor : null;
                if (s.__startIndex === s.__endIndex) s.clear(!1, y, c); else if (f === s.__startIndex) {
                    var v = t[f];
                    v.incremental && v.notClear && !n || s.clear(!1, y, c);
                }
                -1 === f && (console.error("For some unknown reason. drawIndex is -1"), f = s.__startIndex);
                var m, _ = function(e) {
                    var n = {
                        inHover: !1,
                        allClipped: !1,
                        prevEl: null,
                        viewWidth: i._width,
                        viewHeight: i._height
                    };
                    for (m = f; m < s.__endIndex; m++) {
                        var r = t[m];
                        if (r.__inHover && (h = !0), i._doPaintEl(r, s, o, e, n, m === s.__endIndex - 1), 
                        d) if (Date.now() - g > 15) break;
                    }
                    n.prevElClipPaths && l.restore();
                };
                if (c) if (0 === c.length) m = s.__endIndex; else for (var x = p.dpr, w = 0; w < c.length; ++w) {
                    var b = c[w];
                    l.save(), l.beginPath(), l.rect(b.x * x, b.y * x, b.width * x, b.height * x), l.clip(), 
                    _(b), l.restore();
                } else l.save(), _(), l.restore();
                s.__drawIndex = m, s.__drawIndex < s.__endIndex && (u = !1);
            }, p = this, f = 0; f < r.length; f++) c(f);
            return wh.wxa && y(this._layers, function(t) {
                t && t.ctx && t.ctx.draw && t.ctx.draw();
            }), {
                finished: u,
                needsRefreshHover: h
            };
        }, t.prototype._doPaintEl = function(t, e, n, i, r, o) {
            var a = e.ctx;
            if (n) {
                var s = t.getPaintRect();
                (!i || s && s.intersect(i)) && (ys(a, t, r, o), t.setPrevPaintRect(s));
            } else ys(a, t, r, o);
        }, t.prototype.getLayer = function(t, e) {
            this._singleCanvas && !this._needsManuallyCompositing && (t = Cw);
            var n = this._layers[t];
            return n || ((n = new Tw("zr_" + t, this, this.dpr)).zlevel = t, n.__builtin__ = !0, 
            this._layerConfig[t] ? l(n, this._layerConfig[t], !0) : this._layerConfig[t - .01] && l(n, this._layerConfig[t - .01], !0), 
            e && (n.virtual = e), this.insertLayer(t, n), n.initContext()), n;
        }, t.prototype.insertLayer = function(t, e) {
            var n = this._layers, i = this._zlevelList, r = i.length, o = this._domRoot, s = null, l = -1;
            if (n[t]) a("ZLevel " + t + " has been used already"); else if (function(t) {
                return !!t && (!!t.__builtin__ || "function" == typeof t.resize && "function" == typeof t.refresh);
            }(e)) {
                if (r > 0 && t > i[0]) {
                    for (l = 0; r - 1 > l && !(i[l] < t && i[l + 1] > t); l++) ;
                    s = n[i[l]];
                }
                if (i.splice(l + 1, 0, t), n[t] = e, !e.virtual) if (s) {
                    var u = s.dom;
                    u.nextSibling ? o.insertBefore(e.dom, u.nextSibling) : o.appendChild(e.dom);
                } else o.firstChild ? o.insertBefore(e.dom, o.firstChild) : o.appendChild(e.dom);
                e.__painter = this;
            } else a("Layer of zlevel " + t + " is not valid");
        }, t.prototype.eachLayer = function(t, e) {
            for (var n = this._zlevelList, i = 0; i < n.length; i++) {
                var r = n[i];
                t.call(e, this._layers[r], r);
            }
        }, t.prototype.eachBuiltinLayer = function(t, e) {
            for (var n = this._zlevelList, i = 0; i < n.length; i++) {
                var r = n[i], o = this._layers[r];
                o.__builtin__ && t.call(e, o, r);
            }
        }, t.prototype.eachOtherLayer = function(t, e) {
            for (var n = this._zlevelList, i = 0; i < n.length; i++) {
                var r = n[i], o = this._layers[r];
                o.__builtin__ || t.call(e, o, r);
            }
        }, t.prototype.getLayers = function() {
            return this._layers;
        }, t.prototype._updateLayerStatus = function(t) {
            function e(t) {
                o && (o.__endIndex !== t && (o.__dirty = !0), o.__endIndex = t);
            }
            if (this.eachBuiltinLayer(function(t) {
                t.__dirty = t.__used = !1;
            }), this._singleCanvas) for (var n = 1; n < t.length; n++) {
                if ((l = t[n]).zlevel !== t[n - 1].zlevel || l.incremental) {
                    this._needsManuallyCompositing = !0;
                    break;
                }
            }
            var i, r, o = null, s = 0;
            for (r = 0; r < t.length; r++) {
                var l, u = (l = t[r]).zlevel, h = void 0;
                i !== u && (i = u, s = 0), l.incremental ? ((h = this.getLayer(u + .001, this._needsManuallyCompositing)).incremental = !0, 
                s = 1) : h = this.getLayer(u + (s > 0 ? .01 : 0), this._needsManuallyCompositing), 
                h.__builtin__ || a("ZLevel " + u + " has been used by unkown layer " + h.id), h !== o && (h.__used = !0, 
                h.__startIndex !== r && (h.__dirty = !0), h.__startIndex = r, h.__drawIndex = h.incremental ? -1 : r, 
                e(r), o = h), l.__dirty & lc && !l.__inHover && (h.__dirty = !0, h.incremental && h.__drawIndex < 0 && (h.__drawIndex = r));
            }
            e(r), this.eachBuiltinLayer(function(t) {
                !t.__used && t.getElementCount() > 0 && (t.__dirty = !0, t.__startIndex = t.__endIndex = t.__drawIndex = 0), 
                t.__dirty && t.__drawIndex < 0 && (t.__drawIndex = t.__startIndex);
            });
        }, t.prototype.clear = function() {
            return this.eachBuiltinLayer(this._clearLayer), this;
        }, t.prototype._clearLayer = function(t) {
            t.clear();
        }, t.prototype.setBackgroundColor = function(t) {
            this._backgroundColor = t, y(this._layers, function(t) {
                t.setUnpainted();
            });
        }, t.prototype.configLayer = function(t, e) {
            if (e) {
                var n = this._layerConfig;
                n[t] ? l(n[t], e, !0) : n[t] = e;
                for (var i = 0; i < this._zlevelList.length; i++) {
                    var r = this._zlevelList[i];
                    if (r === t || r === t + .01) l(this._layers[r], n[t], !0);
                }
            }
        }, t.prototype.delLayer = function(t) {
            var e = this._layers, n = this._zlevelList, i = e[t];
            i && (i.dom.parentNode.removeChild(i.dom), delete e[t], n.splice(p(n, t), 1));
        }, t.prototype.resize = function(t, e) {
            if (this._domRoot.style) {
                var n = this._domRoot;
                n.style.display = "none";
                var i = this._opts;
                if (null != t && (i.width = t), null != e && (i.height = e), t = this._getSize(0), 
                e = this._getSize(1), n.style.display = "", this._width !== t || e !== this._height) {
                    for (var r in n.style.width = t + "px", n.style.height = e + "px", this._layers) this._layers.hasOwnProperty(r) && this._layers[r].resize(t, e);
                    this.refresh(!0);
                }
                this._width = t, this._height = e;
            } else {
                if (null == t || null == e) return;
                this._width = t, this._height = e, this.getLayer(Cw).resize(t, e);
            }
            return this;
        }, t.prototype.clearLayer = function(t) {
            var e = this._layers[t];
            e && e.clear();
        }, t.prototype.dispose = function() {
            this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null;
        }, t.prototype.getRenderedCanvas = function(t) {
            if (t = t || {}, this._singleCanvas && !this._compositeManually) return this._layers[Cw].dom;
            var e = new Tw("image", this, t.pixelRatio || this.dpr);
            e.initContext(), e.clear(!1, t.backgroundColor || this._backgroundColor);
            var n = e.ctx;
            if (t.pixelRatio <= this.dpr) {
                this.refresh();
                var i = e.dom.width, r = e.dom.height;
                this.eachLayer(function(t) {
                    t.__builtin__ ? n.drawImage(t.dom, 0, 0, i, r) : t.renderToCanvas && (n.save(), 
                    t.renderToCanvas(n), n.restore());
                });
            } else for (var o = {
                inHover: !1,
                viewWidth: this._width,
                viewHeight: this._height
            }, a = this.storage.getDisplayList(!0), s = 0, l = a.length; l > s; s++) {
                var u = a[s];
                ys(n, u, o, s === l - 1);
            }
            return e.dom;
        }, t.prototype.getWidth = function() {
            return this._width;
        }, t.prototype.getHeight = function() {
            return this._height;
        }, t.prototype._getSize = function(t) {
            var e = this._opts, n = [ "width", "height" ][t], i = [ "clientWidth", "clientHeight" ][t], r = [ "paddingLeft", "paddingTop" ][t], o = [ "paddingRight", "paddingBottom" ][t];
            if (null != e[n] && "auto" !== e[n]) return parseFloat(e[n]);
            var a = this.root, s = document.defaultView.getComputedStyle(a);
            return (a[i] || tu(s[n]) || tu(a.style[n])) - (tu(s[r]) || 0) - (tu(s[o]) || 0) | 0;
        }, t.prototype.pathToImage = function(t, e) {
            e = e || this.dpr;
            var n = document.createElement("canvas"), i = n.getContext("2d"), r = t.getBoundingRect(), o = t.style, a = o.shadowBlur * e, s = o.shadowOffsetX * e, l = o.shadowOffsetY * e, u = t.hasStroke() ? o.lineWidth : 0, c = Math.max(u / 2, -s + a), p = Math.max(u / 2, s + a), f = Math.max(u / 2, -l + a), d = Math.max(u / 2, l + a), g = r.width + c + p, y = r.height + f + d;
            n.width = g * e, n.height = y * e, i.scale(e, e), i.clearRect(0, 0, g, y), i.dpr = e;
            var v = {
                x: t.x,
                y: t.y,
                scaleX: t.scaleX,
                scaleY: t.scaleY,
                rotation: t.rotation,
                originX: t.originX,
                originY: t.originY
            };
            t.x = c - r.x, t.y = f - r.y, t.rotation = 0, t.scaleX = 1, t.scaleY = 1, t.updateTransform(), 
            t && ys(i, t, {
                inHover: !1,
                viewWidth: this._width,
                viewHeight: this._height
            }, !0);
            var m = new $f({
                style: {
                    x: 0,
                    y: 0,
                    image: n
                }
            });
            return h(t, v), m;
        }, t;
    }(), kw = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.type = "dataset", e;
        }
        return n(e, t), e.prototype.init = function(e, n, i) {
            t.prototype.init.call(this, e, n, i), this._sourceManager = new _v(this), sa(this);
        }, e.prototype.mergeOption = function(e, n) {
            t.prototype.mergeOption.call(this, e, n), sa(this);
        }, e.prototype.optionUpdated = function() {
            this._sourceManager.dirty();
        }, e.prototype.getSourceManager = function() {
            return this._sourceManager;
        }, e.type = "dataset", e.defaultOption = {
            seriesLayoutBy: Ly
        }, e;
    }(_y), Iw = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.type = "dataset", e;
        }
        return n(e, t), e.type = "dataset", e;
    }(bv);
    Gl([ function(t) {
        t.registerPainter("canvas", Aw);
    }, function(t) {
        t.registerComponentModel(kw), t.registerComponentView(Iw);
    } ]);
    var Dw = function(t) {
        function e() {
            var n = null !== t && t.apply(this, arguments) || this;
            return n.type = e.type, n;
        }
        return n(e, t), e.prototype.render = function(t) {
            function e(t, e) {
                var n = t.getItemVisual(e, "symbol") || "circle";
                if ("none" !== n) {
                    var i = function(t) {
                        return S(t) || (t = [ +t, +t ]), t;
                    }(t.getItemVisual(e, "symbolSize")), r = ns(n, -1, -1, 2, 2), o = t.getItemVisual(e, "symbolRotate") || 0;
                    return r.attr({
                        style: {
                            strokeNoScale: !0
                        },
                        z2: 100,
                        scaleX: i[0] / 2,
                        scaleY: i[1] / 2,
                        rotation: o * Math.PI / 180 || 0
                    }), r;
                }
            }
            function n(n, i, r, o, a, s) {
                r.removeAll();
                for (var l = 0; l < i.length - 1; l++) {
                    var u = e(o, a);
                    u && (u.__dimIdx = l, n[l] ? (u.setPosition(n[l]), Pg[s ? "initProps" : "updateProps"](u, {
                        x: i[l][0],
                        y: i[l][1]
                    }, t, a)) : u.setPosition(i[l]), r.add(u));
                }
            }
            function i(t) {
                return v(t, function() {
                    return [ r.cx, r.cy ];
                });
            }
            var r = t.coordinateSystem, o = this.group, a = t.getData(), l = this._data;
            a.diff(l).add(function(e) {
                var r = a.getItemLayout(e);
                if (r) {
                    var o = new ig(), s = new og(), l = {
                        shape: {
                            points: r
                        }
                    };
                    o.shape.points = i(r), s.shape.points = i(r), mr(o, l, t, e), mr(s, l, t, e);
                    var u = new mp(), h = new mp();
                    u.add(s), u.add(o), u.add(h), n(s.shape.points, r, h, a, e, !0), a.setItemGraphicEl(e, u);
                }
            }).update(function(e, i) {
                var r = l.getItemGraphicEl(i), o = r.childAt(0), s = r.childAt(1), u = r.childAt(2), h = {
                    shape: {
                        points: a.getItemLayout(e)
                    }
                };
                h.shape.points && (n(o.shape.points, h.shape.points, u, a, e, !1), vr(o, h, t), 
                vr(s, h, t), a.setItemGraphicEl(e, r));
            }).remove(function(t) {
                o.remove(l.getItemGraphicEl(t));
            }).execute(), a.eachItemGraphicEl(function(t, e) {
                var n = a.getItemModel(e), i = t.childAt(0), r = t.childAt(1), l = t.childAt(2), u = a.getItemVisual(e, "style"), p = u.fill;
                o.add(t), i.useStyle(c(n.getModel("lineStyle").getLineStyle(), {
                    fill: "none",
                    stroke: p
                })), Yi(i, n, "lineStyle"), Yi(r, n, "areaStyle");
                var f = n.getModel("areaStyle"), d = f.isEmpty() && f.parentModel.isEmpty();
                r.ignore = d, y([ "emphasis", "select", "blur" ], function(t) {
                    var e = n.getModel([ t, "areaStyle" ]), i = e.isEmpty() && e.parentModel.isEmpty();
                    r.ensureState(t).ignore = i && d;
                }), r.useStyle(c(f.getAreaStyle(), {
                    fill: p,
                    opacity: .7,
                    decal: u.decal
                }));
                var g = n.getModel("emphasis"), v = g.getModel("itemStyle").getItemStyle();
                l.eachChild(function(t) {
                    if (t instanceof $f) {
                        var i = t.style;
                        t.useStyle(h({
                            image: i.image,
                            x: i.x,
                            y: i.y,
                            width: i.width,
                            height: i.height
                        }, u));
                    } else t.useStyle(u), t.setColor(p);
                    t.ensureState("emphasis").style = s(v);
                    var r = a.get(a.dimensions[t.__dimIdx], e);
                    (null == r || isNaN(r)) && (r = ""), Rr(t, Er(n), {
                        labelFetcher: a.hostModel,
                        labelDataIndex: e,
                        labelDimIndex: t.__dimIdx,
                        defaultText: r,
                        inheritColor: p,
                        defaultOpacity: u.opacity
                    });
                }), Xi(t, g.get("focus"), g.get("blurScope"));
            }), this._data = a;
        }, e.prototype.remove = function() {
            this.group.removeAll(), this._data = null;
        }, e.type = "radar", e;
    }(Tv), Pw = function() {
        function t(t, e) {
            this._getDataWithEncodedVisual = t, this._getRawData = e;
        }
        return t.prototype.getAllNames = function() {
            var t = this._getRawData();
            return t.mapArray(t.getName);
        }, t.prototype.containName = function(t) {
            return this._getRawData().indexOfName(t) >= 0;
        }, t.prototype.indexOfName = function(t) {
            return this._getDataWithEncodedVisual().indexOfName(t);
        }, t.prototype.getItemVisual = function(t, e) {
            return this._getDataWithEncodedVisual().getItemVisual(t, e);
        }, t;
    }(), Lw = function(t) {
        function e() {
            var n = null !== t && t.apply(this, arguments) || this;
            return n.type = e.type, n.useColorPaletteOnData = !0, n.hasSymbolVisual = !0, n;
        }
        return n(e, t), e.prototype.init = function() {
            t.prototype.init.apply(this, arguments), this.legendVisualProvider = new Pw(Eh(this.getData, this), Eh(this.getRawData, this));
        }, e.prototype.getInitialData = function() {
            return ou(this, {
                generateCoord: "indicator_",
                generateCoordCount: 1 / 0
            });
        }, e.prototype.formatTooltip = function(t) {
            var e = this.getData(), n = this.coordinateSystem.getIndicatorAxes(), i = this.getData().getName(t), r = "" === i ? this.name : i, o = ca(this, t);
            return ha("section", {
                header: r,
                sortBlocks: !0,
                blocks: v(n, function(n) {
                    var i = e.get(e.mapDimension(n.dim), t);
                    return ha("nameValue", {
                        markerType: "subItem",
                        markerColor: o,
                        name: n.name,
                        value: i,
                        sortParam: i
                    });
                })
            });
        }, e.prototype.getTooltipPosition = function(t) {
            if (null != t) for (var e = this.getData(), n = this.coordinateSystem, i = e.getValues(v(n.dimensions, function(t) {
                return e.mapDimension(t);
            }), t), r = 0, o = i.length; o > r; r++) if (!isNaN(i[r])) {
                var a = n.getIndicatorAxes();
                return n.coordToPoint(a[r].dataToCoord(i[r]), r);
            }
        }, e.type = "series.radar", e.dependencies = [ "radar" ], e.defaultOption = {
            zlevel: 0,
            z: 2,
            coordinateSystem: "radar",
            legendHoverLink: !0,
            radarIndex: 0,
            lineStyle: {
                width: 2,
                type: "solid"
            },
            label: {
                position: "top"
            },
            symbolSize: 8
        }, e;
    }(wv), Ow = {
        show: !0,
        zlevel: 0,
        z: 0,
        inverse: !1,
        name: "",
        nameLocation: "end",
        nameRotate: null,
        nameTruncate: {
            maxWidth: null,
            ellipsis: "...",
            placeholder: "."
        },
        nameTextStyle: {},
        nameGap: 15,
        silent: !1,
        triggerEvent: !1,
        tooltip: {
            show: !1
        },
        axisPointer: {},
        axisLine: {
            show: !0,
            onZero: !0,
            onZeroAxisIndex: null,
            lineStyle: {
                color: "#6E7079",
                width: 1,
                type: "solid"
            },
            symbol: [ "none", "none" ],
            symbolSize: [ 10, 15 ]
        },
        axisTick: {
            show: !0,
            inside: !1,
            length: 5,
            lineStyle: {
                width: 1
            }
        },
        axisLabel: {
            show: !0,
            inside: !1,
            rotate: 0,
            showMinLabel: null,
            showMaxLabel: null,
            margin: 8,
            fontSize: 12
        },
        splitLine: {
            show: !0,
            lineStyle: {
                color: [ "#E0E6F1" ],
                width: 1,
                type: "solid"
            }
        },
        splitArea: {
            show: !1,
            areaStyle: {
                color: [ "rgba(250,250,250,0.2)", "rgba(210,219,238,0.2)" ]
            }
        }
    }, Rw = l({
        boundaryGap: !0,
        deduplication: null,
        splitLine: {
            show: !1
        },
        axisTick: {
            alignWithLabel: !1,
            interval: "auto"
        },
        axisLabel: {
            interval: "auto"
        }
    }, Ow), Ew = l({
        boundaryGap: [ 0, 0 ],
        axisLine: {
            show: "auto"
        },
        axisTick: {
            show: "auto"
        },
        splitNumber: 5,
        minorTick: {
            show: !1,
            splitNumber: 5,
            length: 3,
            lineStyle: {}
        },
        minorSplitLine: {
            show: !1,
            lineStyle: {
                color: "#F4F7FD",
                width: 1
            }
        }
    }, Ow), Nw = {
        category: Rw,
        value: Ew,
        time: l({
            scale: !0,
            splitNumber: 6,
            axisLabel: {
                showMinLabel: !1,
                showMaxLabel: !1,
                rich: {
                    primary: {
                        fontWeight: "bold"
                    }
                }
            },
            splitLine: {
                show: !1
            }
        }, Ew),
        log: c({
            scale: !0,
            logBase: 10
        }, Ew)
    }, Bw = Nw.value, zw = function(t) {
        function e() {
            var n = null !== t && t.apply(this, arguments) || this;
            return n.type = e.type, n;
        }
        return n(e, t), e.prototype.optionUpdated = function() {
            var t = this.get("boundaryGap"), e = this.get("splitNumber"), n = this.get("scale"), i = this.get("axisLine"), r = this.get("axisTick"), o = this.get("axisLabel"), a = this.get("axisName"), u = this.get([ "axisName", "show" ]), h = this.get([ "axisName", "formatter" ]), p = this.get("axisNameGap"), f = this.get("triggerEvent"), g = v(this.get("indicator") || [], function(g) {
                null != g.max && g.max > 0 && !g.min ? g.min = 0 : null != g.min && g.min < 0 && !g.max && (g.max = 0);
                var y = a;
                null != g.color && (y = c({
                    color: g.color
                }, a));
                var v = l(s(g), {
                    boundaryGap: t,
                    splitNumber: e,
                    scale: n,
                    axisLine: i,
                    axisTick: r,
                    axisLabel: o,
                    name: g.text,
                    nameLocation: "end",
                    nameGap: p,
                    nameTextStyle: y,
                    triggerEvent: f
                }, !1);
                if (u || (v.name = ""), "string" == typeof h) {
                    var m = v.name;
                    v.name = h.replace("{value}", null != m ? m : "");
                } else "function" == typeof h && (v.name = h(v.name, v));
                var _ = new Yg(v, null, this.ecModel);
                return d(_, pw.prototype), _.mainType = "radar", _.componentIndex = this.componentIndex, 
                _;
            }, this);
            this._indicatorModels = g;
        }, e.prototype.getIndicatorModels = function() {
            return this._indicatorModels;
        }, e.type = "radar", e.defaultOption = {
            zlevel: 0,
            z: 0,
            center: [ "50%", "50%" ],
            radius: "75%",
            startAngle: 90,
            axisName: {
                show: !0
            },
            boundaryGap: [ 0, 0 ],
            splitNumber: 5,
            axisNameGap: 15,
            scale: !1,
            shape: "polygon",
            axisLine: l({
                lineStyle: {
                    color: "#bbb"
                }
            }, Bw.axisLine),
            axisLabel: au(Bw.axisLabel, !1),
            axisTick: au(Bw.axisTick, !1),
            splitLine: au(Bw.splitLine, !0),
            splitArea: au(Bw.splitArea, !0),
            indicator: []
        }, e;
    }(_y), Fw = Math.PI, Vw = function() {
        function t(t, e) {
            this.group = new mp(), this.opt = e, this.axisModel = t, c(e, {
                labelOffset: 0,
                nameDirection: 1,
                tickDirection: 1,
                labelDirection: 1,
                silent: !0,
                handleAutoShown: function() {
                    return !0;
                }
            });
            var n = new mp({
                x: e.position[0],
                y: e.position[1],
                rotation: e.rotation
            });
            n.updateTransform(), this._transformGroup = n;
        }
        return t.prototype.hasBuilder = function(t) {
            return !!Hw[t];
        }, t.prototype.add = function(t) {
            Hw[t](this.opt, this.axisModel, this.group, this._transformGroup);
        }, t.prototype.getGroup = function() {
            return this.group;
        }, t.innerTextLayout = function(t, e, n) {
            var i, r, o = Fe(e - t);
            return Ve(o) ? (r = n > 0 ? "top" : "bottom", i = "center") : Ve(o - Fw) ? (r = n > 0 ? "bottom" : "top", 
            i = "center") : (r = "middle", i = o > 0 && Fw > o ? n > 0 ? "right" : "left" : n > 0 ? "left" : "right"), 
            {
                rotation: o,
                textAlign: i,
                textVerticalAlign: r
            };
        }, t.makeAxisEventDataBase = function(t) {
            var e = {
                componentType: t.mainType,
                componentIndex: t.componentIndex
            };
            return e[t.mainType + "Index"] = t.componentIndex, e;
        }, t.isLabelSilent = function(t) {
            var e = t.get("tooltip");
            return t.get("silent") || !(t.get("triggerEvent") || e && e.show);
        }, t;
    }(), Hw = {
        axisLine: function(t, e, n, i) {
            var r = e.get([ "axisLine", "show" ]);
            if ("auto" === r && t.handleAutoShown && (r = t.handleAutoShown("axisLine")), r) {
                var o = e.axis.getExtent(), a = i.transform, s = [ o[0], 0 ], l = [ o[1], 0 ];
                a && (ot(s, s, a), ot(l, l, a));
                var u = h({
                    lineCap: "round"
                }, e.getModel([ "axisLine", "lineStyle" ]).getLineStyle()), c = new lg({
                    subPixelOptimize: !0,
                    shape: {
                        x1: s[0],
                        y1: s[1],
                        x2: l[0],
                        y2: l[1]
                    },
                    style: u,
                    strokeContainThreshold: t.strokeContainThreshold || 5,
                    silent: !0,
                    z2: 1
                });
                c.anid = "line", n.add(c);
                var p = e.get([ "axisLine", "symbol" ]), f = e.get([ "axisLine", "symbolSize" ]), d = e.get([ "axisLine", "symbolOffset" ]) || 0;
                if ("number" == typeof d && (d = [ d, d ]), null != p) {
                    "string" == typeof p && (p = [ p, p ]), ("string" == typeof f || "number" == typeof f) && (f = [ f, f ]);
                    var g = f[0], v = f[1];
                    y([ {
                        rotate: t.rotation + Math.PI / 2,
                        offset: d[0],
                        r: 0
                    }, {
                        rotate: t.rotation - Math.PI / 2,
                        offset: d[1],
                        r: Math.sqrt((s[0] - l[0]) * (s[0] - l[0]) + (s[1] - l[1]) * (s[1] - l[1]))
                    } ], function(e, i) {
                        if ("none" !== p[i] && null != p[i]) {
                            var r = ns(p[i], -g / 2, -v / 2, g, v, u.stroke, !0), o = e.r + e.offset;
                            r.attr({
                                rotation: e.rotate,
                                x: s[0] + o * Math.cos(t.rotation),
                                y: s[1] - o * Math.sin(t.rotation),
                                silent: !0,
                                z2: 11
                            }), n.add(r);
                        }
                    });
                }
            }
        },
        axisTickLabel: function(t, e, n, i) {
            var r = function(t, e, n, i) {
                var r = n.axis, o = n.getModel("axisTick"), a = o.get("show");
                if ("auto" === a && i.handleAutoShown && (a = i.handleAutoShown("axisTick")), a && !r.scale.isBlank()) {
                    for (var s = o.getModel("lineStyle"), l = i.tickDirection * o.get("length"), u = hu(r.getTicksCoords(), e.transform, l, c(s.getLineStyle(), {
                        stroke: n.get([ "axisLine", "lineStyle", "color" ])
                    }), "ticks"), h = 0; h < u.length; h++) t.add(u[h]);
                    return u;
                }
            }(n, i, e, t), o = function(t, e, n, i) {
                var r = n.axis;
                if (E(i.axisLabelShow, n.get([ "axisLabel", "show" ])) && !r.scale.isBlank()) {
                    var o = n.getModel("axisLabel"), a = o.get("margin"), s = r.getViewLabels(), l = (E(i.labelRotate, o.get("rotate")) || 0) * Fw / 180, u = Vw.innerTextLayout(i.rotation, l, i.labelDirection), h = n.getCategories && n.getCategories(!0), c = [], p = Vw.isLabelSilent(n), f = n.get("triggerEvent");
                    return y(s, function(s, l) {
                        var d = "ordinal" === r.scale.type ? r.scale.getRawOrdinalNumber(s.tickValue) : s.tickValue, g = s.formattedLabel, y = s.rawLabel, v = o;
                        if (h && h[d]) {
                            var m = h[d];
                            k(m) && m.textStyle && (v = new Yg(m.textStyle, o, n.ecModel));
                        }
                        var _ = v.getTextColor() || n.get([ "axisLine", "lineStyle", "color" ]), x = r.dataToCoord(d), w = new rd({
                            x: x,
                            y: i.labelOffset + i.labelDirection * a,
                            rotation: u.rotation,
                            silent: p,
                            z2: 10,
                            style: Nr(v, {
                                text: g,
                                align: v.getShallow("align", !0) || u.textAlign,
                                verticalAlign: v.getShallow("verticalAlign", !0) || v.getShallow("baseline", !0) || u.textVerticalAlign,
                                fill: "function" == typeof _ ? _("category" === r.type ? y : "value" === r.type ? d + "" : d, l) : _
                            })
                        });
                        if (w.anid = "label_" + d, f) {
                            var b = Vw.makeAxisEventDataBase(n);
                            b.targetType = "axisLabel", b.value = y, sd(w).eventData = b;
                        }
                        e.add(w), w.updateTransform(), c.push(w), t.add(w), w.decomposeTransform();
                    }), c;
                }
            }(n, i, e, t);
            (function(t, e, n) {
                if (!Vl(t.axis)) {
                    var i = t.get([ "axisLabel", "showMinLabel" ]), r = t.get([ "axisLabel", "showMaxLabel" ]);
                    n = n || [];
                    var o = (e = e || [])[0], a = e[1], s = e[e.length - 1], l = e[e.length - 2], u = n[0], h = n[1], c = n[n.length - 1], p = n[n.length - 2];
                    !1 === i ? (su(o), su(u)) : lu(o, a) && (i ? (su(a), su(h)) : (su(o), su(u))), !1 === r ? (su(s), 
                    su(c)) : lu(l, s) && (r ? (su(l), su(p)) : (su(s), su(c)));
                }
            })(e, o, r), function(t, e, n, i) {
                var r = n.axis, o = n.getModel("minorTick");
                if (o.get("show") && !r.scale.isBlank()) {
                    var a = r.getMinorTicksCoords();
                    if (a.length) for (var s = o.getModel("lineStyle"), l = i * o.get("length"), u = c(s.getLineStyle(), c(n.getModel("axisTick").getLineStyle(), {
                        stroke: n.get([ "axisLine", "lineStyle", "color" ])
                    })), h = 0; h < a.length; h++) for (var p = hu(a[h], e.transform, l, u, "minorticks_" + h), f = 0; f < p.length; f++) t.add(p[f]);
                }
            }(n, i, e, t.tickDirection);
        },
        axisName: function(t, e, n, i) {
            var r = E(t.axisName, e.get("name"));
            if (r) {
                var o, a, s = e.get("nameLocation"), l = t.nameDirection, u = e.getModel("nameTextStyle"), h = e.get("nameGap") || 0, c = e.axis.getExtent(), p = c[0] > c[1] ? -1 : 1, f = [ "start" === s ? c[0] - p * h : "end" === s ? c[1] + p * h : (c[0] + c[1]) / 2, uu(s) ? t.labelOffset + l * h : 0 ], d = e.get("nameRotate");
                null != d && (d = d * Fw / 180), uu(s) ? o = Vw.innerTextLayout(t.rotation, null != d ? d : t.rotation, l) : (o = function(t, e, n, i) {
                    var r, o, a = Fe(n - t), s = i[0] > i[1], l = "start" === e && !s || "start" !== e && s;
                    return Ve(a - Fw / 2) ? (o = l ? "bottom" : "top", r = "center") : Ve(a - 1.5 * Fw) ? (o = l ? "top" : "bottom", 
                    r = "center") : (o = "middle", r = 1.5 * Fw > a && a > Fw / 2 ? l ? "left" : "right" : l ? "right" : "left"), 
                    {
                        rotation: a,
                        textAlign: r,
                        textVerticalAlign: o
                    };
                }(t.rotation, s, d || 0, c), null != (a = t.axisNameAvailableWidth) && (a = Math.abs(a / Math.sin(o.rotation)), 
                !isFinite(a) && (a = null)));
                var g = u.getFont(), y = e.get("nameTruncate", !0) || {}, v = y.ellipsis, m = E(t.nameTruncateMaxWidth, y.maxWidth, a), _ = new rd({
                    x: f[0],
                    y: f[1],
                    rotation: o.rotation,
                    silent: Vw.isLabelSilent(e),
                    style: Nr(u, {
                        text: r,
                        font: g,
                        overflow: "truncate",
                        width: m,
                        ellipsis: v,
                        fill: u.getTextColor() || e.get([ "axisLine", "lineStyle", "color" ]),
                        align: u.get("align") || o.textAlign,
                        verticalAlign: u.get("verticalAlign") || o.textVerticalAlign
                    }),
                    z2: 1
                });
                if (Pr({
                    el: _,
                    componentModel: e,
                    itemName: r
                }), _.__fullText = r, _.anid = "name", e.get("triggerEvent")) {
                    var x = Vw.makeAxisEventDataBase(e);
                    x.targetType = "axisName", x.name = r, sd(_).eventData = x;
                }
                i.add(_), _.updateTransform(), n.add(_), _.decomposeTransform();
            }
        }
    }, Gw = [ "axisLine", "axisTickLabel", "axisName" ], Ww = function(t) {
        function e() {
            var n = null !== t && t.apply(this, arguments) || this;
            return n.type = e.type, n;
        }
        return n(e, t), e.prototype.render = function(t) {
            this.group.removeAll(), this._buildAxes(t), this._buildSplitLineAndArea(t);
        }, e.prototype._buildAxes = function(t) {
            var e = t.coordinateSystem;
            y(v(e.getIndicatorAxes(), function(t) {
                return new Vw(t.model, {
                    position: [ e.cx, e.cy ],
                    rotation: t.angle,
                    labelDirection: -1,
                    tickDirection: -1,
                    nameDirection: 1
                });
            }), function(t) {
                y(Gw, t.add, t), this.group.add(t.getGroup());
            }, this);
        }, e.prototype._buildSplitLineAndArea = function(t) {
            function e(t, e, n) {
                var i = n % e.length;
                return t[i] = t[i] || [], i;
            }
            var n = t.coordinateSystem, i = n.getIndicatorAxes();
            if (i.length) {
                var r = t.get("shape"), o = t.getModel("splitLine"), a = t.getModel("splitArea"), s = o.getModel("lineStyle"), l = a.getModel("areaStyle"), u = o.get("show"), h = a.get("show"), p = s.get("color"), f = l.get("color"), d = S(p) ? p : [ p ], g = S(f) ? f : [ f ], m = [], _ = [];
                if ("circle" === r) for (var x = i[0].getTicksCoords(), w = n.cx, b = n.cy, M = 0; M < x.length; M++) {
                    if (u) m[e(m, d, M)].push(new zd({
                        shape: {
                            cx: w,
                            cy: b,
                            r: x[M].coord
                        }
                    }));
                    if (h && M < x.length - 1) _[e(_, g, M)].push(new eg({
                        shape: {
                            cx: w,
                            cy: b,
                            r0: x[M].coord,
                            r: x[M + 1].coord
                        }
                    }));
                } else {
                    var T, C = v(i, function(t, e) {
                        var i = t.getTicksCoords();
                        return T = null == T ? i.length - 1 : Math.min(i.length - 1, T), v(i, function(t) {
                            return n.coordToPoint(t.coord, e);
                        });
                    }), A = [];
                    for (M = 0; T >= M; M++) {
                        for (var k = [], I = 0; I < i.length; I++) k.push(C[I][M]);
                        if (k[0] && k.push(k[0].slice()), u) m[e(m, d, M)].push(new og({
                            shape: {
                                points: k
                            }
                        }));
                        if (h && A) _[e(_, g, M - 1)].push(new ig({
                            shape: {
                                points: k.concat(A)
                            }
                        }));
                        A = k.slice().reverse();
                    }
                }
                var D = s.getLineStyle(), P = l.getAreaStyle();
                y(_, function(t, e) {
                    this.group.add(Ig(t, {
                        style: c({
                            stroke: "none",
                            fill: g[e % g.length]
                        }, P),
                        silent: !0
                    }));
                }, this), y(m, function(t, e) {
                    this.group.add(Ig(t, {
                        style: c({
                            fill: "none",
                            stroke: d[e % d.length]
                        }, D),
                        silent: !0
                    }));
                }, this);
            }
        }, e.type = "radar", e;
    }(bv), Uw = function(t) {
        function e(e, n, i) {
            var r = t.call(this, e, n, i) || this;
            return r.type = "value", r.angle = 0, r.name = "", r;
        }
        return n(e, t), e;
    }(Mw), Xw = function() {
        function t(t, e, n) {
            this.dimensions = [], this._model = t, this._indicatorAxes = v(t.getIndicatorModels(), function(t, e) {
                var n = "indicator_" + e, i = new Uw(n, new Zx());
                return i.name = t.get("name"), i.model = t, t.axis = i, this.dimensions.push(n), 
                i;
            }, this), this.resize(t, n);
        }
        return t.prototype.getIndicatorAxes = function() {
            return this._indicatorAxes;
        }, t.prototype.dataToPoint = function(t, e) {
            var n = this._indicatorAxes[e];
            return this.coordToPoint(n.dataToCoord(t), e);
        }, t.prototype.coordToPoint = function(t, e) {
            var n = this._indicatorAxes[e].angle;
            return [ this.cx + t * Math.cos(n), this.cy - t * Math.sin(n) ];
        }, t.prototype.pointToData = function(t) {
            var e = t[0] - this.cx, n = t[1] - this.cy, i = Math.sqrt(e * e + n * n);
            e /= i, n /= i;
            for (var r, o = Math.atan2(-n, e), a = 1 / 0, s = -1, l = 0; l < this._indicatorAxes.length; l++) {
                var u = this._indicatorAxes[l], h = Math.abs(o - u.angle);
                a > h && (r = u, s = l, a = h);
            }
            return [ s, +(r && r.coordToData(i)) ];
        }, t.prototype.resize = function(t, e) {
            var n = t.get("center"), i = e.getWidth(), r = e.getHeight(), o = Math.min(i, r) / 2;
            this.cx = Le(n[0], i), this.cy = Le(n[1], r), this.startAngle = t.get("startAngle") * Math.PI / 180;
            var a = t.get("radius");
            ("string" == typeof a || "number" == typeof a) && (a = [ 0, a ]), this.r0 = Le(a[0], o), 
            this.r = Le(a[1], o), y(this._indicatorAxes, function(t, e) {
                t.setExtent(this.r0, this.r);
                var n = this.startAngle + e * Math.PI * 2 / this._indicatorAxes.length;
                n = Math.atan2(Math.sin(n), Math.cos(n)), t.angle = n;
            }, this);
        }, t.prototype.update = function(t) {
            function e(t) {
                var e = Math.pow(10, Math.floor(Math.log(t) / Math.LN10)), n = t / e;
                return 2 === n ? n = 5 : n *= 2, n * e;
            }
            var n = this._indicatorAxes, i = this._model;
            y(n, function(t) {
                t.scale.setExtent(1 / 0, -1 / 0);
            }), t.eachSeriesByType("radar", function(e) {
                if ("radar" === e.get("coordinateSystem") && t.getComponent("radar", e.get("radarIndex")) === i) {
                    var r = e.getData();
                    y(n, function(t) {
                        t.scale.unionExtentFromData(r, r.mapDimension(t.dim));
                    });
                }
            }, this);
            var r = i.get("splitNumber");
            y(n, function(t) {
                var n = Ol(t.scale, t.model).extent;
                Rl(t.scale, t.model);
                var i = t.model, o = t.scale, a = Ll(o, i.get("min", !0)), s = Ll(o, i.get("max", !0)), l = o.getInterval();
                if (null != a && null != s) o.setExtent(+a, +s), o.setInterval((s - a) / r); else if (null != a) {
                    var u = void 0;
                    do {
                        u = a + l * r, o.setExtent(+a, u), o.setInterval(l), l = e(l);
                    } while (u < n[1] && isFinite(u) && isFinite(n[1]));
                } else if (null != s) {
                    var h = void 0;
                    do {
                        h = s - l * r, o.setExtent(h, +s), o.setInterval(l), l = e(l);
                    } while (h > n[0] && isFinite(h) && isFinite(n[0]));
                } else {
                    o.getTicks().length - 1 > r && (l = e(l));
                    h = Oe((u = Math.ceil(n[1] / l) * l) - l * r);
                    o.setExtent(h, u), o.setInterval(l);
                }
            });
        }, t.prototype.convertToPixel = function() {
            return console.warn("Not implemented."), null;
        }, t.prototype.convertFromPixel = function() {
            return console.warn("Not implemented."), null;
        }, t.prototype.containPoint = function() {
            return console.warn("Not implemented."), !1;
        }, t.create = function(e, n) {
            var i = [];
            return e.eachComponent("radar", function(r) {
                var o = new t(r, e, n);
                i.push(o), r.coordinateSystem = o;
            }), e.eachSeriesByType("radar", function(t) {
                "radar" === t.get("coordinateSystem") && (t.coordinateSystem = i[t.get("radarIndex") || 0]);
            }), i;
        }, t.dimensions = [], t;
    }();
    Gl(function(t) {
        Gl(cu), t.registerChartView(Dw), t.registerSeriesModel(Lw), t.registerLayout(eu), 
        t.registerProcessor(function(t) {
            return {
                seriesType: t,
                reset: function(t, e) {
                    var n = e.findComponents({
                        mainType: "legend"
                    });
                    if (n && n.length) {
                        var i = t.getData();
                        i.filterSelf(function(t) {
                            for (var e = i.getName(t), r = 0; r < n.length; r++) if (!n[r].isSelected(e)) return !1;
                            return !0;
                        });
                    }
                }
            };
        }("radar")), t.registerPreprocessor(ru);
    });
    var Yw = function() {
        this.angle = 0, this.width = 10, this.r = 10, this.x = 0, this.y = 0;
    }, qw = function(t) {
        function e(e) {
            var n = t.call(this, e) || this;
            return n.type = "pointer", n;
        }
        return n(e, t), e.prototype.getDefaultShape = function() {
            return new Yw();
        }, e.prototype.buildPath = function(t, e) {
            var n = Math.cos, i = Math.sin, r = e.r, o = e.width, a = e.angle, s = e.x - n(a) * o * (o >= r / 3 ? 1 : 2), l = e.y - i(a) * o * (o >= r / 3 ? 1 : 2);
            a = e.angle - Math.PI / 2, t.moveTo(s, l), t.lineTo(e.x + n(a) * o, e.y + i(a) * o), 
            t.lineTo(e.x + n(e.angle) * r, e.y + i(e.angle) * r), t.lineTo(e.x - n(a) * o, e.y - i(a) * o), 
            t.lineTo(s, l);
        }, e;
    }(Yf), jw = function() {
        this.cx = 0, this.cy = 0, this.r0 = 0, this.r = 0, this.startAngle = 0, this.endAngle = 2 * Math.PI, 
        this.clockwise = !0;
    }, Zw = function(t) {
        function e(e) {
            var n = t.call(this, e) || this;
            return n.type = "sausage", n;
        }
        return n(e, t), e.prototype.getDefaultShape = function() {
            return new jw();
        }, e.prototype.buildPath = function(t, e) {
            var n = e.cx, i = e.cy, r = Math.max(e.r0 || 0, 0), o = Math.max(e.r, 0), a = .5 * (o - r), s = r + a, l = e.startAngle, u = e.endAngle, h = e.clockwise, c = Math.cos(l), p = Math.sin(l), f = Math.cos(u), d = Math.sin(u);
            (h ? u - l < 2 * Math.PI : l - u < 2 * Math.PI) && (t.moveTo(c * r + n, p * r + i), 
            t.arc(c * s + n, p * s + i, a, -Math.PI + l, l, !h)), t.arc(n, i, o, l, u, !h), 
            t.moveTo(f * o + n, d * o + i), t.arc(f * s + n, d * s + i, a, u - 2 * Math.PI, u - Math.PI, !h), 
            0 !== r && (t.arc(n, i, r, u, l, h), t.moveTo(c * r + n, d * r + i)), t.closePath();
        }, e;
    }(Yf), Kw = 2 * Math.PI, $w = function(t) {
        function e() {
            var n = null !== t && t.apply(this, arguments) || this;
            return n.type = e.type, n;
        }
        return n(e, t), e.prototype.render = function(t, e, n) {
            this.group.removeAll();
            var i = t.get([ "axisLine", "lineStyle", "color" ]), r = function(t, e) {
                var n = t.get("center"), i = e.getWidth(), r = e.getHeight(), o = Math.min(i, r);
                return {
                    cx: Le(n[0], e.getWidth()),
                    cy: Le(n[1], e.getHeight()),
                    r: Le(t.get("radius"), o / 2)
                };
            }(t, n);
            this._renderMain(t, e, n, i, r), this._data = t.getData();
        }, e.prototype.dispose = function() {}, e.prototype._renderMain = function(t, e, n, i, r) {
            for (var o = this.group, a = t.get("clockwise"), s = -t.get("startAngle") / 180 * Math.PI, l = -t.get("endAngle") / 180 * Math.PI, u = t.getModel("axisLine"), h = u.get("roundCap") ? Zw : Qd, c = u.get("show"), p = u.getModel("lineStyle"), f = p.get("width"), d = (l - s) % Kw || l === s ? (l - s) % Kw : Kw, g = s, y = 0; c && y < i.length; y++) {
                var v = new h({
                    shape: {
                        startAngle: g,
                        endAngle: l = s + d * Math.min(Math.max(i[y][0], 0), 1),
                        cx: r.cx,
                        cy: r.cy,
                        clockwise: a,
                        r0: r.r - f,
                        r: r.r
                    },
                    silent: !0
                });
                v.setStyle({
                    fill: i[y][1]
                }), v.setStyle(p.getLineStyle([ "color", "width" ])), o.add(v), g = l;
            }
            var m = function(t) {
                if (0 >= t) return i[0][1];
                var e;
                for (e = 0; e < i.length; e++) if (i[e][0] >= t && (0 === e ? 0 : i[e - 1][0]) < t) return i[e][1];
                return i[e - 1][1];
            };
            if (!a) {
                var _ = s;
                s = l, l = _;
            }
            this._renderTicks(t, e, n, m, r, s, l, a, f), this._renderTitleAndDetail(t, e, n, m, r), 
            this._renderAnchor(t, r), this._renderPointer(t, e, n, m, r, s, l, a, f);
        }, e.prototype._renderTicks = function(t, e, n, i, r, o, a, s, l) {
            for (var u, h, c = this.group, p = r.cx, f = r.cy, d = r.r, g = +t.get("min"), y = +t.get("max"), v = t.getModel("splitLine"), m = t.getModel("axisTick"), _ = t.getModel("axisLabel"), x = t.get("splitNumber"), w = m.get("splitNumber"), b = Le(v.get("length"), d), S = Le(m.get("length"), d), M = o, T = (a - o) / x, C = T / w, A = v.getModel("lineStyle").getLineStyle(), k = m.getModel("lineStyle").getLineStyle(), I = v.get("distance"), D = 0; x >= D; D++) {
                if (u = Math.cos(M), h = Math.sin(M), v.get("show")) {
                    var P = new lg({
                        shape: {
                            x1: u * (d - (L = I ? I + l : l)) + p,
                            y1: h * (d - L) + f,
                            x2: u * (d - b - L) + p,
                            y2: h * (d - b - L) + f
                        },
                        style: A,
                        silent: !0
                    });
                    "auto" === A.stroke && P.setStyle({
                        stroke: i(D / x)
                    }), c.add(P);
                }
                if (_.get("show")) {
                    var L = _.get("distance") + I, O = pu(Oe(D / x * (y - g) + g), _.get("formatter")), R = i(D / x);
                    c.add(new rd({
                        style: Nr(_, {
                            text: O,
                            x: u * (d - b - L) + p,
                            y: h * (d - b - L) + f,
                            verticalAlign: -.8 > h ? "top" : h > .8 ? "bottom" : "middle",
                            align: -.4 > u ? "left" : u > .4 ? "right" : "center"
                        }, {
                            inheritColor: R
                        }),
                        silent: !0
                    }));
                }
                if (m.get("show") && D !== x) {
                    L = (L = m.get("distance")) ? L + l : l;
                    for (var E = 0; w >= E; E++) {
                        u = Math.cos(M), h = Math.sin(M);
                        var N = new lg({
                            shape: {
                                x1: u * (d - L) + p,
                                y1: h * (d - L) + f,
                                x2: u * (d - S - L) + p,
                                y2: h * (d - S - L) + f
                            },
                            silent: !0,
                            style: k
                        });
                        "auto" === k.stroke && N.setStyle({
                            stroke: i((D + E / w) / x)
                        }), c.add(N), M += C;
                    }
                    M -= C;
                } else M += T;
            }
        }, e.prototype._renderPointer = function(t, e, n, i, r, o, a, s, l) {
            function u(e, n) {
                var i, o = _.getItemModel(e).getModel("pointer"), a = Le(o.get("width"), r.r), s = Le(o.get("length"), r.r), l = t.get([ "pointer", "icon" ]), u = o.get("offsetCenter"), h = Le(u[0], r.r), c = Le(u[1], r.r), p = o.get("keepAspect");
                return (i = l ? ns(l, h - a / 2, c - s, a, s, null, p) : new qw({
                    shape: {
                        angle: -Math.PI / 2,
                        width: a,
                        r: s,
                        x: h,
                        y: c
                    }
                })).rotation = -(n + Math.PI / 2), i.x = r.cx, i.y = r.cy, i;
            }
            function c(t, e) {
                var n = v.get("roundCap") ? Zw : Qd, i = v.get("overlap"), a = i ? v.get("width") : l / _.count(), u = i ? r.r - a : r.r - (t + 1) * a, h = i ? r.r : r.r - t * a, c = new n({
                    shape: {
                        startAngle: o,
                        endAngle: e,
                        cx: r.cx,
                        cy: r.cy,
                        clockwise: s,
                        r0: u,
                        r: h
                    }
                });
                return i && (c.z2 = b - _.get(x, t) % b), c;
            }
            var p = this.group, f = this._data, d = this._progressEls, g = [], y = t.get([ "pointer", "show" ]), v = t.getModel("progress"), m = v.get("show"), _ = t.getData(), x = _.mapDimension("value"), w = +t.get("min"), b = +t.get("max"), S = [ w, b ], M = [ o, a ];
            (m || y) && (_.diff(f).add(function(e) {
                if (y) {
                    var n = u(e, o);
                    mr(n, {
                        rotation: -(Pe(_.get(x, e), S, M, !0) + Math.PI / 2)
                    }, t), p.add(n), _.setItemGraphicEl(e, n);
                }
                if (m) {
                    var i = c(e, o), r = v.get("clip");
                    mr(i, {
                        shape: {
                            endAngle: Pe(_.get(x, e), S, M, r)
                        }
                    }, t), p.add(i), g[e] = i;
                }
            }).update(function(e, n) {
                if (y) {
                    var i = f.getItemGraphicEl(n), r = i ? i.rotation : o, a = u(e, r);
                    a.rotation = r, vr(a, {
                        rotation: -(Pe(_.get(x, e), S, M, !0) + Math.PI / 2)
                    }, t), p.add(a), _.setItemGraphicEl(e, a);
                }
                if (m) {
                    var s = d[n], l = c(e, s ? s.shape.endAngle : o), h = v.get("clip");
                    vr(l, {
                        shape: {
                            endAngle: Pe(_.get(x, e), S, M, h)
                        }
                    }, t), p.add(l), g[e] = l;
                }
            }).execute(), _.each(function(t) {
                var e = _.getItemModel(t), n = e.getModel("emphasis");
                if (y) {
                    var r = _.getItemGraphicEl(t), o = _.getItemVisual(t, "style"), a = o.fill;
                    if (r instanceof $f) {
                        var s = r.style;
                        r.useStyle(h({
                            image: s.image,
                            x: s.x,
                            y: s.y,
                            width: s.width,
                            height: s.height
                        }, o));
                    } else r.useStyle(o), "pointer" !== r.type && r.setColor(a);
                    r.setStyle(e.getModel([ "pointer", "itemStyle" ]).getItemStyle()), "auto" === r.style.fill && r.setStyle("fill", i(Pe(_.get(x, t), S, [ 0, 1 ], !0))), 
                    r.z2EmphasisLift = 0, Yi(r, e), Xi(r, n.get("focus"), n.get("blurScope"));
                }
                if (m) {
                    var l = g[t];
                    l.useStyle(_.getItemVisual(t, "style")), l.setStyle(e.getModel([ "progress", "itemStyle" ]).getItemStyle()), 
                    l.z2EmphasisLift = 0, Yi(l, e), Xi(l, n.get("focus"), n.get("blurScope"));
                }
            }), this._progressEls = g);
        }, e.prototype._renderAnchor = function(t, e) {
            var n = t.getModel("anchor");
            if (n.get("show")) {
                var i = n.get("size"), r = n.get("icon"), o = n.get("offsetCenter"), a = n.get("keepAspect"), s = ns(r, e.cx - i / 2 + Le(o[0], e.r), e.cy - i / 2 + Le(o[1], e.r), i, i, null, a);
                s.z2 = n.get("showAbove") ? 1 : 0, s.setStyle(n.getModel("itemStyle").getItemStyle()), 
                this.group.add(s);
            }
        }, e.prototype._renderTitleAndDetail = function(t, e, n, i, r) {
            var o = this, a = t.getData(), s = a.mapDimension("value"), l = +t.get("min"), u = +t.get("max"), h = new mp(), c = [], p = [], f = t.isAnimationEnabled();
            a.diff(this._data).add(function(t) {
                c[t] = new rd({
                    silent: !0
                }), p[t] = new rd({
                    silent: !0
                });
            }).update(function(t, e) {
                c[t] = o._titleEls[e], p[t] = o._detailEls[e];
            }).execute(), a.each(function(e) {
                var n = a.getItemModel(e), o = a.get(s, e), d = new mp(), g = i(Pe(o, [ l, u ], [ 0, 1 ], !0)), y = n.getModel("title");
                if (y.get("show")) {
                    var v = y.get("offsetCenter"), m = r.cx + Le(v[0], r.r), _ = r.cy + Le(v[1], r.r);
                    (A = c[e]).attr({
                        style: Nr(y, {
                            x: m,
                            y: _,
                            text: a.getName(e),
                            align: "center",
                            verticalAlign: "middle"
                        }, {
                            inheritColor: g
                        })
                    }), d.add(A);
                }
                var x = n.getModel("detail");
                if (x.get("show")) {
                    var w = x.get("offsetCenter"), b = r.cx + Le(w[0], r.r), S = r.cy + Le(w[1], r.r), M = Le(x.get("width"), r.r), T = Le(x.get("height"), r.r), C = t.get([ "progress", "show" ]) ? a.getItemVisual(e, "style").fill : g, A = p[e], k = x.get("formatter");
                    A.attr({
                        style: Nr(x, {
                            x: b,
                            y: S,
                            text: pu(o, k),
                            width: isNaN(M) ? null : M,
                            height: isNaN(T) ? null : T,
                            align: "center",
                            verticalAlign: "middle"
                        }, {
                            inheritColor: C
                        })
                    }), function(t, e, n, i) {
                        if (t) {
                            var r = Ng(t);
                            r.prevValue = r.value, r.value = n;
                            var o = e.normal;
                            r.valueAnimation = o.get("valueAnimation"), r.valueAnimation && (r.precision = o.get("precision"), 
                            r.defaultInterpolatedText = i, r.statesModels = e);
                        }
                    }(A, {
                        normal: x
                    }, o, function(t) {
                        return pu(t, k);
                    }), f && Fr(A, e, a, t, {
                        getFormattedLabel: function(t, e, n, i, r, a) {
                            return pu(a ? a.interpolatedValue : o, k);
                        }
                    }), d.add(A);
                }
                h.add(d);
            }), this.group.add(h), this._titleEls = c, this._detailEls = p;
        }, e.type = "gauge", e;
    }(Tv), Jw = function(t) {
        function e() {
            var n = null !== t && t.apply(this, arguments) || this;
            return n.type = e.type, n.visualStyleAccessPath = "itemStyle", n.useColorPaletteOnData = !0, 
            n;
        }
        return n(e, t), e.prototype.getInitialData = function() {
            return ou(this, [ "value" ]);
        }, e.type = "series.gauge", e.defaultOption = {
            zlevel: 0,
            z: 2,
            center: [ "50%", "50%" ],
            legendHoverLink: !0,
            radius: "75%",
            startAngle: 225,
            endAngle: -45,
            clockwise: !0,
            min: 0,
            max: 100,
            splitNumber: 10,
            axisLine: {
                show: !0,
                roundCap: !1,
                lineStyle: {
                    color: [ [ 1, "#E6EBF8" ] ],
                    width: 10
                }
            },
            progress: {
                show: !1,
                overlap: !0,
                width: 10,
                roundCap: !1,
                clip: !0
            },
            splitLine: {
                show: !0,
                length: 10,
                distance: 10,
                lineStyle: {
                    color: "#63677A",
                    width: 3,
                    type: "solid"
                }
            },
            axisTick: {
                show: !0,
                splitNumber: 5,
                length: 6,
                distance: 10,
                lineStyle: {
                    color: "#63677A",
                    width: 1,
                    type: "solid"
                }
            },
            axisLabel: {
                show: !0,
                distance: 15,
                color: "#464646",
                fontSize: 12
            },
            pointer: {
                icon: null,
                offsetCenter: [ 0, 0 ],
                show: !0,
                length: "60%",
                width: 6,
                keepAspect: !1
            },
            anchor: {
                show: !1,
                showAbove: !1,
                size: 6,
                icon: "circle",
                offsetCenter: [ 0, 0 ],
                keepAspect: !1,
                itemStyle: {
                    color: "#fff",
                    borderWidth: 0,
                    borderColor: "#5470c6"
                }
            },
            title: {
                show: !0,
                offsetCenter: [ 0, "20%" ],
                color: "#464646",
                fontSize: 16,
                valueAnimation: !1
            },
            detail: {
                show: !0,
                backgroundColor: "rgba(0,0,0,0)",
                borderWidth: 0,
                borderColor: "#ccc",
                width: 100,
                height: null,
                padding: [ 5, 10 ],
                offsetCenter: [ 0, "40%" ],
                color: "#464646",
                fontSize: 30,
                fontWeight: "bold",
                lineHeight: 30,
                valueAnimation: !1
            }
        }, e;
    }(wv);
    Gl(function(t) {
        t.registerChartView($w), t.registerSeriesModel(Jw);
    });
    var Qw = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this;
        }
        return n(e, t), e.type = "grid", e.dependencies = [ "xAxis", "yAxis" ], e.layoutMode = "box", 
        e.defaultOption = {
            show: !1,
            zlevel: 0,
            z: 0,
            left: "10%",
            top: 60,
            right: "10%",
            bottom: 70,
            containLabel: !1,
            backgroundColor: "rgba(0,0,0,0)",
            borderWidth: 1,
            borderColor: "#ccc"
        }, e;
    }(_y), tb = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this;
        }
        return n(e, t), e.prototype.getCoordSysModel = function() {
            return this.getReferringComponents("grid", Pp).models[0];
        }, e.type = "cartesian2dAxis", e;
    }(_y);
    d(tb, pw);
    var eb = {
        value: 1,
        category: 1,
        time: 1,
        log: 1
    }, nb = function() {
        function t(t) {
            this.type = "cartesian", this._dimList = [], this._axes = {}, this.name = t || "";
        }
        return t.prototype.getAxis = function(t) {
            return this._axes[t];
        }, t.prototype.getAxes = function() {
            return v(this._dimList, function(t) {
                return this._axes[t];
            }, this);
        }, t.prototype.getAxesByScale = function(t) {
            return t = t.toLowerCase(), _(this.getAxes(), function(e) {
                return e.scale.type === t;
            });
        }, t.prototype.addAxis = function(t) {
            var e = t.dim;
            this._axes[e] = t, this._dimList.push(e);
        }, t;
    }(), ib = [ "x", "y" ], rb = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.type = "cartesian2d", e.dimensions = ib, e;
        }
        return n(e, t), e.prototype.calcAffineTransform = function() {
            this._transform = this._invTransform = null;
            var t = this.getAxis("x").scale, e = this.getAxis("y").scale;
            if (gu(t) && gu(e)) {
                var n = t.getExtent(), i = e.getExtent(), r = this.dataToPoint([ n[0], i[0] ]), o = this.dataToPoint([ n[1], i[1] ]), a = n[1] - n[0], s = i[1] - i[0];
                if (a && s) {
                    var l = (o[0] - r[0]) / a, u = (o[1] - r[1]) / s, h = r[0] - n[0] * l, c = r[1] - i[0] * u, p = this._transform = [ l, 0, 0, u, h, c ];
                    this._invTransform = ge([], p);
                }
            }
        }, e.prototype.getBaseAxis = function() {
            return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x");
        }, e.prototype.containPoint = function(t) {
            var e = this.getAxis("x"), n = this.getAxis("y");
            return e.contain(e.toLocalCoord(t[0])) && n.contain(n.toLocalCoord(t[1]));
        }, e.prototype.containData = function(t) {
            return this.getAxis("x").containData(t[0]) && this.getAxis("y").containData(t[1]);
        }, e.prototype.dataToPoint = function(t, e, n) {
            n = n || [];
            var i = t[0], r = t[1];
            if (this._transform && null != i && isFinite(i) && null != r && isFinite(r)) return ot(n, t, this._transform);
            var o = this.getAxis("x"), a = this.getAxis("y");
            return n[0] = o.toGlobalCoord(o.dataToCoord(i, e)), n[1] = a.toGlobalCoord(a.dataToCoord(r, e)), 
            n;
        }, e.prototype.clampData = function(t, e) {
            var n = this.getAxis("x").scale, i = this.getAxis("y").scale, r = n.getExtent(), o = i.getExtent(), a = n.parse(t[0]), s = i.parse(t[1]);
            return (e = e || [])[0] = Math.min(Math.max(Math.min(r[0], r[1]), a), Math.max(r[0], r[1])), 
            e[1] = Math.min(Math.max(Math.min(o[0], o[1]), s), Math.max(o[0], o[1])), e;
        }, e.prototype.pointToData = function(t, e) {
            var n = [];
            if (this._invTransform) return ot(n, t, this._invTransform);
            var i = this.getAxis("x"), r = this.getAxis("y");
            return n[0] = i.coordToData(i.toLocalCoord(t[0]), e), n[1] = r.coordToData(r.toLocalCoord(t[1]), e), 
            n;
        }, e.prototype.getOtherAxis = function(t) {
            return this.getAxis("x" === t.dim ? "y" : "x");
        }, e.prototype.getArea = function() {
            var t = this.getAxis("x").getGlobalExtent(), e = this.getAxis("y").getGlobalExtent(), n = Math.min(t[0], t[1]), i = Math.min(e[0], e[1]), r = Math.max(t[0], t[1]) - n, o = Math.max(e[0], e[1]) - i;
            return new lp(n, i, r, o);
        }, e;
    }(nb), ob = function(t) {
        function e(e, n, i, r, o) {
            var a = t.call(this, e, n, i) || this;
            return a.index = 0, a.type = r || "value", a.position = o || "bottom", a;
        }
        return n(e, t), e.prototype.isHorizontal = function() {
            var t = this.position;
            return "top" === t || "bottom" === t;
        }, e.prototype.getGlobalExtent = function(t) {
            var e = this.getExtent();
            return e[0] = this.toGlobalCoord(e[0]), e[1] = this.toGlobalCoord(e[1]), t && e[0] > e[1] && e.reverse(), 
            e;
        }, e.prototype.pointToData = function(t, e) {
            return this.coordToData(this.toLocalCoord(t["x" === this.dim ? 0 : 1]), e);
        }, e.prototype.setCategorySortInfo = function(t) {
            return "category" === this.type && (this.model.option.categorySortInfo = t, void this.scale.setSortInfo(t));
        }, e;
    }(Mw), ab = function() {
        function t(t, e, n) {
            this.type = "grid", this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, 
            this._axesList = [], this.axisPointerEnabled = !0, this.dimensions = ib, this._initCartesian(t, e, n), 
            this.model = t;
        }
        return t.prototype.getRect = function() {
            return this._rect;
        }, t.prototype.update = function(t, e) {
            var n = this._axesMap;
            this._updateScale(t, this.model), y(n.x, function(t) {
                Rl(t.scale, t.model);
            }), y(n.y, function(t) {
                Rl(t.scale, t.model);
            });
            var i = {};
            y(n.x, function(t) {
                xu(n, "y", t, i);
            }), y(n.y, function(t) {
                xu(n, "x", t, i);
            }), this.resize(this.model, e);
        }, t.prototype.resize = function(t, e, n) {
            function i() {
                y(s, function(t) {
                    var e = t.isHorizontal(), n = e ? [ 0, a.width ] : [ 0, a.height ], i = t.inverse ? 1 : 0;
                    t.setExtent(n[i], n[1 - i]), function(t, e) {
                        var n = t.getExtent(), i = n[0] + n[1];
                        t.toGlobalCoord = "x" === t.dim ? function(t) {
                            return t + e;
                        } : function(t) {
                            return i - t + e;
                        }, t.toLocalCoord = "x" === t.dim ? function(t) {
                            return t - e;
                        } : function(t) {
                            return i - t + e;
                        };
                    }(t, e ? a.x : a.y);
                });
            }
            var r = t.getBoxLayoutParams(), o = !n && t.get("containLabel"), a = go(r, {
                width: e.getWidth(),
                height: e.getHeight()
            });
            this._rect = a;
            var s = this._axesList;
            i(), o && (y(s, function(t) {
                if (!t.model.get([ "axisLabel", "inside" ])) {
                    var e = function(t) {
                        var e = t.model, n = t.scale;
                        if (e.get([ "axisLabel", "show" ]) && !n.isBlank()) {
                            var i, r, o = n.getExtent();
                            n instanceof qx ? r = n.count() : r = (i = n.getTicks()).length;
                            var a, s = t.getLabelModel(), l = Nl(t), u = 1;
                            r > 40 && (u = Math.ceil(r / 40));
                            for (var h = 0; r > h; h += u) {
                                var c = l(i ? i[h] : {
                                    value: o[0] + h
                                }, h), p = zl(s.getTextRect(c), s.get("rotate") || 0);
                                a ? a.union(p) : a = p;
                            }
                            return a;
                        }
                    }(t);
                    if (e) {
                        var n = t.isHorizontal() ? "height" : "width", i = t.model.get([ "axisLabel", "margin" ]);
                        a[n] -= e[n] + i, "top" === t.position ? a.y += e.height + i : "left" === t.position && (a.x += e.width + i);
                    }
                }
            }), i()), y(this._coordsList, function(t) {
                t.calcAffineTransform();
            });
        }, t.prototype.getAxis = function(t, e) {
            var n = this._axesMap[t];
            return null != n ? n[e || 0] : void 0;
        }, t.prototype.getAxes = function() {
            return this._axesList.slice();
        }, t.prototype.getCartesian = function(t, e) {
            if (null != t && null != e) {
                var n = "x" + t + "y" + e;
                return this._coordsMap[n];
            }
            k(t) && (e = t.yAxisIndex, t = t.xAxisIndex);
            for (var i = 0, r = this._coordsList; i < r.length; i++) if (r[i].getAxis("x").index === t || r[i].getAxis("y").index === e) return r[i];
        }, t.prototype.getCartesians = function() {
            return this._coordsList.slice();
        }, t.prototype.convertToPixel = function(t, e, n) {
            var i = this._findConvertTarget(e);
            return i.cartesian ? i.cartesian.dataToPoint(n) : i.axis ? i.axis.toGlobalCoord(i.axis.dataToCoord(n)) : null;
        }, t.prototype.convertFromPixel = function(t, e, n) {
            var i = this._findConvertTarget(e);
            return i.cartesian ? i.cartesian.pointToData(n) : i.axis ? i.axis.coordToData(i.axis.toLocalCoord(n)) : null;
        }, t.prototype._findConvertTarget = function(t) {
            var e, n, i = t.seriesModel, r = t.xAxisModel || i && i.getReferringComponents("xAxis", Pp).models[0], o = t.yAxisModel || i && i.getReferringComponents("yAxis", Pp).models[0], a = t.gridModel, s = this._coordsList;
            if (i) p(s, e = i.coordinateSystem) < 0 && (e = null); else if (r && o) e = this.getCartesian(r.componentIndex, o.componentIndex); else if (r) n = this.getAxis("x", r.componentIndex); else if (o) n = this.getAxis("y", o.componentIndex); else if (a) {
                a.coordinateSystem === this && (e = this._coordsList[0]);
            }
            return {
                cartesian: e,
                axis: n
            };
        }, t.prototype.containPoint = function(t) {
            var e = this._coordsList[0];
            return e ? e.containPoint(t) : void 0;
        }, t.prototype._initCartesian = function(t, e) {
            function n(e) {
                return function(n, i) {
                    if (_u(n, t)) {
                        var l = n.get("position");
                        "x" === e ? "top" !== l && "bottom" !== l && (l = o.bottom ? "top" : "bottom") : "left" !== l && "right" !== l && (l = o.left ? "right" : "left"), 
                        o[l] = !0;
                        var u = new ob(e, El(n), [ 0, 0 ], n.get("type"), l), h = "category" === u.type;
                        u.onBand = h && n.get("boundaryGap"), u.inverse = n.get("inverse"), n.axis = u, 
                        u.model = n, u.grid = r, u.index = i, r._axesList.push(u), a[e][i] = u, s[e]++;
                    }
                };
            }
            var i = this, r = this, o = {
                left: !1,
                right: !1,
                top: !1,
                bottom: !1
            }, a = {
                x: {},
                y: {}
            }, s = {
                x: 0,
                y: 0
            };
            return e.eachComponent("xAxis", n("x"), this), e.eachComponent("yAxis", n("y"), this), 
            s.x && s.y ? (this._axesMap = a, void y(a.x, function(e, n) {
                y(a.y, function(r, o) {
                    var a = "x" + n + "y" + o, s = new rb(a);
                    s.master = i, s.model = t, i._coordsMap[a] = s, i._coordsList.push(s), s.addAxis(e), 
                    s.addAxis(r);
                });
            })) : (this._axesMap = {}, void (this._axesList = []));
        }, t.prototype._updateScale = function(t, e) {
            function n(t, e) {
                y(Hl(t, e.dim), function(n) {
                    e.scale.unionExtentFromData(t, n);
                });
            }
            y(this._axesList, function(t) {
                if (t.scale.setExtent(1 / 0, -1 / 0), "category" === t.type) {
                    var e = t.model.get("categorySortInfo");
                    t.scale.setSortInfo(e);
                }
            }), t.eachSeries(function(t) {
                if (vu(t)) {
                    var i = mu(t), r = i.xAxisModel, o = i.yAxisModel;
                    if (!_u(r, e) || !_u(o, e)) return;
                    var a = this.getCartesian(r.componentIndex, o.componentIndex), s = t.getData(), l = a.getAxis("x"), u = a.getAxis("y");
                    "list" === s.type && (n(s, l), n(s, u));
                }
            }, this);
        }, t.prototype.getTooltipAxes = function(t) {
            var e = [], n = [];
            return y(this.getCartesians(), function(i) {
                var r = null != t && "auto" !== t ? i.getAxis(t) : i.getBaseAxis(), o = i.getOtherAxis(r);
                p(e, r) < 0 && e.push(r), p(n, o) < 0 && n.push(o);
            }), {
                baseAxes: e,
                otherAxes: n
            };
        }, t.create = function(e, n) {
            var i = [];
            return e.eachComponent("grid", function(r, o) {
                var a = new t(r, e, n);
                a.name = "grid_" + o, a.resize(r, n, !0), r.coordinateSystem = a, i.push(a);
            }), e.eachSeries(function(t) {
                if (vu(t)) {
                    var e = mu(t), n = e.xAxisModel, i = e.yAxisModel, r = n.getCoordSysModel().coordinateSystem;
                    t.coordinateSystem = r.getCartesian(n.componentIndex, i.componentIndex);
                }
            }), i;
        }, t.dimensions = ib, t;
    }(), sb = {}, lb = function(t) {
        function e() {
            var n = null !== t && t.apply(this, arguments) || this;
            return n.type = e.type, n;
        }
        return n(e, t), e.prototype.render = function(e, n, i) {
            this.axisPointerClass && Tu(e), t.prototype.render.apply(this, arguments), this._doUpdateAxisPointerClass(e, i, !0);
        }, e.prototype.updateAxisPointer = function(t, e, n) {
            this._doUpdateAxisPointerClass(t, n, !1);
        }, e.prototype.remove = function(t, e) {
            var n = this._axisPointer;
            n && n.remove(e);
        }, e.prototype.dispose = function(e, n) {
            this._disposeAxisPointer(n), t.prototype.dispose.apply(this, arguments);
        }, e.prototype._doUpdateAxisPointerClass = function(t, n, i) {
            var r = e.getAxisPointerClass(this.axisPointerClass);
            if (r) {
                var o = function(t) {
                    var e = Cu(t);
                    return e && e.axisPointerModel;
                }(t);
                o ? (this._axisPointer || (this._axisPointer = new r())).render(t, o, n, i) : this._disposeAxisPointer(n);
            }
        }, e.prototype._disposeAxisPointer = function(t) {
            this._axisPointer && this._axisPointer.dispose(t), this._axisPointer = null;
        }, e.registerAxisPointerClass = function(t, e) {
            sb[t] = e;
        }, e.getAxisPointerClass = function(t) {
            return t && sb[t];
        }, e.type = "axis", e;
    }(bv), ub = sn(), hb = [ "axisLine", "axisTickLabel", "axisName" ], cb = [ "splitArea", "splitLine", "minorSplitLine" ], pb = function(t) {
        function e() {
            var n = null !== t && t.apply(this, arguments) || this;
            return n.type = e.type, n.axisPointerClass = "CartesianAxisPointer", n;
        }
        return n(e, t), e.prototype.render = function(e, n, i, r) {
            this.group.removeAll();
            var o = this._axisGroup;
            if (this._axisGroup = new mp(), this.group.add(this._axisGroup), e.get("show")) {
                var a = e.getCoordSysModel(), s = yu(a, e), l = new Vw(e, h({
                    handleAutoShown: function() {
                        for (var t = a.coordinateSystem.getCartesians(), n = 0; n < t.length; n++) {
                            var i = t[n].getOtherAxis(e.axis).type;
                            if ("value" === i || "log" === i) return !0;
                        }
                        return !1;
                    }
                }, s));
                y(hb, l.add, l), this._axisGroup.add(l.getGroup()), y(cb, function(t) {
                    e.get([ t, "show" ]) && fb[t](this, this._axisGroup, e, a);
                }, this), Tr(o, this._axisGroup, e), t.prototype.render.call(this, e, n, i, r);
            }
        }, e.prototype.remove = function() {
            !function(t) {
                ub(t).splitAreaColors = null;
            }(this);
        }, e.type = "cartesianAxis", e;
    }(lb), fb = {
        splitLine: function(t, e, n, i) {
            var r = n.axis;
            if (!r.scale.isBlank()) {
                var o = n.getModel("splitLine"), a = o.getModel("lineStyle"), s = a.get("color");
                s = S(s) ? s : [ s ];
                for (var l = i.coordinateSystem.getRect(), u = r.isHorizontal(), h = 0, p = r.getTicksCoords({
                    tickModel: o
                }), f = [], d = [], g = a.getLineStyle(), y = 0; y < p.length; y++) {
                    var v = r.toGlobalCoord(p[y].coord);
                    u ? (f[0] = v, f[1] = l.y, d[0] = v, d[1] = l.y + l.height) : (f[0] = l.x, f[1] = v, 
                    d[0] = l.x + l.width, d[1] = v);
                    var m = h++ % s.length, _ = p[y].tickValue;
                    e.add(new lg({
                        anid: null != _ ? "line_" + p[y].tickValue : null,
                        subPixelOptimize: !0,
                        autoBatch: !0,
                        shape: {
                            x1: f[0],
                            y1: f[1],
                            x2: d[0],
                            y2: d[1]
                        },
                        style: c({
                            stroke: s[m]
                        }, g),
                        silent: !0
                    }));
                }
            }
        },
        minorSplitLine: function(t, e, n, i) {
            var r = n.axis, o = n.getModel("minorSplitLine").getModel("lineStyle"), a = i.coordinateSystem.getRect(), s = r.isHorizontal(), l = r.getMinorTicksCoords();
            if (l.length) for (var u = [], h = [], c = o.getLineStyle(), p = 0; p < l.length; p++) for (var f = 0; f < l[p].length; f++) {
                var d = r.toGlobalCoord(l[p][f].coord);
                s ? (u[0] = d, u[1] = a.y, h[0] = d, h[1] = a.y + a.height) : (u[0] = a.x, u[1] = d, 
                h[0] = a.x + a.width, h[1] = d), e.add(new lg({
                    anid: "minor_line_" + l[p][f].tickValue,
                    subPixelOptimize: !0,
                    autoBatch: !0,
                    shape: {
                        x1: u[0],
                        y1: u[1],
                        x2: h[0],
                        y2: h[1]
                    },
                    style: c,
                    silent: !0
                }));
            }
        },
        splitArea: function(t, e, n, i) {
            !function(t, e, n, i) {
                var r = n.axis;
                if (!r.scale.isBlank()) {
                    var o = n.getModel("splitArea"), a = o.getModel("areaStyle"), s = a.get("color"), l = i.coordinateSystem.getRect(), u = r.getTicksCoords({
                        tickModel: o,
                        clamp: !0
                    });
                    if (u.length) {
                        var h = s.length, p = ub(t).splitAreaColors, f = U(), d = 0;
                        if (p) for (var g = 0; g < u.length; g++) {
                            var y = p.get(u[g].tickValue);
                            if (null != y) {
                                d = (y + (h - 1) * g) % h;
                                break;
                            }
                        }
                        var v = r.toGlobalCoord(u[0].coord), m = a.getAreaStyle();
                        s = S(s) ? s : [ s ];
                        for (g = 1; g < u.length; g++) {
                            var _ = r.toGlobalCoord(u[g].coord), x = void 0, w = void 0, b = void 0, M = void 0;
                            r.isHorizontal() ? (x = v, w = l.y, b = _ - x, M = l.height, v = x + b) : (x = l.x, 
                            w = v, b = l.width, v = w + (M = _ - w));
                            var T = u[g - 1].tickValue;
                            null != T && f.set(T, d), e.add(new ed({
                                anid: null != T ? "area_" + T : null,
                                shape: {
                                    x: x,
                                    y: w,
                                    width: b,
                                    height: M
                                },
                                style: c({
                                    fill: s[d]
                                }, m),
                                autoBatch: !0,
                                silent: !0
                            })), d = (d + 1) % h;
                        }
                        ub(t).splitAreaColors = f;
                    }
                }
            }(t, e, n, i);
        }
    }, db = function(t) {
        function e() {
            var n = null !== t && t.apply(this, arguments) || this;
            return n.type = e.type, n;
        }
        return n(e, t), e.type = "xAxis", e;
    }(pb), gb = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.type = db.type, e;
        }
        return n(e, t), e.type = "yAxis", e;
    }(pb), yb = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.type = "grid", e;
        }
        return n(e, t), e.prototype.render = function(t) {
            this.group.removeAll(), t.get("show") && this.group.add(new ed({
                shape: t.coordinateSystem.getRect(),
                style: c({
                    fill: t.get("backgroundColor")
                }, t.getItemStyle()),
                silent: !0,
                z2: -1
            }));
        }, e.type = "grid", e;
    }(bv), vb = {
        offset: 0
    };
    Gl(function(t) {
        t.registerComponentView(yb), t.registerComponentModel(Qw), t.registerCoordinateSystem("cartesian2d", ab), 
        fu(t, "x", tb, vb), fu(t, "y", tb, vb), t.registerComponentView(db), t.registerComponentView(gb), 
        t.registerPreprocessor(function(t) {
            t.xAxis && t.yAxis && !t.grid && (t.grid = {});
        });
    });
    var mb = sn(), _b = s, xb = Eh, wb = function() {
        function t() {
            this._dragging = !1, this.animationThreshold = 15;
        }
        return t.prototype.render = function(t, e, n, i) {
            var r = e.get("value"), o = e.get("status");
            if (this._axisModel = t, this._axisPointerModel = e, this._api = n, i || this._lastValue !== r || this._lastStatus !== o) {
                this._lastValue = r, this._lastStatus = o;
                var a = this._group, s = this._handle;
                if (!o || "hide" === o) return a && a.hide(), void (s && s.hide());
                a && a.show(), s && s.show();
                var l = {};
                this.makeElOption(l, r, t, e, n);
                var u = l.graphicKey;
                u !== this._lastGraphicKey && this.clear(n), this._lastGraphicKey = u;
                var h = this._moveAnimation = this.determineAnimation(t, e);
                if (a) {
                    var c = b(Iu, e, h);
                    this.updatePointerEl(a, l, c), this.updateLabelEl(a, l, c, e);
                } else a = this._group = new mp(), this.createPointerEl(a, l, t, e), this.createLabelEl(a, l, t, e), 
                n.getZr().add(a);
                Lu(a, e, !0), this._renderHandle(r);
            }
        }, t.prototype.remove = function(t) {
            this.clear(t);
        }, t.prototype.dispose = function(t) {
            this.clear(t);
        }, t.prototype.determineAnimation = function(t, e) {
            var n = e.get("animation"), i = t.axis, r = "category" === i.type, o = e.get("snap");
            if (!o && !r) return !1;
            if ("auto" === n || null == n) {
                var a = this.animationThreshold;
                if (r && i.getBandWidth() > a) return !0;
                if (o) {
                    var s = Cu(t).seriesDataCount, l = i.getExtent();
                    return Math.abs(l[0] - l[1]) / s > a;
                }
                return !1;
            }
            return !0 === n;
        }, t.prototype.makeElOption = function() {}, t.prototype.createPointerEl = function(t, e) {
            var n = e.pointer;
            if (n) {
                var i = mb(t).pointerEl = new Pg[n.type](_b(e.pointer));
                t.add(i);
            }
        }, t.prototype.createLabelEl = function(t, e, n, i) {
            if (e.label) {
                var r = mb(t).labelEl = new rd(_b(e.label));
                t.add(r), Du(r, i);
            }
        }, t.prototype.updatePointerEl = function(t, e, n) {
            var i = mb(t).pointerEl;
            i && e.pointer && (i.setStyle(e.pointer.style), n(i, {
                shape: e.pointer.shape
            }));
        }, t.prototype.updateLabelEl = function(t, e, n, i) {
            var r = mb(t).labelEl;
            r && (r.setStyle(e.label.style), n(r, {
                x: e.label.x,
                y: e.label.y
            }), Du(r, i));
        }, t.prototype._renderHandle = function(t) {
            if (!this._dragging && this.updateHandleTransform) {
                var e, n = this._axisPointerModel, i = this._api.getZr(), r = this._handle, o = n.getModel("handle"), a = n.get("status");
                if (!o.get("show") || !a || "hide" === a) return r && i.remove(r), void (this._handle = null);
                this._handle || (e = !0, r = this._handle = kr(o.get("icon"), {
                    cursor: "move",
                    draggable: !0,
                    onmousemove: function(t) {
                        Jh(t.event);
                    },
                    onmousedown: xb(this._onHandleDragMove, this, 0, 0),
                    drift: xb(this._onHandleDragMove, this),
                    ondragend: xb(this._onHandleDragEnd, this)
                }), i.add(r)), Lu(r, n, !1), r.setStyle(o.getItemStyle(null, [ "color", "borderColor", "borderWidth", "opacity", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY" ]));
                var s = o.get("size");
                S(s) || (s = [ s, s ]), r.scaleX = s[0] / 2, r.scaleY = s[1] / 2, function(t, e, n, i) {
                    var r = t[e];
                    if (r) {
                        var o = r[kv] || r, a = r[Dv];
                        if (r[Iv] !== n || a !== i) {
                            if (null == n || !i) return t[e] = o;
                            (r = t[e] = Ca(o, n, "debounce" === i))[kv] = o, r[Dv] = i, r[Iv] = n;
                        }
                    }
                }(this, "_doDispatchAxisPointer", o.get("throttle") || 0, "fixRate"), this._moveHandleToValue(t, e);
            }
        }, t.prototype._moveHandleToValue = function(t, e) {
            Iu(this._axisPointerModel, !e && this._moveAnimation, this._handle, Pu(this.getHandleTransform(t, this._axisModel, this._axisPointerModel)));
        }, t.prototype._onHandleDragMove = function(t, e) {
            var n = this._handle;
            if (n) {
                this._dragging = !0;
                var i = this.updateHandleTransform(Pu(n), [ t, e ], this._axisModel, this._axisPointerModel);
                this._payloadInfo = i, n.stopAnimation(), n.attr(Pu(i)), mb(n).lastProp = null, 
                this._doDispatchAxisPointer();
            }
        }, t.prototype._doDispatchAxisPointer = function() {
            if (this._handle) {
                var t = this._payloadInfo, e = this._axisModel;
                this._api.dispatchAction({
                    type: "updateAxisPointer",
                    x: t.cursorPoint[0],
                    y: t.cursorPoint[1],
                    tooltipOption: t.tooltipOption,
                    axesInfo: [ {
                        axisDim: e.axis.dim,
                        axisIndex: e.componentIndex
                    } ]
                });
            }
        }, t.prototype._onHandleDragEnd = function() {
            if (this._dragging = !1, this._handle) {
                var t = this._axisPointerModel.get("value");
                this._moveHandleToValue(t), this._api.dispatchAction({
                    type: "hideTip"
                });
            }
        }, t.prototype.clear = function(t) {
            this._lastValue = null, this._lastStatus = null;
            var e = t.getZr(), n = this._group, i = this._handle;
            e && n && (this._lastGraphicKey = null, n && e.remove(n), i && e.remove(i), this._group = null, 
            this._handle = null, this._payloadInfo = null);
        }, t.prototype.doClear = function() {}, t.prototype.buildLabel = function(t, e, n) {
            return {
                x: t[n = n || 0],
                y: t[1 - n],
                width: e[n],
                height: e[1 - n]
            };
        }, t;
    }(), bb = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this;
        }
        return n(e, t), e.prototype.makeElOption = function(t, e, n, i, r) {
            var o = n.axis;
            "angle" === o.dim && (this.animationThreshold = Math.PI / 18);
            var a = o.polar, s = a.getOtherAxis(o).getExtent(), l = o.dataToCoord(e), u = i.get("type");
            if (u && "none" !== u) {
                var h = Ou(i), c = Sb[u](o, a, l, s);
                c.style = h, t.graphicKey = c.type, t.pointer = c;
            }
            var p = function(t, e, n, i, r) {
                var o = e.axis, a = o.dataToCoord(t), s = i.getAngleAxis().getExtent()[0];
                s = s / 180 * Math.PI;
                var l, u, h, c = i.getRadiusAxis().getExtent();
                if ("radius" === o.dim) {
                    var p = [ 1, 0, 0, 1, 0, 0 ];
                    fe(p, p, s), pe(p, p, [ i.cx, i.cy ]), l = Sr([ a, -r ], p);
                    var f = e.getModel("axisLabel").get("rotate") || 0, d = Vw.innerTextLayout(s, f * Math.PI / 180, -1);
                    u = d.textAlign, h = d.textVerticalAlign;
                } else {
                    var g = c[1];
                    l = i.coordToPoint([ g + r, a ]);
                    var y = i.cx, v = i.cy;
                    u = Math.abs(l[0] - y) / g < .3 ? "center" : l[0] > y ? "left" : "right", h = Math.abs(l[1] - v) / g < .3 ? "middle" : l[1] > v ? "top" : "bottom";
                }
                return {
                    position: l,
                    align: u,
                    verticalAlign: h
                };
            }(e, n, 0, a, i.get([ "label", "margin" ]));
            Ru(t, n, i, r, p);
        }, e;
    }(wb), Sb = {
        line: function(t, e, n, i) {
            return "angle" === t.dim ? {
                type: "Line",
                shape: Bu(e.coordToPoint([ i[0], n ]), e.coordToPoint([ i[1], n ]))
            } : {
                type: "Circle",
                shape: {
                    cx: e.cx,
                    cy: e.cy,
                    r: n
                }
            };
        },
        shadow: function(t, e, n, i) {
            var r = Math.max(1, t.getBandWidth()), o = Math.PI / 180;
            return "angle" === t.dim ? {
                type: "Sector",
                shape: Fu(e.cx, e.cy, i[0], i[1], (-n - r / 2) * o, (r / 2 - n) * o)
            } : {
                type: "Sector",
                shape: Fu(e.cx, e.cy, n - r / 2, n + r / 2, 0, 2 * Math.PI)
            };
        }
    }, Mb = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this;
        }
        return n(e, t), e.prototype.makeElOption = function(t, e, n, i, r) {
            var o = n.axis, a = o.grid, s = i.get("type"), l = Vu(a, o).getOtherAxis(o).getGlobalExtent(), u = o.toGlobalCoord(o.dataToCoord(e, !0));
            if (s && "none" !== s) {
                var h = Ou(i), c = Tb[s](o, u, l);
                c.style = h, t.graphicKey = c.type, t.pointer = c;
            }
            !function(t, e, n, i, r, o) {
                var a = Vw.innerTextLayout(n.rotation, 0, n.labelDirection);
                n.labelMargin = r.get([ "label", "margin" ]), Ru(e, i, r, o, {
                    position: Nu(i.axis, t, n),
                    align: a.textAlign,
                    verticalAlign: a.textVerticalAlign
                });
            }(e, t, yu(a.model, n), n, i, r);
        }, e.prototype.getHandleTransform = function(t, e, n) {
            var i = yu(e.axis.grid.model, e, {
                labelInside: !1
            });
            i.labelMargin = n.get([ "handle", "margin" ]);
            var r = Nu(e.axis, t, i);
            return {
                x: r[0],
                y: r[1],
                rotation: i.rotation + (i.labelDirection < 0 ? Math.PI : 0)
            };
        }, e.prototype.updateHandleTransform = function(t, e, n) {
            var i = n.axis, r = i.grid, o = i.getGlobalExtent(!0), a = Vu(r, i).getOtherAxis(i).getGlobalExtent(), s = "x" === i.dim ? 0 : 1, l = [ t.x, t.y ];
            l[s] += e[s], l[s] = Math.min(o[1], l[s]), l[s] = Math.max(o[0], l[s]);
            var u = (a[1] + a[0]) / 2, h = [ u, u ];
            h[s] = l[s];
            return {
                x: l[0],
                y: l[1],
                rotation: t.rotation,
                cursorPoint: h,
                tooltipOption: [ {
                    verticalAlign: "middle"
                }, {
                    align: "center"
                } ][s]
            };
        }, e;
    }(wb), Tb = {
        line: function(t, e, n) {
            return {
                type: "Line",
                subPixelOptimize: !0,
                shape: Bu([ e, n[0] ], [ e, n[1] ], Hu(t))
            };
        },
        shadow: function(t, e, n) {
            var i = Math.max(1, t.getBandWidth()), r = n[1] - n[0];
            return {
                type: "Rect",
                shape: zu([ e - i / 2, n[0] ], [ i, r ], Hu(t))
            };
        }
    }, Cb = function(t) {
        function e() {
            var n = null !== t && t.apply(this, arguments) || this;
            return n.type = e.type, n;
        }
        return n(e, t), e.type = "axisPointer", e.defaultOption = {
            show: "auto",
            zlevel: 0,
            z: 50,
            type: "line",
            snap: !1,
            triggerTooltip: !0,
            value: null,
            status: null,
            link: [],
            animation: null,
            animationDurationUpdate: 200,
            lineStyle: {
                color: "#B9BEC9",
                width: 1,
                type: "dashed"
            },
            shadowStyle: {
                color: "rgba(210,219,238,0.2)"
            },
            label: {
                show: !0,
                formatter: null,
                precision: "auto",
                margin: 3,
                color: "#fff",
                padding: [ 5, 7, 5, 7 ],
                backgroundColor: "auto",
                borderColor: null,
                borderWidth: 0,
                borderRadius: 3
            },
            handle: {
                show: !1,
                icon: "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",
                size: 45,
                margin: 50,
                color: "#333",
                shadowBlur: 3,
                shadowColor: "#aaa",
                shadowOffsetX: 0,
                shadowOffsetY: 2,
                throttle: 40
            }
        }, e;
    }(_y), Ab = sn(), kb = y, Ib = function(t) {
        function e() {
            var n = null !== t && t.apply(this, arguments) || this;
            return n.type = e.type, n;
        }
        return n(e, t), e.prototype.render = function(t, e, n) {
            var i = e.getComponent("tooltip"), r = t.get("triggerOn") || i && i.get("triggerOn") || "mousemove|click";
            Gu("axisPointer", n, function(t, e, n) {
                "none" !== r && ("leave" === t || r.indexOf(t) >= 0) && n({
                    type: "updateAxisPointer",
                    currTrigger: t,
                    x: e && e.offsetX,
                    y: e && e.offsetY
                });
            });
        }, e.prototype.remove = function(t, e) {
            Xu("axisPointer", e);
        }, e.prototype.dispose = function(t, e) {
            Xu("axisPointer", e);
        }, e.type = "axisPointer", e;
    }(bv), Db = sn(), Pb = function(t) {
        function e() {
            var n = null !== t && t.apply(this, arguments) || this;
            return n.type = e.type, n;
        }
        return n(e, t), e.prototype.findAxisModel = function(t) {
            var e;
            return this.ecModel.eachComponent(t, function(t) {
                t.getCoordSysModel() === this && (e = t);
            }, this), e;
        }, e.type = "polar", e.dependencies = [ "radiusAxis", "angleAxis" ], e.defaultOption = {
            zlevel: 0,
            z: 0,
            center: [ "50%", "50%" ],
            radius: "80%"
        }, e;
    }(_y), Lb = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this;
        }
        return n(e, t), e.prototype.getCoordSysModel = function() {
            return this.getReferringComponents("polar", Pp).models[0];
        }, e.type = "polarAxis", e;
    }(_y);
    d(Lb, pw);
    var Ob = function(t) {
        function e() {
            var n = null !== t && t.apply(this, arguments) || this;
            return n.type = e.type, n;
        }
        return n(e, t), e.type = "angleAxis", e;
    }(Lb), Rb = function(t) {
        function e() {
            var n = null !== t && t.apply(this, arguments) || this;
            return n.type = e.type, n;
        }
        return n(e, t), e.type = "radiusAxis", e;
    }(Lb), Eb = function(t) {
        function e(e, n) {
            return t.call(this, "radius", e, n) || this;
        }
        return n(e, t), e.prototype.pointToData = function(t, e) {
            return this.polar.pointToData(t, e)["radius" === this.dim ? 0 : 1];
        }, e;
    }(Mw);
    Eb.prototype.dataToRadius = Mw.prototype.dataToCoord, Eb.prototype.radiusToData = Mw.prototype.coordToData;
    var Nb = sn(), Bb = function(t) {
        function e(e, n) {
            return t.call(this, "angle", e, n || [ 0, 360 ]) || this;
        }
        return n(e, t), e.prototype.pointToData = function(t, e) {
            return this.polar.pointToData(t, e)["radius" === this.dim ? 0 : 1];
        }, e.prototype.calculateCategoryInterval = function() {
            var t = this, e = t.getLabelModel(), n = t.scale, i = n.getExtent(), r = n.count();
            if (i[1] - i[0] < 1) return 0;
            var o = i[0], a = t.dataToCoord(o + 1) - t.dataToCoord(o), s = Math.abs(a), l = _e(null == o ? "" : o + "", e.getFont(), "center", "top"), u = Math.max(l.height, 7) / s;
            isNaN(u) && (u = 1 / 0);
            var h = Math.max(0, Math.floor(u)), c = Nb(t.model), p = c.lastAutoInterval, f = c.lastTickCount;
            return null != p && null != f && Math.abs(p - h) <= 1 && Math.abs(f - r) <= 1 && p > h ? h = p : (c.lastTickCount = r, 
            c.lastAutoInterval = h), h;
        }, e;
    }(Mw);
    Bb.prototype.dataToAngle = Mw.prototype.dataToCoord, Bb.prototype.angleToData = Mw.prototype.coordToData;
    var zb = function() {
        function t(t) {
            this.dimensions = [ "radius", "angle" ], this.type = "polar", this.cx = 0, this.cy = 0, 
            this._radiusAxis = new Eb(), this._angleAxis = new Bb(), this.axisPointerEnabled = !0, 
            this.name = t || "", this._radiusAxis.polar = this._angleAxis.polar = this;
        }
        return t.prototype.containPoint = function(t) {
            var e = this.pointToCoord(t);
            return this._radiusAxis.contain(e[0]) && this._angleAxis.contain(e[1]);
        }, t.prototype.containData = function(t) {
            return this._radiusAxis.containData(t[0]) && this._angleAxis.containData(t[1]);
        }, t.prototype.getAxis = function(t) {
            return this["_" + t + "Axis"];
        }, t.prototype.getAxes = function() {
            return [ this._radiusAxis, this._angleAxis ];
        }, t.prototype.getAxesByScale = function(t) {
            var e = [], n = this._angleAxis, i = this._radiusAxis;
            return n.scale.type === t && e.push(n), i.scale.type === t && e.push(i), e;
        }, t.prototype.getAngleAxis = function() {
            return this._angleAxis;
        }, t.prototype.getRadiusAxis = function() {
            return this._radiusAxis;
        }, t.prototype.getOtherAxis = function(t) {
            var e = this._angleAxis;
            return t === e ? this._radiusAxis : e;
        }, t.prototype.getBaseAxis = function() {
            return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAngleAxis();
        }, t.prototype.getTooltipAxes = function(t) {
            var e = null != t && "auto" !== t ? this.getAxis(t) : this.getBaseAxis();
            return {
                baseAxes: [ e ],
                otherAxes: [ this.getOtherAxis(e) ]
            };
        }, t.prototype.dataToPoint = function(t, e) {
            return this.coordToPoint([ this._radiusAxis.dataToRadius(t[0], e), this._angleAxis.dataToAngle(t[1], e) ]);
        }, t.prototype.pointToData = function(t, e) {
            var n = this.pointToCoord(t);
            return [ this._radiusAxis.radiusToData(n[0], e), this._angleAxis.angleToData(n[1], e) ];
        }, t.prototype.pointToCoord = function(t) {
            var e = t[0] - this.cx, n = t[1] - this.cy, i = this.getAngleAxis(), r = i.getExtent(), o = Math.min(r[0], r[1]), a = Math.max(r[0], r[1]);
            i.inverse ? o = a - 360 : a = o + 360;
            var s = Math.sqrt(e * e + n * n);
            e /= s, n /= s;
            for (var l = Math.atan2(-n, e) / Math.PI * 180, u = o > l ? 1 : -1; o > l || l > a; ) l += 360 * u;
            return [ s, l ];
        }, t.prototype.coordToPoint = function(t) {
            var e = t[0], n = t[1] / 180 * Math.PI;
            return [ Math.cos(n) * e + this.cx, -Math.sin(n) * e + this.cy ];
        }, t.prototype.getArea = function() {
            var t = this.getAngleAxis(), e = this.getRadiusAxis().getExtent().slice();
            e[0] > e[1] && e.reverse();
            var n = t.getExtent(), i = Math.PI / 180;
            return {
                cx: this.cx,
                cy: this.cy,
                r0: e[0],
                r: e[1],
                startAngle: -n[0] * i,
                endAngle: -n[1] * i,
                clockwise: t.inverse,
                contain: function(t, e) {
                    var n = t - this.cx, i = e - this.cy, r = n * n + i * i, o = this.r, a = this.r0;
                    return o * o >= r && r >= a * a;
                }
            };
        }, t.prototype.convertToPixel = function(t, e, n) {
            return th(e) === this ? this.dataToPoint(n) : null;
        }, t.prototype.convertFromPixel = function(t, e, n) {
            return th(e) === this ? this.pointToData(n) : null;
        }, t;
    }(), Fb = {
        dimensions: zb.prototype.dimensions,
        create: function(t, e) {
            var n = [];
            return t.eachComponent("polar", function(t, i) {
                var r = new zb(i + "");
                r.update = eh;
                var o = r.getRadiusAxis(), a = r.getAngleAxis(), s = t.findAxisModel("radiusAxis"), l = t.findAxisModel("angleAxis");
                nh(o, s), nh(a, l), function(t, e, n) {
                    var i = e.get("center"), r = n.getWidth(), o = n.getHeight();
                    t.cx = Le(i[0], r), t.cy = Le(i[1], o);
                    var a = t.getRadiusAxis(), s = Math.min(r, o) / 2, l = e.get("radius");
                    null == l ? l = [ 0, "100%" ] : S(l) || (l = [ 0, l ]);
                    var u = [ Le(l[0], s), Le(l[1], s) ];
                    a.inverse ? a.setExtent(u[1], u[0]) : a.setExtent(u[0], u[1]);
                }(r, t, e), n.push(r), t.coordinateSystem = r, r.model = t;
            }), t.eachSeries(function(t) {
                if ("polar" === t.get("coordinateSystem")) {
                    var e = t.getReferringComponents("polar", Pp).models[0];
                    t.coordinateSystem = e.coordinateSystem;
                }
            }), n;
        }
    }, Vb = [ "axisLine", "axisLabel", "axisTick", "minorTick", "splitLine", "minorSplitLine", "splitArea" ], Hb = function(t) {
        function e() {
            var n = null !== t && t.apply(this, arguments) || this;
            return n.type = e.type, n.axisPointerClass = "PolarAxisPointer", n;
        }
        return n(e, t), e.prototype.render = function(t) {
            if (this.group.removeAll(), t.get("show")) {
                var e = t.axis, n = e.polar, i = n.getRadiusAxis().getExtent(), r = e.getTicksCoords(), o = e.getMinorTicksCoords(), a = v(e.getViewLabels(), function(t) {
                    t = s(t);
                    var n = e.scale, i = "ordinal" === n.type ? n.getRawOrdinalNumber(t.tickValue) : t.tickValue;
                    return t.coord = e.dataToCoord(i), t;
                });
                oh(a), oh(r), y(Vb, function(s) {
                    !t.get([ s, "show" ]) || e.scale.isBlank() && "axisLine" !== s || Gb[s](this.group, t, n, r, o, i, a);
                }, this);
            }
        }, e.type = "angleAxis", e;
    }(lb), Gb = {
        axisLine: function(t, e, n, i, r, o) {
            var a, s = e.getModel([ "axisLine", "lineStyle" ]), l = rh(n), u = l ? 0 : 1;
            (a = 0 === o[u] ? new zd({
                shape: {
                    cx: n.cx,
                    cy: n.cy,
                    r: o[l]
                },
                style: s.getLineStyle(),
                z2: 1,
                silent: !0
            }) : new eg({
                shape: {
                    cx: n.cx,
                    cy: n.cy,
                    r: o[l],
                    r0: o[u]
                },
                style: s.getLineStyle(),
                z2: 1,
                silent: !0
            })).style.fill = null, t.add(a);
        },
        axisTick: function(t, e, n, i, r, o) {
            var a = e.getModel("axisTick"), s = (a.get("inside") ? -1 : 1) * a.get("length"), l = o[rh(n)], u = v(i, function(t) {
                return new lg({
                    shape: ih(n, [ l, l + s ], t.coord)
                });
            });
            t.add(Ig(u, {
                style: c(a.getModel("lineStyle").getLineStyle(), {
                    stroke: e.get([ "axisLine", "lineStyle", "color" ])
                })
            }));
        },
        minorTick: function(t, e, n, i, r, o) {
            if (r.length) {
                for (var a = e.getModel("axisTick"), s = e.getModel("minorTick"), l = (a.get("inside") ? -1 : 1) * s.get("length"), u = o[rh(n)], h = [], p = 0; p < r.length; p++) for (var f = 0; f < r[p].length; f++) h.push(new lg({
                    shape: ih(n, [ u, u + l ], r[p][f].coord)
                }));
                t.add(Ig(h, {
                    style: c(s.getModel("lineStyle").getLineStyle(), c(a.getLineStyle(), {
                        stroke: e.get([ "axisLine", "lineStyle", "color" ])
                    }))
                }));
            }
        },
        axisLabel: function(t, e, n, i, r, o, a) {
            var s = e.getCategories(!0), l = e.getModel("axisLabel"), u = l.get("margin"), h = e.get("triggerEvent");
            y(a, function(i) {
                var r = l, a = i.tickValue, c = o[rh(n)], p = n.coordToPoint([ c + u, i.coord ]), f = n.cx, d = n.cy, g = Math.abs(p[0] - f) / c < .3 ? "center" : p[0] > f ? "left" : "right", y = Math.abs(p[1] - d) / c < .3 ? "middle" : p[1] > d ? "top" : "bottom";
                if (s && s[a]) {
                    var v = s[a];
                    k(v) && v.textStyle && (r = new Yg(v.textStyle, l, l.ecModel));
                }
                var m = new rd({
                    silent: Vw.isLabelSilent(e),
                    style: Nr(r, {
                        x: p[0],
                        y: p[1],
                        fill: r.getTextColor() || e.get([ "axisLine", "lineStyle", "color" ]),
                        text: i.formattedLabel,
                        align: g,
                        verticalAlign: y
                    })
                });
                if (t.add(m), h) {
                    var _ = Vw.makeAxisEventDataBase(e);
                    _.targetType = "axisLabel", _.value = i.rawLabel, sd(m).eventData = _;
                }
            }, this);
        },
        splitLine: function(t, e, n, i, r, o) {
            var a = e.getModel("splitLine").getModel("lineStyle"), s = a.get("color"), l = 0;
            s = s instanceof Array ? s : [ s ];
            for (var u = [], h = 0; h < i.length; h++) {
                var p = l++ % s.length;
                u[p] = u[p] || [], u[p].push(new lg({
                    shape: ih(n, o, i[h].coord)
                }));
            }
            for (h = 0; h < u.length; h++) t.add(Ig(u[h], {
                style: c({
                    stroke: s[h % s.length]
                }, a.getLineStyle()),
                silent: !0,
                z: e.get("z")
            }));
        },
        minorSplitLine: function(t, e, n, i, r, o) {
            if (r.length) {
                for (var a = e.getModel("minorSplitLine").getModel("lineStyle"), s = [], l = 0; l < r.length; l++) for (var u = 0; u < r[l].length; u++) s.push(new lg({
                    shape: ih(n, o, r[l][u].coord)
                }));
                t.add(Ig(s, {
                    style: a.getLineStyle(),
                    silent: !0,
                    z: e.get("z")
                }));
            }
        },
        splitArea: function(t, e, n, i, r, o) {
            if (i.length) {
                var a = e.getModel("splitArea").getModel("areaStyle"), s = a.get("color"), l = 0;
                s = s instanceof Array ? s : [ s ];
                for (var u = [], h = Math.PI / 180, p = -i[0].coord * h, f = Math.min(o[0], o[1]), d = Math.max(o[0], o[1]), g = e.get("clockwise"), y = 1, v = i.length; v >= y; y++) {
                    var m = y === v ? i[0].coord : i[y].coord, _ = l++ % s.length;
                    u[_] = u[_] || [], u[_].push(new Qd({
                        shape: {
                            cx: n.cx,
                            cy: n.cy,
                            r0: f,
                            r: d,
                            startAngle: p,
                            endAngle: -m * h,
                            clockwise: g
                        },
                        silent: !0
                    })), p = -m * h;
                }
                for (y = 0; y < u.length; y++) t.add(Ig(u[y], {
                    style: c({
                        fill: s[y % s.length]
                    }, a.getAreaStyle()),
                    silent: !0
                }));
            }
        }
    }, Wb = [ "axisLine", "axisTickLabel", "axisName" ], Ub = [ "splitLine", "splitArea", "minorSplitLine" ], Xb = function(t) {
        function e() {
            var n = null !== t && t.apply(this, arguments) || this;
            return n.type = e.type, n.axisPointerClass = "PolarAxisPointer", n;
        }
        return n(e, t), e.prototype.render = function(t) {
            if (this.group.removeAll(), t.get("show")) {
                var e = this._axisGroup, n = this._axisGroup = new mp();
                this.group.add(n);
                var i = t.axis, r = i.polar, o = r.getAngleAxis(), a = i.getTicksCoords(), s = i.getMinorTicksCoords(), l = o.getExtent()[0], u = i.getExtent(), h = function(t, e, n) {
                    return {
                        position: [ t.cx, t.cy ],
                        rotation: n / 180 * Math.PI,
                        labelDirection: -1,
                        tickDirection: -1,
                        nameDirection: 1,
                        labelRotate: e.getModel("axisLabel").get("rotate"),
                        z2: 1
                    };
                }(r, t, l), c = new Vw(t, h);
                y(Wb, c.add, c), n.add(c.getGroup()), Tr(e, n, t), y(Ub, function(e) {
                    t.get([ e, "show" ]) && !i.scale.isBlank() && Yb[e](this.group, t, r, l, u, a, s);
                }, this);
            }
        }, e.type = "radiusAxis", e;
    }(lb), Yb = {
        splitLine: function(t, e, n, i, r, o) {
            var a = e.getModel("splitLine").getModel("lineStyle"), s = a.get("color"), l = 0;
            s = s instanceof Array ? s : [ s ];
            for (var u = [], h = 0; h < o.length; h++) {
                var p = l++ % s.length;
                u[p] = u[p] || [], u[p].push(new zd({
                    shape: {
                        cx: n.cx,
                        cy: n.cy,
                        r: o[h].coord
                    }
                }));
            }
            for (h = 0; h < u.length; h++) t.add(Ig(u[h], {
                style: c({
                    stroke: s[h % s.length],
                    fill: null
                }, a.getLineStyle()),
                silent: !0
            }));
        },
        minorSplitLine: function(t, e, n, i, r, o, a) {
            if (a.length) {
                for (var s = e.getModel("minorSplitLine").getModel("lineStyle"), l = [], u = 0; u < a.length; u++) for (var h = 0; h < a[u].length; h++) l.push(new zd({
                    shape: {
                        cx: n.cx,
                        cy: n.cy,
                        r: a[u][h].coord
                    }
                }));
                t.add(Ig(l, {
                    style: c({
                        fill: null
                    }, s.getLineStyle()),
                    silent: !0
                }));
            }
        },
        splitArea: function(t, e, n, i, r, o) {
            if (o.length) {
                var a = e.getModel("splitArea").getModel("areaStyle"), s = a.get("color"), l = 0;
                s = s instanceof Array ? s : [ s ];
                for (var u = [], h = o[0].coord, p = 1; p < o.length; p++) {
                    var f = l++ % s.length;
                    u[f] = u[f] || [], u[f].push(new Qd({
                        shape: {
                            cx: n.cx,
                            cy: n.cy,
                            r0: h,
                            r: o[p].coord,
                            startAngle: 0,
                            endAngle: 2 * Math.PI
                        },
                        silent: !0
                    })), h = o[p].coord;
                }
                for (p = 0; p < u.length; p++) t.add(Ig(u[p], {
                    style: c({
                        fill: s[p % s.length]
                    }, a.getAreaStyle()),
                    silent: !0
                }));
            }
        }
    }, qb = {
        startAngle: 90,
        clockwise: !0,
        splitNumber: 12,
        axisLabel: {
            rotate: 0
        }
    }, jb = {
        splitNumber: 5
    }, Zb = function(t) {
        function e() {
            var n = null !== t && t.apply(this, arguments) || this;
            return n.type = e.type, n;
        }
        return n(e, t), e.type = "polar", e;
    }(bv);
    Gl(function(t) {
        Gl(Qu), lb.registerAxisPointerClass("PolarAxisPointer", bb), t.registerCoordinateSystem("polar", Fb), 
        t.registerComponentModel(Pb), t.registerComponentView(Zb), fu(t, "angle", Ob, qb), 
        fu(t, "radius", Rb, jb), t.registerComponentView(Hb), t.registerComponentView(Xb), 
        t.registerLayout(b(lh, "bar"));
    });
    var Kb = sn(), $b = function(t) {
        function e() {
            var n = null !== t && t.apply(this, arguments) || this;
            return n.type = e.type, n.createdBySelf = !1, n;
        }
        return n(e, t), e.prototype.init = function(t, e, n) {
            this.mergeDefaultAndTheme(t, n), this._mergeOption(t, n, !1, !0);
        }, e.prototype.isAnimationEnabled = function() {
            if (wh.node) return !1;
            var t = this.__hostSeries;
            return this.getShallow("animation") && t && t.isAnimationEnabled();
        }, e.prototype.mergeOption = function(t, e) {
            this._mergeOption(t, e, !1, !1);
        }, e.prototype._mergeOption = function(t, e, n, i) {
            var r = this.mainType;
            n || e.eachSeries(function(t) {
                var n = t.get(this.mainType, !0), o = Kb(t)[r];
                return n && n.data ? (o ? o._mergeOption(n, e, !0) : (i && uh(n), y(n.data, function(t) {
                    t instanceof Array ? (uh(t[0]), uh(t[1])) : uh(t);
                }), h(o = this.createMarkerModelFromSeries(n, this, e), {
                    mainType: this.mainType,
                    seriesIndex: t.seriesIndex,
                    name: t.name,
                    createdBySelf: !0
                }), o.__hostSeries = t), void (Kb(t)[r] = o)) : void (Kb(t)[r] = null);
            }, this);
        }, e.prototype.formatTooltip = function(t) {
            var e = this.getData(), n = this.getRawValue(t), i = e.getName(t);
            return ha("section", {
                header: this.name,
                blocks: [ ha("nameValue", {
                    name: i,
                    value: n,
                    noName: !i,
                    noValue: null == n
                }) ]
            });
        }, e.prototype.getData = function() {
            return this._data;
        }, e.prototype.setData = function(t) {
            this._data = t;
        }, e.getMarkerModelFromSeries = function(t, e) {
            return Kb(t)[e];
        }, e.type = "marker", e.dependencies = [ "series", "grid", "polar", "geo" ], e;
    }(_y);
    d($b, fv.prototype);
    var Jb = function(t) {
        function e() {
            var n = null !== t && t.apply(this, arguments) || this;
            return n.type = e.type, n;
        }
        return n(e, t), e.prototype.createMarkerModelFromSeries = function(t, n, i) {
            return new e(t, n, i);
        }, e.type = "markArea", e.defaultOption = {
            zlevel: 0,
            z: 1,
            tooltip: {
                trigger: "item"
            },
            animation: !1,
            label: {
                show: !0,
                position: "top"
            },
            itemStyle: {
                borderWidth: 0
            },
            emphasis: {
                label: {
                    show: !0,
                    position: "top"
                }
            }
        }, e;
    }($b), Qb = {
        min: b(hh, "min"),
        max: b(hh, "max"),
        average: b(hh, "average"),
        median: b(hh, "median")
    }, tS = sn(), eS = function(t) {
        function e() {
            var n = null !== t && t.apply(this, arguments) || this;
            return n.type = e.type, n;
        }
        return n(e, t), e.prototype.init = function() {
            this.markerGroupMap = U();
        }, e.prototype.render = function(t, e, n) {
            var i = this, r = this.markerGroupMap;
            r.each(function(t) {
                tS(t).keep = !1;
            }), e.eachSeries(function(t) {
                var r = $b.getMarkerModelFromSeries(t, i.type);
                r && i.renderSeries(t, r, e, n);
            }), r.each(function(t) {
                !tS(t).keep && i.group.remove(t.group);
            });
        }, e.prototype.markKeep = function(t) {
            tS(t).keep = !0;
        }, e.prototype.blurSeries = function(t) {
            var e = this;
            y(t, function(t) {
                var n = $b.getMarkerModelFromSeries(t, e.type);
                n && n.getData().eachItemGraphicEl(function(t) {
                    t && Ri(t);
                });
            });
        }, e.type = "marker", e;
    }(bv), nS = sn(), iS = function(t, e, n, i) {
        var r = ch(t, i[0]), o = ch(t, i[1]), a = r.coord, s = o.coord;
        a[0] = E(a[0], -1 / 0), a[1] = E(a[1], -1 / 0), s[0] = E(s[0], 1 / 0), s[1] = E(s[1], 1 / 0);
        var l = u([ {}, r, o ]);
        return l.coord = [ r.coord, o.coord ], l.x0 = r.x, l.y0 = r.y, l.x1 = o.x, l.y1 = o.y, 
        l;
    }, rS = [ [ "x0", "y0" ], [ "x1", "y0" ], [ "x1", "y1" ], [ "x0", "y1" ] ], oS = function(t) {
        function e() {
            var n = null !== t && t.apply(this, arguments) || this;
            return n.type = e.type, n;
        }
        return n(e, t), e.prototype.updateTransform = function(t, e, n) {
            e.eachSeries(function(t) {
                var e = $b.getMarkerModelFromSeries(t, "markArea");
                if (e) {
                    var i = e.getData();
                    i.each(function(e) {
                        var r = v(rS, function(r) {
                            return mh(i, e, r, t, n);
                        });
                        i.setItemLayout(e, r), i.getItemGraphicEl(e).setShape("points", r);
                    });
                }
            }, this);
        }, e.prototype.renderSeries = function(t, e, n, i) {
            var r = t.coordinateSystem, o = t.id, a = t.getData(), s = this.markerGroupMap, l = s.get(o) || s.set(o, {
                group: new mp()
            });
            this.group.add(l.group), this.markKeep(l);
            var u = function(t, e, n) {
                var i, r;
                t ? (i = v(t && t.dimensions, function(t) {
                    var n = e.getData();
                    return c({
                        name: t
                    }, n.getDimensionInfo(n.mapDimension(t)) || {});
                }), r = new Hx(v([ "x0", "y0", "x1", "y1" ], function(t, e) {
                    return {
                        name: t,
                        type: i[e % 2].type
                    };
                }), n)) : r = new Hx(i = [ {
                    name: "value",
                    type: "float"
                } ], n);
                var o = v(n.get("data"), b(iS, e, t, n));
                t && (o = _(o, b(vh, t)));
                var a = t ? function(t, e, n, i) {
                    return t.coord[Math.floor(i / 2)][i % 2];
                } : function(t) {
                    return t.value;
                };
                return r.initData(o, null, a), r.hasItemOption = !0, r;
            }(r, t, e);
            e.setData(u), u.each(function(e) {
                var n = v(rS, function(n) {
                    return mh(u, e, n, t, i);
                }), o = r.getAxis("x").scale, s = r.getAxis("y").scale, l = o.getExtent(), h = s.getExtent(), c = [ o.parse(u.get("x0", e)), o.parse(u.get("x1", e)) ], p = [ s.parse(u.get("y0", e)), s.parse(u.get("y1", e)) ];
                Re(c), Re(p);
                var f = !!(l[0] > c[1] || l[1] < c[0] || h[0] > p[1] || h[1] < p[0]);
                u.setItemLayout(e, {
                    points: n,
                    allClipped: f
                });
                var d = u.getItemModel(e).getModel("itemStyle").getItemStyle(), g = Fa(a, "color");
                d.fill || (d.fill = g, "string" == typeof d.fill && (d.fill = Gt(d.fill, .4))), 
                d.stroke || (d.stroke = g), u.setItemVisual(e, "style", d);
            }), u.diff(nS(l).data).add(function(t) {
                var e = u.getItemLayout(t);
                if (!e.allClipped) {
                    var n = new ig({
                        shape: {
                            points: e.points
                        }
                    });
                    u.setItemGraphicEl(t, n), l.group.add(n);
                }
            }).update(function(t, n) {
                var i = nS(l).data.getItemGraphicEl(n), r = u.getItemLayout(t);
                r.allClipped ? i && l.group.remove(i) : (i ? vr(i, {
                    shape: {
                        points: r.points
                    }
                }, e, t) : i = new ig({
                    shape: {
                        points: r.points
                    }
                }), u.setItemGraphicEl(t, i), l.group.add(i));
            }).remove(function(t) {
                var e = nS(l).data.getItemGraphicEl(t);
                l.group.remove(e);
            }).execute(), u.eachItemGraphicEl(function(t, n) {
                var i = u.getItemModel(n), r = u.getItemVisual(n, "style");
                t.useStyle(u.getItemVisual(n, "style")), Rr(t, Er(i), {
                    labelFetcher: e,
                    labelDataIndex: n,
                    defaultText: u.getName(n) || "",
                    inheritColor: "string" == typeof r.fill ? Gt(r.fill, 1) : "#000"
                }), Yi(t, i), Xi(t), sd(t).dataModel = e;
            }), nS(l).data = u, l.group.silent = e.get("silent") || t.get("silent");
        }, e.type = "markArea", e;
    }(eS);
    Gl(function(t) {
        t.registerComponentModel(Jb), t.registerComponentView(oS), t.registerPreprocessor(function(t) {
            (function(t, e) {
                if (!t) return !1;
                for (var n = S(t) ? t : [ t ], i = 0; i < n.length; i++) if (n[i] && n[i][e]) return !0;
                return !1;
            })(t.series, "markArea") && (t.markArea = t.markArea || {});
        });
    }), e.version = "5.1.2", e.dependencies = {
        zrender: "5.1.1"
    }, e.PRIORITY = __, e.init = function(t, e, n) {
        var i = Hs(t);
        if (i) return i;
        var r = new j_(t, e, n);
        return r.id = "ec_" + lx++, ax[r.id] = r, cn(t, hx, r.id), U_(r), c_(ex, function(t) {
            t(r);
        }), r;
    }, e.connect = function(t) {
        if (S(t)) {
            var e = t;
            t = null, c_(e, function(e) {
                null != e.group && (t = e.group);
            }), t = t || "g_" + ux++, c_(e, function(e) {
                e.group = t;
            });
        }
        return sx[t] = !0, t;
    }, e.disConnect = Vs, e.disconnect = cx, e.dispose = function(t) {
        "string" == typeof t ? t = ax[t] : t instanceof j_ || (t = Hs(t)), t instanceof j_ && !t.isDisposed() && t.dispose();
    }, e.getInstanceByDom = Hs, e.getInstanceById = function(t) {
        return ax[t];
    }, e.registerTheme = Gs, e.registerPreprocessor = Ws, e.registerProcessor = Us, 
    e.registerPostInit = Xs, e.registerPostUpdate = Ys, e.registerAction = qs, e.registerCoordinateSystem = js, 
    e.getCoordinateSystemDimensions = function(t) {
        var e = Zy.get(t);
        return e ? e.getDimensionsInfo ? e.getDimensionsInfo() : e.dimensions.slice() : void 0;
    }, e.registerLayout = Zs, e.registerVisual = Ks, e.registerLoading = Js, e.setCanvasCreator = function(t) {
        r("createCanvas", t);
    }, e.registerMap = Qs, e.getMap = function(t) {
        return u_.getMapForUser(t);
    }, e.registerTransform = fx, e.dataTool = {}, e.registerLocale = Hr, e.zrender = Sp, 
    e.matrix = Xc, e.vector = Wh, e.zrUtil = zh, e.color = Sc, e.helper = dw, e.number = vw, 
    e.time = mw, e.graphic = _w, e.format = xw, e.util = ww, e.ComponentModel = _y, 
    e.ComponentView = bv, e.SeriesModel = wv, e.ChartView = Tv, e.extendComponentModel = function(t) {
        var e = _y.extend(t);
        return _y.registerClass(e), e;
    }, e.extendComponentView = function(t) {
        var e = bv.extend(t);
        return bv.registerClass(e), e;
    }, e.extendSeriesModel = function(t) {
        var e = wv.extend(t);
        return wv.registerClass(e), e;
    }, e.extendChartView = function(t) {
        var e = Tv.extend(t);
        return Tv.registerClass(e), e;
    }, e.throttle = Ca, e.use = Gl, e.parseGeoJSON = Es, e.parseGeoJson = Es, e.env = wh, 
    e.List = Hx, e.Model = Yg, e.Axis = Mw, e.innerDrawElementOnCanvas = gs;
});