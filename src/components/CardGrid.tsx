import { cn } from "@/lib/utils";
import { FC } from "react";

interface CardData {
  id: number;
  imageUrl: string;
  alt: string;
  title: string;
  description: string;
}

const cardsData: CardData[] = [
  {
    id: 1,
    imageUrl: "./20250514_2151_Warehouse Parcel Scanning_simple_compose_01jv94dmw1fjyvsqsk5xdc99m9.png",
    alt: "Warehouse inspection process",
    title: "Receiving & Inspection",
    description:
      "We inspect and check in your inventory to ensure it matches order specs. Every shipment is verified for accuracy before storage.",
  },
  {
    id: 2,
    imageUrl: "./20250514_2145_Barcode Scanning Parcel_simple_compose_01jv94494vfg68qbt3z2w87h86.png",
    alt: "Labeling station",
    title: "Barcode Scanning & Amazon Labeling",
    description:
      "Products are labeled in full compliance with Amazon standards. We guarantee proper placement and scannability for fast processing.",
  },
  {
    id: 3,
    imageUrl: "./20250514_2145_Barcode Scanning Parcel_simple_compose_01jv94494wfb69ket9wzdx6qxv.png",
    alt: "Storage facility",
    title: "Short-Term Storage",
    description:
      "Secure, organized inventory management until fulfillment. Our facility keeps your products safe, clean, and ready for dispatch.",
  },
  {
    id: 4,
    imageUrl: "./20250514_2208_Warehouse Parcel Coordination_simple_compose_01jv95dy48ee6sg2rpbpy9tgx2.png",
    alt: "Amazon pickup coordination",
    title: "Order Prep & Amazon Pickup Coordination",
    description:
      "We prepare and schedule shipments to Amazon FCs with speed and accuracy. Every order is packed with care and tracked until pickup.",
  },
];

const CardGrid: FC = () => {
  return (
    <section className="container mx-auto py-16">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className={cn(
                "overflow-hidden gap-2 flex flex-col md:flex-row",
                card.id > 2 ? "md:flex-row-reverse" : ""
              )}
            >
              {/* Image Section */}
              <div className="md:w-2/5 h-64 md:h-auto relative">
                <img
                  src={card.imageUrl}
                  alt={card.alt}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Content Section */}
              <div
                className={cn(
                  "md:w-3/5 min-h-[375px] p-6 flex flex-col justify-between border rounded-xl shadow-inner bg-gray-50"
                )}
              >
                <h3
                  className={cn(
                    "text-4xl font-medium text-gray-900",
                  )}
                >
                  {card.title}
                </h3>
                <div className="flex-1" />

                <p
                  className={cn( "text-sm text-gray-600",
                  )}
                >
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardGrid;
