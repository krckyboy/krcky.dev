import React from 'react'
import { useSpring, animated } from 'react-spring'
import Name from '../components/name/Name'
import Text from '../components/text/Text'
import Icons from '../components/icons/icons'
import Boxes from '../components/boxes/Boxes'

const FirstSection = () => {
	const fade = useSpring({
		config: { duration: 1000 },
		from: { opacity: 0 },
		to: { opacity: 1 },
	})

	const scale = useSpring({
		config: { duration: 250 },
		from: { transform: 'scale(0.1)' },
		to: { transform: 'scale(1.0)' },
	})
	return (
		<animated.div className='container' style={fade}>
			<animated.div className='textContainer' style={scale}>
				<Name />
				<Text />
			</animated.div>
			<Icons />
			<Boxes />
		</animated.div>
	)
}

export default FirstSection
