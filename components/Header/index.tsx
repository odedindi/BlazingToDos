import * as React from 'react';
import * as S from './styles';

import AddTodoForm from './AddTodoForm';
import Filter from './Filter';

const Header = () => (
	<S.Header>
		<AddTodoForm />
		<Filter />
	</S.Header>
);

export default Header;
