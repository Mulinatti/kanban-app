import ITask from "@/interfaces/ITask";
import Task from "./task";

interface StatusBoardProps {
  tasks?: ITask[];
}

const StatusBoard = ({ tasks }: StatusBoardProps) => {
  return (
    <ul className="">
      {tasks!.map((task) => (
        <Task task={task} key={task.name} />
      ))}
    </ul>
  );
};

export default StatusBoard;
