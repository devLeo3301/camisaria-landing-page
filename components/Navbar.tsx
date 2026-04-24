"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Loja', href: '/shop' },
  { name: 'Coleções', href: '/colecoes' },
  { name: 'A Marca', href: '/sobre' }
];

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearchOpen(false);
      setIsMobileMenuOpen(false);
      router.push('/shop'); 
    }
  };

  // Bloqueia o scroll da página quando o menu mobile está aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-foreground/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-primary hover:text-accent transition-colors z-50"
          >
            {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>

          <Link 
            href="/" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-heading text-2xl font-black tracking-tight text-primary absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
          >
            Velluto.
          </Link>
          
          <nav className="hidden md:flex gap-10 text-sm font-medium tracking-wide uppercase text-foreground/70">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-primary transition-colors">
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5 md:gap-6 text-primary">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="hover:text-accent transition-colors hidden md:block"
            >
              {isSearchOpen ? <X size={20} strokeWidth={1.5} /> : <Search size={20} strokeWidth={1.5} />}
            </button>

            <Link href="/cart" className="hover:text-accent transition-colors relative">
              <ShoppingBag size={20} strokeWidth={1.5} />
              <span className="absolute -top-1.5 -right-2 bg-accent text-background text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                2
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Menu Mobile Fullscreen */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100dvh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.7, 0, 0.3, 1] }}
            className="fixed top-20 left-0 w-full bg-background z-40 overflow-hidden md:hidden border-t border-foreground/5"
          >
            <div className="flex flex-col px-6 pt-8 gap-10 h-full">
              
              <form onSubmit={handleSearch} className="flex items-center gap-3 border-b border-foreground/10 pb-3">
                <Search size={20} className="text-foreground/40" strokeWidth={1.5} />
                <input 
                  type="text" 
                  placeholder="Procurar peças..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent w-full text-base outline-none text-primary placeholder:text-foreground/40"
                />
              </form>

              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-heading text-4xl text-primary hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="mt-auto pb-32">
                <div className="flex flex-col gap-4 text-xs uppercase tracking-widest text-foreground/50 font-bold">
                  <Link href="/contacto" onClick={() => setIsMobileMenuOpen(false)}>Atendimento</Link>
                  <Link href="#" onClick={() => setIsMobileMenuOpen(false)}>Minha Conta</Link>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Barra de Busca Desktop */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-20 w-full z-40 bg-background border-b border-foreground/5 shadow-sm hidden md:block"
          >
            <form onSubmit={handleSearch} className="max-w-7xl mx-auto px-6 py-8 flex items-center gap-4">
              <Search size={24} className="text-foreground/30" strokeWidth={1.5} />
              <input 
                type="text" 
                placeholder="O que procura? Ex: Camisa Linho"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full bg-transparent text-2xl font-light outline-none placeholder:text-foreground/30 text-primary"
              />
              <button 
                type="submit" 
                className="text-xs uppercase tracking-widest font-bold text-background bg-primary px-6 py-3 hover:bg-accent transition-colors"
              >
                Buscar
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}