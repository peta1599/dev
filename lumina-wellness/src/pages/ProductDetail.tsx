import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { 
  ChevronLeft, 
  CheckCircle2, 
  Leaf, 
  ShieldCheck, 
  Truck,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { PRODUCTS } from "../constants/products";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = PRODUCTS.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <h1 className="text-2xl font-serif font-bold mb-4">製品が見つかりませんでした</h1>
        <Button asChild>
          <Link to="/products">製品一覧に戻る</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <Button 
          variant="ghost" 
          className="mb-8 -ml-4 text-muted-foreground hover:text-primary"
          onClick={() => navigate(-1)}
        >
          <ChevronLeft className="mr-2" size={20} /> 戻る
        </Button>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-[40px] overflow-hidden shadow-xl aspect-square sticky top-32">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-4 border-primary text-primary px-4 py-1 rounded-full bg-primary/5">
              {product.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{product.title}</h1>
            <p className="text-3xl font-serif font-bold text-primary mb-8">{product.price}</p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              {product.description}
            </p>

            <div className="space-y-6 mb-12">
              <h3 className="text-xl font-serif font-bold">主な特徴</h3>
              <div className="grid gap-4">
                {product.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="rounded-full px-12 h-14 text-lg flex-1" asChild>
                <Link to="/register">今すぐ購入・登録 <ArrowRight className="ml-2" size={20} /></Link>
              </Button>
            </div>

            <Separator className="mb-12" />

            <div className="space-y-10">
              <section>
                <h3 className="text-xl font-serif font-bold mb-4 flex items-center gap-2">
                  <Leaf size={20} className="text-primary" /> 使用方法
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {product.usage}
                </p>
              </section>

              <section>
                <h3 className="text-xl font-serif font-bold mb-4 flex items-center gap-2">
                  <ShieldCheck size={20} className="text-primary" /> 全成分
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {product.ingredients}
                </p>
              </section>

              <section className="bg-primary/5 p-6 rounded-3xl flex items-center gap-6">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                  <Truck className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">全国送料無料</h4>
                  <p className="text-sm text-muted-foreground">定期購入なら、いつでも送料無料でお届けします。</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
