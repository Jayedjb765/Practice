import { AddTaskModal } from "@/modules/tasks/AddTaskModal";
import TaskCard from "@/modules/tasks/TaskCard";
import { selectTasks, updateFilter } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Tasks() {
  const tasks = useAppSelector(selectTasks);
  const dispatch = useAppDispatch();
  console.log(tasks);

  return (
    <div className="mx-auto max-w-7xl  px-5 mt-56">
      <div className="flex justify-end items-center -mt-48 gap-5">
        <h2 className="mr-auto">Tasks</h2>
        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              onClick={() => dispatch(updateFilter("all"))}
              value="all"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("low"))}
              value="low"
            >
              Low
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("medium"))}
              value="medium"
            >
              Medium
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("high"))}
              value="high"
            >
              High
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModal />
      </div>
      <div className="space-y-5 mt-5">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
}
