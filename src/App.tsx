import Project from "@/components/project";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="font-Geist h-screen grid grid-cols-[250px_auto] grid-rows-[90px_auto]">
        <Sidebar/>
        <Project />
        <div className="m-2">
          <ModeToggle/>
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;
