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
  amountTransfer: string
  amountOperation: string
  currency: string
  walletNumber: string
  nickName: string
  nickNameDeffered: string
  cardFullName: string
  comment: string
  phoneNumber: string
}

const TransferFormWithTabs = () => {
  // States
  const [value, setValue] = useState('fast')

  const [formData, setFormData] = useState<FormDataType>({
    amountTransfer: '',
    amountOperation: '',
    currency: 'swp',
    walletNumber: '',
    nickName: '',
    nickNameDeffered: '',
    cardFullName: '',
    comment: '',
    phoneNumber: ''
  })

  const handleTabChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  const currency = formData.currency.toUpperCase()

  return (
    <TabContext value={value}>
      <TabList variant='scrollable' onChange={handleTabChange} className='border-be'>
        <Tab label='Fast' value='fast' />
        <Tab label='Deferred' value='deferred' />
      </TabList>
      <form onSubmit={e => e.preventDefault()}>
        <CardContent>
          <TabPanel value='fast'>
            <Grid container spacing={4}>
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
                  value={formData.amountTransfer}
                  onChange={e => {
                    const value = e.target.value

                    if (/^\d*\.?\d*$/.test(value)) {
                      setFormData({ ...formData, amountTransfer: value })
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <CustomTextField
                  fullWidth
                  label='Nickname'
                  placeholder='Name'
                  value={formData.nickName}
                  onChange={e => setFormData({ ...formData, nickName: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <Box display='flex' flexDirection='column'>
                  <Typography fontSize={14}>
                    1 {currency} = 1.897427 {currency}
                  </Typography>

                  <Typography fontSize={14}>
                    Amount to write off:{' '}
                    <Typography component='span' fontSize={14} fontWeight={500}>
                      {formData.amountTransfer || 0} {currency}
                    </Typography>
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value='deferred'>
            <Grid container spacing={6}>
              <Grid item xs={3}>
                <CustomTextField
                  fullWidth
                  label='Amount'
                  placeholder='MIN: 5'
                  value={formData.amountOperation}
                  onChange={e => {
                    const value = e.target.value

                    if (/^\d*\.?\d*$/.test(value)) {
                      setFormData({ ...formData, amountOperation: value })
                    }
                  }}
                />
              </Grid>
              <Grid item xs={3}>
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
              <Grid item xs={6}>
                <CustomTextField
                  fullWidth
                  label='Nickname'
                  placeholder='Name'
                  value={formData.nickNameDeffered}
                  onChange={e => setFormData({ ...formData, nickNameDeffered: e.target.value })}
                />
              </Grid>
              <Grid item xs={5.5}>
                <CustomTextField
                  fullWidth
                  label='The phone number to which the card is linked'
                  placeholder='+380 50 000 00 00'
                  value={formData.phoneNumber}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='start'>
                        <Typography>Phone</Typography>
                      </InputAdornment>
                    )
                  }}
                  onChange={e => {
                    const value = e.target.value

                    if (/^\d*\.?\d*$/.test(value)) {
                      setFormData({ ...formData, phoneNumber: value })
                    }
                  }}
                />
              </Grid>
              <Grid item xs={6.5}>
                <CustomTextField
                  fullWidth
                  label='Card number for national currency transfer'
                  placeholder='0000 0000 0000 0000'
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='start'>
                        <Typography>Card number</Typography>
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
                <CustomTextField
                  fullWidth
                  label='Cardholder full name'
                  placeholder='Name Surname'
                  value={formData.cardFullName}
                  onChange={e => setFormData({ ...formData, cardFullName: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <CustomTextField
                  fullWidth
                  label='Comment'
                  placeholder='Text'
                  value={formData.comment}
                  onChange={e => setFormData({ ...formData, comment: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                  <Typography>Commission: 1 {currency}</Typography>
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

export default TransferFormWithTabs
