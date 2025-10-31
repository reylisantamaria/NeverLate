/**
 * CLIENT COMPONENT SUPABASE CLIENT
 * 
 * Use this in Client Components (components with 'use client' directive)
 * that run in the browser.
 * 
 * Common use cases:
 * - User sign in/sign up forms
 * - Client-side auth state management
 * - User-initiated actions
 * 
 * Example usage:
 *   const supabase = createClient()
 *   await supabase.auth.signInWithPassword({ email, password })
 */

import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
  )
}