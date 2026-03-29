import { Clock } from "lucide-react";

export default function RoutineSection() {
  const routine = [
    { time: "05:00 AM", activity: "Wake Up & Fresh up" },
    { time: "05:30 AM", activity: "Ground Training & PT" },
    { time: "07:30 AM", activity: "Breakfast" },
    { time: "08:30 AM", activity: "Academic Classes (Maths/Science)" },
    { time: "01:00 PM", activity: "Lunch & Rest" },
    { time: "03:00 PM", activity: "Academic Classes (GAT/Current Affairs)" },
    { time: "05:30 PM", activity: "Sports & Evening Activities" },
    { time: "07:00 PM", activity: "Dinner" },
    { time: "08:00 PM", activity: "Self Study / Doubt Solving" },
    { time: "10:00 PM", activity: "Lights Out" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-4">
            A Day at Commando Academy Sainik Shool
          </h2>
          <div className="w-20 h-1.5 bg-emerald-600 mx-auto rounded-full mb-6" />
          <p className="text-lg text-slate-600">
            A scientifically designed timeline to ensure maximum productivity.
            Our daily routine builds stamina, intellect, and discipline.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-linear-to-b from-transparent via-emerald-200 to-transparent" />

          {routine.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div key={idx} className="relative flex w-full mb-8">
                {/* Clock Icon */}
                <div className="absolute top-3 left-8 md:left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-emerald-100 border-4 border-white shadow-md text-emerald-600 flex items-center justify-center z-10">
                  <Clock className="w-5 h-5" />
                </div>

                {/* Content Box */}
                <div
                  className={`w-[calc(100%-5rem)] ml-auto md:w-[calc(50%-3rem)] bg-white p-6 rounded-xl border border-slate-200 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 duration-300 ${
                    isLeft ? "md:mr-auto md:ml-0" : "md:ml-auto md:mr-0"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="font-bold text-slate-900 text-lg">
                      {item.activity}
                    </h4>
                    <span className="text-emerald-600 font-semibold shrink-0 sm:ml-4">
                      {item.time}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
