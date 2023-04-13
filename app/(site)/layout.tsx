import Link from 'next/link'
import '../globals.css'
import { getPages } from '@/sanity/sanity-utils';

export const metadata = {
  title: 'OZAY STUDIO',
  description: 'GRAPHIC DESIGN - KOTTBUSER TOR',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  // get all of the pages

  const pages = await getPages();

  return (
    <html lang="en">
      <body className='max-w-3xl mx-auto py-5'>
        
        <header className='flex items-center justify-between'>
          <Link 
            href="/"
            className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent text-2xl"
          >
            ozay.de
          </Link>

          <div className='flex items-center gap-5 text-sm text-gray-600'>

            {pages.map((page) => (
              <Link key={page._id} href={`/${page.slug}`} className='hover:underline'>
                {page.title}
              </Link>
            ))}
          </div>
        </header>
        
        <main className='py-20'>
          {children}
        </main>

      </body>
    </html>
  )
}
