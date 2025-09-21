"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";



const Photo = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{
        opacity:1,
        transition:{delay:1,duration:0.4,ease:"easeInOut"},
    }}
    >
    <div className="w-full h-full relative">
      <motion.div intial={{opacity:0}}
      animate={{
        opacity:1,
        transition:{delay:2,duration:0.4,ease:"easeInOut"},
    }}
      >
        <div className="flex flex-col gap-4">
        {/*Image*/}
        <div className="rounded-full">
        <motion.div 
        initial={{opacity:0}}
      animate={{
        opacity:1,
        transition:{delay:2,duration:0.4,ease:"easeInOut"},
      }}
        className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] rounded-full"
        >
            <Image src="/assets/portrait.jpg" priority quality={100} fill
            alt="" className="object-cover rounded-full"/>
        </motion.div>
        </div>
        {/* Circle */}
        {/*here*/}
        <div>
        <motion.svg className= "w-[300px] xl:w-[506px] h-[300px] xl:h-[506px] z-10" 
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns={"http://www.w3.org/2000/svg"}
        >
          <motion.circle
           cx="253" cy="253" r="250" 
           stroke="#00ff99" strokeWidth="4" 
           strokeLinecap="round"
           strokeLinejoin="round"
           />
        </motion.svg>
        </div>
        {/*to here*/}
        </div>
      </motion.div>
    </div>
    </motion.div>
  )
}

export default Photo
