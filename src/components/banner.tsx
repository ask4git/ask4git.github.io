"use client";
import { useContext } from "react";

import { motion } from "framer-motion";

import { MainContext } from "@/contexts/main";

const Banner = () => {
  const { isMobile } = useContext(MainContext);

  return (
    <div className="flex flex-col pb-16 md:pb-48 max-w-7xl m-auto">
      <h4 className="flex flex-col text-4xl md:text-[5rem] md:leading-normal pb-8 md:pb-0 font-[900]">
        <motion.p
          initial={{ opacity: 0, translateX: -100 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-fit z-10"
        >
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: "68%" }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute left-0 h-1/2 bg-[#7d00ff4d] w-full translate-y-4 md:translate-y-14 opacity-60 z-0"
          />
          홈 페이지부터
        </motion.p>
        <motion.p
          initial={{ opacity: 0, translateX: -100 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative w-fit"
        >
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: "68%" }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute left-0 h-1/2 bg-[#7d00ff4d] w-full translate-y-4 md:translate-y-14 opacity-60 z-0"
          />
          웹 크롤러까지
        </motion.p>
      </h4>

      <h4 className="self-end flex flex-col text-right text-4xl md:text-[5rem] md:leading-normal font-[900]">
        <motion.p
          initial={{ opacity: 0, translateX: 100 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative w-fit self-end"
        >
          아이디어 {isMobile ? "이제" : null}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, translateX: 100 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="relative w-fit"
        >
          {isMobile ? null : "이제"} 기다리지 마세요!
        </motion.p>
      </h4>
    </div>
  );
};

export default Banner;
