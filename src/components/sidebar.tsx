import { GalleryHorizontalEnd, LayoutDashboard } from "lucide-react";
import NewBoard from "./new-board";
import { Button } from "./ui/button";

const Sidebar = () => {
  return (
    <aside className="border-r row-span-2">
      <div className="flex gap-3 items-center h-[90px] px-5">
        <GalleryHorizontalEnd size={30} />
        <span className="font-semibold text-2xl leading-5">Kanban</span>
      </div>
      <section className="text-zinc-400">
        <h3 className="uppercase text-sm ml-5 mb-5 mt-3">All boards (4)</h3>
        <ul className="text-sm tracking-wide">
          <li className="flex items-center gap-2 mr-4">
            <Button className="bg-transparent text-zinc-100/50 flex justify-start gap-2 rounded-none hover:bg-primary-foreground rounded-r-full w-full">
              <LayoutDashboard
                className="text-primary dark:text-zinc-200"
                strokeWidth={2}
              />
              <span className="leading-6 text-primary">Desktop Software</span>
            </Button>
          </li>
          <li className="mt-4 mx-4">
            <NewBoard/>
          </li>
        </ul>
      </section>
    </aside>
  );
};

export default Sidebar;
