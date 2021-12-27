import SEO from './SEO';
import StyleProvider from './style';

const Providers: React.FC = ({ children }) => (
	<StyleProvider>
		<SEO />
		{children}
	</StyleProvider>
);

export default Providers;
