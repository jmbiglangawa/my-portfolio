import styled from '@emotion/styled'

const Wrap = styled.div`
    padding: 5% 0;
`

const Wrapper = ({ id, children }) => {
    return <Wrap id={id}>{children}</Wrap>
}

export default Wrapper

export { Wrap }
