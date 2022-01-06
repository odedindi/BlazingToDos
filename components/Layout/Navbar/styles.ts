import styled, { css } from 'styled-components';
import { LogIn } from '@styled-icons/boxicons-regular/LogIn';
import { LogOut } from '@styled-icons/boxicons-regular/LogOut';
import { Sun } from '@styled-icons/boxicons-regular/Sun';
import { Moon } from '@styled-icons/boxicons-regular/Moon';

export const Nav = styled.nav`
	display: flex;
	padding: 2rem;
	align-items: baseline;
	height: 2.5rem;
	width: 100%;
`;

export const Validation = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	font-size: ${({ theme }) => theme.fontSizes.h2};
	color: ${({ theme }) => theme.colors.text};
`;

export const User = styled.p`
	font-size: ${({ theme }) => theme.fontSizes.h6};
	color: ${({ theme }) => theme.colors.text};
	padding: 0 1rem;
	position: relative;
	bottom: 0.75rem;
`;

const NavIconStyle = css`
	color: ${({ theme }) => theme.colors.text};
	padding: 0.125rem 0.75rem;
	cursor: pointer;
	height: 2.5rem;
	transition: all 0.1s ease-in-out;
	/* transform: scale(1.5); */
	&:hover {
		transform: scale(2.25);
		color: ${({ theme }) => theme.colors.primary};
	}
`;
export const Login = styled(LogIn)`
	${NavIconStyle}
`;
export const Logout = styled(LogOut)`
	${NavIconStyle}
`;

export const Light = styled(Sun)`
	${NavIconStyle}
`;

export const Dark = styled(Moon)`
	${NavIconStyle}
`;
