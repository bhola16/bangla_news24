import { headers } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { auth } from "./lib/auth";

export async function proxy(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // User is not logged in
  if (!session) {
    const signInUrl = new URL("/signin", request.url);

    signInUrl.searchParams.set("callbackUrl", request.nextUrl.pathname);

    return NextResponse.redirect(signInUrl);
  }

  //   console.log(session);

  // User is logged in
  return NextResponse.next();
}

export const config = {
  matcher: ["/profile", "/news/:path"],
};
