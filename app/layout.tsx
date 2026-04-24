import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Configurando a fonte Sans-serif (limpa e moderna para textos)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Configurando a fonte Serifada (elegante e clássica para títulos)
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

// Metadados para SEO e compartilhamento nas redes sociais
export const metadata: Metadata = {
  title: "Velluto. | Alfaiataria Premium",
  description: "Alfaiataria contemporânea para o homem que compreende o valor do silêncio bem vestido. Camisas em algodão egípcio fio 120.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="pt-BR" 
      // Injetando as variáveis de fonte no HTML
      className={`${inter.variable} ${playfair.variable} scroll-smooth`}
    >
      <body className="antialiased min-h-screen flex flex-col bg-background text-foreground">
        {/* Menu Global */}
        <Navbar />
        
        {/* Onde as páginas (Home, Shop, etc) serão renderizadas */}
        <div className="flex-grow">
          {children}
        </div>
        
        {/* Rodapé Global */}
        <Footer />
      </body>
    </html>
  );
}