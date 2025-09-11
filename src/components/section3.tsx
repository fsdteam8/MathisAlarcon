import Image from "next/image";

export function Section3() {
  return (
    <div className="w-full relative md:mt-26 ">
      <div className="absolute left-0 -top-[1200px] ml-[350px] -z-10 hidden md:block">
        <Image
          src={"/Vector5.png"}
          alt="Background Section 3"
          height={1100}
          width={1000}
          quality={100}
          className="w-[1600px] h-[1200px]"
        />
      </div>

      <div className="flex flex-col items-center justify-center md:justify-start gap-16 py-5  w-full md:w-1/2 ">
        <div className="flex flex-col items-center justify-center gap-4 w-full mx-auto relative ">
          <h2 className="text-2xl md:text-5xl font-semibold text-center">
            Bienvenue chez Eyes Prod
          </h2>
          <p className="text-outline text-2xl md:text-3xl text-center w-[80%] md:w-[100%]">
            Là où votre regard prend tout son sens.
          </p>
          <p className="text-2xl font-semibold text-center hidden md:flex">
            22 Rue de Poissy, 78100 Saint-Germain-en-Laye
          </p>
        </div>

        <div className="absolute mt-40 hidden lg:block">
          <Image
            src={"/Vector8.png"}
            alt="line"
            width={954}
            height={400}
            quality={100}
            className="h-[400px] w-[954px] ml-60"
          />
        </div>

        <div className="flex items-center justify-center gap-8 w-full -mt-10 p-2 md:mt-10">
          <Image
            src="/img_s3.png"
            alt="Boss de Eye's Prod"
            width={700}
            height={300}
            quality={100}
            className="w-[300px] sm:w-[350px] md:w-[714px] rounded-[80px] sm:rounded-[90px] md:rounded-[173px] img-shadow"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <p className="text-[14px] sm:text-lg md:text-xl font-semibold text-center flex lg:hidden">
          Retrouvez-nous <br />
          22 Rue de Poissy, 78100 Saint-Germain-en-Laye
        </p>
      </div>

      <div className="relative flex justify-center mt-15 mr-10 md:mt-4 md:absolute md:-top-15  md:mr-34 right-0 z-50">
        <Image
          src="/face_3.png"
          alt="Face 3"
          height={300}
          width={200}
           quality={100}
          className="mx-auto h-[calc(80vh-5.2rem)] md:h-[calc(110vh-5.2rem)] w-[90%] sm:w-2/3 md:w-full"
        />
      </div>

      <div className="absolute -mt-[550px] ml-30 block md:hidden">
        <Image
          src="/Vector15.png"
          alt="Face 3"
          width={300}
          height={300}
          className="w-[300px] h-[600px] sm:w-2/3 md:w-full"
        />
      </div>

      <div className="relative md:absolute top-80 mr-32 right-0 hidden lg:block">
        <Image width={500} height={800} src="/Vector7.png" alt="Face 3" className="mx-auto  " />
      </div>
    </div>
  );
}
