import dynamic from 'next/dynamic'

import { INVESTMENTS_TABS } from '@/constants'
import type { TabContentList } from '@/types/tabs.types'
import Investments from '@/views/apps/investments'

const InvestmentTab = dynamic(() => import('@/views/apps/investments/investment-tab/InvestmentTab'))

const tabContentList = (): TabContentList => ({
  'ai-forex': <InvestmentTab tabTitle='AI-Forex' />,
  'ai-ipo': <InvestmentTab tabTitle='AI-IPO' />,
  'ai-pharmaceutical': <InvestmentTab tabTitle='AI-Pharmaceutical' />,
  'ai-crypto-lm': <InvestmentTab tabTitle='AI-Crypto-LM' />
})

export default function Page() {
  return <Investments tabContentList={tabContentList()} tabButtonsList={INVESTMENTS_TABS} />
}
