import type { LucideIcon } from "lucide-react"

interface BenefitCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function BenefitCard({ icon: Icon, title, description }: BenefitCardProps) {
  return (
    <div className="flex flex-col bg-gray-50 p-4 sm:p-6 rounded-3xl shadow-inner transition-shadow duration-300">
      <div className="bg-cyan-500 text-white p-3 sm:p-4 rounded-2xl mb-8 sm:mb-12 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
      </div>
      <h3 className="text-xl sm:text-2xl font-medium text-gray-800 mb-3 sm:mb-4">{title}</h3>
      <p className="text-[#636363] text-base font-poppins">{description}</p>
    </div>
  )
}

interface BenefitGridProps {
  benefits: Array<{
    icon: LucideIcon
    title: string
    description: string
  }>
}

export function BenefitGrid({ benefits }: BenefitGridProps) {
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16 sm:mb-20 px-2">
      {benefits.map((benefit, index) => (
        <BenefitCard key={index} icon={benefit.icon} title={benefit.title} description={benefit.description} />
      ))}
    </div>
  )
}
