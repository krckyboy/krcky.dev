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
                        Born in 1991 in <span>Belgrade</span> (Serbia), where I'm currently living. I love animals, especially dogs!{' '}
                    </p>
                    <p>
                        I design and create web apps. I have over 3 years of practical work
                        experience. I'm currently working as a front-end lead in a company called <a
                        href="https://citrussys.com/" target={"_blank"} rel="noopener noreferrer">Citrus Systems</a> in Belgrade.
                    </p>
                    <p>
                        My main tech stack is JavaScript - <span>Vue</span> and <span>React</span> on the front-end and <span>Node.js</span>{' '} on the back-end.
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
