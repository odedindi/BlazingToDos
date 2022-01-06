import * as React from 'react';
import * as S from './styles';

import Footer from 'components/Layout/Footer';
import Navbar from 'components/Layout/Navbar';

const AppLayout: React.FC = ({ children }) => {
	return (
		<S.AppContainer>
			<Navbar />
			<S.AppTitle>Todo App</S.AppTitle>
			<S.AppContentContainer>{children}</S.AppContentContainer>
			<Footer />
		</S.AppContainer>
	);
};

export default AppLayout;
