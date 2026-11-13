import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "radial-gradient(circle at 82% 45%, rgba(126,34,206,0.45), rgba(8,8,13,0) 55%), #08080d",
          color: "#f5f5f7",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 26, color: "#92929d" }}>
          <div style={{ width: 14, height: 14, borderRadius: 999, background: "#a855f7" }} />
          {site.availability}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 150, fontWeight: 600, letterSpacing: -7, lineHeight: 1 }}>{site.name}</div>
          <div style={{ fontSize: 60, color: "#c9a8ff", fontStyle: "italic", marginTop: 12 }}>{site.role}</div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#92929d" }}>
          React · Next.js · Node.js · Django · MongoDB · PostgreSQL — {site.location}
        </div>
      </div>
    ),
    size,
  );
}
