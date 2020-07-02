import React from 'react'
import styled from 'styled-components'
import SecondaryH from '../components/SecondaryH'
import SectionContainer from '../components/SectionContainer'

const Container = styled.div``

const ListContainer = styled.div`
	margin-top: 6.4rem;

	ul {
		font-weight: 500;
		font-size: 2.2rem;
		line-height: 151.5%;
		list-style: initial;
	}

	li {
		display: block;

		:not(:first-child) {
			margin-top: 2.4rem;
		}
	}
`

const Skills = () => {
	return (
		<SectionContainer backgroundColor={' #0C1A2C'}>
			<Container>
				<SecondaryH text={'MY SKILLS'} iconSrc={'/images/box skills.png'} />
				<ListContainer>
					<ul>
						<li>- Responsive web design</li>
						<li>- HTML5, CSS3</li>
						<li>- JavaScript (ES6+)</li>
						<li>- React</li>
						<li>- Node.js</li>
						<li>- MongoDB & SQL</li>
						<li>- Version Control</li>
						<li>- UI/UX: Figma</li>
					</ul>
				</ListContainer>
			</Container>
		</SectionContainer>
	)
}

export default Skills
