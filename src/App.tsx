import { useEffect, useState, Suspense, useMemo } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Terminal, Code2, Cpu, FileText } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = useMemo(() => {
    return () => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };
  }, []);

  const projects = [
    {
      name: 'COMAL++',
      description: 'Static responsive website for a university food commerce platform.',
      viewLink: 'https://erick0d.github.io/Comal/', 
      sourceLink: 'https://github.com/Erick0D/Comal', 
      image: 'https://example.com/image1.jpg',
      preview: 'https://erick0d.github.io/Comal/', 
    },
    {
      name: 'Servicios Contables',
      description: 'Static responsive website about accounting services.',
      viewLink: 'https://erick0d.github.io/Contadores/',
      sourceLink: 'https://github.com/Erick0D/Contadores', 
      image: 'https://example.com/image2.jpg',
      preview: 'https://erick0d.github.io/Contadores/', 
    },
    {
      name: 'AppZap',
      description: 'Real-time chat application built with Firebase and Dart.',
      viewLink: 'https://drive.google.com/file/d/10YCU4r0E6H8e0W4zJ4lBqsUCnToP_4PN/view?usp=sharing',
      sourceLink: 'https://github.com/Erick0D/AppZap',
      preview: 'https://www.youtube-nocookie.com/embed/84d1lgC0bwk?si=ZyXXlDeej8o83IDY&amp;controls=0&autoplay=1&mute=1&loop=1', 
    },
    {
      name: 'Mercado de Granjas',
      description: 'Responsive e-commerce application built with PHP and MySQL.',
      viewLink: 'https://youtu.be/9VK1mHWtyK4?si=coqSEQvwM5OU5gny',
      sourceLink: 'https://github.com/Erick0D/Ceiba',
      image: 'https://example.com/image4.jpg',
      preview: 'https://www.youtube-nocookie.com/embed/9VK1mHWtyK4?si=F066uwtxUzMnvkW-&amp;controls=0&autoplay=1&mute=1&loop=1', 
    },
    {
      name: 'CITE',
      description: 'Repository of virtual learning items.',
      viewLink: 'https://erick0d.github.io/Repositorio/',
      sourceLink: 'https://github.com/Erick0D/Repositorio',
      image: 'https://example.com/image5.jpg',
      preview: 'https://erick0d.github.io/Repositorio/', 
    },
  ];

  return (
    <div className="min-h-screen bg-black text-cyan-500">
      <Suspense fallback={<div>Loading...</div>}>
      </Suspense>
      {/* Hero Section with Enhanced Dynamic Background */}
      <section className="min-h-screen flex flex-col items-center justify-center relative px-4 cyber-grid">
        {/* Dynamic Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-purple-500/5 to-black"></div>
        
        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                background: '#00ffff',
                boxShadow: '0 0 10px #00ffff',
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 5}s`,
              }}
            />
          ))}
        </div>
        
        {/* Enhanced Tech Circuit Lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse-slow"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: '1px',
                height: `${Math.random() * 200 + 100}px`,
                background: 'linear-gradient(to bottom, #00ffff, transparent)',
                transform: `rotate(${Math.random() * 360}deg)`,
                opacity: 0.3,
              }}
            />
          ))}
        </div>

        {/* Matrix Rain Effect */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="matrix-column absolute top-0 animate-matrix"
              style={{
                left: `${i * 10}%`,
                animationDelay: `${Math.random() * 2}s`,
                color: '#00ffff',
                textShadow: '0 0 5px #00ffff',
                writingMode: 'vertical-rl',
                fontSize: '12px',
              }}
            >
              {[...Array(20)].map((_, j) => (
                <span key={j} style={{ animationDelay: `${j * 0.1}s` }}>
                  {String.fromCharCode(33 + Math.random() * 93)}
                </span>
              ))}
            </div>
          ))}
        </div>

        <div className={`max-w-4xl mx-auto text-center relative z-10 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="mb-6 flex justify-center">
            <Terminal size={64} className="text-cyan-400 animate-pulse-slow" />
          </div>
          <h1 className="md:text-7xl font-bold mb-6 animate-fade-in relative inline-block">
            <span className="bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              ERICK_ORTIZ.exe
            </span>
            <span className="absolute top-0 left-0 text-cyan-300 animate-glitch opacity-50">
              ERICK_ORTIZ.exe
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-cyan-300/80 mb-8 animate-slide-up font-mono" style={{ animationDelay: '0.2s' }}>
            &gt; Software Engineer :: System.out.print("Hello, World!")
          </p>
          <div className="flex gap-4 justify-center mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <a href="https://github.com/Erick0D" target="_blank" rel="noopener noreferrer" className="p-3 cyber-border rounded-lg hover:scale-110 transition-transform bg-black/50 backdrop-blur-md" aria-label="GitHub Profile">
              <Github size={24} className="text-cyan-400" />
            </a>
            <a href="https://www.linkedin.com/in/erickod/" target="_blank" rel="noopener noreferrer" className="p-3 cyber-border rounded-lg hover:scale-110 transition-transform bg-black/50 backdrop-blur-md" aria-label="LinkedIn Profile">
              <Linkedin size={24} className="text-cyan-400" />
            </a>
            <a href="mailto:meortizduran@gmail.com" target="_blank" rel="noopener noreferrer" className="p-3 cyber-border rounded-lg hover:scale-110 transition-transform bg-black/50 backdrop-blur-md" aria-label="Email Me">
              <Mail size={24} className="text-cyan-400" />
            </a>
            <a href="mailto:meortizduran@gmail.com" target="_blank" rel="noopener noreferrer" className="p-3 cyber-border rounded-lg hover:scale-110 transition-transform bg-black/50 backdrop-blur-md" aria-label="Download Resume">
              <FileText size={24} className="text-cyan-400" />
            </a>
          </div>
        </div>
        <button 
          onClick={scrollToProjects}
          className="absolute bottom-8 animate-bounce text-cyan-400/80 hover:text-cyan-400 transition-colors z-10"
          aria-label="Scroll to Projects"
        >
          <ChevronDown size={32} />
        </button>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-cyan-400 font-mono">
            &lt;PROJECTS /&gt;
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group cyber-border rounded-lg bg-black/80 backdrop-blur-xl hover:animate-glow transition-all duration-300"
              >
                <div className="aspect-video bg-black relative overflow-hidden">
                  {project.preview ? (
                    <iframe 
                      src={project.preview} 
                      title={`Preview of ${project.name}`} 
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500 opacity-80"
                      style={{ border: 'none' }}
                    />
                  ) : (
                    <img 
                      src={project.image} 
                      alt={`Project ${project.name}`}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500 opacity-80"
                    />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-cyan-400 font-mono">{`PROJECT_${project.name}.sys`}</h3>
                  <p className="text-cyan-300/70 mb-4 font-mono text-sm">
                    &gt; {project.description}
                  </p>
                  <div className="flex gap-4">
                    <a href={project.viewLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-mono text-sm" aria-label={`View ${project.name}`}>
                      VIEW <ExternalLink size={16} className="ml-1" />
                    </a>
                    <a href={project.sourceLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-mono text-sm" aria-label={`Source Code for ${project.name}`}>
                      SOURCE <Code2 size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/20 to-black"></div>
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8 flex justify-center">
            <Cpu size={48} className="text-cyan-400 animate-pulse-slow" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-cyan-400 font-mono">
            INITIALIZE_CONTACT()
          </h2>
          <p className="text-xl mb-8 text-cyan-300/80 font-mono">
            &gt; Ready to collaborate?
          </p>
          <a 
            href="mailto:meortizduran@gmail.com"
            className="inline-flex items-center cyber-border bg-black/50 backdrop-blur-xl text-cyan-400 px-8 py-4 rounded-lg font-mono hover:animate-glow transition-all duration-300" aria-label="Send Email"
          >
            SEND_MESSAGE
            <Terminal size={20} className="ml-2" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-cyan-500/60 py-8 px-4 border-t border-cyan-900/30">
        <div className="max-w-6xl mx-auto text-center font-mono">
          <p>&copy; {new Date().getFullYear()} SYSTEM.Erick_Ortiz :: ALL_RIGHTS_RESERVED</p>
        </div>
      </footer>
    </div>
  );
}

export default App;