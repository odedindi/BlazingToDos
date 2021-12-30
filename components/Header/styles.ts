import styled, { css } from 'styled-components';
import { ChevronRightSquare } from '@styled-icons/boxicons-solid/ChevronRightSquare';

export const Header = styled.div`
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	justify-content: space-between;
	padding: 1rem 0;
`;

export const HeaderButton = styled.button<{ selected: boolean }>`
	cursor: pointer;
	transition: all 0.275s ease-in-out;
	border-radius: 0.25rem;
	background: ${({ selected }) => (selected ? 'darkgray' : '')};
	color: ${({ selected, theme }) => (selected ? theme.colors.body : '')};

	width: 7rem;
	padding: 0.5rem 0;
	&:hover {
		background: ${({ selected, theme }) =>
			!selected ? theme.colors.primary : ''};
		color: ${({ selected, theme }) => (!selected ? theme.colors.body : '')};
	}
`;

export const Form = styled.div`
	padding: 0 1rem;
	display: flex;
	align-items: center;
	flex-flow: row wrap;

	input {
		padding: 0.5rem 1rem;
		font-size: ${({ theme }) => theme.fontSizes.p};
	}
`;

export const Submit = styled(ChevronRightSquare)`
	color: ${({ theme }) => theme.colors.text};
	padding: 0 0.75rem 0 0.15rem;
	cursor: pointer;
	height: 3rem;

	transition: all 0.1s ease-in-out;
	&:hover {
		transform: scale(1.34);
	}
	:active {
		transform: scale(1);
	}
`;
