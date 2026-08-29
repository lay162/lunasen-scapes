import { ImageResponse } from "next/og";

export const alt = "LUNA SEN-Scapes — SEN playgrounds, sensory spaces and groundworks, Wirral and North West";
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
            fontSize: 22,
            fontWeight: 800,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#ff69b4",
          }}
        >
          LUNA SEN GROUP
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 16,
            fontSize: 128,
            fontWeight: 900,
            letterSpacing: -8,
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
            marginTop: 8,
            fontSize: 48,
            fontWeight: 800,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          SEN-Scapes
        </div>
        <div style={{ display: "flex", marginTop: 36, fontSize: 28, color: "#7ad7f0" }}>
          SEN spaces · groundworks · North West
        </div>
        <div style={{ display: "flex", marginTop: 12, fontSize: 22, color: "rgba(255,255,255,0.55)" }}>
          Wirral · Liverpool · Cheshire · North Wales
        </div>
      </div>
    ),
    { ...size },
  );
}
