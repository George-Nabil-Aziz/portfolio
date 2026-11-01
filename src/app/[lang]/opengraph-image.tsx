import { ImageResponse } from "next/og";
import { locales } from "@/i18n";
import { profile, stats } from "@/content/site";

export const alt = "George Nabil Aziz — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

// The link-preview card is English-only: next/og ships no Arabic font.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#09090b",
          color: "#f4f4f5",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 72,
            height: 72,
            borderRadius: 16,
            background: "#34d399",
            color: "#09090b",
            fontSize: 32,
            fontWeight: 700,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {profile.initials}
        </div>
        <div style={{ fontSize: 76, fontWeight: 700, marginTop: 40 }}>{profile.name.en}</div>
        <div style={{ fontSize: 40, color: "#34d399", marginTop: 8 }}>{profile.role.en}</div>
        <div style={{ display: "flex", gap: 48, marginTop: 56, fontSize: 26, color: "#a1a1aa" }}>
          {stats.slice(0, 3).map((s) => (
            <div key={s.label.en} style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 44, color: "#f4f4f5", fontWeight: 700 }}>
                {s.value.toLocaleString("en-US")}
                {s.suffix}
              </span>
              <span>{s.label.en}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
