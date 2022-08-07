import styled from '@emotion/styled'
import '../styles/Home.scss'
import Header from './Header'
import Intro from './Intro'
import Skills from './Skills'
import Timeline from './Timeline'
import useScrollPosition from '@react-hook/window-scroll'
import { useEffect, useState } from 'react'
import { useSpring, animated } from 'react-spring'
import BusinessCardIcon from '../assets/img/business-card-icon.png'
import Footer from './Footer'
import { Tooltip } from '@mui/material'
import Projects from './Projects'
import Contact from './Contact'

const Content = styled.div`
    margin: 0 10%;
`

const Home = () => {
    const [belowFold, setBelowFold] = useState(false)
    const scrollY = useScrollPosition(10)

    const card = useSpring({ height: belowFold ? '0%' : '75%' })
    const header = useSpring({ height: belowFold ? '12vh' : '100vh' })
    const nav = useSpring({ marginBottom: belowFold ? '0vh' : '10vh' })
    const content = useSpring({ marginTop: belowFold ? '10%' : '0%' })
    const bcIcon = useSpring({ right: belowFold ? '60px' : '-300px' })

    useEffect(() => {
        if (scrollY > 100 && !belowFold) {
            setBelowFold(true)
        } else if (scrollY <= 100 && belowFold) {
            setBelowFold(false)
        }
    }, [belowFold, scrollY])

    const bcIconClickHandler = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <>
            <Header
                belowFold={belowFold}
                header={header}
                card={card}
                nav={nav}
            />
            <Content as={animated.div} style={content}>
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
        </>
    )
}

export default Home
