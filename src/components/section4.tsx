import Image from "next/image";

export function Section4() {
  return (
    <div className="w-full relative mt-20 px-26">
      <div className="absolute ml-[1000px]">
        <Image
          src={"/Vector9.png"}
          alt="Background Section 4"
          height={400}
          width={400}
          quality={100}
          className="w-[400px] h-[400px]"
        />
      </div>
      <p className="text-outline text-md sm:text-2xl md:text-3xl  w-[50%]">
        Depuis 20 ans, la boutique est un havre de création à
        Saint-Germain-en-Laye pour les amateurs de belles montures, de design
        pointu et d’artisanat exigeant. Un lieu où chaque paire raconte une
        histoire, choisie pour révéler une personnalité à travers son regard.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-20 sm:px-16 mt-20">
        <img src="/img_s4_1.png" className="rounded-[200px] w-full mx-auto" />
        <img
          src="/img_s4_2.png"
          className="rounded-full w-full mx-auto aspect-square my-auto"
        />
        <div className="text-center items-center justify-center flex flex-col gap-4 px-4 sm:px-0 font-semibold w-[75%]">
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
