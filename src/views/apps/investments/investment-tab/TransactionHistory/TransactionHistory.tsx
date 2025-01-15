'use client'
import { Box, Card, CardContent, CardHeader, Typography, useMediaQuery, useTheme } from '@mui/material'
import { IconCalendarClock } from '@tabler/icons-react'

type Props = {
  currentDistributionStart: number
  currentDistributionEnd: number
}

const CurrentDistributionItem = ({
  mobile,
  currentDistributionStart,
  currentDistributionEnd
}: {
  mobile?: boolean
  currentDistributionStart: number
  currentDistributionEnd: number
}) => {
  return (
    <Box
      className={`${mobile ? 'w-full' : 'max-w-[max-content]'} ${mobile ? 'mt-3' : 'pl-3 pr-3'}  pt-1 pb-1`}
      borderRadius={5}
      bgcolor={mobile ? 'background.paper' : 'background.default'}
      display='flex'
      gap={4}
      alignItems='center'
      justifyContent='space-between'
    >
      <Typography>Current distribution level:</Typography>
      <Box display='flex' gap={1} alignItems='center'>
        <Typography color='primary' fontWeight={700}>
          {currentDistributionStart}
        </Typography>
        /
        <Typography color='textPrimary' fontWeight={600}>
          {currentDistributionEnd}%
        </Typography>
      </Box>
    </Box>
  )
}

const TransactionHistory = ({ currentDistributionStart, currentDistributionEnd }: Props) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Card className='h-full'>
      <CardHeader
        title='Your investment packages'
        subheader={
          isMobile ? (
            <CurrentDistributionItem
              mobile
              currentDistributionStart={currentDistributionStart}
              currentDistributionEnd={currentDistributionEnd}
            />
          ) : null
        }
        action={
          !isMobile ? (
            <CurrentDistributionItem
              currentDistributionStart={currentDistributionStart}
              currentDistributionEnd={currentDistributionEnd}
            />
          ) : null
        }
      />
      <CardContent className='flex flex-col gap-5 h-full'>
        <Box
          bgcolor='background.default'
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          height='100%'
          borderRadius={1}
          pt={15}
          pb={15}
        >
          <IconCalendarClock size={32} stroke={1.2} />
          <Typography variant='h4' fontWeight={500} fontSize={16} color='textSecondary' mt={2}>
            No transactions yet
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default TransactionHistory
