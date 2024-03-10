import clsx from 'clsx'
import '@/styles/tailwind.css'
import {RootLayout} from '@/components/RootLayout'

import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: 'LexPipe',
    default: 'LexPipe - Legal workflow automation for law firms',
  },
  description:
    'LexPipe transforms the way law firms and corporates use legal information to develop new business and manage matters.',
}

export default RootLayout;