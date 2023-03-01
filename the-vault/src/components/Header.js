import React from 'react';

import { Container } from '@mui/system';

import styles from '../scss/header.module.scss';

export default function Header() {
	return (
		<main>
			<div className={styles.navbar}>
				<Container className={styles.flexContainer}>
					<div className={styles.logo}>The Vault</div>
					<div className={styles.links}>
						<div className={styles.leftSide}>
							<div>Home</div>
							<div>About</div>
							<div>Cards</div>
						</div>
						<div className={styles.rightSide}>
							<div>Decks</div>
							<div>Sign In</div>
							<div>Sign Up</div>
						</div>
					</div>
				</Container>
			</div>
		</main>
	);
}
