import * as C from 'config/constants';
import { getInitialTodos } from 'repositories';

export const getInitialState = (): StoreState => ({
	errorMessage: '',
	filter: C.FILTERS.ALL,
	filteredTodos: [],
	mode: C.MODES.ADD,
	searchHistory: [],
	searchQuery: null,
	todos: getInitialTodos(),
});

export default getInitialState;
