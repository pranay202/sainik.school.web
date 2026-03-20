import { Dumbbell, BookOpen, Utensils, Home, Wifi, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";

export default function FacilitiesSection() {
  const facilities = [
    { icon: <Home className="w-8 h-8" />, name: "Boys & Girls Hostel" },
    { icon: <Dumbbell className="w-8 h-8" />, name: "Large Training Ground" },
    { icon: <BookOpen className="w-8 h-8" />, name: "Digital Library" },
    { icon: <Utensils className="w-8 h-8" />, name: "Hygienic Mess" },
    { icon: <Wifi className="w-8 h-8" />, name: "24/7 Smart Campus" },
    { icon: <Users className="w-8 h-8" />, name: "Expert Mentorship" },
  ];

  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">World Class Facilities</h2>
          <div className="w-20 h-1.5 bg-emerald-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-slate-300">
            We provide everything a cadet needs to focus completely on their goal.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {facilities.map((fac, idx) => (
            <Card key={idx} className="bg-slate-800 border-slate-700 hover:bg-emerald-900/40 hover:border-emerald-500/50 transition-colors text-center py-8 group shadow-none">
              <CardContent className="p-0 flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-slate-700/50 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 group-hover:bg-emerald-900/50 transition-all">
                  {fac.icon}
                </div>
                <h4 className="font-medium text-slate-200 px-2">{fac.name}</h4>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
