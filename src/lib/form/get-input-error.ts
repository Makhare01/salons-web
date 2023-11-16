import { FieldError } from 'react-hook-form'

export const getInputError = (error?: FieldError) => {
  return error
    ? {
        error: true,
        ...(error.message && {
          helperText: error.message,
        }),
      }
    : {}
}
