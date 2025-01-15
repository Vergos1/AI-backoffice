'use client'
import { Box, Button, Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'

import { IconCalendarClock, IconUpload } from '@tabler/icons-react'

import { styled } from '@mui/material/styles'

import CustomTextField from '@/@core/components/mui/TextField'

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1
})

const Support = () => {
  return (
    <Grid container spacing={6}>
      <Grid item md={6} lg={4}>
        <Card>
          <CardHeader title='Support' />
          <CardContent>
            <form onSubmit={e => e.preventDefault()}>
              <Grid container spacing={6}>
                <Grid item lg={12}>
                  <CustomTextField fullWidth label='Title' placeholder='Type your title here...' />
                </Grid>
                <Grid item lg={12}>
                  <CustomTextField
                    fullWidth
                    rows={4}
                    multiline
                    label='Message'
                    placeholder='Type your message here...'
                  />
                </Grid>
                <Grid item lg={12} mb={5}>
                  <Button
                    fullWidth
                    component='label'
                    role={undefined}
                    variant='outlined'
                    tabIndex={-1}
                    startIcon={<IconUpload size={20} />}
                  >
                    Upload files
                    <VisuallyHiddenInput type='file' onChange={event => console.log(event.target.files)} multiple />
                  </Button>
                </Grid>
                <Box
                  pl={6}
                  display='flex'
                  justifyContent='justify-content'
                  alignItems='center'
                  gap={2}
                  width='100%'
                  maxWidth='100%'
                >
                  <Button fullWidth type='submit' variant='contained' className='mie-2'>
                    Submit
                  </Button>
                  <Button
                    fullWidth
                    type='reset'
                    variant='tonal'
                    color='secondary'
                    onClick={() => {
                      console.log('reset')
                    }}
                  >
                    Reset
                  </Button>
                </Box>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={6} lg={8}>
        <Card>
          <CardHeader title='Your Requests' />
          <CardContent>
            <Box
              bgcolor='background.default'
              display='flex'
              flexDirection='column'
              alignItems='center'
              justifyContent='center'
              borderRadius={1}
              pt={15}
              pb={15}
            >
              <IconCalendarClock size={32} stroke={1.2} />
              <Typography variant='h4' fontWeight={500} fontSize={16} color='textSecondary' mt={2}>
                Create New Request
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Support
