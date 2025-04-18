import { useState } from "react";
import Input from "./Input";

function AddTask({ onAddTaskClick }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <>
      <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow-sm mb-4 flex flex-col gap-4">
        <Input
          type="text"
          placeholder="Digite o título da tarefa"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <Input
          value={description}
          placeholder="Digite a Descrição da tarefa"
          onChange={(event) => setDescription(event.target.value)}
        />
        <button
          onClick={() => {
            if (!title.trim() || !description.trim()) {
              return alert("Preencha todos os campos!");
            }
            onAddTaskClick(title, description);
            setTitle("");
            setDescription("");
          }}
          className="bg-blue-400 p-4 rounded-md text-white"
        >
          Adicionar Tarefa
        </button>
      </div>
    </>
  );
}
export default AddTask;
