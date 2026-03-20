import { Target, Shield, Trophy } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: <Shield className="w-10 h-10 text-emerald-600" />,
      title: "Discipline First",
      description: "We instill military-grade discipline that transforms students into focused cadets."
    },
    {
      icon: <Target className="w-10 h-10 text-emerald-600" />,
      title: "Goal Oriented",
      description: "Structured curriculum designed specifically for clearing tough entrance exams."
    },
    {
      icon: <Trophy className="w-10 h-10 text-emerald-600" />,
      title: "Proven Results",
      description: "Highest selection rate in the region for Sainik School and Police Bharti."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-6">
              More Than Just a Coaching Institute
            </h2>
            <div className="w-20 h-1.5 bg-emerald-600 mb-8 rounded-full" />
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Located in the heart of Kelwad, Nagpur, Commando Army Police Career Academy is dedicated to nurturing the next generation of defenders. We provide a holistic environment that combines rigorous academic coaching with intense physical training.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our expert faculty and retired defense personnel guide students round the clock in our state-of-the-art campus.
            </p>
            <ul className="space-y-6">
              {features.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-50 rounded-lg shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-slate-200">
              <div className="w-full h-full" style={{ backgroundImage: "url('/images/about.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-emerald-900 border-4 border-white p-8 rounded-2xl shadow-xl hidden md:block">
              <p className="text-5xl font-extrabold text-amber-500 mb-2">10+</p>
              <p className="text-lg font-medium text-white">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
