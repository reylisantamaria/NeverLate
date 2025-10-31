/**
 * SERVER COMPONENT SUPABASE CLIENT
 * 
 * Use this in:
 * - Server Components (default in Next.js App Router)
 * - Route Handlers (app/api/-/route.ts)
 * - Server Actions
 * 
 * This client reads from cookies but CANNOT write cookies.
 * Cookie writes are handled by middleware (proxy.ts).
 * 
 * ⚠️ SECURITY: Always use supabase.auth.getUser() to verify users
 * Never use supabase.auth.getSession() on the server (can be spoofed)
 * 
 * Example usage:
 *   const supabase = await createClient()
 *   const { data: { user } } = await supabase.auth.getUser()
 */

import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  )
}
