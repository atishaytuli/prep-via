import { Sparkles } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface tabsButtonTypes {
  title: string;
  title2: string;
}

export function TabButtons({ title, title2 }: tabsButtonTypes) {
  return (
    <div>
      <Tabs defaultValue={title} className="w-fit">
        <TabsList className="bg-white p-0.5 rounded-full border border-gray-200 shadow-sm">
          {/* First tab - active by default */}
          <TabsTrigger
            value={title}
            className="rounded-full text-xs px-4 py-2 text-gray-700 font-medium 
            data-[state=active]:bg-cyan-600/80 
            data-[state=active]:text-white 
            data-[state=active]:shadow-sm"
          >
            {title}
          </TabsTrigger>

          {/* Second tab */}
          <TabsTrigger
            value={title2}
            className="rounded-full text-xs px-4 py-2 flex items-center gap-1.5 text-gray-700 font-medium 
            data-[state=active]:bg-gray-100 
            data-[state=active]:text-black 
            data-[state=active]:shadow-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-cyan-600" fill="currentColor" />
            {title2}
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
