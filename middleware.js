import { NextResponse } from "next/server";

export default function middleware(request) {
    console.log("Middleware executed:", request.nextUrl.pathname);
    return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
    matcher: "/about/:path*", 
};
