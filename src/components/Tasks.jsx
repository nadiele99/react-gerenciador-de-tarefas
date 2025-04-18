import { CheckCheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onGoDetailsClick(task) {
    const query = new URLSearchParams({
      title: task.title,
      description: task.description,
    }); 
    navigate(`/task?${query}`);
    // Outra forma de fazer a mesma coisa so que menos seguro:
    // navigate(`/task?title=${task.title}&description=${task.description}`);
  }
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow-sm">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 w-full text-left flex items-center gap-2 text-white p-4 rounded-md ${
              task.completed && "line-through"
            }`}
          >
            {task.completed && <CheckCheckIcon />}
            {task.title}
          </button>
          <Button
            onClick={() => {
              onGoDetailsClick(task);
            }}
            
          >
            <ChevronRightIcon />
          </Button>
          <Button
            onClick={() => {
              onDeleteTaskClick(task.id);
            }}
            
          >
            <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}
export default Tasks;
