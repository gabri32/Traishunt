import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const Component = () => {   
  const data = {
    labels: ['Pre-venta 5%', 'Liquidez 25%', 'Marketing 5%', 'Staking 10%', 'Equipo 15%', 'Distribución 30%'],
    datasets: [
      {
        label: 'Porcentaje de Tokens',
        data: [5, 25, 5, 10, 15, 30],
        backgroundColor: [
          '#AFFFF1',
          '#97EEF1',
          '#5CE1E6',
          '#38B6FF',
          '#5271FF',
          '#8C52FF',
        ],
        borderColor: [
          'white',
          'white',
          'white',
          'white',
          'white',
          'white',
        ],
        borderWidth: 1,
      },
    ],
  }
  return (
    <>
      <div className="container  mx-auto">
        <div className="flex justify-center ">
          <div className="w-full lg:w-2/3 xl:w-1/2  justify-center flex lg:p-5 bg-gradient-to-b from-white hover:bg-white rounded-2xl transition-all relative text-white hover:text-black">
            <Doughnut
              data={data}
              className="z-10"
            />
            <div className="grid absolute place-content-center top-0 bottom-0 text-center mt-20 sm:mt-14">
              <span className="font-protest text-xl sm:text-4xl">Traishunt</span>
              <span className="font-extrabold text-sm sm:text-2xl">21.000.000</span>
              <span className="text-sm sm:text-2xl">Tokens</span>
            </div>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default Component
