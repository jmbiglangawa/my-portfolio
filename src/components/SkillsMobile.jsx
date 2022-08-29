import { useState } from 'react'
import styled from '@emotion/styled'
import { Backend, Frontend } from './data/Skills'
import Button from '@mui/material/Button'
import classnames from 'classnames'

const MobileWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Mobile = styled.div`
    background: url(${process.env.PUBLIC_URL + '/img/mobile.svg'});
    width: 294px;
    height: 488px;
    position: relative;
    color: #828282;
`

const MobileScreen = styled.div`
    border-radius: 21px 21px 0px 0px;
    margin: 5px;
    padding: 20px 10px;
    height: 15%;
    display: flex;
    position: relative;
`

const GroupedApps = styled.div`
    margin: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        height: 46px;
        width: 46px;
    }

    span {
        font-size: 12px;
        color: #828282;
    }
`

const Overlay = styled.div`
    background-color: #000000;
    opacity: 0.5;
    height: 90%;
    width: 284px;
    margin: 5px;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 21px 21px 0px 0px;
    z-index: 0;
`

const GroupedAppModal = styled.div`
    background: #ffffff;
    width: 210px;
    height: 167px;
    border-radius: 13px;
    padding: 10px;
    z-index: 2;
    text-align: center;
    position: absolute;
    left: 11%;

    p {
        margin-block-start: 0;
        margin-block-end: 5px;
        font-weight: bold;
    }
`

const Apps = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

const App = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 12px;
    margin-bottom: 5px;
    width: 52px;
    transition: background-color 0.3s;
    background-color: #ffffff;
    border-radius: 5px;

    img {
        width: 40px;
        height: 40px;
        padding: 4px;
        object-fit: contain;
    }

    label {
        font-family: 'Segoe UI';
    }

    :active {
        background-color: #61616173;
    }
`

const AppOverview = styled.div`
    background-color: #ffffff;
    height: 85%;
    width: 284px;
    position: absolute;
    top: 0;
    left: 0;
    margin: 5px;
    margin-top: 30px;
    z-index: 2;

    img {
        width: 50px;
    }

    p {
        margin: 20px;
    }

    & .MuiButton-root.MuiButton-contained {
        background-color: #767676;
    }
`

const AppContents = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const NavWrapper = styled.div`
    opacity: 0.5;
    bottom: 0;
    left: 0;
    width: 284px;
    height: 41px;
    position: absolute;
    border-radius: 0px 0px 21px 21px;
    z-index: 1;
    margin: 5px;

    display: flex;
    justify-content: space-between;
`

const Nav = styled.div`
    width: 33%;
`

const GroupedAppsList = [
    { image: 'back-end', label: 'Back-end', apps: Backend },
    { image: 'front-end', label: 'Front-end', apps: Frontend },
]

const SkillsMobile = () => {
    const [group, setGroup] = useState()
    const [app, setApp] = useState()

    const clearAll = () => {
        setGroup(null)
        setApp(null)
    }

    const backHandler = () => {
        if (app) {
            setApp(null)
        } else if (group) {
            setGroup(null)
        }
    }

    return (
        <MobileWrapper>
            <Mobile>
                <MobileScreen>
                    {GroupedAppsList.map(group => (
                        <GroupedApps onClick={() => setGroup(group)}>
                            <img
                                src={`${process.env.PUBLIC_URL}/img/skills/${group.image}.png`}
                                alt={group.image}></img>
                            <span>{group.label}</span>
                        </GroupedApps>
                    ))}
                </MobileScreen>

                {group && (
                    <>
                        <GroupedAppModal
                            className={classnames('animate__animated', {
                                animate__zoomIn: group,
                            })}>
                            <p>{group.label}</p>
                            <Apps>
                                {group.apps.map(backend => (
                                    <App
                                        key={backend.id}
                                        onClick={() => setApp(backend)}>
                                        <img
                                            src={`${process.env.PUBLIC_URL}/img/skills/${backend.png}.png`}
                                            alt={backend.png}
                                        />
                                        <label>
                                            {backend.label || backend.png}
                                        </label>
                                    </App>
                                ))}
                            </Apps>
                        </GroupedAppModal>
                        {!app && <Overlay onClick={() => setGroup(null)} />}
                    </>
                )}

                {app && (
                    <AppOverview>
                        <AppContents
                            className={classnames('animate__animated', {
                                animate__zoomIn: app,
                            })}>
                            <img
                                src={`${process.env.PUBLIC_URL}/img/skills/${app.png}.png`}
                                alt="app-icon"></img>
                            <h4>{app.label || app.png}</h4>
                            <p>{app.output}</p>
                            <Button
                                variant="contained"
                                onClick={() => setApp(null)}>
                                Close
                            </Button>
                        </AppContents>
                    </AppOverview>
                )}

                <NavWrapper>
                    <Nav onClick={() => {}} /> {/* Tasks */}
                    <Nav onClick={clearAll} /> {/* Desktop */}
                    <Nav onClick={backHandler} /> {/* Back */}
                </NavWrapper>
            </Mobile>
        </MobileWrapper>
    )
}

export default SkillsMobile
