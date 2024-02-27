import { MoreVertical, PlusCircle } from "lucide-react";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-5 border-b row-span-1">
      <h3 className="text-xl font-semibold dark:text-zinc-200">Project Name</h3>
      <ModeToggle/>
      <div className="flex items-center gap-4">
        <Button className="flex gap-2">
          <PlusCircle size={20} />
          <span>Add New Task</span>
        </Button>
        <div className="cursor-pointer hover:bg-zinc-900/10 dark:hover:bg-zinc-200/5 rounded-lg p-1">
          <MoreVertical
            className="text-zinc-400 dark:text-zinc-200"
            size={22}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
