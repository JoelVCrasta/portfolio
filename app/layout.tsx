import type { Metadata } from "next"
import localFont from "next/font/local"
import { Pixelify_Sans } from "next/font/google"
import "./globals.css"

const voxel = localFont({
  src: "../fonts/Voxel.otf",
  variable: "--font-voxel",
})

const pixelify = Pixelify_Sans({
  variable: "--font-pixelify",
  weight: ["400"],
  subsets: ["latin"],
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
      <body
        className={`${voxel.variable} ${pixelify.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
