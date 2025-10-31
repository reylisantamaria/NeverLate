import Link from 'next/link'
import { createClient } from '@/utils/supabase/server'

export default async function HomePage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-semibold">NeverLate</div>
          {user ? (
            <Link 
              href="/dashboard"
              className="px-6 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors"
            >
              Dashboard
            </Link>
          ) : (
            <div className="flex gap-3 items-center">
              <Link 
                href="/auth/signin" 
                className="px-5 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
              >
                Sign In
              </Link>
              <Link 
                href="/auth/signup"
                className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-20 text-center">
        <div className="mb-8">
          <h1 className="text-7xl md:text-9xl font-bold mb-6">
            Never Be Late
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
            Smart route tracking with AI-powered predictions. Arrive on time, every time.
          </p>
        </div>

        {user ? (
          <div className="space-y-6 mt-12">
            <div className="inline-block px-6 py-2 rounded-lg bg-gray-800 border border-gray-700">
              <p className="text-sm text-gray-400">Welcome back, {user.email}</p>
            </div>
            <div>
              <Link 
                href="/dashboard"
                className="inline-block px-10 py-4 rounded-lg bg-white text-black font-medium hover:bg-gray-100 transition-colors"
              >
                Go to Dashboard
              </Link>
            </div>
          </div>
        ) : (
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/auth/signup"
              className="inline-block px-10 py-4 rounded-lg bg-white text-black font-medium hover:bg-gray-100 transition-colors"
            >
              Get Started
            </Link>
            <Link 
              href="/auth/signin"
              className="inline-block px-10 py-4 rounded-lg bg-gray-700 text-white font-medium hover:bg-gray-600 transition-colors"
            >
              Sign In
            </Link>
          </div>
        )}
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-10 rounded-lg bg-gray-800 border border-gray-700">
            <h3 className="text-2xl font-semibold mb-4">Track Routes</h3>
            <p className="text-gray-400 text-lg">
              Monitor your commutes and build a complete travel history
            </p>
          </div>
          
          <div className="p-10 rounded-lg bg-gray-800 border border-gray-700">
            <h3 className="text-2xl font-semibold mb-4">Smart Predictions</h3>
            <p className="text-gray-400 text-lg">
              AI analyzes traffic, weather, and your habits to predict departure times
            </p>
          </div>
          
          <div className="p-10 rounded-lg bg-gray-800 border border-gray-700">
            <h3 className="text-2xl font-semibold mb-4">Smart Reminders</h3>
            <p className="text-gray-400 text-lg">
              Get notified at the perfect moment based on real-time conditions
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 py-8 bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm">© 2025 NeverLate. Never be late again.</p>
        </div>
      </footer>
    </main>
  )
}