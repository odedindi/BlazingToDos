import React from 'react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

import * as S from './styles';
import Loader from 'components/Loader';

const Navbar = () => {
	const { data: session, status } = useSession();
	const isLoading = status === 'loading';

	return (
		<S.Nav>
			{isLoading ? (
				<S.Validation>
					<Loader />
				</S.Validation>
			) : session ? (
				<>
					<S.Logout onClick={() => signOut()} />
					<S.User>{session.user?.name}</S.User>
				</>
			) : (
				<Link passHref href="/api/auth/signin">
					<S.Login />
				</Link>
			)}
		</S.Nav>
	);
};

export default Navbar;
