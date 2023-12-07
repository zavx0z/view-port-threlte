import { c as y, S as B, i as G, f as q, s as L, a as O, C as R, b as T, d as b, e as j, g as p, h as z, j as d, m as _, u as A, k as E, l as P, t as m, n as c, o as C, p as g, T as S, G as V, q as W, B as Z, O as F, r as H } from "./Bots-oP5nObwU.js";
function I(f) {
  O(f, "svelte-1624n9p", "div.svelte-1624n9p{width:100vw;height:100vh;background:rgb(13, 19, 32);background:linear-gradient(180deg, rgba(13, 19, 32, 1) 0%, rgba(8, 12, 21, 1) 100%)}");
}
function J(f) {
  let t, r;
  return t = new F({
    props: {
      autoRotate: !0,
      enableZoom: !0,
      enableDamping: !0,
      autoRotateSpeed: 2,
      "target.y": 0.8
    }
  }), {
    c() {
      p(t.$$.fragment);
    },
    m(n, $) {
      _(t, n, $), r = !0;
    },
    p: H,
    i(n) {
      r || (m(t.$$.fragment, n), r = !0);
    },
    o(n) {
      c(t.$$.fragment, n), r = !1;
    },
    d(n) {
      g(t, n);
    }
  };
}
function K(f) {
  let t, r, n, $, l, u, s, o, a, v, w, h;
  return t = new S.PerspectiveCamera({
    props: {
      makeDefault: !0,
      position: [0, 4, 9],
      fov: 15,
      $$slots: { default: [J] },
      $$scope: { ctx: f }
    }
  }), n = new S.AmbientLight({ props: { intensity: 0.5 } }), l = new S.DirectionalLight({
    props: { args: ["#fff", 0.5], intensity: 0.6 }
  }), s = new V({
    props: {
      "position.y": -1e-3,
      cellColor: (
        /*cellColor*/
        f[0]
      ),
      sectionColor: (
        /*sectionColor*/
        f[1]
      ),
      sectionThickness: 1,
      fadeDistance: 14,
      cellSize: 1
    }
  }), a = new W({
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
  }), w = new Z({}), {
    c() {
      p(t.$$.fragment), r = b(), p(n.$$.fragment), $ = b(), p(l.$$.fragment), u = b(), p(s.$$.fragment), o = b(), p(a.$$.fragment), v = b(), p(w.$$.fragment);
    },
    m(e, i) {
      _(t, e, i), d(e, r, i), _(n, e, i), d(e, $, i), _(l, e, i), d(e, u, i), _(s, e, i), d(e, o, i), _(a, e, i), d(e, v, i), _(w, e, i), h = !0;
    },
    p(e, i) {
      const D = {};
      i & /*$$scope*/
      8 && (D.$$scope = { dirty: i, ctx: e }), t.$set(D);
      const k = {};
      i & /*cellColor*/
      1 && (k.cellColor = /*cellColor*/
      e[0]), i & /*sectionColor*/
      2 && (k.sectionColor = /*sectionColor*/
      e[1]), s.$set(k);
    },
    i(e) {
      h || (m(t.$$.fragment, e), m(n.$$.fragment, e), m(l.$$.fragment, e), m(s.$$.fragment, e), m(a.$$.fragment, e), m(w.$$.fragment, e), h = !0);
    },
    o(e) {
      c(t.$$.fragment, e), c(n.$$.fragment, e), c(l.$$.fragment, e), c(s.$$.fragment, e), c(a.$$.fragment, e), c(w.$$.fragment, e), h = !1;
    },
    d(e) {
      e && (C(r), C($), C(u), C(o), C(v)), g(t, e), g(n, e), g(l, e), g(s, e), g(a, e), g(w, e);
    }
  };
}
function M(f) {
  let t, r, n, $, l;
  n = new R({
    props: {
      $$slots: { default: [K] },
      $$scope: { ctx: f }
    }
  });
  const u = (
    /*#slots*/
    f[2].default
  ), s = T(
    u,
    f,
    /*$$scope*/
    f[3],
    null
  );
  return {
    c() {
      t = b(), r = j("div"), p(n.$$.fragment), $ = b(), s && s.c(), z(r, "class", "svelte-1624n9p");
    },
    m(o, a) {
      d(o, t, a), d(o, r, a), _(n, r, null), d(o, $, a), s && s.m(o, a), l = !0;
    },
    p(o, [a]) {
      const v = {};
      a & /*$$scope, cellColor, sectionColor*/
      11 && (v.$$scope = { dirty: a, ctx: o }), n.$set(v), s && s.p && (!l || a & /*$$scope*/
      8) && A(
        s,
        u,
        o,
        /*$$scope*/
        o[3],
        l ? P(
          u,
          /*$$scope*/
          o[3],
          a,
          null
        ) : E(
          /*$$scope*/
          o[3]
        ),
        null
      );
    },
    i(o) {
      l || (m(n.$$.fragment, o), m(s, o), l = !0);
    },
    o(o) {
      c(n.$$.fragment, o), c(s, o), l = !1;
    },
    d(o) {
      o && (C(t), C(r), C($)), g(n), s && s.d(o);
    }
  };
}
function N(f, t, r) {
  let { $$slots: n = {}, $$scope: $ } = t, { cellColor: l = "#fff" } = t, { sectionColor: u = "#fff" } = t;
  return f.$$set = (s) => {
    "cellColor" in s && r(0, l = s.cellColor), "sectionColor" in s && r(1, u = s.sectionColor), "$$scope" in s && r(3, $ = s.$$scope);
  }, [l, u, n, $];
}
class Q extends B {
  constructor(t) {
    super(), G(this, t, N, M, L, { cellColor: 0, sectionColor: 1 }, I);
  }
  get cellColor() {
    return this.$$.ctx[0];
  }
  set cellColor(t) {
    this.$$set({ cellColor: t }), q();
  }
  get sectionColor() {
    return this.$$.ctx[1];
  }
  set sectionColor(t) {
    this.$$set({ sectionColor: t }), q();
  }
}
customElements.define("view-port", y(Q, { cellColor: {}, sectionColor: {} }, ["default"], [], !0));
export {
  Q as default
};
