export function Section6() {
  return (
    <div className="h-screen max-h-screen w-full relative mt-26 grid grid-cols-1 sm:grid-cols-2">
      <div
        className="relative w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/img_s6.png')" }}
      ></div>
      <div className="items-center justify-center flex flex-col gap-8 p-8 sm:p-16 font-semibold text-lg sm:text-xl text-[#000000]">
        ici ça sera les informations importantesLes mentions légales, google
        maps, horaires etc
      </div>
    </div>
  );
}
