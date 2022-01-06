import * as React from 'react';
import * as S from './styles';

import AddTodoForm from './AddTodoForm';
import Filter from './Filter';
import Mode from './Mode';

const ListHeader = () => (
	<S.Header>
		<AddTodoForm />
		<Mode />
		<Filter />
	</S.Header>
);

export default ListHeader;
