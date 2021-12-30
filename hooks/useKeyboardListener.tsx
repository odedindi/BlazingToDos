import * as React from 'react';

/*
use example:

const handleSubmit = (e) => {....}
useKeyboardListener(handleSubmit, 'Enter'); // call handleSubmit when Enter key is pressed
useKeyboardListener(handleSubmit, 'Enter', true); // call handleSubmit onle when Enter and Ctrl keys are pressed

*/

type ReturnVoid = { (): void };
type ReturnPromise = { (): Promise<void> };
type BtnCode = string;

export const useKeyboardListener = (
	fn: ReturnVoid | ReturnPromise,
	btnCode: BtnCode,
	withCtrlKey?: boolean,
): void => {
	React.useEffect(() => {
		const keyboardListener = ({ code, ctrlKey }: KeyboardEvent) => {
			if (withCtrlKey) {
				if (ctrlKey && code === btnCode) {
					fn();
				}
			} else if (code === btnCode) fn();
		};
		document.addEventListener('keydown', keyboardListener);
		return () => {
			document.removeEventListener('keydown', keyboardListener);
		};
	}, [btnCode, fn, withCtrlKey]);
};

export default useKeyboardListener;
