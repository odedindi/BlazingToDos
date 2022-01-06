let todos: ITodo[] = [];

const inMemory = {
	addTodo: (todo: ITodo) => (todos = [...todos, todo]),
	toggleTodo: (todoId: ITodo['id']) =>
		(todos = todos.map((todo) =>
			todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
		)),
	updateTodo: (updatedTodo: ITodo) =>
		(todos = todos.map((todo) =>
			todo.id === updatedTodo.id ? updatedTodo : todo,
		)),
	removeTodo: (todoId: ITodo['id']) =>
		(todos = todos.filter(({ id }) => id !== todoId)),
	getAll: (): ITodo[] => todos,
	getTodo: (todoId: ITodo['id']) => todos.filter(({ id }) => id === todoId),
};

export default inMemory;
