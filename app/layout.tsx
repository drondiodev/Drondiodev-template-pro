import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'

import cn from '@/lib/utils'

import Footer from '@/components/footer'
import Header from '@/components/header'
import ThemeProvider from '@/components/theme-provider'

import './globals.css'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Nom du projet',
  description: 'Description du projet',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      className="scroll-smooth antialiased"
      suppressHydrationWarning
    >
      <body
        className={cn(
          'flex min-h-screen  flex-col bg-background font-sans',
          fontSans.variable
        )}
      >
        <ThemeProvider
          enableSystem
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
        >
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
