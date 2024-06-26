import IconCheck from "./icons/IconCheck";
import IconCross from "./icons/IconCross";

const TodoItem = ({ todo, updateTodo, removeTodo }) => {

    const { id, title, completed } = todo;

    return (
        <article className="flex gap-4 border-b border-b-gray-400 dark:bg-gray-700">
            <button className={`h-5 w-5 flex-none rounded-full border-2 ${completed ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center" : "inline-block"}`}
                onClick={() => updateTodo(id)}
                >
                {completed && <IconCheck /> }
                
            </button>
            <p className={`grow text-gray-500 dark:text-gray-300 ${completed && "line-through"}`}>
                {title}
            </p>
            <button className="flex-none" onClick={() => removeTodo(id)}>
                <IconCross />
            </button>
        </article>
    );
};

export default TodoItem;