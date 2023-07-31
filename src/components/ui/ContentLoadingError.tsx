'use client'

export function ContentLoadingError() {
  return (
    <div className="flex gap-2 flex-col items-center justify-center w-full h-full">
      <div className="flex items-center justify-center w-[80%] h-[180px] bg-red-600">
        Something went wrong while loading the content.
      </div>
    </div>
  )
}
