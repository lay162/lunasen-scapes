import { ImageResponse } from "next/og";

export const alt = "LUNA SEN-Scapes — disabled garden makeovers, playgrounds and groundworks across the UK";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
          color: "white",
          padding: "64px",
          fontFamily: "sans-serif",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "baseline",
            justifyContent: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 900,
              letterSpacing: -4,
              lineHeight: 1,
              backgroundImage: "linear-gradient(135deg, #ff69b4, #7ad7f0)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            LUNA
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 800,
              letterSpacing: -1,
              lineHeight: 1,
              color: "white",
            }}
          >
            SEN-Scapes
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 36, fontSize: 28, color: "#7ad7f0" }}>
          SEN spaces · groundworks · UK wide
        </div>
        <div style={{ display: "flex", marginTop: 12, fontSize: 22, color: "rgba(255,255,255,0.55)" }}>
          Wirral base · United Kingdom
        </div>
      </div>
    ),
    { ...size },
  );
}
