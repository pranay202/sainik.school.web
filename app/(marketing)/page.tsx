import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/AboutSection";
import CoursesSection from "@/components/sections/CoursesSection";
import RoutineSection from "@/components/sections/RoutineSection";
import FacilitiesSection from "@/components/sections/FacilitiesSection";
import ResultsSection from "@/components/sections/ResultsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import AdmissionSection from "@/components/sections/AdmissionSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <AboutSection />
      <CoursesSection />
      <RoutineSection />
      <FacilitiesSection />
      {/* <ResultsSection /> */}
      <TestimonialSection />
      <AdmissionSection />
      <ContactSection />
    </div>
  );
}
