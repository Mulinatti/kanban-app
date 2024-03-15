import { GalleryHorizontalEnd } from "lucide-react";
import NewBoard from "./new-board";
import useBoards from "./hooks/useBoards";
import BoardItem from "./board-item";

const Sidebar = () => {
  const { boards } = useBoards();

  return (
    <aside className="border-r row-span-2">
      <div className="flex gap-3 items-center h-[90px] px-5">
        <GalleryHorizontalEnd size={30} />
        <span className="font-semibold text-2xl leading-5">Kanban</span>
      </div>
      <section className="text-zinc-400">
        <h3 className="uppercase text-sm ml-5 mb-5 mt-3">All boards (4)</h3>
        <ul className="text-sm tracking-wide">
          {boards.map(board => (
            <BoardItem key={board.name + Math.random} name={board.name}/>
          ))}
          <li className="mt-4 mx-4">
            <NewBoard />
          </li>
        </ul>
      </section>
    </aside>
  );
};

export default Sidebar;
