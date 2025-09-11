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
        <div className="flex flex-col items-center justify-center gap-4 w-full mx-auto relative">
          <h2 className="text-5xl font-semibold text-center">
            Bienvenue chez Eyes Prod
          </h2>
          <p className="text-outline text-3xl text-center">
            Là où votre regard prend tout son sens.
          </p>
          <p className="text-2xl font-semibold text-center">
            22 Rue de Poissy, 78100 Saint-Germain-en-Laye
          </p>
        </div>

        <div className="absolute mt-40">
          <Image
            src={"/Vector8.png"}
            alt="line"
            width={954}  
            height={400} 
            quality={100} 
            className="h-[400px] w-[954px] ml-60"
          />
        </div>

        <div className="flex items-center justify-center gap-8 w-full mt-10">
          <img
            src="img_s3.png"
            alt="Boss de Eye's Prod"
            className="w-[714px] rounded-[173px] img-shadow"
          />
        </div>
      </div>

      <div className="relative md:absolute -top-15 mr-32 right-0 z-50">
        <img
          src="/face_3.png"
          alt="Face 3"
          className="mx-auto md:h-[calc(110vh-5.2rem)] w-full sm:w-2/3 md:w-full "
        />
      </div>

      <div className="relative md:absolute top-80 mr-32 right-0 ">
        <img
          src="/Vector7.png"
          alt="Face 3"
          className="mx-auto  "
        />
      </div>
    </div>
  );
}
