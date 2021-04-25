import React from 'react'
import Icon from './icon'
import facebook from './assets/facebook.svg'
import github from './assets/github.svg'
import gmail from './assets/gmail.svg'
import instagram from './assets/instagram.svg'
import linkedin from './assets/linkedin.svg'
import './icon.css'

const Icons = () => (
	<div className='iconContainer'>
		<Icon src={facebook} alt="Facebook" link='https://www.facebook.com/profile.php?id=100005125035371' />
		<Icon src={github} alt="Github" link='https://github.com/krckyboy' />
		<Icon src={gmail} alt="Gmail" link='mailto:dusan.todorovic.2016@gmail.com' />
		<Icon src={instagram} alt="Instagram" link='https://www.instagram.com/krckyboy/' />
		<Icon src={linkedin} alt="Linkedin" link='https://www.linkedin.com/in/dusan-todorovic-krcky//' />
	</div>
)

export default Icons