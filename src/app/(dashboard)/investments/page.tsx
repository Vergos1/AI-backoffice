import dynamic from 'next/dynamic'

import { INVESTMENTS_TABS } from '@/constants'
import type { TabContentList } from '@/types/tabs.types'
import Investments from '@/views/apps/investments'

const InvestmentTab = dynamic(() => import('@/views/apps/investments/investment-tab/InvestmentTab'))

const tabContentList = (): TabContentList => ({
  'ai-forex': <InvestmentTab />,
  'ai-ipo': <InvestmentTab />,
  'ai-pharmaceutical': <InvestmentTab />,
  'ai-crypto-lm': <InvestmentTab />
})

export default function Page() {
  return <Investments tabContentList={tabContentList()} tabButtonsList={INVESTMENTS_TABS} />
}
