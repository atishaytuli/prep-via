"use client"

import type React from "react"

import { useState, type FormEvent } from "react"
import { Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface FormData {
  fullName: string
  email: string
  phone: string
  subject: string
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    setIsSubmitting(true)

    try {
      // Simulate API call or submission logic
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Reset form on success
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.error("Submission failed:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const features = ["Expert logistics support", "Personalized solutions", "24-hour response time"]

  return (
    <div className="relative bg-white rounded-lg shadow-md border overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Left side - Content */}
        <div className="p-6 sm:p-8 md:p-12 flex flex-col h-full">
          <div className="text-cyan-600 mb-5">
            <Headphones size={32} />
          </div>

          <h2 className="text-2xl font-semibold mb-4">Feel free to send our friendly team a message</h2>

          <p className="text-gray-600 mb-8">
            Please fill out our quick contact form, and we will respond within 24 hours:
          </p>

          <div className="flex flex-wrap gap-4 mb-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <span className="inline-block w-2 h-2 bg-cyan-400 rounded-full"></span>
                </div>
                <span className="text-gray-700 text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Form */}
        <div className="p-6 sm:p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <Label htmlFor="fullName" className="text-sm text-gray-600 mb-1 block">
                Full Name:
              </Label>
              <Input
                id="fullName"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="bg-gray-100 h-10 rounded-lg border-gray-200 "
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email" className="text-sm text-gray-600 mb-1 block">
                  Email Address:
                </Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-gray-100 h-10 rounded-lg border-gray-200 "
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-sm text-gray-600 mb-1 block">
                  Phone Number (optional):
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-gray-100 h-10 rounded-lg border-gray-200 "
                />
              </div>
            </div>

            <div>
              <Label htmlFor="subject" className="text-sm text-gray-600 mb-1 block">
                Subject:
              </Label>
              <Input
                id="subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="bg-gray-100 h-10 rounded-lg border-gray-200 "
              />
            </div>

            <div>
              <Label htmlFor="message" className="text-sm text-gray-600 mb-1 block">
                Message:
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-gray-100 min-h-[100px] rounded-lg border-gray-200  resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg flex items-center justify-center h-12 gap-2"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
