// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/swiper-bundle.css'

export const Component = () => { 
  
  return (
    <>
      <section className="container mx-auto py-16 lg:py-28 grid gap-5 lg:gap-9 px-5">
        <div className="flex justify-center w-full">
          <div className="grid gap-5 lg:gap-9 text-center lg:w-2/3 xl:w-1/2">
            <h2 className="font-protest text-4xl lg:text-7xl text-white">Traishunt</h2>
            <span className="font-light color-main lg:text-3xl">El futuro del trading cripto con cun sistema de liberación inteligente</span>
            <span className="font-extralight text-white text-xs lg:text-xl">Traishunt es una criptomoneda diseñada para crear un ecosistema DeFi dinámico, combinando lo mejor del trading, el staking y los pools de liquidez.</span>
          </div>
        </div>
        <div className="flex justify-center w-full">
          <div className="grid gap-5 lg:gap-9 text-center lg:w-2/3 xl:w-1/2">
            <span className="font-light text-white text-xl lg:text-3xl">¿Cómo funciona?</span>
            <div className="grid gap-5 bg-card backdrop-blur-sm lg:backdrop-blur text-white p-6 lg:p-9 rounded-2xl ">
              <div>
                <h2 className="text-4xl lg:text-6xl font-black font-protest color-main text-center">1</h2>
                <h4 className="text-base lg:text-xl color-main font-bold text-center">Ciclos de inversión con Metas progresivas</h4>
              </div>
              <p className="text-xs lg:text-base font-extralight leading-4 lg:leading-5">
                El sistema de Traishunt está basado en ciclos con inteligencia artificial. Cada ciclo tiene metas claras de recaudación de liquidez que comienzan con <b className="color-main">$100,000 USD</b> y aumentan hasta <b className="color-main">$500,000 USD.</b>
              </p>
            </div>
            <div className="grid gap-5 bg-card backdrop-blur-sm lg:backdrop-blur text-white p-6 lg:p-9 rounded-2xl ">
              <div>
                <h2 className="text-4xl lg:text-6xl font-black font-protest color-main text-center">2</h2>
                <h4 className="text-base lg:text-xl color-main font-bold text-center">Ventas Basadas en Metas</h4>
              </div>
              <p className="text-xs lg:text-base font-extralight leading-4 lg:leading-5">
                Cada vez que una meta es alcanzada, se libera un porcentaje de las monedas adquiridas para que los inversionistas puedan vender.
              </p>
            </div>
            <div className="w-[80vw] lg:w-[40vw] mx-auto">
            <Swiper
                // install Swiper modules
                modules={[ Pagination, Autoplay]}
                pagination={{ clickable: true }}
                breakpoints= {
                  {
                    300: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    600: {
                      slidesPerView: 1.5  ,
                      spaceBetween: 30,
                    },
                    1500: {
                      slidesPerView: 2,
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
                  <div className="grid gap-5 bg-card-c backdrop-blur-sm lg:backdrop-blur text-white p-6 lg:p-9 rounded-2xl mb-9 text-center">
                    <div>
                      <h4 className="text-base lg:text-xl color-main text-start">Meta 1 en USD</h4>
                      <h2 className="text-4xl lg:text-5xl 2xl:text-6xl font-protest text-white">100.000</h2>
                    </div>
                    <p className="text-xs lg:text-base font-extralight leading-4 lg:leading-5 color-main">
                      Los inversionistas pueden vender hasta 20% de sus monedas.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="grid gap-5 bg-card-c backdrop-blur-sm lg:backdrop-blur text-white p-6 lg:p-9 rounded-2xl mb-9  text-center">
                    <div>
                      <h4 className="text-base lg:text-xl color-main text-start">Meta 2 en USD</h4>
                      <h2 className="text-4xl lg:text-5xl 2xl:text-6xl font-protest text-white">200.000</h2>
                    </div>
                    <p className="text-xs lg:text-base font-extralight leading-4 lg:leading-5 color-main">
                    Se puede vender hasta 40% (20% de la primera meta más 20% adicional).
                    </p>
                  </div>
                </SwiperSlide> 
                <SwiperSlide>
                  <div className="grid gap-5 bg-card-c backdrop-blur-sm lg:backdrop-blur text-white p-6 lg:p-9 rounded-2xl mb-9 text-center">
                    <div>
                      <h4 className="text-base lg:text-xl color-main text-start">Meta 3 en USD</h4>
                      <h2 className="text-4xl lg:text-5xl 2xl:text-6xl font-protest text-white">300.000</h2>
                    </div>
                    <p className="text-xs lg:text-base font-extralight leading-4 lg:leading-5 color-main">
                      Se puede vender hasta 60% (20% de cada una de las tres primeras metas).
                    </p>
                  </div>
                </SwiperSlide> 
                <SwiperSlide>
                  <div className="grid gap-5 bg-card-c backdrop-blur-sm lg:backdrop-blur text-white p-6 lg:p-9 rounded-2xl mb-9  text-center">
                    <div>
                      <h4 className="text-base lg:text-xl color-main text-start">Meta 4 en USD</h4>
                      <h2 className="text-4xl lg:text-5xl 2xl:text-6xl font-protest text-white">400.000</h2>
                    </div>
                    <p className="text-xs lg:text-base font-extralight leading-4 lg:leading-5 color-main">
                      Se puede vender hasta 80% (20% de cada una de las cuatro metas).
                    </p>
                  </div>
                </SwiperSlide> 
                <SwiperSlide>
                  <div className="grid gap-5 bg-card-c backdrop-blur-sm lg:backdrop-blur text-white p-6 lg:p-9 rounded-2xl mb-9 ext-center">
                    <div>
                      <h4 className="text-base lg:text-xl color-main text-start">Meta 5 en USD</h4>
                      <h2 className="text-4xl lg:text-5xl 2xl:text-6xl font-protest text-white">500.000</h2>
                    </div>
                    <p className="text-xs lg:text-base font-extralight leading-4 lg:leading-5 color-main">
                      Se puede vender hasta 100% (20% de cada una de las cinco metas).
                    </p>
                  </div>
                </SwiperSlide>   
              </Swiper>         
            </div>            
            <div className="grid gap-5 bg-card backdrop-blur-sm lg:backdrop-blur text-white p-6 lg:p-9 rounded-2xl ">
              <div>
                <h2 className="text-4xl lg:text-6xl font-black font-protest color-main text-center">3</h2>
                <h4 className="text-base lg:text-xl color-main font-bold text-center">Contratos inteligentes para mayor transparencia</h4>
              </div>
              <p className="text-xs lg:text-base font-extralight leading-4 lg:leading-5">
                Todo el proceso es gestionado automáticamente por <b className="color-main">contratos inteligentes</b>, que aseguran que las reglas sean claras y equitativas para todos los participantes. No hay intermediarios, solo transparencia y automatización total.
              </p>
            </div>
            <div className="grid gap-5 bg-card backdrop-blur-sm lg:backdrop-blur text-white p-6 lg:p-9 rounded-2xl ">
              <div>
                <h2 className="text-4xl lg:text-6xl font-black font-protest color-main text-center">4</h2>
                <h4 className="text-base lg:text-xl color-main font-bold text-center">Crecimiento continuo y desbloqueo completo</h4>
              </div>
              <p className="text-xs lg:text-base font-extralight leading-4 lg:leading-5">
                Después de cada meta, las compras se habilitan nuevamente, permitiendo que más inversionistas participen y se acumulen nuevas oportunidades de venta. Al finalizar el <b className="color-main">primer ciclo completo</b>, todas las monedas restantes en las wallets serán desbloqueadas, dando oportunidad a la creación de otro ciclo con 5 metas mas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
    
  )
}

export default Component
