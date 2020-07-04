import React from 'react'
import styled from 'styled-components'
import SecondaryH from '../components/SecondaryH'
import SectionContainer from '../components/SectionContainer'

const Container = styled.div`
	p {
		font-weight: 400;
		font-size: 2.2rem;
		line-height: 151.5%;

		@media (min-width: 768px) and (min-height: 512px) {
			font-size: 2.4rem;
		}

		@media (min-width: 1080px) and (min-height: 512px) {
			font-size: 3.2rem;
		}

		&:not(:first-child) {
			margin-top: 3.2rem;
		}

		span {
			color: #00ffb6;
			font-weight: 600;
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
				<SecondaryH text={'ABOUT ME'} iconSrc={'/images/box about.svg'} />
				<ParagraphContainer>
					<p>
						Musician and web developer born in 1991 in Belgrade, currently
						living in <span>Užice</span>, Serbia. I come from a musical family.
						I play keyboard and accordion, and I also teach people how to play
						accordion. I love animals.{' '}
					</p>
					<p>
						I design and create web apps. I have one year of formal work
						experience, working as a <span>front-end developer</span> in a
						company called Boca Tech in Belgrade, although my assignments also
						included UI/UX design (mock-ups, prototyping), data-entry and other.
						I also do freelancing as a developer and UI/UX designer, so overall
						I have over 2 years of experience.
					</p>
					<p>
						My main tech stack is JavaScript. For client side, that would be{' '}
						<span>React</span>, and for back-end, <span>Node.js</span>{' '}
						(Express.js), and I am also familiar with <span>SQL</span>{' '}
						(PostgreSQL) and <span>MongoDB</span>. My plan is to expand my
						skills with new tools and frameworks such as Svelte.js, GraphQL and
						other.
					</p>
					<p>
						I accept new <span>clients</span> but I would also be interested in
						a great full-time <span>job</span> with awesome colleagues!
					</p>
				</ParagraphContainer>
			</Container>
		</SectionContainer>
	)
}

export default About
