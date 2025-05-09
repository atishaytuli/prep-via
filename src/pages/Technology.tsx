"use client"
import { cn } from "@/lib/utils"

const CardsData = [
  {
    id: "01",
    bgColor: "#FAFAFA",
    textColor: "#273238",
    quote:
      "PrepVia is actively developing two state-of-the-art labeling machines designed to process high volumes of inventory faster and with greater accuracy than any manual method. These machines, built in-house, are a glimpse into the future of fulfillment and will soon be available for commercial use.",
    person: {
      name: "Chiku Miku & Sons",
      role: "Founder & CEO",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  },
  {
    id: "02",
    bgColor: "#ffffff",
    textColor: "#14C1D7",
    title: "The Future of Product Labeling is Here",
  },
  {
    id: "03",
    image: "./04.png",
    imageAlt: "PrepVia Screen",
    bgColor: "#ffffff",
  },
  {
    id: "04",
    image: "./p1.jpg",
    imageAlt: "PrepVia Building",
    bgColor: "#E0FFFF",
  },
  {
    id: "05",
    image: "./02.png",
    imageAlt: "PrepVia Polo Shirt",
    bgColor: "#E0FFFF",
  },
  {
    id: "06",
    bgColor: "#FFFFFF",
    textColor: "#273238",
    benefits: [
      "Up to 8x faster processing time",
      "Reduced error rates",
      "Lower labor costs",
      "Consistency across large batches",
      "Scalable for growing businesses",
      "Automated quality control",
    ],
  },
]

interface CardProps {
  bgColor?: string
  textColor?: string
  quote?: string
  title?: string
  benefits?: string[]
  person?: {
    name: string
    role: string
    avatar: string
  }
  image?: string
  imageAlt?: string
  className?: string
}

const Card = ({ bgColor, textColor, quote, title, benefits, person, image, imageAlt, className }: CardProps) => {
  const hasImage = !!image
  const hasQuote = !!quote
  const hasTitle = !!title
  const hasBenefits = !!benefits && benefits.length > 0
  const hasPerson = !!person

  return (
    <div
      className={cn(
        "rounded-lg overflow-hidden h-full flex flex-col shadow-sm hover:shadow-md transition-shadow",
        className,
      )}
      style={{
        backgroundColor: bgColor || "#ffffff",
      }}
    >
      {hasImage ? (
        <div className="relative w-full h-full">
          <img src={image || "/placeholder.svg"} alt={imageAlt || ""} className="w-full h-full object-cover" />
        </div>
      ) : (
        <div className="flex flex-col p-4 sm:p-6 h-full justify-between">
          {hasQuote && (
            <div className="flex-grow">
              <p className="text-base sm:text-base leading-relaxed" style={{ color: textColor }}>
                {quote}
              </p>
            </div>
          )}

          {hasTitle && (
            <div className="flex-grow flex justify-center">
              <h2 className="text-3xl font-semibold " style={{ color: textColor }}>
                {title}
              </h2>
            </div>
          )}

          {hasBenefits && (
            <div className="flex-grow">
              <h3 className="text-lg font-semibold mb-3" style={{ color: textColor }}>
                Key Benefits
              </h3>
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start" style={{ color: textColor }}>
                    <span className="mr-2 mt-1">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {hasPerson && (
            <div className="flex items-center gap-3 mt-4">
              {person.avatar && (
                <div className="h-10 w-10 rounded-full overflow-hidden">
                  <img
                    src={person.avatar || "/placeholder.svg"}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div>
                <p className="font-semibold text-sm" style={{ color: textColor }}>
                  {person.name}
                </p>
                <p className="text-xs opacity-80" style={{ color: textColor }}>
                  {person.role}
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

const Technology = () => {
  return (
    <section className="py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <p className="sub-heading">Tech & Innovation</p>
          <h2 className="heading">The Future of Product Labeling</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-16">
          <div className="md:col-span-4 h-full">
            <Card {...CardsData[0]} className="h-full shadow-md hover:rounded-3xl transition-all duration-300" />
          </div>

          <div className="md:col-span-4 grid grid-rows-2 gap-4 h-full">
            <div className="grid grid-cols-2 row-span-1 gap-4">
              <Card {...CardsData[1]} className="shadow-md hover:rounded-3xl transition-all duration-300" />
              <Card {...CardsData[2]} className="hover:rounded-none transition-all duration-300" />
            </div>
            <div className="row-span-6">
              <Card {...CardsData[3]} className="h-full hover:rounded-none transition-all duration-300" />
            </div>
          </div>

          <div className="md:col-span-4 grid grid-rows-2 gap-4 h-full">
            <div className="row-span-1">
              <Card {...CardsData[5]} className="h-full shadow-md hover:rounded-3xl transition-all duration-300" />
            </div>
            <div className="row-span-1">
              <Card {...CardsData[4]} className="h-full hover:rounded-none transition-all duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const BentoCardGrid = () => {
  return (
    <div className="min-h-screen">
      <Technology />
    </div>
  )
}

export default BentoCardGrid
