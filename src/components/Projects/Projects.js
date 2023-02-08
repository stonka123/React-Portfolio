import React from 'react'
import styles from './Projects.module.css'
import ImgProject1 from '../../assets/img/wheater-projects.jpg'
import ImgProject2 from '../../assets/img/project2.jpg'
import ImgProject3 from '../../assets/img/Signerp.jpg'
import ImgProject4 from '../../assets/img/projekt4.jpg'
import ImgProject5 from '../../assets/img/projekt5.jpg'
import ImgProject6 from '../../assets/img/projekt6.jpg'
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
	SiFirebase,
	SiNpm,
} from 'react-icons/si'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const Projects = props => {
	return (
		<div className={styles.test}>
			<AnimationOnScroll animateIn='animate__fadeInRightBig' animateOnce={true}>
				<section className={`${styles.projects} `} id='projects'>
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
								All my projects are made with the mobile first approach. According to this rule, they are responsive
								and, together with the newly learned technology, are constantly updated.
							</p>
						</div>

						<div className={styles.bottom}>
							<div className={styles.card}>
								<div className={styles['card-top']}>
									<div className={styles['card-back']}>
										<div className={styles['project-bgc']}></div>
										<p>CheckFood - Culinary recipes </p>
										<div className={styles['project-link']}>
											<a href='https://github.com/stonka123/CheckFoood' target='_blank' rel='noopener noreferrer'>
												{' '}
												Repository
											</a>
											<a href='https://stonka123.github.io/CheckFoood/' target='_blank' rel='noopener noreferrer'>
												{' '}
												Live
											</a>
										</div>
									</div>
									<img src={ImgProject6} alt='' className={styles['card-img']} />
								</div>
								<div className={styles.stack}>
									<SiReact className={styles.icon} />
									<SiFirebase className={styles.icon} />
									<SiNpm className={styles.icon} />
									<SiCss3 className={styles.icon} />
									<SiGit className={styles.icon} />
								</div>
							</div>
							{/*  */}
							<div className={styles.card}>
								<div className={styles['card-top']}>
									<div className={styles['card-back']}>
										<div className={styles['project-bgc']}></div>
										<p>Crypto Checker app</p>
										<div className={styles['project-link']}>
											<a href='https://github.com/stonka123/crypto-app' target='_blank' rel='noopener noreferrer'>
												{' '}
												Repository
											</a>
											<a href='https://stonka123.github.io/crypto-app/' target='_blank' rel='noopener noreferrer'>
												{' '}
												Live
											</a>
										</div>
									</div>
									<img src={ImgProject5} alt='' className={styles['card-img']} />
								</div>
								<div className={styles.stack}>
									<SiReact className={styles.icon} />
									<SiNpm className={styles.icon} />
									<SiCss3 className={styles.icon} />
									<SiGit className={styles.icon} />
								</div>
							</div>
							{/*  */}
							<div className={styles.card}>
								<div className={styles['card-top']}>
									<div className={styles['card-back']}>
										<div className={styles['project-bgc']}></div>
										<p>Weather application</p>
										<div className={styles['project-link']}>
											<a href='https://github.com/stonka123/Weather-app' target='_blank' rel='noopener noreferrer'>
												{' '}
												Repository
											</a>
											<a href='https://stonka123.github.io/Weather-app/' target='_blank' rel='noopener noreferrer'>
												{' '}
												Live
											</a>
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
							<div className={styles.card}>
								<div className={styles['card-top']}>
									<div className={styles['card-back']}>
										<div className={styles['project-bgc']}></div>
										<p>Calculator spindle</p>
										<div className={styles['project-link']}>
											<a href='https://github.com/stonka123/App-cnc' target='_blank' rel='noopener noreferrer'>
												{' '}
												Repository
											</a>
											<a href='https://stonka123.github.io/App-cnc/' target='_blank' rel='noopener noreferrer'>
												{' '}
												Live
											</a>
										</div>
									</div>
									<img src={ImgProject2} alt='' className={styles['card-img']} />
								</div>
								<div className={styles.stack}>
									<SiHtml5 className={styles.icon} />
									<SiSass className={styles.icon} />
									<SiJavascript className={styles.icon} />
									<SiGit className={styles.icon} />
								</div>
							</div>
							<div className={styles.card}>
								<div className={styles['card-top']}>
									<div className={styles['card-back']}>
										<div className={styles['project-bgc']}></div>
										<p>Company management system</p>
										<div className={styles['project-link']}>
											<a href='https://github.com/stonka123/Sight-ERP' target='_blank' rel='noopener noreferrer'>
												{' '}
												Repository
											</a>
											<a href='https://stonka123.github.io/Sight-ERP/' target='_blank' rel='noopener noreferrer'>
												{' '}
												Live
											</a>
										</div>
									</div>
									<img src={ImgProject3} alt='' className={styles['card-img']} />
								</div>
								<div className={styles.stack}>
									<SiHtml5 className={styles.icon} />
									<SiSass className={styles.icon} />
									<SiJavascript className={styles.icon} />
									<SiGit className={styles.icon} />
								</div>
							</div>
							<div className={styles.card}>
								<div className={styles['card-top']}>
									<div className={styles['card-back']}>
										<div className={styles['project-bgc']}></div>
										<p>Portfolio page</p>
										<div className={styles['project-link']}>
											<a href='https://github.com/stonka123' target='_blank' rel='noopener noreferrer'>
												{' '}
												Repository
											</a>
											<a href='https://tomasztwarowski.pl/' target='_blank' rel='noopener noreferrer'>
												{' '}
												Live
											</a>
										</div>
									</div>
									<img src={ImgProject4} alt='' className={styles['card-img']} />
								</div>
								<div className={styles.stack}>
									<SiReact className={styles.icon} />
									<SiCss3 className={styles.icon} />
									<SiAdobephotoshop className={styles.icon} />
									<SiGit className={styles.icon} />
								</div>
							</div>
						</div>
					</div>
				</section>
			</AnimationOnScroll>
		</div>
	)
}

export default Projects
