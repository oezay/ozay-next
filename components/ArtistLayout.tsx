'use client'

import { useState } from 'react'
import { Artist } from '@/types/Artist'
import ArtistList from './ArtistList'
import ArtistProfile from './ArtistProfile'
import $ from './ArtistLayout.module.scss'
import { useIsMobile } from '../hooks/mobile'

export interface ArtistListProps {
  artists: Artist[]
  selectedArtist?: Artist
}

export default function ArtistLayout(props: ArtistListProps) {
  const { artists, selectedArtist } = props

  const [selected, setHovered] = useState<Artist | null>(null)

  const isMobile = useIsMobile()

  const setHoveredItem = (key: Artist['_id']) => {
    const artist = artists.find((artist) => artist._id === key)
    if (artist) setHovered(artist)
  }

  const setDefaultContent = () => {
    setHovered(null)
  }

  const isHoveringSelectedArtist = selected && selectedArtist?._id === selected._id

  return (
    <div className={$.container}>
      <ArtistList
        content={artists}
        onHover={(name) => setHoveredItem(name)}
        onMouseLeave={setDefaultContent}
        defaultSelected={selectedArtist}
        selectedArtist={selectedArtist}
      />
      {!isMobile && (
        <main className={$.main}>
          {selected && !isHoveringSelectedArtist ? (
            <ArtistProfile artist={selected} />
          ) : selectedArtist ? (
            <ArtistProfile artist={selectedArtist} full />
          ) : (
            <section className={$.poster} />
          )}
        </main>
      )}
    </div>
  )
}
