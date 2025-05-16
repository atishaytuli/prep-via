import type { ReactNode } from "react"

interface FeatureItemProps {
  icon: ReactNode
  title: string
  description: string
  action?: ReactNode
}

export function FeatureItem({ icon, title, description, action }: FeatureItemProps) {
  return (
    <div className="border-l-4 border-cyan-500 pl-6 mt-4">
      <div className="flex items-start gap-4">
        <div className="mt-1">{icon}</div>
        <div>
          <h3 className="font-semibold text-lg mb-2 text-gray-900">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
          {action}
        </div>
      </div>
    </div>
  )
}
