import { createTheme, Zoom } from '@mui/material'

const notoSansGeorgian = 'Noto Sans Georgian'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#FFEDCB',
      light: '#fff7ed',
    },
    success: {
      main: '#00AD97',
      light: '#ABDDD0',
    },
    text: {
      primary: '#2A272A',
      secondary: '#677381',
      disabled: '#B9B9B9',
    },
    divider: '#95B0B7',
    error: {
      main: '#C0564A',
      light: '#FD8B7B',
    },
    info: {
      main: '#64E2FF',
      light: '#E5FEFF',
    },
    warning: {
      main: '#FF8C5B',
      light: '#FFCAA4',
    },
    background: {
      default: '#718B92',
    },
  },

  components: {},
})

const { pxToRem } = theme.typography

theme.typography = {
  ...theme.typography,

  h1: {
    fontFamily: notoSansGeorgian,
    fontSize: pxToRem(32),
    lineHeight: pxToRem(51),
    letterSpacing: '0.1px',
    fontWeight: 700,
  },

  h2: {
    fontFamily: notoSansGeorgian,
    fontSize: pxToRem(28),
    lineHeight: pxToRem(46),
    letterSpacing: '0.1px',
    fontWeight: 700,
  },

  h3: {
    fontFamily: notoSansGeorgian,
    fontSize: pxToRem(25),
    lineHeight: pxToRem(41),
    letterSpacing: '0.1px',
    fontWeight: 600,
  },

  h4: {
    fontFamily: notoSansGeorgian,
    fontSize: pxToRem(22),
    lineHeight: pxToRem(36),
    letterSpacing: '0.1px',
    fontWeight: 600,
  },

  h5: {
    fontFamily: notoSansGeorgian,
    fontSize: pxToRem(20),
    lineHeight: pxToRem(32),
    letterSpacing: '0.1px',
    fontWeight: 500,
  },

  body1: {
    fontFamily: notoSansGeorgian,
    fontSize: pxToRem(18),
    lineHeight: pxToRem(28),
    letterSpacing: '0.1px',
    fontWeight: 400,
  },

  body2: {
    fontFamily: notoSansGeorgian,
    fontSize: pxToRem(16),
    lineHeight: pxToRem(24),
    letterSpacing: '0.1px',
    fontWeight: 400,
  },

  caption: {
    fontFamily: notoSansGeorgian,
    fontSize: pxToRem(14),
    lineHeight: pxToRem(20),
    letterSpacing: '0.1px',
    fontWeight: 400,
  },

  button: {
    fontFamily: notoSansGeorgian,
    fontSize: pxToRem(12),
    lineHeight: pxToRem(16),
    letterSpacing: '0.1px',
    fontWeight: 400,
  },
}

theme.components = {
  ...theme.components,

  MuiIconButton: {
    defaultProps: {
      disableRipple: true,
    },

    styleOverrides: {
      root: {
        padding: 0,

        '&.Mui-disabled': {
          color: theme.palette.text.disabled,
        },
      },
    },
  },

  MuiTooltip: {
    defaultProps: {
      TransitionComponent: Zoom,
    },
    styleOverrides: {
      tooltip: {
        lineHeight: '24px',
        padding: theme.spacing(0, 1),
        margin: 0,
        maxWidth: 'fit-content',
      },
    },
  },

  MuiToolbar: {
    defaultProps: {
      disableGutters: true,
    },
    styleOverrides: {
      root: {
        height: '56px',
        flex: 'none',
        background: theme.palette.common.white,
        display: 'flex',
        alignItems: 'center',
      },
    },
  },

  MuiDivider: {
    styleOverrides: {
      root: { borderBottomWidth: '2px' },
    },
  },

  MuiInputBase: {
    styleOverrides: {
      root: {
        borderColor: theme.palette.primary.light,
        // backgroundColor: theme.palette.divider,
        flex: 'auto',
        height: theme.spacing(6),
        borderRadius: '4px',
        color: theme.palette.text.primary,
        // eslint-disable-next-line unicorn/consistent-destructuring
        ...theme.typography.body1,

        '&.Mui-focused': {
          borderColor: theme.palette.background.default,
        },

        '&.Mui-error': {
          borderColor: theme.palette.error.main,
          backgroundColor: theme.palette.error.light,
          boxShadow:
            'inset 0px 1px 4px rgba(0, 14, 62, 0.04), 0px 1px 2px rgba(77, 86, 120, 0.1)',
        },
      },
      adornedStart: {
        paddingLeft: theme.spacing(1.5),
      },
      adornedEnd: {
        paddingRight: theme.spacing(2),
      },
      inputAdornedStart: {
        paddingLeft: theme.spacing(1),
      },
      input: {
        boxSizing: 'border-box',
        height: '100%',
        padding: theme.spacing(1.5, 1.5, 1.5, 2),

        '&::placeholder': {
          color: theme.palette.text.secondary,
          opacity: 1,
        },
      },
    },
  },

  MuiInputLabel: {
    styleOverrides: {
      root: {
        color: theme.palette.text.primary,
        fontSize: 14,
      },
    },
  },

  MuiButton: {
    defaultProps: {
      disableElevation: true,
      disableRipple: true,
    },
    styleOverrides: {
      root: {
        minWidth: 'auto',
        padding: theme.spacing(1, 2),
        height: theme.spacing(5),
        borderRadius: '4px',
        fontWeight: 600,
      },
    },
    variants: [
      {
        props: { variant: 'text' },
        style: {
          color: theme.palette.text.primary,

          '&:hover': {
            background: theme.palette.divider,
          },

          '&.Mui-disabled': {
            color: theme.palette.text.disabled,
          },
        },
      },

      {
        props: { variant: 'contained' },
        style: {
          backgroundColor: theme.palette.divider,
          color: theme.palette.common.white,
          border: theme.palette.primary.light,
          boxShadow:
            '0px 2px 1px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.25)',

          '&:focus': {
            border: theme.palette.info.main,
            boxShadow:
              '0px 2px 1px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.25)',
          },

          '&:hover': {
            background: theme.palette.background.default,
          },

          '&.Mui-disabled': {
            backgroundColor: theme.palette.background,
            color: theme.palette.text.disabled,
            boxShadow:
              '0px 2px 1px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.25)',
          },
        },
      },
      {
        props: { variant: 'outlined' },
        style: {
          background: theme.palette.common.white,
          color: theme.palette.text.primary,
          borderColor: theme.palette.divider,

          '&:hover': {
            background: theme.palette.common.white,
            borderColor: theme.palette.background.default,
            boxShadow:
              'inset 0px 1px 4px rgba(0, 14, 62, 0.04), 0px 1px 2px rgba(77, 86, 120, 0.1)',
          },

          '&.Mui-disabled': {
            backgroundColor: theme.palette.background,
          },
        },
      },
    ],
  },
}
