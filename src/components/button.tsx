import { Button as MuiButton, ButtonProps } from '@mui/material'
import { Link } from 'react-router-dom'

type Props = {
  to?: string
}

export const Button = ({ to, ...props }: Props & ButtonProps) => {
  return (
    <MuiButton {...props}>
      {to ? (
        <Link
          style={{
            width: '100%',
            height: '100%',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'inherit',
          }}
          to={to}
        >
          {props.children}
        </Link>
      ) : (
        props.children
      )}
    </MuiButton>
  )
}
