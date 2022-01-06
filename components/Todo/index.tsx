import * as React from 'react';
import dynamic from 'next/dynamic';

import * as S from './styles';
import moment from 'moment';

import { Action, useStore } from 'store';

const ColorPicker = dynamic(() => import('components/Todo/colorPicker'), {
	ssr: false,
});

const Todo = ({ todo }: { todo: ITodo }) => (
	<S.Todo completed={todo.completed}>
		<Checkbox todo={todo} />
		<S.Content>{todo.content}</S.Content>
		<TodoControl {...todo} />
	</S.Todo>
);

export default Todo;

const Checkbox = ({ todo }: { todo: ITodo }) => {
	const { dispatch } = useStore();

	return (
		<>
			<S.Checkbox
				checked={todo.completed}
				value={todo.id}
				onChange={(_event) => dispatch(Action.toggleTodo(todo.id))}
			/>
			<S.CheckboxBackground
				checked={todo.completed}
				onClick={() => {
					const updatedTodo = {
						...todo,
						completed: !todo.completed,
						completedAt: !todo.completed ? Date.now() : undefined,
					};
					dispatch(Action.updateTodo(updatedTodo));
				}}
			>
				{todo.completed ? <S.MarkAsCompleted /> : <S.MarkAsNotCompleted />}
			</S.CheckboxBackground>
		</>
	);
};

const TodoControl = ({ createdAt, id }: { createdAt: number; id: string }) => {
	const { dispatch } = useStore();
	return (
		<S.TodoControl>
			<S.DeleteButton onClick={() => dispatch(Action.removeTodo(id))} />
			{/* <ColorPicker /> */}
			<S.TimeStamp>{moment(createdAt).format('ll')}</S.TimeStamp>
		</S.TodoControl>
	);
};
