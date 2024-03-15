import ITask from "@/interfaces/ITask";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface TaskProps {
  task: ITask;
}

const Task = ({ task }: TaskProps) => {
  const { name, subtasks } = task;

  return (
    <Button
      onClick={() => console.log("CARD")}
      className="text-left w-full h-full p-0 bg-transparent hover:bg-transparent"
    >
      <Card className="w-full h-full transition-colors cursor-pointer hover:bg-zinc-500/10 dark:hover:bg-zinc-500/5 shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg font-medium text-wrap">
            {name}
          </CardTitle>
          <CardContent className="p-0">
            <CardDescription className="font-normal">
              {subtasks.reduce((completed, subtask) => {
                if (subtask.done) {
                  return completed + 1;
                }
                return completed;
              }, 0)}
              /{subtasks.length} Subtasks completed
            </CardDescription>
          </CardContent>
        </CardHeader>
      </Card>
    </Button>
  );
};

export default Task;
