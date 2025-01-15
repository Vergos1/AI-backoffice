import { Box, Card, CardContent, Grid, Typography } from '@mui/material'

import { BANNER_GRADIENT } from '@/constants/config'

const Banner = () => {
  return (
    <Grid item xs={12}>
      <Card>
        <CardContent
          sx={{
            backgroundImage: BANNER_GRADIENT,
            p: { xs: 4, sm: 6, lg: 8 }, // Відступи змінюються залежно від розміру екрану
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            alignItems: 'flex-start'
          }}
        >
          <Typography
            variant='h2'
            fontSize={{ xs: 20, sm: 28, lg: 32 }} // Розмір тексту адаптивний
            fontWeight={700}
            sx={{
              maxWidth: { xs: '100%', md: '60%' }, // Текст займає повну ширину на малих екранах
              mb: 4
            }}
          >
            <span className='text-primary'>AI-subscription.</span> Create your own business and earn in every investment
            direction of the company.
          </Typography>

          <Grid container spacing={4}>
            {[...Array(3)].map((_, index) => (
              <Grid key={index} item xs={12} sm={6} lg={4}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1
                    }}
                  >
                    <i className='tabler-checks text-primary' />
                    <Typography fontWeight={600} className='text-primary'>
                      AI-subscription.
                    </Typography>
                  </Box>
                  <Typography fontSize={{ xs: 12, sm: 14, lg: 16 }}>
                    Create your own business and earn in every investment direction of the company.
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default Banner
