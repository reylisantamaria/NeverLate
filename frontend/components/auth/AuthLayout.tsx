import Link from 'next/link'

interface AuthLayoutProps {
  children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      {/* Back to home link */}
      <Link 
        href="/" 
        className="absolute top-8 left-8 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 hover:bg-gray-700 transition-colors"
      >
        ← Back
      </Link>

      {/* Content */}
      <div className="w-full max-w-md mx-4">
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-10">
          {children}
        </div>
      </div>
    </main>
  )
}

