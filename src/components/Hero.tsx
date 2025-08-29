import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, FileText, MapPin, Phone, Download, ExternalLink } from 'lucide-react';
import AnimatedText from './AnimatedText';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Enhanced floating orbs */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full opacity-20 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${4 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 mt-32">
        <div className="space-y-8">
          {/* Enhanced Profile Avatar */}
          <div className="inline-block group perspective-1000">
            <div className="w-64 h-64 mx-auto rounded-full bg-gradient-to-br from-purple-400 via-blue-500 to-cyan-400 p-1 animate-spin-slow group-hover:scale-110 transition-all duration-700 shadow-2xl shadow-purple-500/30">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center relative overflow-hidden">
                <span className="text-7xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  YU
                </span>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute inset-0 border-2 border-purple-400/30 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Enhanced Title Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="text-sm text-cyan-400 font-medium tracking-widest uppercase animate-pulse">Hello, I'm</div>
              <h1 className="text-6xl md:text-8xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                  Yaswanth
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-400 bg-clip-text text-transparent animate-gradient-reverse">
                  Ullingala
                </span>
              </h1>
            </div>
            
            <div className="space-y-6">
              <p className="text-2xl md:text-4xl text-gray-200 font-light h-16 flex items-center justify-center">
                <AnimatedText 
                  texts={[
                    "Frontend Developer",
                    "Software Engineer", 
                    "React.js Specialist",
                    "UI/UX Enthusiast",
                    "Full-Stack Developer"
                  ]}
                  className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
                  typingSpeed={80}
                  deletingSpeed={40}
                />
              </p>
              <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
                Innovative Frontend Developer with <span className="text-cyan-400 font-semibold">1.5+ years</span> of experience creating 
                responsive, user-centric web applications. Specialized in <span className="text-purple-400 font-semibold">React.js</span>, 
                modern JavaScript frameworks, and cutting-edge web technologies with a passion for delivering exceptional user experiences.
              </p>
            </div>

            {/* Enhanced Contact Info Cards */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-3 bg-gray-800/40 backdrop-blur-md px-6 py-4 rounded-2xl border border-gray-700 hover:border-purple-400/50 transition-all duration-300 group hover:scale-105">
                <MapPin className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-sm font-medium">Vizag, Andhra Pradesh</span>
              </div>
              <a 
                href="tel:+917989608279"
                className="flex items-center space-x-3 bg-gray-800/40 backdrop-blur-md px-6 py-4 rounded-2xl border border-gray-700 hover:border-purple-400/50 transition-all duration-300 group hover:scale-105"
              >
                <Phone className="w-5 h-5 text-purple-400 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-sm font-medium">+91 7989608279</span>
              </a>
            </div>
          </div>

          {/* Enhanced Social Links with Glow Effect */}
          <div className="flex items-center justify-center space-x-8">
            <a
              href="mailto:yaswanthullingala@gmail.com"
              className="relative p-5 rounded-2xl bg-gray-800/30 border border-gray-700 hover:border-purple-400 transition-all duration-500 hover:scale-110 group backdrop-blur-md hover:shadow-2xl hover:shadow-purple-500/30"
              title="Send Email"
            >
              <Mail className="w-7 h-7 text-gray-300 group-hover:text-purple-400 transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
            <a
              href="#"
              className="relative p-5 rounded-2xl bg-gray-800/30 border border-gray-700 hover:border-blue-400 transition-all duration-500 hover:scale-110 group backdrop-blur-md hover:shadow-2xl hover:shadow-blue-500/30"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-7 h-7 text-gray-300 group-hover:text-blue-400 transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
            <a
              href="#"
              className="relative p-5 rounded-2xl bg-gray-800/30 border border-gray-700 hover:border-cyan-400 transition-all duration-500 hover:scale-110 group backdrop-blur-md hover:shadow-2xl hover:shadow-cyan-500/30"
              title="GitHub Profile"
            >
              <Github className="w-7 h-7 text-gray-300 group-hover:text-cyan-400 transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-green-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>   
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-8 pt-8">
            <a
              href="#projects"
              className="px-10 py-5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl text-white font-semibold hover:scale-110 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/40 relative overflow-hidden group min-w-[200px]"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <FileText className="w-5 h-5" />
                <span>View My Work</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-2xl opacity-30 group-hover:opacity-50 blur transition-opacity duration-500"></div>
            </a>
            
            <a
              href="/resume.pdf"
              download
              className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-green-500 rounded-2xl text-white font-semibold hover:scale-110 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/40 flex items-center space-x-3 relative overflow-hidden group min-w-[200px]"
            >
              <Download className="w-5 h-5" />
              <span className="relative z-10">Download Resume</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-green-400 rounded-2xl opacity-30 group-hover:opacity-50 blur transition-opacity duration-500"></div>
            </a>
            
            <a
              href="#contact"
              className="px-10 py-5 bg-gray-800/50 border-2 border-gray-600 rounded-2xl text-gray-300 hover:text-white hover:border-cyan-400 transition-all duration-500 relative overflow-hidden group hover:shadow-2xl hover:shadow-cyan-500/20 backdrop-blur-md min-w-[200px]"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>Get In Touch</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-3 bg-gray-800/20 backdrop-blur-md px-6 py-4 rounded-2xl border border-gray-700 hover:border-purple-400/50 transition-all duration-300 group">
            <span className="text-xs text-gray-400 uppercase tracking-widest group-hover:text-purple-400 transition-colors duration-300">Discover More</span>
            <ChevronDown className="w-6 h-6 text-purple-400 group-hover:text-cyan-400 transition-colors duration-300" />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;