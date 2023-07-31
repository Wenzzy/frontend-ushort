'use client'

import { Navigation } from '#comp/Navigation'
import { useEffect, useState } from 'react'

interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [isNavOpened, setIsNavOpened] = useState(false)

  useEffect(() => {
    const open = localStorage.getItem('isNavOpened') === 'true'
    setIsNavOpened(open)
  }, [])

  const setNavOpen = (state: boolean) => {
    setIsNavOpened(state)
    localStorage.setItem('isNavOpened', state.toString())
  }

  return (
    <>
      <div className="flex w-full">
        <Navigation isOpened={isNavOpened} setIsOpened={setNavOpen} />
        <div
          className="flex flex-grow px-6"
          style={{
            transition: 'margin-left 0.2s ease-in-out',
            marginLeft: isNavOpened ? '0' : '-100px',
          }}
        >
          {children}
        </div>
      </div>
    </>
  )
}
