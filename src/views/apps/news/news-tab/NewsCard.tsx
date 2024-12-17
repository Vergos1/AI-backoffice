import type { StaticImageData } from 'next/image'
import Image from 'next/image'

import { Box, Card, CardContent, Grid, Typography } from '@mui/material'

import groupLogo from '@assets/images/group-logo.png'

type Props = {
  title: string
  image: StaticImageData
  description: string
  date: string
}

const NewsCard = ({ title, image, description, date }: Props) => {
  return (
    <Grid>
      <Card>
        <CardContent>
          <Grid display={'flex'} gap={5}>
            <Image src={image} alt='Investment' width={200} />
            <Box className='max-h-[100%]' display='grid'>
              <Box>
                <Typography variant='h5' className='line-clamp-2'>
                  {title}
                </Typography>
                <Typography variant='subtitle2' mt={3} color='gray' className='line-clamp-6'>
                  {description}
                </Typography>
              </Box>
              <Box mt={8} display='flex' alignItems='flex-end' gap={2} flex={1}>
                <Image src={groupLogo} alt='Group logo' width={40} height={40} />
                <Box>
                  <Typography variant='h6'>S-Group</Typography>
                  <Typography variant='subtitle2'>{date}</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default NewsCard
