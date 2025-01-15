import * as React from 'react'

import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import type { CircularProgressProps } from '@mui/material/CircularProgress'
import CircularProgress, { circularProgressClasses } from '@mui/material/CircularProgress'

// Inspired by the former Facebook spinners.
export const ProgressCircularWithLabel = (props: CircularProgressProps) => {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress
        variant='determinate'
        sx={theme => ({
          color: theme.palette.grey[200],
          ...theme.applyStyles('dark', {
            color: theme.palette.grey[800]
          })
        })}
        size={120}
        {...props}
        value={100}
      />
      <CircularProgress
        variant='determinate'
        disableShrink
        sx={theme => ({
          color: 'primary',
          position: 'absolute',
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: 'round'
          },
          ...theme.applyStyles('dark', {
            color: 'primary'
          })
        })}
        size={120}
        value={57}
        {...props}
      />
      <div className='flex absolute top-0 left-0 right-0 bottom-0 items-center justify-center flex-col'>
        <Typography variant='body1' fontSize={16} fontWeight={600} color='primary'>
          265
        </Typography>
        <Typography variant='body1' fontSize={16} fontWeight={600} color='primary'>
          Days
        </Typography>
      </div>
    </Box>
  )
}
