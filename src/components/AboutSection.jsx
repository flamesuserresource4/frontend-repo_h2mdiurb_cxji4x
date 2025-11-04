import { User, Layers } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-blue-600 font-semibold uppercase tracking-widest text-xs">
              <User className="w-4 h-4" /> About
            </div>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">Crafting seamless front‑to‑back solutions</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              I’m a full‑stack developer with a strong focus on UX, performance, and maintainability. I work across the
              stack using React, TypeScript, Node.js, and Python, and I’m comfortable deploying to modern cloud platforms.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              My approach is product‑driven: understand the problem, ship iteratively, measure, and refine.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl border p-5 bg-gray-50">
              <Layers className="w-6 h-6 text-blue-600" />
              <p className="mt-3 font-semibold text-gray-900">Frontend</p>
              <p className="text-sm text-gray-600">React, Vite, Tailwind, Framer Motion</p>
            </div>
            <div className="rounded-xl border p-5 bg-gray-50">
              <Layers className="w-6 h-6 text-blue-600" />
              <p className="mt-3 font-semibold text-gray-900">Backend</p>
              <p className="text-sm text-gray-600">Node.js, FastAPI, REST, GraphQL</p>
            </div>
            <div className="rounded-xl border p-5 bg-gray-50">
              <Layers className="w-6 h-6 text-blue-600" />
              <p className="mt-3 font-semibold text-gray-900">Databases</p>
              <p className="text-sm text-gray-600">Postgres, MongoDB, Redis</p>
            </div>
            <div className="rounded-xl border p-5 bg-gray-50">
              <Layers className="w-6 h-6 text-blue-600" />
              <p className="mt-3 font-semibold text-gray-900">DevOps</p>
              <p className="text-sm text-gray-600">Docker, CI/CD, Cloudflare</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
