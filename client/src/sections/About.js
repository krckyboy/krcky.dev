import React from 'react'
import styled from 'styled-components'
import SecondaryH from '../components/SecondaryH'
import SectionContainer from '../components/SectionContainer'

const Container = styled.div`
  p {
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 151.5%;

    @media (min-width: 768px) and (min-height: 512px) {
      font-size: 2rem;
    }

    @media (min-width: 1080px) and (min-height: 512px) {
      font-size: 2.4rem;
    }

    &:not(:first-child) {
      margin-top: 3.2rem;
    }

    span {
      color: #00ffb6;
    }

    a {
      color: #00ffb6;
      font-weight: bold;
    }
  }

  max-width: 120rem;
  margin: 0 auto;
`

const ParagraphContainer = styled.div`
  margin-top: 6.4rem;
`

const About = () => {
    return (
        <SectionContainer backgroundColor={' #13243a'}>
            <Container>
                <SecondaryH text={'ABOUT ME'} iconSrc={'/images/box about.svg'}/>
                <ParagraphContainer>
                    <p>
                        Born in 1991 in Belgrade, Serbia. I've lived most of my life in Valjevo and I'm currently
                        living in <span>Belgrade</span>. I play accordion, and I also teach others how to play it! I
                        love animals!{' '}
                    </p>
                    <p>
                        I design and create web apps. I have over two years of practical work
                        experience. I've worked as a <span>front-end developer</span> in a
                        company called Boca Tech in Belgrade, for almost a year. I'm currently working as a medior
                        front-end developer for <a
                        href="https://citrussys.com/" target={"_blank"} rel="noopener noreferrer">Citrus Systems</a> in Belgrade. I also do
                        freelancing as a javascript developer and UI/UX designer.
                    </p>
                    <p>
                        My main tech stack is JavaScript. For client side, that would be{' '}
                        <span>React</span>, and for back-end, <span>Node.js</span>{' '}
                        (Express.js), and I am also familiar with <span>SQL</span>{' '}
                        (PostgreSQL) and <span>MongoDB</span>.
                    </p>
                    <p>
                        Do not hesitate to <a href="#contact">contact</a> me if you're looking for an experienced
                        developer!
                    </p>
                </ParagraphContainer>
            </Container>
        </SectionContainer>
    )
}

export default About
