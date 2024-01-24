import { PortableTextBlock } from 'sanity'

export type SocialLinks = {
  platform: string
  url: string
}

export type Artist = {
  _id: string
  _createdAt: Date
  name: string
  bio: PortableTextBlock[]
  image: string
  slug: string
  socialLinks: SocialLinks[]
  url: string
  order: number
  imagePositionDesktop?: string
  imagePositionMobile?: string
}
