import { BrowserRouter } from 'react-router-dom'
import { AuthSwitch } from './app/routes'
import { ThemeProvider } from '@mui/material'
import { theme } from './app/theme'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
      }}
    >
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <AuthSwitch />
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  )
}
