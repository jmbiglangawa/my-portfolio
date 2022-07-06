import styled from '@emotion/styled'

const Wrap = styled.div`
    padding: 5% 0;
`

const Wrapper = ({ children }) => {
    return <Wrap>{children}</Wrap>
}

export default Wrapper

export { Wrap }
