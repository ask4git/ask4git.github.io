"use client"

import { createContext, useEffect, useState } from "react"
import { useMotionValueEvent, useScroll } from "framer-motion"
import { usePathname } from "next/navigation"

type MainContextType = {
  pageScrollY: number
}

console.log(`  
██████╗ ██████╗ ██████╗ ███████╗██╗  ██╗██╗████████╗
██╔════╝██╔═══██╗██╔══██╗██╔════╝██║ ██╔╝██║╚══██╔══╝
██║     ██║   ██║██║  ██║█████╗  █████╔╝ ██║   ██║   
██║     ██║   ██║██║  ██║██╔══╝  ██╔═██╗ ██║   ██║   
╚██████╗╚██████╔╝██████╔╝███████╗██║  ██╗██║   ██║   
 ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝   ╚═╝     
`)

export const MainContext = createContext<MainContextType>({
  pageScrollY: 0,
})

export const MainContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const pathname = usePathname()
  const [pageScrollY, setPageScrollY] = useState(0)

  const { scrollYProgress } = useScroll()

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setPageScrollY(latest * 100)
  })

  useEffect(() => {
    setPageScrollY(0)
  }, [pathname])

  return (
    <MainContext.Provider
      value={{
        pageScrollY,
      }}
    >
      {children}
    </MainContext.Provider>
  )
}
