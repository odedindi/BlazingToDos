import * as React from 'react';

import { Action, getInitState, storeReducer } from '.';
import filterTodos from 'util/filterTodos';
import searchTodos from 'util/searchTodos';

interface StoreContext {
	state: StoreState;
	dispatch: React.Dispatch<Action>;
}

const StoreContext = React.createContext<StoreContext>(undefined!);
const { Provider } = StoreContext;

export const StoreProvider: React.FC = ({ children }) => {
	const [state, dispatch] = React.useReducer(storeReducer, getInitState());

	React.useEffect(() => {
		if (state.mode === 'MODE_ADD') {
			const todos = filterTodos(state.filter, state.todos);
			dispatch(Action.updateFilteredTodos(todos));
		}
		if (state.mode === 'MODE_SEARCH') {
			const match = state.searchQuery?.length
				? searchTodos(state.searchQuery, state.todos)
				: state.todos;
			const todos = filterTodos(state.filter, match);
			dispatch(Action.updateFilteredTodos(todos));
		}
	}, [
		state.filter,
		state.mode,
		state.searchHistory,
		state.searchQuery,
		state.todos,
	]);

	return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export const useStore = () => React.useContext(StoreContext);
