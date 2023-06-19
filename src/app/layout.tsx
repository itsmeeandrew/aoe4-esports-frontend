import './globals.css'
import { Red_Hat_Text } from 'next/font/google'
import Navigation from './navigation/page'

const redHatText = Red_Hat_Text({ subsets: ['latin'] })

export const metadata = {
  title: 'AoE IV Esports',
  description: 'A site that makes the viewing of AoE IV esports events easy.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={redHatText.className}>
        <Navigation></Navigation>
        {children}
      </body>
    </html>
  )
}
