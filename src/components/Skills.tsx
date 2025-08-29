import React from 'react';
import { Code, Palette, Database, Globe, GitBranch, Wrench, Cpu, Zap, TrendingUp, Star } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "Python", level: 85 },
        { name: "C", level: 80 },
        { name: "C++", level: 75 },
      ],
      color: "from-purple-400 to-blue-500"
    },
    {
      title: "UI Technologies",
      icon: Palette,
      skills: [
        { name: "React.js", level: 95 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JSX", level: 95 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Bootstrap", level: 80 },
        { name: "DaisyUI", level: 90 }
      ],
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "RDMS & Databases",
      icon: Database,
      skills: [
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 75 }
      ],
      color: "from-cyan-400 to-green-500"
    },
    {
      title: "Web Services",
      icon: Globe,
      skills: [
        { name: "Flask", level: 85 },
        { name: "FastAPI", level: 80 }
      ],
      color: "from-green-400 to-yellow-500"
    },
    {
      title: "Version Control",
      icon: GitBranch,
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 90 }
      ],
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Other Tools",
      icon: Wrench,
      skills: [
        { name: "Vanta.js", level: 85 },
        { name: "Streamlit", level: 85 },
        { name: "Firebase", level: 80 },
        { name: "Postman", level: 85 },
        { name: "GitHub Pages", level: 90 }
      ],
      color: "from-orange-400 to-red-500"
    },
    {
      title: "Embedded Systems",
      icon: Cpu,
      skills: [
        { name: "Arduino C", level: 80 },
        { name: "Python (Embedded)", level: 75 }
      ],
      color: "from-red-400 to-purple-500"
    }
  ];

  const [isInView, setIsInView] = React.useState(false);
  const sectionRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            A comprehensive overview of my technical expertise and proficiency levels across various technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-md border border-gray-700 rounded-3xl p-8 hover:border-purple-400/50 transition-all duration-700 group hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div className="flex items-center mb-8">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${category.color} mr-5 group-hover:rotate-12 transition-transform duration-500 shadow-lg`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-cyan-400 font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1500 ease-out relative`}
                          style={{ 
                            width: isInView ? `${skill.level}%` : '0%',
                            transitionDelay: `${index * 200 + skillIndex * 100}ms`
                          }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center bg-gray-800/20 backdrop-blur-md border border-gray-700 rounded-3xl p-8 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 group">
            <div className="mb-4">
              <TrendingUp className="w-12 h-12 text-purple-400 mx-auto group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="text-4xl font-bold text-purple-400 mb-2">1.5+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
          
          <div className="text-center bg-gray-800/20 backdrop-blur-md border border-gray-700 rounded-3xl p-8 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 group">
            <div className="mb-4">
              <Code className="w-12 h-12 text-cyan-400 mx-auto group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="text-4xl font-bold text-cyan-400 mb-2">6+</div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
          
          <div className="text-center bg-gray-800/20 backdrop-blur-md border border-gray-700 rounded-3xl p-8 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 group">
            <div className="mb-4">
              <Zap className="w-12 h-12 text-blue-400 mx-auto group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="text-4xl font-bold text-blue-400 mb-2">15+</div>
            <div className="text-gray-300">Technologies Mastered</div>
          </div>
          
          <div className="text-center bg-gray-800/20 backdrop-blur-md border border-gray-700 rounded-3xl p-8 hover:border-green-400/50 transition-all duration-500 hover:scale-105 group">
            <div className="mb-4">
              <Star className="w-12 h-12 text-green-400 mx-auto group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="text-4xl font-bold text-green-400 mb-2">4</div>
            <div className="text-gray-300">Companies Worked</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;