export const colors = {
  primary: {
    DEFAULT: '#2EC4B6',
    light: '#E0F5F1',
    dark: '#1A8A7D',
    darker: '#1B3C40',
  },
  accent: {
    DEFAULT: '#E87461',
    light: '#FFF0ED',
    dark: '#C95A48',
  },
  background: {
    primary: '#F7FAF9',
    secondary: '#FFFFFF',
    tertiary: '#F0F5F3',
  },
  text: {
    primary: '#1A1A2E',
    secondary: '#4A5568',
    tertiary: '#8896A6',
    onDark: '#FFFFFF',
  },
  border: {
    DEFAULT: '#E2E8F0',
    light: '#EDF2F7',
  },
  semantic: {
    success: '#2EC4B6',
    warning: '#F6AD55',
    error: '#E53E3E',
  },
} as const;

export const typography = {
  heading: 'var(--font-heading)',
  body: 'var(--font-body)',
} as const;

export const spacing = {
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
  16: '64px',
  20: '80px',
  30: '120px',
} as const;

export const borderRadius = {
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  full: '9999px',
} as const;

export const shadows = {
  card: '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
  cardHover: '0 4px 12px rgba(0,0,0,0.08)',
  navbar: '0 1px 4px rgba(0,0,0,0.06)',
} as const;
