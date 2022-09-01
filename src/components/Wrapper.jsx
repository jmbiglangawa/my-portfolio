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

    scroll-margin-top: 10vh;

    @media screen and (max-device-width: 450px) {
        scroll-margin-top: 12vh;
    }
`

const Wrapper = ({ id, children, center }) => {
    return (
        <Wrap id={id} center={center}>
            {children}
        </Wrap>
    )
}

export default Wrapper
