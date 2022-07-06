import MuiTimeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import styled from '@emotion/styled'
import SchoolIcon from '@mui/icons-material/School'
import WorkIcon from '@mui/icons-material/Work'
import SvgIcon from '@mui/material/SvgIcon'
import { Wrap } from './Wrapper'

const Wrapper = styled(Wrap)`
    margin-bottom: 10%;
`

const H3 = styled.h3`
    text-align: center;
`

const Whisper = styled.div`
    color: #939393;
    font-style: italic;
    text-align: center;
`

const Title = styled.div`
    color: #8f70e7;
    font-weight: bold;
`

const ItemWrap = styled.div`
    display: flex;
`

const TitleWrap = styled.div`
    margin: 0 10px;
    color: #8f70e7;
`

const BodyWrap = styled.div`
    p {
        margin: 0;
    }
`

const jobs = [
    {
        right: true,
        icon: SchoolIcon,
        title: 'April 8, 2018',
        body:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem lectus, convallis vitae eros non.',
    },
    {
        icon: WorkIcon,
        title: 'July 17, 2019',
        body:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem lectus, convallis vitae eros non.',
    },
    {
        right: true,
        icon: WorkIcon,
        title: 'January 17, 2022',
        body:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem lectus, convallis vitae eros non.',
    },
]

const Timeline = () => {
    return (
        <Wrapper>
            <H3>Timeline</H3>
            <Whisper>pre-graduation</Whisper>
            <MuiTimeline position="alternate">
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent />
                </TimelineItem>
                {jobs.map(({ right, icon, title, body }, index) => (
                    <TimelineItem key={index}>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <ItemWrap>
                                {!right && (
                                    <TitleWrap>
                                        <SvgIcon component={icon} />
                                    </TitleWrap>
                                )}
                                <BodyWrap>
                                    <Title>{title}</Title>
                                    <p>{body}</p>
                                </BodyWrap>
                                {right && (
                                    <TitleWrap>
                                        <SvgIcon component={icon} />
                                    </TitleWrap>
                                )}
                            </ItemWrap>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </MuiTimeline>
            <Whisper>present</Whisper>
        </Wrapper>
    )
}

export default Timeline
