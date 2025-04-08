import { AddTaskModal } from "@/modules/tasks/AddTaskModal";
import TaskCard from "@/modules/tasks/TaskCard";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

export default function Tasks() {
  const tasks = useAppSelector(selectTasks);
  console.log(tasks);

  return (
    <div className="mx-auto max-w-7xl  px-5 mt-56">
      <div className="flex justify-between items-center -mt-48">
        <h2>Tasks</h2>
        <AddTaskModal />
      </div>
      <div className="space-y-5 mt-5">
        {tasks.map((task) => (
          <TaskCard task={task} />
        ))}
      </div>
    </div>
  );
}
