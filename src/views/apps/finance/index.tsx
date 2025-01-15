'use client'
import { Card, CardContent, CardHeader, Grid } from '@mui/material'

import TransactionHistory from '../investments/investment-tab/TransactionHistory/TransactionHistory'
import OperationFormWithTabs from './forms/OperationForm'

import TransferFormWithTabs from './forms/TransferForm'

const Finance = () => {
  return (
    <Grid gap={6} display='flex' flexDirection='column'>
      <Grid container spacing={6}>
        <Grid item md={12} lg={5}>
          <Card>
            <CardHeader title='Balance Operations' />
            <CardContent>
              <OperationFormWithTabs />
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={12} lg={7}>
          <Card>
            <CardHeader title='Transfer To User' />
            <CardContent>
              <TransferFormWithTabs />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid item lg={12}>
        <TransactionHistory isFinance currentDistributionStart={70} currentDistributionEnd={30} />
      </Grid>
    </Grid>
  )
}

export default Finance
