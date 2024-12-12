import { type Metadata } from 'next'
import { getArtist, getArtists } from '@/sanity/sanity-utils'
import ArtistLayout from '@/components/ArtistLayout'

type Props = {
  params: { artist: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const artist = await getArtist(params.artist)

  if (!artist) {
    return {}
  }

  return {
    title: `${artist.name} - CURA Berlin`,
  }
}

export default async function ArtistPage({ params }: Props) {
  const [artist, artists] = await Promise.all([getArtist(params.artist), getArtists()])
  return <ArtistLayout artists={artists} selectedArtist={artist} />
}

export const fetchCache = 'force-no-store'
export const dynamic = 'force-dynamic'
