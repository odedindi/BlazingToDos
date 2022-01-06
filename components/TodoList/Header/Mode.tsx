import * as React from 'react';
import * as S from './styles';
import * as C from 'config/constants';
import { Action, useStore } from 'store';

const Mode = () => {
	const {
		state: { mode },
		dispatch,
	} = useStore();

	const handleClick = (mode: ModeOption) => dispatch(Action.setMode(mode));

	return (
		<div>
			{Object.keys(C.modeOptions).map((key) => (
				<S.HeaderButton
					key={key}
					onClick={() => handleClick(key as ModeOption)}
					selected={key === mode}
				>
					{C.modeOptions[key as ModeOption]}
				</S.HeaderButton>
			))}
		</div>
	);
};

export default Mode;
