import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/NavBar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Proyecto 1',
  description: 'Created by Antonio Moreno',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Navbar/>
      {children}
    </body>
    </html>
  )
}
