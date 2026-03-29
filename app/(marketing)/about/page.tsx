"use client";

import AboutSection from "@/components/sections/AboutSection";
import Hero from "@/components/sections/Hero";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header Section */}
      <div className="bg-emerald-900 py-24 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.png')] bg-repeat" />
        <h1 className="text-4xl md:text-6xl font-bold mb-6 relative z-10 font-(family-name:--font-russo-one) uppercase tracking-wider">
          Our Heritage & Mission
        </h1>
        <div className="w-24 h-1.5 bg-amber-500 mx-auto rounded-full mb-8 relative z-10" />
        <p className="text-emerald-100 text-xl max-w-3xl mx-auto px-4 relative z-10 leading-relaxed font-medium">
          Developing leaders of tomorrow with the discipline of soldiers and the wisdom of scholars.
        </p>
      </div>

      <AboutSection />

      {/* History Section */}
      <section className="py-24 bg-slate-50 border-t border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-white p-2">
                <img 
                  src="/about-2.jpeg" 
                  alt="Our History" 
                  className="w-full aspect-video object-cover rounded-xl"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-6">Established in 2010</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Founded by retired defense veterans in 2010, Commando Army Police Career Academy began with a single vision: to provide rural youth with the same top-tier preparation for Sainik School and NDA entrance exams that urban students enjoy.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Over the last 15 years, we have grown from a small training camp into Nagpur's leading residential academy, boasting a selection rate that is envy to many. Our "Kelwad Campus" has become a landmark for excellence in military preparation.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                  <p className="text-4xl font-bold text-emerald-600 mb-1">5000+</p>
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Students Trained</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                  <p className="text-4xl font-bold text-emerald-600 mb-1">85%</p>
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-emerald-50 p-10 rounded-3xl border border-emerald-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg rotate-3">
                <span className="text-white text-3xl font-bold">M</span>
              </div>
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">Our Mission</h3>
              <p className="text-emerald-800/80 leading-relaxed text-lg">
                To bridge the gap between aspirations and achievements for students aiming for defense careers through rigorous physical training and exceptional academic coaching.
              </p>
            </div>
            <div className="bg-amber-50 p-10 rounded-3xl border border-amber-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg -rotate-3">
                <span className="text-white text-3xl font-bold">V</span>
              </div>
              <h3 className="text-2xl font-bold text-amber-900 mb-4">Our Vision</h3>
              <p className="text-amber-800/80 leading-relaxed text-lg">
                To be the most trusted name in defense secondary education in India, creating resilient and disciplined citizens who serve the nation with honor.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
