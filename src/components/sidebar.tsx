import { GalleryHorizontalEnd, LayoutDashboard } from "lucide-react";
import NewBoard from "./new-board";

const Sidebar = () => {
  return (
    <aside className="border-r row-span-2">
      <div className="flex gap-3 items-center h-[90px] px-5">
        <GalleryHorizontalEnd size={30} />
        <span className="font-semibold text-2xl leading-5">Kanban</span>
      </div>
      <section className="text-zinc-400">
        <h3 className="uppercase text-sm ml-5 mb-5 mt-3">All boards (4)</h3>
        <ul className="">
          <li className="flex items-center gap-2 bg-zinc-300/40 dark:bg-zinc-100 w-11/12 p-3 text-zinc-800 rounded-r-full">
            <LayoutDashboard className="text-zinc-900" strokeWidth={1} />
            <span className="leading-6">Desktop Software</span>
          </li>
          <li className="p-3 flex items-center gap-2">
            <LayoutDashboard
              className="text-zinc-900 dark:text-zinc-200"
              strokeWidth={1}
            />
            <span className="leading-6">Desktop Software</span>
          </li>
          <li className="p-3 flex items-center gap-2">
            <LayoutDashboard
              className="text-zinc-900 dark:text-zinc-200"
              strokeWidth={1}
            />
            <span className="leading-6">Desktop Software</span>
          </li>
          <li className="p-3 flex items-center gap-2">
            <LayoutDashboard
              className="text-zinc-900 dark:text-zinc-200"
              strokeWidth={1}
            />
            <span className="leading-6">Desktop Software</span>
          </li>
          <li className="p-3 flex items-center gap-2">
            <NewBoard />
          </li>
        </ul>
      </section>
    </aside>
  );
};

export default Sidebar;
