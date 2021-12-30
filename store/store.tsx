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

	return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export const useStore = () => React.useContext(StoreContext);
