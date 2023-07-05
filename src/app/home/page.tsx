'use client'
import SectionMain from "@/components/Main/SectionMain";
import SingersGrid from "@/components/Main/SingersGrid";
import FavoriteSingers from "@/components/Main/SingersRounded";
import SidebarItens from "@/components/Sidebar/SidebarItens";
import SidebarSpan from "@/components/Sidebar/SidebarSpans";
import { favoriteSingersData } from "@/data/singer";
import { Bell, CaretLeft, CaretRight, Heart, MagnifyingGlass, Microphone, MusicNotes, Pause, Play, Plus, Radio, SkipBack, SkipForward, Sliders, SquaresFour } from "@phosphor-icons/react";
import { Repeat, Shuffle, Volume2 } from "lucide-react";
import { useState } from "react";


export default function HomePage() {

  const nameMusic = 'Life Letters'

  const [isPlaying, setIsPlaying] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  function handleClickPlay() {
    setIsPlaying(!isPlaying)
  }

  function handleClickHeart() {
    setIsFavorite(!isFavorite)
  }

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
                className="pb-24"
              />
            </div>
          </div>
        </aside>
        <main className="flex flex-1 flex-col relative">
          <header className="flex items-center h-16 w-[100%] justify-between border-b border-zinc-700">
            <div className="flex gap-4 ml-8">
              <MagnifyingGlass size={24} weight="thin" className="text-zinc-300" />
              <input 
              type='text' 
              placeholder="Buscar" 
              className="px-2 w-96 bg-zinc-900 text-zinc-100 font-light focus:outline-none" 
            /> 
            </div>
            <div className="flex items-center gap-6 mr-8">
              <Bell size={24} className="text-zinc-200" weight="fill" />
              <div className="bg-zinc-200 w-8 h-8 rounded-full"></div>
            </div>
          </header>
          <div className="overflow-y-auto max-h-[calc(100vh-8rem)] scrollbar-thin scrollbar-thumb-zinc-700 pb-4">
            <SectionMain
              title="Seus artitas favoritos"
            >
              {
                favoriteSingersData.map(function (item) {
                  return (
                    <FavoriteSingers
                      fans={item.fans}
                      singer={item.singer}
                      src={item.src}
                      key={item.key}
                    />
                  )
                })
              }
            </SectionMain>
            <div className="mt-16 flex flex-col pb-8">
              <SectionMain
                title="Feito para você"
              >
                <div className="flex gap-6 justify-center">
                  <SingersGrid
                    ImageGrid="/ImageGrid.jpg"
                  />
                  <SingersGrid
                    ImageGrid="/ImageGrid.jpg"
                  />
                  <SingersGrid
                    ImageGrid="/ImageGrid.jpg"
                  />
                  <SingersGrid
                    ImageGrid="/ImageGrid.jpg"
                  />
                </div>
              </SectionMain>
            </div>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 absolute bottom-0 w-full flex justify-between">
        <div className="flex items-center gap-4">
          <div className="text-zinc-500 p-2 transition-all hover:bg-zinc-600 hover:rounded-full hover:text-zinc-100">
            <SkipBack size={18} weight='fill' />
          </div>
          <button
            onClick={handleClickPlay}
            className="text-zinc-200 p-2 transition-all hover:bg-zinc-600 hover:rounded-full hover:text-zinc-100">
            {
            isPlaying 
            ?   
            <Pause size={30} weight='fill' />
            : 
            <Play size={30} weight='fill' /> 
            }
          </button>
          <div className="text-zinc-200 p-2 transition-all hover:bg-zinc-600 hover:rounded-full hover:text-zinc-100">
            <SkipForward size={18} weight='fill' />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <span className="text-zinc-200 ml-14 text-sm">{nameMusic}</span>
            <div className="mr-16 flex gap-2">
              <div className="text-zinc-200 p-2 transition-all hover:bg-zinc-600 hover:rounded-full hover:text-zinc-100">
                <Plus className="w-4 h-4" />
              </div>
              <div
                onClick={handleClickHeart}
                className="text-zinc-200 p-2 transition-all hover:bg-zinc-600 hover:rounded-full hover:text-zinc-100">
                {isFavorite ?<Heart className="w-4 h-4" weight="fill" color="red" /> :  <Heart className="w-4 h-4" />  }
              </div>
            </div>
          </div>
          <div className="flex mt-1 items-center gap-2">
            <span className="text-xs text-zinc-300">00:00</span>
            <div className="w-[50vw] bg-zinc-400 h-[3px] rounded-lg"></div>
            <span className="text-zinc-300 text-xs">02:27</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center">
            <div className="text-zinc-100 p-2 transition-all hover:bg-zinc-600 hover:rounded-full hover:text-zinc-100">
              <Repeat className="w-4 h-4" strokeWidth={'1.5'} />
            </div>
            <div className="text-zinc-100 p-2 transition-all hover:bg-zinc-600 hover:rounded-full hover:text-zinc-100">
              <Shuffle className="w-4 h-4" strokeWidth={'1.5'} />
            </div>
            <div className="text-zinc-100 p-2 transition-all hover:bg-zinc-600 hover:rounded-full hover:text-zinc-100">
              <Volume2 className="w-4 h-4" strokeWidth={'1.5'} />
            </div>
            <div className="text-zinc-100 p-2 transition-all hover:bg-zinc-600 hover:rounded-full hover:text-zinc-100">
              <Sliders className="w-4 h-4" weight='light' />
            </div>
          </div>
          <div className="border-r h-12 border-zinc-700"></div>
          <div className="flex items-center justify-center gap-2 p-2 rounded-md border-zinc-700 hover:bg-zinc-400">
            <div className="bg-zinc-500 w-8 h-8 rounded-md "></div>
            <span className="text-xs text-zinc-200 font-light" >Fila de espera</span>
          </div>
        </div>
      </footer>
    </div>
  )
}