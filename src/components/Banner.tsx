'use client'
import { Button, Card, CardContent, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'

import { BANNER_GRADIENT } from '@/constants/config'
import FeaturesCard from '../views/apps/investments/investment-tab/FeaturesCard'

type Props = {
  title: string
  variant?: 'estate' | 'career' | 'investments'
}

const Banner = ({ title, variant = 'investments' }: Props) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Grid>
      <Card>
        <CardContent
          sx={{
            backgroundImage: BANNER_GRADIENT
          }}
        >
          <Grid columns={16} spacing={2} textAlign={'left'} sx={{ mb: 4 }}>
            {variant === 'estate' ? (
              <Typography
                variant='h2'
                fontSize={32}
                className={`max-w-['${isMobile ? '100%' : '50%'}']`}
                fontWeight={700}
              >
                {title}
              </Typography>
            ) : (
              <Typography
                variant='h2'
                fontSize={32}
                className={`max-w-['${isMobile ? '100%' : '70%'}']`}
                fontWeight={700}
              >
                New Investment Direction <span className='text-primary'>{title}</span>
              </Typography>
            )}
          </Grid>

          <Grid columns={16} spacing={2} textAlign={'left'} sx={{ mb: 4 }}>
            {variant === 'estate' ? (
              <Typography variant='subtitle1'>
                AI Real Estate is an investment destination that gives everyone <br /> the global real estate market of
                the future and the opportunity to be part of cutting-edge <br />
                architectural solutions.
              </Typography>
            ) : (
              <Typography variant='subtitle1'>
                {title} Prime is an investment direction, which provides the opportunity to gain passive income <br />{' '}
                by investing into algorithmic trading. With {title} Prime every partner will get a premium <br />{' '}
                investment experience with an optimal ratio of returns to risks.
              </Typography>
            )}
          </Grid>

          {variant === 'investments' && (
            <Grid columns={16} spacing={2} textAlign={'left'} sx={{ mb: 4 }}>
              <FeaturesCard />
            </Grid>
          )}

          <Grid>
            <Button variant='contained' disableElevation>
              Watch Presentation
            </Button>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default Banner
