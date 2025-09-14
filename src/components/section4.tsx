import Image from "next/image";

export function Section4() {
  return (
    <div className="relative px-4 2xl:pt-50 pt-[115px] md:pt-[20px] sm:px-8 md:px-20">
      {/* Vector 9 */}
      <div className="absolute ml-[100px] hidden xl:block sm:ml-[400px] md:ml-[920px]">
        <Image
          src="/Vector9.png"
          alt="Vector 9 Background"
          width={400}
          height={400}
          quality={100}
          className="h-[140px] w-[180px] sm:h-[280px] sm:w-[350px] md:h-[220px] 2xl:h-[400px] 2xl:w-[500px]"
        />
      </div>

      {/* Vector 13 */}
      <div className="absolute mt-80 ml-[40px] hidden xl:block sm:ml-[120px] sm:mt-44 md:ml-[275px] md:mt-40 2xl:mt-72">
        <Image
          src="/Vector13.png"
          alt="Vector 13 Background"
          width={400}
          height={400}
          quality={100}
          className="h-[160px] w-[220px] sm:h-[300px] sm:w-[400px] md:h-[500px] md:w-[650px]"
        />
      </div>

      {/* Top Text */}
      <p className="text-outline w-full text-sm sm:w-[80%] sm:mx-auto lg:mx-0 lg:text-start sm:text-center sm:text-lg md:w-[50%] md:text-2xl 2xl:text-3xl">
        Depuis 20 ans, la boutique est un havre de création à
        Saint-Germain-en-Laye pour les amateurs de belles montures, de design
        pointu et d’artisanat exigeant. Un lieu où chaque paire raconte une
        histoire, choisie pour révéler une personnalité à travers son regard.
      </p>

      {/* Grid Section */}
      <div className="mt-20 grid grid-cols-1 gap-10 sm:mt-44 sm:grid-cols-3 sm:gap-20 sm:px-8 md:px-16">
        {/* Image 1 */}
        <Image
          src="/img_s4_1.png"
          alt="Image Section 4 - 1"
          width={300}
          height={300}
          className="mx-auto w-3/4 rounded-[100px] sm:w-full sm:rounded-[200px]"
        />

        {/* Image 2 */}
        <Image
          src="/img_s4_2.png"
          alt="Image Section 4 - 2"
          width={200}
          height={200}
          className="mx-auto my-auto aspect-square w-3/4 rounded-full sm:w-full"
        />

        {/* Image 3 (only mobile/laptop) */}
        <Image
          src="/img_s4_3.png"
          alt="Image Section 4 - 3"
          width={200}
          height={200}
          className="mx-auto my-auto block aspect-square w-[250px] h-[350px] sm:w-full rounded-[100px] xl:hidden"
        />

        {/* Vector 14 */}
        <div className="absolute hidden 2xl:block  2xl:ml-[795px] lg:mt-[360px]">
          <Image
            src="/Vector14.png"
            alt="Vector 14 Background"
            width={400}
            height={400}
            quality={100}
            className="h-[180px] w-[120px] sm:h-[280px] sm:w-[200px] md:h-[350px] md:w-[250px]"
          />
        </div>

        {/* Bottom Text */}
        <div className="mx-auto hidden w-full flex-col items-center justify-center gap-4 px-4 text-center font-semibold sm:w-[90%] sm:px-0 md:w-[75%] xl:flex">
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
