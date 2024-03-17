import { GalleryHorizontalEnd } from "lucide-react";
import NewBoard from "./new-board";
import useBoards from "./hooks/useBoards";
import BoardItem from "./board-item";
import { Outlet, useParams } from "react-router-dom";

const Sidebar = () => {
  const { boards } = useBoards();

  const params = useParams();
  const thisBoardExist = boards.find((board) => board.id === params.id);

  return (
    <div className="grid grid-cols-[250px_auto] grid-rows-[90px_auto] h-screen">
      <aside className="border-r row-span-2">
        <div className="flex gap-3 items-center h-[90px] px-5">
          <GalleryHorizontalEnd size={30} />
          <span className="font-semibold text-2xl leading-5">Kanban</span>
        </div>
        <section className="text-zinc-400">
          <h3 className="uppercase text-sm ml-5 mb-5 mt-3">All boards (4)</h3>
          <ul className="text-sm tracking-wide">
            {boards.map((board) => (
              <li key={board.id} className="mr-4 mb-2">
                <BoardItem id={board.id} name={board.name} />
              </li>
            ))}
            <li className="mt-4 mx-4">
              <NewBoard />
            </li>
          </ul>
        </section>
      </aside>
      {
        params.id ? (
          thisBoardExist ? (
            <Outlet />
          ) : (
            "Sorry this board couldn't be found"
          )
        ) : (
          "Let's start a new kanban ?"
        ) // make a component to this messages
      }
    </div>
  );
};

export default Sidebar;
