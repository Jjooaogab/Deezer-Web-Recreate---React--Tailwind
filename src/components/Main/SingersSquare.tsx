import Image from "next/image"

interface FavoriteSingersProps {
  singer: string
  fans: string
  src: string
}

export default function SingersSquare({ singer, fans, src }: FavoriteSingersProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <Image src={src} alt={""} width={280} height={280} className='rounded-lg transition hover:bg-black/20' ></Image>
      <span className="text-zinc-100 font-light">{singer}</span>
      <span className="text-zinc-300 font-light text-xs">{fans}</span>
    </div>
  )
}