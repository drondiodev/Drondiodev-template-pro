import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

import ThemeToggle from '@/components/theme-toggle'

import { Button } from './ui/button'

export default function Header() {
  return (
    <header className="py-4">
      <nav className="container flex items-center justify-between">
        <ul className="flex items-center gap-10 text-sm font-medium">
          <li className="text-lg font-semibold">
            <Link href="/">Logo</Link>
          </li>
          <li>
            <Link href="/dashboard">
              <Button size="sm" variant="destructive">
                Dashboard
              </Button>
            </Link>
          </li>
        </ul>
        <div className="flex items-center justify-center gap-6">
          <ThemeToggle />
          <SignedOut>
            <SignInButton>
              <Button size="sm">Sign In</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </header>
  )
}
