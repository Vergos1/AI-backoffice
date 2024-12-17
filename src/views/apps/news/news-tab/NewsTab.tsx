import { Grid } from '@mui/material'

import { newsCardList } from '@/constants/mock.data'
import NewsCard from './NewsCard'

const NewsTab = () => {
  return (
    <Grid container gap={2}>
      {newsCardList.map(({ title, image, date, description }) => (
        <NewsCard key={title} title={title} image={image} date={date} description={description} />
      ))}
    </Grid>
  )
}

export default NewsTab
