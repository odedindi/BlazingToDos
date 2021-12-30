import * as React from 'react';
import * as S from './styles';
import * as C from 'config/constants';
import { useStore } from 'store';
import Header from 'components/Header';
import Todo from 'components/Todo';

const TodoList = () => {
	const {
		state: { filteredTodos: todos, filter },
	} = useStore();
	const activeTodos = todos.filter((todo) => !todo.completed).length;
	return (
		<S.TodoListContainer>
			<Header />
			<S.List>
				{todos.map((todo) => (
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
