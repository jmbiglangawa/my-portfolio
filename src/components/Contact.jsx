import styled from '@emotion/styled'
import Wrapper from './Wrapper'
import '../styles/Base.scss'

const TitleSpace = styled.div`
    margin-bottom: 50px;
`

const Contacts = () => {
    return (
        <Wrapper id="contacts">
            <Wrapper center className="">
                <h2 className="horizon-background">Contacts</h2>
            </Wrapper>
            <TitleSpace />
            <div>Coming soon...</div>
        </Wrapper>
    )
}

export default Contacts
