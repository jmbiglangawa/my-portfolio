import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import styled from '@emotion/styled'
import Wrapper from './Wrapper'
import '../styles/Base.scss'

const Project = styled.div`
    position: relative;
    background-color: #ffffff;
    height: 200px;
    margin: 0 50px;
    margin-bottom: 40px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    &:hover #banner {
        width: 60%;

        clip-path: polygon(0 0, 100% 0%, 85% 100%, 0% 100%);
    }
`

const Banner = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    height: 100%;
    width: 100%;
    background: url(${props => props.bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left;
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
    transition: width 0.5s, clip-path 1s;
`

const TitleSpace = styled.div`
    margin-bottom: 50px;
`

const Desc = styled.div`
    width: 40% !important;
    position: absolute;
    top: 0;
    right: 0;
    padding: 20px;
    box-sizing: border-box;
`

const ProjectTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & h4 {
        display: inline-block;

        & a svg {
            margin-left: 5px;
            color: #888888;
            width: 20px;
        }
    }

    & span {
        color: #595959;
        font-style: italic;
        font-size: 0.9em;
    }
`

const ProjectList = [
    {
        banner: 'ViReX-E.png',
        name: 'ViReX-E',
        desc:
            'As part of our thesis and our goal to save money, we repaired a broken Treadmill and re-used it as a Virtual Reality Exercise Equipment.',
        date: '03/05/2019',
        link: 'https://youtu.be/9vOnzmItaFo',
    },
    {
        banner: 'Maven-Module-Builder.png',
        name: 'Maven Module Builder',
        desc:
            "This certain project before is utilizing Maven's multi-module setup. Building the project at once takes from 10-45 minutes. I trimmed it down to 1 to 5 minutes to improve work.",
        date: '07/29/2020',
        link: 'https://github.com/swingspringer/MavenModuleBuilder',
    },
    {
        banner: 'usada-kensetsu.png',
        name: 'Usada Kensetsu',
        desc:
            'A project I worked with people globally. This is primarily a fan website aimed as a joke construction firm website. I learned most of my React from my Argentina buddy here!',
        date: '12/13/2020',
        link: 'https://github.com/swingspringer/usada-kensetsu',
    },
    {
        banner: 'Cat-alogue.png',
        name: 'Cat-alogue',
        desc:
            'The project had a lot of logic that are non-programmer related, and requires many knowledge. None of it is documented so I tried to make this until they stopped me.',
        date: '08/30/2021',
        link:
            'https://www.figma.com/file/f5DS3rD7USz9wyUNi3xu3L/Cat-alogue?node-id=153%3A89',
    },
    {
        banner: 'Kube-Switcher.png',
        name: 'Kube Switcher',
        desc:
            "The project this time was microservices and the provided laptop was very weak. We had to use our servers so I made Kube-Switcher make the team's work more efficient.",
        date: '07/29/2022',
        link: 'https://github.com/swingspringer/Kube-Switcher',
    },
    {
        banner: 'my-portfolio.png',
        name: 'My Portfolio',
        desc:
            "Of course I'm counting in this portfolio in the list. I did my best to put in all of my love and passion here. Look forward to the projects I will be adding in this website!",
        date: '08/29/2022',
        link: '#',
    },
]

const Projects = () => {
    return (
        <Wrapper id="projects">
            <Wrapper center className="">
                <h2 className="horizon-background">Projects</h2>
            </Wrapper>
            <TitleSpace />
            {ProjectList.map(proj => (
                <Project>
                    <Banner id="banner" bg={'/img/banner/' + proj.banner} />
                    <Desc>
                        <ProjectTitle>
                            <h4>
                                {proj.name}
                                <a
                                    href={proj.link}
                                    target="blank"
                                    rel="noreferrer">
                                    <OpenInNewIcon />
                                </a>
                            </h4>
                            <span>{proj.date}</span>
                        </ProjectTitle>
                        <p>{proj.desc}</p>
                    </Desc>
                </Project>
            ))}
        </Wrapper>
    )
}

export default Projects
