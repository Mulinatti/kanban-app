import { MoreVertical } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import NewTask from "./new-task";

interface HeaderProps {
  name: string;
}

const Header = ({name}: HeaderProps) => {
  return (
    <header className="flex items-center justify-between p-5 border-b row-span-1">
      <h3 className="text-xl font-semibold capitalize">{name}</h3>
      <ModeToggle />
      <div className="flex gap-3 items-center">
        <NewTask/>
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
