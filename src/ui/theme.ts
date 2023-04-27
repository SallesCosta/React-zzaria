import { extendTheme } from '@chakra-ui/react'

const tokens = {
  colors: {
    light: {
      'bg-default': 'white',
      'fg-default': '#24292f',
      'fg-muted': '#57606a',
      'fg-accent': '#0969da',
      'btn-bg': '#f6f8fa',
      'btn-hover-bg': '#f3f4f6',
      'btn-active-bg': 'hsla (220,14%, 93%, 1)',
      'btn-border': 'rgba(27, 31, 36, 0.15)',
      'btn-hover-border': 'rgba(27, 31, 36,0.15)',
      'btn-active-border': 'rgba(27, 31, 36, 0.15)',
      'btn-primary-bg': '#2da44e',
      'btn-primary-hover-bg': '#2c974b',
      'btn-primary-selected-bg': 'hsla (137,55%, 36%, 1)',
      'btn-primary-border': 'rgba(27, 31, 36, 0.15)',
      'btn-primary-hover-border': 'rgba(27,31,36,0.15)',
      'btn-primary-active-border': 'rgba(27,31,36,0.15)',
      'btn-shadow': '0 1px 0 rgba(27,31,36,0.04)',
      'btn-inset-shadow': 'inset 0 1px 0 rgba(255, 255, 255, 0.25)',
      'btn-primary-shadow': '0 1px rgba(27, 31, 36, 0.1)',
      'btn-primary-inset-shadow': 'inset 0 1px rgba(255,255,255, 0)',
    },
    dark: {
      'bg-default': '#0c1117',
      'fg-default': '#c9d1d9',
      'fg-muted': '#9b949e',
      'fg-accent': '#58a6ff',
      'btn-bg': '#21262d',
      'btn-hover-bg': '#30363d',
      'btn-active-bg': 'hsla (212,12%, 18%, 1)',
      'btn-border': 'rgba(240,246, 252, 0.1)',
      'btn-hover-border': '#8b949e',
      'btn-active-border': '#6e7681',
      'btn-primary-bg': '#238636',
      'btn-primary-hover-bg': '#2ea043',
      'btn-primary-selected-bg': '#238636',
      'btn-primary-border': 'rgba(240, 246,252,0.1)',
      'btn-primary-hover-border': 'rgba(240,246,252,0.1)',
      'btn-primary-active-border': '#6e7681',
      'btn-shadow': '00 transparent',
      'btn-inset-shadow': '00 transparent',
      'btn-primary-shadow': '00 transparent',
      'btn-primary-inset-shadow': '00 transparent',
    },
  },
}

