import * as React from 'react';

import { getInitialState, storeReducer } from '.';

const StoreContext = React.createContext<StoreContext>(undefined!);
const { Provider } = StoreContext;

export const StoreProvider: React.FC = ({ children }) => {
	const [state, dispatch] = React.useReducer(storeReducer, getInitialState());

	React.useEffect(() => {
		const setTodosInLocalStorage = (todos: ITodo[]) =>
			localStorage.setItem('blazingTodos', JSON.stringify(todos));
		setTodosInLocalStorage(state.todos);
	}, [state]);

	return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export const useStore = () => React.useContext(StoreContext);

export default useStore;
