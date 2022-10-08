import React, { useState } from 'react'
import { Twirl as Hamburger } from 'hamburger-react'
import styles from './Navbar.module.css'
import logoImg from '../../assets/img/rocket-gif.gif'
import Menu from './Menu/Menu'

function Navbar(props) {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<div className={`${styles['navbar-container']} wrapper`}>
				<div className={styles['logo-container']}>
					<p className={styles['logo-text']}>TomaszTwarowski</p>
					<img className={styles['logo']} src={logoImg} alt='logo' />
				</div>
				<div className={styles['hamburger-react']}>
					<Hamburger size={26} toggled={isOpen} toggle={setIsOpen} />
				</div>
				<div className={styles['navigation-desktop']}>
					<div className={styles['navigation-container']}>
						<a href=''>Home</a>
						<a href=''>Skills</a>
						<a href=''>Projects</a>
						<a href=''>Contact</a>
					</div>
				</div>
			</div>
			<Menu showMenu={isOpen} closeMenu={setIsOpen} />
		</>
	)
}

export default Navbar
