import React from "react";
import { motion } from "motion/react";
import { 
  Leaf, 
  ChevronRight, 
  Star,
  CheckCircle2,
  TrendingUp,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -z-10 rounded-l-[100px] transform translate-x-20" />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -top-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" 
      />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="outline" className="mb-4 border-primary text-primary px-4 py-1 rounded-full bg-primary/5">
            次世代のウェルネス
          </Badge>
          <h1 className="text-6xl md:text-8xl font-serif font-bold leading-[1.1] mb-6">
            内側から輝く、<br />
            真の美しさ。
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg">
            厳選された天然成分と最新の科学が融合。Luminaは、あなたの健康と美しさを最大限に引き出し、自分らしいライフスタイルへの道も提供します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="rounded-full px-8 h-14 text-lg" asChild>
              <Link to="/products">製品を見る <ChevronRight className="ml-2" size={20} /></Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg" asChild>
              <Link to="/opportunity">ビジネスを始める</Link>
            </Button>
          </div>
          
          <Link
            to="/partners"
            className="mt-12 flex items-center gap-4 rounded-2xl p-2 -m-2 transition-colors hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring group"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden">
                  <img 
                    src={`https://picsum.photos/seed/user${i}/100/100`} 
                    alt="" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
            <div className="text-sm text-left">
              <div className="flex text-yellow-500 mb-0.5">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="font-medium group-hover:text-primary underline-offset-4 group-hover:underline">
                5,000人以上のパートナーが活躍中
              </p>
              <span className="sr-only">パートナーの声のページへ</span>
            </div>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl aspect-[4/5]">
            <img 
              src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=1000" 
              alt="Wellness" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 z-20 bg-background p-6 rounded-2xl shadow-xl border max-w-[200px]"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-green-100 text-green-700 rounded-full flex items-center justify-center">
                <CheckCircle2 size={18} />
              </div>
              <span className="font-bold text-sm">厳選された天然成分</span>
            </div>
            <p className="text-xs text-muted-foreground">
              私たちは品質に妥協しません。独自の基準を設け、素材選びから製造まで責任を持って取り組んでいます。
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div>
      <Hero />
      {/* Other sections can be added here as previews or full sections */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif font-bold mb-8">Lumina Wellnessへようこそ</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            私たちは、自然の力と科学の融合を通じて、あなたの本来の美しさを引き出すお手伝いをします。
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-primary/5">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Leaf size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold mb-4">高品質な製品</h3>
              <p className="text-muted-foreground text-sm">厳選された成分のみを使用し、あなたの健康をサポートします。</p>
            </div>
            <div className="p-8 rounded-3xl bg-primary/5">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold mb-4">ビジネスチャンス</h3>
              <p className="text-muted-foreground text-sm">自分らしい働き方で、理想のライフスタイルを実現しましょう。</p>
            </div>
            <div className="p-8 rounded-3xl bg-primary/5">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold mb-4">共に歩む仲間</h3>
              <p className="text-muted-foreground text-sm">同じ志を持つコミュニティが、あなたの成長を支えます。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
