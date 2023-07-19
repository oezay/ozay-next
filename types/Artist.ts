import { PortableTextBlock } from "sanity";

export type Artist = {
  _id: string;
  _createdAt: Date;
  name: string;
  bio: PortableTextBlock[];
  image: string;
  slug: string;
  socials: string;
  url: string;
};
