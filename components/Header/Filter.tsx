import * as React from 'react';
import * as S from './styles';
import * as C from 'config/constants';
import { Action, useStore } from 'store';

const Filter = () => {
	const {
		state: { filter },
		dispatch,
	} = useStore();

	return (
		<div>
			{Object.keys(C.filterOptions).map((key) => (
				<S.HeaderButton
					key={key}
					onClick={() => dispatch(Action.setFilter(key as FilterOption))}
					selected={key === filter}
				>
					{C.filterOptions[key as FilterOption]}
				</S.HeaderButton>
			))}
		</div>
	);
};

export default Filter;
