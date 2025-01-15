// Type Imports
import { Grid, Typography } from '@mui/material'

const UserBalance = () => {
  return (
    <Grid ml={5} container columnGap={1}>
      <Grid md>
        <Typography width='max-content' fontSize={10}>
          0.00 SWP = 0.00 SWCT
        </Typography>
        <Typography width='max-content' fontSize={10}>
          0.00 STD = 0.00 SWCT
        </Typography>
        <Typography width='max-content' fontSize={10}>
          0.00 SEST = 0.00 SGCT
        </Typography>
      </Grid>
      <Grid md={3}>
        <Typography width='max-content' fontSize={10}>
          0.00 SWCT
        </Typography>
        <Typography width='max-content' fontSize={10}>
          0.00 SGCT
        </Typography>
      </Grid>
    </Grid>
  )
}

export default UserBalance
