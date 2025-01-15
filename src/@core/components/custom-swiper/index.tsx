'use client'
import { useKeenSlider } from 'keen-slider/react'

import { useWindowSize } from '@/hooks/useWindowSize'

const CustomSwiperWrapper = ({ children }: { children: React.ReactNode }) => {
  const { width } = useWindowSize()

  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: width < 768 ? 1.4 : 4.5,
      spacing: 32
    }
  })

  return (
    <div ref={ref} className='keen-slider'>
      {children}
    </div>
  )
}

export default CustomSwiperWrapper
