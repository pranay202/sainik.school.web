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
            A Day at Commando Academy
          </h2>
          <div className="w-20 h-1.5 bg-emerald-600 mx-auto rounded-full mb-6" />
          <p className="text-lg text-slate-600">
            A scientifically designed timeline to ensure maximum productivity.
            Our daily routine builds stamina, intellect, and discipline.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto before:-translate-x-px md:before:translate-x-0 before:h-full before:w-1 before:bg-linear-to-b before:from-transparent before:via-emerald-200 before:to-transparent">
          {routine.map((item, idx) => (
            <div
              key={idx}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group md:mx-auto w-full mb-8"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 border-4 border-white shadow-md text-emerald-600 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ml-0 z-10">
                <Clock className="w-4 h-4" />
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded-xl border border-slate-200 shadow-sm group-hover:shadow-md transition-shadow group-hover:-translate-y-1 duration-300">
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
          ))}
        </div>
      </div>
    </section>
  );
}
