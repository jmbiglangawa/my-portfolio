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
import Wrapper from './Wrapper'
import { useMediaQuery } from '@react-hook/media-query'
import '../styles/Timeline.scss'

const H3 = styled.h3`
    text-align: center;
`

const Whisper = styled.div`
    color: #939393;
    font-style: italic;
    text-align: center;

    @media (max-width: 750px) {
        text-align: left;
    }
`

const Title = styled.div`
    color: #595959;
    font-size: 0.75em;
    font-style: italic;
`

const Company = styled.span`
    font-weight: bold;
    font-size: 20px;
`

const ItemWrap = styled.div`
    display: flex;
`

const BodyWrap = styled.div`
    p {
        margin: 0;
    }
`

const TimelineWrapper = styled.div`
    margin-top: 20px;

    @media (max-width: 750px) {
        padding: 30px;
        margin-top: 0;
    }
`

const jobs = [
    {
        right: true,
        icon: SchoolIcon,
        title: 'April 8, 2018',
        company: 'BSCpE',
        body:
            'I graduated from school with a Bachelor of Science in Computer Engineering degree. During college we coded a lot of Arduino C++ and dealt with hardware more. This time around, I had no skill on web development whatsoever.',
    },
    {
        icon: WorkIcon,
        title: 'July 17, 2019',
        company: 'Nova Solutions PH. Inc',
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
    const breakpoint = useMediaQuery('only screen and (max-width: 750px)')

    return (
        <Wrapper>
            <H3>Timeline</H3>

            <TimelineWrapper>
                <Whisper>pre-graduation</Whisper>
                <MuiTimeline
                    position={breakpoint ? 'right' : 'alternate'}
                    className="muiTimeline">
                    {!breakpoint && (
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent />
                        </TimelineItem>
                    )}
                    {jobs.map(({ icon, title, company, body }, index) => (
                        <TimelineItem key={index}>
                            <TimelineSeparator>
                                <TimelineDot>
                                    <SvgIcon component={icon} />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <ItemWrap>
                                    <BodyWrap>
                                        <Title>{title}</Title>
                                        {company && (
                                            <Company className="horizon">
                                                {company}
                                            </Company>
                                        )}
                                        <p>{body}</p>
                                    </BodyWrap>
                                </ItemWrap>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </MuiTimeline>
                <Whisper>present</Whisper>
            </TimelineWrapper>
        </Wrapper>
    )
}

export default Timeline
