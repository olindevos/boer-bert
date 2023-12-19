import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const response = await fetch('http://localhost:4000/api/auth/user', {
    headers: { Cookie: cookies().toString() },
  });

  const user = await response.json();

  const encodedOrigin = encodeURIComponent(req.url);

  // If the user is not logged in, redirect to login
  if (response.status !== 200) {
    return NextResponse.redirect(new URL(`/login?redirect_url=${encodedOrigin}`, req.url));
  }

  // If the user is not an admin and is trying to access a dashboard page, redirect to a different page
  if (user.role !== 'admin' && pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/?error=403', req.url));
  }
}

export const config = {
  matcher: ['/dashboard/:path*', '/account/:path*'],
};
