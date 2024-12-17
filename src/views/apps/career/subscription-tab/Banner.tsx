import { Card, CardContent, Grid, Typography } from '@mui/material'

const Banner = () => {
  return (
    <Grid item xs={12} className='width-full'>
      <Card>
        <CardContent>
          <h1 className='max-w-[600px] mb-6 text-black'>
            <span className='text-primary'>AI-subscription.</span> create your own business and earn in every investment
            direction of the company
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
  )
}

export default Banner
