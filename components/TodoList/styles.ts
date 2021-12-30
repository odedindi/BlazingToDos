import styled from 'styled-components';

export const TodoListContainer = styled.section`
	width: 90vw;
	background-color: ${({ theme }) => theme.colors.body};
	padding: 2rem;
	border-radius: 0.2rem;
	position: relative;
`;

export const List = styled.section`
	width: 100%;
`;

export const ActiveTodosInfo = styled.p`
	font-size: ${({ theme }) => theme.fontSizes.h4};

	padding: 5rem 0 0 0;
`;
