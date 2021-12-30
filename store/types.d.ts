interface StoreState {
	errorMessage: string;
	filter: FilterOption;
	filteredTodos: Todo[];
	mode: ModeOption;
	searchHistory: string[];
	searchQuery: string | null;
	todos: Todo[];
}

type AddTodoAction = { type: 'ADD_TODO'; payload: string };
type RemoveTodoAction = { type: 'REMOVE_TODO'; payload: string };
type SearchTodoAction = { type: 'SEARCH_TODO'; payload: string };
type SetFilterAction = { type: 'SET_FILTER'; payload: FilterOption };
type SetModeAction = { type: 'SET_MODE'; payload: ModeOption };
type UpdateFilteredTodos = { type: 'UPDATE_FILTERED_TODOS'; payload: Todo[] };
type UpdateTodoAction = { type: 'UPDATE_TODO'; payload: Todo };

type Action =
	| AddTodoAction
	| RemoveTodoAction
	| SearchTodoAction
	| SetFilterAction
	| SetModeAction
	| UpdateFilteredTodos
	| UpdateTodoAction;
