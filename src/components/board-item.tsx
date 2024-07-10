import { LayoutDashboard } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useParams } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface BoardItemProps {
  id: string;
  name: string;
}

const BoardItem = ({ id, name }: BoardItemProps) => {
  const params = useParams();

  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild className="w-full flex justify-center lg:block">
          <Link to={`/${id}`}>
            <Button
              className={`${
                params.id === id
                  ? "text-secondary hover:bg-foreground"
                  : "bg-transparent text-foreground lg:ring-1 lg:ring-primary-foreground hover:bg-muted hover:ring-muted"
              } lg:w-full lg:rounded-none lg:rounded-r-full rounded-xl p-2 flex justify-start gap-3`}
            >
              <LayoutDashboard className="" strokeWidth={2} />
              <span className="leading-6 hidden lg:inline capitalize">
                {name}
              </span>
            </Button>
          </Link>
        </TooltipTrigger>
        <TooltipContent className="capitalize">
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default BoardItem;
