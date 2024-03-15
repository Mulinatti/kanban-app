import ISubtask from "./ISubtask";

interface ITask {
  name: string;
  description: string;
  status: string;
  subtasks: ISubtask[];
}

export default ITask;