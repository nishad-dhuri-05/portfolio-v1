"use client";

import { animate, motion } from "framer-motion";

//variants
const stairAnimation={
    initial :{
        top:"0%",
    },
    animate :{
        top:"100%",
    },
    exit:{
        top:["100%","0%"],
    }
}

//calculate the reverseindex for each staggered eelay

const reverseIndex=(index)=>{
  const totalSteps=6;
  return totalSteps - index-1;
}

const Stairs = () => {
  return (
    <>
      {/* render 6 motion divs each representing a step of the stairs
      each div will have the same animation defined by the stairsanimation object
      The delay for each div is calculated dynmaically based on its reversed index
      creating a staggered effect with decreasing delay for each subsequent step
       */}
      {[...Array(6)].map((_,index)=>(
        <motion.div 
        key={index}
        variants={stairAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: 0.4,
          ease: "easeInOut",
          delay: reverseIndex(index) * 0.1
        }}
        className="h-full w-full bg-white relative"
      />
      ))}
    </>
  )
}

export default Stairs
