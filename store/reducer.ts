import generateTodo from 'util/generateTodo';
import * as T from './actionTypes';

export const storeReducer = (state: StoreState, { type, payload }: Action) => {
	const setTodosInLocalStorage = (todos: Todo[]) =>
		localStorage.setItem('blazingTodos', JSON.stringify(todos));

	switch (type) {
		case T.ADD_TODO:
			const newTodos = [...state.todos, generateTodo(payload as string)];
			setTodosInLocalStorage(newTodos);
			return {
				...state,
				todos: newTodos,
			};
		case T.REMOVE_TODO:
			const filteredTodos = [...state.todos].filter(({ id }) => id !== payload);
			setTodosInLocalStorage(filteredTodos);
			return {
				...state,
				todos: filteredTodos,
			};
		case T.SEARCH_TODO:
			return { ...state, searchQuery: payload as string };
		case T.SET_FILTER:
			return { ...state, filter: payload as FilterOption };
		case T.SET_MODE:
			return { ...state, mode: payload as ModeOption };
		case T.UPDATE_TODO:
			const updatedTodos = [...state.todos];
			const matchIndex = updatedTodos.findIndex(
				({ id }) => id === (payload as Todo).id,
			);
			updatedTodos[matchIndex] = payload as Todo;
			setTodosInLocalStorage(updatedTodos);
			return { ...state, todos: updatedTodos };
		case T.UPDATE_FILTERED_TODOS:
			return { ...state, filteredTodos: payload as Todo[] };
		default:
			return state;
	}
};

export default storeReducer;
