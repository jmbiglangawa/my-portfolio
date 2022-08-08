import styled from '@emotion/styled'
import Wrapper from './Wrapper'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import LanguageIcon from '@mui/icons-material/Language'
import '../styles/Base.scss'

const TitleSpace = styled.div`
    margin-bottom: 50px;
`

const MessageWrap = styled.p`
    width: 80%;
`

const Contacts = styled.div`
    display: flex;
    align-items: center;
    color: #8f70e7;
    margin-bottom: 5px;

    & svg {
        margin-right: 10px;
    }

    & a {
        color: #8f70e7;
    }
`

const Contact = () => {
    return (
        <Wrapper id="contacts">
            <Wrapper center>
                <h2 className="horizon-background">Contacts</h2>
            </Wrapper>
            <TitleSpace />
            <h3>Thank you for visiting my portfolio!</h3>
            <MessageWrap>
                I did my best in making this portfolio! If you have appreciated
                my portfolio and have some offers for me, please don't hesitate
                to email me in the provided email below, and we can discuss
                about it. You can also send me a message via LinkedIn.
            </MessageWrap>

            <div>
                <Contacts>
                    <EmailIcon />{' '}
                    <a href="mailto:offer-me.marvie@outlook.com">
                        offer-me.marvie@outlook.com
                    </a>
                </Contacts>
                <Contacts>
                    <LinkedInIcon />
                    <a
                        href="https://www.linkedin.com/in/jmbiglangawa/"
                        target="_blank"
                        rel="noreferrer">
                        /in/jmbiglangawa
                    </a>
                </Contacts>
                <Contacts>
                    <LanguageIcon />
                    marvie.web.app
                </Contacts>
            </div>
        </Wrapper>
    )
}

export default Contact
