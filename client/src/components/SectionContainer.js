import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	padding: 5.6rem 2.4rem;

	@media (min-width: 768px) {
		padding: 12rem 14rem;
	}

	@media (min-width: 960px) {
		padding: 12rem 18rem;
	}

	@media (min-width: 1200px) {
		padding: 12rem 24rem;
	}
`

const SecondaryH = ({ backgroundColor, children }) => {
	return (
		<Container style={{ backgroundColor: backgroundColor }}>
			{children}
		</Container>
	)
}

export default SecondaryH
