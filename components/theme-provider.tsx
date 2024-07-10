'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'
import * as React from 'react'

export default function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
