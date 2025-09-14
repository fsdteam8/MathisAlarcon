import Image from "next/image";

export function Section3() {
  return (
    <div className="w-full relative mt-8 md:mt-0">
      {/* Background Vector */}
      <div className="absolute left-0 -top-[1250px] ml-[350px] -z-10 hidden md:block">
        <Image
          src={"/Vector5.png"}
          alt="Background Section 3"
          height={900}
          width={900}
          quality={100}
          className="w-[1600px] h-[1220px]"
        />
      </div>

      {/* Title + Address */}
      <div className="flex flex-col items-center justify-center md:justify-start gap-16 py-5 w-full md:w-1/2">
        <div className="flex flex-col items-center justify-center gap-4 w-full mx-auto relative -mt-4">
          <h2 className="text-2xl md:text-5xl font-semibold text-center">
            Bienvenue chez Eyes Prod
          </h2>
          <p className="text-outline text-2xl md:text-3xl text-center w-[80%] md:w-full">
            Là où votre regard prend tout son sens.
          </p>
          <p className="text-2xl font-semibold text-center hidden md:flex">
            22 Rue de Poissy, 78100 Saint-Germain-en-Laye
          </p>
        </div>

        {/* Decorative Line (large screen only) */}
        <div className="absolute mt-30 hidden lg:block">
          <Image
            src={"/section3line2.svg"}
            alt="line"
            width={1104}
            height={680}
            quality={100}
            className="h-[690px] w-[1104px] ml-68"
          />
        </div>

        {/* Main Boss Image */}
        <div className="flex items-center justify-center gap-8 2xl:w-[700px] 2xl:h-[400px] xl:w-[500px] xl:h-[300px] -mt-10 p-2 md:mt-[115px] md:ml-8">
          <Image
            src="/img_s3.png"
            alt="Boss de Eye's Prod"
            width={700}
            height={400}
            quality={100}
            className="w-[300px] sm:w-[350px] md:w-[714px] rounded-[80px] sm:rounded-[90px] 2xl:rounded-[173px] img-shadow"
          />
        </div>
      </div>

      {/* Address for mobile only */}
      <div className="flex justify-center">
        <p className="text-[14px] sm:text-lg md:text-xl font-semibold text-center flex xl:hidden">
          Retrouvez-nous <br />
          22 Rue de Poissy, 78100 Saint-Germain-en-Laye
        </p>
      </div>

      {/* Illustration Face */}
      <div className="relative flex justify-center mt-15 mr-2 md:mt-4 md:absolute md:top-0 2xl:w-[990px] 2xl:h-[990px] xl:w-[710px] xl:h-[690px] md:mr-4  right-0 z-50">
        <Image src="/illustraction.png" alt="Face 3" height={990} width={990} />
      </div>

      {/* Mobile Vector */}
      <div className="absolute md:hidden -mt-[450px] bb:-mt-[700px] lg:-mt-[1000px] ml-30 bb:ml-[350px] lg:ml-52 block">
        <Image
          src="/Vector15.png"
          alt="Face 3"
          width={500}
          height={500}
          className="w-[300px] h-[550px] bb:h-[800px] lg:w-[480px] lg:h-[1100px] sm:w-2/3 md:w-full"
        />
      </div>

      {/* Extra Vector (xl only) */}
      <div className="relative md:absolute  2xl:w-[500px] xl:w-[400px] xl:h-[700px] 2xl:h-[800px] top-80 mr-10 right-0 hidden xl:block">
        <Image
          width={600}
          height={700}
          src="/Vector7.png"
          alt="Face 3"
          className="mx-auto"
        />
      </div>
    </div>
  );
}
