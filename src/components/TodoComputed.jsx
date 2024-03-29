const TodoComputed = ({ computedItemsLeft, clearCompleted }) => {
    return (
        <section className="py-4 px-4 flex justify-between bg-white transition-all duration-1000 dark:bg-gray-700 rounded-b-md">
            <span className="text-gray-400">
                {computedItemsLeft} items left
            </span>
            <button className="text-gray-400" onClick={clearCompleted}>
                Clear completed
            </button>
        </section>
    );
};

export default TodoComputed;