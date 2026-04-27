import React from "react";
import { motion } from "motion/react";
import { 
  TrendingUp, 
  Users, 
  Sparkles, 
  Leaf,
  CheckCircle2
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Opportunity = () => {
  const features = [
    {
      icon: <TrendingUp className="text-primary" />,
      title: "努力に応じた収益体系",
      description: "活動量や成果に基づいた透明性の高い報酬プラン。ご自身のペースで着実に歩むことができます。"
    },
    {
      icon: <Users className="text-primary" />,
      title: "実践的なサポート体制",
      description: "製品知識からコミュニケーションスキルまで、段階的なトレーニングプログラムをご用意しています。"
    },
    {
      icon: <Sparkles className="text-primary" />,
      title: "ライフスタイルとの両立",
      description: "家事や仕事の合間など、限られた時間でも無理なく続けられる仕組みを整えています。"
    },
    {
      icon: <Leaf className="text-primary" />,
      title: "商品の体験・お試し",
      description: "実際に製品を手に取り、その品質を納得いくまで体感できる機会を大切にしています。"
    }
  ];

  return (
    <section className="py-24 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="rounded-[40px] overflow-hidden aspect-square shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000" 
                  alt="Business Opportunity" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-8 -right-8 w-56 h-56 bg-white p-6 rounded-full shadow-lg flex flex-col items-center justify-center text-center border">
                <Badge className="mb-2 bg-amber-100 text-amber-800 hover:bg-amber-100 border-none">業界屈指の水準</Badge>
                <span className="text-4xl font-serif font-bold text-primary">30%</span>
                <span className="text-[10px] uppercase tracking-widest font-bold mb-1">平均還元率</span>
                <p className="text-[10px] text-muted-foreground leading-tight">一般的な小売利益率を<br/>大きく上回る還元設定</p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
              あなたの情熱を、<br />
              <span className="italic text-primary">ビジネスに変える。</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Luminaのパートナープログラムは、製品の良さを分かち合い、共に健やかな毎日を目指すコミュニティです。
              あなたの夢や目標に合わせて、自由なスタイルで活動を始めることができます。
            </p>

            <div className="space-y-10">
              {features.map((f, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-8"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 shadow-sm flex items-center justify-center shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold mb-3">{f.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{f.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-primary/5 rounded-[60px] p-12 md:p-24 text-center">
          <h2 className="text-4xl font-serif font-bold mb-8">まずは詳細を知ることから始めませんか？</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            具体的な報酬プランやサポート体制について、詳しくご説明いたします。
            無理な勧誘は一切ございませんので、お気軽にお問い合わせください。
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="rounded-full px-16 h-16 text-xl font-bold shadow-lg hover:shadow-xl transition-all" asChild>
              <Link to="/contact?topic=materials">詳細資料を請求する</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Opportunity;
