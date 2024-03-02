"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { motion } from "framer-motion";

import { MainContext } from "@/contexts/main";

export const Footer = () => {
  const { pageScrollY, isMobile } = useContext(MainContext);
  const pathname = usePathname();

  return (
    <footer className="bg-[#b0b0b0] w-full">
      {isMobile ? (
        <MobileFooter />
      ) : (
        <div className="flex items-center h-16 md:h-24 gap-4 justify-center">
          <motion.span
            initial={{
              opacity: 0,
              x: pathname === "/contact" ? 0 : -100,
            }}
            animate={{
              x: pathname === "/contact" ? 0 : pageScrollY > 98 ? 0 : -100,
              opacity: pathname === "/contact" ? 1 : pageScrollY > 98 ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
            className="h-6 flex items-center justify-center cursor-pointer"
            role="button"
            onClick={() => {
              scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img
              src="/images/logo.png"
              width={128}
              height={24}
              alt="codekit logo"
            />
            {/* <Image
            src="/images/logo.png"
            width={128}
            height={24}
            alt="codekit logo"
          /> */}
            {/* <Image src={logo} width={128} height={24} alt="codekit logo" /> */}
          </motion.span>
          <motion.p
            initial={{ opacity: 0, x: pathname === "/contact" ? 0 : 100 }}
            animate={{
              x: pathname === "/contact" ? 0 : pageScrollY > 98 ? 0 : 100,
              opacity: pathname === "/contact" ? 1 : pageScrollY > 98 ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
          >
            &copy; All rights reserved.
          </motion.p>
        </div>
      )}
    </footer>
  );
};

const MobileFooter = () => {
  return (
    <div className="flex flex-col items-center h-16 md:h-24 gap-1 justify-center">
      <img
        src="/images/logo.png"
        width={128}
        height={24}
        alt="codekit logo"
        onClick={() => {
          scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
      <p className="text-[0.6rem]">&copy; All rights reserved.</p>
    </div>
  );
};
