import * as React from 'react';
import * as S from './styles';
import * as C from 'config/constants';
import { Action, useStore } from 'store';
import { useKeyboardListener } from 'hooks';

import { BehaviorSubject } from 'rxjs';
import {
	debounceTime,
	map,
	distinctUntilChanged,
	filter as rxFilter,
} from 'rxjs/operators';

const AddTodoForm = () => {
	const {
		state: { mode },
		dispatch,
	} = useStore();

	const isAddMode = mode === C.MODES.ADD;

	const placeholderMessage = isAddMode ? 'Add a new todo' : 'Search for a todo';
	const inputFieldRef = React.useRef<HTMLInputElement>(undefined!);
	const resetInputField = () => (inputFieldRef.current.value = '');

	const [userInput$] = React.useState(() => new BehaviorSubject(''));

	userInput$.pipe(
		map((s) => s.trim()),
		distinctUntilChanged(),
		rxFilter((s) => s.length >= 2),
		debounceTime(250),
	);

	const handleInput = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
		userInput$.next(target.value);

	const handleSubmit = () =>
		userInput$.subscribe((input) => {
			if (!input.trim()) return;
			if (isAddMode) {
				dispatch(Action.addTodo(input));
				resetInputField();
			} else dispatch(Action.searchTodo(input));
		});

	useKeyboardListener(handleSubmit, 'Enter');

	return (
		<S.Form>
			<input
				ref={inputFieldRef}
				type="text"
				placeholder={placeholderMessage}
				onChange={handleInput}
			/>
			<S.Submit onClick={handleSubmit} />

			<>
				{Object.keys(C.modeOptions).map((key) => (
					<S.HeaderButton
						key={key}
						onClick={() => dispatch(Action.setMode(key as ModeOption))}
						selected={key === mode}
					>
						{C.modeOptions[key as ModeOption]}
					</S.HeaderButton>
				))}
			</>
		</S.Form>
	);
};

export default AddTodoForm;
