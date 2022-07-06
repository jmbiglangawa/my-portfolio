import styled from '@emotion/styled'
import Browser from '../assets/svg/browser.svg'
import Console from '../assets/svg/console.svg'
import Wrapper from './Wrapper'

const Header = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #8f70e7;
`

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
    margin-bottom: 100px;
`

const Wrap = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    flex-direction: column;

    h4 {
        text-align: center;
    }

    img {
        margin-bottom: 20px;
    }
`

const Intro = () => {
    return (
        <Wrapper>
            <Header>
                <h5>As a full stack web developer,</h5>
                <h3>I work on both</h3>
            </Header>
            <Content>
                <Wrap>
                    <img src={Browser} alt="browser" />
                    <h4>Front-end</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed lorem lectus, convallis vitae eros non, molestie
                        porta nulla. Vivamus id nulla a risus condimentum
                        rhoncus.
                    </p>
                </Wrap>
                <Wrap>
                    <img src={Console} alt="console" />
                    <h4>Back-end</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed lorem lectus, convallis vitae eros non, molestie
                        porta nulla. Vivamus id nulla a risus condimentum
                        rhoncus.
                    </p>
                </Wrap>
            </Content>
        </Wrapper>
    )
}

export default Intro
