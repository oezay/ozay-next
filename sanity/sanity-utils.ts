import { Project } from '@/types/Project'
import { createClient, groq } from 'next-sanity'
import clientConfig from './config/client-config'
import { Page } from '@/types/Page'
import { Artist } from '@/types/Artist'

export const client = createClient(clientConfig)

export async function getProjects(): Promise<Project[]> {
  return client.fetch(
    groq`*[_type == "project"]{
            _id,
            createdAt,
            name,  
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`
  )
}

export async function getProject(slug: string): Promise<Project> {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`,
    { slug }
  )
}

export async function getPages(): Promise<Page[]> {
  return client.fetch(
    groq`*[_type == "page"]{
            _id,
            _createdAt,
            title,
            "slug": slug.current
        }`
  )
}

export async function getPage(slug: string): Promise<Page> {
  return client.fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            content
        }`,
    { slug }
  )
}

export async function getArtists(): Promise<Artist[]> {
  const data = await client.fetch<Artist[]>(
    groq`*[_type == "artist"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            "bio": bio,
            order
        }`
  )
  return data.sort((a, b) => a.order - b.order)
}

export async function getArtist(slug: string): Promise<Artist> {
  return client.fetch(
    groq`*[_type == "artist" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            "bio": bio,
            socialLinks,
            imagePositionDesktop,
            imagePositionMobile
        }`,
    { slug }
  )
}
