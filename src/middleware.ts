import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const MAIN_HOST = "lunasen-scapes.co.uk";

function shouldSendToMain(host: string) {
  const name = host.split(":")[0]?.toLowerCase() ?? "";
  return (
    name === "lunasenscapes.com" ||
    name === "www.lunasenscapes.com" ||
    name === "lunasen-scapes.com" ||
    name === "www.lunasen-scapes.com" ||
    name === "www.lunasen-scapes.co.uk"
  );
}

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  if (!shouldSendToMain(host)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.protocol = "https:";
  url.hostname = MAIN_HOST;
  url.port = "";
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
