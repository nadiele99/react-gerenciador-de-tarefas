import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";
import Title from "./components/Title";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
    //passando os dados do localstorage pra dentro do useState
    // se não houver nada no localstorage, o valor padrão será um array vazio
    // o JSON.parse transforma a string do localStorage em um objeto javascript

    //lista pra exibir sem a funcao do localstorage
    /*[{
      id: 1,
      title: "Estudar",
      description: "Descrição da tarefa 1",
      completed: true,
    },
    {
      id: 2,
      title: "Trabalhar",
      description: "Descrição da tarefa 2",
      completed: false,
    },
    {
      id: 3,
      title: "Fazer a janta",
      description: "Descrição da tarefa 3",
      completed: false,
    },
  ]*/
  );
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    // pegando minha lista de tarefas e transformando em string
    // armazenando no localStorage
  }, [tasks]);
  // [tasks] serve pra atualizar a lista de tarefas quando houver uma mudança

 /*useEffect(() => {
    async function fetchTasks() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        {
          method: "GET",
        }
      );

      const data = await response.json();
      console.log(data);
      setTasks(data);
      // salvando os dados da requisição na variável de estado tasks
    }
    fetchTasks();
    // chamando a função fetchTasks, que faz uma requisição para a API
  }, []);*/
  // o segundo array vazio serve pra executar a função apenas uma vez quando o componente for montado. Quando o usuario acessa a aplicação pela primeira vez

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
    // atualizando a variável de estado tasks
  }
  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    // filter serve pra fazer a exececao pelo argumento taskId Ou seja vai ser mostrado todos menos o que esta sendo passado pelo argumemento taskId
    setTasks(newTasks);
    console.log("apagado com sucesso");
    // atualizando a variável de estado tasks, filtrando as tarefas pela execeção do id passado
  }
  function onAddTaskClick(title, description) {
    const newTasks = {
      id: v4(),
      // v4 gera um id aleatório
      title: title,
      description: description,
      completed: false,
    };
    // spread operator serve pra adicionar o novo elemento na lista de tarefas
    setTasks([...tasks, newTasks]);
  }
  return (
    <div className="w-screen h-screen bg-slate-500 flex flex-col items-center justify-center">
      <div className="w-[800px] space-y-4">
        <Title>Gerenciador de Tarefas</Title>
      </div>
      <AddTask onAddTaskClick={onAddTaskClick} />
      <Tasks
        tasks={tasks}
        onTaskClick={onTaskClick}
        onDeleteTaskClick={onDeleteTaskClick}
      />
    </div>
  );
}
export default App;
