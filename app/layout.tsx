import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Tutoropia - Elite Academic Tutoring",
  description:
    "Professional tutoring services for serious students. Master mathematics, sciences, languages, and test prep with our expert tutors.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-screen flex flex-col font-sans">
        <Suspense fallback={null}>
          <div className="flex-1 flex flex-col">{children}</div>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
