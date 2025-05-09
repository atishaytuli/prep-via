"use client";
import Image from "next/image";
import { MapPin, Users, BarChart2, Clock } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Strategic Location",
      text: "Strategically located in Miami's logistics hub",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Staff",
      text: "Staff trained in Amazon FBA compliance",
    },
    {
      icon: <BarChart2 className="h-6 w-6" />,
      title: "Scalable Services",
      text: "Scalable services for all business sizes",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Fast Turnaround",
      text: "24 to 48 hours of turnaround times available",
    },
  ];

  // const stats = [
  //   { value: "24-48", label: "Hour Turnaround" },
  //   { value: "100%", label: "FBA Compliant" },
  //   { value: "Miami", label: "Strategic Location" },
  // ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="sub-heading">Who we are</p>
          <h1 className="heading">Built for Sellers, Designed for <span className="italic font-serif font-normal">Speed</span></h1>

          <p className="text-gray-600 text-lg">
            PrepVia is a full-service prep center designed to meet the needs of
            Amazon FBA vendors. Our mission is simple: to simplify fulfillment
            and help Amazon sellers scale efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-16 max-w-6xl mx-auto">
          <div className="rounded-2xl overflow-hidden h-64 md:h-80">
            <Image
              src="/p1.jpg"
              alt="PrepVia facility"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-2xl overflow-hidden h-64 md:h-80">
            <Image
              src="/p2.jpg"
              alt="Amazon FBA preparation"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-2xl overflow-hidden h-64 md:h-80">
            <Image
              src="/p3.webp"
              alt="Logistics operations"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-gray-700 text-lg leading-relaxed">
            Our 1,500 ft² facility, located in the industrial heart of Hialeah
            near the Port of Miami, provides fast and reliable product
            receiving, labeling, storage, and shipment preparation.
          </p>
        </div>

        {/* <div className="grid grid-cols-3 md:grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-semibold font-roboto text-primary-cyan mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div> */}

        {/* Features section */}
        <div className="max-w-6xl mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center group mt-12 transition-all hover:transform hover:translate-y-[-2px]"
              >
                <div className="flex justify-center mb-5">
                  <div className="p-3 bg-blue-100 rounded-full text-primary-cyan group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-gray-800 font-medium mb-2 text-lg">
                  {feature.title}
                </h3>
                <p className="text-gray-500">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
