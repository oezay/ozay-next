import { getArtist, getArtists } from '@/sanity/sanity-utils'
import ArtistLayout from '@/components/ArtistLayout'

type Props = {
  params: { artist: string }
}

export default async function ArtistPage({ params }: Props) {
  const [artist, artists] = await Promise.all([getArtist(params.artist), getArtists()])
  return <ArtistLayout artists={artists} selectedArtist={artist} />
}

export const fetchCache = 'force-no-store'
export const dynamic = 'force-dynamic'
