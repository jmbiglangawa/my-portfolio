import { useState } from 'react'
import styled from '@emotion/styled'
import { Backend, Frontend } from './data/Skills'

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
    height: 90%;
    display: flex;
    position: relative;
`

const GroupedApps = styled.div`
    margin: 5px;
    background: url(${props => props.app});
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

const GroupedAppModalWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    margin: 5px;
    height: 90%;
    width: 284px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Overlay = styled.div`
    background-color: #000000;
    opacity: 0.5;
    height: 100%;
    width: 100%;
    position: absolute;
    border-radius: 21px 21px 0px 0px;
    z-index: 1;
`

const GroupedAppModal = styled.div`
    background: #ffffff;
    width: 210px;
    height: 167px;
    border-radius: 13px;
    padding: 10px;
    z-index: 2;
    text-align: center;

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

const GroupedAppsList = [
    { image: 'back-end', label: 'Back-end', apps: Backend },
    { image: 'front-end', label: 'Front-end', apps: Frontend },
]

const SkillsMobile = () => {
    const [group, setGroup] = useState()
    const [app, setApp] = useState()

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
                    <GroupedAppModalWrapper>
                        <GroupedAppModal>
                            <p>Back-end</p>
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
                        <Overlay />
                    </GroupedAppModalWrapper>
                )}
            </Mobile>
        </MobileWrapper>
    )
}

export default SkillsMobile
