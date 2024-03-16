import { LayoutDashboard } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useParams } from "react-router-dom";

interface BoardItemProps {
  name: string;
}

const BoardItem = ({name}: BoardItemProps) => {

  const params = useParams();

  return (
    <Link to={`/${name}`}>
      <Button className={`${params.name === name ? "text-secondary hover:bg-foreground/85" : "bg-transparent text-foreground ring-1 ring-primary-foreground hover:bg-muted hover:ring-muted"} w-full rounded-r-full flex justify-start gap-3`}>
        <LayoutDashboard
          className=""
          strokeWidth={2}
        />
        <span className="leading-6">{name}</span>
      </Button>
    </Link>
  );
};

export default BoardItem;
