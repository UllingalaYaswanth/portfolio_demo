import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, FileText, MessageSquare, User, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "yaswanthullingala@gmail.com",
      href: "mailto:yaswanthullingala@gmail.com",
      color: "text-purple-400",
      bgColor: "from-purple-500/20 to-blue-500/20",
      borderColor: "border-purple-400/30"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7989608279",
      href: "tel:+917989608279",
      color: "text-blue-400",
      bgColor: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-400/30"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Vizag, Andhra Pradesh, India",
      href: "#",
      color: "text-cyan-400",
      bgColor: "from-cyan-500/20 to-green-500/20",
      borderColor: "border-cyan-400/30"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
      color: "hover:text-blue-400 hover:border-blue-400",
      bgGradient: "hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-cyan-500/10"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "#",
      color: "hover:text-gray-300 hover:border-gray-400",
      bgGradient: "hover:bg-gradient-to-r hover:from-gray-500/10 hover:to-gray-600/10"
    },
    {
      icon: FileText,
      label: "Resume",
      href: "/resume.pdf",
      color: "hover:text-green-400 hover:border-green-400",
      bgGradient: "hover:bg-gradient-to-r hover:from-green-500/10 hover:to-cyan-500/10"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            Ready to collaborate on your next project? Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    className={`flex items-center p-6 bg-gradient-to-r ${info.bgColor} backdrop-blur-md border ${info.borderColor} rounded-2xl group hover:scale-105 transition-all duration-500 hover:shadow-xl`}
                  >
                    <div className="p-4 bg-gray-700/30 rounded-2xl mr-6 group-hover:bg-gray-600/50 transition-all duration-300">
                      <IconComponent className={`w-7 h-7 ${info.color}`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">{info.label}</p>
                      <p className="text-white font-bold text-lg">{info.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="bg-gray-800/30 backdrop-blur-md border border-gray-700 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <MessageSquare className="w-6 h-6 text-cyan-400 mr-3" />
                Connect With Me
              </h3>
              <div className="flex space-x-6">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className={`p-4 rounded-2xl bg-gray-700/30 border border-gray-600 transition-all duration-500 hover:scale-110 ${social.color} ${social.bgGradient} hover:shadow-xl backdrop-blur-sm flex-1 flex items-center justify-center`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 backdrop-blur-md border border-green-400/30 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-green-400 mr-3" />
                  <div>
                    <h4 className="text-white font-bold text-lg">Available for Work</h4>
                    <p className="text-gray-300">Open to new opportunities and collaborations</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-4 h-4 bg-green-400 rounded-full animate-ping opacity-75"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="bg-gray-800/30 backdrop-blur-md border border-gray-700 rounded-3xl p-8 hover:border-purple-400/30 transition-all duration-500">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Send className="w-6 h-6 text-purple-400 mr-3" />
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-gray-300 text-sm font-semibold uppercase tracking-wider">
                    Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 bg-gray-700/30 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 backdrop-blur-sm"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-gray-300 text-sm font-semibold uppercase tracking-wider">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 bg-gray-700/30 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 backdrop-blur-sm"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-gray-300 text-sm font-semibold uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-gray-700/30 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 backdrop-blur-sm"
                  placeholder="What's this about?"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-gray-300 text-sm font-semibold uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-6 py-4 bg-gray-700/30 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 resize-none backdrop-blur-sm"
                  placeholder="Tell me about your project or ideas..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white py-4 px-8 rounded-2xl font-bold hover:scale-105 transition-all duration-500 flex items-center justify-center space-x-3 hover:shadow-2xl hover:shadow-purple-500/30 relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span className="relative z-10">Send Message</span>
                  </>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;