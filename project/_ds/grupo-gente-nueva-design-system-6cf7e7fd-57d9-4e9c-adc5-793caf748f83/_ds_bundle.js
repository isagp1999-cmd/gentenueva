/* @ds-bundle: {"format":4,"namespace":"GrupoGenteNuevaDesignSystem_6cf7e7","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Callout","sourcePath":"components/feedback/Callout.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"TopNav","sourcePath":"components/navigation/TopNav.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"7c875ad463f3","components/core/Button.jsx":"5e6f53fd1970","components/core/Card.jsx":"54d8a9c43f83","components/core/Icon.jsx":"c78b60b98d55","components/core/IconButton.jsx":"f5b62663d5d4","components/core/Logo.jsx":"ff59a3bee4f0","components/core/Tag.jsx":"66bd42b35dfd","components/feedback/Callout.jsx":"5595137e7802","components/feedback/Dialog.jsx":"c6f5e20ab77e","components/feedback/Toast.jsx":"2e20c61e89b8","components/feedback/Tooltip.jsx":"08392bd3e5ee","components/forms/Checkbox.jsx":"b961ecb7688e","components/forms/Input.jsx":"cd1e0b4e7768","components/forms/Radio.jsx":"2ec7a56b2292","components/forms/Select.jsx":"4799b049acda","components/forms/Switch.jsx":"c4e1e9910320","components/navigation/Footer.jsx":"eca0c078c013","components/navigation/Tabs.jsx":"7a179120f14d","components/navigation/TopNav.jsx":"d5bd1751cf0c","ui_kits/website/ContactScreen.jsx":"cdffdf055ed6","ui_kits/website/EventsScreen.jsx":"751d2da4cea3","ui_kits/website/LiteratureScreen.jsx":"0c938d10ba62","ui_kits/website/MeetingsScreen.jsx":"f9b038be7a67","ui_kits/website/Shell.jsx":"f6bb8e4e6f3c","ui_kits/website/data.js":"b4f744091cc4"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GrupoGenteNuevaDesignSystem_6cf7e7 = window.GrupoGenteNuevaDesignSystem_6cf7e7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  tone = "neutral",
  children,
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      background: "var(--surface-strong)",
      color: "var(--text-brand)"
    },
    open: {
      background: "transparent",
      color: "var(--status-open)",
      boxShadow: "inset 0 0 0 1px currentColor"
    },
    closed: {
      background: "transparent",
      color: "var(--status-closed)",
      boxShadow: "inset 0 0 0 1px currentColor"
    },
    note: {
      background: "var(--gold-100)",
      color: "var(--gold-600)"
    },
    dark: {
      background: "rgba(255,255,255,.12)",
      color: "var(--text-on-dark)"
    }
  }[tone];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      height: 24,
      padding: "0 12px",
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-text)",
      fontSize: "var(--size-overline)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-overline)",
      textTransform: "uppercase",
      ...tones,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "var(--space-2)",
  fontFamily: "var(--font-text)",
  fontWeight: 600,
  lineHeight: 1.15,
  borderRadius: "var(--radius-pill)",
  border: "1px solid transparent",
  cursor: "pointer",
  textDecoration: "none",
  whiteSpace: "nowrap",
  transition: "background var(--motion-fast) var(--ease-standard),color var(--motion-fast) var(--ease-standard)"
};
const sizes = {
  sm: {
    height: "var(--control-height-sm)",
    padding: "0 16px",
    fontSize: "var(--size-body-sm)"
  },
  md: {
    height: "var(--control-height)",
    padding: "0 20px",
    fontSize: "var(--size-body-md)"
  },
  lg: {
    height: "var(--control-height-lg)",
    padding: "0 32px",
    fontSize: "var(--size-body-lg)"
  }
};
const variants = {
  primary: {
    background: "var(--color-primary)",
    color: "var(--text-on-primary)"
  },
  secondary: {
    background: "var(--surface-strong)",
    color: "var(--text-brand)"
  },
  outline: {
    background: "transparent",
    color: "var(--text-brand)",
    borderColor: "var(--border-strong)"
  },
  "outline-on-dark": {
    background: "transparent",
    color: "var(--text-on-dark)",
    borderColor: "rgba(255,255,255,.55)"
  },
  "secondary-on-dark": {
    background: "var(--surface-dark-elevated)",
    color: "var(--text-on-dark)"
  },
  text: {
    background: "transparent",
    color: "var(--color-link)",
    padding: 0,
    height: "auto",
    textDecoration: "underline",
    textUnderlineOffset: "3px"
  }
};
function Button({
  variant = "primary",
  size = "md",
  href,
  disabled = false,
  fullWidth = false,
  iconLeft,
  iconRight,
  children,
  style,
  ...rest
}) {
  const s = {
    ...base,
    ...sizes[size],
    ...variants[variant],
    ...(fullWidth ? {
      width: "100%"
    } : null),
    ...(disabled ? {
      background: variant === "primary" ? "var(--color-primary-disabled)" : "var(--surface-soft)",
      color: variant === "primary" ? "var(--text-on-primary)" : "var(--text-disabled)",
      borderColor: "transparent",
      cursor: "not-allowed"
    } : null),
    ...style
  };
  const Tag = href && !disabled ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: Tag === "button" ? disabled : undefined,
    style: s
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  tone = "light",
  padding = "var(--space-8)",
  radius = "var(--radius-xl)",
  hairline = true,
  elevated = false,
  as: Tag = "div",
  children,
  style,
  ...rest
}) {
  const tones = {
    light: {
      background: "var(--surface-card)",
      color: "var(--text-body)",
      borderColor: "var(--border-hairline)"
    },
    soft: {
      background: "var(--surface-soft)",
      color: "var(--text-body)",
      borderColor: "transparent"
    },
    tint: {
      background: "var(--surface-strong)",
      color: "var(--text-brand)",
      borderColor: "transparent"
    },
    dark: {
      background: "var(--surface-dark-elevated)",
      color: "var(--text-on-dark-soft)",
      borderColor: "rgba(255,255,255,.10)"
    }
  }[tone];
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      borderRadius: radius,
      padding,
      border: hairline ? "1px solid " + tones.borderColor : "1px solid transparent",
      background: tones.background,
      color: tones.color,
      boxShadow: elevated ? "var(--shadow-soft)" : "var(--shadow-none)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Lucide via CDN sprite-free inline: consumers load lucide's UMD script and we render <i data-lucide>. */
