import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname === "/emails") {
    return NextResponse.redirect(new URL("/emails/inbox", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/emails"], 
};