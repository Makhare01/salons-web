import { Box, Divider, Stack, TextField, Typography } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { getInputError } from '~/lib/form'
import { Button } from '~/components/button'

const loginSchema = z.object({
  email: z.string(),
  password: z.string().min(8),
})

type FormValues = z.infer<typeof loginSchema>

export const SignInPage = () => {
  const { control, handleSubmit, watch } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
  })

  const [email, password] = watch(['email', 'password'])

  return (
    <Box
      mr={2}
      height={1}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box
        width={1}
        maxWidth="80%"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Typography variant="h2" mt={5}>
          Sign In
        </Typography>

        <Stack
          onSubmit={handleSubmit((values) => {
            // eslint-disable-next-line no-console
            console.log({ values })
          })}
          component="form"
          mt={4}
          spacing={3}
          width={1}
        >
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                type="email"
                label="Email"
                variant="outlined"
                {...getInputError(fieldState.error)}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                type="password"
                label="Password"
                variant="outlined"
                {...getInputError(fieldState.error)}
              />
            )}
          />

          <Button
            variant="outlined"
            type="submit"
            disabled={email === '' || password === ''}
          >
            Log In
          </Button>
        </Stack>

        <Divider sx={{ width: 1, my: 4 }}>
          <Typography variant="caption" fontWeight={500} color="text.secondary">
            Don&apos;t have an account?
          </Typography>
        </Divider>

        <Button fullWidth variant="contained" to="/sign-up">
          Sign Up
        </Button>
      </Box>
    </Box>
  )
}
