"use client"
import Icon from "./atoms/Icon";
import Link from "next/link";
import useMenu from "@/hooks/useMenu";
import Button from "./atoms/Button";
import Image from "next/image";

export default function Header() {
  const { menuOpen, toggleMenu, closeMenu } = useMenu();

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="w-[90%] mx-auto px-1 md:px-4 h-[70px] flex justify-between items-center py-4 ">
          <Image src="/images/logo.png" alt="logo-img" width={150} height={80}
          />

          <nav className="hidden lg:flex gap-4">
            <Link href="/" className="hover:text-orange-400">
              Home
            </Link>
            <Link href="/explore" className="hover:text-orange-400">
              Explore
            </Link>
            <Link href="/how-it-works" className="hover:text-orange-400">
             How It Works
            </Link>
            <Link href="/explore" className="hover:text-orange-400">
              Explore
            </Link>
          </nav>

          <div className="flex items-center gap-5">
            <Icon name="Moon" />

            <Icon name="Languages" />

          <Link href="/auth/login" className="hidden lg:block">
  <Button variant="orangeSolid" size="md">
    Login
  </Button>
</Link>


            <div className="lg:hidden">
              <button
                onClick={() => toggleMenu(!menuOpen)}
                className="focus:outline-none"
              >
                <i className="bi bi-list text-2xl"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300"
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-[50%] bg-white shadow-lg p-5 flex flex-col space-y-4 z-50 transform transition-all duration-300 ease-in-out ${
          menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <button
          onClick={closeMenu}
          className="self-end mb-2 text-gray-600 hover:text-black cursor-pointer"
        >
          <Icon name="X" />
        </button>

        <div className="mt-5 flex flex-col gap-5 ">
          <Link
            href="/"
            className="hover:text-blue-600 text-center"
            onClick={() => toggleMenu(false)}
          >
            Home
          </Link>
          <Link
            href="/explore"
            className="hover:text-blue-600 text-center"
            onClick={() => toggleMenu(false)}
          >
            Explore
          </Link>
          <Link
            href="/explore"
            className="hover:text-blue-600 text-center"
            onClick={() => toggleMenu(false)}
          >
            Explore
          </Link>
          <Link
            href="/explore"
            className="hover:text-blue-600 text-center"
            onClick={() => toggleMenu(false)}
          >
            Explore
          </Link>
        </div>
        <Button variant="orangeSolid" size="md">
          Login
        </Button>
      </div>

      <div className="pt-[70px]"></div>
    </>
  );
}