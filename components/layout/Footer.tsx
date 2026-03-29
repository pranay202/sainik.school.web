import Link from "next/link";
import { siteConfig } from "@/lib/constants";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 text-slate-300">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
        <div>
          <div className="flex flex-col mb-4">
            <h3 className="text-xl font-bold text-white">Commando Academy</h3>
          </div>
          <p className="mb-4 text-slate-400">
            {siteConfig.description}
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4 uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-3">
            <li><Link href="/about" className="hover:text-emerald-400 transition">About Us</Link></li>
            {/* <li><Link href="/courses" className="hover:text-emerald-400 transition">Courses</Link></li> */}
            <li><Link href="/admissions" className="hover:text-emerald-400 transition">Courses</Link></li>
            <li><Link href="/gallery" className="hover:text-emerald-400 transition">Gallery</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4 uppercase tracking-wider">Contact</h4>
          <ul className="space-y-3 text-slate-400">
            {/* <li className="pb-2">
              <a 
                href={`mailto:${siteConfig.contact.email}`} 
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow shadow-emerald-900/20 w-full sm:w-auto"
              >
                <Mail className="w-4 h-4" />
                Email Us
              </a>
            </li> */}
            <li>Phone: <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-emerald-400 transition">{siteConfig.contact.phone}</a></li>
            <li>Address: {siteConfig.contact.address}</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4 uppercase tracking-wider">Follow Us</h4>
          <div className="flex space-x-4">
            <a href={siteConfig.links.facebook} className="hover:text-emerald-400 transition" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href={siteConfig.links.instagram} className="hover:text-emerald-400 transition" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href={siteConfig.links.twitter} className="hover:text-emerald-400 transition" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()}. All rights reserved.</p>
        <p className="mt-2 md:mt-0 text-xs text-slate-400">Powered by <a href="https://www.dealintra.in" target="_blank" rel="noopener noreferrer" className="font-bold">Dealintra Infotech</a>.</p>
      </div>
    </footer>
  );
}
