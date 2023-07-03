import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='h-screen w-screen flex items-center justify-center my-auto bg-zinc-900'>
        <Link href={"/home"} className="px-12 py-3 bg-zinc-500 rounded-3xl text-zinc-100 transition hover:bg-zinc-100 hover:text-zinc-800">
          Entrar no App
        </Link>
    </div>
  )
}
