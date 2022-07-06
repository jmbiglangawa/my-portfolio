import '../styles/Header.scss'
import WhiteLine from '../assets/svg/icons/brand-white-line.svg'
import GithubIcon from '../assets/svg/icons/github-header.svg'
import BusinessCard from '../assets/svg/business-card.svg'
import Tilt from 'react-parallax-tilt'
import HelpIcon from '@mui/icons-material/Help'
import PrintIcon from '@mui/icons-material/Print'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { Link as ExternalLink } from '@mui/material'
import { animated } from 'react-spring'

const Header = ({ header, card, nav, bc }) => {
    return (
        <animated.div style={header} className="header" id="header">
            <div className="brand-name-wrapper">
                <div className="brand-name">
                    <h6>marvie.web.app</h6>
                    <img src={WhiteLine} alt="" />
                </div>
            </div>

            <div className="view-on-github">
                <img src={GithubIcon} alt="" />
                <ExternalLink
                    href="https://github.com/swingspringer/my-portfolio"
                    target="_blank"
                    rel="noopener,noreferrer">
                    <h6>View on Github</h6>
                </ExternalLink>
            </div>

            <animated.div style={card} className="bc-wrapper">
                <Tilt className="tilt-wrapper">
                    <animated.img style={bc} src={BusinessCard} alt="" />
                </Tilt>

                <div className="below-wrapper">
                    <Button>
                        <HelpIcon />
                    </Button>
                    <Button>
                        <PrintIcon />
                    </Button>
                </div>
            </animated.div>

            <animated.div style={nav} className="navigation-wrapper">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">HOME</Link>
                        </li>
                        <li>
                            <Link to="/projects">PROJECTS</Link>
                        </li>
                        <li>
                            <Link to="/contact">CONTACT</Link>
                        </li>
                    </ul>
                </nav>
            </animated.div>
        </animated.div>
    )
}

export default Header
