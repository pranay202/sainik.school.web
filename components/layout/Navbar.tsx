"use client";

import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Gallery", path: "/gallery" },
    { name: "Admissions", path: "/admissions" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <img
            src="/logo.png"
            alt="Commando Academy Logo"
            className="w-12 h-12 rounded-sm object-cover"
          />
          <span className="font-(family-name:--font-russo-one) text-2xl text-emerald-900 leading-tight uppercase tracking-wider relative top-px">
            Commando Academy
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className="text-sm font-medium text-slate-700 hover:text-emerald-700 transition-colors"
            >
              {route.name}
            </Link>
          ))}
          <Button asChild className="ml-4 gap-2">
            <Link href="tel:+919876543210">
              <Phone className="w-4 h-4" />
              Call Now
            </Link>
          </Button>
        </nav>
        <button
          className="md:hidden p-2 text-slate-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-white px-4 py-4 space-y-4 shadow-lg absolute w-full left-0">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-slate-700 hover:text-emerald-700"
            >
              {route.name}
            </Link>
          ))}
          <Button className="w-full mt-4 gap-2" size="lg" asChild>
            <Link href="tel:+919876543210">
              <Phone className="w-4 h-4" /> Call Now
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
}
