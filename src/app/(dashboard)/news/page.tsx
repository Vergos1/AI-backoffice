import dynamic from 'next/dynamic'

import { NEWS_TABS } from '@/constants'
import type { TabContentList } from '@/types/tabs.types'
import News from '@/views/apps/news'

const NewsTab = dynamic(() => import('@/views/apps/news/news-tab/NewsTab'))
const UpgradeTab = dynamic(() => import('@/views/apps/news/upgrade-tab/UpgradeTab'))

const tabContentList = (): TabContentList => ({
  news: <NewsTab />,
  upgrade: <UpgradeTab />
})

export default function Page() {
  return <News tabContentList={tabContentList()} tabButtonsList={NEWS_TABS} />
}
