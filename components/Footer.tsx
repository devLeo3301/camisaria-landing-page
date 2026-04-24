import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-background py-20 px-6 border-t border-accent/20 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <h2 className="font-heading text-4xl mb-6">Velluto.</h2>
          <p className="text-background/60 font-light max-w-sm mb-8">
            Alfaiataria contemporânea para o homem que compreende o valor do silêncio bem vestido.
          </p>
          <div className="flex border-b border-background/30 pb-2 max-w-sm">
            <input type="email" placeholder="Assine nossa Newsletter" className="bg-transparent outline-none text-sm w-full placeholder:text-background/40" />
            <button><ArrowRight size={18} className="text-accent" /></button>
          </div>
        </div>
        
        <div className="flex flex-col gap-4">
          <h4 className="uppercase tracking-widest text-xs font-bold text-accent mb-2">Suporte</h4>
          <a href="#" className="text-sm text-background/70 hover:text-white transition-colors">Trocas e Devoluções</a>
          <a href="#" className="text-sm text-background/70 hover:text-white transition-colors">Guia de Medidas</a>
          <a href="#" className="text-sm text-background/70 hover:text-white transition-colors">Rastreie seu Pedido</a>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="uppercase tracking-widest text-xs font-bold text-accent mb-2">Institucional</h4>
          <a href="#" className="text-sm text-background/70 hover:text-white transition-colors">Sobre a Velluto</a>
          <a href="#" className="text-sm text-background/70 hover:text-white transition-colors">Lojas Físicas</a>
          <a href="#" className="text-sm text-background/70 hover:text-white transition-colors">Contato</a>
        </div>
      </div>
    </footer>
  );
}