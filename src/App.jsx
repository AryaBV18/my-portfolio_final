import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Microchip, 
  Code2, 
  Zap, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  ChevronDown,
  Terminal,
  Radio,
  Wifi
} from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll events for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Simple scroll spy
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500/30">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold text-white flex items-center gap-2">
            <Cpu className="text-cyan-400" size={28} />
            <span>ARYA<span className="text-cyan-400">.</span></span>
          </div>
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link.toLowerCase())}
                className={`text-sm uppercase tracking-wider font-medium transition-colors hover:text-cyan-400 ${activeSection === link.toLowerCase() ? 'text-cyan-400' : 'text-slate-400'}`}
              >
                {link}
              </button>
            ))}
          </div>
          <a href="#contact" className="hidden md:block px-5 py-2 border border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400/10 transition-colors text-sm font-medium">
            Let's Talk
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
        {/* Abstract background elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-6xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6 z-10">
            <p className="text-cyan-400 font-mono tracking-wide">Hi, my name is</p>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              ARYA B V.
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-500">
              I build things for the physical world.
            </h2>
            <p className="max-w-xl text-lg text-slate-400 leading-relaxed pt-4">
              I'm an 8th-semester Electronics Engineering student specializing in embedded systems, IoT, and hardware-software integration. I turn complex circuits and code into functional, real-world solutions.
            </p>
            <div className="flex gap-4 pt-6">
              <button onClick={() => scrollTo('projects')} className="px-6 py-3 bg-cyan-500 text-slate-950 font-semibold rounded hover:bg-cyan-400 transition-colors flex items-center gap-2">
                View My Work <ChevronDown size={18} />
              </button>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-3 border border-slate-700 rounded text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-3 border border-slate-700 rounded text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center z-10 hidden lg:flex">
            {/* Geometric representation of a chip/board */}
            <div className="relative w-80 h-80 border border-slate-800 rounded-lg p-6 bg-slate-900/50 backdrop-blur-sm shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 border-2 border-cyan-500/30 rounded flex items-center justify-center bg-slate-950 relative animate-[pulse_4s_ease-in-out_infinite]">
                  <Microchip className="text-cyan-400 w-16 h-16" />
                  {/* Circuit traces */}
                  <div className="absolute top-1/2 -left-12 w-12 h-[2px] bg-cyan-500/30"></div>
                  <div className="absolute top-1/2 -right-12 w-12 h-[2px] bg-cyan-500/30"></div>
                  <div className="absolute -top-12 left-1/2 w-[2px] h-12 bg-cyan-500/30"></div>
                  <div className="absolute -bottom-12 left-1/2 w-[2px] h-12 bg-cyan-500/30"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-white">About Me</h2>
            <div className="h-[1px] bg-slate-700 flex-1"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-2 space-y-6 text-slate-400 leading-relaxed text-lg">
              <p>
                Hello! I'm Arya, a passionate electronics student currently in my 8th semester. My journey in electronics began when I first learned how to blink an LED using an Arduino. Since then, I've been fascinated by the intersection of hardware and software.
              </p>
              <p>
                My academic career has provided a strong foundation in analog and digital electronics, signal processing, and microcontroller architecture. Outside of coursework, I spend my time designing PCBs, writing firmware, and building IoT prototypes that solve practical problems.
              </p>
              <p>
                As I approach graduation, I am looking for opportunities to bring my hands-on experience and theoretical knowledge to a dynamic engineering team, focusing on embedded product development.
              </p>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <h3 className="text-white font-semibold mb-4 border-b border-slate-700 pb-2">Quick Facts</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between">
                  <span className="text-slate-500">Degree</span>
                  <span className="text-cyan-400 text-right">B.Tech Electronics</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-500">Semester</span>
                  <span className="text-white">8th (Final Year)</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-500">Location</span>
                  <span className="text-white">India</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-500">Interest</span>
                  <span className="text-white">Embedded & IoT</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl font-bold text-white">Technical Arsenal</h2>
            <div className="h-[1px] bg-slate-700 flex-1"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Hardware */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl hover:border-cyan-500/30 transition-colors group">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                <Cpu className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Hardware & Boards</h3>
              <ul className="space-y-3">
                {['Arduino Uno / Mega', 'Raspberry Pi 4', 'ESP32 / ESP8266', 'STM32 Microcontrollers', 'PCB Design (KiCad/Altium)', 'Oscilloscopes & DMMs'].map(skill => (
                  <li key={skill} className="flex items-center gap-3 text-slate-400">
                    <Zap size={14} className="text-cyan-500" /> {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Software */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl hover:border-cyan-500/30 transition-colors group">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                <Terminal className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Languages & Firmware</h3>
              <ul className="space-y-3">
                {['C / C++ (Embedded)', 'Python (Scripting/IoT)', 'Verilog / VHDL', 'MATLAB', 'FreeRTOS', 'Git & Version Control'].map(skill => (
                  <li key={skill} className="flex items-center gap-3 text-slate-400">
                    <Code2 size={14} className="text-cyan-500" /> {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Concepts */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl hover:border-cyan-500/30 transition-colors group">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                <Radio className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Core Competencies</h3>
              <ul className="space-y-3">
                {['IoT Architectures', 'Digital Signal Processing', 'I2C, SPI, UART Protocols', 'Sensor Integration', 'Analog Circuit Design', 'Power Management'].map(skill => (
                  <li key={skill} className="flex items-center gap-3 text-slate-400">
                    <Wifi size={14} className="text-cyan-500" /> {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
            <div className="h-[1px] bg-slate-700 flex-1"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300">
              <div className="h-48 bg-slate-800 relative flex items-center justify-center">
                <Wifi className="w-16 h-16 text-slate-600" />
                <div className="absolute top-4 right-4 flex gap-2">
                  <a href="#" className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-cyan-400"><Github size={18}/></a>
                </div>
              </div>
              <div className="p-6">
                <p className="text-cyan-400 text-xs font-mono mb-2">IoT / ESP32</p>
                <h3 className="text-xl font-bold text-white mb-3">Smart Agri-Monitor</h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                  An end-to-end IoT system using ESP32 to monitor soil moisture, temperature, and humidity. Data is transmitted via MQTT to a cloud dashboard for real-time visualization and automated irrigation control.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="text-xs px-2 py-1 bg-slate-800 text-slate-300 rounded">C++</span>
                  <span className="text-xs px-2 py-1 bg-slate-800 text-slate-300 rounded">ESP32</span>
                  <span className="text-xs px-2 py-1 bg-slate-800 text-slate-300 rounded">MQTT</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300">
              <div className="h-48 bg-slate-800 relative flex items-center justify-center">
                <Microchip className="w-16 h-16 text-slate-600" />
                <div className="absolute top-4 right-4 flex gap-2">
                  <a href="#" className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-cyan-400"><Github size={18}/></a>
                </div>
              </div>
              <div className="p-6">
                <p className="text-cyan-400 text-xs font-mono mb-2">Robotics / Control Systems</p>
                <h3 className="text-xl font-bold text-white mb-3">Autonomous Line Follower</h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                  Designed and built a fast line-following robot utilizing a custom-designed PCB. Implemented a PID control algorithm on an STM32 microcontroller to ensure smooth and high-speed cornering.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="text-xs px-2 py-1 bg-slate-800 text-slate-300 rounded">STM32</span>
                  <span className="text-xs px-2 py-1 bg-slate-800 text-slate-300 rounded">KiCad</span>
                  <span className="text-xs px-2 py-1 bg-slate-800 text-slate-300 rounded">PID Control</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300">
              <div className="h-48 bg-slate-800 relative flex items-center justify-center">
                <Cpu className="w-16 h-16 text-slate-600" />
                <div className="absolute top-4 right-4 flex gap-2">
                  <a href="#" className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-cyan-400"><Github size={18}/></a>
                </div>
              </div>
              <div className="p-6">
                <p className="text-cyan-400 text-xs font-mono mb-2">FPGA / Digital Design</p>
                <h3 className="text-xl font-bold text-white mb-3">VGA Display Controller</h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                  Programmed a Basys 3 FPGA board using Verilog to generate standard VGA signals. Created a hardware-based graphics engine capable of rendering basic geometric shapes and bouncing animations on a monitor.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="text-xs px-2 py-1 bg-slate-800 text-slate-300 rounded">Verilog</span>
                  <span className="text-xs px-2 py-1 bg-slate-800 text-slate-300 rounded">FPGA</span>
                  <span className="text-xs px-2 py-1 bg-slate-800 text-slate-300 rounded">Xilinx Vivado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-cyan-400 font-mono mb-4">04. What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-slate-400 text-lg mb-10">
            As I wrap up my 8th semester, I am actively looking for full-time opportunities or exciting embedded projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <a href="mailto:arya.bv@example.com" className="inline-block px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded hover:bg-cyan-500/10 transition-colors">
            Say Hello
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-slate-500 text-sm border-t border-slate-900 bg-slate-950">
        <p>Designed & Built by ARYA B V</p>
        <p className="mt-1 font-mono text-xs">Electronics & Communication Engineer</p>
      </footer>
    </div>
  );
};

export default App;
