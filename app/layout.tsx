import './globals.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

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
      <body>
        <Navbar />
        <main>
          {children}      {/* page.tsx render */}
        </main>
        <Footer />
      </body>
    </html>
  )
}
