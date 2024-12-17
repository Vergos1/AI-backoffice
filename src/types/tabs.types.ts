import type { ReactElement } from 'react'

export interface InvestmentTabType {
  id: number
  label: string
  value: string
  icon: string
}

export interface NewsTabType {
  id: number
  label: string
  value: string
  disabled?: boolean
}

export type TabContentList = Record<string, ReactElement>
