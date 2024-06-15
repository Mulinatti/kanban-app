import ITask from "@/interfaces/ITask";
import Task from "./task";
import IBoard from "@/interfaces/IBoard";
import { Droppable } from "react-beautiful-dnd";

interface StatusBoardProps {
  status: string;
  tasks?: ITask[];
  board: IBoard;
}

const StatusBoard = ({ status, tasks, board }: StatusBoardProps) => {
  return (
    <Droppable droppableId={`${status}`}>
      {
        (provided) => (
        <ul className="space-y-3 h-[424px] max-h-[424px] overflow-y-scroll scrollbar scrollbar-w-1 scrollbar-thumb-rounded-full scrollbar-thumb-primary/30" ref={provided.innerRef} {...provided.droppableProps}>
          {tasks!.map((task, index) => (
            <Task index={index} boardData={board} task={task} key={task.id} />
          ))}
          <div className="relative">
            {provided.placeholder}
          </div>
        </ul>
        )  
      }
    </Droppable>
  );
};

export default StatusBoard;
