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
      <body className="max-w-1xl mx-auto">
        <div className="h-screen grid grid-rows-[4rem,1fr] grid-cols-2">
          <header className={$.header}>
            <Link href="/" className="color-black">
              <CuraLogo className="w-120" />
            </Link>

            <nav className={$.nav}>
              {pages.map((page) => (
                <Link key={page._id} href={`/${page.slug}`} className={$.navItem}>
                  {page.title}
                </Link>
              ))}
            </nav>
          </header>

          {children}
        </div>
      </body>
    </html>
  )
}
