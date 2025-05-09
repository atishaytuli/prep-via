"use client";
import Image from "next/image";

const cardsData = [
  {
    id: 1,
    img: "/amazon.png",
    title: "Private Label Sellers",
    description:
      "Helping Private Label Amazon Sellers streamline prep and scale faster.",
  },
  {
    id: 2,
    img: "/shopify.png",
    title: "E-commerce Brands",
    description:
      "Supporting E-commerce Brands expanding into FBA with smooth logistics.",
  },
  {
    id: 3,
    img: "/ebay.png",
    title: "Arbitrage Sellers",
    description:
      "Perfect for Retail & Online Arbitrage Sellers needing fast, reliable prep.",
  },
  {
    id: 4,
    img: "/alibaba.png",
    title: "Wholesale & Distributors",
    description:
      "Trusted by Wholesale & Retail Distributors for efficient fulfillment.",
  },
];


export default function Wedo() {
  return (
    <section id="features" className="container py-24 mx-auto">
      <p className="sub-heading text-center">Who We Support</p>
      <h2 className="heading text-center">Industries We Serve</h2>
      <p className="text-center max-w-2xl mx-auto">
        Whether {"you're"} just getting started or managing multiple SKUs across
        global markets, PrepVia is designed to serve.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 max-w-5xl mx-auto mt-16">
        {cardsData.map(({ id, img, description, title }) => (
          <div
            key={id}
            className="h-full p-6 flex flex-col items-center justify-center text-center"
          >
            <div className=" mb-4">
              <Image
                src={img}
                alt={description}
                width={110}
                height={110}
                className="object-contain"
              />
            </div>

            <h2 className="text-lg font-medium text-muted-foreground font-roboto">{title}</h2>

            <p className="text-muted-foreground max-w-sm mx-auto">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
