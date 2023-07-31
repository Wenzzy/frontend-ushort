'use client'
import { useEffect, useState } from 'react'

export function ContentLoader() {
  const [text, setText] = useState('o')
  useEffect(() => {
    const interval = setInterval(() => {
      setText((prev) => {
        if (prev.length < 5) return prev + 'o'
        return 'o'
      })
    }, 450)
    return () => clearInterval(interval)
  }, [])
  return (
    <div className="flex gap-2 flex-col items-center justify-center w-full h-full">
      <div className="flex items-center justify-center w-[180px] h-[180px] bg-accent bg-opacity-50 animate-pulse rounded-full">
        L{text}ading...
      </div>
    </div>
  )
}
