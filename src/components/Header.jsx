import '../styles/Header.scss'
import WhiteLine from '../assets/svg/icons/brand-white-line.svg'
import GithubIcon from '../assets/svg/icons/github-header.svg'
import BusinessCard from '../assets/svg/business-card.svg'
import Tilt from 'react-parallax-tilt'
import DownloadIcon from '@mui/icons-material/Download'
import Button from '@mui/material/Button'
import { Link as ExternalLink } from '@mui/material'
import classnames from 'classnames'
import useScrollPosition from '@react-hook/window-scroll'
import { useMediaQuery } from '@react-hook/media-query'
import Constants from './../util/Constants'

const Navigator = ({ target }) => {
    const scrollY = useScrollPosition(60)
    const isMobile = useMediaQuery(Constants.phoneQuery)

    const onClick = () => {
        if (target === 'HOME') {
            window.scrollTo(0, 0)
            return
        }

        let timeout = 0
        const root = document.getElementById('root')
        if (!isMobile && scrollY < 100 && target !== 'HOME') {
            root.classList.add('disable-transition')
            window.scrollTo(0, 101)
            timeout = 60
        }

        setTimeout(() => {
            const nav = document.getElementById(target.toLowerCase())
            nav.scrollIntoView({ behavior: 'smooth' })

            if (!isMobile) {
                root.classList.remove('disable-transition')
            }
        }, timeout)
    }

    return (
        <li>
            <ExternalLink onClick={onClick}>{target}</ExternalLink>
        </li>
    )
}

const Header = ({ belowFold, ref }) => {
    const download = () => {
        fetch(process.env.PUBLIC_URL + '/img/business-card.png').then(
            response => {
                response.arrayBuffer().then(buffer => {
                    const url = window.URL.createObjectURL(new Blob([buffer]))
                    const link = document.createElement('a')
                    link.href = url
                    link.setAttribute(
                        'download',
                        'John Marvie Biglang-awa - Business Card.png'
                    )
                    document.body.appendChild(link)
                    link.click()
                })
            }
        )
    }

    return (
        <div
            ref={ref}
            className={classnames('header', { headerScroll: belowFold })}
            id="home">
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

            <div className="bc-wrapper" id="bc-wrapper">
                <Tilt className="tilt-wrapper">
                    <img className="business-card" src={BusinessCard} alt="" />
                </Tilt>
                <div className="below-wrapper">
                    <Button onClick={download}>
                        <h6>Save a copy</h6>
                        <DownloadIcon />
                    </Button>
                </div>
            </div>

            <div className="navigation-wrapper" id="navigation-wrapper">
                <nav>
                    <ul>
                        <Navigator target="HOME" />
                        <Navigator target="PROJECTS" />
                        <Navigator target="CONTACT" />
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header
