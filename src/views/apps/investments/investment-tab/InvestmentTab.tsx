import { Box } from '@mui/material'

import Banner from '../../../../components/Banner'
import ChartSection from './ChartSection/ChartSection'
import IncomeDistribution from './IncomeDistribution/IncomeDistribution'
import TransactionHistory from './TransactionHistory/TransactionHistory'

const InvestmentTab = ({ tabTitle }: { tabTitle: string }) => {
  return (
    <Box gap={6} display='flex' flexDirection='column'>
      <Banner title={tabTitle} />
      <IncomeDistribution />
      <ChartSection />
      <TransactionHistory currentDistributionStart={50} currentDistributionEnd={50} />
    </Box>
  )
}

export default InvestmentTab
