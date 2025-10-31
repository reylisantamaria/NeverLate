interface AuthButtonProps {
  loading: boolean
  loadingText?: string
  children: React.ReactNode
}

export default function AuthButton({ 
  loading, 
  loadingText = 'Please wait...', 
  children 
}: AuthButtonProps) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="w-full px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors"
    >
      {loading ? loadingText : children}
    </button>
  )
}

