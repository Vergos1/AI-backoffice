import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'

import { SUBSCRIPTION_PLANS_LIST } from '@/constants'

const Subscription = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} className='width-full'>
        <Card>
          <CardContent>
            <h1 className='max-w-[600px] mb-6 text-black'>
              <span className='text-primary'>AI-subscription.</span> create your own business and earn in every
              investment direction of the company
            </h1>
            <Grid container spacing={6}>
              <Grid item xs={4} lg={3}>
                <div className='mb-1 flex items-center gap-1'>
                  <i className='tabler-checks text-primary' />
                  <h4 className='text-primary'>AI-subscription.</h4>
                </div>
                <Typography>Create your own business and earn in every investment direction of the company</Typography>
              </Grid>
              <Grid item xs={4} lg={3}>
                <div className='mb-1 flex items-center gap-1'>
                  <i className='tabler-checks text-primary' />
                  <h4 className='text-primary'>AI-subscription.</h4>
                </div>
                <Typography>Create your own business and earn in every investment direction of the company</Typography>
              </Grid>
              <Grid item xs={4} lg={3}>
                <div className='mb-1 flex items-center gap-1'>
                  <i className='tabler-checks text-primary' />
                  <h4 className='text-primary'>AI-subscription.</h4>
                </div>
                <Typography>Create your own business and earn in every investment direction of the company</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} className='width-full'>
        <Grid container spacing={6}>
          {SUBSCRIPTION_PLANS_LIST.map(({ plan, price, features }) => {
            const { testMoneys, benefitText } = features

            return (
              <Grid key={plan} item xs={12} md={3}>
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
          })}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Subscription
