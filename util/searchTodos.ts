export const searchTodos = (query: string, todos: ITodo[]): ITodo[] =>
	todos.filter(({ content }) =>
		content.toLowerCase().includes(query.trim().toLowerCase()),
	);

export default searchTodos;
