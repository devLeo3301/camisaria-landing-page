import ProductClient from './ProductClient';

const products = [
  { id: 1, name: "Camisa Oxford Branca", price: "R$ 490,00", category: "Clássicos", description: "Nossa interpretação da peça mais essencial do guarda-roupa masculino. Corte impecável em algodão Oxford de alta gramatura.", img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1200" },
  { id: 2, name: "Camisa Linho Areia", price: "R$ 550,00", category: "Linho", description: "Leveza e sofisticação para dias quentes. Tecido respirável com textura natural característica do linho puro.", img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1200" },
  { id: 3, name: "Camisa Algodão Fio 120", price: "R$ 620,00", category: "Premium", description: "O ápice do conforto. Tecido fio 120 que proporciona um toque acetinado e brilho discreto e elegante.", img: "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=1200" },
  { id: 4, name: "Camisa Listrada Sartorial", price: "R$ 510,00", category: "Clássicos", description: "As listras finas alongam a silhueta, trazendo um ar de negócios sem perder a elegância casual.", img: "https://images.unsplash.com/photo-1593998066526-65fcab3021a2?q=80&w=1200" },
  { id: 5, name: "Polo em Tricot Marinho", price: "R$ 380,00", category: "Casuais", description: "A evolução da camisa polo. Feita em tricot leve, ajusta-se perfeitamente ao corpo para os finais de semana.", img: "https://images.unsplash.com/photo-1626497764746-6dc36546b388?q=80&w=1200" },
  { id: 6, name: "Sobretudo Lã Fria", price: "R$ 1.890,00", category: "Inverno", description: "Proteção contra o frio com o peso mínimo. Lã fria importada estruturada para ser vestida sobre as nossas camisas.", img: "https://images.unsplash.com/photo-1559582730-128aa18e9508?q=80&w=1200" },
];

export function generateStaticParams() {
  return products.map((product) => ({
    id: String(product.id),
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  
  const product = products.find(p => p.id === Number(resolvedParams.id)) || products[0];

  return (
    <main className="pt-24 md:pt-32 pb-16 md:pb-24 px-6 max-w-7xl mx-auto min-h-[100svh]">
      {/* Passamos o produto encontrado para o Client Component renderizar e lidar com os cliques */}
      <ProductClient product={product} />
    </main>
  );
}