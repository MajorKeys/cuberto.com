/*!
 * jQuery JavaScript Library v2.1.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-04-28T16:01Z
 */
!function (t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function (t, e) {
    function i(t) {
        var e = "length" in t && t.length, i = K.type(t);
        return "function" !== i && !K.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t))
    }

    function n(t, e, i) {
        if (K.isFunction(e)) return K.grep(t, function (t, n) {
            return !!e.call(t, n, t) !== i
        });
        if (e.nodeType) return K.grep(t, function (t) {
            return t === e !== i
        });
        if ("string" == typeof e) {
            if (at.test(e)) return K.filter(e, t, i);
            e = K.filter(e, t)
        }
        return K.grep(t, function (t) {
            return U.call(e, t) >= 0 !== i
        })
    }

    function r(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType;) ;
        return t
    }

    function s(t) {
        var e = ft[t] = {};
        return K.each(t.match(dt) || [], function (t, i) {
            e[i] = !0
        }), e
    }

    function o() {
        Z.removeEventListener("DOMContentLoaded", o, !1), t.removeEventListener("load", o, !1), K.ready()
    }

    function a() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function () {
                return {}
            }
        }), this.expando = K.expando + a.uid++
    }

    function l(t, e, i) {
        var n;
        if (void 0 === i && 1 === t.nodeType) if (n = "data-" + e.replace(xt, "-$1").toLowerCase(), i = t.getAttribute(n), "string" == typeof i) {
            try {
                i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : bt.test(i) ? K.parseJSON(i) : i)
            } catch (r) {
            }
            yt.set(t, e, i)
        } else i = void 0;
        return i
    }

    function h() {
        return !0
    }

    function c() {
        return !1
    }

    function u() {
        try {
            return Z.activeElement
        } catch (t) {
        }
    }

    function p(t, e) {
        return K.nodeName(t, "table") && K.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function d(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function f(t) {
        var e = Rt.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function m(t, e) {
        for (var i = 0, n = t.length; i < n; i++) vt.set(t[i], "globalEval", !e || vt.get(e[i], "globalEval"))
    }

    function g(t, e) {
        var i, n, r, s, o, a, l, h;
        if (1 === e.nodeType) {
            if (vt.hasData(t) && (s = vt.access(t), o = vt.set(e, s), h = s.events)) {
                delete o.handle, o.events = {};
                for (r in h) for (i = 0, n = h[r].length; i < n; i++) K.event.add(e, r, h[r][i])
            }
            yt.hasData(t) && (a = yt.access(t), l = K.extend({}, a), yt.set(e, l))
        }
    }

    function v(t, e) {
        var i = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
        return void 0 === e || e && K.nodeName(t, e) ? K.merge([t], i) : i
    }

    function y(t, e) {
        var i = e.nodeName.toLowerCase();
        "input" === i && Ct.test(t.type) ? e.checked = t.checked : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
    }

    function b(e, i) {
        var n, r = K(i.createElement(e)).appendTo(i.body),
            s = t.getDefaultComputedStyle && (n = t.getDefaultComputedStyle(r[0])) ? n.display : K.css(r[0], "display");
        return r.detach(), s
    }

    function x(t) {
        var e = Z, i = jt[t];
        return i || (i = b(t, e), "none" !== i && i || (Bt = (Bt || K("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = Bt[0].contentDocument, e.write(), e.close(), i = b(t, e), Bt.detach()), jt[t] = i), i
    }

    function _(t, e, i) {
        var n, r, s, o, a = t.style;
        return i = i || qt(t), i && (o = i.getPropertyValue(e) || i[e]), i && ("" !== o || K.contains(t.ownerDocument, t) || (o = K.style(t, e)), Ht.test(o) && zt.test(e) && (n = a.width, r = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = i.width, a.width = n, a.minWidth = r, a.maxWidth = s)), void 0 !== o ? o + "" : o
    }

    function w(t, e) {
        return {
            get: function () {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function T(t, e) {
        if (e in t) return e;
        for (var i = e[0].toUpperCase() + e.slice(1), n = e, r = Gt.length; r--;) if (e = Gt[r] + i, e in t) return e;
        return n
    }

    function C(t, e, i) {
        var n = Yt.exec(e);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
    }

    function S(t, e, i, n, r) {
        for (var s = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, o = 0; s < 4; s += 2) "margin" === i && (o += K.css(t, i + wt[s], !0, r)), n ? ("content" === i && (o -= K.css(t, "padding" + wt[s], !0, r)), "margin" !== i && (o -= K.css(t, "border" + wt[s] + "Width", !0, r))) : (o += K.css(t, "padding" + wt[s], !0, r), "padding" !== i && (o += K.css(t, "border" + wt[s] + "Width", !0, r)));
        return o
    }

    function k(t, e, i) {
        var n = !0, r = "width" === e ? t.offsetWidth : t.offsetHeight, s = qt(t),
            o = "border-box" === K.css(t, "boxSizing", !1, s);
        if (r <= 0 || null == r) {
            if (r = _(t, e, s), (r < 0 || null == r) && (r = t.style[e]), Ht.test(r)) return r;
            n = o && (Q.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
        }
        return r + S(t, e, i || (o ? "border" : "content"), n, s) + "px"
    }

    function E(t, e) {
        for (var i, n, r, s = [], o = 0, a = t.length; o < a; o++) n = t[o], n.style && (s[o] = vt.get(n, "olddisplay"), i = n.style.display, e ? (s[o] || "none" !== i || (n.style.display = ""), "" === n.style.display && Tt(n) && (s[o] = vt.access(n, "olddisplay", x(n.nodeName)))) : (r = Tt(n), "none" === i && r || vt.set(n, "olddisplay", r ? i : K.css(n, "display"))));
        for (o = 0; o < a; o++) n = t[o], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? s[o] || "" : "none"));
        return t
    }

    function A(t, e, i, n, r) {
        return new A.prototype.init(t, e, i, n, r)
    }

    function D() {
        return setTimeout(function () {
            Qt = void 0
        }), Qt = K.now()
    }

    function F(t, e) {
        var i, n = 0, r = {height: t};
        for (e = e ? 1 : 0; n < 4; n += 2 - e) i = wt[n], r["margin" + i] = r["padding" + i] = t;
        return e && (r.opacity = r.width = t), r
    }

    function $(t, e, i) {
        for (var n, r = (ie[e] || []).concat(ie["*"]), s = 0, o = r.length; s < o; s++) if (n = r[s].call(i, e, t)) return n
    }

    function P(t, e, i) {
        var n, r, s, o, a, l, h, c, u = this, p = {}, d = t.style, f = t.nodeType && Tt(t), m = vt.get(t, "fxshow");
        i.queue || (a = K._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
            a.unqueued || l()
        }), a.unqueued++, u.always(function () {
            u.always(function () {
                a.unqueued--, K.queue(t, "fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [d.overflow, d.overflowX, d.overflowY], h = K.css(t, "display"), c = "none" === h ? vt.get(t, "olddisplay") || x(t.nodeName) : h, "inline" === c && "none" === K.css(t, "float") && (d.display = "inline-block")), i.overflow && (d.overflow = "hidden", u.always(function () {
            d.overflow = i.overflow[0], d.overflowX = i.overflow[1], d.overflowY = i.overflow[2]
        }));
        for (n in e) if (r = e[n], Jt.exec(r)) {
            if (delete e[n], s = s || "toggle" === r, r === (f ? "hide" : "show")) {
                if ("show" !== r || !m || void 0 === m[n]) continue;
                f = !0
            }
            p[n] = m && m[n] || K.style(t, n)
        } else h = void 0;
        if (K.isEmptyObject(p)) "inline" === ("none" === h ? x(t.nodeName) : h) && (d.display = h); else {
            m ? "hidden" in m && (f = m.hidden) : m = vt.access(t, "fxshow", {}), s && (m.hidden = !f), f ? K(t).show() : u.done(function () {
                K(t).hide()
            }), u.done(function () {
                var e;
                vt.remove(t, "fxshow");
                for (e in p) K.style(t, e, p[e])
            });
            for (n in p) o = $(f ? m[n] : 0, n, u), n in m || (m[n] = o.start, f && (o.end = o.start, o.start = "width" === n || "height" === n ? 1 : 0))
        }
    }

    function O(t, e) {
        var i, n, r, s, o;
        for (i in t) if (n = K.camelCase(i), r = e[n], s = t[i], K.isArray(s) && (r = s[1], s = t[i] = s[0]), i !== n && (t[n] = s, delete t[i]), o = K.cssHooks[n], o && "expand" in o) {
            s = o.expand(s), delete t[n];
            for (i in s) i in t || (t[i] = s[i], e[i] = r)
        } else e[n] = r
    }

    function N(t, e, i) {
        var n, r, s = 0, o = ee.length, a = K.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (r) return !1;
            for (var e = Qt || D(), i = Math.max(0, h.startTime + h.duration - e), n = i / h.duration || 0, s = 1 - n, o = 0, l = h.tweens.length; o < l; o++) h.tweens[o].run(s);
            return a.notifyWith(t, [h, s, i]), s < 1 && l ? i : (a.resolveWith(t, [h]), !1)
        }, h = a.promise({
            elem: t,
            props: K.extend({}, e),
            opts: K.extend(!0, {specialEasing: {}}, i),
            originalProperties: e,
            originalOptions: i,
            startTime: Qt || D(),
            duration: i.duration,
            tweens: [],
            createTween: function (e, i) {
                var n = K.Tween(t, h.opts, e, i, h.opts.specialEasing[e] || h.opts.easing);
                return h.tweens.push(n), n
            },
            stop: function (e) {
                var i = 0, n = e ? h.tweens.length : 0;
                if (r) return this;
                for (r = !0; i < n; i++) h.tweens[i].run(1);
                return e ? a.resolveWith(t, [h, e]) : a.rejectWith(t, [h, e]), this
            }
        }), c = h.props;
        for (O(c, h.opts.specialEasing); s < o; s++) if (n = ee[s].call(h, t, c, h.opts)) return n;
        return K.map(c, $, h), K.isFunction(h.opts.start) && h.opts.start.call(t, h), K.fx.timer(K.extend(l, {
            elem: t,
            anim: h,
            queue: h.opts.queue
        })), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always)
    }

    function M(t) {
        return function (e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, r = 0, s = e.toLowerCase().match(dt) || [];
            if (K.isFunction(i)) for (; n = s[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }

    function R(t, e, i, n) {
        function r(a) {
            var l;
            return s[a] = !0, K.each(t[a] || [], function (t, a) {
                var h = a(e, i, n);
                return "string" != typeof h || o || s[h] ? o ? !(l = h) : void 0 : (e.dataTypes.unshift(h), r(h), !1)
            }), l
        }

        var s = {}, o = t === be;
        return r(e.dataTypes[0]) || !s["*"] && r("*")
    }

    function I(t, e) {
        var i, n, r = K.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
        return n && K.extend(!0, t, n), t
    }

    function L(t, e, i) {
        for (var n, r, s, o, a = t.contents, l = t.dataTypes; "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
        if (n) for (r in a) if (a[r] && a[r].test(n)) {
            l.unshift(r);
            break
        }
        if (l[0] in i) s = l[0]; else {
            for (r in i) {
                if (!l[0] || t.converters[r + " " + l[0]]) {
                    s = r;
                    break
                }
                o || (o = r)
            }
            s = s || o
        }
        if (s) return s !== l[0] && l.unshift(s), i[s]
    }

    function B(t, e, i, n) {
        var r, s, o, a, l, h = {}, c = t.dataTypes.slice();
        if (c[1]) for (o in t.converters) h[o.toLowerCase()] = t.converters[o];
        for (s = c.shift(); s;) if (t.responseFields[s] && (i[t.responseFields[s]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = c.shift()) if ("*" === s) s = l; else if ("*" !== l && l !== s) {
            if (o = h[l + " " + s] || h["* " + s], !o) for (r in h) if (a = r.split(" "), a[1] === s && (o = h[l + " " + a[0]] || h["* " + a[0]])) {
                o === !0 ? o = h[r] : h[r] !== !0 && (s = a[0], c.unshift(a[1]));
                break
            }
            if (o !== !0) if (o && t["throws"]) e = o(e); else try {
                e = o(e)
            } catch (u) {
                return {state: "parsererror", error: o ? u : "No conversion from " + l + " to " + s}
            }
        }
        return {state: "success", data: e}
    }

    function j(t, e, i, n) {
        var r;
        if (K.isArray(e)) K.each(e, function (e, r) {
            i || Ce.test(t) ? n(t, r) : j(t + "[" + ("object" == typeof r ? e : "") + "]", r, i, n)
        }); else if (i || "object" !== K.type(e)) n(t, e); else for (r in e) j(t + "[" + r + "]", e[r], i, n)
    }

    function z(t) {
        return K.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }

    var H = [], q = H.slice, X = H.concat, Y = H.push, U = H.indexOf, W = {}, V = W.toString, G = W.hasOwnProperty,
        Q = {}, Z = t.document, J = "2.1.4", K = function (t, e) {
            return new K.fn.init(t, e)
        }, tt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, et = /^-ms-/, it = /-([\da-z])/gi, nt = function (t, e) {
            return e.toUpperCase()
        };
    K.fn = K.prototype = {
        jquery: J, constructor: K, selector: "", length: 0, toArray: function () {
            return q.call(this)
        }, get: function (t) {
            return null != t ? t < 0 ? this[t + this.length] : this[t] : q.call(this)
        }, pushStack: function (t) {
            var e = K.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        }, each: function (t, e) {
            return K.each(this, t, e)
        }, map: function (t) {
            return this.pushStack(K.map(this, function (e, i) {
                return t.call(e, i, e)
            }))
        }, slice: function () {
            return this.pushStack(q.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (t) {
            var e = this.length, i = +t + (t < 0 ? e : 0);
            return this.pushStack(i >= 0 && i < e ? [this[i]] : [])
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: Y, sort: H.sort, splice: H.splice
    }, K.extend = K.fn.extend = function () {
        var t, e, i, n, r, s, o = arguments[0] || {}, a = 1, l = arguments.length, h = !1;
        for ("boolean" == typeof o && (h = o, o = arguments[a] || {}, a++), "object" == typeof o || K.isFunction(o) || (o = {}), a === l && (o = this, a--); a < l; a++) if (null != (t = arguments[a])) for (e in t) i = o[e], n = t[e], o !== n && (h && n && (K.isPlainObject(n) || (r = K.isArray(n))) ? (r ? (r = !1, s = i && K.isArray(i) ? i : []) : s = i && K.isPlainObject(i) ? i : {}, o[e] = K.extend(h, s, n)) : void 0 !== n && (o[e] = n));
        return o
    }, K.extend({
        expando: "jQuery" + (J + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) {
            throw new Error(t)
        }, noop: function () {
        }, isFunction: function (t) {
            return "function" === K.type(t)
        }, isArray: Array.isArray, isWindow: function (t) {
            return null != t && t === t.window
        }, isNumeric: function (t) {
            return !K.isArray(t) && t - parseFloat(t) + 1 >= 0
        }, isPlainObject: function (t) {
            return "object" === K.type(t) && !t.nodeType && !K.isWindow(t) && !(t.constructor && !G.call(t.constructor.prototype, "isPrototypeOf"))
        }, isEmptyObject: function (t) {
            var e;
            for (e in t) return !1;
            return !0
        }, type: function (t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? W[V.call(t)] || "object" : typeof t
        }, globalEval: function (t) {
            var e, i = eval;
            t = K.trim(t), t && (1 === t.indexOf("use strict") ? (e = Z.createElement("script"), e.text = t, Z.head.appendChild(e).parentNode.removeChild(e)) : i(t))
        }, camelCase: function (t) {
            return t.replace(et, "ms-").replace(it, nt)
        }, nodeName: function (t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        }, each: function (t, e, n) {
            var r, s = 0, o = t.length, a = i(t);
            if (n) {
                if (a) for (; s < o && (r = e.apply(t[s], n), r !== !1); s++) ; else for (s in t) if (r = e.apply(t[s], n), r === !1) break
            } else if (a) for (; s < o && (r = e.call(t[s], s, t[s]), r !== !1); s++) ; else for (s in t) if (r = e.call(t[s], s, t[s]), r === !1) break;
            return t
        }, trim: function (t) {
            return null == t ? "" : (t + "").replace(tt, "")
        }, makeArray: function (t, e) {
            var n = e || [];
            return null != t && (i(Object(t)) ? K.merge(n, "string" == typeof t ? [t] : t) : Y.call(n, t)), n
        }, inArray: function (t, e, i) {
            return null == e ? -1 : U.call(e, t, i)
        }, merge: function (t, e) {
            for (var i = +e.length, n = 0, r = t.length; n < i; n++) t[r++] = e[n];
            return t.length = r, t
        }, grep: function (t, e, i) {
            for (var n, r = [], s = 0, o = t.length, a = !i; s < o; s++) n = !e(t[s], s), n !== a && r.push(t[s]);
            return r
        }, map: function (t, e, n) {
            var r, s = 0, o = t.length, a = i(t), l = [];
            if (a) for (; s < o; s++) r = e(t[s], s, n), null != r && l.push(r); else for (s in t) r = e(t[s], s, n), null != r && l.push(r);
            return X.apply([], l)
        }, guid: 1, proxy: function (t, e) {
            var i, n, r;
            if ("string" == typeof e && (i = t[e], e = t, t = i), K.isFunction(t)) return n = q.call(arguments, 2), r = function () {
                return t.apply(e || this, n.concat(q.call(arguments)))
            }, r.guid = t.guid = t.guid || K.guid++, r
        }, now: Date.now, support: Q
    }), K.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
        W["[object " + e + "]"] = e.toLowerCase()
    });
    var rt = /*!
 * Sizzle CSS Selector Engine v2.2.0-pre
 * http://sizzlejs.com/
 *
 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-16
 */
        function (t) {
            function e(t, e, i, n) {
                var r, s, o, a, l, h, u, d, f, m;
                if ((e ? e.ownerDocument || e : j) !== P && $(e), e = e || P, i = i || [], a = e.nodeType, "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a) return i;
                if (!n && N) {
                    if (11 !== a && (r = yt.exec(t))) if (o = r[1]) {
                        if (9 === a) {
                            if (s = e.getElementById(o), !s || !s.parentNode) return i;
                            if (s.id === o) return i.push(s), i
                        } else if (e.ownerDocument && (s = e.ownerDocument.getElementById(o)) && L(e, s) && s.id === o) return i.push(s), i
                    } else {
                        if (r[2]) return J.apply(i, e.getElementsByTagName(t)), i;
                        if ((o = r[3]) && _.getElementsByClassName) return J.apply(i, e.getElementsByClassName(o)), i
                    }
                    if (_.qsa && (!M || !M.test(t))) {
                        if (d = u = B, f = e, m = 1 !== a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                            for (h = S(t), (u = e.getAttribute("id")) ? d = u.replace(xt, "\\$&") : e.setAttribute("id", d), d = "[id='" + d + "'] ", l = h.length; l--;) h[l] = d + p(h[l]);
                            f = bt.test(t) && c(e.parentNode) || e, m = h.join(",")
                        }
                        if (m) try {
                            return J.apply(i, f.querySelectorAll(m)), i
                        } catch (g) {
                        } finally {
                            u || e.removeAttribute("id")
                        }
                    }
                }
                return E(t.replace(lt, "$1"), e, i, n)
            }

            function i() {
                function t(i, n) {
                    return e.push(i + " ") > w.cacheLength && delete t[e.shift()], t[i + " "] = n
                }

                var e = [];
                return t
            }

            function n(t) {
                return t[B] = !0, t
            }

            function r(t) {
                var e = P.createElement("div");
                try {
                    return !!t(e)
                } catch (i) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function s(t, e) {
                for (var i = t.split("|"), n = t.length; n--;) w.attrHandle[i[n]] = e
            }

            function o(t, e) {
                var i = e && t,
                    n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || W) - (~t.sourceIndex || W);
                if (n) return n;
                if (i) for (; i = i.nextSibling;) if (i === e) return -1;
                return t ? 1 : -1
            }

            function a(t) {
                return function (e) {
                    var i = e.nodeName.toLowerCase();
                    return "input" === i && e.type === t
                }
            }

            function l(t) {
                return function (e) {
                    var i = e.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && e.type === t
                }
            }

            function h(t) {
                return n(function (e) {
                    return e = +e, n(function (i, n) {
                        for (var r, s = t([], i.length, e), o = s.length; o--;) i[r = s[o]] && (i[r] = !(n[r] = i[r]))
                    })
                })
            }

            function c(t) {
                return t && "undefined" != typeof t.getElementsByTagName && t
            }

            function u() {
            }

            function p(t) {
                for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
                return n
            }

            function d(t, e, i) {
                var n = e.dir, r = i && "parentNode" === n, s = H++;
                return e.first ? function (e, i, s) {
                    for (; e = e[n];) if (1 === e.nodeType || r) return t(e, i, s)
                } : function (e, i, o) {
                    var a, l, h = [z, s];
                    if (o) {
                        for (; e = e[n];) if ((1 === e.nodeType || r) && t(e, i, o)) return !0
                    } else for (; e = e[n];) if (1 === e.nodeType || r) {
                        if (l = e[B] || (e[B] = {}), (a = l[n]) && a[0] === z && a[1] === s) return h[2] = a[2];
                        if (l[n] = h, h[2] = t(e, i, o)) return !0
                    }
                }
            }

            function f(t) {
                return t.length > 1 ? function (e, i, n) {
                    for (var r = t.length; r--;) if (!t[r](e, i, n)) return !1;
                    return !0
                } : t[0]
            }

            function m(t, i, n) {
                for (var r = 0, s = i.length; r < s; r++) e(t, i[r], n);
                return n
            }

            function g(t, e, i, n, r) {
                for (var s, o = [], a = 0, l = t.length, h = null != e; a < l; a++) (s = t[a]) && (i && !i(s, n, r) || (o.push(s), h && e.push(a)));
                return o
            }

            function v(t, e, i, r, s, o) {
                return r && !r[B] && (r = v(r)), s && !s[B] && (s = v(s, o)), n(function (n, o, a, l) {
                    var h, c, u, p = [], d = [], f = o.length, v = n || m(e || "*", a.nodeType ? [a] : a, []),
                        y = !t || !n && e ? v : g(v, p, t, a, l), b = i ? s || (n ? t : f || r) ? [] : o : y;
                    if (i && i(y, b, a, l), r) for (h = g(b, d), r(h, [], a, l), c = h.length; c--;) (u = h[c]) && (b[d[c]] = !(y[d[c]] = u));
                    if (n) {
                        if (s || t) {
                            if (s) {
                                for (h = [], c = b.length; c--;) (u = b[c]) && h.push(y[c] = u);
                                s(null, b = [], h, l)
                            }
                            for (c = b.length; c--;) (u = b[c]) && (h = s ? tt(n, u) : p[c]) > -1 && (n[h] = !(o[h] = u))
                        }
                    } else b = g(b === o ? b.splice(f, b.length) : b), s ? s(null, o, b, l) : J.apply(o, b)
                })
            }

            function y(t) {
                for (var e, i, n, r = t.length, s = w.relative[t[0].type], o = s || w.relative[" "], a = s ? 1 : 0, l = d(function (t) {
                    return t === e
                }, o, !0), h = d(function (t) {
                    return tt(e, t) > -1
                }, o, !0), c = [function (t, i, n) {
                    var r = !s && (n || i !== A) || ((e = i).nodeType ? l(t, i, n) : h(t, i, n));
                    return e = null, r
                }]; a < r; a++) if (i = w.relative[t[a].type]) c = [d(f(c), i)]; else {
                    if (i = w.filter[t[a].type].apply(null, t[a].matches), i[B]) {
                        for (n = ++a; n < r && !w.relative[t[n].type]; n++) ;
                        return v(a > 1 && f(c), a > 1 && p(t.slice(0, a - 1).concat({value: " " === t[a - 2].type ? "*" : ""})).replace(lt, "$1"), i, a < n && y(t.slice(a, n)), n < r && y(t = t.slice(n)), n < r && p(t))
                    }
                    c.push(i)
                }
                return f(c)
            }

            function b(t, i) {
                var r = i.length > 0, s = t.length > 0, o = function (n, o, a, l, h) {
                    var c, u, p, d = 0, f = "0", m = n && [], v = [], y = A, b = n || s && w.find.TAG("*", h),
                        x = z += null == y ? 1 : Math.random() || .1, _ = b.length;
                    for (h && (A = o !== P && o); f !== _ && null != (c = b[f]); f++) {
                        if (s && c) {
                            for (u = 0; p = t[u++];) if (p(c, o, a)) {
                                l.push(c);
                                break
                            }
                            h && (z = x)
                        }
                        r && ((c = !p && c) && d--, n && m.push(c))
                    }
                    if (d += f, r && f !== d) {
                        for (u = 0; p = i[u++];) p(m, v, o, a);
                        if (n) {
                            if (d > 0) for (; f--;) m[f] || v[f] || (v[f] = Q.call(l));
                            v = g(v)
                        }
                        J.apply(l, v), h && !n && v.length > 0 && d + i.length > 1 && e.uniqueSort(l)
                    }
                    return h && (z = x, A = y), m
                };
                return r ? n(o) : o
            }

            var x, _, w, T, C, S, k, E, A, D, F, $, P, O, N, M, R, I, L, B = "sizzle" + 1 * new Date, j = t.document,
                z = 0, H = 0, q = i(), X = i(), Y = i(), U = function (t, e) {
                    return t === e && (F = !0), 0
                }, W = 1 << 31, V = {}.hasOwnProperty, G = [], Q = G.pop, Z = G.push, J = G.push, K = G.slice,
                tt = function (t, e) {
                    for (var i = 0, n = t.length; i < n; i++) if (t[i] === e) return i;
                    return -1
                },
                et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                it = "[\\x20\\t\\r\\n\\f]", nt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", rt = nt.replace("w", "w#"),
                st = "\\[" + it + "*(" + nt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + rt + "))|)" + it + "*\\]",
                ot = ":(" + nt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + st + ")*)|.*)\\)|)",
                at = new RegExp(it + "+", "g"),
                lt = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
                ht = new RegExp("^" + it + "*," + it + "*"),
                ct = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
                ut = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"), pt = new RegExp(ot),
                dt = new RegExp("^" + rt + "$"), ft = {
                    ID: new RegExp("^#(" + nt + ")"),
                    CLASS: new RegExp("^\\.(" + nt + ")"),
                    TAG: new RegExp("^(" + nt.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + st),
                    PSEUDO: new RegExp("^" + ot),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + et + ")$", "i"),
                    needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
                }, mt = /^(?:input|select|textarea|button)$/i, gt = /^h\d$/i, vt = /^[^{]+\{\s*\[native \w/,
                yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, bt = /[+~]/, xt = /'|\\/g,
                _t = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"), wt = function (t, e, i) {
                    var n = "0x" + e - 65536;
                    return n !== n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                }, Tt = function () {
                    $()
                };
            try {
                J.apply(G = K.call(j.childNodes), j.childNodes), G[j.childNodes.length].nodeType
            } catch (Ct) {
                J = {
                    apply: G.length ? function (t, e) {
                        Z.apply(t, K.call(e))
                    } : function (t, e) {
                        for (var i = t.length, n = 0; t[i++] = e[n++];) ;
                        t.length = i - 1
                    }
                }
            }
            _ = e.support = {}, C = e.isXML = function (t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, $ = e.setDocument = function (t) {
                var e, i, n = t ? t.ownerDocument || t : j;
                return n !== P && 9 === n.nodeType && n.documentElement ? (P = n, O = n.documentElement, i = n.defaultView, i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", Tt, !1) : i.attachEvent && i.attachEvent("onunload", Tt)), N = !C(n), _.attributes = r(function (t) {
                    return t.className = "i", !t.getAttribute("className")
                }), _.getElementsByTagName = r(function (t) {
                    return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
                }), _.getElementsByClassName = vt.test(n.getElementsByClassName), _.getById = r(function (t) {
                    return O.appendChild(t).id = B, !n.getElementsByName || !n.getElementsByName(B).length
                }), _.getById ? (w.find.ID = function (t, e) {
                    if ("undefined" != typeof e.getElementById && N) {
                        var i = e.getElementById(t);
                        return i && i.parentNode ? [i] : []
                    }
                }, w.filter.ID = function (t) {
                    var e = t.replace(_t, wt);
                    return function (t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete w.find.ID, w.filter.ID = function (t) {
                    var e = t.replace(_t, wt);
                    return function (t) {
                        var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                        return i && i.value === e
                    }
                }), w.find.TAG = _.getElementsByTagName ? function (t, e) {
                    return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : _.qsa ? e.querySelectorAll(t) : void 0
                } : function (t, e) {
                    var i, n = [], r = 0, s = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; i = s[r++];) 1 === i.nodeType && n.push(i);
                        return n
                    }
                    return s
                }, w.find.CLASS = _.getElementsByClassName && function (t, e) {
                    if (N) return e.getElementsByClassName(t)
                }, R = [], M = [], (_.qsa = vt.test(n.querySelectorAll)) && (r(function (t) {
                    O.appendChild(t).innerHTML = "<a id='" + B + "'></a><select id='" + B + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && M.push("[*^$]=" + it + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || M.push("\\[" + it + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + B + "-]").length || M.push("~="), t.querySelectorAll(":checked").length || M.push(":checked"), t.querySelectorAll("a#" + B + "+*").length || M.push(".#.+[+~]")
                }), r(function (t) {
                    var e = n.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && M.push("name" + it + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), M.push(",.*:")
                })), (_.matchesSelector = vt.test(I = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && r(function (t) {
                    _.disconnectedMatch = I.call(t, "div"), I.call(t, "[s!='']:x"), R.push("!=", ot)
                }), M = M.length && new RegExp(M.join("|")), R = R.length && new RegExp(R.join("|")), e = vt.test(O.compareDocumentPosition), L = e || vt.test(O.contains) ? function (t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t, n = e && e.parentNode;
                    return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                } : function (t, e) {
                    if (e) for (; e = e.parentNode;) if (e === t) return !0;
                    return !1
                }, U = e ? function (t, e) {
                    if (t === e) return F = !0, 0;
                    var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !_.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === j && L(j, t) ? -1 : e === n || e.ownerDocument === j && L(j, e) ? 1 : D ? tt(D, t) - tt(D, e) : 0 : 4 & i ? -1 : 1)
                } : function (t, e) {
                    if (t === e) return F = !0, 0;
                    var i, r = 0, s = t.parentNode, a = e.parentNode, l = [t], h = [e];
                    if (!s || !a) return t === n ? -1 : e === n ? 1 : s ? -1 : a ? 1 : D ? tt(D, t) - tt(D, e) : 0;
                    if (s === a) return o(t, e);
                    for (i = t; i = i.parentNode;) l.unshift(i);
                    for (i = e; i = i.parentNode;) h.unshift(i);
                    for (; l[r] === h[r];) r++;
                    return r ? o(l[r], h[r]) : l[r] === j ? -1 : h[r] === j ? 1 : 0
                }, n) : P
            }, e.matches = function (t, i) {
                return e(t, null, null, i)
            }, e.matchesSelector = function (t, i) {
                if ((t.ownerDocument || t) !== P && $(t), i = i.replace(ut, "='$1']"), _.matchesSelector && N && (!R || !R.test(i)) && (!M || !M.test(i))) try {
                    var n = I.call(t, i);
                    if (n || _.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                } catch (r) {
                }
                return e(i, P, null, [t]).length > 0
            }, e.contains = function (t, e) {
                return (t.ownerDocument || t) !== P && $(t), L(t, e)
            }, e.attr = function (t, e) {
                (t.ownerDocument || t) !== P && $(t);
                var i = w.attrHandle[e.toLowerCase()],
                    n = i && V.call(w.attrHandle, e.toLowerCase()) ? i(t, e, !N) : void 0;
                return void 0 !== n ? n : _.attributes || !N ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }, e.error = function (t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function (t) {
                var e, i = [], n = 0, r = 0;
                if (F = !_.detectDuplicates, D = !_.sortStable && t.slice(0), t.sort(U), F) {
                    for (; e = t[r++];) e === t[r] && (n = i.push(r));
                    for (; n--;) t.splice(i[n], 1)
                }
                return D = null, t
            }, T = e.getText = function (t) {
                var e, i = "", n = 0, r = t.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) i += T(t)
                    } else if (3 === r || 4 === r) return t.nodeValue
                } else for (; e = t[n++];) i += T(e);
                return i
            }, w = e.selectors = {
                cacheLength: 50,
                createPseudo: n,
                match: ft,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {dir: "parentNode", first: !0},
                    " ": {dir: "parentNode"},
                    "+": {dir: "previousSibling", first: !0},
                    "~": {dir: "previousSibling"}
                },
                preFilter: {
                    ATTR: function (t) {
                        return t[1] = t[1].replace(_t, wt), t[3] = (t[3] || t[4] || t[5] || "").replace(_t, wt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    }, CHILD: function (t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    }, PSEUDO: function (t) {
                        var e, i = !t[6] && t[2];
                        return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && pt.test(i) && (e = S(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (t) {
                        var e = t.replace(_t, wt).toLowerCase();
                        return "*" === t ? function () {
                            return !0
                        } : function (t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    }, CLASS: function (t) {
                        var e = q[t + " "];
                        return e || (e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) && q(t, function (t) {
                            return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                        })
                    }, ATTR: function (t, i, n) {
                        return function (r) {
                            var s = e.attr(r, t);
                            return null == s ? "!=" === i : !i || (s += "", "=" === i ? s === n : "!=" === i ? s !== n : "^=" === i ? n && 0 === s.indexOf(n) : "*=" === i ? n && s.indexOf(n) > -1 : "$=" === i ? n && s.slice(-n.length) === n : "~=" === i ? (" " + s.replace(at, " ") + " ").indexOf(n) > -1 : "|=" === i && (s === n || s.slice(0, n.length + 1) === n + "-"))
                        }
                    }, CHILD: function (t, e, i, n, r) {
                        var s = "nth" !== t.slice(0, 3), o = "last" !== t.slice(-4), a = "of-type" === e;
                        return 1 === n && 0 === r ? function (t) {
                            return !!t.parentNode
                        } : function (e, i, l) {
                            var h, c, u, p, d, f, m = s !== o ? "nextSibling" : "previousSibling", g = e.parentNode,
                                v = a && e.nodeName.toLowerCase(), y = !l && !a;
                            if (g) {
                                if (s) {
                                    for (; m;) {
                                        for (u = e; u = u[m];) if (a ? u.nodeName.toLowerCase() === v : 1 === u.nodeType) return !1;
                                        f = m = "only" === t && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [o ? g.firstChild : g.lastChild], o && y) {
                                    for (c = g[B] || (g[B] = {}), h = c[t] || [], d = h[0] === z && h[1], p = h[0] === z && h[2], u = d && g.childNodes[d]; u = ++d && u && u[m] || (p = d = 0) || f.pop();) if (1 === u.nodeType && ++p && u === e) {
                                        c[t] = [z, d, p];
                                        break
                                    }
                                } else if (y && (h = (e[B] || (e[B] = {}))[t]) && h[0] === z) p = h[1]; else for (; (u = ++d && u && u[m] || (p = d = 0) || f.pop()) && ((a ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++p || (y && ((u[B] || (u[B] = {}))[t] = [z, p]), u !== e));) ;
                                return p -= r, p === n || p % n === 0 && p / n >= 0
                            }
                        }
                    }, PSEUDO: function (t, i) {
                        var r, s = w.pseudos[t] || w.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return s[B] ? s(i) : s.length > 1 ? (r = [t, t, "", i], w.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function (t, e) {
                            for (var n, r = s(t, i), o = r.length; o--;) n = tt(t, r[o]), t[n] = !(e[n] = r[o])
                        }) : function (t) {
                            return s(t, 0, r)
                        }) : s
                    }
                },
                pseudos: {
                    not: n(function (t) {
                        var e = [], i = [], r = k(t.replace(lt, "$1"));
                        return r[B] ? n(function (t, e, i, n) {
                            for (var s, o = r(t, null, n, []), a = t.length; a--;) (s = o[a]) && (t[a] = !(e[a] = s))
                        }) : function (t, n, s) {
                            return e[0] = t, r(e, null, s, i), e[0] = null, !i.pop()
                        }
                    }), has: n(function (t) {
                        return function (i) {
                            return e(t, i).length > 0
                        }
                    }), contains: n(function (t) {
                        return t = t.replace(_t, wt), function (e) {
                            return (e.textContent || e.innerText || T(e)).indexOf(t) > -1
                        }
                    }), lang: n(function (t) {
                        return dt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(_t, wt).toLowerCase(), function (e) {
                            var i;
                            do if (i = N ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                    }), target: function (e) {
                        var i = t.location && t.location.hash;
                        return i && i.slice(1) === e.id
                    }, root: function (t) {
                        return t === O
                    }, focus: function (t) {
                        return t === P.activeElement && (!P.hasFocus || P.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    }, enabled: function (t) {
                        return t.disabled === !1
                    }, disabled: function (t) {
                        return t.disabled === !0
                    }, checked: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    }, selected: function (t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    }, empty: function (t) {
                        for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                        return !0
                    }, parent: function (t) {
                        return !w.pseudos.empty(t)
                    }, header: function (t) {
                        return gt.test(t.nodeName)
                    }, input: function (t) {
                        return mt.test(t.nodeName)
                    }, button: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    }, text: function (t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    }, first: h(function () {
                        return [0]
                    }), last: h(function (t, e) {
                        return [e - 1]
                    }), eq: h(function (t, e, i) {
                        return [i < 0 ? i + e : i]
                    }), even: h(function (t, e) {
                        for (var i = 0; i < e; i += 2) t.push(i);
                        return t
                    }), odd: h(function (t, e) {
                        for (var i = 1; i < e; i += 2) t.push(i);
                        return t
                    }), lt: h(function (t, e, i) {
                        for (var n = i < 0 ? i + e : i; --n >= 0;) t.push(n);
                        return t
                    }), gt: h(function (t, e, i) {
                        for (var n = i < 0 ? i + e : i; ++n < e;) t.push(n);
                        return t
                    })
                }
            }, w.pseudos.nth = w.pseudos.eq;
            for (x in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) w.pseudos[x] = a(x);
            for (x in{submit: !0, reset: !0}) w.pseudos[x] = l(x);
            return u.prototype = w.filters = w.pseudos, w.setFilters = new u, S = e.tokenize = function (t, i) {
                var n, r, s, o, a, l, h, c = X[t + " "];
                if (c) return i ? 0 : c.slice(0);
                for (a = t, l = [], h = w.preFilter; a;) {
                    n && !(r = ht.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(s = [])), n = !1, (r = ct.exec(a)) && (n = r.shift(), s.push({
                        value: n,
                        type: r[0].replace(lt, " ")
                    }), a = a.slice(n.length));
                    for (o in w.filter) !(r = ft[o].exec(a)) || h[o] && !(r = h[o](r)) || (n = r.shift(), s.push({
                        value: n,
                        type: o,
                        matches: r
                    }), a = a.slice(n.length));
                    if (!n) break
                }
                return i ? a.length : a ? e.error(t) : X(t, l).slice(0)
            }, k = e.compile = function (t, e) {
                var i, n = [], r = [], s = Y[t + " "];
                if (!s) {
                    for (e || (e = S(t)), i = e.length; i--;) s = y(e[i]), s[B] ? n.push(s) : r.push(s);
                    s = Y(t, b(r, n)), s.selector = t
                }
                return s
            }, E = e.select = function (t, e, i, n) {
                var r, s, o, a, l, h = "function" == typeof t && t, u = !n && S(t = h.selector || t);
                if (i = i || [], 1 === u.length) {
                    if (s = u[0] = u[0].slice(0), s.length > 2 && "ID" === (o = s[0]).type && _.getById && 9 === e.nodeType && N && w.relative[s[1].type]) {
                        if (e = (w.find.ID(o.matches[0].replace(_t, wt), e) || [])[0], !e) return i;
                        h && (e = e.parentNode), t = t.slice(s.shift().value.length)
                    }
                    for (r = ft.needsContext.test(t) ? 0 : s.length; r-- && (o = s[r], !w.relative[a = o.type]);) if ((l = w.find[a]) && (n = l(o.matches[0].replace(_t, wt), bt.test(s[0].type) && c(e.parentNode) || e))) {
                        if (s.splice(r, 1), t = n.length && p(s), !t) return J.apply(i, n), i;
                        break
                    }
                }
                return (h || k(t, u))(n, e, !N, i, bt.test(t) && c(e.parentNode) || e), i
            }, _.sortStable = B.split("").sort(U).join("") === B, _.detectDuplicates = !!F, $(), _.sortDetached = r(function (t) {
                return 1 & t.compareDocumentPosition(P.createElement("div"))
            }), r(function (t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || s("type|href|height|width", function (t, e, i) {
                if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), _.attributes && r(function (t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || s("value", function (t, e, i) {
                if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue
            }), r(function (t) {
                return null == t.getAttribute("disabled")
            }) || s(et, function (t, e, i) {
                var n;
                if (!i) return t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }), e
        }(t);
    K.find = rt, K.expr = rt.selectors, K.expr[":"] = K.expr.pseudos, K.unique = rt.uniqueSort, K.text = rt.getText, K.isXMLDoc = rt.isXML, K.contains = rt.contains;
    var st = K.expr.match.needsContext, ot = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, at = /^.[^:#\[\.,]*$/;
    K.filter = function (t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? K.find.matchesSelector(n, t) ? [n] : [] : K.find.matches(t, K.grep(e, function (t) {
            return 1 === t.nodeType
        }))
    }, K.fn.extend({
        find: function (t) {
            var e, i = this.length, n = [], r = this;
            if ("string" != typeof t) return this.pushStack(K(t).filter(function () {
                for (e = 0; e < i; e++) if (K.contains(r[e], this)) return !0
            }));
            for (e = 0; e < i; e++) K.find(t, r[e], n);
            return n = this.pushStack(i > 1 ? K.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
        }, filter: function (t) {
            return this.pushStack(n(this, t || [], !1))
        }, not: function (t) {
            return this.pushStack(n(this, t || [], !0))
        }, is: function (t) {
            return !!n(this, "string" == typeof t && st.test(t) ? K(t) : t || [], !1).length
        }
    });
    var lt, ht = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ct = K.fn.init = function (t, e) {
        var i, n;
        if (!t) return this;
        if ("string" == typeof t) {
            if (i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : ht.exec(t), !i || !i[1] && e) return !e || e.jquery ? (e || lt).find(t) : this.constructor(e).find(t);
            if (i[1]) {
                if (e = e instanceof K ? e[0] : e, K.merge(this, K.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : Z, !0)), ot.test(i[1]) && K.isPlainObject(e)) for (i in e) K.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                return this
            }
            return n = Z.getElementById(i[2]), n && n.parentNode && (this.length = 1, this[0] = n), this.context = Z, this.selector = t, this
        }
        return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : K.isFunction(t) ? "undefined" != typeof lt.ready ? lt.ready(t) : t(K) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), K.makeArray(t, this))
    };
    ct.prototype = K.fn, lt = K(Z);
    var ut = /^(?:parents|prev(?:Until|All))/, pt = {children: !0, contents: !0, next: !0, prev: !0};
    K.extend({
        dir: function (t, e, i) {
            for (var n = [], r = void 0 !== i; (t = t[e]) && 9 !== t.nodeType;) if (1 === t.nodeType) {
                if (r && K(t).is(i)) break;
                n.push(t)
            }
            return n
        }, sibling: function (t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i
        }
    }), K.fn.extend({
        has: function (t) {
            var e = K(t, this), i = e.length;
            return this.filter(function () {
                for (var t = 0; t < i; t++) if (K.contains(this, e[t])) return !0
            })
        }, closest: function (t, e) {
            for (var i, n = 0, r = this.length, s = [], o = st.test(t) || "string" != typeof t ? K(t, e || this.context) : 0; n < r; n++) for (i = this[n]; i && i !== e; i = i.parentNode) if (i.nodeType < 11 && (o ? o.index(i) > -1 : 1 === i.nodeType && K.find.matchesSelector(i, t))) {
                s.push(i);
                break
            }
            return this.pushStack(s.length > 1 ? K.unique(s) : s)
        }, index: function (t) {
            return t ? "string" == typeof t ? U.call(K(t), this[0]) : U.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (t, e) {
            return this.pushStack(K.unique(K.merge(this.get(), K(t, e))))
        }, addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), K.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        }, parents: function (t) {
            return K.dir(t, "parentNode")
        }, parentsUntil: function (t, e, i) {
            return K.dir(t, "parentNode", i)
        }, next: function (t) {
            return r(t, "nextSibling")
        }, prev: function (t) {
            return r(t, "previousSibling")
        }, nextAll: function (t) {
            return K.dir(t, "nextSibling")
        }, prevAll: function (t) {
            return K.dir(t, "previousSibling")
        }, nextUntil: function (t, e, i) {
            return K.dir(t, "nextSibling", i)
        }, prevUntil: function (t, e, i) {
            return K.dir(t, "previousSibling", i)
        }, siblings: function (t) {
            return K.sibling((t.parentNode || {}).firstChild, t)
        }, children: function (t) {
            return K.sibling(t.firstChild)
        }, contents: function (t) {
            return t.contentDocument || K.merge([], t.childNodes)
        }
    }, function (t, e) {
        K.fn[t] = function (i, n) {
            var r = K.map(this, e, i);
            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (r = K.filter(n, r)), this.length > 1 && (pt[t] || K.unique(r), ut.test(t) && r.reverse()), this.pushStack(r)
        }
    });
    var dt = /\S+/g, ft = {};
    K.Callbacks = function (t) {
        t = "string" == typeof t ? ft[t] || s(t) : K.extend({}, t);
        var e, i, n, r, o, a, l = [], h = !t.once && [], c = function (s) {
            for (e = t.memory && s, i = !0, a = r || 0, r = 0, o = l.length, n = !0; l && a < o; a++) if (l[a].apply(s[0], s[1]) === !1 && t.stopOnFalse) {
                e = !1;
                break
            }
            n = !1, l && (h ? h.length && c(h.shift()) : e ? l = [] : u.disable())
        }, u = {
            add: function () {
                if (l) {
                    var i = l.length;
                    !function s(e) {
                        K.each(e, function (e, i) {
                            var n = K.type(i);
                            "function" === n ? t.unique && u.has(i) || l.push(i) : i && i.length && "string" !== n && s(i)
                        })
                    }(arguments), n ? o = l.length : e && (r = i, c(e))
                }
                return this
            }, remove: function () {
                return l && K.each(arguments, function (t, e) {
                    for (var i; (i = K.inArray(e, l, i)) > -1;) l.splice(i, 1), n && (i <= o && o--, i <= a && a--)
                }), this
            }, has: function (t) {
                return t ? K.inArray(t, l) > -1 : !(!l || !l.length)
            }, empty: function () {
                return l = [], o = 0, this
            }, disable: function () {
                return l = h = e = void 0, this
            }, disabled: function () {
                return !l
            }, lock: function () {
                return h = void 0, e || u.disable(), this
            }, locked: function () {
                return !h
            }, fireWith: function (t, e) {
                return !l || i && !h || (e = e || [], e = [t, e.slice ? e.slice() : e], n ? h.push(e) : c(e)), this
            }, fire: function () {
                return u.fireWith(this, arguments), this
            }, fired: function () {
                return !!i
            }
        };
        return u
    }, K.extend({
        Deferred: function (t) {
            var e = [["resolve", "done", K.Callbacks("once memory"), "resolved"], ["reject", "fail", K.Callbacks("once memory"), "rejected"], ["notify", "progress", K.Callbacks("memory")]],
                i = "pending", n = {
                    state: function () {
                        return i
                    }, always: function () {
                        return r.done(arguments).fail(arguments), this
                    }, then: function () {
                        var t = arguments;
                        return K.Deferred(function (i) {
                            K.each(e, function (e, s) {
                                var o = K.isFunction(t[e]) && t[e];
                                r[s[1]](function () {
                                    var t = o && o.apply(this, arguments);
                                    t && K.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[s[0] + "With"](this === n ? i.promise() : this, o ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    }, promise: function (t) {
                        return null != t ? K.extend(t, n) : n
                    }
                }, r = {};
            return n.pipe = n.then, K.each(e, function (t, s) {
                var o = s[2], a = s[3];
                n[s[1]] = o.add, a && o.add(function () {
                    i = a
                }, e[1 ^ t][2].disable, e[2][2].lock), r[s[0]] = function () {
                    return r[s[0] + "With"](this === r ? n : this, arguments), this
                }, r[s[0] + "With"] = o.fireWith
            }), n.promise(r), t && t.call(r, r), r
        }, when: function (t) {
            var e, i, n, r = 0, s = q.call(arguments), o = s.length,
                a = 1 !== o || t && K.isFunction(t.promise) ? o : 0, l = 1 === a ? t : K.Deferred(),
                h = function (t, i, n) {
                    return function (r) {
                        i[t] = this, n[t] = arguments.length > 1 ? q.call(arguments) : r, n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                    }
                };
            if (o > 1) for (e = new Array(o), i = new Array(o), n = new Array(o); r < o; r++) s[r] && K.isFunction(s[r].promise) ? s[r].promise().done(h(r, n, s)).fail(l.reject).progress(h(r, i, e)) : --a;
            return a || l.resolveWith(n, s), l.promise()
        }
    });
    var mt;
    K.fn.ready = function (t) {
        return K.ready.promise().done(t), this
    }, K.extend({
        isReady: !1, readyWait: 1, holdReady: function (t) {
            t ? K.readyWait++ : K.ready(!0)
        }, ready: function (t) {
            (t === !0 ? --K.readyWait : K.isReady) || (K.isReady = !0, t !== !0 && --K.readyWait > 0 || (mt.resolveWith(Z, [K]), K.fn.triggerHandler && (K(Z).triggerHandler("ready"), K(Z).off("ready"))))
        }
    }), K.ready.promise = function (e) {
        return mt || (mt = K.Deferred(), "complete" === Z.readyState ? setTimeout(K.ready) : (Z.addEventListener("DOMContentLoaded", o, !1), t.addEventListener("load", o, !1))), mt.promise(e)
    }, K.ready.promise();
    var gt = K.access = function (t, e, i, n, r, s, o) {
        var a = 0, l = t.length, h = null == i;
        if ("object" === K.type(i)) {
            r = !0;
            for (a in i) K.access(t, e, a, i[a], !0, s, o)
        } else if (void 0 !== n && (r = !0, K.isFunction(n) || (o = !0), h && (o ? (e.call(t, n), e = null) : (h = e, e = function (t, e, i) {
                return h.call(K(t), i)
            })), e)) for (; a < l; a++) e(t[a], i, o ? n : n.call(t[a], a, e(t[a], i)));
        return r ? t : h ? e.call(t) : l ? e(t[0], i) : s
    };
    K.acceptData = function (t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    }, a.uid = 1, a.accepts = K.acceptData, a.prototype = {
        key: function (t) {
            if (!a.accepts(t)) return 0;
            var e = {}, i = t[this.expando];
            if (!i) {
                i = a.uid++;
                try {
                    e[this.expando] = {value: i}, Object.defineProperties(t, e)
                } catch (n) {
                    e[this.expando] = i, K.extend(t, e)
                }
            }
            return this.cache[i] || (this.cache[i] = {}), i
        }, set: function (t, e, i) {
            var n, r = this.key(t), s = this.cache[r];
            if ("string" == typeof e) s[e] = i; else if (K.isEmptyObject(s)) K.extend(this.cache[r], e); else for (n in e) s[n] = e[n];
            return s
        }, get: function (t, e) {
            var i = this.cache[this.key(t)];
            return void 0 === e ? i : i[e]
        }, access: function (t, e, i) {
            var n;
            return void 0 === e || e && "string" == typeof e && void 0 === i ? (n = this.get(t, e), void 0 !== n ? n : this.get(t, K.camelCase(e))) : (this.set(t, e, i), void 0 !== i ? i : e)
        }, remove: function (t, e) {
            var i, n, r, s = this.key(t), o = this.cache[s];
            if (void 0 === e) this.cache[s] = {}; else {
                K.isArray(e) ? n = e.concat(e.map(K.camelCase)) : (r = K.camelCase(e), e in o ? n = [e, r] : (n = r, n = n in o ? [n] : n.match(dt) || [])), i = n.length;
                for (; i--;) delete o[n[i]]
            }
        }, hasData: function (t) {
            return !K.isEmptyObject(this.cache[t[this.expando]] || {})
        }, discard: function (t) {
            t[this.expando] && delete this.cache[t[this.expando]]
        }
    };
    var vt = new a, yt = new a, bt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, xt = /([A-Z])/g;
    K.extend({
        hasData: function (t) {
            return yt.hasData(t) || vt.hasData(t)
        }, data: function (t, e, i) {
            return yt.access(t, e, i)
        }, removeData: function (t, e) {
            yt.remove(t, e)
        }, _data: function (t, e, i) {
            return vt.access(t, e, i)
        }, _removeData: function (t, e) {
            vt.remove(t, e)
        }
    }), K.fn.extend({
        data: function (t, e) {
            var i, n, r, s = this[0], o = s && s.attributes;
            if (void 0 === t) {
                if (this.length && (r = yt.get(s), 1 === s.nodeType && !vt.get(s, "hasDataAttrs"))) {
                    for (i = o.length; i--;) o[i] && (n = o[i].name, 0 === n.indexOf("data-") && (n = K.camelCase(n.slice(5)), l(s, n, r[n])));
                    vt.set(s, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof t ? this.each(function () {
                yt.set(this, t)
            }) : gt(this, function (e) {
                var i, n = K.camelCase(t);
                if (s && void 0 === e) {
                    if (i = yt.get(s, t), void 0 !== i) return i;
                    if (i = yt.get(s, n), void 0 !== i) return i;
                    if (i = l(s, n, void 0), void 0 !== i) return i
                } else this.each(function () {
                    var i = yt.get(this, n);
                    yt.set(this, n, e), t.indexOf("-") !== -1 && void 0 !== i && yt.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        }, removeData: function (t) {
            return this.each(function () {
                yt.remove(this, t)
            })
        }
    }), K.extend({
        queue: function (t, e, i) {
            var n;
            if (t) return e = (e || "fx") + "queue", n = vt.get(t, e), i && (!n || K.isArray(i) ? n = vt.access(t, e, K.makeArray(i)) : n.push(i)), n || []
        }, dequeue: function (t, e) {
            e = e || "fx";
            var i = K.queue(t, e), n = i.length, r = i.shift(), s = K._queueHooks(t, e), o = function () {
                K.dequeue(t, e)
            };
            "inprogress" === r && (r = i.shift(), n--), r && ("fx" === e && i.unshift("inprogress"), delete s.stop, r.call(t, o, s)), !n && s && s.empty.fire()
        }, _queueHooks: function (t, e) {
            var i = e + "queueHooks";
            return vt.get(t, i) || vt.access(t, i, {
                empty: K.Callbacks("once memory").add(function () {
                    vt.remove(t, [e + "queue", i])
                })
            })
        }
    }), K.fn.extend({
        queue: function (t, e) {
            var i = 2;
            return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? K.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                var i = K.queue(this, t, e);
                K._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && K.dequeue(this, t)
            })
        }, dequeue: function (t) {
            return this.each(function () {
                K.dequeue(this, t)
            })
        }, clearQueue: function (t) {
            return this.queue(t || "fx", [])
        }, promise: function (t, e) {
            var i, n = 1, r = K.Deferred(), s = this, o = this.length, a = function () {
                --n || r.resolveWith(s, [s])
            };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--;) i = vt.get(s[o], t + "queueHooks"), i && i.empty && (n++, i.empty.add(a));
            return a(), r.promise(e)
        }
    });
    var _t = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, wt = ["Top", "Right", "Bottom", "Left"],
        Tt = function (t, e) {
            return t = e || t, "none" === K.css(t, "display") || !K.contains(t.ownerDocument, t)
        }, Ct = /^(?:checkbox|radio)$/i;
    !function () {
        var t = Z.createDocumentFragment(), e = t.appendChild(Z.createElement("div")), i = Z.createElement("input");
        i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), e.appendChild(i), Q.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", Q.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var St = "undefined";
    Q.focusinBubbles = "onfocusin" in t;
    var kt = /^key/, Et = /^(?:mouse|pointer|contextmenu)|click/, At = /^(?:focusinfocus|focusoutblur)$/,
        Dt = /^([^.]*)(?:\.(.+)|)$/;
    K.event = {
        global: {},
        add: function (t, e, i, n, r) {
            var s, o, a, l, h, c, u, p, d, f, m, g = vt.get(t);
            if (g) for (i.handler && (s = i, i = s.handler, r = s.selector), i.guid || (i.guid = K.guid++), (l = g.events) || (l = g.events = {}), (o = g.handle) || (o = g.handle = function (e) {
                return typeof K !== St && K.event.triggered !== e.type ? K.event.dispatch.apply(t, arguments) : void 0
            }), e = (e || "").match(dt) || [""], h = e.length; h--;) a = Dt.exec(e[h]) || [], d = m = a[1], f = (a[2] || "").split(".").sort(), d && (u = K.event.special[d] || {}, d = (r ? u.delegateType : u.bindType) || d, u = K.event.special[d] || {}, c = K.extend({
                type: d,
                origType: m,
                data: n,
                handler: i,
                guid: i.guid,
                selector: r,
                needsContext: r && K.expr.match.needsContext.test(r),
                namespace: f.join(".")
            }, s), (p = l[d]) || (p = l[d] = [], p.delegateCount = 0, u.setup && u.setup.call(t, n, f, o) !== !1 || t.addEventListener && t.addEventListener(d, o, !1)), u.add && (u.add.call(t, c), c.handler.guid || (c.handler.guid = i.guid)), r ? p.splice(p.delegateCount++, 0, c) : p.push(c), K.event.global[d] = !0)
        },
        remove: function (t, e, i, n, r) {
            var s, o, a, l, h, c, u, p, d, f, m, g = vt.hasData(t) && vt.get(t);
            if (g && (l = g.events)) {
                for (e = (e || "").match(dt) || [""], h = e.length; h--;) if (a = Dt.exec(e[h]) || [], d = m = a[1], f = (a[2] || "").split(".").sort(), d) {
                    for (u = K.event.special[d] || {}, d = (n ? u.delegateType : u.bindType) || d, p = l[d] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = s = p.length; s--;) c = p[s], !r && m !== c.origType || i && i.guid !== c.guid || a && !a.test(c.namespace) || n && n !== c.selector && ("**" !== n || !c.selector) || (p.splice(s, 1), c.selector && p.delegateCount--, u.remove && u.remove.call(t, c));
                    o && !p.length && (u.teardown && u.teardown.call(t, f, g.handle) !== !1 || K.removeEvent(t, d, g.handle), delete l[d])
                } else for (d in l) K.event.remove(t, d + e[h], i, n, !0);
                K.isEmptyObject(l) && (delete g.handle, vt.remove(t, "events"))
            }
        },
        trigger: function (e, i, n, r) {
            var s, o, a, l, h, c, u, p = [n || Z], d = G.call(e, "type") ? e.type : e,
                f = G.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = a = n = n || Z, 3 !== n.nodeType && 8 !== n.nodeType && !At.test(d + K.event.triggered) && (d.indexOf(".") >= 0 && (f = d.split("."), d = f.shift(), f.sort()), h = d.indexOf(":") < 0 && "on" + d, e = e[K.expando] ? e : new K.Event(d, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : K.makeArray(i, [e]),
                    u = K.event.special[d] || {}, r || !u.trigger || u.trigger.apply(n, i) !== !1)) {
                if (!r && !u.noBubble && !K.isWindow(n)) {
                    for (l = u.delegateType || d, At.test(l + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                    a === (n.ownerDocument || Z) && p.push(a.defaultView || a.parentWindow || t)
                }
                for (s = 0; (o = p[s++]) && !e.isPropagationStopped();) e.type = s > 1 ? l : u.bindType || d, c = (vt.get(o, "events") || {})[e.type] && vt.get(o, "handle"), c && c.apply(o, i), c = h && o[h], c && c.apply && K.acceptData(o) && (e.result = c.apply(o, i), e.result === !1 && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || u._default && u._default.apply(p.pop(), i) !== !1 || !K.acceptData(n) || h && K.isFunction(n[d]) && !K.isWindow(n) && (a = n[h], a && (n[h] = null), K.event.triggered = d, n[d](), K.event.triggered = void 0, a && (n[h] = a)), e.result
            }
        },
        dispatch: function (t) {
            t = K.event.fix(t);
            var e, i, n, r, s, o = [], a = q.call(arguments), l = (vt.get(this, "events") || {})[t.type] || [],
                h = K.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !h.preDispatch || h.preDispatch.call(this, t) !== !1) {
                for (o = K.event.handlers.call(this, t, l), e = 0; (r = o[e++]) && !t.isPropagationStopped();) for (t.currentTarget = r.elem, i = 0; (s = r.handlers[i++]) && !t.isImmediatePropagationStopped();) t.namespace_re && !t.namespace_re.test(s.namespace) || (t.handleObj = s, t.data = s.data, n = ((K.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, a), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                return h.postDispatch && h.postDispatch.call(this, t), t.result
            }
        },
        handlers: function (t, e) {
            var i, n, r, s, o = [], a = e.delegateCount, l = t.target;
            if (a && l.nodeType && (!t.button || "click" !== t.type)) for (; l !== this; l = l.parentNode || this) if (l.disabled !== !0 || "click" !== t.type) {
                for (n = [], i = 0; i < a; i++) s = e[i], r = s.selector + " ", void 0 === n[r] && (n[r] = s.needsContext ? K(r, this).index(l) >= 0 : K.find(r, this, null, [l]).length), n[r] && n.push(s);
                n.length && o.push({elem: l, handlers: n})
            }
            return a < e.length && o.push({elem: this, handlers: e.slice(a)}), o
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (t, e) {
                var i, n, r, s = e.button;
                return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || Z, n = i.documentElement, r = i.body, t.pageX = e.clientX + (n && n.scrollLeft || r && r.scrollLeft || 0) - (n && n.clientLeft || r && r.clientLeft || 0), t.pageY = e.clientY + (n && n.scrollTop || r && r.scrollTop || 0) - (n && n.clientTop || r && r.clientTop || 0)), t.which || void 0 === s || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t
            }
        },
        fix: function (t) {
            if (t[K.expando]) return t;
            var e, i, n, r = t.type, s = t, o = this.fixHooks[r];
            for (o || (this.fixHooks[r] = o = Et.test(r) ? this.mouseHooks : kt.test(r) ? this.keyHooks : {}), n = o.props ? this.props.concat(o.props) : this.props, t = new K.Event(s), e = n.length; e--;) i = n[e], t[i] = s[i];
            return t.target || (t.target = Z), 3 === t.target.nodeType && (t.target = t.target.parentNode), o.filter ? o.filter(t, s) : t
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== u() && this.focus) return this.focus(), !1
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === u() && this.blur) return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && K.nodeName(this, "input")) return this.click(), !1
                }, _default: function (t) {
                    return K.nodeName(t.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function (t, e, i, n) {
            var r = K.extend(new K.Event, i, {type: t, isSimulated: !0, originalEvent: {}});
            n ? K.event.trigger(r, null, e) : K.event.dispatch.call(e, r), r.isDefaultPrevented() && i.preventDefault()
        }
    }, K.removeEvent = function (t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i, !1)
    }, K.Event = function (t, e) {
        return this instanceof K.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? h : c) : this.type = t, e && K.extend(this, e), this.timeStamp = t && t.timeStamp || K.now(), void(this[K.expando] = !0)) : new K.Event(t, e)
    }, K.Event.prototype = {
        isDefaultPrevented: c,
        isPropagationStopped: c,
        isImmediatePropagationStopped: c,
        preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = h, t && t.preventDefault && t.preventDefault()
        },
        stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = h, t && t.stopPropagation && t.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = h, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, K.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (t, e) {
        K.event.special[t] = {
            delegateType: e, bindType: e, handle: function (t) {
                var i, n = this, r = t.relatedTarget, s = t.handleObj;
                return r && (r === n || K.contains(n, r)) || (t.type = s.origType, i = s.handler.apply(this, arguments), t.type = e), i
            }
        }
    }), Q.focusinBubbles || K.each({focus: "focusin", blur: "focusout"}, function (t, e) {
        var i = function (t) {
            K.event.simulate(e, t.target, K.event.fix(t), !0)
        };
        K.event.special[e] = {
            setup: function () {
                var n = this.ownerDocument || this, r = vt.access(n, e);
                r || n.addEventListener(t, i, !0), vt.access(n, e, (r || 0) + 1)
            }, teardown: function () {
                var n = this.ownerDocument || this, r = vt.access(n, e) - 1;
                r ? vt.access(n, e, r) : (n.removeEventListener(t, i, !0), vt.remove(n, e))
            }
        }
    }), K.fn.extend({
        on: function (t, e, i, n, r) {
            var s, o;
            if ("object" == typeof t) {
                "string" != typeof e && (i = i || e, e = void 0);
                for (o in t) this.on(o, e, i, t[o], r);
                return this
            }
            if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), n === !1) n = c; else if (!n) return this;
            return 1 === r && (s = n, n = function (t) {
                return K().off(t), s.apply(this, arguments)
            }, n.guid = s.guid || (s.guid = K.guid++)), this.each(function () {
                K.event.add(this, t, n, i, e)
            })
        }, one: function (t, e, i, n) {
            return this.on(t, e, i, n, 1)
        }, off: function (t, e, i) {
            var n, r;
            if (t && t.preventDefault && t.handleObj) return n = t.handleObj, K(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof t) {
                for (r in t) this.off(r, e, t[r]);
                return this
            }
            return e !== !1 && "function" != typeof e || (i = e, e = void 0), i === !1 && (i = c), this.each(function () {
                K.event.remove(this, t, i, e)
            })
        }, trigger: function (t, e) {
            return this.each(function () {
                K.event.trigger(t, e, this)
            })
        }, triggerHandler: function (t, e) {
            var i = this[0];
            if (i) return K.event.trigger(t, e, i, !0)
        }
    });
    var Ft = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, $t = /<([\w:]+)/,
        Pt = /<|&#?\w+;/, Ot = /<(?:script|style|link)/i, Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Mt = /^$|\/(?:java|ecma)script/i, Rt = /^true\/(.*)/, It = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Lt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Lt.optgroup = Lt.option, Lt.tbody = Lt.tfoot = Lt.colgroup = Lt.caption = Lt.thead, Lt.th = Lt.td, K.extend({
        clone: function (t, e, i) {
            var n, r, s, o, a = t.cloneNode(!0), l = K.contains(t.ownerDocument, t);
            if (!(Q.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || K.isXMLDoc(t))) for (o = v(a), s = v(t), n = 0, r = s.length; n < r; n++) y(s[n], o[n]);
            if (e) if (i) for (s = s || v(t), o = o || v(a), n = 0, r = s.length; n < r; n++) g(s[n], o[n]); else g(t, a);
            return o = v(a, "script"), o.length > 0 && m(o, !l && v(t, "script")), a
        }, buildFragment: function (t, e, i, n) {
            for (var r, s, o, a, l, h, c = e.createDocumentFragment(), u = [], p = 0, d = t.length; p < d; p++) if (r = t[p], r || 0 === r) if ("object" === K.type(r)) K.merge(u, r.nodeType ? [r] : r); else if (Pt.test(r)) {
                for (s = s || c.appendChild(e.createElement("div")), o = ($t.exec(r) || ["", ""])[1].toLowerCase(), a = Lt[o] || Lt._default, s.innerHTML = a[1] + r.replace(Ft, "<$1></$2>") + a[2], h = a[0]; h--;) s = s.lastChild;
                K.merge(u, s.childNodes), s = c.firstChild, s.textContent = ""
            } else u.push(e.createTextNode(r));
            for (c.textContent = "", p = 0; r = u[p++];) if ((!n || K.inArray(r, n) === -1) && (l = K.contains(r.ownerDocument, r), s = v(c.appendChild(r), "script"), l && m(s), i)) for (h = 0; r = s[h++];) Mt.test(r.type || "") && i.push(r);
            return c
        }, cleanData: function (t) {
            for (var e, i, n, r, s = K.event.special, o = 0; void 0 !== (i = t[o]); o++) {
                if (K.acceptData(i) && (r = i[vt.expando], r && (e = vt.cache[r]))) {
                    if (e.events) for (n in e.events) s[n] ? K.event.remove(i, n) : K.removeEvent(i, n, e.handle);
                    vt.cache[r] && delete vt.cache[r]
                }
                delete yt.cache[i[yt.expando]]
            }
        }
    }), K.fn.extend({
        text: function (t) {
            return gt(this, function (t) {
                return void 0 === t ? K.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = p(this, t);
                    e.appendChild(t)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = p(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        }, remove: function (t, e) {
            for (var i, n = t ? K.filter(t, this) : this, r = 0; null != (i = n[r]); r++) e || 1 !== i.nodeType || K.cleanData(v(i)), i.parentNode && (e && K.contains(i.ownerDocument, i) && m(v(i, "script")), i.parentNode.removeChild(i));
            return this
        }, empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (K.cleanData(v(t, !1)), t.textContent = "");
            return this
        }, clone: function (t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function () {
                return K.clone(this, t, e)
            })
        }, html: function (t) {
            return gt(this, function (t) {
                var e = this[0] || {}, i = 0, n = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !Ot.test(t) && !Lt[($t.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = t.replace(Ft, "<$1></$2>");
                    try {
                        for (; i < n; i++) e = this[i] || {}, 1 === e.nodeType && (K.cleanData(v(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (r) {
                    }
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        }, replaceWith: function () {
            var t = arguments[0];
            return this.domManip(arguments, function (e) {
                t = this.parentNode, K.cleanData(v(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        }, detach: function (t) {
            return this.remove(t, !0)
        }, domManip: function (t, e) {
            t = X.apply([], t);
            var i, n, r, s, o, a, l = 0, h = this.length, c = this, u = h - 1, p = t[0], m = K.isFunction(p);
            if (m || h > 1 && "string" == typeof p && !Q.checkClone && Nt.test(p)) return this.each(function (i) {
                var n = c.eq(i);
                m && (t[0] = p.call(this, i, n.html())), n.domManip(t, e)
            });
            if (h && (i = K.buildFragment(t, this[0].ownerDocument, !1, this), n = i.firstChild, 1 === i.childNodes.length && (i = n), n)) {
                for (r = K.map(v(i, "script"), d), s = r.length; l < h; l++) o = i, l !== u && (o = K.clone(o, !0, !0), s && K.merge(r, v(o, "script"))), e.call(this[l], o, l);
                if (s) for (a = r[r.length - 1].ownerDocument, K.map(r, f), l = 0; l < s; l++) o = r[l], Mt.test(o.type || "") && !vt.access(o, "globalEval") && K.contains(a, o) && (o.src ? K._evalUrl && K._evalUrl(o.src) : K.globalEval(o.textContent.replace(It, "")))
            }
            return this
        }
    }), K.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (t, e) {
        K.fn[t] = function (t) {
            for (var i, n = [], r = K(t), s = r.length - 1, o = 0; o <= s; o++) i = o === s ? this : this.clone(!0), K(r[o])[e](i), Y.apply(n, i.get());
            return this.pushStack(n)
        }
    });
    var Bt, jt = {}, zt = /^margin/, Ht = new RegExp("^(" + _t + ")(?!px)[a-z%]+$", "i"), qt = function (e) {
        return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
    };
    !function () {
        function e() {
            o.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o.innerHTML = "", r.appendChild(s);
            var e = t.getComputedStyle(o, null);
            i = "1%" !== e.top, n = "4px" === e.width, r.removeChild(s)
        }

        var i, n, r = Z.documentElement, s = Z.createElement("div"), o = Z.createElement("div");
        o.style && (o.style.backgroundClip = "content-box", o.cloneNode(!0).style.backgroundClip = "", Q.clearCloneStyle = "content-box" === o.style.backgroundClip, s.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", s.appendChild(o), t.getComputedStyle && K.extend(Q, {
            pixelPosition: function () {
                return e(), i
            }, boxSizingReliable: function () {
                return null == n && e(), n
            }, reliableMarginRight: function () {
                var e, i = o.appendChild(Z.createElement("div"));
                return i.style.cssText = o.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", o.style.width = "1px", r.appendChild(s), e = !parseFloat(t.getComputedStyle(i, null).marginRight), r.removeChild(s), o.removeChild(i), e
            }
        }))
    }(), K.swap = function (t, e, i, n) {
        var r, s, o = {};
        for (s in e) o[s] = t.style[s], t.style[s] = e[s];
        r = i.apply(t, n || []);
        for (s in e) t.style[s] = o[s];
        return r
    };
    var Xt = /^(none|table(?!-c[ea]).+)/, Yt = new RegExp("^(" + _t + ")(.*)$", "i"),
        Ut = new RegExp("^([+-])=(" + _t + ")", "i"),
        Wt = {position: "absolute", visibility: "hidden", display: "block"},
        Vt = {letterSpacing: "0", fontWeight: "400"}, Gt = ["Webkit", "O", "Moz", "ms"];
    K.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var i = _(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": "cssFloat"},
        style: function (t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, s, o, a = K.camelCase(e), l = t.style;
                return e = K.cssProps[a] || (K.cssProps[a] = T(l, a)), o = K.cssHooks[e] || K.cssHooks[a], void 0 === i ? o && "get" in o && void 0 !== (r = o.get(t, !1, n)) ? r : l[e] : (s = typeof i, "string" === s && (r = Ut.exec(i)) && (i = (r[1] + 1) * r[2] + parseFloat(K.css(t, e)), s = "number"), null != i && i === i && ("number" !== s || K.cssNumber[a] || (i += "px"), Q.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), o && "set" in o && void 0 === (i = o.set(t, i, n)) || (l[e] = i)), void 0)
            }
        },
        css: function (t, e, i, n) {
            var r, s, o, a = K.camelCase(e);
            return e = K.cssProps[a] || (K.cssProps[a] = T(t.style, a)), o = K.cssHooks[e] || K.cssHooks[a], o && "get" in o && (r = o.get(t, !0, i)), void 0 === r && (r = _(t, e, n)), "normal" === r && e in Vt && (r = Vt[e]), "" === i || i ? (s = parseFloat(r), i === !0 || K.isNumeric(s) ? s || 0 : r) : r
        }
    }), K.each(["height", "width"], function (t, e) {
        K.cssHooks[e] = {
            get: function (t, i, n) {
                if (i) return Xt.test(K.css(t, "display")) && 0 === t.offsetWidth ? K.swap(t, Wt, function () {
                    return k(t, e, n)
                }) : k(t, e, n)
            }, set: function (t, i, n) {
                var r = n && qt(t);
                return C(t, i, n ? S(t, e, n, "border-box" === K.css(t, "boxSizing", !1, r), r) : 0)
            }
        }
    }), K.cssHooks.marginRight = w(Q.reliableMarginRight, function (t, e) {
        if (e) return K.swap(t, {display: "inline-block"}, _, [t, "marginRight"])
    }), K.each({margin: "", padding: "", border: "Width"}, function (t, e) {
        K.cssHooks[t + e] = {
            expand: function (i) {
                for (var n = 0, r = {}, s = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) r[t + wt[n] + e] = s[n] || s[n - 2] || s[0];
                return r
            }
        }, zt.test(t) || (K.cssHooks[t + e].set = C)
    }), K.fn.extend({
        css: function (t, e) {
            return gt(this, function (t, e, i) {
                var n, r, s = {}, o = 0;
                if (K.isArray(e)) {
                    for (n = qt(t), r = e.length; o < r; o++) s[e[o]] = K.css(t, e[o], !1, n);
                    return s
                }
                return void 0 !== i ? K.style(t, e, i) : K.css(t, e)
            }, t, e, arguments.length > 1)
        }, show: function () {
            return E(this, !0)
        }, hide: function () {
            return E(this)
        }, toggle: function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                Tt(this) ? K(this).show() : K(this).hide()
            })
        }
    }), K.Tween = A, A.prototype = {
        constructor: A, init: function (t, e, i, n, r, s) {
            this.elem = t, this.prop = i, this.easing = r || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = s || (K.cssNumber[i] ? "" : "px")
        }, cur: function () {
            var t = A.propHooks[this.prop];
            return t && t.get ? t.get(this) : A.propHooks._default.get(this)
        }, run: function (t) {
            var e, i = A.propHooks[this.prop];
            return this.options.duration ? this.pos = e = K.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : A.propHooks._default.set(this), this
        }
    }, A.prototype.init.prototype = A.prototype, A.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = K.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            }, set: function (t) {
                K.fx.step[t.prop] ? K.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[K.cssProps[t.prop]] || K.cssHooks[t.prop]) ? K.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, A.propHooks.scrollTop = A.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, K.easing = {
        linear: function (t) {
            return t
        }, swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, K.fx = A.prototype.init, K.fx.step = {};
    var Qt, Zt, Jt = /^(?:toggle|show|hide)$/, Kt = new RegExp("^(?:([+-])=|)(" + _t + ")([a-z%]*)$", "i"),
        te = /queueHooks$/, ee = [P], ie = {
            "*": [function (t, e) {
                var i = this.createTween(t, e), n = i.cur(), r = Kt.exec(e), s = r && r[3] || (K.cssNumber[t] ? "" : "px"),
                    o = (K.cssNumber[t] || "px" !== s && +n) && Kt.exec(K.css(i.elem, t)), a = 1, l = 20;
                if (o && o[3] !== s) {
                    s = s || o[3], r = r || [], o = +n || 1;
                    do a = a || ".5", o /= a, K.style(i.elem, t, o + s); while (a !== (a = i.cur() / n) && 1 !== a && --l)
                }
                return r && (o = i.start = +o || +n || 0, i.unit = s, i.end = r[1] ? o + (r[1] + 1) * r[2] : +r[2]), i
            }]
        };
    K.Animation = K.extend(N, {
        tweener: function (t, e) {
            K.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
            for (var i, n = 0, r = t.length; n < r; n++) i = t[n], ie[i] = ie[i] || [], ie[i].unshift(e)
        }, prefilter: function (t, e) {
            e ? ee.unshift(t) : ee.push(t)
        }
    }), K.speed = function (t, e, i) {
        var n = t && "object" == typeof t ? K.extend({}, t) : {
            complete: i || !i && e || K.isFunction(t) && t,
            duration: t,
            easing: i && e || e && !K.isFunction(e) && e
        };
        return n.duration = K.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in K.fx.speeds ? K.fx.speeds[n.duration] : K.fx.speeds._default, null != n.queue && n.queue !== !0 || (n.queue = "fx"), n.old = n.complete, n.complete = function () {
            K.isFunction(n.old) && n.old.call(this), n.queue && K.dequeue(this, n.queue)
        }, n
    }, K.fn.extend({
        fadeTo: function (t, e, i, n) {
            return this.filter(Tt).css("opacity", 0).show().end().animate({opacity: e}, t, i, n)
        }, animate: function (t, e, i, n) {
            var r = K.isEmptyObject(t), s = K.speed(e, i, n), o = function () {
                var e = N(this, K.extend({}, t), s);
                (r || vt.get(this, "finish")) && e.stop(!0)
            };
            return o.finish = o, r || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
        }, stop: function (t, e, i) {
            var n = function (t) {
                var e = t.stop;
                delete t.stop, e(i)
            };
            return "string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
                var e = !0, r = null != t && t + "queueHooks", s = K.timers, o = vt.get(this);
                if (r) o[r] && o[r].stop && n(o[r]); else for (r in o) o[r] && o[r].stop && te.test(r) && n(o[r]);
                for (r = s.length; r--;) s[r].elem !== this || null != t && s[r].queue !== t || (s[r].anim.stop(i), e = !1, s.splice(r, 1));
                !e && i || K.dequeue(this, t)
            })
        }, finish: function (t) {
            return t !== !1 && (t = t || "fx"), this.each(function () {
                var e, i = vt.get(this), n = i[t + "queue"], r = i[t + "queueHooks"], s = K.timers,
                    o = n ? n.length : 0;
                for (i.finish = !0, K.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete i.finish
            })
        }
    }), K.each(["toggle", "show", "hide"], function (t, e) {
        var i = K.fn[e];
        K.fn[e] = function (t, n, r) {
            return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(F(e, !0), t, n, r)
        }
    }), K.each({
        slideDown: F("show"),
        slideUp: F("hide"),
        slideToggle: F("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (t, e) {
        K.fn[t] = function (t, i, n) {
            return this.animate(e, t, i, n)
        }
    }), K.timers = [], K.fx.tick = function () {
        var t, e = 0, i = K.timers;
        for (Qt = K.now(); e < i.length; e++) t = i[e], t() || i[e] !== t || i.splice(e--, 1);
        i.length || K.fx.stop(), Qt = void 0
    }, K.fx.timer = function (t) {
        K.timers.push(t), t() ? K.fx.start() : K.timers.pop()
    }, K.fx.interval = 13, K.fx.start = function () {
        Zt || (Zt = setInterval(K.fx.tick, K.fx.interval))
    }, K.fx.stop = function () {
        clearInterval(Zt), Zt = null
    }, K.fx.speeds = {slow: 600, fast: 200, _default: 400}, K.fn.delay = function (t, e) {
        return t = K.fx ? K.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, i) {
            var n = setTimeout(e, t);
            i.stop = function () {
                clearTimeout(n)
            }
        })
    }, function () {
        var t = Z.createElement("input"), e = Z.createElement("select"), i = e.appendChild(Z.createElement("option"));
        t.type = "checkbox", Q.checkOn = "" !== t.value, Q.optSelected = i.selected, e.disabled = !0, Q.optDisabled = !i.disabled, t = Z.createElement("input"), t.value = "t", t.type = "radio", Q.radioValue = "t" === t.value
    }();
    var ne, re, se = K.expr.attrHandle;
    K.fn.extend({
        attr: function (t, e) {
            return gt(this, K.attr, t, e, arguments.length > 1)
        }, removeAttr: function (t) {
            return this.each(function () {
                K.removeAttr(this, t)
            })
        }
    }), K.extend({
        attr: function (t, e, i) {
            var n, r, s = t.nodeType;
            if (t && 3 !== s && 8 !== s && 2 !== s) return typeof t.getAttribute === St ? K.prop(t, e, i) : (1 === s && K.isXMLDoc(t) || (e = e.toLowerCase(), n = K.attrHooks[e] || (K.expr.match.bool.test(e) ? re : ne)), void 0 === i ? n && "get" in n && null !== (r = n.get(t, e)) ? r : (r = K.find.attr(t, e), null == r ? void 0 : r) : null !== i ? n && "set" in n && void 0 !== (r = n.set(t, i, e)) ? r : (t.setAttribute(e, i + ""), i) : void K.removeAttr(t, e))
        }, removeAttr: function (t, e) {
            var i, n, r = 0, s = e && e.match(dt);
            if (s && 1 === t.nodeType) for (; i = s[r++];) n = K.propFix[i] || i, K.expr.match.bool.test(i) && (t[n] = !1), t.removeAttribute(i)
        }, attrHooks: {
            type: {
                set: function (t, e) {
                    if (!Q.radioValue && "radio" === e && K.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        }
    }), re = {
        set: function (t, e, i) {
            return e === !1 ? K.removeAttr(t, i) : t.setAttribute(i, i), i
        }
    }, K.each(K.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var i = se[e] || K.find.attr;
        se[e] = function (t, e, n) {
            var r, s;
            return n || (s = se[e], se[e] = r, r = null != i(t, e, n) ? e.toLowerCase() : null, se[e] = s), r
        }
    });
    var oe = /^(?:input|select|textarea|button)$/i;
    K.fn.extend({
        prop: function (t, e) {
            return gt(this, K.prop, t, e, arguments.length > 1)
        }, removeProp: function (t) {
            return this.each(function () {
                delete this[K.propFix[t] || t]
            })
        }
    }), K.extend({
        propFix: {"for": "htmlFor", "class": "className"}, prop: function (t, e, i) {
            var n, r, s, o = t.nodeType;
            if (t && 3 !== o && 8 !== o && 2 !== o) return s = 1 !== o || !K.isXMLDoc(t), s && (e = K.propFix[e] || e, r = K.propHooks[e]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : t[e] = i : r && "get" in r && null !== (n = r.get(t, e)) ? n : t[e]
        }, propHooks: {
            tabIndex: {
                get: function (t) {
                    return t.hasAttribute("tabindex") || oe.test(t.nodeName) || t.href ? t.tabIndex : -1
                }
            }
        }
    }), Q.optSelected || (K.propHooks.selected = {
        get: function (t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        }
    }), K.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        K.propFix[this.toLowerCase()] = this
    });
    var ae = /[\t\r\n\f]/g;
    K.fn.extend({
        addClass: function (t) {
            var e, i, n, r, s, o, a = "string" == typeof t && t, l = 0, h = this.length;
            if (K.isFunction(t)) return this.each(function (e) {
                K(this).addClass(t.call(this, e, this.className))
            });
            if (a) for (e = (t || "").match(dt) || []; l < h; l++) if (i = this[l], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(ae, " ") : " ")) {
                for (s = 0; r = e[s++];) n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                o = K.trim(n), i.className !== o && (i.className = o)
            }
            return this
        }, removeClass: function (t) {
            var e, i, n, r, s, o, a = 0 === arguments.length || "string" == typeof t && t, l = 0, h = this.length;
            if (K.isFunction(t)) return this.each(function (e) {
                K(this).removeClass(t.call(this, e, this.className))
            });
            if (a) for (e = (t || "").match(dt) || []; l < h; l++) if (i = this[l], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(ae, " ") : "")) {
                for (s = 0; r = e[s++];) for (; n.indexOf(" " + r + " ") >= 0;) n = n.replace(" " + r + " ", " ");
                o = t ? K.trim(n) : "", i.className !== o && (i.className = o)
            }
            return this
        }, toggleClass: function (t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : K.isFunction(t) ? this.each(function (i) {
                K(this).toggleClass(t.call(this, i, this.className, e), e)
            }) : this.each(function () {
                if ("string" === i) for (var e, n = 0, r = K(this), s = t.match(dt) || []; e = s[n++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e); else i !== St && "boolean" !== i || (this.className && vt.set(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : vt.get(this, "__className__") || "")
            })
        }, hasClass: function (t) {
            for (var e = " " + t + " ", i = 0, n = this.length; i < n; i++) if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(ae, " ").indexOf(e) >= 0) return !0;
            return !1
        }
    });
    var le = /\r/g;
    K.fn.extend({
        val: function (t) {
            var e, i, n, r = this[0];
            {
                if (arguments.length) return n = K.isFunction(t), this.each(function (i) {
                    var r;
                    1 === this.nodeType && (r = n ? t.call(this, i, K(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : K.isArray(r) && (r = K.map(r, function (t) {
                        return null == t ? "" : t + ""
                    })), e = K.valHooks[this.type] || K.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                });
                if (r) return e = K.valHooks[r.type] || K.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(r, "value")) ? i : (i = r.value, "string" == typeof i ? i.replace(le, "") : null == i ? "" : i)
            }
        }
    }), K.extend({
        valHooks: {
            option: {
                get: function (t) {
                    var e = K.find.attr(t, "value");
                    return null != e ? e : K.trim(K.text(t))
                }
            }, select: {
                get: function (t) {
                    for (var e, i, n = t.options, r = t.selectedIndex, s = "select-one" === t.type || r < 0, o = s ? null : [], a = s ? r + 1 : n.length, l = r < 0 ? a : s ? r : 0; l < a; l++) if (i = n[l], (i.selected || l === r) && (Q.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !K.nodeName(i.parentNode, "optgroup"))) {
                        if (e = K(i).val(), s) return e;
                        o.push(e)
                    }
                    return o
                }, set: function (t, e) {
                    for (var i, n, r = t.options, s = K.makeArray(e), o = r.length; o--;) n = r[o], (n.selected = K.inArray(n.value, s) >= 0) && (i = !0);
                    return i || (t.selectedIndex = -1), s
                }
            }
        }
    }), K.each(["radio", "checkbox"], function () {
        K.valHooks[this] = {
            set: function (t, e) {
                if (K.isArray(e)) return t.checked = K.inArray(K(t).val(), e) >= 0
            }
        }, Q.checkOn || (K.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    }), K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
        K.fn[e] = function (t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
    }), K.fn.extend({
        hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }, bind: function (t, e, i) {
            return this.on(t, null, e, i)
        }, unbind: function (t, e) {
            return this.off(t, null, e)
        }, delegate: function (t, e, i, n) {
            return this.on(e, t, i, n)
        }, undelegate: function (t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }
    });
    var he = K.now(), ce = /\?/;
    K.parseJSON = function (t) {
        return JSON.parse(t + "")
    }, K.parseXML = function (t) {
        var e, i;
        if (!t || "string" != typeof t) return null;
        try {
            i = new DOMParser, e = i.parseFromString(t, "text/xml")
        } catch (n) {
            e = void 0
        }
        return e && !e.getElementsByTagName("parsererror").length || K.error("Invalid XML: " + t), e
    };
    var ue = /#.*$/, pe = /([?&])_=[^&]*/, de = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        fe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, me = /^(?:GET|HEAD)$/, ge = /^\/\//,
        ve = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, ye = {}, be = {}, xe = "*/".concat("*"),
        _e = t.location.href, we = ve.exec(_e.toLowerCase()) || [];
    K.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: _e,
            type: "GET",
            isLocal: fe.test(we[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": xe,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": K.parseJSON, "text xml": K.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (t, e) {
            return e ? I(I(t, K.ajaxSettings), e) : I(K.ajaxSettings, t)
        },
        ajaxPrefilter: M(ye),
        ajaxTransport: M(be),
        ajax: function (t, e) {
            function i(t, e, i, o) {
                var l, c, v, y, x, w = e;
                2 !== b && (b = 2, a && clearTimeout(a), n = void 0, s = o || "", _.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, i && (y = L(u, _, i)), y = B(u, y, _, l), l ? (u.ifModified && (x = _.getResponseHeader("Last-Modified"), x && (K.lastModified[r] = x), x = _.getResponseHeader("etag"), x && (K.etag[r] = x)), 204 === t || "HEAD" === u.type ? w = "nocontent" : 304 === t ? w = "notmodified" : (w = y.state, c = y.data, v = y.error, l = !v)) : (v = w, !t && w || (w = "error", t < 0 && (t = 0))), _.status = t, _.statusText = (e || w) + "", l ? f.resolveWith(p, [c, w, _]) : f.rejectWith(p, [_, w, v]), _.statusCode(g), g = void 0, h && d.trigger(l ? "ajaxSuccess" : "ajaxError", [_, u, l ? c : v]), m.fireWith(p, [_, w]), h && (d.trigger("ajaxComplete", [_, u]), --K.active || K.event.trigger("ajaxStop")))
            }

            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var n, r, s, o, a, l, h, c, u = K.ajaxSetup({}, e), p = u.context || u,
                d = u.context && (p.nodeType || p.jquery) ? K(p) : K.event, f = K.Deferred(),
                m = K.Callbacks("once memory"), g = u.statusCode || {}, v = {}, y = {}, b = 0, x = "canceled", _ = {
                    readyState: 0, getResponseHeader: function (t) {
                        var e;
                        if (2 === b) {
                            if (!o) for (o = {}; e = de.exec(s);) o[e[1].toLowerCase()] = e[2];
                            e = o[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    }, getAllResponseHeaders: function () {
                        return 2 === b ? s : null
                    }, setRequestHeader: function (t, e) {
                        var i = t.toLowerCase();
                        return b || (t = y[i] = y[i] || t, v[t] = e), this
                    }, overrideMimeType: function (t) {
                        return b || (u.mimeType = t), this
                    }, statusCode: function (t) {
                        var e;
                        if (t) if (b < 2) for (e in t) g[e] = [g[e], t[e]]; else _.always(t[_.status]);
                        return this
                    }, abort: function (t) {
                        var e = t || x;
                        return n && n.abort(e), i(0, e), this
                    }
                };
            if (f.promise(_).complete = m.add, _.success = _.done, _.error = _.fail, u.url = ((t || u.url || _e) + "").replace(ue, "").replace(ge, we[1] + "//"), u.type = e.method || e.type || u.method || u.type, u.dataTypes = K.trim(u.dataType || "*").toLowerCase().match(dt) || [""], null == u.crossDomain && (l = ve.exec(u.url.toLowerCase()), u.crossDomain = !(!l || l[1] === we[1] && l[2] === we[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (we[3] || ("http:" === we[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = K.param(u.data, u.traditional)), R(ye, u, e, _), 2 === b) return _;
            h = K.event && u.global, h && 0 === K.active++ && K.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !me.test(u.type), r = u.url, u.hasContent || (u.data && (r = u.url += (ce.test(r) ? "&" : "?") + u.data, delete u.data), u.cache === !1 && (u.url = pe.test(r) ? r.replace(pe, "$1_=" + he++) : r + (ce.test(r) ? "&" : "?") + "_=" + he++)), u.ifModified && (K.lastModified[r] && _.setRequestHeader("If-Modified-Since", K.lastModified[r]), K.etag[r] && _.setRequestHeader("If-None-Match", K.etag[r])), (u.data && u.hasContent && u.contentType !== !1 || e.contentType) && _.setRequestHeader("Content-Type", u.contentType), _.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + xe + "; q=0.01" : "") : u.accepts["*"]);
            for (c in u.headers) _.setRequestHeader(c, u.headers[c]);
            if (u.beforeSend && (u.beforeSend.call(p, _, u) === !1 || 2 === b)) return _.abort();
            x = "abort";
            for (c in{success: 1, error: 1, complete: 1}) _[c](u[c]);
            if (n = R(be, u, e, _)) {
                _.readyState = 1, h && d.trigger("ajaxSend", [_, u]), u.async && u.timeout > 0 && (a = setTimeout(function () {
                    _.abort("timeout")
                }, u.timeout));
                try {
                    b = 1, n.send(v, i)
                } catch (w) {
                    if (!(b < 2)) throw w;
                    i(-1, w)
                }
            } else i(-1, "No Transport");
            return _
        },
        getJSON: function (t, e, i) {
            return K.get(t, e, i, "json")
        },
        getScript: function (t, e) {
            return K.get(t, void 0, e, "script")
        }
    }), K.each(["get", "post"], function (t, e) {
        K[e] = function (t, i, n, r) {
            return K.isFunction(i) && (r = r || n, n = i, i = void 0), K.ajax({
                url: t,
                type: e,
                dataType: r,
                data: i,
                success: n
            })
        }
    }), K._evalUrl = function (t) {
        return K.ajax({url: t, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }, K.fn.extend({
        wrapAll: function (t) {
            var e;
            return K.isFunction(t) ? this.each(function (e) {
                K(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = K(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this)
        }, wrapInner: function (t) {
            return K.isFunction(t) ? this.each(function (e) {
                K(this).wrapInner(t.call(this, e))
            }) : this.each(function () {
                var e = K(this), i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            })
        }, wrap: function (t) {
            var e = K.isFunction(t);
            return this.each(function (i) {
                K(this).wrapAll(e ? t.call(this, i) : t)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                K.nodeName(this, "body") || K(this).replaceWith(this.childNodes)
            }).end()
        }
    }), K.expr.filters.hidden = function (t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0
    }, K.expr.filters.visible = function (t) {
        return !K.expr.filters.hidden(t)
    };
    var Te = /%20/g, Ce = /\[\]$/, Se = /\r?\n/g, ke = /^(?:submit|button|image|reset|file)$/i,
        Ee = /^(?:input|select|textarea|keygen)/i;
    K.param = function (t, e) {
        var i, n = [], r = function (t, e) {
            e = K.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
        };
        if (void 0 === e && (e = K.ajaxSettings && K.ajaxSettings.traditional),
            K.isArray(t) || t.jquery && !K.isPlainObject(t)) K.each(t, function () {
            r(this.name, this.value)
        }); else for (i in t) j(i, t[i], e, r);
        return n.join("&").replace(Te, "+")
    }, K.fn.extend({
        serialize: function () {
            return K.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var t = K.prop(this, "elements");
                return t ? K.makeArray(t) : this
            }).filter(function () {
                var t = this.type;
                return this.name && !K(this).is(":disabled") && Ee.test(this.nodeName) && !ke.test(t) && (this.checked || !Ct.test(t))
            }).map(function (t, e) {
                var i = K(this).val();
                return null == i ? null : K.isArray(i) ? K.map(i, function (t) {
                    return {name: e.name, value: t.replace(Se, "\r\n")}
                }) : {name: e.name, value: i.replace(Se, "\r\n")}
            }).get()
        }
    }), K.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (t) {
        }
    };
    var Ae = 0, De = {}, Fe = {0: 200, 1223: 204}, $e = K.ajaxSettings.xhr();
    t.attachEvent && t.attachEvent("onunload", function () {
        for (var t in De) De[t]()
    }), Q.cors = !!$e && "withCredentials" in $e, Q.ajax = $e = !!$e, K.ajaxTransport(function (t) {
        var e;
        if (Q.cors || $e && !t.crossDomain) return {
            send: function (i, n) {
                var r, s = t.xhr(), o = ++Ae;
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (r in t.xhrFields) s[r] = t.xhrFields[r];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (r in i) s.setRequestHeader(r, i[r]);
                e = function (t) {
                    return function () {
                        e && (delete De[o], e = s.onload = s.onerror = null, "abort" === t ? s.abort() : "error" === t ? n(s.status, s.statusText) : n(Fe[s.status] || s.status, s.statusText, "string" == typeof s.responseText ? {text: s.responseText} : void 0, s.getAllResponseHeaders()))
                    }
                }, s.onload = e(), s.onerror = e("error"), e = De[o] = e("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (a) {
                    if (e) throw a
                }
            }, abort: function () {
                e && e()
            }
        }
    }), K.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (t) {
                return K.globalEval(t), t
            }
        }
    }), K.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), K.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
            var e, i;
            return {
                send: function (n, r) {
                    e = K("<script>").prop({
                        async: !0,
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", i = function (t) {
                        e.remove(), i = null, t && r("error" === t.type ? 404 : 200, t.type)
                    }), Z.head.appendChild(e[0])
                }, abort: function () {
                    i && i()
                }
            }
        }
    });
    var Pe = [], Oe = /(=)\?(?=&|$)|\?\?/;
    K.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var t = Pe.pop() || K.expando + "_" + he++;
            return this[t] = !0, t
        }
    }), K.ajaxPrefilter("json jsonp", function (e, i, n) {
        var r, s, o,
            a = e.jsonp !== !1 && (Oe.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Oe.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = K.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Oe, "$1" + r) : e.jsonp !== !1 && (e.url += (ce.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
            return o || K.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", s = t[r], t[r] = function () {
            o = arguments
        }, n.always(function () {
            t[r] = s, e[r] && (e.jsonpCallback = i.jsonpCallback, Pe.push(r)), o && K.isFunction(s) && s(o[0]), o = s = void 0
        }), "script"
    }), K.parseHTML = function (t, e, i) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (i = e, e = !1), e = e || Z;
        var n = ot.exec(t), r = !i && [];
        return n ? [e.createElement(n[1])] : (n = K.buildFragment([t], e, r), r && r.length && K(r).remove(), K.merge([], n.childNodes))
    };
    var Ne = K.fn.load;
    K.fn.load = function (t, e, i) {
        if ("string" != typeof t && Ne) return Ne.apply(this, arguments);
        var n, r, s, o = this, a = t.indexOf(" ");
        return a >= 0 && (n = K.trim(t.slice(a)), t = t.slice(0, a)), K.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (r = "POST"), o.length > 0 && K.ajax({
            url: t,
            type: r,
            dataType: "html",
            data: e
        }).done(function (t) {
            s = arguments, o.html(n ? K("<div>").append(K.parseHTML(t)).find(n) : t)
        }).complete(i && function (t, e) {
            o.each(i, s || [t.responseText, e, t])
        }), this
    }, K.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        K.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), K.expr.filters.animated = function (t) {
        return K.grep(K.timers, function (e) {
            return t === e.elem
        }).length
    };
    var Me = t.document.documentElement;
    K.offset = {
        setOffset: function (t, e, i) {
            var n, r, s, o, a, l, h, c = K.css(t, "position"), u = K(t), p = {};
            "static" === c && (t.style.position = "relative"), a = u.offset(), s = K.css(t, "top"), l = K.css(t, "left"), h = ("absolute" === c || "fixed" === c) && (s + l).indexOf("auto") > -1, h ? (n = u.position(), o = n.top, r = n.left) : (o = parseFloat(s) || 0, r = parseFloat(l) || 0), K.isFunction(e) && (e = e.call(t, i, a)), null != e.top && (p.top = e.top - a.top + o), null != e.left && (p.left = e.left - a.left + r), "using" in e ? e.using.call(t, p) : u.css(p)
        }
    }, K.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                K.offset.setOffset(this, t, e)
            });
            var e, i, n = this[0], r = {top: 0, left: 0}, s = n && n.ownerDocument;
            if (s) return e = s.documentElement, K.contains(e, n) ? (typeof n.getBoundingClientRect !== St && (r = n.getBoundingClientRect()), i = z(s), {
                top: r.top + i.pageYOffset - e.clientTop,
                left: r.left + i.pageXOffset - e.clientLeft
            }) : r
        }, position: function () {
            if (this[0]) {
                var t, e, i = this[0], n = {top: 0, left: 0};
                return "fixed" === K.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), K.nodeName(t[0], "html") || (n = t.offset()), n.top += K.css(t[0], "borderTopWidth", !0), n.left += K.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - n.top - K.css(i, "marginTop", !0),
                    left: e.left - n.left - K.css(i, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent || Me; t && !K.nodeName(t, "html") && "static" === K.css(t, "position");) t = t.offsetParent;
                return t || Me
            })
        }
    }), K.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, i) {
        var n = "pageYOffset" === i;
        K.fn[e] = function (r) {
            return gt(this, function (e, r, s) {
                var o = z(e);
                return void 0 === s ? o ? o[i] : e[r] : void(o ? o.scrollTo(n ? t.pageXOffset : s, n ? s : t.pageYOffset) : e[r] = s)
            }, e, r, arguments.length, null)
        }
    }), K.each(["top", "left"], function (t, e) {
        K.cssHooks[e] = w(Q.pixelPosition, function (t, i) {
            if (i) return i = _(t, e), Ht.test(i) ? K(t).position()[e] + "px" : i
        })
    }), K.each({Height: "height", Width: "width"}, function (t, e) {
        K.each({padding: "inner" + t, content: e, "": "outer" + t}, function (i, n) {
            K.fn[n] = function (n, r) {
                var s = arguments.length && (i || "boolean" != typeof n),
                    o = i || (n === !0 || r === !0 ? "margin" : "border");
                return gt(this, function (e, i, n) {
                    var r;
                    return K.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === n ? K.css(e, i, o) : K.style(e, i, n, o)
                }, e, s ? n : void 0, s, null)
            }
        })
    }), K.fn.size = function () {
        return this.length
    }, K.fn.andSelf = K.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return K
    });
    var Re = t.jQuery, Ie = t.$;
    return K.noConflict = function (e) {
        return t.$ === K && (t.$ = Ie), e && t.jQuery === K && (t.jQuery = Re), K
    }, typeof e === St && (t.jQuery = t.$ = K), K
}), /*!
 * Bootstrap-select v1.7.5 (http://silviomoreto.github.io/bootstrap-select)
 *
 * Copyright 2013-2015 bootstrap-select
 * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)
 */
    function (t, e) {
        "function" == typeof define && define.amd ? define(["jquery"], function (t) {
            return e(t)
        }) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(this, function (t) {
        !function (t) {
            "use strict";

            function e(e) {
                var i = [{re: /[\xC0-\xC6]/g, ch: "A"}, {re: /[\xE0-\xE6]/g, ch: "a"}, {
                    re: /[\xC8-\xCB]/g,
                    ch: "E"
                }, {re: /[\xE8-\xEB]/g, ch: "e"}, {re: /[\xCC-\xCF]/g, ch: "I"}, {
                    re: /[\xEC-\xEF]/g,
                    ch: "i"
                }, {re: /[\xD2-\xD6]/g, ch: "O"}, {re: /[\xF2-\xF6]/g, ch: "o"}, {
                    re: /[\xD9-\xDC]/g,
                    ch: "U"
                }, {re: /[\xF9-\xFC]/g, ch: "u"}, {re: /[\xC7-\xE7]/g, ch: "c"}, {
                    re: /[\xD1]/g,
                    ch: "N"
                }, {re: /[\xF1]/g, ch: "n"}];
                return t.each(i, function () {
                    e = e.replace(this.re, this.ch)
                }), e
            }

            function i(t) {
                var e = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;"},
                    i = "(?:" + Object.keys(e).join("|") + ")", n = new RegExp(i), r = new RegExp(i, "g"),
                    s = null == t ? "" : "" + t;
                return n.test(s) ? s.replace(r, function (t) {
                    return e[t]
                }) : s
            }

            function n(e, i) {
                var n = arguments, s = e, o = i;
                [].shift.apply(n);
                var a, l = this.each(function () {
                    var e = t(this);
                    if (e.is("select")) {
                        var i = e.data("selectpicker"), l = "object" == typeof s && s;
                        if (i) {
                            if (l) for (var h in l) l.hasOwnProperty(h) && (i.options[h] = l[h])
                        } else {
                            var c = t.extend({}, r.DEFAULTS, t.fn.selectpicker.defaults || {}, e.data(), l);
                            c.template = t.extend({}, r.DEFAULTS.template, t.fn.selectpicker.defaults ? t.fn.selectpicker.defaults.template : {}, e.data().template, l.template), e.data("selectpicker", i = new r(this, c, o))
                        }
                        "string" == typeof s && (a = i[s] instanceof Function ? i[s].apply(i, n) : i.options[s])
                    }
                });
                return "undefined" != typeof a ? a : l
            }

            String.prototype.includes || !function () {
                var t = {}.toString, e = function () {
                    try {
                        var t = {}, e = Object.defineProperty, i = e(t, t, t) && e
                    } catch (n) {
                    }
                    return i
                }(), i = "".indexOf, n = function (e) {
                    if (null == this) throw new TypeError;
                    var n = String(this);
                    if (e && "[object RegExp]" == t.call(e)) throw new TypeError;
                    var r = n.length, s = String(e), o = s.length, a = arguments.length > 1 ? arguments[1] : void 0,
                        l = a ? Number(a) : 0;
                    l != l && (l = 0);
                    var h = Math.min(Math.max(l, 0), r);
                    return !(o + h > r) && i.call(n, s, l) != -1
                };
                e ? e(String.prototype, "includes", {
                    value: n,
                    configurable: !0,
                    writable: !0
                }) : String.prototype.includes = n
            }(), String.prototype.startsWith || !function () {
                var t = function () {
                    try {
                        var t = {}, e = Object.defineProperty, i = e(t, t, t) && e
                    } catch (n) {
                    }
                    return i
                }(), e = {}.toString, i = function (t) {
                    if (null == this) throw new TypeError;
                    var i = String(this);
                    if (t && "[object RegExp]" == e.call(t)) throw new TypeError;
                    var n = i.length, r = String(t), s = r.length, o = arguments.length > 1 ? arguments[1] : void 0,
                        a = o ? Number(o) : 0;
                    a != a && (a = 0);
                    var l = Math.min(Math.max(a, 0), n);
                    if (s + l > n) return !1;
                    for (var h = -1; ++h < s;) if (i.charCodeAt(l + h) != r.charCodeAt(h)) return !1;
                    return !0
                };
                t ? t(String.prototype, "startsWith", {
                    value: i,
                    configurable: !0,
                    writable: !0
                }) : String.prototype.startsWith = i
            }(), Object.keys || (Object.keys = function (t, e, i) {
                i = [];
                for (e in t) i.hasOwnProperty.call(t, e) && i.push(e);
                return i
            }), t.fn.triggerNative = function (t) {
                var e, i = this[0];
                i.dispatchEvent ? ("function" == typeof Event ? e = new Event(t, {bubbles: !0}) : (e = document.createEvent("Event"), e.initEvent(t, !0, !1)), i.dispatchEvent(e)) : (i.fireEvent && (e = document.createEventObject(), e.eventType = t, i.fireEvent("on" + t, e)), this.trigger(t))
            }, t.expr[":"].icontains = function (e, i, n) {
                var r = t(e), s = (r.data("tokens") || r.text()).toUpperCase();
                return s.includes(n[3].toUpperCase())
            }, t.expr[":"].ibegins = function (e, i, n) {
                var r = t(e), s = (r.data("tokens") || r.text()).toUpperCase();
                return s.startsWith(n[3].toUpperCase())
            }, t.expr[":"].aicontains = function (e, i, n) {
                var r = t(e), s = (r.data("tokens") || r.data("normalizedText") || r.text()).toUpperCase();
                return s.includes(n[3].toUpperCase())
            }, t.expr[":"].aibegins = function (e, i, n) {
                var r = t(e), s = (r.data("tokens") || r.data("normalizedText") || r.text()).toUpperCase();
                return s.startsWith(n[3].toUpperCase())
            };
            var r = function (e, i, n) {
                n && (n.stopPropagation(), n.preventDefault()), this.$element = t(e), this.$newElement = null, this.$button = null, this.$menu = null, this.$lis = null, this.options = i, null === this.options.title && (this.options.title = this.$element.attr("title")), this.val = r.prototype.val, this.render = r.prototype.render, this.refresh = r.prototype.refresh, this.setStyle = r.prototype.setStyle, this.selectAll = r.prototype.selectAll, this.deselectAll = r.prototype.deselectAll, this.destroy = r.prototype.remove, this.remove = r.prototype.remove, this.show = r.prototype.show, this.hide = r.prototype.hide, this.init()
            };
            r.VERSION = "1.7.5", r.DEFAULTS = {
                noneSelectedText: "Nothing selected",
                noneResultsText: "No results matched {0}",
                countSelectedText: function (t, e) {
                    return 1 == t ? "{0} item selected" : "{0} items selected"
                },
                maxOptionsText: function (t, e) {
                    return [1 == t ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", 1 == e ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)"]
                },
                selectAllText: "Select All",
                deselectAllText: "Deselect All",
                doneButton: !1,
                doneButtonText: "Close",
                multipleSeparator: ", ",
                styleBase: "btn",
                style: "btn-default",
                size: "auto",
                title: null,
                selectedTextFormat: "values",
                width: !1,
                container: !1,
                hideDisabled: !1,
                showSubtext: !1,
                showIcon: !0,
                showContent: !0,
                dropupAuto: !0,
                header: !1,
                liveSearch: !1,
                liveSearchPlaceholder: null,
                liveSearchNormalize: !1,
                liveSearchStyle: "contains",
                actionsBox: !1,
                iconBase: "glyphicon",
                tickIcon: "glyphicon-ok",
                template: {caret: '<span class="caret"></span>'},
                maxOptions: !1,
                mobile: !1,
                selectOnTab: !1,
                dropdownAlignRight: !1
            }, r.prototype = {
                constructor: r, init: function () {
                    var e = this, i = this.$element.attr("id");
                    this.$element.addClass("bs-select-hidden"), this.liObj = {}, this.multiple = this.$element.prop("multiple"), this.autofocus = this.$element.prop("autofocus"), this.$newElement = this.createView(), this.$element.after(this.$newElement), this.$button = this.$newElement.children("button"), this.$menu = this.$newElement.children(".dropdown-menu"), this.$menuInner = this.$menu.children(".inner"), this.$searchbox = this.$menu.find("input"), this.options.dropdownAlignRight && this.$menu.addClass("dropdown-menu-right"), "undefined" != typeof i && (this.$button.attr("data-id", i), t('label[for="' + i + '"]').click(function (t) {
                        t.preventDefault(), e.$button.focus()
                    })), this.checkDisabled(), this.clickListener(), this.options.liveSearch && this.liveSearchListener(), this.render(), this.setStyle(), this.setWidth(), this.options.container && this.selectPosition(), this.$menu.data("this", this), this.$newElement.data("this", this), this.options.mobile && this.mobile(), this.$newElement.on({
                        "hide.bs.dropdown": function (t) {
                            e.$element.trigger("hide.bs.select", t)
                        }, "hidden.bs.dropdown": function (t) {
                            e.$element.trigger("hidden.bs.select", t)
                        }, "show.bs.dropdown": function (t) {
                            e.$element.trigger("show.bs.select", t)
                        }, "shown.bs.dropdown": function (t) {
                            e.$element.trigger("shown.bs.select", t)
                        }
                    }), setTimeout(function () {
                        e.$element.trigger("loaded.bs.select")
                    })
                }, createDropdown: function () {
                    var e = this.multiple ? " show-tick" : "",
                        n = this.$element.parent().hasClass("input-group") ? " input-group-btn" : "",
                        r = this.autofocus ? " autofocus" : "",
                        s = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>" : "",
                        o = this.options.liveSearch ? '<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + i(this.options.liveSearchPlaceholder) + '"') + "></div>" : "",
                        a = this.multiple && this.options.actionsBox ? '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">' + this.options.selectAllText + '</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">' + this.options.deselectAllText + "</button></div></div>" : "",
                        l = this.multiple && this.options.doneButton ? '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">' + this.options.doneButtonText + "</button></div></div>" : "",
                        h = '<div class="btn-group bootstrap-select' + e + n + '"><button type="button" class="' + this.options.styleBase + ' dropdown-toggle" data-toggle="dropdown"' + r + '><span class="filter-option pull-left"></span>&nbsp;<span class="bs-caret">' + this.options.template.caret + '</span></button><div class="dropdown-menu open">' + s + o + a + '<ul class="dropdown-menu inner" role="menu"></ul>' + l + "</div></div>";
                    return t(h)
                }, createView: function () {
                    var t = this.createDropdown(), e = this.createLi();
                    return t.find("ul")[0].innerHTML = e, t
                }, reloadLi: function () {
                    this.destroyLi();
                    var t = this.createLi();
                    this.$menuInner[0].innerHTML = t
                }, destroyLi: function () {
                    this.$menu.find("li").remove()
                }, createLi: function () {
                    var n = this, r = [], s = 0, o = document.createElement("option"), a = -1,
                        l = function (t, e, i, n) {
                            return "<li" + ("undefined" != typeof i & "" !== i ? ' class="' + i + '"' : "") + ("undefined" != typeof e & null !== e ? ' data-original-index="' + e + '"' : "") + ("undefined" != typeof n & null !== n ? 'data-optgroup="' + n + '"' : "") + ">" + t + "</li>"
                        }, h = function (t, r, s, o) {
                            return '<a tabindex="0"' + ("undefined" != typeof r ? ' class="' + r + '"' : "") + ("undefined" != typeof s ? ' style="' + s + '"' : "") + (n.options.liveSearchNormalize ? ' data-normalized-text="' + e(i(t)) + '"' : "") + ("undefined" != typeof o || null !== o ? ' data-tokens="' + o + '"' : "") + ">" + t + '<span class="' + n.options.iconBase + " " + n.options.tickIcon + ' check-mark"></span></a>'
                        };
                    if (this.options.title && !this.multiple && (a--, !this.$element.find(".bs-title-option").length)) {
                        var c = this.$element[0];
                        o.className = "bs-title-option", o.appendChild(document.createTextNode(this.options.title)), o.value = "", c.insertBefore(o, c.firstChild), void 0 === t(c.options[c.selectedIndex]).attr("selected") && (o.selected = !0)
                    }
                    return this.$element.find("option").each(function (e) {
                        var i = t(this);
                        if (a++, !i.hasClass("bs-title-option")) {
                            var o = this.className || "", c = this.style.cssText,
                                u = i.data("content") ? i.data("content") : i.html(),
                                p = i.data("tokens") ? i.data("tokens") : null,
                                d = "undefined" != typeof i.data("subtext") ? '<small class="text-muted">' + i.data("subtext") + "</small>" : "",
                                f = "undefined" != typeof i.data("icon") ? '<span class="' + n.options.iconBase + " " + i.data("icon") + '"></span> ' : "",
                                m = this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled;
                            if ("" !== f && m && (f = "<span>" + f + "</span>"), n.options.hideDisabled && m) return void a--;
                            if (i.data("content") || (u = f + '<span class="text">' + u + d + "</span>"), "OPTGROUP" === this.parentNode.tagName && i.data("divider") !== !0) {
                                var g = " " + this.parentNode.className || "";
                                if (0 === i.index()) {
                                    s += 1;
                                    var v = this.parentNode.label,
                                        y = "undefined" != typeof i.parent().data("subtext") ? '<small class="text-muted">' + i.parent().data("subtext") + "</small>" : "",
                                        b = i.parent().data("icon") ? '<span class="' + n.options.iconBase + " " + i.parent().data("icon") + '"></span> ' : "";
                                    v = b + '<span class="text">' + v + y + "</span>", 0 !== e && r.length > 0 && (a++, r.push(l("", null, "divider", s + "div"))), a++, r.push(l(v, null, "dropdown-header" + g, s))
                                }
                                r.push(l(h(u, "opt " + o + g, c, p), e, "", s))
                            } else i.data("divider") === !0 ? r.push(l("", e, "divider")) : i.data("hidden") === !0 ? r.push(l(h(u, o, c, p), e, "hidden is-hidden")) : (this.previousElementSibling && "OPTGROUP" === this.previousElementSibling.tagName && (a++, r.push(l("", null, "divider", s + "div"))), r.push(l(h(u, o, c, p), e)));
                            n.liObj[e] = a
                        }
                    }), this.multiple || 0 !== this.$element.find("option:selected").length || this.options.title || this.$element.find("option").eq(0).prop("selected", !0).attr("selected", "selected"), r.join("")
                }, findLis: function () {
                    return null == this.$lis && (this.$lis = this.$menu.find("li")), this.$lis
                }, render: function (e) {
                    var i, n = this;
                    e !== !1 && this.$element.find("option").each(function (t) {
                        var e = n.findLis().eq(n.liObj[t]);
                        n.setDisabled(t, this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled, e), n.setSelected(t, this.selected, e)
                    }), this.tabIndex();
                    var r = this.$element.find("option").map(function () {
                        if (this.selected) {
                            if (n.options.hideDisabled && (this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled)) return;
                            var e, i = t(this),
                                r = i.data("icon") && n.options.showIcon ? '<i class="' + n.options.iconBase + " " + i.data("icon") + '"></i> ' : "";
                            return e = n.options.showSubtext && i.data("subtext") && !n.multiple ? ' <small class="text-muted">' + i.data("subtext") + "</small>" : "", "undefined" != typeof i.attr("title") ? i.attr("title") : i.data("content") && n.options.showContent ? i.data("content") : r + i.html() + e
                        }
                    }).toArray(), s = this.multiple ? r.join(this.options.multipleSeparator) : r[0];
                    if (this.multiple && this.options.selectedTextFormat.indexOf("count") > -1) {
                        var o = this.options.selectedTextFormat.split(">");
                        if (o.length > 1 && r.length > o[1] || 1 == o.length && r.length >= 2) {
                            i = this.options.hideDisabled ? ", [disabled]" : "";
                            var a = this.$element.find("option").not('[data-divider="true"], [data-hidden="true"]' + i).length,
                                l = "function" == typeof this.options.countSelectedText ? this.options.countSelectedText(r.length, a) : this.options.countSelectedText;
                            s = l.replace("{0}", r.length.toString()).replace("{1}", a.toString())
                        }
                    }
                    void 0 == this.options.title && (this.options.title = this.$element.attr("title")), "static" == this.options.selectedTextFormat && (s = this.options.title), s || (s = "undefined" != typeof this.options.title ? this.options.title : this.options.noneSelectedText), this.$button.attr("title", t.trim(s.replace(/<[^>]*>?/g, ""))), this.$button.children(".filter-option").html(s), this.$element.trigger("rendered.bs.select")
                }, setStyle: function (t, e) {
                    this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, ""));
                    var i = t ? t : this.options.style;
                    "add" == e ? this.$button.addClass(i) : "remove" == e ? this.$button.removeClass(i) : (this.$button.removeClass(this.options.style), this.$button.addClass(i))
                }, liHeight: function (e) {
                    if (e || this.options.size !== !1 && !this.sizeInfo) {
                        var i = document.createElement("div"), n = document.createElement("div"),
                            r = document.createElement("ul"), s = document.createElement("li"),
                            o = document.createElement("li"), a = document.createElement("a"),
                            l = document.createElement("span"),
                            h = this.options.header ? this.$menu.find(".popover-title")[0].cloneNode(!0) : null,
                            c = this.options.liveSearch ? document.createElement("div") : null,
                            u = this.options.actionsBox && this.multiple ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null,
                            p = this.options.doneButton && this.multiple ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null;
                        if (l.className = "text", i.className = this.$menu[0].parentNode.className + " open", n.className = "dropdown-menu open", r.className = "dropdown-menu inner", s.className = "divider", l.appendChild(document.createTextNode("Inner text")), a.appendChild(l), o.appendChild(a), r.appendChild(o), r.appendChild(s), h && n.appendChild(h), c) {
                            var d = document.createElement("span");
                            c.className = "bs-searchbox", d.className = "form-control", c.appendChild(d), n.appendChild(c)
                        }
                        u && n.appendChild(u), n.appendChild(r), p && n.appendChild(p), i.appendChild(n), document.body.appendChild(i);
                        var f = a.offsetHeight, m = h ? h.offsetHeight : 0, g = c ? c.offsetHeight : 0,
                            v = u ? u.offsetHeight : 0, y = p ? p.offsetHeight : 0, b = t(s).outerHeight(!0),
                            x = "function" == typeof getComputedStyle && getComputedStyle(n), _ = x ? null : t(n),
                            w = parseInt(x ? x.paddingTop : _.css("paddingTop")) + parseInt(x ? x.paddingBottom : _.css("paddingBottom")) + parseInt(x ? x.borderTopWidth : _.css("borderTopWidth")) + parseInt(x ? x.borderBottomWidth : _.css("borderBottomWidth")),
                            T = w + parseInt(x ? x.marginTop : _.css("marginTop")) + parseInt(x ? x.marginBottom : _.css("marginBottom")) + 2;
                        document.body.removeChild(i), this.sizeInfo = {
                            liHeight: f,
                            headerHeight: m,
                            searchHeight: g,
                            actionsHeight: v,
                            doneButtonHeight: y,
                            dividerHeight: b,
                            menuPadding: w,
                            menuExtras: T
                        }
                    }
                }, setSize: function () {
                    if (this.findLis(), this.liHeight(), this.options.header && this.$menu.css("padding-top", 0), this.options.size !== !1) {
                        var e, i, n, r, s = this, o = this.$menu, a = this.$menuInner, l = t(window),
                            h = this.$newElement[0].offsetHeight, c = this.sizeInfo.liHeight,
                            u = this.sizeInfo.headerHeight, p = this.sizeInfo.searchHeight,
                            d = this.sizeInfo.actionsHeight, f = this.sizeInfo.doneButtonHeight,
                            m = this.sizeInfo.dividerHeight, g = this.sizeInfo.menuPadding,
                            v = this.sizeInfo.menuExtras, y = this.options.hideDisabled ? ".disabled" : "",
                            b = function () {
                                n = s.$newElement.offset().top - l.scrollTop(), r = l.height() - n - h
                            };
                        if (b(), "auto" === this.options.size) {
                            var x = function () {
                                var l, h = function (e, i) {
                                        return function (n) {
                                            return i ? n.classList ? n.classList.contains(e) : t(n).hasClass(e) : !(n.classList ? n.classList.contains(e) : t(n).hasClass(e))
                                        }
                                    }, m = s.$menuInner[0].getElementsByTagName("li"),
                                    y = Array.prototype.filter ? Array.prototype.filter.call(m, h("hidden", !1)) : s.$lis.not(".hidden"),
                                    x = Array.prototype.filter ? Array.prototype.filter.call(y, h("dropdown-header", !0)) : y.filter(".dropdown-header");
                                b(), e = r - v, s.options.container ? (o.data("height") || o.data("height", o.height()), i = o.data("height")) : i = o.height(), s.options.dropupAuto && s.$newElement.toggleClass("dropup", n > r && e - v < i), s.$newElement.hasClass("dropup") && (e = n - v), l = y.length + x.length > 3 ? 3 * c + v - 2 : 0, o.css({
                                    "max-height": e + "px",
                                    overflow: "hidden",
                                    "min-height": l + u + p + d + f + "px"
                                }), a.css({
                                    "max-height": e - u - p - d - f - g + "px",
                                    "overflow-y": "auto",
                                    "min-height": Math.max(l - g, 0) + "px"
                                })
                            };
                            x(), this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize", x), l.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize", x)
                        } else if (this.options.size && "auto" != this.options.size && this.$lis.not(y).length > this.options.size) {
                            var _ = this.$lis.not(".divider").not(y).children().slice(0, this.options.size).last().parent().index(),
                                w = this.$lis.slice(0, _ + 1).filter(".divider").length;
                            e = c * this.options.size + w * m + g, s.options.container ? (o.data("height") || o.data("height", o.height()), i = o.data("height")) : i = o.height(), s.options.dropupAuto && this.$newElement.toggleClass("dropup", n > r && e - v < i), o.css({
                                "max-height": e + u + p + d + f + "px",
                                overflow: "hidden",
                                "min-height": ""
                            }), a.css({"max-height": e - g + "px", "overflow-y": "auto", "min-height": ""})
                        }
                    }
                }, setWidth: function () {
                    if ("auto" === this.options.width) {
                        this.$menu.css("min-width", "0");
                        var t = this.$menu.parent().clone().appendTo("body"),
                            e = this.options.container ? this.$newElement.clone().appendTo("body") : t,
                            i = t.children(".dropdown-menu").outerWidth(),
                            n = e.css("width", "auto").children("button").outerWidth();
                        t.remove(), e.remove(), this.$newElement.css("width", Math.max(i, n) + "px")
                    } else "fit" === this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", ""));
                    this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement.removeClass("fit-width")
                }, selectPosition: function () {
                    var e, i, n = this, r = t('<div class="bs-container" />'), s = function (t) {
                        r.addClass(t.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass("dropup", t.hasClass("dropup")), e = t.offset(), i = t.hasClass("dropup") ? 0 : t[0].offsetHeight, r.css({
                            top: e.top + i,
                            left: e.left,
                            width: t[0].offsetWidth
                        })
                    };
                    this.$newElement.on("click", function () {
                        n.isDisabled() || (s(t(this)), r.appendTo(n.options.container), r.toggleClass("open", !t(this).hasClass("open")), r.append(n.$menu))
                    }), t(window).on("resize scroll", function () {
                        s(n.$newElement)
                    }), this.$element.on("hide.bs.select", function () {
                        n.$menu.data("height", n.$menu.height()), r.detach()
                    })
                }, setSelected: function (t, e, i) {
                    i || (i = this.findLis().eq(this.liObj[t])), i.toggleClass("selected", e)
                }, setDisabled: function (t, e, i) {
                    i || (i = this.findLis().eq(this.liObj[t])), e ? i.addClass("disabled").children("a").attr("href", "#").attr("tabindex", -1) : i.removeClass("disabled").children("a").removeAttr("href").attr("tabindex", 0)
                }, isDisabled: function () {
                    return this.$element[0].disabled
                }, checkDisabled: function () {
                    var t = this;
                    this.isDisabled() ? (this.$newElement.addClass("disabled"), this.$button.addClass("disabled").attr("tabindex", -1)) : (this.$button.hasClass("disabled") && (this.$newElement.removeClass("disabled"), this.$button.removeClass("disabled")), this.$button.attr("tabindex") != -1 || this.$element.data("tabindex") || this.$button.removeAttr("tabindex")), this.$button.click(function () {
                        return !t.isDisabled()
                    })
                }, tabIndex: function () {
                    this.$element.is("[tabindex]") && (this.$element.data("tabindex", this.$element.attr("tabindex")), this.$button.attr("tabindex", this.$element.data("tabindex")))
                }, clickListener: function () {
                    var e = this, i = t(document);
                    this.$newElement.on("touchstart.dropdown", ".dropdown-menu", function (t) {
                        t.stopPropagation()
                    }), i.data("spaceSelect", !1), this.$button.on("keyup", function (t) {
                        /(32)/.test(t.keyCode.toString(10)) && i.data("spaceSelect") && (t.preventDefault(), i.data("spaceSelect", !1))
                    }), this.$newElement.on("click", function () {
                        e.setSize(), e.$element.on("shown.bs.select", function () {
                            if (e.options.liveSearch || e.multiple) {
                                if (!e.multiple) {
                                    var t = e.liObj[e.$element[0].selectedIndex];
                                    if ("number" != typeof t || e.options.size === !1) return;
                                    var i = e.$lis.eq(t)[0].offsetTop - e.$menuInner[0].offsetTop;
                                    i = i - e.$menuInner[0].offsetHeight / 2 + e.sizeInfo.liHeight / 2, e.$menuInner[0].scrollTop = i
                                }
                            } else e.$menuInner.find(".selected a").focus()
                        })
                    }), this.$menuInner.on("click", "li a", function (i) {
                        var n = t(this), r = n.parent().data("originalIndex"), s = e.$element.val(),
                            o = e.$element.prop("selectedIndex");
                        if (e.multiple && i.stopPropagation(), i.preventDefault(), !e.isDisabled() && !n.parent().hasClass("disabled")) {
                            var a = e.$element.find("option"), l = a.eq(r), h = l.prop("selected"),
                                c = l.parent("optgroup"), u = e.options.maxOptions, p = c.data("maxOptions") || !1;
                            if (e.multiple) {
                                if (l.prop("selected", !h), e.setSelected(r, !h), n.blur(), u !== !1 || p !== !1) {
                                    var d = u < a.filter(":selected").length, f = p < c.find("option:selected").length;
                                    if (u && d || p && f) if (u && 1 == u) a.prop("selected", !1), l.prop("selected", !0), e.$menuInner.find(".selected").removeClass("selected"), e.setSelected(r, !0); else if (p && 1 == p) {
                                        c.find("option:selected").prop("selected", !1), l.prop("selected", !0);
                                        var m = n.parent().data("optgroup");
                                        e.$menuInner.find('[data-optgroup="' + m + '"]').removeClass("selected"), e.setSelected(r, !0)
                                    } else {
                                        var g = "function" == typeof e.options.maxOptionsText ? e.options.maxOptionsText(u, p) : e.options.maxOptionsText,
                                            v = g[0].replace("{n}", u), y = g[1].replace("{n}", p),
                                            b = t('<div class="notify"></div>');
                                        g[2] && (v = v.replace("{var}", g[2][u > 1 ? 0 : 1]), y = y.replace("{var}", g[2][p > 1 ? 0 : 1])), l.prop("selected", !1), e.$menu.append(b), u && d && (b.append(t("<div>" + v + "</div>")), e.$element.trigger("maxReached.bs.select")), p && f && (b.append(t("<div>" + y + "</div>")), e.$element.trigger("maxReachedGrp.bs.select")), setTimeout(function () {
                                            e.setSelected(r, !1)
                                        }, 10), b.delay(750).fadeOut(300, function () {
                                            t(this).remove()
                                        })
                                    }
                                }
                            } else a.prop("selected", !1), l.prop("selected", !0), e.$menuInner.find(".selected").removeClass("selected"), e.setSelected(r, !0);
                            e.multiple ? e.options.liveSearch && e.$searchbox.focus() : e.$button.focus(), (s != e.$element.val() && e.multiple || o != e.$element.prop("selectedIndex") && !e.multiple) && (e.$element.triggerNative("change"), e.$element.trigger("changed.bs.select", [r, l.prop("selected"), h]))
                        }
                    }), this.$menu.on("click", "li.disabled a, .popover-title, .popover-title :not(.close)", function (i) {
                        i.currentTarget == this && (i.preventDefault(), i.stopPropagation(), e.options.liveSearch && !t(i.target).hasClass("close") ? e.$searchbox.focus() : e.$button.focus())
                    }), this.$menuInner.on("click", ".divider, .dropdown-header", function (t) {
                        t.preventDefault(), t.stopPropagation(), e.options.liveSearch ? e.$searchbox.focus() : e.$button.focus()
                    }), this.$menu.on("click", ".popover-title .close", function () {
                        e.$button.click()
                    }), this.$searchbox.on("click", function (t) {
                        t.stopPropagation()
                    }), this.$menu.on("click", ".actions-btn", function (i) {
                        e.options.liveSearch ? e.$searchbox.focus() : e.$button.focus(), i.preventDefault(), i.stopPropagation(), t(this).hasClass("bs-select-all") ? e.selectAll() : e.deselectAll(), e.$element.triggerNative("change")
                    }), this.$element.change(function () {
                        e.render(!1)
                    })
                }, liveSearchListener: function () {
                    var n = this, r = t('<li class="no-results"></li>');
                    this.$newElement.on("click.dropdown.data-api touchstart.dropdown.data-api", function () {
                        n.$menuInner.find(".active").removeClass("active"), n.$searchbox.val() && (n.$searchbox.val(""), n.$lis.not(".is-hidden").removeClass("hidden"), r.parent().length && r.remove()), n.multiple || n.$menuInner.find(".selected").addClass("active"), setTimeout(function () {
                            n.$searchbox.focus()
                        }, 10)
                    }), this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api", function (t) {
                        t.stopPropagation()
                    }), this.$searchbox.on("input propertychange", function () {
                        if (n.$searchbox.val()) {
                            var s = n.$lis.not(".is-hidden").removeClass("hidden").children("a");
                            s = n.options.liveSearchNormalize ? s.not(":a" + n._searchStyle() + '("' + e(n.$searchbox.val()) + '")') : s.not(":" + n._searchStyle() + '("' + n.$searchbox.val() + '")'), s.parent().addClass("hidden"), n.$lis.filter(".dropdown-header").each(function () {
                                var e = t(this), i = e.data("optgroup");
                                0 === n.$lis.filter("[data-optgroup=" + i + "]").not(e).not(".hidden").length && (e.addClass("hidden"), n.$lis.filter("[data-optgroup=" + i + "div]").addClass("hidden"))
                            });
                            var o = n.$lis.not(".hidden");
                            o.each(function (e) {
                                var i = t(this);
                                i.hasClass("divider") && (i.index() === o.first().index() || i.index() === o.last().index() || o.eq(e + 1).hasClass("divider")) && i.addClass("hidden")
                            }), n.$lis.not(".hidden, .no-results").length ? r.parent().length && r.remove() : (r.parent().length && r.remove(), r.html(n.options.noneResultsText.replace("{0}", '"' + i(n.$searchbox.val()) + '"')).show(), n.$menuInner.append(r))
                        } else n.$lis.not(".is-hidden").removeClass("hidden"), r.parent().length && r.remove();
                        n.$lis.filter(".active").removeClass("active"), n.$searchbox.val() && n.$lis.not(".hidden, .divider, .dropdown-header").eq(0).addClass("active").children("a").focus(), t(this).focus()
                    })
                }, _searchStyle: function () {
                    var t = {begins: "ibegins", startsWith: "ibegins"};
                    return t[this.options.liveSearchStyle] || "icontains"
                }, val: function (t) {
                    return "undefined" != typeof t ? (this.$element.val(t), this.render(), this.$element) : this.$element.val()
                }, changeAll: function (e) {
                    "undefined" == typeof e && (e = !0), this.findLis();
                    for (var i = this.$element.find("option"), n = this.$lis.not(".divider, .dropdown-header, .disabled, .hidden").toggleClass("selected", e), r = n.length, s = [], o = 0; o < r; o++) {
                        var a = n[o].getAttribute("data-original-index");
                        s[s.length] = i.eq(a)[0]
                    }
                    t(s).prop("selected", e), this.render(!1)
                }, selectAll: function () {
                    return this.changeAll(!0)
                }, deselectAll: function () {
                    return this.changeAll(!1)
                }, keydown: function (i) {
                    var n, r, s, o, a, l, h, c, u, p = t(this), d = p.is("input") ? p.parent().parent() : p.parent(),
                        f = d.data("this"), m = ":not(.disabled, .hidden, .dropdown-header, .divider)", g = {
                            32: " ",
                            48: "0",
                            49: "1",
                            50: "2",
                            51: "3",
                            52: "4",
                            53: "5",
                            54: "6",
                            55: "7",
                            56: "8",
                            57: "9",
                            59: ";",
                            65: "a",
                            66: "b",
                            67: "c",
                            68: "d",
                            69: "e",
                            70: "f",
                            71: "g",
                            72: "h",
                            73: "i",
                            74: "j",
                            75: "k",
                            76: "l",
                            77: "m",
                            78: "n",
                            79: "o",
                            80: "p",
                            81: "q",
                            82: "r",
                            83: "s",
                            84: "t",
                            85: "u",
                            86: "v",
                            87: "w",
                            88: "x",
                            89: "y",
                            90: "z",
                            96: "0",
                            97: "1",
                            98: "2",
                            99: "3",
                            100: "4",
                            101: "5",
                            102: "6",
                            103: "7",
                            104: "8",
                            105: "9"
                        };
                    if (f.options.liveSearch && (d = p.parent().parent()), f.options.container && (d = f.$menu), n = t("[role=menu] li", d), u = f.$menu.parent().hasClass("open"), !u && (i.keyCode >= 48 && i.keyCode <= 57 || i.keyCode >= 96 && i.keyCode <= 105 || i.keyCode >= 65 && i.keyCode <= 90) && (f.options.container ? f.$newElement.trigger("click") : (f.setSize(), f.$menu.parent().addClass("open"), u = !0), f.$searchbox.focus()), f.options.liveSearch && (/(^9$|27)/.test(i.keyCode.toString(10)) && u && 0 === f.$menu.find(".active").length && (i.preventDefault(), f.$menu.parent().removeClass("open"), f.options.container && f.$newElement.removeClass("open"), f.$button.focus()), n = t("[role=menu] li" + m, d), p.val() || /(38|40)/.test(i.keyCode.toString(10)) || 0 === n.filter(".active").length && (n = f.$menuInner.find("li"), n = f.options.liveSearchNormalize ? n.filter(":a" + f._searchStyle() + "(" + e(g[i.keyCode]) + ")") : n.filter(":" + f._searchStyle() + "(" + g[i.keyCode] + ")"))), n.length) {
                        if (/(38|40)/.test(i.keyCode.toString(10))) r = n.index(n.find("a").filter(":focus").parent()), o = n.filter(m).first().index(), a = n.filter(m).last().index(), s = n.eq(r).nextAll(m).eq(0).index(), l = n.eq(r).prevAll(m).eq(0).index(), h = n.eq(s).prevAll(m).eq(0).index(), f.options.liveSearch && (n.each(function (e) {
                            t(this).hasClass("disabled") || t(this).data("index", e)
                        }), r = n.index(n.filter(".active")), o = n.first().data("index"), a = n.last().data("index"), s = n.eq(r).nextAll().eq(0).data("index"), l = n.eq(r).prevAll().eq(0).data("index"), h = n.eq(s).prevAll().eq(0).data("index")), c = p.data("prevIndex"), 38 == i.keyCode ? (f.options.liveSearch && r--, r != h && r > l && (r = l), r < o && (r = o), r == c && (r = a)) : 40 == i.keyCode && (f.options.liveSearch && r++, r == -1 && (r = 0), r != h && r < s && (r = s), r > a && (r = a), r == c && (r = o)), p.data("prevIndex", r), f.options.liveSearch ? (i.preventDefault(), p.hasClass("dropdown-toggle") || (n.removeClass("active").eq(r).addClass("active").children("a").focus(), p.focus())) : n.eq(r).children("a").focus(); else if (!p.is("input")) {
                            var v, y, b = [];
                            n.each(function () {
                                t(this).hasClass("disabled") || t.trim(t(this).children("a").text().toLowerCase()).substring(0, 1) == g[i.keyCode] && b.push(t(this).index())
                            }), v = t(document).data("keycount"), v++, t(document).data("keycount", v), y = t.trim(t(":focus").text().toLowerCase()).substring(0, 1), y != g[i.keyCode] ? (v = 1, t(document).data("keycount", v)) : v >= b.length && (t(document).data("keycount", 0), v > b.length && (v = 1)), n.eq(b[v - 1]).children("a").focus()
                        }
                        if ((/(13|32)/.test(i.keyCode.toString(10)) || /(^9$)/.test(i.keyCode.toString(10)) && f.options.selectOnTab) && u) {
                            if (/(32)/.test(i.keyCode.toString(10)) || i.preventDefault(), f.options.liveSearch) /(32)/.test(i.keyCode.toString(10)) || (f.$menuInner.find(".active a").click(), p.focus()); else {
                                var x = t(":focus");
                                x.click(), x.focus(), i.preventDefault(), t(document).data("spaceSelect", !0)
                            }
                            t(document).data("keycount", 0)
                        }
                        (/(^9$|27)/.test(i.keyCode.toString(10)) && u && (f.multiple || f.options.liveSearch) || /(27)/.test(i.keyCode.toString(10)) && !u) && (f.$menu.parent().removeClass("open"), f.options.container && f.$newElement.removeClass("open"), f.$button.focus())
                    }
                }, mobile: function () {
                    this.$element.addClass("mobile-device").appendTo(this.$newElement), this.options.container && this.$menu.hide()
                }, refresh: function () {
                    this.$lis = null, this.liObj = {}, this.reloadLi(), this.render(), this.checkDisabled(), this.liHeight(!0), this.setStyle(), this.setWidth(), this.$lis && this.$searchbox.trigger("propertychange"), this.$element.trigger("refreshed.bs.select")
                }, hide: function () {
                    this.$newElement.hide()
                }, show: function () {
                    this.$newElement.show()
                }, remove: function () {
                    this.$newElement.remove(), this.$element.remove()
                }
            };
            var s = t.fn.selectpicker;
            t.fn.selectpicker = n, t.fn.selectpicker.Constructor = r, t.fn.selectpicker.noConflict = function () {
                return t.fn.selectpicker = s, this
            }, t(document).data("keycount", 0).on("keydown", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input', r.prototype.keydown).on("focusin.modal", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input', function (t) {
                t.stopPropagation()
            }), t(window).on("load.bs.select.data-api", function () {
                t(".selectpicker").each(function () {
                    var e = t(this);
                    n.call(e, e.data())
                })
            })
        }(t)
    }), function (t, e, i, n) {
    function r(e, i) {
        this.settings = null, this.options = t.extend({}, r.Defaults, i), this.$element = t(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {start: null, current: null},
            direction: null
        }, this._states = {
            current: {},
            tags: {initializing: ["busy"], animating: ["busy"], dragging: ["interacting"]}
        }, t.each(["onResize", "onThrottledResize"], t.proxy(function (e, i) {
            this._handlers[i] = t.proxy(this[i], this)
        }, this)), t.each(r.Plugins, t.proxy(function (t, e) {
            this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
        }, this)), t.each(r.Workers, t.proxy(function (e, i) {
            this._pipe.push({filter: i.filter, run: t.proxy(i.run, this)})
        }, this)), this.setup(), this.initialize()
    }

    r.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: e,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    }, r.Width = {Default: "default", Inner: "inner", Outer: "outer"}, r.Type = {
        Event: "event",
        State: "state"
    }, r.Plugins = {}, r.Workers = [{
        filter: ["width", "settings"], run: function () {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function (t) {
            t.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"], run: function () {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"], run: function (t) {
            var e = this.settings.margin || "", i = !this.settings.autoWidth, n = this.settings.rtl,
                r = {width: "auto", "margin-left": n ? e : "", "margin-right": n ? "" : e};
            !i && this.$stage.children().css(r), t.css = r
        }
    }, {
        filter: ["width", "items", "settings"], run: function (t) {
            var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin, i = null,
                n = this._items.length, r = !this.settings.autoWidth, s = [];
            for (t.items = {
                merge: !1,
                width: e
            }; n--;) i = this._mergers[n], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, t.items.merge = i > 1 || t.items.merge, s[n] = r ? e * i : this._items[n].width();
            this._widths = s
        }
    }, {
        filter: ["items", "settings"], run: function () {
            var e = [], i = this._items, n = this.settings, r = Math.max(2 * n.items, 4),
                s = 2 * Math.ceil(i.length / 2), o = n.loop && i.length ? n.rewind ? r : Math.max(r, s) : 0, a = "",
                l = "";
            for (o /= 2; o--;) e.push(this.normalize(e.length / 2, !0)), a += i[e[e.length - 1]][0].outerHTML, e.push(this.normalize(i.length - 1 - (e.length - 1) / 2, !0)), l = i[e[e.length - 1]][0].outerHTML + l;
            this._clones = e, t(a).addClass("cloned").appendTo(this.$stage), t(l).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"], run: function () {
            for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, i = -1, n = 0, r = 0, s = []; ++i < e;) n = s[i - 1] || 0, r = this._widths[this.relative(i)] + this.settings.margin, s.push(n + r * t);
            this._coordinates = s
        }
    }, {
        filter: ["width", "items", "settings"], run: function () {
            var t = this.settings.stagePadding, e = this._coordinates, i = {
                width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                "padding-left": t || "",
                "padding-right": t || ""
            };
            this.$stage.css(i)
        }
    }, {
        filter: ["width", "items", "settings"], run: function (t) {
            var e = this._coordinates.length, i = !this.settings.autoWidth, n = this.$stage.children();
            if (i && t.items.merge) for (; e--;) t.css.width = this._widths[this.relative(e)], n.eq(e).css(t.css); else i && (t.css.width = t.items.width, n.css(t.css))
        }
    }, {
        filter: ["items"], run: function () {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"], run: function (t) {
            t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
        }
    }, {
        filter: ["position"], run: function () {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"], run: function () {
            var t, e, i, n, r = this.settings.rtl ? 1 : -1, s = 2 * this.settings.stagePadding,
                o = this.coordinates(this.current()) + s, a = o + this.width() * r, l = [];
            for (i = 0, n = this._coordinates.length; i < n; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + s * r, (this.op(t, "<=", o) && this.op(t, ">", a) || this.op(e, "<", o) && this.op(e, ">", a)) && l.push(i);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
        }
    }], r.prototype.initialize = function () {
        if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
            var e, i, r;
            e = this.$element.find("img"), i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : n, r = this.$element.children(i).width(), e.length && r <= 0 && this.preloadAutoWidthImages(e)
        }
        this.$element.addClass(this.options.loadingClass), this.$stage = t("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, r.prototype.setup = function () {
        var e = this.viewport(), i = this.options.responsive, n = -1, r = null;
        i ? (t.each(i, function (t) {
            t <= e && t > n && (n = Number(t))
        }), r = t.extend({}, this.options, i[n]), delete r.responsive, r.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + n))) : r = t.extend({}, this.options), null !== this.settings && this._breakpoint === n || (this.trigger("change", {
            property: {
                name: "settings",
                value: r
            }
        }), this._breakpoint = n, this.settings = r, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        }))
    }, r.prototype.optionsLogic = function () {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, r.prototype.prepare = function (e) {
        var i = this.trigger("prepare", {content: e});
        return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", {content: i.data}), i.data
    }, r.prototype.update = function () {
        for (var e = 0, i = this._pipe.length, n = t.proxy(function (t) {
            return this[t]
        }, this._invalidated), r = {}; e < i;) (this._invalidated.all || t.grep(this._pipe[e].filter, n).length > 0) && this._pipe[e].run(r), e++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid")
    }, r.prototype.width = function (t) {
        switch (t = t || r.Width.Default) {
            case r.Width.Inner:
            case r.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, r.prototype.refresh = function () {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, r.prototype.onThrottledResize = function () {
        e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, r.prototype.onResize = function () {
        return !!this._items.length && (this._width !== this.$element.width() && (!!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
    }, r.prototype.registerEventHandlers = function () {
        t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(e, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
            return !1
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this)))
    }, r.prototype.onDragStart = function (e) {
        var n = null;
        3 !== e.which && (t.support.transform ? (n = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), n = {
            x: n[16 === n.length ? 12 : 4],
            y: n[16 === n.length ? 13 : 5]
        }) : (n = this.$stage.position(), n = {
            x: this.settings.rtl ? n.left + this.$stage.width() - this.width() + this.settings.margin : n.left,
            y: n.top
        }), this.is("animating") && (t.support.transform ? this.animate(n.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = t(e.target), this._drag.stage.start = n, this._drag.stage.current = n, this._drag.pointer = this.pointer(e), t(i).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)), t(i).one("mousemove.owl.core touchmove.owl.core", t.proxy(function (e) {
            var n = this.difference(this._drag.pointer, this.pointer(e));
            t(i).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), Math.abs(n.x) < Math.abs(n.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, r.prototype.onDragMove = function (t) {
        var e = null, i = null, n = null, r = this.difference(this._drag.pointer, this.pointer(t)),
            s = this.difference(this._drag.stage.start, r);
        this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - e, s.x = ((s.x - e) % i + i) % i + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), n = this.settings.pullDrag ? -1 * r.x / 5 : 0, s.x = Math.max(Math.min(s.x, e + n), i + n)), this._drag.stage.current = s, this.animate(s.x))
    }, r.prototype.onDragEnd = function (e) {
        var n = this.difference(this._drag.pointer, this.pointer(e)), r = this._drag.stage.current,
            s = n.x > 0 ^ this.settings.rtl ? "left" : "right";
        t(i).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== n.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(r.x, 0 !== n.x ? s : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = s, (Math.abs(n.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
            return !1
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, r.prototype.closest = function (e, i) {
        var n = -1, r = 30, s = this.width(), o = this.coordinates();
        return this.settings.freeDrag || t.each(o, t.proxy(function (t, a) {
            return "left" === i && e > a - r && e < a + r ? n = t : "right" === i && e > a - s - r && e < a - s + r ? n = t + 1 : this.op(e, "<", a) && this.op(e, ">", o[t + 1] || a - s) && (n = "left" === i ? t + 1 : t), n === -1
        }, this)), this.settings.loop || (this.op(e, ">", o[this.minimum()]) ? n = e = this.minimum() : this.op(e, "<", o[this.maximum()]) && (n = e = this.maximum())), n
    }, r.prototype.animate = function (e) {
        var i = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), i && (this.enter("animating"), this.trigger("translate")), t.support.transform3d && t.support.transition ? this.$stage.css({
            transform: "translate3d(" + e + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s"
        }) : i ? this.$stage.animate({left: e + "px"}, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({left: e + "px"})
    }, r.prototype.is = function (t) {
        return this._states.current[t] && this._states.current[t] > 0
    }, r.prototype.current = function (t) {
        if (t === n) return this._current;
        if (0 === this._items.length) return n;
        if (t = this.normalize(t), this._current !== t) {
            var e = this.trigger("change", {property: {name: "position", value: t}});
            e.data !== n && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, r.prototype.invalidate = function (e) {
        return "string" === t.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), t.map(this._invalidated, function (t, e) {
            return e
        })
    }, r.prototype.reset = function (t) {
        t = this.normalize(t), t !== n && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
    }, r.prototype.normalize = function (t, e) {
        var i = this._items.length, r = e ? 0 : this._clones.length;
        return !this.isNumeric(t) || i < 1 ? t = n : (t < 0 || t >= i + r) && (t = ((t - r / 2) % i + i) % i + r / 2), t
    }, r.prototype.relative = function (t) {
        return t -= this._clones.length / 2, this.normalize(t, !0)
    }, r.prototype.maximum = function (t) {
        var e, i = this.settings, n = this._coordinates.length, r = Math.abs(this._coordinates[n - 1]) - this._width,
            s = -1;
        if (i.loop) n = this._clones.length / 2 + this._items.length - 1; else if (i.autoWidth || i.merge) for (; n - s > 1;) Math.abs(this._coordinates[e = n + s >> 1]) < r ? s = e : n = e; else n = i.center ? this._items.length - 1 : this._items.length - i.items;
        return t && (n -= this._clones.length / 2), Math.max(n, 0)
    }, r.prototype.minimum = function (t) {
        return t ? 0 : this._clones.length / 2
    }, r.prototype.items = function (t) {
        return t === n ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
    }, r.prototype.mergers = function (t) {
        return t === n ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
    }, r.prototype.clones = function (e) {
        var i = this._clones.length / 2, r = i + this._items.length, s = function (t) {
            return t % 2 === 0 ? r + t / 2 : i - (t + 1) / 2
        };
        return e === n ? t.map(this._clones, function (t, e) {
            return s(e)
        }) : t.map(this._clones, function (t, i) {
            return t === e ? s(i) : null
        })
    }, r.prototype.speed = function (t) {
        return t !== n && (this._speed = t), this._speed
    }, r.prototype.coordinates = function (e) {
        var i, r = 1, s = e - 1;
        return e === n ? t.map(this._coordinates, t.proxy(function (t, e) {
            return this.coordinates(e)
        }, this)) : (this.settings.center ? (this.settings.rtl && (r = -1, s = e + 1), i = this._coordinates[e], i += (this.width() - i + (this._coordinates[s] || 0)) / 2 * r) : i = this._coordinates[s] || 0, i = Math.ceil(i))
    }, r.prototype.duration = function (t, e, i) {
        return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
    }, r.prototype.to = function (t, e) {
        var i = this.current(), n = null, r = t - this.relative(i), s = (r > 0) - (r < 0), o = this._items.length,
            a = this.minimum(), l = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(r) > o / 2 && (r += s * -1 * o), t = i + r, n = ((t - a) % o + o) % o + a, n !== t && n - r <= l && n - r > 0 && (i = n - r, t = n, this.reset(i))) : this.settings.rewind ? (l += 1, t = (t % l + l) % l) : t = Math.max(a, Math.min(l, t)), this.speed(this.duration(i, t, e)), this.current(t), this.$element.is(":visible") && this.update()
    }, r.prototype.next = function (t) {
        t = t || !1, this.to(this.relative(this.current()) + 1, t)
    }, r.prototype.prev = function (t) {
        t = t || !1, this.to(this.relative(this.current()) - 1, t)
    }, r.prototype.onTransitionEnd = function (t) {
        return (t === n || (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) === this.$stage.get(0))) && (this.leave("animating"), void this.trigger("translated"))
    }, r.prototype.viewport = function () {
        var n;
        if (this.options.responsiveBaseElement !== e) n = t(this.options.responsiveBaseElement).width(); else if (e.innerWidth) n = e.innerWidth; else {
            if (!i.documentElement || !i.documentElement.clientWidth) throw"Can not detect viewport width.";
            n = i.documentElement.clientWidth
        }
        return n
    }, r.prototype.replace = function (e) {
        this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function () {
            return 1 === this.nodeType
        }).each(t.proxy(function (t, e) {
            e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, r.prototype.add = function (e, i) {
        var r = this.relative(this._current);
        i = i === n ? this._items.length : this.normalize(i, !0), e = e instanceof jQuery ? e : t(e), this.trigger("add", {
            content: e,
            position: i
        }), e = this.prepare(e), 0 === this._items.length || i === this._items.length ? (0 === this._items.length && this.$stage.append(e), 0 !== this._items.length && this._items[i - 1].after(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[i].before(e), this._items.splice(i, 0, e), this._mergers.splice(i, 0, 1 * e.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this._items[r] && this.reset(this._items[r].index()), this.invalidate("items"), this.trigger("added", {
            content: e,
            position: i
        })
    }, r.prototype.remove = function (t) {
        t = this.normalize(t, !0), t !== n && (this.trigger("remove", {
            content: this._items[t],
            position: t
        }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: t
        }))
    }, r.prototype.preloadAutoWidthImages = function (e) {
        e.each(t.proxy(function (e, i) {
            this.enter("pre-loading"), i = t(i), t(new Image).one("load", t.proxy(function (t) {
                i.attr("src", t.target.src), i.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina"))
        }, this))
    }, r.prototype.destroy = function () {
        this.$element.off(".owl.core"), this.$stage.off(".owl.core"), t(i).off(".owl.core"), this.settings.responsive !== !1 && (e.clearTimeout(this.resizeTimer), this.off(e, "resize", this._handlers.onThrottledResize));
        for (var n in this._plugins) this._plugins[n].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, r.prototype.op = function (t, e, i) {
        var n = this.settings.rtl;
        switch (e) {
            case"<":
                return n ? t > i : t < i;
            case">":
                return n ? t < i : t > i;
            case">=":
                return n ? t <= i : t >= i;
            case"<=":
                return n ? t >= i : t <= i
        }
    }, r.prototype.on = function (t, e, i, n) {
        t.addEventListener ? t.addEventListener(e, i, n) : t.attachEvent && t.attachEvent("on" + e, i)
    }, r.prototype.off = function (t, e, i, n) {
        t.removeEventListener ? t.removeEventListener(e, i, n) : t.detachEvent && t.detachEvent("on" + e, i)
    }, r.prototype.trigger = function (e, i, n, s, o) {
        var a = {item: {count: this._items.length, index: this.current()}},
            l = t.camelCase(t.grep(["on", e, n], function (t) {
                return t
            }).join("-").toLowerCase()),
            h = t.Event([e, "owl", n || "carousel"].join(".").toLowerCase(), t.extend({relatedTarget: this}, a, i));
        return this._supress[e] || (t.each(this._plugins, function (t, e) {
            e.onTrigger && e.onTrigger(h)
        }), this.register({
            type: r.Type.Event,
            name: e
        }), this.$element.trigger(h), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, h)), h
    }, r.prototype.enter = function (e) {
        t.each([e].concat(this._states.tags[e] || []), t.proxy(function (t, e) {
            this._states.current[e] === n && (this._states.current[e] = 0), this._states.current[e]++
        }, this))
    }, r.prototype.leave = function (e) {
        t.each([e].concat(this._states.tags[e] || []), t.proxy(function (t, e) {
            this._states.current[e]--
        }, this))
    }, r.prototype.register = function (e) {
        if (e.type === r.Type.Event) {
            if (t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl) {
                var i = t.event.special[e.name]._default;
                t.event.special[e.name]._default = function (t) {
                    return !i || !i.apply || t.namespace && t.namespace.indexOf("owl") !== -1 ? t.namespace && t.namespace.indexOf("owl") > -1 : i.apply(this, arguments)
                }, t.event.special[e.name].owl = !0
            }
        } else e.type === r.Type.State && (this._states.tags[e.name] ? this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags) : this._states.tags[e.name] = e.tags, this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy(function (i, n) {
            return t.inArray(i, this._states.tags[e.name]) === n
        }, this)))
    }, r.prototype.suppress = function (e) {
        t.each(e, t.proxy(function (t, e) {
            this._supress[e] = !0
        }, this))
    }, r.prototype.release = function (e) {
        t.each(e, t.proxy(function (t, e) {
            delete this._supress[e]
        }, this))
    }, r.prototype.pointer = function (t) {
        var i = {x: null, y: null};
        return t = t.originalEvent || t || e.event, t = t.touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t, t.pageX ? (i.x = t.pageX, i.y = t.pageY) : (i.x = t.clientX, i.y = t.clientY), i
    }, r.prototype.isNumeric = function (t) {
        return !isNaN(parseFloat(t))
    }, r.prototype.difference = function (t, e) {
        return {x: t.x - e.x, y: t.y - e.y}
    }, t.fn.owlCarousel = function (e) {
        var i = Array.prototype.slice.call(arguments, 1);
        return this.each(function () {
            var n = t(this), s = n.data("owl.carousel");
            s || (s = new r(this, "object" == typeof e && e), n.data("owl.carousel", s), t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (e, i) {
                s.register({
                    type: r.Type.Event,
                    name: i
                }), s.$element.on(i + ".owl.carousel.core", t.proxy(function (t) {
                    t.namespace && t.relatedTarget !== this && (this.suppress([i]), s[i].apply(this, [].slice.call(arguments, 1)), this.release([i]))
                }, s))
            })), "string" == typeof e && "_" !== e.charAt(0) && s[e].apply(s, i)
        })
    }, t.fn.owlCarousel.Constructor = r
}(window.Zepto || window.jQuery, window, document), function (t, e, i, n) {
    var r = function (e) {
        this._core = e, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        }, this._core.options = t.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    r.Defaults = {autoRefresh: !0, autoRefreshInterval: 500}, r.prototype.watch = function () {
        this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, r.prototype.refresh = function () {
        this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, r.prototype.destroy = function () {
        var t, i;
        e.clearInterval(this._interval);
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = r
}(window.Zepto || window.jQuery, window, document), function (t, e, i, n) {
    var r = function (e) {
        this._core = e, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy(function (e) {
                if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type)) for (var i = this._core.settings, r = i.center && Math.ceil(i.items / 2) || i.items, s = i.center && r * -1 || 0, o = (e.property && e.property.value !== n ? e.property.value : this._core.current()) + s, a = this._core.clones().length, l = t.proxy(function (t, e) {
                    this.load(e)
                }, this); s++ < r;) this.load(a / 2 + this._core.relative(o)), a && t.each(this._core.clones(this._core.relative(o)), l), o++
            }, this)
        }, this._core.options = t.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    r.Defaults = {lazyLoad: !1}, r.prototype.load = function (i) {
        var n = this._core.$stage.children().eq(i), r = n && n.find(".owl-lazy");
        !r || t.inArray(n.get(0), this._loaded) > -1 || (r.each(t.proxy(function (i, n) {
            var r, s = t(n), o = e.devicePixelRatio > 1 && s.attr("data-src-retina") || s.attr("data-src");
            this._core.trigger("load", {
                element: s,
                url: o
            }, "lazy"), s.is("img") ? s.one("load.owl.lazy", t.proxy(function () {
                s.css("opacity", 1), this._core.trigger("loaded", {element: s, url: o}, "lazy")
            }, this)).attr("src", o) : (r = new Image, r.onload = t.proxy(function () {
                s.css({"background-image": "url(" + o + ")", opacity: "1"}), this._core.trigger("loaded", {
                    element: s,
                    url: o
                }, "lazy")
            }, this), r.src = o)
        }, this)), this._loaded.push(n.get(0)))
    }, r.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Lazy = r
}(window.Zepto || window.jQuery, window, document), function (t, e, i, n) {
    var r = function (e) {
        this._core = e, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.autoHeight && this.update()
            }, this), "changed.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.autoHeight && "position" == t.property.name && this.update()
            }, this), "loaded.owl.lazy": t.proxy(function (t) {
                t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        }, this._core.options = t.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    r.Defaults = {autoHeight: !1, autoHeightClass: "owl-height"}, r.prototype.update = function () {
        var e = this._core._current, i = e + this._core.settings.items,
            n = this._core.$stage.children().toArray().slice(e, i), r = [], s = 0;
        t.each(n, function (e, i) {
            r.push(t(i).height())
        }), s = Math.max.apply(null, r), this._core.$stage.parent().height(s).addClass(this._core.settings.autoHeightClass)
    }, r.prototype.destroy = function () {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = r
}(window.Zepto || window.jQuery, window, document), function (t, e, i, n) {
    var r = function (e) {
        this._core = e, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.register({type: "state", name: "playing", tags: ["interacting"]})
            }, this), "resize.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
            }, this), "refreshed.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this), "changed.owl.carousel": t.proxy(function (t) {
                t.namespace && "position" === t.property.name && this._playing && this.stop()
            }, this), "prepared.owl.carousel": t.proxy(function (e) {
                if (e.namespace) {
                    var i = t(e.content).find(".owl-video");
                    i.length && (i.css("display", "none"), this.fetch(i, t(e.content)))
                }
            }, this)
        }, this._core.options = t.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function (t) {
            this.play(t)
        }, this))
    };
    r.Defaults = {video: !1, videoHeight: !1, videoWidth: !1}, r.prototype.fetch = function (t, e) {
        var i = function () {
                return t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube"
            }(), n = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
            r = t.attr("data-width") || this._core.settings.videoWidth,
            s = t.attr("data-height") || this._core.settings.videoHeight, o = t.attr("href");
        if (!o) throw new Error("Missing video URL.");
        if (n = o.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), n[3].indexOf("youtu") > -1) i = "youtube"; else if (n[3].indexOf("vimeo") > -1) i = "vimeo"; else {
            if (!(n[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
            i = "vzaar"
        }
        n = n[6], this._videos[o] = {
            type: i,
            id: n,
            width: r,
            height: s
        }, e.attr("data-video", o), this.thumbnail(t, this._videos[o])
    }, r.prototype.thumbnail = function (e, i) {
        var n, r, s, o = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"' : "",
            a = e.find("img"), l = "src", h = "", c = this._core.settings, u = function (t) {
                r = '<div class="owl-video-play-icon"></div>', n = c.lazyLoad ? '<div class="owl-video-tn ' + h + '" ' + l + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(n), e.after(r)
            };
        return e.wrap('<div class="owl-video-wrapper"' + o + "></div>"), this._core.settings.lazyLoad && (l = "data-src", h = "owl-lazy"), a.length ? (u(a.attr(l)), a.remove(), !1) : void("youtube" === i.type ? (s = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg", u(s)) : "vimeo" === i.type ? t.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (t) {
                s = t[0].thumbnail_large, u(s)
            }
        }) : "vzaar" === i.type && t.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (t) {
                s = t.framegrab_url, u(s)
            }
        }))
    }, r.prototype.stop = function () {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, r.prototype.play = function (e) {
        var i, n = t(e.target), r = n.closest("." + this._core.settings.itemClass),
            s = this._videos[r.attr("data-video")], o = s.width || "100%", a = s.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), r = this._core.items(this._core.relative(r.index())), this._core.reset(r.index()), "youtube" === s.type ? i = '<iframe width="' + o + '" height="' + a + '" src="//www.youtube.com/embed/' + s.id + "?autoplay=1&v=" + s.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === s.type ? i = '<iframe src="//player.vimeo.com/video/' + s.id + '?autoplay=1" width="' + o + '" height="' + a + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === s.type && (i = '<iframe frameborder="0"height="' + a + '"width="' + o + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + s.id + '/player?autoplay=true"></iframe>'), t('<div class="owl-video-frame">' + i + "</div>").insertAfter(r.find(".owl-video")), this._playing = r.addClass("owl-video-playing"))
    }, r.prototype.isInFullScreen = function () {
        var e = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
        return e && t(e).parent().hasClass("owl-video-frame")
    }, r.prototype.destroy = function () {
        var t, e;
        this._core.$element.off("click.owl.video");
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Video = r
}(window.Zepto || window.jQuery, window, document), function (t, e, i, n) {
    var r = function (e) {
        this.core = e, this.core.options = t.extend({}, r.Defaults, this.core.options), this.swapping = !0, this.previous = n, this.next = n, this.handlers = {
            "change.owl.carousel": t.proxy(function (t) {
                t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
            }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function (t) {
                t.namespace && (this.swapping = "translated" == t.type)
            }, this), "translate.owl.carousel": t.proxy(function (t) {
                t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    r.Defaults = {animateOut: !1, animateIn: !1}, r.prototype.swap = function () {
        if (1 === this.core.settings.items && t.support.animation && t.support.transition) {
            this.core.speed(0);
            var e, i = t.proxy(this.clear, this), n = this.core.$stage.children().eq(this.previous),
                r = this.core.$stage.children().eq(this.next), s = this.core.settings.animateIn,
                o = this.core.settings.animateOut;
            this.core.current() !== this.previous && (o && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), n.one(t.support.animation.end, i).css({left: e + "px"}).addClass("animated owl-animated-out").addClass(o)), s && r.one(t.support.animation.end, i).addClass("animated owl-animated-in").addClass(s))
        }
    }, r.prototype.clear = function (e) {
        t(e.target).css({left: ""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, r.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Animate = r
}(window.Zepto || window.jQuery, window, document), function (t, e, i, n) {
    var r = function (e) {
        this._core = e, this._timeout = null, this._paused = !1, this._handlers = {
            "changed.owl.carousel": t.proxy(function (t) {
                t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
            }, this), "initialized.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.autoplay && this.play()
            }, this), "play.owl.autoplay": t.proxy(function (t, e, i) {
                t.namespace && this.play(e, i)
            }, this), "stop.owl.autoplay": t.proxy(function (t) {
                t.namespace && this.stop()
            }, this), "mouseover.owl.autoplay": t.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this), "mouseleave.owl.autoplay": t.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this), "touchstart.owl.core": t.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this), "touchend.owl.core": t.proxy(function () {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        }, this._core.$element.on(this._handlers), this._core.options = t.extend({}, r.Defaults, this._core.options)
    };
    r.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, r.prototype.play = function (t, e) {
        this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
    }, r.prototype._getNextTimeout = function (n, r) {
        return this._timeout && e.clearTimeout(this._timeout), e.setTimeout(t.proxy(function () {
            this._paused || this._core.is("busy") || this._core.is("interacting") || i.hidden || this._core.next(r || this._core.settings.autoplaySpeed)
        }, this), n || this._core.settings.autoplayTimeout)
    }, r.prototype._setAutoPlayInterval = function () {
        this._timeout = this._getNextTimeout()
    }, r.prototype.stop = function () {
        this._core.is("rotating") && (e.clearTimeout(this._timeout), this._core.leave("rotating"))
    }, r.prototype.pause = function () {
        this._core.is("rotating") && (this._paused = !0)
    }, r.prototype.destroy = function () {
        var t, e;
        this.stop();
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.autoplay = r
}(window.Zepto || window.jQuery, window, document), function (t, e, i, n) {
    "use strict";
    var r = function (e) {
        this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": t.proxy(function (e) {
                e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this), "added.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
            }, this), "remove.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
            }, this), "changed.owl.carousel": t.proxy(function (t) {
                t.namespace && "position" == t.property.name && this.draw()
            }, this), "initialized.owl.carousel": t.proxy(function (t) {
                t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }, this), "refreshed.owl.carousel": t.proxy(function (t) {
                t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }, this)
        }, this._core.options = t.extend({}, r.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    r.Defaults = {
        nav: !1,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    }, r.prototype.initialize = function () {
        var e, i = this._core.settings;
        this._controls.$relative = (i.navContainer ? t(i.navContainer) : t("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = t("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy(function (t) {
            this.prev(i.navSpeed)
        }, this)), this._controls.$next = t("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy(function (t) {
            this.next(i.navSpeed)
        }, this)), i.dotsData || (this._templates = [t("<div>").addClass(i.dotClass).append(t("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? t(i.dotsContainer) : t("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", t.proxy(function (e) {
            var n = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
            e.preventDefault(), this.to(n, i.dotsSpeed)
        }, this));
        for (e in this._overrides) this._core[e] = t.proxy(this[e], this)
    }, r.prototype.destroy = function () {
        var t, e, i, n;
        for (t in this._handlers) this.$element.off(t, this._handlers[t]);
        for (e in this._controls) this._controls[e].remove();
        for (n in this.overides) this._core[n] = this._overrides[n];
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, r.prototype.update = function () {
        var t, e, i, n = this._core.clones().length / 2, r = n + this._core.items().length, s = this._core.maximum(!0),
            o = this._core.settings, a = o.center || o.autoWidth || o.dotsData ? 1 : o.dotsEach || o.items;
        if ("page" !== o.slideBy && (o.slideBy = Math.min(o.slideBy, o.items)), o.dots || "page" == o.slideBy) for (this._pages = [], t = n, e = 0, i = 0; t < r; t++) {
            if (e >= a || 0 === e) {
                if (this._pages.push({start: Math.min(s, t - n), end: t - n + a - 1}), Math.min(s, t - n) === s) break;
                e = 0, ++i
            }
            e += this._core.mergers(this._core.relative(t))
        }
    }, r.prototype.draw = function () {
        var e, i = this._core.settings, n = this._core.items().length <= i.items,
            r = this._core.relative(this._core.current()), s = i.loop || i.rewind;
        this._controls.$relative.toggleClass("disabled", !i.nav || n), i.nav && (this._controls.$previous.toggleClass("disabled", !s && r <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !s && r >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !i.dots || n), i.dots && (e = this._pages.length - this._controls.$absolute.children().length, i.dotsData && 0 !== e ? this._controls.$absolute.html(this._templates.join("")) : e > 0 ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0])) : e < 0 && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"))
    }, r.prototype.onTrigger = function (e) {
        var i = this._core.settings;
        e.page = {
            index: t.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items)
        }
    }, r.prototype.current = function () {
        var e = this._core.relative(this._core.current());
        return t.grep(this._pages, t.proxy(function (t, i) {
            return t.start <= e && t.end >= e
        }, this)).pop()
    }, r.prototype.getPosition = function (e) {
        var i, n, r = this._core.settings;
        return "page" == r.slideBy ? (i = t.inArray(this.current(), this._pages), n = this._pages.length, e ? ++i : --i, i = this._pages[(i % n + n) % n].start) : (i = this._core.relative(this._core.current()), n = this._core.items().length, e ? i += r.slideBy : i -= r.slideBy), i
    }, r.prototype.next = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
    }, r.prototype.prev = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
    }, r.prototype.to = function (e, i, n) {
        var r;
        !n && this._pages.length ? (r = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % r + r) % r].start, i)) : t.proxy(this._overrides.to, this._core)(e, i)
    }, t.fn.owlCarousel.Constructor.Plugins.Navigation = r
}(window.Zepto || window.jQuery, window, document), function (t, e, i, n) {
    "use strict";
    var r = function (i) {
        this._core = i, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": t.proxy(function (i) {
                i.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
            }, this), "prepared.owl.carousel": t.proxy(function (e) {
                if (e.namespace) {
                    var i = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!i) return;
                    this._hashes[i] = e.content
                }
            }, this), "changed.owl.carousel": t.proxy(function (i) {
                if (i.namespace && "position" === i.property.name) {
                    var n = this._core.items(this._core.relative(this._core.current())),
                        r = t.map(this._hashes, function (t, e) {
                            return t === n ? e : null
                        }).join();
                    if (!r || e.location.hash.slice(1) === r) return;
                    e.location.hash = r
                }
            }, this)
        }, this._core.options = t.extend({}, r.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function (t) {
            var i = e.location.hash.substring(1), r = this._core.$stage.children(),
                s = this._hashes[i] && r.index(this._hashes[i]);
            s !== n && s !== this._core.current() && this._core.to(this._core.relative(s), !1, !0)
        }, this))
    };
    r.Defaults = {URLhashListener: !1}, r.prototype.destroy = function () {
        var i, n;
        t(e).off("hashchange.owl.navigation");
        for (i in this._handlers) this._core.$element.off(i, this._handlers[i]);
        for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Hash = r
}(window.Zepto || window.jQuery, window, document), function (t, e, i, n) {
    function r(e, i) {
        var r = !1, s = e.charAt(0).toUpperCase() + e.slice(1);
        return t.each((e + " " + a.join(s + " ") + s).split(" "), function (t, e) {
            if (o[e] !== n) return r = !i || e, !1
        }), r
    }

    function s(t) {
        return r(t, !0)
    }

    var o = t("<support>").get(0).style, a = "Webkit Moz O ms".split(" "), l = {
        transition: {
            end: {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                transition: "transitionend"
            }
        },
        animation: {
            end: {
                WebkitAnimation: "webkitAnimationEnd",
                MozAnimation: "animationend",
                OAnimation: "oAnimationEnd",
                animation: "animationend"
            }
        }
    }, h = {
        csstransforms: function () {
            return !!r("transform")
        }, csstransforms3d: function () {
            return !!r("perspective")
        }, csstransitions: function () {
            return !!r("transition")
        }, cssanimations: function () {
            return !!r("animation")
        }
    };
    h.csstransitions() && (t.support.transition = new String(s("transition")), t.support.transition.end = l.transition.end[t.support.transition]), h.cssanimations() && (t.support.animation = new String(s("animation")), t.support.animation.end = l.animation.end[t.support.animation]), h.csstransforms() && (t.support.transform = new String(s("transform")), t.support.transform3d = h.csstransforms3d())
}(window.Zepto || window.jQuery, window, document),
// Copyright (c) 2013 – 2017 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// build: 2017-02-07
    !function (t) {
        var e, i, n = "0.5.0", r = "hasOwnProperty", s = /[\.\/]/, o = /\s*,\s*/, a = "*", l = function (t, e) {
            return t - e
        }, h = {n: {}}, c = function () {
            for (var t = 0, e = this.length; e > t; t++) if ("undefined" != typeof this[t]) return this[t]
        }, u = function () {
            for (var t = this.length; --t;) if ("undefined" != typeof this[t]) return this[t]
        }, p = Object.prototype.toString, d = String, f = Array.isArray || function (t) {
            return t instanceof Array || "[object Array]" == p.call(t)
        };
        eve = function (t, n) {
            var r, s = i, o = Array.prototype.slice.call(arguments, 2), a = eve.listeners(t), h = 0, p = [], d = {},
                f = [], m = e;
            f.firstDefined = c, f.lastDefined = u, e = t, i = 0;
            for (var g = 0, v = a.length; v > g; g++) "zIndex" in a[g] && (p.push(a[g].zIndex), a[g].zIndex < 0 && (d[a[g].zIndex] = a[g]));
            for (p.sort(l); p[h] < 0;) if (r = d[p[h++]], f.push(r.apply(n, o)), i) return i = s, f;
            for (g = 0; v > g; g++) if (r = a[g], "zIndex" in r) if (r.zIndex == p[h]) {
                if (f.push(r.apply(n, o)), i) break;
                do if (h++, r = d[p[h]], r && f.push(r.apply(n, o)), i) break; while (r)
            } else d[r.zIndex] = r; else if (f.push(r.apply(n, o)), i) break;
            return i = s, e = m, f
        }, eve._events = h, eve.listeners = function (t) {
            var e, i, n, r, o, l, c, u, p = f(t) ? t : t.split(s), d = h, m = [d], g = [];
            for (r = 0, o = p.length; o > r; r++) {
                for (u = [], l = 0, c = m.length; c > l; l++) for (d = m[l].n, i = [d[p[r]], d[a]], n = 2; n--;) e = i[n], e && (u.push(e), g = g.concat(e.f || []));
                m = u
            }
            return g
        }, eve.separator = function (t) {
            t ? (t = d(t).replace(/(?=[\.\^\]\[\-])/g, "\\"), t = "[" + t + "]", s = new RegExp(t)) : s = /[\.\/]/
        }, eve.on = function (t, e) {
            if ("function" != typeof e) return function () {
            };
            for (var i = f(t) ? f(t[0]) ? t : [t] : d(t).split(o), n = 0, r = i.length; r > n; n++) !function (t) {
                for (var i, n = f(t) ? t : d(t).split(s), r = h, o = 0, a = n.length; a > o; o++) r = r.n, r = r.hasOwnProperty(n[o]) && r[n[o]] || (r[n[o]] = {n: {}});
                for (r.f = r.f || [], o = 0, a = r.f.length; a > o; o++) if (r.f[o] == e) {
                    i = !0;
                    break
                }
                !i && r.f.push(e)
            }(i[n]);
            return function (t) {
                +t == +t && (e.zIndex = +t)
            }
        }, eve.f = function (t) {
            var e = [].slice.call(arguments, 1);
            return function () {
                eve.apply(null, [t, null].concat(e).concat([].slice.call(arguments, 0)))
            }
        }, eve.stop = function () {
            i = 1
        }, eve.nt = function (t) {
            var i = f(e) ? e.join(".") : e;
            return t ? new RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(i) : i
        }, eve.nts = function () {
            return f(e) ? e : e.split(s)
        }, eve.off = eve.unbind = function (t, e) {
            if (!t) return void(eve._events = h = {n: {}});
            var i = f(t) ? f(t[0]) ? t : [t] : d(t).split(o);
            if (i.length > 1) for (var n = 0, l = i.length; l > n; n++) eve.off(i[n], e); else {
                i = f(t) ? t : d(t).split(s);
                var c, u, p, n, l, m, g, v = [h], y = [];
                for (n = 0, l = i.length; l > n; n++) for (m = 0; m < v.length; m += p.length - 2) {
                    if (p = [m, 1], c = v[m].n, i[n] != a) c[i[n]] && (p.push(c[i[n]]), y.unshift({
                        n: c,
                        name: i[n]
                    })); else for (u in c) c[r](u) && (p.push(c[u]), y.unshift({n: c, name: u}));
                    v.splice.apply(v, p)
                }
                for (n = 0, l = v.length; l > n; n++) for (c = v[n]; c.n;) {
                    if (e) {
                        if (c.f) {
                            for (m = 0, g = c.f.length; g > m; m++) if (c.f[m] == e) {
                                c.f.splice(m, 1);
                                break
                            }
                            !c.f.length && delete c.f
                        }
                        for (u in c.n) if (c.n[r](u) && c.n[u].f) {
                            var b = c.n[u].f;
                            for (m = 0, g = b.length; g > m; m++) if (b[m] == e) {
                                b.splice(m, 1);
                                break
                            }
                            !b.length && delete c.n[u].f
                        }
                    } else {
                        delete c.f;
                        for (u in c.n) c.n[r](u) && c.n[u].f && delete c.n[u].f
                    }
                    c = c.n
                }
                t:for (n = 0, l = y.length; l > n; n++) {
                    c = y[n];
                    for (u in c.n[c.name].f) continue t;
                    for (u in c.n[c.name].n) continue t;
                    delete c.n[c.name]
                }
            }
        }, eve.once = function (t, e) {
            var i = function () {
                return eve.off(t, i), e.apply(this, arguments)
            };
            return eve.on(t, i)
        }, eve.version = n, eve.toString = function () {
            return "You are running Eve " + n
        }, "undefined" != typeof module && module.exports ? module.exports = eve : "function" == typeof define && define.amd ? define("eve", [], function () {
            return eve
        }) : t.eve = eve
    }(this), function (t, e) {
    if ("function" == typeof define && define.amd) define(["eve"], function (i) {
        return e(t, i)
    }); else if ("undefined" != typeof exports) {
        var i = require("eve");
        module.exports = e(t, i)
    } else e(t, t.eve)
}(window || this, function (t, e) {
    var i = function (e) {
        var i, n = {},
            r = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function (t) {
                return setTimeout(t, 16, (new Date).getTime()), !0
            }, s = Array.isArray || function (t) {
                return t instanceof Array || "[object Array]" == Object.prototype.toString.call(t)
            }, o = 0, a = "M" + (+new Date).toString(36), l = function () {
                return a + (o++).toString(36)
            }, h = Date.now || function () {
                return +new Date
            }, c = function (t) {
                var e = this;
                if (null == t) return e.s;
                var i = e.s - t;
                e.b += e.dur * i, e.B += e.dur * i, e.s = t
            }, u = function (t) {
                var e = this;
                return null == t ? e.spd : void(e.spd = t)
            }, p = function (t) {
                var e = this;
                return null == t ? e.dur : (e.s = e.s * t / e.dur, void(e.dur = t))
            }, d = function () {
                var t = this;
                delete n[t.id], t.update(), e("mina.stop." + t.id, t)
            }, f = function () {
                var t = this;
                t.pdif || (delete n[t.id], t.update(), t.pdif = t.get() - t.b)
            }, m = function () {
                var t = this;
                t.pdif && (t.b = t.get() - t.pdif, delete t.pdif, n[t.id] = t, v())
            }, g = function () {
                var t, e = this;
                if (s(e.start)) {
                    t = [];
                    for (var i = 0, n = e.start.length; n > i; i++) t[i] = +e.start[i] + (e.end[i] - e.start[i]) * e.easing(e.s)
                } else t = +e.start + (e.end - e.start) * e.easing(e.s);
                e.set(t)
            }, v = function (t) {
                if (!t) return void(i || (i = r(v)));
                var s = 0;
                for (var o in n) if (n.hasOwnProperty(o)) {
                    var a = n[o], l = a.get();
                    s++, a.s = (l - a.b) / (a.dur / a.spd), a.s >= 1 && (delete n[o], a.s = 1, s--, function (t) {
                        setTimeout(function () {
                            e("mina.finish." + t.id, t)
                        })
                    }(a)), a.update()
                }
                i = !!s && r(v)
            }, y = function (t, e, i, r, s, o, a) {
                var h = {
                    id: l(),
                    start: t,
                    end: e,
                    b: i,
                    s: 0,
                    dur: r - i,
                    spd: 1,
                    get: s,
                    set: o,
                    easing: a || y.linear,
                    status: c,
                    speed: u,
                    duration: p,
                    stop: d,
                    pause: f,
                    resume: m,
                    update: g
                };
                n[h.id] = h;
                var b, x = 0;
                for (b in n) if (n.hasOwnProperty(b) && (x++, 2 == x)) break;
                return 1 == x && v(), h
            };
        return y.time = h, y.getById = function (t) {
            return n[t] || null
        }, y.linear = function (t) {
            return t
        }, y.easeout = function (t) {
            return Math.pow(t, 1.7)
        }, y.easein = function (t) {
            return Math.pow(t, .48)
        }, y.easeinout = function (t) {
            if (1 == t) return 1;
            if (0 == t) return 0;
            var e = .48 - t / 1.04, i = Math.sqrt(.1734 + e * e), n = i - e,
                r = Math.pow(Math.abs(n), 1 / 3) * (0 > n ? -1 : 1), s = -i - e,
                o = Math.pow(Math.abs(s), 1 / 3) * (0 > s ? -1 : 1), a = r + o + .5;
            return 3 * (1 - a) * a * a + a * a * a
        }, y.backin = function (t) {
            if (1 == t) return 1;
            var e = 1.70158;
            return t * t * ((e + 1) * t - e)
        }, y.backout = function (t) {
            if (0 == t) return 0;
            t -= 1;
            var e = 1.70158;
            return t * t * ((e + 1) * t + e) + 1
        }, y.elastic = function (t) {
            return t == !!t ? t : Math.pow(2, -10 * t) * Math.sin((t - .075) * (2 * Math.PI) / .3) + 1
        }, y.bounce = function (t) {
            var e, i = 7.5625, n = 2.75;
            return 1 / n > t ? e = i * t * t : 2 / n > t ? (t -= 1.5 / n, e = i * t * t + .75) : 2.5 / n > t ? (t -= 2.25 / n, e = i * t * t + .9375) : (t -= 2.625 / n, e = i * t * t + .984375), e
        }, t.mina = y, y
    }("undefined" == typeof e ? function () {
    } : e), n = function (t) {
        function i(t, e) {
            if (t) {
                if (t.nodeType) return w(t);
                if (r(t, "array") && i.set) return i.set.apply(i, t);
                if (t instanceof y) return t;
                if (null == e) try {
                    return t = C.doc.querySelector(String(t)), w(t)
                } catch (n) {
                    return null
                }
            }
            return t = null == t ? "100%" : t, e = null == e ? "100%" : e, new _(t, e)
        }

        function n(t, e) {
            if (e) {
                if ("#text" == t && (t = C.doc.createTextNode(e.text || e["#text"] || "")), "#comment" == t && (t = C.doc.createComment(e.text || e["#text"] || "")), "string" == typeof t && (t = n(t)), "string" == typeof e) return 1 == t.nodeType ? "xlink:" == e.substring(0, 6) ? t.getAttributeNS(Y, e.substring(6)) : "xml:" == e.substring(0, 4) ? t.getAttributeNS(U, e.substring(4)) : t.getAttribute(e) : "text" == e ? t.nodeValue : null;
                if (1 == t.nodeType) {
                    for (var i in e) if (e[S](i)) {
                        var r = k(e[i]);
                        r ? "xlink:" == i.substring(0, 6) ? t.setAttributeNS(Y, i.substring(6), r) : "xml:" == i.substring(0, 4) ? t.setAttributeNS(U, i.substring(4), r) : t.setAttribute(i, r) : t.removeAttribute(i)
                    }
                } else "text" in e && (t.nodeValue = e.text)
            } else t = C.doc.createElementNS(U, t);
            return t
        }

        function r(t, e) {
            return e = k.prototype.toLowerCase.call(e), "finite" == e ? isFinite(t) : !("array" != e || !(t instanceof Array || Array.isArray && Array.isArray(t))) || ("null" == e && null === t || e == typeof t && null !== t || "object" == e && t === Object(t) || M.call(t).slice(8, -1).toLowerCase() == e)
        }

        function s(t) {
            if ("function" == typeof t || Object(t) !== t) return t;
            var e = new t.constructor;
            for (var i in t) t[S](i) && (e[i] = s(t[i]));
            return e
        }

        function o(t, e) {
            for (var i = 0, n = t.length; n > i; i++) if (t[i] === e) return t.push(t.splice(i, 1)[0])
        }

        function a(t, e, i) {
            function n() {
                var r = Array.prototype.slice.call(arguments, 0), s = r.join("␀"), a = n.cache = n.cache || {},
                    l = n.count = n.count || [];
                return a[S](s) ? (o(l, s), i ? i(a[s]) : a[s]) : (l.length >= 1e3 && delete a[l.shift()], l.push(s), a[s] = t.apply(e, r), i ? i(a[s]) : a[s])
            }

            return n
        }

        function l(t, e, i, n, r, s) {
            if (null == r) {
                var o = t - i, a = e - n;
                return o || a ? (180 + 180 * D.atan2(-a, -o) / O + 360) % 360 : 0
            }
            return l(t, e, r, s) - l(i, n, r, s)
        }

        function h(t) {
            return t % 360 * O / 180
        }

        function c(t) {
            return 180 * t / O % 360
        }

        function u(t) {
            var e = [];
            return t = t.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function (t, i, n) {
                return n = n.split(/\s*,\s*|\s+/), "rotate" == i && 1 == n.length && n.push(0, 0), "scale" == i && (n.length > 2 ? n = n.slice(0, 2) : 2 == n.length && n.push(0, 0), 1 == n.length && n.push(n[0], 0, 0)), "skewX" == i ? e.push(["m", 1, 0, D.tan(h(n[0])), 1, 0, 0]) : "skewY" == i ? e.push(["m", 1, D.tan(h(n[0])), 0, 1, 0, 0]) : e.push([i.charAt(0)].concat(n)), t
            }), e
        }

        function p(t, e) {
            var n = tt(t), r = new i.Matrix;
            if (n) for (var s = 0, o = n.length; o > s; s++) {
                var a, l, h, c, u, p = n[s], d = p.length, f = k(p[0]).toLowerCase(), m = p[0] != f,
                    g = m ? r.invert() : 0;
                "t" == f && 2 == d ? r.translate(p[1], 0) : "t" == f && 3 == d ? m ? (a = g.x(0, 0), l = g.y(0, 0), h = g.x(p[1], p[2]), c = g.y(p[1], p[2]), r.translate(h - a, c - l)) : r.translate(p[1], p[2]) : "r" == f ? 2 == d ? (u = u || e, r.rotate(p[1], u.x + u.width / 2, u.y + u.height / 2)) : 4 == d && (m ? (h = g.x(p[2], p[3]), c = g.y(p[2], p[3]), r.rotate(p[1], h, c)) : r.rotate(p[1], p[2], p[3])) : "s" == f ? 2 == d || 3 == d ? (u = u || e, r.scale(p[1], p[d - 1], u.x + u.width / 2, u.y + u.height / 2)) : 4 == d ? m ? (h = g.x(p[2], p[3]), c = g.y(p[2], p[3]), r.scale(p[1], p[1], h, c)) : r.scale(p[1], p[1], p[2], p[3]) : 5 == d && (m ? (h = g.x(p[3], p[4]), c = g.y(p[3], p[4]), r.scale(p[1], p[2], h, c)) : r.scale(p[1], p[2], p[3], p[4])) : "m" == f && 7 == d && r.add(p[1], p[2], p[3], p[4], p[5], p[6])
            }
            return r
        }

        function d(t) {
            var e = t.node.ownerSVGElement && w(t.node.ownerSVGElement) || t.node.parentNode && w(t.node.parentNode) || i.select("svg") || i(0, 0),
                n = e.select("defs"), r = null != n && n.node;
            return r || (r = x("defs", e.node).node), r
        }

        function f(t) {
            return t.node.ownerSVGElement && w(t.node.ownerSVGElement) || i.select("svg")
        }

        function m(t, e, i) {
            function r(t) {
                if (null == t) return N;
                if (t == +t) return t;
                n(h, {width: t});
                try {
                    return h.getBBox().width
                } catch (e) {
                    return 0
                }
            }

            function s(t) {
                if (null == t) return N;
                if (t == +t) return t;
                n(h, {height: t});
                try {
                    return h.getBBox().height
                } catch (e) {
                    return 0
                }
            }

            function o(n, r) {
                null == e ? l[n] = r(t.attr(n) || 0) : n == e && (l = r(null == i ? t.attr(n) || 0 : i))
            }

            var a = f(t).node, l = {}, h = a.querySelector(".svg---mgr");
            switch (h || (h = n("rect"), n(h, {
                x: -9e9,
                y: -9e9,
                width: 10,
                height: 10,
                "class": "svg---mgr",
                fill: "none"
            }), a.appendChild(h)), t.type) {
                case"rect":
                    o("rx", r), o("ry", s);
                case"image":
                    o("width", r), o("height", s);
                case"text":
                    o("x", r), o("y", s);
                    break;
                case"circle":
                    o("cx", r), o("cy", s), o("r", r);
                    break;
                case"ellipse":
                    o("cx", r), o("cy", s), o("rx", r), o("ry", s);
                    break;
                case"line":
                    o("x1", r), o("x2", r), o("y1", s), o("y2", s);
                    break;
                case"marker":
                    o("refX", r), o("markerWidth", r), o("refY", s), o("markerHeight", s);
                    break;
                case"radialGradient":
                    o("fx", r), o("fy", s);
                    break;
                case"tspan":
                    o("dx", r), o("dy", s);
                    break;
                default:
                    o(e, r)
            }
            return a.removeChild(h), l
        }

        function v(t) {
            r(t, "array") || (t = Array.prototype.slice.call(arguments, 0));
            for (var e = 0, i = 0, n = this.node; this[e];) delete this[e++];
            for (e = 0; e < t.length; e++) "set" == t[e].type ? t[e].forEach(function (t) {
                n.appendChild(t.node)
            }) : n.appendChild(t[e].node);
            var s = n.childNodes;
            for (e = 0; e < s.length; e++) this[i++] = w(s[e]);
            return this
        }

        function y(t) {
            if (t.snap in W) return W[t.snap];
            var e;
            try {
                e = t.ownerSVGElement
            } catch (i) {
            }
            this.node = t, e && (this.paper = new _(e)), this.type = t.tagName || t.nodeName;
            var n = this.id = X(this);
            if (this.anims = {}, this._ = {transform: []}, t.snap = n, W[n] = this, "g" == this.type && (this.add = v), this.type in {
                    g: 1,
                    mask: 1,
                    pattern: 1,
                    symbol: 1
                }) for (var r in _.prototype) _.prototype[S](r) && (this[r] = _.prototype[r])
        }

        function b(t) {
            this.node = t
        }

        function x(t, e) {
            var i = n(t);
            e.appendChild(i);
            var r = w(i);
            return r
        }

        function _(t, e) {
            var i, r, s, o = _.prototype;
            if (t && t.tagName && "svg" == t.tagName.toLowerCase()) {
                if (t.snap in W) return W[t.snap];
                var a = t.ownerDocument;
                i = new y(t), r = t.getElementsByTagName("desc")[0], s = t.getElementsByTagName("defs")[0], r || (r = n("desc"), r.appendChild(a.createTextNode("Created with Snap")), i.node.appendChild(r)), s || (s = n("defs"), i.node.appendChild(s)), i.defs = s;
                for (var l in o) o[S](l) && (i[l] = o[l]);
                i.paper = i.root = i
            } else i = x("svg", C.doc.body), n(i.node, {height: e, version: 1.1, width: t, xmlns: U});
            return i
        }

        function w(t) {
            return t ? t instanceof y || t instanceof b ? t : t.tagName && "svg" == t.tagName.toLowerCase() ? new _(t) : t.tagName && "object" == t.tagName.toLowerCase() && "image/svg+xml" == t.type ? new _(t.contentDocument.getElementsByTagName("svg")[0]) : new y(t) : t
        }

        function T(t, e) {
            for (var i = 0, n = t.length; n > i; i++) {
                var r = {type: t[i].type, attr: t[i].attr()}, s = t[i].children();
                e.push(r), s.length && T(s, r.childNodes = [])
            }
        }

        i.version = "0.5.1", i.toString = function () {
            return "Snap v" + this.version
        }, i._ = {};
        var C = {win: t.window, doc: t.window.document};
        i._.glob = C;
        var S = "hasOwnProperty", k = String, E = parseFloat, A = parseInt, D = Math, F = D.max, $ = D.min, P = D.abs,
            O = (D.pow, D.PI), N = (D.round, ""), M = Object.prototype.toString,
            R = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
            I = (i._.separator = /[,\s]+/, /[\s]*,[\s]*/), L = {hs: 1, rg: 1},
            B = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
            j = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
            z = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\s]*,?[\s]*/gi, H = 0, q = "S" + (+new Date).toString(36),
            X = function (t) {
                return (t && t.type ? t.type : N) + q + (H++).toString(36)
            }, Y = "http://www.w3.org/1999/xlink", U = "http://www.w3.org/2000/svg", W = {};
        i.url = function (t) {
            return "url('#" + t + "')"
        }, i._.$ = n, i._.id = X, i.format = function () {
            var t = /\{([^\}]+)\}/g, e = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
                i = function (t, i, n) {
                    var r = n;
                    return i.replace(e, function (t, e, i, n, s) {
                        e = e || n, r && (e in r && (r = r[e]), "function" == typeof r && s && (r = r()))
                    }), r = (null == r || r == n ? t : r) + ""
                };
            return function (e, n) {
                return k(e).replace(t, function (t, e) {
                    return i(t, e, n)
                })
            }
        }(), i._.clone = s, i._.cacher = a, i.rad = h, i.deg = c, i.sin = function (t) {
            return D.sin(i.rad(t))
        }, i.tan = function (t) {
            return D.tan(i.rad(t))
        }, i.cos = function (t) {
            return D.cos(i.rad(t))
        }, i.asin = function (t) {
            return i.deg(D.asin(t))
        }, i.acos = function (t) {
            return i.deg(D.acos(t))
        }, i.atan = function (t) {
            return i.deg(D.atan(t))
        }, i.atan2 = function (t) {
            return i.deg(D.atan2(t))
        }, i.angle = l, i.len = function (t, e, n, r) {
            return Math.sqrt(i.len2(t, e, n, r))
        }, i.len2 = function (t, e, i, n) {
            return (t - i) * (t - i) + (e - n) * (e - n)
        }, i.closestPoint = function (t, e, i) {
            function n(t) {
                var n = t.x - e, r = t.y - i;
                return n * n + r * r
            }

            for (var r, s, o, a, l = t.node, h = l.getTotalLength(), c = h / l.pathSegList.numberOfItems * .125, u = 1 / 0, p = 0; h >= p; p += c) (a = n(o = l.getPointAtLength(p))) < u && (r = o, s = p, u = a);
            for (c *= .5; c > .5;) {
                var d, f, m, g, v, y;
                (m = s - c) >= 0 && (v = n(d = l.getPointAtLength(m))) < u ? (r = d, s = m, u = v) : (g = s + c) <= h && (y = n(f = l.getPointAtLength(g))) < u ? (r = f, s = g, u = y) : c *= .5
            }
            return r = {x: r.x, y: r.y, length: s, distance: Math.sqrt(u)}
        }, i.is = r, i.snapTo = function (t, e, i) {
            if (i = r(i, "finite") ? i : 10, r(t, "array")) {
                for (var n = t.length; n--;) if (P(t[n] - e) <= i) return t[n]
            } else {
                t = +t;
                var s = e % t;
                if (i > s) return e - s;
                if (s > t - i) return e - s + t
            }
            return e
        }, i.getRGB = a(function (t) {
            if (!t || (t = k(t)).indexOf("-") + 1) return {r: -1, g: -1, b: -1, hex: "none", error: 1, toString: Z};
            if ("none" == t) return {r: -1, g: -1, b: -1, hex: "none", toString: Z};
            if (!(L[S](t.toLowerCase().substring(0, 2)) || "#" == t.charAt()) && (t = V(t)), !t) return {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                error: 1,
                toString: Z
            };
            var e, n, s, o, a, l, h = t.match(R);
            return h ? (h[2] && (s = A(h[2].substring(5), 16), n = A(h[2].substring(3, 5), 16), e = A(h[2].substring(1, 3), 16)), h[3] && (s = A((a = h[3].charAt(3)) + a, 16), n = A((a = h[3].charAt(2)) + a, 16), e = A((a = h[3].charAt(1)) + a, 16)), h[4] && (l = h[4].split(I), e = E(l[0]), "%" == l[0].slice(-1) && (e *= 2.55), n = E(l[1]), "%" == l[1].slice(-1) && (n *= 2.55), s = E(l[2]), "%" == l[2].slice(-1) && (s *= 2.55), "rgba" == h[1].toLowerCase().slice(0, 4) && (o = E(l[3])), l[3] && "%" == l[3].slice(-1) && (o /= 100)), h[5] ? (l = h[5].split(I), e = E(l[0]), "%" == l[0].slice(-1) && (e /= 100), n = E(l[1]), "%" == l[1].slice(-1) && (n /= 100), s = E(l[2]), "%" == l[2].slice(-1) && (s /= 100), ("deg" == l[0].slice(-3) || "°" == l[0].slice(-1)) && (e /= 360), "hsba" == h[1].toLowerCase().slice(0, 4) && (o = E(l[3])), l[3] && "%" == l[3].slice(-1) && (o /= 100), i.hsb2rgb(e, n, s, o)) : h[6] ? (l = h[6].split(I), e = E(l[0]), "%" == l[0].slice(-1) && (e /= 100), n = E(l[1]), "%" == l[1].slice(-1) && (n /= 100), s = E(l[2]), "%" == l[2].slice(-1) && (s /= 100), ("deg" == l[0].slice(-3) || "°" == l[0].slice(-1)) && (e /= 360), "hsla" == h[1].toLowerCase().slice(0, 4) && (o = E(l[3])), l[3] && "%" == l[3].slice(-1) && (o /= 100), i.hsl2rgb(e, n, s, o)) : (e = $(D.round(e), 255), n = $(D.round(n), 255), s = $(D.round(s), 255), o = $(F(o, 0), 1), h = {
                r: e,
                g: n,
                b: s,
                toString: Z
            }, h.hex = "#" + (16777216 | s | n << 8 | e << 16).toString(16).slice(1), h.opacity = r(o, "finite") ? o : 1, h)) : {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                error: 1,
                toString: Z
            }
        }, i), i.hsb = a(function (t, e, n) {
            return i.hsb2rgb(t, e, n).hex
        }), i.hsl = a(function (t, e, n) {
            return i.hsl2rgb(t, e, n).hex
        }), i.rgb = a(function (t, e, i, n) {
            if (r(n, "finite")) {
                var s = D.round;
                return "rgba(" + [s(t), s(e), s(i), +n.toFixed(2)] + ")"
            }
            return "#" + (16777216 | i | e << 8 | t << 16).toString(16).slice(1)
        });
        var V = function (t) {
            var e = C.doc.getElementsByTagName("head")[0] || C.doc.getElementsByTagName("svg")[0], i = "rgb(255, 0, 0)";
            return (V = a(function (t) {
                if ("red" == t.toLowerCase()) return i;
                e.style.color = i, e.style.color = t;
                var n = C.doc.defaultView.getComputedStyle(e, N).getPropertyValue("color");
                return n == i ? null : n
            }))(t)
        }, G = function () {
            return "hsb(" + [this.h, this.s, this.b] + ")"
        }, Q = function () {
            return "hsl(" + [this.h, this.s, this.l] + ")"
        }, Z = function () {
            return 1 == this.opacity || null == this.opacity ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")"
        }, J = function (t, e, n) {
            if (null == e && r(t, "object") && "r" in t && "g" in t && "b" in t && (n = t.b, e = t.g, t = t.r), null == e && r(t, string)) {
                var s = i.getRGB(t);
                t = s.r, e = s.g, n = s.b
            }
            return (t > 1 || e > 1 || n > 1) && (t /= 255, e /= 255, n /= 255), [t, e, n]
        }, K = function (t, e, n, s) {
            t = D.round(255 * t), e = D.round(255 * e), n = D.round(255 * n);
            var o = {r: t, g: e, b: n, opacity: r(s, "finite") ? s : 1, hex: i.rgb(t, e, n), toString: Z};
            return r(s, "finite") && (o.opacity = s), o
        };
        i.color = function (t) {
            var e;
            return r(t, "object") && "h" in t && "s" in t && "b" in t ? (e = i.hsb2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.opacity = 1, t.hex = e.hex) : r(t, "object") && "h" in t && "s" in t && "l" in t ? (e = i.hsl2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.opacity = 1, t.hex = e.hex) : (r(t, "string") && (t = i.getRGB(t)), r(t, "object") && "r" in t && "g" in t && "b" in t && !("error" in t) ? (e = i.rgb2hsl(t), t.h = e.h, t.s = e.s, t.l = e.l, e = i.rgb2hsb(t), t.v = e.b) : (t = {hex: "none"}, t.r = t.g = t.b = t.h = t.s = t.v = t.l = -1, t.error = 1)), t.toString = Z, t
        }, i.hsb2rgb = function (t, e, i, n) {
            r(t, "object") && "h" in t && "s" in t && "b" in t && (i = t.b, e = t.s, n = t.o, t = t.h), t *= 360;
            var s, o, a, l, h;
            return t = t % 360 / 60, h = i * e, l = h * (1 - P(t % 2 - 1)), s = o = a = i - h, t = ~~t, s += [h, l, 0, 0, l, h][t], o += [l, h, h, l, 0, 0][t], a += [0, 0, l, h, h, l][t], K(s, o, a, n)
        }, i.hsl2rgb = function (t, e, i, n) {
            r(t, "object") && "h" in t && "s" in t && "l" in t && (i = t.l, e = t.s, t = t.h), (t > 1 || e > 1 || i > 1) && (t /= 360, e /= 100, i /= 100), t *= 360;
            var s, o, a, l, h;
            return t = t % 360 / 60, h = 2 * e * (.5 > i ? i : 1 - i), l = h * (1 - P(t % 2 - 1)), s = o = a = i - h / 2, t = ~~t, s += [h, l, 0, 0, l, h][t], o += [l, h, h, l, 0, 0][t], a += [0, 0, l, h, h, l][t], K(s, o, a, n)
        }, i.rgb2hsb = function (t, e, i) {
            i = J(t, e, i), t = i[0], e = i[1], i = i[2];
            var n, r, s, o;
            return s = F(t, e, i), o = s - $(t, e, i), n = 0 == o ? null : s == t ? (e - i) / o : s == e ? (i - t) / o + 2 : (t - e) / o + 4, n = (n + 360) % 6 * 60 / 360, r = 0 == o ? 0 : o / s, {
                h: n,
                s: r,
                b: s,
                toString: G
            }
        }, i.rgb2hsl = function (t, e, i) {
            i = J(t, e, i), t = i[0], e = i[1], i = i[2];
            var n, r, s, o, a, l;
            return o = F(t, e, i), a = $(t, e, i), l = o - a, n = 0 == l ? null : o == t ? (e - i) / l : o == e ? (i - t) / l + 2 : (t - e) / l + 4, n = (n + 360) % 6 * 60 / 360, s = (o + a) / 2, r = 0 == l ? 0 : .5 > s ? l / (2 * s) : l / (2 - 2 * s), {
                h: n,
                s: r,
                l: s,
                toString: Q
            }
        }, i.parsePathString = function (t) {
            if (!t) return null;
            var e = i.path(t);
            if (e.arr) return i.path.clone(e.arr);
            var n = {a: 7, c: 6, o: 2, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, u: 3, z: 0}, s = [];
            return r(t, "array") && r(t[0], "array") && (s = i.path.clone(t)), s.length || k(t).replace(B, function (t, e, i) {
                var r = [], o = e.toLowerCase();
                if (i.replace(z, function (t, e) {
                        e && r.push(+e)
                    }), "m" == o && r.length > 2 && (s.push([e].concat(r.splice(0, 2))), o = "l", e = "m" == e ? "l" : "L"), "o" == o && 1 == r.length && s.push([e, r[0]]), "r" == o) s.push([e].concat(r)); else for (; r.length >= n[o] && (s.push([e].concat(r.splice(0, n[o]))), n[o]);) ;
            }), s.toString = i.path.toString, e.arr = i.path.clone(s), s
        };
        var tt = i.parseTransformString = function (t) {
            if (!t) return null;
            var e = [];
            return r(t, "array") && r(t[0], "array") && (e = i.path.clone(t)), e.length || k(t).replace(j, function (t, i, n) {
                var r = [];
                i.toLowerCase(), n.replace(z, function (t, e) {
                    e && r.push(+e)
                }), e.push([i].concat(r))
            }), e.toString = i.path.toString, e
        };
        i._.svgTransform2string = u, i._.rgTransform = /^[a-z][\s]*-?\.?\d/i, i._.transform2matrix = p, i._unit2px = m, C.doc.contains || C.doc.compareDocumentPosition ? function (t, e) {
            var i = 9 == t.nodeType ? t.documentElement : t, n = e && e.parentNode;
            return t == n || !(!n || 1 != n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
        } : function (t, e) {
            if (e) for (; e;) if (e = e.parentNode, e == t) return !0;
            return !1
        }, i._.getSomeDefs = d, i._.getSomeSVG = f, i.select = function (t) {
            return t = k(t).replace(/([^\\]):/g, "$1\\:"), w(C.doc.querySelector(t))
        }, i.selectAll = function (t) {
            for (var e = C.doc.querySelectorAll(t), n = (i.set || Array)(), r = 0; r < e.length; r++) n.push(w(e[r]));
            return n
        }, setInterval(function () {
            for (var t in W) if (W[S](t)) {
                var e = W[t], i = e.node;
                ("svg" != e.type && !i.ownerSVGElement || "svg" == e.type && (!i.parentNode || "ownerSVGElement" in i.parentNode && !i.ownerSVGElement)) && delete W[t]
            }
        }, 1e4), y.prototype.attr = function (t, i) {
            var n = this, s = n.node;
            if (!t) {
                if (1 != s.nodeType) return {text: s.nodeValue};
                for (var o = s.attributes, a = {}, l = 0, h = o.length; h > l; l++) a[o[l].nodeName] = o[l].nodeValue;
                return a
            }
            if (r(t, "string")) {
                if (!(arguments.length > 1)) return e("snap.util.getattr." + t, n).firstDefined();
                var c = {};
                c[t] = i, t = c
            }
            for (var u in t) t[S](u) && e("snap.util.attr." + u, n, t[u]);
            return n
        }, i.parse = function (t) {
            var e = C.doc.createDocumentFragment(), i = !0, n = C.doc.createElement("div");
            if (t = k(t), t.match(/^\s*<\s*svg(?:\s|>)/) || (t = "<svg>" + t + "</svg>", i = !1), n.innerHTML = t, t = n.getElementsByTagName("svg")[0]) if (i) e = t; else for (; t.firstChild;) e.appendChild(t.firstChild);
            return new b(e)
        }, i.fragment = function () {
            for (var t = Array.prototype.slice.call(arguments, 0), e = C.doc.createDocumentFragment(), n = 0, r = t.length; r > n; n++) {
                var s = t[n];
                s.node && s.node.nodeType && e.appendChild(s.node), s.nodeType && e.appendChild(s), "string" == typeof s && e.appendChild(i.parse(s).node)
            }
            return new b(e)
        }, i._.make = x, i._.wrap = w, _.prototype.el = function (t, e) {
            var i = x(t, this.node);
            return e && i.attr(e), i
        }, y.prototype.children = function () {
            for (var t = [], e = this.node.childNodes, n = 0, r = e.length; r > n; n++) t[n] = i(e[n]);
            return t
        }, y.prototype.toJSON = function () {
            var t = [];
            return T([this], t), t[0]
        }, e.on("snap.util.getattr", function () {
            var t = e.nt();
            t = t.substring(t.lastIndexOf(".") + 1);
            var i = t.replace(/[A-Z]/g, function (t) {
                return "-" + t.toLowerCase()
            });
            return et[S](i) ? this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(i) : n(this.node, t)
        });
        var et = {
            "alignment-baseline": 0,
            "baseline-shift": 0,
            clip: 0,
            "clip-path": 0,
            "clip-rule": 0,
            color: 0,
            "color-interpolation": 0,
            "color-interpolation-filters": 0,
            "color-profile": 0,
            "color-rendering": 0,
            cursor: 0,
            direction: 0,
            display: 0,
            "dominant-baseline": 0,
            "enable-background": 0,
            fill: 0,
            "fill-opacity": 0,
            "fill-rule": 0,
            filter: 0,
            "flood-color": 0,
            "flood-opacity": 0,
            font: 0,
            "font-family": 0,
            "font-size": 0,
            "font-size-adjust": 0,
            "font-stretch": 0,
            "font-style": 0,
            "font-variant": 0,
            "font-weight": 0,
            "glyph-orientation-horizontal": 0,
            "glyph-orientation-vertical": 0,
            "image-rendering": 0,
            kerning: 0,
            "letter-spacing": 0,
            "lighting-color": 0,
            marker: 0,
            "marker-end": 0,
            "marker-mid": 0,
            "marker-start": 0,
            mask: 0,
            opacity: 0,
            overflow: 0,
            "pointer-events": 0,
            "shape-rendering": 0,
            "stop-color": 0,
            "stop-opacity": 0,
            stroke: 0,
            "stroke-dasharray": 0,
            "stroke-dashoffset": 0,
            "stroke-linecap": 0,
            "stroke-linejoin": 0,
            "stroke-miterlimit": 0,
            "stroke-opacity": 0,
            "stroke-width": 0,
            "text-anchor": 0,
            "text-decoration": 0,
            "text-rendering": 0,
            "unicode-bidi": 0,
            visibility: 0,
            "word-spacing": 0,
            "writing-mode": 0
        };
        e.on("snap.util.attr", function (t) {
            var i = e.nt(), r = {};
            i = i.substring(i.lastIndexOf(".") + 1), r[i] = t;
            var s = i.replace(/-(\w)/gi, function (t, e) {
                return e.toUpperCase()
            }), o = i.replace(/[A-Z]/g, function (t) {
                return "-" + t.toLowerCase()
            });
            et[S](o) ? this.node.style[s] = null == t ? N : t : n(this.node, r)
        }), function (t) {
        }(_.prototype), i.ajax = function (t, i, n, s) {
            var o = new XMLHttpRequest, a = X();
            if (o) {
                if (r(i, "function")) s = n, n = i, i = null; else if (r(i, "object")) {
                    var l = [];
                    for (var h in i) i.hasOwnProperty(h) && l.push(encodeURIComponent(h) + "=" + encodeURIComponent(i[h]));
                    i = l.join("&")
                }
                return o.open(i ? "POST" : "GET", t, !0), i && (o.setRequestHeader("X-Requested-With", "XMLHttpRequest"), o.setRequestHeader("Content-type", "application/x-www-form-urlencoded")), n && (e.once("snap.ajax." + a + ".0", n), e.once("snap.ajax." + a + ".200", n), e.once("snap.ajax." + a + ".304", n)), o.onreadystatechange = function () {
                    4 == o.readyState && e("snap.ajax." + a + "." + o.status, s, o)
                }, 4 == o.readyState ? o : (o.send(i), o)
            }
        }, i.load = function (t, e, n) {
            i.ajax(t, function (t) {
                var r = i.parse(t.responseText);
                n ? e.call(n, r) : e(r)
            })
        };
        var it = function (t) {
            var e = t.getBoundingClientRect(), i = t.ownerDocument, n = i.body, r = i.documentElement,
                s = r.clientTop || n.clientTop || 0, o = r.clientLeft || n.clientLeft || 0,
                a = e.top + (g.win.pageYOffset || r.scrollTop || n.scrollTop) - s,
                l = e.left + (g.win.pageXOffset || r.scrollLeft || n.scrollLeft) - o;
            return {y: a, x: l}
        };
        return i.getElementByPoint = function (t, e) {
            var i = this, n = (i.canvas, C.doc.elementFromPoint(t, e));
            if (C.win.opera && "svg" == n.tagName) {
                var r = it(n), s = n.createSVGRect();
                s.x = t - r.x, s.y = e - r.y, s.width = s.height = 1;
                var o = n.getIntersectionList(s, null);
                o.length && (n = o[o.length - 1])
            }
            return n ? w(n) : null
        }, i.plugin = function (t) {
            t(i, y, _, C, b)
        }, C.win.Snap = i, i
    }(t || this);
    return n.plugin(function (i, n, r, s, o) {
        function a(t, e) {
            if (null == e) {
                var n = !0;
                if (e = "linearGradient" == t.type || "radialGradient" == t.type ? t.node.getAttribute("gradientTransform") : "pattern" == t.type ? t.node.getAttribute("patternTransform") : t.node.getAttribute("transform"), !e) return new i.Matrix;
                e = i._.svgTransform2string(e)
            } else e = i._.rgTransform.test(e) ? p(e).replace(/\.{3}|\u2026/g, t._.transform || "") : i._.svgTransform2string(e), u(e, "array") && (e = i.path ? i.path.toString.call(e) : p(e)), t._.transform = e;
            var r = i._.transform2matrix(e, t.getBBox(1));
            return n ? r : void(t.matrix = r)
        }

        function l(t) {
            function e(t, e) {
                var n = f(t.node, e);
                n = n && n.match(o), n = n && n[2], n && "#" == n.charAt() && (n = n.substring(1), n && (l[n] = (l[n] || []).concat(function (n) {
                    var r = {};
                    r[e] = i.url(n), f(t.node, r)
                })))
            }

            function n(t) {
                var e = f(t.node, "xlink:href");
                e && "#" == e.charAt() && (e = e.substring(1), e && (l[e] = (l[e] || []).concat(function (e) {
                    t.attr("xlink:href", "#" + e)
                })))
            }

            for (var r, s = t.selectAll("*"), o = /^\s*url\(("|'|)(.*)\1\)\s*$/, a = [], l = {}, h = 0, c = s.length; c > h; h++) {
                r = s[h], e(r, "fill"), e(r, "stroke"), e(r, "filter"), e(r, "mask"), e(r, "clip-path"), n(r);
                var u = f(r.node, "id");
                u && (f(r.node, {id: r.id}), a.push({old: u, id: r.id}))
            }
            for (h = 0, c = a.length; c > h; h++) {
                var p = l[a[h].old];
                if (p) for (var d = 0, m = p.length; m > d; d++) p[d](a[h].id)
            }
        }

        function h(t) {
            return function () {
                var e = t ? "<" + this.type : "", i = this.node.attributes, n = this.node.childNodes;
                if (t) for (var r = 0, s = i.length; s > r; r++) e += " " + i[r].name + '="' + i[r].value.replace(/"/g, '\\"') + '"';
                if (n.length) {
                    for (t && (e += ">"), r = 0, s = n.length; s > r; r++) 3 == n[r].nodeType ? e += n[r].nodeValue : 1 == n[r].nodeType && (e += y(n[r]).toString());
                    t && (e += "</" + this.type + ">")
                } else t && (e += "/>");
                return e
            }
        }

        var c = n.prototype, u = i.is, p = String, d = i._unit2px, f = i._.$, m = i._.make, g = i._.getSomeDefs,
            v = "hasOwnProperty", y = i._.wrap;
        c.getBBox = function (t) {
            if ("tspan" == this.type) return i._.box(this.node.getClientRects().item(0));
            if (!i.Matrix || !i.path) return this.node.getBBox();
            var e = this, n = new i.Matrix;
            if (e.removed) return i._.box();
            for (; "use" == e.type;) if (t || (n = n.add(e.transform().localMatrix.translate(e.attr("x") || 0, e.attr("y") || 0))), e.original) e = e.original; else {
                var r = e.attr("xlink:href");
                e = e.original = e.node.ownerDocument.getElementById(r.substring(r.indexOf("#") + 1))
            }
            var s = e._, o = i.path.get[e.type] || i.path.get.deflt;
            try {
                return t ? (s.bboxwt = o ? i.path.getBBox(e.realPath = o(e)) : i._.box(e.node.getBBox()), i._.box(s.bboxwt)) : (e.realPath = o(e), e.matrix = e.transform().localMatrix, s.bbox = i.path.getBBox(i.path.map(e.realPath, n.add(e.matrix))), i._.box(s.bbox))
            } catch (a) {
                return i._.box()
            }
        };
        var b = function () {
            return this.string
        };
        c.transform = function (t) {
            var e = this._;
            if (null == t) {
                for (var n, r = this, s = new i.Matrix(this.node.getCTM()), o = a(this), l = [o], h = new i.Matrix, c = o.toTransformString(), u = p(o) == p(this.matrix) ? p(e.transform) : c; "svg" != r.type && (r = r.parent());) l.push(a(r));
                for (n = l.length; n--;) h.add(l[n]);
                return {
                    string: u,
                    globalMatrix: s,
                    totalMatrix: h,
                    localMatrix: o,
                    diffMatrix: s.clone().add(o.invert()),
                    global: s.toTransformString(),
                    total: h.toTransformString(),
                    local: c,
                    toString: b
                }
            }
            return t instanceof i.Matrix ? (this.matrix = t, this._.transform = t.toTransformString()) : a(this, t), this.node && ("linearGradient" == this.type || "radialGradient" == this.type ? f(this.node, {gradientTransform: this.matrix}) : "pattern" == this.type ? f(this.node, {patternTransform: this.matrix}) : f(this.node, {transform: this.matrix})), this
        }, c.parent = function () {
            return y(this.node.parentNode)
        }, c.append = c.add = function (t) {
            if (t) {
                if ("set" == t.type) {
                    var e = this;
                    return t.forEach(function (t) {
                        e.add(t)
                    }), this
                }
                t = y(t), this.node.appendChild(t.node), t.paper = this.paper
            }
            return this
        }, c.appendTo = function (t) {
            return t && (t = y(t), t.append(this)), this
        }, c.prepend = function (t) {
            if (t) {
                if ("set" == t.type) {
                    var e, i = this;
                    return t.forEach(function (t) {
                        e ? e.after(t) : i.prepend(t), e = t
                    }), this
                }
                t = y(t);
                var n = t.parent();
                this.node.insertBefore(t.node, this.node.firstChild), this.add && this.add(), t.paper = this.paper, this.parent() && this.parent().add(), n && n.add()
            }
            return this
        }, c.prependTo = function (t) {
            return t = y(t), t.prepend(this), this
        }, c.before = function (t) {
            if ("set" == t.type) {
                var e = this;
                return t.forEach(function (t) {
                    var i = t.parent();
                    e.node.parentNode.insertBefore(t.node, e.node), i && i.add()
                }), this.parent().add(), this
            }
            t = y(t);
            var i = t.parent();
            return this.node.parentNode.insertBefore(t.node, this.node), this.parent() && this.parent().add(), i && i.add(), t.paper = this.paper, this
        }, c.after = function (t) {
            t = y(t);
            var e = t.parent();
            return this.node.nextSibling ? this.node.parentNode.insertBefore(t.node, this.node.nextSibling) : this.node.parentNode.appendChild(t.node), this.parent() && this.parent().add(), e && e.add(), t.paper = this.paper, this
        }, c.insertBefore = function (t) {
            t = y(t);
            var e = this.parent();
            return t.node.parentNode.insertBefore(this.node, t.node), this.paper = t.paper, e && e.add(), t.parent() && t.parent().add(), this
        }, c.insertAfter = function (t) {
            t = y(t);
            var e = this.parent();
            return t.node.parentNode.insertBefore(this.node, t.node.nextSibling), this.paper = t.paper, e && e.add(), t.parent() && t.parent().add(), this
        }, c.remove = function () {
            var t = this.parent();
            return this.node.parentNode && this.node.parentNode.removeChild(this.node), delete this.paper, this.removed = !0, t && t.add(), this
        }, c.select = function (t) {
            return y(this.node.querySelector(t))
        }, c.selectAll = function (t) {
            for (var e = this.node.querySelectorAll(t), n = (i.set || Array)(), r = 0; r < e.length; r++) n.push(y(e[r]));
            return n
        }, c.asPX = function (t, e) {
            return null == e && (e = this.attr(t)), +d(this, t, e)
        }, c.use = function () {
            var t, e = this.node.id;
            return e || (e = this.id, f(this.node, {id: e})), t = "linearGradient" == this.type || "radialGradient" == this.type || "pattern" == this.type ? m(this.type, this.node.parentNode) : m("use", this.node.parentNode), f(t.node, {"xlink:href": "#" + e}), t.original = this, t
        }, c.clone = function () {
            var t = y(this.node.cloneNode(!0));
            return f(t.node, "id") && f(t.node, {id: t.id}), l(t), t.insertAfter(this), t
        }, c.toDefs = function () {
            var t = g(this);
            return t.appendChild(this.node), this
        }, c.pattern = c.toPattern = function (t, e, i, n) {
            var r = m("pattern", g(this));
            return null == t && (t = this.getBBox()), u(t, "object") && "x" in t && (e = t.y, i = t.width, n = t.height, t = t.x), f(r.node, {
                x: t,
                y: e,
                width: i,
                height: n,
                patternUnits: "userSpaceOnUse",
                id: r.id,
                viewBox: [t, e, i, n].join(" ")
            }), r.node.appendChild(this.node), r
        }, c.marker = function (t, e, i, n, r, s) {
            var o = m("marker", g(this));
            return null == t && (t = this.getBBox()), u(t, "object") && "x" in t && (e = t.y, i = t.width, n = t.height, r = t.refX || t.cx, s = t.refY || t.cy, t = t.x), f(o.node, {
                viewBox: [t, e, i, n].join(" "),
                markerWidth: i,
                markerHeight: n,
                orient: "auto",
                refX: r || 0,
                refY: s || 0,
                id: o.id
            }), o.node.appendChild(this.node), o
        };
        var x = {};
        c.data = function (t, n) {
            var r = x[this.id] = x[this.id] || {};
            if (0 == arguments.length) return e("snap.data.get." + this.id, this, r, null), r;
            if (1 == arguments.length) {
                if (i.is(t, "object")) {
                    for (var s in t) t[v](s) && this.data(s, t[s]);
                    return this
                }
                return e("snap.data.get." + this.id, this, r[t], t), r[t]
            }
            return r[t] = n, e("snap.data.set." + this.id, this, n, t), this
        }, c.removeData = function (t) {
            return null == t ? x[this.id] = {} : x[this.id] && delete x[this.id][t], this
        }, c.outerSVG = c.toString = h(1), c.innerSVG = h(), c.toDataURL = function () {
            if (t && t.btoa) {
                var e = this.getBBox(),
                    n = i.format('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>', {
                        x: +e.x.toFixed(3),
                        y: +e.y.toFixed(3),
                        width: +e.width.toFixed(3),
                        height: +e.height.toFixed(3),
                        contents: this.outerSVG()
                    });
                return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(n)))
            }
        }, o.prototype.select = c.select, o.prototype.selectAll = c.selectAll
    }), n.plugin(function (t, n, r, s, o) {
        function a(t, e, i) {
            return function (n) {
                var r = n.slice(t, e);
                return 1 == r.length && (r = r[0]), i ? i(r) : r
            }
        }

        var l = n.prototype, h = t.is, c = String, u = "hasOwnProperty", p = function (t, e, n, r) {
            "function" != typeof n || n.length || (r = n, n = i.linear), this.attr = t, this.dur = e, n && (this.easing = n), r && (this.callback = r)
        };
        t._.Animation = p, t.animation = function (t, e, i, n) {
            return new p(t, e, i, n)
        }, l.inAnim = function () {
            var t = this, e = [];
            for (var i in t.anims) t.anims[u](i) && !function (t) {
                e.push({
                    anim: new p(t._attrs, t.dur, t.easing, t._callback),
                    mina: t,
                    curStatus: t.status(),
                    status: function (e) {
                        return t.status(e)
                    },
                    stop: function () {
                        t.stop()
                    }
                })
            }(t.anims[i]);
            return e
        }, t.animate = function (t, n, r, s, o, a) {
            "function" != typeof o || o.length || (a = o, o = i.linear);
            var l = i.time(), h = i(t, n, l, l + s, i.time, r, o);
            return a && e.once("mina.finish." + h.id, a), h
        }, l.stop = function () {
            for (var t = this.inAnim(), e = 0, i = t.length; i > e; e++) t[e].stop();
            return this
        }, l.animate = function (t, n, r, s) {
            "function" != typeof r || r.length || (s = r, r = i.linear), t instanceof p && (s = t.callback, r = t.easing, n = t.dur, t = t.attr);
            var o, l, d, f, m = [], g = [], v = {}, y = this;
            for (var b in t) if (t[u](b)) {
                y.equal ? (f = y.equal(b, c(t[b])), o = f.from, l = f.to, d = f.f) : (o = +y.attr(b), l = +t[b]);
                var x = h(o, "array") ? o.length : 1;
                v[b] = a(m.length, m.length + x, d), m = m.concat(o), g = g.concat(l)
            }
            var _ = i.time(), w = i(m, g, _, _ + n, i.time, function (t) {
                var e = {};
                for (var i in v) v[u](i) && (e[i] = v[i](t));
                y.attr(e)
            }, r);
            return y.anims[w.id] = w, w._attrs = t, w._callback = s, e("snap.animcreated." + y.id, w), e.once("mina.finish." + w.id, function () {
                e.off("mina.*." + w.id), delete y.anims[w.id], s && s.call(y)
            }), e.once("mina.stop." + w.id, function () {
                e.off("mina.*." + w.id), delete y.anims[w.id]
            }), y
        }
    }), n.plugin(function (t, e, i, n, r) {
        function s(t, e, i, n, r, s) {
            return null == e && "[object SVGMatrix]" == o.call(t) ? (this.a = t.a, this.b = t.b, this.c = t.c, this.d = t.d, this.e = t.e, void(this.f = t.f)) : void(null != t ? (this.a = +t, this.b = +e, this.c = +i, this.d = +n, this.e = +r, this.f = +s) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0))
        }

        var o = Object.prototype.toString, a = String, l = Math, h = "";
        !function (e) {
            function i(t) {
                return t[0] * t[0] + t[1] * t[1]
            }

            function n(t) {
                var e = l.sqrt(i(t));
                t[0] && (t[0] /= e), t[1] && (t[1] /= e)
            }

            e.add = function (t, e, i, n, r, o) {
                if (t && t instanceof s) return this.add(t.a, t.b, t.c, t.d, t.e, t.f);
                var a = t * this.a + e * this.c, l = t * this.b + e * this.d;
                return this.e += r * this.a + o * this.c, this.f += r * this.b + o * this.d, this.c = i * this.a + n * this.c, this.d = i * this.b + n * this.d, this.a = a, this.b = l, this
            }, s.prototype.multLeft = function (t, e, i, n, r, o) {
                if (t && t instanceof s) return this.multLeft(t.a, t.b, t.c, t.d, t.e, t.f);
                var a = t * this.a + i * this.b, l = t * this.c + i * this.d, h = t * this.e + i * this.f + r;
                return this.b = e * this.a + n * this.b, this.d = e * this.c + n * this.d, this.f = e * this.e + n * this.f + o, this.a = a, this.c = l, this.e = h, this
            }, e.invert = function () {
                var t = this, e = t.a * t.d - t.b * t.c;
                return new s(t.d / e, -t.b / e, -t.c / e, t.a / e, (t.c * t.f - t.d * t.e) / e, (t.b * t.e - t.a * t.f) / e)
            }, e.clone = function () {
                return new s(this.a, this.b, this.c, this.d, this.e, this.f)
            }, e.translate = function (t, e) {
                return this.e += t * this.a + e * this.c, this.f += t * this.b + e * this.d, this
            }, e.scale = function (t, e, i, n) {
                return null == e && (e = t), (i || n) && this.translate(i, n), this.a *= t, this.b *= t, this.c *= e, this.d *= e, (i || n) && this.translate(-i, -n), this
            }, e.rotate = function (e, i, n) {
                e = t.rad(e), i = i || 0, n = n || 0;
                var r = +l.cos(e).toFixed(9), s = +l.sin(e).toFixed(9);
                return this.add(r, s, -s, r, i, n), this.add(1, 0, 0, 1, -i, -n)
            }, e.skewX = function (t) {
                return this.skew(t, 0)
            }, e.skewY = function (t) {
                return this.skew(0, t)
            }, e.skew = function (e, i) {
                e = e || 0, i = i || 0, e = t.rad(e), i = t.rad(i);
                var n = l.tan(e).toFixed(9), r = l.tan(i).toFixed(9);
                return this.add(1, r, n, 1, 0, 0)
            }, e.x = function (t, e) {
                return t * this.a + e * this.c + this.e
            }, e.y = function (t, e) {
                return t * this.b + e * this.d + this.f
            }, e.get = function (t) {
                return +this[a.fromCharCode(97 + t)].toFixed(4)
            }, e.toString = function () {
                return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")"
            }, e.offset = function () {
                return [this.e.toFixed(4), this.f.toFixed(4)]
            }, e.determinant = function () {
                return this.a * this.d - this.b * this.c
            }, e.split = function () {
                var e = {};
                e.dx = this.e, e.dy = this.f;
                var r = [[this.a, this.b], [this.c, this.d]];
                e.scalex = l.sqrt(i(r[0])), n(r[0]), e.shear = r[0][0] * r[1][0] + r[0][1] * r[1][1], r[1] = [r[1][0] - r[0][0] * e.shear, r[1][1] - r[0][1] * e.shear], e.scaley = l.sqrt(i(r[1])), n(r[1]), e.shear /= e.scaley, this.determinant() < 0 && (e.scalex = -e.scalex);
                var s = r[0][1], o = r[1][1];
                return 0 > o ? (e.rotate = t.deg(l.acos(o)), 0 > s && (e.rotate = 360 - e.rotate)) : e.rotate = t.deg(l.asin(s)), e.isSimple = !(+e.shear.toFixed(9) || e.scalex.toFixed(9) != e.scaley.toFixed(9) && e.rotate), e.isSuperSimple = !+e.shear.toFixed(9) && e.scalex.toFixed(9) == e.scaley.toFixed(9) && !e.rotate, e.noRotation = !+e.shear.toFixed(9) && !e.rotate, e
            }, e.toTransformString = function (t) {
                var e = t || this.split();
                return +e.shear.toFixed(9) ? "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)] : (e.scalex = +e.scalex.toFixed(4), e.scaley = +e.scaley.toFixed(4), e.rotate = +e.rotate.toFixed(4), (e.dx || e.dy ? "t" + [+e.dx.toFixed(4), +e.dy.toFixed(4)] : h) + (e.rotate ? "r" + [+e.rotate.toFixed(4), 0, 0] : h) + (1 != e.scalex || 1 != e.scaley ? "s" + [e.scalex, e.scaley, 0, 0] : h))
            }
        }(s.prototype), t.Matrix = s, t.matrix = function (t, e, i, n, r, o) {
            return new s(t, e, i, n, r, o)
        }
    }), n.plugin(function (t, i, n, r, s) {
        function o(n) {
            return function (r) {
                if (e.stop(), r instanceof s && 1 == r.node.childNodes.length && ("radialGradient" == r.node.firstChild.tagName || "linearGradient" == r.node.firstChild.tagName || "pattern" == r.node.firstChild.tagName) && (r = r.node.firstChild, d(this).appendChild(r), r = u(r)), r instanceof i) if ("radialGradient" == r.type || "linearGradient" == r.type || "pattern" == r.type) {
                    r.node.id || m(r.node, {id: r.id});
                    var o = g(r.node.id)
                } else o = r.attr(n); else if (o = t.color(r), o.error) {
                    var a = t(d(this).ownerSVGElement).gradient(r);
                    a ? (a.node.id || m(a.node, {id: a.id}), o = g(a.node.id)) : o = r
                } else o = v(o);
                var l = {};
                l[n] = o, m(this.node, l), this.node.style[n] = b
            }
        }

        function a(t) {
            e.stop(), t == +t && (t += "px"), this.node.style.fontSize = t
        }

        function l(t) {
            for (var e = [], i = t.childNodes, n = 0, r = i.length; r > n; n++) {
                var s = i[n];
                3 == s.nodeType && e.push(s.nodeValue), "tspan" == s.tagName && (1 == s.childNodes.length && 3 == s.firstChild.nodeType ? e.push(s.firstChild.nodeValue) : e.push(l(s)))
            }
            return e
        }

        function h() {
            return e.stop(), this.node.style.fontSize
        }

        var c = t._.make, u = t._.wrap, p = t.is, d = t._.getSomeDefs, f = /^url\((['"]?)([^)]+)\1\)$/, m = t._.$,
            g = t.url, v = String, y = t._.separator, b = "";
        t.deurl = function (t) {
            var e = String(t).match(f);
            return e ? e[2] : t
        }, e.on("snap.util.attr.mask", function (t) {
            if (t instanceof i || t instanceof s) {
                if (e.stop(), t instanceof s && 1 == t.node.childNodes.length && (t = t.node.firstChild, d(this).appendChild(t), t = u(t)), "mask" == t.type) var n = t; else n = c("mask", d(this)), n.node.appendChild(t.node);
                !n.node.id && m(n.node, {id: n.id}), m(this.node, {mask: g(n.id)})
            }
        }), function (t) {
            e.on("snap.util.attr.clip", t), e.on("snap.util.attr.clip-path", t), e.on("snap.util.attr.clipPath", t)
        }(function (t) {
            if (t instanceof i || t instanceof s) {
                e.stop();
                for (var n, r = t.node; r;) {
                    if ("clipPath" === r.nodeName) {
                        n = new i(r);
                        break
                    }
                    if ("svg" === r.nodeName) {
                        n = void 0;
                        break
                    }
                    r = r.parentNode
                }
                n || (n = c("clipPath", d(this)), n.node.appendChild(t.node), !n.node.id && m(n.node, {id: n.id})), m(this.node, {"clip-path": g(n.node.id || n.id)})
            }
        }), e.on("snap.util.attr.fill", o("fill")), e.on("snap.util.attr.stroke", o("stroke"));
        var x = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
        e.on("snap.util.grad.parse", function (t) {
            function e(t, e) {
                for (var i = (e - a) / (t - l), n = l; t > n; n++) s[n].offset = +(+a + i * (n - l)).toFixed(2);
                l = t, a = e
            }

            t = v(t);
            var i = t.match(x);
            if (!i) return null;
            var n = i[1], r = i[2], s = i[3];
            r = r.split(/\s*,\s*/).map(function (t) {
                return +t == t ? +t : t
            }), 1 == r.length && 0 == r[0] && (r = []), s = s.split("-"), s = s.map(function (t) {
                t = t.split(":");
                var e = {color: t[0]};
                return t[1] && (e.offset = parseFloat(t[1])), e
            });
            var o = s.length, a = 0, l = 0;
            o--;
            for (var h = 0; o > h; h++) "offset" in s[h] && e(h, s[h].offset);
            return s[o].offset = s[o].offset || 100, e(o, s[o].offset), {type: n, params: r, stops: s}
        }), e.on("snap.util.attr.d", function (i) {
            e.stop(), p(i, "array") && p(i[0], "array") && (i = t.path.toString.call(i)), i = v(i), i.match(/[ruo]/i) && (i = t.path.toAbsolute(i)), m(this.node, {d: i})
        })(-1), e.on("snap.util.attr.#text", function (t) {
            e.stop(), t = v(t);
            for (var i = r.doc.createTextNode(t); this.node.firstChild;) this.node.removeChild(this.node.firstChild);
            this.node.appendChild(i)
        })(-1), e.on("snap.util.attr.path", function (t) {
            e.stop(), this.attr({d: t})
        })(-1), e.on("snap.util.attr.class", function (t) {
            e.stop(), this.node.className.baseVal = t
        })(-1), e.on("snap.util.attr.viewBox", function (t) {
            var i;
            i = p(t, "object") && "x" in t ? [t.x, t.y, t.width, t.height].join(" ") : p(t, "array") ? t.join(" ") : t, m(this.node, {viewBox: i}), e.stop()
        })(-1), e.on("snap.util.attr.transform", function (t) {
            this.transform(t), e.stop()
        })(-1), e.on("snap.util.attr.r", function (t) {
            "rect" == this.type && (e.stop(), m(this.node, {rx: t, ry: t}))
        })(-1), e.on("snap.util.attr.textpath", function (t) {
            if (e.stop(), "text" == this.type) {
                var n, r, s;
                if (!t && this.textPath) {
                    for (r = this.textPath; r.node.firstChild;) this.node.appendChild(r.node.firstChild);
                    return r.remove(), void delete this.textPath
                }
                if (p(t, "string")) {
                    var o = d(this), a = u(o.parentNode).path(t);
                    o.appendChild(a.node), n = a.id, a.attr({id: n})
                } else t = u(t), t instanceof i && (n = t.attr("id"), n || (n = t.id, t.attr({id: n})));
                if (n) if (r = this.textPath, s = this.node, r) r.attr({"xlink:href": "#" + n}); else {
                    for (r = m("textPath", {"xlink:href": "#" + n}); s.firstChild;) r.appendChild(s.firstChild);
                    s.appendChild(r), this.textPath = u(r)
                }
            }
        })(-1), e.on("snap.util.attr.text", function (t) {
            if ("text" == this.type) {
                for (var i = this.node, n = function (t) {
                    var e = m("tspan");
                    if (p(t, "array")) for (var i = 0; i < t.length; i++) e.appendChild(n(t[i])); else e.appendChild(r.doc.createTextNode(t));
                    return e.normalize && e.normalize(), e
                }; i.firstChild;) i.removeChild(i.firstChild);
                for (var s = n(t); s.firstChild;) i.appendChild(s.firstChild)
            }
            e.stop()
        })(-1), e.on("snap.util.attr.fontSize", a)(-1), e.on("snap.util.attr.font-size", a)(-1), e.on("snap.util.getattr.transform", function () {
            return e.stop(), this.transform()
        })(-1), e.on("snap.util.getattr.textpath", function () {
            return e.stop(), this.textPath
        })(-1), function () {
            function i(i) {
                return function () {
                    e.stop();
                    var n = r.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + i);
                    return "none" == n ? n : t(r.doc.getElementById(n.match(f)[1]))
                }
            }

            function n(t) {
                return function (i) {
                    e.stop();
                    var n = "marker" + t.charAt(0).toUpperCase() + t.substring(1);
                    if ("" == i || !i) return void(this.node.style[n] = "none");
                    if ("marker" == i.type) {
                        var r = i.node.id;
                        return r || m(i.node, {id: i.id}), void(this.node.style[n] = g(r))
                    }
                }
            }

            e.on("snap.util.getattr.marker-end", i("end"))(-1), e.on("snap.util.getattr.markerEnd", i("end"))(-1), e.on("snap.util.getattr.marker-start", i("start"))(-1), e.on("snap.util.getattr.markerStart", i("start"))(-1), e.on("snap.util.getattr.marker-mid", i("mid"))(-1), e.on("snap.util.getattr.markerMid", i("mid"))(-1), e.on("snap.util.attr.marker-end", n("end"))(-1), e.on("snap.util.attr.markerEnd", n("end"))(-1), e.on("snap.util.attr.marker-start", n("start"))(-1), e.on("snap.util.attr.markerStart", n("start"))(-1), e.on("snap.util.attr.marker-mid", n("mid"))(-1), e.on("snap.util.attr.markerMid", n("mid"))(-1)
        }(), e.on("snap.util.getattr.r", function () {
            return "rect" == this.type && m(this.node, "rx") == m(this.node, "ry") ? (e.stop(), m(this.node, "rx")) : void 0
        })(-1), e.on("snap.util.getattr.text", function () {
            if ("text" == this.type || "tspan" == this.type) {
                e.stop();
                var t = l(this.node);
                return 1 == t.length ? t[0] : t
            }
        })(-1), e.on("snap.util.getattr.#text", function () {
            return this.node.textContent
        })(-1), e.on("snap.util.getattr.fill", function (i) {
            if (!i) {
                e.stop();
                var n = e("snap.util.getattr.fill", this, !0).firstDefined();
                return t(t.deurl(n)) || n
            }
        })(-1), e.on("snap.util.getattr.stroke", function (i) {
            if (!i) {
                e.stop();
                var n = e("snap.util.getattr.stroke", this, !0).firstDefined();
                return t(t.deurl(n)) || n
            }
        })(-1), e.on("snap.util.getattr.viewBox", function () {
            e.stop();
            var i = m(this.node, "viewBox");
            return i ? (i = i.split(y), t._.box(+i[0], +i[1], +i[2], +i[3])) : void 0
        })(-1), e.on("snap.util.getattr.points", function () {
            var t = m(this.node, "points");
            return e.stop(), t ? t.split(y) : void 0
        })(-1), e.on("snap.util.getattr.path", function () {
            var t = m(this.node, "d");
            return e.stop(), t
        })(-1), e.on("snap.util.getattr.class", function () {
            return this.node.className.baseVal
        })(-1), e.on("snap.util.getattr.fontSize", h)(-1), e.on("snap.util.getattr.font-size", h)(-1)
    }), n.plugin(function (t, e, i, n, r) {
        var s = /\S+/g, o = String, a = e.prototype;
        a.addClass = function (t) {
            var e, i, n, r, a = o(t || "").match(s) || [], l = this.node, h = l.className.baseVal, c = h.match(s) || [];
            if (a.length) {
                for (e = 0; n = a[e++];) i = c.indexOf(n), ~i || c.push(n);
                r = c.join(" "), h != r && (l.className.baseVal = r)
            }
            return this
        }, a.removeClass = function (t) {
            var e, i, n, r, a = o(t || "").match(s) || [], l = this.node, h = l.className.baseVal, c = h.match(s) || [];
            if (c.length) {
                for (e = 0; n = a[e++];) i = c.indexOf(n), ~i && c.splice(i, 1);
                r = c.join(" "), h != r && (l.className.baseVal = r)
            }
            return this
        }, a.hasClass = function (t) {
            var e = this.node, i = e.className.baseVal, n = i.match(s) || [];
            return !!~n.indexOf(t)
        }, a.toggleClass = function (t, e) {
            if (null != e) return e ? this.addClass(t) : this.removeClass(t);
            var i, n, r, o, a = (t || "").match(s) || [], l = this.node, h = l.className.baseVal, c = h.match(s) || [];
            for (i = 0; r = a[i++];) n = c.indexOf(r), ~n ? c.splice(n, 1) : c.push(r);
            return o = c.join(" "), h != o && (l.className.baseVal = o), this
        }
    }), n.plugin(function (t, i, n, r, s) {
        function o(t) {
            return t
        }

        function a(t) {
            return function (e) {
                return +e.toFixed(3) + t
            }
        }

        var l = {
            "+": function (t, e) {
                return t + e
            }, "-": function (t, e) {
                return t - e
            }, "/": function (t, e) {
                return t / e
            }, "*": function (t, e) {
                return t * e
            }
        }, h = String, c = /[a-z]+$/i, u = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
        e.on("snap.util.attr", function (t) {
            var i = h(t).match(u);
            if (i) {
                var n = e.nt(), r = n.substring(n.lastIndexOf(".") + 1), s = this.attr(r), o = {};
                e.stop();
                var a = i[3] || "", p = s.match(c), d = l[i[1]];
                if (p && p == a ? t = d(parseFloat(s), +i[2]) : (s = this.asPX(r), t = d(this.asPX(r), this.asPX(r, i[2] + a))), isNaN(s) || isNaN(t)) return;
                o[r] = t, this.attr(o)
            }
        })(-10), e.on("snap.util.equal", function (t, i) {
            var n = h(this.attr(t) || ""), r = h(i).match(u);
            if (r) {
                e.stop();
                var s = r[3] || "", p = n.match(c), d = l[r[1]];
                return p && p == s ? {
                    from: parseFloat(n),
                    to: d(parseFloat(n), +r[2]),
                    f: a(p)
                } : (n = this.asPX(t), {from: n, to: d(n, this.asPX(t, r[2] + s)), f: o})
            }
        })(-10)
    }), n.plugin(function (i, n, r, s, o) {
        var a = r.prototype, l = i.is;
        a.rect = function (t, e, i, n, r, s) {
            var o;
            return null == s && (s = r), l(t, "object") && "[object Object]" == t ? o = t : null != t && (o = {
                x: t,
                y: e,
                width: i,
                height: n
            }, null != r && (o.rx = r, o.ry = s)), this.el("rect", o)
        }, a.circle = function (t, e, i) {
            var n;
            return l(t, "object") && "[object Object]" == t ? n = t : null != t && (n = {
                cx: t,
                cy: e,
                r: i
            }), this.el("circle", n)
        };
        var h = function () {
            function t() {
                this.parentNode.removeChild(this)
            }

            return function (e, i) {
                var n = s.doc.createElement("img"), r = s.doc.body;
                n.style.cssText = "position:absolute;left:-9999em;top:-9999em", n.onload = function () {
                    i.call(n), n.onload = n.onerror = null, r.removeChild(n)
                }, n.onerror = t, r.appendChild(n), n.src = e
            }
        }();
        a.image = function (t, e, n, r, s) {
            var o = this.el("image");
            if (l(t, "object") && "src" in t) o.attr(t); else if (null != t) {
                var a = {"xlink:href": t, preserveAspectRatio: "none"};
                null != e && null != n && (a.x = e, a.y = n), null != r && null != s ? (a.width = r, a.height = s) : h(t, function () {
                    i._.$(o.node, {width: this.offsetWidth, height: this.offsetHeight})
                }), i._.$(o.node, a)
            }
            return o
        }, a.ellipse = function (t, e, i, n) {
            var r;
            return l(t, "object") && "[object Object]" == t ? r = t : null != t && (r = {
                cx: t,
                cy: e,
                rx: i,
                ry: n
            }), this.el("ellipse", r)
        }, a.path = function (t) {
            var e;
            return l(t, "object") && !l(t, "array") ? e = t : t && (e = {d: t}), this.el("path", e)
        }, a.group = a.g = function (t) {
            var e = this.el("g");
            return 1 == arguments.length && t && !t.type ? e.attr(t) : arguments.length && e.add(Array.prototype.slice.call(arguments, 0)), e
        }, a.svg = function (t, e, i, n, r, s, o, a) {
            var h = {};
            return l(t, "object") && null == e ? h = t : (null != t && (h.x = t), null != e && (h.y = e), null != i && (h.width = i), null != n && (h.height = n), null != r && null != s && null != o && null != a && (h.viewBox = [r, s, o, a])), this.el("svg", h)
        }, a.mask = function (t) {
            var e = this.el("mask");
            return 1 == arguments.length && t && !t.type ? e.attr(t) : arguments.length && e.add(Array.prototype.slice.call(arguments, 0)), e
        }, a.ptrn = function (t, e, i, n, r, s, o, a) {
            if (l(t, "object")) var h = t; else h = {patternUnits: "userSpaceOnUse"}, t && (h.x = t), e && (h.y = e), null != i && (h.width = i), null != n && (h.height = n), null != r && null != s && null != o && null != a ? h.viewBox = [r, s, o, a] : h.viewBox = [t || 0, e || 0, i || 0, n || 0];
            return this.el("pattern", h)
        }, a.use = function (t) {
            return null != t ? (t instanceof n && (t.attr("id") || t.attr({id: i._.id(t)}), t = t.attr("id")), "#" == String(t).charAt() && (t = t.substring(1)), this.el("use", {"xlink:href": "#" + t})) : n.prototype.use.call(this)
        }, a.symbol = function (t, e, i, n) {
            var r = {};
            return null != t && null != e && null != i && null != n && (r.viewBox = [t, e, i, n]), this.el("symbol", r)
        }, a.text = function (t, e, i) {
            var n = {};
            return l(t, "object") ? n = t : null != t && (n = {x: t, y: e, text: i || ""}), this.el("text", n)
        }, a.line = function (t, e, i, n) {
            var r = {};
            return l(t, "object") ? r = t : null != t && (r = {x1: t, x2: i, y1: e, y2: n}), this.el("line", r)
        }, a.polyline = function (t) {
            arguments.length > 1 && (t = Array.prototype.slice.call(arguments, 0));
            var e = {};
            return l(t, "object") && !l(t, "array") ? e = t : null != t && (e = {points: t}), this.el("polyline", e)
        }, a.polygon = function (t) {
            arguments.length > 1 && (t = Array.prototype.slice.call(arguments, 0));
            var e = {};
            return l(t, "object") && !l(t, "array") ? e = t : null != t && (e = {points: t}), this.el("polygon", e)
        }, function () {
            function n() {
                return this.selectAll("stop")
            }

            function r(t, e) {
                var n = u("stop"), r = {offset: +e + "%"};
                t = i.color(t), r["stop-color"] = t.hex, t.opacity < 1 && (r["stop-opacity"] = t.opacity), u(n, r);
                for (var s, o = this.stops(), a = 0; a < o.length; a++) {
                    var l = parseFloat(o[a].attr("offset"));
                    if (l > e) {
                        this.node.insertBefore(n, o[a].node), s = !0;
                        break
                    }
                }
                return s || this.node.appendChild(n), this
            }

            function s() {
                if ("linearGradient" == this.type) {
                    var t = u(this.node, "x1") || 0, e = u(this.node, "x2") || 1, n = u(this.node, "y1") || 0,
                        r = u(this.node, "y2") || 0;
                    return i._.box(t, n, math.abs(e - t), math.abs(r - n))
                }
                var s = this.node.cx || .5, o = this.node.cy || .5, a = this.node.r || 0;
                return i._.box(s - a, o - a, 2 * a, 2 * a)
            }

            function o(t) {
                var n = t, r = this.stops();
                if ("string" == typeof t && (n = e("snap.util.grad.parse", null, "l(0,0,0,1)" + t).firstDefined().stops), i.is(n, "array")) {
                    for (var s = 0; s < r.length; s++) if (n[s]) {
                        var o = i.color(n[s].color), a = {offset: n[s].offset + "%"};
                        a["stop-color"] = o.hex, o.opacity < 1 && (a["stop-opacity"] = o.opacity), r[s].attr(a)
                    } else r[s].remove();
                    for (s = r.length; s < n.length; s++) this.addStop(n[s].color, n[s].offset);
                    return this
                }
            }

            function l(t, i) {
                var n, r = e("snap.util.grad.parse", null, i).firstDefined();
                if (!r) return null;
                r.params.unshift(t), n = "l" == r.type.toLowerCase() ? h.apply(0, r.params) : c.apply(0, r.params), r.type != r.type.toLowerCase() && u(n.node, {gradientUnits: "userSpaceOnUse"});
                for (var s = r.stops, o = s.length, a = 0; o > a; a++) {
                    var l = s[a];
                    n.addStop(l.color, l.offset)
                }
                return n
            }

            function h(t, e, a, l, h) {
                var c = i._.make("linearGradient", t);
                return c.stops = n, c.addStop = r, c.getBBox = s, c.setStops = o, null != e && u(c.node, {
                    x1: e,
                    y1: a,
                    x2: l,
                    y2: h
                }), c
            }

            function c(t, e, o, a, l, h) {
                var c = i._.make("radialGradient", t);
                return c.stops = n, c.addStop = r, c.getBBox = s, null != e && u(c.node, {
                    cx: e,
                    cy: o,
                    r: a
                }), null != l && null != h && u(c.node, {fx: l, fy: h}), c
            }

            var u = i._.$;
            a.gradient = function (t) {
                return l(this.defs, t)
            }, a.gradientLinear = function (t, e, i, n) {
                return h(this.defs, t, e, i, n)
            }, a.gradientRadial = function (t, e, i, n, r) {
                return c(this.defs, t, e, i, n, r)
            }, a.toString = function () {
                var t, e = this.node.ownerDocument, n = e.createDocumentFragment(), r = e.createElement("div"),
                    s = this.node.cloneNode(!0);
                return n.appendChild(r), r.appendChild(s), i._.$(s, {xmlns: "http://www.w3.org/2000/svg"}), t = r.innerHTML, n.removeChild(n.firstChild), t
            }, a.toDataURL = function () {
                return t && t.btoa ? "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(this))) : void 0
            }, a.clear = function () {
                for (var t, e = this.node.firstChild; e;) t = e.nextSibling, "defs" != e.tagName ? e.parentNode.removeChild(e) : a.clear.call({node: e}), e = t
            }
        }()
    }), n.plugin(function (t, e, i, n) {
        function r(t) {
            var e = r.ps = r.ps || {};
            return e[t] ? e[t].sleep = 100 : e[t] = {sleep: 100}, setTimeout(function () {
                for (var i in e) e[L](i) && i != t && (e[i].sleep--, !e[i].sleep && delete e[i])
            }), e[t]
        }

        function s(t, e, i, n) {
            return null == t && (t = e = i = n = 0), null == e && (e = t.y, i = t.width, n = t.height, t = t.x), {
                x: t,
                y: e,
                width: i,
                w: i,
                height: n,
                h: n,
                x2: t + i,
                y2: e + n,
                cx: t + i / 2,
                cy: e + n / 2,
                r1: z.min(i, n) / 2,
                r2: z.max(i, n) / 2,
                r0: z.sqrt(i * i + n * n) / 2,
                path: C(t, e, i, n),
                vb: [t, e, i, n].join(" ")
            }
        }

        function o() {
            return this.join(",").replace(B, "$1")
        }

        function a(t) {
            var e = I(t);
            return e.toString = o, e
        }

        function l(t, e, i, n, r, s, o, a, l) {
            return null == l ? m(t, e, i, n, r, s, o, a) : c(t, e, i, n, r, s, o, a, g(t, e, i, n, r, s, o, a, l))
        }

        function h(i, n) {
            function r(t) {
                return +(+t).toFixed(3)
            }

            return t._.cacher(function (t, s, o) {
                t instanceof e && (t = t.attr("d")), t = P(t);
                for (var a, h, u, p, d, f = "", m = {}, g = 0, v = 0, y = t.length; y > v; v++) {
                    if (u = t[v], "M" == u[0]) a = +u[1], h = +u[2]; else {
                        if (p = l(a, h, u[1], u[2], u[3], u[4], u[5], u[6]), g + p > s) {
                            if (n && !m.start) {
                                if (d = l(a, h, u[1], u[2], u[3], u[4], u[5], u[6], s - g), f += ["C" + r(d.start.x), r(d.start.y), r(d.m.x), r(d.m.y), r(d.x), r(d.y)], o) return f;
                                m.start = f, f = ["M" + r(d.x), r(d.y) + "C" + r(d.n.x), r(d.n.y), r(d.end.x), r(d.end.y), r(u[5]), r(u[6])].join(), g += p, a = +u[5], h = +u[6];
                                continue
                            }
                            if (!i && !n) return d = l(a, h, u[1], u[2], u[3], u[4], u[5], u[6], s - g)
                        }
                        g += p, a = +u[5], h = +u[6]
                    }
                    f += u.shift() + u
                }
                return m.end = f, d = i ? g : n ? m : c(a, h, u[0], u[1], u[2], u[3], u[4], u[5], 1)
            }, null, t._.clone)
        }

        function c(t, e, i, n, r, s, o, a, l) {
            var h = 1 - l, c = Y(h, 3), u = Y(h, 2), p = l * l, d = p * l,
                f = c * t + 3 * u * l * i + 3 * h * l * l * r + d * o,
                m = c * e + 3 * u * l * n + 3 * h * l * l * s + d * a, g = t + 2 * l * (i - t) + p * (r - 2 * i + t),
                v = e + 2 * l * (n - e) + p * (s - 2 * n + e), y = i + 2 * l * (r - i) + p * (o - 2 * r + i),
                b = n + 2 * l * (s - n) + p * (a - 2 * s + n), x = h * t + l * i, _ = h * e + l * n, w = h * r + l * o,
                T = h * s + l * a, C = 90 - 180 * z.atan2(g - y, v - b) / H;
            return {x: f, y: m, m: {x: g, y: v}, n: {x: y, y: b}, start: {x: x, y: _}, end: {x: w, y: T}, alpha: C}
        }

        function u(e, i, n, r, o, a, l, h) {
            t.is(e, "array") || (e = [e, i, n, r, o, a, l, h]);
            var c = $.apply(null, e);
            return s(c.min.x, c.min.y, c.max.x - c.min.x, c.max.y - c.min.y)
        }

        function p(t, e, i) {
            return e >= t.x && e <= t.x + t.width && i >= t.y && i <= t.y + t.height
        }

        function d(t, e) {
            return t = s(t), e = s(e), p(e, t.x, t.y) || p(e, t.x2, t.y) || p(e, t.x, t.y2) || p(e, t.x2, t.y2) || p(t, e.x, e.y) || p(t, e.x2, e.y) || p(t, e.x, e.y2) || p(t, e.x2, e.y2) || (t.x < e.x2 && t.x > e.x || e.x < t.x2 && e.x > t.x) && (t.y < e.y2 && t.y > e.y || e.y < t.y2 && e.y > t.y)
        }

        function f(t, e, i, n, r) {
            var s = -3 * e + 9 * i - 9 * n + 3 * r, o = t * s + 6 * e - 12 * i + 6 * n;
            return t * o - 3 * e + 3 * i
        }

        function m(t, e, i, n, r, s, o, a, l) {
            null == l && (l = 1), l = l > 1 ? 1 : 0 > l ? 0 : l;
            for (var h = l / 2, c = 12, u = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], p = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], d = 0, m = 0; c > m; m++) {
                var g = h * u[m] + h, v = f(g, t, i, r, o), y = f(g, e, n, s, a), b = v * v + y * y;
                d += p[m] * z.sqrt(b)
            }
            return h * d
        }

        function g(t, e, i, n, r, s, o, a, l) {
            if (!(0 > l || m(t, e, i, n, r, s, o, a) < l)) {
                var h, c = 1, u = c / 2, p = c - u, d = .01;
                for (h = m(t, e, i, n, r, s, o, a, p); U(h - l) > d;) u /= 2, p += (l > h ? 1 : -1) * u, h = m(t, e, i, n, r, s, o, a, p);
                return p
            }
        }

        function v(t, e, i, n, r, s, o, a) {
            if (!(X(t, i) < q(r, o) || q(t, i) > X(r, o) || X(e, n) < q(s, a) || q(e, n) > X(s, a))) {
                var l = (t * n - e * i) * (r - o) - (t - i) * (r * a - s * o),
                    h = (t * n - e * i) * (s - a) - (e - n) * (r * a - s * o),
                    c = (t - i) * (s - a) - (e - n) * (r - o);
                if (c) {
                    var u = l / c, p = h / c, d = +u.toFixed(2), f = +p.toFixed(2);
                    if (!(d < +q(t, i).toFixed(2) || d > +X(t, i).toFixed(2) || d < +q(r, o).toFixed(2) || d > +X(r, o).toFixed(2) || f < +q(e, n).toFixed(2) || f > +X(e, n).toFixed(2) || f < +q(s, a).toFixed(2) || f > +X(s, a).toFixed(2))) return {
                        x: u,
                        y: p
                    }
                }
            }
        }

        function y(t, e, i) {
            var n = u(t), r = u(e);
            if (!d(n, r)) return i ? 0 : [];
            for (var s = m.apply(0, t), o = m.apply(0, e), a = ~~(s / 8), l = ~~(o / 8), h = [], p = [], f = {}, g = i ? 0 : [], y = 0; a + 1 > y; y++) {
                var b = c.apply(0, t.concat(y / a));
                h.push({x: b.x, y: b.y, t: y / a})
            }
            for (y = 0; l + 1 > y; y++) b = c.apply(0, e.concat(y / l)), p.push({x: b.x, y: b.y, t: y / l});
            for (y = 0; a > y; y++) for (var x = 0; l > x; x++) {
                var _ = h[y], w = h[y + 1], T = p[x], C = p[x + 1], S = U(w.x - _.x) < .001 ? "y" : "x",
                    k = U(C.x - T.x) < .001 ? "y" : "x", E = v(_.x, _.y, w.x, w.y, T.x, T.y, C.x, C.y);
                if (E) {
                    if (f[E.x.toFixed(4)] == E.y.toFixed(4)) continue;
                    f[E.x.toFixed(4)] = E.y.toFixed(4);
                    var A = _.t + U((E[S] - _[S]) / (w[S] - _[S])) * (w.t - _.t),
                        D = T.t + U((E[k] - T[k]) / (C[k] - T[k])) * (C.t - T.t);
                    A >= 0 && 1 >= A && D >= 0 && 1 >= D && (i ? g++ : g.push({x: E.x, y: E.y, t1: A, t2: D}))
                }
            }
            return g
        }

        function b(t, e) {
            return _(t, e)
        }

        function x(t, e) {
            return _(t, e, 1)
        }

        function _(t, e, i) {
            t = P(t), e = P(e);
            for (var n, r, s, o, a, l, h, c, u, p, d = i ? 0 : [], f = 0, m = t.length; m > f; f++) {
                var g = t[f];
                if ("M" == g[0]) n = a = g[1], r = l = g[2]; else {
                    "C" == g[0] ? (u = [n, r].concat(g.slice(1)), n = u[6], r = u[7]) : (u = [n, r, n, r, a, l, a, l], n = a, r = l);
                    for (var v = 0, b = e.length; b > v; v++) {
                        var x = e[v];
                        if ("M" == x[0]) s = h = x[1], o = c = x[2]; else {
                            "C" == x[0] ? (p = [s, o].concat(x.slice(1)), s = p[6], o = p[7]) : (p = [s, o, s, o, h, c, h, c], s = h, o = c);
                            var _ = y(u, p, i);
                            if (i) d += _; else {
                                for (var w = 0, T = _.length; T > w; w++) _[w].segment1 = f, _[w].segment2 = v, _[w].bez1 = u, _[w].bez2 = p;
                                d = d.concat(_)
                            }
                        }
                    }
                }
            }
            return d
        }

        function w(t, e, i) {
            var n = T(t);
            return p(n, e, i) && _(t, [["M", e, i], ["H", n.x2 + 10]], 1) % 2 == 1
        }

        function T(t) {
            var e = r(t);
            if (e.bbox) return I(e.bbox);
            if (!t) return s();
            t = P(t);
            for (var i, n = 0, o = 0, a = [], l = [], h = 0, c = t.length; c > h; h++) if (i = t[h], "M" == i[0]) n = i[1], o = i[2], a.push(n), l.push(o); else {
                var u = $(n, o, i[1], i[2], i[3], i[4], i[5], i[6]);
                a = a.concat(u.min.x, u.max.x), l = l.concat(u.min.y, u.max.y), n = i[5], o = i[6]
            }
            var p = q.apply(0, a), d = q.apply(0, l), f = X.apply(0, a), m = X.apply(0, l), g = s(p, d, f - p, m - d);
            return e.bbox = I(g), g
        }

        function C(t, e, i, n, r) {
            if (r) return [["M", +t + +r, e], ["l", i - 2 * r, 0], ["a", r, r, 0, 0, 1, r, r], ["l", 0, n - 2 * r], ["a", r, r, 0, 0, 1, -r, r], ["l", 2 * r - i, 0], ["a", r, r, 0, 0, 1, -r, -r], ["l", 0, 2 * r - n], ["a", r, r, 0, 0, 1, r, -r], ["z"]];
            var s = [["M", t, e], ["l", i, 0], ["l", 0, n], ["l", -i, 0], ["z"]];
            return s.toString = o, s
        }

        function S(t, e, i, n, r) {
            if (null == r && null == n && (n = i), t = +t, e = +e, i = +i, n = +n, null != r) var s = Math.PI / 180,
                a = t + i * Math.cos(-n * s), l = t + i * Math.cos(-r * s), h = e + i * Math.sin(-n * s),
                c = e + i * Math.sin(-r * s),
                u = [["M", a, h], ["A", i, i, 0, +(r - n > 180), 0, l, c]]; else u = [["M", t, e], ["m", 0, -n], ["a", i, n, 0, 1, 1, 0, 2 * n], ["a", i, n, 0, 1, 1, 0, -2 * n], ["z"]];
            return u.toString = o, u
        }

        function k(e) {
            var i = r(e), n = String.prototype.toLowerCase;
            if (i.rel) return a(i.rel);
            t.is(e, "array") && t.is(e && e[0], "array") || (e = t.parsePathString(e));
            var s = [], l = 0, h = 0, c = 0, u = 0, p = 0;
            "M" == e[0][0] && (l = e[0][1], h = e[0][2], c = l, u = h, p++, s.push(["M", l, h]));
            for (var d = p, f = e.length; f > d; d++) {
                var m = s[d] = [], g = e[d];
                if (g[0] != n.call(g[0])) switch (m[0] = n.call(g[0]), m[0]) {
                    case"a":
                        m[1] = g[1], m[2] = g[2], m[3] = g[3], m[4] = g[4], m[5] = g[5], m[6] = +(g[6] - l).toFixed(3), m[7] = +(g[7] - h).toFixed(3);
                        break;
                    case"v":
                        m[1] = +(g[1] - h).toFixed(3);
                        break;
                    case"m":
                        c = g[1], u = g[2];
                    default:
                        for (var v = 1, y = g.length; y > v; v++) m[v] = +(g[v] - (v % 2 ? l : h)).toFixed(3)
                } else {
                    m = s[d] = [], "m" == g[0] && (c = g[1] + l, u = g[2] + h);
                    for (var b = 0, x = g.length; x > b; b++) s[d][b] = g[b]
                }
                var _ = s[d].length;
                switch (s[d][0]) {
                    case"z":
                        l = c, h = u;
                        break;
                    case"h":
                        l += +s[d][_ - 1];
                        break;
                    case"v":
                        h += +s[d][_ - 1];
                        break;
                    default:
                        l += +s[d][_ - 2], h += +s[d][_ - 1]
                }
            }
            return s.toString = o, i.rel = a(s), s
        }

        function E(e) {
            var i = r(e);
            if (i.abs) return a(i.abs);
            if (R(e, "array") && R(e && e[0], "array") || (e = t.parsePathString(e)), !e || !e.length) return [["M", 0, 0]];
            var n, s = [], l = 0, h = 0, c = 0, u = 0, p = 0;
            "M" == e[0][0] && (l = +e[0][1], h = +e[0][2], c = l, u = h, p++, s[0] = ["M", l, h]);
            for (var d, f, m = 3 == e.length && "M" == e[0][0] && "R" == e[1][0].toUpperCase() && "Z" == e[2][0].toUpperCase(), g = p, v = e.length; v > g; g++) {
                if (s.push(d = []), f = e[g], n = f[0], n != n.toUpperCase()) switch (d[0] = n.toUpperCase(), d[0]) {
                    case"A":
                        d[1] = f[1], d[2] = f[2], d[3] = f[3], d[4] = f[4], d[5] = f[5], d[6] = +f[6] + l, d[7] = +f[7] + h;
                        break;
                    case"V":
                        d[1] = +f[1] + h;
                        break;
                    case"H":
                        d[1] = +f[1] + l;
                        break;
                    case"R":
                        for (var y = [l, h].concat(f.slice(1)), b = 2, x = y.length; x > b; b++) y[b] = +y[b] + l, y[++b] = +y[b] + h;
                        s.pop(), s = s.concat(N(y, m));
                        break;
                    case"O":
                        s.pop(), y = S(l, h, f[1], f[2]), y.push(y[0]), s = s.concat(y);
                        break;
                    case"U":
                        s.pop(), s = s.concat(S(l, h, f[1], f[2], f[3])), d = ["U"].concat(s[s.length - 1].slice(-2));
                        break;
                    case"M":
                        c = +f[1] + l, u = +f[2] + h;
                    default:
                        for (b = 1, x = f.length; x > b; b++) d[b] = +f[b] + (b % 2 ? l : h)
                } else if ("R" == n) y = [l, h].concat(f.slice(1)), s.pop(), s = s.concat(N(y, m)), d = ["R"].concat(f.slice(-2)); else if ("O" == n) s.pop(), y = S(l, h, f[1], f[2]), y.push(y[0]), s = s.concat(y); else if ("U" == n) s.pop(), s = s.concat(S(l, h, f[1], f[2], f[3])), d = ["U"].concat(s[s.length - 1].slice(-2)); else for (var _ = 0, w = f.length; w > _; _++) d[_] = f[_];
                if (n = n.toUpperCase(), "O" != n) switch (d[0]) {
                    case"Z":
                        l = +c, h = +u;
                        break;
                    case"H":
                        l = d[1];
                        break;
                    case"V":
                        h = d[1];
                        break;
                    case"M":
                        c = d[d.length - 2], u = d[d.length - 1];
                    default:
                        l = d[d.length - 2], h = d[d.length - 1]
                }
            }
            return s.toString = o, i.abs = a(s), s
        }

        function A(t, e, i, n) {
            return [t, e, i, n, i, n]
        }

        function D(t, e, i, n, r, s) {
            var o = 1 / 3, a = 2 / 3;
            return [o * t + a * i, o * e + a * n, o * r + a * i, o * s + a * n, r, s]
        }

        function F(e, i, n, r, s, o, a, l, h, c) {
            var u, p = 120 * H / 180, d = H / 180 * (+s || 0), f = [], m = t._.cacher(function (t, e, i) {
                var n = t * z.cos(i) - e * z.sin(i), r = t * z.sin(i) + e * z.cos(i);
                return {x: n, y: r}
            });
            if (!n || !r) return [e, i, l, h, l, h];
            if (c) C = c[0], S = c[1], w = c[2], T = c[3]; else {
                u = m(e, i, -d), e = u.x, i = u.y, u = m(l, h, -d), l = u.x, h = u.y;
                var g = (z.cos(H / 180 * s), z.sin(H / 180 * s), (e - l) / 2), v = (i - h) / 2,
                    y = g * g / (n * n) + v * v / (r * r);
                y > 1 && (y = z.sqrt(y), n = y * n, r = y * r);
                var b = n * n, x = r * r,
                    _ = (o == a ? -1 : 1) * z.sqrt(U((b * x - b * v * v - x * g * g) / (b * v * v + x * g * g))),
                    w = _ * n * v / r + (e + l) / 2, T = _ * -r * g / n + (i + h) / 2,
                    C = z.asin(((i - T) / r).toFixed(9)), S = z.asin(((h - T) / r).toFixed(9));
                C = w > e ? H - C : C, S = w > l ? H - S : S, 0 > C && (C = 2 * H + C), 0 > S && (S = 2 * H + S), a && C > S && (C -= 2 * H), !a && S > C && (S -= 2 * H)
            }
            var k = S - C;
            if (U(k) > p) {
                var E = S, A = l, D = h;
                S = C + p * (a && S > C ? 1 : -1), l = w + n * z.cos(S), h = T + r * z.sin(S), f = F(l, h, n, r, s, 0, a, A, D, [S, E, w, T])
            }
            k = S - C;
            var $ = z.cos(C), P = z.sin(C), O = z.cos(S), N = z.sin(S), M = z.tan(k / 4), R = 4 / 3 * n * M,
                I = 4 / 3 * r * M, L = [e, i], B = [e + R * P, i - I * $], j = [l + R * N, h - I * O], q = [l, h];
            if (B[0] = 2 * L[0] - B[0], B[1] = 2 * L[1] - B[1], c) return [B, j, q].concat(f);
            f = [B, j, q].concat(f).join().split(",");
            for (var X = [], Y = 0, W = f.length; W > Y; Y++) X[Y] = Y % 2 ? m(f[Y - 1], f[Y], d).y : m(f[Y], f[Y + 1], d).x;
            return X
        }

        function $(t, e, i, n, r, s, o, a) {
            for (var l, h, c, u, p, d, f, m, g = [], v = [[], []], y = 0; 2 > y; ++y) if (0 == y ? (h = 6 * t - 12 * i + 6 * r, l = -3 * t + 9 * i - 9 * r + 3 * o, c = 3 * i - 3 * t) : (h = 6 * e - 12 * n + 6 * s, l = -3 * e + 9 * n - 9 * s + 3 * a, c = 3 * n - 3 * e), U(l) < 1e-12) {
                if (U(h) < 1e-12) continue;
                u = -c / h, u > 0 && 1 > u && g.push(u)
            } else f = h * h - 4 * c * l, m = z.sqrt(f), 0 > f || (p = (-h + m) / (2 * l), p > 0 && 1 > p && g.push(p), d = (-h - m) / (2 * l), d > 0 && 1 > d && g.push(d));
            for (var b, x = g.length, _ = x; x--;) u = g[x], b = 1 - u, v[0][x] = b * b * b * t + 3 * b * b * u * i + 3 * b * u * u * r + u * u * u * o, v[1][x] = b * b * b * e + 3 * b * b * u * n + 3 * b * u * u * s + u * u * u * a;
            return v[0][_] = t, v[1][_] = e, v[0][_ + 1] = o, v[1][_ + 1] = a, v[0].length = v[1].length = _ + 2, {
                min: {
                    x: q.apply(0, v[0]),
                    y: q.apply(0, v[1])
                }, max: {x: X.apply(0, v[0]), y: X.apply(0, v[1])}
            }
        }

        function P(t, e) {
            var i = !e && r(t);
            if (!e && i.curve) return a(i.curve);
            for (var n = E(t), s = e && E(e), o = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null}, l = {
                x: 0,
                y: 0,
                bx: 0,
                by: 0,
                X: 0,
                Y: 0,
                qx: null,
                qy: null
            }, h = (function (t, e, i) {
                var n, r;
                if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
                switch (!(t[0] in {T: 1, Q: 1}) && (e.qx = e.qy = null), t[0]) {
                    case"M":
                        e.X = t[1], e.Y = t[2];
                        break;
                    case"A":
                        t = ["C"].concat(F.apply(0, [e.x, e.y].concat(t.slice(1))));
                        break;
                    case"S":
                        "C" == i || "S" == i ? (n = 2 * e.x - e.bx, r = 2 * e.y - e.by) : (n = e.x, r = e.y), t = ["C", n, r].concat(t.slice(1));
                        break;
                    case"T":
                        "Q" == i || "T" == i ? (e.qx = 2 * e.x - e.qx, e.qy = 2 * e.y - e.qy) : (e.qx = e.x, e.qy = e.y), t = ["C"].concat(D(e.x, e.y, e.qx, e.qy, t[1], t[2]));
                        break;
                    case"Q":
                        e.qx = t[1], e.qy = t[2], t = ["C"].concat(D(e.x, e.y, t[1], t[2], t[3], t[4]));
                        break;
                    case"L":
                        t = ["C"].concat(A(e.x, e.y, t[1], t[2]));
                        break;
                    case"H":
                        t = ["C"].concat(A(e.x, e.y, t[1], e.y));
                        break;
                    case"V":
                        t = ["C"].concat(A(e.x, e.y, e.x, t[1]));
                        break;
                    case"Z":
                        t = ["C"].concat(A(e.x, e.y, e.X, e.Y))
                }
                return t
            }), c = function (t, e) {
                if (t[e].length > 7) {
                    t[e].shift();
                    for (var i = t[e]; i.length;) p[e] = "A", s && (d[e] = "A"), t.splice(e++, 0, ["C"].concat(i.splice(0, 6)));
                    t.splice(e, 1), v = X(n.length, s && s.length || 0)
                }
            }, u = function (t, e, i, r, o) {
                t && e && "M" == t[o][0] && "M" != e[o][0] && (e.splice(o, 0, ["M", r.x, r.y]), i.bx = 0, i.by = 0, i.x = t[o][1], i.y = t[o][2], v = X(n.length, s && s.length || 0))
            }, p = [], d = [], f = "", m = "", g = 0, v = X(n.length, s && s.length || 0); v > g; g++) {
                n[g] && (f = n[g][0]), "C" != f && (p[g] = f, g && (m = p[g - 1])), n[g] = h(n[g], o, m), "A" != p[g] && "C" == f && (p[g] = "C"), c(n, g), s && (s[g] && (f = s[g][0]), "C" != f && (d[g] = f, g && (m = d[g - 1])), s[g] = h(s[g], l, m), "A" != d[g] && "C" == f && (d[g] = "C"), c(s, g)), u(n, s, o, l, g), u(s, n, l, o, g);
                var y = n[g], b = s && s[g], x = y.length, _ = s && b.length;
                o.x = y[x - 2], o.y = y[x - 1], o.bx = j(y[x - 4]) || o.x, o.by = j(y[x - 3]) || o.y, l.bx = s && (j(b[_ - 4]) || l.x), l.by = s && (j(b[_ - 3]) || l.y), l.x = s && b[_ - 2], l.y = s && b[_ - 1]
            }
            return s || (i.curve = a(n)), s ? [n, s] : n
        }

        function O(t, e) {
            if (!e) return t;
            var i, n, r, s, o, a, l;
            for (t = P(t), r = 0, o = t.length; o > r; r++) for (l = t[r], s = 1, a = l.length; a > s; s += 2) i = e.x(l[s], l[s + 1]), n = e.y(l[s], l[s + 1]), l[s] = i, l[s + 1] = n;
            return t
        }

        function N(t, e) {
            for (var i = [], n = 0, r = t.length; r - 2 * !e > n; n += 2) {
                var s = [{x: +t[n - 2], y: +t[n - 1]}, {x: +t[n], y: +t[n + 1]}, {
                    x: +t[n + 2],
                    y: +t[n + 3]
                }, {x: +t[n + 4], y: +t[n + 5]}];
                e ? n ? r - 4 == n ? s[3] = {x: +t[0], y: +t[1]} : r - 2 == n && (s[2] = {
                    x: +t[0],
                    y: +t[1]
                }, s[3] = {x: +t[2], y: +t[3]}) : s[0] = {
                    x: +t[r - 2],
                    y: +t[r - 1]
                } : r - 4 == n ? s[3] = s[2] : n || (s[0] = {
                    x: +t[n],
                    y: +t[n + 1]
                }), i.push(["C", (-s[0].x + 6 * s[1].x + s[2].x) / 6, (-s[0].y + 6 * s[1].y + s[2].y) / 6, (s[1].x + 6 * s[2].x - s[3].x) / 6, (s[1].y + 6 * s[2].y - s[3].y) / 6, s[2].x, s[2].y])
            }
            return i
        }

        var M = e.prototype, R = t.is, I = t._.clone, L = "hasOwnProperty", B = /,?([a-z]),?/gi, j = parseFloat,
            z = Math, H = z.PI, q = z.min, X = z.max, Y = z.pow, U = z.abs, W = h(1), V = h(), G = h(0, 1),
            Q = t._unit2px, Z = {
                path: function (t) {
                    return t.attr("path")
                }, circle: function (t) {
                    var e = Q(t);
                    return S(e.cx, e.cy, e.r)
                }, ellipse: function (t) {
                    var e = Q(t);
                    return S(e.cx || 0, e.cy || 0, e.rx, e.ry)
                }, rect: function (t) {
                    var e = Q(t);
                    return C(e.x || 0, e.y || 0, e.width, e.height, e.rx, e.ry)
                }, image: function (t) {
                    var e = Q(t);
                    return C(e.x || 0, e.y || 0, e.width, e.height)
                }, line: function (t) {
                    return "M" + [t.attr("x1") || 0, t.attr("y1") || 0, t.attr("x2"), t.attr("y2")]
                }, polyline: function (t) {
                    return "M" + t.attr("points")
                }, polygon: function (t) {
                    return "M" + t.attr("points") + "z"
                }, deflt: function (t) {
                    var e = t.node.getBBox();
                    return C(e.x, e.y, e.width, e.height)
                }
            };
        t.path = r, t.path.getTotalLength = W, t.path.getPointAtLength = V, t.path.getSubpath = function (t, e, i) {
            if (this.getTotalLength(t) - i < 1e-6) return G(t, e).end;
            var n = G(t, i, 1);
            return e ? G(n, e).end : n
        }, M.getTotalLength = function () {
            return this.node.getTotalLength ? this.node.getTotalLength() : void 0
        }, M.getPointAtLength = function (t) {
            return V(this.attr("d"), t)
        }, M.getSubpath = function (e, i) {
            return t.path.getSubpath(this.attr("d"), e, i)
        }, t._.box = s, t.path.findDotsAtSegment = c, t.path.bezierBBox = u, t.path.isPointInsideBBox = p, t.closest = function (e, i, n, r) {
            for (var o = 100, a = s(e - o / 2, i - o / 2, o, o), l = [], h = n[0].hasOwnProperty("x") ? function (t) {
                return {x: n[t].x, y: n[t].y}
            } : function (t) {
                return {x: n[t], y: r[t]}
            }, c = 0; 1e6 >= o && !c;) {
                for (var u = 0, d = n.length; d > u; u++) {
                    var f = h(u);
                    if (p(a, f.x, f.y)) {
                        c++, l.push(f);
                        break
                    }
                }
                c || (o *= 2, a = s(e - o / 2, i - o / 2, o, o))
            }
            if (1e6 != o) {
                var m, g = 1 / 0;
                for (u = 0, d = l.length; d > u; u++) {
                    var v = t.len(e, i, l[u].x, l[u].y);
                    g > v && (g = v, l[u].len = v, m = l[u])
                }
                return m
            }
        }, t.path.isBBoxIntersect = d, t.path.intersection = b, t.path.intersectionNumber = x, t.path.isPointInside = w, t.path.getBBox = T, t.path.get = Z, t.path.toRelative = k, t.path.toAbsolute = E, t.path.toCubic = P, t.path.map = O, t.path.toString = o, t.path.clone = a
    }), n.plugin(function (t, n, r, s) {
        var o = Math.max, a = Math.min, l = function (t) {
            if (this.items = [], this.bindings = {}, this.length = 0, this.type = "set", t) for (var e = 0, i = t.length; i > e; e++) t[e] && (this[this.items.length] = this.items[this.items.length] = t[e], this.length++)
        }, h = l.prototype;
        h.push = function () {
            for (var t, e, i = 0, n = arguments.length; n > i; i++) t = arguments[i], t && (e = this.items.length, this[e] = this.items[e] = t, this.length++);
            return this
        }, h.pop = function () {
            return this.length && delete this[this.length--], this.items.pop()
        }, h.forEach = function (t, e) {
            for (var i = 0, n = this.items.length; n > i; i++) if (t.call(e, this.items[i], i) === !1) return this;
            return this
        }, h.animate = function (n, r, s, o) {
            "function" != typeof s || s.length || (o = s, s = i.linear), n instanceof t._.Animation && (o = n.callback, s = n.easing, r = s.dur, n = n.attr);
            var a = arguments;
            if (t.is(n, "array") && t.is(a[a.length - 1], "array")) var l = !0;
            var h, c = function () {
                h ? this.b = h : h = this.b
            }, u = 0, p = this, d = o && function () {
                ++u == p.length && o.call(this)
            };
            return this.forEach(function (t, i) {
                e.once("snap.animcreated." + t.id, c), l ? a[i] && t.animate.apply(t, a[i]) : t.animate(n, r, s, d)
            })
        }, h.remove = function () {
            for (; this.length;) this.pop().remove();
            return this
        }, h.bind = function (t, e, i) {
            var n = {};
            if ("function" == typeof e) this.bindings[t] = e; else {
                var r = i || t;
                this.bindings[t] = function (t) {
                    n[r] = t, e.attr(n)
                }
            }
            return this
        }, h.attr = function (t) {
            var e = {};
            for (var i in t) this.bindings[i] ? this.bindings[i](t[i]) : e[i] = t[i];
            for (var n = 0, r = this.items.length; r > n; n++) this.items[n].attr(e);
            return this
        }, h.clear = function () {
            for (; this.length;) this.pop()
        }, h.splice = function (t, e, i) {
            t = 0 > t ? o(this.length + t, 0) : t, e = o(0, a(this.length - t, e));
            var n, r = [], s = [], h = [];
            for (n = 2; n < arguments.length; n++) h.push(arguments[n]);
            for (n = 0; e > n; n++) s.push(this[t + n]);
            for (; n < this.length - t; n++) r.push(this[t + n]);
            var c = h.length;
            for (n = 0; n < c + r.length; n++) this.items[t + n] = this[t + n] = c > n ? h[n] : r[n - c];
            for (n = this.items.length = this.length -= e - c; this[n];) delete this[n++];
            return new l(s)
        }, h.exclude = function (t) {
            for (var e = 0, i = this.length; i > e; e++) if (this[e] == t) return this.splice(e, 1), !0;
            return !1
        }, h.insertAfter = function (t) {
            for (var e = this.items.length; e--;) this.items[e].insertAfter(t);
            return this
        }, h.getBBox = function () {
            for (var t = [], e = [], i = [], n = [], r = this.items.length; r--;) if (!this.items[r].removed) {
                var s = this.items[r].getBBox();
                t.push(s.x), e.push(s.y), i.push(s.x + s.width), n.push(s.y + s.height)
            }
            return t = a.apply(0, t), e = a.apply(0, e), i = o.apply(0, i), n = o.apply(0, n), {
                x: t,
                y: e,
                x2: i,
                y2: n,
                width: i - t,
                height: n - e,
                cx: t + (i - t) / 2,
                cy: e + (n - e) / 2
            }
        }, h.clone = function (t) {
            t = new l;
            for (var e = 0, i = this.items.length; i > e; e++) t.push(this.items[e].clone());
            return t
        }, h.toString = function () {
            return "Snap‘s set"
        }, h.type = "set", t.Set = l, t.set = function () {
            var t = new l;
            return arguments.length && t.push.apply(t, Array.prototype.slice.call(arguments, 0)), t
        }
    }), n.plugin(function (t, i, n, r) {
        function s(t) {
            var e = t[0];
            switch (e.toLowerCase()) {
                case"t":
                    return [e, 0, 0];
                case"m":
                    return [e, 1, 0, 0, 1, 0, 0];
                case"r":
                    return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];
                case"s":
                    return 5 == t.length ? [e, 1, 1, t[3], t[4]] : 3 == t.length ? [e, 1, 1] : [e, 1]
            }
        }

        function o(e, i, n) {
            e = e || new t.Matrix, i = i || new t.Matrix, e = t.parseTransformString(e.toTransformString()) || [], i = t.parseTransformString(i.toTransformString()) || [];
            for (var r, o, a, l, h = Math.max(e.length, i.length), c = [], d = [], f = 0; h > f; f++) {
                if (a = e[f] || s(i[f]), l = i[f] || s(a), a[0] != l[0] || "r" == a[0].toLowerCase() && (a[2] != l[2] || a[3] != l[3]) || "s" == a[0].toLowerCase() && (a[3] != l[3] || a[4] != l[4])) {
                    e = t._.transform2matrix(e, n()), i = t._.transform2matrix(i, n()), c = [["m", e.a, e.b, e.c, e.d, e.e, e.f]], d = [["m", i.a, i.b, i.c, i.d, i.e, i.f]];
                    break
                }
                for (c[f] = [], d[f] = [], r = 0, o = Math.max(a.length, l.length); o > r; r++) r in a && (c[f][r] = a[r]), r in l && (d[f][r] = l[r])
            }
            return {from: p(c), to: p(d), f: u(c)}
        }

        function a(t) {
            return t
        }

        function l(t) {
            return function (e) {
                return +e.toFixed(3) + t
            }
        }

        function h(t) {
            return t.join(" ")
        }

        function c(e) {
            return t.rgb(e[0], e[1], e[2], e[3])
        }

        function u(t) {
            var e, i, n, r, s, o, a = 0, l = [];
            for (e = 0, i = t.length; i > e; e++) {
                for (s = "[", o = ['"' + t[e][0] + '"'], n = 1, r = t[e].length; r > n; n++) o[n] = "val[" + a++ + "]";
                s += o + "]", l[e] = s
            }
            return Function("val", "return Snap.path.toString.call([" + l + "])")
        }

        function p(t) {
            for (var e = [], i = 0, n = t.length; n > i; i++) for (var r = 1, s = t[i].length; s > r; r++) e.push(t[i][r]);
            return e
        }

        function d(t) {
            return isFinite(t)
        }

        function f(e, i) {
            return !(!t.is(e, "array") || !t.is(i, "array")) && e.toString() == i.toString()
        }

        var m = {}, g = /[%a-z]+$/i, v = String;
        m.stroke = m.fill = "colour", i.prototype.equal = function (t, i) {
            return e("snap.util.equal", this, t, i).firstDefined()
        }, e.on("snap.util.equal", function (e, i) {
            var n, r, s = v(this.attr(e) || ""), y = this;
            if ("colour" == m[e]) return n = t.color(s), r = t.color(i), {
                from: [n.r, n.g, n.b, n.opacity],
                to: [r.r, r.g, r.b, r.opacity],
                f: c
            };
            if ("viewBox" == e) return n = this.attr(e).vb.split(" ").map(Number), r = i.split(" ").map(Number), {
                from: n,
                to: r,
                f: h
            };
            if ("transform" == e || "gradientTransform" == e || "patternTransform" == e) return "string" == typeof i && (i = v(i).replace(/\.{3}|\u2026/g, s)), s = this.matrix, i = t._.rgTransform.test(i) ? t._.transform2matrix(i, this.getBBox()) : t._.transform2matrix(t._.svgTransform2string(i), this.getBBox()), o(s, i, function () {
                return y.getBBox(1)
            });
            if ("d" == e || "path" == e) return n = t.path.toCubic(s, i), {from: p(n[0]), to: p(n[1]), f: u(n[0])};
            if ("points" == e) return n = v(s).split(t._.separator), r = v(i).split(t._.separator), {
                from: n,
                to: r,
                f: function (t) {
                    return t
                }
            };
            if (d(s) && d(i)) return {from: parseFloat(s), to: parseFloat(i), f: a};
            var b = s.match(g), x = v(i).match(g);
            return b && f(b, x) ? {from: parseFloat(s), to: parseFloat(i), f: l(b)} : {
                from: this.asPX(e),
                to: this.asPX(e, i),
                f: a
            }
        })
    }), n.plugin(function (t, i, n, r) {
        for (var s = i.prototype, o = "hasOwnProperty", a = ("createTouch" in r.doc), l = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"], h = {
            mousedown: "touchstart",
            mousemove: "touchmove",
            mouseup: "touchend"
        }, c = (function (t, e) {
            var i = "y" == t ? "scrollTop" : "scrollLeft", n = e && e.node ? e.node.ownerDocument : r.doc;
            return n[i in n.documentElement ? "documentElement" : "body"][i]
        }), u = function () {
            return this.originalEvent.preventDefault()
        }, p = function () {
            return this.originalEvent.stopPropagation()
        }, d = function (t, e, i, n) {
            var r = a && h[e] ? h[e] : e, s = function (r) {
                var s = c("y", n), l = c("x", n);
                if (a && h[o](e)) for (var d = 0, f = r.targetTouches && r.targetTouches.length; f > d; d++) if (r.targetTouches[d].target == t || t.contains(r.targetTouches[d].target)) {
                    var m = r;
                    r = r.targetTouches[d], r.originalEvent = m, r.preventDefault = u, r.stopPropagation = p;
                    break
                }
                var g = r.clientX + l, v = r.clientY + s;
                return i.call(n, r, g, v)
            };
            return e !== r && t.addEventListener(e, s, !1), t.addEventListener(r, s, !1), function () {
                return e !== r && t.removeEventListener(e, s, !1), t.removeEventListener(r, s, !1), !0
            }
        }, f = [], m = function (t) {
            for (var i, n = t.clientX, r = t.clientY, s = c("y"), o = c("x"), l = f.length; l--;) {
                if (i = f[l], a) {
                    for (var h, u = t.touches && t.touches.length; u--;) if (h = t.touches[u], h.identifier == i.el._drag.id || i.el.node.contains(h.target)) {
                        n = h.clientX, r = h.clientY, (t.originalEvent ? t.originalEvent : t).preventDefault();
                        break
                    }
                } else t.preventDefault();
                var p = i.el.node;
                p.nextSibling, p.parentNode, p.style.display, n += o, r += s, e("snap.drag.move." + i.el.id, i.move_scope || i.el, n - i.el._drag.x, r - i.el._drag.y, n, r, t)
            }
        }, g = function (i) {
            t.unmousemove(m).unmouseup(g);
            for (var n, r = f.length; r--;) n = f[r], n.el._drag = {}, e("snap.drag.end." + n.el.id, n.end_scope || n.start_scope || n.move_scope || n.el, i), e.off("snap.drag.*." + n.el.id);
            f = []
        }, v = l.length; v--;) !function (e) {
            t[e] = s[e] = function (i, n) {
                if (t.is(i, "function")) this.events = this.events || [], this.events.push({
                    name: e,
                    f: i,
                    unbind: d(this.node || document, e, i, n || this)
                }); else for (var r = 0, s = this.events.length; s > r; r++) if (this.events[r].name == e) try {
                    this.events[r].f.call(this)
                } catch (o) {
                }
                return this
            }, t["un" + e] = s["un" + e] = function (t) {
                for (var i = this.events || [], n = i.length; n--;) if (i[n].name == e && (i[n].f == t || !t)) return i[n].unbind(), i.splice(n, 1), !i.length && delete this.events, this;
                return this
            }
        }(l[v]);
        s.hover = function (t, e, i, n) {
            return this.mouseover(t, i).mouseout(e, n || i)
        }, s.unhover = function (t, e) {
            return this.unmouseover(t).unmouseout(e)
        };
        var y = [];
        s.drag = function (i, n, r, s, o, a) {
            function l(l, h, u) {
                (l.originalEvent || l).preventDefault(), c._drag.x = h, c._drag.y = u, c._drag.id = l.identifier, !f.length && t.mousemove(m).mouseup(g), f.push({
                    el: c,
                    move_scope: s,
                    start_scope: o,
                    end_scope: a
                }), n && e.on("snap.drag.start." + c.id, n), i && e.on("snap.drag.move." + c.id, i), r && e.on("snap.drag.end." + c.id, r), e("snap.drag.start." + c.id, o || s || c, h, u, l)
            }

            function h(t, i, n) {
                e("snap.draginit." + c.id, c, t, i, n)
            }

            var c = this;
            if (!arguments.length) {
                var u;
                return c.drag(function (t, e) {
                    this.attr({transform: u + (u ? "T" : "t") + [t, e]})
                }, function () {
                    u = this.transform().local
                })
            }
            return e.on("snap.draginit." + c.id, l), c._drag = {}, y.push({el: c, start: l, init: h}), c.mousedown(h), c
        }, s.undrag = function () {
            for (var i = y.length; i--;) y[i].el == this && (this.unmousedown(y[i].init), y.splice(i, 1), e.unbind("snap.drag.*." + this.id), e.unbind("snap.draginit." + this.id));
            return !y.length && t.unmousemove(m).unmouseup(g), this
        }
    }), n.plugin(function (t, i, n, r) {
        var s = (i.prototype, n.prototype), o = /^\s*url\((.+)\)/, a = String, l = t._.$;
        t.filter = {}, s.filter = function (e) {
            var n = this;
            "svg" != n.type && (n = n.paper);
            var r = t.parse(a(e)), s = t._.id(), o = (n.node.offsetWidth, n.node.offsetHeight, l("filter"));
            return l(o, {id: s, filterUnits: "userSpaceOnUse"}), o.appendChild(r.node), n.defs.appendChild(o), new i(o)
        }, e.on("snap.util.getattr.filter", function () {
            e.stop();
            var i = l(this.node, "filter");
            if (i) {
                var n = a(i).match(o);
                return n && t.select(n[1])
            }
        }), e.on("snap.util.attr.filter", function (n) {
            if (n instanceof i && "filter" == n.type) {
                e.stop();
                var r = n.node.id;
                r || (l(n.node, {id: n.id}), r = n.id), l(this.node, {filter: t.url(r)})
            }
            n && "none" != n || (e.stop(), this.node.removeAttribute("filter"))
        }), t.filter.blur = function (e, i) {
            null == e && (e = 2);
            var n = null == i ? e : [e, i];
            return t.format('<feGaussianBlur stdDeviation="{def}"/>', {def: n})
        }, t.filter.blur.toString = function () {
            return this()
        }, t.filter.shadow = function (e, i, n, r, s) {
            return null == s && (null == r ? (s = n, n = 4, r = "#000") : (s = r, r = n, n = 4)), null == n && (n = 4), null == s && (s = 1), null == e && (e = 0, i = 2), null == i && (i = e), r = t.color(r), t.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
                color: r,
                dx: e,
                dy: i,
                blur: n,
                opacity: s
            })
        }, t.filter.shadow.toString = function () {
            return this()
        }, t.filter.grayscale = function (e) {
            return null == e && (e = 1), t.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
                a: .2126 + .7874 * (1 - e),
                b: .7152 - .7152 * (1 - e),
                c: .0722 - .0722 * (1 - e),
                d: .2126 - .2126 * (1 - e),
                e: .7152 + .2848 * (1 - e),
                f: .0722 - .0722 * (1 - e),
                g: .2126 - .2126 * (1 - e),
                h: .0722 + .9278 * (1 - e)
            })
        }, t.filter.grayscale.toString = function () {
            return this()
        }, t.filter.sepia = function (e) {
            return null == e && (e = 1), t.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
                a: .393 + .607 * (1 - e),
                b: .769 - .769 * (1 - e),
                c: .189 - .189 * (1 - e),
                d: .349 - .349 * (1 - e),
                e: .686 + .314 * (1 - e),
                f: .168 - .168 * (1 - e),
                g: .272 - .272 * (1 - e),
                h: .534 - .534 * (1 - e),
                i: .131 + .869 * (1 - e)
            })
        }, t.filter.sepia.toString = function () {
            return this()
        }, t.filter.saturate = function (e) {
            return null == e && (e = 1), t.format('<feColorMatrix type="saturate" values="{amount}"/>', {amount: 1 - e})
        }, t.filter.saturate.toString = function () {
            return this()
        }, t.filter.hueRotate = function (e) {
            return e = e || 0, t.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {angle: e})
        }, t.filter.hueRotate.toString = function () {
            return this()
        }, t.filter.invert = function (e) {
            return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
                amount: e,
                amount2: 1 - e
            })
        }, t.filter.invert.toString = function () {
            return this()
        }, t.filter.brightness = function (e) {
            return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {amount: e})
        }, t.filter.brightness.toString = function () {
            return this()
        }, t.filter.contrast = function (e) {
            return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
                amount: e,
                amount2: .5 - e / 2
            })
        }, t.filter.contrast.toString = function () {
            return this()
        }
    }), n.plugin(function (t, e, i, n, r) {
        var s = t._.box, o = t.is, a = /^[^a-z]*([tbmlrc])/i, l = function () {
            return "T" + this.dx + "," + this.dy
        };
        e.prototype.getAlign = function (t, e) {
            null == e && o(t, "string") && (e = t, t = null), t = t || this.paper;
            var i = t.getBBox ? t.getBBox() : s(t), n = this.getBBox(), r = {};
            switch (e = e && e.match(a), e = e ? e[1].toLowerCase() : "c") {
                case"t":
                    r.dx = 0, r.dy = i.y - n.y;
                    break;
                case"b":
                    r.dx = 0, r.dy = i.y2 - n.y2;
                    break;
                case"m":
                    r.dx = 0, r.dy = i.cy - n.cy;
                    break;
                case"l":
                    r.dx = i.x - n.x, r.dy = 0;
                    break;
                case"r":
                    r.dx = i.x2 - n.x2, r.dy = 0;
                    break;
                default:
                    r.dx = i.cx - n.cx, r.dy = 0
            }
            return r.toString = l, r
        }, e.prototype.align = function (t, e) {
            return this.transform("..." + this.getAlign(t, e))
        }
    }), n.plugin(function (e, i, n, r) {
        function s(t) {
            t = t.split(/(?=#)/);
            var e = new String(t[5]);
            return e[50] = t[0], e[100] = t[1], e[200] = t[2], e[300] = t[3], e[400] = t[4], e[500] = t[5], e[600] = t[6], e[700] = t[7], e[800] = t[8], e[900] = t[9], t[10] && (e.A100 = t[10], e.A200 = t[11], e.A400 = t[12], e.A700 = t[13]), e
        }

        var o = "#ffebee#ffcdd2#ef9a9a#e57373#ef5350#f44336#e53935#d32f2f#c62828#b71c1c#ff8a80#ff5252#ff1744#d50000",
            a = "#FCE4EC#F8BBD0#F48FB1#F06292#EC407A#E91E63#D81B60#C2185B#AD1457#880E4F#FF80AB#FF4081#F50057#C51162",
            l = "#F3E5F5#E1BEE7#CE93D8#BA68C8#AB47BC#9C27B0#8E24AA#7B1FA2#6A1B9A#4A148C#EA80FC#E040FB#D500F9#AA00FF",
            h = "#EDE7F6#D1C4E9#B39DDB#9575CD#7E57C2#673AB7#5E35B1#512DA8#4527A0#311B92#B388FF#7C4DFF#651FFF#6200EA",
            c = "#E8EAF6#C5CAE9#9FA8DA#7986CB#5C6BC0#3F51B5#3949AB#303F9F#283593#1A237E#8C9EFF#536DFE#3D5AFE#304FFE",
            u = "#E3F2FD#BBDEFB#90CAF9#64B5F6#64B5F6#2196F3#1E88E5#1976D2#1565C0#0D47A1#82B1FF#448AFF#2979FF#2962FF",
            p = "#E1F5FE#B3E5FC#81D4FA#4FC3F7#29B6F6#03A9F4#039BE5#0288D1#0277BD#01579B#80D8FF#40C4FF#00B0FF#0091EA",
            d = "#E0F7FA#B2EBF2#80DEEA#4DD0E1#26C6DA#00BCD4#00ACC1#0097A7#00838F#006064#84FFFF#18FFFF#00E5FF#00B8D4",
            f = "#E0F2F1#B2DFDB#80CBC4#4DB6AC#26A69A#009688#00897B#00796B#00695C#004D40#A7FFEB#64FFDA#1DE9B6#00BFA5",
            m = "#E8F5E9#C8E6C9#A5D6A7#81C784#66BB6A#4CAF50#43A047#388E3C#2E7D32#1B5E20#B9F6CA#69F0AE#00E676#00C853",
            g = "#F1F8E9#DCEDC8#C5E1A5#AED581#9CCC65#8BC34A#7CB342#689F38#558B2F#33691E#CCFF90#B2FF59#76FF03#64DD17",
            v = "#F9FBE7#F0F4C3#E6EE9C#DCE775#D4E157#CDDC39#C0CA33#AFB42B#9E9D24#827717#F4FF81#EEFF41#C6FF00#AEEA00",
            y = "#FFFDE7#FFF9C4#FFF59D#FFF176#FFEE58#FFEB3B#FDD835#FBC02D#F9A825#F57F17#FFFF8D#FFFF00#FFEA00#FFD600",
            b = "#FFF8E1#FFECB3#FFE082#FFD54F#FFCA28#FFC107#FFB300#FFA000#FF8F00#FF6F00#FFE57F#FFD740#FFC400#FFAB00",
            x = "#FFF3E0#FFE0B2#FFCC80#FFB74D#FFA726#FF9800#FB8C00#F57C00#EF6C00#E65100#FFD180#FFAB40#FF9100#FF6D00",
            _ = "#FBE9E7#FFCCBC#FFAB91#FF8A65#FF7043#FF5722#F4511E#E64A19#D84315#BF360C#FF9E80#FF6E40#FF3D00#DD2C00",
            w = "#EFEBE9#D7CCC8#BCAAA4#A1887F#8D6E63#795548#6D4C41#5D4037#4E342E#3E2723",
            T = "#FAFAFA#F5F5F5#EEEEEE#E0E0E0#BDBDBD#9E9E9E#757575#616161#424242#212121",
            C = "#ECEFF1#CFD8DC#B0BEC5#90A4AE#78909C#607D8B#546E7A#455A64#37474F#263238";
        e.mui = {}, e.flat = {}, e.mui.red = s(o), e.mui.pink = s(a), e.mui.purple = s(l), e.mui.deeppurple = s(h), e.mui.indigo = s(c), e.mui.blue = s(u), e.mui.lightblue = s(p), e.mui.cyan = s(d), e.mui.teal = s(f), e.mui.green = s(m), e.mui.lightgreen = s(g), e.mui.lime = s(v), e.mui.yellow = s(y), e.mui.amber = s(b), e.mui.orange = s(x), e.mui.deeporange = s(_), e.mui.brown = s(w), e.mui.grey = s(T), e.mui.bluegrey = s(C), e.flat.turquoise = "#1abc9c", e.flat.greensea = "#16a085", e.flat.sunflower = "#f1c40f", e.flat.orange = "#f39c12", e.flat.emerland = "#2ecc71", e.flat.nephritis = "#27ae60", e.flat.carrot = "#e67e22", e.flat.pumpkin = "#d35400", e.flat.peterriver = "#3498db", e.flat.belizehole = "#2980b9", e.flat.alizarin = "#e74c3c", e.flat.pomegranate = "#c0392b", e.flat.amethyst = "#9b59b6", e.flat.wisteria = "#8e44ad", e.flat.clouds = "#ecf0f1", e.flat.silver = "#bdc3c7", e.flat.wetasphalt = "#34495e", e.flat.midnightblue = "#2c3e50", e.flat.concrete = "#95a5a6", e.flat.asbestos = "#7f8c8d", e.importMUIColors = function () {
            for (var i in e.mui) e.mui.hasOwnProperty(i) && (t[i] = e.mui[i])
        }
    }), n
}), function (t, e, i) {
    "use strict";

    function n(t, e) {
        this.element = t, this.layers = t.getElementsByClassName("layer");
        var i = {
            calibrateX: this.data(this.element, "calibrate-x"),
            calibrateY: this.data(this.element, "calibrate-y"),
            invertX: this.data(this.element, "invert-x"),
            invertY: this.data(this.element, "invert-y"),
            limitX: this.data(this.element, "limit-x"),
            limitY: this.data(this.element, "limit-y"),
            scalarX: this.data(this.element, "scalar-x"),
            scalarY: this.data(this.element, "scalar-y"),
            frictionX: this.data(this.element, "friction-x"),
            frictionY: this.data(this.element, "friction-y"),
            originX: this.data(this.element, "origin-x"),
            originY: this.data(this.element, "origin-y")
        };
        for (var n in i) null === i[n] && delete i[n];
        this.extend(this, o, e, i), this.calibrationTimer = null, this.calibrationFlag = !0, this.enabled = !1, this.depths = [], this.raf = null, this.bounds = null, this.ex = 0, this.ey = 0, this.ew = 0, this.eh = 0, this.ecx = 0, this.ecy = 0, this.erx = 0, this.ery = 0, this.cx = 0, this.cy = 0, this.ix = 0, this.iy = 0, this.mx = 0, this.my = 0, this.vx = 0, this.vy = 0, this.onMouseMove = this.onMouseMove.bind(this), this.onDeviceOrientation = this.onDeviceOrientation.bind(this), this.onOrientationTimer = this.onOrientationTimer.bind(this), this.onCalibrationTimer = this.onCalibrationTimer.bind(this), this.onAnimationFrame = this.onAnimationFrame.bind(this), this.onWindowResize = this.onWindowResize.bind(this), this.initialise()
    }

    var r = "Parallax", s = 30, o = {
        relativeInput: !1,
        clipRelativeInput: !1,
        calibrationThreshold: 100,
        calibrationDelay: 500,
        supportDelay: 500,
        calibrateX: !1,
        calibrateY: !0,
        invertX: !0,
        invertY: !0,
        limitX: !1,
        limitY: !1,
        scalarX: 10,
        scalarY: 10,
        frictionX: .1,
        frictionY: .1,
        originX: .5,
        originY: .5
    };
    n.prototype.extend = function () {
        if (arguments.length > 1) for (var t = arguments[0], e = 1, i = arguments.length; e < i; e++) {
            var n = arguments[e];
            for (var r in n) t[r] = n[r]
        }
    }, n.prototype.data = function (t, e) {
        return this.deserialize(t.getAttribute("data-" + e))
    }, n.prototype.deserialize = function (t) {
        return "true" === t || "false" !== t && ("null" === t ? null : !isNaN(parseFloat(t)) && isFinite(t) ? parseFloat(t) : t)
    }, n.prototype.camelCase = function (t) {
        return t.replace(/-+(.)?/g, function (t, e) {
            return e ? e.toUpperCase() : ""
        })
    }, n.prototype.transformSupport = function (n) {
        for (var r = e.createElement("div"), s = !1, o = null, a = !1, l = null, h = null, c = 0, u = this.vendors.length; c < u; c++) if (null !== this.vendors[c] ? (l = this.vendors[c][0] + "transform", h = this.vendors[c][1] + "Transform") : (l = "transform", h = "transform"), r.style[h] !== i) {
            s = !0;
            break
        }
        switch (n) {
            case"2D":
                a = s;
                break;
            case"3D":
                if (s) {
                    var p = e.body || e.createElement("body"), d = e.documentElement, f = d.style.overflow;
                    e.body || (d.style.overflow = "hidden", d.appendChild(p), p.style.overflow = "hidden", p.style.background = ""), p.appendChild(r), r.style[h] = "translate3d(1px,1px,1px)", o = t.getComputedStyle(r).getPropertyValue(l), a = o !== i && o.length > 0 && "none" !== o, d.style.overflow = f, p.removeChild(r)
                }
        }
        return a
    }, n.prototype.ww = null, n.prototype.wh = null, n.prototype.wcx = null, n.prototype.wcy = null, n.prototype.wrx = null, n.prototype.wry = null, n.prototype.portrait = null, n.prototype.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), n.prototype.vendors = [null, ["-webkit-", "webkit"], ["-moz-", "Moz"], ["-o-", "O"], ["-ms-", "ms"]], n.prototype.motionSupport = !!t.DeviceMotionEvent, n.prototype.orientationSupport = !!t.DeviceOrientationEvent, n.prototype.orientationStatus = 0, n.prototype.transform2DSupport = n.prototype.transformSupport("2D"), n.prototype.transform3DSupport = n.prototype.transformSupport("3D"), n.prototype.propertyCache = {}, n.prototype.initialise = function () {
        this.transform3DSupport && this.accelerate(this.element);
        var e = t.getComputedStyle(this.element);
        "static" === e.getPropertyValue("position") && (this.element.style.position = "relative"), this.updateLayers(), this.updateDimensions(), this.enable(), this.queueCalibration(this.calibrationDelay)
    }, n.prototype.updateLayers = function () {
        this.layers = this.element.getElementsByClassName("layer"), this.depths = [];
        for (var t = 0, e = this.layers.length; t < e; t++) {
            var i = this.layers[t];
            this.transform3DSupport && this.accelerate(i), i.style.position = t ? "absolute" : "relative", i.style.display = "block", i.style.left = 0, i.style.top = 0, this.depths.push(this.data(i, "depth") || 0)
        }
    }, n.prototype.updateDimensions = function () {
        this.ww = t.innerWidth, this.wh = t.innerHeight, this.wcx = this.ww * this.originX, this.wcy = this.wh * this.originY, this.wrx = Math.max(this.wcx, this.ww - this.wcx), this.wry = Math.max(this.wcy, this.wh - this.wcy)
    }, n.prototype.updateBounds = function () {
        this.bounds = this.element.getBoundingClientRect(), this.ex = this.bounds.left, this.ey = this.bounds.top, this.ew = this.bounds.width, this.eh = this.bounds.height, this.ecx = this.ew * this.originX, this.ecy = this.eh * this.originY, this.erx = Math.max(this.ecx, this.ew - this.ecx), this.ery = Math.max(this.ecy, this.eh - this.ecy)
    }, n.prototype.queueCalibration = function (t) {
        clearTimeout(this.calibrationTimer), this.calibrationTimer = setTimeout(this.onCalibrationTimer, t)
    }, n.prototype.enable = function () {
        this.enabled || (this.enabled = !0, this.orientationSupport ? (this.portrait = null, t.addEventListener("deviceorientation", this.onDeviceOrientation), setTimeout(this.onOrientationTimer, this.supportDelay)) : (this.cx = 0, this.cy = 0, this.portrait = !1, t.addEventListener("mousemove", this.onMouseMove)), t.addEventListener("resize", this.onWindowResize), this.raf = requestAnimationFrame(this.onAnimationFrame))
    }, n.prototype.disable = function () {
        this.enabled && (this.enabled = !1, this.orientationSupport ? t.removeEventListener("deviceorientation", this.onDeviceOrientation) : t.removeEventListener("mousemove", this.onMouseMove), t.removeEventListener("resize", this.onWindowResize), cancelAnimationFrame(this.raf))
    }, n.prototype.calibrate = function (t, e) {
        this.calibrateX = t === i ? this.calibrateX : t, this.calibrateY = e === i ? this.calibrateY : e
    }, n.prototype.invert = function (t, e) {
        this.invertX = t === i ? this.invertX : t, this.invertY = e === i ? this.invertY : e
    }, n.prototype.friction = function (t, e) {
        this.frictionX = t === i ? this.frictionX : t, this.frictionY = e === i ? this.frictionY : e
    }, n.prototype.scalar = function (t, e) {
        this.scalarX = t === i ? this.scalarX : t, this.scalarY = e === i ? this.scalarY : e
    }, n.prototype.limit = function (t, e) {
        this.limitX = t === i ? this.limitX : t, this.limitY = e === i ? this.limitY : e
    }, n.prototype.origin = function (t, e) {
        this.originX = t === i ? this.originX : t, this.originY = e === i ? this.originY : e
    }, n.prototype.clamp = function (t, e, i) {
        return t = Math.max(t, e), t = Math.min(t, i)
    }, n.prototype.css = function (t, e, n) {
        var r = this.propertyCache[e];
        if (!r) for (var s = 0, o = this.vendors.length; s < o; s++) if (r = null !== this.vendors[s] ? this.camelCase(this.vendors[s][1] + "-" + e) : e, t.style[r] !== i) {
            this.propertyCache[e] = r;
            break
        }
        t.style[r] = n
    }, n.prototype.accelerate = function (t) {
        this.css(t, "transform", "translate3d(0,0,0)"), this.css(t, "transform-style", "preserve-3d"), this.css(t, "backface-visibility", "hidden")
    }, n.prototype.setPosition = function (t, e, i) {
        e += "px", i += "px", this.transform3DSupport ? this.css(t, "transform", "translate3d(" + e + "," + i + ",0)") : this.transform2DSupport ? this.css(t, "transform", "translate(" + e + "," + i + ")") : (t.style.left = e, t.style.top = i)
    }, n.prototype.onOrientationTimer = function (t) {
        this.orientationSupport && 0 === this.orientationStatus && (this.disable(), this.orientationSupport = !1, this.enable())
    }, n.prototype.onCalibrationTimer = function (t) {
        this.calibrationFlag = !0
    }, n.prototype.onWindowResize = function (t) {
        this.updateDimensions()
    }, n.prototype.onAnimationFrame = function () {
        this.updateBounds();
        var t = this.ix - this.cx, e = this.iy - this.cy;
        (Math.abs(t) > this.calibrationThreshold || Math.abs(e) > this.calibrationThreshold) && this.queueCalibration(0), this.portrait ? (this.mx = this.calibrateX ? e : this.iy, this.my = this.calibrateY ? t : this.ix) : (this.mx = this.calibrateX ? t : this.ix, this.my = this.calibrateY ? e : this.iy), this.mx *= this.ew * (this.scalarX / 100), this.my *= this.eh * (this.scalarY / 100), isNaN(parseFloat(this.limitX)) || (this.mx = this.clamp(this.mx, -this.limitX, this.limitX)), isNaN(parseFloat(this.limitY)) || (this.my = this.clamp(this.my, -this.limitY, this.limitY)), this.vx += (this.mx - this.vx) * this.frictionX, this.vy += (this.my - this.vy) * this.frictionY;
        for (var i = 0, n = this.layers.length; i < n; i++) {
            var r = this.layers[i], s = this.depths[i], o = this.vx * s * (this.invertX ? -1 : 1),
                a = this.vy * s * (this.invertY ? -1 : 1);
            this.setPosition(r, o, a)
        }
        this.raf = requestAnimationFrame(this.onAnimationFrame)
    }, n.prototype.onDeviceOrientation = function (t) {
        if (!this.desktop && null !== t.beta && null !== t.gamma) {
            this.orientationStatus = 1;
            var e = (t.beta || 0) / s, i = (t.gamma || 0) / s, n = this.wh > this.ww;
            this.portrait !== n && (this.portrait = n, this.calibrationFlag = !0), this.calibrationFlag && (this.calibrationFlag = !1, this.cx = e, this.cy = i), this.ix = e, this.iy = i
        }
    }, n.prototype.onMouseMove = function (t) {
        var e = t.clientX, i = t.clientY;
        !this.orientationSupport && this.relativeInput ? (this.clipRelativeInput && (e = Math.max(e, this.ex), e = Math.min(e, this.ex + this.ew), i = Math.max(i, this.ey), i = Math.min(i, this.ey + this.eh)), this.ix = (e - this.ex - this.ecx) / this.erx, this.iy = (i - this.ey - this.ecy) / this.ery) : (this.ix = (e - this.wcx) / this.wrx, this.iy = (i - this.wcy) / this.wry)
    }, t[r] = n
}(window, document), function () {
    for (var t = 0, e = ["ms", "moz", "webkit", "o"], i = 0; i < e.length && !window.requestAnimationFrame; ++i) window.requestAnimationFrame = window[e[i] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[i] + "CancelAnimationFrame"] || window[e[i] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function (e, i) {
        var n = (new Date).getTime(), r = Math.max(0, 16 - (n - t)), s = window.setTimeout(function () {
            e(n + r)
        }, r);
        return t = n + r, s
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (t) {
        clearTimeout(t)
    })
}(), !function (t, e, i) {
    "use strict";

    function n(t, e) {
        this.element = t, this.layers = t.getElementsByClassName("layer");
        var i = {
            calibrateX: this.data(this.element, "calibrate-x"),
            calibrateY: this.data(this.element, "calibrate-y"),
            invertX: this.data(this.element, "invert-x"),
            invertY: this.data(this.element, "invert-y"),
            limitX: this.data(this.element, "limit-x"),
            limitY: this.data(this.element, "limit-y"),
            scalarX: this.data(this.element, "scalar-x"),
            scalarY: this.data(this.element, "scalar-y"),
            frictionX: this.data(this.element, "friction-x"),
            frictionY: this.data(this.element, "friction-y"),
            originX: this.data(this.element, "origin-x"),
            originY: this.data(this.element, "origin-y")
        };
        for (var n in i) null === i[n] && delete i[n];
        this.extend(this, o, e, i), this.calibrationTimer = null, this.calibrationFlag = !0, this.enabled = !1, this.depths = [], this.raf = null, this.bounds = null, this.ex = 0, this.ey = 0, this.ew = 0, this.eh = 0, this.ecx = 0, this.ecy = 0, this.erx = 0, this.ery = 0, this.cx = 0, this.cy = 0, this.ix = 0, this.iy = 0, this.mx = 0, this.my = 0, this.vx = 0, this.vy = 0, this.onMouseMove = this.onMouseMove.bind(this), this.onDeviceOrientation = this.onDeviceOrientation.bind(this), this.onOrientationTimer = this.onOrientationTimer.bind(this), this.onCalibrationTimer = this.onCalibrationTimer.bind(this), this.onAnimationFrame = this.onAnimationFrame.bind(this), this.onWindowResize = this.onWindowResize.bind(this), this.initialise()
    }

    var r = "Parallax", s = 30, o = {
        relativeInput: !1,
        clipRelativeInput: !1,
        calibrationThreshold: 100,
        calibrationDelay: 500,
        supportDelay: 500,
        calibrateX: !1,
        calibrateY: !0,
        invertX: !0,
        invertY: !0,
        limitX: !1,
        limitY: !1,
        scalarX: 10,
        scalarY: 10,
        frictionX: .1,
        frictionY: .1,
        originX: .5,
        originY: .5
    };
    n.prototype.extend = function () {
        if (arguments.length > 1) for (var t = arguments[0], e = 1, i = arguments.length; i > e; e++) {
            var n = arguments[e];
            for (var r in n) t[r] = n[r]
        }
    }, n.prototype.data = function (t, e) {
        return this.deserialize(t.getAttribute("data-" + e))
    }, n.prototype.deserialize = function (t) {
        return "true" === t || "false" !== t && ("null" === t ? null : !isNaN(parseFloat(t)) && isFinite(t) ? parseFloat(t) : t)
    }, n.prototype.camelCase = function (t) {
        return t.replace(/-+(.)?/g, function (t, e) {
            return e ? e.toUpperCase() : ""
        })
    }, n.prototype.transformSupport = function (n) {
        for (var r = e.createElement("div"), s = !1, o = null, a = !1, l = null, h = null, c = 0, u = this.vendors.length; u > c; c++) if (null !== this.vendors[c] ? (l = this.vendors[c][0] + "transform", h = this.vendors[c][1] + "Transform") : (l = "transform", h = "transform"), r.style[h] !== i) {
            s = !0;
            break
        }
        switch (n) {
            case"2D":
                a = s;
                break;
            case"3D":
                if (s) {
                    var p = e.body || e.createElement("body"), d = e.documentElement, f = d.style.overflow;
                    e.body || (d.style.overflow = "hidden", d.appendChild(p), p.style.overflow = "hidden", p.style.background = ""), p.appendChild(r), r.style[h] = "translate3d(1px,1px,1px)", o = t.getComputedStyle(r).getPropertyValue(l), a = o !== i && o.length > 0 && "none" !== o, d.style.overflow = f, p.removeChild(r)
                }
        }
        return a
    }, n.prototype.ww = null, n.prototype.wh = null, n.prototype.wcx = null, n.prototype.wcy = null, n.prototype.wrx = null, n.prototype.wry = null, n.prototype.portrait = null, n.prototype.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), n.prototype.vendors = [null, ["-webkit-", "webkit"], ["-moz-", "Moz"], ["-o-", "O"], ["-ms-", "ms"]], n.prototype.motionSupport = !!t.DeviceMotionEvent, n.prototype.orientationSupport = !!t.DeviceOrientationEvent, n.prototype.orientationStatus = 0, n.prototype.transform2DSupport = n.prototype.transformSupport("2D"), n.prototype.transform3DSupport = n.prototype.transformSupport("3D"), n.prototype.propertyCache = {}, n.prototype.initialise = function () {
        this.transform3DSupport && this.accelerate(this.element);
        var e = t.getComputedStyle(this.element);
        "static" === e.getPropertyValue("position") && (this.element.style.position = "relative"), this.updateLayers(), this.updateDimensions(), this.enable(), this.queueCalibration(this.calibrationDelay)
    }, n.prototype.updateLayers = function () {
        this.layers = this.element.getElementsByClassName("layer"), this.depths = [];
        for (var t = 0, e = this.layers.length; e > t; t++) {
            var i = this.layers[t];
            this.transform3DSupport && this.accelerate(i), i.style.position = t ? "absolute" : "relative", i.style.display = "block", i.style.left = 0, i.style.top = 0, this.depths.push(this.data(i, "depth") || 0)
        }
    }, n.prototype.updateDimensions = function () {
        this.ww = t.innerWidth, this.wh = t.innerHeight, this.wcx = this.ww * this.originX, this.wcy = this.wh * this.originY, this.wrx = Math.max(this.wcx, this.ww - this.wcx), this.wry = Math.max(this.wcy, this.wh - this.wcy)
    }, n.prototype.updateBounds = function () {
        this.bounds = this.element.getBoundingClientRect(), this.ex = this.bounds.left, this.ey = this.bounds.top, this.ew = this.bounds.width, this.eh = this.bounds.height, this.ecx = this.ew * this.originX, this.ecy = this.eh * this.originY, this.erx = Math.max(this.ecx, this.ew - this.ecx), this.ery = Math.max(this.ecy, this.eh - this.ecy)
    }, n.prototype.queueCalibration = function (t) {
        clearTimeout(this.calibrationTimer), this.calibrationTimer = setTimeout(this.onCalibrationTimer, t)
    }, n.prototype.enable = function () {
        this.enabled || (this.enabled = !0, this.orientationSupport ? (this.portrait = null, t.addEventListener("deviceorientation", this.onDeviceOrientation),
            setTimeout(this.onOrientationTimer, this.supportDelay)) : (this.cx = 0, this.cy = 0, this.portrait = !1, t.addEventListener("mousemove", this.onMouseMove)), t.addEventListener("resize", this.onWindowResize), this.raf = requestAnimationFrame(this.onAnimationFrame))
    }, n.prototype.disable = function () {
        this.enabled && (this.enabled = !1, this.orientationSupport ? t.removeEventListener("deviceorientation", this.onDeviceOrientation) : t.removeEventListener("mousemove", this.onMouseMove), t.removeEventListener("resize", this.onWindowResize), cancelAnimationFrame(this.raf))
    }, n.prototype.calibrate = function (t, e) {
        this.calibrateX = t === i ? this.calibrateX : t, this.calibrateY = e === i ? this.calibrateY : e
    }, n.prototype.invert = function (t, e) {
        this.invertX = t === i ? this.invertX : t, this.invertY = e === i ? this.invertY : e
    }, n.prototype.friction = function (t, e) {
        this.frictionX = t === i ? this.frictionX : t, this.frictionY = e === i ? this.frictionY : e
    }, n.prototype.scalar = function (t, e) {
        this.scalarX = t === i ? this.scalarX : t, this.scalarY = e === i ? this.scalarY : e
    }, n.prototype.limit = function (t, e) {
        this.limitX = t === i ? this.limitX : t, this.limitY = e === i ? this.limitY : e
    }, n.prototype.origin = function (t, e) {
        this.originX = t === i ? this.originX : t, this.originY = e === i ? this.originY : e
    }, n.prototype.clamp = function (t, e, i) {
        return t = Math.max(t, e), t = Math.min(t, i)
    }, n.prototype.css = function (t, e, n) {
        var r = this.propertyCache[e];
        if (!r) for (var s = 0, o = this.vendors.length; o > s; s++) if (r = null !== this.vendors[s] ? this.camelCase(this.vendors[s][1] + "-" + e) : e, t.style[r] !== i) {
            this.propertyCache[e] = r;
            break
        }
        t.style[r] = n
    }, n.prototype.accelerate = function (t) {
        this.css(t, "transform", "translate3d(0,0,0)"), this.css(t, "transform-style", "preserve-3d"), this.css(t, "backface-visibility", "hidden")
    }, n.prototype.setPosition = function (t, e, i) {
        e += "px", i += "px", this.transform3DSupport ? this.css(t, "transform", "translate3d(" + e + "," + i + ",0)") : this.transform2DSupport ? this.css(t, "transform", "translate(" + e + "," + i + ")") : (t.style.left = e, t.style.top = i)
    }, n.prototype.onOrientationTimer = function () {
        this.orientationSupport && 0 === this.orientationStatus && (this.disable(), this.orientationSupport = !1, this.enable())
    }, n.prototype.onCalibrationTimer = function () {
        this.calibrationFlag = !0
    }, n.prototype.onWindowResize = function () {
        this.updateDimensions()
    }, n.prototype.onAnimationFrame = function () {
        this.updateBounds();
        var t = this.ix - this.cx, e = this.iy - this.cy;
        (Math.abs(t) > this.calibrationThreshold || Math.abs(e) > this.calibrationThreshold) && this.queueCalibration(0), this.portrait ? (this.mx = this.calibrateX ? e : this.iy, this.my = this.calibrateY ? t : this.ix) : (this.mx = this.calibrateX ? t : this.ix, this.my = this.calibrateY ? e : this.iy), this.mx *= this.ew * (this.scalarX / 100), this.my *= this.eh * (this.scalarY / 100), isNaN(parseFloat(this.limitX)) || (this.mx = this.clamp(this.mx, -this.limitX, this.limitX)), isNaN(parseFloat(this.limitY)) || (this.my = this.clamp(this.my, -this.limitY, this.limitY)), this.vx += (this.mx - this.vx) * this.frictionX, this.vy += (this.my - this.vy) * this.frictionY;
        for (var i = 0, n = this.layers.length; n > i; i++) {
            var r = this.layers[i], s = this.depths[i], o = this.vx * s * (this.invertX ? -1 : 1),
                a = this.vy * s * (this.invertY ? -1 : 1);
            this.setPosition(r, o, a)
        }
        this.raf = requestAnimationFrame(this.onAnimationFrame)
    }, n.prototype.onDeviceOrientation = function (t) {
        if (!this.desktop && null !== t.beta && null !== t.gamma) {
            this.orientationStatus = 1;
            var e = (t.beta || 0) / s, i = (t.gamma || 0) / s, n = this.wh > this.ww;
            this.portrait !== n && (this.portrait = n, this.calibrationFlag = !0), this.calibrationFlag && (this.calibrationFlag = !1, this.cx = e, this.cy = i), this.ix = e, this.iy = i
        }
    }, n.prototype.onMouseMove = function (t) {
        var e = t.clientX, i = t.clientY;
        !this.orientationSupport && this.relativeInput ? (this.clipRelativeInput && (e = Math.max(e, this.ex), e = Math.min(e, this.ex + this.ew), i = Math.max(i, this.ey), i = Math.min(i, this.ey + this.eh)), this.ix = (e - this.ex - this.ecx) / this.erx, this.iy = (i - this.ey - this.ecy) / this.ery) : (this.ix = (e - this.wcx) / this.wrx, this.iy = (i - this.wcy) / this.wry)
    }, t[r] = n
}(window, document), function () {
    for (var t = 0, e = ["ms", "moz", "webkit", "o"], i = 0; i < e.length && !window.requestAnimationFrame; ++i) window.requestAnimationFrame = window[e[i] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[i] + "CancelAnimationFrame"] || window[e[i] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function (e) {
        var i = (new Date).getTime(), n = Math.max(0, 16 - (i - t)), r = window.setTimeout(function () {
            e(i + n)
        }, n);
        return t = i + n, r
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (t) {
        clearTimeout(t)
    })
}(), function (t, e, i, n) {
    "use strict";

    function r(e, i) {
        this.element = e, this.$context = t(e).data("api", this), this.$layers = this.$context.find(".layer");
        var n = {
            calibrateX: this.$context.data("calibrate-x") || null,
            calibrateY: this.$context.data("calibrate-y") || null,
            invertX: this.$context.data("invert-x") || null,
            invertY: this.$context.data("invert-y") || null,
            limitX: parseFloat(this.$context.data("limit-x")) || null,
            limitY: parseFloat(this.$context.data("limit-y")) || null,
            scalarX: parseFloat(this.$context.data("scalar-x")) || null,
            scalarY: parseFloat(this.$context.data("scalar-y")) || null,
            frictionX: parseFloat(this.$context.data("friction-x")) || null,
            frictionY: parseFloat(this.$context.data("friction-y")) || null,
            originX: parseFloat(this.$context.data("origin-x")) || null,
            originY: parseFloat(this.$context.data("origin-y")) || null
        };
        for (var r in n) null === n[r] && delete n[r];
        t.extend(this, a, i, n), this.calibrationTimer = null, this.calibrationFlag = !0, this.enabled = !1, this.depths = [], this.raf = null, this.bounds = null, this.ex = 0, this.ey = 0, this.ew = 0, this.eh = 0, this.ecx = 0, this.ecy = 0, this.erx = 0, this.ery = 0, this.cx = 0, this.cy = 0, this.ix = 0, this.iy = 0, this.mx = 0, this.my = 0, this.vx = 0, this.vy = 0, this.onMouseMove = this.onMouseMove.bind(this), this.onDeviceOrientation = this.onDeviceOrientation.bind(this), this.onOrientationTimer = this.onOrientationTimer.bind(this), this.onCalibrationTimer = this.onCalibrationTimer.bind(this), this.onAnimationFrame = this.onAnimationFrame.bind(this), this.onWindowResize = this.onWindowResize.bind(this), this.initialise()
    }

    var s = "parallax", o = 30, a = {
        relativeInput: !1,
        clipRelativeInput: !1,
        calibrationThreshold: 100,
        calibrationDelay: 500,
        supportDelay: 500,
        calibrateX: !1,
        calibrateY: !0,
        invertX: !0,
        invertY: !0,
        limitX: !1,
        limitY: !1,
        scalarX: 10,
        scalarY: 10,
        frictionX: .1,
        frictionY: .1,
        originX: .5,
        originY: .5
    };
    r.prototype.transformSupport = function (t) {
        for (var r = i.createElement("div"), s = !1, o = null, a = !1, l = null, h = null, c = 0, u = this.vendors.length; c < u; c++) if (null !== this.vendors[c] ? (l = this.vendors[c][0] + "transform", h = this.vendors[c][1] + "Transform") : (l = "transform", h = "transform"), r.style[h] !== n) {
            s = !0;
            break
        }
        switch (t) {
            case"2D":
                a = s;
                break;
            case"3D":
                if (s) {
                    var p = i.body || i.createElement("body"), d = i.documentElement, f = d.style.overflow;
                    i.body || (d.style.overflow = "hidden", d.appendChild(p), p.style.overflow = "hidden", p.style.background = ""), p.appendChild(r), r.style[h] = "translate3d(1px,1px,1px)", o = e.getComputedStyle(r).getPropertyValue(l), a = o !== n && o.length > 0 && "none" !== o, d.style.overflow = f, p.removeChild(r)
                }
        }
        return a
    }, r.prototype.ww = null, r.prototype.wh = null, r.prototype.wcx = null, r.prototype.wcy = null, r.prototype.wrx = null, r.prototype.wry = null, r.prototype.portrait = null, r.prototype.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), r.prototype.vendors = [null, ["-webkit-", "webkit"], ["-moz-", "Moz"], ["-o-", "O"], ["-ms-", "ms"]], r.prototype.motionSupport = !!e.DeviceMotionEvent, r.prototype.orientationSupport = !!e.DeviceOrientationEvent, r.prototype.orientationStatus = 0, r.prototype.transform2DSupport = r.prototype.transformSupport("2D"), r.prototype.transform3DSupport = r.prototype.transformSupport("3D"), r.prototype.propertyCache = {}, r.prototype.initialise = function () {
        "static" === this.$context.css("position") && this.$context.css({position: "relative"}), this.accelerate(this.$context), this.updateLayers(), this.updateDimensions(), this.enable(), this.queueCalibration(this.calibrationDelay)
    }, r.prototype.updateLayers = function () {
        this.$layers = this.$context.find(".layer"), this.depths = [], this.$layers.css({
            position: "absolute",
            display: "block",
            left: 0,
            top: 0
        }), this.$layers.first().css({position: "relative"}), this.accelerate(this.$layers), this.$layers.each(t.proxy(function (e, i) {
            this.depths.push(t(i).data("depth") || 0)
        }, this))
    }, r.prototype.updateDimensions = function () {
        this.ww = e.innerWidth, this.wh = e.innerHeight, this.wcx = this.ww * this.originX, this.wcy = this.wh * this.originY, this.wrx = Math.max(this.wcx, this.ww - this.wcx), this.wry = Math.max(this.wcy, this.wh - this.wcy)
    }, r.prototype.updateBounds = function () {
        this.bounds = this.element.getBoundingClientRect(), this.ex = this.bounds.left, this.ey = this.bounds.top, this.ew = this.bounds.width, this.eh = this.bounds.height, this.ecx = this.ew * this.originX, this.ecy = this.eh * this.originY, this.erx = Math.max(this.ecx, this.ew - this.ecx), this.ery = Math.max(this.ecy, this.eh - this.ecy)
    }, r.prototype.queueCalibration = function (t) {
        clearTimeout(this.calibrationTimer), this.calibrationTimer = setTimeout(this.onCalibrationTimer, t)
    }, r.prototype.enable = function () {
        this.enabled || (this.enabled = !0, this.orientationSupport ? (this.portrait = null, e.addEventListener("deviceorientation", this.onDeviceOrientation), setTimeout(this.onOrientationTimer, this.supportDelay)) : (this.cx = 0, this.cy = 0, this.portrait = !1, e.addEventListener("mousemove", this.onMouseMove)), e.addEventListener("resize", this.onWindowResize), this.raf = requestAnimationFrame(this.onAnimationFrame))
    }, r.prototype.disable = function () {
        this.enabled && (this.enabled = !1, this.orientationSupport ? e.removeEventListener("deviceorientation", this.onDeviceOrientation) : e.removeEventListener("mousemove", this.onMouseMove), e.removeEventListener("resize", this.onWindowResize), cancelAnimationFrame(this.raf))
    }, r.prototype.calibrate = function (t, e) {
        this.calibrateX = t === n ? this.calibrateX : t, this.calibrateY = e === n ? this.calibrateY : e
    }, r.prototype.invert = function (t, e) {
        this.invertX = t === n ? this.invertX : t, this.invertY = e === n ? this.invertY : e
    }, r.prototype.friction = function (t, e) {
        this.frictionX = t === n ? this.frictionX : t, this.frictionY = e === n ? this.frictionY : e
    }, r.prototype.scalar = function (t, e) {
        this.scalarX = t === n ? this.scalarX : t, this.scalarY = e === n ? this.scalarY : e
    }, r.prototype.limit = function (t, e) {
        this.limitX = t === n ? this.limitX : t, this.limitY = e === n ? this.limitY : e
    }, r.prototype.origin = function (t, e) {
        this.originX = t === n ? this.originX : t, this.originY = e === n ? this.originY : e
    }, r.prototype.clamp = function (t, e, i) {
        return t = Math.max(t, e), t = Math.min(t, i)
    }, r.prototype.css = function (e, i, r) {
        var s = this.propertyCache[i];
        if (!s) for (var o = 0, a = this.vendors.length; o < a; o++) if (s = null !== this.vendors[o] ? t.camelCase(this.vendors[o][1] + "-" + i) : i, e.style[s] !== n) {
            this.propertyCache[i] = s;
            break
        }
        e.style[s] = r
    }, r.prototype.accelerate = function (t) {
        for (var e = 0, i = t.length; e < i; e++) {
            var n = t[e];
            this.css(n, "transform", "translate3d(0,0,0)"), this.css(n, "transform-style", "preserve-3d"), this.css(n, "backface-visibility", "hidden")
        }
    }, r.prototype.setPosition = function (t, e, i) {
        e += "px", i += "px", this.transform3DSupport ? this.css(t, "transform", "translate3d(" + e + "," + i + ",0)") : this.transform2DSupport ? this.css(t, "transform", "translate(" + e + "," + i + ")") : (t.style.left = e, t.style.top = i)
    }, r.prototype.onOrientationTimer = function (t) {
        this.orientationSupport && 0 === this.orientationStatus && (this.disable(), this.orientationSupport = !1, this.enable())
    }, r.prototype.onCalibrationTimer = function (t) {
        this.calibrationFlag = !0
    }, r.prototype.onWindowResize = function (t) {
        this.updateDimensions()
    }, r.prototype.onAnimationFrame = function () {
        this.updateBounds();
        var t = this.ix - this.cx, e = this.iy - this.cy;
        (Math.abs(t) > this.calibrationThreshold || Math.abs(e) > this.calibrationThreshold) && this.queueCalibration(0), this.portrait ? (this.mx = this.calibrateX ? e : this.iy, this.my = this.calibrateY ? t : this.ix) : (this.mx = this.calibrateX ? t : this.ix, this.my = this.calibrateY ? e : this.iy), this.mx *= this.ew * (this.scalarX / 100), this.my *= this.eh * (this.scalarY / 100), isNaN(parseFloat(this.limitX)) || (this.mx = this.clamp(this.mx, -this.limitX, this.limitX)), isNaN(parseFloat(this.limitY)) || (this.my = this.clamp(this.my, -this.limitY, this.limitY)), this.vx += (this.mx - this.vx) * this.frictionX, this.vy += (this.my - this.vy) * this.frictionY;
        for (var i = 0, n = this.$layers.length; i < n; i++) {
            var r = this.depths[i], s = this.$layers[i], o = this.vx * r * (this.invertX ? -1 : 1),
                a = this.vy * r * (this.invertY ? -1 : 1);
            this.setPosition(s, o, a)
        }
        this.raf = requestAnimationFrame(this.onAnimationFrame)
    }, r.prototype.onDeviceOrientation = function (t) {
        if (!this.desktop && null !== t.beta && null !== t.gamma) {
            this.orientationStatus = 1;
            var i = (t.beta || 0) / o, n = (t.gamma || 0) / o, r = e.innerHeight > e.innerWidth;
            this.portrait !== r && (this.portrait = r, this.calibrationFlag = !0), this.calibrationFlag && (this.calibrationFlag = !1, this.cx = i, this.cy = n), this.ix = i, this.iy = n
        }
    }, r.prototype.onMouseMove = function (t) {
        var e = t.clientX, i = t.clientY;
        !this.orientationSupport && this.relativeInput ? (this.clipRelativeInput && (e = Math.max(e, this.ex), e = Math.min(e, this.ex + this.ew), i = Math.max(i, this.ey), i = Math.min(i, this.ey + this.eh)), this.ix = (e - this.ex - this.ecx) / this.erx, this.iy = (i - this.ey - this.ecy) / this.ery) : (this.ix = (e - this.wcx) / this.wrx, this.iy = (i - this.wcy) / this.wry)
    };
    var l = {
        enable: r.prototype.enable,
        disable: r.prototype.disable,
        updateLayers: r.prototype.updateLayers,
        calibrate: r.prototype.calibrate,
        friction: r.prototype.friction,
        invert: r.prototype.invert,
        scalar: r.prototype.scalar,
        limit: r.prototype.limit,
        origin: r.prototype.origin
    };
    t.fn[s] = function (e) {
        var i = arguments;
        return this.each(function () {
            var n = t(this), o = n.data(s);
            o || (o = new r(this, e), n.data(s, o)), l[e] && o[e].apply(o, Array.prototype.slice.call(i, 1))
        })
    }
}(window.jQuery || window.Zepto, window, document), function () {
    for (var t = 0, e = ["ms", "moz", "webkit", "o"], i = 0; i < e.length && !window.requestAnimationFrame; ++i) window.requestAnimationFrame = window[e[i] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[i] + "CancelAnimationFrame"] || window[e[i] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function (e, i) {
        var n = (new Date).getTime(), r = Math.max(0, 16 - (n - t)), s = window.setTimeout(function () {
            e(n + r)
        }, r);
        return t = n + r, s
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (t) {
        clearTimeout(t)
    })
}(), !function (t, e, i, n) {
    "use strict";

    function r(e, i) {
        this.element = e, this.$context = t(e).data("api", this), this.$layers = this.$context.find(".layer");
        var n = {
            calibrateX: this.$context.data("calibrate-x") || null,
            calibrateY: this.$context.data("calibrate-y") || null,
            invertX: this.$context.data("invert-x") || null,
            invertY: this.$context.data("invert-y") || null,
            limitX: parseFloat(this.$context.data("limit-x")) || null,
            limitY: parseFloat(this.$context.data("limit-y")) || null,
            scalarX: parseFloat(this.$context.data("scalar-x")) || null,
            scalarY: parseFloat(this.$context.data("scalar-y")) || null,
            frictionX: parseFloat(this.$context.data("friction-x")) || null,
            frictionY: parseFloat(this.$context.data("friction-y")) || null,
            originX: parseFloat(this.$context.data("origin-x")) || null,
            originY: parseFloat(this.$context.data("origin-y")) || null
        };
        for (var r in n) null === n[r] && delete n[r];
        t.extend(this, a, i, n), this.calibrationTimer = null, this.calibrationFlag = !0, this.enabled = !1, this.depths = [], this.raf = null, this.bounds = null, this.ex = 0, this.ey = 0, this.ew = 0, this.eh = 0, this.ecx = 0, this.ecy = 0, this.erx = 0, this.ery = 0, this.cx = 0, this.cy = 0, this.ix = 0, this.iy = 0, this.mx = 0, this.my = 0, this.vx = 0, this.vy = 0, this.onMouseMove = this.onMouseMove.bind(this), this.onDeviceOrientation = this.onDeviceOrientation.bind(this), this.onOrientationTimer = this.onOrientationTimer.bind(this), this.onCalibrationTimer = this.onCalibrationTimer.bind(this), this.onAnimationFrame = this.onAnimationFrame.bind(this), this.onWindowResize = this.onWindowResize.bind(this), this.initialise()
    }

    var s = "parallax", o = 30, a = {
        relativeInput: !1,
        clipRelativeInput: !1,
        calibrationThreshold: 100,
        calibrationDelay: 500,
        supportDelay: 500,
        calibrateX: !1,
        calibrateY: !0,
        invertX: !0,
        invertY: !0,
        limitX: !1,
        limitY: !1,
        scalarX: 10,
        scalarY: 10,
        frictionX: .1,
        frictionY: .1,
        originX: .5,
        originY: .5
    };
    r.prototype.transformSupport = function (t) {
        for (var r = i.createElement("div"), s = !1, o = null, a = !1, l = null, h = null, c = 0, u = this.vendors.length; u > c; c++) if (null !== this.vendors[c] ? (l = this.vendors[c][0] + "transform", h = this.vendors[c][1] + "Transform") : (l = "transform", h = "transform"), r.style[h] !== n) {
            s = !0;
            break
        }
        switch (t) {
            case"2D":
                a = s;
                break;
            case"3D":
                if (s) {
                    var p = i.body || i.createElement("body"), d = i.documentElement, f = d.style.overflow;
                    i.body || (d.style.overflow = "hidden", d.appendChild(p), p.style.overflow = "hidden", p.style.background = ""), p.appendChild(r), r.style[h] = "translate3d(1px,1px,1px)", o = e.getComputedStyle(r).getPropertyValue(l), a = o !== n && o.length > 0 && "none" !== o, d.style.overflow = f, p.removeChild(r)
                }
        }
        return a
    }, r.prototype.ww = null, r.prototype.wh = null, r.prototype.wcx = null, r.prototype.wcy = null, r.prototype.wrx = null, r.prototype.wry = null, r.prototype.portrait = null, r.prototype.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), r.prototype.vendors = [null, ["-webkit-", "webkit"], ["-moz-", "Moz"], ["-o-", "O"], ["-ms-", "ms"]], r.prototype.motionSupport = !!e.DeviceMotionEvent, r.prototype.orientationSupport = !!e.DeviceOrientationEvent, r.prototype.orientationStatus = 0, r.prototype.transform2DSupport = r.prototype.transformSupport("2D"), r.prototype.transform3DSupport = r.prototype.transformSupport("3D"), r.prototype.propertyCache = {}, r.prototype.initialise = function () {
        "static" === this.$context.css("position") && this.$context.css({position: "relative"}), this.accelerate(this.$context), this.updateLayers(), this.updateDimensions(), this.enable(), this.queueCalibration(this.calibrationDelay)
    }, r.prototype.updateLayers = function () {
        this.$layers = this.$context.find(".layer"), this.depths = [], this.$layers.css({
            position: "absolute",
            display: "block",
            left: 0,
            top: 0
        }), this.$layers.first().css({position: "relative"}), this.accelerate(this.$layers), this.$layers.each(t.proxy(function (e, i) {
            this.depths.push(t(i).data("depth") || 0)
        }, this))
    }, r.prototype.updateDimensions = function () {
        this.ww = e.innerWidth, this.wh = e.innerHeight, this.wcx = this.ww * this.originX, this.wcy = this.wh * this.originY, this.wrx = Math.max(this.wcx, this.ww - this.wcx), this.wry = Math.max(this.wcy, this.wh - this.wcy)
    }, r.prototype.updateBounds = function () {
        this.bounds = this.element.getBoundingClientRect(), this.ex = this.bounds.left, this.ey = this.bounds.top, this.ew = this.bounds.width, this.eh = this.bounds.height, this.ecx = this.ew * this.originX, this.ecy = this.eh * this.originY, this.erx = Math.max(this.ecx, this.ew - this.ecx), this.ery = Math.max(this.ecy, this.eh - this.ecy)
    }, r.prototype.queueCalibration = function (t) {
        clearTimeout(this.calibrationTimer), this.calibrationTimer = setTimeout(this.onCalibrationTimer, t)
    }, r.prototype.enable = function () {
        this.enabled || (this.enabled = !0, this.orientationSupport ? (this.portrait = null, e.addEventListener("deviceorientation", this.onDeviceOrientation), setTimeout(this.onOrientationTimer, this.supportDelay)) : (this.cx = 0, this.cy = 0, this.portrait = !1, e.addEventListener("mousemove", this.onMouseMove)), e.addEventListener("resize", this.onWindowResize), this.raf = requestAnimationFrame(this.onAnimationFrame))
    }, r.prototype.disable = function () {
        this.enabled && (this.enabled = !1, this.orientationSupport ? e.removeEventListener("deviceorientation", this.onDeviceOrientation) : e.removeEventListener("mousemove", this.onMouseMove), e.removeEventListener("resize", this.onWindowResize), cancelAnimationFrame(this.raf))
    }, r.prototype.calibrate = function (t, e) {
        this.calibrateX = t === n ? this.calibrateX : t, this.calibrateY = e === n ? this.calibrateY : e
    }, r.prototype.invert = function (t, e) {
        this.invertX = t === n ? this.invertX : t, this.invertY = e === n ? this.invertY : e
    }, r.prototype.friction = function (t, e) {
        this.frictionX = t === n ? this.frictionX : t, this.frictionY = e === n ? this.frictionY : e
    }, r.prototype.scalar = function (t, e) {
        this.scalarX = t === n ? this.scalarX : t, this.scalarY = e === n ? this.scalarY : e
    }, r.prototype.limit = function (t, e) {
        this.limitX = t === n ? this.limitX : t, this.limitY = e === n ? this.limitY : e
    }, r.prototype.origin = function (t, e) {
        this.originX = t === n ? this.originX : t, this.originY = e === n ? this.originY : e
    }, r.prototype.clamp = function (t, e, i) {
        return t = Math.max(t, e), t = Math.min(t, i)
    }, r.prototype.css = function (e, i, r) {
        var s = this.propertyCache[i];
        if (!s) for (var o = 0, a = this.vendors.length; a > o; o++) if (s = null !== this.vendors[o] ? t.camelCase(this.vendors[o][1] + "-" + i) : i, e.style[s] !== n) {
            this.propertyCache[i] = s;
            break
        }
        e.style[s] = r
    }, r.prototype.accelerate = function (t) {
        for (var e = 0, i = t.length; i > e; e++) {
            var n = t[e];
            this.css(n, "transform", "translate3d(0,0,0)"), this.css(n, "transform-style", "preserve-3d"), this.css(n, "backface-visibility", "hidden")
        }
    }, r.prototype.setPosition = function (t, e, i) {
        e += "px", i += "px", this.transform3DSupport ? this.css(t, "transform", "translate3d(" + e + "," + i + ",0)") : this.transform2DSupport ? this.css(t, "transform", "translate(" + e + "," + i + ")") : (t.style.left = e, t.style.top = i)
    }, r.prototype.onOrientationTimer = function () {
        this.orientationSupport && 0 === this.orientationStatus && (this.disable(), this.orientationSupport = !1, this.enable())
    }, r.prototype.onCalibrationTimer = function () {
        this.calibrationFlag = !0
    }, r.prototype.onWindowResize = function () {
        this.updateDimensions()
    }, r.prototype.onAnimationFrame = function () {
        this.updateBounds();
        var t = this.ix - this.cx, e = this.iy - this.cy;
        (Math.abs(t) > this.calibrationThreshold || Math.abs(e) > this.calibrationThreshold) && this.queueCalibration(0), this.portrait ? (this.mx = this.calibrateX ? e : this.iy, this.my = this.calibrateY ? t : this.ix) : (this.mx = this.calibrateX ? t : this.ix, this.my = this.calibrateY ? e : this.iy), this.mx *= this.ew * (this.scalarX / 100), this.my *= this.eh * (this.scalarY / 100), isNaN(parseFloat(this.limitX)) || (this.mx = this.clamp(this.mx, -this.limitX, this.limitX)), isNaN(parseFloat(this.limitY)) || (this.my = this.clamp(this.my, -this.limitY, this.limitY)), this.vx += (this.mx - this.vx) * this.frictionX, this.vy += (this.my - this.vy) * this.frictionY;
        for (var i = 0, n = this.$layers.length; n > i; i++) {
            var r = this.depths[i], s = this.$layers[i], o = this.vx * r * (this.invertX ? -1 : 1),
                a = this.vy * r * (this.invertY ? -1 : 1);
            this.setPosition(s, o, a)
        }
        this.raf = requestAnimationFrame(this.onAnimationFrame)
    }, r.prototype.onDeviceOrientation = function (t) {
        if (!this.desktop && null !== t.beta && null !== t.gamma) {
            this.orientationStatus = 1;
            var i = (t.beta || 0) / o, n = (t.gamma || 0) / o, r = e.innerHeight > e.innerWidth;
            this.portrait !== r && (this.portrait = r, this.calibrationFlag = !0), this.calibrationFlag && (this.calibrationFlag = !1, this.cx = i, this.cy = n), this.ix = i, this.iy = n
        }
    }, r.prototype.onMouseMove = function (t) {
        var e = t.clientX, i = t.clientY;
        !this.orientationSupport && this.relativeInput ? (this.clipRelativeInput && (e = Math.max(e, this.ex), e = Math.min(e, this.ex + this.ew), i = Math.max(i, this.ey), i = Math.min(i, this.ey + this.eh)), this.ix = (e - this.ex - this.ecx) / this.erx, this.iy = (i - this.ey - this.ecy) / this.ery) : (this.ix = (e - this.wcx) / this.wrx, this.iy = (i - this.wcy) / this.wry)
    };
    var l = {
        enable: r.prototype.enable,
        disable: r.prototype.disable,
        updateLayers: r.prototype.updateLayers,
        calibrate: r.prototype.calibrate,
        friction: r.prototype.friction,
        invert: r.prototype.invert,
        scalar: r.prototype.scalar,
        limit: r.prototype.limit,
        origin: r.prototype.origin
    };
    t.fn[s] = function (e) {
        var i = arguments;
        return this.each(function () {
            var n = t(this), o = n.data(s);
            o || (o = new r(this, e), n.data(s, o)), l[e] && o[e].apply(o, Array.prototype.slice.call(i, 1))
        })
    }
}(window.jQuery || window.Zepto, window, document), function () {
    for (var t = 0, e = ["ms", "moz", "webkit", "o"], i = 0; i < e.length && !window.requestAnimationFrame; ++i) window.requestAnimationFrame = window[e[i] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[i] + "CancelAnimationFrame"] || window[e[i] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function (e) {
        var i = (new Date).getTime(), n = Math.max(0, 16 - (i - t)), r = window.setTimeout(function () {
            e(i + n)
        }, n);
        return t = i + n, r
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (t) {
        clearTimeout(t)
    })
}(), /*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t : t(jQuery)
    }(function (t) {
        function e(e) {
            var o = e || window.event, a = l.call(arguments, 1), h = 0, u = 0, p = 0, d = 0, f = 0, m = 0;
            if (e = t.event.fix(o), e.type = "mousewheel", "detail" in o && (p = o.detail * -1), "wheelDelta" in o && (p = o.wheelDelta), "wheelDeltaY" in o && (p = o.wheelDeltaY), "wheelDeltaX" in o && (u = o.wheelDeltaX * -1), "axis" in o && o.axis === o.HORIZONTAL_AXIS && (u = p * -1, p = 0), h = 0 === p ? u : p, "deltaY" in o && (p = o.deltaY * -1, h = p), "deltaX" in o && (u = o.deltaX, 0 === p && (h = u * -1)), 0 !== p || 0 !== u) {
                if (1 === o.deltaMode) {
                    var g = t.data(this, "mousewheel-line-height");
                    h *= g, p *= g, u *= g
                } else if (2 === o.deltaMode) {
                    var v = t.data(this, "mousewheel-page-height");
                    h *= v, p *= v, u *= v
                }
                if (d = Math.max(Math.abs(p), Math.abs(u)), (!s || d < s) && (s = d, n(o, d) && (s /= 40)), n(o, d) && (h /= 40, u /= 40, p /= 40), h = Math[h >= 1 ? "floor" : "ceil"](h / s), u = Math[u >= 1 ? "floor" : "ceil"](u / s), p = Math[p >= 1 ? "floor" : "ceil"](p / s), c.settings.normalizeOffset && this.getBoundingClientRect) {
                    var y = this.getBoundingClientRect();
                    f = e.clientX - y.left, m = e.clientY - y.top
                }
                return e.deltaX = u, e.deltaY = p, e.deltaFactor = s, e.offsetX = f, e.offsetY = m, e.deltaMode = 0, a.unshift(e, h, u, p), r && clearTimeout(r), r = setTimeout(i, 200), (t.event.dispatch || t.event.handle).apply(this, a)
            }
        }

        function i() {
            s = null
        }

        function n(t, e) {
            return c.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 === 0
        }

        var r, s, o = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
            a = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
            l = Array.prototype.slice;
        if (t.event.fixHooks) for (var h = o.length; h;) t.event.fixHooks[o[--h]] = t.event.mouseHooks;
        var c = t.event.special.mousewheel = {
            version: "3.1.12", setup: function () {
                if (this.addEventListener) for (var i = a.length; i;) this.addEventListener(a[--i], e, !1); else this.onmousewheel = e;
                t.data(this, "mousewheel-line-height", c.getLineHeight(this)), t.data(this, "mousewheel-page-height", c.getPageHeight(this))
            }, teardown: function () {
                if (this.removeEventListener) for (var i = a.length; i;) this.removeEventListener(a[--i], e, !1); else this.onmousewheel = null;
                t.removeData(this, "mousewheel-line-height"), t.removeData(this, "mousewheel-page-height")
            }, getLineHeight: function (e) {
                var i = t(e), n = i["offsetParent" in t.fn ? "offsetParent" : "parent"]();
                return n.length || (n = t("body")), parseInt(n.css("fontSize"), 10) || parseInt(i.css("fontSize"), 10) || 16
            }, getPageHeight: function (e) {
                return t(e).height()
            }, settings: {adjustOldDeltas: !0, normalizeOffset: !0}
        };
        t.fn.extend({
            mousewheel: function (t) {
                return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
            }, unmousewheel: function (t) {
                return this.unbind("mousewheel", t)
            }
        })
    }), /*!
 * skrollr core
 *
 * Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr
 *
 * Free to use under terms of MIT license
 */
    function (t, e, i) {
        "use strict";

        function n(i) {
            if (r = e.documentElement, s = e.body, Y(), at = this, i = i || {}, pt = i.constants || {}, i.easing) for (var n in i.easing) V[n] = i.easing[n];
            bt = i.edgeStrategy || "set", ct = {
                beforerender: i.beforerender,
                render: i.render,
                keyframe: i.keyframe
            }, ut = i.forceHeight !== !1, ut && (Rt = i.scale || 1), dt = i.mobileDeceleration || C, mt = i.smoothScrolling !== !1, gt = i.smoothScrollingDuration || k, vt = {targetTop: at.getScrollTop()}, Xt = (i.mobileCheck || function () {
                return /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || t.opera)
            })(), Xt ? (ht = e.getElementById(i.skrollrBody || S), ht && ot(), G(), Ft(r, [y, _], [b])) : Ft(r, [y, x], [b]), at.refresh(), wt(t, "resize orientationchange", function () {
                var t = r.clientWidth, e = r.clientHeight;
                e === zt && t === jt || (zt = e, jt = t, Ht = !0)
            });
            var o = U();
            return function a() {
                J(), _t = o(a)
            }(), at
        }

        var r, s, o = {
                get: function () {
                    return at
                }, init: function (t) {
                    return at || new n(t)
                }, VERSION: "0.6.29"
            }, a = Object.prototype.hasOwnProperty, l = t.Math, h = t.getComputedStyle, c = "touchstart", u = "touchmove",
            p = "touchcancel", d = "touchend", f = "skrollable", m = f + "-before", g = f + "-between",
            v = f + "-after", y = "skrollr", b = "no-" + y, x = y + "-desktop", _ = y + "-mobile", w = "linear",
            T = 1e3, C = .004, S = "skrollr-body", k = 200, E = "start", A = "end", D = "center", F = "bottom",
            $ = "___skrollable_id", P = /^(?:input|textarea|button|select)$/i, O = /^\s+|\s+$/g,
            N = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,
            M = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi, R = /^(@?[a-z\-]+)\[(\w+)\]$/, I = /-([a-z0-9_])/g,
            L = function (t, e) {
                return e.toUpperCase()
            }, B = /[\-+]?[\d]*\.?[\d]+/g, j = /\{\?\}/g, z = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,
            H = /[a-z\-]+-gradient/g, q = "", X = "", Y = function () {
                var t = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
                if (h) {
                    var e = h(s, null);
                    for (var i in e) if (q = i.match(t) || +i == i && e[i].match(t)) break;
                    if (!q) return void(q = X = "");
                    q = q[0], "-" === q.slice(0, 1) ? (X = q, q = {
                        "-webkit-": "webkit",
                        "-moz-": "Moz",
                        "-ms-": "ms",
                        "-o-": "O"
                    }[q]) : X = "-" + q.toLowerCase() + "-"
                }
            }, U = function () {
                var e = t.requestAnimationFrame || t[q.toLowerCase() + "RequestAnimationFrame"], i = Ot();
                return !Xt && e || (e = function (e) {
                    var n = Ot() - i, r = l.max(0, 1e3 / 60 - n);
                    return t.setTimeout(function () {
                        i = Ot(), e()
                    }, r)
                }), e
            }, W = function () {
                var e = t.cancelAnimationFrame || t[q.toLowerCase() + "CancelAnimationFrame"];
                return !Xt && e || (e = function (e) {
                    return t.clearTimeout(e)
                }), e
            }, V = {
                begin: function () {
                    return 0
                }, end: function () {
                    return 1
                }, linear: function (t) {
                    return t
                }, quadratic: function (t) {
                    return t * t
                }, cubic: function (t) {
                    return t * t * t
                }, swing: function (t) {
                    return -l.cos(t * l.PI) / 2 + .5
                }, sqrt: function (t) {
                    return l.sqrt(t)
                }, outCubic: function (t) {
                    return l.pow(t - 1, 3) + 1
                }, bounce: function (t) {
                    var e;
                    if (t <= .5083) e = 3; else if (t <= .8489) e = 9; else if (t <= .96208) e = 27; else {
                        if (!(t <= .99981)) return 1;
                        e = 91
                    }
                    return 1 - l.abs(3 * l.cos(t * e * 1.028) / e)
                }
            };
        n.prototype.refresh = function (t) {
            var n, r, s = !1;
            for (t === i ? (s = !0, lt = [], qt = 0, t = e.getElementsByTagName("*")) : t.length === i && (t = [t]), n = 0, r = t.length; n < r; n++) {
                var o = t[n], a = o, l = [], h = mt, c = bt, u = !1;
                if (s && $ in o && delete o[$], o.attributes) {
                    for (var p = 0, d = o.attributes.length; p < d; p++) {
                        var m = o.attributes[p];
                        if ("data-anchor-target" !== m.name) if ("data-smooth-scrolling" !== m.name) if ("data-edge-strategy" !== m.name) if ("data-emit-events" !== m.name) {
                            var g = m.name.match(N);
                            if (null !== g) {
                                var v = {props: m.value, element: o, eventType: m.name.replace(I, L)};
                                l.push(v);
                                var y = g[1];
                                y && (v.constant = y.substr(1));
                                var b = g[2];
                                /p$/.test(b) ? (v.isPercentage = !0, v.offset = (0 | b.slice(0, -1)) / 100) : v.offset = 0 | b;
                                var x = g[3], _ = g[4] || x;
                                x && x !== E && x !== A ? (v.mode = "relative", v.anchors = [x, _]) : (v.mode = "absolute", x === A ? v.isEnd = !0 : v.isPercentage || (v.offset = v.offset * Rt))
                            }
                        } else u = !0; else c = m.value; else h = "off" !== m.value; else if (a = e.querySelector(m.value), null === a) throw'Unable to find anchor target "' + m.value + '"'
                    }
                    if (l.length) {
                        var w, T, C;
                        !s && $ in o ? (C = o[$], w = lt[C].styleAttr, T = lt[C].classAttr) : (C = o[$] = qt++, w = o.style.cssText, T = Dt(o)), lt[C] = {
                            element: o,
                            styleAttr: w,
                            classAttr: T,
                            anchorTarget: a,
                            keyFrames: l,
                            smoothScrolling: h,
                            edgeStrategy: c,
                            emitEvents: u,
                            lastFrameIndex: -1
                        }, Ft(o, [f], [])
                    }
                }
            }
            for (kt(), n = 0, r = t.length; n < r; n++) {
                var S = lt[t[n][$]];
                S !== i && (K(S), et(S))
            }
            return at
        }, n.prototype.relativeToAbsolute = function (t, e, i) {
            var n = r.clientHeight, s = t.getBoundingClientRect(), o = s.top, a = s.bottom - s.top;
            return e === F ? o -= n : e === D && (o -= n / 2), i === F ? o += a : i === D && (o += a / 2), o += at.getScrollTop(), o + .5 | 0
        }, n.prototype.animateTo = function (t, e) {
            e = e || {};
            var n = Ot(), r = at.getScrollTop(), s = e.duration === i ? T : e.duration;
            return ft = {
                startTop: r,
                topDiff: t - r,
                targetTop: t,
                duration: s,
                startTime: n,
                endTime: n + s,
                easing: V[e.easing || w],
                done: e.done
            }, ft.topDiff || (ft.done && ft.done.call(at, !1), ft = i), at
        }, n.prototype.stopAnimateTo = function () {
            ft && ft.done && ft.done.call(at, !0), ft = i
        }, n.prototype.isAnimatingTo = function () {
            return !!ft
        }, n.prototype.isMobile = function () {
            return Xt
        }, n.prototype.setScrollTop = function (e, i) {
            return yt = i === !0, Xt ? Yt = l.min(l.max(e, 0), Mt) : t.scrollTo(0, e), at
        }, n.prototype.getScrollTop = function () {
            return Xt ? Yt : t.pageYOffset || r.scrollTop || s.scrollTop || 0
        }, n.prototype.getMaxScrollTop = function () {
            return Mt
        }, n.prototype.on = function (t, e) {
            return ct[t] = e, at
        }, n.prototype.off = function (t) {
            return delete ct[t], at
        }, n.prototype.destroy = function () {
            var t = W();
            t(_t), Ct(), Ft(r, [b], [y, x, _]);
            for (var e = 0, n = lt.length; e < n; e++) st(lt[e].element);
            r.style.overflow = s.style.overflow = "", r.style.height = s.style.height = "", ht && o.setStyle(ht, "transform", "none"), at = i, ht = i, ct = i, ut = i, Mt = 0, Rt = 1, pt = i, dt = i, It = "down", Lt = -1, jt = 0, zt = 0, Ht = !1, ft = i, mt = i, gt = i, vt = i, yt = i, qt = 0, bt = i, Xt = !1, Yt = 0, xt = i
        };
        var G = function () {
            var n, o, a, h, f, m, g, v, y, b, x, _;
            wt(r, [c, u, p, d].join(" "), function (t) {
                var r = t.changedTouches[0];
                for (h = t.target; 3 === h.nodeType;) h = h.parentNode;
                switch (f = r.clientY, m = r.clientX, b = t.timeStamp, P.test(h.tagName) || t.preventDefault(), t.type) {
                    case c:
                        n && n.blur(), at.stopAnimateTo(), n = h, o = g = f, a = m, y = b;
                        break;
                    case u:
                        P.test(h.tagName) && e.activeElement !== h && t.preventDefault(), v = f - g, _ = b - x, at.setScrollTop(Yt - v, !0), g = f, x = b;
                        break;
                    default:
                    case p:
                    case d:
                        var s = o - f, w = a - m, T = w * w + s * s;
                        if (T < 49) {
                            if (!P.test(n.tagName)) {
                                n.focus();
                                var C = e.createEvent("MouseEvents");
                                C.initMouseEvent("click", !0, !0, t.view, 1, r.screenX, r.screenY, r.clientX, r.clientY, t.ctrlKey, t.altKey, t.shiftKey, t.metaKey, 0, null), n.dispatchEvent(C)
                            }
                            return
                        }
                        n = i;
                        var S = v / _;
                        S = l.max(l.min(S, 3), -3);
                        var k = l.abs(S / dt), E = S * k + .5 * dt * k * k, A = at.getScrollTop() - E, D = 0;
                        A > Mt ? (D = (Mt - A) / E, A = Mt) : A < 0 && (D = -A / E, A = 0), k *= 1 - D, at.animateTo(A + .5 | 0, {
                            easing: "outCubic",
                            duration: k
                        })
                }
            }), t.scrollTo(0, 0), r.style.overflow = s.style.overflow = "hidden"
        }, Q = function () {
            var t, e, i, n, s, o, a, h, c, u, p, d = r.clientHeight, f = Et();
            for (h = 0, c = lt.length; h < c; h++) for (t = lt[h], e = t.element, i = t.anchorTarget, n = t.keyFrames, s = 0, o = n.length; s < o; s++) a = n[s], u = a.offset, p = f[a.constant] || 0, a.frame = u, a.isPercentage && (u *= d, a.frame = u), "relative" === a.mode && (st(e), a.frame = at.relativeToAbsolute(i, a.anchors[0], a.anchors[1]) - u, st(e, !0)), a.frame += p, ut && !a.isEnd && a.frame > Mt && (Mt = a.frame);
            for (Mt = l.max(Mt, At()), h = 0, c = lt.length; h < c; h++) {
                for (t = lt[h], n = t.keyFrames, s = 0, o = n.length; s < o; s++) a = n[s], p = f[a.constant] || 0, a.isEnd && (a.frame = Mt - a.offset + p);
                t.keyFrames.sort(Nt)
            }
        }, Z = function (t, e) {
            for (var i = 0, n = lt.length; i < n; i++) {
                var r, s, l = lt[i], h = l.element, c = l.smoothScrolling ? t : e, u = l.keyFrames, p = u.length,
                    d = u[0], y = u[u.length - 1], b = c < d.frame, x = c > y.frame, _ = b ? d : y, w = l.emitEvents,
                    T = l.lastFrameIndex;
                if (b || x) {
                    if (b && l.edge === -1 || x && 1 === l.edge) continue;
                    switch (b ? (Ft(h, [m], [v, g]), w && T > -1 && (St(h, d.eventType, It), l.lastFrameIndex = -1)) : (Ft(h, [v], [m, g]), w && T < p && (St(h, y.eventType, It), l.lastFrameIndex = p)), l.edge = b ? -1 : 1, l.edgeStrategy) {
                        case"reset":
                            st(h);
                            continue;
                        case"ease":
                            c = _.frame;
                            break;
                        default:
                        case"set":
                            var C = _.props;
                            for (r in C) a.call(C, r) && (s = rt(C[r].value), 0 === r.indexOf("@") ? h.setAttribute(r.substr(1), s) : o.setStyle(h, r, s));
                            continue
                    }
                } else 0 !== l.edge && (Ft(h, [f, g], [m, v]), l.edge = 0);
                for (var S = 0; S < p - 1; S++) if (c >= u[S].frame && c <= u[S + 1].frame) {
                    var k = u[S], E = u[S + 1];
                    for (r in k.props) if (a.call(k.props, r)) {
                        var A = (c - k.frame) / (E.frame - k.frame);
                        A = k.props[r].easing(A), s = nt(k.props[r].value, E.props[r].value, A), s = rt(s), 0 === r.indexOf("@") ? h.setAttribute(r.substr(1), s) : o.setStyle(h, r, s)
                    }
                    w && T !== S && ("down" === It ? St(h, k.eventType, It) : St(h, E.eventType, It), l.lastFrameIndex = S);
                    break
                }
            }
        }, J = function () {
            Ht && (Ht = !1, kt());
            var t, e, n = at.getScrollTop(), r = Ot();
            if (ft) r >= ft.endTime ? (n = ft.targetTop, t = ft.done, ft = i) : (e = ft.easing((r - ft.startTime) / ft.duration), n = ft.startTop + e * ft.topDiff | 0), at.setScrollTop(n, !0); else if (!yt) {
                var s = vt.targetTop - n;
                s && (vt = {
                    startTop: Lt,
                    topDiff: n - Lt,
                    targetTop: n,
                    startTime: Bt,
                    endTime: Bt + gt
                }), r <= vt.endTime && (e = V.sqrt((r - vt.startTime) / gt), n = vt.startTop + e * vt.topDiff | 0)
            }
            if (yt || Lt !== n) {
                It = n > Lt ? "down" : n < Lt ? "up" : It, yt = !1;
                var a = {curTop: n, lastTop: Lt, maxTop: Mt, direction: It},
                    l = ct.beforerender && ct.beforerender.call(at, a);
                l !== !1 && (Z(n, at.getScrollTop()), Xt && ht && o.setStyle(ht, "transform", "translate(0, " + -Yt + "px) " + xt), Lt = n, ct.render && ct.render.call(at, a)), t && t.call(at, !1)
            }
            Bt = r
        }, K = function (t) {
            for (var e = 0, i = t.keyFrames.length; e < i; e++) {
                for (var n, r, s, o, a = t.keyFrames[e], l = {}; null !== (o = M.exec(a.props));) s = o[1], r = o[2], n = s.match(R), null !== n ? (s = n[1], n = n[2]) : n = w, r = r.indexOf("!") ? tt(r) : [r.slice(1)], l[s] = {
                    value: r,
                    easing: V[n]
                };
                a.props = l
            }
        }, tt = function (t) {
            var e = [];
            return z.lastIndex = 0, t = t.replace(z, function (t) {
                return t.replace(B, function (t) {
                    return t / 255 * 100 + "%"
                })
            }), X && (H.lastIndex = 0, t = t.replace(H, function (t) {
                return X + t
            })), t = t.replace(B, function (t) {
                return e.push(+t), "{?}"
            }), e.unshift(t), e
        }, et = function (t) {
            var e, i, n = {};
            for (e = 0, i = t.keyFrames.length; e < i; e++) it(t.keyFrames[e], n);
            for (n = {}, e = t.keyFrames.length - 1; e >= 0; e--) it(t.keyFrames[e], n)
        }, it = function (t, e) {
            var i;
            for (i in e) a.call(t.props, i) || (t.props[i] = e[i]);
            for (i in t.props) e[i] = t.props[i]
        }, nt = function (t, e, i) {
            var n, r = t.length;
            if (r !== e.length) throw"Can't interpolate between \"" + t[0] + '" and "' + e[0] + '"';
            var s = [t[0]];
            for (n = 1; n < r; n++) s[n] = t[n] + (e[n] - t[n]) * i;
            return s
        }, rt = function (t) {
            var e = 1;
            return j.lastIndex = 0, t[0].replace(j, function () {
                return t[e++]
            })
        }, st = function (t, e) {
            t = [].concat(t);
            for (var i, n, r = 0, s = t.length; r < s; r++) n = t[r], i = lt[n[$]], i && (e ? (n.style.cssText = i.dirtyStyleAttr, Ft(n, i.dirtyClassAttr)) : (i.dirtyStyleAttr = n.style.cssText, i.dirtyClassAttr = Dt(n), n.style.cssText = i.styleAttr, Ft(n, i.classAttr)))
        }, ot = function () {
            xt = "translateZ(0)", o.setStyle(ht, "transform", xt);
            var t = h(ht), e = t.getPropertyValue("transform"), i = t.getPropertyValue(X + "transform"),
                n = e && "none" !== e || i && "none" !== i;
            n || (xt = "")
        };
        o.setStyle = function (t, e, i) {
            var n = t.style;
            if (e = e.replace(I, L).replace("-", ""), "zIndex" === e) isNaN(i) ? n[e] = i : n[e] = "" + (0 | i); else if ("float" === e) n.styleFloat = n.cssFloat = i; else try {
                q && (n[q + e.slice(0, 1).toUpperCase() + e.slice(1)] = i), n[e] = i
            } catch (r) {
            }
        };
        var at, lt, ht, ct, ut, pt, dt, ft, mt, gt, vt, yt, bt, xt, _t, wt = o.addEvent = function (e, i, n) {
            var r = function (e) {
                return e = e || t.event, e.target || (e.target = e.srcElement), e.preventDefault || (e.preventDefault = function () {
                    e.returnValue = !1, e.defaultPrevented = !0
                }), n.call(this, e)
            };
            i = i.split(" ");
            for (var s, o = 0, a = i.length; o < a; o++) s = i[o], e.addEventListener ? e.addEventListener(s, n, !1) : e.attachEvent("on" + s, r), Ut.push({
                element: e,
                name: s,
                listener: n
            })
        }, Tt = o.removeEvent = function (t, e, i) {
            e = e.split(" ");
            for (var n = 0, r = e.length; n < r; n++) t.removeEventListener ? t.removeEventListener(e[n], i, !1) : t.detachEvent("on" + e[n], i)
        }, Ct = function () {
            for (var t, e = 0, i = Ut.length; e < i; e++) t = Ut[e], Tt(t.element, t.name, t.listener);
            Ut = []
        }, St = function (t, e, i) {
            ct.keyframe && ct.keyframe.call(at, t, e, i)
        }, kt = function () {
            var t = at.getScrollTop();
            Mt = 0, ut && !Xt && (s.style.height = ""), Q(), ut && !Xt && (s.style.height = Mt + r.clientHeight + "px"), Xt ? at.setScrollTop(l.min(at.getScrollTop(), Mt)) : at.setScrollTop(t, !0), yt = !0
        }, Et = function () {
            var t, e, i = r.clientHeight, n = {};
            for (t in pt) e = pt[t], "function" == typeof e ? e = e.call(at) : /p$/.test(e) && (e = e.slice(0, -1) / 100 * i), n[t] = e;
            return n
        }, At = function () {
            var t, e = 0;
            return ht && (e = l.max(ht.offsetHeight, ht.scrollHeight)), t = l.max(e, s.scrollHeight, s.offsetHeight, r.scrollHeight, r.offsetHeight, r.clientHeight), t - r.clientHeight
        }, Dt = function (e) {
            var i = "className";
            return t.SVGElement && e instanceof t.SVGElement && (e = e[i], i = "baseVal"), e[i]
        }, Ft = function (e, n, r) {
            var s = "className";
            if (t.SVGElement && e instanceof t.SVGElement && (e = e[s], s = "baseVal"), r === i) return void(e[s] = n);
            for (var o = e[s], a = 0, l = r.length; a < l; a++) o = Pt(o).replace(Pt(r[a]), " ");
            o = $t(o);
            for (var h = 0, c = n.length; h < c; h++) Pt(o).indexOf(Pt(n[h])) === -1 && (o += " " + n[h]);
            e[s] = $t(o)
        }, $t = function (t) {
            return t.replace(O, "")
        }, Pt = function (t) {
            return " " + t + " "
        }, Ot = Date.now || function () {
            return +new Date
        }, Nt = function (t, e) {
            return t.frame - e.frame
        }, Mt = 0, Rt = 1, It = "down", Lt = -1, Bt = Ot(), jt = 0, zt = 0, Ht = !1, qt = 0, Xt = !1, Yt = 0, Ut = [];
        "function" == typeof define && define.amd ? define([], function () {
            return o
        }) : "undefined" != typeof module && module.exports ? module.exports = o : t.skrollr = o
    }(window, document);
/*!
 * VERSION: 1.20.2
 * DATE: 2017-06-30
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if ((_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
        "use strict";
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
            var n = function (t) {
                var e, i = [], n = t.length;
                for (e = 0; e !== n; i.push(t[e++])) ;
                return i
            }, r = function (t, e, i) {
                var n, r, s = t.cycle;
                for (n in s) r = s[n], t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length];
                delete t.cycle
            }, s = function (t, e, n) {
                i.call(this, t, e, n), this._cycle = 0, this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = s.prototype.render
            }, o = 1e-10, a = i._internals, l = a.isSelector, h = a.isArray, c = s.prototype = i.to({}, .1, {}), u = [];
            s.version = "1.20.2", c.constructor = s, c.kill()._gc = !1, s.killTweensOf = s.killDelayedCallsTo = i.killTweensOf, s.getTweensOf = i.getTweensOf, s.lagSmoothing = i.lagSmoothing, s.ticker = i.ticker, s.render = i.render, c.invalidate = function () {
                return this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), i.prototype.invalidate.call(this)
            }, c.updateTo = function (t, e) {
                var n, r = this.ratio, s = this.vars.immediateRender || t.immediateRender;
                e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                for (n in t) this.vars[n] = t[n];
                if (this._initted || s) if (e) this._initted = !1, s && this.render(0, !0, !0); else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                    var o = this._totalTime;
                    this.render(0, !0, !1), this._initted = !1, this.render(o, !0, !1)
                } else if (this._initted = !1, this._init(), this._time > 0 || s) for (var a, l = 1 / (1 - r), h = this._firstPT; h;) a = h.s + h.c, h.c *= l, h.s = a - h.c, h = h._next;
                return this
            }, c.render = function (t, e, n) {
                this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                var r, s, l, h, c, u, p, d, f, m = this._dirty ? this.totalDuration() : this._totalDuration,
                    g = this._time, v = this._totalTime, y = this._cycle, b = this._duration, x = this._rawPrevTime;
                if (t >= m - 1e-7 && t >= 0 ? (this._totalTime = m, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = b, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (r = !0, s = "onComplete", n = n || this._timeline.autoRemoveChildren), 0 === b && (this._initted || !this.vars.lazy || n) && (this._startTime === this._timeline._duration && (t = 0), (x < 0 || t <= 0 && t >= -1e-7 || x === o && "isPause" !== this.data) && x !== t && (n = !0, x > o && (s = "onReverseComplete")), this._rawPrevTime = d = !e || t || x === t ? t : o)) : t < 1e-7 ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== v || 0 === b && x > 0) && (s = "onReverseComplete", r = this._reversed), t < 0 && (this._active = !1, 0 === b && (this._initted || !this.vars.lazy || n) && (x >= 0 && (n = !0), this._rawPrevTime = d = !e || t || x === t ? t : o)), this._initted || (n = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (h = b + this._repeatDelay, this._cycle = this._totalTime / h >> 0, 0 !== this._cycle && this._cycle === this._totalTime / h && v <= t && this._cycle--, this._time = this._totalTime - this._cycle * h, this._yoyo && 0 !== (1 & this._cycle) && (this._time = b - this._time, f = this._yoyoEase || this.vars.yoyoEase, f && (this._yoyoEase || (f !== !0 || this._initted ? this._yoyoEase = f = f === !0 ? this._ease : f instanceof Ease ? f : Ease.map[f] : (f = this.vars.ease, this._yoyoEase = f = f ? f instanceof Ease ? f : "function" == typeof f ? new Ease(f, this.vars.easeParams) : Ease.map[f] || i.defaultEase : i.defaultEase)), this.ratio = f ? 1 - f.getRatio((b - this._time) / b) : 0)), this._time > b ? this._time = b : this._time < 0 && (this._time = 0)), this._easeType && !f ? (c = this._time / b, u = this._easeType, p = this._easePower, (1 === u || 3 === u && c >= .5) && (c = 1 - c), 3 === u && (c *= 2), 1 === p ? c *= c : 2 === p ? c *= c * c : 3 === p ? c *= c * c * c : 4 === p && (c *= c * c * c * c), 1 === u ? this.ratio = 1 - c : 2 === u ? this.ratio = c : this._time / b < .5 ? this.ratio = c / 2 : this.ratio = 1 - c / 2) : f || (this.ratio = this._ease.getRatio(this._time / b))), g === this._time && !n && y === this._cycle) return void(v !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    if (!n && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = g, this._totalTime = v, this._rawPrevTime = x, this._cycle = y, a.lazyTweens.push(this), void(this._lazy = [t, e]);
                    !this._time || r || f ? r && this._ease._calcEnd && !f && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / b)
                }
                for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== g && t >= 0 && (this._active = !0), 0 === v && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, n) : s || (s = "_dummyGS")), this.vars.onStart && (0 === this._totalTime && 0 !== b || e || this._callback("onStart"))), l = this._firstPT; l;) l.f ? l.t[l.p](l.c * this.ratio + l.s) : l.t[l.p] = l.c * this.ratio + l.s, l = l._next;
                this._onUpdate && (t < 0 && this._startAt && this._startTime && this._startAt.render(t, e, n), e || (this._totalTime !== v || s) && this._callback("onUpdate")), this._cycle !== y && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), s && (this._gc && !n || (t < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, n), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this._callback(s), 0 === b && this._rawPrevTime === o && d !== o && (this._rawPrevTime = 0)))
            }, s.to = function (t, e, i) {
                return new s(t, e, i)
            }, s.from = function (t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new s(t, e, i)
            }, s.fromTo = function (t, e, i, n) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new s(t, e, n)
            }, s.staggerTo = s.allTo = function (t, e, o, a, c, p, d) {
                a = a || 0;
                var f, m, g, v, y = 0, b = [], x = function () {
                    o.onComplete && o.onComplete.apply(o.onCompleteScope || this, arguments), c.apply(d || o.callbackScope || this, p || u)
                }, _ = o.cycle, w = o.startAt && o.startAt.cycle;
                for (h(t) || ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = n(t))), t = t || [], a < 0 && (t = n(t), t.reverse(), a *= -1), f = t.length - 1, g = 0; g <= f; g++) {
                    m = {};
                    for (v in o) m[v] = o[v];
                    if (_ && (r(m, t, g), null != m.duration && (e = m.duration, delete m.duration)), w) {
                        w = m.startAt = {};
                        for (v in o.startAt) w[v] = o.startAt[v];
                        r(m.startAt, t, g)
                    }
                    m.delay = y + (m.delay || 0), g === f && c && (m.onComplete = x), b[g] = new s(t[g], e, m), y += a
                }
                return b
            }, s.staggerFrom = s.allFrom = function (t, e, i, n, r, o, a) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, s.staggerTo(t, e, i, n, r, o, a)
            }, s.staggerFromTo = s.allFromTo = function (t, e, i, n, r, o, a, l) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, s.staggerTo(t, e, n, r, o, a, l)
            }, s.delayedCall = function (t, e, i, n, r) {
                return new s(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    callbackScope: n,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    useFrames: r,
                    overwrite: 0
                })
            }, s.set = function (t, e) {
                return new s(t, 0, e)
            }, s.isTweening = function (t) {
                return i.getTweensOf(t, !0).length > 0
            };
            var p = function (t, e) {
                for (var n = [], r = 0, s = t._first; s;) s instanceof i ? n[r++] = s : (e && (n[r++] = s), n = n.concat(p(s, e)), r = n.length), s = s._next;
                return n
            }, d = s.getAllTweens = function (e) {
                return p(t._rootTimeline, e).concat(p(t._rootFramesTimeline, e))
            };
            s.killAll = function (t, i, n, r) {
                null == i && (i = !0), null == n && (n = !0);
                var s, o, a, l = d(0 != r), h = l.length, c = i && n && r;
                for (a = 0; a < h; a++) o = l[a], (c || o instanceof e || (s = o.target === o.vars.onComplete) && n || i && !s) && (t ? o.totalTime(o._reversed ? 0 : o.totalDuration()) : o._enabled(!1, !1))
            }, s.killChildTweensOf = function (t, e) {
                if (null != t) {
                    var r, o, c, u, p, d = a.tweenLookup;
                    if ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = n(t)), h(t)) for (u = t.length; --u > -1;) s.killChildTweensOf(t[u], e); else {
                        r = [];
                        for (c in d) for (o = d[c].target.parentNode; o;) o === t && (r = r.concat(d[c].tweens)), o = o.parentNode;
                        for (p = r.length, u = 0; u < p; u++) e && r[u].totalTime(r[u].totalDuration()), r[u]._enabled(!1, !1)
                    }
                }
            };
            var f = function (t, i, n, r) {
                i = i !== !1, n = n !== !1, r = r !== !1;
                for (var s, o, a = d(r), l = i && n && r, h = a.length; --h > -1;) o = a[h], (l || o instanceof e || (s = o.target === o.vars.onComplete) && n || i && !s) && o.paused(t)
            };
            return s.pauseAll = function (t, e, i) {
                f(!0, t, e, i)
            }, s.resumeAll = function (t, e, i) {
                f(!1, t, e, i)
            }, s.globalTimeScale = function (e) {
                var n = t._rootTimeline, r = i.ticker.time;
                return arguments.length ? (e = e || o, n._startTime = r - (r - n._startTime) * n._timeScale / e, n = t._rootFramesTimeline, r = i.ticker.frame, n._startTime = r - (r - n._startTime) * n._timeScale / e, n._timeScale = t._rootTimeline._timeScale = e, e) : n._timeScale
            }, c.progress = function (t, e) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
            }, c.totalProgress = function (t, e) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
            }, c.time = function (t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
            }, c.duration = function (e) {
                return arguments.length ? t.prototype.duration.call(this, e) : this._duration
            }, c.totalDuration = function (t) {
                return arguments.length ? this._repeat === -1 ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
            }, c.repeat = function (t) {
                return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
            }, c.repeatDelay = function (t) {
                return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
            }, c.yoyo = function (t) {
                return arguments.length ? (this._yoyo = t, this) : this._yoyo
            }, s
        }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
            var n = function (t) {
                    e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                    var i, n, r = this.vars;
                    for (n in r) i = r[n], l(i) && i.join("").indexOf("{self}") !== -1 && (r[n] = this._swapSelfInParams(i));
                    l(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
                }, r = 1e-10, s = i._internals, o = n._internals = {}, a = s.isSelector, l = s.isArray, h = s.lazyTweens,
                c = s.lazyRender, u = _gsScope._gsDefine.globals, p = function (t) {
                    var e, i = {};
                    for (e in t) i[e] = t[e];
                    return i
                }, d = function (t, e, i) {
                    var n, r, s = t.cycle;
                    for (n in s) r = s[n], t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length];
                    delete t.cycle
                }, f = o.pauseCallback = function () {
                }, m = function (t) {
                    var e, i = [], n = t.length;
                    for (e = 0; e !== n; i.push(t[e++])) ;
                    return i
                }, g = n.prototype = new e;
            return n.version = "1.20.2", g.constructor = n, g.kill()._gc = g._forcingPlayhead = g._hasPause = !1, g.to = function (t, e, n, r) {
                var s = n.repeat && u.TweenMax || i;
                return e ? this.add(new s(t, e, n), r) : this.set(t, n, r)
            }, g.from = function (t, e, n, r) {
                return this.add((n.repeat && u.TweenMax || i).from(t, e, n), r)
            }, g.fromTo = function (t, e, n, r, s) {
                var o = r.repeat && u.TweenMax || i;
                return e ? this.add(o.fromTo(t, e, n, r), s) : this.set(t, r, s)
            }, g.staggerTo = function (t, e, r, s, o, l, h, c) {
                var u, f, g = new n({
                    onComplete: l,
                    onCompleteParams: h,
                    callbackScope: c,
                    smoothChildTiming: this.smoothChildTiming
                }), v = r.cycle;
                for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], a(t) && (t = m(t)), s = s || 0, s < 0 && (t = m(t), t.reverse(), s *= -1), f = 0; f < t.length; f++) u = p(r), u.startAt && (u.startAt = p(u.startAt), u.startAt.cycle && d(u.startAt, t, f)), v && (d(u, t, f), null != u.duration && (e = u.duration, delete u.duration)), g.to(t[f], e, u, f * s);
                return this.add(g, o)
            }, g.staggerFrom = function (t, e, i, n, r, s, o, a) {
                return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, r, s, o, a)
            }, g.staggerFromTo = function (t, e, i, n, r, s, o, a, l) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, r, s, o, a, l)
            }, g.call = function (t, e, n, r) {
                return this.add(i.delayedCall(0, t, e, n), r)
            }, g.set = function (t, e, n) {
                return n = this._parseTimeOrLabel(n, 0, !0), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n)
            }, n.exportRoot = function (t, e) {
                t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                var r, s, o = new n(t), a = o._timeline;
                for (null == e && (e = !0), a._remove(o, !0), o._startTime = 0, o._rawPrevTime = o._time = o._totalTime = a._time, r = a._first; r;) s = r._next, e && r instanceof i && r.target === r.vars.onComplete || o.add(r, r._startTime - r._delay), r = s;
                return a.add(o, 0), o
            }, g.add = function (r, s, o, a) {
                var h, c, u, p, d, f;
                if ("number" != typeof s && (s = this._parseTimeOrLabel(s, 0, !0, r)), !(r instanceof t)) {
                    if (r instanceof Array || r && r.push && l(r)) {
                        for (o = o || "normal", a = a || 0, h = s, c = r.length, u = 0; u < c; u++) l(p = r[u]) && (p = new n({tweens: p})), this.add(p, h), "string" != typeof p && "function" != typeof p && ("sequence" === o ? h = p._startTime + p.totalDuration() / p._timeScale : "start" === o && (p._startTime -= p.delay())), h += a;
                        return this._uncache(!0)
                    }
                    if ("string" == typeof r) return this.addLabel(r, s);
                    if ("function" != typeof r) throw"Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                    r = i.delayedCall(0, r)
                }
                if (e.prototype.add.call(this, r, s), r._time && r.render((this.rawTime() - r._startTime) * r._timeScale, !1, !1), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration()) for (d = this, f = d.rawTime() > r._startTime; d._timeline;) f && d._timeline.smoothChildTiming ? d.totalTime(d._totalTime, !0) : d._gc && d._enabled(!0, !1), d = d._timeline;
                return this
            }, g.remove = function (e) {
                if (e instanceof t) {
                    this._remove(e, !1);
                    var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                    return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
                }
                if (e instanceof Array || e && e.push && l(e)) {
                    for (var n = e.length; --n > -1;) this.remove(e[n]);
                    return this
                }
                return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
            }, g._remove = function (t, i) {
                e.prototype._remove.call(this, t, i);
                var n = this._last;
                return n ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
            }, g.append = function (t, e) {
                return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
            }, g.insert = g.insertMultiple = function (t, e, i, n) {
                return this.add(t, e || 0, i, n)
            }, g.appendMultiple = function (t, e, i, n) {
                return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
            }, g.addLabel = function (t, e) {
                return this._labels[t] = this._parseTimeOrLabel(e), this
            }, g.addPause = function (t, e, n, r) {
                var s = i.delayedCall(0, f, n, r || this);
                return s.vars.onComplete = s.vars.onReverseComplete = e, s.data = "isPause", this._hasPause = !0, this.add(s, t)
            }, g.removeLabel = function (t) {
                return delete this._labels[t], this
            }, g.getLabelTime = function (t) {
                return null != this._labels[t] ? this._labels[t] : -1
            }, g._parseTimeOrLabel = function (e, i, n, r) {
                var s, o;
                if (r instanceof t && r.timeline === this) this.remove(r); else if (r && (r instanceof Array || r.push && l(r))) for (o = r.length; --o > -1;) r[o] instanceof t && r[o].timeline === this && this.remove(r[o]);
                if (s = this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration, "string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - s : 0, n);
                if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = s); else {
                    if (o = e.indexOf("="), o === -1) return null == this._labels[e] ? n ? this._labels[e] = s + i : i : this._labels[e] + i;
                    i = parseInt(e.charAt(o - 1) + "1", 10) * Number(e.substr(o + 1)), e = o > 1 ? this._parseTimeOrLabel(e.substr(0, o - 1), 0, n) : s
                }
                return Number(e) + i
            }, g.seek = function (t, e) {
                return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
            }, g.stop = function () {
                return this.paused(!0)
            }, g.gotoAndPlay = function (t, e) {
                return this.play(t, e)
            }, g.gotoAndStop = function (t, e) {
                return this.pause(t, e)
            }, g.render = function (t, e, i) {
                this._gc && this._enabled(!0, !1);
                var n, s, o, a, l, u, p, d = this._dirty ? this.totalDuration() : this._totalDuration, f = this._time,
                    m = this._startTime, g = this._timeScale, v = this._paused;
                if (t >= d - 1e-7 && t >= 0) this._totalTime = this._time = d, this._reversed || this._hasPausedChild() || (s = !0, a = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > r && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = d + 1e-4; else if (t < 1e-7) if (this._totalTime = this._time = 0, (0 !== f || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || t < 0 && this._rawPrevTime >= 0)) && (a = "onReverseComplete", s = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = s = !0, a = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t; else {
                    if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, 0 === t && s) for (n = this._first; n && 0 === n._startTime;) n._duration || (s = !1), n = n._next;
                    t = 0, this._initted || (l = !0)
                } else {
                    if (this._hasPause && !this._forcingPlayhead && !e) {
                        if (t >= f) for (n = this._first; n && n._startTime <= t && !u;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (u = n), n = n._next; else for (n = this._last; n && n._startTime >= t && !u;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (u = n), n = n._prev;
                        u && (this._time = t = u._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    this._totalTime = this._time = this._rawPrevTime = t
                }
                if (this._time !== f && this._first || i || l || u) {
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== f && t > 0 && (this._active = !0), 0 === f && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), p = this._time, p >= f) for (n = this._first; n && (o = n._next, p === this._time && (!this._paused || v));) (n._active || n._startTime <= p && !n._paused && !n._gc) && (u === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = o; else for (n = this._last; n && (o = n._prev, p === this._time && (!this._paused || v));) {
                        if (n._active || n._startTime <= f && !n._paused && !n._gc) {
                            if (u === n) {
                                for (u = n._prev; u && u.endTime() > this._time;) u.render(u._reversed ? u.totalDuration() - (t - u._startTime) * u._timeScale : (t - u._startTime) * u._timeScale, e, i), u = u._prev;
                                u = null, this.pause()
                            }
                            n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                        }
                        n = o
                    }
                    this._onUpdate && (e || (h.length && c(), this._callback("onUpdate"))), a && (this._gc || m !== this._startTime && g === this._timeScale || (0 === this._time || d >= this.totalDuration()) && (s && (h.length && c(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this._callback(a)))
                }
            }, g._hasPausedChild = function () {
                for (var t = this._first; t;) {
                    if (t._paused || t instanceof n && t._hasPausedChild()) return !0;
                    t = t._next
                }
                return !1
            }, g.getChildren = function (t, e, n, r) {
                r = r || -9999999999;
                for (var s = [], o = this._first, a = 0; o;) o._startTime < r || (o instanceof i ? e !== !1 && (s[a++] = o) : (n !== !1 && (s[a++] = o), t !== !1 && (s = s.concat(o.getChildren(!0, e, n)), a = s.length))), o = o._next;
                return s
            }, g.getTweensOf = function (t, e) {
                var n, r, s = this._gc, o = [], a = 0;
                for (s && this._enabled(!0, !0), n = i.getTweensOf(t), r = n.length; --r > -1;) (n[r].timeline === this || e && this._contains(n[r])) && (o[a++] = n[r]);
                return s && this._enabled(!1, !0), o
            }, g.recent = function () {
                return this._recent
            }, g._contains = function (t) {
                for (var e = t.timeline; e;) {
                    if (e === this) return !0;
                    e = e.timeline
                }
                return !1
            }, g.shiftChildren = function (t, e, i) {
                i = i || 0;
                for (var n, r = this._first, s = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
                if (e) for (n in s) s[n] >= i && (s[n] += t);
                return this._uncache(!0)
            }, g._kill = function (t, e) {
                if (!t && !e) return this._enabled(!1, !1);
                for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1;) i[n]._kill(t, e) && (r = !0);
                return r
            }, g.clear = function (t) {
                var e = this.getChildren(!1, !0, !0), i = e.length;
                for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                return t !== !1 && (this._labels = {}), this._uncache(!0)
            }, g.invalidate = function () {
                for (var e = this._first; e;) e.invalidate(), e = e._next;
                return t.prototype.invalidate.call(this)
            }, g._enabled = function (t, i) {
                if (t === this._gc) for (var n = this._first; n;) n._enabled(t, !0), n = n._next;
                return e.prototype._enabled.call(this, t, i)
            }, g.totalTime = function (e, i, n) {
                this._forcingPlayhead = !0;
                var r = t.prototype.totalTime.apply(this, arguments);
                return this._forcingPlayhead = !1, r
            }, g.duration = function (t) {
                return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
            }, g.totalDuration = function (t) {
                if (!arguments.length) {
                    if (this._dirty) {
                        for (var e, i, n = 0, r = this._last, s = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > s && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : s = r._startTime, r._startTime < 0 && !r._paused && (n -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), s = 0), i = r._startTime + r._totalDuration / r._timeScale, i > n && (n = i), r = e;
                        this._duration = this._totalDuration = n, this._dirty = !1
                    }
                    return this._totalDuration
                }
                return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
            }, g.paused = function (e) {
                if (!e) for (var i = this._first, n = this._time; i;) i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                return t.prototype.paused.apply(this, arguments)
            }, g.usesFrames = function () {
                for (var e = this._timeline; e._timeline;) e = e._timeline;
                return e === t._rootFramesTimeline
            }, g.rawTime = function (t) {
                return t && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale
            }, n
        }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (t, e, i) {
            var n = function (e) {
                    t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                }, r = 1e-10, s = e._internals, o = s.lazyTweens, a = s.lazyRender, l = _gsScope._gsDefine.globals,
                h = new i(null, null, 1, 0), c = n.prototype = new t;
            return c.constructor = n, c.kill()._gc = !1, n.version = "1.20.2", c.invalidate = function () {
                return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
            }, c.addCallback = function (t, i, n, r) {
                return this.add(e.delayedCall(0, t, n, r), i)
            }, c.removeCallback = function (t, e) {
                if (t) if (null == e) this._kill(null, t); else for (var i = this.getTweensOf(t, !1), n = i.length, r = this._parseTimeOrLabel(e); --n > -1;) i[n]._startTime === r && i[n]._enabled(!1, !1);
                return this
            }, c.removePause = function (e) {
                return this.removeCallback(t._internals.pauseCallback, e)
            }, c.tweenTo = function (t, i) {
                i = i || {};
                var n, r, s, o = {ease: h, useFrames: this.usesFrames(), immediateRender: !1},
                    a = i.repeat && l.TweenMax || e;
                for (r in i) o[r] = i[r];
                return o.time = this._parseTimeOrLabel(t), n = Math.abs(Number(o.time) - this._time) / this._timeScale || .001, s = new a(this, n, o), o.onStart = function () {
                    s.target.paused(!0), s.vars.time !== s.target.time() && n === s.duration() && s.duration(Math.abs(s.vars.time - s.target.time()) / s.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || i.callbackScope || s, i.onStartParams || [])
                }, s
            }, c.tweenFromTo = function (t, e, i) {
                i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                    onComplete: this.seek,
                    onCompleteParams: [t],
                    callbackScope: this
                }, i.immediateRender = i.immediateRender !== !1;
                var n = this.tweenTo(e, i);
                return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
            }, c.render = function (t, e, i) {
                this._gc && this._enabled(!0, !1);
                var n, s, l, h, c, u, p, d, f = this._dirty ? this.totalDuration() : this._totalDuration,
                    m = this._duration, g = this._time, v = this._totalTime, y = this._startTime, b = this._timeScale,
                    x = this._rawPrevTime, _ = this._paused, w = this._cycle;
                if (t >= f - 1e-7 && t >= 0) this._locked || (this._totalTime = f, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (s = !0, h = "onComplete", c = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-7 || x < 0 || x === r) && x !== t && this._first && (c = !0, x > r && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = m, t = m + 1e-4); else if (t < 1e-7) if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== g || 0 === m && x !== r && (x > 0 || t < 0 && x >= 0) && !this._locked) && (h = "onReverseComplete", s = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (c = s = !0, h = "onReverseComplete") : x >= 0 && this._first && (c = !0), this._rawPrevTime = t; else {
                    if (this._rawPrevTime = m || !e || t || this._rawPrevTime === t ? t : r, 0 === t && s) for (n = this._first; n && 0 === n._startTime;) n._duration || (s = !1), n = n._next;
                    t = 0, this._initted || (c = !0)
                } else if (0 === m && x < 0 && (c = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (u = m + this._repeatDelay, this._cycle = this._totalTime / u >> 0, 0 !== this._cycle && this._cycle === this._totalTime / u && v <= t && this._cycle--, this._time = this._totalTime - this._cycle * u, this._yoyo && 0 !== (1 & this._cycle) && (this._time = m - this._time), this._time > m ? (this._time = m, t = m + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
                    if (t = this._time, t >= g || this._repeat && w !== this._cycle) for (n = this._first; n && n._startTime <= t && !p;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (p = n), n = n._next; else for (n = this._last; n && n._startTime >= t && !p;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (p = n), n = n._prev;
                    p && p._startTime < m && (this._time = t = p._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                }
                if (this._cycle !== w && !this._locked) {
                    var T = this._yoyo && 0 !== (1 & w), C = T === (this._yoyo && 0 !== (1 & this._cycle)),
                        S = this._totalTime, k = this._cycle, E = this._rawPrevTime, A = this._time;
                    if (this._totalTime = w * m, this._cycle < w ? T = !T : this._totalTime += m, this._time = g, this._rawPrevTime = 0 === m ? x - 1e-4 : x, this._cycle = w, this._locked = !0, g = T ? 0 : m, this.render(g, e, 0 === m), e || this._gc || this.vars.onRepeat && (this._cycle = k, this._locked = !1, this._callback("onRepeat")), g !== this._time) return;
                    if (C && (this._cycle = w, this._locked = !0, g = T ? m + 1e-4 : -1e-4, this.render(g, !0, !1)), this._locked = !1, this._paused && !_) return;
                    this._time = A, this._totalTime = S, this._cycle = k, this._rawPrevTime = E
                }
                if (!(this._time !== g && this._first || i || c || p)) return void(v !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== v && t > 0 && (this._active = !0), 0 === v && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), d = this._time, d >= g) for (n = this._first; n && (l = n._next, d === this._time && (!this._paused || _));) (n._active || n._startTime <= this._time && !n._paused && !n._gc) && (p === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = l; else for (n = this._last; n && (l = n._prev, d === this._time && (!this._paused || _));) {
                    if (n._active || n._startTime <= g && !n._paused && !n._gc) {
                        if (p === n) {
                            for (p = n._prev; p && p.endTime() > this._time;) p.render(p._reversed ? p.totalDuration() - (t - p._startTime) * p._timeScale : (t - p._startTime) * p._timeScale, e, i), p = p._prev;
                            p = null, this.pause()
                        }
                        n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                    }
                    n = l
                }
                this._onUpdate && (e || (o.length && a(), this._callback("onUpdate"))), h && (this._locked || this._gc || y !== this._startTime && b === this._timeScale || (0 === this._time || f >= this.totalDuration()) && (s && (o.length && a(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[h] && this._callback(h)))
            }, c.getActive = function (t, e, i) {
                null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                var n, r, s = [], o = this.getChildren(t, e, i), a = 0, l = o.length;
                for (n = 0; n < l; n++) r = o[n], r.isActive() && (s[a++] = r);
                return s
            }, c.getLabelAfter = function (t) {
                t || 0 !== t && (t = this._time);
                var e, i = this.getLabelsArray(), n = i.length;
                for (e = 0; e < n; e++) if (i[e].time > t) return i[e].name;
                return null
            }, c.getLabelBefore = function (t) {
                null == t && (t = this._time);
                for (var e = this.getLabelsArray(), i = e.length; --i > -1;) if (e[i].time < t) return e[i].name;
                return null
            }, c.getLabelsArray = function () {
                var t, e = [], i = 0;
                for (t in this._labels) e[i++] = {time: this._labels[t], name: t};
                return e.sort(function (t, e) {
                    return t.time - e.time
                }), e
            }, c.invalidate = function () {
                return this._locked = !1, t.prototype.invalidate.call(this)
            }, c.progress = function (t, e) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() || 0
            }, c.totalProgress = function (t, e) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() || 0
            }, c.totalDuration = function (e) {
                return arguments.length ? this._repeat !== -1 && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
            }, c.time = function (t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
            }, c.repeat = function (t) {
                return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
            }, c.repeatDelay = function (t) {
                return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
            }, c.yoyo = function (t) {
                return arguments.length ? (this._yoyo = t, this) : this._yoyo
            }, c.currentLabel = function (t) {
                return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
            }, n
        }, !0), function () {
            var t = 180 / Math.PI, e = [], i = [], n = [], r = {}, s = _gsScope._gsDefine.globals,
                o = function (t, e, i, n) {
                    i === n && (i = n - (n - e) / 1e6), t === e && (e = t + (i - t) / 1e6), this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t
                },
                a = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                l = function (t, e, i, n) {
                    var r = {a: t}, s = {}, o = {}, a = {c: n}, l = (t + e) / 2, h = (e + i) / 2, c = (i + n) / 2,
                        u = (l + h) / 2, p = (h + c) / 2, d = (p - u) / 8;
                    return r.b = l + (t - l) / 4, s.b = u + d, r.c = s.a = (r.b + s.b) / 2, s.c = o.a = (u + p) / 2, o.b = p - d, a.b = c + (n - c) / 4, o.c = a.a = (o.b + a.b) / 2, [r, s, o, a]
                }, h = function (t, r, s, o, a) {
                    var h, c, u, p, d, f, m, g, v, y, b, x, _, w = t.length - 1, T = 0, C = t[0].a;
                    for (h = 0; h < w; h++) d = t[T], c = d.a, u = d.d, p = t[T + 1].d, a ? (b = e[h], x = i[h], _ = (x + b) * r * .25 / (o ? .5 : n[h] || .5), f = u - (u - c) * (o ? .5 * r : 0 !== b ? _ / b : 0), m = u + (p - u) * (o ? .5 * r : 0 !== x ? _ / x : 0), g = u - (f + ((m - f) * (3 * b / (b + x) + .5) / 4 || 0))) : (f = u - (u - c) * r * .5, m = u + (p - u) * r * .5, g = u - (f + m) / 2), f += g, m += g, d.c = v = f, 0 !== h ? d.b = C : d.b = C = d.a + .6 * (d.c - d.a), d.da = u - c, d.ca = v - c, d.ba = C - c, s ? (y = l(c, C, v, u), t.splice(T, 1, y[0], y[1], y[2], y[3]), T += 4) : T++, C = m;
                    d = t[T], d.b = C, d.c = C + .4 * (d.d - C), d.da = d.d - d.a, d.ca = d.c - d.a, d.ba = C - d.a, s && (y = l(d.a, C, d.c, d.d), t.splice(T, 1, y[0], y[1], y[2], y[3]))
                }, c = function (t, n, r, s) {
                    var a, l, h, c, u, p, d = [];
                    if (s) for (t = [s].concat(t), l = t.length; --l > -1;) "string" == typeof(p = t[l][n]) && "=" === p.charAt(1) && (t[l][n] = s[n] + Number(p.charAt(0) + p.substr(2)));
                    if (a = t.length - 2, a < 0) return d[0] = new o(t[0][n], 0, 0, t[0][n]), d;
                    for (l = 0; l < a; l++) h = t[l][n], c = t[l + 1][n], d[l] = new o(h, 0, 0, c), r && (u = t[l + 2][n], e[l] = (e[l] || 0) + (c - h) * (c - h), i[l] = (i[l] || 0) + (u - c) * (u - c));
                    return d[l] = new o(t[l][n], 0, 0, t[l + 1][n]), d
                }, u = function (t, s, o, l, u, p) {
                    var d, f, m, g, v, y, b, x, _ = {}, w = [], T = p || t[0];
                    u = "string" == typeof u ? "," + u + "," : a, null == s && (s = 1);
                    for (f in t[0]) w.push(f);
                    if (t.length > 1) {
                        for (x = t[t.length - 1], b = !0, d = w.length; --d > -1;) if (f = w[d], Math.abs(T[f] - x[f]) > .05) {
                            b = !1;
                            break
                        }
                        b && (t = t.concat(), p && t.unshift(p), t.push(t[1]), p = t[t.length - 3])
                    }
                    for (e.length = i.length = n.length = 0, d = w.length; --d > -1;) f = w[d], r[f] = u.indexOf("," + f + ",") !== -1, _[f] = c(t, f, r[f], p);
                    for (d = e.length; --d > -1;) e[d] = Math.sqrt(e[d]), i[d] = Math.sqrt(i[d]);
                    if (!l) {
                        for (d = w.length; --d > -1;) if (r[f]) for (m = _[w[d]], y = m.length - 1, g = 0; g < y; g++) v = m[g + 1].da / i[g] + m[g].da / e[g] || 0, n[g] = (n[g] || 0) + v * v;
                        for (d = n.length; --d > -1;) n[d] = Math.sqrt(n[d])
                    }
                    for (d = w.length, g = o ? 4 : 1; --d > -1;) f = w[d], m = _[f], h(m, s, o, l, r[f]), b && (m.splice(0, g), m.splice(m.length - g, g));
                    return _
                }, p = function (t, e, i) {
                    e = e || "soft";
                    var n, r, s, a, l, h, c, u, p, d, f, m = {}, g = "cubic" === e ? 3 : 2, v = "soft" === e, y = [];
                    if (v && i && (t = [i].concat(t)), null == t || t.length < g + 1) throw"invalid Bezier data";
                    for (p in t[0]) y.push(p);
                    for (h = y.length; --h > -1;) {
                        for (p = y[h], m[p] = l = [], d = 0, u = t.length,
                                 c = 0; c < u; c++) n = null == i ? t[c][p] : "string" == typeof(f = t[c][p]) && "=" === f.charAt(1) ? i[p] + Number(f.charAt(0) + f.substr(2)) : Number(f), v && c > 1 && c < u - 1 && (l[d++] = (n + l[d - 2]) / 2), l[d++] = n;
                        for (u = d - g + 1, d = 0, c = 0; c < u; c += g) n = l[c], r = l[c + 1], s = l[c + 2], a = 2 === g ? 0 : l[c + 3], l[d++] = f = 3 === g ? new o(n, r, s, a) : new o(n, (2 * r + n) / 3, (2 * r + s) / 3, s);
                        l.length = d
                    }
                    return m
                }, d = function (t, e, i) {
                    for (var n, r, s, o, a, l, h, c, u, p, d, f = 1 / i, m = t.length; --m > -1;) for (p = t[m], s = p.a, o = p.d - s, a = p.c - s, l = p.b - s, n = r = 0, c = 1; c <= i; c++) h = f * c, u = 1 - h, n = r - (r = (h * h * o + 3 * u * (h * a + u * l)) * h), d = m * i + c - 1, e[d] = (e[d] || 0) + n * n
                }, f = function (t, e) {
                    e = e >> 0 || 6;
                    var i, n, r, s, o = [], a = [], l = 0, h = 0, c = e - 1, u = [], p = [];
                    for (i in t) d(t[i], o, e);
                    for (r = o.length, n = 0; n < r; n++) l += Math.sqrt(o[n]), s = n % e, p[s] = l, s === c && (h += l, s = n / e >> 0, u[s] = p, a[s] = h, l = 0, p = []);
                    return {length: h, lengths: a, segments: u}
                }, m = _gsScope._gsDefine.plugin({
                    propName: "bezier",
                    priority: -1,
                    version: "1.3.8",
                    API: 2,
                    global: !0,
                    init: function (t, e, i) {
                        this._target = t, e instanceof Array && (e = {values: e}), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                        var n, r, s, o, a, l = e.values || [], h = {}, c = l[0], d = e.autoRotate || i.vars.orientToBezier;
                        this._autoRotate = d ? d instanceof Array ? d : [["x", "y", "rotation", d === !0 ? 0 : Number(d) || 0]] : null;
                        for (n in c) this._props.push(n);
                        for (s = this._props.length; --s > -1;) n = this._props[s], this._overwriteProps.push(n), r = this._func[n] = "function" == typeof t[n], h[n] = r ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), a || h[n] !== l[0][n] && (a = h);
                        if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? u(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : p(l, e.type, h), this._segCount = this._beziers[n].length, this._timeRes) {
                            var m = f(this._beziers, this._timeRes);
                            this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                        }
                        if (d = this._autoRotate) for (this._initialRotations = [], d[0] instanceof Array || (this._autoRotate = d = [d]), s = d.length; --s > -1;) {
                            for (o = 0; o < 3; o++) n = d[s][o], this._func[n] = "function" == typeof t[n] && t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)];
                            n = d[s][2], this._initialRotations[s] = (this._func[n] ? this._func[n].call(this._target) : this._target[n]) || 0, this._overwriteProps.push(n)
                        }
                        return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                    },
                    set: function (e) {
                        var i, n, r, s, o, a, l, h, c, u, p = this._segCount, d = this._func, f = this._target,
                            m = e !== this._startRatio;
                        if (this._timeRes) {
                            if (c = this._lengths, u = this._curSeg, e *= this._length, r = this._li, e > this._l2 && r < p - 1) {
                                for (h = p - 1; r < h && (this._l2 = c[++r]) <= e;) ;
                                this._l1 = c[r - 1], this._li = r, this._curSeg = u = this._segments[r], this._s2 = u[this._s1 = this._si = 0]
                            } else if (e < this._l1 && r > 0) {
                                for (; r > 0 && (this._l1 = c[--r]) >= e;) ;
                                0 === r && e < this._l1 ? this._l1 = 0 : r++, this._l2 = c[r], this._li = r, this._curSeg = u = this._segments[r], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si]
                            }
                            if (i = r, e -= this._l1, r = this._si, e > this._s2 && r < u.length - 1) {
                                for (h = u.length - 1; r < h && (this._s2 = u[++r]) <= e;) ;
                                this._s1 = u[r - 1], this._si = r
                            } else if (e < this._s1 && r > 0) {
                                for (; r > 0 && (this._s1 = u[--r]) >= e;) ;
                                0 === r && e < this._s1 ? this._s1 = 0 : r++, this._s2 = u[r], this._si = r
                            }
                            a = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                        } else i = e < 0 ? 0 : e >= 1 ? p - 1 : p * e >> 0, a = (e - i * (1 / p)) * p;
                        for (n = 1 - a, r = this._props.length; --r > -1;) s = this._props[r], o = this._beziers[s][i], l = (a * a * o.da + 3 * n * (a * o.ca + n * o.ba)) * a + o.a, this._mod[s] && (l = this._mod[s](l, f)), d[s] ? f[s](l) : f[s] = l;
                        if (this._autoRotate) {
                            var g, v, y, b, x, _, w, T = this._autoRotate;
                            for (r = T.length; --r > -1;) s = T[r][2], _ = T[r][3] || 0, w = T[r][4] === !0 ? 1 : t, o = this._beziers[T[r][0]], g = this._beziers[T[r][1]], o && g && (o = o[i], g = g[i], v = o.a + (o.b - o.a) * a, b = o.b + (o.c - o.b) * a, v += (b - v) * a, b += (o.c + (o.d - o.c) * a - b) * a, y = g.a + (g.b - g.a) * a, x = g.b + (g.c - g.b) * a, y += (x - y) * a, x += (g.c + (g.d - g.c) * a - x) * a, l = m ? Math.atan2(x - y, b - v) * w + _ : this._initialRotations[r], this._mod[s] && (l = this._mod[s](l, f)), d[s] ? f[s](l) : f[s] = l)
                        }
                    }
                }), g = m.prototype;
            m.bezierThrough = u, m.cubicToQuadratic = l, m._autoCSS = !0, m.quadraticToCubic = function (t, e, i) {
                return new o(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
            }, m._cssRegister = function () {
                var t = s.CSSPlugin;
                if (t) {
                    var e = t._internals, i = e._parseToProxy, n = e._setPluginRatio, r = e.CSSPropTween;
                    e._registerComplexSpecialProp("bezier", {
                        parser: function (t, e, s, o, a, l) {
                            e instanceof Array && (e = {values: e}), l = new m;
                            var h, c, u, p = e.values, d = p.length - 1, f = [], g = {};
                            if (d < 0) return a;
                            for (h = 0; h <= d; h++) u = i(t, p[h], o, a, l, d !== h), f[h] = u.end;
                            for (c in e) g[c] = e[c];
                            return g.values = f, a = new r(t, "bezier", 0, 0, u.pt, 2), a.data = u, a.plugin = l, a.setRatio = n, 0 === g.autoRotate && (g.autoRotate = !0), !g.autoRotate || g.autoRotate instanceof Array || (h = g.autoRotate === !0 ? 0 : Number(g.autoRotate), g.autoRotate = null != u.end.left ? [["left", "top", "rotation", h, !1]] : null != u.end.x && [["x", "y", "rotation", h, !1]]), g.autoRotate && (o._transform || o._enableTransforms(!1), u.autoRotate = o._target._gsTransform, u.proxy.rotation = u.autoRotate.rotation || 0, o._overwriteProps.push("rotation")), l._onInitTween(u.proxy, g, o._tween), a
                        }
                    })
                }
            }, g._mod = function (t) {
                for (var e, i = this._overwriteProps, n = i.length; --n > -1;) e = t[i[n]], e && "function" == typeof e && (this._mod[i[n]] = e)
            }, g._kill = function (t) {
                var e, i, n = this._props;
                for (e in this._beziers) if (e in t) for (delete this._beziers[e], delete this._func[e], i = n.length; --i > -1;) n[i] === e && n.splice(i, 1);
                if (n = this._autoRotate) for (i = n.length; --i > -1;) t[n[i][2]] && n.splice(i, 1);
                return this._super._kill.call(this, t)
            }
        }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (t, e) {
            var i, n, r, s, o = function () {
                t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = o.prototype.setRatio
            }, a = _gsScope._gsDefine.globals, l = {}, h = o.prototype = new t("css");
            h.constructor = o, o.version = "1.20.0", o.API = 2, o.defaultTransformPerspective = 0, o.defaultSkewType = "compensated", o.defaultSmoothOrigin = !0, h = "px", o.suffixMap = {
                top: h,
                right: h,
                bottom: h,
                left: h,
                width: h,
                height: h,
                fontSize: h,
                padding: h,
                margin: h,
                perspective: h,
                lineHeight: ""
            };
            var c, u, p, d, f, m, g, v, y = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                b = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                x = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, _ = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                w = /(?:\d|\-|\+|=|#|\.)*/g, T = /opacity *= *([^)]*)/i, C = /opacity:([^;]*)/i,
                S = /alpha\(opacity *=.+?\)/i, k = /^(rgb|hsl)/, E = /([A-Z])/g, A = /-([a-z])/gi,
                D = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, F = function (t, e) {
                    return e.toUpperCase()
                }, $ = /(?:Left|Right|Width)/i, P = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                O = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, N = /,(?=[^\)]*(?:\(|$))/gi, M = /[\s,\(]/i,
                R = Math.PI / 180, I = 180 / Math.PI, L = {}, B = {style: {}}, j = _gsScope.document || {
                    createElement: function () {
                        return B
                    }
                }, z = function (t, e) {
                    return j.createElementNS ? j.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : j.createElement(t)
                }, H = z("div"), q = z("img"), X = o._internals = {_specialProps: l},
                Y = (_gsScope.navigator || {}).userAgent || "", U = function () {
                    var t = Y.indexOf("Android"), e = z("a");
                    return p = Y.indexOf("Safari") !== -1 && Y.indexOf("Chrome") === -1 && (t === -1 || parseFloat(Y.substr(t + 8, 2)) > 3), f = p && parseFloat(Y.substr(Y.indexOf("Version/") + 8, 2)) < 6, d = Y.indexOf("Firefox") !== -1, (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Y)) && (m = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
                }(), W = function (t) {
                    return T.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                }, V = function (t) {
                    _gsScope.console && console.log(t)
                }, G = "", Q = "", Z = function (t, e) {
                    e = e || H;
                    var i, n, r = e.style;
                    if (void 0 !== r[t]) return t;
                    for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === r[i[n] + t];) ;
                    return n >= 0 ? (Q = 3 === n ? "ms" : i[n], G = "-" + Q.toLowerCase() + "-", Q + t) : null
                }, J = j.defaultView ? j.defaultView.getComputedStyle : function () {
                }, K = o.getStyle = function (t, e, i, n, r) {
                    var s;
                    return U || "opacity" !== e ? (!n && t.style[e] ? s = t.style[e] : (i = i || J(t)) ? s = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(E, "-$1").toLowerCase()) : t.currentStyle && (s = t.currentStyle[e]), null == r || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : r) : W(t)
                }, tt = X.convertToPixels = function (t, i, n, r, s) {
                    if ("px" === r || !r && "lineHeight" !== i) return n;
                    if ("auto" === r || !n) return 0;
                    var a, l, h, c = $.test(i), u = t, p = H.style, d = n < 0, f = 1 === n;
                    if (d && (n = -n), f && (n *= 100), "lineHeight" !== i || r) if ("%" === r && i.indexOf("border") !== -1) a = n / 100 * (c ? t.clientWidth : t.clientHeight); else {
                        if (p.cssText = "border:0 solid red;position:" + K(t, "position") + ";line-height:0;", "%" !== r && u.appendChild && "v" !== r.charAt(0) && "rem" !== r) p[c ? "borderLeftWidth" : "borderTopWidth"] = n + r; else {
                            if (u = t.parentNode || j.body, K(u, "display").indexOf("flex") !== -1 && (p.position = "absolute"), l = u._gsCache, h = e.ticker.frame, l && c && l.time === h) return l.width * n / 100;
                            p[c ? "width" : "height"] = n + r
                        }
                        u.appendChild(H), a = parseFloat(H[c ? "offsetWidth" : "offsetHeight"]), u.removeChild(H), c && "%" === r && o.cacheWidths !== !1 && (l = u._gsCache = u._gsCache || {}, l.time = h, l.width = a / n * 100), 0 !== a || s || (a = tt(t, i, n, r, !0))
                    } else l = J(t).lineHeight, t.style.lineHeight = n, a = parseFloat(J(t).lineHeight), t.style.lineHeight = l;
                    return f && (a /= 100), d ? -a : a
                }, et = X.calculateOffset = function (t, e, i) {
                    if ("absolute" !== K(t, "position", i)) return 0;
                    var n = "left" === e ? "Left" : "Top", r = K(t, "margin" + n, i);
                    return t["offset" + n] - (tt(t, e, parseFloat(r), r.replace(w, "")) || 0)
                }, it = function (t, e) {
                    var i, n, r, s = {};
                    if (e = e || J(t, null)) if (i = e.length) for (; --i > -1;) r = e[i], r.indexOf("-transform") !== -1 && Dt !== r || (s[r.replace(A, F)] = e.getPropertyValue(r)); else for (i in e) i.indexOf("Transform") !== -1 && At !== i || (s[i] = e[i]); else if (e = t.currentStyle || t.style) for (i in e) "string" == typeof i && void 0 === s[i] && (s[i.replace(A, F)] = e[i]);
                    return U || (s.opacity = W(t)), n = qt(t, e, !1), s.rotation = n.rotation, s.skewX = n.skewX, s.scaleX = n.scaleX, s.scaleY = n.scaleY, s.x = n.x, s.y = n.y, $t && (s.z = n.z, s.rotationX = n.rotationX, s.rotationY = n.rotationY, s.scaleZ = n.scaleZ), s.filters && delete s.filters, s
                }, nt = function (t, e, i, n, r) {
                    var s, o, a, l = {}, h = t.style;
                    for (o in i) "cssText" !== o && "length" !== o && isNaN(o) && (e[o] !== (s = i[o]) || r && r[o]) && o.indexOf("Origin") === -1 && ("number" != typeof s && "string" != typeof s || (l[o] = "auto" !== s || "left" !== o && "top" !== o ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof e[o] || "" === e[o].replace(_, "") ? s : 0 : et(t, o), void 0 !== h[o] && (a = new yt(h, o, h[o], a))));
                    if (n) for (o in n) "className" !== o && (l[o] = n[o]);
                    return {difs: l, firstMPT: a}
                }, rt = {width: ["Left", "Right"], height: ["Top", "Bottom"]},
                st = ["marginLeft", "marginRight", "marginTop", "marginBottom"], ot = function (t, e, i) {
                    if ("svg" === (t.nodeName + "").toLowerCase()) return (i || J(t))[e] || 0;
                    if (t.getCTM && jt(t)) return t.getBBox()[e] || 0;
                    var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight), r = rt[e], s = r.length;
                    for (i = i || J(t, null); --s > -1;) n -= parseFloat(K(t, "padding" + r[s], i, !0)) || 0, n -= parseFloat(K(t, "border" + r[s] + "Width", i, !0)) || 0;
                    return n
                }, at = function (t, e) {
                    if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                    null != t && "" !== t || (t = "0 0");
                    var i, n = t.split(" "),
                        r = t.indexOf("left") !== -1 ? "0%" : t.indexOf("right") !== -1 ? "100%" : n[0],
                        s = t.indexOf("top") !== -1 ? "0%" : t.indexOf("bottom") !== -1 ? "100%" : n[1];
                    if (n.length > 3 && !e) {
                        for (n = t.split(", ").join(",").split(","), t = [], i = 0; i < n.length; i++) t.push(at(n[i]));
                        return t.join(",")
                    }
                    return null == s ? s = "center" === r ? "50%" : "0" : "center" === s && (s = "50%"), ("center" === r || isNaN(parseFloat(r)) && (r + "").indexOf("=") === -1) && (r = "50%"), t = r + " " + s + (n.length > 2 ? " " + n[2] : ""), e && (e.oxp = r.indexOf("%") !== -1, e.oyp = s.indexOf("%") !== -1, e.oxr = "=" === r.charAt(1), e.oyr = "=" === s.charAt(1), e.ox = parseFloat(r.replace(_, "")), e.oy = parseFloat(s.replace(_, "")), e.v = t), e || t
                }, lt = function (t, e) {
                    return "function" == typeof t && (t = t(v, g)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
                }, ht = function (t, e) {
                    return "function" == typeof t && (t = t(v, g)), null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
                }, ct = function (t, e, i, n) {
                    var r, s, o, a, l, h = 1e-6;
                    return "function" == typeof t && (t = t(v, g)), null == t ? a = e : "number" == typeof t ? a = t : (r = 360, s = t.split("_"), l = "=" === t.charAt(1), o = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(s[0].substr(2)) : parseFloat(s[0])) * (t.indexOf("rad") === -1 ? 1 : I) - (l ? 0 : e), s.length && (n && (n[i] = e + o), t.indexOf("short") !== -1 && (o %= r, o !== o % (r / 2) && (o = o < 0 ? o + r : o - r)), t.indexOf("_cw") !== -1 && o < 0 ? o = (o + 9999999999 * r) % r - (o / r | 0) * r : t.indexOf("ccw") !== -1 && o > 0 && (o = (o - 9999999999 * r) % r - (o / r | 0) * r)), a = e + o), a < h && a > -h && (a = 0), a
                }, ut = {
                    aqua: [0, 255, 255],
                    lime: [0, 255, 0],
                    silver: [192, 192, 192],
                    black: [0, 0, 0],
                    maroon: [128, 0, 0],
                    teal: [0, 128, 128],
                    blue: [0, 0, 255],
                    navy: [0, 0, 128],
                    white: [255, 255, 255],
                    fuchsia: [255, 0, 255],
                    olive: [128, 128, 0],
                    yellow: [255, 255, 0],
                    orange: [255, 165, 0],
                    gray: [128, 128, 128],
                    purple: [128, 0, 128],
                    green: [0, 128, 0],
                    red: [255, 0, 0],
                    pink: [255, 192, 203],
                    cyan: [0, 255, 255],
                    transparent: [255, 255, 255, 0]
                }, pt = function (t, e, i) {
                    return t = t < 0 ? t + 1 : t > 1 ? t - 1 : t, 255 * (6 * t < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
                }, dt = o.parseColor = function (t, e) {
                    var i, n, r, s, o, a, l, h, c, u, p;
                    if (t) if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t]; else {
                        if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ut[t]) i = ut[t]; else if ("#" === t.charAt(0)) 4 === t.length && (n = t.charAt(1), r = t.charAt(2), s = t.charAt(3), t = "#" + n + n + r + r + s + s), t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & 255, 255 & t]; else if ("hsl" === t.substr(0, 3)) if (i = p = t.match(y), e) {
                            if (t.indexOf("=") !== -1) return t.match(b)
                        } else o = Number(i[0]) % 360 / 360, a = Number(i[1]) / 100, l = Number(i[2]) / 100, r = l <= .5 ? l * (a + 1) : l + a - l * a, n = 2 * l - r, i.length > 3 && (i[3] = Number(t[3])), i[0] = pt(o + 1 / 3, n, r), i[1] = pt(o, n, r), i[2] = pt(o - 1 / 3, n, r); else i = t.match(y) || ut.transparent;
                        i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                    } else i = ut.black;
                    return e && !p && (n = i[0] / 255, r = i[1] / 255, s = i[2] / 255, h = Math.max(n, r, s), c = Math.min(n, r, s), l = (h + c) / 2, h === c ? o = a = 0 : (u = h - c, a = l > .5 ? u / (2 - h - c) : u / (h + c), o = h === n ? (r - s) / u + (r < s ? 6 : 0) : h === r ? (s - n) / u + 2 : (n - r) / u + 4, o *= 60), i[0] = o + .5 | 0, i[1] = 100 * a + .5 | 0, i[2] = 100 * l + .5 | 0), i
                }, ft = function (t, e) {
                    var i, n, r, s = t.match(mt) || [], o = 0, a = "";
                    if (!s.length) return t;
                    for (i = 0; i < s.length; i++) n = s[i], r = t.substr(o, t.indexOf(n, o) - o), o += r.length + n.length, n = dt(n, e), 3 === n.length && n.push(1), a += r + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
                    return a + t.substr(o)
                }, mt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
            for (h in ut) mt += "|" + h + "\\b";
            mt = new RegExp(mt + ")", "gi"), o.colorStringFilter = function (t) {
                var e, i = t[0] + " " + t[1];
                mt.test(i) && (e = i.indexOf("hsl(") !== -1 || i.indexOf("hsla(") !== -1, t[0] = ft(t[0], e), t[1] = ft(t[1], e)), mt.lastIndex = 0
            }, e.defaultStringFilter || (e.defaultStringFilter = o.colorStringFilter);
            var gt = function (t, e, i, n) {
                if (null == t) return function (t) {
                    return t
                };
                var r, s = e ? (t.match(mt) || [""])[0] : "", o = t.split(s).join("").match(x) || [],
                    a = t.substr(0, t.indexOf(o[0])), l = ")" === t.charAt(t.length - 1) ? ")" : "",
                    h = t.indexOf(" ") !== -1 ? " " : ",", c = o.length, u = c > 0 ? o[0].replace(y, "") : "";
                return c ? r = e ? function (t) {
                    var e, p, d, f;
                    if ("number" == typeof t) t += u; else if (n && N.test(t)) {
                        for (f = t.replace(N, "|").split("|"), d = 0; d < f.length; d++) f[d] = r(f[d]);
                        return f.join(",")
                    }
                    if (e = (t.match(mt) || [s])[0], p = t.split(e).join("").match(x) || [], d = p.length, c > d--) for (; ++d < c;) p[d] = i ? p[(d - 1) / 2 | 0] : o[d];
                    return a + p.join(h) + h + e + l + (t.indexOf("inset") !== -1 ? " inset" : "")
                } : function (t) {
                    var e, s, p;
                    if ("number" == typeof t) t += u; else if (n && N.test(t)) {
                        for (s = t.replace(N, "|").split("|"), p = 0; p < s.length; p++) s[p] = r(s[p]);
                        return s.join(",")
                    }
                    if (e = t.match(x) || [], p = e.length, c > p--) for (; ++p < c;) e[p] = i ? e[(p - 1) / 2 | 0] : o[p];
                    return a + e.join(h) + l
                } : function (t) {
                    return t
                }
            }, vt = function (t) {
                return t = t.split(","), function (e, i, n, r, s, o, a) {
                    var l, h = (i + "").split(" ");
                    for (a = {}, l = 0; l < 4; l++) a[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
                    return r.parse(e, a, s, o)
                }
            }, yt = (X._setPluginRatio = function (t) {
                this.plugin.setRatio(t);
                for (var e, i, n, r, s, o = this.data, a = o.proxy, l = o.firstMPT, h = 1e-6; l;) e = a[l.v], l.r ? e = Math.round(e) : e < h && e > -h && (e = 0), l.t[l.p] = e, l = l._next;
                if (o.autoRotate && (o.autoRotate.rotation = o.mod ? o.mod(a.rotation, this.t) : a.rotation), 1 === t || 0 === t) for (l = o.firstMPT, s = 1 === t ? "e" : "b"; l;) {
                    if (i = l.t, i.type) {
                        if (1 === i.type) {
                            for (r = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++) r += i["xn" + n] + i["xs" + (n + 1)];
                            i[s] = r
                        }
                    } else i[s] = i.s + i.xs0;
                    l = l._next
                }
            }, function (t, e, i, n, r) {
                this.t = t, this.p = e, this.v = i, this.r = r, n && (n._prev = this, this._next = n)
            }), bt = (X._parseToProxy = function (t, e, i, n, r, s) {
                var o, a, l, h, c, u = n, p = {}, d = {}, f = i._transform, m = L;
                for (i._transform = null, L = e, n = c = i.parse(t, e, n, r), L = m, s && (i._transform = f, u && (u._prev = null, u._prev && (u._prev._next = null))); n && n !== u;) {
                    if (n.type <= 1 && (a = n.p, d[a] = n.s + n.c, p[a] = n.s, s || (h = new yt(n, "s", a, h, n.r), n.c = 0), 1 === n.type)) for (o = n.l; --o > 0;) l = "xn" + o, a = n.p + "_" + l, d[a] = n.data[l], p[a] = n[l], s || (h = new yt(n, l, a, h, n.rxp[l]));
                    n = n._next
                }
                return {proxy: p, end: d, firstMPT: h, pt: c}
            }, X.CSSPropTween = function (t, e, n, r, o, a, l, h, c, u, p) {
                this.t = t, this.p = e, this.s = n, this.c = r, this.n = l || e, t instanceof bt || s.push(this.n), this.r = h, this.type = a || 0, c && (this.pr = c, i = !0), this.b = void 0 === u ? n : u, this.e = void 0 === p ? n + r : p, o && (this._next = o, o._prev = this)
            }), xt = function (t, e, i, n, r, s) {
                var o = new bt(t, e, i, n - i, r, (-1), s);
                return o.b = i, o.e = o.xs0 = n, o
            }, _t = o.parseComplex = function (t, e, i, n, r, s, a, l, h, u) {
                i = i || s || "", "function" == typeof n && (n = n(v, g)), a = new bt(t, e, 0, 0, a, u ? 2 : 1, null, (!1), l, i, n), n += "", r && mt.test(n + i) && (n = [i, n], o.colorStringFilter(n), i = n[0], n = n[1]);
                var p, d, f, m, x, _, w, T, C, S, k, E, A, D = i.split(", ").join(",").split(" "),
                    F = n.split(", ").join(",").split(" "), $ = D.length, P = c !== !1;
                for (n.indexOf(",") === -1 && i.indexOf(",") === -1 || (D = D.join(" ").replace(N, ", ").split(" "), F = F.join(" ").replace(N, ", ").split(" "), $ = D.length), $ !== F.length && (D = (s || "").split(" "), $ = D.length), a.plugin = h, a.setRatio = u, mt.lastIndex = 0, p = 0; p < $; p++) if (m = D[p], x = F[p], T = parseFloat(m), T || 0 === T) a.appendXtra("", T, lt(x, T), x.replace(b, ""), P && x.indexOf("px") !== -1, !0); else if (r && mt.test(m)) E = x.indexOf(")") + 1, E = ")" + (E ? x.substr(E) : ""), A = x.indexOf("hsl") !== -1 && U, S = x, m = dt(m, A), x = dt(x, A), C = m.length + x.length > 6, C && !U && 0 === x[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(F[p]).join("transparent")) : (U || (C = !1), A ? a.appendXtra(S.substr(0, S.indexOf("hsl")) + (C ? "hsla(" : "hsl("), m[0], lt(x[0], m[0]), ",", !1, !0).appendXtra("", m[1], lt(x[1], m[1]), "%,", !1).appendXtra("", m[2], lt(x[2], m[2]), C ? "%," : "%" + E, !1) : a.appendXtra(S.substr(0, S.indexOf("rgb")) + (C ? "rgba(" : "rgb("), m[0], x[0] - m[0], ",", !0, !0).appendXtra("", m[1], x[1] - m[1], ",", !0).appendXtra("", m[2], x[2] - m[2], C ? "," : E, !0), C && (m = m.length < 4 ? 1 : m[3], a.appendXtra("", m, (x.length < 4 ? 1 : x[3]) - m, E, !1))), mt.lastIndex = 0; else if (_ = m.match(y)) {
                    if (w = x.match(b), !w || w.length !== _.length) return a;
                    for (f = 0, d = 0; d < _.length; d++) k = _[d], S = m.indexOf(k, f), a.appendXtra(m.substr(f, S - f), Number(k), lt(w[d], k), "", P && "px" === m.substr(S + k.length, 2), 0 === d), f = S + k.length;
                    a["xs" + a.l] += m.substr(f)
                } else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + x : x;
                if (n.indexOf("=") !== -1 && a.data) {
                    for (E = a.xs0 + a.data.s, p = 1; p < a.l; p++) E += a["xs" + p] + a.data["xn" + p];
                    a.e = E + a["xs" + p]
                }
                return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
            }, wt = 9;
            for (h = bt.prototype, h.l = h.pr = 0; --wt > 0;) h["xn" + wt] = 0, h["xs" + wt] = "";
            h.xs0 = "", h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null, h.appendXtra = function (t, e, i, n, r, s) {
                var o = this, a = o.l;
                return o["xs" + a] += s && (a || o["xs" + a]) ? " " + t : t || "", i || 0 === a || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = n || "", a > 0 ? (o.data["xn" + a] = e + i, o.rxp["xn" + a] = r, o["xn" + a] = e, o.plugin || (o.xfirst = new bt(o, "xn" + a, e, i, o.xfirst || o, 0, o.n, r, o.pr), o.xfirst.xs0 = 0), o) : (o.data = {s: e + i}, o.rxp = {}, o.s = e, o.c = i, o.r = r, o)) : (o["xs" + a] += e + (n || ""), o)
            };
            var Tt = function (t, e) {
                e = e || {}, this.p = e.prefix ? Z(t) || t : t, l[t] = l[this.p] = this, this.format = e.formatter || gt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
            }, Ct = X._registerComplexSpecialProp = function (t, e, i) {
                "object" != typeof e && (e = {parser: i});
                var n, r, s = t.split(","), o = e.defaultValue;
                for (i = i || [o], n = 0; n < s.length; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || o, r = new Tt(s[n], e)
            }, St = X._registerPluginProp = function (t) {
                if (!l[t]) {
                    var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                    Ct(t, {
                        parser: function (t, i, n, r, s, o, h) {
                            var c = a.com.greensock.plugins[e];
                            return c ? (c._cssRegister(), l[n].parse(t, i, n, r, s, o, h)) : (V("Error: " + e + " js file not loaded."), s)
                        }
                    })
                }
            };
            h = Tt.prototype, h.parseComplex = function (t, e, i, n, r, s) {
                var o, a, l, h, c, u, p = this.keyword;
                if (this.multi && (N.test(i) || N.test(e) ? (a = e.replace(N, "|").split("|"), l = i.replace(N, "|").split("|")) : p && (a = [e], l = [i])), l) {
                    for (h = l.length > a.length ? l.length : a.length, o = 0; o < h; o++) e = a[o] = a[o] || this.dflt, i = l[o] = l[o] || this.dflt, p && (c = e.indexOf(p), u = i.indexOf(p), c !== u && (u === -1 ? a[o] = a[o].split(p).join("") : c === -1 && (a[o] += " " + p)));
                    e = a.join(", "), i = l.join(", ")
                }
                return _t(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, s)
            }, h.parse = function (t, e, i, n, s, o, a) {
                return this.parseComplex(t.style, this.format(K(t, this.p, r, !1, this.dflt)), this.format(e), s, o)
            }, o.registerSpecialProp = function (t, e, i) {
                Ct(t, {
                    parser: function (t, n, r, s, o, a, l) {
                        var h = new bt(t, r, 0, 0, o, 2, r, (!1), i);
                        return h.plugin = a, h.setRatio = e(t, n, s._tween, r), h
                    }, priority: i
                })
            }, o.useSVGTransformAttr = !0;
            var kt,
                Et = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                At = Z("transform"), Dt = G + "transform", Ft = Z("transformOrigin"), $t = null !== Z("perspective"),
                Pt = X.Transform = function () {
                    this.perspective = parseFloat(o.defaultTransformPerspective) || 0, this.force3D = !(o.defaultForce3D === !1 || !$t) && (o.defaultForce3D || "auto")
                }, Ot = _gsScope.SVGElement, Nt = function (t, e, i) {
                    var n, r = j.createElementNS("http://www.w3.org/2000/svg", t), s = /([a-z])([A-Z])/g;
                    for (n in i) r.setAttributeNS(null, n.replace(s, "$1-$2").toLowerCase(), i[n]);
                    return e.appendChild(r), r
                }, Mt = j.documentElement || {}, Rt = function () {
                    var t, e, i, n = m || /Android/i.test(Y) && !_gsScope.chrome;
                    return j.createElementNS && !n && (t = Nt("svg", Mt), e = Nt("rect", t, {
                        width: 100,
                        height: 50,
                        x: 100
                    }), i = e.getBoundingClientRect().width, e.style[Ft] = "50% 50%", e.style[At] = "scaleX(0.5)", n = i === e.getBoundingClientRect().width && !(d && $t), Mt.removeChild(t)), n
                }(), It = function (t, e, i, n, r, s) {
                    var a, l, h, c, u, p, d, f, m, g, v, y, b, x, _ = t._gsTransform, w = Ht(t, !0);
                    _ && (b = _.xOrigin, x = _.yOrigin), (!n || (a = n.split(" ")).length < 2) && (d = t.getBBox(), 0 === d.x && 0 === d.y && d.width + d.height === 0 && (d = {
                        x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
                        y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
                        width: 0,
                        height: 0
                    }), e = at(e).split(" "), a = [(e[0].indexOf("%") !== -1 ? parseFloat(e[0]) / 100 * d.width : parseFloat(e[0])) + d.x, (e[1].indexOf("%") !== -1 ? parseFloat(e[1]) / 100 * d.height : parseFloat(e[1])) + d.y]), i.xOrigin = c = parseFloat(a[0]), i.yOrigin = u = parseFloat(a[1]), n && w !== zt && (p = w[0], d = w[1], f = w[2], m = w[3], g = w[4], v = w[5], y = p * m - d * f, y && (l = c * (m / y) + u * (-f / y) + (f * v - m * g) / y, h = c * (-d / y) + u * (p / y) - (p * v - d * g) / y, c = i.xOrigin = a[0] = l, u = i.yOrigin = a[1] = h)), _ && (s && (i.xOffset = _.xOffset, i.yOffset = _.yOffset, _ = i), r || r !== !1 && o.defaultSmoothOrigin !== !1 ? (l = c - b, h = u - x, _.xOffset += l * w[0] + h * w[2] - l, _.yOffset += l * w[1] + h * w[3] - h) : _.xOffset = _.yOffset = 0), s || t.setAttribute("data-svg-origin", a.join(" "))
                }, Lt = function (t) {
                    var e, i = z("svg", this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                        n = this.parentNode, r = this.nextSibling, s = this.style.cssText;
                    if (Mt.appendChild(i), i.appendChild(this), this.style.display = "block", t) try {
                        e = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Lt
                    } catch (o) {
                    } else this._originalGetBBox && (e = this._originalGetBBox());
                    return r ? n.insertBefore(this, r) : n.appendChild(this), Mt.removeChild(i), this.style.cssText = s, e
                }, Bt = function (t) {
                    try {
                        return t.getBBox()
                    } catch (e) {
                        return Lt.call(t, !0)
                    }
                }, jt = function (t) {
                    return !(!(Ot && t.getCTM && Bt(t)) || t.parentNode && !t.ownerSVGElement)
                }, zt = [1, 0, 0, 1, 0, 0], Ht = function (t, e) {
                    var i, n, r, s, o, a, l = t._gsTransform || new Pt, h = 1e5, c = t.style;
                    if (At ? n = K(t, Dt, null, !0) : t.currentStyle && (n = t.currentStyle.filter.match(P), n = n && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, !At || !(a = "none" === J(t).display) && t.parentNode || (a && (s = c.display, c.display = "block"), t.parentNode || (o = 1, Mt.appendChild(t)), n = K(t, Dt, null, !0), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, s ? c.display = s : a && Wt(c, "display"), o && Mt.removeChild(t)), (l.svg || t.getCTM && jt(t)) && (i && (c[At] + "").indexOf("matrix") !== -1 && (n = c[At], i = 0), r = t.getAttribute("transform"), i && r && (r.indexOf("matrix") !== -1 ? (n = r, i = 0) : r.indexOf("translate") !== -1 && (n = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return zt;
                    for (r = (n || "").match(y) || [], wt = r.length; --wt > -1;) s = Number(r[wt]), r[wt] = (o = s - (s |= 0)) ? (o * h + (o < 0 ? -.5 : .5) | 0) / h + s : s;
                    return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
                }, qt = X.getTransform = function (t, i, n, r) {
                    if (t._gsTransform && n && !r) return t._gsTransform;
                    var s, a, l, h, c, u, p = n ? t._gsTransform || new Pt : new Pt, d = p.scaleX < 0, f = 2e-5, m = 1e5,
                        g = $t ? parseFloat(K(t, Ft, i, !1, "0 0 0").split(" ")[2]) || p.zOrigin || 0 : 0,
                        v = parseFloat(o.defaultTransformPerspective) || 0;
                    if (p.svg = !(!t.getCTM || !jt(t)), p.svg && (It(t, K(t, Ft, i, !1, "50% 50%") + "", p, t.getAttribute("data-svg-origin")), kt = o.useSVGTransformAttr || Rt), s = Ht(t), s !== zt) {
                        if (16 === s.length) {
                            var y, b, x, _, w, T = s[0], C = s[1], S = s[2], k = s[3], E = s[4], A = s[5], D = s[6],
                                F = s[7], $ = s[8], P = s[9], O = s[10], N = s[12], M = s[13], R = s[14], L = s[11],
                                B = Math.atan2(D, O);
                            p.zOrigin && (R = -p.zOrigin, N = $ * R - s[12], M = P * R - s[13], R = O * R + p.zOrigin - s[14]), p.rotationX = B * I, B && (_ = Math.cos(-B), w = Math.sin(-B), y = E * _ + $ * w, b = A * _ + P * w, x = D * _ + O * w, $ = E * -w + $ * _, P = A * -w + P * _, O = D * -w + O * _, L = F * -w + L * _, E = y, A = b, D = x), B = Math.atan2(-S, O), p.rotationY = B * I, B && (_ = Math.cos(-B), w = Math.sin(-B), y = T * _ - $ * w, b = C * _ - P * w, x = S * _ - O * w, P = C * w + P * _, O = S * w + O * _, L = k * w + L * _, T = y, C = b, S = x), B = Math.atan2(C, T), p.rotation = B * I, B && (_ = Math.cos(B), w = Math.sin(B), y = T * _ + C * w, b = E * _ + A * w, x = $ * _ + P * w, C = C * _ - T * w, A = A * _ - E * w, P = P * _ - $ * w, T = y, E = b, $ = x), p.rotationX && Math.abs(p.rotationX) + Math.abs(p.rotation) > 359.9 && (p.rotationX = p.rotation = 0, p.rotationY = 180 - p.rotationY), B = Math.atan2(E, A), p.scaleX = (Math.sqrt(T * T + C * C + S * S) * m + .5 | 0) / m, p.scaleY = (Math.sqrt(A * A + D * D) * m + .5 | 0) / m, p.scaleZ = (Math.sqrt($ * $ + P * P + O * O) * m + .5 | 0) / m, T /= p.scaleX, E /= p.scaleY, C /= p.scaleX, A /= p.scaleY, Math.abs(B) > f ? (p.skewX = B * I, E = 0, "simple" !== p.skewType && (p.scaleY *= 1 / Math.cos(B))) : p.skewX = 0, p.perspective = L ? 1 / (L < 0 ? -L : L) : 0, p.x = N, p.y = M, p.z = R, p.svg && (p.x -= p.xOrigin - (p.xOrigin * T - p.yOrigin * E), p.y -= p.yOrigin - (p.yOrigin * C - p.xOrigin * A))
                        } else if (!$t || r || !s.length || p.x !== s[4] || p.y !== s[5] || !p.rotationX && !p.rotationY) {
                            var j = s.length >= 6, z = j ? s[0] : 1, H = s[1] || 0, q = s[2] || 0, X = j ? s[3] : 1;
                            p.x = s[4] || 0, p.y = s[5] || 0, l = Math.sqrt(z * z + H * H), h = Math.sqrt(X * X + q * q), c = z || H ? Math.atan2(H, z) * I : p.rotation || 0, u = q || X ? Math.atan2(q, X) * I + c : p.skewX || 0, p.scaleX = l, p.scaleY = h, p.rotation = c, p.skewX = u, $t && (p.rotationX = p.rotationY = p.z = 0, p.perspective = v, p.scaleZ = 1), p.svg && (p.x -= p.xOrigin - (p.xOrigin * z + p.yOrigin * q), p.y -= p.yOrigin - (p.xOrigin * H + p.yOrigin * X))
                        }
                        Math.abs(p.skewX) > 90 && Math.abs(p.skewX) < 270 && (d ? (p.scaleX *= -1, p.skewX += p.rotation <= 0 ? 180 : -180, p.rotation += p.rotation <= 0 ? 180 : -180) : (p.scaleY *= -1, p.skewX += p.skewX <= 0 ? 180 : -180)), p.zOrigin = g;
                        for (a in p) p[a] < f && p[a] > -f && (p[a] = 0)
                    }
                    return n && (t._gsTransform = p, p.svg && (kt && t.style[At] ? e.delayedCall(.001, function () {
                        Wt(t.style, At)
                    }) : !kt && t.getAttribute("transform") && e.delayedCall(.001, function () {
                        t.removeAttribute("transform")
                    }))), p
                }, Xt = function (t) {
                    var e, i, n = this.data, r = -n.rotation * R, s = r + n.skewX * R, o = 1e5,
                        a = (Math.cos(r) * n.scaleX * o | 0) / o, l = (Math.sin(r) * n.scaleX * o | 0) / o,
                        h = (Math.sin(s) * -n.scaleY * o | 0) / o, c = (Math.cos(s) * n.scaleY * o | 0) / o,
                        u = this.t.style, p = this.t.currentStyle;
                    if (p) {
                        i = l, l = -h, h = -i, e = p.filter, u.filter = "";
                        var d, f, g = this.t.offsetWidth, v = this.t.offsetHeight, y = "absolute" !== p.position,
                            b = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + h + ", M22=" + c,
                            x = n.x + g * n.xPercent / 100, _ = n.y + v * n.yPercent / 100;
                        if (null != n.ox && (d = (n.oxp ? g * n.ox * .01 : n.ox) - g / 2, f = (n.oyp ? v * n.oy * .01 : n.oy) - v / 2, x += d - (d * a + f * l), _ += f - (d * h + f * c)), y ? (d = g / 2, f = v / 2, b += ", Dx=" + (d - (d * a + f * l) + x) + ", Dy=" + (f - (d * h + f * c) + _) + ")") : b += ", sizingMethod='auto expand')", e.indexOf("DXImageTransform.Microsoft.Matrix(") !== -1 ? u.filter = e.replace(O, b) : u.filter = b + " " + e, 0 !== t && 1 !== t || 1 === a && 0 === l && 0 === h && 1 === c && (y && b.indexOf("Dx=0, Dy=0") === -1 || T.test(e) && 100 !== parseFloat(RegExp.$1) || e.indexOf(e.indexOf("Alpha")) === -1 && u.removeAttribute("filter")), !y) {
                            var C, S, k, E = m < 8 ? 1 : -1;
                            for (d = n.ieOffsetX || 0, f = n.ieOffsetY || 0, n.ieOffsetX = Math.round((g - ((a < 0 ? -a : a) * g + (l < 0 ? -l : l) * v)) / 2 + x), n.ieOffsetY = Math.round((v - ((c < 0 ? -c : c) * v + (h < 0 ? -h : h) * g)) / 2 + _), wt = 0; wt < 4; wt++) S = st[wt], C = p[S], i = C.indexOf("px") !== -1 ? parseFloat(C) : tt(this.t, S, parseFloat(C), C.replace(w, "")) || 0, k = i !== n[S] ? wt < 2 ? -n.ieOffsetX : -n.ieOffsetY : wt < 2 ? d - n.ieOffsetX : f - n.ieOffsetY, u[S] = (n[S] = Math.round(i - k * (0 === wt || 2 === wt ? 1 : E))) + "px"
                        }
                    }
                }, Yt = X.set3DTransformRatio = X.setTransformRatio = function (t) {
                    var e, i, n, r, s, o, a, l, h, c, u, p, f, m, g, v, y, b, x, _, w, T, C, S = this.data,
                        k = this.t.style, E = S.rotation, A = S.rotationX, D = S.rotationY, F = S.scaleX, $ = S.scaleY,
                        P = S.scaleZ, O = S.x, N = S.y, M = S.z, I = S.svg, L = S.perspective, B = S.force3D, j = S.skewY,
                        z = S.skewX;
                    if (j && (z += j, E += j), ((1 === t || 0 === t) && "auto" === B && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !B) && !M && !L && !D && !A && 1 === P || kt && I || !$t) return void(E || z || I ? (E *= R, T = z * R, C = 1e5, i = Math.cos(E) * F, s = Math.sin(E) * F, n = Math.sin(E - T) * -$, o = Math.cos(E - T) * $, T && "simple" === S.skewType && (e = Math.tan(T - j * R), e = Math.sqrt(1 + e * e), n *= e, o *= e, j && (e = Math.tan(j * R), e = Math.sqrt(1 + e * e), i *= e, s *= e)), I && (O += S.xOrigin - (S.xOrigin * i + S.yOrigin * n) + S.xOffset, N += S.yOrigin - (S.xOrigin * s + S.yOrigin * o) + S.yOffset, kt && (S.xPercent || S.yPercent) && (g = this.t.getBBox(), O += .01 * S.xPercent * g.width, N += .01 * S.yPercent * g.height), g = 1e-6, O < g && O > -g && (O = 0), N < g && N > -g && (N = 0)), x = (i * C | 0) / C + "," + (s * C | 0) / C + "," + (n * C | 0) / C + "," + (o * C | 0) / C + "," + O + "," + N + ")", I && kt ? this.t.setAttribute("transform", "matrix(" + x) : k[At] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + x) : k[At] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + F + ",0,0," + $ + "," + O + "," + N + ")");
                    if (d && (g = 1e-4, F < g && F > -g && (F = P = 2e-5), $ < g && $ > -g && ($ = P = 2e-5), !L || S.z || S.rotationX || S.rotationY || (L = 0)), E || z) E *= R, v = i = Math.cos(E), y = s = Math.sin(E), z && (E -= z * R, v = Math.cos(E), y = Math.sin(E), "simple" === S.skewType && (e = Math.tan((z - j) * R), e = Math.sqrt(1 + e * e), v *= e, y *= e, S.skewY && (e = Math.tan(j * R), e = Math.sqrt(1 + e * e), i *= e, s *= e))), n = -y, o = v; else {
                        if (!(D || A || 1 !== P || L || I)) return void(k[At] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) translate3d(" : "translate3d(") + O + "px," + N + "px," + M + "px)" + (1 !== F || 1 !== $ ? " scale(" + F + "," + $ + ")" : ""));
                        i = o = 1, n = s = 0
                    }
                    c = 1, r = a = l = h = u = p = 0, f = L ? -1 / L : 0, m = S.zOrigin, g = 1e-6, _ = ",", w = "0", E = D * R, E && (v = Math.cos(E), y = Math.sin(E), l = -y, u = f * -y, r = i * y, a = s * y, c = v, f *= v, i *= v, s *= v), E = A * R, E && (v = Math.cos(E), y = Math.sin(E), e = n * v + r * y, b = o * v + a * y, h = c * y, p = f * y, r = n * -y + r * v, a = o * -y + a * v, c *= v, f *= v, n = e, o = b), 1 !== P && (r *= P, a *= P, c *= P, f *= P), 1 !== $ && (n *= $, o *= $, h *= $, p *= $), 1 !== F && (i *= F, s *= F, l *= F, u *= F), (m || I) && (m && (O += r * -m, N += a * -m, M += c * -m + m), I && (O += S.xOrigin - (S.xOrigin * i + S.yOrigin * n) + S.xOffset, N += S.yOrigin - (S.xOrigin * s + S.yOrigin * o) + S.yOffset), O < g && O > -g && (O = w), N < g && N > -g && (N = w), M < g && M > -g && (M = 0)), x = S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix3d(" : "matrix3d(", x += (i < g && i > -g ? w : i) + _ + (s < g && s > -g ? w : s) + _ + (l < g && l > -g ? w : l), x += _ + (u < g && u > -g ? w : u) + _ + (n < g && n > -g ? w : n) + _ + (o < g && o > -g ? w : o), A || D || 1 !== P ? (x += _ + (h < g && h > -g ? w : h) + _ + (p < g && p > -g ? w : p) + _ + (r < g && r > -g ? w : r), x += _ + (a < g && a > -g ? w : a) + _ + (c < g && c > -g ? w : c) + _ + (f < g && f > -g ? w : f) + _) : x += ",0,0,0,0,1,0,", x += O + _ + N + _ + M + _ + (L ? 1 + -M / L : 1) + ")", k[At] = x
                };
            h = Pt.prototype, h.x = h.y = h.z = h.skewX = h.skewY = h.rotation = h.rotationX = h.rotationY = h.zOrigin = h.xPercent = h.yPercent = h.xOffset = h.yOffset = 0, h.scaleX = h.scaleY = h.scaleZ = 1, Ct("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                parser: function (t, e, i, n, s, a, l) {
                    if (n._lastParsedTransform === l) return s;
                    n._lastParsedTransform = l;
                    var h, c = l.scale && "function" == typeof l.scale ? l.scale : 0;
                    "function" == typeof l[i] && (h = l[i], l[i] = e), c && (l.scale = c(v, t));
                    var u, p, d, f, m, y, b, x, _, w = t._gsTransform, T = t.style, C = 1e-6, S = Et.length, k = l,
                        E = {}, A = "transformOrigin", D = qt(t, r, !0, k.parseTransform),
                        F = k.transform && ("function" == typeof k.transform ? k.transform(v, g) : k.transform);
                    if (D.skewType = k.skewType || D.skewType || o.defaultSkewType, n._transform = D, F && "string" == typeof F && At) p = H.style, p[At] = F, p.display = "block", p.position = "absolute", j.body.appendChild(H),
                        u = qt(H, null, !1), "simple" === D.skewType && (u.scaleY *= Math.cos(u.skewX * R)), D.svg && (y = D.xOrigin, b = D.yOrigin, u.x -= D.xOffset, u.y -= D.yOffset, (k.transformOrigin || k.svgOrigin) && (F = {}, It(t, at(k.transformOrigin), F, k.svgOrigin, k.smoothOrigin, !0), y = F.xOrigin, b = F.yOrigin, u.x -= F.xOffset - D.xOffset, u.y -= F.yOffset - D.yOffset), (y || b) && (x = Ht(H, !0), u.x -= y - (y * x[0] + b * x[2]), u.y -= b - (y * x[1] + b * x[3]))), j.body.removeChild(H), u.perspective || (u.perspective = D.perspective), null != k.xPercent && (u.xPercent = ht(k.xPercent, D.xPercent)), null != k.yPercent && (u.yPercent = ht(k.yPercent, D.yPercent)); else if ("object" == typeof k) {
                        if (u = {
                                scaleX: ht(null != k.scaleX ? k.scaleX : k.scale, D.scaleX),
                                scaleY: ht(null != k.scaleY ? k.scaleY : k.scale, D.scaleY),
                                scaleZ: ht(k.scaleZ, D.scaleZ),
                                x: ht(k.x, D.x),
                                y: ht(k.y, D.y),
                                z: ht(k.z, D.z),
                                xPercent: ht(k.xPercent, D.xPercent),
                                yPercent: ht(k.yPercent, D.yPercent),
                                perspective: ht(k.transformPerspective, D.perspective)
                            }, m = k.directionalRotation, null != m) if ("object" == typeof m) for (p in m) k[p] = m[p]; else k.rotation = m;
                        "string" == typeof k.x && k.x.indexOf("%") !== -1 && (u.x = 0, u.xPercent = ht(k.x, D.xPercent)), "string" == typeof k.y && k.y.indexOf("%") !== -1 && (u.y = 0, u.yPercent = ht(k.y, D.yPercent)), u.rotation = ct("rotation" in k ? k.rotation : "shortRotation" in k ? k.shortRotation + "_short" : "rotationZ" in k ? k.rotationZ : D.rotation, D.rotation, "rotation", E), $t && (u.rotationX = ct("rotationX" in k ? k.rotationX : "shortRotationX" in k ? k.shortRotationX + "_short" : D.rotationX || 0, D.rotationX, "rotationX", E), u.rotationY = ct("rotationY" in k ? k.rotationY : "shortRotationY" in k ? k.shortRotationY + "_short" : D.rotationY || 0, D.rotationY, "rotationY", E)), u.skewX = ct(k.skewX, D.skewX), u.skewY = ct(k.skewY, D.skewY)
                    }
                    for ($t && null != k.force3D && (D.force3D = k.force3D, f = !0), d = D.force3D || D.z || D.rotationX || D.rotationY || u.z || u.rotationX || u.rotationY || u.perspective, d || null == k.scale || (u.scaleZ = 1); --S > -1;) _ = Et[S], F = u[_] - D[_], (F > C || F < -C || null != k[_] || null != L[_]) && (f = !0, s = new bt(D, _, D[_], F, s), _ in E && (s.e = E[_]), s.xs0 = 0, s.plugin = a, n._overwriteProps.push(s.n));
                    return F = k.transformOrigin, D.svg && (F || k.svgOrigin) && (y = D.xOffset, b = D.yOffset, It(t, at(F), u, k.svgOrigin, k.smoothOrigin), s = xt(D, "xOrigin", (w ? D : u).xOrigin, u.xOrigin, s, A), s = xt(D, "yOrigin", (w ? D : u).yOrigin, u.yOrigin, s, A), y === D.xOffset && b === D.yOffset || (s = xt(D, "xOffset", w ? y : D.xOffset, D.xOffset, s, A), s = xt(D, "yOffset", w ? b : D.yOffset, D.yOffset, s, A)), F = "0px 0px"), (F || $t && d && D.zOrigin) && (At ? (f = !0, _ = Ft, F = (F || K(t, _, r, !1, "50% 50%")) + "", s = new bt(T, _, 0, 0, s, (-1), A), s.b = T[_], s.plugin = a, $t ? (p = D.zOrigin, F = F.split(" "), D.zOrigin = (F.length > 2 && (0 === p || "0px" !== F[2]) ? parseFloat(F[2]) : p) || 0, s.xs0 = s.e = F[0] + " " + (F[1] || "50%") + " 0px", s = new bt(D, "zOrigin", 0, 0, s, (-1), s.n), s.b = p, s.xs0 = s.e = D.zOrigin) : s.xs0 = s.e = F) : at(F + "", D)), f && (n._transformType = D.svg && kt || !d && 3 !== this._transformType ? 2 : 3), h && (l[i] = h), c && (l.scale = c), s
                }, prefix: !0
            }), Ct("boxShadow", {
                defaultValue: "0px 0px 0px 0px #999",
                prefix: !0,
                color: !0,
                multi: !0,
                keyword: "inset"
            }), Ct("borderRadius", {
                defaultValue: "0px", parser: function (t, e, i, s, o, a) {
                    e = this.format(e);
                    var l, h, c, u, p, d, f, m, g, v, y, b, x, _, w, T,
                        C = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                        S = t.style;
                    for (g = parseFloat(t.offsetWidth), v = parseFloat(t.offsetHeight), l = e.split(" "), h = 0; h < C.length; h++) this.p.indexOf("border") && (C[h] = Z(C[h])), p = u = K(t, C[h], r, !1, "0px"), p.indexOf(" ") !== -1 && (u = p.split(" "), p = u[0], u = u[1]), d = c = l[h], f = parseFloat(p), b = p.substr((f + "").length), x = "=" === d.charAt(1), x ? (m = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), m *= parseFloat(d), y = d.substr((m + "").length - (m < 0 ? 1 : 0)) || "") : (m = parseFloat(d), y = d.substr((m + "").length)), "" === y && (y = n[i] || b), y !== b && (_ = tt(t, "borderLeft", f, b), w = tt(t, "borderTop", f, b), "%" === y ? (p = _ / g * 100 + "%", u = w / v * 100 + "%") : "em" === y ? (T = tt(t, "borderLeft", 1, "em"), p = _ / T + "em", u = w / T + "em") : (p = _ + "px", u = w + "px"), x && (d = parseFloat(p) + m + y, c = parseFloat(u) + m + y)), o = _t(S, C[h], p + " " + u, d + " " + c, !1, "0px", o);
                    return o
                }, prefix: !0, formatter: gt("0px 0px 0px 0px", !1, !0)
            }), Ct("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                defaultValue: "0px",
                parser: function (t, e, i, n, s, o) {
                    return _t(t.style, i, this.format(K(t, i, r, !1, "0px 0px")), this.format(e), !1, "0px", s)
                },
                prefix: !0,
                formatter: gt("0px 0px", !1, !0)
            }), Ct("backgroundPosition", {
                defaultValue: "0 0", parser: function (t, e, i, n, s, o) {
                    var a, l, h, c, u, p, d = "background-position", f = r || J(t, null),
                        g = this.format((f ? m ? f.getPropertyValue(d + "-x") + " " + f.getPropertyValue(d + "-y") : f.getPropertyValue(d) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                        v = this.format(e);
                    if (g.indexOf("%") !== -1 != (v.indexOf("%") !== -1) && v.split(",").length < 2 && (p = K(t, "backgroundImage").replace(D, ""), p && "none" !== p)) {
                        for (a = g.split(" "), l = v.split(" "), q.setAttribute("src", p), h = 2; --h > -1;) g = a[h], c = g.indexOf("%") !== -1, c !== (l[h].indexOf("%") !== -1) && (u = 0 === h ? t.offsetWidth - q.width : t.offsetHeight - q.height, a[h] = c ? parseFloat(g) / 100 * u + "px" : parseFloat(g) / u * 100 + "%");
                        g = a.join(" ")
                    }
                    return this.parseComplex(t.style, g, v, s, o)
                }, formatter: at
            }), Ct("backgroundSize", {
                defaultValue: "0 0", formatter: function (t) {
                    return t += "", at(t.indexOf(" ") === -1 ? t + " " + t : t)
                }
            }), Ct("perspective", {defaultValue: "0px", prefix: !0}), Ct("perspectiveOrigin", {
                defaultValue: "50% 50%",
                prefix: !0
            }), Ct("transformStyle", {prefix: !0}), Ct("backfaceVisibility", {prefix: !0}), Ct("userSelect", {prefix: !0}), Ct("margin", {parser: vt("marginTop,marginRight,marginBottom,marginLeft")}), Ct("padding", {parser: vt("paddingTop,paddingRight,paddingBottom,paddingLeft")}), Ct("clip", {
                defaultValue: "rect(0px,0px,0px,0px)",
                parser: function (t, e, i, n, s, o) {
                    var a, l, h;
                    return m < 9 ? (l = t.currentStyle, h = m < 8 ? " " : ",", a = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (a = this.format(K(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, s, o)
                }
            }), Ct("textShadow", {
                defaultValue: "0px 0px 0px #999",
                color: !0,
                multi: !0
            }), Ct("autoRound,strictUnits", {
                parser: function (t, e, i, n, r) {
                    return r
                }
            }), Ct("border", {
                defaultValue: "0px solid #000", parser: function (t, e, i, n, s, o) {
                    var a = K(t, "borderTopWidth", r, !1, "0px"), l = this.format(e).split(" "),
                        h = l[0].replace(w, "");
                    return "px" !== h && (a = parseFloat(a) / tt(t, "borderTopWidth", 1, h) + h), this.parseComplex(t.style, this.format(a + " " + K(t, "borderTopStyle", r, !1, "solid") + " " + K(t, "borderTopColor", r, !1, "#000")), l.join(" "), s, o)
                }, color: !0, formatter: function (t) {
                    var e = t.split(" ");
                    return e[0] + " " + (e[1] || "solid") + " " + (t.match(mt) || ["#000"])[0]
                }
            }), Ct("borderWidth", {parser: vt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}), Ct("float,cssFloat,styleFloat", {
                parser: function (t, e, i, n, r, s) {
                    var o = t.style, a = "cssFloat" in o ? "cssFloat" : "styleFloat";
                    return new bt(o, a, 0, 0, r, (-1), i, (!1), 0, o[a], e)
                }
            });
            var Ut = function (t) {
                var e, i = this.t, n = i.filter || K(this.data, "filter") || "", r = this.s + this.c * t | 0;
                100 === r && (n.indexOf("atrix(") === -1 && n.indexOf("radient(") === -1 && n.indexOf("oader(") === -1 ? (i.removeAttribute("filter"), e = !K(this.data, "filter")) : (i.filter = n.replace(S, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), n.indexOf("pacity") === -1 ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(T, "opacity=" + r))
            };
            Ct("opacity,alpha,autoAlpha", {
                defaultValue: "1", parser: function (t, e, i, n, s, o) {
                    var a = parseFloat(K(t, "opacity", r, !1, "1")), l = t.style, h = "autoAlpha" === i;
                    return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), h && 1 === a && "hidden" === K(t, "visibility", r) && 0 !== e && (a = 0), U ? s = new bt(l, "opacity", a, e - a, s) : (s = new bt(l, "opacity", 100 * a, 100 * (e - a), s), s.xn1 = h ? 1 : 0, l.zoom = 1, s.type = 2, s.b = "alpha(opacity=" + s.s + ")", s.e = "alpha(opacity=" + (s.s + s.c) + ")", s.data = t, s.plugin = o, s.setRatio = Ut), h && (s = new bt(l, "visibility", 0, 0, s, (-1), null, (!1), 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), s.xs0 = "inherit", n._overwriteProps.push(s.n), n._overwriteProps.push(i)), s
                }
            });
            var Wt = function (t, e) {
                e && (t.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), t.removeProperty(e.replace(E, "-$1").toLowerCase())) : t.removeAttribute(e))
            }, Vt = function (t) {
                if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                    this.t.setAttribute("class", 0 === t ? this.b : this.e);
                    for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Wt(i, e.p), e = e._next;
                    1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
            };
            Ct("className", {
                parser: function (t, e, n, s, o, a, l) {
                    var h, c, u, p, d, f = t.getAttribute("class") || "", m = t.style.cssText;
                    if (o = s._classNamePT = new bt(t, n, 0, 0, o, 2), o.setRatio = Vt, o.pr = -11, i = !0, o.b = f, c = it(t, r), u = t._gsClassPT) {
                        for (p = {}, d = u.data; d;) p[d.p] = 1, d = d._next;
                        u.setRatio(1)
                    }
                    return t._gsClassPT = o, o.e = "=" !== e.charAt(1) ? e : f.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", o.e), h = nt(t, c, it(t), l, p), t.setAttribute("class", f), o.data = h.firstMPT, t.style.cssText = m, o = o.xfirst = s.parse(t, h.difs, o, a)
                }
            });
            var Gt = function (t) {
                if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                    var e, i, n, r, s, o = this.t.style, a = l.transform.parse;
                    if ("all" === this.e) o.cssText = "", r = !0; else for (e = this.e.split(" ").join("").split(","), n = e.length; --n > -1;) i = e[n], l[i] && (l[i].parse === a ? r = !0 : i = "transformOrigin" === i ? Ft : l[i].p), Wt(o, i);
                    r && (Wt(o, At), s = this.t._gsTransform, s && (s.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                }
            };
            for (Ct("clearProps", {
                parser: function (t, e, n, r, s) {
                    return s = new bt(t, n, 0, 0, s, 2), s.setRatio = Gt, s.e = e, s.pr = -10, s.data = r._tween, i = !0, s
                }
            }), h = "bezier,throwProps,physicsProps,physics2D".split(","), wt = h.length; wt--;) St(h[wt]);
            h = o.prototype, h._firstPT = h._lastParsedTransform = h._transform = null, h._onInitTween = function (t, e, a, h) {
                if (!t.nodeType) return !1;
                this._target = g = t, this._tween = a, this._vars = e, v = h, c = e.autoRound, i = !1, n = e.suffixMap || o.suffixMap, r = J(t, ""), s = this._overwriteProps;
                var d, m, y, b, x, _, w, T, S, k = t.style;
                if (u && "" === k.zIndex && (d = K(t, "zIndex", r), "auto" !== d && "" !== d || this._addLazySet(k, "zIndex", 0)), "string" == typeof e && (b = k.cssText, d = it(t, r), k.cssText = b + ";" + e, d = nt(t, d, it(t)).difs, !U && C.test(e) && (d.opacity = parseFloat(RegExp.$1)), e = d, k.cssText = b), e.className ? this._firstPT = m = l.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = m = this.parse(t, e, null), this._transformType) {
                    for (S = 3 === this._transformType, At ? p && (u = !0, "" === k.zIndex && (w = K(t, "zIndex", r), "auto" !== w && "" !== w || this._addLazySet(k, "zIndex", 0)), f && this._addLazySet(k, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (S ? "visible" : "hidden"))) : k.zoom = 1, y = m; y && y._next;) y = y._next;
                    T = new bt(t, "transform", 0, 0, null, 2), this._linkCSSP(T, null, y), T.setRatio = At ? Yt : Xt, T.data = this._transform || qt(t, r, !0), T.tween = a, T.pr = -1, s.pop()
                }
                if (i) {
                    for (; m;) {
                        for (_ = m._next, y = b; y && y.pr > m.pr;) y = y._next;
                        (m._prev = y ? y._prev : x) ? m._prev._next = m : b = m, (m._next = y) ? y._prev = m : x = m, m = _
                    }
                    this._firstPT = b
                }
                return !0
            }, h.parse = function (t, e, i, s) {
                var o, a, h, u, p, d, f, m, y, b, x = t.style;
                for (o in e) {
                    if (d = e[o], "function" == typeof d && (d = d(v, g)), a = l[o]) i = a.parse(t, d, o, this, i, s, e); else {
                        if ("--" === o.substr(0, 2)) {
                            this._tween._propLookup[o] = this._addTween.call(this._tween, t.style, "setProperty", J(t).getPropertyValue(o) + "", d + "", o, !1, o);
                            continue
                        }
                        p = K(t, o, r) + "", y = "string" == typeof d, "color" === o || "fill" === o || "stroke" === o || o.indexOf("Color") !== -1 || y && k.test(d) ? (y || (d = dt(d), d = (d.length > 3 ? "rgba(" : "rgb(") + d.join(",") + ")"), i = _t(x, o, p, d, !0, "transparent", i, 0, s)) : y && M.test(d) ? i = _t(x, o, p, d, !0, null, i, 0, s) : (h = parseFloat(p), f = h || 0 === h ? p.substr((h + "").length) : "", "" !== p && "auto" !== p || ("width" === o || "height" === o ? (h = ot(t, o, r), f = "px") : "left" === o || "top" === o ? (h = et(t, o, r), f = "px") : (h = "opacity" !== o ? 0 : 1, f = "")), b = y && "=" === d.charAt(1), b ? (u = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), u *= parseFloat(d), m = d.replace(w, "")) : (u = parseFloat(d), m = y ? d.replace(w, "") : ""), "" === m && (m = o in n ? n[o] : f), d = u || 0 === u ? (b ? u + h : u) + m : e[o], f !== m && ("" === m && "lineHeight" !== o || (u || 0 === u) && h && (h = tt(t, o, h, f), "%" === m ? (h /= tt(t, o, 100, "%") / 100, e.strictUnits !== !0 && (p = h + "%")) : "em" === m || "rem" === m || "vw" === m || "vh" === m ? h /= tt(t, o, 1, m) : "px" !== m && (u = tt(t, o, u, m), m = "px"), b && (u || 0 === u) && (d = u + h + m))), b && (u += h), !h && 0 !== h || !u && 0 !== u ? void 0 !== x[o] && (d || d + "" != "NaN" && null != d) ? (i = new bt(x, o, u || h || 0, 0, i, (-1), o, (!1), 0, p, d), i.xs0 = "none" !== d || "display" !== o && o.indexOf("Style") === -1 ? d : p) : V("invalid " + o + " tween value: " + e[o]) : (i = new bt(x, o, h, u - h, i, 0, o, c !== !1 && ("px" === m || "zIndex" === o), 0, p, d), i.xs0 = m))
                    }
                    s && i && !i.plugin && (i.plugin = s)
                }
                return i
            }, h.setRatio = function (t) {
                var e, i, n, r = this._firstPT, s = 1e-6;
                if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time) if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6) for (; r;) {
                    if (e = r.c * t + r.s, r.r ? e = Math.round(e) : e < s && e > -s && (e = 0), r.type) if (1 === r.type) if (n = r.l, 2 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2; else if (3 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3; else if (4 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4; else if (5 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5; else {
                        for (i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                        r.t[r.p] = i
                    } else r.type === -1 ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t); else r.t[r.p] = e + r.xs0;
                    r = r._next
                } else for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next; else for (; r;) {
                    if (2 !== r.type) if (r.r && r.type !== -1) if (e = Math.round(r.s + r.c), r.type) {
                        if (1 === r.type) {
                            for (n = r.l, i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                            r.t[r.p] = i
                        }
                    } else r.t[r.p] = e + r.xs0; else r.t[r.p] = r.e; else r.setRatio(t);
                    r = r._next
                }
            }, h._enableTransforms = function (t) {
                this._transform = this._transform || qt(this._target, r, !0), this._transformType = this._transform.svg && kt || !t && 3 !== this._transformType ? 2 : 3
            };
            var Qt = function (t) {
                this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
            };
            h._addLazySet = function (t, e, i) {
                var n = this._firstPT = new bt(t, e, 0, 0, this._firstPT, 2);
                n.e = i, n.setRatio = Qt, n.data = this
            }, h._linkCSSP = function (t, e, i, n) {
                return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
            }, h._mod = function (t) {
                for (var e = this._firstPT; e;) "function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1), e = e._next
            }, h._kill = function (e) {
                var i, n, r, s = e;
                if (e.autoAlpha || e.alpha) {
                    s = {};
                    for (n in e) s[n] = e[n];
                    s.opacity = 1, s.autoAlpha && (s.visibility = 1)
                }
                for (e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), i = this._firstPT; i;) i.plugin && i.plugin !== n && i.plugin._kill && (i.plugin._kill(e), n = i.plugin), i = i._next;
                return t.prototype._kill.call(this, s)
            };
            var Zt = function (t, e, i) {
                var n, r, s, o;
                if (t.slice) for (r = t.length; --r > -1;) Zt(t[r], e, i); else for (n = t.childNodes, r = n.length; --r > -1;) s = n[r], o = s.type, s.style && (e.push(it(s)), i && i.push(s)), 1 !== o && 9 !== o && 11 !== o || !s.childNodes.length || Zt(s, e, i)
            };
            return o.cascadeTo = function (t, i, n) {
                var r, s, o, a, l = e.to(t, i, n), h = [l], c = [], u = [], p = [], d = e._internals.reservedProps;
                for (t = l._targets || l.target, Zt(t, c, p), l.render(i, !0, !0), Zt(t, u), l.render(0, !0, !0), l._enabled(!0), r = p.length; --r > -1;) if (s = nt(p[r], c[r], u[r]), s.firstMPT) {
                    s = s.difs;
                    for (o in n) d[o] && (s[o] = n[o]);
                    a = {};
                    for (o in s) a[o] = c[r][o];
                    h.push(e.fromTo(p[r], i, a, s))
                }
                return h
            }, t.activate([o]), o
        }, !0), function () {
            var t = _gsScope._gsDefine.plugin({
                propName: "roundProps",
                version: "1.6.0",
                priority: -1,
                API: 2,
                init: function (t, e, i) {
                    return this._tween = i, !0
                }
            }), e = function (t) {
                for (; t;) t.f || t.blob || (t.m = Math.round), t = t._next
            }, i = t.prototype;
            i._onInitAllProps = function () {
                for (var t, i, n, r = this._tween, s = r.vars.roundProps.join ? r.vars.roundProps : r.vars.roundProps.split(","), o = s.length, a = {}, l = r._propLookup.roundProps; --o > -1;) a[s[o]] = Math.round;
                for (o = s.length; --o > -1;) for (t = s[o], i = r._firstPT; i;) n = i._next, i.pg ? i.t._mod(a) : i.n === t && (2 === i.f && i.t ? e(i.t._firstPT) : (this._add(i.t, t, i.s, i.c), n && (n._prev = i._prev), i._prev ? i._prev._next = n : r._firstPT === i && (r._firstPT = n), i._next = i._prev = null, r._propLookup[t] = l)), i = n;
                return !1
            }, i._add = function (t, e, i, n) {
                this._addTween(t, e, i, i + n, e, Math.round), this._overwriteProps.push(e)
            }
        }(), function () {
            _gsScope._gsDefine.plugin({
                propName: "attr", API: 2, version: "0.6.1", init: function (t, e, i, n) {
                    var r, s;
                    if ("function" != typeof t.setAttribute) return !1;
                    for (r in e) s = e[r], "function" == typeof s && (s = s(n, t)), this._addTween(t, "setAttribute", t.getAttribute(r) + "", s + "", r, !1, r), this._overwriteProps.push(r);
                    return !0
                }
            })
        }(), _gsScope._gsDefine.plugin({
            propName: "directionalRotation",
            version: "0.3.1",
            API: 2,
            init: function (t, e, i, n) {
                "object" != typeof e && (e = {rotation: e}), this.finals = {};
                var r, s, o, a, l, h, c = e.useRadians === !0 ? 2 * Math.PI : 360, u = 1e-6;
                for (r in e) "useRadians" !== r && (a = e[r], "function" == typeof a && (a = a(n, t)), h = (a + "").split("_"), s = h[0], o = parseFloat("function" != typeof t[r] ? t[r] : t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]()), a = this.finals[r] = "string" == typeof s && "=" === s.charAt(1) ? o + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0, l = a - o, h.length && (s = h.join("_"), s.indexOf("short") !== -1 && (l %= c, l !== l % (c / 2) && (l = l < 0 ? l + c : l - c)), s.indexOf("_cw") !== -1 && l < 0 ? l = (l + 9999999999 * c) % c - (l / c | 0) * c : s.indexOf("ccw") !== -1 && l > 0 && (l = (l - 9999999999 * c) % c - (l / c | 0) * c)), (l > u || l < -u) && (this._addTween(t, r, o, o + l, r), this._overwriteProps.push(r)));
                return !0
            },
            set: function (t) {
                var e;
                if (1 !== t) this._super.setRatio.call(this, t); else for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
            }
        })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function (t) {
            var e, i, n, r = _gsScope.GreenSockGlobals || _gsScope, s = r.com.greensock, o = 2 * Math.PI,
                a = Math.PI / 2, l = s._class, h = function (e, i) {
                    var n = l("easing." + e, function () {
                    }, !0), r = n.prototype = new t;
                    return r.constructor = n, r.getRatio = i, n
                }, c = t.register || function () {
                }, u = function (t, e, i, n, r) {
                    var s = l("easing." + t, {easeOut: new e, easeIn: new i, easeInOut: new n}, !0);
                    return c(s, t), s
                }, p = function (t, e, i) {
                    this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                }, d = function (e, i) {
                    var n = l("easing." + e, function (t) {
                        this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                    }, !0), r = n.prototype = new t;
                    return r.constructor = n, r.getRatio = i, r.config = function (t) {
                        return new n(t)
                    }, n
                }, f = u("Back", d("BackOut", function (t) {
                    return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                }), d("BackIn", function (t) {
                    return t * t * ((this._p1 + 1) * t - this._p1)
                }), d("BackInOut", function (t) {
                    return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                })), m = l("easing.SlowMo", function (t, e, i) {
                    e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
                }, !0), g = m.prototype = new t;
            return g.constructor = m, g.getRatio = function (t) {
                var e = t + (.5 - t) * this._p;
                return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
            }, m.ease = new m(.7, .7), g.config = m.config = function (t, e, i) {
                return new m(t, e, i)
            }, e = l("easing.SteppedEase", function (t, e) {
                t = t || 1, this._p1 = 1 / t, this._p2 = t + (e ? 0 : 1), this._p3 = e ? 1 : 0
            }, !0), g = e.prototype = new t, g.constructor = e, g.getRatio = function (t) {
                return t < 0 ? t = 0 : t >= 1 && (t = .999999999), ((this._p2 * t | 0) + this._p3) * this._p1
            }, g.config = e.config = function (t, i) {
                return new e(t, i)
            }, i = l("easing.RoughEase", function (e) {
                e = e || {};
                for (var i, n, r, s, o, a, l = e.taper || "none", h = [], c = 0, u = 0 | (e.points || 20), d = u, f = e.randomize !== !1, m = e.clamp === !0, g = e.template instanceof t ? e.template : null, v = "number" == typeof e.strength ? .4 * e.strength : .4; --d > -1;) i = f ? Math.random() : 1 / u * d, n = g ? g.getRatio(i) : i, "none" === l ? r = v : "out" === l ? (s = 1 - i, r = s * s * v) : "in" === l ? r = i * i * v : i < .5 ? (s = 2 * i, r = s * s * .5 * v) : (s = 2 * (1 - i), r = s * s * .5 * v), f ? n += Math.random() * r - .5 * r : d % 2 ? n += .5 * r : n -= .5 * r, m && (n > 1 ? n = 1 : n < 0 && (n = 0)), h[c++] = {
                    x: i,
                    y: n
                };
                for (h.sort(function (t, e) {
                    return t.x - e.x
                }), a = new p(1, 1, null), d = u; --d > -1;) o = h[d], a = new p(o.x, o.y, a);
                this._prev = new p(0, 0, 0 !== a.t ? a : a.next)
            }, !0), g = i.prototype = new t, g.constructor = i, g.getRatio = function (t) {
                var e = this._prev;
                if (t > e.t) {
                    for (; e.next && t >= e.t;) e = e.next;
                    e = e.prev
                } else for (; e.prev && t <= e.t;) e = e.prev;
                return this._prev = e, e.v + (t - e.t) / e.gap * e.c
            }, g.config = function (t) {
                return new i(t)
            }, i.ease = new i, u("Bounce", h("BounceOut", function (t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            }), h("BounceIn", function (t) {
                return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
            }), h("BounceInOut", function (t) {
                var e = t < .5;
                return t = e ? 1 - 2 * t : 2 * t - 1, t = t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
            })), u("Circ", h("CircOut", function (t) {
                return Math.sqrt(1 - (t -= 1) * t)
            }), h("CircIn", function (t) {
                return -(Math.sqrt(1 - t * t) - 1)
            }), h("CircInOut", function (t) {
                return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            })), n = function (e, i, n) {
                var r = l("easing." + e, function (t, e) {
                    this._p1 = t >= 1 ? t : 1, this._p2 = (e || n) / (t < 1 ? t : 1), this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0), this._p2 = o / this._p2
                }, !0), s = r.prototype = new t;
                return s.constructor = r, s.getRatio = i, s.config = function (t, e) {
                    return new r(t, e)
                }, r
            }, u("Elastic", n("ElasticOut", function (t) {
                return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
            }, .3), n("ElasticIn", function (t) {
                return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))
            }, .3), n("ElasticInOut", function (t) {
                return (t *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
            }, .45)), u("Expo", h("ExpoOut", function (t) {
                return 1 - Math.pow(2, -10 * t)
            }), h("ExpoIn", function (t) {
                return Math.pow(2, 10 * (t - 1)) - .001
            }), h("ExpoInOut", function (t) {
                return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
            })), u("Sine", h("SineOut", function (t) {
                return Math.sin(t * a)
            }), h("SineIn", function (t) {
                return -Math.cos(t * a) + 1
            }), h("SineInOut", function (t) {
                return -.5 * (Math.cos(Math.PI * t) - 1)
            })), l("easing.EaseLookup", {
                find: function (e) {
                    return t.map[e]
                }
            }, !0), c(r.SlowMo, "SlowMo", "ease,"), c(i, "RoughEase", "ease,"), c(e, "SteppedEase", "ease,"), f
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function (t, e) {
        "use strict";
        var i = {}, n = t.document, r = t.GreenSockGlobals = t.GreenSockGlobals || t;
        if (!r.TweenLite) {
            var s, o, a, l, h, c = function (t) {
                var e, i = t.split("."), n = r;
                for (e = 0; e < i.length; e++) n[i[e]] = n = n[i[e]] || {};
                return n
            }, u = c("com.greensock"), p = 1e-10, d = function (t) {
                var e, i = [], n = t.length;
                for (e = 0; e !== n; i.push(t[e++])) ;
                return i
            }, f = function () {
            }, m = function () {
                var t = Object.prototype.toString, e = t.call([]);
                return function (i) {
                    return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                }
            }(), g = {}, v = function (n, s, o, a) {
                this.sc = g[n] ? g[n].sc : [], g[n] = this, this.gsClass = null, this.func = o;
                var l = [];
                this.check = function (h) {
                    for (var u, p, d, f, m = s.length, y = m; --m > -1;) (u = g[s[m]] || new v(s[m], [])).gsClass ? (l[m] = u.gsClass, y--) : h && u.sc.push(this);
                    if (0 === y && o) {
                        if (p = ("com.greensock." + n).split("."), d = p.pop(), f = c(p.join("."))[d] = this.gsClass = o.apply(o, l), a) if (r[d] = i[d] = f, "undefined" != typeof module && module.exports) if (n === e) {
                            module.exports = i[e] = f;
                            for (m in i) f[m] = i[m]
                        } else i[e] && (i[e][d] = f); else "function" == typeof define && define.amd && define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + n.split(".").pop(), [], function () {
                            return f
                        });
                        for (m = 0; m < this.sc.length; m++) this.sc[m].check()
                    }
                }, this.check(!0)
            }, y = t._gsDefine = function (t, e, i, n) {
                return new v(t, e, i, n)
            }, b = u._class = function (t, e, i) {
                return e = e || function () {
                }, y(t, [], function () {
                    return e
                }, i), e
            };
            y.globals = r;
            var x = [0, 0, 1, 1], _ = b("easing.Ease", function (t, e, i, n) {
                this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? x.concat(e) : x
            }, !0), w = _.map = {}, T = _.register = function (t, e, i, n) {
                for (var r, s, o, a, l = e.split(","), h = l.length, c = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1;) for (s = l[h], r = n ? b("easing." + s, null, !0) : u.easing[s] || {}, o = c.length; --o > -1;) a = c[o], w[s + "." + a] = w[a + s] = r[a] = t.getRatio ? t : t[a] || new t
            };
            for (a = _.prototype, a._calcEnd = !1, a.getRatio = function (t) {
                if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                var e = this._type, i = this._power, n = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
                return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : t < .5 ? n / 2 : 1 - n / 2
            }, s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], o = s.length; --o > -1;) a = s[o] + ",Power" + o, T(new _(null, null, 1, o), a, "easeOut", !0), T(new _(null, null, 2, o), a, "easeIn" + (0 === o ? ",easeNone" : "")), T(new _(null, null, 3, o), a, "easeInOut");
            w.linear = u.easing.Linear.easeIn, w.swing = u.easing.Quad.easeInOut;
            var C = b("events.EventDispatcher", function (t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            a = C.prototype, a.addEventListener = function (t, e, i, n, r) {
                r = r || 0;
                var s, o, a = this._listeners[t], c = 0;
                for (this !== l || h || l.wake(), null == a && (this._listeners[t] = a = []), o = a.length; --o > -1;) s = a[o], s.c === e && s.s === i ? a.splice(o, 1) : 0 === c && s.pr < r && (c = o + 1);
                a.splice(c, 0, {c: e, s: i, up: n, pr: r})
            }, a.removeEventListener = function (t, e) {
                var i, n = this._listeners[t];
                if (n) for (i = n.length; --i > -1;) if (n[i].c === e) return void n.splice(i, 1)
            }, a.dispatchEvent = function (t) {
                var e, i, n, r = this._listeners[t];
                if (r) for (e = r.length, e > 1 && (r = r.slice(0)), i = this._eventTarget; --e > -1;) n = r[e], n && (n.up ? n.c.call(n.s || i, {
                    type: t,
                    target: i
                }) : n.c.call(n.s || i))
            };
            var S = t.requestAnimationFrame, k = t.cancelAnimationFrame, E = Date.now || function () {
                return (new Date).getTime()
            }, A = E();
            for (s = ["ms", "moz", "webkit", "o"], o = s.length; --o > -1 && !S;) S = t[s[o] + "RequestAnimationFrame"], k = t[s[o] + "CancelAnimationFrame"] || t[s[o] + "CancelRequestAnimationFrame"];
            b("Ticker", function (t, e) {
                var i, r, s, o, a, c = this, u = E(), d = !(e === !1 || !S) && "auto", m = 500, g = 33, v = "tick",
                    y = function (t) {
                        var e, n, l = E() - A;
                        l > m && (u += l - g), A += l, c.time = (A - u) / 1e3, e = c.time - a, (!i || e > 0 || t === !0) && (c.frame++, a += e + (e >= o ? .004 : o - e), n = !0), t !== !0 && (s = r(y)), n && c.dispatchEvent(v)
                    };
                C.call(c), c.time = c.frame = 0, c.tick = function () {
                    y(!0)
                }, c.lagSmoothing = function (t, e) {
                    m = t || 1 / p, g = Math.min(e, m, 0)
                }, c.sleep = function () {
                    null != s && (d && k ? k(s) : clearTimeout(s), r = f, s = null, c === l && (h = !1))
                }, c.wake = function (t) {
                    null !== s ? c.sleep() : t ? u += -A + (A = E()) : c.frame > 10 && (A = E() - m + 5), r = 0 === i ? f : d && S ? S : function (t) {
                        return setTimeout(t, 1e3 * (a - c.time) + 1 | 0)
                    }, c === l && (h = !0), y(2)
                }, c.fps = function (t) {
                    return arguments.length ? (i = t, o = 1 / (i || 60), a = this.time + o, void c.wake()) : i
                }, c.useRAF = function (t) {
                    return arguments.length ? (c.sleep(), d = t, void c.fps(i)) : d
                }, c.fps(t), setTimeout(function () {
                    "auto" === d && c.frame < 5 && "hidden" !== n.visibilityState && c.useRAF(!1)
                }, 1500)
            }), a = u.Ticker.prototype = new u.events.EventDispatcher, a.constructor = u.Ticker;
            var D = b("core.Animation", function (t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, G) {
                    h || l.wake();
                    var i = this.vars.useFrames ? V : G;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            l = D.ticker = new u.Ticker, a = D.prototype, a._dirty = a._gc = a._initted = a._paused = !1, a._totalTime = a._time = 0, a._rawPrevTime = -1, a._next = a._last = a._onUpdate = a._timeline = a.timeline = null, a._paused = !1;
            var F = function () {
                h && E() - A > 2e3 && "hidden" !== n.visibilityState && l.wake();
                var t = setTimeout(F, 2e3);
                t.unref && t.unref()
            };
            F(), a.play = function (t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, a.pause = function (t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, a.resume = function (t, e) {
                return null != t && this.seek(t, e), this.paused(!1)
            }, a.seek = function (t, e) {
                return this.totalTime(Number(t), e !== !1)
            }, a.restart = function (t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
            }, a.reverse = function (t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, a.render = function (t, e, i) {
            }, a.invalidate = function () {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this
            }, a.isActive = function () {
                var t, e = this._timeline, i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - 1e-7
            }, a._enabled = function (t, e) {
                return h || l.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, a._kill = function (t, e) {
                return this._enabled(!1, !1)
            }, a.kill = function (t, e) {
                return this._kill(t, e), this
            }, a._uncache = function (t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                return this
            }, a._swapSelfInParams = function (t) {
                for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                return i
            }, a._callback = function (t) {
                var e = this.vars, i = e[t], n = e[t + "Params"], r = e[t + "Scope"] || e.callbackScope || this,
                    s = n ? n.length : 0;
                switch (s) {
                    case 0:
                        i.call(r);
                        break;
                    case 1:
                        i.call(r, n[0]);
                        break;
                    case 2:
                        i.call(r, n[0], n[1]);
                        break;
                    default:
                        i.apply(r, n)
                }
            }, a.eventCallback = function (t, e, i, n) {
                if ("on" === (t || "").substr(0, 2)) {
                    var r = this.vars;
                    if (1 === arguments.length) return r[t];
                    null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = m(i) && i.join("").indexOf("{self}") !== -1 ? this._swapSelfInParams(i) : i, r[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, a.delay = function (t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, a.duration = function (t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, a.totalDuration = function (t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, a.time = function (t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, a.totalTime = function (t, e, i) {
                if (h || l.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (t < 0 && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var n = this._totalDuration, r = this._timeline;
                        if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline) for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                    }
                    this._gc && this._enabled(!0, !1), this._totalTime === t && 0 !== this._duration || (M.length && Z(), this.render(t, e, !1), M.length && Z())
                }
                return this
            }, a.progress = a.totalProgress = function (t, e) {
                var i = this.duration();
                return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
            }, a.startTime = function (t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, a.endTime = function (t) {
                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
            }, a.timeScale = function (t) {
                if (!arguments.length) return this._timeScale;
                if (t = t || p, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime, i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t
                }
                return this._timeScale = t, this._uncache(!1)
            }, a.reversed = function (t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, a.paused = function (t) {
                if (!arguments.length) return this._paused;
                var e, i, n = this._timeline;
                return t != this._paused && n && (h || t || l.wake(), e = n.rawTime(), i = e - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
            };
            var $ = b("core.SimpleTimeline", function (t) {
                D.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            a = $.prototype = new D, a.constructor = $, a.kill()._gc = !1, a._first = a._last = a._recent = null, a._sortChildren = !1, a.add = a.insert = function (t, e, i, n) {
                var r, s;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0),
                        t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), r = this._last, this._sortChildren) for (s = t._startTime; r && r._startTime > s;) r = r._prev;
                return r ? (t._next = r._next, r._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = r, this._recent = t, this._timeline && this._uncache(!0), this
            }, a._remove = function (t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, a.render = function (t, e, i) {
                var n, r = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; r;) n = r._next, (r._active || t >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = n
            }, a.rawTime = function () {
                return h || l.wake(), this._totalTime
            };
            var P = b("TweenLite", function (e, i, n) {
                if (D.call(this, i, n), this.render = P.prototype.render, null == e) throw"Cannot tween a null target.";
                this.target = e = "string" != typeof e ? e : P.selector(e) || e;
                var r, s, o,
                    a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                    l = this.vars.overwrite;
                if (this._overwrite = l = null == l ? W[P.defaultOverwrite] : "number" == typeof l ? l >> 0 : W[l], (a || e instanceof Array || e.push && m(e)) && "number" != typeof e[0]) for (this._targets = o = d(e), this._propLookup = [], this._siblings = [], r = 0; r < o.length; r++) s = o[r], s ? "string" != typeof s ? s.length && s !== t && s[0] && (s[0] === t || s[0].nodeType && s[0].style && !s.nodeType) ? (o.splice(r--, 1), this._targets = o = o.concat(d(s))) : (this._siblings[r] = J(s, this, !1), 1 === l && this._siblings[r].length > 1 && tt(s, this, null, 1, this._siblings[r])) : (s = o[r--] = P.selector(s), "string" == typeof s && o.splice(r + 1, 1)) : o.splice(r--, 1); else this._propLookup = {}, this._siblings = J(e, this, !1), 1 === l && this._siblings.length > 1 && tt(e, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -p, this.render(Math.min(0, -this._delay)))
            }, !0), O = function (e) {
                return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
            }, N = function (t, e) {
                var i, n = {};
                for (i in t) U[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!q[i] || q[i] && q[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                t.css = n
            };
            a = P.prototype = new D, a.constructor = P, a.kill()._gc = !1, a.ratio = 0, a._firstPT = a._targets = a._overwrittenProps = a._startAt = null, a._notifyPluginsOfEnabled = a._lazy = !1, P.version = "1.20.2", P.defaultEase = a._ease = new _(null, null, 1, 1), P.defaultOverwrite = "auto", P.ticker = l, P.autoSleep = 120, P.lagSmoothing = function (t, e) {
                l.lagSmoothing(t, e)
            }, P.selector = t.$ || t.jQuery || function (e) {
                var i = t.$ || t.jQuery;
                return i ? (P.selector = i, i(e)) : "undefined" == typeof n ? e : n.querySelectorAll ? n.querySelectorAll(e) : n.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            };
            var M = [], R = {}, I = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi, L = /[\+-]=-?[\.\d]/,
                B = function (t) {
                    for (var e, i = this._firstPT, n = 1e-6; i;) e = i.blob ? 1 === t && this.end ? this.end : t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m(e, this._target || i.t) : e < n && e > -n && !i.blob && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
                }, j = function (t, e, i, n) {
                    var r, s, o, a, l, h, c, u = [], p = 0, d = "", f = 0;
                    for (u.start = t, u.end = e, t = u[0] = t + "", e = u[1] = e + "", i && (i(u), t = u[0], e = u[1]), u.length = 0, r = t.match(I) || [], s = e.match(I) || [], n && (n._next = null, n.blob = 1, u._firstPT = u._applyPT = n), l = s.length, a = 0; a < l; a++) c = s[a], h = e.substr(p, e.indexOf(c, p) - p), d += h || !a ? h : ",", p += h.length, f ? f = (f + 1) % 5 : "rgba(" === h.substr(-5) && (f = 1), c === r[a] || r.length <= a ? d += c : (d && (u.push(d), d = ""), o = parseFloat(r[a]), u.push(o), u._firstPT = {
                        _next: u._firstPT,
                        t: u,
                        p: u.length - 1,
                        s: o,
                        c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - o) || 0,
                        f: 0,
                        m: f && f < 4 ? Math.round : 0
                    }), p += c.length;
                    return d += e.substr(p), d && u.push(d), u.setRatio = B, L.test(e) && (u.end = 0), u
                }, z = function (t, e, i, n, r, s, o, a, l) {
                    "function" == typeof n && (n = n(l || 0, t));
                    var h, c = typeof t[e],
                        u = "function" !== c ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                        p = "get" !== i ? i : u ? o ? t[u](o) : t[u]() : t[e],
                        d = "string" == typeof n && "=" === n.charAt(1), f = {
                            t: t,
                            p: e,
                            s: p,
                            f: "function" === c,
                            pg: 0,
                            n: r || e,
                            m: s ? "function" == typeof s ? s : Math.round : 0,
                            pr: 0,
                            c: d ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - p || 0
                        };
                    if (("number" != typeof p || "number" != typeof n && !d) && (o || isNaN(p) || !d && isNaN(n) || "boolean" == typeof p || "boolean" == typeof n ? (f.fp = o, h = j(p, d ? parseFloat(f.s) + f.c : n, a || P.defaultStringFilter, f), f = {
                            t: h,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 2,
                            pg: 0,
                            n: r || e,
                            pr: 0,
                            m: 0
                        }) : (f.s = parseFloat(p), d || (f.c = parseFloat(n) - f.s || 0))), f.c) return (f._next = this._firstPT) && (f._next._prev = f), this._firstPT = f, f
                }, H = P._internals = {isArray: m, isSelector: O, lazyTweens: M, blobDif: j}, q = P._plugins = {},
                X = H.tweenLookup = {}, Y = 0, U = H.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1,
                    callbackScope: 1,
                    stringFilter: 1,
                    id: 1,
                    yoyoEase: 1
                }, W = {none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, "true": 1, "false": 0},
                V = D._rootFramesTimeline = new $, G = D._rootTimeline = new $, Q = 30, Z = H.lazyRender = function () {
                    var t, e = M.length;
                    for (R = {}; --e > -1;) t = M[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                    M.length = 0
                };
            G._startTime = l.time, V._startTime = l.frame, G._active = V._active = !0, setTimeout(Z, 1), D._updateRoot = P.render = function () {
                var t, e, i;
                if (M.length && Z(), G.render((l.time - G._startTime) * G._timeScale, !1, !1), V.render((l.frame - V._startTime) * V._timeScale, !1, !1), M.length && Z(), l.frame >= Q) {
                    Q = l.frame + (parseInt(P.autoSleep, 10) || 120);
                    for (i in X) {
                        for (e = X[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete X[i]
                    }
                    if (i = G._first, (!i || i._paused) && P.autoSleep && !V._first && 1 === l._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || l.sleep()
                    }
                }
            }, l.addEventListener("tick", D._updateRoot);
            var J = function (t, e, i) {
                var n, r, s = t._gsTweenID;
                if (X[s || (t._gsTweenID = s = "t" + Y++)] || (X[s] = {
                        target: t,
                        tweens: []
                    }), e && (n = X[s].tweens, n[r = n.length] = e, i)) for (; --r > -1;) n[r] === e && n.splice(r, 1);
                return X[s].tweens
            }, K = function (t, e, i, n) {
                var r, s, o = t.vars.onOverwrite;
                return o && (r = o(t, e, i, n)), o = P.onOverwrite, o && (s = o(t, e, i, n)), r !== !1 && s !== !1
            }, tt = function (t, e, i, n, r) {
                var s, o, a, l;
                if (1 === n || n >= 4) {
                    for (l = r.length, s = 0; s < l; s++) if ((a = r[s]) !== e) a._gc || a._kill(null, t, e) && (o = !0); else if (5 === n) break;
                    return o
                }
                var h, c = e._startTime + p, u = [], d = 0, f = 0 === e._duration;
                for (s = r.length; --s > -1;) (a = r[s]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (h = h || et(e, 0, f), 0 === et(a, h, f) && (u[d++] = a)) : a._startTime <= c && a._startTime + a.totalDuration() / a._timeScale > c && ((f || !a._initted) && c - a._startTime <= 2e-10 || (u[d++] = a)));
                for (s = d; --s > -1;) if (a = u[s], 2 === n && a._kill(i, t, e) && (o = !0), 2 !== n || !a._firstPT && a._initted) {
                    if (2 !== n && !K(a, e)) continue;
                    a._enabled(!1, !1) && (o = !0)
                }
                return o
            }, et = function (t, e, i) {
                for (var n = t._timeline, r = n._timeScale, s = t._startTime; n._timeline;) {
                    if (s += n._startTime, r *= n._timeScale, n._paused) return -100;
                    n = n._timeline
                }
                return s /= r, s > e ? s - e : i && s === e || !t._initted && s - e < 2 * p ? p : (s += t.totalDuration() / t._timeScale / r) > e + p ? 0 : s - e - p
            };
            a._init = function () {
                var t, e, i, n, r, s, o = this.vars, a = this._overwrittenProps, l = this._duration,
                    h = !!o.immediateRender, c = o.ease;
                if (o.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                    for (n in o.startAt) r[n] = o.startAt[n];
                    if (r.overwrite = !1, r.immediateRender = !0, r.lazy = h && o.lazy !== !1, r.startAt = r.delay = null, r.onUpdate = o.onUpdate, r.onUpdateScope = o.onUpdateScope || o.callbackScope || this, this._startAt = P.to(this.target, 0, r), h) if (this._time > 0) this._startAt = null; else if (0 !== l) return
                } else if (o.runBackwards && 0 !== l) if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null; else {
                    0 !== this._time && (h = !1), i = {};
                    for (n in o) U[n] && "autoCSS" !== n || (i[n] = o[n]);
                    if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && o.lazy !== !1, i.immediateRender = h, this._startAt = P.to(this.target, 0, i), h) {
                        if (0 === this._time) return
                    } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                }
                if (this._ease = c = c ? c instanceof _ ? c : "function" == typeof c ? new _(c, o.easeParams) : w[c] || P.defaultEase : P.defaultEase, o.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, o.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets) for (s = this._targets.length, t = 0; t < s; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null, t) && (e = !0); else e = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
                if (e && P._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), o.runBackwards) for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = o.onUpdate, this._initted = !0
            }, a._initProps = function (e, i, n, r, s) {
                var o, a, l, h, c, u;
                if (null == e) return !1;
                R[e._gsTweenID] && Z(), this.vars.css || e.style && e !== t && e.nodeType && q.css && this.vars.autoCSS !== !1 && N(this.vars, e);
                for (o in this.vars) if (u = this.vars[o], U[o]) u && (u instanceof Array || u.push && m(u)) && u.join("").indexOf("{self}") !== -1 && (this.vars[o] = u = this._swapSelfInParams(u, this)); else if (q[o] && (h = new q[o])._onInitTween(e, this.vars[o], this, s)) {
                    for (this._firstPT = c = {
                        _next: this._firstPT,
                        t: h,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 1,
                        n: o,
                        pg: 1,
                        pr: h._priority,
                        m: 0
                    }, a = h._overwriteProps.length; --a > -1;) i[h._overwriteProps[a]] = this._firstPT;
                    (h._priority || h._onInitAllProps) && (l = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0), c._next && (c._next._prev = c)
                } else i[o] = z.call(this, e, o, "get", u, o, 0, null, this.vars.stringFilter, s);
                return r && this._kill(r, e) ? this._initProps(e, i, n, r, s) : this._overwrite > 1 && this._firstPT && n.length > 1 && tt(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, r, s)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (R[e._gsTweenID] = !0), l)
            }, a.render = function (t, e, i) {
                var n, r, s, o, a = this._time, l = this._duration, h = this._rawPrevTime;
                if (t >= l - 1e-7 && t >= 0) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (h < 0 || t <= 0 && t >= -1e-7 || h === p && "isPause" !== this.data) && h !== t && (i = !0, h > p && (r = "onReverseComplete")), this._rawPrevTime = o = !e || t || h === t ? t : p); else if (t < 1e-7) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && h > 0) && (r = "onReverseComplete", n = this._reversed), t < 0 && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (h !== p || "isPause" !== this.data) && (i = !0), this._rawPrevTime = o = !e || t || h === t ? t : p)), (!this._initted || this._startAt && this._startAt.progress()) && (i = !0); else if (this._totalTime = this._time = t, this._easeType) {
                    var c = t / l, u = this._easeType, d = this._easePower;
                    (1 === u || 3 === u && c >= .5) && (c = 1 - c), 3 === u && (c *= 2), 1 === d ? c *= c : 2 === d ? c *= c * c : 3 === d ? c *= c * c * c : 4 === d && (c *= c * c * c * c), 1 === u ? this.ratio = 1 - c : 2 === u ? this.ratio = c : t / l < .5 ? this.ratio = c / 2 : this.ratio = 1 - c / 2
                } else this.ratio = this._ease.getRatio(t / l);
                if (this._time !== a || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = h, M.push(this), void(this._lazy = [t, e]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 === this._time && 0 !== l || e || this._callback("onStart"))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                    this._onUpdate && (t < 0 && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== a || n || i) && this._callback("onUpdate")), r && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === l && this._rawPrevTime === p && o !== p && (this._rawPrevTime = 0)))
                }
            }, a._kill = function (t, e, i) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : P.selector(e) || e;
                var n, r, s, o, a, l, h, c, u,
                    p = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                if ((m(e) || O(e)) && "number" != typeof e[0]) for (n = e.length; --n > -1;) this._kill(t, e[n], i) && (l = !0); else {
                    if (this._targets) {
                        for (n = this._targets.length; --n > -1;) if (e === this._targets[n]) {
                            a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                            break
                        }
                    } else {
                        if (e !== this.target) return !1;
                        a = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (a) {
                        if (h = t || a, c = t !== r && "all" !== r && t !== a && ("object" != typeof t || !t._tempKill), i && (P.onOverwrite || this.vars.onOverwrite)) {
                            for (s in h) a[s] && (u || (u = []), u.push(s));
                            if ((u || !t) && !K(this, i, e, u)) return !1
                        }
                        for (s in h) (o = a[s]) && (p && (o.f ? o.t[o.p](o.s) : o.t[o.p] = o.s, l = !0), o.pg && o.t._kill(h) && (l = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete a[s]), c && (r[s] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return l
            }, a.invalidate = function () {
                return this._notifyPluginsOfEnabled && P._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], D.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -p, this.render(Math.min(0, -this._delay))), this
            }, a._enabled = function (t, e) {
                if (h || l.wake(), t && this._gc) {
                    var i, n = this._targets;
                    if (n) for (i = n.length; --i > -1;) this._siblings[i] = J(n[i], this, !0); else this._siblings = J(this.target, this, !0)
                }
                return D.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && P._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
            }, P.to = function (t, e, i) {
                return new P(t, e, i)
            }, P.from = function (t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new P(t, e, i)
            }, P.fromTo = function (t, e, i, n) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new P(t, e, n)
            }, P.delayedCall = function (t, e, i, n, r) {
                return new P(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    callbackScope: n,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: r,
                    overwrite: 0
                })
            }, P.set = function (t, e) {
                return new P(t, 0, e)
            }, P.getTweensOf = function (t, e) {
                if (null == t) return [];
                t = "string" != typeof t ? t : P.selector(t) || t;
                var i, n, r, s;
                if ((m(t) || O(t)) && "number" != typeof t[0]) {
                    for (i = t.length, n = []; --i > -1;) n = n.concat(P.getTweensOf(t[i], e));
                    for (i = n.length; --i > -1;) for (s = n[i], r = i; --r > -1;) s === n[r] && n.splice(i, 1)
                } else if (t._gsTweenID) for (n = J(t).concat(), i = n.length; --i > -1;) (n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
                return n || []
            }, P.killTweensOf = P.killDelayedCallsTo = function (t, e, i) {
                "object" == typeof e && (i = e, e = !1);
                for (var n = P.getTweensOf(t, e), r = n.length; --r > -1;) n[r]._kill(i, t)
            };
            var it = b("plugins.TweenPlugin", function (t, e) {
                this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = it.prototype
            }, !0);
            if (a = it.prototype, it.version = "1.19.0", it.API = 2, a._firstPT = null, a._addTween = z, a.setRatio = B, a._kill = function (t) {
                    var e, i = this._overwriteProps, n = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = []; else for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                    for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                    return !1
                }, a._mod = a._roundProps = function (t) {
                    for (var e, i = this._firstPT; i;) e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")], e && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next
                }, P._onPluginEvent = function (t, e) {
                    var i, n, r, s, o, a = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; a;) {
                            for (o = a._next, n = r; n && n.pr > a.pr;) n = n._next;
                            (a._prev = n ? n._prev : s) ? a._prev._next = a : r = a, (a._next = n) ? n._prev = a : s = a, a = o
                        }
                        a = e._firstPT = r
                    }
                    for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
                    return i
                }, it.activate = function (t) {
                    for (var e = t.length; --e > -1;) t[e].API === it.API && (q[(new t[e])._propName] = t[e]);
                    return !0
                }, y.plugin = function (t) {
                    if (!(t && t.propName && t.init && t.API)) throw"illegal plugin definition.";
                    var e, i = t.propName, n = t.priority || 0, r = t.overwriteProps, s = {
                        init: "_onInitTween",
                        set: "setRatio",
                        kill: "_kill",
                        round: "_mod",
                        mod: "_mod",
                        initAll: "_onInitAllProps"
                    }, o = b("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function () {
                        it.call(this, i, n), this._overwriteProps = r || []
                    }, t.global === !0), a = o.prototype = new it(i);
                    a.constructor = o, o.API = t.API;
                    for (e in s) "function" == typeof t[e] && (a[s[e]] = t[e]);
                    return o.version = t.version, it.activate([o]), o
                }, s = t._gsQueue) {
                for (o = 0; o < s.length; o++) s[o]();
                for (a in g) g[a].func || t.console.log("GSAP encountered missing dependency: " + a)
            }
            h = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"), function () {
        var t, e, i, n, r, s = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, o = [].indexOf || function (t) {
            for (var e = 0, i = this.length; e < i; e++) if (e in this && this[e] === t) return e;
            return -1
        };
        e = function () {
            function t() {
            }

            return t.prototype.extend = function (t, e) {
                var i, n;
                for (i in e) n = e[i], null == t[i] && (t[i] = n);
                return t
            }, t.prototype.isMobile = function (t) {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
            }, t.prototype.createEvent = function (t, e, i, n) {
                var r;
                return null == e && (e = !1), null == i && (i = !1), null == n && (n = null), null != document.createEvent ? (r = document.createEvent("CustomEvent"), r.initCustomEvent(t, e, i, n)) : null != document.createEventObject ? (r = document.createEventObject(), r.eventType = t) : r.eventName = t, r
            }, t.prototype.emitEvent = function (t, e) {
                return null != t.dispatchEvent ? t.dispatchEvent(e) : e in (null != t) ? t[e]() : "on" + e in (null != t) ? t["on" + e]() : void 0
            }, t.prototype.addEvent = function (t, e, i) {
                return null != t.addEventListener ? t.addEventListener(e, i, !1) : null != t.attachEvent ? t.attachEvent("on" + e, i) : t[e] = i
            }, t.prototype.removeEvent = function (t, e, i) {
                return null != t.removeEventListener ? t.removeEventListener(e, i, !1) : null != t.detachEvent ? t.detachEvent("on" + e, i) : delete t[e]
            }, t.prototype.innerHeight = function () {
                return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
            }, t
        }(), i = this.WeakMap || this.MozWeakMap || (i = function () {
            function t() {
                this.keys = [], this.values = []
            }

            return t.prototype.get = function (t) {
                var e, i, n, r, s;
                for (s = this.keys, e = n = 0, r = s.length; n < r; e = ++n) if (i = s[e], i === t) return this.values[e]
            }, t.prototype.set = function (t, e) {
                var i, n, r, s, o;
                for (o = this.keys, i = r = 0, s = o.length; r < s; i = ++r) if (n = o[i], n === t) return void(this.values[i] = e);
                return this.keys.push(t), this.values.push(e)
            }, t
        }()), t = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (t = function () {
            function t() {
                "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
            }

            return t.notSupported = !0, t.prototype.observe = function () {
            }, t
        }()), n = this.getComputedStyle || function (t, e) {
            return this.getPropertyValue = function (e) {
                var i;
                return "float" === e && (e = "styleFloat"), r.test(e) && e.replace(r, function (t, e) {
                    return e.toUpperCase()
                }), (null != (i = t.currentStyle) ? i[e] : void 0) || null
            }, this
        }, r = /(\-([a-z]){1})/g, this.WOW = function () {
            function r(t) {
                null == t && (t = {}), this.scrollCallback = s(this.scrollCallback, this), this.scrollHandler = s(this.scrollHandler, this), this.resetAnimation = s(this.resetAnimation, this), this.start = s(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), this.animationNameCache = new i, this.wowEvent = this.util().createEvent(this.config.boxClass)
            }

            return r.prototype.defaults = {
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: !0,
                live: !0,
                callback: null
            }, r.prototype.init = function () {
                var t;
                return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
            }, r.prototype.start = function () {
                var e, i, n, r;
                if (this.stopped = !1, this.boxes = function () {
                        var t, i, n, r;
                        for (n = this.element.querySelectorAll("." + this.config.boxClass), r = [], t = 0, i = n.length; t < i; t++) e = n[t], r.push(e);
                        return r
                    }.call(this), this.all = function () {
                        var t, i, n, r;
                        for (n = this.boxes, r = [], t = 0, i = n.length; t < i; t++) e = n[t], r.push(e);
                        return r
                    }.call(this), this.boxes.length) if (this.disabled()) this.resetStyle(); else for (r = this.boxes, i = 0, n = r.length; i < n; i++) e = r[i], this.applyStyle(e, !0);
                if (this.disabled() || (this.util().addEvent(window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live) return new t(function (t) {
                    return function (e) {
                        var i, n, r, s, o;
                        for (o = [], i = 0, n = e.length; i < n; i++) s = e[i], o.push(function () {
                            var t, e, i, n;
                            for (i = s.addedNodes || [], n = [], t = 0, e = i.length; t < e; t++) r = i[t], n.push(this.doSync(r));
                            return n
                        }.call(t));
                        return o
                    }
                }(this)).observe(document.body, {childList: !0, subtree: !0})
            }, r.prototype.stop = function () {
                if (this.stopped = !0, this.util().removeEvent(window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval) return clearInterval(this.interval)
            }, r.prototype.sync = function (e) {
                if (t.notSupported) return this.doSync(this.element)
            }, r.prototype.doSync = function (t) {
                var e, i, n, r, s;
                if (null == t && (t = this.element), 1 === t.nodeType) {
                    for (t = t.parentNode || t, r = t.querySelectorAll("." + this.config.boxClass), s = [], i = 0, n = r.length; i < n; i++) e = r[i], o.call(this.all, e) < 0 ? (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), s.push(this.scrolled = !0)) : s.push(void 0);
                    return s
                }
            }, r.prototype.show = function (t) {
                return this.applyStyle(t), t.className = t.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(t), this.util().emitEvent(t, this.wowEvent), this.util().addEvent(t, "animationend", this.resetAnimation), this.util().addEvent(t, "oanimationend", this.resetAnimation), this.util().addEvent(t, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(t, "MSAnimationEnd", this.resetAnimation), t
            }, r.prototype.applyStyle = function (t, e) {
                var i, n, r;
                return n = t.getAttribute("data-wow-duration"), i = t.getAttribute("data-wow-delay"), r = t.getAttribute("data-wow-iteration"), this.animate(function (s) {
                    return function () {
                        return s.customStyle(t, e, n, i, r)
                    }
                }(this))
            }, r.prototype.animate = function () {
                return "requestAnimationFrame" in window ? function (t) {
                    return window.requestAnimationFrame(t)
                } : function (t) {
                    return t()
                }
            }(), r.prototype.resetStyle = function () {
                var t, e, i, n, r;
                for (n = this.boxes, r = [], e = 0, i = n.length; e < i; e++) t = n[e], r.push(t.style.visibility = "visible");
                return r
            }, r.prototype.resetAnimation = function (t) {
                var e;
                if (t.type.toLowerCase().indexOf("animationend") >= 0) return e = t.target || t.srcElement, e.className = e.className.replace(this.config.animateClass, "").trim()
            }, r.prototype.customStyle = function (t, e, i, n, r) {
                return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", i && this.vendorSet(t.style, {animationDuration: i}), n && this.vendorSet(t.style, {animationDelay: n}), r && this.vendorSet(t.style, {animationIterationCount: r}), this.vendorSet(t.style, {animationName: e ? "none" : this.cachedAnimationName(t)}), t
            }, r.prototype.vendors = ["moz", "webkit"], r.prototype.vendorSet = function (t, e) {
                var i, n, r, s;
                n = [];
                for (i in e) r = e[i], t["" + i] = r, n.push(function () {
                    var e, n, o, a;
                    for (o = this.vendors, a = [], e = 0, n = o.length; e < n; e++) s = o[e], a.push(t["" + s + i.charAt(0).toUpperCase() + i.substr(1)] = r);
                    return a
                }.call(this));
                return n
            }, r.prototype.vendorCSS = function (t, e) {
                var i, r, s, o, a, l;
                for (a = n(t), o = a.getPropertyCSSValue(e), s = this.vendors, i = 0, r = s.length; i < r; i++) l = s[i], o = o || a.getPropertyCSSValue("-" + l + "-" + e);
                return o
            }, r.prototype.animationName = function (t) {
                var e;
                try {
                    e = this.vendorCSS(t, "animation-name").cssText
                } catch (i) {
                    e = n(t).getPropertyValue("animation-name")
                }
                return "none" === e ? "" : e
            }, r.prototype.cacheAnimationName = function (t) {
                return this.animationNameCache.set(t, this.animationName(t))
            }, r.prototype.cachedAnimationName = function (t) {
                return this.animationNameCache.get(t)
            }, r.prototype.scrollHandler = function () {
                return this.scrolled = !0
            }, r.prototype.scrollCallback = function () {
                var t;
                if (this.scrolled && (this.scrolled = !1, this.boxes = function () {
                        var e, i, n, r;
                        for (n = this.boxes, r = [], e = 0, i = n.length; e < i; e++) t = n[e], t && (this.isVisible(t) ? this.show(t) : r.push(t));
                        return r
                    }.call(this), !this.boxes.length && !this.config.live)) return this.stop()
            }, r.prototype.offsetTop = function (t) {
                for (var e; void 0 === t.offsetTop;) t = t.parentNode;
                for (e = t.offsetTop; t = t.offsetParent;) e += t.offsetTop;
                return e
            }, r.prototype.isVisible = function (t) {
                var e, i, n, r, s;
                return i = t.getAttribute("data-wow-offset") || this.config.offset, s = window.pageYOffset, r = s + Math.min(this.element.clientHeight, this.util().innerHeight()) - i, n = this.offsetTop(t), e = n + t.clientHeight, n <= r && e >= s
            }, r.prototype.util = function () {
                return null != this._util ? this._util : this._util = new e
            }, r.prototype.disabled = function () {
                return !this.config.mobile && this.util().isMobile(navigator.userAgent)
            }, r
        }()
    }.call(this), function (t) {
        if ("object" == typeof exports && "undefined" != typeof module) module.exports = t(); else if ("function" == typeof define && define.amd) define([], t); else {
            var e;
            e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, e.Router = t()
        }
    }(function () {
        var define, module, exports;
        return function t(e, i, n) {
            function r(o, a) {
                if (!i[o]) {
                    if (!e[o]) {
                        var l = "function" == typeof require && require;
                        if (!a && l) return l(o, !0);
                        if (s) return s(o, !0);
                        var h = new Error("Cannot find module '" + o + "'");
                        throw h.code = "MODULE_NOT_FOUND", h
                    }
                    var c = i[o] = {exports: {}};
                    e[o][0].call(c.exports, function (t) {
                        var i = e[o][1][t];
                        return r(i ? i : t)
                    }, c, c.exports, t, e, i, n)
                }
                return i[o].exports
            }

            for (var s = "function" == typeof require && require, o = 0; o < n.length; o++) r(n[o]);
            return r
        }({
            1: [function (require, module, exports) {
                "object" != typeof JSON && (JSON = {}), function () {
                    "use strict";

                    function f(t) {
                        return t < 10 ? "0" + t : t
                    }

                    function quote(t) {
                        return escapable.lastIndex = 0, escapable.test(t) ? '"' + t.replace(escapable, function (t) {
                            var e = meta[t];
                            return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
                        }) + '"' : '"' + t + '"'
                    }

                    function str(t, e) {
                        var i, n, r, s, o, a = gap, l = e[t];
                        switch (l && "object" == typeof l && "function" == typeof l.toJSON && (l = l.toJSON(t)), "function" == typeof rep && (l = rep.call(e, t, l)), typeof l) {
                            case"string":
                                return quote(l);
                            case"number":
                                return isFinite(l) ? String(l) : "null";
                            case"boolean":
                            case"null":
                                return String(l);
                            case"object":
                                if (!l) return "null";
                                if (gap += indent, o = [], "[object Array]" === Object.prototype.toString.apply(l)) {
                                    for (s = l.length, i = 0; i < s; i += 1) o[i] = str(i, l) || "null";
                                    return r = 0 === o.length ? "[]" : gap ? "[\n" + gap + o.join(",\n" + gap) + "\n" + a + "]" : "[" + o.join(",") + "]", gap = a, r
                                }
                                if (rep && "object" == typeof rep) for (s = rep.length, i = 0; i < s; i += 1) "string" == typeof rep[i] && (n = rep[i], r = str(n, l), r && o.push(quote(n) + (gap ? ": " : ":") + r)); else for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (r = str(n, l), r && o.push(quote(n) + (gap ? ": " : ":") + r));
                                return r = 0 === o.length ? "{}" : gap ? "{\n" + gap + o.join(",\n" + gap) + "\n" + a + "}" : "{" + o.join(",") + "}", gap = a, r
                        }
                    }

                    "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function (t) {
                        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
                    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (t) {
                        return this.valueOf()
                    });
                    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                        gap, indent, meta = {
                            "\b": "\\b",
                            "\t": "\\t",
                            "\n": "\\n",
                            "\f": "\\f",
                            "\r": "\\r",
                            '"': '\\"',
                            "\\": "\\\\"
                        }, rep;
                    "function" != typeof JSON.stringify && (JSON.stringify = function (t, e, i) {
                        var n;
                        if (gap = "", indent = "", "number" == typeof i) for (n = 0; n < i; n += 1) indent += " "; else "string" == typeof i && (indent = i);
                        if (rep = e, !e || "function" == typeof e || "object" == typeof e && "number" == typeof e.length) return str("", {"": t});
                        throw new Error("JSON.stringify")
                    }), "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) {
                        function walk(t, e) {
                            var i, n, r = t[e];
                            if (r && "object" == typeof r) for (i in r) Object.prototype.hasOwnProperty.call(r, i) && (n = walk(r, i), void 0 !== n ? r[i] = n : delete r[i]);
                            return reviver.call(t, e, r)
                        }

                        var j;
                        if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (t) {
                                return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
                            })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({"": j}, "") : j;
                        throw new SyntaxError("JSON.parse")
                    })
                }(), function (t, e) {
                    "use strict";
                    var i = t.History = t.History || {};
                    if ("undefined" != typeof i.Adapter) throw new Error("History.js Adapter has already been loaded...");
                    i.Adapter = {
                        handlers: {}, _uid: 1, uid: function (t) {
                            return t._uid || (t._uid = i.Adapter._uid++)
                        }, bind: function (t, e, n) {
                            var r = i.Adapter.uid(t);
                            i.Adapter.handlers[r] = i.Adapter.handlers[r] || {}, i.Adapter.handlers[r][e] = i.Adapter.handlers[r][e] || [], i.Adapter.handlers[r][e].push(n), t["on" + e] = function (t, e) {
                                return function (n) {
                                    i.Adapter.trigger(t, e, n)
                                }
                            }(t, e)
                        }, trigger: function (t, e, n) {
                            n = n || {};
                            var r, s, o = i.Adapter.uid(t);
                            for (i.Adapter.handlers[o] = i.Adapter.handlers[o] || {}, i.Adapter.handlers[o][e] = i.Adapter.handlers[o][e] || [], r = 0, s = i.Adapter.handlers[o][e].length; r < s; ++r) i.Adapter.handlers[o][e][r].apply(this, [n])
                        }, extractEventData: function (t, i) {
                            var n = i && i[t] || e;
                            return n
                        }, onDomLoad: function (e) {
                            var i = t.setTimeout(function () {
                                e()
                            }, 2e3);
                            t.onload = function () {
                                clearTimeout(i), e()
                            }
                        }
                    }, "undefined" != typeof i.init && i.init()
                }(window), function (t, e) {
                    "use strict";
                    var i = t.document, n = t.setTimeout || n, r = t.clearTimeout || r, s = t.setInterval || s,
                        o = t.History = t.History || {};
                    if ("undefined" != typeof o.initHtml4) throw new Error("History.js HTML4 Support has already been loaded...");
                    o.initHtml4 = function () {
                        return "undefined" == typeof o.initHtml4.initialized && (o.initHtml4.initialized = !0, o.enabled = !0, o.savedHashes = [], o.isLastHash = function (t) {
                            var e, i = o.getHashByIndex();
                            return e = t === i
                        }, o.isHashEqual = function (t, e) {
                            return t = encodeURIComponent(t).replace(/%25/g, "%"), e = encodeURIComponent(e).replace(/%25/g, "%"), t === e
                        }, o.saveHash = function (t) {
                            return !o.isLastHash(t) && (o.savedHashes.push(t), !0)
                        }, o.getHashByIndex = function (t) {
                            var e = null;
                            return e = "undefined" == typeof t ? o.savedHashes[o.savedHashes.length - 1] : t < 0 ? o.savedHashes[o.savedHashes.length + t] : o.savedHashes[t]
                        }, o.discardedHashes = {}, o.discardedStates = {}, o.discardState = function (t, e, i) {
                            var n, r = o.getHashByState(t);
                            return n = {discardedState: t, backState: i, forwardState: e}, o.discardedStates[r] = n, !0
                        }, o.discardHash = function (t, e, i) {
                            var n = {discardedHash: t, backState: i, forwardState: e};
                            return o.discardedHashes[t] = n, !0
                        }, o.discardedState = function (t) {
                            var e, i = o.getHashByState(t);
                            return e = o.discardedStates[i] || !1
                        }, o.discardedHash = function (t) {
                            var e = o.discardedHashes[t] || !1;
                            return e
                        }, o.recycleState = function (t) {
                            var e = o.getHashByState(t);
                            return o.discardedState(t) && delete o.discardedStates[e], !0
                        }, o.emulated.hashChange && (o.hashChangeInit = function () {
                            o.checkerFunction = null;
                            var e, n, r, a, l = "", h = Boolean(o.getHash());
                            return o.isInternetExplorer() ? (e = "historyjs-iframe", n = i.createElement("iframe"), n.setAttribute("id", e), n.setAttribute("src", "#"), n.style.display = "none", i.body.appendChild(n), n.contentWindow.document.open(),
                                n.contentWindow.document.close(), r = "", a = !1, o.checkerFunction = function () {
                                if (a) return !1;
                                a = !0;
                                var e = o.getHash(), i = o.getHash(n.contentWindow.document);
                                return e !== l ? (l = e, i !== e && (r = i = e, n.contentWindow.document.open(), n.contentWindow.document.close(), n.contentWindow.document.location.hash = o.escapeHash(e)), o.Adapter.trigger(t, "hashchange")) : i !== r && (r = i, h && "" === i ? o.back() : o.setHash(i, !1)), a = !1, !0
                            }) : o.checkerFunction = function () {
                                var e = o.getHash() || "";
                                return e !== l && (l = e, o.Adapter.trigger(t, "hashchange")), !0
                            }, o.intervalList.push(s(o.checkerFunction, o.options.hashChangeInterval)), !0
                        }, o.Adapter.onDomLoad(o.hashChangeInit)), o.emulated.pushState && (o.onHashChange = function (e) {
                            var i, n = e && e.newURL || o.getLocationHref(), r = o.getHashByUrl(n), s = null, a = null;
                            return o.isLastHash(r) ? (o.busy(!1), !1) : (o.doubleCheckComplete(), o.saveHash(r), r && o.isTraditionalAnchor(r) ? (o.Adapter.trigger(t, "anchorchange"), o.busy(!1), !1) : (s = o.extractState(o.getFullUrl(r || o.getLocationHref()), !0), o.isLastSavedState(s) ? (o.busy(!1), !1) : (a = o.getHashByState(s), i = o.discardedState(s), i ? (o.getHashByIndex(-2) === o.getHashByState(i.forwardState) ? o.back(!1) : o.forward(!1), !1) : (o.pushState(s.data, s.title, encodeURI(s.url), !1), !0))))
                        }, o.Adapter.bind(t, "hashchange", o.onHashChange), o.pushState = function (e, i, n, r) {
                            if (n = encodeURI(n).replace(/%25/g, "%"), o.getHashByUrl(n)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
                            if (r !== !1 && o.busy()) return o.pushQueue({
                                scope: o,
                                callback: o.pushState,
                                args: arguments,
                                queue: r
                            }), !1;
                            o.busy(!0);
                            var s = o.createStateObject(e, i, n), a = o.getHashByState(s), l = o.getState(!1),
                                h = o.getHashByState(l), c = o.getHash(), u = o.expectedStateId == s.id;
                            return o.storeState(s), o.expectedStateId = s.id, o.recycleState(s), o.setTitle(s), a === h ? (o.busy(!1), !1) : (o.saveState(s), u || o.Adapter.trigger(t, "statechange"), !o.isHashEqual(a, c) && !o.isHashEqual(a, o.getShortUrl(o.getLocationHref())) && o.setHash(a, !1), o.busy(!1), !0)
                        }, o.replaceState = function (e, i, n, r) {
                            if (n = encodeURI(n).replace(/%25/g, "%"), o.getHashByUrl(n)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
                            if (r !== !1 && o.busy()) return o.pushQueue({
                                scope: o,
                                callback: o.replaceState,
                                args: arguments,
                                queue: r
                            }), !1;
                            o.busy(!0);
                            var s = o.createStateObject(e, i, n), a = o.getHashByState(s), l = o.getState(!1),
                                h = o.getHashByState(l), c = o.getStateByIndex(-2);
                            return o.discardState(l, s, c), a === h ? (o.storeState(s), o.expectedStateId = s.id, o.recycleState(s), o.setTitle(s), o.saveState(s), o.Adapter.trigger(t, "statechange"), o.busy(!1)) : o.pushState(s.data, s.title, s.url, !1), !0
                        }), o.emulated.pushState && o.getHash() && !o.emulated.hashChange && o.Adapter.onDomLoad(function () {
                            o.Adapter.trigger(t, "hashchange")
                        }), void 0)
                    }, "undefined" != typeof o.init && o.init()
                }(window), function (t, e) {
                    "use strict";
                    var i = t.console || e, n = t.document, r = t.navigator, s = !1, o = t.setTimeout,
                        a = t.clearTimeout, l = t.setInterval, h = t.clearInterval, c = t.JSON, u = t.alert,
                        p = t.History = t.History || {}, d = t.history;
                    try {
                        s = t.sessionStorage, s.setItem("TEST", "1"), s.removeItem("TEST")
                    } catch (f) {
                        s = !1
                    }
                    if (c.stringify = c.stringify || c.encode, c.parse = c.parse || c.decode, "undefined" != typeof p.init) throw new Error("History.js Core has already been loaded...");
                    p.init = function (t) {
                        return "undefined" != typeof p.Adapter && ("undefined" != typeof p.initCore && p.initCore(), "undefined" != typeof p.initHtml4 && p.initHtml4(), !0)
                    }, p.initCore = function (f) {
                        if ("undefined" != typeof p.initCore.initialized) return !1;
                        if (p.initCore.initialized = !0, p.options = p.options || {}, p.options.hashChangeInterval = p.options.hashChangeInterval || 100, p.options.safariPollInterval = p.options.safariPollInterval || 500, p.options.doubleCheckInterval = p.options.doubleCheckInterval || 500, p.options.disableSuid = p.options.disableSuid || !1, p.options.storeInterval = p.options.storeInterval || 1e3, p.options.busyDelay = p.options.busyDelay || 250, p.options.debug = p.options.debug || !1, p.options.initialTitle = p.options.initialTitle || n.title, p.options.html4Mode = p.options.html4Mode || !1, p.options.delayInit = p.options.delayInit || !1, p.intervalList = [], p.clearAllIntervals = function () {
                                var t, e = p.intervalList;
                                if ("undefined" != typeof e && null !== e) {
                                    for (t = 0; t < e.length; t++) h(e[t]);
                                    p.intervalList = null
                                }
                            }, p.debug = function () {
                                (p.options.debug || !1) && p.log.apply(p, arguments)
                            }, p.log = function () {
                                var t, e, r, s, o,
                                    a = "undefined" != typeof i && "undefined" != typeof i.log && "undefined" != typeof i.log.apply,
                                    l = n.getElementById("log");
                                for (a ? (s = Array.prototype.slice.call(arguments), t = s.shift(), "undefined" != typeof i.debug ? i.debug.apply(i, [t, s]) : i.log.apply(i, [t, s])) : t = "\n" + arguments[0] + "\n", e = 1, r = arguments.length; e < r; ++e) {
                                    if (o = arguments[e], "object" == typeof o && "undefined" != typeof c) try {
                                        o = c.stringify(o)
                                    } catch (h) {
                                    }
                                    t += "\n" + o + "\n"
                                }
                                return l ? (l.value += t + "\n-----\n", l.scrollTop = l.scrollHeight - l.clientHeight) : a || u(t), !0
                            }, p.getInternetExplorerMajorVersion = function () {
                                var t = p.getInternetExplorerMajorVersion.cached = "undefined" != typeof p.getInternetExplorerMajorVersion.cached ? p.getInternetExplorerMajorVersion.cached : function () {
                                    for (var t = 3, e = n.createElement("div"), i = e.getElementsByTagName("i"); (e.innerHTML = "<!--[if gt IE " + ++t + "]><i></i><![endif]-->") && i[0];) ;
                                    return t > 4 && t
                                }();
                                return t
                            }, p.isInternetExplorer = function () {
                                var t = p.isInternetExplorer.cached = "undefined" != typeof p.isInternetExplorer.cached ? p.isInternetExplorer.cached : Boolean(p.getInternetExplorerMajorVersion());
                                return t
                            }, p.options.html4Mode ? p.emulated = {
                                pushState: !0,
                                hashChange: !0
                            } : p.emulated = {
                                pushState: !Boolean(t.history && t.history.pushState && t.history.replaceState && !/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(r.userAgent) && !/AppleWebKit\/5([0-2]|3[0-2])/i.test(r.userAgent)),
                                hashChange: Boolean(!("onhashchange" in t || "onhashchange" in n) || p.isInternetExplorer() && p.getInternetExplorerMajorVersion() < 8)
                            }, p.enabled = !p.emulated.pushState, p.bugs = {
                                setHash: Boolean(!p.emulated.pushState && "Apple Computer, Inc." === r.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(r.userAgent)),
                                safariPoll: Boolean(!p.emulated.pushState && "Apple Computer, Inc." === r.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(r.userAgent)),
                                ieDoubleCheck: Boolean(p.isInternetExplorer() && p.getInternetExplorerMajorVersion() < 8),
                                hashEscape: Boolean(p.isInternetExplorer() && p.getInternetExplorerMajorVersion() < 7)
                            }, p.isEmptyObject = function (t) {
                                for (var e in t) if (t.hasOwnProperty(e)) return !1;
                                return !0
                            }, p.cloneObject = function (t) {
                                var e, i;
                                return t ? (e = c.stringify(t), i = c.parse(e)) : i = {}, i
                            }, p.getRootUrl = function () {
                                var t = n.location.protocol + "//" + (n.location.hostname || n.location.host);
                                return n.location.port && (t += ":" + n.location.port), t += "/"
                            }, p.getBaseHref = function () {
                                var t = n.getElementsByTagName("base"), e = null, i = "";
                                return 1 === t.length && (e = t[0], i = e.href.replace(/[^\/]+$/, "")), i = i.replace(/\/+$/, ""), i && (i += "/"), i
                            }, p.getBaseUrl = function () {
                                var t = p.getBaseHref() || p.getBasePageUrl() || p.getRootUrl();
                                return t
                            }, p.getPageUrl = function () {
                                var t, e = p.getState(!1, !1), i = (e || {}).url || p.getLocationHref();
                                return t = i.replace(/\/+$/, "").replace(/[^\/]+$/, function (t, e, i) {
                                    return /\./.test(t) ? t : t + "/"
                                })
                            }, p.getBasePageUrl = function () {
                                var t = p.getLocationHref().replace(/[#\?].*/, "").replace(/[^\/]+$/, function (t, e, i) {
                                    return /[^\/]$/.test(t) ? "" : t
                                }).replace(/\/+$/, "") + "/";
                                return t
                            }, p.getFullUrl = function (t, e) {
                                var i = t, n = t.substring(0, 1);
                                return e = "undefined" == typeof e || e, /[a-z]+\:\/\//.test(t) || (i = "/" === n ? p.getRootUrl() + t.replace(/^\/+/, "") : "#" === n ? p.getPageUrl().replace(/#.*/, "") + t : "?" === n ? p.getPageUrl().replace(/[\?#].*/, "") + t : e ? p.getBaseUrl() + t.replace(/^(\.\/)+/, "") : p.getBasePageUrl() + t.replace(/^(\.\/)+/, "")), i.replace(/\#$/, "")
                            }, p.getShortUrl = function (t) {
                                var e = t, i = p.getBaseUrl(), n = p.getRootUrl();
                                return p.emulated.pushState && (e = e.replace(i, "")), e = e.replace(n, "/"), p.isTraditionalAnchor(e) && (e = "./" + e), e = e.replace(/^(\.\/)+/g, "./").replace(/\#$/, "")
                            }, p.getLocationHref = function (t) {
                                return t = t || n, t.URL === t.location.href ? t.location.href : t.location.href === decodeURIComponent(t.URL) ? t.URL : t.location.hash && decodeURIComponent(t.location.href.replace(/^[^#]+/, "")) === t.location.hash ? t.location.href : t.URL.indexOf("#") == -1 && t.location.href.indexOf("#") != -1 ? t.location.href : t.URL || t.location.href
                            }, p.store = {}, p.idToState = p.idToState || {}, p.stateToId = p.stateToId || {}, p.urlToId = p.urlToId || {}, p.storedStates = p.storedStates || [], p.savedStates = p.savedStates || [], p.normalizeStore = function () {
                                p.store.idToState = p.store.idToState || {}, p.store.urlToId = p.store.urlToId || {}, p.store.stateToId = p.store.stateToId || {}
                            }, p.getState = function (t, e) {
                                "undefined" == typeof t && (t = !0), "undefined" == typeof e && (e = !0);
                                var i = p.getLastSavedState();
                                return !i && e && (i = p.createStateObject()), t && (i = p.cloneObject(i), i.url = i.cleanUrl || i.url), i
                            }, p.getIdByState = function (t) {
                                var e, i = p.extractId(t.url);
                                if (!i) if (e = p.getStateString(t), "undefined" != typeof p.stateToId[e]) i = p.stateToId[e]; else if ("undefined" != typeof p.store.stateToId[e]) i = p.store.stateToId[e]; else {
                                    for (; i = (new Date).getTime() + String(Math.random()).replace(/\D/g, ""), "undefined" != typeof p.idToState[i] || "undefined" != typeof p.store.idToState[i];) ;
                                    p.stateToId[e] = i, p.idToState[i] = t
                                }
                                return i
                            }, p.normalizeState = function (t) {
                                var e, i;
                                return t && "object" == typeof t || (t = {}), "undefined" != typeof t.normalized ? t : (t.data && "object" == typeof t.data || (t.data = {}), e = {}, e.normalized = !0, e.title = t.title || "", e.url = p.getFullUrl(t.url ? t.url : p.getLocationHref()), e.hash = p.getShortUrl(e.url), e.data = p.cloneObject(t.data), e.id = p.getIdByState(e), e.cleanUrl = e.url.replace(/\??\&_suid.*/, ""), e.url = e.cleanUrl, i = !p.isEmptyObject(e.data), (e.title || i) && p.options.disableSuid !== !0 && (e.hash = p.getShortUrl(e.url).replace(/\??\&_suid.*/, ""), /\?/.test(e.hash) || (e.hash += "?"), e.hash += "&_suid=" + e.id), e.hashedUrl = p.getFullUrl(e.hash), (p.emulated.pushState || p.bugs.safariPoll) && p.hasUrlDuplicate(e) && (e.url = e.hashedUrl), e)
                            }, p.createStateObject = function (t, e, i) {
                                var n = {data: t, title: e, url: i};
                                return n = p.normalizeState(n)
                            }, p.getStateById = function (t) {
                                t = String(t);
                                var i = p.idToState[t] || p.store.idToState[t] || e;
                                return i
                            }, p.getStateString = function (t) {
                                var e, i, n;
                                return e = p.normalizeState(t), i = {
                                    data: e.data,
                                    title: t.title,
                                    url: t.url
                                }, n = c.stringify(i)
                            }, p.getStateId = function (t) {
                                var e, i;
                                return e = p.normalizeState(t), i = e.id
                            }, p.getHashByState = function (t) {
                                var e, i;
                                return e = p.normalizeState(t), i = e.hash
                            }, p.extractId = function (t) {
                                var e, i, n, r;
                                return r = t.indexOf("#") != -1 ? t.split("#")[0] : t, i = /(.*)\&_suid=([0-9]+)$/.exec(r), n = i ? i[1] || t : t, e = i ? String(i[2] || "") : "", e || !1
                            }, p.isTraditionalAnchor = function (t) {
                                var e = !/[\/\?\.]/.test(t);
                                return e
                            }, p.extractState = function (t, e) {
                                var i, n, r = null;
                                return e = e || !1, i = p.extractId(t), i && (r = p.getStateById(i)), r || (n = p.getFullUrl(t), i = p.getIdByUrl(n) || !1, i && (r = p.getStateById(i)), !r && e && !p.isTraditionalAnchor(t) && (r = p.createStateObject(null, null, n))), r
                            }, p.getIdByUrl = function (t) {
                                var i = p.urlToId[t] || p.store.urlToId[t] || e;
                                return i
                            }, p.getLastSavedState = function () {
                                return p.savedStates[p.savedStates.length - 1] || e
                            }, p.getLastStoredState = function () {
                                return p.storedStates[p.storedStates.length - 1] || e
                            }, p.hasUrlDuplicate = function (t) {
                                var e, i = !1;
                                return e = p.extractState(t.url), i = e && e.id !== t.id
                            }, p.storeState = function (t) {
                                return p.urlToId[t.url] = t.id, p.storedStates.push(p.cloneObject(t)), t
                            }, p.isLastSavedState = function (t) {
                                var e, i, n, r = !1;
                                return p.savedStates.length && (e = t.id, i = p.getLastSavedState(), n = i.id, r = e === n), r
                            }, p.saveState = function (t) {
                                return !p.isLastSavedState(t) && (p.savedStates.push(p.cloneObject(t)), !0)
                            }, p.getStateByIndex = function (t) {
                                var e = null;
                                return e = "undefined" == typeof t ? p.savedStates[p.savedStates.length - 1] : t < 0 ? p.savedStates[p.savedStates.length + t] : p.savedStates[t]
                            }, p.getCurrentIndex = function () {
                                var t = null;
                                return t = p.savedStates.length < 1 ? 0 : p.savedStates.length - 1
                            }, p.getHash = function (t) {
                                var e, i = p.getLocationHref(t);
                                return e = p.getHashByUrl(i)
                            }, p.unescapeHash = function (t) {
                                var e = p.normalizeHash(t);
                                return e = decodeURIComponent(e)
                            }, p.normalizeHash = function (t) {
                                var e = t.replace(/[^#]*#/, "").replace(/#.*/, "");
                                return e
                            }, p.setHash = function (t, e) {
                                var i, r;
                                return e !== !1 && p.busy() ? (p.pushQueue({
                                    scope: p,
                                    callback: p.setHash,
                                    args: arguments,
                                    queue: e
                                }), !1) : (p.busy(!0), i = p.extractState(t, !0), i && !p.emulated.pushState ? p.pushState(i.data, i.title, i.url, !1) : p.getHash() !== t && (p.bugs.setHash ? (r = p.getPageUrl(), p.pushState(null, null, r + "#" + t, !1)) : n.location.hash = t), p)
                            }, p.escapeHash = function (e) {
                                var i = p.normalizeHash(e);
                                return i = t.encodeURIComponent(i), p.bugs.hashEscape || (i = i.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")), i
                            }, p.getHashByUrl = function (t) {
                                var e = String(t).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
                                return e = p.unescapeHash(e)
                            }, p.setTitle = function (t) {
                                var e, i = t.title;
                                i || (e = p.getStateByIndex(0), e && e.url === t.url && (i = e.title || p.options.initialTitle));
                                try {
                                    n.getElementsByTagName("title")[0].innerHTML = i.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
                                } catch (r) {
                                }
                                return n.title = i, p
                            }, p.queues = [], p.busy = function (t) {
                                if ("undefined" != typeof t ? p.busy.flag = t : "undefined" == typeof p.busy.flag && (p.busy.flag = !1), !p.busy.flag) {
                                    a(p.busy.timeout);
                                    var e = function () {
                                        var t, i, n;
                                        if (!p.busy.flag) for (t = p.queues.length - 1; t >= 0; --t) i = p.queues[t], 0 !== i.length && (n = i.shift(), p.fireQueueItem(n), p.busy.timeout = o(e, p.options.busyDelay))
                                    };
                                    p.busy.timeout = o(e, p.options.busyDelay)
                                }
                                return p.busy.flag
                            }, p.busy.flag = !1, p.fireQueueItem = function (t) {
                                return t.callback.apply(t.scope || p, t.args || [])
                            }, p.pushQueue = function (t) {
                                return p.queues[t.queue || 0] = p.queues[t.queue || 0] || [], p.queues[t.queue || 0].push(t), p
                            }, p.queue = function (t, e) {
                                return "function" == typeof t && (t = {callback: t}), "undefined" != typeof e && (t.queue = e), p.busy() ? p.pushQueue(t) : p.fireQueueItem(t), p
                            }, p.clearQueue = function () {
                                return p.busy.flag = !1, p.queues = [], p
                            }, p.stateChanged = !1, p.doubleChecker = !1, p.doubleCheckComplete = function () {
                                return p.stateChanged = !0, p.doubleCheckClear(), p
                            }, p.doubleCheckClear = function () {
                                return p.doubleChecker && (a(p.doubleChecker), p.doubleChecker = !1), p
                            }, p.doubleCheck = function (t) {
                                return p.stateChanged = !1, p.doubleCheckClear(), p.bugs.ieDoubleCheck && (p.doubleChecker = o(function () {
                                    return p.doubleCheckClear(), p.stateChanged || t(), !0
                                }, p.options.doubleCheckInterval)), p
                            }, p.safariStatePoll = function () {
                                var e, i = p.extractState(p.getLocationHref());
                                if (!p.isLastSavedState(i)) return e = i, e || (e = p.createStateObject()), p.Adapter.trigger(t, "popstate"), p
                            }, p.back = function (t) {
                                return t !== !1 && p.busy() ? (p.pushQueue({
                                    scope: p,
                                    callback: p.back,
                                    args: arguments,
                                    queue: t
                                }), !1) : (p.busy(!0), p.doubleCheck(function () {
                                    p.back(!1)
                                }), d.go(-1), !0)
                            }, p.forward = function (t) {
                                return t !== !1 && p.busy() ? (p.pushQueue({
                                    scope: p,
                                    callback: p.forward,
                                    args: arguments,
                                    queue: t
                                }), !1) : (p.busy(!0), p.doubleCheck(function () {
                                    p.forward(!1)
                                }), d.go(1), !0)
                            }, p.go = function (t, e) {
                                var i;
                                if (t > 0) for (i = 1; i <= t; ++i) p.forward(e); else {
                                    if (!(t < 0)) throw new Error("History.go: History.go requires a positive or negative integer passed.");
                                    for (i = -1; i >= t; --i) p.back(e)
                                }
                                return p
                            }, p.emulated.pushState) {
                            var m = function () {
                            };
                            p.pushState = p.pushState || m, p.replaceState = p.replaceState || m
                        } else p.onPopState = function (e, i) {
                            var n, r, s = !1, o = !1;
                            return p.doubleCheckComplete(), n = p.getHash(), n ? (r = p.extractState(n || p.getLocationHref(), !0), r ? p.replaceState(r.data, r.title, r.url, !1) : (p.Adapter.trigger(t, "anchorchange"), p.busy(!1)), p.expectedStateId = !1, !1) : (s = p.Adapter.extractEventData("state", e, i) || !1, o = s ? p.getStateById(s) : p.expectedStateId ? p.getStateById(p.expectedStateId) : p.extractState(p.getLocationHref()), o || (o = p.createStateObject(null, null, p.getLocationHref())), p.expectedStateId = !1, p.isLastSavedState(o) ? (p.busy(!1), !1) : (p.storeState(o), p.saveState(o), p.setTitle(o), p.Adapter.trigger(t, "statechange"), p.busy(!1), !0))
                        }, p.Adapter.bind(t, "popstate", p.onPopState), p.pushState = function (e, i, n, r) {
                            if (p.getHashByUrl(n) && p.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                            if (r !== !1 && p.busy()) return p.pushQueue({
                                scope: p,
                                callback: p.pushState,
                                args: arguments,
                                queue: r
                            }), !1;
                            p.busy(!0);
                            var s = p.createStateObject(e, i, n);
                            return p.isLastSavedState(s) ? p.busy(!1) : (p.storeState(s), p.expectedStateId = s.id, d.pushState(s.id, s.title, s.url), p.Adapter.trigger(t, "popstate")), !0
                        }, p.replaceState = function (e, i, n, r) {
                            if (p.getHashByUrl(n) && p.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                            if (r !== !1 && p.busy()) return p.pushQueue({
                                scope: p,
                                callback: p.replaceState,
                                args: arguments,
                                queue: r
                            }), !1;
                            p.busy(!0);
                            var s = p.createStateObject(e, i, n);
                            return p.isLastSavedState(s) ? p.busy(!1) : (p.storeState(s), p.expectedStateId = s.id, d.replaceState(s.id, s.title, s.url), p.Adapter.trigger(t, "popstate")), !0
                        };
                        if (s) {
                            try {
                                p.store = c.parse(s.getItem("History.store")) || {}
                            } catch (g) {
                                p.store = {}
                            }
                            p.normalizeStore()
                        } else p.store = {}, p.normalizeStore();
                        p.Adapter.bind(t, "unload", p.clearAllIntervals), p.saveState(p.storeState(p.extractState(p.getLocationHref(), !0))), s && (p.onUnload = function () {
                            var t, e, i;
                            try {
                                t = c.parse(s.getItem("History.store")) || {}
                            } catch (n) {
                                t = {}
                            }
                            t.idToState = t.idToState || {}, t.urlToId = t.urlToId || {}, t.stateToId = t.stateToId || {};
                            for (e in p.idToState) p.idToState.hasOwnProperty(e) && (t.idToState[e] = p.idToState[e]);
                            for (e in p.urlToId) p.urlToId.hasOwnProperty(e) && (t.urlToId[e] = p.urlToId[e]);
                            for (e in p.stateToId) p.stateToId.hasOwnProperty(e) && (t.stateToId[e] = p.stateToId[e]);
                            p.store = t, p.normalizeStore(), i = c.stringify(t);
                            try {
                                s.setItem("History.store", i)
                            } catch (r) {
                                if (r.code !== DOMException.QUOTA_EXCEEDED_ERR) throw r;
                                s.length && (s.removeItem("History.store"), s.setItem("History.store", i))
                            }
                        }, p.intervalList.push(l(p.onUnload, p.options.storeInterval)), p.Adapter.bind(t, "beforeunload", p.onUnload), p.Adapter.bind(t, "unload", p.onUnload)), p.emulated.pushState || (p.bugs.safariPoll && p.intervalList.push(l(p.safariStatePoll, p.options.safariPollInterval)), "Apple Computer, Inc." !== r.vendor && "Mozilla" !== (r.appCodeName || "") || (p.Adapter.bind(t, "hashchange", function () {
                            p.Adapter.trigger(t, "popstate")
                        }), p.getHash() && p.Adapter.onDomLoad(function () {
                            p.Adapter.trigger(t, "hashchange")
                        })))
                    }, (!p.options || !p.options.delayInit) && p.init()
                }(window)
            }, {}], 2: [function (t, e, i) {
                "use strict";

                function n(t) {
                    if (Array.isArray(t)) {
                        for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
                        return i
                    }
                    return Array.from(t)
                }

                function r(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                Object.defineProperty(i, "__esModule", {value: !0});
                var s = function () {
                    function t(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var n = e[i];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }

                    return function (e, i, n) {
                        return i && t(e.prototype, i), n && t(e, n), e
                    }
                }();
                t("../node_modules/history.js/scripts/bundled/html4+html5/native.history.js");
                var o = /:\w+/g, a = /\*\w+/g, l = function () {
                    function t() {
                        var e = this, i = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                        r(this, t), this.routes = i, History.Adapter.bind(window, "statechange", function () {
                            return e.checkRoutes(History.getState())
                        })
                    }

                    return s(t, [{
                        key: "route", value: function (t, e) {
                            t = t.replace(o, "([^/]+)").replace(a, "(.*?)"), this.routes["^" + t + "$"] = e
                        }
                    }, {
                        key: "checkRoutes", value: function (t) {
                            var e = this, i = t.data.url || t.hash, r = !t.data.trigger || t.data.trigger;
                            r && Object.keys(this.routes).forEach(function (t) {
                                var r, s = new RegExp(t);
                                s.test(i) && (r = e.routes)[t].apply(r, n(s.exec(i).slice(1)))
                            })
                        }
                    }, {
                        key: "navigate", value: function (t) {
                            var e = arguments.length <= 1 || void 0 === arguments[1] || arguments[1],
                                i = !(arguments.length <= 2 || void 0 === arguments[2]) && arguments[2],
                                n = arguments.length <= 3 || void 0 === arguments[3] ? null : arguments[3];
                            return History[i ? "replaceState" : "pushState"]({url: t, trigger: e}, n, t)
                        }
                    }, {
                        key: "start", value: function (t) {
                            var e = t ? {data: {url: t}} : History.getState();
                            this.checkRoutes(e)
                        }
                    }, {
                        key: "go", value: function (t) {
                            History.go(t)
                        }
                    }, {
                        key: "back", value: function () {
                            History.back()
                        }
                    }]), t
                }();
                i["default"] = l, e.exports = i["default"]
            }, {"../node_modules/history.js/scripts/bundled/html4+html5/native.history.js": 1}]
        }, {}, [2])(2)
    }), /*!
 * Modernizr v2.8.3
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */
        window.Modernizr = function (t, e, i) {
            function n(t) {
                b.cssText = t
            }

            function r(t, e) {
                return n(T.join(t + ";") + (e || ""))
            }

            function s(t, e) {
                return typeof t === e
            }

            function o(t, e) {
                return !!~("" + t).indexOf(e)
            }

            function a(t, e) {
                for (var n in t) {
                    var r = t[n];
                    if (!o(r, "-") && b[r] !== i) return "pfx" != e || r
                }
                return !1
            }

            function l(t, e, n) {
                for (var r in t) {
                    var o = e[t[r]];
                    if (o !== i) return n === !1 ? t[r] : s(o, "function") ? o.bind(n || e) : o
                }
                return !1
            }

            function h(t, e, i) {
                var n = t.charAt(0).toUpperCase() + t.slice(1), r = (t + " " + S.join(n + " ") + n).split(" ");
                return s(e, "string") || s(e, "undefined") ? a(r, e) : (r = (t + " " + k.join(n + " ") + n).split(" "), l(r, e, i))
            }

            function c() {
                f.input = function (i) {
                    for (var n = 0, r = i.length; n < r; n++) F[i[n]] = !!(i[n] in x);
                    return F.list && (F.list = !(!e.createElement("datalist") || !t.HTMLDataListElement)), F
                }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), f.inputtypes = function (t) {
                    for (var n, r, s, o = 0, a = t.length; o < a; o++) x.setAttribute("type", r = t[o]), n = "text" !== x.type, n && (x.value = _, x.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(r) && x.style.WebkitAppearance !== i ? (g.appendChild(x), s = e.defaultView, n = s.getComputedStyle && "textfield" !== s.getComputedStyle(x, null).WebkitAppearance && 0 !== x.offsetHeight, g.removeChild(x)) : /^(search|tel)$/.test(r) || (n = /^(url|email)$/.test(r) ? x.checkValidity && x.checkValidity() === !1 : x.value != _)), D[t[o]] = !!n;
                    return D
                }("search tel url email datetime date month week time datetime-local number range color".split(" "))
            }

            var u, p, d = "2.8.3", f = {}, m = !0, g = e.documentElement, v = "modernizr", y = e.createElement(v),
                b = y.style, x = e.createElement("input"), _ = ":)", w = {}.toString,
                T = " -webkit- -moz- -o- -ms- ".split(" "), C = "Webkit Moz O ms", S = C.split(" "),
                k = C.toLowerCase().split(" "), E = {svg: "http://www.w3.org/2000/svg"}, A = {}, D = {}, F = {}, $ = [],
                P = $.slice, O = function (t, i, n, r) {
                    var s, o, a, l, h = e.createElement("div"), c = e.body, u = c || e.createElement("body");
                    if (parseInt(n, 10)) for (; n--;) a = e.createElement("div"), a.id = r ? r[n] : v + (n + 1), h.appendChild(a);
                    return s = ["&#173;", '<style id="s', v, '">', t, "</style>"].join(""), h.id = v, (c ? h : u).innerHTML += s, u.appendChild(h), c || (u.style.background = "", u.style.overflow = "hidden", l = g.style.overflow, g.style.overflow = "hidden", g.appendChild(u)), o = i(h, t), c ? h.parentNode.removeChild(h) : (u.parentNode.removeChild(u), g.style.overflow = l), !!o
                }, N = function (e) {
                    var i = t.matchMedia || t.msMatchMedia;
                    if (i) return i(e) && i(e).matches || !1;
                    var n;
                    return O("@media " + e + " { #" + v + " { position: absolute; } }", function (e) {
                        n = "absolute" == (t.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).position
                    }), n
                }, M = function () {
                    function t(t, r) {
                        r = r || e.createElement(n[t] || "div"), t = "on" + t;
                        var o = t in r;
                        return o || (r.setAttribute || (r = e.createElement("div")), r.setAttribute && r.removeAttribute && (r.setAttribute(t, ""), o = s(r[t], "function"), s(r[t], "undefined") || (r[t] = i), r.removeAttribute(t))), r = null, o
                    }

                    var n = {
                        select: "input",
                        change: "input",
                        submit: "form",
                        reset: "form",
                        error: "img",
                        load: "img",
                        abort: "img"
                    };
                    return t
                }(), R = {}.hasOwnProperty;
            p = s(R, "undefined") || s(R.call, "undefined") ? function (t, e) {
                return e in t && s(t.constructor.prototype[e], "undefined")
            } : function (t, e) {
                return R.call(t, e)
            }, Function.prototype.bind || (Function.prototype.bind = function (t) {
                var e = this;
                if ("function" != typeof e) throw new TypeError;
                var i = P.call(arguments, 1), n = function () {
                    if (this instanceof n) {
                        var r = function () {
                        };
                        r.prototype = e.prototype;
                        var s = new r, o = e.apply(s, i.concat(P.call(arguments)));
                        return Object(o) === o ? o : s
                    }
                    return e.apply(t, i.concat(P.call(arguments)))
                };
                return n
            }), A.flexbox = function () {
                return h("flexWrap")
            }, A.flexboxlegacy = function () {
                return h("boxDirection")
            }, A.canvas = function () {
                var t = e.createElement("canvas");
                return !(!t.getContext || !t.getContext("2d"))
            }, A.canvastext = function () {
                return !(!f.canvas || !s(e.createElement("canvas").getContext("2d").fillText, "function"))
            }, A.webgl = function () {
                return !!t.WebGLRenderingContext
            }, A.touch = function () {
                var i;
                return "ontouchstart" in t || t.DocumentTouch && e instanceof DocumentTouch ? i = !0 : O(["@media (", T.join("touch-enabled),("), v, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (t) {
                    i = 9 === t.offsetTop
                }), i
            }, A.geolocation = function () {
                return "geolocation" in navigator
            }, A.postmessage = function () {
                return !!t.postMessage
            }, A.websqldatabase = function () {
                return !!t.openDatabase
            }, A.indexedDB = function () {
                return !!h("indexedDB", t)
            }, A.hashchange = function () {
                return M("hashchange", t) && (e.documentMode === i || e.documentMode > 7)
            }, A.history = function () {
                return !(!t.history || !history.pushState)
            }, A.draganddrop = function () {
                var t = e.createElement("div");
                return "draggable" in t || "ondragstart" in t && "ondrop" in t
            }, A.websockets = function () {
                return "WebSocket" in t || "MozWebSocket" in t
            }, A.rgba = function () {
                return n("background-color:rgba(150,255,150,.5)"), o(b.backgroundColor, "rgba")
            }, A.hsla = function () {
                return n("background-color:hsla(120,40%,100%,.5)"), o(b.backgroundColor, "rgba") || o(b.backgroundColor, "hsla")
            }, A.multiplebgs = function () {
                return n("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(b.background)
            }, A.backgroundsize = function () {
                return h("backgroundSize")
            }, A.borderimage = function () {
                return h("borderImage")
            }, A.borderradius = function () {
                return h("borderRadius")
            }, A.boxshadow = function () {
                return h("boxShadow")
            }, A.textshadow = function () {
                return "" === e.createElement("div").style.textShadow
            }, A.opacity = function () {
                return r("opacity:.55"), /^0.55$/.test(b.opacity)
            }, A.cssanimations = function () {
                return h("animationName")
            }, A.csscolumns = function () {
                return h("columnCount")
            }, A.cssgradients = function () {
                var t = "background-image:", e = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
                    i = "linear-gradient(left top,#9f9, white);";
                return n((t + "-webkit- ".split(" ").join(e + t) + T.join(i + t)).slice(0, -t.length)), o(b.backgroundImage, "gradient")
            }, A.cssreflections = function () {
                return h("boxReflect")
            }, A.csstransforms = function () {
                return !!h("transform")
            }, A.csstransforms3d = function () {
                var t = !!h("perspective");
                return t && "webkitPerspective" in g.style && O("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (e, i) {
                    t = 9 === e.offsetLeft && 3 === e.offsetHeight
                }), t
            }, A.csstransitions = function () {
                return h("transition")
            }, A.fontface = function () {
                var t;
                return O('@font-face {font-family:"font";src:url("https://")}', function (i, n) {
                    var r = e.getElementById("smodernizr"), s = r.sheet || r.styleSheet,
                        o = s ? s.cssRules && s.cssRules[0] ? s.cssRules[0].cssText : s.cssText || "" : "";
                    t = /src/i.test(o) && 0 === o.indexOf(n.split(" ")[0])
                }), t
            }, A.generatedcontent = function () {
                var t;
                return O(["#", v, "{font:0/0 a}#", v, ':after{content:"', _, '";visibility:hidden;font:3px/1 a}'].join(""), function (e) {
                    t = e.offsetHeight >= 3
                }), t
            }, A.video = function () {
                var t = e.createElement("video"), i = !1;
                try {
                    (i = !!t.canPlayType) && (i = new Boolean(i), i.ogg = t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), i.h264 = t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), i.webm = t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
                } catch (n) {
                }
                return i
            }, A.audio = function () {
                var t = e.createElement("audio"), i = !1;
                try {
                    (i = !!t.canPlayType) && (i = new Boolean(i), i.ogg = t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), i.mp3 = t.canPlayType("audio/mpeg;").replace(/^no$/, ""), i.wav = t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), i.m4a = (t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""))
                } catch (n) {
                }
                return i
            }, A.localstorage = function () {
                try {
                    return localStorage.setItem(v, v), localStorage.removeItem(v), !0
                } catch (t) {
                    return !1
                }
            }, A.sessionstorage = function () {
                try {
                    return sessionStorage.setItem(v, v), sessionStorage.removeItem(v), !0
                } catch (t) {
                    return !1
                }
            }, A.webworkers = function () {
                return !!t.Worker
            }, A.applicationcache = function () {
                return !!t.applicationCache
            }, A.svg = function () {
                return !!e.createElementNS && !!e.createElementNS(E.svg, "svg").createSVGRect
            }, A.inlinesvg = function () {
                var t = e.createElement("div");
                return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) == E.svg
            }, A.smil = function () {
                return !!e.createElementNS && /SVGAnimate/.test(w.call(e.createElementNS(E.svg, "animate")))
            }, A.svgclippaths = function () {
                return !!e.createElementNS && /SVGClipPath/.test(w.call(e.createElementNS(E.svg, "clipPath")))
            };
            for (var I in A) p(A, I) && (u = I.toLowerCase(), f[u] = A[I](), $.push((f[u] ? "" : "no-") + u));
            return f.input || c(), f.addTest = function (t, e) {
                if ("object" == typeof t) for (var n in t) p(t, n) && f.addTest(n, t[n]); else {
                    if (t = t.toLowerCase(), f[t] !== i) return f;
                    e = "function" == typeof e ? e() : e, "undefined" != typeof m && m && (g.className += " " + (e ? "" : "no-") + t), f[t] = e
                }
                return f
            }, n(""), y = x = null, function (t, e) {
                function i(t, e) {
                    var i = t.createElement("p"), n = t.getElementsByTagName("head")[0] || t.documentElement;
                    return i.innerHTML = "x<style>" + e + "</style>", n.insertBefore(i.lastChild, n.firstChild)
                }

                function n() {
                    var t = y.elements;
                    return "string" == typeof t ? t.split(" ") : t
                }

                function r(t) {
                    var e = v[t[m]];
                    return e || (e = {}, g++, t[m] = g, v[g] = e), e
                }

                function s(t, i, n) {
                    if (i || (i = e), c) return i.createElement(t);
                    n || (n = r(i));
                    var s;
                    return s = n.cache[t] ? n.cache[t].cloneNode() : f.test(t) ? (n.cache[t] = n.createElem(t)).cloneNode() : n.createElem(t), !s.canHaveChildren || d.test(t) || s.tagUrn ? s : n.frag.appendChild(s)
                }

                function o(t, i) {
                    if (t || (t = e), c) return t.createDocumentFragment();
                    i = i || r(t);
                    for (var s = i.frag.cloneNode(), o = 0, a = n(), l = a.length; o < l; o++) s.createElement(a[o]);
                    return s
                }

                function a(t, e) {
                    e.cache || (e.cache = {}, e.createElem = t.createElement, e.createFrag = t.createDocumentFragment, e.frag = e.createFrag()), t.createElement = function (i) {
                        return y.shivMethods ? s(i, t, e) : e.createElem(i)
                    }, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + n().join().replace(/[\w\-]+/g, function (t) {
                        return e.createElem(t), e.frag.createElement(t), 'c("' + t + '")'
                    }) + ");return n}")(y, e.frag)
                }

                function l(t) {
                    t || (t = e);
                    var n = r(t);
                    return !y.shivCSS || h || n.hasCSS || (n.hasCSS = !!i(t, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), c || a(t, n), t
                }

                var h, c, u = "3.7.0", p = t.html5 || {},
                    d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    m = "_html5shiv", g = 0, v = {};
                !function () {
                    try {
                        var t = e.createElement("a");
                        t.innerHTML = "<xyz></xyz>", h = "hidden" in t, c = 1 == t.childNodes.length || function () {
                            e.createElement("a");
                            var t = e.createDocumentFragment();
                            return "undefined" == typeof t.cloneNode || "undefined" == typeof t.createDocumentFragment || "undefined" == typeof t.createElement
                        }()
                    } catch (i) {
                        h = !0, c = !0
                    }
                }();
                var y = {
                    elements: p.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                    version: u,
                    shivCSS: p.shivCSS !== !1,
                    supportsUnknownElements: c,
                    shivMethods: p.shivMethods !== !1,
                    type: "default",
                    shivDocument: l,
                    createElement: s,
                    createDocumentFragment: o
                };
                t.html5 = y, l(e)
            }(this, e), f._version = d, f._prefixes = T, f._domPrefixes = k, f._cssomPrefixes = S, f.mq = N, f.hasEvent = M, f.testProp = function (t) {
                return a([t])
            }, f.testAllProps = h, f.testStyles = O, f.prefixed = function (t, e, i) {
                return e ? h(t, e, i) : h(t, "pfx")
            }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (m ? " js " + $.join(" ") : ""), f
        }(this, this.document), /*!
 * Detectizr v2.2.0
 * http://barisaydinoglu.github.com/Detectizr/
 *
 * Written by Baris Aydinoglu (http://baris.aydinoglu.info) - Copyright 2012
 * Released under the MIT license
 *
 * Date: 2015-09-28T21:37Z
 */
        window.Detectizr = function (t, e, i, n) {
            function r(t, e) {
                var i, n, s;
                if (arguments.length > 2) for (i = 1, n = arguments.length; i < n; i += 1) r(t, arguments[i]); else for (s in e) e.hasOwnProperty(s) && (t[s] = e[s]);
                return t
            }

            function s(t) {
                return x.browser.userAgent.indexOf(t) > -1
            }

            function o(t) {
                return t.test(x.browser.userAgent)
            }

            function a(t) {
                return t.exec(x.browser.userAgent)
            }

            function l(t) {
                return t.replace(/^\s+|\s+$/g, "")
            }

            function h(t) {
                return null === t || t === n ? "" : String(t).replace(/((\s|\-|\.)+[a-z0-9])/g, function (t) {
                    return t.toUpperCase().replace(/(\s|\-|\.)/g, "")
                })
            }

            function c(t, e) {
                var i = e || "", n = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(S, " ") : "");
                if (n) {
                    for (; n.indexOf(" " + i + " ") >= 0;) n = n.replace(" " + i + " ", " ");
                    t.className = e ? l(n) : ""
                }
            }

            function u(t, e, i) {
                t && (t = h(t), e && (e = h(e), p(t + e, !0), i && p(t + e + "_" + i, !0)))
            }

            function p(t, e) {
                t && _ && (T.addAllFeaturesAsClass ? _.addTest(t, e) : (e = "function" == typeof e ? e() : e, e ? _.addTest(t, !0) : (delete _[t], c(k, t))))
            }

            function d(t, e) {
                t.version = e;
                var i = e.split(".");
                i.length > 0 ? (i = i.reverse(), t.major = i.pop(), i.length > 0 ? (t.minor = i.pop(), i.length > 0 ? (i = i.reverse(), t.patch = i.join(".")) : t.patch = "0") : t.minor = "0") : t.major = "0"
            }

            function f() {
                t.clearTimeout(y), y = t.setTimeout(function () {
                    b = x.device.orientation, t.innerHeight > t.innerWidth ? x.device.orientation = "portrait" : x.device.orientation = "landscape", p(x.device.orientation, !0), b !== x.device.orientation && p(b, !1)
                }, 10)
            }

            function m(t) {
                var i, n, r, s, o, a = e.plugins;
                for (s = a.length - 1; s >= 0; s--) {
                    for (i = a[s], n = i.name + i.description, r = 0, o = t.length; o >= 0; o--) n.indexOf(t[o]) !== -1 && (r += 1);
                    if (r === t.length) return !0
                }
                return !1
            }

            function g(t) {
                var e;
                for (e = t.length - 1; e >= 0; e--) try {
                    new ActiveXObject(t[e])
                } catch (i) {
                }
                return !1
            }

            function v(n) {
                var l, c, v, y, b, S, k;
                if (T = r({}, T, n || {}), T.detectDevice) {
                    for (x.device = {
                        type: "",
                        model: "",
                        orientation: ""
                    }, v = x.device, o(/googletv|smarttv|smart-tv|internet.tv|netcast|nettv|appletv|boxee|kylo|roku|dlnadoc|roku|pov_tv|hbbtv|ce\-html/) ? (v.type = w[0], v.model = "smartTv") : o(/xbox|playstation.3|wii/) ? (v.type = w[0], v.model = "gameConsole") : o(/ip(a|ro)d/) ? (v.type = w[1], v.model = "ipad") : o(/tablet/) && !o(/rx-34/) || o(/folio/) ? (v.type = w[1], v.model = String(a(/playbook/) || "")) : o(/linux/) && o(/android/) && !o(/fennec|mobi|htc.magic|htcX06ht|nexus.one|sc-02b|fone.945/) ? (v.type = w[1], v.model = "android") : o(/kindle/) || o(/mac.os/) && o(/silk/) ? (v.type = w[1], v.model = "kindle") : o(/gt-p10|sc-01c|shw-m180s|sgh-t849|sch-i800|shw-m180l|sph-p100|sgh-i987|zt180|htc(.flyer|\_flyer)|sprint.atp51|viewpad7|pandigital(sprnova|nova)|ideos.s7|dell.streak.7|advent.vega|a101it|a70bht|mid7015|next2|nook/) || o(/mb511/) && o(/rutem/) ? (v.type = w[1], v.model = "android") : o(/bb10/) ? (v.type = w[1], v.model = "blackberry") : (v.model = a(/iphone|ipod|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec|j2me/), null !== v.model ? (v.type = w[2], v.model = String(v.model)) : (v.model = "", o(/bolt|fennec|iris|maemo|minimo|mobi|mowser|netfront|novarra|prism|rx-34|skyfire|tear|xv6875|xv6975|google.wireless.transcoder/) ? v.type = w[2] : o(/opera/) && o(/windows.nt.5/) && o(/htc|xda|mini|vario|samsung\-gt\-i8000|samsung\-sgh\-i9/) ? v.type = w[2] : o(/windows.(nt|xp|me|9)/) && !o(/phone/) || o(/win(9|.9|nt)/) || o(/\(windows 8\)/) ? v.type = w[3] : o(/macintosh|powerpc/) && !o(/silk/) ? (v.type = w[3], v.model = "mac") : o(/linux/) && o(/x11/) ? v.type = w[3] : o(/solaris|sunos|bsd/) ?
                        // Check if user agent is a Solaris, SunOS, BSD Desktop
                        v.type = w[3] : o(/cros/) ? v.type = w[3] : o(/bot|crawler|spider|yahoo|ia_archiver|covario-ids|findlinks|dataparksearch|larbin|mediapartners-google|ng-search|snappy|teoma|jeeves|tineye/) && !o(/mobile/) ? (v.type = w[3], v.model = "crawler") : v.type = w[2])), l = 0, c = w.length; l < c; l += 1) p(w[l], v.type === w[l]);
                    T.detectDeviceModel && p(h(v.model), !0)
                }
                if (T.detectScreen && (v.screen = {}, _ && _.mq && (_.mq("only screen and (max-width: 240px)") ? (v.screen.size = "veryVerySmall", p("veryVerySmallScreen", !0)) : _.mq("only screen and (max-width: 320px)") ? (v.screen.size = "verySmall", p("verySmallScreen", !0)) : _.mq("only screen and (max-width: 480px)") && (v.screen.size = "small", p("smallScreen", !0)), v.type !== w[1] && v.type !== w[2] || _.mq("only screen and (-moz-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)") && (v.screen.resolution = "high", p("highresolution", !0))), v.type === w[1] || v.type === w[2] ? (t.onresize = function (t) {
                        f(t)
                    }, f()) : (v.orientation = "landscape", p(v.orientation, !0))), T.detectOS && (x.os = {}, y = x.os, "" !== v.model && ("ipad" === v.model || "iphone" === v.model || "ipod" === v.model ? (y.name = "ios", d(y, (o(/os\s([\d_]+)/) ? RegExp.$1 : "").replace(/_/g, "."))) : "android" === v.model ? (y.name = "android", d(y, o(/android\s([\d\.]+)/) ? RegExp.$1 : "")) : "blackberry" === v.model ? (y.name = "blackberry", d(y, o(/version\/([^\s]+)/) ? RegExp.$1 : "")) : "playbook" === v.model && (y.name = "blackberry", d(y, o(/os ([^\s]+)/) ? RegExp.$1.replace(";", "") : ""))), y.name || (s("win") || s("16bit") ? (y.name = "windows", s("windows nt 10") ? d(y, "10") : s("windows nt 6.3") ? d(y, "8.1") : s("windows nt 6.2") || o(/\(windows 8\)/) ? d(y, "8") : s("windows nt 6.1") ? d(y, "7") : s("windows nt 6.0") ? d(y, "vista") : s("windows nt 5.2") || s("windows nt 5.1") || s("windows xp") ? d(y, "xp") : s("windows nt 5.0") || s("windows 2000") ? d(y, "2k") : s("winnt") || s("windows nt") ? d(y, "nt") : s("win98") || s("windows 98") ? d(y, "98") : (s("win95") || s("windows 95")) && d(y, "95")) : s("mac") || s("darwin") ? (y.name = "mac os", s("68k") || s("68000") ? d(y, "68k") : s("ppc") || s("powerpc") ? d(y, "ppc") : s("os x") && d(y, (o(/os\sx\s([\d_]+)/) ? RegExp.$1 : "os x").replace(/_/g, "."))) : s("webtv") ? y.name = "webtv" : s("x11") || s("inux") ? y.name = "linux" : s("sunos") ? y.name = "sun" : s("irix") ? y.name = "irix" : s("freebsd") ? y.name = "freebsd" : s("bsd") && (y.name = "bsd")), y.name && (p(y.name, !0), y.major && (u(y.name, y.major), y.minor && u(y.name, y.major, y.minor))), o(/\sx64|\sx86|\swin64|\swow64|\samd64/) ? y.addressRegisterSize = "64bit" : y.addressRegisterSize = "32bit", p(y.addressRegisterSize, !0)), T.detectBrowser && (b = x.browser, o(/opera|webtv/) || !o(/msie\s([\d\w\.]+)/) && !s("trident") ? s("firefox") ? (b.engine = "gecko", b.name = "firefox", d(b, o(/firefox\/([\d\w\.]+)/) ? RegExp.$1 : "")) : s("gecko/") ? b.engine = "gecko" : s("opera") ? (b.name = "opera", b.engine = "presto", d(b, o(/version\/([\d\.]+)/) ? RegExp.$1 : o(/opera(\s|\/)([\d\.]+)/) ? RegExp.$2 : "")) : s("konqueror") ? b.name = "konqueror" : s("edge") ? (b.engine = "webkit", b.name = "edge", d(b, o(/edge\/([\d\.]+)/) ? RegExp.$1 : "")) : s("chrome") ? (b.engine = "webkit", b.name = "chrome", d(b, o(/chrome\/([\d\.]+)/) ? RegExp.$1 : "")) : s("iron") ? (b.engine = "webkit", b.name = "iron") : s("crios") ? (b.name = "chrome", b.engine = "webkit", d(b, o(/crios\/([\d\.]+)/) ? RegExp.$1 : "")) : s("applewebkit/") ? (b.name = "safari", b.engine = "webkit", d(b, o(/version\/([\d\.]+)/) ? RegExp.$1 : "")) : s("mozilla/") && (b.engine = "gecko") : (b.engine = "trident", b.name = "ie", !t.addEventListener && i.documentMode && 7 === i.documentMode ? d(b, "8.compat") : o(/trident.*rv[ :](\d+)\./) ? d(b, RegExp.$1) : d(b, o(/trident\/4\.0/) ? "8" : RegExp.$1)), b.name && (p(b.name, !0), b.major && (u(b.name, b.major), b.minor && u(b.name, b.major, b.minor))), p(b.engine, !0), b.language = e.userLanguage || e.language, p(b.language, !0)), T.detectPlugins) {
                    for (b.plugins = [], l = C.length - 1; l >= 0; l--) S = C[l], k = !1, t.ActiveXObject ? k = g(S.progIds) : e.plugins && (k = m(S.substrs)), k && (b.plugins.push(S.name), p(S.name, !0));
                    e.javaEnabled() && (b.plugins.push("java"), p("java", !0))
                }
            }

            var y, b, x = {}, _ = t.Modernizr, w = ["tv", "tablet", "mobile", "desktop"], T = {
                    addAllFeaturesAsClass: !1,
                    detectDevice: !0,
                    detectDeviceModel: !0,
                    detectScreen: !0,
                    detectOS: !0,
                    detectBrowser: !0,
                    detectPlugins: !0
                }, C = [{
                    name: "adobereader",
                    substrs: ["Adobe", "Acrobat"],
                    progIds: ["AcroPDF.PDF", "PDF.PDFCtrl.5"]
                }, {
                    name: "flash",
                    substrs: ["Shockwave Flash"],
                    progIds: ["ShockwaveFlash.ShockwaveFlash.1"]
                }, {name: "wmplayer", substrs: ["Windows Media"], progIds: ["wmplayer.ocx"]}, {
                    name: "silverlight",
                    substrs: ["Silverlight"],
                    progIds: ["AgControl.AgControl"]
                }, {name: "quicktime", substrs: ["QuickTime"], progIds: ["QuickTime.QuickTime"]}], S = /[\t\r\n]/g,
                k = i.documentElement;
            return x.detect = function (t) {
                return v(t)
            }, x.init = function () {
                x !== n && (x.browser = {userAgent: (e.userAgent || e.vendor || t.opera).toLowerCase()}, x.detect())
            }, x.init(), x
        }(this, this.navigator, this.document), function () {
        "use strict";

        /**
         * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
         *
         * @codingstandard ftlabs-jsv2
         * @copyright The Financial Times Limited [All Rights Reserved]
         * @license MIT License (see LICENSE.txt)
         */
        function t(e, n) {
            function r(t, e) {
                return function () {
                    return t.apply(e, arguments)
                }
            }

            var s;
            if (n = n || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = n.touchBoundary || 10, this.layer = e, this.tapDelay = n.tapDelay || 200, this.tapTimeout = n.tapTimeout || 700, !t.notNeeded(e)) {
                for (var o = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], a = this, l = 0, h = o.length; l < h; l++) a[o[l]] = r(a[o[l]], a);
                i && (e.addEventListener("mouseover", this.onMouse, !0), e.addEventListener("mousedown", this.onMouse, !0), e.addEventListener("mouseup", this.onMouse, !0)), e.addEventListener("click", this.onClick, !0), e.addEventListener("touchstart", this.onTouchStart, !1), e.addEventListener("touchmove", this.onTouchMove, !1), e.addEventListener("touchend", this.onTouchEnd, !1), e.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (e.removeEventListener = function (t, i, n) {
                    var r = Node.prototype.removeEventListener;
                    "click" === t ? r.call(e, t, i.hijacked || i, n) : r.call(e, t, i, n)
                }, e.addEventListener = function (t, i, n) {
                    var r = Node.prototype.addEventListener;
                    "click" === t ? r.call(e, t, i.hijacked || (i.hijacked = function (t) {
                        t.propagationStopped || i(t)
                    }), n) : r.call(e, t, i, n)
                }), "function" == typeof e.onclick && (s = e.onclick, e.addEventListener("click", function (t) {
                    s(t)
                }, !1), e.onclick = null)
            }
        }

        var e = navigator.userAgent.indexOf("Windows Phone") >= 0, i = navigator.userAgent.indexOf("Android") > 0 && !e,
            n = /iP(ad|hone|od)/.test(navigator.userAgent) && !e, r = n && /OS 4_\d(_\d)?/.test(navigator.userAgent),
            s = n && /OS [6-7]_\d/.test(navigator.userAgent), o = navigator.userAgent.indexOf("BB10") > 0;
        t.prototype.needsClick = function (t) {
            switch (t.nodeName.toLowerCase()) {
                case"button":
                case"select":
                case"textarea":
                    if (t.disabled) return !0;
                    break;
                case"input":
                    if (n && "file" === t.type || t.disabled) return !0;
                    break;
                case"label":
                case"iframe":
                case"video":
                    return !0
            }
            return /\bneedsclick\b/.test(t.className)
        }, t.prototype.needsFocus = function (t) {
            switch (t.nodeName.toLowerCase()) {
                case"textarea":
                    return !0;
                case"select":
                    return !i;
                case"input":
                    switch (t.type) {
                        case"button":
                        case"checkbox":
                        case"file":
                        case"image":
                        case"radio":
                        case"submit":
                            return !1
                    }
                    return !t.disabled && !t.readOnly;
                default:
                    return /\bneedsfocus\b/.test(t.className)
            }
        }, t.prototype.sendClick = function (t, e) {
            var i, n;
            document.activeElement && document.activeElement !== t && document.activeElement.blur(), n = e.changedTouches[0], i = document.createEvent("MouseEvents"), i.initMouseEvent(this.determineEventType(t), !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), i.forwardedTouchEvent = !0, t.dispatchEvent(i)
        }, t.prototype.determineEventType = function (t) {
            return i && "select" === t.tagName.toLowerCase() ? "mousedown" : "click"
        }, t.prototype.focus = function (t) {
            var e;
            n && t.setSelectionRange && 0 !== t.type.indexOf("date") && "time" !== t.type && "month" !== t.type ? (e = t.value.length, t.setSelectionRange(e, e)) : t.focus()
        }, t.prototype.updateScrollParent = function (t) {
            var e, i;
            if (e = t.fastClickScrollParent, !e || !e.contains(t)) {
                i = t;
                do {
                    if (i.scrollHeight > i.offsetHeight) {
                        e = i, t.fastClickScrollParent = i;
                        break
                    }
                    i = i.parentElement
                } while (i)
            }
            e && (e.fastClickLastScrollTop = e.scrollTop)
        }, t.prototype.getTargetElementFromEventTarget = function (t) {
            return t.nodeType === Node.TEXT_NODE ? t.parentNode : t
        }, t.prototype.onTouchStart = function (t) {
            var e, i, s;
            if (t.targetTouches.length > 1) return !0;
            if (e = this.getTargetElementFromEventTarget(t.target), i = t.targetTouches[0], n) {
                if (s = window.getSelection(), s.rangeCount && !s.isCollapsed) return !0;
                if (!r) {
                    if (i.identifier && i.identifier === this.lastTouchIdentifier) return t.preventDefault(), !1;
                    this.lastTouchIdentifier = i.identifier, this.updateScrollParent(e)
                }
            }
            return this.trackingClick = !0, this.trackingClickStart = t.timeStamp, this.targetElement = e, this.touchStartX = i.pageX, this.touchStartY = i.pageY, t.timeStamp - this.lastClickTime < this.tapDelay && t.preventDefault(), !0
        }, t.prototype.touchHasMoved = function (t) {
            var e = t.changedTouches[0], i = this.touchBoundary;
            return Math.abs(e.pageX - this.touchStartX) > i || Math.abs(e.pageY - this.touchStartY) > i
        }, t.prototype.onTouchMove = function (t) {
            return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(t.target) || this.touchHasMoved(t)) && (this.trackingClick = !1, this.targetElement = null), !0)
        }, t.prototype.findControl = function (t) {
            return void 0 !== t.control ? t.control : t.htmlFor ? document.getElementById(t.htmlFor) : t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
        }, t.prototype.onTouchEnd = function (t) {
            var e, o, a, l, h, c = this.targetElement;
            if (!this.trackingClick) return !0;
            if (t.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
            if (t.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
            if (this.cancelNextClick = !1, this.lastClickTime = t.timeStamp, o = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, s && (h = t.changedTouches[0], c = document.elementFromPoint(h.pageX - window.pageXOffset, h.pageY - window.pageYOffset) || c, c.fastClickScrollParent = this.targetElement.fastClickScrollParent), a = c.tagName.toLowerCase(), "label" === a) {
                if (e = this.findControl(c)) {
                    if (this.focus(c), i) return !1;
                    c = e
                }
            } else if (this.needsFocus(c)) return t.timeStamp - o > 100 || n && window.top !== window && "input" === a ? (this.targetElement = null, !1) : (this.focus(c), this.sendClick(c, t), n && "select" === a || (this.targetElement = null, t.preventDefault()), !1);
            return !(!n || r || (l = c.fastClickScrollParent, !l || l.fastClickLastScrollTop === l.scrollTop)) || (this.needsClick(c) || (t.preventDefault(), this.sendClick(c, t)), !1)
        }, t.prototype.onTouchCancel = function () {
            this.trackingClick = !1, this.targetElement = null
        }, t.prototype.onMouse = function (t) {
            return !this.targetElement || (!!t.forwardedTouchEvent || (!t.cancelable || (!(!this.needsClick(this.targetElement) || this.cancelNextClick) || (t.stopImmediatePropagation ? t.stopImmediatePropagation() : t.propagationStopped = !0, t.stopPropagation(), t.preventDefault(), !1))))
        }, t.prototype.onClick = function (t) {
            var e;
            return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === t.target.type && 0 === t.detail || (e = this.onMouse(t), e || (this.targetElement = null), e)
        }, t.prototype.destroy = function () {
            var t = this.layer;
            i && (t.removeEventListener("mouseover", this.onMouse, !0), t.removeEventListener("mousedown", this.onMouse, !0), t.removeEventListener("mouseup", this.onMouse, !0)), t.removeEventListener("click", this.onClick, !0), t.removeEventListener("touchstart", this.onTouchStart, !1), t.removeEventListener("touchmove", this.onTouchMove, !1), t.removeEventListener("touchend", this.onTouchEnd, !1), t.removeEventListener("touchcancel", this.onTouchCancel, !1)
        }, t.notNeeded = function (t) {
            var e, n, r, s;
            if ("undefined" == typeof window.ontouchstart) return !0;
            if (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
                if (!i) return !0;
                if (e = document.querySelector("meta[name=viewport]")) {
                    if (e.content.indexOf("user-scalable=no") !== -1) return !0;
                    if (n > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0
                }
            }
            if (o && (r = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), r[1] >= 10 && r[2] >= 3 && (e = document.querySelector("meta[name=viewport]")))) {
                if (e.content.indexOf("user-scalable=no") !== -1) return !0;
                if (document.documentElement.scrollWidth <= window.outerWidth) return !0
            }
            return "none" === t.style.msTouchAction || "manipulation" === t.style.touchAction || (s = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1], !!(s >= 27 && (e = document.querySelector("meta[name=viewport]"), e && (e.content.indexOf("user-scalable=no") !== -1 || document.documentElement.scrollWidth <= window.outerWidth))) || ("none" === t.style.touchAction || "manipulation" === t.style.touchAction))
        }, t.attach = function (e, i) {
            return new t(e, i)
        }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function () {
            return t
        }) : "undefined" != typeof module && module.exports ? (module.exports = t.attach, module.exports.FastClick = t) : window.FastClick = t
    }(), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
+function (t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery), /* ========================================================================
 * Bootstrap: transition.js v3.3.7
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
    +function (t) {
        "use strict";

        function e() {
            var t = document.createElement("bootstrap"), e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
            for (var i in e) if (void 0 !== t.style[i]) return {end: e[i]};
            return !1
        }

        t.fn.emulateTransitionEnd = function (e) {
            var i = !1, n = this;
            t(this).one("bsTransitionEnd", function () {
                i = !0
            });
            var r = function () {
                i || t(n).trigger(t.support.transition.end)
            };
            return setTimeout(r, e), this
        }, t(function () {
            t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
                bindType: t.support.transition.end,
                delegateType: t.support.transition.end,
                handle: function (e) {
                    if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                }
            })
        })
    }(jQuery), /* ========================================================================
 * Bootstrap: alert.js v3.3.7
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
    +function (t) {
        "use strict";

        function e(e) {
            return this.each(function () {
                var i = t(this), r = i.data("bs.alert");
                r || i.data("bs.alert", r = new n(this)), "string" == typeof e && r[e].call(i)
            })
        }

        var i = '[data-dismiss="alert"]', n = function (e) {
            t(e).on("click", i, this.close)
        };
        n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.close = function (e) {
            function i() {
                o.detach().trigger("closed.bs.alert").remove()
            }

            var r = t(this), s = r.attr("data-target");
            s || (s = r.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, ""));
            var o = t("#" === s ? [] : s);
            e && e.preventDefault(), o.length || (o = r.closest(".alert")), o.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i())
        };
        var r = t.fn.alert;
        t.fn.alert = e, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function () {
            return t.fn.alert = r, this
        }, t(document).on("click.bs.alert.data-api", i, n.prototype.close)
    }(jQuery), /* ========================================================================
 * Bootstrap: button.js v3.3.7
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
    +function (t) {
        "use strict";

        function e(e) {
            return this.each(function () {
                var n = t(this), r = n.data("bs.button"), s = "object" == typeof e && e;
                r || n.data("bs.button", r = new i(this, s)), "toggle" == e ? r.toggle() : e && r.setState(e)
            })
        }

        var i = function (e, n) {
            this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.isLoading = !1
        };
        i.VERSION = "3.3.7", i.DEFAULTS = {loadingText: "loading..."}, i.prototype.setState = function (e) {
            var i = "disabled", n = this.$element, r = n.is("input") ? "val" : "html", s = n.data();
            e += "Text", null == s.resetText && n.data("resetText", n[r]()), setTimeout(t.proxy(function () {
                n[r](null == s[e] ? this.options[e] : s[e]), "loadingText" == e ? (this.isLoading = !0, n.addClass(i).attr(i, i).prop(i, !0)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i).prop(i, !1))
            }, this), 0)
        }, i.prototype.toggle = function () {
            var t = !0, e = this.$element.closest('[data-toggle="buttons"]');
            if (e.length) {
                var i = this.$element.find("input");
                "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
            } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
        };
        var n = t.fn.button;
        t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function () {
            return t.fn.button = n, this
        }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (i) {
            var n = t(i.target).closest(".btn");
            e.call(n, "toggle"), t(i.target).is('input[type="radio"], input[type="checkbox"]') || (i.preventDefault(), n.is("input,button") ? n.trigger("focus") : n.find("input:visible,button:visible").first().trigger("focus"))
        }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
            t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
        })
    }(jQuery), /* ========================================================================
 * Bootstrap: carousel.js v3.3.7
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
    +function (t) {
        "use strict";

        function e(e) {
            return this.each(function () {
                var n = t(this), r = n.data("bs.carousel"),
                    s = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e),
                    o = "string" == typeof e ? e : s.slide;
                r || n.data("bs.carousel", r = new i(this, s)), "number" == typeof e ? r.to(e) : o ? r[o]() : s.interval && r.pause().cycle()
            })
        }

        var i = function (e, i) {
            this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
        };
        i.VERSION = "3.3.7", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
            interval: 5e3,
            pause: "hover",
            wrap: !0,
            keyboard: !0
        }, i.prototype.keydown = function (t) {
            if (!/input|textarea/i.test(t.target.tagName)) {
                switch (t.which) {
                    case 37:
                        this.prev();
                        break;
                    case 39:
                        this.next();
                        break;
                    default:
                        return
                }
                t.preventDefault()
            }
        }, i.prototype.cycle = function (e) {
            return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
        }, i.prototype.getItemIndex = function (t) {
            return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
        }, i.prototype.getItemForDirection = function (t, e) {
            var i = this.getItemIndex(e), n = "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1;
            if (n && !this.options.wrap) return e;
            var r = "prev" == t ? -1 : 1, s = (i + r) % this.$items.length;
            return this.$items.eq(s)
        }, i.prototype.to = function (t) {
            var e = this, i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
            if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function () {
                e.to(t)
            }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
        }, i.prototype.pause = function (e) {
            return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
        }, i.prototype.next = function () {
            if (!this.sliding) return this.slide("next")
        }, i.prototype.prev = function () {
            if (!this.sliding) return this.slide("prev")
        }, i.prototype.slide = function (e, n) {
            var r = this.$element.find(".item.active"), s = n || this.getItemForDirection(e, r), o = this.interval,
                a = "next" == e ? "left" : "right", l = this;
            if (s.hasClass("active")) return this.sliding = !1;
            var h = s[0], c = t.Event("slide.bs.carousel", {relatedTarget: h, direction: a});
            if (this.$element.trigger(c), !c.isDefaultPrevented()) {
                if (this.sliding = !0, o && this.pause(), this.$indicators.length) {
                    this.$indicators.find(".active").removeClass("active");
                    var u = t(this.$indicators.children()[this.getItemIndex(s)]);
                    u && u.addClass("active")
                }
                var p = t.Event("slid.bs.carousel", {relatedTarget: h, direction: a});
                return t.support.transition && this.$element.hasClass("slide") ? (s.addClass(e), s[0].offsetWidth, r.addClass(a), s.addClass(a), r.one("bsTransitionEnd", function () {
                    s.removeClass([e, a].join(" ")).addClass("active"), r.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function () {
                        l.$element.trigger(p)
                    }, 0)
                }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (r.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(p)), o && this.cycle(), this
            }
        };
        var n = t.fn.carousel;
        t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function () {
            return t.fn.carousel = n, this
        };
        var r = function (i) {
            var n, r = t(this), s = t(r.attr("data-target") || (n = r.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
            if (s.hasClass("carousel")) {
                var o = t.extend({}, s.data(), r.data()), a = r.attr("data-slide-to");
                a && (o.interval = !1), e.call(s, o), a && s.data("bs.carousel").to(a), i.preventDefault()
            }
        };
        t(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r), t(window).on("load", function () {
            t('[data-ride="carousel"]').each(function () {
                var i = t(this);
                e.call(i, i.data())
            })
        })
    }(jQuery), /* ========================================================================
 * Bootstrap: collapse.js v3.3.7
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
    +function (t) {
        "use strict";

        function e(e) {
            var i, n = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
            return t(n)
        }

        function i(e) {
            return this.each(function () {
                var i = t(this), r = i.data("bs.collapse"),
                    s = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
                !r && s.toggle && /show|hide/.test(e) && (s.toggle = !1), r || i.data("bs.collapse", r = new n(this, s)), "string" == typeof e && r[e]()
            })
        }

        var n = function (e, i) {
            this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
        };
        n.VERSION = "3.3.7", n.TRANSITION_DURATION = 350, n.DEFAULTS = {toggle: !0}, n.prototype.dimension = function () {
            var t = this.$element.hasClass("width");
            return t ? "width" : "height"
        }, n.prototype.show = function () {
            if (!this.transitioning && !this.$element.hasClass("in")) {
                var e, r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                if (!(r && r.length && (e = r.data("bs.collapse"), e && e.transitioning))) {
                    var s = t.Event("show.bs.collapse");
                    if (this.$element.trigger(s), !s.isDefaultPrevented()) {
                        r && r.length && (i.call(r, "hide"), e || r.data("bs.collapse", null));
                        var o = this.dimension();
                        this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                        var a = function () {
                            this.$element.removeClass("collapsing").addClass("collapse in")[o](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                        };
                        if (!t.support.transition) return a.call(this);
                        var l = t.camelCase(["scroll", o].join("-"));
                        this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(n.TRANSITION_DURATION)[o](this.$element[0][l])
                    }
                }
            }
        }, n.prototype.hide = function () {
            if (!this.transitioning && this.$element.hasClass("in")) {
                var e = t.Event("hide.bs.collapse");
                if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                    var i = this.dimension();
                    this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                    var r = function () {
                        this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                    };
                    return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : r.call(this)
                }
            }
        }, n.prototype.toggle = function () {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        }, n.prototype.getParent = function () {
            return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (i, n) {
                var r = t(n);
                this.addAriaAndCollapsedClass(e(r), r)
            }, this)).end()
        }, n.prototype.addAriaAndCollapsedClass = function (t, e) {
            var i = t.hasClass("in");
            t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
        };
        var r = t.fn.collapse;
        t.fn.collapse = i, t.fn.collapse.Constructor = n, t.fn.collapse.noConflict = function () {
            return t.fn.collapse = r, this
        }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (n) {
            var r = t(this);
            r.attr("data-target") || n.preventDefault();
            var s = e(r), o = s.data("bs.collapse"), a = o ? "toggle" : r.data();
            i.call(s, a)
        })
    }(jQuery), /* ========================================================================
 * Bootstrap: dropdown.js v3.3.7
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
    +function (t) {
        "use strict";

        function e(e) {
            var i = e.attr("data-target");
            i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
            var n = i && t(i);
            return n && n.length ? n : e.parent()
        }

        function i(i) {
            i && 3 === i.which || (t(r).remove(), t(s).each(function () {
                var n = t(this), r = e(n), s = {relatedTarget: this};
                r.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(r[0], i.target) || (r.trigger(i = t.Event("hide.bs.dropdown", s)), i.isDefaultPrevented() || (n.attr("aria-expanded", "false"), r.removeClass("open").trigger(t.Event("hidden.bs.dropdown", s)))))
            }))
        }

        function n(e) {
            return this.each(function () {
                var i = t(this), n = i.data("bs.dropdown");
                n || i.data("bs.dropdown", n = new o(this)), "string" == typeof e && n[e].call(i)
            })
        }

        var r = ".dropdown-backdrop", s = '[data-toggle="dropdown"]', o = function (e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
        o.VERSION = "3.3.7", o.prototype.toggle = function (n) {
            var r = t(this);
            if (!r.is(".disabled, :disabled")) {
                var s = e(r), o = s.hasClass("open");
                if (i(), !o) {
                    "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
                    var a = {relatedTarget: this};
                    if (s.trigger(n = t.Event("show.bs.dropdown", a)), n.isDefaultPrevented()) return;
                    r.trigger("focus").attr("aria-expanded", "true"), s.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a))
                }
                return !1
            }
        }, o.prototype.keydown = function (i) {
            if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
                var n = t(this);
                if (i.preventDefault(), i.stopPropagation(), !n.is(".disabled, :disabled")) {
                    var r = e(n), o = r.hasClass("open");
                    if (!o && 27 != i.which || o && 27 == i.which) return 27 == i.which && r.find(s).trigger("focus"), n.trigger("click");
                    var a = " li:not(.disabled):visible a", l = r.find(".dropdown-menu" + a);
                    if (l.length) {
                        var h = l.index(i.target);
                        38 == i.which && h > 0 && h--, 40 == i.which && h < l.length - 1 && h++, ~h || (h = 0), l.eq(h).trigger("focus")
                    }
                }
            }
        };
        var a = t.fn.dropdown;
        t.fn.dropdown = n, t.fn.dropdown.Constructor = o, t.fn.dropdown.noConflict = function () {
            return t.fn.dropdown = a, this
        }, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
            t.stopPropagation()
        }).on("click.bs.dropdown.data-api", s, o.prototype.toggle).on("keydown.bs.dropdown.data-api", s, o.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", o.prototype.keydown)
    }(jQuery), /* ========================================================================
 * Bootstrap: modal.js v3.3.7
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
    +function (t) {
        "use strict";

        function e(e, n) {
            return this.each(function () {
                var r = t(this), s = r.data("bs.modal"),
                    o = t.extend({}, i.DEFAULTS, r.data(), "object" == typeof e && e);
                s || r.data("bs.modal", s = new i(this, o)), "string" == typeof e ? s[e](n) : o.show && s.show(n)
            })
        }

        var i = function (e, i) {
            this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        };
        i.VERSION = "3.3.7", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
            backdrop: !0,
            keyboard: !0,
            show: !0
        }, i.prototype.toggle = function (t) {
            return this.isShown ? this.hide() : this.show(t)
        }, i.prototype.show = function (e) {
            var n = this, r = t.Event("show.bs.modal", {relatedTarget: e});
            this.$element.trigger(r), this.isShown || r.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
                n.$element.one("mouseup.dismiss.bs.modal", function (e) {
                    t(e.target).is(n.$element) && (n.ignoreBackdropClick = !0)
                })
            }), this.backdrop(function () {
                var r = t.support.transition && n.$element.hasClass("fade");
                n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), n.adjustDialog(), r && n.$element[0].offsetWidth, n.$element.addClass("in"), n.enforceFocus();
                var s = t.Event("shown.bs.modal", {relatedTarget: e});
                r ? n.$dialog.one("bsTransitionEnd", function () {
                    n.$element.trigger("focus").trigger(s)
                }).emulateTransitionEnd(i.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(s)
            }))
        }, i.prototype.hide = function (e) {
            e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
        }, i.prototype.enforceFocus = function () {
            t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
                document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
            }, this))
        }, i.prototype.escape = function () {
            this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
                27 == t.which && this.hide()
            }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
        }, i.prototype.resize = function () {
            this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
        }, i.prototype.hideModal = function () {
            var t = this;
            this.$element.hide(), this.backdrop(function () {
                t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
            })
        }, i.prototype.removeBackdrop = function () {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
        }, i.prototype.backdrop = function (e) {
            var n = this, r = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var s = t.support.transition && r;
                if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + r).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
                        return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                    }, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
                s ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
            } else if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                var o = function () {
                    n.removeBackdrop(), e && e()
                };
                t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", o).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : o()
            } else e && e()
        }, i.prototype.handleUpdate = function () {
            this.adjustDialog()
        }, i.prototype.adjustDialog = function () {
            var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
            this.$element.css({
                paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
                paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
            })
        }, i.prototype.resetAdjustments = function () {
            this.$element.css({paddingLeft: "", paddingRight: ""})
        }, i.prototype.checkScrollbar = function () {
            var t = window.innerWidth;
            if (!t) {
                var e = document.documentElement.getBoundingClientRect();
                t = e.right - Math.abs(e.left)
            }
            this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
        }, i.prototype.setScrollbar = function () {
            var t = parseInt(this.$body.css("padding-right") || 0, 10);
            this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
        }, i.prototype.resetScrollbar = function () {
            this.$body.css("padding-right", this.originalBodyPad)
        }, i.prototype.measureScrollbar = function () {
            var t = document.createElement("div");
            t.className = "modal-scrollbar-measure", this.$body.append(t);
            var e = t.offsetWidth - t.clientWidth;
            return this.$body[0].removeChild(t), e
        };
        var n = t.fn.modal;
        t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function () {
            return t.fn.modal = n, this
        }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (i) {
            var n = t(this), r = n.attr("href"), s = t(n.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")),
                o = s.data("bs.modal") ? "toggle" : t.extend({remote: !/#/.test(r) && r}, s.data(), n.data());
            n.is("a") && i.preventDefault(), s.one("show.bs.modal", function (t) {
                t.isDefaultPrevented() || s.one("hidden.bs.modal", function () {
                    n.is(":visible") && n.trigger("focus")
                })
            }), e.call(s, o, this)
        })
    }(jQuery), /* ========================================================================
 * Bootstrap: tooltip.js v3.3.7
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
    +function (t) {
        "use strict";

        function e(e) {
            return this.each(function () {
                var n = t(this), r = n.data("bs.tooltip"), s = "object" == typeof e && e;
                !r && /destroy|hide/.test(e) || (r || n.data("bs.tooltip", r = new i(this, s)), "string" == typeof e && r[e]())
            })
        }

        var i = function (t, e) {
            this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
        };
        i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.DEFAULTS = {
            animation: !0,
            placement: "top",
            selector: !1,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            container: !1,
            viewport: {selector: "body", padding: 0}
        }, i.prototype.init = function (e, i, n) {
            if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(n), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                    click: !1,
                    hover: !1,
                    focus: !1
                }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
            for (var r = this.options.trigger.split(" "), s = r.length; s--;) {
                var o = r[s];
                if ("click" == o) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this)); else if ("manual" != o) {
                    var a = "hover" == o ? "mouseenter" : "focusin", l = "hover" == o ? "mouseleave" : "focusout";
                    this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
                }
            }
            this.options.selector ? this._options = t.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        }, i.prototype.getDefaults = function () {
            return i.DEFAULTS
        }, i.prototype.getOptions = function (e) {
            return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }), e
        }, i.prototype.getDelegateOptions = function () {
            var e = {}, i = this.getDefaults();
            return this._options && t.each(this._options, function (t, n) {
                i[t] != n && (e[t] = n)
            }), e
        }, i.prototype.enter = function (e) {
            var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
            return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function () {
                "in" == i.hoverState && i.show()
            }, i.options.delay.show)) : i.show())
        }, i.prototype.isInStateTrue = function () {
            for (var t in this.inState) if (this.inState[t]) return !0;
            return !1
        }, i.prototype.leave = function (e) {
            var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
            if (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), !i.isInStateTrue()) return clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function () {
                "out" == i.hoverState && i.hide()
            }, i.options.delay.hide)) : i.hide()
        }, i.prototype.show = function () {
            var e = t.Event("show.bs." + this.type);
            if (this.hasContent() && this.enabled) {
                this.$element.trigger(e);
                var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                if (e.isDefaultPrevented() || !n) return;
                var r = this, s = this.tip(), o = this.getUID(this.type);
                this.setContent(), s.attr("id", o), this.$element.attr("aria-describedby", o), this.options.animation && s.addClass("fade");
                var a = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement,
                    l = /\s?auto?\s?/i, h = l.test(a);
                h && (a = a.replace(l, "") || "top"), s.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).addClass(a).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
                var c = this.getPosition(), u = s[0].offsetWidth, p = s[0].offsetHeight;
                if (h) {
                    var d = a, f = this.getPosition(this.$viewport);
                    a = "bottom" == a && c.bottom + p > f.bottom ? "top" : "top" == a && c.top - p < f.top ? "bottom" : "right" == a && c.right + u > f.width ? "left" : "left" == a && c.left - u < f.left ? "right" : a, s.removeClass(d).addClass(a)
                }
                var m = this.getCalculatedOffset(a, c, u, p);
                this.applyPlacement(m, a);
                var g = function () {
                    var t = r.hoverState;
                    r.$element.trigger("shown.bs." + r.type), r.hoverState = null, "out" == t && r.leave(r)
                };
                t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", g).emulateTransitionEnd(i.TRANSITION_DURATION) : g()
            }
        }, i.prototype.applyPlacement = function (e, i) {
            var n = this.tip(), r = n[0].offsetWidth, s = n[0].offsetHeight, o = parseInt(n.css("margin-top"), 10),
                a = parseInt(n.css("margin-left"), 10);
            isNaN(o) && (o = 0), isNaN(a) && (a = 0), e.top += o, e.left += a, t.offset.setOffset(n[0], t.extend({
                using: function (t) {
                    n.css({top: Math.round(t.top), left: Math.round(t.left)})
                }
            }, e), 0), n.addClass("in");
            var l = n[0].offsetWidth, h = n[0].offsetHeight;
            "top" == i && h != s && (e.top = e.top + s - h);
            var c = this.getViewportAdjustedDelta(i, e, l, h);
            c.left ? e.left += c.left : e.top += c.top;
            var u = /top|bottom/.test(i), p = u ? 2 * c.left - r + l : 2 * c.top - s + h,
                d = u ? "offsetWidth" : "offsetHeight";
            n.offset(e), this.replaceArrow(p, n[0][d], u)
        }, i.prototype.replaceArrow = function (t, e, i) {
            this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
        }, i.prototype.setContent = function () {
            var t = this.tip(), e = this.getTitle();
            t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
        }, i.prototype.hide = function (e) {
            function n() {
                "in" != r.hoverState && s.detach(), r.$element && r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type), e && e()
            }

            var r = this, s = t(this.$tip), o = t.Event("hide.bs." + this.type);
            if (this.$element.trigger(o), !o.isDefaultPrevented()) return s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n(), this.hoverState = null, this
        }, i.prototype.fixTitle = function () {
            var t = this.$element;
            (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
        }, i.prototype.hasContent = function () {
            return this.getTitle()
        }, i.prototype.getPosition = function (e) {
            e = e || this.$element;
            var i = e[0], n = "BODY" == i.tagName, r = i.getBoundingClientRect();
            null == r.width && (r = t.extend({}, r, {width: r.right - r.left, height: r.bottom - r.top}));
            var s = window.SVGElement && i instanceof window.SVGElement,
                o = n ? {top: 0, left: 0} : s ? null : e.offset(),
                a = {scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()},
                l = n ? {width: t(window).width(), height: t(window).height()} : null;
            return t.extend({}, r, a, l, o)
        }, i.prototype.getCalculatedOffset = function (t, e, i, n) {
            return "bottom" == t ? {
                top: e.top + e.height,
                left: e.left + e.width / 2 - i / 2
            } : "top" == t ? {
                top: e.top - n,
                left: e.left + e.width / 2 - i / 2
            } : "left" == t ? {
                top: e.top + e.height / 2 - n / 2,
                left: e.left - i
            } : {top: e.top + e.height / 2 - n / 2, left: e.left + e.width}
        }, i.prototype.getViewportAdjustedDelta = function (t, e, i, n) {
            var r = {top: 0, left: 0};
            if (!this.$viewport) return r;
            var s = this.options.viewport && this.options.viewport.padding || 0, o = this.getPosition(this.$viewport);
            if (/right|left/.test(t)) {
                var a = e.top - s - o.scroll, l = e.top + s - o.scroll + n;
                a < o.top ? r.top = o.top - a : l > o.top + o.height && (r.top = o.top + o.height - l)
            } else {
                var h = e.left - s, c = e.left + s + i;
                h < o.left ? r.left = o.left - h : c > o.right && (r.left = o.left + o.width - c)
            }
            return r
        }, i.prototype.getTitle = function () {
            var t, e = this.$element, i = this.options;
            return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
        }, i.prototype.getUID = function (t) {
            do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
            return t
        }, i.prototype.tip = function () {
            if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
            return this.$tip
        }, i.prototype.arrow = function () {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        }, i.prototype.enable = function () {
            this.enabled = !0
        }, i.prototype.disable = function () {
            this.enabled = !1
        }, i.prototype.toggleEnabled = function () {
            this.enabled = !this.enabled
        }, i.prototype.toggle = function (e) {
            var i = this;
            e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
        }, i.prototype.destroy = function () {
            var t = this;
            clearTimeout(this.timeout), this.hide(function () {
                t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
            })
        };
        var n = t.fn.tooltip;
        t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function () {
            return t.fn.tooltip = n, this
        }
    }(jQuery), /* ========================================================================
 * Bootstrap: popover.js v3.3.7
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
    +function (t) {
        "use strict";

        function e(e) {
            return this.each(function () {
                var n = t(this), r = n.data("bs.popover"), s = "object" == typeof e && e;
                !r && /destroy|hide/.test(e) || (r || n.data("bs.popover", r = new i(this, s)), "string" == typeof e && r[e]())
            })
        }

        var i = function (t, e) {
            this.init("popover", t, e)
        };
        if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
        i.VERSION = "3.3.7", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        }), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function () {
            return i.DEFAULTS
        }, i.prototype.setContent = function () {
            var t = this.tip(), e = this.getTitle(), i = this.getContent();
            t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
        }, i.prototype.hasContent = function () {
            return this.getTitle() || this.getContent()
        }, i.prototype.getContent = function () {
            var t = this.$element, e = this.options;
            return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
        }, i.prototype.arrow = function () {
            return this.$arrow = this.$arrow || this.tip().find(".arrow")
        };
        var n = t.fn.popover;
        t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function () {
            return t.fn.popover = n, this
        }
    }(jQuery), /* ========================================================================
 * Bootstrap: scrollspy.js v3.3.7
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
    +function (t) {
        "use strict";

        function e(i, n) {
            this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, n), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
        }

        function i(i) {
            return this.each(function () {
                var n = t(this), r = n.data("bs.scrollspy"), s = "object" == typeof i && i;
                r || n.data("bs.scrollspy", r = new e(this, s)), "string" == typeof i && r[i]()
            })
        }

        e.VERSION = "3.3.7", e.DEFAULTS = {offset: 10}, e.prototype.getScrollHeight = function () {
            return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
        }, e.prototype.refresh = function () {
            var e = this, i = "offset", n = 0;
            this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", n = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
                var e = t(this), r = e.data("target") || e.attr("href"), s = /^#./.test(r) && t(r);
                return s && s.length && s.is(":visible") && [[s[i]().top + n, r]] || null
            }).sort(function (t, e) {
                return t[0] - e[0]
            }).each(function () {
                e.offsets.push(this[0]), e.targets.push(this[1])
            })
        }, e.prototype.process = function () {
            var t, e = this.$scrollElement.scrollTop() + this.options.offset, i = this.getScrollHeight(),
                n = this.options.offset + i - this.$scrollElement.height(), r = this.offsets, s = this.targets,
                o = this.activeTarget;
            if (this.scrollHeight != i && this.refresh(), e >= n) return o != (t = s[s.length - 1]) && this.activate(t);
            if (o && e < r[0]) return this.activeTarget = null, this.clear();
            for (t = r.length; t--;) o != s[t] && e >= r[t] && (void 0 === r[t + 1] || e < r[t + 1]) && this.activate(s[t])
        }, e.prototype.activate = function (e) {
            this.activeTarget = e, this.clear();
            var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
                n = t(i).parents("li").addClass("active");
            n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy")
        }, e.prototype.clear = function () {
            t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
        };
        var n = t.fn.scrollspy;
        t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
            return t.fn.scrollspy = n, this
        }, t(window).on("load.bs.scrollspy.data-api", function () {
            t('[data-spy="scroll"]').each(function () {
                var e = t(this);
                i.call(e, e.data())
            })
        })
    }(jQuery), /* ========================================================================
 * Bootstrap: tab.js v3.3.7
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
    +function (t) {
        "use strict";

        function e(e) {
            return this.each(function () {
                var n = t(this), r = n.data("bs.tab");
                r || n.data("bs.tab", r = new i(this)), "string" == typeof e && r[e]()
            })
        }

        var i = function (e) {
            this.element = t(e)
        };
        i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.show = function () {
            var e = this.element, i = e.closest("ul:not(.dropdown-menu)"), n = e.data("target");
            if (n || (n = e.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
                var r = i.find(".active:last a"), s = t.Event("hide.bs.tab", {relatedTarget: e[0]}),
                    o = t.Event("show.bs.tab", {relatedTarget: r[0]});
                if (r.trigger(s), e.trigger(o), !o.isDefaultPrevented() && !s.isDefaultPrevented()) {
                    var a = t(n);
                    this.activate(e.closest("li"), i), this.activate(a, a.parent(), function () {
                        r.trigger({type: "hidden.bs.tab", relatedTarget: e[0]}), e.trigger({
                            type: "shown.bs.tab",
                            relatedTarget: r[0]
                        })
                    })
                }
            }
        }, i.prototype.activate = function (e, n, r) {
            function s() {
                o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), r && r()
            }

            var o = n.find("> .active"),
                a = r && t.support.transition && (o.length && o.hasClass("fade") || !!n.find("> .fade").length);
            o.length && a ? o.one("bsTransitionEnd", s).emulateTransitionEnd(i.TRANSITION_DURATION) : s(), o.removeClass("in")
        };
        var n = t.fn.tab;
        t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function () {
            return t.fn.tab = n, this
        };
        var r = function (i) {
            i.preventDefault(), e.call(t(this), "show")
        };
        t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', r).on("click.bs.tab.data-api", '[data-toggle="pill"]', r)
    }(jQuery), /* ========================================================================
 * Bootstrap: affix.js v3.3.7
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
    +function (t) {
        "use strict";

        function e(e) {
            return this.each(function () {
                var n = t(this), r = n.data("bs.affix"), s = "object" == typeof e && e;
                r || n.data("bs.affix", r = new i(this, s)), "string" == typeof e && r[e]()
            })
        }

        var i = function (e, n) {
            this.options = t.extend({}, i.DEFAULTS, n), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
        };
        i.VERSION = "3.3.7", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
            offset: 0,
            target: window
        }, i.prototype.getState = function (t, e, i, n) {
            var r = this.$target.scrollTop(), s = this.$element.offset(), o = this.$target.height();
            if (null != i && "top" == this.affixed) return r < i && "top";
            if ("bottom" == this.affixed) return null != i ? !(r + this.unpin <= s.top) && "bottom" : !(r + o <= t - n) && "bottom";
            var a = null == this.affixed, l = a ? r : s.top, h = a ? o : e;
            return null != i && r <= i ? "top" : null != n && l + h >= t - n && "bottom"
        }, i.prototype.getPinnedOffset = function () {
            if (this.pinnedOffset) return this.pinnedOffset;
            this.$element.removeClass(i.RESET).addClass("affix");
            var t = this.$target.scrollTop(), e = this.$element.offset();
            return this.pinnedOffset = e.top - t
        }, i.prototype.checkPositionWithEventLoop = function () {
            setTimeout(t.proxy(this.checkPosition, this), 1)
        }, i.prototype.checkPosition = function () {
            if (this.$element.is(":visible")) {
                var e = this.$element.height(), n = this.options.offset, r = n.top, s = n.bottom,
                    o = Math.max(t(document).height(), t(document.body).height());
                "object" != typeof n && (s = r = n), "function" == typeof r && (r = n.top(this.$element)), "function" == typeof s && (s = n.bottom(this.$element));
                var a = this.getState(o, e, r, s);
                if (this.affixed != a) {
                    null != this.unpin && this.$element.css("top", "");
                    var l = "affix" + (a ? "-" + a : ""), h = t.Event(l + ".bs.affix");
                    if (this.$element.trigger(h), h.isDefaultPrevented()) return;
                    this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
                }
                "bottom" == a && this.$element.offset({top: o - e - s})
            }
        };
        var n = t.fn.affix;
        t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function () {
            return t.fn.affix = n, this
        }, t(window).on("load", function () {
            t('[data-spy="affix"]').each(function () {
                var i = t(this), n = i.data();
                n.offset = n.offset || {}, null != n.offsetBottom && (n.offset.bottom = n.offsetBottom), null != n.offsetTop && (n.offset.top = n.offsetTop), e.call(i, n)
            })
        })
    }(jQuery);
//# sourceMappingURL=vendor.js.map
