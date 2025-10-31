'use client'

import { useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/utils/supabase/client'
import AuthLayout from '../../../components/auth/AuthLayout'
import AuthInput from '../../../components/auth/AuthInput'
import AuthMessage from '../../../components/auth/AuthMessage'
import AuthButton from '../../../components/auth/AuthButton'

export default function SignUpPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState<'error' | 'success'>('error')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage('')
    setLoading(true)

    const supabase = createClient()

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      })
      if (error) throw error
      
      setMessageType('success')
      setMessage('Check your email to confirm your account!')
    } catch (err: any) {
      setMessageType('error')
      setMessage(err.message || 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthLayout>
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">
          Create Account
        </h1>
        <p className="text-gray-400">
          Sign up to get started
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

        {message && <AuthMessage message={message} type={messageType} />}

        <AuthButton loading={loading}>
          Sign Up
        </AuthButton>
      </form>

      {/* Toggle to Sign In */}
      <div className="mt-6 text-center">
        <p className="text-gray-400 text-sm">
          Already have an account?{' '}
          <Link 
            href="/auth/signin" 
            className="font-semibold text-blue-500 hover:text-blue-400 transition-colors"
          >
            Sign In
          </Link>
        </p>
      </div>
    </AuthLayout>
  )
}
