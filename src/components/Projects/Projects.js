import React from 'react'
import styles from './Projects.module.css'
import ImgProject1 from '../../assets/img/wheater-projects.jpg'
import {
	SiReact,
	SiJavascript,
	SiHtml5,
	SiBootstrap,
	SiGit,
	SiCss3,
	SiTypescript,
	SiSass,
	SiAdobephotoshop,
} from 'react-icons/si'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const Projects = props => {
	return (
		<section className={`${styles.projects} wrapper`} id='projects'>
			<AnimationOnScroll animateIn='animate__fadeInRightBig' animateOnce={true}>
				<svg width='0' height='0'>
					<linearGradient id='pink-gradient' x1='0%' y1='0%' x2='100%' y2='0%'>
						<stop stopColor='#4639E3' offset='0%' />
						<stop stopColor='#3F63FD' offset='100%' />
					</linearGradient>
				</svg>
				<div className={styles['projects-container']}>
					<div className={styles.top}>
						<h3>Projects</h3>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui distinctio ut eveniet reiciendis earum ad
							quo delectus maiores consequatur, assumenda cupiditate praesentium dolore dolores nesciunt, repudiandae
							alias et molestias voluptates?
						</p>
					</div>
					<div className={styles.bottom}>
						<div className={styles.card}>
							<div className={styles['card-top']}>
								<div className={styles['card-back']}>
									<div className={styles['project-bgc']}></div>
									<p>Weather APP</p>
									<div className={styles['project-link']}>
										<a href='github.com'> Repozytorium</a>
										<a href='github.com'> Live</a>
									</div>
								</div>
								<img src={ImgProject1} alt='' className={styles['card-img']} />
							</div>
							<div className={styles.stack}>
								<SiHtml5 className={styles.icon} />
								<SiSass className={styles.icon} />
								<SiJavascript className={styles.icon} />
								<SiGit className={styles.icon} />
							</div>
						</div>
					</div>
				</div>
			</AnimationOnScroll>
		</section>
	)
}

export default Projects
