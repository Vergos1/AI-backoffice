import type { TimelineProps } from '@mui/lab/Timeline'
import MuiTimeline from '@mui/lab/Timeline'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

type Props = {
  timeline: {
    id: number
    title: string
    description: string
    color: string
  }[]
}

// Styled Timeline component
const Timeline = styled(MuiTimeline)<TimelineProps>({
  paddingLeft: 0,
  paddingRight: 0,
  '& .MuiTimelineItem-root': {
    width: '100%',
    '&:before': {
      display: 'none'
    }
  }
})

const TimelineFilled = ({ timeline }: Props) => {
  return (
    <Timeline>
      {timeline.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot color={item.color as 'primary' | 'secondary'} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className='flex mbe-2.5'>
              <Typography className='font-medium' color='text.primary'>
                {item.title}
              </Typography>
            </div>
            <Typography className='mbe-2'>{item.description}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}

export default TimelineFilled
