import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-zinc-950">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      
      <footer className="py-8 border-t border-white/5 mt-auto">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Ideilson. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-zinc-500">
            <span>Built with Next.js & Tailwind CSS v4</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
