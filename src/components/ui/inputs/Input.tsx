'use client'

import { forwardRef, useState } from 'react'
import { twJoin, twMerge } from 'tailwind-merge'

import { VisibilityIcon } from '../icons/VisibilityIcon'
import { VisibilityOffIcon } from '../icons/VisibilityOffIcon'

interface InputProps {
  name: string
  type?: React.InputHTMLAttributes<HTMLInputElement>['type']
  wFull?: boolean
  placeholder?: string
  className?: string
  wrpClassName?: string
  errors?: string[] | string

  [key: string]: any
}

export const Input: React.FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(function Input(
  { name, type, wFull, placeholder, className, wrpClassName, errors, ...props }: InputProps,
  ref,
) {
  const [showPassword, setShowPassword] = useState(false)
  const showError = errors?.length !== 0

  const getErrors = () => {
    if (showError) {
      if (typeof errors === 'string') return <p className="text-red-500 text-sm">{errors}</p>
      return errors?.map((error) => (
        <p key={error} className="text-red-500 text-sm">
          {error}
        </p>
      ))
    }
  }

  return (
    <div className={twJoin(wFull && 'w-full', 'relative', wrpClassName)}>
      <div className={'relative'}>
        <input
          ref={ref}
          className={twMerge(
            'w-full h-full py-[0.94rem] pl-4 pr-9 bg-gray-400 outline-none text-primary placeholder:text-gray-300',
            className,
          )}
          name={name}
          type={(showPassword ? 'text' : type) || 'text'}
          placeholder={placeholder}
          {...props}
        />
        {type === 'password' && (
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-1/2 right-2 transform -translate-y-1/2"
          >
            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon className="fill-gray-300" />}
          </button>
        )}
      </div>
      {showError && <div className="absolute -bottom-4.5 left-0">{getErrors()}</div>}
    </div>
  )
})
