import React from 'react'
import styled from 'styled-components'

const Heading = styled.h1`
	font-weight: 400;
	font-size: 3rem;
	text-align: center;
	margin-bottom: 1.2rem;

	@media only screen and (min-width: 640px) {
		font-size: 4rem;
	}

	@media only screen and (min-width: 720px) {
		font-size: 5rem;
	}

	@media only screen and (min-width: 960px) {
		font-size: 6rem;
	}

	@media only screen and (min-width: 1024px) {
		font-size: 7.2rem;
	}

	@media only screen and (min-width: 1440px) {
		font-size: 8rem;
	}

	@media only screen and (min-width: 2048px) {
		font-size: 9rem;
	}

	@media only screen and (min-width: 2560px) {
		font-size: 10rem;
	}

	@media only screen and (min-width: 3440px) {
		.h1 {
			font-size: 11rem;
		}
	}
`

const Name = () => (
	<Heading className='h1'>
		<span style={{ fontWeight: 600 }}>Dušan Todorović </span>
		<span style={{ color: '#00FFB6' }}>Krcky</span>
	</Heading>
)

export default Name
