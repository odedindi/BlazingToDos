interface ITodo {
	completed: boolean;
	content: string;
	createdAt: number;
	completedAt?: number;
	id: string;
	label?: string;
	themeColor?: string;
}
type ModeOption = 'MODE_ADD' | 'MODE_SEARCH';

type FilterOption = 'FILTER_ACTIVE' | 'FILTER_ALL' | 'FILTER_COMPLETED';
