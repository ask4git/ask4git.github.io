"use client";

import { Fragment, useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, useAnimation } from "framer-motion";

import { MainContext } from "@/contexts/main";

import thorusKnot from "@/assets/icons/thorus_knot.png";
import continuousSphere from "@/assets/icons/continuous-sphere.png";
import helix from "@/assets/icons/helix.png";
import sphere from "@/assets/icons/sphere.png";

const text = "지금 바로 시작해보세요!";
const textArray = Array.from(text);
const shakeAnimation = {
  rotate: [0, 4, -6, 1, -2, 0], // 회전
  transition: { duration: 0.7 },
};

export const LeadContact = () => {
  const { pageScrollY, isMobile } = useContext(MainContext);
  const router = useRouter();

  const controls = useAnimation();

  return (
    <div className="h-[26rem] md:h-lvh relative">
      {isMobile ? (
        <MobileLeadContact />
      ) : (
        <Fragment>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: pageScrollY > 90 ? 1 : 0,
              scale: pageScrollY > 90 ? [1, 1.2, 1.05, 1.1, 1] : 0,
            }}
            transition={{ ease: [0.17, 0.67, 0.83, 0.67], duration: 0.4 }}
            className="w-40 h-40 absolute top-0 left-72"
          >
            <img src="/icons/thorus_knot.png" alt="thorus_knot icon" />
            {/* <Image
          fill
          src={thorusKnot}
          alt="thorus_knot icon"
          sizes="(max-width: 100%)"
        /> */}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: pageScrollY > 90 ? 1 : 0,
              scale: pageScrollY > 90 ? [1, 1.2, 1.05, 1.1, 1] : 0,
            }}
            transition={{
              ease: [0.17, 0.67, 0.83, 0.67],
              duration: 0.4,
              delay: 0.8,
            }}
            className="w-48 h-48 absolute top-16 right-72"
          >
            <img
              src="/icons/continuous-sphere.png"
              alt="continuous sphere icon"
            />
            {/* <Image
          fill
          src={continuousSphere}
          alt="continuous sphere icon"
          sizes="(max-width: 100%)"
        /> */}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: pageScrollY > 90 ? 1 : 0,
              scale: pageScrollY > 90 ? [1, 1.2, 1.05, 1.1, 1] : 0,
            }}
            transition={{
              ease: [0.17, 0.67, 0.83, 0.67],
              duration: 0.4,
              delay: 0.5,
            }}
            className="w-96 h-64 absolute left-32 bottom-0"
            // className="w-96 h-64 absolute left-32 bottom-0"
          >
            <img src="/icons/helix.png" alt="helix icon" className="h-full" />
            {/* <Image fill src={helix} alt="helix icon" sizes="(max-width: 100%)" /> */}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: pageScrollY > 90 ? 1 : 0,
              scale: pageScrollY > 90 ? [1, 1.2, 1.05, 1.1, 1] : 0,
            }}
            transition={{
              ease: [0.17, 0.67, 0.83, 0.67],
              duration: 0.4,
              delay: 0.8,
            }}
            className="w-64 h-44 absolute right-48 bottom-0"
          >
            <img
              src={"/icons/sphere.png"}
              alt="sphere icon"
              className="h-full"
            />
            {/* <Image fill src={sphere} alt="sphere icon" sizes="(max-width: 100%)" /> */}
          </motion.div>

          <motion.p className="absolute w-full text-center text-3xl md:text-7xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold">
            {textArray.map((value, index) => {
              return (
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  key={index}
                >
                  {value}
                </motion.span>
              );
            })}
          </motion.p>

          <motion.button
            initial={{
              opacity: 0,
              translateX: "-50%",
              translateY: "6rem",
              translateZ: 0,
            }}
            whileInView={{
              opacity: 1,
              translateX: "-50%",
              translateY: "6rem",
              translateZ: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.4,
            }}
            animate={controls}
            onMouseEnter={() => controls.start(shakeAnimation)}
            onMouseLeave={() => controls.start({ scale: 1, rotate: 0 })}
            className="bg-[#7e02ff] rounded-[2rem] flex items-center justify-center w-36 h-9 md:w-56 md:h-16 text-white absolute cursor-pointer text-[1rem] md:text-[2rem] font-bold top-1/2 left-1/2 -translate-x-1/2 translate-y-24"
            onClick={() => {
              router.push("/contact");
              // new Promise(() => {
              //   scrollTo({
              //     top: 0,
              //     behavior: "smooth",
              //   });
              // });
            }}
          >
            시작하기
          </motion.button>
        </Fragment>
      )}
    </div>
  );
};

const MobileLeadContact = () => {
  const router = useRouter();

  return (
    <Fragment>
      <span className="absolute w-full text-center text-3xl md:text-7xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold">
        {text}
      </span>
      <button
        onClick={() => {
          router.push("/contact");
        }}
        className="bg-[#7e02ff] rounded-[2rem] flex items-center justify-center w-36 h-9 md:w-56 md:h-16 text-white absolute cursor-pointer text-[1rem] md:text-[2rem] font-bold top-1/2 left-1/2 -translate-x-1/2 translate-y-24"
      >
        시작하기
      </button>
    </Fragment>
  );
};
