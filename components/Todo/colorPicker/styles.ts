import styled from 'styled-components';
import type { RGBColor } from 'react-color';

export const Color = styled.div<{
	bgColor: RGBColor;
}>`
	width: 36px;
	height: 14px;
	border-radius: 2px;

	background: ${({ bgColor }) =>
		`rgba(${bgColor.r}, ${bgColor.g}, ${bgColor.b}, ${bgColor.a})`};
`;

export const Swatch = styled.div`
	padding: 5px;
	background: #fff;
	border-radius: 1px;
	box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
	display: inline-block;
	cursor: pointer;
`;

export const Popover = styled.div`
	position: absolute;
	z-index: 2;
`;

export const Cover = styled.div`
	position: fixed;
	top: 0px;
	right: 0px;
	bottom: 0px;
	left: 0px;
`;
