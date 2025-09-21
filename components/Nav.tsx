"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name:'home',
    path:'/'
  },
  {
    name:'services',
    path:'/services'
  },
  {
    name:'resume',
    path:'/resume'
  },
  {
    name:'work',
    path:'/work'
  },
  {
    name:'contact',
    path:'/contact'
  }
]

const Nav = () => {
  const pathname = usePathname();
  // console.log(pathname);
  return (
    <nav className="xl:flex gap-8">
      {/* desktop nav */}
      {
        links.map((link,index)=>(
          <Link href={link.path} key={index} className={`${pathname === link.path ? 'text-accent border-b-2 border-accent' : ''} hover:text-accent transition-all capitalize font-medium`}>
            {link.name}
          </Link>
        ))
      }
    </nav>
  )
}

export default Nav
