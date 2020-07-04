import React from 'react'
import styled from 'styled-components'

const Container = styled.footer`
	background-color: #0c1a2c;
	display: flex;
	justify-content: center;
	text-align: center;

	font-size: 1rem;
	padding: 1.6rem;

	@media (min-width: 512px) and (min-height: 512px) {
		font-size: 1.2rem;
	}

	@media (min-width: 768px) and (min-height: 512px) {
		font-size: 1.6rem;
	}

	a {
		color: #00ffb6;
		font-weight: 600;
		text-decoration: none;
	}
`

const FooterContainer = styled.div`
	padding: 3.2rem 2.4rem;
`

const Footer = () => {
	return (
		<Container>
			<FooterContainer>
				<p>
					Copyright © All Rights Reserved. Developed by{' '}
					<a href='https://krcky.dev/'>Dušan Todorović Krnjevac</a>
				</p>
			</FooterContainer>
		</Container>
	)
}

export default Footer
