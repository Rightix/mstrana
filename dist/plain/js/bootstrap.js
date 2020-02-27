"use strict";
function _typeof(t) {
  return (_typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function(t) {
          return typeof t;
        }
      : function(t) {
          return t &&
            "function" == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? "symbol"
            : typeof t;
        })(t);
}
!(function(t, e) {
  "object" ===
    ("undefined" == typeof exports ? "undefined" : _typeof(exports)) &&
  "undefined" != typeof module
    ? e(exports, require("jquery"), require("popper.js"))
    : "function" == typeof define && define.amd
    ? define(["exports", "jquery", "popper.js"], e)
    : e((t.bootstrap = {}), t.jQuery, t.Popper);
})(void 0, function(t, e, c) {
  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  function o(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }
  function h(r) {
    for (var t = 1; t < arguments.length; t++) {
      var s = null != arguments[t] ? arguments[t] : {},
        e = Object.keys(s);
      "function" == typeof Object.getOwnPropertySymbols &&
        (e = e.concat(
          Object.getOwnPropertySymbols(s).filter(function(t) {
            return Object.getOwnPropertyDescriptor(s, t).enumerable;
          })
        )),
        e.forEach(function(t) {
          var e, n, i;
          (e = r),
            (i = s[(n = t)]),
            n in e
              ? Object.defineProperty(e, n, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                })
              : (e[n] = i);
        });
    }
    return r;
  }
  (e = e && e.hasOwnProperty("default") ? e.default : e),
    (c = c && c.hasOwnProperty("default") ? c.default : c);
  var r,
    n,
    l,
    d =
      ((n = "transitionend"),
      (l = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(t) {
          for (; (t += ~~(1e6 * Math.random())), document.getElementById(t); );
          return t;
        },
        getSelectorFromElement: function(t) {
          var e = t.getAttribute("data-target");
          (e && "#" !== e) || (e = t.getAttribute("href") || "");
          try {
            return 0 < r(document).find(e).length ? e : null;
          } catch (t) {
            return null;
          }
        },
        getTransitionDurationFromElement: function(t) {
          if (!t) return 0;
          var e = r(t).css("transition-duration");
          return parseFloat(e)
            ? ((e = e.split(",")[0]), 1e3 * parseFloat(e))
            : 0;
        },
        reflow: function(t) {
          return t.offsetHeight;
        },
        triggerTransitionEnd: function(t) {
          r(t).trigger(n);
        },
        supportsTransitionEnd: function() {
          return Boolean(n);
        },
        isElement: function(t) {
          return (t[0] || t).nodeType;
        },
        typeCheckConfig: function(t, e, n) {
          for (var i in n)
            if (Object.prototype.hasOwnProperty.call(n, i)) {
              var r = n[i],
                s = e[i],
                o =
                  s && l.isElement(s)
                    ? "element"
                    : ((a = s),
                      {}.toString
                        .call(a)
                        .match(/\s([a-z]+)/i)[1]
                        .toLowerCase());
              if (!new RegExp(r).test(o))
                throw new Error(
                  t.toUpperCase() +
                    ': Option "' +
                    i +
                    '" provided type "' +
                    o +
                    '" but expected type "' +
                    r +
                    '".'
                );
            }
          var a;
        }
      }),
      ((r = e).fn.emulateTransitionEnd = s),
      (r.event.special[l.TRANSITION_END] = {
        bindType: n,
        delegateType: n,
        handle: function(t) {
          if (r(t.target).is(this))
            return t.handleObj.handler.apply(this, arguments);
        }
      }),
      l);
  function s(t) {
    var e = this,
      n = !1;
    return (
      r(this).one(l.TRANSITION_END, function() {
        n = !0;
      }),
      setTimeout(function() {
        n || l.triggerTransitionEnd(e);
      }, t),
      this
    );
  }
  var a,
    u,
    f,
    g,
    _,
    m,
    p,
    v,
    E,
    y,
    C,
    b,
    T,
    I,
    D,
    w,
    S,
    A,
    N,
    O,
    k,
    P,
    j,
    H,
    L,
    R,
    x,
    W,
    U,
    F,
    K,
    M,
    Q,
    B,
    V,
    Y,
    q,
    z,
    J,
    Z,
    G,
    $,
    X,
    tt,
    et,
    nt,
    it,
    rt,
    st,
    ot,
    at,
    lt,
    ht,
    ct,
    ut,
    ft,
    dt,
    gt,
    _t,
    mt,
    pt,
    vt,
    Et,
    yt,
    Ct,
    bt,
    Tt,
    It,
    Dt,
    wt,
    St,
    At,
    Nt,
    Ot,
    kt,
    Pt,
    jt,
    Ht,
    Lt,
    Rt,
    xt,
    Wt,
    Ut,
    Ft,
    Kt,
    Mt,
    Qt,
    Bt,
    Vt,
    Yt,
    qt,
    zt,
    Jt,
    Zt,
    Gt,
    $t,
    Xt,
    te,
    ee,
    ne,
    ie,
    re,
    se,
    oe,
    ae,
    le,
    he,
    ce,
    ue,
    fe,
    de,
    ge,
    _e,
    me,
    pe,
    ve,
    Ee,
    ye,
    Ce,
    be,
    Te,
    Ie,
    De,
    we,
    Se,
    Ae,
    Ne,
    Oe,
    ke,
    Pe,
    je,
    He,
    Le,
    Re,
    xe,
    We,
    Ue,
    Fe,
    Ke,
    Me,
    Qe,
    Be,
    Ve,
    Ye,
    qe,
    ze,
    Je,
    Ze,
    Ge,
    $e,
    Xe,
    tn,
    en,
    nn,
    rn,
    sn,
    on,
    an,
    ln,
    hn,
    cn,
    un,
    fn,
    dn,
    gn,
    _n,
    mn,
    pn,
    vn,
    En,
    yn,
    Cn,
    bn,
    Tn,
    In,
    Dn,
    wn,
    Sn,
    An,
    Nn,
    On,
    kn,
    Pn,
    jn,
    Hn,
    Ln,
    Rn,
    xn,
    Wn,
    Un,
    Fn,
    Kn,
    Mn,
    Qn,
    Bn,
    Vn,
    Yn,
    qn =
      ((u = "alert"),
      (g = "." + (f = "bs.alert")),
      (_ = (a = e).fn[u]),
      (m = {
        CLOSE: "close" + g,
        CLOSED: "closed" + g,
        CLICK_DATA_API: "click" + g + ".data-api"
      }),
      (p = "alert"),
      (v = "fade"),
      (E = "show"),
      (y = (function() {
        function i(t) {
          this._element = t;
        }
        var t = i.prototype;
        return (
          (t.close = function(t) {
            t = t || this._element;
            var e = this._getRootElement(t);
            this._triggerCloseEvent(e).isDefaultPrevented() ||
              this._removeElement(e);
          }),
          (t.dispose = function() {
            a.removeData(this._element, f), (this._element = null);
          }),
          (t._getRootElement = function(t) {
            var e = d.getSelectorFromElement(t),
              n = !1;
            return e && (n = a(e)[0]), (n = n || a(t).closest("." + p)[0]);
          }),
          (t._triggerCloseEvent = function(t) {
            var e = a.Event(m.CLOSE);
            return a(t).trigger(e), e;
          }),
          (t._removeElement = function(e) {
            var n = this;
            if ((a(e).removeClass(E), a(e).hasClass(v))) {
              var t = d.getTransitionDurationFromElement(e);
              a(e)
                .one(d.TRANSITION_END, function(t) {
                  return n._destroyElement(e, t);
                })
                .emulateTransitionEnd(t);
            } else this._destroyElement(e);
          }),
          (t._destroyElement = function(t) {
            a(t)
              .detach()
              .trigger(m.CLOSED)
              .remove();
          }),
          (i._jQueryInterface = function(n) {
            return this.each(function() {
              var t = a(this),
                e = t.data(f);
              e || ((e = new i(this)), t.data(f, e)),
                "close" === n && e[n](this);
            });
          }),
          (i._handleDismiss = function(e) {
            return function(t) {
              t && t.preventDefault(), e.close(this);
            };
          }),
          o(i, null, [
            {
              key: "VERSION",
              get: function() {
                return "4.1.0";
              }
            }
          ]),
          i
        );
      })()),
      a(document).on(
        m.CLICK_DATA_API,
        '[data-dismiss="alert"]',
        y._handleDismiss(new y())
      ),
      (a.fn[u] = y._jQueryInterface),
      (a.fn[u].Constructor = y),
      (a.fn[u].noConflict = function() {
        return (a.fn[u] = _), y._jQueryInterface;
      }),
      y),
    zn =
      ((b = "button"),
      (I = "." + (T = "bs.button")),
      (D = ".data-api"),
      (w = (C = e).fn[b]),
      (S = "active"),
      (A = "btn"),
      (O = '[data-toggle^="button"]'),
      (k = '[data-toggle="buttons"]'),
      (P = "input"),
      (j = ".active"),
      (H = ".btn"),
      (L = {
        CLICK_DATA_API: "click" + I + D,
        FOCUS_BLUR_DATA_API: (N = "focus") + I + D + " blur" + I + D
      }),
      (R = (function() {
        function n(t) {
          this._element = t;
        }
        var t = n.prototype;
        return (
          (t.toggle = function() {
            var t = !0,
              e = !0,
              n = C(this._element).closest(k)[0];
            if (n) {
              var i = C(this._element).find(P)[0];
              if (i) {
                if ("radio" === i.type)
                  if (i.checked && C(this._element).hasClass(S)) t = !1;
                  else {
                    var r = C(n).find(j)[0];
                    r && C(r).removeClass(S);
                  }
                if (t) {
                  if (
                    i.hasAttribute("disabled") ||
                    n.hasAttribute("disabled") ||
                    i.classList.contains("disabled") ||
                    n.classList.contains("disabled")
                  )
                    return;
                  (i.checked = !C(this._element).hasClass(S)),
                    C(i).trigger("change");
                }
                i.focus(), (e = !1);
              }
            }
            e &&
              this._element.setAttribute(
                "aria-pressed",
                !C(this._element).hasClass(S)
              ),
              t && C(this._element).toggleClass(S);
          }),
          (t.dispose = function() {
            C.removeData(this._element, T), (this._element = null);
          }),
          (n._jQueryInterface = function(e) {
            return this.each(function() {
              var t = C(this).data(T);
              t || ((t = new n(this)), C(this).data(T, t)),
                "toggle" === e && t[e]();
            });
          }),
          o(n, null, [
            {
              key: "VERSION",
              get: function() {
                return "4.1.0";
              }
            }
          ]),
          n
        );
      })()),
      C(document)
        .on(L.CLICK_DATA_API, O, function(t) {
          t.preventDefault();
          var e = t.target;
          C(e).hasClass(A) || (e = C(e).closest(H)),
            R._jQueryInterface.call(C(e), "toggle");
        })
        .on(L.FOCUS_BLUR_DATA_API, O, function(t) {
          var e = C(t.target).closest(H)[0];
          C(e).toggleClass(N, /^focus(in)?$/.test(t.type));
        }),
      (C.fn[b] = R._jQueryInterface),
      (C.fn[b].Constructor = R),
      (C.fn[b].noConflict = function() {
        return (C.fn[b] = w), R._jQueryInterface;
      }),
      R),
    Jn =
      ((W = "carousel"),
      (F = "." + (U = "bs.carousel")),
      (K = ".data-api"),
      (M = (x = e).fn[W]),
      (Q = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0
      }),
      (B = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean"
      }),
      (V = "next"),
      (Y = "prev"),
      (q = "left"),
      (z = "right"),
      (J = {
        SLIDE: "slide" + F,
        SLID: "slid" + F,
        KEYDOWN: "keydown" + F,
        MOUSEENTER: "mouseenter" + F,
        MOUSELEAVE: "mouseleave" + F,
        TOUCHEND: "touchend" + F,
        LOAD_DATA_API: "load" + F + K,
        CLICK_DATA_API: "click" + F + K
      }),
      (Z = "carousel"),
      (G = "active"),
      ($ = "slide"),
      (X = "carousel-item-right"),
      (tt = "carousel-item-left"),
      (et = "carousel-item-next"),
      (nt = "carousel-item-prev"),
      (it = ".active"),
      (rt = ".active.carousel-item"),
      (st = ".carousel-item"),
      (ot = ".carousel-item-next, .carousel-item-prev"),
      (at = ".carousel-indicators"),
      (lt = "[data-slide], [data-slide-to]"),
      (ht = '[data-ride="carousel"]'),
      (ct = (function() {
        function s(t, e) {
          (this._items = null),
            (this._interval = null),
            (this._activeElement = null),
            (this._isPaused = !1),
            (this._isSliding = !1),
            (this.touchTimeout = null),
            (this._config = this._getConfig(e)),
            (this._element = x(t)[0]),
            (this._indicatorsElement = x(this._element).find(at)[0]),
            this._addEventListeners();
        }
        var t = s.prototype;
        return (
          (t.next = function() {
            this._isSliding || this._slide(V);
          }),
          (t.nextWhenVisible = function() {
            !document.hidden &&
              x(this._element).is(":visible") &&
              "hidden" !== x(this._element).css("visibility") &&
              this.next();
          }),
          (t.prev = function() {
            this._isSliding || this._slide(Y);
          }),
          (t.pause = function(t) {
            t || (this._isPaused = !0),
              x(this._element).find(ot)[0] &&
                (d.triggerTransitionEnd(this._element), this.cycle(!0)),
              clearInterval(this._interval),
              (this._interval = null);
          }),
          (t.cycle = function(t) {
            t || (this._isPaused = !1),
              this._interval &&
                (clearInterval(this._interval), (this._interval = null)),
              this._config.interval &&
                !this._isPaused &&
                (this._interval = setInterval(
                  (document.visibilityState
                    ? this.nextWhenVisible
                    : this.next
                  ).bind(this),
                  this._config.interval
                ));
          }),
          (t.to = function(t) {
            var e = this;
            this._activeElement = x(this._element).find(rt)[0];
            var n = this._getItemIndex(this._activeElement);
            if (!(t > this._items.length - 1 || t < 0))
              if (this._isSliding)
                x(this._element).one(J.SLID, function() {
                  return e.to(t);
                });
              else {
                if (n === t) return this.pause(), void this.cycle();
                var i = n < t ? V : Y;
                this._slide(i, this._items[t]);
              }
          }),
          (t.dispose = function() {
            x(this._element).off(F),
              x.removeData(this._element, U),
              (this._items = null),
              (this._config = null),
              (this._element = null),
              (this._interval = null),
              (this._isPaused = null),
              (this._isSliding = null),
              (this._activeElement = null),
              (this._indicatorsElement = null);
          }),
          (t._getConfig = function(t) {
            return (t = h({}, Q, t)), d.typeCheckConfig(W, t, B), t;
          }),
          (t._addEventListeners = function() {
            var e = this;
            this._config.keyboard &&
              x(this._element).on(J.KEYDOWN, function(t) {
                return e._keydown(t);
              }),
              "hover" === this._config.pause &&
                (x(this._element)
                  .on(J.MOUSEENTER, function(t) {
                    return e.pause(t);
                  })
                  .on(J.MOUSELEAVE, function(t) {
                    return e.cycle(t);
                  }),
                "ontouchstart" in document.documentElement &&
                  x(this._element).on(J.TOUCHEND, function() {
                    e.pause(),
                      e.touchTimeout && clearTimeout(e.touchTimeout),
                      (e.touchTimeout = setTimeout(function(t) {
                        return e.cycle(t);
                      }, 500 + e._config.interval));
                  }));
          }),
          (t._keydown = function(t) {
            if (!/input|textarea/i.test(t.target.tagName))
              switch (t.which) {
                case 37:
                  t.preventDefault(), this.prev();
                  break;
                case 39:
                  t.preventDefault(), this.next();
              }
          }),
          (t._getItemIndex = function(t) {
            return (
              (this._items = x.makeArray(
                x(t)
                  .parent()
                  .find(st)
              )),
              this._items.indexOf(t)
            );
          }),
          (t._getItemByDirection = function(t, e) {
            var n = t === V,
              i = t === Y,
              r = this._getItemIndex(e),
              s = this._items.length - 1;
            if (((i && 0 === r) || (n && r === s)) && !this._config.wrap)
              return e;
            var o = (r + (t === Y ? -1 : 1)) % this._items.length;
            return -1 == o
              ? this._items[this._items.length - 1]
              : this._items[o];
          }),
          (t._triggerSlideEvent = function(t, e) {
            var n = this._getItemIndex(t),
              i = this._getItemIndex(x(this._element).find(rt)[0]),
              r = x.Event(J.SLIDE, {
                relatedTarget: t,
                direction: e,
                from: i,
                to: n
              });
            return x(this._element).trigger(r), r;
          }),
          (t._setActiveIndicatorElement = function(t) {
            if (this._indicatorsElement) {
              x(this._indicatorsElement)
                .find(it)
                .removeClass(G);
              var e = this._indicatorsElement.children[this._getItemIndex(t)];
              e && x(e).addClass(G);
            }
          }),
          (t._slide = function(t, e) {
            var n,
              i,
              r,
              s = this,
              o = x(this._element).find(rt)[0],
              a = this._getItemIndex(o),
              l = e || (o && this._getItemByDirection(t, o)),
              h = this._getItemIndex(l),
              c = Boolean(this._interval);
            if (
              ((r = t === V ? ((n = tt), (i = et), q) : ((n = X), (i = nt), z)),
              l && x(l).hasClass(G))
            )
              this._isSliding = !1;
            else if (
              !this._triggerSlideEvent(l, r).isDefaultPrevented() &&
              o &&
              l
            ) {
              (this._isSliding = !0),
                c && this.pause(),
                this._setActiveIndicatorElement(l);
              var u = x.Event(J.SLID, {
                relatedTarget: l,
                direction: r,
                from: a,
                to: h
              });
              if (x(this._element).hasClass($)) {
                x(l).addClass(i),
                  d.reflow(l),
                  x(o).addClass(n),
                  x(l).addClass(n);
                var f = d.getTransitionDurationFromElement(o);
                x(o)
                  .one(d.TRANSITION_END, function() {
                    x(l)
                      .removeClass(n + " " + i)
                      .addClass(G),
                      x(o).removeClass(G + " " + i + " " + n),
                      (s._isSliding = !1),
                      setTimeout(function() {
                        return x(s._element).trigger(u);
                      }, 0);
                  })
                  .emulateTransitionEnd(f);
              } else
                x(o).removeClass(G),
                  x(l).addClass(G),
                  (this._isSliding = !1),
                  x(this._element).trigger(u);
              c && this.cycle();
            }
          }),
          (s._jQueryInterface = function(i) {
            return this.each(function() {
              var t = x(this).data(U),
                e = h({}, Q, x(this).data());
              "object" === _typeof(i) && (e = h({}, e, i));
              var n = "string" == typeof i ? i : e.slide;
              if (
                (t || ((t = new s(this, e)), x(this).data(U, t)),
                "number" == typeof i)
              )
                t.to(i);
              else if ("string" == typeof n) {
                if (void 0 === t[n])
                  throw new TypeError('No method named "' + n + '"');
                t[n]();
              } else e.interval && (t.pause(), t.cycle());
            });
          }),
          (s._dataApiClickHandler = function(t) {
            var e = d.getSelectorFromElement(this);
            if (e) {
              var n = x(e)[0];
              if (n && x(n).hasClass(Z)) {
                var i = h({}, x(n).data(), x(this).data()),
                  r = this.getAttribute("data-slide-to");
                r && (i.interval = !1),
                  s._jQueryInterface.call(x(n), i),
                  r &&
                    x(n)
                      .data(U)
                      .to(r),
                  t.preventDefault();
              }
            }
          }),
          o(s, null, [
            {
              key: "VERSION",
              get: function() {
                return "4.1.0";
              }
            },
            {
              key: "Default",
              get: function() {
                return Q;
              }
            }
          ]),
          s
        );
      })()),
      x(document).on(J.CLICK_DATA_API, lt, ct._dataApiClickHandler),
      x(window).on(J.LOAD_DATA_API, function() {
        x(ht).each(function() {
          var t = x(this);
          ct._jQueryInterface.call(t, t.data());
        });
      }),
      (x.fn[W] = ct._jQueryInterface),
      (x.fn[W].Constructor = ct),
      (x.fn[W].noConflict = function() {
        return (x.fn[W] = M), ct._jQueryInterface;
      }),
      ct),
    Zn =
      ((ft = "collapse"),
      (gt = "." + (dt = "bs.collapse")),
      (_t = (ut = e).fn[ft]),
      (mt = { toggle: !0, parent: "" }),
      (pt = { toggle: "boolean", parent: "(string|element)" }),
      (vt = {
        SHOW: "show" + gt,
        SHOWN: "shown" + gt,
        HIDE: "hide" + gt,
        HIDDEN: "hidden" + gt,
        CLICK_DATA_API: "click" + gt + ".data-api"
      }),
      (Et = "show"),
      (yt = "collapse"),
      (Ct = "collapsing"),
      (bt = "collapsed"),
      (Tt = "width"),
      (It = "height"),
      (Dt = ".show, .collapsing"),
      (wt = '[data-toggle="collapse"]'),
      (St = (function() {
        function a(t, e) {
          (this._isTransitioning = !1),
            (this._element = t),
            (this._config = this._getConfig(e)),
            (this._triggerArray = ut.makeArray(
              ut(
                '[data-toggle="collapse"][href="#' +
                  t.id +
                  '"],[data-toggle="collapse"][data-target="#' +
                  t.id +
                  '"]'
              )
            ));
          for (var n = ut(wt), i = 0; i < n.length; i++) {
            var r = n[i],
              s = d.getSelectorFromElement(r);
            null !== s &&
              0 < ut(s).filter(t).length &&
              ((this._selector = s), this._triggerArray.push(r));
          }
          (this._parent = this._config.parent ? this._getParent() : null),
            this._config.parent ||
              this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle();
        }
        var t = a.prototype;
        return (
          (t.toggle = function() {
            ut(this._element).hasClass(Et) ? this.hide() : this.show();
          }),
          (t.show = function() {
            var t,
              e,
              n = this;
            if (
              !this._isTransitioning &&
              !ut(this._element).hasClass(Et) &&
              (this._parent &&
                0 ===
                  (t = ut.makeArray(
                    ut(this._parent)
                      .find(Dt)
                      .filter('[data-parent="' + this._config.parent + '"]')
                  )).length &&
                (t = null),
              !(
                t &&
                (e = ut(t)
                  .not(this._selector)
                  .data(dt)) &&
                e._isTransitioning
              ))
            ) {
              var i = ut.Event(vt.SHOW);
              if ((ut(this._element).trigger(i), !i.isDefaultPrevented())) {
                t &&
                  (a._jQueryInterface.call(ut(t).not(this._selector), "hide"),
                  e || ut(t).data(dt, null));
                var r = this._getDimension();
                ut(this._element)
                  .removeClass(yt)
                  .addClass(Ct),
                  (this._element.style[r] = 0) < this._triggerArray.length &&
                    ut(this._triggerArray)
                      .removeClass(bt)
                      .attr("aria-expanded", !0),
                  this.setTransitioning(!0);
                var s = "scroll" + (r[0].toUpperCase() + r.slice(1)),
                  o = d.getTransitionDurationFromElement(this._element);
                ut(this._element)
                  .one(d.TRANSITION_END, function() {
                    ut(n._element)
                      .removeClass(Ct)
                      .addClass(yt)
                      .addClass(Et),
                      (n._element.style[r] = ""),
                      n.setTransitioning(!1),
                      ut(n._element).trigger(vt.SHOWN);
                  })
                  .emulateTransitionEnd(o),
                  (this._element.style[r] = this._element[s] + "px");
              }
            }
          }),
          (t.hide = function() {
            var t = this;
            if (!this._isTransitioning && ut(this._element).hasClass(Et)) {
              var e = ut.Event(vt.HIDE);
              if ((ut(this._element).trigger(e), !e.isDefaultPrevented())) {
                var n = this._getDimension();
                if (
                  ((this._element.style[n] =
                    this._element.getBoundingClientRect()[n] + "px"),
                  d.reflow(this._element),
                  ut(this._element)
                    .addClass(Ct)
                    .removeClass(yt)
                    .removeClass(Et),
                  0 < this._triggerArray.length)
                )
                  for (var i = 0; i < this._triggerArray.length; i++) {
                    var r = this._triggerArray[i],
                      s = d.getSelectorFromElement(r);
                    if (null !== s)
                      ut(s).hasClass(Et) ||
                        ut(r)
                          .addClass(bt)
                          .attr("aria-expanded", !1);
                  }
                this.setTransitioning(!0);
                this._element.style[n] = "";
                var o = d.getTransitionDurationFromElement(this._element);
                ut(this._element)
                  .one(d.TRANSITION_END, function() {
                    t.setTransitioning(!1),
                      ut(t._element)
                        .removeClass(Ct)
                        .addClass(yt)
                        .trigger(vt.HIDDEN);
                  })
                  .emulateTransitionEnd(o);
              }
            }
          }),
          (t.setTransitioning = function(t) {
            this._isTransitioning = t;
          }),
          (t.dispose = function() {
            ut.removeData(this._element, dt),
              (this._config = null),
              (this._parent = null),
              (this._element = null),
              (this._triggerArray = null),
              (this._isTransitioning = null);
          }),
          (t._getConfig = function(t) {
            return (
              ((t = h({}, mt, t)).toggle = Boolean(t.toggle)),
              d.typeCheckConfig(ft, t, pt),
              t
            );
          }),
          (t._getDimension = function() {
            return ut(this._element).hasClass(Tt) ? Tt : It;
          }),
          (t._getParent = function() {
            var n = this,
              t = null;
            d.isElement(this._config.parent)
              ? ((t = this._config.parent),
                void 0 !== this._config.parent.jquery &&
                  (t = this._config.parent[0]))
              : (t = ut(this._config.parent)[0]);
            var e =
              '[data-toggle="collapse"][data-parent="' +
              this._config.parent +
              '"]';
            return (
              ut(t)
                .find(e)
                .each(function(t, e) {
                  n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e]);
                }),
              t
            );
          }),
          (t._addAriaAndCollapsedClass = function(t, e) {
            if (t) {
              var n = ut(t).hasClass(Et);
              0 < e.length &&
                ut(e)
                  .toggleClass(bt, !n)
                  .attr("aria-expanded", n);
            }
          }),
          (a._getTargetFromElement = function(t) {
            var e = d.getSelectorFromElement(t);
            return e ? ut(e)[0] : null;
          }),
          (a._jQueryInterface = function(i) {
            return this.each(function() {
              var t = ut(this),
                e = t.data(dt),
                n = h({}, mt, t.data(), "object" === _typeof(i) && i);
              if (
                (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1),
                e || ((e = new a(this, n)), t.data(dt, e)),
                "string" == typeof i)
              ) {
                if (void 0 === e[i])
                  throw new TypeError('No method named "' + i + '"');
                e[i]();
              }
            });
          }),
          o(a, null, [
            {
              key: "VERSION",
              get: function() {
                return "4.1.0";
              }
            },
            {
              key: "Default",
              get: function() {
                return mt;
              }
            }
          ]),
          a
        );
      })()),
      ut(document).on(vt.CLICK_DATA_API, wt, function(t) {
        "A" === t.currentTarget.tagName && t.preventDefault();
        var n = ut(this),
          e = d.getSelectorFromElement(this);
        ut(e).each(function() {
          var t = ut(this),
            e = t.data(dt) ? "toggle" : n.data();
          St._jQueryInterface.call(t, e);
        });
      }),
      (ut.fn[ft] = St._jQueryInterface),
      (ut.fn[ft].Constructor = St),
      (ut.fn[ft].noConflict = function() {
        return (ut.fn[ft] = _t), St._jQueryInterface;
      }),
      St),
    Gn =
      ((Nt = "dropdown"),
      (kt = "." + (Ot = "bs.dropdown")),
      (Pt = ".data-api"),
      (jt = (At = e).fn[Nt]),
      (Ht = new RegExp("38|40|27")),
      (Lt = {
        HIDE: "hide" + kt,
        HIDDEN: "hidden" + kt,
        SHOW: "show" + kt,
        SHOWN: "shown" + kt,
        CLICK: "click" + kt,
        CLICK_DATA_API: "click" + kt + Pt,
        KEYDOWN_DATA_API: "keydown" + kt + Pt,
        KEYUP_DATA_API: "keyup" + kt + Pt
      }),
      (Rt = "disabled"),
      (xt = "show"),
      (Wt = "dropup"),
      (Ut = "dropright"),
      (Ft = "dropleft"),
      (Kt = "dropdown-menu-right"),
      (Mt = "position-static"),
      (Qt = '[data-toggle="dropdown"]'),
      (Bt = ".dropdown form"),
      (Vt = ".dropdown-menu"),
      (Yt = ".navbar-nav"),
      (qt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"),
      (zt = "top-start"),
      (Jt = "top-end"),
      (Zt = "bottom-start"),
      (Gt = "bottom-end"),
      ($t = "right-start"),
      (Xt = "left-start"),
      (te = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic"
      }),
      (ee = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string"
      }),
      (ne = (function() {
        function l(t, e) {
          (this._element = t),
            (this._popper = null),
            (this._config = this._getConfig(e)),
            (this._menu = this._getMenuElement()),
            (this._inNavbar = this._detectNavbar()),
            this._addEventListeners();
        }
        var t = l.prototype;
        return (
          (t.toggle = function() {
            if (!this._element.disabled && !At(this._element).hasClass(Rt)) {
              var t = l._getParentFromElement(this._element),
                e = At(this._menu).hasClass(xt);
              if ((l._clearMenus(), !e)) {
                var n = { relatedTarget: this._element },
                  i = At.Event(Lt.SHOW, n);
                if ((At(t).trigger(i), !i.isDefaultPrevented())) {
                  if (!this._inNavbar) {
                    if (void 0 === c)
                      throw new TypeError(
                        "Bootstrap dropdown require Popper.js (https://popper.js.org)"
                      );
                    var r = this._element;
                    "parent" === this._config.reference
                      ? (r = t)
                      : d.isElement(this._config.reference) &&
                        ((r = this._config.reference),
                        void 0 !== this._config.reference.jquery &&
                          (r = this._config.reference[0])),
                      "scrollParent" !== this._config.boundary &&
                        At(t).addClass(Mt),
                      (this._popper = new c(
                        r,
                        this._menu,
                        this._getPopperConfig()
                      ));
                  }
                  "ontouchstart" in document.documentElement &&
                    0 === At(t).closest(Yt).length &&
                    At(document.body)
                      .children()
                      .on("mouseover", null, At.noop),
                    this._element.focus(),
                    this._element.setAttribute("aria-expanded", !0),
                    At(this._menu).toggleClass(xt),
                    At(t)
                      .toggleClass(xt)
                      .trigger(At.Event(Lt.SHOWN, n));
                }
              }
            }
          }),
          (t.dispose = function() {
            At.removeData(this._element, Ot),
              At(this._element).off(kt),
              (this._element = null),
              (this._menu = null) !== this._popper &&
                (this._popper.destroy(), (this._popper = null));
          }),
          (t.update = function() {
            (this._inNavbar = this._detectNavbar()),
              null !== this._popper && this._popper.scheduleUpdate();
          }),
          (t._addEventListeners = function() {
            var e = this;
            At(this._element).on(Lt.CLICK, function(t) {
              t.preventDefault(), t.stopPropagation(), e.toggle();
            });
          }),
          (t._getConfig = function(t) {
            return (
              (t = h(
                {},
                this.constructor.Default,
                At(this._element).data(),
                t
              )),
              d.typeCheckConfig(Nt, t, this.constructor.DefaultType),
              t
            );
          }),
          (t._getMenuElement = function() {
            if (!this._menu) {
              var t = l._getParentFromElement(this._element);
              this._menu = At(t).find(Vt)[0];
            }
            return this._menu;
          }),
          (t._getPlacement = function() {
            var t = At(this._element).parent(),
              e = Zt;
            return (
              t.hasClass(Wt)
                ? ((e = zt), At(this._menu).hasClass(Kt) && (e = Jt))
                : t.hasClass(Ut)
                ? (e = $t)
                : t.hasClass(Ft)
                ? (e = Xt)
                : At(this._menu).hasClass(Kt) && (e = Gt),
              e
            );
          }),
          (t._detectNavbar = function() {
            return 0 < At(this._element).closest(".navbar").length;
          }),
          (t._getPopperConfig = function() {
            var e = this,
              t = {};
            "function" == typeof this._config.offset
              ? (t.fn = function(t) {
                  return (
                    (t.offsets = h(
                      {},
                      t.offsets,
                      e._config.offset(t.offsets) || {}
                    )),
                    t
                  );
                })
              : (t.offset = this._config.offset);
            var n = {
              placement: this._getPlacement(),
              modifiers: {
                offset: t,
                flip: { enabled: this._config.flip },
                preventOverflow: { boundariesElement: this._config.boundary }
              }
            };
            return (
              "static" === this._config.display &&
                (n.modifiers.applyStyle = { enabled: !1 }),
              n
            );
          }),
          (l._jQueryInterface = function(n) {
            return this.each(function() {
              var t = At(this).data(Ot),
                e = "object" === _typeof(n) ? n : null;
              if (
                (t || ((t = new l(this, e)), At(this).data(Ot, t)),
                "string" == typeof n)
              ) {
                if (void 0 === t[n])
                  throw new TypeError('No method named "' + n + '"');
                t[n]();
              }
            });
          }),
          (l._clearMenus = function(t) {
            if (!t || (3 !== t.which && ("keyup" !== t.type || 9 === t.which)))
              for (var e = At.makeArray(At(Qt)), n = 0; n < e.length; n++) {
                var i = l._getParentFromElement(e[n]),
                  r = At(e[n]).data(Ot),
                  s = { relatedTarget: e[n] };
                if (r) {
                  var o = r._menu;
                  if (
                    At(i).hasClass(xt) &&
                    !(
                      t &&
                      (("click" === t.type &&
                        /input|textarea/i.test(t.target.tagName)) ||
                        ("keyup" === t.type && 9 === t.which)) &&
                      At.contains(i, t.target)
                    )
                  ) {
                    var a = At.Event(Lt.HIDE, s);
                    At(i).trigger(a),
                      a.isDefaultPrevented() ||
                        ("ontouchstart" in document.documentElement &&
                          At(document.body)
                            .children()
                            .off("mouseover", null, At.noop),
                        e[n].setAttribute("aria-expanded", "false"),
                        At(o).removeClass(xt),
                        At(i)
                          .removeClass(xt)
                          .trigger(At.Event(Lt.HIDDEN, s)));
                  }
                }
              }
          }),
          (l._getParentFromElement = function(t) {
            var e,
              n = d.getSelectorFromElement(t);
            return n && (e = At(n)[0]), e || t.parentNode;
          }),
          (l._dataApiKeydownHandler = function(t) {
            if (
              (/input|textarea/i.test(t.target.tagName)
                ? !(
                    32 === t.which ||
                    (27 !== t.which &&
                      ((40 !== t.which && 38 !== t.which) ||
                        At(t.target).closest(Vt).length))
                  )
                : Ht.test(t.which)) &&
              (t.preventDefault(),
              t.stopPropagation(),
              !this.disabled && !At(this).hasClass(Rt))
            ) {
              var e = l._getParentFromElement(this),
                n = At(e).hasClass(xt);
              if (
                (n || (27 === t.which && 32 === t.which)) &&
                (!n || (27 !== t.which && 32 !== t.which))
              ) {
                var i = At(e)
                  .find(qt)
                  .get();
                if (0 !== i.length) {
                  var r = i.indexOf(t.target);
                  38 === t.which && 0 < r && r--,
                    40 === t.which && r < i.length - 1 && r++,
                    r < 0 && (r = 0),
                    i[r].focus();
                }
              } else {
                if (27 === t.which) {
                  var s = At(e).find(Qt)[0];
                  At(s).trigger("focus");
                }
                At(this).trigger("click");
              }
            }
          }),
          o(l, null, [
            {
              key: "VERSION",
              get: function() {
                return "4.1.0";
              }
            },
            {
              key: "Default",
              get: function() {
                return te;
              }
            },
            {
              key: "DefaultType",
              get: function() {
                return ee;
              }
            }
          ]),
          l
        );
      })()),
      At(document)
        .on(Lt.KEYDOWN_DATA_API, Qt, ne._dataApiKeydownHandler)
        .on(Lt.KEYDOWN_DATA_API, Vt, ne._dataApiKeydownHandler)
        .on(Lt.CLICK_DATA_API + " " + Lt.KEYUP_DATA_API, ne._clearMenus)
        .on(Lt.CLICK_DATA_API, Qt, function(t) {
          t.preventDefault(),
            t.stopPropagation(),
            ne._jQueryInterface.call(At(this), "toggle");
        })
        .on(Lt.CLICK_DATA_API, Bt, function(t) {
          t.stopPropagation();
        }),
      (At.fn[Nt] = ne._jQueryInterface),
      (At.fn[Nt].Constructor = ne),
      (At.fn[Nt].noConflict = function() {
        return (At.fn[Nt] = jt), ne._jQueryInterface;
      }),
      ne),
    $n =
      ((re = "modal"),
      (oe = "." + (se = "bs.modal")),
      (ae = (ie = e).fn[re]),
      (le = { backdrop: !0, keyboard: !0, focus: !0, show: !0 }),
      (he = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
      }),
      (ce = {
        HIDE: "hide" + oe,
        HIDDEN: "hidden" + oe,
        SHOW: "show" + oe,
        SHOWN: "shown" + oe,
        FOCUSIN: "focusin" + oe,
        RESIZE: "resize" + oe,
        CLICK_DISMISS: "click.dismiss" + oe,
        KEYDOWN_DISMISS: "keydown.dismiss" + oe,
        MOUSEUP_DISMISS: "mouseup.dismiss" + oe,
        MOUSEDOWN_DISMISS: "mousedown.dismiss" + oe,
        CLICK_DATA_API: "click" + oe + ".data-api"
      }),
      (ue = "modal-scrollbar-measure"),
      (fe = "modal-backdrop"),
      (de = "modal-open"),
      (ge = "fade"),
      (_e = "show"),
      (me = ".modal-dialog"),
      (pe = '[data-toggle="modal"]'),
      (ve = '[data-dismiss="modal"]'),
      (Ee = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"),
      (ye = ".sticky-top"),
      (Ce = ".navbar-toggler"),
      (be = (function() {
        function r(t, e) {
          (this._config = this._getConfig(e)),
            (this._element = t),
            (this._dialog = ie(t).find(me)[0]),
            (this._backdrop = null),
            (this._isShown = !1),
            (this._isBodyOverflowing = !1),
            (this._ignoreBackdropClick = !1),
            (this._scrollbarWidth = 0);
        }
        var t = r.prototype;
        return (
          (t.toggle = function(t) {
            return this._isShown ? this.hide() : this.show(t);
          }),
          (t.show = function(t) {
            var e = this;
            if (!this._isTransitioning && !this._isShown) {
              ie(this._element).hasClass(ge) && (this._isTransitioning = !0);
              var n = ie.Event(ce.SHOW, { relatedTarget: t });
              ie(this._element).trigger(n),
                this._isShown ||
                  n.isDefaultPrevented() ||
                  ((this._isShown = !0),
                  this._checkScrollbar(),
                  this._setScrollbar(),
                  this._adjustDialog(),
                  ie(document.body).addClass(de),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  ie(this._element).on(ce.CLICK_DISMISS, ve, function(t) {
                    return e.hide(t);
                  }),
                  ie(this._dialog).on(ce.MOUSEDOWN_DISMISS, function() {
                    ie(e._element).one(ce.MOUSEUP_DISMISS, function(t) {
                      ie(t.target).is(e._element) &&
                        (e._ignoreBackdropClick = !0);
                    });
                  }),
                  this._showBackdrop(function() {
                    return e._showElement(t);
                  }));
            }
          }),
          (t.hide = function(t) {
            var e = this;
            if (
              (t && t.preventDefault(), !this._isTransitioning && this._isShown)
            ) {
              var n = ie.Event(ce.HIDE);
              if (
                (ie(this._element).trigger(n),
                this._isShown && !n.isDefaultPrevented())
              ) {
                this._isShown = !1;
                var i = ie(this._element).hasClass(ge);
                if (
                  (i && (this._isTransitioning = !0),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  ie(document).off(ce.FOCUSIN),
                  ie(this._element).removeClass(_e),
                  ie(this._element).off(ce.CLICK_DISMISS),
                  ie(this._dialog).off(ce.MOUSEDOWN_DISMISS),
                  i)
                ) {
                  var r = d.getTransitionDurationFromElement(this._element);
                  ie(this._element)
                    .one(d.TRANSITION_END, function(t) {
                      return e._hideModal(t);
                    })
                    .emulateTransitionEnd(r);
                } else this._hideModal();
              }
            }
          }),
          (t.dispose = function() {
            ie.removeData(this._element, se),
              ie(window, document, this._element, this._backdrop).off(oe),
              (this._config = null),
              (this._element = null),
              (this._dialog = null),
              (this._backdrop = null),
              (this._isShown = null),
              (this._isBodyOverflowing = null),
              (this._ignoreBackdropClick = null),
              (this._scrollbarWidth = null);
          }),
          (t.handleUpdate = function() {
            this._adjustDialog();
          }),
          (t._getConfig = function(t) {
            return (t = h({}, le, t)), d.typeCheckConfig(re, t, he), t;
          }),
          (t._showElement = function(t) {
            var e = this,
              n = ie(this._element).hasClass(ge);
            (this._element.parentNode &&
              this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
              document.body.appendChild(this._element),
              (this._element.style.display = "block"),
              this._element.removeAttribute("aria-hidden"),
              (this._element.scrollTop = 0),
              n && d.reflow(this._element),
              ie(this._element).addClass(_e),
              this._config.focus && this._enforceFocus();
            function i() {
              e._config.focus && e._element.focus(),
                (e._isTransitioning = !1),
                ie(e._element).trigger(r);
            }
            var r = ie.Event(ce.SHOWN, { relatedTarget: t });
            if (n) {
              var s = d.getTransitionDurationFromElement(this._element);
              ie(this._dialog)
                .one(d.TRANSITION_END, i)
                .emulateTransitionEnd(s);
            } else i();
          }),
          (t._enforceFocus = function() {
            var e = this;
            ie(document)
              .off(ce.FOCUSIN)
              .on(ce.FOCUSIN, function(t) {
                document !== t.target &&
                  e._element !== t.target &&
                  0 === ie(e._element).has(t.target).length &&
                  e._element.focus();
              });
          }),
          (t._setEscapeEvent = function() {
            var e = this;
            this._isShown && this._config.keyboard
              ? ie(this._element).on(ce.KEYDOWN_DISMISS, function(t) {
                  27 === t.which && (t.preventDefault(), e.hide());
                })
              : this._isShown || ie(this._element).off(ce.KEYDOWN_DISMISS);
          }),
          (t._setResizeEvent = function() {
            var e = this;
            this._isShown
              ? ie(window).on(ce.RESIZE, function(t) {
                  return e.handleUpdate(t);
                })
              : ie(window).off(ce.RESIZE);
          }),
          (t._hideModal = function() {
            var t = this;
            (this._element.style.display = "none"),
              this._element.setAttribute("aria-hidden", !0),
              (this._isTransitioning = !1),
              this._showBackdrop(function() {
                ie(document.body).removeClass(de),
                  t._resetAdjustments(),
                  t._resetScrollbar(),
                  ie(t._element).trigger(ce.HIDDEN);
              });
          }),
          (t._removeBackdrop = function() {
            this._backdrop &&
              (ie(this._backdrop).remove(), (this._backdrop = null));
          }),
          (t._showBackdrop = function(t) {
            var e = this,
              n = ie(this._element).hasClass(ge) ? ge : "";
            if (this._isShown && this._config.backdrop) {
              if (
                ((this._backdrop = document.createElement("div")),
                (this._backdrop.className = fe),
                n && ie(this._backdrop).addClass(n),
                ie(this._backdrop).appendTo(document.body),
                ie(this._element).on(ce.CLICK_DISMISS, function(t) {
                  e._ignoreBackdropClick
                    ? (e._ignoreBackdropClick = !1)
                    : t.target === t.currentTarget &&
                      ("static" === e._config.backdrop
                        ? e._element.focus()
                        : e.hide());
                }),
                n && d.reflow(this._backdrop),
                ie(this._backdrop).addClass(_e),
                !t)
              )
                return;
              if (!n) return void t();
              var i = d.getTransitionDurationFromElement(this._backdrop);
              ie(this._backdrop)
                .one(d.TRANSITION_END, t)
                .emulateTransitionEnd(i);
            } else if (!this._isShown && this._backdrop) {
              ie(this._backdrop).removeClass(_e);
              var r = function() {
                e._removeBackdrop(), t && t();
              };
              if (ie(this._element).hasClass(ge)) {
                var s = d.getTransitionDurationFromElement(this._backdrop);
                ie(this._backdrop)
                  .one(d.TRANSITION_END, r)
                  .emulateTransitionEnd(s);
              } else r();
            } else t && t();
          }),
          (t._adjustDialog = function() {
            var t =
              this._element.scrollHeight >
              document.documentElement.clientHeight;
            !this._isBodyOverflowing &&
              t &&
              (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
              this._isBodyOverflowing &&
                !t &&
                (this._element.style.paddingRight =
                  this._scrollbarWidth + "px");
          }),
          (t._resetAdjustments = function() {
            (this._element.style.paddingLeft = ""),
              (this._element.style.paddingRight = "");
          }),
          (t._checkScrollbar = function() {
            var t = document.body.getBoundingClientRect();
            (this._isBodyOverflowing = t.left + t.right < window.innerWidth),
              (this._scrollbarWidth = this._getScrollbarWidth());
          }),
          (t._setScrollbar = function() {
            var r = this;
            if (this._isBodyOverflowing) {
              ie(Ee).each(function(t, e) {
                var n = ie(e)[0].style.paddingRight,
                  i = ie(e).css("padding-right");
                ie(e)
                  .data("padding-right", n)
                  .css(
                    "padding-right",
                    parseFloat(i) + r._scrollbarWidth + "px"
                  );
              }),
                ie(ye).each(function(t, e) {
                  var n = ie(e)[0].style.marginRight,
                    i = ie(e).css("margin-right");
                  ie(e)
                    .data("margin-right", n)
                    .css(
                      "margin-right",
                      parseFloat(i) - r._scrollbarWidth + "px"
                    );
                }),
                ie(Ce).each(function(t, e) {
                  var n = ie(e)[0].style.marginRight,
                    i = ie(e).css("margin-right");
                  ie(e)
                    .data("margin-right", n)
                    .css(
                      "margin-right",
                      parseFloat(i) + r._scrollbarWidth + "px"
                    );
                });
              var t = document.body.style.paddingRight,
                e = ie(document.body).css("padding-right");
              ie(document.body)
                .data("padding-right", t)
                .css(
                  "padding-right",
                  parseFloat(e) + this._scrollbarWidth + "px"
                );
            }
          }),
          (t._resetScrollbar = function() {
            ie(Ee).each(function(t, e) {
              var n = ie(e).data("padding-right");
              void 0 !== n &&
                ie(e)
                  .css("padding-right", n)
                  .removeData("padding-right");
            }),
              ie(ye + ", " + Ce).each(function(t, e) {
                var n = ie(e).data("margin-right");
                void 0 !== n &&
                  ie(e)
                    .css("margin-right", n)
                    .removeData("margin-right");
              });
            var t = ie(document.body).data("padding-right");
            void 0 !== t &&
              ie(document.body)
                .css("padding-right", t)
                .removeData("padding-right");
          }),
          (t._getScrollbarWidth = function() {
            var t = document.createElement("div");
            (t.className = ue), document.body.appendChild(t);
            var e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t), e;
          }),
          (r._jQueryInterface = function(n, i) {
            return this.each(function() {
              var t = ie(this).data(se),
                e = h(
                  {},
                  r.Default,
                  ie(this).data(),
                  "object" === _typeof(n) && n
                );
              if (
                (t || ((t = new r(this, e)), ie(this).data(se, t)),
                "string" == typeof n)
              ) {
                if (void 0 === t[n])
                  throw new TypeError('No method named "' + n + '"');
                t[n](i);
              } else e.show && t.show(i);
            });
          }),
          o(r, null, [
            {
              key: "VERSION",
              get: function() {
                return "4.1.0";
              }
            },
            {
              key: "Default",
              get: function() {
                return le;
              }
            }
          ]),
          r
        );
      })()),
      ie(document).on(ce.CLICK_DATA_API, pe, function(t) {
        var e,
          n = this,
          i = d.getSelectorFromElement(this);
        i && (e = ie(i)[0]);
        var r = ie(e).data(se)
          ? "toggle"
          : h({}, ie(e).data(), ie(this).data());
        ("A" !== this.tagName && "AREA" !== this.tagName) || t.preventDefault();
        var s = ie(e).one(ce.SHOW, function(t) {
          t.isDefaultPrevented() ||
            s.one(ce.HIDDEN, function() {
              ie(n).is(":visible") && n.focus();
            });
        });
        be._jQueryInterface.call(ie(e), r, this);
      }),
      (ie.fn[re] = be._jQueryInterface),
      (ie.fn[re].Constructor = be),
      (ie.fn[re].noConflict = function() {
        return (ie.fn[re] = ae), be._jQueryInterface;
      }),
      be),
    Xn =
      ((Ie = "tooltip"),
      (we = "." + (De = "bs.tooltip")),
      (Se = (Te = e).fn[Ie]),
      (Ae = "bs-tooltip"),
      (Ne = new RegExp("(^|\\s)" + Ae + "\\S+", "g")),
      (Pe = {
        animation: !0,
        template:
          '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !(ke = {
          AUTO: "auto",
          TOP: "top",
          RIGHT: "right",
          BOTTOM: "bottom",
          LEFT: "left"
        }),
        selector: !(Oe = {
          animation: "boolean",
          template: "string",
          title: "(string|element|function)",
          trigger: "string",
          delay: "(number|object)",
          html: "boolean",
          selector: "(string|boolean)",
          placement: "(string|function)",
          offset: "(number|string)",
          container: "(string|element|boolean)",
          fallbackPlacement: "(string|array)",
          boundary: "(string|element)"
        }),
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent"
      }),
      (He = "out"),
      (Le = {
        HIDE: "hide" + we,
        HIDDEN: "hidden" + we,
        SHOW: (je = "show") + we,
        SHOWN: "shown" + we,
        INSERTED: "inserted" + we,
        CLICK: "click" + we,
        FOCUSIN: "focusin" + we,
        FOCUSOUT: "focusout" + we,
        MOUSEENTER: "mouseenter" + we,
        MOUSELEAVE: "mouseleave" + we
      }),
      (Re = "fade"),
      (xe = "show"),
      (We = ".tooltip-inner"),
      (Ue = ".arrow"),
      (Fe = "hover"),
      (Ke = "focus"),
      (Me = "click"),
      (Qe = "manual"),
      (Be = (function() {
        function i(t, e) {
          if (void 0 === c)
            throw new TypeError(
              "Bootstrap tooltips require Popper.js (https://popper.js.org)"
            );
          (this._isEnabled = !0),
            (this._timeout = 0),
            (this._hoverState = ""),
            (this._activeTrigger = {}),
            (this._popper = null),
            (this.element = t),
            (this.config = this._getConfig(e)),
            (this.tip = null),
            this._setListeners();
        }
        var t = i.prototype;
        return (
          (t.enable = function() {
            this._isEnabled = !0;
          }),
          (t.disable = function() {
            this._isEnabled = !1;
          }),
          (t.toggleEnabled = function() {
            this._isEnabled = !this._isEnabled;
          }),
          (t.toggle = function(t) {
            if (this._isEnabled)
              if (t) {
                var e = this.constructor.DATA_KEY,
                  n = Te(t.currentTarget).data(e);
                n ||
                  ((n = new this.constructor(
                    t.currentTarget,
                    this._getDelegateConfig()
                  )),
                  Te(t.currentTarget).data(e, n)),
                  (n._activeTrigger.click = !n._activeTrigger.click),
                  n._isWithActiveTrigger()
                    ? n._enter(null, n)
                    : n._leave(null, n);
              } else {
                if (Te(this.getTipElement()).hasClass(xe))
                  return void this._leave(null, this);
                this._enter(null, this);
              }
          }),
          (t.dispose = function() {
            clearTimeout(this._timeout),
              Te.removeData(this.element, this.constructor.DATA_KEY),
              Te(this.element).off(this.constructor.EVENT_KEY),
              Te(this.element)
                .closest(".modal")
                .off("hide.bs.modal"),
              this.tip && Te(this.tip).remove(),
              (this._isEnabled = null),
              (this._timeout = null),
              (this._hoverState = null),
              (this._activeTrigger = null) !== this._popper &&
                this._popper.destroy(),
              (this._popper = null),
              (this.element = null),
              (this.config = null),
              (this.tip = null);
          }),
          (t.show = function() {
            var e = this;
            if ("none" === Te(this.element).css("display"))
              throw new Error("Please use show on visible elements");
            var t = Te.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
              Te(this.element).trigger(t);
              var n = Te.contains(
                this.element.ownerDocument.documentElement,
                this.element
              );
              if (t.isDefaultPrevented() || !n) return;
              var i = this.getTipElement(),
                r = d.getUID(this.constructor.NAME);
              i.setAttribute("id", r),
                this.element.setAttribute("aria-describedby", r),
                this.setContent(),
                this.config.animation && Te(i).addClass(Re);
              var s =
                  "function" == typeof this.config.placement
                    ? this.config.placement.call(this, i, this.element)
                    : this.config.placement,
                o = this._getAttachment(s);
              this.addAttachmentClass(o);
              var a =
                !1 === this.config.container
                  ? document.body
                  : Te(this.config.container);
              Te(i).data(this.constructor.DATA_KEY, this),
                Te.contains(
                  this.element.ownerDocument.documentElement,
                  this.tip
                ) || Te(i).appendTo(a),
                Te(this.element).trigger(this.constructor.Event.INSERTED),
                (this._popper = new c(this.element, i, {
                  placement: o,
                  modifiers: {
                    offset: { offset: this.config.offset },
                    flip: { behavior: this.config.fallbackPlacement },
                    arrow: { element: Ue },
                    preventOverflow: { boundariesElement: this.config.boundary }
                  },
                  onCreate: function(t) {
                    t.originalPlacement !== t.placement &&
                      e._handlePopperPlacementChange(t);
                  },
                  onUpdate: function(t) {
                    e._handlePopperPlacementChange(t);
                  }
                })),
                Te(i).addClass(xe),
                "ontouchstart" in document.documentElement &&
                  Te(document.body)
                    .children()
                    .on("mouseover", null, Te.noop);
              var l = function() {
                e.config.animation && e._fixTransition();
                var t = e._hoverState;
                (e._hoverState = null),
                  Te(e.element).trigger(e.constructor.Event.SHOWN),
                  t === He && e._leave(null, e);
              };
              if (Te(this.tip).hasClass(Re)) {
                var h = d.getTransitionDurationFromElement(this.tip);
                Te(this.tip)
                  .one(d.TRANSITION_END, l)
                  .emulateTransitionEnd(h);
              } else l();
            }
          }),
          (t.hide = function(t) {
            function e() {
              n._hoverState !== je &&
                i.parentNode &&
                i.parentNode.removeChild(i),
                n._cleanTipClass(),
                n.element.removeAttribute("aria-describedby"),
                Te(n.element).trigger(n.constructor.Event.HIDDEN),
                null !== n._popper && n._popper.destroy(),
                t && t();
            }
            var n = this,
              i = this.getTipElement(),
              r = Te.Event(this.constructor.Event.HIDE);
            if ((Te(this.element).trigger(r), !r.isDefaultPrevented())) {
              if (
                (Te(i).removeClass(xe),
                "ontouchstart" in document.documentElement &&
                  Te(document.body)
                    .children()
                    .off("mouseover", null, Te.noop),
                (this._activeTrigger[Me] = !1),
                (this._activeTrigger[Ke] = !1),
                (this._activeTrigger[Fe] = !1),
                Te(this.tip).hasClass(Re))
              ) {
                var s = d.getTransitionDurationFromElement(i);
                Te(i)
                  .one(d.TRANSITION_END, e)
                  .emulateTransitionEnd(s);
              } else e();
              this._hoverState = "";
            }
          }),
          (t.update = function() {
            null !== this._popper && this._popper.scheduleUpdate();
          }),
          (t.isWithContent = function() {
            return Boolean(this.getTitle());
          }),
          (t.addAttachmentClass = function(t) {
            Te(this.getTipElement()).addClass(Ae + "-" + t);
          }),
          (t.getTipElement = function() {
            return (
              (this.tip = this.tip || Te(this.config.template)[0]), this.tip
            );
          }),
          (t.setContent = function() {
            var t = Te(this.getTipElement());
            this.setElementContent(t.find(We), this.getTitle()),
              t.removeClass(Re + " " + xe);
          }),
          (t.setElementContent = function(t, e) {
            var n = this.config.html;
            "object" === _typeof(e) && (e.nodeType || e.jquery)
              ? n
                ? Te(e)
                    .parent()
                    .is(t) || t.empty().append(e)
                : t.text(Te(e).text())
              : t[n ? "html" : "text"](e);
          }),
          (t.getTitle = function() {
            var t = this.element.getAttribute("data-original-title");
            return (t =
              t ||
              ("function" == typeof this.config.title
                ? this.config.title.call(this.element)
                : this.config.title));
          }),
          (t._getAttachment = function(t) {
            return ke[t.toUpperCase()];
          }),
          (t._setListeners = function() {
            var i = this;
            this.config.trigger.split(" ").forEach(function(t) {
              if ("click" === t)
                Te(i.element).on(
                  i.constructor.Event.CLICK,
                  i.config.selector,
                  function(t) {
                    return i.toggle(t);
                  }
                );
              else if (t !== Qe) {
                var e =
                    t === Fe
                      ? i.constructor.Event.MOUSEENTER
                      : i.constructor.Event.FOCUSIN,
                  n =
                    t === Fe
                      ? i.constructor.Event.MOUSELEAVE
                      : i.constructor.Event.FOCUSOUT;
                Te(i.element)
                  .on(e, i.config.selector, function(t) {
                    return i._enter(t);
                  })
                  .on(n, i.config.selector, function(t) {
                    return i._leave(t);
                  });
              }
              Te(i.element)
                .closest(".modal")
                .on("hide.bs.modal", function() {
                  return i.hide();
                });
            }),
              this.config.selector
                ? (this.config = h({}, this.config, {
                    trigger: "manual",
                    selector: ""
                  }))
                : this._fixTitle();
          }),
          (t._fixTitle = function() {
            var t = _typeof(this.element.getAttribute("data-original-title"));
            (!this.element.getAttribute("title") && "string" === t) ||
              (this.element.setAttribute(
                "data-original-title",
                this.element.getAttribute("title") || ""
              ),
              this.element.setAttribute("title", ""));
          }),
          (t._enter = function(t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || Te(t.currentTarget).data(n)) ||
              ((e = new this.constructor(
                t.currentTarget,
                this._getDelegateConfig()
              )),
              Te(t.currentTarget).data(n, e)),
              t && (e._activeTrigger["focusin" === t.type ? Ke : Fe] = !0),
              Te(e.getTipElement()).hasClass(xe) || e._hoverState === je
                ? (e._hoverState = je)
                : (clearTimeout(e._timeout),
                  (e._hoverState = je),
                  e.config.delay && e.config.delay.show
                    ? (e._timeout = setTimeout(function() {
                        e._hoverState === je && e.show();
                      }, e.config.delay.show))
                    : e.show());
          }),
          (t._leave = function(t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || Te(t.currentTarget).data(n)) ||
              ((e = new this.constructor(
                t.currentTarget,
                this._getDelegateConfig()
              )),
              Te(t.currentTarget).data(n, e)),
              t && (e._activeTrigger["focusout" === t.type ? Ke : Fe] = !1),
              e._isWithActiveTrigger() ||
                (clearTimeout(e._timeout),
                (e._hoverState = He),
                e.config.delay && e.config.delay.hide
                  ? (e._timeout = setTimeout(function() {
                      e._hoverState === He && e.hide();
                    }, e.config.delay.hide))
                  : e.hide());
          }),
          (t._isWithActiveTrigger = function() {
            for (var t in this._activeTrigger)
              if (this._activeTrigger[t]) return !0;
            return !1;
          }),
          (t._getConfig = function(t) {
            return (
              "number" ==
                typeof (t = h(
                  {},
                  this.constructor.Default,
                  Te(this.element).data(),
                  t
                )).delay && (t.delay = { show: t.delay, hide: t.delay }),
              "number" == typeof t.title && (t.title = t.title.toString()),
              "number" == typeof t.content &&
                (t.content = t.content.toString()),
              d.typeCheckConfig(Ie, t, this.constructor.DefaultType),
              t
            );
          }),
          (t._getDelegateConfig = function() {
            var t = {};
            if (this.config)
              for (var e in this.config)
                this.constructor.Default[e] !== this.config[e] &&
                  (t[e] = this.config[e]);
            return t;
          }),
          (t._cleanTipClass = function() {
            var t = Te(this.getTipElement()),
              e = t.attr("class").match(Ne);
            null !== e && 0 < e.length && t.removeClass(e.join(""));
          }),
          (t._handlePopperPlacementChange = function(t) {
            this._cleanTipClass(),
              this.addAttachmentClass(this._getAttachment(t.placement));
          }),
          (t._fixTransition = function() {
            var t = this.getTipElement(),
              e = this.config.animation;
            null === t.getAttribute("x-placement") &&
              (Te(t).removeClass(Re),
              (this.config.animation = !1),
              this.hide(),
              this.show(),
              (this.config.animation = e));
          }),
          (i._jQueryInterface = function(n) {
            return this.each(function() {
              var t = Te(this).data(De),
                e = "object" === _typeof(n) && n;
              if (
                (t || !/dispose|hide/.test(n)) &&
                (t || ((t = new i(this, e)), Te(this).data(De, t)),
                "string" == typeof n)
              ) {
                if (void 0 === t[n])
                  throw new TypeError('No method named "' + n + '"');
                t[n]();
              }
            });
          }),
          o(i, null, [
            {
              key: "VERSION",
              get: function() {
                return "4.1.0";
              }
            },
            {
              key: "Default",
              get: function() {
                return Pe;
              }
            },
            {
              key: "NAME",
              get: function() {
                return Ie;
              }
            },
            {
              key: "DATA_KEY",
              get: function() {
                return De;
              }
            },
            {
              key: "Event",
              get: function() {
                return Le;
              }
            },
            {
              key: "EVENT_KEY",
              get: function() {
                return we;
              }
            },
            {
              key: "DefaultType",
              get: function() {
                return Oe;
              }
            }
          ]),
          i
        );
      })()),
      (Te.fn[Ie] = Be._jQueryInterface),
      (Te.fn[Ie].Constructor = Be),
      (Te.fn[Ie].noConflict = function() {
        return (Te.fn[Ie] = Se), Be._jQueryInterface;
      }),
      Be),
    ti =
      ((Ye = "popover"),
      (ze = "." + (qe = "bs.popover")),
      (Je = (Ve = e).fn[Ye]),
      (Ze = "bs-popover"),
      (Ge = new RegExp("(^|\\s)" + Ze + "\\S+", "g")),
      ($e = h({}, Xn.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
      })),
      (Xe = h({}, Xn.DefaultType, { content: "(string|element|function)" })),
      (tn = "fade"),
      (nn = ".popover-header"),
      (rn = ".popover-body"),
      (sn = {
        HIDE: "hide" + ze,
        HIDDEN: "hidden" + ze,
        SHOW: (en = "show") + ze,
        SHOWN: "shown" + ze,
        INSERTED: "inserted" + ze,
        CLICK: "click" + ze,
        FOCUSIN: "focusin" + ze,
        FOCUSOUT: "focusout" + ze,
        MOUSEENTER: "mouseenter" + ze,
        MOUSELEAVE: "mouseleave" + ze
      }),
      (on = (function(t) {
        function i() {
          return t.apply(this, arguments) || this;
        }
        !(function(t, e) {
          (t.prototype = Object.create(e.prototype)),
            ((t.prototype.constructor = t).__proto__ = e);
        })(i, t);
        var e = i.prototype;
        return (
          (e.isWithContent = function() {
            return this.getTitle() || this._getContent();
          }),
          (e.addAttachmentClass = function(t) {
            Ve(this.getTipElement()).addClass(Ze + "-" + t);
          }),
          (e.getTipElement = function() {
            return (
              (this.tip = this.tip || Ve(this.config.template)[0]), this.tip
            );
          }),
          (e.setContent = function() {
            var t = Ve(this.getTipElement());
            this.setElementContent(t.find(nn), this.getTitle());
            var e = this._getContent();
            "function" == typeof e && (e = e.call(this.element)),
              this.setElementContent(t.find(rn), e),
              t.removeClass(tn + " " + en);
          }),
          (e._getContent = function() {
            return (
              this.element.getAttribute("data-content") || this.config.content
            );
          }),
          (e._cleanTipClass = function() {
            var t = Ve(this.getTipElement()),
              e = t.attr("class").match(Ge);
            null !== e && 0 < e.length && t.removeClass(e.join(""));
          }),
          (i._jQueryInterface = function(n) {
            return this.each(function() {
              var t = Ve(this).data(qe),
                e = "object" === _typeof(n) ? n : null;
              if (
                (t || !/destroy|hide/.test(n)) &&
                (t || ((t = new i(this, e)), Ve(this).data(qe, t)),
                "string" == typeof n)
              ) {
                if (void 0 === t[n])
                  throw new TypeError('No method named "' + n + '"');
                t[n]();
              }
            });
          }),
          o(i, null, [
            {
              key: "VERSION",
              get: function() {
                return "4.1.0";
              }
            },
            {
              key: "Default",
              get: function() {
                return $e;
              }
            },
            {
              key: "NAME",
              get: function() {
                return Ye;
              }
            },
            {
              key: "DATA_KEY",
              get: function() {
                return qe;
              }
            },
            {
              key: "Event",
              get: function() {
                return sn;
              }
            },
            {
              key: "EVENT_KEY",
              get: function() {
                return ze;
              }
            },
            {
              key: "DefaultType",
              get: function() {
                return Xe;
              }
            }
          ]),
          i
        );
      })(Xn)),
      (Ve.fn[Ye] = on._jQueryInterface),
      (Ve.fn[Ye].Constructor = on),
      (Ve.fn[Ye].noConflict = function() {
        return (Ve.fn[Ye] = Je), on._jQueryInterface;
      }),
      on),
    ei =
      ((ln = "scrollspy"),
      (cn = "." + (hn = "bs.scrollspy")),
      (un = (an = e).fn[ln]),
      (fn = { offset: 10, method: "auto", target: "" }),
      (dn = { offset: "number", method: "string", target: "(string|element)" }),
      (gn = {
        ACTIVATE: "activate" + cn,
        SCROLL: "scroll" + cn,
        LOAD_DATA_API: "load" + cn + ".data-api"
      }),
      (_n = "dropdown-item"),
      (mn = "active"),
      (pn = '[data-spy="scroll"]'),
      (vn = ".active"),
      (En = ".nav, .list-group"),
      (yn = ".nav-link"),
      (Cn = ".nav-item"),
      (bn = ".list-group-item"),
      (Tn = ".dropdown"),
      (In = ".dropdown-item"),
      (Dn = ".dropdown-toggle"),
      (wn = "offset"),
      (Sn = "position"),
      (An = (function() {
        function i(t, e) {
          var n = this;
          (this._element = t),
            (this._scrollElement = "BODY" === t.tagName ? window : t),
            (this._config = this._getConfig(e)),
            (this._selector =
              this._config.target +
              " " +
              yn +
              "," +
              this._config.target +
              " " +
              bn +
              "," +
              this._config.target +
              " " +
              In),
            (this._offsets = []),
            (this._targets = []),
            (this._activeTarget = null),
            (this._scrollHeight = 0),
            an(this._scrollElement).on(gn.SCROLL, function(t) {
              return n._process(t);
            }),
            this.refresh(),
            this._process();
        }
        var t = i.prototype;
        return (
          (t.refresh = function() {
            var e = this,
              t = this._scrollElement === this._scrollElement.window ? wn : Sn,
              r = "auto" === this._config.method ? t : this._config.method,
              s = r === Sn ? this._getScrollTop() : 0;
            (this._offsets = []),
              (this._targets = []),
              (this._scrollHeight = this._getScrollHeight()),
              an
                .makeArray(an(this._selector))
                .map(function(t) {
                  var e,
                    n = d.getSelectorFromElement(t);
                  if ((n && (e = an(n)[0]), e)) {
                    var i = e.getBoundingClientRect();
                    if (i.width || i.height) return [an(e)[r]().top + s, n];
                  }
                  return null;
                })
                .filter(function(t) {
                  return t;
                })
                .sort(function(t, e) {
                  return t[0] - e[0];
                })
                .forEach(function(t) {
                  e._offsets.push(t[0]), e._targets.push(t[1]);
                });
          }),
          (t.dispose = function() {
            an.removeData(this._element, hn),
              an(this._scrollElement).off(cn),
              (this._element = null),
              (this._scrollElement = null),
              (this._config = null),
              (this._selector = null),
              (this._offsets = null),
              (this._targets = null),
              (this._activeTarget = null),
              (this._scrollHeight = null);
          }),
          (t._getConfig = function(t) {
            if ("string" != typeof (t = h({}, fn, t)).target) {
              var e = an(t.target).attr("id");
              e || ((e = d.getUID(ln)), an(t.target).attr("id", e)),
                (t.target = "#" + e);
            }
            return d.typeCheckConfig(ln, t, dn), t;
          }),
          (t._getScrollTop = function() {
            return this._scrollElement === window
              ? this._scrollElement.pageYOffset
              : this._scrollElement.scrollTop;
          }),
          (t._getScrollHeight = function() {
            return (
              this._scrollElement.scrollHeight ||
              Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight
              )
            );
          }),
          (t._getOffsetHeight = function() {
            return this._scrollElement === window
              ? window.innerHeight
              : this._scrollElement.getBoundingClientRect().height;
          }),
          (t._process = function() {
            var t = this._getScrollTop() + this._config.offset,
              e = this._getScrollHeight(),
              n = this._config.offset + e - this._getOffsetHeight();
            if ((this._scrollHeight !== e && this.refresh(), n <= t)) {
              var i = this._targets[this._targets.length - 1];
              this._activeTarget !== i && this._activate(i);
            } else {
              if (
                this._activeTarget &&
                t < this._offsets[0] &&
                0 < this._offsets[0]
              )
                return (this._activeTarget = null), void this._clear();
              for (var r = this._offsets.length; r--; ) {
                this._activeTarget !== this._targets[r] &&
                  t >= this._offsets[r] &&
                  (void 0 === this._offsets[r + 1] ||
                    t < this._offsets[r + 1]) &&
                  this._activate(this._targets[r]);
              }
            }
          }),
          (t._activate = function(e) {
            (this._activeTarget = e), this._clear();
            var t = this._selector.split(",");
            t = t.map(function(t) {
              return (
                t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
              );
            });
            var n = an(t.join(","));
            n.hasClass(_n)
              ? (n
                  .closest(Tn)
                  .find(Dn)
                  .addClass(mn),
                n.addClass(mn))
              : (n.addClass(mn),
                n
                  .parents(En)
                  .prev(yn + ", " + bn)
                  .addClass(mn),
                n
                  .parents(En)
                  .prev(Cn)
                  .children(yn)
                  .addClass(mn)),
              an(this._scrollElement).trigger(gn.ACTIVATE, {
                relatedTarget: e
              });
          }),
          (t._clear = function() {
            an(this._selector)
              .filter(vn)
              .removeClass(mn);
          }),
          (i._jQueryInterface = function(n) {
            return this.each(function() {
              var t = an(this).data(hn),
                e = "object" === _typeof(n) && n;
              if (
                (t || ((t = new i(this, e)), an(this).data(hn, t)),
                "string" == typeof n)
              ) {
                if (void 0 === t[n])
                  throw new TypeError('No method named "' + n + '"');
                t[n]();
              }
            });
          }),
          o(i, null, [
            {
              key: "VERSION",
              get: function() {
                return "4.1.0";
              }
            },
            {
              key: "Default",
              get: function() {
                return fn;
              }
            }
          ]),
          i
        );
      })()),
      an(window).on(gn.LOAD_DATA_API, function() {
        for (var t = an.makeArray(an(pn)), e = t.length; e--; ) {
          var n = an(t[e]);
          An._jQueryInterface.call(n, n.data());
        }
      }),
      (an.fn[ln] = An._jQueryInterface),
      (an.fn[ln].Constructor = An),
      (an.fn[ln].noConflict = function() {
        return (an.fn[ln] = un), An._jQueryInterface;
      }),
      An),
    ni =
      ((kn = "." + (On = "bs.tab")),
      (Pn = (Nn = e).fn.tab),
      (jn = {
        HIDE: "hide" + kn,
        HIDDEN: "hidden" + kn,
        SHOW: "show" + kn,
        SHOWN: "shown" + kn,
        CLICK_DATA_API: "click" + kn + ".data-api"
      }),
      (Hn = "dropdown-menu"),
      (Ln = "active"),
      (Rn = "disabled"),
      (xn = "fade"),
      (Wn = "show"),
      (Un = ".dropdown"),
      (Fn = ".nav, .list-group"),
      (Kn = ".active"),
      (Mn = "> li > .active"),
      (Qn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]'),
      (Bn = ".dropdown-toggle"),
      (Vn = "> .dropdown-menu .active"),
      (Yn = (function() {
        function i(t) {
          this._element = t;
        }
        var t = i.prototype;
        return (
          (t.show = function() {
            var n = this;
            if (
              !(
                (this._element.parentNode &&
                  this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                  Nn(this._element).hasClass(Ln)) ||
                Nn(this._element).hasClass(Rn)
              )
            ) {
              var t,
                i,
                e = Nn(this._element).closest(Fn)[0],
                r = d.getSelectorFromElement(this._element);
              if (e) {
                var s = "UL" === e.nodeName ? Mn : Kn;
                i = (i = Nn.makeArray(Nn(e).find(s)))[i.length - 1];
              }
              var o = Nn.Event(jn.HIDE, { relatedTarget: this._element }),
                a = Nn.Event(jn.SHOW, { relatedTarget: i });
              if (
                (i && Nn(i).trigger(o),
                Nn(this._element).trigger(a),
                !a.isDefaultPrevented() && !o.isDefaultPrevented())
              ) {
                r && (t = Nn(r)[0]), this._activate(this._element, e);
                var l = function() {
                  var t = Nn.Event(jn.HIDDEN, { relatedTarget: n._element }),
                    e = Nn.Event(jn.SHOWN, { relatedTarget: i });
                  Nn(i).trigger(t), Nn(n._element).trigger(e);
                };
                t ? this._activate(t, t.parentNode, l) : l();
              }
            }
          }),
          (t.dispose = function() {
            Nn.removeData(this._element, On), (this._element = null);
          }),
          (t._activate = function(t, e, n) {
            function i() {
              return r._transitionComplete(t, s, n);
            }
            var r = this,
              s = ("UL" === e.nodeName
                ? Nn(e).find(Mn)
                : Nn(e).children(Kn))[0],
              o = n && s && Nn(s).hasClass(xn);
            if (s && o) {
              var a = d.getTransitionDurationFromElement(s);
              Nn(s)
                .one(d.TRANSITION_END, i)
                .emulateTransitionEnd(a);
            } else i();
          }),
          (t._transitionComplete = function(t, e, n) {
            if (e) {
              Nn(e).removeClass(Wn + " " + Ln);
              var i = Nn(e.parentNode).find(Vn)[0];
              i && Nn(i).removeClass(Ln),
                "tab" === e.getAttribute("role") &&
                  e.setAttribute("aria-selected", !1);
            }
            if (
              (Nn(t).addClass(Ln),
              "tab" === t.getAttribute("role") &&
                t.setAttribute("aria-selected", !0),
              d.reflow(t),
              Nn(t).addClass(Wn),
              t.parentNode && Nn(t.parentNode).hasClass(Hn))
            ) {
              var r = Nn(t).closest(Un)[0];
              r &&
                Nn(r)
                  .find(Bn)
                  .addClass(Ln),
                t.setAttribute("aria-expanded", !0);
            }
            n && n();
          }),
          (i._jQueryInterface = function(n) {
            return this.each(function() {
              var t = Nn(this),
                e = t.data(On);
              if (
                (e || ((e = new i(this)), t.data(On, e)), "string" == typeof n)
              ) {
                if (void 0 === e[n])
                  throw new TypeError('No method named "' + n + '"');
                e[n]();
              }
            });
          }),
          o(i, null, [
            {
              key: "VERSION",
              get: function() {
                return "4.1.0";
              }
            }
          ]),
          i
        );
      })()),
      Nn(document).on(jn.CLICK_DATA_API, Qn, function(t) {
        t.preventDefault(), Yn._jQueryInterface.call(Nn(this), "show");
      }),
      (Nn.fn.tab = Yn._jQueryInterface),
      (Nn.fn.tab.Constructor = Yn),
      (Nn.fn.tab.noConflict = function() {
        return (Nn.fn.tab = Pn), Yn._jQueryInterface;
      }),
      Yn);
  !(function(t) {
    if (void 0 === t)
      throw new TypeError(
        "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
      );
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (
      (e[0] < 2 && e[1] < 9) ||
      (1 === e[0] && 9 === e[1] && e[2] < 1) ||
      4 <= e[0]
    )
      throw new Error(
        "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
      );
  })(e),
    (t.Util = d),
    (t.Alert = qn),
    (t.Button = zn),
    (t.Carousel = Jn),
    (t.Collapse = Zn),
    (t.Dropdown = Gn),
    (t.Modal = $n),
    (t.Popover = ti),
    (t.Scrollspy = ei),
    (t.Tab = ni),
    (t.Tooltip = Xn),
    Object.defineProperty(t, "__esModule", { value: !0 });
});
