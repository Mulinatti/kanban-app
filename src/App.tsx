import Project from "@/components/project";
import { ThemeProvider } from "@/components/theme-provider";
import {
  GalleryHorizontalEnd,
  LayoutDashboard,
  PlusCircle,
} from "lucide-react";
import { ModeToggle } from "./components/mode-toggle";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="font-Geist h-screen grid grid-cols-[250px_auto] grid-rows-[90px_auto]">
        <aside className="border-r row-span-2">
          <div className="flex gap-3 items-center h-[90px] px-5">
            <GalleryHorizontalEnd size={30} />
            <span className="font-semibold text-2xl leading-5">Kanban</span>
          </div>
          <section className="text-zinc-400">
            <h3 className="uppercase text-sm ml-5 mb-5 mt-3">All boards (4)</h3>
            <ul className="">
              <li className="flex items-center gap-2 bg-zinc-300/40 dark:bg-zinc-100 w-11/12 p-3 text-zinc-800 rounded-r-full">
                <LayoutDashboard className="text-zinc-900" strokeWidth={1} />
                <span className="leading-6">Desktop Software</span>
              </li>
              <li className="p-3 flex items-center gap-2">
                <LayoutDashboard
                  className="text-zinc-900 dark:text-zinc-200"
                  strokeWidth={1}
                />
                <span className="leading-6">Desktop Software</span>
              </li>
              <li className="p-3 flex items-center gap-2">
                <LayoutDashboard
                  className="text-zinc-900 dark:text-zinc-200"
                  strokeWidth={1}
                />
                <span className="leading-6">Desktop Software</span>
              </li>
              <li className="p-3 flex items-center gap-2">
                <LayoutDashboard
                  className="text-zinc-900 dark:text-zinc-200"
                  strokeWidth={1}
                />
                <span className="leading-6">Desktop Software</span>
              </li>
              <li className="p-3 flex items-center gap-2">
                <Dialog>
                  <DialogTrigger className="w-full flex gap-2 text-zinc-900 dark:text-zinc-200 hover:bg-zinc-400/20 dark:hover:bg-zinc-400/5  p-3 rounded-full"><PlusCircle size={18}/><span className="leading-5 text-sm">Create New Board</span></DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Are you absolutely sure?</DialogTitle>
                      <DialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </li>
            </ul>
          </section>
        </aside>
        <Project />
        <ModeToggle />
      </main>
    </ThemeProvider>
  );
}

export default App;
