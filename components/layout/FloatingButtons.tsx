"use client";

import { MessageCircle, PhoneCall } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 group">
      <a 
        href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} 
        className="w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-emerald-700 hover:scale-110 transition-all focus:outline-none focus:ring-4 focus:ring-emerald-600/30"
        aria-label="Call Us"
      >
        <PhoneCall className="w-6 h-6" />
      </a>
      <a 
        href={`https://wa.me/${siteConfig.contact.whatsapp}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#20bd5a] hover:scale-110 transition-all focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}
