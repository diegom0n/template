import Link from "next/link";

const Header = () => {
    return (
        <div className="header bg-white-600 shadow-md">
          <div className="flex justify-center items-center px-4 py-2 max-w-screen-xl mx-auto w-full">
            <div className="flex text-black text-l font-semibold gap-8">
              <Link href="/">Inicio</Link>
              <Link href="/">Sobre Nosotros</Link>
              <Link href="/tramites">Trámites</Link>
              <Link href="/">Noticias</Link>
            </div>
          </div>
        </div>
      );
}
 
export default Header;