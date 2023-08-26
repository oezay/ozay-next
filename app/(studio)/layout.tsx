import '../globals.scss'

export const metadata = {
  title: 'OZAY STUDIO',
  description: 'GRAPHIC DESIGN - KOTTBUSSER TOR',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
