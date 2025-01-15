'use client'

import * as React from 'react'

import { useRouter } from 'next/navigation'

import dynamic from 'next/dynamic'

import Grid from '@mui/material/Grid'

import styled from '@emotion/styled'
import { Box, Card, CardContent, Tooltip, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import { homeDashboardOptions, homeSeries } from '@/constants/charts-configs'

const AppReactApexCharts = dynamic(() => import('@libs/styles/AppReactApexCharts'))

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData('AI-Forex', 159.45, 6.42, 24.67, 4.24),
  createData('AI-Pharmaceutical', 237.2, 9.58, 37.12, 4.37),
  createData('AI-IPO', 262.1, 16.25, 24, 6.31),
  createData('AI-Crypto-LM', 305.5, 3.74, 67.42, 4.32)
]

export default function HomeTable() {
  const router = useRouter()

  const CoinIcon = styled.i`
    font-size: 100px;
    block-size: 100px;
  `

  const handleRedirect = () => {
    router.push('/investments')
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={8} lg={4}>
        <Card>
          <CardContent>
            <Grid columns={16} spacing={2} textAlign={'left'} sx={{ mb: 4 }}>
              <Typography variant='subtitle1'>Total deposits</Typography>
              <Typography variant='subtitle1'>0,00 SWCT</Typography>
            </Grid>
            <Box display='flex' flexDirection='column' alignItems='center'>
              <CoinIcon className='tabler-wallet color-primary' />
              <Typography variant='h4' sx={{ m: 2 }}>
                No deposits
              </Typography>
              <Typography variant='body1' sx={{ mb: 4 }} textAlign='center'>
                You don&apos;t have any active deposit yet. If you want to create a new deposit, please click the button
                below
              </Typography>
              <Button onClick={handleRedirect} variant='contained' sx={{ width: '90%' }}>
                Create a deposit
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} lg={8}>
        <Card>
          <CardContent>
            <Grid container spacing={2} textAlign={'left'} sx={{ mb: 4 }} pl={4}>
              <Grid item xs={6}>
                <Typography variant='subtitle1'>Income for 30 days</Typography>
                <Typography variant='subtitle1' color='textPrimary' fontSize={18}>
                  0,00 SWCT
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant='subtitle1'>Overall income</Typography>
                <Typography variant='subtitle1' color='textPrimary' fontSize={18}>
                  0,00 SWCT
                </Typography>
              </Grid>
            </Grid>
            <Grid>
              <TableContainer>
                <Table aria-label='a dense table'>
                  <TableHead>
                    <TableRow>
                      <TableCell>Direction</TableCell>
                      <TableCell align='right'>Income for 30 days</TableCell>
                      <TableCell align='right'>Overall income</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map(row => (
                      <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component='th' scope='row'>
                          <Typography fontSize={14} fontWeight={600}>
                            {row.name}
                          </Typography>
                        </TableCell>
                        <TableCell align='right'>
                          <Box width='100%' display='flex' justifyContent='flex-end'>
                            <Tooltip
                              title='Statistics of field in the direction for the last 30 calendar days'
                              arrow
                              placement='bottom'
                            >
                              <Box display='flex' justifyContent='flex-end' alignItems='center' gap={1}>
                                <Typography fontWeight={600} color='textPrimary' fontSize={14}>
                                  {row.calories}
                                </Typography>
                                SWCT
                                <i className='tabler-info-circle' style={{ fontSize: '16px' }} />
                              </Box>
                            </Tooltip>
                          </Box>
                        </TableCell>
                        <TableCell align='right'>
                          <Box display='flex' alignItems='center' justifyContent='flex-end' gap={1}>
                            <Typography fontWeight={600} color='textPrimary' fontSize={14}>
                              {row.fat}
                            </Typography>
                            SWCT
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <AppReactApexCharts
              type='line'
              width='100%'
              height={400}
              options={homeDashboardOptions}
              series={homeSeries}
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
