(() => {
  function t(e) {
    return (
      (t =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            }),
      t(e)
    );
  }
  function e() {
    'use strict';
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ e =
      function () {
        return n;
      };
    var r,
      n = {},
      o = Object.prototype,
      i = o.hasOwnProperty,
      a =
        Object.defineProperty ||
        function (t, e, r) {
          t[e] = r.value;
        },
      c = 'function' == typeof Symbol ? Symbol : {},
      u = c.iterator || '@@iterator',
      s = c.asyncIterator || '@@asyncIterator',
      f = c.toStringTag || '@@toStringTag';
    function l(t, e, r) {
      return (
        Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        }),
        t[e]
      );
    }
    try {
      l({}, '');
    } catch (r) {
      l = function (t, e, r) {
        return (t[e] = r);
      };
    }
    function p(t, e, r, n) {
      var o = e && e.prototype instanceof m ? e : m,
        i = Object.create(o.prototype),
        c = new I(n || []);
      return a(i, '_invoke', { value: k(t, r, c) }), i;
    }
    function h(t, e, r) {
      try {
        return { type: 'normal', arg: t.call(e, r) };
      } catch (t) {
        return { type: 'throw', arg: t };
      }
    }
    n.wrap = p;
    var y = 'suspendedStart',
      d = 'suspendedYield',
      v = 'executing',
      g = 'completed',
      w = {};
    function m() {}
    function b() {}
    function _() {}
    var E = {};
    l(E, u, function () {
      return this;
    });
    var O = Object.getPrototypeOf,
      S = O && O(O(R([])));
    S && S !== o && i.call(S, u) && (E = S);
    var L = (_.prototype = m.prototype = Object.create(E));
    function x(t) {
      ['next', 'throw', 'return'].forEach(function (e) {
        l(t, e, function (t) {
          return this._invoke(e, t);
        });
      });
    }
    function j(e, r) {
      function n(o, a, c, u) {
        var s = h(e[o], e, a);
        if ('throw' !== s.type) {
          var f = s.arg,
            l = f.value;
          return l && 'object' == t(l) && i.call(l, '__await')
            ? r.resolve(l.__await).then(
                function (t) {
                  n('next', t, c, u);
                },
                function (t) {
                  n('throw', t, c, u);
                }
              )
            : r.resolve(l).then(
                function (t) {
                  (f.value = t), c(f);
                },
                function (t) {
                  return n('throw', t, c, u);
                }
              );
        }
        u(s.arg);
      }
      var o;
      a(this, '_invoke', {
        value: function (t, e) {
          function i() {
            return new r(function (r, o) {
              n(t, e, r, o);
            });
          }
          return (o = o ? o.then(i, i) : i());
        },
      });
    }
    function k(t, e, n) {
      var o = y;
      return function (i, a) {
        if (o === v) throw Error('Generator is already running');
        if (o === g) {
          if ('throw' === i) throw a;
          return { value: r, done: !0 };
        }
        for (n.method = i, n.arg = a; ; ) {
          var c = n.delegate;
          if (c) {
            var u = P(c, n);
            if (u) {
              if (u === w) continue;
              return u;
            }
          }
          if ('next' === n.method) n.sent = n._sent = n.arg;
          else if ('throw' === n.method) {
            if (o === y) throw ((o = g), n.arg);
            n.dispatchException(n.arg);
          } else 'return' === n.method && n.abrupt('return', n.arg);
          o = v;
          var s = h(t, e, n);
          if ('normal' === s.type) {
            if (((o = n.done ? g : d), s.arg === w)) continue;
            return { value: s.arg, done: n.done };
          }
          'throw' === s.type &&
            ((o = g), (n.method = 'throw'), (n.arg = s.arg));
        }
      };
    }
    function P(t, e) {
      var n = e.method,
        o = t.iterator[n];
      if (o === r)
        return (
          (e.delegate = null),
          ('throw' === n &&
            t.iterator.return &&
            ((e.method = 'return'),
            (e.arg = r),
            P(t, e),
            'throw' === e.method)) ||
            ('return' !== n &&
              ((e.method = 'throw'),
              (e.arg = new TypeError(
                "The iterator does not provide a '" + n + "' method"
              )))),
          w
        );
      var i = h(o, t.iterator, e.arg);
      if ('throw' === i.type)
        return (e.method = 'throw'), (e.arg = i.arg), (e.delegate = null), w;
      var a = i.arg;
      return a
        ? a.done
          ? ((e[t.resultName] = a.value),
            (e.next = t.nextLoc),
            'return' !== e.method && ((e.method = 'next'), (e.arg = r)),
            (e.delegate = null),
            w)
          : a
        : ((e.method = 'throw'),
          (e.arg = new TypeError('iterator result is not an object')),
          (e.delegate = null),
          w);
    }
    function N(t) {
      var e = { tryLoc: t[0] };
      1 in t && (e.catchLoc = t[1]),
        2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
        this.tryEntries.push(e);
    }
    function D(t) {
      var e = t.completion || {};
      (e.type = 'normal'), delete e.arg, (t.completion = e);
    }
    function I(t) {
      (this.tryEntries = [{ tryLoc: 'root' }]),
        t.forEach(N, this),
        this.reset(!0);
    }
    function R(e) {
      if (e || '' === e) {
        var n = e[u];
        if (n) return n.call(e);
        if ('function' == typeof e.next) return e;
        if (!isNaN(e.length)) {
          var o = -1,
            a = function t() {
              for (; ++o < e.length; )
                if (i.call(e, o)) return (t.value = e[o]), (t.done = !1), t;
              return (t.value = r), (t.done = !0), t;
            };
          return (a.next = a);
        }
      }
      throw new TypeError(t(e) + ' is not iterable');
    }
    return (
      (b.prototype = _),
      a(L, 'constructor', { value: _, configurable: !0 }),
      a(_, 'constructor', { value: b, configurable: !0 }),
      (b.displayName = l(_, f, 'GeneratorFunction')),
      (n.isGeneratorFunction = function (t) {
        var e = 'function' == typeof t && t.constructor;
        return (
          !!e && (e === b || 'GeneratorFunction' === (e.displayName || e.name))
        );
      }),
      (n.mark = function (t) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(t, _)
            : ((t.__proto__ = _), l(t, f, 'GeneratorFunction')),
          (t.prototype = Object.create(L)),
          t
        );
      }),
      (n.awrap = function (t) {
        return { __await: t };
      }),
      x(j.prototype),
      l(j.prototype, s, function () {
        return this;
      }),
      (n.AsyncIterator = j),
      (n.async = function (t, e, r, o, i) {
        void 0 === i && (i = Promise);
        var a = new j(p(t, e, r, o), i);
        return n.isGeneratorFunction(e)
          ? a
          : a.next().then(function (t) {
              return t.done ? t.value : a.next();
            });
      }),
      x(L),
      l(L, f, 'Generator'),
      l(L, u, function () {
        return this;
      }),
      l(L, 'toString', function () {
        return '[object Generator]';
      }),
      (n.keys = function (t) {
        var e = Object(t),
          r = [];
        for (var n in e) r.push(n);
        return (
          r.reverse(),
          function t() {
            for (; r.length; ) {
              var n = r.pop();
              if (n in e) return (t.value = n), (t.done = !1), t;
            }
            return (t.done = !0), t;
          }
        );
      }),
      (n.values = R),
      (I.prototype = {
        constructor: I,
        reset: function (t) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = r),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = r),
            this.tryEntries.forEach(D),
            !t)
          )
            for (var e in this)
              't' === e.charAt(0) &&
                i.call(this, e) &&
                !isNaN(+e.slice(1)) &&
                (this[e] = r);
        },
        stop: function () {
          this.done = !0;
          var t = this.tryEntries[0].completion;
          if ('throw' === t.type) throw t.arg;
          return this.rval;
        },
        dispatchException: function (t) {
          if (this.done) throw t;
          var e = this;
          function n(n, o) {
            return (
              (c.type = 'throw'),
              (c.arg = t),
              (e.next = n),
              o && ((e.method = 'next'), (e.arg = r)),
              !!o
            );
          }
          for (var o = this.tryEntries.length - 1; o >= 0; --o) {
            var a = this.tryEntries[o],
              c = a.completion;
            if ('root' === a.tryLoc) return n('end');
            if (a.tryLoc <= this.prev) {
              var u = i.call(a, 'catchLoc'),
                s = i.call(a, 'finallyLoc');
              if (u && s) {
                if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                if (this.prev < a.finallyLoc) return n(a.finallyLoc);
              } else if (u) {
                if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
              } else {
                if (!s) throw Error('try statement without catch or finally');
                if (this.prev < a.finallyLoc) return n(a.finallyLoc);
              }
            }
          }
        },
        abrupt: function (t, e) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var n = this.tryEntries[r];
            if (
              n.tryLoc <= this.prev &&
              i.call(n, 'finallyLoc') &&
              this.prev < n.finallyLoc
            ) {
              var o = n;
              break;
            }
          }
          o &&
            ('break' === t || 'continue' === t) &&
            o.tryLoc <= e &&
            e <= o.finallyLoc &&
            (o = null);
          var a = o ? o.completion : {};
          return (
            (a.type = t),
            (a.arg = e),
            o
              ? ((this.method = 'next'), (this.next = o.finallyLoc), w)
              : this.complete(a)
          );
        },
        complete: function (t, e) {
          if ('throw' === t.type) throw t.arg;
          return (
            'break' === t.type || 'continue' === t.type
              ? (this.next = t.arg)
              : 'return' === t.type
              ? ((this.rval = this.arg = t.arg),
                (this.method = 'return'),
                (this.next = 'end'))
              : 'normal' === t.type && e && (this.next = e),
            w
          );
        },
        finish: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e];
            if (r.finallyLoc === t)
              return this.complete(r.completion, r.afterLoc), D(r), w;
          }
        },
        catch: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e];
            if (r.tryLoc === t) {
              var n = r.completion;
              if ('throw' === n.type) {
                var o = n.arg;
                D(r);
              }
              return o;
            }
          }
          throw Error('illegal catch attempt');
        },
        delegateYield: function (t, e, n) {
          return (
            (this.delegate = { iterator: R(t), resultName: e, nextLoc: n }),
            'next' === this.method && (this.arg = r),
            w
          );
        },
      }),
      n
    );
  }
  function r(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      e &&
        (n = n.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })),
        r.push.apply(r, n);
    }
    return r;
  }
  function n(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? r(Object(n), !0).forEach(function (e) {
            o(t, e, n[e]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : r(Object(n)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
          });
    }
    return t;
  }
  function o(e, r, n) {
    var o;
    return (
      (o = (function (e, r) {
        if ('object' != t(e) || !e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
          var o = n.call(e, r || 'default');
          if ('object' != t(o)) return o;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === r ? String : Number)(e);
      })(r, 'string')),
      (r = 'symbol' == t(o) ? o : o + '') in e
        ? Object.defineProperty(e, r, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[r] = n),
      e
    );
  }
  function i(t, e, r, n, o, i, a) {
    try {
      var c = t[i](a),
        u = c.value;
    } catch (t) {
      return void r(t);
    }
    c.done ? e(u) : Promise.resolve(u).then(n, o);
  }
  function a(t) {
    return function () {
      var e = this,
        r = arguments;
      return new Promise(function (n, o) {
        var a = t.apply(e, r);
        function c(t) {
          i(a, n, o, c, u, 'next', t);
        }
        function u(t) {
          i(a, n, o, c, u, 'throw', t);
        }
        c(void 0);
      });
    };
  }
  !(function () {
    var t = function (t) {
        var e = new CustomEvent('CustomEvent', { detail: t });
        document.dispatchEvent(e);
      },
      r = Object.keys,
      o = Object.keys(window.XMLHttpRequest.prototype),
      i = Object.keys(window.XMLHttpRequest);
    (Object.keys = function (t) {
      return t === window.XMLHttpRequest.prototype
        ? o
        : t === window.XMLHttpRequest
        ? i
        : r(t);
    }),
      (Object.keys.toString = function () {
        return 'function keys() { [native code] }';
      });
    var c = window.XMLHttpRequest;
    function u() {
      var r = new c(),
        o = new Map();
      r.addEventListener(
        'readystatechange',
        function () {
          if (4 === this.readyState)
            try {
              var e = o.get(this),
                r = e.url,
                n = e.method,
                i = e.body;
              o.delete(this),
                t({
                  type: 'sheinRequest',
                  method: n,
                  url: r,
                  body: i ? JSON.parse(i) : null,
                  data: this.responseText
                    ? JSON.parse(this.responseText)
                    : null,
                });
            } catch (t) {}
        },
        !1
      );
      var i = r.open;
      (r.open = function (t, e, r, n, a) {
        try {
          o.set(this, { url: e, method: t }), i.call(this, t, e, r, n, a);
        } catch (t) {
          var c = t.stack.split('\n');
          throw (
            ((c = c.filter(function (t) {
              return !/chrome-extension/.test(t);
            })),
            (t.stack = c.join('\n')),
            t)
          );
        }
      }),
        (r.open.toString = function () {
          return 'function open() { [native code] }';
        });
      var u = r.send;
      return (
        (r.send = (function () {
          var t = a(
            e().mark(function t(r) {
              var i;
              return e().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        (t.prev = 0),
                          o.set(this, n(n({}, o.get(this)), {}, { body: r })),
                          u.call(this, r),
                          (t.next = 11);
                        break;
                      case 5:
                        throw (
                          ((t.prev = 5),
                          (t.t0 = t.catch(0)),
                          (i = (i = t.t0.stack.split('\n')).filter(function (
                            t
                          ) {
                            return !/chrome-extension/.test(t);
                          })),
                          (t.t0.stack = i.join('\n')),
                          t.t0)
                        );
                      case 11:
                      case 'end':
                        return t.stop();
                    }
                },
                t,
                this,
                [[0, 5]]
              );
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })()),
        (r.send.toString = function () {
          return 'function send() { [native code] }';
        }),
        r
      );
    }
    function s() {
      var t = (function () {
          var t = 'ff'
            .concat(
              (function (t) {
                for (
                  var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : '0123456789',
                    r = '',
                    n = t;
                  n > 0;
                  --n
                )
                  r += e[Math.floor(Math.random() * e.length)];
                return r;
              })(14, '0123456789abcdef')
            )
            .toString();
          return { traceID: t, spanID: t };
        })(),
        e = t.traceID,
        r = Math.random() < 0.5 ? 1 : 0;
      return ''.concat(e, ':').concat(e, ':0:').concat(r);
    }
    function f(t, e) {
      if ('function' != typeof e && void 0 !== e) return e;
    }
    (u.DONE = c.DONE),
      (u.HEADERS_RECEIVED = c.HEADERS_RECEIVED),
      (u.LOADING = c.LOADING),
      (u.OPENED = c.OPENED),
      (u.UNSENT = c.UNSENT),
      (u.length = c.length),
      (u.name = c.name),
      (u.__defineGetter__ = c.__defineGetter__),
      (u.__defineSetter__ = c.__defineSetter__),
      (u.__lookupGetter__ = c.__lookupGetter__),
      (u.__lookupSetter__ = c.__lookupSetter__),
      (u.__proto__ = c.__proto__),
      (u.apply = c.apply),
      (u.bind = c.bind),
      (u.call = c.call),
      (u.constructor = c.constructor),
      (u.hasOwnProperty = c.hasOwnProperty),
      (u.isPrototypeOf = c.isPrototypeOf),
      (u.propertyIsEnumerable = c.propertyIsEnumerable),
      (u.toLocaleString = c.toLocaleString),
      (u.toString = c.toString),
      (u.valueOf = c.valueOf),
      (u.toString = function () {
        return 'function XMLHttpRequest() { [native code] }';
      }),
      (window.XMLHttpRequest = u),
      (window.XMLHttpRequest.prototype = c.prototype),
      (window.XMLHttpRequest.toString = function () {
        return 'function XMLHttpRequest() { [native code] }';
      }),
      (window.XMLHttpRequest.prototype.toString = function () {
        return '[object XMLHttpRequest]';
      }),
      document.addEventListener(
        'CustomEvent',
        (function () {
          var r = a(
            e().mark(function r(n) {
              var o, i, a, c, u, l;
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        'getRawData' !==
                        (null == n || null === (o = n.detail) || void 0 === o
                          ? void 0
                          : o.type)
                      ) {
                        e.next = 5;
                        break;
                      }
                      (a = window.gbRawData || window.gbCommonInfo),
                        t({
                          type: 'getRawDataSuccess',
                          data: a ? JSON.parse(JSON.stringify(a, f)) : null,
                        }),
                        (e.next = 12);
                      break;
                    case 5:
                      if (
                        'calcSignature' !==
                        (null == n || null === (i = n.detail) || void 0 === i
                          ? void 0
                          : i.type)
                      ) {
                        e.next = 12;
                        break;
                      }
                      return (
                        (e.next = 8),
                        window._SHEIN_CALC_SIGNATURE_(n.detail.url)
                      );
                    case 8:
                      (c = e.sent),
                        (u = window.AntiIn.syncGetAllEncrypted(0)),
                        (l = window.AntiDevices.getArmorToken()),
                        t({
                          type: 'calcSignatureSuccess',
                          data: {
                            'X-Gw-Auth': c,
                            'Anti-In': u,
                            'x-csrf-token': window.gbCommonInfo.csrf_token,
                            armortoken: l,
                            SmDeviceId: localStorage.getItem('SmDeviceId'),
                            'Uber-Trace-Id': s(),
                          },
                        });
                    case 12:
                    case 'end':
                      return e.stop();
                  }
              }, r);
            })
          );
          return function (t) {
            return r.apply(this, arguments);
          };
        })()
      );
  })();
})();
