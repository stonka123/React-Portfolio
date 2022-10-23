import React, { useState } from 'react'
import '../../assets/variable-css/colors.css'
import imageMe from '../../assets/img/test2.jpg'
import styles from './Header.module.css'
import Navbar from '../Navbar/Navbar'
import headerImg from '../../assets/img/header_icon_photo.png'
import logoImg from '../../assets/img/logo-cosmos.png'
import { FiArrowRightCircle, FiChevronDown } from 'react-icons/fi'


const Header = props => {
	return (
		<section className={styles.header} id='home'>
			<div className={styles.background}></div>
			<div className={`${styles['container-header']} wrapper`}>
				<Navbar logoImg={logoImg} />
				<div className={styles.wrapperText}>
					<img src={headerImg} className={`${styles.headerIcon}`} alt='' />
					<div className={`${styles['container-text']} animate__animated animate__backInLeft`}>
						<a className={styles['button-portfolio']} href='#projects'>
							Check my Projects
						</a>
						<h1>Hi! I'm Tomasz Twarowski</h1>
						<h3>Frontend Developer</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati cum alias ea eaque eveniet laborum
							modi, tempora molestiae quas quis nihil, illo iusto voluptatum recusandae. Inventore accusamus cupiditate
							debitis veniam.
						</p>
					</div>
				</div>
				<div className={`${styles['container-img']} animate__backInRight animate__animated`}>
					<a
						className={`${styles['button-contact-mobile']} animate__pulse animate__animated animate__infinite 	infinite animate__slow`}
						href='#contact'>
						<p>Contact me</p> <FiArrowRightCircle className={styles['icon-msg']} />
					</a>
					<img src={imageMe} alt='' className={styles['img-me']} />
				</div>
				<a href='#skills' className={`${styles['icon-down']} animate__backInUp animate__animated`}>
					<FiChevronDown className={styles['icon-down-icon']} />
				</a>
			</div>
		</section>
	)
}

export default Header
