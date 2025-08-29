import React from 'react';
import { Calendar, MapPin, ChevronRight, Briefcase, Building, Clock } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Intelliod",
      location: "Remote",
      period: "May 2024 – Present",
      type: "Full-time",
      status: "Current Position",
      responsibilities: [
        "Developed multiple responsive websites with a focus on user experience and cross-device compatibility",
        "Worked closely with clients to understand business needs, translating them into effective web solutions",
        "Optimized site performance, resulting in faster load times and higher SEO rankings"
      ],
      tech: ["React.js", "Tailwind CSS", "JavaScript", "HTML5", "CSS3", "Vanta.js", "DaisyUI"]
    },
    {
      title: "Software Developer",
      company: "Rosys Virtual Solutions",
      location: "Vizag, AP",
      period: "July 2023 – Apr 2024",
      type: "Full-time",
      status: "9 Months",
      responsibilities: [
        "Developed object detection and facial recognition models, including collecting and curating datasets to optimize performance",
        "Developed web applications integrating object detection and facial recognition technologies",
        "Collaborated with clients to gather requirements and deliver tailored solutions"
      ],
      tech: ["Python", "Flask", "Machine Learning", "Computer Vision", "JavaScript", "HTML", "CSS"]
    },
    {
      title: "Embedded Software Engineer",
      company: "NexSemi Private Ltd",
      location: "Vizag, AP",
      period: "Mar 2023 – Apr 2023",
      type: "Internship",
      status: "1 Month",
      responsibilities: [
        "Assisted in developing and optimizing embedded software for semiconductor devices, enhancing performance and reliability",
        "Worked on firmware updates and troubleshooting, contributing to improved product stability"
      ],
      tech: ["C", "Arduino", "Embedded Systems", "Firmware Development"]
    },
    {
      title: "Drone Technology Intern",
      company: "Innovation Center for Drone Technologies (ICDT)",
      location: "Vizag, AP",
      period: "Nov 2022 – Feb 2023",
      type: "Internship",
      status: "4 Months",
      responsibilities: [
        "Contributed to the development of a hexacopter drone for agricultural applications, improving crop monitoring efficiency",
        "Collaborated with engineers to design and test drone systems, improving operational reliability"
      ],
      tech: ["Python", "Embedded Systems", "IoT", "Agricultural Technology", "Drone Systems"]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            My professional journey in software development, from embedded systems to modern web applications
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Enhanced Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-400 via-blue-500 to-cyan-400 rounded-full"></div>

            {experiences.map((exp, index) => (
              <div key={index} className={`relative mb-16 ${index % 2 === 0 ? 'md:ml-0' : 'md:ml-auto'} md:w-1/2`}>
                {/* Enhanced Timeline Dot */}
                <div className="absolute left-6 md:left-auto md:-right-6 w-6 h-6 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full border-4 border-gray-900 z-10 animate-pulse shadow-lg shadow-purple-500/50"></div>
                
                <div className={`ml-20 md:ml-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className="bg-gray-800/30 backdrop-blur-md border border-gray-700 rounded-3xl p-8 hover:border-purple-400/50 transition-all duration-500 group hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                    
                    {/* Header Section */}
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center mb-3">
                          <Briefcase className="w-5 h-5 text-purple-400 mr-2" />
                          <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                            {exp.title}
                          </h3>
                        </div>
                        <div className="flex items-center mb-2">
                          <Building className="w-5 h-5 text-cyan-400 mr-2" />
                          <p className="text-cyan-400 font-semibold text-xl">{exp.company}</p>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center text-gray-400 text-sm space-y-2 sm:space-y-0 sm:space-x-6">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            {exp.location}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {exp.period}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            {exp.status}
                          </div>
                        </div>
                      </div>
                      <span className={`mt-4 lg:mt-0 px-4 py-2 rounded-2xl text-sm font-semibold ${
                        exp.type === 'Full-time' 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                          : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      }`}>
                        {exp.type}
                      </span>
                    </div>

                    {/* Responsibilities */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-4 flex items-center">
                        <ChevronRight className="w-5 h-5 text-cyan-400 mr-2" />
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-3">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300 leading-relaxed">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-white font-semibold mb-4">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 bg-gray-700/50 text-gray-300 rounded-2xl text-sm border border-gray-600 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Career Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center bg-gray-800/20 backdrop-blur-md border border-gray-700 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold text-purple-400 mb-2">1.5+</div>
              <div className="text-gray-300 text-sm">Years Experience</div>
            </div>
            <div className="text-center bg-gray-800/20 backdrop-blur-md border border-gray-700 rounded-2xl p-6 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold text-blue-400 mb-2">4</div>
              <div className="text-gray-300 text-sm">Companies</div>
            </div>
            <div className="text-center bg-gray-800/20 backdrop-blur-md border border-gray-700 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold text-cyan-400 mb-2">6+</div>
              <div className="text-gray-300 text-sm">Projects</div>
            </div>
            <div className="text-center bg-gray-800/20 backdrop-blur-md border border-gray-700 rounded-2xl p-6 hover:border-green-400/50 transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold text-green-400 mb-2">15+</div>
              <div className="text-gray-300 text-sm">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;