import './globals.css';

export const metadata = {
  title: '✨Iridescent✨',
  description: 'Meta data description right here... not sure where it will be :o',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      Navbar
      <main>
        {children}      {/* page.tsx render */}
      </main>
      Footer
    </html>
  )
}
