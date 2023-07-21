"use client";

import Link from "next/link";
import clsx from "clsx";
import { Artist } from "@/types/Artist";

export interface ArtistListProps {
  defaultSelected?: Artist;
  onMouseLeave: () => void;
  onHover: (key: string) => void;
  content: Artist[];
}

export default function ArtistList(props: ArtistListProps) {
  const { content, defaultSelected, onMouseLeave, onHover } = props;

  return (
    <nav className="nav h-full" onMouseLeave={onMouseLeave}>
      <ul className="grid h-full auto-rows-auto">
        {content.map((artist) => {
          const { _id: id } = artist;
          return (
            <li
              key={id}
              tabIndex={0}
              // className="flex px-2 border-t border-violet-500 "
              className={clsx(
                "font-extrabold text-2xl text-black hover:bg-gradient-to-r from-violet-400 to-violet-600 transition hover:text-white transition",
                defaultSelected?._id === id &&
                  "bg-gradient-to-r from-violet-400 to-violet-600 text-white"
              )}
              onMouseEnter={() => onHover(id)}
              onFocus={() => onHover(id)}
            >
              <Link
                href={`/artists/${artist.slug}`}
                className="w-full h-full flex items-center p-2"
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
