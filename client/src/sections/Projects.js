import React from 'react'
import styled from 'styled-components'
import SecondaryH from '../components/SecondaryH'
import SectionContainer from '../components/SectionContainer'
import Project from '../components/Project'

const Container = styled.div`
	max-width: 120rem;
	margin: 0 auto;
`

const ProjectsContainer = styled.div`
	margin-top: 6.4rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
`

const projects = [
	{
		websiteUrl: 'https://jelenacaldic.com/',
		codeUrl: 'https://github.com/krckyboy/jelena_caldic',
		name: 'Jelena Ćaldić',
		stack: 'React',
		imgUrl: '/images/jelena_caldic_cut.png',
	},
	{
		websiteUrl: 'https://jovana-painter-static.netlify.app/',
		codeUrl: 'https://github.com/krckyboy/jovana_strapi',
		name: 'Jovana',
		stack: 'React, Strapi',
		imgUrl: '/images/jovana_cut.png',
	},
	{
		websiteUrl: 'https://krckyboy.github.io/John-s-Bar/',
		codeUrl: 'https://github.com/krckyboy/John-s-Bar',
		name: 'John\'s bar',
		stack: 'HTML, SASS, JS',
		imgUrl: '/images/john_bar_cut.png',
	},
	{
		websiteUrl: 'https://krckyboy.github.io/John_Smith_Photography/',
		codeUrl: 'https://github.com/krckyboy/John_Smith_Photography',
		name: 'JS Photography',
		stack: 'HTML, SASS, JS',
		imgUrl: '/images/john_photography_cut.png',
	},
]

const Projects = () => {
	return (
		<SectionContainer backgroundColor={' #13243A'}>
			<Container>
				<SecondaryH text={'PROJECTS'} iconSrc={'/images/box projects.svg'} />
				<ProjectsContainer>
					{projects.map((p) => (
						<Project {...p} key={p.name} />
					))}
				</ProjectsContainer>
			</Container>
		</SectionContainer>
	)
}

export default Projects
