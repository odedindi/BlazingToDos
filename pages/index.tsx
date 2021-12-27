import type { NextPage } from 'next';
import * as S from 'styles/Home';

const Home: NextPage = () => {
	return (
		<S.Container>
			<S.Main>New Start</S.Main>

			<S.Footer>
				<a href="https://odedo.dev" target="_blank" rel="noopener noreferrer">
					Odedindi
				</a>
			</S.Footer>
		</S.Container>
	);
};

export default Home;
