'use client'
import type { ChangeEvent } from 'react'
import { useState } from 'react'

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  LinearProgress,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material'

import { IconInfoCircle } from '@tabler/icons-react'

import { ProgressCircularWithLabel } from '@/@core/components/custom-circle-progress'
import CustomInputHorizontal from '@/@core/components/custom-inputs/Horizontal'
import { SUBSCRIPTION_PLANS_LIST } from '@/constants'
import Banner from './Banner'

const SubscriptionTab = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const initialSelected: string = SUBSCRIPTION_PLANS_LIST[0].plan

  const [selected, setSelected] = useState<string>(initialSelected)

  const handleChange = (prop: string | ChangeEvent<HTMLInputElement>) => {
    if (typeof prop === 'string') {
      setSelected(prop)
    } else {
      setSelected((prop.target as HTMLInputElement).value)
    }
  }

  const isDisabled = (item: any) => {
    return item.plan === SUBSCRIPTION_PLANS_LIST[0].plan
  }

  return (
    <Grid container spacing={6}>
      <Banner />
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Current Subscription' />
          <CardContent>
            <Grid container spacing={isMobile ? 4 : 8}>
              <Grid item xs={12} md lg={6}>
                <Box mb={2} display='flex' justifyContent='space-between' alignItems='center'>
                  <Typography variant='h6'>Current tariff plan</Typography>
                  <Typography variant='body2' color='textPrimary'>
                    {initialSelected.toUpperCase()}
                  </Typography>
                </Box>
                <Divider sx={{ mb: 4 }} />
                <Box pt={4} pb={4}>
                  <Box mb={2}>
                    <Typography variant='h6'>Annual limit of referral rewards</Typography>
                  </Box>
                  <Box mb={2}>
                    <Typography variant='body2' fontSize={12} fontWeight={600} color='textPrimary'>
                      300 SWCT/SGCT
                    </Typography>
                    <LinearProgress variant='determinate' value={40} sx={{ my: 2 }} />
                    <Box display='flex' justifyContent='space-between' alignItems='center'>
                      <Typography variant='body2' fontSize={12} color='textSecondary'>
                        Current amount of referral accruals
                      </Typography>
                      <Typography variant='body2' fontSize={12} color='textSecondary'>
                        100%
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} lg>
                <Box display='flex' alignItems='center' gap={isMobile ? 4 : 10} pl={isMobile ? 0 : 10}>
                  <ProgressCircularWithLabel />
                  <Box display='flex' flexDirection='column' gap={3}>
                    <Typography variant='h5'>Current plan</Typography>
                    <Box display='flex' alignItems='center' gap={2}>
                      <Typography variant='body2'>Activation date:</Typography>
                      <Typography variant='h6' fontSize={14}>
                        08.08.2024
                      </Typography>
                    </Box>
                    <Box display='flex' alignItems='center' gap={2}>
                      <Typography variant='body2'>Expired date:</Typography>
                      <Typography variant='h6' fontSize={14}>
                        02.08.2025
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12}>
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
                  <Typography variant='h6' textAlign={isMobile ? 'center' : 'left'}>
                    Upgrade or activate a new subscription plan to increase the referral reward limit and earn in each
                    investment direction.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader
            title='Tariff Plans'
            subheader='Upgrade your plan to maximize your profits with AI-Group'
            action={
              <Button disabled={selected === initialSelected} variant='contained'>
                Update plan
              </Button>
            }
          />
          <CardContent>
            <Grid container spacing={3}>
              {SUBSCRIPTION_PLANS_LIST.map((item, index) => (
                <Grid key={item.plan} item xs={12} sm={6} md={index < 4 ? 3 : 4}>
                  <CustomInputHorizontal
                    key={item.plan}
                    type='radio'
                    disabled={isDisabled(item)}
                    data={item}
                    selected={selected}
                    name='custom-radios-basic'
                    handleChange={handleChange}
                  />
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default SubscriptionTab
