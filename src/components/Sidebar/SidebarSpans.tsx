import { twMerge } from 'tailwind-merge'

interface SidebarSpanProps {
  text: string;
  className?: string
}

export default function SidebarSpan({ text, ...rest }: SidebarSpanProps) {
  return <span className={twMerge("text-zinc-500 font-normal text-xs cursor-pointer", rest.className)}>{text}</span>
}