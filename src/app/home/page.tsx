'use client'
import SidebarItens from "@/components/SidebarItens";
import SidebarSpan from "@/components/SidebarSpans";
import Image from "next/image";
import { MusicNotes, CaretLeft, CaretRight, Heart, SquaresFour, Radio, Microphone, MagnifyingGlass, Bell } from "@phosphor-icons/react";
import FavoriteSingers from "@/components/SingersRounded";
import SingersSquare from "@/components/SingersSquare";

export default function HomePage() {
  return (
    <div className="h-screen flex flex-col bg-zinc-900 ">
      <div className="flex flex-1 ">
        <aside className="bg-zinc-700/40 w-60 h-screen transition-all overflow-y-hidden hover:overflow-y-scroll overflow-x-clip scrollbar-thin scrollbar-thumb-zinc-700 border-r border-zinc-700">
          <div className="flex flex-col gap-8 m-4">
            <div className="flex gap-1 mt-4">
              <CaretLeft className="text-zinc-100 cursor-pointer" />
              <CaretRight className="text-zinc-100 cursor-pointer" />
            </div>
            <div className="flex flex-col items-center bg-gradient-to-r from-blue-600 to-blue-300 rounded-lg p-4 h-52 w-52">
              <span className="text-sm font-light text-left text-zinc-200 mt-2">Você está na versão Deezer Free. Faça o upgrade e pule os anúncios, de graça, por 1 mês</span>
              <a href={"https://www.buymeacoffee.com/Jjooaogab"} className='font-bold mt-6 outline outline-1 text-zinc-100 px-14 py-2 rounded-3xl transition duration-300 hover:bg-white/20' >ASSINAR</a>
            </div>
            <div className="flex flex-col gap-6">
              <SidebarItens
                text="Música"
                icon={MusicNotes}
                className="active"
              />
              <SidebarItens
                text="Podcasts"
                icon={Microphone}
              />
              <SidebarItens
                text="Rádios"
                icon={Radio}
              />
              <SidebarItens
                text="Explorar"
                icon={SquaresFour}
              />
              <SidebarItens
                text="Favoritos"
                icon={Heart}
              />
            </div>
            <div className="flex flex-col gap-6 ml-12">
              <SidebarSpan
                text="Mais queridas"
              />
              <SidebarSpan
                text="Playlists"
              />
              <SidebarSpan
                text="Álbuns"
              />
              <SidebarSpan
                text="Artistas"
              />
              <SidebarSpan
                text="Podcasts"
              />
              <SidebarSpan
                text="Concerts"
                className="pb-20"
              />
            </div>
          </div>
        </aside>
        <main className="flex flex-1 flex-col relative">
          <header className="flex items-center h-16 w-[100%] justify-between border-b border-zinc-700">
            <div className="flex gap-4 ml-8">
              <MagnifyingGlass size={24} weight="thin" className="text-zinc-300" />
              <input type='text' placeholder="Buscar" className="px-2 w-96 bg-zinc-900 text-zinc-100 font-light focus:outline-none" />
            </div>
            <div className="flex items-center gap-6 mr-8">
              <Bell size={24} className="text-zinc-200" weight="fill" />
              <div className="bg-zinc-200 w-8 h-8 rounded-full"></div>
            </div>
          </header>
          <div className="overflow-y-auto max-h-[calc(100vh-8rem)] scrollbar-thin scrollbar-thumb-zinc-700 pb-4">
            <div className="mt-16 flex flex-col">
              <h3 className="ml-24 mb-8 text-zinc-100 font-semibold text-2xl">Seus artitas favoritos</h3>
              <div className="flex gap-6 justify-center">
                <FavoriteSingers 
                src="/rickAstley.jpg"
                singer="Rick Astley"
                fans="173.837 fãs"
                />
                <FavoriteSingers 
                src="/eminemAvatar.jpg"
                singer="Rick Astley"
                fans="16.383.967 fãs"
                />
                <FavoriteSingers 
                src="/siaAvatar.jpg"
                singer="Sia"
                fans="7.810.124 fãs"
                />
                <FavoriteSingers 
                src="/articMonkeys.png"
                singer="Artic Monkeys"
                fans="4.167.886 fãs"
                />
              </div>
            </div>
            <div className="mt-16 flex flex-col">
              <h3 className="ml-24 mb-8 text-zinc-100 font-semibold text-2xl">Feito para você</h3>
              <div className="flex gap-6 justify-center">
                <SingersSquare 
                src="/rickAstley.jpg"
                singer="Rick Astley"
                fans="173.837 fãs"
                />
                <SingersSquare 
                src="/eminemAvatar.jpg"
                singer="Rick Astley"
                fans="16.383.967 fãs"
                />
                <SingersSquare 
                src="/siaAvatar.jpg"
                singer="Sia"
                fans="7.810.124 fãs"
                />
                <SingersSquare 
                src="/articMonkeys.png"
                singer="Artic Monkeys"
                fans="4.167.886 fãs"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6 absolute bottom-0 w-full">
        Footer
      </footer>
    </div>
  )
}