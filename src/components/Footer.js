import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 py-6 border-t border-gray-200">
      <div className="w-[90%] mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex gap-3 mb-4 md:mb-0 text-sm md:text-md">
          <Link href="/legal/terms" className="hover:text-gray-900 transition-colors">
            Terms of Service
          </Link>
          <Link href="/legal/privacy" className="hover:text-gray-900 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/legal/cookies" className="hover:text-gray-900 transition-colors">
            Cookie Policy
          </Link>
        </div>

         <div className="text-sm text-gray-500 text-center md:text-right">
          © 2025 CampusNest — Graduation Project by <span className="font-semibold">Reham M.</span>
        </div>
      </div>
    </footer>
  );
}
