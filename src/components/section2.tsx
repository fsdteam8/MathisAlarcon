import Image from "next/image";

export function Section2() {
  return (
    <div className="my-18">
      <div className="flex flex-col lg:flex-row relative">
        {/* Left Image */}
        <div className="mt-40 z-30 lg:-mt-26 order-3 lg:order-1">
          <img
            src="/face_2.png"
            alt="Face 2"
            className="mx-auto h-[400px] sm:h-[600px] md:h-[800px] lg:h-[1027px] w-full sm:w-2/3 md:w-3/4 lg:w-[1055px]"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col items-center lg:items-start order-1 lg:order-2">
          {/* Heading */}
          <h2 className="order-1 text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center lg:text-left lg:w-2/3 ml-0 lg:ml-36 leading-8 md:leading-12 lg:leading-[4rem] tracking-wide max-w-[80%]">
            L'expertise à l'origine de chaque sélection
          </h2>

          {/* Text & Image Row */}
          <div className="order-2 flex flex-col md:flex-row gap-6 sm:gap-10 mt-10 md:mt-20 lg:mt-44 items-center lg:items-start lg:-ml-40">
            <div>
              <p className="text-outline text-lg sm:text-xl md:text-2xl lg:text-3xl text-left md:text-right max-w-[90%] md:max-w-[500px] mx-auto hidden md:flex">
                chaque modèle est choisi avec passion, pour ne proposer que des
                pièces coup de cœur. des formes, des couleurs, des
                personnalités. chaque pièce à quelque chose à vous dire.
              </p>
              <p className="text-outline text-lg sm:text-xl md:text-2xl lg:text-3xl text-left md:text-right max-w-[100%] md:max-w-[500px] mx-auto flex md:hidden relative z-20 ">
                chaque modèle est choisi <br /> avec passion, <br /> pour ne
                proposer que <br /> des pièces coup de cœur. <br /> des formes,
                des couleurs, <br /> des personnalités. <br /> chaque pièce{" "}
                <br /> à quelque chose <br /> à vous dire.
              </p>
            </div>

            <div className="mt-40 ml-32 md:ml-0 md:mt-0 lg:-mt-20 z-10 absolute md:relative blur-b-lg">
              <Image
                src="/img_s2.png"
                alt="Image Section 2"
                width={400}
                height={400}
                className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[392px] h-[350px] sm:h-[450px] md:h-[520px] lg:h-[589px] rounded-full mx-auto"
              />
            </div>
          </div>

          {/* Background Vector */}
          <div className="absolute top-20 sm:top-28 md:top-32 lg:top-34 -ml-2 sm:-ml-5 md:-ml-7 hidden md:flex">
            <Image
              src="/Vector4.png"
              alt="Image Section 2"
              width={400}
              height={400}
              className="w-[300px] sm:w-[600px] md:w-[750px] lg:w-[930px] h-[250px] sm:h-[450px] md:h-[600px] lg:h-[750px]"
            />
          </div>
          {/* Background Vector */}
          <div className="absolute top-[380px] mr-64 flex md:hidden">
            <Image
              src="/Vector6.png"
              alt="Image Section 2"
              width={400}
              height={400}
              className="w-[100px] h-[200px]"
            />
          </div>
          {/* Background Vector */}
          <div className="absolute top-[580px] mr-8 ml-4  -mt-1 flex md:hidden">
            <Image
              src="/Vector10.png"
              alt="Image Section 2"
              width={600}
              height={600}
              className="w-[700px] h-[400px] md:w-[200px] md:h-[200px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
