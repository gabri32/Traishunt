
import { MdConnectWithoutContact } from "react-icons/md"
import { LuBuilding2 } from "react-icons/lu"
import { RiWhatsappFill } from "react-icons/ri"
import { AiFillInstagram } from "react-icons/ai"
import { FaFacebook } from "react-icons/fa"

const Component = () => {
  const date = new Date()

  return (
    <>
     <footer className={`bg-footer backdrop-blur sm:backdrop-blur-2xl py-16 urbanist`}>
        <div className="container mx-auto grid sm:grid-cols-4 pb-3 gap-5 px-9 sm:px-0">
          <a className="flex justify-center text-4xl font-black text-white cursor-pointer" href="#">
            <div className="font-normal text-black font-protest text-4xl lg:text-7xl">Traishunt</div>
          </a>
          <div className="flex sm:justify-center">
            <div className="grid">
              <div  className="text-black text-xs flex gap-3 font-bold"><small className="opacity-60 text-2xl "><LuBuilding2 /></small>EMPRESA</div>
              <div className="grid gap-2 mt-3 font-light text-sm">
                <a href="#">Términos y condiciones</a>
                <a href="#">Legalidad</a>
                <a href="#">Inversionistas</a>
                <a href="#">Whitepaper</a>
              </div>
            </div>
          </div>
          <div className="flex sm:justify-center">
            <div className="grid">              
              <div className="text-black text-xs flex gap-3 font-bold"><small className="opacity-60 text-2xl"><MdConnectWithoutContact /></small>CONTACTO</div>
              <div className="grid gap-2 mt-3 font-light text-sm">
                <a href="#">preventatraishunt@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="grid gap-2  sm:justify-center transition-all">
            <div className="flex text-black text-4xl gap-5">
              <a href="#" target="_blank" rel="noreferred" className="flex gap-2">
                <RiWhatsappFill className="opacity-90 rounded-full"/>
              </a>
              <a href="#" target="_blank" rel="noreferred" className="flex gap-2">
                <AiFillInstagram className="opacity-90 rounded-full"/>
              </a>
              <a href="#" target="_blank" rel="noreferred" className="flex gap-2">
                <FaFacebook className="opacity-90 rounded-full"/>
              </a>
            </div>
          </div>
        </div>
        <div className="opacity-70 text-center text-black hover:opacity-100 mt-10">
          <small> ©2024 - {date.getFullYear()} Traishunt, Todos los derechos reservados.</small>
        </div>
      </footer>
    </>
  )
}

export default Component