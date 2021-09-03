import React from 'react'
import '../styles/Header.scss'
import WhiteLine from '../assets/svg/icons/brand-white-line.svg'
import GithubIcon from '../assets/svg/icons/github-header.svg'
import BusinessCard from '../assets/svg/business-card.svg'
import PrintIcon from '../assets/svg/icons/print-icon.svg'
import Tilt from 'react-parallax-tilt'
import Card from './Card'

const Header = () => {
    return (
        <div className="header">
            <div className="brand-name-wrapper">
                <div className="brand-name">
                    <h6>theBiglangAwaClub.web.app</h6>
                    <img src={WhiteLine} alt="" />
                </div>
            </div>

            <div className="view-on-github">
                <img src={GithubIcon} alt="" />
                <a href="#">
                    <h6>View on Github</h6>
                </a>
            </div>

            <div className="bc-wrapper">
                <Tilt className="tilt-wrapper">
                    {/* <img src={BusinessCard} alt="" /> */}
                    <Card />
                </Tilt>

                <div className="below-wrapper">
                    <a href="#">
                        <h6>What's this?</h6>
                    </a>
                    <a href="#" className="print">
                        <img src={PrintIcon} alt="" />
                        <h6>Get a softcopy</h6>
                    </a>
                </div>
            </div>

            <div className="navigation-wrapper">
                <nav>
                    <ul>
                        <li>
                            <a href="#">HOME</a>
                        </li>
                        <li>
                            <a href="#">BLOG</a>
                        </li>
                        <li>
                            <a href="#">PROJECTS</a>
                        </li>
                        <li>
                            <a href="#">CONTACT</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header
