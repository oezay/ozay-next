import { PortableText } from '@portabletext/react'
import { Artist } from '@/types/Artist'
import $ from './ArtistProfile.module.scss'

export interface ArtistProfileProps {
  artist: Artist
  full?: boolean
}

export default function ArtistProfile(props: ArtistProfileProps) {
  return (
    <section
      className={$.container}
      style={{ ['--bg-url' as string]: `url(${props.artist.image})` }}
    >
      <h1 className={$.title}>{props.artist.name}</h1>
      {props.full && (
        <div className={$.bio}>
          <PortableText value={props.artist.bio} />
        </div>
      )}
    </section>
  )
}
