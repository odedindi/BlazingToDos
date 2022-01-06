import * as T from './actionTypes';

export const addTodo = (newTodoContent: string): AddTodoAction => ({
	type: T.ADD_TODO,
	payload: newTodoContent,
});

export const removeTodo = (todoId: ITodo['id']): RemoveTodoAction => ({
	type: T.REMOVE_TODO,
	payload: todoId,
});

export const searchTodo = (
	todoContent: ITodo['content'],
): SearchTodoAction => ({
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

export const toggleTodo = (id: ITodo['id']): ToggleTodoAction => ({
	type: T.TOGGLE_TODO,
	payload: id,
});
export const updateFilteredTodos = (todos: ITodo[]): UpdateFilteredTodos => ({
	type: T.UPDATE_FILTERED_TODOS,
	payload: todos,
});

export const updateTodo = (todo: ITodo): UpdateTodoAction => ({
	type: T.UPDATE_TODO,
	payload: todo,
});
