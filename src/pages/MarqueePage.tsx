"use client";

import { Marquee } from "../components/marquee";

import {
  Tags,
  PackageCheck,
  PackagePlus,
  WrapText,
  ShieldAlert,
  Layers,
  Box,
  CalendarCheck2,
  SearchCheck,
  LayoutList,
  Eraser,
  Repeat,
  Package,
  Expand,
  Flame,
  Undo2,
  StickyNote,
  Star,
  BoxIcon,
  GlassWater,
} from "lucide-react";

const services = [
  { title: "Labeling", icon: Tags },
  { title: "Poly Bags", icon: PackageCheck },
  { title: "Bubble Wrap", icon: WrapText },
  { title: "Shrink Wrap", icon: PackagePlus },
  { title: "Fragile Prep", icon: ShieldAlert },
  { title: "Bundling", icon: Layers },
  { title: "Boxing", icon: Box },
  { title: "EXP Dates", icon: CalendarCheck2 },
  { title: "Inspection", icon: SearchCheck },
  { title: "Kitting", icon: LayoutList },
  { title: "Sticker Removal", icon: Eraser },
  { title: "Repacking", icon: Repeat },
  { title: "Case Packs", icon: Package },
  { title: "Oversize Items", icon: Expand },
  { title: "Hazmat Prep", icon: Flame },
  { title: "Returns", icon: Undo2 },
  { title: "Inserts", icon: StickyNote },
  { title: "Promo Stickers", icon: Star },
  { title: "Pallet", icon: BoxIcon },
  { title: "Glass", icon: GlassWater },
];

const firstRow = services.slice(0, services.length / 2);
const secondRow = services.slice(services.length / 2);

const ServiceCard = ({
  icon: Icon,
  title,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
}) => {
  return (
    <div className="relative w-32 h-28 rounded-2xl bg-white shadow-sm border border-gray-200 dark:bg-gray-900 dark:border-gray-700 flex items-center justify-center">
      <div className="relative w-28 h-24 rounded-xl border border-gray-200 dark:border-gray-600 flex flex-col items-center justify-center">
        <span className="absolute w-1 h-1 bg-gray-400 rounded-full top-2 left-2" />
        <span className="absolute w-1 h-1 bg-gray-400 rounded-full top-2 right-2" />
        <span className="absolute w-1 h-1 bg-gray-400 rounded-full bottom-2 left-2" />
        <span className="absolute w-1 h-1 bg-gray-400 rounded-full bottom-2 right-2" />

        <Icon className="w-6 h-6 text-black dark:text-white" />
        <p className="mt-2 text-sm text-gray-800 dark:text-gray-200">{title}</p>
      </div>
    </div>
  );
};

export default function MarqueeDemo() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-semibold font-inter mb-8 text-center">
          Every Product. <span className="text-cyan-600">Every Prep.</span>
        </h2>
        <p className="text-lg max-w-3xl mx-auto text-center text-gray-600 mb-12">
          Prep Via is built to handle preparation and fulfillment of all product
          types with customizable, reliable, and ultra-fast prep solutions - no
          matter your category or size.
        </p>
      </div>
      <div className="max-w-7xl mx-auto relative flex flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:60s] mb-2">
          {firstRow.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:60s]">
          {secondRow.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
      </div>
    </section>
  );
}
