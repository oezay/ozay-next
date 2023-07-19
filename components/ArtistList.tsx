"use client";

import Link from "next/link";
import { Artist } from "../types/Artist";

export interface ArtistListProps {
  onMouseLeave: () => void;
  onHover: (key: string) => void;
  content: Artist[];
}

export default function ArtistList(props: ArtistListProps) {
  return (
    <nav className="nav h-full" onMouseLeave={props.onMouseLeave}>
      <ul className="grid h-full auto-rows-auto">
        {props.content.map((artist) => {
          const id = artist._id;
          return (
            <li
              key={id}
              tabIndex={0}
              className="flex px-2 border-t border-violet-500"
              onMouseEnter={() => props.onHover(id)}
              onFocus={() => props.onHover(id)}
            >
              <Link
                href={`/artists/${artist.slug}`}
                className="w-full h-full flex items-center"
              >
                {artist.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
