
import { taskIsCompleted , taskDelete, selectTask, taskFilter} from "@/redux/featurs/task.slice"
import { useAppDispatch, useAppSelector } from "@/redux/hook"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AddTaskModal from "@/components/AddTaskModal/AddTaskmodal"
import type { ITask } from "@/task.type"

function Tasks() {
  const tasks = useAppSelector(selectTask)

//   const tasks = useAppSelector((state) => state.todo.tasks)

  const dispatch = useAppDispatch()

  return (
    <div className="w-11/12 mx-auto my-10">
      <div className="flex justify-between items-center my-4">
        <h1 className="text-2xl font-bold mb-4">Task List</h1>

        <Tabs defaultValue="all" className="w-1/2">
          <TabsList>
            <TabsTrigger onClick={() => dispatch(taskFilter("all"))} value="all">All</TabsTrigger>
            <TabsTrigger onClick={() => dispatch(taskFilter("low"))} value="low">Low</TabsTrigger>
            <TabsTrigger onClick={() => dispatch(taskFilter("medium"))} value="medium">Medium</TabsTrigger>
            <TabsTrigger onClick={() => dispatch(taskFilter("high"))} value="high">High</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <AddTaskModal/>
      </div>
      <ul className="space-y-4">
        {tasks.map((task : ITask) => (
          <li
            key={task.id}
            className="p-4 border border-gray-200 rounded shadow-sm bg-white"
          >
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <input onClick={() => dispatch(taskIsCompleted(task.id))} type="checkbox" className="w-4 h-4" />
                <h2 className="text-lg font-semibold">{task.title}</h2>
              </div>

              <span
                className={`text-sm px-2 py-1 rounded ${
                  task.priority === "high"
                    ? "bg-red-100 text-red-700"
                    : task.priority === "medium"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {task.priority}
              </span>
            </div>

            <p className="text-gray-600 mb-2">{task.description}</p>

            <div className="text-sm text-gray-500 mb-3">
              <p>Due: {task.dueDate}</p>
            </div>

            <button onClick={ () => dispatch(taskDelete(task.id))} className="text-sm px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tasks
