import formsPlugin from '@tailwindcss/forms'
import prosePlugin from '@tailwindcss/typography'
import headlessuiPlugin from '@headlessui/tailwindcss'
import { type Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/pages/posts/*.{js,jsx,ts,tsx}',
    './src/pages/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1.1rem', { lineHeight: '1.75rem' }],
      lg: ['1.2rem', { lineHeight: '2rem' }],
      xl: ['1.4rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1.1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    colors: {
      primary: colors.violet,
      slate: colors.slate,
      white: colors.white,
      gray : colors.gray,
      indigo: colors.indigo,
    },
    extend: {
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        sans: 'var(--font-sans)',
        display: 'var(--font-display)',
      },
      maxWidth: {
        '2xl': '40rem',
      },
    },
  },
  plugins: [formsPlugin, headlessuiPlugin, prosePlugin],
} satisfies Config
