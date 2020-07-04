import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	padding: 6.4rem 2.4rem;

	@media (min-width: 768px) {
		padding: 14rem 14rem;
	}

	@media (min-width: 960px) {
		padding: 14rem 18rem;
	}

	@media (min-width: 1200px) {
		padding: 14rem 24rem;
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
