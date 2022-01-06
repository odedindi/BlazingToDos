interface StoreContext {
	state: StoreState;
	dispatch: React.Dispatch<Action>;
}
interface StoreState {
	errorMessage: string;
	filter: FilterOption;
	filteredTodos: ITodo[];
	mode: ModeOption;
	searchHistory: string[];
	searchQuery: string | null;
	todos: ITodo[];
}

type AddTodoAction = { type: 'ADD_TODO'; payload: ITodo['content'] };
type RemoveTodoAction = { type: 'REMOVE_TODO'; payload: ITodo['id'] };
type SearchTodoAction = { type: 'SEARCH_TODO'; payload: ITodo['content'] };
type SetFilterAction = { type: 'SET_FILTER'; payload: FilterOption };
type SetModeAction = { type: 'SET_MODE'; payload: ModeOption };
type ToggleTodoAction = { type: 'TOGGLE_TODO'; payload: ITodo['id'] };
type UpdateFilteredTodos = {
	type: 'UPDATE_FILTERED_TODOS';
	payload: ITodo[];
};
type UpdateTodoAction = { type: 'UPDATE_TODO'; payload: ITodo };

type Action =
	| AddTodoAction
	| RemoveTodoAction
	| SearchTodoAction
	| SetFilterAction
	| SetModeAction
	| ToggleTodoAction
	| UpdateFilteredTodos
	| UpdateTodoAction;
