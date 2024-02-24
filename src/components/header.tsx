"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { motion, useAnimation } from "framer-motion";

import { MainContext } from "@/contexts/main";

const shakeAnimation = {
  scale: [1, 1.1, 1.05, 1.1, 1], // 확대/축소
  rotate: [0, 3, -3, 1, -1, 0], // 회전
  transition: { duration: 1 },
};

export const Header = () => {
  const { pageScrollY } = useContext(MainContext);
  const pathname = usePathname();
  const controls = useAnimation();

  const isContactPage = pathname === "/contact";

  return (
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
      className="w-full border-b h-24 fixed top-0"
    >
      <div className="flex items-center justify-between h-full px-24">
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
              width={312}
              height={24}
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
        <ul className="flex items-center gap-8">
          <li>
            <Link href="/">ABOUT</Link>
          </li>
          <li>
            <Link href="/contact">CONTACT US</Link>
          </li>
        </ul>
      </div>
    </motion.header>
  );
};
