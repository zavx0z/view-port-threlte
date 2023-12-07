import { c as y, S as B, i as G, f as q, s as L, a as O, C as R, b as T, e as j, d as p, g as v, h as z, j as d, m as _, u as A, k as E, l as P, t as m, n as c, o as C, p as g, T as S, G as V, q as W, B as Z, O as F, r as H } from "./Bots-2fvQTrDl.js";
function I(i) {
  O(i, "svelte-1624n9p", "div.svelte-1624n9p{width:100vw;height:100vh;background:rgb(13, 19, 32);background:linear-gradient(180deg, rgba(13, 19, 32, 1) 0%, rgba(8, 12, 21, 1) 100%)}");
}
function J(i) {
  let s, n;
  return s = new F({
    props: {
      autoRotate: !0,
      enableZoom: !0,
      enableDamping: !0,
      autoRotateSpeed: 2,
      "target.y": 0.8
    }
  }), {
    c() {
      p(s.$$.fragment);
    },
    m(o, a) {
      _(s, o, a), n = !0;
    },
    p: H,
    i(o) {
      n || (m(s.$$.fragment, o), n = !0);
    },
    o(o) {
      c(s.$$.fragment, o), n = !1;
    },
    d(o) {
      g(s, o);
    }
  };
}
function K(i) {
  let s, n, o, a, f, r, t, $, u, h, b, w;
  return s = new S.PerspectiveCamera({
    props: {
      makeDefault: !0,
      position: [0, 4, 9],
      fov: 15,
      $$slots: { default: [J] },
      $$scope: { ctx: i }
    }
  }), o = new S.AmbientLight({ props: { intensity: 0.5 } }), f = new S.DirectionalLight({
    props: { args: ["#fff", 0.5], intensity: 0.6 }
  }), t = new V({
    props: {
      "position.y": -1e-3,
      cellColor: (
        /*cellColor*/
        i[0]
      ),
      sectionColor: (
        /*sectionColor*/
        i[1]
      ),
      sectionThickness: 1,
      fadeDistance: 14,
      cellSize: 1
    }
  }), u = new W({
    props: {
      resolution: 44,
      depthWrite: !0,
      color: "#87ceeb",
      smooth: !0,
      scale: 7,
      blur: 7,
      far: 1.8,
      opacity: 0.7
    }
  }), b = new Z({}), {
    c() {
      p(s.$$.fragment), n = v(), p(o.$$.fragment), a = v(), p(f.$$.fragment), r = v(), p(t.$$.fragment), $ = v(), p(u.$$.fragment), h = v(), p(b.$$.fragment);
    },
    m(e, l) {
      _(s, e, l), d(e, n, l), _(o, e, l), d(e, a, l), _(f, e, l), d(e, r, l), _(t, e, l), d(e, $, l), _(u, e, l), d(e, h, l), _(b, e, l), w = !0;
    },
    p(e, l) {
      const D = {};
      l & /*$$scope*/
      8 && (D.$$scope = { dirty: l, ctx: e }), s.$set(D);
      const k = {};
      l & /*cellColor*/
      1 && (k.cellColor = /*cellColor*/
      e[0]), l & /*sectionColor*/
      2 && (k.sectionColor = /*sectionColor*/
      e[1]), t.$set(k);
    },
    i(e) {
      w || (m(s.$$.fragment, e), m(o.$$.fragment, e), m(f.$$.fragment, e), m(t.$$.fragment, e), m(u.$$.fragment, e), m(b.$$.fragment, e), w = !0);
    },
    o(e) {
      c(s.$$.fragment, e), c(o.$$.fragment, e), c(f.$$.fragment, e), c(t.$$.fragment, e), c(u.$$.fragment, e), c(b.$$.fragment, e), w = !1;
    },
    d(e) {
      e && (C(n), C(a), C(r), C($), C(h)), g(s, e), g(o, e), g(f, e), g(t, e), g(u, e), g(b, e);
    }
  };
}
function M(i) {
  let s, n, o, a;
  n = new R({
    props: {
      $$slots: { default: [K] },
      $$scope: { ctx: i }
    }
  });
  const f = (
    /*#slots*/
    i[2].default
  ), r = T(
    f,
    i,
    /*$$scope*/
    i[3],
    null
  );
  return {
    c() {
      s = j("div"), p(n.$$.fragment), o = v(), r && r.c(), z(s, "class", "svelte-1624n9p");
    },
    m(t, $) {
      d(t, s, $), _(n, s, null), d(t, o, $), r && r.m(t, $), a = !0;
    },
    p(t, [$]) {
      const u = {};
      $ & /*$$scope, cellColor, sectionColor*/
      11 && (u.$$scope = { dirty: $, ctx: t }), n.$set(u), r && r.p && (!a || $ & /*$$scope*/
      8) && A(
        r,
        f,
        t,
        /*$$scope*/
        t[3],
        a ? P(
          f,
          /*$$scope*/
          t[3],
          $,
          null
        ) : E(
          /*$$scope*/
          t[3]
        ),
        null
      );
    },
    i(t) {
      a || (m(n.$$.fragment, t), m(r, t), a = !0);
    },
    o(t) {
      c(n.$$.fragment, t), c(r, t), a = !1;
    },
    d(t) {
      t && (C(s), C(o)), g(n), r && r.d(t);
    }
  };
}
function N(i, s, n) {
  let { $$slots: o = {}, $$scope: a } = s, { cellColor: f = "#fff" } = s, { sectionColor: r = "#fff" } = s;
  return i.$$set = (t) => {
    "cellColor" in t && n(0, f = t.cellColor), "sectionColor" in t && n(1, r = t.sectionColor), "$$scope" in t && n(3, a = t.$$scope);
  }, [f, r, o, a];
}
class Q extends B {
  constructor(s) {
    super(), G(this, s, N, M, L, { cellColor: 0, sectionColor: 1 }, I);
  }
  get cellColor() {
    return this.$$.ctx[0];
  }
  set cellColor(s) {
    this.$$set({ cellColor: s }), q();
  }
  get sectionColor() {
    return this.$$.ctx[1];
  }
  set sectionColor(s) {
    this.$$set({ sectionColor: s }), q();
  }
}
customElements.define("view-port", y(Q, { cellColor: {}, sectionColor: {} }, ["default"], [], !0));
export {
  Q as default
};
