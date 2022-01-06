import styled from 'styled-components';

export const AppContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	color: ${({ theme }) => theme.colors.text};
	background-color: ${({ theme }) => theme.colors.body};
`;

export const AppTitle = styled.h1`
	justify-self: center;
	text-align: center;
	font-size: ${({ theme }) => theme.fontSizes.h1};
	font-weight: ${({ theme }) => theme.fontWeights.heading};
	color: ${({ theme }) => theme.colors.primary};
	padding: 1rem;
`;

export const AppContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-height: auto;
	min-height: 70vh;
	flex: 1;
`;
