'use client'
import { useKeenSlider } from 'keen-slider/react'

import { INCOME_DISTRIBUTION_CARDS } from '@/constants'
import { useWindowSize } from '@/hooks/useWindowSize'
import IncomeDistributionCard from './IncomeDistributionCard'

const IncomeDistributionSwiper = () => {
  const { width } = useWindowSize()

  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: width < 768 ? 1.4 : 4.4,
      spacing: 32
    }
  })

  return (
    <div ref={ref} className='keen-slider'>
      {INCOME_DISTRIBUTION_CARDS.map((card, index) => (
        <IncomeDistributionCard activeCard={2} card={card} key={index} />
      ))}
    </div>
  )
}

export default IncomeDistributionSwiper
