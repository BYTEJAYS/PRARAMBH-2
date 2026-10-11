import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "PRARAMBH GROUP — Real estate developers in Vadodara";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default async function OpenGraphImage() {
  const logo = await readFile(join(process.cwd(), "public/assets/logo.png"));
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", padding: "52px 72px", background: "#092a26", color: "#f8f5ef", fontFamily: "sans-serif", borderBottom: "12px solid #c9aa70" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* The supplied company logo is preserved in the generated sharing card. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`data:image/png;base64,${logo.toString("base64")}`} width={180} height={130} alt="" />
        <span style={{ fontSize: 22, color: "#c9aa70" }}>VADODARA, GUJARAT</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <span style={{ fontSize: 60, fontWeight: 700 }}>Spaces for generations.</span>
        <span style={{ fontSize: 30, color: "#dbc8a4" }}>3 BHK duplex homes & mixed-use developments</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22 }}>
        <span>PRARAMBH GROUP</span><span>www.prarambhgroups.in</span>
      </div>
    </div>,
    size,
  );
}
