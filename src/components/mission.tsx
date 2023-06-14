import book from '../assets/images/book.svg'
import church from '../assets/images/church.svg'
import love from '../assets/images/love.svg'
import hand from '../assets/images/hand_heart.svg'
import Image from 'next/image'

export default function Mission() {
  return (
    <div>
      <div className="flex h-[100vh] flex-col gap-6 bg-bg-mission bg-cover bg-center md:gap-10 xl:pl-[10rem]">
        <div className="mx-5 pt-16">
          <h1 className="font-alt text-6xl uppercase text-gray-50 md:text-7xl">
            Nossa <span className="text-yellow-600">Missão</span>
          </h1>
          <p className="text-lg text-gray-50 md:text-xl lg:text-2xl xl:mr-[34rem] 2xl:mr-[48rem]">
            Atender famílias, comunidades ou aldeias do sertão nordestino com
            necessidades básicas e levar consolo e conforto atráves da palavra
            de Deus.
          </p>
        </div>
        <div className="mx-5 flex flex-col flex-wrap items-center gap-5 text-white md:flex-row xl:mr-[25rem] 2xl:mr-[28rem]">
          <div className="flex h-20 w-[100%] items-center gap-10 rounded-lg bg-yellow-600 p-5 text-xl md:w-80">
            <Image src={book} width={38} alt="icon" />
            <p>Incentivo a educação</p>
          </div>
          <div className="flex h-20 w-[100%] items-center gap-10 rounded-lg bg-yellow-600 p-5 text-xl md:w-80">
            <Image src={hand} width={38} alt="icon" />
            <p>Assistência social e econômica</p>
          </div>
          <div className="flex h-20 w-[100%] items-center gap-10 rounded-lg bg-yellow-600 p-5 text-xl md:w-80">
            <Image src={church} width={38} alt="icon" />
            <p>Conscientização religiosa</p>
          </div>
          <div className="flex h-20 w-[100%] items-center gap-10 rounded-lg bg-yellow-600 p-5 text-xl md:w-80">
            <Image src={love} width={38} alt="icon" />
            <p>Resgate da dignidade humana</p>
          </div>
        </div>
      </div>
    </div>
  )
}
