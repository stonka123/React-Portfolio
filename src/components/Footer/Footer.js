import React from 'react'
import styles from './Footer.module.css'
import FooterImg from '../../assets/img/footer-logo.png'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
const Footer = props => {
	const date = new Date().getFullYear()

	return (
		<div className={styles.footer}>
			<div className={`${styles['footer-container']} wrapper`}>
				<div className={styles['logo-container']}>
					<img className={styles.logo} src={FooterImg} alt='' />
				</div>
				<div className={styles['social-container']}>
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
				<div className={styles['text-container']}>
					<h4>Tomasz Twarowski</h4>
					<p>
						&copy; <span>{date}</span>
					</p>
				</div>
			</div>
		</div>
	)
}

export default Footer
