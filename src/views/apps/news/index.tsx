'use client'
import type { SyntheticEvent } from 'react'
import { useState } from 'react'

import { Grid, Tab } from '@mui/material'

import { TabContext, TabPanel } from '@mui/lab'

import CustomTabList from '@/@core/components/mui/TabList'
import type { NewsTabType, TabContentList } from '@/types/tabs.types'

type Props = {
  tabContentList: TabContentList
  tabButtonsList: NewsTabType[]
}

const News = ({ tabContentList, tabButtonsList }: Props) => {
  const [activeTab, setActiveTab] = useState<keyof TabContentList>('news')

  const handleChange = (event: SyntheticEvent, value: string) => {
    setActiveTab(value as keyof TabContentList)
  }

  return (
    <Grid container>
      <TabContext value={activeTab}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <CustomTabList orientation='horizontal' onChange={handleChange} pill='true'>
              {tabButtonsList.map(({ id, label, value, disabled }) => (
                <Tab
                  disabled={disabled}
                  key={id}
                  label={label}
                  iconPosition='start'
                  value={value}
                  className='flex-row justify-center'
                />
              ))}
            </CustomTabList>
          </Grid>
          <Grid item xs={12}>
            <TabPanel value={activeTab} className='p-0'>
              {tabContentList[activeTab]}
            </TabPanel>
          </Grid>
        </Grid>
      </TabContext>
    </Grid>
  )
}

export default News
