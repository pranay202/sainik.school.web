"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ContactModal } from "@/components/ui/ContactModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const pathname = usePathname();

  const routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Admissions & Courses", path: "/admissions" },
    { name: "Gallery", path: "/gallery" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && pathname !== "/") return false;
    return pathname.startsWith(path);
  };

  const activeStyles =
    "text-emerald-700 border-b-2 border-emerald-600 shadow-[0_4px_6px_-1px_rgba(16,185,129,0.1)]";
  const inactiveStyles =
    "text-slate-700 hover:text-emerald-700 border-b-2 border-transparent";

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <img
              src="/logo.png"
              alt="Commando Academy Sainik Shool Logo"
              className="w-12 h-12 rounded-sm object-cover"
            />
            <p className="flex flex-col h-[100%]">
            <span className="font-(family-name:--font-russo-one) text-base text text-emerald-900 leading-tight uppercase tracking-wider relative top-px">
              Commando Academy 
            </span>
            <span className="font-(family-name:--font-russo-one) text-[8px] text-emerald-900 leading-tight uppercase tracking-wider relative top-px">
              Commando Academy Sainik Shool
            </span>
          </p>
          </Link>
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={`text-sm font-semibold transition-all duration-200 px-1 py-1 ${
                  isActive(route.path) ? activeStyles : inactiveStyles
                }`}
              >
                {route.name}
              </Link>
            ))}
            <button
              onClick={() => setIsContactOpen(true)}
              className={`text-sm font-semibold transition-all duration-200 px-1 py-1 border-b-2 border-transparent text-slate-700 hover:text-emerald-700`}
            >
              Contact
            </button>
            <Button asChild className="ml-4 gap-2">
              <Link href="tel:+919876543210">
                <Phone className="w-4 h-4" />
                Call Now
              </Link>
            </Button>
          </nav>
          <button
            className="lg:hidden p-2 text-slate-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t bg-white px-4 py-4 space-y-4 shadow-lg absolute w-full left-0">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                onClick={() => setIsOpen(false)}
                className={`block text-base font-medium p-2 rounded-lg ${
                  isActive(route.path)
                    ? "bg-emerald-50 text-emerald-700"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {route.name}
              </Link>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                setIsContactOpen(true);
              }}
              className="block w-full text-left text-base font-medium p-2 rounded-lg text-slate-700 hover:bg-slate-50"
            >
              Contact
            </button>
            <Button className="w-full mt-4 gap-2" size="lg" asChild>
              <Link href="tel:+919876543210">
                <Phone className="w-4 h-4" /> Call Now
              </Link>
            </Button>
          </div>
        )}
      </header>
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}
