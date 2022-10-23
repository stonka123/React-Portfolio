import { useState } from 'react'
import AstroBreak from './components/AstroBreak/AstroBreak'
import Background from './components/Background/Background'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import 'animate.css/animate.min.css'
function App() {
	return (
		<div className='App'>
			<Background />
			<Header />
			<Skills />
			<AstroBreak />
			<Projects />
			<Contact />
			<Footer />
		</div>
	)
}

export default App
