"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Vamos Conversar?</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Aberto para novas oportunidades, projetos desafiadores e parcerias.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-orange-500/10"
        >
          {/* Using intrinsic aspect ratio for the banner (16:9) */}
          <div className="relative aspect-video w-full">
            <Image
              src="/banner_contatos.png"
              alt="Contatos Ideilson"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
