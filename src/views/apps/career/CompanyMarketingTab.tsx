'use client'

// Custom Config Imports
import { Card, CardContent, CardHeader } from '@mui/material'

import { barOptions, barSeries } from '@/constants/charts-configs'

// Styled Component Import
import AppReactApexCharts from '@/libs/styles/AppReactApexCharts'

const CompanyMarketingTab = () => {
  const maxVal = Math.max(...barSeries[0].data)
  const highlightColor = 'var(--mui-palette-primary-main)'
  const defaultColor = 'var(--mui-palette-primary-lightOpacity)'

  const colors = barSeries[0].data.map(value => (value === maxVal ? highlightColor : defaultColor))

  return (
    <Card>
      <CardHeader title='Levels' />
      <CardContent>
        <AppReactApexCharts
          type='bar'
          height={400}
          width='100%'
          options={{
            ...barOptions,
            colors
          }}
          series={barSeries}
        />
      </CardContent>
    </Card>
  )
}

export default CompanyMarketingTab
