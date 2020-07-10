import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

const Container = styled.div`
	position: relative;
	flex-wrap: wrap;

	@media (min-width: 750px) {
		flex: 0 0 364px;
		max-width: 33.3333%;
		min-width: 350px;
		margin-right: 1rem;
	}

	:not(:last-child) {
		margin-bottom: 3.2rem;
	}
`

const ImageContainer = styled.div`
	img {
		min-height: 22rem;
		max-height: 40rem;
		object-fit: cover;
		width: 100%;
		filter: ${(props) => (props.hovered ? 'brightness(30%)' : 'none')};
	}

	position: relative;
`

const LinksContainer = styled.div`
	position: absolute;
	top: 35%;
	left: 50%;
	transform: translate(-50%);
	transition: 1s all;
	opacity: ${(props) => (props.hovered ? '1' : '0')};

	font-weight: 500;
	font-size: 16px;
	line-height: 30px;
	display: flex;

	a {
		color: white;
		padding: 0.8rem;
		border: 4px solid white;
		margin-left: 0.8rem;
		margin-right: 0.8rem;
	}
`

const ProjectFooter = styled.div`
	background-color: white;
	color: #0a9d73;
	font-weight: 600;
	font-size: 16px;
	line-height: 20px;
	display: flex;
	padding: 1.2rem;
	justify-content: space-between;
	margin-top: -3px;
	border-top: solid #0a9d73;
`

const Project = ({ websiteUrl, codeUrl, name, stack, imgUrl }) => {
	const [hovered, setHovered] = useState(false)
	const [touched, setTouched] = useState(false)
	const timeoutFunc = useRef(null)

	// Show links and darken image
	function setHoveredTrue() {
		setHovered(true)
	}

	function setHoveredFalse() {
		setHovered(false)
	}

	function handleTouch() {
		setHoveredTrue()
		setTouched(true)
	}

	useEffect(() => {
		// If there's a running timeout, cancel it
		if (timeoutFunc.current !== null) {
			console.log('Cancelling', timeoutFunc.current)
			clearTimeout(timeoutFunc.current)
		}

		if (touched) {
			timeoutFunc.current = setTimeout(() => {
				setHoveredFalse()
			}, 3000)
		}
	}, [hovered])

	return (
		<Container>
			<ImageContainer
				hovered={hovered}
				onMouseEnter={setHoveredTrue}
				onTouchStart={handleTouch}
				onMouseLeave={setHoveredFalse}
				onTouchCancel={setHoveredFalse}
			>
				<img src={imgUrl} alt={name} />
				<LinksContainer hovered={hovered}>
					<a href={websiteUrl} target='_blank' rel='noopener noreferrer'>
						WEBSITE
					</a>
					<a href={codeUrl} target='_blank' rel='noopener noreferrer'>
						CODE
					</a>
				</LinksContainer>
			</ImageContainer>
			<ProjectFooter>
				<h3>{name}</h3>
				<p>{stack}</p>
			</ProjectFooter>
		</Container>
	)
}

export default Project
