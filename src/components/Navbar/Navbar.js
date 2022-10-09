import React, { useEffect, useState } from 'react'
import { Twirl as Hamburger } from 'hamburger-react'
import styles from './Navbar.module.css'
import logoImg from '../../assets/img/rocket-gif.gif'
import Menu from './Menu/Menu'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

function Navbar(props) {
	const [isOpen, setIsOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)
	const [activeLink, setActiveLink] = useState('home')

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true)
				console.log('jest')
			} else {
				setScrolled(false)
				console.log('zero')
			}
		}
		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	return (
		<>
			<div className={styles['navbar-container']}>
				<div
					className={
						scrolled ? `${styles.mobileWrapperContainer} ${styles.scrolledNavBar}` : `${styles.mobileWrapperContainer}`
					}>
					<div className={styles['logo-container']}>
						<p className={styles['logo-text']}>TomaszTwarowski</p>
						<img className={styles['logo']} src={logoImg} alt='logo' />
					</div>
					<div className={styles['hamburger-react']}>
						<Hamburger size={26} toggled={isOpen} toggle={setIsOpen} />
					</div>
				</div>
			</div>

			<div className={styles['navigation-desktop']}>
				<div className={scrolled ? `${styles.wrapper} ${styles.scrolledNavBar}` : `${styles.wrapper}`}>
					<div className={styles.wrapperContainer}>
						<div className={styles['logo-container-desktop']}>
							<p className={styles['logo-text-desktop']}>TomaszTwarowski</p>
							<img className={styles['logo-desktop']} src={logoImg} alt='logo' />
						</div>
						<div className={styles['navigation-container']}>
							<a href=''>Home</a>
							<a href=''>Skills</a>
							<a href=''>Projects</a>
							<a href=''>Contact</a>
						</div>
					</div>
				</div>
			</div>
			<div className={styles['container-social']}>
				<a className={styles['social-box']}>
					<FaGithub className={styles['social-icon']} />
				</a>
				<a className={styles['social-box']}>
					<FaLinkedinIn className={styles['social-icon']} />
				</a>
			</div>
			<Menu showMenu={isOpen} closeMenu={setIsOpen} />
		</>
	)
}

export default Navbar
