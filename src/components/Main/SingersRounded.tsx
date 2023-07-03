import { Heart, Play } from "@phosphor-icons/react"
import Image from "next/image"

interface FavoriteSingersProps {
  singer: string
  fans: string
  src: string
}

export default function FavoriteSingers({ singer, fans, src }: FavoriteSingersProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-col items-center group">
        <Image src={src} alt={""} width={250} height={250} className='w-64 rounded-full transition hover:opacity-80 aspect-square' ></Image>
        <div className="flex gap-2 -translate-y-12 invisible group-hover:visible">
          <div className="text-zinc-900 bg-zinc-100 p-2 rounded-full shadow-2xl transition-all hover:scale-110">
            <Play weight="fill" />
          </div>
          <div className="text-zinc-900 bg-zinc-100 p-2 rounded-full shadow-2xl transition-all hover:scale-110">
            <Heart weight="fill" color="red" />
          </div>
        </div>
      </div>
      <span className="text-zinc-100 font-light">{singer}</span>
      <span className="text-zinc-300 font-light text-xs">{fans}</span>
    </div>
  )
}