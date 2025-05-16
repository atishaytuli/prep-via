import type { ReactNode } from "react"
import { Card } from "@/components/ui/card"
import { CircleDot } from "lucide-react"

export interface ContactCardProps {
  icon: ReactNode
  title: string
  description: string
  contact: string
}

export default function ContactCard({ icon, title, description, contact }: ContactCardProps) {
  return (
    <Card className="relative rounded-xl border border-gray-200 bg-gray-50 p-2">
      <div className="bg-white rounded-lg p-2">
        {/* Corner dots */}
        <div className="absolute top-3 left-3 text-gray-500">
          <CircleDot size={4} />
        </div>
        <div className="absolute top-3 right-3 text-gray-500">
          <CircleDot size={4} />
        </div>
        <div className="absolute bottom-3 left-3 text-gray-500">
          <CircleDot size={4} />
        </div>
        <div className="absolute bottom-3 right-3 text-gray-500">
          <CircleDot size={4} />
        </div>

        <div className="p-4 flex flex-col">
          <div className="text-cyan-600 mb-5">{icon}</div>
          <h3 className="text-lg text-gray-700 font-poppins font-medium mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-4 font-poppins">{description}</p>

          {/* Horizontal separator line */}
          <div className="border-t border-gray-100 my-2 w-full"></div>

          <div className="mt-auto pt-2">
            <p className="text-cyan-600 font-medium text-sm">{contact}</p>
          </div>
        </div>
      </div>
    </Card>
  )
}
