import { results } from "@/data/results";
import { Card, CardContent } from "@/components/ui/Card";

export default function ResultsSection() {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-4">
            Our Proud Achievers
          </h2>
          <div className="w-20 h-1.5 bg-emerald-600 mx-auto rounded-full mb-6" />
          <p className="text-lg text-slate-600">
            We don't just teach. We produce results. Meet our selected
            candidates who are now serving the nation.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((result) => (
            <Card
              key={result.id}
              className="overflow-hidden bg-white hover:shadow-lg transition-all group"
            >
              <div className="aspect-4/3 w-full bg-slate-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent opacity-80 z-10" />
                <div
                  className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${result.imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top center",
                  }}
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wider mb-2 inline-block">
                    Selected
                  </span>
                  <h4 className="text-xl font-bold text-white mb-0">
                    {result.name}
                  </h4>
                  <p className="text-emerald-300 font-medium">
                    {result.exam} ({result.year})
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
