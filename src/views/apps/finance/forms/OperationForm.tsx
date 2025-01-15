'use client'

// React Imports
import type { SyntheticEvent } from 'react'
import { useState } from 'react'

// MUI Imports
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import InputAdornment from '@mui/material/InputAdornment'
import MenuItem from '@mui/material/MenuItem'
import Tab from '@mui/material/Tab'

// Components Imports
import { Box, Typography } from '@mui/material'

import CustomTextField from '@core/components/mui/TextField'

type FormDataType = {
  amountReplehish: string
  amountWithdrawal: string
  currency: string
  walletNumber: string
}

const OperationFormWithTabs = () => {
  // States
  const [value, setValue] = useState('replenish')

  const [formData, setFormData] = useState<FormDataType>({
    amountReplehish: '',
    amountWithdrawal: '',
    currency: 'swp',
    walletNumber: ''
  })

  const handleTabChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  const currency = formData.currency.toUpperCase()

  return (
    <TabContext value={value}>
      <TabList variant='scrollable' onChange={handleTabChange} className='border-be'>
        <Tab label='Replenish' value='replenish' />
        <Tab label='Withdrawal' value='withdrawal' />
      </TabList>
      <form onSubmit={e => e.preventDefault()}>
        <CardContent>
          <TabPanel value='replenish'>
            <Grid container spacing={6}>
              <Grid item xs={12}>
                <CustomTextField
                  select
                  fullWidth
                  label='Currency'
                  value={formData.currency}
                  defaultValue='swp'
                  onChange={e => setFormData({ ...formData, currency: e.target.value })}
                >
                  <MenuItem value='swp'>SWP</MenuItem>
                  <MenuItem value='swct'>SWCT</MenuItem>
                  <MenuItem value='std'>STD</MenuItem>
                  <MenuItem value='sgct'>SGCT</MenuItem>
                  <MenuItem value='sest'>SEST</MenuItem>
                </CustomTextField>
              </Grid>

              <Grid item xs={12}>
                <CustomTextField
                  fullWidth
                  label='Amount'
                  placeholder='0'
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='start'>
                        <Typography>{currency}</Typography>
                      </InputAdornment>
                    )
                  }}
                  value={formData.amountReplehish}
                  onChange={e => {
                    const value = e.target.value

                    if (/^\d*\.?\d*$/.test(value)) {
                      setFormData({ ...formData, amountReplehish: value })
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography color='primary'>Replenish Method: AI-Wallet {currency}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                  <Typography fontSize={14}>
                    1 {currency} = 1.897427 {currency}
                  </Typography>
                  <Typography fontSize={14}>Commission: 1 {currency}</Typography>
                </Box>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value='withdrawal'>
            <Grid container spacing={4}>
              <Grid item xs={4}>
                <CustomTextField
                  select
                  fullWidth
                  label='Currency'
                  value={formData.currency}
                  defaultValue='swp'
                  onChange={e => setFormData({ ...formData, currency: e.target.value })}
                >
                  <MenuItem value='swp'>SWP</MenuItem>
                  <MenuItem value='swct'>SWCT</MenuItem>
                  <MenuItem value='std'>STD</MenuItem>
                  <MenuItem value='sgct'>SGCT</MenuItem>
                  <MenuItem value='sest'>SEST</MenuItem>
                </CustomTextField>
              </Grid>

              <Grid item xs={8}>
                <CustomTextField
                  fullWidth
                  label='Amount'
                  placeholder='0'
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='start'>
                        <Typography>{currency}</Typography>
                      </InputAdornment>
                    )
                  }}
                  value={formData.amountWithdrawal}
                  onChange={e => {
                    const value = e.target.value

                    if (/^\d*\.?\d*$/.test(value)) {
                      setFormData({ ...formData, amountWithdrawal: value })
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography color='primary'>Withdrawal Method: AI-Wallet {currency}</Typography>
              </Grid>
              <Grid item xs={12}>
                <CustomTextField
                  fullWidth
                  label='Wallet'
                  placeholder='0000 0000 0000 0000 0000'
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='start'>
                        <Typography>Wallet number</Typography>
                      </InputAdornment>
                    )
                  }}
                  value={formData.walletNumber}
                  onChange={e => {
                    const value = e.target.value

                    if (/^\d*\.?\d*$/.test(value)) {
                      setFormData({ ...formData, walletNumber: value })
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                  <Typography fontSize={14}>Commission: 1 {currency}</Typography>
                </Box>
              </Grid>
            </Grid>
          </TabPanel>
        </CardContent>
        <Divider />
        <CardActions>
          <Button fullWidth type='submit' variant='contained' className='mie-2'>
            {value === 'replenish' ? 'Add funds' : 'Withdrawal'}
          </Button>
        </CardActions>
      </form>
    </TabContext>
  )
}

export default OperationFormWithTabs
