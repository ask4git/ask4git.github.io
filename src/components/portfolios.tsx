"use client"

import Image from "next/image"
import { motion } from "framer-motion"

import { modifiedRotateArray } from "@/lib"
import { PORTFOLIOS } from "@/constants/portfolios"

export const Portfolios = () => {
  return (
    <div className="flex items-center pb-72 max-w-[1320px] m-auto">
      <div className="w-[full] gap-8 gap-y-8 grid grid-cols-2">
        {PORTFOLIOS.map((portfolio, index) => {
          const inverseRatio = portfolio.isInverse

          const style = {
            ...(inverseRatio && { maxWidth: "30%" }),
          }

          const rotateValue = modifiedRotateArray
          return (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{
                opacity: 1,
                scale: [0, 1, 1.05, 1],
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              key={index}
              className="h-[110px] w-[248px] shadow-lg rounded-lg flex items-center justify-center"
              whileHover={{
                rotate: rotateValue,
              }}
            >
              <img
                width={198}
                height={40}
                src={portfolio.src}
                alt={portfolio.alt}
                style={style}
              />
              {/* <Image
                width={198}
                height={40}
                src={portfolio.src}
                alt={portfolio.alt}
                style={style}
              /> */}
            </motion.div>
          )
        })}
      </div>

      <h4 className="flex-1 flex flex-col text-[4.5rem] font-[900] pl-40 leading-tight">
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
          다양한 경험을
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
          바탕으로 아이디어를
        </motion.p>
        <motion.p
          initial={{ opacity: 0, translateX: -100 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.6,
          }}
          className="relative w-fit"
        >
          완성합니다.
        </motion.p>
      </h4>
    </div>
  )
}
