import type React from "react";
import Image from "next/image";
import { TabButtons } from "@/components/Tabbutton";

export default function AddOnServicesSection() {
  const services = [
    {
      title: "Sticker Removal",
      price: "$0.25/unit",
      description: "Clean and efficient sticker removal.",
    },
    {
      title: "Additional Labeling",
      price: "$0.15/label",
      description: "Extra labeling services beyond standard FNSKU/UPC.",
    },
    {
      title: "Package Inserts",
      price: "$0.20/unit",
      description: "Insert marketing materials or product instructions.",
    },
    {
      title: "Fragile Item Handling",
      price: "$0.50/unit",
      description: "Enhanced protection for delicate products.",
    },
    {
      title: "Returns Management",
      price: "$2.00/item",
      description: "Professional processing of returned merchandise.",
    },
    {
      title: "Disposal Services (Standard)",
      price: "$1.50/item",
      description: "Responsible disposal of unsellable inventory.",
    },
    {
      title: "Disposal Services (Oversized)",
      price: "$3.00/item",
      description: "Responsible disposal of large unsellable inventory.",
    },
  ];

  return (
    <section className="py-16 max-w-7xl mx-auto mb-24">
      <div className="container mx-auto px-4 max-w-6xl ">
        <div className="flex flex-col items-center">
          <TabButtons title="Optional Add-on Services" title2="" />
          <p className="text-gray-600 text-center mb-12 max-w-2xl mt-4 mx-auto">
            Available upon request to meet your specific needs
          </p>
        </div>

        {/* Clean, minimalistic list design instead of boxes */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="divide-y divide-gray-100">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex justify-between p-5 hover:bg-gray-50 transition-colors"
              >
                <div>
                  <h4 className="text-base font-medium text-gray-800 mb-1">
                    {service.title}
                  </h4>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                    {service.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Free service */}
        <div className="mt-8 max-w-4xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-5 flex justify-between items-center">
            <div>
              <h4 className="text-base font-medium text-gray-800 mb-1">
                Inspection & Quality Control
              </h4>
              <p className="text-sm text-gray-600">
                Comprehensive quality checks at no charge.
              </p>
            </div>
            <div className="ml-4 flex-shrink-0">
              <span className="inline-block bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium">
                Included Free
              </span>
            </div>
          </div>
        </div>

        {/* Added packaging image with cleaner design */}
        <div className="mt-16 max-w-4xl mx-auto ">
          <div className="bg-gray-50 shadow-inner rounded-3xl  overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-12 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Professional Packaging Solutions
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Our team of packaging experts ensures your products are
                  properly prepared for shipment, minimizing damage risk and
                  optimizing for marketplace requirements.
                </p>
                <p className="text-gray-600 text-sm">
                  With years of experience handling various product types, we
                  know exactly how to prepare your items to meet Amazon,
                  Walmart, and other marketplace standards.
                </p>
              </div>
              <div className="relative h-64 md:h-auto">
                <Image
                  src="/20250519_0006_Parcel Prep Solutions_simple_compose_01jvknqwf1eac8fdjhvkxxjpaw.png"
                  alt="Professional packaging services"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
