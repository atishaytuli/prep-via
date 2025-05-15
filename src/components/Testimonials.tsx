"use client";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import { TabButtons } from "./Tabbutton";

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

const TestimonialCard = ({
  data,
  partial = false,
}: {
  data: ReviewProps;
  partial?: boolean;
}) => (
  <div
    className={`h-full bg-white rounded-xl shadow-lg p-6 sm:p-8 flex flex-col justify-between
      ${partial ? "opacity-60 scale-95" : "transform-gpu"} 
      transition-all duration-300 hover:shadow-xl`}
  >
    <div className="mb-4">
      <Quote className="w-8 h-8 text-cyan-600 opacity-80" />
    </div>

    <div
      className={`${
        partial ? "line-clamp-3" : ""
      } text-gray-600 flex-grow mb-4 text-base`}
    >
      &ldquo;{data.comment}&rdquo;
    </div>

    <div
      className={`${
        partial ? "opacity-60" : ""
      } transition-opacity duration-300`}
    >
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${
              i < Math.floor(data.rating) ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-1 text-xs text-gray-600">
          {data.rating.toFixed(1)}
        </span>
      </div>

      <div className="w-full border-t border-gray-200 mb-4"></div>

      <div className="flex items-center">
        <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
          <AvatarImage src={data.image || "/placeholder.svg"} alt={data.name} />
          <AvatarFallback className="bg-gradient-to-br from-cyan-400 to-cyan-600 text-white">
            {data.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div className="ml-3">
          <div className="font-bold text-gray-800">{data.name}</div>
          <div className="text-sm text-gray-600">{data.companyName}</div>
          {data.socialHandle && (
            <div className="text-xs text-cyan-600">{data.socialHandle}</div>
          )}
        </div>
      </div>
    </div>
  </div>
);

export const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % reviewList.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

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

  return (
    <section className="max-w-6xl mx-auto bg-gray-50 py-16 px-4 rounded-2xl shadow-inner">
      <div className="flex flex-col items-center gap-6 text-center mb-12 md:mb-16">
        <TabButtons title="Testimonials" title2="" />
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 font-inter">
          What Our Clients Say
        </h2>
      </div>

      <div className="relative overflow-hidden pb-4">
        <div className="testimonial-container h-[450px] md:h-[400px] lg:h-[380px] relative">
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              className="flex items-stretch absolute w-full h-full"
              key={currentIndex}
              custom={direction}
              initial={{ x: direction > 0 ? "100%" : "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: direction < 0 ? "100%" : "-100%" }}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 },
              }}
            >
              <div className="w-full md:hidden px-4">
                <TestimonialCard data={visibleReviews[1]} />
              </div>

              <div className="hidden md:flex w-full h-full px-4">
                <div className="w-[15%] px-2 h-full flex items-center">
                  <TestimonialCard data={visibleReviews[0]} partial />
                </div>
                <div className="w-[35%] px-2 h-full">
                  <TestimonialCard data={visibleReviews[1]} />
                </div>
                <div className="w-[35%] px-2 h-full">
                  <TestimonialCard data={visibleReviews[2]} />
                </div>
                <div className="w-[15%] px-2 h-full flex items-center">
                  <TestimonialCard data={visibleReviews[3]} partial />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 mt-8 md:mt-16">
        <button
          onClick={() => {
            setDirection(-1);
            setCurrentIndex(
              (prev) => (prev - 1 + reviewList.length) % reviewList.length
            );
          }}
          className="p-1 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
          aria-label="Previous testimonial"
        >
          <svg
            className="w-4 h-4 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-full shadow-md">
          {reviewList.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-cyan-600 scale-110"
                  : "bg-gray-400 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % reviewList.length);
          }}
          className="p-1 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
          aria-label="Next testimonial"
        >
          <svg
            className="w-4 h-4 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default TestimonialSection;
