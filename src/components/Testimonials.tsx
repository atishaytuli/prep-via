'use client';
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

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
    image: "/placeholder.svg",
    name: "Sarah R.",
    userName: "Amazon Seller",
    comment:
      "PrepVia cut our prep time in half and made our shipping process frictionless. Highly recommend to any FBA seller.",
    rating: 5.0,
    companyName: "ShipQuick Inc",
    companyLogo:
      "https://c4.wallpaperflare.com/wallpaper/120/404/961/lec-blue-gradient-texture-cyan-hd-wallpaper-preview.jpg",
    socialHandle: "@sarahrshipping",
  },
  {
    image: "/placeholder.svg",
    name: "Daniel P.",
    userName: "E-commerce Entrepreneur",
    comment:
      "I can focus on growing my business while PrepVia takes care of the logistics. Reliable, professional, and efficient.",
    rating: 4.8,
    companyName: "GrowthMasters",
    companyLogo:
      "https://c4.wallpaperflare.com/wallpaper/120/404/961/lec-blue-gradient-texture-cyan-hd-wallpaper-preview.jpg",
    socialHandle: "@danielpgrowth",
  },
  {
    image: "/placeholder.svg",
    name: "Michael T.",
    userName: "Private Label Seller",
    comment:
      "PrepVia handles every product with care and precision. Their fast turnaround has helped us maintain top seller status.",
    rating: 4.9,
    companyName: "TopLabel LLC",
    companyLogo:
      "https://c4.wallpaperflare.com/wallpaper/120/404/961/lec-blue-gradient-texture-cyan-hd-wallpaper-preview.jpg",
    socialHandle: "@michaeltlabel",
  },
  {
    image: "/placeholder.svg",
    name: "Emily K.",
    userName: "Wholesale FBA Seller",
    comment:
      "Excellent service! PrepVia keeps us compliant and on schedule, which means fewer headaches and faster payouts.",
    rating: 5.0,
    companyName: "WholeSale Pro",
    companyLogo:
      "https://c4.wallpaperflare.com/wallpaper/120/404/961/lec-blue-gradient-texture-cyan-hd-wallpaper-preview.jpg",
    socialHandle: "@emilykwholesale",
  },
  {
    image: "/placeholder.svg",
    name: "Jessica M.",
    userName: "FBM & FBA Seller",
    comment:
      "PrepVia's attention to detail is second to none. They've been a key part of scaling my Amazon business stress-free.",
    rating: 5.0,
    companyName: "ScaleUp Brands",
    companyLogo:
      "https://c4.wallpaperflare.com/wallpaper/120/404/961/lec-blue-gradient-texture-cyan-hd-wallpaper-preview.jpg",
    socialHandle: "@jessicamscales",
  },
  {
    image: "/placeholder.svg",
    name: "Andrew L.",
    userName: "Retail Arbitrage Seller",
    comment:
      "Game changer! PrepVia's fast prep times mean my inventory hits the warehouse quickly and keeps selling.",
    rating: 4.9,
    companyName: "ArbitrageKing",
    companyLogo:
      "https://c4.wallpaperflare.com/wallpaper/120/404/961/lec-blue-gradient-texture-cyan-hd-wallpaper-preview.jpg",
    socialHandle: "@andrewlarbitrage",
  },
];

const TestimonialCard = ({ data, partial = false }: { data: ReviewProps; partial?: boolean }) => (
  <div className={`h-full bg-white rounded-lg shadow p-6 sm:p-8 flex flex-col ${partial ? "overflow-hidden" : ""}`}>
    {/* Quote icon */}
    <div className="mb-4">
      <Quote className="w-6 h-6 text-cyan-600" />
    </div>

    {/* Comment */}
    <div className={`${partial ? "line-clamp-3" : ""} text-gray-700 flex-grow`}>
      &ldquo;{data.comment}&rdquo;
    </div>

    {/* Divider */}
    <div className="w-full border-t border-gray-300 my-4"></div>

    {/* User Info */}
    <div className={`flex items-center ${partial ? "opacity-0" : ""}`}>
      <Avatar className="h-10 w-10 border-2 border-white">
        <AvatarImage src={data.image} alt={data.name} />
        <AvatarFallback className="bg-cyan-600 text-white">
          {data.name.split(" ").map((n) => n[0]).join("")}
        </AvatarFallback>
      </Avatar>
      <div className="ml-3">
        <div className="font-bold text-sm">{data.name}</div>
        <div className="text-xs text-gray-600">
          {data.companyName}
        </div>
      </div>
    </div>
  </div>
);

export const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % reviewList.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleReviews = () => {
    const total = reviewList.length;
    return [
      reviewList[(currentIndex - 1 + total) % total],
      reviewList[currentIndex],
      reviewList[(currentIndex + 1) % total],
      reviewList[(currentIndex + 2) % total],
    ];
  };

  const visibleReviews = getVisibleReviews();

  const variants = {
    enter: (direction: number) => ({ x: direction > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: "0%", opacity: 1 },
    exit: (direction: number) => ({ x: direction < 0 ? "100%" : "-100%", opacity: 0 }),
  };

  return (
    <section className="max-w-6xl mx-auto bg-gray-50 py-12 md:py-20 rounded-2xl">
      <div className="text-center mb-12 md:mb-16">
        <p className="text-cyan-500 font-medium mb-2">Testimonials</p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">What Our Clients Say</h2>
      </div>

      <div className="relative overflow-hidden px-4 md:px-6">
        {/* Fixed height container with proper height to prevent cutting */}
        <div className="testimonial-container h-[400px] md:h-[350px] lg:h-[320px]">
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              className="flex items-stretch absolute w-full h-full"
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ 
                x: { type: "tween", ease: "easeInOut", duration: 0.6 },
                opacity: { duration: 0.3 }
              }}
            >
              {/* Mobile view: show only the current card */}
              <div className="w-full md:hidden">
                <TestimonialCard data={visibleReviews[1]} />
              </div>
              
              {/* Desktop view: show multiple cards */}
              <div className="hidden md:flex w-full h-full">
                <div className="w-[10%] opacity-40 px-1 h-full">
                  <TestimonialCard data={visibleReviews[0]} partial />
                </div>
                <div className="w-[40%] px-2 md:px-4 h-full">
                  <TestimonialCard data={visibleReviews[1]} />
                </div>
                <div className="w-[40%] px-2 md:px-4 h-full">
                  <TestimonialCard data={visibleReviews[2]} />
                </div>
                <div className="w-[10%] opacity-40 px-1 h-full">
                  <TestimonialCard data={visibleReviews[3]} partial />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex justify-center mt-8 md:mt-12">
        <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-full">
          {reviewList.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-gray-800" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
