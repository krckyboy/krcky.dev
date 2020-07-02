import React from 'react'
import Box from './Box'
import { useSpring, animated } from 'react-spring'

export const Boxes = () => {
	const fade = useSpring({
		config: { duration: 2000 },
		from: { opacity: 0 },
		to: { opacity: 1 }
	})

	return (
		<animated.div className="containerPlx" style={fade}>
			<div><Box dimensions={30} anim='box1' fill='#8C5252' top={'25%'} left={'10%'} /></div>
			<div><Box dimensions={90} anim='box2' fill='#6FCF97' top={'65%'} left={'25%'} /></div>
			<div><Box dimensions={70} anim='box3' fill='#409AB7' top={'20%'} left={'40%'} /></div>
			<div><Box dimensions={70} anim='box4' fill='#4D443C' top={'40%'} left={'80%'} /></div>
			<div><Box dimensions={30} anim='box5' fill='#6F508B' top={'80%'} left={'70%'} /></div>
			<div><Box dimensions={20} anim='box6' fill='#6F6DBC' top={'10%'} left={'90%'} /></div>
		</animated.div>
	)
}

export default Boxes