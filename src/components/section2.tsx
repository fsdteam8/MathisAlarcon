import Image from "next/image";

export function Section2() {
  return (
    <div className="2xl:mt-10 xl:mt-10 my-16">
      <div className="flex flex-col xl:flex-row relative">
        {/* Left Image */}
        <div
          className="order-3 xl:order-1 mt-68 bb:mt-80 xl:mt-8 z-30 
                     2xl:w-[1027px] 2xl:h-[1027px] 
                     xl:w-[800px] xl:h-[800px] 
                     md:w-[600px] md:h-[600px] sm:mt-[420px]"
        >
          <Image
            src="/face_2.png"
            alt="Face 2"
            width={900}
            height={500}
            className="lg:w-full bb:w-[80%] mm:w-[80%] bb:mx-auto aspect-square object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col items-center xl:items-start order-1 xl:order-2">
          {/* Heading */}
          <h2
            className="order-1 font-semibold tracking-wide text-center xl:text-left 
                       text-3xl sm:text-3xl md:text-4xl xl:text-4xl 2xl:text-5xl 
                       leading-8 md:leading-12 xl:leading-[4rem] 
                       max-w-[80%] xl:w-2/3 ml-0 xl:ml-36"
          >
            L&apos;expertise à l&apos;origine de chaque sélection
          </h2>

          {/* Text & Image Row */}
          <div
            className="order-2 flex flex-col md:flex-row gap-6 sm:gap-10 
                       mt-10 md:mt-20 2xl:mt-44 items-center 
                       2xl:items-start 2xl:-ml-40"
          >
            <div>
              {/* Desktop Text */}
              <p
                className="hidden bb:flex text-outline text-lg sm:text-xl md:text-2xl 2xl:text-3xl 
                           text-left md:text-right max-w-[90%] xl:max-w-[500px] mx-auto bb:text-center"
              >
                chaque modèle est choisi avec passion, pour ne proposer que des
                pièces coup de cœur. des formes, des couleurs, des
                personnalités. chaque pièce à quelque chose à vous dire.
              </p>

              {/* Mobile Text */}
              <p
                className="flex bb:hidden relative z-20 text-outline text-lg sm:text-xl md:text-2xl 2xl:text-3xl 
                           text-left md:text-right max-w-[100%] xl:max-w-[500px] mx-auto"
              >
                chaque modèle est choisi <br /> avec passion, <br /> pour ne
                proposer que <br />
                des pièces coup de cœur. <br /> des formes, des couleurs, <br />{" "}
                des personnalités. <br />
                chaque pièce <br /> à quelque chose <br /> à vous dire.
              </p>
            </div>

            {/* Left Image */}
            <div
              className="absolute md:relative z-10 blur-b-lg 
                         mt-56 bb:mt-32 xl:-mt-20 ml-32 md:ml-10 xl:ml-42 2xl:ml-0 sm:mt-36"
            >
              <Image
                src="/img_s2.png"
                alt="Image Section 2"
                width={392}
                height={589}
                className="mx-auto rounded-full 
                           w-[250px] sm:w-[300px] md:w-[350px] xl:w-[350px] 2xl:w-[392px] 
                           h-[350px] sm:h-[450px] md:h-[520px] xl:h-[400px] 2xl:h-[589px]"
              />
            </div>
          </div>

          {/* Background Vectors */}
          <div className="hidden md:flex absolute top-20 sm:top-28 md:top-32 xl:top-34 -ml-2 sm:-ml-5 md:-ml-7">
            <Image
              src="/line2.svg"
              alt="Vector"
              width={930}
              height={750}
              className="w-[300px] sm:w-[600px] md:w-[750px] xl:h-[600px] 
                         2xl:w-[930px] h-[250px] sm:h-[450px] md:h-[500px] 2xl:h-[750px]"
            />
          </div>

          {/* Mobile vectors */}
          <div className="absolute md:hidden top-[435px] bb:top-[400px] md:top-0 mr-62 sm:top-[450px] sm:mr-70">
            <Image
              src="/Vector6.png"
              alt="Vector"
              width={100}
              height={200}
              className="w-[100px] h-[250px]"
            />
          </div>

          <div className="mt-22 ml-5 absolute top-[590px] bb:top-[555px] bb:left-[165px] sm:left-[235px] lg:left-[280px] sm:top-[603px] mr-8 xl:hidden">
            <Image
              src="/Vector10.png"
              alt="Vector"
              width={700}
              height={400}
              className="w-[700px] bb:w-[450px] sm:w-[550px] h-[400px] bb:h-[550px] sm:h-[700px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
