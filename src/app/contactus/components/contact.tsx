"use client"

import { Mail, Clock, MapPin } from "lucide-react"
import ContactCard, { type ContactCardProps } from "./contactcard"
import ContactForm from "./contactform"

export default function ContactSection() {
  // Contact card data
  const contactCards: ContactCardProps[] = [
    {
      icon: <Mail size={26} className="text-cyan-600 mt-4" />,
      title: "Basic",
      description: "Let's have a chat – there's nothing quite like talking to another person.",
      contact: "+1 (786) 899-7286",
    },
    {
      icon: <Clock size={26} className="text-cyan-600 mt-4" />,
      title: "Business Hours",
      description: "We'd be delighted to welcome you on our business hours.",
      contact: "Monday – Friday, 8 AM to 6 PM EST",
    },
    {
      icon: <MapPin size={26} className="text-cyan-600 mt-4" />,
      title: "Warehouse Address",
      description: "We'd be delighted to welcome you to our Head Office.",
      contact: "266 W 24th St, Hialeah, FL 33010, USA",
    },
  ]

  return (
    <div className="relative flex flex-col">
      <div className="container  mx-auto px-4 md:px-6 py-8">
         <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-[65%] h-20 bg-cyan-400/50 rounded-full blur-3xl"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {contactCards.map((card, index) => (
            <ContactCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              contact={card.contact}
            />
          ))}
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="mt-10 relative">
            <div className="absolute -top-2 -left-2 right-14 bottom-6 bg-sky-50 rounded-lg border border-sky-100"></div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
