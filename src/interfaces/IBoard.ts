import ITask from "./ITask";

interface IBoard {
  id: string;
  name: string;
  tasks: ITask[];
}

export default IBoard;
