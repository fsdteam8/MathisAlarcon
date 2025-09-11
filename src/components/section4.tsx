import Image from "next/image";

export function Section4() {
  return (
    <div className="w-full relative mt-20 px-4 sm:px-8 md:px-26">
      {/* Vector9 */}
      <div className="absolute ml-[100px] sm:ml-[400px] md:ml-[920px] hidden lg:block">
        <Image
          src={"/Vector9.png"}
          alt="Background Section 4"
          height={400}
          width={400}
          quality={100}
          className="w-[180px] h-[140px] sm:w-[350px] sm:h-[280px] md:w-[500px] md:h-[400px]"
        />
      </div>

      {/* Vector13 */}
      <div className="absolute ml-[40px] mt-20 sm:ml-[120px] sm:mt-44 md:ml-[275px] md:mt-72 hidden lg:block">
        <Image
          src={"/Vector13.png"}
          alt="Background Section 4"
          height={400}
          width={400}
          quality={100}
          className="w-[220px] h-[160px] sm:w-[400px] sm:h-[300px] md:w-[650px] md:h-[500px]"
        />
      </div>

      {/* Top Text */}
      <p className="text-outline text-sm sm:text-lg md:text-2xl lg:text-3xl w-full sm:w-[80%] md:w-[50%]">
        Depuis 20 ans, la boutique est un havre de création à
        Saint-Germain-en-Laye pour les amateurs de belles montures, de design
        pointu et d’artisanat exigeant. Un lieu où chaque paire raconte une
        histoire, choisie pour révéler une personnalité à travers son regard.
      </p>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-20 sm:px-8 md:px-16 mt-20 sm:mt-44">
        <img
          src="/img_s4_1.png"
          className="rounded-[100px] sm:rounded-[200px] w-3/4 sm:w-full mx-auto"
        />

        <img
          src="/img_s4_2.png"
          className="rounded-full w-3/4 sm:w-full mx-auto aspect-square my-auto"
        />

        <img
          src="/img_s4_3.png"
          className="rounded-[100px] w-[250px] h-[350px] sm:w-full mx-auto aspect-square my-auto block lg:hidden"
        />

        {/* Vector14 */}
        <div className="absolute  md:ml-[760px] md:mt-[360px] hidden lg:block">
          <Image
            src={"/Vector14.png"}
            alt="Background Section 4"
            height={400}
            width={400}
            quality={100}
            className="w-[120px] h-[180px] sm:w-[200px] sm:h-[280px] md:w-[250px] md:h-[350px]"
          />
        </div>

        {/* Bottom Text */}
        <div className=" flex-col items-center justify-center text-center gap-4 px-4 sm:px-0 font-semibold w-full sm:w-[90%] md:w-[75%] mx-auto hidden lg:flex">
          Découvrez une sélection pointue de créateurs d’exception : Peter and
          May, Weareannu, Folk, Wissing, Emmanuelle Khanh, Pantos Paris, Cutler
          and Gross, Mascot, Masahiro Maruyama, Alhem, EYEVAN, Aude Hérouard,
          Jean-Philippe Joly, Albert Duval, Brique et la Violette, Anne et
          Valentin. Des univers uniques, entre savoir-faire, audace et élégance.
        </div>
      </div>
    </div>
  );
}
