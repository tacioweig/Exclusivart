import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, ShoppingCart, Instagram, Facebook, WhatsApp, Loader2 } from 'lucide-react';
import Image from 'next/image';

// Tema personalizável
const theme = {
  primary: "pink-600",
  secondary: "pink-100",
  accent: "pink-500",
};

// Componente de imagem com loading
const ProductImage = ({ src, alt }) => {
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <div className="relative aspect-square w-full bg-gray-100 rounded-lg overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  );
};

const ProductCard = ({ title, description, price, code, category, image }) => (
  <Card className="w-full max-w-sm mx-auto hover:shadow-lg transition-shadow duration-300">
    <div className="p-4">
      <ProductImage src={image} alt={title} />
      <h3 className="text-lg font-semibold mb-2 mt-4">{title}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      <div className="flex justify-between items-center mb-2">
        <span className="text-lg font-bold text-gray-900">R$ {price}</span>
        <span className="text-sm text-gray-500">Código: {code}</span>
      </div>
      <div className="flex gap-2">
        <Button 
          className={`w-full bg-${theme.primary} hover:bg-${theme.accent}`}
          onClick={() => window.open(`https://wa.me/5511999999999?text=Olá! Gostaria de informações sobre o topo de bolo ${code} - ${title}`)}
        >
          <WhatsApp className="w-4 h-4 mr-2" />
          Solicitar
        </Button>
        <Button variant="outline" size="icon" className={`hover:bg-${theme.secondary}`}>
          <Heart className="w-4 h-4" />
        </Button>
      </div>
    </div>
  </Card>
);

const products = {
  casamentos: [
    {
      title: "Topo Clássico Romântico",
      description: "Topo de bolo elegante para casamentos com acabamento em dourado",
      price: "129,90",
      code: "CAS001",
      image: "/images/casamento-classico.jpg"
    },
    {
      title: "Topo Minimalista",
      description: "Design moderno e clean para casamentos contemporâneos",
      price: "99,90",
      code: "CAS002",
      image: "/images/casamento-minimalista.jpg"
    }
  ],
  aniversarios: [
    {
      title: "Topo Personalizado Idade",
      description: "Topo comemorativo com número personalizável",
      price: "79,90",
      code: "ANI001",
      image: "/images/aniversario-idade.jpg"
    },
    {
      title: "Topo Festa Adulto",
      description: "Design elegante para festas de adultos",
      price: "89,90",
      code: "ANI002",
      image: "/images/aniversario-adulto.jpg"
    }
  ],
  infantis: [
    {
      title: "Topo Super-Heróis",
      description: "Topo temático com seus heróis favoritos",
      price: "89,90",
      code: "INF001",
      image: "/images/infantil-herois.jpg"
    },
    {
      title: "Topo Princesas",
      description: "Topo encantado para festas de princesas",
      price: "89,90",
      code: "INF002",
      image: "/images/infantil-princesas.jpg"
    }
  ]
};

const Header = () => (
  <header className="bg-white shadow-sm sticky top-0 z-10">
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center">Catálogo de Topos de Bolo</h1>
      <p className="text-center text-gray-600 mt-2">Encontre o topo perfeito para sua celebração</p>
    </div>
  </header>
);

const Footer = () => (
  <footer className="bg-white border-t mt-12">
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold mb-4">Como Fazer Pedidos</h3>
          <p className="text-gray-600">
            Clique no botão "Solicitar" do produto desejado ou entre em contato diretamente pelos nossos canais.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Contato</h3>
          <Button 
            variant="outline" 
            className="mb-2"
            onClick={() => window.open('https://wa.me/5511999999999')}
          >
            <WhatsApp className="w-4 h-4 mr-2" />
            (11) 99999-9999
          </Button>
          <p className="text-gray-600">
            Email: contato@toposdebolo.com.br
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Redes Sociais</h3>
          <div className="flex gap-4">
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => window.open('https://instagram.com/toposdebolo')}
            >
              <Instagram className="w-4 h-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => window.open('https://facebook.com/toposdebolo')}
            >
              <Facebook className="w-4 h-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => window.open('https://wa.me/5511999999999')}
            >
              <WhatsApp className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

const CatalogPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <Tabs defaultValue="casamentos" className="w-full">
          <TabsList className="w-full justify-start mb-8">
            <TabsTrigger value="casamentos">Casamentos</TabsTrigger>
            <TabsTrigger value="aniversarios">Aniversários</TabsTrigger>
            <TabsTrigger value="infantis">Infantis</TabsTrigger>
          </TabsList>

          {Object.entries(products).map(([category, items]) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((product, index) => (
                  <ProductCard key={index} {...product} category={category} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default CatalogPage;