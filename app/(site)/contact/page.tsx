import { getPage } from '@/sanity/sanity-utils'
import { PortableText } from '@portabletext/react'
import $ from './page.module.scss'
import EnvelopeIcon from '@/components/icons/EnvelopeIcon'
import InstagramIcon from '@/components/icons/InstagramIcon'

type Props = {
  params: { slug: string }
}

export default async function Page({ params }: Props) {
  const page = await getPage('contact')

  return (
    <div className={$.page}>
      <div className={$.textPane}>
        <div className={$.text}>
          <PortableText value={page.content} />
        </div>
      </div>
      <article className={$.messagePane}>
        <address className={$.contactDetails}>
          <p className={$.contactItem}>
            <InstagramIcon className={$.icon} />
            <a href="https://instagram.com/curaberlin" target="_blank">
              curaberlin
            </a>
          </p>
          <p className={$.contactItem}>
            <EnvelopeIcon className={$.icon} />
            <a href="mailto:info@curaberlin.de">info@curaberlin.de</a>
          </p>
        </address>
      </article>
    </div>
  )
}
