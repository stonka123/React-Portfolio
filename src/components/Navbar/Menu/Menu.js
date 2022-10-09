import styles from './Menu.module.css'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

import { useState } from 'react'

const Menu = props => {
	const closeMenuHandler = () => {
		props.closeMenu(false)
	}

	if (props.showMenu) {
		document.body.style.overflow = 'hidden'
	} else {
		document.body.style.overflow = 'inherit'
	}

	return (
		<div className={props.showMenu ? `${styles.showMenu} ${styles.menu} ` : `${styles.menu}`}>
			<div className={styles['bgc-menu']}></div>
			<div className={styles['menu-container']}>
				<a onClick={closeMenuHandler} href='#'>
					Home
				</a>
				<a onClick={closeMenuHandler} href='#skills'>
					Skills
				</a>
				<a onClick={closeMenuHandler} href='#projects'>
					Projects
				</a>
				<a onClick={closeMenuHandler} href='#contact'>
					Contact
				</a>
			</div>
			<div className={styles['social-container']}>
				<a className={styles['social-icon-radius']} href='#'>
					<FaGithub className={styles['social-icon']} />
				</a>
				<a className={styles['social-icon-radius']} href='#'>
					<FaLinkedinIn className={styles['social-icon']} />
				</a>
			</div>
		</div>
	)
}

export default Menu
