"use client"
import { Link } from "lucide-react"

import {FaGithub,FaLinkedinIn} from 'react-icons/fa'
import {FaXTwitter} from 'react-icons/fa6'

const links=[
    {icon:<FaGithub/>,path:"https://github.com/nishad-dhuri-05/"},
    {icon:<FaXTwitter/>,path:"https://www.youtube.com/watch?v=e_VgemFfGHo"},
    {icon:<FaLinkedinIn/>,path:"https://www.youtube.com/watch?v=e_VgemFfGHo"},
]

const Socials = ({containerStyles,iconStyles}:{
  containerStyles?: string
  iconStyles?: string
}) => {
  return (
    <div className={containerStyles}>
      {links.map((link,index)=>(
        <a
        key={index}
        href={link.path}
        className={iconStyles}
        target="_blank"
        rel="noopener noreferrer"
        >
          {link.icon}
        </a>
      ))}
    </div>
  )
}

export default Socials
