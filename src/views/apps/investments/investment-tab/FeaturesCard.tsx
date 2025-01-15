import React from 'react'

import { Box, Grid, Typography } from '@mui/material'

const FeaturesCard = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={4}>
        <Grid item sm={6} lg={3}>
          <Box display='flex' gap={1} alignItems='center' mb={2}>
            <i className='tabler-checks text-primary' />
            <Typography fontWeight={500} className='text-primary'>
              Algorithmic Trading
            </Typography>
          </Box>
          <Box display='flex' gap={1} alignItems='center'>
            <i className='tabler-checks text-primary' />
            <Typography fontWeight={500} className='text-primary'>
              Trading Activity 24/5
            </Typography>
          </Box>
        </Grid>

        <Grid item sm={6} lg={3}>
          <Box display='flex' gap={1} alignItems='center' mb={2}>
            <i className='tabler-checks text-primary' />
            <Typography fontWeight={600} className='text-primary'>
              Artificial Intelligence
            </Typography>
          </Box>
          <Box display='flex' gap={1} alignItems='center'>
            <i className='tabler-checks text-primary' />
            <Typography fontWeight={600} className='text-primary'>
              Trading on International Exchanges
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default FeaturesCard
