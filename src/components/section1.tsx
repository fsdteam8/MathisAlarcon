import Image from "next/image";

export default function Section1() {
  return (
    <div className="relative w-full md:h-[calc(100vh-5.2rem)] flex flex-col md:block">
      <div className="relative flex h-auto w-full flex-col items-center justify-center px-4 py-8 md:h-[calc(80vh-5.2rem)] md:w-2/3">
        <p className="text-center text-3xl sm:text-4xl md:text-8xl uppercase title-outline leading-tight">
          Autant se cacher derrière quelque chose qui se voit
        </p>
      </div>

      <div className="relative h-[450px] w-[460px] mt-8 md:mt-0 mx-auto  md:h-full lg:h-full md:w-2/4 md:absolute md:top-0 md:right-0">
        <Image
          src="/face_1.png"
          alt="Face 1"
          fill
          className="h-[450px] w-[600px] "
          priority
        />
      </div>

      <div className="relative  justify-center mt-6 -top-72 md:absolute md:left-1/3 md:top-[465px] md:ml-30 hidden md:flex">
        <Image
          src="/Line1.png"
          alt="Fil rouge"
          width={400}
          height={800}
          className="w-[150px] sm:w-[250px] md:w-[400px] h-auto"
          priority
        />
      </div>
      <div className="relative -z-50  justify-center -mt-[525px] ml-15  flex md:hidden">
        <Image
          src="/Vector3.png"
          alt="Fil rouge"
          width={400}
          height={800}
          className="w-[220px]  h-[485px]"
          priority
        />
      </div>
    </div>
  );
}
