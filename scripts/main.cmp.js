!(function (t) {
    var e = {};

    function i(n) {
        if (e[n]) return e[n].exports;
        var r = (e[n] = {i: n, l: !1, exports: {}});
        return t[n].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
    }

    (i.m = t),
        (i.c = e),
        (i.d = function (t, e, n) {
            i.o(t, e) || Object.defineProperty(t, e, {configurable: !1, enumerable: !0, get: n});
        }),
        (i.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                        return t["default"];
                    }
                    : function () {
                        return t;
                    };
            return i.d(e, "a", e), e;
        }),
        (i.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (i.p = ""),
        i((i.s = 95));
})([
    function (t, e, i) {
        var n = i(2),
            r = i(19),
            s = i(9),
            o = i(17),
            a = i(13),
            l = function (t, e, i) {
                var c,
                    u,
                    h,
                    d,
                    f = t & l.F,
                    p = t & l.G,
                    v = t & l.S,
                    m = t & l.P,
                    g = t & l.B,
                    y = p ? n : v ? n[e] || (n[e] = {}) : (n[e] || {}).prototype,
                    w = p ? r : r[e] || (r[e] = {}),
                    b = w.prototype || (w.prototype = {});
                for (c in (p && (i = e), i))
                    (h = ((u = !f && y && y[c] !== undefined) ? y : i)[c]), (d = g && u ? a(h, n) : m && "function" == typeof h ? a(Function.call, h) : h), y && o(y, c, h, t & l.U), w[c] != h && s(w, c, d), m && b[c] != h && (b[c] = h);
            };
        (n.core = r), (l.F = 1), (l.G = 2), (l.S = 4), (l.P = 8), (l.B = 16), (l.W = 32), (l.U = 64), (l.R = 128), (t.exports = l);
    },
    function (t, e) {
        t.exports = function (t) {
            return "object" == typeof t ? null !== t : "function" == typeof t;
        };
    },
    function (t, e) {
        var i = (t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")());
        "number" == typeof __g && (__g = i);
    },
    function (t, e, i) {
        var n = i(1);
        t.exports = function (t) {
            if (!n(t)) throw TypeError(t + " is not an object!");
            return t;
        };
    },
    function (t, e, i) {
        var n = i(54)("wks"),
            r = i(21),
            s = i(2).Symbol,
            o = "function" == typeof s;
        (t.exports = function (t) {
            return n[t] || (n[t] = (o && s[t]) || (o ? s : r)("Symbol." + t));
        }).store = n;
    },
    function (t, e) {
        t.exports = function (t) {
            try {
                return !!t();
            } catch (e) {
                return !0;
            }
        };
    },
    function (t, e, i) {
        var n = i(3),
            r = i(69),
            s = i(36),
            o = Object.defineProperty;
        e.f = i(8)
            ? Object.defineProperty
            : function (t, e, i) {
                if ((n(t), (e = s(e, !0)), n(i), r))
                    try {
                        return o(t, e, i);
                    } catch (a) {
                    }
                if ("get" in i || "set" in i) throw TypeError("Accessors not supported!");
                return "value" in i && (t[e] = i.value), t;
            };
    },
    function (t, e, i) {
        var n = i(24),
            r = Math.min;
        t.exports = function (t) {
            return t > 0 ? r(n(t), 9007199254740991) : 0;
        };
    },
    function (t, e, i) {
        t.exports = !i(5)(function () {
            return (
                7 !=
                Object.defineProperty({}, "a", {
                    get: function () {
                        return 7;
                    },
                }).a
            );
        });
    },
    function (t, e, i) {
        var n = i(6),
            r = i(20);
        t.exports = i(8)
            ? function (t, e, i) {
                return n.f(t, e, r(1, i));
            }
            : function (t, e, i) {
                return (t[e] = i), t;
            };
    },
    function (t, e) {
        var i = {}.hasOwnProperty;
        t.exports = function (t, e) {
            return i.call(t, e);
        };
    },
    function (t, e, i) {
        var n = i(51),
            r = i(25);
        t.exports = function (t) {
            return n(r(t));
        };
    },
    function (t, e, i) {
        var n = i(0),
            r = i(19),
            s = i(5);
        t.exports = function (t, e) {
            var i = (r.Object || {})[t] || Object[t],
                o = {};
            (o[t] = e(i)),
                n(
                    n.S +
                    n.F *
                    s(function () {
                        i(1);
                    }),
                    "Object",
                    o
                );
        };
    },
    function (t, e, i) {
        var n = i(22);
        t.exports = function (t, e, i) {
            if ((n(t), e === undefined)) return t;
            switch (i) {
                case 1:
                    return function (i) {
                        return t.call(e, i);
                    };
                case 2:
                    return function (i, n) {
                        return t.call(e, i, n);
                    };
                case 3:
                    return function (i, n, r) {
                        return t.call(e, i, n, r);
                    };
            }
            return function () {
                return t.apply(e, arguments);
            };
        };
    },
    function (t, e, i) {
        var n = i(25);
        t.exports = function (t) {
            return Object(n(t));
        };
    },
    function (t, e, i) {
        "use strict";
        if (i(8)) {
            var n = i(23),
                r = i(2),
                s = i(5),
                o = i(0),
                a = i(50),
                l = i(70),
                c = i(13),
                u = i(28),
                h = i(20),
                d = i(9),
                f = i(27),
                p = i(24),
                v = i(7),
                m = i(71),
                g = i(30),
                y = i(36),
                w = i(10),
                b = i(58),
                _ = i(1),
                E = i(14),
                x = i(59),
                T = i(38),
                S = i(33),
                C = i(37).f,
                M = i(60),
                k = i(21),
                L = i(4),
                A = i(39),
                P = i(52),
                z = i(57),
                I = i(61),
                O = i(32),
                D = i(43),
                $ = i(42),
                N = i(56),
                F = i(77),
                j = i(6),
                B = i(16),
                W = j.f,
                H = B.f,
                R = r.RangeError,
                Y = r.TypeError,
                X = r.Uint8Array,
                V = Array.prototype,
                G = l.ArrayBuffer,
                q = l.DataView,
                U = A(0),
                Z = A(2),
                K = A(3),
                Q = A(4),
                J = A(5),
                tt = A(6),
                et = P(!0),
                it = P(!1),
                nt = I.values,
                rt = I.keys,
                st = I.entries,
                ot = V.lastIndexOf,
                at = V.reduce,
                lt = V.reduceRight,
                ct = V.join,
                ut = V.sort,
                ht = V.slice,
                dt = V.toString,
                ft = V.toLocaleString,
                pt = L("iterator"),
                vt = L("toStringTag"),
                mt = k("typed_constructor"),
                gt = k("def_constructor"),
                yt = a.CONSTR,
                wt = a.TYPED,
                bt = a.VIEW,
                _t = A(1, function (t, e) {
                    return Ct(z(t, t[gt]), e);
                }),
                Et = s(function () {
                    return 1 === new X(new Uint16Array([1]).buffer)[0];
                }),
                xt =
                    !!X &&
                    !!X.prototype.set &&
                    s(function () {
                        new X(1).set({});
                    }),
                Tt = function (t, e) {
                    var i = p(t);
                    if (i < 0 || i % e) throw R("Wrong offset!");
                    return i;
                },
                St = function (t) {
                    if (_(t) && wt in t) return t;
                    throw Y(t + " is not a typed array!");
                },
                Ct = function (t, e) {
                    if (!(_(t) && mt in t)) throw Y("It is not a typed array constructor!");
                    return new t(e);
                },
                Mt = function (t, e) {
                    return kt(z(t, t[gt]), e);
                },
                kt = function (t, e) {
                    for (var i = 0, n = e.length, r = Ct(t, n); n > i;) r[i] = e[i++];
                    return r;
                },
                Lt = function (t, e, i) {
                    W(t, e, {
                        get: function () {
                            return this._d[i];
                        },
                    });
                },
                At = function (t) {
                    var e,
                        i,
                        n,
                        r,
                        s,
                        o,
                        a = E(t),
                        l = arguments.length,
                        u = l > 1 ? arguments[1] : undefined,
                        h = u !== undefined,
                        d = M(a);
                    if (d != undefined && !x(d)) {
                        for (o = d.call(a), n = [], e = 0; !(s = o.next()).done; e++) n.push(s.value);
                        a = n;
                    }
                    for (h && l > 2 && (u = c(u, arguments[2], 2)), e = 0, i = v(a.length), r = Ct(this, i); i > e; e++) r[e] = h ? u(a[e], e) : a[e];
                    return r;
                },
                Pt = function () {
                    for (var t = 0, e = arguments.length, i = Ct(this, e); e > t;) i[t] = arguments[t++];
                    return i;
                },
                zt =
                    !!X &&
                    s(function () {
                        ft.call(new X(1));
                    }),
                It = function () {
                    return ft.apply(zt ? ht.call(St(this)) : St(this), arguments);
                },
                Ot = {
                    copyWithin: function (t, e) {
                        return F.call(St(this), t, e, arguments.length > 2 ? arguments[2] : undefined);
                    },
                    every: function (t) {
                        return Q(St(this), t, arguments.length > 1 ? arguments[1] : undefined);
                    },
                    fill: function (t) {
                        return N.apply(St(this), arguments);
                    },
                    filter: function (t) {
                        return Mt(this, Z(St(this), t, arguments.length > 1 ? arguments[1] : undefined));
                    },
                    find: function (t) {
                        return J(St(this), t, arguments.length > 1 ? arguments[1] : undefined);
                    },
                    findIndex: function (t) {
                        return tt(St(this), t, arguments.length > 1 ? arguments[1] : undefined);
                    },
                    forEach: function (t) {
                        U(St(this), t, arguments.length > 1 ? arguments[1] : undefined);
                    },
                    indexOf: function (t) {
                        return it(St(this), t, arguments.length > 1 ? arguments[1] : undefined);
                    },
                    includes: function (t) {
                        return et(St(this), t, arguments.length > 1 ? arguments[1] : undefined);
                    },
                    join: function (t) {
                        return ct.apply(St(this), arguments);
                    },
                    lastIndexOf: function (t) {
                        return ot.apply(St(this), arguments);
                    },
                    map: function (t) {
                        return _t(St(this), t, arguments.length > 1 ? arguments[1] : undefined);
                    },
                    reduce: function (t) {
                        return at.apply(St(this), arguments);
                    },
                    reduceRight: function (t) {
                        return lt.apply(St(this), arguments);
                    },
                    reverse: function () {
                        for (var t, e = St(this).length, i = Math.floor(e / 2), n = 0; n < i;) (t = this[n]), (this[n++] = this[--e]), (this[e] = t);
                        return this;
                    },
                    some: function (t) {
                        return K(St(this), t, arguments.length > 1 ? arguments[1] : undefined);
                    },
                    sort: function (t) {
                        return ut.call(St(this), t);
                    },
                    subarray: function (t, e) {
                        var i = St(this),
                            n = i.length,
                            r = g(t, n);
                        return new (z(i, i[gt]))(i.buffer, i.byteOffset + r * i.BYTES_PER_ELEMENT, v((e === undefined ? n : g(e, n)) - r));
                    },
                },
                Dt = function (t, e) {
                    return Mt(this, ht.call(St(this), t, e));
                },
                $t = function (t) {
                    St(this);
                    var e = Tt(arguments[1], 1),
                        i = this.length,
                        n = E(t),
                        r = v(n.length),
                        s = 0;
                    if (r + e > i) throw R("Wrong length!");
                    for (; s < r;) this[e + s] = n[s++];
                },
                Nt = {
                    entries: function () {
                        return st.call(St(this));
                    },
                    keys: function () {
                        return rt.call(St(this));
                    },
                    values: function () {
                        return nt.call(St(this));
                    },
                },
                Ft = function (t, e) {
                    return _(t) && t[wt] && "symbol" != typeof e && e in t && String(+e) == String(e);
                },
                jt = function (t, e) {
                    return Ft(t, (e = y(e, !0))) ? h(2, t[e]) : H(t, e);
                },
                Bt = function (t, e, i) {
                    return !(Ft(t, (e = y(e, !0))) && _(i) && w(i, "value")) || w(i, "get") || w(i, "set") || i.configurable || (w(i, "writable") && !i.writable) || (w(i, "enumerable") && !i.enumerable) ? W(t, e, i) : ((t[e] = i.value), t);
                };
            yt || ((B.f = jt), (j.f = Bt)),
                o(o.S + o.F * !yt, "Object", {getOwnPropertyDescriptor: jt, defineProperty: Bt}),
            s(function () {
                dt.call({});
            }) &&
            (dt = ft = function () {
                return ct.call(this);
            });
            var Wt = f({}, Ot);
            f(Wt, Nt),
                d(Wt, pt, Nt.values),
                f(Wt, {
                    slice: Dt, set: $t, constructor: function () {
                    }, toString: dt, toLocaleString: It
                }),
                Lt(Wt, "buffer", "b"),
                Lt(Wt, "byteOffset", "o"),
                Lt(Wt, "byteLength", "l"),
                Lt(Wt, "length", "e"),
                W(Wt, vt, {
                    get: function () {
                        return this[wt];
                    },
                }),
                (t.exports = function (t, e, i, l) {
                    var c = t + ((l = !!l) ? "Clamped" : "") + "Array",
                        h = "get" + t,
                        f = "set" + t,
                        p = r[c],
                        g = p || {},
                        y = p && S(p),
                        w = !p || !a.ABV,
                        E = {},
                        x = p && p.prototype,
                        M = function (t, i) {
                            W(t, i, {
                                get: function () {
                                    return (function (t, i) {
                                        var n = t._d;
                                        return n.v[h](i * e + n.o, Et);
                                    })(this, i);
                                },
                                set: function (t) {
                                    return (function (t, i, n) {
                                        var r = t._d;
                                        l && (n = (n = Math.round(n)) < 0 ? 0 : n > 255 ? 255 : 255 & n), r.v[f](i * e + r.o, n, Et);
                                    })(this, i, t);
                                },
                                enumerable: !0,
                            });
                        };
                    w
                        ? ((p = i(function (t, i, n, r) {
                            u(t, p, c, "_d");
                            var s,
                                o,
                                a,
                                l,
                                h = 0,
                                f = 0;
                            if (_(i)) {
                                if (!(i instanceof G || "ArrayBuffer" == (l = b(i)) || "SharedArrayBuffer" == l)) return wt in i ? kt(p, i) : At.call(p, i);
                                (s = i), (f = Tt(n, e));
                                var g = i.byteLength;
                                if (r === undefined) {
                                    if (g % e) throw R("Wrong length!");
                                    if ((o = g - f) < 0) throw R("Wrong length!");
                                } else if ((o = v(r) * e) + f > g) throw R("Wrong length!");
                                a = o / e;
                            } else (a = m(i)), (s = new G((o = a * e)));
                            for (d(t, "_d", {b: s, o: f, l: o, e: a, v: new q(s)}); h < a;) M(t, h++);
                        })),
                            (x = p.prototype = T(Wt)),
                            d(x, "constructor", p))
                        : (s(function () {
                            p(1);
                        }) &&
                        s(function () {
                            new p(-1);
                        }) &&
                        D(function (t) {
                            new p(), new p(null), new p(1.5), new p(t);
                        }, !0)) ||
                        ((p = i(function (t, i, n, r) {
                            var s;
                            return (
                                u(t, p, c),
                                    _(i)
                                        ? i instanceof G || "ArrayBuffer" == (s = b(i)) || "SharedArrayBuffer" == s
                                        ? r !== undefined
                                            ? new g(i, Tt(n, e), r)
                                            : n !== undefined
                                                ? new g(i, Tt(n, e))
                                                : new g(i)
                                        : wt in i
                                            ? kt(p, i)
                                            : At.call(p, i)
                                        : new g(m(i))
                            );
                        })),
                            U(y !== Function.prototype ? C(g).concat(C(y)) : C(g), function (t) {
                                t in p || d(p, t, g[t]);
                            }),
                            (p.prototype = x),
                        n || (x.constructor = p));
                    var k = x[pt],
                        L = !!k && ("values" == k.name || k.name == undefined),
                        A = Nt.values;
                    d(p, mt, !0),
                        d(x, wt, c),
                        d(x, bt, !0),
                        d(x, gt, p),
                    (l ? new p(1)[vt] == c : vt in x) ||
                    W(x, vt, {
                        get: function () {
                            return c;
                        },
                    }),
                        (E[c] = p),
                        o(o.G + o.W + o.F * (p != g), E),
                        o(o.S, c, {BYTES_PER_ELEMENT: e}),
                        o(
                            o.S +
                            o.F *
                            s(function () {
                                g.of.call(p, 1);
                            }),
                            c,
                            {from: At, of: Pt}
                        ),
                    "BYTES_PER_ELEMENT" in x || d(x, "BYTES_PER_ELEMENT", e),
                        o(o.P, c, Ot),
                        $(c),
                        o(o.P + o.F * xt, c, {set: $t}),
                        o(o.P + o.F * !L, c, Nt),
                    n || x.toString == dt || (x.toString = dt),
                        o(
                            o.P +
                            o.F *
                            s(function () {
                                new p(1).slice();
                            }),
                            c,
                            {slice: Dt}
                        ),
                        o(
                            o.P +
                            o.F *
                            (s(function () {
                                    return [1, 2].toLocaleString() != new p([1, 2]).toLocaleString();
                                }) ||
                                !s(function () {
                                    x.toLocaleString.call([1, 2]);
                                })),
                            c,
                            {toLocaleString: It}
                        ),
                        (O[c] = L ? k : A),
                    n || L || d(x, pt, A);
                });
        } else t.exports = function () {
        };
    },
    function (t, e, i) {
        var n = i(40),
            r = i(20),
            s = i(11),
            o = i(36),
            a = i(10),
            l = i(69),
            c = Object.getOwnPropertyDescriptor;
        e.f = i(8)
            ? c
            : function (t, e) {
                if (((t = s(t)), (e = o(e, !0)), l))
                    try {
                        return c(t, e);
                    } catch (i) {
                    }
                if (a(t, e)) return r(!n.f.call(t, e), t[e]);
            };
    },
    function (t, e, i) {
        var n = i(2),
            r = i(9),
            s = i(10),
            o = i(21)("src"),
            a = Function.toString,
            l = ("" + a).split("toString");
        (i(19).inspectSource = function (t) {
            return a.call(t);
        }),
            (t.exports = function (t, e, i, a) {
                var c = "function" == typeof i;
                c && (s(i, "name") || r(i, "name", e)), t[e] !== i && (c && (s(i, o) || r(i, o, t[e] ? "" + t[e] : l.join(String(e)))), t === n ? (t[e] = i) : a ? (t[e] ? (t[e] = i) : r(t, e, i)) : (delete t[e], r(t, e, i)));
            })(Function.prototype, "toString", function () {
                return ("function" == typeof this && this[o]) || a.call(this);
            });
    },
    function (t, e, i) {
        var n = i(21)("meta"),
            r = i(1),
            s = i(10),
            o = i(6).f,
            a = 0,
            l =
                Object.isExtensible ||
                function () {
                    return !0;
                },
            c = !i(5)(function () {
                return l(Object.preventExtensions({}));
            }),
            u = function (t) {
                o(t, n, {value: {i: "O" + ++a, w: {}}});
            },
            h = (t.exports = {
                KEY: n,
                NEED: !1,
                fastKey: function (t, e) {
                    if (!r(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                    if (!s(t, n)) {
                        if (!l(t)) return "F";
                        if (!e) return "E";
                        u(t);
                    }
                    return t[n].i;
                },
                getWeak: function (t, e) {
                    if (!s(t, n)) {
                        if (!l(t)) return !0;
                        if (!e) return !1;
                        u(t);
                    }
                    return t[n].w;
                },
                onFreeze: function (t) {
                    return c && h.NEED && l(t) && !s(t, n) && u(t), t;
                },
            });
    },
    function (t, e) {
        var i = (t.exports = {version: "2.5.6"});
        "number" == typeof __e && (__e = i);
    },
    function (t, e) {
        t.exports = function (t, e) {
            return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e};
        };
    },
    function (t, e) {
        var i = 0,
            n = Math.random();
        t.exports = function (t) {
            return "Symbol(".concat(t === undefined ? "" : t, ")_", (++i + n).toString(36));
        };
    },
    function (t, e) {
        t.exports = function (t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t;
        };
    },
    function (t, e) {
        t.exports = !1;
    },
    function (t, e) {
        var i = Math.ceil,
            n = Math.floor;
        t.exports = function (t) {
            return isNaN((t = +t)) ? 0 : (t > 0 ? n : i)(t);
        };
    },
    function (t, e) {
        t.exports = function (t) {
            if (t == undefined) throw TypeError("Can't call method on  " + t);
            return t;
        };
    },
    function (t, e, i) {
        var n = i(72),
            r = i(55);
        t.exports =
            Object.keys ||
            function (t) {
                return n(t, r);
            };
    },
    function (t, e, i) {
        var n = i(17);
        t.exports = function (t, e, i) {
            for (var r in e) n(t, r, e[r], i);
            return t;
        };
    },
    function (t, e) {
        t.exports = function (t, e, i, n) {
            if (!(t instanceof e) || (n !== undefined && n in t)) throw TypeError(i + ": incorrect invocation!");
            return t;
        };
    },
    function (t, e) {
        var i = {}.toString;
        t.exports = function (t) {
            return i.call(t).slice(8, -1);
        };
    },
    function (t, e, i) {
        var n = i(24),
            r = Math.max,
            s = Math.min;
        t.exports = function (t, e) {
            return (t = n(t)) < 0 ? r(t + e, 0) : s(t, e);
        };
    },
    function (t, e, i) {
        var n = i(6).f,
            r = i(10),
            s = i(4)("toStringTag");
        t.exports = function (t, e, i) {
            t && !r((t = i ? t : t.prototype), s) && n(t, s, {configurable: !0, value: e});
        };
    },
    function (t, e) {
        t.exports = {};
    },
    function (t, e, i) {
        var n = i(10),
            r = i(14),
            s = i(53)("IE_PROTO"),
            o = Object.prototype;
        t.exports =
            Object.getPrototypeOf ||
            function (t) {
                return (t = r(t)), n(t, s) ? t[s] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? o : null;
            };
    },
    function (t, e, i) {
        var n = i(4)("unscopables"),
            r = Array.prototype;
        r[n] == undefined && i(9)(r, n, {}),
            (t.exports = function (t) {
                r[n][t] = !0;
            });
    },
    function (t, e, i) {
        var n = i(1);
        t.exports = function (t, e) {
            if (!n(t) || t._t !== e) throw TypeError("Incompatible receiver, " + e + " required!");
            return t;
        };
    },
    function (t, e, i) {
        var n = i(1);
        t.exports = function (t, e) {
            if (!n(t)) return t;
            var i, r;
            if (e && "function" == typeof (i = t.toString) && !n((r = i.call(t)))) return r;
            if ("function" == typeof (i = t.valueOf) && !n((r = i.call(t)))) return r;
            if (!e && "function" == typeof (i = t.toString) && !n((r = i.call(t)))) return r;
            throw TypeError("Can't convert object to primitive value");
        };
    },
    function (t, e, i) {
        var n = i(72),
            r = i(55).concat("length", "prototype");
        e.f =
            Object.getOwnPropertyNames ||
            function (t) {
                return n(t, r);
            };
    },
    function (t, e, i) {
        var n = i(3),
            r = i(100),
            s = i(55),
            o = i(53)("IE_PROTO"),
            a = function () {
            },
            l = function () {
                var t,
                    e = i(49)("iframe"),
                    n = s.length;
                for (e.style.display = "none", i(73).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object</script>"), t.close(), l = t.F; n--;) delete l.prototype[s[n]];
                return l();
            };
        t.exports =
            Object.create ||
            function (t, e) {
                var i;
                return null !== t ? ((a.prototype = n(t)), (i = new a()), (a.prototype = null), (i[o] = t)) : (i = l()), e === undefined ? i : r(i, e);
            };
    },
    function (t, e, i) {
        var n = i(13),
            r = i(51),
            s = i(14),
            o = i(7),
            a = i(101);
        t.exports = function (t, e) {
            var i = 1 == t,
                l = 2 == t,
                c = 3 == t,
                u = 4 == t,
                h = 6 == t,
                d = 5 == t || h,
                f = e || a;
            return function (e, a, p) {
                for (var v, m, g = s(e), y = r(g), w = n(a, p, 3), b = o(y.length), _ = 0, E = i ? f(e, b) : l ? f(e, 0) : undefined; b > _; _++)
                    if ((d || _ in y) && ((m = w((v = y[_]), _, g)), t))
                        if (i) E[_] = m;
                        else if (m)
                            switch (t) {
                                case 3:
                                    return !0;
                                case 5:
                                    return v;
                                case 6:
                                    return _;
                                case 2:
                                    E.push(v);
                            }
                        else if (u) return !1;
                return h ? -1 : c || u ? u : E;
            };
        };
    },
    function (t, e) {
        e.f = {}.propertyIsEnumerable;
    },
    function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = (function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                }
            }

            return function (e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e;
            };
        })();
        e.Tracking = (function () {
            function t() {
                !(function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                })(this, t),
                    (this.tag = window.ATInternet ? new ATInternet.Tracker.Tag() : null),
                    (this.CHAPTER_2 = document.body.dataset.museum ? document.body.dataset.museum.split(" ").join("_") : document.title.split(" ").join("_")),
                this.tag && this.configureTracking(this.tag);
            }

            return (
                n(t, [
                    {
                        key: "sendSzmPi",
                        value: function () {
                            this.sendSZM();
                        },
                    },
                    {
                        key: "sendAtPi",
                        value: function (t) {
                            var e = t || (document.body.dataset.museum ? document.title.split(" ").join("_") : "startseite-" + document.title.split(" ").join("_"));
                            this.tag && (this.tag.page.set({
                                level2: 14,
                                chapter1: "Geheimnis der Bilder",
                                chapter2: this.CHAPTER_2,
                                chapter3: "A080351",
                                name: e
                            }), this.tag.dispatch());
                        },
                    },
                    {
                        key: "configureTracking",
                        value: function (t) {
                            (window.atiTracking = function (e, i, n) {
                                return t.click.send({
                                    elem: e,
                                    name: i,
                                    type: n,
                                    level2: 14,
                                    chapter1: "Geheimnis der Bilder",
                                    chapter2: this.CHAPTER_2,
                                    chapter3: "A080351"
                                });
                            }),
                                this._addEvents();
                        },
                    },
                    {
                        key: "sendSZM",
                        value: function () {
                            window.setTimeout(this._sendSZMDelay, 1e3);
                        },
                    },
                    {
                        key: "_sendSZMDelay",
                        value: function () {
                            try {
                                iom.h({st: "zdf", cp: "kultur/Geheimnis_der_Bilder", sv: "ke"}, 1);
                            } catch (t) {
                                window.setTimeout(this._sendSZMDelay, 1e3);
                            }
                        },
                    },
                    {
                        key: "_addEvents",
                        value: function () {
                            var t = document.querySelectorAll(".museum-overview__museum-wrapper"),
                                e = document.querySelector(".museum-page__scrollslider__slide--museum__text-logo a"),
                                i = document.querySelector(".navigation__item-link--home"),
                                n = document.querySelector(".navigation__item-link--collection");
                            e &&
                            e.addEventListener("click", function (t) {
                                window.atiTracking(t.currentTarget, "museum-extern-click", "navigation");
                            }),
                            t &&
                            t.forEach(function (t) {
                                t.addEventListener("click", function (t) {
                                    window.atiTracking(t.currentTarget, "teaser-click", "action");
                                });
                            }),
                            i &&
                            i.addEventListener("click", function () {
                                window.atiTracking(i, "startseiten-click", "navigation");
                            }),
                            n &&
                            n.addEventListener("click", function () {
                                window.atiTracking(n, "sammlung-click", "navigation");
                            });
                        },
                    },
                ]),
                    t
            );
        })();
    },
    function (t, e, i) {
        "use strict";
        var n = i(2),
            r = i(6),
            s = i(8),
            o = i(4)("species");
        t.exports = function (t) {
            var e = n[t];
            s &&
            e &&
            !e[o] &&
            r.f(e, o, {
                configurable: !0,
                get: function () {
                    return this;
                },
            });
        };
    },
    function (t, e, i) {
        var n = i(4)("iterator"),
            r = !1;
        try {
            var s = [7][n]();
            (s["return"] = function () {
                r = !0;
            }),
                Array.from(s, function () {
                    throw 2;
                });
        } catch (o) {
        }
        t.exports = function (t, e) {
            if (!e && !r) return !1;
            var i = !1;
            try {
                var s = [7],
                    a = s[n]();
                (a.next = function () {
                    return {done: (i = !0)};
                }),
                    (s[n] = function () {
                        return a;
                    }),
                    t(s);
            } catch (o) {
            }
            return i;
        };
    },
    function (t, e, i) {
        var n = i(13),
            r = i(79),
            s = i(59),
            o = i(3),
            a = i(7),
            l = i(60),
            c = {},
            u = {};
        ((e = t.exports = function (t, e, i, h, d) {
            var f,
                p,
                v,
                m,
                g = d
                    ? function () {
                        return t;
                    }
                    : l(t),
                y = n(i, h, e ? 2 : 1),
                w = 0;
            if ("function" != typeof g) throw TypeError(t + " is not iterable!");
            if (s(g)) {
                for (f = a(t.length); f > w; w++) if ((m = e ? y(o((p = t[w]))[0], p[1]) : y(t[w])) === c || m === u) return m;
            } else for (v = g.call(t); !(p = v.next()).done;) if ((m = r(v, y, p.value, e)) === c || m === u) return m;
        }).BREAK = c),
            (e.RETURN = u);
    },
    function (t, e, i) {
        "use strict";
        var n = i(2),
            r = i(0),
            s = i(17),
            o = i(27),
            a = i(18),
            l = i(44),
            c = i(28),
            u = i(1),
            h = i(5),
            d = i(43),
            f = i(31),
            p = i(113);
        t.exports = function (t, e, i, v, m, g) {
            var y = n[t],
                w = y,
                b = m ? "set" : "add",
                _ = w && w.prototype,
                E = {},
                x = function (t) {
                    var e = _[t];
                    s(
                        _,
                        t,
                        "delete" == t
                            ? function (t) {
                                return !(g && !u(t)) && e.call(this, 0 === t ? 0 : t);
                            }
                            : "has" == t
                            ? function (t) {
                                return !(g && !u(t)) && e.call(this, 0 === t ? 0 : t);
                            }
                            : "get" == t
                                ? function (t) {
                                    return g && !u(t) ? undefined : e.call(this, 0 === t ? 0 : t);
                                }
                                : "add" == t
                                    ? function (t) {
                                        return e.call(this, 0 === t ? 0 : t), this;
                                    }
                                    : function (t, i) {
                                        return e.call(this, 0 === t ? 0 : t, i), this;
                                    }
                    );
                };
            if (
                "function" == typeof w &&
                (g ||
                    (_.forEach &&
                        !h(function () {
                            new w().entries().next();
                        })))
            ) {
                var T = new w(),
                    S = T[b](g ? {} : -0, 1) != T,
                    C = h(function () {
                        T.has(1);
                    }),
                    M = d(function (t) {
                        new w(t);
                    }),
                    k =
                        !g &&
                        h(function () {
                            for (var t = new w(), e = 5; e--;) t[b](e, e);
                            return !t.has(-0);
                        });
                M ||
                (((w = e(function (e, i) {
                    c(e, w, t);
                    var n = p(new y(), e, w);
                    return i != undefined && l(i, m, n[b], n), n;
                })).prototype = _),
                    (_.constructor = w)),
                (C || k) && (x("delete"), x("has"), m && x("get")),
                (k || S) && x(b),
                g && _.clear && delete _.clear;
            } else (w = v.getConstructor(e, t, m, b)), o(w.prototype, i), (a.NEED = !0);
            return f(w, t), (E[t] = w), r(r.G + r.W + r.F * (w != y), E), g || v.setStrong(w, t, m), w;
        };
    },
    function (t, e) {
        e.f = Object.getOwnPropertySymbols;
    },
    function (t, e, i) {
        var n = i(2).navigator;
        t.exports = (n && n.userAgent) || "";
    },
    function (t, e, i) {
        "use strict";
        var n = i(9),
            r = i(17),
            s = i(5),
            o = i(25),
            a = i(4);
        t.exports = function (t, e, i) {
            var l = a(t),
                c = i(o, l, ""[t]),
                u = c[0],
                h = c[1];
            s(function () {
                var e = {};
                return (
                    (e[l] = function () {
                        return 7;
                    }),
                    7 != ""[t](e)
                );
            }) &&
            (r(String.prototype, t, u),
                n(
                    RegExp.prototype,
                    l,
                    2 == e
                        ? function (t, e) {
                            return h.call(t, this, e);
                        }
                        : function (t) {
                            return h.call(t, this);
                        }
                ));
        };
    },
    function (t, e, i) {
        var n = i(1),
            r = i(2).document,
            s = n(r) && n(r.createElement);
        t.exports = function (t) {
            return s ? r.createElement(t) : {};
        };
    },
    function (t, e, i) {
        for (
            var n,
                r = i(2),
                s = i(9),
                o = i(21),
                a = o("typed_array"),
                l = o("view"),
                c = !(!r.ArrayBuffer || !r.DataView),
                u = c,
                h = 0,
                d = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");
            h < 9;
        )
            (n = r[d[h++]]) ? (s(n.prototype, a, !0), s(n.prototype, l, !0)) : (u = !1);
        t.exports = {ABV: c, CONSTR: u, TYPED: a, VIEW: l};
    },
    function (t, e, i) {
        var n = i(29);
        t.exports = Object("z").propertyIsEnumerable(0)
            ? Object
            : function (t) {
                return "String" == n(t) ? t.split("") : Object(t);
            };
    },
    function (t, e, i) {
        var n = i(11),
            r = i(7),
            s = i(30);
        t.exports = function (t) {
            return function (e, i, o) {
                var a,
                    l = n(e),
                    c = r(l.length),
                    u = s(o, c);
                if (t && i != i) {
                    for (; c > u;) if ((a = l[u++]) != a) return !0;
                } else for (; c > u; u++) if ((t || u in l) && l[u] === i) return t || u || 0;
                return !t && -1;
            };
        };
    },
    function (t, e, i) {
        var n = i(54)("keys"),
            r = i(21);
        t.exports = function (t) {
            return n[t] || (n[t] = r(t));
        };
    },
    function (t, e, i) {
        var n = i(19),
            r = i(2),
            s = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
        (t.exports = function (t, e) {
            return s[t] || (s[t] = e !== undefined ? e : {});
        })("versions", []).push({
            version: n.version,
            mode: i(23) ? "pure" : "global",
            copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
        });
    },
    function (t, e) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    },
    function (t, e, i) {
        "use strict";
        var n = i(14),
            r = i(30),
            s = i(7);
        t.exports = function (t) {
            for (var e = n(this), i = s(e.length), o = arguments.length, a = r(o > 1 ? arguments[1] : undefined, i), l = o > 2 ? arguments[2] : undefined, c = l === undefined ? i : r(l, i); c > a;) e[a++] = t;
            return e;
        };
    },
    function (t, e, i) {
        var n = i(3),
            r = i(22),
            s = i(4)("species");
        t.exports = function (t, e) {
            var i,
                o = n(t).constructor;
            return o === undefined || (i = n(o)[s]) == undefined ? e : r(i);
        };
    },
    function (t, e, i) {
        var n = i(29),
            r = i(4)("toStringTag"),
            s =
                "Arguments" ==
                n(
                    (function () {
                        return arguments;
                    })()
                );
        t.exports = function (t) {
            var e, i, o;
            return t === undefined
                ? "Undefined"
                : null === t
                    ? "Null"
                    : "string" ==
                    typeof (i = (function (t, e) {
                        try {
                            return t[e];
                        } catch (i) {
                        }
                    })((e = Object(t)), r))
                        ? i
                        : s
                            ? n(e)
                            : "Object" == (o = n(e)) && "function" == typeof e.callee
                                ? "Arguments"
                                : o;
        };
    },
    function (t, e, i) {
        var n = i(32),
            r = i(4)("iterator"),
            s = Array.prototype;
        t.exports = function (t) {
            return t !== undefined && (n.Array === t || s[r] === t);
        };
    },
    function (t, e, i) {
        var n = i(58),
            r = i(4)("iterator"),
            s = i(32);
        t.exports = i(19).getIteratorMethod = function (t) {
            if (t != undefined) return t[r] || t["@@iterator"] || s[n(t)];
        };
    },
    function (t, e, i) {
        "use strict";
        var n = i(34),
            r = i(75),
            s = i(32),
            o = i(11);
        (t.exports = i(76)(
            Array,
            "Array",
            function (t, e) {
                (this._t = o(t)), (this._i = 0), (this._k = e);
            },
            function () {
                var t = this._t,
                    e = this._k,
                    i = this._i++;
                return !t || i >= t.length ? ((this._t = undefined), r(1)) : r(0, "keys" == e ? i : "values" == e ? t[i] : [i, t[i]]);
            },
            "values"
        )),
            (s.Arguments = s.Array),
            n("keys"),
            n("values"),
            n("entries");
    },
    function (t, e, i) {
        var n = i(1),
            r = i(3),
            s = function (t, e) {
                if ((r(t), !n(e) && null !== e)) throw TypeError(e + ": can't set as prototype!");
            };
        t.exports = {
            set:
            Object.setPrototypeOf ||
            ("__proto__" in {}
                ? (function (t, e, n) {
                    try {
                        (n = i(13)(Function.call, i(16).f(Object.prototype, "__proto__").set, 2))(t, []), (e = !(t instanceof Array));
                    } catch (r) {
                        e = !0;
                    }
                    return function (t, i) {
                        return s(t, i), e ? (t.__proto__ = i) : n(t, i), t;
                    };
                })({}, !1)
                : undefined),
            check: s,
        };
    },
    function (t, e, i) {
        var n,
            r,
            s,
            o = i(13),
            a = i(82),
            l = i(73),
            c = i(49),
            u = i(2),
            h = u.process,
            d = u.setImmediate,
            f = u.clearImmediate,
            p = u.MessageChannel,
            v = u.Dispatch,
            m = 0,
            g = {},
            y = function () {
                var t = +this;
                if (g.hasOwnProperty(t)) {
                    var e = g[t];
                    delete g[t], e();
                }
            },
            w = function (t) {
                y.call(t.data);
            };
        (d && f) ||
        ((d = function (t) {
            for (var e = [], i = 1; arguments.length > i;) e.push(arguments[i++]);
            return (
                (g[++m] = function () {
                    a("function" == typeof t ? t : Function(t), e);
                }),
                    n(m),
                    m
            );
        }),
            (f = function (t) {
                delete g[t];
            }),
            "process" == i(29)(h)
                ? (n = function (t) {
                    h.nextTick(o(y, t, 1));
                })
                : v && v.now
                ? (n = function (t) {
                    v.now(o(y, t, 1));
                })
                : p
                    ? ((s = (r = new p()).port2), (r.port1.onmessage = w), (n = o(s.postMessage, s, 1)))
                    : u.addEventListener && "function" == typeof postMessage && !u.importScripts
                        ? ((n = function (t) {
                            u.postMessage(t + "", "*");
                        }),
                            u.addEventListener("message", w, !1))
                        : (n =
                            "onreadystatechange" in c("script")
                                ? function (t) {
                                    l.appendChild(c("script")).onreadystatechange = function () {
                                        l.removeChild(this), y.call(t);
                                    };
                                }
                                : function (t) {
                                    setTimeout(o(y, t, 1), 0);
                                })),
            (t.exports = {set: d, clear: f});
    },
    function (t, e, i) {
        var n = i(88),
            r = i(25);
        t.exports = function (t, e, i) {
            if (n(e)) throw TypeError("String#" + i + " doesn't accept regex!");
            return String(r(t));
        };
    },
    function (t, e, i) {
        var n = i(4)("match");
        t.exports = function (t) {
            var e = /./;
            try {
                "/./"[t](e);
            } catch (i) {
                try {
                    return (e[n] = !1), !"/./"[t](e);
                } catch (r) {
                }
            }
            return !0;
        };
    },
    function (t, e, i) {
        "use strict";
        var n = i(6),
            r = i(20);
        t.exports = function (t, e, i) {
            e in t ? n.f(t, e, r(0, i)) : (t[e] = i);
        };
    },
    function (t, e) {
        t.exports =
            Math.sign ||
            function (t) {
                return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1;
            };
    },
    function (t, e) {
        var i = Math.expm1;
        t.exports =
            !i || i(10) > 22025.465794806718 || i(10) < 22025.465794806718 || -2e-17 != i(-2e-17)
                ? function (t) {
                    return 0 == (t = +t) ? t : t > -1e-6 && t < 1e-6 ? t + (t * t) / 2 : Math.exp(t) - 1;
                }
                : i;
    },
    function (t, e, i) {
        t.exports =
            !i(8) &&
            !i(5)(function () {
                return (
                    7 !=
                    Object.defineProperty(i(49)("div"), "a", {
                        get: function () {
                            return 7;
                        },
                    }).a
                );
            });
    },
    function (t, e, i) {
        "use strict";
        var n = i(2),
            r = i(8),
            s = i(23),
            o = i(50),
            a = i(9),
            l = i(27),
            c = i(5),
            u = i(28),
            h = i(24),
            d = i(7),
            f = i(71),
            p = i(37).f,
            v = i(6).f,
            m = i(56),
            g = i(31),
            y = "prototype",
            w = "Wrong index!",
            b = n.ArrayBuffer,
            _ = n.DataView,
            E = n.Math,
            x = n.RangeError,
            T = n.Infinity,
            S = b,
            C = E.abs,
            M = E.pow,
            k = E.floor,
            L = E.log,
            A = E.LN2,
            P = r ? "_b" : "buffer",
            z = r ? "_l" : "byteLength",
            I = r ? "_o" : "byteOffset";

        function O(t, e, i) {
            var n,
                r,
                s,
                o = new Array(i),
                a = 8 * i - e - 1,
                l = (1 << a) - 1,
                c = l >> 1,
                u = 23 === e ? M(2, -24) - M(2, -77) : 0,
                h = 0,
                d = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
            for (
                (t = C(t)) != t || t === T
                    ? ((r = t != t ? 1 : 0), (n = l))
                    : ((n = k(L(t) / A)),
                    t * (s = M(2, -n)) < 1 && (n--, (s *= 2)),
                    (t += n + c >= 1 ? u / s : u * M(2, 1 - c)) * s >= 2 && (n++, (s /= 2)),
                        n + c >= l ? ((r = 0), (n = l)) : n + c >= 1 ? ((r = (t * s - 1) * M(2, e)), (n += c)) : ((r = t * M(2, c - 1) * M(2, e)), (n = 0)));
                e >= 8;
                o[h++] = 255 & r, r /= 256, e -= 8
            ) ;
            for (n = (n << e) | r, a += e; a > 0; o[h++] = 255 & n, n /= 256, a -= 8) ;
            return (o[--h] |= 128 * d), o;
        }

        function D(t, e, i) {
            var n,
                r = 8 * i - e - 1,
                s = (1 << r) - 1,
                o = s >> 1,
                a = r - 7,
                l = i - 1,
                c = t[l--],
                u = 127 & c;
            for (c >>= 7; a > 0; u = 256 * u + t[l], l--, a -= 8) ;
            for (n = u & ((1 << -a) - 1), u >>= -a, a += e; a > 0; n = 256 * n + t[l], l--, a -= 8) ;
            if (0 === u) u = 1 - o;
            else {
                if (u === s) return n ? NaN : c ? -T : T;
                (n += M(2, e)), (u -= o);
            }
            return (c ? -1 : 1) * n * M(2, u - e);
        }

        function $(t) {
            return (t[3] << 24) | (t[2] << 16) | (t[1] << 8) | t[0];
        }

        function N(t) {
            return [255 & t];
        }

        function F(t) {
            return [255 & t, (t >> 8) & 255];
        }

        function j(t) {
            return [255 & t, (t >> 8) & 255, (t >> 16) & 255, (t >> 24) & 255];
        }

        function B(t) {
            return O(t, 52, 8);
        }

        function W(t) {
            return O(t, 23, 4);
        }

        function H(t, e, i) {
            v(t[y], e, {
                get: function () {
                    return this[i];
                },
            });
        }

        function R(t, e, i, n) {
            var r = f(+i);
            if (r + e > t[z]) throw x(w);
            var s = t[P]._b,
                o = r + t[I],
                a = s.slice(o, o + e);
            return n ? a : a.reverse();
        }

        function Y(t, e, i, n, r, s) {
            var o = f(+i);
            if (o + e > t[z]) throw x(w);
            for (var a = t[P]._b, l = o + t[I], c = n(+r), u = 0; u < e; u++) a[l + u] = c[s ? u : e - u - 1];
        }

        if (o.ABV) {
            if (
                !c(function () {
                    b(1);
                }) ||
                !c(function () {
                    new b(-1);
                }) ||
                c(function () {
                    return new b(), new b(1.5), new b(NaN), "ArrayBuffer" != b.name;
                })
            ) {
                for (
                    var X,
                        V = ((b = function (t) {
                            return u(this, b), new S(f(t));
                        })[y] = S[y]),
                        G = p(S),
                        q = 0;
                    G.length > q;
                )
                    (X = G[q++]) in b || a(b, X, S[X]);
                s || (V.constructor = b);
            }
            var U = new _(new b(2)),
                Z = _[y].setInt8;
            U.setInt8(0, 2147483648),
                U.setInt8(1, 2147483649),
            (!U.getInt8(0) && U.getInt8(1)) ||
            l(
                _[y],
                {
                    setInt8: function (t, e) {
                        Z.call(this, t, (e << 24) >> 24);
                    },
                    setUint8: function (t, e) {
                        Z.call(this, t, (e << 24) >> 24);
                    },
                },
                !0
            );
        } else
            (b = function (t) {
                u(this, b, "ArrayBuffer");
                var e = f(t);
                (this._b = m.call(new Array(e), 0)), (this[z] = e);
            }),
                (_ = function (t, e, i) {
                    u(this, _, "DataView"), u(t, b, "DataView");
                    var n = t[z],
                        r = h(e);
                    if (r < 0 || r > n) throw x("Wrong offset!");
                    if (r + (i = i === undefined ? n - r : d(i)) > n) throw x("Wrong length!");
                    (this[P] = t), (this[I] = r), (this[z] = i);
                }),
            r && (H(b, "byteLength", "_l"), H(_, "buffer", "_b"), H(_, "byteLength", "_l"), H(_, "byteOffset", "_o")),
                l(_[y], {
                    getInt8: function (t) {
                        return (R(this, 1, t)[0] << 24) >> 24;
                    },
                    getUint8: function (t) {
                        return R(this, 1, t)[0];
                    },
                    getInt16: function (t) {
                        var e = R(this, 2, t, arguments[1]);
                        return (((e[1] << 8) | e[0]) << 16) >> 16;
                    },
                    getUint16: function (t) {
                        var e = R(this, 2, t, arguments[1]);
                        return (e[1] << 8) | e[0];
                    },
                    getInt32: function (t) {
                        return $(R(this, 4, t, arguments[1]));
                    },
                    getUint32: function (t) {
                        return $(R(this, 4, t, arguments[1])) >>> 0;
                    },
                    getFloat32: function (t) {
                        return D(R(this, 4, t, arguments[1]), 23, 4);
                    },
                    getFloat64: function (t) {
                        return D(R(this, 8, t, arguments[1]), 52, 8);
                    },
                    setInt8: function (t, e) {
                        Y(this, 1, t, N, e);
                    },
                    setUint8: function (t, e) {
                        Y(this, 1, t, N, e);
                    },
                    setInt16: function (t, e) {
                        Y(this, 2, t, F, e, arguments[2]);
                    },
                    setUint16: function (t, e) {
                        Y(this, 2, t, F, e, arguments[2]);
                    },
                    setInt32: function (t, e) {
                        Y(this, 4, t, j, e, arguments[2]);
                    },
                    setUint32: function (t, e) {
                        Y(this, 4, t, j, e, arguments[2]);
                    },
                    setFloat32: function (t, e) {
                        Y(this, 4, t, W, e, arguments[2]);
                    },
                    setFloat64: function (t, e) {
                        Y(this, 8, t, B, e, arguments[2]);
                    },
                });
        g(b, "ArrayBuffer"), g(_, "DataView"), a(_[y], o.VIEW, !0), (e.ArrayBuffer = b), (e.DataView = _);
    },
    function (t, e, i) {
        var n = i(24),
            r = i(7);
        t.exports = function (t) {
            if (t === undefined) return 0;
            var e = n(t),
                i = r(e);
            if (e !== i) throw RangeError("Wrong length!");
            return i;
        };
    },
    function (t, e, i) {
        var n = i(10),
            r = i(11),
            s = i(52)(!1),
            o = i(53)("IE_PROTO");
        t.exports = function (t, e) {
            var i,
                a = r(t),
                l = 0,
                c = [];
            for (i in a) i != o && n(a, i) && c.push(i);
            for (; e.length > l;) n(a, (i = e[l++])) && (~s(c, i) || c.push(i));
            return c;
        };
    },
    function (t, e, i) {
        var n = i(2).document;
        t.exports = n && n.documentElement;
    },
    function (t, e, i) {
        var n = i(29);
        t.exports =
            Array.isArray ||
            function (t) {
                return "Array" == n(t);
            };
    },
    function (t, e) {
        t.exports = function (t, e) {
            return {value: e, done: !!t};
        };
    },
    function (t, e, i) {
        "use strict";
        var n = i(23),
            r = i(0),
            s = i(17),
            o = i(9),
            a = i(32),
            l = i(103),
            c = i(31),
            u = i(33),
            h = i(4)("iterator"),
            d = !([].keys && "next" in [].keys()),
            f = function () {
                return this;
            };
        t.exports = function (t, e, i, p, v, m, g) {
            l(i, e, p);
            var y,
                w,
                b,
                _ = function (t) {
                    if (!d && t in S) return S[t];
                    switch (t) {
                        case "keys":
                        case "values":
                            return function () {
                                return new i(this, t);
                            };
                    }
                    return function () {
                        return new i(this, t);
                    };
                },
                E = e + " Iterator",
                x = "values" == v,
                T = !1,
                S = t.prototype,
                C = S[h] || S["@@iterator"] || (v && S[v]),
                M = C || _(v),
                k = v ? (x ? _("entries") : M) : undefined,
                L = ("Array" == e && S.entries) || C;
            if (
                (L && (b = u(L.call(new t()))) !== Object.prototype && b.next && (c(b, E, !0), n || "function" == typeof b[h] || o(b, h, f)),
                x &&
                C &&
                "values" !== C.name &&
                ((T = !0),
                    (M = function () {
                        return C.call(this);
                    })),
                (n && !g) || (!d && !T && S[h]) || o(S, h, M),
                    (a[e] = M),
                    (a[E] = f),
                    v)
            )
                if (((y = {
                        values: x ? M : _("values"),
                        keys: m ? M : _("keys"),
                        entries: k
                    }), g)) for (w in y) w in S || s(S, w, y[w]);
                else r(r.P + r.F * (d || T), e, y);
            return y;
        };
    },
    function (t, e, i) {
        "use strict";
        var n = i(14),
            r = i(30),
            s = i(7);
        t.exports =
            [].copyWithin ||
            function (t, e) {
                var i = n(this),
                    o = s(i.length),
                    a = r(t, o),
                    l = r(e, o),
                    c = arguments.length > 2 ? arguments[2] : undefined,
                    u = Math.min((c === undefined ? o : r(c, o)) - l, o - a),
                    h = 1;
                for (l < a && a < l + u && ((h = -1), (l += u - 1), (a += u - 1)); u-- > 0;) l in i ? (i[a] = i[l]) : delete i[a], (a += h), (l += h);
                return i;
            };
    },
    function (t, e, i) {
        "use strict";
        var n = i(6).f,
            r = i(38),
            s = i(27),
            o = i(13),
            a = i(28),
            l = i(44),
            c = i(76),
            u = i(75),
            h = i(42),
            d = i(8),
            f = i(18).fastKey,
            p = i(35),
            v = d ? "_s" : "size",
            m = function (t, e) {
                var i,
                    n = f(e);
                if ("F" !== n) return t._i[n];
                for (i = t._f; i; i = i.n) if (i.k == e) return i;
            };
        t.exports = {
            getConstructor: function (t, e, i, c) {
                var u = t(function (t, n) {
                    a(t, u, e, "_i"), (t._t = e), (t._i = r(null)), (t._f = undefined), (t._l = undefined), (t[v] = 0), n != undefined && l(n, i, t[c], t);
                });
                return (
                    s(u.prototype, {
                        clear: function () {
                            for (var t = p(this, e), i = t._i, n = t._f; n; n = n.n) (n.r = !0), n.p && (n.p = n.p.n = undefined), delete i[n.i];
                            (t._f = t._l = undefined), (t[v] = 0);
                        },
                        delete: function (t) {
                            var i = p(this, e),
                                n = m(i, t);
                            if (n) {
                                var r = n.n,
                                    s = n.p;
                                delete i._i[n.i], (n.r = !0), s && (s.n = r), r && (r.p = s), i._f == n && (i._f = r), i._l == n && (i._l = s), i[v]--;
                            }
                            return !!n;
                        },
                        forEach: function (t) {
                            p(this, e);
                            for (var i, n = o(t, arguments.length > 1 ? arguments[1] : undefined, 3); (i = i ? i.n : this._f);) for (n(i.v, i.k, this); i && i.r;) i = i.p;
                        },
                        has: function (t) {
                            return !!m(p(this, e), t);
                        },
                    }),
                    d &&
                    n(u.prototype, "size", {
                        get: function () {
                            return p(this, e)[v];
                        },
                    }),
                        u
                );
            },
            def: function (t, e, i) {
                var n,
                    r,
                    s = m(t, e);
                return s ? (s.v = i) : ((t._l = s = {
                    i: (r = f(e, !0)),
                    k: e,
                    v: i,
                    p: (n = t._l),
                    n: undefined,
                    r: !1
                }), t._f || (t._f = s), n && (n.n = s), t[v]++, "F" !== r && (t._i[r] = s)), t;
            },
            getEntry: m,
            setStrong: function (t, e, i) {
                c(
                    t,
                    e,
                    function (t, i) {
                        (this._t = p(t, e)), (this._k = i), (this._l = undefined);
                    },
                    function () {
                        for (var t = this._k, e = this._l; e && e.r;) e = e.p;
                        return this._t && (this._l = e = e ? e.n : this._t._f) ? u(0, "keys" == t ? e.k : "values" == t ? e.v : [e.k, e.v]) : ((this._t = undefined), u(1));
                    },
                    i ? "entries" : "values",
                    !i,
                    !0
                ),
                    h(e);
            },
        };
    },
    function (t, e, i) {
        var n = i(3);
        t.exports = function (t, e, i, r) {
            try {
                return r ? e(n(i)[0], i[1]) : e(i);
            } catch (o) {
                var s = t["return"];
                throw (s !== undefined && n(s.call(t)), o);
            }
        };
    },
    function (t, e, i) {
        "use strict";
        var n = i(26),
            r = i(46),
            s = i(40),
            o = i(14),
            a = i(51),
            l = Object.assign;
        t.exports =
            !l ||
            i(5)(function () {
                var t = {},
                    e = {},
                    i = Symbol(),
                    n = "abcdefghijklmnopqrst";
                return (
                    (t[i] = 7),
                        n.split("").forEach(function (t) {
                            e[t] = t;
                        }),
                    7 != l({}, t)[i] || Object.keys(l({}, e)).join("") != n
                );
            })
                ? function (t, e) {
                    for (var i = o(t), l = arguments.length, c = 1, u = r.f, h = s.f; l > c;) for (var d, f = a(arguments[c++]), p = u ? n(f).concat(u(f)) : n(f), v = p.length, m = 0; v > m;) h.call(f, (d = p[m++])) && (i[d] = f[d]);
                    return i;
                }
                : l;
    },
    function (t, e, i) {
        "use strict";
        var n = i(27),
            r = i(18).getWeak,
            s = i(3),
            o = i(1),
            a = i(28),
            l = i(44),
            c = i(39),
            u = i(10),
            h = i(35),
            d = c(5),
            f = c(6),
            p = 0,
            v = function (t) {
                return t._l || (t._l = new m());
            },
            m = function () {
                this.a = [];
            },
            g = function (t, e) {
                return d(t.a, function (t) {
                    return t[0] === e;
                });
            };
        (m.prototype = {
            get: function (t) {
                var e = g(this, t);
                if (e) return e[1];
            },
            has: function (t) {
                return !!g(this, t);
            },
            set: function (t, e) {
                var i = g(this, t);
                i ? (i[1] = e) : this.a.push([t, e]);
            },
            delete: function (t) {
                var e = f(this.a, function (e) {
                    return e[0] === t;
                });
                return ~e && this.a.splice(e, 1), !!~e;
            },
        }),
            (t.exports = {
                getConstructor: function (t, e, i, s) {
                    var c = t(function (t, n) {
                        a(t, c, e, "_i"), (t._t = e), (t._i = p++), (t._l = undefined), n != undefined && l(n, i, t[s], t);
                    });
                    return (
                        n(c.prototype, {
                            delete: function (t) {
                                if (!o(t)) return !1;
                                var i = r(t);
                                return !0 === i ? v(h(this, e))["delete"](t) : i && u(i, this._i) && delete i[this._i];
                            },
                            has: function (t) {
                                if (!o(t)) return !1;
                                var i = r(t);
                                return !0 === i ? v(h(this, e)).has(t) : i && u(i, this._i);
                            },
                        }),
                            c
                    );
                },
                def: function (t, e, i) {
                    var n = r(s(e), !0);
                    return !0 === n ? v(t).set(e, i) : (n[t._i] = i), t;
                },
                ufstore: v,
            });
    },
    function (t, e) {
        t.exports = function (t, e, i) {
            var n = i === undefined;
            switch (e.length) {
                case 0:
                    return n ? t() : t.call(i);
                case 1:
                    return n ? t(e[0]) : t.call(i, e[0]);
                case 2:
                    return n ? t(e[0], e[1]) : t.call(i, e[0], e[1]);
                case 3:
                    return n ? t(e[0], e[1], e[2]) : t.call(i, e[0], e[1], e[2]);
                case 4:
                    return n ? t(e[0], e[1], e[2], e[3]) : t.call(i, e[0], e[1], e[2], e[3]);
            }
            return t.apply(i, e);
        };
    },
    function (t, e, i) {
        var n = i(37),
            r = i(46),
            s = i(3),
            o = i(2).Reflect;
        t.exports =
            (o && o.ownKeys) ||
            function (t) {
                var e = n.f(s(t)),
                    i = r.f;
                return i ? e.concat(i(t)) : e;
            };
    },
    function (t, e, i) {
        "use strict";
        var n = i(22);
        t.exports.f = function (t) {
            return new (function (t) {
                var e, i;
                (this.promise = new t(function (t, n) {
                    if (e !== undefined || i !== undefined) throw TypeError("Bad Promise constructor");
                    (e = t), (i = n);
                })),
                    (this.resolve = n(e)),
                    (this.reject = n(i));
            })(t);
        };
    },
    function (t, e, i) {
        e.f = i(4);
    },
    function (t, e, i) {
        var n = i(11),
            r = i(37).f,
            s = {}.toString,
            o = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        t.exports.f = function (t) {
            return o && "[object Window]" == s.call(t)
                ? (function (t) {
                    try {
                        return r(t);
                    } catch (e) {
                        return o.slice();
                    }
                })(t)
                : r(n(t));
        };
    },
    function (t, e, i) {
        "use strict";
        var n = i(24),
            r = i(25);
        t.exports = function (t) {
            var e = String(r(this)),
                i = "",
                s = n(t);
            if (s < 0 || s == Infinity) throw RangeError("Count can't be negative");
            for (; s > 0; (s >>>= 1) && (e += e)) 1 & s && (i += e);
            return i;
        };
    },
    function (t, e, i) {
        var n = i(1),
            r = i(29),
            s = i(4)("match");
        t.exports = function (t) {
            var e;
            return n(t) && ((e = t[s]) !== undefined ? !!e : "RegExp" == r(t));
        };
    },
    function (t, e, i) {
        var n = i(1),
            r = Math.floor;
        t.exports = function (t) {
            return !n(t) && isFinite(t) && r(t) === t;
        };
    },
    function (t, e) {
        t.exports =
            Math.log1p ||
            function (t) {
                return (t = +t) > -1e-8 && t < 1e-8 ? t - (t * t) / 2 : Math.log(1 + t);
            };
    },
    function (t, e, i) {
        var n = i(26),
            r = i(11),
            s = i(40).f;
        t.exports = function (t) {
            return function (e) {
                for (var i, o = r(e), a = n(o), l = a.length, c = 0, u = []; l > c;) s.call(o, (i = a[c++])) && u.push(t ? [i, o[i]] : o[i]);
                return u;
            };
        };
    },
    function (t, e, i) {
        var n = i(7),
            r = i(87),
            s = i(25);
        t.exports = function (t, e, i, o) {
            var a = String(s(t)),
                l = a.length,
                c = i === undefined ? " " : String(i),
                u = n(e);
            if (u <= l || "" == c) return a;
            var h = u - l,
                d = r.call(c, Math.ceil(h / c.length));
            return d.length > h && (d = d.slice(0, h)), o ? d + a : a + d;
        };
    },
    function (t, e, i) {
        "use strict";
        var n;
        Object.defineProperty(e, "__esModule", {value: !0}),
            i.d(e, "window", function () {
                return s;
            }),
            i.d(e, "document", function () {
                return r;
            });
        var r = (n =
                "undefined" == typeof document
                    ? {
                        body: {},
                        addEventListener: function () {
                        },
                        removeEventListener: function () {
                        },
                        activeElement: {
                            blur: function () {
                            }, nodeName: ""
                        },
                        querySelector: function () {
                            return null;
                        },
                        querySelectorAll: function () {
                            return [];
                        },
                        getElementById: function () {
                            return null;
                        },
                        createEvent: function () {
                            return {
                                initEvent: function () {
                                }
                            };
                        },
                        createElement: function () {
                            return {
                                children: [],
                                childNodes: [],
                                style: {},
                                setAttribute: function () {
                                },
                                getElementsByTagName: function () {
                                    return [];
                                },
                            };
                        },
                        location: {hash: ""},
                    }
                    : document),
            s =
                "undefined" == typeof window
                    ? {
                        document: n,
                        navigator: {userAgent: ""},
                        location: {},
                        history: {},
                        CustomEvent: function () {
                            return this;
                        },
                        addEventListener: function () {
                        },
                        removeEventListener: function () {
                        },
                        getComputedStyle: function () {
                            return {
                                getPropertyValue: function () {
                                    return "";
                                },
                            };
                        },
                        Image: function () {
                        },
                        Date: function () {
                        },
                        screen: {},
                        setTimeout: function () {
                        },
                        clearTimeout: function () {
                        },
                    }
                    : window;
    },
    function (t, e, i) {
        "use strict";
        var n, r, s, o;
        "function" == typeof Symbol && Symbol.iterator;
        undefined,
            (o = function (t) {
                var e = "undefined" == typeof window ? this : window,
                    i =
                        Date.now ||
                        function () {
                            return +new Date();
                        },
                    n = {},
                    r = 1;
                (t.requestAnimationFrame = (function () {
                    var t = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame,
                        i = !!t;
                    if ((t && !/requestAnimationFrame\(\)\s*\{\s*\[native code\]\s*\}/i.test(t.toString()) && (i = !1), i))
                        return function (e, i) {
                            t(e, i);
                        };
                    var n = {},
                        r = 1,
                        s = null,
                        o = +new Date();
                    return function (t, e) {
                        var i = r++;
                        return (
                            (n[i] = t),
                                0,
                            null === s &&
                            (s = setInterval(function () {
                                var t = +new Date(),
                                    e = n;
                                for (var i in ((n = {}), 0, e)) e.hasOwnProperty(i) && (e[i](t), (o = t));
                                t - o > 2500 && (clearInterval(s), (s = null));
                            }, 1e3 / 60)),
                                i
                        );
                    };
                })()),
                    (t.stop = function (t) {
                        var e = null !== n[t];
                        return e && (n[t] = null), e;
                    }),
                    (t.isRunning = function (t) {
                        return null !== n[t];
                    }),
                    (t.start = function (e, s, o, a, l, c) {
                        var u = i(),
                            h = u,
                            d = 0,
                            f = 0,
                            p = r++;
                        if (p % 20 == 0) {
                            var v = {};
                            for (var m in n) v[m] = !0;
                            n = v;
                        }
                        return (
                            (n[p] = !0),
                                t.requestAnimationFrame(function g(r) {
                                    var v = !0 !== r,
                                        m = i();
                                    if (!n[p] || (s && !s(p))) return (n[p] = null), void o(60 - f / ((m - u) / 1e3), p, !1);
                                    if (v) for (var y = Math.round((m - h) / (1e3 / 60)) - 1, w = 0; w < Math.min(y, 4); w++) g(!0), f++;
                                    a && (d = (m - u) / a) > 1 && (d = 1);
                                    var b = l ? l(d) : d;
                                    (!1 !== e(b, m, v) && 1 !== d) || !v ? v && ((h = m), t.requestAnimationFrame(g, c)) : ((n[p] = null), o(60 - f / ((m - u) / 1e3), p, 1 === d || a === undefined));
                                }, c),
                                p
                        );
                    });
            }),
            (r = [e]),
        (s = "function" == typeof (n = o) ? n.apply(e, r) : n) === undefined || (t.exports = s);
    },
    function (t, e, i) {
        "use strict";
        i(96);
        var n = m(i(97));
        i(98),
            i(99),
            i(104),
            i(105),
            i(106),
            i(107),
            i(108),
            i(109),
            i(110),
            i(111),
            i(112),
            i(114),
            i(115),
            i(116),
            i(117),
            i(118),
            i(120),
            i(121),
            i(122),
            i(123),
            i(124),
            i(125),
            i(126),
            i(127),
            i(128),
            i(129),
            i(130),
            i(131),
            i(135),
            i(138),
            i(139),
            i(140),
            i(141),
            i(142),
            i(143),
            i(144),
            i(145),
            i(146),
            i(147),
            i(148),
            i(149),
            i(151),
            i(152),
            i(153),
            i(154),
            i(155),
            i(157),
            i(158),
            i(159),
            i(160),
            i(161),
            i(163),
            i(164),
            i(165),
            i(166),
            i(167),
            i(168),
            i(169),
            i(170),
            i(171),
            i(172),
            i(61),
            i(173),
            i(174),
            i(175),
            i(176),
            i(177),
            i(178),
            i(179),
            i(180),
            i(181),
            i(182),
            i(183),
            i(184),
            i(185),
            i(186),
            i(187),
            i(189),
            i(190),
            i(191),
            i(192),
            i(193),
            i(194),
            i(195),
            i(196),
            i(197),
            i(198),
            i(199),
            i(200),
            i(201),
            i(202),
            i(203),
            i(204),
            i(205),
            i(206),
            i(207),
            i(209);
        var r = m(i(210)),
            s = i(211),
            o = i(214),
            a = i(217),
            l = i(223),
            c = m(i(224)),
            u = i(225),
            h = i(226),
            d = i(41),
            f = i(227),
            p = i(228),
            v = i(229);

        function m(t) {
            return t && t.__esModule ? t : {default: t};
        }

        document.addEventListener("DOMContentLoaded", function () {
            window.addEventListener("pageshow", function (t) {
                t.persisted && window.location.reload();
            });
            var e = Array.from(document.querySelectorAll("[data-cookiesrc]")),
                i = document.querySelector(".cookie-modal");

            window.addEventListener("initTracking", function (event) {
                g();
            });

            function g() {
                e.forEach(function (t, i) {
                    (t.src = t.dataset.cookiesrc),
                        (t.onload = function () {
                            if (i === e.length - 1) {
                                var t = new d.Tracking();
                                t.sendSzmPi(), t.sendAtPi();
                            }
                        });
                }),
                    i.remove();
            }

            r["default"].polyfill(), document.body.classList.remove("no-js"), document.body.classList.add("js"), !!window.MSInputMethodContext && !!document.documentMode && document.body.classList.add("isIE11");
            var y = document.querySelectorAll(".museum-page__scrollslider__slide");
            if (document.querySelector(".featured-artworks")) new o.FeaturedArtworks();
            if (
                (document.querySelector(".navigation__logo").addEventListener("click", function (t) {
                    window.atiTracking(t.target, "logo-click", "navigation");
                }),
                y.length > 0)
            )
                new s.Scrollslider(y);
            new u.ImageLazyLoading(), new c["default"](), new n["default"]();
            if (document.querySelectorAll(".sharing-button__toggle").length > 0) new l.SharingButton(document.querySelectorAll(".sharing-button__toggle"));
            new p.MuseumOverlay();
            if (document.querySelector(".artwork-page__switch__input")) new f.HotspotToggle();
            var w = document.querySelector(".artwork-page__main-image");
            if (w) new a.ImageZoom(w);
            var b = document.querySelector("#artwork");
            if (b) new v.PreventDownload(b);
            var _ = document.querySelectorAll(".artwork-page__image-hotspot");
            if (_.length > 0) new h.Hotspot(_);
            "serviceWorker" in navigator &&
            window.addEventListener("load", function () {
                navigator.serviceWorker.register("/js/sw.js").then(
                    function (t) {
                        console.log("ServiceWorker registration successful with scope: ", t.scope);
                    },
                    function (t) {
                        console.log("ServiceWorker registration failed: ", t);
                    }
                );
            });
        });
    },
    function (t, e) {
        window.NodeList &&
        !NodeList.prototype.forEach &&
        (NodeList.prototype.forEach = function (t, e) {
            e = e || window;
            for (var i = 0; i < this.length; i++) t.call(e, this[i], i, this);
        });
    },
    function (t, e, i) {
        var n;
        !(function (t) {
            var e,
                i,
                n,
                r,
                s,
                o,
                a,
                l = navigator.userAgent;
            t.HTMLPictureElement &&
            /ecko/.test(l) &&
            l.match(/rv\:(\d+)/) &&
            RegExp.$1 < 45 &&
            addEventListener(
                "resize",
                ((i = document.createElement("source")),
                    (n = function (t) {
                        var e,
                            n,
                            r = t.parentNode;
                        "PICTURE" === r.nodeName.toUpperCase()
                            ? ((e = i.cloneNode()),
                                r.insertBefore(e, r.firstElementChild),
                                setTimeout(function () {
                                    r.removeChild(e);
                                }))
                            : (!t._pfLastSize || t.offsetWidth > t._pfLastSize) &&
                            ((t._pfLastSize = t.offsetWidth),
                                (n = t.sizes),
                                (t.sizes += ",100vw"),
                                setTimeout(function () {
                                    t.sizes = n;
                                }));
                    }),
                    (r = function () {
                        var t,
                            e = document.querySelectorAll("picture > img, img[srcset][sizes]");
                        for (t = 0; t < e.length; t++) n(e[t]);
                    }),
                    (s = function () {
                        clearTimeout(e), (e = setTimeout(r, 99));
                    }),
                    (o = t.matchMedia && matchMedia("(orientation: landscape)")),
                    (a = function () {
                        s(), o && o.addListener && o.addListener(s);
                    }),
                    (i.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),
                    /^[c|i]|d$/.test(document.readyState || "") ? a() : document.addEventListener("DOMContentLoaded", a),
                    s)
            );
        })(window),
            (function (r, s, o) {
                "use strict";
                var a, l, c;
                s.createElement("picture");
                var u = {},
                    h = !1,
                    d = function () {
                    },
                    f = s.createElement("img"),
                    p = f.getAttribute,
                    v = f.setAttribute,
                    m = f.removeAttribute,
                    g = s.documentElement,
                    y = {},
                    w = {algorithm: ""},
                    b = navigator.userAgent,
                    _ = /rident/.test(b) || (/ecko/.test(b) && b.match(/rv\:(\d+)/) && RegExp.$1 > 35),
                    E = "currentSrc",
                    x = /\s+\+?\d+(e\d+)?w/,
                    T = /(\([^)]+\))?\s*(.+)/,
                    S = r.picturefillCFG,
                    C = "font-size:100%!important;",
                    M = !0,
                    k = {},
                    L = {},
                    A = r.devicePixelRatio,
                    P = {px: 1, in: 96},
                    z = s.createElement("a"),
                    I = !1,
                    O = /^[ \t\n\r\u000c]+/,
                    D = /^[, \t\n\r\u000c]+/,
                    $ = /^[^ \t\n\r\u000c]+/,
                    N = /[,]+$/,
                    F = /^\d+$/,
                    j = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
                    B = function (t, e, i, n) {
                        t.addEventListener ? t.addEventListener(e, i, n || !1) : t.attachEvent && t.attachEvent("on" + e, i);
                    },
                    W = function (t) {
                        var e = {};
                        return function (i) {
                            return i in e || (e[i] = t(i)), e[i];
                        };
                    };

                function H(t) {
                    return " " === t || "\t" === t || "\n" === t || "\f" === t || "\r" === t;
                }

                var R,
                    Y,
                    X,
                    V,
                    G,
                    q,
                    U,
                    Z,
                    K,
                    Q,
                    J,
                    tt,
                    et,
                    it,
                    nt,
                    rt,
                    st =
                        ((R = /^([\d\.]+)(em|vw|px)$/),
                            (Y = W(function (t) {
                                return (
                                    "return " +
                                    (function () {
                                        for (var t = arguments, e = 0, i = t[0]; ++e in t;) i = i.replace(t[e], t[++e]);
                                        return i;
                                    })(
                                        (t || "").toLowerCase(),
                                        /\band\b/g,
                                        "&&",
                                        /,/g,
                                        "||",
                                        /min-([a-z-\s]+):/g,
                                        "e.$1>=",
                                        /max-([a-z-\s]+):/g,
                                        "e.$1<=",
                                        /calc([^)]+)/g,
                                        "($1)",
                                        /(\d+[\.]*[\d]*)([a-z]+)/g,
                                        "($1 * e.$2)",
                                        /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,
                                        ""
                                    ) +
                                    ";"
                                );
                            })),
                            function (t, e) {
                                var i;
                                if (!(t in k))
                                    if (((k[t] = !1), e && (i = t.match(R)))) k[t] = i[1] * P[i[2]];
                                    else
                                        try {
                                            k[t] = new Function("e", Y(t))(P);
                                        } catch (n) {
                                        }
                                return k[t];
                            }),
                    ot = function (t, e) {
                        return t.w ? ((t.cWidth = u.calcListLength(e || "100vw")), (t.res = t.w / t.cWidth)) : (t.res = t.d), t;
                    },
                    at = function (t) {
                        if (h) {
                            var e,
                                i,
                                n,
                                r = t || {};
                            if (
                                (r.elements && 1 === r.elements.nodeType && ("IMG" === r.elements.nodeName.toUpperCase() ? (r.elements = [r.elements]) : ((r.context = r.elements), (r.elements = null))),
                                    (n = (e = r.elements || u.qsa(r.context || s, r.reevaluate || r.reselect ? u.sel : u.selShort)).length))
                            ) {
                                for (u.setupRun(r), I = !0, i = 0; i < n; i++) u.fillImg(e[i], r);
                                u.teardownRun(r);
                            }
                        }
                    };

                function lt(t, e) {
                    return t.res - e.res;
                }

                function ct(t, e) {
                    var i, n, r;
                    if (t && e)
                        for (r = u.parseSet(e), t = u.makeUrl(t), i = 0; i < r.length; i++)
                            if (t === u.makeUrl(r[i].url)) {
                                n = r[i];
                                break;
                            }
                    return n;
                }

                r.console && console.warn,
                E in f || (E = "src"),
                    (y["image/jpeg"] = !0),
                    (y["image/gif"] = !0),
                    (y["image/png"] = !0),
                    (y["image/svg+xml"] = s.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")),
                    (u.ns = ("pf" + new Date().getTime()).substr(0, 9)),
                    (u.supSrcset = "srcset" in f),
                    (u.supSizes = "sizes" in f),
                    (u.supPicture = !!r.HTMLPictureElement),
                u.supSrcset && u.supPicture && !u.supSizes && ((X = s.createElement("img")), (f.srcset = "data:,a"), (X.src = "data:,a"), (u.supSrcset = f.complete === X.complete), (u.supPicture = u.supSrcset && u.supPicture)),
                    u.supSrcset && !u.supSizes
                        ? ((V = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),
                            (G = s.createElement("img")),
                            (q = function () {
                                2 === G.width && (u.supSizes = !0), (l = u.supSrcset && !u.supSizes), (h = !0), setTimeout(at);
                            }),
                            (G.onload = q),
                            (G.onerror = q),
                            G.setAttribute("sizes", "9px"),
                            (G.srcset = V + " 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w"),
                            (G.src = V))
                        : (h = !0),
                    (u.selShort = "picture>img,img[srcset]"),
                    (u.sel = u.selShort),
                    (u.cfg = w),
                    (u.DPR = A || 1),
                    (u.u = P),
                    (u.types = y),
                    (u.setSize = d),
                    (u.makeUrl = W(function (t) {
                        return (z.href = t), z.href;
                    })),
                    (u.qsa = function (t, e) {
                        return "querySelector" in t ? t.querySelectorAll(e) : [];
                    }),
                    (u.matchesMedia = function () {
                        return (
                            r.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches
                                ? (u.matchesMedia = function (t) {
                                    return !t || matchMedia(t).matches;
                                })
                                : (u.matchesMedia = u.mMQ),
                                u.matchesMedia.apply(this, arguments)
                        );
                    }),
                    (u.mMQ = function (t) {
                        return !t || st(t);
                    }),
                    (u.calcLength = function (t) {
                        var e = st(t, !0) || !1;
                        return e < 0 && (e = !1), e;
                    }),
                    (u.supportsType = function (t) {
                        return !t || y[t];
                    }),
                    (u.parseSize = W(function (t) {
                        var e = (t || "").match(T);
                        return {media: e && e[1], length: e && e[2]};
                    })),
                    (u.parseSet = function (t) {
                        return (
                            t.cands ||
                            (t.cands = (function (t, e) {
                                function i(e) {
                                    var i,
                                        n = e.exec(t.substring(c));
                                    if (n) return (i = n[0]), (c += i.length), i;
                                }

                                var n,
                                    r,
                                    s,
                                    o,
                                    a,
                                    l = t.length,
                                    c = 0,
                                    u = [];

                                function h() {
                                    var t,
                                        i,
                                        s,
                                        o,
                                        a,
                                        l,
                                        c,
                                        h,
                                        d,
                                        f = !1,
                                        p = {};
                                    for (o = 0; o < r.length; o++)
                                        (l = (a = r[o])[a.length - 1]),
                                            (c = a.substring(0, a.length - 1)),
                                            (h = parseInt(c, 10)),
                                            (d = parseFloat(c)),
                                            F.test(c) && "w" === l
                                                ? ((t || i) && (f = !0), 0 === h ? (f = !0) : (t = h))
                                                : j.test(c) && "x" === l
                                                ? ((t || i || s) && (f = !0), d < 0 ? (f = !0) : (i = d))
                                                : F.test(c) && "h" === l
                                                    ? ((s || i) && (f = !0), 0 === h ? (f = !0) : (s = h))
                                                    : (f = !0);
                                    f || ((p.url = n), t && (p.w = t), i && (p.d = i), s && (p.h = s), s || i || t || (p.d = 1), 1 === p.d && (e.has1x = !0), (p.set = e), u.push(p));
                                }

                                function d() {
                                    for (i(O), s = "", o = "in descriptor"; ;) {
                                        if (((a = t.charAt(c)), "in descriptor" === o))
                                            if (H(a)) s && (r.push(s), (s = ""), (o = "after descriptor"));
                                            else {
                                                if ("," === a) return (c += 1), s && r.push(s), void h();
                                                if ("(" === a) (s += a), (o = "in parens");
                                                else {
                                                    if ("" === a) return s && r.push(s), void h();
                                                    s += a;
                                                }
                                            }
                                        else if ("in parens" === o)
                                            if (")" === a) (s += a), (o = "in descriptor");
                                            else {
                                                if ("" === a) return r.push(s), void h();
                                                s += a;
                                            }
                                        else if ("after descriptor" === o)
                                            if (H(a)) ;
                                            else {
                                                if ("" === a) return void h();
                                                (o = "in descriptor"), (c -= 1);
                                            }
                                        c += 1;
                                    }
                                }

                                for (; ;) {
                                    if ((i(D), c >= l)) return u;
                                    (n = i($)), (r = []), "," === n.slice(-1) ? ((n = n.replace(N, "")), h()) : d();
                                }
                            })(t.srcset, t)),
                                t.cands
                        );
                    }),
                    (u.getEmValue = function () {
                        var t;
                        if (!a && (t = s.body)) {
                            var e = s.createElement("div"),
                                i = g.style.cssText,
                                n = t.style.cssText;
                            (e.style.cssText = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)"),
                                (g.style.cssText = C),
                                (t.style.cssText = C),
                                t.appendChild(e),
                                (a = e.offsetWidth),
                                t.removeChild(e),
                                (a = parseFloat(a, 10)),
                                (g.style.cssText = i),
                                (t.style.cssText = n);
                        }
                        return a || 16;
                    }),
                    (u.calcListLength = function (t) {
                        if (!(t in L) || w.uT) {
                            var e = u.calcLength(
                                (function (t) {
                                    var e,
                                        i,
                                        n,
                                        r,
                                        s,
                                        o,
                                        a,
                                        l = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,
                                        c = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
                                    for (
                                        n = (i = (function (t) {
                                            var e,
                                                i = "",
                                                n = [],
                                                r = [],
                                                s = 0,
                                                o = 0,
                                                a = !1;

                                            function l() {
                                                i && (n.push(i), (i = ""));
                                            }

                                            function c() {
                                                n[0] && (r.push(n), (n = []));
                                            }

                                            for (; ;) {
                                                if ("" === (e = t.charAt(o))) return l(), c(), r;
                                                if (a) {
                                                    if ("*" === e && "/" === t[o + 1]) {
                                                        (a = !1), (o += 2), l();
                                                        continue;
                                                    }
                                                    o += 1;
                                                } else {
                                                    if (H(e)) {
                                                        if ((t.charAt(o - 1) && H(t.charAt(o - 1))) || !i) {
                                                            o += 1;
                                                            continue;
                                                        }
                                                        if (0 === s) {
                                                            l(), (o += 1);
                                                            continue;
                                                        }
                                                        e = " ";
                                                    } else if ("(" === e) s += 1;
                                                    else if (")" === e) s -= 1;
                                                    else {
                                                        if ("," === e) {
                                                            l(), c(), (o += 1);
                                                            continue;
                                                        }
                                                        if ("/" === e && "*" === t.charAt(o + 1)) {
                                                            (a = !0), (o += 2);
                                                            continue;
                                                        }
                                                    }
                                                    (i += e), (o += 1);
                                                }
                                            }
                                        })(t)).length,
                                            e = 0;
                                        e < n;
                                        e++
                                    )
                                        if (((s = (r = i[e])[r.length - 1]), (a = s), (l.test(a) && parseFloat(a) >= 0) || c.test(a) || "0" === a || "-0" === a || "+0" === a)) {
                                            if (((o = s), r.pop(), 0 === r.length)) return o;
                                            if (((r = r.join(" ")), u.matchesMedia(r))) return o;
                                        }
                                    return "100vw";
                                })(t)
                            );
                            L[t] = e || P.width;
                        }
                        return L[t];
                    }),
                    (u.setRes = function (t) {
                        var e;
                        if (t) for (var i = 0, n = (e = u.parseSet(t)).length; i < n; i++) ot(e[i], t.sizes);
                        return e;
                    }),
                    (u.setRes.res = ot),
                    (u.applySetCandidate = function (t, e) {
                        if (t.length) {
                            var i,
                                n,
                                r,
                                s,
                                o,
                                a,
                                l,
                                c,
                                h,
                                d,
                                f,
                                p,
                                v,
                                m,
                                g,
                                y,
                                b = e[u.ns],
                                x = u.DPR;
                            if (
                                ((a = b.curSrc || e[E]),
                                (l =
                                    b.curCan ||
                                    (function (t, e, i) {
                                        var n;
                                        return !i && e && (i = (i = t[u.ns].sets) && i[i.length - 1]), (n = ct(e, i)) && ((e = u.makeUrl(e)), (t[u.ns].curSrc = e), (t[u.ns].curCan = n), n.res || ot(n, n.set.sizes)), n;
                                    })(e, a, t[0].set)) &&
                                l.set === t[0].set &&
                                ((h = _ && !e.complete && l.res - 0.1 > x) || ((l.cached = !0), l.res >= x && (o = l))),
                                    !o)
                            )
                                for (t.sort(lt), o = t[(s = t.length) - 1], n = 0; n < s; n++)
                                    if ((i = t[n]).res >= x) {
                                        o =
                                            t[(r = n - 1)] &&
                                            (h || a !== u.makeUrl(i.url)) &&
                                            ((d = t[r].res),
                                                (f = i.res),
                                                (p = x),
                                                (v = t[r].cached),
                                                (m = void 0),
                                                (g = void 0),
                                                (y = void 0),
                                                "saveData" === w.algorithm ? (d > 2.7 ? (y = p + 1) : ((g = (f - p) * (m = Math.pow(d - 0.6, 1.5))), v && (g += 0.1 * m), (y = d + g))) : (y = p > 1 ? Math.sqrt(d * f) : d),
                                            y > p)
                                                ? t[r]
                                                : i;
                                        break;
                                    }
                            o && ((c = u.makeUrl(o.url)), (b.curSrc = c), (b.curCan = o), c !== a && u.setSrc(e, o), u.setSize(e));
                        }
                    }),
                    (u.setSrc = function (t, e) {
                        var i;
                        (t.src = e.url), "image/svg+xml" === e.set.type && ((i = t.style.width), (t.style.width = t.offsetWidth + 1 + "px"), t.offsetWidth + 1 && (t.style.width = i));
                    }),
                    (u.getSet = function (t) {
                        var e,
                            i,
                            n,
                            r = !1,
                            s = t[u.ns].sets;
                        for (e = 0; e < s.length && !r; e++)
                            if ((i = s[e]).srcset && u.matchesMedia(i.media) && (n = u.supportsType(i.type))) {
                                "pending" === n && (i = n), (r = i);
                                break;
                            }
                        return r;
                    }),
                    (u.parseSets = function (t, e, i) {
                        var n,
                            r,
                            s,
                            o,
                            a = e && "PICTURE" === e.nodeName.toUpperCase(),
                            c = t[u.ns];
                        (void 0 === c.src || i.src) && ((c.src = p.call(t, "src")), c.src ? v.call(t, "data-pfsrc", c.src) : m.call(t, "data-pfsrc")),
                        (void 0 === c.srcset || i.srcset || !u.supSrcset || t.srcset) && ((n = p.call(t, "srcset")), (c.srcset = n), (o = !0)),
                            (c.sets = []),
                        a &&
                        ((c.pic = !0),
                            (function (t, e) {
                                var i,
                                    n,
                                    r,
                                    s,
                                    o = t.getElementsByTagName("source");
                                for (i = 0, n = o.length; i < n; i++)
                                    ((r = o[i])[u.ns] = !0), (s = r.getAttribute("srcset")) && e.push({
                                        srcset: s,
                                        media: r.getAttribute("media"),
                                        type: r.getAttribute("type"),
                                        sizes: r.getAttribute("sizes")
                                    });
                            })(e, c.sets)),
                            c.srcset
                                ? ((r = {srcset: c.srcset, sizes: p.call(t, "sizes")}),
                                    c.sets.push(r),
                                (s = (l || c.src) && x.test(c.srcset || "")) || !c.src || ct(c.src, r) || r.has1x || ((r.srcset += ", " + c.src), r.cands.push({
                                    url: c.src,
                                    d: 1,
                                    set: r
                                })))
                                : c.src && c.sets.push({srcset: c.src, sizes: null}),
                            (c.curCan = null),
                            (c.curSrc = void 0),
                            (c.supported = !(a || (r && !u.supSrcset) || (s && !u.supSizes))),
                        o && u.supSrcset && !c.supported && (n ? (v.call(t, "data-pfsrcset", n), (t.srcset = "")) : m.call(t, "data-pfsrcset")),
                        c.supported && !c.srcset && ((!c.src && t.src) || t.src !== u.makeUrl(c.src)) && (null === c.src ? t.removeAttribute("src") : (t.src = c.src)),
                            (c.parsed = !0);
                    }),
                    (u.fillImg = function (t, e) {
                        var i,
                            n,
                            r,
                            s,
                            o,
                            a = e.reselect || e.reevaluate;
                        (t[u.ns] || (t[u.ns] = {}), (i = t[u.ns]), a || i.evaled !== c) &&
                        ((i.parsed && !e.reevaluate) || u.parseSets(t, t.parentNode, e),
                            i.supported ? (i.evaled = c) : ((n = t), (s = u.getSet(n)), (o = !1), "pending" !== s && ((o = c), s && ((r = u.setRes(s)), u.applySetCandidate(r, n))), (n[u.ns].evaled = o)));
                    }),
                    (u.setupRun = function () {
                        (I && !M && A === r.devicePixelRatio) ||
                        ((M = !1),
                            (A = r.devicePixelRatio),
                            (k = {}),
                            (L = {}),
                            (u.DPR = A || 1),
                            (P.width = Math.max(r.innerWidth || 0, g.clientWidth)),
                            (P.height = Math.max(r.innerHeight || 0, g.clientHeight)),
                            (P.vw = P.width / 100),
                            (P.vh = P.height / 100),
                            (c = [P.height, P.width, A].join("-")),
                            (P.em = u.getEmValue()),
                            (P.rem = P.em));
                    }),
                    u.supPicture
                        ? ((at = d), (u.fillImg = d))
                        : ((et = r.attachEvent ? /d$|^c/ : /d$|^c|^i/),
                            (it = function () {
                                var t = s.readyState || "";
                                (nt = setTimeout(it, "loading" === t ? 200 : 999)), s.body && (u.fillImgs(), (U = U || et.test(t)) && clearTimeout(nt));
                            }),
                            (nt = setTimeout(it, s.body ? 9 : 99)),
                            (rt = g.clientHeight),
                            B(
                                r,
                                "resize",
                                ((Z = function () {
                                    (M = Math.max(r.innerWidth || 0, g.clientWidth) !== P.width || g.clientHeight !== rt), (rt = g.clientHeight), M && u.fillImgs();
                                }),
                                    (K = 99),
                                    (tt = function () {
                                        var t = new Date() - J;
                                        t < K ? (Q = setTimeout(tt, K - t)) : ((Q = null), Z());
                                    }),
                                    function () {
                                        (J = new Date()), Q || (Q = setTimeout(tt, K));
                                    })
                            ),
                            B(s, "readystatechange", it)),
                    (u.picturefill = at),
                    (u.fillImgs = at),
                    (u.teardownRun = d),
                    (at._ = u),
                    (r.picturefillCFG = {
                        pf: u,
                        push: function (t) {
                            var e = t.shift();
                            "function" == typeof u[e] ? u[e].apply(u, t) : ((w[e] = t[0]), I && u.fillImgs({reselect: !0}));
                        },
                    });
                for (; S && S.length;) r.picturefillCFG.push(S.shift());
                (r.picturefill = at),
                    "object" == typeof t && "object" == typeof t.exports
                        ? (t.exports = at)
                        : void 0 ===
                        (n = function () {
                            return at;
                        }.call(e, i, e, t)) || (t.exports = n),
                u.supPicture ||
                (y["image/webp"] = (function (t, e) {
                    var i = new r.Image();
                    return (
                        (i.onerror = function () {
                            (y[t] = !1), at();
                        }),
                            (i.onload = function () {
                                (y[t] = 1 === i.width), at();
                            }),
                            (i.src = e),
                            "pending"
                    );
                })("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="));
            })(window, document);
    },
    function (t, e, i) {
        "use strict";
        var n = i(0),
            r = i(50),
            s = i(70),
            o = i(3),
            a = i(30),
            l = i(7),
            c = i(1),
            u = i(2).ArrayBuffer,
            h = i(57),
            d = s.ArrayBuffer,
            f = s.DataView,
            p = r.ABV && u.isView,
            v = d.prototype.slice,
            m = r.VIEW;
        n(n.G + n.W + n.F * (u !== d), {ArrayBuffer: d}),
            n(n.S + n.F * !r.CONSTR, "ArrayBuffer", {
                isView: function (t) {
                    return (p && p(t)) || (c(t) && m in t);
                },
            }),
            n(
                n.P +
                n.U +
                n.F *
                i(5)(function () {
                    return !new d(2).slice(1, undefined).byteLength;
                }),
                "ArrayBuffer",
                {
                    slice: function (t, e) {
                        if (v !== undefined && e === undefined) return v.call(o(this), t);
                        for (var i = o(this).byteLength, n = a(t, i), r = a(e === undefined ? i : e, i), s = new (h(this, d))(l(r - n)), c = new f(this), u = new f(s), p = 0; n < r;) u.setUint8(p++, c.getUint8(n++));
                        return s;
                    },
                }
            ),
            i(42)("ArrayBuffer");
    },
    function (t, e, i) {
        i(15)("Int8", 1, function (t) {
            return function (e, i, n) {
                return t(this, e, i, n);
            };
        });
    },
    function (t, e, i) {
        var n = i(6),
            r = i(3),
            s = i(26);
        t.exports = i(8)
            ? Object.defineProperties
            : function (t, e) {
                r(t);
                for (var i, o = s(e), a = o.length, l = 0; a > l;) n.f(t, (i = o[l++]), e[i]);
                return t;
            };
    },
    function (t, e, i) {
        var n = i(102);
        t.exports = function (t, e) {
            return new (n(t))(e);
        };
    },
    function (t, e, i) {
        var n = i(1),
            r = i(74),
            s = i(4)("species");
        t.exports = function (t) {
            var e;
            return r(t) && ("function" != typeof (e = t.constructor) || (e !== Array && !r(e.prototype)) || (e = undefined), n(e) && null === (e = e[s]) && (e = undefined)), e === undefined ? Array : e;
        };
    },
    function (t, e, i) {
        "use strict";
        var n = i(38),
            r = i(20),
            s = i(31),
            o = {};
        i(9)(o, i(4)("iterator"), function () {
            return this;
        }),
            (t.exports = function (t, e, i) {
                (t.prototype = n(o, {next: r(1, i)})), s(t, e + " Iterator");
            });
    },
    function (t, e, i) {
        i(15)("Uint8", 1, function (t) {
            return function (e, i, n) {
                return t(this, e, i, n);
            };
        });
    },
    function (t, e, i) {
        i(15)(
            "Uint8",
            1,
            function (t) {
                return function (e, i, n) {
                    return t(this, e, i, n);
                };
            },
            !0
        );
    },
    function (t, e, i) {
        i(15)("Int16", 2, function (t) {
            return function (e, i, n) {
                return t(this, e, i, n);
            };
        });
    },
    function (t, e, i) {
        i(15)("Uint16", 2, function (t) {
            return function (e, i, n) {
                return t(this, e, i, n);
            };
        });
    },
    function (t, e, i) {
        i(15)("Int32", 4, function (t) {
            return function (e, i, n) {
                return t(this, e, i, n);
            };
        });
    },
    function (t, e, i) {
        i(15)("Uint32", 4, function (t) {
            return function (e, i, n) {
                return t(this, e, i, n);
            };
        });
    },
    function (t, e, i) {
        i(15)("Float32", 4, function (t) {
            return function (e, i, n) {
                return t(this, e, i, n);
            };
        });
    },
    function (t, e, i) {
        i(15)("Float64", 8, function (t) {
            return function (e, i, n) {
                return t(this, e, i, n);
            };
        });
    },
    function (t, e, i) {
        "use strict";
        var n = i(78),
            r = i(35);
        t.exports = i(45)(
            "Map",
            function (t) {
                return function () {
                    return t(this, arguments.length > 0 ? arguments[0] : undefined);
                };
            },
            {
                get: function (t) {
                    var e = n.getEntry(r(this, "Map"), t);
                    return e && e.v;
                },
                set: function (t, e) {
                    return n.def(r(this, "Map"), 0 === t ? 0 : t, e);
                },
            },
            n,
            !0
        );
    },
    function (t, e, i) {
        var n = i(1),
            r = i(62).set;
        t.exports = function (t, e, i) {
            var s,
                o = e.constructor;
            return o !== i && "function" == typeof o && (s = o.prototype) !== i.prototype && n(s) && r && r(t, s), t;
        };
    },
    function (t, e, i) {
        "use strict";
        var n = i(78),
            r = i(35);
        t.exports = i(45)(
            "Set",
            function (t) {
                return function () {
                    return t(this, arguments.length > 0 ? arguments[0] : undefined);
                };
            },
            {
                add: function (t) {
                    return n.def(r(this, "Set"), (t = 0 === t ? 0 : t), t);
                },
            },
            n
        );
    },
    function (t, e, i) {
        "use strict";
        var n,
            r = i(39)(0),
            s = i(17),
            o = i(18),
            a = i(80),
            l = i(81),
            c = i(1),
            u = i(5),
            h = i(35),
            d = o.getWeak,
            f = Object.isExtensible,
            p = l.ufstore,
            v = {},
            m = function (t) {
                return function () {
                    return t(this, arguments.length > 0 ? arguments[0] : undefined);
                };
            },
            g = {
                get: function (t) {
                    if (c(t)) {
                        var e = d(t);
                        return !0 === e ? p(h(this, "WeakMap")).get(t) : e ? e[this._i] : undefined;
                    }
                },
                set: function (t, e) {
                    return l.def(h(this, "WeakMap"), t, e);
                },
            },
            y = (t.exports = i(45)("WeakMap", m, g, l, !0, !0));
        u(function () {
            return 7 != new y().set((Object.freeze || Object)(v), 7).get(v);
        }) &&
        (a((n = l.getConstructor(m, "WeakMap")).prototype, g),
            (o.NEED = !0),
            r(["delete", "has", "get", "set"], function (t) {
                var e = y.prototype,
                    i = e[t];
                s(e, t, function (e, r) {
                    if (c(e) && !f(e)) {
                        this._f || (this._f = new n());
                        var s = this._f[t](e, r);
                        return "set" == t ? this : s;
                    }
                    return i.call(this, e, r);
                });
            }));
    },
    function (t, e, i) {
        "use strict";
        var n = i(81),
            r = i(35);
        i(45)(
            "WeakSet",
            function (t) {
                return function () {
                    return t(this, arguments.length > 0 ? arguments[0] : undefined);
                };
            },
            {
                add: function (t) {
                    return n.def(r(this, "WeakSet"), t, !0);
                },
            },
            n,
            !1,
            !0
        );
    },
    function (t, e, i) {
        var n = i(0),
            r = i(22),
            s = i(3),
            o = (i(2).Reflect || {}).apply,
            a = Function.apply;
        n(
            n.S +
            n.F *
            !i(5)(function () {
                o(function () {
                });
            }),
            "Reflect",
            {
                apply: function (t, e, i) {
                    var n = r(t),
                        l = s(i);
                    return o ? o(n, e, l) : a.call(n, e, l);
                },
            }
        );
    },
    function (t, e, i) {
        var n = i(0),
            r = i(38),
            s = i(22),
            o = i(3),
            a = i(1),
            l = i(5),
            c = i(119),
            u = (i(2).Reflect || {}).construct,
            h = l(function () {
                function t() {
                }

                return !(u(function () {
                }, [], t) instanceof t);
            }),
            d = !l(function () {
                u(function () {
                });
            });
        n(n.S + n.F * (h || d), "Reflect", {
            construct: function (t, e) {
                s(t), o(e);
                var i = arguments.length < 3 ? t : s(arguments[2]);
                if (d && !h) return u(t, e, i);
                if (t == i) {
                    switch (e.length) {
                        case 0:
                            return new t();
                        case 1:
                            return new t(e[0]);
                        case 2:
                            return new t(e[0], e[1]);
                        case 3:
                            return new t(e[0], e[1], e[2]);
                        case 4:
                            return new t(e[0], e[1], e[2], e[3]);
                    }
                    var n = [null];
                    return n.push.apply(n, e), new (c.apply(t, n))();
                }
                var l = i.prototype,
                    f = r(a(l) ? l : Object.prototype),
                    p = Function.apply.call(t, f, e);
                return a(p) ? p : f;
            },
        });
    },
    function (t, e, i) {
        "use strict";
        var n = i(22),
            r = i(1),
            s = i(82),
            o = [].slice,
            a = {};
        t.exports =
            Function.bind ||
            function (t) {
                var e = n(this),
                    i = o.call(arguments, 1),
                    l = function () {
                        var n = i.concat(o.call(arguments));
                        return this instanceof l
                            ? (function (t, e, i) {
                                if (!(e in a)) {
                                    for (var n = [], r = 0; r < e; r++) n[r] = "a[" + r + "]";
                                    a[e] = Function("F,a", "return new F(" + n.join(",") + ")");
                                }
                                return a[e](t, i);
                            })(e, n.length, n)
                            : s(e, n, t);
                    };
                return r(e.prototype) && (l.prototype = e.prototype), l;
            };
    },
    function (t, e, i) {
        var n = i(6),
            r = i(0),
            s = i(3),
            o = i(36);
        r(
            r.S +
            r.F *
            i(5)(function () {
                Reflect.defineProperty(n.f({}, 1, {value: 1}), 1, {value: 2});
            }),
            "Reflect",
            {
                defineProperty: function (t, e, i) {
                    s(t), (e = o(e, !0)), s(i);
                    try {
                        return n.f(t, e, i), !0;
                    } catch (r) {
                        return !1;
                    }
                },
            }
        );
    },
    function (t, e, i) {
        var n = i(0),
            r = i(16).f,
            s = i(3);
        n(n.S, "Reflect", {
            deleteProperty: function (t, e) {
                var i = r(s(t), e);
                return !(i && !i.configurable) && delete t[e];
            },
        });
    },
    function (t, e, i) {
        var n = i(16),
            r = i(33),
            s = i(10),
            o = i(0),
            a = i(1),
            l = i(3);
        o(o.S, "Reflect", {
            get: function c(t, e) {
                var i,
                    o,
                    u = arguments.length < 3 ? t : arguments[2];
                return l(t) === u ? t[e] : (i = n.f(t, e)) ? (s(i, "value") ? i.value : i.get !== undefined ? i.get.call(u) : undefined) : a((o = r(t))) ? c(o, e, u) : void 0;
            },
        });
    },
    function (t, e, i) {
        var n = i(16),
            r = i(0),
            s = i(3);
        r(r.S, "Reflect", {
            getOwnPropertyDescriptor: function (t, e) {
                return n.f(s(t), e);
            },
        });
    },
    function (t, e, i) {
        var n = i(0),
            r = i(33),
            s = i(3);
        n(n.S, "Reflect", {
            getPrototypeOf: function (t) {
                return r(s(t));
            },
        });
    },
    function (t, e, i) {
        var n = i(0);
        n(n.S, "Reflect", {
            has: function (t, e) {
                return e in t;
            },
        });
    },
    function (t, e, i) {
        var n = i(0),
            r = i(3),
            s = Object.isExtensible;
        n(n.S, "Reflect", {
            isExtensible: function (t) {
                return r(t), !s || s(t);
            },
        });
    },
    function (t, e, i) {
        var n = i(0);
        n(n.S, "Reflect", {ownKeys: i(83)});
    },
    function (t, e, i) {
        var n = i(0),
            r = i(3),
            s = Object.preventExtensions;
        n(n.S, "Reflect", {
            preventExtensions: function (t) {
                r(t);
                try {
                    return s && s(t), !0;
                } catch (e) {
                    return !1;
                }
            },
        });
    },
    function (t, e, i) {
        var n = i(6),
            r = i(16),
            s = i(33),
            o = i(10),
            a = i(0),
            l = i(20),
            c = i(3),
            u = i(1);
        a(a.S, "Reflect", {
            set: function h(t, e, i) {
                var a,
                    d,
                    f = arguments.length < 4 ? t : arguments[3],
                    p = r.f(c(t), e);
                if (!p) {
                    if (u((d = s(t)))) return h(d, e, i, f);
                    p = l(0);
                }
                if (o(p, "value")) {
                    if (!1 === p.writable || !u(f)) return !1;
                    if ((a = r.f(f, e))) {
                        if (a.get || a.set || !1 === a.writable) return !1;
                        (a.value = i), n.f(f, e, a);
                    } else n.f(f, e, l(0, i));
                    return !0;
                }
                return p.set !== undefined && (p.set.call(f, i), !0);
            },
        });
    },
    function (t, e, i) {
        var n = i(0),
            r = i(62);
        r &&
        n(n.S, "Reflect", {
            setPrototypeOf: function (t, e) {
                r.check(t, e);
                try {
                    return r.set(t, e), !0;
                } catch (i) {
                    return !1;
                }
            },
        });
    },
    function (t, e, i) {
        "use strict";
        var n,
            r,
            s,
            o,
            a = i(23),
            l = i(2),
            c = i(13),
            u = i(58),
            h = i(0),
            d = i(1),
            f = i(22),
            p = i(28),
            v = i(44),
            m = i(57),
            g = i(63).set,
            y = i(132)(),
            w = i(84),
            b = i(133),
            _ = i(47),
            E = i(134),
            x = l.TypeError,
            T = l.process,
            S = T && T.versions,
            C = (S && S.v8) || "",
            M = l.Promise,
            k = "process" == u(T),
            L = function () {
            },
            A = (r = w.f),
            P = !!(function () {
                try {
                    var t = M.resolve(1),
                        e = ((t.constructor = {})[i(4)("species")] = function (t) {
                            t(L, L);
                        });
                    return (k || "function" == typeof PromiseRejectionEvent) && t.then(L) instanceof e && 0 !== C.indexOf("6.6") && -1 === _.indexOf("Chrome/66");
                } catch (n) {
                }
            })(),
            z = function (t) {
                var e;
                return !(!d(t) || "function" != typeof (e = t.then)) && e;
            },
            I = function (t, e) {
                if (!t._n) {
                    t._n = !0;
                    var i = t._c;
                    y(function () {
                        for (
                            var n = t._v,
                                r = 1 == t._s,
                                s = 0,
                                o = function (e) {
                                    var i,
                                        s,
                                        o,
                                        a = r ? e.ok : e.fail,
                                        l = e.resolve,
                                        c = e.reject,
                                        u = e.domain;
                                    try {
                                        a
                                            ? (r || (2 == t._h && $(t), (t._h = 1)),
                                                !0 === a ? (i = n) : (u && u.enter(), (i = a(n)), u && (u.exit(), (o = !0))),
                                                i === e.promise ? c(x("Promise-chain cycle")) : (s = z(i)) ? s.call(i, l, c) : l(i))
                                            : c(n);
                                    } catch (h) {
                                        u && !o && u.exit(), c(h);
                                    }
                                };
                            i.length > s;
                        )
                            o(i[s++]);
                        (t._c = []), (t._n = !1), e && !t._h && O(t);
                    });
                }
            },
            O = function (t) {
                g.call(l, function () {
                    var e,
                        i,
                        n,
                        r = t._v,
                        s = D(t);
                    if (
                        (s &&
                        ((e = b(function () {
                            k ? T.emit("unhandledRejection", r, t) : (i = l.onunhandledrejection) ? i({
                                promise: t,
                                reason: r
                            }) : (n = l.console) && n.error && n.error("Unhandled promise rejection", r);
                        })),
                            (t._h = k || D(t) ? 2 : 1)),
                            (t._a = undefined),
                        s && e.e)
                    )
                        throw e.v;
                });
            },
            D = function (t) {
                return 1 !== t._h && 0 === (t._a || t._c).length;
            },
            $ = function (t) {
                g.call(l, function () {
                    var e;
                    k ? T.emit("rejectionHandled", t) : (e = l.onrejectionhandled) && e({promise: t, reason: t._v});
                });
            },
            N = function (t) {
                var e = this;
                e._d || ((e._d = !0), ((e = e._w || e)._v = t), (e._s = 2), e._a || (e._a = e._c.slice()), I(e, !0));
            },
            F = function (t) {
                var e,
                    i = this;
                if (!i._d) {
                    (i._d = !0), (i = i._w || i);
                    try {
                        if (i === t) throw x("Promise can't be resolved itself");
                        (e = z(t))
                            ? y(function () {
                                var n = {_w: i, _d: !1};
                                try {
                                    e.call(t, c(F, n, 1), c(N, n, 1));
                                } catch (r) {
                                    N.call(n, r);
                                }
                            })
                            : ((i._v = t), (i._s = 1), I(i, !1));
                    } catch (n) {
                        N.call({_w: i, _d: !1}, n);
                    }
                }
            };
        P ||
        ((M = function (t) {
            p(this, M, "Promise", "_h"), f(t), n.call(this);
            try {
                t(c(F, this, 1), c(N, this, 1));
            } catch (e) {
                N.call(this, e);
            }
        }),
            ((n = function (t) {
                (this._c = []), (this._a = undefined), (this._s = 0), (this._d = !1), (this._v = undefined), (this._h = 0), (this._n = !1);
            }).prototype = i(27)(M.prototype, {
                then: function (t, e) {
                    var i = A(m(this, M));
                    return (i.ok = "function" != typeof t || t), (i.fail = "function" == typeof e && e), (i.domain = k ? T.domain : undefined), this._c.push(i), this._a && this._a.push(i), this._s && I(this, !1), i.promise;
                },
                catch: function (t) {
                    return this.then(undefined, t);
                },
            })),
            (s = function () {
                var t = new n();
                (this.promise = t), (this.resolve = c(F, t, 1)), (this.reject = c(N, t, 1));
            }),
            (w.f = A = function (t) {
                return t === M || t === o ? new s(t) : r(t);
            })),
            h(h.G + h.W + h.F * !P, {Promise: M}),
            i(31)(M, "Promise"),
            i(42)("Promise"),
            (o = i(19).Promise),
            h(h.S + h.F * !P, "Promise", {
                reject: function (t) {
                    var e = A(this);
                    return (0, e.reject)(t), e.promise;
                },
            }),
            h(h.S + h.F * (a || !P), "Promise", {
                resolve: function (t) {
                    return E(a && this === o ? M : this, t);
                },
            }),
            h(
                h.S +
                h.F *
                !(
                    P &&
                    i(43)(function (t) {
                        M.all(t)["catch"](L);
                    })
                ),
                "Promise",
                {
                    all: function (t) {
                        var e = this,
                            i = A(e),
                            n = i.resolve,
                            r = i.reject,
                            s = b(function () {
                                var i = [],
                                    s = 0,
                                    o = 1;
                                v(t, !1, function (t) {
                                    var a = s++,
                                        l = !1;
                                    i.push(undefined),
                                        o++,
                                        e.resolve(t).then(function (t) {
                                            l || ((l = !0), (i[a] = t), --o || n(i));
                                        }, r);
                                }),
                                --o || n(i);
                            });
                        return s.e && r(s.v), i.promise;
                    },
                    race: function (t) {
                        var e = this,
                            i = A(e),
                            n = i.reject,
                            r = b(function () {
                                v(t, !1, function (t) {
                                    e.resolve(t).then(i.resolve, n);
                                });
                            });
                        return r.e && n(r.v), i.promise;
                    },
                }
            );
    },
    function (t, e, i) {
        var n = i(2),
            r = i(63).set,
            s = n.MutationObserver || n.WebKitMutationObserver,
            o = n.process,
            a = n.Promise,
            l = "process" == i(29)(o);
        t.exports = function () {
            var t,
                e,
                i,
                c = function () {
                    var n, r;
                    for (l && (n = o.domain) && n.exit(); t;) {
                        (r = t.fn), (t = t.next);
                        try {
                            r();
                        } catch (s) {
                            throw (t ? i() : (e = undefined), s);
                        }
                    }
                    (e = undefined), n && n.enter();
                };
            if (l)
                i = function () {
                    o.nextTick(c);
                };
            else if (!s || (n.navigator && n.navigator.standalone))
                if (a && a.resolve) {
                    var u = a.resolve(undefined);
                    i = function () {
                        u.then(c);
                    };
                } else
                    i = function () {
                        r.call(n, c);
                    };
            else {
                var h = !0,
                    d = document.createTextNode("");
                new s(c).observe(d, {characterData: !0}),
                    (i = function () {
                        d.data = h = !h;
                    });
            }
            return function (n) {
                var r = {fn: n, next: undefined};
                e && (e.next = r), t || ((t = r), i()), (e = r);
            };
        };
    },
    function (t, e) {
        t.exports = function (t) {
            try {
                return {e: !1, v: t()};
            } catch (e) {
                return {e: !0, v: e};
            }
        };
    },
    function (t, e, i) {
        var n = i(3),
            r = i(1),
            s = i(84);
        t.exports = function (t, e) {
            if ((n(t), r(e) && e.constructor === t)) return e;
            var i = s.f(t);
            return (0, i.resolve)(e), i.promise;
        };
    },
    function (t, e, i) {
        "use strict";
        var n = i(2),
            r = i(10),
            s = i(8),
            o = i(0),
            a = i(17),
            l = i(18).KEY,
            c = i(5),
            u = i(54),
            h = i(31),
            d = i(21),
            f = i(4),
            p = i(85),
            v = i(136),
            m = i(137),
            g = i(74),
            y = i(3),
            w = i(1),
            b = i(11),
            _ = i(36),
            E = i(20),
            x = i(38),
            T = i(86),
            S = i(16),
            C = i(6),
            M = i(26),
            k = S.f,
            L = C.f,
            A = T.f,
            P = n.Symbol,
            z = n.JSON,
            I = z && z.stringify,
            O = f("_hidden"),
            D = f("toPrimitive"),
            $ = {}.propertyIsEnumerable,
            N = u("symbol-registry"),
            F = u("symbols"),
            j = u("op-symbols"),
            B = Object.prototype,
            W = "function" == typeof P,
            H = n.QObject,
            R = !H || !H.prototype || !H.prototype.findChild,
            Y =
                s &&
                c(function () {
                    return (
                        7 !=
                        x(
                            L({}, "a", {
                                get: function () {
                                    return L(this, "a", {value: 7}).a;
                                },
                            })
                        ).a
                    );
                })
                    ? function (t, e, i) {
                        var n = k(B, e);
                        n && delete B[e], L(t, e, i), n && t !== B && L(B, e, n);
                    }
                    : L,
            X = function (t) {
                var e = (F[t] = x(P.prototype));
                return (e._k = t), e;
            },
            V =
                W && "symbol" == typeof P.iterator
                    ? function (t) {
                        return "symbol" == typeof t;
                    }
                    : function (t) {
                        return t instanceof P;
                    },
            G = function (t, e, i) {
                return (
                    t === B && G(j, e, i),
                        y(t),
                        (e = _(e, !0)),
                        y(i),
                        r(F, e) ? (i.enumerable ? (r(t, O) && t[O][e] && (t[O][e] = !1), (i = x(i, {enumerable: E(0, !1)}))) : (r(t, O) || L(t, O, E(1, {})), (t[O][e] = !0)), Y(t, e, i)) : L(t, e, i)
                );
            },
            q = function (t, e) {
                y(t);
                for (var i, n = m((e = b(e))), r = 0, s = n.length; s > r;) G(t, (i = n[r++]), e[i]);
                return t;
            },
            U = function (t) {
                var e = $.call(this, (t = _(t, !0)));
                return !(this === B && r(F, t) && !r(j, t)) && (!(e || !r(this, t) || !r(F, t) || (r(this, O) && this[O][t])) || e);
            },
            Z = function (t, e) {
                if (((t = b(t)), (e = _(e, !0)), t !== B || !r(F, e) || r(j, e))) {
                    var i = k(t, e);
                    return !i || !r(F, e) || (r(t, O) && t[O][e]) || (i.enumerable = !0), i;
                }
            },
            K = function (t) {
                for (var e, i = A(b(t)), n = [], s = 0; i.length > s;) r(F, (e = i[s++])) || e == O || e == l || n.push(e);
                return n;
            },
            Q = function (t) {
                for (var e, i = t === B, n = A(i ? j : b(t)), s = [], o = 0; n.length > o;) !r(F, (e = n[o++])) || (i && !r(B, e)) || s.push(F[e]);
                return s;
            };
        W ||
        (a(
            (P = function () {
                if (this instanceof P) throw TypeError("Symbol is not a constructor!");
                var t = d(arguments.length > 0 ? arguments[0] : undefined),
                    e = function (i) {
                        this === B && e.call(j, i), r(this, O) && r(this[O], t) && (this[O][t] = !1), Y(this, t, E(1, i));
                    };
                return s && R && Y(B, t, {configurable: !0, set: e}), X(t);
            }).prototype,
            "toString",
            function () {
                return this._k;
            }
        ),
            (S.f = Z),
            (C.f = G),
            (i(37).f = T.f = K),
            (i(40).f = U),
            (i(46).f = Q),
        s && !i(23) && a(B, "propertyIsEnumerable", U, !0),
            (p.f = function (t) {
                return X(f(t));
            })),
            o(o.G + o.W + o.F * !W, {Symbol: P});
        for (var J = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), tt = 0; J.length > tt;) f(J[tt++]);
        for (var et = M(f.store), it = 0; et.length > it;) v(et[it++]);
        o(o.S + o.F * !W, "Symbol", {
            for: function (t) {
                return r(N, (t += "")) ? N[t] : (N[t] = P(t));
            },
            keyFor: function (t) {
                if (!V(t)) throw TypeError(t + " is not a symbol!");
                for (var e in N) if (N[e] === t) return e;
            },
            useSetter: function () {
                R = !0;
            },
            useSimple: function () {
                R = !1;
            },
        }),
            o(o.S + o.F * !W, "Object", {
                create: function (t, e) {
                    return e === undefined ? x(t) : q(x(t), e);
                },
                defineProperty: G,
                defineProperties: q,
                getOwnPropertyDescriptor: Z,
                getOwnPropertyNames: K,
                getOwnPropertySymbols: Q,
            }),
        z &&
        o(
            o.S +
            o.F *
            (!W ||
                c(function () {
                    var t = P();
                    return "[null]" != I([t]) || "{}" != I({a: t}) || "{}" != I(Object(t));
                })),
            "JSON",
            {
                stringify: function (t) {
                    for (var e, i, n = [t], r = 1; arguments.length > r;) n.push(arguments[r++]);
                    if (((i = e = n[1]), (w(e) || t !== undefined) && !V(t)))
                        return (
                            g(e) ||
                            (e = function (t, e) {
                                if (("function" == typeof i && (e = i.call(this, t, e)), !V(e))) return e;
                            }),
                                (n[1] = e),
                                I.apply(z, n)
                        );
                },
            }
        ),
        P.prototype[D] || i(9)(P.prototype, D, P.prototype.valueOf),
            h(P, "Symbol"),
            h(Math, "Math", !0),
            h(n.JSON, "JSON", !0);
    },
    function (t, e, i) {
        var n = i(2),
            r = i(19),
            s = i(23),
            o = i(85),
            a = i(6).f;
        t.exports = function (t) {
            var e = r.Symbol || (r.Symbol = s ? {} : n.Symbol || {});
            "_" == t.charAt(0) || t in e || a(e, t, {value: o.f(t)});
        };
    },
    function (t, e, i) {
        var n = i(26),
            r = i(46),
            s = i(40);
        t.exports = function (t) {
            var e = n(t),
                i = r.f;
            if (i) for (var o, a = i(t), l = s.f, c = 0; a.length > c;) l.call(t, (o = a[c++])) && e.push(o);
            return e;
        };
    },
    function (t, e, i) {
        var n = i(1),
            r = i(18).onFreeze;
        i(12)("freeze", function (t) {
            return function (e) {
                return t && n(e) ? t(r(e)) : e;
            };
        });
    },
    function (t, e, i) {
        var n = i(1),
            r = i(18).onFreeze;
        i(12)("seal", function (t) {
            return function (e) {
                return t && n(e) ? t(r(e)) : e;
            };
        });
    },
    function (t, e, i) {
        var n = i(1),
            r = i(18).onFreeze;
        i(12)("preventExtensions", function (t) {
            return function (e) {
                return t && n(e) ? t(r(e)) : e;
            };
        });
    },
    function (t, e, i) {
        var n = i(1);
        i(12)("isFrozen", function (t) {
            return function (e) {
                return !n(e) || (!!t && t(e));
            };
        });
    },
    function (t, e, i) {
        var n = i(1);
        i(12)("isSealed", function (t) {
            return function (e) {
                return !n(e) || (!!t && t(e));
            };
        });
    },
    function (t, e, i) {
        var n = i(1);
        i(12)("isExtensible", function (t) {
            return function (e) {
                return !!n(e) && (!t || t(e));
            };
        });
    },
    function (t, e, i) {
        var n = i(11),
            r = i(16).f;
        i(12)("getOwnPropertyDescriptor", function () {
            return function (t, e) {
                return r(n(t), e);
            };
        });
    },
    function (t, e, i) {
        var n = i(14),
            r = i(33);
        i(12)("getPrototypeOf", function () {
            return function (t) {
                return r(n(t));
            };
        });
    },
    function (t, e, i) {
        var n = i(14),
            r = i(26);
        i(12)("keys", function () {
            return function (t) {
                return r(n(t));
            };
        });
    },
    function (t, e, i) {
        i(12)("getOwnPropertyNames", function () {
            return i(86).f;
        });
    },
    function (t, e, i) {
        var n = i(0);
        n(n.S + n.F, "Object", {assign: i(80)});
    },
    function (t, e, i) {
        var n = i(0);
        n(n.S, "Object", {is: i(150)});
    },
    function (t, e) {
        t.exports =
            Object.is ||
            function (t, e) {
                return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e;
            };
    },
    function (t, e, i) {
        var n = i(0);
        n(n.S, "Object", {setPrototypeOf: i(62).set});
    },
    function (t, e, i) {
        var n = i(6).f,
            r = Function.prototype,
            s = /^\s*function ([^ (]*)/;
        "name" in r ||
        (i(8) &&
            n(r, "name", {
                configurable: !0,
                get: function () {
                    try {
                        return ("" + this).match(s)[1];
                    } catch (t) {
                        return "";
                    }
                },
            }));
    },
    function (t, e, i) {
        var n = i(0),
            r = i(11),
            s = i(7);
        n(n.S, "String", {
            raw: function (t) {
                for (var e = r(t.raw), i = s(e.length), n = arguments.length, o = [], a = 0; i > a;) o.push(String(e[a++])), a < n && o.push(String(arguments[a]));
                return o.join("");
            },
        });
    },
    function (t, e, i) {
        var n = i(0),
            r = i(30),
            s = String.fromCharCode,
            o = String.fromCodePoint;
        n(n.S + n.F * (!!o && 1 != o.length), "String", {
            fromCodePoint: function (t) {
                for (var e, i = [], n = arguments.length, o = 0; n > o;) {
                    if (((e = +arguments[o++]), r(e, 1114111) !== e)) throw RangeError(e + " is not a valid code point");
                    i.push(e < 65536 ? s(e) : s(55296 + ((e -= 65536) >> 10), (e % 1024) + 56320));
                }
                return i.join("");
            },
        });
    },
    function (t, e, i) {
        "use strict";
        var n = i(0),
            r = i(156)(!1);
        n(n.P, "String", {
            codePointAt: function (t) {
                return r(this, t);
            },
        });
    },
    function (t, e, i) {
        var n = i(24),
            r = i(25);
        t.exports = function (t) {
            return function (e, i) {
                var s,
                    o,
                    a = String(r(e)),
                    l = n(i),
                    c = a.length;
                return l < 0 || l >= c
                    ? t
                        ? ""
                        : undefined
                    : (s = a.charCodeAt(l)) < 55296 || s > 56319 || l + 1 === c || (o = a.charCodeAt(l + 1)) < 56320 || o > 57343
                        ? t
                            ? a.charAt(l)
                            : s
                        : t
                            ? a.slice(l, l + 2)
                            : o - 56320 + ((s - 55296) << 10) + 65536;
            };
        };
    },
    function (t, e, i) {
        var n = i(0);
        n(n.P, "String", {repeat: i(87)});
    },
    function (t, e, i) {
        "use strict";
        var n = i(0),
            r = i(7),
            s = i(64),
            o = "".startsWith;
        n(n.P + n.F * i(65)("startsWith"), "String", {
            startsWith: function (t) {
                var e = s(this, t, "startsWith"),
                    i = r(Math.min(arguments.length > 1 ? arguments[1] : undefined, e.length)),
                    n = String(t);
                return o ? o.call(e, n, i) : e.slice(i, i + n.length) === n;
            },
        });
    },
    function (t, e, i) {
        "use strict";
        var n = i(0),
            r = i(7),
            s = i(64),
            o = "".endsWith;
        n(n.P + n.F * i(65)("endsWith"), "String", {
            endsWith: function (t) {
                var e = s(this, t, "endsWith"),
                    i = arguments.length > 1 ? arguments[1] : undefined,
                    n = r(e.length),
                    a = i === undefined ? n : Math.min(r(i), n),
                    l = String(t);
                return o ? o.call(e, l, a) : e.slice(a - l.length, a) === l;
            },
        });
    },
    function (t, e, i) {
        "use strict";
        var n = i(0),
            r = i(64);
        n(n.P + n.F * i(65)("includes"), "String", {
            includes: function (t) {
                return !!~r(this, t, "includes").indexOf(t, arguments.length > 1 ? arguments[1] : undefined);
            },
        });
    },
    function (t, e, i) {
        i(8) && "g" != /./g.flags && i(6).f(RegExp.prototype, "flags", {configurable: !0, get: i(162)});
    },
    function (t, e, i) {
        "use strict";
        var n = i(3);
        t.exports = function () {
            var t = n(this),
                e = "";
            return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e;
        };
    },
    function (t, e, i) {
        i(48)("match", 1, function (t, e, i) {
            return [
                function (i) {
                    "use strict";
                    var n = t(this),
                        r = i == undefined ? undefined : i[e];
                    return r !== undefined ? r.call(i, n) : new RegExp(i)[e](String(n));
                },
                i,
            ];
        });
    },
    function (t, e, i) {
        i(48)("replace", 2, function (t, e, i) {
            return [
                function (n, r) {
                    "use strict";
                    var s = t(this),
                        o = n == undefined ? undefined : n[e];
                    return o !== undefined ? o.call(n, s, r) : i.call(String(s), n, r);
                },
                i,
            ];
        });
    },
    function (t, e, i) {
        i(48)("split", 2, function (t, e, n) {
            "use strict";
            var r = i(88),
                s = n,
                o = [].push;
            if ("c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length) {
                var a = /()??/.exec("")[1] === undefined;
                n = function (t, e) {
                    var i = String(this);
                    if (t === undefined && 0 === e) return [];
                    if (!r(t)) return s.call(i, t, e);
                    var n,
                        l,
                        c,
                        u,
                        h,
                        d = [],
                        f = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""),
                        p = 0,
                        v = e === undefined ? 4294967295 : e >>> 0,
                        m = new RegExp(t.source, f + "g");
                    for (
                        a || (n = new RegExp("^" + m.source + "$(?!\\s)", f));
                        (l = m.exec(i)) &&
                        !(
                            (c = l.index + l[0].length) > p &&
                            (d.push(i.slice(p, l.index)),
                            !a &&
                            l.length > 1 &&
                            l[0].replace(n, function () {
                                for (h = 1; h < arguments.length - 2; h++) arguments[h] === undefined && (l[h] = undefined);
                            }),
                            l.length > 1 && l.index < i.length && o.apply(d, l.slice(1)),
                                (u = l[0].length),
                                (p = c),
                            d.length >= v)
                        );
                    )
                        m.lastIndex === l.index && m.lastIndex++;
                    return p === i.length ? (!u && m.test("")) || d.push("") : d.push(i.slice(p)), d.length > v ? d.slice(0, v) : d;
                };
            } else
                "0".split(undefined, 0).length &&
                (n = function (t, e) {
                    return t === undefined && 0 === e ? [] : s.call(this, t, e);
                });
            return [
                function (i, r) {
                    var s = t(this),
                        o = i == undefined ? undefined : i[e];
                    return o !== undefined ? o.call(i, s, r) : n.call(String(s), i, r);
                },
                n,
            ];
        });
    },
    function (t, e, i) {
        i(48)("search", 1, function (t, e, i) {
            return [
                function (i) {
                    "use strict";
                    var n = t(this),
                        r = i == undefined ? undefined : i[e];
                    return r !== undefined ? r.call(i, n) : new RegExp(i)[e](String(n));
                },
                i,
            ];
        });
    },
    function (t, e, i) {
        "use strict";
        var n = i(13),
            r = i(0),
            s = i(14),
            o = i(79),
            a = i(59),
            l = i(7),
            c = i(66),
            u = i(60);
        r(
            r.S +
            r.F *
            !i(43)(function (t) {
                Array.from(t);
            }),
            "Array",
            {
                from: function (t) {
                    var e,
                        i,
                        r,
                        h,
                        d = s(t),
                        f = "function" == typeof this ? this : Array,
                        p = arguments.length,
                        v = p > 1 ? arguments[1] : undefined,
                        m = v !== undefined,
                        g = 0,
                        y = u(d);
                    if ((m && (v = n(v, p > 2 ? arguments[2] : undefined, 2)), y == undefined || (f == Array && a(y)))) for (i = new f((e = l(d.length))); e > g; g++) c(i, g, m ? v(d[g], g) : d[g]);
                    else for (h = y.call(d), i = new f(); !(r = h.next()).done; g++) c(i, g, m ? o(h, v, [r.value, g], !0) : r.value);
                    return (i.length = g), i;
                },
            }
        );
    },
    function (t, e, i) {
        "use strict";
        var n = i(0),
            r = i(66);
        n(
            n.S +
            n.F *
            i(5)(function () {
                function t() {
                }

                return !(Array.of.call(t) instanceof t);
            }),
            "Array",
            {
                of: function () {
                    for (var t = 0, e = arguments.length, i = new ("function" == typeof this ? this : Array)(e); e > t;) r(i, t, arguments[t++]);
                    return (i.length = e), i;
                },
            }
        );
    },
    function (t, e, i) {
        var n = i(0);
        n(n.P, "Array", {copyWithin: i(77)}), i(34)("copyWithin");
    },
    function (t, e, i) {
        "use strict";
        var n = i(0),
            r = i(39)(5),
            s = !0;
        "find" in [] &&
        Array(1).find(function () {
            s = !1;
        }),
            n(n.P + n.F * s, "Array", {
                find: function (t) {
                    return r(this, t, arguments.length > 1 ? arguments[1] : undefined);
                },
            }),
            i(34)("find");
    },
    function (t, e, i) {
        "use strict";
        var n = i(0),
            r = i(39)(6),
            s = "findIndex",
            o = !0;
        s in [] &&
        Array(1)[s](function () {
            o = !1;
        }),
            n(n.P + n.F * o, "Array", {
                findIndex: function (t) {
                    return r(this, t, arguments.length > 1 ? arguments[1] : undefined);
                },
            }),
            i(34)(s);
    },
    function (t, e, i) {
        var n = i(0);
        n(n.P, "Array", {fill: i(56)}), i(34)("fill");
    },
    function (t, e, i) {
        var n = i(0),
            r = i(2).isFinite;
        n(n.S, "Number", {
            isFinite: function (t) {
                return "number" == typeof t && r(t);
            },
        });
    },
    function (t, e, i) {
        var n = i(0);
        n(n.S, "Number", {isInteger: i(89)});
    },
    function (t, e, i) {
        var n = i(0),
            r = i(89),
            s = Math.abs;
        n(n.S, "Number", {
            isSafeInteger: function (t) {
                return r(t) && s(t) <= 9007199254740991;
            },
        });
    },
    function (t, e, i) {
        var n = i(0);
        n(n.S, "Number", {
            isNaN: function (t) {
                return t != t;
            },
        });
    },
    function (t, e, i) {
        var n = i(0);
        n(n.S, "Number", {EPSILON: Math.pow(2, -52)});
    },
    function (t, e, i) {
        var n = i(0);
        n(n.S, "Number", {MIN_SAFE_INTEGER: -9007199254740991});
    },
    function (t, e, i) {
        var n = i(0);
        n(n.S, "Number", {MAX_SAFE_INTEGER: 9007199254740991});
    },
    function (t, e, i) {
        var n = i(0),
            r = i(90),
            s = Math.sqrt,
            o = Math.acosh;
        n(n.S + n.F * !(o && 710 == Math.floor(o(Number.MAX_VALUE)) && o(Infinity) == Infinity), "Math", {
            acosh: function (t) {
                return (t = +t) < 1 ? NaN : t > 94906265.62425156 ? Math.log(t) + Math.LN2 : r(t - 1 + s(t - 1) * s(t + 1));
            },
        });
    },
    function (t, e, i) {
        var n = i(0),
            r = Math.asinh;
        n(n.S + n.F * !(r && 1 / r(0) > 0), "Math", {
            asinh: function s(t) {
                return isFinite((t = +t)) && 0 != t ? (t < 0 ? -s(-t) : Math.log(t + Math.sqrt(t * t + 1))) : t;
            },
        });
    },
    function (t, e, i) {
        var n = i(0),
            r = Math.atanh;
        n(n.S + n.F * !(r && 1 / r(-0) < 0), "Math", {
            atanh: function (t) {
                return 0 == (t = +t) ? t : Math.log((1 + t) / (1 - t)) / 2;
            },
        });
    },
    function (t, e, i) {
        var n = i(0),
            r = i(67);
        n(n.S, "Math", {
            cbrt: function (t) {
                return r((t = +t)) * Math.pow(Math.abs(t), 1 / 3);
            },
        });
    },
    function (t, e, i) {
        var n = i(0);
        n(n.S, "Math", {
            clz32: function (t) {
                return (t >>>= 0) ? 31 - Math.floor(Math.log(t + 0.5) * Math.LOG2E) : 32;
            },
        });
    },
    function (t, e, i) {
        var n = i(0),
            r = Math.exp;
        n(n.S, "Math", {
            cosh: function (t) {
                return (r((t = +t)) + r(-t)) / 2;
            },
        });
    },
    function (t, e, i) {
        var n = i(0),
            r = i(68);
        n(n.S + n.F * (r != Math.expm1), "Math", {expm1: r});
    },
    function (t, e, i) {
        var n = i(0);
        n(n.S, "Math", {fround: i(188)});
    },
    function (t, e, i) {
        var n = i(67),
            r = Math.pow,
            s = r(2, -52),
            o = r(2, -23),
            a = r(2, 127) * (2 - o),
            l = r(2, -126);
        t.exports =
            Math.fround ||
            function (t) {
                var e,
                    i,
                    r = Math.abs(t),
                    c = n(t);
                return r < l ? c * (r / l / o + 1 / s - 1 / s) * l * o : (i = (e = (1 + o / s) * r) - (e - r)) > a || i != i ? c * Infinity : c * i;
            };
    },
    function (t, e, i) {
        var n = i(0),
            r = Math.abs;
        n(n.S, "Math", {
            hypot: function (t, e) {
                for (var i, n, s = 0, o = 0, a = arguments.length, l = 0; o < a;) l < (i = r(arguments[o++])) ? ((s = s * (n = l / i) * n + 1), (l = i)) : (s += i > 0 ? (n = i / l) * n : i);
                return l === Infinity ? Infinity : l * Math.sqrt(s);
            },
        });
    },
    function (t, e, i) {
        var n = i(0),
            r = Math.imul;
        n(
            n.S +
            n.F *
            i(5)(function () {
                return -5 != r(4294967295, 5) || 2 != r.length;
            }),
            "Math",
            {
                imul: function (t, e) {
                    var i = +t,
                        n = +e,
                        r = 65535 & i,
                        s = 65535 & n;
                    return 0 | (r * s + ((((65535 & (i >>> 16)) * s + r * (65535 & (n >>> 16))) << 16) >>> 0));
                },
            }
        );
    },
    function (t, e, i) {
        var n = i(0);
        n(n.S, "Math", {log1p: i(90)});
    },
    function (t, e, i) {
        var n = i(0);
        n(n.S, "Math", {
            log10: function (t) {
                return Math.log(t) * Math.LOG10E;
            },
        });
    },
    function (t, e, i) {
        var n = i(0);
        n(n.S, "Math", {
            log2: function (t) {
                return Math.log(t) / Math.LN2;
            },
        });
    },
    function (t, e, i) {
        var n = i(0);
        n(n.S, "Math", {sign: i(67)});
    },
    function (t, e, i) {
        var n = i(0),
            r = i(68),
            s = Math.exp;
        n(
            n.S +
            n.F *
            i(5)(function () {
                return -2e-17 != !Math.sinh(-2e-17);
            }),
            "Math",
            {
                sinh: function (t) {
                    return Math.abs((t = +t)) < 1 ? (r(t) - r(-t)) / 2 : (s(t - 1) - s(-t - 1)) * (Math.E / 2);
                },
            }
        );
    },
    function (t, e, i) {
        var n = i(0),
            r = i(68),
            s = Math.exp;
        n(n.S, "Math", {
            tanh: function (t) {
                var e = r((t = +t)),
                    i = r(-t);
                return e == Infinity ? 1 : i == Infinity ? -1 : (e - i) / (s(t) + s(-t));
            },
        });
    },
    function (t, e, i) {
        var n = i(0);
        n(n.S, "Math", {
            trunc: function (t) {
                return (t > 0 ? Math.floor : Math.ceil)(t);
            },
        });
    },
    function (t, e, i) {
        "use strict";
        var n = i(0),
            r = i(52)(!0);
        n(n.P, "Array", {
            includes: function (t) {
                return r(this, t, arguments.length > 1 ? arguments[1] : undefined);
            },
        }),
            i(34)("includes");
    },
    function (t, e, i) {
        var n = i(0),
            r = i(91)(!1);
        n(n.S, "Object", {
            values: function (t) {
                return r(t);
            },
        });
    },
    function (t, e, i) {
        var n = i(0),
            r = i(91)(!0);
        n(n.S, "Object", {
            entries: function (t) {
                return r(t);
            },
        });
    },
    function (t, e, i) {
        var n = i(0),
            r = i(83),
            s = i(11),
            o = i(16),
            a = i(66);
        n(n.S, "Object", {
            getOwnPropertyDescriptors: function (t) {
                for (var e, i, n = s(t), l = o.f, c = r(n), u = {}, h = 0; c.length > h;) (i = l(n, (e = c[h++]))) !== undefined && a(u, e, i);
                return u;
            },
        });
    },
    function (t, e, i) {
        "use strict";
        var n = i(0),
            r = i(92),
            s = i(47);
        n(n.P + n.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(s), "String", {
            padStart: function (t) {
                return r(this, t, arguments.length > 1 ? arguments[1] : undefined, !0);
            },
        });
    },
    function (t, e, i) {
        "use strict";
        var n = i(0),
            r = i(92),
            s = i(47);
        n(n.P + n.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(s), "String", {
            padEnd: function (t) {
                return r(this, t, arguments.length > 1 ? arguments[1] : undefined, !1);
            },
        });
    },
    function (t, e, i) {
        var n = i(2),
            r = i(0),
            s = i(47),
            o = [].slice,
            a = /MSIE .\./.test(s),
            l = function (t) {
                return function (e, i) {
                    var n = arguments.length > 2,
                        r = !!n && o.call(arguments, 2);
                    return t(
                        n
                            ? function () {
                                ("function" == typeof e ? e : Function(e)).apply(this, r);
                            }
                            : e,
                        i
                    );
                };
            };
        r(r.G + r.B + r.F * a, {setTimeout: l(n.setTimeout), setInterval: l(n.setInterval)});
    },
    function (t, e, i) {
        var n = i(0),
            r = i(63);
        n(n.G + n.B, {setImmediate: r.set, clearImmediate: r.clear});
    },
    function (t, e, i) {
        for (
            var n = i(61),
                r = i(26),
                s = i(17),
                o = i(2),
                a = i(9),
                l = i(32),
                c = i(4),
                u = c("iterator"),
                h = c("toStringTag"),
                d = l.Array,
                f = {
                    CSSRuleList: !0,
                    CSSStyleDeclaration: !1,
                    CSSValueList: !1,
                    ClientRectList: !1,
                    DOMRectList: !1,
                    DOMStringList: !1,
                    DOMTokenList: !0,
                    DataTransferItemList: !1,
                    FileList: !1,
                    HTMLAllCollection: !1,
                    HTMLCollection: !1,
                    HTMLFormElement: !1,
                    HTMLSelectElement: !1,
                    MediaList: !0,
                    MimeTypeArray: !1,
                    NamedNodeMap: !1,
                    NodeList: !0,
                    PaintRequestList: !1,
                    Plugin: !1,
                    PluginArray: !1,
                    SVGLengthList: !1,
                    SVGNumberList: !1,
                    SVGPathSegList: !1,
                    SVGPointList: !1,
                    SVGStringList: !1,
                    SVGTransformList: !1,
                    SourceBufferList: !1,
                    StyleSheetList: !0,
                    TextTrackCueList: !1,
                    TextTrackList: !1,
                    TouchList: !1,
                },
                p = r(f),
                v = 0;
            v < p.length;
            v++
        ) {
            var m,
                g = p[v],
                y = f[g],
                w = o[g],
                b = w && w.prototype;
            if (b && (b[u] || a(b, u, d), b[h] || a(b, h, g), (l[g] = d), y)) for (m in n) b[m] || s(b, m, n[m], !0);
        }
    },
    function (t, e, i) {
        (function (e) {
            !(function (e) {
                "use strict";
                var i,
                    n = Object.prototype,
                    r = n.hasOwnProperty,
                    s = "function" == typeof Symbol ? Symbol : {},
                    o = s.iterator || "@@iterator",
                    a = s.asyncIterator || "@@asyncIterator",
                    l = s.toStringTag || "@@toStringTag",
                    c = "object" == typeof t,
                    u = e.regeneratorRuntime;
                if (u) c && (t.exports = u);
                else {
                    (u = e.regeneratorRuntime = c ? t.exports : {}).wrap = b;
                    var h = "suspendedStart",
                        d = "suspendedYield",
                        f = "executing",
                        p = "completed",
                        v = {},
                        m = {};
                    m[o] = function () {
                        return this;
                    };
                    var g = Object.getPrototypeOf,
                        y = g && g(g(P([])));
                    y && y !== n && r.call(y, o) && (m = y);
                    var w = (T.prototype = E.prototype = Object.create(m));
                    (x.prototype = w.constructor = T),
                        (T.constructor = x),
                        (T[l] = x.displayName = "GeneratorFunction"),
                        (u.isGeneratorFunction = function (t) {
                            var e = "function" == typeof t && t.constructor;
                            return !!e && (e === x || "GeneratorFunction" === (e.displayName || e.name));
                        }),
                        (u.mark = function (t) {
                            return Object.setPrototypeOf ? Object.setPrototypeOf(t, T) : ((t.__proto__ = T), l in t || (t[l] = "GeneratorFunction")), (t.prototype = Object.create(w)), t;
                        }),
                        (u.awrap = function (t) {
                            return {__await: t};
                        }),
                        S(C.prototype),
                        (C.prototype[a] = function () {
                            return this;
                        }),
                        (u.AsyncIterator = C),
                        (u.async = function (t, e, i, n) {
                            var r = new C(b(t, e, i, n));
                            return u.isGeneratorFunction(e)
                                ? r
                                : r.next().then(function (t) {
                                    return t.done ? t.value : r.next();
                                });
                        }),
                        S(w),
                        (w[l] = "Generator"),
                        (w[o] = function () {
                            return this;
                        }),
                        (w.toString = function () {
                            return "[object Generator]";
                        }),
                        (u.keys = function (t) {
                            var e = [];
                            for (var i in t) e.push(i);
                            return (
                                e.reverse(),
                                    function n() {
                                        for (; e.length;) {
                                            var i = e.pop();
                                            if (i in t) return (n.value = i), (n.done = !1), n;
                                        }
                                        return (n.done = !0), n;
                                    }
                            );
                        }),
                        (u.values = P),
                        (A.prototype = {
                            constructor: A,
                            reset: function (t) {
                                if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = i), (this.done = !1), (this.delegate = null), (this.method = "next"), (this.arg = i), this.tryEntries.forEach(L), !t))
                                    for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = i);
                            },
                            stop: function () {
                                this.done = !0;
                                var t = this.tryEntries[0].completion;
                                if ("throw" === t.type) throw t.arg;
                                return this.rval;
                            },
                            dispatchException: function (t) {
                                if (this.done) throw t;
                                var e = this;

                                function n(n, r) {
                                    return (a.type = "throw"), (a.arg = t), (e.next = n), r && ((e.method = "next"), (e.arg = i)), !!r;
                                }

                                for (var s = this.tryEntries.length - 1; s >= 0; --s) {
                                    var o = this.tryEntries[s],
                                        a = o.completion;
                                    if ("root" === o.tryLoc) return n("end");
                                    if (o.tryLoc <= this.prev) {
                                        var l = r.call(o, "catchLoc"),
                                            c = r.call(o, "finallyLoc");
                                        if (l && c) {
                                            if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                            if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                                        } else if (l) {
                                            if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                        } else {
                                            if (!c) throw new Error("try statement without catch or finally");
                                            if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                                        }
                                    }
                                }
                            },
                            abrupt: function (t, e) {
                                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                                    var n = this.tryEntries[i];
                                    if (n.tryLoc <= this.prev && r.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                        var s = n;
                                        break;
                                    }
                                }
                                s && ("break" === t || "continue" === t) && s.tryLoc <= e && e <= s.finallyLoc && (s = null);
                                var o = s ? s.completion : {};
                                return (o.type = t), (o.arg = e), s ? ((this.method = "next"), (this.next = s.finallyLoc), v) : this.complete(o);
                            },
                            complete: function (t, e) {
                                if ("throw" === t.type) throw t.arg;
                                return (
                                    "break" === t.type || "continue" === t.type
                                        ? (this.next = t.arg)
                                        : "return" === t.type
                                        ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end"))
                                        : "normal" === t.type && e && (this.next = e),
                                        v
                                );
                            },
                            finish: function (t) {
                                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                    var i = this.tryEntries[e];
                                    if (i.finallyLoc === t) return this.complete(i.completion, i.afterLoc), L(i), v;
                                }
                            },
                            catch: function (t) {
                                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                    var i = this.tryEntries[e];
                                    if (i.tryLoc === t) {
                                        var n = i.completion;
                                        if ("throw" === n.type) {
                                            var r = n.arg;
                                            L(i);
                                        }
                                        return r;
                                    }
                                }
                                throw new Error("illegal catch attempt");
                            },
                            delegateYield: function (t, e, n) {
                                return (this.delegate = {
                                    iterator: P(t),
                                    resultName: e,
                                    nextLoc: n
                                }), "next" === this.method && (this.arg = i), v;
                            },
                        });
                }

                function b(t, e, i, n) {
                    var r = e && e.prototype instanceof E ? e : E,
                        s = Object.create(r.prototype),
                        o = new A(n || []);
                    return (
                        (s._invoke = (function (t, e, i) {
                            var n = h;
                            return function (r, s) {
                                if (n === f) throw new Error("Generator is already running");
                                if (n === p) {
                                    if ("throw" === r) throw s;
                                    return z();
                                }
                                for (i.method = r, i.arg = s; ;) {
                                    var o = i.delegate;
                                    if (o) {
                                        var a = M(o, i);
                                        if (a) {
                                            if (a === v) continue;
                                            return a;
                                        }
                                    }
                                    if ("next" === i.method) i.sent = i._sent = i.arg;
                                    else if ("throw" === i.method) {
                                        if (n === h) throw ((n = p), i.arg);
                                        i.dispatchException(i.arg);
                                    } else "return" === i.method && i.abrupt("return", i.arg);
                                    n = f;
                                    var l = _(t, e, i);
                                    if ("normal" === l.type) {
                                        if (((n = i.done ? p : d), l.arg === v)) continue;
                                        return {value: l.arg, done: i.done};
                                    }
                                    "throw" === l.type && ((n = p), (i.method = "throw"), (i.arg = l.arg));
                                }
                            };
                        })(t, i, o)),
                            s
                    );
                }

                function _(t, e, i) {
                    try {
                        return {type: "normal", arg: t.call(e, i)};
                    } catch (n) {
                        return {type: "throw", arg: n};
                    }
                }

                function E() {
                }

                function x() {
                }

                function T() {
                }

                function S(t) {
                    ["next", "throw", "return"].forEach(function (e) {
                        t[e] = function (t) {
                            return this._invoke(e, t);
                        };
                    });
                }

                function C(t) {
                    function i(e, n, s, o) {
                        var a = _(t[e], t, n);
                        if ("throw" !== a.type) {
                            var l = a.arg,
                                c = l.value;
                            return c && "object" == typeof c && r.call(c, "__await")
                                ? Promise.resolve(c.__await).then(
                                    function (t) {
                                        i("next", t, s, o);
                                    },
                                    function (t) {
                                        i("throw", t, s, o);
                                    }
                                )
                                : Promise.resolve(c).then(function (t) {
                                    (l.value = t), s(l);
                                }, o);
                        }
                        o(a.arg);
                    }

                    var n;
                    "object" == typeof e.process && e.process.domain && (i = e.process.domain.bind(i)),
                        (this._invoke = function (t, e) {
                            function r() {
                                return new Promise(function (n, r) {
                                    i(t, e, n, r);
                                });
                            }

                            return (n = n ? n.then(r, r) : r());
                        });
                }

                function M(t, e) {
                    var n = t.iterator[e.method];
                    if (n === i) {
                        if (((e.delegate = null), "throw" === e.method)) {
                            if (t.iterator["return"] && ((e.method = "return"), (e.arg = i), M(t, e), "throw" === e.method)) return v;
                            (e.method = "throw"), (e.arg = new TypeError("The iterator does not provide a 'throw' method"));
                        }
                        return v;
                    }
                    var r = _(n, t.iterator, e.arg);
                    if ("throw" === r.type) return (e.method = "throw"), (e.arg = r.arg), (e.delegate = null), v;
                    var s = r.arg;
                    return s
                        ? s.done
                            ? ((e[t.resultName] = s.value), (e.next = t.nextLoc), "return" !== e.method && ((e.method = "next"), (e.arg = i)), (e.delegate = null), v)
                            : s
                        : ((e.method = "throw"), (e.arg = new TypeError("iterator result is not an object")), (e.delegate = null), v);
                }

                function k(t) {
                    var e = {tryLoc: t[0]};
                    1 in t && (e.catchLoc = t[1]), 2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])), this.tryEntries.push(e);
                }

                function L(t) {
                    var e = t.completion || {};
                    (e.type = "normal"), delete e.arg, (t.completion = e);
                }

                function A(t) {
                    (this.tryEntries = [{tryLoc: "root"}]), t.forEach(k, this), this.reset(!0);
                }

                function P(t) {
                    if (t) {
                        var e = t[o];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                s = function e() {
                                    for (; ++n < t.length;) if (r.call(t, n)) return (e.value = t[n]), (e.done = !1), e;
                                    return (e.value = i), (e.done = !0), e;
                                };
                            return (s.next = s);
                        }
                    }
                    return {next: z};
                }

                function z() {
                    return {value: i, done: !0};
                }
            })("object" == typeof e ? e : "object" == typeof window ? window : "object" == typeof self ? self : this);
        }.call(e, i(208)));
    },
    function (t, e) {
        var i;
        i = (function () {
            return this;
        })();
        try {
            i = i || Function("return this")() || (0, eval)("this");
        } catch (n) {
            "object" == typeof window && (i = window);
        }
        t.exports = i;
    },
    function (t, e) {
        [Element.prototype, CharacterData.prototype, DocumentType.prototype].filter(Boolean).forEach(function (t) {
            t.hasOwnProperty("remove") ||
            Object.defineProperty(t, "remove", {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                value: function () {
                    this.parentNode.removeChild(this);
                },
            });
        });
    },
    function (t, e, i) {
        !(function () {
            "use strict";

            function e() {
                var t = window,
                    e = document;
                if (!("scrollBehavior" in e.documentElement.style && !0 !== t.__forceSmoothScrollPolyfill__)) {
                    var i,
                        n = t.HTMLElement || t.Element,
                        r = 468,
                        s = {
                            scroll: t.scroll || t.scrollTo,
                            scrollBy: t.scrollBy,
                            elementScroll: n.prototype.scroll || l,
                            scrollIntoView: n.prototype.scrollIntoView
                        },
                        o = t.performance && t.performance.now ? t.performance.now.bind(t.performance) : Date.now,
                        a = ((i = t.navigator.userAgent), new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(i) ? 1 : 0);
                    (t.scroll = t.scrollTo = function () {
                        arguments[0] !== undefined &&
                        (!0 !== c(arguments[0])
                            ? p.call(t, e.body, arguments[0].left !== undefined ? ~~arguments[0].left : t.scrollX || t.pageXOffset, arguments[0].top !== undefined ? ~~arguments[0].top : t.scrollY || t.pageYOffset)
                            : s.scroll.call(
                                t,
                                arguments[0].left !== undefined ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : t.scrollX || t.pageXOffset,
                                arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : t.scrollY || t.pageYOffset
                            ));
                    }),
                        (t.scrollBy = function () {
                            arguments[0] !== undefined &&
                            (c(arguments[0])
                                ? s.scrollBy.call(
                                    t,
                                    arguments[0].left !== undefined ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0,
                                    arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : 0
                                )
                                : p.call(t, e.body, ~~arguments[0].left + (t.scrollX || t.pageXOffset), ~~arguments[0].top + (t.scrollY || t.pageYOffset)));
                        }),
                        (n.prototype.scroll = n.prototype.scrollTo = function () {
                            if (arguments[0] !== undefined)
                                if (!0 !== c(arguments[0])) {
                                    var t = arguments[0].left,
                                        e = arguments[0].top;
                                    p.call(this, this, void 0 === t ? this.scrollLeft : ~~t, void 0 === e ? this.scrollTop : ~~e);
                                } else {
                                    if ("number" == typeof arguments[0] && arguments[1] === undefined) throw new SyntaxError("Value could not be converted");
                                    s.elementScroll.call(
                                        this,
                                        arguments[0].left !== undefined ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft,
                                        arguments[0].top !== undefined ? ~~arguments[0].top : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop
                                    );
                                }
                        }),
                        (n.prototype.scrollBy = function () {
                            arguments[0] !== undefined &&
                            (!0 !== c(arguments[0])
                                ? this.scroll({
                                    left: ~~arguments[0].left + this.scrollLeft,
                                    top: ~~arguments[0].top + this.scrollTop,
                                    behavior: arguments[0].behavior
                                })
                                : s.elementScroll.call(
                                    this,
                                    arguments[0].left !== undefined ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft,
                                    arguments[0].top !== undefined ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop
                                ));
                        }),
                        (n.prototype.scrollIntoView = function () {
                            if (!0 !== c(arguments[0])) {
                                var i = (function (t) {
                                        var i;
                                        do {
                                            i = (t = t.parentNode) === e.body;
                                        } while (!1 === i && !1 === d(t));
                                        return (i = null), t;
                                    })(this),
                                    n = i.getBoundingClientRect(),
                                    r = this.getBoundingClientRect();
                                i !== e.body
                                    ? (p.call(this, i, i.scrollLeft + r.left - n.left, i.scrollTop + r.top - n.top), "fixed" !== t.getComputedStyle(i).position && t.scrollBy({
                                        left: n.left,
                                        top: n.top,
                                        behavior: "smooth"
                                    }))
                                    : t.scrollBy({left: r.left, top: r.top, behavior: "smooth"});
                            } else s.scrollIntoView.call(this, arguments[0] === undefined || arguments[0]);
                        });
                }

                function l(t, e) {
                    (this.scrollLeft = t), (this.scrollTop = e);
                }

                function c(t) {
                    if (null === t || "object" != typeof t || t.behavior === undefined || "auto" === t.behavior || "instant" === t.behavior) return !0;
                    if ("object" == typeof t && "smooth" === t.behavior) return !1;
                    throw new TypeError("behavior member of ScrollOptions " + t.behavior + " is not a valid value for enumeration ScrollBehavior.");
                }

                function u(t, e) {
                    return "Y" === e ? t.clientHeight + a < t.scrollHeight : "X" === e ? t.clientWidth + a < t.scrollWidth : void 0;
                }

                function h(e, i) {
                    var n = t.getComputedStyle(e, null)["overflow" + i];
                    return "auto" === n || "scroll" === n;
                }

                function d(t) {
                    var e = u(t, "Y") && h(t, "Y"),
                        i = u(t, "X") && h(t, "X");
                    return e || i;
                }

                function f(e) {
                    var i,
                        n,
                        s,
                        a,
                        l = (o() - e.startTime) / r;
                    (a = l = l > 1 ? 1 : l),
                        (i = 0.5 * (1 - Math.cos(Math.PI * a))),
                        (n = e.startX + (e.x - e.startX) * i),
                        (s = e.startY + (e.y - e.startY) * i),
                        e.method.call(e.scrollable, n, s),
                    (n === e.x && s === e.y) || t.requestAnimationFrame(f.bind(t, e));
                }

                function p(i, n, r) {
                    var a,
                        c,
                        u,
                        h,
                        d = o();
                    i === e.body ? ((a = t), (c = t.scrollX || t.pageXOffset), (u = t.scrollY || t.pageYOffset), (h = s.scroll)) : ((a = i), (c = i.scrollLeft), (u = i.scrollTop), (h = l)),
                        f({scrollable: a, method: h, startTime: d, startX: c, startY: u, x: n, y: r});
                }
            }

            t.exports = {polyfill: e};
        })();
    },
    function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), (e.Scrollslider = undefined);
        var n = (function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                }
            }

            return function (e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e;
            };
        })();
        i(212);
        var r,
            s = i(41),
            o = i(213),
            a = (r = o) && r.__esModule ? r : {default: r};
        var l = document.querySelector(".museum-page__scrollslider__slide--fixed-height"),
            c = l ? l.scrollWidth : null,
            u = l ? c + 200 : null,
            h = document.querySelector(".museum-page__scrollslider__wrapper"),
            d = document.querySelector(".museum-page__scrollslider__navigation-button--next"),
            f = document.querySelector(".museum-page__scrollslider__navigation-button--prev"),
            p = c / 6,
            v = document.querySelectorAll(".museum-page__scrollslider__slide"),
            m = document.querySelectorAll(".museum-page__scrollslider__slide-wrapper-link"),
            g = "museum-page__scrollslider__slide--is-open";
        e.Scrollslider = (function () {
            function t(e) {
                !(function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                })(this, t),
                    (this.clickEventIsAttached = !1),
                    (this.screenSize = {mobile: !1, tablet: !1, desktop: !1}),
                e && ((this.scrollsliderSlide = e), this._addEvents()),
                e || d.classList.toggle("museum-page__scrollslider__navigation-button--hidden", h.scrollWidth <= window.innerWidth),
                    this._addResizeEvent(),
                    this._setLayout();
            }

            return (
                n(t, [
                    {
                        key: "_addResizeEvent",
                        value: function () {
                            var t = this;
                            window.addEventListener("resize", function () {
                                f.classList.add("museum-page__scrollslider__navigation-button--hidden"), d.classList.remove("museum-page__scrollslider__navigation-button--hidden"), h.scrollTo(0, 0), t._setLayout();
                            });
                        },
                    },
                    {
                        key: "_setTracking",
                        value: function () {
                            var t = new s.Tracking();
                            t.sendSzmPi(), t.sendAtPi();
                        },
                    },
                    {
                        key: "_addEvents",
                        value: function () {
                            var t = this;
                            d.addEventListener("click", function (e) {
                                var i = h.scrollLeft,
                                    n = h.scrollLeft + u;
                                t._scrollsliderScroll(i, n), t._setTracking(), window.atiTracking(e.target, "slider-blaettern-rechts", "action");
                            }),
                                f.addEventListener("click", function (e) {
                                    var i = h.scrollLeft,
                                        n = h.scrollLeft - u;
                                    t._scrollsliderScroll(i, n), t._setTracking(), window.atiTracking(e.target, "slider-blaettern-links", "action");
                                }),
                                h.addEventListener("scroll", function () {
                                    var t = h.scrollWidth - window.innerWidth;
                                    h.scrollLeft >= t - p ? (h.scrollTo(t, 0), d.classList.add("museum-page__scrollslider__navigation-button--hidden")) : d.classList.remove("museum-page__scrollslider__navigation-button--hidden"),
                                        h.scrollLeft <= p ? (f.classList.add("museum-page__scrollslider__navigation-button--hidden"), h.scrollTo(0, 0)) : f.classList.remove("museum-page__scrollslider__navigation-button--hidden");
                                }),
                                Array.from(v).forEach(function (t) {
                                    t.addEventListener("click", function (t) {
                                        window.atiTracking(t.target, "vorschau-click", "action");
                                    });
                                });
                        },
                    },
                    {
                        key: "_destroy",
                        value: function () {
                            var t = this;
                            Array.from(v).forEach(function (e) {
                                e.removeEventListener("click", t._toggleDescriptions, !0);
                            });
                        },
                    },
                    {
                        key: "_setLayout",
                        value: function () {
                            var t = this.screenSize;
                            (this.screenSize = {
                                mobile: this._isMobile,
                                tablet: this._isTablet,
                                desktop: this._isDesktop
                            }),
                            JSON.stringify(this.screenSize) !== JSON.stringify(t) &&
                            (this._destroy(),
                            this._isMobile && this._setMobile(),
                            this._isTablet && this._setTablet(),
                            this._isDesktop && this._setDesktop(),
                                Array.from(v).forEach(function (t) {
                                    t.classList.remove(g);
                                }));
                        },
                    },
                    {
                        key: "_toggleDescriptions",
                        value: function (t) {
                            var e = t.target.closest(".museum-page__scrollslider__slide"),
                                i = e.classList.contains(g);
                            Array.from(v).forEach(function (t) {
                                t.classList.remove(g);
                            }),
                                i ? e.classList.remove(g) : e.classList.add(g),
                            this.screenSize.mobile &&
                            setTimeout(function () {
                                var t = e.getBoundingClientRect().top - document.querySelector("nav").clientHeight,
                                    i = window.pageYOffset + t;
                                (0, a["default"])(i, {minDuration: 500});
                            }, 500);
                        },
                    },
                    {
                        key: "_setMobile",
                        value: function () {
                            this._addToggleDescriptionEvent();
                        },
                    },
                    {
                        key: "_setTablet",
                        value: function () {
                            this._addToggleDescriptionEvent(),
                                Array.from(m).forEach(function (t) {
                                    t.classList.remove("museum-page__scrollslider__slide-wrapper-link--desktop"), t.classList.add("museum-page__scrollslider__slide-wrapper-link--tablet");
                                });
                        },
                    },
                    {
                        key: "_setDesktop",
                        value: function () {
                            Array.from(m).forEach(function (t) {
                                t.classList.remove("museum-page__scrollslider__slide-wrapper-link"),
                                    t.classList.remove("museum-page__scrollslider__slide-wrapper-link--tablet"),
                                    t.classList.add("museum-page__scrollslider__slide-wrapper-link--desktop");
                            });
                        },
                    },
                    {
                        key: "_addToggleDescriptionEvent",
                        value: function () {
                            var t = this;
                            this.clickEventIsAttached ||
                            ((this.clickEventIsAttached = !0),
                                Array.from(v).forEach(function (e) {
                                    e.addEventListener("click", t._toggleDescriptions.bind(t), !1);
                                }));
                        },
                    },
                    {
                        key: "_scrollsliderScroll",
                        value: function (t, e) {
                            var i = this,
                                n = new Date().getTime(),
                                r = setInterval(function () {
                                    var s = new Date().getTime() - n,
                                        o = i._easeInOutQuart(s, t, e - t, 500);
                                    h.scrollTo(o, 0), s >= 500 && clearInterval(r);
                                }, 1e3 / 60);
                            h.scrollTo(t, 0);
                        },
                    },
                    {
                        key: "_easeInOutQuart",
                        value: function (t, e, i, n) {
                            return (t /= n / 2) < 1 ? (i / 2) * t * t * t * t + e : (-i / 2) * ((t -= 2) * t * t * t - 2) + e;
                        },
                    },
                    {
                        key: "_isMobile",
                        get: function () {
                            return window.innerWidth < 900;
                        },
                    },
                    {
                        key: "_isTablet",
                        get: function () {
                            return window.innerWidth >= 900 && window.innerWidth < 1200;
                        },
                    },
                    {
                        key: "_isDesktop",
                        get: function () {
                            return window.innerWidth >= 1200;
                        },
                    },
                ]),
                    t
            );
        })();
    },
    function (t, e) {
        var i;
        "function" != typeof (i = window.Element.prototype).matches &&
        (i.matches =
            i.msMatchesSelector ||
            i.mozMatchesSelector ||
            i.webkitMatchesSelector ||
            function (t) {
                for (var e = (this.document || this.ownerDocument).querySelectorAll(t), i = 0; e[i] && e[i] !== this;) ++i;
                return Boolean(e[i]);
            }),
        "function" != typeof i.closest &&
        (i.closest = function (t) {
            for (var e = this; e && 1 === e.nodeType;) {
                if (e.matches(t)) return e;
                e = e.parentNode;
            }
            return null;
        });
    },
    function (t, e, i) {
        (function () {
            "use strict";

            function i(t) {
                for (
                    var e = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1],
                        i = {
                            speed: 500,
                            minDuration: 250,
                            maxDuration: 1500,
                            cancelOnUserAction: !0,
                            element: window,
                            horizontal: !1,
                            onComplete: undefined,
                            passive: !0,
                            offset: 0
                        },
                        n = Object.keys(i),
                        r = 0;
                    r < n.length;
                    r++
                ) {
                    var s = n[r];
                    "undefined" != typeof e[s] && (i[s] = e[s]);
                }
                if (
                    (!i.cancelOnUserAction &&
                    i.passive &&
                    ((i.passive = !1), e.passive && console && console.warn('animated-scroll-to:\n "passive" was set to "false" to prevent errors, as using "cancelOnUserAction: false" doesn\'t work with passive events.')),
                    t instanceof HTMLElement)
                )
                    if (e.element && e.element instanceof HTMLElement)
                        t = i.horizontal ? t.getBoundingClientRect().left + e.element.scrollLeft - e.element.getBoundingClientRect().left : t.getBoundingClientRect().top + e.element.scrollTop - e.element.getBoundingClientRect().top;
                    else if (i.horizontal) {
                        var o = window.scrollX || document.documentElement.scrollLeft;
                        t = o + t.getBoundingClientRect().left;
                    } else {
                        var a = window.scrollY || document.documentElement.scrollTop;
                        t = a + t.getBoundingClientRect().top;
                    }
                (t += i.offset), (i.isWindow = i.element === window);
                var l = null,
                    c = 0,
                    u = null;
                i.isWindow
                    ? i.horizontal
                    ? ((l = window.scrollX || document.documentElement.scrollLeft),
                        (c = window.scrollY || document.documentElement.scrollTop),
                        (u =
                            Math.max(document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth, document.body.clientWidth, document.documentElement.clientWidth) -
                            window.innerWidth))
                    : ((l = window.scrollY || document.documentElement.scrollTop),
                        (c = window.scrollX || document.documentElement.scrollLeft),
                        (u =
                            Math.max(
                                document.body.scrollHeight,
                                document.documentElement.scrollHeight,
                                document.body.offsetHeight,
                                document.documentElement.offsetHeight,
                                document.body.clientHeight,
                                document.documentElement.clientHeight
                            ) - window.innerHeight))
                    : i.horizontal
                    ? ((l = i.element.scrollLeft), (u = i.element.scrollWidth - i.element.clientWidth))
                    : ((l = i.element.scrollTop), (u = i.element.scrollHeight - i.element.clientHeight)),
                t > u && (t = u);
                var h = t - l;
                if (0 !== h) {
                    var d = Math.abs(Math.round((h / 1e3) * i.speed));
                    d < i.minDuration ? (d = i.minDuration) : d > i.maxDuration && (d = i.maxDuration);
                    var f = Date.now(),
                        p = null,
                        v = null,
                        m = {passive: i.passive};
                    i.cancelOnUserAction
                        ? ((v = function () {
                            g(), cancelAnimationFrame(p);
                        }),
                            window.addEventListener("keydown", v, m),
                            window.addEventListener("mousedown", v, m))
                        : ((v = function (t) {
                            t.preventDefault();
                        }),
                            window.addEventListener("scroll", v, m)),
                        window.addEventListener("wheel", v, m),
                        window.addEventListener("touchstart", v, m);
                    var g = function () {
                            window.removeEventListener("wheel", v, m),
                                window.removeEventListener("touchstart", v, m),
                                i.cancelOnUserAction ? (window.removeEventListener("keydown", v, m), window.removeEventListener("mousedown", v, m)) : window.removeEventListener("scroll", v, m);
                        },
                        y = function () {
                            var e = Date.now() - f,
                                n = e / d - 1,
                                r = n * n * n + 1,
                                s = Math.round(l + h * r),
                                o = function (t) {
                                    i.isWindow ? (i.horizontal ? i.element.scrollTo(t, c) : i.element.scrollTo(c, t)) : i.horizontal ? (i.element.scrollLeft = t) : (i.element.scrollTop = t);
                                };
                            e < d && s !== t ? (o(s), (p = requestAnimationFrame(y))) : (o(t), cancelAnimationFrame(p), g(), i.onComplete && "function" == typeof i.onComplete && i.onComplete());
                        };
                    p = requestAnimationFrame(y);
                } else i.onComplete && "function" == typeof i.onComplete && i.onComplete();
            }

            void 0 !== t && t.exports && ((t.exports = i), (e = t.exports)), (e["default"] = i);
        }.call(this));
    },
    function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), (e.FeaturedArtworks = undefined);
        var n,
            r = (function () {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                    }
                }

                return function (e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e;
                };
            })(),
            s = i(215),
            o = (n = s) && n.__esModule ? n : {default: n},
            a = i(41);
        e.FeaturedArtworks = (function () {
            function t() {
                !(function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                })(this, t),
                    (this.swiper = undefined),
                    this._init(),
                    this._addEvents();
            }

            return (
                r(t, [
                    {
                        key: "_init",
                        value: function () {
                            this.swiper = new o["default"](".featured-artworks", {
                                slidesPerView: 1,
                                spaceBetween: 30,
                                centeredSlides: !0,
                                keyboard: !0,
                                preloadImages: !1,
                                lazy: !0,
                                navigation: {
                                    nextEl: ".featured-artworks__swiper-button--next",
                                    prevEl: ".featured-artworks__swiper-button--prev"
                                },
                                pagination: {
                                    el: ".swiper-pagination",
                                    clickable: !0,
                                    bulletElement: "button",
                                    dynamicBullets: !1
                                },
                                breakpoints: {600: {spaceBetween: 10}},
                                observer: !0,
                            });
                        },
                    },
                    {
                        key: "_addEvents",
                        value: function () {
                            var t = document.querySelectorAll(".featured-artworks__artwork");
                            [].slice.call(t).forEach(function (t) {
                                t.querySelector(".featured-artworks__artwork-container").addEventListener("click", function (t) {
                                    window.atiTracking(t.currentTarget, "teaser-click", "action");
                                });
                            }),
                                this.swiper.on("slideChange", function () {
                                    var t = new a.Tracking();
                                    t.sendSzmPi(), t.sendAtPi();
                                });
                        },
                    },
                ]),
                    t
            );
        })();
    },
    function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = (function () {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                    }
                }

                return function (e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e;
                };
            })(),
            r =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                        return typeof t;
                    }
                    : function (t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                    },
            s = i(216),
            o = i(93);

        function a(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
        }

        function l(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }

        var c = {
            addClass: s.addClass,
            removeClass: s.removeClass,
            hasClass: s.hasClass,
            toggleClass: s.toggleClass,
            attr: s.attr,
            removeAttr: s.removeAttr,
            data: s.data,
            transform: s.transform,
            transition: s.transition,
            on: s.on,
            off: s.off,
            trigger: s.trigger,
            transitionEnd: s.transitionEnd,
            outerWidth: s.outerWidth,
            outerHeight: s.outerHeight,
            offset: s.offset,
            css: s.css,
            each: s.each,
            html: s.html,
            text: s.text,
            is: s.is,
            index: s.index,
            eq: s.eq,
            append: s.append,
            prepend: s.prepend,
            next: s.next,
            nextAll: s.nextAll,
            prev: s.prev,
            prevAll: s.prevAll,
            parent: s.parent,
            parents: s.parents,
            closest: s.closest,
            find: s.find,
            children: s.children,
            remove: s.remove,
            add: s.add,
            styles: s.styles,
        };
        Object.keys(c).forEach(function (t) {
            s.$.fn[t] = c[t];
        });
        var u,
            h,
            d = {
                deleteProps: function (t) {
                    var e = t;
                    Object.keys(e).forEach(function (t) {
                        try {
                            e[t] = null;
                        } catch (i) {
                        }
                        try {
                            delete e[t];
                        } catch (i) {
                        }
                    });
                },
                nextTick: function (t) {
                    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                    return setTimeout(t, e);
                },
                now: function () {
                    return Date.now();
                },
                getTranslate: function (t) {
                    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "x",
                        i = void 0,
                        n = void 0,
                        r = void 0,
                        s = o.window.getComputedStyle(t, null);
                    return (
                        o.window.WebKitCSSMatrix
                            ? ((n = s.transform || s.webkitTransform).split(",").length > 6 &&
                            (n = n
                                .split(", ")
                                .map(function (t) {
                                    return t.replace(",", ".");
                                })
                                .join(", ")),
                                (r = new o.window.WebKitCSSMatrix("none" === n ? "" : n)))
                            : (i = (r = s.MozTransform || s.OTransform || s.MsTransform || s.msTransform || s.transform || s.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(",")),
                        "x" === e && (n = o.window.WebKitCSSMatrix ? r.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])),
                        "y" === e && (n = o.window.WebKitCSSMatrix ? r.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])),
                        n || 0
                    );
                },
                parseUrlQuery: function (t) {
                    var e = {},
                        i = t || o.window.location.href,
                        n = void 0,
                        r = void 0,
                        s = void 0,
                        a = void 0;
                    if ("string" == typeof i && i.length)
                        for (
                            a = (r = (i = i.indexOf("?") > -1 ? i.replace(/\S*\?/, "") : "").split("&").filter(function (t) {
                                return "" !== t;
                            })).length,
                                n = 0;
                            n < a;
                            n += 1
                        )
                            (s = r[n].replace(/#\S+/g, "").split("=")), (e[decodeURIComponent(s[0])] = "undefined" == typeof s[1] ? undefined : decodeURIComponent(s[1]) || "");
                    return e;
                },
                isObject: function (t) {
                    return "object" === (void 0 === t ? "undefined" : r(t)) && null !== t && t.constructor && t.constructor === Object;
                },
                extend: function () {
                    for (var t = Object(arguments.length <= 0 ? undefined : arguments[0]), e = 1; e < arguments.length; e += 1) {
                        var i = arguments.length <= e ? undefined : arguments[e];
                        if (i !== undefined && null !== i)
                            for (var n = Object.keys(Object(i)), r = 0, s = n.length; r < s; r += 1) {
                                var o = n[r],
                                    a = Object.getOwnPropertyDescriptor(i, o);
                                a !== undefined && a.enumerable && (d.isObject(t[o]) && d.isObject(i[o]) ? d.extend(t[o], i[o]) : !d.isObject(t[o]) && d.isObject(i[o]) ? ((t[o] = {}), d.extend(t[o], i[o])) : (t[o] = i[o]));
                            }
                    }
                    return t;
                },
            },
            f =
                ((h = o.document.createElement("div")),
                    {
                        touch: (o.window.Modernizr && !0 === o.window.Modernizr.touch) || !!("ontouchstart" in o.window || (o.window.DocumentTouch && o.document instanceof o.window.DocumentTouch)),
                        pointerEvents: !(!o.window.navigator.pointerEnabled && !o.window.PointerEvent),
                        prefixedPointerEvents: !!o.window.navigator.msPointerEnabled,
                        transition: ((u = h.style), "transition" in u || "webkitTransition" in u || "MozTransition" in u),
                        transforms3d:
                        (o.window.Modernizr && !0 === o.window.Modernizr.csstransforms3d) ||
                        (function () {
                            var t = h.style;
                            return "webkitPerspective" in t || "MozPerspective" in t || "OPerspective" in t || "MsPerspective" in t || "perspective" in t;
                        })(),
                        flexbox: (function () {
                            for (
                                var t = h.style, e = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0;
                                i < e.length;
                                i += 1
                            )
                                if (e[i] in t) return !0;
                            return !1;
                        })(),
                        observer: "MutationObserver" in o.window || "WebkitMutationObserver" in o.window,
                        passiveListener: (function () {
                            var t = !1;
                            try {
                                var e = Object.defineProperty({}, "passive", {
                                    get: function () {
                                        t = !0;
                                    },
                                });
                                o.window.addEventListener("testPassiveListener", null, e);
                            } catch (i) {
                            }
                            return t;
                        })(),
                        gestures: "ongesturestart" in o.window,
                    }),
            p = (function () {
                function t() {
                    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                    l(this, t);
                    var i = this;
                    (i.params = e),
                        (i.eventsListeners = {}),
                    i.params &&
                    i.params.on &&
                    Object.keys(i.params.on).forEach(function (t) {
                        i.on(t, i.params.on[t]);
                    });
                }

                return (
                    n(
                        t,
                        [
                            {
                                key: "on",
                                value: function (t, e, i) {
                                    var n = this;
                                    if ("function" != typeof e) return n;
                                    var r = i ? "unshift" : "push";
                                    return (
                                        t.split(" ").forEach(function (t) {
                                            n.eventsListeners[t] || (n.eventsListeners[t] = []), n.eventsListeners[t][r](e);
                                        }),
                                            n
                                    );
                                },
                            },
                            {
                                key: "once",
                                value: function (t, e, i) {
                                    var n = this;
                                    if ("function" != typeof e) return n;
                                    return n.on(
                                        t,
                                        function r() {
                                            for (var i = arguments.length, s = Array(i), o = 0; o < i; o++) s[o] = arguments[o];
                                            e.apply(n, s), n.off(t, r);
                                        },
                                        i
                                    );
                                },
                            },
                            {
                                key: "off",
                                value: function (t, e) {
                                    var i = this;
                                    return i.eventsListeners
                                        ? (t.split(" ").forEach(function (t) {
                                            void 0 === e
                                                ? (i.eventsListeners[t] = [])
                                                : i.eventsListeners[t].forEach(function (n, r) {
                                                    n === e && i.eventsListeners[t].splice(r, 1);
                                                });
                                        }),
                                            i)
                                        : i;
                                },
                            },
                            {
                                key: "emit",
                                value: function () {
                                    var t = this;
                                    if (!t.eventsListeners) return t;
                                    for (var e = void 0, i = void 0, n = void 0, r = arguments.length, s = Array(r), o = 0; o < r; o++) s[o] = arguments[o];
                                    return (
                                        "string" == typeof s[0] || Array.isArray(s[0]) ? ((e = s[0]), (i = s.slice(1, s.length)), (n = t)) : ((e = s[0].events), (i = s[0].data), (n = s[0].context || t)),
                                            (Array.isArray(e) ? e : e.split(" ")).forEach(function (e) {
                                                if (t.eventsListeners && t.eventsListeners[e]) {
                                                    var r = [];
                                                    t.eventsListeners[e].forEach(function (t) {
                                                        r.push(t);
                                                    }),
                                                        r.forEach(function (t) {
                                                            t.apply(n, i);
                                                        });
                                                }
                                            }),
                                            t
                                    );
                                },
                            },
                            {
                                key: "useModulesParams",
                                value: function (t) {
                                    var e = this;
                                    e.modules &&
                                    Object.keys(e.modules).forEach(function (i) {
                                        var n = e.modules[i];
                                        n.params && d.extend(t, n.params);
                                    });
                                },
                            },
                            {
                                key: "useModules",
                                value: function () {
                                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                                        e = this;
                                    e.modules &&
                                    Object.keys(e.modules).forEach(function (i) {
                                        var n = e.modules[i],
                                            r = t[i] || {};
                                        n.instance &&
                                        Object.keys(n.instance).forEach(function (t) {
                                            var i = n.instance[t];
                                            e[t] = "function" == typeof i ? i.bind(e) : i;
                                        }),
                                        n.on &&
                                        e.on &&
                                        Object.keys(n.on).forEach(function (t) {
                                            e.on(t, n.on[t]);
                                        }),
                                        n.create && n.create.bind(e)(r);
                                    });
                                },
                            },
                        ],
                        [
                            {
                                key: "installModule",
                                value: function (t) {
                                    var e = this;
                                    e.prototype.modules || (e.prototype.modules = {});
                                    var i = t.name || Object.keys(e.prototype.modules).length + "_" + d.now();
                                    if (
                                        ((e.prototype.modules[i] = t),
                                        t.proto &&
                                        Object.keys(t.proto).forEach(function (i) {
                                            e.prototype[i] = t.proto[i];
                                        }),
                                        t["static"] &&
                                        Object.keys(t["static"]).forEach(function (i) {
                                            e[i] = t["static"][i];
                                        }),
                                            t.install)
                                    ) {
                                        for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++) r[s - 1] = arguments[s];
                                        t.install.apply(e, r);
                                    }
                                    return e;
                                },
                            },
                            {
                                key: "use",
                                value: function (t) {
                                    var e = this;
                                    if (Array.isArray(t))
                                        return (
                                            t.forEach(function (t) {
                                                return e.installModule(t);
                                            }),
                                                e
                                        );
                                    for (var i = arguments.length, n = Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++) n[r - 1] = arguments[r];
                                    return e.installModule.apply(e, [t].concat(n));
                                },
                            },
                            {
                                key: "components",
                                set: function (t) {
                                    this.use && this.use(t);
                                },
                            },
                        ]
                    ),
                        t
                );
            })();
        var v = {
            updateSize: function () {
                var t = void 0,
                    e = void 0,
                    i = this.$el;
                (t = "undefined" != typeof this.params.width ? this.params.width : i[0].clientWidth),
                    (e = "undefined" != typeof this.params.height ? this.params.height : i[0].clientHeight),
                (0 === t && this.isHorizontal()) ||
                (0 === e && this.isVertical()) ||
                ((t = t - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10)),
                    (e = e - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10)),
                    d.extend(this, {width: t, height: e, size: this.isHorizontal() ? t : e}));
            },
            updateSlides: function () {
                var t = this.params,
                    e = this.$wrapperEl,
                    i = this.size,
                    n = this.rtlTranslate,
                    r = this.wrongRTL,
                    s = e.children("." + this.params.slideClass),
                    a = this.virtual && t.virtual.enabled ? this.virtual.slides.length : s.length,
                    l = [],
                    c = [],
                    u = [],
                    h = t.slidesOffsetBefore;
                "function" == typeof h && (h = t.slidesOffsetBefore.call(this));
                var p = t.slidesOffsetAfter;
                "function" == typeof p && (p = t.slidesOffsetAfter.call(this));
                var v = a,
                    m = this.snapGrid.length,
                    g = this.snapGrid.length,
                    y = t.spaceBetween,
                    w = -h,
                    b = 0,
                    _ = 0;
                if (void 0 !== i) {
                    "string" == typeof y && y.indexOf("%") >= 0 && (y = (parseFloat(y.replace("%", "")) / 100) * i), (this.virtualSize = -y), n ? s.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : s.css({marginRight: "", marginBottom: ""});
                    var E = void 0;
                    t.slidesPerColumn > 1 &&
                    ((E = Math.floor(a / t.slidesPerColumn) === a / this.params.slidesPerColumn ? a : Math.ceil(a / t.slidesPerColumn) * t.slidesPerColumn),
                    "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (E = Math.max(E, t.slidesPerView * t.slidesPerColumn)));
                    for (var x = void 0, T = t.slidesPerColumn, S = E / T, C = S - (t.slidesPerColumn * S - a), M = 0; M < a; M += 1) {
                        x = 0;
                        var k = s.eq(M);
                        if (t.slidesPerColumn > 1) {
                            var L = void 0,
                                A = void 0,
                                P = void 0;
                            "column" === t.slidesPerColumnFill
                                ? ((P = M - (A = Math.floor(M / T)) * T),
                                (A > C || (A === C && P === T - 1)) && (P += 1) >= T && ((P = 0), (A += 1)),
                                    (L = A + (P * E) / T),
                                    k.css({
                                        "-webkit-box-ordinal-group": L,
                                        "-moz-box-ordinal-group": L,
                                        "-ms-flex-order": L,
                                        "-webkit-order": L,
                                        order: L
                                    }))
                                : (A = M - (P = Math.floor(M / S)) * S),
                                k
                                    .css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== P && t.spaceBetween && t.spaceBetween + "px")
                                    .attr("data-swiper-column", A)
                                    .attr("data-swiper-row", P);
                        }
                        if ("none" !== k.css("display")) {
                            if ("auto" === t.slidesPerView) {
                                var z = o.window.getComputedStyle(k[0], null),
                                    I = k[0].style.transform;
                                I && (k[0].style.transform = "none"),
                                    (x = this.isHorizontal()
                                        ? k[0].getBoundingClientRect().width + parseFloat(z.getPropertyValue("margin-left")) + parseFloat(z.getPropertyValue("margin-right"))
                                        : k[0].getBoundingClientRect().height + parseFloat(z.getPropertyValue("margin-top")) + parseFloat(z.getPropertyValue("margin-bottom"))),
                                I && (k[0].style.transform = I),
                                t.roundLengths && (x = Math.floor(x));
                            } else (x = (i - (t.slidesPerView - 1) * y) / t.slidesPerView), t.roundLengths && (x = Math.floor(x)), s[M] && (this.isHorizontal() ? (s[M].style.width = x + "px") : (s[M].style.height = x + "px"));
                            s[M] && (s[M].swiperSlideSize = x),
                                u.push(x),
                                t.centeredSlides
                                    ? ((w = w + x / 2 + b / 2 + y), 0 === b && 0 !== M && (w = w - i / 2 - y), 0 === M && (w = w - i / 2 - y), Math.abs(w) < 0.001 && (w = 0), _ % t.slidesPerGroup == 0 && l.push(w), c.push(w))
                                    : (_ % t.slidesPerGroup == 0 && l.push(w), c.push(w), (w = w + x + y)),
                                (this.virtualSize += x + y),
                                (b = x),
                                (_ += 1);
                        }
                    }
                    this.virtualSize = Math.max(this.virtualSize, i) + p;
                    var O = void 0;
                    if (
                        (n && r && ("slide" === t.effect || "coverflow" === t.effect) && e.css({width: this.virtualSize + t.spaceBetween + "px"}),
                        (f.flexbox && !t.setWrapperSize) || (this.isHorizontal() ? e.css({width: this.virtualSize + t.spaceBetween + "px"}) : e.css({height: this.virtualSize + t.spaceBetween + "px"})),
                        t.slidesPerColumn > 1 &&
                        ((this.virtualSize = (x + t.spaceBetween) * E),
                            (this.virtualSize = Math.ceil(this.virtualSize / t.slidesPerColumn) - t.spaceBetween),
                            this.isHorizontal() ? e.css({width: this.virtualSize + t.spaceBetween + "px"}) : e.css({height: this.virtualSize + t.spaceBetween + "px"}),
                            t.centeredSlides))
                    ) {
                        O = [];
                        for (var D = 0; D < l.length; D += 1) l[D] < this.virtualSize + l[0] && O.push(l[D]);
                        l = O;
                    }
                    if (!t.centeredSlides) {
                        O = [];
                        for (var $ = 0; $ < l.length; $ += 1) l[$] <= this.virtualSize - i && O.push(l[$]);
                        (l = O), Math.floor(this.virtualSize - i) - Math.floor(l[l.length - 1]) > 1 && l.push(this.virtualSize - i);
                    }
                    0 === l.length && (l = [0]),
                    0 !== t.spaceBetween && (this.isHorizontal() ? (n ? s.css({marginLeft: y + "px"}) : s.css({marginRight: y + "px"})) : s.css({marginBottom: y + "px"})),
                        d.extend(this, {slides: s, snapGrid: l, slidesGrid: c, slidesSizesGrid: u}),
                    a !== v && this.emit("slidesLengthChange"),
                    l.length !== m && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")),
                    c.length !== g && this.emit("slidesGridLengthChange"),
                    (t.watchSlidesProgress || t.watchSlidesVisibility) && this.updateSlidesOffset();
                }
            },
            updateAutoHeight: function (t) {
                var e = [],
                    i = 0,
                    n = void 0;
                if (("number" == typeof t ? this.setTransition(t) : !0 === t && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1))
                    for (n = 0; n < Math.ceil(this.params.slidesPerView); n += 1) {
                        var r = this.activeIndex + n;
                        if (r > this.slides.length) break;
                        e.push(this.slides.eq(r)[0]);
                    }
                else e.push(this.slides.eq(this.activeIndex)[0]);
                for (n = 0; n < e.length; n += 1)
                    if ("undefined" != typeof e[n]) {
                        var s = e[n].offsetHeight;
                        i = s > i ? s : i;
                    }
                i && this.$wrapperEl.css("height", i + "px");
            },
            updateSlidesOffset: function () {
                for (var t = this.slides, e = 0; e < t.length; e += 1) t[e].swiperSlideOffset = this.isHorizontal() ? t[e].offsetLeft : t[e].offsetTop;
            },
            updateSlidesProgress: function () {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (this && this.translate) || 0,
                    e = this.params,
                    i = this.slides,
                    n = this.rtlTranslate;
                if (0 !== i.length) {
                    "undefined" == typeof i[0].swiperSlideOffset && this.updateSlidesOffset();
                    var r = -t;
                    n && (r = t), i.removeClass(e.slideVisibleClass);
                    for (var s = 0; s < i.length; s += 1) {
                        var o = i[s],
                            a = (r + (e.centeredSlides ? this.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + e.spaceBetween);
                        if (e.watchSlidesVisibility) {
                            var l = -(r - o.swiperSlideOffset),
                                c = l + this.slidesSizesGrid[s];
                            ((l >= 0 && l < this.size) || (c > 0 && c <= this.size) || (l <= 0 && c >= this.size)) && i.eq(s).addClass(e.slideVisibleClass);
                        }
                        o.progress = n ? -a : a;
                    }
                }
            },
            updateProgress: function () {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (this && this.translate) || 0,
                    e = this.params,
                    i = this.maxTranslate() - this.minTranslate(),
                    n = this.progress,
                    r = this.isBeginning,
                    s = this.isEnd,
                    o = r,
                    a = s;
                0 === i ? ((n = 0), (r = !0), (s = !0)) : ((r = (n = (t - this.minTranslate()) / i) <= 0), (s = n >= 1)),
                    d.extend(this, {progress: n, isBeginning: r, isEnd: s}),
                (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesProgress(t),
                r && !o && this.emit("reachBeginning toEdge"),
                s && !a && this.emit("reachEnd toEdge"),
                ((o && !r) || (a && !s)) && this.emit("fromEdge"),
                    this.emit("progress", n);
            },
            updateSlidesClasses: function () {
                var t = this.slides,
                    e = this.params,
                    i = this.$wrapperEl,
                    n = this.activeIndex,
                    r = this.realIndex,
                    s = this.virtual && e.virtual.enabled;
                t.removeClass(e.slideActiveClass + " " + e.slideNextClass + " " + e.slidePrevClass + " " + e.slideDuplicateActiveClass + " " + e.slideDuplicateNextClass + " " + e.slideDuplicatePrevClass);
                var o = void 0;
                (o = s ? this.$wrapperEl.find("." + e.slideClass + '[data-swiper-slide-index="' + n + '"]') : t.eq(n)).addClass(e.slideActiveClass),
                e.loop &&
                (o.hasClass(e.slideDuplicateClass)
                    ? i.children("." + e.slideClass + ":not(." + e.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(e.slideDuplicateActiveClass)
                    : i.children("." + e.slideClass + "." + e.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(e.slideDuplicateActiveClass));
                var a = o
                    .nextAll("." + e.slideClass)
                    .eq(0)
                    .addClass(e.slideNextClass);
                e.loop && 0 === a.length && (a = t.eq(0)).addClass(e.slideNextClass);
                var l = o
                    .prevAll("." + e.slideClass)
                    .eq(0)
                    .addClass(e.slidePrevClass);
                e.loop && 0 === l.length && (l = t.eq(-1)).addClass(e.slidePrevClass),
                e.loop &&
                (a.hasClass(e.slideDuplicateClass)
                    ? i.children("." + e.slideClass + ":not(." + e.slideDuplicateClass + ')[data-swiper-slide-index="' + a.attr("data-swiper-slide-index") + '"]').addClass(e.slideDuplicateNextClass)
                    : i.children("." + e.slideClass + "." + e.slideDuplicateClass + '[data-swiper-slide-index="' + a.attr("data-swiper-slide-index") + '"]').addClass(e.slideDuplicateNextClass),
                    l.hasClass(e.slideDuplicateClass)
                        ? i.children("." + e.slideClass + ":not(." + e.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(e.slideDuplicatePrevClass)
                        : i.children("." + e.slideClass + "." + e.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(e.slideDuplicatePrevClass));
            },
            updateActiveIndex: function (t) {
                var e = this.rtlTranslate ? this.translate : -this.translate,
                    i = this.slidesGrid,
                    n = this.snapGrid,
                    r = this.params,
                    s = this.activeIndex,
                    o = this.realIndex,
                    a = this.snapIndex,
                    l = t,
                    c = void 0;
                if (void 0 === l) {
                    for (var u = 0; u < i.length; u += 1) "undefined" != typeof i[u + 1] ? (e >= i[u] && e < i[u + 1] - (i[u + 1] - i[u]) / 2 ? (l = u) : e >= i[u] && e < i[u + 1] && (l = u + 1)) : e >= i[u] && (l = u);
                    r.normalizeSlideIndex && (l < 0 || void 0 === l) && (l = 0);
                }
                if (((c = n.indexOf(e) >= 0 ? n.indexOf(e) : Math.floor(l / r.slidesPerGroup)) >= n.length && (c = n.length - 1), l !== s)) {
                    var h = parseInt(this.slides.eq(l).attr("data-swiper-slide-index") || l, 10);
                    d.extend(this, {
                        snapIndex: c,
                        realIndex: h,
                        previousIndex: s,
                        activeIndex: l
                    }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), o !== h && this.emit("realIndexChange"), this.emit("slideChange");
                } else c !== a && ((this.snapIndex = c), this.emit("snapIndexChange"));
            },
            updateClickedSlide: function (t) {
                var e = this.params,
                    i = (0, s.$)(t.target).closest("." + e.slideClass)[0],
                    n = !1;
                if (i) for (var r = 0; r < this.slides.length; r += 1) this.slides[r] === i && (n = !0);
                if (!i || !n) return (this.clickedSlide = undefined), void (this.clickedIndex = undefined);
                (this.clickedSlide = i),
                    this.virtual && this.params.virtual.enabled ? (this.clickedIndex = parseInt((0, s.$)(i).attr("data-swiper-slide-index"), 10)) : (this.clickedIndex = (0, s.$)(i).index()),
                e.slideToClickedSlide && this.clickedIndex !== undefined && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide();
            },
        };
        var m = {
            getTranslate: function () {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.isHorizontal() ? "x" : "y",
                    e = this.params,
                    i = this.rtlTranslate,
                    n = this.translate,
                    r = this.$wrapperEl;
                if (e.virtualTranslate) return i ? -n : n;
                var s = d.getTranslate(r[0], t);
                return i && (s = -s), s || 0;
            },
            setTranslate: function (t, e) {
                var i = this.rtlTranslate,
                    n = this.params,
                    r = this.$wrapperEl,
                    s = this.progress,
                    o = 0,
                    a = 0;
                this.isHorizontal() ? (o = i ? -t : t) : (a = t),
                n.roundLengths && ((o = Math.floor(o)), (a = Math.floor(a))),
                n.virtualTranslate || (f.transforms3d ? r.transform("translate3d(" + o + "px, " + a + "px, 0px)") : r.transform("translate(" + o + "px, " + a + "px)")),
                    (this.translate = this.isHorizontal() ? o : a);
                var l = this.maxTranslate() - this.minTranslate();
                (0 === l ? 0 : (t - this.minTranslate()) / l) !== s && this.updateProgress(t), this.emit("setTranslate", this.translate, e);
            },
            minTranslate: function () {
                return -this.snapGrid[0];
            },
            maxTranslate: function () {
                return -this.snapGrid[this.snapGrid.length - 1];
            },
        };
        var g = {
            setTransition: function (t, e) {
                this.$wrapperEl.transition(t), this.emit("setTransition", t, e);
            },
            transitionStart: function () {
                var t = !(arguments.length > 0 && arguments[0] !== undefined) || arguments[0],
                    e = arguments[1],
                    i = this.activeIndex,
                    n = this.params,
                    r = this.previousIndex;
                n.autoHeight && this.updateAutoHeight();
                var s = e;
                if ((s || (s = i > r ? "next" : i < r ? "prev" : "reset"), this.emit("transitionStart"), t && i !== r)) {
                    if ("reset" === s) return void this.emit("slideResetTransitionStart");
                    this.emit("slideChangeTransitionStart"), "next" === s ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart");
                }
            },
            transitionEnd: function () {
                var t = !(arguments.length > 0 && arguments[0] !== undefined) || arguments[0],
                    e = arguments[1],
                    i = this.activeIndex,
                    n = this.previousIndex;
                (this.animating = !1), this.setTransition(0);
                var r = e;
                if ((r || (r = i > n ? "next" : i < n ? "prev" : "reset"), this.emit("transitionEnd"), t && i !== n)) {
                    if ("reset" === r) return void this.emit("slideResetTransitionEnd");
                    this.emit("slideChangeTransitionEnd"), "next" === r ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd");
                }
            },
        };
        var y = {
            slideTo: function () {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0,
                    e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.params.speed,
                    i = !(arguments.length > 2 && arguments[2] !== undefined) || arguments[2],
                    n = arguments[3],
                    r = this,
                    s = t;
                s < 0 && (s = 0);
                var o = r.params,
                    a = r.snapGrid,
                    l = r.slidesGrid,
                    c = r.previousIndex,
                    u = r.activeIndex,
                    h = r.rtlTranslate;
                if (r.animating && o.preventIntercationOnTransition) return !1;
                var d = Math.floor(s / o.slidesPerGroup);
                d >= a.length && (d = a.length - 1), (u || o.initialSlide || 0) === (c || 0) && i && r.emit("beforeSlideChangeStart");
                var p = -a[d];
                if ((r.updateProgress(p), o.normalizeSlideIndex)) for (var v = 0; v < l.length; v += 1) -Math.floor(100 * p) >= Math.floor(100 * l[v]) && (s = v);
                if (r.initialized && s !== u) {
                    if (!r.allowSlideNext && p < r.translate && p < r.minTranslate()) return !1;
                    if (!r.allowSlidePrev && p > r.translate && p > r.maxTranslate() && (u || 0) !== s) return !1;
                }
                var m = void 0;
                return (
                    (m = s > u ? "next" : s < u ? "prev" : "reset"),
                        (h && -p === r.translate) || (!h && p === r.translate)
                            ? (r.updateActiveIndex(s), o.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== o.effect && r.setTranslate(p), "reset" !== m && (r.transitionStart(i, m), r.transitionEnd(i, m)), !1)
                            : (0 !== e && f.transition
                            ? (r.setTransition(e),
                                r.setTranslate(p),
                                r.updateActiveIndex(s),
                                r.updateSlidesClasses(),
                                r.emit("beforeTransitionStart", e, n),
                                r.transitionStart(i, m),
                            r.animating ||
                            ((r.animating = !0),
                            r.onSlideToWrapperTransitionEnd ||
                            (r.onSlideToWrapperTransitionEnd = function (t) {
                                r &&
                                !r.destroyed &&
                                t.target === this &&
                                (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
                                    r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd),
                                    r.transitionEnd(i, m));
                            }),
                                r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
                                r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd)))
                            : (r.setTransition(0), r.setTranslate(p), r.updateActiveIndex(s), r.updateSlidesClasses(), r.emit("beforeTransitionStart", e, n), r.transitionStart(i, m), r.transitionEnd(i, m)),
                                !0)
                );
            },
            slideToLoop: function () {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0,
                    e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.params.speed,
                    i = !(arguments.length > 2 && arguments[2] !== undefined) || arguments[2],
                    n = arguments[3],
                    r = t;
                return this.params.loop && (r += this.loopedSlides), this.slideTo(r, e, i, n);
            },
            slideNext: function () {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed,
                    e = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1],
                    i = arguments[2],
                    n = this.params,
                    r = this.animating;
                return n.loop ? !r && (this.loopFix(), (this._clientLeft = this.$wrapperEl[0].clientLeft), this.slideTo(this.activeIndex + n.slidesPerGroup, t, e, i)) : this.slideTo(this.activeIndex + n.slidesPerGroup, t, e, i);
            },
            slidePrev: function () {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed,
                    e = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1],
                    i = arguments[2],
                    n = this.params,
                    r = this.animating,
                    s = this.snapGrid,
                    o = this.slidesGrid,
                    a = this.rtlTranslate;
                if (n.loop) {
                    if (r) return !1;
                    this.loopFix(), (this._clientLeft = this.$wrapperEl[0].clientLeft);
                }
                var l = a ? this.translate : -this.translate,
                    c = (s[s.indexOf(l)], s[s.indexOf(l) - 1]),
                    u = void 0;
                return c && (u = o.indexOf(c)) < 0 && (u = this.activeIndex - 1), this.slideTo(u, t, e, i);
            },
            slideReset: function () {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed,
                    e = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1],
                    i = arguments[2];
                return this.slideTo(this.activeIndex, t, e, i);
            },
            slideToClosest: function () {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed,
                    e = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1],
                    i = arguments[2],
                    n = this.activeIndex,
                    r = Math.floor(n / this.params.slidesPerGroup);
                if (r < this.snapGrid.length - 1) {
                    var s = this.rtlTranslate ? this.translate : -this.translate,
                        o = this.snapGrid[r];
                    s - o > (this.snapGrid[r + 1] - o) / 2 && (n = this.params.slidesPerGroup);
                }
                return this.slideTo(n, t, e, i);
            },
            slideToClickedSlide: function () {
                var t = this,
                    e = t.params,
                    i = t.$wrapperEl,
                    n = "auto" === e.slidesPerView ? t.slidesPerViewDynamic() : e.slidesPerView,
                    r = t.clickedIndex,
                    o = void 0;
                if (e.loop) {
                    if (t.animating) return;
                    (o = parseInt((0, s.$)(t.clickedSlide).attr("data-swiper-slide-index"), 10)),
                        e.centeredSlides
                            ? r < t.loopedSlides - n / 2 || r > t.slides.length - t.loopedSlides + n / 2
                            ? (t.loopFix(),
                                (r = i
                                    .children("." + e.slideClass + '[data-swiper-slide-index="' + o + '"]:not(.' + e.slideDuplicateClass + ")")
                                    .eq(0)
                                    .index()),
                                d.nextTick(function () {
                                    t.slideTo(r);
                                }))
                            : t.slideTo(r)
                            : r > t.slides.length - n
                            ? (t.loopFix(),
                                (r = i
                                    .children("." + e.slideClass + '[data-swiper-slide-index="' + o + '"]:not(.' + e.slideDuplicateClass + ")")
                                    .eq(0)
                                    .index()),
                                d.nextTick(function () {
                                    t.slideTo(r);
                                }))
                            : t.slideTo(r);
                } else t.slideTo(r);
            },
        };
        var w = {
            loopCreate: function () {
                var t = this,
                    e = t.params,
                    i = t.$wrapperEl;
                i.children("." + e.slideClass + "." + e.slideDuplicateClass).remove();
                var n = i.children("." + e.slideClass);
                if (e.loopFillGroupWithBlank) {
                    var r = e.slidesPerGroup - (n.length % e.slidesPerGroup);
                    if (r !== e.slidesPerGroup) {
                        for (var a = 0; a < r; a += 1) {
                            var l = (0, s.$)(o.document.createElement("div")).addClass(e.slideClass + " " + e.slideBlankClass);
                            i.append(l);
                        }
                        n = i.children("." + e.slideClass);
                    }
                }
                "auto" !== e.slidesPerView || e.loopedSlides || (e.loopedSlides = n.length),
                    (t.loopedSlides = parseInt(e.loopedSlides || e.slidesPerView, 10)),
                    (t.loopedSlides += e.loopAdditionalSlides),
                t.loopedSlides > n.length && (t.loopedSlides = n.length);
                var c = [],
                    u = [];
                n.each(function (e, i) {
                    var r = (0, s.$)(i);
                    e < t.loopedSlides && u.push(i), e < n.length && e >= n.length - t.loopedSlides && c.push(i), r.attr("data-swiper-slide-index", e);
                });
                for (var h = 0; h < u.length; h += 1) i.append((0, s.$)(u[h].cloneNode(!0)).addClass(e.slideDuplicateClass));
                for (var d = c.length - 1; d >= 0; d -= 1) i.prepend((0, s.$)(c[d].cloneNode(!0)).addClass(e.slideDuplicateClass));
            },
            loopFix: function () {
                var t = this.params,
                    e = this.activeIndex,
                    i = this.slides,
                    n = this.loopedSlides,
                    r = this.allowSlidePrev,
                    s = this.allowSlideNext,
                    o = this.snapGrid,
                    a = this.rtlTranslate,
                    l = void 0;
                (this.allowSlidePrev = !0), (this.allowSlideNext = !0);
                var c = -o[e] - this.getTranslate();
                e < n
                    ? ((l = i.length - 3 * n + e), (l += n), this.slideTo(l, 0, !1, !0) && 0 !== c && this.setTranslate((a ? -this.translate : this.translate) - c))
                    : (("auto" === t.slidesPerView && e >= 2 * n) || e > i.length - 2 * t.slidesPerView) &&
                    ((l = -i.length + e + n), (l += n), this.slideTo(l, 0, !1, !0) && 0 !== c && this.setTranslate((a ? -this.translate : this.translate) - c));
                (this.allowSlidePrev = r), (this.allowSlideNext = s);
            },
            loopDestroy: function () {
                var t = this.$wrapperEl,
                    e = this.params,
                    i = this.slides;
                t.children("." + e.slideClass + "." + e.slideDuplicateClass).remove(), i.removeAttr("data-swiper-slide-index");
            },
        };
        var b = {
            setGrabCursor: function (t) {
                if (!(f.touch || !this.params.simulateTouch || (this.params.watchOverflow && this.isLocked))) {
                    var e = this.el;
                    (e.style.cursor = "move"), (e.style.cursor = t ? "-webkit-grabbing" : "-webkit-grab"), (e.style.cursor = t ? "-moz-grabbin" : "-moz-grab"), (e.style.cursor = t ? "grabbing" : "grab");
                }
            },
            unsetGrabCursor: function () {
                f.touch || (this.params.watchOverflow && this.isLocked) || (this.el.style.cursor = "");
            },
        };
        var _ = {
                appendSlide: function (t) {
                    var e = this.$wrapperEl,
                        i = this.params;
                    if ((i.loop && this.loopDestroy(), "object" === (void 0 === t ? "undefined" : r(t)) && "length" in t)) for (var n = 0; n < t.length; n += 1) t[n] && e.append(t[n]);
                    else e.append(t);
                    i.loop && this.loopCreate(), (i.observer && f.observer) || this.update();
                },
                prependSlide: function (t) {
                    var e = this.params,
                        i = this.$wrapperEl,
                        n = this.activeIndex;
                    e.loop && this.loopDestroy();
                    var s = n + 1;
                    if ("object" === (void 0 === t ? "undefined" : r(t)) && "length" in t) {
                        for (var o = 0; o < t.length; o += 1) t[o] && i.prepend(t[o]);
                        s = n + t.length;
                    } else i.prepend(t);
                    e.loop && this.loopCreate(), (e.observer && f.observer) || this.update(), this.slideTo(s, 0, !1);
                },
                removeSlide: function (t) {
                    var e = this.params,
                        i = this.$wrapperEl,
                        n = this.activeIndex;
                    e.loop && (this.loopDestroy(), (this.slides = i.children("." + e.slideClass)));
                    var s = n,
                        o = void 0;
                    if ("object" === (void 0 === t ? "undefined" : r(t)) && "length" in t) {
                        for (var a = 0; a < t.length; a += 1) (o = t[a]), this.slides[o] && this.slides.eq(o).remove(), o < s && (s -= 1);
                        s = Math.max(s, 0);
                    } else (o = t), this.slides[o] && this.slides.eq(o).remove(), o < s && (s -= 1), (s = Math.max(s, 0));
                    e.loop && this.loopCreate(), (e.observer && f.observer) || this.update(), e.loop ? this.slideTo(s + this.loopedSlides, 0, !1) : this.slideTo(s, 0, !1);
                },
                removeAllSlides: function () {
                    for (var t = [], e = 0; e < this.slides.length; e += 1) t.push(e);
                    this.removeSlide(t);
                },
            },
            E = (function () {
                var t = o.window.navigator.userAgent,
                    e = {
                        ios: !1,
                        android: !1,
                        androidChrome: !1,
                        desktop: !1,
                        windows: !1,
                        iphone: !1,
                        ipod: !1,
                        ipad: !1,
                        cordova: o.window.cordova || o.window.phonegap,
                        phonegap: o.window.cordova || o.window.phonegap
                    },
                    i = t.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
                    n = t.match(/(Android);?[\s\/]+([\d.]+)?/),
                    r = t.match(/(iPad).*OS\s([\d_]+)/),
                    s = t.match(/(iPod)(.*OS\s([\d_]+))?/),
                    a = !r && t.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
                if (
                    (i && ((e.os = "windows"), (e.osVersion = i[2]), (e.windows = !0)),
                    n && !i && ((e.os = "android"), (e.osVersion = n[2]), (e.android = !0), (e.androidChrome = t.toLowerCase().indexOf("chrome") >= 0)),
                    (r || a || s) && ((e.os = "ios"), (e.ios = !0)),
                    a && !s && ((e.osVersion = a[2].replace(/_/g, ".")), (e.iphone = !0)),
                    r && ((e.osVersion = r[2].replace(/_/g, ".")), (e.ipad = !0)),
                    s && ((e.osVersion = s[3] ? s[3].replace(/_/g, ".") : null), (e.iphone = !0)),
                    e.ios && e.osVersion && t.indexOf("Version/") >= 0 && "10" === e.osVersion.split(".")[0] && (e.osVersion = t.toLowerCase().split("version/")[1].split(" ")[0]),
                        (e.desktop = !(e.os || e.android || e.webView)),
                        (e.webView = (a || r || s) && t.match(/.*AppleWebKit(?!.*Safari)/i)),
                    e.os && "ios" === e.os)
                ) {
                    var l = e.osVersion.split("."),
                        c = o.document.querySelector('meta[name="viewport"]');
                    e.minimalUi = !e.webView && (s || a) && (1 * l[0] == 7 ? 1 * l[1] >= 1 : 1 * l[0] > 7) && c && c.getAttribute("content").indexOf("minimal-ui") >= 0;
                }
                return (e.pixelRatio = o.window.devicePixelRatio || 1), e;
            })();

        function x() {
            var t = this.params,
                e = this.el;
            if (!e || 0 !== e.offsetWidth) {
                t.breakpoints && this.setBreakpoint();
                var i = this.allowSlideNext,
                    n = this.allowSlidePrev,
                    r = this.snapGrid;
                if (((this.allowSlideNext = !0), (this.allowSlidePrev = !0), this.updateSize(), this.updateSlides(), t.freeMode)) {
                    var s = Math.min(Math.max(this.translate, this.maxTranslate()), this.minTranslate());
                    this.setTranslate(s), this.updateActiveIndex(), this.updateSlidesClasses(), t.autoHeight && this.updateAutoHeight();
                } else
                    this.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0);
                (this.allowSlidePrev = n), (this.allowSlideNext = i), this.params.watchOverflow && r !== this.snapGrid && this.checkOverflow();
            }
        }

        var T = {
            attachEvents: function () {
                var t = this.params,
                    e = this.touchEvents,
                    i = this.el,
                    n = this.wrapperEl;
                (this.onTouchStart = function (t) {
                    var e = this.touchEventsData,
                        i = this.params,
                        n = this.touches;
                    if (!this.animating || !i.preventIntercationOnTransition) {
                        var r = t;
                        if ((r.originalEvent && (r = r.originalEvent), (e.isTouchEvent = "touchstart" === r.type), (e.isTouchEvent || !("which" in r) || 3 !== r.which) && (!e.isTouched || !e.isMoved)))
                            if (i.noSwiping && (0, s.$)(r.target).closest(i.noSwipingSelector ? i.noSwipingSelector : "." + i.noSwipingClass)[0]) this.allowClick = !0;
                            else if (!i.swipeHandler || (0, s.$)(r).closest(i.swipeHandler)[0]) {
                                (n.currentX = "touchstart" === r.type ? r.targetTouches[0].pageX : r.pageX), (n.currentY = "touchstart" === r.type ? r.targetTouches[0].pageY : r.pageY);
                                var a = n.currentX,
                                    l = n.currentY;
                                if (!(E.ios && !E.cordova && i.iOSEdgeSwipeDetection && a <= i.iOSEdgeSwipeThreshold && a >= o.window.screen.width - i.iOSEdgeSwipeThreshold)) {
                                    if (
                                        (d.extend(e, {
                                            isTouched: !0,
                                            isMoved: !1,
                                            allowTouchCallbacks: !0,
                                            isScrolling: undefined,
                                            startMoving: undefined
                                        }),
                                            (n.startX = a),
                                            (n.startY = l),
                                            (e.touchStartTime = d.now()),
                                            (this.allowClick = !0),
                                            this.updateSize(),
                                            (this.swipeDirection = undefined),
                                        i.threshold > 0 && (e.allowThresholdMove = !1),
                                        "touchstart" !== r.type)
                                    ) {
                                        var c = !0;
                                        (0, s.$)(r.target).is(e.formElements) && (c = !1),
                                        o.document.activeElement && (0, s.$)(o.document.activeElement).is(e.formElements) && o.document.activeElement !== r.target && o.document.activeElement.blur(),
                                        c && this.allowTouchMove && r.preventDefault();
                                    }
                                    this.emit("touchStart", r);
                                }
                            }
                    }
                }.bind(this)),
                    (this.onTouchMove = function (t) {
                        var e = this.touchEventsData,
                            i = this.params,
                            n = this.touches,
                            r = this.rtlTranslate,
                            a = t;
                        if ((a.originalEvent && (a = a.originalEvent), e.isTouched)) {
                            if (!e.isTouchEvent || "mousemove" !== a.type) {
                                var l = "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX,
                                    c = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY;
                                if (a.preventedByNestedSwiper) return (n.startX = l), void (n.startY = c);
                                if (!this.allowTouchMove) return (this.allowClick = !1), void (e.isTouched && (d.extend(n, {
                                    startX: l,
                                    startY: c,
                                    currentX: l,
                                    currentY: c
                                }), (e.touchStartTime = d.now())));
                                if (e.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
                                    if (this.isVertical()) {
                                        if ((c < n.startY && this.translate <= this.maxTranslate()) || (c > n.startY && this.translate >= this.minTranslate())) return (e.isTouched = !1), void (e.isMoved = !1);
                                    } else if ((l < n.startX && this.translate <= this.maxTranslate()) || (l > n.startX && this.translate >= this.minTranslate())) return;
                                if (e.isTouchEvent && o.document.activeElement && a.target === o.document.activeElement && (0, s.$)(a.target).is(e.formElements)) return (e.isMoved = !0), void (this.allowClick = !1);
                                if ((e.allowTouchCallbacks && this.emit("touchMove", a), !(a.targetTouches && a.targetTouches.length > 1))) {
                                    (n.currentX = l), (n.currentY = c);
                                    var u = n.currentX - n.startX,
                                        h = n.currentY - n.startY;
                                    if ("undefined" == typeof e.isScrolling) {
                                        var f = void 0;
                                        (this.isHorizontal() && n.currentY === n.startY) || (this.isVertical() && n.currentX === n.startX)
                                            ? (e.isScrolling = !1)
                                            : u * u + h * h >= 25 && ((f = (180 * Math.atan2(Math.abs(h), Math.abs(u))) / Math.PI), (e.isScrolling = this.isHorizontal() ? f > i.touchAngle : 90 - f > i.touchAngle));
                                    }
                                    if ((e.isScrolling && this.emit("touchMoveOpposite", a), "undefined" == typeof startMoving && ((n.currentX === n.startX && n.currentY === n.startY) || (e.startMoving = !0)), e.isScrolling))
                                        e.isTouched = !1;
                                    else if (e.startMoving) {
                                        (this.allowClick = !1),
                                            a.preventDefault(),
                                        i.touchMoveStopPropagation && !i.nested && a.stopPropagation(),
                                        e.isMoved ||
                                        (i.loop && this.loopFix(),
                                            (e.startTranslate = this.getTranslate()),
                                            this.setTransition(0),
                                        this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                                            (e.allowMomentumBounce = !1),
                                        !i.grabCursor || (!0 !== this.allowSlideNext && !0 !== this.allowSlidePrev) || this.setGrabCursor(!0),
                                            this.emit("sliderFirstMove", a)),
                                            this.emit("sliderMove", a),
                                            (e.isMoved = !0);
                                        var p = this.isHorizontal() ? u : h;
                                        (n.diff = p), (p *= i.touchRatio), r && (p = -p), (this.swipeDirection = p > 0 ? "prev" : "next"), (e.currentTranslate = p + e.startTranslate);
                                        var v = !0,
                                            m = i.resistanceRatio;
                                        if (
                                            (i.touchReleaseOnEdges && (m = 0),
                                                p > 0 && e.currentTranslate > this.minTranslate()
                                                    ? ((v = !1), i.resistance && (e.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + e.startTranslate + p, m)))
                                                    : p < 0 && e.currentTranslate < this.maxTranslate() && ((v = !1), i.resistance && (e.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - e.startTranslate - p, m))),
                                            v && (a.preventedByNestedSwiper = !0),
                                            !this.allowSlideNext && "next" === this.swipeDirection && e.currentTranslate < e.startTranslate && (e.currentTranslate = e.startTranslate),
                                            !this.allowSlidePrev && "prev" === this.swipeDirection && e.currentTranslate > e.startTranslate && (e.currentTranslate = e.startTranslate),
                                            i.threshold > 0)
                                        ) {
                                            if (!(Math.abs(p) > i.threshold || e.allowThresholdMove)) return void (e.currentTranslate = e.startTranslate);
                                            if (!e.allowThresholdMove)
                                                return (
                                                    (e.allowThresholdMove = !0),
                                                        (n.startX = n.currentX),
                                                        (n.startY = n.currentY),
                                                        (e.currentTranslate = e.startTranslate),
                                                        void (n.diff = this.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
                                                );
                                        }
                                        i.followFinger &&
                                        ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()),
                                        i.freeMode &&
                                        (0 === e.velocities.length && e.velocities.push({
                                            position: n[this.isHorizontal() ? "startX" : "startY"],
                                            time: e.touchStartTime
                                        }),
                                            e.velocities.push({
                                                position: n[this.isHorizontal() ? "currentX" : "currentY"],
                                                time: d.now()
                                            })),
                                            this.updateProgress(e.currentTranslate),
                                            this.setTranslate(e.currentTranslate));
                                    }
                                }
                            }
                        } else e.startMoving && e.isScrolling && this.emit("touchMoveOpposite", a);
                    }.bind(this)),
                    (this.onTouchEnd = function (t) {
                        var e = this,
                            i = e.touchEventsData,
                            n = e.params,
                            r = e.touches,
                            s = e.rtlTranslate,
                            o = e.$wrapperEl,
                            a = e.slidesGrid,
                            l = e.snapGrid,
                            c = t;
                        if ((c.originalEvent && (c = c.originalEvent), i.allowTouchCallbacks && e.emit("touchEnd", c), (i.allowTouchCallbacks = !1), !i.isTouched))
                            return i.isMoved && n.grabCursor && e.setGrabCursor(!1), (i.isMoved = !1), void (i.startMoving = !1);
                        n.grabCursor && i.isMoved && i.isTouched && (!0 === e.allowSlideNext || !0 === e.allowSlidePrev) && e.setGrabCursor(!1);
                        var u = d.now(),
                            h = u - i.touchStartTime;
                        if (
                            (e.allowClick &&
                            (e.updateClickedSlide(c),
                                e.emit("tap", c),
                            h < 300 &&
                            u - i.lastClickTime > 300 &&
                            (i.clickTimeout && clearTimeout(i.clickTimeout),
                                (i.clickTimeout = d.nextTick(function () {
                                    e && !e.destroyed && e.emit("click", c);
                                }, 300))),
                            h < 300 && u - i.lastClickTime < 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), e.emit("doubleTap", c))),
                                (i.lastClickTime = d.now()),
                                d.nextTick(function () {
                                    e.destroyed || (e.allowClick = !0);
                                }),
                            !i.isTouched || !i.isMoved || !e.swipeDirection || 0 === r.diff || i.currentTranslate === i.startTranslate)
                        )
                            return (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1);
                        (i.isTouched = !1), (i.isMoved = !1), (i.startMoving = !1);
                        var f = void 0;
                        if (((f = n.followFinger ? (s ? e.translate : -e.translate) : -i.currentTranslate), n.freeMode)) {
                            if (f < -e.minTranslate()) return void e.slideTo(e.activeIndex);
                            if (f > -e.maxTranslate()) return void (e.slides.length < l.length ? e.slideTo(l.length - 1) : e.slideTo(e.slides.length - 1));
                            if (n.freeModeMomentum) {
                                if (i.velocities.length > 1) {
                                    var p = i.velocities.pop(),
                                        v = i.velocities.pop(),
                                        m = p.position - v.position,
                                        g = p.time - v.time;
                                    (e.velocity = m / g), (e.velocity /= 2), Math.abs(e.velocity) < n.freeModeMinimumVelocity && (e.velocity = 0), (g > 150 || d.now() - p.time > 300) && (e.velocity = 0);
                                } else e.velocity = 0;
                                (e.velocity *= n.freeModeMomentumVelocityRatio), (i.velocities.length = 0);
                                var y = 1e3 * n.freeModeMomentumRatio,
                                    w = e.velocity * y,
                                    b = e.translate + w;
                                s && (b = -b);
                                var _ = !1,
                                    E = void 0,
                                    x = 20 * Math.abs(e.velocity) * n.freeModeMomentumBounceRatio,
                                    T = void 0;
                                if (b < e.maxTranslate())
                                    n.freeModeMomentumBounce ? (b + e.maxTranslate() < -x && (b = e.maxTranslate() - x), (E = e.maxTranslate()), (_ = !0), (i.allowMomentumBounce = !0)) : (b = e.maxTranslate()),
                                    n.loop && n.centeredSlides && (T = !0);
                                else if (b > e.minTranslate())
                                    n.freeModeMomentumBounce ? (b - e.minTranslate() > x && (b = e.minTranslate() + x), (E = e.minTranslate()), (_ = !0), (i.allowMomentumBounce = !0)) : (b = e.minTranslate()),
                                    n.loop && n.centeredSlides && (T = !0);
                                else if (n.freeModeSticky) {
                                    for (var S = void 0, C = 0; C < l.length; C += 1)
                                        if (l[C] > -b) {
                                            S = C;
                                            break;
                                        }
                                    b = -(b = Math.abs(l[S] - b) < Math.abs(l[S - 1] - b) || "next" === e.swipeDirection ? l[S] : l[S - 1]);
                                }
                                if (
                                    (T &&
                                    e.once("transitionEnd", function () {
                                        e.loopFix();
                                    }),
                                    0 !== e.velocity)
                                )
                                    y = s ? Math.abs((-b - e.translate) / e.velocity) : Math.abs((b - e.translate) / e.velocity);
                                else if (n.freeModeSticky) return void e.slideToClosest();
                                n.freeModeMomentumBounce && _
                                    ? (e.updateProgress(E),
                                        e.setTransition(y),
                                        e.setTranslate(b),
                                        e.transitionStart(!0, e.swipeDirection),
                                        (e.animating = !0),
                                        o.transitionEnd(function () {
                                            e &&
                                            !e.destroyed &&
                                            i.allowMomentumBounce &&
                                            (e.emit("momentumBounce"),
                                                e.setTransition(n.speed),
                                                e.setTranslate(E),
                                                o.transitionEnd(function () {
                                                    e && !e.destroyed && e.transitionEnd();
                                                }));
                                        }))
                                    : e.velocity
                                    ? (e.updateProgress(b),
                                        e.setTransition(y),
                                        e.setTranslate(b),
                                        e.transitionStart(!0, e.swipeDirection),
                                    e.animating ||
                                    ((e.animating = !0),
                                        o.transitionEnd(function () {
                                            e && !e.destroyed && e.transitionEnd();
                                        })))
                                    : e.updateProgress(b),
                                    e.updateActiveIndex(),
                                    e.updateSlidesClasses();
                            } else if (n.freeModeSticky) return void e.slideToClosest();
                            (!n.freeModeMomentum || h >= n.longSwipesMs) && (e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses());
                        } else {
                            for (var M = 0, k = e.slidesSizesGrid[0], L = 0; L < a.length; L += n.slidesPerGroup)
                                "undefined" != typeof a[L + n.slidesPerGroup] ? f >= a[L] && f < a[L + n.slidesPerGroup] && ((M = L), (k = a[L + n.slidesPerGroup] - a[L])) : f >= a[L] && ((M = L), (k = a[a.length - 1] - a[a.length - 2]));
                            var A = (f - a[M]) / k;
                            if (h > n.longSwipesMs) {
                                if (!n.longSwipes) return void e.slideTo(e.activeIndex);
                                "next" === e.swipeDirection && (A >= n.longSwipesRatio ? e.slideTo(M + n.slidesPerGroup) : e.slideTo(M)),
                                "prev" === e.swipeDirection && (A > 1 - n.longSwipesRatio ? e.slideTo(M + n.slidesPerGroup) : e.slideTo(M));
                            } else {
                                if (!n.shortSwipes) return void e.slideTo(e.activeIndex);
                                "next" === e.swipeDirection && e.slideTo(M + n.slidesPerGroup), "prev" === e.swipeDirection && e.slideTo(M);
                            }
                        }
                    }.bind(this)),
                    (this.onClick = function (t) {
                        this.allowClick || (this.params.preventClicks && t.preventDefault(), this.params.preventClicksPropagation && this.animating && (t.stopPropagation(), t.stopImmediatePropagation()));
                    }.bind(this));
                var r = "container" === t.touchEventsTarget ? i : n,
                    a = !!t.nested;
                if (f.touch || (!f.pointerEvents && !f.prefixedPointerEvents)) {
                    if (f.touch) {
                        var l = !("touchstart" !== e.start || !f.passiveListener || !t.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        r.addEventListener(e.start, this.onTouchStart, l), r.addEventListener(e.move, this.onTouchMove, f.passiveListener ? {
                            passive: !1,
                            capture: a
                        } : a), r.addEventListener(e.end, this.onTouchEnd, l);
                    }
                    ((t.simulateTouch && !E.ios && !E.android) || (t.simulateTouch && !f.touch && E.ios)) &&
                    (r.addEventListener("mousedown", this.onTouchStart, !1), o.document.addEventListener("mousemove", this.onTouchMove, a), o.document.addEventListener("mouseup", this.onTouchEnd, !1));
                } else r.addEventListener(e.start, this.onTouchStart, !1), o.document.addEventListener(e.move, this.onTouchMove, a), o.document.addEventListener(e.end, this.onTouchEnd, !1);
                (t.preventClicks || t.preventClicksPropagation) && r.addEventListener("click", this.onClick, !0), this.on("resize observerUpdate", x, !0);
            },
            detachEvents: function () {
                var t = this.params,
                    e = this.touchEvents,
                    i = this.el,
                    n = this.wrapperEl,
                    r = "container" === t.touchEventsTarget ? i : n,
                    s = !!t.nested;
                if (f.touch || (!f.pointerEvents && !f.prefixedPointerEvents)) {
                    if (f.touch) {
                        var a = !("onTouchStart" !== e.start || !f.passiveListener || !t.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        r.removeEventListener(e.start, this.onTouchStart, a), r.removeEventListener(e.move, this.onTouchMove, s), r.removeEventListener(e.end, this.onTouchEnd, a);
                    }
                    ((t.simulateTouch && !E.ios && !E.android) || (t.simulateTouch && !f.touch && E.ios)) &&
                    (r.removeEventListener("mousedown", this.onTouchStart, !1), o.document.removeEventListener("mousemove", this.onTouchMove, s), o.document.removeEventListener("mouseup", this.onTouchEnd, !1));
                } else r.removeEventListener(e.start, this.onTouchStart, !1), o.document.removeEventListener(e.move, this.onTouchMove, s), o.document.removeEventListener(e.end, this.onTouchEnd, !1);
                (t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", this.onClick, !0), this.off("resize observerUpdate", x);
            },
        };
        var S = {
                setBreakpoint: function () {
                    var t = this.activeIndex,
                        e = this.initialized,
                        i = this.loopedSlides,
                        n = i === undefined ? 0 : i,
                        r = this.params,
                        s = r.breakpoints;
                    if (s && (!s || 0 !== Object.keys(s).length)) {
                        var o = this.getBreakpoint(s);
                        if (o && this.currentBreakpoint !== o) {
                            var a = o in s ? s[o] : this.originalParams,
                                l = r.loop && a.slidesPerView !== r.slidesPerView;
                            d.extend(this.params, a),
                                d.extend(this, {
                                    allowTouchMove: this.params.allowTouchMove,
                                    allowSlideNext: this.params.allowSlideNext,
                                    allowSlidePrev: this.params.allowSlidePrev
                                }),
                                (this.currentBreakpoint = o),
                            l && e && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(t - n + this.loopedSlides, 0, !1)),
                                this.emit("breakpoint", a);
                        }
                    }
                },
                getBreakpoint: function (t) {
                    if (!t) return undefined;
                    var e = !1,
                        i = [];
                    Object.keys(t).forEach(function (t) {
                        i.push(t);
                    }),
                        i.sort(function (t, e) {
                            return parseInt(t, 10) - parseInt(e, 10);
                        });
                    for (var n = 0; n < i.length; n += 1) {
                        var r = i[n];
                        r >= o.window.innerWidth && !e && (e = r);
                    }
                    return e || "max";
                },
            },
            C = (function () {
                return {
                    isIE: !!o.window.navigator.userAgent.match(/Trident/g) || !!o.window.navigator.userAgent.match(/MSIE/g),
                    isSafari: ((t = o.window.navigator.userAgent.toLowerCase()), t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0),
                    isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(o.window.navigator.userAgent),
                };
                var t;
            })();
        var M = {
                init: !0,
                direction: "horizontal",
                touchEventsTarget: "container",
                initialSlide: 0,
                speed: 300,
                preventIntercationOnTransition: !1,
                iOSEdgeSwipeDetection: !1,
                iOSEdgeSwipeThreshold: 20,
                freeMode: !1,
                freeModeMomentum: !0,
                freeModeMomentumRatio: 1,
                freeModeMomentumBounce: !0,
                freeModeMomentumBounceRatio: 1,
                freeModeMomentumVelocityRatio: 1,
                freeModeSticky: !1,
                freeModeMinimumVelocity: 0.02,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: undefined,
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerColumnFill: "column",
                slidesPerGroup: 1,
                centeredSlides: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                watchOverflow: !1,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: 0.5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 0,
                touchMoveStopPropagation: !0,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: 0.85,
                watchSlidesProgress: !1,
                watchSlidesVisibility: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                loopFillGroupWithBlank: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                containerModifierClass: "swiper-container-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-invisible-blank",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                runCallbacksOnInit: !0,
            },
            k = {
                update: v,
                translate: m,
                transition: g,
                slide: y,
                loop: w,
                grabCursor: b,
                manipulation: _,
                events: T,
                breakpoints: S,
                checkOverflow: {
                    checkOverflow: function () {
                        var t = this.isLocked;
                        (this.isLocked = 1 === this.snapGrid.length),
                            (this.allowSlideNext = !this.isLocked),
                            (this.allowSlidePrev = !this.isLocked),
                        t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"),
                        t && t !== this.isLocked && ((this.isEnd = !1), this.navigation.update());
                    },
                },
                classes: {
                    addClasses: function () {
                        var t = this.classNames,
                            e = this.params,
                            i = this.rtl,
                            n = this.$el,
                            r = [];
                        r.push(e.direction),
                        e.freeMode && r.push("free-mode"),
                        f.flexbox || r.push("no-flexbox"),
                        e.autoHeight && r.push("autoheight"),
                        i && r.push("rtl"),
                        e.slidesPerColumn > 1 && r.push("multirow"),
                        E.android && r.push("android"),
                        E.ios && r.push("ios"),
                        C.isIE && (f.pointerEvents || f.prefixedPointerEvents) && r.push("wp8-" + e.direction),
                            r.forEach(function (i) {
                                t.push(e.containerModifierClass + i);
                            }),
                            n.addClass(t.join(" "));
                    },
                    removeClasses: function () {
                        var t = this.$el,
                            e = this.classNames;
                        t.removeClass(e.join(" "));
                    },
                },
                images: {
                    loadImage: function (t, e, i, n, r, s) {
                        var a = void 0;

                        function l() {
                            s && s();
                        }

                        t.complete && r ? l() : e ? (((a = new o.window.Image()).onload = l), (a.onerror = l), n && (a.sizes = n), i && (a.srcset = i), e && (a.src = e)) : l();
                    },
                    preloadImages: function () {
                        var t = this;

                        function e() {
                            void 0 !== t &&
                            null !== t &&
                            t &&
                            !t.destroyed &&
                            (t.imagesLoaded !== undefined && (t.imagesLoaded += 1), t.imagesLoaded === t.imagesToLoad.length && (t.params.updateOnImagesReady && t.update(), t.emit("imagesReady")));
                        }

                        t.imagesToLoad = t.$el.find("img");
                        for (var i = 0; i < t.imagesToLoad.length; i += 1) {
                            var n = t.imagesToLoad[i];
                            t.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, e);
                        }
                    },
                },
            },
            L = {},
            A = (function (t) {
                function e() {
                    l(this, e);
                    for (var t = void 0, i = void 0, n = arguments.length, o = Array(n), c = 0; c < n; c++) o[c] = arguments[c];
                    1 === o.length && o[0].constructor && o[0].constructor === Object ? (i = o[0]) : ((t = o[0]), (i = o[1])), i || (i = {}), (i = d.extend({}, i)), t && !i.el && (i.el = t);
                    var u = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, i));
                    Object.keys(k).forEach(function (t) {
                        Object.keys(k[t]).forEach(function (i) {
                            e.prototype[i] || (e.prototype[i] = k[t][i]);
                        });
                    });
                    var h = u;
                    "undefined" == typeof h.modules && (h.modules = {}),
                        Object.keys(h.modules).forEach(function (t) {
                            var e = h.modules[t];
                            if (e.params) {
                                var n = Object.keys(e.params)[0],
                                    s = e.params[n];
                                if ("object" !== (void 0 === s ? "undefined" : r(s))) return;
                                if (!(n in i && "enabled" in s)) return;
                                !0 === i[n] && (i[n] = {enabled: !0}), "object" !== r(i[n]) || "enabled" in i[n] || (i[n].enabled = !0), i[n] || (i[n] = {enabled: !1});
                            }
                        });
                    var p = d.extend({}, M);
                    h.useModulesParams(p), (h.params = d.extend({}, p, L, i)), (h.originalParams = d.extend({}, h.params)), (h.passedParams = d.extend({}, i)), (h.$ = s.$);
                    var v = (0, s.$)(h.params.el);
                    if (!(t = v[0])) return a(u, undefined);
                    if (v.length > 1) {
                        var m = [];
                        return (
                            v.each(function (t, n) {
                                var r = d.extend({}, i, {el: n});
                                m.push(new e(r));
                            }),
                                a(u, m)
                        );
                    }
                    (t.swiper = h), v.data("swiper", h);
                    var g,
                        y,
                        w = v.children("." + h.params.wrapperClass);
                    return (
                        d.extend(h, {
                            $el: v,
                            el: t,
                            $wrapperEl: w,
                            wrapperEl: w[0],
                            classNames: [],
                            slides: (0, s.$)(),
                            slidesGrid: [],
                            snapGrid: [],
                            slidesSizesGrid: [],
                            isHorizontal: function () {
                                return "horizontal" === h.params.direction;
                            },
                            isVertical: function () {
                                return "vertical" === h.params.direction;
                            },
                            rtl: "rtl" === t.dir.toLowerCase() || "rtl" === v.css("direction"),
                            rtlTranslate: "horizontal" === h.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === v.css("direction")),
                            wrongRTL: "-webkit-box" === w.css("display"),
                            activeIndex: 0,
                            realIndex: 0,
                            isBeginning: !0,
                            isEnd: !1,
                            translate: 0,
                            progress: 0,
                            velocity: 0,
                            animating: !1,
                            allowSlideNext: h.params.allowSlideNext,
                            allowSlidePrev: h.params.allowSlidePrev,
                            touchEvents:
                                ((g = ["touchstart", "touchmove", "touchend"]),
                                    (y = ["mousedown", "mousemove", "mouseup"]),
                                    f.pointerEvents ? (y = ["pointerdown", "pointermove", "pointerup"]) : f.prefixedPointerEvents && (y = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]),
                                    (h.touchEventsTouch = {start: g[0], move: g[1], end: g[2]}),
                                    (h.touchEventsDesktop = {start: y[0], move: y[1], end: y[2]}),
                                    f.touch || !h.params.simulateTouch ? h.touchEventsTouch : h.touchEventsDesktop),
                            touchEventsData: {
                                isTouched: undefined,
                                isMoved: undefined,
                                allowTouchCallbacks: undefined,
                                touchStartTime: undefined,
                                isScrolling: undefined,
                                currentTranslate: undefined,
                                startTranslate: undefined,
                                allowThresholdMove: undefined,
                                formElements: "input, select, option, textarea, button, video",
                                lastClickTime: d.now(),
                                clickTimeout: undefined,
                                velocities: [],
                                allowMomentumBounce: undefined,
                                isTouchEvent: undefined,
                                startMoving: undefined,
                            },
                            allowClick: !0,
                            allowTouchMove: h.params.allowTouchMove,
                            touches: {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0},
                            imagesToLoad: [],
                            imagesLoaded: 0,
                        }),
                            h.useModules(),
                        h.params.init && h.init(),
                            a(u, h)
                    );
                }

                return (
                    (function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        (t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
                    })(e, p),
                        n(
                            e,
                            [
                                {
                                    key: "slidesPerViewDynamic",
                                    value: function () {
                                        var t = this.params,
                                            e = this.slides,
                                            i = this.slidesGrid,
                                            n = this.size,
                                            r = this.activeIndex,
                                            s = 1;
                                        if (t.centeredSlides) {
                                            for (var o = e[r].swiperSlideSize, a = void 0, l = r + 1; l < e.length; l += 1) e[l] && !a && ((s += 1), (o += e[l].swiperSlideSize) > n && (a = !0));
                                            for (var c = r - 1; c >= 0; c -= 1) e[c] && !a && ((s += 1), (o += e[c].swiperSlideSize) > n && (a = !0));
                                        } else for (var u = r + 1; u < e.length; u += 1) i[u] - i[r] < n && (s += 1);
                                        return s;
                                    },
                                },
                                {
                                    key: "update",
                                    value: function () {
                                        var t = this;
                                        if (t && !t.destroyed) {
                                            var e = t.snapGrid,
                                                i = t.params;
                                            i.breakpoints && t.setBreakpoint(), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses();
                                            t.params.freeMode
                                                ? (n(), t.params.autoHeight && t.updateAutoHeight())
                                                : (("auto" === t.params.slidesPerView || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0)) ||
                                                n(),
                                            i.watchOverflow && e !== t.snapGrid && t.checkOverflow(),
                                                t.emit("update");
                                        }

                                        function n() {
                                            var e = t.rtlTranslate ? -1 * t.translate : t.translate,
                                                i = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
                                            t.setTranslate(i), t.updateActiveIndex(), t.updateSlidesClasses();
                                        }
                                    },
                                },
                                {
                                    key: "init",
                                    value: function () {
                                        this.initialized ||
                                        (this.emit("beforeInit"),
                                        this.params.breakpoints && this.setBreakpoint(),
                                            this.addClasses(),
                                        this.params.loop && this.loopCreate(),
                                            this.updateSize(),
                                            this.updateSlides(),
                                        this.params.watchOverflow && this.checkOverflow(),
                                        this.params.grabCursor && this.setGrabCursor(),
                                        this.params.preloadImages && this.preloadImages(),
                                            this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit),
                                            this.attachEvents(),
                                            (this.initialized = !0),
                                            this.emit("init"));
                                    },
                                },
                                {
                                    key: "destroy",
                                    value: function () {
                                        var t = !(arguments.length > 0 && arguments[0] !== undefined) || arguments[0],
                                            e = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1],
                                            i = this,
                                            n = i.params,
                                            r = i.$el,
                                            s = i.$wrapperEl,
                                            o = i.slides;
                                        return "undefined" == typeof i.params || i.destroyed
                                            ? null
                                            : (i.emit("beforeDestroy"),
                                                (i.initialized = !1),
                                                i.detachEvents(),
                                            n.loop && i.loopDestroy(),
                                            e &&
                                            (i.removeClasses(),
                                                r.removeAttr("style"),
                                                s.removeAttr("style"),
                                            o &&
                                            o.length &&
                                            o
                                                .removeClass([n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass].join(" "))
                                                .removeAttr("style")
                                                .removeAttr("data-swiper-slide-index")
                                                .removeAttr("data-swiper-column")
                                                .removeAttr("data-swiper-row")),
                                                i.emit("destroy"),
                                                Object.keys(i.eventsListeners).forEach(function (t) {
                                                    i.off(t);
                                                }),
                                            !1 !== t && ((i.$el[0].swiper = null), i.$el.data("swiper", null), d.deleteProps(i)),
                                                (i.destroyed = !0),
                                                null);
                                    },
                                },
                            ],
                            [
                                {
                                    key: "extendDefaults",
                                    value: function (t) {
                                        d.extend(L, t);
                                    },
                                },
                                {
                                    key: "extendedDefaults",
                                    get: function () {
                                        return L;
                                    },
                                },
                                {
                                    key: "defaults",
                                    get: function () {
                                        return M;
                                    },
                                },
                                {
                                    key: "Class",
                                    get: function () {
                                        return p;
                                    },
                                },
                                {
                                    key: "$",
                                    get: function () {
                                        return s.$;
                                    },
                                },
                            ]
                        ),
                        e
                );
            })(),
            P = {name: "device", proto: {device: E}, static: {device: E}},
            z = {name: "support", proto: {support: f}, static: {support: f}},
            I = {name: "browser", proto: {browser: C}, static: {browser: C}},
            O = {
                name: "resize",
                create: function () {
                    var t = this;
                    d.extend(t, {
                        resize: {
                            resizeHandler: function () {
                                t && !t.destroyed && t.initialized && (t.emit("beforeResize"), t.emit("resize"));
                            },
                            orientationChangeHandler: function () {
                                t && !t.destroyed && t.initialized && t.emit("orientationchange");
                            },
                        },
                    });
                },
                on: {
                    init: function () {
                        o.window.addEventListener("resize", this.resize.resizeHandler), o.window.addEventListener("orientationchange", this.resize.orientationChangeHandler);
                    },
                    destroy: function () {
                        o.window.removeEventListener("resize", this.resize.resizeHandler), o.window.removeEventListener("orientationchange", this.resize.orientationChangeHandler);
                    },
                },
            },
            D = {
                func: o.window.MutationObserver || o.window.WebkitMutationObserver,
                attach: function (t) {
                    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                        i = this,
                        n = new (0, D.func)(function (t) {
                            t.forEach(function (t) {
                                i.emit("observerUpdate", t);
                            });
                        });
                    n.observe(t, {
                        attributes: "undefined" == typeof e.attributes || e.attributes,
                        childList: "undefined" == typeof e.childList || e.childList,
                        characterData: "undefined" == typeof e.characterData || e.characterData
                    }),
                        i.observer.observers.push(n);
                },
                init: function () {
                    if (f.observer && this.params.observer) {
                        if (this.params.observeParents) for (var t = this.$el.parents(), e = 0; e < t.length; e += 1) this.observer.attach(t[e]);
                        this.observer.attach(this.$el[0], {childList: !1}), this.observer.attach(this.$wrapperEl[0], {attributes: !1});
                    }
                },
                destroy: function () {
                    this.observer.observers.forEach(function (t) {
                        t.disconnect();
                    }),
                        (this.observer.observers = []);
                },
            },
            $ = {
                name: "observer",
                params: {observer: !1, observeParents: !1},
                create: function () {
                    d.extend(this, {
                        observer: {
                            init: D.init.bind(this),
                            attach: D.attach.bind(this),
                            destroy: D.destroy.bind(this),
                            observers: []
                        }
                    });
                },
                on: {
                    init: function () {
                        this.observer.init();
                    },
                    destroy: function () {
                        this.observer.destroy();
                    },
                },
            },
            N = {
                update: function (t) {
                    var e = this,
                        i = e.params,
                        n = i.slidesPerView,
                        r = i.slidesPerGroup,
                        s = i.centeredSlides,
                        o = e.virtual,
                        a = o.from,
                        l = o.to,
                        c = o.slides,
                        u = o.slidesGrid,
                        h = o.renderSlide,
                        f = o.offset;
                    e.updateActiveIndex();
                    var p = e.activeIndex || 0,
                        v = void 0;
                    v = e.rtlTranslate ? "right" : e.isHorizontal() ? "left" : "top";
                    var m = void 0,
                        g = void 0;
                    s ? ((m = Math.floor(n / 2) + r), (g = Math.floor(n / 2) + r)) : ((m = n + (r - 1)), (g = r));
                    var y = Math.max((p || 0) - g, 0),
                        w = Math.min((p || 0) + m, c.length - 1),
                        b = (e.slidesGrid[y] || 0) - (e.slidesGrid[0] || 0);

                    function _() {
                        e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.lazy && e.params.lazy.enabled && e.lazy.load();
                    }

                    if ((d.extend(e.virtual, {
                            from: y,
                            to: w,
                            offset: b,
                            slidesGrid: e.slidesGrid
                        }), a === y && l === w && !t)) return e.slidesGrid !== u && b !== f && e.slides.css(v, b + "px"), void e.updateProgress();
                    if (e.params.virtual.renderExternal)
                        return (
                            e.params.virtual.renderExternal.call(e, {
                                offset: b,
                                from: y,
                                to: w,
                                slides: (function () {
                                    for (var t = [], e = y; e <= w; e += 1) t.push(c[e]);
                                    return t;
                                })(),
                            }),
                                void _()
                        );
                    var E = [],
                        x = [];
                    if (t) e.$wrapperEl.find("." + e.params.slideClass).remove();
                    else for (var T = a; T <= l; T += 1) (T < y || T > w) && e.$wrapperEl.find("." + e.params.slideClass + '[data-swiper-slide-index="' + T + '"]').remove();
                    for (var S = 0; S < c.length; S += 1) S >= y && S <= w && (void 0 === l || t ? x.push(S) : (S > l && x.push(S), S < a && E.push(S)));
                    x.forEach(function (t) {
                        e.$wrapperEl.append(h(c[t], t));
                    }),
                        E.sort(function (t, e) {
                            return t < e;
                        }).forEach(function (t) {
                            e.$wrapperEl.prepend(h(c[t], t));
                        }),
                        e.$wrapperEl.children(".swiper-slide").css(v, b + "px"),
                        _();
                },
                renderSlide: function (t, e) {
                    var i = this.params.virtual;
                    if (i.cache && this.virtual.cache[e]) return this.virtual.cache[e];
                    var n = i.renderSlide ? (0, s.$)(i.renderSlide.call(this, t, e)) : (0, s.$)('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + e + '">' + t + "</div>");
                    return n.attr("data-swiper-slide-index") || n.attr("data-swiper-slide-index", e), i.cache && (this.virtual.cache[e] = n), n;
                },
                appendSlide: function (t) {
                    this.virtual.slides.push(t), this.virtual.update(!0);
                },
                prependSlide: function (t) {
                    if ((this.virtual.slides.unshift(t), this.params.virtual.cache)) {
                        var e = this.virtual.cache,
                            i = {};
                        Object.keys(e).forEach(function (t) {
                            i[t + 1] = e[t];
                        }),
                            (this.virtual.cache = i);
                    }
                    this.virtual.update(!0), this.slideNext(0);
                },
            },
            F = {
                name: "virtual",
                params: {virtual: {enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null}},
                create: function () {
                    d.extend(this, {
                        virtual: {
                            update: N.update.bind(this),
                            appendSlide: N.appendSlide.bind(this),
                            prependSlide: N.prependSlide.bind(this),
                            renderSlide: N.renderSlide.bind(this),
                            slides: this.params.virtual.slides,
                            cache: {}
                        },
                    });
                },
                on: {
                    beforeInit: function () {
                        if (this.params.virtual.enabled) {
                            this.classNames.push(this.params.containerModifierClass + "virtual");
                            var t = {watchSlidesProgress: !0};
                            d.extend(this.params, t), d.extend(this.originalParams, t), this.virtual.update();
                        }
                    },
                    setTranslate: function () {
                        this.params.virtual.enabled && this.virtual.update();
                    },
                },
            },
            j = {
                handle: function (t) {
                    var e = this.rtlTranslate,
                        i = t;
                    i.originalEvent && (i = i.originalEvent);
                    var n = i.keyCode || i.charCode;
                    if (!this.allowSlideNext && ((this.isHorizontal() && 39 === n) || (this.isVertical() && 40 === n))) return !1;
                    if (!this.allowSlidePrev && ((this.isHorizontal() && 37 === n) || (this.isVertical() && 38 === n))) return !1;
                    if (i.shiftKey || i.altKey || i.ctrlKey || i.metaKey) return undefined;
                    if (o.document.activeElement && o.document.activeElement.nodeName && ("input" === o.document.activeElement.nodeName.toLowerCase() || "textarea" === o.document.activeElement.nodeName.toLowerCase())) return undefined;
                    if (this.params.keyboard.onlyInViewport && (37 === n || 39 === n || 38 === n || 40 === n)) {
                        var r = !1;
                        if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return undefined;
                        var s = o.window.innerWidth,
                            a = o.window.innerHeight,
                            l = this.$el.offset();
                        e && (l.left -= this.$el[0].scrollLeft);
                        for (
                            var c = [
                                    [l.left, l.top],
                                    [l.left + this.width, l.top],
                                    [l.left, l.top + this.height],
                                    [l.left + this.width, l.top + this.height],
                                ],
                                u = 0;
                            u < c.length;
                            u += 1
                        ) {
                            var h = c[u];
                            h[0] >= 0 && h[0] <= s && h[1] >= 0 && h[1] <= a && (r = !0);
                        }
                        if (!r) return undefined;
                    }
                    return (
                        this.isHorizontal()
                            ? ((37 !== n && 39 !== n) || (i.preventDefault ? i.preventDefault() : (i.returnValue = !1)), ((39 === n && !e) || (37 === n && e)) && this.slideNext(), ((37 === n && !e) || (39 === n && e)) && this.slidePrev())
                            : ((38 !== n && 40 !== n) || (i.preventDefault ? i.preventDefault() : (i.returnValue = !1)), 40 === n && this.slideNext(), 38 === n && this.slidePrev()),
                            this.emit("keyPress", n),
                            undefined
                    );
                },
                enable: function () {
                    this.keyboard.enabled || ((0, s.$)(o.document).on("keydown", this.keyboard.handle), (this.keyboard.enabled = !0));
                },
                disable: function () {
                    this.keyboard.enabled && ((0, s.$)(o.document).off("keydown", this.keyboard.handle), (this.keyboard.enabled = !1));
                },
            },
            B = {
                name: "keyboard",
                params: {keyboard: {enabled: !1, onlyInViewport: !0}},
                create: function () {
                    d.extend(this, {
                        keyboard: {
                            enabled: !1,
                            enable: j.enable.bind(this),
                            disable: j.disable.bind(this),
                            handle: j.handle.bind(this)
                        }
                    });
                },
                on: {
                    init: function () {
                        this.params.keyboard.enabled && this.keyboard.enable();
                    },
                    destroy: function () {
                        this.keyboard.enabled && this.keyboard.disable();
                    },
                },
            };
        var W = {
                lastScrollTime: d.now(),
                event:
                    o.window.navigator.userAgent.indexOf("firefox") > -1
                        ? "DOMMouseScroll"
                        : (function () {
                            var t = "onwheel" in o.document;
                            if (!t) {
                                var e = o.document.createElement("div");
                                e.setAttribute("onwheel", "return;"), (t = "function" == typeof e.onwheel);
                            }
                            return !t && o.document.implementation && o.document.implementation.hasFeature && !0 !== o.document.implementation.hasFeature("", "") && (t = o.document.implementation.hasFeature("Events.wheel", "3.0")), t;
                        })()
                        ? "wheel"
                        : "mousewheel",
                normalize: function (t) {
                    var e = 0,
                        i = 0,
                        n = 0,
                        r = 0;
                    return (
                        "detail" in t && (i = t.detail),
                        "wheelDelta" in t && (i = -t.wheelDelta / 120),
                        "wheelDeltaY" in t && (i = -t.wheelDeltaY / 120),
                        "wheelDeltaX" in t && (e = -t.wheelDeltaX / 120),
                        "axis" in t && t.axis === t.HORIZONTAL_AXIS && ((e = i), (i = 0)),
                            (n = 10 * e),
                            (r = 10 * i),
                        "deltaY" in t && (r = t.deltaY),
                        "deltaX" in t && (n = t.deltaX),
                        (n || r) && t.deltaMode && (1 === t.deltaMode ? ((n *= 40), (r *= 40)) : ((n *= 800), (r *= 800))),
                        n && !e && (e = n < 1 ? -1 : 1),
                        r && !i && (i = r < 1 ? -1 : 1),
                            {spinX: e, spinY: i, pixelX: n, pixelY: r}
                    );
                },
                handleMouseEnter: function () {
                    this.mouseEntered = !0;
                },
                handleMouseLeave: function () {
                    this.mouseEntered = !1;
                },
                handle: function (t) {
                    var e = t,
                        i = this,
                        n = i.params.mousewheel;
                    if (!i.mouseEntered && !n.releaseOnEdges) return !0;
                    e.originalEvent && (e = e.originalEvent);
                    var r = 0,
                        s = i.rtlTranslate ? -1 : 1,
                        a = W.normalize(e);
                    if (n.forceToAxis)
                        if (i.isHorizontal()) {
                            if (!(Math.abs(a.pixelX) > Math.abs(a.pixelY))) return !0;
                            r = a.pixelX * s;
                        } else {
                            if (!(Math.abs(a.pixelY) > Math.abs(a.pixelX))) return !0;
                            r = a.pixelY;
                        }
                    else r = Math.abs(a.pixelX) > Math.abs(a.pixelY) ? -a.pixelX * s : -a.pixelY;
                    if (0 === r) return !0;
                    if ((n.invert && (r = -r), i.params.freeMode)) {
                        i.params.loop && i.loopFix();
                        var l = i.getTranslate() + r * n.sensitivity,
                            c = i.isBeginning,
                            u = i.isEnd;
                        if (
                            (l >= i.minTranslate() && (l = i.minTranslate()),
                            l <= i.maxTranslate() && (l = i.maxTranslate()),
                                i.setTransition(0),
                                i.setTranslate(l),
                                i.updateProgress(),
                                i.updateActiveIndex(),
                                i.updateSlidesClasses(),
                            ((!c && i.isBeginning) || (!u && i.isEnd)) && i.updateSlidesClasses(),
                            i.params.freeModeSticky &&
                            (clearTimeout(i.mousewheel.timeout),
                                (i.mousewheel.timeout = d.nextTick(function () {
                                    i.slideToClosest();
                                }, 300))),
                                i.emit("scroll", e),
                            i.params.autoplay && i.params.autoplayDisableOnInteraction && i.stopAutoplay(),
                            l === i.minTranslate() || l === i.maxTranslate())
                        )
                            return !0;
                    } else {
                        if (d.now() - i.mousewheel.lastScrollTime > 60)
                            if (r < 0)
                                if ((i.isEnd && !i.params.loop) || i.animating) {
                                    if (n.releaseOnEdges) return !0;
                                } else i.slideNext(), i.emit("scroll", e);
                            else if ((i.isBeginning && !i.params.loop) || i.animating) {
                                if (n.releaseOnEdges) return !0;
                            } else i.slidePrev(), i.emit("scroll", e);
                        i.mousewheel.lastScrollTime = new o.window.Date().getTime();
                    }
                    return e.preventDefault ? e.preventDefault() : (e.returnValue = !1), !1;
                },
                enable: function () {
                    if (!W.event) return !1;
                    if (this.mousewheel.enabled) return !1;
                    var t = this.$el;
                    return (
                        "container" !== this.params.mousewheel.eventsTarged && (t = (0, s.$)(this.params.mousewheel.eventsTarged)),
                            t.on("mouseenter", this.mousewheel.handleMouseEnter),
                            t.on("mouseleave", this.mousewheel.handleMouseLeave),
                            t.on(W.event, this.mousewheel.handle),
                            (this.mousewheel.enabled = !0),
                            !0
                    );
                },
                disable: function () {
                    if (!W.event) return !1;
                    if (!this.mousewheel.enabled) return !1;
                    var t = this.$el;
                    return "container" !== this.params.mousewheel.eventsTarged && (t = (0, s.$)(this.params.mousewheel.eventsTarged)), t.off(W.event, this.mousewheel.handle), (this.mousewheel.enabled = !1), !0;
                },
            },
            H = {
                update: function () {
                    var t = this.params.navigation;
                    if (!this.params.loop) {
                        var e = this.navigation,
                            i = e.$nextEl,
                            n = e.$prevEl;
                        n && n.length > 0 && (this.isBeginning ? n.addClass(t.disabledClass) : n.removeClass(t.disabledClass), n[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass)),
                        i && i.length > 0 && (this.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass));
                    }
                },
                init: function () {
                    var t = this,
                        e = t.params.navigation;
                    if (e.nextEl || e.prevEl) {
                        var i = void 0,
                            n = void 0;
                        e.nextEl && ((i = (0, s.$)(e.nextEl)), t.params.uniqueNavElements && "string" == typeof e.nextEl && i.length > 1 && 1 === t.$el.find(e.nextEl).length && (i = t.$el.find(e.nextEl))),
                        e.prevEl && ((n = (0, s.$)(e.prevEl)), t.params.uniqueNavElements && "string" == typeof e.prevEl && n.length > 1 && 1 === t.$el.find(e.prevEl).length && (n = t.$el.find(e.prevEl))),
                        i &&
                        i.length > 0 &&
                        i.on("click", function (e) {
                            e.preventDefault(), (t.isEnd && !t.params.loop) || t.slideNext();
                        }),
                        n &&
                        n.length > 0 &&
                        n.on("click", function (e) {
                            e.preventDefault(), (t.isBeginning && !t.params.loop) || t.slidePrev();
                        }),
                            d.extend(t.navigation, {$nextEl: i, nextEl: i && i[0], $prevEl: n, prevEl: n && n[0]});
                    }
                },
                destroy: function () {
                    var t = this.navigation,
                        e = t.$nextEl,
                        i = t.$prevEl;
                    e && e.length && (e.off("click"), e.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click"), i.removeClass(this.params.navigation.disabledClass));
                },
            },
            R = {
                update: function () {
                    var t = this.rtl,
                        e = this.params.pagination;
                    if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                        var i = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                            n = this.pagination.$el,
                            r = void 0,
                            o = this.params.loop ? Math.ceil((i - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
                        if (
                            (this.params.loop
                                ? ((r = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > i - 1 - 2 * this.loopedSlides && (r -= i - 2 * this.loopedSlides),
                                r > o - 1 && (r -= o),
                                r < 0 && "bullets" !== this.params.paginationType && (r = o + r))
                                : (r = "undefined" != typeof this.snapIndex ? this.snapIndex : this.activeIndex || 0),
                            "bullets" === e.type && this.pagination.bullets && this.pagination.bullets.length > 0)
                        ) {
                            var a = this.pagination.bullets,
                                l = void 0,
                                c = void 0,
                                u = void 0;
                            if (
                                (e.dynamicBullets &&
                                ((this.pagination.bulletSize = a.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                                    n.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (e.dynamicMainBullets + 4) + "px"),
                                e.dynamicMainBullets > 1 &&
                                this.previousIndex !== undefined &&
                                ((this.pagination.dynamicBulletIndex += r - this.previousIndex),
                                    this.pagination.dynamicBulletIndex > e.dynamicMainBullets - 1
                                        ? (this.pagination.dynamicBulletIndex = e.dynamicMainBullets - 1)
                                        : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)),
                                    (l = r - this.pagination.dynamicBulletIndex),
                                    (u = ((c = l + (Math.min(a.length, e.dynamicMainBullets) - 1)) + l) / 2)),
                                    a.removeClass(
                                        e.bulletActiveClass + " " + e.bulletActiveClass + "-next " + e.bulletActiveClass + "-next-next " + e.bulletActiveClass + "-prev " + e.bulletActiveClass + "-prev-prev " + e.bulletActiveClass + "-main"
                                    ),
                                n.length > 1)
                            )
                                a.each(function (t, i) {
                                    var n = (0, s.$)(i),
                                        o = n.index();
                                    o === r && n.addClass(e.bulletActiveClass),
                                    e.dynamicBullets &&
                                    (o >= l && o <= c && n.addClass(e.bulletActiveClass + "-main"),
                                    o === l &&
                                    n
                                        .prev()
                                        .addClass(e.bulletActiveClass + "-prev")
                                        .prev()
                                        .addClass(e.bulletActiveClass + "-prev-prev"),
                                    o === c &&
                                    n
                                        .next()
                                        .addClass(e.bulletActiveClass + "-next")
                                        .next()
                                        .addClass(e.bulletActiveClass + "-next-next"));
                                });
                            else if ((a.eq(r).addClass(e.bulletActiveClass), e.dynamicBullets)) {
                                for (var h = a.eq(l), d = a.eq(c), f = l; f <= c; f += 1) a.eq(f).addClass(e.bulletActiveClass + "-main");
                                h
                                    .prev()
                                    .addClass(e.bulletActiveClass + "-prev")
                                    .prev()
                                    .addClass(e.bulletActiveClass + "-prev-prev"),
                                    d
                                        .next()
                                        .addClass(e.bulletActiveClass + "-next")
                                        .next()
                                        .addClass(e.bulletActiveClass + "-next-next");
                            }
                            if (e.dynamicBullets) {
                                var p = Math.min(a.length, e.dynamicMainBullets + 4),
                                    v = (this.pagination.bulletSize * p - this.pagination.bulletSize) / 2 - u * this.pagination.bulletSize,
                                    m = t ? "right" : "left";
                                a.css(this.isHorizontal() ? m : "top", v + "px");
                            }
                        }
                        if (("fraction" === e.type && (n.find("." + e.currentClass).text(r + 1), n.find("." + e.totalClass).text(o)), "progressbar" === e.type)) {
                            var g = void 0;
                            g = e.progressbarOpposite ? (this.isHorizontal() ? "vertical" : "horizontal") : this.isHorizontal() ? "horizontal" : "vertical";
                            var y = (r + 1) / o,
                                w = 1,
                                b = 1;
                            "horizontal" === g ? (w = y) : (b = y),
                                n
                                    .find("." + e.progressbarFillClass)
                                    .transform("translate3d(0,0,0) scaleX(" + w + ") scaleY(" + b + ")")
                                    .transition(this.params.speed);
                        }
                        "custom" === e.type && e.renderCustom ? (n.html(e.renderCustom(this, r + 1, o)), this.emit("paginationRender", this, n[0])) : this.emit("paginationUpdate", this, n[0]),
                            n[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass);
                    }
                },
                render: function () {
                    var t = this.params.pagination;
                    if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                        var e = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                            i = this.pagination.$el,
                            n = "";
                        if ("bullets" === t.type) {
                            for (var r = this.params.loop ? Math.ceil((e - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, s = 0; s < r; s += 1)
                                t.renderBullet ? (n += t.renderBullet.call(this, s, t.bulletClass)) : (n += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">");
                            i.html(n), (this.pagination.bullets = i.find("." + t.bulletClass));
                        }
                        "fraction" === t.type && ((n = t.renderFraction ? t.renderFraction.call(this, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>'), i.html(n)),
                        "progressbar" === t.type && ((n = t.renderProgressbar ? t.renderProgressbar.call(this, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>'), i.html(n)),
                        "custom" !== t.type && this.emit("paginationRender", this.pagination.$el[0]);
                    }
                },
                init: function () {
                    var t = this,
                        e = t.params.pagination;
                    if (e.el) {
                        var i = (0, s.$)(e.el);
                        0 !== i.length &&
                        (t.params.uniqueNavElements && "string" == typeof e.el && i.length > 1 && 1 === t.$el.find(e.el).length && (i = t.$el.find(e.el)),
                        "bullets" === e.type && e.clickable && i.addClass(e.clickableClass),
                            i.addClass(e.modifierClass + e.type),
                        "bullets" === e.type && e.dynamicBullets && (i.addClass("" + e.modifierClass + e.type + "-dynamic"), (t.pagination.dynamicBulletIndex = 0), e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
                        "progressbar" === e.type && e.progressbarOpposite && i.addClass(e.progressbarOppositeClass),
                        e.clickable &&
                        i.on("click", "." + e.bulletClass, function (e) {
                            e.preventDefault();
                            var i = (0, s.$)(this).index() * t.params.slidesPerGroup;
                            t.params.loop && (i += t.loopedSlides), t.slideTo(i);
                        }),
                            d.extend(t.pagination, {$el: i, el: i[0]}));
                    }
                },
                destroy: function () {
                    var t = this.params.pagination;
                    if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                        var e = this.pagination.$el;
                        e.removeClass(t.hiddenClass), e.removeClass(t.modifierClass + t.type), this.pagination.bullets && this.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && e.off("click", "." + t.bulletClass);
                    }
                },
            },
            Y = {
                setTranslate: function () {
                    if (this.params.scrollbar.el && this.scrollbar.el) {
                        var t = this.scrollbar,
                            e = this.rtlTranslate,
                            i = this.progress,
                            n = t.dragSize,
                            r = t.trackSize,
                            s = t.$dragEl,
                            o = t.$el,
                            a = this.params.scrollbar,
                            l = n,
                            c = (r - n) * i;
                        e ? ((c = -c) > 0 ? ((l = n - c), (c = 0)) : -c + n > r && (l = r + c)) : c < 0 ? ((l = n + c), (c = 0)) : c + n > r && (l = r - c),
                            this.isHorizontal()
                                ? (f.transforms3d ? s.transform("translate3d(" + c + "px, 0, 0)") : s.transform("translateX(" + c + "px)"), (s[0].style.width = l + "px"))
                                : (f.transforms3d ? s.transform("translate3d(0px, " + c + "px, 0)") : s.transform("translateY(" + c + "px)"), (s[0].style.height = l + "px")),
                        a.hide &&
                        (clearTimeout(this.scrollbar.timeout),
                            (o[0].style.opacity = 1),
                            (this.scrollbar.timeout = setTimeout(function () {
                                (o[0].style.opacity = 0), o.transition(400);
                            }, 1e3)));
                    }
                },
                setTransition: function (t) {
                    this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(t);
                },
                updateSize: function () {
                    if (this.params.scrollbar.el && this.scrollbar.el) {
                        var t = this.scrollbar,
                            e = t.$dragEl,
                            i = t.$el;
                        (e[0].style.width = ""), (e[0].style.height = "");
                        var n = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
                            r = this.size / this.virtualSize,
                            s = r * (n / this.size),
                            o = void 0;
                        (o = "auto" === this.params.scrollbar.dragSize ? n * r : parseInt(this.params.scrollbar.dragSize, 10)),
                            this.isHorizontal() ? (e[0].style.width = o + "px") : (e[0].style.height = o + "px"),
                            (i[0].style.display = r >= 1 ? "none" : ""),
                        this.params.scrollbarHide && (i[0].style.opacity = 0),
                            d.extend(t, {trackSize: n, divider: r, moveDivider: s, dragSize: o}),
                            t.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass);
                    }
                },
                setDragPosition: function (t) {
                    var e = this.scrollbar,
                        i = this.rtlTranslate,
                        n = e.$el,
                        r = e.dragSize,
                        s = e.trackSize,
                        o = void 0;
                    (o =
                        ((this.isHorizontal()
                            ? "touchstart" === t.type || "touchmove" === t.type
                                ? t.targetTouches[0].pageX
                                : t.pageX || t.clientX
                            : "touchstart" === t.type || "touchmove" === t.type
                                ? t.targetTouches[0].pageY
                                : t.pageY || t.clientY) -
                            n.offset()[this.isHorizontal() ? "left" : "top"] -
                            r / 2) /
                        (s - r)),
                        (o = Math.max(Math.min(o, 1), 0)),
                    i && (o = 1 - o);
                    var a = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * o;
                    this.updateProgress(a), this.setTranslate(a), this.updateActiveIndex(), this.updateSlidesClasses();
                },
                onDragStart: function (t) {
                    var e = this.params.scrollbar,
                        i = this.scrollbar,
                        n = this.$wrapperEl,
                        r = i.$el,
                        s = i.$dragEl;
                    (this.scrollbar.isTouched = !0),
                        t.preventDefault(),
                        t.stopPropagation(),
                        n.transition(100),
                        s.transition(100),
                        i.setDragPosition(t),
                        clearTimeout(this.scrollbar.dragTimeout),
                        r.transition(0),
                    e.hide && r.css("opacity", 1),
                        this.emit("scrollbarDragStart", t);
                },
                onDragMove: function (t) {
                    var e = this.scrollbar,
                        i = this.$wrapperEl,
                        n = e.$el,
                        r = e.$dragEl;
                    this.scrollbar.isTouched && (t.preventDefault ? t.preventDefault() : (t.returnValue = !1), e.setDragPosition(t), i.transition(0), n.transition(0), r.transition(0), this.emit("scrollbarDragMove", t));
                },
                onDragEnd: function (t) {
                    var e = this.params.scrollbar,
                        i = this.scrollbar.$el;
                    this.scrollbar.isTouched &&
                    ((this.scrollbar.isTouched = !1),
                    e.hide &&
                    (clearTimeout(this.scrollbar.dragTimeout),
                        (this.scrollbar.dragTimeout = d.nextTick(function () {
                            i.css("opacity", 0), i.transition(400);
                        }, 1e3))),
                        this.emit("scrollbarDragEnd", t),
                    e.snapOnRelease && this.slideToClosest());
                },
                enableDraggable: function () {
                    if (this.params.scrollbar.el) {
                        var t = this.scrollbar,
                            e = this.touchEvents,
                            i = this.touchEventsDesktop,
                            n = this.params,
                            r = t.$el[0],
                            s = !(!f.passiveListener || !n.passiveListener) && {passive: !1, capture: !1},
                            a = !(!f.passiveListener || !n.passiveListener) && {passive: !0, capture: !1};
                        f.touch || (!f.pointerEvents && !f.prefixedPointerEvents)
                            ? (f.touch && (r.addEventListener(e.start, this.scrollbar.onDragStart, s), r.addEventListener(e.move, this.scrollbar.onDragMove, s), r.addEventListener(e.end, this.scrollbar.onDragEnd, a)),
                            ((n.simulateTouch && !E.ios && !E.android) || (n.simulateTouch && !f.touch && E.ios)) &&
                            (r.addEventListener("mousedown", this.scrollbar.onDragStart, s), o.document.addEventListener("mousemove", this.scrollbar.onDragMove, s), o.document.addEventListener("mouseup", this.scrollbar.onDragEnd, a)))
                            : (r.addEventListener(i.start, this.scrollbar.onDragStart, s), o.document.addEventListener(i.move, this.scrollbar.onDragMove, s), o.document.addEventListener(i.end, this.scrollbar.onDragEnd, a));
                    }
                },
                disableDraggable: function () {
                    if (this.params.scrollbar.el) {
                        var t = this.scrollbar,
                            e = this.touchEvents,
                            i = this.touchEventsDesktop,
                            n = this.params,
                            r = t.$el[0],
                            s = !(!f.passiveListener || !n.passiveListener) && {passive: !1, capture: !1},
                            a = !(!f.passiveListener || !n.passiveListener) && {passive: !0, capture: !1};
                        f.touch || (!f.pointerEvents && !f.prefixedPointerEvents)
                            ? (f.touch && (r.removeEventListener(e.start, this.scrollbar.onDragStart, s), r.removeEventListener(e.move, this.scrollbar.onDragMove, s), r.removeEventListener(e.end, this.scrollbar.onDragEnd, a)),
                            ((n.simulateTouch && !E.ios && !E.android) || (n.simulateTouch && !f.touch && E.ios)) &&
                            (r.removeEventListener("mousedown", this.scrollbar.onDragStart, s),
                                o.document.removeEventListener("mousemove", this.scrollbar.onDragMove, s),
                                o.document.removeEventListener("mouseup", this.scrollbar.onDragEnd, a)))
                            : (r.removeEventListener(i.start, this.scrollbar.onDragStart, s), o.document.removeEventListener(i.move, this.scrollbar.onDragMove, s), o.document.removeEventListener(i.end, this.scrollbar.onDragEnd, a));
                    }
                },
                init: function () {
                    if (this.params.scrollbar.el) {
                        var t = this.scrollbar,
                            e = this.$el,
                            i = this.params.scrollbar,
                            n = (0, s.$)(i.el);
                        this.params.uniqueNavElements && "string" == typeof i.el && n.length > 1 && 1 === e.find(i.el).length && (n = e.find(i.el));
                        var r = n.find("." + this.params.scrollbar.dragClass);
                        0 === r.length && ((r = (0, s.$)('<div class="' + this.params.scrollbar.dragClass + '"></div>')), n.append(r)), d.extend(t, {
                            $el: n,
                            el: n[0],
                            $dragEl: r,
                            dragEl: r[0]
                        }), i.draggable && t.enableDraggable();
                    }
                },
                destroy: function () {
                    this.scrollbar.disableDraggable();
                },
            },
            X = {
                setTransform: function (t, e) {
                    var i = this.rtl,
                        n = (0, s.$)(t),
                        r = i ? -1 : 1,
                        o = n.attr("data-swiper-parallax") || "0",
                        a = n.attr("data-swiper-parallax-x"),
                        l = n.attr("data-swiper-parallax-y"),
                        c = n.attr("data-swiper-parallax-scale"),
                        u = n.attr("data-swiper-parallax-opacity");
                    if (
                        (a || l ? ((a = a || "0"), (l = l || "0")) : this.isHorizontal() ? ((a = o), (l = "0")) : ((l = o), (a = "0")),
                            (a = a.indexOf("%") >= 0 ? parseInt(a, 10) * e * r + "%" : a * e * r + "px"),
                            (l = l.indexOf("%") >= 0 ? parseInt(l, 10) * e + "%" : l * e + "px"),
                        void 0 !== u && null !== u)
                    ) {
                        var h = u - (u - 1) * (1 - Math.abs(e));
                        n[0].style.opacity = h;
                    }
                    if (void 0 === c || null === c) n.transform("translate3d(" + a + ", " + l + ", 0px)");
                    else {
                        var d = c - (c - 1) * (1 - Math.abs(e));
                        n.transform("translate3d(" + a + ", " + l + ", 0px) scale(" + d + ")");
                    }
                },
                setTranslate: function () {
                    var t = this,
                        e = t.$el,
                        i = t.slides,
                        n = t.progress,
                        r = t.snapGrid;
                    e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, i) {
                        t.parallax.setTransform(i, n);
                    }),
                        i.each(function (e, i) {
                            var o = i.progress;
                            t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (o += Math.ceil(e / 2) - n * (r.length - 1)),
                                (o = Math.min(Math.max(o, -1), 1)),
                                (0, s.$)(i)
                                    .find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]")
                                    .each(function (e, i) {
                                        t.parallax.setTransform(i, o);
                                    });
                        });
                },
                setTransition: function () {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
                    this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, i) {
                        var n = (0, s.$)(i),
                            r = parseInt(n.attr("data-swiper-parallax-duration"), 10) || t;
                        0 === t && (r = 0), n.transition(r);
                    });
                },
            },
            V = {
                getDistanceBetweenTouches: function (t) {
                    if (t.targetTouches.length < 2) return 1;
                    var e = t.targetTouches[0].pageX,
                        i = t.targetTouches[0].pageY,
                        n = t.targetTouches[1].pageX,
                        r = t.targetTouches[1].pageY;
                    return Math.sqrt(Math.pow(n - e, 2) + Math.pow(r - i, 2));
                },
                onGestureStart: function (t) {
                    var e = this.params.zoom,
                        i = this.zoom,
                        n = i.gesture;
                    if (((i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1), !f.gestures)) {
                        if ("touchstart" !== t.type || ("touchstart" === t.type && t.targetTouches.length < 2)) return;
                        (i.fakeGestureTouched = !0), (n.scaleStart = V.getDistanceBetweenTouches(t));
                    }
                    (n.$slideEl && n.$slideEl.length) ||
                    ((n.$slideEl = (0, s.$)(t.target).closest(".swiper-slide")),
                    0 === n.$slideEl.length && (n.$slideEl = this.slides.eq(this.activeIndex)),
                        (n.$imageEl = n.$slideEl.find("img, svg, canvas")),
                        (n.$imageWrapEl = n.$imageEl.parent("." + e.containerClass)),
                        (n.maxRatio = n.$imageWrapEl.attr("data-swiper-zoom") || e.maxRatio),
                    0 !== n.$imageWrapEl.length)
                        ? (n.$imageEl.transition(0), (this.zoom.isScaling = !0))
                        : (n.$imageEl = undefined);
                },
                onGestureChange: function (t) {
                    var e = this.params.zoom,
                        i = this.zoom,
                        n = i.gesture;
                    if (!f.gestures) {
                        if ("touchmove" !== t.type || ("touchmove" === t.type && t.targetTouches.length < 2)) return;
                        (i.fakeGestureMoved = !0), (n.scaleMove = V.getDistanceBetweenTouches(t));
                    }
                    n.$imageEl &&
                    0 !== n.$imageEl.length &&
                    (f.gestures ? (this.zoom.scale = t.scale * i.currentScale) : (i.scale = (n.scaleMove / n.scaleStart) * i.currentScale),
                    i.scale > n.maxRatio && (i.scale = n.maxRatio - 1 + Math.pow(i.scale - n.maxRatio + 1, 0.5)),
                    i.scale < e.minRatio && (i.scale = e.minRatio + 1 - Math.pow(e.minRatio - i.scale + 1, 0.5)),
                        n.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"));
                },
                onGestureEnd: function (t) {
                    var e = this.params.zoom,
                        i = this.zoom,
                        n = i.gesture;
                    if (!f.gestures) {
                        if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                        if ("touchend" !== t.type || ("touchend" === t.type && t.changedTouches.length < 2 && !E.android)) return;
                        (i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1);
                    }
                    n.$imageEl &&
                    0 !== n.$imageEl.length &&
                    ((i.scale = Math.max(Math.min(i.scale, n.maxRatio), e.minRatio)),
                        n.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"),
                        (i.currentScale = i.scale),
                        (i.isScaling = !1),
                    1 === i.scale && (n.$slideEl = undefined));
                },
                onTouchStart: function (t) {
                    var e = this.zoom,
                        i = e.gesture,
                        n = e.image;
                    i.$imageEl &&
                    0 !== i.$imageEl.length &&
                    (n.isTouched ||
                        (E.android && t.preventDefault(),
                            (n.isTouched = !0),
                            (n.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX),
                            (n.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY)));
                },
                onTouchMove: function (t) {
                    var e = this.zoom,
                        i = e.gesture,
                        n = e.image,
                        r = e.velocity;
                    if (i.$imageEl && 0 !== i.$imageEl.length && ((this.allowClick = !1), n.isTouched && i.$slideEl)) {
                        n.isMoved ||
                        ((n.width = i.$imageEl[0].offsetWidth),
                            (n.height = i.$imageEl[0].offsetHeight),
                            (n.startX = d.getTranslate(i.$imageWrapEl[0], "x") || 0),
                            (n.startY = d.getTranslate(i.$imageWrapEl[0], "y") || 0),
                            (i.slideWidth = i.$slideEl[0].offsetWidth),
                            (i.slideHeight = i.$slideEl[0].offsetHeight),
                            i.$imageWrapEl.transition(0),
                        this.rtl && ((n.startX = -n.startX), (n.startY = -n.startY)));
                        var s = n.width * e.scale,
                            o = n.height * e.scale;
                        if (!(s < i.slideWidth && o < i.slideHeight)) {
                            if (
                                ((n.minX = Math.min(i.slideWidth / 2 - s / 2, 0)),
                                    (n.maxX = -n.minX),
                                    (n.minY = Math.min(i.slideHeight / 2 - o / 2, 0)),
                                    (n.maxY = -n.minY),
                                    (n.touchesCurrent.x = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX),
                                    (n.touchesCurrent.y = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY),
                                !n.isMoved && !e.isScaling)
                            ) {
                                if (this.isHorizontal() && ((Math.floor(n.minX) === Math.floor(n.startX) && n.touchesCurrent.x < n.touchesStart.x) || (Math.floor(n.maxX) === Math.floor(n.startX) && n.touchesCurrent.x > n.touchesStart.x)))
                                    return void (n.isTouched = !1);
                                if (!this.isHorizontal() && ((Math.floor(n.minY) === Math.floor(n.startY) && n.touchesCurrent.y < n.touchesStart.y) || (Math.floor(n.maxY) === Math.floor(n.startY) && n.touchesCurrent.y > n.touchesStart.y)))
                                    return void (n.isTouched = !1);
                            }
                            t.preventDefault(),
                                t.stopPropagation(),
                                (n.isMoved = !0),
                                (n.currentX = n.touchesCurrent.x - n.touchesStart.x + n.startX),
                                (n.currentY = n.touchesCurrent.y - n.touchesStart.y + n.startY),
                            n.currentX < n.minX && (n.currentX = n.minX + 1 - Math.pow(n.minX - n.currentX + 1, 0.8)),
                            n.currentX > n.maxX && (n.currentX = n.maxX - 1 + Math.pow(n.currentX - n.maxX + 1, 0.8)),
                            n.currentY < n.minY && (n.currentY = n.minY + 1 - Math.pow(n.minY - n.currentY + 1, 0.8)),
                            n.currentY > n.maxY && (n.currentY = n.maxY - 1 + Math.pow(n.currentY - n.maxY + 1, 0.8)),
                            r.prevPositionX || (r.prevPositionX = n.touchesCurrent.x),
                            r.prevPositionY || (r.prevPositionY = n.touchesCurrent.y),
                            r.prevTime || (r.prevTime = Date.now()),
                                (r.x = (n.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2),
                                (r.y = (n.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2),
                            Math.abs(n.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0),
                            Math.abs(n.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0),
                                (r.prevPositionX = n.touchesCurrent.x),
                                (r.prevPositionY = n.touchesCurrent.y),
                                (r.prevTime = Date.now()),
                                i.$imageWrapEl.transform("translate3d(" + n.currentX + "px, " + n.currentY + "px,0)");
                        }
                    }
                },
                onTouchEnd: function () {
                    var t = this.zoom,
                        e = t.gesture,
                        i = t.image,
                        n = t.velocity;
                    if (e.$imageEl && 0 !== e.$imageEl.length) {
                        if (!i.isTouched || !i.isMoved) return (i.isTouched = !1), void (i.isMoved = !1);
                        (i.isTouched = !1), (i.isMoved = !1);
                        var r = 300,
                            s = 300,
                            o = n.x * r,
                            a = i.currentX + o,
                            l = n.y * s,
                            c = i.currentY + l;
                        0 !== n.x && (r = Math.abs((a - i.currentX) / n.x)), 0 !== n.y && (s = Math.abs((c - i.currentY) / n.y));
                        var u = Math.max(r, s);
                        (i.currentX = a), (i.currentY = c);
                        var h = i.width * t.scale,
                            d = i.height * t.scale;
                        (i.minX = Math.min(e.slideWidth / 2 - h / 2, 0)),
                            (i.maxX = -i.minX),
                            (i.minY = Math.min(e.slideHeight / 2 - d / 2, 0)),
                            (i.maxY = -i.minY),
                            (i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX)),
                            (i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY)),
                            e.$imageWrapEl.transition(u).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)");
                    }
                },
                onTransitionEnd: function () {
                    var t = this.zoom,
                        e = t.gesture;
                    e.$slideEl &&
                    this.previousIndex !== this.activeIndex &&
                    (e.$imageEl.transform("translate3d(0,0,0) scale(1)"),
                        e.$imageWrapEl.transform("translate3d(0,0,0)"),
                        (e.$slideEl = undefined),
                        (e.$imageEl = undefined),
                        (e.$imageWrapEl = undefined),
                        (t.scale = 1),
                        (t.currentScale = 1));
                },
                toggle: function (t) {
                    var e = this.zoom;
                    e.scale && 1 !== e.scale ? e.out() : e["in"](t);
                },
                in: function (t) {
                    var e = this.zoom,
                        i = this.params.zoom,
                        n = e.gesture,
                        r = e.image;
                    if (
                        (n.$slideEl ||
                        ((n.$slideEl = this.clickedSlide ? (0, s.$)(this.clickedSlide) : this.slides.eq(this.activeIndex)),
                            (n.$imageEl = n.$slideEl.find("img, svg, canvas")),
                            (n.$imageWrapEl = n.$imageEl.parent("." + i.containerClass))),
                        n.$imageEl && 0 !== n.$imageEl.length)
                    ) {
                        n.$slideEl.addClass("" + i.zoomedSlideClass);
                        var o = void 0,
                            a = void 0,
                            l = void 0,
                            c = void 0,
                            u = void 0,
                            h = void 0,
                            d = void 0,
                            f = void 0,
                            p = void 0,
                            v = void 0,
                            m = void 0,
                            g = void 0,
                            y = void 0,
                            w = void 0,
                            b = void 0,
                            _ = void 0;
                        "undefined" == typeof r.touchesStart.x && t
                            ? ((o = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX), (a = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY))
                            : ((o = r.touchesStart.x), (a = r.touchesStart.y)),
                            (e.scale = n.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio),
                            (e.currentScale = n.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio),
                            t
                                ? ((b = n.$slideEl[0].offsetWidth),
                                    (_ = n.$slideEl[0].offsetHeight),
                                    (l = n.$slideEl.offset().left + b / 2 - o),
                                    (c = n.$slideEl.offset().top + _ / 2 - a),
                                    (d = n.$imageEl[0].offsetWidth),
                                    (f = n.$imageEl[0].offsetHeight),
                                    (p = d * e.scale),
                                    (v = f * e.scale),
                                    (y = -(m = Math.min(b / 2 - p / 2, 0))),
                                    (w = -(g = Math.min(_ / 2 - v / 2, 0))),
                                    (u = l * e.scale),
                                    (h = c * e.scale),
                                u < m && (u = m),
                                u > y && (u = y),
                                h < g && (h = g),
                                h > w && (h = w))
                                : ((u = 0), (h = 0)),
                            n.$imageWrapEl.transition(300).transform("translate3d(" + u + "px, " + h + "px,0)"),
                            n.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + e.scale + ")");
                    }
                },
                out: function () {
                    var t = this.zoom,
                        e = this.params.zoom,
                        i = t.gesture;
                    i.$slideEl ||
                    ((i.$slideEl = this.clickedSlide ? (0, s.$)(this.clickedSlide) : this.slides.eq(this.activeIndex)), (i.$imageEl = i.$slideEl.find("img, svg, canvas")), (i.$imageWrapEl = i.$imageEl.parent("." + e.containerClass))),
                    i.$imageEl &&
                    0 !== i.$imageEl.length &&
                    ((t.scale = 1),
                        (t.currentScale = 1),
                        i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
                        i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
                        i.$slideEl.removeClass("" + e.zoomedSlideClass),
                        (i.$slideEl = undefined));
                },
                enable: function () {
                    var t = this.zoom;
                    if (!t.enabled) {
                        t.enabled = !0;
                        var e = !("touchstart" !== this.touchEvents.start || !f.passiveListener || !this.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        f.gestures
                            ? (this.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, e),
                                this.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, e),
                                this.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, e))
                            : "touchstart" === this.touchEvents.start &&
                            (this.$wrapperEl.on(this.touchEvents.start, ".swiper-slide", t.onGestureStart, e),
                                this.$wrapperEl.on(this.touchEvents.move, ".swiper-slide", t.onGestureChange, e),
                                this.$wrapperEl.on(this.touchEvents.end, ".swiper-slide", t.onGestureEnd, e)),
                            this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, t.onTouchMove);
                    }
                },
                disable: function () {
                    var t = this.zoom;
                    if (t.enabled) {
                        this.zoom.enabled = !1;
                        var e = !("touchstart" !== this.touchEvents.start || !f.passiveListener || !this.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        f.gestures
                            ? (this.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, e),
                                this.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, e),
                                this.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, e))
                            : "touchstart" === this.touchEvents.start &&
                            (this.$wrapperEl.off(this.touchEvents.start, ".swiper-slide", t.onGestureStart, e),
                                this.$wrapperEl.off(this.touchEvents.move, ".swiper-slide", t.onGestureChange, e),
                                this.$wrapperEl.off(this.touchEvents.end, ".swiper-slide", t.onGestureEnd, e)),
                            this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, t.onTouchMove);
                    }
                },
            },
            G = {
                loadInSlide: function (t) {
                    var e = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1],
                        i = this,
                        n = i.params.lazy;
                    if (void 0 !== t && 0 !== i.slides.length) {
                        var r = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + t + '"]') : i.slides.eq(t),
                            o = r.find("." + n.elementClass + ":not(." + n.loadedClass + "):not(." + n.loadingClass + ")");
                        !r.hasClass(n.elementClass) || r.hasClass(n.loadedClass) || r.hasClass(n.loadingClass) || (o = o.add(r[0])),
                        0 !== o.length &&
                        o.each(function (t, o) {
                            var a = (0, s.$)(o);
                            a.addClass(n.loadingClass);
                            var l = a.attr("data-background"),
                                c = a.attr("data-src"),
                                u = a.attr("data-srcset"),
                                h = a.attr("data-sizes");
                            i.loadImage(a[0], c || l, u, h, !1, function () {
                                if (void 0 !== i && null !== i && i && (!i || i.params) && !i.destroyed) {
                                    if (
                                        (l
                                            ? (a.css("background-image", 'url("' + l + '")'), a.removeAttr("data-background"))
                                            : (u && (a.attr("srcset", u), a.removeAttr("data-srcset")), h && (a.attr("sizes", h), a.removeAttr("data-sizes")), c && (a.attr("src", c), a.removeAttr("data-src"))),
                                            a.addClass(n.loadedClass).removeClass(n.loadingClass),
                                            r.find("." + n.preloaderClass).remove(),
                                        i.params.loop && e)
                                    ) {
                                        var t = r.attr("data-swiper-slide-index");
                                        if (r.hasClass(i.params.slideDuplicateClass)) {
                                            var s = i.$wrapperEl.children('[data-swiper-slide-index="' + t + '"]:not(.' + i.params.slideDuplicateClass + ")");
                                            i.lazy.loadInSlide(s.index(), !1);
                                        } else {
                                            var o = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + t + '"]');
                                            i.lazy.loadInSlide(o.index(), !1);
                                        }
                                    }
                                    i.emit("lazyImageReady", r[0], a[0]);
                                }
                            }),
                                i.emit("lazyImageLoad", r[0], a[0]);
                        });
                    }
                },
                load: function () {
                    var t = this,
                        e = t.$wrapperEl,
                        i = t.params,
                        n = t.slides,
                        r = t.activeIndex,
                        o = t.virtual && i.virtual.enabled,
                        a = i.lazy,
                        l = i.slidesPerView;

                    function c(t) {
                        if (o) {
                            if (e.children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]').length) return !0;
                        } else if (n[t]) return !0;
                        return !1;
                    }

                    function u(t) {
                        return o ? (0, s.$)(t).attr("data-swiper-slide-index") : (0, s.$)(t).index();
                    }

                    if (("auto" === l && (l = 0), t.lazy.initialImageLoaded || (t.lazy.initialImageLoaded = !0), t.params.watchSlidesVisibility))
                        e.children("." + i.slideVisibleClass).each(function (e, i) {
                            var n = o ? (0, s.$)(i).attr("data-swiper-slide-index") : (0, s.$)(i).index();
                            t.lazy.loadInSlide(n);
                        });
                    else if (l > 1) for (var h = r; h < r + l; h += 1) c(h) && t.lazy.loadInSlide(h);
                    else t.lazy.loadInSlide(r);
                    if (a.loadPrevNext)
                        if (l > 1 || (a.loadPrevNextAmount && a.loadPrevNextAmount > 1)) {
                            for (var d = a.loadPrevNextAmount, f = l, p = Math.min(r + f + Math.max(d, f), n.length), v = Math.max(r - Math.max(f, d), 0), m = r + l; m < p; m += 1) c(m) && t.lazy.loadInSlide(m);
                            for (var g = v; g < r; g += 1) c(g) && t.lazy.loadInSlide(g);
                        } else {
                            var y = e.children("." + i.slideNextClass);
                            y.length > 0 && t.lazy.loadInSlide(u(y));
                            var w = e.children("." + i.slidePrevClass);
                            w.length > 0 && t.lazy.loadInSlide(u(w));
                        }
                },
            },
            q = {
                LinearSpline: function (t, e) {
                    var i,
                        n,
                        r,
                        s =
                            ((i = void 0),
                                (n = void 0),
                                (r = void 0),
                                function (t, e) {
                                    for (n = -1, i = t.length; i - n > 1;) t[(r = (i + n) >> 1)] <= e ? (n = r) : (i = r);
                                    return i;
                                });
                    (this.x = t), (this.y = e), (this.lastIndex = t.length - 1);
                    var o = void 0,
                        a = void 0;
                    return (
                        (this.interpolate = function (t) {
                            return t ? ((a = s(this.x, t)), (o = a - 1), ((t - this.x[o]) * (this.y[a] - this.y[o])) / (this.x[a] - this.x[o]) + this.y[o]) : 0;
                        }),
                            this
                    );
                },
                getInterpolateFunction: function (t) {
                    this.controller.spline || (this.controller.spline = this.params.loop ? new q.LinearSpline(this.slidesGrid, t.slidesGrid) : new q.LinearSpline(this.snapGrid, t.snapGrid));
                },
                setTranslate: function (t, e) {
                    var i = this,
                        n = i.controller.control,
                        r = void 0,
                        s = void 0;

                    function o(t) {
                        var e = i.rtlTranslate ? -i.translate : i.translate;
                        "slide" === i.params.controller.by && (i.controller.getInterpolateFunction(t), (s = -i.controller.spline.interpolate(-e))),
                        (s && "container" !== i.params.controller.by) || ((r = (t.maxTranslate() - t.minTranslate()) / (i.maxTranslate() - i.minTranslate())), (s = (e - i.minTranslate()) * r + t.minTranslate())),
                        i.params.controller.inverse && (s = t.maxTranslate() - s),
                            t.updateProgress(s),
                            t.setTranslate(s, i),
                            t.updateActiveIndex(),
                            t.updateSlidesClasses();
                    }

                    if (Array.isArray(n)) for (var a = 0; a < n.length; a += 1) n[a] !== e && n[a] instanceof A && o(n[a]);
                    else n instanceof A && e !== n && o(n);
                },
                setTransition: function (t, e) {
                    var i = this,
                        n = i.controller.control,
                        r = void 0;

                    function s(e) {
                        e.setTransition(t, i),
                        0 !== t &&
                        (e.transitionStart(),
                            e.$wrapperEl.transitionEnd(function () {
                                n && (e.params.loop && "slide" === i.params.controller.by && e.loopFix(), e.transitionEnd());
                            }));
                    }

                    if (Array.isArray(n)) for (r = 0; r < n.length; r += 1) n[r] !== e && n[r] instanceof A && s(n[r]);
                    else n instanceof A && e !== n && s(n);
                },
            },
            U = {
                makeElFocusable: function (t) {
                    return t.attr("tabIndex", "0"), t;
                },
                addElRole: function (t, e) {
                    return t.attr("role", e), t;
                },
                addElLabel: function (t, e) {
                    return t.attr("aria-label", e), t;
                },
                disableEl: function (t) {
                    return t.attr("aria-disabled", !0), t;
                },
                enableEl: function (t) {
                    return t.attr("aria-disabled", !1), t;
                },
                onEnterKey: function (t) {
                    var e = this.params.a11y;
                    if (13 === t.keyCode) {
                        var i = (0, s.$)(t.target);
                        this.navigation &&
                        this.navigation.$nextEl &&
                        i.is(this.navigation.$nextEl) &&
                        ((this.isEnd && !this.params.loop) || this.slideNext(), this.isEnd ? this.a11y.notify(e.lastSlideMessage) : this.a11y.notify(e.nextSlideMessage)),
                        this.navigation &&
                        this.navigation.$prevEl &&
                        i.is(this.navigation.$prevEl) &&
                        ((this.isBeginning && !this.params.loop) || this.slidePrev(), this.isBeginning ? this.a11y.notify(e.firstSlideMessage) : this.a11y.notify(e.prevSlideMessage)),
                        this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click();
                    }
                },
                notify: function (t) {
                    var e = this.a11y.liveRegion;
                    0 !== e.length && (e.html(""), e.html(t));
                },
                updateNavigation: function () {
                    if (!this.params.loop) {
                        var t = this.navigation,
                            e = t.$nextEl,
                            i = t.$prevEl;
                        i && i.length > 0 && (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)), e && e.length > 0 && (this.isEnd ? this.a11y.disableEl(e) : this.a11y.enableEl(e));
                    }
                },
                updatePagination: function () {
                    var t = this,
                        e = t.params.a11y;
                    t.pagination &&
                    t.params.pagination.clickable &&
                    t.pagination.bullets &&
                    t.pagination.bullets.length &&
                    t.pagination.bullets.each(function (i, n) {
                        var r = (0, s.$)(n);
                        t.a11y.makeElFocusable(r), t.a11y.addElRole(r, "button"), t.a11y.addElLabel(r, e.paginationBulletMessage.replace(/{{index}}/, r.index() + 1));
                    });
                },
                init: function () {
                    this.$el.append(this.a11y.liveRegion);
                    var t = this.params.a11y,
                        e = void 0,
                        i = void 0;
                    this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl),
                    this.navigation && this.navigation.$prevEl && (i = this.navigation.$prevEl),
                    e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, t.nextSlideMessage), e.on("keydown", this.a11y.onEnterKey)),
                    i && (this.a11y.makeElFocusable(i), this.a11y.addElRole(i, "button"), this.a11y.addElLabel(i, t.prevSlideMessage), i.on("keydown", this.a11y.onEnterKey)),
                    this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey);
                },
                destroy: function () {
                    this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove();
                    var t = void 0,
                        e = void 0;
                    this.navigation && this.navigation.$nextEl && (t = this.navigation.$nextEl),
                    this.navigation && this.navigation.$prevEl && (e = this.navigation.$prevEl),
                    t && t.off("keydown", this.a11y.onEnterKey),
                    e && e.off("keydown", this.a11y.onEnterKey),
                    this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey);
                },
            },
            Z = {
                init: function () {
                    if (this.params.history) {
                        if (!o.window.history || !o.window.history.pushState) return (this.params.history.enabled = !1), void (this.params.hashNavigation.enabled = !0);
                        var t = this.history;
                        (t.initialized = !0),
                            (t.paths = Z.getPathValues()),
                        (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || o.window.addEventListener("popstate", this.history.setHistoryPopState));
                    }
                },
                destroy: function () {
                    this.params.history.replaceState || o.window.removeEventListener("popstate", this.history.setHistoryPopState);
                },
                setHistoryPopState: function () {
                    (this.history.paths = Z.getPathValues()), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1);
                },
                getPathValues: function () {
                    var t = o.window.location.pathname
                            .slice(1)
                            .split("/")
                            .filter(function (t) {
                                return "" !== t;
                            }),
                        e = t.length;
                    return {key: t[e - 2], value: t[e - 1]};
                },
                setHistory: function (t, e) {
                    if (this.history.initialized && this.params.history.enabled) {
                        var i = this.slides.eq(e),
                            n = Z.slugify(i.attr("data-history"));
                        o.window.location.pathname.includes(t) || (n = t + "/" + n);
                        var r = o.window.history.state;
                        (r && r.value === n) || (this.params.history.replaceState ? o.window.history.replaceState({value: n}, null, n) : o.window.history.pushState({value: n}, null, n));
                    }
                },
                slugify: function (t) {
                    return t
                        .toString()
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .replace(/[^\w-]+/g, "")
                        .replace(/--+/g, "-")
                        .replace(/^-+/, "")
                        .replace(/-+$/, "");
                },
                scrollToSlide: function (t, e, i) {
                    if (e)
                        for (var n = 0, r = this.slides.length; n < r; n += 1) {
                            var s = this.slides.eq(n);
                            if (Z.slugify(s.attr("data-history")) === e && !s.hasClass(this.params.slideDuplicateClass)) {
                                var o = s.index();
                                this.slideTo(o, t, i);
                            }
                        }
                    else this.slideTo(0, t, i);
                },
            },
            K = {
                onHashCange: function () {
                    var t = o.document.location.hash.replace("#", "");
                    t !== this.slides.eq(this.activeIndex).attr("data-hash") && this.slideTo(this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index());
                },
                setHash: function () {
                    if (this.hashNavigation.initialized && this.params.hashNavigation.enabled)
                        if (this.params.hashNavigation.replaceState && o.window.history && o.window.history.replaceState) o.window.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || "");
                        else {
                            var t = this.slides.eq(this.activeIndex),
                                e = t.attr("data-hash") || t.attr("data-history");
                            o.document.location.hash = e || "";
                        }
                },
                init: function () {
                    if (!(!this.params.hashNavigation.enabled || (this.params.history && this.params.history.enabled))) {
                        this.hashNavigation.initialized = !0;
                        var t = o.document.location.hash.replace("#", "");
                        if (t)
                            for (var e = 0, i = this.slides.length; e < i; e += 1) {
                                var n = this.slides.eq(e);
                                if ((n.attr("data-hash") || n.attr("data-history")) === t && !n.hasClass(this.params.slideDuplicateClass)) {
                                    var r = n.index();
                                    this.slideTo(r, 0, this.params.runCallbacksOnInit, !0);
                                }
                            }
                        this.params.hashNavigation.watchState && (0, s.$)(o.window).on("hashchange", this.hashNavigation.onHashCange);
                    }
                },
                destroy: function () {
                    this.params.hashNavigation.watchState && (0, s.$)(o.window).off("hashchange", this.hashNavigation.onHashCange);
                },
            },
            Q = {
                run: function () {
                    var t = this,
                        e = t.slides.eq(t.activeIndex),
                        i = t.params.autoplay.delay;
                    e.attr("data-swiper-autoplay") && (i = e.attr("data-swiper-autoplay") || t.params.autoplay.delay),
                        (t.autoplay.timeout = d.nextTick(function () {
                            t.params.autoplay.reverseDirection
                                ? t.params.loop
                                ? (t.loopFix(), t.slidePrev(t.params.speed, !0, !0), t.emit("autoplay"))
                                : t.isBeginning
                                    ? t.params.autoplay.stopOnLastSlide
                                        ? t.autoplay.stop()
                                        : (t.slideTo(t.slides.length - 1, t.params.speed, !0, !0), t.emit("autoplay"))
                                    : (t.slidePrev(t.params.speed, !0, !0), t.emit("autoplay"))
                                : t.params.loop
                                ? (t.loopFix(), t.slideNext(t.params.speed, !0, !0), t.emit("autoplay"))
                                : t.isEnd
                                    ? t.params.autoplay.stopOnLastSlide
                                        ? t.autoplay.stop()
                                        : (t.slideTo(0, t.params.speed, !0, !0), t.emit("autoplay"))
                                    : (t.slideNext(t.params.speed, !0, !0), t.emit("autoplay"));
                        }, i));
                },
                start: function () {
                    return "undefined" == typeof this.autoplay.timeout && !this.autoplay.running && ((this.autoplay.running = !0), this.emit("autoplayStart"), this.autoplay.run(), !0);
                },
                stop: function () {
                    return (
                        !!this.autoplay.running &&
                        "undefined" != typeof this.autoplay.timeout &&
                        (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), (this.autoplay.timeout = undefined)), (this.autoplay.running = !1), this.emit("autoplayStop"), !0)
                    );
                },
                pause: function (t) {
                    this.autoplay.running &&
                    (this.autoplay.paused ||
                        (this.autoplay.timeout && clearTimeout(this.autoplay.timeout),
                            (this.autoplay.paused = !0),
                            0 !== t && this.params.autoplay.waitForTransition
                                ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd))
                                : ((this.autoplay.paused = !1), this.autoplay.run())));
                },
            },
            J = {
                setTranslate: function () {
                    for (var t = this.slides, e = 0; e < t.length; e += 1) {
                        var i = this.slides.eq(e),
                            n = -i[0].swiperSlideOffset;
                        this.params.virtualTranslate || (n -= this.translate);
                        var r = 0;
                        this.isHorizontal() || ((r = n), (n = 0));
                        var s = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                        i.css({opacity: s}).transform("translate3d(" + n + "px, " + r + "px, 0px)");
                    }
                },
                setTransition: function (t) {
                    var e = this,
                        i = e.slides,
                        n = e.$wrapperEl;
                    if ((i.transition(t), e.params.virtualTranslate && 0 !== t)) {
                        var r = !1;
                        i.transitionEnd(function () {
                            if (!r && e && !e.destroyed) {
                                (r = !0), (e.animating = !1);
                                for (var t = ["webkitTransitionEnd", "transitionend"], i = 0; i < t.length; i += 1) n.trigger(t[i]);
                            }
                        });
                    }
                },
            },
            tt = {
                setTranslate: function () {
                    var t = this.$el,
                        e = this.$wrapperEl,
                        i = this.slides,
                        n = this.width,
                        r = this.height,
                        o = this.rtlTranslate,
                        a = this.size,
                        l = this.params.cubeEffect,
                        c = this.isHorizontal(),
                        u = this.virtual && this.params.virtual.enabled,
                        h = 0,
                        d = void 0;
                    l.shadow &&
                    (c
                        ? (0 === (d = e.find(".swiper-cube-shadow")).length && ((d = (0, s.$)('<div class="swiper-cube-shadow"></div>')), e.append(d)), d.css({height: n + "px"}))
                        : 0 === (d = t.find(".swiper-cube-shadow")).length && ((d = (0, s.$)('<div class="swiper-cube-shadow"></div>')), t.append(d)));
                    for (var f = 0; f < i.length; f += 1) {
                        var p = i.eq(f),
                            v = f;
                        u && (v = parseInt(p.attr("data-swiper-slide-index"), 10));
                        var m = 90 * v,
                            g = Math.floor(m / 360);
                        o && ((m = -m), (g = Math.floor(-m / 360)));
                        var y = Math.max(Math.min(p[0].progress, 1), -1),
                            w = 0,
                            b = 0,
                            _ = 0;
                        v % 4 == 0 ? ((w = 4 * -g * a), (_ = 0)) : (v - 1) % 4 == 0 ? ((w = 0), (_ = 4 * -g * a)) : (v - 2) % 4 == 0 ? ((w = a + 4 * g * a), (_ = a)) : (v - 3) % 4 == 0 && ((w = -a), (_ = 3 * a + 4 * a * g)),
                        o && (w = -w),
                        c || ((b = w), (w = 0));
                        var E = "rotateX(" + (c ? 0 : -m) + "deg) rotateY(" + (c ? m : 0) + "deg) translate3d(" + w + "px, " + b + "px, " + _ + "px)";
                        if ((y <= 1 && y > -1 && ((h = 90 * v + 90 * y), o && (h = 90 * -v - 90 * y)), p.transform(E), l.slideShadows)) {
                            var x = c ? p.find(".swiper-slide-shadow-left") : p.find(".swiper-slide-shadow-top"),
                                T = c ? p.find(".swiper-slide-shadow-right") : p.find(".swiper-slide-shadow-bottom");
                            0 === x.length && ((x = (0, s.$)('<div class="swiper-slide-shadow-' + (c ? "left" : "top") + '"></div>')), p.append(x)),
                            0 === T.length && ((T = (0, s.$)('<div class="swiper-slide-shadow-' + (c ? "right" : "bottom") + '"></div>')), p.append(T)),
                            x.length && (x[0].style.opacity = Math.max(-y, 0)),
                            T.length && (T[0].style.opacity = Math.max(y, 0));
                        }
                    }
                    if (
                        (e.css({
                            "-webkit-transform-origin": "50% 50% -" + a / 2 + "px",
                            "-moz-transform-origin": "50% 50% -" + a / 2 + "px",
                            "-ms-transform-origin": "50% 50% -" + a / 2 + "px",
                            "transform-origin": "50% 50% -" + a / 2 + "px",
                        }),
                            l.shadow)
                    )
                        if (c) d.transform("translate3d(0px, " + (n / 2 + l.shadowOffset) + "px, " + -n / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + l.shadowScale + ")");
                        else {
                            var S = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
                                M = 1.5 - (Math.sin((2 * S * Math.PI) / 360) / 2 + Math.cos((2 * S * Math.PI) / 360) / 2),
                                k = l.shadowScale,
                                L = l.shadowScale / M,
                                A = l.shadowOffset;
                            d.transform("scale3d(" + k + ", 1, " + L + ") translate3d(0px, " + (r / 2 + A) + "px, " + -r / 2 / L + "px) rotateX(-90deg)");
                        }
                    var P = C.isSafari || C.isUiWebView ? -a / 2 : 0;
                    e.transform("translate3d(0px,0," + P + "px) rotateX(" + (this.isHorizontal() ? 0 : h) + "deg) rotateY(" + (this.isHorizontal() ? -h : 0) + "deg)");
                },
                setTransition: function (t) {
                    var e = this.$el;
                    this.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t),
                    this.params.cubeEffect.shadow && !this.isHorizontal() && e.find(".swiper-cube-shadow").transition(t);
                },
            },
            et = {
                setTranslate: function () {
                    for (var t = this.slides, e = this.rtlTranslate, i = 0; i < t.length; i += 1) {
                        var n = t.eq(i),
                            r = n[0].progress;
                        this.params.flipEffect.limitRotation && (r = Math.max(Math.min(n[0].progress, 1), -1));
                        var o = -180 * r,
                            a = 0,
                            l = -n[0].swiperSlideOffset,
                            c = 0;
                        if ((this.isHorizontal() ? e && (o = -o) : ((c = l), (l = 0), (a = -o), (o = 0)), (n[0].style.zIndex = -Math.abs(Math.round(r)) + t.length), this.params.flipEffect.slideShadows)) {
                            var u = this.isHorizontal() ? n.find(".swiper-slide-shadow-left") : n.find(".swiper-slide-shadow-top"),
                                h = this.isHorizontal() ? n.find(".swiper-slide-shadow-right") : n.find(".swiper-slide-shadow-bottom");
                            0 === u.length && ((u = (0, s.$)('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>')), n.append(u)),
                            0 === h.length && ((h = (0, s.$)('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>')), n.append(h)),
                            u.length && (u[0].style.opacity = Math.max(-r, 0)),
                            h.length && (h[0].style.opacity = Math.max(r, 0));
                        }
                        n.transform("translate3d(" + l + "px, " + c + "px, 0px) rotateX(" + a + "deg) rotateY(" + o + "deg)");
                    }
                },
                setTransition: function (t) {
                    var e = this,
                        i = e.slides,
                        n = e.activeIndex,
                        r = e.$wrapperEl;
                    if ((i.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), e.params.virtualTranslate && 0 !== t)) {
                        var s = !1;
                        i.eq(n).transitionEnd(function () {
                            if (!s && e && !e.destroyed) {
                                (s = !0), (e.animating = !1);
                                for (var t = ["webkitTransitionEnd", "transitionend"], i = 0; i < t.length; i += 1) r.trigger(t[i]);
                            }
                        });
                    }
                },
            },
            it = {
                setTranslate: function () {
                    for (
                        var t = this.width,
                            e = this.height,
                            i = this.slides,
                            n = this.$wrapperEl,
                            r = this.slidesSizesGrid,
                            o = this.params.coverflowEffect,
                            a = this.isHorizontal(),
                            l = this.translate,
                            c = a ? t / 2 - l : e / 2 - l,
                            u = a ? o.rotate : -o.rotate,
                            h = o.depth,
                            d = 0,
                            p = i.length;
                        d < p;
                        d += 1
                    ) {
                        var v = i.eq(d),
                            m = r[d],
                            g = ((c - v[0].swiperSlideOffset - m / 2) / m) * o.modifier,
                            y = a ? u * g : 0,
                            w = a ? 0 : u * g,
                            b = -h * Math.abs(g),
                            _ = a ? 0 : o.stretch * g,
                            E = a ? o.stretch * g : 0;
                        Math.abs(E) < 0.001 && (E = 0), Math.abs(_) < 0.001 && (_ = 0), Math.abs(b) < 0.001 && (b = 0), Math.abs(y) < 0.001 && (y = 0), Math.abs(w) < 0.001 && (w = 0);
                        var x = "translate3d(" + E + "px," + _ + "px," + b + "px)  rotateX(" + w + "deg) rotateY(" + y + "deg)";
                        if ((v.transform(x), (v[0].style.zIndex = 1 - Math.abs(Math.round(g))), o.slideShadows)) {
                            var T = a ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
                                S = a ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                            0 === T.length && ((T = (0, s.$)('<div class="swiper-slide-shadow-' + (a ? "left" : "top") + '"></div>')), v.append(T)),
                            0 === S.length && ((S = (0, s.$)('<div class="swiper-slide-shadow-' + (a ? "right" : "bottom") + '"></div>')), v.append(S)),
                            T.length && (T[0].style.opacity = g > 0 ? g : 0),
                            S.length && (S[0].style.opacity = -g > 0 ? -g : 0);
                        }
                    }
                    (f.pointerEvents || f.prefixedPointerEvents) && (n[0].style.perspectiveOrigin = c + "px 50%");
                },
                setTransition: function (t) {
                    this.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t);
                },
            },
            nt = [
                P,
                z,
                I,
                O,
                $,
                F,
                B,
                {
                    name: "mousewheel",
                    params: {
                        mousewheel: {
                            enabled: !1,
                            releaseOnEdges: !1,
                            invert: !1,
                            forceToAxis: !1,
                            sensitivity: 1,
                            eventsTarged: "container"
                        }
                    },
                    create: function () {
                        d.extend(this, {
                            mousewheel: {
                                enabled: !1,
                                enable: W.enable.bind(this),
                                disable: W.disable.bind(this),
                                handle: W.handle.bind(this),
                                handleMouseEnter: W.handleMouseEnter.bind(this),
                                handleMouseLeave: W.handleMouseLeave.bind(this),
                                lastScrollTime: d.now(),
                            },
                        });
                    },
                    on: {
                        init: function () {
                            this.params.mousewheel.enabled && this.mousewheel.enable();
                        },
                        destroy: function () {
                            this.mousewheel.enabled && this.mousewheel.disable();
                        },
                    },
                },
                {
                    name: "navigation",
                    params: {
                        navigation: {
                            nextEl: null,
                            prevEl: null,
                            hideOnClick: !1,
                            disabledClass: "swiper-button-disabled",
                            hiddenClass: "swiper-button-hidden",
                            lockClass: "swiper-button-lock"
                        }
                    },
                    create: function () {
                        d.extend(this, {
                            navigation: {
                                init: H.init.bind(this),
                                update: H.update.bind(this),
                                destroy: H.destroy.bind(this)
                            }
                        });
                    },
                    on: {
                        init: function () {
                            this.navigation.init(), this.navigation.update();
                        },
                        toEdge: function () {
                            this.navigation.update();
                        },
                        fromEdge: function () {
                            this.navigation.update();
                        },
                        destroy: function () {
                            this.navigation.destroy();
                        },
                        click: function (t) {
                            var e = this.navigation,
                                i = e.$nextEl,
                                n = e.$prevEl;
                            !this.params.navigation.hideOnClick || (0, s.$)(t.target).is(n) || (0, s.$)(t.target).is(i) || (i && i.toggleClass(this.params.navigation.hiddenClass), n && n.toggleClass(this.params.navigation.hiddenClass));
                        },
                    },
                },
                {
                    name: "pagination",
                    params: {
                        pagination: {
                            el: null,
                            bulletElement: "span",
                            clickable: !1,
                            hideOnClick: !1,
                            renderBullet: null,
                            renderProgressbar: null,
                            renderFraction: null,
                            renderCustom: null,
                            progressbarOpposite: !1,
                            type: "bullets",
                            dynamicBullets: !1,
                            dynamicMainBullets: 1,
                            bulletClass: "swiper-pagination-bullet",
                            bulletActiveClass: "swiper-pagination-bullet-active",
                            modifierClass: "swiper-pagination-",
                            currentClass: "swiper-pagination-current",
                            totalClass: "swiper-pagination-total",
                            hiddenClass: "swiper-pagination-hidden",
                            progressbarFillClass: "swiper-pagination-progressbar-fill",
                            progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                            clickableClass: "swiper-pagination-clickable",
                            lockClass: "swiper-pagination-lock",
                        },
                    },
                    create: function () {
                        d.extend(this, {
                            pagination: {
                                init: R.init.bind(this),
                                render: R.render.bind(this),
                                update: R.update.bind(this),
                                destroy: R.destroy.bind(this),
                                dynamicBulletIndex: 0
                            }
                        });
                    },
                    on: {
                        init: function () {
                            this.pagination.init(), this.pagination.render(), this.pagination.update();
                        },
                        activeIndexChange: function () {
                            this.params.loop ? this.pagination.update() : "undefined" == typeof this.snapIndex && this.pagination.update();
                        },
                        snapIndexChange: function () {
                            this.params.loop || this.pagination.update();
                        },
                        slidesLengthChange: function () {
                            this.params.loop && (this.pagination.render(), this.pagination.update());
                        },
                        snapGridLengthChange: function () {
                            this.params.loop || (this.pagination.render(), this.pagination.update());
                        },
                        destroy: function () {
                            this.pagination.destroy();
                        },
                        click: function (t) {
                            this.params.pagination.el &&
                            this.params.pagination.hideOnClick &&
                            this.pagination.$el.length > 0 &&
                            !(0, s.$)(t.target).hasClass(this.params.pagination.bulletClass) &&
                            this.pagination.$el.toggleClass(this.params.pagination.hiddenClass);
                        },
                    },
                },
                {
                    name: "scrollbar",
                    params: {
                        scrollbar: {
                            el: null,
                            dragSize: "auto",
                            hide: !1,
                            draggable: !1,
                            snapOnRelease: !0,
                            lockClass: "swiper-scrollbar-lock",
                            dragClass: "swiper-scrollbar-drag"
                        }
                    },
                    create: function () {
                        d.extend(this, {
                            scrollbar: {
                                init: Y.init.bind(this),
                                destroy: Y.destroy.bind(this),
                                updateSize: Y.updateSize.bind(this),
                                setTranslate: Y.setTranslate.bind(this),
                                setTransition: Y.setTransition.bind(this),
                                enableDraggable: Y.enableDraggable.bind(this),
                                disableDraggable: Y.disableDraggable.bind(this),
                                setDragPosition: Y.setDragPosition.bind(this),
                                onDragStart: Y.onDragStart.bind(this),
                                onDragMove: Y.onDragMove.bind(this),
                                onDragEnd: Y.onDragEnd.bind(this),
                                isTouched: !1,
                                timeout: null,
                                dragTimeout: null,
                            },
                        });
                    },
                    on: {
                        init: function () {
                            this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate();
                        },
                        update: function () {
                            this.scrollbar.updateSize();
                        },
                        resize: function () {
                            this.scrollbar.updateSize();
                        },
                        observerUpdate: function () {
                            this.scrollbar.updateSize();
                        },
                        setTranslate: function () {
                            this.scrollbar.setTranslate();
                        },
                        setTransition: function (t) {
                            this.scrollbar.setTransition(t);
                        },
                        destroy: function () {
                            this.scrollbar.destroy();
                        },
                    },
                },
                {
                    name: "parallax",
                    params: {parallax: {enabled: !1}},
                    create: function () {
                        d.extend(this, {
                            parallax: {
                                setTransform: X.setTransform.bind(this),
                                setTranslate: X.setTranslate.bind(this),
                                setTransition: X.setTransition.bind(this)
                            }
                        });
                    },
                    on: {
                        beforeInit: function () {
                            this.params.parallax.enabled && (this.params.watchSlidesProgress = !0);
                        },
                        init: function () {
                            this.params.parallax && this.parallax.setTranslate();
                        },
                        setTranslate: function () {
                            this.params.parallax && this.parallax.setTranslate();
                        },
                        setTransition: function (t) {
                            this.params.parallax && this.parallax.setTransition(t);
                        },
                    },
                },
                {
                    name: "zoom",
                    params: {
                        zoom: {
                            enabled: !1,
                            maxRatio: 3,
                            minRatio: 1,
                            toggle: !0,
                            containerClass: "swiper-zoom-container",
                            zoomedSlideClass: "swiper-slide-zoomed"
                        }
                    },
                    create: function () {
                        var t = this,
                            e = {
                                enabled: !1,
                                scale: 1,
                                currentScale: 1,
                                isScaling: !1,
                                gesture: {
                                    $slideEl: undefined,
                                    slideWidth: undefined,
                                    slideHeight: undefined,
                                    $imageEl: undefined,
                                    $imageWrapEl: undefined,
                                    maxRatio: 3
                                },
                                image: {
                                    isTouched: undefined,
                                    isMoved: undefined,
                                    currentX: undefined,
                                    currentY: undefined,
                                    minX: undefined,
                                    minY: undefined,
                                    maxX: undefined,
                                    maxY: undefined,
                                    width: undefined,
                                    height: undefined,
                                    startX: undefined,
                                    startY: undefined,
                                    touchesStart: {},
                                    touchesCurrent: {},
                                },
                                velocity: {
                                    x: undefined,
                                    y: undefined,
                                    prevPositionX: undefined,
                                    prevPositionY: undefined,
                                    prevTime: undefined
                                },
                            };
                        "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (i) {
                            e[i] = V[i].bind(t);
                        }),
                            d.extend(t, {zoom: e});
                    },
                    on: {
                        init: function () {
                            this.params.zoom.enabled && this.zoom.enable();
                        },
                        destroy: function () {
                            this.zoom.disable();
                        },
                        touchStart: function (t) {
                            this.zoom.enabled && this.zoom.onTouchStart(t);
                        },
                        touchEnd: function (t) {
                            this.zoom.enabled && this.zoom.onTouchEnd(t);
                        },
                        doubleTap: function (t) {
                            this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(t);
                        },
                        transitionEnd: function () {
                            this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd();
                        },
                    },
                },
                {
                    name: "lazy",
                    params: {
                        lazy: {
                            enabled: !1,
                            loadPrevNext: !1,
                            loadPrevNextAmount: 1,
                            loadOnTransitionStart: !1,
                            elementClass: "swiper-lazy",
                            loadingClass: "swiper-lazy-loading",
                            loadedClass: "swiper-lazy-loaded",
                            preloaderClass: "swiper-lazy-preloader",
                        },
                    },
                    create: function () {
                        d.extend(this, {
                            lazy: {
                                initialImageLoaded: !1,
                                load: G.load.bind(this),
                                loadInSlide: G.loadInSlide.bind(this)
                            }
                        });
                    },
                    on: {
                        beforeInit: function () {
                            this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1);
                        },
                        init: function () {
                            this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load();
                        },
                        scroll: function () {
                            this.params.freeMode && !this.params.freeModeSticky && this.lazy.load();
                        },
                        resize: function () {
                            this.params.lazy.enabled && this.lazy.load();
                        },
                        scrollbarDragMove: function () {
                            this.params.lazy.enabled && this.lazy.load();
                        },
                        transitionStart: function () {
                            this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || (!this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded)) && this.lazy.load();
                        },
                        transitionEnd: function () {
                            this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load();
                        },
                    },
                },
                {
                    name: "controller",
                    params: {controller: {control: undefined, inverse: !1, by: "slide"}},
                    create: function () {
                        d.extend(this, {
                            controller: {
                                control: this.params.controller.control,
                                getInterpolateFunction: q.getInterpolateFunction.bind(this),
                                setTranslate: q.setTranslate.bind(this),
                                setTransition: q.setTransition.bind(this)
                            },
                        });
                    },
                    on: {
                        update: function () {
                            this.controller.control && this.controller.spline && ((this.controller.spline = undefined), delete this.controller.spline);
                        },
                        resize: function () {
                            this.controller.control && this.controller.spline && ((this.controller.spline = undefined), delete this.controller.spline);
                        },
                        observerUpdate: function () {
                            this.controller.control && this.controller.spline && ((this.controller.spline = undefined), delete this.controller.spline);
                        },
                        setTranslate: function (t, e) {
                            this.controller.control && this.controller.setTranslate(t, e);
                        },
                        setTransition: function (t, e) {
                            this.controller.control && this.controller.setTransition(t, e);
                        },
                    },
                },
                {
                    name: "a11y",
                    params: {
                        a11y: {
                            enabled: !0,
                            notificationClass: "swiper-notification",
                            prevSlideMessage: "Previous slide",
                            nextSlideMessage: "Next slide",
                            firstSlideMessage: "This is the first slide",
                            lastSlideMessage: "This is the last slide",
                            paginationBulletMessage: "Go to slide {{index}}",
                        },
                    },
                    create: function () {
                        var t = this;
                        d.extend(t, {a11y: {liveRegion: (0, s.$)('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')}}),
                            Object.keys(U).forEach(function (e) {
                                t.a11y[e] = U[e].bind(t);
                            });
                    },
                    on: {
                        init: function () {
                            this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation());
                        },
                        toEdge: function () {
                            this.params.a11y.enabled && this.a11y.updateNavigation();
                        },
                        fromEdge: function () {
                            this.params.a11y.enabled && this.a11y.updateNavigation();
                        },
                        paginationUpdate: function () {
                            this.params.a11y.enabled && this.a11y.updatePagination();
                        },
                        destroy: function () {
                            this.params.a11y.enabled && this.a11y.destroy();
                        },
                    },
                },
                {
                    name: "history",
                    params: {history: {enabled: !1, replaceState: !1, key: "slides"}},
                    create: function () {
                        d.extend(this, {
                            history: {
                                init: Z.init.bind(this),
                                setHistory: Z.setHistory.bind(this),
                                setHistoryPopState: Z.setHistoryPopState.bind(this),
                                scrollToSlide: Z.scrollToSlide.bind(this),
                                destroy: Z.destroy.bind(this)
                            },
                        });
                    },
                    on: {
                        init: function () {
                            this.params.history.enabled && this.history.init();
                        },
                        destroy: function () {
                            this.params.history.enabled && this.history.destroy();
                        },
                        transitionEnd: function () {
                            this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex);
                        },
                    },
                },
                {
                    name: "hash-navigation",
                    params: {hashNavigation: {enabled: !1, replaceState: !1, watchState: !1}},
                    create: function () {
                        d.extend(this, {
                            hashNavigation: {
                                initialized: !1,
                                init: K.init.bind(this),
                                destroy: K.destroy.bind(this),
                                setHash: K.setHash.bind(this),
                                onHashCange: K.onHashCange.bind(this)
                            }
                        });
                    },
                    on: {
                        init: function () {
                            this.params.hashNavigation.enabled && this.hashNavigation.init();
                        },
                        destroy: function () {
                            this.params.hashNavigation.enabled && this.hashNavigation.destroy();
                        },
                        transitionEnd: function () {
                            this.hashNavigation.initialized && this.hashNavigation.setHash();
                        },
                    },
                },
                {
                    name: "autoplay",
                    params: {
                        autoplay: {
                            enabled: !1,
                            delay: 3e3,
                            waitForTransition: !0,
                            disableOnInteraction: !0,
                            stopOnLastSlide: !1,
                            reverseDirection: !1
                        }
                    },
                    create: function () {
                        var t = this;
                        d.extend(t, {
                            autoplay: {
                                running: !1,
                                paused: !1,
                                run: Q.run.bind(t),
                                start: Q.start.bind(t),
                                stop: Q.stop.bind(t),
                                pause: Q.pause.bind(t),
                                onTransitionEnd: function (e) {
                                    t &&
                                    !t.destroyed &&
                                    t.$wrapperEl &&
                                    e.target === this &&
                                    (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd),
                                        t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd),
                                        (t.autoplay.paused = !1),
                                        t.autoplay.running ? t.autoplay.run() : t.autoplay.stop());
                                },
                            },
                        });
                    },
                    on: {
                        init: function () {
                            this.params.autoplay.enabled && this.autoplay.start();
                        },
                        beforeTransitionStart: function (t, e) {
                            this.autoplay.running && (e || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(t) : this.autoplay.stop());
                        },
                        sliderFirstMove: function () {
                            this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause());
                        },
                        destroy: function () {
                            this.autoplay.running && this.autoplay.stop();
                        },
                    },
                },
                {
                    name: "effect-fade",
                    params: {fadeEffect: {crossFade: !1}},
                    create: function () {
                        d.extend(this, {
                            fadeEffect: {
                                setTranslate: J.setTranslate.bind(this),
                                setTransition: J.setTransition.bind(this)
                            }
                        });
                    },
                    on: {
                        beforeInit: function () {
                            if ("fade" === this.params.effect) {
                                this.classNames.push(this.params.containerModifierClass + "fade");
                                var t = {
                                    slidesPerView: 1,
                                    slidesPerColumn: 1,
                                    slidesPerGroup: 1,
                                    watchSlidesProgress: !0,
                                    spaceBetween: 0,
                                    virtualTranslate: !0
                                };
                                d.extend(this.params, t), d.extend(this.originalParams, t);
                            }
                        },
                        setTranslate: function () {
                            "fade" === this.params.effect && this.fadeEffect.setTranslate();
                        },
                        setTransition: function (t) {
                            "fade" === this.params.effect && this.fadeEffect.setTransition(t);
                        },
                    },
                },
                {
                    name: "effect-cube",
                    params: {cubeEffect: {slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: 0.94}},
                    create: function () {
                        d.extend(this, {
                            cubeEffect: {
                                setTranslate: tt.setTranslate.bind(this),
                                setTransition: tt.setTransition.bind(this)
                            }
                        });
                    },
                    on: {
                        beforeInit: function () {
                            if ("cube" === this.params.effect) {
                                this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d");
                                var t = {
                                    slidesPerView: 1,
                                    slidesPerColumn: 1,
                                    slidesPerGroup: 1,
                                    watchSlidesProgress: !0,
                                    resistanceRatio: 0,
                                    spaceBetween: 0,
                                    centeredSlides: !1,
                                    virtualTranslate: !0
                                };
                                d.extend(this.params, t), d.extend(this.originalParams, t);
                            }
                        },
                        setTranslate: function () {
                            "cube" === this.params.effect && this.cubeEffect.setTranslate();
                        },
                        setTransition: function (t) {
                            "cube" === this.params.effect && this.cubeEffect.setTransition(t);
                        },
                    },
                },
                {
                    name: "effect-flip",
                    params: {flipEffect: {slideShadows: !0, limitRotation: !0}},
                    create: function () {
                        d.extend(this, {
                            flipEffect: {
                                setTranslate: et.setTranslate.bind(this),
                                setTransition: et.setTransition.bind(this)
                            }
                        });
                    },
                    on: {
                        beforeInit: function () {
                            if ("flip" === this.params.effect) {
                                this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d");
                                var t = {
                                    slidesPerView: 1,
                                    slidesPerColumn: 1,
                                    slidesPerGroup: 1,
                                    watchSlidesProgress: !0,
                                    spaceBetween: 0,
                                    virtualTranslate: !0
                                };
                                d.extend(this.params, t), d.extend(this.originalParams, t);
                            }
                        },
                        setTranslate: function () {
                            "flip" === this.params.effect && this.flipEffect.setTranslate();
                        },
                        setTransition: function (t) {
                            "flip" === this.params.effect && this.flipEffect.setTransition(t);
                        },
                    },
                },
                {
                    name: "effect-coverflow",
                    params: {coverflowEffect: {rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0}},
                    create: function () {
                        d.extend(this, {
                            coverflowEffect: {
                                setTranslate: it.setTranslate.bind(this),
                                setTransition: it.setTransition.bind(this)
                            }
                        });
                    },
                    on: {
                        beforeInit: function () {
                            "coverflow" === this.params.effect &&
                            (this.classNames.push(this.params.containerModifierClass + "coverflow"),
                                this.classNames.push(this.params.containerModifierClass + "3d"),
                                (this.params.watchSlidesProgress = !0),
                                (this.originalParams.watchSlidesProgress = !0));
                        },
                        setTranslate: function () {
                            "coverflow" === this.params.effect && this.coverflowEffect.setTranslate();
                        },
                        setTransition: function (t) {
                            "coverflow" === this.params.effect && this.coverflowEffect.setTransition(t);
                        },
                    },
                },
            ];
        "undefined" == typeof A.use && ((A.use = A.Class.use), (A.installModule = A.Class.installModule)), A.use(nt), (e["default"] = A);
    },
    function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}),
            (e.scroll = e.resize = e.touchmove = e.touchend = e.touchstart = e.mouseover = e.mouseout = e.mouseleave = e.mouseenter = e.mouseup = e.mousemove = e.mousedown = e.change = e.submit = e.keypress = e.keydown = e.keyup = e.focusout = e.focusin = e.focus = e.blur = e.click = e.stop = e.animate = e.scrollLeft = e.scrollTop = e.scrollTo = e.empty = e.add = e.detach = e.remove = e.children = e.find = e.closest = e.parents = e.parent = e.siblings = e.prevAll = e.prev = e.nextAll = e.next = e.insertAfter = e.insertBefore = e.prependTo = e.prepend = e.appendTo = e.append = e.eq = e.index = e.indexOf = e.is = e.text = e.html = e.map = e.filter = e.forEach = e.each = e.toArray = e.css = e.styles = e.show = e.hide = e.offset = e.outerHeight = e.height = e.outerWidth = e.width = e.animationEnd = e.transitionEnd = e.trigger = e.once = e.off = e.on = e.transition = e.transform = e.val = e.dataset = e.removeData = e.data = e.prop = e.removeAttr = e.attr = e.toggleClass = e.hasClass = e.removeClass = e.addClass = e.$ = undefined);
        var n = i(93);
        var r = function u(t) {
            !(function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            })(this, u);
            for (var e = 0; e < t.length; e += 1) this[e] = t[e];
            return (this.length = t.length), this;
        };

        function s(t, e) {
            var i = [],
                s = 0;
            if (t && !e && t instanceof r) return t;
            if (t)
                if ("string" == typeof t) {
                    var o = void 0,
                        a = void 0,
                        l = t.trim();
                    if (l.indexOf("<") >= 0 && l.indexOf(">") >= 0) {
                        var c = "div";
                        for (
                            0 === l.indexOf("<li") && (c = "ul"),
                            0 === l.indexOf("<tr") && (c = "tbody"),
                            (0 !== l.indexOf("<td") && 0 !== l.indexOf("<th")) || (c = "tr"),
                            0 === l.indexOf("<tbody") && (c = "table"),
                            0 === l.indexOf("<option") && (c = "select"),
                                (a = n.document.createElement(c)).innerHTML = l,
                                s = 0;
                            s < a.childNodes.length;
                            s += 1
                        )
                            i.push(a.childNodes[s]);
                    } else for (o = e || "#" !== t[0] || t.match(/[ .<>:~]/) ? (e || n.document).querySelectorAll(t.trim()) : [n.document.getElementById(t.trim().split("#")[1])], s = 0; s < o.length; s += 1) o[s] && i.push(o[s]);
                } else if (t.nodeType || t === n.window || t === n.document) i.push(t);
                else if (t.length > 0 && t[0].nodeType) for (s = 0; s < t.length; s += 1) i.push(t[s]);
            return new r(i);
        }

        function o(t) {
            for (var e = [], i = 0; i < t.length; i += 1) -1 === e.indexOf(t[i]) && e.push(t[i]);
            return e;
        }

        function a(t) {
            return n.window.requestAnimationFrame ? n.window.requestAnimationFrame(t) : n.window.webkitRequestAnimationFrame ? n.window.webkitRequestAnimationFrame(t) : n.window.setTimeout(t, 1e3 / 60);
        }

        (s.fn = r.prototype), (s.Class = r), (s.Dom7 = r);
        var l = "resize scroll".split(" ");

        function c(t) {
            for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
            if ("undefined" == typeof i[0]) {
                for (var r = 0; r < this.length; r += 1) l.indexOf(t) < 0 && (t in this[r] ? this[r][t]() : s(this[r]).trigger(t));
                return this;
            }
            return this.on.apply(this, [t].concat(i));
        }

        (e.$ = s),
            (e.addClass = function (t) {
                if (void 0 === t) return this;
                for (var e = t.split(" "), i = 0; i < e.length; i += 1) for (var n = 0; n < this.length; n += 1) "undefined" != typeof this[n].classList && this[n].classList.add(e[i]);
                return this;
            }),
            (e.removeClass = function (t) {
                for (var e = t.split(" "), i = 0; i < e.length; i += 1) for (var n = 0; n < this.length; n += 1) "undefined" != typeof this[n].classList && this[n].classList.remove(e[i]);
                return this;
            }),
            (e.hasClass = function (t) {
                return !!this[0] && this[0].classList.contains(t);
            }),
            (e.toggleClass = function (t) {
                for (var e = t.split(" "), i = 0; i < e.length; i += 1) for (var n = 0; n < this.length; n += 1) "undefined" != typeof this[n].classList && this[n].classList.toggle(e[i]);
                return this;
            }),
            (e.attr = function (t, e) {
                if (1 === arguments.length && "string" == typeof t) return this[0] ? this[0].getAttribute(t) : undefined;
                for (var i = 0; i < this.length; i += 1)
                    if (2 === arguments.length) this[i].setAttribute(t, e);
                    else for (var n in t) (this[i][n] = t[n]), this[i].setAttribute(n, t[n]);
                return this;
            }),
            (e.removeAttr = function (t) {
                for (var e = 0; e < this.length; e += 1) this[e].removeAttribute(t);
                return this;
            }),
            (e.prop = function (t, e) {
                if (1 !== arguments.length || "string" != typeof t) {
                    for (var i = 0; i < this.length; i += 1)
                        if (2 === arguments.length) this[i][t] = e;
                        else for (var n in t) this[i][n] = t[n];
                    return this;
                }
                if (this[0]) return this[0][t];
            }),
            (e.data = function (t, e) {
                var i = void 0;
                if (void 0 === e) {
                    if ((i = this[0])) {
                        if (i.dom7ElementDataStorage && t in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[t];
                        var n = i.getAttribute("data-" + t);
                        return n || undefined;
                    }
                    return undefined;
                }
                for (var r = 0; r < this.length; r += 1) (i = this[r]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), (i.dom7ElementDataStorage[t] = e);
                return this;
            }),
            (e.removeData = function (t) {
                for (var e = 0; e < this.length; e += 1) {
                    var i = this[e];
                    i.dom7ElementDataStorage && i.dom7ElementDataStorage[t] && ((i.dom7ElementDataStorage[t] = null), delete i.dom7ElementDataStorage[t]);
                }
            }),
            (e.dataset = function () {
                var t = this[0];
                if (!t) return undefined;
                var e,
                    i = {};
                if (t.dataset) for (var n in t.dataset) i[n] = t.dataset[n];
                else
                    for (var r = 0; r < t.attributes.length; r += 1) {
                        var s = t.attributes[r];
                        s.name.indexOf("data-") >= 0 &&
                        (i[
                            ((e = s.name.split("data-")[1]),
                                e.toLowerCase().replace(/-(.)/g, function (t, e) {
                                    return e.toUpperCase();
                                }))
                            ] = s.value);
                    }
                for (var o in i) "false" === i[o] ? (i[o] = !1) : "true" === i[o] ? (i[o] = !0) : parseFloat(i[o]) === 1 * i[o] && (i[o] *= 1);
                return i;
            }),
            (e.val = function (t) {
                if (void 0 === t) {
                    if (this[0]) {
                        if (this[0].multiple && "select" === this[0].nodeName.toLowerCase()) {
                            for (var e = [], i = 0; i < this[0].selectedOptions.length; i += 1) e.push(this[0].selectedOptions[i].value);
                            return e;
                        }
                        return this[0].value;
                    }
                    return undefined;
                }
                for (var n = 0; n < this.length; n += 1) {
                    var r = this[n];
                    if (Array.isArray(t) && r.multiple && "select" === r.nodeName.toLowerCase()) for (var s = 0; s < r.options.length; s += 1) r.options[s].selected = t.indexOf(r.options[s].value) >= 0;
                    else r.value = t;
                }
                return this;
            }),
            (e.transform = function (t) {
                for (var e = 0; e < this.length; e += 1) {
                    var i = this[e].style;
                    (i.webkitTransform = t), (i.transform = t);
                }
                return this;
            }),
            (e.transition = function (t) {
                "string" != typeof t && (t += "ms");
                for (var e = 0; e < this.length; e += 1) {
                    var i = this[e].style;
                    (i.webkitTransitionDuration = t), (i.transitionDuration = t);
                }
                return this;
            }),
            (e.on = function () {
                for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                var n = e[0],
                    r = e[1],
                    o = e[2],
                    a = e[3];

                function l(t) {
                    var e = t.target;
                    if (e) {
                        var i = t.target.dom7EventData || [];
                        if ((i.indexOf(t) < 0 && i.unshift(t), s(e).is(r))) o.apply(e, i);
                        else for (var n = s(e).parents(), a = 0; a < n.length; a += 1) s(n[a]).is(r) && o.apply(n[a], i);
                    }
                }

                function c(t) {
                    var e = (t && t.target && t.target.dom7EventData) || [];
                    e.indexOf(t) < 0 && e.unshift(t), o.apply(this, e);
                }

                "function" == typeof e[1] && ((n = e[0]), (o = e[1]), (a = e[2]), (r = undefined)), a || (a = !1);
                for (var u = n.split(" "), h = void 0, d = 0; d < this.length; d += 1) {
                    var f = this[d];
                    if (r)
                        for (h = 0; h < u.length; h += 1) {
                            var p = u[h];
                            f.dom7LiveListeners || (f.dom7LiveListeners = {}), f.dom7LiveListeners[p] || (f.dom7LiveListeners[p] = []), f.dom7LiveListeners[p].push({
                                listener: o,
                                proxyListener: l
                            }), f.addEventListener(p, l, a);
                        }
                    else
                        for (h = 0; h < u.length; h += 1) {
                            var v = u[h];
                            f.dom7Listeners || (f.dom7Listeners = {}), f.dom7Listeners[v] || (f.dom7Listeners[v] = []), f.dom7Listeners[v].push({
                                listener: o,
                                proxyListener: c
                            }), f.addEventListener(v, c, a);
                        }
                }
                return this;
            }),
            (e.off = function () {
                for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                var n = e[0],
                    r = e[1],
                    s = e[2],
                    o = e[3];
                "function" == typeof e[1] && ((n = e[0]), (s = e[1]), (o = e[2]), (r = undefined)), o || (o = !1);
                for (var a = n.split(" "), l = 0; l < a.length; l += 1)
                    for (var c = a[l], u = 0; u < this.length; u += 1) {
                        var h = this[u],
                            d = void 0;
                        !r && h.dom7Listeners ? (d = h.dom7Listeners[c]) : r && h.dom7LiveListeners && (d = h.dom7LiveListeners[c]);
                        for (var f = d.length - 1; f >= 0; f -= 1) {
                            var p = d[f];
                            s && p.listener === s ? (h.removeEventListener(c, p.proxyListener, o), d.splice(f, 1)) : s || (h.removeEventListener(c, p.proxyListener, o), d.splice(f, 1));
                        }
                    }
                return this;
            }),
            (e.once = function () {
                for (var t = this, e = arguments.length, i = Array(e), n = 0; n < e; n++) i[n] = arguments[n];
                var r = i[0],
                    s = i[1],
                    o = i[2],
                    a = i[3];
                return (
                    "function" == typeof i[1] && ((r = i[0]), (o = i[1]), (a = i[2]), (s = undefined)),
                        t.on(
                            r,
                            s,
                            function l() {
                                for (var e = arguments.length, i = Array(e), n = 0; n < e; n++) i[n] = arguments[n];
                                o.apply(this, i), t.off(r, s, l, a);
                            },
                            a
                        )
                );
            }),
            (e.trigger = function () {
                for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                for (var r = e[0].split(" "), s = e[1], o = 0; o < r.length; o += 1)
                    for (var a = r[o], l = 0; l < this.length; l += 1) {
                        var c = this[l],
                            u = void 0;
                        try {
                            u = new n.window.CustomEvent(a, {detail: s, bubbles: !0, cancelable: !0});
                        } catch (h) {
                            (u = n.document.createEvent("Event")).initEvent(a, !0, !0), (u.detail = s);
                        }
                        (c.dom7EventData = e.filter(function (t, e) {
                            return e > 0;
                        })),
                            c.dispatchEvent(u),
                            (c.dom7EventData = []),
                            delete c.dom7EventData;
                    }
                return this;
            }),
            (e.transitionEnd = function (t) {
                var e = ["webkitTransitionEnd", "transitionend"],
                    i = this,
                    n = void 0;

                function r(s) {
                    if (s.target === this) for (t.call(this, s), n = 0; n < e.length; n += 1) i.off(e[n], r);
                }

                if (t) for (n = 0; n < e.length; n += 1) i.on(e[n], r);
                return this;
            }),
            (e.animationEnd = function (t) {
                var e = ["webkitAnimationEnd", "animationend"],
                    i = this,
                    n = void 0;

                function r(s) {
                    if (s.target === this) for (t.call(this, s), n = 0; n < e.length; n += 1) i.off(e[n], r);
                }

                if (t) for (n = 0; n < e.length; n += 1) i.on(e[n], r);
                return this;
            }),
            (e.width = function () {
                return this[0] === n.window ? n.window.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null;
            }),
            (e.outerWidth = function (t) {
                if (this.length > 0) {
                    if (t) {
                        var e = this.styles();
                        return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"));
                    }
                    return this[0].offsetWidth;
                }
                return null;
            }),
            (e.height = function () {
                return this[0] === n.window ? n.window.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null;
            }),
            (e.outerHeight = function (t) {
                if (this.length > 0) {
                    if (t) {
                        var e = this.styles();
                        return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"));
                    }
                    return this[0].offsetHeight;
                }
                return null;
            }),
            (e.offset = function () {
                if (this.length > 0) {
                    var t = this[0],
                        e = t.getBoundingClientRect(),
                        i = n.document.body,
                        r = t.clientTop || i.clientTop || 0,
                        s = t.clientLeft || i.clientLeft || 0,
                        o = t === n.window ? n.window.scrollY : t.scrollTop,
                        a = t === n.window ? n.window.scrollX : t.scrollLeft;
                    return {top: e.top + o - r, left: e.left + a - s};
                }
                return null;
            }),
            (e.hide = function () {
                for (var t = 0; t < this.length; t += 1) this[t].style.display = "none";
                return this;
            }),
            (e.show = function () {
                for (var t = 0; t < this.length; t += 1) {
                    var e = this[t];
                    "none" === e.style.display && (e.style.display = ""), "none" === n.window.getComputedStyle(e, null).getPropertyValue("display") && (e.style.display = "block");
                }
                return this;
            }),
            (e.styles = function () {
                return this[0] ? n.window.getComputedStyle(this[0], null) : {};
            }),
            (e.css = function (t, e) {
                var i = void 0;
                if (1 === arguments.length) {
                    if ("string" != typeof t) {
                        for (i = 0; i < this.length; i += 1) for (var r in t) this[i].style[r] = t[r];
                        return this;
                    }
                    if (this[0]) return n.window.getComputedStyle(this[0], null).getPropertyValue(t);
                }
                if (2 === arguments.length && "string" == typeof t) {
                    for (i = 0; i < this.length; i += 1) this[i].style[t] = e;
                    return this;
                }
                return this;
            }),
            (e.toArray = function () {
                for (var t = [], e = 0; e < this.length; e += 1) t.push(this[e]);
                return t;
            }),
            (e.each = function (t) {
                if (!t) return this;
                for (var e = 0; e < this.length; e += 1) if (!1 === t.call(this[e], e, this[e])) return this;
                return this;
            }),
            (e.forEach = function (t) {
                if (!t) return this;
                for (var e = 0; e < this.length; e += 1) if (!1 === t.call(this[e], this[e], e)) return this;
                return this;
            }),
            (e.filter = function (t) {
                for (var e = [], i = 0; i < this.length; i += 1) t.call(this[i], i, this[i]) && e.push(this[i]);
                return new r(e);
            }),
            (e.map = function (t) {
                for (var e = [], i = 0; i < this.length; i += 1) e.push(t.call(this[i], i, this[i]));
                return new r(e);
            }),
            (e.html = function (t) {
                if (void 0 === t) return this[0] ? this[0].innerHTML : undefined;
                for (var e = 0; e < this.length; e += 1) this[e].innerHTML = t;
                return this;
            }),
            (e.text = function (t) {
                if (void 0 === t) return this[0] ? this[0].textContent.trim() : null;
                for (var e = 0; e < this.length; e += 1) this[e].textContent = t;
                return this;
            }),
            (e.is = function (t) {
                var e = this[0],
                    i = void 0,
                    o = void 0;
                if (!e || void 0 === t) return !1;
                if ("string" == typeof t) {
                    if (e.matches) return e.matches(t);
                    if (e.webkitMatchesSelector) return e.webkitMatchesSelector(t);
                    if (e.msMatchesSelector) return e.msMatchesSelector(t);
                    for (i = s(t), o = 0; o < i.length; o += 1) if (i[o] === e) return !0;
                    return !1;
                }
                if (t === n.document) return e === n.document;
                if (t === n.window) return e === n.window;
                if (t.nodeType || t instanceof r) {
                    for (i = t.nodeType ? [t] : t, o = 0; o < i.length; o += 1) if (i[o] === e) return !0;
                    return !1;
                }
                return !1;
            }),
            (e.indexOf = function (t) {
                for (var e = 0; e < this.length; e += 1) if (this[e] === t) return e;
                return -1;
            }),
            (e.index = function () {
                var t = this[0],
                    e = void 0;
                if (t) {
                    for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                    return e;
                }
                return undefined;
            }),
            (e.eq = function (t) {
                if (void 0 === t) return this;
                var e = this.length,
                    i = void 0;
                return new r(t > e - 1 ? [] : t < 0 ? ((i = e + t) < 0 ? [] : [this[i]]) : [this[t]]);
            }),
            (e.append = function () {
                for (var t = void 0, e = 0; e < arguments.length; e += 1) {
                    t = arguments.length <= e ? undefined : arguments[e];
                    for (var i = 0; i < this.length; i += 1)
                        if ("string" == typeof t) {
                            var s = n.document.createElement("div");
                            for (s.innerHTML = t; s.firstChild;) this[i].appendChild(s.firstChild);
                        } else if (t instanceof r) for (var o = 0; o < t.length; o += 1) this[i].appendChild(t[o]);
                        else this[i].appendChild(t);
                }
                return this;
            }),
            (e.appendTo = function (t) {
                return s(t).append(this), this;
            }),
            (e.prepend = function (t) {
                var e = void 0,
                    i = void 0;
                for (e = 0; e < this.length; e += 1)
                    if ("string" == typeof t) {
                        var s = n.document.createElement("div");
                        for (s.innerHTML = t, i = s.childNodes.length - 1; i >= 0; i -= 1) this[e].insertBefore(s.childNodes[i], this[e].childNodes[0]);
                    } else if (t instanceof r) for (i = 0; i < t.length; i += 1) this[e].insertBefore(t[i], this[e].childNodes[0]);
                    else this[e].insertBefore(t, this[e].childNodes[0]);
                return this;
            }),
            (e.prependTo = function (t) {
                return s(t).prepend(this), this;
            }),
            (e.insertBefore = function (t) {
                for (var e = s(t), i = 0; i < this.length; i += 1)
                    if (1 === e.length) e[0].parentNode.insertBefore(this[i], e[0]);
                    else if (e.length > 1) for (var n = 0; n < e.length; n += 1) e[n].parentNode.insertBefore(this[i].cloneNode(!0), e[n]);
            }),
            (e.insertAfter = function (t) {
                for (var e = s(t), i = 0; i < this.length; i += 1)
                    if (1 === e.length) e[0].parentNode.insertBefore(this[i], e[0].nextSibling);
                    else if (e.length > 1) for (var n = 0; n < e.length; n += 1) e[n].parentNode.insertBefore(this[i].cloneNode(!0), e[n].nextSibling);
            }),
            (e.next = function (t) {
                return this.length > 0
                    ? t
                        ? this[0].nextElementSibling && s(this[0].nextElementSibling).is(t)
                            ? new r([this[0].nextElementSibling])
                            : new r([])
                        : this[0].nextElementSibling
                            ? new r([this[0].nextElementSibling])
                            : new r([])
                    : new r([]);
            }),
            (e.nextAll = function (t) {
                var e = [],
                    i = this[0];
                if (!i) return new r([]);
                for (; i.nextElementSibling;) {
                    var n = i.nextElementSibling;
                    t ? s(n).is(t) && e.push(n) : e.push(n), (i = n);
                }
                return new r(e);
            }),
            (e.prev = function (t) {
                if (this.length > 0) {
                    var e = this[0];
                    return t ? (e.previousElementSibling && s(e.previousElementSibling).is(t) ? new r([e.previousElementSibling]) : new r([])) : e.previousElementSibling ? new r([e.previousElementSibling]) : new r([]);
                }
                return new r([]);
            }),
            (e.prevAll = function (t) {
                var e = [],
                    i = this[0];
                if (!i) return new r([]);
                for (; i.previousElementSibling;) {
                    var n = i.previousElementSibling;
                    t ? s(n).is(t) && e.push(n) : e.push(n), (i = n);
                }
                return new r(e);
            }),
            (e.siblings = function (t) {
                return this.nextAll(t).add(this.prevAll(t));
            }),
            (e.parent = function (t) {
                for (var e = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (t ? s(this[i].parentNode).is(t) && e.push(this[i].parentNode) : e.push(this[i].parentNode));
                return s(o(e));
            }),
            (e.parents = function (t) {
                for (var e = [], i = 0; i < this.length; i += 1) for (var n = this[i].parentNode; n;) t ? s(n).is(t) && e.push(n) : e.push(n), (n = n.parentNode);
                return s(o(e));
            }),
            (e.closest = function (t) {
                var e = this;
                return void 0 === t ? new r([]) : (e.is(t) || (e = e.parents(t).eq(0)), e);
            }),
            (e.find = function (t) {
                for (var e = [], i = 0; i < this.length; i += 1) for (var n = this[i].querySelectorAll(t), s = 0; s < n.length; s += 1) e.push(n[s]);
                return new r(e);
            }),
            (e.children = function (t) {
                for (var e = [], i = 0; i < this.length; i += 1) for (var n = this[i].childNodes, a = 0; a < n.length; a += 1) t ? 1 === n[a].nodeType && s(n[a]).is(t) && e.push(n[a]) : 1 === n[a].nodeType && e.push(n[a]);
                return new r(o(e));
            }),
            (e.remove = function () {
                for (var t = 0; t < this.length; t += 1) this[t].parentNode && this[t].parentNode.removeChild(this[t]);
                return this;
            }),
            (e.detach = function () {
                return this.remove();
            }),
            (e.add = function () {
                for (var t = void 0, e = void 0, i = arguments.length, n = Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                for (t = 0; t < n.length; t += 1) {
                    var o = s(n[t]);
                    for (e = 0; e < o.length; e += 1) (this[this.length] = o[e]), (this.length += 1);
                }
                return this;
            }),
            (e.empty = function () {
                for (var t = 0; t < this.length; t += 1) {
                    var e = this[t];
                    if (1 === e.nodeType) {
                        for (var i = 0; i < e.childNodes.length; i += 1) e.childNodes[i].parentNode && e.childNodes[i].parentNode.removeChild(e.childNodes[i]);
                        e.textContent = "";
                    }
                }
                return this;
            }),
            (e.scrollTo = function () {
                for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                var n = e[0],
                    r = e[1],
                    s = e[2],
                    o = e[3],
                    l = e[4];
                return (
                    4 === e.length && "function" == typeof o && ((l = o), (n = e[0]), (r = e[1]), (s = e[2]), (l = e[3]), (o = e[4])),
                    void 0 === o && (o = "swing"),
                        this.each(function () {
                            var t = this,
                                e = void 0,
                                i = void 0,
                                c = void 0,
                                u = void 0,
                                h = void 0,
                                d = void 0,
                                f = void 0,
                                p = void 0,
                                v = r > 0 || 0 === r,
                                m = n > 0 || 0 === n;
                            if ((void 0 === o && (o = "swing"), v && ((e = t.scrollTop), s || (t.scrollTop = r)), m && ((i = t.scrollLeft), s || (t.scrollLeft = n)), s)) {
                                v && ((c = t.scrollHeight - t.offsetHeight), (h = Math.max(Math.min(r, c), 0))), m && ((u = t.scrollWidth - t.offsetWidth), (d = Math.max(Math.min(n, u), 0)));
                                var g = null;
                                v && h === e && (v = !1),
                                m && d === i && (m = !1),
                                    a(function y() {
                                        var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date().getTime();
                                        null === g && (g = n);
                                        var r = Math.max(Math.min((n - g) / s, 1), 0),
                                            c = "linear" === o ? r : 0.5 - Math.cos(r * Math.PI) / 2,
                                            u = void 0;
                                        v && (f = e + c * (h - e)),
                                        m && (p = i + c * (d - i)),
                                        v && h > e && f >= h && ((t.scrollTop = h), (u = !0)),
                                        v && h < e && f <= h && ((t.scrollTop = h), (u = !0)),
                                        m && d > i && p >= d && ((t.scrollLeft = d), (u = !0)),
                                        m && d < i && p <= d && ((t.scrollLeft = d), (u = !0)),
                                            u ? l && l() : (v && (t.scrollTop = f), m && (t.scrollLeft = p), a(y));
                                    });
                            }
                        })
                );
            }),
            (e.scrollTop = function () {
                for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                var n = e[0],
                    r = e[1],
                    s = e[2],
                    o = e[3];
                return 3 === e.length && "function" == typeof s && ((n = e[0]), (r = e[1]), (o = e[2]), (s = e[3])), void 0 === n ? (this.length > 0 ? this[0].scrollTop : null) : this.scrollTo(undefined, n, r, s, o);
            }),
            (e.scrollLeft = function () {
                for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                var n = e[0],
                    r = e[1],
                    s = e[2],
                    o = e[3];
                return 3 === e.length && "function" == typeof s && ((n = e[0]), (r = e[1]), (o = e[2]), (s = e[3])), void 0 === n ? (this.length > 0 ? this[0].scrollLeft : null) : this.scrollTo(n, undefined, r, s, o);
            }),
            (e.animate = function (t, e) {
                var i = this,
                    r = {
                        props: Object.assign({}, t),
                        params: Object.assign({duration: 300, easing: "swing"}, e),
                        elements: i,
                        animating: !1,
                        que: [],
                        easingProgress: function (t, e) {
                            return "swing" === t ? 0.5 - Math.cos(e * Math.PI) / 2 : "function" == typeof t ? t(e) : e;
                        },
                        stop: function () {
                            var t;
                            r.frameId && ((t = r.frameId), n.window.cancelAnimationFrame ? n.window.cancelAnimationFrame(t) : n.window.webkitCancelAnimationFrame ? n.window.webkitCancelAnimationFrame(t) : n.window.clearTimeout(t)),
                                (r.animating = !1),
                                r.elements.each(function (t, e) {
                                    delete e.dom7AnimateInstance;
                                }),
                                (r.que = []);
                        },
                        done: function (t) {
                            if (
                                ((r.animating = !1),
                                    r.elements.each(function (t, e) {
                                        delete e.dom7AnimateInstance;
                                    }),
                                t && t(i),
                                r.que.length > 0)
                            ) {
                                var e = r.que.shift();
                                r.animate(e[0], e[1]);
                            }
                        },
                        animate: function (t, e) {
                            if (r.animating) return r.que.push([t, e]), r;
                            var s = [];
                            r.elements.each(function (e, i) {
                                var o = void 0,
                                    a = void 0,
                                    l = void 0,
                                    c = void 0,
                                    u = void 0;
                                i.dom7AnimateInstance || (r.elements[e].dom7AnimateInstance = r),
                                    (s[e] = {container: i}),
                                    Object.keys(t).forEach(function (r) {
                                        (o = n.window.getComputedStyle(i, null).getPropertyValue(r).replace(",", ".")),
                                            (a = parseFloat(o)),
                                            (l = o.replace(a, "")),
                                            (c = parseFloat(t[r])),
                                            (u = t[r] + l),
                                            (s[e][r] = {
                                                initialFullValue: o,
                                                initialValue: a,
                                                unit: l,
                                                finalValue: c,
                                                finalFullValue: u,
                                                currentValue: a
                                            });
                                    });
                            });
                            var o = null,
                                l = void 0,
                                c = 0,
                                u = 0,
                                h = void 0,
                                d = !1;
                            return (
                                (r.animating = !0),
                                    (r.frameId = a(function f() {
                                        l = new Date().getTime();
                                        var n = void 0,
                                            p = void 0;
                                        d || ((d = !0), e.begin && e.begin(i)),
                                        null === o && (o = l),
                                        e.progress && e.progress(i, Math.max(Math.min((l - o) / e.duration, 1), 0), o + e.duration - l < 0 ? 0 : o + e.duration - l, o),
                                            s.forEach(function (i) {
                                                var a = i;
                                                h ||
                                                a.done ||
                                                Object.keys(t).forEach(function (i) {
                                                    if (!h && !a.done) {
                                                        (n = Math.max(Math.min((l - o) / e.duration, 1), 0)), (p = r.easingProgress(e.easing, n));
                                                        var d = a[i],
                                                            f = d.initialValue,
                                                            v = d.finalValue,
                                                            m = d.unit;
                                                        a[i].currentValue = f + p * (v - f);
                                                        var g = a[i].currentValue;
                                                        ((v > f && g >= v) || (v < f && g <= v)) && ((a.container.style[i] = v + m), (u += 1) === Object.keys(t).length && ((a.done = !0), (c += 1)), c === s.length && (h = !0)),
                                                            h ? r.done(e.complete) : (a.container.style[i] = g + m);
                                                    }
                                                });
                                            }),
                                        h || (r.frameId = a(f));
                                    })),
                                    r
                            );
                        },
                    };
                if (0 === r.elements.length) return i;
                for (var s = void 0, o = 0; o < r.elements.length; o += 1) r.elements[o].dom7AnimateInstance ? (s = r.elements[o].dom7AnimateInstance) : (r.elements[o].dom7AnimateInstance = r);
                return s || (s = r), "stop" === t ? s.stop() : s.animate(r.props, r.params), i;
            }),
            (e.stop = function () {
                for (var t = 0; t < this.length; t += 1) this[t].dom7AnimateInstance && this[t].dom7AnimateInstance.stop();
            }),
            (e.click = function () {
                for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return c.bind(this).apply(undefined, ["click"].concat(e));
            }),
            (e.blur = function () {
                for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return c.bind(this).apply(undefined, ["blur"].concat(e));
            }),
            (e.focus = function () {
                for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return c.bind(this).apply(undefined, ["focus"].concat(e));
            }),
            (e.focusin = function () {
                for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return c.bind(this).apply(undefined, ["focusin"].concat(e));
            }),
            (e.focusout = function () {
                for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return c.bind(this).apply(undefined, ["focusout"].concat(e));
            }),
            (e.keyup = function () {
                for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return c.bind(this).apply(undefined, ["keyup"].concat(e));
            }),
            (e.keydown = function () {
                for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return c.bind(this).apply(undefined, ["keydown"].concat(e));
            }),
            (e.keypress = function () {
                for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return c.bind(this).apply(undefined, ["keypress"].concat(e));
            }),
            (e.submit = function () {
                for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return c.bind(this).apply(undefined, ["submit"].concat(e));
            }),
            (e.change = function () {
                for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return c.bind(this).apply(undefined, ["change"].concat(e));
            }),
            (e.mousedown = function () {
                for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return c.bind(this).apply(undefined, ["mousedown"].concat(e));
            }),
            (e.mousemove = function () {
                for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return c.bind(this).apply(undefined, ["mousemove"].concat(e));
            }),
            (e.mouseup = function () {
                for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return c.bind(this).apply(undefined, ["mouseup"].concat(e));
            }),
            (e.mouseenter = function () {
                for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return c.bind(this).apply(undefined, ["mouseenter"].concat(e));
            }),
            (e.mouseleave = function () {
                for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return c.bind(this).apply(undefined, ["mouseleave"].concat(e));
            }),
            (e.mouseout = function () {
                for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return c.bind(this).apply(undefined, ["mouseout"].concat(e));
            }),
            (e.mouseover = function () {
                for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return c.bind(this).apply(undefined, ["mouseover"].concat(e));
            }),
            (e.touchstart = function () {
                for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return c.bind(this).apply(undefined, ["touchstart"].concat(e));
            }),
            (e.touchend = function () {
                for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return c.bind(this).apply(undefined, ["touchend"].concat(e));
            }),
            (e.touchmove = function () {
                for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return c.bind(this).apply(undefined, ["touchmove"].concat(e));
            }),
            (e.resize = function () {
                for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return c.bind(this).apply(undefined, ["resize"].concat(e));
            }),
            (e.scroll = function () {
                for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return c.bind(this).apply(undefined, ["scroll"].concat(e));
            });
    },
    function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), (e.ImageZoom = undefined);
        var n = (function () {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                    }
                }

                return function (e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e;
                };
            })(),
            r = i(218),
            s = a(i(220)),
            o = a(i(221));

        function a(t) {
            return t && t.__esModule ? t : {default: t};
        }

        var l = document.querySelector(".artwork-page__main-image-wrapper--no-js"),
            c = document.querySelector(".artwork-page__main-image-wrapper"),
            u = document.querySelector(".artwork-page__image-navigation--zoom-level");
        e.ImageZoom = (function () {
            function t(e) {
                !(function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                })(this, t);
                var i = this;
                l.classList.remove("artwork-page__main-image-wrapper--no-js"),
                    (i.mainImage = e),
                    (i.mainImageWrapper = e.parentElement),
                    (i.mainImageZoomHandler = i.mainImageWrapper.parentElement),
                    (i.artworkBackgroundImageWrapper = i.mainImageZoomHandler.previousElementSibling),
                    (i.zoomButtons = document.querySelectorAll(".artwork-page__image-navigation")),
                    (0, o["default"])(i.mainImage, function () {
                        i._initImageZoom(),
                            document.querySelector(".artwork-page").classList.add("artwork-page--is-loaded"),
                            i._progressiveImageLoader(),
                            i._addEvents(),
                            i.artworkBackgroundImageWrapper.classList.remove("artwork-page__background-image--is-hidden"),
                            i._isMobile ? ((i.bodyHammer = new s["default"](c)), i._addMobileEvents()) : i._addDesktopEvents();
                    });
            }

            return (
                n(t, [
                    {
                        key: "_progressiveImageLoader",
                        value: function () {
                            var t = this;
                            if (t.mainImage.dataset.full) {
                                var e = new Image();
                                (e.src = t.mainImage.dataset.full),
                                    (e.onload = function () {
                                        (t.mainImage.src = t.mainImage.dataset.full), t._setDimensions();
                                    });
                            }
                        },
                    },
                    {
                        key: "_initImageZoom",
                        value: function () {
                            var t = parseFloat(this.mainImageWrapper.dataset.initialzoom),
                                e = (this.mainImage.width / this.mainImage.height <= 1 || window.innerWidth / window.innerHeight <= 1 || this.mainImage.height <= window.innerHeight) && this.mainImage.width >= window.innerWidth;
                            (this.scrolly = new r.Scroller(this._render, {
                                animating: !0,
                                animationDuration: 100,
                                bouncing: !0,
                                centering: !0,
                                locking: !0,
                                minZoom: e ? 0.3 : 0.5,
                                maxZoom: 3,
                                speedMultiplier: 0.7,
                                zooming: !0
                            })),
                                this.scrolly.setDimensions(window.innerWidth, window.innerHeight, this.mainImage.scrollWidth, this.mainImage.scrollHeight),
                                (this.focusX = (this.scrolly.__contentWidth / 100) * this.mainImageWrapper.dataset.focusx),
                                (this.focusY = (this.scrolly.__contentHeight / 100) * this.mainImageWrapper.dataset.focusy),
                                this.mainImageWrapper.classList.add("artwork-page__main-image-wrapper--is-loaded"),
                                this.scrolly.zoomTo(t, !1, t > 1 ? this.focusX : undefined, t > 1 ? this.focusY : undefined),
                                this._writeZoomToDom(t);
                        },
                    },
                    {
                        key: "_addEvents",
                        value: function () {
                            var t = this;
                            window.addEventListener("resize", function () {
                                t._setDimensions();
                            }),
                                t.zoomButtons.forEach(function (e) {
                                    e.addEventListener(
                                        "click",
                                        function (e) {
                                            var i,
                                                n = t.scrolly.__zoomLevel;
                                            "in" === e.target.dataset.zoom
                                                ? n + 0.5 < t.scrolly.options.maxZoom
                                                ? (n += 0.5)
                                                : (n = t.scrolly.options.maxZoom)
                                                : n - 0.5 >= t.scrolly.options.minZoom
                                                ? (n -= 0.5)
                                                : (n = t.scrolly.options.minZoom),
                                                (i = (50 * Math.round((100 * n) / 50)) / 100),
                                                (t.mainImageWrapper.style.transition = "all 0.5s"),
                                                window.setTimeout(function () {
                                                    t.mainImageWrapper.style.transition = "transform 0.1s linear";
                                                }, 500),
                                                t._setZoomLevel(n),
                                                t._writeZoomToDom(i);
                                        },
                                        !1
                                    );
                                });
                        },
                    },
                    {
                        key: "_addMobileEvents",
                        value: function () {
                            var t = this;
                            t.bodyHammer.get("pan").set({enable: !0, direction: s["default"].DIRECTION_ALL}),
                                t.bodyHammer.get("pinch").set({enable: !0}),
                                t.bodyHammer.on("panstart pinchstart", function (e) {
                                    var i = e.srcEvent.touches || e.pointers;
                                    (i[0] && i[0].target && i[0].target.tagName.match(/input|textarea|select/i)) || ((t.scrolly.options.bouncing = !1), t.scrolly.doTouchStart(i, Date.now()), e.preventDefault());
                                }),
                                t.bodyHammer.on("panmove pinchmove", function (e) {
                                    var i = e.srcEvent.touches || e.pointers;
                                    t._writeZoomToDom(t.scrolly.getValues().zoom), t.scrolly.doTouchMove(i, Date.now(), e.scale.toFixed(2));
                                }),
                                t.bodyHammer.on("panend pinchend", function (e) {
                                    t.scrolly.doTouchEnd(Date.now()), (t.scrolly.options.bouncing = !0);
                                });
                        },
                    },
                    {
                        key: "_addDesktopEvents",
                        value: function () {
                            var t = this,
                                e = !1;
                            t.mainImageWrapper.addEventListener(
                                "mousedown",
                                function (i) {
                                    i.target.tagName.match(/input|textarea|select/i) || (t.scrolly.doTouchStart([{
                                        pageX: i.pageX,
                                        pageY: i.pageY
                                    }], Date.now()), (e = !0));
                                },
                                !1
                            ),
                                document.addEventListener(
                                    "mousemove",
                                    function (i) {
                                        e && (t.scrolly.doTouchMove([{
                                            pageX: i.pageX,
                                            pageY: i.pageY
                                        }], Date.now()), (e = !0));
                                    },
                                    !1
                                ),
                                document.addEventListener(
                                    "mouseup",
                                    function (i) {
                                        e && (t.scrolly.doTouchEnd(Date.now()), (e = !1));
                                    },
                                    !1
                                ),
                                t.mainImageZoomHandler.addEventListener(
                                    "wheel",
                                    function (e) {
                                        var i = 0;
                                        (i = e.wheelDeltaY ? (e.wheelDeltaY > 0 ? 0.97 : 1.03) : e.deltaY > 0 ? 0.97 : 1.03),
                                            t.scrolly.zoomTo(t.scrolly.__zoomLevel * i, !1, e.pageX - t.scrolly.__clientLeft, e.pageY - t.scrolly.__clientTop),
                                            t._writeZoomToDom(t.scrolly.getValues().zoom);
                                    },
                                    !1
                                );
                        },
                    },
                    {
                        key: "_setDimensions",
                        value: function () {
                            this.scrolly && this.scrolly.setDimensions(window.innerWidth, window.innerHeight, this.mainImage.offsetWidth, this.mainImage.offsetHeight);
                        },
                    },
                    {
                        key: "_setZoomLevel",
                        value: function (t) {
                            this.scrolly.zoomTo(t, !1);
                        },
                    },
                    {
                        key: "_writeZoomToDom",
                        value: function (t) {
                            u.textContent = Math.round(100 * t) + "%";
                        },
                    },
                    {
                        key: "_render",
                        value: function () {
                            var t = this;
                            window.setTimeout(function () {
                                var e = t.getValues(),
                                    i = e.left,
                                    n = e.top,
                                    r = parseFloat(e.zoom).toFixed(2);
                                c.style.transform = "translate3d(" + -i + "px," + -n + "px,0) scale(" + r + ")";
                            }, 0);
                        },
                    },
                    {
                        key: "_isMobile",
                        get: function () {
                            return "undefined" != typeof window.orientation || -1 !== navigator.userAgent.indexOf("IEMobile");
                        },
                    },
                ]),
                    t
            );
        })();
    },
    function (t, e, i) {
        "use strict";
        var n, r, s, o;
        "function" == typeof Symbol && Symbol.iterator;
        undefined,
            (o = function (t, e, i) {
                (t.animate = e), (t.Scroller = i);
            }),
            (r = [e, i(94), i(219)]),
        (s = "function" == typeof (n = o) ? n.apply(e, r) : n) === undefined || (t.exports = s);
    },
    function (t, e, i) {
        "use strict";
        var n, r, s, o;
        "function" == typeof Symbol && Symbol.iterator;
        undefined,
            (o = function (t) {
                var e = function () {
                    },
                    i = function (t, i) {
                        for (var n in ((this.__callback = t),
                            (this.options = {
                                scrollingX: !0,
                                scrollingY: !0,
                                animating: !0,
                                animationDuration: 250,
                                bouncing: !0,
                                locking: !0,
                                paging: !1,
                                snapping: !1,
                                zooming: !1,
                                minZoom: 0.5,
                                maxZoom: 3,
                                speedMultiplier: 1,
                                scrollingComplete: e,
                                penetrationDeceleration: 0.03,
                                penetrationAcceleration: 0.08,
                            }),
                            i))
                            this.options[n] = i[n];
                    },
                    n = function (t) {
                        return Math.pow(t - 1, 3) + 1;
                    },
                    r = function (t) {
                        return (t /= 0.5) < 1 ? 0.5 * Math.pow(t, 3) : 0.5 * (Math.pow(t - 2, 3) + 2);
                    };
                return (
                    (i.prototype = {
                        __isSingleTouch: !1,
                        __isTracking: !1,
                        __didDecelerationComplete: !1,
                        __isGesturing: !1,
                        __isDragging: !1,
                        __isDecelerating: !1,
                        __isAnimating: !1,
                        __clientLeft: 0,
                        __clientTop: 0,
                        __clientWidth: 0,
                        __clientHeight: 0,
                        __contentWidth: 0,
                        __contentHeight: 0,
                        __snapWidth: 100,
                        __snapHeight: 100,
                        __zoomLevel: 1,
                        __scrollLeft: 0,
                        __scrollTop: 0,
                        __maxScrollLeft: 0,
                        __maxScrollTop: 0,
                        __scheduledLeft: 0,
                        __scheduledTop: 0,
                        __scheduledZoom: 0,
                        __lastTouchLeft: null,
                        __lastTouchTop: null,
                        __lastTouchMove: null,
                        __positions: null,
                        __minDecelerationScrollLeft: null,
                        __minDecelerationScrollTop: null,
                        __maxDecelerationScrollLeft: null,
                        __maxDecelerationScrollTop: null,
                        __decelerationVelocityX: null,
                        __decelerationVelocityY: null,
                        __leftOffset: 0,
                        __topOffset: 0,
                        setDimensions: function (t, e, i, n) {
                            null !== t && (this.__clientWidth = t),
                            null !== e && (this.__clientHeight = e),
                            null !== i && (this.__contentWidth = i),
                            null !== n && (this.__contentHeight = n),
                                this.__computeScrollMax(),
                                this.scrollTo(this.__scrollLeft, this.__scrollTop, !0);
                        },
                        setPosition: function (t, e) {
                            (this.__clientLeft = t || 0), (this.__clientTop = e || 0);
                        },
                        setSnapSize: function (t, e) {
                            (this.__snapWidth = t), (this.__snapHeight = e);
                        },
                        getValues: function () {
                            return {
                                top: this.__scrollTop - (this.options.centering ? this.__topOffset : this.options.scrollOverflow ? this.options.scrollOverflow : 0),
                                right: this.__scrollLeft + this.__clientWidth / this.__zoomLevel,
                                bottom: this.__scrollTop + this.__clientHeight / this.__zoomLevel,
                                left: this.__scrollLeft - (this.options.centering ? this.__leftOffset : this.options.scrollOverflow ? this.options.scrollOverflow : 0),
                                zoom: this.__zoomLevel,
                            };
                        },
                        getPoint: function (t, e) {
                            var i = this.getValues();
                            return {left: t / i.zoom, top: e / i.zoom};
                        },
                        getScrollMax: function () {
                            return {left: this.__maxScrollLeft, top: this.__maxScrollTop};
                        },
                        zoomTo: function (e, i, n, r, s) {
                            if (!this.options.zooming) throw new Error("Zooming is not enabled!");
                            s && (this.__zoomComplete = s), this.__isDecelerating && (t.stop(this.__isDecelerating), (this.__isDecelerating = !1));
                            var o = this.__zoomLevel;
                            n === undefined && (n = this.__clientWidth / 2), r === undefined && (r = this.__clientHeight / 2), (e = Math.max(Math.min(e, this.options.maxZoom), this.options.minZoom)), this.__computeScrollMax(e);
                            var a = e / o,
                                l = a * (this.__scrollLeft + n) - n,
                                c = a * (this.__scrollTop + r) - r;
                            l > this.__maxScrollLeft ? (l = this.__maxScrollLeft) : l < 0 && (l = 0), c > this.__maxScrollTop ? (c = this.__maxScrollTop) : c < 0 && (c = 0), this.__publish(l, c, e, i);
                        },
                        zoomBy: function (t, e, i, n, r) {
                            this.zoomTo(this.__zoomLevel * t, e, i, n, r);
                        },
                        scrollTo: function (e, i, n, r) {
                            if ((this.__isDecelerating && (t.stop(this.__isDecelerating), (this.__isDecelerating = !1)), r !== undefined && r !== this.__zoomLevel)) {
                                if (!this.options.zooming) throw new Error("Zooming is not enabled!");
                                (e *= r), (i *= r), this.__computeScrollMax(r);
                            } else r = this.__zoomLevel;
                            this.options.scrollingX
                                ? this.options.paging
                                ? (e = Math.round(e / this.__clientWidth) * this.__clientWidth)
                                : this.options.snapping && (e = Math.round(e / this.__snapWidth) * this.__snapWidth)
                                : (e = this.__scrollLeft),
                                this.options.scrollingY
                                    ? this.options.paging
                                    ? (i = Math.round(i / this.__clientHeight) * this.__clientHeight)
                                    : this.options.snapping && (i = Math.round(i / this.__snapHeight) * this.__snapHeight)
                                    : (i = this.__scrollTop),
                                (e = Math.max(Math.min(this.__maxScrollLeft, e), this.options.scrollOverflow ? this.options.scrollOverflow : 0)),
                                (i = Math.max(Math.min(this.__maxScrollTop, i), this.options.scrollOverflow ? this.options.scrollOverflow : 0)),
                            e === this.__scrollLeft && i === this.__scrollTop && (n = !1),
                                this.__publish(e, i, r, n);
                        },
                        scrollBy: function (t, e, i) {
                            var n = this.__isAnimating ? this.__scheduledLeft : this.__scrollLeft,
                                r = this.__isAnimating ? this.__scheduledTop : this.__scrollTop;
                            this.scrollTo(n + (t || 0), r + (e || 0), i);
                        },
                        doMouseZoom: function (t, e, i, n) {
                            var r = t > 0 ? 0.99 : 1.01;
                            return this.zoomTo(this.__zoomLevel * r, !1, i - this.__clientLeft, n - this.__clientTop);
                        },
                        doTouchStart: function (e, i) {
                            if (e.length === undefined) throw new Error("Invalid touch list: " + e);
                            if ((i instanceof Date && (i = i.valueOf()), "number" != typeof i)) throw new Error("Invalid timestamp value: " + i);
                            var n, r;
                            (this.__interruptedAnimation = !0),
                            this.__isDecelerating && (t.stop(this.__isDecelerating), (this.__isDecelerating = !1), (this.__interruptedAnimation = !0)),
                            this.__isAnimating && (t.stop(this.__isAnimating), (this.__isAnimating = !1), (this.__interruptedAnimation = !0));
                            var s = 1 === e.length;
                            s ? ((n = e[0].pageX), (r = e[0].pageY)) : ((n = Math.abs(e[0].pageX + e[1].pageX) / 2), (r = Math.abs(e[0].pageY + e[1].pageY) / 2)),
                                (this.__initialTouchLeft = n),
                                (this.__initialTouchTop = r),
                                (this.__zoomLevelStart = this.__zoomLevel),
                                (this.__lastTouchLeft = n),
                                (this.__lastTouchTop = r),
                                (this.__lastTouchMove = i),
                                (this.__lastScale = 1),
                                (this.__enableScrollX = !s && this.options.scrollingX),
                                (this.__enableScrollY = !s && this.options.scrollingY),
                                (this.__isTracking = !0),
                                (this.__didDecelerationComplete = !1),
                                (this.__isDragging = !s),
                                (this.__isSingleTouch = s),
                                (this.__positions = []);
                        },
                        doTouchMove: function (t, e, i) {
                            if (t.length === undefined) throw new Error("Invalid touch list: " + t);
                            if ((e instanceof Date && (e = e.valueOf()), "number" != typeof e)) throw new Error("Invalid timestamp value: " + e);
                            if (this.__isTracking) {
                                var n, r;
                                2 === t.length ? ((n = Math.abs(t[0].pageX + t[1].pageX) / 2), (r = Math.abs(t[0].pageY + t[1].pageY) / 2)) : ((n = t[0].pageX), (r = t[0].pageY));
                                var s = this.__positions;
                                if (this.__isDragging) {
                                    var o = n - this.__lastTouchLeft,
                                        a = r - this.__lastTouchTop,
                                        l = this.__scrollLeft,
                                        c = this.__scrollTop,
                                        u = this.__zoomLevel;
                                    if (i !== undefined && this.options.zooming) {
                                        var h = u;
                                        if (((u = (u / this.__lastScale) * i), h !== (u = Math.max(Math.min(u, this.options.maxZoom), this.options.minZoom)))) {
                                            var d = n - this.__clientLeft,
                                                f = r - this.__clientTop;
                                            (l = ((d + l) * u) / h - d), (c = ((f + c) * u) / h - f), this.__computeScrollMax(u);
                                        }
                                    }
                                    if (this.__enableScrollX) {
                                        l -= o * this.options.speedMultiplier;
                                        var p = this.__maxScrollLeft;
                                        (l > p || l < 0) && (this.options.bouncing ? (l += (o / 2) * this.options.speedMultiplier) : (l = l > p ? p : 0));
                                    }
                                    if (this.__enableScrollY) {
                                        c -= a * this.options.speedMultiplier;
                                        var v = this.__maxScrollTop;
                                        (c > v || c < 0) && (this.options.bouncing ? (c += (a / 2) * this.options.speedMultiplier) : (c = c > v ? v : 0));
                                    }
                                    s.length > 60 && s.splice(0, 30), s.push(l, c, e), this.__publish(l, c, u);
                                } else {
                                    var m = this.options.locking ? 3 : 0,
                                        g = Math.abs(n - this.__initialTouchLeft),
                                        y = Math.abs(r - this.__initialTouchTop);
                                    (this.__enableScrollX = this.options.scrollingX && g >= m),
                                        (this.__enableScrollY = this.options.scrollingY && y >= m),
                                        s.push(this.__scrollLeft, this.__scrollTop, e),
                                        (this.__isDragging = (this.__enableScrollX || this.__enableScrollY) && (g >= 5 || y >= 5)),
                                    this.__isDragging && (this.__interruptedAnimation = !1);
                                }
                                (this.__lastTouchLeft = n), (this.__lastTouchTop = r), (this.__lastTouchMove = e), (this.__lastScale = i);
                            }
                        },
                        doTouchEnd: function (t) {
                            if ((t instanceof Date && (t = t.valueOf()), "number" != typeof t)) throw new Error("Invalid timestamp value: " + t);
                            if (this.__isTracking) {
                                if (((this.__isTracking = !1), this.__isDragging))
                                    if (((this.__isDragging = !1), this.__isSingleTouch && this.options.animating && t - this.__lastTouchMove <= 100)) {
                                        for (var e = this.__positions, i = e.length - 1, n = i, r = i; r > 0 && e[r] > this.__lastTouchMove - 100; r -= 3) n = r;
                                        if (n !== i) {
                                            var s = e[i] - e[n],
                                                o = this.__scrollLeft - e[n - 2],
                                                a = this.__scrollTop - e[n - 1];
                                            (this.__decelerationVelocityX = (o / s) * (1e3 / 60)), (this.__decelerationVelocityY = (a / s) * (1e3 / 60));
                                            var l = this.options.paging || this.options.snapping ? 4 : 1;
                                            (Math.abs(this.__decelerationVelocityX) > l || Math.abs(this.__decelerationVelocityY) > l) && this.__startDeceleration(t);
                                        } else this.options.scrollingComplete();
                                    } else t - this.__lastTouchMove > 100 && this.options.scrollingComplete();
                                this.__isDecelerating || ((this.__interruptedAnimation || this.__isDragging) && this.options.scrollingComplete(), this.scrollTo(this.__scrollLeft, this.__scrollTop, !0, this.__zoomLevel)),
                                    (this.__positions.length = 0);
                            }
                        },
                        __publish: function (e, i, s, o) {
                            var a = this.__isAnimating;
                            if ((a && (t.stop(a), (this.__isAnimating = !1)), o && this.options.animating)) {
                                (this.__scheduledLeft = e), (this.__scheduledTop = i), (this.__scheduledZoom = s);
                                var l = this.__scrollLeft,
                                    c = this.__scrollTop,
                                    u = this.__zoomLevel,
                                    h = e - l,
                                    d = i - c,
                                    f = s - u,
                                    p = function (t, e, i) {
                                        i &&
                                        ((this.__scrollLeft = l + h * t),
                                            (this.__scrollTop = c + d * t),
                                            (this.__zoomLevel = u + f * t),
                                        this.__callback && this.__callback(this.__scrollLeft - this.__leftOffset, this.__scrollTop - this.__topOffset, this.__zoomLevel));
                                    }.bind(this),
                                    v = function (t) {
                                        return this.__isAnimating === t;
                                    }.bind(this),
                                    m = function (t, e, i) {
                                        e === this.__isAnimating && (this.__isAnimating = !1),
                                        (this.__didDecelerationComplete || i) && this.options.scrollingComplete(),
                                        this.options.zooming && (this.__computeScrollMax(), this.__zoomComplete && (this.__zoomComplete(), (this.__zoomComplete = null)));
                                    }.bind(this);
                                this.__isAnimating = t.start(p, v, m, this.options.animationDuration, a ? n : r);
                            } else
                                (this.__scheduledLeft = this.__scrollLeft = e),
                                    (this.__scheduledTop = this.__scrollTop = i),
                                    (this.__scheduledZoom = this.__zoomLevel = s),
                                this.__callback && this.__callback(e - this.__leftOffset, i - this.__topOffset, s),
                                this.options.zooming && (this.__computeScrollMax(), this.__zoomComplete && (this.__zoomComplete(), (this.__zoomComplete = null)));
                        },
                        __computeScrollMax: function (t) {
                            t === undefined && (t = this.__zoomLevel),
                                (this.__maxScrollLeft = Math.max(this.__contentWidth * t - window.innerWidth + (this.options.scrollOverflow ? -1 * this.options.scrollOverflow : 0), 0)),
                                (this.__maxScrollTop = Math.max(this.__contentHeight * t - window.innerHeight + (this.options.scrollOverflow ? -1 * this.options.scrollOverflow : 0), 0));
                            var e = 0,
                                i = 0;
                            this.options.centering &&
                            ((e = this.__clientWidth > this.__contentWidth * this.__zoomLevel ? (this.__clientWidth - this.__contentWidth * this.__zoomLevel) / 2 : 0),
                                (i = this.__clientHeight > this.__contentHeight * this.__zoomLevel ? (this.__clientHeight - this.__contentHeight * this.__zoomLevel) / 2 : 0)),
                                (this.__leftOffset = e),
                                (this.__topOffset = i);
                        },
                        __startDeceleration: function (e) {
                            if (this.options.paging) {
                                var i = Math.max(Math.min(this.__scrollLeft, this.__maxScrollLeft), 0),
                                    n = Math.max(Math.min(this.__scrollTop, this.__maxScrollTop), 0),
                                    r = this.__clientWidth,
                                    s = this.__clientHeight;
                                (this.__minDecelerationScrollLeft = Math.floor(i / r) * r),
                                    (this.__minDecelerationScrollTop = Math.floor(n / s) * s),
                                    (this.__maxDecelerationScrollLeft = Math.ceil(i / r) * r),
                                    (this.__maxDecelerationScrollTop = Math.ceil(n / s) * s);
                            } else
                                (this.__minDecelerationScrollLeft = this.options.scrollOverflow ? this.options.scrollOverflow : 0),
                                    (this.__minDecelerationScrollTop = this.options.scrollOverflow ? this.options.scrollOverflow : 0),
                                    (this.__maxDecelerationScrollLeft = this.__maxScrollLeft),
                                    (this.__maxDecelerationScrollTop = this.__maxScrollTop);
                            var o = function (t, e, i) {
                                    this.__stepThroughDeceleration(i);
                                }.bind(this),
                                a = this.options.snapping ? 4 : 0.1,
                                l = function () {
                                    var t = Math.abs(this.__decelerationVelocityX) >= a || Math.abs(this.__decelerationVelocityY) >= a;
                                    return t || (this.__didDecelerationComplete = !0), t;
                                }.bind(this),
                                c = function (t, e, i) {
                                    (this.__isDecelerating = !1), this.__didDecelerationComplete && this.options.scrollingComplete(), this.scrollTo(this.__scrollLeft, this.__scrollTop, this.options.snapping);
                                }.bind(this);
                            this.__isDecelerating = t.start(o, l, c);
                        },
                        __stepThroughDeceleration: function (t) {
                            var e = this.__scrollLeft + this.__decelerationVelocityX,
                                i = this.__scrollTop + this.__decelerationVelocityY;
                            if (!this.options.bouncing) {
                                var n = Math.max(Math.min(this.__maxDecelerationScrollLeft, e), this.__minDecelerationScrollLeft);
                                n !== e && ((e = n), (this.__decelerationVelocityX = 0));
                                var r = Math.max(Math.min(this.__maxDecelerationScrollTop, i), this.__minDecelerationScrollTop);
                                r !== i && ((i = r), (this.__decelerationVelocityY = 0));
                            }
                            if ((t ? this.__publish(e, i, this.__zoomLevel) : ((this.__scrollLeft = e), (this.__scrollTop = i)), !this.options.paging)) {
                                (this.__decelerationVelocityX *= 0.95), (this.__decelerationVelocityY *= 0.95);
                            }
                            if (this.options.bouncing) {
                                var s = 0,
                                    o = 0,
                                    a = this.options.penetrationDeceleration,
                                    l = this.options.penetrationAcceleration;
                                e < this.__minDecelerationScrollLeft ? (s = this.__minDecelerationScrollLeft - e) : e > this.__maxDecelerationScrollLeft && (s = this.__maxDecelerationScrollLeft - e),
                                    i < this.__minDecelerationScrollTop ? (o = this.__minDecelerationScrollTop - i) : i > this.__maxDecelerationScrollTop && (o = this.__maxDecelerationScrollTop - i),
                                0 !== s && (s * this.__decelerationVelocityX <= 0 ? (this.__decelerationVelocityX += s * a) : (this.__decelerationVelocityX = s * l)),
                                0 !== o && (o * this.__decelerationVelocityY <= 0 ? (this.__decelerationVelocityY += o * a) : (this.__decelerationVelocityY = o * l));
                            }
                        },
                    }),
                        i
                );
            }),
            (r = [i(94)]),
        (s = "function" == typeof (n = o) ? n.apply(e, r) : n) === undefined || (t.exports = s);
    },
    function (t, e, i) {
        var n;
        !(function (r, s, o, a) {
            "use strict";
            var l,
                c = ["", "webkit", "Moz", "MS", "ms", "o"],
                u = s.createElement("div"),
                h = "function",
                d = Math.round,
                f = Math.abs,
                p = Date.now;

            function v(t, e, i) {
                return setTimeout(E(t, i), e);
            }

            function m(t, e, i) {
                return !!Array.isArray(t) && (g(t, i[e], i), !0);
            }

            function g(t, e, i) {
                var n;
                if (t)
                    if (t.forEach) t.forEach(e, i);
                    else if (t.length !== a) for (n = 0; n < t.length;) e.call(i, t[n], n, t), n++;
                    else for (n in t) t.hasOwnProperty(n) && e.call(i, t[n], n, t);
            }

            function y(t, e, i) {
                var n = "DEPRECATED METHOD: " + e + "\n" + i + " AT \n";
                return function () {
                    var e = new Error("get-stack-trace"),
                        i =
                            e && e.stack
                                ? e.stack
                                    .replace(/^[^\(]+?[\n$]/gm, "")
                                    .replace(/^\s+at\s+/gm, "")
                                    .replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@")
                                : "Unknown Stack Trace",
                        s = r.console && (r.console.warn || r.console.log);
                    return s && s.call(r.console, n, i), t.apply(this, arguments);
                };
            }

            l =
                "function" != typeof Object.assign
                    ? function (t) {
                        if (t === a || null === t) throw new TypeError("Cannot convert undefined or null to object");
                        for (var e = Object(t), i = 1; i < arguments.length; i++) {
                            var n = arguments[i];
                            if (n !== a && null !== n) for (var r in n) n.hasOwnProperty(r) && (e[r] = n[r]);
                        }
                        return e;
                    }
                    : Object.assign;
            var w = y(
                function (t, e, i) {
                    for (var n = Object.keys(e), r = 0; r < n.length;) (!i || (i && t[n[r]] === a)) && (t[n[r]] = e[n[r]]), r++;
                    return t;
                },
                "extend",
                "Use `assign`."
                ),
                b = y(
                    function (t, e) {
                        return w(t, e, !0);
                    },
                    "merge",
                    "Use `assign`."
                );

            function _(t, e, i) {
                var n,
                    r = e.prototype;
                ((n = t.prototype = Object.create(r)).constructor = t), (n._super = r), i && l(n, i);
            }

            function E(t, e) {
                return function () {
                    return t.apply(e, arguments);
                };
            }

            function x(t, e) {
                return typeof t == h ? t.apply((e && e[0]) || a, e) : t;
            }

            function T(t, e) {
                return t === a ? e : t;
            }

            function S(t, e, i) {
                g(L(e), function (e) {
                    t.addEventListener(e, i, !1);
                });
            }

            function C(t, e, i) {
                g(L(e), function (e) {
                    t.removeEventListener(e, i, !1);
                });
            }

            function M(t, e) {
                for (; t;) {
                    if (t == e) return !0;
                    t = t.parentNode;
                }
                return !1;
            }

            function k(t, e) {
                return t.indexOf(e) > -1;
            }

            function L(t) {
                return t.trim().split(/\s+/g);
            }

            function A(t, e, i) {
                if (t.indexOf && !i) return t.indexOf(e);
                for (var n = 0; n < t.length;) {
                    if ((i && t[n][i] == e) || (!i && t[n] === e)) return n;
                    n++;
                }
                return -1;
            }

            function P(t) {
                return Array.prototype.slice.call(t, 0);
            }

            function z(t, e, i) {
                for (var n = [], r = [], s = 0; s < t.length;) {
                    var o = e ? t[s][e] : t[s];
                    A(r, o) < 0 && n.push(t[s]), (r[s] = o), s++;
                }
                return (
                    i &&
                    (n = e
                        ? n.sort(function (t, i) {
                            return t[e] > i[e];
                        })
                        : n.sort()),
                        n
                );
            }

            function I(t, e) {
                for (var i, n, r = e[0].toUpperCase() + e.slice(1), s = 0; s < c.length;) {
                    if ((n = (i = c[s]) ? i + r : e) in t) return n;
                    s++;
                }
                return a;
            }

            var O = 1;

            function D(t) {
                var e = t.ownerDocument || t;
                return e.defaultView || e.parentWindow || r;
            }

            var $ = "ontouchstart" in r,
                N = I(r, "PointerEvent") !== a,
                F = $ && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
                j = 25,
                B = 1,
                W = 2,
                H = 4,
                R = 8,
                Y = 1,
                X = 2,
                V = 4,
                G = 8,
                q = 16,
                U = X | V,
                Z = G | q,
                K = U | Z,
                Q = ["x", "y"],
                J = ["clientX", "clientY"];

            function tt(t, e) {
                var i = this;
                (this.manager = t),
                    (this.callback = e),
                    (this.element = t.element),
                    (this.target = t.options.inputTarget),
                    (this.domHandler = function (e) {
                        x(t.options.enable, [t]) && i.handler(e);
                    }),
                    this.init();
            }

            function et(t, e, i) {
                var n = i.pointers.length,
                    r = i.changedPointers.length,
                    s = e & B && n - r == 0,
                    o = e & (H | R) && n - r == 0;
                (i.isFirst = !!s),
                    (i.isFinal = !!o),
                s && (t.session = {}),
                    (i.eventType = e),
                    (function (t, e) {
                        var i = t.session,
                            n = e.pointers,
                            r = n.length;
                        i.firstInput || (i.firstInput = it(e));
                        r > 1 && !i.firstMultiple ? (i.firstMultiple = it(e)) : 1 === r && (i.firstMultiple = !1);
                        var s = i.firstInput,
                            o = i.firstMultiple,
                            l = o ? o.center : s.center,
                            c = (e.center = nt(n));
                        (e.timeStamp = p()),
                            (e.deltaTime = e.timeStamp - s.timeStamp),
                            (e.angle = at(l, c)),
                            (e.distance = ot(l, c)),
                            (function (t, e) {
                                var i = e.center,
                                    n = t.offsetDelta || {},
                                    r = t.prevDelta || {},
                                    s = t.prevInput || {};
                                (e.eventType !== B && s.eventType !== H) || ((r = t.prevDelta = {
                                    x: s.deltaX || 0,
                                    y: s.deltaY || 0
                                }), (n = t.offsetDelta = {x: i.x, y: i.y}));
                                (e.deltaX = r.x + (i.x - n.x)), (e.deltaY = r.y + (i.y - n.y));
                            })(i, e),
                            (e.offsetDirection = st(e.deltaX, e.deltaY));
                        var u = rt(e.deltaTime, e.deltaX, e.deltaY);
                        (e.overallVelocityX = u.x),
                            (e.overallVelocityY = u.y),
                            (e.overallVelocity = f(u.x) > f(u.y) ? u.x : u.y),
                            (e.scale = o ? ((h = o.pointers), (d = n), ot(d[0], d[1], J) / ot(h[0], h[1], J)) : 1),
                            (e.rotation = o
                                ? (function (t, e) {
                                    return at(e[1], e[0], J) + at(t[1], t[0], J);
                                })(o.pointers, n)
                                : 0),
                            (e.maxPointers = i.prevInput ? (e.pointers.length > i.prevInput.maxPointers ? e.pointers.length : i.prevInput.maxPointers) : e.pointers.length),
                            (function (t, e) {
                                var i,
                                    n,
                                    r,
                                    s,
                                    o = t.lastInterval || e,
                                    l = e.timeStamp - o.timeStamp;
                                if (e.eventType != R && (l > j || o.velocity === a)) {
                                    var c = e.deltaX - o.deltaX,
                                        u = e.deltaY - o.deltaY,
                                        h = rt(l, c, u);
                                    (n = h.x), (r = h.y), (i = f(h.x) > f(h.y) ? h.x : h.y), (s = st(c, u)), (t.lastInterval = e);
                                } else (i = o.velocity), (n = o.velocityX), (r = o.velocityY), (s = o.direction);
                                (e.velocity = i), (e.velocityX = n), (e.velocityY = r), (e.direction = s);
                            })(i, e);
                        var h, d;
                        var v = t.element;
                        M(e.srcEvent.target, v) && (v = e.srcEvent.target);
                        e.target = v;
                    })(t, i),
                    t.emit("hammer.input", i),
                    t.recognize(i),
                    (t.session.prevInput = i);
            }

            function it(t) {
                for (var e = [], i = 0; i < t.pointers.length;) (e[i] = {
                    clientX: d(t.pointers[i].clientX),
                    clientY: d(t.pointers[i].clientY)
                }), i++;
                return {timeStamp: p(), pointers: e, center: nt(e), deltaX: t.deltaX, deltaY: t.deltaY};
            }

            function nt(t) {
                var e = t.length;
                if (1 === e) return {x: d(t[0].clientX), y: d(t[0].clientY)};
                for (var i = 0, n = 0, r = 0; r < e;) (i += t[r].clientX), (n += t[r].clientY), r++;
                return {x: d(i / e), y: d(n / e)};
            }

            function rt(t, e, i) {
                return {x: e / t || 0, y: i / t || 0};
            }

            function st(t, e) {
                return t === e ? Y : f(t) >= f(e) ? (t < 0 ? X : V) : e < 0 ? G : q;
            }

            function ot(t, e, i) {
                i || (i = Q);
                var n = e[i[0]] - t[i[0]],
                    r = e[i[1]] - t[i[1]];
                return Math.sqrt(n * n + r * r);
            }

            function at(t, e, i) {
                i || (i = Q);
                var n = e[i[0]] - t[i[0]],
                    r = e[i[1]] - t[i[1]];
                return (180 * Math.atan2(r, n)) / Math.PI;
            }

            tt.prototype = {
                handler: function () {
                },
                init: function () {
                    this.evEl && S(this.element, this.evEl, this.domHandler), this.evTarget && S(this.target, this.evTarget, this.domHandler), this.evWin && S(D(this.element), this.evWin, this.domHandler);
                },
                destroy: function () {
                    this.evEl && C(this.element, this.evEl, this.domHandler), this.evTarget && C(this.target, this.evTarget, this.domHandler), this.evWin && C(D(this.element), this.evWin, this.domHandler);
                },
            };
            var lt = {mousedown: B, mousemove: W, mouseup: H},
                ct = "mousedown",
                ut = "mousemove mouseup";

            function ht() {
                (this.evEl = ct), (this.evWin = ut), (this.pressed = !1), tt.apply(this, arguments);
            }

            _(ht, tt, {
                handler: function (t) {
                    var e = lt[t.type];
                    e & B && 0 === t.button && (this.pressed = !0),
                    e & W && 1 !== t.which && (e = H),
                    this.pressed && (e & H && (this.pressed = !1), this.callback(this.manager, e, {
                        pointers: [t],
                        changedPointers: [t],
                        pointerType: "mouse",
                        srcEvent: t
                    }));
                },
            });
            var dt = {pointerdown: B, pointermove: W, pointerup: H, pointercancel: R, pointerout: R},
                ft = {2: "touch", 3: "pen", 4: "mouse", 5: "kinect"},
                pt = "pointerdown",
                vt = "pointermove pointerup pointercancel";

            function mt() {
                (this.evEl = pt), (this.evWin = vt), tt.apply(this, arguments), (this.store = this.manager.session.pointerEvents = []);
            }

            r.MSPointerEvent && !r.PointerEvent && ((pt = "MSPointerDown"), (vt = "MSPointerMove MSPointerUp MSPointerCancel")),
                _(mt, tt, {
                    handler: function (t) {
                        var e = this.store,
                            i = !1,
                            n = t.type.toLowerCase().replace("ms", ""),
                            r = dt[n],
                            s = ft[t.pointerType] || t.pointerType,
                            o = "touch" == s,
                            a = A(e, t.pointerId, "pointerId");
                        r & B && (0 === t.button || o) ? a < 0 && (e.push(t), (a = e.length - 1)) : r & (H | R) && (i = !0),
                        a < 0 || ((e[a] = t), this.callback(this.manager, r, {
                            pointers: e,
                            changedPointers: [t],
                            pointerType: s,
                            srcEvent: t
                        }), i && e.splice(a, 1));
                    },
                });
            var gt = {touchstart: B, touchmove: W, touchend: H, touchcancel: R},
                yt = "touchstart",
                wt = "touchstart touchmove touchend touchcancel";

            function bt() {
                (this.evTarget = yt), (this.evWin = wt), (this.started = !1), tt.apply(this, arguments);
            }

            _(bt, tt, {
                handler: function (t) {
                    var e = gt[t.type];
                    if ((e === B && (this.started = !0), this.started)) {
                        var i = function (t, e) {
                            var i = P(t.touches),
                                n = P(t.changedTouches);
                            e & (H | R) && (i = z(i.concat(n), "identifier", !0));
                            return [i, n];
                        }.call(this, t, e);
                        e & (H | R) && i[0].length - i[1].length == 0 && (this.started = !1), this.callback(this.manager, e, {
                            pointers: i[0],
                            changedPointers: i[1],
                            pointerType: "touch",
                            srcEvent: t
                        });
                    }
                },
            });
            var _t = {touchstart: B, touchmove: W, touchend: H, touchcancel: R},
                Et = "touchstart touchmove touchend touchcancel";

            function xt() {
                (this.evTarget = Et), (this.targetIds = {}), tt.apply(this, arguments);
            }

            _(xt, tt, {
                handler: function (t) {
                    var e = _t[t.type],
                        i = function (t, e) {
                            var i = P(t.touches),
                                n = this.targetIds;
                            if (e & (B | W) && 1 === i.length) return (n[i[0].identifier] = !0), [i, i];
                            var r,
                                s,
                                o = P(t.changedTouches),
                                a = [],
                                l = this.target;
                            if (
                                ((s = i.filter(function (t) {
                                    return M(t.target, l);
                                })),
                                e === B)
                            )
                                for (r = 0; r < s.length;) (n[s[r].identifier] = !0), r++;
                            r = 0;
                            for (; r < o.length;) n[o[r].identifier] && a.push(o[r]), e & (H | R) && delete n[o[r].identifier], r++;
                            if (!a.length) return;
                            return [z(s.concat(a), "identifier", !0), a];
                        }.call(this, t, e);
                    i && this.callback(this.manager, e, {
                        pointers: i[0],
                        changedPointers: i[1],
                        pointerType: "touch",
                        srcEvent: t
                    });
                },
            });
            var Tt = 2500,
                St = 25;

            function Ct() {
                tt.apply(this, arguments);
                var t = E(this.handler, this);
                (this.touch = new xt(this.manager, t)), (this.mouse = new ht(this.manager, t)), (this.primaryTouch = null), (this.lastTouches = []);
            }

            function Mt(t) {
                var e = t.changedPointers[0];
                if (e.identifier === this.primaryTouch) {
                    var i = {x: e.clientX, y: e.clientY};
                    this.lastTouches.push(i);
                    var n = this.lastTouches;
                    setTimeout(function () {
                        var t = n.indexOf(i);
                        t > -1 && n.splice(t, 1);
                    }, Tt);
                }
            }

            _(Ct, tt, {
                handler: function (t, e, i) {
                    var n = "touch" == i.pointerType,
                        r = "mouse" == i.pointerType;
                    if (!(r && i.sourceCapabilities && i.sourceCapabilities.firesTouchEvents)) {
                        if (n)
                            (function (t, e) {
                                t & B ? ((this.primaryTouch = e.changedPointers[0].identifier), Mt.call(this, e)) : t & (H | R) && Mt.call(this, e);
                            }.call(this, e, i));
                        else if (
                            r &&
                            function (t) {
                                for (var e = t.srcEvent.clientX, i = t.srcEvent.clientY, n = 0; n < this.lastTouches.length; n++) {
                                    var r = this.lastTouches[n],
                                        s = Math.abs(e - r.x),
                                        o = Math.abs(i - r.y);
                                    if (s <= St && o <= St) return !0;
                                }
                                return !1;
                            }.call(this, i)
                        )
                            return;
                        this.callback(t, e, i);
                    }
                },
                destroy: function () {
                    this.touch.destroy(), this.mouse.destroy();
                },
            });
            var kt = I(u.style, "touchAction"),
                Lt = kt !== a,
                At = "auto",
                Pt = "manipulation",
                zt = "none",
                It = "pan-x",
                Ot = "pan-y",
                Dt = (function () {
                    if (!Lt) return !1;
                    var t = {},
                        e = r.CSS && r.CSS.supports;
                    return (
                        ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function (i) {
                            t[i] = !e || r.CSS.supports("touch-action", i);
                        }),
                            t
                    );
                })();

            function $t(t, e) {
                (this.manager = t), this.set(e);
            }

            $t.prototype = {
                set: function (t) {
                    "compute" == t && (t = this.compute()), Lt && this.manager.element.style && Dt[t] && (this.manager.element.style[kt] = t), (this.actions = t.toLowerCase().trim());
                },
                update: function () {
                    this.set(this.manager.options.touchAction);
                },
                compute: function () {
                    var t = [];
                    return (
                        g(this.manager.recognizers, function (e) {
                            x(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()));
                        }),
                            (function (t) {
                                if (k(t, zt)) return zt;
                                var e = k(t, It),
                                    i = k(t, Ot);
                                if (e && i) return zt;
                                if (e || i) return e ? It : Ot;
                                if (k(t, Pt)) return Pt;
                                return At;
                            })(t.join(" "))
                    );
                },
                preventDefaults: function (t) {
                    var e = t.srcEvent,
                        i = t.offsetDirection;
                    if (this.manager.session.prevented) e.preventDefault();
                    else {
                        var n = this.actions,
                            r = k(n, zt) && !Dt[zt],
                            s = k(n, Ot) && !Dt[Ot],
                            o = k(n, It) && !Dt[It];
                        if (r) {
                            var a = 1 === t.pointers.length,
                                l = t.distance < 2,
                                c = t.deltaTime < 250;
                            if (a && l && c) return;
                        }
                        if (!o || !s) return r || (s && i & U) || (o && i & Z) ? this.preventSrc(e) : void 0;
                    }
                },
                preventSrc: function (t) {
                    (this.manager.session.prevented = !0), t.preventDefault();
                },
            };
            var Nt = 1,
                Ft = 2,
                jt = 4,
                Bt = 8,
                Wt = Bt,
                Ht = 16;

            function Rt(t) {
                (this.options = l({}, this.defaults, t || {})), (this.id = O++), (this.manager = null), (this.options.enable = T(this.options.enable, !0)), (this.state = Nt), (this.simultaneous = {}), (this.requireFail = []);
            }

            function Yt(t) {
                return t & Ht ? "cancel" : t & Bt ? "end" : t & jt ? "move" : t & Ft ? "start" : "";
            }

            function Xt(t) {
                return t == q ? "down" : t == G ? "up" : t == X ? "left" : t == V ? "right" : "";
            }

            function Vt(t, e) {
                var i = e.manager;
                return i ? i.get(t) : t;
            }

            function Gt() {
                Rt.apply(this, arguments);
            }

            function qt() {
                Gt.apply(this, arguments), (this.pX = null), (this.pY = null);
            }

            function Ut() {
                Gt.apply(this, arguments);
            }

            function Zt() {
                Rt.apply(this, arguments), (this._timer = null), (this._input = null);
            }

            function Kt() {
                Gt.apply(this, arguments);
            }

            function Qt() {
                Gt.apply(this, arguments);
            }

            function Jt() {
                Rt.apply(this, arguments), (this.pTime = !1), (this.pCenter = !1), (this._timer = null), (this._input = null), (this.count = 0);
            }

            function te(t, e) {
                return ((e = e || {}).recognizers = T(e.recognizers, te.defaults.preset)), new ee(t, e);
            }

            (Rt.prototype = {
                defaults: {},
                set: function (t) {
                    return l(this.options, t), this.manager && this.manager.touchAction.update(), this;
                },
                recognizeWith: function (t) {
                    if (m(t, "recognizeWith", this)) return this;
                    var e = this.simultaneous;
                    return e[(t = Vt(t, this)).id] || ((e[t.id] = t), t.recognizeWith(this)), this;
                },
                dropRecognizeWith: function (t) {
                    return m(t, "dropRecognizeWith", this) ? this : ((t = Vt(t, this)), delete this.simultaneous[t.id], this);
                },
                requireFailure: function (t) {
                    if (m(t, "requireFailure", this)) return this;
                    var e = this.requireFail;
                    return -1 === A(e, (t = Vt(t, this))) && (e.push(t), t.requireFailure(this)), this;
                },
                dropRequireFailure: function (t) {
                    if (m(t, "dropRequireFailure", this)) return this;
                    t = Vt(t, this);
                    var e = A(this.requireFail, t);
                    return e > -1 && this.requireFail.splice(e, 1), this;
                },
                hasRequireFailures: function () {
                    return this.requireFail.length > 0;
                },
                canRecognizeWith: function (t) {
                    return !!this.simultaneous[t.id];
                },
                emit: function (t) {
                    var e = this,
                        i = this.state;

                    function n(i) {
                        e.manager.emit(i, t);
                    }

                    i < Bt && n(e.options.event + Yt(i)), n(e.options.event), t.additionalEvent && n(t.additionalEvent), i >= Bt && n(e.options.event + Yt(i));
                },
                tryEmit: function (t) {
                    if (this.canEmit()) return this.emit(t);
                    this.state = 32;
                },
                canEmit: function () {
                    for (var t = 0; t < this.requireFail.length;) {
                        if (!(this.requireFail[t].state & (32 | Nt))) return !1;
                        t++;
                    }
                    return !0;
                },
                recognize: function (t) {
                    var e = l({}, t);
                    if (!x(this.options.enable, [this, e])) return this.reset(), void (this.state = 32);
                    this.state & (Wt | Ht | 32) && (this.state = Nt), (this.state = this.process(e)), this.state & (Ft | jt | Bt | Ht) && this.tryEmit(e);
                },
                process: function (t) {
                },
                getTouchAction: function () {
                },
                reset: function () {
                },
            }),
                _(Gt, Rt, {
                    defaults: {pointers: 1},
                    attrTest: function (t) {
                        var e = this.options.pointers;
                        return 0 === e || t.pointers.length === e;
                    },
                    process: function (t) {
                        var e = this.state,
                            i = t.eventType,
                            n = e & (Ft | jt),
                            r = this.attrTest(t);
                        return n && (i & R || !r) ? e | Ht : n || r ? (i & H ? e | Bt : e & Ft ? e | jt : Ft) : 32;
                    },
                }),
                _(qt, Gt, {
                    defaults: {event: "pan", threshold: 10, pointers: 1, direction: K},
                    getTouchAction: function () {
                        var t = this.options.direction,
                            e = [];
                        return t & U && e.push(Ot), t & Z && e.push(It), e;
                    },
                    directionTest: function (t) {
                        var e = this.options,
                            i = !0,
                            n = t.distance,
                            r = t.direction,
                            s = t.deltaX,
                            o = t.deltaY;
                        return (
                            r & e.direction || (e.direction & U ? ((r = 0 === s ? Y : s < 0 ? X : V), (i = s != this.pX), (n = Math.abs(t.deltaX))) : ((r = 0 === o ? Y : o < 0 ? G : q), (i = o != this.pY), (n = Math.abs(t.deltaY)))),
                                (t.direction = r),
                            i && n > e.threshold && r & e.direction
                        );
                    },
                    attrTest: function (t) {
                        return Gt.prototype.attrTest.call(this, t) && (this.state & Ft || (!(this.state & Ft) && this.directionTest(t)));
                    },
                    emit: function (t) {
                        (this.pX = t.deltaX), (this.pY = t.deltaY);
                        var e = Xt(t.direction);
                        e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t);
                    },
                }),
                _(Ut, Gt, {
                    defaults: {event: "pinch", threshold: 0, pointers: 2},
                    getTouchAction: function () {
                        return [zt];
                    },
                    attrTest: function (t) {
                        return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & Ft);
                    },
                    emit: function (t) {
                        if (1 !== t.scale) {
                            var e = t.scale < 1 ? "in" : "out";
                            t.additionalEvent = this.options.event + e;
                        }
                        this._super.emit.call(this, t);
                    },
                }),
                _(Zt, Rt, {
                    defaults: {event: "press", pointers: 1, time: 251, threshold: 9},
                    getTouchAction: function () {
                        return [At];
                    },
                    process: function (t) {
                        var e = this.options,
                            i = t.pointers.length === e.pointers,
                            n = t.distance < e.threshold,
                            r = t.deltaTime > e.time;
                        if (((this._input = t), !n || !i || (t.eventType & (H | R) && !r))) this.reset();
                        else if (t.eventType & B)
                            this.reset(),
                                (this._timer = v(
                                    function () {
                                        (this.state = Wt), this.tryEmit();
                                    },
                                    e.time,
                                    this
                                ));
                        else if (t.eventType & H) return Wt;
                        return 32;
                    },
                    reset: function () {
                        clearTimeout(this._timer);
                    },
                    emit: function (t) {
                        this.state === Wt && (t && t.eventType & H ? this.manager.emit(this.options.event + "up", t) : ((this._input.timeStamp = p()), this.manager.emit(this.options.event, this._input)));
                    },
                }),
                _(Kt, Gt, {
                    defaults: {event: "rotate", threshold: 0, pointers: 2},
                    getTouchAction: function () {
                        return [zt];
                    },
                    attrTest: function (t) {
                        return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & Ft);
                    },
                }),
                _(Qt, Gt, {
                    defaults: {event: "swipe", threshold: 10, velocity: 0.3, direction: U | Z, pointers: 1},
                    getTouchAction: function () {
                        return qt.prototype.getTouchAction.call(this);
                    },
                    attrTest: function (t) {
                        var e,
                            i = this.options.direction;
                        return (
                            i & (U | Z) ? (e = t.overallVelocity) : i & U ? (e = t.overallVelocityX) : i & Z && (e = t.overallVelocityY),
                            this._super.attrTest.call(this, t) && i & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && f(e) > this.options.velocity && t.eventType & H
                        );
                    },
                    emit: function (t) {
                        var e = Xt(t.offsetDirection);
                        e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t);
                    },
                }),
                _(Jt, Rt, {
                    defaults: {
                        event: "tap",
                        pointers: 1,
                        taps: 1,
                        interval: 300,
                        time: 250,
                        threshold: 9,
                        posThreshold: 10
                    },
                    getTouchAction: function () {
                        return [Pt];
                    },
                    process: function (t) {
                        var e = this.options,
                            i = t.pointers.length === e.pointers,
                            n = t.distance < e.threshold,
                            r = t.deltaTime < e.time;
                        if ((this.reset(), t.eventType & B && 0 === this.count)) return this.failTimeout();
                        if (n && r && i) {
                            if (t.eventType != H) return this.failTimeout();
                            var s = !this.pTime || t.timeStamp - this.pTime < e.interval,
                                o = !this.pCenter || ot(this.pCenter, t.center) < e.posThreshold;
                            if (((this.pTime = t.timeStamp), (this.pCenter = t.center), o && s ? (this.count += 1) : (this.count = 1), (this._input = t), 0 === this.count % e.taps))
                                return this.hasRequireFailures()
                                    ? ((this._timer = v(
                                        function () {
                                            (this.state = Wt), this.tryEmit();
                                        },
                                        e.interval,
                                        this
                                    )),
                                        Ft)
                                    : Wt;
                        }
                        return 32;
                    },
                    failTimeout: function () {
                        return (
                            (this._timer = v(
                                function () {
                                    this.state = 32;
                                },
                                this.options.interval,
                                this
                            )),
                                32
                        );
                    },
                    reset: function () {
                        clearTimeout(this._timer);
                    },
                    emit: function () {
                        this.state == Wt && ((this._input.tapCount = this.count), this.manager.emit(this.options.event, this._input));
                    },
                }),
                (te.VERSION = "2.0.7"),
                (te.defaults = {
                    domEvents: !1,
                    touchAction: "compute",
                    enable: !0,
                    inputTarget: null,
                    inputClass: null,
                    preset: [[Kt, {enable: !1}], [Ut, {enable: !1}, ["rotate"]], [Qt, {direction: U}], [qt, {direction: U}, ["swipe"]], [Jt], [Jt, {
                        event: "doubletap",
                        taps: 2
                    }, ["tap"]], [Zt]],
                    cssProps: {
                        userSelect: "none",
                        touchSelect: "none",
                        touchCallout: "none",
                        contentZooming: "none",
                        userDrag: "none",
                        tapHighlightColor: "rgba(0,0,0,0)"
                    },
                });

            function ee(t, e) {
                var i;
                (this.options = l({}, te.defaults, e || {})),
                    (this.options.inputTarget = this.options.inputTarget || t),
                    (this.handlers = {}),
                    (this.session = {}),
                    (this.recognizers = []),
                    (this.oldCssProps = {}),
                    (this.element = t),
                    (this.input = new ((i = this).options.inputClass || (N ? mt : F ? xt : $ ? Ct : ht))(i, et)),
                    (this.touchAction = new $t(this, this.options.touchAction)),
                    ie(this, !0),
                    g(
                        this.options.recognizers,
                        function (t) {
                            var e = this.add(new t[0](t[1]));
                            t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3]);
                        },
                        this
                    );
            }

            function ie(t, e) {
                var i,
                    n = t.element;
                n.style &&
                (g(t.options.cssProps, function (r, s) {
                    (i = I(n.style, s)), e ? ((t.oldCssProps[i] = n.style[i]), (n.style[i] = r)) : (n.style[i] = t.oldCssProps[i] || "");
                }),
                e || (t.oldCssProps = {}));
            }

            (ee.prototype = {
                set: function (t) {
                    return l(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), (this.input.target = t.inputTarget), this.input.init()), this;
                },
                stop: function (t) {
                    this.session.stopped = t ? 2 : 1;
                },
                recognize: function (t) {
                    var e = this.session;
                    if (!e.stopped) {
                        var i;
                        this.touchAction.preventDefaults(t);
                        var n = this.recognizers,
                            r = e.curRecognizer;
                        (!r || (r && r.state & Wt)) && (r = e.curRecognizer = null);
                        for (var s = 0; s < n.length;) (i = n[s]), 2 === e.stopped || (r && i != r && !i.canRecognizeWith(r)) ? i.reset() : i.recognize(t), !r && i.state & (Ft | jt | Bt) && (r = e.curRecognizer = i), s++;
                    }
                },
                get: function (t) {
                    if (t instanceof Rt) return t;
                    for (var e = this.recognizers, i = 0; i < e.length; i++) if (e[i].options.event == t) return e[i];
                    return null;
                },
                add: function (t) {
                    if (m(t, "add", this)) return this;
                    var e = this.get(t.options.event);
                    return e && this.remove(e), this.recognizers.push(t), (t.manager = this), this.touchAction.update(), t;
                },
                remove: function (t) {
                    if (m(t, "remove", this)) return this;
                    if ((t = this.get(t))) {
                        var e = this.recognizers,
                            i = A(e, t);
                        -1 !== i && (e.splice(i, 1), this.touchAction.update());
                    }
                    return this;
                },
                on: function (t, e) {
                    if (t !== a && e !== a) {
                        var i = this.handlers;
                        return (
                            g(L(t), function (t) {
                                (i[t] = i[t] || []), i[t].push(e);
                            }),
                                this
                        );
                    }
                },
                off: function (t, e) {
                    if (t !== a) {
                        var i = this.handlers;
                        return (
                            g(L(t), function (t) {
                                e ? i[t] && i[t].splice(A(i[t], e), 1) : delete i[t];
                            }),
                                this
                        );
                    }
                },
                emit: function (t, e) {
                    this.options.domEvents &&
                    (function (t, e) {
                        var i = s.createEvent("Event");
                        i.initEvent(t, !0, !0), (i.gesture = e), e.target.dispatchEvent(i);
                    })(t, e);
                    var i = this.handlers[t] && this.handlers[t].slice();
                    if (i && i.length) {
                        (e.type = t),
                            (e.preventDefault = function () {
                                e.srcEvent.preventDefault();
                            });
                        for (var n = 0; n < i.length;) i[n](e), n++;
                    }
                },
                destroy: function () {
                    this.element && ie(this, !1), (this.handlers = {}), (this.session = {}), this.input.destroy(), (this.element = null);
                },
            }),
                l(te, {
                    INPUT_START: B,
                    INPUT_MOVE: W,
                    INPUT_END: H,
                    INPUT_CANCEL: R,
                    STATE_POSSIBLE: Nt,
                    STATE_BEGAN: Ft,
                    STATE_CHANGED: jt,
                    STATE_ENDED: Bt,
                    STATE_RECOGNIZED: Wt,
                    STATE_CANCELLED: Ht,
                    STATE_FAILED: 32,
                    DIRECTION_NONE: Y,
                    DIRECTION_LEFT: X,
                    DIRECTION_RIGHT: V,
                    DIRECTION_UP: G,
                    DIRECTION_DOWN: q,
                    DIRECTION_HORIZONTAL: U,
                    DIRECTION_VERTICAL: Z,
                    DIRECTION_ALL: K,
                    Manager: ee,
                    Input: tt,
                    TouchAction: $t,
                    TouchInput: xt,
                    MouseInput: ht,
                    PointerEventInput: mt,
                    TouchMouseInput: Ct,
                    SingleTouchInput: bt,
                    Recognizer: Rt,
                    AttrRecognizer: Gt,
                    Tap: Jt,
                    Pan: qt,
                    Swipe: Qt,
                    Pinch: Ut,
                    Rotate: Kt,
                    Press: Zt,
                    on: S,
                    off: C,
                    each: g,
                    merge: b,
                    extend: w,
                    assign: l,
                    inherit: _,
                    bindFn: E,
                    prefixed: I,
                }),
                ((void 0 !== r ? r : "undefined" != typeof self ? self : {}).Hammer = te),
            (n = function () {
                return te;
            }.call(e, i, e, t)) === a || (t.exports = n);
        })(window, document);
    },
    function (t, e, i) {
        var n, r;
        !(function (s, o) {
            "use strict";
            (n = [i(222)]),
            (r = function (t) {
                return o(s, t);
            }.apply(e, n)) === undefined || (t.exports = r);
        })("undefined" != typeof window ? window : this, function (t, e) {
            "use strict";
            var i = t.jQuery,
                n = t.console;

            function r(t, e) {
                for (var i in e) t[i] = e[i];
                return t;
            }

            var s = Array.prototype.slice;

            function o(t, e, a) {
                if (!(this instanceof o)) return new o(t, e, a);
                var l,
                    c = t;
                ("string" == typeof t && (c = document.querySelectorAll(t)), c)
                    ? ((this.elements = ((l = c), Array.isArray(l) ? l : "object" == typeof l && "number" == typeof l.length ? s.call(l) : [l])),
                        (this.options = r({}, this.options)),
                        "function" == typeof e ? (a = e) : r(this.options, e),
                    a && this.on("always", a),
                        this.getImages(),
                    i && (this.jqDeferred = new i.Deferred()),
                        setTimeout(this.check.bind(this)))
                    : n.error("Bad element for imagesLoaded " + (c || t));
            }

            (o.prototype = Object.create(e.prototype)),
                (o.prototype.options = {}),
                (o.prototype.getImages = function () {
                    (this.images = []), this.elements.forEach(this.addElementImages, this);
                }),
                (o.prototype.addElementImages = function (t) {
                    "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
                    var e = t.nodeType;
                    if (e && a[e]) {
                        for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                            var r = i[n];
                            this.addImage(r);
                        }
                        if ("string" == typeof this.options.background) {
                            var s = t.querySelectorAll(this.options.background);
                            for (n = 0; n < s.length; n++) {
                                var o = s[n];
                                this.addElementBackgroundImages(o);
                            }
                        }
                    }
                });
            var a = {1: !0, 9: !0, 11: !0};

            function l(t) {
                this.img = t;
            }

            function c(t, e) {
                (this.url = t), (this.element = e), (this.img = new Image());
            }

            return (
                (o.prototype.addElementBackgroundImages = function (t) {
                    var e = getComputedStyle(t);
                    if (e)
                        for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
                            var r = n && n[2];
                            r && this.addBackground(r, t), (n = i.exec(e.backgroundImage));
                        }
                }),
                    (o.prototype.addImage = function (t) {
                        var e = new l(t);
                        this.images.push(e);
                    }),
                    (o.prototype.addBackground = function (t, e) {
                        var i = new c(t, e);
                        this.images.push(i);
                    }),
                    (o.prototype.check = function () {
                        var t = this;

                        function e(e, i, n) {
                            setTimeout(function () {
                                t.progress(e, i, n);
                            });
                        }

                        (this.progressedCount = 0),
                            (this.hasAnyBroken = !1),
                            this.images.length
                                ? this.images.forEach(function (t) {
                                    t.once("progress", e), t.check();
                                })
                                : this.complete();
                    }),
                    (o.prototype.progress = function (t, e, i) {
                        this.progressedCount++,
                            (this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded),
                            this.emitEvent("progress", [this, t, e]),
                        this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t),
                        this.progressedCount == this.images.length && this.complete(),
                        this.options.debug && n && n.log("progress: " + i, t, e);
                    }),
                    (o.prototype.complete = function () {
                        var t = this.hasAnyBroken ? "fail" : "done";
                        if (((this.isComplete = !0), this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred)) {
                            var e = this.hasAnyBroken ? "reject" : "resolve";
                            this.jqDeferred[e](this);
                        }
                    }),
                    (l.prototype = Object.create(e.prototype)),
                    (l.prototype.check = function () {
                        this.getIsImageComplete()
                            ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
                            : ((this.proxyImage = new Image()),
                                this.proxyImage.addEventListener("load", this),
                                this.proxyImage.addEventListener("error", this),
                                this.img.addEventListener("load", this),
                                this.img.addEventListener("error", this),
                                (this.proxyImage.src = this.img.src));
                    }),
                    (l.prototype.getIsImageComplete = function () {
                        return this.img.complete && this.img.naturalWidth;
                    }),
                    (l.prototype.confirm = function (t, e) {
                        (this.isLoaded = t), this.emitEvent("progress", [this, this.img, e]);
                    }),
                    (l.prototype.handleEvent = function (t) {
                        var e = "on" + t.type;
                        this[e] && this[e](t);
                    }),
                    (l.prototype.onload = function () {
                        this.confirm(!0, "onload"), this.unbindEvents();
                    }),
                    (l.prototype.onerror = function () {
                        this.confirm(!1, "onerror"), this.unbindEvents();
                    }),
                    (l.prototype.unbindEvents = function () {
                        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
                    }),
                    (c.prototype = Object.create(l.prototype)),
                    (c.prototype.check = function () {
                        this.img.addEventListener("load", this), this.img.addEventListener("error", this), (this.img.src = this.url), this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents());
                    }),
                    (c.prototype.unbindEvents = function () {
                        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
                    }),
                    (c.prototype.confirm = function (t, e) {
                        (this.isLoaded = t), this.emitEvent("progress", [this, this.element, e]);
                    }),
                    (o.makeJQueryPlugin = function (e) {
                        (e = e || t.jQuery) &&
                        ((i = e).fn.imagesLoaded = function (t, e) {
                            return new o(this, t, e).jqDeferred.promise(i(this));
                        });
                    }),
                    o.makeJQueryPlugin(),
                    o
            );
        });
    },
    function (t, e, i) {
        var n, r;
        "undefined" != typeof window && window,
        (r =
            "function" ==
            typeof (n = function () {
                "use strict";

                function t() {
                }

                var e = t.prototype;
                return (
                    (e.on = function (t, e) {
                        if (t && e) {
                            var i = (this._events = this._events || {}),
                                n = (i[t] = i[t] || []);
                            return -1 == n.indexOf(e) && n.push(e), this;
                        }
                    }),
                        (e.once = function (t, e) {
                            if (t && e) {
                                this.on(t, e);
                                var i = (this._onceEvents = this._onceEvents || {});
                                return ((i[t] = i[t] || {})[e] = !0), this;
                            }
                        }),
                        (e.off = function (t, e) {
                            var i = this._events && this._events[t];
                            if (i && i.length) {
                                var n = i.indexOf(e);
                                return -1 != n && i.splice(n, 1), this;
                            }
                        }),
                        (e.emitEvent = function (t, e) {
                            var i = this._events && this._events[t];
                            if (i && i.length) {
                                (i = i.slice(0)), (e = e || []);
                                for (var n = this._onceEvents && this._onceEvents[t], r = 0; r < i.length; r++) {
                                    var s = i[r];
                                    n && n[s] && (this.off(t, s), delete n[s]), s.apply(this, e);
                                }
                                return this;
                            }
                        }),
                        (e.allOff = function () {
                            delete this._events, delete this._onceEvents;
                        }),
                        t
                );
            })
                ? n.call(e, i, e, t)
                : n) === undefined || (t.exports = r);
    },
    function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = (function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                }
            }

            return function (e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e;
            };
        })();
        e.SharingButton = (function () {
            function t(e) {
                !(function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                })(this, t),
                    (this.buttons = e),
                    this._addEvents();
            }

            return (
                n(t, [
                    {
                        key: "_addEvents",
                        value: function () {
                            this.buttons.forEach(function (t) {
                                t.addEventListener("click", function (t) {
                                    t.target.parentElement.classList.toggle("sharing-button__wrapper--active"),
                                        t.target.classList.toggle("sharing-button__toggle--active"),
                                        window.atiTracking(t.target, t.target.parentElement.classList.contains("sharing-button__wrapper--active") ? "share-click-open" : "share-click-close", "action");
                                });
                            });
                        },
                    },
                ]),
                    t
            );
        })();
    },
    function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = (function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                }
            }

            return function (e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e;
            };
        })();
        var r = (function () {
            function t() {
                !(function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                })(this, t);
                var e = [].slice.call(document.querySelectorAll("a")),
                    i = [].slice.call(document.querySelectorAll("button"));
                (this.actionItems = e.concat(i)), (this.currentFocusedElement = null), this._addEvents();
            }

            return (
                n(t, [
                    {
                        key: "_addEvents",
                        value: function () {
                            var t = this;
                            this.actionItems.forEach(function (e) {
                                return e.addEventListener("keyup", function (i) {
                                    9 === i.keyCode && (t.currentFocusedElement && t.currentFocusedElement.classList.remove("a11y-focus"), e.classList.add("a11y-focus"), (t.currentFocusedElement = e));
                                });
                            });
                        },
                    },
                ]),
                    t
            );
        })();
        e["default"] = r;
    },
    function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = (function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                }
            }

            return function (e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e;
            };
        })();
        e.ImageLazyLoading = (function () {
            function t() {
                !(function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                })(this, t);
                var e = this;
                !(/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) && "IntersectionObserver" in window
                    ? ((e.options = {rootMargin: "0px 0px 0px 0px"}),
                        (e.observer = new IntersectionObserver(this._lazyLoader, e.options)),
                        document.querySelectorAll(".image__list-lazy-image").forEach(function (t) {
                            e.observer.observe(t);
                        }))
                    : document.querySelectorAll(".image__list-lazy-image").forEach(function (t) {
                        t.classList.remove("image__list-lazy-image"), t.getAttribute("data-src") && (t.src = t.getAttribute("data-src"));
                    });
            }

            return (
                n(t, [
                    {
                        key: "_lazyLoader",
                        value: function (t) {
                            var e = this;
                            t.forEach(function (t) {
                                t.isIntersecting && (t.target.classList.remove("image__list-lazy-image"), t.target.getAttribute("data-src") && ((t.target.src = t.target.getAttribute("data-src")), e.unobserve(t.target)));
                            });
                        },
                    },
                ]),
                    t
            );
        })();
    },
    function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), (e.Hotspot = undefined);
        var n = (function () {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                    }
                }

                return function (e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e;
                };
            })(),
            r = i(41);
        e.Hotspot = (function () {
            function t(e) {
                !(function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                })(this, t),
                    (this.hotspots = e),
                    this._addEvents();
            }

            return (
                n(t, [
                    {
                        key: "_addEvents",
                        value: function () {
                            var t = this,
                                e = document.querySelectorAll(".artwork-page__hotspot-detail"),
                                i = document.querySelector(".artwork-page__hotspot-detail__close-button");
                            this.hotspots.forEach(function (i, n) {
                                i.addEventListener("click", function (i) {
                                    var s = new r.Tracking();
                                    s.sendSzmPi(), s.sendAtPi();
                                    var o = e[n].classList.contains("artwork-page__hotspot-detail--open");
                                    i.target.classList.remove("artwork-page__image-hotspot--pulsating"),
                                        e.forEach(function (t) {
                                            t.classList.remove("artwork-page__hotspot-detail--open");
                                        }),
                                        document.querySelector(".navigation").classList.add("navigation--is-hidden"),
                                        e[n].classList.toggle("artwork-page__hotspot-detail--open", !o),
                                        o ? t._addTrackingEvent(i.target, "hotspot-click-close") : t._addTrackingEvent(i.target, "hotspot-click-open");
                                });
                            }),
                            i &&
                            i.addEventListener("click", function (i) {
                                document.querySelector(".navigation").classList.remove("navigation--is-hidden"),
                                    t._addTrackingEvent(i.target, "hotspot-click-close"),
                                    e.forEach(function (t) {
                                        t.classList.remove("artwork-page__hotspot-detail--open");
                                    });
                            });
                        },
                    },
                    {
                        key: "_addTrackingEvent",
                        value: function (t, e) {
                            window.atiTracking(t, e, "action");
                        },
                    },
                ]),
                    t
            );
        })();
    },
    function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = (function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                }
            }

            return function (e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e;
            };
        })();
        e.HotspotToggle = (function () {
            function t() {
                !(function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                })(this, t),
                    this._addEvents();
            }

            return (
                n(t, [
                    {
                        key: "_addEvents",
                        value: function () {
                            document.querySelector(".artwork-page__switch__input").addEventListener("click", function (t) {
                                var e = t.target.nextElementSibling.nextElementSibling,
                                    i = e.innerText,
                                    n = e.dataset.text,
                                    r = document.querySelectorAll(".artwork-page__image-hotspot");
                                (e.innerText = n),
                                    (e.dataset.text = i),
                                    r.forEach(function (e) {
                                        e.classList.toggle("artwork-page__image-hotspot--is-hidden", t.target.checked);
                                    });
                            });
                        },
                    },
                ]),
                    t
            );
        })();
    },
    function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), (e.MuseumOverlay = undefined);
        var n = (function () {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                    }
                }

                return function (e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e;
                };
            })(),
            r = i(41);
        e.MuseumOverlay = (function () {
            function t() {
                !(function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                })(this, t),
                    this._addEvents();
            }

            return (
                n(t, [
                    {
                        key: "_addEvents",
                        value: function () {
                            var t = document.querySelector(".museum-overview-overlay"),
                                e = document.querySelector(".navigation__overlay-button");
                            e &&
                            e.addEventListener("click", function () {
                                var t = new r.Tracking();
                                t.sendSzmPi(), t.sendAtPi("Museumsübersicht");
                            });
                            var i = document.querySelector(".museum-overview-overlay__close"),
                                n = (document.querySelectorAll(".museum-overview-overlay__museum-logo"), document.querySelectorAll(".museum-overview-overlay__museum-wrapper"));
                            t &&
                            e &&
                            i &&
                            (t.classList.add("museum-overview-overlay--animate"),
                                e.addEventListener("click", function () {
                                    t.classList.add("museum-overview-overlay--is-open"),
                                        window.atiTracking(t, "museen-click", "navigation"),
                                        n.forEach(function (t) {
                                            t.addEventListener("click", function (t) {
                                                window.atiTracking(t.currentTarget, "teaser-click", "action");
                                            });
                                        });
                                }),
                                i.addEventListener("click", function () {
                                    t.classList.remove("museum-overview-overlay--is-open");
                                }));
                        },
                    },
                ]),
                    t
            );
        })();
    },
    function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = (function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                }
            }

            return function (e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e;
            };
        })();
        e.PreventDownload = (function () {
            function t(e) {
                !(function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                })(this, t),
                    (this.target = e),
                    this._addEvents();
            }

            return (
                n(t, [
                    {
                        key: "_addEvents",
                        value: function () {
                            this.target.addEventListener("contextmenu", function (t) {
                                return t.preventDefault(), !1;
                            });
                        },
                    },
                ]),
                    t
            );
        })();
    },
]);
