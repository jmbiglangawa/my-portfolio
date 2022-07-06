import styled from '@emotion/styled'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import WhiteLine from '../assets/svg/icons/brand-white-line.svg'

const Wrap = styled.div`
    height: 80px;
    background-color: #545454;
    display: flex;
    justify-content: space-between;
    padding: 20px;

    h6,
    p {
        margin: 0;
        color: #ffffff;
    }
`

const Right = styled.div`
    text-align: right;
    color: #ffffff;

    p {
        font-size: 18px;
    }
`

const Footer = () => {
    return (
        <Wrap>
            <div>
                <h6>marvie.web.app</h6>
                <img src={WhiteLine} alt="" />
            </div>

            <Right>
                <h6>all rights reserved</h6>
                <p>@John Marvie Biglang-awa</p>
                <GitHubIcon />
                <LinkedInIcon />
            </Right>
        </Wrap>
    )
}

export default Footer
