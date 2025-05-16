export interface PricingFeature {
  text: string
  included: boolean
}

export interface PricingPlan {
  name: string
  description: string
  subDescription?: string
  icon: string
  price: {
    monthly: number
    yearly: number
  }
  isPopular?: boolean
  features: PricingFeature[]
  iconBgClass?: string
  iconColorClass?: string
  checkIconColorClass?: string
}
