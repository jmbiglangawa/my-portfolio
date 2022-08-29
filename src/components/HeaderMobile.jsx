import '../styles/Header.scss'
import WhiteLine from '../assets/svg/icons/brand-white-line.svg'
import { Link as ExternalLink } from '@mui/material'
import useScrollPosition from '@react-hook/window-scroll'
import classnames from 'classnames'

const Navigator = ({ target }) => {
    const scrollY = useScrollPosition(60)

    const onClick = () => {
        // This equation kind of worked out
        const offset =
            scrollY <= 50 ? window.innerHeight + 137 : window.innerHeight / 12
        const locationY =
            scrollY +
            document
                .getElementById(target.toLowerCase())
                .getBoundingClientRect().top -
            offset

        window.scrollTo(0, target === 'HOME' ? 0 : locationY)
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
