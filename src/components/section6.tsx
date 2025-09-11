export function Section6() {
  return (
    <div className="min-h-screen w-full relative mt-26 grid grid-cols-1 sm:grid-cols-2">
      {/* Left Image Section */}
      <div
        className="relative w-full h-[500px] sm:h-auto bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/img_s6.png')" }}
      ></div>

      {/* Right Text Section */}
      <div className="items-center text-center justify-center flex flex-col gap-6 sm:gap-8 p-6 sm:p-12 md:p-16 font-semibold text-3xl sm:text-lg md:text-xl lg:text-3xl text-[#000000] uppercase">
        ici ça sera les informations importantes
        <br />
        Les mentions légales, google maps, horaires etc
      </div>
    </div>
  );
}
