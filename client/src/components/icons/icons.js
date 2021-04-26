import React from 'react'
import Icon from './icon'
import github from './assets/github.svg'
import gmail from './assets/gmail.svg'
import linkedin from './assets/linkedin.svg'
import './icon.css'

const Icons = () => (
	<div className='iconContainer'>
		<Icon src={github} alt="Github" link='https://github.com/krckyboy' />
	  <Icon src={linkedin} alt="Linkedin" link='https://www.linkedin.com/in/dusan-todorovic-krcky//' />
	  <Icon src={gmail} alt="Gmail" link='mailto:dusan.todorovic.2016@gmail.com' />
	</div>
)

export default Icons