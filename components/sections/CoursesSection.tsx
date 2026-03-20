import { courses } from "@/data/courses";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { CheckCircle2 } from "lucide-react";

export default function CoursesSection() {
  return (
    <section id="courses" className="py-24 bg-slate-50 border-t border-b border-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-4">Our Training Programs</h2>
          <div className="w-20 h-1.5 bg-emerald-600 mx-auto rounded-full mb-6" />
          <p className="text-lg text-slate-600">
            Choose the right path for your career. We offer specialized coaching programs tailored to ensure your success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="flex flex-col overflow-hidden hover:-translate-y-1 transition-transform duration-300">
              <div 
                className="h-48 w-full bg-slate-200 relative overflow-hidden group" 
              >
                <div className="absolute inset-0 bg-emerald-900/20 group-hover:bg-transparent transition-colors z-10" />
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${course.imageUrl})`, backgroundSize: "cover", backgroundPosition: "center" }} />
              </div>
              <CardHeader className="bg-white">
                <CardTitle>{course.title}</CardTitle>
                <div className="flex items-center gap-4 text-sm font-medium text-emerald-700 mt-2">
                  <span className="bg-emerald-50 px-3 py-1 rounded-full">{course.duration}</span>
                  <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full">{course.eligibility}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col bg-white">
                <p className="mb-6 flex-1 text-slate-600">{course.description}</p>
                <ul className="space-y-3">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
