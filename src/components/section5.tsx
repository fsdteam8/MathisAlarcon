export function Section5() {
  return (
    <div className="w-full relative mt-26 px-4 sm:px-16 md:px-26">
      {/* Title */}
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center">
        EYES PROD <span className="title-outline">vintage</span>
      </h1>
      {/* Description */}
      <p className="text-left text-outline text-sm sm:text-lg md:text-2xl lg:text-3xl mt-6 sm:mt-8 w-full sm:w-[90%] md:w-[80%] mx-auto">
        À l’étage de la boutique se cache un univers à part : une collection
        100% vintage, composée de montures originales jamais portées,
        soigneusement chinées au fil des années. Chaque pièce est unique,
        sélectionnée avec exigence parmi les plus belles créations d’époque,
        issues d’une collection personnelle rare et précieuse. cet espace est un
        véritable hommage au design lunetier, un aperçu d’une collection infinie
        où le temps semble suspendu. Un lieu pour les amateurs de caractère, de
        singularité et d’authenticité.
      </p>
 
      {/* Mobile & Tablet Layout */}
      <div className="flex flex-col items-center gap-6 sm:gap-10 md:hidden my-20 mb-[750px] relative">
        <div className="w-[250px] h-[300px] rounded-full overflow-hidden flex items-center justify-center absolute -mr-24">
          <img
            src="/img_s5_3.png"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <div className="w-[300px] h-[220px] rounded-full overflow-hidden flex items-center justify-center mt-66 absolute z-10 mr-20 ">
          <img
            src="/img_s5_2.png"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <div className="w-[250px] h-[250px] rounded-full overflow-hidden flex items-center justify-center mt-[450px] ml-28 absolute z-20">
          <img
            src="/img_s5_1.png"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      {/* /*  Large Screen Layout */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
        <img
          src="/img_s5_1.png"
          className="rounded-[50px] sm:rounded-[80px] md:rounded-[110px] w-full aspect-square"
        />
        <img
          src="/img_s5_2.png"
          className="rounded-[50px] sm:rounded-[80px] md:rounded-[100px] w-full h-[300px] sm:h-[380px] md:h-[450px] mt-6 sm:mt-8 md:mt-12 aspect-square object-cover"
        />
        <img
          src="/img_s5_3.png"
          className="rounded-[50px] sm:rounded-[80px] md:rounded-[100px] w-full aspect-square"
        />
      </div>
    </div>
  );
}
