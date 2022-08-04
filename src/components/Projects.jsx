import styled from '@emotion/styled'
import Wrapper from './Wrapper'

const Content = styled.div`
    /* height: 100%; */
`

const Title = styled.h2`
    text-align: center;
`

const Projects = () => {
    return (
        <Wrapper id="projects">
            <Title>Projects</Title>
            <Content>Projects b0ss</Content>
        </Wrapper>
    )
}

export default Projects
