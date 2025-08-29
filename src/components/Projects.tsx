import React from 'react';
import { ExternalLink, Github, Calendar, ChevronRight, Code, Zap, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Intelliod Website",
      description: "Created a responsive and visually dynamic website for Intelliod, integrating Vanta.js for interactive visuals with modern React.js architecture.",
      tech: ["React.js", "JavaScript", "Tailwind CSS", "Vanta.js", "DaisyUI"],
      category: "Web Development",
      year: "2024",
      status: "Production",
      features: [
        "Interactive 3D animations with Vanta.js",
        "Responsive design with Tailwind CSS",
        "Component-based React architecture",
        "Performance optimized for fast loading"
      ]
    },
    {
      title: "Mbstech.ai Website",
      description: "Developed an AI-focused company website using React.js with interactive animations powered by Vanta.js and modern UI components.",
      tech: ["React.js", "JavaScript", "Tailwind CSS", "Vanta.js", "DaisyUI"],
      category: "AI/ML Web Interface",
      year: "2024",
      status: "Production",
      features: [
        "AI-themed interactive animations",
        "Modern glassmorphism design",
        "Scalable component architecture",
        "Cross-browser compatibility"
      ]
    },
    {
      title: "Brain Tumor Diagnosis System",
      description: "Developed a Flask-based web application for real-time brain tumor classification using machine learning models with interactive Streamlit interface.",
      tech: ["Flask", "Python", "C++", "Streamlit", "Machine Learning"],
      category: "AI/ML Application",
      year: "2023",
      status: "Completed",
      features: [
        "Real-time tumor classification",
        "Interactive Streamlit interface",
        "High accuracy ML algorithms",
        "Medical image processing capabilities"
      ]
    },
    {
      title: "Portfolio Website",
      description: "Built a personal portfolio website to showcase development projects using React.js and DaisyUI, deployed on GitHub Pages with continuous integration.",
      tech: ["React.js", "JavaScript", "DaisyUI", "GitHub Pages", "CI/CD"],
      category: "Personal Project",
      year: "2023",
      status: "Live",
      features: [
        "Continuous deployment with GitHub Pages",
        "Responsive mobile-first design",
        "Fast loading optimizations",
        "SEO optimized structure"
      ]
    },
    {
      title: "Rosys Virtual Solutions Website",
      description: "Developed a responsive, user-friendly website for Rosys Virtual Solutions, emphasizing accessibility and smooth user interactions.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      category: "Business Website",
      year: "2023",
      status: "Production",
      features: [
        "Cross-device compatibility",
        "Performance optimization",
        "Accessibility compliance",
        "Intuitive navigation design"
      ]
    },
    {
      title: "ICDT Drone Technology Website",
      description: "Designed and implemented a website showcasing cutting-edge drone technologies and services with focus on agricultural applications.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      category: "Technology Showcase",
      year: "2023",
      status: "Live",
      features: [
        "Agricultural drone showcase",
        "Intuitive UI design",
        "Cross-device compatibility",
        "Professional presentation"
      ]
    }
  ];

  const categories = ["All", "Web Development", "AI/ML Application", "Technology Showcase", "Personal Project", "Business Website"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            A showcase of my development projects spanning web applications, AI/ML solutions, and innovative technologies
          </p>
        </div>

        {/* Enhanced Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-2xl transition-all duration-500 border font-medium ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white border-transparent shadow-lg shadow-purple-500/30'
                  : 'bg-gray-800/30 text-gray-300 border-gray-600 hover:border-purple-400 hover:text-purple-400 backdrop-blur-md'
              } hover:scale-105`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Enhanced Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-10">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/30 backdrop-blur-md border border-gray-700 rounded-3xl p-8 hover:border-purple-400/50 transition-all duration-700 group hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center flex-wrap gap-3 mb-4">
                    <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-2 rounded-2xl text-sm font-medium">
                      {project.category}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm bg-gray-700/30 px-3 py-1 rounded-xl">
                      <Calendar className="w-4 h-4 mr-2" />
                      {project.year}
                    </div>
                    <span className={`px-3 py-1 rounded-xl text-xs font-medium border ${
                      project.status === 'Production' || project.status === 'Live' 
                        ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                        : project.status === 'Current Position'
                        ? 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                        : 'bg-gray-500/20 text-gray-400 border-gray-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-4 flex items-center">
                  <Star className="w-5 h-5 text-cyan-400 mr-2" />
                  Key Features
                </h4>
                <ul className="grid grid-cols-1 gap-3">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start bg-gray-700/20 p-3 rounded-xl hover:bg-gray-700/40 transition-all duration-300">
                      <ChevronRight className="w-4 h-4 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-white font-semibold mb-4 flex items-center">
                  <Code className="w-5 h-5 text-purple-400 mr-2" />
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gray-700/40 text-gray-300 rounded-2xl text-sm border border-gray-600 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <button className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl text-white hover:scale-105 transition-all duration-300 font-medium hover:shadow-xl hover:shadow-purple-500/30 relative overflow-hidden group">
                  <ExternalLink className="w-5 h-5" />
                  <span className="relative z-10">View Project</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button className="flex items-center justify-center space-x-2 px-6 py-3 border border-gray-600 rounded-2xl text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 font-medium backdrop-blur-md hover:bg-gray-800/30">
                  <Github className="w-5 h-5" />
                  <span>Source Code</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Summary Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-gray-800/20 backdrop-blur-md border border-gray-700 rounded-2xl px-8 py-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">6+</div>
              <div className="text-gray-300 text-sm">Projects</div>
            </div>
            <div className="w-px h-8 bg-gray-600"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">3+</div>
              <div className="text-gray-300 text-sm">Clients</div>
            </div>
            <div className="w-px h-8 bg-gray-600"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">100%</div>
              <div className="text-gray-300 text-sm">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;