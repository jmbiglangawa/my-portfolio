import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Header from './Header'
import Intro from './Intro'
import Skills from './Skills'
import Timeline from './Timeline'
import useScrollPosition from '@react-hook/window-scroll'
import { useSpring, animated } from 'react-spring'
import BusinessCardIcon from '../assets/img/business-card-icon.png'
import Footer from './Footer'
import { Tooltip } from '@mui/material'
import Projects from './Projects'
import Contact from './Contact'
import classnames from 'classnames'
import '../styles/Home.scss'

const Content = styled.div`
    margin: 0 10%;
    margin-top: 150vh;
    transition: margin-top 0.5s;
`

const Home = () => {
    const [belowFold, setBelowFold] = useState(false)
    const scrollY = useScrollPosition(60)
    const fold = 100

    const bcIcon = useSpring({ right: belowFold ? '60px' : '-300px' })

    useEffect(() => {
        if (scrollY > fold && !belowFold) {
            setBelowFold(true)
        } else if (scrollY <= fold && belowFold) {
            setBelowFold(false)
        }
    }, [scrollY, belowFold])

    const bcIconClickHandler = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <div id="home">
            <Header belowFold={belowFold} />
            <Content className={classnames({ contentScroll: belowFold })}>
                <Intro />
                <Skills />
                <Timeline />
                <Projects />
                <Contact />
            </Content>
            <Footer />
            <animated.div
                style={bcIcon}
                className="bcIcon animate__swing"
                onClick={bcIconClickHandler}>
                <Tooltip title="Scroll to top">
                    <img src={BusinessCardIcon} alt="bcIcon" />
                </Tooltip>
            </animated.div>
        </div>
    )
}

export default Home
