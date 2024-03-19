import ITask from "@/interfaces/ITask";
import Task from "./task";
import IBoard from "@/interfaces/IBoard";

interface StatusBoardProps {
  tasks?: ITask[];
  board: IBoard;
}

const StatusBoard = ({ tasks, board }: StatusBoardProps) => {
  return (
    <ul className="space-y-3">
      {tasks!.map((task) => (
        <Task boardData={board} task={task} key={task.name} />
      ))}
    </ul>
  );
};

export default StatusBoard;
