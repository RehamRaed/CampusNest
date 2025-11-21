"use client";
import Icon from "./molecules/icon/Icon";
import Link from "next/link";
import useMenu from "@/hooks/useMenu";
import Button from "./molecules/button/Button";
import Image from "next/image";

export default function Header() {
  const { menuOpen, toggleMenu, closeMenu } = useMenu();

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="w-[90%] mx-auto px-1 md:px-4 h-[70px] flex justify-between items-center py-4 ">
          <Link href="/" className="cursor-pointer">
      <Image
        src="/images/logo.png"
        alt="logo-img"
        width={150}
        height={80}
      />
    </Link>

          <nav className="hidden lg:flex gap-4">
            <Link href="/" className="text-gray-700 hover:text-orange-400">
              Home
            </Link>
            <Link
              href="/explore"
              className="text-gray-700 hover:text-orange-400"
            >
              Explore
            </Link>
            <Link
              href="/how-it-works"
              className="text-gray-700 hover:text-orange-400"
            >
              How It Works
            </Link>
            <Link
              href="/explore"
              className="text-gray-700 hover:text-orange-400"
            >
              Explore
            </Link>
          </nav>

          <div className="flex items-center gap-5">
            <Icon name="Moon" color="#374151" />

            <Icon name="Languages" color="#374151" />

            <Link href="/auth/login" className="hidden lg:block">
              <Button variant="orangeSolid" size="md">
                Login
              </Button>
            </Link>

            <div className="lg:hidden">
              <button
                onClick={() => toggleMenu()}
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
            className="text-gray-700 hover:text-orange-400 text-center"
            onClick={() => closeMenu()}
          >
            Home
          </Link>
          <Link
            href="/explore"
            className="text-gray-700 hover:text-orange-400 text-center"
            onClick={() => closeMenu()}
          >
            Explore
          </Link>
          <Link
            href="/how-it-works"
            className="text-gray-700 hover:text-orange-400 text-center"
            onClick={() => closeMenu()}
          >
            How It Works
          </Link>
          <Link
            href="/explore"
            className="text-gray-700 hover:text-orange-400 text-center"
            onClick={() => closeMenu()}
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
