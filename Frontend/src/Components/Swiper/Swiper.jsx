
import { Carousel } from "flowbite-react";
import BG from '/bg.jpg'
import BG1 from '/bg1.jpg'
import BG2 from '/bg2.jpg'
import BG3 from '/bg3.jpg'

export default function Component() {
  return (
    <>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-[30rem] w-2/3 m-auto mt-10 shadow-lg">
        <Carousel>
          <img className="object-contain bg-cover bg-center" width={100} height={100} src={BG} alt="..." />
          <img src={BG} alt="..." />
          <img src={BG1} alt="..." />
          <img src={BG2} alt="..." />
          <img src={BG3} alt="..." />
        </Carousel>
      </div>
      <div className="flex w-2/3 justify-center items-center m-auto mt-10 max-md:hidden">
        <h1 className="text-6xl font-semibold">SIMPLE / IMPRESSIVE OR ELEGENT</h1>
        <p className="text-gray-500">3LECTRONIC is the warehouse of quality Product that suits your passion</p>
      </div>
    </>
  );
}
