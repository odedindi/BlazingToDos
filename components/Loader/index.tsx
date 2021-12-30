import * as React from 'react';
import * as S from './styles';

type LoaderProps = {
	show: boolean;
};

const Loader = ({ show }: LoaderProps) => (
	<S.Loader show={show}>
		<S.Container>
			<S.Dots />
			<S.Dots />
			<S.Dots />
		</S.Container>
	</S.Loader>
);

export default Loader;
