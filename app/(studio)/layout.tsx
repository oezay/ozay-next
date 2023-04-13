import '../globals.css'

export const metadata = {
    title: 'OZAY STUDIO',
    description: 'GRAPHIC DESIGN - KOTTBUSER TOR',
  }
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    )
  }
  