"use client";

import { createContext, useEffect, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";

type MainContextType = {
  pageScrollY: number;
  isMobile: boolean;
};

console.log(`  
██████╗ ██████╗ ██████╗ ███████╗██╗  ██╗██╗████████╗
██╔════╝██╔═══██╗██╔══██╗██╔════╝██║ ██╔╝██║╚══██╔══╝
██║     ██║   ██║██║  ██║█████╗  █████╔╝ ██║   ██║   
██║     ██║   ██║██║  ██║██╔══╝  ██╔═██╗ ██║   ██║   
╚██████╗╚██████╔╝██████╔╝███████╗██║  ██╗██║   ██║   
 ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝   ╚═╝     
`);

export const MainContext = createContext<MainContextType>({
  pageScrollY: 0,
  isMobile: false,
});

export const MainContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const [pageScrollY, setPageScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setPageScrollY(latest * 100);
  });

  useEffect(() => {
    setPageScrollY(0);
  }, [pathname]);

  useEffect(() => {
    const handleWindowResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <MainContext.Provider
      value={{
        pageScrollY,
        isMobile,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
