"use client";

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { useState, use } from 'react';
import { Star, ShieldCheck, Truck, RefreshCw, Minus, Plus, ShoppingBag } from 'lucide-react';

// Simulando o banco de dados (deve ser o mesmo da página Shop)
const products = [
  { id: 1, name: "Camisa Oxford Branca", price: "R$ 490,00", category: "Clássicos", description: "Nossa interpretação da peça mais essencial do guarda-roupa masculino. Corte impecável em algodão Oxford de alta gramatura.", img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1200" },
  { id: 2, name: "Camisa Linho Areia", price: "R$ 550,00", category: "Linho", description: "Leveza e sofisticação para dias quentes. Tecido respirável com textura natural característica do linho puro.", img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1200" },
  { id: 3, name: "Camisa Algodão Fio 120", price: "R$ 620,00", category: "Premium", description: "O ápice do conforto. Tecido fio 120 que proporciona um toque acetinado e brilho discreto e elegante.", img: "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=1200" },
];

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  // Desembrulhando o ID da URL
  const { id } = use(params);
  const product = products.find(p => p.id === Number(id)) || products[0];

  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const sizes = ['P', 'M', 'G', 'GG'];

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const handleAddToBag = () => {
    setIsAdding(true);
    setTimeout(() => {
      setIsAdding(false);
      alert(`${product.name} (Tamanho ${selectedSize}) adicionado à sacola.`);
    }, 1000);
  };

  return (
    <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        
        {/* ================= GALERIA DE IMAGENS ================= */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="relative aspect-[3/4] bg-surface overflow-hidden">
          <Image 
            src={product.img} 
            alt={product.name} 
            fill 
            className="object-cover" 
            priority
          />
        </motion.div>

        {/* ================= INFORMAÇÕES DO PRODUTO ================= */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="flex flex-col">
          <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-accent mb-4">
            {product.category} / Velluto Signature
          </span>
          
          <h1 className="font-heading text-4xl md:text-5xl text-primary mb-4">
            {product.name}
          </h1>
          
          <div className="flex items-center gap-4 mb-8">
            <span className="text-2xl text-primary font-light">{product.price}</span>
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

          <p className="text-foreground/70 leading-relaxed mb-10 font-light italic">
            "{product.description}"
          </p>

          {/* Seleção de Tamanho */}
          <div className="mb-10">
            <div className="flex justify-between mb-4">
              <span className="text-xs uppercase tracking-widest font-bold">Tamanho: {selectedSize}</span>
              <button className="text-[10px] uppercase tracking-widest font-bold text-accent border-b border-accent/30">Guia de Medidas</button>
            </div>
            <div className="flex gap-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 flex items-center justify-center text-xs font-bold transition-all border ${
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

          {/* Quantidade e Compra */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <div className="flex items-center border border-foreground/10 h-14 px-4 gap-8 justify-between sm:justify-start">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-primary hover:text-accent"><Minus size={16}/></button>
              <span className="font-bold text-sm w-4 text-center">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="text-primary hover:text-accent"><Plus size={16}/></button>
            </div>
            
            <button 
              onClick={handleAddToBag}
              disabled={isAdding}
              className="flex-grow bg-primary text-background h-14 uppercase tracking-widest text-xs font-bold flex items-center justify-center gap-3 hover:bg-accent transition-all duration-500 disabled:opacity-50"
            >
              {isAdding ? "Processando..." : (
                <><ShoppingBag size={18} strokeWidth={1.5} /> Adicionar à Sacola</>
              )}
            </button>
          </div>

          {/* Benefícios Rápidos */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-foreground/5">
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2">
              <Truck size={20} className="text-accent" strokeWidth={1} />
              <span className="text-[10px] uppercase font-bold tracking-widest">Entrega Expressa</span>
            </div>
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2">
              <RefreshCw size={20} className="text-accent" strokeWidth={1} />
              <span className="text-[10px] uppercase font-bold tracking-widest">Troca Grátis</span>
            </div>
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2">
              <ShieldCheck size={20} className="text-accent" strokeWidth={1} />
              <span className="text-[10px] uppercase font-bold tracking-widest">Pagamento Seguro</span>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}