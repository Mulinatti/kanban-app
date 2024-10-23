import IBoard from "@/interfaces/IBoard";
import { ReactNode, createContext, useEffect, useState } from "react";

interface BoardsContextProps {
  boards: IBoard[];
  setBoards: React.Dispatch<React.SetStateAction<IBoard[]>>;
}

interface BoardsProviderProps {
  children: ReactNode;
}

export const BoardsContext = createContext<BoardsContextProps>(
  {} as BoardsContextProps
);

export const BoardsProvider = ({ children }: BoardsProviderProps) => {
  const [boards, setBoards] = useState<IBoard[]>(() => {
    const storedData = localStorage.getItem("boards");
    return storedData ? JSON.parse(storedData) : [];
  });

  useEffect(() => {
    localStorage.setItem("boards", JSON.stringify(boards));
  }, [boards]);

  return (
    <BoardsContext.Provider value={{ boards, setBoards }}>
      {children}
    </BoardsContext.Provider>
  );
};

export default BoardsContext;
