"use client";
import { SKILLS } from "@/constants/skills";
import { motion } from "framer-motion";
import Image from "next/image";
const rotateArray = [0, 3, -3, 1, -1, 0];

export const Summary = () => {
  return (
    <div className="flex justify-between pt-48 pb-48 max-w-[1320px] m-auto">
      <h4 className="flex w-3/5 flex-col text-7xl font-[900] self-center leading-tight">
        <motion.p
          initial={{ opacity: 0, translateX: -100 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="relative w-fit z-10"
        >
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{
              duration: 0.6,
              delay: 0.8,
            }}
            className="absolute left-0 h-1/2 bg-[#7d00ff4d] w-full translate-y-full opacity-60 z-0"
          />
          최적의 기술로
        </motion.p>
        <motion.p
          initial={{ opacity: 0, translateX: -100 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.4,
          }}
          className="relative w-fit"
        >
          당신의 아이디어를
        </motion.p>
        <motion.p
          initial={{ opacity: 0, translateX: -100 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.4,
          }}
          className="relative w-fit"
        >
          구현합니다
        </motion.p>
      </h4>
      <motion.ul
        initial="hidden"
        animate="visible"
        className="grid grid-cols-4 gap-4 w-1/2 self-end"
      >
        {SKILLS.map((skill, index) => {
          const modifiedArray = rotateArray.map((value) => {
            if (value !== 0) {
              const randomValue = Math.floor(Math.random() * 10) - 2;
              return randomValue;
            }
            return value;
          });

          return (
            <motion.li
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{
                opacity: 1,
                scale: [0, 1, 1.05, 1],
                rotate: modifiedArray, // 회전
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              key={index}
            >
              <div className="w-full h-full relative before:content-[''] before:pb-[100%] before:block">
                <img
                  src={skill.src}
                  alt={skill.alt}
                  className="absolute top-0 left-0 w-full h-full"
                />
                {/* <Image
                  src={skill.src}
                  alt={skill.alt}
                  fill
                  className="absolute top-0 left-0 w-full h-full"
                  sizes="(max-width: 100%)"
                /> */}
              </div>
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
};
