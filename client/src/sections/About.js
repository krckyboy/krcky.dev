import React from 'react'
import styled from 'styled-components'
import SecondaryH from '../components/SecondaryH'
import SectionContainer from '../components/SectionContainer'

const Container = styled.div`
	p {
		font-weight: 500;
		font-size: 2.2rem;
		line-height: 151.5%;

		&:last-child {
			margin-top: 3.2rem;
		}

		span {
			color: #00ffb6;
			font-weight: 600;
		}
	}
`

const ParagraphContainer = styled.div`
	margin-top: 6.4rem;
`

const About = () => {
	return (
		<SectionContainer backgroundColor={' #13243a'}>
			<Container>
				<SecondaryH text={'ABOUT ME'} iconSrc={'/images/box about.png'} />
				<ParagraphContainer>
					<p>
						Musician and web developer born in 1991, currently living in{' '}
						<span>Užice</span>, Serbia. I come from a musical family. I play
						keyboard and accordion, and I also teach people how to play
						accordion. I design and create web apps. I love animals.{' '}
					</p>
					<p>
						I accept new <span>clients</span> but I would also be interested in
						a great remote full-time <span>job</span> with awesome colleagues!
					</p>
				</ParagraphContainer>
			</Container>
		</SectionContainer>
	)
}

export default About
