import React from 'react'
import styled from 'styled-components'
import SecondaryH from '../components/SecondaryH'
import SectionContainer from '../components/SectionContainer'

const Container = styled.div``

const ProjectsContainer = styled.div`
	margin-top: 6.4rem;

`

const Skills = () => {
	return (
		<SectionContainer backgroundColor={' #13243A'}>
			<Container>
				<SecondaryH text={'PROJECTS'} iconSrc={'/images/box projects.png'} />
				<ProjectsContainer>

				</ProjectsContainer>
			</Container>
		</SectionContainer>
	)
}

export default Skills
