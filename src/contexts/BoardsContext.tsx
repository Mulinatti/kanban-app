import IBoard from "@/interfaces/IBoard";
import { ReactNode, createContext, useState } from "react";

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

  return (
    <BoardsContext.Provider value={{ boards, setBoards }}>
      {children}
    </BoardsContext.Provider>
  );
};

export default BoardsContext;
