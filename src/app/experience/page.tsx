"use client";

import React from "react";
import {
  StarIcon,
  TrophyIcon,
  AcademicCapIcon,
  ClockIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import Navbar from "@/components/Navbar";

/* ---------- Social Icons ---------- */
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.987 11.988 11.987s11.987-5.369 11.987-11.987C24.014 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.295C4.198 14.553 3.5 13.096 3.5 11.5s.698-3.053 1.626-4.193c.875-.805 2.026-1.295 3.323-1.295s2.448.49 3.323 1.295C12.7 8.447 13.398 9.904 13.398 11.5s-.698 3.053-1.626 4.193c-.875.805-2.026 1.295-3.323 1.295zm7.83-9.999c-.584 0-1.059.474-1.059 1.059s.475 1.059 1.059 1.059 1.059-.474 1.059-1.059-.475-1.059-1.059-1.059zm-4.262 1.511c-1.654 0-2.976 1.322-2.976 2.976s1.322 2.976 2.976 2.976 2.976-1.322 2.976-2.976-1.322-2.976-2.976-2.976z" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v .60a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
);

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.564v11.452zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm16.888-7.433H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const YouTubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

/* ---------- Page Component ---------- */
export default function ExperiencePage() {
  // Helper to link back to home contact section
  const toContactHref = "/#contact";

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero / Intro */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Experience
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            A snapshot of Ethan’s competitive background, coaching philosophy,
            and the tools used to help golfers improve quickly and sustainably.
          </p>
          <div className="mt-6">
            <a
              href={toContactHref}
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Book a Lesson
            </a>
          </div>
        </div>
      </section>

      {/* Professional Excellence */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Professional Excellence
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <TrophyIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                PGA TOUR & European Tour
              </h3>
              <p className="text-gray-600">
                Competed across PGA Tour, European Tour, Web.com, and more.
              </p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <AcademicCapIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                20+ Years & Advanced Tech
              </h3>
              <p className="text-gray-600">
                Motion capture, pressure plates, and TPI methodologies.
              </p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <StarIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Academy Founder & Champion
              </h3>
              <p className="text-gray-600">
                DEGA Golf Academy founder and multiple pro wins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About Ethan Blandon
            </h2>
            <div className="space-y-4 text-gray-600">
              <p className="text-lg">
                PGA Class A Professional combining world-class competitive
                experience with a modern, biomechanics-driven approach.
              </p>
              <p>
                Career highlights include wins at the Sambil Open (2015) and
                Merand Open (2016), plus competition on the PGA and European
                Tours.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                PGA Class A Professional
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                TPI Certified
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Tournament Winner
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Academy Founder
              </span>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="space-y-6">
              <div className="relative">
                <img
                  src="/images/ethan-trophy.jpg"
                  alt="Ethan with tournament trophy"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
                <div className="absolute -bottom-3 -right-3 w-full h-full bg-blue-100 rounded-xl -z-10" />
              </div>

              <div className="bg-blue-600 rounded-lg p-6 text-white">
                <h3 className="text-lg font-bold mb-3">Teaching Philosophy</h3>
                <blockquote className="text-sm italic mb-3">
                  “Blend biomechanical precision, smart practice, and confidence
                  to make golf more fun and consistent.”
                </blockquote>
                <p className="text-blue-100 text-sm">
                  Personalized coaching and simple practice plans help golfers
                  improve quickly and sustainably.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs (buttons link back to home contact) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Instruction Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Biomechanical analysis + personalized coaching for measurable
              improvement
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Starter Lesson", duration: "60 minutes", description: "Build fundamentals and confidence.", features: ["Grip/stance/posture", "Contact drills", "Practice routine", "Improvement plan"] },
              { title: "On-Course Coaching", duration: "90 minutes", description: "Strategy and decision-making on the course.", features: ["Club selection", "Pre-shot routine", "Recovery shots", "Confidence under pressure"] },
              { title: "Progress Package", duration: "4 × 60 minutes", description: "Structured progression with goals.", features: ["Video check-ins", "Weekly assignments", "Performance tracking", "Progress reports"] },
              { title: "Junior Development", duration: "45–60 minutes", description: "Fun lessons for younger players.", features: ["Fun drills", "Strong fundamentals", "Confidence building", "Parent updates"] },
              { title: "Short Game Mastery", duration: "60 minutes", description: "Save strokes around the green.", features: ["Chipping/pitching", "Putting control", "Bunker play", "Short-game strategy"] },
              { title: "Group Clinics", duration: "90 minutes", description: "Learn together in a social setting.", features: ["Max 4 per group", "Interactive sessions", "Challenges/games", "Peer support"] },
            ].map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  <div className="flex items-center text-blue-600">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    <span className="text-sm">{service.duration}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={toContactHref}
                  className="w-full inline-block text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Book Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple contact card pointing back to home */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPinIcon className="h-6 w-6 mr-4 text-blue-300" />
                <div>
                  <p className="font-medium">La Gorce Country Club</p>
                  <p className="text-blue-200">6400 Alton Rd, Miami Beach, FL 33141</p>
                </div>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="h-6 w-6 mr-4 text-blue-300" />
                <div>
                  <p className="font-medium">Call for Lessons</p>
                  <p className="text-blue-200">(305) 776-4897</p>
                </div>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="h-6 w-6 mr-4 text-blue-300" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-blue-200">deg280476@icloud.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 text-gray-900">
            <h3 className="text-2xl font-semibold mb-4">Ready to Improve Your Game?</h3>
            <p className="text-gray-600 mb-6">
              Head back to the home page to book your lesson.
            </p>
            <a
              href={toContactHref}
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Go to Booking Form
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-blue-400 mb-2">Ethan Blandon</h3>
          <p className="text-gray-400 mb-4">
            PGA Class A Professional | Biomechanics &amp; Performance Expert
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-blue-400" aria-label="Instagram">
              <InstagramIcon className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400" aria-label="Facebook">
              <FacebookIcon className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400" aria-label="Twitter">
              <TwitterIcon className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400" aria-label="LinkedIn">
              <LinkedInIcon className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400" aria-label="YouTube">
              <YouTubeIcon className="h-6 w-6" />
            </a>
          </div>
          <div className="pt-6 border-t border-gray-800 text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Ethan Blandon Golf Instruction. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

