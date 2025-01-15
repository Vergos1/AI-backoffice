'use client'
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material'

import { IconInfoCircle } from '@tabler/icons-react'

import TimelineFilled from '@/@core/components/time-line'
import Banner from '@/components/Banner'
import { estateTimeline } from '@/constants/mock.data'
import TransactionHistory from '../investments/investment-tab/TransactionHistory/TransactionHistory'

const Estate = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Grid gap={6} display='flex' flexDirection='column'>
      <Box
        px={isMobile ? 2 : 6}
        py={3}
        borderRadius={1}
        bgcolor='var(--mui-palette-error-lightOpacity)'
        display='flex'
        flexDirection={isMobile ? 'column' : 'row'}
        gap={2}
        alignItems='center'
      >
        <IconInfoCircle />
        <Box flex={1}>
          <Typography variant='h6' textAlign={isMobile ? 'center' : 'left'}>
            Creating a deposit in the direction of S Real Estate is not available.
          </Typography>
          <Typography variant='body1' textAlign={isMobile ? 'center' : 'left'}>
            Follow the news of S-Group in social networks not to miss new investment offers.
          </Typography>
        </Box>
      </Box>
      <Banner title='AI Real Estate. Investing in the real estate of the future' variant='estate' />
      <Grid container spacing={6}>
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardMedia image='images/pages/estate.webp' className='bs-[140px]' />
            <CardContent>
              <Typography variant='h5'>
                4 900 <span>SWCT</span> / m2
              </Typography>
              <Typography className='mb-4'>Villa</Typography>
              <Box mb={2} display='flex' alignItems='center' justifyContent='space-between'>
                <Tooltip title='Profit distribution percentage' arrow placement='bottom'>
                  <Box display='flex' justifyContent='flex-end' alignItems='center' gap={1}>
                    <Typography fontSize={14}>Income distribution</Typography>
                    <IconInfoCircle size={12} />
                  </Box>
                </Tooltip>
                <Typography fontSize={14}>70/30 %</Typography>
              </Box>
              <Box mb={2} display='flex' alignItems='center' justifyContent='space-between'>
                <Typography fontSize={14}>Total payable</Typography>
                <Typography fontSize={14}>702663 SWCT</Typography>
              </Box>
            </CardContent>
            <Button variant='contained' disabled fullWidth className='rounded-none'>
              Unavailable
            </Button>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardMedia image='images/pages/estate.webp' className='bs-[140px]' />
            <CardContent>
              <Typography variant='h5'>
                4 900 <span>SWCT</span> / m2
              </Typography>
              <Typography className='mb-4'>Apartment with garden view</Typography>
              <Box mb={2} display='flex' alignItems='center' justifyContent='space-between'>
                <Tooltip title='Profit distribution percentage' arrow placement='bottom'>
                  <Box display='flex' justifyContent='flex-end' alignItems='center' gap={1}>
                    <Typography fontSize={14}>Income distribution</Typography>
                    <IconInfoCircle size={12} />
                  </Box>
                </Tooltip>
                <Typography fontSize={14}>70/30 %</Typography>
              </Box>
              <Box mb={2} display='flex' alignItems='center' justifyContent='space-between'>
                <Typography fontSize={14}>Total payable</Typography>
                <Typography fontSize={14}>702663 SWCT</Typography>
              </Box>
            </CardContent>
            <Button variant='contained' disabled fullWidth className='rounded-none'>
              Unavailable
            </Button>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardMedia image='images/pages/estate.webp' className='bs-[140px]' />
            <CardContent>
              <Typography variant='h5'>
                4 900 <span>SWCT</span> / m2
              </Typography>
              <Typography className='mb-4'>Apartment with sea view</Typography>
              <Box mb={2} display='flex' alignItems='center' justifyContent='space-between'>
                <Tooltip title='Profit distribution percentage' arrow placement='bottom'>
                  <Box display='flex' justifyContent='flex-end' alignItems='center' gap={1}>
                    <Typography fontSize={14}>Income distribution</Typography>
                    <IconInfoCircle size={12} />
                  </Box>
                </Tooltip>
                <Typography fontSize={14}>70/30 %</Typography>
              </Box>
              <Box mb={2} display='flex' alignItems='center' justifyContent='space-between'>
                <Typography fontSize={14}>Total payable</Typography>
                <Typography fontSize={14}>702663 SWCT</Typography>
              </Box>
            </CardContent>
            <Button variant='contained' disabled fullWidth className='rounded-none'>
              Unavailable
            </Button>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={6}>
        <Grid item md={12} lg={6}>
          <Card>
            <CardHeader title='Deposit Schedule' />
            <CardContent>
              <TimelineFilled timeline={estateTimeline} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={12} lg={6}>
          <TransactionHistory currentDistributionStart={70} currentDistributionEnd={30} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Estate
