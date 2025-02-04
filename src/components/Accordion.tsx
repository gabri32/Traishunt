import { useState } from "react"
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5"

interface Props {
  title: string,
  subtitle: string,
  text: string
}

const Component: React.FC<Props> = ({ title, subtitle, text }: Props) => {
  const [ accordionOpen, setAccordionOpen ] = useState(false)

  return (
    <>
      <div className="p-4 sm:p-9 pb-2 sm:pb-5 hover:shadow-xl duration-200  rounded-2xl bg-[#101A3E] color-main" >
        <button 
          onClick={() => setAccordionOpen(!accordionOpen)} 
          className="flex justify-between w-full"
        >
          <h3 className="text-base sm:text-2xl xl:text-4xl font-bold text-start w-11/12 text-white">{title}</h3>
          <h4 className="text-sm mt-1 lg:mt-0 sm:text-2xl xl:text-4xl font-light text-end w-11/12">{subtitle}</h4>
          {
            accordionOpen 
            ? <IoChevronUpOutline size={50} className="m-2 mt-[-9px]"/>
            : <IoChevronDownOutline size={50} className="m-2 mt-[-9px]"/>
          }
        </button>
        <div 
          className={
            `grid overflow-hidden transition-all duration-300 ease-in-out 
            ${
              accordionOpen 
              ? 'grid-rows-[1fr] opacity-100' 
              : 'grid-rows-[0fr] opacity-0'
            }`
          }
        >
          <p className="overflow-hidden  text-white">
            <span className="lg:py-7">
              <span className="text-sm lg:text-base xl:text-lg color-main font-bold">Objetivo</span>
              <br />
              <span className="text-sm lg:text-base xl:text-lg font-light">
                {text}
              </span>
            </span>
          </p>
        </div>
      </div>
    </>
  )
}

export default Component
