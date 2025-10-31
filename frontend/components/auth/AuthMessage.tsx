interface AuthMessageProps {
  message: string
  type: 'error' | 'success'
}

export default function AuthMessage({ message, type }: AuthMessageProps) {
  const isSuccess = type === 'success'
  
  return (
    <div className={`p-3 rounded-lg border ${
      isSuccess
        ? 'bg-green-900 border-green-700 text-green-300' 
        : 'bg-red-900 border-red-700 text-red-300'
    }`}>
      <p className="text-sm">{message}</p>
    </div>
  )
}

