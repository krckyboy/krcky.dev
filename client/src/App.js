import React from 'react'
import FirstSection from './sections/FirstSection'
import About from './sections/About'
import Skills from './sections/Skills'
// import Projects from './sections/Projects'
import Footer from './sections/Footer'
import Contact from './sections/Contact'
import './App.css'

function App() {
	return (
		<>
			<FirstSection />
			<About />
			<Skills />
			{/*<Projects />*/}
			<Contact />
			<Footer />
		</>
	)
}

export default App
