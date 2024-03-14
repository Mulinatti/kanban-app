import BoardsContext from "@/contexts/BoardsContext";
import { useContext } from "react";

const useBoards = () => {
  const { boards, setBoards } = useContext(BoardsContext);

  return { boards, setBoards };
};

export default useBoards;
