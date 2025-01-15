import { Box, Button, Card, CardContent, CardHeader, Grid, Tooltip, Typography } from '@mui/material'
import {
  IconBriefcase2,
  IconCalendarClock,
  IconCopy,
  IconInfoCircle,
  IconUser,
  IconUsersGroup,
  IconUsersPlus,
  IconUserUp,
  IconWallet
} from '@tabler/icons-react'

import CustomAvatar from '@/@core/components/mui/Avatar'
import CustomTextField from '@/@core/components/mui/TextField'
import StepperVerticalWithNumbers from './StepperVerticalWithNumbers'

const PersonalMarketingTab = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} lg={4}>
        <Card>
          <CardHeader title='Partnership Dynamics' />
          <CardContent>
            <Grid container spacing={6} alignItems='center'>
              <Grid item lg={2}>
                <CustomAvatar variant='rounded' skin='light' color='secondary'>
                  <IconWallet />
                </CustomAvatar>
              </Grid>
              <Grid item lg>
                <Typography variant='body1' fontSize={14}>
                  Bonuses from your company
                </Typography>
                <Box mt={1} display='flex' gap={4}>
                  <Typography variant='h6' fontSize={16}>
                    $0.00
                  </Typography>
                  <Typography variant='h6' fontSize={16}>
                    0.00 SWCT
                  </Typography>
                  <Typography variant='h6' fontSize={16}>
                    0.00 SGCT
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} lg={8}>
        <Card>
          <CardHeader title='Share' />
          <CardContent>
            <Grid container spacing={6} alignItems='center'>
              <Grid item lg={1}>
                <CustomAvatar variant='rounded' skin='light' color='secondary'>
                  <IconUser />
                </CustomAvatar>
              </Grid>
              <Grid item lg>
                <Box display='flex' justifyContent='space-between'>
                  <Box>
                    <Typography variant='body1' fontSize={14}>
                      Your Referral Link
                    </Typography>
                    <Typography mt={1} variant='h6' fontSize={16}>
                      https://ai-group.com?referral=88215791
                    </Typography>
                  </Box>
                  <Button variant='contained' sx={{ width: '20%', height: '100%' }} startIcon={<IconCopy />}>
                    Copy
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Card>
          <CardHeader title='Team Revenue Bonuses' />
          <CardContent>
            <Box maxHeight={465} overflow='auto' pr={2}>
              <StepperVerticalWithNumbers />
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid
        container
        item
        xs={8}
        sx={{
          maxHeight: 'max-content'
        }}
        spacing={6}
      >
        <Grid item xs={12}>
          <Card>
            <CardHeader title='My Team' />
            <CardContent>
              <Grid container spacing={6} alignItems='center'>
                <Grid item xs={12} lg={6}>
                  <Box display='flex' alignItems='center' gap={6}>
                    <Box>
                      <CustomAvatar variant='rounded' skin='light' color='secondary'>
                        <IconUsersGroup />
                      </CustomAvatar>
                    </Box>
                    <Box>
                      <Typography variant='body1' fontSize={14}>
                        Total people in team
                      </Typography>
                      <Box mt={1} display='flex' gap={4}>
                        <Typography variant='h6' fontSize={16}>
                          0
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Box display='flex' alignItems='center' gap={6}>
                    <Box>
                      <CustomAvatar variant='rounded' skin='light' color='secondary'>
                        <IconUserUp />
                      </CustomAvatar>
                    </Box>
                    <Box>
                      <Typography variant='body1' fontSize={14}>
                        Active people in team
                      </Typography>
                      <Box mt={1} display='flex' gap={4}>
                        <Typography variant='h6' fontSize={16}>
                          0
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Box display='flex' alignItems='center' gap={6}>
                    <Box>
                      <CustomAvatar variant='rounded' skin='light' color='secondary'>
                        <IconUsersPlus />
                      </CustomAvatar>
                    </Box>
                    <Box>
                      <Tooltip
                        title='Team Turnover Considered: -100% of the investment amount of personally invited users -50% of the investment amount in existing branches, but from one branch a maximum of 33% of the required turnover can be accounted for'
                        arrow
                        placement='bottom'
                      >
                        <Box display='flex' alignItems='center' gap={1}>
                          <Typography variant='body1' fontSize={14}>
                            Team Turnover
                          </Typography>
                          <IconInfoCircle size={14} />
                        </Box>
                      </Tooltip>
                      <Box mt={1} display='flex' gap={4}>
                        <Typography variant='h6' fontSize={16}>
                          $0.00
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Box display='flex' alignItems='center' gap={6}>
                    <Box>
                      <CustomAvatar variant='rounded' skin='light' color='secondary'>
                        <IconBriefcase2 />
                      </CustomAvatar>
                    </Box>
                    <Box>
                      <Typography variant='body1' fontSize={14}>
                        Countable team turnover
                      </Typography>
                      <Box mt={1} display='flex' gap={4}>
                        <Typography variant='h6' fontSize={16}>
                          $0.00
                        </Typography>
                        <Typography variant='h6' fontSize={16}>
                          0.00 SWCT
                        </Typography>
                        <Typography variant='h6' fontSize={16}>
                          0.00 SGCT
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title='Structure'
              action={
                <CustomTextField id='form-props-search' placeholder='Enter name or user ID' fullWidth type='search' />
              }
            />
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
                <Typography
                  variant='h4'
                  maxWidth={250}
                  textAlign='center'
                  fontWeight={500}
                  fontSize={16}
                  color='textSecondary'
                  mt={2}
                >
                  Recommend our company to your friends and earn rewards
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default PersonalMarketingTab
