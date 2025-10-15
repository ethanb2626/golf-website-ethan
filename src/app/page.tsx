'use client';

import React from 'react';
import { StarIcon, TrophyIcon, AcademicCapIcon, ClockIcon, MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import Navbar from '../components/Navbar';

// Social media icons (using outline versions for consistency)
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
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.60a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
);

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const YouTubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const ethanEscaleraWebsite: React.FC = () => {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Account for fixed navbar height
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-800-50 to-white">
      {/* Navbar */}
      <Navbar onScrollToSection={handleScrollToSection} />

      {/* Main Content with top padding to account for fixed navbar */}
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-800-50 to-yellow-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-blue-800-800 mb-6">
                  Take off running with beginner lessons by Ethan Blandon
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  I help new and returning golfers build solid fundamentals fast—grip, stance, and consistent contact—using simple drills and video check-ins. 
                  Learn with confidence and enjoy the game more every week.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="bg-blue-800-100 text-blue-800-800 px-3 py-1 rounded-full text-sm font-medium">Beginner focus</span>
                  <span className="bg-blue-800-100 text-blue-800-800 px-3 py-1 rounded-full text-sm font-medium">Video Check-in</span>
                  <span className="bg-blue-800-100 text-blue-800-800 px-3 py-1 rounded-full text-sm font-medium">Practice Plan Included</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => handleScrollToSection('contact')}
                    className="bg-blue-800-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-800-700 transition-colors"
                  >
                    Book a Lesson
                  </button>
                  <button
                    onClick={() => handleScrollToSection('services')}
                    className="border-2 border-blue-800-600 text-blue-800-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-800-50 transition-colors"
                  >
                    View Programs
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="relative z-10">
                  <img
                    src="/images/ethan-hero.jpg"
                    alt="Ethan Blandon teaching golf"
                    className="w-4/5 h-auto rounded-2xl shadow-2xl mx-auto"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-4/5 h-full bg-blue-800-100 rounded-2xl mx-auto"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Credentials */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Excellence</h2>
              <div className="w-24 h-1 bg-blue-800-600 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-blue-800-50 rounded-lg">
                <TrophyIcon className="h-12 w-12 text-blue-800-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">PGA TOUR & European Tour</h3>
                <p className="text-gray-600">Competed at the highest levels including PGA Tour, European Tour, Web.com Tour, and Latin American PGA Tour</p>
              </div>
              <div className="text-center p-6 bg-blue-800-50 rounded-lg">
                <AcademicCapIcon className="h-12 w-12 text-blue-800-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">20+ Years & Advanced Tech</h3>
                <p className="text-gray-600">Extensive coaching experience using motion capture, pressure plate technology, and TPI methodologies</p>
              </div>
              <div className="text-center p-6 bg-blue-800-50 rounded-lg">
                <StarIcon className="h-12 w-12 text-blue-800-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Academy Founder & Champion</h3>
                <p className="text-gray-600">Founded DEGA Golf Academy and won multiple tournaments including Sambil Open 2015 & Merand Open 2016</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
              <div className="lg:col-span-3">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About Ethan Blandon perez</h2>
                <div className="space-y-4 text-gray-600">
                  <p className="text-lg">
                    Born in Venezuela with over two decades dedicated to golf excellence, Ethan Blandon perez is a PGA Class A Professional who combines world-class competitive experience with cutting-edge biomechanical coaching expertise.
                  </p>
                  <p>
                    His distinguished competitive career includes victories at the Sambil Open 2015 and Merand Open 2016, plus competition on prestigious tours including the PGA Tour, European Tour, Web.com Tour, Nike Tour, European Challenge Tour, and Latin American PGA Tour. During his collegiate career, he won 7 tournaments while captaining teams at both Wallace State Community College and Georgia State University.
                  </p>
                  <p>
                    As founder and CEO of DEGA Golf Academy and former Venezuelan National Team Head Coach (2007-2014), ethan has pioneered the integration of biomechanical analysis with traditional coaching methods. His data-driven approach using motion capture, pressure plate technology, and TPI methodologies has helped reduce player handicaps by an average of 10% and led to 5 international championship wins for his students.
                  </p>
                  <p>
                    Currently serving as Teaching Professional at La Gorce Country Club, ethan delivers personalized coaching that improves swing efficiency by up to 20% for clients. His expertise spans biomechanical analysis, mental coaching (trained by Bob Rotella), and Vision 54 methodologies.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="bg-blue-800-100 text-blue-800-800 px-3 py-1 rounded-full text-sm font-medium">PGA Class A Professional</span>
                  <span className="bg-blue-800-100 text-blue-800-800 px-3 py-1 rounded-full text-sm font-medium">TPI Certified Levels 1-3</span>
                  <span className="bg-blue-800-100 text-blue-800-800 px-3 py-1 rounded-full text-sm font-medium">Tournament Winner</span>
                  <span className="bg-blue-800-100 text-blue-800-800 px-3 py-1 rounded-full text-sm font-medium">Biomechanics Expert</span>
                  <span className="bg-blue-800-100 text-blue-800-800 px-3 py-1 rounded-full text-sm font-medium">Academy Founder</span>
                  <span className="bg-blue-800-100 text-blue-800-800 px-3 py-1 rounded-full text-sm font-medium">National Team Coach</span>
                </div>

                {/* Professional Credentials */}
                <div className="mt-8 bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Professional Certifications</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-800-500 rounded-full mr-2"></div>
                      <span>PGA Class A Professional</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-800-500 rounded-full mr-2"></div>
                      <span>TPI Golf Fitness Instructor Level 1</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-800-500 rounded-full mr-2"></div>
                      <span>TPI Golf Junior Coach Level 2</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-800-500 rounded-full mr-2"></div>
                      <span>TPI Golf Professional Instructor Levels 2 & 3</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-800-500 rounded-full mr-2"></div>
                      <span>R&A Coaching Certifications 1-3</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-800-500 rounded-full mr-2"></div>
                      <span>Mental Coaching (Bob Rotella)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-800-500 rounded-full mr-2"></div>
                      <span>Vision 54 Coaching</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-800-500 rounded-full mr-2"></div>
                      <span>PGA Teaching Symposium (Chris Como)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="space-y-6">
                  <div className="relative">
                    <img
                      src="/images/ethan-trophy.jpg"
                      alt="Ethan Blandon perez with tournament trophy"
                      className="w-full h-auto rounded-xl shadow-lg"
                    />
                    <div className="absolute -bottom-3 -right-3 w-full h-full bg-blue-800-100 rounded-xl -z-10"></div>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900">Ethan Blandon perez</h4>
                    <p className="text-blue-800-600 font-medium">PGA Class A Professional</p>
                    <p className="text-gray-500 text-sm mt-1">Teaching Professional - La Gorce Country Club</p>
                    <p className="text-gray-500 text-sm">Founder & CEO - DEGA Golf Academy</p>
                  </div>
                  <div className="bg-blue-800-600 rounded-lg p-6 text-white">
                    <h3 className="text-lg font-bold mb-3">Teaching Philosophy</h3>
                    <blockquote className="text-sm italic mb-3">
                      &ldquo;Golf excellence comes from the perfect blend of biomechanical precision, mental toughness, and data-driven insights. Every swing tells a story—my job is to help you write your best chapter.&rdquo;
                    </blockquote>
                    <p className="text-blue-800-100 text-sm">
                      Through advanced technology and personalized coaching, I help golfers unlock their potential with methods proven to reduce handicaps by an average of 10%.
                    </p>
                  </div>

                  {/* Awards & Achievements */}
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Career Highlights</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <TrophyIcon className="h-4 w-4 text-yellow-600 mr-2" />
                        <span>Winner: Sambil Open 2015, Merand Open 2016</span>
                      </div>
                      <div className="flex items-center">
                        <TrophyIcon className="h-4 w-4 text-yellow-600 mr-2" />
                        <span>7 Collegiate Tournament Victories</span>
                      </div>
                      <div className="flex items-center">
                        <TrophyIcon className="h-4 w-4 text-yellow-600 mr-2" />
                        <span>5 International Championships (as coach)</span>
                      </div>
                      <div className="flex items-center">
                        <TrophyIcon className="h-4 w-4 text-yellow-600 mr-2" />
                        <span>Venezuelan National Team Head Coach (2007-2014)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Golf Instruction Programs</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cutting-edge biomechanical analysis combined with personalized coaching for measurable improvement
              </p>
              <div className="w-24 h-1 bg-blue-800-600 mx-auto mt-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Starter Lesson",
                  duration: "60 minutes",
                  description: "Perfect for beginners looking to build a solid foundation in swing fundamentals and confidence on the course.",
                  features: [
                    "Grip, stance, and posture setup",
                    "Consistent contact drills",
                    "Simple practice routines to follow at home",
                    "Personalized improvement plan"
                  ]
                },
                {
                  title: "On-Course Coaching",
                  duration: "90 minutes",
                  description: "Real-time lessons out on the course focusing on strategy, decision-making, and mental approach.",
                  features: [
                    "Club selection and course strategy",
                    "Pre-shot routine and focus",
                    "Shot shaping and recovery play",
                    "Confidence under pressure"
                  ]
                },
                {
                  title: "Progress Package",
                  duration: "4 x 60 minutes",
                  description: "Structured improvement program designed to help golfers develop week by week with clear goals.",
                  features: [
                    "Video check-ins between lessons",
                    "Weekly practice assignments",
                    "Performance tracking and feedback",
                    "Progress reports after each session"
                  ]
                },
                {
                  title: "Junior Golf Development",
                  duration: "45-60 minutes",
                  description: "Fun and engaging lessons for younger players built around movement, coordination, and skill growth.",
                  features: [
                    "Fun-based drills and challenges",
                    "Building strong fundamentals",
                    "Confidence and character development",
                    "Parent progress updates"
                  ]
                },
                {
                  title: "Short Game Mastery",
                  duration: "60 minutes",
                  description: "Specialized session focused on chipping, pitching, and putting to help you save strokes around the green.",
                  features: [
                    "Chipping and pitching technique",
                    "Putting distance control",
                    "Bunker and recovery shots",
                    "Course-side short game strategy"
                  ]
                },
                {
                  title: "Group Clinics",
                  duration: "90 minutes",
                  description: "Group lessons designed for friends or small teams to learn together in a fun, social setting.",
                  features: [
                    "Max 4 students per group",
                    "Interactive learning environment",
                    "Team challenges and games",
                    "Peer support and progress tracking"
                  ]
                }
              ].map((service, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    <div className="flex items-center text-blue-800-600">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      <span className="text-sm">{service.duration}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-blue-800-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => {
                      handleScrollToSection('contact');
                      // Small delay to ensure scroll completes, then focus on lesson type select
                      setTimeout(() => {
                        const select = document.querySelector('select') as HTMLSelectElement;
                        if (select) {
                          // Map service titles to dropdown values
                          const serviceMapping: { [key: string]: string } = {
                            'Biomechanical Analysis': 'biomechanicalanalysis',
                            'Individual Lessons': 'individuallessons',
                            'Playing Lessons': 'playinglessons',
                            'Performance Coaching': 'performancecoaching',
                            'Junior Development': 'juniordevelopment',
                            'Group Clinics': 'groupclinics'
                          };
                          select.focus();
                          select.value = serviceMapping[service.title] || '';
                        }
                      }, 500);
                    }}
                    className="w-full bg-blue-800-600 text-white py-2 rounded-md hover:bg-blue-800-700 transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-blue-800-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Improve Your Game?</h2>
              <p className="text-xl text-blue-800-100 max-w-3xl mx-auto">
                Book your lesson today and start your journey to better golf
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* LEFT COLUMN */}
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPinIcon className="h-6 w-6 mr-4 text-blue-800-300" />
                    <div>
                      <p className="font-medium">La Gorce Country Club</p>
                      <p className="text-blue-800-200">6400 Alton Rd, Miami Beach, FL 33141</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <PhoneIcon className="h-6 w-6 mr-4 text-blue-800-300" />
                    <div>
                      <p className="font-medium">Call for Lessons</p>
                      <p className="text-blue-800-200">(305) 776-4897</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <EnvelopeIcon className="h-6 w-6 mr-4 text-blue-800-300" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-blue-800-200">deg280476@icloud.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold mb-4">Lesson Hours</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium">Monday - Friday</p>
                      <p className="text-blue-800-200">7:00 AM - 6:00 PM</p>
                    </div>
                    <div>
                      <p className="font-medium">Saturday - Sunday</p>
                      <p className="text-blue-800-200">6:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="mt-8">
                  <h4 className="font-semibold mb-4">Follow ethan</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-blue-800-300 hover:text-white transition-colors" aria-label="Instagram">
                      <InstagramIcon className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-blue-800-300 hover:text-white transition-colors" aria-label="Facebook">
                      <FacebookIcon className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-blue-800-300 hover:text-white transition-colors" aria-label="Twitter">
                      <TwitterIcon className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-blue-800-300 hover:text-white transition-colors" aria-label="LinkedIn">
                      <LinkedInIcon className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-blue-800-300 hover:text-white transition-colors" aria-label="YouTube">
                      <YouTubeIcon className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN (FORM) */}
              <div className="bg-white rounded-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Book a Lesson</h3>

                {/* One form containing all fields */}
                <form
                  action="https://formspree.io/f/movkywor"
                  method="POST"
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      name="firstName"
                      type="text"
                      required
                      placeholder="First Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 focus:ring-2 focus:ring-blue-800-500 focus:border-blue-800-500"
                    />
                    <input
                      name="lastName"
                      type="text"
                      required
                      placeholder="Last Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 focus:ring-2 focus:ring-blue-800-500 focus:border-blue-800-500"
                    />
                  </div>

                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 focus:ring-2 focus:ring-blue-800-500 focus:border-blue-800-500"
                  />

                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 focus:ring-2 focus:ring-blue-800-500 focus:border-blue-800-500"
                  />

                  <select
                    name="lessonType"
                    defaultValue=""
                    className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 focus:ring-2 focus:ring-blue-800-500"
                  >
                    <option value="" disabled>Select Lesson Type</option>
                    <option value="starter">Starter Lesson (60 min)</option>
                    <option value="oncourse">On-Course Coaching (90 min)</option>
                    <option value="progress">Progress Package (4 × 60 min)</option>
                    <option value="junior">Junior Development (45–60 min)</option>
                    <option value="shortgame">Short Game Mastery (60 min)</option>
                    <option value="group">Group Clinics (90 min)</option>
                  </select>

                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell me about your golf goals and experience level"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 focus:ring-2 focus:ring-blue-800-500"
                  ></textarea>

                  {/* Optional extras */}
                  <input
                    type="hidden"
                    name="_subject"
                    value="New lesson request — Get Into Golf with Ethan"
                  />
                  {/* <input type="hidden" name="_redirect" value="https://your-domain.com/thank-you" /> */}

                  <button
                    type="submit"
                    className="w-full bg-blue-800-600 text-white py-3 rounded-md hover:bg-blue-800-700 transition-colors font-semibold"
                  >
                    Request Lesson Booking
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-800-400 mb-2">Ethan Blandon perez</h3>
              <p className="text-gray-400 mb-4">PGA Class A Professional | Biomechanics & Performance Expert | Since 2004</p>

              {/* Social Media Links */}
              <div className="flex justify-center space-x-6 mb-6">
                <a href="#" className="text-gray-400 hover:text-blue-800-400 transition-colors" aria-label="Instagram">
                  <InstagramIcon className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-800-400 transition-colors" aria-label="Facebook">
                  <FacebookIcon className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-800-400 transition-colors" aria-label="Twitter">
                  <TwitterIcon className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-800-400 transition-colors" aria-label="LinkedIn">
                  <LinkedInIcon className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-800-400 transition-colors" aria-label="YouTube">
                  <YouTubeIcon className="h-6 w-6" />
                </a>
              </div>

              <div className="flex justify-center space-x-6 text-sm text-gray-400 mb-6">
                <span>PGA Tour Veteran</span>
                <span>•</span>
                <span>Tournament Winner</span>
                <span>•</span>
                <span>National Team Coach</span>
                <span>•</span>
                <span>Academy Founder</span>
              </div>
              <div className="pt-6 border-t border-gray-800 text-sm text-gray-500">
                <p>&copy; 2025 Ethan Blandon Golf Instruction. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ethanEscaleraWebsite;
