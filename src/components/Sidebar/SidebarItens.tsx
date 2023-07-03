'use client'

import Link, { LinkProps } from "next/link"
import { ElementType } from "react"
import { twMerge } from "tailwind-merge"

type SidebarItensProps = {
  text: string
  icon: ElementType
  className?: string
}

export default function SidebarItens({ text, icon: Icon, ...rest }: SidebarItensProps) {
  return (
    <Link href={"/home"} className={twMerge('flex gap-3 ml-3 items-center text-zinc-100 hover:text-red-400 cursor-pointer transition-all active:text-red-400', rest.className)} >
      <Icon className="text-2xl"/>
      <span className="text-lg font-semibold" >{text}</span>
    </Link>
  )
}