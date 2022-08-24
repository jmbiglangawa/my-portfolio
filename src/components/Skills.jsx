import styled from '@emotion/styled'
import SkillMonitorSvg from '../assets/svg/skill-monitor.svg'
import { Backend, Frontend } from './data/Skills'
import Wrapper from './Wrapper'
import { useState } from 'react'
import Typewriter from 'typewriter-effect'
import Constants from '../util/Constants'
import { useMediaQuery } from '@react-hook/media-query'
import SkillsMobile from './SkillsMobile'
import '../styles/Skills.scss'

const Wrap = styled.div`
    color: red;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SkillMonitor = styled.div`
    background: url(${SkillMonitorSvg});
    width: 1000px;
    height: 601px;
    position: relative;
    color: #828282;
`

const SkillsSection = styled.div`
    position: absolute;
    top: 0;
    width: 138px;
    padding: 30px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

const Left = styled(SkillsSection)`
    left: 0;
`

const Center = styled.div`
    position: absolute;
    top: 0;
    width: 550px;
    padding: 50px 0;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    color: #ffffff;
`

const Right = styled(SkillsSection)`
    right: 0;
`

const SkillItem = styled.div`
    width: 50px;
    height: 50px;
    margin-bottom: 20px;
    cursor: ${props => (props.active ? 'default' : 'pointer')};
    color: ${props => (props.active ? '#8f70e7' : '#828282')};

    :hover {
        color: #8f70e7;
    }

    svg {
        width: 50px;
        height: 50px;
    }
`

const Command = styled.div`
    padding-bottom: 20px;
    font-family: 'Consolas';
    display: ${props => (props.inline ? 'inline-block' : 'block')};
    opacity: ${props => (props.visible ? 1 : 0)};
`

const Skills = () => {
    const [cmd, setCmd] = useState([
        { line: Constants.skillMonitorHeader },
        { line: Constants.skillMonitorLocation, idle: true },
    ])
    const [cmdString, setCmdString] = useState()
    const [outputVisible, setOutputVisible] = useState(false)
    const [clsObject, setClsObject] = useState()

    const isMobile = useMediaQuery(Constants.smallScreenQuery)

    const addToCmd = (command, output) => {
        if (command === cmdString) {
            return
        } else {
            setCmdString(command)
        }

        let timeout = 0
        if (outputVisible) {
            clsObject.typeString('cls').start()
            timeout = 1500
        }
        setTimeout(() => {
            setOutputVisible(false)
            setCmd([
                { line: Constants.skillMonitorHeader },
                { line: Constants.skillMonitorLocation, command },
                { line: `>${output}`, output: true },
            ])
        }, timeout)
    }

    const onClickSkill = (command, output) => {
        if (command !== cmdString) {
            addToCmd(command, output)
        }
    }

    return (
        <Wrapper className="skills">
            <Wrap>
                <h3>Skills</h3>
                <p>
                    Throughout the years I've learned so much. All of the tech
                    that I have experienced using before are enumerated down
                    below. Click on any icon to display how I personally
                    describe it
                </p>
                {!isMobile ? (
                    <SkillMonitor>
                        <Left>
                            {Frontend.map(({ id, icon, command, output }) => (
                                <SkillItem
                                    key={id}
                                    active={command === cmdString}
                                    onClick={() =>
                                        onClickSkill(command, output)
                                    }>
                                    {icon}
                                </SkillItem>
                            ))}
                        </Left>
                        <Center>
                            {cmd.map(
                                ({ line, command, output, clear, idle }) => (
                                    <>
                                        <Command
                                            inline={command || clear || idle}
                                            visible={!output || outputVisible}>
                                            {line}
                                        </Command>
                                        {command && (
                                            <Typewriter
                                                key={command}
                                                options={{
                                                    cursor: '_',
                                                }}
                                                onInit={typewriter => {
                                                    typewriter
                                                        .typeString(command)
                                                        .start()
                                                        .pauseFor(500)
                                                        .callFunction(() => {
                                                            setOutputVisible(
                                                                true
                                                            )
                                                            setCmd([
                                                                ...cmd,
                                                                {
                                                                    line:
                                                                        Constants.skillMonitorLocation,
                                                                    clear: true,
                                                                },
                                                            ])
                                                            document.getElementsByClassName(
                                                                'Typewriter__cursor'
                                                            )[0].style.display =
                                                                'none'
                                                        })
                                                }}
                                            />
                                        )}
                                        {clear && (
                                            <Typewriter
                                                options={{ cursor: '_' }}
                                                onInit={typewriter => {
                                                    setClsObject(typewriter)
                                                }}
                                            />
                                        )}
                                        {idle && (
                                            <Typewriter
                                                options={{
                                                    cursor: '_',
                                                }}
                                            />
                                        )}
                                    </>
                                )
                            )}
                        </Center>
                        <Right>
                            {Backend.map(({ icon, id, command, output }) => (
                                <SkillItem
                                    key={id}
                                    active={command === cmdString}
                                    onClick={() => {
                                        if (command !== cmdString)
                                            addToCmd(command, output)
                                    }}>
                                    {icon}
                                </SkillItem>
                            ))}
                        </Right>
                    </SkillMonitor>
                ) : (
                    <SkillsMobile />
                )}
            </Wrap>
        </Wrapper>
    )
}

export default Skills
