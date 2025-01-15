'use client' // Indicates to next.js that this component is client side.
import { useEffect, useState } from 'react'

import { Box, CircularProgress } from '@mui/material'

export default function FullScreenLoaderLayout({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setShow(false)
    }, 1000)
  }, [])

  if (!show) return children

  return (
    <Box display='flex' justifyContent='center' alignItems='center' height='100vh' width='100%'>
      <CircularProgress color='primary' />
    </Box>
  )
}
