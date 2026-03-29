"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card, CardContent } from "@/components/ui/Card";

export default function AdmissionSection() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Mock API submission
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  return (
    <section id="admission" className="py-24 bg-emerald-900 border-t border-emerald-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/images/pattern.png')", backgroundSize: "cover" }} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <span className="inline-block py-1 px-3 rounded-full bg-amber-500/20 text-amber-500 text-sm font-bold mb-4">Limited Seats Available</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Secure Your Future with Commando Academy Sainik Shool</h2>
            <div className="w-20 h-1.5 bg-amber-500 mb-8 rounded-full" />
            <p className="text-lg text-emerald-100 mb-8 leading-relaxed">
              Admission for the upcoming batch is now open. Apply online to book your seat. Our representatives will contact you shortly with the next steps for enrollment.
            </p>
            <ul className="space-y-4 mb-8 text-emerald-50">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full" />
                Physical Fitness Test
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full" />
                Medical Examination
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full" />
                Personal Interview
              </li>
            </ul>
          </div>

          <Card className="bg-white/95 backdrop-blur shadow-2xl border-0 p-2 sm:p-4">
            <CardContent className="pt-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900">Admission Inquiry</h3>
                <p className="text-slate-500 mt-2">Fill out the form below and we will get back to you.</p>
              </div>

              {success ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-lg text-center">
                  <h4 className="text-xl font-bold mb-2">Request Submitted!</h4>
                  <p>Thank you for your interest. Our admissions team will contact you within 24 hours.</p>
                  <Button variant="outline" className="mt-6" onClick={() => setSuccess(false)}>Submit Another</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="studentName" className="text-sm font-medium text-slate-700">Student Name</label>
                      <Input id="studentName" required placeholder="Arjun Kumar" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="parentName" className="text-sm font-medium text-slate-700">Parent Name</label>
                      <Input id="parentName" required placeholder="Suresh Kumar" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone Mobile</label>
                      <Input id="phone" type="tel" required placeholder="+91 9876543210" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="class" className="text-sm font-medium text-slate-700">Admission For Class</label>
                      <select id="class" className="flex h-12 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800" required>
                        <option value="">Select Class / Course</option>
                        <option value="5">Class 5th Base</option>
                        <option value="6">Class 6th Sainik</option>
                        <option value="8">Class 8th Base</option>
                        <option value="9">Class 9th Sainik</option>
                        <option value="11">Class 11th NDA</option>
                        <option value="police">Police Bharti</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="address" className="text-sm font-medium text-slate-700">Address / City</label>
                    <Input id="address" required placeholder="Nagpur, Maharashtra" />
                  </div>
                  <Button type="submit" className="w-full text-lg h-14 bg-emerald-600 hover:bg-emerald-700 text-white mt-4 transition-colors" disabled={loading}>
                    {loading ? "Submitting..." : "Submit Application"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