function Icon({
  name,
  size = 20,
  stroke = 1.75,
  color = "currentColor",
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const L = window.lucide;
    if (L && ref.current) {
      ref.current.innerHTML = "";
      const el = document.createElement("i");
      el.setAttribute("data-lucide", name);
      ref.current.appendChild(el);
      L.createIcons({
        attrs: {
          width: size,
          height: size,
          "stroke-width": stroke,
          stroke: color
        },
        nameAttr: "data-lucide",
        root: ref.current
      });
    }
  }, [name, size, stroke, color]);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      width: size,
      height: size,
      color,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  label,
  size = "md",
  variant = "ghost",
  onDark = false,
  children,
  style,
  ...rest
}) {
  const d = size === "sm" ? 36 : 44;
  const v = {
    ghost: {
      background: "transparent",
      color: onDark ? "var(--text-on-dark)" : "var(--text-ink)",
      border: "1px solid transparent"
    },
    soft: {
      background: onDark ? "var(--surface-dark-elevated)" : "var(--surface-strong)",
      color: onDark ? "var(--text-on-dark)" : "var(--text-brand)",
      border: "1px solid transparent"
    },
    outline: {
      background: "transparent",
      color: onDark ? "var(--text-on-dark)" : "var(--text-brand)",
      border: "1px solid " + (onDark ? "rgba(255,255,255,.55)" : "var(--border-hairline)")
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    style: {
      width: d,
      height: d,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-full)",
      cursor: "pointer",
      ...v,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Logo({
  variant = "lockup",
  size = 40,
  src,
  onDark = false,
  label = "Alcohólicos Anónimos · Grupo Gente Nueva",
  style,
  ...rest
}) {
  const base = src || (variant === "lockup" ? "assets/logo-lockup.png" : "assets/logo-mark.png");
  if (variant === "wordmark") {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: "inline-flex",
        flexDirection: "column",
        lineHeight: 1.08,
        fontFamily: "var(--font-text)",
        fontWeight: 700,
        letterSpacing: "0.02em",
        textTransform: "uppercase",
        color: onDark ? "var(--text-on-dark)" : "var(--text-brand)",
        fontSize: size * 0.34,
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("span", null, "Alcoh\xF3licos An\xF3nimos"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 500,
        color: onDark ? "var(--text-on-dark-soft)" : "var(--text-muted)"
      }
    }, "Grupo Gente Nueva"));
  }
  return /*#__PURE__*/React.createElement("img", _extends({
    src: base,
    alt: label,
    style: {
      height: size,
      width: "auto",
      display: "block",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  selected = false,
  onClick,
  children,
  style,
  ...rest
}) {
  const interactive = typeof onClick === "function";
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      height: 36,
      padding: "0 16px",
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-text)",
      fontSize: "var(--size-body-sm)",
      fontWeight: 500,
      cursor: interactive ? "pointer" : "default",
      border: "1px solid " + (selected ? "var(--border-strong)" : "var(--border-hairline)"),
      background: selected ? "var(--color-primary)" : "var(--surface-canvas)",
      color: selected ? "var(--text-on-primary)" : "var(--text-body)",
      transition: "all var(--motion-fast) var(--ease-standard)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Callout({
  tone = "info",
  title,
  children,
  action,
  style,
  ...rest
}) {
  const tones = {
    info: {
      background: "var(--surface-strong)",
      color: "var(--text-brand)",
      edge: "var(--color-primary)"
    },
    note: {
      background: "var(--gold-100)",
      color: "var(--gold-600)",
      edge: "var(--gold-600)"
    },
    quiet: {
      background: "var(--surface-soft)",
      color: "var(--text-body)",
      edge: "var(--border-hairline)"
    }
  }[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      gap: "var(--space-4)",
      alignItems: "flex-start",
      padding: "var(--space-5) var(--space-6)",
      borderRadius: "var(--radius-lg)",
      background: tones.background,
      boxShadow: "inset 2px 0 0 " + tones.edge,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "var(--size-title-sm)",
      fontWeight: 600,
      color: tones.color,
      marginBottom: 4
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--size-body-sm)",
      color: "var(--text-body)"
    }
  }, children)), action);
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Callout.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = true,
  title,
  children,
  footer,
  onClose,
  width = 520,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(15,18,51,.45)",
      display: "grid",
      placeItems: "center",
      padding: "var(--space-6)",
      zIndex: 50
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: "100%",
      maxWidth: width,
      background: "var(--surface-card)",
      borderRadius: "var(--radius-xl)",
      padding: "var(--space-8)",
      boxShadow: "var(--shadow-raised)",
      ...style
    }
  }, rest), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--size-display-sm)",
      color: "var(--text-ink)",
      marginBottom: "var(--space-4)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--size-body-md)",
      color: "var(--text-body)"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      justifyContent: "flex-end",
      marginTop: "var(--space-8)"
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Toast({
  message,
  tone = "neutral",
  action,
  onClose,
  style,
  ...rest
}) {
  const c = {
    neutral: {
      background: "var(--surface-dark)",
      color: "var(--text-on-dark)"
    },
    confirm: {
      background: "var(--surface-dark)",
      color: "var(--text-on-dark)"
    }
  }[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-4)",
      padding: "14px 20px",
      borderRadius: "var(--radius-pill)",
      boxShadow: "var(--shadow-raised)",
      fontFamily: "var(--font-text)",
      fontSize: "var(--size-body-sm)",
      ...c,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", null, message), action, onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Cerrar",
    style: {
      background: "none",
      border: "none",
      color: "inherit",
      cursor: "pointer",
      fontSize: 16,
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  label,
  placement = "top",
  children,
  style,
  ...rest
}) {
  const [on, setOn] = React.useState(false);
  const pos = placement === "top" ? {
    bottom: "calc(100% + 8px)",
    left: "50%",
    transform: "translateX(-50%)"
  } : {
    top: "calc(100% + 8px)",
    left: "50%",
    transform: "translateX(-50%)"
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-flex"
    },
    onMouseEnter: () => setOn(true),
    onMouseLeave: () => setOn(false)
  }, rest), children, on && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      ...pos,
      whiteSpace: "nowrap",
      padding: "6px 10px",
      borderRadius: "var(--radius-sm)",
      background: "var(--surface-dark)",
      color: "var(--text-on-dark)",
      fontFamily: "var(--font-text)",
      fontSize: "var(--size-caption)",
      zIndex: 20,
      ...style
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  description,
  checked,
  onChange,
  onDark = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "flex-start",
      cursor: "pointer",
      fontFamily: "var(--font-text)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      width: 20,
      height: 20,
      marginTop: 2,
      borderRadius: "var(--radius-xs)",
      background: checked ? onDark ? "var(--text-on-dark)" : "var(--color-primary)" : onDark ? "rgba(255,255,255,.08)" : "var(--surface-canvas)",
      boxShadow: "inset 0 0 0 1px " + (checked ? onDark ? "var(--text-on-dark)" : "var(--color-primary)" : onDark ? "rgba(255,255,255,.34)" : "var(--border-hairline)"),
      display: "grid",
      placeItems: "center"
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: onDark ? "#171b47" : "#fff",
    strokeWidth: "3"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 13l4 4L19 7"
  }))), /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: !!checked,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--size-body-md)",
      color: onDark ? "var(--text-on-dark)" : "var(--text-ink)"
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--size-caption)",
      color: onDark ? "var(--text-on-dark-soft)" : "var(--text-muted)"
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  pill = false,
  onDark = false,
  iconLeft,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || "in-" + (label || "field").toLowerCase().replace(/\W+/g, "-");
  const border = error ? "var(--status-closed)" : focus ? onDark ? "var(--text-on-dark)" : "var(--color-primary)" : onDark ? "rgba(255,255,255,.28)" : "var(--border-hairline)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      width: "100%"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "var(--size-body-sm)",
      fontWeight: 600,
      color: onDark ? "var(--text-on-dark)" : "var(--text-ink)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      height: pill ? "var(--control-height)" : 48,
      padding: pill ? "0 20px" : "0 16px",
      borderRadius: pill ? "var(--radius-pill)" : "var(--radius-md)",
      background: onDark ? "rgba(255,255,255,.06)" : pill ? "var(--surface-strong)" : "var(--surface-canvas)",
      boxShadow: "inset 0 0 0 " + (focus ? "2px" : "1px") + " " + border,
      ...style
    }
  }, iconLeft, /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-text)",
      fontSize: "var(--size-body-md)",
      color: onDark ? "var(--text-on-dark)" : "var(--text-ink)",
      minWidth: 0
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "var(--size-caption)",
      color: error ? "var(--status-closed)" : onDark ? "var(--text-on-dark-soft)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  description,
  checked,
  onChange,
  name,
  value,
  onDark = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "flex-start",
      cursor: "pointer",
      fontFamily: "var(--font-text)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      width: 20,
      height: 20,
      marginTop: 2,
      borderRadius: "var(--radius-full)",
      background: onDark ? "rgba(255,255,255,.08)" : "var(--surface-canvas)",
      boxShadow: "inset 0 0 0 " + (checked ? "6px" : "1px") + " " + (checked ? onDark ? "var(--text-on-dark)" : "var(--color-primary)" : onDark ? "rgba(255,255,255,.34)" : "var(--border-hairline)")
    }
  }), /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    value: value,
    checked: !!checked,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--size-body-md)",
      color: onDark ? "var(--text-on-dark)" : "var(--text-ink)"
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--size-caption)",
      color: onDark ? "var(--text-on-dark-soft)" : "var(--text-muted)"
    }
  }, description)));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  options = [],
  onDark = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      width: "100%"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "var(--size-body-sm)",
      fontWeight: 600,
      color: onDark ? "var(--text-on-dark)" : "var(--text-ink)"
    }
  }, label), /*#__PURE__*/React.createElement("select", _extends({
    style: {
      height: 48,
      padding: "0 40px 0 16px",
      borderRadius: "var(--radius-md)",
      border: "1px solid " + (onDark ? "rgba(255,255,255,.28)" : "var(--border-hairline)"),
      background: (onDark ? "rgba(255,255,255,.06)" : "var(--surface-canvas)") + " url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='" + (onDark ? "%23ffffff" : "%23232268") + "' stroke-width='2'><path d='M6 9l6 6 6-6'/></svg>\") no-repeat right 16px center",
      fontFamily: "var(--font-text)",
      fontSize: "var(--size-body-md)",
      color: onDark ? "var(--text-on-dark)" : "var(--text-ink)",
      appearance: "none",
      cursor: "pointer",
      ...style
    }
  }, rest), options.map(o => typeof o === "string" ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "var(--size-caption)",
      color: onDark ? "var(--text-on-dark-soft)" : "var(--text-muted)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      gap: "var(--space-3)",
      alignItems: "center",
      cursor: "pointer",
      fontFamily: "var(--font-text)",
      fontSize: "var(--size-body-md)",
      color: "var(--text-ink)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 44,
      height: 26,
      borderRadius: "var(--radius-pill)",
      background: checked ? "var(--color-primary)" : "var(--gray-200)",
      transition: "background var(--motion-base) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 3,
      left: checked ? 21 : 3,
      width: 20,
      height: 20,
      borderRadius: "var(--radius-full)",
      background: "#fff",
      transition: "left var(--motion-base) var(--ease-standard)"
    }
  })), /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: !!checked,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Footer({
  columns = [],
  legal,
  helpline,
  logoSrc,
  showLogo = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: "var(--surface-canvas)",
      borderTop: "1px solid var(--border-hairline)",
      padding: "var(--space-16) var(--container-pad) var(--space-8)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1.4fr repeat(" + Math.max(columns.length, 1) + ",1fr)",
      gap: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, showLogo && /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "mark",
    size: 56,
    src: logoSrc
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--size-body-sm)",
      color: "var(--text-muted)",
      maxWidth: "30ch"
    }
  }, helpline)), columns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "var(--size-overline)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-overline)",
      textTransform: "uppercase",
      color: "var(--text-ink)"
    }
  }, c.title), c.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontSize: "var(--size-body-sm)",
      color: "var(--text-body)",
      textDecoration: "none"
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "var(--space-12) auto 0",
      paddingTop: "var(--space-6)",
      borderTop: "1px solid var(--border-hairline-soft)",
      fontSize: "var(--size-caption)",
      color: "var(--text-muted)"
    }
  }, legal));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "flex",
      gap: "var(--space-6)",
      borderBottom: "1px solid var(--border-hairline)",
      ...style
    }
  }, rest), items.map(it => {
    const v = typeof it === "string" ? it : it.value,
      l = typeof it === "string" ? it : it.label,
      on = v === value;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(v),
      style: {
        background: "none",
        border: "none",
        padding: "0 0 14px",
        cursor: "pointer",
        fontFamily: "var(--font-text)",
        fontSize: "var(--size-body-md)",
        fontWeight: on ? 600 : 500,
        color: on ? "var(--text-brand)" : "var(--text-muted)",
        boxShadow: on ? "inset 0 -2px 0 var(--color-primary)" : "none"
      }
    }, l);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TopNav({
  links = [],
  active,
  onNavigate,
  onDark = false,
  logoSrc,
  cta = "Necesito ayuda",
  onCta,
  lang = "ES",
  onLang,
  style,
  ...rest
}) {
  const fg = onDark ? "var(--text-on-dark)" : "var(--text-ink)";
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      height: 76,
      display: "flex",
      alignItems: "center",
      gap: "var(--space-8)",
      padding: "0 var(--container-pad)",
      background: onDark ? "var(--surface-dark)" : "var(--surface-canvas)",
      borderBottom: "1px solid " + (onDark ? "rgba(255,255,255,.12)" : "var(--border-hairline)"),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(links[0] && (links[0].value || links[0]));
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "mark",
    size: 44,
    src: logoSrc
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      lineHeight: 1.1,
      fontFamily: "var(--font-text)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      letterSpacing: ".02em",
      textTransform: "uppercase",
      color: fg
    }
  }, "Alcoh\xF3licos An\xF3nimos"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: onDark ? "var(--text-on-dark-soft)" : "var(--text-muted)"
    }
  }, "Grupo Gente Nueva"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: "var(--space-6)",
      marginLeft: "auto"
    }
  }, links.map(l => {
    const v = l.value || l,
      lab = l.label || l,
      on = v === active;
    return /*#__PURE__*/React.createElement("a", {
      key: v,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate(v);
      },
      style: {
        fontFamily: "var(--font-text)",
        fontSize: 14,
        fontWeight: on ? 600 : 500,
        color: on ? onDark ? "var(--text-on-dark)" : "var(--text-brand)" : onDark ? "var(--text-on-dark-soft)" : "var(--text-body)",
        textDecoration: "none",
        paddingBottom: 2,
        borderBottom: on ? "2px solid " + (onDark ? "var(--text-on-dark)" : "var(--color-primary)") : "2px solid transparent"
      }
    }, lab);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onLang,
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      fontFamily: "var(--font-text)",
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: ".06em",
      color: onDark ? "var(--text-on-dark-soft)" : "var(--text-muted)"
    }
  }, lang), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: onDark ? "outline-on-dark" : "primary",
    onClick: onCta
  }, cta)));
}
Object.assign(__ds_scope, { TopNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactScreen.jsx
try { (() => {
const {
  Card,
  Button,
  Input,
  Select,
  Checkbox,
  Radio,
  Callout,
  Toast,
  Icon,
  Badge
} = window.GrupoGenteNuevaDesignSystem_6cf7e7;
function ContactScreen({
  lang
}) {
  const es = lang === 'es';
  const [mode, setMode] = React.useState('p');
  const [ok, setOk] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Band, {
    tone: "dark",
    pad: "var(--space-16) var(--container-pad) var(--section-y)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: 'var(--space-16)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "aa-overline",
    style: {
      color: 'var(--text-on-dark-soft)',
      marginBottom: 'var(--space-4)'
    }
  }, es ? 'Ayuda ahora' : 'Help now'), /*#__PURE__*/React.createElement("h1", {
    className: "aa-display-xl",
    style: {
      color: 'var(--text-on-dark)'
    }
  }, es ? 'Habla con un miembro del grupo' : 'Talk to a member of the group'), /*#__PURE__*/React.createElement("p", {
    className: "aa-body-lg",
    style: {
      color: 'var(--text-on-dark-soft)',
      maxWidth: '44ch',
      marginTop: 'var(--space-6)'
    }
  }, es ? 'La línea la atiende un miembro del grupo, no un profesional. La llamada es confidencial y no se registra ningún dato.' : 'The line is answered by a member of the group, not a professional. The call is confidential and no data is recorded.'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 18,
      color: "#fff"
    })
  }, "800 000 0000"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline-on-dark",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "message-circle",
      size: 18
    })
  }, es ? 'Escribir al grupo' : 'Write to the group')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      marginTop: 'var(--space-10)',
      flexWrap: 'wrap'
    }
  }, [[es ? 'Atención' : 'Available', '24 h'], [es ? 'Costo' : 'Cost', es ? 'Sin costo' : 'Free'], [es ? 'Idiomas' : 'Languages', 'ES / EN']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("div", {
    className: "aa-overline",
    style: {
      color: 'var(--text-on-dark-soft)'
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    className: "aa-data",
    style: {
      color: 'var(--text-on-dark)',
      marginTop: 6
    }
  }, v))))), /*#__PURE__*/React.createElement(Card, {
    tone: "dark",
    padding: "var(--space-8)",
    elevated: true
  }, /*#__PURE__*/React.createElement("h2", {
    className: "aa-display-sm",
    style: {
      color: 'var(--text-on-dark)',
      marginBottom: 'var(--space-6)'
    }
  }, es ? 'Enviar un mensaje' : 'Send a message'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    onDark: true,
    label: es ? 'Nombre de pila' : 'First name',
    placeholder: es ? 'Solo tu nombre' : 'Your first name only'
  }), /*#__PURE__*/React.createElement(Input, {
    onDark: true,
    label: es ? 'Teléfono o correo' : 'Phone or email',
    placeholder: "800 000 0000"
  }), /*#__PURE__*/React.createElement(Select, {
    onDark: true,
    label: es ? 'Motivo' : 'Reason',
    options: es ? ['Quiero asistir a una reunión', 'Pregunto por un familiar', 'Soy profesional de la salud', 'Otro'] : ['I want to attend a meeting', 'I am asking about a relative', 'I am a health professional', 'Other']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    onDark: true,
    name: "modo",
    label: es ? 'Presencial' : 'In person',
    checked: mode === 'p',
    onChange: () => setMode('p')
  }), /*#__PURE__*/React.createElement(Radio, {
    onDark: true,
    name: "modo",
    label: es ? 'En línea' : 'Online',
    checked: mode === 'o',
    onChange: () => setMode('o')
  })), /*#__PURE__*/React.createElement(Checkbox, {
    onDark: true,
    label: es ? 'Entiendo que el grupo no ofrece tratamiento médico.' : 'I understand the group does not provide medical treatment.',
    checked: ok,
    onChange: () => setOk(!ok)
  }), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    disabled: !ok,
    onClick: () => setSent(true)
  }, es ? 'Enviar' : 'Send'), sent && /*#__PURE__*/React.createElement(Toast, {
    message: es ? 'Mensaje enviado. Te responderemos pronto.' : 'Message sent. We will reply soon.',
    onClose: () => setSent(false)
  }))))), /*#__PURE__*/React.createElement(Band, {
    tone: "canvas",
    pad: "var(--section-y-compact) var(--container-pad)"
  }, /*#__PURE__*/React.createElement(SectionTitle, null, es ? 'Cómo llegar' : 'Finding us'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-6)'
    }
  }, [[es ? 'Dirección' : 'Address', es ? 'Calle de ejemplo 42, colonia Centro. Sustituir por la dirección real del grupo.' : '42 Example Street, city centre. Replace with the group\'s real address.', 'map-pin'], [es ? 'Horario de puerta' : 'Door hours', es ? 'Abrimos 30 minutos antes de cada reunión.' : 'We open 30 minutes before each meeting.', 'clock'], [es ? 'Accesibilidad' : 'Accessibility', es ? 'Planta baja, sin escalones. Sanitarios accesibles.' : 'Ground floor, step-free. Accessible restrooms.', 'accessibility']].map(([t, b, ic]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    padding: "var(--space-8)"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 22,
    color: "var(--text-brand)"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "aa-title-lg",
    style: {
      color: 'var(--text-ink)',
      margin: 'var(--space-4) 0 var(--space-3)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    className: "aa-body-sm",
    style: {
      color: 'var(--text-body)'
    }
  }, b)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Callout, {
    tone: "info",
    title: es ? 'Anonimato' : 'Anonymity',
    action: /*#__PURE__*/React.createElement(Badge, null, es ? 'Tradición 11' : 'Tradition 11')
  }, es ? 'Lo que se dice en la reunión queda en la reunión. No usamos apellidos ni tomamos fotografías.' : 'What is said in the meeting stays in the meeting. We do not use surnames or take photographs.'))));
}
Object.assign(window, {
  ContactScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/EventsScreen.jsx
try { (() => {
const {
  Card,
  Badge,
  Button,
  Icon,
  Tabs
} = window.GrupoGenteNuevaDesignSystem_6cf7e7;
function EventsScreen({
  lang
}) {
  const es = lang === 'es';
  const [view, setView] = React.useState('lista');
  const monthDays = Array.from({
    length: 30
  }, (_, i) => i + 1);
  const marked = {
    5: true,
    12: true,
    19: true,
    26: true
  };
  const fmt = d => {
    const [y, m, dd] = d.split('-');
    const M = (es ? ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'] : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'])[+m - 1];
    return es ? dd + ' de ' + M : M + ' ' + dd;
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Band, {
    tone: "canvas",
    pad: "var(--space-16) var(--container-pad) var(--section-y-compact)"
  }, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: es ? 'Calendario' : 'Calendar',
    title: es ? 'Eventos del grupo' : 'Group events',
    lede: es ? 'Aniversarios, talleres y juntas de servicio. Los eventos abiertos admiten familiares e invitados; los cerrados son para miembros.' : 'Anniversaries, workshops and service meetings. Open events welcome family and guests; closed events are for members.'
  })), /*#__PURE__*/React.createElement(Band, {
    tone: "soft",
    pad: "var(--section-y-compact) var(--container-pad)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: es ? [{
      value: 'lista',
      label: 'Lista'
    }, {
      value: 'mes',
      label: 'Mes'
    }] : [{
      value: 'lista',
      label: 'List'
    }, {
      value: 'mes',
      label: 'Month'
    }],
    value: view,
    onChange: setView
  })), view === 'lista' ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, EVENTS.map(e => /*#__PURE__*/React.createElement(Card, {
    key: e.date,
    padding: "var(--space-6) var(--space-8)",
    style: {
      display: 'grid',
      gridTemplateColumns: '160px 1fr 200px 160px',
      alignItems: 'center',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "aa-data",
    style: {
      color: 'var(--text-brand)'
    }
  }, fmt(e.date)), /*#__PURE__*/React.createElement("div", {
    className: "aa-caption"
  }, e.time)), /*#__PURE__*/React.createElement("div", {
    className: "aa-title-md",
    style: {
      color: 'var(--text-ink)'
    }
  }, e.title[lang]), /*#__PURE__*/React.createElement("div", {
    className: "aa-body-sm",
    style: {
      color: 'var(--text-body)',
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 16,
    color: "var(--text-muted)"
  }), e.place[lang]), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-3)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: e.open ? 'open' : 'closed'
  }, e.open ? es ? 'Abierto' : 'Open' : es ? 'Cerrado' : 'Closed'), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary"
  }, es ? 'Detalles' : 'Details'))))) : /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "aa-display-sm",
    style: {
      color: 'var(--text-ink)'
    }
  }, es ? 'Septiembre de 2026' : 'September 2026'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary"
  }, "\u2039"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary"
  }, "\u203A"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7,1fr)',
      gap: 'var(--space-2)'
    }
  }, DAYS[lang].map(d => /*#__PURE__*/React.createElement("div", {
    key: d,
    className: "aa-overline",
    style: {
      color: 'var(--text-muted)',
      padding: '0 0 8px'
    }
  }, d.slice(0, 3))), monthDays.map(d => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: {
      aspectRatio: '1',
      border: '1px solid var(--border-hairline-soft)',
      borderRadius: 'var(--radius-sm)',
      padding: '8px 10px',
      background: marked[d] ? 'var(--surface-strong)' : 'var(--surface-canvas)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "aa-data",
    style: {
      fontSize: 13,
      color: marked[d] ? 'var(--text-brand)' : 'var(--text-muted)'
    }
  }, d), marked[d] && /*#__PURE__*/React.createElement("div", {
    className: "aa-caption",
    style: {
      color: 'var(--text-brand)',
      fontSize: 11,
      lineHeight: 1.3,
      marginTop: 4
    }
  }, EVENTS.find(e => +e.date.split('-')[2] === d).title[lang])))))), /*#__PURE__*/React.createElement(Band, {
    tone: "dark",
    pad: "var(--section-y) var(--container-pad)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-12)',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "aa-display-lg",
    style: {
      color: 'var(--text-on-dark)',
      maxWidth: '24ch'
    }
  }, es ? 'Si quieres dejar de beber, hay un lugar para ti esta semana.' : 'If you want to stop drinking, there is a place for you this week.'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg"
  }, es ? 'Ver reuniones' : 'See meetings'), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline-on-dark"
  }, es ? 'Llamar a la línea' : 'Call the helpline')))));
}
Object.assign(window, {
  EventsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/EventsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/LiteratureScreen.jsx
try { (() => {
const {
  Card,
  Badge,
  Button,
  Tabs,
  Callout,
  Icon
} = window.GrupoGenteNuevaDesignSystem_6cf7e7;
function LiteratureScreen({
  lang
}) {
  const es = lang === 'es';
  const cats = es ? [{
    value: 'todo',
    label: 'Todo'
  }, {
    value: 'Libro',
    label: 'Libros'
  }, {
    value: 'Folleto',
    label: 'Folletos'
  }, {
    value: 'Diario',
    label: 'Lecturas diarias'
  }] : [{
    value: 'todo',
    label: 'All'
  }, {
    value: 'Libro',
    label: 'Books'
  }, {
    value: 'Folleto',
    label: 'Pamphlets'
  }, {
    value: 'Diario',
    label: 'Daily readings'
  }];
  const [cat, setCat] = React.useState('todo');
  const list = LITERATURE.filter(l => cat === 'todo' || l.kind.es === cat);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Band, {
    tone: "canvas",
    pad: "var(--space-16) var(--container-pad) var(--section-y-compact)"
  }, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: es ? 'Recursos' : 'Resources',
    title: es ? 'Literatura del programa' : 'Programme literature',
    lede: es ? 'El grupo conserva un pequeño acervo para consulta en sala. La literatura aprobada se lee en las mesas de trabajo y puede solicitarse al servidor de literatura.' : 'The group keeps a small collection for reading on site. Approved literature is read in discussion meetings and can be requested from the literature servant.'
  })), /*#__PURE__*/React.createElement(Band, {
    tone: "soft",
    pad: "var(--section-y-compact) var(--container-pad)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: cats,
    value: cat,
    onChange: setCat
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-6)'
    }
  }, list.map(l => /*#__PURE__*/React.createElement(Card, {
    key: l.title.es,
    padding: "var(--space-8)",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      minHeight: 230
    }
  }, /*#__PURE__*/React.createElement(Badge, null, l.kind[lang]), /*#__PURE__*/React.createElement("h3", {
    className: "aa-display-sm",
    style: {
      color: 'var(--text-ink)'
    }
  }, l.title[lang]), /*#__PURE__*/React.createElement("p", {
    className: "aa-body-sm",
    style: {
      color: 'var(--text-body)'
    }
  }, l.note[lang]), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "text"
  }, es ? 'Consultar en sala' : 'Read on site')))))), /*#__PURE__*/React.createElement(Band, {
    tone: "canvas",
    pad: "var(--section-y-compact) var(--container-pad)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: 'var(--space-12)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionTitle, null, es ? 'Los Doce Pasos' : 'The Twelve Steps'), /*#__PURE__*/React.createElement("p", {
    className: "aa-body-md",
    style: {
      maxWidth: 'var(--measure)',
      color: 'var(--text-body)'
    }
  }, es ? 'Los pasos se estudian en orden, uno por reunión, en el ciclo de los martes. Si asistes por primera vez, escucha; nadie está obligado a hablar.' : 'The steps are studied in order, one per meeting, in the Tuesday cycle. If you are attending for the first time, listen; no one is required to speak.'), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, [1, 2, 3, 4].map(n => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      padding: 'var(--space-5) 0',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "aa-data",
    style: {
      color: 'var(--text-brand)'
    }
  }, String(n).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    className: "aa-body-md",
    style: {
      color: 'var(--text-ink)'
    }
  }, es ? 'Texto del paso ' + n + ' (resumen del grupo).' : 'Text of step ' + n + ' (group summary).'))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-hairline)',
      paddingTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline"
  }, es ? 'Ver los doce' : 'See all twelve')))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Callout, {
    tone: "info",
    title: es ? 'Anonimato' : 'Anonymity'
  }, es ? 'No publicamos nombres completos ni fotografías de los miembros.' : 'We do not publish full names or photographs of members.'), /*#__PURE__*/React.createElement(Callout, {
    tone: "note",
    title: es ? 'Sobre este acervo' : 'About this collection'
  }, es ? 'Los títulos listados son de referencia; el grupo no vende literatura en línea.' : 'The titles listed are for reference; the group does not sell literature online.'), /*#__PURE__*/React.createElement(Callout, {
    tone: "quiet",
    title: es ? 'Servidor de literatura' : 'Literature servant'
  }, es ? 'Pregunta en la mesa al final de cualquier reunión.' : 'Ask at the table at the end of any meeting.')))));
}
Object.assign(window, {
  LiteratureScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/LiteratureScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/MeetingsScreen.jsx
try { (() => {
const {
  Button,
  Badge,
  Tag,
  Card,
  Tabs,
  Input,
  Switch,
  Icon,
  Dialog,
  Tooltip
} = window.GrupoGenteNuevaDesignSystem_6cf7e7;
function MeetingRow({
  m,
  lang,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onOpen(m),
    style: {
      width: '100%',
      textAlign: 'left',
      background: 'none',
      border: 'none',
      font: 'inherit',
      display: 'grid',
      gridTemplateColumns: '120px 1fr 220px 150px 40px',
      alignItems: 'center',
      gap: 'var(--space-6)',
      padding: 'var(--space-5) var(--space-2)',
      borderTop: '1px solid var(--border-hairline)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "aa-data",
    style: {
      color: 'var(--text-ink)'
    }
  }, m.time), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "aa-title-md",
    style: {
      color: 'var(--text-ink)'
    }
  }, m.name[lang]), /*#__PURE__*/React.createElement("div", {
    className: "aa-body-sm",
    style: {
      color: 'var(--text-muted)'
    }
  }, m.format[lang], " \xB7 ", m.dur)), /*#__PURE__*/React.createElement("div", {
    className: "aa-body-sm",
    style: {
      color: 'var(--text-body)',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: m.place[lang] === 'En línea' || m.place[lang] === 'Online' ? 'video' : 'map-pin',
    size: 16,
    color: "var(--text-muted)"
  }), m.place[lang]), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: m.open ? 'open' : 'closed'
  }, m.open ? lang === 'es' ? 'Abierta' : 'Open' : lang === 'es' ? 'Cerrada' : 'Closed'), /*#__PURE__*/React.createElement("span", {
    className: "aa-caption",
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, m.lang)), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 18,
    color: "var(--text-muted)"
  }));
}
function MeetingsScreen({
  lang
}) {
  const [day, setDay] = React.useState(0);
  const [online, setOnline] = React.useState(false);
  const [q, setQ] = React.useState('');
  const [sel, setSel] = React.useState(null);
  const es = lang === 'es';
  let list = MEETINGS.filter(m => m.day === day);
  if (online) list = list.filter(m => m.place.es === 'En línea');
  if (q.trim()) list = list.filter(m => (m.name[lang] + m.format[lang]).toLowerCase().includes(q.toLowerCase()));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Band, {
    tone: "dark",
    pad: "var(--space-16) var(--container-pad) var(--space-24)"
  }, /*#__PURE__*/React.createElement(PageHead, {
    onDark: true,
    eyebrow: es ? 'Grupo Gente Nueva' : 'Gente Nueva Group',
    title: es ? 'Reuniones cada día de la semana' : 'Meetings every day of the week',
    lede: es ? 'No hace falta cita, inscripción ni pago. Llega unos minutos antes y pregunta por el servidor de la mesa; si es tu primera vez, dilo al llegar.' : 'No appointment, registration or payment is required. Arrive a few minutes early and ask for the meeting secretary; if it is your first time, say so when you arrive.'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-6)',
      marginTop: 'var(--space-16)'
    }
  }, [[es ? 'Reuniones por semana' : 'Meetings per week', '10'], [es ? 'Puerta abierta desde' : 'Doors open since', '1998'], [es ? 'Costo' : 'Cost', es ? 'Ninguno' : 'None']].map(([k, v]) => /*#__PURE__*/React.createElement(Card, {
    key: k,
    tone: "dark",
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement("div", {
    className: "aa-overline",
    style: {
      color: 'var(--text-on-dark-soft)'
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    className: "aa-display-md",
    style: {
      color: 'var(--text-on-dark)',
      marginTop: 'var(--space-3)'
    }
  }, v))))), /*#__PURE__*/React.createElement(Band, {
    tone: "canvas",
    pad: "var(--section-y-compact) var(--container-pad)"
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    note: es ? 'Horario local. Última actualización: agosto de 2026.' : 'Local time. Last updated: August 2026.'
  }, es ? 'Horario' : 'Schedule'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'center',
      marginBottom: 'var(--space-6)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement(Input, {
    pill: true,
    placeholder: es ? 'Buscar reunión' : 'Search meetings',
    value: q,
    onChange: e => setQ(e.target.value),
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 18,
      color: "var(--text-muted)"
    })
  })), /*#__PURE__*/React.createElement(Switch, {
    label: es ? 'Solo en línea' : 'Online only',
    checked: online,
    onChange: () => setOnline(!online)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      flexWrap: 'wrap',
      marginBottom: 'var(--space-6)'
    }
  }, DAYS[lang].map((d, i) => /*#__PURE__*/React.createElement(Tag, {
    key: d,
    selected: i === day,
    onClick: () => setDay(i)
  }, d))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, list.length ? list.map((m, i) => /*#__PURE__*/React.createElement(MeetingRow, {
    key: i,
    m: m,
    lang: lang,
    onOpen: setSel
  })) : /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-12) 0',
      textAlign: 'center'
    },
    className: "aa-body-md"
  }, es ? 'No hay reuniones que coincidan con el filtro.' : 'No meetings match this filter.'))), /*#__PURE__*/React.createElement(Band, {
    tone: "soft",
    pad: "var(--section-y-compact) var(--container-pad)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-8)"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "aa-display-sm",
    style: {
      color: 'var(--text-ink)'
    }
  }, es ? 'Reunión abierta' : 'Open meeting'), /*#__PURE__*/React.createElement("p", {
    className: "aa-body-md",
    style: {
      marginTop: 'var(--space-3)',
      color: 'var(--text-body)'
    }
  }, es ? 'Cualquier persona puede asistir, incluidos familiares, profesionales y quien tenga curiosidad por el programa.' : 'Anyone may attend, including family members, professionals and anyone curious about the programme.')), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-8)"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "aa-display-sm",
    style: {
      color: 'var(--text-ink)'
    }
  }, es ? 'Reunión cerrada' : 'Closed meeting'), /*#__PURE__*/React.createElement("p", {
    className: "aa-body-md",
    style: {
      marginTop: 'var(--space-3)',
      color: 'var(--text-body)'
    }
  }, es ? 'Reservada a quienes tienen un problema con la bebida y desean dejar de beber.' : 'Reserved for those who have a drinking problem and wish to stop drinking.')))), /*#__PURE__*/React.createElement(Dialog, {
    open: !!sel,
    onClose: () => setSel(null),
    title: sel ? sel.name[lang] : '',
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => setSel(null)
    }, es ? 'Cerrar' : 'Close'), /*#__PURE__*/React.createElement(Button, {
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "map-pin",
        size: 18,
        color: "#fff"
      })
    }, es ? 'Cómo llegar' : 'Directions'))
  }, sel && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "aa-data",
    style: {
      color: 'var(--text-ink)'
    }
  }, DAYS[lang][sel.day], " \xB7 ", sel.time, " \xB7 ", sel.dur), /*#__PURE__*/React.createElement("div", {
    className: "aa-body-md"
  }, sel.format[lang], " \xB7 ", sel.place[lang]), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: sel.open ? 'open' : 'closed'
  }, sel.open ? es ? 'Abierta' : 'Open' : es ? 'Cerrada' : 'Closed'), /*#__PURE__*/React.createElement(Badge, null, sel.lang)), /*#__PURE__*/React.createElement("p", {
    className: "aa-body-sm",
    style: {
      color: 'var(--text-muted)'
    }
  }, es ? 'Dirección de ejemplo · sustituir por la del grupo.' : 'Sample address · replace with the group\'s own.'))));
}
Object.assign(window, {
  MeetingsScreen,
  MeetingRow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/MeetingsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shell.jsx
try { (() => {
const {
  TopNav,
  Footer,
  Button,
  Badge,
  Logo,
  Icon,
  Card
} = window.GrupoGenteNuevaDesignSystem_6cf7e7;
const LOGO = '../../assets/logo-mark.png';
function Shell({
  lang,
  setLang,
  route,
  go,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-canvas)'
    }
  }, /*#__PURE__*/React.createElement(TopNav, {
    links: T.nav[lang],
    active: route,
    onNavigate: go,
    logoSrc: LOGO,
    cta: T.cta[lang],
    onCta: () => go('contacto'),
    lang: lang.toUpperCase(),
    onLang: () => setLang(lang === 'es' ? 'en' : 'es')
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1
    }
  }, children), /*#__PURE__*/React.createElement(Footer, {
    logoSrc: LOGO,
    helpline: T.helpline[lang],
    columns: T.footerCols[lang],
    legal: T.legal[lang]
  }));
}
function Band({
  tone = 'canvas',
  children,
  pad = 'var(--section-y) var(--container-pad)',
  style
}) {
  const bg = {
    canvas: 'var(--surface-canvas)',
    soft: 'var(--surface-soft)',
    dark: 'var(--surface-dark)'
  }[tone];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: bg,
      padding: pad,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, children));
}
function PageHead({
  eyebrow,
  title,
  lede,
  onDark = false,
  aside
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-16)',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '22ch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "aa-overline",
    style: {
      color: onDark ? 'var(--text-on-dark-soft)' : 'var(--text-muted)',
      marginBottom: 'var(--space-4)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    className: "aa-display-xl",
    style: {
      color: onDark ? 'var(--text-on-dark)' : 'var(--text-ink)'
    }
  }, title)), lede && /*#__PURE__*/React.createElement("p", {
    className: "aa-body-lg",
    style: {
      maxWidth: '42ch',
      color: onDark ? 'var(--text-on-dark-soft)' : 'var(--text-body)'
    }
  }, lede), aside);
}
function SectionTitle({
  children,
  note
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 'var(--space-6)',
      marginBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "aa-display-md",
    style: {
      color: 'var(--text-ink)'
    }
  }, children), note && /*#__PURE__*/React.createElement("span", {
    className: "aa-caption"
  }, note));
}
Object.assign(window, {
  Shell,
  Band,
  PageHead,
  SectionTitle,
  LOGO
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
// Sample content for the Grupo Gente Nueva site kit.
// Times, addresses and phone numbers are PLACEHOLDERS — replace with the group's real data.
const T = {
  nav: {
    es: [{
      value: 'reuniones',
      label: 'Reuniones'
    }, {
      value: 'literatura',
      label: 'Literatura'
    }, {
      value: 'eventos',
      label: 'Eventos'
    }, {
      value: 'contacto',
      label: 'Contacto'
    }],
    en: [{
      value: 'reuniones',
      label: 'Meetings'
    }, {
      value: 'literatura',
      label: 'Literature'
    }, {
      value: 'eventos',
      label: 'Events'
    }, {
      value: 'contacto',
      label: 'Contact'
    }]
  },
  cta: {
    es: 'Necesito ayuda',
    en: 'I need help'
  },
  helpline: {
    es: 'Línea de ayuda 24 horas · 800 000 0000',
    en: '24-hour helpline · 800 000 0000'
  },
  legal: {
    es: 'Grupo Gente Nueva · Alcohólicos Anónimos. Contenido informativo del grupo; no representa a A.A. en su conjunto.',
    en: 'Grupo Gente Nueva · Alcoholics Anonymous. Group information only; it does not speak for A.A. as a whole.'
  },
  footerCols: {
    es: [{
      title: 'Reuniones',
      links: ['Horarios', 'Ubicaciones', 'Reuniones en línea']
    }, {
      title: 'Recursos',
      links: ['Literatura', 'Doce Pasos', 'Doce Tradiciones']
    }, {
      title: 'El grupo',
      links: ['Quiénes somos', 'Servicio', 'Contacto']
    }],
    en: [{
      title: 'Meetings',
      links: ['Schedule', 'Locations', 'Online meetings']
    }, {
      title: 'Resources',
      links: ['Literature', 'Twelve Steps', 'Twelve Traditions']
    }, {
      title: 'The group',
      links: ['About us', 'Service', 'Contact']
    }]
  }
};
const DAYS = {
  es: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
  en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
};
const MEETINGS = [{
  day: 0,
  time: '07:00',
  dur: '60 min',
  name: {
    es: 'Despertar',
    en: 'Wake-up'
  },
  format: {
    es: 'Reflexión del día',
    en: 'Daily reflection'
  },
  place: {
    es: 'Salón principal',
    en: 'Main room'
  },
  open: true,
  lang: 'ES'
}, {
  day: 0,
  time: '19:00',
  dur: '90 min',
  name: {
    es: 'Gente Nueva',
    en: 'Gente Nueva'
  },
  format: {
    es: 'Tribuna',
    en: 'Speaker'
  },
  place: {
    es: 'Salón principal',
    en: 'Main room'
  },
  open: true,
  lang: 'ES'
}, {
  day: 1,
  time: '19:00',
  dur: '90 min',
  name: {
    es: 'Doce Pasos',
    en: 'Twelve Steps'
  },
  format: {
    es: 'Estudio de pasos',
    en: 'Step study'
  },
  place: {
    es: 'Salón principal',
    en: 'Main room'
  },
  open: false,
  lang: 'ES'
}, {
  day: 2,
  time: '12:30',
  dur: '60 min',
  name: {
    es: 'Mediodía',
    en: 'Midday'
  },
  format: {
    es: 'Mesa de trabajo',
    en: 'Discussion'
  },
  place: {
    es: 'Sala 2',
    en: 'Room 2'
  },
  open: true,
  lang: 'ES'
}, {
  day: 2,
  time: '19:00',
  dur: '90 min',
  name: {
    es: 'Tradiciones',
    en: 'Traditions'
  },
  format: {
    es: 'Estudio de tradiciones',
    en: 'Tradition study'
  },
  place: {
    es: 'Salón principal',
    en: 'Main room'
  },
  open: true,
  lang: 'ES'
}, {
  day: 3,
  time: '19:00',
  dur: '90 min',
  name: {
    es: 'Puertas Abiertas',
    en: 'Open Doors'
  },
  format: {
    es: 'Reunión abierta',
    en: 'Open meeting'
  },
  place: {
    es: 'Salón principal',
    en: 'Main room'
  },
  open: true,
  lang: 'ES / EN'
}, {
  day: 4,
  time: '19:00',
  dur: '90 min',
  name: {
    es: 'Fin de semana',
    en: 'Weekend'
  },
  format: {
    es: 'Tribuna',
    en: 'Speaker'
  },
  place: {
    es: 'Salón principal',
    en: 'Main room'
  },
  open: true,
  lang: 'ES'
}, {
  day: 4,
  time: '21:00',
  dur: '60 min',
  name: {
    es: 'En línea',
    en: 'Online'
  },
  format: {
    es: 'Videollamada',
    en: 'Video call'
  },
  place: {
    es: 'En línea',
    en: 'Online'
  },
  open: true,
  lang: 'ES'
}, {
  day: 5,
  time: '10:00',
  dur: '90 min',
  name: {
    es: 'Servicio',
    en: 'Service'
  },
  format: {
    es: 'Junta de servicio',
    en: 'Service meeting'
  },
  place: {
    es: 'Sala 2',
    en: 'Room 2'
  },
  open: false,
  lang: 'ES'
}, {
  day: 6,
  time: '11:00',
  dur: '90 min',
  name: {
    es: 'Domingo',
    en: 'Sunday'
  },
  format: {
    es: 'Mesa de trabajo',
    en: 'Discussion'
  },
  place: {
    es: 'Salón principal',
    en: 'Main room'
  },
  open: true,
  lang: 'ES'
}];
const LITERATURE = [{
  kind: {
    es: 'Libro',
    en: 'Book'
  },
  title: {
    es: 'Alcohólicos Anónimos',
    en: 'Alcoholics Anonymous'
  },
  note: {
    es: 'El Libro Grande. Texto básico del programa.',
    en: 'The Big Book. Basic text of the programme.'
  }
}, {
  kind: {
    es: 'Libro',
    en: 'Book'
  },
  title: {
    es: 'Doce Pasos y Doce Tradiciones',
    en: 'Twelve Steps and Twelve Traditions'
  },
  note: {
    es: 'Estudio de los pasos y las tradiciones.',
    en: 'Study of the steps and traditions.'
  }
}, {
  kind: {
    es: 'Diario',
    en: 'Daily'
  },
  title: {
    es: 'Reflexiones diarias',
    en: 'Daily Reflections'
  },
  note: {
    es: 'Una lectura breve para cada día del año.',
    en: 'A short reading for each day of the year.'
  }
}, {
  kind: {
    es: 'Folleto',
    en: 'Pamphlet'
  },
  title: {
    es: '¿Es A.A. para usted?',
    en: 'Is A.A. For You?'
  },
  note: {
    es: 'Doce preguntas para responder a solas.',
    en: 'Twelve questions to answer alone.'
  }
}, {
  kind: {
    es: 'Folleto',
    en: 'Pamphlet'
  },
  title: {
    es: 'Preguntas frecuentes sobre A.A.',
    en: 'Frequently Asked Questions About A.A.'
  },
  note: {
    es: 'Qué hace y qué no hace el grupo.',
    en: 'What the group does and does not do.'
  }
}, {
  kind: {
    es: 'Folleto',
    en: 'Pamphlet'
  },
  title: {
    es: 'A.A. para la mujer',
    en: 'A.A. for the Woman'
  },
  note: {
    es: 'Experiencia compartida de mujeres del programa.',
    en: 'Shared experience of women in the programme.'
  }
}];
const EVENTS = [{
  date: '2026-09-05',
  time: '18:00',
  title: {
    es: 'Aniversario del grupo',
    en: 'Group anniversary'
  },
  place: {
    es: 'Salón principal',
    en: 'Main room'
  },
  open: true
}, {
  date: '2026-09-12',
  time: '10:00',
  title: {
    es: 'Taller de Doce Pasos',
    en: 'Twelve Steps workshop'
  },
  place: {
    es: 'Sala 2',
    en: 'Room 2'
  },
  open: false
}, {
  date: '2026-09-19',
  time: '17:00',
  title: {
    es: 'Reunión de información pública',
    en: 'Public information meeting'
  },
  place: {
    es: 'Salón principal',
    en: 'Main room'
  },
  open: true
}, {
  date: '2026-09-26',
  time: '09:00',
  title: {
    es: 'Junta distrital de servicio',
    en: 'District service meeting'
  },
  place: {
    es: 'Sala 2',
    en: 'Room 2'
  },
  open: false
}];
Object.assign(window, {
  T,
  DAYS,
  MEETINGS,
  LITERATURE,
  EVENTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.TopNav = __ds_scope.TopNav;

})();
