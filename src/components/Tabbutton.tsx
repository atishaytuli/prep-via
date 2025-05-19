import { Sparkles } from "lucide-react";
import { Tabs, TabsList } from "@/components/ui/tabs";

interface tabsButtonTypes {
  title: string;
  title2: string;
}

export function TabButtons({ title, title2 }: tabsButtonTypes) {
  return (
    <div>
      <Tabs defaultValue={title} className="w-fit">
        <TabsList className="bg-white p-0.5 rounded-full border border-gray-200 shadow-sm">
          <div
            className="rounded-full text-xs px-4 py-2 text-white font-medium bg-cyan-600/80 shadow-sm"
          >
            {title}
          </div>

          <div
            className="rounded-full text-xs px-4 py-2 flex items-center gap-1.5 text-black font-medium  shadow-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-cyan-600" fill="currentColor" />
            {title2}
          </div>
        </TabsList>
      </Tabs>
    </div>
  );
}
