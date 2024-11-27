// Type Imports
import type { HorizontalMenuDataType } from '@/types/menuTypes'

const horizontalMenuData = (): HorizontalMenuDataType[] => [
  {
    label: 'Home',
    href: '/home',
    icon: 'tabler-smart-home'
  },
  {
    label: 'Career',
    href: '/career',
    icon: 'tabler-building-skyscraper'
  },
  {
    label: 'Finance',
    href: '/finance',
    icon: 'tabler-businessplan'
  }
]

export default horizontalMenuData
