import React from "react";
import { motion } from "motion/react";
import { Newspaper, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const items = [
  {
    date: "2026.04.10",
    title: "春のウェルネスキャンペーン開催のお知らせ",
    excerpt:
      "期間限定で人気のサプリメントラインを特別価格でご案内します。パートナー向け販促キットも同時配布します。",
  },
  {
    date: "2026.03.28",
    title: "新製品「Lumina Glow」の発売について",
    excerpt:
      "美容と内側からのケアを両立した新シリーズを発売しました。成分・こだわり製法についてもご紹介します。",
  },
  {
    date: "2026.03.05",
    title: "オンライン説明会の日程追加",
    excerpt:
      "ご希望の方がビジネスモデルを理解しやすいよう、週末枠を追加しました。録画視聴もご利用いただけます。",
  },
];

const News = () => {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-14 text-center"
        >
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary rounded-full">
            <Newspaper className="size-3.5 mr-1.5" />
            お知らせ
          </Badge>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-4">ニュース</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Lumina Wellnessからの最新情報やキャンペーン、イベントのご案内です。
          </p>
        </motion.div>

        <ul className="space-y-6">
          {items.map((item, i) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="rounded-3xl border border-primary/10 bg-linear-to-br from-white to-sky-50/40 p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <Calendar className="size-4" />
                {item.date}
              </div>
              <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-3">{item.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{item.excerpt}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default News;
