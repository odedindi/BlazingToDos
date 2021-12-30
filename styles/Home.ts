import styled from 'styled-components';

export const Container = styled.div`
	padding: 0 2rem;
`;
export const Main = styled.div`
	padding: 4rem 0;
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
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
