"use client"

import {motion} from "framer-motion"
import React ,{useState} from "react"

import {Swiper, SwiperSlide} from 'swiper/react'

import "swiper/css"

import {BsArrowUpRight, BsGithub} from 'react-icons/bs'

import { Tooltip,TooltipContent,TooltipTrigger,TooltipProvider } from "@/components/ui/tooltip"

import Link from "next/link"

import Image from "next/image"

import WorkSliderBtns from "@/components/WorkSliderBtns"

const projects =[
  {
    num:'01',
    category:'Full Stack Web Development',
    title:'Docify',
    description:'A web application for automating documentations.',
    stack:[
      {
        name:'Next.js',
      },
      {
        name:'TypeScript',
      },
      {
        name:'Prisma',
      },
      {
        name:''
      }
    ],
    image:'/assets/Docify.png',
    live:'',
    github:''
  },
  {
    num:'02',
    category:'AI-ML Research',
    title:'Improved Decision Transformer',
    description:'Researching improvements to the Decision Transformer framework',
    stack:[
      {
        name:'Python'
      },
      {
        name:'PyTorch'
      }
    ],
    image:'/assets/Docify.png',
    live:'',
    github:''
  }
]



const Work = () => {
  const [project,setProject]=useState(projects[0])

  const handleSlideChange = (swiper:any) => {
    setProject(projects[swiper.activeIndex])
  }

  return (
    <motion.section initial={{opacity:0}} 
    animate={{opacity:1, transition:{delay:2.4,duration:0.4,ease:"easeInOut"}}}
    className="min-h-[80vh] flex flex-col justify-center 
    py-12 xl:px-0">
      <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* text */}
          <div className="w-full xl:w-[50%] xl:h-[460px] 
          flex flex-col xl:justify-between order-2 xl:order-none xl:flex-row">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Outline Num*/}
              <div className="text-8xl leading-none font-extrabold 
              text-transparent text-outline">{project.num}
              </div>
              {/* Category */}
              <h2 className="text-[42px] font-bold leading-none text-white
              group-hover:text-accent transition-all duration-500 capitalize">{project.category}
              </h2>
              {/* description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4 ">
                {project.stack.map((item,index)=>(
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index!==project.stack.length-1 && ','}
                  </li>
                ))}
              </ul>
              {/* border */}
              <div className="border border-white/20 ">
              </div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* Live project button */}
                <a href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                       bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent className="bg-accent text-black">
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </a>

                {/* GitHub button */}
                <a href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                       bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent className="bg-accent text-black">
                        <p>GitHub repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </a>
              </div>
           </div>
           </div>
           {/*slider  */}
          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project,index)=>(
                <SwiperSlide key={index}
                className="w-full"
                >
                  <div className="w-full h-[460px] relative group flex justify-center
                  items-center bg-pink-50/20">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full
                     bg-black/10 z-10">
                    </div>
                    {/* image */}
                    <div className="relative w-full h-full ">
                      <Image src={project.image} fill alt={project.title}
                      className="object-cover"/>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* slider buttons */}
              <WorkSliderBtns />
            </Swiper>
          </div>
      </div>
      </div>
    </motion.section>
  )
}

export default Work
