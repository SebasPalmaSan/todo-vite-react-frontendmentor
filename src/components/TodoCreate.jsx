import { useState } from "react";

const TodoCreate = ({createTodo}) => {

    const [title, setTitle] = useState('')

    const handleSubmitAddTodo = (e) => {
        e.preventDefault();
        
        if (!title.trim()) {
            return setTitle('');
        }

        createTodo(title);
        setTitle('');
    }

    return (
        <form onSubmit={handleSubmitAddTodo} className="bg-white dark:bg-gray-700 transition-all duration-1000 rounded-md overflow-hidden py-4 flex gap-4 items-center px-4">
            <span className= "rounded-full border-2 inline-block  h-5 w-5 transition-all duration-1000"></span>
            <input 
                type="text" 
                placeholder="Create a new todo..."
                className="w-full text-gray-400 transition-all duration-1000 dark:bg-gray-700 outline-none"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    );
};

export default TodoCreate;