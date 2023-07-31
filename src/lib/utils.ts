import { AxiosError } from 'axios'
import { UseFormSetError } from 'react-hook-form'

export const handleErrors = (
  err: any,
  setErrorsFn: UseFormSetError<any>,
  serverSide?: boolean,
): boolean => {
  let validationErrors = null
  try {
    if (serverSide) validationErrors = JSON.parse(err)['validation-errors']
    else if (err instanceof AxiosError) {
      validationErrors = err?.response?.data['validation-errors']
    } else err['validation-errors']
  } catch (error) {
    return false
  }
  if (!validationErrors) return false

  Object.entries(validationErrors).forEach(([fieldName, validationError]) => {
    setErrorsFn(fieldName, {
      type: 'manual',
      message: validationError as string,
    })
  })
  return true
}

export const checkTokenExpired = (token: string) => {
  const expiry = JSON.parse(atob(token.split('.')[1])).exp
  return Math.floor(new Date().getTime() / 1000) >= expiry
}
