import './globals.css'
import { Poppins as Pop } from 'next/font/google'

const Poppins = Pop({
  subsets: ['latin'],
  weight: ['400', '200', '300', '100', '500', '600', '700', '800', '900']
})

export const metadata = {
  title: 'App Music Player',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3877403277154810"
     crossorigin="anonymous"></script>
    <html lang="en">
      <body className={Poppins.className}>{children}</body>
    </html>
  )
}
