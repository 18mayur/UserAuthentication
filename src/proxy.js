// // import cookies  from "next/headers";
// import { NextResponse } from "next/server";
// import { decrypt } from "./lib/encryption/encrypt";

// const protectedRoute = ["/home"];
// const publicRoute = ["/login", "/"];

// export default async function proxy(req) {
//   const path = req.nextUrl.pathname;
//   const isProtectedRoute = protectedRoute.includes(path);
//   const isPublicRoute = publicRoute.includes(path);

//   //   const cookie = (await cookies()).get("session")?.value;
//   const cookie = req.cookies.get("session")?.value;
//   console.log("cookie", cookie);
//   //   const session = await decrypt(cookie);
//   let session = null;
//   // console.log("session data ", session);
//   if (cookie) {
//     try {
//       session = await decrypt(cookie);
//       console.log("session new", session?.userData);
//     } catch {
//       session = null;
//     }
//   }

//   // 1. Block unauthenticated access to protected routes
//   if (isProtectedRoute && !session?.userId) {
//     return NextResponse.redirect(new URL("/home", req.url));
//   }

//   // 6. Redirect to /dashboard if the user is authenticated
//   if (isPublicRoute && session?.userId && !path.startsWith("/")) {
//     return NextResponse.redirect(new URL("/home", req.url));
//   }

//   return NextResponse.next();
// }
// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
// };

import { NextResponse } from "next/server";
import { decrypt } from "./lib/encryption/encrypt";

// const protectedRoute = ["/home"];
// const publicRoute = ["/login", "/"];
export default async function proxy(req) {
  const path = req.nextUrl.pathname;
  const token = req.cookies.get("session")?.value;

  let isAuthenticated = false;

  if (token) {
    try {
      await decrypt(token); 
      isAuthenticated = true;
    } catch {
      isAuthenticated = false;
    }
  }

  const isProtectedRoute = path.startsWith("/home");
  const isPublicRoute = path === "/" || path === "/login";

  if (isProtectedRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (isPublicRoute && isAuthenticated) {
    return NextResponse.redirect(new URL("/home", req.url));
  }

  return NextResponse.next();
}
