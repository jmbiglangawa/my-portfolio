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
`

const Company = styled.div`
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
            'I graduated from school with a Bachelor of Science in Computer Engineering degree. During college we coded a lot of Arduino C++ and dealt with hardware more. This time around, I had no skill on web development whatsoever.',
    },
    {
        icon: WorkIcon,
        title: 'July 17, 2019',
        company: 'Nova Solutions (PHILIPPINES) Inc.',
        body:
            'My very first company. I took my baby steps here facing many challenges not only with dealing with the level of technology, but with the pressure and stress at the same time. I earned my first award here, which is Best Employee of eGov department of Year 2020!',
    },
    {
        right: true,
        icon: WorkIcon,
        title: 'January 17, 2022',
        company: 'Vesta',
        body:
            'My current company. I love how the company provides the finances for important things the team needs. Vesta uses latest technology that meets the market demand and prioritizes code quality. The team is a huge push factor in my growth, all of us work together on delivering the releases.',
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
                {jobs.map(({ right, icon, title, company, body }, index) => (
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
                                    {company && <Company>{company}</Company>}
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
