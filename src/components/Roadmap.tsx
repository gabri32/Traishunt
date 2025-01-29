// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/swiper-bundle.css'


export const Component = () => { 
  
  return (
    <>
      <section id="roadmap" className="container mx-auto sm:z-10 block py-7  lg:p-16 relative">
        <h2 className="text-center color-main font-protest text-4xl lg:text-7xl">Roadmap</h2>
        <Swiper
          // install Swiper modules
          modules={[ Pagination, Autoplay]}
          className="border-e border-s border-white/10"
          pagination={{ clickable: true }}
          breakpoints= {
            {
              300: {
                slidesPerView: 1.3,
                spaceBetween: 20,
              },
              600: {
                slidesPerView: 1.5,
                spaceBetween: 30,
              },
              900: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 2.5,
                spaceBetween: 30,
              },
              1500: {
                slidesPerView: 3,
                spaceBetween: 30,
              }
            }
          }
          autoplay={{
            delay: 5000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false
          }}
          loop
        >
          <SwiperSlide>
            <div className="grid gap-5 bg-[#101A3E] text-white p-6 lg:p-9 rounded-xl my-11">
              <div>
                <h2 className="text-5xl lg:text-6xl font-black font-protest color-main">1 <small className="text-2xl lg:text-3xl font-normal">AHORA</small></h2>
                <h3 className="text-2xl lg:text-3xl font-black">Q1 2025</h3>
                <h4 className="text-base lg:text-xl color-main">INICIO PREVENTA</h4>
                <hr className="border-t border-cyan-400/70"/>
              </div>
              <p className="text-xs lg:text-base font-extralight leading-4 lg:leading-5">
                <b className="color-main font-semibold">Preventa:</b>
                <br />
                Comienza la primera fase de preventa de Traishunt, una oportunidad exclusiva para los primeros inversores de adquirir TSH antes del lanzamiento oficial. Durante esta etapa, los participantes podrán asegurar su posición en el ecosistema a un precio preferencial.
              </p>
              <div className="text-xs lg:text-base grid gap-2">
                <div className="bg-main rounded-xl flex text-[#071038]">
                  <div className="grid w-2/3 border-e border-[#071038] p-1 place-content-center">
                    <span>Fase 1 - Fundadores</span>
                    <span>0.1 a 0.2</span>
                  </div>
                  <div className="grid w-1/3 place-content-center font-bold ">
                    <span>150.000</span>
                    <span>TOKENS</span>
                  </div>
                </div>
                <div className="bg-main rounded-xl flex text-[#071038]">
                  <div className="grid w-2/3 border-e border-[#071038] p-1 place-content-center">
                    <span>Fase 2 </span>
                    <span>0.2 a 0.25</span>
                  </div>
                  <div className="grid w-1/3 place-content-center font-bold ">
                    <span>350.000</span>
                    <span>TOKENS</span>
                  </div>
                </div>
                <div className="bg-main rounded-xl flex text-[#071038]">
                  <div className="grid w-2/3 border-e border-[#071038] p-1 place-content-center">
                    <span>Fase 3</span>
                    <span>0.25 a 0.3</span>
                  </div>
                  <div className="grid w-1/3 place-content-center font-bold ">
                    <span>550.000</span>
                    <span>TOKENS</span>
                  </div>
                </div>
              </div>
              <span className="text-xs lg:text-base color-main font-light text-center lg:px-5">Comisión de retiro de preventa 10%</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid gap-5 bg-[#101A3E] text-white p-6 lg:p-9 rounded-xl my-11 ">
              <div>
                <h2 className="text-5xl lg:text-6xl font-black font-protest color-main">2</h2>
                <h3 className="text-2xl lg:text-3xl font-black">Q2 2025</h3>
                <h4 className="text-base lg:text-xl color-main">STAKING Y MARKETING</h4>
                <hr className="border-t border-cyan-400/70"/>
              </div>
              <p className="text-xs lg:text-base font-extralight leading-4 lg:leading-5">
                <b className="color-main font-semibold">Marketing y Lanzamiento del Token:</b>
                <br />
                Arranca la fase de marketing del token Traishunt, una campaña estratégica diseñada para crear conciencia y generar interés en la comunidad global de criptomonedas. 
                <br />
                <br />
                El lanzamiento del token marcará un hito importante, donde los primeros inversores recibirán sus TSH directamente en sus wallets. Además, se abre el programa de staking de recompensas:
              </p>
              <div className="text-xs lg:text-base grid">
                <div className="bg-main rounded-xl flex text-[#071038]">
                  <div className="grid w-full p-2 place-content-center justify-center text-center">
                    <span className="font-bold">300.000 TOKENS</span>
                    <span>Distribuidos en 3 años</span>
                  </div>
                </div>
              </div>
              <span className="text-xs lg:text-base color-main font-light text-center lg:px-5">Las recompensas son escalonadas y se reparten en función  del tiempo de staking de cada usuario</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid gap-5 bg-[#101A3E] text-white p-6 lg:p-9 rounded-xl my-11 ">
              <div>
                <h2 className="text-5xl lg:text-6xl font-black font-protest color-main">3</h2>  
                <h3 className="text-2xl lg:text-3xl font-black">Q3 2025</h3>
                <h4 className="text-base lg:text-xl color-main">LIQUIDEZ Y AVANCES (DEX)</h4>
                <hr className="border-t border-cyan-400/70"/>
              </div>
              <p className="text-xs lg:text-base font-extralight leading-4 lg:leading-5">
                En esta fase, continuamos con los avances en la creación de nuestro exchange descentralizado (DEX), preparando el terreno para un lanzamiento completo en el futuro cercano.
                <br />
                <br />
                El token TSH estará disponible para la venta a un precio inicial de  <span className="bg-main rounded-full px-2 text-black font-normal">$0.35</span>, y su valor irá aumentando progresivamente en función de la liquidez aportada por la comunidad.
                <br />
                <br />
                Además, lanzamos el pool de liquidez, permitiendo a los usuarios contribuir a la estabilidad del ecosistema y obtener recompensas adicionales por su participación.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid gap-5 bg-[#101A3E] text-white p-6 lg:p-9 rounded-xl my-11 ">
              <div>
                <h2 className="text-5xl lg:text-6xl font-black font-protest color-main">4</h2>
                <h3 className="text-2xl lg:text-3xl font-black">Q4 2025</h3>
                <h4 className="text-base lg:text-xl color-main">EXPANSIÓN ECOSISTEMA LISTADO EN COINGEKO</h4>
                <hr className="border-t border-cyan-400/70"/>
              </div>
              <p className="text-xs lg:text-base font-extralight leading-4 lg:leading-5">
                Nos enorgullece anunciar que TSH será enlistado en <b className="color-main font-semibold">CoinGecko</b>, aumentando su visibilidad y credibilidad en el mercado global.
                <br />
                <br />
                Durante este trimestre, avanzamos la segunda fase de desarrollo del DEX en su versión <b className="font-semibold">BETA-DEMO</b>, acercándonos a nuestro objetivo de ofrecer una plataforma avanzada para el trading descentralizado.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid gap-5 bg-[#101A3E] text-white p-6 lg:p-9 rounded-xl my-11 ">
              <div>
                <h2 className="text-5xl lg:text-6xl font-black font-protest color-main">5</h2>
                <h3 className="text-2xl lg:text-3xl font-black">Q1 2026</h3>
                <h4 className="text-base lg:text-xl color-main">LANZAMIENTO DEL DEX BETA-DEMO Y TRADING</h4>
                <hr className="border-t border-cyan-400/70"/>
              </div>
              <p className="text-xs lg:text-base font-extralight leading-4 lg:leading-5">
                El año concluye con el lanzamiento oficial del DEX en su versión <b className="font-semibold">BETA-DEMO</b>, una plataforma completamente funcional con un innovador sistema de trading que marcará la diferencia en el espacio DeFi. 
                <br />
                <br />
                Los usuarios podrán realizar intercambios entre los primeros pares: TSH/USDT y TSH/BTC, abriendo nuevas oportunidades para el crecimiento y la diversificación de su portafolio. 
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
    
  )
}

export default Component
