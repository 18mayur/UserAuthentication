
import { NextResponse } from "next/server";
import { decrypt } from "./lib/encryption/encrypt";

export default async function proxy(req) {
  const path = req.nextUrl.pathname;
  const token = req.cookies.get("session")?.value;

  let session = null;

  if (token) {
    try {
      session = await decrypt(token);
    } catch {
      session = null;
    }
  }

  const isPublicRoute = path === "/" || path === "/login";
  const isAdminRoute = path === "/admin" || path.startsWith("/admin/");

  const userRole = session?.role;
  console.log("role:", userRole);
  console.log("session :- ", session);
  // console.log("req ", req.url);
  if (!session && !isPublicRoute) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

 if (session && isPublicRoute) {
    return NextResponse.redirect(
      new URL(userRole === "admin" ? "/admin" : "/home", req.url)
    );
  }

  if (session && userRole === "user" && isAdminRoute) {
    return NextResponse.redirect(new URL("/home", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
