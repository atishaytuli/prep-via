"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
  companyName?: string;
  companyLogo?: string;
  socialHandle?: string;
}

const reviewList: ReviewProps[] = [
  {
    image: "./03.png",
    name: "Sarah R.",
    userName: "Amazon Seller",
    comment:
      "PrepVia cut our prep time in half and made our shipping process frictionless. Highly recommend to any FBA seller.",
    rating: 5.0,
    companyName: "ShipQuick Inc",
    companyLogo: "https://c4.wallpaperflare.com/wallpaper/120/404/961/lec-blue-gradient-texture-cyan-hd-wallpaper-preview.jpg",
    socialHandle: "@sarahrshipping"
  },
  {
    image: "./03.png",
    name: "Daniel P.",
    userName: "E-commerce Entrepreneur",
    comment:
      "I can focus on growing my business while PrepVia takes care of the logistics. Reliable, professional, and efficient.",
    rating: 4.8,
    companyName: "GrowthMasters",
    companyLogo: "https://c4.wallpaperflare.com/wallpaper/120/404/961/lec-blue-gradient-texture-cyan-hd-wallpaper-preview.jpg",
    socialHandle: "@danielpgrowth"
  },
  {
    image: "./03.png",
    name: "Michael T.",
    userName: "Private Label Seller",
    comment:
      "PrepVia handles every product with care and precision. Their fast turnaround has helped us maintain top seller status.",
    rating: 4.9,
    companyName: "TopLabel LLC",
    companyLogo: "https://c4.wallpaperflare.com/wallpaper/120/404/961/lec-blue-gradient-texture-cyan-hd-wallpaper-preview.jpg",
    socialHandle: "@michaeltlabel"
  },
  {
    image: "./03.png",
    name: "Emily K.",
    userName: "Wholesale FBA Seller",
    comment:
      "Excellent service! PrepVia keeps us compliant and on schedule, which means fewer headaches and faster payouts.",
    rating: 5.0,
    companyName: "WholeSale Pro",
    companyLogo: "https://c4.wallpaperflare.com/wallpaper/120/404/961/lec-blue-gradient-texture-cyan-hd-wallpaper-preview.jpg",
    socialHandle: "@emilykwholesale"
  },
  {
    image: "./03.png",
    name: "Jessica M.",
    userName: "FBM & FBA Seller",
    comment:
      "PrepVia's attention to detail is second to none. They've been a key part of scaling my Amazon business stress-free.",
    rating: 5.0,
    companyName: "ScaleUp Brands",
    companyLogo: "https://c4.wallpaperflare.com/wallpaper/120/404/961/lec-blue-gradient-texture-cyan-hd-wallpaper-preview.jpg",
    socialHandle: "@jessicamscales"
  },
  {
    image: "./03.png",
    name: "Andrew L.",
    userName: "Retail Arbitrage Seller",
    comment:
      "Game changer! PrepVia's fast prep times mean my inventory hits the warehouse quickly and keeps selling.",
    rating: 4.9,
    companyName: "ArbitrageKing",
    companyLogo: "https://c4.wallpaperflare.com/wallpaper/120/404/961/lec-blue-gradient-texture-cyan-hd-wallpaper-preview.jpg",
    socialHandle: "@andrewlarbitrage"
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 mx-auto px-4 md:px-2">
      <div className="text-center mb-8">
        <p className="sub-heading">Testimonials</p>

        <h2 className="heading">What Our Clients Say</h2>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-6xl mx-auto"
      >
        <CarouselContent className="py-4">
          {reviewList.map((review, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 p-2 transition-opacity duration-300"
            >
              <Card className="h-full border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-md overflow-hidden bg-indigo-100 flex items-center justify-center">
                      <img
                        src={
                          review.companyLogo || "./03.png"
                        }
                        alt={review.companyName || "Company"}
                        className="w-full h-full"
                      />
                    </div>
                    <span className="font-semibold text-gray-900 text-lg">
                      {review.companyName || "Company"}
                    </span>
                  </div>

                  <p className="text-gray-700 leading-relaxed text-lg mb-8">
                    &ldquo;{review.comment}&rdquo;
                  </p>

                  <div className="mt-auto flex items-center gap-4">
                    <Avatar className="border-2 border-white h-12 w-12">
                      <AvatarImage src={review.image} alt={review.name} />
                      <AvatarFallback className="bg-gray-100 text-gray-600">
                        {review.name
                          .split(" ")
                          .map((name) => name[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div>
                      <h4 className="font-medium text-base text-gray-900">
                        {review.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {review.socialHandle || review.userName}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-4 mt-8">
          <CarouselPrevious className="static transform-none shadow-md hover:bg-gray-50 border-gray-200" />
          <CarouselNext className="static transform-none shadow-md hover:bg-gray-50 border-gray-200" />
        </div>
      </Carousel>
    </section>
  );
};
