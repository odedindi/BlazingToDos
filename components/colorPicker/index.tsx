import type { ColorResult, RGBColor } from 'react-color';
import * as React from 'react';
import { SketchPicker } from 'react-color';

import * as S from './styles';

type ColorPickerState = {
	displayColorPicker: boolean;
	color: RGBColor;
};

export const ColorPicker = () => {
	const [state, setState] = React.useState<ColorPickerState>({
		displayColorPicker: false,
		color: {
			r: 241,
			g: 112,
			b: 19,
			a: 1,
		},
	});

	const handleClick = () =>
		setState((prev) => ({
			...prev,
			displayColorPicker: !prev.displayColorPicker,
		}));

	const handleClose = () =>
		setState((prev) => ({ ...prev, displayColorPicker: false }));

	const handleChange = (color: ColorResult) =>
		setState((prev) => ({ ...prev, color: color.rgb }));

	return (
		<>
			<S.Swatch onClick={handleClick}>
				<S.Color bgColor={state.color} />
			</S.Swatch>
			{state.displayColorPicker && (
				<S.Popover>
					<S.Cover onClick={handleClose} />
					<SketchPicker color={state.color} onChange={handleChange} />
				</S.Popover>
			)}
		</>
	);
};

export default ColorPicker;
