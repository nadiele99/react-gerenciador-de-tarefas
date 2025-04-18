import { ChevronLeftIcon } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const navegate = useNavigate();
  // O hook useSearchParams é usado para acessar os parâmetros de consulta da URL atual.
  // Ele retorna um array com dois elementos: o primeiro é um objeto URLSearchParams que contém os parâmetros de consulta, e o segundo é uma função para atualizar esses parâmetros.
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="w-screen h-screen bg-slate-500 flex flex-col items-center justify-center p-6 ">
      <div className="w-[500px]">
     <div className="flex justify-center relative">
      <button className="absolute left-0 top-0 p-2 bg-slate-400 rounded-md text-white mb-6" onClick={() => navegate(-1)}>
        <ChevronLeftIcon className="text-slate-100" size={32} />
      </button>
<Title>Detalhes da Tarefa</Title>
        </div>
      </div>
      <div className="bg-slate-400  flex-col justify-center p-6 rounded-md shadow-sm">
        <h2 className="text-xl text-slate-600 font-bold">{title}</h2>
        <p className=" text-slate-600 font-medium">{description}</p>
      </div>
    </div>
  );
}
export default TaskPage;
