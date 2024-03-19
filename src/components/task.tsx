import ITask from "@/interfaces/ITask";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Checkbox } from "./ui/checkbox";
import useBoards from "./hooks/useBoards";
import { useEffect, useState } from "react";
import ISubtask from "@/interfaces/ISubtask";
import IBoard from "@/interfaces/IBoard";

interface TaskProps {
  task: ITask;
  boardData: IBoard;
}

const Task = ({ task, boardData }: TaskProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [taskData, setTaskData] = useState<ITask>(task);
  const [selectedSubtasks, setSelectedSubtasks] = useState<ISubtask[]>(task.subtasks);

  const { setBoards } = useBoards();

  const onCheckedChange = (isCheck: boolean, title: string) => {
    const checkedSubtasks = selectedSubtasks.map((subtask) => {
      if (subtask.title === title) return { ...subtask, done: isCheck };
      return subtask;
    });
    setSelectedSubtasks(checkedSubtasks);
  };

  const handleCheckedSubtasks = () => {
    setTaskData({ ...task, subtasks: selectedSubtasks });

    const modifiedTasks = boardData.tasks.map((task) => {
      if (task.name === taskData.name) {
        return { ...task, subtasks: selectedSubtasks };
      }
      return task;
    });

    console.log(modifiedTasks);

    setBoards((prevBoards) => {
      return prevBoards.map((board) => {
        if (board.id === boardData.id) {
          return { ...board, tasks: modifiedTasks };
        }
        return board;
      });
    });
  };

  useEffect(() => {
    setSelectedSubtasks(task.subtasks);
  }, [isDialogOpen]);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild className="w-full">
        <Button
          onClick={() => console.log("CARD")}
          className="text-left w-full h-full p-0 bg-transparent hover:bg-transparent"
        >
          <Card className="w-full h-full transition-colors cursor-pointer hover:bg-zinc-500/10 dark:hover:bg-zinc-500/5 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg font-medium text-wrap capitalize">
                {task.name}
              </CardTitle>
              <CardContent className="p-0">
                <CardDescription className="font-normal">
                  {task.subtasks.length
                    ? `${task.subtasks.reduce((completed, subtask) => {
                        if (subtask.done) {
                          return completed + 1;
                        }
                        return completed;
                      }, 0)}/${task.subtasks.length} Subtasks completed`
                    : "No Subtasks"}
                </CardDescription>
              </CardContent>
            </CardHeader>
          </Card>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{task.name}</DialogTitle>
        </DialogHeader>
        <DialogDescription>{task.description}</DialogDescription>
        <div>
          {selectedSubtasks.map((subtask) => (
            <div key={subtask.title} className="flex items-center gap-2">
              <Checkbox
                checked={subtask.done}
                onCheckedChange={(e) =>
                  onCheckedChange(e as boolean, subtask.title)
                }
              />
              <label className={`${subtask.done && "line-through"} text-sm`}>{subtask.title}</label>
            </div>
          ))}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button onClick={handleCheckedSubtasks} type="button">
              Save
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Task;
