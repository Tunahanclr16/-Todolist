import  { useState } from "react";
import Todolist from "./Todolist";

export default function TodoForm() {
  const [todo, setTodo] = useState([]);
  const [todos, setTodos] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  // Yeni bir todo eklemek için kullanılan fonksiyon
  const addTodo = (e) => {
    e.preventDefault();
    if (todos.trim() !== "") {
      if (editingIndex !== null) {
        // Eğer bir todo güncelleniyorsa
        updateTodo(editingIndex, todos);
        setEditingIndex(null);
      } else {
        // Yeni bir todo ekleniyorsa
        setTodo([todos, ...todo]);
      }
      setTodos("");
    }
  };

  // Belirli bir index'teki todo öğesini silmek için kullanılan fonksiyon
  const removeTodo = (index) => {
    const updatedTodos = [...todo];
    updatedTodos.splice(index, 1);
    setTodo(updatedTodos);
    setEditingIndex(null); // Güncelleme modunu sıfırla
  };

  // Belirli bir index'teki todo öğesini güncellemek için kullanılan fonksiyon
  const updateTodo = (index, updatedText) => {
    const updatedTodos = [...todo];
    updatedTodos[index] = updatedText;
    setTodo(updatedTodos);
  };

  // Belirli bir index'teki todo öğesini düzenleme moduna almak için kullanılan fonksiyon
  const editTodo = (index) => {
    setTodos(todo[index]);
    setEditingIndex(index);
  };

  return (
    <>
      <div className="mx-auto flex justify-center items-center mt-12">
        <form onSubmit={addTodo} className="flex items-center">
          <input
            onChange={(e) => setTodos(e.target.value)}
            value={todos}
            type="text"
            placeholder="Add todo"
            className="border border-gray-300 px-4 py-2 rounded-l focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 focus:outline-none"
          >
            {editingIndex !== null ? "Update" : "Add"}
          </button>
        </form>
      </div>
      <div className="flex  flex-col">
        <Todolist
          todo={todo}
          removeTodo={removeTodo}
          editTodo={editTodo}
          editingIndex={editingIndex}
        />
      </div>
    </>
  );
}
