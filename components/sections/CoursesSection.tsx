"use client";

import { courses } from "@/data/courses";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { ChevronRight, ChevronLeft, Award } from "lucide-react";
import { useState, useRef, useEffect, useCallback } from "react";

export default function CoursesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      setActiveIndex(index);
    }
  }, []);

  const scrollTo = (index: number) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      scrollRef.current.scrollTo({
        left: index * clientWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollSide = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const [cardsPerPage, setCardsPerPage] = useState(1);

  useEffect(() => {
    const calculateLayout = () => {
      if (typeof window !== 'undefined') {
        let count = 1;
        if (window.innerWidth >= 1024) count = 3;
        else if (window.innerWidth >= 640) count = 2;
        setCardsPerPage(count);
      }
    };

    calculateLayout();
    window.addEventListener('resize', calculateLayout);
    
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll, { passive: true });
      return () => {
        el.removeEventListener("scroll", handleScroll);
        window.removeEventListener('resize', calculateLayout);
      };
    }
  }, [handleScroll]);

  // Derived Values
  const pagesCount = Math.ceil(courses.length / cardsPerPage);

  return (
    <section id="courses" className="py-24 bg-slate-50 border-t border-b border-slate-100 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-4 tracking-tight uppercase tracking-widest">Training Batches</h2>
          <div className="w-20 h-1.5 bg-emerald-600 mx-auto rounded-full mb-6" />
          <p className="text-lg text-slate-600">
            Official enrollment open for the following recruitment specialized coaching.
          </p>
        </div>

        <div className="relative group max-w-6xl mx-auto">
          {/* Controls - PC Only */}
          <button 
            onClick={() => scrollSide('left')}
            className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur border border-slate-200 p-2.5 rounded-full shadow-lg text-slate-700 hover:text-emerald-600 hover:scale-110 active:scale-95 transition-all hidden lg:flex items-center justify-center disabled:opacity-30"
            disabled={activeIndex === 0}
            aria-label="Previous Courses"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={() => scrollSide('right')}
            className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur border border-slate-200 p-2.5 rounded-full shadow-lg text-slate-700 hover:text-emerald-600 hover:scale-110 active:scale-95 transition-all hidden lg:flex items-center justify-center disabled:opacity-30"
            disabled={activeIndex >= pagesCount - 1}
            aria-label="Next Courses"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Scroll Container */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth items-stretch"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {courses.map((course) => (
              <div 
                key={course.id} 
                className="min-w-full sm:min-w-[calc(50%-8px)] lg:min-w-[calc(33.333%-11px)] snap-start py-2"
              >
                <Card className="h-full flex flex-col justify-between overflow-hidden shadow-sm border-slate-200 bg-white group/card hover:border-emerald-500 transition-all duration-300">
                  <CardHeader className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="bg-emerald-50 p-2.5 rounded-xl border border-emerald-100 group-hover/card:bg-emerald-600 group-hover/card:shadow-lg group-hover/card:shadow-emerald-200 transition-all duration-300">
                        <Award className="w-6 h-6 text-emerald-600 group-hover/card:text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900 group-hover/card:text-emerald-700 transition-colors leading-tight mb-4">
                      {course.title}
                    </CardTitle>
                    
                    <div className="space-y-4 pt-2">
                       <div className="flex flex-col gap-1.5 pt-4 border-t border-slate-100">
                        <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest bg-emerald-50 w-fit px-2 py-0.5 rounded">Eligibility Path</span>
                        <p className="text-base font-bold text-slate-700 pl-1">{course.eligibility}</p>
                      </div>

                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                         <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                         <span>Admission Open</span>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>

          {/* Dynamic Dot Indicators */}
          <div className="flex justify-center items-center gap-3 mt-10">
            {pagesCount > 1 && Array.from({ length: pagesCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i * cardsPerPage)}
                className={`transition-all duration-300 rounded-full h-2.5 ${
                  activeIndex === i 
                    ? "w-10 bg-emerald-600 shadow-sm" 
                    : "w-2.5 bg-slate-200 hover:bg-slate-300"
                }`}
                aria-label={`View page ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
