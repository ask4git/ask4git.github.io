import type { Metadata } from "next"
import { Noto_Sans_KR } from "next/font/google"

import { cn } from "@/lib"

import "./globals.css"

import { MainContextProvider } from "@/contexts/main"

const notoSansKR = Noto_Sans_KR({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.codekit.im"),
  title: "codekit - 아이디어를 구현합니다.",
  description:
    "홈 페이지부터 웹 크롤러까지, 아이디어 이제 기다리지마세요! codekit과 함께하세요.",
  robots: {
    index: true,
    googleBot: {
      index: true,
    },
  },
  openGraph: {
    title: "codekit - 아이디어를 구현합니다.",
    url: "https://codekit.im/",
    type: "website",
    description:
      "홈 페이지부터 웹 크롤러까지, 아이디어 이제 기다리지마세요! codekit과 함께하세요.",
    images: [
      {
        url: `/images/logo_temp.png`,
        width: 1200,
        height: 630,
        alt: "codekit logo image",
      },
    ],
  },
  keywords: "SI, SM, 외주, 개발외주, 개발, 홈페이지, 웹빌더, 크롤러, 스크랩퍼",
  icons: {
    icon: [
      {
        url: "/favicons/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
      },
      {
        url: "/favicons/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/favicons/favicon-192x192.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        url: "/favicons/favicon-512x512.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    apple: [
      {
        url: "/favicons/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body
        className={cn(
          "overflow-x-hidden bg-slate-100 max-w-[1920px] m-auto flex flex-col min-h-screen",
          notoSansKR.className
        )}
      >
        <MainContextProvider>{children}</MainContextProvider>
      </body>
    </html>
  )
}
