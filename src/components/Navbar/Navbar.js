import React, { useEffect, useState } from 'react'
import { Twirl as Hamburger } from 'hamburger-react'
import styles from './Navbar.module.css'
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
						scrolled && !isOpen
							? `${styles.mobileWrapperContainer} ${styles.scrolledNavBar}`
							: `${styles.mobileWrapperContainer}`
					}>
					<div className={styles['logo-container']}>
						<img className={styles['logo']} src={props.logoImg} alt='logo' />
					</div>
					<div className={styles['hamburger-react']}>
						<Hamburger size={26} toggled={isOpen} toggle={setIsOpen} />
					</div>
				</div>
			</div>

			<div className={styles['navigation-desktop']}>
				<div
					className={
						scrolled
							? `${styles.deskopWrapperContainer} ${styles.scrolledNavBarDesktop} `
							: `${styles.deskopWrapperContainer} `
					}>
					<div className={styles.wrapperContainer}>
						<div className={styles['logo-container-desktop']}>
							<img className={styles['logo-desktop']} src={props.logoImg} alt='logo' />
						</div>
						<div className={styles['navigation-container']}>
							<a href=''>Home</a>
							<a href=''>Skills</a>
							<a href=''>Projects</a>
							<div className={styles['container-social']}>
								<div className={styles['social-box']}>
									<a className={styles['container-social-icon']} href=''>
										<FaGithub className={styles['social-icon']} />
									</a>
								</div>
								<div className={styles['social-box']}>
									<a className={styles['container-social-icon']} href=''>
										<FaLinkedinIn className={styles['social-icon']} />
									</a>
								</div>
							</div>
							<a href=''>Contact</a>
						</div>
					</div>
				</div>
			</div>
			<Menu
				showMenu={isOpen}
				closeMenu={setIsOpen}
				checkMenu={scrolled}
				iconGH={<FaGithub />}
				iconLI={<FaLinkedinIn />}
			/>
		</>
	)
}

export default Navbar
