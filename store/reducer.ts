import generateTodo from 'util/generateTodo';
import * as T from './actionTypes';

export const storeReducer = (state: StoreState, { type, payload }: Action) => {
	switch (type) {
		case T.ADD_TODO:
			return {
				...state,
				todos: [...state.todos, generateTodo(payload as string)],
			};
		case T.REMOVE_TODO:
			return {
				...state,
				todos: [
					...state.todos.filter(({ id }) => id !== (payload as ITodo['id'])),
				],
			};
		case T.SEARCH_TODO:
			return { ...state, searchQuery: payload as string };
		case T.SET_FILTER:
			return { ...state, filter: payload as FilterOption };
		case T.SET_MODE:
			return { ...state, mode: payload as ModeOption };
		case T.TOGGLE_TODO:
			return {
				...state,
				todos: [
					...state.todos.map((todo) =>
						todo.id === (payload as ITodo['id'])
							? { ...todo, completed: !todo.completed }
							: todo,
					),
				],
			};
		case T.UPDATE_TODO:
			return {
				...state,
				todos: [
					...state.todos.map((todo) =>
						todo.id === (payload as ITodo).id ? (payload as ITodo) : todo,
					),
				],
			};
		case T.UPDATE_FILTERED_TODOS:
			return { ...state, filteredTodos: payload as ITodo[] };
		default:
			return state;
	}
};

export default storeReducer;
