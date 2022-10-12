import React from 'react'
import styles from './AstroBreak.module.css'
import BreakImg from '../../assets/img/astro-break.png'

function AstroBreak() {
	return (
		<div className={styles.container}>
			<img src={BreakImg} className={styles.img} />
		</div>
	)
}

export default AstroBreak
