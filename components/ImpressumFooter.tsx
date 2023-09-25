'use client'

import Link from 'next/link'
import $ from './ImpressumFooter.module.scss'
import { usePathname } from 'next/navigation'

const ImpressumFooter = () => {
  const route = usePathname()
  if (route === '/impressum') return null
  return (
    <Link href="/impressum" className={$.impressumLink}>
      Impressum
    </Link>
  )
}

export default ImpressumFooter
