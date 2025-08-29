import React from 'react';
import { User, MapPin, GraduationCap, Award, Mail, Calendar, Star } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            Passionate about creating exceptional digital experiences through clean code and innovative design
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Profile Section */}
          <div className="space-y-8">
            <div className="bg-gray-800/30 backdrop-blur-md border border-gray-700 rounded-3xl p-8 hover:border-purple-400/50 transition-all duration-500 group hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl mr-4 group-hover:rotate-12 transition-transform duration-500">
                  <User className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">Profile Summary</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                Innovative Frontend Developer with <span className="text-cyan-400 font-semibold">1.5+ years</span> of experience 
                creating responsive, user-centric web applications. Specialized in modern JavaScript frameworks, with expertise in 
                <span className="text-purple-400 font-semibold"> React.js</span>, <span className="text-blue-400 font-semibold">Tailwind CSS</span>, 
                and cutting-edge web technologies. Proven track record of delivering high-performance solutions that enhance user 
                experience and drive business growth.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-800/30 backdrop-blur-md border border-gray-700 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <Mail className="w-5 h-5 text-cyan-400 mr-3" />
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-gray-300 bg-gray-700/30 p-4 rounded-xl hover:bg-gray-700/50 transition-all duration-300">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span>Vizag, Andhra Pradesh, India</span>
                </div>
                <a href="mailto:yaswanthullingala@gmail.com" className="flex items-center space-x-4 text-gray-300 bg-gray-700/30 p-4 rounded-xl hover:bg-gray-700/50 transition-all duration-300 hover:text-purple-400">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span>yaswanthullingala@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-8">
            <div className="bg-gray-800/30 backdrop-blur-md border border-gray-700 rounded-3xl p-8 hover:border-blue-400/50 transition-all duration-500 group hover:scale-105">
              <div className="flex items-center mb-8">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl mr-4 group-hover:rotate-12 transition-transform duration-500">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">Education</h3>
              </div>
              
              <div className="space-y-8">
                {/* Bachelor's Degree */}
                <div className="relative pl-8 border-l-2 border-purple-400 hover:border-cyan-400 transition-colors duration-300">
                  <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full transform -translate-x-2 animate-pulse"></div>
                  <div className="bg-gray-700/30 p-6 rounded-2xl hover:bg-gray-700/50 transition-all duration-300">
                    <h4 className="font-bold text-xl text-white mb-2">Bachelor of Technology</h4>
                    <p className="text-cyan-400 font-semibold mb-1">Electronics and Communication Engineering</p>
                    <p className="text-gray-400 text-sm mb-3">Vignan's Institute of Information Technologies</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-500 text-sm">2019 – 2023</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="bg-gradient-to-r from-green-400 to-blue-400 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          CGPA: 7.7
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Higher Secondary */}
                <div className="relative pl-8 border-l-2 border-blue-400 hover:border-cyan-400 transition-colors duration-300">
                  <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full transform -translate-x-2 animate-pulse"></div>
                  <div className="bg-gray-700/30 p-6 rounded-2xl hover:bg-gray-700/50 transition-all duration-300">
                    <h4 className="font-bold text-xl text-white mb-2">Higher Secondary Education</h4>
                    <p className="text-cyan-400 font-semibold mb-1">Math, Physics, Chemistry</p>
                    <p className="text-gray-400 text-sm mb-3">Bhashyam Junior College</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-500 text-sm">2017 – 2019</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Award className="w-4 h-4 text-yellow-400" />
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          99%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievement Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-md border border-purple-400/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-center mb-3">
                  <Award className="w-8 h-8 text-yellow-400" />
                </div>
                <h4 className="text-white font-bold text-center">Academic Excellence</h4>
                <p className="text-gray-300 text-sm text-center mt-2">99% in Higher Secondary</p>
              </div>
              
              <div className="bg-gradient-to-r from-cyan-500/20 to-green-500/20 backdrop-blur-md border border-cyan-400/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-center mb-3">
                  <Star className="w-8 h-8 text-cyan-400" />
                </div>
                <h4 className="text-white font-bold text-center">Professional Growth</h4>
                <p className="text-gray-300 text-sm text-center mt-2">1.5+ Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;