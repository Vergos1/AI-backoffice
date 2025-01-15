'use client'

// React Imports
import type { MouseEvent } from 'react'
import { useRef, useState } from 'react'

// Next Imports
import { useRouter } from 'next/navigation'

// MUI Imports
import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'
import Button from '@mui/material/Button'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Divider from '@mui/material/Divider'
import Fade from '@mui/material/Fade'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

// Hook Imports
import { Box } from '@mui/material'

import { useSettings } from '@core/hooks/useSettings'

// Styled component for badge content
const BadgeContentSpan = styled('span')({
  width: 8,
  height: 8,
  borderRadius: '50%',
  cursor: 'pointer',
  backgroundColor: 'var(--mui-palette-success-main)',
  boxShadow: '0 0 0 2px var(--mui-palette-background-paper)'
})

const UserDropdown = () => {
  // States
  const [open, setOpen] = useState(false)

  // Refs
  const anchorRef = useRef<HTMLDivElement>(null)

  // Hooks
  const router = useRouter()

  const { settings } = useSettings()

  const handleDropdownOpen = () => {
    !open ? setOpen(true) : setOpen(false)
  }

  const handleDropdownClose = (event?: MouseEvent<HTMLLIElement> | (MouseEvent | TouchEvent), url?: string) => {
    if (url) {
      router.push(url)
    }

    if (anchorRef.current && anchorRef.current.contains(event?.target as HTMLElement)) {
      return
    }

    setOpen(false)
  }

  const handleUserLogout = async () => {
    // Redirect to login page
    router.push('/login')
  }

  const handleRedirect = () => {
    router.push('/investments')
  }

  return (
    <>
      <Badge
        ref={anchorRef}
        overlap='circular'
        badgeContent={<BadgeContentSpan onClick={handleDropdownOpen} />}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        className='mis-2'
      >
        <Avatar
          ref={anchorRef}
          alt='John Doe'
          src=''
          onClick={handleDropdownOpen}
          className='cursor-pointer bs-[38px] is-[38px]'
        />
      </Badge>
      <Popper
        open={open}
        transition
        disablePortal
        placement='bottom-end'
        anchorEl={anchorRef.current}
        className='min-is-[240px] !mbs-3 z-[1]'
      >
        {({ TransitionProps, placement }) => (
          <Fade
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom-end' ? 'right top' : 'left top'
            }}
          >
            <Paper className={settings.skin === 'bordered' ? 'border shadow-none' : 'shadow-lg'}>
              <ClickAwayListener onClickAway={e => handleDropdownClose(e as MouseEvent | TouchEvent)}>
                <MenuList>
                  <div className='flex items-center plb-2 pli-6 gap-4' tabIndex={-1}>
                    <Avatar alt='John Doe' src='' />
                    <div className='flex items-start flex-col'>
                      <Typography className='font-medium' color='text.primary'>
                        John Doe
                      </Typography>
                      <Typography variant='caption'>admin@vuexy.com</Typography>
                    </div>
                  </div>
                  <Box width='100%' className='plb-2 pli-6'>
                    <Box
                      className='pl-3 pr-3 pt-1 pb-1'
                      borderRadius={2}
                      bgcolor='background.default'
                      display='flex'
                      width='100%'
                      gap={4}
                      alignItems='center'
                    >
                      <Typography width='50%' textAlign='center' color='text.primary'>
                        FREE
                      </Typography>
                      <Button sx={{ width: '100%' }} onClick={handleRedirect} variant='contained'>
                        Improve
                      </Button>
                    </Box>
                  </Box>

                  <Divider className='mlb-1' />
                  <MenuItem className='mli-2 gap-3' onClick={e => handleDropdownClose(e)}>
                    <i className='tabler-wallet' />
                    <Box className='flex flex-col'>
                      <Typography fontSize={14} color='text.primary'>
                        0.00 SWCT
                      </Typography>
                      <Typography textTransform='uppercase' fontSize={12} color='text.secondary'>
                        Balance
                      </Typography>
                    </Box>
                  </MenuItem>
                  <MenuItem className='mli-2 gap-3' onClick={e => handleDropdownClose(e)}>
                    <i className='tabler-exchange' />
                    <Box className='flex flex-col'>
                      <Typography fontSize={14} color='text.primary'>
                        1 SWCT = 1 SGCT
                      </Typography>
                      <Typography textTransform='uppercase' fontSize={12} color='text.secondary'>
                        Exchange rate
                      </Typography>
                    </Box>
                  </MenuItem>
                  <Divider className='mlb-1' />
                  <MenuItem className='mli-2 gap-3' onClick={e => handleDropdownClose(e)}>
                    <i className='tabler-file-percent' />
                    <Box className='flex flex-col'>
                      <Typography fontSize={14} color='text.primary'>
                        5 %
                      </Typography>
                      <Typography textTransform='uppercase' fontSize={12} color='text.secondary'>
                        Current percentage
                      </Typography>
                    </Box>
                  </MenuItem>
                  <MenuItem className='mli-2 gap-3' onClick={e => handleDropdownClose(e)}>
                    <i className='tabler-arrow-big-up' />
                    <Box className='flex flex-col'>
                      <Typography fontSize={14} color='text.primary'>
                        3000.00 SWCT
                      </Typography>
                      <Typography textTransform='uppercase' fontSize={12} color='text.secondary'>
                        Left to team turnover lvl
                      </Typography>
                    </Box>
                  </MenuItem>
                  <MenuItem className='mli-2 gap-3' onClick={e => handleDropdownClose(e)}>
                    <i className='tabler-download' />
                    <Typography color='text.primary'>Download certificate</Typography>
                  </MenuItem>
                  <Divider className='mlb-1' />
                  <div className='flex items-center plb-2 pli-6'>
                    <div className='flex items-center flex-col gap-2'>
                      <Typography className='font-medium' color='text.primary' fontSize={12}>
                        https://s-group.io?referral=88215791
                      </Typography>
                      <Typography textTransform='uppercase' fontSize={12} color='text.secondary'>
                        your referral link
                      </Typography>
                      <Button
                        fullWidth
                        variant='contained'
                        size='small'
                        endIcon={<i className='tabler-copy' />}
                        onClick={handleUserLogout}
                        sx={{ '& .MuiButton-endIcon': { marginInlineStart: 1.5 } }}
                      >
                        Copy
                      </Button>
                    </div>
                  </div>
                  <Divider className='mlb-1' />
                  <div className='flex items-center flex-col plb-2 pli-3 gap-2'>
                    <Button
                      fullWidth
                      variant='contained'
                      color='error'
                      size='medium'
                      endIcon={<i className='tabler-logout' />}
                      onClick={handleUserLogout}
                      sx={{ '& .MuiButton-endIcon': { marginInlineStart: 1.5 } }}
                    >
                      Logout
                    </Button>
                  </div>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  )
}

export default UserDropdown
