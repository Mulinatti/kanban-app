import { LayoutDashboard } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useParams } from "react-router-dom";

interface BoardItemProps {
  id: string;
  name: string;
}

const BoardItem = ({id, name}: BoardItemProps) => {

  const params = useParams();

  return (
    <Link to={`/${id}`}>
      <Button className={`${params.id === id ? "text-secondary hover:bg-foreground/85" : "bg-transparent text-foreground ring-1 ring-primary-foreground hover:bg-muted hover:ring-muted"} w-full rounded-r-full flex justify-start gap-3`}>
        <LayoutDashboard
          className=""
          strokeWidth={2}
        />
        <span className="leading-6 capitalize">{name}</span>
      </Button>
    </Link>
  );
};

export default BoardItem;
