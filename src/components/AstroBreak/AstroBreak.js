import React from 'react'
import styles from './AstroBreak.module.css'
import BreakImg from '../../assets/img/astro-break.png'
import { AnimationOnScroll } from 'react-animation-on-scroll'

function AstroBreak() {
	return (
		<AnimationOnScroll animateIn='animate__fadeInUpBig' animateOnce={true} duration={1}>
			<div className={`${styles.container}`}>
				<img src={BreakImg} className={`${styles.img}`} />
			</div>
		</AnimationOnScroll>
	)
}

export default AstroBreak
