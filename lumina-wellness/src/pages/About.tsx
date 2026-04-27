import React from "react";
import { motion } from "motion/react";
import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const reviews = [
    {
      name: "佐藤 美咲",
      role: "パートナー",
      text: "Luminaの製品を使い始めてから、毎朝鏡を見るのが楽しみになりました。自分の体験を無理なく伝えることで、新しい繋がりが生まれています。",
      avatar: "https://picsum.photos/seed/avatar1/100/100"
    },
    {
      name: "田中 健一",
      role: "パートナー",
      text: "仕事の合間に少しずつ活動していますが、生活に良いリズムができました。充実したサポートのおかげで、初心者でも安心して取り組めています。",
      avatar: "https://picsum.photos/seed/avatar2/100/100"
    },
    {
      name: "鈴木 陽子",
      role: "パートナー",
      text: "子育てを優先しながら、自分のペースで活動できるのが魅力です。製品の良さを共感し合える仲間との時間は、私の大切な活力になっています。",
      avatar: "https://picsum.photos/seed/avatar3/100/100"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="py-24 bg-linear-to-br from-sky-50/50 via-white to-amber-50/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h1 className="text-5xl md:text-7xl font-serif font-bold mb-10">私たちの想い</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Lumina Wellnessは、単なる製品の提供にとどまりません。私たちは、一人ひとりが持つ本来の輝きを呼び覚まし、心身ともに豊かな人生を送るためのパートナーでありたいと考えています。
              </p>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                自然の恵みと科学の力を融合させ、妥協のない品質を追求し続けること。そして、その喜びを分かち合うことで、新しい価値を創造していくこと。それが私たちの使命です。
              </p>
              <div className="grid grid-cols-2 gap-10">
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-bold text-3xl font-serif">徹底した</h4>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider mt-2">品質管理体制</p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-bold text-3xl font-serif">自然由来</h4>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider mt-2">成分へのこだわり</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-[60px] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 aspect-video md:aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000" 
                  alt="Philosophy" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">パートナーの声</h2>
            <p className="text-muted-foreground text-xl">
              全国各地で、多くのパートナーがLuminaと共に新しい人生を歩み始めています。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {reviews.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full border-none bg-background p-10 rounded-[40px] shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex text-yellow-500 mb-8">
                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={18} fill="currentColor" />)}
                  </div>
                  <p className="text-xl mb-10 italic leading-relaxed">"{r.text}"</p>
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-full overflow-hidden">
                      <img src={r.avatar} alt={r.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{r.name}</h4>
                      <p className="text-xs text-primary font-semibold uppercase tracking-widest mt-1">{r.role}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
