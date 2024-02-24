import Project from "@/components/project"
import { ThemeProvider } from "@/components/theme-provider"
import { GalleryHorizontalEnd } from "lucide-react"
import { ModeToggle } from "./components/mode-toggle"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="font-Geist h-screen grid grid-cols-[250px_auto] grid-rows-[90px_auto]">
        <aside className="border-r row-span-2">
          <div className="flex gap-3 items-center h-[90px] px-5">
            <GalleryHorizontalEnd size={30}/>
            <span className="font-semibold text-2xl leading-5">Kanban</span>
          </div>
          <section className="text-zinc-400">
            <h3 className="uppercase text-sm ml-5 mb-5">All boards</h3>
            <ul className="">
              <li className="bg-zinc-300/40 dark:bg-zinc-100 w-11/12 p-2.5 text-zinc-800 font-medium rounded-r-full">Desktop Software</li>
              <li className="p-2.5">Desktop Software</li>
              <li className="p-2.5">Desktop Software</li>
              <li className="p-2.5">Desktop Software</li>
            </ul>
          </section>
        </aside>
        <Project/>
        <ModeToggle/>
      </main>
    </ThemeProvider>
  )
}

export default App
