interface ITask {
  name: string;
  description: string;
  subtasks?: string[];
}

export default ITask;