import * as C from 'config/constants';

export const filterTodos = (filter: FilterOption, todos: Todo[]) => {
	switch (filter) {
		case C.FILTERS.COMPLETED:
			return todos.filter((todo) => todo.completed);

		case C.FILTERS.ACTIVE:
			return todos.filter((todo) => !todo.completed);

		default:
			return todos;
	}
};

export default filterTodos;
