import { useParams } from "react-router-dom";
import Header from "./header";
import Task from "./task";
import useBoards from "./hooks/useBoards";

const Project = () => {
  const { name } = useParams();
  const { boards } = useBoards();

  const kanban = boards.find((board) => board.name === name);

  console.log(kanban);

  return (
    <>
      <Header />
      <section>
        <ul className="grid grid-cols-3 gap-3 max-h-16 p-5">
          {kanban?.tasks.map((task) => (
            <Task task={task} key={task.name}/>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Project;
