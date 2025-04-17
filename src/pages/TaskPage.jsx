import { useSearchParams } from "react-router-dom";

function TaskPage(){
  const [searchParams] = useSearchParams(); 
  // O hook useSearchParams é usado para acessar os parâmetros de consulta da URL atual.
  // Ele retorna um array com dois elementos: o primeiro é um objeto URLSearchParams que contém os parâmetros de consulta, e o segundo é uma função para atualizar esses parâmetros.  
 const title = searchParams.get("title");
 const description = searchParams.get("description");
 
  return( 
    <div className="w-screen h-screen bg-slate-500 flex flex-col items-center justify-center p-6 ">
    <h1>{title}</h1>
    <p>{description}</p>
    </div>
    )
}
export default TaskPage;