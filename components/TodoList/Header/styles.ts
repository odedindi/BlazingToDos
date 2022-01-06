import styled from 'styled-components';
import device from 'styles/mediaQueries';

import { ChevronRightSquare } from '@styled-icons/boxicons-solid/ChevronRightSquare';

export const Header = styled.div`
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	justify-content: space-evenly;
	max-width: 50rem;
	padding: 1rem 0;
	gap: 1rem;

	${device.tablet} {
		flex-flow: column;
	}
`;

export const HeaderButton = styled.button<{ selected: boolean }>`
	cursor: pointer;
	transition: all 0.275s ease-in-out;
	border-radius: 0.25rem;
	background: ${({ selected, theme }) =>
		selected ? theme.colors.primary : ''};
	color: ${({ selected, theme }) => (selected ? theme.colors.body : '')};

	width: 7rem;
	padding: 0.5rem 0;
	margin: 0 0.125rem;

	&:hover {
		background: ${({ selected, theme }) =>
			!selected ? theme.colors.text : ''};
		color: ${({ selected, theme }) => (!selected ? theme.colors.body : '')};
	}
`;

export const Form = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;

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
		color: ${({ theme }) => theme.colors.primary};
	}
	:active {
		transform: scale(1);
	}
`;
