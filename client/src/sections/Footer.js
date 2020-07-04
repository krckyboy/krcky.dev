import React from 'react'
import styled from 'styled-components'

const Container = styled.footer`
	background-color: #13243A;
	display: flex;
	justify-content: center;
	text-align: center;

	line-height: 20px;
	font-size: 1.2rem;
	padding: 1.6rem;

	@media (min-width: 512px) and (min-height: 512px) {
		font-size: 1.4rem;
	}

	@media (min-width: 768px) and (min-height: 512px) {
		font-size: 1.8rem;
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
					<a href='https://krcky.dev/'>Dušan Todorović Krcky</a>
				</p>
			</FooterContainer>
		</Container>
	)
}

export default Footer
