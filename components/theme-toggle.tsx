'use client'

import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

import useMounted from '@/hooks/use-mounted'

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()

  const mounted = useMounted()
  if (!mounted) return null

  return (
    <Button
      size="sm"
      variant="ghost"
      onClick={() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
      }}
    >
      {resolvedTheme === 'dark' ? (
        <SunIcon className="size-4 text-white" />
      ) : (
        <MoonIcon className="size-4 text-sky-950" />
      )}

      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
