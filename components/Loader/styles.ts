import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
	0% {
		transform: translateY(0px);
	}
	100% {
		transform: translateY(5px);
	}
`;

export const Loader = styled.div<{ show: boolean }>`
	padding: 0.6rem;
	display: ${({ show }) => (show ? 'flex' : 'none')};
`;
export const Container = styled.div`
	border-radius: 0.5rem;
	padding: 1rem;
`;
export const Dots = styled.span`
	display: inline-block;
	height: 0.3rem;
	width: 0.3rem;
	border-radius: 50%;
	background: lightgray;

	animation: ${bounce} 0.5s ease infinite alternate;

	&:nth-child(1) {
		animation-delay: 0.2s;
	}

	&:nth-child(2) {
		animation-delay: 0.3s;
	}

	&:nth-child(3) {
		animation-delay: 0.4s;
	}
`;
