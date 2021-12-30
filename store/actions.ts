import * as T from './actionTypes';

export const addTodo = (newTodoContent: string): AddTodoAction => ({
	type: T.ADD_TODO,
	payload: newTodoContent,
});

export const removeTodo = (todoId: string): RemoveTodoAction => ({
	type: T.REMOVE_TODO,
	payload: todoId,
});

export const searchTodo = (todoContent: string): SearchTodoAction => ({
	type: T.SEARCH_TODO,
	payload: todoContent,
});

export const setFilter = (newFilter: FilterOption): SetFilterAction => ({
	type: T.SET_FILTER,
	payload: newFilter,
});

export const setMode = (newMode: ModeOption): SetModeAction => ({
	type: T.SET_MODE,
	payload: newMode,
});

export const updateFilteredTodos = (todos: Todo[]): UpdateFilteredTodos => ({
	type: T.UPDATE_FILTERED_TODOS,
	payload: todos,
});

export const updateTodo = (todo: Todo): UpdateTodoAction => ({
	type: T.UPDATE_TODO,
	payload: todo,
});
