import { v4 as uuid } from 'uuid';

export const generateTodo = (
	content: string,
	label?: string,
	themeColor?: string,
): Todo => ({
	content,
	completed: false,
	createdAt: Date.now(),
	id: uuid(),
	label,
	themeColor,
});

export default generateTodo;
