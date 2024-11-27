'use client'
import type { ReactElement } from 'react'

import dynamic from 'next/dynamic'

import Career from '@/views/apps/career'

const PersonalMarketingTab = dynamic(() => import('@/views/apps/career/PersonalMarketing'))
const CompanyMarketingTab = dynamic(() => import('@/views/apps/career/CompanyMarketing'))
const SubscriptionTab = dynamic(() => import('@/views/apps/career/subscription/Subscription'))

const tabContentList = (): { [key: string]: ReactElement } => ({
  'personal-marketing': <PersonalMarketingTab />,
  'company-marketing': <CompanyMarketingTab />,
  subscription: <SubscriptionTab />
})

export default function Page() {
  return <Career tabContentList={tabContentList()} />
}
