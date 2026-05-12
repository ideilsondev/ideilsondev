"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "Senior Software Engineer",
    company: "ICBOX",
    period: "2023 - Presente",
    description:
      "Liderança técnica na arquitetura de microserviços e sistemas distribuídos utilizando Rust, Go, Node.js e C#. Foco em escalabilidade e performance extrema.",
    tech: ["Rust", "Go", "Node.js", "Docker", "PostgreSQL"],
  },
  {
    id: 2,
    role: "Fullstack Developer",
    company: "Freelance / Consultoria",
    period: "2020 - 2023",
    description:
      "Desenvolvimento de sistemas SaaS multi-tenant, integrações complexas de pagamentos (PIX/Asaas) e dashboards analíticos de alta performance.",
    tech: ["React", "Vue", "TailwindCSS", "NestJS", "FastAPI"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experiência</h2>
          <p className="text-zinc-400 max-w-2xl text-lg">
            Trajetória profissional focada em resolver problemas difíceis com código limpo e arquitetura sólida.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-4 md:gap-8 items-baseline">
                <div className="mb-2 md:mb-0 text-sm font-medium text-zinc-500 uppercase tracking-wider">
                  {exp.period}
                </div>
                <div className="md:col-span-3 group relative p-6 rounded-2xl border border-white/5 bg-zinc-900/30 hover:bg-zinc-900/80 transition-colors">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-zinc-100 mb-1">
                      {exp.role} · <span className="text-indigo-400">{exp.company}</span>
                    </h3>
                    <p className="mt-4 text-zinc-400 leading-relaxed">
                      {exp.description}
                    </p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <li
                          key={tech}
                          className="px-3 py-1 text-xs font-medium text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 rounded-full"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
