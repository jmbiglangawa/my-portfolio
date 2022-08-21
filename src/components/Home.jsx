import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Header from './Header'
import Intro from './Intro'
import Skills from './Skills'
import Timeline from './Timeline'
import useScrollPosition from '@react-hook/window-scroll'
import Footer from './Footer'
import Projects from './Projects'
import Contact from './Contact'
import classnames from 'classnames'
import CardIcon from './CardIcon'
import '../styles/Home.scss'

const Content = styled.div`
    margin: 0 10%;
    margin-top: 150vh;
    transition: margin-top 0.5s;

    @media (max-width: 1300px) {
        margin-left: 5%;
        margin-right: 5%;
    }

    @media (max-width: 1024px) {
        .skills {
            display: none;
        }
    }
`

const Home = () => {
    const [belowFold, setBelowFold] = useState(false)
    const scrollY = useScrollPosition(10)
    const fold = 100

    useEffect(() => {
        if (scrollY > fold && !belowFold) {
            setBelowFold(true)
        } else if (scrollY <= fold && belowFold) {
            setBelowFold(false)
        }
    }, [scrollY, belowFold])

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
            <CardIcon belowFold={belowFold} />
            <Footer />
        </div>
    )
}

export default Home
