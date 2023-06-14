import Image from 'next/image'
import coracao from '../assets/images/coracao.svg'
import terra from '../assets/images/terra.svg'

export default function Hero() {
  return (
    <div className="mb-[50vh] md:mb-[15vh]">
      <div className="h-[80vh] bg-bg-hero bg-cover bg-center">
        <div className="mx-5 pt-[40%] text-center md:pt-[30%] lg:pt-[15%]">
          <h1 className="font-alt text-4xl uppercase text-gray-50 md:text-5xl lg:text-6xl">
            Instituto Sertão de Deus
          </h1>
          <p className="text-2xl font-medium text-yellow-500 lg:text-3xl">
            Amor e Alcance
          </p>
        </div>
      </div>

      <div className="absolute inset-0 mt-[70vh] h-auto lg:mx-[10vw] 2xl:mx-[25vw]">
        <div className="mx-5 rounded-lg bg-white shadow-md md:flex md:flex-wrap md:justify-center lg:mx-0">
          <div className="flex flex-col items-center p-5 text-center md:w-1/2">
            <Image src={coracao} width={52} alt="Coração" />
            <p className="text-lg font-bold">Amor</p>
            <p>
              Trabalhando com assistência social. Cuidado, educação e saúde.
            </p>
          </div>
          <div className="flex flex-col items-center p-5 text-center md:w-1/2">
            <Image src={terra} width={50} alt="Coração" />
            <p className="text-lg font-bold">Alcance</p>
            <p>Até que todos conheçam as boas novas de Jesus.</p>
          </div>
          <div className="flex flex-col items-center p-5 text-center">
            <p>
              Assim trabalhamos de uma forma que: Vidas sejam alcançadas pela
              graça do Senhor Jesus e sejam cuidadas com amor
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
