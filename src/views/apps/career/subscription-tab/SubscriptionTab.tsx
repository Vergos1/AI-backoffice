import { Grid } from '@mui/material'

import { SUBSCRIPTION_PLANS_LIST } from '@/constants'
import Banner from './Banner'
import SubscriptionCard from './SubscriptionCard'

const SubscriptionTab = () => {
  return (
    <Grid container spacing={6}>
      <Banner />
      <Grid item xs={12} className='width-full'>
        <Grid container spacing={6}>
          {SUBSCRIPTION_PLANS_LIST.map(({ plan, price, features }) => {
            const { testMoneys, benefitText } = features

            return (
              <SubscriptionCard
                key={plan}
                plan={plan}
                price={price}
                testMoneys={testMoneys as number | 'unlimited'}
                benefitText={benefitText}
              />
            )
          })}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SubscriptionTab
