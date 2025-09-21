"use client";

import {useSwiper} from "swiper/react";
import {PiCaretLeftBold,PiCaretRightBold} from "react-icons/pi"

const WorkSliderBtns = () => {
    const swiper = useSwiper();
  return (
    <div className="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] 
    xl:bottom-0 z-100 w-full justify-between xl:w-max xl:justify-none">
      <button className="bg-accent hover:bg-accent-hover text-primary 
      text-[22px] w-[44px] h-[44px] flex justify-center transition-all">
        <PiCaretLeftBold size={35} onClick={() => swiper.slidePrev()}/>
      </button>
      <button className="bg-accent hover:bg-accent-hover text-primary 
      text-[22px] w-[44px] h-[44px] flex justify-center transition-all">
        <PiCaretRightBold size={35} onClick={() => swiper.slideNext()}/>
      </button>
    </div>
  )
}

export default WorkSliderBtns
