import { v4 as uuid } from 'uuid';

export const generateTodo = (
	content: string,
	label?: string,
	themeColor?: string,
) => ({
	content,
	completed: false,
	createdAt: Date.now(),
	completedAt: undefined,
	id: uuid(),
	label,
	themeColor,
});

export default generateTodo;
