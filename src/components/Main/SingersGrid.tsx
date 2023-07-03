import { Play } from '@phosphor-icons/react'
import Image from 'next/image'

interface SingersGridProps {
  ImageGrid: string
}

export default function SingersGrid({ ImageGrid }: SingersGridProps) {
  return (
    <>
      <div className="overflow-hidden ">
        <Image className='rounded-xl transition-all hover:opacity-80 w-64 aspect-square' alt='' src={ImageGrid} width={270} height={270}></Image>
        <div className="text-zinc-900 p-2 w-12 h-12 transition-all  -translate-y-40 translate-x-28 bg-zinc-100 hover:bg-zinc-400/95 rounded-full flex items-center justify-center 
        lg:-translate-y-32 lg:translate-x-20
        xl:-translate-y-32 xl:translate-x-20"
        >
          <Play size={24} weight='fill' />
        </div>
      </div>
    </>
  )
}