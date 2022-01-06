import type { NextPage } from 'next';
import * as React from 'react';

import AppLayout from 'components/Layout';
import TodoList from 'components/TodoList';

const Home: NextPage = () => {
	return (
		<AppLayout>
			<TodoList />
		</AppLayout>
	);
};

export default Home;
