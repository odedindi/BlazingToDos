import SEO from './SEO';
import StyleProvider from './style';
import { StoreProvider } from 'store/store';

const Providers: React.FC = ({ children }) => (
	<StyleProvider>
		<SEO />
		<StoreProvider>{children}</StoreProvider>
	</StyleProvider>
);

export default Providers;
