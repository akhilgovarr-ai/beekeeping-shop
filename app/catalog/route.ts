import { NextResponse } from "next/server";
export function GET(request: Request) {
  const url = new URL(request.url);
  const locale = url.searchParams.get("locale") === "en" ? "en" : "ru";
  return NextResponse.redirect(new URL(`/${locale}/catalogue`, url));
}
