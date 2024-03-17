import Project from "@/components/project";
import { ThemeProvider } from "@/components/theme-provider";
import Sidebar from "@/components/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BoardsProvider } from "./contexts/BoardsContext";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="font-Geist h-screen">
        <BoardsProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Sidebar/>}>
                <Route path="/:id" element={<Project />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </BoardsProvider>
      </main>
      <Toaster
        toastOptions={{
          unstyled: true,
          classNames: {
            toast:
              "flex items-center text-sm p-4 rounded-md gap-2 ring-1 shadow-lg ring-green-500/50 dark:ring-green-500/20 w-full",
            error: "text-red-400 ring-red-400 dark:ring-red-400/40",
            success: "text-green-400",
            warning: "text-yellow-400",
            info: "bg-blue-400",
          },
        }}
        duration={2000}
      />
    </ThemeProvider>
  );
}

export default App;
