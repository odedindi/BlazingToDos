export const isDev = process.env.NODE_ENV === 'development';

export const GA_TRACKING_ID = process.env.GA_TRACKING_ID || '';

export const FILTERS = {
	ALL: 'FILTER_ALL' as FilterOption,
	ACTIVE: 'FILTER_ACTIVE' as FilterOption,
	COMPLETED: 'FILTER_COMPLETED' as FilterOption,
};

export const filterOptions = {
	[FILTERS.ALL]: 'All',
	[FILTERS.ACTIVE]: 'Active',
	[FILTERS.COMPLETED]: 'Completed',
};

export const MODES = {
	ADD: 'MODE_ADD' as ModeOption,
	SEARCH: 'MODE_SEARCH' as ModeOption,
};

export const modeOptions = {
	[MODES.ADD]: 'Add',
	[MODES.SEARCH]: 'Search',
};
