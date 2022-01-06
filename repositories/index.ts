import generateTodo from 'util/generateTodo';

export const getInitialTodos = (): ITodo[] => {
	const initialTodos = [generateTodo('Start using a todo app')];

	if (typeof window !== 'undefined') {
		const todosFromLocalStorage = localStorage.getItem('blazingTodos');

		if (todosFromLocalStorage)
			return JSON.parse(todosFromLocalStorage) as ITodo[];

		localStorage.setItem('blazingTodos', JSON.stringify(initialTodos));
	}

	return initialTodos;
};
