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

const WrapperI = styled(Wrapper)`
    margin-top: 300px;
`

const Intro = () => {
    return (
        <WrapperI>
            <Header>
                <h5>As a full stack web developer,</h5>
                <h3>I work on both</h3>
            </Header>
            <Content>
                <Wrap>
                    <img src={Browser} alt="browser" />
                    <h4>Front-end</h4>
                    <p>
                        Coding and designing frontend is a big different ball
                        game compared to backend technology. As someone who
                        truly appreciates creating clean and intuitive UI's, I
                        have dived into the npm hole and has appreciated all the
                        things I learned in it.
                    </p>
                </Wrap>
                <Wrap>
                    <img src={Console} alt="console" />
                    <h4>Back-end</h4>
                    <p>
                        I didn't start web programming until I had my first job.
                        Challenging at first but when I started to get the hang
                        of it, it was fun to do and learn. There's so much you
                        can do with Java. It became my main programming language
                        for work and at the same time for my hobby.
                    </p>
                </Wrap>
            </Content>
        </WrapperI>
    )
}

export default Intro
