import * as React from 'react';
import * as C from 'config/constants';
import generateTodo from 'util/generateTodo';

const getInitialTodos = (): Todo[] => {
	if (typeof window !== 'undefined') {
		localStorage.setItem(
			'initialTodos',
			JSON.stringify([generateTodo('Start using a todo app')]),
		);
		const initialTodos = localStorage.getItem('initialTodos');
		if (initialTodos) return JSON.parse(initialTodos) as Todo[];
	}
	return [generateTodo('Start using a todo app')];
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
