import Board from "@/components/board";
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
              <Route path="/" element={<Sidebar />}>
                <Route path="/:id" element={<Board />} />
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
              "flex items-center text-sm p-4 rounded-md gap-2 ring-1 shadow-lg w-full -z-10",
            error: "text-red-400 ring-red-400 dark:ring-red-400/40 -z-10",
            success: "text-green-400 ring-green-500/50 dark:ring-green-500/20 -z-10",
            warning:
              "text-yellow-400 ring-yellow-400/50 dark:ring-yellow-400/20 -z-10",
            info: "text-blue-400 ring-blue-500/50 dark:ring-blue-500/20 -z-10",
            default: "-z-10",
          },
        }}
        duration={2000}
      />
    </ThemeProvider>
  );
}

export default App;
