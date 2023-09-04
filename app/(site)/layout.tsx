import Link from 'next/link'
import { getPages } from '@/sanity/sanity-utils'
import CuraLogo from '@/components/icons/CuraLogo'
import '@/app/globals.scss'
import '@/app/typekit.scss'
import $ from './layout.module.scss'

export const metadata = {
  title: 'CURA Berlin',
  description: 'Booking Agency with a big <3',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const pages = await getPages()

  return (
    <html lang="en">
      <body className={$.body}>
        <div className={$.root}>
          <header className={$.header}>
            <Link href="/" className={$.logoLink}>
              <CuraLogo className={$.logoIcon} />
            </Link>

            <nav className={$.nav}>
              {pages.map((page) => (
                <Link key={page._id} href={`/${page.slug}`} className={$.navItem}>
                  {page.title}
                </Link>
              ))}
            </nav>
          </header>

          <div className={$.content}>{children}</div>
        </div>
      </body>
    </html>
  )
}
