import React from 'react'
import styled from 'styled-components'
import Icon from '../components/icons/icon'
import facebook from '../components/icons/assets/facebook.svg'
import gmail from '../components/icons/assets/gmail.svg'
import instagram from '../components/icons/assets/instagram.svg'

const SectionContainer = styled.div`
	padding: 3rem 2.4rem;
	background-color: #0c1a2c;

	@media (min-width: 768px) {
		padding: 3rem 14rem;
	}

	@media (min-width: 960px) {
		padding: 4rem 18rem;
	}

	@media (min-width: 1200px) {
		padding: 5rem 24rem;
	}
`

const Container = styled.div`
	display: flex;
	justify-content: center;
	text-align: center;
	background-size: cover;

	font-size: 2.2rem;

	@media (min-width: 768px) and (min-height: 512px) {
		font-size: 3.2rem;
	}

	@media (min-width: 1080px) and (min-height: 512px) {
		font-size: 5.2rem;
	}
`

const ContactContainer = styled.div`
	padding: 3.2rem 2.4rem;
	max-width: 120rem;
`

const IconContainer = styled.div`
	margin-top: 3.6rem;
`

const Footer = () => {
	return (
		<SectionContainer id={'contact'}>
			<Container>
				<ContactContainer>
					<p>Wanna hire me? Contact me!</p>
					<IconContainer>
						<Icon
							src={facebook}
							alt='Facebook'
							link='https://www.facebook.com/profile.php?id=100005125035371'
						/>
						<Icon
							src={gmail}
							alt='Gmail'
							link='mailto:dusan.todorovic.2016@gmail.com'
						/>
						<Icon
							src={instagram}
							alt='Instagram'
							link='https://www.instagram.com/krckyboy/'
						/>
					</IconContainer>
				</ContactContainer>
			</Container>
		</SectionContainer>
	)
}

export default Footer
