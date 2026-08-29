import { ImageResponse } from "next/og";

export const alt = "LUNA SEN Scapes — SEN playgrounds and sensory spaces, Wirral and North West";
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
          justifyContent: "space-between",
          background: "#000000",
          color: "white",
          padding: "64px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 800,
            letterSpacing: 6,
            textTransform: "uppercase",
            backgroundImage: "linear-gradient(135deg, #ff69b4, #7ad7f0)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          LUNA SEN SCAPES
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 64, fontWeight: 900, lineHeight: 1.1, maxWidth: 900 }}>
            SEN playgrounds, sensory spaces and safe ground.
          </div>
          <div style={{ marginTop: 24, fontSize: 28, color: "#7ad7f0" }}>
            Wirral · Liverpool · Cheshire · North Wales
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
