"use client";

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Ruler, Scissors, Droplets } from 'lucide-react';

export default function AboutPage() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-0 overflow-x-hidden bg-background">
      
      <section className="max-w-4xl mx-auto px-6 text-center mb-16 md:mb-24 mt-8 md:mt-0">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <span className="uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-xs font-bold text-accent mb-4 md:mb-6 block">
            A Casa Velluto
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary font-medium leading-[1.1] mb-6 md:mb-8">
            Não fazemos roupas.<br className="hidden sm:block" /> Nós esculpimos o tecido.
          </h1>
          <p className="text-base md:text-lg text-foreground/70 font-light max-w-2xl mx-auto leading-relaxed px-2">
            Nascida da obsessão pelo caimento perfeito, a Velluto redefine o que significa vestir uma camisa clássica. Sem atalhos de produção, sem tecidos sintéticos. Apenas a alfaiataria na sua forma mais pura.
          </p>
        </motion.div>
      </section>

      <motion.section 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 1 }} 
        viewport={{ once: true }}
        className="w-full h-[50svh] md:h-[70vh] relative mb-20 md:mb-32"
      >
        <Image 
          src="https://images.unsplash.com/photo-1550614000-4b95d4ed7963?q=80&w=2000" 
          alt="Atelier de alfaiataria" 
          fill 
          className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000"
        />
      </motion.section>

      <section className="max-w-7xl mx-auto px-6 mb-20 md:mb-32">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-24 items-center mb-24 md:mb-32">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-50px" }} 
            variants={fadeUp} 
            className="order-2 md:order-1"
          >
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-primary mb-4 md:mb-6">
              Algodão que respira.
            </h2>
            <p className="text-sm md:text-base text-foreground/70 font-light leading-relaxed mb-4 md:mb-6">
              Nossa jornada começa nas margens do Rio Nilo. Selecionamos exclusivamente o algodão egípcio de fibras extra-longas (Giza 87 e Giza 45). Essa escolha rigorosa permite fiar fios incrivelmente finos e resistentes.
            </p>
            <p className="text-sm md:text-base text-foreground/70 font-light leading-relaxed">
              O resultado? Uma camisa que pesa quase nada sobre os ombros, mas que mantém sua estrutura impecável do primeiro café da manhã ao último brinde da noite.
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-50px" }} 
            variants={fadeUp} 
            className="order-1 md:order-2 relative aspect-[4/5] bg-surface"
          >
            <Image 
              src="https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=1000" 
              alt="Detalhe do fio de algodão" 
              fill 
              className="object-cover" 
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-24 items-center">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-50px" }} 
            variants={fadeUp} 
            className="relative aspect-[4/5] bg-surface"
          >
            <Image 
              src="https://images.unsplash.com/photo-1593998066526-65fcab3021a2?q=80&w=1000" 
              alt="Costura inglesa detalhe" 
              fill 
              className="object-cover" 
            />
          </motion.div>
          
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-50px" }} 
            variants={fadeUp}
          >
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-primary mb-4 md:mb-6">
              Precisão Cirúrgica.
            </h2>
            <p className="text-sm md:text-base text-foreground/70 font-light leading-relaxed mb-4 md:mb-6">
              A verdadeira qualidade se esconde onde ninguém vê. Utilizamos a tradicional Costura Inglesa (French Seam) em todas as junções. Isso significa que as arestas do tecido ficam duplamente envelopadas.
            </p>
            <p className="text-sm md:text-base text-foreground/70 font-light leading-relaxed mb-8">
              É um processo que exige 3 vezes mais tempo que a confecção industrial padrão, mas que garante costuras que não desfiam e um conforto absoluto em contato com a pele.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6 md:pt-8 border-t border-foreground/10">
              <div>
                {/* Correção: Usando w-5 h-5 (20px) para mobile e md:w-6 md:h-6 (24px) para desktop */}
                <Scissors className="text-accent mb-2 w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
                <span className="block text-xs md:text-sm font-bold text-primary">Corte a Laser</span>
              </div>
              <div>
                <Ruler className="text-accent mb-2 w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
                <span className="block text-xs md:text-sm font-bold text-primary">Medidas Áureas</span>
              </div>
            </div>
          </motion.div>
        </div>

      </section>

      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={fadeUp}
        className="bg-primary text-background py-24 md:py-32 px-6 text-center"
      >
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          {/* Correção: Usando w-8 h-8 (32px) para mobile e md:w-10 md:h-10 (40px) para desktop */}
          <Droplets className="text-accent mb-6 md:mb-8 w-8 h-8 md:w-10 md:h-10" strokeWidth={1} />
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-6 md:mb-8">
            Experimente a diferença.
          </h2>
          <p className="text-sm md:text-base text-background/70 font-light mb-10 md:mb-12 leading-relaxed px-4">
            Eleve seu guarda-roupa com peças que desafiam a passagem do tempo. Adquira online com frete expresso ou agende uma visita ao nosso atelier para um atendimento sob medida.
          </p>
          <Link 
            href="/shop" 
            className="w-full sm:w-auto bg-background text-primary px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-accent hover:text-background transition-colors flex items-center justify-center gap-2"
          >
            Explorar Coleção <ArrowRight size={16} />
          </Link>
        </div>
      </motion.section>

    </main>
  );
}