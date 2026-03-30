import { testimonials } from "@/data/testimonials";
import { Card, CardContent } from "@/components/ui/Card";
import { Star, Quote } from "lucide-react";

export default function TestimonialSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-4">Words from Parents & Cadets</h2>
          <div className="w-20 h-1.5 bg-emerald-600 mx-auto rounded-full mb-6" />
          <p className="text-lg text-slate-600">
            Don't just take our word for it. Hear from those who have experienced the Commando Academy Sainik School difference.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test) => (
            <Card key={test.id} className="bg-slate-50 border-slate-100 relative pt-4">
              <div className="absolute top-4 right-6 text-emerald-200/50">
                <Quote className="w-16 h-16" />
              </div>
              <CardContent className="pt-8 relative z-10">
                <div className="flex text-amber-500 mb-6">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 italic mb-8 leading-relaxed">"{test.content}"</p>
                <div>
                  <h4 className="font-bold text-slate-900">{test.name}</h4>
                  <p className="text-sm text-emerald-700 font-medium">{test.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
