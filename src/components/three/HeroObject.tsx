"use client";

import { useEffect, useRef, useState } from "react";
import CoreFallback from "./CoreFallback";

type Status = "loading" | "ready" | "fallback";

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") ?? canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

/**
 * Lazy hero object. The static fallback renders immediately (and stays if
 * WebGL is unavailable or fails); three.js is code-split and only fetched
 * once the browser is idle, so it never blocks first paint.
 */
export default function HeroObject() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let dispose: (() => void) | undefined;
    let cancelled = false;

    const boot = async () => {
      if (!supportsWebGL()) {
        setStatus("fallback");
        return;
      }
      try {
        const { createCoreScene } = await import("./core-scene");
        if (cancelled) return;
        const lite =
          window.matchMedia("(max-width: 767px)").matches ||
          (navigator.hardwareConcurrency ?? 8) <= 4;
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        dispose = createCoreScene(canvas, { lite, reducedMotion });
        setStatus("ready");
      } catch {
        setStatus("fallback");
      }
    };

    const idle = window.requestIdleCallback
      ? window.requestIdleCallback(() => void boot(), { timeout: 1200 })
      : window.setTimeout(() => void boot(), 200);

    const onContextLost = (event: Event) => {
      event.preventDefault();
      setStatus("fallback");
    };
    canvas.addEventListener("webglcontextlost", onContextLost);

    return () => {
      cancelled = true;
      if (window.cancelIdleCallback) window.cancelIdleCallback(idle);
      else window.clearTimeout(idle);
      canvas.removeEventListener("webglcontextlost", onContextLost);
      dispose?.();
    };
  }, []);

  return (
    <div className="relative size-full" aria-hidden="true">
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          status === "ready" ? "opacity-0" : "opacity-100"
        }`}
      >
        <CoreFallback />
      </div>
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 size-full transition-opacity duration-1000 ${
          status === "ready" ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
