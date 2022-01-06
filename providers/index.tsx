import SEO from './SEO';
import StyleProvider from './style';
import { StoreProvider } from 'store/store';
import { SessionProvider } from 'next-auth/react';
import type { Session } from 'next-auth';

const Providers: React.FC<{ session: Session }> = ({ children, session }) => (
	<SessionProvider session={session}>
		<StyleProvider>
			<SEO />
			<StoreProvider>{children}</StoreProvider>
		</StyleProvider>
	</SessionProvider>
);

export default Providers;
