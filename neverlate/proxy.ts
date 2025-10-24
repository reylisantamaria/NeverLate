/**
 * MIDDLEWARE ENTRY POINT (Next.js 15+)
 * 
 * This file is the entry point for Next.js middleware.
 * It intercepts ALL requests before they reach your pages/routes.
 * 
 * What happens here:
 * 1. Every incoming request passes through this middleware
 * 2. We call updateSession() which handles:
 *    - Auth token refresh
 *    - Route protection
 *    - Cookie management
 * 3. The response is returned (potentially modified or redirected)
 * 
 * The matcher config below determines which routes this middleware applies to.
 */

import { type NextRequest } from 'next/server'
import { updateSession } from '@/app/utils/supabase/proxy'

export async function proxy(request: NextRequest) {
  return await updateSession(request)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}

