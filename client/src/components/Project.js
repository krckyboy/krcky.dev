import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
	position: relative;

	:not(:last-child) {
		margin-bottom: 3.2rem;
	}
`

const ImageContainer = styled.div`
	img {
        height: 20rem;
        object-fit: cover;
		max-width: 100%;
		filter: ${(props) => (props.hovered ? 'brightness(50%)' : 'none')};
	}

	position: relative;
`

const LinksContainer = styled.div`
	position: absolute;
	top: 35%;
	left: 50%;
    transform: translate(-50%);
    opacity: ${props => props.hovered ? '1' : '0'};

	font-weight: 500;
	font-size: 1.6rem;
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
	font-weight: 500;
	font-size: 16px;
	line-height: 20px;
	display: flex;
	padding: 1.2rem;
	justify-content: space-between;
	margin-top: -3px;
	border-top: solid #0a9d73;
`

const Project = ({ websiteUrl, codeUrl, name, stack, imgUrl, hoveredProps = false }) => {
	const [hovered, setHovered] = useState(hoveredProps)

	function setHoveredTrue() {
		setHovered(true)
	}

	function setHoveredFalse() {
		setHovered(false)
	}

	return (
		<Container>
			<ImageContainer
				hovered={hovered}
				onMouseEnter={setHoveredTrue}
				onTouchStart={setHoveredTrue}
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
