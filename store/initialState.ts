import * as C from 'config/constants';
import generateTodo from 'util/generateTodo';

const getInitialTodos = (): Todo[] => {
	const initialTodos = [generateTodo('Start using a todo app')];

	if (typeof window !== 'undefined') {
		const todosFromLocalStorage = localStorage.getItem('blazingTodos');

		if (todosFromLocalStorage)
			return JSON.parse(todosFromLocalStorage) as Todo[];

		localStorage.setItem('blazingTodos', JSON.stringify(initialTodos));
	}

	return initialTodos;
};

export const getInitState = (): StoreState => ({
	errorMessage: '',
	filter: C.FILTERS.ALL,
	filteredTodos: [],
	mode: C.MODES.ADD,
	searchHistory: [],
	searchQuery: null,
	todos: getInitialTodos(),
});

export default getInitState;
