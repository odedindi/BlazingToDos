export const searchTodos = (query: string, todos: Todo[]): Todo[] =>
	todos.filter(({ content }) =>
		content.toLowerCase().includes(query.trim().toLowerCase()),
	);

export default searchTodos;
