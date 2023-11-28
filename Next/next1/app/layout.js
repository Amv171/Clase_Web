import Navbar from '@/components/NavBar'
import'./globals.css'
export const metadata = {
  title: "Mi tienda",
  description: "Esta es la página principal de mi tienda",
  keywords: "tienda, online, ecommerce"
}
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />

        {children}
      </body>
    </html>
  )
}