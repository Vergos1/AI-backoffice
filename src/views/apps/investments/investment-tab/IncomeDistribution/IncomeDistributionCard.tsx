'use client'
import { useState } from 'react'

import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'

import ChoosePlanModal from '../ChoosePlanModal/ChoosePlanModal'

const IncomeDistributionCard = ({ card, activeCard }: { card: any; activeCard: number }) => {
  // States
  const [open, setOpen] = useState<boolean>(false)

  const handleClickOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

  const isCompletedCards = activeCard >= card.id

  return (
    <>
      <Grid item className='keen-slider__slide'>
        <Card>
          <CardMedia image='images/pages/charts.jpeg' className='bs-[140px]' />
          <CardContent>
            <Box display='flex' alignItems='center' justifyContent='center' gap={1}>
              <Typography color='primary' variant='h5'>
                {card.percentages.start}
              </Typography>
              /
              <Typography color='black' variant='h5'>
                {card.percentages.end}%
              </Typography>
            </Box>
            <Typography fontWeight={500} fontSize={12} textAlign='center' mb={4}>
              Your income
            </Typography>
            <Box display='flex' flexDirection='column' alignItems='center'>
              <Typography color='black' fontWeight={600} fontSize={16}>
                {card.minimalAmounts.sgct} SGCT
              </Typography>
              <Typography color='black' fontWeight={600} fontSize={16}>
                {card.minimalAmounts.swct} SWCT
              </Typography>
              <Typography fontWeight={500} fontSize={12}>
                Min. investment
              </Typography>
            </Box>
          </CardContent>
          <Button variant='contained' onClick={handleClickOpen} disabled={isCompletedCards} fullWidth color='primary'>
            {isCompletedCards ? 'Available' : 'Choose'}
          </Button>
        </Card>
      </Grid>
      <ChoosePlanModal
        percentStart={card.percentages.start}
        percentEnd={card.percentages.end}
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
      />
    </>
  )
}

export default IncomeDistributionCard
