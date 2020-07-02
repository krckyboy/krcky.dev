import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	align-items: center;

	img {
		width: 5.6rem;
	}
`

const Heading = styled.h2`
	font-size: 3.2rem;
	margin-left: 2.4rem;
`

const SecondaryH = ({ text, iconSrc }) => {
	return (
		<Container>
			<img src={iconSrc} alt='About me' />
			<Heading>{text}</Heading>
		</Container>
	)
}

export default SecondaryH
