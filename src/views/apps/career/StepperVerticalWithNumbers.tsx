'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Step from '@mui/material/Step'
import StepContent from '@mui/material/StepContent'
import StepLabel from '@mui/material/StepLabel'
import Stepper from '@mui/material/Stepper'
import Typography from '@mui/material/Typography'

// Third-party Imports
import classNames from 'classnames'
import { toast } from 'react-toastify'

// Component Imports
import { Box, Collapse } from '@mui/material'

import StepperWrapper from '@core/styles/stepper'

// Vars
const steps = [
  {
    percentage: 5,
    title: 'Account Details',
    subtitle: 'Enter your Account Details',
    bonus: 250,
    amount: 0,
    contribution: [
      {
        title: 'Current contribution',
        amount: 0
      }
    ]
  },
  {
    percentage: 7,
    title: 'Personal Info',
    subtitle: 'Setup Information',
    bonus: 500,
    amount: 500,
    contribution: [
      {
        title: 'Required Contribution',
        amount: 100
      },
      {
        title: 'Team Turnover Required or Investment',
        amount: 3000
      },
      {
        title: 'Left to team turnover level',
        amount: 3000
      },
      {
        title: 'Left to invest up to the level',
        amount: 3000
      }
    ]
  },
  {
    percentage: 9,
    title: 'Social Links',
    subtitle: 'Add Social Links',
    bonus: 1000,
    amount: 10000,
    contribution: [
      {
        title: 'Required Contribution',
        amount: 100
      },
      {
        title: 'Team Turnover Required or Investment',
        amount: 3000
      },
      {
        title: 'Left to team turnover level',
        amount: 3000
      },
      {
        title: 'Left to invest up to the level',
        amount: 3000
      }
    ]
  },
  {
    percentage: 10.5,
    title: 'Social Links',
    subtitle: 'Add Social Links',
    bonus: 2000,
    amount: 25000,
    contribution: [
      {
        title: 'Required Contribution',
        amount: 100
      },
      {
        title: 'Team Turnover Required or Investment',
        amount: 3000
      }
    ]
  },
  {
    percentage: 12,
    title: 'Social Links',
    subtitle: 'Add Social Links',
    bonus: 5000,
    amount: 50000,
    contribution: [
      {
        title: 'Required Contribution',
        amount: 100
      },
      {
        title: 'Team Turnover Required or Investment',
        amount: 3000
      },
      {
        title: 'Left to team turnover level',
        amount: 3000
      },
      {
        title: 'Left to invest up to the level',
        amount: 3000
      }
    ]
  },
  {
    percentage: 13,
    title: 'Social Links',
    subtitle: 'Add Social Links',
    bonus: 20000,
    amount: 100000,
    contribution: [
      {
        title: 'Required Contribution',
        amount: 100
      },
      {
        title: 'Team Turnover Required or Investment',
        amount: 3000
      },
      {
        title: 'Left to team turnover level',
        amount: 5000
      },
      {
        title: 'Left to invest up to the level',
        amount: 7000
      }
    ]
  },
  {
    percentage: 14,
    title: 'Social Links',
    subtitle: 'Add Social Links',
    bonus: 50000,
    amount: 500000,
    contribution: [
      {
        title: 'Required Contribution',
        amount: 100
      },
      {
        title: 'Team Turnover Required or Investment',
        amount: 3000
      },
      {
        title: 'Left to team turnover level',
        amount: 5000
      },
      {
        title: 'Left to invest up to the level',
        amount: 7000
      }
    ]
  },
  {
    percentage: 14.5,
    title: 'Social Links',
    subtitle: 'Add Social Links',
    bonus: 150000,
    amount: 1000000,
    contribution: [
      {
        title: 'Required Contribution',
        amount: 100
      },
      {
        title: 'Team Turnover Required or Investment',
        amount: 3000
      },
      {
        title: 'Left to team turnover level',
        amount: 5000
      },
      {
        title: 'Left to invest up to the level',
        amount: 7000
      }
    ]
  },
  {
    percentage: 15,
    title: 'Social Links',
    subtitle: 'Add Social Links',
    bonus: 500000,
    amount: 3000000,
    contribution: [
      {
        title: 'Required Contribution',
        amount: 100
      },
      {
        title: 'Team Turnover Required or Investment',
        amount: 3000
      },
      {
        title: 'Left to team turnover level',
        amount: 5000
      },
      {
        title: 'Left to invest up to the level',
        amount: 7000
      }
    ]
  },
  {
    percentage: 15.5,
    title: 'Social Links',
    subtitle: 'Add Social Links',
    bonus: 1000000,
    amount: 10000000,
    contribution: [
      {
        title: 'Required Contribution',
        amount: 100
      },
      {
        title: 'Team Turnover Required or Investment',
        amount: 3000
      },
      {
        title: 'Left to team turnover level',
        amount: 5000
      },
      {
        title: 'Left to invest up to the level',
        amount: 7000
      }
    ]
  },
  {
    percentage: 16,
    title: 'Social Links',
    subtitle: 'Add Social Links',
    bonus: 2000000,
    amount: 25000000,
    contribution: [
      {
        title: 'Required Contribution',
        amount: 100
      },
      {
        title: 'Team Turnover Required or Investment',
        amount: 3000
      },
      {
        title: 'Left to team turnover level',
        amount: 5000
      },
      {
        title: 'Left to invest up to the level',
        amount: 7000
      }
    ]
  },
  {
    percentage: 16.25,
    title: 'Social Links',
    subtitle: 'Add Social Links',
    bonus: 3000000,
    amount: 100000000,
    contribution: [
      {
        title: 'Required Contribution',
        amount: 10000
      }
    ]
  },
  {
    percentage: 16.5,
    title: 'Social Links',
    subtitle: 'Add Social Links',
    bonus: 5000000,
    amount: 500000000,
    contribution: [
      {
        title: 'Required Contribution',
        amount: 100
      },
      {
        title: 'Team Turnover Required or Investment',
        amount: 3000
      },
      {
        title: 'Left to team turnover level',
        amount: 5000
      },
      {
        title: 'Left to invest up to the level',
        amount: 7000
      }
    ]
  },
  {
    percentage: 16.75,
    title: 'Social Links',
    subtitle: 'Add Social Links',
    bonus: 10000000,
    amount: 1000000000,
    contribution: [
      {
        title: 'Required Contribution',
        amount: 10000
      },
      {
        title: 'Team Turnover Required or Investment',
        amount: 15000
      }
    ]
  },
  {
    percentage: 17,
    title: 'Social Links',
    subtitle: 'Add Social Links',
    bonus: 10000000,
    amount: 1000000000,
    contribution: [
      {
        title: 'Required Contribution',
        amount: 15000
      },
      {
        title: 'Team Turnover Required or Investment',
        amount: 25000
      }
    ]
  }
]

