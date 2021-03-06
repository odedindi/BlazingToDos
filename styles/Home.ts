import styled from 'styled-components';
import device from 'styles/mediaQueries';

export const Container = styled.div`
	padding: 0 2rem;
`;

export const Footer = styled.div`
	display: flex;
	flex: 1;
	padding: 2rem 0;
	border-top: 1px solid #eaeaea;
	justify-content: center;
	align-items: center;

	a {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-grow: 1;
		text-transform: uppercase;
	}
`;

export const AppContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vw;
	color: ${({ theme }) => theme.colors.text};
	background-color: ${({ theme }) => theme.colors.body};
`;

export const AppTitle = styled.h1`
	justify-self: center;
	text-align: center;
	font-size: ${({ theme }) => theme.fontSizes.h1};
	font-weight: ${({ theme }) => theme.fontWeights.heading};
	padding: 1rem;
`;

export const AppContentContainer = styled.div`
	display: flex;
	flex-direction: column;
`;
