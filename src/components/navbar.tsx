// import Image from "next/image";


export default function Navbar() {
    return <nav className="w-full p-4 grid grid-cols-3">
        <div className="w-full h-full items-center hidden sm:flex">Accueil</div>
        <div className="w-full col-span-3 sm:col-span-1">
            <img src="/logo_rouge.png" alt="Eye's Prod" className="w-28 mx-auto" />
        </div>
        <div className="w-full items-center justify-end gap-4 hidden sm:flex">
            <a href="#">Contact</a>
            <a href="">A propos</a>
        </div>
    </nav>
}