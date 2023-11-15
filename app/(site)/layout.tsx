import Link from 'next/link'
import { getPages } from '@/sanity/sanity-utils'
import CuraLogo from '@/components/icons/CuraLogo'
import $ from './layout.module.scss'
import Navigation from '@/components/Navigation'
import ImpressumFooter from '@/components/ImpressumFooter'
import '@/app/globals.scss'
import '@/app/typekit.scss'

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

            <Navigation pages={pages} />
          </header>

          <div className={$.content}>{children}</div>

          <ImpressumFooter />
        </div>
      </body>
    </html>
  )
}
