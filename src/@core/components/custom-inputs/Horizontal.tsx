import Checkbox from '@mui/material/Checkbox'
import Grid from '@mui/material/Grid'
import Radio from '@mui/material/Radio'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import classnames from 'classnames'

// Стилі компонентів
const Root = styled('div', {
  name: 'MuiCustomInputHorizontal',
  slot: 'root'
})(({ theme }) => ({
  blockSize: '100%',
  display: 'flex',
  gap: theme.spacing(1),
  borderRadius: 'var(--mui-shape-borderRadius)',
  cursor: 'pointer',
  position: 'relative',
  alignItems: 'flex-start',
  border: '1px solid var(--mui-palette-customColors-inputBorder)',
  padding: theme.spacing(4),
  color: 'var(--mui-palette-text-primary)',
  transition: theme.transitions.create(['border-color'], {
    duration: theme.transitions.duration.shorter
  }),

  '&:hover': {
    borderColor: 'var(--mui-palette-action-active)'
  },
  '&.active': {
    borderColor: 'var(--mui-palette-primary-main)',
    '& i, & svg': {
      color: 'var(--mui-palette-primary-main) !important'
    }
  }
}))

const Title = styled(Typography, {
  name: 'MuiCustomInputHorizontal',
  slot: 'title'
})(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
  color: 'var(--mui-palette-text-primary) !important'
}))

const Meta = styled(Typography, {
  name: 'MuiCustomInputHorizontal',
  slot: 'meta'
})(({ theme }) => ({
  ...theme.typography.body2,
  color: 'var(--mui-palette-text-disabled) !important'
}))

const Content = styled(Typography, {
  name: 'MuiCustomInputHorizontal',
  slot: 'content'
})(({ theme }) => ({
  ...theme.typography.body2
}))

const RadioInput = styled(Radio, {
  name: 'MuiCustomInputHorizontal',
  slot: 'input'
})(({ theme }) => ({
  marginBlockStart: theme.spacing(-0.25),
  marginInlineStart: theme.spacing(-0.25)
}))

const CheckboxInput = styled(Checkbox, {
  name: 'MuiCustomInputHorizontal',
  slot: 'input'
})(({ theme }) => ({
  marginBlockStart: theme.spacing(-0.25),
  marginInlineStart: theme.spacing(-0.25)
}))

const CustomInputHorizontal = (props: any) => {
  const { type, data, isSwiperCard, disabled, name, selected, gridProps, handleChange, color = 'primary' } = props

  const { plan, price, features } = data

  const renderData = () => {
    if (features) {
      return (
        <div className={`flex flex-col is-full gap-1.5 ${isSwiperCard ? 'keen-slider__slide' : ''}`}>
          <div className='flex items-start justify-between is-full mbs-1.5'>
            <Title textTransform='uppercase'>{plan}</Title>
            <Meta>{`$${price} Per year`}</Meta>
          </div>
          <Content>
            <Typography textTransform='uppercase' fontSize={14} fontWeight={600}>
              {features.testMoneys === 'unlimited' ? 'Unlimited' : `${features.testMoneys} SWCT/SGCT`}
            </Typography>
          </Content>
          <Content>{features.benefitText}</Content>
        </div>
      )
    }

    return null
  }

  return data ? (
    <Grid item {...gridProps}>
      <Root
        onClick={() => handleChange(plan)}
        className={classnames({
          active: type === 'radio' ? selected === plan : selected.includes(plan)
        })}
      >
        {type === 'radio' ? (
          <RadioInput
            disabled={disabled}
            name={name}
            color={color}
            value={plan}
            onChange={handleChange}
            checked={selected === plan}
          />
        ) : (
          <CheckboxInput
            color={color}
            name={`${name}-${plan}`}
            checked={selected.includes(plan)}
            onChange={() => handleChange(plan)}
          />
        )}
        {renderData()}
      </Root>
    </Grid>
  ) : null
}

export default CustomInputHorizontal
