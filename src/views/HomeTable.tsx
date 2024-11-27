'use client'

import * as React from 'react'

import Grid from '@mui/material/Grid'

import styled from '@emotion/styled'
import { Card, CardContent, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData('AI-Forex', 159, 6.0, 24, 4.0),
  createData('AI-Forex Pro', 237, 9.0, 37, 4.3),
  createData('AI-Forex Optimal', 262, 16.0, 24, 6.0),
  createData('AI-Forex Prime', 305, 3.7, 67, 4.3),
  createData('AI-Forex Prime Pro', 356, 16.0, 49, 3.9)
]

export default function HomeTable() {
  const CoinIcon = styled.i`
    font-size: 100px;
    block-size: 100px;
  `

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={8} lg={4}>
        <Card>
          <CardContent>
            <Grid columns={16} spacing={2} textAlign={'left'} sx={{ mb: 4 }}>
              <Typography variant='subtitle1'>Total deposits</Typography>
              <Typography variant='subtitle1'>0,00 SWCT</Typography>
            </Grid>
            <Grid columns={16}>
              <CoinIcon className='tabler-coin' />
              <Typography variant='h4' sx={{ m: 2 }}>
                No deposit
              </Typography>
              <Typography variant='body1' sx={{ m: 2 }}>
                You don&apos;t have any active deposit yet. If you want to create a new deposit, please click the button
                below
              </Typography>
              <Button variant='contained' sx={{ width: '90%' }}>
                Create a deposit
              </Button>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} lg={8}>
        <Card>
          <CardContent>
            <Grid container spacing={2} textAlign={'left'} sx={{ mb: 4 }}>
              <Grid item xs={6}>
                <Typography variant='subtitle1'>Income for 30 days</Typography>
                <Typography variant='subtitle1'>0,00 SWCT</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant='subtitle1'>Overall income</Typography>
                <Typography variant='subtitle1'>0,00 SWCT</Typography>
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
                          {row.name}
                        </TableCell>
                        <TableCell align='right'>{row.calories}</TableCell>
                        <TableCell align='right'>{row.fat}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
