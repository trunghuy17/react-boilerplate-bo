import React from 'react'

function Template1({ children }: React.PropsWithChildren) {
  return (
    <>
      <aside className='fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 
        w-[290px]
        -translate-x-full
        lg:translate-x-0'>
        this is aside
      </aside>
      <div className='flex-1 transition-all duration-300 ease-in-out lg:ml-[290px] '>
        <header className='sticky top-0 flex w-full bg-white border-gray-200 z-10 dark:border-gray-800 dark:bg-gray-900 lg:border-b'>this is header</header>
        <main className='p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6'>
          {children}
        </main>
      </div>
    </>
  )
}

export default Template1