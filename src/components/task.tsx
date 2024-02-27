import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const Task = () => {
  return (
    <Button onClick={() => console.log("CARD")}  className="text-left w-full h-full p-0 bg-transparent hover:bg-transparent">
      <Card  className="w-full h-full transition-colors cursor-pointer hover:bg-zinc-500/10 dark:hover:bg-zinc-500/5 shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg font-medium text-wrap">Make a form in the user edition profile sign up</CardTitle>
          <CardContent className="p-0">
            <CardDescription className="font-normal">0/2 Subtasks to complete.</CardDescription>
          </CardContent>
        </CardHeader>
      </Card>
    </Button>
  );
};

export default Task;
