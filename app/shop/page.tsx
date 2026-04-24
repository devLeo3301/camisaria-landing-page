"use client";

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const products = [
  { id: 1, name: "Camisa Oxford Branca", price: "R$ 490,00", category: "Clássicos", img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800" },
  { id: 2, name: "Camisa Linho Areia", price: "R$ 550,00", category: "Linho", img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800" },
  { id: 3, name: "Camisa Algodão Fio 120", price: "R$ 620,00", category: "Premium", img: "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=800" },
  { id: 4, name: "Camisa Listrada Sartorial", price: "R$ 510,00", category: "Clássicos", img: "https://images.unsplash.com/photo-1593998066526-65fcab3021a2?q=80&w=800" },
  { id: 5, name: "Polo em Tricot Marinho", price: "R$ 380,00", category: "Casuais", img: "https://images.unsplash.com/photo-1626497764746-6dc36546b388?q=80&w=800" },
  { id: 6, name: "Sobretudo Lã Fria", price: "R$ 1.890,00", category: "Inverno", img: "https://images.unsplash.com/photo-1559582730-128aa18e9508?q=80&w=800" },
];

export default function ShopPage() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const filters = ["Todos", "Clássicos", "Linho", "Premium", "Casuais", "Inverno"];

  const filteredProducts = activeFilter === "Todos" 
    ? products 
    : products.filter(p => p.category === activeFilter);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <main className="pt-24 md:pt-32 pb-16 md:pb-24 px-6 max-w-7xl mx-auto min-h-[100svh]">
      
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={fadeUp} 
        className="flex flex-col items-center text-center mb-10 md:mb-16"
      >
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-primary mb-4 md:mb-6">
          A Coleção
        </h1>
        <p className="text-sm md:text-base text-foreground/70 max-w-2xl font-light px-4">
          Descubra a nossa seleção de peças atemporais. Desenhadas em Milão, cortadas com precisão e feitas para durar gerações.
        </p>
      </motion.div>

      {/* Filtros em formato Swipe horizontal para mobile, e lista normal no desktop */}
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={fadeUp} 
        className="relative mb-10 md:mb-14"
      >
        <div className="flex items-center gap-6 md:gap-8 overflow-x-auto pb-4 md:pb-0 md:border-y border-foreground/10 md:py-6 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {filters.map((filter) => (
            <button 
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`snap-start whitespace-nowrap uppercase tracking-widest text-[10px] md:text-xs font-bold transition-all ${
                activeFilter === filter 
                  ? "text-primary border-b border-primary pb-1" 
                  : "text-foreground/40 hover:text-primary"
              }`}
            >
              {filter}
            </button>
          ))}
          
          <div className="hidden md:block ml-auto text-[10px] uppercase tracking-widest text-foreground/40 font-bold">
            {filteredProducts.length} peças
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-8 gap-y-12 md:gap-y-16">
        {filteredProducts.map((product, index) => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <Link href={`/product/${product.id}`} className="group block">
              <div className="relative aspect-[3/4] overflow-hidden bg-surface mb-4 md:mb-6">
                <div className="absolute top-3 left-3 md:top-4 md:left-4 z-10 bg-background/90 backdrop-blur-sm px-2 md:px-3 py-1 text-[9px] md:text-[10px] uppercase tracking-widest text-primary font-bold">
                  {product.category}
                </div>
                
                <Image 
                  src={product.img} 
                  alt={product.name} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
                
                {/* Overlay visível apenas em ecrãs grandes (hover) */}
                <div className="hidden lg:flex absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-end justify-center pb-8">
                  <div className="bg-background text-primary px-8 py-3 text-xs uppercase tracking-widest font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Explorar Peça
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col">
                <h3 className="font-heading text-lg md:text-xl text-primary mb-1 md:mb-2 group-hover:text-accent transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm md:text-base text-foreground/70 font-light">
                  {product.price}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20 text-foreground/50 font-light">
          Nenhuma peça encontrada nesta categoria.
        </div>
      )}
    </main>
  );
}