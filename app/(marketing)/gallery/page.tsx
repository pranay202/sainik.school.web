export default function GalleryPage() {
  const images = [
    // { url: "/gallary/1.jpeg", title: "", category: "" },
    // { url: "/gallary/2.jpeg", title: "", category: "" },
    // { url: "/gallary/3.jpeg", title: "", category: "" },
    { url: "/gallary/4.jpeg", title: "", category: "" },
    { url: "/gallary/5.jpeg", title: "", category: "" },
    // { url: "/gallary/6.jpeg", title: "", category: "" },
    { url: "/gallary/7.jpeg", title: "", category: "" },
    // { url: "/gallary/8.jpeg", title: "", category: "" },
    { url: "/gallary/9.jpeg", title: "", category: "" },
    { url: "/gallary/10.jpeg", title: "", category: "" },
    { url: "/gallary/11.jpeg", title: "", category: "" },
    { url: "/gallary/12.jpeg", title: "", category: "" },
    { url: "/gallary/13.jpeg", title: "", category: "" },
    { url: "/gallary/14.jpeg", title: "", category: "" },
    { url: "/gallary/17.jpg", title: "", category: "" },
    { url: "/gallary/16.jpeg", title: "", category: "" },
    { url: "/gallary/15.jpeg", title: "", category: "" },
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
          A glimpse into the life, training, and achievements of our cadets at Commando Academy Sainik Shool.
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
