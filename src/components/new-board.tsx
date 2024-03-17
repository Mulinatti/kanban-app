import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusCircle } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { toast } from "sonner";
import useBoards from "./hooks/useBoards";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

const NewBoard = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { boards, setBoards } = useBoards();
  const navigate = useNavigate();

  const formSchema = z.object({
    id: z.string(),
    name: z.string().min(1, {
      message: "Board name cannot be empty.",
    }).toLowerCase(),
    tasks: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
        status: z.string(),
        subtasks: z.array(z.object({
          title: z.string(),
          done: z.boolean()
        })),
      })
    ),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: "",
      name: "",
      tasks: [],
    },
  });

  const handleNewBoard = (values: z.infer<typeof formSchema>) => {
    values.id = uuid();
    setBoards([...boards, values]);
    toast.success("New board created successfully");
    setIsDialogOpen(false);
    form.reset();
    navigate(`/${values.id}`);
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="rounded-full flex gap-2 w-full font-normal"
        >
          <PlusCircle size={18} />
          <span className="leading-5 text-sm">Create New Board</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-xl">
            Add a new board to your Kanban
          </DialogTitle>
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
                  <FormLabel>Board name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Create</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default NewBoard;
