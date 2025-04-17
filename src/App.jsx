import { useState } from 'react'
import AddTask from './components/AddTask';
import Tasks from './components/Tasks'
import {v4} from 'uuid';

function App(){

  const [tasks, setTasks] = useState([{
    id: 1,
    title: 'Estudar',
    description: 'Descrição da tarefa 1',
    completed: true
  },
  {
    id: 2,
    title: 'Trabalhar',
    description: 'Descrição da tarefa 2',
    completed: false
  },
  {
    id: 3,
    title: 'Fazer a janta',
    description: 'Descrição da tarefa 3',
    completed: false
    
  }
]);
function onTaskClick(taskId){

  const newTasks = tasks.map(task => {
    if(task.id === taskId){
      return{...task,completed	: !task.completed};
    }
      return task;
    });
    setTasks(newTasks); 
    // atualizando a variável de estado tasks
}
function onDeleteTaskClick(taskId){
  const newTasks = tasks.filter(task => task.id !== taskId);
  // filter serve pra fazer a exececao pelo argumento taskId Ou seja vai ser mostrado todos menos o que esta sendo passado pelo argumemento taskId
setTasks(newTasks);
console.log("apagado com sucesso");
  // atualizando a variável de estado tasks, filtrando as tarefas pela execeção do id passado
}
function  onAddTaskClick(title, description){
  const newTasks = {
    id: v4(),
    // v4 gera um id aleatório
    title: title,
    description: description,
    completed: false,
  }
  // spread operator serve pra adicionar o novo elemento na lista de tarefas
  setTasks([...tasks, newTasks])
}
  return (
    <div className="w-screen h-screen bg-slate-500 flex flex-col items-center justify-center">
     <div className="w-[800px]">
     <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>
     </div>
    <AddTask onAddTaskClick={onAddTaskClick}/>
    <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick}/>
    </div>
  );

}
export default App;