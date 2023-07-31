import { Input } from '#ui/inputs/Input'
import { Controller, useFormContext } from 'react-hook-form'

interface CInputProps {
  name: string
  type?: React.InputHTMLAttributes<HTMLInputElement>['type']
  placeholder?: string
  defaultValue?: string
  wFull?: boolean

  [key: string]: any
}

export function CInput({ name, placeholder, defaultValue, wFull, ...props }: CInputProps) {
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue || ''}
      render={({ field, fieldState }) => (
        <Input
          {...field}
          placeholder={placeholder}
          wFull={wFull}
          errors={fieldState.error?.message}
          {...props}
        />
      )}
    />
  )
}
