import { NextResponse } from "next/server"; // Добавьте этот импорт
import { auth } from "@/lib/auth";

export default auth((req) => {
  if (!req.auth) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url); // Теперь NextResponse определен
  }
  return NextResponse.next();
});

export const config = {
  matcher: ["/dashboard/:path*"],
};
