"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useContext } from "react";
import { motion, useAnimation } from "framer-motion";

import { MainContext } from "@/contexts/main";

const shakeAnimation = {
  scale: [1, 1.1, 1.05, 1.1, 1], // 확대/축소
  rotate: [0, 3, -3, 1, -1, 0], // 회전
  transition: { duration: 1 },
};

export const Header = () => {
  const { pageScrollY, isMobile } = useContext(MainContext);
  const pathname = usePathname();
  const controls = useAnimation();

  const isContactPage = pathname === "/contact";

  return (
    <Fragment>
      {isMobile ? (
        <MobileHeader />
      ) : (
        <motion.header
          initial={{
            opacity: 0,
            y: -100,
            paddingLeft: "200px",
            paddingRight: "200px",
          }}
          animate={{
            opacity: isContactPage ? 1 : pageScrollY > 3 ? 0 : 1,
            y: isContactPage ? 0 : pageScrollY > 3 ? -100 : 0,
            paddingLeft: pageScrollY > 3 ? "100px" : "0px",
            paddingRight: pageScrollY > 3 ? "100px" : "0px",
          }}
          transition={{ ease: [0.17, 0.67, 0.83, 0.67], duration: 0.4 }}
          className="h-11 md:h-24 w-full border-b fixed top-0"
        >
          <div className="flex items-center justify-between h-full px-4 md:px-24">
            <motion.h1
              className="cursor-pointer"
              whileHover={shakeAnimation}
              animate={controls}
              onMouseEnter={() => controls.start(shakeAnimation)}
              onMouseLeave={() => controls.start({ scale: 1, rotate: 0 })}
            >
              <Link href="/">
                <img
                  src="/images/logo.png"
                  width={isMobile ? 123 : 312}
                  height={isMobile ? 16 : 24}
                  alt="codekit logo"
                />
                {/* <Image
              src="/images/logo.png"
              width={312}
              height={24}
              alt="codekit logo"
            /> */}
                {/* <Image src={logo} width={312} height={24} alt="codekit logo" /> */}
              </Link>
            </motion.h1>
            <ul className="flex items-center gap-4 md:gap-8">
              <li>
                <Link href="/" className="text-xs md:text-lg">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-xs md:text-lg">
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
        </motion.header>
      )}
    </Fragment>

    // <MobileHeader />
  );
};

const MobileHeader = () => {
  const { pageScrollY } = useContext(MainContext);

  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -100,
        paddingLeft: "200px",
        paddingRight: "200px",
      }}
      animate={{
        opacity: pageScrollY > 3 ? 0 : 1,
        y: pageScrollY > 3 ? -100 : 0,
        paddingLeft: pageScrollY > 3 ? "100px" : "0px",
        paddingRight: pageScrollY > 3 ? "100px" : "0px",
      }}
      transition={{ ease: [0.17, 0.67, 0.83, 0.67], duration: 0.4 }}
      className="h-11 md:h-24 w-full border-b fixed top-0"
    >
      <div className="flex items-center justify-between h-full px-4">
        <Link href="/">
          <img
            src="/images/logo.png"
            width={123}
            height={16}
            alt="codekit logo"
          />
        </Link>

        <ul className="flex items-center gap-4 md:gap-8">
          <li>
            <Link href="/" className="text-xs md:text-lg">
              ABOUT
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-xs md:text-lg">
              CONTACT US
            </Link>
          </li>
        </ul>
      </div>
    </motion.header>
  );
};
