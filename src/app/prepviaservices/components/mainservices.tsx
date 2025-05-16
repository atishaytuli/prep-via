import { Tag, Package, Layers, Box, Calendar } from "lucide-react"
import ServiceCard from "./servicecard"
import { TabButtons } from "@/components/Tabbutton"

export default function MainServicesSection() {
  const services = [
    {
      icon: <Tag />,
      title: "FNSKU & UPC Labeling",
      description: "Efficient and accurate labeling compliant with both Amazon (FNSKU) and Walmart (UPC) standards.",
      price: "$0.40/unit",
    },
    {
      icon: <Package />,
      title: "Poly Bagging & Shrink Wrapping",
      description: "Protect your products efficiently with our automated poly bagging or shrink wrapping services.",
      price: "Poly: $0.30/unit • Shrink: $0.35/unit",
    },
    {
      icon: <Layers />,
      title: "Bubble Wrapping",
      description:
        "Secure fragile items professionally with bubble wrap (up to 15 inches per unit; larger items incur additional charges).",
      price: "$0.45/unit",
    },
    {
      icon: <Box />,
      title: "Boxing",
      description: "Professional boxing solutions tailored for product safety and secure transportation.",
      price: "$2.00/box",
    },
    {
      icon: <Package />,
      title: "Multipack/Bundling",
      description: "Optimized multipacks, including FNSKU labeling, ideal for maximizing sales opportunities.",
      price: "$1.40–$2.60/pack (2-6 items)",
    },
    {
      icon: <Calendar />,
      title: "Expiration Date Labeling",
      description: "Clear and professional labeling of expiration dates at no extra charge.",
      price: "Included Free",
    },
  ]

  return (
    <section className="mb-12 mt-6 bg-white">
      <div className="container flex flex-col items-center mx-auto px-4 max-w-6xl">
        <TabButtons title="Our Services" title2="Main Prep Services" />
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto mt-4">
          Our specialized preparation services ensure your products meet marketplace standards
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              price={service.price}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
