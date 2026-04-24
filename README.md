# Velluto. | Alfaiataria Premium E-commerce

<p align="center">
  <img src="./public/desktop-preview.png" alt="Capa Velluto" width="100%">
</p>

> Uma simulação de e-commerce high-end focada em alfaiataria clássica, priorizando a estética "Quiet Luxury" e performance extrema.

---

## 📖 Sobre
O **Velluto** foi construído para romper com o design engessado das lojas virtuais tradicionais. O objetivo foi criar uma experiência de compra imersiva, onde a tipografia fluida e as interações suaves guiam o usuário, transmitindo a exclusividade de uma alfaiataria física no ambiente digital.

---

## 🛠 Tecnologias
Ferramentas selecionadas para garantir um ambiente escalável e de carregamento instantâneo:
* **Framework:** Next.js (App Router)
* **Linguagem:** TypeScript
* **Estilização:** Tailwind CSS v4 (Design System customizado)
* **Animações:** Framer Motion (Física de menus e transições de página)
* **Ícones:** Lucide React

---

## 🖥️ Arquitetura Desktop
No desktop, a prioridade foi o aproveitamento de espaço para exibir a alta fidelidade dos tecidos. Utilizei um sistema de roteamento dinâmico (`/product/[id]`) para renderizar páginas de detalhes de forma escalável, além de menus expansíveis com `AnimatePresence` que garantem uma transição fluida sem saltos de layout.

![preview-desktop](./public/desktop-preview.png)

---

## 📱 Estratégia Mobile-First (UX Adaptativa)
A responsividade do Velluto não é apenas visual, é funcional. Em vez de dropdowns complexos, implementei uma barra de filtros no catálogo (`/shop`) com scroll horizontal nativo (`snap-x`), otimizando a navegação com o polegar. As imagens utilizam o componente `<Image>` do Next.js com *Lazy Loading* agressivo para manter a performance em redes móveis.

![preview-mobile](./public/mobile-preview.png)

---

## ✨ Destaques de Engenharia
* **🛒 Cartão de Compras Inteligente:** Lógica completa de CRUD no front-end com cálculos automáticos de subtotal e frete.
* **🚀 Performance 60FPS:** Interações magnéticas e feedbacks visuais otimizados para não sobrecarregar a main thread.
* **💎 Design System Customizado:** Uso de variáveis CSS inline para controle preciso de espaçamentos e cores "Quiet Luxury".

---

## 🚀 Como rodar localmente

```bash
# 1. Clone o repositório
git clone [https://github.com/devLeo3301/camisaria-landing-page.git](https://github.com/devLeo3301/camisaria-landing-page.git)

# 2. Acesse a pasta
cd camisaria-landing-page

# 3. Instale e rode
npm install
npm run dev