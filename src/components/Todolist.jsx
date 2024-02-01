const Todolist = ({ todo, removeTodo, editTodo, editingIndex }) => {
    return (
      <ul className="mt-4 w-96 mx-auto">
        {todo.map((item, index) => (
          <li
            key={index}
            className={`flex justify-between items-center px-4 py-2 border-b border-gray-300 ${
              editingIndex === index ? "bg-gr y-200" : ""
            }`}
          >
            <span className="text-xl">{item}</span>
            <div className="flex items-center gap-2">
             
              <button
                onClick={() => removeTodo(index)}
                className="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
              >
                Remove
              </button>
              <button
                onClick={() => editTodo(index)}
                className="text-blue-500 hover:text-blue-700 focus:outline-none"
              >
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    );
  };
  
  export default Todolist;