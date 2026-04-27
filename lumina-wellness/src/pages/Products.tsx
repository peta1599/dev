import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PRODUCTS } from "../constants/products";

interface ProductCardProps {
  id: string;
  title: string;
  category: string;
  price: string;
  image: string;
  delay: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, category, price, image, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow group">
        <div className="aspect-square overflow-hidden relative">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 right-4">
            <Button size="icon" variant="secondary" className="rounded-full bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
              <Leaf size={18} className="text-primary" />
            </Button>
          </div>
        </div>
        <CardHeader className="p-4">
          <div className="flex justify-between items-start mb-1">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">{category}</span>
            <span className="font-serif font-bold text-primary">{price}</span>
          </div>
          <CardTitle className="text-xl font-serif">{title}</CardTitle>
        </CardHeader>
        <CardFooter className="p-4 pt-0">
          <Button variant="ghost" className="w-full justify-between group/btn p-0 hover:bg-transparent" asChild>
            <Link to={`/products/${id}`}>
              詳細を見る <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const Products = () => {
  return (
    <section className="py-24 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">製品ラインナップ</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            自然の恵みを最大限に活かし、科学的なアプローチで開発されたLuminaの製品。
            あなたの健康と美しさを、内側からサポートします。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {PRODUCTS.map((p, i) => (
            <ProductCard 
              key={p.id} 
              id={p.id}
              title={p.title}
              category={p.category}
              price={p.price}
              image={p.image}
              delay={i * 0.05} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
