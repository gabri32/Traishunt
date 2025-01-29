import { useEffect, useState } from "react"

interface Props {
  expired: Date
}

const Component: React.FC<Props> = ({ expired }: Props) => {
  const [ days, setDays ] = useState(0)
  const [ hours, setHours ] = useState(0)
  const [ minutes, setMinutes ] = useState(0)

  
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
        const days = Math.floor(distance / 60 / 60 / 24)
        const hours = Math.floor(distance / 60 / 60 % 24)
        const minutes = Math.floor((distance / 60) % 60)
        setDays(days)
        setHours(hours)
        setMinutes(minutes)
      } else {
        clearInterval(timerId)
      }
    }, 1000)
    return () => clearInterval(timerId)
  }  

  return (
    <> 
      <div className=" relative z-30 flex justify-center w-full">
        <div className="flex w-fit justify-center gap-2 lg:gap-5 group relative overflow-hidden rounded-2xl p-4 sm:p-5 sm:px-11 text-white bg-[#060C18] transition-all">
          <div className="flex flex-col justify-center text-center">
            <span className="text-5xl lg:text-7xl italic font-extralight">{days}.</span>
            <span className="text-xs lg:text-sm font-light color-main uppercase text-start">Días</span>
          </div>
          <div className="flex flex-col justify-center text-center">
            <span className="text-5xl lg:text-7xl italic font-extralight">{hours}.</span>
            <span className="text-xs lg:text-sm font-light  color-main uppercase text-start">Horas</span>
          </div>
          <div className="flex flex-col justify-center text-center">
            <span className="text-5xl lg:text-7xl italic font-extralight">{minutes}</span>
            <span className="text-xs lg:text-sm font-light  color-main uppercase text-start">Min</span>
          </div>
        </div>  
      </div>                       
    
    </>
  )
}

export default Component
