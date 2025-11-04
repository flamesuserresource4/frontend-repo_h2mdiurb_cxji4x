import Spline from '@splinetool/react-spline';
import { Github, Mail, ExternalLink } from 'lucide-react';

export default function Hero3D() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl bg-white/60 backdrop-blur-md rounded-2xl p-8 shadow-xl">
            <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold">Full‑Stack Web Developer</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              I build modern, delightful web experiences
            </h1>
            <p className="mt-4 text-gray-700 text-lg">
              Specialized in React, Node.js, and cloud-native architectures. I turn ideas into fast, scalable products.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-medium transition">
                View Projects <ExternalLink className="w-4 h-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 bg-white/80 hover:bg-white text-gray-900 px-5 py-3 rounded-lg font-medium transition shadow">
                Contact Me <Mail className="w-4 h-4" />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-gray-900 hover:bg-black text-white px-5 py-3 rounded-lg font-medium transition">
                GitHub <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-white/10 to-white" />
    </section>
  );
}
