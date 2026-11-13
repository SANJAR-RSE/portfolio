/**
 * Static stand-in for the 3D core: same silhouette (faceted core inside
 * three rings), drawn with SVG. Shown while three.js loads and kept when
 * WebGL is unavailable.
 */
export default function CoreFallback() {
  return (
    <svg viewBox="0 0 400 400" className="size-full" role="presentation">
      <defs>
        <radialGradient id="core-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="0.28" />
          <stop offset="70%" stopColor="#7e22ce" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#08080d" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="core-metal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3a3448" />
          <stop offset="45%" stopColor="#15131c" />
          <stop offset="100%" stopColor="#2a2238" />
        </linearGradient>
        <linearGradient id="core-chrome" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#c4a1ff" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <circle cx="200" cy="200" r="190" fill="url(#core-glow)" />
      <g fill="none" stroke="url(#core-chrome)">
        <ellipse cx="200" cy="200" rx="150" ry="46" strokeWidth="3" transform="rotate(-18 200 200)" />
        <ellipse cx="200" cy="200" rx="168" ry="70" strokeWidth="2" transform="rotate(58 200 200)" stroke="#b98cff" strokeOpacity="0.55" />
        <ellipse cx="200" cy="200" rx="186" ry="94" strokeWidth="1.2" transform="rotate(-62 200 200)" />
      </g>
      <polygon
        points="200,108 280,154 280,246 200,292 120,246 120,154"
        fill="url(#core-metal)"
        stroke="#c4a1ff"
        strokeOpacity="0.25"
      />
      <g stroke="#c4a1ff" strokeOpacity="0.18" fill="none">
        <path d="M200 108 L200 200 L280 154 M200 200 L120 154 M200 200 L200 292 M200 200 L280 246 M200 200 L120 246" />
      </g>
    </svg>
  );
}
