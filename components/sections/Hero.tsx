import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-slate-900 overflow-hidden">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-bg.png')",
        }}
      />
      <div className="absolute inset-0 bg-slate-950/60" />
      <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-emerald-950/40 to-transparent" />

      <div className="container relative z-10 px-4 pt-20 pb-16 md:pt-32 text-center flex flex-col items-center">
        <span className="inline-block py-1 px-3 rounded-full bg-emerald-900/50 text-emerald-400 text-sm font-semibold mb-6 border border-emerald-700/50 backdrop-blur-sm">
          Admissions Open 2024-25
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 max-w-4xl leading-tight">
          Shape Your Destiny at{" "}
          <span className="text-emerald-500">Commando Academy</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl">
          Premier coaching for Sainik School, NDA, and Maharashtra Police
          Bharti. We forge leaders with discipline, courage, and excellence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button
            size="lg"
            asChild
            className="text-lg group bg-emerald-600 hover:bg-emerald-500 text-white border-0 h-14 px-8 shadow-lg shadow-emerald-900/50"
          >
            <Link href="#admission">
              Apply Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="text-lg bg-white/10 hover:bg-white/20 border-white/20 text-white backdrop-blur-sm h-14 px-8"
          >
            <Link href="#courses">Explore Courses</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
