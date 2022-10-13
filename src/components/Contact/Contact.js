import { useRef, useState } from 'react'
import styles from './Contact.module.css'
import ImgMsg from '../../assets/img/msg-logo.png'
import ImgAlert from '../../assets/img/email-img.png'
import emailjs from '@emailjs/browser'

const Contact = () => {
	const form = useRef()

	function sendEmail(e) {
		e.preventDefault()
		emailjs.sendForm('service_u5w7xug', 'template_sgnaibo', form.current, 'tV1bz6wCHFR_rIWck').then(
			result => {
				console.log(result.text)
				setStatus('Succes')
			},
			error => {
				console.log(error.text)
			}
		)
		e.target.reset()
	}
	const [status, setStatus] = useState('')
	const closeAlert = () => {
		setStatus('')
	}
	const renderAlert = () => (
		<div className={styles.alert} id='alert'>
			<div className={styles['alert-container']}>
				<img src={ImgAlert} alt='' />
			</div>
			<p className={styles.header}>Thank You!</p>
			<p>I'll go back to earth and reply to the email</p>
			<button onClick={closeAlert}>Close</button>
		</div>
	)
	return (
		<section className={`${styles.contact} wrapper`} id='contact'>
			<div className={styles['contact-container']}>
				{status === 'Succes' ? renderAlert() : null}
				<div className={styles.left}>
					<img src={ImgMsg} className={styles.img} />
				</div>
				<div className={styles.right}>
					<div className={styles.top}>
						<h3>Contact me</h3>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur vitae molestiae assumenda, qui
							ipsum iusto quod similique delectus eligendi quia dolorum! Quam at officiis sint qui pariatur? Rerum, ab
							velit!
						</p>
					</div>
					<form ref={form} onSubmit={sendEmail}>
						<div className={styles['form-top']}>
							<div className={styles['form-inputs']}>
								<input type='text' id='name' placeholder='Name' name='name' required />
								<input type='text' id='surname' placeholder='Surname' name='surname' required />
								<input type='text' id='email' placeholder='E-mail' name='email' required />
								<input type='text' id='subjects' placeholder='Subjects' name='subject' required />
							</div>
							<div className={styles['form-area']}>
								<textarea
									className={styles['form-textarea']}
									name='message'
									id='message'
									rows='5'
									placeholder='Message'></textarea>
								<button className={styles.btn}>Send</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</section>
	)
}

export default Contact
