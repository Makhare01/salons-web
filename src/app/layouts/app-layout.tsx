import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

export const AppLayout = () => {
  return (
    <Box>
      App layout
      <Outlet />
    </Box>
  )
}
