
import { useState } from 'react'

function AddTask({onAddTaskClick}){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
return(
    <>
    <div  className="space-y-4 p-6 bg-slate-200 rounded-md shadow-sm mb-4 flex flex-col gap-4">
    <input type="text" placeholder="Digite o título da tarefa" className="w-full p-4 rounded-md text-black border-gray-800" 
    value={title}
    onChange={(event)=> setTitle(event.target.value)}
    />
   <input type="text" placeholder="Digite a descrição da tarefa" className="w-full p-4 rounded-md text-black border-gray-800"
   value={description}
   onChange={(event)=> setDescription(event.target.value)}
   />
    <button onClick={()=> {
    if(!title.trim()|| !description.trim()){ return alert("Preencha todos os campos!");}
    onAddTaskClick(title, description);
    setTitle("");
    setDescription("");
    }} className="bg-blue-400 p-4 rounded-md text-white">Adicionar Tarefa</button>
    </div>
    </>
    
)

}
export default AddTask;