"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Minus, Plus, X, ArrowRight, Lock } from 'lucide-react';

// Simulando itens que o usuário já adicionou ao carrinho
const initialCart = [
  { 
    id: 1, 
    name: "Camisa Oxford Branca", 
    size: "M", 
    price: 490, 
    quantity: 1, 
    img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800" 
  },
  { 
    id: 2, 
    name: "Camisa Linho Areia", 
    size: "G", 
    price: 550, 
    quantity: 2, 
    img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800" 
  }
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCart);
  const [isProcessing, setIsProcessing] = useState(false);

  // Lógica do Carrinho
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items => 
      items.map(item => item.id === id ? { ...item, quantity: newQuantity } : item)
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  // Cálculos Financeiros
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = subtotal > 1000 ? 0 : 45; // Frete grátis acima de R$ 1.000
  const total = subtotal + shipping;

  const handleCheckout = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      alert("✅ Ambiente de Portfólio: Redirecionamento para o Checkout Seguro (Stripe/MercadoPago).");
    }, 1500);
  };

  if (cartItems.length === 0) {
    return (
      <main className="pt-40 pb-24 px-6 max-w-3xl mx-auto min-h-screen text-center flex flex-col items-center">
        <h1 className="font-heading text-4xl text-primary mb-6">Sua sacola está vazia</h1>
        <p className="text-foreground/70 mb-10">Parece que você ainda não escolheu suas peças exclusivas.</p>
        <Link href="/shop" className="bg-primary text-background px-10 py-4 uppercase tracking-widest text-xs font-bold hover:bg-accent transition-colors">
          Explorar a Coleção
        </Link>
      </main>
    );
  }

  return (
    <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        
        <h1 className="font-heading text-4xl md:text-5xl text-primary mb-12">Sua Sacola</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* ================= LISTA DE ITENS ================= */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="hidden sm:grid grid-cols-12 text-[10px] uppercase tracking-widest font-bold text-foreground/50 border-b border-foreground/10 pb-4">
              <div className="col-span-6">Produto</div>
              <div className="col-span-3 text-center">Quantidade</div>
              <div className="col-span-3 text-right">Total</div>
            </div>

            {cartItems.map((item) => (
              <div key={item.id} className="grid grid-cols-1 sm:grid-cols-12 items-center gap-6 sm:gap-4 border-b border-foreground/5 pb-8">
                
                {/* Produto Info */}
                <div className="col-span-6 flex gap-6 items-center">
                  <div className="relative w-24 h-32 bg-surface flex-shrink-0">
                    <Image src={item.img} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-heading text-lg text-primary mb-1">{item.name}</h3>
                    <p className="text-xs uppercase tracking-widest text-foreground/50 mb-3">Tamanho: {item.size}</p>
                    <button onClick={() => removeItem(item.id)} className="text-[10px] uppercase tracking-widest font-bold text-accent flex items-center gap-1 w-fit hover:text-primary transition-colors">
                      <X size={12} /> Remover
                    </button>
                  </div>
                </div>

                {/* Quantidade */}
                <div className="col-span-3 flex justify-start sm:justify-center">
                  <div className="flex items-center border border-foreground/10 h-10 px-3 gap-4">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="text-primary hover:text-accent"><Minus size={14}/></button>
                    <span className="font-bold text-xs w-4 text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="text-primary hover:text-accent"><Plus size={14}/></button>
                  </div>
                </div>

                {/* Preço Total do Item */}
                <div className="col-span-3 flex justify-start sm:justify-end text-lg text-primary font-light">
                  R$ {(item.price * item.quantity).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </div>

              </div>
            ))}
          </div>

          {/* ================= RESUMO DO PEDIDO ================= */}
          <div className="lg:col-span-5">
            <div className="bg-surface p-8 md:p-10 sticky top-32">
              <h2 className="font-heading text-2xl text-primary mb-8">Resumo do Pedido</h2>
              
              <div className="flex flex-col gap-4 text-sm text-foreground/80 border-b border-foreground/10 pb-6 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>R$ {subtotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between">
                  <span>Frete Expresso</span>
                  <span>{shipping === 0 ? "Grátis" : `R$ ${shipping.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-8">
                <span className="uppercase tracking-widest text-xs font-bold">Total</span>
                <span className="font-heading text-3xl text-primary">R$ {total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
              </div>

              <button 
                onClick={handleCheckout}
                disabled={isProcessing}
                className="w-full bg-primary text-background h-14 flex items-center justify-center gap-3 uppercase tracking-widest text-xs font-bold hover:bg-accent transition-colors disabled:opacity-50 mb-6"
              >
                {isProcessing ? "Redirecionando..." : (
                  <>Finalizar Compra <ArrowRight size={16} /></>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest font-bold text-foreground/50">
                <Lock size={12} /> Checkout 100% Seguro
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </main>
  );
}