const semanticTokens = {
  colors: {
    'bg-default': {
      default: tokens.colors.light['bg-default'],
      _dark: tokens.colors.dark['bg-default'],
    },
    'fg-default': {
      default: tokens.colors.light['fg-default'],
      _dark: tokens.colors.dark['fg-default'],
    },
    'fg-muted': {
      default: tokens.colors.light['fg-muted'],
      _dark: tokens.colors.dark['fg-muted'],
    },
    'fg-accent': {
      default: tokens.colors.light['fg-accent'],
      _dark: tokens.colors.dark['fg-default'],
    },
    'btn-bg': {
      default: tokens.colors.light['btn-bg'],
      _dark: tokens.colors.dark['bg-default'],
    },
    'btn-hover-bg': {
      default: tokens.colors.light['btn-hover-bg'],
      _dark: tokens.colors.dark['btn-hover-bg'],
    },
    'btn-active-bg': {
      default: tokens.colors.light['btn-active-bg'],
      _dark: tokens.colors.dark['btn-active-bg'],
    },
    'btn-border': {
      default: tokens.colors.light['btn-border'],
      _dark: tokens.colors.dark['btn-border'],
    },
    'btn-hover-border': {
      default: tokens.colors.light['btn-hover-border'],
      _dark: tokens.colors.dark['btn-hover-border'],
    },
    'btn-active-border': {
      default: tokens.colors.light['btn-active-border'],
      _dark: tokens.colors.dark['btn-active-border'],
    },
    'btn-primary-bg': {
      default: tokens.colors.light['btn-primary-bg'],
      _dark: tokens.colors.dark['btn-primary-bg'],
    },
    'btn-primary-hover-bg': {
      default: tokens.colors.light['btn-primary-bg'],
      _dark: tokens.colors.dark['btn-primary-bg'],
    },
    'btn-primary-selected-bg': {
      default: tokens.colors.light['btn-primary-bg'],
      _dark: tokens.colors.dark['btn-primary-bg'],
    },
    'btn-primary-border': {
      default: tokens.colors.light['btn-primary-bg'],
      _dark: tokens.colors.dark['btn-primary-bg'],
    },
    'btn-primary-hover-border': {
      default: tokens.colors.light['btn-primary-bg'],
      _dark: tokens.colors.dark['btn-primary-bg'],
    },
    'btn-primary-active-border': {
      default: tokens.colors.light['btn-primary-bg'],
      _dark: tokens.colors.dark['btn-primary-bg'],
    },
  },
  shadows: {
    'btn-shadow': {
      default: `${tokens.colors.light['btn-shadow']}, ${tokens.colors.light['btn-inset-shadow']}`,
      _dark: `${tokens.colors.dark['btn-shadow']}, ${tokens.colors.dark['btn-inset-shadow']}`,
    },
    'btn-primary-shadow': {
      default: `${tokens.colors.light['btn-primary-shadow']}, ${tokens.colors.light['btn-primary-inset-shadow']}`,
      _dark: `${tokens.colors.dark['btn-primary-shadow']}, ${tokens.colors.dark['btn-primary-inset-shadow']}`,
    },
  },
}

const styles = {
  global: {
    body: {
      background: 'bg-default',
      display: 'flex',
      flexDirection: 'column',
    },
  },
}

const components = {
  Button: {
    baseStyle: {
      borderRadius: 'none',
      color: 'fg-default',
      _focus: {
        ring: '0px',
      },
    },
    variants: {
      solid: {
        backgroundColor: 'btn-bg',
        borderColor: 'btn-border',
        borderWidth: '1px',
        shadow: 'btn-shadow',
        borderStyle: 'solid',
        _hover: {
          backgroundColor: 'btn-hover-bg',
          borderColor: 'btn-hover-border',
        },
        _active: {
          backgroundColor: 'btn-active-bg',
          borderColor: 'btn-active-border',
        },
      },
      primary: {
        backgroundColor: 'btn-primary-bg',
        borderColor: 'btn-primary-border',
        borderWidth: '1px',
        borderStyle: 'solid',
        shadow: 'btn-primary-shadow',
        color: 'white',
        _hover: {
          backgroundColor: 'btn-primary-hover-bg',
          borderColor: 'btn-primary-hover-border',
        },
        _active: {
          backgroundColor: 'btn-primary-selected-bg',
          borderColor: 'btn-primary-active-border',
        },
      },

      link: {
        color: 'fg-muted',
        fontWeight: 500,
        _hover: {
          color: 'fg-accent',
        },
        textDecoration: 'none',
        _active: {
          color: 'fg-accent',
          textDecoration: 'none',
        },
      },
    },
    sizes: {
      md: {
        h: 8,
        p: '5px 16px',
        fontSize: '14px',
      },
    },
    defaultProps: {
      size: 'md',
    },
  },
}

const breakpoints = {
  sm: '319px', // 480px
  sm480: '479px', // 480px
  md: '48em', // 768px
  lg: '60em', // 992px
  xl: '80em', // 1280px
  '2xl': '96em', // 1536px
}

export const theme = extendTheme({
  styles,
  semanticTokens,
  components,
  breakpoints,
})
