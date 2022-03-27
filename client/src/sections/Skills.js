import React from 'react'
import styled from 'styled-components'
import SecondaryH from '../components/SecondaryH'
import SectionContainer from '../components/SectionContainer'

const Container = styled.div`
	max-width: 120rem;
	margin: 0 auto;
`

const ListContainer = styled.div`
	margin-top: 6.4rem;

	ul {
		font-weight: 400;
		font-size: 1.8rem;
		line-height: 151.5%;
		list-style: initial;

		@media (min-width: 768px) and (min-height: 512px) {
			font-size: 2rem;
		}

		@media (min-width: 1080px) and (min-height: 512px) {
			font-size: 2.4rem;
		}
	}

	li {
		display: block;

		@media (min-width: 1440px) and (min-height: 512px) {
			display: inline-block;
			width: 50%;
		}

		:not(:first-child) {
			margin-top: 2.4rem;
		}
	}
`

const Skills = () => {
	return (
		<SectionContainer backgroundColor={' #0C1A2C'}>
			<Container>
				<SecondaryH text={'MY SKILLS'} iconSrc={'/images/box skills.svg'} />
				<ListContainer>
					<ul>
						<li>- Responsive Web Design</li>
						<li>- HTML5, CSS3, Sass</li>
						<li>- JavaScript (ES6+)</li>
						<li>- React</li>
						<li>- Vue</li>
						<li>- Node.js</li>
						<li>- MongoDB</li>
						<li>- SQL</li>
						<li>- Version Control</li>
						<li>- UI/UX: Figma</li>
					</ul>
				</ListContainer>
			</Container>
		</SectionContainer>
	)
}

export default Skills
