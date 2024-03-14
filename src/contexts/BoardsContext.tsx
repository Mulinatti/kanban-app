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
  const [boards, setBoards] = useState<IBoard[]>([]);

  useEffect(() => {
    console.log(boards);
  }, [boards]);

  return (
    <BoardsContext.Provider value={{ boards, setBoards }}>
      {children}
    </BoardsContext.Provider>
  );
};

export default BoardsContext;
