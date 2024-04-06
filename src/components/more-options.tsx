import { Pencil, Trash } from "lucide-react";
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
import { Button } from "./ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import useBoards from "./hooks/useBoards";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Board name cannot be empty",
  }),
});

const MoreOptions = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();

  const { boards, setBoards } = useBoards();
  const { id } = useParams();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const handleNewBoardName = (values: z.infer<typeof formSchema>) => {
    const boardToChange = boards.find((board) => board.id === id);

    if (boardToChange) {
      setBoards((prevBoards) => {
        return prevBoards.map((board) => {
          if (board.id === boardToChange.id) {
            return { ...board, name: values.name };
          }
          return board;
        });
      });
      setIsDialogOpen(false);
      toast.success("Board name changed successfully!");
    }
  };

  const handleBoardDeletion = () => {
    const boardNavigationIndex = boards.findIndex((board) => board.id === id);

    setBoards((prevBoards) => {
      return prevBoards.filter((board) => board.id !== id);
    });
    toast.warning("Board deleted");
    navigate(
      boardNavigationIndex ? `/${boards[boardNavigationIndex - 1].id}` : "/"
    );
  };

  return (
    <div className="flex gap-5">
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button
            className="bg-transparent hover:bg-transparent text-pastel p-0"
            variant="ghost"
          >
            <Pencil size={16} />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit this board name</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleNewBoardName)}
              className="space-y-8"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New board name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button type="submit">Save</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="bg-transparent hover:bg-transparent text-pastel p-0"
            variant="ghost"
          >
            <Trash size={16} />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Are you sure you want to delete this board ?
            </DialogTitle>
          </DialogHeader>
          <DialogDescription>This action can't be undone</DialogDescription>
          <DialogFooter>
            <DialogClose asChild>
              <Button onClick={handleBoardDeletion} variant="destructive">
                Delete
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MoreOptions;
