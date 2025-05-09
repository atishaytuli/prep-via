import React, { useState, useEffect } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

interface Review {
  id: number;
  title: string;
  content: string;
  image?: string;
}

const reviews: Review[] = [
  {
    id: 1,
    title: "XYZ Company",
    content:
      "Clear guidance on what makes for an effective charity website, how to increase donations and action change without being a digital expert.",
  },
  {
    id: 2,
    title: "James Robert Business",
    content:
      "Comprehensive tools and templates to help your charity create impactful digital campaigns and engage with your audience effectively.",
  },
  {
    id: 3,
    title: "New Company",
    content:
      "Strategic approaches for digital fundraising, with practical tips to maximize donations and create memorable giving experiences.",
  },
];

const ReviewSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState<
    "up" | "down" | null
  >(null);

  const handleNext = () => {
    setAnimationDirection("up");
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
      setAnimationDirection(null);
    }, 300);
  };

  const handlePrev = () => {
    setAnimationDirection("down");
    setTimeout(() => {
      setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
      setAnimationDirection(null);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 w-full max-w-lg">
          <div className="overflow-hidden flex-1">
            <div
              className={`transition-all duration-300 ${
                animationDirection === "up"
                  ? "translate-y-[-20px] opacity-0"
                  : animationDirection === "down"
                  ? "translate-y-[20px] opacity-0"
                  : ""
              }`}
            >
              <h3 className="text-lg font-medium mb-2 text-white">
                {reviews[activeIndex].title}
              </h3>
              <p className="text-sm text-gray-300">
                {reviews[activeIndex].content}
              </p>
            </div>
        </div>
      </div>

      <div className="absolute -right-8 h-full top-0 flex flex-col justify-center gap-6">
        <button
          onClick={handlePrev}
          className="p-1"
          aria-label="Previous review"
        >
          <ArrowUp className="w-4 h-4 text-white" />
        </button>
        <button
          onClick={handleNext}
          className="p-1"
          aria-label="Next review"
        >
          <ArrowDown className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  );
};

export default ReviewSlider;
