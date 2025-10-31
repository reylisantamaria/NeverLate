import { redirect } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/utils/supabase/server'

export default async function DashboardPage() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/auth/signin')
  }

  const handleSignOut = async () => {
    'use server'
    const supabase = await createClient()
    await supabase.auth.signOut()
    redirect('/auth/signin')
  }

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-semibold">NeverLate</Link>
          <form action={handleSignOut}>
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors"
            >
              Sign Out
            </button>
          </form>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
          <p className="text-gray-400">Welcome back, {data.user.email}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg bg-gray-800 border border-gray-700">
            <h3 className="text-xl font-semibold mb-2">Routes</h3>
            <p className="text-gray-400">Track and manage your routes</p>
          </div>

          <div className="p-6 rounded-lg bg-gray-800 border border-gray-700">
            <h3 className="text-xl font-semibold mb-2">Predictions</h3>
            <p className="text-gray-400">View AI-powered departure times</p>
          </div>

          <div className="p-6 rounded-lg bg-gray-800 border border-gray-700">
            <h3 className="text-xl font-semibold mb-2">Reminders</h3>
            <p className="text-gray-400">Manage your smart reminders</p>
          </div>
        </div>
      </div>
    </main>
  )
}