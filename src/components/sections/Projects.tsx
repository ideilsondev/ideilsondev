"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "ICBOX Microservices",
    description: "Arquitetura distribuída de microserviços contendo APIs de alta disponibilidade escritas em Go, Rust e Fastify.",
    tech: ["Docker Swarm", "Go", "Rust", "Fastify", "PostgreSQL"],
    link: "https://github.com/ideilsondev",
    github: "https://github.com/ideilsondev",
  },
  {
    id: 2,
    title: "Automação de Infraestrutura",
    description: "Pipeline completo CI/CD utilizando Dokploy e Traefik para roteamento dinâmico de projetos SaaS.",
    tech: ["Dokploy", "Traefik", "CI/CD", "Bash"],
    link: "https://github.com/ideilsondev",
    github: "https://github.com/ideilsondev",
  },
  {
    id: 3,
    title: "Dashboard SaaS Analytics",
    description: "Frontend imersivo construído em Next.js com componentes interativos complexos.",
    tech: ["Next.js", "TailwindCSS", "Framer Motion", "Recharts"],
    link: "https://github.com/ideilsondev",
    github: "https://github.com/ideilsondev",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Projetos em Destaque</h2>
          <p className="text-zinc-400 max-w-2xl text-lg">
            Uma seleção do meu trabalho mais recente focado em engenharia de plataforma e interfaces escaláveis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col justify-between h-full p-6 rounded-2xl border border-white/5 bg-zinc-900/30 hover:bg-zinc-800/50 transition-all hover:border-white/10"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <div className="flex gap-3">
                    <Link href={project.github} target="_blank" className="text-zinc-500 hover:text-white transition-colors">
                      <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.6 5 2 5 2a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 3 9.6c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path></svg>
                    </Link>
                    <Link href={project.link} target="_blank" className="text-zinc-500 hover:text-indigo-400 transition-colors">
                      <ArrowUpRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
                <Link href={project.link} target="_blank" className="block">
                  <h3 className="text-xl font-bold text-zinc-100 mb-3 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </Link>
              </div>
              <ul className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <li key={tech} className="text-xs font-medium text-zinc-500">
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
