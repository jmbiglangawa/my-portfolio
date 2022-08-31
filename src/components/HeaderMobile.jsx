import '../styles/Header.scss'
import WhiteLine from '../assets/svg/icons/brand-white-line.svg'
import { Link as ExternalLink } from '@mui/material'
import classnames from 'classnames'

const Navigator = ({ target }) => {
    const onClick = () => {
        const nav = document.getElementById(target.toLowerCase())
        nav.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <li>
            <ExternalLink onClick={onClick}>{target}</ExternalLink>
        </li>
    )
}

const HeaderMobile = ({ onContent }) => {
    return (
        <div className={classnames('header headerMobile', { show: onContent })}>
            <div className="brand-name-wrapper">
                <div className="brand-name">
                    <h6>marvie.web.app</h6>
                    <img src={WhiteLine} alt="" />
                </div>
            </div>

            <div className="navigation-wrapper">
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

export default HeaderMobile
