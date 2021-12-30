import type { NextPage } from 'next';
import * as React from 'react';
import * as S from 'styles/Home';
import TodoList from 'components/TodoList';

const Home: NextPage = () => {
	return (
		<S.Container>
			<S.Main>
				<TodoList />
			</S.Main>
			<S.Footer>
				<a href="https://odedo.dev" target="_blank" rel="noopener noreferrer">
					Odedindi
				</a>
			</S.Footer>
		</S.Container>
	);
};

export default Home;
