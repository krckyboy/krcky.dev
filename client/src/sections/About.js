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
    const now = new Date();
    const currentYear = now.getFullYear();
    const yearsOfExperience = currentYear - 2019;

    return (
        <SectionContainer backgroundColor={' #13243a'}>
            <Container>
                <SecondaryH text={'ABOUT ME'} iconSrc={'/images/box about.svg'}/>
                <ParagraphContainer>
                    <p>
                        Born in 1991 in <span>Belgrade</span> (Serbia), where I'm currently living. I am a father of a
                        lovely girl Thalia and I love animals, especially dogs!{' '}
                    </p>
                    <p>
                        I design and create web apps. I have over {yearsOfExperience} years of practical work
                        experience. I'm currently working as a front-end lead at <a
                        href="https://citrussys.com/" target={"_blank"} rel="noopener noreferrer">Citrus Systems</a> in
                        Belgrade. For more info about my career, check out my <a
                        href="https://www.linkedin.com/in/dusan-todorovic-krcky/" target={"_blank"}
                        rel="noopener noreferrer">Linkedin account</a>!
                    </p>
                    <p>
                        My main tech stack is JavaScript (<span>React</span>/<span>Vue</span>/<span>Node.js</span>). I
                        am lately focusing on expanding my <span>NextJS</span> experience.
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
