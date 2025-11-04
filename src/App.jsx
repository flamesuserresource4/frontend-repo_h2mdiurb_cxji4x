import Hero3D from './components/Hero3D';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen w-full scroll-smooth bg-white text-gray-900">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-extrabold text-xl tracking-tight">
            <span className="text-blue-600">FS</span> Developer
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-blue-700 transition">About</a>
            <a href="#projects" className="hover:text-blue-700 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-700 transition">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero3D />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}
