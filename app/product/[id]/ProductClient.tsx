"use client";

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { Star, ShieldCheck, Truck, RefreshCw, Minus, Plus, ShoppingBag } from 'lucide-react';

// Tipagem do produto que ele vai receber do servidor
interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  description: string;
  img: string;
}

export default function ProductClient({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const sizes = ['P', 'M', 'G', 'GG'];

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const handleAddToBag = () => {
    setIsAdding(true);
    setTimeout(() => {
      setIsAdding(false);
      alert(`${product.name} (Tamanho ${selectedSize}) adicionado à sacola.`);
    }, 1000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={fadeUp} 
        className="relative aspect-[4/5] sm:aspect-[3/4] bg-surface overflow-hidden"
      >
        <Image src={product.img} alt={product.name} fill className="object-cover" priority />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeUp} className="flex flex-col">
        <span className="uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] font-bold text-accent mb-3 md:mb-4">
          {product.category} / Velluto Signature
        </span>
        
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl text-primary mb-3 md:mb-4 leading-tight">
          {product.name}
        </h1>
        
        <div className="flex items-center gap-4 mb-6 md:mb-8">
          <span className="text-xl md:text-2xl text-primary font-light">{product.price}</span>
          <div className="h-4 w-px bg-foreground/20" />
          <div className="flex items-center gap-1 text-accent">
            <Star size={14} fill="currentColor" />
            <Star size={14} fill="currentColor" />
            <Star size={14} fill="currentColor" />
            <Star size={14} fill="currentColor" />
            <Star size={14} fill="currentColor" />
            <span className="text-[10px] text-foreground/50 ml-1 font-bold">(24 Avaliações)</span>
          </div>
        </div>

        <p className="text-sm md:text-base text-foreground/70 leading-relaxed mb-8 md:mb-10 font-light italic">
          "{product.description}"
        </p>

        <div className="mb-8 md:mb-10">
          <div className="flex justify-between mb-4 items-end">
            <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-primary">Tamanho: {selectedSize}</span>
            <button className="text-[10px] uppercase tracking-widest font-bold text-accent border-b border-accent/30 pb-0.5 hover:text-primary transition-colors">
              Guia de Medidas
            </button>
          </div>
          <div className="flex gap-2 sm:gap-3">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-[10px] sm:text-xs font-bold transition-all border ${
                  selectedSize === size 
                    ? "bg-primary text-background border-primary" 
                    : "border-foreground/10 hover:border-primary text-primary"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-10 md:mb-12">
          <div className="flex items-center border border-foreground/10 h-12 md:h-14 px-4 gap-6 sm:gap-8 justify-between sm:justify-start">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-primary hover:text-accent"><Minus size={16}/></button>
            <span className="font-bold text-sm w-4 text-center text-primary">{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)} className="text-primary hover:text-accent"><Plus size={16}/></button>
          </div>
          
          <button 
            onClick={handleAddToBag}
            disabled={isAdding}
            className="flex-grow bg-primary text-background h-12 md:h-14 uppercase tracking-widest text-[10px] sm:text-xs font-bold flex items-center justify-center gap-3 hover:bg-accent transition-all duration-500 disabled:opacity-50"
          >
            {isAdding ? "Processando..." : (
              <><ShoppingBag size={16} strokeWidth={1.5} className="sm:w-5 sm:h-5" /> Adicionar à Sacola</>
            )}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-foreground/5">
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2">
            <Truck size={18} className="text-accent" strokeWidth={1.5} />
            <span className="text-[9px] md:text-[10px] uppercase font-bold tracking-widest text-primary">Entrega Expressa</span>
          </div>
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2">
            <RefreshCw size={18} className="text-accent" strokeWidth={1.5} />
            <span className="text-[9px] md:text-[10px] uppercase font-bold tracking-widest text-primary">Troca Grátis</span>
          </div>
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2">
            <ShieldCheck size={18} className="text-accent" strokeWidth={1.5} />
            <span className="text-[9px] md:text-[10px] uppercase font-bold tracking-widest text-primary">Pagamento Seguro</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}