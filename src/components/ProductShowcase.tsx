"use client";
import {motion, useScroll, useTransform} from "framer-motion";
import Image from "next/image";
import appScreen from "../assets/images/app-screen.png";
import { useRef } from "react";

export const ProductShowcase = () => {

  const appImage = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: [
    'start end','end start'
    ]
  })
  const rotateX = useTransform(scrollYProgress, [0,1], [15,0]);
  const opacity = useTransform(scrollYProgress, [0,1], [0.5,1]);

  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D3CA8] py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl md:text-6xl font-bold tracking-tighter">Intuitive interface</h2>
        <div className="max-w-xl mx-auto">
        <p className="text-white/70 text-center mt-5 sm:text-xl">Celebrate the joy of accomplishment with an app designed to track your progress, motivates your efforts and celebrate your successes, one task at a time.</p>
        </div>
        <div className="flex items-center justify-center">
        <motion.div
        style={{
          opacity: opacity,
          rotateX: rotateX,
          transformPerspective: "800px"
        }}
        >
        <Image
        src={appScreen}
        alt="The product screenshot"
        className="mt-14"
        ref={appImage}
        />
        </motion.div>
        </div>
      </div>
    </div>
  )
};
