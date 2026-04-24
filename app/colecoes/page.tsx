"use client";

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const collections = [
  {
    id: "essence",
    title: "Essence Branca",
    season: "Atemporal",
    description: "A tela em branco do cavalheiro moderno. Nossa linha Signature foca na pureza do algodão egípcio, cortes imaculados e na versatilidade absoluta da camisa branca perfeita.",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1200",
  },
  {
    id: "riviera",
    title: "Riviera de Linho",
    season: "Primavera / Verão",
    description: "Inspirada nas tardes quentes no Mediterrâneo. Fibras naturais que respiram com você, oferecendo uma elegância despojada que amassa com charme e personalidade.",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1200",
  },
  {
    id: "noir",
    title: "Sartorial Noir",
    season: "Outono / Inverno",
    description: "A força incontestável dos tons escuros. Peças estruturadas, tecidos densos e uma presença marcante para o homem que não precisa pedir permissão para ser notado.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200",
  }
];

export default function CollectionsPage() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <main className="min-h-screen pt-32 pb-24 bg-background overflow-x-hidden">
      
      {/* ================= HERO DAS COLEÇÕES ================= */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-24 md:mb-32">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <span className="uppercase tracking-[0.4em] text-xs font-bold text-accent mb-6 block">
            Lookbook
          </span>
          <h1 className="font-heading text-5xl md:text-7xl text-primary font-medium leading-[1.1] mb-8">
            Onde o tempo não <br className="hidden md:block" /> dita as regras.
          </h1>
          <p className="text-lg text-foreground/70 font-light max-w-2xl mx-auto leading-relaxed">
            Explore nossas narrativas de estilo. Cada coleção é pensada não para seguir tendências passageiras, mas para construir um guarda-roupa que envelhece com maestria.
          </p>
        </motion.div>
      </section>

      {/* ================= GRID EDITORIAL (Ziguezague) ================= */}
      <section className="max-w-7xl mx-auto px-6 flex flex-col gap-32 md:gap-40">
        {collections.map((collection, index) => {
          // Lógica para alternar a imagem da esquerda para a direita
          const isEven = index % 2 === 0;

          return (
            <div key={collection.id} className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
              
              {/* IMAGEM */}
              <motion.div 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-100px" }} 
                variants={fadeUp} 
                className={`md:col-span-7 relative aspect-[4/5] md:aspect-[3/4] bg-surface overflow-hidden group ${isEven ? 'md:order-1' : 'md:order-2'}`}
              >
                <Image 
                  src={collection.image} 
                  alt={collection.title} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </motion.div>

              {/* TEXTO */}
              <motion.div 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-100px" }} 
                variants={fadeUp} 
                className={`md:col-span-5 flex flex-col ${isEven ? 'md:order-2 md:pl-10' : 'md:order-1 md:pr-10'}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-px bg-accent" />
                  <span className="uppercase tracking-widest text-[10px] font-bold text-accent">
                    {collection.season}
                  </span>
                </div>
                
                <h2 className="font-heading text-4xl md:text-5xl text-primary mb-6">
                  {collection.title}
                </h2>
                
                <p className="text-foreground/70 font-light leading-relaxed mb-10 text-lg">
                  {collection.description}
                </p>

                <Link 
                  href="/shop" 
                  className="group inline-flex items-center gap-3 text-xs uppercase tracking-widest font-bold text-primary hover:text-accent transition-colors w-fit border-b border-primary hover:border-accent pb-1"
                >
                  Descobrir a Coleção 
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              
            </div>
          );
        })}
      </section>

      {/* ================= RODAPÉ DE TRANSIÇÃO ================= */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        className="max-w-4xl mx-auto px-6 text-center mt-40 border-t border-foreground/5 pt-20"
      >
        <h3 className="font-heading text-3xl text-primary mb-6">Pronto para elevar seu estilo?</h3>
        <Link href="/shop" className="bg-primary text-background px-10 py-5 uppercase tracking-widest text-xs font-bold hover:bg-accent transition-colors inline-block">
          Acessar a Loja Completa
        </Link>
      </motion.section>

    </main>
  );
}