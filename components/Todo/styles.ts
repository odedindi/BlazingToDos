import styled, { css } from 'styled-components';
import { XSquare } from '@styled-icons/boxicons-solid/XSquare';
import { CalendarCheck } from '@styled-icons/boxicons-solid/CalendarCheck';
import { CalendarAlt } from '@styled-icons/boxicons-solid/CalendarAlt';

export const TodoContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 100%;
`;

export const Todo = styled.div<{ completed: boolean }>`
	background: ${({ theme }) => theme.colors.body};
	border: ${({ theme }) => theme.colors.body};

	text-decoration: ${({ completed }) => (completed ? `line-through` : '')};
	display: flex;
	flex-direction: row;

	padding: 1.275rem 1rem;

	color: ${({ theme }) => theme.colors.text};

	border: none;
	border-bottom: 0.04rem solid #b8b8b8;

	&:last-child {
		border-bottom: none;
	}
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
	display: none;
`;

export const CheckboxBackground = styled.span<{ checked: boolean }>`
	width: 3rem;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Content = styled.p`
	white-space: pre-wrap;
	word-wrap: break-word;
	width: 100%;
	letter-spacing: 0.02rem;
	font-size: ${({ theme }) => theme.fontSizes.p};
	text-align: start;
	justify-self: center;
	align-self: center;

	padding: 1rem 0 0 1.25rem;
`;

export const TodoControl = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	text-align: center;
	padding: 0.5rem 0 0 0;
`;

export const TimeStamp = styled.span`
	font-size: 0.7rem;
	color: ${({ theme }) => theme.colors.primary};
	float: right;
`;

const iconButtonStyles = css`
	color: ${({ theme }) => theme.colors.text};
	padding: 0.125rem 0.75rem;
	cursor: pointer;
	height: 5rem;
	transition: all 0.1s ease-in-out;
	transform: scale(1.5);
	&:hover {
		transform: scale(2.25);
	}
`;

export const MarkAsNotCompleted = styled(CalendarAlt)`
	${iconButtonStyles}
`;

export const MarkAsCompleted = styled(CalendarCheck)`
	${iconButtonStyles}
	color: ${({ theme }) => theme.colors.primary};
`;

export const DeleteButton = styled(XSquare)`
	${iconButtonStyles}
	transform: scale(0.5);

	&:hover {
		transform: scale(0.6);
	}
	:active {
		transform: scale(0.5);
	}
`;
