import "./styles/main.css";
import logo from "./assets/Logo.svg";
import { MagnifyingGlassPlus } from "phosphor-react"


function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center m-20">
      <img src={logo} />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu
        <span className="text-transparent bg-gradient bg-clip-text px-3">duo</span>
        está aqui
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <div>
          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="game1.png" alt="" />

            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <strong className="font-bold text-white block">
                League of Legends
              </strong>
              <span className="text-zinc-300 text-sm block mt-1">
                4 anúncios
              </span>
            </div>
          </a>
        </div>
        <div>
          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="game2.png" alt="" />

            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <strong className="font-bold text-white block">Dota 2</strong>
              <span className="text-zinc-300 text-sm block mt-1">
                4 anúncios
              </span>
            </div>
          </a>
        </div>
        <div>
          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="game3.png" alt="" />

            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <strong className="font-bold text-white block">
                Counter Strike
              </strong>
              <span className="text-zinc-300 text-sm block mt-1">
                4 anúncios
              </span>
            </div>
          </a>
        </div>
        <div>
          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="game4.png" alt="" />

            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <strong className="font-bold text-white block">
                Apex Legends
              </strong>
              <span className="text-zinc-300 text-sm block mt-1">
                4 anúncios
              </span>
            </div>
          </a>
        </div>
        <div>
          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="game5.png" alt="" />

            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <strong className="font-bold text-white block">Fortnite</strong>
              <span className="text-zinc-300 text-sm block mt-1">
                4 anúncios
              </span>
            </div>
          </a>
        </div>
        <div>
          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="game6.png" alt="" />

            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <strong className="font-bold text-white block">
                World of warcraft
              </strong>
              <span className="text-zinc-300 text-sm block mt-1">
                4 anúncios
              </span>
            </div>
          </a>
        </div>
      </div>

      <div className="pt-1 bg-gradient self-stretch rounded-lg mt-8 overflow-hidden">
        <div className="bg-[#2a2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-white text-2xl font-black block">
              Não encontrou seu Duo
            </strong>
            <span className="text-zinc-400">
              Publique um anúncio para encontrar novos players
            </span>
          </div>

          <button className="py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 flex items-center gap-3">
            <MagnifyingGlassPlus size={24}></MagnifyingGlassPlus>
            Publicar anuncio
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
