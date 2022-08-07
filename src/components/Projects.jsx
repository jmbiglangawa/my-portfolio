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
    }

    & span {
        color: #595959;
        font-style: italic;
        font-size: 0.9em;
    }
`

const ProjectList = [
    {
        banner: 'usada-kensetsu.png',
        name: 'Usada Kensetsu',
        desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget velit nisi. Ut ut ullamcorper nibh. Praesent venenatis tempus est ac lacinia.',
        date: '08/02/2022',
    },
    {
        banner: 'ViReX-E.png',
        name: 'ViReX-E',
        desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget velit nisi. Ut ut ullamcorper nibh. Praesent venenatis tempus est ac lacinia.',
        date: '03/05/2019',
    },
    {
        banner: 'Cat-alogue.png',
        name: 'Cat-alogue',
        desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget velit nisi. Ut ut ullamcorper nibh. Praesent venenatis tempus est ac lacinia.',
        date: '08/30/2021',
    },
    {
        banner: 'Maven-Module-Builder.png',
        name: 'Cat-alogue',
        desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget velit nisi. Ut ut ullamcorper nibh. Praesent venenatis tempus est ac lacinia.',
        date: '08/30/2021',
    },
    {
        banner: 'Kube-Switcher.png',
        name: 'Cat-alogue',
        desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget velit nisi. Ut ut ullamcorper nibh. Praesent venenatis tempus est ac lacinia.',
        date: '08/30/2021',
    },
    {
        banner: 'my-portfolio.png',
        name: 'Cat-alogue',
        desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget velit nisi. Ut ut ullamcorper nibh. Praesent venenatis tempus est ac lacinia.',
        date: '08/30/2021',
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
                            <h4>{proj.name}</h4>
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
