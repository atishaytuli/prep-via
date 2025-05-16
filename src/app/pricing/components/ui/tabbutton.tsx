"use client"

interface TabButtonProps {
  isActive: boolean
  onClick: () => void
  label: string
}

export function TabButton({ isActive, onClick, label }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 text-sm font-medium transition-all ${
        isActive ? "border-b-2 border-cyan-500 text-cyan-600" : "text-gray-600 hover:text-gray-900"
      }`}
    >
      {label}
    </button>
  )
}
