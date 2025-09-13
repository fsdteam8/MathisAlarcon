import Image from "next/image";

export default function Section1() {
  return (
    <div className="relative flex w-full flex-col md:block md:h-[calc(100vh-5.2rem)]">
      {/* Heading */}
      <div className="relative flex h-auto w-full flex-col items-center justify-center px-4 py-8 
                      md:h-[calc(80vh-5.2rem)] md:w-2/3">
        <p className="w-full lg:w-[80%] 2xl:w-full text-center uppercase title-outline leading-tight 
                      text-3xl sm:text-4xl lg:text-5xl 2xl:text-8xl">
          Autant se cacher derrière quelque chose qui se voit
        </p>
      </div>

      {/* Main Face Image */}
      <div className="relative mx-auto mt-8 h-[450px] w-[450px] 
                      md:absolute md:top-0 md:right-0 md:mt-0 md:h-full md:w-2/4 
                      lg:h-[700px] lg:w-[720px] 
                      2xl:h-[822px] 2xl:w-[882px]">
        <Image
          src="/face_1.png"
          alt="Face 1"
          fill
          priority
          quality={100}
          className="h-[450px] w-[600px]"
        />
      </div>

      {/* Desktop Vector */}
      <div className="relative hidden md:flex justify-center 
                      md:absolute md:left-1/3 md:ml-30 
                      lg:top-[365px] 2xl:top-[465px] mt-6 2xl:mt-10 -top-72">
        <Image
          src="/Line 1.svg"
          alt="Fil rouge"
          width={400}
          height={800}
          priority
          className="h-auto w-[150px] sm:w-[250px] md:w-[400px]"
        />
      </div>

      {/* Mobile Vector */}
      <div className="relative flex md:hidden justify-center -mt-[525px] ml-15 -z-50">
        <Image
          src="/Vector3.png"
          alt="Fil rouge"
          width={400}
          height={800}
          priority
          className="w-[220px] h-[485px]"
        />
      </div>
    </div>
  );
}
