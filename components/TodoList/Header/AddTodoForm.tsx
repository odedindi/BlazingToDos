import * as React from 'react';
import * as S from './styles';
import * as C from 'config/constants';
import { Action, useStore } from 'store';
import { useKeyboardListener } from 'hooks';

import { BehaviorSubject } from 'rxjs';
import { debounceTime, map, distinctUntilChanged } from 'rxjs/operators';

const AddTodoForm = () => {
	const {
		state: { mode },
		dispatch,
	} = useStore();

	const isAddMode = mode === C.MODES.ADD;

	const placeholderMessage = isAddMode ? 'Add a new todo' : 'Search for a todo';
	const inputRef = React.useRef<HTMLInputElement>(undefined!);

	const [userInput$] = React.useState(() => new BehaviorSubject(''));

	userInput$.pipe(
		map((s: string) => s.trim()),
		distinctUntilChanged(),
		debounceTime(250),
	);

	const handleInput = React.useCallback(
		({ target }: React.ChangeEvent<HTMLInputElement>) =>
			userInput$.next(target.value),
		[userInput$],
	);

	const handleSubmit = React.useCallback(() => {
		userInput$
			.subscribe((input) => {
				if (!input.trim()) return inputRef.current.focus();
				if (isAddMode) {
					dispatch(Action.addTodo(input));
					inputRef.current.value = '';
				} else dispatch(Action.searchTodo(input));
			})
			.unsubscribe();
		userInput$.next('');
	}, [dispatch, isAddMode, userInput$]);
	useKeyboardListener(handleSubmit, 'Enter');

	return (
		<S.Form>
			<input
				ref={inputRef}
				type="text"
				placeholder={placeholderMessage}
				onChange={handleInput}
			/>
			<S.Submit onClick={handleSubmit} />
		</S.Form>
	);
};

export default AddTodoForm;
