import React, { useState } from 'react'
import '../../assets/variable-css/colors.css'
import imageMe from '../../assets/img/test2.jpg'
import styles from './Header.module.css'
import Navbar from '../Navbar/Navbar'

import { FiArrowRightCircle, FiChevronDown } from 'react-icons/fi'

const Header = () => {
	return (
		<section className={styles.header} id='home'>
			<div className={styles.background}></div>
			<div className={`${styles['container-header']} wrapper`}>
				<Navbar />
				<div className={`${styles['container-text']}`}>
					<button className={styles['button-portfolio']} href='#projects'>
						Check my Projects
					</button>
					<h1>Hi! I'm Tomasz Twarowski</h1>
					<h3>Frontend Developer</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati cum alias ea eaque eveniet laborum modi,
						tempora molestiae quas quis nihil, illo iusto voluptatum recusandae. Inventore accusamus cupiditate debitis
						veniam.
					</p>
				</div>
				<div className={styles['container-img']}>
					<a className={styles['button-contact-mobile']}>
						<p>Contact me</p> <FiArrowRightCircle className={styles['icon-msg']} />
					</a>
					<img src={imageMe} alt='' className={styles['img-me']} />
				</div>
				<a href='#skills' className={styles['icon-down']}>
					<FiChevronDown className={styles['icon-down-icon']} />
				</a>
			</div>
		</section>
	)
}

export default Header
