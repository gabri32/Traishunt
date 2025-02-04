import { useState } from "react"
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5"

interface Props {
  title: string,
  text: string | JSX.Element
}

const Component: React.FC<Props> = ({ title, text }: Props) => {
  const [ accordionOpen, setAccordionOpen ] = useState(false)

  return (
    <>
      <div className="p-2 sm:p-3 hover:shadow-xl duration-200  rounded-2xl hover:bg-white hover:text-[#101A3e] text-white  bg-gradient-to-r from-blue-950/30 hover:from-white" >
        <button 
          onClick={() => setAccordionOpen(!accordionOpen)} 
          className="flex justify-between w-full"
        >
          <h3 className="text-sm sm:text-xl xl:text-2xl font-bold text-start w-11/12 ">{title}</h3>
          {
            accordionOpen 
            ? <IoChevronUpOutline size={30} className="m-2 mt-[-5px] mb-[-5px]"/>
            : <IoChevronDownOutline size={30} className="m-2 mt-[-5px] mb-[-5px]"/>
          }
        </button>
        <div 
          className={
            `grid overflow-hidden transition-all 
            ${
              accordionOpen 
              ? 'grid-rows-[1fr] opacity-100' 
              : 'grid-rows-[0fr] opacity-0'
            }`
          }
        >
          <p className="overflow-hidden">
            <span className="p-2 leading-4">
              <span className="text-xs lg:text-base xl:text-lg font-light">
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
