import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <div className="flex flex-col lg:flex-row z-50 mb-12 lg:mb-4 items-center gap-2">
      <Button
        onClick={() => setTheme("dark")}
        variant="ghost"
        className="text-primary/50 p-0 w-10 h-10 rounded-full"
      >
        <Moon size={20} />
      </Button>
      <div className="border-b lg:border-b-0 lg:border-r border-primary/30 lg:h-5 w-5 lg:w-0"></div>
      <Button
        onClick={() => setTheme("light")}
        variant="ghost"
        className="text-primary/50 p-0 w-10 h-10 rounded-full"
      >
        <Sun size={20} />
      </Button>
    </div>
  );
}
