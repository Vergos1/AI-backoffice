'use client'
import { useState } from 'react'

import dynamic from 'next/dynamic'

import { Box, Card, CardContent, CardHeader, FormControl, Grid, MenuItem, Select, Typography } from '@mui/material'

import { investmentsOptions, investmentsSeries } from '@/constants/charts-configs'

const AppReactApexCharts = dynamic(() => import('@libs/styles/AppReactApexCharts'))

const ChartSection = () => {
  const [dateRange, setDateRange] = useState<'1d' | '7d' | '30d'>('1d')

  const totalAmount = '0.00'
  const weeklyAmount = '0.00'
  const allTimeAmount = '0.00'

  return (
    <Card>
      <CardHeader
        title='Shipment Statistics'
        subheader={
          <Grid container gap={8} mt={2}>
            <Grid display='flex' gap={2} alignItems='center' md>
              <Box>
                <Typography variant='body2' color='textSecondary'>
                  Total deposits
                </Typography>
                <Typography variant='h6' color='textPrimary' fontSize={18}>
                  {totalAmount} SGCT
                </Typography>
              </Box>
            </Grid>
            <Grid display='flex' gap={2} alignItems='center' md>
              <Box>
                <Typography variant='body2' color='textSecondary'>
                  Weekly income
                </Typography>
                <Typography variant='h6' color='textPrimary' fontSize={18}>
                  {weeklyAmount} SGCT
                </Typography>
              </Box>
            </Grid>
            <Grid display='flex' gap={2} alignItems='center' md>
              <Box>
                <Typography variant='body2' color='textSecondary'>
                  All time income
                </Typography>
                <Typography variant='h6' color='textPrimary' fontSize={18}>
                  {allTimeAmount} SGCT
                </Typography>
              </Box>
            </Grid>
          </Grid>
        }
        sx={{
          flexDirection: ['column', 'row'],
          alignItems: ['flex-start', 'center'],
          '& .MuiCardHeader-action': { mb: 0 },
          '& .MuiCardHeader-content': { mb: [2, 0] }
        }}
        action={
          <FormControl fullWidth size='small' className='is-[250px] flex-auto'>
            <Select
              fullWidth
              id='select-date-range'
              defaultValue='One day'
              value={dateRange}
              onChange={e => {
                setDateRange(e.target.value as '1d' | '7d' | '30d')
              }}
              labelId='select-date-range'
            >
              <MenuItem value='1d'>For one day</MenuItem>
              <MenuItem value='7d'>For one month</MenuItem>
              <MenuItem value='1y'>For one year</MenuItem>
            </Select>
          </FormControl>
        }
      />
      <CardContent>
        <AppReactApexCharts
          type='line'
          width='100%'
          height={400}
          options={investmentsOptions}
          series={investmentsSeries}
        />
      </CardContent>
    </Card>
  )
}

export default ChartSection
