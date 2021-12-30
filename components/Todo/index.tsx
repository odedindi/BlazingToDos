import * as React from 'react';
import dynamic from 'next/dynamic';

import * as S from './styles';
import moment from 'moment';

import { Action, useStore } from 'store';

const ColorPicker = dynamic(() => import('components/colorPicker'), {
	ssr: false,
});

const Todo = ({ todo }: { todo: Todo }) => (
	<S.Todo completed={todo.completed}>
		<Checkbox todo={todo} />
		<S.Content>{todo.content}</S.Content>
		<TodoControl {...todo} />
	</S.Todo>
);

export default React.memo(Todo);

const Checkbox = ({ todo }: { todo: Todo }) => {
	const { dispatch } = useStore();

	return (
		<>
			<S.Checkbox
				checked={todo.completed}
				value={todo.id}
				onChange={({ target: { checked } }) =>
					// handleChange({ ...todo, completed: checked })
					dispatch(Action.updateTodo({ ...todo, completed: checked }))
				}
			/>
			<S.CheckboxBackground
				checked={todo.completed}
				onClick={() =>
					// handleChange({ ...todo, completed: !todo.completed })
					dispatch(Action.updateTodo({ ...todo, completed: !todo.completed }))
				}
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
