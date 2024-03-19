import { PlusCircle, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import useBoards from "./hooks/useBoards";
import { useParams } from "react-router-dom";

const NewTask = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { setBoards } = useBoards();

  const { id } = useParams();

  const formSchema = z.object({
    name: z.string().min(1, {
      message: "Task name cannot be empty.",
    }),
    description: z.string().min(1, {
      message: "Description cannot be empty.",
    }),
    status: z.string(),
    subtasks: z.array(
      z.object({
        title: z.string().min(1, {
          message: "Subtask title cannot be empty",
        }),
        done: z.boolean(),
      })
    ),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      status: "todo",
      subtasks: [],
    },
  });

  const subtasksInput = useFieldArray({
    control: form.control,
    name: "subtasks",
  });

  const handleNewBoard = (values: z.infer<typeof formSchema>) => {

    if (values.status === "done") {
      values.subtasks.map((subtask) => (subtask.done = true));
    }

    setBoards(prevBoards => {
      return prevBoards.map(board => {
        if(board.id === id) {
          return {...board, tasks: [...board.tasks, values]}
        }
        return board;
      })
    })

    toast.success("New task created successfully");
    setIsDialogOpen(false);
    form.reset();
  };

  const appendNewSubtask = () => {
    subtasksInput.append({ title: "", done: false });
  };

  console.log(id);
  

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button className="flex gap-2">
          <PlusCircle size={20} />
          <span className="font-medium">Add New Task</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Task</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleNewBoard)}
            className="space-y-8"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea className="h-24 resize-none" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="space-y-2">
              <div className="mb-3">
                <FormLabel
                  className={`${
                    subtasksInput.fields.length > 0 ? "block" : "hidden"
                  }`}
                >
                  Subtasks
                </FormLabel>
              </div>
              {subtasksInput.fields.map((inputField, index) => (
                <FormField
                  key={inputField.id}
                  control={form.control}
                  name={`subtasks.${index}.title`}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex items-center gap-2">
                          <Input {...field} />
                          <Button
                            onClick={() => {
                              subtasksInput.remove(index);
                            }}
                            className="p-0 h-6 w-6"
                            variant="ghost"
                            type="button"
                          >
                            <X size={18} />
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
              <Button
                onClick={appendNewSubtask}
                className="gap-2 w-full"
                type="button"
                variant="secondary"
              >
                <PlusCircle size={18} />
                <span>Add New Subtask</span>
              </Button>
            </div>
            <div>
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="todo">To-do</SelectItem>
                        <SelectItem value="doing">Doing</SelectItem>
                        <SelectItem value="done">Done</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              ></FormField>
            </div>
            <DialogFooter>
              <Button type="submit">Create</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default NewTask;
