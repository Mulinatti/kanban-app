import { useParams } from "react-router-dom";
import Header from "./header";
import useBoards from "../hooks/useBoards";
import StatusBoard from "./status-board";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { v4 as uuid } from "uuid";

const Board = () => {
  const { id } = useParams();
  const { boards, setBoards } = useBoards();

  const kanban = boards.find((board) => board.id === id);

  console.log(kanban);

  const status = [
    {
      id: uuid(),
      name: "to-do",
      color: "bg-orange-600",
    },
    {
      id: uuid(),
      name: "doing",
      color: "bg-blue-600",
    },
    {
      id: uuid(),
      name: "done",
      color: "bg-emerald-500",
    },
  ];

  const handleDragEnd = (draggedTask: DropResult) => {
    console.log(draggedTask);
  
    const { destination, source, draggableId } = draggedTask;

    if(!destination) return;

    if(destination?.droppableId == source.droppableId && source.index == destination.index )
      return;

    setBoards((prevBoards) => {
      const updatedBoards = prevBoards.map((board) => {
        if (board.id === id) {

          const updatedTasks = Array.from(board.tasks);
          
          const movedTaskIndex = updatedTasks.findIndex(task => task.id === draggableId);
          const movedTask = updatedTasks[movedTaskIndex];

          updatedTasks.splice(movedTaskIndex, 1);

          if (source.droppableId !== destination.droppableId) {
            movedTask.status = destination.droppableId;
          }
          
          updatedTasks.splice(destination.index, 0, movedTask);

          return { ...board, tasks: updatedTasks };
        }
        return board;
      });

      return updatedBoards;
    });

  };
  
  return (
    <>
      <Header name={kanban!.name} />
      <DragDropContext onDragEnd={handleDragEnd}>
        <ul className="grid grid-cols-3 gap-3 p-5">
          {status.map((stat) => (
            <li
              className="hover:bg-muted/50 p-2 transition-all rounded-lg"
              key={stat.name}
            >
              <div className="flex items-center gap-2.5 mb-5">
                <div
                  className={`${stat.color} w-3.5 h-3.5 rounded-full flex justify-center items-center`}
                >
                  <div className="h-2 w-2 rounded-full bg-white/30"></div>
                </div>
                <h3 className={"font-medium capitalize"}>{stat.name}</h3>
              </div>
              <StatusBoard
                status={stat.name}
                board={kanban!}
                tasks={kanban?.tasks.filter(
                  (task) => task.status === stat.name
                )}
              />
            </li>
          ))}
        </ul>
      </DragDropContext>
    </>
  );
};

export default Board;
