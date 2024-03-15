import { LayoutDashboard } from "lucide-react";
import { Button } from "./ui/button";

interface BoardItemProps {
  name: string;
}

const BoardItem = ({name}: BoardItemProps) => {
  return (
    <li className="flex items-center gap-2 mr-4">
      <Button className="bg-transparent text-zinc-100/50 flex justify-start gap-2 rounded-none hover:bg-primary-foreground rounded-r-full w-full">
        <LayoutDashboard
          className="text-primary dark:text-zinc-200"
          strokeWidth={2}
        />
        <span className="leading-6 text-primary">{name}</span>
      </Button>
    </li>
  );
};

export default BoardItem;
