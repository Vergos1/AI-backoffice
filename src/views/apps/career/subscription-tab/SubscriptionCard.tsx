import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'

type Props = {
  plan: string
  price: number
  testMoneys: number | 'unlimited'
  benefitText: string
}

const SubscriptionCard = ({ plan, price, testMoneys, benefitText }: Props) => {
  return (
    <Grid item xs={12} md={3}>
      <Card>
        <CardHeader
          sx={{ p: 2 }}
          className='bg-primary mb-2'
          titleTypographyProps={{
            align: 'center',
            variant: 'h6',
            textTransform: 'uppercase',
            color: '#fff'
          }}
          title={plan}
        />
        <CardContent>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Typography className='justify-center items-center flex gap-1'>
                <span className='text-primary text-2xl'>{price}</span>
                USDC
              </Typography>
              <Typography className='text-center'>Per year</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className='justify-center items-center flex gap-1'>
                <span className='text-2xl'>{testMoneys}</span>
                COINS
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className='text-center'>{benefitText}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default SubscriptionCard
