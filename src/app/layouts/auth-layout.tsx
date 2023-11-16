import { Box, Typography } from '@mui/material'
import { Outlet } from 'react-router-dom'
import salonPersonImage from '~/app/assets/images/simplistic-chair.png'

export const AuthLayout = () => {
  return (
    <Box
      sx={{
        width: 1,
        height: '100vh',
        bgcolor: 'primary.main',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          mx: 2,
          width: 1,
          maxWidth: 1000,
          height: 1,
          maxHeight: 500,
          bgcolor: 'white',
          boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px',
          p: 2,
          position: 'relative',
          display: 'flex',
          background:
            'linear-gradient(90deg, rgba(255,255,255,1) 50%, #fff7ed 50%)',
        }}
      >
        <Box height={1} width="50%">
          <Outlet />
        </Box>
        <Box
          sx={{
            height: 1,
            width: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: `url(${salonPersonImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
          }}
        >
          <Box
            sx={{
              width: '70%',
              height: '80%',
              background: 'rgba(255, 255, 255, 0.54)',
              borderRadius: '16px',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(7.1px)',
              border: '1px solid rgba(255, 255, 255, 0.29)',
              p: 3,
            }}
          >
            <Typography variant="h1" color="text.primary" fontSize={44}>
              Some <br /> <br /> Inspiring <br /> <br /> Text
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
