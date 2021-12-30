import * as React from 'react';
import * as S from './styles';
import * as C from 'config/constants';
import { Action, useStore } from 'store';
import Header from 'components/Header';
import Todo from 'components/Todo';
import filterTodos from 'util/filterTodos';
import searchTodos from 'util/searchTodos';

const TodoList = () => {
	const {
		state: { filteredTodos, filter, mode, searchQuery, todos },
		dispatch,
	} = useStore();
	const activeTodos = filteredTodos.filter((todo) => !todo.completed).length;

	React.useEffect(() => {
		if (mode === 'MODE_ADD') {
			const match = filterTodos(filter, todos);
			dispatch(Action.updateFilteredTodos(match));
		}
		if (mode === 'MODE_SEARCH') {
			const match = searchQuery?.length
				? searchTodos(searchQuery, todos)
				: todos;
			const matchedTodos = filterTodos(filter, match);
			dispatch(Action.updateFilteredTodos(matchedTodos));
		}
	}, [dispatch, filter, mode, searchQuery, todos]);

	return (
		<S.TodoListContainer>
			<Header />
			<S.List>
				{filteredTodos.map((todo) => (
					<Todo key={todo.id} todo={todo} />
				))}
			</S.List>
			{filter !== C.FILTERS.COMPLETED && (
				<TodosInfo activeTodos={activeTodos} />
			)}
		</S.TodoListContainer>
	);
};

export default TodoList;

const TodosInfo = ({ activeTodos }: { activeTodos: number }) => {
	const message = !activeTodos
		? 'There are no todos on your list.'
		: `${activeTodos} ${
				activeTodos === 1 ? 'todo is' : 'todos are'
		  } left to complete`;

	return <S.ActiveTodosInfo>{message}</S.ActiveTodosInfo>;
};
