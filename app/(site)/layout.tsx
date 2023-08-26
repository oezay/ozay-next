import Link from 'next/link'
import '../globals.css'
import { getPages } from '@/sanity/sanity-utils'
import CuraLogo from '../../components/icons/CuraLogo'

export const metadata = {
  title: 'CURA Berlin',
  description: 'Booking Agency with a big <3',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // get all of the pages

  const pages = await getPages()

  return (
    <html lang="en">
      <body className="max-w-1xl mx-auto">
        <div className="h-screen grid grid-rows-[4rem,1fr] grid-cols-2">
          <header className="flex items-center justify-between px-2 col-span-2">
            <Link href="/" className="color-black">
              <CuraLogo className="w-120" />
            </Link>

            <div className="flex items-center gap-3 text-sm text-gray-600">
              {pages.map((page) => (
                <Link key={page._id} href={`/${page.slug}`} className="hover:underline">
                  {page.title}
                </Link>
              ))}
            </div>
          </header>

          {children}
        </div>
      </body>
    </html>
  )
}
