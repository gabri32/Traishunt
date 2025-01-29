//import grafic9 from '../assets/grafic9.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/swiper-bundle.css'


export const Component = () => { 
  
  return (
    <>
      <section className="bg-slider relative ">
        <iframe src="https://lottie.host/embed/95ec5b81-9b80-4753-a933-9422f688c2f5/7ihfKNYgKh.json" className="absolute  top-16 lg:top-0 bottom-0 left-0 right-0 lg:h-full w-full h-full lg:w-2/3 "></iframe>
        {/** <img src={grafic9} alt="" className="absolute  bottom-0 left-0 right-0 lg:h-[100vh]" /> */}
        <div className="mx-auto relative container px-5 py-7 lg:py-16 pt-40 lg:pt-[30vh] space-y-3 lg:space-y-7">
          <h2 className="text-center text-white font-protest text-4xl lg:text-7xl text-shadow">Estructura Técnica <br /> y Modelo económico</h2>
          <Swiper
          // install Swiper modules
          modules={[ Pagination, Autoplay]}
          className="border-e border-s border-white/10"
          pagination={{ clickable: true }}
          breakpoints= {
            {
              300: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              600: {
                slidesPerView: 2  ,
                spaceBetween: 30,
              },
              900: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 3.5,
                spaceBetween: 30,
              },
              1500: {
                slidesPerView: 4,
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
            <div className="grid gap-5 bg-card-c backdrop-blur-sm lg:backdrop-blur text-white p-6 lg:p-9 rounded-2xl my-11 text-center">
              <div>
                <h2 className="text-5xl lg:text-6xl font-black font-protest color-main opacity-30">1</h2>
                <h4 className="text-base lg:text-xl color-main font-bold">Total de monedas</h4>
              </div>
              <p className="text-xs lg:text-base font-extralight leading-4 lg:leading-5">
                Se emitirán 21.000.0000 de monedas. Esta cifra es fija, lo que significa que no habrá emisión adicional después de alcanzar este límite
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid gap-5 bg-card-c backdrop-blur-sm lg:backdrop-blur text-white p-6 lg:p-9 rounded-2xl my-11 text-center">
              <div>
                <h2 className="text-5xl lg:text-6xl font-black font-protest color-main opacity-30">2</h2>
                <h4 className="text-base lg:text-xl color-main font-bold">Distribución por metas y Ciclos</h4>
              </div>
              <p className="text-xs lg:text-base font-extralight leading-4 lg:leading-5">
                La distribución se realizará en varios ciclos, comenzando con el primer ciclo de 500,000 dólares en liquidez.
              </p>
            </div>
          </SwiperSlide>       
          <SwiperSlide>
            <div className="grid gap-5 bg-card-c backdrop-blur-sm lg:backdrop-blur text-white p-6 lg:p-9 rounded-2xl my-11 text-center">
              <div>
                <h2 className="text-5xl lg:text-6xl font-black font-protest color-main opacity-30">3</h2>
                <h4 className="text-base lg:text-xl color-main font-bold">Ciclos</h4>
              </div>
              <p className="text-xs lg:text-base font-extralight leading-4 lg:leading-5">
                En cada ciclo, las metas de recaudación de liquidez se irán incrementando, comenzando con 100,000 USD en la primer meta y llegando a 500,000 USD en el último en la última meta y culminación de ciclo
              </p>
            </div>
          </SwiperSlide>     
          <SwiperSlide>
            <div className="grid gap-5 bg-card-c backdrop-blur-sm lg:backdrop-blur text-white p-6 lg:p-9 rounded-2xl my-11 ">
              <div>
                <h2 className="text-5xl lg:text-6xl font-black font-protest color-main opacity-30 text-center">4</h2>
                <h4 className="text-base lg:text-xl color-main font-bold text-center">Mecanismo de Liberación y Ventas</h4>
              </div>
              <p className="text-xs lg:text-base font-extralight leading-4 lg:leading-5">
                <b>1.</b>  Una vez alcanzada la meta de 100,000 USD, se habilitarán las ventas durante un período de tiempo predefinido.
                <br />
                <br />
                <b>2.</b> Durante este período, los propietarios de wallets podrán vender hasta 1/5 (20%) de sus monedas adquiridas, lo que se gestionará automáticamente a través de un contrato inteligente que limitará la cantidad de monedas que pueden ser vendida.
              </p>
            </div>
          </SwiperSlide>          
          <SwiperSlide>
            <div className="grid gap-5 bg-card-c backdrop-blur-sm lg:backdrop-blur text-white p-6 lg:p-9 rounded-2xl my-11 ">
              <div>
                <h2 className="text-5xl lg:text-6xl font-black font-protest color-main opacity-30 text-center">5</h2>
                <h4 className="text-base lg:text-xl color-main font-bold text-center">Progresión de Metas</h4>
              </div>
              <p className="text-xs lg:text-base font-extralight leading-4 lg:leading-5">
                <b>1.</b>  Después del cierre del período de ventas, se habilitan nuevamente las compras hasta alcanzar la siguiente meta de 200,000 USD en liquidez, siguiendo la misma mecánica hasta completar el ciclo.
                <br />
                <br />
                <b>2.</b> Al completar el primer ciclo, se desbloquea el 100% de las monedas restantes en las wallets, permitiendo a los usuarios vender o retener sus monedas según su preferencia.
              </p>
            </div>
          </SwiperSlide>          
        </Swiper>         
        </div>
      </section>
    </>
    
  )
}

export default Component
