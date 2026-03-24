import AdmissionSection from "@/components/sections/AdmissionSection";
import CoursesSection from "@/components/sections/CoursesSection";

export default function AdmissionsPage() {
  return (
    <div className="flex flex-col w-full">
      <div className="bg-emerald-900 py-16 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Admissions & Courses</h1>
        <p className="text-emerald-100 text-lg max-w-2xl mx-auto px-4">
          Explore our range of specialized training programs and secure your seat for the upcoming batch.
        </p>
      </div>
      <CoursesSection />
      <AdmissionSection />
    </div>
  );
}
