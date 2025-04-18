function Input(props) {
  return (
    <input
      type="text"
      className="w-full p-4 rounded-md text-black border-gray-800"
    {...props} //serve pra espalhar as propriedades do componente pai para o componente filho
    />
  );
}

export default Input;
