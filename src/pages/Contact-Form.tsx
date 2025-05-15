"use client";
import { Headphones } from "lucide-react";
import type React from "react";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    industry: "",
    website: "",
  });

  const listItems = [
    "48-Hour Prep Turnaround",
    "Real-Time Inventory Updates",
    "FBA/FBM Compliant Packaging",
    "Transparent Pricing & No Hidden Fees",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="max-w-6xl mx-auto py-16 px-4 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-12">
        <div>
          <div className="mb-6">
            <Headphones className="h-8 w-8 text-gray-700" />
          </div>

          <h2 className="text-4xl font-[500] font-poppins text-gray-900 mb-8">
            Partner with a <span className="text-cyan-600">Reliable</span> Prep
            Center and Scale Without Limits
          </h2>

          <p className="text-lg text-gray-600 font-roboto mb-8">
            Let us handle your logistics, prep, and packaging so
            <br />
            you can focus on growing your business.
          </p>

          <ul className="space-y-3 text-sm">
            {listItems.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="bg-cyan-100/70 rounded-full flex items-center justify-center p-[4px] flex-shrink-0 mt-0.5">
                  <span className="w-1 h-1 bg-cyan-400 rounded-full block"></span>
                </div>
                <span className="text-gray-500 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column - Form */}
        <div className="max-w-sm mx-auto md:mx-0 md:ml-auto w-full">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Bernardo"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="(929) 626-0778"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="industry"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Service Type
              </label>
              <div className="relative">
                <div className="relative">
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full appearance-none bg-white px-4 py-3 pr-10 rounded-lg border border-gray-300 shadow-sm text-sm text-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                  >
                    <option value="" disabled>
                      Select a service...
                    </option>
                    <option value="wholesale">Wholesale</option>
                    <option value="private-label">Private Label</option>
                    <option value="bundling">Kitting & Bundling</option>
                    <option value="returns">Returns Management</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="website"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Selling Platform
              </label>
              <input
                type="text"
                id="website"
                name="website"
                placeholder="Amazon, Walmart, Shopify..."
                value={formData.website}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
