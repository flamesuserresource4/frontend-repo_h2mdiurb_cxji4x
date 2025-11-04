import { Mail, Github } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Let’s build something great</h2>
          <p className="mt-3 text-gray-700">
            Open to freelance, contract, and full‑time opportunities. Reach out and let’s talk.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="mailto:you@example.com"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-medium transition"
            >
              <Mail className="w-4 h-4" /> Email Me
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-black text-white px-5 py-3 rounded-lg font-medium transition"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>

          <p className="mt-8 text-sm text-gray-500">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
