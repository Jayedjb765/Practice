import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

export default function TaskCard() {
  return (
    <div className="border px-5 py-3 rounded-md">
      <div className="flex  justify-between items-center">
        <div className=" flex gap-2 items-center">
          <div className="size-3 rounded-b-full bg-green-500"></div>
          <h1>Task totle</h1>
        </div>
        <div className="flex gap-3 items-center">
          <Button variant="link" className="p-0 text-red-500">
            <Trash2 />
          </Button>
        </div>
      </div>
    </div>
  );
}
