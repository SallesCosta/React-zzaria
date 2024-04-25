import { extendTheme } from '@chakra-ui/react'

// ca = changeAlpha
function ca (rgbaString: string, newAlpha: number): string {
  const rgbaArray = rgbaString.match(/\d+/g)

  if (rgbaArray && rgbaArray.length === 4) {
    const [r, g, b, _] = rgbaArray
    return `rgba(${r}, ${g}, ${b}, ${newAlpha})`
  } else {
    return 'black'
  }
}

const alphaHover = 0.7
const primaryLight = 'rgba(255, 136, 0, 1)'
const primaryDark = 'rgba(255, 136, 0, 1)'
const secondaryLight = 'rgba(255, 204, 0, 1)'
const secondaryDark = 'rgba(255, 204, 0, 1)'

const tokens = {
  colors: {
    light: {
      'btn-text1': '#333',
      'btn-text2': '#fff',
      'btn-text3': '#0969da',
      'btn-primary': primaryLight,
      'btn-primary-hover': ca(primaryLight, 0.7),
      'btn-secondary': secondaryLight,
      'btn-secondary-hover': ca(secondaryLight, 0.5),
      'bg-gray': 'rgba(0, 0, 0, 0.1)',
      'esc-shadow-a': 'rgba(17, 17, 26, 0.1) 0px 4px 16px',
      'esc-shadow-b': 'rgba(17, 17, 26, 0.05) 0px 8px 32px',
      'esc-shadow-c': 'rgba(17, 17, 26, 0.05) 0px 3px 5px',
      'esc-shadow-d': 'rgba(17, 17, 26, 0.1) 0px -4px 16px',
      'esc-shadow-e': 'rgba(17, 17, 26, 0.1) 0px -8px 32px',
      'esc-cardBackground': '#fff',
      'esc-bg': '#f5f5f5',
      'esc-border': '#ddd',
      'esc-text': '#333',
      'esc-textSecondary': '#777',
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
      'btn-hover-border': 'rgba(27, 31, 36,0.15)',
      'btn-primary-selected-bg': 'hsla (137,55%, 36%, 1)',
      'btn-primary-active-border': 'rgba(27,31,36,0.15)',
      'btn-shadow': '0 1px 0 rgba(27,31,36,0.04)',
      'btn-inset-shadow': 'inset 0 1px 0 rgba(255, 255, 255, 0.25)',
      'btn-primary-shadow': '0 1px rgba(27, 31, 36, 0.1)',
      'btn-primary-inset-shadow': 'inset 0 1px rgba(255,255,255, 0)',
    },
    dark: {
      'btn-text1': '#333',
      'btn-text2': '#j2j2j2',
      'btn-text3': '#l6l6l6',

      'btn-primary': primaryDark,
      'btn-primary-hover': ca(primaryDark, alphaHover),
      'btn-secondary': secondaryDark,
      'btn-secondary-hover': ca(secondaryDark, alphaHover),
      'bg-gray': 'rgba(0, 0, 0, 0.2)',
      'esc-shadow-a': 'rgba(240, 255, 244, 0.1) 0px 4px 16px',
      'esc-shadow-b': 'rgba(240, 255, 244, 0.05) 0px 8px 32px',
      'esc-shadow-c': 'rgba(240, 255, 244, 0.05) 0px 3px 5px',
      'esc-shadow-d': 'rgba(240, 255, 244, 0.05) 0px -4px 16px',
      'esc-shadow-e': 'rgba(240, 255, 244, 0.05) 0px -8px 32px',
      'esc-cardBackground': '#222',
      'esc-bg': '#333',
      'esc-border': '#444',
      'esc-text': '#fff',
      'esc-textSecondary': '#999',
      'esc-shadowBox2': 'rgba(0, 0, 0, 0.3)',
      'esc-buttonsSecondary': '#ffcc00',
      'bg-default-b': 'rgba(0, 0, 0, 0.15)',
      'fg-default': '#c9d1d9',
      'fg-muted': '#9b949e',
      'fg-accent': '#58a6ff',
      'bg-default': '#0c1117',
      'btn-bg': '#21262d',
      'btn-hover-bg': '#30363d',
      'btn-active-bg': 'hsla (212,12%, 18%, 1)',
      'btn-primary-active-border': '#6e7681',
      'btn-inset-shadow': '00 transparent',
      'btn-shadow': '00 transparent',
      'btn-primary-shadow': '00 transparent',
      'btn-primary-inset-shadow': '00 transparent',
      'btn-hover-border': 'rgba(27, 31, 36,0.15)',
    },
  },
}

const semanticTokens = {
  colors: {
    'btn-text1': {
      default: tokens.colors.light['btn-text1'],
      _dark: tokens.colors.dark['btn-text1'],
    },
    'esc-text': {
      default: tokens.colors.light['esc-text'],
      _dark: tokens.colors.dark['esc-text'],
    },
    'btn-primary': {
      default: tokens.colors.light['btn-primary'],
      _dark: tokens.colors.dark['btn-primary'],
    },
    'btn-primary-hover': {
      default: tokens.colors.light['btn-primary-hover'],
      _dark: tokens.colors.dark['btn-primary-hover'],
    },
    'bg-gray': {
      default: tokens.colors.light['bg-gray'],
      _dark: tokens.colors.dark['bg-gray'],
    },
    'btn-secondary': {
      default: tokens.colors.light['btn-secondary'],
      _dark: tokens.colors.dark['btn-secondary'],
    },
    'btn-secondary-hover': {
      default: tokens.colors.light['btn-secondary-hover'],
      _dark: tokens.colors.dark['btn-secondary-hover'],
    },
    // -------------------------------------------------------------
    'esc-bg': {
      default: tokens.colors.light['esc-bg'],
      _dark: tokens.colors.dark['esc-bg'],
    },
    'esc-cardBackground': {
      default: tokens.colors.light['bg-default-b'],
      _dark: tokens.colors.dark['bg-default-b'],
    },

    'esc-textSecondary': {
      default: tokens.colors.light['esc-textSecondary'],
      _dark: tokens.colors.dark['esc-textSecondary'],
    },

    'esc-shadowBox2': {
      default: tokens.colors.light['esc-shadowBox2'],
      _dark: tokens.colors.dark['esc-shadowBox2'],
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
    'btn-hover-border': {
      default: tokens.colors.light['btn-hover-border'],
      _dark: tokens.colors.dark['btn-hover-border'],
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
      color: 'esc-text',
    },
    h2: {
      color: 'esc-text',
    },
    h3: {
      color: 'esc-text',
    },
    h4: {
      color: 'esc-text',
    },
    h5: {
      color: 'esc-text',
    },
    h6: {
      color: 'esc-text',
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
      primary: {
        backgroundColor: 'btn-primary',
        shadow: 'btn-primary-shadow',
        color: 'esc-text',
        _hover: {
          backgroundColor: 'btn-primary-hover',
          borderColor: 'btn-primary-hover-border',
        },
        _active: {
          backgroundColor: 'btn-primary-selected-bg',
          borderColor: 'btn-primary-active-border',
        },
      },
      secondary: {
        backgroundColor: 'btn-secondary',
        shadow: 'btn-secondary-shadow',
        color: 'btn-text1',
        _hover: {
          backgroundColor: 'btn-secondary-hover',
          borderColor: 'btn-secondary-hover-border',
        },
        _active: {
          backgroundColor: 'btn-secondary-selected-bg',
          borderColor: 'btn-secondary-active-border',
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