const StepperVerticalWithNumbers = () => {
  // States
  const [activeStep, setActiveStep] = useState(4)

  return (
    <StepperWrapper>
      <Stepper activeStep={activeStep} orientation='vertical'>
        {steps.map((step, index) => {
          const isCompleted = index <= activeStep
          const contribution = step.contribution
          const percentage = `${step.percentage}%`
          const isActive = activeStep === index
          const activeBackground = isActive ? 'var(--primary-color)' : 'var(--mui-palette-Avatar-defaultBg)'

          const activePercentBackground = isActive ? 'white' : 'var(--mui-palette-Avatar-defaultBg)'

          const activePercentColor = isActive ? 'black' : 'textSecondary'

          const activeColor = isActive ? 'white' : 'var(--mui-palette-text-primary)'
          const formattedAmount = step.amount.toLocaleString('en-US').replace(/,/g, ' ')

          return (
            <Step key={index} expanded className={classNames({ active: isActive })}>
              <StepLabel>
                <div className='step-label'>
                  <Box
                    borderRadius={4}
                    width='100%'
                    paddingY={2}
                    paddingX={4}
                    display='flex'
                    justifyContent='space-between'
                    gap={4}
                    alignItems='center'
                    bgcolor={activeBackground}
                  >
                    {!isCompleted ? (
                      <Typography fontSize={14} fontWeight={600}>
                        $ {formattedAmount}
                      </Typography>
                    ) : (
                      <Typography color={activeColor}>Current percentage:</Typography>
                    )}
                    <Box display='flex' padding={1} borderRadius={4} bgcolor={activePercentBackground}>
                      <Typography fontWeight={600} fontSize={12} color={activePercentColor}>
                        {percentage}
                      </Typography>
                    </Box>
                  </Box>
                </div>
              </StepLabel>
              <StepContent>
                {isCompleted &&
                  contribution.map((item, index) => (
                    <Box key={index} display='flex' justifyContent='space-between' alignItems='center'>
                      <Typography fontSize={13} maxWidth='70%'>
                        {item.title}
                      </Typography>
                      <Typography fontSize={14}>{item.amount} $</Typography>
                    </Box>
                  ))}
              </StepContent>
            </Step>
          )
        })}
      </Stepper>
    </StepperWrapper>
  )
}

export default StepperVerticalWithNumbers
