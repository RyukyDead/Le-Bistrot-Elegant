import React, { useState } from 'react';
import { ChefHat, Wine, Coffee, Soup, Star } from 'lucide-react';

type MenuItem = {
  name: string;
  description: string;
  price: string;
};

type MenuSection = {
  title: string;
  items: MenuItem[];
};

function App() {
  const [activeSection, setActiveSection] = useState('entradas');

  const menu = {
    entradas: {
      title: "Entradas",
      items: [
        {
          name: "Carpaccio de Filé Mignon",
          description: "Finas fatias de filé mignon, rúcula, parmesão e molho de mostarda dijon.",
          price: "R$ 45,00"
        },
        {
          name: "Bruschetta Clássica",
          description: "Pão italiano grelhado, tomates frescos, manjericão e azeite de oliva extravirgem.",
          price: "R$ 28,00"
        },
        {
          name: "Tartar de Salmão",
          description: "Salmão fresco, abacate, gergelim torrado e molho de yuzu.",
          price: "R$ 52,00"
        }
      ]
    },
    principais: {
      title: "Pratos Principais",
      items: [
        {
          name: "Risoto de Cogumelos Silvestres",
          description: "Arroz arbóreo, mix de cogumelos frescos, trufa branca e parmesão.",
          price: "R$ 78,00"
        },
        {
          name: "Filé Mignon ao Molho de Vinho Tinto",
          description: "Filé mignon grelhado, molho de vinho tinto redução, purê de batatas e legumes grelhados.",
          price: "R$ 120,00"
        },
        {
          name: "Linguini ao Frutos do Mar",
          description: "Massa fresca, camarões, lulas, mexilhões e molho de tomate caseiro.",
          price: "R$ 95,00"
        }
      ]
    },
    sobremesas: {
      title: "Sobremesas",
      items: [
        {
          name: "Cheesecake de Frutas Vermelhas",
          description: "Base de biscoito amanteigado, creme de queijo suave e calda de frutas vermelhas.",
          price: "R$ 32,00"
        },
        {
          name: "Petit Gateau",
          description: "Bolo de chocolate com núcleo derretido, acompanhado de sorvete de baunilha.",
          price: "R$ 38,00"
        },
        {
          name: "Torta de Limão Siciliano",
          description: "Massa crocante, creme de limão e merengue torrado.",
          price: "R$ 28,00"
        }
      ]
    },
    bebidas: {
      title: "Bebidas",
      items: [
        {
          name: "Vinho Tinto",
          description: "Malbec Argentino, 2019",
          price: "R$ 120,00 (taça) / R$ 280,00 (garrafa)"
        },
        {
          name: "Vinho Branco",
          description: "Sauvignon Blanc Chileno, 2021",
          price: "R$ 110,00 (taça) / R$ 260,00 (garrafa)"
        },
        {
          name: "Drinks Clássicos",
          description: "Negroni - R$ 42,00 | Mojito - R$ 38,00",
          price: ""
        }
      ]
    }
  };

  const MenuSection = ({ items }: { items: MenuItem[] }) => (
    <div className="grid gap-8">
      {items.map((item, index) => (
        <div key={index} className="border-b border-amber-100 pb-6 last:border-0">
          <div className="flex justify-between items-baseline">
            <h3 className="text-xl font-serif text-amber-900">{item.name}</h3>
            <span className="text-lg font-medium text-amber-800">{item.price}</span>
          </div>
          <p className="text-amber-700 mt-2 italic">{item.description}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <img 
              src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&auto=format&fit=crop&q=80" 
              alt="Restaurant ambiance" 
              className="w-32 h-32 rounded-full object-cover shadow-lg"
            />
          </div>
          <h1 className="text-4xl font-serif text-amber-900 mb-2">Le Bistrot Élégant</h1>
          <p className="text-amber-700 italic">Cuisine raffinée dans une ambiance sophistiquée</p>
        </div>

        <nav className="flex justify-center space-x-8 mb-12">
          <button
            onClick={() => setActiveSection('entradas')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${
              activeSection === 'entradas'
                ? 'bg-amber-900 text-amber-50'
                : 'text-amber-900 hover:bg-amber-100'
            }`}
          >
            <Soup className="w-5 h-5" />
            <span>Entradas</span>
          </button>
          <button
            onClick={() => setActiveSection('principais')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${
              activeSection === 'principais'
                ? 'bg-amber-900 text-amber-50'
                : 'text-amber-900 hover:bg-amber-100'
            }`}
          >
            <ChefHat className="w-5 h-5" />
            <span>Principais</span>
          </button>
          <button
            onClick={() => setActiveSection('sobremesas')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${
              activeSection === 'sobremesas'
                ? 'bg-amber-900 text-amber-50'
                : 'text-amber-900 hover:bg-amber-100'
            }`}
          >
            <Coffee className="w-5 h-5" />
            <span>Sobremesas</span>
          </button>
          <button
            onClick={() => setActiveSection('bebidas')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${
              activeSection === 'bebidas'
                ? 'bg-amber-900 text-amber-50'
                : 'text-amber-900 hover:bg-amber-100'
            }`}
          >
            <Wine className="w-5 h-5" />
            <span>Bebidas</span>
          </button>
        </nav>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8">
          <div className="flex items-center space-x-2 mb-8">
            <Star className="w-6 h-6 text-amber-900" />
            <h2 className="text-2xl font-serif text-amber-900">{menu[activeSection as keyof typeof menu].title}</h2>
          </div>
          <MenuSection items={menu[activeSection as keyof typeof menu].items} />
        </div>

        <footer className="mt-12 text-center text-amber-700 space-y-2">
          <p className="italic">Todos os pratos podem ser adaptados para dietas vegetarianas ou restrições alimentares.</p>
          <p>Aceitamos todos os cartões de crédito e débito • Estacionamento gratuito</p>
        </footer>
      </div>
    </div>
  );
}

export default App;