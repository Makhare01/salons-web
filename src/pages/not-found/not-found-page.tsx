import { Box, Typography } from '@mui/material'

export const NotFoundPage = () => {
  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box width={300} height={300} border={1} borderRadius={3}>
        <Typography textAlign="center" variant="h1">
          404
        </Typography>
        <Typography textAlign="center" variant="body1" mt={4}>
          Page Not oFound
        </Typography>
      </Box>
    </Box>
  )
}
