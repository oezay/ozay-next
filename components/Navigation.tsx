'use client'

import Link from 'next/link'
import { Page } from '@/types/Page'
import $ from './Navigation.module.scss'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

interface NavigationProps {
  pages: Page[]
}

export default function Navigation(props: NavigationProps) {
  const pathname = usePathname()

  return (
    <nav className={$.nav}>
      {props.pages.map((page) => {
        const path = `/${page.slug}`
        const isActive = pathname === path

        if (page.slug === 'impressum') {
          return null
        }

        if (isActive) {
          return (
            <span
              key={page._id}
              className={clsx($.navItem, {
                [$.navItemActive]: isActive,
              })}
            >
              {page.title}
            </span>
          )
        }

        return (
          <Link
            key={page._id}
            href={path}
            className={clsx($.navItem, {
              [$.navItemActive]: isActive,
            })}
          >
            {page.title}
          </Link>
        )
      })}
    </nav>
  )
}
