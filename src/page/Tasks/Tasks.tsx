import AddTaskModal from "@/components/AddTaskModal/AddTaskmodal"
import { useAppSelector } from "@/redux/hook"

function Tasks() {
  const tasks = useAppSelector((state) => state.todo.tasks)

  return (
    <div className="w-11/12 mx-auto my-10">
      <div className="flex justify-between items-center my-4">
        <h1 className="text-2xl font-bold mb-4">Task List</h1>
        <AddTaskModal/>
      </div>
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="p-4 border border-gray-200 rounded shadow-sm bg-white"
          >
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
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

            <button className="text-sm px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tasks
