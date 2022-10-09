import styles from './Skills.module.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { SiReact, SiJavascript, SiHtml5, SiBootstrap, SiGit, SiCss3, SiTypescript } from 'react-icons/si'
const Skills = () => {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 3,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	}
	return (
		<section className={styles.skills} id='skills'>
			<div className={styles['bgc-skills']}></div>
			<svg width='0' height='0'>
				<linearGradient id='blue-gradient' x1='50%' y1='100%' x2='50%' y2='0%'>
					<stop stopColor='#7a6ded' offset='0%' />
					<stop stopColor='#0091ff' offset='100%' />
				</linearGradient>
			</svg>
			<div className={styles['skill-box']}>
				<h3>Skills</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel provident, eum officia aut iusto sed expedita
					fugit recusandae laudantium dignissimos, quod sint, doloribus numquam perspiciatis! Deleniti earum blanditiis
					ut odit.
				</p>
				<Carousel
					responsive={responsive}
					customTransition='all 0.7s'
					infinite={true}
					className={styles['skill-slider']}>
					<div>
						<SiReact className={styles['skill-icon']} />
						<p>React</p>
					</div>
					<div>
						<SiJavascript className={styles['skill-icon']} />
						<p>JavaScript</p>
					</div>
					<div>
						<SiTypescript className={styles['skill-icon']} />
						<p>TypeScript</p>
					</div>
					<div>
						<SiHtml5 className={styles['skill-icon']} />
						<p>HTML5</p>
					</div>
					<div>
						<SiCss3 className={styles['skill-icon']} />
						<p>CSS3</p>
					</div>
					<div>
						<SiBootstrap className={styles['skill-icon']} />
						<p>Bootstrap</p>
					</div>
					<div>
						<SiGit className={styles['skill-icon']} />
						<p>Git</p>
					</div>
				</Carousel>
			</div>
		</section>
	)
}

export default Skills
