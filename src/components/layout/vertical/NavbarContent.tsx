'use client'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import UserDropdown from '@components/layout/shared/UserDropdown'
import NavToggle from './NavToggle'

// Util Imports
import { notifications } from '@/constants/mock.data'
import { verticalLayoutClasses } from '@layouts/utils/layoutClasses'
import LanguageDropdown from '../shared/LanguageDropdown'
import NotificationDropdown from '../shared/NotificationsDropdown'
import UserBalance from '../shared/UserBalance'

const NavbarContent = () => {
  return (
    <div className={classnames(verticalLayoutClasses.navbarContent, 'flex items-center justify-between gap-4 is-full')}>
      <div className='flex items-center gap-4'>
        <NavToggle />
        <LanguageDropdown />
      </div>
      <div className='flex items-center'>
        <NotificationDropdown notifications={notifications} />
        <UserDropdown />
        <UserBalance />
      </div>
    </div>
  )
}

export default NavbarContent
