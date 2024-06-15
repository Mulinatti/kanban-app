import ISubtask from "./ISubtask";

interface ITask {
  id: string;
  name: string;
  description: string;
  status: string;
  subtasks: ISubtask[];
}

export default ITask;