import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	padding: 6.4rem 2.4rem;
`

const SecondaryH = ({ backgroundColor, children }) => {
	return <Container style={{ backgroundColor: backgroundColor }}>{children}</Container>
}

export default SecondaryH
 