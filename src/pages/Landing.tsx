import { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Roadmap from '../components/Roadmap'
import Countdown from '../components/Countdown'
import Accordion from '../components/Accordion'
import AccordionLight from '../components/AccordionLight'
import Chart from '../components/Chart'
import Presale from '../components/Presale'
import Slider from '../components/Slider'
import How from '../components/How'
import Footer from '../components/Footer'
import grafic1 from '../assets/grafic1.png'
import grafic2 from '../assets/grafic2.png'
import grafic3 from '../assets/grafic3.png'
import grafic4 from '../assets/grafic4.png'
import grafic5 from '../assets/grafic5.png'
import grafic6 from '../assets/grafic6.png'
import grafic7 from '../assets/grafic7.png'
import grafic8 from '../assets/grafic8.png'
import grafic10 from '../assets/grafic10.png'
import grafic11 from '../assets/grafic11.png'
import grafic12 from '../assets/grafic12.png'
import grafic13 from '../assets/grafic13.png'
import videoHeader from '../assets/video.mp4'
import es from '../assets/es.mp4'
import en from '../assets/en.mp4'
import poster from '../assets/poster.png'
import tsh from '../assets/tsh.png'
import polygon from '../assets/polygon.png'
import { FaPlus } from "react-icons/fa"


const Page = (): JSX.Element => {
  const [video, setVideo] = useState(es)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const date = new Date("12-25-2024")

  const changeVideo = (lang: string) =>{
    if(lang == "es") setVideo(es)
    else setVideo(en)
  }

  return (
    <>
      <Nav/>
      <div className="bg">
        <div className="h-screen overflow-hidden opacity-10 blur-sm sm:blur">
          <video autoPlay loop muted src={videoHeader} className="h-screen w-full object-cover">
            Tu navegador no admite el elemento <code>video</code>.
          </video>
        </div>
      </div>
      <header className="h-screen w-full">
        <div className="container mx-auto sm:z-10 block px-7 lg:px-16 relative">
          <div className="grid h-screen place-content-end sm:place-content-center sm:justify-start">
            <i className="text-white text-xl leading-4 lg:text-4xl lg:leading-7 font-bai italic">Desbloquea <br /> el <br />futuro</i>
            <h1 className="text-7xl sm:text-9xl xl:[font-size:12rem] sm:[line-height:1;] font-protest text-white">Traishunt</h1>
            <span className="w-full sm:pe-32 sm:w-2/3 text-lg lg:text-3xl color-main leading-5">Sé parte de la revolución en Finanzas descentralizadas</span>
            <a href="#presale" className="bg-main rounded-full w-fit px-7 lg:px-14 py-2 text-lg lg:text-2xl mt-9 mb-16 sm:mt-16 sm:mb-0 lg:font-semibold hover:bg-black hover:text-teal-400 transition-all">PARTICIPAR EN PREVENTA</a>
          </div>
        </div>
        <div className="block relative opacity-50 lg:opacity-100 z-0">
          <img src={grafic1} alt="" className="absolute right-24 sm:right-40 w-[200px] sm:w-[400px] bottom-72 sm:bottom-0 hover:hue-rotate-60 transition-all" />
          <img src={grafic2} alt="" className="absolute right-0 bottom-96 sm:bottom-48 w-[140px] sm:w-[250px] hover:hue-rotate-60 transition-all" />
          <img src={grafic3} alt="" className="absolute right-12 sm:right-24 bottom-[34rem] sm:bottom-[30rem] w-[39px] sm:w-[70px] hover:hue-rotate-60 transition-all" />
        </div>
      </header>
      <Countdown expired={date}/>
      <Roadmap/>
      <section className="sm:container mx-auto sm:z-10 block sm:p-7 sm:px-5 lg:px-16 xl:px-32 relative">
        <div className="bg-card-b grid sm:rounded-2xl p-3 py-11 lg:p-20 gap-7 lg:gap-14">
          <div className="grid text-center">
            <h2 className="font-protest text-4xl lg:text-7xl">Tokenomics</h2>
            <span className="font-light text-white text-xl lg:text-3xl">Traishunt</span>
          </div>
          <div className="grid lg:grid-cols-3 gap-5 lg:gap-9 px-16 lg:px-0">
            <div className="bg-white/50 border-4 border-white rounded-2xl p-5 text-center grid place-content-center hover:bg-white transition-all hover:shadow-xl hover:border-black">
              <img src={tsh} alt=""  className="w-full"/>
              <span className="font-bold text-2xl lg:text-3xl">TRAISHUNT</span>
              <span className="text-lg xl:text-xl">Token</span>
            </div>
            <div className="bg-white/50 border-4 border-white rounded-2xl p-5 text-center grid place-content-center hover:bg-white transition-all hover:shadow-xl hover:border-black">
              <span className="font-bold text-3xl lg:text-4xl xl:text-5xl font-protest my-12">TRAISHUNT</span>
              <span className="font-bold text-2xl lg:text-3xl">21.000.000</span>
              <span className="text-lg xl:text-xl">Tokens</span>
            </div>
            <div className="bg-white/50 border-4 border-white rounded-2xl p-5 text-center grid place-content-center hover:bg-white transition-all hover:shadow-xl hover:border-black">
              <img src={polygon } alt=""  className="w-full"/>
              <span className="font-bold text-2xl lg:text-3xl">RED POL</span>
              <span className="text-lg xl:text-xl">(Polygon pos chain)</span>
            </div>
          </div>
          <span className="text-xl lg:text-3xl font-light text-center text-white">Distribución</span>
          <div className="grid gap-2 lg:gap-6 2xl:px-32">
            <Accordion title="5% Preventa" subtitle="1.050.000 tokens" text="Recaudar fondos iniciales para el desarrollo del proyecto."/>
            <Accordion title="25% DEX (Liquidity Pool)" subtitle="5.250.000 tokens" text="Poporcionar liquidez a las plataforma descentralizada (DEX) para permitir que las transacciones se realicen de manera eficiente y descentralizada. ."/>
            <Accordion title="5% Promoción y Marketing" subtitle="1.050.000 tokens" text="Llegar a mas usuarios para el crecimiento del proyecto."/>
            <Accordion title="10% Staking" subtitle="2.100.000 tokens" text="Obtener recompensas al bloquear y mantener los fondos en una billetera digital, además de contribuir a la seguridad de la red blockchain."/>
            <Accordion title="15% Equipo" subtitle="3.150.000 tokens" text="Equipo de trabajo"/>
            <Accordion title="30% Distribución general" subtitle="6.300.000 tokens" text="Distribución general."/>
          </div>
          <span className="text-xl lg:text-3xl font-light text-center text-white">Gráfico de distribución</span>
          <Chart/>
        </div>
      </section>
      <section className="sm:container mx-auto sm:z-10 block sm:p-7 sm:px-5 lg:px-16 xl:px-32 relative">
        <div className="grid w-full gap-4 lg:gap-9 rounded-2xl p-5 sm:p-16 bg-card shadow-xl relative">
          <div className="flex">
            <div className="hidden sm:block xl:w-1/3">
              <img src={grafic8} alt="" className="w-full lg:w-2/3 xl:w-5/12 absolute bottom-0 left-0 lg:ms-[-5vw]" />
            </div>
            <div className="w-full xl:w-2/3 z-10 p-5  sm:bg-indigo-950/50 rounded-2xl backdrop-blur-md xl:p-0 xl:bg-transparent">
              <div className="grid gap-7">
                <div className="grid">
                  <h2 className="text-end color-main font-protest text-3xl lg:text-5xl">Beneficios Exclusivos para validadores</h2>
                  <h2 className="text-end text-white text-lg lg:text-2xl font-bold">(1.000 USD) 50 cupos primerizos</h2>
                  <h2 className="text-end text-white text-sm lg:text-2xl font-extralight">Únete al selecto grupo de Validadores y disfruta de privilegios únicos:</h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4">
                  <div className="grid gap-5 p-5 sm:p-7">
                    <div className="flex w-full justify-center">
                      <img src={grafic4} alt="" className="w-1/3 sm:w-2/3 object-contain" />
                    </div>
                    <div className="grid gap-2 leading-5">
                      <span className="font-bold text-white text-center">Compra preferencial</span>
                      <span className="font-extralight color-main text-center">Accede a la moneda a un precio exclusivo</span>
                    </div>
                  </div>
                  <div className="grid gap-5 p-5 sm:p-7">
                    <div className="flex w-full justify-center">
                      <img src={grafic5} alt="" className="w-1/3 sm:w-2/3 object-contain" />
                    </div>
                    <div className="grid gap-2 leading-5">
                      <span className="font-bold text-white text-center">Bonificación en moneda</span>
                      <span className="font-extralight color-main text-center">Recibe 200USD en monedas*</span>
                    </div>
                  </div>
                  <div className="grid gap-5 p-5 sm:p-7">
                    <div className="flex w-full justify-center">
                      <img src={grafic6} alt="" className="w-1/3 sm:w-2/3 object-contain" />
                    </div>
                    <div className="grid gap-2 leading-5">
                      <span className="font-bold text-white text-center">Staking Premium</span>
                      <span className="font-extralight color-main text-center">20% de las comisiones por transacción*</span>
                    </div>
                  </div>
                  <div className="grid gap-5 p-5 sm:p-7">
                    <div className="flex w-full justify-center">
                      <img src={grafic7} alt="" className="w-1/3 sm:w-2/3 object-contain" />
                    </div>
                    <div className="grid gap-2 leading-5">
                      <span className="font-bold text-white text-center">Capacitación VIP</span>
                      <span className="font-extralight color-main text-center">Exclusivos eventos para miembros</span>
                    </div>
                  </div>                  
                </div>
                <div className="grid">
                  <div className="flex w-full justify-center lg:justify-end">
                    <a href="#roadmap" className=" bg-main rounded-full w-fit px-7 lg:px-14 py-2 text-base lg:text-2xl lg:font-semibold hover:bg-black hover:text-teal-400 transition-all">QUIERO SER VALIDADOR (Próximamente)</a>
                  </div>
                </div>
              </div>
              <div className="block sm:hidden xl:w-full">
              <img src={grafic8} alt="" className="w-full mb-[-40px] mt-5" />
            </div>
            </div>
          </div>          
        </div>  
      </section>   
      <Presale expired={date}/>
      <Slider/>
      <section className="bg-gradient-to-br from-white via-white to-cyan-200 relative">
        <div className="grid gap-7 lg:gap-16 container mx-auto py-16 lg:py-28 px-5 lg:px-0">
          <div className="flex justify-center text-center w-full">
            <h2 className="font-protest text-4xl lg:text-7xl text-[#101A3e]">Marketing de afiliados</h2>
          </div>
          <div className="text-center text-[#101A3e] font-bold   lg:text-3xl flex justify-center gap-2 lg:gap-5">
            <FaPlus className="text-teal-300" />
            <span>COMISIÓN POR VENTA DIRECTA</span>
          </div>
          <div className="flex w-full justify-center">
            <div className="bg-main flex text-[#101A3e] rounded-2xl box-shadow gap-2 p-5 xl:p-7 w-fit lg:w-2/3 shadow-md hover:shadow-xl transition-all">
              <div className="w-1/5 grid place-content-center">
                <span className="text-4xl lg:text-7xl font-bold">5%</span>
              </div>
              <div className="w-4/5 text-center font-light text-sm lg:text-lg 2xl:text-xl ">Cada vez que una persona se registre y compre monedas a través de su enlace, recibirá un 5% de comisión de su compra. Este incentivo inicial premia tu esfuerzo hacer que la comunidad crezca</div>
            </div>
          </div>
          <div className="text-center text-[#101A3e] font-bold   lg:text-3xl flex justify-center gap-2 lg:gap-5">
            <FaPlus className="text-teal-300" />
            <span>COMISIONES POR BONOS</span>
          </div>
          <div className="flex w-full justify-center">
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-9 lg:w-2/3">
              <div className="bg-main grid gap-5 text-[#101A3e] rounded-2xl box-shadow p-5 xl:p-7 w-fit shadow-md hover:shadow-xl transition-all">
                <div className="grid place-content-center text-center">
                  <span className="text-4xl lg:text-7xl font-bold">2%</span>
                  <span className="text-2xl lg:text-4xl font-bold text-teal-50 ">Nivel 1</span>
                </div>
                <div className="text-center font-light text-sm lg:text-lg 2xl:text-xl">
                  Además de la comisión por venta directa, ganarás un 2% de las compras realizadas por los referidos de tus referidos. Este nivel te permite beneficiarte de la expansión de tu comunidad, incentivando un crecimiento continuo.
                </div>
              </div>
              <div className="bg-main grid gap-5 text-[#101A3e] rounded-2xl box-shadow p-5 xl:p-7 w-fit shadow-md hover:shadow-xl transition-all">
                <div className="grid place-content-center text-center">
                  <span className="text-4xl lg:text-7xl font-bold">2%</span>
                  <span className="text-2xl lg:text-4xl font-bold text-teal-50 ">Nivel 2</span>
                </div>
                <div className="text-center font-light text-sm lg:text-lg 2xl:text-xl">
                  En este nivel, recibirás un 2% de comisión sobre las compras realizadas por los referidos del segundo nivel en tucomunidad, es decir, los referidos de los referidos del Nivel 1.
                </div>
              </div>
              <div className="bg-main grid gap-5 text-[#101A3e] rounded-2xl box-shadow p-5 xl:p-7 w-fit shadow-md hover:shadow-xl transition-all">
                <div className="grid place-content-center text-center">
                  <span className="text-4xl lg:text-7xl font-bold">1%</span>
                  <span className="text-2xl lg:text-4xl font-bold text-teal-50 ">Nivel 3</span>
                </div>
                <div className="text-center font-light text-sm lg:text-lg 2xl:text-xl">
                Finalmente, ganarás un 1% de comisión sobre las compras de los referidos de tercer nivel, completando el modelo de referidos de tres niveles en el ecosistema TRAISHUNT.
                </div>
              </div>
            </div>            
          </div>
          <div className="flex w-full justify-center z-30">
            <a href="#roadmap" className="bg-cyan-400 text-white rounded-full w-fit px-7 lg:px-14 py-2 text-lg lg:text-2xl mt-9 lg:font-semibold hover:bg-black hover:text-cyan-400 transition-all">QUIERO ESTOS BENEFICIOS</a>
          </div>
        </div>
        <img src={grafic10} alt="" className="absolute right-1 bottom-0 h-[30vh] lg:h-[70vh] lg:right-11"/>
      </section>
      <How/>
      <section className="flex justify-end xl:ps-16 2xl:ps-28">
        <div className="bg-gradient-to-tr from-teal-300 via-teal-100 to-white relative xl:rounded-l-3xl shadow-xl w-full">
          <div className="grid gap-7 lg:gap-16 container mx-auto py-9 lg:py-20 px-5 lg:px-0 space-y-5">
            <div className="flex justify-center text-center w-full">
              <h2 className="font-protest text-4xl lg:text-7xl text-[#101A3e]">¿Por qué invertir en Traishunt?</h2>
            </div>
            <div className="flex w-full justify-center">
              <div className="grid lg:grid-cols-3 space-y-9 xl:space-y-0 px-5 lg:px-11">
                <div className="grid gap-5 text-[#101A3e] rounded-2xl px-9 xl:px-13 2xl:px-16 w-fit transition-all relative">
                  <div className="absolute left-0 xl:top-[17%] bg-cyan-400 w-1 xl:w-2 h-full xl:h-2/3 rounded-full opacity-30 hover:opacity-100 transition-all"></div>
                  <div className="flex justify-center">
                    <img src={grafic11} alt="" className="h-24 lg:h-32 hover:hue-rotate-60" />
                  </div>
                  <div className="flex text-center">
                    <span className="text-xl lg:text-3xl font-bold leading-5">Crecimiento Controlado</span>
                  </div>
                  <div className="text-center font-light text-sm lg:text-lg leading-4">
                    Las metas escalonadas aseguran un proceso de ventas controlado, evitando caídas repentinas en el mercado y permitiendo que los inversionistas aprovechen el crecimiento en cada fase.
                  </div>
                </div>
                <div className="grid gap-5 text-[#101A3e] rounded-2xl px-9 xl:px-13 2xl:px-16 w-fit transition-all relative">
                  <div className="absolute left-0 xl:top-[17%] bg-cyan-400 w-1 xl:w-2 h-full xl:h-2/3 rounded-full opacity-30 hover:opacity-100 transition-all"></div>
                  <div className="flex justify-center">
                    <img src={grafic12} alt="" className="h-24 lg:h-32 hover:hue-rotate-60" />
                  </div>
                  <div className="flex text-center">
                    <span className="text-xl lg:text-3xl font-bold leading-5">Transparencia y Seguridad</span>
                  </div>
                  <div className="text-center font-light text-sm lg:text-lg leading-4">
                  Los contratos inteligentes se encargan de gestionar todo, sin intervención humana, lo que genera confianza y seguridad.
                  </div>
                </div>
                <div className="grid gap-5 text-[#101A3e] rounded-2xl px-9 xl:px-13 2xl:px-16 w-fit transition-all relative">
                  <div className="absolute left-0 xl:top-[17%] bg-cyan-400 w-1 xl:w-2 h-full xl:h-2/3 rounded-full opacity-30 hover:opacity-100 transition-all"></div>
                  <div className="flex justify-center">
                    <img src={grafic13} alt="" className="h-24 lg:h-32 hover:hue-rotate-60" />
                  </div>
                  <div className="flex text-center">
                    <span className="text-xl lg:text-3xl font-bold leading-5">Oportunidades Continuas</span>
                  </div>
                  <div className="text-center font-light text-sm lg:text-lg leading-4">
                  Cada meta abre nuevas posibilidades para que los inversionistas obtengan beneficios, con un límite fijo de 21 millones de monedas que asegura un valor creciente a lo largo del tiempo.
                  </div>
                </div>
              </div>            
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto pt-16 lg:pt-28 grid gap-5 lg:gap-9 px-5">
        <div className="flex justify-center w-full">
          <div className="grid gap-5 lg:gap-9 text-center lg:w-2/3 xl:w-1/2">
            <h2 className="font-protest text-4xl lg:text-7xl text-white"><small className="color-main">Sé parte de</small> Traishunt</h2>
            <span className="font-extralight text-white text-xs lg:text-xl">Únete a un ecosistema DeFi que no solo es rentable, sino seguro y transparente. Traishunt te ofrece un plan claro, metas alcanzables y un sistema automatizado que maximiza tus oportunidades de inversión. ¡Empieza hoy y aprovecha el futuro del trading cripto!</span>
          </div>
        </div>
        <div className="flex justify-center w-full">
          <div className="grid gap-5 lg:gap-9 text-center lg:w-2/3 xl:w-1/2">
            <span className="font-light color-main text-xl lg:text-3xl">Crear una wallet compatible</span>
            <div className="h-full">
              <div className="flex justify-end text-xs text-white font-normal m-2">
                Idioma de video: 
                <select name="" id="" className="bg-transparent border-none ms-1 text-teal-500" onChange={(e) => changeVideo(e.currentTarget.value)}>
                  <option value="es">Español</option>
                  <option value="en">English</option>
                </select>
              </div>
              <video controls src={video} className="h-auto w-full object-cover rounded-2xl hover:rounded-none transition-all" poster={poster}>
                Tu navegador no admite el elemento <code>video</code>.
              </video>
            </div>
          </div>
        </div>
      </section>
      <section id="faq" className="container mx-auto py-16 lg:py-28 grid gap-5 lg:gap-11 xl:gap-20 px-5">
        <div className="flex justify-center w-full">
          <div className="grid gap-5 lg:gap-9 text-center">
            <h2 className="font-protest text-4xl lg:text-7xl text-cyan-300 hover:text-white transition-all">Preguntas frecuentes</h2>
          </div>
        </div>
        <div className="flex justify-center w-full">
          <div className="grid gap-1 lg:gap-3 2xl:px-32">
            <AccordionLight title="¿Qué es Traishunt?" text="Traishunt es una criptomoneda que tiene como objetivo revolucionar el espacio DeFi (finanzas descentralizadas) al ofrecer un ecosistema completo con un intercambio descentralizado (DEX), staking, fondos de liquidez y un sistema de compensación de 4 niveles. Además, está diseñada con un mecanismo de liberación de monedas único que brinda control y seguridad a los inversores."/>
            <AccordionLight title="¿Cuál es el suministro total de Traishunt?" text="Traishunt tiene un suministro fijo de 21.000.000 monedas. No se emitirán más monedas una vez que se alcance este límite, lo que garantiza un suministro controlado."/>
            <AccordionLight title="¿Cómo funciona el sistema de objetivos y ciclos de Traishunt?" text="El sistema Traishunt se divide en ciclos, cada uno con objetivos de aumento de liquidez. Los objetivos comienzan en $100,000 USD en el primer ciclo y aumentan progresivamente hasta $500,000 USD. A medida que se alcanzan los objetivos, se desbloquea un porcentaje de las monedas adquiridas por los inversores."/>
            <AccordionLight
              title="¿Qué sucede cuando se alcanza un objetivo?"
              text=<>
              Cuando se alcanza una meta, los inversores pueden vender un porcentaje de sus monedas adquiridas. Por ejemplo:
              <br></br>
              <br></br>
              - Al alcanzar la Meta 1 de $100,000 USD, los inversores pueden vender hasta el 20% de sus monedas.
              <br></br>
              - Al alcanzar la Meta 2 de $200,000 USD, pueden vender hasta el 40% (20% de la primera meta + 20% de la segunda).
              <br></br>
              - Al alcanzar la Meta 3 de $300,000 USD, pueden vender hasta el 60% (20% de cada una de las primeras tres metas), y así sucesivamente hasta alcanzar el 100% en la Meta 5.
              </>
            />
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Page
