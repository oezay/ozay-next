import Link from "next/link";
import "../globals.css";
import { getPages } from "@/sanity/sanity-utils";

export const metadata = {
  title: "CURA Berlin",
  description: "Booking Agency with a big <3",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // get all of the pages

  const pages = await getPages();

  return (
    <html lang="en">
      <body className="max-w-1xl mx-auto py-2">
        <header className="flex items-center justify-between px-2">
          <Link
            href="/"
            className="bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent text-2xl"
          >
            curaberlin.de
          </Link>

          <div className="flex items-center gap-3 text-sm text-gray-600">
            {pages.map((page) => (
              <Link
                key={page._id}
                href={`/${page.slug}`}
                className="hover:underline"
              >
                {page.title}
              </Link>
            ))}
          </div>
        </header>

        <main className="py-5">{children}</main>
      </body>
    </html>
  );
}
