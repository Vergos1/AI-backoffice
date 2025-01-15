import type { ApexOptions } from 'apexcharts'

const divider = 'var(--mui-palette-divider)'
const disabledText = 'var(--mui-palette-text-disabled)'
const primaryLine = 'var(--mui-palette-primary-main)'

export const investmentsSeries = [
  {
    data: [0, 10, 20, 30, 40, 10, 60, 40, 80, 50, 100]
  }
]
export const homeSeries = [
  {
    data: [5, 14, 32, 12, 66, 49]
  }
]
export const barSeries = [{ data: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80] }]

export const barOptions: ApexOptions = {
  chart: {
    parentHeightOffset: 0,
    toolbar: { show: false }
  },
  plotOptions: {
    bar: {
      borderRadius: 6,
      columnWidth: '95%',
      distributed: true,
      dataLabels: { position: 'top' }
    }
  },
  dataLabels: {
    enabled: true,
    formatter: val => `${val}k`
  },
  xaxis: {
    categories: [
      '5%',
      '7%',
      '9%',
      '10.5%',
      '12%',
      '13%',
      '14%',
      '14.5%',
      '15%',
      '15,5%',
      '16%',
      '16,25%',
      '16,5%',
      '16,75%',
      '17%'
    ]
  },
  legend: { show: false },
  yaxis: {
    labels: {
      show: false
    }
  },
  grid: { show: false }
}

export const homeDashboardOptions: ApexOptions = {
  chart: {
    parentHeightOffset: 0,
    zoom: { enabled: false },
    toolbar: { show: false }
  },
  colors: [primaryLine],
  stroke: { curve: 'straight' },
  dataLabels: { enabled: false },
  markers: {
    strokeWidth: 7,
    strokeOpacity: 1,
    colors: [primaryLine],
    strokeColors: ['#fff']
  },
  grid: {
    padding: { top: 10 },
    borderColor: divider,
    xaxis: {
      lines: { show: true }
    }
  },
  tooltip: {
    custom(data: any) {
      return `
        <div class='bar-chart'>
          <span>${data.series[data.seriesIndex][data.dataPointIndex] * 100}</span>
        </div>
        `
    }
  },
  yaxis: {
    labels: {
      style: { colors: disabledText, fontSize: '13px' },
      formatter: (value: number) => `${value}%`
    }
  },
  xaxis: {
    axisBorder: { show: false },
    axisTicks: { color: divider },
    crosshairs: {
      stroke: { color: divider }
    },
    labels: {
      style: { colors: disabledText, fontSize: '13px' }
    },
    categories: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan']
  }
}

export const investmentsOptions: ApexOptions = {
  chart: {
    parentHeightOffset: 0,
    zoom: { enabled: false },
    toolbar: { show: false }
  },
  colors: [primaryLine],
  stroke: { curve: 'straight' },
  dataLabels: { enabled: false },
  markers: {
    strokeWidth: 7,
    strokeOpacity: 1,
    colors: [primaryLine],
    strokeColors: ['#fff']
  },
  grid: {
    padding: { top: -10 },
    borderColor: divider,
    xaxis: {
      lines: { show: true }
    }
  },
  tooltip: {
    custom(data: any) {
      return `
        <div class='bar-chart'>
          <span>${data.series[data.seriesIndex][data.dataPointIndex]}%</span>
        </div>
        `
    }
  },
  yaxis: {
    labels: {
      style: { colors: disabledText, fontSize: '13px' },
      formatter: (value: number) => `${value}%`
    }
  },
  xaxis: {
    axisBorder: { show: false },
    axisTicks: { color: divider },
    crosshairs: {
      stroke: { color: divider }
    },
    labels: {
      style: { colors: disabledText, fontSize: '13px' }
    },
    categories: [
      '05.07.2023',
      '06.07.2023',
      '07.07.2023',
      '08.07.2023',
      '09.07.2023',
      '10.07.2023',
      '11.07.2023',
      '12.07.2023',
      '13.07.2023',
      '14.07.2023',
      '15.07.2023',
      '16.07.2023',
      '17.07.2023'
    ]
  }
}
