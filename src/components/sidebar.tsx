import { GalleryHorizontalEnd, PlusCircle } from "lucide-react";
import NewBoard from "./new-board";
import useBoards from "../hooks/useBoards";
import BoardItem from "./board-item";
import { Outlet, useParams } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";

const Sidebar = () => {
  const { boards } = useBoards();

  const params = useParams();
  const thisBoardExist = boards.find((board) => board.id === params.id);

  return (
    <div className="grid grid-cols-[60px_auto] lg:grid-cols-[250px_auto] grid-rows-[90px_auto] h-screen">
      <aside className="border-r row-span-2 flex flex-col justify-between">
        <div>
          <div className="flex gap-3 items-center h-[90px] px-5">
            <GalleryHorizontalEnd size={30} />
            <span className="font-semibold text-2xl hidden lg:block leading-5">
              Kanban
            </span>
          </div>
          <section className="text-zinc-400">
            <h3 className="uppercase hidden lg:block text-sm ml-5 mb-5 mt-3">
              All boards ({boards.length})
            </h3>
            <ul className="text-sm tracking-wide">
              {boards.map((board) => (
                <li
                  key={board.id}
                  className="flex mt-2 lg:mt-4 lg:block lg:mr-4 justify-center lg:justify-start"
                >
                  <BoardItem id={board.id} name={board.name} />
                </li>
              ))}
              <li className="mt-4 mx-2 lg:mx-4">
                <NewBoard />
              </li>
            </ul>
          </section>
        </div>
        <div className="lg:mb-5 lg:mx-auto">
          <ModeToggle />
        </div>
      </aside>
      {params.id ? (
        thisBoardExist ? (
          <Outlet />
        ) : (
          <h2 className="text-2xl lg:text-3xl p-5 lg:p-0 font-bold text-center space-y-2 w-full h-screen flex flex-col justify-center">
            Sorry this board couldn't be found
          </h2>
        )
      ) : (
        <div className="text-center space-y-2 w-full h-screen flex flex-col justify-center p-5 lg:p-0">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Let's start a new Kanban ?
          </h2>
          <p className="text-base lg:text-lg">
            Click in{" "}
            <strong className="underline hidden lg:inline">
              Create New Board
            </strong>{" "}
            <strong className="underline lg:hidden">
              <PlusCircle size={20} className="inline" />
            </strong>{" "}
            to start
          </p>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
