'use client'

import { useState } from 'react'
import { Artist } from '@/types/Artist'
import ArtistList from './ArtistList'
import ArtistProfile from './ArtistProfile'
import $ from './ArtistLayout.module.scss'
import { useIsMobile } from '@/hooks/mobile'

export interface ArtistListProps {
  artists: Artist[]
  selectedArtist?: Artist
}

export default function ArtistLayout(props: ArtistListProps) {
  const { artists, selectedArtist } = props

  console.log({ selectedArtist })

  const [selected, setHovered] = useState<Artist | null>(null)

  const isMobile = useIsMobile()

  const setDefaultContent = () => {
    setHovered(null)
  }

  return (
    <div className={$.container}>
      <ArtistList
        content={artists}
        onMouseLeave={setDefaultContent}
        defaultSelected={selectedArtist}
        selectedArtist={selectedArtist}
      />
      {!isMobile && (
        <main className={$.main}>
          {selectedArtist ? (
            <ArtistProfile artist={selectedArtist} full />
          ) : (
            <section className={$.poster} />
          )}
        </main>
      )}
    </div>
  )
}
