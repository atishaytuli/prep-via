import type { ReactNode } from "react"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  price?: string
}

export default function ServiceCard({ icon, title, description, price }: ServiceCardProps) {
  return (
    <div className="flex flex-col bg-gray-50 p-4 sm:p-6 rounded-3xl shadow-inner transition-shadow duration-300">
      <div className="bg-cyan-500 text-white p-3 sm:p-4 rounded-2xl mb-8 sm:mb-12 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
        <div className="w-5 h-5 sm:w-6 sm:h-6 text-white">{icon}</div>
      </div>
      <h3 className="text-xl sm:text-2xl font-medium text-gray-800 mb-3 sm:mb-4">{title}</h3>
      <p className="text-[#636363] text-base mb-3">{description}</p>
      {price && (
        <div className="mt-auto">
          <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
            {price}
          </span>
        </div>
      )}
    </div>
  )
}
