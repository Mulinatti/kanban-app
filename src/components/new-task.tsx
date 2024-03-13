import { PlusCircle, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
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

const NewTask = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const formSchema = z.object({
    name: z.string().min(1, {
      message: "Task name must have at least 1 character.",
    }),
    description: z.string().min(1, {
      message: "Descriptions must have at least 1 character.",
    }),
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
      subtasks: [],
    },
  });

  const subtasksInput = useFieldArray({
    control: form.control,
    name: "subtasks",
  });

  const handleNewBoard = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast.success("New task created successfully");
    setIsDialogOpen(false);
    form.reset();
  };

  const appendNewSubtask = () => {
    subtasksInput.append({ title: "", done: false });
  };

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
            <Button type="submit">Create</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default NewTask;
