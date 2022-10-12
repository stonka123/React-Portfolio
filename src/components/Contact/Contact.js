import React from 'react'
import styles from './Contact.module.css'
import ImgMsg from '../../assets/img/msg-logo.png'

const Contact = () => {
	return (
		<div className={styles.contact} id='contact'>
			<div className={styles['contact-container']}>
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
					<form action=''>
						<div className={styles['form-top']}>
							<input type='text' id='name' placeholder='Name' />
							<input type='text' id='surname' placeholder='surname' />
							<input type='text' id='email' placeholder='email' />
							<input type='text' id='subjects' placeholder='subjects' />
							<textarea name='msg' id='msg' rows='5' placeholder='Message'></textarea>
							<button className={styles.btn}>Send</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Contact
