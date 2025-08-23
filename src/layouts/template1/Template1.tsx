import React from 'react'
import Header from '../../components/organisms/header/Header'
import Sidebar from '../../components/organisms/sidebar/Sidebar'
import { useSidebar } from '../../contexts/SidebarContext'
import clsx from 'clsx';

function Template1({ children }: React.PropsWithChildren) {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  return (
    <>
      <Sidebar />
      <div 
        className={clsx(
          'flex-1 transition-all duration-300 ease-in-out',
          isExpanded || isHovered ? 'lg:ml-[290px]' : 'lg:ml-[90px]',
          isMobileOpen && 'ml-0'
        )}
      >
        <Header />
        <main className='p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6'>
          {children}
        </main>
      </div>
    </>
  )
}

export default Template1