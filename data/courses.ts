import { Course } from "@/types";

export const courses: Course[] = [
  {
    id: "sainik-school-entrance",
    title: "Sainik School Entrance Coaching",
    description: "Complete preparation for All India Sainik Schools Entrance Examination (AISSEE), focusing on rigorous academic and physical training.",
    duration: "1 Year",
    eligibility: "Class 5th or 8th passed",
    features: [
      "Daily Mock Tests",
      "Expert Faculty",
      "Physical Training Session",
      "Doubt Clearing Sessions",
    ],
    imageUrl: "/images/courses/sainik.jpg",
  },
  {
    id: "nda-foundation",
    title: "NDA Foundation Course",
    description: "Targeted to build a strong foundation for the National Defence Academy right from school level.",
    duration: "2 Years",
    eligibility: "Class 10th passed",
    features: [
      "SSB Interview Prep",
      "Maths & GAT Mastery",
      "Personality Development",
      "Hostel Facility",
    ],
    imageUrl: "/images/courses/nda.jpg",
  },
  {
    id: "police-bharti",
    title: "Maharashtra Police Bharti",
    description: "Extensive physical conditioning and written exam coaching for Maharashtra Police recruitment.",
    duration: "6 Months",
    eligibility: "Class 12th passed",
    features: [
      "Intensive Ground Training",
      "Current Affairs Focus",
      "Weekly Test Series",
      "Personal Guidance",
    ],
    imageUrl: "/images/courses/police.jpg",
  },
];
