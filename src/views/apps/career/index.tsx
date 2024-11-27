'use client'
import type { ReactElement, SyntheticEvent } from 'react'
import { useState } from 'react'

import { Grid, Tab } from '@mui/material'

import { TabContext, TabPanel } from '@mui/lab'

import CustomTabList from '@/@core/components/mui/TabList'

const Career = ({ tabContentList }: { tabContentList: { [key: string]: ReactElement } }) => {
  const [activeTab, setActiveTab] = useState('subscription')

  const handleChange = (event: SyntheticEvent, value: string) => {
    setActiveTab(value)
  }

  return (
    <Grid container>
      <TabContext value={activeTab}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <CustomTabList orientation='horizontal' onChange={handleChange} className='is-full' pill='true'>
              <Tab
                label='Personal Marketing'
                icon={<i className='tabler-user' />}
                iconPosition='start'
                value='personal-marketing'
                className='flex-row justify-start'
              />
              <Tab
                label='Company Marketing'
                icon={<i className='tabler-users-group' />}
                iconPosition='start'
                value='company-marketing'
                className='flex-row justify-start'
              />
              <Tab
                label='Subscription'
                icon={<i className='tabler-credit-card' />}
                iconPosition='start'
                value='subscription'
                className='flex-row justify-start'
              />
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

export default Career
