const customMediaQuery = (maxWidth: number) =>
	`@media (max-width: ${maxWidth}px)`;

export const device = {
	desktop: customMediaQuery(2560),
	laptop: customMediaQuery(1280),
	tablet: customMediaQuery(768),
	phone: customMediaQuery(480),
	xs: customMediaQuery(300),
};

export default device;
