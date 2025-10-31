interface AuthInputProps {
  id: string
  name: string
  type: string
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  required?: boolean
  minLength?: number
}

export default function AuthInput({
  id,
  name,
  type,
  label,
  value,
  onChange,
  placeholder,
  required = false,
  minLength
}: AuthInputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-2">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:bg-gray-600 outline-none transition-colors text-white placeholder-gray-400"
        placeholder={placeholder}
        minLength={minLength}
      />
    </div>
  )
}

