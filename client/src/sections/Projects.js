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
  justify-content: space-between;
  align-items: stretch;

  @media (min-width: 960px) {
    display: grid;
    overflow: hidden;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 1fr;
    grid-column-gap: 8px;
    grid-row-gap: 8px;
  }

  @media (min-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const projects = [
    {
        websiteUrl: 'https://todorovic.dev/',
        codeUrl: 'https://github.com/krckyboy/todorovic.dev',
        name: 'todorovic.dev',
        stack: 'React',
        imgUrl: '/images/projects/todorovicdev.png',
    },
    {
        websiteUrl: 'https://jelenacaldic.com/',
        codeUrl: 'https://github.com/krckyboy/jelena_caldic',
        name: 'Jelena Ćaldić',
        stack: 'React',
        imgUrl: '/images/projects/jelenacaldic.png',
    },
    {
        websiteUrl: 'https://jovana-painter-static.netlify.app/',
        codeUrl: 'https://github.com/krckyboy/jovana_strapi',
        name: 'Jovana',
        stack: 'React, Strapi',
        imgUrl: '/images/projects/jovana.png',
    },
    {
        websiteUrl: 'https://krckyboy.github.io/test/',
        codeUrl: 'https://github.com/krckyboy/test',
        name: 'Citrus Form',
        stack: 'HTML, SASS, JS',
        imgUrl: '/images/projects/test.png',
    },
    {
        websiteUrl: 'https://krckyboy.github.io/John-s-Bar/',
        codeUrl: 'https://github.com/krckyboy/John-s-Bar',
        name: "John's bar",
        stack: 'HTML, SASS, JS',
        imgUrl: '/images/projects/johnsbar.png',
    },
    {
        websiteUrl: 'https://krckyboy.github.io/John_Smith_Photography/',
        codeUrl: 'https://github.com/krckyboy/John_Smith_Photography',
        name: 'JS Photography',
        stack: 'HTML, SASS, JS',
        imgUrl: '/images/projects/johnsphotography.png',
    },
]

const Projects = () => {
    return (
        <SectionContainer backgroundColor={' #13243A'}>
            <Container>
                <SecondaryH text={'PROJECTS'} iconSrc={'/images/box projects.svg'}/>
                <ProjectsContainer>
                    {projects.map((p) => (
                        <Project {...p} key={p.name}/>
                    ))}
                </ProjectsContainer>
            </Container>
        </SectionContainer>
    )
}

export default Projects
