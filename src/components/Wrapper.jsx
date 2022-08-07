import { css } from '@emotion/react'
import styled from '@emotion/styled'

const Wrap = styled.div`
    ${props =>
        props.center
            ? css`
                  display: flex;
                  align-items: center;
                  justify-content: center;
              `
            : css`
                  padding: 5% 0;
              `}
`

const Wrapper = ({ id, children, center }) => {
    return (
        <Wrap id={id} center={center}>
            {children}
        </Wrap>
    )
}

export default Wrapper
