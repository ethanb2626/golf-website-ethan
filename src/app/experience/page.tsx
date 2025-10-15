'use client';

import React, { useRef } from 'react';
import {
    MapPinIcon,
    PhoneIcon,
    EnvelopeIcon,
    AcademicCapIcon,
    TrophyIcon,
    StarIcon,
    ArrowLeftIcon,
    ArrowDownTrayIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import Navbar from '../../components/Navbar';

const LinkedInIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

const ExperiencePage = () => {
    const contentRef = useRef<HTMLDivElement>(null);

    const handleScrollToSection = (sectionId: string) => {
        // Navigate to home page with section anchor
        window.location.href = `/#${sectionId}`;
    };

    const downloadPDF = async () => {
        if (!contentRef.current) return;

        try {
            // Dynamically import the libraries
            const html2canvas = (await import('html2canvas')).default;
            const jsPDF = (await import('jspdf')).default;

            // Get the original element
            const element = contentRef.current;

            // Create a temporary container with safe styles
            const tempContainer = document.createElement('div');
            tempContainer.style.position = 'absolute';
            tempContainer.style.left = '-9999px';
            tempContainer.style.top = '0';
            tempContainer.style.width = '800px';
            tempContainer.style.backgroundColor = '#ffffff';
            tempContainer.style.padding = '20px';
            tempContainer.style.fontFamily = 'Arial, sans-serif';
            tempContainer.style.fontSize = '14px';
            tempContainer.style.lineHeight = '1.5';
            tempContainer.style.color = '#000000';

            // Clone content
            const clone = element.cloneNode(true) as HTMLElement;

            // Apply safe styles recursively - avoid computed styles
            const applySafeStyles = (el: HTMLElement) => {
                // Reset any potential oklch styles
                el.style.backgroundColor = '';
                el.style.color = '';
                el.style.borderColor = '';

                // Apply specific known safe styles based on classes
                const classes = Array.from(el.classList);

                // Background colors
                if (classes.includes('bg-white')) el.style.backgroundColor = '#ffffff';
                if (classes.includes('bg-blue-800-50')) el.style.backgroundColor = '#ecfdf5';
                if (classes.includes('bg-blue-800-600')) el.style.backgroundColor = '#059669';
                if (classes.includes('bg-blue-800-500')) el.style.backgroundColor = '#10b981';
                if (classes.includes('bg-yellow-500')) el.style.backgroundColor = '#eab308';
                if (classes.includes('bg-gray-50')) el.style.backgroundColor = '#f9fafb';
                if (classes.includes('bg-gray-400')) el.style.backgroundColor = '#9ca3af';

                // Text colors
                if (classes.includes('text-blue-800-800')) el.style.color = '#065f46';
                if (classes.includes('text-blue-800-700')) el.style.color = '#047857';
                if (classes.includes('text-blue-800-600')) el.style.color = '#059669';
                if (classes.includes('text-gray-900')) el.style.color = '#111827';
                if (classes.includes('text-gray-700')) el.style.color = '#374151';
                if (classes.includes('text-gray-600')) el.style.color = '#4b5563';
                if (classes.includes('text-white')) el.style.color = '#ffffff';

                // Border colors
                if (classes.includes('border-blue-800-600')) el.style.borderColor = '#059669';
                if (classes.includes('border-blue-800-500')) el.style.borderColor = '#10b981';
                if (classes.includes('border-blue-800-300')) el.style.borderColor = '#6ee7b7';
                if (classes.includes('border-gray-200')) el.style.borderColor = '#e5e7eb';

                // Common layout properties with safe values
                if (classes.includes('rounded-full')) el.style.borderRadius = '50%';
                if (classes.includes('rounded-2xl')) el.style.borderRadius = '1rem';
                if (classes.includes('rounded-lg')) el.style.borderRadius = '0.5rem';
                if (classes.includes('rounded-md')) el.style.borderRadius = '0.375rem';

                // Font weights
                if (classes.includes('font-bold')) el.style.fontWeight = '700';
                if (classes.includes('font-semibold')) el.style.fontWeight = '600';
                if (classes.includes('font-medium')) el.style.fontWeight = '500';

                // Basic layout
                if (classes.includes('flex')) el.style.display = 'flex';
                if (classes.includes('grid')) el.style.display = 'grid';
                if (classes.includes('hidden')) el.style.display = 'none';

                // Text sizes - use px values
                if (classes.includes('text-4xl')) el.style.fontSize = '36px';
                if (classes.includes('text-3xl')) el.style.fontSize = '30px';
                if (classes.includes('text-2xl')) el.style.fontSize = '24px';
                if (classes.includes('text-xl')) el.style.fontSize = '20px';
                if (classes.includes('text-lg')) el.style.fontSize = '18px';
                if (classes.includes('text-base')) el.style.fontSize = '16px';
                if (classes.includes('text-sm')) el.style.fontSize = '14px';
                if (classes.includes('text-xs')) el.style.fontSize = '12px';

                // Padding with px values
                if (classes.includes('p-8')) el.style.padding = '32px';
                if (classes.includes('p-6')) el.style.padding = '24px';
                if (classes.includes('p-4')) el.style.padding = '16px';
                if (classes.includes('p-3')) el.style.padding = '12px';
                if (classes.includes('p-2')) el.style.padding = '8px';

                // Margins
                if (classes.includes('mb-8')) el.style.marginBottom = '32px';
                if (classes.includes('mb-6')) el.style.marginBottom = '24px';
                if (classes.includes('mb-4')) el.style.marginBottom = '16px';
                if (classes.includes('mb-3')) el.style.marginBottom = '12px';
                if (classes.includes('mb-2')) el.style.marginBottom = '8px';
                if (classes.includes('mr-3')) el.style.marginRight = '12px';
                if (classes.includes('mr-2')) el.style.marginRight = '8px';

                // Apply to children
                Array.from(el.children).forEach(child => {
                    if (child instanceof HTMLElement) {
                        applySafeStyles(child);
                    }
                });
            };

            applySafeStyles(clone);
            tempContainer.appendChild(clone);
            document.body.appendChild(tempContainer);

            // Wait for styles to apply
            await new Promise(resolve => setTimeout(resolve, 200));

            // Generate canvas with safe settings
            const canvas = await html2canvas(tempContainer, {
                scale: 1.5,
                useCORS: true,
                backgroundColor: '#ffffff',
                logging: false,
                allowTaint: false,
                foreignObjectRendering: false,
                width: tempContainer.scrollWidth,
                height: tempContainer.scrollHeight,
            });

            // Remove temporary container
            document.body.removeChild(tempContainer);

            if (canvas.width === 0 || canvas.height === 0) {
                throw new Error('Canvas has no content - please try again');
            }

            // Convert to JPEG
            const imgData = canvas.toDataURL('image/jpeg', 0.85);

            // Create PDF
            const imgWidth = 210; // A4 width in mm
            const pageHeight = 295; // A4 height in mm  
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;

            const pdf = new jsPDF('p', 'mm', 'a4');
            let position = 0;

            // Add first page
            pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            // Add additional pages if needed
            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            // Download
            pdf.save('ethan-Escalera-perez-CV.pdf');

        } catch (error) {
            console.error('Error generating PDF:', error);
            const errorMessage = error instanceof Error ? error.message : 'Please try again';
            alert(`Error generating PDF: ${errorMessage}`);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-800-50 to-white">
            {/* Navbar */}
            <Navbar onScrollToSection={handleScrollToSection} />

            {/* CV Content with top padding */}
            <div className="pt-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Navigation and Download Section */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
                        <Link href="/" className="inline-flex items-center text-blue-800-600 hover:text-blue-800-700 mb-4 sm:mb-0 transition-colors">
                            <ArrowLeftIcon className="h-4 w-4 mr-2" />
                            Back to Home
                        </Link>

                        {/* Download CV Button */}
                        <button
                            onClick={downloadPDF}
                            className="inline-flex items-center bg-blue-800-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
                            Download CV as PDF
                        </button>
                    </div>

                    {/* PDF Content Wrapper */}
                    <div ref={contentRef} className="cv-content">
                        {/* Header Section */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6">
                                <div className="flex-1">
                                    <h1 className="text-4xl font-bold text-blue-800-800 mb-2">Ethan Blandon perez</h1>
                                    <h2 className="text-xl text-blue-800-600 font-semibold mb-4">PGA Class A Professional | Biomechanics & Performance Coaching Expert</h2>
                                    <div className="flex flex-wrap items-center gap-6 text-gray-600">
                                        <div className="flex items-center">
                                            <MapPinIcon className="h-5 w-5 mr-2 text-blue-800-600" />
                                            Miami, FL
                                        </div>
                                        <div className="flex items-center">
                                            <PhoneIcon className="h-5 w-5 mr-2 text-blue-800-600" />
                                            (305) 776-4897
                                        </div>
                                        <div className="flex items-center">
                                            <EnvelopeIcon className="h-5 w-5 mr-2 text-blue-800-600" />
                                            deg280476@icloud.com
                                        </div>
                                        <div className="flex items-center">
                                            <LinkedInIcon className="h-5 w-5 mr-2 text-blue-800-600" />
                                            LinkedIn Profile
                                        </div>
                                    </div>
                                </div>

                                {/* Professional Headshot */}
                                <div className="mt-6 lg:mt-0 lg:ml-8 flex-shrink-0">
                                    <div className="relative">
                                        <img
                                            src="/images/headshot.jpeg"
                                            alt="Ethan Blandon perez - Professional Headshot"
                                            className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover border-4 border-blue-800-600 shadow-lg"
                                        />
                                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-800-600 rounded-full flex items-center justify-center border-2 border-white">
                                            <TrophyIcon className="h-4 w-4 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Summary */}
                            <div className="border-t border-gray-200 pt-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Professional Summary</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Dynamic PGA Class A Professional with 20+ years of experience in golf instruction, biomechanics, and performance optimization.
                                    Expert in leveraging pressure plate technology, motion capture, and TPI methodologies to deliver data-driven coaching that enhances
                                    player performance across all levels. Proven success in developing innovative training programs and leading high-performance teams,
                                    with a 15% increase in clinic engagement and multiple national championships. Seeking to drive innovation at a cutting-edge golf
                                    performance program through advanced biomechanics and technology integration.
                                </p>
                            </div>
                        </div>

                        {/* Core Competencies */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                            <h3 className="text-2xl font-bold text-blue-800-800 mb-6">Core Competencies</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-blue-800-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Biomechanical Coaching</h4>
                                            <p className="text-gray-600">Motion capture, pressure plate technology, and performance analysis for personalized instruction.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-blue-800-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">TPI Methodology</h4>
                                            <p className="text-gray-600">Certified in Golf Fitness, Junior Coaching, and Professional Instruction (Levels 1–3).</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-blue-800-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Program Development</h4>
                                            <p className="text-gray-600">Designing data-driven training curricula for golfers and TPI-certified professionals.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-blue-800-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Leadership</h4>
                                            <p className="text-gray-600">Building and mentoring high-performance teams, fostering operational excellence.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-blue-800-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Client Engagement</h4>
                                            <p className="text-gray-600">Communicating complex concepts clearly, building strong relationships with diverse audiences.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Professional Experience */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                            <h3 className="text-2xl font-bold text-blue-800-800 mb-8">Professional Experience</h3>

                            {/* Teaching Professional */}
                            <div className="border-l-4 border-blue-800-500 pl-6 mb-8">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                    <h4 className="text-xl font-semibold text-gray-900">Teaching Professional</h4>
                                    <span className="text-blue-800-600 font-medium">October 2022 – Present</span>
                                </div>
                                <p className="text-lg text-blue-800-700 mb-3">La Gorce Country Club, Miami Beach, FL</p>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start">
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        Deliver personalized coaching using biomechanical analysis and pressure plate technology, improving swing efficiency by up to 20% for clients.
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        Design innovative training programs blending technical, physical, and mental coaching, boosting clinic participation by 15%.
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        Coach professional players, including Manuel Torres (+1 786-281-5637) and Jorge perez (+1 786-370-5184), achieving top finishes in regional tournaments.
                                    </li>
                                </ul>
                            </div>

                            {/* Founder & CEO */}
                            <div className="border-l-4 border-blue-800-500 pl-6 mb-8">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                    <h4 className="text-xl font-semibold text-gray-900">Founder & CEO</h4>
                                    <span className="text-blue-800-600 font-medium">June 2015 – Present</span>
                                </div>
                                <p className="text-lg text-blue-800-700 mb-3">DEGA Golf Academy, Caracas, Venezuela – Doral, FL</p>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start">
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        Founded a premier academy focused on biomechanical training, reducing player handicaps by an average of 10% through data-driven coaching.
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        Developed TPI-based curricula, training 25+ instructors and coaching junior, amateur, and professional golfers to competitive success.
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        Expanded academy&apos;s reach to South Florida, integrating advanced technologies like motion capture and force plates.
                                    </li>
                                </ul>
                            </div>

                            {/* Director of Golf */}
                            <div className="border-l-4 border-blue-800-500 pl-6 mb-8">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                    <h4 className="text-xl font-semibold text-gray-900">Director of Golf and Instruction</h4>
                                    <span className="text-blue-800-600 font-medium">May 2014 – December 2019</span>
                                </div>
                                <p className="text-lg text-blue-800-700 mb-3">Izcaragua Country Club, Caracas, Venezuela</p>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start">
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        Led golf operations and staff training, improving member satisfaction by 25% through strategic enhancements.
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        Founded the Venezuelan National Golf School, designing programs that led to 5 international championship wins.
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        Implemented data-driven coaching, enhancing player performance through biomechanical insights.
                                    </li>
                                </ul>
                            </div>

                            {/* National Team Coach */}
                            <div className="border-l-4 border-blue-800-500 pl-6">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                    <h4 className="text-xl font-semibold text-gray-900">National Team Head Coach</h4>
                                    <span className="text-blue-800-600 font-medium">July 2007 – July 2014</span>
                                </div>
                                <p className="text-lg text-blue-800-700 mb-3">Venezuelan Golf Federation, Caracas, Venezuela</p>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start">
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        Designed training programs integrating biomechanics and mental coaching, securing top-3 finishes in 8 international competitions.
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        Mentored athletes to achieve national rankings, leveraging video analysis and TPI methodologies.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Education & Certifications Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                            {/* Education */}
                            <div className="bg-white rounded-2xl shadow-lg p-8">
                                <h3 className="text-2xl font-bold text-blue-800-800 mb-6 flex items-center">
                                    <AcademicCapIcon className="h-6 w-6 mr-2" />
                                    Education
                                </h3>
                                <div className="space-y-4">
                                    <div className="border-l-4 border-blue-800-300 pl-4">
                                        <h4 className="font-semibold text-gray-900">B.S. in Economics</h4>
                                        <p className="text-blue-800-700">Georgia State University, Atlanta, GA</p>
                                    </div>
                                    <div className="border-l-4 border-blue-800-300 pl-4">
                                        <h4 className="font-semibold text-gray-900">A.S. in Business</h4>
                                        <p className="text-blue-800-700">Wallace State Community College, Hanceville, AL</p>
                                    </div>
                                </div>
                            </div>

                            {/* Certifications */}
                            <div className="bg-white rounded-2xl shadow-lg p-8">
                                <h3 className="text-2xl font-bold text-blue-800-800 mb-6 flex items-center">
                                    <StarIcon className="h-6 w-6 mr-2" />
                                    Certifications
                                </h3>
                                <div className="space-y-2">
                                    {[
                                        'PGA Class A Professional',
                                        'TPI Golf Fitness Instructor Level 1',
                                        'TPI Golf Junior Coach Level 2',
                                        'TPI Golf Professional Instructor Levels 2 & 3',
                                        'R&A Coaching Certifications 1–3',
                                        'Mental Coaching, Bob Rotella',
                                        'Vision 54 Coaching, Pía Nilson & Lynn Marriott',
                                        'PGA of America Teaching Symposium (Chris Como)'
                                    ].map((cert, index) => (
                                        <div key={index} className="flex items-center">
                                            <div className="w-2 h-2 bg-blue-800-500 rounded-full mr-3"></div>
                                            <span className="text-gray-700">{cert}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Competitive Achievements */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                            <h3 className="text-2xl font-bold text-blue-800-800 mb-6 flex items-center">
                                <TrophyIcon className="h-6 w-6 mr-2" />
                                Competitive Golf Achievements
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-3">Tournament Victories</h4>
                                    <ul className="space-y-2">
                                        <li className="flex items-center">
                                            <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                                            <span className="text-gray-700">Winner, Sambil Open 2015, Venezuela</span>
                                        </li>
                                        <li className="flex items-center">
                                            <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                                            <span className="text-gray-700">Winner, Merand Open 2016, Venezuela</span>
                                        </li>
                                        <li className="flex items-center">
                                            <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                                            <span className="text-gray-700">Won 7 collegiate tournaments</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-3">Professional Tours</h4>
                                    <ul className="space-y-2">
                                        {[
                                            'PGA Tour',
                                            'Nike Tour',
                                            'Web.Com Tour',
                                            'European Tour',
                                            'European Challenge Tour',
                                            'Latin American PGA Tour'
                                        ].map((tour, index) => (
                                            <li key={index} className="flex items-center">
                                                <div className="w-2 h-2 bg-blue-800-500 rounded-full mr-3"></div>
                                                <span className="text-gray-700">{tour}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-6 pt-4 border-t border-gray-200">
                                <p className="text-gray-700">
                                    <strong>Team Captain:</strong> Golf Teams at Wallace State Community College and Georgia State University
                                </p>
                            </div>
                        </div>

                        {/* Technical Skills */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h3 className="text-2xl font-bold text-blue-800-800 mb-6">Technical Skills & Expertise</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {[
                                    'Biomechanical Analysis & Pressure Plate Technology',
                                    'Data-Driven Coaching & Curriculum Design',
                                    'Leadership & Staff Mentorship',
                                    'Client Relationship Management',
                                    'Technology Integration (Motion Capture, Video Analysis)',
                                    'TPI Methodology Implementation'
                                ].map((skill, index) => (
                                    <div key={index} className="bg-blue-800-50 rounded-lg p-4 text-center">
                                        <span className="text-blue-800-800 font-medium">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperiencePage; 