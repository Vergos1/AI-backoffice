// MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

// Component Imports
import { MenuItem, Typography } from '@mui/material'

import CustomTextField from '@core/components/mui/TextField'

type Props = {
  open: boolean
  handleClickOpen: () => void
  handleClose: () => void
  percentStart: number
  percentEnd: number
}

const ChoosePlanModal = ({ open, handleClose, percentStart, percentEnd }: Props) => {
  return (
    <>
      <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title' closeAfterTransition={false}>
        <DialogTitle id='form-dialog-title' textTransform='capitalize'>
          specify the amount of investment
        </DialogTitle>
        <DialogContent>
          <DialogContentText className='mbe-3'>
            Package {percentStart}/{percentEnd}%
          </DialogContentText>
          <CustomTextField select fullWidth defaultValue='80/20' id='custom-select'>
            <MenuItem value='80/20'>
              <Typography>
                80% <span className='font-semibold'>SGCT /</span> 20% <span className='font-semibold'>SWCT</span>
              </Typography>
            </MenuItem>
            <MenuItem value='100'>
              100% <span className='font-semibold'>SGCT</span>
            </MenuItem>
          </CustomTextField>
        </DialogContent>
        <DialogActions className='dialog-actions-dense'>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ChoosePlanModal
