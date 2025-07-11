import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

const voxel = localFont({
  src: "../fonts/Voxel.otf",
  variable: "--font-voxel",
})

export const metadata: Metadata = {
  title: "Joel Crasta",
  description:
    "A portfolio website showcasing Joel Crasta's skills and projects.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${voxel.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
