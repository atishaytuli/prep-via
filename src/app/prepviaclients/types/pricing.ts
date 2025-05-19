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
    monthly: number | string
    yearly: number | string
  }
  isPopular?: boolean
  isbig?: boolean
  features: PricingFeature[]
  iconBgClass?: string
  iconColorClass?: string
  checkIconColorClass?: string
}
