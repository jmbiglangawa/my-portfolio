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
import Constants from '../util/Constants'
import { useMediaQuery } from '@react-hook/media-query'
import HeaderMobile from './HeaderMobile'
import { useInView } from 'react-intersection-observer'

const Content = styled.div`
    margin: 0 10%;
    margin-top: 150vh;
    transition: margin-top 0.5s;
    margin-bottom: 80px;

    @media (max-width: 1300px) {
        margin-left: 5%;
        margin-right: 5%;
    }

    @media (max-width: 1024px) {
        .skills {
            display: none;
        }
    }

    @media (max-width: 450px) {
        margin-top: 10px;
    }
`

const Home = () => {
    const [belowFold, setBelowFold] = useState(false)
    const scrollY = useScrollPosition(10)
    const isMobile = useMediaQuery(Constants.phoneQuery)
    const { ref, inView } = useInView()
    const fold = 100

    useEffect(() => {
        if (!isMobile) {
            if (scrollY > fold && !belowFold) {
                setBelowFold(true)
            } else if (scrollY <= fold && belowFold) {
                setBelowFold(false)
            }
        } else {
            setBelowFold(false)
        }
    }, [scrollY, belowFold, isMobile])

    return (
        <div id="home">
            <div ref={ref}>
                <Header belowFold={belowFold} />
            </div>
            {isMobile && <HeaderMobile onContent={!inView} />}
            <Content className={classnames({ contentScroll: belowFold })}>
                <Intro />
                <Skills />
                <Timeline />
                <Projects />
                <Contact />
            </Content>
            <Footer />
            <CardIcon belowFold={belowFold} />
        </div>
    )
}

export default Home
