import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { MoreVertical, Pencil, Trash } from "lucide-react";

const MoreOptions = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-8 w-8 cursor-pointer hover:bg-zinc-900/10 dark:hover:bg-zinc-200/5 rounded-lg p-1"
        >
          <MoreVertical
            className="text-zinc-400 dark:text-zinc-200"
            size={22}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-8 mt-4 w-48">
        <DropdownMenuItem><Pencil className="mr-2 " size={15}/><span>Board Name</span></DropdownMenuItem>
        <DropdownMenuItem><Trash className="mr-2" size={15}/><span className="pt-px">Delete Board</span></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MoreOptions;
