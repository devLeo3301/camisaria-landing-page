"use client";

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Scissors, Ruler, Droplets, ArrowRight } from 'lucide-react';

export default function Home() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <main className="overflow-x-hidden selection:bg-accent/30">
      
      {/* Hero */}
      <section className="relative min-h-[100svh] flex items-center justify-center pt-24 px-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-background/40 z-10" />
          <Image 
            src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=2000"
            alt="Nova Coleção"
            fill
            quality={100}
            className="object-cover object-top opacity-90"
            priority
          />
        </div>

        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={fadeUp} 
          className="relative z-20 text-center max-w-4xl mx-auto flex flex-col items-center mt-12 md:mt-0"
        >
          <span className="uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold text-accent mb-4 md:mb-6">
            Nova Coleção
          </span>
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-[5.5rem] text-primary font-medium leading-[1.05] mb-6 md:mb-8">
            A essência do <br className="hidden sm:block" /> caimento perfeito.
          </h1>
          <Link 
            href="/shop" 
            className="group flex items-center gap-3 bg-primary text-background px-8 py-4 md:px-10 md:py-5 uppercase tracking-widest text-xs md:text-sm hover:bg-accent transition-all duration-300"
          >
            Comprar Agora
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>

      {/* Produtos */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 md:mb-12 gap-4">
          <h2 className="font-heading text-3xl md:text-4xl text-primary">Best Sellers</h2>
          <Link 
            href="/shop" 
            className="inline-flex items-center gap-2 text-xs md:text-sm uppercase tracking-widest font-bold text-accent hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-0.5"
          >
            Ver tudo <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            { img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800", name: "Camisa Oxford Branca", price: "R$ 490,00" },
            { img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800", name: "Camisa Linho Areia", price: "R$ 550,00" },
            { img: "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=800", name: "Camisa Algodão Fio 120", price: "R$ 620,00" }
          ].map((item, index) => (
            <Link href={`/product/${index + 1}`} key={index} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden bg-surface mb-4 md:mb-6">
                <Image 
                  src={item.img} 
                  alt={item.name} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              <h3 className="font-heading text-lg md:text-xl text-primary mb-1 md:mb-2 group-hover:text-accent transition-colors">
                {item.name}
              </h3>
              <p className="text-sm md:text-base text-foreground/70">{item.price}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Diferenciais */}
      <section className="bg-surface py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-50px" }} 
            variants={staggerContainer} 
            className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20"
          >
            <motion.div variants={fadeUp} className="flex flex-col items-center text-center">
              <Droplets size={28} strokeWidth={1.5} className="mb-5 md:mb-6 text-accent" />
              <h3 className="font-heading text-xl md:text-2xl text-primary mb-3 md:mb-4">Algodão Egípcio</h3>
              <p className="text-sm md:text-base text-foreground/70 font-light leading-relaxed">Fibras importadas que garantem durabilidade, toque sedoso e respirabilidade.</p>
            </motion.div>
            
            <motion.div variants={fadeUp} className="flex flex-col items-center text-center">
              <Scissors size={28} strokeWidth={1.5} className="mb-5 md:mb-6 text-accent" />
              <h3 className="font-heading text-xl md:text-2xl text-primary mb-3 md:mb-4">Costura Inglesa</h3>
              <p className="text-sm md:text-base text-foreground/70 font-light leading-relaxed">Acabamento interno impecável com 7 a 9 pontos por centímetro. Nenhuma aresta visível.</p>
            </motion.div>
            
            <motion.div variants={fadeUp} className="flex flex-col items-center text-center">
              <Ruler size={28} strokeWidth={1.5} className="mb-5 md:mb-6 text-accent" />
              <h3 className="font-heading text-xl md:text-2xl text-primary mb-3 md:mb-4">Modelagem Slim</h3>
              <p className="text-sm md:text-base text-foreground/70 font-light leading-relaxed">Desenhada para valorizar a silhueta. O balanço perfeito entre o moderno e o tradicional.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}