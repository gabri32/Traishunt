import { useEffect } from "react"
interface Props {
  expired: Date
}

const Component: React.FC<Props> = ({ expired }: Props) => {
  // const [ days, setDays ] = useState(0)
  // const [ hours, setHours ] = useState(0)
  // const [ minutes, setMinutes ] = useState(0)
  // const [ seconds, setSeconds ] = useState(0)
  // const [ showSeconds, setShowSeconds ] = useState(false)

  
  useEffect(() => {
    
    getInitials()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expired])

  const getInitials = async () => {   
    const finish = new Date(expired).getTime()
    const timerId = setInterval(() => {
      const now = new Date().getTime()
      const distance = (finish - now) / 1000
      if(distance > 0) {
        // const days = Math.floor(distance / 60 / 60 / 24)
        // const hours = Math.floor(distance / 60 / 60 % 24)
        // const minutes = Math.floor((distance / 60) % 60)
        // const seconds = Math.floor(distance % 60)
        // setDays(days)
        // setHours(hours)
        // setMinutes(minutes)
        // setSeconds(seconds)
      } else {
        clearInterval(timerId)
      }
    }, 1000)
    return () => clearInterval(timerId)
  }  

  return (
    <> 
      <div className="grid container mx-auto justify-center lg:mt-[-19vh] py-7 px-5 lg:px-24 xl:px-36 relative z-30">
        <div
          className="flex w-full justify-center gap-2 lg:gap-5 group relative overflow-hidden rounded-t-2xl p-4 sm:p-5 text-white bg-[#060C18] transition-all"
          // onMouseOver={() => {setShowSeconds(true)}}
          // onMouseOut={() => {setShowSeconds(false)}}
           >
          <div className="flex flex-col justify-center text-center">
            {/* <span className="text-5xl lg:text-8xl italic font-extralight">{days}.</span>
            <span className="text-xs lg:text-lg font-light color-main uppercase text-start">Días</span> */}
          </div>
          <div className="flex flex-col justify-center text-center">
            {/* <span className="text-5xl lg:text-8xl italic font-extralight">{hours}.</span>
            <span className="text-xs lg:text-lg font-light  color-main uppercase text-start">Horas</span> */}
          </div>
          <div className="flex flex-col justify-center text-center">
            {/* <span className="text-5xl lg:text-8xl italic font-extralight">{minutes}</span>
            <span className="text-xs lg:text-lg font-light  color-main uppercase text-start">Min</span> */}
          </div>
          {/* {showSeconds == true && 
            <div className="flex flex-col justify-center text-center transition-all">
              <span className="text-5xl lg:text-8xl italic font-extralight">{seconds}</span>
              <span className="text-xs lg:text-lg font-light  color-main uppercase text-start">Seg</span>
            </div>
          } */}
        </div>
        <div className="grid w-full gap-4 lg:gap-9  rounded-b-2xl p-5 sm:p-16 lg:px-8 bg-card shadow-xl z-10">
          <h2 className="text-center color-main font-protest text-3xl lg:text-6xl xl:text-7xl">Bienvenidos a Traishunt (dex)</h2>
          <p className="text-white font-extralight text-center px-3 lg:px-16 text-xs lg:text-xl">
            <b className="color-main font-bold">Traishunt</b> es más que una criptomoneda; es la práctica de descubrir las oportunidades ocultas que el mercado ofrece,un ecosistema Defi, guiándote hacia un crecimiento financiero que antes parecía inalcanzable. Pero esto no se limita a las finanzas: es también una metáfora de la vida. Es el arte de perseguir tus sueños y metas con una perseverancia inquebrantable, siguiendo los rastros que te conducirán al éxito. Únete a nosotros en esta búsqueda incansable. Aquí, cada pista, cada rastro que sigues, te acerca un paso más a hacer realidad tus ambiciones. ¡Bienvenido al lugar donde la determinación se encuentra con la oportunidad.
          </p>
        </div>  
      </div>                       
    
    </>
  )
}

export default Component
