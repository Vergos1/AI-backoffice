import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'

const IncomeDistributionCard = ({ card, activeCard }: { card: any; activeCard: number }) => {
  const isCompletedCards = activeCard >= card.id

  return (
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
              {card.percentages.start}%
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
        <Button variant='contained' disabled={isCompletedCards} fullWidth color='primary'>
          {isCompletedCards ? 'Available' : 'Choose'}
        </Button>
      </Card>
    </Grid>
  )
}

export default IncomeDistributionCard
