import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Collaboration Suite',
    description:
      'A collaborative editor with presence, comments, and offline support. Built with React, CRDTs, and WebSockets.',
    tags: ['React', 'CRDT', 'WebSockets', 'Tailwind'],
    demo: '#',
    repo: '#',
  },
  {
    title: 'E‑commerce Platform',
    description:
      'Full‑stack storefront with product search, secure checkout, and admin dashboard. Deployed to the edge.',
    tags: ['Node', 'FastAPI', 'Postgres', 'Stripe'],
    demo: '#',
    repo: '#',
  },
  {
    title: 'Analytics Dashboard',
    description:
      'Interactive analytics with charting, drill‑downs, and role‑based access control.',
    tags: ['React', 'D3', 'Auth', 'RLS'],
    demo: '#',
    repo: '#',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Selected Projects</h2>
          <p className="mt-3 text-gray-700">A few things I’ve been building recently.</p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, idx) => (
              <article key={idx} className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full border border-blue-100">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <a href={p.demo} className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-900 font-medium">
                    <ExternalLink className="w-4 h-4" /> Live
                  </a>
                  <a href={p.repo} className="inline-flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium">
                    <Github className="w-4 h-4" /> Code
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
