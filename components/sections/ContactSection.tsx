import { MapPin, Phone, Mail } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-4">Get in Touch</h2>
          <div className="w-20 h-1.5 bg-emerald-600 mx-auto rounded-full mb-6" />
          <p className="text-lg text-slate-600">
            Have questions? Our team is available to help you with all admissions and course related queries.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm text-center hover:-translate-y-1 transition-transform">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Call Us</h3>
            <p className="text-slate-600 mb-4">We are available Mon-Sat, 9AM to 6PM</p>
            <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="text-emerald-700 font-semibold text-lg hover:underline">
              {siteConfig.contact.phone}
            </a>
          </div>

          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm text-center hover:-translate-y-1 transition-transform">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Visit Us</h3>
            <p className="text-slate-600 mb-4">Come and see our world-class campus</p>
            <p className="text-emerald-700 font-semibold text-lg">
              {siteConfig.contact.address}
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm text-center hover:-translate-y-1 transition-transform">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Email Us</h3>
            <p className="text-slate-600 mb-4">Send us your queries anytime</p>
            <a href={`mailto:${siteConfig.contact.email}`} className="text-emerald-700 font-semibold text-lg hover:underline break-all">
              {siteConfig.contact.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
