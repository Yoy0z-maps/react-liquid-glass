var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  LiquidGlass: () => LiquidGlass
});
module.exports = __toCommonJS(src_exports);
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var LiquidGlass = ({
  width = 420,
  height = 420,
  borderRadius = 40,
  className,
  style,
  innerClassName,
  innerStyle,
  children
}) => {
  const wrapperRef = (0, import_react.useRef)(null);
  const radius = typeof borderRadius === "number" ? `${borderRadius}px` : borderRadius;
  (0, import_react.useEffect)(() => {
    if (typeof window === "undefined")
      return;
    if (!document.getElementById("liquid-glass-defs")) {
      const container = document.createElement("div");
      container.id = "liquid-glass-defs";
      container.innerHTML = `
        <!-- Identity Map -->
        <svg
          id="edgeMap"
          xmlns="http://www.w3.org/2000/svg"
          width="400"
          height="400"
          viewBox="0 0 400 400"
          style="position: absolute; left: -9999px; top: -9999px"
        >
          <defs>
            <linearGradient id="redGradient" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stop-color="rgb(255,0,0)" stop-opacity="1" />
              <stop offset="4%" stop-color="rgb(255,0,0)" stop-opacity="0.6" />
              <stop offset="96%" stop-color="rgb(255,0,0)" stop-opacity="0.3" />
              <stop offset="100%" stop-color="rgb(255,0,0)" stop-opacity="0" />
            </linearGradient>
            <linearGradient id="blueGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stop-color="rgb(0,0,255)" stop-opacity="1" />
              <stop offset="4%" stop-color="rgb(0,0,255)" stop-opacity="0.6" />
              <stop offset="96%" stop-color="rgb(0,0,255)" stop-opacity="0.3" />
              <stop offset="100%" stop-color="rgb(0,0,255)" stop-opacity="0" />
            </linearGradient>
          </defs>
          <rect width="400" height="400" fill="black" />
          <rect
            width="400"
            height="400"
            style="fill: url(#redGradient); mix-blend-mode: lighten"
          />
          <rect
            width="400"
            height="400"
            style="fill: url(#blueGradient); mix-blend-mode: lighten"
          />
        </svg>

        <!-- Filter Chain -->
        <svg
          width="0"
          height="0"
          xmlns="http://www.w3.org/2000/svg"
          style="position: absolute"
        >
          <defs>
            <filter
              id="edgeDistortion"
              width="440px"
              height="440px"
              x="-20px"
              y="-20px"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feTurbulence
                type="turbulence"
                baseFrequency="0.0015"
                numOctaves="2"
                result="turbulence"
                stitchTiles="stitch"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="turbulence"
                scale="30"
                xChannelSelector="R"
                yChannelSelector="G"
                result="turbDisplaced"
              />
              <feImage
                result="paneWarpMap"
                href="#edgeMap"
                preserveAspectRatio="none"
                x="0"
                y="0"
                width="440"
                height="440"
              />
              <feDisplacementMap
                in="turbDisplaced"
                in2="paneWarpMap"
                scale="18"
                xChannelSelector="R"
                yChannelSelector="B"
                result="finalDisplaced"
              />
              <feComposite
                in="finalDisplaced"
                in2="SourceGraphic"
                operator="over"
              />
            </filter>
          </defs>
        </svg>
      `;
      document.body.appendChild(container);
    }
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      ref: wrapperRef,
      className: `scene ${className != null ? className : ""}`,
      style: {
        width: `min(${width}px, 90vw)`,
        height: `min(${height}px, 90vw)`,
        borderRadius: radius,
        ...style
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "div",
        {
          className: "glass-card",
          style: {
            borderRadius: radius
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "glass-border", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "edge edge-top" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "edge edge-right" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "edge edge-bottom" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "edge edge-left" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "div",
              {
                className: `card-inner ${innerClassName != null ? innerClassName : ""}`,
                style: {
                  borderRadius: `calc(${radius} - 12px)`,
                  ...innerStyle
                },
                children
              }
            )
          ]
        }
      )
    }
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LiquidGlass
});
