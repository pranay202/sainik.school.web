export default function GalleryPage() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop",
      title: "Morning Drill",
      category: "Training"
    },
    {
      url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop",
      title: "Yoga Session",
      category: "Physical"
    },
    {
      url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop",
      title: "Classroom Coaching",
      category: "Academic"
    },
    {
      url: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1974&auto=format&fit=crop",
      title: "Gymnasium",
      category: "Facilities"
    },
    {
      url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2098&auto=format&fit=crop",
      title: "Library Study",
      category: "Academic"
    },
    {
      url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2076&auto=format&fit=crop",
      title: "Sports Day",
      category: "Sports"
    },
    {
      url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
      title: "Evening Parade",
      category: "Training"
    },
    {
      url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
      title: "Graduation Ceremony",
      category: "Events"
    },
    {
      url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop",
      title: "Mess Hall",
      category: "Life at Campus"
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Header */}
      <div className="bg-emerald-900 py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-(family-name:--font-russo-one) uppercase tracking-wider">
          Gallery
        </h1>
        <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full mb-6" />
        <p className="text-emerald-100 text-lg max-w-2xl mx-auto px-4">
          A glimpse into the life, training, and achievements of our cadets at Commando Academy.
        </p>
      </div>

      {/* Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((img, idx) => (
              <div 
                key={idx} 
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-4/3 w-full h-full overflow-hidden">
                  <img 
                    src={img.url} 
                    alt={img.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-emerald-950/90 via-emerald-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {img.category}
                  </span>
                  <h3 className="text-white text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    {img.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Want to be part of our next batch?</h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            Join the elite academy and transform your future. Admissions are now open for the upcoming academic session.
          </p>
          <a 
            href="/admissions" 
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-emerald-600 text-white font-bold text-lg hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-emerald-900/20"
          >
            Apply Now
          </a>
        </div>
      </section>
    </div>
  );
}
