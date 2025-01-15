import type { NotificationsType } from '@/components/layout/shared/NotificationsDropdown'
import type { Timeline } from '@/types/index.types'
import newsCardImage from '@assets/images/news-card-image.png'

export const newsCardList = [
  {
    title: 'Launch of the mobile application of the international mobile communication provider S-eSIM',
    image: newsCardImage,
    date: '2014-03-13',
    description: `For additional convenience during the purchase of a tariff plan, a new section has been added to the
                  S-Group personal cabinet. Here you can choose a country, tariff, and pay for it. The tariff can be
                  activated in the S-eSIM mobile application.  Please note: Tariff plans with the option to pay
                  with SSGT tokens will be available after listing and the first stage of token unlocking. In the
                  instructions below we share the step-by-step guide on how to download the mobile app, register, and
                  purchase a tariff in the S-Group personal cabinet. Stay in touch anywhere in the world with
                  S-eSIM! with SSGT tokens will be available after listing and the first stage of token unlocking. In the
                  instructions below we share the step-by-step guide on how to download the mobile app, register, and
                  purchase a tariff in the S-Group personal cabinet. Stay in touch anywhere in the world with
                  S-eSIM! with SSGT tokens will be available after listing and the first stage of token unlocking. In the
                  instructions below we share the step-by-step guide on how to download the mobile app, register, and
                  purchase a tariff in the S-Group personal cabinet. Stay in touch anywhere in the world with
                  S-eSIM!`
  },
  {
    title: 'Launch mobile communication provider S-eSIM',
    image: newsCardImage,
    date: '2023-10-13',
    description: `In the instructions below we share the step-by-step guide on how to download the mobile app, register, and
                  purchase a tariff in the S-Group personal cabinet. Stay in touch anywhere in the world with
                  S-eSIM!`
  },
  {
    title: 'Communication provider S-eSIM',
    image: newsCardImage,
    date: '2024-03-13',
    description: `For additional convenience during the purchase of a tariff plan, a new section has been added to the
                  S-Group personal cabinet. Here you can choose a country, tariff, and pay for it. The tariff can be
                  activated in the S-eSIM mobile application.  Please note: Tariff plans with the option to pay`
  },
  {
    title: 'Application of the international mobile communication provider S-eSIM',
    image: newsCardImage,
    date: '2022-03-13',
    description: `For additional convenience during the purchase of a tariff plan, a new section has been added to the
                  S-Group personal cabinet. Here you can choose a country, tariff, and pay for it. The tariff can be
                  activated in the S-eSIM mobile application.  Please note: Tariff plans with the option to pay
                  with SSGT tokens will be available after listing and the first stage of token unlocking. In the
                  instructions below we share the step-by-step guide on how to download the mobile app, register, and   
                  purchase a tariff in the S-Group personal cabinet. Stay in touch anywhere in the world with
                  S-eSIM!`
  }
]

export const notifications: NotificationsType[] = [
  {
    title: 'System',
    avatarColor: 'secondary',
    subtitle: 'Authorize in the S-Group personal cabinet',
    time: '12h ago',
    read: false
  },
  {
    title: 'System',
    avatarColor: 'secondary',
    subtitle: 'Authorize in the S-Group personal cabinet',
    time: '12h ago',
    read: false
  },
  {
    title: 'System',
    avatarColor: 'secondary',
    subtitle: 'Newsletter subscription',
    time: '12h ago',
    read: false
  },
  {
    avatarIcon: 'tabler-chart-bar',
    title: 'Monthly report generated',
    subtitle: 'July month financial report is generated',
    avatarColor: 'info',
    time: 'Apr 24, 10:30 AM',
    read: true
  },
  {
    avatarText: 'MG',
    title: 'Application has been approved 🚀',
    subtitle: 'Your Meta Gadgets project application has been approved.',
    avatarColor: 'success',
    time: 'Feb 17, 12:17 PM',
    read: true
  }
]

export const estateTimeline: Timeline[] = [
  {
    id: 1,
    title: 'Creating a deposit',
    description: 'AI-Group partners create new destination investments by joining a real estate investment pool.',
    color: 'primary'
  },
  {
    id: 2,
    title: 'Income receipt',
    description:
      'Accrual of income on created investments according to the results of trading days in the investment direction of AI-Forex.',
    color: 'primary'
  },
  {
    id: 3,
    title: 'Closing of the pool',
    description:
      'By the fact of filling in of investment pool, possibility of creation of new investments and charge of income will be suspended.',
    color: 'primary'
  },
  {
    id: 4,
    title: 'Investments in real estate',
    description:
      'Investments created by the partners will be directed to the purchase of objects in the locations popular among investors.',
    color: 'primary'
  }
]
