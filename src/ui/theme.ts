import { extendTheme } from '@chakra-ui/react'

const tokens = {
  colors: {
    light: {
      'esc-bg': '#f5f5f5',
      'esc-border': '#ddd',
      'esc-cardBackground': '#fff',
      'esc-textPrimary': '#333',
      'esc-textSecondary': '#777',
      'esc-textHeading': '#333',
      'esc-textBold': '#333',
      'esc-shadowBox1': 'rgba(0, 0, 0, 0.1)',
      'esc-shadowBox2': 'rgba(0, 0, 0, 0.2)',
      'esc-buttonsPrimary': '#ff8800',
      'esc-buttonsSecondary': '#ffcc00',
      'bg-default': '#f8f8f9',
      'bg-default-b': '#ffffff',
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
      'esc-shadow-a': 'rgba(17, 17, 26, 0.1) 0px 4px 16px',
      'esc-shadow-b': 'rgba(17, 17, 26, 0.05) 0px 8px 32px',
      'esc-shadow-c': 'rgba(17, 17, 26, 0.05) 0px 3px 5px',

      'esc-shadow-d': 'rgba(17, 17, 26, 0.1) 0px -4px 16px',
      'esc-shadow-e': 'rgba(17, 17, 26, 0.1) 0px -8px 32px',
    },
    dark: {
      'esc-bg': '#333',
      'esc-border': '#444',
      'esc-cardBackground': '#222',
      'esc-textPrimary': '#fff',
      'esc-textSecondary': '#999',
      'esc-textHeading': '#fff',
      'esc-textBold': '#fff',
      'esc-shadowBox1': 'rgba(0, 0, 0, 0.2)',
      'esc-shadowBox2': 'rgba(0, 0, 0, 0.3)',
      'esc-buttonsPrimary': '#ff8800',
      'esc-buttonsSecondary': '#ffcc00',
      'bg-default': '#0c1117',
      'bg-default-b': 'rgba(0, 0, 0, 0.15)',
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
      'esc-shadow-a': 'rgba(240, 255, 244, 0.1) 0px 4px 16px',
      'esc-shadow-b': 'rgba(240, 255, 244, 0.05) 0px 8px 32px',
      'esc-shadow-c': 'rgba(240, 255, 244, 0.05) 0px 3px 5px',

      'esc-shadow-d': 'rgba(240, 255, 244, 0.05) 0px -4px 16px',
      'esc-shadow-e': 'rgba(240, 255, 244, 0.05) 0px -8px 32px',
    },
  },
}

const semanticTokens = {
  colors: {
    'esc-bg': {
      default: tokens.colors.light['esc-bg'],
      _dark: tokens.colors.dark['esc-bg'],
    },
    'esc-cardBackground': {
      default: tokens.colors.light['bg-default-b'],
      _dark: tokens.colors.dark['bg-default-b'],
    },
    'esc-textPrimary': {
      default: tokens.colors.light['esc-textPrimary'],
      _dark: tokens.colors.dark['esc-textPrimary'],
    },
    'esc-textSecondary': {
      default: tokens.colors.light['esc-textSecondary'],
      _dark: tokens.colors.dark['esc-textSecondary'],
    },
    'esc-textHeading': {
      default: tokens.colors.light['esc-textHeading'],
      _dark: tokens.colors.dark['esc-textHeading'],
    },
    'esc-textBold': {
      default: tokens.colors.light['esc-textBold'],
      _dark: tokens.colors.dark['esc-textBold'],
    },
    'esc-shadowBox1': {
      default: tokens.colors.light['esc-shadowBox1'],
      _dark: tokens.colors.dark['esc-cardBackground'],
    },
    'esc-shadowBox2': {
      default: tokens.colors.light['esc-shadowBox2'],
      _dark: tokens.colors.dark['esc-shadowBox2'],
    },

    'esc-buttonsPrimary': {
      default: tokens.colors.light['esc-buttonsPrimary'],
      _dark: tokens.colors.dark['esc-buttonsPrimary'],
    },
    'esc-buttonsSecondary': {
      default: tokens.colors.light['esc-buttonsSecondary'],
      _dark: tokens.colors.dark['esc-buttonsSecondary'],
    },

    'bg-default': {
      default: tokens.colors.light['bg-default'],
      _dark: tokens.colors.dark['bg-default'],
    },
    'bg-default-b': {
      default: tokens.colors.light['bg-default-b'],
      _dark: tokens.colors.dark['bg-default-b'],
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
    base: {
      default: `${tokens.colors.light['esc-shadow-b']},${tokens.colors.light['esc-shadow-c']}`,
      _dark: `${tokens.colors.dark['esc-shadow-b']},${tokens.colors.dark['esc-shadow-c']}`,
    },

    'esc-shadow-lg-bottom': {
      default: `${tokens.colors.light['esc-shadow-a']},${tokens.colors.light['esc-shadow-b']}`,
      _dark: `${tokens.colors.dark['esc-shadow-a']},${tokens.colors.dark['esc-shadow-b']}`,
    },
    'esc-shadow-lg-top': {
      default: `${tokens.colors.light['esc-shadow-d']},${tokens.colors.light['esc-shadow-e']}`,
      _dark: `${tokens.colors.dark['esc-shadow-d']},${tokens.colors.dark['esc-shadow-e']}`,
    },
  },
}

const styles = {
  global: {
    body: {
      background: 'esc-bg',
      display: 'flex',
      flexDirection: 'column',
    },
    input: {
      borderRadius: 'none',
    },
    h1: {
      color: 'esc-textHeading',
    },
    h2: {
      color: 'esc-textHeading',
    },
    h3: {
      color: 'esc-textHeading',
    },
    h4: {
      color: 'esc-textHeading',
    },
    h5: {
      color: 'esc-textHeading',
    },
    h6: {
      color: 'esc-textHeading',
    },
  },
}

const components = {
  Input: {
    baseStyle: {
      borderRadius: 'none',

      focusBorderColor: 'btn-primary-bg',
      color: 'fg-default',
      _focus: {
        ring: '0px',
      },
    },
  },
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
        backgroundColor: 'esc-buttonsSecondary',
        borderColor: 'esc-buttonsSecondary',
        color: 'esc-textSecondary',
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
        // backgroundColor: 'btn-primary-bg',
        // borderColor: 'btn-primary-border',
        backgroundColor: 'esc-buttonsPrimary',
        borderColor: 'esc-buttonsPrimary',
        borderWidth: '1px',
        borderStyle: 'solid',
        shadow: 'btn-primary-shadow',
        color: 'esc-textPrimary',
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
        p: '5px 12px',
        fontSize: '16px',
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

const config = {
  initialCorlorMode: 'light',
  useSystemColorMode: true,
}

export const theme = extendTheme({
  config,
  styles,
  semanticTokens,
  components,
  breakpoints,
})
