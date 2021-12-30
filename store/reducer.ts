import generateTodo from 'util/generateTodo';
import * as T from './actionTypes';

export const storeReducer = (state: StoreState, { type, payload }: Action) => {
	switch (type) {
		case T.ADD_TODO:
			return {
				...state,
				todos: [...state.todos, generateTodo(payload)] as Todo[],
			};
		case T.REMOVE_TODO:
			return {
				...state,
				todos: [...state.todos].filter(({ id }) => id !== payload),
			};
		case T.SEARCH_TODO:
			return { ...state, searchQuery: payload };
		case T.SET_FILTER:
			return { ...state, filter: payload };
		case T.SET_MODE:
			return { ...state, mode: payload };
		case T.UPDATE_TODO:
			const newTodos = [...state.todos];
			const matchIndex = newTodos.findIndex(({ id }) => id === payload.id);
			newTodos[matchIndex] = payload;
			return { ...state, todos: newTodos };
		case T.UPDATE_FILTERED_TODOS:
			return { ...state, filteredTodos: payload };
		default:
			return state;
	}
};

export default storeReducer;
