export interface ITask {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  priority: "high" | "medium" | "low";
  assignto: string | null;
}

export interface IUser {
  id: string;
  name: string;
}
