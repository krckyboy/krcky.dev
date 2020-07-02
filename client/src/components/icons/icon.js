import React from 'react'
import PropTypes from 'prop-types'
import './icon.css'

const Icon = (props) => (
	<a href={props.link} className='a' target='_blank' rel="noopener noreferrer" >
		<img src={props.src} alt={props.alt} className='icon' />
	</a>
)

Icon.propTypes = {
	link: PropTypes.string,
	src: PropTypes.string,
	alt: PropTypes.string
}


export default Icon