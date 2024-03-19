import { useParams } from "react-router-dom";
import Header from "./header";
import useBoards from "./hooks/useBoards";
import StatusBoard from "./status-board";

const Project = () => {
  const { id } = useParams();
  const { boards } = useBoards();

  const kanban = boards.find((board) => board.id === id);

  console.log(kanban);

  const status = [
    {
      name: "todo",
      color: "bg-orange-600",
    },
    {
      name: "doing",
      color: "bg-blue-600",
    },
    {
      name: "done",
      color: "bg-emerald-500",
    },
  ];

  return (
    <>
      <Header name={kanban!.name} />
      <section className="grid grid-cols-3 gap-3 max-h-16 p-5">
        {status.map(
          (stat) =>
            kanban?.tasks.find((task) => stat.name === task.status) && (
              <div key={stat.name}>
                <div className="flex items-center gap-2.5 mb-5">
                  <div
                    className={`${stat.color} w-3.5 h-3.5 rounded-full flex justify-center items-center`}
                  >
                    <div className="h-2 w-2 rounded-full bg-white/30"></div>
                  </div>
                  <h3 className={"font-medium capitalize"}>{stat.name}</h3>
                </div>
                <StatusBoard
                  board={kanban}
                  tasks={kanban?.tasks.filter(
                    (task) => task.status === stat.name
                  )}
                />
              </div>
            )
        )}
      </section>
    </>
  );
};

export default Project;
