"use client";
import {motion} from 'framer-motion';
import ArrowIcon from '@/assets/icons/arrow-w.svg';
import cursorImage from '@/assets/images/cursor.png';
import messsageImage from '@/assets/images/message.png';
import Image from 'next/image';

export const Hero = () => {
  return (
    <div className="bg-black text-white bg-gradient-to-b from-black via-[#200D42] to-[#4F21A1] 65% to-[#A46EDB] py-[72px] sm:py-24 relative overflow-clip">
      <div className="absolute bg-black h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] left-1/2 -translate-x-1/2 border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]">
      </div>
      <div className="container relative">
        <div className="flex items-center justify-center">
          <a href="#" className="border py-1 px-3 rounded-lg border-white/30 inline-flex gap-2">
            <span className="bg-gradient-to-r from-red-500 via-pink-500 via-yellow-500 to-blue-500 text-transparent bg-clip-text">
              Version 2.0 is here
            </span>
            <span className="pr-2 inline-flex items-center gap-1">
              <span>Read More</span>
              <ArrowIcon />
            </span>
          </a>
        </div>
        <div className="flex justify-center">
          <div className='inline-flex relative'>
          <h1 className='text-7xl sm:text-9xl font-bold tracking-tighter text-center mt-8 inline-flex'>
            One Task <br /> at a Time
          </h1>
          <motion.div className="absolute right-[476px] top-[130px] hidden sm:inline"
          drag
          //dragSnapToOrigin
          >
          <Image 
          src={cursorImage}alt='' height={200} width={200} className="max-w-none"
          draggable="false"
          />
          </motion.div>
          <motion.div className="absolute left-[506px] top-[90px] hidden sm:inline"
          drag
          //dragSnapToOrigin
          >
          <Image 
          src={messsageImage}alt='' height={200} width={200} className='max-w-none'
          draggable="false"
          />
          </motion.div>
          </div>
        </div>
        <div className="flex justify-center">
        <p className="text-xl text-center mt-8 max-w-md hidden sm:inline">
          Celebrate the joy of accomplishment with an app designed to track progress, motivate your efforts, and Celebrate your successes.
        </p>
        </div>
        <div className="flex justify-center mt-8">
          <button className=" bg-white text-black rounded-lg px-5 py-3">
            Get for free
          </button>
        </div>
      </div>
    </div>
  )
};
