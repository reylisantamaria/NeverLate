'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/utils/supabase/client'
import AuthLayout from '../../../components/auth/AuthLayout'
import AuthInput from '../../../components/auth/AuthInput'
import AuthMessage from '../../../components/auth/AuthMessage'
import AuthButton from '../../../components/auth/AuthButton'

export default function SignInPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const supabase = createClient()

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) throw error
      
      router.push('/dashboard')
      router.refresh()
    } catch (err: any) {
      setError(err.message || 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthLayout>
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">
          Welcome Back
        </h1>
        <p className="text-gray-400">
          Sign in to continue
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <AuthInput
          id="email"
          name="email"
          type="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
        />

        <AuthInput
          id="password"
          name="password"
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          required
          minLength={6}
        />

        {error && <AuthMessage message={error} type="error" />}

        <AuthButton loading={loading}>
          Sign In
        </AuthButton>
      </form>

      {/* Toggle to Sign Up */}
      <div className="mt-6 text-center">
        <p className="text-gray-400 text-sm">
          Don't have an account?{' '}
          <Link 
            href="/auth/signup" 
            className="font-semibold text-blue-500 hover:text-blue-400 transition-colors"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </AuthLayout>
  )
}
